! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("CAAS_AOLCOM", [], t) : "object" == typeof exports ? exports.CAAS_AOLCOM = t() : e.CAAS_AOLCOM = t()
}(window, function() {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var i = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
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
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(o, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "http://172.141.230.253:8080/public/assets/", n(n.s = 3)
    }([, , , function(e, t, n) {
        "use strict";
        var o, i;
        o = n(4), i = n(6), window.CaasUtils = {
            Cookies: o,
            ImpTag: i
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = n(5)
    }, function(e, t, n) {
        "use strict";
        var o, i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(a) {
            var c = !1;
            if (void 0 === (i = "function" == typeof(o = a) ? o.call(t, n, t, e) : o) || (e.exports = i), c = !0, "object" === r(t) && (e.exports = a(), c = !0), !c) {
                var u = window.Cookies,
                    l = window.Cookies = a();
                l.noConflict = function() {
                    return window.Cookies = u, l
                }
            }
        }(function() {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) t[o] = n[o]
                }
                return t
            }
            return function t(n) {
                function o(t, i, r) {
                    var a;
                    if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                            if ("number" == typeof(r = e({
                                    path: "/"
                                }, o.defaults, r)).expires) {
                                var c = new Date;
                                c.setMilliseconds(c.getMilliseconds() + 864e5 * r.expires), r.expires = c
                            }
                            r.expires = r.expires ? r.expires.toUTCString() : "";
                            try {
                                a = JSON.stringify(i), /^[\{\[]/.test(a) && (i = a)
                            } catch (e) {}
                            i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                            var u = "";
                            for (var l in r) r[l] && (u += "; " + l, !0 !== r[l] && (u += "=" + r[l]));
                            return document.cookie = t + "=" + i + u
                        }
                        t || (a = {});
                        for (var s = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, p = 0; p < s.length; p++) {
                            var d = s[p].split("="),
                                y = d.slice(1).join("=");
                            this.json || '"' !== y.charAt(0) || (y = y.slice(1, -1));
                            try {
                                var v = d[0].replace(f, decodeURIComponent);
                                if (y = n.read ? n.read(y, v) : n(y, v) || y.replace(f, decodeURIComponent), this.json) try {
                                    y = JSON.parse(y)
                                } catch (e) {}
                                if (t === v) {
                                    a = y;
                                    break
                                }
                                t || (a[v] = y)
                            } catch (e) {}
                        }
                        return a
                    }
                }
                return o.set = o, o.get = function(e) {
                    return o.call(o, e)
                }, o.getJSON = function() {
                    return o.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }, o.defaults = {}, o.remove = function(t, n) {
                    o(t, "", e(n, {
                        expires: -1
                    }))
                }, o.withConverter = t, o
            }(function() {})
        })
    }, function(e, t, n) {
        "use strict";
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }();
        var i = window.wafer.utils,
            r = i.bindEvent,
            a = i.elementInView,
            c = i.throttle,
            u = i.unbindEvent;
        e.exports = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), t && (this.elem = t, this._initialized = !1, this._validateWithThrottle = c(this.validate, 50, this), this.init())
            }
            return o(e, [{
                key: "init",
                value: function() {
                    r(window, "scroll", this._validateWithThrottle), this._validateWithThrottle()
                }
            }, {
                key: "setImpTagSrc",
                value: function(e) {
                    var t = e.querySelector("a[data-imp-tag]");
                    if (t) {
                        var n = t.dataset.impTag;
                        e.querySelector("img.img-tag").setAttribute("src", n)
                    }
                }
            }, {
                key: "validate",
                value: function() {
                    !this._initialized && a(this.elem, {}, window.wafer.base.viewport) && (u(window, "scroll", this._validateWithThrottle), this._initialized = !0, this.setImpTagSrc(this.elem))
                }
            }, {
                key: "destroy",
                value: function() {
                    u(window, "scroll", this._validateWithThrottle)
                }
            }]), e
        }()
    }])
});
//# sourceMappingURL=utils.js.map