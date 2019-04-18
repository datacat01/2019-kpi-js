/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-audio-video-touch-printshiv-mq-cssclasses
 */
;
window.Modernizr = function(e, t, n) {
        function r(e) {
            g.cssText = e
        }

        function o(e, t) {
            return typeof e === t
        }

        function a(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function i(e, t) {
            for (var r in e) {
                var o = e[r];
                if (!a(o, "-") && g[o] !== n) return "pfx" == t ? o : !0
            }
            return !1
        }

        function c(e, t, r) {
            for (var a in e) {
                var i = t[e[a]];
                if (i !== n) return r === !1 ? e[a] : o(i, "function") ? i.bind(r || t) : i
            }
            return !1
        }

        function l(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                a = (e + " " + T.join(r + " ") + r).split(" ");
            return o(t, "string") || o(t, "undefined") ? i(a, t) : (a = (e + " " + w.join(r + " ") + r).split(" "), c(a, t, n))
        }
        if (e.hasOwnProperty("Modernizr")) return e.Modernizr;
        var s, u, d, f = "2.8.3",
            p = {},
            m = !0,
            h = t.documentElement,
            v = "modernizr",
            y = t.createElement(v),
            g = y.style,
            E = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            b = "Webkit Moz O ms",
            T = b.split(" "),
            w = b.toLowerCase().split(" "),
            S = {},
            C = [],
            x = C.slice,
            N = function(e, n, r, o) {
                var a, i, c, l, s = t.createElement("div"),
                    u = t.body,
                    d = u || t.createElement("body");
                if (parseInt(r, 10))
                    for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), s.appendChild(c);
                return a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), s.id = v, (u ? s : d).innerHTML += a, d.appendChild(s), u || (d.style.background = "", d.style.overflow = "hidden", l = h.style.overflow, h.style.overflow = "hidden", h.appendChild(d)), i = n(s, e), u ? s.parentNode.removeChild(s) : (d.parentNode.removeChild(d), h.style.overflow = l), !!i
            },
            P = function(t) {
                var n = e.matchMedia || e.msMatchMedia;
                if (n) return n(t) && n(t).matches || !1;
                var r;
                return N("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
                    r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
                }), r
            },
            j = {}.hasOwnProperty;
        d = o(j, "undefined") || o(j.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return j.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = x.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var o = function() {};
                        o.prototype = t.prototype;
                        var a = new o,
                            i = t.apply(a, n.concat(x.call(arguments)));
                        return Object(i) === i ? i : a
                    }
                    return t.apply(e, n.concat(x.call(arguments)))
                };
            return r
        }), S.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : N(["@media (", E.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = 9 === e.offsetTop
            }), n
        }, S.csstransforms3d = function() {
            var e = !!l("perspective");
            return e && "webkitPerspective" in h.style && N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
                e = 9 === t.offsetLeft && 3 === t.offsetHeight
            }), e
        }, S.video = function() {
            var e = t.createElement("video"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, S.audio = function() {
            var e = t.createElement("audio"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (r) {}
            return n
        };
        for (var $ in S) d(S, $) && (u = $.toLowerCase(), p[u] = S[$](), C.push((p[u] ? "" : "no-") + u));
        return p.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var r in e) d(e, r) && p.addTest(r, e[r]);
            else {
                if (e = e.toLowerCase(), p[e] !== n) return p;
                t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (h.className += " " + (t ? "" : "no-") + e), p[e] = t
            }
            return p
        }, r(""), y = s = null, p._version = f, p._prefixes = E, p._domPrefixes = w, p._cssomPrefixes = T, p.mq = P, p.testProp = function(e) {
            return i([e])
        }, p.testAllProps = l, p.testStyles = N, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + C.join(" ") : ""), p
    }(this, this.document),
    function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = S.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e) {
            var t = w[e[b]];
            return t || (t = {}, T++, e[b] = T, w[T] = t), t
        }

        function a(e, n, r) {
            if (n || (n = t), h) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : E.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || g.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function i(e, n) {
            if (e || (e = t), h) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, c = r(), l = c.length; l > i; i++) a.createElement(c[i]);
            return a
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return S.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(S, t.frag)
        }

        function l(e) {
            e || (e = t);
            var r = o(e);
            return S.shivCSS && !m && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), h || c(e, r), e
        }

        function s(e) {
            for (var t, n = e.getElementsByTagName("*"), o = n.length, a = RegExp("^(?:" + r().join("|") + ")$", "i"), i = []; o--;) t = n[o], a.test(t.nodeName) && i.push(t.applyElement(u(t)));
            return i
        }

        function u(e) {
            for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(x + ":" + e.nodeName); r--;) t = n[r], t.specified && o.setAttribute(t.nodeName, t.nodeValue);
            return o.style.cssText = e.style.cssText, o
        }

        function d(e) {
            for (var t, n = e.split("{"), o = n.length, a = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), i = "$1" + x + "\\:$2"; o--;) t = n[o] = n[o].split("}"), t[t.length - 1] = t[t.length - 1].replace(a, i), n[o] = t.join("}");
            return n.join("{")
        }

        function f(e) {
            for (var t = e.length; t--;) e[t].removeNode()
        }

        function p(e) {
            function t() {
                clearTimeout(i._removeSheetTimer), r && r.removeNode(!0), r = null
            }
            var r, a, i = o(e),
                c = e.namespaces,
                l = e.parentWindow;
            return !N || e.printShived ? e : ("undefined" == typeof c[x] && c.add(x), l.attachEvent("onbeforeprint", function() {
                t();
                for (var o, i, c, l = e.styleSheets, u = [], f = l.length, p = Array(f); f--;) p[f] = l[f];
                for (; c = p.pop();)
                    if (!c.disabled && C.test(c.media)) {
                        try {
                            o = c.imports, i = o.length
                        } catch (m) {
                            i = 0
                        }
                        for (f = 0; i > f; f++) p.push(o[f]);
                        try {
                            u.push(c.cssText)
                        } catch (m) {}
                    } u = d(u.reverse().join("")), a = s(e), r = n(e, u)
            }), l.attachEvent("onafterprint", function() {
                f(a), clearTimeout(i._removeSheetTimer), i._removeSheetTimer = setTimeout(t, 500)
            }), e.printShived = !0, e)
        }
        var m, h, v = "3.7.0",
            y = e.html5 || {},
            g = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            E = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            b = "_html5shiv",
            T = 0,
            w = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", m = "hidden" in e, h = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                m = !0, h = !0
            }
        }();
        var S = {
            elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: v,
            shivCSS: y.shivCSS !== !1,
            supportsUnknownElements: h,
            shivMethods: y.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: a,
            createDocumentFragment: i
        };
        e.html5 = S, l(t);
        var C = /^$|\b(?:all|print)\b/,
            x = "html5shiv",
            N = !h && function() {
                var n = t.documentElement;
                return "undefined" != typeof t.namespaces && "undefined" != typeof t.parentWindow && "undefined" != typeof n.applyElement && "undefined" != typeof n.removeNode && "undefined" != typeof e.attachEvent
            }();
        S.type += " print", S.shivPrint = p, p(t)
    }(this, document);