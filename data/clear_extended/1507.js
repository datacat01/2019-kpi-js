! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("CAAS_AOLCOM", [], t) : "object" == typeof exports ? exports.CAAS_AOLCOM = t() : e.CAAS_AOLCOM = t()
}(window, function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "http://172.141.230.253:8080/public/assets/", r(r.s = 11)
    }({
        11: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, o = r(12),
                u = (n = o) && n.__esModule ? n : {
                    default: n
                };
            t.default = new u.default({
                selector: ".m-partner"
            }), e.exports = t.default
        },
        12: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }();
            t.default = (n = window.CaasUtils.ImpTag, function() {
                function e(t) {
                    var r = t.selector;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.elems = [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                            return r
                        }
                        return Array.from(e)
                    }(document.querySelectorAll(r))), this.elems && this.init()
                }
                return o(e, [{
                    key: "init",
                    value: function() {
                        this.elems.forEach(function(e) {
                            return new n(e)
                        })
                    }
                }]), e
            }()), e.exports = t.default
        }
    })
});
//# sourceMappingURL=GenericPartner.js.map