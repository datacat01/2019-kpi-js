/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundsize-borderradius-canvas-cssanimations-csstransforms-csstransforms3d-csstransitions-input-passiveeventlisteners-smil-svg-video-domprefixes-prefixes-setclasses-shiv !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, a, o, i, s;
        for (var l in S)
            if (S.hasOwnProperty(l)) {
                if (e = [], t = S[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = a), C.push((a ? "" : "no-") + s.join("-"))
            }
    }

    function o(e) {
        var t = w.className,
            n = Modernizr._config.classPrefix || "";
        if (T && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), T ? w.className.baseVal = t : w.className = t)
    }

    function i(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function l() {
        var e = t.body;
        return e || (e = s(T ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, n, r, a) {
        var o, i, c, u, d = "modernizr",
            p = s("div"),
            f = l();
        if (parseInt(r, 10))
            for (; r--;) c = s("div"), c.id = a ? a[r] : d + (r + 1), p.appendChild(c);
        return o = s("style"), o.type = "text/css", o.id = "s" + d, (f.fake ? f : p).appendChild(o), f.appendChild(p), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), p.id = d, f.fake && (f.style.background = "", f.style.overflow = "hidden", u = w.style.overflow, w.style.overflow = "hidden", w.appendChild(f)), i = n(p, e), f.fake ? (f.parentNode.removeChild(f), w.style.overflow = u, w.offsetHeight) : p.parentNode.removeChild(p), !!i
    }

    function u(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function d(t, n, r) {
        var a;
        if ("getComputedStyle" in e) {
            a = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== a) r && (a = a.getPropertyValue(r));
            else if (o) {
                var i = o.error ? "error" : "log";
                o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else a = !n && t.currentStyle && t.currentStyle[r];
        return a
    }

    function p(t, r) {
        var a = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; a--;)
                if (e.CSS.supports(u(t[a]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; a--;) o.push("(" + u(t[a]) + ":" + r + ")");
            return o = o.join(" or "), c("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == d(e, null, "position")
            })
        }
        return n
    }

    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function m(e, t, a, o) {
        function l() {
            u && (delete z.style, delete z.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(a, "undefined")) {
            var c = p(e, a);
            if (!r(c, "undefined")) return c
        }
        for (var u, d, m, v, g, h = ["modernizr", "tspan", "samp"]; !z.style && h.length;) u = !0, z.modElem = s(h.shift()), z.style = z.modElem.style;
        for (m = e.length, d = 0; m > d; d++)
            if (v = e[d], g = z.style[v], i(v, "-") && (v = f(v)), z.style[v] !== n) {
                if (o || r(a, "undefined")) return l(), "pfx" == t ? v : !0;
                try {
                    z.style[v] = a
                } catch (y) {}
                if (z.style[v] != g) return l(), "pfx" == t ? v : !0
            } return l(), !1
    }

    function v(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function g(e, t, n) {
        var a;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (a = t[e[o]], r(a, "function") ? v(a, n || t) : a);
        return !1
    }

    function h(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + N.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? m(s, t, a, o) : (s = (e + " " + x.join(i + " ") + i).split(" "), g(s, t, n))
    }

    function y(e, t, r) {
        return h(e, n, n, t, r)
    }
    var S = [],
        E = {
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
                S.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                S.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = E, Modernizr = new Modernizr;
    var C = [],
        w = t.documentElement,
        T = "svg" === w.nodeName.toLowerCase(),
        b = "Moz O ms Webkit",
        x = E._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    E._domPrefixes = x;
    var P = E._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    E._prefixes = P;
    T || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = S.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = S.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), S.elements = n + " " + e, c(t)
        }

        function o(e) {
            var t = y[e[g]];
            return t || (t = {}, h++, e[g] = h, y[h] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), d) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : v.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function s(e, n) {
            if (e || (e = t), d) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) a.createElement(s[i]);
            return a
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return S.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(S, t.frag)
        }

        function c(e) {
            e || (e = t);
            var r = o(e);
            return !S.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || l(e, r), e
        }
        var u, d, p = "3.7.3",
            f = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            v = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g = "_html5shiv",
            h = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, d = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0, d = !0
            }
        }();
        var S = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: p,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: d,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = S, c(t), "object" == typeof module && module.exports && (module.exports = S)
    }("undefined" != typeof e ? e : this, t), Modernizr.addTest("passiveeventlisteners", function() {
        var t = !1;
        try {
            var n = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            e.addEventListener("test", null, n)
        } catch (r) {}
        return t
    });
    var N = E._config.usePrefixes ? b.split(" ") : [];
    E._cssomPrefixes = N;
    var _ = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete _.elem
    });
    var z = {
        style: _.elem.style
    };
    Modernizr._q.unshift(function() {
        delete z.style
    }), E.testAllProps = h, E.testAllProps = y, Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
    });
    var $ = "CSS" in e && "supports" in e.CSS,
        k = "supportsCSS" in e;
    Modernizr.addTest("supports", $ || k), Modernizr.addTest("csstransforms3d", function() {
        return !!y("perspective", "1px", !0)
    }), Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)), Modernizr.addTest("borderradius", y("borderRadius", "0px", !0)), Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("canvas", function() {
        var e = s("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("audio", function() {
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
    }), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var j = {}.toString;
    Modernizr.addTest("smil", function() {
        return !!t.createElementNS && /SVGAnimate/.test(j.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
    });
    var F = s("input"),
        L = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        A = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++) A[t[n]] = !!(t[n] in F);
        return A.list && (A.list = !(!s("datalist") || !e.HTMLDataListElement)), A
    }(L), a(), o(C), delete E.addTest, delete E.addAsyncTest;
    for (var M = 0; M < Modernizr._q.length; M++) Modernizr._q[M]();
    e.Modernizr = Modernizr
}(window, document);