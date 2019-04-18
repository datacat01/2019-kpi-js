! function(a, b, c) {
    function d(a, b) {
        return typeof a === b
    }

    function e(a) {
        var b = z.className,
            c = w._config.classPrefix || "";
        if (A && (b = b.baseVal), w._config.enableJSClass) {
            var d = new RegExp("(^|\\s)" + c + "no-js(\\s|$)");
            b = b.replace(d, "$1" + c + "js$2")
        }
        w._config.enableClasses && (b += " " + c + a.join(" " + c), A ? z.className.baseVal = b : z.className = b)
    }

    function f(a, b) {
        if ("object" == typeof a)
            for (var c in a) D(a, c) && f(c, a[c]);
        else {
            a = a.toLowerCase();
            var d = a.split("."),
                g = w[d[0]];
            if (2 == d.length && (g = g[d[1]]), void 0 !== g) return w;
            b = "function" == typeof b ? b() : b, 1 == d.length ? w[d[0]] = b : (!w[d[0]] || w[d[0]] instanceof Boolean || (w[d[0]] = new Boolean(w[d[0]])), w[d[0]][d[1]] = b), e([(b && 0 != b ? "" : "no-") + d.join("-")]), w._trigger(a, b)
        }
        return w
    }

    function g() {
        return "function" != typeof b.createElement ? b.createElement(arguments[0]) : A ? b.createElementNS.call(b, "http://www.w3.org/2000/svg", arguments[0]) : b.createElement.apply(b, arguments)
    }

    function h(a) {
        return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
            return b + c.toUpperCase()
        }).replace(/^-/, "")
    }

    function i(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function j() {
        var a = b.body;
        return a || (a = g(A ? "svg" : "body"), a.fake = !0), a
    }

    function k(a, c, d, e) {
        var f, h, i, k, l = "modernizr",
            m = g("div"),
            n = j();
        if (parseInt(d, 10))
            for (; d--;) i = g("div"), i.id = e ? e[d] : l + (d + 1), m.appendChild(i);
        return f = g("style"), f.type = "text/css", f.id = "s" + l, (n.fake ? n : m).appendChild(f), n.appendChild(m), f.styleSheet ? f.styleSheet.cssText = a : f.appendChild(b.createTextNode(a)), m.id = l, n.fake && (n.style.background = "", n.style.overflow = "hidden", k = z.style.overflow, z.style.overflow = "hidden", z.appendChild(n)), h = c(m, a), n.fake ? (n.parentNode.removeChild(n), z.style.overflow = k, z.offsetHeight) : m.parentNode.removeChild(m), !!h
    }

    function l(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }

    function m(a, b, c) {
        var e;
        for (var f in a)
            if (a[f] in b) return !1 === c ? a[f] : (e = b[a[f]], d(e, "function") ? l(e, c || b) : e);
        return !1
    }

    function n(a) {
        return a.replace(/([A-Z])/g, function(a, b) {
            return "-" + b.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function o(b, c, d) {
        var e;
        if ("getComputedStyle" in a) {
            e = getComputedStyle.call(a, b, c);
            var f = a.console;
            if (null !== e) d && (e = e.getPropertyValue(d));
            else if (f) {
                var g = f.error ? "error" : "log";
                f[g].call(f, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else e = !c && b.currentStyle && b.currentStyle[d];
        return e
    }

    function p(b, d) {
        var e = b.length;
        if ("CSS" in a && "supports" in a.CSS) {
            for (; e--;)
                if (a.CSS.supports(n(b[e]), d)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in a) {
            for (var f = []; e--;) f.push("(" + n(b[e]) + ":" + d + ")");
            return f = f.join(" or "), k("@supports (" + f + ") { #modernizr { position: absolute; } }", function(a) {
                return "absolute" == o(a, null, "position")
            })
        }
        return c
    }

    function q(a, b, e, f) {
        function j() {
            l && (delete S.style, delete S.modElem)
        }
        if (f = !d(f, "undefined") && f, !d(e, "undefined")) {
            var k = p(a, e);
            if (!d(k, "undefined")) return k
        }
        for (var l, m, n, o, q, r = ["modernizr", "tspan", "samp"]; !S.style && r.length;) l = !0, S.modElem = g(r.shift()), S.style = S.modElem.style;
        for (n = a.length, m = 0; m < n; m++)
            if (o = a[m], q = S.style[o], i(o, "-") && (o = h(o)), S.style[o] !== c) {
                if (f || d(e, "undefined")) return j(), "pfx" != b || o;
                try {
                    S.style[o] = e
                } catch (a) {}
                if (S.style[o] != q) return j(), "pfx" != b || o
            } return j(), !1
    }

    function r(a, b, c, e, f) {
        var g = a.charAt(0).toUpperCase() + a.slice(1),
            h = (a + " " + P.join(g + " ") + g).split(" ");
        return d(b, "string") || d(b, "undefined") ? q(h, b, e, f) : (h = (a + " " + C.join(g + " ") + g).split(" "), m(h, b, c))
    }

    function s(a, b, d) {
        return r(a, c, c, b, d)
    }
    var t = [],
        u = [],
        v = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(a, b) {
                var c = this;
                setTimeout(function() {
                    b(c[a])
                }, 0)
            },
            addTest: function(a, b, c) {
                u.push({
                    name: a,
                    fn: b,
                    options: c
                })
            },
            addAsyncTest: function(a) {
                u.push({
                    name: null,
                    fn: a
                })
            }
        },
        w = function() {};
    w.prototype = v, w = new w, w.addTest("applicationcache", "applicationCache" in a), w.addTest("geolocation", "geolocation" in navigator), w.addTest("history", function() {
        var b = navigator.userAgent;
        return (-1 === b.indexOf("Android 2.") && -1 === b.indexOf("Android 4.0") || -1 === b.indexOf("Mobile Safari") || -1 !== b.indexOf("Chrome") || -1 !== b.indexOf("Windows Phone") || "file:" === location.protocol) && (a.history && "pushState" in a.history)
    }), w.addTest("postmessage", "postMessage" in a);
    var x = !1;
    try {
        x = "WebSocket" in a && 2 === a.WebSocket.CLOSING
    } catch (a) {}
    w.addTest("websockets", x), w.addTest("localstorage", function() {
        var a = "modernizr";
        try {
            return localStorage.setItem(a, a), localStorage.removeItem(a), !0
        } catch (a) {
            return !1
        }
    }), w.addTest("sessionstorage", function() {
        var a = "modernizr";
        try {
            return sessionStorage.setItem(a, a), sessionStorage.removeItem(a), !0
        } catch (a) {
            return !1
        }
    }), w.addTest("websqldatabase", "openDatabase" in a), w.addTest("webworkers", "Worker" in a);
    var y = v._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    v._prefixes = y;
    var z = b.documentElement,
        A = "svg" === z.nodeName.toLowerCase(),
        B = "Moz O ms Webkit",
        C = v._config.usePrefixes ? B.toLowerCase().split(" ") : [];
    v._domPrefixes = C;
    var D;
    ! function() {
        var a = {}.hasOwnProperty;
        D = d(a, "undefined") || d(a.call, "undefined") ? function(a, b) {
            return b in a && d(a.constructor.prototype[b], "undefined")
        } : function(b, c) {
            return a.call(b, c)
        }
    }(), v._l = {}, v.on = function(a, b) {
        this._l[a] || (this._l[a] = []), this._l[a].push(b), w.hasOwnProperty(a) && setTimeout(function() {
            w._trigger(a, w[a])
        }, 0)
    }, v._trigger = function(a, b) {
        if (this._l[a]) {
            var c = this._l[a];
            setTimeout(function() {
                var a;
                for (a = 0; a < c.length; a++)(0, c[a])(b)
            }, 0), delete this._l[a]
        }
    }, w._q.push(function() {
        v.addTest = f
    });
    var E = function() {
        function a(a, b) {
            var e;
            return !!a && (b && "string" != typeof b || (b = g(b || "div")), a = "on" + a, e = a in b, !e && d && (b.setAttribute || (b = g("div")), b.setAttribute(a, ""), e = "function" == typeof b[a], b[a] !== c && (b[a] = c), b.removeAttribute(a)), e)
        }
        var d = !("onblur" in b.documentElement);
        return a
    }();
    v.hasEvent = E, w.addTest("hashchange", function() {
        return !1 !== E("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }), w.addTest("audio", function() {
        var a = g("audio"),
            b = !1;
        try {
            b = !!a.canPlayType, b && (b = new Boolean(b), b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), b.mp3 = a.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), b.opus = a.canPlayType('audio/ogg; codecs="opus"') || a.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), b.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), b.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (a) {}
        return b
    }), w.addTest("canvas", function() {
        var a = g("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }), w.addTest("canvastext", function() {
        return !1 !== w.canvas && "function" == typeof g("canvas").getContext("2d").fillText
    }), w.addTest("video", function() {
        var a = g("video"),
            b = !1;
        try {
            b = !!a.canPlayType, b && (b = new Boolean(b), b.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), b.vp9 = a.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), b.hls = a.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (a) {}
        return b
    }), w.addTest("webgl", function() {
        var b = g("canvas"),
            c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
        return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
    }), w.addTest("cssgradients", function() {
        for (var a, b = "background-image:", c = "", d = 0, e = y.length - 1; d < e; d++) a = 0 === d ? "to " : "", c += b + y[d] + "linear-gradient(" + a + "left top, #9f9, white);";
        w._config.usePrefixes && (c += b + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
        var f = g("a"),
            h = f.style;
        return h.cssText = c, ("" + h.backgroundImage).indexOf("gradient") > -1
    }), w.addTest("multiplebgs", function() {
        var a = g("a").style;
        return a.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(a.background)
    }), w.addTest("opacity", function() {
        var a = g("a").style;
        return a.cssText = y.join("opacity:.55;"), /^0.55$/.test(a.opacity)
    }), w.addTest("rgba", function() {
        var a = g("a").style;
        return a.cssText = "background-color:rgba(150,255,150,.5)", ("" + a.backgroundColor).indexOf("rgba") > -1
    }), w.addTest("inlinesvg", function() {
        var a = g("div");
        return a.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && a.firstChild && a.firstChild.namespaceURI)
    });
    var F = g("input"),
        G = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        H = {};
    w.input = function(b) {
        for (var c = 0, d = b.length; c < d; c++) H[b[c]] = !!(b[c] in F);
        return H.list && (H.list = !(!g("datalist") || !a.HTMLDataListElement)), H
    }(G);
    var I = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        J = {};
    w.inputtypes = function(a) {
        for (var d, e, f, g = a.length, h = 0; h < g; h++) F.setAttribute("type", d = a[h]), f = "text" !== F.type && "style" in F, f && (F.value = "1)", F.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(d) && F.style.WebkitAppearance !== c ? (z.appendChild(F), e = b.defaultView, f = e.getComputedStyle && "textfield" !== e.getComputedStyle(F, null).WebkitAppearance && 0 !== F.offsetHeight, z.removeChild(F)) : /^(search|tel)$/.test(d) || (f = /^(url|email)$/.test(d) ? F.checkValidity && !1 === F.checkValidity() : "1)" != F.value)), J[a[h]] = !!f;
        return J
    }(I), w.addTest("hsla", function() {
        var a = g("a").style;
        return a.cssText = "background-color:hsla(120,40%,100%,.5)", i(a.backgroundColor, "rgba") || i(a.backgroundColor, "hsla")
    });
    var K = "CSS" in a && "supports" in a.CSS,
        L = "supportsCSS" in a;
    w.addTest("supports", K || L);
    var M = {}.toString;
    w.addTest("svgclippaths", function() {
        return !!b.createElementNS && /SVGClipPath/.test(M.call(b.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    }), w.addTest("smil", function() {
        return !!b.createElementNS && /SVGAnimate/.test(M.call(b.createElementNS("http://www.w3.org/2000/svg", "animate")))
    });
    var N = function() {
        var b = a.matchMedia || a.msMatchMedia;
        return b ? function(a) {
            var c = b(a);
            return c && c.matches || !1
        } : function(b) {
            var c = !1;
            return k("@media " + b + " { #modernizr { position: absolute; } }", function(b) {
                c = "absolute" == (a.getComputedStyle ? a.getComputedStyle(b, null) : b.currentStyle).position
            }), c
        }
    }();
    v.mq = N;
    var O = v.testStyles = k;
    w.addTest("touchevents", function() {
            var c;
            if ("ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch) c = !0;
            else {
                var d = ["@media (", y.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                O(d, function(a) {
                    c = 9 === a.offsetTop
                })
            }
            return c
        }),
        function() {
            var a = navigator.userAgent,
                b = a.match(/w(eb)?osbrowser/gi),
                c = a.match(/windows phone/gi) && a.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
            return b || c
        }() ? w.addTest("fontface", !1) : O('@font-face {font-family:"font";src:url("https://")}', function(a, c) {
            var d = b.getElementById("smodernizr"),
                e = d.sheet || d.styleSheet,
                f = e ? e.cssRules && e.cssRules[0] ? e.cssRules[0].cssText : e.cssText || "" : "",
                g = /src/i.test(f) && 0 === f.indexOf(c.split(" ")[0]);
            w.addTest("fontface", g)
        }), O('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(a) {
            w.addTest("generatedcontent", a.offsetHeight >= 6)
        });
    var P = v._config.usePrefixes ? B.split(" ") : [];
    v._cssomPrefixes = P;
    var Q = function(b) {
        var d, e = y.length,
            f = a.CSSRule;
        if (void 0 === f) return c;
        if (!b) return !1;
        if (b = b.replace(/^@/, ""), (d = b.replace(/-/g, "_").toUpperCase() + "_RULE") in f) return "@" + b;
        for (var g = 0; g < e; g++) {
            var h = y[g];
            if (h.toUpperCase() + "_" + d in f) return "@-" + h.toLowerCase() + "-" + b
        }
        return !1
    };
    v.atRule = Q;
    var R = {
        elem: g("modernizr")
    };
    w._q.push(function() {
        delete R.elem
    });
    var S = {
        style: R.elem.style
    };
    w._q.unshift(function() {
        delete S.style
    });
    var T = v.testProp = function(a, b, d) {
        return q([a], c, b, d)
    };
    w.addTest("textshadow", T("textShadow", "1px 1px")), v.testAllProps = r;
    v.prefixed = function(a, b, c) {
        return 0 === a.indexOf("@") ? Q(a) : (-1 != a.indexOf("-") && (a = h(a)), b ? r(a, b, c) : r(a, "pfx"))
    };
    v.testAllProps = s, w.addTest("cssanimations", s("animationName", "a", !0)), w.addTest("backgroundsize", s("backgroundSize", "100%", !0)), w.addTest("borderimage", s("borderImage", "url() 1", !0)), w.addTest("borderradius", s("borderRadius", "0px", !0)), w.addTest("boxshadow", s("boxShadow", "1px 1px", !0)), w.addTest("flexbox", s("flexBasis", "1px", !0)), w.addTest("cssreflections", s("boxReflect", "above", !0)), w.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && s("transform", "scale(1)", !0)
        }), w.addTest("csstransforms3d", function() {
            var a = !!s("perspective", "1px", !0),
                b = w._config.usePrefixes;
            if (a && (!b || "webkitPerspective" in z.style)) {
                var c;
                w.supports ? c = "@supports (perspective: 1px)" : (c = "@media (transform-3d)", b && (c += ",(-webkit-transform-3d)")), c += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", O("#modernizr{width:0;height:0}" + c, function(b) {
                    a = 7 === b.offsetWidth && 18 === b.offsetHeight
                })
            }
            return a
        }), w.addTest("csstransitions", s("transition", "all", !0)),
        function() {
            var a, b, c, e, f, g, h;
            for (var i in u)
                if (u.hasOwnProperty(i)) {
                    if (a = [], b = u[i], b.name && (a.push(b.name.toLowerCase()), b.options && b.options.aliases && b.options.aliases.length))
                        for (c = 0; c < b.options.aliases.length; c++) a.push(b.options.aliases[c].toLowerCase());
                    for (e = d(b.fn, "function") ? b.fn() : b.fn, f = 0; f < a.length; f++) g = a[f], h = g.split("."), 1 === h.length ? w[h[0]] = e : (!w[h[0]] || w[h[0]] instanceof Boolean || (w[h[0]] = new Boolean(w[h[0]])), w[h[0]][h[1]] = e), t.push((e ? "" : "no-") + h.join("-"))
                }
        }(), e(t), delete v.addTest, delete v.addAsyncTest;
    for (var U = 0; U < w._q.length; U++) w._q[U]();
    a.Modernizr = w
}(window, document);