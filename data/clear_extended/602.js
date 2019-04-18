! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n;
        "undefined" != typeof window ? n = window : "undefined" != typeof global ? n = global : "undefined" != typeof self && (n = self), n.bows = e()
    }
}(function() {
    return function e(n, o, r) {
        function t(f, d) {
            if (!o[f]) {
                if (!n[f]) {
                    var u = "function" == typeof require && require;
                    if (!d && u) return u(f, !0);
                    if (i) return i(f, !0);
                    var s = new Error("Cannot find module '" + f + "'");
                    throw s.code = "MODULE_NOT_FOUND", s
                }
                var a = o[f] = {
                    exports: {}
                };
                n[f][0].call(a.exports, function(e) {
                    var o = n[f][1][e];
                    return t(o || e)
                }, a, a.exports, e, n, o, r)
            }
            return o[f].exports
        }
        for (var i = "function" == typeof require && require, f = 0; f < r.length; f++) t(r[f]);
        return t
    }({
        1: [function(e, n, o) {
            (function(o) {
                (function() {
                    var r = function() {
                            return a += .618033988749895, 360 * (a %= 1)
                        },
                        t = "undefined" == typeof window,
                        i = !t && window.localStorage,
                        f = i.andlogKey || "debug",
                        d = i[f],
                        u = e("andlog"),
                        s = Function.prototype.bind,
                        a = 0,
                        c = !0,
                        l = "|",
                        p = 15,
                        w = function() {},
                        g = i.debugColors ? "false" !== i.debugColors : function() {
                            if ("undefined" == typeof window || "undefined" == typeof navigator) return !1;
                            var e, n = !!window.chrome,
                                r = /firefox/i.test(navigator.userAgent),
                                t = o && o.versions && o.versions.electron;
                            if (r) {
                                var i = navigator.userAgent.match(/Firefox\/(\d+\.\d+)/);
                                i && i[1] && Number(i[1]) && (e = Number(i[1]))
                            }
                            return n || e >= 31 || t
                        }(),
                        v = null,
                        h = null,
                        y = !1,
                        m = {};
                    d && "!" === d[0] && "/" === d[1] && (y = !0, d = d.slice(1)), h = d && "/" === d[0] && new RegExp(d.substring(1, d.length - 1));
                    for (var b = ["log", "debug", "warn", "error", "info"], x = 0, E = b.length; x < E; x++) w[b[x]] = w;
                    v = function(e) {
                        var n, o, t;
                        if (c ? (n = e.slice(0, p), n += Array(p + 3 - n.length).join(" ") + l) : n = e + Array(3).join(" ") + l, h) {
                            var i = e.match(h);
                            if (!y && !i || y && i) return w
                        }
                        if (!s) return w;
                        var f = [u];
                        if (g) {
                            m[e] || (m[e] = r());
                            var d = m[e];
                            n = "%c" + n, o = "color: hsl(" + d + ",99%,40%); font-weight: bold", f.push(n, o)
                        } else f.push(n);
                        if (arguments.length > 1) {
                            var a = Array.prototype.slice.call(arguments, 1);
                            f = f.concat(a)
                        }
                        return t = s.apply(u.log, f), b.forEach(function(e) {
                            t[e] = s.apply(u[e] || t, f)
                        }), t
                    }, v.config = function(e) {
                        e.padLength && (p = e.padLength), "boolean" == typeof e.padding && (c = e.padding), e.separator ? l = e.separator : !1 !== e.separator && "" !== e.separator || (l = "")
                    }, void 0 !== n ? n.exports = v : window.bows = v
                }).call()
            }).call(this, e("_process"))
        }, {
            _process: 3,
            andlog: 2
        }],
        2: [function(e, n, o) {
            ! function() {
                var e = "undefined" == typeof window,
                    r = !e && window.localStorage,
                    t = {};
                if (e) return void(n.exports = console);
                var i = r.andlogKey || "debug";
                if (r && r[i] && window.console) t = window.console;
                else
                    for (var f = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d = f.length, u = function() {}; d--;) t[f[d]] = u;
                void 0 !== o ? n.exports = t : window.console = t
            }()
        }, {}],
        3: [function(e, n, o) {
            function r() {}
            var t = n.exports = {};
            t.nextTick = function() {
                var e = "undefined" != typeof window && window.setImmediate,
                    n = "undefined" != typeof window && window.postMessage && window.addEventListener;
                if (e) return function(e) {
                    return window.setImmediate(e)
                };
                if (n) {
                    var o = [];
                    return window.addEventListener("message", function(e) {
                            var n = e.source;
                            if ((n === window || null === n) && "process-tick" === e.data && (e.stopPropagation(), o.length > 0)) {
                                o.shift()()
                            }
                        }, !0),
                        function(e) {
                            o.push(e), window.postMessage("process-tick", "*")
                        }
                }
                return function(e) {
                    setTimeout(e, 0)
                }
            }(), t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.on = r, t.addListener = r, t.once = r, t.off = r, t.removeListener = r, t.removeAllListeners = r, t.emit = r, t.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, t.cwd = function() {
                return "/"
            }, t.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
        }, {}]
    }, {}, [1])(1)
});