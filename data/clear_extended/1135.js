/*! jquery-intelecomchat - v1.9.1 - 2017-05-09 */ ! function(a) {
    "function" == typeof define && define.amd ? define("starrr", ["jquery"], a) : a(jQuery)
}(function(a) {
    var b, c = [].slice;
    return b = function() {
        function b(b, c) {
            this.options = a.extend({}, this.defaults, c), this.$el = b, this.createStars(), this.syncRating(), this.options.readOnly || (this.$el.on("mouseover.starrr", "i", function(a) {
                return function(b) {
                    return a.syncRating(a.getStars().index(b.currentTarget) + 1)
                }
            }(this)), this.$el.on("mouseout.starrr", function(a) {
                return function() {
                    return a.syncRating()
                }
            }(this)), this.$el.on("click.starrr", "i", function(a) {
                return function(b) {
                    return a.setRating(a.getStars().index(b.currentTarget) + 1)
                }
            }(this)), this.$el.on("starrr:change", this.options.change))
        }
        return b.prototype.defaults = {
            rating: void 0,
            max: 5,
            readOnly: !1,
            emptyClass: "intelecom_icon-star-empty",
            fullClass: "intelecom_icon-star",
            change: function() {}
        }, b.prototype.getStars = function() {
            return this.$el.find("i")
        }, b.prototype.createStars = function() {
            var a, b, c;
            for (c = [], a = 1, b = this.options.max; b >= 1 ? b >= a : a >= b; b >= 1 ? a++ : a--) c.push(this.$el.append("<i />"));
            return c
        }, b.prototype.setRating = function(a) {
            return this.options.rating === a && (a = void 0), this.options.rating = a, this.syncRating(), this.$el.trigger("starrr:change", a)
        }, b.prototype.getRating = function() {
            return this.options.rating
        }, b.prototype.syncRating = function(a) {
            var b, c, d, e, f;
            for (a || (a = this.options.rating), b = this.getStars(), f = [], c = d = 1, e = this.options.max; e >= 1 ? e >= d : d >= e; c = e >= 1 ? ++d : --d) f.push(b.eq(c - 1).removeClass(a >= c ? this.options.emptyClass : this.options.fullClass).addClass(a >= c ? this.options.fullClass : this.options.emptyClass));
            return f
        }, b
    }(), a.fn.extend({
        starrr: function() {
            var d, e;
            return e = arguments[0], d = 2 <= arguments.length ? c.call(arguments, 1) : [], this.each(function() {
                var c;
                return c = a(this).data("starrr"), c || a(this).data("starrr", c = new b(a(this), e)), "string" == typeof e ? c[e].apply(c, d) : void 0
            })
        }
    })
}), window.Modernizr = function(a, b, c) {
        function d(a) {
            t.cssText = a
        }

        function e(a, b) {
            return d(x.join(a + ";") + (b || ""))
        }

        function f(a, b) {
            return typeof a === b
        }

        function g(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function h(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!g(e, "-") && t[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function i(a, b, d) {
            for (var e in a) {
                var g = b[a[e]];
                if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function j(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + z.join(d + " ") + d).split(" ");
            return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
        }

        function k() {
            o.input = function(c) {
                for (var d = 0, e = c.length; e > d; d++) E[c[d]] = !!(c[d] in u);
                return E.list && (E.list = !(!b.createElement("datalist") || !a.HTMLDataListElement)), E
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function(a) {
                for (var d, e, f, g = 0, h = a.length; h > g; g++) u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)), D[a[g]] = !!d;
                return D
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var l, m, n = "2.8.3",
            o = {},
            p = !0,
            q = b.documentElement,
            r = "modernizr",
            s = b.createElement(r),
            t = s.style,
            u = b.createElement("input"),
            v = ":)",
            w = {}.toString,
            x = " -webkit- -moz- -o- -ms- ".split(" "),
            y = "Webkit Moz O ms",
            z = y.split(" "),
            A = y.toLowerCase().split(" "),
            B = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            D = {},
            E = {},
            F = [],
            G = F.slice,
            H = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""), j.id = r, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), !!g
            },
            I = function(b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b) && c(b).matches || !1;
                var d;
                return H("@media " + b + " { #" + r + " { position: absolute; } }", function(b) {
                    d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
                }), d
            },
            J = function() {
                function a(a, e) {
                    e = e || b.createElement(d[a] || "div"), a = "on" + a;
                    var g = a in e;
                    return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
                }
                var d = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return a
            }(),
            K = {}.hasOwnProperty;
        m = f(K, "undefined") || f(K.call, "undefined") ? function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return K.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = G.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(G.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(G.call(arguments)))
                };
            return d
        }), C.flexbox = function() {
            return j("flexWrap")
        }, C.flexboxlegacy = function() {
            return j("boxDirection")
        }, C.canvas = function() {
            var a = b.createElement("canvas");
            return !(!a.getContext || !a.getContext("2d"))
        }, C.canvastext = function() {
            return !(!o.canvas || !f(b.createElement("canvas").getContext("2d").fillText, "function"))
        }, C.webgl = function() {
            return !!a.WebGLRenderingContext
        }, C.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = 9 === a.offsetTop
            }), c
        }, C.geolocation = function() {
            return "geolocation" in navigator
        }, C.postmessage = function() {
            return !!a.postMessage
        }, C.websqldatabase = function() {
            return !!a.openDatabase
        }, C.indexedDB = function() {
            return !!j("indexedDB", a)
        }, C.hashchange = function() {
            return J("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, C.history = function() {
            return !(!a.history || !history.pushState)
        }, C.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, C.websockets = function() {
            return "WebSocket" in a || "MozWebSocket" in a
        }, C.rgba = function() {
            return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba")
        }, C.hsla = function() {
            return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
        }, C.multiplebgs = function() {
            return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background)
        }, C.backgroundsize = function() {
            return j("backgroundSize")
        }, C.borderimage = function() {
            return j("borderImage")
        }, C.borderradius = function() {
            return j("borderRadius")
        }, C.boxshadow = function() {
            return j("boxShadow")
        }, C.textshadow = function() {
            return "" === b.createElement("div").style.textShadow
        }, C.opacity = function() {
            return e("opacity:.55"), /^0.55$/.test(t.opacity)
        }, C.cssanimations = function() {
            return j("animationName")
        }, C.csscolumns = function() {
            return j("columnCount")
        }, C.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient")
        }, C.cssreflections = function() {
            return j("boxReflect")
        }, C.csstransforms = function() {
            return !!j("transform")
        }, C.csstransforms3d = function() {
            var a = !!j("perspective");
            return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, C.csstransitions = function() {
            return j("transition")
        }, C.fontface = function() {
            var a;
            return H('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
            }), a
        }, C.generatedcontent = function() {
            var a;
            return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, C.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.localstorage = function() {
            try {
                return localStorage.setItem(r, r), localStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.sessionstorage = function() {
            try {
                return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.webworkers = function() {
            return !!a.Worker
        }, C.applicationcache = function() {
            return !!a.applicationCache
        }, C.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
        }, C.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg
        }, C.smil = function() {
            return !!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")))
        }, C.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
        };
        for (var L in C) m(C, L) && (l = L.toLowerCase(), o[l] = C[L](), F.push((o[l] ? "" : "no-") + l));
        return o.input || k(), o.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) m(a, d) && o.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), o[a] !== c) return o;
                    b = "function" == typeof b ? b() : b, "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a), o[a] = b
                }
                return o
            }, d(""), s = u = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = s.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = r[a[p]];
                    return b || (b = {}, q++, a[p] = q, r[q] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return !s.shivCSS || j || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a
                }
                var j, k, l = "3.7.0",
                    m = a.html5 || {},
                    n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p = "_html5shiv",
                    q = 0,
                    r = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                        }()
                    } catch (c) {
                        j = !0, k = !0
                    }
                }();
                var s = {
                    elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: l,
                    shivCSS: m.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: m.shivMethods !== !1,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = s, i(b)
            }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.mq = I, o.hasEvent = J, o.testProp = function(a) {
                return h([a])
            }, o.testAllProps = j, o.testStyles = H, o.prefixed = function(a, b, c) {
                return b ? j(a, b, c) : j(a, "pfx")
            }, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o
    }(this, this.document),
    function() {
        ! function(a) {
            var b = this || (0, eval)("this"),
                c = b.document,
                d = b.navigator,
                e = b.jQuery,
                f = b.JSON;
            ! function(a) {
                "function" == typeof define && define.amd ? define(["exports", "require"], a) : a("object" == typeof exports && "object" == typeof module ? module.exports || exports : b.ko = {})
            }(function(g, h) {
                function i(a, b) {
                    return null === a || typeof a in q ? a === b : !1
                }

                function j(b, c) {
                    var d;
                    return function() {
                        d || (d = p.a.setTimeout(function() {
                            d = a, b()
                        }, c))
                    }
                }

                function k(a, b) {
                    var c;
                    return function() {
                        clearTimeout(c), c = p.a.setTimeout(a, b)
                    }
                }

                function l(a, b) {
                    b && b !== r ? "beforeChange" === b ? this.Kb(a) : this.Ha(a, b) : this.Lb(a)
                }

                function m(a, b) {
                    null !== b && b.k && b.k()
                }

                function n(a, b) {
                    var c = this.Hc,
                        d = c[w];
                    d.R || (this.lb && this.Ma[b] ? (c.Pb(b, a, this.Ma[b]), this.Ma[b] = null, --this.lb) : d.r[b] || c.Pb(b, a, d.s ? {
                        ia: a
                    } : c.uc(a)))
                }

                function o(a, b, c, d) {
                    p.d[a] = {
                        init: function(a, e, f, g, h) {
                            var i, j;
                            return p.m(function() {
                                var f = p.a.c(e()),
                                    g = !c != !f,
                                    k = !j;
                                (k || b || g !== i) && (k && p.va.Aa() && (j = p.a.ua(p.f.childNodes(a), !0)), g ? (k || p.f.da(a, p.a.ua(j)), p.eb(d ? d(h, f) : h, a)) : p.f.xa(a), i = g)
                            }, null, {
                                i: a
                            }), {
                                controlsDescendantBindings: !0
                            }
                        }
                    }, p.h.ta[a] = !1, p.f.Z[a] = !0
                }
                var p = "undefined" != typeof g ? g : {};
                p.b = function(a, b) {
                        for (var c = a.split("."), d = p, e = 0; e < c.length - 1; e++) d = d[c[e]];
                        d[c[c.length - 1]] = b
                    }, p.G = function(a, b, c) {
                        a[b] = c
                    }, p.version = "3.4.0", p.b("version", p.version), p.options = {
                        deferUpdates: !1,
                        useOnlyNativeEvents: !1
                    }, p.a = function() {
                        function g(a, b) {
                            for (var c in a) a.hasOwnProperty(c) && b(c, a[c])
                        }

                        function h(a, b) {
                            if (b)
                                for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                            return a
                        }

                        function i(a, b) {
                            return a.__proto__ = b, a
                        }

                        function j(a, b, c, d) {
                            var e = a[b].match(r) || [];
                            p.a.q(c.match(r), function(a) {
                                p.a.pa(e, a, d)
                            }), a[b] = e.join(" ")
                        }
                        var k = {
                            __proto__: []
                        }
                        instanceof Array, l = "function" == typeof Symbol, m = {}, n = {};
                        m[d && /Firefox\/2/i.test(d.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"], m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "), g(m, function(a, b) {
                            if (b.length)
                                for (var c = 0, d = b.length; d > c; c++) n[b[c]] = a
                        });
                        var o = {
                                propertychange: !0
                            },
                            q = c && function() {
                                for (var b = 3, d = c.createElement("div"), e = d.getElementsByTagName("i"); d.innerHTML = "<!--[if gt IE " + ++b + "]><i></i><![endif]-->", e[0];);
                                return b > 4 ? b : a
                            }(),
                            r = /\S+/g;
                        return {
                            cc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                            q: function(a, b) {
                                for (var c = 0, d = a.length; d > c; c++) b(a[c], c)
                            },
                            o: function(a, b) {
                                if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
                                for (var c = 0, d = a.length; d > c; c++)
                                    if (a[c] === b) return c;
                                return -1
                            },
                            Sb: function(a, b, c) {
                                for (var d = 0, e = a.length; e > d; d++)
                                    if (b.call(c, a[d], d)) return a[d];
                                return null
                            },
                            La: function(a, b) {
                                var c = p.a.o(a, b);
                                c > 0 ? a.splice(c, 1) : 0 === c && a.shift()
                            },
                            Tb: function(a) {
                                a = a || [];
                                for (var b = [], c = 0, d = a.length; d > c; c++) 0 > p.a.o(b, a[c]) && b.push(a[c]);
                                return b
                            },
                            fb: function(a, b) {
                                a = a || [];
                                for (var c = [], d = 0, e = a.length; e > d; d++) c.push(b(a[d], d));
                                return c
                            },
                            Ka: function(a, b) {
                                a = a || [];
                                for (var c = [], d = 0, e = a.length; e > d; d++) b(a[d], d) && c.push(a[d]);
                                return c
                            },
                            ra: function(a, b) {
                                if (b instanceof Array) a.push.apply(a, b);
                                else
                                    for (var c = 0, d = b.length; d > c; c++) a.push(b[c]);
                                return a
                            },
                            pa: function(a, b, c) {
                                var d = p.a.o(p.a.zb(a), b);
                                0 > d ? c && a.push(b) : c || a.splice(d, 1)
                            },
                            ka: k,
                            extend: h,
                            Xa: i,
                            Ya: k ? i : h,
                            D: g,
                            Ca: function(a, b) {
                                if (!a) return a;
                                var c, d = {};
                                for (c in a) a.hasOwnProperty(c) && (d[c] = b(a[c], c, a));
                                return d
                            },
                            ob: function(a) {
                                for (; a.firstChild;) p.removeNode(a.firstChild)
                            },
                            jc: function(a) {
                                a = p.a.V(a);
                                for (var b = (a[0] && a[0].ownerDocument || c).createElement("div"), d = 0, e = a.length; e > d; d++) b.appendChild(p.$(a[d]));
                                return b
                            },
                            ua: function(a, b) {
                                for (var c = 0, d = a.length, e = []; d > c; c++) {
                                    var f = a[c].cloneNode(!0);
                                    e.push(b ? p.$(f) : f)
                                }
                                return e
                            },
                            da: function(a, b) {
                                if (p.a.ob(a), b)
                                    for (var c = 0, d = b.length; d > c; c++) a.appendChild(b[c])
                            },
                            qc: function(a, b) {
                                var c = a.nodeType ? [a] : a;
                                if (0 < c.length) {
                                    for (var d = c[0], e = d.parentNode, f = 0, g = b.length; g > f; f++) e.insertBefore(b[f], d);
                                    for (f = 0, g = c.length; g > f; f++) p.removeNode(c[f])
                                }
                            },
                            za: function(a, b) {
                                if (a.length) {
                                    for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.splice(0, 1);
                                    for (; 1 < a.length && a[a.length - 1].parentNode !== b;) a.length--;
                                    if (1 < a.length) {
                                        var c = a[0],
                                            d = a[a.length - 1];
                                        for (a.length = 0; c !== d;) a.push(c), c = c.nextSibling;
                                        a.push(d)
                                    }
                                }
                                return a
                            },
                            sc: function(a, b) {
                                7 > q ? a.setAttribute("selected", b) : a.selected = b
                            },
                            $a: function(b) {
                                return null === b || b === a ? "" : b.trim ? b.trim() : b.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                            },
                            nd: function(a, b) {
                                return a = a || "", b.length > a.length ? !1 : a.substring(0, b.length) === b
                            },
                            Mc: function(a, b) {
                                if (a === b) return !0;
                                if (11 === a.nodeType) return !1;
                                if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);
                                if (b.compareDocumentPosition) return 16 == (16 & b.compareDocumentPosition(a));
                                for (; a && a != b;) a = a.parentNode;
                                return !!a
                            },
                            nb: function(a) {
                                return p.a.Mc(a, a.ownerDocument.documentElement)
                            },
                            Qb: function(a) {
                                return !!p.a.Sb(a, p.a.nb)
                            },
                            A: function(a) {
                                return a && a.tagName && a.tagName.toLowerCase()
                            },
                            Wb: function(a) {
                                return p.onError ? function() {
                                    try {
                                        return a.apply(this, arguments)
                                    } catch (b) {
                                        throw p.onError && p.onError(b), b
                                    }
                                } : a
                            },
                            setTimeout: function(a, b) {
                                return setTimeout(p.a.Wb(a), b)
                            },
                            $b: function(a) {
                                setTimeout(function() {
                                    throw p.onError && p.onError(a), a
                                }, 0)
                            },
                            p: function(a, b, c) {
                                var d = p.a.Wb(c);
                                if (c = q && o[b], p.options.useOnlyNativeEvents || c || !e)
                                    if (c || "function" != typeof a.addEventListener) {
                                        if ("undefined" == typeof a.attachEvent) throw Error("Browser doesn't support addEventListener or attachEvent");
                                        var f = function(b) {
                                                d.call(a, b)
                                            },
                                            g = "on" + b;
                                        a.attachEvent(g, f), p.a.F.oa(a, function() {
                                            a.detachEvent(g, f)
                                        })
                                    } else a.addEventListener(b, d, !1);
                                else e(a).bind(b, d)
                            },
                            Da: function(a, d) {
                                if (!a || !a.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                                var f;
                                if ("input" === p.a.A(a) && a.type && "click" == d.toLowerCase() ? (f = a.type, f = "checkbox" == f || "radio" == f) : f = !1, p.options.useOnlyNativeEvents || !e || f)
                                    if ("function" == typeof c.createEvent) {
                                        if ("function" != typeof a.dispatchEvent) throw Error("The supplied element doesn't support dispatchEvent");
                                        f = c.createEvent(n[d] || "HTMLEvents"), f.initEvent(d, !0, !0, b, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, a), a.dispatchEvent(f)
                                    } else if (f && a.click) a.click();
                                else {
                                    if ("undefined" == typeof a.fireEvent) throw Error("Browser doesn't support triggering events");
                                    a.fireEvent("on" + d)
                                } else e(a).trigger(d)
                            },
                            c: function(a) {
                                return p.H(a) ? a() : a
                            },
                            zb: function(a) {
                                return p.H(a) ? a.t() : a
                            },
                            bb: function(a, b, c) {
                                var d;
                                b && ("object" == typeof a.classList ? (d = a.classList[c ? "add" : "remove"], p.a.q(b.match(r), function(b) {
                                    d.call(a.classList, b)
                                })) : "string" == typeof a.className.baseVal ? j(a.className, "baseVal", b, c) : j(a, "className", b, c))
                            },
                            Za: function(b, c) {
                                var d = p.a.c(c);
                                (null === d || d === a) && (d = "");
                                var e = p.f.firstChild(b);
                                !e || 3 != e.nodeType || p.f.nextSibling(e) ? p.f.da(b, [b.ownerDocument.createTextNode(d)]) : e.data = d, p.a.Rc(b)
                            },
                            rc: function(a, b) {
                                if (a.name = b, 7 >= q) try {
                                    a.mergeAttributes(c.createElement("<input name='" + a.name + "'/>"), !1)
                                } catch (d) {}
                            },
                            Rc: function(a) {
                                q >= 9 && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
                            },
                            Nc: function(a) {
                                if (q) {
                                    var b = a.style.width;
                                    a.style.width = 0, a.style.width = b
                                }
                            },
                            hd: function(a, b) {
                                a = p.a.c(a), b = p.a.c(b);
                                for (var c = [], d = a; b >= d; d++) c.push(d);
                                return c
                            },
                            V: function(a) {
                                for (var b = [], c = 0, d = a.length; d > c; c++) b.push(a[c]);
                                return b
                            },
                            Yb: function(a) {
                                return l ? Symbol(a) : a
                            },
                            rd: 6 === q,
                            sd: 7 === q,
                            C: q,
                            ec: function(a, b) {
                                for (var c = p.a.V(a.getElementsByTagName("input")).concat(p.a.V(a.getElementsByTagName("textarea"))), d = "string" == typeof b ? function(a) {
                                        return a.name === b
                                    } : function(a) {
                                        return b.test(a.name)
                                    }, e = [], f = c.length - 1; f >= 0; f--) d(c[f]) && e.push(c[f]);
                                return e
                            },
                            ed: function(a) {
                                return "string" == typeof a && (a = p.a.$a(a)) ? f && f.parse ? f.parse(a) : new Function("return " + a)() : null
                            },
                            Eb: function(a, b, c) {
                                if (!f || !f.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                return f.stringify(p.a.c(a), b, c)
                            },
                            fd: function(a, b, d) {
                                d = d || {};
                                var e = d.params || {},
                                    f = d.includeFields || this.cc,
                                    h = a;
                                if ("object" == typeof a && "form" === p.a.A(a))
                                    for (var h = a.action, i = f.length - 1; i >= 0; i--)
                                        for (var j = p.a.ec(a, f[i]), k = j.length - 1; k >= 0; k--) e[j[k].name] = j[k].value;
                                b = p.a.c(b);
                                var l = c.createElement("form");
                                l.style.display = "none", l.action = h, l.method = "post";
                                for (var m in b) a = c.createElement("input"), a.type = "hidden", a.name = m, a.value = p.a.Eb(p.a.c(b[m])), l.appendChild(a);
                                g(e, function(a, b) {
                                    var d = c.createElement("input");
                                    d.type = "hidden", d.name = a, d.value = b, l.appendChild(d)
                                }), c.body.appendChild(l), d.submitter ? d.submitter(l) : l.submit(), setTimeout(function() {
                                    l.parentNode.removeChild(l)
                                }, 0)
                            }
                        }
                    }(), p.b("utils", p.a), p.b("utils.arrayForEach", p.a.q), p.b("utils.arrayFirst", p.a.Sb), p.b("utils.arrayFilter", p.a.Ka), p.b("utils.arrayGetDistinctValues", p.a.Tb), p.b("utils.arrayIndexOf", p.a.o), p.b("utils.arrayMap", p.a.fb), p.b("utils.arrayPushAll", p.a.ra), p.b("utils.arrayRemoveItem", p.a.La), p.b("utils.extend", p.a.extend), p.b("utils.fieldsIncludedWithJsonPost", p.a.cc), p.b("utils.getFormFields", p.a.ec), p.b("utils.peekObservable", p.a.zb), p.b("utils.postJson", p.a.fd), p.b("utils.parseJson", p.a.ed), p.b("utils.registerEventHandler", p.a.p), p.b("utils.stringifyJson", p.a.Eb), p.b("utils.range", p.a.hd), p.b("utils.toggleDomNodeCssClass", p.a.bb), p.b("utils.triggerEvent", p.a.Da), p.b("utils.unwrapObservable", p.a.c), p.b("utils.objectForEach", p.a.D), p.b("utils.addOrRemoveItem", p.a.pa), p.b("utils.setTextContent", p.a.Za), p.b("unwrap", p.a.c), Function.prototype.bind || (Function.prototype.bind = function(a) {
                        var b = this;
                        if (1 === arguments.length) return function() {
                            return b.apply(a, arguments)
                        };
                        var c = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var d = c.slice(0);
                            return d.push.apply(d, arguments), b.apply(a, d)
                        }
                    }), p.a.e = new function() {
                        function b(b, f) {
                            var g = b[d];
                            if (!g || "null" === g || !e[g]) {
                                if (!f) return a;
                                g = b[d] = "ko" + c++, e[g] = {}
                            }
                            return e[g]
                        }
                        var c = 0,
                            d = "__ko__" + (new Date).getTime(),
                            e = {};
                        return {
                            get: function(c, d) {
                                var e = b(c, !1);
                                return e === a ? a : e[d]
                            },
                            set: function(c, d, e) {
                                (e !== a || b(c, !1) !== a) && (b(c, !0)[d] = e)
                            },
                            clear: function(a) {
                                var b = a[d];
                                return b ? (delete e[b], a[d] = null, !0) : !1
                            },
                            I: function() {
                                return c++ + d
                            }
                        }
                    }, p.b("utils.domData", p.a.e), p.b("utils.domData.clear", p.a.e.clear), p.a.F = new function() {
                        function b(b, c) {
                            var e = p.a.e.get(b, d);
                            return e === a && c && (e = [], p.a.e.set(b, d, e)), e
                        }

                        function c(a) {
                            var d = b(a, !1);
                            if (d)
                                for (var d = d.slice(0), e = 0; e < d.length; e++) d[e](a);
                            if (p.a.e.clear(a), p.a.F.cleanExternalData(a), g[a.nodeType])
                                for (d = a.firstChild; a = d;) d = a.nextSibling, 8 === a.nodeType && c(a)
                        }
                        var d = p.a.e.I(),
                            f = {
                                1: !0,
                                8: !0,
                                9: !0
                            },
                            g = {
                                1: !0,
                                9: !0
                            };
                        return {
                            oa: function(a, c) {
                                if ("function" != typeof c) throw Error("Callback must be a function");
                                b(a, !0).push(c)
                            },
                            pc: function(c, e) {
                                var f = b(c, !1);
                                f && (p.a.La(f, e), 0 == f.length && p.a.e.set(c, d, a))
                            },
                            $: function(a) {
                                if (f[a.nodeType] && (c(a), g[a.nodeType])) {
                                    var b = [];
                                    p.a.ra(b, a.getElementsByTagName("*"));
                                    for (var d = 0, e = b.length; e > d; d++) c(b[d])
                                }
                                return a
                            },
                            removeNode: function(a) {
                                p.$(a), a.parentNode && a.parentNode.removeChild(a)
                            },
                            cleanExternalData: function(a) {
                                e && "function" == typeof e.cleanData && e.cleanData([a])
                            }
                        }
                    }, p.$ = p.a.F.$, p.removeNode = p.a.F.removeNode, p.b("cleanNode", p.$), p.b("removeNode", p.removeNode), p.b("utils.domNodeDisposal", p.a.F), p.b("utils.domNodeDisposal.addDisposeCallback", p.a.F.oa), p.b("utils.domNodeDisposal.removeDisposeCallback", p.a.F.pc),
                    function() {
                        var d = [0, "", ""],
                            f = [1, "<table>", "</table>"],
                            g = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            h = [1, "<select multiple='multiple'>", "</select>"],
                            i = {
                                thead: f,
                                tbody: f,
                                tfoot: f,
                                tr: [2, "<table><tbody>", "</tbody></table>"],
                                td: g,
                                th: g,
                                option: h,
                                optgroup: h
                            },
                            j = 8 >= p.a.C;
                        p.a.ma = function(a, f) {
                            var g;
                            if (e) {
                                if (e.parseHTML) g = e.parseHTML(a, f) || [];
                                else if ((g = e.clean([a], f)) && g[0]) {
                                    for (var h = g[0]; h.parentNode && 11 !== h.parentNode.nodeType;) h = h.parentNode;
                                    h.parentNode && h.parentNode.removeChild(h)
                                }
                            } else {
                                (g = f) || (g = c);
                                var k, h = g.parentWindow || g.defaultView || b,
                                    l = p.a.$a(a).toLowerCase(),
                                    m = g.createElement("div");
                                for (k = (l = l.match(/^<([a-z]+)[ >]/)) && i[l[1]] || d, l = k[0], k = "ignored<div>" + k[1] + a + k[2] + "</div>", "function" == typeof h.innerShiv ? m.appendChild(h.innerShiv(k)) : (j && g.appendChild(m), m.innerHTML = k, j && m.parentNode.removeChild(m)); l--;) m = m.lastChild;
                                g = p.a.V(m.lastChild.childNodes)
                            }
                            return g
                        }, p.a.Cb = function(b, c) {
                            if (p.a.ob(b), c = p.a.c(c), null !== c && c !== a)
                                if ("string" != typeof c && (c = c.toString()), e) e(b).html(c);
                                else
                                    for (var d = p.a.ma(c, b.ownerDocument), f = 0; f < d.length; f++) b.appendChild(d[f])
                        }
                    }(), p.b("utils.parseHtmlFragment", p.a.ma), p.b("utils.setHtml", p.a.Cb), p.M = function() {
                        function b(a, c) {
                            if (a)
                                if (8 == a.nodeType) {
                                    var d = p.M.lc(a.nodeValue);
                                    null != d && c.push({
                                        Lc: a,
                                        cd: d
                                    })
                                } else if (1 == a.nodeType)
                                for (var d = 0, e = a.childNodes, f = e.length; f > d; d++) b(e[d], c)
                        }
                        var c = {};
                        return {
                            wb: function(a) {
                                if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
                                var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                                return c[b] = a, "<!--[ko_memo:" + b + "]-->"
                            },
                            xc: function(b, d) {
                                var e = c[b];
                                if (e === a) throw Error("Couldn't find any memo with ID " + b + ". Perhaps it's already been unmemoized.");
                                try {
                                    return e.apply(null, d || []), !0
                                } finally {
                                    delete c[b]
                                }
                            },
                            yc: function(a, c) {
                                var d = [];
                                b(a, d);
                                for (var e = 0, f = d.length; f > e; e++) {
                                    var g = d[e].Lc,
                                        h = [g];
                                    c && p.a.ra(h, c), p.M.xc(d[e].cd, h), g.nodeValue = "", g.parentNode && g.parentNode.removeChild(g)
                                }
                            },
                            lc: function(a) {
                                return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null
                            }
                        }
                    }(), p.b("memoization", p.M), p.b("memoization.memoize", p.M.wb), p.b("memoization.unmemoize", p.M.xc), p.b("memoization.parseMemoText", p.M.lc), p.b("memoization.unmemoizeDomNodeAndDescendants", p.M.yc), p.Y = function() {
                        function a() {
                            if (f)
                                for (var a, b = f, c = 0; f > h;)
                                    if (a = e[h++]) {
                                        if (h > b) {
                                            if (5e3 <= ++c) {
                                                h = f, p.a.$b(Error("'Too much recursion' after processing " + c + " task groups."));
                                                break
                                            }
                                            b = f
                                        }
                                        try {
                                            a()
                                        } catch (d) {
                                            p.a.$b(d)
                                        }
                                    }
                        }

                        function d() {
                            a(), h = f = e.length = 0
                        }
                        var e = [],
                            f = 0,
                            g = 1,
                            h = 0;
                        return {
                            scheduler: b.MutationObserver ? function(a) {
                                var b = c.createElement("div");
                                return new MutationObserver(a).observe(b, {
                                        attributes: !0
                                    }),
                                    function() {
                                        b.classList.toggle("foo")
                                    }
                            }(d) : c && "onreadystatechange" in c.createElement("script") ? function(a) {
                                var b = c.createElement("script");
                                b.onreadystatechange = function() {
                                    b.onreadystatechange = null, c.documentElement.removeChild(b), b = null, a()
                                }, c.documentElement.appendChild(b)
                            } : function(a) {
                                setTimeout(a, 0)
                            },
                            Wa: function(a) {
                                return f || p.Y.scheduler(d), e[f++] = a, g++
                            },
                            cancel: function(a) {
                                a -= g - f, a >= h && f > a && (e[a] = null)
                            },
                            resetForTesting: function() {
                                var a = f - h;
                                return h = f = e.length = 0, a
                            },
                            md: a
                        }
                    }(), p.b("tasks", p.Y), p.b("tasks.schedule", p.Y.Wa), p.b("tasks.runEarly", p.Y.md), p.ya = {
                        throttle: function(a, b) {
                            a.throttleEvaluation = b;
                            var c = null;
                            return p.B({
                                read: a,
                                write: function(d) {
                                    clearTimeout(c), c = p.a.setTimeout(function() {
                                        a(d)
                                    }, b)
                                }
                            })
                        },
                        rateLimit: function(a, b) {
                            var c, d, e;
                            "number" == typeof b ? c = b : (c = b.timeout, d = b.method), a.cb = !1, e = "notifyWhenChangesStop" == d ? k : j, a.Ta(function(a) {
                                return e(a, c)
                            })
                        },
                        deferred: function(b, c) {
                            if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                            b.cb || (b.cb = !0, b.Ta(function(c) {
                                var d;
                                return function() {
                                    p.Y.cancel(d), d = p.Y.Wa(c), b.notifySubscribers(a, "dirty")
                                }
                            }))
                        },
                        notify: function(a, b) {
                            a.equalityComparer = "always" == b ? null : i
                        }
                    };
                var q = {
                    undefined: 1,
                    "boolean": 1,
                    number: 1,
                    string: 1
                };
                p.b("extenders", p.ya), p.vc = function(a, b, c) {
                    this.ia = a, this.gb = b, this.Kc = c, this.R = !1, p.G(this, "dispose", this.k)
                }, p.vc.prototype.k = function() {
                    this.R = !0, this.Kc()
                }, p.J = function() {
                    p.a.Ya(this, s), s.rb(this)
                };
                var r = "change",
                    s = {
                        rb: function(a) {
                            a.K = {}, a.Nb = 1
                        },
                        X: function(a, b, c) {
                            var d = this;
                            c = c || r;
                            var e = new p.vc(d, b ? a.bind(b) : a, function() {
                                p.a.La(d.K[c], e), d.Ia && d.Ia(c)
                            });
                            return d.sa && d.sa(c), d.K[c] || (d.K[c] = []), d.K[c].push(e), e
                        },
                        notifySubscribers: function(a, b) {
                            if (b = b || r, b === r && this.zc(), this.Pa(b)) try {
                                p.l.Ub();
                                for (var c, d = this.K[b].slice(0), e = 0; c = d[e]; ++e) c.R || c.gb(a)
                            } finally {
                                p.l.end()
                            }
                        },
                        Na: function() {
                            return this.Nb
                        },
                        Uc: function(a) {
                            return this.Na() !== a
                        },
                        zc: function() {
                            ++this.Nb
                        },
                        Ta: function(a) {
                            var b, c, d, e = this,
                                f = p.H(e);
                            e.Ha || (e.Ha = e.notifySubscribers, e.notifySubscribers = l);
                            var g = a(function() {
                                e.Mb = !1, f && d === e && (d = e()), b = !1, e.tb(c, d) && e.Ha(c = d)
                            });
                            e.Lb = function(a) {
                                e.Mb = b = !0, d = a, g()
                            }, e.Kb = function(a) {
                                b || (c = a, e.Ha(a, "beforeChange"))
                            }
                        },
                        Pa: function(a) {
                            return this.K[a] && this.K[a].length
                        },
                        Sc: function(a) {
                            if (a) return this.K[a] && this.K[a].length || 0;
                            var b = 0;
                            return p.a.D(this.K, function(a, c) {
                                "dirty" !== a && (b += c.length)
                            }), b
                        },
                        tb: function(a, b) {
                            return !this.equalityComparer || !this.equalityComparer(a, b)
                        },
                        extend: function(a) {
                            var b = this;
                            return a && p.a.D(a, function(a, c) {
                                var d = p.ya[a];
                                "function" == typeof d && (b = d(b, c) || b)
                            }), b
                        }
                    };
                p.G(s, "subscribe", s.X), p.G(s, "extend", s.extend), p.G(s, "getSubscriptionsCount", s.Sc), p.a.ka && p.a.Xa(s, Function.prototype), p.J.fn = s, p.hc = function(a) {
                    return null != a && "function" == typeof a.X && "function" == typeof a.notifySubscribers
                }, p.b("subscribable", p.J), p.b("isSubscribable", p.hc), p.va = p.l = function() {
                    function a(a) {
                        d.push(c), c = a
                    }

                    function b() {
                        c = d.pop()
                    }
                    var c, d = [],
                        e = 0;
                    return {
                        Ub: a,
                        end: b,
                        oc: function(a) {
                            if (c) {
                                if (!p.hc(a)) throw Error("Only subscribable things can act as dependencies");
                                c.gb.call(c.Gc, a, a.Cc || (a.Cc = ++e))
                            }
                        },
                        w: function(c, d, e) {
                            try {
                                return a(), c.apply(d, e || [])
                            } finally {
                                b()
                            }
                        },
                        Aa: function() {
                            return c ? c.m.Aa() : void 0
                        },
                        Sa: function() {
                            return c ? c.Sa : void 0
                        }
                    }
                }(), p.b("computedContext", p.va), p.b("computedContext.getDependenciesCount", p.va.Aa), p.b("computedContext.isInitial", p.va.Sa), p.b("ignoreDependencies", p.qd = p.l.w);
                var t = p.a.Yb("_latestValue");
                p.N = function(a) {
                    function b() {
                        return 0 < arguments.length ? (b.tb(b[t], arguments[0]) && (b.ga(), b[t] = arguments[0], b.fa()), this) : (p.l.oc(b), b[t])
                    }
                    return b[t] = a, p.a.ka || p.a.extend(b, p.J.fn), p.J.fn.rb(b), p.a.Ya(b, u), p.options.deferUpdates && p.ya.deferred(b, !0), b
                };
                var u = {
                    equalityComparer: i,
                    t: function() {
                        return this[t]
                    },
                    fa: function() {
                        this.notifySubscribers(this[t])
                    },
                    ga: function() {
                        this.notifySubscribers(this[t], "beforeChange")
                    }
                };
                p.a.ka && p.a.Xa(u, p.J.fn);
                var v = p.N.gd = "__ko_proto__";
                u[v] = p.N, p.Oa = function(b, c) {
                    return null === b || b === a || b[v] === a ? !1 : b[v] === c ? !0 : p.Oa(b[v], c)
                }, p.H = function(a) {
                    return p.Oa(a, p.N)
                }, p.Ba = function(a) {
                    return "function" == typeof a && a[v] === p.N || "function" == typeof a && a[v] === p.B && a.Vc ? !0 : !1
                }, p.b("observable", p.N), p.b("isObservable", p.H), p.b("isWriteableObservable", p.Ba), p.b("isWritableObservable", p.Ba), p.b("observable.fn", u), p.G(u, "peek", u.t), p.G(u, "valueHasMutated", u.fa), p.G(u, "valueWillMutate", u.ga), p.la = function(a) {
                    if (a = a || [], "object" != typeof a || !("length" in a)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                    return a = p.N(a), p.a.Ya(a, p.la.fn), a.extend({
                        trackArrayChanges: !0
                    })
                }, p.la.fn = {
                    remove: function(a) {
                        for (var b = this.t(), c = [], d = "function" != typeof a || p.H(a) ? function(b) {
                                return b === a
                            } : a, e = 0; e < b.length; e++) {
                            var f = b[e];
                            d(f) && (0 === c.length && this.ga(), c.push(f), b.splice(e, 1), e--)
                        }
                        return c.length && this.fa(), c
                    },
                    removeAll: function(b) {
                        if (b === a) {
                            var c = this.t(),
                                d = c.slice(0);
                            return this.ga(), c.splice(0, c.length), this.fa(), d
                        }
                        return b ? this.remove(function(a) {
                            return 0 <= p.a.o(b, a)
                        }) : []
                    },
                    destroy: function(a) {
                        var b = this.t(),
                            c = "function" != typeof a || p.H(a) ? function(b) {
                                return b === a
                            } : a;
                        this.ga();
                        for (var d = b.length - 1; d >= 0; d--) c(b[d]) && (b[d]._destroy = !0);
                        this.fa()
                    },
                    destroyAll: function(b) {
                        return b === a ? this.destroy(function() {
                            return !0
                        }) : b ? this.destroy(function(a) {
                            return 0 <= p.a.o(b, a)
                        }) : []
                    },
                    indexOf: function(a) {
                        var b = this();
                        return p.a.o(b, a)
                    },
                    replace: function(a, b) {
                        var c = this.indexOf(a);
                        c >= 0 && (this.ga(), this.t()[c] = b, this.fa())
                    }
                }, p.a.ka && p.a.Xa(p.la.fn, p.N.fn), p.a.q("pop push reverse shift sort splice unshift".split(" "), function(a) {
                    p.la.fn[a] = function() {
                        var b = this.t();
                        this.ga(), this.Vb(b, a, arguments);
                        var c = b[a].apply(b, arguments);
                        return this.fa(), c === b ? this : c
                    }
                }), p.a.q(["slice"], function(a) {
                    p.la.fn[a] = function() {
                        var b = this();
                        return b[a].apply(b, arguments)
                    }
                }), p.b("observableArray", p.la), p.ya.trackArrayChanges = function(a, b) {
                    function c() {
                        if (!e) {
                            e = !0;
                            var b = a.notifySubscribers;
                            a.notifySubscribers = function(a, c) {
                                return c && c !== r || ++g, b.apply(this, arguments)
                            };
                            var c = [].concat(a.t() || []);
                            f = null, d = a.X(function(b) {
                                if (b = [].concat(b || []), a.Pa("arrayChange")) {
                                    var d;
                                    (!f || g > 1) && (f = p.a.ib(c, b, a.hb)), d = f
                                }
                                c = b, f = null, g = 0, d && d.length && a.notifySubscribers(d, "arrayChange")
                            })
                        }
                    }
                    if (a.hb = {}, b && "object" == typeof b && p.a.extend(a.hb, b), a.hb.sparse = !0, !a.Vb) {
                        var d, e = !1,
                            f = null,
                            g = 0,
                            h = a.sa,
                            i = a.Ia;
                        a.sa = function(b) {
                            h && h.call(a, b), "arrayChange" === b && c()
                        }, a.Ia = function(b) {
                            i && i.call(a, b), "arrayChange" !== b || a.Pa("arrayChange") || (d.k(), e = !1)
                        }, a.Vb = function(a, b, c) {
                            function d(a, b, c) {
                                return h[h.length] = {
                                    status: a,
                                    value: b,
                                    index: c
                                }
                            }
                            if (e && !g) {
                                var h = [],
                                    i = a.length,
                                    j = c.length,
                                    k = 0;
                                switch (b) {
                                    case "push":
                                        k = i;
                                    case "unshift":
                                        for (b = 0; j > b; b++) d("added", c[b], k + b);
                                        break;
                                    case "pop":
                                        k = i - 1;
                                    case "shift":
                                        i && d("deleted", a[k], k);
                                        break;
                                    case "splice":
                                        b = Math.min(Math.max(0, 0 > c[0] ? i + c[0] : c[0]), i);
                                        for (var i = 1 === j ? i : Math.min(b + (c[1] || 0), i), j = b + j - 2, k = Math.max(i, j), l = [], m = [], n = 2; k > b; ++b, ++n) i > b && m.push(d("deleted", a[b], b)), j > b && l.push(d("added", c[n], b));
                                        p.a.dc(m, l);
                                        break;
                                    default:
                                        return
                                }
                                f = h
                            }
                        }
                    }
                };
                var w = p.a.Yb("_state");
                p.m = p.B = function(b, c, d) {
                    function e() {
                        if (0 < arguments.length) {
                            if ("function" != typeof f) throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                            return f.apply(g.pb, arguments), this
                        }
                        return p.l.oc(e), (g.S || g.s && e.Qa()) && e.aa(), g.T
                    }
                    if ("object" == typeof b ? d = b : (d = d || {}, b && (d.read = b)), "function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");
                    var f = d.write,
                        g = {
                            T: a,
                            S: !0,
                            Ra: !1,
                            Fb: !1,
                            R: !1,
                            Va: !1,
                            s: !1,
                            jd: d.read,
                            pb: c || d.owner,
                            i: d.disposeWhenNodeIsRemoved || d.i || null,
                            wa: d.disposeWhen || d.wa,
                            mb: null,
                            r: {},
                            L: 0,
                            bc: null
                        };
                    return e[w] = g, e.Vc = "function" == typeof f, p.a.ka || p.a.extend(e, p.J.fn), p.J.fn.rb(e), p.a.Ya(e, x), d.pure ? (g.Va = !0, g.s = !0, p.a.extend(e, y)) : d.deferEvaluation && p.a.extend(e, z), p.options.deferUpdates && p.ya.deferred(e, !0), g.i && (g.Fb = !0, g.i.nodeType || (g.i = null)), g.s || d.deferEvaluation || e.aa(), g.i && e.ba() && p.a.F.oa(g.i, g.mb = function() {
                        e.k()
                    }), e
                };
                var x = {
                        equalityComparer: i,
                        Aa: function() {
                            return this[w].L
                        },
                        Pb: function(a, b, c) {
                            if (this[w].Va && b === this) throw Error("A 'pure' computed must not be called recursively");
                            this[w].r[a] = c, c.Ga = this[w].L++, c.na = b.Na()
                        },
                        Qa: function() {
                            var a, b, c = this[w].r;
                            for (a in c)
                                if (c.hasOwnProperty(a) && (b = c[a], b.ia.Uc(b.na))) return !0
                        },
                        bd: function() {
                            this.Fa && !this[w].Ra && this.Fa()
                        },
                        ba: function() {
                            return this[w].S || 0 < this[w].L
                        },
                        ld: function() {
                            this.Mb || this.ac()
                        },
                        uc: function(a) {
                            if (a.cb && !this[w].i) {
                                var b = a.X(this.bd, this, "dirty"),
                                    c = a.X(this.ld, this);
                                return {
                                    ia: a,
                                    k: function() {
                                        b.k(), c.k()
                                    }
                                }
                            }
                            return a.X(this.ac, this)
                        },
                        ac: function() {
                            var a = this,
                                b = a.throttleEvaluation;
                            b && b >= 0 ? (clearTimeout(this[w].bc), this[w].bc = p.a.setTimeout(function() {
                                a.aa(!0)
                            }, b)) : a.Fa ? a.Fa() : a.aa(!0)
                        },
                        aa: function(a) {
                            var b = this[w],
                                c = b.wa;
                            if (!b.Ra && !b.R) {
                                if (b.i && !p.a.nb(b.i) || c && c()) {
                                    if (!b.Fb) return void this.k()
                                } else b.Fb = !1;
                                b.Ra = !0;
                                try {
                                    this.Qc(a)
                                } finally {
                                    b.Ra = !1
                                }
                                b.L || this.k()
                            }
                        },
                        Qc: function(b) {
                            var c = this[w],
                                d = c.Va ? a : !c.L,
                                e = {
                                    Hc: this,
                                    Ma: c.r,
                                    lb: c.L
                                };
                            p.l.Ub({
                                Gc: e,
                                gb: n,
                                m: this,
                                Sa: d
                            }), c.r = {}, c.L = 0, e = this.Pc(c, e), this.tb(c.T, e) && (c.s || this.notifySubscribers(c.T, "beforeChange"), c.T = e, c.s ? this.zc() : b && this.notifySubscribers(c.T)), d && this.notifySubscribers(c.T, "awake")
                        },
                        Pc: function(a, b) {
                            try {
                                var c = a.jd;
                                return a.pb ? c.call(a.pb) : c()
                            } finally {
                                p.l.end(), b.lb && !a.s && p.a.D(b.Ma, m), a.S = !1
                            }
                        },
                        t: function() {
                            var a = this[w];
                            return (a.S && !a.L || a.s && this.Qa()) && this.aa(), a.T
                        },
                        Ta: function(a) {
                            p.J.fn.Ta.call(this, a), this.Fa = function() {
                                this.Kb(this[w].T), this[w].S = !0, this.Lb(this)
                            }
                        },
                        k: function() {
                            var a = this[w];
                            !a.s && a.r && p.a.D(a.r, function(a, b) {
                                b.k && b.k()
                            }), a.i && a.mb && p.a.F.pc(a.i, a.mb), a.r = null, a.L = 0, a.R = !0, a.S = !1, a.s = !1, a.i = null
                        }
                    },
                    y = {
                        sa: function(a) {
                            var b = this,
                                c = b[w];
                            if (!c.R && c.s && "change" == a) {
                                if (c.s = !1, c.S || b.Qa()) c.r = null, c.L = 0, c.S = !0, b.aa();
                                else {
                                    var d = [];
                                    p.a.D(c.r, function(a, b) {
                                        d[b.Ga] = a
                                    }), p.a.q(d, function(a, d) {
                                        var e = c.r[a],
                                            f = b.uc(e.ia);
                                        f.Ga = d, f.na = e.na, c.r[a] = f
                                    })
                                }
                                c.R || b.notifySubscribers(c.T, "awake")
                            }
                        },
                        Ia: function(b) {
                            var c = this[w];
                            c.R || "change" != b || this.Pa("change") || (p.a.D(c.r, function(a, b) {
                                b.k && (c.r[a] = {
                                    ia: b.ia,
                                    Ga: b.Ga,
                                    na: b.na
                                }, b.k())
                            }), c.s = !0, this.notifySubscribers(a, "asleep"))
                        },
                        Na: function() {
                            var a = this[w];
                            return a.s && (a.S || this.Qa()) && this.aa(), p.J.fn.Na.call(this)
                        }
                    },
                    z = {
                        sa: function(a) {
                            "change" != a && "beforeChange" != a || this.t()
                        }
                    };
                p.a.ka && p.a.Xa(x, p.J.fn);
                var A = p.N.gd;
                p.m[A] = p.N, x[A] = p.m, p.Xc = function(a) {
                        return p.Oa(a, p.m)
                    }, p.Yc = function(a) {
                        return p.Oa(a, p.m) && a[w] && a[w].Va
                    }, p.b("computed", p.m), p.b("dependentObservable", p.m), p.b("isComputed", p.Xc), p.b("isPureComputed", p.Yc), p.b("computed.fn", x), p.G(x, "peek", x.t), p.G(x, "dispose", x.k), p.G(x, "isActive", x.ba), p.G(x, "getDependenciesCount", x.Aa), p.nc = function(a, b) {
                        return "function" == typeof a ? p.m(a, b, {
                            pure: !0
                        }) : (a = p.a.extend({}, a), a.pure = !0, p.m(a, b))
                    }, p.b("pureComputed", p.nc),
                    function() {
                        function b(e, f, g) {
                            if (g = g || new d, e = f(e), "object" != typeof e || null === e || e === a || e instanceof RegExp || e instanceof Date || e instanceof String || e instanceof Number || e instanceof Boolean) return e;
                            var h = e instanceof Array ? [] : {};
                            return g.save(e, h), c(e, function(c) {
                                var d = f(e[c]);
                                switch (typeof d) {
                                    case "boolean":
                                    case "number":
                                    case "string":
                                    case "function":
                                        h[c] = d;
                                        break;
                                    case "object":
                                    case "undefined":
                                        var i = g.get(d);
                                        h[c] = i !== a ? i : b(d, f, g)
                                }
                            }), h
                        }

                        function c(a, b) {
                            if (a instanceof Array) {
                                for (var c = 0; c < a.length; c++) b(c);
                                "function" == typeof a.toJSON && b("toJSON")
                            } else
                                for (c in a) b(c)
                        }

                        function d() {
                            this.keys = [], this.Ib = []
                        }
                        p.wc = function(a) {
                            if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                            return b(a, function(a) {
                                for (var b = 0; p.H(a) && 10 > b; b++) a = a();
                                return a
                            })
                        }, p.toJSON = function(a, b, c) {
                            return a = p.wc(a), p.a.Eb(a, b, c)
                        }, d.prototype = {
                            save: function(a, b) {
                                var c = p.a.o(this.keys, a);
                                c >= 0 ? this.Ib[c] = b : (this.keys.push(a), this.Ib.push(b))
                            },
                            get: function(b) {
                                return b = p.a.o(this.keys, b), b >= 0 ? this.Ib[b] : a
                            }
                        }
                    }(), p.b("toJS", p.wc), p.b("toJSON", p.toJSON),
                    function() {
                        p.j = {
                            u: function(b) {
                                switch (p.a.A(b)) {
                                    case "option":
                                        return !0 === b.__ko__hasDomDataOptionValue__ ? p.a.e.get(b, p.d.options.xb) : 7 >= p.a.C ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                                    case "select":
                                        return 0 <= b.selectedIndex ? p.j.u(b.options[b.selectedIndex]) : a;
                                    default:
                                        return b.value
                                }
                            },
                            ha: function(b, c, d) {
                                switch (p.a.A(b)) {
                                    case "option":
                                        switch (typeof c) {
                                            case "string":
                                                p.a.e.set(b, p.d.options.xb, a), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c;
                                                break;
                                            default:
                                                p.a.e.set(b, p.d.options.xb, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" == typeof c ? c : ""
                                        }
                                        break;
                                    case "select":
                                        ("" === c || null === c) && (c = a);
                                        for (var e, f = -1, g = 0, h = b.options.length; h > g; ++g)
                                            if (e = p.j.u(b.options[g]), e == c || "" == e && c === a) {
                                                f = g;
                                                break
                                            }(d || f >= 0 || c === a && 1 < b.size) && (b.selectedIndex = f);
                                        break;
                                    default:
                                        (null === c || c === a) && (c = ""), b.value = c
                                }
                            }
                        }
                    }(), p.b("selectExtensions", p.j), p.b("selectExtensions.readValue", p.j.u), p.b("selectExtensions.writeValue", p.j.ha), p.h = function() {
                        function a(a) {
                            a = p.a.$a(a), 123 === a.charCodeAt(0) && (a = a.slice(1, -1));
                            var b, c = [],
                                g = a.match(d),
                                h = [],
                                i = 0;
                            if (g) {
                                g.push(",");
                                for (var j, k = 0; j = g[k]; ++k) {
                                    var l = j.charCodeAt(0);
                                    if (44 === l) {
                                        if (0 >= i) {
                                            c.push(b && h.length ? {
                                                key: b,
                                                value: h.join("")
                                            } : {
                                                unknown: b || h.join("")
                                            }), b = i = 0, h = [];
                                            continue
                                        }
                                    } else if (58 === l) {
                                        if (!i && !b && 1 === h.length) {
                                            b = h.pop();
                                            continue
                                        }
                                    } else 47 === l && k && 1 < j.length ? (l = g[k - 1].match(e)) && !f[l[0]] && (a = a.substr(a.indexOf(j) + 1), g = a.match(d), g.push(","), k = -1, j = "/") : 40 === l || 123 === l || 91 === l ? ++i : 41 === l || 125 === l || 93 === l ? --i : b || h.length || 34 !== l && 39 !== l || (j = j.slice(1, -1));
                                    h.push(j)
                                }
                            }
                            return c
                        }
                        var b = ["true", "false", "null", "undefined"],
                            c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                            d = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                            e = /[\])"'A-Za-z0-9_$]+$/,
                            f = {
                                "in": 1,
                                "return": 1,
                                "typeof": 1
                            },
                            g = {};
                        return {
                            ta: [],
                            ea: g,
                            yb: a,
                            Ua: function(d, e) {
                                function f(a, d) {
                                    var e;
                                    if (!k) {
                                        var l = p.getBindingHandler(a);
                                        if (l && l.preprocess && !(d = l.preprocess(d, a, f))) return;
                                        (l = g[a]) && (e = d, 0 <= p.a.o(b, e) ? e = !1 : (l = e.match(c), e = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : e), l = e), l && i.push("'" + a + "':function(_z){" + e + "=_z}")
                                    }
                                    j && (d = "function(){return " + d + " }"), h.push("'" + a + "':" + d)
                                }
                                e = e || {};
                                var h = [],
                                    i = [],
                                    j = e.valueAccessors,
                                    k = e.bindingParams,
                                    l = "string" == typeof d ? a(d) : d;
                                return p.a.q(l, function(a) {
                                    f(a.key || a.unknown, a.value)
                                }), i.length && f("_ko_property_writers", "{" + i.join(",") + " }"), h.join(",")
                            },
                            ad: function(a, b) {
                                for (var c = 0; c < a.length; c++)
                                    if (a[c].key == b) return !0;
                                return !1
                            },
                            Ea: function(a, b, c, d, e) {
                                a && p.H(a) ? !p.Ba(a) || e && a.t() === d || a(d) : (a = b.get("_ko_property_writers")) && a[c] && a[c](d)
                            }
                        }
                    }(), p.b("expressionRewriting", p.h), p.b("expressionRewriting.bindingRewriteValidators", p.h.ta), p.b("expressionRewriting.parseObjectLiteral", p.h.yb), p.b("expressionRewriting.preProcessBindings", p.h.Ua), p.b("expressionRewriting._twoWayBindings", p.h.ea), p.b("jsonExpressionRewriting", p.h), p.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", p.h.Ua),
                    function() {
                        function a(a) {
                            return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue)
                        }

                        function b(a) {
                            return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue)
                        }

                        function d(c, d) {
                            for (var e = c, f = 1, g = []; e = e.nextSibling;) {
                                if (b(e) && (f--, 0 === f)) return g;
                                g.push(e), a(e) && f++
                            }
                            if (!d) throw Error("Cannot find closing comment tag to match: " + c.nodeValue);
                            return null
                        }

                        function e(a, b) {
                            var c = d(a, b);
                            return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null
                        }
                        var f = c && "<!--test-->" === c.createComment("test").text,
                            g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                            h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                            i = {
                                ul: !0,
                                ol: !0
                            };
                        p.f = {
                            Z: {},
                            childNodes: function(b) {
                                return a(b) ? d(b) : b.childNodes
                            },
                            xa: function(b) {
                                if (a(b)) {
                                    b = p.f.childNodes(b);
                                    for (var c = 0, d = b.length; d > c; c++) p.removeNode(b[c])
                                } else p.a.ob(b)
                            },
                            da: function(b, c) {
                                if (a(b)) {
                                    p.f.xa(b);
                                    for (var d = b.nextSibling, e = 0, f = c.length; f > e; e++) d.parentNode.insertBefore(c[e], d)
                                } else p.a.da(b, c)
                            },
                            mc: function(b, c) {
                                a(b) ? b.parentNode.insertBefore(c, b.nextSibling) : b.firstChild ? b.insertBefore(c, b.firstChild) : b.appendChild(c)
                            },
                            gc: function(b, c, d) {
                                d ? a(b) ? b.parentNode.insertBefore(c, d.nextSibling) : d.nextSibling ? b.insertBefore(c, d.nextSibling) : b.appendChild(c) : p.f.mc(b, c)
                            },
                            firstChild: function(c) {
                                return a(c) ? !c.nextSibling || b(c.nextSibling) ? null : c.nextSibling : c.firstChild
                            },
                            nextSibling: function(c) {
                                return a(c) && (c = e(c)), c.nextSibling && b(c.nextSibling) ? null : c.nextSibling
                            },
                            Tc: a,
                            pd: function(a) {
                                return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null
                            },
                            kc: function(c) {
                                if (i[p.a.A(c)]) {
                                    var d = c.firstChild;
                                    if (d)
                                        do
                                            if (1 === d.nodeType) {
                                                var f;
                                                f = d.firstChild;
                                                var g = null;
                                                if (f)
                                                    do
                                                        if (g) g.push(f);
                                                        else if (a(f)) {
                                                    var h = e(f, !0);
                                                    h ? f = h : g = [f]
                                                } else b(f) && (g = [f]);
                                                while (f = f.nextSibling);
                                                if (f = g)
                                                    for (g = d.nextSibling, h = 0; h < f.length; h++) g ? c.insertBefore(f[h], g) : c.appendChild(f[h])
                                            } while (d = d.nextSibling)
                                }
                            }
                        }
                    }(), p.b("virtualElements", p.f), p.b("virtualElements.allowedBindings", p.f.Z), p.b("virtualElements.emptyNode", p.f.xa), p.b("virtualElements.insertAfter", p.f.gc), p.b("virtualElements.prepend", p.f.mc), p.b("virtualElements.setDomNodeChildren", p.f.da),
                    function() {
                        p.Q = function() {
                            this.Fc = {}
                        }, p.a.extend(p.Q.prototype, {
                            nodeHasBindings: function(a) {
                                switch (a.nodeType) {
                                    case 1:
                                        return null != a.getAttribute("data-bind") || p.g.getComponentNameForNode(a);
                                    case 8:
                                        return p.f.Tc(a);
                                    default:
                                        return !1
                                }
                            },
                            getBindings: function(a, b) {
                                var c = this.getBindingsString(a, b),
                                    c = c ? this.parseBindingsString(c, b, a) : null;
                                return p.g.Ob(c, a, b, !1)
                            },
                            getBindingAccessors: function(a, b) {
                                var c = this.getBindingsString(a, b),
                                    c = c ? this.parseBindingsString(c, b, a, {
                                        valueAccessors: !0
                                    }) : null;
                                return p.g.Ob(c, a, b, !0)
                            },
                            getBindingsString: function(a) {
                                switch (a.nodeType) {
                                    case 1:
                                        return a.getAttribute("data-bind");
                                    case 8:
                                        return p.f.pd(a);
                                    default:
                                        return null
                                }
                            },
                            parseBindingsString: function(a, b, c, d) {
                                try {
                                    var e, f = this.Fc,
                                        g = a + (d && d.valueAccessors || "");
                                    if (!(e = f[g])) {
                                        var h, i = "with($context){with($data||{}){return{" + p.h.Ua(a, d) + "}}}";
                                        h = new Function("$context", "$element", i), e = f[g] = h
                                    }
                                    return e(b, c)
                                } catch (j) {
                                    throw j.message = "Unable to parse bindings.\nBindings value: " + a + "\nMessage: " + j.message, j
                                }
                            }
                        }), p.Q.instance = new p.Q
                    }(), p.b("bindingProvider", p.Q),
                    function() {
                        function c(a) {
                            return function() {
                                return a
                            }
                        }

                        function d(a) {
                            return a()
                        }

                        function f(a) {
                            return p.a.Ca(p.l.w(a), function(b, c) {
                                return function() {
                                    return a()[c]
                                }
                            })
                        }

                        function g(a, b, d) {
                            return "function" == typeof a ? f(a.bind(null, b, d)) : p.a.Ca(a, c)
                        }

                        function h(a, b) {
                            return f(this.getBindings.bind(this, a, b))
                        }

                        function i(a, b, c) {
                            var d, e = p.f.firstChild(b),
                                f = p.Q.instance,
                                g = f.preprocessNode;
                            if (g) {
                                for (; d = e;) e = p.f.nextSibling(d), g.call(f, d);
                                e = p.f.firstChild(b)
                            }
                            for (; d = e;) e = p.f.nextSibling(d), j(a, d, c)
                        }

                        function j(a, b, c) {
                            var d = !0,
                                e = 1 === b.nodeType;
                            e && p.f.kc(b), (e && c || p.Q.instance.nodeHasBindings(b)) && (d = l(b, null, a, c).shouldBindDescendants), d && !n[p.a.A(b)] && i(a, b, !e)
                        }

                        function k(a) {
                            var b = [],
                                c = {},
                                d = [];
                            return p.a.D(a, function e(f) {
                                if (!c[f]) {
                                    var g = p.getBindingHandler(f);
                                    g && (g.after && (d.push(f), p.a.q(g.after, function(b) {
                                        if (a[b]) {
                                            if (-1 !== p.a.o(d, b)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + d.join(", "));
                                            e(b)
                                        }
                                    }), d.length--), b.push({
                                        key: f,
                                        fc: g
                                    })), c[f] = !0
                                }
                            }), b
                        }

                        function l(b, c, e, f) {
                            var g = p.a.e.get(b, o);
                            if (!c) {
                                if (g) throw Error("You cannot apply bindings multiple times to the same element.");
                                p.a.e.set(b, o, !0)
                            }!g && f && p.tc(b, e);
                            var i;
                            if (c && "function" != typeof c) i = c;
                            else {
                                var j = p.Q.instance,
                                    l = j.getBindingAccessors || h,
                                    m = p.B(function() {
                                        return (i = c ? c(e, b) : l.call(j, b, e)) && e.P && e.P(), i
                                    }, null, {
                                        i: b
                                    });
                                i && m.ba() || (m = null)
                            }
                            var n;
                            if (i) {
                                var q = m ? function(a) {
                                        return function() {
                                            return d(m()[a])
                                        }
                                    } : function(a) {
                                        return i[a]
                                    },
                                    r = function() {
                                        return p.a.Ca(m ? m() : i, d)
                                    };
                                r.get = function(a) {
                                    return i[a] && d(q(a))
                                }, r.has = function(a) {
                                    return a in i
                                }, f = k(i), p.a.q(f, function(c) {
                                    var d = c.fc.init,
                                        f = c.fc.update,
                                        g = c.key;
                                    if (8 === b.nodeType && !p.f.Z[g]) throw Error("The binding '" + g + "' cannot be used with virtual elements");
                                    try {
                                        "function" == typeof d && p.l.w(function() {
                                            var c = d(b, q(g), r, e.$data, e);
                                            if (c && c.controlsDescendantBindings) {
                                                if (n !== a) throw Error("Multiple bindings (" + n + " and " + g + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                                n = g
                                            }
                                        }), "function" == typeof f && p.B(function() {
                                            f(b, q(g), r, e.$data, e)
                                        }, null, {
                                            i: b
                                        })
                                    } catch (h) {
                                        throw h.message = 'Unable to process binding "' + g + ": " + i[g] + '"\nMessage: ' + h.message, h
                                    }
                                })
                            }
                            return {
                                shouldBindDescendants: n === a
                            }
                        }

                        function m(a) {
                            return a && a instanceof p.U ? a : new p.U(a)
                        }
                        p.d = {};
                        var n = {
                            script: !0,
                            textarea: !0,
                            template: !0
                        };
                        p.getBindingHandler = function(a) {
                            return p.d[a]
                        }, p.U = function(b, c, d, e) {
                            var f, g = this,
                                h = "function" == typeof b && !p.H(b),
                                i = p.B(function() {
                                    var a = h ? b() : b,
                                        f = p.a.c(a);
                                    return c ? (c.P && c.P(), p.a.extend(g, c), i && (g.P = i)) : (g.$parents = [], g.$root = f, g.ko = p), g.$rawData = a, g.$data = f, d && (g[d] = f), e && e(g, c, f), g.$data
                                }, null, {
                                    wa: function() {
                                        return f && !p.a.Qb(f)
                                    },
                                    i: !0
                                });
                            i.ba() && (g.P = i, i.equalityComparer = null, f = [], i.Ac = function(b) {
                                f.push(b), p.a.F.oa(b, function(b) {
                                    p.a.La(f, b), f.length || (i.k(), g.P = i = a)
                                })
                            })
                        }, p.U.prototype.createChildContext = function(a, b, c) {
                            return new p.U(a, this, b, function(a, b) {
                                a.$parentContext = b, a.$parent = b.$data, a.$parents = (b.$parents || []).slice(0), a.$parents.unshift(a.$parent), c && c(a)
                            })
                        }, p.U.prototype.extend = function(a) {
                            return new p.U(this.P || this.$data, this, null, function(b, c) {
                                b.$rawData = c.$rawData, p.a.extend(b, "function" == typeof a ? a() : a)
                            })
                        };
                        var o = p.a.e.I(),
                            q = p.a.e.I();
                        p.tc = function(a, b) {
                            return 2 != arguments.length ? p.a.e.get(a, q) : (p.a.e.set(a, q, b), void(b.P && b.P.Ac(a)))
                        }, p.Ja = function(a, b, c) {
                            return 1 === a.nodeType && p.f.kc(a), l(a, b, m(c), !0)
                        }, p.Dc = function(a, b, c) {
                            return c = m(c), p.Ja(a, g(b, c, a), c)
                        }, p.eb = function(a, b) {
                            1 !== b.nodeType && 8 !== b.nodeType || i(m(a), b, !0)
                        }, p.Rb = function(a, c) {
                            if (!e && b.jQuery && (e = b.jQuery), c && 1 !== c.nodeType && 8 !== c.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            c = c || b.document.body, j(m(a), c, !0)
                        }, p.kb = function(b) {
                            switch (b.nodeType) {
                                case 1:
                                case 8:
                                    var c = p.tc(b);
                                    if (c) return c;
                                    if (b.parentNode) return p.kb(b.parentNode)
                            }
                            return a
                        }, p.Jc = function(b) {
                            return (b = p.kb(b)) ? b.$data : a
                        }, p.b("bindingHandlers", p.d), p.b("applyBindings", p.Rb), p.b("applyBindingsToDescendants", p.eb), p.b("applyBindingAccessorsToNode", p.Ja), p.b("applyBindingsToNode", p.Dc), p.b("contextFor", p.kb), p.b("dataFor", p.Jc)
                    }(),
                    function(a) {
                        function b(b, d) {
                            var g, h = e.hasOwnProperty(b) ? e[b] : a;
                            h ? h.X(d) : (h = e[b] = new p.J, h.X(d), c(b, function(a, c) {
                                var d = !(!c || !c.synchronous);
                                f[b] = {
                                    definition: a,
                                    Zc: d
                                }, delete e[b], g || d ? h.notifySubscribers(a) : p.Y.Wa(function() {
                                    h.notifySubscribers(a)
                                })
                            }), g = !0)
                        }

                        function c(a, b) {
                            d("getConfig", [a], function(c) {
                                c ? d("loadComponent", [a, c], function(a) {
                                    b(a, c)
                                }) : b(null, null)
                            })
                        }

                        function d(b, c, e, f) {
                            f || (f = p.g.loaders.slice(0));
                            var g = f.shift();
                            if (g) {
                                var h = g[b];
                                if (h) {
                                    var i = !1;
                                    if (h.apply(g, c.concat(function(a) {
                                            i ? e(null) : null !== a ? e(a) : d(b, c, e, f)
                                        })) !== a && (i = !0, !g.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                                } else d(b, c, e, f)
                            } else e(null)
                        }
                        var e = {},
                            f = {};
                        p.g = {
                            get: function(c, d) {
                                var e = f.hasOwnProperty(c) ? f[c] : a;
                                e ? e.Zc ? p.l.w(function() {
                                    d(e.definition)
                                }) : p.Y.Wa(function() {
                                    d(e.definition)
                                }) : b(c, d)
                            },
                            Xb: function(a) {
                                delete f[a]
                            },
                            Jb: d
                        }, p.g.loaders = [], p.b("components", p.g), p.b("components.get", p.g.get), p.b("components.clearCachedDefinition", p.g.Xb)
                    }(),
                    function() {
                        function a(a, b, c, d) {
                            function e() {
                                0 === --h && d(f)
                            }
                            var f = {},
                                h = 2,
                                i = c.template;
                            c = c.viewModel, i ? g(b, i, function(b) {
                                p.g.Jb("loadTemplate", [a, b], function(a) {
                                    f.template = a, e()
                                })
                            }) : e(), c ? g(b, c, function(b) {
                                p.g.Jb("loadViewModel", [a, b], function(a) {
                                    f[k] = a, e()
                                })
                            }) : e()
                        }

                        function d(a, b, c) {
                            if ("function" == typeof b) c(function(a) {
                                return new b(a)
                            });
                            else if ("function" == typeof b[k]) c(b[k]);
                            else if ("instance" in b) {
                                var e = b.instance;
                                c(function() {
                                    return e
                                })
                            } else "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b)
                        }

                        function e(a) {
                            switch (p.a.A(a)) {
                                case "script":
                                    return p.a.ma(a.text);
                                case "textarea":
                                    return p.a.ma(a.value);
                                case "template":
                                    if (f(a.content)) return p.a.ua(a.content.childNodes)
                            }
                            return p.a.ua(a.childNodes)
                        }

                        function f(a) {
                            return b.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType
                        }

                        function g(a, c, d) {
                            "string" == typeof c.require ? h || b.require ? (h || b.require)([c.require], d) : a("Uses require, but no AMD loader is present") : d(c)
                        }

                        function i(a) {
                            return function(b) {
                                throw Error("Component '" + a + "': " + b)
                            }
                        }
                        var j = {};
                        p.g.register = function(a, b) {
                            if (!b) throw Error("Invalid configuration for " + a);
                            if (p.g.ub(a)) throw Error("Component " + a + " is already registered");
                            j[a] = b
                        }, p.g.ub = function(a) {
                            return j.hasOwnProperty(a)
                        }, p.g.od = function(a) {
                            delete j[a], p.g.Xb(a)
                        }, p.g.Zb = {
                            getConfig: function(a, b) {
                                b(j.hasOwnProperty(a) ? j[a] : null)
                            },
                            loadComponent: function(b, c, d) {
                                var e = i(b);
                                g(e, c, function(c) {
                                    a(b, e, c, d)
                                })
                            },
                            loadTemplate: function(a, d, g) {
                                if (a = i(a), "string" == typeof d) g(p.a.ma(d));
                                else if (d instanceof Array) g(d);
                                else if (f(d)) g(p.a.V(d.childNodes));
                                else if (d.element)
                                    if (d = d.element, b.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType) g(e(d));
                                    else if ("string" == typeof d) {
                                    var h = c.getElementById(d);
                                    h ? g(e(h)) : a("Cannot find element with ID " + d)
                                } else a("Unknown element type: " + d);
                                else a("Unknown template value: " + d)
                            },
                            loadViewModel: function(a, b, c) {
                                d(i(a), b, c)
                            }
                        };
                        var k = "createViewModel";
                        p.b("components.register", p.g.register), p.b("components.isRegistered", p.g.ub), p.b("components.unregister", p.g.od), p.b("components.defaultLoader", p.g.Zb), p.g.loaders.push(p.g.Zb), p.g.Bc = j
                    }(),
                    function() {
                        function a(a, c) {
                            var d = a.getAttribute("params");
                            if (d) {
                                var d = b.parseBindingsString(d, c, a, {
                                        valueAccessors: !0,
                                        bindingParams: !0
                                    }),
                                    d = p.a.Ca(d, function(b) {
                                        return p.m(b, null, {
                                            i: a
                                        })
                                    }),
                                    e = p.a.Ca(d, function(b) {
                                        var c = b.t();
                                        return b.ba() ? p.m({
                                            read: function() {
                                                return p.a.c(b())
                                            },
                                            write: p.Ba(c) && function(a) {
                                                b()(a)
                                            },
                                            i: a
                                        }) : c
                                    });
                                return e.hasOwnProperty("$raw") || (e.$raw = d), e
                            }
                            return {
                                $raw: {}
                            }
                        }
                        p.g.getComponentNameForNode = function(a) {
                            var b = p.a.A(a);
                            return p.g.ub(b) && (-1 != b.indexOf("-") || "[object HTMLUnknownElement]" == "" + a || 8 >= p.a.C && a.tagName === b) ? b : void 0
                        }, p.g.Ob = function(b, c, d, e) {
                            if (1 === c.nodeType) {
                                var f = p.g.getComponentNameForNode(c);
                                if (f) {
                                    if (b = b || {}, b.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                                    var g = {
                                        name: f,
                                        params: a(c, d)
                                    };
                                    b.component = e ? function() {
                                        return g
                                    } : g
                                }
                            }
                            return b
                        };
                        var b = new p.Q;
                        9 > p.a.C && (p.g.register = function(a) {
                            return function(b) {
                                return c.createElement(b), a.apply(this, arguments)
                            }
                        }(p.g.register), c.createDocumentFragment = function(a) {
                            return function() {
                                var b, c = a(),
                                    d = p.g.Bc;
                                for (b in d) d.hasOwnProperty(b) && c.createElement(b);
                                return c
                            }
                        }(c.createDocumentFragment))
                    }(),
                    function(a) {
                        function b(a, b, c) {
                            if (b = b.template, !b) throw Error("Component '" + a + "' has no template");
                            a = p.a.ua(b), p.f.da(c, a)
                        }

                        function c(a, b, c, d) {
                            var e = a.createViewModel;
                            return e ? e.call(a, d, {
                                element: b,
                                templateNodes: c
                            }) : d
                        }
                        var d = 0;
                        p.d.component = {
                            init: function(e, f, g, h, i) {
                                function j() {
                                    var a = k && k.dispose;
                                    "function" == typeof a && a.call(k), l = k = null
                                }
                                var k, l, m = p.a.V(p.f.childNodes(e));
                                return p.a.F.oa(e, j), p.m(function() {
                                    var g, h, n = p.a.c(f());
                                    if ("string" == typeof n ? g = n : (g = p.a.c(n.name), h = p.a.c(n.params)), !g) throw Error("No component name specified");
                                    var o = l = ++d;
                                    p.g.get(g, function(d) {
                                        if (l === o) {
                                            if (j(), !d) throw Error("Unknown component '" + g + "'");
                                            b(g, d, e);
                                            var f = c(d, e, m, h);
                                            d = i.createChildContext(f, a, function(a) {
                                                a.$component = f, a.$componentTemplateNodes = m
                                            }), k = f, p.eb(d, e)
                                        }
                                    })
                                }, null, {
                                    i: e
                                }), {
                                    controlsDescendantBindings: !0
                                }
                            }
                        }, p.f.Z.component = !0
                    }();
                var B = {
                    "class": "className",
                    "for": "htmlFor"
                };
                p.d.attr = {
                        update: function(b, c) {
                            var d = p.a.c(c()) || {};
                            p.a.D(d, function(c, d) {
                                d = p.a.c(d);
                                var e = !1 === d || null === d || d === a;
                                e && b.removeAttribute(c), 8 >= p.a.C && c in B ? (c = B[c], e ? b.removeAttribute(c) : b[c] = d) : e || b.setAttribute(c, d.toString()), "name" === c && p.a.rc(b, e ? "" : d.toString())
                            })
                        }
                    },
                    function() {
                        p.d.checked = {
                            after: ["value", "attr"],
                            init: function(b, c, d) {
                                function e() {
                                    var a = b.checked,
                                        e = n ? g() : a;
                                    if (!p.va.Sa() && (!i || a)) {
                                        var f = p.l.w(c);
                                        if (k) {
                                            var h = l ? f.t() : f;
                                            m !== e ? (a && (p.a.pa(h, e, !0), p.a.pa(h, m, !1)), m = e) : p.a.pa(h, e, a), l && p.Ba(f) && f(h)
                                        } else p.h.Ea(f, d, "checked", e, !0)
                                    }
                                }

                                function f() {
                                    var a = p.a.c(c());
                                    b.checked = k ? 0 <= p.a.o(a, g()) : h ? a : g() === a
                                }
                                var g = p.nc(function() {
                                        return d.has("checkedValue") ? p.a.c(d.get("checkedValue")) : d.has("value") ? p.a.c(d.get("value")) : b.value
                                    }),
                                    h = "checkbox" == b.type,
                                    i = "radio" == b.type;
                                if (h || i) {
                                    var j = c(),
                                        k = h && p.a.c(j) instanceof Array,
                                        l = !(k && j.push && j.splice),
                                        m = k ? g() : a,
                                        n = i || k;
                                    i && !b.name && p.d.uniqueName.init(b, function() {
                                        return !0
                                    }), p.m(e, null, {
                                        i: b
                                    }), p.a.p(b, "click", e), p.m(f, null, {
                                        i: b
                                    }), j = a
                                }
                            }
                        }, p.h.ea.checked = !0, p.d.checkedValue = {
                            update: function(a, b) {
                                a.value = p.a.c(b())
                            }
                        }
                    }(), p.d.css = {
                        update: function(a, b) {
                            var c = p.a.c(b());
                            null !== c && "object" == typeof c ? p.a.D(c, function(b, c) {
                                c = p.a.c(c), p.a.bb(a, b, c)
                            }) : (c = p.a.$a(String(c || "")), p.a.bb(a, a.__ko__cssValue, !1), a.__ko__cssValue = c, p.a.bb(a, c, !0))
                        }
                    }, p.d.enable = {
                        update: function(a, b) {
                            var c = p.a.c(b());
                            c && a.disabled ? a.removeAttribute("disabled") : c || a.disabled || (a.disabled = !0)
                        }
                    }, p.d.disable = {
                        update: function(a, b) {
                            p.d.enable.update(a, function() {
                                return !p.a.c(b())
                            })
                        }
                    }, p.d.event = {
                        init: function(a, b, c, d, e) {
                            var f = b() || {};
                            p.a.D(f, function(f) {
                                "string" == typeof f && p.a.p(a, f, function(a) {
                                    var g, h = b()[f];
                                    if (h) {
                                        try {
                                            var i = p.a.V(arguments);
                                            d = e.$data, i.unshift(d), g = h.apply(d, i)
                                        } finally {
                                            !0 !== g && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                                        }!1 === c.get(f + "Bubble") && (a.cancelBubble = !0, a.stopPropagation && a.stopPropagation())
                                    }
                                })
                            })
                        }
                    }, p.d.foreach = {
                        ic: function(a) {
                            return function() {
                                var b = a(),
                                    c = p.a.zb(b);
                                return c && "number" != typeof c.length ? (p.a.c(b), {
                                    foreach: c.data,
                                    as: c.as,
                                    includeDestroyed: c.includeDestroyed,
                                    afterAdd: c.afterAdd,
                                    beforeRemove: c.beforeRemove,
                                    afterRender: c.afterRender,
                                    beforeMove: c.beforeMove,
                                    afterMove: c.afterMove,
                                    templateEngine: p.W.sb
                                }) : {
                                    foreach: b,
                                    templateEngine: p.W.sb
                                }
                            }
                        },
                        init: function(a, b) {
                            return p.d.template.init(a, p.d.foreach.ic(b))
                        },
                        update: function(a, b, c, d, e) {
                            return p.d.template.update(a, p.d.foreach.ic(b), c, d, e)
                        }
                    }, p.h.ta.foreach = !1, p.f.Z.foreach = !0, p.d.hasfocus = {
                        init: function(a, b, c) {
                            function d(d) {
                                a.__ko_hasfocusUpdating = !0;
                                var e = a.ownerDocument;
                                if ("activeElement" in e) {
                                    var f;
                                    try {
                                        f = e.activeElement
                                    } catch (g) {
                                        f = e.body
                                    }
                                    d = f === a
                                }
                                e = b(), p.h.Ea(e, c, "hasfocus", d, !0), a.__ko_hasfocusLastValue = d, a.__ko_hasfocusUpdating = !1
                            }
                            var e = d.bind(null, !0),
                                f = d.bind(null, !1);
                            p.a.p(a, "focus", e), p.a.p(a, "focusin", e), p.a.p(a, "blur", f), p.a.p(a, "focusout", f)
                        },
                        update: function(a, b) {
                            var c = !!p.a.c(b());
                            a.__ko_hasfocusUpdating || a.__ko_hasfocusLastValue === c || (c ? a.focus() : a.blur(), !c && a.__ko_hasfocusLastValue && a.ownerDocument.body.focus(), p.l.w(p.a.Da, null, [a, c ? "focusin" : "focusout"]))
                        }
                    }, p.h.ea.hasfocus = !0, p.d.hasFocus = p.d.hasfocus, p.h.ea.hasFocus = !0, p.d.html = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(a, b) {
                            p.a.Cb(a, b())
                        }
                    }, o("if"), o("ifnot", !1, !0), o("with", !0, !1, function(a, b) {
                        return a.createChildContext(b)
                    });
                var C = {};
                p.d.options = {
                        init: function(a) {
                            if ("select" !== p.a.A(a)) throw Error("options binding applies only to SELECT elements");
                            for (; 0 < a.length;) a.remove(0);
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(b, c, d) {
                            function e() {
                                return p.a.Ka(b.options, function(a) {
                                    return a.selected
                                })
                            }

                            function f(a, b, c) {
                                var d = typeof b;
                                return "function" == d ? b(a) : "string" == d ? a[b] : c
                            }

                            function g(a, c) {
                                if (o && k) p.j.ha(b, p.a.c(d.get("value")), !0);
                                else if (n.length) {
                                    var e = 0 <= p.a.o(n, p.j.u(c[0]));
                                    p.a.sc(c[0], e), o && !e && p.l.w(p.a.Da, null, [b, "change"])
                                }
                            }
                            var h = b.multiple,
                                i = 0 != b.length && h ? b.scrollTop : null,
                                j = p.a.c(c()),
                                k = d.get("valueAllowUnset") && d.has("value"),
                                l = d.get("optionsIncludeDestroyed");
                            c = {};
                            var m, n = [];
                            k || (h ? n = p.a.fb(e(), p.j.u) : 0 <= b.selectedIndex && n.push(p.j.u(b.options[b.selectedIndex]))), j && ("undefined" == typeof j.length && (j = [j]), m = p.a.Ka(j, function(b) {
                                return l || b === a || null === b || !p.a.c(b._destroy)
                            }), d.has("optionsCaption") && (j = p.a.c(d.get("optionsCaption")), null !== j && j !== a && m.unshift(C)));
                            var o = !1;
                            c.beforeRemove = function(a) {
                                b.removeChild(a)
                            }, j = g, d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (j = function(b, c) {
                                g(0, c), p.l.w(d.get("optionsAfterRender"), null, [c[0], b !== C ? b : a])
                            }), p.a.Bb(b, m, function(c, e, g) {
                                return g.length && (n = !k && g[0].selected ? [p.j.u(g[0])] : [], o = !0), e = b.ownerDocument.createElement("option"), c === C ? (p.a.Za(e, d.get("optionsCaption")), p.j.ha(e, a)) : (g = f(c, d.get("optionsValue"), c), p.j.ha(e, p.a.c(g)), c = f(c, d.get("optionsText"), g), p.a.Za(e, c)), [e]
                            }, c, j), p.l.w(function() {
                                k ? p.j.ha(b, p.a.c(d.get("value")), !0) : (h ? n.length && e().length < n.length : n.length && 0 <= b.selectedIndex ? p.j.u(b.options[b.selectedIndex]) !== n[0] : n.length || 0 <= b.selectedIndex) && p.a.Da(b, "change")
                            }), p.a.Nc(b), i && 20 < Math.abs(i - b.scrollTop) && (b.scrollTop = i)
                        }
                    }, p.d.options.xb = p.a.e.I(), p.d.selectedOptions = {
                        after: ["options", "foreach"],
                        init: function(a, b, c) {
                            p.a.p(a, "change", function() {
                                var d = b(),
                                    e = [];
                                p.a.q(a.getElementsByTagName("option"), function(a) {
                                    a.selected && e.push(p.j.u(a))
                                }), p.h.Ea(d, c, "selectedOptions", e)
                            })
                        },
                        update: function(a, b) {
                            if ("select" != p.a.A(a)) throw Error("values binding applies only to SELECT elements");
                            var c = p.a.c(b()),
                                d = a.scrollTop;
                            c && "number" == typeof c.length && p.a.q(a.getElementsByTagName("option"), function(a) {
                                var b = 0 <= p.a.o(c, p.j.u(a));
                                a.selected != b && p.a.sc(a, b)
                            }), a.scrollTop = d
                        }
                    }, p.h.ea.selectedOptions = !0, p.d.style = {
                        update: function(b, c) {
                            var d = p.a.c(c() || {});
                            p.a.D(d, function(c, d) {
                                d = p.a.c(d), (null === d || d === a || !1 === d) && (d = ""), b.style[c] = d
                            })
                        }
                    }, p.d.submit = {
                        init: function(a, b, c, d, e) {
                            if ("function" != typeof b()) throw Error("The value for a submit binding must be a function");
                            p.a.p(a, "submit", function(c) {
                                var d, f = b();
                                try {
                                    d = f.call(e.$data, a)
                                } finally {
                                    !0 !== d && (c.preventDefault ? c.preventDefault() : c.returnValue = !1)
                                }
                            })
                        }
                    }, p.d.text = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(a, b) {
                            p.a.Za(a, b())
                        }
                    }, p.f.Z.text = !0,
                    function() {
                        if (b && b.navigator) var c = function(a) {
                                return a ? parseFloat(a[1]) : void 0
                            },
                            d = b.opera && b.opera.version && parseInt(b.opera.version()),
                            e = b.navigator.userAgent,
                            f = c(e.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                            g = c(e.match(/Firefox\/([^ ]*)/));
                        if (10 > p.a.C) var h = p.a.e.I(),
                            i = p.a.e.I(),
                            j = function(a) {
                                var b = this.activeElement;
                                (b = b && p.a.e.get(b, i)) && b(a)
                            },
                            k = function(a, b) {
                                var c = a.ownerDocument;
                                p.a.e.get(c, h) || (p.a.e.set(c, h, !0), p.a.p(c, "selectionchange", j)), p.a.e.set(a, i, b)
                            };
                        p.d.textInput = {
                            init: function(b, c, e) {
                                function h(a, c) {
                                    p.a.p(b, a, c)
                                }

                                function i() {
                                    var d = p.a.c(c());
                                    (null === d || d === a) && (d = ""), n !== a && d === n ? p.a.setTimeout(i, 4) : b.value !== d && (o = d, b.value = d)
                                }

                                function j() {
                                    m || (n = b.value, m = p.a.setTimeout(l, 4))
                                }

                                function l() {
                                    clearTimeout(m), n = m = a;
                                    var d = b.value;
                                    o !== d && (o = d, p.h.Ea(c(), e, "textInput", d))
                                }
                                var m, n, o = b.value,
                                    q = 9 == p.a.C ? j : l;
                                10 > p.a.C ? (h("propertychange", function(a) {
                                    "value" === a.propertyName && q(a)
                                }), 8 == p.a.C && (h("keyup", l), h("keydown", l)), 8 <= p.a.C && (k(b, q), h("dragend", j))) : (h("input", l), 5 > f && "textarea" === p.a.A(b) ? (h("keydown", j), h("paste", j), h("cut", j)) : 11 > d ? h("keydown", j) : 4 > g && (h("DOMAutoComplete", l), h("dragdrop", l), h("drop", l))), h("change", l), p.m(i, null, {
                                    i: b
                                })
                            }
                        }, p.h.ea.textInput = !0, p.d.textinput = {
                            preprocess: function(a, b, c) {
                                c("textInput", a)
                            }
                        }
                    }(), p.d.uniqueName = {
                        init: function(a, b) {
                            if (b()) {
                                var c = "ko_unique_" + ++p.d.uniqueName.Ic;
                                p.a.rc(a, c)
                            }
                        }
                    }, p.d.uniqueName.Ic = 0, p.d.value = {
                        after: ["options", "foreach"],
                        init: function(a, b, c) {
                            if ("input" != a.tagName.toLowerCase() || "checkbox" != a.type && "radio" != a.type) {
                                var d = ["change"],
                                    e = c.get("valueUpdate"),
                                    f = !1,
                                    g = null;
                                e && ("string" == typeof e && (e = [e]), p.a.ra(d, e), d = p.a.Tb(d));
                                var h = function() {
                                    g = null, f = !1;
                                    var d = b(),
                                        e = p.j.u(a);
                                    p.h.Ea(d, c, "value", e)
                                };
                                !p.a.C || "input" != a.tagName.toLowerCase() || "text" != a.type || "off" == a.autocomplete || a.form && "off" == a.form.autocomplete || -1 != p.a.o(d, "propertychange") || (p.a.p(a, "propertychange", function() {
                                    f = !0
                                }), p.a.p(a, "focus", function() {
                                    f = !1
                                }), p.a.p(a, "blur", function() {
                                    f && h()
                                })), p.a.q(d, function(b) {
                                    var c = h;
                                    p.a.nd(b, "after") && (c = function() {
                                        g = p.j.u(a), p.a.setTimeout(h, 0)
                                    }, b = b.substring(5)), p.a.p(a, b, c)
                                });
                                var i = function() {
                                    var d = p.a.c(b()),
                                        e = p.j.u(a);
                                    if (null !== g && d === g) p.a.setTimeout(i, 0);
                                    else if (d !== e)
                                        if ("select" === p.a.A(a)) {
                                            var f = c.get("valueAllowUnset"),
                                                e = function() {
                                                    p.j.ha(a, d, f)
                                                };
                                            e(), f || d === p.j.u(a) ? p.a.setTimeout(e, 0) : p.l.w(p.a.Da, null, [a, "change"])
                                        } else p.j.ha(a, d)
                                };
                                p.m(i, null, {
                                    i: a
                                })
                            } else p.Ja(a, {
                                checkedValue: b
                            })
                        },
                        update: function() {}
                    }, p.h.ea.value = !0, p.d.visible = {
                        update: function(a, b) {
                            var c = p.a.c(b()),
                                d = "none" != a.style.display;
                            c && !d ? a.style.display = "" : !c && d && (a.style.display = "none")
                        }
                    },
                    function(a) {
                        p.d[a] = {
                            init: function(b, c, d, e, f) {
                                return p.d.event.init.call(this, b, function() {
                                    var b = {};
                                    return b[a] = c(), b
                                }, d, e, f)
                            }
                        }
                    }("click"), p.O = function() {}, p.O.prototype.renderTemplateSource = function() {
                        throw Error("Override renderTemplateSource")
                    }, p.O.prototype.createJavaScriptEvaluatorBlock = function() {
                        throw Error("Override createJavaScriptEvaluatorBlock")
                    }, p.O.prototype.makeTemplateSource = function(a, b) {
                        if ("string" == typeof a) {
                            b = b || c;
                            var d = b.getElementById(a);
                            if (!d) throw Error("Cannot find template with ID " + a);
                            return new p.v.n(d)
                        }
                        if (1 == a.nodeType || 8 == a.nodeType) return new p.v.qa(a);
                        throw Error("Unknown template type: " + a)
                    }, p.O.prototype.renderTemplate = function(a, b, c, d) {
                        return a = this.makeTemplateSource(a, d), this.renderTemplateSource(a, b, c, d)
                    }, p.O.prototype.isTemplateRewritten = function(a, b) {
                        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, b).data("isRewritten")
                    }, p.O.prototype.rewriteTemplate = function(a, b, c) {
                        a = this.makeTemplateSource(a, c), b = b(a.text()), a.text(b), a.data("isRewritten", !0)
                    }, p.b("templateEngine", p.O), p.Gb = function() {
                        function a(a, b, c, d) {
                            a = p.h.yb(a);
                            for (var e = p.h.ta, f = 0; f < a.length; f++) {
                                var g = a[f].key;
                                if (e.hasOwnProperty(g)) {
                                    var h = e[g];
                                    if ("function" == typeof h) {
                                        if (g = h(a[f].value)) throw Error(g)
                                    } else if (!h) throw Error("This template engine does not support the '" + g + "' binding within its templates")
                                }
                            }
                            return c = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + p.h.Ua(a, {
                                valueAccessors: !0
                            }) + " } })()},'" + c.toLowerCase() + "')", d.createJavaScriptEvaluatorBlock(c) + b
                        }
                        var b = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                            c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                        return {
                            Oc: function(a, b, c) {
                                b.isTemplateRewritten(a, c) || b.rewriteTemplate(a, function(a) {
                                    return p.Gb.dd(a, b)
                                }, c)
                            },
                            dd: function(d, e) {
                                return d.replace(b, function(b, c, d, f, g) {
                                    return a(g, c, d, e)
                                }).replace(c, function(b, c) {
                                    return a(c, "<!-- ko -->", "#comment", e)
                                })
                            },
                            Ec: function(a, b) {
                                return p.M.wb(function(c, d) {
                                    var e = c.nextSibling;
                                    e && e.nodeName.toLowerCase() === b && p.Ja(e, a, d)
                                })
                            }
                        }
                    }(), p.b("__tr_ambtns", p.Gb.Ec),
                    function() {
                        p.v = {}, p.v.n = function(a) {
                            if (this.n = a) {
                                var b = p.a.A(a);
                                this.ab = "script" === b ? 1 : "textarea" === b ? 2 : "template" == b && a.content && 11 === a.content.nodeType ? 3 : 4
                            }
                        }, p.v.n.prototype.text = function() {
                            var a = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
                            if (0 == arguments.length) return this.n[a];
                            var b = arguments[0];
                            "innerHTML" === a ? p.a.Cb(this.n, b) : this.n[a] = b
                        };
                        var b = p.a.e.I() + "_";
                        p.v.n.prototype.data = function(a) {
                            return 1 === arguments.length ? p.a.e.get(this.n, b + a) : void p.a.e.set(this.n, b + a, arguments[1])
                        };
                        var c = p.a.e.I();
                        p.v.n.prototype.nodes = function() {
                            var b = this.n;
                            return 0 == arguments.length ? (p.a.e.get(b, c) || {}).jb || (3 === this.ab ? b.content : 4 === this.ab ? b : a) : void p.a.e.set(b, c, {
                                jb: arguments[0]
                            })
                        }, p.v.qa = function(a) {
                            this.n = a
                        }, p.v.qa.prototype = new p.v.n, p.v.qa.prototype.text = function() {
                            if (0 == arguments.length) {
                                var b = p.a.e.get(this.n, c) || {};
                                return b.Hb === a && b.jb && (b.Hb = b.jb.innerHTML), b.Hb
                            }
                            p.a.e.set(this.n, c, {
                                Hb: arguments[0]
                            })
                        }, p.b("templateSources", p.v), p.b("templateSources.domElement", p.v.n), p.b("templateSources.anonymousTemplate", p.v.qa)
                    }(),
                    function() {
                        function b(a, b, c) {
                            var d;
                            for (b = p.f.nextSibling(b); a && (d = a) !== b;) a = p.f.nextSibling(d), c(d, a)
                        }

                        function c(a, c) {
                            if (a.length) {
                                var d = a[0],
                                    e = a[a.length - 1],
                                    f = d.parentNode,
                                    g = p.Q.instance,
                                    h = g.preprocessNode;
                                if (h) {
                                    if (b(d, e, function(a, b) {
                                            var c = a.previousSibling,
                                                f = h.call(g, a);
                                            f && (a === d && (d = f[0] || b), a === e && (e = f[f.length - 1] || c))
                                        }), a.length = 0, !d) return;
                                    d === e ? a.push(d) : (a.push(d, e), p.a.za(a, f))
                                }
                                b(d, e, function(a) {
                                    1 !== a.nodeType && 8 !== a.nodeType || p.Rb(c, a)
                                }), b(d, e, function(a) {
                                    1 !== a.nodeType && 8 !== a.nodeType || p.M.yc(a, [c])
                                }), p.a.za(a, f)
                            }
                        }

                        function d(a) {
                            return a.nodeType ? a : 0 < a.length ? a[0] : null
                        }

                        function e(a, b, e, f, h) {
                            h = h || {};
                            var i = (a && d(a) || e || {}).ownerDocument,
                                j = h.templateEngine || g;
                            if (p.Gb.Oc(e, j, i), e = j.renderTemplate(e, f, h, i), "number" != typeof e.length || 0 < e.length && "number" != typeof e[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                            switch (i = !1, b) {
                                case "replaceChildren":
                                    p.f.da(a, e), i = !0;
                                    break;
                                case "replaceNode":
                                    p.a.qc(a, e), i = !0;
                                    break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw Error("Unknown renderMode: " + b)
                            }
                            return i && (c(e, f), h.afterRender && p.l.w(h.afterRender, null, [e, f.$data])), e
                        }

                        function f(a, b, c) {
                            return p.H(a) ? a() : "function" == typeof a ? a(b, c) : a
                        }
                        var g;
                        p.Db = function(b) {
                            if (b != a && !(b instanceof p.O)) throw Error("templateEngine must inherit from ko.templateEngine");
                            g = b
                        }, p.Ab = function(b, c, h, i, j) {
                            if (h = h || {}, (h.templateEngine || g) == a) throw Error("Set a template engine before calling renderTemplate");
                            if (j = j || "replaceChildren", i) {
                                var k = d(i);
                                return p.B(function() {
                                    var a = c && c instanceof p.U ? c : new p.U(p.a.c(c)),
                                        g = f(b, a.$data, a),
                                        a = e(i, j, g, a, h);
                                    "replaceNode" == j && (i = a, k = d(i))
                                }, null, {
                                    wa: function() {
                                        return !k || !p.a.nb(k)
                                    },
                                    i: k && "replaceNode" == j ? k.parentNode : k
                                })
                            }
                            return p.M.wb(function(a) {
                                p.Ab(b, c, h, a, "replaceNode")
                            })
                        }, p.kd = function(b, d, g, h, i) {
                            function j(a, b) {
                                c(b, l), g.afterRender && g.afterRender(b, a), l = null
                            }

                            function k(a, c) {
                                l = i.createChildContext(a, g.as, function(a) {
                                    a.$index = c
                                });
                                var d = f(b, a, l);
                                return e(null, "ignoreTargetNode", d, l, g)
                            }
                            var l;
                            return p.B(function() {
                                var b = p.a.c(d) || [];
                                "undefined" == typeof b.length && (b = [b]), b = p.a.Ka(b, function(b) {
                                    return g.includeDestroyed || b === a || null === b || !p.a.c(b._destroy)
                                }), p.l.w(p.a.Bb, null, [h, b, k, g, j])
                            }, null, {
                                i: h
                            })
                        };
                        var h = p.a.e.I();
                        p.d.template = {
                            init: function(a, b) {
                                var c = p.a.c(b());
                                if ("string" == typeof c || c.name) p.f.xa(a);
                                else {
                                    if ("nodes" in c) {
                                        if (c = c.nodes || [], p.H(c)) throw Error('The "nodes" option must be a plain, non-observable array.')
                                    } else c = p.f.childNodes(a);
                                    c = p.a.jc(c), new p.v.qa(a).nodes(c)
                                }
                                return {
                                    controlsDescendantBindings: !0
                                }
                            },
                            update: function(b, c, d, e, f) {
                                var g, i = c();
                                c = p.a.c(i), d = !0, e = null, "string" == typeof c ? c = {} : (i = c.name, "if" in c && (d = p.a.c(c["if"])), d && "ifnot" in c && (d = !p.a.c(c.ifnot)), g = p.a.c(c.data)), "foreach" in c ? e = p.kd(i || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.createChildContext(g, c.as) : f, e = p.Ab(i || b, f, c, b)) : p.f.xa(b), f = e, (g = p.a.e.get(b, h)) && "function" == typeof g.k && g.k(), p.a.e.set(b, h, f && f.ba() ? f : a)
                            }
                        }, p.h.ta.template = function(a) {
                            return a = p.h.yb(a), 1 == a.length && a[0].unknown || p.h.ad(a, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                        }, p.f.Z.template = !0
                    }(), p.b("setTemplateEngine", p.Db), p.b("renderTemplate", p.Ab), p.a.dc = function(a, b, c) {
                        if (a.length && b.length) {
                            var d, e, f, g, h;
                            for (d = e = 0;
                                (!c || c > d) && (g = a[e]); ++e) {
                                for (f = 0; h = b[f]; ++f)
                                    if (g.value === h.value) {
                                        g.moved = h.index, h.moved = g.index, b.splice(f, 1), d = f = 0;
                                        break
                                    } d += f
                            }
                        }
                    }, p.a.ib = function() {
                        function a(a, b, c, d, e) {
                            var f, g, h, i, j, k = Math.min,
                                l = Math.max,
                                m = [],
                                n = a.length,
                                o = b.length,
                                q = o - n || 1,
                                r = n + o + 1;
                            for (f = 0; n >= f; f++)
                                for (i = h, m.push(h = []), j = k(o, f + q), g = l(0, f - 1); j >= g; g++) h[g] = g ? f ? a[f - 1] === b[g - 1] ? i[g - 1] : k(i[g] || r, h[g - 1] || r) + 1 : g + 1 : f + 1;
                            for (k = [], l = [], q = [], f = n, g = o; f || g;) o = m[f][g] - 1, g && o === m[f][g - 1] ? l.push(k[k.length] = {
                                status: c,
                                value: b[--g],
                                index: g
                            }) : f && o === m[f - 1][g] ? q.push(k[k.length] = {
                                status: d,
                                value: a[--f],
                                index: f
                            }) : (--g, --f, e.sparse || k.push({
                                status: "retained",
                                value: b[g]
                            }));
                            return p.a.dc(q, l, !e.dontLimitMoves && 10 * n), k.reverse()
                        }
                        return function(b, c, d) {
                            return d = "boolean" == typeof d ? {
                                dontLimitMoves: d
                            } : d || {}, b = b || [], c = c || [], b.length < c.length ? a(b, c, "added", "deleted", d) : a(c, b, "deleted", "added", d)
                        }
                    }(), p.b("utils.compareArrays", p.a.ib),
                    function() {
                        function b(b, c, d, e, f) {
                            var g = [],
                                h = p.B(function() {
                                    var a = c(d, f, p.a.za(g, b)) || [];
                                    0 < g.length && (p.a.qc(g, a), e && p.l.w(e, null, [d, a, f])), g.length = 0, p.a.ra(g, a)
                                }, null, {
                                    i: b,
                                    wa: function() {
                                        return !p.a.Qb(g)
                                    }
                                });
                            return {
                                ca: g,
                                B: h.ba() ? h : a
                            }
                        }
                        var c = p.a.e.I(),
                            d = p.a.e.I();
                        p.a.Bb = function(e, f, g, h, i) {
                            function j(a, b) {
                                v = m[b], s !== b && (y[a] = v), v.qb(s++), p.a.za(v.ca, e), q.push(v), u.push(v)
                            }

                            function k(a, b) {
                                if (a)
                                    for (var c = 0, d = b.length; d > c; c++) b[c] && p.a.q(b[c].ca, function(d) {
                                        a(d, c, b[c].ja)
                                    })
                            }
                            f = f || [], h = h || {};
                            var l = p.a.e.get(e, c) === a,
                                m = p.a.e.get(e, c) || [],
                                n = p.a.fb(m, function(a) {
                                    return a.ja
                                }),
                                o = p.a.ib(n, f, h.dontLimitMoves),
                                q = [],
                                r = 0,
                                s = 0,
                                t = [],
                                u = [];
                            f = [];
                            for (var v, w, x, y = [], n = [], z = 0; w = o[z]; z++) switch (x = w.moved, w.status) {
                                case "deleted":
                                    x === a && (v = m[r], v.B && (v.B.k(), v.B = a), p.a.za(v.ca, e).length && (h.beforeRemove && (q.push(v), u.push(v), v.ja === d ? v = null : f[z] = v), v && t.push.apply(t, v.ca))), r++;
                                    break;
                                case "retained":
                                    j(z, r++);
                                    break;
                                case "added":
                                    x !== a ? j(z, x) : (v = {
                                        ja: w.value,
                                        qb: p.N(s++)
                                    }, q.push(v), u.push(v), l || (n[z] = v))
                            }
                            p.a.e.set(e, c, q), k(h.beforeMove, y), p.a.q(t, h.beforeRemove ? p.$ : p.removeNode);
                            for (var A, z = 0, l = p.f.firstChild(e); v = u[z]; z++) {
                                for (v.ca || p.a.extend(v, b(e, g, v.ja, i, v.qb)), r = 0; o = v.ca[r]; l = o.nextSibling, A = o, r++) o !== l && p.f.gc(e, o, A);
                                !v.Wc && i && (i(v.ja, v.ca, v.qb), v.Wc = !0)
                            }
                            for (k(h.beforeRemove, f), z = 0; z < f.length; ++z) f[z] && (f[z].ja = d);
                            k(h.afterMove, y), k(h.afterAdd, n)
                        }
                    }(), p.b("utils.setDomNodeChildrenFromArrayMapping", p.a.Bb), p.W = function() {
                        this.allowTemplateRewriting = !1
                    }, p.W.prototype = new p.O, p.W.prototype.renderTemplateSource = function(a, b, c, d) {
                        return (b = (9 > p.a.C ? 0 : a.nodes) ? a.nodes() : null) ? p.a.V(b.cloneNode(!0).childNodes) : (a = a.text(), p.a.ma(a, d))
                    }, p.W.sb = new p.W, p.Db(p.W.sb), p.b("nativeTemplateEngine", p.W),
                    function() {
                        p.vb = function() {
                            var a = this.$c = function() {
                                if (!e || !e.tmpl) return 0;
                                try {
                                    if (0 <= e.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                                } catch (a) {}
                                return 1
                            }();
                            this.renderTemplateSource = function(b, d, f, g) {
                                if (g = g || c, f = f || {}, 2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                                var h = b.data("precompiled");
                                return h || (h = b.text() || "", h = e.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h)), b = [d.$data], d = e.extend({
                                    koBindingContext: d
                                }, f.templateOptions), d = e.tmpl(h, b, d), d.appendTo(g.createElement("div")), e.fragments = {}, d
                            }, this.createJavaScriptEvaluatorBlock = function(a) {
                                return "{{ko_code ((function() { return " + a + " })()) }}"
                            }, this.addTemplate = function(a, b) {
                                c.write("<script type='text/html' id='" + a + "'>" + b + "</script>")
                            }, a > 0 && (e.tmpl.tag.ko_code = {
                                open: "__.push($1 || '');"
                            }, e.tmpl.tag.ko_with = {
                                open: "with($1) {",
                                close: "} "
                            })
                        }, p.vb.prototype = new p.O;
                        var a = new p.vb;
                        0 < a.$c && p.Db(a), p.b("jqueryTmplTemplateEngine", p.vb)
                    }()
            })
        }()
    }(), ! function(a, b) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
    }(this, function() {
        "use strict";

        function a() {
            return Ud.apply(null, arguments)
        }

        function b(a) {
            Ud = a
        }

        function c(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }

        function d(a) {
            return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
        }

        function e(a, b) {
            var c, d = [];
            for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
            return d
        }

        function f(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }

        function g(a, b) {
            for (var c in b) f(b, c) && (a[c] = b[c]);
            return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
        }

        function h(a, b, c, d) {
            return Db(a, b, c, d, !0).utc()
        }

        function i() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function j(a) {
            return null == a._pf && (a._pf = i()), a._pf
        }

        function k(a) {
            if (null == a._isValid) {
                var b = j(a);
                a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
            }
            return a._isValid
        }

        function l(a) {
            var b = h(0 / 0);
            return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
        }

        function m(a) {
            return void 0 === a
        }

        function n(a, b) {
            var c, d, e;
            if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), Wd.length > 0)
                for (c in Wd) d = Wd[c], e = b[d], m(e) || (a[d] = e);
            return a
        }

        function o(b) {
            n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : 0 / 0), Xd === !1 && (Xd = !0, a.updateOffset(this), Xd = !1)
        }

        function p(a) {
            return a instanceof o || null != a && null != a._isAMomentObject
        }

        function q(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        }

        function r(a) {
            var b = +a,
                c = 0;
            return 0 !== b && isFinite(b) && (c = q(b)), c
        }

        function s(a, b, c) {
            var d, e = Math.min(a.length, b.length),
                f = Math.abs(a.length - b.length),
                g = 0;
            for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
            return g + f
        }

        function t() {}

        function u(a) {
            return a ? a.toLowerCase().replace("_", "-") : a
        }

        function v(a) {
            for (var b, c, d, e, f = 0; f < a.length;) {
                for (e = u(a[f]).split("-"), b = e.length, c = u(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                    if (d = w(e.slice(0, b).join("-"))) return d;
                    if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
                    b--
                }
                f++
            }
            return null
        }

        function w(a) {
            var b = null;
            if (!Yd[a] && "undefined" != typeof module && module && module.exports) try {
                b = Vd._abbr, require("./locale/" + a), x(b)
            } catch (c) {}
            return Yd[a]
        }

        function x(a, b) {
            var c;
            return a && (c = m(b) ? z(a) : y(a, b), c && (Vd = c)), Vd._abbr
        }

        function y(a, b) {
            return null !== b ? (b.abbr = a, Yd[a] = Yd[a] || new t, Yd[a].set(b), x(a), Yd[a]) : (delete Yd[a], null)
        }

        function z(a) {
            var b;
            if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Vd;
            if (!c(a)) {
                if (b = w(a)) return b;
                a = [a]
            }
            return v(a)
        }

        function A(a, b) {
            var c = a.toLowerCase();
            Zd[c] = Zd[c + "s"] = Zd[b] = a
        }

        function B(a) {
            return "string" == typeof a ? Zd[a] || Zd[a.toLowerCase()] : void 0
        }

        function C(a) {
            var b, c, d = {};
            for (c in a) f(a, c) && (b = B(c), b && (d[b] = a[c]));
            return d
        }

        function D(a) {
            return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
        }

        function E(b, c) {
            return function(d) {
                return null != d ? (G(this, b, d), a.updateOffset(this, c), this) : F(this, b)
            }
        }

        function F(a, b) {
            return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : 0 / 0
        }

        function G(a, b, c) {
            a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
        }

        function H(a, b) {
            var c;
            if ("object" == typeof a)
                for (c in a) this.set(c, a[c]);
            else if (a = B(a), D(this[a])) return this[a](b);
            return this
        }

        function I(a, b, c) {
            var d = "" + Math.abs(a),
                e = b - d.length,
                f = a >= 0;
            return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
        }

        function J(a, b, c, d) {
            var e = d;
            "string" == typeof d && (e = function() {
                return this[d]()
            }), a && (be[a] = e), b && (be[b[0]] = function() {
                return I(e.apply(this, arguments), b[1], b[2])
            }), c && (be[c] = function() {
                return this.localeData().ordinal(e.apply(this, arguments), a)
            })
        }

        function K(a) {
            return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
        }

        function L(a) {
            var b, c, d = a.match($d);
            for (b = 0, c = d.length; c > b; b++) d[b] = be[d[b]] ? be[d[b]] : K(d[b]);
            return function(e) {
                var f = "";
                for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                return f
            }
        }

        function M(a, b) {
            return a.isValid() ? (b = N(b, a.localeData()), ae[b] = ae[b] || L(b), ae[b](a)) : a.localeData().invalidDate()
        }

        function N(a, b) {
            function c(a) {
                return b.longDateFormat(a) || a
            }
            var d = 5;
            for (_d.lastIndex = 0; d >= 0 && _d.test(a);) a = a.replace(_d, c), _d.lastIndex = 0, d -= 1;
            return a
        }

        function O(a, b, c) {
            te[a] = D(b) ? b : function(a) {
                return a && c ? c : b
            }
        }

        function P(a, b) {
            return f(te, a) ? te[a](b._strict, b._locale) : new RegExp(Q(a))
        }

        function Q(a) {
            return R(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
                return b || c || d || e
            }))
        }

        function R(a) {
            return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function S(a, b) {
            var c, d = b;
            for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
                    c[b] = r(a)
                }), c = 0; c < a.length; c++) ue[a[c]] = d
        }

        function T(a, b) {
            S(a, function(a, c, d, e) {
                d._w = d._w || {}, b(a, d._w, d, e)
            })
        }

        function U(a, b, c) {
            null != b && f(ue, a) && ue[a](b, c._a, c, a)
        }

        function V(a, b) {
            return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
        }

        function W(a, b) {
            return c(this._months) ? this._months[a.month()] : this._months[Ee.test(b) ? "format" : "standalone"][a.month()]
        }

        function X(a, b) {
            return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Ee.test(b) ? "format" : "standalone"][a.month()]
        }

        function Y(a, b, c) {
            var d, e, f;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
                if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
                if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
                if (!c && this._monthsParse[d].test(a)) return d
            }
        }

        function Z(a, b) {
            var c;
            return a.isValid() ? "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), V(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a) : a
        }

        function $(b) {
            return null != b ? (Z(this, b), a.updateOffset(this, !0), this) : F(this, "Month")
        }

        function _() {
            return V(this.year(), this.month())
        }

        function ab(a) {
            return this._monthsParseExact ? (f(this, "_monthsRegex") || cb.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex
        }

        function bb(a) {
            return this._monthsParseExact ? (f(this, "_monthsRegex") || cb.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex
        }

        function cb() {
            function a(a, b) {
                return b.length - a.length
            }
            var b, c, d = [],
                e = [],
                f = [];
            for (b = 0; 12 > b; b++) c = h([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
            for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) d[b] = R(d[b]), e[b] = R(e[b]), f[b] = R(f[b]);
            this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")$", "i")
        }

        function db(a) {
            var b, c = a._a;
            return c && -2 === j(a).overflow && (b = c[we] < 0 || c[we] > 11 ? we : c[xe] < 1 || c[xe] > V(c[ve], c[we]) ? xe : c[ye] < 0 || c[ye] > 24 || 24 === c[ye] && (0 !== c[ze] || 0 !== c[Ae] || 0 !== c[Be]) ? ye : c[ze] < 0 || c[ze] > 59 ? ze : c[Ae] < 0 || c[Ae] > 59 ? Ae : c[Be] < 0 || c[Be] > 999 ? Be : -1, j(a)._overflowDayOfYear && (ve > b || b > xe) && (b = xe), j(a)._overflowWeeks && -1 === b && (b = Ce), j(a)._overflowWeekday && -1 === b && (b = De), j(a).overflow = b), a
        }

        function eb(b) {
            a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
        }

        function fb(a, b) {
            var c = !0;
            return g(function() {
                return c && (eb(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
            }, b)
        }

        function gb(a, b) {
            Je[a] || (eb(b), Je[a] = !0)
        }

        function hb(a) {
            var b, c, d, e, f, g, h = a._i,
                i = Ke.exec(h) || Le.exec(h);
            if (i) {
                for (j(a).iso = !0, b = 0, c = Ne.length; c > b; b++)
                    if (Ne[b][1].exec(i[1])) {
                        e = Ne[b][0], d = Ne[b][2] !== !1;
                        break
                    } if (null == e) return void(a._isValid = !1);
                if (i[3]) {
                    for (b = 0, c = Oe.length; c > b; b++)
                        if (Oe[b][1].exec(i[3])) {
                            f = (i[2] || " ") + Oe[b][0];
                            break
                        } if (null == f) return void(a._isValid = !1)
                }
                if (!d && null != f) return void(a._isValid = !1);
                if (i[4]) {
                    if (!Me.exec(i[4])) return void(a._isValid = !1);
                    g = "Z"
                }
                a._f = e + (f || "") + (g || ""), wb(a)
            } else a._isValid = !1
        }

        function ib(b) {
            var c = Pe.exec(b._i);
            return null !== c ? void(b._d = new Date(+c[1])) : (hb(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
        }

        function jb(a, b, c, d, e, f, g) {
            var h = new Date(a, b, c, d, e, f, g);
            return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
        }

        function kb(a) {
            var b = new Date(Date.UTC.apply(null, arguments));
            return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
        }

        function lb(a) {
            return mb(a) ? 366 : 365
        }

        function mb(a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        }

        function nb() {
            return mb(this.year())
        }

        function ob(a, b, c) {
            var d = 7 + b - c,
                e = (7 + kb(a, 0, d).getUTCDay() - b) % 7;
            return -e + d - 1
        }

        function pb(a, b, c, d, e) {
            var f, g, h = (7 + c - d) % 7,
                i = ob(a, d, e),
                j = 1 + 7 * (b - 1) + h + i;
            return 0 >= j ? (f = a - 1, g = lb(f) + j) : j > lb(a) ? (f = a + 1, g = j - lb(a)) : (f = a, g = j), {
                year: f,
                dayOfYear: g
            }
        }

        function qb(a, b, c) {
            var d, e, f = ob(a.year(), b, c),
                g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
            return 1 > g ? (e = a.year() - 1, d = g + rb(e, b, c)) : g > rb(a.year(), b, c) ? (d = g - rb(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
                week: d,
                year: e
            }
        }

        function rb(a, b, c) {
            var d = ob(a, b, c),
                e = ob(a + 1, b, c);
            return (lb(a) - d + e) / 7
        }

        function sb(a, b, c) {
            return null != a ? a : null != b ? b : c
        }

        function tb(b) {
            var c = new Date(a.now());
            return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
        }

        function ub(a) {
            var b, c, d, e, f = [];
            if (!a._d) {
                for (d = tb(a), a._w && null == a._a[xe] && null == a._a[we] && vb(a), a._dayOfYear && (e = sb(a._a[ve], d[ve]), a._dayOfYear > lb(e) && (j(a)._overflowDayOfYear = !0), c = kb(e, 0, a._dayOfYear), a._a[we] = c.getUTCMonth(), a._a[xe] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
                for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
                24 === a._a[ye] && 0 === a._a[ze] && 0 === a._a[Ae] && 0 === a._a[Be] && (a._nextDay = !0, a._a[ye] = 0), a._d = (a._useUTC ? kb : jb).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[ye] = 24)
            }
        }

        function vb(a) {
            var b, c, d, e, f, g, h, i;
            b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = sb(b.GG, a._a[ve], qb(Eb(), 1, 4).year), d = sb(b.W, 1), e = sb(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = sb(b.gg, a._a[ve], qb(Eb(), f, g).year), d = sb(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > rb(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = pb(c, d, e, f, g), a._a[ve] = h.year, a._dayOfYear = h.dayOfYear)
        }

        function wb(b) {
            if (b._f === a.ISO_8601) return void hb(b);
            b._a = [], j(b).empty = !0;
            var c, d, e, f, g, h = "" + b._i,
                i = h.length,
                k = 0;
            for (e = N(b._f, b._locale).match($d) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(P(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), be[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), U(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
            j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[ye] <= 12 && b._a[ye] > 0 && (j(b).bigHour = void 0), b._a[ye] = xb(b._locale, b._a[ye], b._meridiem), ub(b), db(b)
        }

        function xb(a, b, c) {
            var d;
            return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
        }

        function yb(a) {
            var b, c, d, e, f;
            if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(0 / 0));
            for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], wb(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
            g(a, c || b)
        }

        function zb(a) {
            if (!a._d) {
                var b = C(a._i);
                a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                    return a && parseInt(a, 10)
                }), ub(a)
            }
        }

        function Ab(a) {
            var b = new o(db(Bb(a)));
            return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
        }

        function Bb(a) {
            var b = a._i,
                e = a._f;
            return a._locale = a._locale || z(a._l), null === b || void 0 === e && "" === b ? l({
                nullInput: !0
            }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(db(b)) : (c(e) ? yb(a) : e ? wb(a) : d(b) ? a._d = b : Cb(a), k(a) || (a._d = null), a))
        }

        function Cb(b) {
            var f = b._i;
            void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ib(b) : c(f) ? (b._a = e(f.slice(0), function(a) {
                return parseInt(a, 10)
            }), ub(b)) : "object" == typeof f ? zb(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
        }

        function Db(a, b, c, d, e) {
            var f = {};
            return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, Ab(f)
        }

        function Eb(a, b, c, d) {
            return Db(a, b, c, d, !1)
        }

        function Fb(a, b) {
            var d, e;
            if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Eb();
            for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
            return d
        }

        function Gb() {
            var a = [].slice.call(arguments, 0);
            return Fb("isBefore", a)
        }

        function Hb() {
            var a = [].slice.call(arguments, 0);
            return Fb("isAfter", a)
        }

        function Ib(a) {
            var b = C(a),
                c = b.year || 0,
                d = b.quarter || 0,
                e = b.month || 0,
                f = b.week || 0,
                g = b.day || 0,
                h = b.hour || 0,
                i = b.minute || 0,
                j = b.second || 0,
                k = b.millisecond || 0;
            this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = z(), this._bubble()
        }

        function Jb(a) {
            return a instanceof Ib
        }

        function Kb(a, b) {
            J(a, 0, 0, function() {
                var a = this.utcOffset(),
                    c = "+";
                return 0 > a && (a = -a, c = "-"), c + I(~~(a / 60), 2) + b + I(~~a % 60, 2)
            })
        }

        function Lb(a, b) {
            var c = (b || "").match(a) || [],
                d = c[c.length - 1] || [],
                e = (d + "").match(Ue) || ["-", 0, 0],
                f = +(60 * e[1]) + r(e[2]);
            return "+" === e[0] ? f : -f
        }

        function Mb(b, c) {
            var e, f;
            return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? +b : +Eb(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Eb(b).local()
        }

        function Nb(a) {
            return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
        }

        function Ob(b, c) {
            var d, e = this._offset || 0;
            return this.isValid() ? null != b ? ("string" == typeof b ? b = Lb(qe, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Nb(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? cc(this, Zb(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Nb(this) : null != b ? this : 0 / 0
        }

        function Pb(a, b) {
            return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
        }

        function Qb(a) {
            return this.utcOffset(0, a)
        }

        function Rb(a) {
            return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Nb(this), "m")), this
        }

        function Sb() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Lb(pe, this._i)), this
        }

        function Tb(a) {
            return this.isValid() ? (a = a ? Eb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
        }

        function Ub() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Vb() {
            if (!m(this._isDSTShifted)) return this._isDSTShifted;
            var a = {};
            if (n(a, this), a = Bb(a), a._a) {
                var b = a._isUTC ? h(a._a) : Eb(a._a);
                this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Wb() {
            return this.isValid() ? !this._isUTC : !1
        }

        function Xb() {
            return this.isValid() ? this._isUTC : !1
        }

        function Yb() {
            return this.isValid() ? this._isUTC && 0 === this._offset : !1
        }

        function Zb(a, b) {
            var c, d, e, g = a,
                h = null;
            return Jb(a) ? g = {
                ms: a._milliseconds,
                d: a._days,
                M: a._months
            } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = Ve.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
                y: 0,
                d: r(h[xe]) * c,
                h: r(h[ye]) * c,
                m: r(h[ze]) * c,
                s: r(h[Ae]) * c,
                ms: r(h[Be]) * c
            }) : (h = We.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
                y: $b(h[2], c),
                M: $b(h[3], c),
                d: $b(h[4], c),
                h: $b(h[5], c),
                m: $b(h[6], c),
                s: $b(h[7], c),
                w: $b(h[8], c)
            }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = ac(Eb(g.from), Eb(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ib(g), Jb(a) && f(a, "_locale") && (d._locale = a._locale), d
        }

        function $b(a, b) {
            var c = a && parseFloat(a.replace(",", "."));
            return (isNaN(c) ? 0 : c) * b
        }

        function _b(a, b) {
            var c = {
                milliseconds: 0,
                months: 0
            };
            return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
        }

        function ac(a, b) {
            var c;
            return a.isValid() && b.isValid() ? (b = Mb(b, a), a.isBefore(b) ? c = _b(a, b) : (c = _b(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
                milliseconds: 0,
                months: 0
            }
        }

        function bc(a, b) {
            return function(c, d) {
                var e, f;
                return null === d || isNaN(+d) || (gb(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Zb(c, d), cc(this, e, a), this
            }
        }

        function cc(b, c, d, e) {
            var f = c._milliseconds,
                g = c._days,
                h = c._months;
            b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && G(b, "Date", F(b, "Date") + g * d), h && Z(b, F(b, "Month") + h * d), e && a.updateOffset(b, g || h))
        }

        function dc(a, b) {
            var c = a || Eb(),
                d = Mb(c, this).startOf("day"),
                e = this.diff(d, "days", !0),
                f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
                g = b && (D(b[f]) ? b[f]() : b[f]);
            return this.format(g || this.localeData().calendar(f, this, Eb(c)))
        }

        function ec() {
            return new o(this)
        }

        function fc(a, b) {
            var c = p(a) ? a : Eb(a);
            return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1
        }

        function gc(a, b) {
            var c = p(a) ? a : Eb(a);
            return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1
        }

        function hc(a, b, c) {
            return this.isAfter(a, c) && this.isBefore(b, c)
        }

        function ic(a, b) {
            var c, d = p(a) ? a : Eb(a);
            return this.isValid() && d.isValid() ? (b = B(b || "millisecond"), "millisecond" === b ? +this === +d : (c = +d, +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1
        }

        function jc(a, b) {
            return this.isSame(a, b) || this.isAfter(a, b)
        }

        function kc(a, b) {
            return this.isSame(a, b) || this.isBefore(a, b)
        }

        function lc(a, b, c) {
            var d, e, f, g;
            return this.isValid() ? (d = Mb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = B(b), "year" === b || "month" === b || "quarter" === b ? (g = mc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : q(g)) : 0 / 0) : 0 / 0
        }

        function mc(a, b) {
            var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
                f = a.clone().add(e, "months");
            return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
        }

        function nc() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function oc() {
            var a = this.clone().utc();
            return 0 < a.year() && a.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : M(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function pc(b) {
            var c = M(this, b || a.defaultFormat);
            return this.localeData().postformat(c)
        }

        function qc(a, b) {
            return this.isValid() && (p(a) && a.isValid() || Eb(a).isValid()) ? Zb({
                to: this,
                from: a
            }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
        }

        function rc(a) {
            return this.from(Eb(), a)
        }

        function sc(a, b) {
            return this.isValid() && (p(a) && a.isValid() || Eb(a).isValid()) ? Zb({
                from: this,
                to: a
            }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
        }

        function tc(a) {
            return this.to(Eb(), a)
        }

        function uc(a) {
            var b;
            return void 0 === a ? this._locale._abbr : (b = z(a), null != b && (this._locale = b), this)
        }

        function vc() {
            return this._locale
        }

        function wc(a) {
            switch (a = B(a)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function xc(a) {
            return a = B(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
        }

        function yc() {
            return +this._d - 6e4 * (this._offset || 0)
        }

        function zc() {
            return Math.floor(+this / 1e3)
        }

        function Ac() {
            return this._offset ? new Date(+this) : this._d
        }

        function Bc() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
        }

        function Cc() {
            var a = this;
            return {
                years: a.year(),
                months: a.month(),
                date: a.date(),
                hours: a.hours(),
                minutes: a.minutes(),
                seconds: a.seconds(),
                milliseconds: a.milliseconds()
            }
        }

        function Dc() {
            return this.isValid() ? this.toISOString() : "null"
        }

        function Ec() {
            return k(this)
        }

        function Fc() {
            return g({}, j(this))
        }

        function Gc() {
            return j(this).overflow
        }

        function Hc() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function Ic(a, b) {
            J(0, [a, a.length], 0, b)
        }

        function Jc(a) {
            return Nc.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function Kc(a) {
            return Nc.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function Lc() {
            return rb(this.year(), 1, 4)
        }

        function Mc() {
            var a = this.localeData()._week;
            return rb(this.year(), a.dow, a.doy)
        }

        function Nc(a, b, c, d, e) {
            var f;
            return null == a ? qb(this, d, e).year : (f = rb(a, d, e), b > f && (b = f), Oc.call(this, a, b, c, d, e))
        }

        function Oc(a, b, c, d, e) {
            var f = pb(a, b, c, d, e),
                g = kb(f.year, 0, f.dayOfYear);
            return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
        }

        function Pc(a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
        }

        function Qc(a) {
            return qb(a, this._week.dow, this._week.doy).week
        }

        function Rc() {
            return this._week.dow
        }

        function Sc() {
            return this._week.doy
        }

        function Tc(a) {
            var b = this.localeData().week(this);
            return null == a ? b : this.add(7 * (a - b), "d")
        }

        function Uc(a) {
            var b = qb(this, 1, 4).week;
            return null == a ? b : this.add(7 * (a - b), "d")
        }

        function Vc(a, b) {
            return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
        }

        function Wc(a, b) {
            return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
        }

        function Xc(a) {
            return this._weekdaysShort[a.day()]
        }

        function Yc(a) {
            return this._weekdaysMin[a.day()]
        }

        function Zc(a, b, c) {
            var d, e, f;
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
                if (e = Eb([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
                if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
                if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
                if (!c && this._weekdaysParse[d].test(a)) return d
            }
        }

        function $c(a) {
            if (!this.isValid()) return null != a ? this : 0 / 0;
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = Vc(a, this.localeData()), this.add(a - b, "d")) : b
        }

        function _c(a) {
            if (!this.isValid()) return null != a ? this : 0 / 0;
            var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == a ? b : this.add(a - b, "d")
        }

        function ad(a) {
            return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : 0 / 0
        }

        function bd(a) {
            var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add(a - b, "d")
        }

        function cd() {
            return this.hours() % 12 || 12
        }

        function dd(a, b) {
            J(a, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), b)
            })
        }

        function ed(a, b) {
            return b._meridiemParse
        }

        function fd(a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        }

        function gd(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        }

        function hd(a, b) {
            b[Be] = r(1e3 * ("0." + a))
        }

        function id() {
            return this._isUTC ? "UTC" : ""
        }

        function jd() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function kd(a) {
            return Eb(1e3 * a)
        }

        function ld() {
            return Eb.apply(null, arguments).parseZone()
        }

        function md(a, b, c) {
            var d = this._calendar[a];
            return D(d) ? d.call(b, c) : d
        }

        function nd(a) {
            var b = this._longDateFormat[a],
                c = this._longDateFormat[a.toUpperCase()];
            return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
                return a.slice(1)
            }), this._longDateFormat[a])
        }

        function od() {
            return this._invalidDate
        }

        function pd(a) {
            return this._ordinal.replace("%d", a)
        }

        function qd(a) {
            return a
        }

        function rd(a, b, c, d) {
            var e = this._relativeTime[c];
            return D(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
        }

        function sd(a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return D(c) ? c(b) : c.replace(/%s/i, b)
        }

        function td(a) {
            var b, c;
            for (c in a) b = a[c], D(b) ? this[c] = b : this["_" + c] = b;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function ud(a, b, c, d) {
            var e = z(),
                f = h().set(d, b);
            return e[c](f, a)
        }

        function vd(a, b, c, d, e) {
            if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return ud(a, b, c, e);
            var f, g = [];
            for (f = 0; d > f; f++) g[f] = ud(a, f, c, e);
            return g
        }

        function wd(a, b) {
            return vd(a, b, "months", 12, "month")
        }

        function xd(a, b) {
            return vd(a, b, "monthsShort", 12, "month")
        }

        function yd(a, b) {
            return vd(a, b, "weekdays", 7, "day")
        }

        function zd(a, b) {
            return vd(a, b, "weekdaysShort", 7, "day")
        }

        function Ad(a, b) {
            return vd(a, b, "weekdaysMin", 7, "day")
        }

        function Bd() {
            var a = this._data;
            return this._milliseconds = tf(this._milliseconds), this._days = tf(this._days), this._months = tf(this._months), a.milliseconds = tf(a.milliseconds), a.seconds = tf(a.seconds), a.minutes = tf(a.minutes), a.hours = tf(a.hours), a.months = tf(a.months), a.years = tf(a.years), this
        }

        function Cd(a, b, c, d) {
            var e = Zb(b, c);
            return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
        }

        function Dd(a, b) {
            return Cd(this, a, b, 1)
        }

        function Ed(a, b) {
            return Cd(this, a, b, -1)
        }

        function Fd(a) {
            return 0 > a ? Math.floor(a) : Math.ceil(a)
        }

        function Gd() {
            var a, b, c, d, e, f = this._milliseconds,
                g = this._days,
                h = this._months,
                i = this._data;
            return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Fd(Id(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Hd(g)), h += e, g -= Fd(Id(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
        }

        function Hd(a) {
            return 4800 * a / 146097
        }

        function Id(a) {
            return 146097 * a / 4800
        }

        function Jd(a) {
            var b, c, d = this._milliseconds;
            if (a = B(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + Hd(b), "month" === a ? c : c / 12;
            switch (b = this._days + Math.round(Id(this._months)), a) {
                case "week":
                    return b / 7 + d / 6048e5;
                case "day":
                    return b + d / 864e5;
                case "hour":
                    return 24 * b + d / 36e5;
                case "minute":
                    return 1440 * b + d / 6e4;
                case "second":
                    return 86400 * b + d / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * b) + d;
                default:
                    throw new Error("Unknown unit " + a)
            }
        }

        function Kd() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12)
        }

        function Ld(a) {
            return function() {
                return this.as(a)
            }
        }

        function Md(a) {
            return a = B(a), this[a + "s"]()
        }

        function Nd(a) {
            return function() {
                return this._data[a]
            }
        }

        function Od() {
            return q(this.days() / 7)
        }

        function Pd(a, b, c, d, e) {
            return e.relativeTime(b || 1, !!c, a, d)
        }

        function Qd(a, b, c) {
            var d = Zb(a).abs(),
                e = Jf(d.as("s")),
                f = Jf(d.as("m")),
                g = Jf(d.as("h")),
                h = Jf(d.as("d")),
                i = Jf(d.as("M")),
                j = Jf(d.as("y")),
                k = e < Kf.s && ["s", e] || 1 >= f && ["m"] || f < Kf.m && ["mm", f] || 1 >= g && ["h"] || g < Kf.h && ["hh", g] || 1 >= h && ["d"] || h < Kf.d && ["dd", h] || 1 >= i && ["M"] || i < Kf.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
            return k[2] = b, k[3] = +a > 0, k[4] = c, Pd.apply(null, k)
        }

        function Rd(a, b) {
            return void 0 === Kf[a] ? !1 : void 0 === b ? Kf[a] : (Kf[a] = b, !0)
        }

        function Sd(a) {
            var b = this.localeData(),
                c = Qd(this, !a, b);
            return a && (c = b.pastFuture(+this, c)), b.postformat(c)
        }

        function Td() {
            var a, b, c, d = Lf(this._milliseconds) / 1e3,
                e = Lf(this._days),
                f = Lf(this._months);
            a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;
            var g = c,
                h = f,
                i = e,
                j = b,
                k = a,
                l = d,
                m = this.asSeconds();
            return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
        }
        var Ud, Vd, Wd = a.momentProperties = [],
            Xd = !1,
            Yd = {},
            Zd = {},
            $d = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            _d = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            ae = {},
            be = {},
            ce = /\d/,
            de = /\d\d/,
            ee = /\d{3}/,
            fe = /\d{4}/,
            ge = /[+-]?\d{6}/,
            he = /\d\d?/,
            ie = /\d\d\d\d?/,
            je = /\d\d\d\d\d\d?/,
            ke = /\d{1,3}/,
            le = /\d{1,4}/,
            me = /[+-]?\d{1,6}/,
            ne = /\d+/,
            oe = /[+-]?\d+/,
            pe = /Z|[+-]\d\d:?\d\d/gi,
            qe = /Z|[+-]\d\d(?::?\d\d)?/gi,
            re = /[+-]?\d+(\.\d{1,3})?/,
            se = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            te = {},
            ue = {},
            ve = 0,
            we = 1,
            xe = 2,
            ye = 3,
            ze = 4,
            Ae = 5,
            Be = 6,
            Ce = 7,
            De = 8;
        J("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), J("MMM", 0, 0, function(a) {
            return this.localeData().monthsShort(this, a)
        }), J("MMMM", 0, 0, function(a) {
            return this.localeData().months(this, a)
        }), A("month", "M"), O("M", he), O("MM", he, de), O("MMM", function(a, b) {
            return b.monthsShortRegex(a)
        }), O("MMMM", function(a, b) {
            return b.monthsRegex(a)
        }), S(["M", "MM"], function(a, b) {
            b[we] = r(a) - 1
        }), S(["MMM", "MMMM"], function(a, b, c, d) {
            var e = c._locale.monthsParse(a, d, c._strict);
            null != e ? b[we] = e : j(c).invalidMonth = a
        });
        var Ee = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
            Fe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            Ge = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            He = se,
            Ie = se,
            Je = {};
        a.suppressDeprecationWarnings = !1;
        var Ke = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Le = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Me = /Z|[+-]\d\d(?::?\d\d)?/,
            Ne = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            Oe = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            Pe = /^\/?Date\((\-?\d+)/i;
        a.createFromInputFallback = fb("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
            a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
        }), J("Y", 0, 0, function() {
            var a = this.year();
            return 9999 >= a ? "" + a : "+" + a
        }), J(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), J(0, ["YYYY", 4], 0, "year"), J(0, ["YYYYY", 5], 0, "year"), J(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), O("Y", oe), O("YY", he, de), O("YYYY", le, fe), O("YYYYY", me, ge), O("YYYYYY", me, ge), S(["YYYYY", "YYYYYY"], ve), S("YYYY", function(b, c) {
            c[ve] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b)
        }), S("YY", function(b, c) {
            c[ve] = a.parseTwoDigitYear(b)
        }), S("Y", function(a, b) {
            b[ve] = parseInt(a, 10)
        }), a.parseTwoDigitYear = function(a) {
            return r(a) + (r(a) > 68 ? 1900 : 2e3)
        };
        var Qe = E("FullYear", !1);
        a.ISO_8601 = function() {};
        var Re = fb("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                var a = Eb.apply(null, arguments);
                return this.isValid() && a.isValid() ? this > a ? this : a : l()
            }),
            Se = fb("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                var a = Eb.apply(null, arguments);
                return this.isValid() && a.isValid() ? a > this ? this : a : l()
            }),
            Te = function() {
                return Date.now ? Date.now() : +new Date
            };
        Kb("Z", ":"), Kb("ZZ", ""), O("Z", qe), O("ZZ", qe), S(["Z", "ZZ"], function(a, b, c) {
            c._useUTC = !0, c._tzm = Lb(qe, a)
        });
        var Ue = /([\+\-]|\d\d)/gi;
        a.updateOffset = function() {};
        var Ve = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            We = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        Zb.fn = Ib.prototype;
        var Xe = bc(1, "add"),
            Ye = bc(-1, "subtract");
        a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var Ze = fb("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
            return void 0 === a ? this.localeData() : this.locale(a)
        });
        J(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), J(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Ic("gggg", "weekYear"), Ic("ggggg", "weekYear"), Ic("GGGG", "isoWeekYear"), Ic("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), O("G", oe), O("g", oe), O("GG", he, de), O("gg", he, de), O("GGGG", le, fe), O("gggg", le, fe), O("GGGGG", me, ge), O("ggggg", me, ge), T(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
            b[d.substr(0, 2)] = r(a)
        }), T(["gg", "GG"], function(b, c, d, e) {
            c[e] = a.parseTwoDigitYear(b)
        }), J("Q", 0, "Qo", "quarter"), A("quarter", "Q"), O("Q", ce), S("Q", function(a, b) {
            b[we] = 3 * (r(a) - 1)
        }), J("w", ["ww", 2], "wo", "week"), J("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), O("w", he), O("ww", he, de), O("W", he), O("WW", he, de), T(["w", "ww", "W", "WW"], function(a, b, c, d) {
            b[d.substr(0, 1)] = r(a)
        });
        var $e = {
            dow: 0,
            doy: 6
        };
        J("D", ["DD", 2], "Do", "date"), A("date", "D"), O("D", he), O("DD", he, de), O("Do", function(a, b) {
            return a ? b._ordinalParse : b._ordinalParseLenient
        }), S(["D", "DD"], xe), S("Do", function(a, b) {
            b[xe] = r(a.match(he)[0], 10)
        });
        var _e = E("Date", !0);
        J("d", 0, "do", "day"), J("dd", 0, 0, function(a) {
            return this.localeData().weekdaysMin(this, a)
        }), J("ddd", 0, 0, function(a) {
            return this.localeData().weekdaysShort(this, a)
        }), J("dddd", 0, 0, function(a) {
            return this.localeData().weekdays(this, a)
        }), J("e", 0, 0, "weekday"), J("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), O("d", he), O("e", he), O("E", he), O("dd", se), O("ddd", se), O("dddd", se), T(["dd", "ddd", "dddd"], function(a, b, c, d) {
            var e = c._locale.weekdaysParse(a, d, c._strict);
            null != e ? b.d = e : j(c).invalidWeekday = a
        }), T(["d", "e", "E"], function(a, b, c, d) {
            b[d] = r(a)
        });
        var af = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            bf = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            cf = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), O("DDD", ke), O("DDDD", ee), S(["DDD", "DDDD"], function(a, b, c) {
            c._dayOfYear = r(a)
        }), J("H", ["HH", 2], 0, "hour"), J("h", ["hh", 2], 0, cd), J("hmm", 0, 0, function() {
            return "" + cd.apply(this) + I(this.minutes(), 2)
        }), J("hmmss", 0, 0, function() {
            return "" + cd.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
        }), J("Hmm", 0, 0, function() {
            return "" + this.hours() + I(this.minutes(), 2)
        }), J("Hmmss", 0, 0, function() {
            return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
        }), dd("a", !0), dd("A", !1), A("hour", "h"), O("a", ed), O("A", ed), O("H", he), O("h", he), O("HH", he, de), O("hh", he, de), O("hmm", ie), O("hmmss", je), O("Hmm", ie), O("Hmmss", je), S(["H", "HH"], ye), S(["a", "A"], function(a, b, c) {
            c._isPm = c._locale.isPM(a), c._meridiem = a
        }), S(["h", "hh"], function(a, b, c) {
            b[ye] = r(a), j(c).bigHour = !0
        }), S("hmm", function(a, b, c) {
            var d = a.length - 2;
            b[ye] = r(a.substr(0, d)), b[ze] = r(a.substr(d)), j(c).bigHour = !0
        }), S("hmmss", function(a, b, c) {
            var d = a.length - 4,
                e = a.length - 2;
            b[ye] = r(a.substr(0, d)), b[ze] = r(a.substr(d, 2)), b[Ae] = r(a.substr(e)), j(c).bigHour = !0
        }), S("Hmm", function(a, b) {
            var c = a.length - 2;
            b[ye] = r(a.substr(0, c)), b[ze] = r(a.substr(c))
        }), S("Hmmss", function(a, b) {
            var c = a.length - 4,
                d = a.length - 2;
            b[ye] = r(a.substr(0, c)), b[ze] = r(a.substr(c, 2)), b[Ae] = r(a.substr(d))
        });
        var df = /[ap]\.?m?\.?/i,
            ef = E("Hours", !0);
        J("m", ["mm", 2], 0, "minute"), A("minute", "m"), O("m", he), O("mm", he, de), S(["m", "mm"], ze);
        var ff = E("Minutes", !1);
        J("s", ["ss", 2], 0, "second"), A("second", "s"), O("s", he), O("ss", he, de), S(["s", "ss"], Ae);
        var gf = E("Seconds", !1);
        J("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), J(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), J(0, ["SSS", 3], 0, "millisecond"), J(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), J(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), J(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), J(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), J(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), J(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), A("millisecond", "ms"), O("S", ke, ce), O("SS", ke, de), O("SSS", ke, ee);
        var hf;
        for (hf = "SSSS"; hf.length <= 9; hf += "S") O(hf, ne);
        for (hf = "S"; hf.length <= 9; hf += "S") S(hf, hd);
        var jf = E("Milliseconds", !1);
        J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
        var kf = o.prototype;
        kf.add = Xe, kf.calendar = dc, kf.clone = ec, kf.diff = lc, kf.endOf = xc, kf.format = pc, kf.from = qc, kf.fromNow = rc, kf.to = sc, kf.toNow = tc, kf.get = H, kf.invalidAt = Gc, kf.isAfter = fc, kf.isBefore = gc, kf.isBetween = hc, kf.isSame = ic, kf.isSameOrAfter = jc, kf.isSameOrBefore = kc, kf.isValid = Ec, kf.lang = Ze, kf.locale = uc, kf.localeData = vc, kf.max = Se, kf.min = Re, kf.parsingFlags = Fc, kf.set = H, kf.startOf = wc, kf.subtract = Ye, kf.toArray = Bc, kf.toObject = Cc, kf.toDate = Ac, kf.toISOString = oc, kf.toJSON = Dc, kf.toString = nc, kf.unix = zc, kf.valueOf = yc, kf.creationData = Hc, kf.year = Qe, kf.isLeapYear = nb, kf.weekYear = Jc, kf.isoWeekYear = Kc, kf.quarter = kf.quarters = Pc, kf.month = $, kf.daysInMonth = _, kf.week = kf.weeks = Tc, kf.isoWeek = kf.isoWeeks = Uc, kf.weeksInYear = Mc, kf.isoWeeksInYear = Lc, kf.date = _e, kf.day = kf.days = $c, kf.weekday = _c, kf.isoWeekday = ad, kf.dayOfYear = bd, kf.hour = kf.hours = ef, kf.minute = kf.minutes = ff, kf.second = kf.seconds = gf, kf.millisecond = kf.milliseconds = jf, kf.utcOffset = Ob, kf.utc = Qb, kf.local = Rb, kf.parseZone = Sb, kf.hasAlignedHourOffset = Tb, kf.isDST = Ub, kf.isDSTShifted = Vb, kf.isLocal = Wb, kf.isUtcOffset = Xb, kf.isUtc = Yb, kf.isUTC = Yb, kf.zoneAbbr = id, kf.zoneName = jd, kf.dates = fb("dates accessor is deprecated. Use date instead.", _e), kf.months = fb("months accessor is deprecated. Use month instead", $), kf.years = fb("years accessor is deprecated. Use year instead", Qe), kf.zone = fb("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Pb);
        var lf = kf,
            mf = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            nf = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            of = "Invalid date",
            pf = "%d",
            qf = /\d{1,2}/,
            rf = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            sf = t.prototype;
        sf._calendar = mf, sf.calendar = md, sf._longDateFormat = nf, sf.longDateFormat = nd, sf._invalidDate = of , sf.invalidDate = od, sf._ordinal = pf, sf.ordinal = pd, sf._ordinalParse = qf, sf.preparse = qd, sf.postformat = qd, sf._relativeTime = rf, sf.relativeTime = rd, sf.pastFuture = sd, sf.set = td, sf.months = W, sf._months = Fe, sf.monthsShort = X, sf._monthsShort = Ge, sf.monthsParse = Y, sf._monthsRegex = Ie, sf.monthsRegex = bb, sf._monthsShortRegex = He, sf.monthsShortRegex = ab, sf.week = Qc, sf._week = $e, sf.firstDayOfYear = Sc, sf.firstDayOfWeek = Rc, sf.weekdays = Wc, sf._weekdays = af, sf.weekdaysMin = Yc, sf._weekdaysMin = cf, sf.weekdaysShort = Xc, sf._weekdaysShort = bf, sf.weekdaysParse = Zc, sf.isPM = fd, sf._meridiemParse = df, sf.meridiem = gd, x("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(a) {
                var b = a % 10,
                    c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }), a.lang = fb("moment.lang is deprecated. Use moment.locale instead.", x), a.langData = fb("moment.langData is deprecated. Use moment.localeData instead.", z);
        var tf = Math.abs,
            uf = Ld("ms"),
            vf = Ld("s"),
            wf = Ld("m"),
            xf = Ld("h"),
            yf = Ld("d"),
            zf = Ld("w"),
            Af = Ld("M"),
            Bf = Ld("y"),
            Cf = Nd("milliseconds"),
            Df = Nd("seconds"),
            Ef = Nd("minutes"),
            Ff = Nd("hours"),
            Gf = Nd("days"),
            Hf = Nd("months"),
            If = Nd("years"),
            Jf = Math.round,
            Kf = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            Lf = Math.abs,
            Mf = Ib.prototype;
        Mf.abs = Bd, Mf.add = Dd, Mf.subtract = Ed, Mf.as = Jd, Mf.asMilliseconds = uf, Mf.asSeconds = vf, Mf.asMinutes = wf, Mf.asHours = xf, Mf.asDays = yf, Mf.asWeeks = zf, Mf.asMonths = Af, Mf.asYears = Bf, Mf.valueOf = Kd, Mf._bubble = Gd, Mf.get = Md, Mf.milliseconds = Cf, Mf.seconds = Df, Mf.minutes = Ef, Mf.hours = Ff, Mf.days = Gf, Mf.weeks = Od, Mf.months = Hf, Mf.years = If, Mf.humanize = Sd, Mf.toISOString = Td, Mf.toString = Td, Mf.toJSON = Td, Mf.locale = uc, Mf.localeData = vc, Mf.toIsoString = fb("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Td), Mf.lang = Ze, J("X", 0, 0, "unix"), J("x", 0, 0, "valueOf"), O("x", oe), O("X", re), S("X", function(a, b, c) {
            c._d = new Date(1e3 * parseFloat(a, 10))
        }), S("x", function(a, b, c) {
            c._d = new Date(r(a))
        }), a.version = "2.11.1", b(Eb), a.fn = lf, a.min = Gb, a.max = Hb, a.now = Te, a.utc = h, a.unix = kd, a.months = wd, a.isDate = d, a.locale = x, a.invalid = l, a.duration = Zb, a.isMoment = p, a.weekdays = yd, a.parseZone = ld, a.localeData = z, a.isDuration = Jb, a.monthsShort = xd, a.weekdaysMin = Ad, a.defineLocale = y, a.weekdaysShort = zd, a.normalizeUnits = B, a.relativeTimeThreshold = Rd, a.prototype = lf;
        var Nf = a;
        return Nf
    }),
    function(a) {
        "function" == typeof require && "object" == typeof exports && "object" == typeof module ? a(require("knockout"), exports) : "function" == typeof define && define.amd ? define(["knockout", "exports"], a) : a(ko, ko)
    }(function(a, b) {
        function c(a) {
            return function() {
                return a
            }
        }
        if (void 0 === typeof a) throw "Knockout is required, please ensure it is loaded before loading the commanding plug-in";
        b.command = function(b) {
            var c = function() {
                    return c.execute.apply(this, arguments)
                },
                d = b.canExecute,
                e = b.execute;
            return c.canExecute = a.computed(function() {
                return d ? d() : !0
            }), c.execute = function(a, b) {
                return c.canExecute() ? e.apply(this, [a, b]) : void 0
            }, c
        }, b.asyncCommand = function(b) {
            var c = function() {
                    return c.execute.apply(this, arguments)
                },
                d = b.canExecute,
                e = b.execute,
                f = function() {
                    c.isExecuting(!1)
                };
            return c.isExecuting = a.observable(), c.canExecute = a.computed(function() {
                return d ? d(c.isExecuting()) : !c.isExecuting()
            }), c.execute = function(a, b) {
                if (c.canExecute()) {
                    var d = [];
                    return e.length >= 2 && d.push(a), e.length >= 3 && d.push(b), d.push(f), c.isExecuting(!0), e.apply(this, d)
                }
            }, c
        }, a.bindingHandlers.command = {
            init: function(b, d, e, f, g) {
                var h = d(),
                    i = h.execute ? {
                        click: h
                    } : h,
                    j = function(b) {
                        return void 0 !== a.bindingHandlers[b]
                    },
                    k = function() {
                        for (var d in i) j(d) && a.bindingHandlers[d].init(b, c(i[d].execute), e, f, g)
                    },
                    l = function() {
                        var d = {};
                        for (var h in i) j(h) || (d[h] = i[h].execute);
                        a.bindingHandlers.event.init(b, c(d), e, f, g)
                    };
                k(), l()
            },
            update: function(b, c, d, e, f) {
                var g = c(),
                    h = g.canExecute;
                if (!h)
                    for (var i in g)
                        if (g[i].canExecute) {
                            h = g[i].canExecute;
                            break
                        } h && a.bindingHandlers.enable.update(b, h, d, e, f)
            }
        }
    }),
    function(a) {
        "function" == typeof require && "object" == typeof exports && "object" == typeof module ? a(require("knockout"), exports) : "function" == typeof define && define.amd ? define(["knockout", "exports"], a) : a(ko, ko.mapping = {})
    }(function(a, b) {
        function c(a, d) {
            var e, f;
            for (f in d)
                if (d.hasOwnProperty(f) && d[f])
                    if (e = b.getType(a[f]), f && a[f] && "array" !== e && "string" !== e) c(a[f], d[f]);
                    else if ("array" === b.getType(a[f]) && "array" === b.getType(d[f])) {
                e = a;
                for (var g = f, h = a[f], i = d[f], j = {}, k = h.length - 1; k >= 0; --k) j[h[k]] = h[k];
                for (k = i.length - 1; k >= 0; --k) j[i[k]] = i[k];
                h = [], i = void 0;
                for (i in j) h.push(j[i]);
                e[g] = h
            } else a[f] = d[f]
        }

        function d(a, b) {
            var d = {};
            return c(d, a), c(d, b), d
        }

        function e(a, b) {
            for (var c = d({}, a), e = u.length - 1; e >= 0; e--) {
                var g = u[e];
                c[g] && (c[""] instanceof Object || (c[""] = {}), c[""][g] = c[g], delete c[g])
            }
            return b && (c.ignore = f(b.ignore, c.ignore), c.include = f(b.include, c.include), c.copy = f(b.copy, c.copy), c.observe = f(b.observe, c.observe)), c.ignore = f(c.ignore, x.ignore), c.include = f(c.include, x.include), c.copy = f(c.copy, x.copy), c.observe = f(c.observe, x.observe), c.mappedProperties = c.mappedProperties || {}, c.copiedProperties = c.copiedProperties || {}, c
        }

        function f(c, d) {
            return "array" !== b.getType(c) && (c = "undefined" === b.getType(c) ? [] : [c]), "array" !== b.getType(d) && (d = "undefined" === b.getType(d) ? [] : [d]), a.utils.arrayGetDistinctValues(c.concat(d))
        }

        function g(c, e, f, i, n, o, t) {
            var u = "array" === b.getType(a.utils.unwrapObservable(e));
            if (o = o || "", b.isMapped(c)) {
                var w = a.utils.unwrapObservable(c)[r];
                f = d(w, f)
            }
            var x = t || n,
                y = function() {
                    return f[i] && f[i].create instanceof Function
                },
                z = function(b) {
                    var c = p,
                        d = a.dependentObservable;
                    return a.dependentObservable = function(b, d, e) {
                        e = e || {}, b && "object" == typeof b && (e = b);
                        var f = e.deferEvaluation,
                            g = !1;
                        if (e.deferEvaluation = !0, b = new s(b, d, e), !f) {
                            var h = b,
                                f = a.dependentObservable;
                            a.dependentObservable = s, b = a.isWriteableObservable(h), a.dependentObservable = f, b = s({
                                read: function() {
                                    return g || (a.utils.arrayRemoveItem(c, h), g = !0), h.apply(h, arguments)
                                },
                                write: b && function(a) {
                                    return h(a)
                                },
                                deferEvaluation: !0
                            }), c.push(b)
                        }
                        return b
                    }, a.dependentObservable.fn = s.fn, a.computed = a.dependentObservable, b = f[i].create(a.utils.unwrapObservable(n) instanceof Array ? {
                        data: b || e,
                        parent: x,
                        skip: v
                    } : {
                        data: b || e,
                        parent: x
                    }), a.dependentObservable = d, a.computed = a.dependentObservable, b
                },
                A = function() {
                    return f[i] && f[i].update instanceof Function
                },
                B = function(b, c) {
                    var d = {
                        data: c || e,
                        parent: x,
                        target: a.utils.unwrapObservable(b)
                    };
                    return a.isWriteableObservable(b) && (d.observable = b), f[i].update(d)
                };
            if (t = q.get(e)) return t;
            if (i = i || "", u) {
                var u = [],
                    C = !1,
                    D = function(a) {
                        return a
                    };
                f[i] && f[i].key && (D = f[i].key, C = !0), a.isObservable(c) || (c = a.observableArray([]), c.mappedRemove = function(a) {
                    var b = "function" == typeof a ? a : function(b) {
                        return b === D(a)
                    };
                    return c.remove(function(a) {
                        return b(D(a))
                    })
                }, c.mappedRemoveAll = function(b) {
                    var d = k(b, D);
                    return c.remove(function(b) {
                        return -1 != a.utils.arrayIndexOf(d, D(b))
                    })
                }, c.mappedDestroy = function(a) {
                    var b = "function" == typeof a ? a : function(b) {
                        return b === D(a)
                    };
                    return c.destroy(function(a) {
                        return b(D(a))
                    })
                }, c.mappedDestroyAll = function(b) {
                    var d = k(b, D);
                    return c.destroy(function(b) {
                        return -1 != a.utils.arrayIndexOf(d, D(b))
                    })
                }, c.mappedIndexOf = function(b) {
                    var d = k(c(), D);
                    return b = D(b), a.utils.arrayIndexOf(d, b)
                }, c.mappedCreate = function(b) {
                    if (-1 !== c.mappedIndexOf(b)) throw Error("There already is an object with the key that you specified.");
                    var d = y() ? z(b) : b;
                    return A() && (b = B(d, b), a.isWriteableObservable(d) ? d(b) : d = b), c.push(d), d
                }), t = k(a.utils.unwrapObservable(c), D).sort(), w = k(e, D), C && w.sort(), C = a.utils.compareArrays(t, w), t = {};
                var E, F = a.utils.unwrapObservable(e),
                    G = {},
                    H = !0,
                    w = 0;
                for (E = F.length; E > w; w++) {
                    var I = D(F[w]);
                    if (void 0 === I || I instanceof Object) {
                        H = !1;
                        break
                    }
                    G[I] = F[w]
                }
                var F = [],
                    J = 0,
                    w = 0;
                for (E = C.length; E > w; w++) {
                    var K, I = C[w],
                        L = o + "[" + w + "]";
                    switch (I.status) {
                        case "added":
                            var M = H ? G[I.value] : j(a.utils.unwrapObservable(e), I.value, D);
                            K = g(void 0, M, f, i, c, L, n), y() || (K = a.utils.unwrapObservable(K)), L = h(a.utils.unwrapObservable(e), M, t), K === v ? J++ : F[L - J] = K, t[L] = !0;
                            break;
                        case "retained":
                            M = H ? G[I.value] : j(a.utils.unwrapObservable(e), I.value, D), K = j(c, I.value, D), g(K, M, f, i, c, L, n), L = h(a.utils.unwrapObservable(e), M, t), F[L] = K, t[L] = !0;
                            break;
                        case "deleted":
                            K = j(c, I.value, D)
                    }
                    u.push({
                        event: I.status,
                        item: K
                    })
                }
                c(F), f[i] && f[i].arrayChanged && a.utils.arrayForEach(u, function(a) {
                    f[i].arrayChanged(a.event, a.item)
                })
            } else if (m(e)) {
                if (c = a.utils.unwrapObservable(c), !c) {
                    if (y()) return C = z(), A() && (C = B(C)), C;
                    if (A()) return B(C);
                    c = {}
                }
                if (A() && (c = B(c)), q.save(e, c), A()) return c;
                l(e, function(b) {
                    var d = o.length ? o + "." + b : b;
                    if (-1 == a.utils.arrayIndexOf(f.ignore, d))
                        if (-1 != a.utils.arrayIndexOf(f.copy, d)) c[b] = e[b];
                        else if ("object" != typeof e[b] && "array" != typeof e[b] && 0 < f.observe.length && -1 == a.utils.arrayIndexOf(f.observe, d)) c[b] = e[b], f.copiedProperties[d] = !0;
                    else {
                        var h = q.get(e[b]),
                            i = g(c[b], e[b], f, b, c, d, c),
                            h = h || i;
                        0 < f.observe.length && -1 == a.utils.arrayIndexOf(f.observe, d) ? (c[b] = h(), f.copiedProperties[d] = !0) : (a.isWriteableObservable(c[b]) ? c[b](a.utils.unwrapObservable(h)) : (h = void 0 === c[b] ? h : a.utils.unwrapObservable(h), c[b] = h), f.mappedProperties[d] = !0)
                    }
                })
            } else switch (b.getType(e)) {
                case "function":
                    A() ? a.isWriteableObservable(e) ? (e(B(e)), c = e) : c = B(e) : c = e;
                    break;
                default:
                    if (a.isWriteableObservable(c)) return K = A() ? B(c) : a.utils.unwrapObservable(e), c(K), K;
                    y() || A(), c = y() ? z() : a.observable(a.utils.unwrapObservable(e)), A() && c(B(c))
            }
            return c
        }

        function h(a, b, c) {
            for (var d = 0, e = a.length; e > d; d++)
                if (!0 !== c[d] && a[d] === b) return d;
            return null
        }

        function i(c, d) {
            var e;
            return d && (e = d(c)), "undefined" === b.getType(e) && (e = c), a.utils.unwrapObservable(e)
        }

        function j(b, c, d) {
            b = a.utils.unwrapObservable(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                if (i(g, d) === c) return g
            }
            throw Error("When calling ko.update*, the key '" + c + "' was not found!")
        }

        function k(b, c) {
            return a.utils.arrayMap(a.utils.unwrapObservable(b), function(a) {
                return c ? i(a, c) : a
            })
        }

        function l(a, c) {
            if ("array" === b.getType(a))
                for (var d = 0; d < a.length; d++) c(d);
            else
                for (d in a) c(d)
        }

        function m(a) {
            var c = b.getType(a);
            return ("object" === c || "array" === c) && null !== a
        }

        function n() {
            var b = [],
                c = [];
            this.save = function(d, e) {
                var f = a.utils.arrayIndexOf(b, d);
                f >= 0 ? c[f] = e : (b.push(d), c.push(e))
            }, this.get = function(d) {
                return d = a.utils.arrayIndexOf(b, d), d >= 0 ? c[d] : void 0
            }
        }

        function o() {
            var a = {},
                b = function(b) {
                    var c;
                    try {
                        c = b
                    } catch (d) {
                        c = "$$$"
                    }
                    return b = a[c], void 0 === b && (b = new n, a[c] = b), b
                };
            this.save = function(a, c) {
                b(a).save(a, c)
            }, this.get = function(a) {
                return b(a).get(a)
            }
        }
        var p, q, r = "__ko_mapping__",
            s = a.dependentObservable,
            t = 0,
            u = ["create", "update", "key", "arrayChanged"],
            v = {},
            w = {
                include: ["_destroy"],
                ignore: [],
                copy: [],
                observe: []
            },
            x = w;
        b.isMapped = function(b) {
            return (b = a.utils.unwrapObservable(b)) && b[r]
        }, b.fromJS = function(a) {
            if (0 == arguments.length) throw Error("When calling ko.fromJS, pass the object you want to convert.");
            try {
                t++ || (p = [], q = new o);
                var b, c;
                2 == arguments.length && (arguments[1][r] ? c = arguments[1] : b = arguments[1]), 3 == arguments.length && (b = arguments[1], c = arguments[2]), c && (b = d(b, c[r])), b = e(b);
                var f = g(c, a, b);
                if (c && (f = c), !--t)
                    for (; p.length;) {
                        var h = p.pop();
                        h && h()
                    }
                return f[r] = d(f[r], b), f
            } catch (i) {
                throw t = 0, i
            }
        }, b.fromJSON = function(c) {
            var d = a.utils.parseJson(c);
            return arguments[0] = d, b.fromJS.apply(this, arguments)
        }, b.updateFromJS = function() {
            throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!")
        }, b.updateFromJSON = function() {
            throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!")
        }, b.toJS = function(c, d) {
            if (x || b.resetDefaultOptions(), 0 == arguments.length) throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");
            if ("array" !== b.getType(x.ignore)) throw Error("ko.mapping.defaultOptions().ignore should be an array.");
            if ("array" !== b.getType(x.include)) throw Error("ko.mapping.defaultOptions().include should be an array.");
            if ("array" !== b.getType(x.copy)) throw Error("ko.mapping.defaultOptions().copy should be an array.");
            return d = e(d, c[r]), b.visitModel(c, function(b) {
                return a.utils.unwrapObservable(b)
            }, d)
        }, b.toJSON = function(c, d) {
            var e = b.toJS(c, d);
            return a.utils.stringifyJson(e)
        }, b.defaultOptions = function() {
            return 0 < arguments.length ? void(x = arguments[0]) : x
        }, b.resetDefaultOptions = function() {
            x = {
                include: w.include.slice(0),
                ignore: w.ignore.slice(0),
                copy: w.copy.slice(0)
            }
        }, b.getType = function(a) {
            if (a && "object" == typeof a) {
                if (a.constructor === Date) return "date";
                if (a.constructor === Array) return "array"
            }
            return typeof a
        }, b.visitModel = function(c, d, f) {
            f = f || {}, f.visitedObjects = f.visitedObjects || new o;
            var g, h = a.utils.unwrapObservable(c);
            if (!m(h)) return d(c, f.parentName);
            f = e(f, h[r]), d(c, f.parentName), g = "array" === b.getType(h) ? [] : {}, f.visitedObjects.save(c, g);
            var i = f.parentName;
            return l(h, function(c) {
                if (!f.ignore || -1 == a.utils.arrayIndexOf(f.ignore, c)) {
                    var e = h[c],
                        j = f,
                        k = i || "";
                    if ("array" === b.getType(h) ? i && (k += "[" + c + "]") : (i && (k += "."), k += c), j.parentName = k, -1 !== a.utils.arrayIndexOf(f.copy, c) || -1 !== a.utils.arrayIndexOf(f.include, c) || !h[r] || !h[r].mappedProperties || h[r].mappedProperties[c] || !h[r].copiedProperties || h[r].copiedProperties[c] || "array" === b.getType(h)) switch (b.getType(a.utils.unwrapObservable(e))) {
                        case "object":
                        case "array":
                        case "undefined":
                            j = f.visitedObjects.get(e), g[c] = "undefined" !== b.getType(j) ? j : b.visitModel(e, d, f);
                            break;
                        default:
                            g[c] = d(e, f.parentName)
                    }
                }
            }), g
        }
    }),
    function() {
        function a(a) {
            function b(b, c, d, e, f, g) {
                for (; f >= 0 && g > f; f += a) {
                    var h = e ? e[f] : f;
                    d = c(d, b[h], h, b)
                }
                return d
            }
            return function(c, d, e, f) {
                d = t(d, f, 4);
                var g = !A(c) && s.keys(c),
                    h = (g || c).length,
                    i = a > 0 ? 0 : h - 1;
                return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
            }
        }

        function b(a) {
            return function(b, c, d) {
                c = u(c, d);
                for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && e > f; f += a)
                    if (c(b[f], f, b)) return f;
                return -1
            }
        }

        function c(a, b, c) {
            return function(d, e, f) {
                var g = 0,
                    h = z(d);
                if ("number" == typeof f) a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1;
                else if (c && f && h) return f = c(d, e), d[f] === e ? f : -1;
                if (e !== e) return f = b(k.call(d, g, h), s.isNaN), f >= 0 ? f + g : -1;
                for (f = a > 0 ? g : h - 1; f >= 0 && h > f; f += a)
                    if (d[f] === e) return f;
                return -1
            }
        }

        function d(a, b) {
            var c = F.length,
                d = a.constructor,
                e = s.isFunction(d) && d.prototype || h,
                f = "constructor";
            for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--;) f = F[c], f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f)
        }
        var e = this,
            f = e._,
            g = Array.prototype,
            h = Object.prototype,
            i = Function.prototype,
            j = g.push,
            k = g.slice,
            l = h.toString,
            m = h.hasOwnProperty,
            n = Array.isArray,
            o = Object.keys,
            p = i.bind,
            q = Object.create,
            r = function() {},
            s = function(a) {
                return a instanceof s ? a : this instanceof s ? void(this._wrapped = a) : new s(a)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), exports._ = s) : e._ = s, s.VERSION = "1.8.3";
        var t = function(a, b, c) {
                if (void 0 === b) return a;
                switch (null == c ? 3 : c) {
                    case 1:
                        return function(c) {
                            return a.call(b, c)
                        };
                    case 2:
                        return function(c, d) {
                            return a.call(b, c, d)
                        };
                    case 3:
                        return function(c, d, e) {
                            return a.call(b, c, d, e)
                        };
                    case 4:
                        return function(c, d, e, f) {
                            return a.call(b, c, d, e, f)
                        }
                }
                return function() {
                    return a.apply(b, arguments)
                }
            },
            u = function(a, b, c) {
                return null == a ? s.identity : s.isFunction(a) ? t(a, b, c) : s.isObject(a) ? s.matcher(a) : s.property(a)
            };
        s.iteratee = function(a, b) {
            return u(a, b, 1 / 0)
        };
        var v = function(a, b) {
                return function(c) {
                    var d = arguments.length;
                    if (2 > d || null == c) return c;
                    for (var e = 1; d > e; e++)
                        for (var f = arguments[e], g = a(f), h = g.length, i = 0; h > i; i++) {
                            var j = g[i];
                            b && void 0 !== c[j] || (c[j] = f[j])
                        }
                    return c
                }
            },
            w = function(a) {
                if (!s.isObject(a)) return {};
                if (q) return q(a);
                r.prototype = a;
                var b = new r;
                return r.prototype = null, b
            },
            x = function(a) {
                return function(b) {
                    return null == b ? void 0 : b[a]
                }
            },
            y = Math.pow(2, 53) - 1,
            z = x("length"),
            A = function(a) {
                var b = z(a);
                return "number" == typeof b && b >= 0 && y >= b
            };
        s.each = s.forEach = function(a, b, c) {
            b = t(b, c);
            var d, e;
            if (A(a))
                for (d = 0, e = a.length; e > d; d++) b(a[d], d, a);
            else {
                var f = s.keys(a);
                for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a)
            }
            return a
        }, s.map = s.collect = function(a, b, c) {
            b = u(b, c);
            for (var d = !A(a) && s.keys(a), e = (d || a).length, f = Array(e), g = 0; e > g; g++) {
                var h = d ? d[g] : g;
                f[g] = b(a[h], h, a)
            }
            return f
        }, s.reduce = s.foldl = s.inject = a(1), s.reduceRight = s.foldr = a(-1), s.find = s.detect = function(a, b, c) {
            var d;
            return d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0
        }, s.filter = s.select = function(a, b, c) {
            var d = [];
            return b = u(b, c), s.each(a, function(a, c, e) {
                b(a, c, e) && d.push(a)
            }), d
        }, s.reject = function(a, b, c) {
            return s.filter(a, s.negate(u(b)), c)
        }, s.every = s.all = function(a, b, c) {
            b = u(b, c);
            for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) {
                var g = d ? d[f] : f;
                if (!b(a[g], g, a)) return !1
            }
            return !0
        }, s.some = s.any = function(a, b, c) {
            b = u(b, c);
            for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) {
                var g = d ? d[f] : f;
                if (b(a[g], g, a)) return !0
            }
            return !1
        }, s.contains = s.includes = s.include = function(a, b, c, d) {
            return A(a) || (a = s.values(a)), ("number" != typeof c || d) && (c = 0), s.indexOf(a, b, c) >= 0
        }, s.invoke = function(a, b) {
            var c = k.call(arguments, 2),
                d = s.isFunction(b);
            return s.map(a, function(a) {
                var e = d ? b : a[b];
                return null == e ? e : e.apply(a, c)
            })
        }, s.pluck = function(a, b) {
            return s.map(a, s.property(b))
        }, s.where = function(a, b) {
            return s.filter(a, s.matcher(b))
        }, s.findWhere = function(a, b) {
            return s.find(a, s.matcher(b))
        }, s.max = function(a, b, c) {
            var d, e, f = -1 / 0,
                g = -1 / 0;
            if (null == b && null != a) {
                a = A(a) ? a : s.values(a);
                for (var h = 0, i = a.length; i > h; h++) d = a[h], d > f && (f = d)
            } else b = u(b, c), s.each(a, function(a, c, d) {
                e = b(a, c, d), (e > g || e === -1 / 0 && f === -1 / 0) && (f = a, g = e)
            });
            return f
        }, s.min = function(a, b, c) {
            var d, e, f = 1 / 0,
                g = 1 / 0;
            if (null == b && null != a) {
                a = A(a) ? a : s.values(a);
                for (var h = 0, i = a.length; i > h; h++) d = a[h], f > d && (f = d)
            } else b = u(b, c), s.each(a, function(a, c, d) {
                e = b(a, c, d), (g > e || 1 / 0 === e && 1 / 0 === f) && (f = a, g = e)
            });
            return f
        }, s.shuffle = function(a) {
            for (var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0; d > f; f++) b = s.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
            return e
        }, s.sample = function(a, b, c) {
            return null == b || c ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)]) : s.shuffle(a).slice(0, Math.max(0, b))
        }, s.sortBy = function(a, b, c) {
            return b = u(b, c), s.pluck(s.map(a, function(a, c, d) {
                return {
                    value: a,
                    index: c,
                    criteria: b(a, c, d)
                }
            }).sort(function(a, b) {
                var c = a.criteria,
                    d = b.criteria;
                if (c !== d) {
                    if (c > d || void 0 === c) return 1;
                    if (d > c || void 0 === d) return -1
                }
                return a.index - b.index
            }), "value")
        };
        var B = function(a) {
            return function(b, c, d) {
                var e = {};
                return c = u(c, d), s.each(b, function(d, f) {
                    var g = c(d, f, b);
                    a(e, d, g)
                }), e
            }
        };
        s.groupBy = B(function(a, b, c) {
            s.has(a, c) ? a[c].push(b) : a[c] = [b]
        }), s.indexBy = B(function(a, b, c) {
            a[c] = b
        }), s.countBy = B(function(a, b, c) {
            s.has(a, c) ? a[c]++ : a[c] = 1
        }), s.toArray = function(a) {
            return a ? s.isArray(a) ? k.call(a) : A(a) ? s.map(a, s.identity) : s.values(a) : []
        }, s.size = function(a) {
            return null == a ? 0 : A(a) ? a.length : s.keys(a).length
        }, s.partition = function(a, b, c) {
            b = u(b, c);
            var d = [],
                e = [];
            return s.each(a, function(a, c, f) {
                (b(a, c, f) ? d : e).push(a)
            }), [d, e]
        }, s.first = s.head = s.take = function(a, b, c) {
            return null == a ? void 0 : null == b || c ? a[0] : s.initial(a, a.length - b)
        }, s.initial = function(a, b, c) {
            return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
        }, s.last = function(a, b, c) {
            return null == a ? void 0 : null == b || c ? a[a.length - 1] : s.rest(a, Math.max(0, a.length - b))
        }, s.rest = s.tail = s.drop = function(a, b, c) {
            return k.call(a, null == b || c ? 1 : b)
        }, s.compact = function(a) {
            return s.filter(a, s.identity)
        };
        var C = function(a, b, c, d) {
            for (var e = [], f = 0, g = d || 0, h = z(a); h > g; g++) {
                var i = a[g];
                if (A(i) && (s.isArray(i) || s.isArguments(i))) {
                    b || (i = C(i, b, c));
                    var j = 0,
                        k = i.length;
                    for (e.length += k; k > j;) e[f++] = i[j++]
                } else c || (e[f++] = i)
            }
            return e
        };
        s.flatten = function(a, b) {
            return C(a, b, !1)
        }, s.without = function(a) {
            return s.difference(a, k.call(arguments, 1))
        }, s.uniq = s.unique = function(a, b, c, d) {
            s.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = u(c, d));
            for (var e = [], f = [], g = 0, h = z(a); h > g; g++) {
                var i = a[g],
                    j = c ? c(i, g, a) : i;
                b ? (g && f === j || e.push(i), f = j) : c ? s.contains(f, j) || (f.push(j), e.push(i)) : s.contains(e, i) || e.push(i)
            }
            return e
        }, s.union = function() {
            return s.uniq(C(arguments, !0, !0))
        }, s.intersection = function(a) {
            for (var b = [], c = arguments.length, d = 0, e = z(a); e > d; d++) {
                var f = a[d];
                if (!s.contains(b, f)) {
                    for (var g = 1; c > g && s.contains(arguments[g], f); g++);
                    g === c && b.push(f)
                }
            }
            return b
        }, s.difference = function(a) {
            var b = C(arguments, !0, !0, 1);
            return s.filter(a, function(a) {
                return !s.contains(b, a)
            })
        }, s.zip = function() {
            return s.unzip(arguments)
        }, s.unzip = function(a) {
            for (var b = a && s.max(a, z).length || 0, c = Array(b), d = 0; b > d; d++) c[d] = s.pluck(a, d);
            return c
        }, s.object = function(a, b) {
            for (var c = {}, d = 0, e = z(a); e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
            return c
        }, s.findIndex = b(1), s.findLastIndex = b(-1), s.sortedIndex = function(a, b, c, d) {
            c = u(c, d, 1);
            for (var e = c(b), f = 0, g = z(a); g > f;) {
                var h = Math.floor((f + g) / 2);
                c(a[h]) < e ? f = h + 1 : g = h
            }
            return f
        }, s.indexOf = c(1, s.findIndex, s.sortedIndex), s.lastIndexOf = c(-1, s.findLastIndex), s.range = function(a, b, c) {
            null == b && (b = a || 0, a = 0), c = c || 1;
            for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c) e[f] = a;
            return e
        };
        var D = function(a, b, c, d, e) {
            if (!(d instanceof b)) return a.apply(c, e);
            var f = w(a.prototype),
                g = a.apply(f, e);
            return s.isObject(g) ? g : f
        };
        s.bind = function(a, b) {
            if (p && a.bind === p) return p.apply(a, k.call(arguments, 1));
            if (!s.isFunction(a)) throw new TypeError("Bind must be called on a function");
            var c = k.call(arguments, 2),
                d = function() {
                    return D(a, d, b, this, c.concat(k.call(arguments)))
                };
            return d
        }, s.partial = function(a) {
            var b = k.call(arguments, 1),
                c = function() {
                    for (var d = 0, e = b.length, f = Array(e), g = 0; e > g; g++) f[g] = b[g] === s ? arguments[d++] : b[g];
                    for (; d < arguments.length;) f.push(arguments[d++]);
                    return D(a, c, this, this, f)
                };
            return c
        }, s.bindAll = function(a) {
            var b, c, d = arguments.length;
            if (1 >= d) throw new Error("bindAll must be passed function names");
            for (b = 1; d > b; b++) c = arguments[b], a[c] = s.bind(a[c], a);
            return a
        }, s.memoize = function(a, b) {
            var c = function(d) {
                var e = c.cache,
                    f = "" + (b ? b.apply(this, arguments) : d);
                return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
            };
            return c.cache = {}, c
        }, s.delay = function(a, b) {
            var c = k.call(arguments, 2);
            return setTimeout(function() {
                return a.apply(null, c)
            }, b)
        }, s.defer = s.partial(s.delay, s, 1), s.throttle = function(a, b, c) {
            var d, e, f, g = null,
                h = 0;
            c || (c = {});
            var i = function() {
                h = c.leading === !1 ? 0 : s.now(), g = null, f = a.apply(d, e), g || (d = e = null)
            };
            return function() {
                var j = s.now();
                h || c.leading !== !1 || (h = j);
                var k = b - (j - h);
                return d = this, e = arguments, 0 >= k || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
            }
        }, s.debounce = function(a, b, c) {
            var d, e, f, g, h, i = function() {
                var j = s.now() - g;
                b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
            };
            return function() {
                f = this, e = arguments, g = s.now();
                var j = c && !d;
                return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
            }
        }, s.wrap = function(a, b) {
            return s.partial(b, a)
        }, s.negate = function(a) {
            return function() {
                return !a.apply(this, arguments)
            }
        }, s.compose = function() {
            var a = arguments,
                b = a.length - 1;
            return function() {
                for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
                return d
            }
        }, s.after = function(a, b) {
            return function() {
                return --a < 1 ? b.apply(this, arguments) : void 0
            }
        }, s.before = function(a, b) {
            var c;
            return function() {
                return --a > 0 && (c = b.apply(this, arguments)), 1 >= a && (b = null), c
            }
        }, s.once = s.partial(s.before, 2);
        var E = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        s.keys = function(a) {
            if (!s.isObject(a)) return [];
            if (o) return o(a);
            var b = [];
            for (var c in a) s.has(a, c) && b.push(c);
            return E && d(a, b), b
        }, s.allKeys = function(a) {
            if (!s.isObject(a)) return [];
            var b = [];
            for (var c in a) b.push(c);
            return E && d(a, b), b
        }, s.values = function(a) {
            for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
            return d
        }, s.mapObject = function(a, b, c) {
            b = u(b, c);
            for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; f > h; h++) d = e[h], g[d] = b(a[d], d, a);
            return g
        }, s.pairs = function(a) {
            for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
            return d
        }, s.invert = function(a) {
            for (var b = {}, c = s.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
            return b
        }, s.functions = s.methods = function(a) {
            var b = [];
            for (var c in a) s.isFunction(a[c]) && b.push(c);
            return b.sort()
        }, s.extend = v(s.allKeys), s.extendOwn = s.assign = v(s.keys), s.findKey = function(a, b, c) {
            b = u(b, c);
            for (var d, e = s.keys(a), f = 0, g = e.length; g > f; f++)
                if (d = e[f], b(a[d], d, a)) return d
        }, s.pick = function(a, b, c) {
            var d, e, f = {},
                g = a;
            if (null == g) return f;
            s.isFunction(b) ? (e = s.allKeys(g), d = t(b, c)) : (e = C(arguments, !1, !1, 1), d = function(a, b, c) {
                return b in c
            }, g = Object(g));
            for (var h = 0, i = e.length; i > h; h++) {
                var j = e[h],
                    k = g[j];
                d(k, j, g) && (f[j] = k)
            }
            return f
        }, s.omit = function(a, b, c) {
            if (s.isFunction(b)) b = s.negate(b);
            else {
                var d = s.map(C(arguments, !1, !1, 1), String);
                b = function(a, b) {
                    return !s.contains(d, b)
                }
            }
            return s.pick(a, b, c)
        }, s.defaults = v(s.allKeys, !0), s.create = function(a, b) {
            var c = w(a);
            return b && s.extendOwn(c, b), c
        }, s.clone = function(a) {
            return s.isObject(a) ? s.isArray(a) ? a.slice() : s.extend({}, a) : a
        }, s.tap = function(a, b) {
            return b(a), a
        }, s.isMatch = function(a, b) {
            var c = s.keys(b),
                d = c.length;
            if (null == a) return !d;
            for (var e = Object(a), f = 0; d > f; f++) {
                var g = c[f];
                if (b[g] !== e[g] || !(g in e)) return !1
            }
            return !0
        };
        var G = function(a, b, c, d) {
            if (a === b) return 0 !== a || 1 / a === 1 / b;
            if (null == a || null == b) return a === b;
            a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
            var e = l.call(a);
            if (e !== l.call(b)) return !1;
            switch (e) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + a == "" + b;
                case "[object Number]":
                    return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
                case "[object Date]":
                case "[object Boolean]":
                    return +a === +b
            }
            var f = "[object Array]" === e;
            if (!f) {
                if ("object" != typeof a || "object" != typeof b) return !1;
                var g = a.constructor,
                    h = b.constructor;
                if (g !== h && !(s.isFunction(g) && g instanceof g && s.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1
            }
            c = c || [], d = d || [];
            for (var i = c.length; i--;)
                if (c[i] === a) return d[i] === b;
            if (c.push(a), d.push(b), f) {
                if (i = a.length, i !== b.length) return !1;
                for (; i--;)
                    if (!G(a[i], b[i], c, d)) return !1
            } else {
                var j, k = s.keys(a);
                if (i = k.length, s.keys(b).length !== i) return !1;
                for (; i--;)
                    if (j = k[i], !s.has(b, j) || !G(a[j], b[j], c, d)) return !1
            }
            return c.pop(), d.pop(), !0
        };
        s.isEqual = function(a, b) {
            return G(a, b)
        }, s.isEmpty = function(a) {
            return null == a ? !0 : A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a)) ? 0 === a.length : 0 === s.keys(a).length
        }, s.isElement = function(a) {
            return !(!a || 1 !== a.nodeType)
        }, s.isArray = n || function(a) {
            return "[object Array]" === l.call(a)
        }, s.isObject = function(a) {
            var b = typeof a;
            return "function" === b || "object" === b && !!a
        }, s.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(a) {
            s["is" + a] = function(b) {
                return l.call(b) === "[object " + a + "]"
            }
        }), s.isArguments(arguments) || (s.isArguments = function(a) {
            return s.has(a, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (s.isFunction = function(a) {
            return "function" == typeof a || !1
        }), s.isFinite = function(a) {
            return isFinite(a) && !isNaN(parseFloat(a))
        }, s.isNaN = function(a) {
            return s.isNumber(a) && a !== +a
        }, s.isBoolean = function(a) {
            return a === !0 || a === !1 || "[object Boolean]" === l.call(a)
        }, s.isNull = function(a) {
            return null === a
        }, s.isUndefined = function(a) {
            return void 0 === a
        }, s.has = function(a, b) {
            return null != a && m.call(a, b)
        }, s.noConflict = function() {
            return e._ = f, this
        }, s.identity = function(a) {
            return a
        }, s.constant = function(a) {
            return function() {
                return a
            }
        }, s.noop = function() {}, s.property = x, s.propertyOf = function(a) {
            return null == a ? function() {} : function(b) {
                return a[b]
            }
        }, s.matcher = s.matches = function(a) {
            return a = s.extendOwn({}, a),
                function(b) {
                    return s.isMatch(b, a)
                }
        }, s.times = function(a, b, c) {
            var d = Array(Math.max(0, a));
            b = t(b, c, 1);
            for (var e = 0; a > e; e++) d[e] = b(e);
            return d
        }, s.random = function(a, b) {
            return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
        }, s.now = Date.now || function() {
            return (new Date).getTime()
        };
        var H = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            I = s.invert(H),
            J = function(a) {
                var b = function(b) {
                        return a[b]
                    },
                    c = "(?:" + s.keys(a).join("|") + ")",
                    d = RegExp(c),
                    e = RegExp(c, "g");
                return function(a) {
                    return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
                }
            };
        s.escape = J(H), s.unescape = J(I), s.result = function(a, b, c) {
            var d = null == a ? void 0 : a[b];
            return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d
        };
        var K = 0;
        s.uniqueId = function(a) {
            var b = ++K + "";
            return a ? a + b : b
        }, s.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var L = /(.)^/,
            M = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            N = /\\|'|\r|\n|\u2028|\u2029/g,
            O = function(a) {
                return "\\" + M[a]
            };
        s.template = function(a, b, c) {
            !b && c && (b = c), b = s.defaults({}, b, s.templateSettings);
            var d = RegExp([(b.escape || L).source, (b.interpolate || L).source, (b.evaluate || L).source].join("|") + "|$", "g"),
                e = 0,
                f = "__p+='";
            a.replace(d, function(b, c, d, g, h) {
                return f += a.slice(e, h).replace(N, O), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
            }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
            try {
                var g = new Function(b.variable || "obj", "_", f)
            } catch (h) {
                throw h.source = f, h
            }
            var i = function(a) {
                    return g.call(this, a, s)
                },
                j = b.variable || "obj";
            return i.source = "function(" + j + "){\n" + f + "}", i
        }, s.chain = function(a) {
            var b = s(a);
            return b._chain = !0, b
        };
        var P = function(a, b) {
            return a._chain ? s(b).chain() : b
        };
        s.mixin = function(a) {
            s.each(s.functions(a), function(b) {
                var c = s[b] = a[b];
                s.prototype[b] = function() {
                    var a = [this._wrapped];
                    return j.apply(a, arguments), P(this, c.apply(s, a))
                }
            })
        }, s.mixin(s), s.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
            var b = g[a];
            s.prototype[a] = function() {
                var c = this._wrapped;
                return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], P(this, c)
            }
        }), s.each(["concat", "join", "slice"], function(a) {
            var b = g[a];
            s.prototype[a] = function() {
                return P(this, b.apply(this._wrapped, arguments))
            }
        }), s.prototype.value = function() {
            return this._wrapped
        }, s.prototype.valueOf = s.prototype.toJSON = s.prototype.value, s.prototype.toString = function() {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return s
        })
    }.call(this), ! function(a) {
        if ("object" == typeof exports) module.exports = a();
        else if ("function" == typeof define && define.amd) define(a);
        else {
            var b;
            "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.s = a()
        }
    }(function() {
        return function a(b, c, d) {
            function e(g, h) {
                if (!c[g]) {
                    if (!b[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i) return i(g, !0);
                        if (f) return f(g, !0);
                        throw new Error("Cannot find module '" + g + "'")
                    }
                    var j = c[g] = {
                        exports: {}
                    };
                    b[g][0].call(j.exports, function(a) {
                        var c = b[g][1][a];
                        return e(c ? c : a)
                    }, j, j.exports, a, b, c, d)
                }
                return c[g].exports
            }
            for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
            return e
        }({
            1: [function(a, b) {
                var c = a("./trim"),
                    d = a("./decapitalize");
                b.exports = function(a, b) {
                    return a = c(a).replace(/[-_\s]+(.)?/g, function(a, b) {
                        return b ? b.toUpperCase() : ""
                    }), b === !0 ? d(a) : a
                }
            }, {
                "./decapitalize": 10,
                "./trim": 62
            }],
            2: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a, b) {
                    a = c(a);
                    var d = b ? a.slice(1).toLowerCase() : a.slice(1);
                    return a.charAt(0).toUpperCase() + d
                }
            }, {
                "./helper/makeString": 21
            }],
            3: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a) {
                    return c(a).split("")
                }
            }, {
                "./helper/makeString": 21
            }],
            4: [function(a, b) {
                b.exports = function(a, b) {
                    return null == a ? [] : (a = String(a), b = ~~b, b > 0 ? a.match(new RegExp(".{1," + b + "}", "g")) : [a])
                }
            }, {}],
            5: [function(a, b) {
                var c = a("./capitalize"),
                    d = a("./camelize"),
                    e = a("./helper/makeString");
                b.exports = function(a) {
                    return a = e(a), c(d(a.replace(/[\W_]/g, " ")).replace(/\s/g, ""))
                }
            }, {
                "./camelize": 1,
                "./capitalize": 2,
                "./helper/makeString": 21
            }],
            6: [function(a, b) {
                var c = a("./trim");
                b.exports = function(a) {
                    return c(a).replace(/\s\s+/g, " ")
                }
            }, {
                "./trim": 62
            }],
            7: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž",
                    e = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";
                d += d.toUpperCase(), e += e.toUpperCase(), e = e.split(""), d += "ß", e.push("ss"), b.exports = function(a) {
                    return c(a).replace(/.{1}/g, function(a) {
                        var b = d.indexOf(a);
                        return -1 === b ? a : e[b]
                    })
                }
            }, {
                "./helper/makeString": 21
            }],
            8: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a, b) {
                    return a = c(a), b = c(b), 0 === a.length || 0 === b.length ? 0 : a.split(b).length - 1
                }
            }, {
                "./helper/makeString": 21
            }],
            9: [function(a, b) {
                var c = a("./trim");
                b.exports = function(a) {
                    return c(a).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
                }
            }, {
                "./trim": 62
            }],
            10: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a) {
                    return a = c(a), a.charAt(0).toLowerCase() + a.slice(1)
                }
            }, {
                "./helper/makeString": 21
            }],
            11: [function(a, b) {
                function c(a) {
                    for (var b = a.match(/^[\s\\t]*/gm), c = b[0].length, d = 1; d < b.length; d++) c = Math.min(b[d].length, c);
                    return c
                }
                var d = a("./helper/makeString");
                b.exports = function(a, b) {
                    a = d(a);
                    var e, f = c(a);
                    return 0 === f ? a : (e = "string" == typeof b ? new RegExp("^" + b, "gm") : new RegExp("^[ \\t]{" + f + "}", "gm"), a.replace(e, ""))
                }
            }, {
                "./helper/makeString": 21
            }],
            12: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = a("./helper/toPositive");
                b.exports = function(a, b, e) {
                    return a = c(a), b = "" + b, e = "undefined" == typeof e ? a.length - b.length : Math.min(d(e), a.length) - b.length, e >= 0 && a.indexOf(b, e) === e
                }
            }, {
                "./helper/makeString": 21,
                "./helper/toPositive": 23
            }],
            13: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = a("./helper/escapeChars"),
                    e = "[";
                for (var f in d) e += f;
                e += "]";
                var g = new RegExp(e, "g");
                b.exports = function(a) {
                    return c(a).replace(g, function(a) {
                        return "&" + d[a] + ";"
                    })
                }
            }, {
                "./helper/escapeChars": 18,
                "./helper/makeString": 21
            }],
            14: [function(a, b) {
                b.exports = function() {
                    var a = {};
                    for (var b in this) this.hasOwnProperty(b) && !b.match(/^(?:include|contains|reverse|join)$/) && (a[b] = this[b]);
                    return a
                }
            }, {}],
            15: [function(a, b) {
                "use strict";

                function c(a) {
                    return this instanceof c ? void(this._wrapped = a) : new c(a)
                }

                function d(a, b) {
                    "function" == typeof b && (c.prototype[a] = function() {
                        var a = [this._wrapped].concat(Array.prototype.slice.call(arguments)),
                            d = b.apply(null, a);
                        return "string" == typeof d ? new c(d) : d
                    })
                }

                function e(a) {
                    d(a, function(b) {
                        var c = Array.prototype.slice.call(arguments, 1);
                        return String.prototype[a].apply(b, c)
                    })
                }
                c.VERSION = "3.2.2", c.isBlank = a("./isBlank"), c.stripTags = a("./stripTags"), c.capitalize = a("./capitalize"), c.decapitalize = a("./decapitalize"), c.chop = a("./chop"), c.trim = a("./trim"), c.clean = a("./clean"), c.cleanDiacritics = a("./cleanDiacritics"), c.count = a("./count"), c.chars = a("./chars"), c.swapCase = a("./swapCase"), c.escapeHTML = a("./escapeHTML"), c.unescapeHTML = a("./unescapeHTML"), c.splice = a("./splice"), c.insert = a("./insert"), c.replaceAll = a("./replaceAll"), c.include = a("./include"), c.join = a("./join"), c.lines = a("./lines"), c.dedent = a("./dedent"), c.reverse = a("./reverse"), c.startsWith = a("./startsWith"), c.endsWith = a("./endsWith"), c.pred = a("./pred"), c.succ = a("./succ"), c.titleize = a("./titleize"), c.camelize = a("./camelize"), c.underscored = a("./underscored"), c.dasherize = a("./dasherize"), c.classify = a("./classify"), c.humanize = a("./humanize"), c.ltrim = a("./ltrim"), c.rtrim = a("./rtrim"), c.truncate = a("./truncate"), c.prune = a("./prune"), c.words = a("./words"), c.pad = a("./pad"), c.lpad = a("./lpad"), c.rpad = a("./rpad"), c.lrpad = a("./lrpad"), c.sprintf = a("./sprintf"), c.vsprintf = a("./vsprintf"), c.toNumber = a("./toNumber"), c.numberFormat = a("./numberFormat"), c.strRight = a("./strRight"), c.strRightBack = a("./strRightBack"), c.strLeft = a("./strLeft"), c.strLeftBack = a("./strLeftBack"), c.toSentence = a("./toSentence"), c.toSentenceSerial = a("./toSentenceSerial"), c.slugify = a("./slugify"), c.surround = a("./surround"), c.quote = a("./quote"), c.unquote = a("./unquote"), c.repeat = a("./repeat"), c.naturalCmp = a("./naturalCmp"), c.levenshtein = a("./levenshtein"), c.toBoolean = a("./toBoolean"), c.exports = a("./exports"), c.escapeRegExp = a("./helper/escapeRegExp"), c.wrap = a("./wrap"), c.strip = c.trim, c.lstrip = c.ltrim, c.rstrip = c.rtrim, c.center = c.lrpad, c.rjust = c.lpad, c.ljust = c.rpad, c.contains = c.include, c.q = c.quote, c.toBool = c.toBoolean, c.camelcase = c.camelize, c.prototype = {
                    value: function() {
                        return this._wrapped
                    }
                };
                for (var f in c) d(f, c[f]);
                d("tap", function(a, b) {
                    return b(a)
                });
                var g = ["toUpperCase", "toLowerCase", "split", "replace", "slice", "substring", "substr", "concat"];
                for (var f in g) e(g[f]);
                b.exports = c
            }, {
                "./camelize": 1,
                "./capitalize": 2,
                "./chars": 3,
                "./chop": 4,
                "./classify": 5,
                "./clean": 6,
                "./cleanDiacritics": 7,
                "./count": 8,
                "./dasherize": 9,
                "./decapitalize": 10,
                "./dedent": 11,
                "./endsWith": 12,
                "./escapeHTML": 13,
                "./exports": 14,
                "./helper/escapeRegExp": 19,
                "./humanize": 24,
                "./include": 25,
                "./insert": 26,
                "./isBlank": 27,
                "./join": 28,
                "./levenshtein": 29,
                "./lines": 30,
                "./lpad": 31,
                "./lrpad": 32,
                "./ltrim": 33,
                "./naturalCmp": 34,
                "./numberFormat": 35,
                "./pad": 36,
                "./pred": 37,
                "./prune": 38,
                "./quote": 39,
                "./repeat": 40,
                "./replaceAll": 41,
                "./reverse": 42,
                "./rpad": 43,
                "./rtrim": 44,
                "./slugify": 45,
                "./splice": 46,
                "./sprintf": 47,
                "./startsWith": 48,
                "./strLeft": 49,
                "./strLeftBack": 50,
                "./strRight": 51,
                "./strRightBack": 52,
                "./stripTags": 53,
                "./succ": 54,
                "./surround": 55,
                "./swapCase": 56,
                "./titleize": 57,
                "./toBoolean": 58,
                "./toNumber": 59,
                "./toSentence": 60,
                "./toSentenceSerial": 61,
                "./trim": 62,
                "./truncate": 63,
                "./underscored": 64,
                "./unescapeHTML": 65,
                "./unquote": 66,
                "./vsprintf": 67,
                "./words": 68,
                "./wrap": 69
            }],
            16: [function(a, b) {
                var c = a("./makeString");
                b.exports = function(a, b) {
                    return a = c(a), 0 === a.length ? "" : a.slice(0, -1) + String.fromCharCode(a.charCodeAt(a.length - 1) + b)
                }
            }, {
                "./makeString": 21
            }],
            17: [function(a, b) {
                var c = a("./escapeRegExp");
                b.exports = function(a) {
                    return null == a ? "\\s" : a.source ? a.source : "[" + c(a) + "]"
                }
            }, {
                "./escapeRegExp": 19
            }],
            18: [function(a, b) {
                var c = {
                    "¢": "cent",
                    "£": "pound",
                    "¥": "yen",
                    "€": "euro",
                    "©": "copy",
                    "®": "reg",
                    "<": "lt",
                    ">": "gt",
                    '"': "quot",
                    "&": "amp",
                    "'": "#39"
                };
                b.exports = c
            }, {}],
            19: [function(a, b) {
                var c = a("./makeString");
                b.exports = function(a) {
                    return c(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
                }
            }, {
                "./makeString": 21
            }],
            20: [function(a, b) {
                var c = {
                    nbsp: " ",
                    cent: "¢",
                    pound: "£",
                    yen: "¥",
                    euro: "€",
                    copy: "©",
                    reg: "®",
                    lt: "<",
                    gt: ">",
                    quot: '"',
                    amp: "&",
                    apos: "'"
                };
                b.exports = c
            }, {}],
            21: [function(a, b) {
                b.exports = function(a) {
                    return null == a ? "" : "" + a
                }
            }, {}],
            22: [function(a, b) {
                b.exports = function(a, b) {
                    if (1 > b) return "";
                    for (var c = ""; b > 0;) 1 & b && (c += a), b >>= 1, a += a;
                    return c
                }
            }, {}],
            23: [function(a, b) {
                b.exports = function(a) {
                    return 0 > a ? 0 : +a || 0
                }
            }, {}],
            24: [function(a, b) {
                var c = a("./capitalize"),
                    d = a("./underscored"),
                    e = a("./trim");
                b.exports = function(a) {
                    return c(e(d(a).replace(/_id$/, "").replace(/_/g, " ")))
                }
            }, {
                "./capitalize": 2,
                "./trim": 62,
                "./underscored": 64
            }],
            25: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a, b) {
                    return "" === b ? !0 : -1 !== c(a).indexOf(b)
                }
            }, {
                "./helper/makeString": 21
            }],
            26: [function(a, b) {
                var c = a("./splice");
                b.exports = function(a, b, d) {
                    return c(a, b, 0, d)
                }
            }, {
                "./splice": 46
            }],
            27: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a) {
                    return /^\s*$/.test(c(a))
                }
            }, {
                "./helper/makeString": 21
            }],
            28: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = [].slice;
                b.exports = function() {
                    var a = d.call(arguments),
                        b = a.shift();
                    return a.join(c(b))
                }
            }, {
                "./helper/makeString": 21
            }],
            29: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a, b) {
                    "use strict";
                    if (a = c(a), b = c(b), a === b) return 0;
                    if (!a || !b) return Math.max(a.length, b.length);
                    for (var d = new Array(b.length + 1), e = 0; e < d.length; ++e) d[e] = e;
                    for (e = 0; e < a.length; ++e) {
                        for (var f = e + 1, g = 0; g < b.length; ++g) {
                            var h = f;
                            f = d[g] + (a.charAt(e) === b.charAt(g) ? 0 : 1);
                            var i = h + 1;
                            f > i && (f = i), i = d[g + 1] + 1, f > i && (f = i), d[g] = h
                        }
                        d[g] = f
                    }
                    return f
                }
            }, {
                "./helper/makeString": 21
            }],
            30: [function(a, b) {
                b.exports = function(a) {
                    return null == a ? [] : String(a).split(/\r\n?|\n/)
                }
            }, {}],
            31: [function(a, b) {
                var c = a("./pad");
                b.exports = function(a, b, d) {
                    return c(a, b, d)
                }
            }, {
                "./pad": 36
            }],
            32: [function(a, b) {
                var c = a("./pad");
                b.exports = function(a, b, d) {
                    return c(a, b, d, "both")
                }
            }, {
                "./pad": 36
            }],
            33: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = a("./helper/defaultToWhiteSpace"),
                    e = String.prototype.trimLeft;
                b.exports = function(a, b) {
                    return a = c(a), !b && e ? e.call(a) : (b = d(b), a.replace(new RegExp("^" + b + "+"), ""))
                }
            }, {
                "./helper/defaultToWhiteSpace": 17,
                "./helper/makeString": 21
            }],
            34: [function(a, b) {
                b.exports = function(a, b) {
                    if (a == b) return 0;
                    if (!a) return -1;
                    if (!b) return 1;
                    for (var c = /(\.\d+|\d+|\D+)/g, d = String(a).match(c), e = String(b).match(c), f = Math.min(d.length, e.length), g = 0; f > g; g++) {
                        var h = d[g],
                            i = e[g];
                        if (h !== i) {
                            var j = +h,
                                k = +i;
                            return j === j && k === k ? j > k ? 1 : -1 : i > h ? -1 : 1
                        }
                    }
                    return d.length != e.length ? d.length - e.length : b > a ? -1 : 1
                }
            }, {}],
            35: [function(a, b) {
                b.exports = function(a, b, c, d) {
                    if (isNaN(a) || null == a) return "";
                    a = a.toFixed(~~b), d = "string" == typeof d ? d : ",";
                    var e = a.split("."),
                        f = e[0],
                        g = e[1] ? (c || ".") + e[1] : "";
                    return f.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + d) + g
                }
            }, {}],
            36: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = a("./helper/strRepeat");
                b.exports = function(a, b, e, f) {
                    a = c(a), b = ~~b;
                    var g = 0;
                    switch (e ? e.length > 1 && (e = e.charAt(0)) : e = " ", f) {
                        case "right":
                            return g = b - a.length, a + d(e, g);
                        case "both":
                            return g = b - a.length, d(e, Math.ceil(g / 2)) + a + d(e, Math.floor(g / 2));
                        default:
                            return g = b - a.length, d(e, g) + a
                    }
                }
            }, {
                "./helper/makeString": 21,
                "./helper/strRepeat": 22
            }],
            37: [function(a, b) {
                var c = a("./helper/adjacent");
                b.exports = function(a) {
                    return c(a, -1)
                }
            }, {
                "./helper/adjacent": 16
            }],
            38: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = a("./rtrim");
                b.exports = function(a, b, e) {
                    if (a = c(a), b = ~~b, e = null != e ? String(e) : "...", a.length <= b) return a;
                    var f = function(a) {
                            return a.toUpperCase() !== a.toLowerCase() ? "A" : " "
                        },
                        g = a.slice(0, b + 1).replace(/.(?=\W*\w*$)/g, f);
                    return g = g.slice(g.length - 2).match(/\w\w/) ? g.replace(/\s*\S+$/, "") : d(g.slice(0, g.length - 1)), (g + e).length > a.length ? a : a.slice(0, g.length) + e
                }
            }, {
                "./helper/makeString": 21,
                "./rtrim": 44
            }],
            39: [function(a, b) {
                var c = a("./surround");
                b.exports = function(a, b) {
                    return c(a, b || '"')
                }
            }, {
                "./surround": 55
            }],
            40: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = a("./helper/strRepeat");
                b.exports = function e(a, b, f) {
                    if (a = c(a), b = ~~b, null == f) return d(a, b);
                    for (var e = []; b > 0; e[--b] = a);
                    return e.join(f)
                }
            }, {
                "./helper/makeString": 21,
                "./helper/strRepeat": 22
            }],
            41: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a, b, d, e) {
                    var f = e === !0 ? "gi" : "g",
                        g = new RegExp(b, f);
                    return c(a).replace(g, d)
                }
            }, {
                "./helper/makeString": 21
            }],
            42: [function(a, b) {
                var c = a("./chars");
                b.exports = function(a) {
                    return c(a).reverse().join("")
                }
            }, {
                "./chars": 3
            }],
            43: [function(a, b) {
                var c = a("./pad");
                b.exports = function(a, b, d) {
                    return c(a, b, d, "right")
                }
            }, {
                "./pad": 36
            }],
            44: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = a("./helper/defaultToWhiteSpace"),
                    e = String.prototype.trimRight;
                b.exports = function(a, b) {
                    return a = c(a), !b && e ? e.call(a) : (b = d(b), a.replace(new RegExp(b + "+$"), ""))
                }
            }, {
                "./helper/defaultToWhiteSpace": 17,
                "./helper/makeString": 21
            }],
            45: [function(a, b) {
                var c = (a("./helper/makeString"), a("./helper/defaultToWhiteSpace"), a("./trim")),
                    d = a("./dasherize"),
                    e = a("./cleanDiacritics");
                b.exports = function(a) {
                    return c(d(e(a).replace(/[^\w\s-]/g, "-").toLowerCase()), "-")
                }
            }, {
                "./cleanDiacritics": 7,
                "./dasherize": 9,
                "./helper/defaultToWhiteSpace": 17,
                "./helper/makeString": 21,
                "./trim": 62
            }],
            46: [function(a, b) {
                var c = a("./chars");
                b.exports = function(a, b, d, e) {
                    var f = c(a);
                    return f.splice(~~b, ~~d, e), f.join("")
                }
            }, {
                "./chars": 3
            }],
            47: [function(a, b) {
                var c = a("./helper/strRepeat"),
                    d = Object.prototype.toString,
                    e = function() {
                        function a(a) {
                            return d.call(a).slice(8, -1).toLowerCase()
                        }
                        var b = c,
                            f = function() {
                                return f.cache.hasOwnProperty(arguments[0]) || (f.cache[arguments[0]] = f.parse(arguments[0])), f.format.call(null, f.cache[arguments[0]], arguments)
                            };
                        return f.format = function(c, d) {
                            var f, g, h, i, j, k, l, m = 1,
                                n = c.length,
                                o = "",
                                p = [];
                            for (g = 0; n > g; g++)
                                if (o = a(c[g]), "string" === o) p.push(c[g]);
                                else if ("array" === o) {
                                if (i = c[g], i[2])
                                    for (f = d[m], h = 0; h < i[2].length; h++) {
                                        if (!f.hasOwnProperty(i[2][h])) throw new Error(e('[_.sprintf] property "%s" does not exist', i[2][h]));
                                        f = f[i[2][h]]
                                    } else f = i[1] ? d[i[1]] : d[m++];
                                if (/[^s]/.test(i[8]) && "number" != a(f)) throw new Error(e("[_.sprintf] expecting number but found %s", a(f)));
                                switch (i[8]) {
                                    case "b":
                                        f = f.toString(2);
                                        break;
                                    case "c":
                                        f = String.fromCharCode(f);
                                        break;
                                    case "d":
                                        f = parseInt(f, 10);
                                        break;
                                    case "e":
                                        f = i[7] ? f.toExponential(i[7]) : f.toExponential();
                                        break;
                                    case "f":
                                        f = i[7] ? parseFloat(f).toFixed(i[7]) : parseFloat(f);
                                        break;
                                    case "o":
                                        f = f.toString(8);
                                        break;
                                    case "s":
                                        f = (f = String(f)) && i[7] ? f.substring(0, i[7]) : f;
                                        break;
                                    case "u":
                                        f = Math.abs(f);
                                        break;
                                    case "x":
                                        f = f.toString(16);
                                        break;
                                    case "X":
                                        f = f.toString(16).toUpperCase()
                                }
                                f = /[def]/.test(i[8]) && i[3] && f >= 0 ? "+" + f : f, k = i[4] ? "0" == i[4] ? "0" : i[4].charAt(1) : " ", l = i[6] - String(f).length, j = i[6] ? b(k, l) : "", p.push(i[5] ? f + j : j + f)
                            }
                            return p.join("")
                        }, f.cache = {}, f.parse = function(a) {
                            for (var b = a, c = [], d = [], e = 0; b;) {
                                if (null !== (c = /^[^\x25]+/.exec(b))) d.push(c[0]);
                                else if (null !== (c = /^\x25{2}/.exec(b))) d.push("%");
                                else {
                                    if (null === (c = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b))) throw new Error("[_.sprintf] huh?");
                                    if (c[2]) {
                                        e |= 1;
                                        var f = [],
                                            g = c[2],
                                            h = [];
                                        if (null === (h = /^([a-z_][a-z_\d]*)/i.exec(g))) throw new Error("[_.sprintf] huh?");
                                        for (f.push(h[1]);
                                            "" !== (g = g.substring(h[0].length));)
                                            if (null !== (h = /^\.([a-z_][a-z_\d]*)/i.exec(g))) f.push(h[1]);
                                            else {
                                                if (null === (h = /^\[(\d+)\]/.exec(g))) throw new Error("[_.sprintf] huh?");
                                                f.push(h[1])
                                            } c[2] = f
                                    } else e |= 2;
                                    if (3 === e) throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                                    d.push(c)
                                }
                                b = b.substring(c[0].length)
                            }
                            return d
                        }, f
                    }();
                b.exports = e
            }, {
                "./helper/strRepeat": 22
            }],
            48: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = a("./helper/toPositive");
                b.exports = function(a, b, e) {
                    return a = c(a), b = "" + b, e = null == e ? 0 : Math.min(d(e), a.length), a.lastIndexOf(b, e) === e
                }
            }, {
                "./helper/makeString": 21,
                "./helper/toPositive": 23
            }],
            49: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a, b) {
                    a = c(a), b = c(b);
                    var d = b ? a.indexOf(b) : -1;
                    return ~d ? a.slice(0, d) : a
                }
            }, {
                "./helper/makeString": 21
            }],
            50: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a, b) {
                    a = c(a), b = c(b);
                    var d = a.lastIndexOf(b);
                    return ~d ? a.slice(0, d) : a
                }
            }, {
                "./helper/makeString": 21
            }],
            51: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a, b) {
                    a = c(a), b = c(b);
                    var d = b ? a.indexOf(b) : -1;
                    return ~d ? a.slice(d + b.length, a.length) : a
                }
            }, {
                "./helper/makeString": 21
            }],
            52: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a, b) {
                    a = c(a), b = c(b);
                    var d = b ? a.lastIndexOf(b) : -1;
                    return ~d ? a.slice(d + b.length, a.length) : a
                }
            }, {
                "./helper/makeString": 21
            }],
            53: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a) {
                    return c(a).replace(/<\/?[^>]+>/g, "")
                }
            }, {
                "./helper/makeString": 21
            }],
            54: [function(a, b) {
                var c = a("./helper/adjacent");
                b.exports = function(a) {
                    return c(a, 1)
                }
            }, {
                "./helper/adjacent": 16
            }],
            55: [function(a, b) {
                b.exports = function(a, b) {
                    return [b, a, b].join("")
                }
            }, {}],
            56: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a) {
                    return c(a).replace(/\S/g, function(a) {
                        return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()
                    })
                }
            }, {
                "./helper/makeString": 21
            }],
            57: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a) {
                    return c(a).toLowerCase().replace(/(?:^|\s|-)\S/g, function(a) {
                        return a.toUpperCase()
                    })
                }
            }, {
                "./helper/makeString": 21
            }],
            58: [function(a, b) {
                function c(a, b) {
                    var c, d, e = a.toLowerCase();
                    for (b = [].concat(b), c = 0; c < b.length; c += 1)
                        if (d = b[c]) {
                            if (d.test && d.test(a)) return !0;
                            if (d.toLowerCase() === e) return !0
                        }
                }
                var d = a("./trim");
                b.exports = function(a, b, e) {
                    return "number" == typeof a && (a = "" + a), "string" != typeof a ? !!a : (a = d(a), c(a, b || ["true", "1"]) ? !0 : c(a, e || ["false", "0"]) ? !1 : void 0)
                }
            }, {
                "./trim": 62
            }],
            59: [function(a, b) {
                a("./trim");
                b.exports = function(a, b) {
                    if (null == a) return 0;
                    var c = Math.pow(10, isFinite(b) ? b : 0);
                    return Math.round(a * c) / c
                }
            }, {
                "./trim": 62
            }],
            60: [function(a, b) {
                var c = a("./rtrim");
                b.exports = function(a, b, d, e) {
                    b = b || ", ", d = d || " and ";
                    var f = a.slice(),
                        g = f.pop();
                    return a.length > 2 && e && (d = c(b) + d), f.length ? f.join(b) + d + g : g
                }
            }, {
                "./rtrim": 44
            }],
            61: [function(a, b) {
                var c = a("./toSentence");
                b.exports = function(a, b, d) {
                    return c(a, b, d, !0)
                }
            }, {
                "./toSentence": 60
            }],
            62: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = a("./helper/defaultToWhiteSpace"),
                    e = String.prototype.trim;
                b.exports = function(a, b) {
                    return a = c(a), !b && e ? e.call(a) : (b = d(b), a.replace(new RegExp("^" + b + "+|" + b + "+$", "g"), ""))
                }
            }, {
                "./helper/defaultToWhiteSpace": 17,
                "./helper/makeString": 21
            }],
            63: [function(a, b) {
                var c = a("./helper/makeString");
                b.exports = function(a, b, d) {
                    return a = c(a), d = d || "...", b = ~~b, a.length > b ? a.slice(0, b) + d : a
                }
            }, {
                "./helper/makeString": 21
            }],
            64: [function(a, b) {
                var c = a("./trim");
                b.exports = function(a) {
                    return c(a).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
                }
            }, {
                "./trim": 62
            }],
            65: [function(a, b) {
                var c = a("./helper/makeString"),
                    d = a("./helper/htmlEntities");
                b.exports = function(a) {
                    return c(a).replace(/\&([^;]+);/g, function(a, b) {
                        var c;
                        return b in d ? d[b] : (c = b.match(/^#x([\da-fA-F]+)$/)) ? String.fromCharCode(parseInt(c[1], 16)) : (c = b.match(/^#(\d+)$/)) ? String.fromCharCode(~~c[1]) : a
                    })
                }
            }, {
                "./helper/htmlEntities": 20,
                "./helper/makeString": 21
            }],
            66: [function(a, b) {
                b.exports = function(a, b) {
                    return b = b || '"', a[0] === b && a[a.length - 1] === b ? a.slice(1, a.length - 1) : a
                }
            }, {}],
            67: [function(a, b) {
                var c = a("./sprintf");
                b.exports = function(a, b) {
                    return b.unshift(a), c.apply(null, b)
                }
            }, {
                "./sprintf": 47
            }],
            68: [function(a, b) {
                var c = a("./isBlank"),
                    d = a("./trim");
                b.exports = function(a, b) {
                    return c(a) ? [] : d(a, b).split(b || /\s+/)
                }
            }, {
                "./isBlank": 27,
                "./trim": 62
            }],
            69: [function(a, b) {
                makeString = a("./helper/makeString"), b.exports = function(a, b) {
                    if (a = makeString(a), b = b || {}, width = b.width || 75, seperator = b.seperator || "\n", cut = b.cut || !1, preserveSpaces = b.preserveSpaces || !1, trailingSpaces = b.trailingSpaces || !1, width <= 0) return a;
                    if (cut) {
                        for (index = 0, result = ""; index < a.length;) index % width == 0 && index > 0 && (result += seperator), result += a.charAt(index), index++;
                        if (trailingSpaces)
                            for (; index % width > 0;) result += " ", index++;
                        return result
                    }
                    for (words = a.split(" "), result = "", current_column = 0; words.length > 0;) {
                        if (1 + words[0].length + current_column > width && current_column > 0) {
                            if (preserveSpaces) result += " ", current_column++;
                            else if (trailingSpaces)
                                for (; current_column < width;) result += " ", current_column++;
                            result += seperator, current_column = 0
                        }
                        current_column > 0 && (result += " ", current_column++), result += words[0], current_column += words[0].length, words.shift()
                    }
                    if (trailingSpaces)
                        for (; current_column < width;) result += " ", current_column++;
                    return result
                }
            }, {
                "./helper/makeString": 21
            }]
        }, {}, [15])(15)
    }), Function.prototype.bind && /^object$|^function$/.test(typeof console) && "object" == typeof console.log && "function" == typeof window.addEventListener && (["assert", "clear", "dir", "error", "info", "log", "profile", "profileEnd", "warn"].forEach(function(a) {
        console[a] = this.call(console[a], console)
    }, Function.prototype.bind), ["_exception", "count", "debug", "dirxml", "group", "groupCollapsed", "groupEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace"].forEach(function(a) {
        console[a] = console.log
    })),
    function(a, b) {
        "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : window[a] = b()
    }("log", function() {
        var a, b = navigator.userAgent,
            c = function() {
                var a = /Windows\sNT\s(\d+\.\d+)/;
                return "undefined" != typeof console && console.log && /MSIE\s(\d+)/.test(b) && a.test(b) && parseFloat(a.exec(b)[1]) >= 6.1 ? !0 : !1
            }(),
            d = function() {
                var a = Function.prototype.bind;
                return (!a || a && "undefined" == typeof window.addEventListener) && "object" == typeof console && "object" == typeof console.log
            }(),
            e = !c && !d && /Trident\//.test(b),
            f = c || window.console && "function" == typeof console.log,
            g = 0,
            h = {
                label: "Log:",
                collapsed: !0
            },
            i = function() {
                ! function(a, b, c, d, e, f, g, h, i, j, k) {
                    a.getElementById(e) || (k = a[b + "NS"] && a.documentElement.namespaceURI, k = k ? a[b + "NS"](k, "script") : a[b]("script"), k[c]("id", e), k[c]("src", i + g + j), k[c](e, f), (a[d]("head")[0] || a[d]("body")[0]).appendChild(k), k = new Image, k[c]("src", i + h))
                }(document, "createElement", "setAttribute", "getElementsByTagName", "FirebugLite", "4", "firebug-lite.js", "releases/lite/latest/skin/xp/sprite.png", "https://getfirebug.com/", "#startOpened")
            },
            j = function(a) {
                var b = a.split("\n").pop(),
                    c = document.location.pathname.substr(0, document.location.pathname.lastIndexOf("/") + 1);
                return b.indexOf(c) > -1 && (b = b.replace(c, "").replace(document.location.protocol + "//", "")), /[^\(\@]+\:\d+\:\d+\)?$/.test(b) ? b = "@" + /([^\(\@]+\:\d+\:\d+)\)?$/.exec(b)[1] : (b.indexOf(" (") > -1 ? b = b.split(" (")[1].substring(0, b.length - 1) : b.indexOf("at ") > -1 ? b = b.split("at ")[1] : /([^\/]+\:\d+\:\d+)/.test(b) && (b = /([^\/]+\:\d+\:\d+)/.exec(b)[1]), b = "@" + b.substring(b.lastIndexOf("/") + 1)), b
            },
            k = function(a) {
                var b, c, d;
                if (null === a) return "null";
                if (/function|undefined|string|boolean|number/.test(typeof a)) return typeof a;
                if ("object" == typeof a)
                    for (b = Object.prototype.toString.call(a), c = ["Math", "ErrorEvent", "Error", "Date", "RegExp", "Event", "Array"], d = c.length; d--;) return b === "[object " + c[d] + "]" ? c[d].toLowerCase() : "object" == typeof HTMLElement && a instanceof HTMLElement ? "element" : "string" == typeof a.nodeName && 1 === a.nodeType ? "element" : "object" == typeof Node && a instanceof Node ? "node" : "number" == typeof a.nodeType && "string" == typeof a.nodeName ? "node" : /^\[object (HTMLCollection|NodeList|Object)\]$/.test(b) && "number" == typeof a.length && "undefined" != typeof a.item && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0) ? "nodelist" : "object";
                return "unknown"
            };
        return a = function() {
            var b, f, h = arguments,
                l = Array.prototype.slice.call(h),
                m = c || window.console && "function" == typeof console.log;
            if (a.history.push(arguments), m) {
                if (a.options.group && (a.options.group.collapsed ? console.groupCollapsed(a.options.group.label) : console.group(a.options.group.label)), a.options.lineNumber && (b = new Error, b.fileName && b.lineNumber ? l.push("@" + b.fileName.substr(b.fileName.lastIndexOf("/") + 1) + ":" + b.lineNumber + ":1") : b.stack && l.push(j(b.stack))), a.detailPrint && a.needsDetailPrint)
                    for (console.log("-----------------"), h = a.detailPrint(h), f = 0; f < h.length;) console.log(h[f]), f++;
                else if (1 === l.length && "string" == typeof l[0]) console.log(l.toString());
                else if (e)
                    for (f = 0; f < h.length;) e && "object" === k(h[f]) ? console.dir(h[f]) : console.log(h[f]), f++;
                else console.log(l);
                a.options.group && console.groupEnd()
            } else if (d)
                if (a.detailPrint)
                    for (h = a.detailPrint(h), h.unshift("-----------------"), f = 0; f < h.length;) Function.prototype.call.call(console.log, console, Array.prototype.slice.call([h[f]])), f++;
                else Function.prototype.call.call(console.log, console, Array.prototype.slice.call(h));
            else document.getElementById("FirebugLite") ? 20 > g ? (setTimeout(function() {
                window.log.apply(window, h)
            }, 500), g++) : g = 0 : (i(), setTimeout(function() {
                window.log.apply(window, h)
            }, 3e3), a.needsDetailPrint = !1)
        }, a.history = [], a.options = {
            lineNumber: !0,
            group: !1
        }, e && !a.options.group && (a.options.group = h), a.settings = function(b) {
            b && "object" === k(b) && (f && console.group && ("boolean" == typeof b.group ? a.options.group = b.group ? h : !1 : "object" === k(b.group) && (a.options.group = h, "undefined" != typeof b.group.collapsed && (a.options.group.collapsed = !!b.group.collapsed), "string" == typeof b.group.label && (a.options.group.label = b.group.label))), "undefined" != typeof b.lineNumber && (a.options.lineNumber = !!b.lineNumber))
        }, a
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(b, d) {
            var e, f, g, h = b.nodeName.toLowerCase();
            return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g)) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
        }

        function c(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
                return "hidden" === a.css(this, "visibility")
            }).length
        }
        a.ui = a.ui || {}, a.extend(a.ui, {
            version: "1.11.3",
            keyCode: {
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
            }
        }), a.fn.extend({
            scrollParent: function(b) {
                var c = this.css("position"),
                    d = "absolute" === c,
                    e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    f = this.parents().filter(function() {
                        var b = a(this);
                        return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var a = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++a)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
                return function(c) {
                    return !!a.data(c, b)
                }
            }) : function(b, c, d) {
                return !!a.data(b, d[3])
            },
            focusable: function(c) {
                return b(c, !isNaN(a.attr(c, "tabindex")))
            },
            tabbable: function(c) {
                var d = a.attr(c, "tabindex"),
                    e = isNaN(d);
                return (e || d >= 0) && b(c, !e)
            }
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
            function d(b, c, d, f) {
                return a.each(e, function() {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                }), c
            }
            var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
                f = c.toLowerCase(),
                g = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };
            a.fn["inner" + c] = function(b) {
                return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                    a(this).css(f, d(this, b) + "px")
                })
            }, a.fn["outer" + c] = function(b, e) {
                return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                    a(this).css(f, d(this, b, !0, e) + "px")
                })
            }
        }), a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
            return function(c) {
                return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
            }
        }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
            focus: function(b) {
                return function(c, d) {
                    return "number" == typeof c ? this.each(function() {
                        var b = this;
                        setTimeout(function() {
                            a(b).focus(), d && d.call(b)
                        }, c)
                    }) : b.apply(this, arguments)
                }
            }(a.fn.focus),
            disableSelection: function() {
                var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(a + ".ui-disableSelection", function(a) {
                        a.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(b) {
                if (void 0 !== b) return this.css("zIndex", b);
                if (this.length)
                    for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
                        if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                        e = e.parent()
                    }
                return 0
            }
        }), a.ui.plugin = {
            add: function(b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            },
            call: function(a, b, c, d) {
                var e, f = a.plugins[b];
                if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                    for (e = 0; f.length > e; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
            }
        };
        var d = 0,
            e = Array.prototype.slice;
        a.cleanData = function(b) {
            return function(c) {
                var d, e, f;
                for (f = 0; null != (e = c[f]); f++) try {
                    d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
                } catch (g) {}
                b(c)
            }
        }(a.cleanData), a.widget = function(b, c, d) {
            var e, f, g, h, i = {},
                j = b.split(".")[0];
            return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
                return !!a.data(b, e)
            }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
                return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
            }, a.extend(g, f, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
                return a.isFunction(d) ? void(i[b] = function() {
                    var a = function() {
                            return c.prototype[b].apply(this, arguments)
                        },
                        e = function(a) {
                            return c.prototype[b].apply(this, a)
                        };
                    return function() {
                        var b, c = this._super,
                            f = this._superApply;
                        return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                    }
                }()) : void(i[b] = d)
            }), g.prototype = a.widget.extend(h, {
                widgetEventPrefix: f ? h.widgetEventPrefix || b : b
            }, i, {
                constructor: g,
                namespace: j,
                widgetName: b,
                widgetFullName: e
            }), f ? (a.each(f._childConstructors, function(b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
        }, a.widget.extend = function(b) {
            for (var c, d, f = e.call(arguments, 1), g = 0, h = f.length; h > g; g++)
                for (c in f[g]) d = f[g][c], f[g].hasOwnProperty(c) && void 0 !== d && (b[c] = a.isPlainObject(d) ? a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : d);
            return b
        }, a.widget.bridge = function(b, c) {
            var d = c.prototype.widgetFullName || b;
            a.fn[b] = function(f) {
                var g = "string" == typeof f,
                    h = e.call(arguments, 1),
                    i = this;
                return g ? this.each(function() {
                    var c, e = a.data(this, d);
                    return "instance" === f ? (i = e, !1) : e ? a.isFunction(e[f]) && "_" !== f.charAt(0) ? (c = e[f].apply(e, h), c !== e && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
                }) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function() {
                    var b = a.data(this, d);
                    b ? (b.option(f || {}), b._init && b._init()) : a.data(this, d, new c(f, this))
                })), i
            }
        }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(b, c) {
                c = a(c || this.defaultElement || this)[0], this.element = a(c), this.uuid = d++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(a) {
                        a.target === c && this.destroy()
                    }
                }), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function() {
                return this.element
            },
            option: function(b, c) {
                var d, e, f, g = b;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" == typeof b)
                    if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                        for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; d.length - 1 > f; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                        if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                        e[b] = c
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                        g[b] = c
                    } return this._setOptions(g), this
            },
            _setOptions: function(a) {
                var b;
                for (b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function(a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
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
            _on: function(b, c, d) {
                var e, f = this;
                "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                    function h() {
                        return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                    }
                    "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                    var i = d.match(/^([\w:-]*)\s*(.*)$/),
                        j = i[1] + f.eventNamespace,
                        k = i[2];
                    k ? e.delegate(k, j, h) : c.bind(j, h)
                })
            },
            _off: function(b, c) {
                c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
            },
            _delay: function(a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }
                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function(b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function(b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function(b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                    for (e in f) e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(b, c) {
            a.Widget.prototype["_" + b] = function(d, e, f) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {
                    duration: e
                }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        }), a.widget;
        var f = !1;
        a(document).mouseup(function() {
            f = !1
        }), a.widget("ui.mouse", {
            version: "1.11.3",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var b = this;
                this.element.bind("mousedown." + this.widgetName, function(a) {
                    return b._mouseDown(a)
                }).bind("click." + this.widgetName, function(c) {
                    return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(b) {
                if (!f) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
                    var c = this,
                        d = 1 === b.which,
                        e = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                    return d && !e && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        c.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                        return c._mouseMove(a)
                    }, this._mouseUpDelegate = function(a) {
                        return c._mouseUp(a)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), f = !0, !0)) : !0
                }
            },
            _mouseMove: function(b) {
                if (this._mouseMoved) {
                    if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button) return this._mouseUp(b);
                    if (!b.which) return this._mouseUp(b)
                }
                return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
            },
            _mouseUp: function(b) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), f = !1, !1
            },
            _mouseDistanceMet: function(a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
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
        }), a.widget("ui.draggable", a.ui.mouse, {
            version: "1.11.3",
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
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(a, b) {
                this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(b) {
                var c = this.options;
                return this._blurActiveElement(b), this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0) : !1)
            },
            _blockFrames: function(b) {
                this.iframeBlocks = this.document.find(b).map(function() {
                    var b = a(this);
                    return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(b) {
                var c = this.document[0];
                if (this.handleElement.is(b.target)) try {
                    c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur()
                } catch (d) {}
            },
            _mouseStart: function(b) {
                var c = this.options;
                return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === a(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
            },
            _refreshOffsets: function(a) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                }
            },
            _mouseDrag: function(b, c) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                    var d = this._uiHash();
                    if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                    this.position = d.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
            },
            _mouseStop: function(b) {
                var c = this,
                    d = !1;
                return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    c._trigger("stop", b) !== !1 && c._clear()
                }) : this._trigger("stop", b) !== !1 && this._clear(), !1
            },
            _mouseUp: function(b) {
                return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(b) {
                return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this.handleElement.removeClass("ui-draggable-handle")
            },
            _createHelper: function(b) {
                var c = this.options,
                    d = a.isFunction(c.helper),
                    e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
                return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(b) {
                "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
            },
            _isRootNode: function(a) {
                return /(html|body)/i.test(a.tagName) || a === this.document[0]
            },
            _getParentOffset: function() {
                var b = this.offsetParent.offset(),
                    c = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {
                    top: 0,
                    left: 0
                }), {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var a = this.element.position(),
                    b = this._isRootNode(this.scrollParent[0]);
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
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
                var b, c, d, e = this.options,
                    f = this.document[0];
                return this.relativeContainer = null, e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void(this.containment = null)
            },
            _convertPositionTo: function(a, b) {
                b || (b = this.position);
                var c = "absolute" === a ? 1 : -1,
                    d = this._isRootNode(this.scrollParent[0]);
                return {
                    top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
                    left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
                }
            },
            _generatePosition: function(a, b) {
                var c, d, e, f, g = this.options,
                    h = this._isRootNode(this.scrollParent[0]),
                    i = a.pageX,
                    j = a.pageY;
                return h && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {
                    top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                    left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _normalizeRightBottom: function() {
                "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
            },
            _trigger: function(b, c, d) {
                return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d)
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
        }), a.ui.plugin.add("draggable", "connectToSortable", {
            start: function(b, c, d) {
                var e = a.extend({}, c, {
                    item: d.element
                });
                d.sortables = [], a(d.options.connectToSortable).each(function() {
                    var c = a(this).sortable("instance");
                    c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e))
                })
            },
            stop: function(b, c, d) {
                var e = a.extend({}, c, {
                    item: d.element
                });
                d.cancelHelperRemoval = !1, a.each(d.sortables, function() {
                    var a = this;
                    a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {
                        position: a.placeholder.css("position"),
                        top: a.placeholder.css("top"),
                        left: a.placeholder.css("left")
                    }, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e))
                })
            },
            drag: function(b, c, d) {
                a.each(d.sortables, function() {
                    var e = !1,
                        f = this;
                    f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
                        return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e
                    })), e ? (f.isOver || (f.isOver = 1, f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
                        return c.helper[0]
                    }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
                        this.refreshPositions()
                    }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), a.ui.plugin.add("draggable", "cursor", {
            start: function(b, c, d) {
                var e = a("body"),
                    f = d.options;
                e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor)
            },
            stop: function(b, c, d) {
                var e = d.options;
                e._cursor && a("body").css("cursor", e._cursor)
            }
        }), a.ui.plugin.add("draggable", "opacity", {
            start: function(b, c, d) {
                var e = a(c.helper),
                    f = d.options;
                e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity)
            },
            stop: function(b, c, d) {
                var e = d.options;
                e._opacity && a(c.helper).css("opacity", e._opacity)
            }
        }), a.ui.plugin.add("draggable", "scroll", {
            start: function(a, b, c) {
                c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
            },
            drag: function(b, c, d) {
                var e = d.options,
                    f = !1,
                    g = d.scrollParentNotHidden[0],
                    h = d.document[0];
                g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
            }
        }), a.ui.plugin.add("draggable", "snap", {
            start: function(b, c, d) {
                var e = d.options;
                d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
                    var b = a(this),
                        c = b.offset();
                    this !== d.element[0] && d.snapElements.push({
                        item: this,
                        width: b.outerWidth(),
                        height: b.outerHeight(),
                        top: c.top,
                        left: c.left
                    })
                })
            },
            drag: function(b, c, d) {
                var e, f, g, h, i, j, k, l, m, n, o = d.options,
                    p = o.snapTolerance,
                    q = c.offset.left,
                    r = q + d.helperProportions.width,
                    s = c.offset.top,
                    t = s + d.helperProportions.height;
                for (m = d.snapElements.length - 1; m >= 0; m--) i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
                    snapItem: d.snapElements[m].item
                })), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = p >= Math.abs(k - t), f = p >= Math.abs(l - s), g = p >= Math.abs(i - r), h = p >= Math.abs(j - q), e && (c.position.top = d._convertPositionTo("relative", {
                    top: k - d.helperProportions.height,
                    left: 0
                }).top), f && (c.position.top = d._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top), g && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: i - d.helperProportions.width
                }).left), h && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: j
                }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = p >= Math.abs(k - s), f = p >= Math.abs(l - t), g = p >= Math.abs(i - q), h = p >= Math.abs(j - r), e && (c.position.top = d._convertPositionTo("relative", {
                    top: k,
                    left: 0
                }).top), f && (c.position.top = d._convertPositionTo("relative", {
                    top: l - d.helperProportions.height,
                    left: 0
                }).top), g && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: i
                }).left), h && (c.position.left = d._convertPositionTo("relative", {
                    top: 0,
                    left: j - d.helperProportions.width
                }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
                    snapItem: d.snapElements[m].item
                })), d.snapElements[m].snapping = e || f || g || h || n)
            }
        }), a.ui.plugin.add("draggable", "stack", {
            start: function(b, c, d) {
                var e, f = d.options,
                    g = a.makeArray(a(f.stack)).sort(function(b, c) {
                        return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                    });
                g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
                    a(this).css("zIndex", e + b)
                }), this.css("zIndex", e + g.length))
            }
        }), a.ui.plugin.add("draggable", "zIndex", {
            start: function(b, c, d) {
                var e = a(c.helper),
                    f = d.options;
                e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex)
            },
            stop: function(b, c, d) {
                var e = d.options;
                e._zIndex && a(c.helper).css("zIndex", e._zIndex)
            }
        }), a.ui.draggable, a.widget("ui.resizable", a.ui.mouse, {
            version: "1.11.3",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
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
            _num: function(a) {
                return parseInt(a, 10) || 0
            },
            _isNumber: function(a) {
                return !isNaN(parseInt(a, 10))
            },
            _hasScroll: function(b, c) {
                if ("hidden" === a(b).css("overflow")) return !1;
                var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                    e = !1;
                return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
            },
            _create: function() {
                var b, c, d, e, f, g = this,
                    h = this.options;
                if (this.element.addClass("ui-resizable"), a.extend(this, {
                        _aspectRatio: !!h.aspectRatio,
                        aspectRatio: h.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; b.length > c; c++) d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({
                        zIndex: h.zIndex
                    }), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
                this._renderAxis = function(b) {
                    var c, d, e, f;
                    b = b || this.element;
                    for (c in this.handles) this.handles[c].constructor === String && (this.handles[c] = this.element.children(this.handles[c]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), a(this.handles[c]).length
                }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
                }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
                }).mouseleave(function() {
                    h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var b, c = function(b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                    position: b.css("position"),
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: b.css("top"),
                    left: b.css("left")
                }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
            },
            _mouseCapture: function(b) {
                var c, d, e = !1;
                for (c in this.handles) d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
                return !this.options.disabled && e
            },
            _mouseStart: function(b) {
                var c, d, e, f = this.options,
                    g = this.element;
                return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: c,
                    top: d
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: g.width(),
                    height: g.height()
                }, this.originalSize = this._helper ? {
                    width: g.outerWidth(),
                    height: g.outerHeight()
                } : {
                    width: g.width(),
                    height: g.height()
                }, this.sizeDiff = {
                    width: g.outerWidth() - g.width(),
                    height: g.outerHeight() - g.height()
                }, this.originalPosition = {
                    left: c,
                    top: d
                }, this.originalMousePosition = {
                    left: b.pageX,
                    top: b.pageY
                }, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), g.addClass("ui-resizable-resizing"), this._propagate("start", b), !0
            },
            _mouseDrag: function(b) {
                var c, d, e = this.originalMousePosition,
                    f = this.axis,
                    g = b.pageX - e.left || 0,
                    h = b.pageY - e.top || 0,
                    i = this._change[f];
                return this._updatePrevProperties(), i ? (c = i.apply(this, [b, g, h]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function(b) {
                this.resizing = !1;
                var c, d, e, f, g, h, i, j = this.options,
                    k = this;
                return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
                    width: k.helper.width() - f,
                    height: k.helper.height() - e
                }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
                    top: i,
                    left: h
                })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
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
                var a = {};
                return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a
            },
            _updateVirtualBoundaries: function(a) {
                var b, c, d, e, f, g = this.options;
                f = {
                    minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
                    maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,
                    minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
                    maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
                }, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), f.maxWidth > c && (f.maxWidth = c), f.maxHeight > e && (f.maxHeight = e)), this._vBoundaries = f
            },
            _updateCache: function(a) {
                this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), this._isNumber(a.width) && (this.size.width = a.width)
            },
            _updateRatio: function(a) {
                var b = this.position,
                    c = this.size,
                    d = this.axis;
                return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a
            },
            _respectSize: function(a) {
                var b = this._vBoundaries,
                    c = this.axis,
                    d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
                    e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
                    f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
                    g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
                    h = this.originalPosition.left + this.originalSize.width,
                    i = this.position.top + this.size.height,
                    j = /sw|nw|w/.test(c),
                    k = /nw|ne|n/.test(c);
                return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
            },
            _getPaddingPlusBorderDimensions: function(a) {
                for (var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], e = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > b; b++) c[b] = parseInt(d[b], 10) || 0, c[b] += parseInt(e[b], 10) || 0;
                return {
                    height: c[0] + c[2],
                    width: c[1] + c[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var a, b = 0, c = this.helper || this.element; this._proportionallyResizeElements.length > b; b++) a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
                        height: c.height() - this.outerDimensions.height || 0,
                        width: c.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var b = this.element,
                    c = this.options;
                this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++c.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(a, b) {
                    return {
                        width: this.originalSize.width + b
                    }
                },
                w: function(a, b) {
                    var c = this.originalSize,
                        d = this.originalPosition;
                    return {
                        left: d.left + b,
                        width: c.width - b
                    }
                },
                n: function(a, b, c) {
                    var d = this.originalSize,
                        e = this.originalPosition;
                    return {
                        top: e.top + c,
                        height: d.height - c
                    }
                },
                s: function(a, b, c) {
                    return {
                        height: this.originalSize.height + c
                    }
                },
                se: function(b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                },
                sw: function(b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                },
                ne: function(b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                },
                nw: function(b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                }
            },
            _propagate: function(b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
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
        }), a.ui.plugin.add("resizable", "animate", {
            stop: function(b) {
                var c = a(this).resizable("instance"),
                    d = c.options,
                    e = c._proportionallyResizeElements,
                    f = e.length && /textarea/i.test(e[0].nodeName),
                    g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
                    h = f ? 0 : c.sizeDiff.width,
                    i = {
                        width: c.size.width - h,
                        height: c.size.height - g
                    },
                    j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
                    k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                c.element.animate(a.extend(i, k && j ? {
                    top: k,
                    left: j
                } : {}), {
                    duration: d.animateDuration,
                    easing: d.animateEasing,
                    step: function() {
                        var d = {
                            width: parseInt(c.element.css("width"), 10),
                            height: parseInt(c.element.css("height"), 10),
                            top: parseInt(c.element.css("top"), 10),
                            left: parseInt(c.element.css("left"), 10)
                        };
                        e && e.length && a(e[0]).css({
                            width: d.width,
                            height: d.height
                        }), c._updateCache(d), c._propagate("resize", b)
                    }
                })
            }
        }), a.ui.plugin.add("resizable", "containment", {
            start: function() {
                var b, c, d, e, f, g, h, i = a(this).resizable("instance"),
                    j = i.options,
                    k = i.element,
                    l = j.containment,
                    m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
                m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = {
                    left: 0,
                    top: 0
                }, i.containerPosition = {
                    left: 0,
                    top: 0
                }, i.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }) : (b = a(m), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, d) {
                    c[a] = i._num(b.css("padding" + d))
                }), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = {
                    height: b.innerHeight() - c[3],
                    width: b.innerWidth() - c[1]
                }, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, i.parentData = {
                    element: m,
                    left: d.left,
                    top: d.top,
                    width: g,
                    height: h
                }))
            },
            resize: function(b) {
                var c, d, e, f, g = a(this).resizable("instance"),
                    h = g.options,
                    i = g.containerOffset,
                    j = g.position,
                    k = g._aspectRatio || b.shiftKey,
                    l = {
                        top: 0,
                        left: 0
                    },
                    m = g.containerElement,
                    n = !0;
                m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height)
            },
            stop: function() {
                var b = a(this).resizable("instance"),
                    c = b.options,
                    d = b.containerOffset,
                    e = b.containerPosition,
                    f = b.containerElement,
                    g = a(b.helper),
                    h = g.offset(),
                    i = g.outerWidth() - b.sizeDiff.width,
                    j = g.outerHeight() - b.sizeDiff.height;
                b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                })
            }
        }), a.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var b = a(this).resizable("instance"),
                    c = b.options,
                    d = function(b) {
                        a(b).each(function() {
                            var b = a(this);
                            b.data("ui-resizable-alsoresize", {
                                width: parseInt(b.width(), 10),
                                height: parseInt(b.height(), 10),
                                left: parseInt(b.css("left"), 10),
                                top: parseInt(b.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], d(c.alsoResize)) : a.each(c.alsoResize, function(a) {
                    d(a)
                })
            },
            resize: function(b, c) {
                var d = a(this).resizable("instance"),
                    e = d.options,
                    f = d.originalSize,
                    g = d.originalPosition,
                    h = {
                        height: d.size.height - f.height || 0,
                        width: d.size.width - f.width || 0,
                        top: d.position.top - g.top || 0,
                        left: d.position.left - g.left || 0
                    },
                    i = function(b, d) {
                        a(b).each(function() {
                            var b = a(this),
                                e = a(this).data("ui-resizable-alsoresize"),
                                f = {},
                                g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            a.each(g, function(a, b) {
                                var c = (e[b] || 0) + (h[b] || 0);
                                c && c >= 0 && (f[b] = c || null)
                            }), b.css(f)
                        })
                    };
                "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function(a, b) {
                    i(a, b)
                })
            },
            stop: function() {
                a(this).removeData("resizable-alsoresize")
            }
        }), a.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var b = a(this).resizable("instance"),
                    c = b.options,
                    d = b.size;
                b.ghost = b.originalElement.clone(), b.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: d.height,
                    width: d.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
            },
            resize: function() {
                var b = a(this).resizable("instance");
                b.ghost && b.ghost.css({
                    position: "relative",
                    height: b.size.height,
                    width: b.size.width
                })
            },
            stop: function() {
                var b = a(this).resizable("instance");
                b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
            }
        }), a.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var b, c = a(this).resizable("instance"),
                    d = c.options,
                    e = c.size,
                    f = c.originalSize,
                    g = c.originalPosition,
                    h = c.axis,
                    i = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid,
                    j = i[0] || 1,
                    k = i[1] || 1,
                    l = Math.round((e.width - f.width) / j) * j,
                    m = Math.round((e.height - f.height) / k) * k,
                    n = f.width + l,
                    o = f.height + m,
                    p = d.maxWidth && n > d.maxWidth,
                    q = d.maxHeight && o > d.maxHeight,
                    r = d.minWidth && d.minWidth > n,
                    s = d.minHeight && d.minHeight > o;
                d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.left = g.left - l) : ((0 >= o - k || 0 >= n - j) && (b = c._getPaddingPlusBorderDimensions(this)), o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, c.position.left = g.left - l) : (n = j - b.width, c.size.width = n, c.position.left = g.left + f.width - n))
            }
        }), a.ui.resizable
    });