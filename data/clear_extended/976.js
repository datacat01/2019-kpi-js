define("@ta/common.localstorage", [], function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/common/localstorage/localstorage.jsx")
    }({
        "./packages/common/localstorage/localstorage.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function e(t) {
                    return function() {
                        try {
                            return t.apply(void 0, arguments)
                        } catch (e) {
                            return null
                        }
                    }
                },
                o = function e() {
                    return window && window.localStorage ? window.localStorage : null
                },
                u = r(function(e) {
                    var t = o();
                    t && t.removeItem(e)
                }),
                l = r(function(e) {
                    var t = o();
                    if (!t) return null;
                    var n = JSON.parse(t.getItem(e) || "0");
                    return n ? n.ttl && n.ttl + n.now < (new Date).getTime() ? (u(e), null) : n.value : null
                }),
                a = r(function(e, t, n) {
                    var r = o();
                    r && r.setItem(e, JSON.stringify({
                        ttl: n || 0,
                        now: (new Date).getTime(),
                        value: t
                    }))
                });
            t.default = {
                get: l,
                set: a,
                has: function e(t) {
                    return !!l(t)
                },
                remove: u
            }
        }
    })
});
//# sourceMappingURL=common.localstorage.4f01a68fde.js.map