/*Copyright (c) 2011, 2018, Oracle and/or its affiliates.  All rights reserved.*/
try {
    (function(v, m) {
        var n = {
            a: {}
        };
        n.a.a = function() {};
        m.floor(m.random() * m.pow(10, 12));
        var C = [],
            t = {},
            D = [],
            A = {};
        (function(a) {
            function h(e) {
                return (e = a.b.a.toString.call(e)) && ("[object Array]" === e || "[object Array Iterator]" === e)
            }
            a.b = {};
            a.b.a = {};
            a.b.b = h;
            a.b.c = function(a) {
                return a && a.document && a.location && a[__ale + rt__] && a[__setInte + rval__]
            };
            a.b.d = function(e) {
                if (null == e || a.b.c(e)) return !1;
                var f = e.length;
                return 1 === e.nodeType && f ? !0 : "string" === typeof e || h(e) || 0 === f || "number" === typeof f && 0 < f && f - 1 in e
            };
            a.b.forEach =
                function(e, f, l, h) {
                    var c, b = typeof e;
                    if (e)
                        if ("function" === b)
                            for (c in e) {
                                if ("prototype" != c && "length" != c && "name" != c && (h || !e.hasOwnProperty || e.hasOwnProperty(c)) && (b = f.call(l, e[c], c), "boolean" === typeof b && !b)) break
                            } else if ("number" === b)
                                for (c = 0; c < e && (b = f.call(l, e, c), "boolean" !== typeof b || b); c++);
                            else if ("function" === typeof e.every) e.every(function(a, c, b) {
                        a = f.call(l, a, c);
                        return !("boolean" === typeof a && !a)
                    });
                    else if (a.b.d(e))
                        for (c = 0; c < e.length && (b = f.call(l, e[c], c), "boolean" !== typeof b || b); c++);
                    else
                        for (c in e)
                            if (h ||
                                e.hasOwnProperty(c))
                                if (b = f.call(l, e[c], c), "boolean" === typeof b && !b) break;
                    return e
                };
            a.b.e = function(e) {
                if (!e) return !1;
                var f;
                if (e !== Object(e)) f = e;
                else if (a.b.d(e)) {
                    f = [];
                    for (var l = 0, h = e.length; l < h; l++) f[l] = e[l]
                } else
                    for (l in f = {}, e) f[l] = e[l];
                return f
            };
            a.b.f = function(e, f) {
                if (!e || "function" !== typeof e) return !1;
                var l = !1;
                0 <= String(e).indexOf("[native code]") ? l = !0 : a.c.a || e === Function.prototype.toString || (l = !0);
                l && f && (l = e.toString && e.toString === Function.prototype.toString);
                return l
            };
            a.b.g = function(a) {
                return !!/iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(a ||
                    navigator && navigator.userAgent || "")
            };
            a.b.h = function(a) {
                return !!/Android/.exec(a || navigator && navigator.userAgent || "")
            };
            a.b.i = function(a) {
                a = a || navigator && navigator.userAgent || "";
                var f = /Safari|CriOS/i;
                return !(!/iPhone|iPod|iPad/.exec(a) || f.exec(a))
            };
            a.b.j = function(e) {
                e = e || navigator && navigator.userAgent || "";
                return a.b.h(e) ? !!/Version/.exec(e) : !1
            };
            a.b.k = function() {
                if (!navigator) return null;
                var a;
                a = navigator.userAgent;
                return "Microsoft Internet Explorer" == navigator.appName ? parseInt(a.replace(/^.*MSIE (\d+).*$/,
                    "$1"), 10) : "Netscape" == navigator.appName && (a = a.match(/(?:Trident\/.*rv:|MSIE )(\d+)/)) ? parseInt(a[1], 10) : null
            };
            a.b.l = function() {
                return null != a.b.k()
            }
        })(n);
        (function(a) {
            function h(a) {
                var b = new RegExp("(^| )" + a + "($| )");
                return function(a) {
                    return a && a.className && a.className.match(b)
                }
            }
            a.b.m = 2500;
            a.b.n = 1E3;
            a.b.o = !1;
            a.b.p = !1;
            a.b.q = function() {
                var a = /Firefox\/(\d+)/.exec(navigator.userAgent);
                return a ? (a = parseInt(a[1], 10), 21 > a && 14 < a) : !1
            }();
            a.b.r = function() {
                var c, b = /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
                a.c.b || (c = a.b.s(), !c && a.c.c && (c = a.c.c));
                c || (c = a.c.d.location.hostname);
                return (c = c && c.match && c.match(b)) && c[1] || a.c.d.location.hostname
            };
            a.b.t = function() {
                var c, b;
                a.c.b ? c = window.top && window.top.location && window.top.location.href : (b = a.d.a(), b.parent === window.top ? c = b.document.referrer : (c = a.b.s(), c || (c = b.document.referrer)));
                return c
            };
            a.b.u = function() {
                var c = !1,
                    b, d = /^https?:\/\/(.*?)\/([^?#]*)/;
                a.c.b ? (c = window.location.hostname.replace("www.", ""), c += window.location.pathname) : (b = a.d.a(), b.parent === window.top &&
                    (c = b.document.referrer) && (b = d.exec(c)) && (c = b[1].replace("www.", "") + "/" + b[2]));
                "string" === typeof c && "/" === c.charAt(c.length - 1) && (c = c.substr(0, c.length - 1));
                return c
            };
            a.b.v = function() {
                var c;
                a.c.b ? c = 2 : (c = a.d.a(), c = c.parent === window.top ? 2 : location && location.ancestorOrigins ? 1 : 0);
                return c
            };
            a.b.s = function() {
                var a = location && location.ancestorOrigins;
                return a ? 0 === a.length ? !1 : a[a.length - 1] : !1
            };
            a.b.w = function() {
                var c, b = a.b.r(),
                    d = b && b.split("."),
                    g = d && d.length;
                3 <= g ? c = "co" === d[g - 2] || "com" === d[g - 2] ? d[g - 3] + "." + d[g -
                    2] + "." + d[g - 1] : d[g - 2] + "." + d[g - 1] : 2 == g && (c = d[g - 2] + "." + d[g - 1]);
                return c && decodeURIComponent(c) || decodeURIComponent(b)
            };
            a.b.x = function(a) {
                if ("string" !== typeof a) return "";
                var b = a.match(/^([^:]{2,}:\/\/[^\/]*)/);
                b && b[1] && (a = b[1]);
                return a
            };
            a.b.y = function(a, b) {
                for (var d = [a], g = 1; g <= b; g++) d.push(a + g), d.push(a - g);
                d = d[m.floor(m.random() * d.length)];
                g = m.floor(m.random() * d);
                return {
                    multiplier: d,
                    sample: 0 == g
                }
            };
            a.b.z = function(c, b) {
                var d = a.b.y(c, b);
                a.b.z = function() {
                    return d
                };
                return d
            };
            a.b.aa = function() {
                return a.b.z(a.e,
                    a.f).sample
            };
            a.b.ab = function() {
                var c = a.b.k();
                return 5 === c || 6 === c || 7 === c
            };
            a.b.ac = function(a) {
                if (!navigator) return null;
                a = a || navigator.userAgent;
                return a ? (a = a.match(/Edge\/(\d{1,}(.\d{1,})?)/)) ? parseFloat(a[1]) : null : null
            };
            a.b.ad = function(c, b) {
                return -1 !== a.b.indexOf(c, b)
            };
            a.b.ae = function() {
                function a(c) {
                    if (!c) return "";
                    c = c.match(/[\d]+/g);
                    c.length = 3;
                    return c.join(".")
                }
                var b = !1,
                    d = "";
                if (navigator.plugins && navigator.plugins.length) {
                    var g = navigator.plugins["Shockwave Flash"];
                    g && (b = !0, g.description && (d = a(g.description)));
                    navigator.plugins["Shockwave Flash 2.0"] && (b = !0, d = "2.0.0.11")
                } else if (navigator.mimeTypes && navigator.mimeTypes.length)(b = (g = navigator.mimeTypes["application/x-shockwave-flash"]) && g.enabledPlugin && g.enabledPlugin.description) && (d = a(g.enabledPlugin.description));
                else try {
                    g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = !0, d = a(g.GetVariable("$version"))
                } catch (f) {
                    try {
                        g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = !0, d = "6.0.21"
                    } catch (e) {
                        try {
                            g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                                b = !0, d = a(g.GetVariable("$version"))
                        } catch (l) {}
                    }
                }
                return b ? d : "0"
            };
            a.b.getElementsByClassName = function(a, b, d) {
                b = b || "*";
                d = d || document;
                if (d.getElementsByClassName) {
                    var g = [],
                        f = d.getElementsByClassName(a);
                    if ("*" !== b) {
                        a = 0;
                        for (d = f.length; a < d; a++) {
                            var e = f[a];
                            e.tagName === b && g.push(e)
                        }
                        return g
                    }
                    return f
                }
                f = [];
                b = d.getElementsByTagName(b);
                d = h(a);
                e = b.length;
                for (a = 0; a < e; a++) g = b[a], d(g) && f.push(g);
                return f
            };
            a.b.af = h;
            a.b.ag = function(a, b) {
                if (!a || !b) return !1;
                var d = new RegExp("(^| )" + b + "($| )");
                return a.className && a.className.match(d)
            };
            a.b.ah = function(a) {
                return new v - a.de
            };
            a.b.ai = function(a) {
                return a.replace(/^http:/, "").replace(/^\/\//, "").replace(/^www[^.]*\./, "").split("/")[0]
            };
            a.b.aj = function(c, b, d) {
                if (("undefined" === typeof d || !d) && c && (d = a.b.ak(c), !d)) return;
                if (c && c.nodeType)
                    if ("undefined" === typeof Node) {
                        if (1 != c.nodeType) return
                    } else if (c.nodeType != Node.ELEMENT_NODE) return;
                if (d.getComputedStyle) return d.getComputedStyle(c, "") && d.getComputedStyle(c, "")[b];
                for (d = b.indexOf("-"); - 1 < d;) b = d == b.length - 1 ? b.substr(0, d) : b.substr(0, d) +
                    b.charAt(d + 1).toUpperCase() + b.substr(d + 2), d = b.indexOf("-");
                if (c.currentStyle) return c.currentStyle[b];
                if (c.style) return c.style[b]
            };
            a.b.al = function(c) {
                if (!c) return !1;
                var b = a.b.aj(c, "background-image");
                b || (b = a.b.aj(c, "backgroundImage"));
                var d;
                b && (d = (d = b.match("url\\((.*)\\)")) && d[1].replace(/\x22/g, ""));
                return d
            };
            a.b.am = function(c, b, d) {
                if (!c) return !1;
                var g = "boolean" === typeof d ? d : !1,
                    f = [c],
                    e = !1;
                a.b.forEach("number" === typeof b ? b : 50, function() {
                    if ((e = a.b.an(c)) && 1 == e.nodeType) c = e, f.push(c);
                    else if (g && e &&
                        9 == e.nodeType)
                        if ((e = a.d.b(c)) && 1 == e.nodeType) c = e, f.push(c);
                        else return !1;
                    else return !1
                });
                return f
            };
            a.b.ao = function(c, b) {
                var d = a.b.am(c);
                return d && -1 !== a.b.indexOf(d, b)
            };
            a.b.an = function(a) {
                return a.parentNode || a.parentElement || !1
            };
            a.b.ap = function(a) {
                return !!/iPhone|iPod/.exec(a || navigator && navigator.userAgent || "")
            };
            a.b.aq = function(a) {
                return !!/iPad/.exec(a || navigator && navigator.userAgent || "")
            };
            a.b.ar = function() {
                var c = {};
                return function(b) {
                    if (c[b]) return c[b];
                    for (var d = [
                            [70, 66, 65, 86],
                            [84, 119, 105, 116,
                                116, 101, 114
                            ],
                            [80, 105, 110, 116, 101, 114, 101, 115, 116],
                            [65, 112, 112, 108, 101, 78, 101, 119, 115]
                        ], g = 0, f = d.length; g < f; g++) {
                        for (var e = d[g], l = "", h = 0, k = e.length; h < k; h++) l += String.fromCharCode(e[h]);
                        if ((new RegExp(l)).test(b)) return c[b] = l, c[b]
                    }
                    if (0 < a.c.d.document.getElementsByTagName("article").length) return c[b] = "SC/Article Tag", c[b];
                    if (1.5 <= a.c.e / a.c.d.innerHeight) return c[b] = "SC/Page Height", c[b];
                    d = a.c.d.document.getElementsByTagName("meta");
                    e = {
                        "fb:app_id": 1,
                        "og:site_name": 1,
                        "og:type": 1,
                        "fb:page_id": 1
                    };
                    g = 0;
                    for (f =
                        d.length; g < f; g++)
                        if ((l = d[g].getAttribute("property")) && e.hasOwnProperty(l)) return c[b] = "SC/Property", c[b];
                    b = a.c.d.document.getElementsByTagName("link");
                    g = 0;
                    for (f = b.length; g < f; g++)
                        if (d = b[g], "icon" === d.getAttribute("rel") && /favicon\./.test(d.getAttribute("href"))) return "SC/Favicon";
                    return null
                }
            }();
            a.b.as = function() {
                for (var c = [103, 46, 100, 111, 117, 98, 108, 101, 99, 108, 105, 99, 107, 46, 110, 101, 116], b = "", d = 0, g = c.length; d < g; d++) b += String.fromCharCode(c[d]);
                return (new RegExp("^[^.]+." + b)).test(a.b.r())
            };
            a.b.at =
                function() {
                    var c = a.c.d.screen;
                    if (a.b.i()) {
                        var b;
                        "undefined" !== typeof window.orientation ? 0 === window.orientation || 180 === window.orientation ? (b = c.width, c = c.height) : (b = c.height, c = c.width) : b = c = 0;
                        return {
                            w: b,
                            h: c
                        }
                    }
                    if (a.b.j()) {
                        b = a.c.d.devicePixelRatio;
                        var d = 1;
                        .05 > m.abs(c.width / a.c.d.innerWidth - b) && (d = b);
                        return {
                            w: c.width / d,
                            h: c.height / d
                        }
                    }
                    return {
                        w: c.width,
                        h: c.height
                    }
                };
            a.b.au = function() {
                var a = null;
                "string" === typeof navigator.doNotTrack ? a = navigator.doNotTrack : "string" === typeof navigator.msDoNotTrack ? a = navigator.msDoNotTrack :
                    "string" === typeof window.doNotTrack && (a = window.doNotTrack);
                return !a || "1" !== a[0] && "yes" !== a ? !1 : !0
            };
            a.b.av = function() {
                var c;
                return function() {
                    if ("undefined" === typeof c) {
                        var b = a.b.w();
                        if (!b) return !1;
                        var d = [a.g.a([39, 34, 28, 36, 72, 28, 40, 38]), a.g.a([39, 34, 28, 36, 35, 43, 72, 28, 40, 38]), a.g.a([29, 34, 44, 39, 30, 50, 72, 28, 40, 38])];
                        c = a.b.ad(d, b)
                    }
                    return c
                }
            }();
            a.b.getAttribute = function(a, b) {
                return a[b] || a.getAttribute(b)
            };
            var e = [function(a) {
                if (!a || "IFRAME" !== a.nodeName) return !1;
                var b = a.offsetHeight;
                return isNaN(b) || 15 <
                    b || "google_conversion_frame" !== a.name ? !1 : !0
            }];
            a.b.aw = function(c, b) {
                return "undefined" === typeof c || null === c || !1 === c || !a.b.ax(c) || c.nodeName && "IMG" == c.nodeName && !c.complete || a.b.filter(e, function(a) {
                    return a(c)
                }).length || !0 === c[MOATALREADYFOUND] ? !1 : !0
            };
            a.b.ay = function(c, b, d) {
                a.h.a(b);
                !0 === d && b.aa && (b.aa[DOM_NODE_KEY] = void 0, b.aa[MOATALREADYFOUND] = void 0);
                !b.hasIframeListener && c.tagName && "iframe" === c.tagName.toLowerCase() && (b.hasIframeListener = !0);
                b.components && b.components.splice(0, 1, c);
                b.aa = c;
                a.i.a.zaxs("adElementUpdate");
                a.b.az(b.aa);
                a.h.b(b);
                b.periscopeManager && b.periscopeManager.rebuildPixelTargets(c, c.parentNode)
            };
            a.b.ba = function(a) {
                return a.replace(/:/g, "%3A").replace(/=/g, "%3D").replace(/,/g, "%2C")
            };
            a.b.bb = function(c) {
                var b = [];
                a.b.forEach(c, function(c, g) {
                    var f = typeof c;
                    "number" == f ? b.push(a.b.ba(g) + ":" + a.b.ba(c + "")) : "string" == f ? b.push(a.b.ba(g) + ":" + a.b.ba('"' + c + '"')) : "undefined" == f ? b.push(a.b.ba(g) + ":" + a.b.ba("undefined")) : "boolean" == f ? b.push(a.b.ba(g) + ":" + a.b.ba(c ? "true" : "false")) : null === c ? b.push(a.b.ba(g) + ":" +
                        a.b.ba("null")) : "object" != f && "function" != f || !c.toString || b.push(a.b.ba(g) + ":" + a.b.ba('"' + c.toString() + '"'))
                }, null, !0);
                b.sort();
                return "{" + b.join(",") + "}"
            };
            a.b.bc = function(a) {
                var b = {};
                if ("string" != typeof a || "{" != a.charAt(0)) return !1;
                a = a.slice(1, -1).split(",");
                for (var d = 0; d < a.length; d++) {
                    var g = a[d].split(":");
                    g[1] = unescape(g[1]);
                    "true" == g[1] ? g[1] = !0 : "false" == g[1] ? g[1] = !1 : '"' == g[1].charAt(0) ? g[1] = g[1].slice(1, -1) : g[1] = "undefined" == g[1] ? void 0 : "null" == g[1] ? null : "NaN" == g[1] ? NaN : parseFloat(g[1]);
                    b[unescape(g[0])] =
                        g[1]
                }
                return b
            };
            a.b.ax = function(c) {
                var b = c.offsetWidth,
                    d = c.offsetHeight;
                if (a.b.o && d < a.b.o || a.b.p && b < a.b.p) return !1;
                a.b.forEach(a.b.am(c, 3), function(a) {
                    var c = a.style && a.style.width,
                        f = a.style && a.style.height;
                    a && a.style && "hidden" == a.style.overflow && ("" != c || "" != f) && (a = parseFloat(c), f = parseFloat(f), b = !isNaN(a) && a < b ? a : b, d = !isNaN(f) && f < d ? f : d)
                });
                if (c = a.b.bd(c)) b = c.width < b ? c.width : b, d = c.height < d ? c.height : d;
                return a.c.f() && .9 > b * d / (a.c.d.innerWidth * a.c.d.innerHeight) ? !1 : b * d >= a.b.m
            };
            var f = {};
            a.b.bd = function(c) {
                if (!c ||
                    !c.nodeName || "IMG" == !c.nodeName || !c.complete) return !1;
                var b = c.getAttribute("src");
                if (!b) return !1;
                if (f[b]) return f[b];
                try {
                    if ("undefined" !== typeof c.naturalHeight && "undefined" !== typeof c.naturalWidth) {
                        var d = {
                            width: c.naturalWidth,
                            height: c.naturalHeight
                        };
                        return f[c.src] = d
                    }
                } catch (g) {}
                return a.c.g && (a.c.g.src = b, a.c.g.a) ? (d = {
                    width: parseInt(a.c.g.b),
                    height: parseInt(a.c.g.c)
                }, f[b] = d) : !1
            };
            a.b.be = function() {
                if (!a.c.h) {
                    var c = a.c,
                        b;
                    a: {
                        for (var d = document.getElementsByTagName("script"), g = d.length - 1; - 1 < g; g--)
                            if ((b =
                                    d[g]) && b.src && b.src.indexOf && (-1 !== b.src.indexOf("newscomprebidheader135900089283/yi.js") || -1 !== b.src.indexOf("newscomprebidheader135900089283%2Fyi.js")) && ("undefined" === typeof b[MOATALREADYFOUND] || !0 !== b[MOATALREADYFOUND])) {
                                b[MOATALREADYFOUND] = !0;
                                break a
                            } b = void 0
                    }
                    c.h = b
                }
                return a.c.h ? (a.c.h[MOATALREADYFOUND] = !0, a.c.h) : null
            };
            a.b.bf = function(a, b) {
                for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d])
            };
            a.b.bg = function(a) {
                var b, d = /https:/i;
                if (a) b = d.test(a.src || a.href || "http:") ? "https:" : "http:";
                else try {
                    b = window.location.protocol
                } catch (g) {
                    a =
                        document.createElement("a"), a.href = "", b = a.protocol
                }
                return "https:" === b ? "https:" : "http:"
            };
            a.b.bh = function(a) {
                try {
                    return -1 !== (a.src || a.getAttribute("src")).indexOf("psd=1")
                } catch (b) {
                    return !1
                }
            };
            a.b.bi = function(a) {
                for (var b = [], d = 0; d < a.length; d++) b.push(a[d]);
                return b
            };
            a.b.nextElementSibling = function(a) {
                if (a.nextElementSibling) return a.nextElementSibling;
                for (; a = a.nextSibling;)
                    if (1 === a.nodeType) return a
            };
            a.b.previousElementSibling = function(a) {
                if (a) {
                    if (a.previousElementSibling) return a.previousElementSibling;
                    for (var b = 0;
                        (a = a.previousSibling) && 1E3 > b;)
                        if (b++, a && 1 === a.nodeType) return a
                }
            };
            a.b.bj = function(a, b, d) {
                "undefined" !== typeof d && (a[b] = d)
            };
            a.b.filter = function(a, b) {
                for (var d = [], g = 0; g < a.length; g++) b(a[g]) && d.push(a[g]);
                return d
            };
            a.b.bk = function(a, b) {
                for (var d = [], g = 0; g < b.length; g++) d.push(a(b[g]));
                return d
            };
            a.b.reduce = function(c, b, d) {
                if (!a.b.d(c) || "function" !== typeof b) return !1;
                d = d ? b(d, c[0]) : c[0];
                for (var g = 1; g < c.length; g++) d = b(d, c[g]);
                return d
            };
            a.b.indexOf = function(c, b) {
                if (!c) return -1;
                if (a.b.b(c)) {
                    for (var d =
                            0, g = c.length; d < g; d++)
                        if (c[d] === b) return d;
                    return -1
                }
                return "string" === typeof c ? b || "string" !== typeof b ? c.indexOf(b) : -1 : -1
            };
            a.b.lastIndexOf = function(c, b) {
                if (!c) return -1;
                if (a.b.b(c)) {
                    for (var d = c.length - 1; 0 <= d; d--)
                        if (c[d] === b) return d;
                    return -1
                }
                return "string" === typeof c ? "" === b ? -1 : c.lastIndexOf(b) : -1
            };
            a.b.bl = function(c, b) {
                if (!c || !b) return !1;
                var d = a.b.bm(b);
                if (!d) return !1;
                if (a.b.hasChildNodes(d)) {
                    var g = d.childNodes[m.max(0, d.childNodes.length - 1)] || null;
                    d.insertBefore(c, g)
                } else d.appendChild(c);
                return d
            };
            a.b.bn =
                function(c, b, d) {
                    if ("string" != typeof c || !b || !document) return !1;
                    d = d || document.createElement("script");
                    d.type = "text/javascript";
                    b = a.b.bl(d, b);
                    if (!b) return !1;
                    d.src = c;
                    return b
                };
            a.b.hasChildNodes = function(a) {
                return a && a.childNodes && 0 < a.childNodes.length
            };
            a.b.bm = function(c) {
                if (!c) return !1;
                if ("OBJECT" !== c.nodeName && "EMBED" !== c.nodeName) return c;
                c = a.b.am(c);
                var b = !1;
                a.b.forEach(c, function(a) {
                    if (a && "OBJECT" !== a.nodeName && "EMBED" !== a.nodeName) return b = a, !1
                });
                return b
            };
            a.b.bo = function(a, b) {
                if ("undefined" === typeof a) return !1;
                for (var d = 0, g = b.length; d < g; d++)
                    if ("string" == typeof b[d]) {
                        try {
                            a = a[b[d]]
                        } catch (f) {}
                        if ("undefined" === typeof a) return !1
                    } return a
            };
            a.b.bp = function(a) {
                return A && "undefined" !== typeof a && A[a] ? A[a] : !1
            };
            a.b.bq = function(c, b) {
                for (var d = a.b.am(c, 50, !0), g = 0; g < d.length; g++)
                    if (d[g] === b) return !0;
                return !1
            };
            a.b.br = function(c) {
                if (!c || !c.aa) return !1;
                if ("number" !== typeof c.ADAREA) {
                    var b, d;
                    if (c.isCompositeAd && c.components && 1 < c.components.length)
                        for (b = c.ADAREA = 0; b < c.components.length; b++) c.ADAREA += c.components[b].offsetWidth *
                            c.components[b].offsetHeight;
                    else c.elementRect ? (b = c.elementRect.right - c.elementRect.left, d = c.elementRect.bottom - c.elementRect.top, c.ADAREA = b * d) : c.ADAREA = c.aa.offsetWidth * c.aa.offsetHeight;
                    a.c.i() && a.j.realEstateMeasurements && (b = a.j.realEstateMeasurements.w, d = a.j.realEstateMeasurements.h, c.ADAREA = b * d)
                }
                return c.ADAREA
            };
            a.b.az = function(c) {
                if (!(!c || c && c.CLIPCHECKINGTARGET)) {
                    var b = a.b.am(c, 3),
                        d;
                    b && 0 < b.length && (a.b.forEach(b, function(a) {
                            if (a && a.style && a.style.clip) return d = a, !1
                        }), !d && c.style && c.style.clip &&
                        (d = c), d && (c.CLIPCHECKINGTARGET = d))
                }
            };
            var l = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
            a.b.bs = function(c) {
                c = c.match(l);
                var b = !1;
                c && (c = a.b.bk(function(a) {
                    return parseInt(a, 10)
                }, c), b = {
                    top: c[1],
                    right: c[2],
                    bottom: c[3],
                    left: c[4]
                });
                return b
            };
            a.b.bt = function(a, b) {
                var d = "",
                    g;
                for (g in a)
                    if (a.hasOwnProperty(g)) var f = encodeURIComponent(a[g]),
                        d = d + ("&" + g + "=" + f);
                return d.slice(1)
            };
            a.b.bu = function(a, b) {
                var d = new v,
                    d = [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-");
                a += b + d;
                var g = 0;
                if (0 == a.length) return g;
                for (d = 0; d < a.length; d++) var f = a.charCodeAt(d),
                    g = (g << 5) - g + f,
                    g = g & g;
                return m.abs(g)
            };
            a.b.bv = function() {
                var a = function() {
                    var a = window.pageXOffset ? window.pageXOffset + window.innerWidth - 1 : 0,
                        c = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0;
                    return a || c ? !document.elementFromPoint(a, c) : !0
                }();
                return function(b, d, g) {
                    if (!a) {
                        var f = g.defaultView || g.parentWindow || window;
                        b += f.pageXOffset;
                        d += f.pageYOffset
                    }
                    return g.elementFromPoint(b, d)
                }
            }();
            a.b.bw = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a,
                    b)
            };
            a.b.bx = function(c) {
                if (!c || !c.style || !c.style.filter) return !1;
                c = c.style.filter.split(" ");
                var b = !1,
                    d;
                a.b.forEach(c, function(a) {
                    var c = a.match(/\d+/);
                    a.search(/opacity/) && c && 0 < c.length && (d = parseFloat(c.join("")), !1 === b || d < b) && (b = d)
                });
                return b
            };
            a.b.by = function(c, b) {
                var d;
                if (!c) return 100;
                if (b && c.style && "hidden" === c.style.visibility) return 0;
                d = c.style && c.style.opacity ? parseFloat(c.style.opacity) : a.b.bx(c);
                return a.b.bz(d) ? d : 100
            };
            a.b.ca = function(c, b) {
                var d = -1;
                if (a.c.d.getComputedStyle) {
                    var g = a.c.d.getComputedStyle(c);
                    if (!g) return d;
                    if (b && "hidden" === g.visibility) return 0;
                    d = parseFloat(g.opacity)
                }
                return d
            };
            a.b.cb = function(c, b, d) {
                if (!c || !c.aa) return !1;
                "undefined" === typeof c.parentNodeTree && (c.parentNodeTree = a.b.am(c.aa.parentElement, 50, !0), b && c.parentNodeTree.push(c.aa));
                var g = 100,
                    f, e;
                a.b.forEach(c.parentNodeTree, function(b) {
                    f = a.b.by(b, d);
                    0 === f && (e = a.b.ca(b, d), a.b.bz(e) && e >= f && (f = e));
                    f < g && (g = f);
                    if (0 === g) return !1
                });
                return g
            };
            a.b.cc = function(a, b, d) {
                return function() {
                    b.apply(d || null, a.concat(a.slice.call(arguments)))
                }
            };
            a.b.ak = function(a) {
                try {
                    var b = a && a.ownerDocument;
                    return b && (b.defaultView || b.parentWindow)
                } catch (d) {
                    return !1
                }
            };
            a.b.cd = function(c, b, d) {
                if (!c || !b) return !1;
                var g = [];
                "number" !== typeof d && (d = 50);
                for (var f = 0; f < d; f++)
                    if (b != b.parent) {
                        if (c = a.d.b(c, b)) g.push(c);
                        else break;
                        b = b.parent
                    } else break;
                return g
            };
            a.b.ce = function(a) {
                a = m.max(4, a);
                return ((1 + m.random()) * m.pow(16, a) | 0).toString(16).substring(0, a)
            };
            a.b.cf = function() {
                var c = a.b.ce;
                return c(4) + "-" + c(4) + "-" + c(4) + "-" + c(4)
            };
            a.b.cg = function(a) {
                window && window.clearTimeout &&
                    window.clearTimeout(a)
            };
            a.b.ch = function(a) {
                window && window.clearInterval && window.clearInterval(a)
            };
            var k = function(c, b) {
                if (a.b.f(b.toString)) return b.toString();
                if (a.b.f(c && c.Function.prototype.toString)) return b.toString = c.Function.prototype.toString, b.toString();
                var d = a.c.d !== c && a.c.d && a.c.d.Function.prototype.toString;
                if (a.b.f(d)) return b.toString = d, b.toString();
                if (a.c.j && 8 >= a.b.k()) return b.toString();
                var d = c || window,
                    g = d.document.createElement("IFRAME");
                g.style.display = "none";
                g.style.width = "0px";
                g.style.height = "0px";
                g.width = "0";
                g.height = "0";
                a.b.bl(g, d.document.documentElement);
                g.contentWindow && (b.toString = g.contentWindow.Function.prototype.toString);
                var f = b.toString();
                d.document.documentElement.removeChild(g);
                return f
            };
            a.b.toString = function(c, b) {
                b = b || a.c.d;
                var d;
                try {
                    d = k(b, c)
                } catch (g) {
                    d = c.toString()
                }
                return d
            };
            a.b.ci = function(c, b, d) {
                c = a.b.toString(c, d);
                if (a.c.k()) d.eval("(" + c + ")(" + b + ")");
                else if (a.c.l(d))(new d.Function("(" + c + ")(" + b + ")"))();
                else {
                    var g = d.document.createElement("script");
                    g.type =
                        "text/javascript";
                    g.text = "(" + c + ")(" + b + ")";
                    a.b.bl(g, d.document.body)
                }
            };
            a.b.cj = function(c, b, d, g) {
                function f(a, b) {
                    try {
                        return g(b[a])
                    } catch (c) {}
                }
                var e, l;
                if ("string" !== typeof c) return !1;
                "function" !== typeof g && (g = function(a) {
                    return a
                });
                e = window;
                l = f(c, e);
                if (!l) {
                    b = a.d.c(e, "number" === typeof b ? b : 20);
                    if (!b) return !1;
                    for (var h = 0, k = b.length; h < k && (e = b[h], l = f(c, e), "undefined" === typeof l); h++);
                }
                return d ? [l, e] : l
            };
            a.b.ck = function(a, b) {
                var d = a.toString();
                b && (d = "(" + d + "(" + b + "))");
                return "(function(){try{return(" + d + ")()}catch(e){return false}})()"
            };
            a.b.cl = function() {
                if (!a.c.m) return !1;
                var c = window && window.navigator,
                    b = (c = c && c.userAgent) && "string" === typeof c,
                    d = /Version\/(\d*)/,
                    g = /CPU.*OS\s(\d*)_/,
                    d = (d = b && c.match(d)) && 1 < d.length ? parseInt(d[1], 10) : !1;
                "number" !== typeof d && (d = (d = b && c.match(g)) && 1 < d.length ? parseInt(d[1], 10) : !1);
                return d
            };
            a.b.cm = function(c, b, d) {
                return a.b.bz(c) && a.b.bz(b) && a.b.bz(d) ? m.abs(c - b) <= d : !1
            };
            a.b.bz = function(a) {
                return "number" === typeof a && !isNaN(a)
            };
            a.b.cn = function(c, b) {
                if (!a.b.b(b)) return !1;
                var d = 0;
                a.b.forEach(b, function(a) {
                    a ===
                        c && d++
                });
                return d
            }
        })(n);
        (function(a) {
            a.d = {};
            a.d.d = function(a) {
                try {
                    var e = typeof a.location.toString;
                    if ("undefined" === e || "unknown" === e) return !0;
                    var f = typeof a.document;
                    if ("undefined" === f || "unknown" === f) return !0;
                    var l = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth || 0;
                    return "number" !== typeof(a.screenX || a.screenLeft || 0) || "number" !== typeof l ? !0 : !1
                } catch (k) {
                    return !0
                }
            }
        })(n);
        (function(a) {
            a.d.e = function(h) {
                if (!h) return null;
                try {
                    if (h.moatHostileIframe) return null;
                    var e = h.getAttribute("src");
                    if (e && e.slice && "http" === e.slice(0, 4) && a.b.ai(e) != a.b.ai(pageWin.location.toString())) return h.moatHostileIframe = !0, null;
                    var f = h && (h.contentDocument || h.contentWindow && h.contentWindow.document);
                    if (f && "string" === typeof f.location.toString()) return f;
                    h.moatHostileIframe = !0;
                    return null
                } catch (l) {
                    return h.moatHostileIframe = !0, null
                }
            };
            a.d.b = function(h, e) {
                e = e || a.b.ak(h);
                try {
                    return e && e.frameElement
                } catch (f) {
                    return !1
                }
            };
            a.d.f = function(h, e) {
                var f;
                a.b.forEach(h.getElementsByTagName("iframe"), function(a) {
                    if (a &&
                        a.contentWindow && a.contentWindow == e) return f = a, !1
                });
                return f
            };
            a.d.g = function(h) {
                if (h = a.d.b(h)) try {
                    return h.parentNode
                } catch (e) {}
                return null
            };
            a.d.h = function(h, e) {
                if (!h) return !1;
                var f = 0,
                    l = [];
                for (e = e || 10; f < e;)
                    if (f++, h = a.d.b(h)) l.push(h);
                    else return l
            };
            a.d.c = function(h, e) {
                if (!h) return !1;
                var f = 0,
                    l = [h],
                    k;
                for (e = e || 10; f < e;) {
                    f++;
                    try {
                        if (h = (k = h.frameElement) && a.b.ak(k), k && h && !a.d.d(h)) l.push(h);
                        else return l
                    } catch (c) {
                        break
                    }
                }
                return l
            };
            a.d.i = function(h, e, f) {
                function l(f, c, b) {
                    var d = [];
                    f && d.push(f);
                    b = b || 0;
                    if (10 <
                        b || !f || !f.frames) return d;
                    var g;
                    try {
                        g = isNaN(f.frames.length) ? 100 : f.frames.length
                    } catch (e) {
                        g = 100
                    }
                    for (var q = 0; q < g; q++) try {
                        try {
                            if (void 0 == f.frames[q]) break
                        } catch (e) {
                            break
                        }
                        c && !a.d.j(f.frames[q]) ? d.push(f.frames[q]) : d = d.concat(l(f.frames[q], c, b + 1))
                    } catch (e) {
                        break
                    }
                    return d
                }
                return l(h, e, f)
            };
            a.d.k = function(a, e) {
                e = "number" == typeof e && 0 < e ? e : 15;
                var f = [],
                    l;
                try {
                    if (a) {
                        l = a.top;
                        for (var k = 0; k < e; k++)
                            if ((a = a.parent) && a != a.top) f.push(a);
                            else break;
                        f.push(l)
                    }
                } catch (c) {
                    return []
                }
                return f
            };
            a.d.l = [];
            a.d.j = function(h) {
                for (var e,
                        f = 0, l = a.d.l.length; f < l; f++) a.d.l[f].win == h && (e = a.d.l[f]);
                if (!e) {
                    e = {
                        win: h,
                        friendly: !1
                    };
                    try {
                        h.document && (e.friendly = !0)
                    } catch (k) {}
                }
                return e.friendly
            };
            a.d.m = function(h, e, f) {
                h = a.d.c(h).pop();
                h = a.d.i(h, !0);
                for (var l = 0, k = h.length; l < k; l++)
                    if (h[l] == e) {
                        if (f && e.parent && a.d.d(e.parent)) break;
                        return !0
                    } return !1
            };
            a.d.a = function() {
                if (a.c.b) return window.top;
                for (var h = 0, e = window; 50 > h;) {
                    h++;
                    if (e === window.top || a.d.d(e.parent)) break;
                    e = e.parent
                }
                return e
            }
        })(n);
        (function(a) {
            function h(a) {
                return function() {
                    var e = !1;
                    return function(h) {
                        try {
                            return a &&
                                a.apply ? a.apply(null, arguments) : a(h)
                        } catch (B) {
                            if (!e) {
                                e = !0;
                                var c = (new v).getTime();
                                window["Moat#ETS"] || (window["Moat#ETS"] = c);
                                window["Moat#EMC"] || (window["Moat#EMC"] = 0);
                                var b = 36E5 <= c - window["Moat#ETS"],
                                    d = "";
                                try {
                                    d = a.toString()
                                } catch (x) {
                                    d = "failed"
                                }
                                d = B.name + " in closure (cb): " + B.message + ", stack=" + B.stack + ", \ncb=" + d + "\n";
                                if (!b && 10 > window["Moat#EMC"]) {
                                    window["Moat#EMC"]++;
                                    try {
                                        var g = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("NEWSCOM_PREBID_HEADER1") + "&ac=1&k=" +
                                            escape(d) + "&ar=" + escape("3595e181146-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new v).getTime(),
                                            q = new Image(1, 1);
                                        q.src = g
                                    } catch (x) {}
                                } else if (b) {
                                    window["Moat#EMC"] = 1;
                                    window["Moat#ETS"] = c;
                                    try {
                                        g = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("NEWSCOM_PREBID_HEADER1") + "&ac=1&k=" + escape(d) + "&ar=" + escape("3595e181146-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new v).getTime(), q = new Image(1, 1), q.src = g
                                    } catch (x) {}
                                }
                            }
                        }
                    }
                }()
            }
            a.k = {};
            var e = {};
            a.k.a = e;
            a.k.b = function(f,
                e) {
                if (!f || "string" !== typeof e || !f[e] || f == window) return !1;
                if ("string" === typeof f.nodeName && ("OBJECT" === f.nodeName || "EMBED" === f.nodeName)) {
                    var h = a && a.l && a.l[e];
                    if (h && h !== f[e]) return h
                }
                return !1
            };
            a.k.c = function(f, l, k, c) {
                var b, d;
                c ? e[l + c] ? k = e[l + c] : (k = h(k), e[l + c] = k) : k = h(k);
                if (f.addEventListener) c = "addEventListener", b = "";
                else if (f.attachEvent) c = "attachEvent", b = "on";
                else return !1;
                if (d = a.k.b(f, c)) try {
                    d.call(f, b + l, k, !1)
                } catch (g) {
                    f[c](b + l, k, !1)
                } else if (f && c && f[c]) try {
                    f[c](b + l, k, !1)
                } catch (g) {
                    return !1
                }
            };
            a.k.d =
                function(f, l, h, c) {
                    var b, d;
                    if (!f) return !1;
                    h = c ? e[l + c] : h;
                    if (f.removeEventListener) c = "removeEventListener", b = "";
                    else if (f.detachEvent) c = "detachEvent", b = "on";
                    else return delete e[fullKey], !1;
                    if (d = a.k.b(f, c)) try {
                        d.call(f, b + l, h, !1)
                    } catch (g) {
                        f[c](b + l, h, !1)
                    } else try {
                        f[c](b + l, h, !1)
                    } catch (g) {}
                };
            a.k.e = function(f, e) {
                f = h(f);
                var k;
                window && window.setInterval && (k = window.setInterval(f, e), 1 == k && (a.b.ch(k), k = window.setInterval(f, e)), D.push(k));
                return k
            };
            a.k.f = function(f, e) {
                f = h(f);
                var k;
                window && window.setTimeout && (k =
                    window.setTimeout(f, e), 1 == k && (a.b.cg(k), k = window.setTimeout(f, e)), C.push(k));
                return k
            };
            a.k.g = function(f, e, k, c) {
                if (!c) return !1;
                c += "";
                t[c] && a.b.cg(t[c].tid);
                t[c] = {};
                t[c].callback = h(f);
                t[c].params = e;
                t[c].interval = k;
                t[c].tid = a.k.f(a.k.h(c), k);
                callbacks = null
            };
            a.k.h = function(f) {
                return function() {
                    if (!t || !t[f]) return !1;
                    var e = t[f].callback(t[f].params);
                    if ("boolean" === typeof e && !1 === e) return a.b.cg(t[f].tid), t[f] = !1;
                    t[f].tid = a.k.f(a.k.h(f), t[f].interval);
                    time = f = null
                }
            };
            a.k.i = function(f) {
                t[f] && (a.b.cg(t[f].tid),
                    t[f] = !1)
            };
            a.k.j = function() {
                return t
            };
            a.k.k = function(f, e, h, c) {
                var b = 0,
                    d = function() {
                        b += 1;
                        !0 !== f() && (b < e ? a.k.f(d, h) : "function" === typeof c && c())
                    };
                d()
            };
            a.k.l = h
        })(n);
        (function(a) {
            function h() {
                var a = window.navigator && window.navigator.userAgent;
                return (a = a && a.match(/Chrom(e|ium)\/([0-9]+)\./)) ? parseInt(a[2], 10) : !1
            }
            a.c = {};
            var e = a.d.d(window.parent);
            a.c.n = window != window.parent;
            a.c.o = a.c.n && !e;
            a.c.b = e ? !1 : !a.d.d(window.top);
            a.c.d = a.c.b ? window.top : a.c.o ? window.parent : window;
            a.c.p = function(a) {
                var e, h, c, b = 0,
                    d = 0;
                try {
                    e = a.document;
                    h = e.documentElement;
                    c = e.body;
                    var g = document.getElementById("mianahwvc");
                    if (g) return g.getBoundingClientRect();
                    "undefined" !== typeof a.innerWidth ? (b = a.innerWidth, d = a.innerHeight) : "CSS1Compat" === e.compatMode && 5 !== e.documentMode || !c || "undefined" === typeof c.clientWidth ? h && "undefined" !== typeof h.clientWidth && (b = h.clientWidth, d = h.clientHeight) : (b = c.clientWidth, d = c.clientHeight)
                } catch (q) {}
                return {
                    width: b,
                    height: d,
                    left: 0,
                    right: b,
                    top: 0,
                    bottom: d
                }
            };
            a.c.q = function() {
                var e = a.c.d;
                if (!e) return !1;
                try {
                    var h = e.document && e.document.body,
                        k = e.document && e.document.documentElement
                } catch (b) {}
                try {
                    e.screen && (a.c.r = e.screen.availWidth, a.c.s = e.screen.availHeight, a.c.t = e.screen.width, a.c.u = e.screen.height)
                } catch (b) {
                    a.c.r = a.c.r || 0, a.c.s = a.c.s || 0, a.c.t = a.c.t || 0, a.c.u = a.c.u || 0
                }
                var c = a.c.p(e);
                a.c.v = c.width;
                a.c.w = c.height;
                try {
                    a.c.x = e.outerWidth || e.document && e.document.body && e.document.body.offsetWidth || 0, a.c.y = e.outerHeight || e.document && e.document.body && e.document.body.offsetHeight || 0
                } catch (b) {
                    a.c.x = 0, a.c.y =
                        0
                }
                h && k && (a.c.e = m.max(h.scrollHeight, h.offsetHeight, k.clientHeight, k.scrollHeight, k.offsetHeight), a.c.z = h.scrollTop || k.scrollTop || e.pageYOffset || 0)
            };
            a.c.q();
            a.c.a = 0 <= String(Function.prototype.toString).indexOf("[native code]");
            a.c.aa = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            a.c.j = a.b.l();
            a.c.ab = !!window.chrome && a.b.f(window.chrome.csi, !0);
            a.c.ac = !!("opr" in window && "addons" in window.opr && a.b.f(window.DetachedViewControlEvent));
            a.c.ad = !a.c.ab && Error.propertyIsEnumerable("captureStackTrace") &&
                void 0 !== window.onorientationchange;
            a.c.ae = a.c.ac || a.c.ad;
            a.c.af = a.c.ab && !!window.chrome.webstore;
            a.c.ag = a.c.ab && !a.c.ae && void 0 !== window.onorientationchange;
            a.c.ah = a.c.af || a.c.ag;
            a.c.ai = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) && !document.documentMode && !!window.StyleMedia;
            a.c.m = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || window.HTMLVideoElement && window.HTMLVideoElement.prototype && "webkitWirelessVideoPlaybackDisabled" in window.HTMLVideoElement.prototype;
            a.c.aj = function() {
                var e;
                return function() {
                    if ("undefined" !== typeof e) return e;
                    e = {
                        isInApp: 0,
                        env: "Not app"
                    };
                    a.b.i() ? (e.isInApp = 1, e.env = "iOS") : a.b.j() && (e.isInApp = 1, e.env = "Android");
                    return e
                }
            }();
            a.c.ak = h;
            a.c.al = a.c.af && 40 <= h();
            a.c.am = function() {
                if (!a.c.al) return !1;
                var e = a.g.a([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                if (navigator && navigator[e]) return !0;
                if (66 > h()) {
                    var e = a.g.a([28, 33, 43, 40, 38, 30]),
                        l = a.g.a([43, 46, 39, 45, 34, 38, 30]),
                        k = a.g.a([28, 40, 39, 39, 30, 28, 45]);
                    return "undefined" !== typeof window[e] && !(window[e] && window[e][l] &&
                        window[e][l][k])
                }
                return !1
            };
            a.c.an = function() {
                if (a.g.b !== a.g.c.toString()) return !1;
                var e = a.g.a([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                return window && window.navigator && window.navigator[e]
            };
            a.c.ao = function() {
                if (a.g.b !== a.g.d.toString()) return !1;
                var e = a.g.a([26, 37, 30, 43, 45]),
                    h = a.g.a([28, 40, 39, 31, 34, 43, 38]),
                    k = a.g.a([41, 43, 40, 38, 41, 45]);
                return !a.c.aj().isInApp && a.c.m && a.c.a && !a.b.f(window[e], !0) && !a.b.f(window[h], !0) && !a.b.f(window[k], !0)
            }
        })(n);
        (function(a) {
            function h(b, c) {
                if (!c && !a.c.aj().isInApp) return !1;
                var g =
                    d;
                return (d = g = g && g[0] ? g : a.b.cj("mraid", 20, !0)) ? b ? g : g[0] : !1
            }

            function e(a) {
                return a && a.getVendor && "function" === typeof a.getVendor && a.getVendor()
            }

            function f(a) {
                return a && a.getVendorVersion && "function" === typeof a.getVendorVersion && a.getVendorVersion() + ""
            }

            function l(b) {
                function c(a) {
                    if ((a = a && a.isViewable) && "function" === typeof a) try {
                        return "undefined" !== typeof a()
                    } catch (b) {}
                    return !1
                }
                return b ? g ? !0 : g = function(b) {
                    var c = "";
                    a.b.i() ? c = "ios" : a.b.j() && (c = "android");
                    var d = {
                            AdMarvel: {
                                ios: "340",
                                android: "270"
                            },
                            AdColony: {
                                ios: "3.0",
                                android: "3.0"
                            }
                        } [e(b)],
                        c = d ? d[c] : null;
                    b = f(b);
                    return c ? 0 !== a.c.bc(b, c) : !1
                }(b) && c(b) : !1
            }

            function k(b, c) {
                b.qmrv(function(b) {
                    c.preventTryFindingAdAgain = !0;
                    a.p.a(c);
                    a.o.b(c)
                }, c.MMAK_ID)
            }

            function c(b, c) {
                parseInt(a.c["do"]("isNative")) && b.hgen && b.hgen(function(b) {
                    b = "click" !== b ? 23 : 3;
                    c && (c.dm || (c.counters && c.counters.strictDwell && c.counters.strictDwell.tCur && (c.cb = c.counters.strictDwell.tCur), c.dm = 1), data = {}, data.e = b, data.q = c.aq[b]++, a.a.b(c, data))
                }, c.MMAK_ID)
            }

            function b() {
                var b = window.navigator && window.navigator.userAgent,
                    c = 53 <= a.c.ak();
                return c ? c : b && -1 < b.search("Spotify")
            }
            a.c.ap = "26";
            a.c.aq = "MoatSuperV";
            a.c.ar = a.c.aq + a.c.ap;
            a.c.as = 11;
            a.c.at = window && window["Moat#G" + a.c.ap] || {};
            a.c.au = "Moat#G" + a.c.ap;
            window[a.c.au] = a.c.at;
            a.c.at.a || (a.c.at.a = m.floor(m.random() * m.pow(10, 12)));
            a.c.av = m.floor(m.random() * m.pow(10, 12));
            a.c.aw = function() {
                return function() {}
            }();
            a.c.ax = function() {
                return function() {
                    return !1
                }
            }();
            a.c.ay = (new v).getTime();
            a.c.az = !0;
            a.c.ba = !0;
            a.c.bb = !1;
            a.c.bb = !0;
            a.c.bc = function(a, b) {
                a = a.split(".");
                b = b.split(".");
                for (var c = 0; 3 > c; c++) {
                    var d = parseInt(a[c]),
                        g = parseInt(b[c]);
                    if (d && isNaN(g)) return 1;
                    if (g && isNaN(d)) return 0;
                    if (d > g) return 1;
                    if (g > d) return 0
                }
                return 2
            };
            var d, g = !1;
            a.c.bd = h;
            a.c.be = function() {
                return !!h()
            };
            a.c.bf = function() {
                var a = h(!0);
                return a && a[1]
            };
            a.c.bg = function() {
                if (!a.c.aj().isInApp) return !1;
                var b = h();
                return b && l(b)
            };
            a.c.bh = a.c.bg;
            a.c.bi = a.c.bg;
            a.c.bj = function() {
                var a = h();
                return a && e(a)
            };
            a.c.bk = function() {
                var a = h();
                return a && f(a)
            };
            a.c.bl = function() {
                return !1
            };
            a.c.bm = function() {
                if (a.c.be() && a.c.bg() &&
                    a.k && a.k.g) {
                    var b = "___mraid_loop___" + (new v).getTime(),
                        c = a.b.bo(a.c.bf(), ["mraid", "isViewable"]);
                    c && a.k.g(function() {
                        return c() ? (a.c.bl = function() {
                            return !0
                        }, !1) : !0
                    }, {}, 300, b)
                }
            };
            a.c.bn = function() {
                return !1
            };
            a.c.bo = !1;
            var q = function() {
                var b = function(b) {
                        if (a.c.aj().isInApp) return !1;
                        var c = a.m && a.m.a();
                        if (a.c.bp || c || a.c.bq()) return a.c.bp || c || a.c.bq(), !1;
                        b = a.b.bo(b, ["$sf"]);
                        if (!b) return !1;
                        var d = b.ext;
                        b = d && d.geom;
                        var c = [
                                ["exp", "b", "t", "l", "r"], "self b t l r h w xiv yiv".split(" ")
                            ],
                            g, e = !1;
                        if (d && b && "function" ===
                            typeof b) try {
                            if ((b = b()) && b.win) {
                                if (a.b.forEach(b.win, function(a) {
                                        if (a && ("number" === typeof a || "string" === typeof a) && 0 !== parseFloat(a, 10)) return e = !0, !1
                                    }), !e) return !1
                            } else return !1;
                            if (b.par) return !0;
                            for (var d = 0, f = c.length; d < f; d++) {
                                g = c[d][0];
                                for (var r = 1, q = c[d].length; r < q; r++)
                                    if ("undefined" === typeof b[g][c[d][r]]) return !1
                            }
                            return !0
                        } catch (h) {}
                        return !1
                    },
                    c, d, g, e;
                a.c.br = function() {
                    if (e) return !0;
                    c = window;
                    d = document;
                    e = b(c);
                    g = !(!e && !c.$sf);
                    if (!e && a.c.o)
                        for (var f = 0; 20 > f && !e; f++) {
                            var q = a.d.b(d.body);
                            if (!1 !== q &&
                                !q) break;
                            d = (c = a.b.ak(q)) && c.document;
                            e = e || b(c);
                            g = g || e || c.$sf
                        }
                    return e
                };
                a.c.bs = function() {
                    return a.c.br() && c
                };
                a.c.bt = function() {
                    "undefined" === typeof e && a.c.br();
                    return g
                }
            };
            a.c.bu = !1;
            a.c.bv = !1;
            a.c.bw = null;
            a.c.bs = function() {
                q();
                return a.c.bs()
            };
            a.c.bt = function() {
                q();
                return a.c.bt()
            };
            a.c.br = function() {
                q();
                return a.c.br()
            };
            var B = function() {
                var b = function(b) {
                        return a.c.aj().isInApp ? !1 : a.b.bo(b, ["context", "observeIntersection"]) ? !0 : !1
                    },
                    c = window,
                    d = document,
                    g = b(c),
                    e = !(!g && !c.context);
                if (!g && a.c.o)
                    for (var f =
                            0; 20 > f && !g; f++) {
                        d = a.d.b(d.body);
                        if (!1 !== d && !d) break;
                        d = (c = a.b.ak(d)) && c.document;
                        g = g || b(c);
                        e = e || g || c.context
                    }
                a.c.bx = function() {
                    return g && c
                };
                a.c.by = function(a) {
                    "boolean" === typeof a && (g = a);
                    return g
                };
                a.c.bz = function() {
                    return e
                }
            };
            a.c.bx = function() {
                B();
                return a.c.bx()
            };
            a.c.bz = function() {
                B();
                return a.c.bz()
            };
            a.c.by = function() {
                B();
                return a.c.by()
            };
            var x = function() {
                var b, c = function(c) {
                        return (b = a.b.bo(c, ["amazonmobileadsviewablebridge"])) && "function" === typeof b.addEventListener && "function" === typeof b.getVersion ?
                            !0 : b = !1
                    },
                    d = document,
                    g = window,
                    e = c(g),
                    f = b && 1.1 <= b.getVersion();
                if (!e && a.c.o)
                    for (var q = 0; 20 > q && !e; q++) {
                        d = a.d.b(d.body);
                        if (!1 !== d && !d) break;
                        d = (g = a.b.ak(d)) && g.document;
                        e = e || c(g);
                        f = f || b && 1.1 <= b.getVersion()
                    }
                a.c.ca = function() {
                    return e && g
                };
                a.c.cb = function() {
                    return e
                };
                a.c.cc = function() {
                    return f
                };
                a.c.cd = function() {
                    return b
                }
            };
            a.c.ca = function() {
                x();
                return a.c.ca()
            };
            a.c.cb = function() {
                x();
                return a.c.cb()
            };
            a.c.cc = function() {
                x();
                return a.c.cc()
            };
            a.c.cd = function() {
                x();
                return a.c.cd()
            };
            a.c.ce = function() {
                return a.c.cb() &&
                    a.c.cc()
            };
            a.c.cf = !1;
            a.c.cg = function() {
                var b;
                return function() {
                    if ("undefined" !== typeof b) return b;
                    var c = a.c.d,
                        d = a.b.at();
                    if (a.c.d.navigator.standalone) b = !0;
                    else {
                        var g = c.innerWidth / d.w,
                            c = c.innerHeight / d.h,
                            g = !isNaN(g) && isFinite(g) && .9 <= g && 1.1 >= g,
                            c = !isNaN(c) && isFinite(c) && .75 <= c && 1.1 >= c;
                        b = g && c
                    }
                    a.c.d.MoatMAK ? a.c.d.MoatMAK.namespace && (b = !1) : (g = a.c.d) && g.imraid && "function" === typeof g.imraid.getVendorName && "inmobi" === g.imraid.getVendorName() && (b = !1);
                    return b
                }
            }();
            a.c.ch = function() {
                var b = a.c.aj().isInApp ? 0 :
                    void 0;
                a.c.f() ? b = 3 : a.c.cg() && (b = a.c.ci() ? 1 : 2);
                return b
            };
            a.c.ci = function() {
                var b = a.c.cg(),
                    c = a.b.w(),
                    d = a.c.be(),
                    g = window.location && ("applewebdata:" === window.location.protocol || "data:" === window.location.protocol),
                    c = "-" === c || "" === c.replace(/^\s+|\s+$/gm, "");
                return b && !(c || d || g)
            };
            a.c.f = function() {
                var b;
                return function() {
                    if ("undefined" !== typeof b) return b;
                    b = a.c.cj();
                    b = a.c.ci() ? !1 : (b = b || a.b.j()) || a.b.i();
                    return b
                }
            }();
            a.c.ck = function() {
                return a.c.d.webkit && a.c.d.webkit.messageHandlers && a.c.d.webkit.messageHandlers.__z_moat_bridge__
            };
            a.c.cj = function() {
                return !(!a.c.d || !(a.c.d.__zMoatInit__ || a.c.d.MoatMAK || a.c.ck())) || w
            };
            a.c.cl = function() {
                return !1
            };
            a.c.cm = function() {
                var b = !1;
                return a.c.bn() ? !0 : a.c.b || a.c.bv ? b = (b = a.c.f() && a.c.cj()) || a.c.bv || a.c.ci() || a.c.bh() || a.c.ce() : b
            };
            a.c.protocol = a.b.bg();
            a.c.cn = "z.moatads.com";
            a.c.co = a.b.g();
            a.c.cp = !a.c.b;
            a.c.cq = function(b) {
                var c = 0;
                b = b || window;
                try {
                    if (!a.c.b) {
                        var d;
                        for (d = 0; 20 > d && b != window.top; d++) b = b.parent;
                        c = d
                    }
                } catch (g) {}
                return c
            };
            a.c.b || a.b.s() || 1 == a.c.cq(a.d.a()) ? a.c.cr = 1 : a.c.cr = 0;
            a.c.d[a.c.au] ||
                (a.c.d[a.c.au] = new a.c.d.Object);
            a.c.aj().isInApp && a.c.b && (a.c.b = a.c.cm() || a.c.f());
            a.c.cs = function() {
                return !1
            };
            a.c.c = a.c.d.document.referrer || "";
            try {
                a.c.ct = a.c.d.history && a.c.d.history.length
            } catch (r) {}
            a.c.cu = function() {
                if (A)
                    for (var a in A)
                        if (A.hasOwnProperty(a)) return !0;
                return !1
            };
            a.c.cv = function(b) {
                var c = !0;
                a.b.forEach(b && b.parentNode && b.parentNode.childNodes, function(b) {
                    if (a.b.ad(["DIV", "IFRAME", "A", "EMBED", "OBJECT"], b.nodeName)) return c = !1
                });
                return c
            };
            a.c.cw = function() {
                for (var a in A)
                    if (A.hasOwnProperty(a)) {
                        var b =
                            A[a];
                        if (b && b.aa && b.aa[MOATALREADYFOUND]) return !0
                    } return !1
            };
            a.c.cx = function() {
                return a.c.aj().isInApp ? a.c.cm() : a.c.b
            };
            a.c.bq = function() {
                return a.c.cy && a.c.cy()
            };
            a.c.cz = function() {
                return a.c.bu
            };
            a.c.da = function() {
                return a.c.br && a.c.br()
            };
            a.c.db = function() {
                return a.c.by && a.c.by()
            };
            a.c.dc = function() {
                return a.m && a.m.a()
            };
            a.c.dd = function(b) {
                var c = !1;
                a.n && a.n.a && (b && b.periscopeManager ? b.periscopeManager.measurable && (c = !0) : c = !0);
                return c
            };
            a.c.bp = function() {
                var b = a.b.cl(),
                    c = 1 === a.c.aj().isInApp;
                return !(!(9 <=
                    b && window && window.requestAnimationFrame) || c)
            }();
            a.c.de = function() {
                if (a.c.b) return !1;
                var b = a.c.j || a.c.ai && 15.16199 <= a.b.ac();
                if (!b) return !1;
                var c = a.b.k();
                if (a.c.j && 8 >= c) return !1;
                var d = 1 === a.c.aj().isInApp,
                    g, e = "function";
                a.c.j ? (8 === c && (e = "object"), g = document && typeof document[10 > c ? "elementFromPoint" : "msElementsFromPoint"] === e) : a.c.ai && (g = typeof window.requestAnimationFrame === e);
                return b && !d && g
            }();
            a.c.df = function(b) {
                return a.c.dc() || a.c.dd(b)
            };
            a.c.dg = function(b) {
                if (!b) return !1;
                var c;
                a.c.df(b) && (c = !0);
                return a.c.cx() || a.c.dh() || c
            };
            a.c.di = function(b) {
                if (!b) return !1;
                var c = !1;
                a.m && a.m.a() ? c = !0 : a.n && a.n.a && b.periscopeManager && b.periscopeManager.fullyMeasurable && b.ao && 1 != b.ao.skin && (c = !0);
                return a.c.cx() || a.c.dh() || c
            };
            a.c.dj = function() {
                a.c.az = !1;
                a.c.ba = !0;
                a.c.bb = !0
            };
            a.c.dk = !0;
            a.c.dl = !0;
            "mlb.com" === a.b.w() && (a.b.ap() || a.b.aq()) && (a.c.dl = !1);
            var u;
            a.c.dm = function(a) {
                u = a
            };
            a.c.dn = function() {
                return a.c.f() ? u || parseInt(a.c["do"]("isNative")) ? !0 : !!document.getElementById("mianahwvc") : !1
            };
            a.c.i = function() {
                return a.c.f() ?
                    a.c.dn() : !1
            };
            a.c.dp = function() {
                return !1
            };
            var w;
            a.c.f() && (a.c.dq = function() {
                w = !0
            });
            var z = {
                version: "sv",
                appName: "lw",
                namespace: "lu",
                isNative: "ma",
                versionHash: "ar",
                deviceOS: "av"
            };
            a.c.dr = function() {
                var b = !!a.c.d.MoatMAK;
                return function() {
                    return b
                }
            }();
            a.c.ds = function() {
                return a.c.d && a.c.d.MoatMAK || null
            };
            a.c.dt = function() {
                var b = {},
                    c = a.c.ds();
                if (c)
                    for (var d in z) z.hasOwnProperty(d) && (b[z[d]] = c[d]);
                return b
            };
            a.c["do"] = function(b) {
                var c, d;
                (c = a.c.ds()) && c.hasOwnProperty(b) && (d = c[b]);
                mappedKey = z[b];
                c = a.o.a();
                mappedKey && c && c.hasOwnProperty(mappedKey) && (d = c[mappedKey]);
                "versionHash" === b && "undefined" !== typeof d && (d = d.slice(0, 7));
                return d
            };
            a.c.du = function() {
                return a.c["do"]("namespace")
            };
            a.c.dv = function() {
                var b = a.c["do"]("version");
                return b ? /\d+\.\d+(\.\d+)?/.exec(b) ? b : null : b
            };
            a.c.dw = 0;
            a.c.dx = 1;
            a.c.dy = -1;
            a.c.dz = function(b) {
                var c = a.c.dv();
                if (!c) return a.c.dy;
                if (!/\d+\.\d+(\.\d+)?/.exec(b)) return a.c.dx;
                switch (a.c.bc(c, b)) {
                    case 0:
                        return a.c.dy;
                    case 1:
                        return a.c.dx;
                    case 2:
                        return a.c.dw
                }
            };
            a.c.ea = function(b) {
                if (a.c.eb &&
                    a.c.eb()) {
                    var d = a.c.ds();
                    d && b && (k(d, b), c(d, b))
                }
            };
            a.c.eb = function() {
                if (a.c.ax()) return !0;
                if (!a.c.f()) return !1;
                var b;
                a.b.i() ? b = "3.0" : a.b.j() && (b = "1.8");
                return b ? a.c.dz(b) !== a.c.dy ? !0 : !1 : !1
            };
            a.c.ec = function() {
                if (!a.c.f()) return !1;
                var b = a.c.ds();
                if (!b) return !1;
                var c = b.vgft() && !b.lkpu();
                a.c.ed() || c ? a.i.a.zaxs("trackingReady") : b.bpsy(function() {
                    a.i.a.zaxs("trackingReady")
                })
            };
            a.c.ee = function() {
                var b;
                a.b.i() ? b = "3.1.1" : a.b.j() && (b = "1.7.7");
                return a.c.dz(b) !== a.c.dy
            };
            a.c.ed = function() {
                var b = parseInt(a.c["do"]("isNative")),
                    c;
                a.b.i() ? c = "3.1" : a.b.j() && (c = "2.1");
                c = a.c.dz(c) !== a.c.dy;
                return b && c
            };
            a.c.ef = function() {
                var b = "___mraid_viewable_loop___" + (new v).getTime(),
                    c = a.c.bd();
                a.k.g(function() {
                    return c && c.isViewable && c.isViewable() ? (a.i.a.zaxs("trackingReady"), !1) : !0
                }, {}, 300, b)
            };
            a.c.eg = function() {
                var a = !(!window || !window.MmJsBridge),
                    b = !(!window || !window.imraid || "function" !== typeof window.imraid.getVendorName || "inmobi" !== window.imraid.getVendorName());
                return a || b
            };
            a.c.eh = function() {
                var a = window.navigator && window.navigator.userAgent;
                return (a = a && a.match(/Firefox\/([0-9]+)\./)) ? parseInt(a[1], 10) : !1
            };
            (function() {
                var c = a.b.bo(window, ["IntersectionObserver"]),
                    d = b() || 57 <= a.c.eh(),
                    g = a.c.aj().isInApp,
                    e = d && !g && c && "function" === typeof c;
                a.c.cy = function(a) {
                    "boolean" === typeof a && (e = a);
                    return e
                };
                a.c.ei = function() {
                    return e && c
                }
            })();
            a.c.ba = b();
            a.c.g = new a.c.d.Image;
            a.c.k = function() {
                if ("undefined" !== typeof a.c.d["Moat#EVA"]) return !0;
                try {
                    if ("undefined" !== typeof a.c.d.eval && (a.c.d.eval("(function(win){ win['Moat#EVA'] = true; })(window)"), "undefined" !==
                            typeof a.c.d["Moat#EVA"])) return !0
                } catch (b) {}
                return !1
            };
            a.c.l = function(a) {
                try {
                    return new a.Function(""), !0
                } catch (b) {
                    return !1
                }
            };
            (function() {
                var b = a.b.cj("context"),
                    c = !a.c.aj().isInApp && !(!b || !b.observeIntersection),
                    d, g, e, f, q, h;
                if (!c && window.JSON && "function" === typeof window.JSON.parse && (d = location.hash.match(/amp3pSentinel=((\d+)-\d+)/))) {
                    g = d[1];
                    d = Number(d[2]);
                    e = [];
                    for (f = window; f && f != f.parent; f = f.parent) e.unshift(f.parent);
                    q = e[d];
                    c = h = !!q
                }
                a.c.ej = function() {
                    return c && b
                };
                a.c.by = function(a) {
                    "boolean" ===
                    typeof a && (c = a);
                    return c
                };
                a.c.ek = function() {
                    return {
                        isDfp: h,
                        win: q,
                        sentinel: g
                    }
                };
                a.c.el = function() {
                    return q && q.postMessage && g ? (q.postMessage({
                        sentinel: g,
                        type: "send-intersections"
                    }, "*"), !0) : !1
                }
            })();
            a.c.em = function() {
                return !1
            };
            a.c.en = function() {
                return !1
            };
            a.c.eo = function() {
                return !1
            };
            a.c.ep = function() {
                return !1
            };
            a.c.eq = function() {
                return !1
            };
            a.c.er = function() {
                return !1
            };
            a.c.es = function() {
                var a = navigator && navigator.appVersion && navigator.appVersion.match(/Windows NT (\d\d{0,1}\.\d)/);
                return a ? parseFloat(a[1]) :
                    -1
            };
            a.c.et = function() {
                return 6.1 === a.c.es()
            };
            a.c.eu = function() {
                var b = a.c.d;
                return b.navigator && "function" === typeof b.navigator.getBattery
            };
            a.c.dh = function() {
                return !!a.c.ev()
            };
            a.c.ev = function() {
                return a.c.cy() ? {
                    measurableFn: a.c.bq
                } : a.c.bu ? {
                    measurableFn: a.c.cz
                } : a.c.by() ? {
                    measurableFn: a.c.db
                } : a.c.bh() ? {
                    measurableFn: a.c.bh
                } : a.c.ce() ? {
                    measurableFn: a.c.ce
                } : !1
            };
            a.c.ew = a.b.au();
            a.c.ex = function(b) {
                return b = (b = a.c.ew) || a.b.av()
            };
            a.c.ey = {
                a: "waiting",
                b: "noHistData",
                c: "dataAvailable",
                d: "slotWaiting",
                e: "slotNoHistData",
                f: "slotNoSlotData"
            }
        })(n);
        (function(a) {
            function h(a, f, h) {
                function k(a, c) {
                    for (var g in a) a.hasOwnProperty(g) && c.call(null, a[g], g)
                }

                function c(a) {
                    var c = [];
                    k(a, function(a, b) {
                        c.push(b)
                    });
                    return c
                }
                a = f[a];
                a && a.xa.sode || (a.xa.sode = function() {
                        this.desw = {};
                        this.xfgf = [];
                        this.publishing_ = !1;
                        this.xkcd = {};
                        this.edws = []
                    }, a.xa.sode.prototype.uxin = function() {
                        var a = function(a) {
                            a = h.max(4, a);
                            return ((1 + h.random()) * h.pow(16, a) | 0).toString(16).substring(0, a)
                        };
                        return function(c) {
                            return a(4) + "-" + a(4) + "-" + a(4) + "-" + a(4)
                        }
                    }(),
                    a.xa.sode.prototype.xsza = function(a) {
                        this.desw[a] || (this.desw[a] = {});
                        return this.desw[a]
                    }, a.xa.sode.prototype.esgf = function(a, c) {
                        this.publishing_ ? this.xfgf.push(arguments) : this.zaxs.apply(this, arguments)
                    }, a.xa.sode.prototype.kswa = function(a, c) {
                        for (var g = this.xkcd[a] || [], e = g && g.length, f = 0; f < e; f++)
                            if (g[f] === c) return !1;
                        g.push(c);
                        g.sort(function(a, b) {
                            return a - b
                        });
                        this.xkcd[a] = g
                    }, a.xa.sode.prototype.aksw = function(a, c) {
                        if (!this.xkcd[a]) return !1;
                        for (var g = this.xkcd[a], e = -1, f = g && g.length, h = 0; h < f; h++)
                            if (g[h] ===
                                c) {
                                e = h;
                                break
                            } - 1 != e && g.splice(e, 1);
                        this.xkcd[a] = g
                    }, a.xa.sode.prototype._getEventPriorities_ = function(a) {
                        return this.xkcd[a] || []
                    }, a.xa.sode.prototype.azsx = function(a, c, g) {
                        g = g || {};
                        var e = g.id || this.uxin(),
                            f;
                        f = g.priority;
                        f = !isNaN(f) && isFinite(f) ? parseInt(f, 10) : 10;
                        for (var h = this.xsza(a), l = 0; h[e] && !g.id && 10 > l;) l++, e = this.uxin();
                        h[f] || (h[f] = {});
                        this.kswa(a, f);
                        g.priority = f;
                        h[f][e] = {
                            cb: c,
                            options: g
                        };
                        return e
                    }, a.xa.sode.prototype.zaxs = function(a, c) {
                        if (!this.desw[a]) return !1;
                        this.publishing_ = !0;
                        for (var g = this.edws.slice.call(arguments,
                                1), e = this._getEventPriorities_(a).slice(0), f = 0, h = e.length; f < h; f++) {
                            var l = this.desw[a][e[f]],
                                w;
                            for (w in l)
                                if (l.hasOwnProperty(w)) {
                                    var k = l[w];
                                    if (k) {
                                        var r;
                                        r = k.options && k.options.includeId ? [w].concat(g) : g;
                                        if (!k.options || !k.options.condition || k.options.condition && k.options.condition.apply(null, r)) k.options && k.options.once && "undefined" !== typeof k.options.priority && this.sxaz(a, {
                                            id: w,
                                            priority: k.options.priority
                                        }), k.cb.apply(null, r)
                                    }
                                }
                        }
                        this.publishing_ = !1;
                        for (g = 0; 0 < this.xfgf.length && 500 > g; g++) this.zaxs.apply(this,
                            this.xfgf.pop())
                    }, a.xa.sode.prototype.swaq = function(a, d, g) {
                        var e = !1;
                        if (this.desw[a] && this.desw[a][g]) try {
                            delete this.desw[a][g][d], e = !0
                        } catch (f) {}
                        0 === c(this.desw[a][g]).length && this.aksw(a, g);
                        return e
                    }, a.xa.sode.prototype.sxaz = function(a, c) {
                        if (!c || "object" != typeof c || !this.desw[a]) return !1;
                        if (c.id && void 0 !== c.priority) return this.swaq(a, c.id, c.priority);
                        if (c.id || c.callback)
                            for (var g = this._getEventPriorities_(a), e = 0, f = g.length; e < f; e++) {
                                var h = g[e];
                                if (c.id && c.callback) {
                                    if (this.desw[a][h][c.id] && this.desw[a][h][c.id].cb ==
                                        c.callback) return this.swaq(a, c.id, h)
                                } else if (c.id) {
                                    if (this.desw[a][h][c.id]) return this.swaq(a, c.id, h)
                                } else
                                    for (var l in this.desw[a][h])
                                        if (this.desw[a][h][l] && this.desw[a][h][l].cb == c.callback) return this.swaq(a, l, h)
                            }
                        return !1
                    }, a.xa.sode.prototype.ugin = function(a) {
                        if ("string" === typeof a)
                            if (this.desw[a]) delete this.desw[a];
                            else return !1;
                        else this.desw = {};
                        return !0
                    })
            }
            a.i = {};
            a.i.b = function(e) {
                e.xa.sode || (e.xb == window ? h(a.c.ar, window, m) : a.b.ci(h, "'" + a.c.ar + "',window, Math", e.xb));
                a.i.a = new e.xa.sode
            }
        })(n);
        (function(a) {
            function h(a, f) {
                function h(a) {
                    var c = b.xb.Math.pow,
                        d = b.xb.Math.random;
                    a = (0, b.xb.Math.max)(4, a);
                    return ((1 + d()) * c(16, a) | 0).toString(16).substring(0, a)
                }

                function k(a) {
                    return function(b) {
                        return a(b)
                    }
                }

                function c(a, b) {
                    if (!a || "string" !== typeof b || !a[b] || a == window) return !1;
                    if ("string" === typeof a.nodeName && ("OBJECT" === a.nodeName || "EMBED" === a.nodeName)) {
                        var c = document && document.body && document.body[b];
                        if (c && c !== a[b]) return c
                    }
                    return !1
                }
                f[a] = f[a] || {
                    zs: !1,
                    zr: 0,
                    yf: {},
                    h: 0,
                    m: 0,
                    i: {},
                    xa: {},
                    xb: f,
                    xc: {},
                    xyds: {}
                };
                var b = f[a],
                    d = {};
                b.xc.dowg = function(a, c) {
                    b && (b.xyds || (b.xyds = {}), b && b.xyds && (b.xyds[c] ? b.xyds[c].push(a) : b.xyds[c] = [a]))
                };
                b.xc.hsxk = function() {
                    b.dcsx && b.dcsx.dcwn();
                    "undefined" !== typeof a && a && b.xc.esde(a);
                    var a;
                    b.xc.exde(b.xc.hsxk, 1E3)
                };
                b.xc.esde = function(a) {
                    window && window.clearTimeout && window.clearTimeout(a)
                };
                b.xc.ynds = function(a, b, e, f) {
                    var h, l;
                    f ? d[b + f] ? e = d[b + f] : (e = k(e), d[b + f] = e) : e = k(e);
                    if (a.addEventListener) f = "addEventListener", h = "";
                    else if (a.attachEvent) f = "attachEvent", h = "on";
                    else return !1;
                    if (l =
                        c(a, f)) try {
                        l.call(a, h + b, e, !1)
                    } catch (z) {
                        a[f](h + b, e, !1)
                    } else if (a && f && a[f]) try {
                        a[f](h + b, e, !1)
                    } catch (z) {
                        return !1
                    }
                };
                b.xc.engn = function(a, b, e, f) {
                    var h, l = b + f,
                        k;
                    if (!a) return delete d[l], !1;
                    e = !1 !== f ? d[l] : e;
                    if (a.removeEventListener) f = "removeEventListener", h = "";
                    else if (a.detachEvent) f = "detachEvent", h = "on";
                    else return delete d[l], !1;
                    if (k = c(a, f)) try {
                        k.call(a, h + b, e, !1)
                    } catch (r) {
                        a[f](h + b, e, !1)
                    } else try {
                        a[f](h + b, e, !1)
                    } catch (r) {}
                    delete d[l]
                };
                b.xc.exde = function(a, b) {
                    a = k(a);
                    var c;
                    window && window.setTimeout && (c = window.setTimeout(a,
                        b));
                    return c
                };
                b.xc.exae = function(a, b, c) {
                    return function() {
                        b.apply(c || null, a.concat(a.slice.call(arguments)))
                    }
                };
                b.xc.uxin = function() {
                    return h(4) + "-" + h(4) + "-" + h(4) + "-" + h(4)
                };
                b.xc.twer = function(a, c) {
                    b && (b.yf || (b.yf = {}), b && b.yf && (b.yf[c] ? b.yf[c].push(a) : b.yf[c] = [a]))
                }
            }
            a.q = {};
            a.q.a = function(e) {
                var f = a.q.b(e),
                    h = !1;
                f || (f = a.q.c(e), h = !0, f.xc.exde(f.xc.hsxk, 1E3));
                window[a.c.ar] = f;
                a.i.b(f);
                h && (f.swde = new f.xa.sode);
                a.i.a.azsx("adKilled", a.q.d);
                a.i.a.azsx("allLocalAdsKilled", a.q.e, {
                    once: !0
                });
                return f
            };
            a.q.e =
                function() {
                    a.i.a.sxaz("adKilled", {
                        callback: a.q.d
                    });
                    a.q.f(p)
                };
            a.q.d = function(e) {
                a.c.h = null;
                if (p) {
                    try {
                        var f = p.yf[a.c.at.a];
                        if (f) {
                            var h = a.b.indexOf(f, e.yg); - 1 < h && f.splice(h, 1)
                        }
                        a.q.g(a.c.at.a, e.TAGID)
                    } catch (k) {}
                    a.q.f(p)
                }
            };
            a.q.h = function(e, f) {
                var h = a.q.b(a.c.d);
                h && h.xc.twer(e, f)
            };
            a.q.i = function(e, f) {
                var h = a.q.b(a.c.d);
                h && h.xc.dowg(f, e)
            };
            a.q.g = function(e, f) {
                var h = p.xyds[e];
                if (h) {
                    var k = a.b.indexOf(h, f); - 1 < k && h.splice(k, 1)
                }
            };
            a.q.f = function(e) {
                var f = !1,
                    h = !1,
                    k = 0,
                    c = 0;
                try {
                    e.yf[a.c.at.a] && (h = 0 === e.yf[a.c.at.a].length),
                        a.b.forEach(e.yf, function(a) {
                            0 < a.length && k++
                        }), a.q.g(a.c.at.a, a.c.av), a.b.forEach(e.xyds, function(a) {
                            0 < a.length && (c += a.length)
                        }), e.xyds[a.c.at.a] && 0 != e.xyds[a.c.at.a].length || (h = !0), 0 === c && 0 === k && (f = !0)
                } catch (b) {}
                h && e.swde.esgf("allAdsInWindowKilled", a.c.at.a);
                f && (a.i.a.sxaz("adKilled", {
                    callback: a.q.d
                }), a.i.a.sxaz("allLocalAdsKilled", {
                    callback: a.q.e
                }), e.swde.esgf("allAdsKilled"))
            };
            a.q.c = function(e) {
                e == window ? h(a.c.ar, window) : a.b.ci(h, "'" + a.c.ar + "',window", e);
                return a.q.b(e)
            };
            a.q.b = function(e) {
                try {
                    return e =
                        e || a.c.d, e[a.c.ar]
                } catch (f) {
                    return null
                }
            };
            a.q.j = function(e) {
                try {
                    var f = [];
                    e = e || a.c.d;
                    if (!e) return !1;
                    var h = a.c.aq;
                    if (!h) return !1;
                    var k = new RegExp("^" + h);
                    if (!k) return !1;
                    a.b.forEach(e, function(a, b) {
                        -1 < b.search(k) && a && "number" === typeof a.zr && f.push(a)
                    });
                    return f
                } catch (c) {
                    return !1
                }
            };
            a.q.k = function(e) {
                try {
                    var f = [];
                    e = e || a.c.d;
                    return e ? (f = a.q.j(e)) ? 0 < f.length ? !0 : !1 : !1 : !1
                } catch (h) {
                    return !1
                }
            };
            a.q.l = function(e) {
                var f = a.q.b();
                f && (f.i[e] = !0)
            }
        })(n);
        var p = n.q.a(n.c.d);
        n.i.a.zaxs("modulesReady", p);
        var E = n.c.b;
        n.b.g();
        (function(a) {
            function h(a, f) {
                function h(a) {
                    return function() {
                        try {
                            a.sending && (a.sending = !1, q = 0, k())
                        } catch (b) {}
                    }
                }

                function k(a, c) {
                    if (a) {
                        var d = {
                            qs: a,
                            jsd: c
                        };
                        if (0 === a.indexOf("e=21&")) {
                            b(d, !0);
                            return
                        }
                        g.push(d)
                    }
                    0 === q && 0 < g.length && (q++, d = g.shift(), d.sending = !0, d.uid = f.Math.floor(1E10 * f.Math.random()), d.timeoutId = setTimeout(h(d), 2E3), w[d.uid] = d, b(d))
                }

                function c() {
                    try {
                        return new B(1, 1)
                    } catch (a) {
                        var b = window.document.createElement("img");
                        b.height = 1;
                        b.width = 1;
                        return b
                    }
                }

                function b(a, e) {
                    var g = c();
                    g.toSend = a;
                    e ||
                        (g.onerror = function() {
                            var a = this.toSend;
                            a.failedAttempts = "number" == typeof a.failedAttempts ? a.failedAttempts + 1 : 0;
                            var c = (a.jsd + "/pixel.gif?" + a.qs).length;
                            1 > a.failedAttempts ? b(a) : r && c > m && d(a)
                        }, g.onload = function() {
                            d(this.toSend)
                        });
                    g.src = a.jsd + "/pixel.gif?" + a.qs
                }

                function d(a) {
                    var b = a && a.uid && w && w[a.uid];
                    if (a && a.qs && "tracer=" == a.qs) return !1;
                    if (b) {
                        w[a.uid] = null;
                        try {
                            delete w[a.uid]
                        } catch (c) {}
                        try {
                            clearTimeout(b.timeoutId)
                        } catch (c) {}
                        if ("boolean" != typeof b.sending || b.sending) b.sending = !1;
                        else return !1
                    }
                    0 < q &&
                        q--;
                    k()
                }
                var g = [],
                    q = 0,
                    B, x = f[a],
                    u = f.Math.floor(1E10 * f.Math.random()),
                    w = {};
                x.yh = {};
                x = x.yh;
                B = f.Image;
                x.yi = function(a, b) {
                    k(a, b)
                };
                x.xq = function() {
                    return u
                };
                var z, r, m = 2083;
                try {
                    z = document.createElement("div"), z.innerHTML = "\x3c!--[if IE 8]>x<![endif]--\x3e", r = "x" === z.innerHTML
                } catch (y) {
                    r = !1
                }
            }
            a.r = {};
            a.r.a = function(e) {
                try {
                    if (p.yh) return
                } catch (f) {}
                a.b.ci(h, "'" + a.c.ar + "',window", e)
            }
        })(n);
        (function(a) {
            a.g = {};
            a.g.e = 0;
            a.g.c = 1;
            a.g.f = 2;
            a.g.d = 3;
            a.g.g = 4;
            for (var h = [
                    [1, 25],
                    [7, 1],
                    [1, 25],
                    [-74, 1],
                    [1, 9],
                    [-24, 1],
                    [2, 1],
                    [1, 3],
                    [2, 1],
                    [1, 4],
                    [2, 1],
                    [1, 1],
                    [11, 1],
                    [1, 6],
                    [27, 1],
                    [2, 1],
                    [1, 3],
                    [27, 1],
                    [1, 3],
                    [-92, 1]
                ], e = 65, f = "", l = 0, l = 0; l < h.length; l++)
                for (var k = 0; k < h[l][1]; k++) f += String.fromCharCode(e), e += h[l][0];
            f += String.fromCharCode(e);
            a.g.h = f;
            a.g.i = function(a) {
                for (var b = "", d = 0; d < a.length; d++) var e = a.charCodeAt(d) ^ 85,
                    b = b + String.fromCharCode(e);
                a = b;
                for (var b = "", e = d = 0, h, l, k, u = 0; u < a.length; ++u)
                    for (k = a.charCodeAt(u), l = 255 < k ? 0 : 1; 2 > l; ++l) d = 0 === l ? d | (k & 65280) / 256 << e : d | (k & 255) << e, e += 8, 13 < e && (h = d & 8191, 88 < h ? (d >>= 13, e -= 13) : (h = d & 16383, d >>= 14, e -=
                        14), b += f.charAt(h % 91), b += f.charAt(h / 91 | 0));
                0 < e && (b += f.charAt(d % 91), 7 < e || 90 < d) && (b += f.charAt(d / 91 | 0));
                return b
            };
            a.g.j = function(c, b) {
                var d = [];
                a.b.forEach(c, function(a, c) {
                    if (void 0 !== a && ("string" === typeof(b ? a[b] : a) || "number" === typeof(b ? a[b] : a) || "boolean" === typeof(b ? a[b] : a))) {
                        var e = String(b ? a[b] : a).split("&").join("%26").split("=").join("%3D");
                        d.push(("number" === typeof c ? "" : c + "=") + e)
                    }
                }, null, !0);
                d.sort();
                return d.join("&")
            };
            a.g.a = function(a) {
                for (var b = "", d = 0; d < a.length; d++) a.hasOwnProperty(d) && (b += f[a[d]]);
                return b
            };
            a.g.k = function() {
                var c = document && document.documentElement && document.documentElement.style || {};
                a.g.l = [!0 === (!!window.chrome && !!window.chrome.webstore) ? 1 : 0, !0 === ("undefined" !== typeof InstallTrigger || "MozAppearance" in c) ? 1 : 0, !0 === !!window.opera ? 1 : 0, !0 === a.c.m ? 1 : 0, !0 === (!+"\v1" || !!document.documentMode || !!window.ActiveXObject || "-ms-scroll-limit" in c && "-ms-ime-align" in c) ? 1 : 0];
                for (var c = !1, b = 0; b < a.g.l.length; b++)
                    if (1 === a.g.l[b]) {
                        c = b;
                        break
                    }! 1 !== c && (a.g.b = c);
                return a.g.b
            };
            a.g.b = a.g.k()
        })(n);
        (function(a) {
            a.s = {};
            var h = [];
            a.s.a = function(a, f) {
                h.push({
                    query: a,
                    callback: f
                });
                return !1
            }
        })(n);
        (function(a) {
            function h(a, c) {
                try {
                    var e = a.split(k),
                        h = c || window,
                        B, x;
                    for (x = 0; x < e.length; x++) {
                        B = e[x];
                        if (null === h || typeof h === f) return 1;
                        h = h[B]
                    }
                    if (typeof h === f) return 2;
                    if (null === h) return 3;
                    var u;
                    var w = a + l + h.toString(),
                        e = 0,
                        z = w.length,
                        r, m;
                    if (0 == z) u = e;
                    else {
                        for (r = 0; r < z; r++) m = w.charCodeAt(r), e = (e << 5) - e + m, e &= e;
                        u = e >>> 0
                    }
                    return 4 + u % 58
                } catch (y) {
                    return 0
                }
            }
            a.t = {};
            var e = [0, 27, 40, 43, 45, 2, 40, 39, 45, 43, 40, 37, 37, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 0,
                    27, 40, 43, 45, 2, 40, 39, 45, 43, 40, 37, 37, 30, 43, 72, 39, 26, 38, 30, 71, 0, 27, 40, 43, 45, 18, 34, 32, 39, 26, 37, 72, 39, 26, 38, 30, 71, 0, 39, 34, 38, 26, 45, 34, 40, 39, 15, 37, 26, 50, 27, 26, 28, 36, 4, 47, 30, 39, 45, 72, 0, 11, 19, 84, 12, 0, 18, 10, 71, 0, 41, 41, 1, 26, 39, 39, 30, 43, 15, 43, 40, 38, 41, 45, 17, 30, 44, 46, 37, 45, 72, 37, 30, 39, 32, 45, 33, 71, 0, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 4, 43, 43, 40, 43, 4, 47, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 0, 43, 43, 26, 50, 72, 46, 39, 40, 27, 44, 30, 43, 47, 30, 72, 39, 26, 38, 30, 71, 0, 43, 43, 26, 50, 1, 46, 31, 31, 30, 43, 21, 34, 30, 48, 72, 37, 30, 39,
                    32, 45, 33, 71, 0, 45, 40, 38, 34, 28, 44, 72, 28, 40, 38, 41, 26, 43, 30, 4, 49, 28, 33, 26, 39, 32, 30, 72, 39, 26, 38, 30, 71, 0, 45, 40, 38, 34, 28, 44, 72, 48, 26, 36, 30, 72, 37, 30, 39, 32, 45, 33, 71, 0, 45, 45, 43, 72, 3, 14, 2, 20, 12, 4, 13, 19, 84, 15, 14, 18, 8, 19, 8, 14, 13, 84, 2, 14, 13, 19, 0, 8, 13, 18, 71, 0, 46, 29, 34, 40, 11, 34, 44, 45, 30, 39, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 0, 46, 45, 40, 28, 40, 38, 41, 37, 30, 45, 30, 4, 43, 43, 40, 43, 4, 47, 30, 39, 45, 72, 10, 4, 24, 15, 17, 4, 18, 18, 71, 0, 46, 45, 40, 28, 40, 38, 41, 37, 30, 45, 30, 4, 43, 43, 40, 43, 4, 47, 30, 39, 45, 72, 13, 14, 13, 4, 71, 1, 34, 32, 8, 39, 45, 58, 56, 0, 43,
                    43, 26, 50, 72, 37, 30, 39, 32, 45, 33, 71, 1, 37, 46, 30, 45, 40, 40, 45, 33, 72, 39, 26, 38, 30, 71, 1, 37, 46, 30, 45, 40, 40, 45, 33, 17, 30, 38, 40, 45, 30, 6, 0, 19, 19, 18, 30, 43, 47, 30, 43, 72, 39, 26, 38, 30, 71, 1, 46, 29, 32, 30, 45, 18, 30, 43, 47, 34, 28, 30, 72, 37, 30, 39, 32, 45, 33, 71, 1, 46, 29, 32, 30, 45, 18, 30, 43, 47, 34, 28, 30, 72, 39, 26, 38, 30, 71, 2, 18, 18, 72, 43, 30, 38, 72, 37, 30, 39, 32, 45, 33, 71, 2, 18, 18, 72, 47, 38, 34, 39, 72, 39, 26, 38, 30, 71, 2, 18, 18, 2, 33, 26, 43, 44, 30, 45, 17, 46, 37, 30, 72, 5, 14, 13, 19, 84, 5, 0, 2, 4, 84, 17, 20, 11, 4, 71, 2, 18, 18, 5, 40, 39, 45, 5, 26, 28, 30, 17, 46, 37, 30, 72, 13, 0,
                    12, 4, 18, 15, 0, 2, 4, 84, 17, 20, 11, 4, 71, 2, 18, 18, 5, 40, 39, 45, 5, 26, 28, 30, 17, 46, 37, 30, 72, 22, 4, 1, 10, 8, 19, 84, 10, 4, 24, 5, 17, 0, 12, 4, 18, 84, 17, 20, 11, 4, 71, 2, 18, 18, 6, 43, 40, 46, 41, 34, 39, 32, 17, 46, 37, 30, 72, 10, 4, 24, 5, 17, 0, 12, 4, 84, 17, 20, 11, 4, 71, 2, 18, 18, 6, 43, 40, 46, 41, 34, 39, 32, 17, 46, 37, 30, 72, 13, 0, 12, 4, 18, 15, 0, 2, 4, 84, 17, 20, 11, 4, 71, 2, 18, 18, 6, 43, 40, 46, 41, 34, 39, 32, 17, 46, 37, 30, 72, 22, 4, 1, 10, 8, 19, 84, 10, 4, 24, 5, 17, 0, 12, 4, 18, 84, 17, 20, 11, 4, 71, 2, 18, 18, 10, 30, 50, 31, 43, 26, 38, 30, 17, 46, 37, 30, 72, 37, 30, 39, 32, 45, 33, 71, 2, 18, 18, 10, 30, 50, 31, 43, 26,
                    38, 30, 44, 17, 46, 37, 30, 72, 15, 0, 6, 4, 84, 17, 20, 11, 4, 71, 2, 18, 18, 12, 30, 29, 34, 26, 17, 46, 37, 30, 72, 20, 13, 10, 13, 14, 22, 13, 84, 17, 20, 11, 4, 71, 2, 18, 18, 15, 26, 32, 30, 17, 46, 37, 30, 72, 15, 0, 6, 4, 84, 17, 20, 11, 4, 71, 2, 18, 18, 15, 26, 32, 30, 17, 46, 37, 30, 72, 22, 4, 1, 10, 8, 19, 84, 10, 4, 24, 5, 17, 0, 12, 4, 84, 17, 20, 11, 4, 71, 2, 18, 18, 15, 43, 34, 38, 34, 45, 34, 47, 30, 21, 26, 37, 46, 30, 72, 2, 18, 18, 84, 13, 20, 12, 1, 4, 17, 71, 2, 18, 18, 17, 40, 45, 26, 45, 30, 72, 39, 26, 38, 30, 71, 2, 18, 18, 21, 26, 37, 46, 30, 72, 2, 18, 18, 84, 15, 17, 8, 12, 8, 19, 8, 21, 4, 84, 21, 0, 11, 20, 4, 71, 2, 26, 28, 33, 30, 72, 37,
                    30, 39, 32, 45, 33, 71, 2, 26, 28, 33, 30, 72, 39, 26, 38, 30, 71, 2, 37, 34, 41, 27, 40, 26, 43, 29, 4, 47, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 2, 37, 40, 44, 30, 4, 47, 30, 39, 45, 72, 0, 19, 84, 19, 0, 17, 6, 4, 19, 71, 2, 40, 46, 39, 45, 16, 46, 30, 46, 34, 39, 32, 18, 45, 43, 26, 45, 30, 32, 50, 72, 37, 30, 39, 32, 45, 33, 71, 2, 46, 44, 45, 40, 38, 4, 37, 30, 38, 30, 39, 45, 17, 30, 32, 34, 44, 45, 43, 50, 72, 39, 26, 38, 30, 71, 3, 14, 12, 4, 49, 28, 30, 41, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 3, 14, 12, 17, 30, 28, 45, 17, 30, 26, 29, 14, 39, 37, 50, 72, 31, 43, 40, 38, 17, 30, 28, 45, 72, 39, 26, 38, 30, 71, 3, 30, 47, 34, 28, 30, 14, 43, 34, 30,
                    39, 45, 26, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 2, 11, 8, 2, 10, 71, 3, 30, 47, 34, 28, 30, 18, 45, 40, 43, 26, 32, 30, 0, 43, 30, 26, 2, 33, 26, 39, 32, 30, 29, 4, 47, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 3, 40, 28, 46, 38, 30, 39, 45, 72, 3, 14, 2, 20, 12, 4, 13, 19, 84, 19, 24, 15, 4, 84, 13, 14, 3, 4, 71, 3, 40, 28, 46, 38, 30, 39, 45, 5, 43, 26, 32, 38, 30, 39, 45, 72, 4, 13, 19, 8, 19, 24, 84, 17, 4, 5, 4, 17, 4, 13, 2, 4, 84, 13, 14, 3, 4, 71, 3, 40, 28, 46, 38, 30, 39, 45, 19, 50, 41, 30, 72, 3, 14, 2, 20, 12, 4, 13, 19, 84, 15, 14, 18, 8, 19, 8, 14, 13, 84, 15, 17, 4, 2, 4, 3, 8, 13, 6, 71, 3, 40, 28, 46, 38, 30, 39, 45, 19, 50, 41, 30, 72, 15, 17, 14, 2,
                    4, 18, 18, 8, 13, 6, 84, 8, 13, 18, 19, 17, 20, 2, 19, 8, 14, 13, 84, 13, 14, 3, 4, 71, 4, 37, 30, 38, 30, 39, 45, 15, 26, 34, 39, 45, 4, 47, 30, 39, 45, 72, 12, 14, 20, 18, 4, 3, 17, 0, 6, 71, 4, 37, 30, 38, 30, 39, 45, 15, 26, 34, 39, 45, 4, 47, 30, 39, 45, 72, 12, 14, 20, 18, 4, 20, 15, 71, 4, 43, 43, 40, 43, 72, 34, 44, 4, 43, 43, 40, 43, 72, 18, 50, 38, 27, 40, 37, 67, 44, 43, 28, 68, 84, 53, 72, 44, 28, 32, 44, 34, 45, 58, 48, 58, 56, 28, 46, 48, 33, 31, 43, 71, 4, 43, 43, 40, 43, 4, 47, 30, 39, 45, 72, 10, 4, 24, 20, 15, 71, 4, 47, 30, 39, 45, 72, 12, 14, 20, 18, 4, 14, 21, 4, 17, 71, 5, 34, 37, 30, 4, 43, 43, 40, 43, 72, 15, 0, 19, 7, 84, 4, 23, 8, 18, 19, 18, 84,
                    4, 17, 17, 71, 6, 26, 38, 30, 41, 26, 29, 4, 47, 30, 39, 45, 72, 0, 19, 84, 19, 0, 17, 6, 4, 19, 71, 7, 19, 12, 11, 5, 40, 43, 38, 4, 37, 30, 38, 30, 39, 45, 72, 39, 26, 38, 30, 71, 7, 19, 12, 11, 7, 45, 38, 37, 4, 37, 30, 38, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 7, 19, 12, 11, 12, 30, 45, 30, 43, 4, 37, 30, 38, 30, 39, 45, 72, 39, 26, 38, 30, 71, 7, 19, 12, 11, 18, 28, 43, 34, 41, 45, 4, 37, 30, 38, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 7, 19, 12, 11, 20, 39, 36, 39, 40, 48, 39, 4, 37, 30, 38, 30, 39, 45, 72, 39, 26, 38, 30, 71, 8, 53, 52, 2, 72, 1, 30, 32, 34, 39, 1, 14, 3, 24, 72, 37, 30, 39, 32, 45, 33, 71, 8, 3, 1, 8, 39, 29, 30, 49, 72, 37, 30, 39, 32,
                    45, 33, 71, 8, 3, 1, 10, 30, 50, 17, 26, 39, 32, 30, 72, 37, 40, 48, 30, 43, 1, 40, 46, 39, 29, 72, 39, 26, 38, 30, 71, 8, 23, 2, 84, 53, 53, 58, 84, 59, 54, 55, 58, 57, 52, 58, 54, 54, 58, 57, 57, 53, 59, 52, 59, 72, 2, 40, 38, 41, 46, 45, 30, 0, 37, 37, 72, 45, 43, 28, 19, 33, 43, 40, 45, 45, 37, 30, 72, 45, 43, 28, 1, 34, 39, 29, 72, 37, 30, 39, 32, 45, 33, 71, 8, 28, 20, 6, 24, 58, 43, 60, 27, 23, 7, 3, 23, 28, 40, 28, 7, 72, 48, 30, 27, 32, 37, 72, 32, 30, 45, 15, 26, 43, 26, 38, 30, 45, 30, 43, 72, 39, 26, 38, 30, 71, 8, 38, 26, 32, 30, 1, 34, 45, 38, 26, 41, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 39, 26, 38, 30, 71, 8, 39, 45, 60,
                    0, 43, 43, 26, 50, 72, 1, 24, 19, 4, 18, 84, 15, 4, 17, 84, 4, 11, 4, 12, 4, 13, 19, 71, 8, 39, 45, 37, 72, 2, 40, 37, 37, 26, 45, 40, 43, 72, 44, 46, 41, 41, 40, 43, 45, 30, 29, 11, 40, 28, 26, 37, 30, 44, 14, 31, 72, 37, 30, 39, 32, 45, 33, 71, 8, 39, 45, 37, 72, 15, 37, 46, 43, 26, 37, 17, 46, 37, 30, 44, 72, 39, 26, 38, 30, 71, 8, 39, 45, 37, 72, 15, 37, 46, 43, 26, 37, 17, 46, 37, 30, 44, 72, 44, 46, 41, 41, 40, 43, 45, 30, 29, 11, 40, 28, 26, 37, 30, 44, 14, 31, 72, 37, 30, 39, 32, 45, 33, 71, 8, 45, 30, 43, 26, 45, 40, 43, 72, 37, 30, 39, 32, 45, 33, 71, 8, 45, 30, 43, 26, 45, 40, 43, 72, 39, 26, 38, 30, 71, 10, 30, 50, 4, 47, 30, 39, 45, 72, 3, 14, 12, 84,
                    21, 10, 84, 0, 11, 19, 6, 17, 71, 10, 30, 50, 4, 47, 30, 39, 45, 72, 3, 14, 12, 84, 21, 10, 84, 13, 20, 12, 15, 0, 3, 54, 71, 10, 30, 50, 4, 47, 30, 39, 45, 72, 3, 14, 12, 84, 21, 10, 84, 15, 0, 53, 71, 10, 30, 50, 4, 47, 30, 39, 45, 72, 3, 14, 12, 84, 21, 10, 84, 18, 4, 15, 0, 17, 0, 19, 14, 17, 71, 10, 30, 50, 31, 43, 26, 38, 30, 4, 31, 31, 30, 28, 45, 72, 39, 26, 38, 30, 71, 12, 18, 5, 8, 3, 14, 18, 34, 32, 39, 26, 45, 46, 43, 30, 72, 39, 26, 38, 30, 71, 12, 26, 45, 33, 72, 28, 27, 43, 45, 72, 37, 30, 39, 32, 45, 33, 71, 12, 26, 45, 33, 72, 28, 37, 51, 55, 54, 72, 37, 30, 39, 32, 45, 33, 71, 12, 26, 45, 33, 72, 30, 49, 41, 38, 53, 72, 39, 26, 38, 30, 71, 12, 30,
                    29, 34, 26, 2, 26, 41, 26, 27, 34, 37, 34, 45, 34, 30, 44, 8, 39, 31, 40, 72, 39, 26, 38, 30, 71, 12, 30, 29, 34, 26, 3, 30, 47, 34, 28, 30, 8, 39, 31, 40, 72, 39, 26, 38, 30, 71, 12, 30, 29, 34, 26, 4, 43, 43, 40, 43, 72, 12, 4, 3, 8, 0, 84, 4, 17, 17, 84, 3, 4, 2, 14, 3, 4, 71, 12, 30, 29, 34, 26, 18, 45, 43, 30, 26, 38, 4, 47, 30, 39, 45, 72, 18, 7, 8, 5, 19, 84, 12, 0, 18, 10, 71, 12, 46, 45, 26, 45, 34, 40, 39, 17, 30, 28, 40, 43, 29, 72, 39, 26, 38, 30, 71, 13, 26, 47, 34, 32, 26, 45, 34, 40, 39, 15, 43, 30, 37, 40, 26, 29, 12, 26, 39, 26, 32, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 13, 40, 29, 30, 5, 34, 37, 45, 30, 43, 72, 18, 7, 14, 22, 84, 0, 11, 11, 71, 13,
                    40, 45, 26, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 13, 40, 45, 34, 31, 50, 15, 26, 34, 39, 45, 4, 47, 30, 39, 45, 72, 18, 7, 8, 5, 19, 84, 12, 0, 18, 10, 71, 14, 27, 35, 30, 28, 45, 72, 44, 30, 45, 15, 43, 40, 45, 40, 45, 50, 41, 30, 14, 31, 72, 37, 30, 39, 32, 45, 33, 71, 15, 26, 32, 30, 19, 43, 26, 39, 44, 34, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 18, 4, 11, 4, 2, 19, 71, 15, 26, 50, 38, 30, 39, 45, 0, 29, 29, 43, 30, 44, 44, 72, 37, 30, 39, 32, 45, 33, 71, 15, 26, 50, 38, 30, 39, 45, 0, 29, 29, 43, 30, 44, 44, 72, 39, 26, 38, 30, 71, 15, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 13, 26, 47, 34, 32, 26, 45, 34, 40, 39, 72, 19, 24, 15, 4, 84, 17, 4, 18, 4,
                    17, 21, 4, 3, 71, 15, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 13, 26, 47, 34, 32, 26, 45, 34, 40, 39, 19, 34, 38, 34, 39, 32, 72, 37, 30, 39, 32, 45, 33, 71, 15, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 14, 27, 44, 30, 43, 47, 30, 43, 4, 39, 45, 43, 50, 11, 34, 44, 45, 72, 37, 30, 39, 32, 45, 33, 71, 15, 33, 40, 45, 40, 2, 26, 41, 26, 27, 34, 37, 34, 45, 34, 30, 44, 72, 37, 30, 39, 32, 45, 33, 71, 15, 43, 40, 32, 43, 30, 44, 44, 4, 47, 30, 39, 45, 72, 39, 26, 38, 30, 71, 15, 43, 40, 38, 34, 44, 30, 72, 43, 26, 28, 30, 72, 37, 30, 39, 32, 45, 33, 71, 15, 46, 44, 33, 18, 46, 27, 44, 28, 43, 34, 41, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 15, 46, 44, 33, 18,
                    46, 27, 44, 28, 43, 34, 41, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 17, 19, 2, 3, 19, 12, 5, 19, 40, 39, 30, 2, 33, 26, 39, 32, 30, 4, 47, 30, 39, 45, 72, 39, 26, 38, 30, 71, 17, 19, 2, 15, 30, 30, 43, 2, 40, 39, 39, 30, 28, 45, 34, 40, 39, 72, 32, 30, 39, 30, 43, 26, 45, 30, 2, 30, 43, 45, 34, 31, 34, 28, 26, 45, 30, 72, 39, 26, 38, 30, 71, 17, 19, 2, 15, 30, 30, 43, 2, 40, 39, 39, 30, 28, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 17, 19, 2, 17, 45, 41, 18, 30, 39, 29, 30, 43, 72, 39, 26, 38, 30, 71, 17, 26, 39, 32, 30, 72, 13, 14, 3, 4, 84, 1, 4, 5, 14, 17, 4, 84, 0, 13, 3, 84, 0, 5, 19, 4, 17, 71, 17, 26, 39, 32, 30, 4, 43, 43, 40, 43, 72, 44, 45, 26, 28, 36,
                    19, 43, 26, 28, 30, 11, 34, 38, 34, 45, 71, 17, 30, 31, 30, 43, 30, 39, 28, 30, 4, 43, 43, 40, 43, 72, 44, 45, 26, 28, 36, 19, 43, 26, 28, 30, 11, 34, 38, 34, 45, 71, 17, 30, 31, 37, 30, 28, 45, 72, 28, 40, 39, 44, 45, 43, 46, 28, 45, 72, 39, 26, 38, 30, 71, 17, 30, 31, 37, 30, 28, 45, 72, 44, 30, 45, 15, 43, 40, 45, 40, 45, 50, 41, 30, 14, 31, 72, 39, 26, 38, 30, 71, 18, 21, 6, 0, 4, 37, 30, 38, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 18, 21, 6, 0, 37, 45, 6, 37, 50, 41, 33, 4, 37, 30, 38, 30, 39, 45, 72, 39, 26, 38, 30, 71, 18, 21, 6, 2, 40, 38, 41, 40, 39, 30, 39, 45, 19, 43, 26, 39, 44, 31, 30, 43, 5, 46, 39, 28, 45, 34, 40, 39, 4, 37, 30, 38, 30, 39, 45,
                    72, 18, 21, 6, 84, 5, 4, 2, 14, 12, 15, 14, 13, 4, 13, 19, 19, 17, 0, 13, 18, 5, 4, 17, 84, 19, 24, 15, 4, 84, 20, 13, 10, 13, 14, 22, 13, 71, 18, 21, 6, 4, 49, 28, 30, 41, 45, 34, 40, 39, 72, 18, 21, 6, 84, 8, 13, 21, 0, 11, 8, 3, 84, 21, 0, 11, 20, 4, 84, 4, 17, 17, 71, 18, 21, 6, 5, 4, 1, 37, 30, 39, 29, 4, 37, 30, 38, 30, 39, 45, 72, 18, 21, 6, 84, 5, 4, 1, 11, 4, 13, 3, 84, 12, 14, 3, 4, 84, 2, 14, 11, 14, 17, 71, 18, 21, 6, 5, 4, 1, 37, 30, 39, 29, 4, 37, 30, 38, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 18, 21, 6, 5, 40, 39, 45, 5, 26, 28, 30, 18, 43, 28, 4, 37, 30, 38, 30, 39, 45, 72, 39, 26, 38, 30, 71, 18, 21, 6, 15, 26, 34, 39, 45, 72, 18, 21, 6, 84, 2, 14, 11,
                    14, 17, 19, 24, 15, 4, 84, 20, 13, 10, 13, 14, 22, 13, 71, 18, 21, 6, 15, 26, 34, 39, 45, 72, 18, 21, 6, 84, 15, 0, 8, 13, 19, 19, 24, 15, 4, 84, 13, 14, 13, 4, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 11, 14, 18, 4, 15, 0, 19, 7, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 2, 20, 1, 8, 2, 84, 18, 12, 14, 14, 19, 7, 84, 0, 1, 18, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 16, 20, 0, 3, 17, 0, 19, 8, 2, 84, 18, 12, 14, 14, 19, 7, 84, 0, 1, 18, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 72, 15, 0, 19, 7, 18, 4, 6, 84, 11,
                    8, 13, 4, 19, 14, 84, 0, 1, 18, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 0, 43, 28, 17, 30, 37, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 16, 20, 0, 3, 17, 0, 19, 8, 2, 84, 18, 12, 14, 14, 19, 7, 84, 17, 4, 11, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 2, 37, 40, 44, 30, 15, 26, 45, 33, 72, 15, 0, 19, 7, 18, 4, 6, 84, 11, 8, 13, 4, 19, 14, 84, 21, 4, 17, 19, 8, 2, 0, 11, 84, 0, 1, 18, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 11, 34, 39, 30, 45, 40, 21, 30, 43, 45, 34, 28, 26, 37, 17, 30, 37, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 2, 20, 1, 8, 2, 84, 18, 12, 14, 14, 19, 7, 84, 0, 1, 18, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32,
                    12, 40, 47, 30, 45, 40, 0, 27, 44, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 16, 20, 0, 3, 17, 0, 19, 8, 2, 84, 17, 4, 11, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 12, 40, 47, 30, 45, 40, 0, 27, 44, 72, 15, 0, 19, 7, 18, 4, 6, 84, 11, 8, 13, 4, 19, 14, 84, 7, 14, 17, 8, 25, 14, 13, 19, 0, 11, 84, 17, 4, 11, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 12, 40, 47, 30, 45, 40, 17, 30, 37, 72, 15, 0, 19, 7, 18, 4, 6, 84, 0, 17, 2, 84, 17, 4, 11, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 12, 40, 47, 30, 45, 40, 17, 30, 37, 72, 15, 0, 19, 7, 18, 4, 6, 84, 12, 14, 21, 4, 19, 14, 84, 0, 1, 18, 71, 18, 21, 6, 17, 26, 29, 34, 26, 37, 6, 43, 26, 29, 34, 30, 39, 45,
                    4, 37, 30, 38, 30, 39, 45, 72, 18, 21, 6, 84, 20, 13, 8, 19, 84, 19, 24, 15, 4, 84, 14, 1, 9, 4, 2, 19, 1, 14, 20, 13, 3, 8, 13, 6, 1, 14, 23, 71, 18, 21, 6, 17, 30, 39, 29, 30, 43, 34, 39, 32, 8, 39, 45, 30, 39, 45, 72, 17, 4, 13, 3, 4, 17, 8, 13, 6, 84, 8, 13, 19, 4, 13, 19, 84, 18, 0, 19, 20, 17, 0, 19, 8, 14, 13, 71, 18, 21, 6, 18, 21, 6, 4, 37, 30, 38, 30, 39, 45, 72, 18, 21, 6, 84, 25, 14, 14, 12, 0, 13, 3, 15, 0, 13, 84, 20, 13, 10, 13, 14, 22, 13, 71, 18, 21, 6, 21, 34, 30, 48, 18, 41, 30, 28, 72, 18, 21, 6, 84, 25, 14, 14, 12, 0, 13, 3, 15, 0, 13, 84, 20, 13, 10, 13, 14, 22, 13, 71, 18, 30, 43, 47, 34, 28, 30, 22, 40, 43, 36, 30, 43, 17, 30, 32, 34, 44, 45, 43, 26,
                    45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 18, 41, 30, 30, 28, 33, 18, 50, 39, 45, 33, 30, 44, 34, 44, 4, 43, 43, 40, 43, 4, 47, 30, 39, 45, 72, 39, 26, 38, 30, 71, 18, 45, 26, 45, 34, 28, 17, 26, 39, 32, 30, 72, 39, 26, 38, 30, 71, 18, 45, 30, 43, 30, 40, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 18, 19, 4, 17, 4, 14, 84, 2, 0, 12, 4, 17, 0, 84, 19, 24, 15, 4, 84, 14, 5, 5, 84, 0, 23, 8, 18, 84, 71, 18, 45, 43, 34, 39, 32, 72, 45, 43, 34, 38, 11, 30, 31, 45, 72, 39, 26, 38, 30, 71, 19, 30, 49, 45, 3, 30, 28, 40, 29, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 19, 30, 49, 45, 3, 30, 28, 40, 29, 30, 43, 72, 39, 26, 38, 30, 71, 19, 30, 49, 45, 19, 43,
                    26, 28, 36, 72, 37, 30, 39, 32, 45, 33, 71, 19, 40, 46, 28, 33, 11, 34, 44, 45, 72, 37, 30, 39, 32, 45, 33, 71, 19, 43, 26, 28, 36, 4, 47, 30, 39, 45, 72, 5, 14, 2, 20, 18, 71, 19, 43, 26, 28, 36, 4, 47, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 19, 50, 41, 30, 29, 14, 27, 35, 30, 28, 45, 72, 40, 27, 35, 30, 28, 45, 19, 50, 41, 30, 72, 37, 30, 39, 32, 45, 33, 71, 20, 17, 8, 4, 43, 43, 40, 43, 72, 39, 26, 38, 30, 71, 20, 17, 11, 18, 30, 26, 43, 28, 33, 15, 26, 43, 26, 38, 44, 72, 39, 26, 38, 30, 71, 20, 18, 1, 2, 40, 39, 31, 34, 32, 46, 43, 26, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 20, 18, 1, 8, 39, 45, 30, 43, 31, 26, 28, 30, 72, 39, 26, 38, 30, 71, 20, 18, 1,
                    8, 44, 40, 28, 33, 43, 40, 39, 40, 46, 44, 8, 39, 19, 43, 26, 39, 44, 31, 30, 43, 15, 26, 28, 36, 30, 45, 72, 39, 26, 38, 30, 71, 20, 18, 1, 8, 44, 40, 28, 33, 43, 40, 39, 40, 46, 44, 14, 46, 45, 19, 43, 26, 39, 44, 31, 30, 43, 15, 26, 28, 36, 30, 45, 72, 37, 30, 39, 32, 45, 33, 71, 20, 18, 1, 14, 46, 45, 19, 43, 26, 39, 44, 31, 30, 43, 17, 30, 44, 46, 37, 45, 72, 39, 26, 38, 30, 71, 21, 17, 5, 43, 26, 38, 30, 3, 26, 45, 26, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 0, 44, 44, 30, 38, 27, 37, 50, 72, 2, 40, 38, 41, 34, 37, 30, 4, 43, 43, 40, 43, 72, 44, 45, 26, 28, 36, 19, 43, 26, 28, 30, 11, 34, 38, 34, 45, 71, 22, 30, 27, 0, 44, 44, 30, 38, 27, 37, 50, 72, 12,
                    40, 29, 46, 37, 30, 72, 30, 49, 41, 40, 43, 45, 44, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 0, 44, 44, 30, 38, 27, 37, 50, 72, 34, 39, 44, 45, 26, 39, 45, 34, 26, 45, 30, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 0, 11, 17, 4, 0, 3, 24, 84, 18, 8, 6, 13, 0, 11, 4, 3, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 3, 4, 15, 19, 7, 84, 2, 14, 12, 15, 14, 13, 4, 13, 19, 53, 58, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 5, 11, 14, 0, 19, 84, 12, 0, 19, 54, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39,
                    29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 5, 11, 14, 0, 19, 84, 12, 0, 19, 54, 49, 55, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 12, 4, 3, 8, 20, 12, 84, 5, 11, 14, 0, 19, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 15, 14, 11, 24, 6, 14, 13, 84, 14, 5, 5, 18, 4, 19, 84, 5, 8, 11, 11, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 18, 19, 4, 13, 2, 8, 11, 84, 1, 0, 2, 10, 84, 5, 20, 13, 2, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 19, 4, 23, 19, 20, 17, 4, 56,
                    71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 19, 8, 12, 4, 14, 20, 19, 84, 8, 6, 13, 14, 17, 4, 3, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 20, 13, 8, 5, 14, 17, 12, 84, 19, 24, 15, 4, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 5, 11, 14, 0, 19, 84, 12, 0, 19, 56, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 12, 0, 23, 84, 2, 20, 1, 4, 84, 12, 0, 15, 84, 19, 4, 23, 19, 20, 17, 4, 84, 18, 8, 25, 4, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45,
                    72, 12, 4, 3, 8, 20, 12, 84, 5, 11, 14, 0, 19, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 19, 4, 23, 19, 20, 17, 4, 53, 52, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 19, 4, 23, 19, 20, 17, 4, 53, 56, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 19, 4, 23, 19, 20, 17, 4, 84, 22, 17, 0, 15, 84, 18, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 21, 4, 13, 3, 14, 17, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 21, 4, 17, 19, 4, 23, 84, 0, 19, 19,
                    17, 8, 1, 84, 0, 17, 17, 0, 24, 84, 19, 24, 15, 4, 71, 22, 30, 27, 10, 34, 45, 0, 39, 34, 38, 26, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 2, 0, 15, 19, 20, 17, 8, 13, 6, 84, 15, 7, 0, 18, 4, 71, 22, 30, 27, 10, 34, 45, 0, 39, 34, 38, 26, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 10, 4, 24, 3, 14, 22, 13, 71, 22, 30, 27, 10, 34, 45, 2, 18, 18, 5, 34, 37, 45, 30, 43, 21, 26, 37, 46, 30, 72, 2, 18, 18, 84, 5, 8, 11, 19, 4, 17, 84, 1, 11, 20, 17, 71, 22, 30, 27, 10, 34, 45, 2, 18, 18, 12, 26, 45, 43, 34, 49, 72, 31, 43, 40, 38, 12, 26, 45, 43, 34, 49, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 10, 34, 45, 2, 18, 18, 19, 43, 26, 39, 44, 31, 40, 43, 38, 21, 26, 37, 46, 30, 72,
                    2, 18, 18, 84, 17, 14, 19, 0, 19, 4, 55, 3, 71, 22, 30, 27, 10, 34, 45, 3, 34, 43, 30, 28, 45, 40, 43, 50, 17, 30, 26, 29, 30, 43, 72, 39, 26, 38, 30, 71, 22, 30, 27, 10, 34, 45, 12, 30, 29, 34, 26, 10, 30, 50, 13, 30, 30, 29, 30, 29, 4, 47, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 10, 34, 45, 19, 43, 26, 39, 44, 34, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 3, 1, 11, 2, 11, 8, 2, 10, 71, 22, 33, 30, 30, 37, 4, 47, 30, 39, 45, 72, 3, 14, 12, 84, 3, 4, 11, 19, 0, 84, 15, 0, 6, 4, 71, 22, 33, 30, 30, 37, 4, 47, 30, 39, 45, 72, 22, 4, 1, 10, 8, 19, 84, 5, 14, 17, 2, 4, 84, 0, 19, 84, 5, 14, 17, 2, 4, 84, 12, 14, 20, 18, 4, 84, 3, 14, 22, 13, 71, 22, 40, 43, 36,
                    37, 30, 45, 72, 39, 26, 38, 30, 71, 22, 43, 34, 45, 26, 27, 37, 30, 18, 45, 43, 30, 26, 38, 72, 37, 30, 39, 32, 45, 33, 71, 22, 43, 34, 45, 26, 27, 37, 30, 18, 45, 43, 30, 26, 38, 72, 39, 26, 38, 30, 71, 23, 12, 11, 3, 40, 28, 46, 38, 30, 39, 45, 72, 3, 14, 2, 20, 12, 4, 13, 19, 84, 15, 14, 18, 8, 19, 8, 14, 13, 84, 3, 8, 18, 2, 14, 13, 13, 4, 2, 19, 4, 3, 71, 23, 12, 11, 7, 45, 45, 41, 17, 30, 42, 46, 30, 44, 45, 72, 7, 4, 0, 3, 4, 17, 18, 84, 17, 4, 2, 4, 8, 21, 4, 3, 71, 23, 15, 26, 45, 33, 4, 47, 26, 37, 46, 26, 45, 40, 43, 72, 37, 30, 39, 32, 45, 33, 71, 23, 15, 26, 45, 33, 4, 49, 41, 43, 30, 44, 44, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 26, 38, 41, 18, 30,
                    30, 39, 71, 26, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 72, 8, 3, 11, 4, 71, 26, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 72, 26, 27, 40, 43, 45, 72, 37, 30, 39, 32, 45, 33, 71, 26, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 72, 38, 40, 51, 0, 29, 29, 72, 37, 30, 39, 32, 45, 33, 71, 27, 59, 20, 20, 72, 29, 58, 48, 72, 39, 26, 38, 30, 71, 27, 59, 20, 20, 72, 39, 53, 26, 72, 37, 30, 39, 32, 45, 33, 71, 28, 26, 28, 33, 30, 44, 72, 29, 30, 37, 30, 45, 30, 72, 39, 26, 38, 30, 71, 28, 26, 28, 33, 30, 44, 72, 38, 26, 45, 28, 33, 72, 39, 26, 38, 30, 71, 28, 33, 43, 40, 38, 30, 72, 28, 44, 34, 72, 37, 30, 39, 32, 45, 33,
                    71, 28, 33, 43, 40, 38, 30, 72, 37, 40, 26, 29, 19, 34, 38, 30, 44, 72, 37, 30, 39, 32, 45, 33, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 34, 39, 44, 45, 26, 37, 37, 72, 37, 30, 39, 32, 45, 33, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 40, 39, 3, 40, 48, 39, 37, 40, 26, 29, 15, 43, 40, 32, 43, 30, 44, 44, 72, 26, 29, 29, 11, 34, 44, 45, 30, 39, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 40, 39, 3, 40, 48, 39, 37, 40, 26, 29, 15, 43, 40, 32, 43, 30, 44, 44, 72, 29, 34, 44, 41, 26, 45, 28, 33, 72, 39, 26, 38, 30, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30,
                    27, 44, 45, 40, 43, 30, 72, 40, 39, 3, 40, 48, 39, 37, 40, 26, 29, 15, 43, 40, 32, 43, 30, 44, 44, 72, 32, 30, 45, 17, 46, 37, 30, 44, 72, 37, 30, 39, 32, 45, 33, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 40, 39, 3, 40, 48, 39, 37, 40, 26, 29, 15, 43, 40, 32, 43, 30, 44, 44, 72, 43, 30, 38, 40, 47, 30, 17, 46, 37, 30, 44, 72, 39, 26, 38, 30, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 40, 39, 8, 39, 44, 45, 26, 37, 37, 18, 45, 26, 32, 30, 2, 33, 26, 39, 32, 30, 29, 72, 32, 30, 45, 17, 46, 37, 30, 44, 72, 37, 30, 39, 32, 45, 33, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 40, 39, 8, 39, 44,
                    45, 26, 37, 37, 18, 45, 26, 32, 30, 2, 33, 26, 39, 32, 30, 29, 72, 33, 26, 44, 11, 34, 44, 45, 30, 39, 30, 43, 44, 72, 39, 26, 38, 30, 71, 28, 37, 30, 26, 43, 8, 39, 45, 30, 43, 47, 26, 37, 72, 45, 43, 28, 19, 33, 43, 40, 45, 45, 37, 30, 72, 37, 30, 39, 32, 45, 33, 71, 28, 37, 34, 41, 27, 40, 26, 43, 29, 3, 26, 45, 26, 71, 28, 40, 39, 31, 34, 43, 38, 72, 37, 30, 39, 32, 45, 33, 71, 28, 40, 39, 44, 40, 37, 30, 72, 28, 40, 46, 39, 45, 72, 39, 26, 38, 30, 71, 28, 40, 39, 44, 40, 37, 30, 72, 29, 30, 27, 46, 32, 72, 37, 30, 39, 32, 45, 33, 71, 28, 40, 39, 44, 40, 37, 30, 72, 29, 34, 43, 72, 39, 26, 38, 30, 71, 28, 40, 39, 44, 40, 37, 30, 72, 32, 43, 40, 46, 41, 4, 39,
                    29, 72, 39, 26, 38, 30, 71, 28, 40, 39, 44, 40, 37, 30, 72, 41, 43, 40, 31, 34, 37, 30, 72, 39, 26, 38, 30, 71, 28, 40, 39, 44, 40, 37, 30, 72, 45, 26, 27, 37, 30, 72, 37, 30, 39, 32, 45, 33, 71, 28, 43, 30, 26, 45, 30, 8, 38, 26, 32, 30, 1, 34, 45, 38, 26, 41, 72, 37, 30, 39, 32, 45, 33, 71, 28, 43, 50, 41, 45, 40, 72, 44, 46, 27, 45, 37, 30, 72, 32, 30, 39, 30, 43, 26, 45, 30, 10, 30, 50, 72, 37, 30, 39, 32, 45, 33, 71, 29, 40, 48, 39, 37, 40, 26, 29, 8, 39, 45, 30, 43, 31, 26, 28, 30, 72, 19, 30, 44, 45, 72, 37, 30, 39, 32, 45, 33, 71, 30, 39, 29, 84, 26, 37, 37, 84, 31, 43, 26, 38, 30, 44, 84, 34, 39, 35, 30, 28, 45, 30, 29, 71, 30, 49, 45, 30, 43, 39, 26,
                    37, 72, 8, 44, 18, 30, 26, 43, 28, 33, 15, 43, 40, 47, 34, 29, 30, 43, 8, 39, 44, 45, 26, 37, 37, 30, 29, 72, 64, 26, 44, 50, 39, 28, 27, 34, 39, 29, 72, 4, 26, 32, 30, 43, 19, 33, 30, 39, 26, 27, 37, 30, 72, 43, 30, 44, 40, 37, 47, 30, 71, 30, 49, 45, 30, 43, 39, 26, 37, 72, 8, 44, 18, 30, 26, 43, 28, 33, 15, 43, 40, 47, 34, 29, 30, 43, 8, 39, 44, 45, 26, 37, 37, 30, 29, 72, 29, 30, 31, 30, 43, 72, 28, 43, 30, 26, 45, 30, 3, 30, 37, 30, 32, 26, 45, 30, 72, 39, 26, 38, 30, 71, 30, 49, 45, 30, 43, 39, 26, 37, 72, 8, 44, 18, 30, 26, 43, 28, 33, 15, 43, 40, 47, 34, 29, 30, 43, 8, 39, 44, 45, 26, 37, 37, 30, 29, 72, 37, 30, 39, 32, 45, 33, 71, 30, 49, 45, 30, 43, 39,
                    26, 37, 72, 8, 44, 18, 30, 26, 43, 28, 33, 15, 43, 40, 47, 34, 29, 30, 43, 8, 39, 44, 45, 26, 37, 37, 30, 29, 72, 43, 30, 32, 34, 44, 45, 30, 43, 4, 39, 46, 38, 72, 43, 30, 44, 40, 37, 47, 30, 8, 39, 33, 30, 43, 34, 45, 26, 39, 28, 30, 72, 32, 30, 45, 1, 26, 44, 30, 12, 30, 45, 33, 40, 29, 71, 30, 49, 45, 30, 43, 39, 26, 37, 72, 8, 44, 18, 30, 26, 43, 28, 33, 15, 43, 40, 47, 34, 29, 30, 43, 8, 39, 44, 45, 26, 37, 37, 30, 29, 72, 45, 43, 28, 19, 33, 43, 40, 45, 45, 37, 30, 72, 45, 43, 28, 1, 34, 39, 29, 72, 18, 19, 26, 43, 32, 46, 38, 30, 39, 45, 8, 44, 18, 46, 41, 30, 43, 71, 30, 49, 45, 30, 43, 39, 26, 37, 72, 8, 44, 18, 30, 26, 43, 28, 33, 15, 43, 40, 47, 34, 29,
                    30, 43, 8, 39, 44, 45, 26, 37, 37, 30, 29, 72, 45, 43, 28, 19, 33, 43, 40, 45, 45, 37, 30, 72, 45, 43, 28, 1, 34, 39, 29, 72, 27, 34, 39, 29, 0, 44, 4, 47, 30, 39, 45, 11, 34, 44, 45, 30, 39, 30, 43, 71, 31, 26, 34, 37, 30, 29, 84, 46, 43, 37, 44, 72, 37, 30, 39, 32, 45, 33, 71, 32, 30, 45, 12, 26, 45, 28, 33, 30, 29, 2, 18, 18, 17, 46, 37, 30, 44, 72, 37, 30, 39, 32, 45, 33, 71, 34, 39, 45, 30, 43, 39, 26, 37, 44, 72, 26, 45, 45, 26, 28, 33, 30, 29, 72, 39, 26, 38, 30, 71, 34, 39, 45, 30, 43, 39, 26, 37, 44, 72, 28, 26, 41, 45, 34, 40, 39, 44, 18, 45, 50, 37, 30, 18, 33, 30, 30, 45, 14, 47, 30, 43, 43, 34, 29, 30, 72, 39, 26, 38, 30, 71, 38, 40, 47, 30, 19, 40,
                    72, 37, 30, 39, 32, 45, 33, 71, 38, 40, 51, 17, 19, 2, 15, 30, 30, 43, 2, 40, 39, 39, 30, 28, 45, 34, 40, 39, 72, 32, 30, 39, 30, 43, 26, 45, 30, 2, 30, 43, 45, 34, 31, 34, 28, 26, 45, 30, 72, 37, 30, 39, 32, 45, 33, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 26, 41, 41, 13, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 28, 40, 40, 36, 34, 30, 4, 39, 26, 27, 37, 30, 29, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 28, 43, 30, 29, 30, 39, 45, 34, 26, 37, 44, 72, 43, 30, 42, 46, 34, 43, 30, 20, 44, 30, 43, 12, 30, 29, 34, 26, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 29, 40, 13, 40, 45, 19, 43, 26, 28, 36, 71,
                    39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 32, 30, 40, 37, 40, 28, 26, 45, 34, 40, 39, 72, 28, 37, 30, 26, 43, 22, 26, 45, 28, 33, 72, 37, 30, 39, 32, 45, 33, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 32, 30, 40, 37, 40, 28, 26, 45, 34, 40, 39, 72, 32, 30, 45, 2, 46, 43, 43, 30, 39, 45, 15, 40, 44, 34, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 32, 30, 45, 18, 45, 40, 43, 26, 32, 30, 20, 41, 29, 26, 45, 30, 44, 72, 37, 30, 39, 32, 45, 33, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 32, 30, 45, 20, 44, 30, 43, 12, 30, 29, 34, 26, 72, 39, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 34, 44, 2, 40, 39, 45, 30,
                    39, 45, 7, 26, 39, 29, 37, 30, 43, 17, 30, 32, 34, 44, 45, 30, 43, 30, 29, 72, 39, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 35, 26, 47, 26, 4, 39, 26, 27, 37, 30, 29, 72, 39, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 38, 26, 49, 19, 40, 46, 28, 33, 15, 40, 34, 39, 45, 44, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 38, 40, 51, 0, 41, 41, 44, 72, 28, 33, 30, 28, 36, 8, 39, 44, 45, 26, 37, 37, 30, 29, 72, 39, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 40, 39, 11, 34, 39, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 41, 37, 26, 45, 31, 40, 43, 38, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 41, 43, 30, 44, 30, 39, 45, 26,
                    45, 34, 40, 39, 72, 29, 30, 31, 26, 46, 37, 45, 17, 30, 42, 46, 30, 44, 45, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 43, 30, 42, 46, 30, 44, 45, 12, 30, 29, 34, 26, 10, 30, 50, 18, 50, 44, 45, 30, 38, 0, 28, 28, 30, 44, 44, 72, 39, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 44, 30, 43, 47, 34, 28, 30, 22, 40, 43, 36, 30, 43, 72, 40, 39, 28, 40, 39, 45, 43, 40, 37, 37, 30, 43, 28, 33, 26, 39, 32, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 44, 30, 43, 47, 34, 28, 30, 22, 40, 43, 36, 30, 43, 72, 40, 39, 38, 30, 44, 44, 26, 32, 30, 30, 43, 43, 40, 43, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 44, 30, 43, 47, 34, 28, 30, 22, 40, 43, 36, 30, 43,
                    72, 43, 30, 32, 34, 44, 45, 30, 43, 72, 39, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 44, 45, 40, 43, 26, 32, 30, 72, 41, 30, 43, 44, 34, 44, 45, 72, 39, 26, 38, 30, 71, 40, 31, 31, 44, 28, 43, 30, 30, 39, 1, 46, 31, 31, 30, 43, 34, 39, 32, 71, 40, 39, 26, 31, 45, 30, 43, 41, 43, 34, 39, 45, 71, 40, 39, 26, 39, 34, 38, 26, 45, 34, 40, 39, 34, 45, 30, 43, 26, 45, 34, 40, 39, 71, 40, 39, 26, 41, 41, 34, 39, 44, 45, 26, 37, 37, 30, 29, 71, 40, 39, 26, 46, 45, 40, 28, 40, 38, 41, 37, 30, 45, 30, 30, 43, 43, 40, 43, 71, 40, 39, 37, 40, 26, 29, 30, 39, 29, 71, 40, 39, 38, 40, 51, 31, 46, 37, 37, 44, 28, 43, 30, 30, 39, 28, 33, 26, 39, 32, 30, 71, 40, 39,
                    40, 43, 34, 30, 39, 45, 26, 45, 34, 40, 39, 28, 33, 26, 39, 32, 30, 71, 40, 39, 41, 40, 34, 39, 45, 30, 43, 29, 40, 48, 39, 71, 40, 39, 41, 40, 34, 39, 45, 30, 43, 30, 39, 45, 30, 43, 71, 40, 39, 45, 40, 46, 28, 33, 28, 26, 39, 28, 30, 37, 71, 40, 39, 45, 40, 46, 28, 33, 30, 39, 29, 71, 40, 39, 45, 40, 46, 28, 33, 38, 40, 47, 30, 71, 40, 39, 45, 40, 46, 28, 33, 44, 45, 26, 43, 45, 71, 40, 39, 47, 43, 29, 34, 44, 41, 37, 26, 50, 28, 40, 39, 39, 30, 28, 45, 71, 40, 39, 48, 30, 27, 36, 34, 45, 38, 40, 46, 44, 30, 31, 40, 43, 28, 30, 48, 34, 37, 37, 27, 30, 32, 34, 39, 71, 40, 43, 34, 30, 39, 45, 26, 45, 34, 40, 39, 71, 40, 43, 34, 32, 72, 37, 30, 39, 32, 45, 33,
                    71, 41, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 72, 28, 37, 30, 26, 43, 17, 30, 44, 40, 46, 43, 28, 30, 19, 34, 38, 34, 39, 32, 44, 72, 37, 30, 39, 32, 45, 33, 71, 41, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 72, 39, 26, 47, 34, 32, 26, 45, 34, 40, 39, 72, 45, 50, 41, 30, 71, 41, 30, 43, 44, 40, 39, 26, 37, 27, 26, 43, 72, 47, 34, 44, 34, 27, 37, 30, 71, 41, 43, 40, 38, 41, 45, 72, 39, 26, 38, 30, 71, 41, 46, 31, 31, 34, 39, 3, 30, 47, 34, 28, 30, 72, 28, 37, 34, 30, 39, 45, 8, 39, 31, 40, 72, 46, 44, 34, 39, 32, 22, 34, 5, 34, 71, 41, 46, 31, 31, 34, 39, 3, 30, 47, 34, 28, 30, 72, 34, 38, 41, 40, 43, 45, 1, 40, 40, 36, 38, 26, 43, 36, 44, 72, 37, 30, 39, 32, 45,
                    33, 71, 42, 55, 47, 44, 42, 9, 26, 61, 0, 41, 44, 49, 34, 72, 48, 30, 27, 32, 37, 72, 10, 8, 24, 60, 51, 17, 50, 49, 35, 19, 33, 17, 23, 9, 72, 39, 26, 38, 30, 71, 43, 30, 37, 30, 26, 44, 30, 4, 47, 30, 39, 45, 44, 72, 39, 26, 38, 30, 71, 44, 28, 43, 40, 37, 37, 72, 39, 26, 38, 30, 71, 44, 28, 43, 40, 37, 37, 1, 50, 72, 37, 30, 39, 32, 45, 33, 71, 44, 28, 43, 40, 37, 37, 19, 40, 72, 37, 30, 39, 32, 45, 33, 71, 44, 30, 45, 8, 39, 45, 30, 43, 47, 26, 37, 72, 39, 26, 38, 30, 71, 44, 30, 45, 19, 34, 38, 30, 40, 46, 45, 72, 37, 30, 39, 32, 45, 33, 71, 44, 34, 51, 30, 19, 40, 2, 40, 39, 45, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 44, 41, 30, 30, 28, 33, 18, 50, 39,
                    45, 33, 30, 44, 34, 44, 72, 32, 30, 45, 21, 40, 34, 28, 30, 44, 72, 39, 26, 38, 30, 71, 44, 41, 30, 30, 28, 33, 18, 50, 39, 45, 33, 30, 44, 34, 44, 72, 40, 39, 47, 40, 34, 28, 30, 44, 28, 33, 26, 39, 32, 30, 29, 71, 44, 41, 30, 30, 28, 33, 18, 50, 39, 45, 33, 30, 44, 34, 44, 72, 41, 30, 39, 29, 34, 39, 32, 71, 44, 45, 26, 45, 46, 44, 27, 26, 43, 72, 47, 34, 44, 34, 27, 37, 30, 71, 47, 34, 44, 46, 26, 37, 21, 34, 30, 48, 41, 40, 43, 45, 72, 40, 39, 43, 30, 44, 34, 51, 30, 71, 48, 30, 27, 55, 72, 47, 30, 43, 44, 34, 40, 39, 72, 48, 33, 34, 44, 41, 30, 43, 71, 48, 30, 27, 36, 34, 45, 0, 46, 29, 34, 40, 15, 26, 39, 39, 30, 43, 13, 40, 29, 30, 72, 18, 14, 20, 13, 3,
                    5, 8, 4, 11, 3, 71, 48, 30, 27, 36, 34, 45, 8, 3, 1, 2, 46, 43, 44, 40, 43, 72, 37, 30, 39, 32, 45, 33, 71, 48, 30, 27, 36, 34, 45, 8, 3, 1, 5, 26, 28, 45, 40, 43, 50, 72, 37, 30, 39, 32, 45, 33, 71, 48, 30, 27, 36, 34, 45, 8, 39, 29, 30, 49, 30, 29, 3, 1, 71, 48, 30, 27, 36, 34, 45, 17, 19, 2, 15, 30, 30, 43, 2, 40, 39, 39, 30, 28, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 48, 30, 27, 36, 34, 45, 17, 30, 42, 46, 30, 44, 45, 5, 34, 37, 30, 18, 50, 44, 45, 30, 38, 72, 37, 30, 39, 32, 45, 33, 71, 48, 30, 27, 36, 34, 45, 17, 30, 44, 40, 37, 47, 30, 11, 40, 28, 26, 37, 5, 34, 37, 30, 18, 50, 44, 45, 30, 38, 20, 17, 11, 72, 39, 26, 38, 30, 71, 48, 30, 27, 36, 34, 45, 18, 41,
                    30, 30, 28, 33, 6, 43, 26, 38, 38, 26, 43, 72, 37, 30, 39, 32, 45, 33, 71, 50, 26, 39, 29, 30, 49, 72, 41, 46, 27, 37, 34, 28, 5, 30, 26, 45, 46, 43, 30, 72, 32, 30, 45, 8, 38, 26, 32, 30, 14, 43, 34, 32, 34, 39, 26, 37, 18, 34, 51, 30, 72, 37, 30, 39, 32, 45, 33
                ],
                f = a.g.a([46, 39, 29, 30, 31, 34, 39, 30, 29]),
                l = a.g.a([77]),
                k = a.g.a([72]),
                c;
            a.t.a = function() {
                if (void 0 !== c) return a.b.e(c);
                c = {};
                var b = a.c.d;
                try {
                    var d = b.document,
                        g = d.body,
                        f = b.innerWidth || d.documentElement.clientWidth || g.clientWidth,
                        l = b.innerHeight || d.documentElement.clientHeight || g.clientHeight,
                        k = b.outerWidth ||
                        g.offsetWidth,
                        u = b.outerHeight || g.offsetHeight
                } catch (m) {}
                try {
                    var w = b.screenX || b.screenLeft || b.screenX,
                        z = b.screenY || b.screenTop || b.screenY
                } catch (m) {}
                var d = (new v).getTimezoneOffset(),
                    g = a.g.a([84, 41, 33, 26, 39, 45, 40, 38]),
                    r = a.g.a([28, 26, 37, 37, 15, 33, 26, 39, 45, 40, 38]),
                    b = !0 === ("undefined" != typeof b[g] || "undefined" != typeof b[r]) ? 1 : 0;
                a.b.g() || a.c.aj().isInApp || (c.ud = a.g.b);
                var g = c,
                    p;
                try {
                    for (var y = [a.g.a([47, 30, 39, 29, 40, 43]), a.g.a([41, 37, 26, 45, 31, 40, 43, 38]), a.g.a([46, 44, 30, 43, 0, 32, 30, 39, 45])], r = {}, n = 0; n < y.length; n++) r[y[n]] =
                        window.navigator[y[n]];
                    p = a.g.i(a.g.j(r))
                } catch (m) {
                    p = ""
                }
                g.qn = p;
                c.qp = a.g.l.join("");
                p = c;
                if (document && document.body) {
                    y = document.createElement(a.g.a([34, 31, 43, 26, 38, 30]));
                    y.width = a.g.a([53, 41, 49]);
                    y.height = a.g.a([53, 41, 49]);
                    y.style.left = "-" + a.g.a([61, 61, 61, 61, 41, 49]);
                    y.style.top = "-" + a.g.a([61, 61, 61, 61, 41, 49]);
                    y.style.position = a.g.a([26, 27, 44, 40, 37, 46, 45, 30]);
                    document.body.appendChild(y);
                    for (var g = a.g.a(e).split(a.g.a([71])), r = g.length, t = [], n = 0; n < r; n++) t.push(h(g[n], y.contentWindow));
                    document.body.removeChild(y);
                    y = a.g.a(t)
                } else y = "";
                p.is = y;
                c.iv = 6;
                c.qt = b;
                c.gz = a.c.am() ? 1 : 0;
                c.hh = a.c.an() ? 1 : 0;
                c.hn = a.c.ao() ? 1 : 0;
                var b = c,
                    A;
                try {
                    A = !a.d.d(window.top) && window.top.name ? a.g.i(window.top.name.substring(0, 50 > window.top.name.length ? window.top.name.length : 50)) : ""
                } catch (m) {
                    A = ""
                }
                b.tw = A;
                c.qc = w;
                c.qd = z;
                c.qf = f;
                c.qe = l;
                c.qh = k;
                c.qg = u;
                c.qm = d;
                c.qa = a.c.t;
                c.qb = a.c.u;
                c.qi = a.c.r;
                c.qj = a.c.s;
                return a.b.e(c)
            }
        })(n);
        (function(a) {
            function h(b) {
                var c = a.g.r(!0);
                b = "https://geo.moatads.com/n.js?" + a.a.a(35, b, c, !1, !0).res.querystring;
                var c = a.g.af,
                    d = document.createElement("script");
                b += "&callback=" + a.c.ar + "." + c;
                a.b.bn(b, document.body || document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0], d);
                a.g.ae.push(d)
            }
            a.g.m = 1;
            a.g.n = !1;
            a.g.o = {};
            a.g.p = [];
            a.g.q = {};
            a.g.q.a = "appendSpecifics";
            a.g.q.b = "appendManual";
            a.g.q.c = "onlyHooman";
            a.g.q.d = "onlyBot";
            a.g.q.e = "onlyNonHiddenAd";
            var e = {};
            (function() {
                a.c.eu() && a.k.e(function() {
                        try {
                            a.c.d.navigator.getBattery().then(function(a) {
                                e.charging = a.charging;
                                e.level = a.level
                            })["catch"](function(a) {})
                        } catch (b) {}
                    },
                    1E3)
            })();
            a.g.r = function(b) {
                var c = a.t.a();
                if (void 0 === b || !1 === b) c.ql = a.g.s, c.qo = a.g.t;
                c.qr = a.g.u();
                e && "undefined" !== typeof e.charging && a.b.bz(e.level) && (c.vf = e.charging ? 1 : 0, c.vg = 100 * e.level);
                return c
            };
            var f = a.g.a([48, 30, 27, 29, 43, 34, 47, 30, 43]),
                l = a.g.a([30, 47, 26, 37, 46, 26, 45, 30]),
                k = a.g.a([43, 30, 44, 41, 40, 39, 44, 30]),
                c = [f, l].join("-"),
                b = [c, k].join("-");
            try {
                a.g.s = a.g.i(a.g.j(a.c.d.navigator.plugins, "name"))
            } catch (q) {}
            a.g.u = function() {
                return 0
            };
            a.g.t = 0;
            a.g.v = function() {};
            var d = "nu ib dc ob oh lt ab n nm sp pt".split(" ");
            a.g.w = function(b, c, e) {
                if ((a.g.q.a in c || a.g.q.b in c) && void 0 === a.g.x) return !1;
                var g = a.b.e(a.g.x);
                void 0 === g.n && a.u.a(e) && (g.n = 1);
                a.g.q.a in c ? a.b.forEach(d, function(a, c) {
                    b = a in g ? b + ("&" + a + "=1") : b + ("&" + a + "=0")
                }) : a.g.q.b in c && a.b.forEach(d, function(c, d) {
                    a.b.ad(a.g.q.b, c) && (b = c in g ? b + ("&" + c + "=1") : b + ("&" + c + "=0"))
                });
                if (a.g.q.c in c && a.g.q.e in c) return a.g.y(e) ? ((new a.c.d.Image).src = b, !0) : !1;
                if (a.g.q.c in c) return 0 == a.g.z ? ((new a.c.d.Image).src = b, !0) : !1;
                if (a.g.q.d in c) return 1 == a.g.z ? ((new a.c.d.Image).src =
                    b, !0) : !1;
                (new a.c.d.Image).src = b;
                return !0
            };
            a.g.aa = function(b, c) {
                b(a.g.z)
            };
            a.g.ab = function(a, b, c) {
                g.add(a, b, c)
            };
            a.g.ac = function(b, c) {
                if (void 0 === a.g.z) return a.g.p.push({
                    callback: b,
                    opts: c
                });
                a.g.aa(b, c)
            };
            a.g.ad = function() {
                for (var b = 0; b < a.g.p.length; b++)
                    if (a.g.p.hasOwnProperty(b)) {
                        var c = a.g.p[b];
                        a.g.aa(c.callback, c.opts)
                    }
            };
            a.g.ae = [];
            a.g.ag = function(b) {
                if (p) {
                    a.g.af = "gna" + m.floor(1E6 * m.random());
                    var c;
                    p[a.g.af] = function(b) {
                        a.g.ah = new v - a.g.ai;
                        c = b;
                        p[a.g.af] = null;
                        delete p[a.g.af];
                        c && (a.g.x = c, p.jsonpcache =
                            c, a.g.z = "n" in a.g.x ? 1 : 0, g.checkPixels(), a.g.ad())
                    };
                    a.g.ai = new v;
                    a.k.f(function() {
                        a.g.aj = new v - a.g.ai
                    }, 0);
                    if (p.jsonpcache) p[a.g.af](p.jsonpcache);
                    else h(b)
                } else a.k.f(setupNadoListener, 200)
            };
            a.g.ak = function(b, c) {
                void 0 === a.g.o[b] && (a.g.o[b] = 1 / a.g.m < m.random());
                if (a.g.o[b]) return !1;
                var d = a.g.r();
                a.v && a.v.a && a.v.a.imaSDK ? b.moatClientLevel3 && a.a.a(34, b, d, !1, !0) : a.a.a(34, b, d, !1, !0);
                return !0
            };
            a.g.al = function() {
                return [a.g.a([30, 39, 28, 40, 29, 30, 20, 17, 8]), a.g.a([29, 30, 28, 40, 29, 30, 20, 17, 8]), a.g.a([30, 39, 28,
                    40, 29, 30, 20, 17, 8, 2, 40, 38, 41, 40, 39, 30, 39, 45
                ]), a.g.a([29, 30, 28, 40, 29, 30, 20, 17, 8, 2, 40, 38, 41, 40, 39, 30, 39, 45])]
            };
            a.g.am = function(d) {
                if (!0 !== a.g.an && (a.g.an = !0, a.g.ak(d))) {
                    var e = function() {
                            var b = {};
                            b.qr = a.g.u();
                            b.qo = a.g.t;
                            a.a.a(36, d, b)
                        },
                        g = a.c.d.document;
                    a.k.c(g, c, function(b) {
                        a.k.d(g, c, null, "mswe");
                        a.g.u = function() {
                            return 1
                        };
                        e()
                    }, "mswe");
                    a.k.c(g, b, function(c) {
                        a.k.d(g, b, null, "mswer");
                        a.g.u = function() {
                            return 1
                        };
                        e()
                    }, "mswer")
                }
            };
            a.g.ao = function() {
                if (a.g.ae) {
                    for (var b = 0, c = a.g.ae.length; b < c; b++) try {
                        a.g.ae[b].parentNode &&
                            a.g.ae[b].parentNode.removeChild(a.g.ae[b])
                    } catch (d) {}
                    a.g.ae = null
                }
            };
            a.g.ap = function() {
                var d = a.c.d.document;
                a.k.d(d, c, null, "mswe");
                a.k.d(d, b, null, "mswer");
                a.g.ao()
            };
            a.g.y = function(b) {
                return 0 == a.g.z && !1 === a.u.a(b)
            };
            a.g.aq = function() {
                var a;
                a = m && m.sinh ? 1E10 * (m.sinh(m.sinh(m.sinh(m.sinh(1)))) - 3.81278003) : -2;
                a = a.toString();
                return 0 === a.indexOf("7.600") ? a.substring(5) : -1
            };
            var g = function() {
                function b(a, c, d) {
                    this.pixel = a;
                    this.opts = c;
                    this.adNum = d
                }

                function c() {
                    a.b.forEach(d, function(b, c) {
                        a.g.w(b.pixel, b.opts,
                            b.adNum) && delete d[c]
                    })
                }
                var d = {};
                a.i.a.azsx("hiddenAds:updated", c);
                return {
                    add: function(e, g, f) {
                        e = new b(e, g, f);
                        g = a.b.cf();
                        d[g] = e;
                        c()
                    },
                    checkPixels: c
                }
            }();
            a.i.a.azsx("allLocalAdsKilled", a.g.ap, {
                once: !0
            })
        })(n);
        (function(a) {
            function h(b) {
                b.functionInProgress = !1;
                return 0 < b.pendingFunctions.length ? (b = b.pendingFunctions.shift(), a.w.call(b.args, b.callback), !0) : !1
            }

            function e() {
                try {
                    a = window.__b, (0, window.__w)("INNER_FUNCTION"), window.__w = void 0, window.__b = void 0
                } catch (c) {
                    var b = c.name + " in closure (moat.customIframe): " +
                        c.message + ", stack=" + c.stack;
                    try {
                        var d = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("NEWSCOM_PREBID_HEADER1") + "&ac=1&k=" + escape(b) + "&ar=" + escape("3595e181146-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new v).getTime();
                        (new Image(1, 1)).src = d
                    } catch (e) {}
                }
            }

            function f(b) {
                if (!b) return !1;
                var c = b.iframe,
                    g = b.innerFunctionCbName;
                c.contentWindow.document.write(b.innerHTML);
                c.contentWindow.__b = b.Moat;
                c.contentWindow.__w = b.wrapper;
                c.contentWindow[e.toString().match(/function (\w+)\(\)/)[1]]();
                g && a.c.at[g] && (a.c.at[g] = null);
                h(b.frameData) || (g = b.setIframeDomain, c && (b.preserveDom ? g ? c.src = "javascript:document.close();" : c.contentWindow.document.close() : g ? c.src = "javascript:document.open(); document.close();" : (c.contentWindow.document.open(), c.contentWindow.document.close())))
            }

            function l(a, c) {
                c = c || {
                    width: "1px",
                    height: "1px",
                    style: {
                        left: "-9999px",
                        top: "-9999px",
                        position: "absolute"
                    }
                };
                for (var e in c)
                    if (c.hasOwnProperty(e))
                        if ("style" === e)
                            if ("string" === typeof c[e]) a.setAttribute(e, c[e]);
                            else
                                for (var f in c[e]) c[e].hasOwnProperty(f) &&
                                    (a[e][f] = c[e][f]);
                else a[e] = c[e]
            }

            function k(a) {
                if ("string" !== typeof a) return "";
                var c = a.charAt(0);
                "'" !== c && '"' !== c && (a = "'" + a + "'");
                return a
            }

            function c(a, c) {
                var g = "<html><head></head><body><script>" + e.toString().replace('"INNER_FUNCTION"', a) + "\x3c/script>";
                c || (g += "<script>setTimeout(function() { document.close(); }, 1);\x3c/script>");
                return g + "</body></html>"
            }
            a.w = {};
            a.w.a = function(b, c, e, f) {
                if (!b) return !1;
                try {
                    var k = document.createElement("iframe"),
                        m = c || a.b.cf();
                    if (!k) return !1;
                    l(k, f);
                    e ? (e = a.b.bm(e), a.b.bl(k,
                        e)) : (e = a.c.d.document.body, e.insertBefore(k, e.insertBefore[0] || null));
                    c = {
                        id: m,
                        iframe: k,
                        functionInProgress: !1,
                        pendingFunctions: [],
                        parent: e
                    };
                    b.customIframes || (b.customIframes = {});
                    b.customIframes[m] = c;
                    h(c);
                    a.i.a.azsx("adKilled", function() {
                        var c = b.customIframes,
                            d;
                        for (d in c) c.hasOwnProperty(d) && a.w.b(b, c[d].id)
                    }, {
                        condition: function(a) {
                            return b.zr == a.zr
                        },
                        once: !0
                    });
                    return m
                } catch (n) {}
                return !1
            };
            a.w.b = function(a, c, e) {
                var f = a.customIframes[c];
                e = f && f.iframe;
                if (!f || !e) return !1;
                f = f.parent;
                if (!f) return !1;
                try {
                    f.removeChild(e)
                } catch (h) {}
                a.customIframes[c] =
                    null;
                delete a.customIframes[c];
                return !0
            };
            a.w.call = function(b, e, g, h, l, n) {
                if (!b || "undefined" === typeof e) return !1;
                b = b && b.customIframes && b.customIframes[e];
                if (!b || !g) return !1;
                h = h && "string" !== typeof h ? h.toString() : k(h);
                g && "string" !== typeof g && (g = a.b.ck(g, h));
                l && "function" === typeof l || (l = function() {});
                if (b.functionInProgress) return b.pendingFunctions.push({
                    args: h,
                    innerFunction: g,
                    callback: l
                }), !1;
                h = b.iframe;
                b.functionInProgress = !0;
                e = c(g, n);
                g = !1;
                try {
                    if (!b.iframe.contentDocument) throw Error();
                } catch (w) {
                    g = !0
                }
                n =
                    a.k.l(a.b.cc([{
                        iframe: h,
                        innerHTML: e,
                        frameData: b,
                        Moat: a,
                        wrapper: function(a) {
                            l(a)
                        },
                        innerFunctionCbName: p,
                        setIframeDomain: g,
                        preserveDom: n
                    }], f));
                if (g) {
                    var p;
                    do p = "Moat#iqcb" + m.floor(1E4 * m.random()); while (a.c.at[p]);
                    a.c.d[a.c.au][p] = n;
                    h.src = 'javascript:document.open(); document.domain="' + document.domain + '"; window.parent["' + a.c.au + '"]["' + p + '"]();'
                } else n()
            }
        })(n);
        (function(a) {
            a.x = {};
            a.x.a = m.floor(1E8 * m.random());
            a.x.b = function(h, e, f) {
                if (p && (e && (e += "_" + a.x.a), !p.jsonp || !p.jsonp[h])) {
                    p.jsonp = p.jsonp || {};
                    p.jsonp[h] = p.jsonp[h] || {
                        cachedResponse: !1
                    };
                    var l = p.xb || window,
                        k = l.document;
                    l[e] = function(a) {
                        p.jsonp[h].cachedResponse = a;
                        p.swde.zaxs(h + "JsonpReady", a);
                        l[e] = null
                    };
                    var c = k.createElement("script"),
                        k = k.body || k.getElementsByTagName("head")[0] || k.getElementsByTagName("script")[0];
                    a.b.bn(f + "&callback=" + e, k, c)
                }
            };
            a.x.c = function(h, e) {
                p.jsonp && p.jsonp[h] && p.jsonp[h].cachedResponse ? a.b.cc([p.jsonp[h].cachedResponse], e)() : p.swde.azsx(h + "JsonpReady", e, {
                    once: !0
                })
            }
        })(n);
        (function(a) {
            a.y = {};
            var h = (googletag = window.googletag || {}, googletag.apiReady) && googletag.pubads() || !1;
            googletag.apiReady && h || (googletag.cmd = googletag.cmd || [], googletag.cmd.push(function() {
                h = googletag && googletag.apiReady && googletag.pubads()
            }));
            a.y.a = function(e) {
                if (h) e();
                else if (googletag && googletag.apiReady && googletag.pubads()) h = googletag.pubads(), e();
                else {
                    googletag = window.googletag || {};
                    googletag.cmd = googletag.cmd || [];
                    var f = a.k.l(e);
                    googletag.cmd.push(function() {
                        (h = googletag && googletag.apiReady && googletag.pubads()) && f()
                    })
                }
            };
            a.y.b = function() {
                return "function" !==
                    typeof h.getSlots ? !1 : h.getSlots()
            };
            a.y.c = function(a) {
                return h.getTargeting(a)
            };
            a.y.d = function() {
                if ("function" !== typeof h.getTargetingKeys || "function" !== typeof h.getTargeting) return !1;
                var e = h.getTargetingKeys(),
                    f = {};
                a.b.forEach(e, function(a) {
                    f[a] = h.getTargeting(a)
                });
                return f
            };
            a.y.e = function(a, f) {
                if ("function" !== typeof h.setTargeting) return !1;
                h.setTargeting(a, f);
                return !0
            };
            a.y.f = function(a) {
                if ("function" !== typeof h.clearTargeting) return !1;
                h.clearTargeting(a)
            };
            a.y.g = function(a, f) {
                return a && "function" ===
                    typeof a.getTargeting && f ? a.getTargeting(f) : !1
            };
            a.y.h = function(a, f, h) {
                if (!(a && f && h && "function" === typeof a.setTargeting)) return !1;
                a.setTargeting(f, h)
            };
            a.y.i = function(a, f) {
                if (!a || "function" !== typeof a.clearTargeting) return !1;
                a.clearTargeting(f)
            };
            a.y.j = function(a) {
                if (!a) return !1;
                for (var f = "function" === typeof a.getSlotElementId && a.getSlotElementId(), h = f && document.getElementById(f), k = "function" === typeof a.getAdUnitPath && a.getAdUnitPath(), c = "function" === typeof a.getTargetingKeys && "function" === typeof a.getTargeting &&
                        a.getTargetingKeys(), b = {}, d = 0; d < c.length; d++) b[c[d]] = a.getTargeting(c[d]);
                return {
                    id: f,
                    element: h,
                    adUnitPath: k,
                    targetingKeys: c,
                    targetingKeyValues: b
                }
            };
            a.y.k = function(e, f) {
                if (e && f && h && "function" === typeof h.addEventListener) {
                    var l = a.k.l(f);
                    h.addEventListener(e, l)
                }
            }
        })(n);
        (function(a) {
            function h() {
                if (!t && n !== d.LOADING) {
                    t = !0;
                    a.z.a.allData = (new v).getTime();
                    var b = window.moatYieldReady;
                    "function" === typeof b && a.k.l(b)()
                }
            }

            function e(b) {
                var c;
                c = f(b) ? q.c : q.b;
                a.y.a(function() {
                    a.y.e(g.d, c);
                    a.y.e(g.e, c)
                })
            }

            function f(a) {
                return "object" ===
                    typeof a && !1 !== a._pbd
            }

            function l() {
                function b(a) {
                    h && console.log(">>>MOAT YIELD INTELLIGENCE/" + a)
                }

                function c(b) {
                    return a.b.bk(function(b) {
                        return (b = a.y.g(slot, b)) && b.length && 1 <= b.length ? b[0] : ""
                    }, b).join("|")
                }

                function d(h) {
                    var l, k, r;
                    if (!n) return b("setMoatTargetingForSlot: No data mapping available, not setting targeting."), a.y.h(h, g.d, q.d), a.y.h(h, g.e, q.d), !1;
                    if (!f(n)) return b("setMoatTargetingForSlot: No data mapping available, not setting targeting."), a.y.h(h, g.d, q.e), a.y.h(h, g.e, q.e), !1;
                    if (!h || "function" !==
                        typeof h.getSlotElementId) return b("setMoatTargetingForSlot: Slot is missing, not setting targeting."), !1;
                    l = h.getSlotElementId();
                    if (a.b.b("MoatSlotId")) r = c("MoatSlotId");
                    else {
                        k = a.y.g(h, "MoatSlotId");
                        if (!k) return b("setMoatTargetingForSlot: slotId " + l + "; Failed to get MoatSlotId targeting array, not setting targeting."), !1;
                        r = k[0];
                        if ("undefined" === typeof r) return b("setMoatTargetingForSlot: slotId " + l + "; No targeting data set for MoatSlotId, not setting targeting."), !1
                    }
                    k = n[r] && n[r][e];
                    if (!k) return b("setMoatTargetingForSlot: slotId " +
                        l + "; No historical data found for MoatSlotId of " + r + ", not setting targeting."), a.y.h(h, g.d, q.f), a.y.h(h, g.e, q.f), !1;
                    for (var m in k)
                        if (a.b.bw(k, m)) {
                            var p = k[m];
                            if (a.b.bz(p)) {
                                b("setMoatTargetingForSlot: slotId " + l + "; Setting " + m + " value of " + p + ".");
                                r = parseInt(p);
                                p = p.toString();
                                if ("number" === typeof r && 0 === r % 10 && 10 < r && 100 >= r)
                                    for (p = [p], r = r / 10 - 1; 0 < r; r--) p.push((10 * r).toString());
                                a.y.h(h, m, p)
                            }
                        }
                }
                var e, h = !1,
                    l, k, m, n;
                e = a.c.co ? "Mobile" : "Desktop";
                this.slotDataAvailable = function() {
                    return f(n) ? !!n : !1
                };
                this.pageDataAvailable =
                    function() {
                        return !1
                    };
                this.safetyDataAvailable = function() {
                    return !1
                };
                this.enableLogging = function() {
                    return h = !0
                };
                this.disableLogging = function() {
                    h = !1;
                    return !0
                };
                this.setMoatTargetingForSlot = function(b) {
                    b = a.b.cc([b], d);
                    a.y.a(b)
                };
                this.setMoatTargetingForAllSlots = function() {
                    a.y.a(function() {
                        var c = a.y.b();
                        if (!c) return b("setMoatTargetingForAllSlots: Failed to get slots from GPT, not setting targeting."), !1;
                        a.b.forEach(c, function(a) {
                            d(a)
                        }, this)
                    })
                };
                this.getMoatTargetingForSlot = function(d) {
                    var f, g;
                    switch (typeof d) {
                        case "string":
                            var h =
                                a.y.b();
                            if (!a.b.b(h)) {
                                b("getMoatTargetingForSlot: No valid slot identifier provided, exiting.");
                                return
                            }
                            a.b.forEach(h, function(a) {
                                if ("function" === typeof a.getSlotElementId && a.getSlotElementId() === d) return g = a, !1
                            });
                            break;
                        case "object":
                            if ("function" !== typeof d.getSlotElementId) {
                                b("getMoatTargetingForSlot: No valid slot identifier provided, exiting.");
                                return
                            }
                            g = d;
                            g.getSlotElementId();
                            break;
                        default:
                            b("getMoatTargetingForSlot: No valid slot identifier provided, exiting.");
                            return
                    }
                    if ("object" === typeof g &&
                        "function" === typeof g.getTargeting) {
                        var k = "MoatSlotId";
                        a.b.b(k) ? f = c(k) : "string" === typeof k && (h = a.y.g(g, k)) && h.length && 1 <= h.length && (f = h[0])
                    } else b("getMoatTargetingForSlot: Failed to get slot targeting, GPT slot object is invalid.");
                    "string" !== typeof f && (f = "");
                    f = n && n[f] && n[f][e] || {};
                    f[k.b] = _safetyTargeting;
                    f[k.c] = _categoryTargeting;
                    f[k.a] = _ivtTargeting;
                    return f
                };
                this.getMoatTargetingForPage = function() {
                    var a = {};
                    a[g.b] = l;
                    a[g.c] = k;
                    a[g.a] = m;
                    return a
                };
                this.__A = function(a, b) {
                    l = a;
                    k = b
                };
                this.__B = function(a) {
                    m =
                        a
                };
                this.__C = function(a) {
                    n = a
                }
            }
            a.z = {};
            var k = m.floor(m.random() * m.pow(10, 12)),
                c = a.b.w(),
                b = a.b.u();
            a.z.a = {
                wrapper: window.moatHeaderInitTime || a.c.ay,
                apiReady: null,
                nadoData: null,
                allData: null
            };
            a.z.b = {
                rendered: 0,
                slotTargetingLoaded: 0,
                slotTargetingSet: 0,
                pageDataTargetingSet: 0,
                safetyTargetingSet: 0,
                emptySlot: 0
            };
            var d = {
                    LOADING: "0",
                    LOADED: "1"
                },
                g = {
                    a: "m_data",
                    b: "m_safety",
                    c: "m_categories",
                    d: "m_mv",
                    e: "m_gv"
                },
                q = a.c.ey,
                n = d.LOADING,
                t = !1;
            a.z.c = function() {
                function b(c) {
                    if (!c || !a.b.b(c)) return c;
                    var d = "gv_adult gv_arms gv_crime gv_death_injury gv_download gv_drugs gv_hatespeech gv_military gv_obscenity gv_terrorism gv_tobacco moat_safe moat_unsafe moat_sensitive".split(" ");
                    return a.b.filter(c, function(a) {
                        return a && -1 !== d.indexOf(a)
                    })
                }
                var c = new l;
                window.moatPrebidApi = c;
                h();
                a.z.d(0);
                a.z.a.apiReady = (new v).getTime();
                a.x.c("nado-all", function(f) {
                    var k, l, m;
                    if ("object" !== typeof f) return !1;
                    m = "0";
                    f && "n" in f && (m = "1");
                    a.y.a(function() {
                        a.y.e(g.a, m)
                    });
                    c.pageDataAvailable = function() {
                        return !0
                    };
                    c.__B(m);
                    if (a.b.bz(f.d)) {
                        var p = f.d + 2;
                        a.b.ad([2, 3, 4], p) ? k = "unsafe" : 6 === p ? k = "sensitive" : a.b.ad([0, 1, 5, 7, 8, 9], p) && (k = "safe")
                    }
                    f.c && a.b.b(f.c) && (l = f.c);
                    k && a.y.a(function() {
                        a.y.e(g.b, k)
                    });
                    l && (l =
                        b(l), a.y.a(function() {
                            a.y.e(g.c, l)
                        }));
                    c.safetyDataAvailable = function() {
                        return !0
                    };
                    c.__A(k, l);
                    f = f.yi;
                    e(f);
                    c.__C(f);
                    a.z.a.nadoData = (new v).getTime();
                    n = d.LOADED;
                    h();
                    a.z.d(44)
                })
            };
            a.z.e = function() {
                var b = a.b.cc(["slotRenderEnded", function(b) {
                    if ("undefined" !== typeof b && "undefined" !== typeof b.slot) {
                        var c = window.moatPrebidApi,
                            d = b.slot;
                        if (!c) return !1;
                        var e = {
                            slotTargetingLoaded: !1,
                            slotTargetingSet: !1,
                            pageDataTargetingSet: !1,
                            safetyTargetingSet: !1,
                            emptySlot: !1
                        };
                        e.slotTargetingLoaded = c.slotDataAvailable();
                        "undefined" !==
                        typeof a.y.g(d, g.d)[0] && (e.slotTargetingSet = !0);
                        b.isEmpty && (e.emptySlot = !0);
                        "undefined" !== typeof a.y.c(g.a)[0] && (e.pageDataTargetingSet = !0);
                        "undefined" !== typeof a.y.c(g.b)[0] && (e.safetyTargetingSet = !0);
                        a.z.b.rendered++;
                        a.b.forEach(e, function(b, c) {
                            !0 === b && a.z.b[c]++
                        });
                        a.z.d(43, d, e)
                    }
                }], a.y.k);
                a.y.a(b)
            };
            a.z.d = function(d, e, f) {
                f = {};
                f.e = d;
                f.t = a.c.ay;
                f.de = k;
                f.d = "NEWSCOM_PREBID_HEADER1:" + (a.c.co ? "Mobile" : "Desktop") + ":-:-";
                f.i = "YIELD_INTELLIGENCE_INTERNAL1";
                f.ar = "3595e181146-clean";
                43 === d && "undefined" !==
                    typeof e && (d = e.getSlotElementId(), f.zMoatDfpSlotId = d || "-");
                f.zMoatRendered = a.z.b.rendered;
                f.zMoatSlotTargetingLoaded = a.z.b.slotTargetingLoaded;
                f.zMoatSlotTargetingSet = a.z.b.slotTargetingSet;
                f.zMoatPageDataTargetingSet = a.z.b.pageDataTargetingSet;
                f.zMoatSafetyTargetingSet = a.z.b.safetyTargetingSet;
                f.zMoatEmptySlot = a.z.b.emptySlot;
                e = a.z.a.wrapper;
                var g = a.z.a.nadoData;
                d = a.z.a.allData;
                f.zMoatNadoDataLoadTime = g && g - e || "Not Loaded";
                f.zMoatAllDataLoadTime = d && d - e || "Not Loaded";
                f.bo = c;
                f.bd = b;
                f.ac = 1;
                f.bq = a.c.as;
                f.f = Number(!E);
                (g = window.moatPrebidApi) && "function" === typeof g.slotDataAvailable && (f.zn = g.slotDataAvailable() ? 1 : 0, g = a.c.ay && a.c.ay - e, e = d && d - e, d = d && d - a.c.ay, a.b.bz(g) && (f.zMoat_YI1 = g), a.b.bz(e) && (f.zMoat_YI2 = e), a.b.bz(d) && (f.zMoat_YI3 = d), f.zMoat_YIL0T = "NEWSCOM_PREBID_HEADER1");
                d = a.b.bt(f, !0);
                d += "&na=" + a.b.bu(d, f.i);
                p.yh.yi(d + "&cs=0", "https://px.moatads.com", null, !0)
            };
            (function() {
                a.y.a(function() {
                    a.b.forEach(g, function(b, c) {
                        a.y.e(b, q.a)
                    })
                })
            })();
            var u = a.g.r(!0);
            u.tw = a.c.ez && a.g.ar(a.c.ez) || null;
            u.url = a.b.t();
            u.confidence = a.b.v();
            u.pcode = "newscomprebidheader135900089283";
            u = a.b.bt(u, !0);
            a.x.b("nado-all", "MoatNadoAllJsonpRequest", "https://mb.moatads.com/yi.js?" + u)
        })(n);
        n.r.a(n.c.d);
        n.g.am({});
        n.z.d(17);
        n.z.c();
        n.z.e()
    })(Date, Math)
} catch (v) {
    var ct = (new Date).getTime();
    window["Moat#ETS"] || (window["Moat#ETS"] = ct);
    window["Moat#EMC"] || (window["Moat#EMC"] = 0);
    var et = ct - window["Moat#ETS"],
        hourElapsed = 36E5 <= et,
        msg = v.name + " in closure (global): " + v.message + ", stack=" + v.stack;
    if (!hourElapsed && 10 > window["Moat#EMC"]) {
        window["Moat#EMC"]++;
        try {
            var pixelDomain = "px.moatads.com",
                pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof AD_VIEW_HASH ? "NEWSCOM_PREBID_HEADER1" : AD_VIEW_HASH) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("3595e181146-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime(),
                px = new Image(1, 1);
            px.src = pxSrc
        } catch (m) {}
    } else if (hourElapsed) {
        window["Moat#EMC"] = 1;
        window["Moat#ETS"] = ct;
        try {
            pixelDomain = "px.moatads.com", pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
                escape("undefined" === typeof AD_VIEW_HASH ? "NEWSCOM_PREBID_HEADER1" : AD_VIEW_HASH) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("3595e181146-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime(), px = new Image(1, 1), px.src = pxSrc
        } catch (m) {}
    }
};