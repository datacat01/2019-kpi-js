define("@ta/common.string", [], function() {
    return function(n) {
        var r = {};

        function t(e) {
            if (r[e]) return r[e].exports;
            var o = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        return t.m = n, t.c = r, t.d = function(n, r, e) {
            t.o(n, r) || Object.defineProperty(n, r, {
                enumerable: !0,
                get: e
            })
        }, t.r = function(n) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }, t.t = function(n, r) {
            if (1 & r && (n = t(n)), 8 & r) return n;
            if (4 & r && "object" == typeof n && n && n.__esModule) return n;
            var e = Object.create(null);
            if (t.r(e), Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & r && "string" != typeof n)
                for (var o in n) t.d(e, o, function(r) {
                    return n[r]
                }.bind(null, o));
            return e
        }, t.n = function(n) {
            var r = n && n.__esModule ? function r() {
                return n.default
            } : function r() {
                return n
            };
            return t.d(r, "a", r), r
        }, t.o = function(n, r) {
            return Object.prototype.hasOwnProperty.call(n, r)
        }, t.p = "", t(t.s = "./packages/common/string/string.jsx")
    }({
        "./packages/common/string/string.jsx": function(n, r, t) {
            "use strict";
            t.r(r), t.d(r, "inputLength", function() {
                return e
            }), t.d(r, "stringHash", function() {
                return o
            }), t.d(r, "uuid", function() {
                return u
            });
            var e = function n(r) {
                    if (!r) return 0;
                    for (var t = 0, e = r.length - 1; e >= 0; e--) {
                        t += 1;
                        var o = r.charCodeAt(e);
                        (o >= 19968 && o <= 40959 || o >= 12352 && o <= 12543 || o >= 44032 && o <= 55295) && (t += 1)
                    }
                    return t
                },
                o = function n(r) {
                    for (var t = 5381, e = r.length; e;) t = 33 * t ^ r.charCodeAt(--e);
                    return t >>> 0
                },
                u = function n() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
                        var r = 16 * Math.random() | 0;
                        return ("x" === n ? r : 3 & r | 8).toString(16)
                    })
                }
        }
    })
});
//# sourceMappingURL=common.string.58f8ba4d6f.js.map