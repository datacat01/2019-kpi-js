! function(e) {
    function t(t) {
        for (var n = t[0], o = t[1], a = t[2], s, d, u = 0, f = []; u < n.length; u++) d = n[u], i[d] && f.push(i[d][0]), i[d] = 0;
        for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
        for (l && l(t); f.length;) f.shift()();
        return c.push.apply(c, a || []), r()
    }

    function r() {
        for (var e, t = 0; t < c.length; t++) {
            for (var r = c[t], n = !0, a = 1; a < r.length; a++) {
                var s = r[a];
                0 !== i[s] && (n = !1)
            }
            n && (c.splice(t--, 1), e = o(o.s = r[0]))
        }
        return e
    }

    function n(e) {
        return o.p + "dmp." + ({
            "intersection-observer": "intersection-observer",
            theme_neon: "theme_neon",
            audience: "audience",
            chromecast: "chromecast",
            dialog: "dialog",
            dynamic_quality_switcher: "dynamic_quality_switcher",
            estat: "estat",
            queue: "queue",
            "vendors~hlsjs_beta": "vendors~hlsjs_beta",
            "vendors~hlsjs_stable": "vendors~hlsjs_stable",
            "vendors~vr360": "vendors~vr360",
            vr360: "vr360",
            vertical_ad: "vertical_ad",
            xiti: "xiti"
        } [e] || e) + "." + {
            "intersection-observer": "62a582c046a1a288d59c",
            theme_neon: "7444fb3ec5f48cd10e2c",
            audience: "92782130e0da606caf3b",
            chromecast: "3dd470bdd8365b03139d",
            dialog: "7986cea9c3b854a1d253",
            dynamic_quality_switcher: "9b99c3b922f16bd72760",
            estat: "210ba18325c749ed4c07",
            queue: "ccbd84741104b8e326c6",
            "vendors~hlsjs_beta": "c07aeed509355b48e8e5",
            "vendors~hlsjs_stable": "b7d633b00d1a078d3a68",
            "vendors~vr360": "596875932c55b0bfd17b",
            vr360: "f048fde47696e3c0f5b0",
            vertical_ad: "e9f0b75f33417ceb8456",
            xiti: "4564f1034decf6a133f6"
        } [e] + ".js"
    }

    function o(t) {
        if (a[t]) return a[t].exports;
        var r = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    var a = {},
        i = {
            manifest: 0
        },
        c = [];
    o.e = function e(t) {
        var r = [],
            a = i[t];
        if (0 !== a)
            if (a) r.push(a[2]);
            else {
                var c = new Promise(function(e, r) {
                    a = i[t] = [e, r]
                });
                r.push(a[2] = c);
                var s = document.getElementsByTagName("head")[0],
                    d = document.createElement("script"),
                    u;
                d.charset = "utf-8", d.timeout = 120, o.nc && d.setAttribute("nonce", o.nc), d.src = n(t), u = function(e) {
                    d.onerror = d.onload = null, clearTimeout(l);
                    var r = i[t];
                    if (0 !== r) {
                        if (r) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                o = e && e.target && e.target.src,
                                a = new Error("Loading chunk " + t + " failed.\n(" + n + ": " + o + ")");
                            a.type = n, a.request = o, r[1](a)
                        }
                        i[t] = void 0
                    }
                };
                var l = setTimeout(function() {
                    u({
                        type: "timeout",
                        target: d
                    })
                }, 12e4);
                d.onerror = d.onload = u, s.appendChild(d)
            } return Promise.all(r)
    }, o.m = e, o.c = a, o.d = function(e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(r, n, function(t) {
                return e[t]
            }.bind(null, n));
        return r
    }, o.n = function(e) {
        var t = e && e.__esModule ? function t() {
            return e.default
        } : function t() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "https://static1.dmcdn.net/playerv5/", o.oe = function(e) {
        throw console.error(e), e
    };
    var s = window.dmpJsonp = window.dmpJsonp || [],
        d = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var u = 0; u < s.length; u++) t(s[u]);
    var l = d;
    r()
}([]);