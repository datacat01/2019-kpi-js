/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-bgsizecover-boxsizing-csscalc-cssgradients-csspointerevents-csstransforms-flexbox-flexboxlegacy-fontface-mediaqueries-objectfit-opacity-requestanimationframe-svg-setclasses !*/
! function(e, t, n) {
    function r(e) {
        var t = S.className,
            n = Modernizr._config.classPrefix || "";
        if (C && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), C ? S.className.baseVal = t : S.className = t)
    }

    function s(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, r, o, i, a;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (r = s(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), x.push((r ? "" : "no-") + a.join("-"))
            }
    }

    function i() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function a(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function l() {
        var e = t.body;
        return e || (e = i(C ? "svg" : "body"), e.fake = !0), e
    }

    function u(e, n, r, s) {
        var o, a, u, f, c = "modernizr",
            d = i("div"),
            p = l();
        if (parseInt(r, 10))
            for (; r--;) u = i("div"), u.id = s ? s[r] : c + (r + 1), d.appendChild(u);
        return o = i("style"), o.type = "text/css", o.id = "s" + c, (p.fake ? p : d).appendChild(o), p.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = f, S.offsetHeight) : d.parentNode.removeChild(d), !!a
    }

    function f(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function c(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function d(e, t, n) {
        var r;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (r = t[e[o]], s(r, "function") ? c(r, n || t) : r);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(t, n, r) {
        var s;
        if ("getComputedStyle" in e) {
            s = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== s) r && (s = s.getPropertyValue(r));
            else if (o) {
                var i = o.error ? "error" : "log";
                o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else s = !n && t.currentStyle && t.currentStyle[r];
        return s
    }

    function g(t, r) {
        var s = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; s--;)
                if (e.CSS.supports(p(t[s]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; s--;) o.push("(" + p(t[s]) + ":" + r + ")");
            return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == m(e, null, "position")
            })
        }
        return n
    }

    function v(e, t, r, o) {
        function l() {
            c && (delete A.style, delete A.modElem)
        }
        if (o = s(o, "undefined") ? !1 : o, !s(r, "undefined")) {
            var u = g(e, r);
            if (!s(u, "undefined")) return u
        }
        for (var c, d, p, m, v, y = ["modernizr", "tspan", "samp"]; !A.style && y.length;) c = !0, A.modElem = i(y.shift()), A.style = A.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], v = A.style[m], f(m, "-") && (m = a(m)), A.style[m] !== n) {
                if (o || s(r, "undefined")) return l(), "pfx" == t ? m : !0;
                try {
                    A.style[m] = r
                } catch (h) {}
                if (A.style[m] != v) return l(), "pfx" == t ? m : !0
            } return l(), !1
    }

    function y(e, t, n, r, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + P.join(i + " ") + i).split(" ");
        return s(t, "string") || s(t, "undefined") ? v(a, t, r, o) : (a = (e + " " + N.join(i + " ") + i).split(" "), d(a, t, n))
    }

    function h(e, t, r) {
        return y(e, n, n, t, r)
    }
    var x = [],
        b = [],
        w = {
            _version: "3.5.0",
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
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = w, Modernizr = new Modernizr, Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var S = t.documentElement,
        C = "svg" === S.nodeName.toLowerCase();
    Modernizr.addTest("csspointerevents", function() {
        var e = i("a").style;
        return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
    });
    var T = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = T, Modernizr.addTest("csscalc", function() {
        var e = "width:",
            t = "calc(10px);",
            n = i("a");
        return n.style.cssText = e + T.join(t + e), !!n.style.length
    }), Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", s = 0, o = T.length - 1; o > s; s++) e = 0 === s ? "to " : "", r += t + T[s] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var a = i("a"),
            l = a.style;
        return l.cssText = r, ("" + l.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("opacity", function() {
        var e = i("a").style;
        return e.cssText = T.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    });
    var _ = w.testStyles = u,
        z = function() {
            var e = navigator.userAgent,
                t = e.match(/w(eb)?osbrowser/gi),
                n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
            return t || n
        }();
    z ? Modernizr.addTest("fontface", !1) : _('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var r = t.getElementById("smodernizr"),
            s = r.sheet || r.styleSheet,
            o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "",
            i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i)
    });
    var E = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return u("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    w.mq = E, Modernizr.addTest("mediaqueries", E("only all"));
    var k = "Moz O ms Webkit",
        P = w._config.usePrefixes ? k.split(" ") : [];
    w._cssomPrefixes = P;
    var j = function(t) {
        var r, s = T.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var i = 0; s > i; i++) {
            var a = T[i],
                l = a.toUpperCase() + "_" + r;
            if (l in o) return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
    };
    w.atRule = j;
    var N = w._config.usePrefixes ? k.toLowerCase().split(" ") : [];
    w._domPrefixes = N;
    var R = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete R.elem
    });
    var A = {
        style: R.elem.style
    };
    Modernizr._q.unshift(function() {
        delete A.style
    }), w.testAllProps = y;
    var q = w.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? j(e) : (-1 != e.indexOf("-") && (e = a(e)), t ? y(e, t, n) : y(e, "pfx"))
    };
    Modernizr.addTest("requestanimationframe", !!q("requestAnimationFrame", e), {
        aliases: ["raf"]
    }), Modernizr.addTest("objectfit", !!q("objectFit"), {
        aliases: ["object-fit"]
    }), w.testAllProps = h, Modernizr.addTest("backgroundsize", h("backgroundSize", "100%", !0)), Modernizr.addTest("bgsizecover", h("backgroundSize", "cover")), Modernizr.addTest("boxsizing", h("boxSizing", "border-box", !0) && (t.documentMode === n || t.documentMode > 7)), Modernizr.addTest("flexbox", h("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", h("boxDirection", "reverse", !0)), Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && h("transform", "scale(1)", !0)
    }), o(), r(x), delete w.addTest, delete w.addAsyncTest;
    for (var O = 0; O < Modernizr._q.length; O++) Modernizr._q[O]();
    e.Modernizr = Modernizr
}(window, document);