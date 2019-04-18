! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("CAAS_AOLCOM", [], t) : "object" == typeof exports ? exports.CAAS_AOLCOM = t() : e.CAAS_AOLCOM = t()
}(window, function() {
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
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "http://172.141.230.253:8080/public/assets/", n(n.s = 9)
    }({
        10: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, o, i, l, u, a, s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
            t.default = (r = window.wafer.utils, o = r.bindEvent, i = r.elementInView, l = r.throttle, u = r.unbindEvent, a = 50, function() {
                function e(t) {
                    var n = t.selector;
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.elem = document.getElementsByClassName(n)[0], !this.elem) return console.error("Zergnet: No Element found");
                    var r = this.elem.querySelector('script[type="x-mod-config"]');
                    if (!r) return console.error("Zergnet: No module config Found");
                    this.config = JSON.parse(r.text), this._initialized = !1, this._validateWithThrottle = l(this.validate, a, this), this.init()
                }
                return s(e, [{
                    key: "init",
                    value: function() {
                        o(window, "scroll", this._validateWithThrottle), this._validateWithThrottle()
                    }
                }, {
                    key: "loadZergnet",
                    value: function() {
                        var e = document.createElement("script");
                        e.type = "text/javascript", e.async = !0, e.src = "https://www.zergnet.com/zerg.js?id=" + this.config.zergnetId;
                        var t = document.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(e, t)
                    }
                }, {
                    key: "validate",
                    value: function() {
                        !this._initialized && i(this.elem, {
                            offsetY: 200
                        }, window.wafer.base.viewport) && (u(window, "scroll", this._validateWithThrottle), this._initialized = !0, this.loadZergnet())
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        u(this.elem, "scroll", this._validateWithThrottle)
                    }
                }]), e
            }()), e.exports = t.default
        },
        9: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, o = n(10),
                i = (r = o) && r.__esModule ? r : {
                    default: r
                };
            t.default = new i.default({
                selector: "zergnet"
            }), e.exports = t.default
        }
    })
});
//# sourceMappingURL=Zergnet.js.map