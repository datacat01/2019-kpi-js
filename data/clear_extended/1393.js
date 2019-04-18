/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-cssmask-flexbox-flexboxtweener-history-inlinesvg-input-inputtypes-placeholder-svg-touchevents-addtest-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function i() {
        var e, t, n, i, o, a, s;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) a = e[o], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = i : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = i), x.push((i ? "" : "no-") + s.join("-"))
            }
    }

    function o(e) {
        var t = S.className,
            n = Modernizr._config.classPrefix || "";
        if (_ && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? S.className.baseVal = t : S.className = t)
    }

    function a(e, t) {
        if ("object" == typeof e)
            for (var n in e) k(e, n) && a(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                i = Modernizr[r[0]];
            if (2 == r.length && (i = i[r[1]]), "undefined" != typeof i) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function l(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function f() {
        var e = t.body;
        return e || (e = s(_ ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, n, r, i) {
        var o, a, l, u, c = "modernizr",
            d = s("div"),
            p = f();
        if (parseInt(r, 10))
            for (; r--;) l = s("div"), l.id = i ? i[r] : c + (r + 1), d.appendChild(l);
        return o = s("style"), o.type = "text/css", o.id = "s" + c, (p.fake ? p : d).appendChild(o), p.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = u, S.offsetHeight) : d.parentNode.removeChild(d), !!a
    }

    function d(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function p(e, t, n) {
        var i;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (i = t[e[o]], r(i, "function") ? d(i, n || t) : i);
        return !1
    }

    function m(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function h(t, r) {
        var i = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; i--;)
                if (e.CSS.supports(m(t[i]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; i--;) o.push("(" + m(t[i]) + ":" + r + ")");
            return o = o.join(" or "), c("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function g(e, t, i, o) {
        function a() {
            c && (delete D.style, delete D.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(i, "undefined")) {
            var f = h(e, i);
            if (!r(f, "undefined")) return f
        }
        for (var c, d, p, m, g, v = ["modernizr", "tspan", "samp"]; !D.style && v.length;) c = !0, D.modElem = s(v.shift()), D.style = D.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], g = D.style[m], l(m, "-") && (m = u(m)), D.style[m] !== n) {
                if (o || r(i, "undefined")) return a(), "pfx" == t ? m : !0;
                try {
                    D.style[m] = i
                } catch (y) {}
                if (D.style[m] != g) return a(), "pfx" == t ? m : !0
            } return a(), !1
    }

    function v(e, t, n, i, o) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + L.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(s, t, i, o) : (s = (e + " " + T.join(a + " ") + a).split(" "), p(s, t, n))
    }

    function y(e, t, r) {
        return v(e, n, n, t, r)
    }
    var x = [],
        C = [],
        b = {
            _version: "3.3.1",
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
                C.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                C.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = b, Modernizr = new Modernizr, Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1
    }), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var w = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    b._prefixes = w;
    var S = t.documentElement,
        _ = "svg" === S.nodeName.toLowerCase();
    _ || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = x.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function i(e, t) {
            var n = x.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), x.elements = n + " " + e, u(t)
        }

        function o(e) {
            var t = y[e[g]];
            return t || (t = {}, v++, e[g] = v, y[v] = t), t
        }

        function a(e, n, r) {
            if (n || (n = t), c) return n.createElement(e);
            r || (r = o(n));
            var i;
            return i = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !i.canHaveChildren || m.test(e) || i.tagUrn ? i : r.frag.appendChild(i)
        }

        function s(e, n) {
            if (e || (e = t), c) return e.createDocumentFragment();
            n = n || o(e);
            for (var i = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) i.createElement(s[a]);
            return i
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return x.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(x, t.frag)
        }

        function u(e) {
            e || (e = t);
            var r = o(e);
            return !x.shivCSS || f || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || l(e, r), e
        }
        var f, c, d = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g = "_html5shiv",
            v = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", f = "hidden" in e, c = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                f = !0, c = !0
            }
        }();
        var x = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: d,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: c,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: a,
            createDocumentFragment: s,
            addElements: i
        };
        e.html5 = x, u(t), "object" == typeof module && module.exports && (module.exports = x)
    }("undefined" != typeof e ? e : this, t);
    var E = "Moz O ms Webkit",
        T = b._config.usePrefixes ? E.toLowerCase().split(" ") : [];
    b._domPrefixes = T;
    var k;
    ! function() {
        var e = {}.hasOwnProperty;
        k = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), b._l = {}, b.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, b._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        b.addTest = a
    }), Modernizr.addTest("placeholder", "placeholder" in s("input") && "placeholder" in s("textarea")), Modernizr.addTest("inlinesvg", function() {
        var e = s("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var N = s("input"),
        j = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        P = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++) P[t[n]] = !!(t[n] in N);
        return P.list && (P.list = !(!s("datalist") || !e.HTMLDataListElement)), P
    }(j);
    var z = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        A = {};
    Modernizr.inputtypes = function(e) {
        for (var r, i, o, a = e.length, s = "1)", l = 0; a > l; l++) N.setAttribute("type", r = e[l]), o = "text" !== N.type && "style" in N, o && (N.value = s, N.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && N.style.WebkitAppearance !== n ? (S.appendChild(N), i = t.defaultView, o = i.getComputedStyle && "textfield" !== i.getComputedStyle(N, null).WebkitAppearance && 0 !== N.offsetHeight, S.removeChild(N)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? N.checkValidity && N.checkValidity() === !1 : N.value != s)), A[e[l]] = !!o;
        return A
    }(z);
    var L = b._config.usePrefixes ? E.split(" ") : [];
    b._cssomPrefixes = L;
    var O = b.testStyles = c;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", w.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            O(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    });
    var M = function(t) {
        var r, i = w.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var a = 0; i > a; a++) {
            var s = w[a],
                l = s.toUpperCase() + "_" + r;
            if (l in o) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    b.atRule = M;
    var F = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete F.elem
    });
    var D = {
        style: F.elem.style
    };
    Modernizr._q.unshift(function() {
        delete D.style
    });
    b.testProp = function(e, t, r) {
        return g([e], n, t, r)
    };
    b.testAllProps = v, b.testAllProps = y, Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("flexboxtweener", y("flexAlign", "end", !0)), Modernizr.addTest("cssmask", y("maskRepeat", "repeat-x", !0));
    var R = b.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? M(e) : (-1 != e.indexOf("-") && (e = u(e)), t ? v(e, t, n) : v(e, "pfx"))
    };
    Modernizr.addTest("backgroundblendmode", R("backgroundBlendMode", "text")), i(), o(x), delete b.addTest, delete b.addAsyncTest;
    for (var q = 0; q < Modernizr._q.length; q++) Modernizr._q[q]();
    e.Modernizr = Modernizr
}(window, document);