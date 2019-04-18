! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("CAAS_AOLCOM", [], t) : "object" == typeof exports ? exports.CAAS_AOLCOM = t() : e.CAAS_AOLCOM = t()
}(window, function() {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
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
                for (var r in e) n.d(o, r, function(t) {
                    return e[t]
                }.bind(null, r));
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
        }, n.p = "http://172.141.230.253:8080/public/assets/", n(n.s = 17)
    }({
        17: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, r = n(18),
                a = (o = r) && o.__esModule ? o : {
                    default: o
                };
            t.default = new a.default({
                selector: "power-baby"
            }), e.exports = t.default
        },
        18: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
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
            t.default = function() {
                function e(t) {
                    var n = t.selector;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.elem = document.getElementsByClassName(n)[0], this.elem && this.init()
                }
                return o(e, [{
                    key: "init",
                    value: function() {
                        this.setupPlayer()
                    }
                }, {
                    key: "setupPlayer",
                    value: function() {
                        var e = this,
                            t = document.getElementsByClassName("vdb_player")[0],
                            n = window.setInterval(function() {
                                void 0 !== t.vdb_Player && (e.bindPlayerEvents(t), clearInterval(n))
                            }, 250)
                    }
                }, {
                    key: "bindPlayerEvents",
                    value: function(e) {
                        var t = this,
                            n = document.getElementsByClassName("video-title")[0],
                            o = !1;
                        e.vdb_Player.addEventListener(vdb.VIDEO_END, function() {
                            o = !0
                        }), e.vdb_Player.addEventListener(vdb.VIDEO_START, function(e) {
                            o && (n.textContent = e.data.title), t.updateShareLinks(e)
                        })
                    }
                }, {
                    key: "updateShareLinks",
                    value: function(e) {
                        if (e.data.videoId) {
                            var t = document.getElementsByClassName("facebook-share")[0],
                                n = document.getElementsByClassName("email-share")[0],
                                o = document.getElementsByClassName("video-wrap")[0],
                                r = encodeURIComponent("https://www.aol.com/?vid=" + e.data.videoId + (o.dataset.bid ? "&bid=" + o.dataset.bid : "")),
                                a = "https://www.facebook.com/sharer.php?t=" + encodeURIComponent(e.data.title) + "&u=" + r,
                                u = "mailto:?subject=" + encodeURIComponent("Check this out: " + e.data.title) + "&body=" + r;
                            t.setAttribute("href", a), n.setAttribute("href", u)
                        }
                    }
                }]), e
            }(), e.exports = t.default
        }
    })
});
//# sourceMappingURL=VideoPlayer.js.map