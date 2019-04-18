/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundblendmode-cssanimations-csscalc-csscolumns-cssfilters-cssgradients-cssmask-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-flexbox-generatedcontent-inlinesvg-multiplebgs-supports-svg-svgasimg-svgclippaths-svgfilters-touchevents-video-setclasses !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, i, s, a;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), x.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function i(e) {
        var t = P.className,
            n = Modernizr._config.classPrefix || "";
        if (E && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), E ? P.className.baseVal = t : P.className = t)
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function a(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }

    function l(e, t) {
        return e - 1 === t || e === t || e + 1 === t
    }

    function d(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, t) {
        if ("object" == typeof e)
            for (var n in e) N(e, n) && c(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                o = Modernizr[r[0]];
            if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function u() {
        var e = t.body;
        return e || (e = s(E ? "svg" : "body"), e.fake = !0), e
    }

    function f(e, n, r, o) {
        var i, a, l, d, c = "modernizr",
            f = s("div"),
            p = u();
        if (parseInt(r, 10))
            for (; r--;) l = s("div"), l.id = o ? o[r] : c + (r + 1), f.appendChild(l);
        return i = s("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : f).appendChild(i), p.appendChild(f), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), f.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = P.style.overflow, P.style.overflow = "hidden", P.appendChild(p)), a = n(f, e), p.fake ? (p.parentNode.removeChild(p), P.style.overflow = d, P.offsetHeight) : f.parentNode.removeChild(f), !!a
    }

    function p(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function h(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function m(e, t, n) {
        var o;
        for (var i in e)
            if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? h(o, n || t) : o);
        return !1
    }

    function g(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function v(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(g(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + g(t[o]) + ":" + r + ")");
            return i = i.join(" or "), f("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == a(e, null, "position")
            })
        }
        return n
    }

    function y(e, t, o, i) {
        function a() {
            c && (delete L.style, delete L.modElem)
        }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var l = v(e, o);
            if (!r(l, "undefined")) return l
        }
        for (var c, u, f, h, m, g = ["modernizr", "tspan", "samp"]; !L.style && g.length;) c = !0, L.modElem = s(g.shift()), L.style = L.modElem.style;
        for (f = e.length, u = 0; f > u; u++)
            if (h = e[u], m = L.style[h], p(h, "-") && (h = d(h)), L.style[h] !== n) {
                if (i || r(o, "undefined")) return a(), "pfx" == t ? h : !0;
                try {
                    L.style[h] = o
                } catch (y) {}
                if (L.style[h] != m) return a(), "pfx" == t ? h : !0
            } return a(), !1
    }

    function w(e, t, n, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + j.join(s + " ") + s).split(" ");
        return r(t, "string") || r(t, "undefined") ? y(a, t, o, i) : (a = (e + " " + $.join(s + " ") + s).split(" "), m(a, t, n))
    }

    function T(e, t, r) {
        return w(e, n, n, t, r)
    }
    var x = [],
        b = [],
        S = {
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
    Modernizr.prototype = S, Modernizr = new Modernizr, Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var C = "CSS" in e && "supports" in e.CSS,
        _ = "supportsCSS" in e;
    Modernizr.addTest("supports", C || _), Modernizr.addTest("svgfilters", function() {
        var t = !1;
        try {
            t = "SVGFEColorMatrixElement" in e && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
        } catch (n) {}
        return t
    });
    var P = t.documentElement,
        E = "svg" === P.nodeName.toLowerCase();
    Modernizr.addTest("audio", function() {
        var e = s("audio"),
            t = !1;
        try {
            t = !!e.canPlayType, t && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("video", function() {
        var e = s("video"),
            t = !1;
        try {
            t = !!e.canPlayType, t && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("multiplebgs", function() {
        var e = s("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("inlinesvg", function() {
        var e = s("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var z = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    S._prefixes = z, Modernizr.addTest("csscalc", function() {
        var e = "width:",
            t = "calc(10px);",
            n = s("a");
        return n.style.cssText = e + z.join(t + e), !!n.style.length
    }), Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", o = 0, i = z.length - 1; i > o; o++) e = 0 === o ? "to " : "", r += t + z[o] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var a = s("a"),
            l = a.style;
        return l.cssText = r, ("" + l.backgroundImage).indexOf("gradient") > -1
    });
    var k = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(k.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    });
    var N;
    ! function() {
        var e = {}.hasOwnProperty;
        N = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), S._l = {}, S.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, S._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        S.addTest = c
    }), Modernizr.addTest("svgasimg", t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));
    var R = S.testStyles = f;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", z.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            R(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    }), R('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 6)
    }), R("#modernizr { height: 50vh; }", function(t) {
        var n = parseInt(e.innerHeight / 2, 10),
            r = parseInt(a(t, null, "height"), 10);
        Modernizr.addTest("cssvhunit", r == n)
    }), R("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2],
            n = e.childNodes[1],
            r = e.childNodes[0],
            o = parseInt((n.offsetWidth - n.clientWidth) / 2, 10),
            i = r.clientWidth / 100,
            s = r.clientHeight / 100,
            d = parseInt(50 * Math.max(i, s), 10),
            c = parseInt(a(t, null, "width"), 10);
        Modernizr.addTest("cssvmaxunit", l(d, c) || l(d, c - o))
    }, 3), R("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2],
            n = e.childNodes[1],
            r = e.childNodes[0],
            o = parseInt((n.offsetWidth - n.clientWidth) / 2, 10),
            i = r.clientWidth / 100,
            s = r.clientHeight / 100,
            d = parseInt(50 * Math.min(i, s), 10),
            c = parseInt(a(t, null, "width"), 10);
        Modernizr.addTest("cssvminunit", l(d, c) || l(d, c - o))
    }, 3), R("#modernizr { width: 50vw; }", function(t) {
        var n = parseInt(e.innerWidth / 2, 10),
            r = parseInt(a(t, null, "width"), 10);
        Modernizr.addTest("cssvwunit", r == n)
    });
    var I = "Moz O ms Webkit",
        j = S._config.usePrefixes ? I.split(" ") : [];
    S._cssomPrefixes = j;
    var B = function(t) {
        var r, o = z.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + t;
        for (var s = 0; o > s; s++) {
            var a = z[s],
                l = a.toUpperCase() + "_" + r;
            if (l in i) return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
    };
    S.atRule = B;
    var $ = S._config.usePrefixes ? I.toLowerCase().split(" ") : [];
    S._domPrefixes = $;
    var A = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete A.elem
    });
    var L = {
        style: A.elem.style
    };
    Modernizr._q.unshift(function() {
            delete L.style
        }), S.testAllProps = w, S.testAllProps = T, Modernizr.addTest("cssanimations", T("animationName", "a", !0)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    t = T("columnCount");
                try {
                    e = !!t, e && (e = new Boolean(e))
                } catch (n) {}
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = T("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || T(n[r])), Modernizr.addTest("csscolumns." + e, t)
        }(), Modernizr.addTest("cssfilters", function() {
            if (Modernizr.supports) return T("filter", "blur(2px)");
            var e = s("a");
            return e.style.cssText = z.join("filter:blur(2px); "), !!e.style.length && (t.documentMode === n || t.documentMode > 9)
        }), Modernizr.addTest("flexbox", T("flexBasis", "1px", !0)), Modernizr.addTest("cssmask", T("maskRepeat", "repeat-x", !0)), Modernizr.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && T("transform", "scale(1)", !0)
        }), Modernizr.addTest("csstransforms3d", function() {
            var e = !!T("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in P.style)) {
                var n, r = "#modernizr{width:0;height:0}";
                Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", R(r + n, function(t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                })
            }
            return e
        }), Modernizr.addTest("csstransitions", T("transition", "all", !0));
    var O = S.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? B(e) : (-1 != e.indexOf("-") && (e = d(e)), t ? w(e, t, n) : w(e, "pfx"))
    };
    Modernizr.addTest("backgroundblendmode", O("backgroundBlendMode", "text")), o(), i(x), delete S.addTest, delete S.addAsyncTest;
    for (var M = 0; M < Modernizr._q.length; M++) Modernizr._q[M]();
    e.Modernizr = Modernizr
}(window, document);