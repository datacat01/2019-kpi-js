function clickcr(e, n, t, r, o, i, a) {
    if (1 == arguments.length) return void("undefined" != typeof nclk.generateCC && nclk.generateCC(arguments[0]));
    var s, l, u, f, p, g, m, h, v, y, w, b = "cc",
        E = navigator.userAgent.toLowerCase(),
        _ = E.indexOf("safari") != -1,
        k = /msie/.test(E) && !/opera/.test(E),
        C = "https:" == window.location.protocol ? "https:" : "http:",
        x = ccsrv.substring(ccsrv.indexOf(".") + 1),
        S = window.event ? window.event : o,
        T = -1,
        R = -1,
        L = -1,
        O = -1,
        I = 0;
    i = i ? String(i) : "0", a || (a = ""), I = 0 == i.indexOf("n") ? 0 : void 0 != window.g_ssc && void 0 != window.g_query ? 1 : 0;
    try {
        if (m = nclk.windowSize(window), u = nclk.checkIframe(e)) {
            var N = nclk.findPos(document.getElementById(u));
            S.clientX && void 0 != S.clientX && (s = document.body, s.clientLeft && s.clientTop ? (ifrSx = S.clientX - s.clientLeft, ifrSy = S.clientY - s.clientTop) : (ifrSx = S.clientX, ifrSy = S.clientY)), L = N[0] + ifrSx, O = N[1] + ifrSy, document.body && (document.body.scrollTop || document.body.scrollLeft) ? (s = document.body, T = L - s.scrollLeft, R = O - s.scrollTop) : document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft) ? (l = document.documentElement, T = L - l.scrollLeft, R = O - l.scrollTop) : (T = L, R = O)
        } else S.clientX && void 0 != S.clientX && (s = document.body, s.clientLeft && s.clientTop ? (T = S.clientX - s.clientLeft, R = S.clientY - s.clientTop) : (T = S.clientX, R = S.clientY)), document.body && (document.body.scrollTop || document.body.scrollLeft) ? (L = document.body.scrollLeft + (T < 0 ? 0 : T), O = document.body.scrollTop + (R < 0 ? 0 : R)) : document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft) ? (l = document.documentElement, void 0 != l.scrollLeft && (L = l.scrollLeft + (T < 0 ? 0 : T)), void 0 != l.scrollTop && (O = l.scrollTop + (R < 0 ? 0 : R))) : (L = T < 0 ? 0 : T, O = R < 0 ? 0 : R), S.pageX && (L = S.pageX), S.pageY && (O = S.pageY)
    } catch (A) {}
    if ("" != n && "undefined" != typeof n) {
        if (i.indexOf("1") != -1 ? f = 0 : e.href ? (h = e.nodeName.toLowerCase(), v = e.href.toLowerCase(), f = e.target && "_self" != e.target && "_top" != e.target && "_parent" != e.target || v.indexOf("javascript:") != -1 || e.getAttribute("href", 2) && "#" == e.getAttribute("href", 2).charAt(0) || v.indexOf("#") != -1 && v.substr(0, v.indexOf("#")) == document.URL || "img" == h.toLowerCase() || k && window.location.host.indexOf(x) == -1 ? 0 : 1) : f = 0, e.href && 0 == e.href.indexOf(C + "//" + ccsrv)) p = e.href;
        else if (p = C + "//" + ccsrv + "/" + b + "?a=" + n + "&r=" + r + "&i=" + t, p += "&bw=" + m + "&px=" + L + "&py=" + O + "&sx=" + T + "&sy=" + R + "&m=" + f, 0 == I ? p += "&nsc=" + nsc : 1 == I && (p += "&ssc=" + g_ssc + "&q=" + encodeURIComponent(g_query) + "&s=" + g_sid + "&p=" + g_pid), a && (p += "&g=" + encodeURIComponent(a)), v && 0 != v.indexOf(C + "//" + ccsrv) && "img" != h.toLowerCase()) {
            var B = e.href;
            e.outerHTML && !window.XMLHttpRequest && (B = (/\shref=\"([^\"]+)\"/i.test(e.outerHTML) && RegExp.$1).replace(/\\/g, "\\\\").replace(/%([A-Z0-9]{2})/gi, "\\$1"), (d = document.createElement("div")).innerHTML = B, B = d.innerText.replace(/\\([A-Z0-9]{2})/gi, "%$1").replace(/\\\\/g, "\\")), v = B.toLowerCase(), 0 == v.indexOf("http:") || 0 == v.indexOf("https:") || 0 == v.indexOf("javascript:") ? p += "&u=" + encodeURIComponent(B) : (y = nclk.absPath(B), p += "&u=" + encodeURIComponent(y))
        } else p += e.href && e.href.length > 0 ? "&u=" + encodeURIComponent(e.href) : "&u=about%3Ablank";
        if (1 == f) w = e.innerHTML, e.href = p, e.innerHTML != w && (e.innerHTML = w);
        else if (document.images) {
            var F = (new Date).getTime();
            if (p += "&time=" + F, _ && !e.href) {
                for (var $ = c = new Date; $.getTime() - c.getTime() < 100;) $ = new Date;
                var g = new Image;
                nclkImg.push(g), g.src = p
            } else {
                var g = new Image;
                nclkImg.push(g), g.src = p
            }
        }
        return !0
    }
}
if ("undefined" == typeof nclk && (nclk = {}), "undefined" == typeof nclkMaxDepth) var nclkMaxDepth = 8;
if ("undefined" == typeof ccsrv) var ccsrv = "cc.naver.com";
if ("undefined" == typeof nsc) var nsc = "decide.me";
if ("undefined" == typeof g_pid) var g_pid = "";
if ("undefined" == typeof g_sid) var g_sid = "";
var nclkImg = [];
if (nclk.version = "1.2.13", nclk.getScrollBarWidth = function() {
        var e = document.createElement("p");
        e.style.width = "200px", e.style.height = "200px";
        var n = document.createElement("div");
        n.style.position = "absolute", n.style.top = "0px", n.style.left = "0px", n.style.visibility = "hidden", n.style.width = "200px", n.style.height = "150px", n.style.overflow = "hidden", n.appendChild(e), document.body.appendChild(n);
        var t = e.offsetWidth;
        n.style.overflow = "scroll";
        var r = e.offsetWidth;
        return t == r && (r = n.clientWidth), document.body.removeChild(n), t - r
    }, nclk.findPos = function(e) {
        var n = curtop = 0;
        try {
            if (e.offsetParent) {
                do n += e.offsetLeft, curtop += e.offsetTop; while (e = e.offsetParent)
            } else(e.x || e.y) && (e.x && (n += e.x), e.y && (curtop += e.y))
        } catch (t) {}
        return [n, curtop]
    }, nclk.windowSize = function(e) {
        e || (e = window);
        var n = 0;
        if (e.innerWidth) {
            if (n = e.innerWidth, "number" == typeof e.innerWidth) {
                var t = nclk.getScrollBarWidth();
                n = e.innerWidth - t
            }
        } else document.documentElement && document.documentElement.clientWidth ? n = document.documentElement.clientWidth : document.body && (document.body.clientWidth || document.body.clientHeight) && (n = document.body.clientWidth);
        return n
    }, nclk.checkIframe = function(e) {
        var n, t, r = (document.URL, e.parentNode);
        if (null == r || void 0 == r) return !1;
        for (;;)
            if ("#document" == r.nodeName.toLowerCase()) {
                n = r.parentWindow ? r.parentWindow : r.defaultView;
                try {
                    return null != n.frameElement && void 0 != n.frameElement && ("iframe" == n.frameElement.nodeName.toLowerCase() && (t = n.frameElement.id, !!t && t))
                } catch (o) {
                    return !1
                }
            } else if (r = r.parentNode, null == r || void 0 == r) return !1
    }, nclk.absPath = function(e) {
        var n = window.location,
            t = n.href,
            r = n.protocol + "//" + n.host;
        if ("/" == e.charAt(0)) return "/" == e.charAt(1) ? n.protocol + e : r + e;
        for (/^\.\//.test(e) && (e = e.substring(2));
            /^\.\./.test(e);) r != t && (t = t.substring(0, t.lastIndexOf("/"))), e = e.substring(3);
        return r != t && "?" != e.charAt(0) && "#" != e.charAt(0) && (t = t.substring(0, t.lastIndexOf("/"))), "/" == e.charAt(0) ? t + e : "?" == e.charAt(0) ? (t = t.split("?")[0], t + e) : "#" == e.charAt(0) ? (t = t.split("#")[0], t + e) : t + "/" + e
    }, function(e) {
        function n(e) {
            window.lcs_SerName || (window.lcs_SerName = "lcs.naver.com");
            var n, t, i, c = "",
                a = document,
                s = window.location;
            try {
                i = (s.protocol ? s.protocol : "http:") + "//" + window.lcs_SerName + "/m?"
            } catch (l) {
                return
            }
            try {
                c = i + "u=" + encodeURIComponent(s.href) + "&e=" + (a.referrer ? encodeURIComponent(a.referrer) : "")
            } catch (l) {}
            try {
                "undefined" == typeof k.i && (k.i = ""), S < 1 && (o(), E.nnb && r(), k.ct = p(), g(), m(), h());
                for (n in C) "function" != typeof C[n] && (c += "&" + n + "=" + encodeURIComponent(C[n]));
                for (n in k) t = k[n], void 0 !== t && "function" != typeof t && (c += "&" + n + "=" + encodeURIComponent(t));
                if (S < 1)
                    for (n in x) t = x[n], t && (c += "&" + n + "=" + encodeURIComponent(t));
                for (n in e)(n.length >= 3 && "function" != typeof e[n] || "qy" === n) && (c += "&" + n + "=" + encodeURIComponent(e[n]));
                if (!!e == !1 || !!e.pid == !1) {
                    var u;
                    u = window.g_pid ? g_pid : w(), c += "&pid=" + encodeURIComponent(u)
                }
                var f = (new Date).getTime();
                c += "&ts=" + f, c += "&EOU";
                var d = document.createElement("img");
                d.src = c, d.onload = function() {
                    d.onload = null
                }, S++
            } catch (l) {
                return
            }
        }

        function t(e, t) {
            try {
                e && (k.i = e, t ? n(t) : n())
            } catch (r) {}
        }

        function r() {
            try {
                var e = localStorage;
                if (e) {
                    if (e.ls) {
                        var n = e.ls;
                        if (13 == n.length) return void(k.ls = n)
                    }
                    var t = d();
                    null != t && "" != t && (e.ls = t, k.ls = t)
                }
            } catch (r) {}
        }

        function o() {
            C.os = i(), C.ln = c(), C.sr = a(), C.pr = window.devicePixelRatio || 1;
            var e = s();
            C.bw = e.bw, C.bh = e.bh, C.c = l(), C.j = u(), C.k = f()
        }

        function i() {
            var e = "";
            try {
                navigator.platform ? e = navigator.platform : ""
            } catch (n) {}
            return e
        }

        function c() {
            var e = "";
            try {
                navigator.userLanguage ? e = navigator.userLanguage : navigator.language ? e = navigator.language : ""
            } catch (n) {}
            return e
        }

        function a() {
            var e = "";
            try {
                if (window.screen && screen.width && screen.height) e = screen.width + "x" + screen.height;
                else if (window.java || self.java) {
                    var n = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
                    e = n.width + "x" + n.height
                }
            } catch (t) {
                e = ""
            }
            return e
        }

        function s() {
            var e = document,
                n = {
                    bw: "",
                    bh: ""
                };
            try {
                n.bw = e.documentElement.clientWidth ? e.documentElement.clientWidth : e.body.clientWidth, n.bh = e.documentElement.clientHeight ? e.documentElement.clientHeight : e.body.clientHeight
            } catch (t) {}
            return n
        }

        function l() {
            var e = "";
            try {
                if (window.screen) e = screen.colorDepth ? screen.colorDepth : screen.pixelDepth;
                else if (window.java || self.java) {
                    var n = java.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();
                    e = n
                }
            } catch (t) {
                e = ""
            }
            return e
        }

        function u() {
            var e = "";
            try {
                e = navigator.javaEnabled() ? "Y" : "N"
            } catch (n) {}
            return e
        }

        function f() {
            var e = "";
            try {
                e = navigator.cookieEnabled ? "Y" : "N"
            } catch (n) {}
            return e
        }

        function d() {
            try {
                var e, n, t, r = document.cookie,
                    o = r.split(";");
                for (t = 0; t < o.length; t++)
                    if (e = o[t].substr(0, o[t].indexOf("=")), n = o[t].substr(o[t].indexOf("=") + 1), e = e.replace(/^\s+|\s+$/g, ""), "NNB" == e) return unescape(n)
            } catch (i) {}
        }

        function p() {
            var e = "";
            try {
                var n = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (n && "undefined" != typeof n.type) switch (n.type) {
                    case n.CELL_2G:
                        e = "2g";
                        break;
                    case n.CELL_3G:
                        e = "3g";
                        break;
                    case n.CELL_4G:
                        e = "4g";
                        break;
                    case n.WIFI:
                        e = "wifi";
                        break;
                    case n.ETHERNET:
                        e = "eth";
                        break;
                    case n.UNKNOWN:
                        e = "unknown";
                        break;
                    case n.NONE:
                        e = "none";
                        break;
                    default:
                        e = ""
                } else if ("undefined" != typeof blackberry && "undefined" != typeof blackberry.network) {
                    var t = blackberry.network;
                    e = "Wi-Fi" == t ? "wifi" : "3G" == t ? "3g" : t
                } else {
                    var r = "Microsoft Internet Explorer" == navigator.appName,
                        o = navigator.userAgent.indexOf("MAC") >= 0;
                    if (r && !o && i && i.addBehavior) {
                        var i = document.body,
                            c = i.addBehavior("#default#clientCaps");
                        e = i.connectionType, i.removeBehavior(c)
                    }
                }
            } catch (a) {}
            return e
        }

        function g() {
            var e = window.performance || {};
            if (e.timing) {
                var n = e.timing;
                for (var t in n) {
                    var r = n[t];
                    "number" == typeof r && (x[t] = r)
                }
            }
        }

        function m() {
            var e = window.performance || {};
            try {
                if (e.getEntriesByType) {
                    var n = e.getEntriesByType("paint");
                    n.forEach(function(e, n, t) {
                        var r = e.name;
                        switch (r) {
                            case "first-paint":
                            case "first-contentful-paint":
                                x[r] = e.startTime
                        }
                    })
                }
            } catch (t) {}
        }

        function h() {
            var e = v();
            void 0 !== e && (x.ngt = e)
        }

        function v() {
            var e = window.performance || {};
            if (e.navigation) return e.navigation.type
        }

        function y() {
            var e, n = localStorage.ls;
            if (n) e = n;
            else {
                var t;
                t = navigator.userAgent + Math.random(), e = t
            }
            var r, o = window.performance || {},
                i = location.href;
            return r = o.now ? o.now() : (new Date).getTime(), T = R.md5(e + i + r)
        }

        function w() {
            return null === T && (T = y()), T
        }

        function b() {
            return T = y()
        }
        var E = {
                nnb: !0
            },
            _ = "v0.6.0",
            k = {},
            C = {},
            x = {},
            S = 0,
            T = null,
            R = {};
        ! function(e) {
            function n(e, n) {
                var t = (65535 & e) + (65535 & n),
                    r = (e >> 16) + (n >> 16) + (t >> 16);
                return r << 16 | 65535 & t
            }

            function t(e, n) {
                return e << n | e >>> 32 - n
            }

            function r(e, r, o, i, c, a) {
                return n(t(n(n(r, e), n(i, a)), c), o)
            }

            function o(e, n, t, o, i, c, a) {
                return r(n & t | ~n & o, e, n, i, c, a)
            }

            function i(e, n, t, o, i, c, a) {
                return r(n & o | t & ~o, e, n, i, c, a)
            }

            function c(e, n, t, o, i, c, a) {
                return r(n ^ t ^ o, e, n, i, c, a)
            }

            function a(e, n, t, o, i, c, a) {
                return r(t ^ (n | ~o), e, n, i, c, a)
            }

            function s(e, t) {
                e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
                var r, s, l, u, f, d = 1732584193,
                    p = -271733879,
                    g = -1732584194,
                    m = 271733878;
                for (r = 0; r < e.length; r += 16) s = d, l = p, u = g, f = m, d = o(d, p, g, m, e[r], 7, -680876936), m = o(m, d, p, g, e[r + 1], 12, -389564586), g = o(g, m, d, p, e[r + 2], 17, 606105819), p = o(p, g, m, d, e[r + 3], 22, -1044525330), d = o(d, p, g, m, e[r + 4], 7, -176418897), m = o(m, d, p, g, e[r + 5], 12, 1200080426), g = o(g, m, d, p, e[r + 6], 17, -1473231341), p = o(p, g, m, d, e[r + 7], 22, -45705983), d = o(d, p, g, m, e[r + 8], 7, 1770035416), m = o(m, d, p, g, e[r + 9], 12, -1958414417), g = o(g, m, d, p, e[r + 10], 17, -42063), p = o(p, g, m, d, e[r + 11], 22, -1990404162), d = o(d, p, g, m, e[r + 12], 7, 1804603682), m = o(m, d, p, g, e[r + 13], 12, -40341101), g = o(g, m, d, p, e[r + 14], 17, -1502002290), p = o(p, g, m, d, e[r + 15], 22, 1236535329), d = i(d, p, g, m, e[r + 1], 5, -165796510), m = i(m, d, p, g, e[r + 6], 9, -1069501632), g = i(g, m, d, p, e[r + 11], 14, 643717713), p = i(p, g, m, d, e[r], 20, -373897302), d = i(d, p, g, m, e[r + 5], 5, -701558691), m = i(m, d, p, g, e[r + 10], 9, 38016083), g = i(g, m, d, p, e[r + 15], 14, -660478335), p = i(p, g, m, d, e[r + 4], 20, -405537848), d = i(d, p, g, m, e[r + 9], 5, 568446438), m = i(m, d, p, g, e[r + 14], 9, -1019803690), g = i(g, m, d, p, e[r + 3], 14, -187363961), p = i(p, g, m, d, e[r + 8], 20, 1163531501), d = i(d, p, g, m, e[r + 13], 5, -1444681467), m = i(m, d, p, g, e[r + 2], 9, -51403784), g = i(g, m, d, p, e[r + 7], 14, 1735328473), p = i(p, g, m, d, e[r + 12], 20, -1926607734), d = c(d, p, g, m, e[r + 5], 4, -378558), m = c(m, d, p, g, e[r + 8], 11, -2022574463), g = c(g, m, d, p, e[r + 11], 16, 1839030562), p = c(p, g, m, d, e[r + 14], 23, -35309556), d = c(d, p, g, m, e[r + 1], 4, -1530992060), m = c(m, d, p, g, e[r + 4], 11, 1272893353), g = c(g, m, d, p, e[r + 7], 16, -155497632), p = c(p, g, m, d, e[r + 10], 23, -1094730640), d = c(d, p, g, m, e[r + 13], 4, 681279174), m = c(m, d, p, g, e[r], 11, -358537222), g = c(g, m, d, p, e[r + 3], 16, -722521979), p = c(p, g, m, d, e[r + 6], 23, 76029189), d = c(d, p, g, m, e[r + 9], 4, -640364487), m = c(m, d, p, g, e[r + 12], 11, -421815835), g = c(g, m, d, p, e[r + 15], 16, 530742520), p = c(p, g, m, d, e[r + 2], 23, -995338651), d = a(d, p, g, m, e[r], 6, -198630844), m = a(m, d, p, g, e[r + 7], 10, 1126891415), g = a(g, m, d, p, e[r + 14], 15, -1416354905), p = a(p, g, m, d, e[r + 5], 21, -57434055), d = a(d, p, g, m, e[r + 12], 6, 1700485571), m = a(m, d, p, g, e[r + 3], 10, -1894986606), g = a(g, m, d, p, e[r + 10], 15, -1051523), p = a(p, g, m, d, e[r + 1], 21, -2054922799), d = a(d, p, g, m, e[r + 8], 6, 1873313359), m = a(m, d, p, g, e[r + 15], 10, -30611744), g = a(g, m, d, p, e[r + 6], 15, -1560198380), p = a(p, g, m, d, e[r + 13], 21, 1309151649), d = a(d, p, g, m, e[r + 4], 6, -145523070), m = a(m, d, p, g, e[r + 11], 10, -1120210379), g = a(g, m, d, p, e[r + 2], 15, 718787259), p = a(p, g, m, d, e[r + 9], 21, -343485551), d = n(d, s), p = n(p, l), g = n(g, u), m = n(m, f);
                return [d, p, g, m]
            }

            function l(e) {
                var n, t = "",
                    r = 32 * e.length;
                for (n = 0; n < r; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
                return t
            }

            function u(e) {
                var n, t = [];
                for (t[(e.length >> 2) - 1] = void 0, n = 0; n < t.length; n += 1) t[n] = 0;
                var r = 8 * e.length;
                for (n = 0; n < r; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
                return t
            }

            function f(e) {
                return l(s(u(e), 8 * e.length))
            }

            function d(e, n) {
                var t, r, o = u(e),
                    i = [],
                    c = [];
                for (i[15] = c[15] = void 0, o.length > 16 && (o = s(o, 8 * e.length)), t = 0; t < 16; t += 1) i[t] = 909522486 ^ o[t], c[t] = 1549556828 ^ o[t];
                return r = s(i.concat(u(n)), 512 + 8 * n.length), l(s(c.concat(r), 640))
            }

            function p(e) {
                var n, t, r = "0123456789abcdef",
                    o = "";
                for (t = 0; t < e.length; t += 1) n = e.charCodeAt(t), o += r.charAt(n >>> 4 & 15) + r.charAt(15 & n);
                return o
            }

            function g(e) {
                return unescape(encodeURIComponent(e))
            }

            function m(e) {
                return f(g(e))
            }

            function h(e) {
                return p(m(e))
            }

            function v(e, n) {
                return d(g(e), g(n))
            }

            function y(e, n) {
                return p(v(e, n))
            }

            function w(e, n, t) {
                return n ? t ? v(n, e) : y(n, e) : t ? m(e) : h(e)
            }
            e.md5 = w
        }(R), e.lcs_do = n, e.lcs_do_gdid = t, e.lcs_get_lpid = w, e.lcs_update_lpid = b, e.lcs_version = _
    }(window), !svr) var svr = "";
var JEagleEyeClient = {
    _fnCondition: function() {
        return !0
    },
    _bEnable: !1,
    _bIsIE: /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent),
    _bEnableRaiseErrorByOnError: /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) || /firefox/i.test(navigator.userAgent),
    _bDebugOnly: !1,
    _bSendScriptName: !1,
    _sFirtFunctionBody: null,
    _sStackMode: function() {
        try {
            0()
        } catch (e) {
            if (e.arguments) return "chrome";
            if (e.stack) return "firefox";
            if (window.opera && !("stacktrace" in e)) return "opera"
        }
        return "other"
    }(),
    _oStackMethodFactory: {
        other: function(e) {
            for (var n, t, r, o = "{anonymous}", i = /function\s*([\w\-$]+)?\s*\(([^\(]*)\)/i, c = /\$JE\(['"]([^\(]*)['"]\)/, a = [], s = [], l = 10; e && a.length < l;)
                if (n = e.toString(), i.test(n) ? (t = RegExp.$1 || o, s = (RegExp.$2 || "").split(",")) : (t = o, s = []), t != o || 0 != s[0].indexOf("$$")) {
                    if (t == o && c.test(n) && (t = JEagleEyeClient._trim(RegExp.$1)), JEagleEyeClient._setFirstFunctionBody(n), r = Array.prototype.slice.call(e.arguments), a.push(t + "(" + JEagleEyeClient._stringifyArguments(r, s) + ")"), e === e.caller && window.opera) break;
                    e = e.caller
                } else e = e.caller;
            return a
        },
        chrome: function(e) {
            return e.stack.replace(/^.*?\n/, "").replace(/^.*?\n/, "").replace(/^.*?\n/, "").replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@").replace(/\s+\(http(.*):([\d]+):[\d]+\)/gm, "()@http$1:$2").split("\n")
        },
        firefox: function(e) {
            return e.stack.replace(/^.*?\n/, "").replace(/(?:\n@:0)?\s+$/m, "").replace(/^\(/gm, "{anonymous}(").split("\n")
        },
        opera: function(e) {
            var n, t, r, o = e.message.split("\n"),
                i = "{anonymous}",
                c = /Line\s+(\d+).*?script\s+(http\S+)(?:.*?in\s+function\s+(\S+))?/i;
            for (n = 4, t = 0, r = o.length; n < r; n += 2) c.test(o[n]) && (o[t++] = (RegExp.$3 ? RegExp.$3 + "()@" + RegExp.$2 + RegExp.$1 : i + "()@" + RegExp.$2 + ":" + RegExp.$1) + " -- " + o[n + 1].replace(/^\s+/, ""));
            return o.splice(t, o.length - t), o
        }
    },
    _setFirstFunctionBody: function(e) {
        null == this._sFirtFunctionBody && (this._sFirtFunctionBody = e)
    },
    _stringifyArguments: function(e, n) {
        for (var t = [], r = 0; r < n.length; ++r) {
            var o = null;
            try {
                o = this._stringifyJSON(e[r])
            } catch (i) {}
            t[r] = n[r], null != o && (t[r] += " : '" + this._stringifyJSON(e[r]) + "'")
        }
        return t.join(",")
    },
    _trim: function(e) {
        e = e.replace(/^\s+/, "");
        for (var n = e.length - 1; n >= 0; n--)
            if (/\S/.test(e.charAt(n))) {
                e = e.substring(0, n + 1);
                break
            } return e
    },
    _getStackTrace: function(e, n) {
        var t = this._sStackMode,
            r = "other" === t ? arguments.callee : function() {
                try {
                    0()
                } catch (e) {
                    return e
                }
            }(),
            o = this._oStackMethodFactory[t](r);
        return this._makeResultStack(o, e, n || "")
    },
    _makeResultStack: function(e, n, t) {
        var r = {
            message: "",
            callstack: []
        };
        "object" == typeof n && "string" == typeof n.message && (r.message = n.message);
        for (var o = !0, i = window.location.href.replace(/(https?:\/\/[^\/]+)\/(.*)/i, "$1"), c = /^(@|http:\/\/)/, a = 0, s = e.length; a < s; a++) {
            var l = e[a];
            c.test(l) || (o && "" != t && l.indexOf("{anonymous}") != -1 && (l = l.replace("{anonymous}", t)), l = l.replace(i, ""), r.callstack.push((o ? "" : " => ") + l), o = !1)
        }
        return r
    },
    attachOnError: function() {
        var e = this;
        window.onerror = function(n, t, r) {
            if (e._isRunning()) {
                var o = e._bIsIE ? {
                    callstack: e._getStackTrace().callstack.join("\n")
                } : {};
                e._sendToServer(n, t, r, o)
            }
        }
    },
    raiseError: function(e, n, t) {
        this._processError(e, !1, n, t)
    },
    ignoreError: function(e, n, t) {
        this._processError(e, !0, n, t)
    },
    sendError: function(e) {
        this._isRunning() && this._sendToServer(e)
    },
    _processError: function(e, n, t, r) {
        if (this._isRunning()) {
            this._setCallerFunctionName(t, r);
            var o = this._getStackTrace(e, r.callFuncName);
            if (r.callstack = o.callstack.join("\n"), this._bEnableRaiseErrorByOnError) {
                var i = this,
                    c = window.onerror || null;
                window.onerror = function(e, t, a) {
                    return i._sendToServer(o.message, t, a, r), window.onerror = c, n
                }
            } else this._sendToServer(sStackMessage);
            if (this._bEnableRaiseErrorByOnError || !this._bEnableRaiseErrorByOnError && !n) try {
                0()
            } catch (a) {
                throw e
            }
        }
    },
    _setCallerFunctionName: function(e, n) {
        if (n = n || {}, "undefined" != typeof e) {
            try {
                var t = arguments.callee.caller.caller.caller.toString()
            } catch (r) {
                return
            }
            var o = "";
            for (var i in e)
                if (o = e[i], "function" == typeof o && o.toString() === t) return void(n.callFuncName = i)
        }
    },
    _sendToServer: function(e, n, t, r) {
        n = n || document.location, t = parseInt(t || 0, 10), r = r || {}, this._bIsIE && t--;
        var o = "http://cecs.naver.com/?m=" + encodeURIComponent(e) + "&u=" + encodeURIComponent(n) + "&l=" + t;
        "undefined" != typeof r.callstack && (o += "&callstack=" + encodeURIComponent(r.callstack));
        var i = "";
        if (null != this._sFirtFunctionBody && (r.funcBody = this._trim(this._sFirtFunctionBody).substring(0, 200) + "..", this._sFirtFunctionBody = null, i += "= function =\n" + r.funcBody + "\n\n"), "undefined" != typeof r.message && (i += "= message =\n" + r.message + "\n\n"), "undefined" != typeof r.params && (r.params = this._stringifyJSON(r.params), i += "= params =\n" + r.params), this._bSendScriptName) {
            i += ("" != i ? "\n\n" : "") + "= scripts =\n";
            for (var c = document.getElementsByTagName("script"), a = 0, s = c.length; a < s; a++) {
                var l = c[a].src;
                "" != l && l.indexOf("JEagleEyeClient.js") == -1 && (i += l + "\n")
            }
        }
        if ("" != i && (o += "&general=" + encodeURIComponent(i)), svr && (o += "&client=" + encodeURIComponent(svr.replace("<!--", "").replace("-->", ""))), o += "&temp=" + (new Date).getTime(), this._bDebugOnly) alert("* 에러 : " + e + "\n* 파일 : " + n + "\n* 라인 : " + t + "\n\n* function : " + r.funcBody + "\n\n* message : " + r.message + "\n\n* callstack : " + r.callstack + "\n\n* params : " + r.params + "\n\n*request : " + o);
        else {
            var u = new Image;
            u.src = o
        }
    },
    _stringifyJSON: function(e) {
        var n = typeof e;
        if ("object" != n || null === e) return "string" == n && (e = '"' + e + '"'), String(e);
        if ("undefined" != e.constructor) return null;
        var t, r, o = [],
            i = e && e.constructor == Array;
        for (t in e) r = e[t], n = typeof r, "string" == n ? r = '"' + r + '"' : "string" == n ? r = '"' + r + '"' : "object" == n && null !== r && (r = this._stringifyJSON(r)), o.push((i ? "" : '"' + t + '":') + String(r));
        return (i ? "[" : "{") + String(o) + (i ? "]" : "}")
    },
    _isRunning: function() {
        return this._bEnable && this._fnCondition()
    },
    setCondition: function(e) {
        this._fnCondition = e
    },
    setEnable: function(e) {
        this._bEnable = e
    },
    setDebugOnly: function(e) {
        this._bDebugOnly = e
    },
    setSendScriptName: function(e) {
        this._bSendScriptName = e
    }
};
$JE = function() {};
var LogError = function(e) {
        JEagleEyeClient.sendError(e)
    },
    CatchError = function(e, n) {
        JEagleEyeClient.sendError(n.description)
    };
JEagleEyeClient.attachOnError();