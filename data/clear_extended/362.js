! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("CAAS_AOLCOM", [], t) : "object" == typeof exports ? exports.CAAS_AOLCOM = t() : e.CAAS_AOLCOM = t()
}(window, function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
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
                for (var i in e) n.d(r, i, function(t) {
                    return e[t]
                }.bind(null, i));
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
        }, n.p = "http://172.141.230.253:8080/public/assets/", n(n.s = 13)
    }({
        13: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, i = n(14),
                o = (r = i) && r.__esModule ? r : {
                    default: r
                };
            t.default = new o.default({
                selector: ".m-yfinance-markets"
            }), e.exports = t.default
        },
        14: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
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

            function i(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            var o = window.wafer.utils.debounce;
            t.default = function() {
                function e(t) {
                    var n = this,
                        r = t.selector;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.elems = [].concat(i(document.querySelectorAll(r))), this.elems.length && (this.elems.forEach(function(e) {
                        return n.init(e)
                    }), window.wafer.ready(function() {
                        window.addEventListener("resize", o(n.resizeAndInitializeCarousel, 200, n)), n.resizeAndInitializeCarousel(), window.wafer.on("tab:selected", function(e) {
                            window.wafer.wafers["wafer-scrollview"].handleResize()
                        })
                    }))
                }
                return r(e, [{
                    key: "init",
                    value: function(e) {
                        var t = this,
                            n = e.querySelector(".market-form-wrapper form"),
                            r = e.querySelector(".search-wrapper");
                        n.addEventListener("submit", this.submitHandler), r.addEventListener("click", function(e) {
                            t.formBtnHandler(e, n)
                        })
                    }
                }, {
                    key: "resizeAndInitializeCarousel",
                    value: function(e) {
                        var t = this;
                        window.innerWidth > 900 ? this.elems.forEach(function(e) {
                            e.classList.contains("indices") && t.disableScrollView(e)
                        }) : this.elems.forEach(function(e) {
                            e.classList.contains("indices") && t.enableScrollView(e)
                        })
                    }
                }, {
                    key: "enableScrollView",
                    value: function(e) {
                        this.showBtns(e), this.showDetailsInline(e), [].concat(i(e.querySelectorAll(".details .tab"))).forEach(function(e) {
                            e.classList.contains("wafer-scrollview") || e.classList.add("wafer-scrollview")
                        }), window.wafer.base.sync(document.body)
                    }
                }, {
                    key: "disableScrollView",
                    value: function(e) {
                        this.hideBtns(e), this.showDetailsBlock(e), [].concat(i(e.querySelectorAll(".details .tab"))).forEach(function(e) {
                            var t = e.querySelector(".slides");
                            t.removeAttribute("style"), [].concat(i(t.querySelectorAll(".inner-tab"))).forEach(function(e) {
                                e.removeAttribute("style")
                            }), window.wafer.base.destroy(e)
                        })
                    }
                }, {
                    key: "showBtns",
                    value: function(e) {
                        [].concat(i(e.querySelectorAll(".prev-btn, .next-btn"))).forEach(function(e) {
                            e.classList.contains("btn--hidden") && e.classList.remove("btn--hidden")
                        })
                    }
                }, {
                    key: "hideBtns",
                    value: function(e) {
                        [].concat(i(e.querySelectorAll(".prev-btn, .next-btn"))).forEach(function(e) {
                            e.classList.contains("btn--hidden") || e.classList.add("btn--hidden")
                        })
                    }
                }, {
                    key: "showDetailsInline",
                    value: function(e) {
                        [].concat(i(e.querySelectorAll(".slides"))).forEach(function(e) {
                            e.classList.contains("slides--inline") || e.classList.add("slides--inline")
                        })
                    }
                }, {
                    key: "showDetailsBlock",
                    value: function(e) {
                        [].concat(i(e.querySelectorAll(".slides"))).forEach(function(e) {
                            e.classList.contains("slides--inline") && e.classList.remove("slides--inline")
                        })
                    }
                }, {
                    key: "submitHandler",
                    value: function(e) {
                        e.preventDefault();
                        var t = e.target,
                            n = t.p.value,
                            r = "" + t.action + n + "?p=" + n;
                        window.open(r, "_blank")
                    }
                }, {
                    key: "formBtnHandler",
                    value: function(e, t) {
                        e.preventDefault();
                        var n = document.createEvent("HTMLEvents");
                        n.initEvent("submit", !0, !1), t.dispatchEvent(n)
                    }
                }]), e
            }(), e.exports = t.default
        }
    })
});
//# sourceMappingURL=YFinanceMarkets.js.map