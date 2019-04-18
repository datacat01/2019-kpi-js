window.Modernizr = function(h, f, t) {
    function p(a, b) {
        return typeof a === b
    }

    function u(a, b) {
        for (var c in a) {
            var g = a[c];
            if (!~("" + g).indexOf("-") && l[g] !== t) return "pfx" == b ? g : !0
        }
        return !1
    }

    function m(a, b, c) {
        var g = a.charAt(0).toUpperCase() + a.slice(1),
            d = (a + " " + B.join(g + " ") + g).split(" ");
        if (p(b, "string") || p(b, "undefined")) b = u(d, b);
        else {
            d = (a + " " + v.join(g + " ") + g).split(" ");
            a: {
                var a = d,
                    f;
                for (f in a)
                    if (g = b[a[f]], g !== t) {
                        b = !1 === c ? a[f] : p(g, "function") ? g.bind(c || b) : g;
                        break a
                    } b = !1
            }
        }
        return b
    }

    function I() {
        i.input = function(a) {
            for (var b =
                    0, c = a.length; b < c; b++) w[a[b]] = a[b] in e;
            return w.list && (w.list = !!f.createElement("datalist") && !!h.HTMLDataListElement), w
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        i.inputtypes = function(a) {
            for (var b = 0, c, g, d, i = a.length; b < i; b++) e.setAttribute("type", g = a[b]), c = "text" !== e.type, c && (e.value = s, e.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(g) && e.style.WebkitAppearance !== t ? (n.appendChild(e), d = f.defaultView, c = d.getComputedStyle && "textfield" !==
                d.getComputedStyle(e, null).WebkitAppearance && 0 !== e.offsetHeight, n.removeChild(e)) : /^(search|tel)$/.test(g) || (/^(url|email)$/.test(g) ? c = e.checkValidity && !1 === e.checkValidity() : c = e.value != s)), x[a[b]] = !!c;
            return x
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var i = {},
        n = f.documentElement,
        d = f.createElement("modernizr"),
        l = d.style,
        e = f.createElement("input"),
        s = ":)",
        r = " -webkit- -moz- -o- -ms- ".split(" "),
        B = "Webkit Moz O ms".split(" "),
        v = "webkit moz o ms".split(" "),
        d = {},
        x = {},
        w = {},
        C = [],
        D = C.slice,
        y, z = function(a, b, c, g) {
            var d, i, e, h, j = f.createElement("div"),
                o = f.body,
                k = o || f.createElement("body");
            if (parseInt(c, 10))
                for (; c--;) e = f.createElement("div"), e.id = g ? g[c] : "modernizr" + (c + 1), j.appendChild(e);
            return d = ['&#173;<style id="smodernizr">', a, "</style>"].join(""), j.id = "modernizr", (o ? j : k).innerHTML += d, k.appendChild(j), o || (k.style.background = "", k.style.overflow = "hidden", h = n.style.overflow, n.style.overflow = "hidden", n.appendChild(k)), i = b(j, a), o ? j.parentNode.removeChild(j) :
                (k.parentNode.removeChild(k), n.style.overflow = h), !!i
        },
        G = function() {
            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return function(b, c) {
                c = c || f.createElement(a[b] || "div");
                b = "on" + b;
                var g = b in c;
                return g || (c.setAttribute || (c = f.createElement("div")), c.setAttribute && c.removeAttribute && (c.setAttribute(b, ""), g = p(c[b], "function"), p(c[b], "undefined") || (c[b] = t), c.removeAttribute(b))), g
            }
        }(),
        A = {}.hasOwnProperty,
        q;
    !p(A, "undefined") && !p(A.call, "undefined") ? q =
        function(a, b) {
            return A.call(a, b)
        } : q = function(a, b) {
            return b in a && p(a.constructor.prototype[b], "undefined")
        };
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = D.call(arguments, 1),
            g = function() {
                if (this instanceof g) {
                    var d = function() {};
                    d.prototype = b.prototype;
                    var d = new d,
                        f = b.apply(d, c.concat(D.call(arguments)));
                    return Object(f) === f ? f : d
                }
                return b.apply(a, c.concat(D.call(arguments)))
            };
        return g
    });
    d.flexbox = function() {
        return m("flexWrap")
    };
    d.flexboxlegacy = function() {
        return m("boxDirection")
    };
    d.canvas = function() {
        var a = f.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d")
    };
    d.canvastext = function() {
        return !!i.canvas && !!p(f.createElement("canvas").getContext("2d").fillText, "function")
    };
    d.postmessage = function() {
        return !!h.postMessage
    };
    d.websqldatabase = function() {
        return !!h.openDatabase
    };
    d.indexedDB = function() {
        return !!m("indexedDB", h)
    };
    d.hashchange = function() {
        return G("hashchange", h) && (f.documentMode === t || 7 < f.documentMode)
    };
    d.history =
        function() {
            return !!h.history && !!history.pushState
        };
    d.draganddrop = function() {
        var a = f.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a
    };
    d.websockets = function() {
        return "WebSocket" in h || "MozWebSocket" in h
    };
    d.rgba = function() {
        l.cssText = "background-color:rgba(150,255,150,.5)";
        return !!~("" + l.backgroundColor).indexOf("rgba")
    };
    d.hsla = function() {
        l.cssText = "background-color:hsla(120,40%,100%,.5)";
        return !!~("" + l.backgroundColor).indexOf("rgba") || !!~("" + l.backgroundColor).indexOf("hsla")
    };
    d.multiplebgs = function() {
        l.cssText = "background:url(https://),url(https://),red url(https://)";
        return /(url\s*\(.*?){3}/.test(l.background)
    };
    d.backgroundsize = function() {
        return m("backgroundSize")
    };
    d.borderimage = function() {
        return m("borderImage")
    };
    d.borderradius = function() {
        return m("borderRadius")
    };
    d.boxshadow = function() {
        return m("boxShadow")
    };
    d.textshadow = function() {
        return "" === f.createElement("div").style.textShadow
    };
    d.opacity = function() {
        var a = r.join("opacity:.55;") + "";
        l.cssText = a;
        return /^0.55$/.test(l.opacity)
    };
    d.cssanimations = function() {
        return m("animationName")
    };
    d.csscolumns = function() {
        return m("columnCount")
    };
    d.cssgradients = function() {
        var a = ("background-image:" + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:") + r.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
        l.cssText = a;
        return !!~("" + l.backgroundImage).indexOf("gradient")
    };
    d.cssreflections = function() {
        return m("boxReflect")
    };
    d.csstransforms = function() {
        return !!m("transform")
    };
    d.csstransforms3d = function() {
        var a = !!m("perspective");
        return a && "webkitPerspective" in n.style && z("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), a
    };
    d.csstransitions = function() {
        return m("transition")
    };
    d.fontface = function() {
        var a;
        return z('@font-face {font-family:"font";src:url("https://")}', function(b, c) {
            var g = f.getElementById("smodernizr"),
                g = (g = g.sheet || g.styleSheet) ? g.cssRules && g.cssRules[0] ? g.cssRules[0].cssText :
                g.cssText || "" : "";
            a = /src/i.test(g) && 0 === g.indexOf(c.split(" ")[0])
        }), a
    };
    d.generatedcontent = function() {
        var a;
        return z(['#modernizr{font:0/0 a}#modernizr:after{content:"', s, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = 3 <= b.offsetHeight
        }), a
    };
    d.video = function() {
        var a = f.createElement("video"),
            b = !1;
        try {
            if (b = !!a.canPlayType) b = new Boolean(b), b.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), b.webm =
                a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (c) {}
        return b
    };
    d.audio = function() {
        var a = f.createElement("audio"),
            b = !1;
        try {
            if (b = !!a.canPlayType) b = new Boolean(b), b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), b.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), b.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), b.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (c) {}
        return b
    };
    d.localstorage = function() {
        try {
            return localStorage.setItem("modernizr",
                "modernizr"), localStorage.removeItem("modernizr"), !0
        } catch (a) {
            return !1
        }
    };
    d.sessionstorage = function() {
        try {
            return sessionStorage.setItem("modernizr", "modernizr"), sessionStorage.removeItem("modernizr"), !0
        } catch (a) {
            return !1
        }
    };
    d.webworkers = function() {
        return !!h.Worker
    };
    d.applicationcache = function() {
        return !!h.applicationCache
    };
    for (var E in d) q(d, E) && (y = E.toLowerCase(), i[y] = d[E](), C.push((i[y] ? "" : "no-") + y));
    i.input || I();
    i.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var c in a) q(a, c) && i.addTest(c, a[c]);
        else {
            a = a.toLowerCase();
            if (i[a] !== t) return i;
            b = "function" == typeof b ? b() : b;
            n.className += " " + (b ? "" : "no-") + a;
            i[a] = b
        }
        return i
    };
    l.cssText = "";
    return d = e = null,
        function(a, b) {
            function c() {
                var c = H.elements;
                return "string" == typeof c ? c.split(" ") : c
            }

            function g(c) {
                var b = l[c[h]];
                return b || (b = {}, m++, c[h] = m, l[m] = b), b
            }

            function d(c, a, k) {
                a || (a = b);
                if (F) return a.createElement(c);
                k || (k = g(a));
                var f;
                return k.cache[c] ? f = k.cache[c].cloneNode() : o.test(c) ? f = (k.cache[c] = k.createElem(c)).cloneNode() : f = k.createElem(c), f.canHaveChildren &&
                    !j.test(c) && !f.tagUrn ? k.frag.appendChild(f) : f
            }

            function f(b, a) {
                a.cache || (a.cache = {}, a.createElem = b.createElement, a.createFrag = b.createDocumentFragment, a.frag = a.createFrag());
                b.createElement = function(c) {
                    return H.shivMethods ? d(c, b, a) : a.createElem(c)
                };
                b.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function(c) {
                    return a.createElem(c), a.frag.createElement(c), 'c("' + c + '")'
                }) + ");return n}")(H, a.frag)
            }

            function i(c) {
                c ||
                    (c = b);
                var a = g(c);
                if (H.shivCSS && !k && !a.hasCSS) {
                    var d, o = c;
                    d = o.createElement("p");
                    o = o.getElementsByTagName("head")[0] || o.documentElement;
                    d = (d.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>", o.insertBefore(d.lastChild, o.firstChild));
                    a.hasCSS = !!d
                }
                return F || f(c, a), c
            }
            var e = a.html5 || {},
                j = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                k, h = "_html5shiv",
                m = 0,
                l = {},
                F;
            (function() {
                try {
                    var c = b.createElement("a");
                    c.innerHTML = "<xyz></xyz>";
                    k = "hidden" in c;
                    var a;
                    if (!(a = 1 == c.childNodes.length)) {
                        b.createElement("a");
                        var g = b.createDocumentFragment();
                        a = "undefined" == typeof g.cloneNode || "undefined" == typeof g.createDocumentFragment || "undefined" == typeof g.createElement
                    }
                    F = a
                } catch (d) {
                    k = !0, F = !0
                }
            })();
            var H = {
                elements: e.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: "3.7.0",
                shivCSS: !1 !== e.shivCSS,
                supportsUnknownElements: F,
                shivMethods: !1 !== e.shivMethods,
                type: "default",
                shivDocument: i,
                createElement: d,
                createDocumentFragment: function(a, d) {
                    a || (a = b);
                    if (F) return a.createDocumentFragment();
                    for (var d = d || g(a), k = d.frag.cloneNode(), f = 0, o = c(), i = o.length; f < i; f++) k.createElement(o[f]);
                    return k
                }
            };
            a.html5 = H;
            i(b)
        }(this, f), i._version = "2.8.3", i._prefixes = r, i._domPrefixes = v, i._cssomPrefixes = B, i.mq = function(a) {
            var b = h.matchMedia || h.msMatchMedia;
            if (b) return b(a) && b(a).matches ||
                !1;
            var c;
            return z("@media " + a + " { #modernizr { position: absolute; } }", function(a) {
                c = "absolute" == (h.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle).position
            }), c
        }, i.hasEvent = G, i.testProp = function(a) {
            return u([a])
        }, i.testAllProps = m, i.testStyles = z, n.className = n.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + C.join(" ")), i
}(this, this.document);
(function(h, f, t) {
    function p(c) {
        return "[object Function]" == B.call(c)
    }

    function u(c) {
        return "string" == typeof c
    }

    function m() {}

    function I(c) {
        return !c || "loaded" == c || "complete" == c || "uninitialized" == c
    }

    function i() {
        var c = v.shift();
        x = 1;
        c ? c.t ? s(function() {
            ("c" == c.t ? b.injectCss : b.injectJs)(c.s, 0, c.a, c.x, c.e, 1)
        }, 0) : (c(), i()) : x = 0
    }

    function n(c, a, d, e, h, m, j) {
        function o(b) {
            if (!l && I(k.readyState) && (n.r = l = 1, !x && i(), k.onload = k.onreadystatechange = null, b)) {
                "img" != c && s(function() {
                    D.removeChild(k)
                }, 50);
                for (var d in q[a]) q[a].hasOwnProperty(d) &&
                    q[a][d].onload()
            }
        }
        var j = j || b.errorTimeout,
            k = f.createElement(c),
            l = 0,
            p = 0,
            n = {
                t: d,
                s: a,
                e: h,
                a: m,
                x: j
            };
        1 === q[a] && (p = 1, q[a] = []);
        "object" == c ? k.data = a : (k.src = a, k.type = c);
        k.width = k.height = "0";
        k.onerror = k.onload = k.onreadystatechange = function() {
            o.call(this, p)
        };
        v.splice(e, 0, n);
        "img" != c && (p || 2 === q[a] ? (D.insertBefore(k, C ? null : r), s(o, j)) : q[a].push(k))
    }

    function d(c, a, b, d, f) {
        return x = 0, a = a || "j", u(c) ? n("c" == a ? z : y, c, a, this.i++, b, d, f) : (v.splice(this.i++, 0, c), 1 == v.length && i()), this
    }

    function l() {
        var a = b;
        return a.loader = {
            load: d,
            i: 0
        }, a
    }
    var e = f.documentElement,
        s = h.setTimeout,
        r = f.getElementsByTagName("script")[0],
        B = {}.toString,
        v = [],
        x = 0,
        w = "MozAppearance" in e.style,
        C = w && !!f.createRange().compareNode,
        D = C ? e : r.parentNode,
        e = h.opera && "[object Opera]" == B.call(h.opera),
        e = !!f.attachEvent && !e,
        y = w ? "object" : e ? "script" : "img",
        z = e ? "script" : y,
        G = Array.isArray || function(a) {
            return "[object Array]" == B.call(a)
        },
        A = [],
        q = {},
        E = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        },
        a, b;
    b = function(a) {
        function d(a) {
            var a = a.split("!"),
                c = A.length,
                b =
                a.pop(),
                f = a.length,
                b = {
                    url: b,
                    origUrl: b,
                    prefixes: a
                },
                g, i, h;
            for (i = 0; i < f; i++) h = a[i].split("="), (g = E[h.shift()]) && (b = g(b, h));
            for (i = 0; i < c; i++) b = A[i](b);
            return b
        }

        function f(a, b, c, i, h) {
            var e = d(a),
                j = e.autoCallback;
            e.url.split(".").pop().split("?").shift();
            e.bypass || (b && (b = p(b) ? b : b[a] || b[i] || b[a.split("/").pop().split("?")[0]]), e.instead ? e.instead(a, b, c, i, h) : (q[e.url] ? e.noexec = !0 : q[e.url] = 1, c.load(e.url, e.forceCSS || !e.forceJS && "css" == e.url.split(".").pop().split("?").shift() ? "c" : t, e.noexec, e.attrs, e.timeout),
                (p(b) || p(j)) && c.load(function() {
                    l();
                    b && b(e.origUrl, h, i);
                    j && j(e.origUrl, h, i);
                    q[e.url] = 2
                })))
        }

        function i(a, b) {
            function c(a, g) {
                if (a)
                    if (u(a)) g || (e = function() {
                        var a = [].slice.call(arguments);
                        h.apply(this, a);
                        j()
                    }), f(a, e, b, 0, d);
                    else {
                        if (Object(a) === a)
                            for (n in l = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!g && !--l && (p(e) ? e = function() {
                                var a = [].slice.call(arguments);
                                h.apply(this, a);
                                j()
                            } : e[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this,
                                        b);
                                    j()
                                }
                            }(h[n])), f(a[n], e, b, n, d))
                    }
                else !g && j()
            }
            var d = !!a.test,
                g = a.load || a.both,
                e = a.callback || m,
                h = e,
                j = a.complete || m,
                l, n;
            c(d ? a.yep : a.nope, !!g);
            g && c(g)
        }
        var e, h, j = this.yepnope.loader;
        if (u(a)) f(a, 0, j, 0);
        else if (G(a))
            for (e = 0; e < a.length; e++) h = a[e], u(h) ? f(h, 0, j, 0) : G(h) ? b(h) : Object(h) === h && i(h, j);
        else Object(a) === a && i(a, j)
    };
    b.addPrefix = function(a, b) {
        E[a] = b
    };
    b.addFilter = function(a) {
        A.push(a)
    };
    b.errorTimeout = 1E4;
    null == f.readyState && f.addEventListener && (f.readyState = "loading", f.addEventListener("DOMContentLoaded",
        a = function() {
            f.removeEventListener("DOMContentLoaded", a, 0);
            f.readyState = "complete"
        }, 0));
    h.yepnope = l();
    h.yepnope.executeStack = i;
    h.yepnope.injectJs = function(a, d, e, h, l, n) {
        var j = f.createElement("script"),
            o, k, h = h || b.errorTimeout;
        j.src = a;
        for (k in e) j.setAttribute(k, e[k]);
        d = n ? i : d || m;
        j.onreadystatechange = j.onload = function() {
            !o && I(j.readyState) && (o = 1, d(), j.onload = j.onreadystatechange = null)
        };
        s(function() {
            o || (o = 1, d(1))
        }, h);
        l ? j.onload() : r.parentNode.insertBefore(j, r)
    };
    h.yepnope.injectCss = function(a, b, d, e, h, l) {
        var e =
            f.createElement("link"),
            j, b = l ? i : b || m;
        e.href = a;
        e.rel = "stylesheet";
        e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        h || (r.parentNode.insertBefore(e, r), s(b, 0))
    }
})(this, document);
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};