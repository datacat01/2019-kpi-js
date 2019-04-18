window.Modernizr = function(n, u, r) {
        function i(t) {
            g.cssText = t
        }

        function o(t, e) {
            return typeof t === e
        }

        function s(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, e) {
            for (var i in t) {
                var n = t[i];
                if (!s(n, "-") && g[n] !== r) return "pfx" != e || n
            }
            return !1
        }

        function l(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                s = (t + " " + w.join(n + " ") + n).split(" ");
            return o(e, "string") || o(e, "undefined") ? a(s, e) : function(t, e, i) {
                for (var n in t) {
                    var s = e[t[n]];
                    if (s !== r) return !1 === i ? t[n] : o(s, "function") ? s.bind(i || e) : s
                }
                return !1
            }(s = (t + " " + x.join(n + " ") + n).split(" "), e, i)
        }
        var t, h, c, d = {},
            p = u.documentElement,
            f = "modernizr",
            e = u.createElement(f),
            g = e.style,
            m = u.createElement("input"),
            v = ":)",
            _ = {}.toString,
            b = " -webkit- -moz- -o- -ms- ".split(" "),
            y = "Webkit Moz O ms",
            w = y.split(" "),
            x = y.toLowerCase().split(" "),
            C = "http://www.w3.org/2000/svg",
            k = {},
            D = {},
            T = {},
            S = [],
            P = S.slice,
            A = function(t, e, i, n) {
                var s, o, r, a, l = u.createElement("div"),
                    h = u.body,
                    c = h || u.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;)(r = u.createElement("div")).id = n ? n[i] : f + (i + 1), l.appendChild(r);
                return s = ["&#173;", '<style id="s', f, '">', t, "</style>"].join(""), l.id = f, (h ? l : c).innerHTML += s, c.appendChild(l), h || (c.style.background = "", c.style.overflow = "hidden", a = p.style.overflow, p.style.overflow = "hidden", p.appendChild(c)), o = e(l, t), h ? l.parentNode.removeChild(l) : (c.parentNode.removeChild(c), p.style.overflow = a), !!o
            },
            I = (c = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            }, function(t, e) {
                e = e || u.createElement(c[t] || "div");
                var i = (t = "on" + t) in e;
                return i || (e.setAttribute || (e = u.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(t, ""), i = o(e[t], "function"), o(e[t], "undefined") || (e[t] = r), e.removeAttribute(t))), e = null, i
            }),
            E = {}.hasOwnProperty;
        for (var M in h = o(E, "undefined") || o(E.call, "undefined") ? function(t, e) {
                return e in t && o(t.constructor.prototype[e], "undefined")
            } : function(t, e) {
                return E.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function(n) {
                var s = this;
                if ("function" != typeof s) throw new TypeError;
                var o = P.call(arguments, 1),
                    r = function() {
                        if (this instanceof r) {
                            var t = function() {};
                            t.prototype = s.prototype;
                            var e = new t,
                                i = s.apply(e, o.concat(P.call(arguments)));
                            return Object(i) === i ? i : e
                        }
                        return s.apply(n, o.concat(P.call(arguments)))
                    };
                return r
            }), k.flexbox = function() {
                return l("flexWrap")
            }, k.flexboxlegacy = function() {
                return l("boxDirection")
            }, k.canvas = function() {
                var t = u.createElement("canvas");
                return !!t.getContext && !!t.getContext("2d")
            }, k.canvastext = function() {
                return !!d.canvas && !!o(u.createElement("canvas").getContext("2d").fillText, "function")
            }, k.webgl = function() {
                return !!n.WebGLRenderingContext
            }, k.touch = function() {
                var e;
                return "ontouchstart" in n || n.DocumentTouch && u instanceof DocumentTouch ? e = !0 : A(["@media (", b.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                    e = 9 === t.offsetTop
                }), e
            }, k.geolocation = function() {
                return "geolocation" in navigator
            }, k.postmessage = function() {
                return !!n.postMessage
            }, k.indexedDB = function() {
                return !!l("indexedDB", n)
            }, k.hashchange = function() {
                return I("hashchange", n) && (u.documentMode === r || 7 < u.documentMode)
            }, k.history = function() {
                return !!n.history && !!history.pushState
            }, k.draganddrop = function() {
                var t = u.createElement("div");
                return "draggable" in t || "ondragstart" in t && "ondrop" in t
            }, k.rgba = function() {
                return i("background-color:rgba(150,255,150,.5)"), s(g.backgroundColor, "rgba")
            }, k.hsla = function() {
                return i("background-color:hsla(120,40%,100%,.5)"), s(g.backgroundColor, "rgba") || s(g.backgroundColor, "hsla")
            }, k.multiplebgs = function() {
                return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(g.background)
            }, k.backgroundsize = function() {
                return l("backgroundSize")
            }, k.borderimage = function() {
                return l("borderImage")
            }, k.borderradius = function() {
                return l("borderRadius")
            }, k.boxshadow = function() {
                return l("boxShadow")
            }, k.textshadow = function() {
                return "" === u.createElement("div").style.textShadow
            }, k.opacity = function() {
                return t = "opacity:.55", i(b.join(t + ";") + (e || "")), /^0.55$/.test(g.opacity);
                var t, e
            }, k.cssanimations = function() {
                return l("animationName")
            }, k.csscolumns = function() {
                return l("columnCount")
            }, k.cssgradients = function() {
                var t = "background-image:";
                return i((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + b.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), s(g.backgroundImage, "gradient")
            }, k.cssreflections = function() {
                return l("boxReflect")
            }, k.csstransforms = function() {
                return !!l("transform")
            }, k.csstransforms3d = function() {
                var i = !!l("perspective");
                return i && "webkitPerspective" in p.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, e) {
                    i = 9 === t.offsetLeft && 3 === t.offsetHeight
                }), i
            }, k.csstransitions = function() {
                return l("transition")
            }, k.fontface = function() {
                var o;
                return A('@font-face {font-family:"font";src:url("https://")}', function(t, e) {
                    var i = u.getElementById("smodernizr"),
                        n = i.sheet || i.styleSheet,
                        s = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "";
                    o = /src/i.test(s) && 0 === s.indexOf(e.split(" ")[0])
                }), o
            }, k.generatedcontent = function() {
                var e;
                return A(["#", f, "{font:0/0 a}#", f, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                    e = 3 <= t.offsetHeight
                }), e
            }, k.video = function() {
                var t = u.createElement("video"),
                    e = !1;
                try {
                    (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                } catch (t) {}
                return e
            }, k.audio = function() {
                var t = u.createElement("audio"),
                    e = !1;
                try {
                    (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
                } catch (t) {}
                return e
            }, k.localstorage = function() {
                try {
                    return localStorage.setItem(f, f), localStorage.removeItem(f), !0
                } catch (t) {
                    return !1
                }
            }, k.sessionstorage = function() {
                try {
                    return sessionStorage.setItem(f, f), sessionStorage.removeItem(f), !0
                } catch (t) {
                    return !1
                }
            }, k.applicationcache = function() {
                return !!n.applicationCache
            }, k.svg = function() {
                return !!u.createElementNS && !!u.createElementNS(C, "svg").createSVGRect
            }, k.inlinesvg = function() {
                var t = u.createElement("div");
                return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == C
            }, k.smil = function() {
                return !!u.createElementNS && /SVGAnimate/.test(_.call(u.createElementNS(C, "animate")))
            }, k.svgclippaths = function() {
                return !!u.createElementNS && /SVGClipPath/.test(_.call(u.createElementNS(C, "clipPath")))
            }, k) h(k, M) && (t = M.toLowerCase(), d[t] = k[M](), S.push((d[t] ? "" : "no-") + t));
        return d.input || (d.input = function(t) {
                for (var e = 0, i = t.length; e < i; e++) T[t[e]] = t[e] in m;
                return T.list && (T.list = !!u.createElement("datalist") && !!n.HTMLDataListElement), T
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), d.inputtypes = function(t) {
                for (var e, i, n, s = 0, o = t.length; s < o; s++) m.setAttribute("type", i = t[s]), (e = "text" !== m.type) && (m.value = v, m.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && m.style.WebkitAppearance !== r ? (p.appendChild(m), e = (n = u.defaultView).getComputedStyle && "textfield" !== n.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight, p.removeChild(m)) : /^(search|tel)$/.test(i) || (e = /^(url|email)$/.test(i) ? m.checkValidity && !1 === m.checkValidity() : m.value != v)), D[t[s]] = !!e;
                return D
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))), d.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var i in t) h(t, i) && d.addTest(i, t[i]);
                else {
                    if (t = t.toLowerCase(), d[t] !== r) return d;
                    e = "function" == typeof e ? e() : e, p.className += " " + (e ? "" : "no-") + t, d[t] = e
                }
                return d
            }, i(""), e = m = null,
            function(t, l) {
                function h() {
                    var t = f.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function c(t) {
                    var e = a[t[n]];
                    return e || (e = {}, r++, t[n] = r, a[r] = e), e
                }

                function u(t, e, i) {
                    return e || (e = l), p ? e.createElement(t) : (i || (i = c(e)), !(n = i.cache[t] ? i.cache[t].cloneNode() : o.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t)).canHaveChildren || s.test(t) || n.tagUrn ? n : i.frag.appendChild(n));
                    var n
                }

                function e(t) {
                    t || (t = l);
                    var e, i, n, s, o, r, a = c(t);
                    return f.shivCSS && !d && !a.hasCSS && (a.hasCSS = (s = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", o = (n = t).createElement("p"), r = n.getElementsByTagName("head")[0] || n.documentElement, o.innerHTML = "x<style>" + s + "</style>", !!r.insertBefore(o.lastChild, r.firstChild))), p || (e = t, (i = a).cache || (i.cache = {}, i.createElem = e.createElement, i.createFrag = e.createDocumentFragment, i.frag = i.createFrag()), e.createElement = function(t) {
                        return f.shivMethods ? u(t, e, i) : i.createElem(t)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/[\w\-]+/g, function(t) {
                        return i.createElem(t), i.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(f, i.frag)), t
                }
                var d, p, i = t.html5 || {},
                    s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    n = "_html5shiv",
                    r = 0,
                    a = {};
                ! function() {
                    try {
                        var t = l.createElement("a");
                        t.innerHTML = "<xyz></xyz>", d = "hidden" in t, p = 1 == t.childNodes.length || function() {
                            l.createElement("a");
                            var t = l.createDocumentFragment();
                            return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                        }()
                    } catch (t) {
                        p = d = !0
                    }
                }();
                var f = {
                    elements: i.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== i.shivCSS,
                    supportsUnknownElements: p,
                    shivMethods: !1 !== i.shivMethods,
                    type: "default",
                    shivDocument: e,
                    createElement: u,
                    createDocumentFragment: function(t, e) {
                        if (t || (t = l), p) return t.createDocumentFragment();
                        for (var i = (e = e || c(t)).frag.cloneNode(), n = 0, s = h(), o = s.length; n < o; n++) i.createElement(s[n]);
                        return i
                    }
                };
                t.html5 = f, e(l)
            }(this, u), d._version = "2.8.3", d._prefixes = b, d._domPrefixes = x, d._cssomPrefixes = w, d.mq = function(t) {
                var e, i = n.matchMedia || n.msMatchMedia;
                return i ? i(t) && i(t).matches || !1 : (A("@media " + t + " { #" + f + " { position: absolute; } }", function(t) {
                    e = "absolute" == (n.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
                }), e)
            }, d.hasEvent = I, d.testProp = function(t) {
                return a([t])
            }, d.testAllProps = l, d.testStyles = A, d.prefixed = function(t, e, i) {
                return e ? l(t, e, i) : l(t, "pfx")
            }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + S.join(" "), d
    }(this, this.document),
    function(t, d, e) {
        function u(t) {
            return "[object Function]" == o.call(t)
        }

        function p(t) {
            return "string" == typeof t
        }

        function f() {}

        function g(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function m() {
            var t = y.shift();
            w = 1, t ? t.t ? _(function() {
                ("c" == t.t ? v.injectCss : v.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), m()) : w = 0
        }

        function i(t, e, i, n, s) {
            return w = 0, e = e || "j", p(t) ? function(i, n, t, e, s, o, r) {
                function a(t) {
                    if (!h && g(l.readyState) && (u.r = h = 1, !w && m(), l.onload = l.onreadystatechange = null, t))
                        for (var e in "img" != i && _(function() {
                                C.removeChild(l)
                            }, 50), T[n]) T[n].hasOwnProperty(e) && T[n][e].onload()
                }
                r = r || v.errorTimeout;
                var l = d.createElement(i),
                    h = 0,
                    c = 0,
                    u = {
                        t: t,
                        s: n,
                        e: s,
                        a: o,
                        x: r
                    };
                1 === T[n] && (c = 1, T[n] = []), "object" == i ? l.data = n : (l.src = n, l.type = i), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                    a.call(this, c)
                }, y.splice(e, 0, u), "img" != i && (c || 2 === T[n] ? (C.insertBefore(l, x ? null : b), _(a, r)) : T[n].push(l))
            }("c" == e ? h : l, t, e, this.i++, i, n, s) : (y.splice(this.i++, 0, t), 1 == y.length && m()), this
        }

        function a() {
            var t = v;
            return t.loader = {
                load: i,
                i: 0
            }, t
        }
        var n, v, s = d.documentElement,
            _ = t.setTimeout,
            b = d.getElementsByTagName("script")[0],
            o = {}.toString,
            y = [],
            w = 0,
            r = "MozAppearance" in s.style,
            x = r && !!d.createRange().compareNode,
            C = x ? s : b.parentNode,
            l = (s = t.opera && "[object Opera]" == o.call(t.opera), s = !!d.attachEvent && !s, r ? "object" : s ? "script" : "img"),
            h = s ? "script" : l,
            k = Array.isArray || function(t) {
                return "[object Array]" == o.call(t)
            },
            D = [],
            T = {},
            S = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        (v = function(t) {
            function c(t, e, i, n, s) {
                var o = function(t) {
                        t = t.split("!");
                        var e, i, n, s = D.length,
                            o = t.pop(),
                            r = t.length;
                        for (o = {
                                url: o,
                                origUrl: o,
                                prefixes: t
                            }, i = 0; i < r; i++) n = t[i].split("="), (e = S[n.shift()]) && (o = e(o, n));
                        for (i = 0; i < s; i++) o = D[i](o);
                        return o
                    }(t),
                    r = o.autoCallback;
                o.url.split(".").pop().split("?").shift(), o.bypass || (e && (e = u(e) ? e : e[t] || e[n] || e[t.split("/").pop().split("?")[0]]), o.instead ? o.instead(t, e, i, n, s) : (T[o.url] ? o.noexec = !0 : T[o.url] = 1, i.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : void 0, o.noexec, o.attrs, o.timeout), (u(e) || u(r)) && i.load(function() {
                    a(), e && e(o.origUrl, s, n), r && r(o.origUrl, s, n), T[o.url] = 2
                })))
            }

            function e(t, e) {
                function i(i, t) {
                    if (i) {
                        if (p(i)) t || (a = function() {
                            var t = [].slice.call(arguments);
                            l.apply(this, t), h()
                        }), c(i, a, e, 0, o);
                        else if (Object(i) === i)
                            for (s in n = function() {
                                    var t, e = 0;
                                    for (t in i) i.hasOwnProperty(t) && e++;
                                    return e
                                }(), i) i.hasOwnProperty(s) && (!t && !--n && (u(a) ? a = function() {
                                var t = [].slice.call(arguments);
                                l.apply(this, t), h()
                            } : a[s] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), h()
                                }
                            }(l[s])), c(i[s], a, e, s, o))
                    } else !t && h()
                }
                var n, s, o = !!t.test,
                    r = t.load || t.both,
                    a = t.callback || f,
                    l = a,
                    h = t.complete || f;
                i(o ? t.yep : t.nope, !!r), r && i(r)
            }
            var i, n, s = this.yepnope.loader;
            if (p(t)) c(t, 0, s, 0);
            else if (k(t))
                for (i = 0; i < t.length; i++) p(n = t[i]) ? c(n, 0, s, 0) : k(n) ? v(n) : Object(n) === n && e(n, s);
            else Object(t) === t && e(t, s)
        }).addPrefix = function(t, e) {
            S[t] = e
        }, v.addFilter = function(t) {
            D.push(t)
        }, v.errorTimeout = 1e4, null == d.readyState && d.addEventListener && (d.readyState = "loading", d.addEventListener("DOMContentLoaded", n = function() {
            d.removeEventListener("DOMContentLoaded", n, 0), d.readyState = "complete"
        }, 0)), t.yepnope = a(), t.yepnope.executeStack = m, t.yepnope.injectJs = function(t, e, i, n, s, o) {
            var r, a, l = d.createElement("script");
            n = n || v.errorTimeout;
            for (a in l.src = t, i) l.setAttribute(a, i[a]);
            e = o ? m : e || f, l.onreadystatechange = l.onload = function() {
                !r && g(l.readyState) && (r = 1, e(), l.onload = l.onreadystatechange = null)
            }, _(function() {
                r || e(r = 1)
            }, n), s ? l.onload() : b.parentNode.insertBefore(l, b)
        }, t.yepnope.injectCss = function(t, e, i, n, s, o) {
            var r;
            n = d.createElement("link"), e = o ? m : e || f;
            for (r in n.href = t, n.rel = "stylesheet", n.type = "text/css", i) n.setAttribute(r, i[r]);
            s || (b.parentNode.insertBefore(n, b), _(e, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(C, t) {
        "use strict";
        var e = [],
            k = C.document,
            n = Object.getPrototypeOf,
            a = e.slice,
            g = e.concat,
            l = e.push,
            s = e.indexOf,
            i = {},
            o = i.toString,
            m = i.hasOwnProperty,
            r = m.toString,
            h = r.call(Object),
            v = {},
            _ = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            b = function(t) {
                return null != t && t === t.window
            },
            c = {
                type: !0,
                src: !0,
                noModule: !0
            };

        function y(t, e, i) {
            var n, s = (e = e || k).createElement("script");
            if (s.text = t, i)
                for (n in c) i[n] && (s[n] = i[n]);
            e.head.appendChild(s).parentNode.removeChild(s)
        }

        function w(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[o.call(t)] || "object" : typeof t
        }
        var D = function(t, e) {
                return new D.fn.init(t, e)
            },
            u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function d(t) {
            var e = !!t && "length" in t && t.length,
                i = w(t);
            return !_(t) && !b(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
        }
        D.fn = D.prototype = {
            jquery: "3.3.1",
            constructor: D,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(t) {
                return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = D.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return D.each(this, t)
            },
            map: function(i) {
                return this.pushStack(D.map(this, function(t, e) {
                    return i.call(t, e, t)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= i && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: e.sort,
            splice: e.splice
        }, D.extend = D.fn.extend = function() {
            var t, e, i, n, s, o, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || _(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = r[e], r !== (n = t[e]) && (h && n && (D.isPlainObject(n) || (s = Array.isArray(n))) ? (o = s ? (s = !1, i && Array.isArray(i) ? i : []) : i && D.isPlainObject(i) ? i : {}, r[e] = D.extend(h, o, n)) : void 0 !== n && (r[e] = n));
            return r
        }, D.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, i;
                return !(!t || "[object Object]" !== o.call(t) || (e = n(t)) && ("function" != typeof(i = m.call(e, "constructor") && e.constructor) || r.call(i) !== h))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t) {
                y(t)
            },
            each: function(t, e) {
                var i, n = 0;
                if (d(t))
                    for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(u, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (d(Object(t)) ? D.merge(i, "string" == typeof t ? [t] : t) : l.call(i, t)), i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : s.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
                return t.length = s, t
            },
            grep: function(t, e, i) {
                for (var n = [], s = 0, o = t.length, r = !i; s < o; s++) !e(t[s], s) !== r && n.push(t[s]);
                return n
            },
            map: function(t, e, i) {
                var n, s, o = 0,
                    r = [];
                if (d(t))
                    for (n = t.length; o < n; o++) null != (s = e(t[o], o, i)) && r.push(s);
                else
                    for (o in t) null != (s = e(t[o], o, i)) && r.push(s);
                return g.apply([], r)
            },
            guid: 1,
            support: v
        }), "function" == typeof Symbol && (D.fn[Symbol.iterator] = e[Symbol.iterator]), D.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            i["[object " + e + "]"] = e.toLowerCase()
        });
        var p = function(i) {
            var t, p, y, o, s, f, u, g, w, l, h, x, C, r, k, m, a, c, v, D = "sizzle" + 1 * new Date,
                _ = i.document,
                T = 0,
                n = 0,
                d = rt(),
                b = rt(),
                S = rt(),
                P = function(t, e) {
                    return t === e && (h = !0), 0
                },
                A = {}.hasOwnProperty,
                e = [],
                I = e.pop,
                E = e.push,
                M = e.push,
                N = e.slice,
                $ = function(t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                z = "\\[" + L + "*(" + H + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + L + "*\\]",
                R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
                W = new RegExp(L + "+", "g"),
                F = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                j = new RegExp("^" + L + "*," + L + "*"),
                B = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                q = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                Y = new RegExp(R),
                G = new RegExp("^" + H + "$"),
                U = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + z),
                    PSEUDO: new RegExp("^" + R),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + O + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                V = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                X = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Q = /[+~]/,
                Z = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                tt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                it = function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                nt = function() {
                    x()
                },
                st = _t(function(t) {
                    return !0 === t.disabled && ("form" in t || "label" in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                M.apply(e = N.call(_.childNodes), _.childNodes), e[_.childNodes.length].nodeType
            } catch (i) {
                M = {
                    apply: e.length ? function(t, e) {
                        E.apply(t, N.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function ot(t, e, i, n) {
                var s, o, r, a, l, h, c, u = e && e.ownerDocument,
                    d = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return i;
                if (!n && ((e ? e.ownerDocument || e : _) !== C && x(e), e = e || C, k)) {
                    if (11 !== d && (l = J.exec(t)))
                        if (s = l[1]) {
                            if (9 === d) {
                                if (!(r = e.getElementById(s))) return i;
                                if (r.id === s) return i.push(r), i
                            } else if (u && (r = u.getElementById(s)) && v(e, r) && r.id === s) return i.push(r), i
                        } else {
                            if (l[2]) return M.apply(i, e.getElementsByTagName(t)), i;
                            if ((s = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return M.apply(i, e.getElementsByClassName(s)), i
                        } if (p.qsa && !S[t + " "] && (!m || !m.test(t))) {
                        if (1 !== d) u = e, c = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(et, it) : e.setAttribute("id", a = D), o = (h = f(t)).length; o--;) h[o] = "#" + a + " " + vt(h[o]);
                            c = h.join(","), u = Q.test(t) && gt(e.parentNode) || e
                        }
                        if (c) try {
                            return M.apply(i, u.querySelectorAll(c)), i
                        } catch (t) {} finally {
                            a === D && e.removeAttribute("id")
                        }
                    }
                }
                return g(t.replace(F, "$1"), e, i, n)
            }

            function rt() {
                var n = [];
                return function t(e, i) {
                    return n.push(e + " ") > y.cacheLength && delete t[n.shift()], t[e + " "] = i
                }
            }

            function at(t) {
                return t[D] = !0, t
            }

            function lt(t) {
                var e = C.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function ht(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) y.attrHandle[i[n]] = e
            }

            function ct(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function ut(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function dt(i) {
                return function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === i
                }
            }

            function pt(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && st(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ft(r) {
                return at(function(o) {
                    return o = +o, at(function(t, e) {
                        for (var i, n = r([], t.length, o), s = n.length; s--;) t[i = n[s]] && (t[i] = !(e[i] = t[i]))
                    })
                })
            }

            function gt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (t in p = ot.support = {}, s = ot.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, x = ot.setDocument = function(t) {
                    var e, i, n = t ? t.ownerDocument || t : _;
                    return n !== C && 9 === n.nodeType && n.documentElement && (r = (C = n).documentElement, k = !s(C), _ !== C && (i = C.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", nt, !1) : i.attachEvent && i.attachEvent("onunload", nt)), p.attributes = lt(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), p.getElementsByTagName = lt(function(t) {
                        return t.appendChild(C.createComment("")), !t.getElementsByTagName("*").length
                    }), p.getElementsByClassName = X.test(C.getElementsByClassName), p.getById = lt(function(t) {
                        return r.appendChild(t).id = D, !C.getElementsByName || !C.getElementsByName(D).length
                    }), p.getById ? (y.filter.ID = function(t) {
                        var e = t.replace(Z, tt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }, y.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && k) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }) : (y.filter.ID = function(t) {
                        var i = t.replace(Z, tt);
                        return function(t) {
                            var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return e && e.value === i
                        }
                    }, y.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && k) {
                            var i, n, s, o = e.getElementById(t);
                            if (o) {
                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                                for (s = e.getElementsByName(t), n = 0; o = s[n++];)
                                    if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                            }
                            return []
                        }
                    }), y.find.TAG = p.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            s = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" !== t) return o;
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }, y.find.CLASS = p.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && k) return e.getElementsByClassName(t)
                    }, a = [], m = [], (p.qsa = X.test(C.querySelectorAll)) && (lt(function(t) {
                        r.appendChild(t).innerHTML = "<a id='" + D + "'></a><select id='" + D + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + L + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + D + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + D + "+*").length || m.push(".#.+[+~]")
                    }), lt(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = C.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + L + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), r.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (p.matchesSelector = X.test(c = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && lt(function(t) {
                        p.disconnectedMatch = c.call(t, "*"), c.call(t, "[s!='']:x"), a.push("!=", R)
                    }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), e = X.test(r.compareDocumentPosition), v = e || X.test(r.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, P = e ? function(t, e) {
                        if (t === e) return h = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === i ? t === C || t.ownerDocument === _ && v(_, t) ? -1 : e === C || e.ownerDocument === _ && v(_, e) ? 1 : l ? $(l, t) - $(l, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return h = !0, 0;
                        var i, n = 0,
                            s = t.parentNode,
                            o = e.parentNode,
                            r = [t],
                            a = [e];
                        if (!s || !o) return t === C ? -1 : e === C ? 1 : s ? -1 : o ? 1 : l ? $(l, t) - $(l, e) : 0;
                        if (s === o) return ct(t, e);
                        for (i = t; i = i.parentNode;) r.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; r[n] === a[n];) n++;
                        return n ? ct(r[n], a[n]) : r[n] === _ ? -1 : a[n] === _ ? 1 : 0
                    }), C
                }, ot.matches = function(t, e) {
                    return ot(t, null, null, e)
                }, ot.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== C && x(t), e = e.replace(q, "='$1']"), p.matchesSelector && k && !S[e + " "] && (!a || !a.test(e)) && (!m || !m.test(e))) try {
                        var i = c.call(t, e);
                        if (i || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return 0 < ot(e, C, null, [t]).length
                }, ot.contains = function(t, e) {
                    return (t.ownerDocument || t) !== C && x(t), v(t, e)
                }, ot.attr = function(t, e) {
                    (t.ownerDocument || t) !== C && x(t);
                    var i = y.attrHandle[e.toLowerCase()],
                        n = i && A.call(y.attrHandle, e.toLowerCase()) ? i(t, e, !k) : void 0;
                    return void 0 !== n ? n : p.attributes || !k ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }, ot.escape = function(t) {
                    return (t + "").replace(et, it)
                }, ot.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, ot.uniqueSort = function(t) {
                    var e, i = [],
                        n = 0,
                        s = 0;
                    if (h = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(P), h) {
                        for (; e = t[s++];) e === t[s] && (n = i.push(s));
                        for (; n--;) t.splice(i[n], 1)
                    }
                    return l = null, t
                }, o = ot.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        s = t.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                        } else if (3 === s || 4 === s) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += o(e);
                    return i
                }, (y = ot.selectors = {
                    cacheLength: 50,
                    createPseudo: at,
                    match: U,
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
                        ATTR: function(t) {
                            return t[1] = t[1].replace(Z, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return U.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Y.test(i) && (e = f(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(Z, tt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = d[t + " "];
                            return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && d(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(i, n, s) {
                            return function(t) {
                                var e = ot.attr(t, i);
                                return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === s : "!=" === n ? e !== s : "^=" === n ? s && 0 === e.indexOf(s) : "*=" === n ? s && -1 < e.indexOf(s) : "$=" === n ? s && e.slice(-s.length) === s : "~=" === n ? -1 < (" " + e.replace(W, " ") + " ").indexOf(s) : "|=" === n && (e === s || e.slice(0, s.length + 1) === s + "-"))
                            }
                        },
                        CHILD: function(f, t, e, g, m) {
                            var v = "nth" !== f.slice(0, 3),
                                _ = "last" !== f.slice(-4),
                                b = "of-type" === t;
                            return 1 === g && 0 === m ? function(t) {
                                return !!t.parentNode
                            } : function(t, e, i) {
                                var n, s, o, r, a, l, h = v !== _ ? "nextSibling" : "previousSibling",
                                    c = t.parentNode,
                                    u = b && t.nodeName.toLowerCase(),
                                    d = !i && !b,
                                    p = !1;
                                if (c) {
                                    if (v) {
                                        for (; h;) {
                                            for (r = t; r = r[h];)
                                                if (b ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
                                            l = h = "only" === f && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [_ ? c.firstChild : c.lastChild], _ && d) {
                                        for (p = (a = (n = (s = (o = (r = c)[D] || (r[D] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[f] || [])[0] === T && n[1]) && n[2], r = a && c.childNodes[a]; r = ++a && r && r[h] || (p = a = 0) || l.pop();)
                                            if (1 === r.nodeType && ++p && r === t) {
                                                s[f] = [T, a, p];
                                                break
                                            }
                                    } else if (d && (p = a = (n = (s = (o = (r = t)[D] || (r[D] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[f] || [])[0] === T && n[1]), !1 === p)
                                        for (;
                                            (r = ++a && r && r[h] || (p = a = 0) || l.pop()) && ((b ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++p || (d && ((s = (o = r[D] || (r[D] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[f] = [T, p]), r !== t)););
                                    return (p -= m) === g || p % g == 0 && 0 <= p / g
                                }
                            }
                        },
                        PSEUDO: function(t, o) {
                            var e, r = y.pseudos[t] || y.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                            return r[D] ? r(o) : 1 < r.length ? (e = [t, t, "", o], y.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, e) {
                                for (var i, n = r(t, o), s = n.length; s--;) t[i = $(t, n[s])] = !(e[i] = n[s])
                            }) : function(t) {
                                return r(t, 0, e)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: at(function(t) {
                            var n = [],
                                s = [],
                                a = u(t.replace(F, "$1"));
                            return a[D] ? at(function(t, e, i, n) {
                                for (var s, o = a(t, null, n, []), r = t.length; r--;)(s = o[r]) && (t[r] = !(e[r] = s))
                            }) : function(t, e, i) {
                                return n[0] = t, a(n, null, i, s), n[0] = null, !s.pop()
                            }
                        }),
                        has: at(function(e) {
                            return function(t) {
                                return 0 < ot(e, t).length
                            }
                        }),
                        contains: at(function(e) {
                            return e = e.replace(Z, tt),
                                function(t) {
                                    return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                                }
                        }),
                        lang: at(function(i) {
                            return G.test(i || "") || ot.error("unsupported lang: " + i), i = i.replace(Z, tt).toLowerCase(),
                                function(t) {
                                    var e;
                                    do {
                                        if (e = k ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var e = i.location && i.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function(t) {
                            return t === r
                        },
                        focus: function(t) {
                            return t === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: pt(!1),
                        disabled: pt(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !y.pseudos.empty(t)
                        },
                        header: function(t) {
                            return K.test(t.nodeName)
                        },
                        input: function(t) {
                            return V.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: ft(function() {
                            return [0]
                        }),
                        last: ft(function(t, e) {
                            return [e - 1]
                        }),
                        eq: ft(function(t, e, i) {
                            return [i < 0 ? i + e : i]
                        }),
                        even: ft(function(t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }),
                        odd: ft(function(t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }),
                        lt: ft(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                            return t
                        }),
                        gt: ft(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = y.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) y.pseudos[t] = ut(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) y.pseudos[t] = dt(t);

            function mt() {}

            function vt(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function _t(a, t, e) {
                var l = t.dir,
                    h = t.next,
                    c = h || l,
                    u = e && "parentNode" === c,
                    d = n++;
                return t.first ? function(t, e, i) {
                    for (; t = t[l];)
                        if (1 === t.nodeType || u) return a(t, e, i);
                    return !1
                } : function(t, e, i) {
                    var n, s, o, r = [T, d];
                    if (i) {
                        for (; t = t[l];)
                            if ((1 === t.nodeType || u) && a(t, e, i)) return !0
                    } else
                        for (; t = t[l];)
                            if (1 === t.nodeType || u)
                                if (s = (o = t[D] || (t[D] = {}))[t.uniqueID] || (o[t.uniqueID] = {}), h && h === t.nodeName.toLowerCase()) t = t[l] || t;
                                else {
                                    if ((n = s[c]) && n[0] === T && n[1] === d) return r[2] = n[2];
                                    if ((s[c] = r)[2] = a(t, e, i)) return !0
                                } return !1
                }
            }

            function bt(s) {
                return 1 < s.length ? function(t, e, i) {
                    for (var n = s.length; n--;)
                        if (!s[n](t, e, i)) return !1;
                    return !0
                } : s[0]
            }

            function yt(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, h = null != e; a < l; a++)(o = t[a]) && (i && !i(o, n, s) || (r.push(o), h && e.push(a)));
                return r
            }

            function wt(p, f, g, m, v, t) {
                return m && !m[D] && (m = wt(m)), v && !v[D] && (v = wt(v, t)), at(function(t, e, i, n) {
                    var s, o, r, a = [],
                        l = [],
                        h = e.length,
                        c = t || function(t, e, i) {
                            for (var n = 0, s = e.length; n < s; n++) ot(t, e[n], i);
                            return i
                        }(f || "*", i.nodeType ? [i] : i, []),
                        u = !p || !t && f ? c : yt(c, a, p, i, n),
                        d = g ? v || (t ? p : h || m) ? [] : e : u;
                    if (g && g(u, d, i, n), m)
                        for (s = yt(d, l), m(s, [], i, n), o = s.length; o--;)(r = s[o]) && (d[l[o]] = !(u[l[o]] = r));
                    if (t) {
                        if (v || p) {
                            if (v) {
                                for (s = [], o = d.length; o--;)(r = d[o]) && s.push(u[o] = r);
                                v(null, d = [], s, n)
                            }
                            for (o = d.length; o--;)(r = d[o]) && -1 < (s = v ? $(t, r) : a[o]) && (t[s] = !(e[s] = r))
                        }
                    } else d = yt(d === e ? d.splice(h, d.length) : d), v ? v(null, e, d, n) : M.apply(e, d)
                })
            }

            function xt(t) {
                for (var s, e, i, n = t.length, o = y.relative[t[0].type], r = o || y.relative[" "], a = o ? 1 : 0, l = _t(function(t) {
                        return t === s
                    }, r, !0), h = _t(function(t) {
                        return -1 < $(s, t)
                    }, r, !0), c = [function(t, e, i) {
                        var n = !o && (i || e !== w) || ((s = e).nodeType ? l(t, e, i) : h(t, e, i));
                        return s = null, n
                    }]; a < n; a++)
                    if (e = y.relative[t[a].type]) c = [_t(bt(c), e)];
                    else {
                        if ((e = y.filter[t[a].type].apply(null, t[a].matches))[D]) {
                            for (i = ++a; i < n && !y.relative[t[i].type]; i++);
                            return wt(1 < a && bt(c), 1 < a && vt(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(F, "$1"), e, a < i && xt(t.slice(a, i)), i < n && xt(t = t.slice(i)), i < n && vt(t))
                        }
                        c.push(e)
                    } return bt(c)
            }
            return mt.prototype = y.filters = y.pseudos, y.setFilters = new mt, f = ot.tokenize = function(t, e) {
                var i, n, s, o, r, a, l, h = b[t + " "];
                if (h) return e ? 0 : h.slice(0);
                for (r = t, a = [], l = y.preFilter; r;) {
                    for (o in i && !(n = j.exec(r)) || (n && (r = r.slice(n[0].length) || r), a.push(s = [])), i = !1, (n = B.exec(r)) && (i = n.shift(), s.push({
                            value: i,
                            type: n[0].replace(F, " ")
                        }), r = r.slice(i.length)), y.filter) !(n = U[o].exec(r)) || l[o] && !(n = l[o](n)) || (i = n.shift(), s.push({
                        value: i,
                        type: o,
                        matches: n
                    }), r = r.slice(i.length));
                    if (!i) break
                }
                return e ? r.length : r ? ot.error(t) : b(t, a).slice(0)
            }, u = ot.compile = function(t, e) {
                var i, m, v, _, b, n, s = [],
                    o = [],
                    r = S[t + " "];
                if (!r) {
                    for (e || (e = f(t)), i = e.length; i--;)(r = xt(e[i]))[D] ? s.push(r) : o.push(r);
                    (r = S(t, (m = o, v = s, _ = 0 < v.length, b = 0 < m.length, n = function(t, e, i, n, s) {
                        var o, r, a, l = 0,
                            h = "0",
                            c = t && [],
                            u = [],
                            d = w,
                            p = t || b && y.find.TAG("*", s),
                            f = T += null == d ? 1 : Math.random() || .1,
                            g = p.length;
                        for (s && (w = e === C || e || s); h !== g && null != (o = p[h]); h++) {
                            if (b && o) {
                                for (r = 0, e || o.ownerDocument === C || (x(o), i = !k); a = m[r++];)
                                    if (a(o, e || C, i)) {
                                        n.push(o);
                                        break
                                    } s && (T = f)
                            }
                            _ && ((o = !a && o) && l--, t && c.push(o))
                        }
                        if (l += h, _ && h !== l) {
                            for (r = 0; a = v[r++];) a(c, u, e, i);
                            if (t) {
                                if (0 < l)
                                    for (; h--;) c[h] || u[h] || (u[h] = I.call(n));
                                u = yt(u)
                            }
                            M.apply(n, u), s && !t && 0 < u.length && 1 < l + v.length && ot.uniqueSort(n)
                        }
                        return s && (T = f, w = d), c
                    }, _ ? at(n) : n))).selector = t
                }
                return r
            }, g = ot.select = function(t, e, i, n) {
                var s, o, r, a, l, h = "function" == typeof t && t,
                    c = !n && f(t = h.selector || t);
                if (i = i || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (r = o[0]).type && 9 === e.nodeType && k && y.relative[o[1].type]) {
                        if (!(e = (y.find.ID(r.matches[0].replace(Z, tt), e) || [])[0])) return i;
                        h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (s = U.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !y.relative[a = r.type]);)
                        if ((l = y.find[a]) && (n = l(r.matches[0].replace(Z, tt), Q.test(o[0].type) && gt(e.parentNode) || e))) {
                            if (o.splice(s, 1), !(t = n.length && vt(o))) return M.apply(i, n), i;
                            break
                        }
                }
                return (h || u(t, c))(n, e, !k, i, !e || Q.test(t) && gt(e.parentNode) || e), i
            }, p.sortStable = D.split("").sort(P).join("") === D, p.detectDuplicates = !!h, x(), p.sortDetached = lt(function(t) {
                return 1 & t.compareDocumentPosition(C.createElement("fieldset"))
            }), lt(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || ht("type|href|height|width", function(t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), p.attributes && lt(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || ht("value", function(t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), lt(function(t) {
                return null == t.getAttribute("disabled")
            }) || ht(O, function(t, e, i) {
                var n;
                if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), ot
        }(C);
        D.find = p, D.expr = p.selectors, D.expr[":"] = D.expr.pseudos, D.uniqueSort = D.unique = p.uniqueSort, D.text = p.getText, D.isXMLDoc = p.isXML, D.contains = p.contains, D.escapeSelector = p.escape;
        var f = function(t, e, i) {
                for (var n = [], s = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (s && D(t).is(i)) break;
                        n.push(t)
                    } return n
            },
            x = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            T = D.expr.match.needsContext;

        function S(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function A(t, i, n) {
            return _(i) ? D.grep(t, function(t, e) {
                return !!i.call(t, e, t) !== n
            }) : i.nodeType ? D.grep(t, function(t) {
                return t === i !== n
            }) : "string" != typeof i ? D.grep(t, function(t) {
                return -1 < s.call(i, t) !== n
            }) : D.filter(i, t, n)
        }
        D.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? D.find.matchesSelector(n, t) ? [n] : [] : D.find.matches(t, D.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, D.fn.extend({
            find: function(t) {
                var e, i, n = this.length,
                    s = this;
                if ("string" != typeof t) return this.pushStack(D(t).filter(function() {
                    for (e = 0; e < n; e++)
                        if (D.contains(s[e], this)) return !0
                }));
                for (i = this.pushStack([]), e = 0; e < n; e++) D.find(t, s[e], i);
                return 1 < n ? D.uniqueSort(i) : i
            },
            filter: function(t) {
                return this.pushStack(A(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(A(this, t || [], !0))
            },
            is: function(t) {
                return !!A(this, "string" == typeof t && T.test(t) ? D(t) : t || [], !1).length
            }
        });
        var I, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (D.fn.init = function(t, e, i) {
            var n, s;
            if (!t) return this;
            if (i = i || I, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : _(t) ? void 0 !== i.ready ? i.ready(t) : t(D) : D.makeArray(t, this);
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : E.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof D ? e[0] : e, D.merge(this, D.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : k, !0)), P.test(n[1]) && D.isPlainObject(e))
                    for (n in e) _(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (s = k.getElementById(n[2])) && (this[0] = s, this.length = 1), this
        }).prototype = D.fn, I = D(k);
        var M = /^(?:parents|prev(?:Until|All))/,
            N = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function $(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        D.fn.extend({
            has: function(t) {
                var e = D(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; t < i; t++)
                        if (D.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var i, n = 0,
                    s = this.length,
                    o = [],
                    r = "string" != typeof t && D(t);
                if (!T.test(t))
                    for (; n < s; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && D.find.matchesSelector(i, t))) {
                                o.push(i);
                                break
                            } return this.pushStack(1 < o.length ? D.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? s.call(D(t), this[0]) : s.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(D.uniqueSort(D.merge(this.get(), D(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), D.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return f(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return f(t, "parentNode", i)
            },
            next: function(t) {
                return $(t, "nextSibling")
            },
            prev: function(t) {
                return $(t, "previousSibling")
            },
            nextAll: function(t) {
                return f(t, "nextSibling")
            },
            prevAll: function(t) {
                return f(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return f(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return f(t, "previousSibling", i)
            },
            siblings: function(t) {
                return x((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return x(t.firstChild)
            },
            contents: function(t) {
                return S(t, "iframe") ? t.contentDocument : (S(t, "template") && (t = t.content || t), D.merge([], t.childNodes))
            }
        }, function(n, s) {
            D.fn[n] = function(t, e) {
                var i = D.map(this, s, t);
                return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = D.filter(e, i)), 1 < this.length && (N[n] || D.uniqueSort(i), M.test(n) && i.reverse()), this.pushStack(i)
            }
        });
        var O = /[^\x20\t\r\n\f]+/g;

        function L(t) {
            return t
        }

        function H(t) {
            throw t
        }

        function z(t, e, i, n) {
            var s;
            try {
                t && _(s = t.promise) ? s.call(t).done(e).fail(i) : t && _(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }
        D.Callbacks = function(n) {
            var t, i;
            n = "string" == typeof n ? (t = n, i = {}, D.each(t.match(O) || [], function(t, e) {
                i[e] = !0
            }), i) : D.extend({}, n);
            var s, e, o, r, a = [],
                l = [],
                h = -1,
                c = function() {
                    for (r = r || n.once, o = s = !0; l.length; h = -1)
                        for (e = l.shift(); ++h < a.length;) !1 === a[h].apply(e[0], e[1]) && n.stopOnFalse && (h = a.length, e = !1);
                    n.memory || (e = !1), s = !1, r && (a = e ? [] : "")
                },
                u = {
                    add: function() {
                        return a && (e && !s && (h = a.length - 1, l.push(e)), function i(t) {
                            D.each(t, function(t, e) {
                                _(e) ? n.unique && u.has(e) || a.push(e) : e && e.length && "string" !== w(e) && i(e)
                            })
                        }(arguments), e && !s && c()), this
                    },
                    remove: function() {
                        return D.each(arguments, function(t, e) {
                            for (var i; - 1 < (i = D.inArray(e, a, i));) a.splice(i, 1), i <= h && h--
                        }), this
                    },
                    has: function(t) {
                        return t ? -1 < D.inArray(t, a) : 0 < a.length
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return r = l = [], a = e = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return r = l = [], e || s || (a = e = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, e) {
                        return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), s || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return u
        }, D.extend({
            Deferred: function(t) {
                var o = [
                        ["notify", "progress", D.Callbacks("memory"), D.Callbacks("memory"), 2],
                        ["resolve", "done", D.Callbacks("once memory"), D.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", D.Callbacks("once memory"), D.Callbacks("once memory"), 1, "rejected"]
                    ],
                    s = "pending",
                    r = {
                        state: function() {
                            return s
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return r.then(null, t)
                        },
                        pipe: function() {
                            var s = arguments;
                            return D.Deferred(function(n) {
                                D.each(o, function(t, e) {
                                    var i = _(s[e[4]]) && s[e[4]];
                                    a[e[1]](function() {
                                        var t = i && i.apply(this, arguments);
                                        t && _(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments)
                                    })
                                }), s = null
                            }).promise()
                        },
                        then: function(e, i, n) {
                            var l = 0;

                            function h(s, o, r, a) {
                                return function() {
                                    var i = this,
                                        n = arguments,
                                        t = function() {
                                            var t, e;
                                            if (!(s < l)) {
                                                if ((t = r.apply(i, n)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                e = t && ("object" == typeof t || "function" == typeof t) && t.then, _(e) ? a ? e.call(t, h(l, o, L, a), h(l, o, H, a)) : (l++, e.call(t, h(l, o, L, a), h(l, o, H, a), h(l, o, L, o.notifyWith))) : (r !== L && (i = void 0, n = [t]), (a || o.resolveWith)(i, n))
                                            }
                                        },
                                        e = a ? t : function() {
                                            try {
                                                t()
                                            } catch (t) {
                                                D.Deferred.exceptionHook && D.Deferred.exceptionHook(t, e.stackTrace), l <= s + 1 && (r !== H && (i = void 0, n = [t]), o.rejectWith(i, n))
                                            }
                                        };
                                    s ? e() : (D.Deferred.getStackHook && (e.stackTrace = D.Deferred.getStackHook()), C.setTimeout(e))
                                }
                            }
                            return D.Deferred(function(t) {
                                o[0][3].add(h(0, t, _(n) ? n : L, t.notifyWith)), o[1][3].add(h(0, t, _(e) ? e : L)), o[2][3].add(h(0, t, _(i) ? i : H))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? D.extend(t, r) : r
                        }
                    },
                    a = {};
                return D.each(o, function(t, e) {
                    var i = e[2],
                        n = e[5];
                    r[e[1]] = i.add, n && i.add(function() {
                        s = n
                    }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock), i.add(e[3].fire), a[e[0]] = function() {
                        return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[e[0] + "With"] = i.fireWith
                }), r.promise(a), t && t.call(a, a), a
            },
            when: function(t) {
                var i = arguments.length,
                    e = i,
                    n = Array(e),
                    s = a.call(arguments),
                    o = D.Deferred(),
                    r = function(e) {
                        return function(t) {
                            n[e] = this, s[e] = 1 < arguments.length ? a.call(arguments) : t, --i || o.resolveWith(n, s)
                        }
                    };
                if (i <= 1 && (z(t, o.done(r(e)).resolve, o.reject, !i), "pending" === o.state() || _(s[e] && s[e].then))) return o.then();
                for (; e--;) z(s[e], r(e), o.reject);
                return o.promise()
            }
        });
        var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        D.Deferred.exceptionHook = function(t, e) {
            C.console && C.console.warn && t && R.test(t.name) && C.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, D.readyException = function(t) {
            C.setTimeout(function() {
                throw t
            })
        };
        var W = D.Deferred();

        function F() {
            k.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F), D.ready()
        }
        D.fn.ready = function(t) {
            return W.then(t).catch(function(t) {
                D.readyException(t)
            }), this
        }, D.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --D.readyWait : D.isReady) || ((D.isReady = !0) !== t && 0 < --D.readyWait || W.resolveWith(k, [D]))
            }
        }), D.ready.then = W.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(D.ready) : (k.addEventListener("DOMContentLoaded", F), C.addEventListener("load", F));
        var j = function(t, e, i, n, s, o, r) {
                var a = 0,
                    l = t.length,
                    h = null == i;
                if ("object" === w(i))
                    for (a in s = !0, i) j(t, e, a, i[a], !0, o, r);
                else if (void 0 !== n && (s = !0, _(n) || (r = !0), h && (e = r ? (e.call(t, n), null) : (h = e, function(t, e, i) {
                        return h.call(D(t), i)
                    })), e))
                    for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
            },
            B = /^-ms-/,
            q = /-([a-z])/g;

        function Y(t, e) {
            return e.toUpperCase()
        }

        function G(t) {
            return t.replace(B, "ms-").replace(q, Y)
        }
        var U = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function V() {
            this.expando = D.expando + V.uid++
        }
        V.uid = 1, V.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, U(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, s = this.cache(t);
                if ("string" == typeof e) s[G(e)] = i;
                else
                    for (n in e) s[G(n)] = e[n];
                return s
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
            },
            access: function(t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        i = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in n ? [e] : e.match(O) || []).length;
                        for (; i--;) delete n[e[i]]
                    }(void 0 === e || D.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !D.isEmptyObject(e)
            }
        };
        var K = new V,
            X = new V,
            J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Q = /[A-Z]/g;

        function Z(t, e, i) {
            var n, s;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(Q, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : J.test(s) ? JSON.parse(s) : s)
                    } catch (t) {}
                    X.set(t, e, i)
                } else i = void 0;
            return i
        }
        D.extend({
            hasData: function(t) {
                return X.hasData(t) || K.hasData(t)
            },
            data: function(t, e, i) {
                return X.access(t, e, i)
            },
            removeData: function(t, e) {
                X.remove(t, e)
            },
            _data: function(t, e, i) {
                return K.access(t, e, i)
            },
            _removeData: function(t, e) {
                K.remove(t, e)
            }
        }), D.fn.extend({
            data: function(i, t) {
                var e, n, s, o = this[0],
                    r = o && o.attributes;
                if (void 0 !== i) return "object" == typeof i ? this.each(function() {
                    X.set(this, i)
                }) : j(this, function(t) {
                    var e;
                    if (o && void 0 === t) {
                        if (void 0 !== (e = X.get(o, i))) return e;
                        if (void 0 !== (e = Z(o, i))) return e
                    } else this.each(function() {
                        X.set(this, i, t)
                    })
                }, null, t, 1 < arguments.length, null, !0);
                if (this.length && (s = X.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                    for (e = r.length; e--;) r[e] && 0 === (n = r[e].name).indexOf("data-") && (n = G(n.slice(5)), Z(o, n, s[n]));
                    K.set(o, "hasDataAttrs", !0)
                }
                return s
            },
            removeData: function(t) {
                return this.each(function() {
                    X.remove(this, t)
                })
            }
        }), D.extend({
            queue: function(t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = K.get(t, e), i && (!n || Array.isArray(i) ? n = K.access(t, e, D.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = D.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = D._queueHooks(t, e);
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, function() {
                    D.dequeue(t, e)
                }, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return K.get(t, i) || K.access(t, i, {
                    empty: D.Callbacks("once memory").add(function() {
                        K.remove(t, [e + "queue", i])
                    })
                })
            }
        }), D.fn.extend({
            queue: function(e, i) {
                var t = 2;
                return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? D.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                    var t = D.queue(this, e, i);
                    D._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && D.dequeue(this, e)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    D.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    s = D.Deferred(),
                    o = this,
                    r = this.length,
                    a = function() {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = K.get(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), s.promise(e)
            }
        });
        var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
            it = ["Top", "Right", "Bottom", "Left"],
            nt = function(t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && D.contains(t.ownerDocument, t) && "none" === D.css(t, "display")
            },
            st = function(t, e, i, n) {
                var s, o, r = {};
                for (o in e) r[o] = t.style[o], t.style[o] = e[o];
                for (o in s = i.apply(t, n || []), e) t.style[o] = r[o];
                return s
            };

        function ot(t, e, i, n) {
            var s, o, r = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return D.css(t, e, "")
                },
                l = a(),
                h = i && i[3] || (D.cssNumber[e] ? "" : "px"),
                c = (D.cssNumber[e] || "px" !== h && +l) && et.exec(D.css(t, e));
            if (c && c[3] !== h) {
                for (l /= 2, h = h || c[3], c = +l || 1; r--;) D.style(t, e, c + h), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), c /= o;
                c *= 2, D.style(t, e, c + h), i = i || []
            }
            return i && (c = +c || +l || 0, s = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = c, n.end = s)), s
        }
        var rt = {};

        function at(t, e) {
            for (var i, n, s = [], o = 0, r = t.length; o < r; o++)(n = t[o]).style && (i = n.style.display, e ? ("none" === i && (s[o] = K.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && nt(n) && (s[o] = (u = h = l = void 0, h = (a = n).ownerDocument, c = a.nodeName, (u = rt[c]) || (l = h.body.appendChild(h.createElement(c)), u = D.css(l, "display"), l.parentNode.removeChild(l), "none" === u && (u = "block"), rt[c] = u)))) : "none" !== i && (s[o] = "none", K.set(n, "display", i)));
            var a, l, h, c, u;
            for (o = 0; o < r; o++) null != s[o] && (t[o].style.display = s[o]);
            return t
        }
        D.fn.extend({
            show: function() {
                return at(this, !0)
            },
            hide: function() {
                return at(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    nt(this) ? D(this).show() : D(this).hide()
                })
            }
        });
        var lt = /^(?:checkbox|radio)$/i,
            ht = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            ct = /^$|^module$|\/(?:java|ecma)script/i,
            ut = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function dt(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && S(t, e) ? D.merge([t], i) : i
        }

        function pt(t, e) {
            for (var i = 0, n = t.length; i < n; i++) K.set(t[i], "globalEval", !e || K.get(e[i], "globalEval"))
        }
        ut.optgroup = ut.option, ut.tbody = ut.tfoot = ut.colgroup = ut.caption = ut.thead, ut.th = ut.td;
        var ft, gt, mt = /<|&#?\w+;/;

        function vt(t, e, i, n, s) {
            for (var o, r, a, l, h, c, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
                if ((o = t[p]) || 0 === o)
                    if ("object" === w(o)) D.merge(d, o.nodeType ? [o] : o);
                    else if (mt.test(o)) {
                for (r = r || u.appendChild(e.createElement("div")), a = (ht.exec(o) || ["", ""])[1].toLowerCase(), l = ut[a] || ut._default, r.innerHTML = l[1] + D.htmlPrefilter(o) + l[2], c = l[0]; c--;) r = r.lastChild;
                D.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
            } else d.push(e.createTextNode(o));
            for (u.textContent = "", p = 0; o = d[p++];)
                if (n && -1 < D.inArray(o, n)) s && s.push(o);
                else if (h = D.contains(o.ownerDocument, o), r = dt(u.appendChild(o), "script"), h && pt(r), i)
                for (c = 0; o = r[c++];) ct.test(o.type || "") && i.push(o);
            return u
        }
        ft = k.createDocumentFragment().appendChild(k.createElement("div")), (gt = k.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), ft.appendChild(gt), v.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue;
        var _t = k.documentElement,
            bt = /^key/,
            yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            wt = /^([^.]*)(?:\.(.+)|)/;

        function xt() {
            return !0
        }

        function Ct() {
            return !1
        }

        function kt() {
            try {
                return k.activeElement
            } catch (t) {}
        }

        function Dt(t, e, i, n, s, o) {
            var r, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof i && (n = n || i, i = void 0), e) Dt(t, a, i, n, e[a], o);
                return t
            }
            if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = Ct;
            else if (!s) return t;
            return 1 === o && (r = s, (s = function(t) {
                return D().off(t), r.apply(this, arguments)
            }).guid = r.guid || (r.guid = D.guid++)), t.each(function() {
                D.event.add(this, e, s, n, i)
            })
        }
        D.event = {
            global: {},
            add: function(e, t, i, n, s) {
                var o, r, a, l, h, c, u, d, p, f, g, m = K.get(e);
                if (m)
                    for (i.handler && (i = (o = i).handler, s = o.selector), s && D.find.matchesSelector(_t, s), i.guid || (i.guid = D.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function(t) {
                            return void 0 !== D && D.event.triggered !== t.type ? D.event.dispatch.apply(e, arguments) : void 0
                        }), h = (t = (t || "").match(O) || [""]).length; h--;) p = g = (a = wt.exec(t[h]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = D.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = D.event.special[p] || {}, c = D.extend({
                        type: p,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && D.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(p, r)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), D.event.global[p] = !0)
            },
            remove: function(t, e, i, n, s) {
                var o, r, a, l, h, c, u, d, p, f, g, m = K.hasData(t) && K.get(t);
                if (m && (l = m.events)) {
                    for (h = (e = (e || "").match(O) || [""]).length; h--;)
                        if (p = g = (a = wt.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                            for (u = D.event.special[p] || {}, d = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) c = d[o], !s && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                            r && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || D.removeEvent(t, p, m.handle), delete l[p])
                        } else
                            for (p in l) D.event.remove(t, p + e[h], i, n, !0);
                    D.isEmptyObject(l) && K.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, i, n, s, o, r, a = D.event.fix(t),
                    l = new Array(arguments.length),
                    h = (K.get(this, "events") || {})[a.type] || [],
                    c = D.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                    for (r = D.event.handlers.call(this, a, h), e = 0;
                        (s = r[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = s.elem, i = 0;
                            (o = s.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((D.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(t, e) {
                var i, n, s, o, r, a = [],
                    l = e.delegateCount,
                    h = t.target;
                if (l && h.nodeType && !("click" === t.type && 1 <= t.button))
                    for (; h !== this; h = h.parentNode || this)
                        if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                            for (o = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = e[i]).selector + " "] && (r[s] = n.needsContext ? -1 < D(s, this).index(h) : D.find(s, this, null, [h]).length), r[s] && o.push(n);
                            o.length && a.push({
                                elem: h,
                                handlers: o
                            })
                        } return h = this, l < e.length && a.push({
                    elem: h,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function(e, t) {
                Object.defineProperty(D.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: _(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(t) {
                return t[D.expando] ? t : new D.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== kt() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === kt() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return S(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, D.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, D.Event = function(t, e) {
            if (!(this instanceof D.Event)) return new D.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? xt : Ct, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && D.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[D.expando] = !0
        }, D.Event.prototype = {
            constructor: D.Event,
            isDefaultPrevented: Ct,
            isPropagationStopped: Ct,
            isImmediatePropagationStopped: Ct,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = xt, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = xt, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = xt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, D.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && bt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && yt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, D.event.addProp), D.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, s) {
            D.event.special[t] = {
                delegateType: s,
                bindType: s,
                handle: function(t) {
                    var e, i = t.relatedTarget,
                        n = t.handleObj;
                    return i && (i === this || D.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = s), e
                }
            }
        }), D.fn.extend({
            on: function(t, e, i, n) {
                return Dt(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return Dt(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, D(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Ct), this.each(function() {
                    D.event.remove(this, t, i, e)
                });
                for (s in t) this.off(s, e, t[s]);
                return this
            }
        });
        var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            St = /<script|<style|<link/i,
            Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function It(t, e) {
            return S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && D(t).children("tbody")[0] || t
        }

        function Et(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Mt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Nt(t, e) {
            var i, n, s, o, r, a, l, h;
            if (1 === e.nodeType) {
                if (K.hasData(t) && (o = K.access(t), r = K.set(e, o), h = o.events))
                    for (s in delete r.handle, r.events = {}, h)
                        for (i = 0, n = h[s].length; i < n; i++) D.event.add(e, s, h[s][i]);
                X.hasData(t) && (a = X.access(t), l = D.extend({}, a), X.set(e, l))
            }
        }

        function $t(i, n, s, o) {
            n = g.apply([], n);
            var t, e, r, a, l, h, c = 0,
                u = i.length,
                d = u - 1,
                p = n[0],
                f = _(p);
            if (f || 1 < u && "string" == typeof p && !v.checkClone && Pt.test(p)) return i.each(function(t) {
                var e = i.eq(t);
                f && (n[0] = p.call(this, t, e.html())), $t(e, n, s, o)
            });
            if (u && (e = (t = vt(n, i[0].ownerDocument, !1, i, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
                for (a = (r = D.map(dt(t, "script"), Et)).length; c < u; c++) l = t, c !== d && (l = D.clone(l, !0, !0), a && D.merge(r, dt(l, "script"))), s.call(i[c], l, c);
                if (a)
                    for (h = r[r.length - 1].ownerDocument, D.map(r, Mt), c = 0; c < a; c++) l = r[c], ct.test(l.type || "") && !K.access(l, "globalEval") && D.contains(h, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? D._evalUrl && D._evalUrl(l.src) : y(l.textContent.replace(At, ""), h, l))
            }
            return i
        }

        function Ot(t, e, i) {
            for (var n, s = e ? D.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || D.cleanData(dt(n)), n.parentNode && (i && D.contains(n.ownerDocument, n) && pt(dt(n, "script")), n.parentNode.removeChild(n));
            return t
        }
        D.extend({
            htmlPrefilter: function(t) {
                return t.replace(Tt, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, s, o, r, a, l, h, c = t.cloneNode(!0),
                    u = D.contains(t.ownerDocument, t);
                if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || D.isXMLDoc(t)))
                    for (r = dt(c), n = 0, s = (o = dt(t)).length; n < s; n++) a = o[n], l = r[n], void 0, "input" === (h = l.nodeName.toLowerCase()) && lt.test(a.type) ? l.checked = a.checked : "input" !== h && "textarea" !== h || (l.defaultValue = a.defaultValue);
                if (e)
                    if (i)
                        for (o = o || dt(t), r = r || dt(c), n = 0, s = o.length; n < s; n++) Nt(o[n], r[n]);
                    else Nt(t, c);
                return 0 < (r = dt(c, "script")).length && pt(r, !u && dt(t, "script")), c
            },
            cleanData: function(t) {
                for (var e, i, n, s = D.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if (U(i)) {
                        if (e = i[K.expando]) {
                            if (e.events)
                                for (n in e.events) s[n] ? D.event.remove(i, n) : D.removeEvent(i, n, e.handle);
                            i[K.expando] = void 0
                        }
                        i[X.expando] && (i[X.expando] = void 0)
                    }
            }
        }), D.fn.extend({
            detach: function(t) {
                return Ot(this, t, !0)
            },
            remove: function(t) {
                return Ot(this, t)
            },
            text: function(t) {
                return j(this, function(t) {
                    return void 0 === t ? D.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return $t(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || It(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return $t(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = It(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return $t(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return $t(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (D.cleanData(dt(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return D.clone(this, t, e)
                })
            },
            html: function(t) {
                return j(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !St.test(t) && !ut[(ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = D.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (D.cleanData(dt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var i = [];
                return $t(this, arguments, function(t) {
                    var e = this.parentNode;
                    D.inArray(this, i) < 0 && (D.cleanData(dt(this)), e && e.replaceChild(t, this))
                }, i)
            }
        }), D.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, r) {
            D.fn[t] = function(t) {
                for (var e, i = [], n = D(t), s = n.length - 1, o = 0; o <= s; o++) e = o === s ? this : this.clone(!0), D(n[o])[r](e), l.apply(i, e.get());
                return this.pushStack(i)
            }
        });
        var Lt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
            Ht = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = C), e.getComputedStyle(t)
            },
            zt = new RegExp(it.join("|"), "i");

        function Rt(t, e, i) {
            var n, s, o, r, a = t.style;
            return (i = i || Ht(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || D.contains(t.ownerDocument, t) || (r = D.style(t, e)), !v.pixelBoxStyles() && Lt.test(r) && zt.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
        }

        function Wt(t, e) {
            return {
                get: function() {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function t() {
                if (l) {
                    a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _t.appendChild(a).appendChild(l);
                    var t = C.getComputedStyle(l);
                    i = "1%" !== t.top, r = 12 === e(t.marginLeft), l.style.right = "60%", o = 36 === e(t.right), n = 36 === e(t.width), l.style.position = "absolute", s = 36 === l.offsetWidth || "absolute", _t.removeChild(a), l = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }
            var i, n, s, o, r, a = k.createElement("div"),
                l = k.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, D.extend(v, {
                boxSizingReliable: function() {
                    return t(), n
                },
                pixelBoxStyles: function() {
                    return t(), o
                },
                pixelPosition: function() {
                    return t(), i
                },
                reliableMarginLeft: function() {
                    return t(), r
                },
                scrollboxSize: function() {
                    return t(), s
                }
            }))
        }();
        var Ft = /^(none|table(?!-c[ea]).+)/,
            jt = /^--/,
            Bt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            qt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Yt = ["Webkit", "Moz", "ms"],
            Gt = k.createElement("div").style;

        function Ut(t) {
            var e = D.cssProps[t];
            return e || (e = D.cssProps[t] = function(t) {
                if (t in Gt) return t;
                for (var e = t[0].toUpperCase() + t.slice(1), i = Yt.length; i--;)
                    if ((t = Yt[i] + e) in Gt) return t
            }(t) || t), e
        }

        function Vt(t, e, i) {
            var n = et.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function Kt(t, e, i, n, s, o) {
            var r = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; r < 4; r += 2) "margin" === i && (l += D.css(t, i + it[r], !0, s)), n ? ("content" === i && (l -= D.css(t, "padding" + it[r], !0, s)), "margin" !== i && (l -= D.css(t, "border" + it[r] + "Width", !0, s))) : (l += D.css(t, "padding" + it[r], !0, s), "padding" !== i ? l += D.css(t, "border" + it[r] + "Width", !0, s) : a += D.css(t, "border" + it[r] + "Width", !0, s));
            return !n && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))), l
        }

        function Xt(t, e, i) {
            var n = Ht(t),
                s = Rt(t, e, n),
                o = "border-box" === D.css(t, "boxSizing", !1, n),
                r = o;
            if (Lt.test(s)) {
                if (!i) return s;
                s = "auto"
            }
            return r = r && (v.boxSizingReliable() || s === t.style[e]), ("auto" === s || !parseFloat(s) && "inline" === D.css(t, "display", !1, n)) && (s = t["offset" + e[0].toUpperCase() + e.slice(1)], r = !0), (s = parseFloat(s) || 0) + Kt(t, e, i || (o ? "border" : "content"), r, n, s) + "px"
        }

        function Jt(t, e, i, n, s) {
            return new Jt.prototype.init(t, e, i, n, s)
        }
        D.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = Rt(t, "opacity");
                            return "" === i ? "1" : i
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
            cssProps: {},
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, r, a = G(e),
                        l = jt.test(e),
                        h = t.style;
                    if (l || (e = Ut(a)), r = D.cssHooks[e] || D.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : h[e];
                    "string" == (o = typeof i) && (s = et.exec(i)) && s[1] && (i = ot(t, e, s), o = "number"), null != i && i == i && ("number" === o && (i += s && s[3] || (D.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l ? h.setProperty(e, i) : h[e] = i))
                }
            },
            css: function(t, e, i, n) {
                var s, o, r, a = G(e);
                return jt.test(e) || (e = Ut(a)), (r = D.cssHooks[e] || D.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = Rt(t, e, n)), "normal" === s && e in qt && (s = qt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
            }
        }), D.each(["height", "width"], function(t, a) {
            D.cssHooks[a] = {
                get: function(t, e, i) {
                    if (e) return !Ft.test(D.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Xt(t, a, i) : st(t, Bt, function() {
                        return Xt(t, a, i)
                    })
                },
                set: function(t, e, i) {
                    var n, s = Ht(t),
                        o = "border-box" === D.css(t, "boxSizing", !1, s),
                        r = i && Kt(t, a, i, o, s);
                    return o && v.scrollboxSize() === s.position && (r -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(s[a]) - Kt(t, a, "border", !1, s) - .5)), r && (n = et.exec(e)) && "px" !== (n[3] || "px") && (t.style[a] = e, e = D.css(t, a)), Vt(0, e, r)
                }
            }
        }), D.cssHooks.marginLeft = Wt(v.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(Rt(t, "marginLeft")) || t.getBoundingClientRect().left - st(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), D.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(s, o) {
            D.cssHooks[s + o] = {
                expand: function(t) {
                    for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[s + it[e] + o] = n[e] || n[e - 2] || n[0];
                    return i
                }
            }, "margin" !== s && (D.cssHooks[s + o].set = Vt)
        }), D.fn.extend({
            css: function(t, e) {
                return j(this, function(t, e, i) {
                    var n, s, o = {},
                        r = 0;
                    if (Array.isArray(e)) {
                        for (n = Ht(t), s = e.length; r < s; r++) o[e[r]] = D.css(t, e[r], !1, n);
                        return o
                    }
                    return void 0 !== i ? D.style(t, e, i) : D.css(t, e)
                }, t, e, 1 < arguments.length)
            }
        }), ((D.Tween = Jt).prototype = {
            constructor: Jt,
            init: function(t, e, i, n, s, o) {
                this.elem = t, this.prop = i, this.easing = s || D.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (D.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = Jt.propHooks[this.prop];
                return t && t.get ? t.get(this) : Jt.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = Jt.propHooks[this.prop];
                return this.options.duration ? this.pos = e = D.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Jt.propHooks._default.set(this), this
            }
        }).init.prototype = Jt.prototype, (Jt.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = D.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    D.fx.step[t.prop] ? D.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[D.cssProps[t.prop]] && !D.cssHooks[t.prop] ? t.elem[t.prop] = t.now : D.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }).scrollTop = Jt.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, D.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, D.fx = Jt.prototype.init, D.fx.step = {};
        var Qt, Zt, te, ee, ie = /^(?:toggle|show|hide)$/,
            ne = /queueHooks$/;

        function se() {
            Zt && (!1 === k.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(se) : C.setTimeout(se, D.fx.interval), D.fx.tick())
        }

        function oe() {
            return C.setTimeout(function() {
                Qt = void 0
            }), Qt = Date.now()
        }

        function re(t, e) {
            var i, n = 0,
                s = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = it[n])] = s["padding" + i] = t;
            return e && (s.opacity = s.width = t), s
        }

        function ae(t, e, i) {
            for (var n, s = (le.tweeners[e] || []).concat(le.tweeners["*"]), o = 0, r = s.length; o < r; o++)
                if (n = s[o].call(i, e, t)) return n
        }

        function le(o, t, e) {
            var i, r, n = 0,
                s = le.prefilters.length,
                a = D.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = Qt || oe(), e = Math.max(0, h.startTime + h.duration - t), i = 1 - (e / h.duration || 0), n = 0, s = h.tweens.length; n < s; n++) h.tweens[n].run(i);
                    return a.notifyWith(o, [h, i, e]), i < 1 && s ? e : (s || a.notifyWith(o, [h, 1, 0]), a.resolveWith(o, [h]), !1)
                },
                h = a.promise({
                    elem: o,
                    props: D.extend({}, t),
                    opts: D.extend(!0, {
                        specialEasing: {},
                        easing: D.easing._default
                    }, e),
                    originalProperties: t,
                    originalOptions: e,
                    startTime: Qt || oe(),
                    duration: e.duration,
                    tweens: [],
                    createTween: function(t, e) {
                        var i = D.Tween(o, h.opts, t, e, h.opts.specialEasing[t] || h.opts.easing);
                        return h.tweens.push(i), i
                    },
                    stop: function(t) {
                        var e = 0,
                            i = t ? h.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; e < i; e++) h.tweens[e].run(1);
                        return t ? (a.notifyWith(o, [h, 1, 0]), a.resolveWith(o, [h, t])) : a.rejectWith(o, [h, t]), this
                    }
                }),
                c = h.props;
            for (function(t, e) {
                    var i, n, s, o, r;
                    for (i in t)
                        if (s = e[n = G(i)], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = D.cssHooks[n]) && "expand" in r)
                            for (i in o = r.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s);
                        else e[n] = s
                }(c, h.opts.specialEasing); n < s; n++)
                if (i = le.prefilters[n].call(h, o, c, h.opts)) return _(i.stop) && (D._queueHooks(h.elem, h.opts.queue).stop = i.stop.bind(i)), i;
            return D.map(c, ae, h), _(h.opts.start) && h.opts.start.call(o, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), D.fx.timer(D.extend(l, {
                elem: o,
                anim: h,
                queue: h.opts.queue
            })), h
        }
        D.Animation = D.extend(le, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return ot(i.elem, t, et.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                for (var i, n = 0, s = (t = _(t) ? (e = t, ["*"]) : t.match(O)).length; n < s; n++) i = t[n], le.tweeners[i] = le.tweeners[i] || [], le.tweeners[i].unshift(e)
            },
            prefilters: [function(t, e, i) {
                var n, s, o, r, a, l, h, c, u = "width" in e || "height" in e,
                    d = this,
                    p = {},
                    f = t.style,
                    g = t.nodeType && nt(t),
                    m = K.get(t, "fxshow");
                for (n in i.queue || (null == (r = D._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                        r.unqueued || a()
                    }), r.unqueued++, d.always(function() {
                        d.always(function() {
                            r.unqueued--, D.queue(t, "fx").length || r.empty.fire()
                        })
                    })), e)
                    if (s = e[n], ie.test(s)) {
                        if (delete e[n], o = o || "toggle" === s, s === (g ? "hide" : "show")) {
                            if ("show" !== s || !m || void 0 === m[n]) continue;
                            g = !0
                        }
                        p[n] = m && m[n] || D.style(t, n)
                    } if ((l = !D.isEmptyObject(e)) || !D.isEmptyObject(p))
                    for (n in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = m && m.display) && (h = K.get(t, "display")), "none" === (c = D.css(t, "display")) && (h ? c = h : (at([t], !0), h = t.style.display || h, c = D.css(t, "display"), at([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === D.css(t, "float") && (l || (d.done(function() {
                            f.display = h
                        }), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function() {
                            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                        })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(t, "fxshow", {
                        display: h
                    }), o && (m.hidden = !g), g && at([t], !0), d.done(function() {
                        for (n in g || at([t]), K.remove(t, "fxshow"), p) D.style(t, n, p[n])
                    })), l = ae(g ? m[n] : 0, n, d), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(t, e) {
                e ? le.prefilters.unshift(t) : le.prefilters.push(t)
            }
        }), D.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? D.extend({}, t) : {
                complete: i || !i && e || _(t) && t,
                duration: t,
                easing: i && e || e && !_(e) && e
            };
            return D.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in D.fx.speeds ? n.duration = D.fx.speeds[n.duration] : n.duration = D.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                _(n.old) && n.old.call(this), n.queue && D.dequeue(this, n.queue)
            }, n
        }, D.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(nt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(e, t, i, n) {
                var s = D.isEmptyObject(e),
                    o = D.speed(t, i, n),
                    r = function() {
                        var t = le(this, D.extend({}, e), o);
                        (s || K.get(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function(s, t, o) {
                var r = function(t) {
                    var e = t.stop;
                    delete t.stop, e(o)
                };
                return "string" != typeof s && (o = t, t = s, s = void 0), t && !1 !== s && this.queue(s || "fx", []), this.each(function() {
                    var t = !0,
                        e = null != s && s + "queueHooks",
                        i = D.timers,
                        n = K.get(this);
                    if (e) n[e] && n[e].stop && r(n[e]);
                    else
                        for (e in n) n[e] && n[e].stop && ne.test(e) && r(n[e]);
                    for (e = i.length; e--;) i[e].elem !== this || null != s && i[e].queue !== s || (i[e].anim.stop(o), t = !1, i.splice(e, 1));
                    !t && o || D.dequeue(this, s)
                })
            },
            finish: function(r) {
                return !1 !== r && (r = r || "fx"), this.each(function() {
                    var t, e = K.get(this),
                        i = e[r + "queue"],
                        n = e[r + "queueHooks"],
                        s = D.timers,
                        o = i ? i.length : 0;
                    for (e.finish = !0, D.queue(this, r, []), n && n.stop && n.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === r && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete e.finish
                })
            }
        }), D.each(["toggle", "show", "hide"], function(t, n) {
            var s = D.fn[n];
            D.fn[n] = function(t, e, i) {
                return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(re(n, !0), t, e, i)
            }
        }), D.each({
            slideDown: re("show"),
            slideUp: re("hide"),
            slideToggle: re("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, n) {
            D.fn[t] = function(t, e, i) {
                return this.animate(n, t, e, i)
            }
        }), D.timers = [], D.fx.tick = function() {
            var t, e = 0,
                i = D.timers;
            for (Qt = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || D.fx.stop(), Qt = void 0
        }, D.fx.timer = function(t) {
            D.timers.push(t), D.fx.start()
        }, D.fx.interval = 13, D.fx.start = function() {
            Zt || (Zt = !0, se())
        }, D.fx.stop = function() {
            Zt = null
        }, D.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, D.fn.delay = function(n, t) {
            return n = D.fx && D.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, e) {
                var i = C.setTimeout(t, n);
                e.stop = function() {
                    C.clearTimeout(i)
                }
            })
        }, te = k.createElement("input"), ee = k.createElement("select").appendChild(k.createElement("option")), te.type = "checkbox", v.checkOn = "" !== te.value, v.optSelected = ee.selected, (te = k.createElement("input")).value = "t", te.type = "radio", v.radioValue = "t" === te.value;
        var he, ce = D.expr.attrHandle;
        D.fn.extend({
            attr: function(t, e) {
                return j(this, D.attr, t, e, 1 < arguments.length)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    D.removeAttr(this, t)
                })
            }
        }), D.extend({
            attr: function(t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? D.prop(t, e, i) : (1 === o && D.isXMLDoc(t) || (s = D.attrHooks[e.toLowerCase()] || (D.expr.match.bool.test(e) ? he : void 0)), void 0 !== i ? null === i ? void D.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = D.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!v.radioValue && "radio" === e && S(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n = 0,
                    s = e && e.match(O);
                if (s && 1 === t.nodeType)
                    for (; i = s[n++];) t.removeAttribute(i)
            }
        }), he = {
            set: function(t, e, i) {
                return !1 === e ? D.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, D.each(D.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var r = ce[e] || D.find.attr;
            ce[e] = function(t, e, i) {
                var n, s, o = e.toLowerCase();
                return i || (s = ce[o], ce[o] = n, n = null != r(t, e, i) ? o : null, ce[o] = s), n
            }
        });
        var ue = /^(?:input|select|textarea|button)$/i,
            de = /^(?:a|area)$/i;

        function pe(t) {
            return (t.match(O) || []).join(" ")
        }

        function fe(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function ge(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || []
        }
        D.fn.extend({
            prop: function(t, e) {
                return j(this, D.prop, t, e, 1 < arguments.length)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[D.propFix[t] || t]
                })
            }
        }), D.extend({
            prop: function(t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && D.isXMLDoc(t) || (e = D.propFix[e] || e, s = D.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = D.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ue.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), v.optSelected || (D.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), D.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            D.propFix[this.toLowerCase()] = this
        }), D.fn.extend({
            addClass: function(e) {
                var t, i, n, s, o, r, a, l = 0;
                if (_(e)) return this.each(function(t) {
                    D(this).addClass(e.call(this, t, fe(this)))
                });
                if ((t = ge(e)).length)
                    for (; i = this[l++];)
                        if (s = fe(i), n = 1 === i.nodeType && " " + pe(s) + " ") {
                            for (r = 0; o = t[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            s !== (a = pe(n)) && i.setAttribute("class", a)
                        } return this
            },
            removeClass: function(e) {
                var t, i, n, s, o, r, a, l = 0;
                if (_(e)) return this.each(function(t) {
                    D(this).removeClass(e.call(this, t, fe(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = ge(e)).length)
                    for (; i = this[l++];)
                        if (s = fe(i), n = 1 === i.nodeType && " " + pe(s) + " ") {
                            for (r = 0; o = t[r++];)
                                for (; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                            s !== (a = pe(n)) && i.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(s, e) {
                var o = typeof s,
                    r = "string" === o || Array.isArray(s);
                return "boolean" == typeof e && r ? e ? this.addClass(s) : this.removeClass(s) : _(s) ? this.each(function(t) {
                    D(this).toggleClass(s.call(this, t, fe(this), e), e)
                }) : this.each(function() {
                    var t, e, i, n;
                    if (r)
                        for (e = 0, i = D(this), n = ge(s); t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== s && "boolean" !== o || ((t = fe(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === s ? "" : K.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && -1 < (" " + pe(fe(i)) + " ").indexOf(e)) return !0;
                return !1
            }
        });
        var me = /\r/g;
        D.fn.extend({
            val: function(i) {
                var n, t, s, e = this[0];
                return arguments.length ? (s = _(i), this.each(function(t) {
                    var e;
                    1 === this.nodeType && (null == (e = s ? i.call(this, t, D(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = D.map(e, function(t) {
                        return null == t ? "" : t + ""
                    })), (n = D.valHooks[this.type] || D.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                })) : e ? (n = D.valHooks[e.type] || D.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(me, "") : null == t ? "" : t : void 0
            }
        }), D.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = D.find.attr(t, "value");
                        return null != e ? e : pe(D.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, n, s = t.options,
                            o = t.selectedIndex,
                            r = "select-one" === t.type,
                            a = r ? null : [],
                            l = r ? o + 1 : s.length;
                        for (n = o < 0 ? l : r ? o : 0; n < l; n++)
                            if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !S(i.parentNode, "optgroup"))) {
                                if (e = D(i).val(), r) return e;
                                a.push(e)
                            } return a
                    },
                    set: function(t, e) {
                        for (var i, n, s = t.options, o = D.makeArray(e), r = s.length; r--;)((n = s[r]).selected = -1 < D.inArray(D.valHooks.option.get(n), o)) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), D.each(["radio", "checkbox"], function() {
            D.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = -1 < D.inArray(D(t).val(), e)
                }
            }, v.checkOn || (D.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), v.focusin = "onfocusin" in C;
        var ve = /^(?:focusinfocus|focusoutblur)$/,
            _e = function(t) {
                t.stopPropagation()
            };
        D.extend(D.event, {
            trigger: function(t, e, i, n) {
                var s, o, r, a, l, h, c, u, d = [i || k],
                    p = m.call(t, "type") ? t.type : t,
                    f = m.call(t, "namespace") ? t.namespace.split(".") : [];
                if (o = u = r = i = i || k, 3 !== i.nodeType && 8 !== i.nodeType && !ve.test(p + D.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (t = t[D.expando] ? t : new D.Event(p, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : D.makeArray(e, [t]), c = D.event.special[p] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, e))) {
                    if (!n && !c.noBubble && !b(i)) {
                        for (a = c.delegateType || p, ve.test(a + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), r = o;
                        r === (i.ownerDocument || k) && d.push(r.defaultView || r.parentWindow || C)
                    }
                    for (s = 0;
                        (o = d[s++]) && !t.isPropagationStopped();) u = o, t.type = 1 < s ? a : c.bindType || p, (h = (K.get(o, "events") || {})[t.type] && K.get(o, "handle")) && h.apply(o, e), (h = l && o[l]) && h.apply && U(o) && (t.result = h.apply(o, e), !1 === t.result && t.preventDefault());
                    return t.type = p, n || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), e) || !U(i) || l && _(i[p]) && !b(i) && ((r = i[l]) && (i[l] = null), D.event.triggered = p, t.isPropagationStopped() && u.addEventListener(p, _e), i[p](), t.isPropagationStopped() && u.removeEventListener(p, _e), D.event.triggered = void 0, r && (i[l] = r)), t.result
                }
            },
            simulate: function(t, e, i) {
                var n = D.extend(new D.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                D.event.trigger(n, null, e)
            }
        }), D.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    D.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i) return D.event.trigger(t, e, i, !0)
            }
        }), v.focusin || D.each({
            focus: "focusin",
            blur: "focusout"
        }, function(i, n) {
            var s = function(t) {
                D.event.simulate(n, t.target, D.event.fix(t))
            };
            D.event.special[n] = {
                setup: function() {
                    var t = this.ownerDocument || this,
                        e = K.access(t, n);
                    e || t.addEventListener(i, s, !0), K.access(t, n, (e || 0) + 1)
                },
                teardown: function() {
                    var t = this.ownerDocument || this,
                        e = K.access(t, n) - 1;
                    e ? K.access(t, n, e) : (t.removeEventListener(i, s, !0), K.remove(t, n))
                }
            }
        });
        var be = C.location,
            ye = Date.now(),
            we = /\?/;
        D.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new C.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || D.error("Invalid XML: " + t), e
        };
        var xe = /\[\]$/,
            Ce = /\r?\n/g,
            ke = /^(?:submit|button|image|reset|file)$/i,
            De = /^(?:input|select|textarea|keygen)/i;

        function Te(i, t, n, s) {
            var e;
            if (Array.isArray(t)) D.each(t, function(t, e) {
                n || xe.test(i) ? s(i, e) : Te(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, s)
            });
            else if (n || "object" !== w(t)) s(i, t);
            else
                for (e in t) Te(i + "[" + e + "]", t[e], n, s)
        }
        D.param = function(t, e) {
            var i, n = [],
                s = function(t, e) {
                    var i = _(e) ? e() : e;
                    n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                };
            if (Array.isArray(t) || t.jquery && !D.isPlainObject(t)) D.each(t, function() {
                s(this.name, this.value)
            });
            else
                for (i in t) Te(i, t[i], e, s);
            return n.join("&")
        }, D.fn.extend({
            serialize: function() {
                return D.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = D.prop(this, "elements");
                    return t ? D.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !D(this).is(":disabled") && De.test(this.nodeName) && !ke.test(t) && (this.checked || !lt.test(t))
                }).map(function(t, e) {
                    var i = D(this).val();
                    return null == i ? null : Array.isArray(i) ? D.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ce, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Ce, "\r\n")
                    }
                }).get()
            }
        });
        var Se = /%20/g,
            Pe = /#.*$/,
            Ae = /([?&])_=[^&]*/,
            Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ee = /^(?:GET|HEAD)$/,
            Me = /^\/\//,
            Ne = {},
            $e = {},
            Oe = "*/".concat("*"),
            Le = k.createElement("a");

        function He(o) {
            return function(t, e) {
                "string" != typeof t && (e = t, t = "*");
                var i, n = 0,
                    s = t.toLowerCase().match(O) || [];
                if (_(e))
                    for (; i = s[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (o[i] = o[i] || []).unshift(e)) : (o[i] = o[i] || []).push(e)
            }
        }

        function ze(e, s, o, r) {
            var a = {},
                l = e === $e;

            function h(t) {
                var n;
                return a[t] = !0, D.each(e[t] || [], function(t, e) {
                    var i = e(s, o, r);
                    return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (s.dataTypes.unshift(i), h(i), !1)
                }), n
            }
            return h(s.dataTypes[0]) || !a["*"] && h("*")
        }

        function Re(t, e) {
            var i, n, s = D.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
            return n && D.extend(!0, t, n), t
        }
        Le.href = be.href, D.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Oe,
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
                    "text json": JSON.parse,
                    "text xml": D.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Re(Re(t, D.ajaxSettings), e) : Re(D.ajaxSettings, t)
            },
            ajaxPrefilter: He(Ne),
            ajaxTransport: He($e),
            ajax: function(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var c, u, d, i, p, n, f, g, s, o, m = D.ajaxSetup({}, e),
                    v = m.context || m,
                    _ = m.context && (v.nodeType || v.jquery) ? D(v) : D.event,
                    b = D.Deferred(),
                    y = D.Callbacks("once memory"),
                    w = m.statusCode || {},
                    r = {},
                    a = {},
                    l = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (f) {
                                if (!i)
                                    for (i = {}; e = Ie.exec(d);) i[e[1].toLowerCase()] = e[2];
                                e = i[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return f ? d : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == f && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, r[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == f && (m.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (f) x.always(t[x.status]);
                                else
                                    for (e in t) w[e] = [w[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || l;
                            return c && c.abort(e), h(0, e), this
                        }
                    };
                if (b.promise(x), m.url = ((t || m.url || be.href) + "").replace(Me, be.protocol + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(O) || [""], null == m.crossDomain) {
                    n = k.createElement("a");
                    try {
                        n.href = m.url, n.href = n.href, m.crossDomain = Le.protocol + "//" + Le.host != n.protocol + "//" + n.host
                    } catch (t) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = D.param(m.data, m.traditional)), ze(Ne, m, e, x), f) return x;
                for (s in (g = D.event && m.global) && 0 == D.active++ && D.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ee.test(m.type), u = m.url.replace(Pe, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Se, "+")) : (o = m.url.slice(u.length), m.data && (m.processData || "string" == typeof m.data) && (u += (we.test(u) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (u = u.replace(Ae, "$1"), o = (we.test(u) ? "&" : "?") + "_=" + ye++ + o), m.url = u + o), m.ifModified && (D.lastModified[u] && x.setRequestHeader("If-Modified-Since", D.lastModified[u]), D.etag[u] && x.setRequestHeader("If-None-Match", D.etag[u])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : m.accepts["*"]), m.headers) x.setRequestHeader(s, m.headers[s]);
                if (m.beforeSend && (!1 === m.beforeSend.call(v, x, m) || f)) return x.abort();
                if (l = "abort", y.add(m.complete), x.done(m.success), x.fail(m.error), c = ze($e, m, e, x)) {
                    if (x.readyState = 1, g && _.trigger("ajaxSend", [x, m]), f) return x;
                    m.async && 0 < m.timeout && (p = C.setTimeout(function() {
                        x.abort("timeout")
                    }, m.timeout));
                    try {
                        f = !1, c.send(r, h)
                    } catch (t) {
                        if (f) throw t;
                        h(-1, t)
                    }
                } else h(-1, "No Transport");

                function h(t, e, i, n) {
                    var s, o, r, a, l, h = e;
                    f || (f = !0, p && C.clearTimeout(p), c = void 0, d = n || "", x.readyState = 0 < t ? 4 : 0, s = 200 <= t && t < 300 || 304 === t, i && (a = function(t, e, i) {
                        for (var n, s, o, r, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (s in a)
                                if (a[s] && a[s].test(n)) {
                                    l.unshift(s);
                                    break
                                } if (l[0] in i) o = l[0];
                        else {
                            for (s in i) {
                                if (!l[0] || t.converters[s + " " + l[0]]) {
                                    o = s;
                                    break
                                }
                                r || (r = s)
                            }
                            o = o || r
                        }
                        if (o) return o !== l[0] && l.unshift(o), i[o]
                    }(m, x, i)), a = function(t, e, i, n) {
                        var s, o, r, a, l, h = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
                        for (o = c.shift(); o;)
                            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(r = h[l + " " + o] || h["* " + o]))
                                for (s in h)
                                    if ((a = s.split(" "))[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                                        !0 === r ? r = h[s] : !0 !== h[s] && (o = a[0], c.unshift(a[1]));
                                        break
                                    } if (!0 !== r)
                                if (r && t.throws) e = r(e);
                                else try {
                                    e = r(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: r ? t : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(m, a, x, s), s ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (D.lastModified[u] = l), (l = x.getResponseHeader("etag")) && (D.etag[u] = l)), 204 === t || "HEAD" === m.type ? h = "nocontent" : 304 === t ? h = "notmodified" : (h = a.state, o = a.data, s = !(r = a.error))) : (r = h, !t && h || (h = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || h) + "", s ? b.resolveWith(v, [o, h, x]) : b.rejectWith(v, [x, h, r]), x.statusCode(w), w = void 0, g && _.trigger(s ? "ajaxSuccess" : "ajaxError", [x, m, s ? o : r]), y.fireWith(v, [x, h]), g && (_.trigger("ajaxComplete", [x, m]), --D.active || D.event.trigger("ajaxStop")))
                }
                return x
            },
            getJSON: function(t, e, i) {
                return D.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return D.get(t, void 0, e, "script")
            }
        }), D.each(["get", "post"], function(t, s) {
            D[s] = function(t, e, i, n) {
                return _(e) && (n = n || i, i = e, e = void 0), D.ajax(D.extend({
                    url: t,
                    type: s,
                    dataType: n,
                    data: e,
                    success: i
                }, D.isPlainObject(t) && t))
            }
        }), D._evalUrl = function(t) {
            return D.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, D.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (_(t) && (t = t.call(this[0])), e = D(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(i) {
                return _(i) ? this.each(function(t) {
                    D(this).wrapInner(i.call(this, t))
                }) : this.each(function() {
                    var t = D(this),
                        e = t.contents();
                    e.length ? e.wrapAll(i) : t.append(i)
                })
            },
            wrap: function(e) {
                var i = _(e);
                return this.each(function(t) {
                    D(this).wrapAll(i ? e.call(this, t) : e)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    D(this).replaceWith(this.childNodes)
                }), this
            }
        }), D.expr.pseudos.hidden = function(t) {
            return !D.expr.pseudos.visible(t)
        }, D.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, D.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest
            } catch (t) {}
        };
        var We = {
                0: 200,
                1223: 204
            },
            Fe = D.ajaxSettings.xhr();
        v.cors = !!Fe && "withCredentials" in Fe, v.ajax = Fe = !!Fe, D.ajaxTransport(function(s) {
            var o, r;
            if (v.cors || Fe && !s.crossDomain) return {
                send: function(t, e) {
                    var i, n = s.xhr();
                    if (n.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)
                        for (i in s.xhrFields) n[i] = s.xhrFields[i];
                    for (i in s.mimeType && n.overrideMimeType && n.overrideMimeType(s.mimeType), s.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                    o = function(t) {
                        return function() {
                            o && (o = r = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(We[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                                binary: n.response
                            } : {
                                text: n.responseText
                            }, n.getAllResponseHeaders()))
                        }
                    }, n.onload = o(), r = n.onerror = n.ontimeout = o("error"), void 0 !== n.onabort ? n.onabort = r : n.onreadystatechange = function() {
                        4 === n.readyState && C.setTimeout(function() {
                            o && r()
                        })
                    }, o = o("abort");
                    try {
                        n.send(s.hasContent && s.data || null)
                    } catch (t) {
                        if (o) throw t
                    }
                },
                abort: function() {
                    o && o()
                }
            }
        }), D.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), D.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return D.globalEval(t), t
                }
            }
        }), D.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), D.ajaxTransport("script", function(i) {
            var n, s;
            if (i.crossDomain) return {
                send: function(t, e) {
                    n = D("<script>").prop({
                        charset: i.scriptCharset,
                        src: i.url
                    }).on("load error", s = function(t) {
                        n.remove(), s = null, t && e("error" === t.type ? 404 : 200, t.type)
                    }), k.head.appendChild(n[0])
                },
                abort: function() {
                    s && s()
                }
            }
        });
        var je, Be = [],
            qe = /(=)\?(?=&|$)|\?\?/;
        D.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Be.pop() || D.expando + "_" + ye++;
                return this[t] = !0, t
            }
        }), D.ajaxPrefilter("json jsonp", function(t, e, i) {
            var n, s, o, r = !1 !== t.jsonp && (qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qe.test(t.data) && "data");
            if (r || "jsonp" === t.dataTypes[0]) return n = t.jsonpCallback = _(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(qe, "$1" + n) : !1 !== t.jsonp && (t.url += (we.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
                return o || D.error(n + " was not called"), o[0]
            }, t.dataTypes[0] = "json", s = C[n], C[n] = function() {
                o = arguments
            }, i.always(function() {
                void 0 === s ? D(C).removeProp(n) : C[n] = s, t[n] && (t.jsonpCallback = e.jsonpCallback, Be.push(n)), o && _(s) && s(o[0]), o = s = void 0
            }), "script"
        }), v.createHTMLDocument = ((je = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === je.childNodes.length), D.parseHTML = function(t, e, i) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (v.createHTMLDocument ? ((n = (e = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, e.head.appendChild(n)) : e = k), o = !i && [], (s = P.exec(t)) ? [e.createElement(s[1])] : (s = vt([t], e, o), o && o.length && D(o).remove(), D.merge([], s.childNodes)));
            var n, s, o
        }, D.fn.load = function(t, e, i) {
            var n, s, o, r = this,
                a = t.indexOf(" ");
            return -1 < a && (n = pe(t.slice(a)), t = t.slice(0, a)), _(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < r.length && D.ajax({
                url: t,
                type: s || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, r.html(n ? D("<div>").append(D.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                r.each(function() {
                    i.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, D.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            D.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), D.expr.pseudos.animated = function(e) {
            return D.grep(D.timers, function(t) {
                return e === t.elem
            }).length
        }, D.offset = {
            setOffset: function(t, e, i) {
                var n, s, o, r, a, l, h = D.css(t, "position"),
                    c = D(t),
                    u = {};
                "static" === h && (t.style.position = "relative"), a = c.offset(), o = D.css(t, "top"), l = D.css(t, "left"), s = ("absolute" === h || "fixed" === h) && -1 < (o + l).indexOf("auto") ? (r = (n = c.position()).top, n.left) : (r = parseFloat(o) || 0, parseFloat(l) || 0), _(e) && (e = e.call(t, i, D.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + s), "using" in e ? e.using.call(t, u) : c.css(u)
            }
        }, D.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    D.offset.setOffset(this, e, t)
                });
                var t, i, n = this[0];
                return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                    top: t.top + i.pageYOffset,
                    left: t.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i, n = this[0],
                        s = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === D.css(n, "position")) e = n.getBoundingClientRect();
                    else {
                        for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === D.css(t, "position");) t = t.parentNode;
                        t && t !== n && 1 === t.nodeType && ((s = D(t).offset()).top += D.css(t, "borderTopWidth", !0), s.left += D.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - s.top - D.css(n, "marginTop", !0),
                        left: e.left - s.left - D.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === D.css(t, "position");) t = t.offsetParent;
                    return t || _t
                })
            }
        }), D.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, s) {
            var o = "pageYOffset" === s;
            D.fn[e] = function(t) {
                return j(this, function(t, e, i) {
                    var n;
                    if (b(t) ? n = t : 9 === t.nodeType && (n = t.defaultView), void 0 === i) return n ? n[s] : t[e];
                    n ? n.scrollTo(o ? n.pageXOffset : i, o ? i : n.pageYOffset) : t[e] = i
                }, e, t, arguments.length)
            }
        }), D.each(["top", "left"], function(t, i) {
            D.cssHooks[i] = Wt(v.pixelPosition, function(t, e) {
                if (e) return e = Rt(t, i), Lt.test(e) ? D(t).position()[i] + "px" : e
            })
        }), D.each({
            Height: "height",
            Width: "width"
        }, function(r, a) {
            D.each({
                padding: "inner" + r,
                content: a,
                "": "outer" + r
            }, function(n, o) {
                D.fn[o] = function(t, e) {
                    var i = arguments.length && (n || "boolean" != typeof t),
                        s = n || (!0 === t || !0 === e ? "margin" : "border");
                    return j(this, function(t, e, i) {
                        var n;
                        return b(t) ? 0 === o.indexOf("outer") ? t["inner" + r] : t.document.documentElement["client" + r] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + r], n["scroll" + r], t.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? D.css(t, e, s) : D.style(t, e, i, s)
                    }, a, i ? t : void 0, i)
                }
            })
        }), D.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, i) {
            D.fn[i] = function(t, e) {
                return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
            }
        }), D.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), D.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }), D.proxy = function(t, e) {
            var i, n, s;
            if ("string" == typeof e && (i = t[e], e = t, t = i), _(t)) return n = a.call(arguments, 2), (s = function() {
                return t.apply(e || this, n.concat(a.call(arguments)))
            }).guid = t.guid = t.guid || D.guid++, s
        }, D.holdReady = function(t) {
            t ? D.readyWait++ : D.ready(!0)
        }, D.isArray = Array.isArray, D.parseJSON = JSON.parse, D.nodeName = S, D.isFunction = _, D.isWindow = b, D.camelCase = G, D.type = w, D.now = Date.now, D.isNumeric = function(t) {
            var e = D.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, "function" == typeof define && define.amd && define("jquery", [], function() {
            return D
        });
        var Ye = C.jQuery,
            Ge = C.$;
        return D.noConflict = function(t) {
            return C.$ === D && (C.$ = Ge), t && C.jQuery === D && (C.jQuery = Ye), D
        }, t || (C.jQuery = C.$ = D), D
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(T) {
        function t() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
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
                disabled: !1
            }, T.extend(this._defaults, this.regional[""]), this.regional.en = T.extend(!0, {}, this.regional[""]), this.regional["en-US"] = T.extend(!0, {}, this.regional.en), this.dpDiv = i(T("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function i(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.on("mouseout", e, function() {
                T(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && T(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && T(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", e, o)
        }

        function o() {
            T.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (T(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), T(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && T(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && T(this).addClass("ui-datepicker-next-hover"))
        }

        function u(t, e) {
            for (var i in T.extend(t, e), e) null == e[i] && (t[i] = e[i]);
            return t
        }

        function e(e) {
            return function() {
                var t = this.element.val();
                e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
            }
        }
        T.ui = T.ui || {}, T.ui.version = "1.12.1";
        var n, s, r = 0,
            a = Array.prototype.slice;
        T.cleanData = (s = T.cleanData, function(t) {
                var e, i, n;
                for (n = 0; null != (i = t[n]); n++) try {
                    (e = T._data(i, "events")) && e.remove && T(i).triggerHandler("remove")
                } catch (t) {}
                s(t)
            }), T.widget = function(t, i, e) {
                var n, s, o, r = {},
                    a = t.split(".")[0],
                    l = a + "-" + (t = t.split(".")[1]);
                return e || (e = i, i = T.Widget), T.isArray(e) && (e = T.extend.apply(null, [{}].concat(e))), T.expr.pseudos[l.toLowerCase()] = function(t) {
                    return !!T.data(t, l)
                }, T[a] = T[a] || {}, n = T[a][t], s = T[a][t] = function(t, e) {
                    return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new s(t, e)
                }, T.extend(s, n, {
                    version: e.version,
                    _proto: T.extend({}, e),
                    _childConstructors: []
                }), (o = new i).options = T.widget.extend({}, o.options), T.each(e, function(e, o) {
                    return T.isFunction(o) ? void(r[e] = function() {
                        function n() {
                            return i.prototype[e].apply(this, arguments)
                        }

                        function s(t) {
                            return i.prototype[e].apply(this, t)
                        }
                        return function() {
                            var t, e = this._super,
                                i = this._superApply;
                            return this._super = n, this._superApply = s, t = o.apply(this, arguments), this._super = e, this._superApply = i, t
                        }
                    }()) : void(r[e] = o)
                }), s.prototype = T.widget.extend(o, {
                    widgetEventPrefix: n && o.widgetEventPrefix || t
                }, r, {
                    constructor: s,
                    namespace: a,
                    widgetName: t,
                    widgetFullName: l
                }), n ? (T.each(n._childConstructors, function(t, e) {
                    var i = e.prototype;
                    T.widget(i.namespace + "." + i.widgetName, s, e._proto)
                }), delete n._childConstructors) : i._childConstructors.push(s), T.widget.bridge(t, s), s
            }, T.widget.extend = function(t) {
                for (var e, i, n = a.call(arguments, 1), s = 0, o = n.length; s < o; s++)
                    for (e in n[s]) i = n[s][e], n[s].hasOwnProperty(e) && void 0 !== i && (t[e] = T.isPlainObject(i) ? T.isPlainObject(t[e]) ? T.widget.extend({}, t[e], i) : T.widget.extend({}, i) : i);
                return t
            }, T.widget.bridge = function(o, e) {
                var r = e.prototype.widgetFullName || o;
                T.fn[o] = function(i) {
                    var t = "string" == typeof i,
                        n = a.call(arguments, 1),
                        s = this;
                    return t ? this.length || "instance" !== i ? this.each(function() {
                        var t, e = T.data(this, r);
                        return "instance" === i ? (s = e, !1) : e ? T.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, n)) !== e && void 0 !== t ? (s = t && t.jquery ? s.pushStack(t.get()) : t, !1) : void 0 : T.error("no such method '" + i + "' for " + o + " widget instance") : T.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
                    }) : s = void 0 : (n.length && (i = T.widget.extend.apply(null, [i].concat(n))), this.each(function() {
                        var t = T.data(this, r);
                        t ? (t.option(i || {}), t._init && t._init()) : T.data(this, r, new e(i, this))
                    })), s
                }
            }, T.Widget = function() {}, T.Widget._childConstructors = [], T.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(t, e) {
                    e = T(e || this.defaultElement || this)[0], this.element = T(e), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = T(), this.hoverable = T(), this.focusable = T(), this.classesElementLookup = {}, e !== this && (T.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === e && this.destroy()
                        }
                    }), this.document = T(e.style ? e.ownerDocument : e.document || e), this.window = T(this.document[0].defaultView || this.document[0].parentWindow)), this.options = T.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: function() {
                    return {}
                },
                _getCreateEventData: T.noop,
                _create: T.noop,
                _init: T.noop,
                destroy: function() {
                    var i = this;
                    this._destroy(), T.each(this.classesElementLookup, function(t, e) {
                        i._removeClass(e, t)
                    }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                },
                _destroy: T.noop,
                widget: function() {
                    return this.element
                },
                option: function(t, e) {
                    var i, n, s, o = t;
                    if (0 === arguments.length) return T.widget.extend({}, this.options);
                    if ("string" == typeof t)
                        if (o = {}, t = (i = t.split(".")).shift(), i.length) {
                            for (n = o[t] = T.widget.extend({}, this.options[t]), s = 0; i.length - 1 > s; s++) n[i[s]] = n[i[s]] || {}, n = n[i[s]];
                            if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                            n[t] = e
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                            o[t] = e
                        } return this._setOptions(o), this
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
                    var e, i, n;
                    for (e in t) n = this.classesElementLookup[e], t[e] !== this.options.classes[e] && n && n.length && (i = T(n.get()), this._removeClass(n, e), i.addClass(this._classes({
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
                _classes: function(s) {
                    function t(t, e) {
                        var i, n;
                        for (n = 0; t.length > n; n++) i = r.classesElementLookup[t[n]] || T(), i = s.add ? T(T.uniqueSort(i.get().concat(s.element.get()))) : T(i.not(s.element).get()), r.classesElementLookup[t[n]] = i, o.push(t[n]), e && s.classes[t[n]] && o.push(s.classes[t[n]])
                    }
                    var o = [],
                        r = this;
                    return s = T.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, s), this._on(s.element, {
                        remove: "_untrackClassesElement"
                    }), s.keys && t(s.keys.match(/\S+/g) || [], !0), s.extra && t(s.extra.match(/\S+/g) || []), o.join(" ")
                },
                _untrackClassesElement: function(i) {
                    var n = this;
                    T.each(n.classesElementLookup, function(t, e) {
                        -1 !== T.inArray(i.target, e) && (n.classesElementLookup[t] = T(e.not(i.target).get()))
                    })
                },
                _removeClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !1)
                },
                _addClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !0)
                },
                _toggleClass: function(t, e, i, n) {
                    n = "boolean" == typeof n ? n : i;
                    var s = "string" == typeof t || null === t,
                        o = {
                            extra: s ? e : i,
                            keys: s ? t : e,
                            element: s ? this.element : t,
                            add: n
                        };
                    return o.element.toggleClass(this._classes(o), n), this
                },
                _on: function(r, a, t) {
                    var l, h = this;
                    "boolean" != typeof r && (t = a, a = r, r = !1), t ? (a = l = T(a), this.bindings = this.bindings.add(a)) : (t = a, a = this.element, l = this.widget()), T.each(t, function(t, e) {
                        function i() {
                            return r || !0 !== h.options.disabled && !T(this).hasClass("ui-state-disabled") ? ("string" == typeof e ? h[e] : e).apply(h, arguments) : void 0
                        }
                        "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || T.guid++);
                        var n = t.match(/^([\w:-]*)\s*(.*)$/),
                            s = n[1] + h.eventNamespace,
                            o = n[2];
                        o ? l.on(s, o, i) : a.on(s, i)
                    })
                },
                _off: function(t, e) {
                    e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = T(this.bindings.not(t).get()), this.focusable = T(this.focusable.not(t).get()), this.hoverable = T(this.hoverable.not(t).get())
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
                            this._addClass(T(t.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function(t) {
                            this._removeClass(T(t.currentTarget), null, "ui-state-hover")
                        }
                    })
                },
                _focusable: function(t) {
                    this.focusable = this.focusable.add(t), this._on(t, {
                        focusin: function(t) {
                            this._addClass(T(t.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function(t) {
                            this._removeClass(T(t.currentTarget), null, "ui-state-focus")
                        }
                    })
                },
                _trigger: function(t, e, i) {
                    var n, s, o = this.options[t];
                    if (i = i || {}, (e = T.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], s = e.originalEvent)
                        for (n in s) n in e || (e[n] = s[n]);
                    return this.element.trigger(e, i), !(T.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
                }
            }, T.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(o, r) {
                T.Widget.prototype["_" + o] = function(e, t, i) {
                    "string" == typeof t && (t = {
                        effect: t
                    });
                    var n, s = t ? !0 === t || "number" == typeof t ? r : t.effect || r : o;
                    "number" == typeof(t = t || {}) && (t = {
                        duration: t
                    }), n = !T.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), n && T.effects && T.effects.effect[s] ? e[o](t) : s !== o && e[s] ? e[s](t.duration, t.easing, i) : e.queue(function(t) {
                        T(this)[o](), i && i.call(e[0]), t()
                    })
                }
            }), T.widget,
            function() {
                function x(t, e, i) {
                    return [parseFloat(t[0]) * (l.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (l.test(t[1]) ? i / 100 : 1)]
                }

                function C(t, e) {
                    return parseInt(T.css(t, e), 10) || 0
                }
                var s, k = Math.max,
                    D = Math.abs,
                    n = /left|center|right/,
                    o = /top|center|bottom/,
                    r = /[\+\-]\d+(\.[\d]+)?%?/,
                    a = /^\w+/,
                    l = /%$/,
                    h = T.fn.position;
                T.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== s) return s;
                        var t, e, i = T("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            n = i.children()[0];
                        return T("body").append(i), t = n.offsetWidth, i.css("overflow", "scroll"), t === (e = n.offsetWidth) && (e = i[0].clientWidth), i.remove(), s = t - e
                    },
                    getScrollInfo: function(t) {
                        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            n = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                        return {
                            width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? T.position.scrollbarWidth() : 0,
                            height: n ? T.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(t) {
                        var e = T(t || window),
                            i = T.isWindow(e[0]),
                            n = !!e[0] && 9 === e[0].nodeType;
                        return {
                            element: e,
                            isWindow: i,
                            isDocument: n,
                            offset: !i && !n ? T(t).offset() : {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: e.scrollLeft(),
                            scrollTop: e.scrollTop(),
                            width: e.outerWidth(),
                            height: e.outerHeight()
                        }
                    }
                }, T.fn.position = function(u) {
                    if (!u || !u.of) return h.apply(this, arguments);
                    u = T.extend({}, u);
                    var d, p, f, g, m, t, e, i, v = T(u.of),
                        _ = T.position.getWithinInfo(u.within),
                        b = T.position.getScrollInfo(_),
                        y = (u.collision || "flip").split(" "),
                        w = {};
                    return t = 9 === (i = (e = v)[0]).nodeType ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : T.isWindow(i) ? {
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
                    }, v[0].preventDefault && (u.at = "left top"), p = t.width, f = t.height, g = t.offset, m = T.extend({}, g), T.each(["my", "at"], function() {
                        var t, e, i = (u[this] || "").split(" ");
                        1 === i.length && (i = n.test(i[0]) ? i.concat(["center"]) : o.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = n.test(i[0]) ? i[0] : "center", i[1] = o.test(i[1]) ? i[1] : "center", t = r.exec(i[0]), e = r.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], u[this] = [a.exec(i[0])[0], a.exec(i[1])[0]]
                    }), 1 === y.length && (y[1] = y[0]), "right" === u.at[0] ? m.left += p : "center" === u.at[0] && (m.left += p / 2), "bottom" === u.at[1] ? m.top += f : "center" === u.at[1] && (m.top += f / 2), d = x(w.at, p, f), m.left += d[0], m.top += d[1], this.each(function() {
                        var i, t, r = T(this),
                            a = r.outerWidth(),
                            l = r.outerHeight(),
                            e = C(this, "marginLeft"),
                            n = C(this, "marginTop"),
                            s = a + e + C(this, "marginRight") + b.width,
                            o = l + n + C(this, "marginBottom") + b.height,
                            h = T.extend({}, m),
                            c = x(w.my, r.outerWidth(), r.outerHeight());
                        "right" === u.my[0] ? h.left -= a : "center" === u.my[0] && (h.left -= a / 2), "bottom" === u.my[1] ? h.top -= l : "center" === u.my[1] && (h.top -= l / 2), h.left += c[0], h.top += c[1], i = {
                            marginLeft: e,
                            marginTop: n
                        }, T.each(["left", "top"], function(t, e) {
                            T.ui.position[y[t]] && T.ui.position[y[t]][e](h, {
                                targetWidth: p,
                                targetHeight: f,
                                elemWidth: a,
                                elemHeight: l,
                                collisionPosition: i,
                                collisionWidth: s,
                                collisionHeight: o,
                                offset: [d[0] + c[0], d[1] + c[1]],
                                my: u.my,
                                at: u.at,
                                within: _,
                                elem: r
                            })
                        }), u.using && (t = function(t) {
                            var e = g.left - h.left,
                                i = e + p - a,
                                n = g.top - h.top,
                                s = n + f - l,
                                o = {
                                    target: {
                                        element: v,
                                        left: g.left,
                                        top: g.top,
                                        width: p,
                                        height: f
                                    },
                                    element: {
                                        element: r,
                                        left: h.left,
                                        top: h.top,
                                        width: a,
                                        height: l
                                    },
                                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                                    vertical: s < 0 ? "top" : 0 < n ? "bottom" : "middle"
                                };
                            p < a && p > D(e + i) && (o.horizontal = "center"), f < l && f > D(n + s) && (o.vertical = "middle"), o.important = k(D(e), D(i)) > k(D(n), D(s)) ? "horizontal" : "vertical", u.using.call(this, t, o)
                        }), r.offset(T.extend(h, {
                            using: t
                        }))
                    })
                }, T.ui.position = {
                    fit: {
                        left: function(t, e) {
                            var i, n = e.within,
                                s = n.isWindow ? n.scrollLeft : n.offset.left,
                                o = n.width,
                                r = t.left - e.collisionPosition.marginLeft,
                                a = s - r,
                                l = r + e.collisionWidth - o - s;
                            e.collisionWidth > o ? 0 < a && l <= 0 ? (i = t.left + a + e.collisionWidth - o - s, t.left += a - i) : t.left = 0 < l && a <= 0 ? s : l < a ? s + o - e.collisionWidth : s : 0 < a ? t.left += a : 0 < l ? t.left -= l : t.left = k(t.left - r, t.left)
                        },
                        top: function(t, e) {
                            var i, n = e.within,
                                s = n.isWindow ? n.scrollTop : n.offset.top,
                                o = e.within.height,
                                r = t.top - e.collisionPosition.marginTop,
                                a = s - r,
                                l = r + e.collisionHeight - o - s;
                            e.collisionHeight > o ? 0 < a && l <= 0 ? (i = t.top + a + e.collisionHeight - o - s, t.top += a - i) : t.top = 0 < l && a <= 0 ? s : l < a ? s + o - e.collisionHeight : s : 0 < a ? t.top += a : 0 < l ? t.top -= l : t.top = k(t.top - r, t.top)
                        }
                    },
                    flip: {
                        left: function(t, e) {
                            var i, n, s = e.within,
                                o = s.offset.left + s.scrollLeft,
                                r = s.width,
                                a = s.isWindow ? s.scrollLeft : s.offset.left,
                                l = t.left - e.collisionPosition.marginLeft,
                                h = l - a,
                                c = l + e.collisionWidth - r - a,
                                u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                p = -2 * e.offset[0];
                            h < 0 ? ((i = t.left + u + d + p + e.collisionWidth - r - o) < 0 || D(h) > i) && (t.left += u + d + p) : 0 < c && ((0 < (n = t.left - e.collisionPosition.marginLeft + u + d + p - a) || c > D(n)) && (t.left += u + d + p))
                        },
                        top: function(t, e) {
                            var i, n, s = e.within,
                                o = s.offset.top + s.scrollTop,
                                r = s.height,
                                a = s.isWindow ? s.scrollTop : s.offset.top,
                                l = t.top - e.collisionPosition.marginTop,
                                h = l - a,
                                c = l + e.collisionHeight - r - a,
                                u = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                p = -2 * e.offset[1];
                            h < 0 ? ((n = t.top + u + d + p + e.collisionHeight - r - o) < 0 || D(h) > n) && (t.top += u + d + p) : 0 < c && ((0 < (i = t.top - e.collisionPosition.marginTop + u + d + p - a) || c > D(i)) && (t.top += u + d + p))
                        }
                    },
                    flipfit: {
                        left: function() {
                            T.ui.position.flip.left.apply(this, arguments), T.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            T.ui.position.flip.top.apply(this, arguments), T.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                }
            }(), T.ui.position, T.extend(T.expr.pseudos, {
                data: T.expr.createPseudo ? T.expr.createPseudo(function(e) {
                    return function(t) {
                        return !!T.data(t, e)
                    }
                }) : function(t, e, i) {
                    return !!T.data(t, i[3])
                }
            }), T.fn.extend({
                disableSelection: (n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                    return this.on(n + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }),
                enableSelection: function() {
                    return this.off(".ui-disableSelection")
                }
            });
        var l, h = "ui-effects-",
            d = "ui-effects-style",
            p = "ui-effects-animated",
            c = T;
        T.effects = {
                effect: {}
            },
            function(c, u) {
                function d(t, e, i) {
                    var n = m[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : t < 0 ? 0 : t > n.max ? n.max : t)
                }

                function a(r) {
                    var a = f(),
                        l = a._rgba = [];
                    return r = r.toLowerCase(), v(t, function(t, e) {
                        var i, n = e.re.exec(r),
                            s = n && e.parse(n),
                            o = e.space || "rgba";
                        return s ? (i = a[o](s), a[g[o].cache] = i[g[o].cache], l = a._rgba = i._rgba, !1) : u
                    }), l.length ? ("0,0,0,0" === l.join() && c.extend(l, h.transparent), a) : h[r]
                }

                function l(t, e, i) {
                    return 6 * (i = (i + 1) % 1) < 1 ? t + 6 * (e - t) * i : 2 * i < 1 ? e : 3 * i < 2 ? t + 6 * (e - t) * (2 / 3 - i) : t
                }
                var h, p = /^([\-+])=\s*(\d+\.?\d*)/,
                    t = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    f = c.Color = function(t, e, i, n) {
                        return new c.Color.fn.parse(t, e, i, n)
                    },
                    g = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    m = {
                        byte: {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    r = f.support = {},
                    e = c("<p>")[0],
                    v = c.each;
                e.style.cssText = "background-color:rgba(1,1,1,.5)", r.rgba = -1 < e.style.backgroundColor.indexOf("rgba"), v(g, function(t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), f.fn = c.extend(f.prototype, {
                    parse: function(s, t, e, i) {
                        if (s === u) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = c(s).css(t), t = u);
                        var o = this,
                            n = c.type(s),
                            r = this._rgba = [];
                        return t !== u && (s = [s, t, e, i], n = "array"), "string" === n ? this.parse(a(s) || h._default) : "array" === n ? (v(g.rgba.props, function(t, e) {
                            r[e.idx] = d(s[e.idx], e)
                        }), this) : "object" === n ? (v(g, s instanceof f ? function(t, e) {
                            s[e.cache] && (o[e.cache] = s[e.cache].slice())
                        } : function(t, i) {
                            var n = i.cache;
                            v(i.props, function(t, e) {
                                if (!o[n] && i.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    o[n] = i.to(o._rgba)
                                }
                                o[n][e.idx] = d(s[t], e, !0)
                            }), o[n] && c.inArray(null, o[n].slice(0, 3)) < 0 && (o[n][3] = 1, i.from && (o._rgba = i.from(o[n])))
                        }), this) : u
                    },
                    is: function(t) {
                        var s = f(t),
                            o = !0,
                            r = this;
                        return v(g, function(t, e) {
                            var i, n = s[e.cache];
                            return n && (i = r[e.cache] || e.to && e.to(r._rgba) || [], v(e.props, function(t, e) {
                                return null != n[e.idx] ? o = n[e.idx] === i[e.idx] : u
                            })), o
                        }), o
                    },
                    _space: function() {
                        var i = [],
                            n = this;
                        return v(g, function(t, e) {
                            n[e.cache] && i.push(t)
                        }), i.pop()
                    },
                    transition: function(t, r) {
                        var a = f(t),
                            e = a._space(),
                            i = g[e],
                            n = 0 === this.alpha() ? f("transparent") : this,
                            l = n[i.cache] || i.to(n._rgba),
                            h = l.slice();
                        return a = a[i.cache], v(i.props, function(t, e) {
                            var i = e.idx,
                                n = l[i],
                                s = a[i],
                                o = m[e.type] || {};
                            null !== s && (h[i] = null === n ? s : (o.mod && (s - n > o.mod / 2 ? n += o.mod : n - s > o.mod / 2 && (n -= o.mod)), d((s - n) * r + n, e)))
                        }), this[e](h)
                    },
                    blend: function(t) {
                        if (1 === this._rgba[3]) return this;
                        var e = this._rgba.slice(),
                            i = e.pop(),
                            n = f(t)._rgba;
                        return f(c.map(e, function(t, e) {
                            return (1 - i) * n[e] + i * t
                        }))
                    },
                    toRgbaString: function() {
                        var t = "rgba(",
                            e = c.map(this._rgba, function(t, e) {
                                return null == t ? 2 < e ? 1 : 0 : t
                            });
                        return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")"
                    },
                    toHslaString: function() {
                        var t = "hsla(",
                            e = c.map(this.hsla(), function(t, e) {
                                return null == t && (t = 2 < e ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")"
                    },
                    toHexString: function(t) {
                        var e = this._rgba.slice(),
                            i = e.pop();
                        return t && e.push(~~(255 * i)), "#" + c.map(e, function(t) {
                            return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), f.fn.parse.prototype = f.fn, g.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, n = t[0] / 255,
                        s = t[1] / 255,
                        o = t[2] / 255,
                        r = t[3],
                        a = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        h = a - l,
                        c = a + l,
                        u = .5 * c;
                    return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : u <= .5 ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == r ? 1 : r]
                }, g.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        s = t[3],
                        o = n <= .5 ? n * (1 + i) : n + i - n * i,
                        r = 2 * n - o;
                    return [Math.round(255 * l(r, o, e + 1 / 3)), Math.round(255 * l(r, o, e)), Math.round(255 * l(r, o, e - 1 / 3)), s]
                }, v(g, function(l, t) {
                    var i = t.props,
                        r = t.cache,
                        a = t.to,
                        h = t.from;
                    f.fn[l] = function(t) {
                        if (a && !this[r] && (this[r] = a(this._rgba)), t === u) return this[r].slice();
                        var e, n = c.type(t),
                            s = "array" === n || "object" === n ? t : arguments,
                            o = this[r].slice();
                        return v(i, function(t, e) {
                            var i = s["object" === n ? t : e.idx];
                            null == i && (i = o[e.idx]), o[e.idx] = d(i, e)
                        }), h ? ((e = f(h(o)))[r] = o, e) : f(o)
                    }, v(i, function(r, a) {
                        f.fn[r] || (f.fn[r] = function(t) {
                            var e, i = c.type(t),
                                n = "alpha" === r ? this._hsla ? "hsla" : "rgba" : l,
                                s = this[n](),
                                o = s[a.idx];
                            return "undefined" === i ? o : ("function" === i && (t = t.call(this, o), i = c.type(t)), null == t && a.empty ? this : ("string" === i && ((e = p.exec(t)) && (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1))), s[a.idx] = t, this[n](s)))
                        })
                    })
                }), f.hook = function(t) {
                    var e = t.split(" ");
                    v(e, function(t, o) {
                        c.cssHooks[o] = {
                            set: function(t, e) {
                                var i, n, s = "";
                                if ("transparent" !== e && ("string" !== c.type(e) || (i = a(e)))) {
                                    if (e = f(i || e), !r.rgba && 1 !== e._rgba[3]) {
                                        for (n = "backgroundColor" === o ? t.parentNode : t;
                                            ("" === s || "transparent" === s) && n && n.style;) try {
                                            s = c.css(n, "backgroundColor"), n = n.parentNode
                                        } catch (t) {}
                                        e = e.blend(s && "transparent" !== s ? s : "_default")
                                    }
                                    e = e.toRgbaString()
                                }
                                try {
                                    t.style[o] = e
                                } catch (t) {}
                            }
                        }, c.fx.step[o] = function(t) {
                            t.colorInit || (t.start = f(t.elem, o), t.end = f(t.end), t.colorInit = !0), c.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos))
                        }
                    })
                }, f.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), c.cssHooks.borderColor = {
                    expand: function(i) {
                        var n = {};
                        return v(["Top", "Right", "Bottom", "Left"], function(t, e) {
                            n["border" + e + "Color"] = i
                        }), n
                    }
                }, h = c.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(c),
            function() {
                function r(t) {
                    var e, i, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                        s = {};
                    if (n && n.length && n[0] && n[n[0]])
                        for (i = n.length; i--;) "string" == typeof n[e = n[i]] && (s[T.camelCase(e)] = n[e]);
                    else
                        for (e in n) "string" == typeof n[e] && (s[e] = n[e]);
                    return s
                }
                var o, s, a, l = ["add", "remove", "toggle"],
                    h = {
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
                T.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
                    T.fx.step[e] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (c.style(t.elem, e, t.end), t.setAttr = !0)
                    }
                }), T.fn.addBack || (T.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), T.effects.animateClass = function(s, t, e, i) {
                    var o = T.speed(t, e, i);
                    return this.queue(function() {
                        var t, i = T(this),
                            e = i.attr("class") || "",
                            n = o.children ? i.find("*").addBack() : i;
                        n = n.map(function() {
                            return {
                                el: T(this),
                                start: r(this)
                            }
                        }), (t = function() {
                            T.each(l, function(t, e) {
                                s[e] && i[e + "Class"](s[e])
                            })
                        })(), n = n.map(function() {
                            return this.end = r(this.el[0]), this.diff = function(t, e) {
                                var i, n, s = {};
                                for (i in e) n = e[i], t[i] !== n && (h[i] || (T.fx.step[i] || !isNaN(parseFloat(n))) && (s[i] = n));
                                return s
                            }(this.start, this.end), this
                        }), i.attr("class", e), n = n.map(function() {
                            var t = this,
                                e = T.Deferred(),
                                i = T.extend({}, o, {
                                    queue: !1,
                                    complete: function() {
                                        e.resolve(t)
                                    }
                                });
                            return this.el.animate(this.diff, i), e.promise()
                        }), T.when.apply(T, n.get()).done(function() {
                            t(), T.each(arguments, function() {
                                var e = this.el;
                                T.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), o.complete.call(i[0])
                        })
                    })
                }, T.fn.extend({
                    addClass: (a = T.fn.addClass, function(t, e, i, n) {
                        return e ? T.effects.animateClass.call(this, {
                            add: t
                        }, e, i, n) : a.apply(this, arguments)
                    }),
                    removeClass: (s = T.fn.removeClass, function(t, e, i, n) {
                        return 1 < arguments.length ? T.effects.animateClass.call(this, {
                            remove: t
                        }, e, i, n) : s.apply(this, arguments)
                    }),
                    toggleClass: (o = T.fn.toggleClass, function(t, e, i, n, s) {
                        return "boolean" == typeof e || void 0 === e ? i ? T.effects.animateClass.call(this, e ? {
                            add: t
                        } : {
                            remove: t
                        }, i, n, s) : o.apply(this, arguments) : T.effects.animateClass.call(this, {
                            toggle: t
                        }, e, i, n)
                    }),
                    switchClass: function(t, e, i, n, s) {
                        return T.effects.animateClass.call(this, {
                            add: e,
                            remove: t
                        }, i, n, s)
                    }
                })
            }(),
            function() {
                function c(t, e, i, n) {
                    return T.isPlainObject(t) && (t = (e = t).effect), t = {
                        effect: t
                    }, null == e && (e = {}), T.isFunction(e) && (n = e, i = null, e = {}), ("number" == typeof e || T.fx.speeds[e]) && (n = i, i = e, e = {}), T.isFunction(i) && (n = i, i = null), e && T.extend(t, e), i = i || e.duration, t.duration = T.fx.off ? 0 : "number" == typeof i ? i : i in T.fx.speeds ? T.fx.speeds[i] : T.fx.speeds._default, t.complete = n || e.complete, t
                }

                function i(t) {
                    return !(t && "number" != typeof t && !T.fx.speeds[t]) || ("string" == typeof t && !T.effects.effect[t] || (!!T.isFunction(t) || "object" == typeof t && !t.effect))
                }

                function e(t, e) {
                    var i = e.outerWidth(),
                        n = e.outerHeight(),
                        s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, n, 0];
                    return {
                        top: parseFloat(s[1]) || 0,
                        right: "auto" === s[2] ? i : parseFloat(s[2]),
                        bottom: "auto" === s[3] ? n : parseFloat(s[3]),
                        left: parseFloat(s[4]) || 0
                    }
                }
                var n, s, o, r;
                T.expr && T.expr.pseudos && T.expr.pseudos.animated && (T.expr.pseudos.animated = (r = T.expr.pseudos.animated, function(t) {
                    return !!T(t).data(p) || r(t)
                })), !1 !== T.uiBackCompat && T.extend(T.effects, {
                    save: function(t, e) {
                        for (var i = 0, n = e.length; i < n; i++) null !== e[i] && t.data(h + e[i], t[0].style[e[i]])
                    },
                    restore: function(t, e) {
                        for (var i, n = 0, s = e.length; n < s; n++) null !== e[n] && (i = t.data(h + e[n]), t.css(e[n], i))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    createWrapper: function(i) {
                        if (i.parent().is(".ui-effects-wrapper")) return i.parent();
                        var n = {
                                width: i.outerWidth(!0),
                                height: i.outerHeight(!0),
                                float: i.css("float")
                            },
                            t = T("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            e = {
                                width: i.width(),
                                height: i.height()
                            },
                            s = document.activeElement;
                        try {
                            s.id
                        } catch (t) {
                            s = document.body
                        }
                        return i.wrap(t), (i[0] === s || T.contains(i[0], s)) && T(s).trigger("focus"), t = i.parent(), "static" === i.css("position") ? (t.css({
                            position: "relative"
                        }), i.css({
                            position: "relative"
                        })) : (T.extend(n, {
                            position: i.css("position"),
                            zIndex: i.css("z-index")
                        }), T.each(["top", "left", "bottom", "right"], function(t, e) {
                            n[e] = i.css(e), isNaN(parseInt(n[e], 10)) && (n[e] = "auto")
                        }), i.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), i.css(e), t.css(n).show()
                    },
                    removeWrapper: function(t) {
                        var e = document.activeElement;
                        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === e || T.contains(t[0], e)) && T(e).trigger("focus")), t
                    }
                }), T.extend(T.effects, {
                    version: "1.12.1",
                    define: function(t, e, i) {
                        return i || (i = e, e = "effect"), T.effects.effect[t] = i, T.effects.effect[t].mode = e, i
                    },
                    scaledDimensions: function(t, e, i) {
                        if (0 === e) return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                        var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                            s = "vertical" !== i ? (e || 100) / 100 : 1;
                        return {
                            height: t.height() * s,
                            width: t.width() * n,
                            outerHeight: t.outerHeight() * s,
                            outerWidth: t.outerWidth() * n
                        }
                    },
                    clipToBox: function(t) {
                        return {
                            width: t.clip.right - t.clip.left,
                            height: t.clip.bottom - t.clip.top,
                            left: t.clip.left,
                            top: t.clip.top
                        }
                    },
                    unshift: function(t, e, i) {
                        var n = t.queue();
                        1 < e && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                    },
                    saveStyle: function(t) {
                        t.data(d, t[0].style.cssText)
                    },
                    restoreStyle: function(t) {
                        t[0].style.cssText = t.data(d) || "", t.removeData(d)
                    },
                    mode: function(t, e) {
                        var i = t.is(":hidden");
                        return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                    },
                    getBaseline: function(t, e) {
                        var i, n;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                n = 0;
                                break;
                            case "center":
                                n = .5;
                                break;
                            case "right":
                                n = 1;
                                break;
                            default:
                                n = t[1] / e.width
                        }
                        return {
                            x: n,
                            y: i
                        }
                    },
                    createPlaceholder: function(t) {
                        var e, i = t.css("position"),
                            n = t.position();
                        return t.css({
                            marginTop: t.css("marginTop"),
                            marginBottom: t.css("marginBottom"),
                            marginLeft: t.css("marginLeft"),
                            marginRight: t.css("marginRight")
                        }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(i) && (i = "absolute", e = T("<" + t[0].nodeName + ">").insertAfter(t).css({
                            display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                            visibility: "hidden",
                            marginTop: t.css("marginTop"),
                            marginBottom: t.css("marginBottom"),
                            marginLeft: t.css("marginLeft"),
                            marginRight: t.css("marginRight"),
                            float: t.css("float")
                        }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(h + "placeholder", e)), t.css({
                            position: i,
                            left: n.left,
                            top: n.top
                        }), e
                    },
                    removePlaceholder: function(t) {
                        var e = h + "placeholder",
                            i = t.data(e);
                        i && (i.remove(), t.removeData(e))
                    },
                    cleanUp: function(t) {
                        T.effects.restoreStyle(t), T.effects.removePlaceholder(t)
                    },
                    setTransition: function(n, t, s, o) {
                        return o = o || {}, T.each(t, function(t, e) {
                            var i = n.cssUnit(e);
                            0 < i[0] && (o[e] = i[0] * s + i[1])
                        }), o
                    }
                }), T.fn.extend({
                    effect: function() {
                        function t(t) {
                            function e() {
                                T.isFunction(r) && r.call(i[0]), T.isFunction(t) && t()
                            }
                            var i = T(this);
                            n.mode = l.shift(), !1 === T.uiBackCompat || o ? "none" === n.mode ? (i[a](), e()) : s.call(i[0], n, function() {
                                i.removeData(p), T.effects.cleanUp(i), "hide" === n.mode && i.hide(), e()
                            }) : (i.is(":hidden") ? "hide" === a : "show" === a) ? (i[a](), e()) : s.call(i[0], n, e)
                        }
                        var n = c.apply(this, arguments),
                            s = T.effects.effect[n.effect],
                            o = s.mode,
                            e = n.queue,
                            i = e || "fx",
                            r = n.complete,
                            a = n.mode,
                            l = [],
                            h = function(t) {
                                var e = T(this),
                                    i = T.effects.mode(e, a) || o;
                                e.data(p, !0), l.push(i), o && ("show" === i || i === o && "hide" === i) && e.show(), o && "none" === i || T.effects.saveStyle(e), T.isFunction(t) && t()
                            };
                        return T.fx.off || !s ? a ? this[a](n.duration, r) : this.each(function() {
                            r && r.call(this)
                        }) : !1 === e ? this.each(h).each(t) : this.queue(i, h).queue(i, t)
                    },
                    show: (o = T.fn.show, function(t) {
                        if (i(t)) return o.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "show", this.effect.call(this, e)
                    }),
                    hide: (s = T.fn.hide, function(t) {
                        if (i(t)) return s.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "hide", this.effect.call(this, e)
                    }),
                    toggle: (n = T.fn.toggle, function(t) {
                        if (i(t) || "boolean" == typeof t) return n.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "toggle", this.effect.call(this, e)
                    }),
                    cssUnit: function(t) {
                        var i = this.css(t),
                            n = [];
                        return T.each(["em", "px", "%", "pt"], function(t, e) {
                            0 < i.indexOf(e) && (n = [parseFloat(i), e])
                        }), n
                    },
                    cssClip: function(t) {
                        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : e(this.css("clip"), this)
                    },
                    transfer: function(t, e) {
                        var i = T(this),
                            n = T(t.to),
                            s = "fixed" === n.css("position"),
                            o = T("body"),
                            r = s ? o.scrollTop() : 0,
                            a = s ? o.scrollLeft() : 0,
                            l = n.offset(),
                            h = {
                                top: l.top - r,
                                left: l.left - a,
                                height: n.innerHeight(),
                                width: n.innerWidth()
                            },
                            c = i.offset(),
                            u = T("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                                top: c.top - r,
                                left: c.left - a,
                                height: i.innerHeight(),
                                width: i.innerWidth(),
                                position: s ? "fixed" : "absolute"
                            }).animate(h, t.duration, t.easing, function() {
                                u.remove(), T.isFunction(e) && e()
                            })
                    }
                }), T.fx.step.clip = function(t) {
                    t.clipInit || (t.start = T(t.elem).cssClip(), "string" == typeof t.end && (t.end = e(t.end, t.elem)), t.clipInit = !0), T(t.elem).cssClip({
                        top: t.pos * (t.end.top - t.start.top) + t.start.top,
                        right: t.pos * (t.end.right - t.start.right) + t.start.right,
                        bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                        left: t.pos * (t.end.left - t.start.left) + t.start.left
                    })
                }
            }(), l = {}, T.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
                l[t] = function(t) {
                    return Math.pow(t, e + 2)
                }
            }), T.extend(l, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), T.each(l, function(t, e) {
                T.easing["easeIn" + t] = e, T.easing["easeOut" + t] = function(t) {
                    return 1 - e(1 - t)
                }, T.easing["easeInOut" + t] = function(t) {
                    return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
                }
            });
        var f, g;
        T.effects;
        T.effects.define("blind", "hide", function(t, e) {
            var i = {
                    up: ["bottom", "top"],
                    vertical: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    horizontal: ["right", "left"],
                    right: ["left", "right"]
                },
                n = T(this),
                s = t.direction || "up",
                o = n.cssClip(),
                r = {
                    clip: T.extend({}, o)
                },
                a = T.effects.createPlaceholder(n);
            r.clip[i[s][0]] = r.clip[i[s][1]], "show" === t.mode && (n.cssClip(r.clip), a && a.css(T.effects.clipToBox(r)), r.clip = o), a && a.animate(T.effects.clipToBox(r), t.duration, t.easing), n.animate(r, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            })
        }), T.effects.define("bounce", function(t, e) {
            var i, n, s, o = T(this),
                r = t.mode,
                a = "hide" === r,
                l = "show" === r,
                h = t.direction || "up",
                c = t.distance,
                u = t.times || 5,
                d = 2 * u + (l || a ? 1 : 0),
                p = t.duration / d,
                f = t.easing,
                g = "up" === h || "down" === h ? "top" : "left",
                m = "up" === h || "left" === h,
                v = 0,
                _ = o.queue().length;
            for (T.effects.createPlaceholder(o), s = o.css(g), c || (c = o["top" === g ? "outerHeight" : "outerWidth"]() / 3), l && ((n = {
                    opacity: 1
                })[g] = s, o.css("opacity", 0).css(g, m ? 2 * -c : 2 * c).animate(n, p, f)), a && (c /= Math.pow(2, u - 1)), (n = {})[g] = s; v < u; v++)(i = {})[g] = (m ? "-=" : "+=") + c, o.animate(i, p, f).animate(n, p, f), c = a ? 2 * c : c / 2;
            a && ((i = {
                opacity: 0
            })[g] = (m ? "-=" : "+=") + c, o.animate(i, p, f)), o.queue(e), T.effects.unshift(o, _, d + 1)
        }), T.effects.define("clip", "hide", function(t, e) {
            var i, n = {},
                s = T(this),
                o = t.direction || "vertical",
                r = "both" === o,
                a = r || "horizontal" === o,
                l = r || "vertical" === o;
            i = s.cssClip(), n.clip = {
                top: l ? (i.bottom - i.top) / 2 : i.top,
                right: a ? (i.right - i.left) / 2 : i.right,
                bottom: l ? (i.bottom - i.top) / 2 : i.bottom,
                left: a ? (i.right - i.left) / 2 : i.left
            }, T.effects.createPlaceholder(s), "show" === t.mode && (s.cssClip(n.clip), n.clip = i), s.animate(n, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            })
        }), T.effects.define("drop", "hide", function(t, e) {
            var i, n = T(this),
                s = "show" === t.mode,
                o = t.direction || "left",
                r = "up" === o || "down" === o ? "top" : "left",
                a = "up" === o || "left" === o ? "-=" : "+=",
                l = "+=" === a ? "-=" : "+=",
                h = {
                    opacity: 0
                };
            T.effects.createPlaceholder(n), i = t.distance || n["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, h[r] = a + i, s && (n.css(h), h[r] = l + i, h.opacity = 1), n.animate(h, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            })
        }), T.effects.define("explode", "hide", function(t, e) {
            function i() {
                m.push(this), m.length === h * c && (u.css({
                    visibility: "visible"
                }), T(m).remove(), e())
            }
            var n, s, o, r, a, l, h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                c = h,
                u = T(this),
                d = "show" === t.mode,
                p = u.show().css("visibility", "hidden").offset(),
                f = Math.ceil(u.outerWidth() / c),
                g = Math.ceil(u.outerHeight() / h),
                m = [];
            for (n = 0; n < h; n++)
                for (r = p.top + n * g, l = n - (h - 1) / 2, s = 0; s < c; s++) o = p.left + s * f, a = s - (c - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -s * f,
                    top: -n * g
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: f,
                    height: g,
                    left: o + (d ? a * f : 0),
                    top: r + (d ? l * g : 0),
                    opacity: d ? 0 : 1
                }).animate({
                    left: o + (d ? 0 : a * f),
                    top: r + (d ? 0 : l * g),
                    opacity: d ? 1 : 0
                }, t.duration || 500, t.easing, i)
        }), T.effects.define("fade", "toggle", function(t, e) {
            var i = "show" === t.mode;
            T(this).css("opacity", i ? 0 : 1).animate({
                opacity: i ? 1 : 0
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            })
        }), T.effects.define("fold", "hide", function(e, t) {
            var i = T(this),
                n = e.mode,
                s = "show" === n,
                o = "hide" === n,
                r = e.size || 15,
                a = /([0-9]+)%/.exec(r),
                l = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
                h = e.duration / 2,
                c = T.effects.createPlaceholder(i),
                u = i.cssClip(),
                d = {
                    clip: T.extend({}, u)
                },
                p = {
                    clip: T.extend({}, u)
                },
                f = [u[l[0]], u[l[1]]],
                g = i.queue().length;
            a && (r = parseInt(a[1], 10) / 100 * f[o ? 0 : 1]), d.clip[l[0]] = r, p.clip[l[0]] = r, p.clip[l[1]] = 0, s && (i.cssClip(p.clip), c && c.css(T.effects.clipToBox(p)), p.clip = u), i.queue(function(t) {
                c && c.animate(T.effects.clipToBox(d), h, e.easing).animate(T.effects.clipToBox(p), h, e.easing), t()
            }).animate(d, h, e.easing).animate(p, h, e.easing).queue(t), T.effects.unshift(i, g, 4)
        }), T.effects.define("highlight", "show", function(t, e) {
            var i = T(this),
                n = {
                    backgroundColor: i.css("backgroundColor")
                };
            "hide" === t.mode && (n.opacity = 0), T.effects.saveStyle(i), i.css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(n, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            })
        }), T.effects.define("size", function(s, e) {
            var t, o, i, n = T(this),
                r = ["fontSize"],
                a = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                h = s.mode,
                c = "effect" !== h,
                u = s.scale || "both",
                d = s.origin || ["middle", "center"],
                p = n.css("position"),
                f = n.position(),
                g = T.effects.scaledDimensions(n),
                m = s.from || g,
                v = s.to || T.effects.scaledDimensions(n, 0);
            T.effects.createPlaceholder(n), "show" === h && (i = m, m = v, v = i), o = {
                from: {
                    y: m.height / g.height,
                    x: m.width / g.width
                },
                to: {
                    y: v.height / g.height,
                    x: v.width / g.width
                }
            }, ("box" === u || "both" === u) && (o.from.y !== o.to.y && (m = T.effects.setTransition(n, a, o.from.y, m), v = T.effects.setTransition(n, a, o.to.y, v)), o.from.x !== o.to.x && (m = T.effects.setTransition(n, l, o.from.x, m), v = T.effects.setTransition(n, l, o.to.x, v))), ("content" === u || "both" === u) && o.from.y !== o.to.y && (m = T.effects.setTransition(n, r, o.from.y, m), v = T.effects.setTransition(n, r, o.to.y, v)), d && (t = T.effects.getBaseline(d, g), m.top = (g.outerHeight - m.outerHeight) * t.y + f.top, m.left = (g.outerWidth - m.outerWidth) * t.x + f.left, v.top = (g.outerHeight - v.outerHeight) * t.y + f.top, v.left = (g.outerWidth - v.outerWidth) * t.x + f.left), n.css(m), ("content" === u || "both" === u) && (a = a.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), n.find("*[width]").each(function() {
                var t = T(this),
                    e = T.effects.scaledDimensions(t),
                    i = {
                        height: e.height * o.from.y,
                        width: e.width * o.from.x,
                        outerHeight: e.outerHeight * o.from.y,
                        outerWidth: e.outerWidth * o.from.x
                    },
                    n = {
                        height: e.height * o.to.y,
                        width: e.width * o.to.x,
                        outerHeight: e.height * o.to.y,
                        outerWidth: e.width * o.to.x
                    };
                o.from.y !== o.to.y && (i = T.effects.setTransition(t, a, o.from.y, i), n = T.effects.setTransition(t, a, o.to.y, n)), o.from.x !== o.to.x && (i = T.effects.setTransition(t, l, o.from.x, i), n = T.effects.setTransition(t, l, o.to.x, n)), c && T.effects.saveStyle(t), t.css(i), t.animate(n, s.duration, s.easing, function() {
                    c && T.effects.restoreStyle(t)
                })
            })), n.animate(v, {
                queue: !1,
                duration: s.duration,
                easing: s.easing,
                complete: function() {
                    var t = n.offset();
                    0 === v.opacity && n.css("opacity", m.opacity), c || (n.css("position", "static" === p ? "relative" : p).offset(t), T.effects.saveStyle(n)), e()
                }
            })
        }), T.effects.define("scale", function(t, e) {
            var i = T(this),
                n = t.mode,
                s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
                o = T.extend(!0, {
                    from: T.effects.scaledDimensions(i),
                    to: T.effects.scaledDimensions(i, s, t.direction || "both"),
                    origin: t.origin || ["middle", "center"]
                }, t);
            t.fade && (o.from.opacity = 1, o.to.opacity = 0), T.effects.effect.size.call(this, o, e)
        }), T.effects.define("puff", "hide", function(t, e) {
            var i = T.extend(!0, {}, t, {
                fade: !0,
                percent: parseInt(t.percent, 10) || 150
            });
            T.effects.effect.scale.call(this, i, e)
        }), T.effects.define("pulsate", "show", function(t, e) {
            var i = T(this),
                n = t.mode,
                s = "show" === n,
                o = s || "hide" === n,
                r = 2 * (t.times || 5) + (o ? 1 : 0),
                a = t.duration / r,
                l = 0,
                h = 1,
                c = i.queue().length;
            for ((s || !i.is(":visible")) && (i.css("opacity", 0).show(), l = 1); h < r; h++) i.animate({
                opacity: l
            }, a, t.easing), l = 1 - l;
            i.animate({
                opacity: l
            }, a, t.easing), i.queue(e), T.effects.unshift(i, c, r + 1)
        }), T.effects.define("shake", function(t, e) {
            var i = 1,
                n = T(this),
                s = t.direction || "left",
                o = t.distance || 20,
                r = t.times || 3,
                a = 2 * r + 1,
                l = Math.round(t.duration / a),
                h = "up" === s || "down" === s ? "top" : "left",
                c = "up" === s || "left" === s,
                u = {},
                d = {},
                p = {},
                f = n.queue().length;
            for (T.effects.createPlaceholder(n), u[h] = (c ? "-=" : "+=") + o, d[h] = (c ? "+=" : "-=") + 2 * o, p[h] = (c ? "-=" : "+=") + 2 * o, n.animate(u, l, t.easing); i < r; i++) n.animate(d, l, t.easing).animate(p, l, t.easing);
            n.animate(d, l, t.easing).animate(u, l / 2, t.easing).queue(e), T.effects.unshift(n, f, a + 1)
        }), T.effects.define("slide", "show", function(t, e) {
            var i, n, s = T(this),
                o = {
                    up: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    right: ["left", "right"]
                },
                r = t.mode,
                a = t.direction || "left",
                l = "up" === a || "down" === a ? "top" : "left",
                h = "up" === a || "left" === a,
                c = t.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0),
                u = {};
            T.effects.createPlaceholder(s), i = s.cssClip(), n = s.position()[l], u[l] = (h ? -1 : 1) * c + n, u.clip = s.cssClip(), u.clip[o[a][1]] = u.clip[o[a][0]], "show" === r && (s.cssClip(u.clip), s.css(l, u[l]), u.clip = i, u[l] = n), s.animate(u, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            })
        }), !1 !== T.uiBackCompat && T.effects.define("transfer", function(t, e) {
            T(this).transfer(t, e)
        }), T.ui.focusable = function(t, e) {
            var i, n, s, o, r, a = t.nodeName.toLowerCase();
            return "area" === a ? (n = (i = t.parentNode).name, !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) && (0 < (s = T("img[usemap='#" + n + "']")).length && s.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(a) ? (o = !t.disabled) && ((r = T(t).closest("fieldset")[0]) && (o = !r.disabled)) : o = "a" === a && t.href || e, o && T(t).is(":visible") && function(t) {
                for (var e = t.css("visibility");
                    "inherit" === e;) e = (t = t.parent()).css("visibility");
                return "hidden" !== e
            }(T(t)))
        }, T.extend(T.expr.pseudos, {
            focusable: function(t) {
                return T.ui.focusable(t, null != T.attr(t, "tabindex"))
            }
        }), T.ui.focusable, T.fn.form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : T(this[0].form)
        }, T.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = T(this);
                setTimeout(function() {
                    var t = e.data("ui-form-reset-instances");
                    T.each(t, function() {
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
                    t.splice(T.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }, "1.7" === T.fn.jquery.substring(0, 3) && (T.each(["Width", "Height"], function(t, i) {
            function n(t, e, i, n) {
                return T.each(s, function() {
                    e -= parseFloat(T.css(t, "padding" + this)) || 0, i && (e -= parseFloat(T.css(t, "border" + this + "Width")) || 0), n && (e -= parseFloat(T.css(t, "margin" + this)) || 0)
                }), e
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                r = {
                    innerWidth: T.fn.innerWidth,
                    innerHeight: T.fn.innerHeight,
                    outerWidth: T.fn.outerWidth,
                    outerHeight: T.fn.outerHeight
                };
            T.fn["inner" + i] = function(t) {
                return void 0 === t ? r["inner" + i].call(this) : this.each(function() {
                    T(this).css(o, n(this, t) + "px")
                })
            }, T.fn["outer" + i] = function(t, e) {
                return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function() {
                    T(this).css(o, n(this, t, !0, e) + "px")
                })
            }
        }), T.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), T.ui.keyCode = {
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
        }, T.ui.escapeSelector = (g = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g, function(t) {
            return t.replace(g, "\\$1")
        }), T.fn.labels = function() {
            var t, e, i, n, s;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), (i = this.attr("id")) && (s = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings()), e = "label[for='" + T.ui.escapeSelector(i) + "']", n = n.add(s.find(e).addBack(e))), this.pushStack(n))
        }, T.fn.scrollParent = function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                s = this.parents().filter(function() {
                    var t = T(this);
                    return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && s.length ? s : T(this[0].ownerDocument || document)
        }, T.extend(T.expr.pseudos, {
            tabbable: function(t) {
                var e = T.attr(t, "tabindex"),
                    i = null != e;
                return (!i || 0 <= e) && T.ui.focusable(t, i)
            }
        }), T.fn.extend({
            uniqueId: (f = 0, function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++f)
                })
            }),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && T(this).removeAttr("id")
                })
            }
        }), T.widget("ui.accordion", {
            version: "1.12.1",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: "> li > :first-child, > :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = T(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : T()
                }
            },
            _createIcons: function() {
                var t, e, i = this.options.icons;
                i && (t = T("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + i.header), t.prependTo(this.headers), e = this.active.children(".ui-accordion-header-icon"), this._removeClass(e, i.header)._addClass(e, null, i.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var t;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons())))
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
            },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var e = T.ui.keyCode,
                        i = this.headers.length,
                        n = this.headers.index(t.target),
                        s = !1;
                    switch (t.keyCode) {
                        case e.RIGHT:
                        case e.DOWN:
                            s = this.headers[(n + 1) % i];
                            break;
                        case e.LEFT:
                        case e.UP:
                            s = this.headers[(n - 1 + i) % i];
                            break;
                        case e.SPACE:
                        case e.ENTER:
                            this._eventHandler(t);
                            break;
                        case e.HOME:
                            s = this.headers[0];
                            break;
                        case e.END:
                            s = this.headers[i - 1]
                    }
                    s && (T(t.target).attr("tabIndex", -1), T(s).attr("tabIndex", 0), T(s).trigger("focus"), t.preventDefault())
                }
            },
            _panelKeyDown: function(t) {
                t.keyCode === T.ui.keyCode.UP && t.ctrlKey && T(t.currentTarget).prev().trigger("focus")
            },
            refresh: function() {
                var t = this.options;
                this._processPanels(), !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, this.active = T()) : !1 === t.active ? this._activate(0) : this.active.length && !T.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = T()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function() {
                var i, t = this.options,
                    e = t.heightStyle,
                    n = this.element.parent();
                this.active = this._findActive(t.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                    var t = T(this),
                        e = t.uniqueId().attr("id"),
                        i = t.next(),
                        n = i.uniqueId().attr("id");
                    t.attr("aria-controls", n), i.attr("aria-labelledby", e)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t.event), "fill" === e ? (i = n.height(), this.element.siblings(":visible").each(function() {
                    var t = T(this),
                        e = t.css("position");
                    "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
                }), this.headers.each(function() {
                    i -= T(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    T(this).height(Math.max(0, i - T(this).innerHeight() + T(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.headers.next().each(function() {
                    var t = T(this).is(":visible");
                    t || T(this).show(), i = Math.max(i, T(this).css("height", "").height()), t || T(this).hide()
                }).height(i))
            },
            _activate: function(t) {
                var e = this._findActive(t)[0];
                e !== this.active[0] && (e = e || this.active[0], this._eventHandler({
                    target: e,
                    currentTarget: e,
                    preventDefault: T.noop
                }))
            },
            _findActive: function(t) {
                return "number" == typeof t ? this.headers.eq(t) : T()
            },
            _setupEvents: function(t) {
                var i = {
                    keydown: "_keydown"
                };
                t && T.each(t.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(t) {
                var e, i, n = this.options,
                    s = this.active,
                    o = T(t.currentTarget),
                    r = o[0] === s[0],
                    a = r && n.collapsible,
                    l = a ? T() : o.next(),
                    h = s.next(),
                    c = {
                        oldHeader: s,
                        oldPanel: h,
                        newHeader: a ? T() : o,
                        newPanel: l
                    };
                t.preventDefault(), r && !n.collapsible || !1 === this._trigger("beforeActivate", t, c) || (n.active = !a && this.headers.index(o), this.active = r ? T() : o, this._toggle(c), this._removeClass(s, "ui-accordion-header-active", "ui-state-active"), n.icons && (e = s.children(".ui-accordion-header-icon"), this._removeClass(e, null, n.icons.activeHeader)._addClass(e, null, n.icons.header)), r || (this._removeClass(o, "ui-accordion-header-collapsed")._addClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.header)._addClass(i, null, n.icons.activeHeader)), this._addClass(o.next(), "ui-accordion-content-active")))
            },
            _toggle: function(t) {
                var e = t.newPanel,
                    i = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), i.attr({
                    "aria-hidden": "true"
                }), i.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), e.length && i.length ? i.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : e.length && this.headers.filter(function() {
                    return 0 === parseInt(T(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function(t, i, e) {
                var n, s, o, r = this,
                    a = 0,
                    l = t.css("box-sizing"),
                    h = t.length && (!i.length || t.index() < i.index()),
                    c = this.options.animate || {},
                    u = h && c.down || c,
                    d = function() {
                        r._toggleComplete(e)
                    };
                return "number" == typeof u && (o = u), "string" == typeof u && (s = u), s = s || u.easing || c.easing, o = o || u.duration || c.duration, i.length ? t.length ? (n = t.show().outerHeight(), i.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function(t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: d,
                    step: function(t, e) {
                        e.now = Math.round(t), "height" !== e.prop ? "content-box" === l && (a += e.now) : "content" !== r.options.heightStyle && (e.now = Math.round(n - i.outerHeight() - a), a = 0)
                    }
                })) : i.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
            },
            _toggleComplete: function(t) {
                var e = t.oldPanel,
                    i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        }), T.ui.safeActiveElement = function(e) {
            var i;
            try {
                i = e.activeElement
            } catch (t) {
                i = e.body
            }
            return i || (i = e.body), i.nodeName || (i = e.body), i
        }, T.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item": function(t) {
                        var e = T(t.target),
                            i = T(T.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        if (!this.previousFilter) {
                            var e = T(t.target).closest(".ui-menu-item"),
                                i = T(t.currentTarget);
                            e[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            !T.contains(this.element[0], T.ui.safeActiveElement(this.document[0])) && this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t.children().each(function() {
                    var t = T(this);
                    t.data("ui-menu-submenu-caret") && t.remove()
                })
            },
            _keydown: function(t) {
                var e, i, n, s, o = !0;
                switch (t.keyCode) {
                    case T.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case T.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case T.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case T.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case T.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case T.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case T.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case T.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case T.ui.keyCode.ENTER:
                    case T.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case T.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        o = !1, i = this.previousFilter || "", s = !1, n = 96 <= t.keyCode && t.keyCode <= 105 ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), n === i ? s = !0 : n = i + n, e = this._filterMenuItems(n), (e = s && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (n = String.fromCharCode(t.keyCode), e = this._filterMenuItems(n)), e.length ? (this.focus(t, e), this.previousFilter = n, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                o && t.preventDefault()
            },
            _activate: function(t) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var t, e, i, n, s = this,
                    o = this.options.icons.submenu,
                    r = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), e = r.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = T(this),
                        e = t.prev(),
                        i = T("<span>").data("ui-menu-submenu-caret", !0);
                    s._addClass(i, "ui-menu-icon", "ui-icon " + o), e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
                }), this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"), (t = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                    var t = T(this);
                    s._isDivider(t) && s._addClass(t, "ui-menu-divider", "ui-widget-content")
                }), n = (i = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(i, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !T.contains(this.element[0], this.active[0]) && this.trigger("blur")
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                } [this.options.role]
            },
            _setOption: function(t, e) {
                if ("icons" === t) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                }
                this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            focus: function(t, e) {
                var i, n, s;
                this.on("blur", t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function(t) {
                var e, i, n, s, o, r;
                this._hasScroll() && (e = parseFloat(T.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(T.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - e - i, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), n < 0 ? this.activeMenu.scrollTop(s + n) : o < n + r && this.activeMenu.scrollTop(s + n - o + r))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function(t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function(t) {
                var e = T.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
            },
            collapseAll: function(e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var t = i ? this.element : T(e && e.target).closest(this.element.find(".ui-menu"));
                    t.length || (t = this.element), this._close(t), this.on("blur", e), this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = t
                }, this.delay)
            },
            _close: function(t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function(t) {
                return !T(t.target).closest(".ui-menu").length
            },
            _isDivider: function(t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function(t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function() {
                    this.focus(t, e)
                }))
            },
            next: function(t) {
                this._move("next", "first", t)
            },
            previous: function(t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
            },
            nextPage: function(t) {
                var e, i, n;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return (e = T(this)).offset().top - i - n < 0
                }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
            },
            previousPage: function(t) {
                var e, i, n;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return 0 < (e = T(this)).offset().top - i + n
                }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || T(t.target).closest(".ui-menu-item");
                var e = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
            },
            _filterMenuItems: function(t) {
                var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    i = RegExp("^" + e, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return i.test(T.trim(T(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        }), T.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var i, n, s, t = this.element[0].nodeName.toLowerCase(),
                    e = "textarea" === t,
                    o = "input" === t;
                this.isMultiLine = e || !o && this._isContentEditable(this.element), this.valueMethod = this.element[e || o ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(t) {
                        if (this.element.prop("readOnly")) n = s = i = !0;
                        else {
                            n = s = i = !1;
                            var e = T.ui.keyCode;
                            switch (t.keyCode) {
                                case e.PAGE_UP:
                                    i = !0, this._move("previousPage", t);
                                    break;
                                case e.PAGE_DOWN:
                                    i = !0, this._move("nextPage", t);
                                    break;
                                case e.UP:
                                    i = !0, this._keyEvent("previous", t);
                                    break;
                                case e.DOWN:
                                    i = !0, this._keyEvent("next", t);
                                    break;
                                case e.ENTER:
                                    this.menu.active && (i = !0, t.preventDefault(), this.menu.select(t));
                                    break;
                                case e.TAB:
                                    this.menu.active && this.menu.select(t);
                                    break;
                                case e.ESCAPE:
                                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t), t.preventDefault());
                                    break;
                                default:
                                    n = !0, this._searchTimeout(t)
                            }
                        }
                    },
                    keypress: function(t) {
                        if (i) return i = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && t.preventDefault());
                        if (!n) {
                            var e = T.ui.keyCode;
                            switch (t.keyCode) {
                                case e.PAGE_UP:
                                    this._move("previousPage", t);
                                    break;
                                case e.PAGE_DOWN:
                                    this._move("nextPage", t);
                                    break;
                                case e.UP:
                                    this._keyEvent("previous", t);
                                    break;
                                case e.DOWN:
                                    this._keyEvent("next", t)
                            }
                        }
                    },
                    input: function(t) {
                        return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = T("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, this.element[0] !== T.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(t, e) {
                        var i, n;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.trigger("blur"), void this.document.one("mousemove", function() {
                            T(t.target).trigger(t.originalEvent)
                        })) : (n = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                            item: n
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), void((i = e.item.attr("aria-label") || n.value) && T.trim(i).length && (this.liveRegion.children().hide(), T("<div>").text(i).appendTo(this.liveRegion))))
                    },
                    menuselect: function(t, e) {
                        var i = e.item.data("ui-autocomplete-item"),
                            n = this.previous;
                        this.element[0] !== T.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() {
                            this.previous = n, this.selectedItem = i
                        })), !1 !== this._trigger("select", t, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                    }
                }), this.liveRegion = T("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(t) {
                var e = this.menu.element[0];
                return t.target === this.element[0] || t.target === e || T.contains(e, t.target)
            },
            _closeOnClickOutside: function(t) {
                this._isEventTargetInWidget(t) || this.close()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? T(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var i, n, s = this;
                T.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, e) {
                    e(T.ui.autocomplete.filter(i, t.term))
                }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(t, e) {
                    s.xhr && s.xhr.abort(), s.xhr = T.ajax({
                        url: n,
                        data: t,
                        dataType: "json",
                        success: function(t) {
                            e(t)
                        },
                        error: function() {
                            e([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(n) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        e = this.menu.element.is(":visible"),
                        i = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                    (!t || t && !e && !i) && (this.selectedItem = null, this.search(null, n))
                }, this.options.delay)
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var e = ++this.requestIndex;
                return T.proxy(function(t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function(t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function(t) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.trigger("blur"), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function(t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : T.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : T.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function(t) {
                var e = this.menu.element.empty();
                this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position(T.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(i, t) {
                var n = this;
                T.each(t, function(t, e) {
                    n._renderItemData(i, e)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(t, e) {
                return T("<li>").append(T("<div>").text(e.label)).appendTo(t)
            },
            _move: function(t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.trigger("blur")) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            },
            _isContentEditable: function(t) {
                if (!t.length) return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
            }
        }), T.extend(T.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, e) {
                var i = RegExp(T.ui.autocomplete.escapeRegex(e), "i");
                return T.grep(t, function(t) {
                    return i.test(t.label || t.value || t)
                })
            }
        }), T.widget("ui.autocomplete", T.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var e;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), T("<div>").text(e).appendTo(this.liveRegion))
            }
        }), T.ui.autocomplete;
        var m, v, _ = /ui-corner-([a-z]){2,6}/g;
        T.widget("ui.controlgroup", {
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
                var r = this,
                    a = [];
                T.each(this.options.items, function(s, t) {
                    var e, o = {};
                    return t ? "controlgroupLabel" === s ? ((e = r.element.find(t)).each(function() {
                        var t = T(this);
                        t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }), r._addClass(e, null, "ui-widget ui-widget-content ui-state-default"), void(a = a.concat(e.get()))) : void(T.fn[s] && (o = r["_" + s + "Options"] ? r["_" + s + "Options"]("middle") : {
                        classes: {}
                    }, r.element.find(t).each(function() {
                        var t = T(this),
                            e = t[s]("instance"),
                            i = T.widget.extend({}, o);
                        if ("button" !== s || !t.parent(".ui-spinner").length) {
                            e || (e = t[s]()[s]("instance")), e && (i.classes = r._resolveClassesValues(i.classes, e)), t[s](i);
                            var n = t[s]("widget");
                            T.data(n[0], "ui-controlgroup-data", e || t[s]("instance")), a.push(n[0])
                        }
                    }))) : void 0
                }), this.childWidgets = T(T.uniqueSort(a)), this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function(e) {
                this.childWidgets.each(function() {
                    var t = T(this).data("ui-controlgroup-data");
                    t && t[e] && t[e]()
                })
            },
            _updateCornerClass: function(t, e) {
                var i = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
            },
            _buildSimpleOptions: function(t, e) {
                var i = "vertical" === this.options.direction,
                    n = {
                        classes: {}
                    };
                return n.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                } [t], n
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
            _resolveClassesValues: function(i, n) {
                var s = {};
                return T.each(i, function(t) {
                    var e = n.options.classes[t] || "";
                    e = T.trim(e.replace(_, "")), s[t] = (e + " " + i[t]).replace(/\s+/g, " ")
                }), s
            },
            _setOption: function(t, e) {
                return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
            },
            refresh: function() {
                var s, o = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), s = this.childWidgets, this.options.onlyVisible && (s = s.filter(":visible")), s.length && (T.each(["first", "last"], function(t, e) {
                    var i = s[e]().data("ui-controlgroup-data");
                    if (i && o["_" + i.widgetName + "Options"]) {
                        var n = o["_" + i.widgetName + "Options"](1 === s.length ? "only" : e);
                        n.classes = o._resolveClassesValues(n.classes, i), i.element[i.widgetName](n)
                    } else o._updateCornerClass(s[e](), e)
                }), this._callChildMethod("refresh"))
            }
        }), T.widget("ui.checkboxradio", [T.ui.formResetMixin, {
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
                    n = this._super() || {};
                return this._readType(), e = this.element.labels(), this.label = T(e[e.length - 1]), this.label.length || T.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
                    i.originalLabel += 3 === this.nodeType ? T(this).text() : this.outerHTML
                }), this.originalLabel && (n.label = this.originalLabel), null != (t = this.element[0].disabled) && (n.disabled = t), n
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
                this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || T.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
            },
            _enhance: function() {
                this._updateIcon(this.element[0].checked)
            },
            widget: function() {
                return this.label
            },
            _getRadioGroup: function() {
                var t = this.element[0].name,
                    e = "input[name='" + T.ui.escapeSelector(t) + "']";
                return t ? (this.form.length ? T(this.form[0].elements).filter(e) : T(e).filter(function() {
                    return 0 === T(this).form().length
                })).not(this.element) : T([])
            },
            _toggleClasses: function() {
                var t = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function() {
                    var t = T(this).checkboxradio("instance");
                    t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
                })
            },
            _destroy: function() {
                this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
            },
            _setOption: function(t, e) {
                return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0
            },
            _updateIcon: function(t) {
                var e = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = T("<span>"), this.iconSpace = T("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", e), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
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
        }]), T.ui.checkboxradio, T.widget("ui.button", {
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
                        t.keyCode === T.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].trigger("click") : this.element.trigger("click"))
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
                    n = i ? this.options.iconPosition : e,
                    s = "top" === n || "bottom" === n;
                this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = T("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), i && this._addClass(this.icon, null, e), this._attachIcon(n), s ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = T("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
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
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e) && this.element.trigger("blur"))
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({
                    disabled: t
                }), this._updateTooltip()
            }
        }), !1 !== T.uiBackCompat && (T.widget("ui.button", T.ui.button, {
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
                return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
            }
        }), T.fn.button = (m = T.fn.button, function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? m.apply(this, arguments) : (T.ui.checkboxradio || T.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }), T.fn.buttonset = function() {
            return T.ui.controlgroup || T.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                button: arguments[0].items
            }), this.controlgroup.apply(this, arguments))
        }), T.ui.button, T.extend(T.ui, {
            datepicker: {
                version: "1.12.1"
            }
        }), T.extend(t.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return u(this._defaults, t || {}), this
            },
            _attachDatepicker: function(t, e) {
                var i, n, s;
                n = "div" === (i = t.nodeName.toLowerCase()) || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), (s = this._newInst(T(t), n)).settings = T.extend({}, e || {}), "input" === i ? this._connectDatepicker(t, s) : n && this._inlineDatepicker(t, s)
            },
            _newInst: function(t, e) {
                return {
                    id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: e,
                    dpDiv: e ? i(T("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, e) {
                var i = T(t);
                e.append = T([]), e.trigger = T([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(e), T.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, e) {
                var i, n, s, o = this._get(e, "appendText"),
                    r = this._get(e, "isRTL");
                e.append && e.append.remove(), o && (e.append = T("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](e.append)), t.off("focus", this._showDatepicker), e.trigger && e.trigger.remove(), ("focus" === (i = this._get(e, "showOn")) || "both" === i) && t.on("focus", this._showDatepicker), ("button" === i || "both" === i) && (n = this._get(e, "buttonText"), s = this._get(e, "buttonImage"), e.trigger = T(this._get(e, "buttonImageOnly") ? T("<img/>").addClass(this._triggerClass).attr({
                    src: s,
                    alt: n,
                    title: n
                }) : T("<button type='button'></button>").addClass(this._triggerClass).html(s ? T("<img/>").attr({
                    src: s,
                    alt: n,
                    title: n
                }) : n)), t[r ? "before" : "after"](e.trigger), e.trigger.on("click", function() {
                    return T.datepicker._datepickerShowing && T.datepicker._lastInput === t[0] ? T.datepicker._hideDatepicker() : (T.datepicker._datepickerShowing && T.datepicker._lastInput !== t[0] && T.datepicker._hideDatepicker(), T.datepicker._showDatepicker(t[0])), !1
                }))
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, o = new Date(2009, 11, 20),
                        r = this._get(t, "dateFormat");
                    r.match(/[DM]/) && (e = function(t) {
                        for (s = n = i = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s);
                        return n
                    }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function(t, e) {
                var i = T(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv), T.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, e, i, n, s) {
                var o, r, a, l, h, c = this._dialogInst;
                return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = T("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), T("body").append(this._dialogInput), (c = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, T.data(this._dialogInput[0], "datepicker", c)), u(c.settings, n || {}), e = e && e.constructor === Date ? this._formatDate(c, e) : e, this._dialogInput.val(e), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (r = document.documentElement.clientWidth, a = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [r / 2 - 100 + l, a / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), T.blockUI && T.blockUI(this.dpDiv), T.data(this._dialogInput[0], "datepicker", c), this
            },
            _destroyDatepicker: function(t) {
                var e, i = T(t),
                    n = T.data(t, "datepicker");
                i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), T.removeData(t, "datepicker"), "input" === e ? (n.append.remove(), n.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === e || "span" === e) && i.removeClass(this.markerClassName).empty(), v === n && (v = null))
            },
            _enableDatepicker: function(e) {
                var t, i, n = T(e),
                    s = T.data(e, "datepicker");
                n.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !1, s.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === t || "span" === t) && ((i = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = T.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }))
            },
            _disableDatepicker: function(e) {
                var t, i, n = T(e),
                    s = T.data(e, "datepicker");
                n.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !0, s.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === t || "span" === t) && ((i = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = T.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; this._disabledInputs.length > e; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return T.data(t, "datepicker")
                } catch (t) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(t, e, i) {
                var n, s, o, r, a = this._getInst(t);
                return 2 === arguments.length && "string" == typeof e ? "defaults" === e ? T.extend({}, T.datepicker._defaults) : a ? "all" === e ? T.extend({}, a.settings) : this._get(a, e) : null : (n = e || {}, "string" == typeof e && ((n = {})[e] = i), void(a && (this._curInst === a && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(a, "min"), r = this._getMinMaxDate(a, "max"), u(a.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (a.settings.minDate = this._formatDate(a, o)), null !== r && void 0 !== n.dateFormat && void 0 === n.maxDate && (a.settings.maxDate = this._formatDate(a, r)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(T(t), a), this._autoSize(a), this._setDate(a, s), this._updateAlternate(a), this._updateDatepicker(a))))
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function(t) {
                var e, i, n, s = T.datepicker._getInst(t.target),
                    o = !0,
                    r = s.dpDiv.is(".ui-datepicker-rtl");
                if (s._keyEvent = !0, T.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        T.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return (n = T("td." + T.datepicker._dayOverClass + ":not(." + T.datepicker._currentClass + ")", s.dpDiv))[0] && T.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, n[0]), (e = T.datepicker._get(s, "onSelect")) ? (i = T.datepicker._formatDate(s), e.apply(s.input ? s.input[0] : null, [i, s])) : T.datepicker._hideDatepicker(), !1;
                    case 27:
                        T.datepicker._hideDatepicker();
                        break;
                    case 33:
                        T.datepicker._adjustDate(t.target, t.ctrlKey ? -T.datepicker._get(s, "stepBigMonths") : -T.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 34:
                        T.datepicker._adjustDate(t.target, t.ctrlKey ? +T.datepicker._get(s, "stepBigMonths") : +T.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && T.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && T.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && T.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && T.datepicker._adjustDate(t.target, t.ctrlKey ? -T.datepicker._get(s, "stepBigMonths") : -T.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && T.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && T.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && T.datepicker._adjustDate(t.target, t.ctrlKey ? +T.datepicker._get(s, "stepBigMonths") : +T.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && T.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        o = !1
                } else 36 === t.keyCode && t.ctrlKey ? T.datepicker._showDatepicker(this) : o = !1;
                o && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var e, i, n = T.datepicker._getInst(t.target);
                return T.datepicker._get(n, "constrainInput") ? (e = T.datepicker._possibleChars(T.datepicker._get(n, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)) : void 0
            },
            _doKeyUp: function(t) {
                var e = T.datepicker._getInst(t.target);
                if (e.input.val() !== e.lastVal) try {
                    T.datepicker.parseDate(T.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, T.datepicker._getFormatConfig(e)) && (T.datepicker._setDateFromField(e), T.datepicker._updateAlternate(e), T.datepicker._updateDatepicker(e))
                } catch (t) {}
                return !0
            },
            _showDatepicker: function(t) {
                var e, i, n, s, o, r, a;
                ("input" !== (t = t.target || t).nodeName.toLowerCase() && (t = T("input", t.parentNode)[0]), T.datepicker._isDisabledDatepicker(t) || T.datepicker._lastInput === t) || (e = T.datepicker._getInst(t), T.datepicker._curInst && T.datepicker._curInst !== e && (T.datepicker._curInst.dpDiv.stop(!0, !0), e && T.datepicker._datepickerShowing && T.datepicker._hideDatepicker(T.datepicker._curInst.input[0])), !1 !== (n = (i = T.datepicker._get(e, "beforeShow")) ? i.apply(t, [t, e]) : {}) && (u(e.settings, n), e.lastVal = null, T.datepicker._lastInput = t, T.datepicker._setDateFromField(e), T.datepicker._inDialog && (t.value = ""), T.datepicker._pos || (T.datepicker._pos = T.datepicker._findPos(t), T.datepicker._pos[1] += t.offsetHeight), s = !1, T(t).parents().each(function() {
                    return !(s |= "fixed" === T(this).css("position"))
                }), o = {
                    left: T.datepicker._pos[0],
                    top: T.datepicker._pos[1]
                }, T.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), T.datepicker._updateDatepicker(e), o = T.datepicker._checkOffset(e, o, s), e.dpDiv.css({
                    position: T.datepicker._inDialog && T.blockUI ? "static" : s ? "fixed" : "absolute",
                    display: "none",
                    left: o.left + "px",
                    top: o.top + "px"
                }), e.inline || (r = T.datepicker._get(e, "showAnim"), a = T.datepicker._get(e, "duration"), e.dpDiv.css("z-index", function(t) {
                    for (var e, i; t.length && t[0] !== document;) {
                        if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                        t = t.parent()
                    }
                    return 0
                }(T(t)) + 1), T.datepicker._datepickerShowing = !0, T.effects && T.effects.effect[r] ? e.dpDiv.show(r, T.datepicker._get(e, "showOptions"), a) : e.dpDiv[r || "show"](r ? a : null), T.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), T.datepicker._curInst = e)))
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4, (v = t).dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var e, i = this._getNumberOfMonths(t),
                    n = i[1],
                    s = t.dpDiv.find("." + this._dayOverClass + " a");
                0 < s.length && o.apply(s.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < n && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === T.datepicker._curInst && T.datepicker._datepickerShowing && T.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (e = t.yearshtml, setTimeout(function() {
                    e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), e = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function(t, e, i) {
                var n = t.dpDiv.outerWidth(),
                    s = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    r = t.input ? t.input.outerHeight() : 0,
                    a = document.documentElement.clientWidth + (i ? 0 : T(document).scrollLeft()),
                    l = document.documentElement.clientHeight + (i ? 0 : T(document).scrollTop());
                return e.left -= this._get(t, "isRTL") ? n - o : 0, e.left -= i && e.left === t.input.offset().left ? T(document).scrollLeft() : 0, e.top -= i && e.top === t.input.offset().top + r ? T(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + n > a && n < a ? Math.abs(e.left + n - a) : 0), e.top -= Math.min(e.top, e.top + s > l && s < l ? Math.abs(s + r) : 0), e
            },
            _findPos: function(t) {
                for (var e, i = this._getInst(t), n = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || T.expr.pseudos.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
                return [(e = T(t).offset()).left, e.top]
            },
            _hideDatepicker: function(t) {
                var e, i, n, s, o = this._curInst;
                !o || t && o !== T.data(t, "datepicker") || this._datepickerShowing && (e = this._get(o, "showAnim"), i = this._get(o, "duration"), n = function() {
                    T.datepicker._tidyDialog(o)
                }, T.effects && (T.effects.effect[e] || T.effects[e]) ? o.dpDiv.hide(e, T.datepicker._get(o, "showOptions"), i, n) : o.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, n), e || n(), this._datepickerShowing = !1, (s = this._get(o, "onClose")) && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), T.blockUI && (T.unblockUI(), T("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if (T.datepicker._curInst) {
                    var e = T(t.target),
                        i = T.datepicker._getInst(e[0]);
                    (e[0].id !== T.datepicker._mainDivId && 0 === e.parents("#" + T.datepicker._mainDivId).length && !e.hasClass(T.datepicker.markerClassName) && !e.closest("." + T.datepicker._triggerClass).length && T.datepicker._datepickerShowing && (!T.datepicker._inDialog || !T.blockUI) || e.hasClass(T.datepicker.markerClassName) && T.datepicker._curInst !== i) && T.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, e, i) {
                var n = T(t),
                    s = this._getInst(n[0]);
                this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, e + ("M" === i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
            },
            _gotoToday: function(t) {
                var e, i = T(t),
                    n = this._getInst(i[0]);
                this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (e = new Date, n.selectedDay = e.getDate(), n.drawMonth = n.selectedMonth = e.getMonth(), n.drawYear = n.selectedYear = e.getFullYear()), this._notifyChange(n), this._adjustDate(i)
            },
            _selectMonthYear: function(t, e, i) {
                var n = T(t),
                    s = this._getInst(n[0]);
                s["selected" + ("M" === i ? "Month" : "Year")] = s["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(n)
            },
            _selectDay: function(t, e, i, n) {
                var s, o = T(t);
                T(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || ((s = this._getInst(o[0])).selectedDay = s.currentDay = T("a", n).html(), s.selectedMonth = s.currentMonth = e, s.selectedYear = s.currentYear = i, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
            },
            _clearDate: function(t) {
                var e = T(t);
                this._selectDate(e, "")
            },
            _selectDate: function(t, e) {
                var i, n = T(t),
                    s = this._getInst(n[0]);
                e = null != e ? e : this._formatDate(s), s.input && s.input.val(e), this._updateAlternate(s), (i = this._get(s, "onSelect")) ? i.apply(s.input ? s.input[0] : null, [e, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var e, i, n, s = this._get(t, "altField");
                s && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), n = this.formatDate(e, i, this._getFormatConfig(t)), T(s).val(n))
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [0 < e && e < 6, ""]
            },
            iso8601Week: function(t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function(i, o, t) {
                if (null == i || null == o) throw "Invalid arguments";
                if ("" === (o = "object" == typeof o ? "" + o : o + "")) return null;
                var n, e, s, r, a = 0,
                    l = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    h = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                    c = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
                    u = (t ? t.dayNames : null) || this._defaults.dayNames,
                    d = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
                    p = (t ? t.monthNames : null) || this._defaults.monthNames,
                    f = -1,
                    g = -1,
                    m = -1,
                    v = -1,
                    _ = !1,
                    b = function(t) {
                        var e = i.length > n + 1 && i.charAt(n + 1) === t;
                        return e && n++, e
                    },
                    y = function(t) {
                        var e = b(t),
                            i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            n = RegExp("^\\d{" + ("y" === t ? i : 1) + "," + i + "}"),
                            s = o.substring(a).match(n);
                        if (!s) throw "Missing number at position " + a;
                        return a += s[0].length, parseInt(s[0], 10)
                    },
                    w = function(t, e, i) {
                        var n = -1,
                            s = T.map(b(t) ? i : e, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            });
                        if (T.each(s, function(t, e) {
                                var i = e[1];
                                return o.substr(a, i.length).toLowerCase() === i.toLowerCase() ? (n = e[0], a += i.length, !1) : void 0
                            }), -1 !== n) return n + 1;
                        throw "Unknown name at position " + a
                    },
                    x = function() {
                        if (o.charAt(a) !== i.charAt(n)) throw "Unexpected literal at position " + a;
                        a++
                    };
                for (n = 0; i.length > n; n++)
                    if (_) "'" !== i.charAt(n) || b("'") ? x() : _ = !1;
                    else switch (i.charAt(n)) {
                        case "d":
                            m = y("d");
                            break;
                        case "D":
                            w("D", c, u);
                            break;
                        case "o":
                            v = y("o");
                            break;
                        case "m":
                            g = y("m");
                            break;
                        case "M":
                            g = w("M", d, p);
                            break;
                        case "y":
                            f = y("y");
                            break;
                        case "@":
                            f = (r = new Date(y("@"))).getFullYear(), g = r.getMonth() + 1, m = r.getDate();
                            break;
                        case "!":
                            f = (r = new Date((y("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = r.getMonth() + 1, m = r.getDate();
                            break;
                        case "'":
                            b("'") ? x() : _ = !0;
                            break;
                        default:
                            x()
                    }
                if (o.length > a && (s = o.substr(a), !/^\s+/.test(s))) throw "Extra/unparsed characters found in date: " + s;
                if (-1 === f ? f = (new Date).getFullYear() : f < 100 && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= h ? 0 : -100)), -1 < v)
                    for (g = 1, m = v; !(m <= (e = this._getDaysInMonth(f, g - 1)));) g++, m -= e;
                if ((r = this._daylightSavingAdjust(new Date(f, g - 1, m))).getFullYear() !== f || r.getMonth() + 1 !== g || r.getDate() !== m) throw "Invalid date";
                return r
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
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(i, t, e) {
                if (!t) return "";
                var n, s = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (e ? e.dayNames : null) || this._defaults.dayNames,
                    r = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (e ? e.monthNames : null) || this._defaults.monthNames,
                    l = function(t) {
                        var e = i.length > n + 1 && i.charAt(n + 1) === t;
                        return e && n++, e
                    },
                    h = function(t, e, i) {
                        var n = "" + e;
                        if (l(t))
                            for (; i > n.length;) n = "0" + n;
                        return n
                    },
                    c = function(t, e, i, n) {
                        return l(t) ? n[e] : i[e]
                    },
                    u = "",
                    d = !1;
                if (t)
                    for (n = 0; i.length > n; n++)
                        if (d) "'" !== i.charAt(n) || l("'") ? u += i.charAt(n) : d = !1;
                        else switch (i.charAt(n)) {
                            case "d":
                                u += h("d", t.getDate(), 2);
                                break;
                            case "D":
                                u += c("D", t.getDay(), s, o);
                                break;
                            case "o":
                                u += h("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                u += h("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                u += c("M", t.getMonth(), r, a);
                                break;
                            case "y":
                                u += l("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                                break;
                            case "@":
                                u += t.getTime();
                                break;
                            case "!":
                                u += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? u += "'" : d = !0;
                                break;
                            default:
                                u += i.charAt(n)
                        }
                return u
            },
            _possibleChars: function(i) {
                var n, t = "",
                    e = !1,
                    s = function(t) {
                        var e = i.length > n + 1 && i.charAt(n + 1) === t;
                        return e && n++, e
                    };
                for (n = 0; i.length > n; n++)
                    if (e) "'" !== i.charAt(n) || s("'") ? t += i.charAt(n) : e = !1;
                    else switch (i.charAt(n)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            t += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? t += "'" : e = !0;
                            break;
                        default:
                            t += i.charAt(n)
                    }
                return t
            },
            _get: function(t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t),
                        o = s,
                        r = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, n, r) || s
                    } catch (t) {
                        n = e ? "" : n
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(a, t, e) {
                var i, n, s = null == t || "" === t ? e : "string" == typeof t ? function(t) {
                    try {
                        return T.datepicker.parseDate(T.datepicker._get(a, "dateFormat"), t, T.datepicker._getFormatConfig(a))
                    } catch (t) {}
                    for (var e = (t.toLowerCase().match(/^c/) ? T.datepicker._getDate(a) : null) || new Date, i = e.getFullYear(), n = e.getMonth(), s = e.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = o.exec(t); r;) {
                        switch (r[2] || "d") {
                            case "d":
                            case "D":
                                s += parseInt(r[1], 10);
                                break;
                            case "w":
                            case "W":
                                s += 7 * parseInt(r[1], 10);
                                break;
                            case "m":
                            case "M":
                                n += parseInt(r[1], 10), s = Math.min(s, T.datepicker._getDaysInMonth(i, n));
                                break;
                            case "y":
                            case "Y":
                                i += parseInt(r[1], 10), s = Math.min(s, T.datepicker._getDaysInMonth(i, n))
                        }
                        r = o.exec(t)
                    }
                    return new Date(i, n, s)
                }(t) : "number" == typeof t ? isNaN(t) ? e : (i = t, (n = new Date).setDate(n.getDate() + i), n) : new Date(t.getTime());
                return (s = s && "Invalid Date" == "" + s ? e : s) && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
            },
            _attachHandlers: function(t) {
                var e = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            T.datepicker._adjustDate(i, -e, "M")
                        },
                        next: function() {
                            T.datepicker._adjustDate(i, +e, "M")
                        },
                        hide: function() {
                            T.datepicker._hideDatepicker()
                        },
                        today: function() {
                            T.datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return T.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return T.datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return T.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    T(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e, i, n, s, o, r, a, l, h, c, u, d, p, f, g, m, v, _, b, y, w, x, C, k, D, T, S, P, A, I, E, M, N, $, O, L, H, z, R, W = new Date,
                    F = this._daylightSavingAdjust(new Date(W.getFullYear(), W.getMonth(), W.getDate())),
                    j = this._get(t, "isRTL"),
                    B = this._get(t, "showButtonPanel"),
                    q = this._get(t, "hideIfNoPrevNext"),
                    Y = this._get(t, "navigationAsDateFormat"),
                    G = this._getNumberOfMonths(t),
                    U = this._get(t, "showCurrentAtPos"),
                    V = this._get(t, "stepMonths"),
                    K = 1 !== G[0] || 1 !== G[1],
                    X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    J = this._getMinMaxDate(t, "min"),
                    Q = this._getMinMaxDate(t, "max"),
                    Z = t.drawMonth - U,
                    tt = t.drawYear;
                if (Z < 0 && (Z += 12, tt--), Q)
                    for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - G[0] * G[1] + 1, Q.getDate())), e = J && e < J ? J : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) --Z < 0 && (Z = 11, tt--);
                for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - V, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = Y ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + V, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? X : F, r = Y ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (j ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; G[0] > x; x++) {
                    for (C = "", this.maxRows = 4, k = 0; G[1] > k; k++) {
                        if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), T = " ui-corner-all", S = "", K) {
                            if (S += "<div class='ui-datepicker-group", 1 < G[1]) switch (k) {
                                case 0:
                                    S += " ui-datepicker-group-first", T = " ui-corner-" + (j ? "right" : "left");
                                    break;
                                case G[1] - 1:
                                    S += " ui-datepicker-group-last", T = " ui-corner-" + (j ? "left" : "right");
                                    break;
                                default:
                                    S += " ui-datepicker-group-middle", T = ""
                            }
                            S += "'>"
                        }
                        for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? j ? o : n : "") + (/all|right/.test(T) && 0 === x ? j ? n : o : "") + this._generateMonthYearHeader(t, Z, tt, J, Q, 0 < x || 0 < k, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) P += "<th scope='col'" + (5 <= (w + c + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[A = (w + c) % 7] + "'>" + p[A] + "</span></th>";
                        for (S += P + "</tr></thead><tbody>", I = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), E = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, M = Math.ceil((E + I) / 7), N = K && this.maxRows > M ? this.maxRows : M, this.maxRows = N, $ = this._daylightSavingAdjust(new Date(tt, Z, 1 - E)), O = 0; O < N; O++) {
                            for (S += "<tr>", L = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")($) + "</td>" : "", w = 0; w < 7; w++) H = m ? m.apply(t.input ? t.input[0] : null, [$]) : [!0, ""], R = (z = $.getMonth() !== Z) && !_ || !H[0] || J && $ < J || Q && Q < $, L += "<td class='" + (5 <= (w + c + 6) % 7 ? " ui-datepicker-week-end" : "") + (z ? " ui-datepicker-other-month" : "") + ($.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === $.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (z && !v ? "" : " " + H[1] + ($.getTime() === X.getTime() ? " " + this._currentClass : "") + ($.getTime() === F.getTime() ? " ui-datepicker-today" : "")) + "'" + (z && !v || !H[2] ? "" : " title='" + H[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + $.getMonth() + "' data-year='" + $.getFullYear() + "'") + ">" + (z && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + $.getDate() + "</span>" : "<a class='ui-state-default" + ($.getTime() === F.getTime() ? " ui-state-highlight" : "") + ($.getTime() === X.getTime() ? " ui-state-active" : "") + (z ? " ui-priority-secondary" : "") + "' href='#'>" + $.getDate() + "</a>") + "</td>", $.setDate($.getDate() + 1), $ = this._daylightSavingAdjust($);
                            S += L + "</tr>"
                        }
                        11 < ++Z && (Z = 0, tt++), C += S += "</tbody></table>" + (K ? "</div>" + (0 < G[0] && k === G[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                    }
                    y += C
                }
                return y += h, t._keyEvent = !1, y
            },
            _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) {
                var l, h, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    _ = this._get(t, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    y = "";
                if (o || !m) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!l || c >= n.getMonth()) && (!h || s.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                    y += "</select>"
                }
                if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function(t) {
                                var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? d : e
                            })(u[0]), g = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                    } return b += this._get(t, "yearSuffix"), _ && (b += (!o && m && v ? "" : "&#xa0;") + y), b + "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var n = t.selectedYear + ("Y" === i ? e : 0),
                    s = t.selectedMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && e < i ? i : e;
                return n && n < s ? n : s
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1));
                return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function(t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    r = null,
                    a = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || a >= e.getFullYear())
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return {
                    shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), T.fn.datepicker = function(t) {
            if (!this.length) return this;
            T.datepicker.initialized || (T(document).on("mousedown", T.datepicker._checkExternalClick), T.datepicker.initialized = !0), 0 === T("#" + T.datepicker._mainDivId).length && T("body").append(T.datepicker.dpDiv);
            var e = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? T.datepicker["_" + t + "Datepicker"].apply(T.datepicker, [this[0]].concat(e)) : this.each(function() {
                "string" == typeof t ? T.datepicker["_" + t + "Datepicker"].apply(T.datepicker, [this].concat(e)) : T.datepicker._attachDatepicker(this, t)
            }) : T.datepicker["_" + t + "Datepicker"].apply(T.datepicker, [this[0]].concat(e))
        }, T.datepicker = new t, T.datepicker.initialized = !1, T.datepicker.uuid = (new Date).getTime(), T.datepicker.version = "1.12.1", T.datepicker, T.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var b = !1;
        T(document).on("mouseup", function() {
            b = !1
        }), T.widget("ui.mouse", {
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
                    return !0 === T.data(t.target, e.widgetName + ".preventClickEvent") ? (T.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!b) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var e = this,
                        i = 1 === t.which,
                        n = !("string" != typeof this.options.cancel || !t.target.nodeName) && T(t.target).closest(this.options.cancel).length;
                    return i && !n && this._mouseCapture(t) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        e.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? t.preventDefault() : (!0 === T.data(t.target, this.widgetName + ".preventClickEvent") && T.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return e._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return e._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), b = !0)), !0
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if (T.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                    if (!t.which)
                        if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && T.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, b = !1, t.preventDefault()
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
        }), T.ui.plugin = {
            add: function(t, e, i) {
                var n, s = T.ui[t].prototype;
                for (n in i) s.plugins[n] = s.plugins[n] || [], s.plugins[n].push([e, i[n]])
            },
            call: function(t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        }, T.ui.safeBlur = function(t) {
            t && "body" !== t.nodeName.toLowerCase() && T(t).trigger("blur")
        }, T.widget("ui.draggable", T.ui.mouse, {
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
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(t) {
                var e = this.options;
                return !(this.helper || e.disabled || 0 < T(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t), !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
            },
            _blockFrames: function(t) {
                this.iframeBlocks = this.document.find(t).map(function() {
                    var t = T(this);
                    return T("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(t) {
                var e = T.ui.safeActiveElement(this.document[0]);
                T(t.target).closest(e).length || T.ui.safeBlur(e)
            },
            _mouseStart: function(t) {
                var e = this.options;
                return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), T.ui.ddmanager && (T.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                    return "fixed" === T(this).css("position")
                }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), T.ui.ddmanager && !e.dropBehaviour && T.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), T.ui.ddmanager && T.ui.ddmanager.dragStart(this, t), !0)
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
                    if (!1 === this._trigger("drag", t, i)) return this._mouseUp(new T.Event("mouseup", t)), !1;
                    this.position = i.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", T.ui.ddmanager && T.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var e = this,
                    i = !1;
                return T.ui.ddmanager && !this.options.dropBehaviour && (i = T.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || T.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? T(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== e._trigger("stop", t) && e._clear()
                }) : !1 !== this._trigger("stop", t) && this._clear(), !1
            },
            _mouseUp: function(t) {
                return this._unblockFrames(), T.ui.ddmanager && T.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), T.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new T.Event("mouseup", {
                    target: this.element[0]
                })) : this._clear(), this
            },
            _getHandle: function(t) {
                return !this.options.handle || !!T(t.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function(t) {
                var e = this.options,
                    i = T.isFunction(e.helper),
                    n = i ? T(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
                return n.parents("body").length || n.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), T.isArray(t) && (t = {
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
                return "absolute" === this.cssPosition && this.scrollParent[0] !== e && T.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
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
                var t, e, i, n = this.options,
                    s = this.document[0];
                return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [T(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, T(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, T(window).scrollLeft() + T(window).width() - this.helperProportions.width - this.margins.left, T(window).scrollTop() + (T(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, T(s).width() - this.helperProportions.width - this.margins.left, (T(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), void((i = (e = T(n.containment))[0]) && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e))) : void(this.containment = null)
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(t, e) {
                var i, n, s, o, r = this.options,
                    a = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    h = t.pageY;
                return a && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (i = this.relativeContainer ? (n = this.relativeContainer.offset(), [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), {
                    top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function(t, e, i) {
                return i = i || this._uiHash(), T.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), T.Widget.prototype._trigger.call(this, t, e, i)
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
        }), T.ui.plugin.add("draggable", "connectToSortable", {
            start: function(e, t, i) {
                var n = T.extend({}, t, {
                    item: i.element
                });
                i.sortables = [], T(i.options.connectToSortable).each(function() {
                    var t = T(this).sortable("instance");
                    t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, n))
                })
            },
            stop: function(e, t, i) {
                var n = T.extend({}, t, {
                    item: i.element
                });
                i.cancelHelperRemoval = !1, T.each(i.sortables, function() {
                    var t = this;
                    t.isOver ? (t.isOver = 0, i.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                        position: t.placeholder.css("position"),
                        top: t.placeholder.css("top"),
                        left: t.placeholder.css("left")
                    }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
                })
            },
            drag: function(i, n, s) {
                T.each(s.sortables, function() {
                    var t = !1,
                        e = this;
                    e.positionAbs = s.positionAbs, e.helperProportions = s.helperProportions, e.offset.click = s.offset.click, e._intersectsWith(e.containerCache) && (t = !0, T.each(s.sortables, function() {
                        return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== e && this._intersectsWith(this.containerCache) && T.contains(e.element[0], this.element[0]) && (t = !1), t
                    })), t ? (e.isOver || (e.isOver = 1, s._parent = n.helper.parent(), e.currentItem = n.helper.appendTo(e.element).data("ui-sortable-item", !0), e.options._helper = e.options.helper, e.options.helper = function() {
                        return n.helper[0]
                    }, i.target = e.currentItem[0], e._mouseCapture(i, !0), e._mouseStart(i, !0, !0), e.offset.click.top = s.offset.click.top, e.offset.click.left = s.offset.click.left, e.offset.parent.left -= s.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= s.offset.parent.top - e.offset.parent.top, s._trigger("toSortable", i), s.dropped = e.element, T.each(s.sortables, function() {
                        this.refreshPositions()
                    }), s.currentItem = s.element, e.fromOutside = s), e.currentItem && (e._mouseDrag(i), n.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", i, e._uiHash(e)), e._mouseStop(i, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, e.placeholder && e.placeholder.remove(), n.helper.appendTo(s._parent), s._refreshOffsets(i), n.position = s._generatePosition(i, !0), s._trigger("fromSortable", i), s.dropped = !1, T.each(s.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), T.ui.plugin.add("draggable", "cursor", {
            start: function(t, e, i) {
                var n = T("body"),
                    s = i.options;
                n.css("cursor") && (s._cursor = n.css("cursor")), n.css("cursor", s.cursor)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._cursor && T("body").css("cursor", n._cursor)
            }
        }), T.ui.plugin.add("draggable", "opacity", {
            start: function(t, e, i) {
                var n = T(e.helper),
                    s = i.options;
                n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._opacity && T(e.helper).css("opacity", n._opacity)
            }
        }), T.ui.plugin.add("draggable", "scroll", {
            start: function(t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(t, e, i) {
                var n = i.options,
                    s = !1,
                    o = i.scrollParentNotHidden[0],
                    r = i.document[0];
                o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = s = o.scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = s = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = s = o.scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - T(r).scrollTop() < n.scrollSensitivity ? s = T(r).scrollTop(T(r).scrollTop() - n.scrollSpeed) : T(window).height() - (t.pageY - T(r).scrollTop()) < n.scrollSensitivity && (s = T(r).scrollTop(T(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - T(r).scrollLeft() < n.scrollSensitivity ? s = T(r).scrollLeft(T(r).scrollLeft() - n.scrollSpeed) : T(window).width() - (t.pageX - T(r).scrollLeft()) < n.scrollSensitivity && (s = T(r).scrollLeft(T(r).scrollLeft() + n.scrollSpeed)))), !1 !== s && T.ui.ddmanager && !n.dropBehaviour && T.ui.ddmanager.prepareOffsets(i, t)
            }
        }), T.ui.plugin.add("draggable", "snap", {
            start: function(t, e, i) {
                var n = i.options;
                i.snapElements = [], T(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                    var t = T(this),
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
                var n, s, o, r, a, l, h, c, u, d, p = i.options,
                    f = p.snapTolerance,
                    g = e.offset.left,
                    m = g + i.helperProportions.width,
                    v = e.offset.top,
                    _ = v + i.helperProportions.height;
                for (u = i.snapElements.length - 1; 0 <= u; u--) l = (a = i.snapElements[u].left - i.margins.left) + i.snapElements[u].width, c = (h = i.snapElements[u].top - i.margins.top) + i.snapElements[u].height, m < a - f || l + f < g || _ < h - f || c + f < v || !T.contains(i.snapElements[u].item.ownerDocument, i.snapElements[u].item) ? (i.snapElements[u].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, T.extend(i._uiHash(), {
                    snapItem: i.snapElements[u].item
                })), i.snapElements[u].snapping = !1) : ("inner" !== p.snapMode && (n = f >= Math.abs(h - _), s = f >= Math.abs(c - v), o = f >= Math.abs(a - m), r = f >= Math.abs(l - g), n && (e.position.top = i._convertPositionTo("relative", {
                    top: h - i.helperProportions.height,
                    left: 0
                }).top), s && (e.position.top = i._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), o && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: a - i.helperProportions.width
                }).left), r && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left)), d = n || s || o || r, "outer" !== p.snapMode && (n = f >= Math.abs(h - v), s = f >= Math.abs(c - _), o = f >= Math.abs(a - g), r = f >= Math.abs(l - m), n && (e.position.top = i._convertPositionTo("relative", {
                    top: h,
                    left: 0
                }).top), s && (e.position.top = i._convertPositionTo("relative", {
                    top: c - i.helperProportions.height,
                    left: 0
                }).top), o && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left), r && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l - i.helperProportions.width
                }).left)), !i.snapElements[u].snapping && (n || s || o || r || d) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, T.extend(i._uiHash(), {
                    snapItem: i.snapElements[u].item
                })), i.snapElements[u].snapping = n || s || o || r || d)
            }
        }), T.ui.plugin.add("draggable", "stack", {
            start: function(t, e, i) {
                var n, s = i.options,
                    o = T.makeArray(T(s.stack)).sort(function(t, e) {
                        return (parseInt(T(t).css("zIndex"), 10) || 0) - (parseInt(T(e).css("zIndex"), 10) || 0)
                    });
                o.length && (n = parseInt(T(o[0]).css("zIndex"), 10) || 0, T(o).each(function(t) {
                    T(this).css("zIndex", n + t)
                }), this.css("zIndex", n + o.length))
            }
        }), T.ui.plugin.add("draggable", "zIndex", {
            start: function(t, e, i) {
                var n = T(e.helper),
                    s = i.options;
                n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._zIndex && T(e.helper).css("zIndex", n._zIndex)
            }
        }), T.ui.draggable, T.widget("ui.resizable", T.ui.mouse, {
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
                if ("hidden" === T(t).css("overflow")) return !1;
                var i = e && "left" === e ? "scrollLeft" : "scrollTop",
                    n = !1;
                return 0 < t[i] || (t[i] = 1, n = 0 < t[i], t[i] = 0, n)
            },
            _create: function() {
                var t, e = this.options,
                    i = this;
                this._addClass("ui-resizable"), T.extend(this, {
                    _aspectRatio: !!e.aspectRatio,
                    aspectRatio: e.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(T("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
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
                })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), e.autoHide && T(this.element).on("mouseenter", function() {
                    e.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show())
                }).on("mouseleave", function() {
                    e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide())
                }), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, e = function(t) {
                    T(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
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
                var t, e, i, n, s, o = this.options,
                    r = this;
                if (this.handles = o.handles || (T(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this._handles = T(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i = this.handles.split(","), this.handles = {}, e = 0; i.length > e; e++) n = "ui-resizable-" + (t = T.trim(i[e])), s = T("<div>"), this._addClass(s, "ui-resizable-handle " + n), s.css({
                        zIndex: o.zIndex
                    }), this.handles[t] = ".ui-resizable-" + t, this.element.append(s);
                this._renderAxis = function(t) {
                    var e, i, n, s;
                    for (e in t = t || this.element, this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = T(this.handles[e]), this._on(this.handles[e], {
                        mousedown: r._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = T(this.handles[e], this.element), s = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), n = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(n, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                    r.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = s && s[1] ? s[1] : "se")
                }), o.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function() {
                this._handles.remove()
            },
            _mouseCapture: function(t) {
                var e, i, n = !1;
                for (e in this.handles)((i = T(this.handles[e])[0]) === t.target || T.contains(i, t.target)) && (n = !0);
                return !this.options.disabled && n
            },
            _mouseStart: function(t) {
                var e, i, n, s = this.options,
                    o = this.element;
                return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), s.containment && (e += T(s.containment).scrollLeft() || 0, i += T(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: e,
                    top: i
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.originalSize = this._helper ? {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.sizeDiff = {
                    width: o.outerWidth() - o.width(),
                    height: o.outerHeight() - o.height()
                }, this.originalPosition = {
                    left: e,
                    top: i
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = T(".ui-resizable-" + this.axis).css("cursor"), T("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var e, i, n = this.originalMousePosition,
                    s = this.axis,
                    o = t.pageX - n.left || 0,
                    r = t.pageY - n.top || 0,
                    a = this._change[s];
                return this._updatePrevProperties(), a && (e = a.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), T.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges())), !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var e, i, n, s, o, r, a, l = this.options,
                    h = this;
                return this._helper && (n = (i = (e = this._proportionallyResizeElements).length && /textarea/i.test(e[0].nodeName)) && this._hasScroll(e[0], "left") ? 0 : h.sizeDiff.height, s = i ? 0 : h.sizeDiff.width, o = {
                    width: h.helper.width() - s,
                    height: h.helper.height() - n
                }, r = parseFloat(h.element.css("left")) + (h.position.left - h.originalPosition.left) || null, a = parseFloat(h.element.css("top")) + (h.position.top - h.originalPosition.top) || null, l.animate || this.element.css(T.extend(o, {
                    top: a,
                    left: r
                })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !l.animate && this._proportionallyResize()), T("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
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
                var e, i, n, s, o, r = this.options;
                o = {
                    minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                    maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                    minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                    maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > s && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function(t) {
                var e = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), n && h && (t.left = a - e.maxWidth), r && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var t = this.element,
                    e = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || T("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
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
                    var n = this.originalSize;
                    return {
                        top: this.originalPosition.top + i,
                        height: n.height - i
                    }
                },
                s: function(t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(t, e, i) {
                    return T.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
                },
                sw: function(t, e, i) {
                    return T.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
                },
                ne: function(t, e, i) {
                    return T.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
                },
                nw: function(t, e, i) {
                    return T.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
                }
            },
            _propagate: function(t, e) {
                T.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui())
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
        }), T.ui.plugin.add("resizable", "animate", {
            stop: function(e) {
                var i = T(this).resizable("instance"),
                    t = i.options,
                    n = i._proportionallyResizeElements,
                    s = n.length && /textarea/i.test(n[0].nodeName),
                    o = s && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                    r = s ? 0 : i.sizeDiff.width,
                    a = {
                        width: i.size.width - r,
                        height: i.size.height - o
                    },
                    l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                    h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(T.extend(a, h && l ? {
                    top: h,
                    left: l
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
                        n && n.length && T(n[0]).css({
                            width: t.width,
                            height: t.height
                        }), i._updateCache(t), i._propagate("resize", e)
                    }
                })
            }
        }), T.ui.plugin.add("resizable", "containment", {
            start: function() {
                var i, n, t, e, s, o, r, a = T(this).resizable("instance"),
                    l = a.options,
                    h = a.element,
                    c = l.containment,
                    u = c instanceof T ? c.get(0) : /parent/.test(c) ? h.parent().get(0) : c;
                u && (a.containerElement = T(u), /document/.test(c) || c === document ? (a.containerOffset = {
                    left: 0,
                    top: 0
                }, a.containerPosition = {
                    left: 0,
                    top: 0
                }, a.parentData = {
                    element: T(document),
                    left: 0,
                    top: 0,
                    width: T(document).width(),
                    height: T(document).height() || document.body.parentNode.scrollHeight
                }) : (i = T(u), n = [], T(["Top", "Right", "Left", "Bottom"]).each(function(t, e) {
                    n[t] = a._num(i.css("padding" + e))
                }), a.containerOffset = i.offset(), a.containerPosition = i.position(), a.containerSize = {
                    height: i.innerHeight() - n[3],
                    width: i.innerWidth() - n[1]
                }, t = a.containerOffset, e = a.containerSize.height, s = a.containerSize.width, o = a._hasScroll(u, "left") ? u.scrollWidth : s, r = a._hasScroll(u) ? u.scrollHeight : e, a.parentData = {
                    element: u,
                    left: t.left,
                    top: t.top,
                    width: o,
                    height: r
                }))
            },
            resize: function(t) {
                var e, i, n, s, o = T(this).resizable("instance"),
                    r = o.options,
                    a = o.containerOffset,
                    l = o.position,
                    h = o._aspectRatio || t.shiftKey,
                    c = {
                        top: 0,
                        left: 0
                    },
                    u = o.containerElement,
                    d = !0;
                u[0] !== document && /static/.test(u.css("position")) && (c = a), l.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), h && (o.size.height = o.size.width / o.aspectRatio, d = !1), o.position.left = r.helper ? a.left : 0), l.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), h && (o.size.width = o.size.height * o.aspectRatio, d = !1), o.position.top = o._helper ? a.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), o.offset.top = n && s ? (o.offset.left = o.parentData.left + o.position.left, o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.element.offset().top), e = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - a.left)), i = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - a.top)), e + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - e, h && (o.size.height = o.size.width / o.aspectRatio, d = !1)), i + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - i, h && (o.size.width = o.size.height * o.aspectRatio, d = !1)), d || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
            },
            stop: function() {
                var t = T(this).resizable("instance"),
                    e = t.options,
                    i = t.containerOffset,
                    n = t.containerPosition,
                    s = t.containerElement,
                    o = T(t.helper),
                    r = o.offset(),
                    a = o.outerWidth() - t.sizeDiff.width,
                    l = o.outerHeight() - t.sizeDiff.height;
                t._helper && !e.animate && /relative/.test(s.css("position")) && T(this).css({
                    left: r.left - n.left - i.left,
                    width: a,
                    height: l
                }), t._helper && !e.animate && /static/.test(s.css("position")) && T(this).css({
                    left: r.left - n.left - i.left,
                    width: a,
                    height: l
                })
            }
        }), T.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = T(this).resizable("instance").options;
                T(t.alsoResize).each(function() {
                    var t = T(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseFloat(t.width()),
                        height: parseFloat(t.height()),
                        left: parseFloat(t.css("left")),
                        top: parseFloat(t.css("top"))
                    })
                })
            },
            resize: function(t, i) {
                var e = T(this).resizable("instance"),
                    n = e.options,
                    s = e.originalSize,
                    o = e.originalPosition,
                    r = {
                        height: e.size.height - s.height || 0,
                        width: e.size.width - s.width || 0,
                        top: e.position.top - o.top || 0,
                        left: e.position.left - o.left || 0
                    };
                T(n.alsoResize).each(function() {
                    var t = T(this),
                        n = T(this).data("ui-resizable-alsoresize"),
                        s = {},
                        e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    T.each(e, function(t, e) {
                        var i = (n[e] || 0) + (r[e] || 0);
                        i && 0 <= i && (s[e] = i || null)
                    }), t.css(s)
                })
            },
            stop: function() {
                T(this).removeData("ui-resizable-alsoresize")
            }
        }), T.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = T(this).resizable("instance"),
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
                }), t._addClass(t.ghost, "ui-resizable-ghost"), !1 !== T.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = T(this).resizable("instance");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = T(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), T.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t, e = T(this).resizable("instance"),
                    i = e.options,
                    n = e.size,
                    s = e.originalSize,
                    o = e.originalPosition,
                    r = e.axis,
                    a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                    l = a[0] || 1,
                    h = a[1] || 1,
                    c = Math.round((n.width - s.width) / l) * l,
                    u = Math.round((n.height - s.height) / h) * h,
                    d = s.width + c,
                    p = s.height + u,
                    f = i.maxWidth && d > i.maxWidth,
                    g = i.maxHeight && p > i.maxHeight,
                    m = i.minWidth && i.minWidth > d,
                    v = i.minHeight && i.minHeight > p;
                i.grid = a, m && (d += l), v && (p += h), f && (d -= l), g && (p -= h), /^(se|s|e)$/.test(r) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : ((p - h <= 0 || d - l <= 0) && (t = e._getPaddingPlusBorderDimensions(this)), e.position.top = 0 < p - h ? (e.size.height = p, o.top - u) : (p = h - t.height, e.size.height = p, o.top + s.height - p), e.position.left = 0 < d - l ? (e.size.width = d, o.left - c) : (d = l - t.width, e.size.width = d, o.left + s.width - d))
            }
        }), T.ui.resizable, T.widget("ui.dialog", {
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
                        var e = T(this).css(t).offset().top;
                        e < 0 && T(this).css("top", t.top - e)
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
                }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && T.fn.draggable && this._makeDraggable(), this.options.resizable && T.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t.jquery || t.nodeType) ? T(t) : this.document.find(t || "body").eq(0)
            },
            _destroy: function() {
                var t, e = this.originalPosition;
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: T.noop,
            enable: T.noop,
            close: function(t) {
                var e = this;
                this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || T.ui.safeBlur(T.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
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
                    n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                        return +T(this).css("z-index")
                    }).get(),
                    s = Math.max.apply(null, n);
                return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), i = !0), i && !e && this._trigger("focus", t), i
            },
            open: function() {
                var t = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = T(T.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                    t._focusTabbable(), t._trigger("focus")
                }), this._makeFocusTarget(), void this._trigger("open"))
            },
            _focusTabbable: function() {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
            },
            _keepFocus: function(t) {
                function e() {
                    var t = T.ui.safeActiveElement(this.document[0]);
                    this.uiDialog[0] === t || T.contains(this.uiDialog[0], t) || this._focusTabbable()
                }
                t.preventDefault(), e.call(this), this._delay(e)
            },
            _createWrapper: function() {
                this.uiDialog = T("<div>").hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                    keydown: function(t) {
                        if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === T.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                        if (t.keyCode === T.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                            var e = this.uiDialog.find(":tabbable"),
                                i = e.filter(":first"),
                                n = e.filter(":last");
                            t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                                n.trigger("focus")
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
                this.uiDialogTitlebar = T("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                    mousedown: function(t) {
                        T(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                    }
                }), this.uiDialogTitlebarClose = T("<button type='button'></button>").button({
                    label: T("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: !1
                }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                    click: function(t) {
                        t.preventDefault(), this.close(t)
                    }
                }), t = T("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                    "aria-labelledby": t.attr("id")
                })
            },
            _title: function(t) {
                this.options.title ? t.text(this.options.title) : t.html("&#160;")
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = T("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = T("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
            },
            _createButtons: function() {
                var s = this,
                    t = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), T.isEmptyObject(t) || T.isArray(t) && !t.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (T.each(t, function(t, e) {
                    var i, n;
                    e = T.isFunction(e) ? {
                        click: e,
                        text: t
                    } : e, e = T.extend({
                        type: "button"
                    }, e), i = e.click, n = {
                        icon: e.icon,
                        iconPosition: e.iconPosition,
                        showLabel: e.showLabel,
                        icons: e.icons,
                        text: e.text
                    }, delete e.click, delete e.icon, delete e.iconPosition, delete e.showLabel, delete e.icons, "boolean" == typeof e.text && delete e.text, T("<button></button>", e).button(n).appendTo(s.uiButtonSet).on("click", function() {
                        i.apply(s.element[0], arguments)
                    })
                }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function s(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var o = this,
                    r = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(t, e) {
                        o._addClass(T(this), "ui-dialog-dragging"), o._blockFrames(), o._trigger("dragStart", t, s(e))
                    },
                    drag: function(t, e) {
                        o._trigger("drag", t, s(e))
                    },
                    stop: function(t, e) {
                        var i = e.offset.left - o.document.scrollLeft(),
                            n = e.offset.top - o.document.scrollTop();
                        r.position = {
                            my: "left top",
                            at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= n ? "+" : "") + n,
                            of: o.window
                        }, o._removeClass(T(this), "ui-dialog-dragging"), o._unblockFrames(), o._trigger("dragStop", t, s(e))
                    }
                })
            },
            _makeResizable: function() {
                function o(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                var r = this,
                    a = this.options,
                    t = a.resizable,
                    e = this.uiDialog.css("position"),
                    i = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
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
                        r._addClass(T(this), "ui-dialog-resizing"), r._blockFrames(), r._trigger("resizeStart", t, o(e))
                    },
                    resize: function(t, e) {
                        r._trigger("resize", t, o(e))
                    },
                    stop: function(t, e) {
                        var i = r.uiDialog.offset(),
                            n = i.left - r.document.scrollLeft(),
                            s = i.top - r.document.scrollTop();
                        a.height = r.uiDialog.height(), a.width = r.uiDialog.width(), a.position = {
                            my: "left top",
                            at: "left" + (0 <= n ? "+" : "") + n + " top" + (0 <= s ? "+" : "") + s,
                            of: r.window
                        }, r._removeClass(T(this), "ui-dialog-resizing"), r._unblockFrames(), r._trigger("resizeStop", t, o(e))
                    }
                }).css("position", e)
            },
            _trackFocus: function() {
                this._on(this.widget(), {
                    focusin: function(t) {
                        this._makeFocusTarget(), this._focusedElement = T(t.target)
                    }
                })
            },
            _makeFocusTarget: function() {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function() {
                var t = this._trackingInstances(),
                    e = T.inArray(this, t); - 1 !== e && t.splice(e, 1)
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
                    n = !1,
                    s = {};
                T.each(t, function(t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
                }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function(t, e) {
                var i, n, s = this.uiDialog;
                "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                    label: T("<a>").text("" + this.options.closeText).html()
                }), "draggable" === t && ((i = s.is(":data(ui-draggable)")) && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && ((n = s.is(":data(ui-resizable)")) && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || !1 === e || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, e, i, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var t = T(this);
                    return T("<div>").css({
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
                return !!T(t.target).closest(".ui-dialog").length || !!T(t.target).closest(".ui-datepicker").length
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
                    }), this.overlay = T("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
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
        }), !1 !== T.uiBackCompat && T.widget("ui.dialog", T.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function() {
                this._super(), this.uiDialog.addClass(this.options.dialogClass)
            },
            _setOption: function(t, e) {
                "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
            }
        }), T.ui.dialog, T.widget("ui.droppable", {
            version: "1.12.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                addClasses: !0,
                greedy: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var t, e = this.options,
                    i = e.accept;
                this.isover = !1, this.isout = !0, this.accept = T.isFunction(i) ? i : function(t) {
                    return t.is(i)
                }, this.proportions = function() {
                    return arguments.length ? void(t = arguments[0]) : t || (t = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    })
                }, this._addToManager(e.scope), e.addClasses && this._addClass("ui-droppable")
            },
            _addToManager: function(t) {
                T.ui.ddmanager.droppables[t] = T.ui.ddmanager.droppables[t] || [], T.ui.ddmanager.droppables[t].push(this)
            },
            _splice: function(t) {
                for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
            },
            _destroy: function() {
                var t = T.ui.ddmanager.droppables[this.options.scope];
                this._splice(t)
            },
            _setOption: function(t, e) {
                if ("accept" === t) this.accept = T.isFunction(e) ? e : function(t) {
                    return t.is(e)
                };
                else if ("scope" === t) {
                    var i = T.ui.ddmanager.droppables[this.options.scope];
                    this._splice(i), this._addToManager(e)
                }
                this._super(t, e)
            },
            _activate: function(t) {
                var e = T.ui.ddmanager.current;
                this._addActiveClass(), e && this._trigger("activate", t, this.ui(e))
            },
            _deactivate: function(t) {
                var e = T.ui.ddmanager.current;
                this._removeActiveClass(), e && this._trigger("deactivate", t, this.ui(e))
            },
            _over: function(t) {
                var e = T.ui.ddmanager.current;
                e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(e)))
            },
            _out: function(t) {
                var e = T.ui.ddmanager.current;
                e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(e)))
            },
            _drop: function(e, t) {
                var i = t || T.ui.ddmanager.current,
                    n = !1;
                return !(!i || (i.currentItem || i.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var t = T(this).droppable("instance");
                    return t.options.greedy && !t.options.disabled && t.options.scope === i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && w(i, T.extend(t, {
                        offset: t.element.offset()
                    }), t.options.tolerance, e) ? !(n = !0) : void 0
                }), !n && (!!this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(i)), this.element)))
            },
            ui: function(t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            },
            _addHoverClass: function() {
                this._addClass("ui-droppable-hover")
            },
            _removeHoverClass: function() {
                this._removeClass("ui-droppable-hover")
            },
            _addActiveClass: function() {
                this._addClass("ui-droppable-active")
            },
            _removeActiveClass: function() {
                this._removeClass("ui-droppable-active")
            }
        });
        var y, w = T.ui.intersect = function() {
            function d(t, e, i) {
                return e <= t && t < e + i
            }
            return function(t, e, i, n) {
                if (!e.offset) return !1;
                var s = (t.positionAbs || t.position.absolute).left + t.margins.left,
                    o = (t.positionAbs || t.position.absolute).top + t.margins.top,
                    r = s + t.helperProportions.width,
                    a = o + t.helperProportions.height,
                    l = e.offset.left,
                    h = e.offset.top,
                    c = l + e.proportions().width,
                    u = h + e.proportions().height;
                switch (i) {
                    case "fit":
                        return l <= s && r <= c && h <= o && a <= u;
                    case "intersect":
                        return s + t.helperProportions.width / 2 > l && c > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > h && u > a - t.helperProportions.height / 2;
                    case "pointer":
                        return d(n.pageY, h, e.proportions().height) && d(n.pageX, l, e.proportions().width);
                    case "touch":
                        return (h <= o && o <= u || h <= a && a <= u || o < h && u < a) && (l <= s && s <= c || l <= r && r <= c || s < l && c < r);
                    default:
                        return !1
                }
            }
        }();
        !(T.ui.ddmanager = {
            current: null,
            droppables: {
                default: []
            },
            prepareOffsets: function(t, e) {
                var i, n, s = T.ui.ddmanager.droppables[t.options.scope] || [],
                    o = e ? e.type : null,
                    r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                t: for (i = 0; s.length > i; i++)
                    if (!(s[i].options.disabled || t && !s[i].accept.call(s[i].element[0], t.currentItem || t.element))) {
                        for (n = 0; r.length > n; n++)
                            if (r[n] === s[i].element[0]) {
                                s[i].proportions().height = 0;
                                continue t
                            } s[i].visible = "none" !== s[i].element.css("display"), s[i].visible && ("mousedown" === o && s[i]._activate.call(s[i], e), s[i].offset = s[i].element.offset(), s[i].proportions({
                            width: s[i].element[0].offsetWidth,
                            height: s[i].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(t, e) {
                var i = !1;
                return T.each((T.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && w(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e)))
                }), i
            },
            dragStart: function(t, e) {
                t.element.parentsUntil("body").on("scroll.droppable", function() {
                    t.options.refreshPositions || T.ui.ddmanager.prepareOffsets(t, e)
                })
            },
            drag: function(o, r) {
                o.options.refreshPositions && T.ui.ddmanager.prepareOffsets(o, r), T.each(T.ui.ddmanager.droppables[o.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var t, e, i, n = w(o, this, this.options.tolerance, r),
                            s = !n && this.isover ? "isout" : n && !this.isover ? "isover" : null;
                        s && (this.options.greedy && (e = this.options.scope, (i = this.element.parents(":data(ui-droppable)").filter(function() {
                            return T(this).droppable("instance").options.scope === e
                        })).length && ((t = T(i[0]).droppable("instance")).greedyChild = "isover" === s)), t && "isover" === s && (t.isover = !1, t.isout = !0, t._out.call(t, r)), this[s] = !0, this["isout" === s ? "isover" : "isout"] = !1, this["isover" === s ? "_over" : "_out"].call(this, r), t && "isout" === s && (t.isout = !1, t.isover = !0, t._over.call(t, r)))
                    }
                })
            },
            dragStop: function(t, e) {
                t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || T.ui.ddmanager.prepareOffsets(t, e)
            }
        }) !== T.uiBackCompat && T.widget("ui.droppable", T.ui.droppable, {
            options: {
                hoverClass: !1,
                activeClass: !1
            },
            _addActiveClass: function() {
                this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
            },
            _removeActiveClass: function() {
                this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
            },
            _addHoverClass: function() {
                this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
            },
            _removeHoverClass: function() {
                this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
            }
        }), T.ui.droppable, T.widget("ui.progressbar", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-progressbar": "ui-corner-all",
                    "ui-progressbar-value": "ui-corner-left",
                    "ui-progressbar-complete": "ui-corner-right"
                },
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = T("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
            },
            value: function(t) {
                return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
            },
            _constrainedValue: function(t) {
                return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function(t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
            },
            _setOption: function(t, e) {
                "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var t = this.options.value,
                    e = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = T("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": t
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
            }
        }), T.widget("ui.selectable", T.ui.mouse, {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var n = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    n.elementPos = T(n.element[0]).offset(), n.selectees = T(n.options.filter, n.element[0]), n._addClass(n.selectees, "ui-selectee"), n.selectees.each(function() {
                        var t = T(this),
                            e = t.offset(),
                            i = {
                                left: e.left - n.elementPos.left,
                                top: e.top - n.elementPos.top
                            };
                        T.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: i.left,
                            top: i.top,
                            right: i.left + t.outerWidth(),
                            bottom: i.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this._mouseInit(), this.helper = T("<div>"), this._addClass(this.helper, "ui-selectable-helper")
            },
            _destroy: function() {
                this.selectees.removeData("selectable-item"), this._mouseDestroy()
            },
            _mouseStart: function(i) {
                var n = this,
                    t = this.options;
                this.opos = [i.pageX, i.pageY], this.elementPos = T(this.element[0]).offset(), this.options.disabled || (this.selectees = T(t.filter, this.element[0]), this._trigger("start", i), T(t.appendTo).append(this.helper), this.helper.css({
                    left: i.pageX,
                    top: i.pageY,
                    width: 0,
                    height: 0
                }), t.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var t = T.data(this, "selectable-item");
                    t.startselected = !0, i.metaKey || i.ctrlKey || (n._removeClass(t.$element, "ui-selected"), t.selected = !1, n._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, n._trigger("unselecting", i, {
                        unselecting: t.element
                    }))
                }), T(i.target).parents().addBack().each(function() {
                    var t, e = T.data(this, "selectable-item");
                    return e ? (t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected"), n._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"), e.unselecting = !t, e.selecting = t, (e.selected = t) ? n._trigger("selecting", i, {
                        selecting: e.element
                    }) : n._trigger("unselecting", i, {
                        unselecting: e.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function(n) {
                if (this.dragged = !0, !this.options.disabled) {
                    var t, s = this,
                        o = this.options,
                        r = this.opos[0],
                        a = this.opos[1],
                        l = n.pageX,
                        h = n.pageY;
                    return l < r && (t = l, l = r, r = t), h < a && (t = h, h = a, a = t), this.helper.css({
                        left: r,
                        top: a,
                        width: l - r,
                        height: h - a
                    }), this.selectees.each(function() {
                        var t = T.data(this, "selectable-item"),
                            e = !1,
                            i = {};
                        t && t.element !== s.element[0] && (i.left = t.left + s.elementPos.left, i.right = t.right + s.elementPos.left, i.top = t.top + s.elementPos.top, i.bottom = t.bottom + s.elementPos.top, "touch" === o.tolerance ? e = !(i.left > l || r > i.right || i.top > h || a > i.bottom) : "fit" === o.tolerance && (e = i.left > r && l > i.right && i.top > a && h > i.bottom), e ? (t.selected && (s._removeClass(t.$element, "ui-selected"), t.selected = !1), t.unselecting && (s._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1), t.selecting || (s._addClass(t.$element, "ui-selecting"), t.selecting = !0, s._trigger("selecting", n, {
                            selecting: t.element
                        }))) : (t.selecting && ((n.metaKey || n.ctrlKey) && t.startselected ? (s._removeClass(t.$element, "ui-selecting"), t.selecting = !1, s._addClass(t.$element, "ui-selected"), t.selected = !0) : (s._removeClass(t.$element, "ui-selecting"), t.selecting = !1, t.startselected && (s._addClass(t.$element, "ui-unselecting"), t.unselecting = !0), s._trigger("unselecting", n, {
                            unselecting: t.element
                        }))), t.selected && (n.metaKey || n.ctrlKey || t.startselected || (s._removeClass(t.$element, "ui-selected"), t.selected = !1, s._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, s._trigger("unselecting", n, {
                            unselecting: t.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(e) {
                var i = this;
                return this.dragged = !1, T(".ui-unselecting", this.element[0]).each(function() {
                    var t = T.data(this, "selectable-item");
                    i._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1, t.startselected = !1, i._trigger("unselected", e, {
                        unselected: t.element
                    })
                }), T(".ui-selecting", this.element[0]).each(function() {
                    var t = T.data(this, "selectable-item");
                    i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"), t.selecting = !1, t.selected = !0, t.startselected = !0, i._trigger("selected", e, {
                        selected: t.element
                    })
                }), this._trigger("stop", e), this.helper.remove(), !1
            }
        }), T.widget("ui.selectmenu", [T.ui.formResetMixin, {
            version: "1.12.1",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                classes: {
                    "ui-selectmenu-button-open": "ui-corner-top",
                    "ui-selectmenu-button-closed": "ui-corner-all"
                },
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: !1,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function() {
                var t = this.element.uniqueId().attr("id");
                this.ids = {
                    element: t,
                    button: t + "-button",
                    menu: t + "-menu"
                }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = T()
            },
            _drawButton: function() {
                var t, e = this,
                    i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                    click: function(t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = T("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t = T("<span>").appendTo(this.button), this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(i).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                    e._rendered || e._refreshMenu()
                })
            },
            _drawMenu: function() {
                var n = this;
                this.menu = T("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = T("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function(t, e) {
                        t.preventDefault(), n._setSelection(), n._select(e.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function(t, e) {
                        var i = e.item.data("ui-selectmenu-item");
                        null != n.focusIndex && i.index !== n.focusIndex && (n._trigger("focus", t, {
                            item: i
                        }), n.isOpen || n._select(i, t)), n.focusIndex = i.index, n.button.attr("aria-activedescendant", n.menuItems.eq(i.index).attr("id"))
                    }
                }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                    return !1
                }, this.menuInstance._isDivider = function() {
                    return !1
                }
            },
            refresh: function() {
                this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
            },
            _refreshMenu: function() {
                var t, e = this.element.find("option");
                this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function(t) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
            },
            _position: function() {
                this.menuWrap.position(T.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function(t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
            },
            widget: function() {
                return this.button
            },
            menuWidget: function() {
                return this.menu
            },
            _renderButtonItem: function(t) {
                var e = T("<span>");
                return this._setText(e, t.label), this._addClass(e, "ui-selectmenu-text"), e
            },
            _renderMenu: function(n, t) {
                var s = this,
                    o = "";
                T.each(t, function(t, e) {
                    var i;
                    e.optgroup !== o && (i = T("<li>", {
                        text: e.optgroup
                    }), s._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), i.appendTo(n), o = e.optgroup), s._renderItemData(n, e)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function(t, e) {
                var i = T("<li>"),
                    n = T("<div>", {
                        title: e.element.attr("title")
                    });
                return e.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(n, e.label), i.append(n).appendTo(t)
            },
            _setText: function(t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function(t, e) {
                var i, n, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, n)
            },
            _getSelectedItem: function() {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
            },
            _toggle: function(t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function() {
                var t;
                this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function(t) {
                    this.isOpen && (T(t.target).closest(".ui-selectmenu-menu, #" + T.ui.escapeSelector(this.ids.button)).length || this.close(t))
                }
            },
            _buttonEvents: {
                mousedown: function() {
                    var t;
                    window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
                },
                click: function(t) {
                    this._setSelection(), this._toggle(t)
                },
                keydown: function(t) {
                    var e = !0;
                    switch (t.keyCode) {
                        case T.ui.keyCode.TAB:
                        case T.ui.keyCode.ESCAPE:
                            this.close(t), e = !1;
                            break;
                        case T.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(t);
                            break;
                        case T.ui.keyCode.UP:
                            t.altKey ? this._toggle(t) : this._move("prev", t);
                            break;
                        case T.ui.keyCode.DOWN:
                            t.altKey ? this._toggle(t) : this._move("next", t);
                            break;
                        case T.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                            break;
                        case T.ui.keyCode.LEFT:
                            this._move("prev", t);
                            break;
                        case T.ui.keyCode.RIGHT:
                            this._move("next", t);
                            break;
                        case T.ui.keyCode.HOME:
                        case T.ui.keyCode.PAGE_UP:
                            this._move("first", t);
                            break;
                        case T.ui.keyCode.END:
                        case T.ui.keyCode.PAGE_DOWN:
                            this._move("last", t);
                            break;
                        default:
                            this.menu.trigger(t), e = !1
                    }
                    e && t.preventDefault()
                }
            },
            _selectFocusedItem: function(t) {
                var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function(t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
                    item: t
                }), t.index !== i && this._trigger("change", e, {
                    item: t
                }), this.close(e)
            },
            _setAria: function(t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }), this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function(t, e) {
                if ("icons" === t) {
                    var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
                }
                this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? T(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
            },
            _toggleAttr: function() {
                this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function() {
                var t = this.options.width;
                return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
            },
            _resizeMenu: function() {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function() {
                var t = this._super();
                return t.disabled = this.element.prop("disabled"), t
            },
            _parseOptions: function(t) {
                var i = this,
                    n = [];
                t.each(function(t, e) {
                    n.push(i._parseOption(T(e), t))
                }), this.items = n
            },
            _parseOption: function(t, e) {
                var i = t.parent("optgroup");
                return {
                    element: t,
                    index: e,
                    value: t.val(),
                    label: t.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || t.prop("disabled")
                }
            },
            _destroy: function() {
                this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
            }
        }]), T.widget("ui.slider", T.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var t, e, i = this.options,
                    n = this.element.find(".ui-slider-handle"),
                    s = [];
                for (e = i.values && i.values.length || 1, n.length > e && (n.slice(e).remove(), n = n.slice(0, e)), t = n.length; t < e; t++) s.push("<span tabindex='0'></span>");
                this.handles = n.add(T(s.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                    T(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
                })
            },
            _createRange: function() {
                var t = this.options;
                t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : T.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = T("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var e, i, n, s, o, r, a, l = this,
                    h = this.options;
                return !h.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), e = {
                    x: t.pageX,
                    y: t.pageY
                }, i = this._normValueFromMouse(e), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                    var e = Math.abs(i - l.values(t));
                    (e < n || n === e && (t === l._lastChangedValue || l.values(t) === h.min)) && (n = e, s = T(this), o = t)
                }), !1 !== this._start(t, o) && (this._mouseSliding = !0, this._handleIndex = o, this._addClass(s, null, "ui-state-active"), s.trigger("focus"), r = s.offset(), a = !T(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = a ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - r.left - s.width() / 2,
                    top: t.pageY - r.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, i), this._animateOff = !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, n, s;
                return 1 < (i = ("horizontal" === this.orientation ? (e = this.elementSize.width, t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))) / e) && (i = 1), i < 0 && (i = 0), "vertical" === this.orientation && (i = 1 - i), n = this._valueMax() - this._valueMin(), s = this._valueMin() + i * n, this._trimAlignValue(s)
            },
            _uiHash: function(t, e, i) {
                var n = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value()
                };
                return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
            },
            _hasMultipleValues: function() {
                return this.options.values && this.options.values.length
            },
            _start: function(t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function(t, e, i) {
                var n, s = this.value(),
                    o = this.values();
                this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && (!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
            },
            _stop: function(t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function(t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(t, e) {
                var i, n, s;
                if (1 < arguments.length) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
                if (!arguments.length) return this._values();
                if (!T.isArray(t)) return this._hasMultipleValues() ? this._values(t) : this.value();
                for (i = this.options.values, n = t, s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(n[s]), this._change(null, s);
                this._refreshValue()
            },
            _setOption: function(t, e) {
                var i, n = 0;
                switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), T.isArray(this.options.values) && (n = this.options.values.length), this._super(t, e), t) {
                    case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(e), this.handles.css("horizontal" === e ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), i = n - 1; 0 <= i; i--) this._change(null, i);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function() {
                var t = this.options.value;
                return this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, n;
                if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
                    return i
                }
                return []
            },
            _trimAlignValue: function(t) {
                if (this._valueMin() >= t) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = 0 < this.options.step ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    n = t - i;
                return 2 * Math.abs(i) >= e && (n += 0 < i ? e : -e), parseFloat(n.toFixed(5))
            },
            _calculateNewMax: function() {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step;
                (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshRange: function(t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function() {
                var e, i, t, n, s, o = this.options.range,
                    r = this.options,
                    a = this,
                    l = !this._animateOff && r.animate,
                    h = {};
                this._hasMultipleValues() ? this.handles.each(function(t) {
                    i = (a.values(t) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, h["horizontal" === a.orientation ? "left" : "bottom"] = i + "%", T(this).stop(1, 1)[l ? "animate" : "css"](h, r.animate), !0 === a.options.range && ("horizontal" === a.orientation ? (0 === t && a.range.stop(1, 1)[l ? "animate" : "css"]({
                        left: i + "%"
                    }, r.animate), 1 === t && a.range[l ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (0 === t && a.range.stop(1, 1)[l ? "animate" : "css"]({
                        bottom: i + "%"
                    }, r.animate), 1 === t && a.range[l ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))), e = i
                }) : (t = this.value(), n = this._valueMin(), s = this._valueMax(), i = s !== n ? (t - n) / (s - n) * 100 : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](h, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    width: i + "%"
                }, r.animate), "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, r.animate), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    height: i + "%"
                }, r.animate), "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, r.animate))
            },
            _handleEvents: {
                keydown: function(t) {
                    var e, i, n, s = T(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case T.ui.keyCode.HOME:
                        case T.ui.keyCode.END:
                        case T.ui.keyCode.PAGE_UP:
                        case T.ui.keyCode.PAGE_DOWN:
                        case T.ui.keyCode.UP:
                        case T.ui.keyCode.RIGHT:
                        case T.ui.keyCode.DOWN:
                        case T.ui.keyCode.LEFT:
                            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(T(t.target), null, "ui-state-active"), !1 === this._start(t, s))) return
                    }
                    switch (n = this.options.step, e = i = this._hasMultipleValues() ? this.values(s) : this.value(), t.keyCode) {
                        case T.ui.keyCode.HOME:
                            i = this._valueMin();
                            break;
                        case T.ui.keyCode.END:
                            i = this._valueMax();
                            break;
                        case T.ui.keyCode.PAGE_UP:
                            i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case T.ui.keyCode.PAGE_DOWN:
                            i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case T.ui.keyCode.UP:
                        case T.ui.keyCode.RIGHT:
                            if (e === this._valueMax()) return;
                            i = this._trimAlignValue(e + n);
                            break;
                        case T.ui.keyCode.DOWN:
                        case T.ui.keyCode.LEFT:
                            if (e === this._valueMin()) return;
                            i = this._trimAlignValue(e - n)
                    }
                    this._slide(t, s, i)
                },
                keyup: function(t) {
                    var e = T(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), this._removeClass(T(t.target), null, "ui-state-active"))
                }
            }
        }), T.widget("ui.sortable", T.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "sort",
            ready: !1,
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
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(t, e, i) {
                return e <= t && t < e + i
            },
            _isFloating: function(t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function() {
                this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                var t = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), T.each(this.items, function() {
                    t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                })
            },
            _destroy: function() {
                this._mouseDestroy();
                for (var t = this.items.length - 1; 0 <= t; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(t, e) {
                var i = null,
                    n = !1,
                    s = this;
                return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), T(t.target).parents().each(function() {
                    return T.data(this, s.widgetName + "-item") === s ? (i = T(this), !1) : void 0
                }), T.data(t.target, s.widgetName + "-item") === s && (i = T(t.target)), !!i && (!(this.options.handle && !e && (T(this.options.handle, i).find("*").addBack().each(function() {
                    this === t.target && (n = !0)
                }), !n)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))))
            },
            _mouseStart: function(t, e, i) {
                var n, s, o = this.options;
                if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, T.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = T("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                    for (n = this.containers.length - 1; 0 <= n; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
                return T.ui.ddmanager && (T.ui.ddmanager.current = this), T.ui.ddmanager && !o.dropBehaviour && T.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                var e, i, n, s, o = this.options,
                    r = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), !1 !== r && T.ui.ddmanager && !o.dropBehaviour && T.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; 0 <= e; e--)
                    if (n = (i = this.items[e]).item[0], (s = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== n && !T.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !T.contains(this.element[0], n))) {
                        if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                        this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                        break
                    } return this._contactContainers(t), T.ui.ddmanager && T.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, e) {
                if (t) {
                    if (T.ui.ddmanager && !this.options.dropBehaviour && T.ui.ddmanager.drop(this, t), this.options.revert) {
                        var i = this,
                            n = this.placeholder.offset(),
                            s = this.options.axis,
                            o = {};
                        s && "x" !== s || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, T(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                            i._clear(t)
                        })
                    } else this._clear(t, e);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp(new T.Event("mouseup", {
                        target: null
                    })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var t = this.containers.length - 1; 0 <= t; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), T.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? T(this.domPosition.prev).after(this.currentItem) : T(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(e) {
                var t = this._getItemsAsjQuery(e && e.connected),
                    i = [];
                return e = e || {}, T(t).each(function() {
                    var t = (T(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]))
                }), !i.length && e.key && i.push(e.key + "="), i.join("&")
            },
            toArray: function(t) {
                var e = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, e.each(function() {
                    i.push(T(t.item || this).attr(t.attribute || "id") || "")
                }), i
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    o = t.left,
                    r = o + t.width,
                    a = t.top,
                    l = a + t.height,
                    h = this.offset.click.top,
                    c = this.offset.click.left,
                    u = "x" === this.options.axis || a < n + h && n + h < l,
                    d = "y" === this.options.axis || o < e + c && e + c < r,
                    p = u && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > s - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(t) {
                var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
                return !!(n && s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
            },
            _intersectsWithSides: function(t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (0 < t ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (0 < t ? "right" : "left")
            },
            refresh: function(t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(t) {
                function e() {
                    r.push(this)
                }
                var i, n, s, o, r = [],
                    a = [],
                    l = this._connectWith();
                if (l && t)
                    for (i = l.length - 1; 0 <= i; i--)
                        for (n = (s = T(l[i], this.document[0])).length - 1; 0 <= n; n--)(o = T.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && a.push([T.isFunction(o.options.items) ? o.options.items.call(o.element) : T(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (a.push([T.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : T(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; 0 <= i; i--) a[i][0].each(e);
                return T(r)
            },
            _removeCurrentsFromItems: function() {
                var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = T.grep(this.items, function(t) {
                    for (var e = 0; i.length > e; e++)
                        if (i[e] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [this];
                var e, i, n, s, o, r, a, l, h = this.items,
                    c = [
                        [T.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : T(this.options.items, this.element), this]
                    ],
                    u = this._connectWith();
                if (u && this.ready)
                    for (e = u.length - 1; 0 <= e; e--)
                        for (i = (n = T(u[e], this.document[0])).length - 1; 0 <= i; i--)(s = T.data(n[i], this.widgetFullName)) && s !== this && !s.options.disabled && (c.push([T.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                            item: this.currentItem
                        }) : T(s.options.items, s.element), s]), this.containers.push(s));
                for (e = c.length - 1; 0 <= e; e--)
                    for (o = c[e][1], i = 0, l = (r = c[e][0]).length; i < l; i++)(a = T(r[i])).data(this.widgetName + "-item", o), h.push({
                        item: a,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(t) {
                var e, i, n, s;
                for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), e = this.items.length - 1; 0 <= e; e--)(i = this.items[e]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? T(this.options.toleranceElement, i.item) : i.item, t || (i.width = n.outerWidth(), i.height = n.outerHeight()), s = n.offset(), i.left = s.left, i.top = s.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (e = this.containers.length - 1; 0 <= e; e--) s = this.containers[e].element.offset(), this.containers[e].containerCache.left = s.left, this.containers[e].containerCache.top = s.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
                return this
            },
            _createPlaceholder: function(i) {
                var n, s = (i = i || this).options;
                s.placeholder && s.placeholder.constructor !== String || (n = s.placeholder, s.placeholder = {
                    element: function() {
                        var t = i.currentItem[0].nodeName.toLowerCase(),
                            e = T("<" + t + ">", i.document[0]);
                        return i._addClass(e, "ui-sortable-placeholder", n || i.currentItem[0].className)._removeClass(e, "ui-sortable-helper"), "tbody" === t ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), T("<tr>", i.document[0]).appendTo(e)) : "tr" === t ? i._createTrPlaceholder(i.currentItem, e) : "img" === t && e.attr("src", i.currentItem.attr("src")), n || e.css("visibility", "hidden"), e
                    },
                    update: function(t, e) {
                        (!n || s.forcePlaceholderSize) && (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), i.placeholder = T(s.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), s.placeholder.update(i, i.placeholder)
            },
            _createTrPlaceholder: function(t, e) {
                var i = this;
                t.children().each(function() {
                    T("<td>&#160;</td>", i.document[0]).attr("colspan", T(this).attr("colspan") || 1).appendTo(e)
                })
            },
            _contactContainers: function(t) {
                var e, i, n, s, o, r, a, l, h, c, u = null,
                    d = null;
                for (e = this.containers.length - 1; 0 <= e; e--)
                    if (!T.contains(this.currentItem[0], this.containers[e].element[0]))
                        if (this._intersectsWith(this.containers[e].containerCache)) {
                            if (u && T.contains(this.containers[e].element[0], u.element[0])) continue;
                            u = this.containers[e], d = e
                        } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", t, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                if (u)
                    if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1);
                    else {
                        for (n = 1e4, s = null, o = (h = u.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = h ? "width" : "height", c = h ? "pageX" : "pageY", i = this.items.length - 1; 0 <= i; i--) T.contains(this.containers[d].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (a = this.items[i].item.offset()[o], l = !1, t[c] - a > this.items[i][r] / 2 && (l = !0), n > Math.abs(t[c] - a) && (n = Math.abs(t[c] - a), s = this.items[i], this.direction = l ? "up" : "down"));
                        if (!s && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[d]) return void(this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[d].element, !0), this._trigger("change", t, this._uiHash()), this.containers[d]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[d], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1
                    }
            },
            _createHelper: function(t) {
                var e = this.options,
                    i = T.isFunction(e.helper) ? T(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
                return i.parents("body").length || T("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!i[0].style.width || e.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || e.forceHelperSize) && i.height(this.currentItem.height()), i
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), T.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && T.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && T.ui.ie) && (t = {
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
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
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
                var t, e, i, n = this.options;
                "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = T(n.containment)[0], e = T(n.containment).offset(), i = "hidden" !== T(t).css("overflow"), this.containment = [e.left + (parseInt(T(t).css("borderLeftWidth"), 10) || 0) + (parseInt(T(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(T(t).css("borderTopWidth"), 10) || 0) + (parseInt(T(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(T(t).css("borderLeftWidth"), 10) || 0) - (parseInt(T(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(T(t).css("borderTopWidth"), 10) || 0) - (parseInt(T(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && T.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(n[0].tagName);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft()) * i
                }
            },
            _generatePosition: function(t) {
                var e, i, n = this.options,
                    s = t.pageX,
                    o = t.pageY,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && T.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    a = /(html|body)/i.test(r[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (e = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - n.grid[1] : e + n.grid[1] : e, i = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0], s = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - n.grid[0] : i + n.grid[0] : i)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : r.scrollTop()),
                    left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : r.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function() {
                    s === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function(t, e) {
                function i(e, i, n) {
                    return function(t) {
                        n._trigger(e, t, i._uiHash(i))
                    }
                }
                this.reverting = !1;
                var n, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && s.push(function(t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                        this._trigger("update", t, this._uiHash())
                    }), this !== this.currentContainer && (e || (s.push(function(t) {
                        this._trigger("remove", t, this._uiHash())
                    }), s.push(function(e) {
                        return function(t) {
                            e._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), s.push(function(e) {
                        return function(t) {
                            e._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), n = this.containers.length - 1; 0 <= n; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (n = 0; s.length > n; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() {
                !1 === T.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
            },
            _uiHash: function(t) {
                var e = t || this;
                return {
                    helper: e.helper,
                    placeholder: e.placeholder || T([]),
                    position: e.position,
                    originalPosition: e.originalPosition,
                    offset: e.positionAbs,
                    item: e.currentItem,
                    sender: t ? t.element : null
                }
            }
        }), T.widget("ui.spinner", {
            version: "1.12.1",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: {
                    "ui-spinner": "ui-corner-all",
                    "ui-spinner-down": "ui-corner-br",
                    "ui-spinner-up": "ui-corner-tr"
                },
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var n = this._super(),
                    s = this.element;
                return T.each(["min", "max", "step"], function(t, e) {
                    var i = s.attr(e);
                    null != i && i.length && (n[e] = i)
                }), n
            },
            _events: {
                keydown: function(t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                },
                mousewheel: function(t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((0 < e ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(t) {
                    function e() {
                        this.element[0] === T.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = i, this._delay(function() {
                            this.previous = i
                        }))
                    }
                    var i;
                    i = this.element[0] === T.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t.preventDefault(), e.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, e.call(this)
                    }), !1 !== this._start(t) && this._repeat(null, T(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(t) {
                    return T(t.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(t) && void this._repeat(null, T(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
            },
            _draw: function() {
                this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                    classes: {
                        "ui-button": ""
                    }
                }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                    icon: this.options.icons.up,
                    showLabel: !1
                }), this.buttons.last().button({
                    icon: this.options.icons.down,
                    showLabel: !1
                }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height())
            },
            _keydown: function(t) {
                var e = this.options,
                    i = T.ui.keyCode;
                switch (t.keyCode) {
                    case i.UP:
                        return this._repeat(null, 1, t), !0;
                    case i.DOWN:
                        return this._repeat(null, -1, t), !0;
                    case i.PAGE_UP:
                        return this._repeat(null, e.page, t), !0;
                    case i.PAGE_DOWN:
                        return this._repeat(null, -e.page, t), !0
                }
                return !1
            },
            _start: function(t) {
                return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0)
            },
            _repeat: function(t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                    this._repeat(40, e, i)
                }, t), this._spin(e * this.options.step, i)
            },
            _spin: function(t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
                    value: i
                }) || (this._value(i), this.counter++)
            },
            _increment: function(t) {
                var e = this.options.incremental;
                return e ? T.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function(t) {
                var e, i, n = this.options;
                return i = t - (e = null !== n.min ? n.min : 0), t = e + (i = Math.round(i / n.step) * n.step), t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t
            },
            _stop: function(t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function(t, e) {
                var i, n, s;
                return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e))
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
            },
            _setOptions: e(function(t) {
                this._super(t)
            }),
            _parse: function(t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function(t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function() {
                var t = this.value();
                return null !== t && t === this._adjustValue(t)
            },
            _value: function(t, e) {
                var i;
                "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
            },
            _destroy: function() {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: e(function(t) {
                this._stepUp(t)
            }),
            _stepUp: function(t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: e(function(t) {
                this._stepDown(t)
            }),
            _stepDown: function(t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: e(function(t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: e(function(t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function(t) {
                return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
            },
            widget: function() {
                return this.uiSpinner
            }
        }), !1 !== T.uiBackCompat && T.widget("ui.spinner", T.ui.spinner, {
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            },
            _uiSpinnerHtml: function() {
                return "<span>"
            },
            _buttonHtml: function() {
                return "<a></a><a></a>"
            }
        }), T.ui.spinner, T.widget("ui.tabs", {
            version: "1.12.1",
            delay: 300,
            options: {
                active: null,
                classes: {
                    "ui-tabs": "ui-corner-all",
                    "ui-tabs-nav": "ui-corner-all",
                    "ui-tabs-panel": "ui-corner-bottom",
                    "ui-tabs-tab": "ui-corner-top"
                },
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: (y = /#.*$/, function(t) {
                var e, i;
                e = t.href.replace(y, ""), i = location.href.replace(y, "");
                try {
                    e = decodeURIComponent(e)
                } catch (t) {}
                try {
                    i = decodeURIComponent(i)
                } catch (t) {}
                return 1 < t.hash.length && e === i
            }),
            _create: function() {
                var e = this,
                    t = this.options;
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t.collapsible), this._processTabs(), t.active = this._initialActive(), T.isArray(t.disabled) && (t.disabled = T.uniqueSort(t.disabled.concat(T.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                    return e.tabs.index(t)
                }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(t.active) : T(), this._refresh(), this.active.length && this.load(t.active)
            },
            _initialActive: function() {
                var i = this.options.active,
                    t = this.options.collapsible,
                    n = location.hash.substring(1);
                return null === i && (n && this.tabs.each(function(t, e) {
                    return T(e).attr("aria-controls") === n ? (i = t, !1) : void 0
                }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = !!this.tabs.length && 0)), !1 !== i && (-1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0)), !t && !1 === i && this.anchors.length && (i = 0), i
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : T()
                }
            },
            _tabKeydown: function(t) {
                var e = T(T.ui.safeActiveElement(this.document[0])).closest("li"),
                    i = this.tabs.index(e),
                    n = !0;
                if (!this._handlePageNav(t)) {
                    switch (t.keyCode) {
                        case T.ui.keyCode.RIGHT:
                        case T.ui.keyCode.DOWN:
                            i++;
                            break;
                        case T.ui.keyCode.UP:
                        case T.ui.keyCode.LEFT:
                            n = !1, i--;
                            break;
                        case T.ui.keyCode.END:
                            i = this.anchors.length - 1;
                            break;
                        case T.ui.keyCode.HOME:
                            i = 0;
                            break;
                        case T.ui.keyCode.SPACE:
                            return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                        case T.ui.keyCode.ENTER:
                            return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
                        default:
                            return
                    }
                    t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, n), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", i)
                    }, this.delay))
                }
            },
            _panelKeydown: function(t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === T.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
            },
            _handlePageNav: function(t) {
                return t.altKey && t.keyCode === T.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === T.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(t, e) {
                for (var i = this.tabs.length - 1; - 1 !== T.inArray((i < t && (t = 0), t < 0 && (t = i), t), this.options.disabled);) t = e ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var t = this.options,
                    e = this.tablist.children(":has(a[href])");
                t.disabled = T.map(e.filter(".ui-state-disabled"), function(t) {
                    return e.index(t)
                }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !T.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = T()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = T()), this._refresh()
            },
            _refresh: function() {
                this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var l = this,
                    t = this.tabs,
                    e = this.anchors,
                    i = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) {
                    T(this).is(".ui-state-disabled") && t.preventDefault()
                }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                    T(this).closest("li").is(".ui-state-disabled") && this.trigger("blur")
                }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                    return T("a", this)[0]
                }).attr({
                    role: "presentation",
                    tabIndex: -1
                }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = T(), this.anchors.each(function(t, e) {
                    var i, n, s, o = T(e).uniqueId().attr("id"),
                        r = T(e).closest("li"),
                        a = r.attr("aria-controls");
                    l._isLocal(e) ? (s = (i = e.hash).substring(1), n = l.element.find(l._sanitizeSelector(i))) : (i = "#" + (s = r.attr("aria-controls") || T({}).uniqueId()[0].id), (n = l.element.find(i)).length || (n = l._createPanel(s)).insertAfter(l.panels[t - 1] || l.tablist), n.attr("aria-live", "polite")), n.length && (l.panels = l.panels.add(n)), a && r.data("ui-tabs-aria-controls", a), r.attr({
                        "aria-controls": s,
                        "aria-labelledby": o
                    }), n.attr("aria-labelledby", o)
                }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol, ul").eq(0)
            },
            _createPanel: function(t) {
                return T("<div>").attr("id", t).data("ui-tabs-destroy", !0)
            },
            _setOptionDisabled: function(t) {
                var e, i, n;
                for (T.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), n = 0; i = this.tabs[n]; n++) e = T(i), !0 === t || -1 !== T.inArray(n, t) ? (e.attr("aria-disabled", "true"), this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"), this._removeClass(e, null, "ui-state-disabled"));
                this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
            },
            _setupEvents: function(t) {
                var i = {};
                t && T.each(t.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function(t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(t) {
                var i, e = this.element.parent();
                "fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var t = T(this),
                        e = t.css("position");
                    "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    i -= T(this).outerHeight(!0)
                }), this.panels.each(function() {
                    T(this).height(Math.max(0, i - T(this).innerHeight() + T(this).height()))
                }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() {
                    i = Math.max(i, T(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(t) {
                var e = this.options,
                    i = this.active,
                    n = T(t.currentTarget).closest("li"),
                    s = n[0] === i[0],
                    o = s && e.collapsible,
                    r = o ? T() : this._getPanelForTab(n),
                    a = i.length ? this._getPanelForTab(i) : T(),
                    l = {
                        oldTab: i,
                        oldPanel: a,
                        newTab: o ? T() : n,
                        newPanel: r
                    };
                t.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || s && !e.collapsible || !1 === this._trigger("beforeActivate", t, l) || (e.active = !o && this.tabs.index(n), this.active = s ? T() : n, this.xhr && this.xhr.abort(), a.length || r.length || T.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), t), this._toggle(t, l))
            },
            _toggle: function(t, e) {
                function i() {
                    s.running = !1, s._trigger("activate", t, e)
                }

                function n() {
                    s._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.length && s.options.show ? s._show(o, s.options.show, i) : (o.show(), i())
                }
                var s = this,
                    o = e.newPanel,
                    r = e.oldPanel;
                this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                    s._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
                }) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), e.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), o.length && r.length ? e.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                    return 0 === T(this).attr("tabIndex")
                }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), e.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(t) {
                var e, i = this._findActive(t);
                i[0] !== this.active[0] && (i.length || (i = this.active), e = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: e,
                    currentTarget: e,
                    preventDefault: T.noop
                }))
            },
            _findActive: function(t) {
                return !1 === t ? T() : this.tabs.eq(t)
            },
            _getIndex: function(t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + T.ui.escapeSelector(t) + "']"))), t
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                    T.data(this, "ui-tabs-destroy") ? T(this).remove() : T(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                }), this.tabs.each(function() {
                    var t = T(this),
                        e = t.data("ui-tabs-aria-controls");
                    e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(i) {
                var t = this.options.disabled;
                !1 !== t && (t = void 0 !== i && (i = this._getIndex(i), T.isArray(t) ? T.map(t, function(t) {
                    return t !== i ? t : null
                }) : T.map(this.tabs, function(t, e) {
                    return e !== i ? e : null
                })), this._setOptionDisabled(t))
            },
            disable: function(t) {
                var e = this.options.disabled;
                if (!0 !== e) {
                    if (void 0 === t) e = !0;
                    else {
                        if (t = this._getIndex(t), -1 !== T.inArray(t, e)) return;
                        e = T.isArray(e) ? T.merge([t], e).sort() : [t]
                    }
                    this._setOptionDisabled(e)
                }
            },
            load: function(t, n) {
                t = this._getIndex(t);
                var s = this,
                    i = this.tabs.eq(t),
                    e = i.find(".ui-tabs-anchor"),
                    o = this._getPanelForTab(i),
                    r = {
                        tab: i,
                        panel: o
                    },
                    a = function(t, e) {
                        "abort" === e && s.panels.stop(!1, !0), s._removeClass(i, "ui-tabs-loading"), o.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                    };
                this._isLocal(e[0]) || (this.xhr = T.ajax(this._ajaxSettings(e, n, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function(t, e, i) {
                    setTimeout(function() {
                        o.html(t), s._trigger("load", n, r), a(i, e)
                    }, 1)
                }).fail(function(t, e) {
                    setTimeout(function() {
                        a(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function(t, i, n) {
                var s = this;
                return {
                    url: t.attr("href").replace(/#.*$/, ""),
                    beforeSend: function(t, e) {
                        return s._trigger("beforeLoad", i, T.extend({
                            jqXHR: t,
                            ajaxSettings: e
                        }, n))
                    }
                }
            },
            _getPanelForTab: function(t) {
                var e = T(t).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + e))
            }
        }), !1 !== T.uiBackCompat && T.widget("ui.tabs", T.ui.tabs, {
            _processTabs: function() {
                this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
            }
        }), T.ui.tabs, T.widget("ui.tooltip", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
                content: function() {
                    var t = T(this).attr("title") || "";
                    return T("<a>").text(t).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(t, e) {
                var i = (t.attr("aria-describedby") || "").split(/\s+/);
                i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", T.trim(i.join(" ")))
            },
            _removeDescribedBy: function(t) {
                var e = t.data("ui-tooltip-id"),
                    i = (t.attr("aria-describedby") || "").split(/\s+/),
                    n = T.inArray(e, i); - 1 !== n && i.splice(n, 1), t.removeData("ui-tooltip-id"), (i = T.trim(i.join(" "))) ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = T("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = T([])
            },
            _setOption: function(t, e) {
                var i = this;
                this._super(t, e), "content" === t && T.each(this.tooltips, function(t, e) {
                    i._updateContent(e.element)
                })
            },
            _setOptionDisabled: function(t) {
                this[t ? "_disable" : "_enable"]()
            },
            _disable: function() {
                var n = this;
                T.each(this.tooltips, function(t, e) {
                    var i = T.Event("blur");
                    i.target = i.currentTarget = e.element[0], n.close(i, !0)
                }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                    var t = T(this);
                    return t.is("[title]") ? t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") : void 0
                }))
            },
            _enable: function() {
                this.disabledTitles.each(function() {
                    var t = T(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                }), this.disabledTitles = T([])
            },
            open: function(t) {
                var i = this,
                    e = T(t ? t.target : this.element).closest(this.options.items);
                e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")), e.data("ui-tooltip-open", !0), t && "mouseover" === t.type && e.parents().each(function() {
                    var t, e = T(this);
                    e.data("ui-tooltip-open") && ((t = T.Event("blur")).target = t.currentTarget = this, i.close(t, !0)), e.attr("title") && (e.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: e.attr("title")
                    }, e.attr("title", ""))
                }), this._registerCloseHandlers(t, e), this._updateContent(e, t))
            },
            _updateContent: function(e, i) {
                var t, n = this.options.content,
                    s = this,
                    o = i ? i.type : null;
                return "string" == typeof n || n.nodeType || n.jquery ? this._open(i, e, n) : void((t = n.call(e[0], function(t) {
                    s._delay(function() {
                        e.data("ui-tooltip-open") && (i && (i.type = o), this._open(i, e, t))
                    })
                })) && this._open(i, e, t))
            },
            _open: function(t, e, i) {
                function n(t) {
                    l.of = t, o.is(":hidden") || o.position(l)
                }
                var s, o, r, a, l = T.extend({}, this.options.position);
                if (i) {
                    if (s = this._find(e)) return void s.tooltip.find(".ui-tooltip-content").html(i);
                    e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")), s = this._tooltip(e), o = s.tooltip, this._addDescribedBy(e, o.attr("id")), o.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), (a = T("<div>").html(o.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), a.removeAttr("id").find("[id]").removeAttr("id"), a.appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                        mousemove: n
                    }), n(t)) : o.position(T.extend({
                        of: e
                    }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                        o.is(":visible") && (n(l.of), clearInterval(r))
                    }, T.fx.interval)), this._trigger("open", t, {
                        tooltip: o
                    })
                }
            },
            _registerCloseHandlers: function(t, i) {
                var e = {
                    keyup: function(t) {
                        if (t.keyCode === T.ui.keyCode.ESCAPE) {
                            var e = T.Event(t);
                            e.currentTarget = i[0], this.close(e, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (e.remove = function() {
                    this._removeTooltip(this._find(i).tooltip)
                }), t && "mouseover" !== t.type || (e.mouseleave = "close"), t && "focusin" !== t.type || (e.focusout = "close"), this._on(!0, i, e)
            },
            close: function(t) {
                var e, i = this,
                    n = T(t ? t.currentTarget : this.element),
                    s = this._find(n);
                return s ? (e = s.tooltip, void(s.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), s.hiding = !0, e.stop(!0), this._hide(e, this.options.hide, function() {
                    i._removeTooltip(T(this))
                }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && T.each(this.parents, function(t, e) {
                    T(e.element).attr("title", e.title), delete i.parents[t]
                }), s.closing = !0, this._trigger("close", t, {
                    tooltip: e
                }), s.hiding || (s.closing = !1)))) : void n.removeData("ui-tooltip-open")
            },
            _tooltip: function(t) {
                var e = T("<div>").attr("role", "tooltip"),
                    i = T("<div>").appendTo(e),
                    n = e.uniqueId().attr("id");
                return this._addClass(i, "ui-tooltip-content"), this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"), e.appendTo(this._appendTo(t)), this.tooltips[n] = {
                    element: t,
                    tooltip: e
                }
            },
            _find: function(t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function(t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _appendTo: function(t) {
                var e = t.closest(".ui-front, dialog");
                return e.length || (e = this.document[0].body), e
            },
            _destroy: function() {
                var s = this;
                T.each(this.tooltips, function(t, e) {
                    var i = T.Event("blur"),
                        n = e.element;
                    i.target = i.currentTarget = n[0], s.close(i, !0), T("#" + t).remove(), n.data("ui-tooltip-title") && (n.attr("title") || n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        }), !1 !== T.uiBackCompat && T.widget("ui.tooltip", T.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var t = this._superApply(arguments);
                return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
            }
        }), T.ui.tooltip
    }), "undefined" == typeof PAYPAL && (window.PAYPAL = {}), $.fn.namespace = function() {
        var t, e, i, n = arguments,
            s = null;
        for (e = 0; e < n.length; ++e)
            for (t = n[e].split("."), s = window, i = 0; i < t.length; ++i) s[t[i]] = s[t[i]] || {}, s = s[t[i]];
        return s
    }, $.fn.namespace("PAYPAL.common", "PAYPAL.core", "PAYPAL.util", "PAYPAL.bp", "PAYPAL.ks", "PAYPAL.tns", "PAYPAL.core.util", "PAYPAL.core.widget", "PAYPAL.widget", "PAYPAL.global"), PAYPAL.global.Highlight = function(t) {
        $(t).effect("highlight", {
            color: "#ffd683"
        }, 2e3)
    }, document.documentElement.className += " jsEnabled", PAYPAL.global.lazyLoadRoot = "", PAYPAL.global.lazyLoad = function(t, e) {
        var i = document.createElement("script");
        i.type = "text/javascript", void 0 !== e && (i.readyState ? i.onreadystatechange = function() {
            "loaded" != i.readyState && "complete" != i.readyState || e()
        } : i.onload = function() {
            e()
        }), i.src = PAYPAL.global.lazyLoadRoot + t, document.getElementsByTagName("head")[0].appendChild(i)
    }, PAYPAL.global.HideShow = function(t, e, i) {
        this.el = t, this.trigger = e, this.value = i, this.init()
    }, PAYPAL.global.HideShow.prototype = {
        init: function() {
            this.el = "string" == typeof this.el ? $("#" + this.el) : this.el, this.trigger = "string" == typeof this.trigger ? $("#" + this.trigger) : this.trigger, (this.isOpen = $(this.el).hasClass("opened")) ? this.show() : this.hide(), this.setTrigger(this.trigger)
        },
        toggle: function() {
            this.isOpen ? this.hide() : this.show()
        },
        hide: function(t) {
            t && (this.el = t), $(this.el).removeClass("opened"), $(this.el).addClass("accessAid"), $(this.trigger).removeClass("opened"), this.isOpen = !1, $(this.el).trigger("hide")
        },
        show: function(t) {
            t && (this.el = t), $(this.el).removeClass("accessAid"), $(this.el).addClass("opened"), $(this.trigger).addClass("opened"), this.isOpen = !0, $(this.el).trigger("show")
        },
        setTrigger: function(t) {
            if (t && t) {
                var e = this,
                    i = t.prop("tagName") && t.prop("tagName").toLowerCase();
                "a" == i ? $(t).bind("click", function(t) {
                    t.preventDefault(), e.toggle()
                }) : "select" == i ? $(t).bind("change", function(t) {
                    e.value && e.value === this.value || !e.value && this.checked ? e.show() : e.hide()
                }) : $(t).bind("click", function(t) {
                    e.value && e.value === this.value || !e.value && this.checked ? e.show() : e.hide()
                })
            }
        },
        toggleOpposite: function(t) {
            var e;
            t = "string" == typeof t ? $("#" + t) : t, this.isOpened || $(t).addClass("opened"), e = t instanceof PAYPAL.global.HideShow ? t : new PAYPAL.global.HideShow(t), $(t).bind("hide", function() {
                e.show(t)
            }), $(t).bind("show", function() {
                e.hide(t)
            })
        }
    }, PAYPAL.global.captureEnter = function(t) {
        if (t.charCode || t.keyCode) {
            var e, i, n = t.charCode || t.keyCode,
                s = t.target || t.srcElement;
            if (13 == n && /INPUT/i.test(s.nodeName) && !/SUBMIT|IMAGE/i.test(s.type))
                for (; s = s.parentNode;) {
                    var o = s.nodeName.toLowerCase();
                    if ("form" == o) return (i = $(".default", s)) && 0 < i.length && (t.preventDefault(), i[0].trigger("click")), !0;
                    "fieldset" == o && (i = $(".default", s), $(i).each(function() {
                        for (e = $(this).parent().get(0); e = e.parentNode;)
                            if ("fieldset" == e.nodeName.toLowerCase()) {
                                if (e == s) return t.preventDefault(), $(this).trigger("click"), !0;
                                break
                            }
                    }))
                }
        }
    }, PAYPAL.global.SafeSubmit = function() {
        $("form.safeSubmit").on("submit", function(t) {
            void 0 === $(this)._submitted ? ($(this)._submitted = !0, $(this).addClass("submitted")) : t.preventDefault()
        })
    }, PAYPAL.global.getMultipleSubmitForms = function() {
        $(".multiplesubmitform").on("keypress", function(t) {
            PAYPAL.global.captureEnter(t)
        })
    }, $(document).ready(function() {
        PAYPAL.global.getMultipleSubmitForms(), PAYPAL.global.SafeSubmit(), $(".hideshow").each(function() {
            var t = $(this).attr("id");
            t = "#" + t;
            var e = $('a[href="' + t + '"]'),
                i = [];
            $(e).each(function() {
                i.push(this)
            });
            for (var n = new PAYPAL.global.HideShow($(this)), s = 0; s < i.length; s++) n.setTrigger(i[s])
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(c) {
        c.extend(c.fn, {
            validate: function(t) {
                if (this.length) {
                    var n = c.data(this[0], "validator");
                    return n || (this.attr("novalidate", "novalidate"), n = new c.validator(t, this[0]), c.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                        n.submitButton = t.currentTarget, c(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== c(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                    }), this.on("submit.validate", function(i) {
                        function t() {
                            var t, e;
                            return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (t = c("<input type='hidden'/>").attr("name", n.submitButton.name).val(c(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (e = n.settings.submitHandler.call(n, n.currentForm, i), t && t.remove(), void 0 !== e && e)
                        }
                        return n.settings.debug && i.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, t()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : t() : (n.focusInvalid(), !1)
                    })), n)
                }
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            },
            valid: function() {
                var t, e, i;
                return c(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, e = c(this[0].form).validate(), this.each(function() {
                    (t = e.element(this) && t) || (i = i.concat(e.errorList))
                }), e.errorList = i), t
            },
            rules: function(t, e) {
                var i, n, s, o, r, a, l = this[0];
                if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
                    if (t) switch (i = c.data(l.form, "validator").settings, n = i.rules, s = c.validator.staticRules(l), t) {
                        case "add":
                            c.extend(s, c.validator.normalizeRule(e)), delete s.messages, n[l.name] = s, e.messages && (i.messages[l.name] = c.extend(i.messages[l.name], e.messages));
                            break;
                        case "remove":
                            return e ? (a = {}, c.each(e.split(/\s/), function(t, e) {
                                a[e] = s[e], delete s[e]
                            }), a) : (delete n[l.name], s)
                    }
                    return (o = c.validator.normalizeRules(c.extend({}, c.validator.classRules(l), c.validator.attributeRules(l), c.validator.dataRules(l), c.validator.staticRules(l)), l)).required && (r = o.required, delete o.required, o = c.extend({
                        required: r
                    }, o)), o.remote && (r = o.remote, delete o.remote, o = c.extend(o, {
                        remote: r
                    })), o
                }
            }
        }), c.extend(c.expr.pseudos || c.expr[":"], {
            blank: function(t) {
                return !c.trim("" + c(t).val())
            },
            filled: function(t) {
                var e = c(t).val();
                return null !== e && !!c.trim("" + e)
            },
            unchecked: function(t) {
                return !c(t).prop("checked")
            }
        }), c.validator = function(t, e) {
            this.settings = c.extend(!0, {}, c.validator.defaults, t), this.currentForm = e, this.init()
        }, c.validator.format = function(i, t) {
            return 1 === arguments.length ? function() {
                var t = c.makeArray(arguments);
                return t.unshift(i), c.validator.format.apply(this, t)
            } : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = c.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), c.each(t, function(t, e) {
                i = i.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return e
                })
            })), i)
        }, c.extend(c.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: c([]),
                errorLabelContainer: c([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(t, e) {
                    9 === e.which && "" === this.elementValue(t) || -1 !== c.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(t, e, i) {
                    "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(i) : c(t).addClass(e).removeClass(i)
                },
                unhighlight: function(t, e, i) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(i) : c(t).removeClass(e).addClass(i)
                }
            },
            setDefaults: function(t) {
                c.extend(c.validator.defaults, t)
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
                equalTo: "Please enter the same value again.",
                maxlength: c.validator.format("Please enter no more than {0} characters."),
                minlength: c.validator.format("Please enter at least {0} characters."),
                rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
                range: c.validator.format("Please enter a value between {0} and {1}."),
                max: c.validator.format("Please enter a value less than or equal to {0}."),
                min: c.validator.format("Please enter a value greater than or equal to {0}."),
                step: c.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function t(t) {
                        !this.form && this.hasAttribute("contenteditable") && (this.form = c(this).closest("form")[0], this.name = c(this).attr("name"));
                        var e = c.data(this.form, "validator"),
                            i = "on" + t.type.replace(/^validate/, ""),
                            n = e.settings;
                        n[i] && !c(this).is(n.ignore) && n[i].call(e, this, t)
                    }
                    this.labelContainer = c(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm), this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var i, n = this.groups = {};
                    c.each(this.settings.groups, function(i, t) {
                        "string" == typeof t && (t = t.split(/\s/)), c.each(t, function(t, e) {
                            n[e] = i
                        })
                    }), i = this.settings.rules, c.each(i, function(t, e) {
                        i[t] = c.validator.normalizeRule(e)
                    }), c(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && c(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), c.extend(this.submitted, this.errorMap), this.invalid = c.extend({}, this.errorMap), this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(t) {
                    var e, i, n = this.clean(t),
                        s = this.validationTargetFor(n),
                        o = this,
                        r = !0;
                    return void 0 === s ? delete this.invalid[n.name] : (this.prepareElement(s), this.currentElements = c(s), (i = this.groups[s.name]) && c.each(this.groups, function(t, e) {
                        e === i && t !== s.name && ((n = o.validationTargetFor(o.clean(o.findByName(t)))) && n.name in o.invalid && (o.currentElements.push(n), r = o.check(n) && r))
                    }), e = !1 !== this.check(s), r = r && e, this.invalid[s.name] = !e, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c(t).attr("aria-invalid", !e)), r
                },
                showErrors: function(e) {
                    if (e) {
                        var i = this;
                        c.extend(this.errorMap, e), this.errorList = c.map(this.errorMap, function(t, e) {
                            return {
                                message: t,
                                element: i.findByName(e)[0]
                            }
                        }), this.successList = c.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    c.fn.resetForm && c(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(t)
                },
                resetElements: function(t) {
                    var e;
                    if (this.settings.unhighlight)
                        for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                    else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e, i = 0;
                    for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
                    return i
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === c.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        i = {};
                    return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var t = this.name || c(this).attr("name");
                        return !t && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = c(this).closest("form")[0], this.name = t), !(t in i || !e.objectLength(c(this).rules()) || (i[t] = !0, 0))
                    })
                },
                clean: function(t) {
                    return c(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return c(this.settings.errorElement + "." + t, this.errorContext)
                },
                resetInternals: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = c([]), this.toHide = c([])
                },
                reset: function() {
                    this.resetInternals(), this.currentElements = c([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(t) {
                    var e, i, n = c(t),
                        s = t.type;
                    return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && void 0 !== t.validity ? t.validity.badInput ? "NaN" : n.val() : (e = t.hasAttribute("contenteditable") ? n.text() : n.val(), "file" === s ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (i = e.lastIndexOf("/")) ? e.substr(i + 1) : 0 <= (i = e.lastIndexOf("\\")) ? e.substr(i + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var t, i, n, s, o = c(e).rules(),
                        r = c.map(o, function(t, e) {
                            return e
                        }).length,
                        a = !1,
                        l = this.elementValue(e);
                    if ("function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s) {
                        if ("string" != typeof(l = s.call(e, l))) throw new TypeError("The normalizer should return a string value.");
                        delete o.normalizer
                    }
                    for (i in o) {
                        n = {
                            method: i,
                            parameters: o[i]
                        };
                        try {
                            if ("dependency-mismatch" === (t = c.validator.methods[i].call(this, l, e, n.parameters)) && 1 === r) {
                                a = !0;
                                continue
                            }
                            if (a = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!t) return this.formatAndAdd(e, n), !1
                        } catch (t) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method."), t
                        }
                    }
                    if (!a) return this.objectLength(o) && this.successList.push(e), !0
                },
                customDataMessage: function(t, e) {
                    return c(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || c(t).data("msg")
                },
                customMessage: function(t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function(t, e) {
                    "string" == typeof e && (e = {
                        method: e
                    });
                    var i = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, c.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                        n = /\$?\{(\d+)\}/g;
                    return "function" == typeof i ? i = i.call(this, e.parameters, t) : n.test(i) && (i = c.validator.format(i.replace(n, "{$1}"), e.parameters)), i
                },
                formatAndAdd: function(t, e) {
                    var i = this.defaultMessage(t, e);
                    this.errorList.push({
                        message: i,
                        element: t,
                        method: e.method
                    }), this.errorMap[t.name] = i, this.submitted[t.name] = i
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e, i;
                    for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return c(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, e) {
                    var i, n, s, o, r = this.errorsFor(t),
                        a = this.idOrName(t),
                        l = c(t).attr("aria-describedby");
                    r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(e)) : (i = r = c("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, c(t)) : i.insertAfter(t), r.is("label") ? r.attr("for", a) : 0 === r.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (s = r.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (l += " " + s) : l = s, c(t).attr("aria-describedby", l), (n = this.groups[t.name]) && (o = this, c.each(o.groups, function(t, e) {
                        e === n && c("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", r.attr("id"))
                    })))), !e && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
                },
                errorsFor: function(t) {
                    var e = this.escapeCssMeta(this.idOrName(t)),
                        i = c(t).attr("aria-describedby"),
                        n = "label[for='" + e + "'], label[for='" + e + "'] *";
                    return i && (n = n + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(n)
                },
                escapeCssMeta: function(t) {
                    return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(t) {
                    return this.checkable(t) && (t = this.findByName(t.name)), c(t).not(this.settings.ignore)[0]
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(t) {
                    return c(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
                },
                getLength: function(t, e) {
                    switch (e.nodeName.toLowerCase()) {
                        case "select":
                            return c("option:selected", e).length;
                        case "input":
                            if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    boolean: function(t) {
                        return t
                    },
                    string: function(t, e) {
                        return !!c(t, e.form).length
                    },
                    function: function(t, e) {
                        return t(e)
                    }
                },
                optional: function(t) {
                    var e = this.elementValue(t);
                    return !c.validator.methods.required.call(this, e, t) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, c(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
                },
                stopRequest: function(t, e) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], c(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (c(this.currentForm).submit(), this.submitButton && c("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (c(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t, e) {
                    return e = "string" == typeof e && e || "remote", c.data(t, "previousValue") || c.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, {
                            method: e
                        })
                    })
                },
                destroy: function() {
                    this.resetForm(), c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
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
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, e) {
                t.constructor === String ? this.classRuleSettings[t] = e : c.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var e = {},
                    i = c(t).attr("class");
                return i && c.each(i.split(" "), function() {
                    this in c.validator.classRuleSettings && c.extend(e, c.validator.classRuleSettings[this])
                }), e
            },
            normalizeAttributeRule: function(t, e, i, n) {
                /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
            },
            attributeRules: function(t) {
                var e, i, n = {},
                    s = c(t),
                    o = t.getAttribute("type");
                for (e in c.validator.methods) i = "required" === e ? ("" === (i = t.getAttribute(e)) && (i = !0), !!i) : s.attr(e), this.normalizeAttributeRule(n, o, e, i);
                return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
            },
            dataRules: function(t) {
                var e, i, n = {},
                    s = c(t),
                    o = t.getAttribute("type");
                for (e in c.validator.methods) i = s.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()), this.normalizeAttributeRule(n, o, e, i);
                return n
            },
            staticRules: function(t) {
                var e = {},
                    i = c.data(t.form, "validator");
                return i.settings.rules && (e = c.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
            },
            normalizeRules: function(n, s) {
                return c.each(n, function(t, e) {
                    if (!1 !== e) {
                        if (e.param || e.depends) {
                            var i = !0;
                            switch (typeof e.depends) {
                                case "string":
                                    i = !!c(e.depends, s.form).length;
                                    break;
                                case "function":
                                    i = e.depends.call(s, s)
                            }
                            i ? n[t] = void 0 === e.param || e.param : (c.data(s.form, "validator").resetElements(c(s)), delete n[t])
                        }
                    } else delete n[t]
                }), c.each(n, function(t, e) {
                    n[t] = c.isFunction(e) && "normalizer" !== t ? e(s) : e
                }), c.each(["minlength", "maxlength"], function() {
                    n[this] && (n[this] = Number(n[this]))
                }), c.each(["rangelength", "range"], function() {
                    var t;
                    n[this] && (c.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (t = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/), n[this] = [Number(t[0]), Number(t[1])]))
                }), c.validator.autoCreateRanges && (null != n.min && null != n.max && (n.range = [n.min, n.max], delete n.min, delete n.max), null != n.minlength && null != n.maxlength && (n.rangelength = [n.minlength, n.maxlength], delete n.minlength, delete n.maxlength)), n
            },
            normalizeRule: function(t) {
                if ("string" == typeof t) {
                    var e = {};
                    c.each(t.split(/\s/), function() {
                        e[this] = !0
                    }), t = e
                }
                return t
            },
            addMethod: function(t, e, i) {
                c.validator.methods[t] = e, c.validator.messages[t] = void 0 !== i ? i : c.validator.messages[t], e.length < 3 && c.validator.addClassRules(t, c.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, e, i) {
                    if (!this.depend(i, e)) return "dependency-mismatch";
                    if ("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < t.length;
                    var n = c(e).val();
                    return n && 0 < n.length
                },
                email: function(t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                minlength: function(t, e, i) {
                    var n = c.isArray(t) ? t.length : this.getLength(t, e);
                    return this.optional(e) || i <= n
                },
                maxlength: function(t, e, i) {
                    var n = c.isArray(t) ? t.length : this.getLength(t, e);
                    return this.optional(e) || n <= i
                },
                rangelength: function(t, e, i) {
                    var n = c.isArray(t) ? t.length : this.getLength(t, e);
                    return this.optional(e) || n >= i[0] && n <= i[1]
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
                step: function(t, e, i) {
                    var n, s = c(e).attr("type"),
                        o = "Step attribute on input type " + s + " is not supported.",
                        r = new RegExp("\\b" + s + "\\b"),
                        a = function(t) {
                            var e = ("" + t).match(/(?:\.(\d+))?$/);
                            return e && e[1] ? e[1].length : 0
                        },
                        l = function(t) {
                            return Math.round(t * Math.pow(10, n))
                        },
                        h = !0;
                    if (s && !r.test(["text", "number", "range"].join())) throw new Error(o);
                    return n = a(i), (a(t) > n || l(t) % l(i) != 0) && (h = !1), this.optional(e) || h
                },
                equalTo: function(t, e, i) {
                    var n = c(i);
                    return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        c(e).valid()
                    }), t === n.val()
                },
                remote: function(o, r, t, a) {
                    if (this.optional(r)) return "dependency-mismatch";
                    a = "string" == typeof a && a || "remote";
                    var l, e, i, h = this.previousValue(r, a);
                    return this.settings.messages[r.name] || (this.settings.messages[r.name] = {}), h.originalMessage = h.originalMessage || this.settings.messages[r.name][a], this.settings.messages[r.name][a] = h.message, t = "string" == typeof t && {
                        url: t
                    } || t, i = c.param(c.extend({
                        data: o
                    }, t.data)), h.old === i ? h.valid : (h.old = i, (l = this).startRequest(r), (e = {})[r.name] = o, c.ajax(c.extend(!0, {
                        mode: "abort",
                        port: "validate" + r.name,
                        dataType: "json",
                        data: e,
                        context: l.currentForm,
                        success: function(t) {
                            var e, i, n, s = !0 === t || "true" === t;
                            l.settings.messages[r.name][a] = h.originalMessage, s ? (n = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(r), l.formSubmitted = n, l.successList.push(r), l.invalid[r.name] = !1, l.showErrors()) : (e = {}, i = t || l.defaultMessage(r, {
                                method: a,
                                parameters: o
                            }), e[r.name] = h.message = i, l.invalid[r.name] = !0, l.showErrors(e)), h.valid = s, l.stopRequest(r, s)
                        }
                    }, t)), "pending")
                }
            }
        });
        var n, s = {};
        return c.ajaxPrefilter ? c.ajaxPrefilter(function(t, e, i) {
            var n = t.port;
            "abort" === t.mode && (s[n] && s[n].abort(), s[n] = i)
        }) : (n = c.ajax, c.ajax = function(t) {
            var e = ("mode" in t ? t : c.ajaxSettings).mode,
                i = ("port" in t ? t : c.ajaxSettings).port;
            return "abort" === e ? (s[i] && s[i].abort(), s[i] = n.apply(this, arguments), s[i]) : n.apply(this, arguments)
        }), c
    }), jQuery.extend(jQuery.validator.messages, {
        required: PP_GLOBAL_JS_STRINGS.MESSAGE_REQUIRED,
        remote: PP_GLOBAL_JS_STRINGS.MESSAGE_REMOTE,
        email: PP_GLOBAL_JS_STRINGS.MESSAGE_EMAIL,
        url: PP_GLOBAL_JS_STRINGS.MESSAGE_URL,
        date: PP_GLOBAL_JS_STRINGS.MESSAGE_DATE,
        dateISO: PP_GLOBAL_JS_STRINGS.MESSAGE_DATEISO,
        number: PP_GLOBAL_JS_STRINGS.MESSAGE_NUMBER,
        digits: PP_GLOBAL_JS_STRINGS.MESSAGE_DIGITS,
        creditcard: PP_GLOBAL_JS_STRINGS.MESSAGE_CREDITCARD,
        equalTo: PP_GLOBAL_JS_STRINGS.MESSAGE_EQUALTO,
        accept: PP_GLOBAL_JS_STRINGS.MESSAGE_ACCEPT,
        maxlength: jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_MAXLENGTH),
        minlength: jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_MINLENGTH),
        rangelength: jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_RANGELENGTH),
        range: jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_RANGE),
        max: jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_MAX),
        min: jQuery.validator.format(PP_GLOBAL_JS_STRINGS.MESSAGE_MIN)
    }), $.fn.namespace("PAYPAL.Marketing"),
    function() {
        "use strict";
        PAYPAL.Marketing.MovingBackground = function(t) {
            this._$container = $(t), this._video = $("video"), this._videoBg = $(".novideo-bg"), 0 != this._videoBg.length && (this._cssBg = this._videoBg.css("background-image").replace(/^url|[\(\"\)]/g, ""), "none" != this._cssBg && (this._videoPoster = this._video.attr("poster", this._cssBg))), "undefined" === Modernizr || !1 === Modernizr.video || "" === Modernizr.video.h264 && "" === Modernizr.video.webm || "dedicated" !== $(document.documentElement).data("device-type") ? this._videoBg.addClass("show") : (this._forcePause = !1, this._userPause = !1, this._$playButton = $("<a>" + PP_GLOBAL_JS_STRINGS.CLICK_TO_PLAY + "</a>"), this._$playButton.addClass("mb-button play"), this._$playButton.attr("href", "#" + PP_GLOBAL_JS_STRINGS.PLAY), this._$playButton.attr("role", "button"), this._$pauseButton = $("<a>" + PP_GLOBAL_JS_STRINGS.PAUSE + "</a>"), this._$pauseButton.addClass("mb-button pause"), this._$pauseButton.attr("href", "#" + PP_GLOBAL_JS_STRINGS.PAUSE), this._$pauseButton.attr("role", "button"), this._attachEvents(), this._$container.append(this._$playButton), this._$container.append(this._$pauseButton), this._checkState(), PAYPAL.Marketing.MovingBackground._videos.push(this))
        }, PAYPAL.Marketing.MovingBackground.prototype = {
            _events: null,
            destroy: function() {
                this._detachEvents();
                var t = PAYPAL.Marketing.MovingBackground._videos.indexOf(this);
                0 <= t && PAYPAL.Marketing.MovingBackground._videos.splice(t, 1)
            },
            _eventsAttached: function() {
                return null !== this._events
            },
            _removeBG: function() {
                this._$container.addClass("video-loaded")
            },
            _attachEvents: function() {
                this._eventsAttached() || (this._events = [], this._delayedCommands = {}, this._events.push(this._video.on("canplay", $.proxy(this._resizeVideo, this))), this._events.push(this._video.on("canplay", $.proxy(this._removeBG, this))), this._events.push(this._video.on("play pause", $.proxy(this._checkPlayState, this))), this._events.push(this._$playButton.on("click", $.proxy(this.play, this))), this._events.push(this._$pauseButton.on("click", $.proxy(this.pause, this))), this._events.push($(window).on("scroll resize", $.proxy(function() {
                    this._delayedCommands.scroll && (window.clearTimeout(this._delayedCommands.scroll), this._delayedCommands.scroll = null), this._delayedCommands.scroll = window.setTimeout($.proxy(function() {
                        this._checkState(), this._delayedCommands.scroll = null
                    }, this), 50)
                }, this))), this._events.push($(window).on("resize", $.proxy(this._resizeVideo, this))), $(window).on("heroheightadjust", function() {
                    $(window).trigger("resize")
                }))
            },
            _detachEvents: function() {
                $.isArray(this._events) && ($.each(this._events, function(t, e) {
                    e.off()
                }), this._events = null)
            },
            _checkPlayState: function() {
                !1 === this._video.prop("paused") ? this._$container.addClass("playing") : this._$container.removeClass("playing")
            },
            _checkState: function() {
                var t, e = $(window).scrollTop(),
                    i = $(window).height(),
                    n = this._$container.offset(),
                    s = this._$container.outerHeight(),
                    o = this._video.get(0),
                    r = 0 < arguments.length && !0 === arguments[0];
                t = void 0 === n ? 0 : n.top, (e !== this._lastScroll || r) && (t <= e + i && e <= t + s ? !0 !== this._video.prop("paused") || this._forcePause || this._userPause || !0 === this._video.prop("ended") && !r || o.play() : !1 === this._video.prop("paused") && o.pause(), this._lastScroll = e)
            },
            _resizeVideo: function() {
                var t = this._$container.width(),
                    e = this._$container.height(),
                    i = this._video.width(),
                    n = this._video.height();
                i < t || e - n < t - i ? (this._video.css("width", t + "px"), this._video.css("height", "auto")) : (n < e || t - i < e - n) && (this._video.css("height", e + "px"), this._video.css("width", "auto")), this._video.css("visibility", "visible")
            },
            blockPlay: function() {
                var t = this._video.get(0);
                !(this._forcePause = !0) === this._video.prop("paused") && t.pause()
            },
            unblockPlay: function() {
                this._forcePause = !1, this._checkState(!0)
            },
            pause: function(t) {
                var e = this._video.get(0);
                t.preventDefault(), !(this._userPause = !0) === this._video.prop("paused") && (e.pause(), window.setTimeout($.proxy(function() {
                    this._$playButton.focus()
                }, this), 10)), this._checkPlayState(), this._trackButton("pause")
            },
            play: function(t) {
                t.preventDefault(), this._userPause = !1, this._checkState(!0), window.setTimeout($.proxy(function() {
                    this._$pauseButton.focus()
                }, this), 10), this._checkPlayState(), this._trackButton("play")
            },
            _trackButton: function(t) {
                try {
                    fpti.link = t, PAYPAL.analytics.instance.recordClick(), fpti.link = ""
                } catch (t) {}
            }
        }, PAYPAL.Marketing.MovingBackground._videos = [], PAYPAL.Marketing.MovingBackground.BlockAll = function() {
            for (var t = 0; t < PAYPAL.Marketing.MovingBackground._videos.length; t++) PAYPAL.Marketing.MovingBackground._videos[t].blockPlay()
        }, PAYPAL.Marketing.MovingBackground.UnblockAll = function() {
            for (var t = 0; t < PAYPAL.Marketing.MovingBackground._videos.length; t++) PAYPAL.Marketing.MovingBackground._videos[t].unblockPlay()
        }
    }(), $.fn.namespace("PAYPAL.Marketing"),
    function() {
        "use strict";
        PAYPAL.Marketing.ScrollButton = function(t) {
            this._$anchor = $(t);
            var e = this._$anchor.attr("href"),
                i = $(e);
            if (void 0 !== e) {
                if ("#" !== e.substring(0, 1)) return;
                if (this._ancId = e, this._ancEl = i, 0 === this._ancEl.length) return;
                this._attachEvents()
            }
        }, PAYPAL.Marketing.ScrollButton.prototype = {
            _events: null,
            destroy: function() {
                this._detachEvents()
            },
            _eventsAttached: function() {
                return null !== this._events
            },
            _attachEvents: function() {
                this._eventsAttached() || (this._events = [], this._events.push(this._$anchor.on("click", $.proxy(this._scrollToAnchor, this))))
            },
            _detachEvents: function() {
                $.isArray(this._events) && ($.each(this._events, function(t) {
                    t.off()
                }), this._events = null)
            },
            _scrollToAnchor: function(t) {
                var e = this._ancId,
                    i = this._ancEl.offset().top;
                t.preventDefault(), $("html, body").stop().animate({
                    scrollTop: i
                }, 600, "swing", function() {
                    window.location.hash = e
                }), this._trackButton(this._$anchor.attr("id"))
            },
            _trackButton: function(t) {
                try {
                    fpti.link = t, PAYPAL.analytics.instance.recordClick(), fpti.link = ""
                } catch (t) {}
            }
        }
    }(), $.fn.namespace("PAYPAL.Marketing"),
    function() {
        "use strict";
        var n = "transition" === Modernizr.prefixed("transition") ? "transitionend" : "webkitTransitionEnd";
        PAYPAL.Marketing.Modal = function(t, e) {
            if (this._$dialog = null, this._$modal = null, this._$closer = null, this._$isOpen = !1, "mobile" === $(document.documentElement).data("device-type")) {
                if (this._$modal = $(t), this._$modal.attr("aria-role", "dialog"), this._$modal.removeClass("mpp-modal"), this._$modal.remove(), $(document.body).append(this._$modal), this._$modal.addClass("mobile-modal"), 0 === this._$modal.children(".titlebar").length) {
                    var i = $("<div></div>");
                    i.addClass("titlebar");
                    var n = this._$modal.attr("title");
                    n && i.text(n), this._$closer = $("<a></a>"), this._$closer.addClass("closer"), this._$closer.attr("role", "button"), this._$closer.attr("href", "#" + PP_GLOBAL_JS_STRINGS.CLOSE), this._$closer.text(PP_GLOBAL_JS_STRINGS.CLOSE), i.append(this._$closer), this._$modal.prepend(i)
                }
            } else {
                var s = {
                    modal: !0,
                    autoOpen: !1,
                    draggable: !1,
                    resizable: !1,
                    closeOnEscape: !0,
                    dialogClass: "start"
                };
                $.extend(s, e), this._closeOnEscape = s.closeOnEscape, this._$dialog = $(t).dialog(s), $(t).attr("aria-label") && this._$dialog.closest(".ui-dialog").attr("aria-label", $(t).attr("aria-label")).removeAttr("aria-labelledby"), $(t).removeClass("mpp-modal")
            }
            this._attachEvents()
        }, PAYPAL.Marketing.Modal.prototype = {
            _events: null,
            destroy: function() {
                this._detachEvents()
            },
            _eventsAttached: function() {
                return null !== this._events
            },
            _attachEvents: function() {
                this._eventsAttached() || (this._events = [], this._$dialog ? (this._events.push(this._$dialog.on("dialogopen", $.proxy(this._dialogOpen, this))), this._events.push(this._$dialog.on("dialogclose", $.proxy(this._dialogClose, this))), this._events.push(this._$dialog.on("dialogbeforeclose", $.proxy(this._fadeOutDialog, this))), this._events.push($(window).on("resize", $.proxy(this._reposition, this))), this._closeOnEscape && this._events.push($(window).on("click", $.proxy(this._catchOverlay, this)))) : this._events.push(this._$modal.on("click", "a.closer", $.proxy(this.hide, this))))
            },
            _detachEvents: function() {
                $.isArray(this._events) && ($.each(this._events, function(t, e) {
                    e.off()
                }), this._events = null)
            },
            _reposition: function(t) {
                this._$dialog.dialog("option", "position", {
                    my: "center",
                    at: "center",
                    of: window
                })
            },
            _dialogOpen: function(t) {
                this._$dialog.closest(".ui-dialog").removeClass("start");
                var e = this._$dialog,
                    i = function() {
                        $(window).trigger("MODAL_OPEN", e)
                    };
                Modernizr.csstransitions ? this._$dialog.one(n, $.proxy(i, this)) : window.setTimeout($.proxy(i, this), 0), $("#body").addClass("modal-on"), PAYPAL.Marketing.MovingBackground.BlockAll()
            },
            _fadeOutDialog: function(t) {
                var e = this._$dialog.closest(".ui-dialog");
                return !!e.hasClass("start") || (Modernizr.csstransitions ? e.one(n, $.proxy(this._reallyCloseDialog, this)) : window.setTimeout($.proxy(this._reallyCloseDialog, this), 0), $("#body").removeClass("modal-on"), e.addClass("start"), !1)
            },
            _reallyCloseDialog: function() {
                this._$dialog.dialog("close"), this._unloadIframe()
            },
            _dialogClose: function(t) {
                PAYPAL.Marketing.MovingBackground.UnblockAll(), $(window).trigger("MODAL_CLOSED", this._$dialog)
            },
            _catchOverlay: function(t) {
                this._$dialog.dialog("isOpen") && ($(t.target).hasClass("ui-widget-overlay") && (t.preventDefault(), this.hide()))
            },
            _unloadIframe: function() {
                var t = this._$dialog ? this._$dialog.find("iframe") : this._$modal.find("iframe");
                try {
                    t.attr("src", "")
                } catch (t) {}
            },
            show: function() {
                var t;
                if (this._$dialog) {
                    if (this._$dialog.dialog("isOpen")) return;
                    this._$dialog.dialog("open"), (t = this._$dialog.find("iframe")).attr("tabindex", 0), t.onload = function() {
                        t.contents().find("input[type=text]")[0].focus()
                    }, $(window).trigger("MODAL_OPEN", this._$dialog), this._$dialog.scrollTop(0), this._$isOpen = !0
                } else this._$modal.addClass("on"), window.setTimeout($.proxy(function() {
                    var t = this._$modal,
                        e = function() {
                            $(window).trigger("MODAL_OPEN", t)
                        };
                    Modernizr.csstransitions ? this._$modal.one(n, $.proxy(e, this)) : window.setTimeout($.proxy(e, this), 0), this._$modal.addClass("inplace")
                }, this), 0), t = this._$modal.find("iframe"), PAYPAL.Marketing.MovingBackground.BlockAll(), $(window).trigger("MODAL_OPEN", this._$modal), this._$isOpen = !0;
                try {
                    t.attr("src", t.data("src"))
                } catch (t) {}
            },
            hide: function() {
                this._$dialog ? this._$dialog.dialog("isOpen") && this._$dialog.dialog("close") : (Modernizr.csstransitions ? this._$modal.one(n, $.proxy(function(t) {
                    this._$modal.removeClass("on")
                }, this)) : this._$modal.removeClass("on"), this._$modal.removeClass("inplace"), PAYPAL.Marketing.MovingBackground.UnblockAll(), $(window).trigger("MODAL_CLOSED", this._$modal)), this._unloadIframe(), this._$isOpen = !1
            }
        }
    }(),
    function() {
        "use strict";
        var e, t = window.ActiveXObject || "ActiveXObject" in window,
            i = $("#fixed-top"),
            n = i.find(".novideo-bg"),
            s = function() {
                var t = $(window).height();
                0 < n.length && n.css("height", Math.round(1 * t) + "px"), i.css("height", t + "px")
            };
        0 !== i.length && !1 !== t && ($(window).on("resize", function(t) {
            e && (window.clearTimeout(e), e = null), e = window.setTimeout(function() {
                s(), e = null
            }, 10)
        }), s())
    }(), $.fn.namespace("PAYPAL.Marketing"),
    function() {
        var o = $("html").attr("lang"),
            r = $("html").attr("data-device-type");
        PAYPAL.Marketing.FloatingBar = function(t, e) {
            this._opts = $.extend({
                offset: -80,
                trackScroll: !1
            }, e), this._isScrollTrackingEnabled = this._opts.trackScroll, this._$window = $(window), this._$bar = $(t), this._barId = this._$bar.attr("id"), this._lastHighlightedId = null, this._stickyNavHeight = this._$bar.outerHeight() + 15, this._opts.offset = -1 * this._$bar.outerHeight(), this._$navLinks = this._$bar.find(".sticky-nav-links"), this._$linksSection = this._$bar.find(".links-section"), this._$linksContainer = this._$linksSection.find(".links-container"), this._$mobileControl = this._$bar.find("#mobile-control"), this._$scrollElements = this._$navLinks.map(function(t, e) {
                var i = this._getNamedAnchor($(e)),
                    n = $(i);
                if (n.length) return n
            }.bind(this)), this._timerTriggerID, this._timerHanlderID, this._userClicked = !1, this._$bar.hasClass("floating-bar") || this._$bar.addClass("floating-bar"), this._originalTopOffset = this._$bar.offset().top, this._originalLeftOffset = this._$bar.offset().left, this._$spacer = $('<div class="floating-bar-spacer" data-for="' + this._barId + '"></div>'), this._$bar.after(this._$spacer), this._attachEvents(), this._checkState();
            var n = this;
            $(window).on("stickyLinkHighlighted", function(t, e) {
                if (n._isScrollTrackingEnabled = -1 < e.lang.indexOf("US") || n._isScrollTrackingEnabled, "undefined" != typeof ga && null !== ga && this._isScrollTrackingEnabled) {
                    var i = e;
                    this._delayEvent(function() {
                        ga("send", "event", i.target.data("gaCategory"), i.type, i.target.data("gaOpt_label"))
                    }, 500, "_timerHandlerID")
                }
            }.bind(this)), this._highlightOnScroll("scroll")
        }, PAYPAL.Marketing.FloatingBar.prototype = {
            _events: null,
            destroy: function() {
                this._detachEvents()
            },
            _eventsAttached: function() {
                return null !== this._events
            },
            _attachEvents: function() {
                var s = this;
                this._eventsAttached() || (this._events = [], this._delayedCommands = {}, this._haveNamedAnchors() && this._events.push(this._$navLinks.on("click", function(t) {
                    var e = $(this),
                        i = $(t.target),
                        n = i.attr("data-target") || s._getNamedAnchor(i);
                    0 !== n.indexOf("#") || e.hasClass("no-scroll") || (s._$navLinks.removeClass("current"), $(t.currentTarget).addClass("current"), s._triggerHighlight($(t.currentTarget), "click", o), s._scrollTo(n, {
                        before: function() {
                            s._userClicked = !0
                        },
                        offset: s._opts.offset,
                        after: function() {
                            s._userClicked = !1
                        }
                    }))
                })), this._events.push(this._$window.on("scroll", this._onScroll.bind(this))), this._events.push(this._$window.on("resize", this._recalcOffset.bind(this))), Modernizr.touch && this._events.push(this._$window.on("touchmove touchend", this._checkState.bind(this))), this._$mobileControl.length && this._events.push(this._$mobileControl.on("click", this._mobileControlHandler.bind(this))))
            },
            _detachEvents: function() {
                $.isArray(this._events) && ($.each(this._events, function(t, e) {
                    e.off()
                }), this._events = null)
            },
            _haveNamedAnchors: function() {
                return 0 < this._$scrollElements.length
            },
            _onScroll: function(t) {
                this._delayedCommands.scroll && (window.clearTimeout(this._delayedCommands.scroll), this._delayedCommands.scroll = null), this._delayedCommands.scroll = window.setTimeout(function() {
                    this._checkState(), this._userClicked || this._highlightOnScroll("scroll"), this._delayedCommands.scroll = null
                }.bind(this), 10)
            },
            _recalcOffset: function() {
                this._delayedCommands.resize && (window.clearTimeout(this._delayedCommands.resize), this._delayedCommands.resize = null), this._delayedCommands.resize = window.setTimeout(function() {
                    this._$bar.hasClass("on") || (this._originalTopOffset = this._$bar.offset().top, this._originalLeftOffset = this._$bar.offset().left, this._checkState(), this._delayedCommands.resize = null)
                }.bind(this), 10), this._resetStickyNav()
            },
            _checkState: function() {
                var t = $(window).scrollTop();
                t !== this._lastScroll && (t >= this._originalTopOffset ? this._$bar.is(":visible") && (this._$spacer = $('.floating-bar-spacer[data-for="' + this._barId + '"]'), window.setTimeout(this._stick.bind(this), 10)) : window.setTimeout(this._unstick.bind(this), 10), this._lastScroll = t)
            },
            _stick: function() {
                this._$spacer.css("height", this._$bar.outerHeight() + "px"), this._$spacer.addClass("on"), this._$bar.addClass("on"), this._$bar.addClass("on").css({
                    left: this._originalLeftOffset
                })
            },
            _unstick: function() {
                this._$spacer.removeClass("on"), this._$bar.removeClass("on")
            },
            _delayEvent: function(t, e, i) {
                clearTimeout(this[i]), this[i] = setTimeout(function() {
                    t()
                }, e, this[i])
            },
            _triggerHighlight: function(t, e, i) {
                $(window).trigger("stickyLinkHighlighted", {
                    target: t,
                    type: e,
                    lang: i
                })
            },
            _highlightOnScroll: function() {
                var t, e, i, n, s;
                t = this._$window.scrollTop() + this._stickyNavHeight, (e = this._$scrollElements.map(function() {
                    if ($(this).offset().top < t) return this
                })).sort(function(t, e) {
                    return $(t).offset().top - $(e).offset().top
                }), (n = (i = e[e.length - 1]) && i.length ? i[0].id : "") && this._lastHighlightedId !== n && !$("#" + n).hasClass("no-scroll") && (this._lastHighlightedId = n, this._$navLinks.removeClass("current"), this._$navLinks.blur(), s = this._$navLinks.filter('[href$="#' + n + '"]').addClass("current"), this._delayEvent(function() {
                    this._triggerHighlight(s, "scroll", o)
                }.bind(this), 500, "_timerTriggerID"))
            },
            _scrollTo: function(t, e) {
                var i = $.extend({
                        origin: "html,body",
                        offset: 0,
                        before: null,
                        after: null,
                        speed: "slow"
                    }, e),
                    n = $(t).offset(),
                    s = n ? n.top : 0,
                    o = 0;
                "dedicated" !== r && !this._$bar.hasClass("on") && this._$mobileControl.length && this._$window.width() < 769 && (o = this._$linksContainer.height()), this._mobileStickyLogic(), i.before && "function" == typeof i.before && i.before(), $(i.origin).animate({
                    scrollTop: s + i.offset - o
                }, i.speed).promise().done(function() {
                    i.after && "function" == typeof i.after && setTimeout(i.after, 100)
                })
            },
            _getNamedAnchor: function(t) {
                var e = t.attr("href");
                return e ? e.substr(e.lastIndexOf("#")) : ""
            },
            _mobileControlHandler: function(t) {
                t.preventDefault(), this._mobileStickyLogic()
            },
            _resetStickyNav: function() {
                768 < this._$window.width() ? this._$linksSection.css({
                    height: "auto"
                }) : (this._$mobileControl.removeClass("on"), this._$linksSection.css({
                    height: 0
                }))
            },
            _mobileStickyLogic: function() {
                var t = 0;
                this._$mobileControl.is(":visible") && (t = this._$mobileControl.hasClass("on") ? t : this._$linksContainer.height(), this._$linksSection.css({
                    height: t
                }), this._$mobileControl.toggleClass("on"))
            }
        }
    }(), $.fn.namespace("PAYPAL.Marketing"),
    function() {
        "use strict";
        PAYPAL.Marketing.Carousel = function(t, e) {
            if ("mobile" === $(document.documentElement).data("device-type")) {
                this._direction = e, this._$container = $(t), this._$slider = this._$container.children().first(), this._numItems = this._$slider.children().length, this._$container.addClass("carousel"), this._touchStartX = this._lastTouchX = null, this._lastDirection = 0, this._currentItem = 0, this._currentOffset = 0, this._tempOffset = 0, this._$pageIndicator = $("<div></div>"), this._$pageIndicator.addClass("carousel-indicator");
                for (var i = 0; i < this._numItems; i++) {
                    var n = $("<span>" + i + "</span>");
                    0 === i && n.addClass("selected"), this._$pageIndicator.append(n)
                }
                this._$container.append(this._$pageIndicator), this._attachEvents()
            }
        }, PAYPAL.Marketing.Carousel.prototype = {
            _events: null,
            destroy: function() {
                this._detachEvents()
            },
            _eventsAttached: function() {
                return null !== this._events
            },
            _attachEvents: function() {
                this._eventsAttached() || (this._events = [], this._delayedCommands = {}, this._events.push(this._$container.on("touchstart", $.proxy(this._touchStart, this))), this._events.push(this._$container.on("touchmove", $.proxy(this._touchMove, this))), this._events.push(this._$container.on("touchend touchcancel", $.proxy(this._touchEnd, this))), this._events.push($(window).on("orientationchange", $.proxy(this._reset, this))))
            },
            _detachEvents: function() {
                $.isArray(this._events) && ($.each(this._events, function(t, e) {
                    e.off()
                }), this._events = null)
            },
            _touchStart: function(t) {
                var e = this._$slider.children().last();
                this._touchStartX = this._lastTouchX = t.originalEvent.touches[0].pageX, this._lastDelta = 0, this._itemWidth = e.width() + parseInt(e.css("padding-left")) + parseInt(e.css("padding-right")) + parseInt(e.css("border-left-width")) + parseInt(e.css("border-right-width")) + parseInt(e.css("margin-left")) + parseInt(e.css("margin-right")), this._$container.addClass("moving")
            },
            _touchMove: function(t) {
                var e = t.originalEvent.touches[0].pageX - this._touchStartX;
                8 < Math.abs(e) && t.preventDefault(), this._lastDirection = t.originalEvent.touches[0].pageX - this._lastTouchX, this._lastDelta = e, "rtl" != this._direction ? (0 === this._currentItem && 0 < this._lastDirection || this._currentItem === this._numItems - 1 && this._lastDirection < 0) && (e /= 2) : (0 === this._currentItem && this._lastDirection < 0 || this._currentItem === this._numItems - 1 && 0 < this._lastDirection) && (e /= 2), this._tempOffset = this._currentOffset + Math.round(e), this._$slider.css("-webkit-transform", "translate3d(" + this._tempOffset + "px,0,0)"), this._$slider.css("transform", "translate3d(" + this._tempOffset + "px,0,0)"), this._lastTouchX = t.originalEvent.touches[0].pageX
            },
            _touchEnd: function(t) {
                this._$container.removeClass("moving"), "rtl" != this._direction ? (Math.abs(this._lastDelta) < 10 || (0 < this._currentItem && 0 < this._lastDirection ? this._currentItem-- : this._currentItem + 1 < this._numItems && this._lastDirection < 0 && this._currentItem++), this._currentOffset = -this._itemWidth * this._currentItem) : (Math.abs(this._lastDelta) < 10 || (0 < this._currentItem && this._lastDirection < 0 ? this._currentItem-- : this._currentItem + 1 < this._numItems && 0 < this._lastDirection && this._currentItem++), this._currentOffset = this._itemWidth * this._currentItem), window.setTimeout($.proxy(function() {
                    this._$slider.css("-webkit-transform", "translate3d(" + this._currentOffset + "px,0,0)"), this._$slider.css("transform", "translate3d(" + this._currentOffset + "px,0,0)")
                }, this), 0), this._$pageIndicator.children().removeClass("selected"), $(this._$pageIndicator.children()[this._currentItem]).addClass("selected")
            },
            _reset: function(t) {
                var e = this._$slider.children().last();
                this._itemWidth = e.width() + parseInt(e.css("padding-left")) + parseInt(e.css("padding-right")) + parseInt(e.css("border-left-width")) + parseInt(e.css("border-right-width")) + parseInt(e.css("margin-left")) + parseInt(e.css("margin-right")), this._currentOffset = -this._itemWidth * this._currentItem, this._$slider.css("-webkit-transform", "translate3d(" + this._currentOffset + "px,0,0)"), this._$slider.css("transform", "translate3d(" + this._currentOffset + "px,0,0)")
            }
        }
    }(), $.fn.namespace("PAYPAL.Marketing"), $(function() {
        var s, o, r, a, l, h, e;

        function i() {
            $.each(l, function(t, e) {
                $(e).next(".menu-wrapper").removeClass("open")
            })
        }

        function n() {
            $.each(l, function(t, e) {
                $(e).removeClass("is-open")
            })
        }

        function c(t) {
            t || r.addClass("menu-close"), r.removeClass("menu-open"), a.removeClass("pp-header-open"), i(), n()
        }

        function u() {
            e = $(window).width(), $(window).on("resize", function() {
                var t = $(window).width();
                t !== e && (e = t, c(!0))
            }), r.on("keydown", function(t) {
                27 === t.keyCode && c()
            }), o.on("click", function(t) {
                t.preventDefault(), r.toggleClass("menu-open"), a.toggleClass("pp-header-open"), r.removeClass("menu-close"), s.toggleClass("menu-open"), n(), i()
            }), $(".menu-wrapper").find("a").attr("tabindex", -1), l.on("click", function(t) {
                t.preventDefault(), i();
                var e = $(t.target);
                e.hasClass("is-open") ? (e.removeClass("is-open"), e.attr("aria-expanded", "false"), e.next(".menu-wrapper").removeClass("open"), e.next(".menu-wrapper").find("a").attr("tabindex", -1)) : (n(), e.addClass("is-open"), e.attr("aria-expanded", "true"), e.next(".menu-wrapper").addClass("open"), e.next(".menu-wrapper").find("a").attr("tabindex", 0)), e.parent().parent().find(".menu-wrapper.open").length && e.hasClass("is-open") ? (r.addClass("menu-open"), r.removeClass("menu-close"), a.addClass("pp-header-open")) : (r.addClass("menu-close"), r.removeClass("menu-open"), a.removeClass("pp-header-open"))
            }), h.on("click", function(t) {
                t.preventDefault(), n(), $(t.target).closest(".menu-wrapper").toggleClass("open"), $(t.target).closest(".menu-wrapper").find("a").attr("tabindex", -1)
            })
        }
        PAYPAL.Marketing.HeaderMenu = function(t, e) {
            var i, n;
            s = e, o = t, r = $("#body"), a = $(document.body), $("header.pp-header"), l = s.find('li > a[rel="menuitem"]'), h = s.find('.subnav > a, .menu-wrapper > a[rel="menuitem"]'), u(), i = s, (n = $('<a><span class="accessAid">' + PP_GLOBAL_JS_STRINGS.CLOSE + "</span></a>")).attr("href", "#" + PP_GLOBAL_JS_STRINGS.CLOSE), n.addClass("closer"), n.attr("role", "button"), n.attr("title", PP_GLOBAL_JS_STRINGS.CLOSE), n.attr("data-pa-click", "header|close"), n.on("click", function(t) {
                    t.preventDefault(), c()
                }), i.find(".menu-wrapper").append(n),
                function() {
                    var t, e = window.location.pathname;
                    if ("/" !== e && (t = s.find("a[href*='" + e + "'][data-highlight]")).length) {
                        var i = t.data("highlight");
                        $("#" + i).addClass("highlight")
                    }
                }(), $(".menu-wrapper").attr("role", "region"), l.attr("aria-expanded", "false")
        }
    }), $(function() {
        $("#main-menu ul li a[rel='menuitem']").on("mouseenter", function() {
            var t = $(this);
            1023 < $(window).width() && (t.hasClass("is-open") || t.trigger("click"))
        }), $("#main-menu ul li a.no-drop").on("mouseenter", function() {
            1023 < $(window).width() && $("#main-menu ul li a.is-open").trigger("click")
        }), $(".pp-header").on("mouseleave", function() {
            1023 < $(window).width() && $("#main-menu ul li a.is-open").trigger("click")
        })
    }), $(function() {
        var t = $("#signup-button"),
            e = [],
            i = 0,
            n = "";
        if (void 0 !== $("#header-send-menu input[type=text]").placeholder) {
            e = [$("#header-send-menu input[type=text]"), $("#header-send-menu input[type=number]"), $("#header-req-menu input[type=email]"), $("#header-req-menu input[type=number]")];
            for (var s = 0; s < e.length; s += 1) e[s].placeholder(), $(e[s]).css("top", "0").css("left", "0")
        }

        function o(t, e) {
            var i = $("#fixed-top"),
                n = $("#fixed-top .hero"),
                s = $(".nav-simple #fixed-top .hero"),
                o = $("#fixed-top .hero-home"),
                r = $(".nav-simple #fixed-top .hero-home"),
                a = $(document.documentElement).data("device-type"),
                l = $("header[role=banner]").height(),
                h = $(".hugger-row").height(),
                c = $(window).height() - (t || 0 + e || 0),
                u = c - l - h,
                d = c - h,
                p = c - 225,
                f = c - 157;
            "mobile" !== a && (i.css("height", c + "px"), n.css("height", u + "px"), s.css("height", d + "px"), $(".hero").hasClass("hero-home") && (i.css("height", "auto"), o.css("height", p + "px"), r.css("height", f + "px")))
        }
        t.on("mousedown", function() {
            "undefined" != typeof ga && null !== ga && ga("send", "event", "MPP Header Sign-Up Button", "Outer")
        }), $(window).on("mousedown keydown", function(t) {
            "mousedown" === t.type ? $(document.documentElement).hasClass("focus-off") || $(document.documentElement).addClass("focus-off") : $(document.documentElement).hasClass("focus-off") && $(document.documentElement).removeClass("focus-off")
        }), $(".hero").hasClass("hero-fixed") && $("#fixed-top,#fixed-top .table-row, #fixed-top header[role=banner] > div, #fixed-top .hugger-row > div").css("display", "block"), $("#cookie-alert-close").on("click", function() {
            $(".cookie-notification").css("display", "none"), i = 0, "undefined" != typeof Storage && localStorage.setItem("eu-cookie", "true"), o(0, i)
        }), "undefined" != typeof Storage && (n = JSON.parse(localStorage.getItem("eu-cookie"))), n ? ($(".cookie-notification").hide(), o(0, i)) : ($(".cookie-notification").show(), o(0, i = $(".cookie-notification").height())), $(".paypal-img-logo").on("keyup", function(t) {
            9 === parseInt(t.which, 10) && $(this).addClass("on-tab")
        }), $(window).on("resize", function() {
            o(0, i)
        }), $("#body").hasClass("nav-simple") ? new PAYPAL.Marketing.HeaderMenu($("#menu-button"), $("#main-nav")) : new PAYPAL.Marketing.HeaderMenu($("#menu-button"), $("#main-menu")), $(window).triggerHandler("heroheightadjust")
    }), $(function() {
        var t = t || {};
        t["active-digital-wallets"] = 267, t["cn-simplified-pp-accts"] = 1.92, t["kr-pp-accts"] = "2억 6,700", t["million-buyers-english"] = 13.1, t["million-buyers-thai"] = 13.1, t["million-buyers-chinese"] = "1,310", t["million-buyers-korean"] = "1,310", t["million-buyers-indonesian"] = "13,1", t["amount-processed"] = 282, t["number-transactions"] = 4.9, t["number-transactions-emea"] = "4,9", t.markets = 203, t["currencies-payments"] = 100, t["currencies-withdraw"] = 57, t.partners = 40, t.countries = 26, t["german-active-digital-wallets"] = "18,9", $("data.active-digital-wallets").html(t["active-digital-wallets"]), $("data.million-buyers-english").html(t["million-buyers-english"]), $("data.million-buyers-chinese").html(t["million-buyers-chinese"]), $("data.million-buyers-indonesian").html(t["million-buyers-indonesian"]), $("data.million-buyers-korean").html(t["million-buyers-korean"]), $("data.million-buyers-thai").html(t["million-buyers-thai"]), $("span.cn-simplified-pp-accts").html(t["cn-simplified-pp-accts"]), $("span.kr-pp-accts").html(t["kr-pp-accts"]), $("span.german-active-digital-wallets").html(t["german-active-digital-wallets"]), $("data.amount-processed").html(t["amount-processed"]), $("data.number-transactions").html(t["number-transactions"]), $("data.number-transactions-emea").html(t["number-transactions-emea"]);
        var e = document.querySelector(".country-selector .country");
        if (e) {
            var i = e.getBoundingClientRect(),
                n = function(t) {
                    e.setAttribute("style", 'background-image: url("https://www.paypalobjects.com/digitalassets/c/website/marketing/global/shared/global/country-worldwide/sprite_countries_flag5.png")'), window.removeEventListener("scroll", n)
                };
            0 <= window.innerHeight - i.top ? n() : window.addEventListener("scroll", n)
        }
    }), $(window).on("load", function() {
        if (null == $("#externalTracking")[0] && $(".externalTrackingSrc")[0]) {
            var t = '<div id="externalTracking">' + $(".externalTrackingSrc").map(function() {
                var t = $(this).text();
                return '<img src="' + $.trim(t) + '" height="1" width="1" alt="" />'
            }).get().join(" ") + "</div>";
            $("body").append(t)
        }
    });