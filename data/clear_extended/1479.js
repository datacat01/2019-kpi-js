! function(n) {
    function r(t) {
        if (e[t]) return e[t].exports;
        var o = e[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    var t = window.webpackJsonp;
    window.webpackJsonp = function(e, c, u) {
        for (var s, f, p, i = 0, a = []; i < e.length; i++) f = e[i], o[f] && a.push(o[f][0]), o[f] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (n[s] = c[s]);
        for (t && t(e, c, u); a.length;) a.shift()();
        if (u)
            for (i = 0; i < u.length; i++) p = r(r.s = u[i]);
        return p
    };
    var e = {},
        o = {
            3: 0
        };
    r.m = n, r.c = e, r.d = function(n, t, e) {
        r.o(n, t) || Object.defineProperty(n, t, {
            configurable: !1,
            enumerable: !0,
            get: e
        })
    }, r.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return r.d(t, "a", t), t
    }, r.o = function(n, r) {
        return Object.prototype.hasOwnProperty.call(n, r)
    }, r.p = "https://ndassets.s-nbcnews.com/", r.oe = function(n) {
        throw console.error(n), n
    }
}([]);