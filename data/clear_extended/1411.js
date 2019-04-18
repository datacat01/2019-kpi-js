! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function a() {
        var e = t.body;
        return e || (e = o(E ? "svg" : "body"), e.fake = !0), e
    }

    function i(e, n, r, i) {
        var s, l, u, c, f = "modernizr",
            d = o("div"),
            p = a();
        if (parseInt(r, 10))
            for (; r--;) u = o("div"), u.id = i ? i[r] : f + (r + 1), d.appendChild(u);
        return s = o("style"), s.type = "text/css", s.id = "s" + f, (p.fake ? p : d).appendChild(s), p.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), l = n(d, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = c, x.offsetHeight) : d.parentNode.removeChild(d), !!l
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function u(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var a = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (a) {
                var i = a.error ? "error" : "log";
                a[i].call(a, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }

    function c(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(l(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var a = []; o--;) a.push("(" + l(t[o]) + ":" + r + ")");
            return a = a.join(" or "), i("@supports (" + a + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == u(e, null, "position")
            })
        }
        return n
    }

    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function d(e, t, a, i) {
        function l() {
            d && (delete z.style, delete z.modElem)
        }
        if (i = !r(i, "undefined") && i, !r(a, "undefined")) {
            var u = c(e, a);
            if (!r(u, "undefined")) return u
        }
        for (var d, p, m, h, v, g = ["modernizr", "tspan", "samp"]; !z.style && g.length;) d = !0, z.modElem = o(g.shift()), z.style = z.modElem.style;
        for (m = e.length, p = 0; p < m; p++)
            if (h = e[p], v = z.style[h], s(h, "-") && (h = f(h)), z.style[h] !== n) {
                if (i || r(a, "undefined")) return l(), "pfx" != t || h;
                try {
                    z.style[h] = a
                } catch (e) {}
                if (z.style[h] != v) return l(), "pfx" != t || h
            } return l(), !1
    }

    function p(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function m(e, t, n) {
        var o;
        for (var a in e)
            if (e[a] in t) return !1 === n ? e[a] : (o = t[e[a]], r(o, "function") ? p(o, n || t) : o);
        return !1
    }

    function h(e, t, n, o, a) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + N.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? d(s, t, o, a) : (s = (e + " " + w.join(i + " ") + i).split(" "), m(s, t, n))
    }

    function v(e, t, r) {
        return h(e, n, n, t, r)
    }
    var g = [],
        y = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                g.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                g.push({
                    name: null,
                    fn: e
                })
            }
        },
        S = function() {};
    S.prototype = y, S = new S;
    var C = [],
        x = t.documentElement,
        E = "svg" === x.nodeName.toLowerCase(),
        b = "Moz O ms Webkit",
        w = y._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    y._domPrefixes = w;
    E || function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = y.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), y.elements = n + " " + e, u(t)
        }

        function a(e) {
            var t = g[e[h]];
            return t || (t = {}, v++, e[h] = v, g[v] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), f) return n.createElement(e);
            r || (r = a(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : m.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || p.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), f) return e.createDocumentFragment();
            n = n || a(e);
            for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; i < l; i++) o.createElement(s[i]);
            return o
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return y.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }

        function u(e) {
            e || (e = t);
            var r = a(e);
            return !y.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e
        }
        var c, f, d = e.html5 || {},
            p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv",
            v = 0,
            g = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, f = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (e) {
                c = !0, f = !0
            }
        }();
        var y = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3",
            shivCSS: !1 !== d.shivCSS,
            supportsUnknownElements: f,
            shivMethods: !1 !== d.shivMethods,
            type: "default",
            shivDocument: u,
            createElement: i,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = y, u(t), "object" == typeof module && module.exports && (module.exports = y)
    }(void 0 !== e ? e : this, t);
    var _ = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return i("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    y.mq = _;
    var N = y._config.usePrefixes ? b.split(" ") : [];
    y._cssomPrefixes = N;
    var T = {
        elem: o("modernizr")
    };
    S._q.push(function() {
        delete T.elem
    });
    var z = {
        style: T.elem.style
    };
    S._q.unshift(function() {
        delete z.style
    }), y.testAllProps = h;
    var P = function(t) {
        var r, o = k.length,
            a = e.CSSRule;
        if (void 0 === a) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), (r = t.replace(/-/g, "_").toUpperCase() + "_RULE") in a) return "@" + t;
        for (var i = 0; i < o; i++) {
            var s = k[i];
            if (s.toUpperCase() + "_" + r in a) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    y.atRule = P;
    var j = y.prefixed = function(e, t, n) {
            return 0 === e.indexOf("@") ? P(e) : (-1 != e.indexOf("-") && (e = f(e)), t ? h(e, t, n) : h(e, "pfx"))
        },
        k = (y.prefixedCSS = function(e) {
            var t = j(e);
            return t && l(t)
        }, y._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""]);
    y._prefixes = k, y.testAllProps = v;
    y.testProp = function(e, t, r) {
        return d([e], n, t, r)
    }, y.testStyles = i;
    S.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
    });
    var F = "CSS" in e && "supports" in e.CSS,
        M = "supportsCSS" in e;
    S.addTest("supports", F || M), S.addTest("csstransforms3d", function() {
            return !!v("perspective", "1px", !0)
        }), S.addTest("csstransitions", v("transition", "all", !0)), S.addTest("flexbox", v("flexBasis", "1px", !0)), S.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), S.addTest("target", function() {
            var t = e.document;
            if (!("querySelectorAll" in t)) return !1;
            try {
                return t.querySelectorAll(":target"), !0
            } catch (e) {
                return !1
            }
        }),
        function() {
            var e, t, n, o, a, i, s;
            for (var l in g)
                if (g.hasOwnProperty(l)) {
                    if (e = [], t = g[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], s = i.split("."), 1 === s.length ? S[s[0]] = o : (!S[s[0]] || S[s[0]] instanceof Boolean || (S[s[0]] = new Boolean(S[s[0]])), S[s[0]][s[1]] = o), C.push((o ? "" : "no-") + s.join("-"))
                }
        }(),
        function(e) {
            var t = x.className,
                n = S._config.classPrefix || "";
            if (E && (t = t.baseVal), S._config.enableJSClass) {
                var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(r, "$1" + n + "js$2")
            }
            S._config.enableClasses && (t += " " + n + e.join(" " + n), E ? x.className.baseVal = t : x.className = t)
        }(C), delete y.addTest, delete y.addAsyncTest;
    for (var A = 0; A < S._q.length; A++) S._q[A]();
    e.Modernizr = S
}(window, document);