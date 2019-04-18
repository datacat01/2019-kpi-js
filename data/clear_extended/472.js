! function(e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/js/", i(i.s = 342)
}({
    16: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, i) {
            var n = void 0;
            return function() {
                var r = this,
                    o = arguments;
                var s = i && !n;
                clearTimeout(n), n = setTimeout(function() {
                    n = null, i || e.apply(r, o)
                }, t), s && e.apply(r, o)
            }
        }
    },
    342: function(e, t, i) {
        "use strict";
        var n = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i(9));
        new(function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.header = t.querySelector("[data-header]"), !this.header) return !1;
                this.bindEventListeners(), window.resizeProxyInitialized || new r.default;
                var i = this.bindEventListeners.bind(this);
                window.addEventListener("resize-proxy:width", i, {
                    passive: !0
                })
            }
            return n(e, [{
                key: "bindEventListeners",
                value: function() {
                    var e = window.innerWidth < 768;
                    e && (this.toggle = this.header.querySelector("[data-header-toggle]"), this.boundToggleMain || (this.boundToggleMain = this.toggleMain.bind(this)), this.toggle.removeEventListener("click", this.boundToggleMain), this.toggle.addEventListener("click", this.boundToggleMain), this.metaToggle = this.header.querySelector("[data-meta-toggle]"), this.boundToggleMeta || (this.boundToggleMeta = this.toggleMeta.bind(this)), this.metaToggle.removeEventListener("click", this.boundToggleMeta), this.metaToggle.addEventListener("click", this.boundToggleMeta));
                    this.items = this.header.querySelectorAll([".header__main__item > a", ".header__meta__item--has-subitems > a"].join()), this.boundCloseFlyouts || (this.boundCloseFlyouts = this.closeFlyouts.bind(this));
                    for (var t = 0; t < this.items.length; t++) {
                        var i = this.items[t],
                            n = i.parentNode;
                        e ? (i.removeEventListener("mouseenter", this.openFlyout), n.removeEventListener("mouseleave", this.boundCloseFlyouts), i.addEventListener("click", this.toggleFlyout)) : (i.removeEventListener("click", this.toggleFlyout), i.addEventListener("mouseenter", this.openFlyout), n.addEventListener("mouseleave", this.boundCloseFlyouts))
                    }
                }
            }, {
                key: "toggleMain",
                value: function(e) {
                    e.preventDefault(), this.header.classList.contains("header--main-meta-wrapper-visible") ? (this.header.classList.remove("header--main-meta-wrapper-visible"), this.closeFlyouts()) : this.header.classList.add("header--main-meta-wrapper-visible"), this.toggle.blur()
                }
            }, {
                key: "toggleMeta",
                value: function(e) {
                    e.preventDefault(), this.meta || (this.meta = this.header.querySelector("[data-header-meta]")), this.meta.classList.toggle("header__meta--visible"), this.metaToggle.blur()
                }
            }, {
                key: "toggleFlyout",
                value: function(e) {
                    e.preventDefault(), e.currentTarget.parentNode.classList.toggle("flyout-visible")
                }
            }, {
                key: "openFlyout",
                value: function(e) {
                    e.currentTarget.parentNode.classList.add("flyout-visible")
                }
            }, {
                key: "closeFlyouts",
                value: function() {
                    for (var e = this.header.querySelectorAll(".flyout-visible"), t = 0; t < e.length; t++) e[t].classList.remove("flyout-visible");
                    this.meta || (this.meta = this.header.querySelector("[data-header-meta]")), this.meta.classList.remove("header__meta--visible")
                }
            }]), e
        }())
    },
    9: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i(16));
        var o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), window.resizeProxyInitialized = !0, this.previousSizes = {
                    width: null,
                    height: null
                }, this.updateWindowSize(), window.addEventListener("resize", this.debouncedResizeHandler(), {
                    passive: !0
                })
            }
            return n(e, [{
                key: "debouncedResizeHandler",
                value: function() {
                    return (0, r.default)(this.resizeHandler.bind(this), 250)
                }
            }, {
                key: "resizeHandler",
                value: function() {
                    var e = window.innerWidth,
                        t = window.innerHeight;
                    if (this.previousSizes.width !== e) {
                        var i = document.createEvent("CustomEvent");
                        i.initCustomEvent("resize-proxy:width", !0, !0, {}), window.dispatchEvent(i)
                    }
                    if (this.previousSizes.height !== t) {
                        var n = document.createEvent("CustomEvent");
                        n.initCustomEvent("resize-proxy:height", !0, !0, {}), window.dispatchEvent(n)
                    }
                    var r = document.createEvent("CustomEvent");
                    r.initCustomEvent("resize-proxy", !0, !0, {}), window.dispatchEvent(r), this.updateWindowSize()
                }
            }, {
                key: "updateWindowSize",
                value: function() {
                    var e = this;
                    requestAnimationFrame(function() {
                        e.previousSizes.width = window.innerWidth, e.previousSizes.height = window.innerHeight
                    })
                }
            }]), e
        }();
        t.default = o
    }
});