webpackJsonp([0], {
    11: function(t, e, i) {
        ! function(e, i) {
            t.exports = i()
        }("undefined" != typeof self && self, function() {
            return function(t) {
                function e(n) {
                    if (i[n]) return i[n].exports;
                    var s = i[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports
                }
                var i = {};
                return e.m = t, e.c = i, e.d = function(t, i, n) {
                    e.o(t, i) || Object.defineProperty(t, i, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }, e.n = function(t) {
                    var i = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return e.d(i, "a", i), i
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "", e(e.s = 20)
            }([function(t, e, i) {
                "use strict";

                function n(t, e) {
                    var i = function(t) {
                        var e = l({}, t);
                        return delete e.serverDomEngine, delete e.isServerPrerender, e
                    };
                    if (t) return t.originalConfig = i(t), t;
                    var n;
                    if (d)
                        if (e.id && (n = (window.FbsCarouselConfig || {})[e.id]));
                        else {
                            var s = e.getAttribute(u);
                            n = s && (window.FbsCarouselConfig || {})[s]
                        } return n && (n.originalConfig = i(n)), n || c.a
                }

                function s(t, e) {
                    var i = l({}, t),
                        n = function() {
                            i.slidesToScroll = Math.min(i.inView || 1, i.slidesToScroll || 1), i.currentOffset = Math.max(0, Math.min(i.currentOffset, i.inView - 1))
                        };
                    if (e || (i = l({}, c.a, t)), i.isServerPrerender || !d || !f) {
                        if (i.isServerPrerender) {
                            for (var a = i.inView, r = !1 === i.enabled, o = (i.breakpoints || []).slice(0); o.length;) {
                                var h = o.shift();
                                r = r || !1 === h.config.enabled, h.config.inView > a && (a = h.config.inView)
                            }
                            i.inView = a, i.hasDisabledBreakpoint = r
                        }
                        return n(), i
                    }
                    if ((i.breakpoints || []).length)
                        for (var u = 0; u < i.breakpoints.length; u++) {
                            var p = i.breakpoints[u];
                            if (p.breakpoint && window.matchMedia(p.breakpoint.substr(7)).matches) {
                                i = s(l({}, i, v, p.config), !0);
                                break
                            }
                        }
                    return n(), i
                }

                function a(t, e) {
                    return t[r(e, t.length)]
                }

                function r(t, e) {
                    for (; t < e;) t += e;
                    return (e + t) % e
                }

                function o(t, e, i) {
                    return t > e ? [t - e, i - t + e] : [i - e + t, e - t]
                }
                i.d(e, "e", function() {
                    return h
                }), i.d(e, "a", function() {
                    return u
                }), e.b = n, e.c = s, e.g = a, e.f = r, e.d = o;
                var c = i(1),
                    l = this && this.__assign || Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++) {
                            e = arguments[i];
                            for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s])
                        }
                        return t
                    },
                    d = "undefined" != typeof window,
                    h = "undefined" != typeof document,
                    u = "data-fbs-carousel-config-id",
                    v = {
                        breakpoints: []
                    },
                    f = d && !!window.matchMedia
            }, function(t, e, i) {
                "use strict";
                i.d(e, "a", function() {
                    return n
                });
                var n = {
                    currentOffset: 0,
                    inView: 1,
                    speed: 500,
                    showControls: !0,
                    imagePreloadAttribute: "data-bg-image",
                    initialIndex: 0,
                    isServerPrerender: !1
                }
            }, function(t, e, i) {
                "use strict";

                function n(t, e) {
                    var i, n = d.e ? document : e.serverDomEngine,
                        s = {
                            __slides: new Map,
                            __order: [],
                            __index: e.initialIndex || 0
                        },
                        o = [],
                        h = "";
                    t.classList.add("fbs-slider"), t.id ? h = "#" + t.id : t.hasAttribute(d.a) ? (h = t.getAttribute(d.a), t.classList.add(h)) : (h = "_" + r(s.__slides), t.setAttribute(d.a, h), t.classList.add(h));
                    for (var u = 0; u < t.children.length; u++) {
                        var _ = t.children.item(u);
                        if (_.classList.contains(g)) {
                            if (s.__controls) {
                                _.remove(), u--;
                                continue
                            }
                            var m = _.querySelector("." + w),
                                y = _.querySelector("." + b);
                            s.__controls = {
                                __wrapper: _,
                                __left: m,
                                __right: y
                            }
                        } else if (_.classList.contains(f)) {
                            if (i) {
                                _.remove(), u--;
                                continue
                            }
                            i = _
                        } else o.push(_)
                    }
                    var L = function(i, n) {
                        i.forEach(function(i) {
                            if (e.slides) {
                                for (var o = void 0, c = i.getAttribute(x), l = 0; l < e.slides.length; l++)
                                    if (c && c === e.slides[l].id) {
                                        o = e.slides[l];
                                        break
                                    } o ? (o.domNode = i, s.__slides.set(o.id, o)) : i.remove()
                            } else {
                                var d = {
                                    id: r(s.__slides),
                                    domNode: i,
                                    scope: {}
                                };
                                a(d, e), s.__slides.set(d.id, d), s.__order.push(d.id)
                            }
                            n && t.removeChild(i)
                        })
                    };
                    if (i ? (s.__track = i.querySelector("." + p), L(Array.prototype.slice.call(s.__track.children)), o.forEach(function(t) {
                            t.remove()
                        })) : (L(o, !0), i = n.createElement("div"), i.classList.add(f), s.__track = n.createElement("div"), s.__track.classList.add(p), i.appendChild(s.__track), t.insertBefore(i, t.childNodes[0])), s.__wrapper = i, s.__controls || (s.__controls = {}), e.slides)
                        for (var u = 0; u < e.slides.length; u++) {
                            var k = {};
                            e.slides[u].id || (k.id = r(s.__slides)), s.__slides.has(k.id) || (k = v({}, k, e.slides[u]), s.__slides.set(k.id, k)), s.__order.push(k.id)
                        }
                    return e.looping && e.inView + 2 * e.slidesToScroll > s.__order.length && (e.looping = !1), s.__active_slides = c(t, s, e, !0), Object(l.a)(t, e, s, h), s
                }

                function s(t, e) {
                    if (!t.__wrapper) {
                        var i = e.createElement("div");
                        i.classList.add(g), t.__wrapper = i
                    }
                    return ["left", "right"].forEach(function(i) {
                        if (!t["__" + i]) {
                            var n = e.createElement("button"),
                                s = "arrow" + ("left" === i ? "Left" : "Right");
                            n.innerHTML = u.a[s], n.classList.add("left" === i ? w : b), t.__wrapper.appendChild(n), t["__" + i] = n
                        }
                    }), t
                }

                function a(t, e) {
                    var i, n = d.e ? document : e.serverDomEngine;
                    if (t.domNode) i = t.domNode;
                    else if (t.textContent) {
                        var s = n.createElement("div");
                        s.innerHTML = t.textContent, delete t.textContent, s.firstElementChild.classList.contains(_) && (s = s.firstElementChild), i = s
                    } else e.slideGenerator ? i = e.slideGenerator(t.scope, d.e ? document : e.serverDomEngine) : (console.error("WARNING: Slide " + t.id + " was generated with no content! Provide a generator function."), i = n.createElement("div"));
                    if (i.classList.add(_), i.setAttribute(x, t.id), !e.isServerPrerender) {
                        var a = e.imagePreloadAttribute.split("-").filter(function(t) {
                            return "data" !== t.toLowerCase()
                        }).map(function(t, e) {
                            return 0 === e ? t : "" + t.slice(0, 1).toUpperCase() + t.slice(1)
                        }).join("");
                        if (i.imagesPreloaded !== a) {
                            for (var r = i.querySelectorAll("*[" + e.imagePreloadAttribute + "]"), o = 0; o < r.length; o++) r[o].style.backgroundImage = "url(" + r[o].dataset[a] + ")";
                            i.imagesPreloaded = a
                        }
                    }
                    return t.domNode = i, i.fbsCalledback || e.slideGeneratedCallback && (e.slideGeneratedCallback(t), i.fbsCalledback = !0), i
                }

                function r(t) {
                    var e;
                    do {
                        e = (1e20 * Math.random()).toString(28)
                    } while (t.has(e));
                    return e
                }

                function o(t, e, i) {
                    var n = i.showControls && !1 !== i.enabled;
                    if (n && !e.__controls.__wrapper) {
                        var a = d.e ? document : i.serverDomEngine;
                        e.__controls = s(e.__controls, a), t.insertBefore(e.__controls.__wrapper, e.__wrapper.nextSibling)
                    } else e.__controls.__wrapper && (n ? t.classList.remove(m) : t.classList.add(m));
                    var r = function(t, e) {
                            e ? t.classList.remove(y) : t.classList.add(y)
                        },
                        o = e.__controls.__left,
                        c = e.__controls.__right;
                    o && r(o, !(!i.looping && 0 === e.__index || i.isServerPrerender)), c && r(c, !(!i.looping && e.__index + i.inView === e.__order.length || i.isServerPrerender))
                }

                function c(t, e, i, n) {
                    void 0 === n && (n = !1);
                    var s = [],
                        r = i.isServerPrerender ? e.__index : e.__index - i.slidesToScroll;
                    i.looping || (r = Math.max(0, r));
                    var c = e.__index + i.inView + (i.isServerPrerender ? 0 : i.slidesToScroll);
                    i.looping || (c = Math.min(e.__order.length, c)), (!1 === i.enabled || i.isServerPrerender && i.hasDisabledBreakpoint) && (r = 0, c = e.__order.length);
                    for (var l = 0; l < e.__track.childNodes.length; l++) e.__track.removeChild(e.__track.childNodes[0]), l--;
                    n && (e.__viewWidth = e.__wrapper.getBoundingClientRect().width, e.__slideWidth = e.__viewWidth / i.inView, i.isServerPrerender || !1 === i.enabled ? e.__track.style.width = "100%" : e.__track.style.width = e.__slideWidth * (c - r) + "px");
                    var h = -e.__slideWidth * i.slidesToScroll;
                    i.looping || (h = -e.__slideWidth * Math.min(i.slidesToScroll, e.__index)), (i.isServerPrerender || !1 === i.enabled) && (h = 0), e.__track.style.transform = "translateX(" + h + "px)", e.__translationOffset = h;
                    for (var l = r; l < c; l++) {
                        var u = Object(d.g)(e.__order, l),
                            v = e.__slides.get(u),
                            f = a(v, i),
                            p = l >= e.__index && l < e.__index + i.inView;
                        s.push({
                            inView: p,
                            slideData: v
                        }), p && l === e.__index + i.currentOffset ? f.classList.add("active", "primary") : p ? (f.classList.add("active"), f.classList.remove("primary")) : f.classList.remove("active", "primary"), i.isServerPrerender || !1 === i.enabled ? !1 === i.enabled && (f.style.width = "") : f.style.width = e.__slideWidth + "px", e.__track.appendChild(f)
                    }
                    return s.length === (e.__active_slides || []).length || i.isServerPrerender || !1 === i.enabled || (e.__track.style.width = e.__slideWidth * (c - r) + "px"), o(t, e, i), s
                }
                i.d(e, "e", function() {
                    return p
                }), i.d(e, "d", function() {
                    return _
                }), i.d(e, "a", function() {
                    return g
                }), i.d(e, "c", function() {
                    return x
                }), i.d(e, "b", function() {
                    return L
                }), e.g = n, e.f = r, e.h = c;
                var l = i(4),
                    d = i(0),
                    h = i(5),
                    u = i.n(h),
                    v = this && this.__assign || Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++) {
                            e = arguments[i];
                            for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s])
                        }
                        return t
                    },
                    f = "fbs-slider__slides-wrapper",
                    p = "fbs-slider__slides",
                    _ = "fbs-slider__slide",
                    g = "fbs-slider__controls",
                    m = "fbs-slider--no-controls",
                    w = "fbs-slider__control-left",
                    b = "fbs-slider__control-right",
                    y = "disabled",
                    x = "data-fbs-carousel-slide-id",
                    L = "data-fbs-carousel-prerender-styles"
            }, function(t, e, i) {
                "use strict";
                i.d(e, "a", function() {
                    return r
                });
                var n = i(0),
                    s = i(2),
                    a = this && this.__assign || Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++) {
                            e = arguments[i];
                            for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s])
                        }
                        return t
                    },
                    r = function() {
                        function t(t, e) {
                            this.el = t, this.isAnimating = !1, this.__config = e
                        }
                        return t.prototype.init = function() {
                            this.el && (this.loadConfiguration(this.__config), this.loadState(), this.el.classList.add("fbs-slider--initialized"), this.registerEvents(), this.triggerEvent("sliderInitialized", {
                                currentSlide: this.getCurrentSlide()
                            }))
                        }, t.prototype.uninit = function() {
                            this.unregisterEvents(), this.triggerEvent("sliderDestroyed", {
                                currentSlide: this.getCurrentSlide()
                            })
                        }, t.prototype.loadConfiguration = function(t) {
                            this.__config = Object(n.b)(t, this.el), this.__active_config = Object(n.c)(this.__config)
                        }, t.prototype.loadState = function() {
                            this.__state = Object(s.g)(this.el, this.__active_config)
                        }, t.prototype.registerEvents = function() {
                            var t = this;
                            this.__state.__controls.__left && this.__state.__controls.__left.addEventListener("click", function() {
                                return t.goPrev()
                            }), this.__state.__controls.__right && this.__state.__controls.__right.addEventListener("click", function() {
                                return t.goNext()
                            }), this.handleSwipe(), "undefined" != typeof window && (window.addEventListener("resize", this.resize.bind(this)), window.addEventListener("orientationchange", this.resize.bind(this)))
                        }, t.prototype.unregisterEvents = function() {}, t.prototype.go = function(e) {
                            var i = this;
                            void 0 === e && (e = 0);
                            var a = e;
                            if (this.isAnimating) return !1;
                            if (this.__active_config.looping || (this.__state.__index + a < 0 && (a = -this.__state.__index), this.__state.__index + a + this.__active_config.inView > this.__state.__order.length && (a = Math.max(0, this.__state.__order.length - (this.__state.__index + this.__active_config.inView)))), !1 === this.__active_config.enabled || a % this.__state.__order.length == 0) return !1;
                            var r = this.getCurrentSlide(),
                                o = this.__state.__slides.get(Object(n.g)(this.__state.__order, this.__state.__index + a + this.__active_config.currentOffset));
                            this.triggerEvent("slideChangeStart", {
                                currentSlide: r,
                                targetSlide: o
                            });
                            var c = function() {
                                    i.__state.__index = Object(n.f)(i.__state.__index + a, i.__state.__order.length), i.__state.__active_slides = Object(s.h)(i.el, i.__state, i.__active_config, !1), i.triggerEvent("slideChanged", {
                                        previousSlide: r,
                                        currentSlide: o
                                    })
                                }.bind(this),
                                l = Object(n.d)(this.__state.__index, Object(n.f)(this.__state.__index + a, this.__state.__order.length), this.__state.__order.length);
                            if (this.__active_config.looping && l[0] > this.__active_config.slidesToScroll && l[1] > this.__active_config.slidesToScroll || !this.__active_config.looping && Math.abs(a) > this.__active_config.slidesToScroll) return c(), !0;
                            this.isAnimating = !0, this.__state.__track.classList.add(t.ANIMATING_CLASS);
                            var d = this.__active_config.looping ? l[0] > l[1] ? l[1] : -l[0] : a,
                                h = this.__state.__translationOffset - this.__state.__slideWidth * d;
                            return setTimeout(function() {
                                i.__state.__track.style.transform = "translateX(" + h + "px)"
                            }, 0), setTimeout(function() {
                                i.isAnimating = !1, i.__state.__track.classList.remove(t.ANIMATING_CLASS), c()
                            }, this.__active_config.speed), !0
                        }, t.prototype.goPrev = function() {
                            return this.go(-this.__active_config.slidesToScroll)
                        }, t.prototype.goNext = function() {
                            return this.go(this.__active_config.slidesToScroll)
                        }, t.prototype.goToIndex = function(t) {
                            return this.go(t - this.__state.__index)
                        }, t.prototype.goToSlideById = function(t) {
                            var e = this.__state.__order.indexOf(t);
                            return -1 !== e && this.goToIndex(e)
                        }, t.prototype.handleSwipe = function() {
                            function t(t, e) {
                                return t > e ? t - e > a : e - t > a
                            }
                            var e = this,
                                i = 0,
                                n = 0,
                                s = 0,
                                a = 50;
                            this.el.addEventListener("touchstart", function(t) {
                                i = t.changedTouches[0].screenX, s = window.pageYOffset
                            }, !1), this.el.addEventListener("touchend", function(a) {
                                n = a.changedTouches[0].screenX, t(s, window.pageYOffset) || (n < i && i - n > 50 ? e.go(e.__active_config.slidesToScroll) : n > i && n - i > 50 && e.go(-e.__active_config.slidesToScroll))
                            }, !1)
                        }, t.prototype.triggerEvent = function(t, e) {
                            "undefined" != typeof CustomEvent && this.el.dispatchEvent(new CustomEvent(t, {
                                detail: a({}, e, {
                                    activeSlides: this.__state.__active_slides
                                })
                            }))
                        }, t.prototype.resize = function() {
                            this.loadConfiguration(this.__config), this.__active_config.looping && this.__active_config.inView + 2 * this.__active_config.slidesToScroll > this.__state.__order.length && (this.__active_config.looping = !1), !this.__active_config.looping && this.__state.__index + this.__active_config.inView > this.__state.__order.length && (this.__state.__index = this.__state.__order.length - this.__active_config.inView), this.__state.__active_slides = Object(s.h)(this.el, this.__state, this.__active_config, !0), this.triggerEvent("sliderResized", {
                                currentSlide: this.getCurrentSlide()
                            })
                        }, t.prototype.getCurrentSlide = function() {
                            return this.__state.__slides.get(this.__state.__order[this.__state.__index + this.__active_config.currentOffset])
                        }, t.prototype.getActiveSlides = function() {
                            return this.__state.__active_slides
                        }, t.prototype.addSlides = function(t, e, i) {
                            void 0 === i && (i = !0);
                            var n;
                            e || 0 === e || (e = this.__state.__order.length);
                            for (var a = [], r = 0; r < t.length; r++) t[r].id && !this.__state.__slides.has(t[r].id) || (t[r].id = Object(s.f)(this.__state.__slides)), this.__state.__slides.set(t[r].id, t[r]), a.push(t[r].id);
                            return (n = this.__state.__order).splice.apply(n, [Math.max(0, Math.min(this.__state.__order.length, e)), 0].concat(a)), i && this.__state.__index >= e && (this.__state.__index += a.length), this.resize(), a
                        }, t.prototype.addSlide = function(t, e, i) {
                            return void 0 === i && (i = !0), this.addSlides([t], e, i)[0]
                        }, t.prototype.removeSlides = function(t, e) {
                            void 0 === e && (e = !0);
                            for (var i = [], n = 0, s = 0; s < t.length; s++) {
                                var a = this.__state.__order.indexOf(t[s]);
                                if (-1 !== a) {
                                    var r = this.__state.__order[a];
                                    a < this.__state.__index && n--, i.push(r), this.__state.__slides.delete(r), this.__state.__order.splice(a, 1)
                                }
                            }
                            return e && (this.__state.__index += n), this.resize(), i
                        }, t.prototype.removeSlide = function(t, e) {
                            return void 0 === e && (e = !0), this.removeSlides([t], e)[0]
                        }, t.prototype.removeSlidesByIndex = function(t, e) {
                            void 0 === e && (e = !0);
                            for (var i = [], n = 0; n < t.length; n++) {
                                var s = this.__state.__order[t[n]];
                                s && -1 === i.indexOf(s) && i.push(s)
                            }
                            return i.length > 0 ? this.removeSlides(i, e) : []
                        }, t.prototype.removeSlideByIndex = function(t, e) {
                            return void 0 === e && (e = !0), this.removeSlidesByIndex([t], e)[0]
                        }, t.prototype.getEl = function() {
                            return this.el
                        }, t.ANIMATING_CLASS = "is-animating", t
                    }()
            }, function(t, e, i) {
                "use strict";

                function n(t, e, i, n) {
                    if (e.isServerPrerender) {
                        var c = e.hasDisabledBreakpoint ? 0 : i.__index,
                            l = e.hasDisabledBreakpoint ? i.__active_slides.length : i.__index + e.inView,
                            d = [];
                        (e.originalConfig.slides || []).length ? i.__order.slice(c, l).forEach(function(t, n) {
                            var s = i.__slides.get(t);
                            d.push(s), e.originalConfig.slides[c + n].id = s.id
                        }) : (e.originalConfig.slides = [], i.__order.forEach(function(t, n) {
                            var s = o({}, i.__slides.get(t));
                            n < c || n >= l ? (s.textContent = s.domNode.outerHTML, delete s.id) : d.push(o({}, s)), delete s.domNode, e.originalConfig.slides.push(s)
                        }));
                        for (var h = a.e ? document : e.serverDomEngine, u = h.createElement("style"), v = 0 === n.indexOf("#") ? n : "." + n, f = "\n\t\t\tfbs-carousel {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t" + v + " ." + r.e + " {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t", p = 0, _ = [{
                                config: o({}, s.a, Object.keys(e.originalConfig).length > 0 ? e.originalConfig : e)
                            }], g = [f], m = function(t) {
                                var e = t.config;
                                t.breakpoint && g.push(t.breakpoint + " {"), g.push("\n\t\t\t\t" + v + " ." + r.a + " {\n\t\t\t\t\tdisplay: " + (!1 !== e.enabled && !1 !== e.showControls ? "block" : "none") + ";\n\t\t\t\t}\n\t\t\t");
                                for (var i = 0; i < d.length; i++) {
                                    var n = d[i];
                                    if (g.push(v + " ." + r.d + "[" + r.c + '="' + n.id + '"] {'), i < e.inView || !1 === e.enabled) {
                                        if (g.push("\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\twidth: " + (!1 === e.enabled ? "auto" : 100 / e.inView + "%") + ";}\n\t\t\t\t\t"), n.domNode)
                                            for (var s = e.imagePreloadAttribute || "data-bg-image", a = n.domNode.querySelectorAll("*[" + s + "]"), o = 0; o < a.length; o++) {
                                                var c = a.item(o);
                                                g.push("\n\t\t\t\t\t\t\t \t" + v + " ." + r.d + "[" + r.c + '="' + n.id + '"] .ssr-i-' + p + " {\n\t\t\t\t\t\t\t\tbackground-image: url(" + c.getAttribute(s) + ");}\n\t\t\t\t\t\t\t"), c.classList.add("ssr-i-" + p++)
                                            }
                                    } else g.push("display: none;}")
                                }
                                t.breakpoint && g.push("}")
                            }; _.length > 0;) ! function() {
                            var t = _.pop();
                            ((t.config || {}).breakpoints || []).length && _.push.apply(_, t.config.breakpoints.map(function(e) {
                                return o({}, e, {
                                    config: o({}, t.config, {
                                        breakpoints: []
                                    }, e.config)
                                })
                            })), m(t)
                        }();
                        u.setAttribute(r.b, ""), u.setAttribute("type", "text/css"), u.innerHTML = g.join("\n").replace(/\t/gi, ""), t.insertBefore(u, t.firstElementChild);
                        var w = h.createElement("script");
                        w.appendChild(h.createTextNode(("\n\t\twindow.FbsCarouselConfig = window.FbsCarouselConfig || {};\n\t\twindow.FbsCarouselConfig['" + v.slice(1) + "'] = " + JSON.stringify(e.originalConfig) + ";\n\t\t").replace(/\t/gi, ""))), t.appendChild(w)
                    }
                }
                e.a = n;
                var s = i(1),
                    a = i(0),
                    r = i(2),
                    o = this && this.__assign || Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++) {
                            e = arguments[i];
                            for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s])
                        }
                        return t
                    }
            }, function(t, e) {
                t.exports = {
                    arrowLeft: '<svg class="fs-icon fs-icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 10h16v2h-16z"/><path transform="rotate(-45.001 4.5 8.877)" d="M.5 7.9h8v2h-8z"/><path transform="rotate(45.001 4.5 13.124)" d="M.5 12.1h8v2h-8z"/></svg>',
                    arrowRight: '<svg class="fs-icon fs-icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(-180 8.964 11)" d="M1 10h16v2H1z"/><path transform="rotate(134.999 14.965 13.124)" d="M11 12.1h8v2h-8z"/><path transform="rotate(-134.999 14.965 8.877)" d="M11 7.9h8v2h-8z"/></svg>',
                    chevronDown: '<svg class="fs-icon fs-icon--chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/><path transform="rotate(-45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/></svg>',
                    chevronLeft: '<svg class="fs-icon fs-icon--chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-45.001 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/><path transform="rotate(45.001 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/></svg>',
                    chevronRight: '<svg class="fs-icon fs-icon--chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(134.999 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/><path transform="rotate(-134.999 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/></svg>',
                    chevronUp: '<svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/></svg>',
                    close: '<svg class="fs-icon fs-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(45.001 10 10)" d="M2 9h16v2H2z"/><path transform="rotate(134.999 10 10)" d="M2 9h16v2H2z"/></svg>',
                    forbesLogo: '<svg class="fs-icon fs-icon--forbes-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 54"><path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z"/></svg>',
                    hamburger: '<svg class="fs-icon fs-icon--hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z"/></svg>',
                    play: '<svg class="fs-icon fs-icon--play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 2v16.9l11.1-8.5z"/></svg>',
                    search: '<svg class="fs-icon fs-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="2" cx="8.5" cy="9" r="6"/><path transform="rotate(45.001 14.922 15.421)" d="M12 14.4h5.9v2H12z"/></svg>'
                }
            }, function(t, e, i) {
                "use strict";
                i.d(e, "a", function() {
                    return a
                });
                var n = i(3),
                    s = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        };
                        return function(e, i) {
                            function n() {
                                this.constructor = e
                            }
                            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                        }
                    }(),
                    a = function(t) {
                        function e(e) {
                            var i = t.call(this) || this;
                            return i.carousel = new n.a(i), i
                        }
                        return s(e, t), e.prototype.connectedCallback = function() {
                            this.carousel.init()
                        }, e.prototype.disconnectedCallback = function() {
                            this.carousel.uninit()
                        }, Object.defineProperty(e.prototype, "currentSlide", {
                            get: function() {
                                return this.carousel.getCurrentSlide()
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "activeSlides", {
                            get: function() {
                                return this.carousel.getActiveSlides()
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.rerender = function() {
                            this.carousel.resize()
                        }, e.prototype.prevSlide = function() {
                            return this.carousel.goPrev()
                        }, e.prototype.nextSlide = function() {
                            return this.carousel.goNext()
                        }, e.prototype.go = function(t) {
                            return this.carousel.go(t)
                        }, e.prototype.goToIndex = function(t) {
                            return this.carousel.goToIndex(t)
                        }, e.prototype.goToSlideById = function(t) {
                            return this.carousel.goToSlideById(t)
                        }, e.prototype.addSlide = function(t, e, i) {
                            return void 0 === i && (i = !0), this.carousel.addSlide(t, e, i)
                        }, e.prototype.addSlides = function(t, e, i) {
                            return void 0 === i && (i = !0), this.carousel.addSlides(t, e, i)
                        }, e.prototype.removeSlide = function(t, e) {
                            return void 0 === e && (e = !0), this.carousel.removeSlide(t, e)
                        }, e.prototype.removeSlides = function(t, e) {
                            return void 0 === e && (e = !0), this.carousel.removeSlides(t, e)
                        }, e.prototype.removeSlideByIndex = function(t, e) {
                            return void 0 === e && (e = !0), this.carousel.removeSlideByIndex(t, e)
                        }, e.prototype.removeSlidesByIndex = function(t, e) {
                            return void 0 === e && (e = !0), this.carousel.removeSlidesByIndex(t, e)
                        }, e
                    }(HTMLElement)
            }, , , , , , , , , , , , , , function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = i(21);
                i.d(e, "FbsCarousel", function() {
                    return n.a
                }), i.d(e, "FbsCarouselComponent", function() {
                    return n.b
                })
            }, function(t, e, i) {
                "use strict";
                var n = i(3);
                i.d(e, "a", function() {
                    return n.a
                });
                var s = i(6);
                i.d(e, "b", function() {
                    return s.a
                })
            }])
        })
    },
    121: function(t, e, i) {
        "use strict";
        i.d(e, "b", function() {
            return o
        }), i.d(e, "c", function() {
            return c
        }), i.d(e, "a", function() {
            return d
        });
        var n = i(288),
            s = i(290),
            a = i(292),
            r = document.querySelector(".data-viz__active-number"),
            o = document.querySelector(".data-viz__list"),
            c = new s.a(o, r),
            l = new a.a,
            d = new n.a(l, c)
    },
    122: function(t, e) {
        t.exports = {
            amazonBooks: '<svg class="fs-icon fs-icon--amazon-books" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 6.1s3.8-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1zM10.5 6.1s3.9-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1z"/></svg>',
            arrowDown: '<svg class="fs-icon fs-icon--arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#020202" d="M30 60l25-30H40V0H20v30H5l25 30z"/></svg>',
            arrowLeft: '<svg class="fs-icon fs-icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 10h16v2h-16z"/><path transform="rotate(-45.001 4.5 8.877)" d="M.5 7.9h8v2h-8z"/><path transform="rotate(45.001 4.5 13.124)" d="M.5 12.1h8v2h-8z"/></svg>',
            arrowRight: '<svg class="fs-icon fs-icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(-180 8.964 11)" d="M1 10h16v2H1z"/><path transform="rotate(134.999 14.965 13.124)" d="M11 12.1h8v2h-8z"/><path transform="rotate(-134.999 14.965 8.877)" d="M11 7.9h8v2h-8z"/></svg>',
            arrowUp: '<svg class="fs-icon fs-icon--arrow-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#020202" d="M30 0L5 30h15v30h20V30h15L30 0z"/></svg>',
            chevronDown: '<svg class="fs-icon fs-icon--chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/><path transform="rotate(-45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/></svg>',
            chevronLeft: '<svg class="fs-icon fs-icon--chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-45.001 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/><path transform="rotate(45.001 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/></svg>',
            chevronRight: '<svg class="fs-icon fs-icon--chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(134.999 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/><path transform="rotate(-134.999 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/></svg>',
            chevronUp: '<svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/></svg>',
            close: '<svg class="fs-icon fs-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(45.001 10 10)" d="M2 9h16v2H2z"/><path transform="rotate(134.999 10 10)" d="M2 9h16v2H2z"/></svg>',
            email: '<svg class="fs-icon fs-icon--email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF106_" d="M17 15.2H3.2l5.2-4.3.6.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4l.6-.5 5.2 4.4zm.6-9.2v8l-4.8-4 4.8-4zm-15 8V6l4.8 4-4.8 4zm7.8-3.6c-.2.2-.4.2-.6 0L3.6 5.2h13l-6.2 5.2z"/></svg>',
            facebook: '<svg class="fs-icon fs-icon--facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M32.9 49H25V30h-3.9v-6.6H25v-3.9c0-5.4 2.2-8.5 8.5-8.5h5.2v6.6h-3.3c-2.5 0-2.6.9-2.6 2.6v3.3h5.9l-.5 6.5H33v19h-.1z"/></svg>',
            forbesF: '<svg class="fs-icon fs-icon--forbes-f" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.5 7l-.8.2C15 4.9 13.8 3.7 12 3.7H9.5C9.4 5 9.4 7 9.4 9.9h1.7c.9 0 1.6-.7 1.9-2.1h.6V13H13c-.3-1.4-.9-2.1-1.9-2.2H9.4c0 1.6.1 3.1.2 4.4.1.7.2 1.2.4 1.5.2.3.6.5 1.1.6l.8.1v.6H3.6v-.6l.7-.1c.9-.1 1.4-.8 1.5-2.1.3-3.3.3-6.5 0-9.6-.1-1.3-.6-2-1.5-2.1l-.7-.2v-.6h12.8l.1 4.3z"/></svg>',
            forbesLogo: '<svg class="fs-icon fs-icon--forbes-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 54"><path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z"/></svg>',
            georgiaUaquo: '<svg class="fs-icon fs-icon--georgia-uaquo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#010101" d="M9.9 9.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.6-5.3L2.3 19l-.8-1 6.8-7.2.6-.6c.3-.2.6-.4 1-.4zm0-7.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.5-5.3-7.5 5.3-.8-1 6.8-7.2c.1-.2.4-.3.7-.6.1-.2.5-.3.8-.3z"/></svg>',
            hamburger: '<svg class="fs-icon fs-icon--hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z"/></svg>',
            info: '<svg class="fs-icon fs-icon--info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#010101" d="M28.3 38.4h3.3v-10h-3.3v10zM30 13.3c-9.2 0-16.7 7.5-16.7 16.7S20.8 46.7 30 46.7 46.7 39.2 46.7 30 39.2 13.3 30 13.3zm0 30.1c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4 13.4 6 13.4 13.4-6 13.4-13.4 13.4zM28.3 25h3.3v-3.3h-3.3V25z"/></svg>',
            instagram: '<svg class="fs-icon fs-icon--instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" d="M38.6 46.3H21.4c-4.3 0-7.7-3.5-7.7-7.7V21.4c0-4.3 3.5-7.7 7.7-7.7h17.1c4.3 0 7.7 3.5 7.7 7.7v17.1c.1 4.3-3.4 7.8-7.6 7.8z"/><circle fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" cx="30" cy="30" r="7.4"/><circle cx="38.7" cy="19.3" r="1.8"/></svg>',
            linkedin: '<svg class="fs-icon fs-icon--linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M44.9 33.2v11h-6.4V34c0-2.6-.9-4.3-3.2-4.3-1.8 0-2.8 1.2-3.3 2.3-.2.4-.2 1-.2 1.6v10.7h-6.4s.1-17.4 0-19.2h6.4V27.9v-.1c.8-1.3 2.4-3.2 5.8-3.2 4.1 0 7.3 2.7 7.3 8.6zM18.7 15.8c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.5 3.6-3.3 0-1.9-1.3-3.3-3.5-3.3zm-3.2 28.4h6.4V25h-6.4v19.2z"/></svg>',
            phone: '<svg class="fs-icon fs-icon--phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF14E_" d="M2.6 7.6c-.2-.8-.1-1.5.3-2.3S3.7 4 4.4 3.7c.2-.1.4-.1.6.1l3 3c.3.3.2.5 0 .8-.5.6-.8 1-.8 1.3s.2.7.8 1.3c.4.5 1.2 1.2 2.2 2 .6.5 1 .4 1.4-.1.3-.5.5-.7.7-.7s.5.1.9.5l.9.6c.3.2.7.5 1 .7.4.3.7.5.9.6.4.3.4.6.2.9-1.8 2.5-3.9 2.9-6.4 1.2-2.9-2.1-5.1-4.5-6.6-7.1 0-.1-.1-.3-.4-.8l-.2-.2v-.2zm7.2-3.4c1.5.1 2.7.7 3.7 1.7s1.6 2.3 1.7 3.8c0 .3-.1.5-.4.5-.3 0-.5-.1-.5-.4-.1-1.2-.6-2.3-1.5-3.1-.9-.9-1.9-1.4-3.1-1.5-.1 0-.2 0-.3-.1-.1-.2-.2-.3-.2-.4 0-.3.2-.5.6-.5zm-.3-1.8c0-.3.2-.4.5-.4 2.1.1 3.9.8 5.3 2.2s2.2 3.2 2.2 5.3c0 .3-.1.5-.4.5-.1 0-.2 0-.3-.1-.1-.1-.2-.2-.2-.3-.1-1.9-.7-3.5-2-4.7s-2.8-1.9-4.7-2c-.1 0-.2 0-.3-.1-.1-.2-.1-.3-.1-.4z"/></svg>',
            play: '<svg class="fs-icon fs-icon--play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 2v16.9l11.1-8.5z"/></svg>',
            previewEye: '<svg class="fs-icon fs-icon--preview-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4.1C5.9 4.1 2.3 6.5.5 10c1.8 3.6 5.4 6 9.5 6s7.7-2.4 9.5-5.9c-1.8-3.6-5.4-6-9.5-6zm4.7 3.2c1.1.7 2.1 1.7 2.8 2.8-.7 1.1-1.7 2.1-2.8 2.8-1.4.9-3 1.4-4.7 1.4-1.7 0-3.3-.5-4.7-1.4-1.1-.7-2.1-1.7-2.8-2.8.8-1.2 1.7-2.1 2.8-2.8.1 0 .1-.1.2-.1-.1.4-.3 1-.3 1.6 0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8c0-.6-.1-1.1-.3-1.6 0 0 .1 0 .2.1zm-5.1 1c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z"/></svg>',
            reddit: '<svg class="fs-icon fs-icon--reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30"/><path fill="#FFF" d="M50 30c0-2.4-2-4.4-4.4-4.4-1.2 0-2.2.5-3 1.2-3-2.2-7.1-3.6-11.7-3.7l2-9.4 6.5 1.4c.1 1.7 1.4 3 3.1 3 1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1c-1.2 0-2.3.7-2.8 1.7l-7.3-1.5c-.2 0-.4 0-.6.1-.2.1-.3.3-.3.5l-2.2 10.5c-4.7.1-8.8 1.5-11.9 3.7-.8-.8-1.9-1.2-3-1.2-2.4 0-4.4 2-4.4 4.4 0 1.8 1.1 3.3 2.6 4-.1.4-.1.9-.1 1.3 0 6.7 7.8 12.2 17.5 12.2s17.5-5.5 17.5-12.2c0-.4 0-.9-.1-1.3 1.5-.8 2.6-2.3 2.6-4.1zm-30 3.1c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7.1-3.1-1.3-3.1-3.1zm17.4 8.3c-2.1 2.1-6.2 2.3-7.4 2.3-1.2 0-5.3-.2-7.4-2.3-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0 1.3 1.3 4.2 1.8 6.3 1.8s4.9-.5 6.3-1.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1zm-.5-5.1c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z"/></svg>',
            reply: '<svg class="fs-icon fs-icon--reply" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.3 2.8C1.5 7.5 7.7 9.8 13 9V5.6l5.5 6.2-5.5 6.1v-3.4c-3.5.1-6.3-.7-8.2-2.1-3-2.2-3.8-5.8-1.5-9.6z"/></svg>',
            rss: '<svg class="fs-icon fs-icon--rss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.2 13.6c-.6 0-1.1.2-1.5.6-.5.5-.7 1-.7 1.6 0 .6.2 1.1.6 1.5.5.5 1 .7 1.6.7.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5c-.4-.6-.9-.8-1.5-.8zm0 0M9.2 10.8c-.9-.9-1.8-1.6-2.9-2.1-1.1-.5-2.3-.8-3.5-.9h-.1c-.2 0-.3.1-.5.2-.1.1-.2.3-.2.5V10c0 .2.1.4.2.5.1.1.3.2.5.2 1.7.2 3.2.9 4.4 2.1C8.3 14 9 15.5 9.2 17.2c0 .2.1.3.2.5.2.2.3.3.5.3h1.5c.2 0 .4-.1.5-.2.1-.2.2-.3.2-.5-.1-1.2-.4-2.4-.9-3.5-.4-1.2-1.1-2.1-2-3zm0 0"/><path d="M16.6 11.5c-.8-1.8-1.9-3.4-3.3-4.8s-3-2.5-4.8-3.3C6.6 2.6 4.7 2.1 2.8 2c-.3 0-.4.1-.6.2-.1.1-.2.3-.2.5v1.6c0 .2.1.4.2.5.1.2.3.3.5.3 1.6.1 3.2.5 4.6 1.2 1.5.7 2.7 1.6 3.8 2.6 1.1 1.1 2 2.4 2.6 3.8.7 1.5 1.1 3 1.1 4.6 0 .2.1.3.2.5.1.1.3.2.5.2h1.6c.2 0 .4-.1.5-.2.2-.2.2-.3.2-.5.1-2-.4-3.9-1.2-5.8zm0 0"/></svg>',
            search: '<svg class="fs-icon fs-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="2" cx="8.5" cy="9" r="6"/><path transform="rotate(45.001 14.922 15.421)" d="M12 14.4h5.9v2H12z"/></svg>',
            share: '<svg class="fs-icon fs-icon--share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#010101" d="M34 19.6V4.9L59.2 28 34 51.2V36.5C17.3 32.9 1.8 38.5.8 55.4-1 40.8 3.9 31.1 11.3 25.5c6.3-4.8 15.2-6.6 22.7-5.9z"/></svg>',
            snapchat: '<svg class="fs-icon fs-icon--snapchat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M47.7 38.3c-.2-.2-.4-.4-.7-.4-2.3-.4-3.9-1.7-5-3s-1.7-2.5-1.7-2.6v-.1c-.1-.2-.3-.5-.3-.7v-.4c.2-.6.3-.8 1.3-1.1 0 0 .1 0 .3-.1.1 0 .2-.1.3-.1.7-.3 1.4-.6 1.9-1.1.2-.2.5-.6.5-1-.1-.4-.2-.8-.6-1.1-.6-.4-1.6-.2-2.2 0-.4.1-1.2.5-1.5.1v-.5c.1-1.9.3-3.8 0-5.6-.1-.6-.2-1.1-.5-1.6-.9-2.1-2.3-3.6-3.9-4.5-1.4-.8-3-1.2-4.6-1.3-1.6-.1-3.3.1-4.9.6-.5.2-1 .4-1.4.7-1.7.9-3 2.4-3.9 4.5-.2.5-.4 1.1-.5 1.6-.3 1.9-.1 3.8 0 5.6v.5c-.3.3-1.2 0-1.5-.1-.7-.2-1.6-.4-2.2 0-.4.3-.5.6-.6 1.1-.1.3.2.7.5 1 .5.5 1.2.8 1.9 1.1.1 0 .2.1.3.1.2.1.2.1.3.1 1 .3 1.1.6 1.3 1.1 0 .1.1.2 0 .4 0 .2-.2.4-.3.7 0 .1-.6 1.3-1.7 2.6s-2.8 2.7-5 3c-.3 0-.5.2-.7.4-.2.2-.3.5-.2.8v.2c0 .1 0 .1.1.2.2.5.8.9 1.6 1.3.8.3 1.8.6 3.1.8 0 .1.1.4.1.6 0 .1.1.3.1.4 0 .1.1.3.1.4.1.2.2.5.4.7.2.1.4.2.8.2h.4c.1 0 .3 0 .4-.1.2 0 .5-.1.8-.1.3 0 .6-.1 1-.1h.6c.2 0 .4 0 .6.1.8.1 1.5.6 2.4 1.2 1.9 1.3 3.5 2 5.2 2 1.7 0 3.4-.7 5.2-2 .8-.6 1.6-1.1 2.4-1.2.2 0 .4-.1.6-.1h.6c.4 0 .7 0 1 .1.3 0 .6.1.8.1.2 0 .3.1.4.1h.4c.3 0 .6-.1.8-.2.3-.2.4-.4.4-.7 0-.2.1-.3.1-.4 0-.1.1-.3.1-.4 0-.2.1-.4.1-.6 1.3-.2 2.3-.5 3.1-.8.9-.4 1.4-.8 1.6-1.3 0-.1.1-.2.1-.2V39c.2-.2.1-.5-.1-.7z"/></svg>',
            twitter: '<svg class="fs-icon fs-icon--twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M22.2 38.9c-3.4-.3-6.1-1.7-7.5-5.1h3.6c-3.9-1.4-5.6-4.3-5.9-8.4 1.2.6 2.3.7 3.5.7-2.1-1.6-3.6-3.4-3.7-6.1-.1-1.5.5-2.8 1.3-4 4.4 5 9.7 8.3 16.5 8.9v-2.7c.1-1.9.6-3.6 1.9-5.1 2.5-2.8 6.9-3.1 9.8-.7.2.2.5.4.7.6.2.2.4.2.7.2 1.1-.3 2-.9 3-1.4.5-.3 1.1-.6 1.7-1-.4 1.1-.9 2-1.5 2.8-.6.8-1.3 1.6-2.2 2.2 1.6-.2 3.2-.6 4.8-1.1-.3.4-.6.8-.9 1.1l-2.7 2.4c-.1.1-.2.3-.2.4.1 3.3-.6 6.5-1.9 9.6-1.9 4.2-4.7 7.5-8.6 9.9-2.5 1.5-5.2 2.4-8.1 2.9-5.5.8-10.5-.5-15.1-3.3-.1 0-.1-.1-.2-.1h.2c1.1.5 2.2.4 3.3.3 2.3-.2 4.5-.9 6.6-2.1l.9-.6v-.3z"/></svg>',
            website: '<svg class="fs-icon fs-icon--website" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF10E_" d="M14.7 7.4l2.8 2.6v.4h-1.9V17h-3.7v-4.2H8.1V17H4.4v-6.6H2.5V10L10 3l2.8 2.6v-.9h1.9z"/></svg>',
            youtube: '<svg class="fs-icon fs-icon--youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.2 12.5V7.7l4.6 2.4-4.6 2.4zm9.5-7.3c-.7-.7-1.4-.7-1.7-.7-2.4-.2-6-.2-6-.2s-3.6 0-6 .2c-.3 0-1.1 0-1.7.7-.5.5-.6 1.7-.6 1.7s-.2 1.4-.2 2.8V11c0 1.4.2 2.8.2 2.8s.2 1.2.7 1.7c.6.6 1.4.5 1.8.6 1.4.1 5.8.2 5.8.2s3.6 0 6-.2c.3 0 1.1 0 1.7-.7.5-.5.7-1.7.7-1.7s.2-1.4.2-2.8V9.7c0-1.4-.2-2.8-.2-2.8s-.2-1.2-.7-1.7z"/></svg>'
        }
    },
    123: function(t, e, i) {
        ! function(e, i) {
            t.exports = i()
        }(window, function() {
            return function(t) {
                function e(n) {
                    if (i[n]) return i[n].exports;
                    var s = i[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports
                }
                var i = {};
                return e.m = t, e.c = i, e.d = function(t, i, n) {
                    e.o(t, i) || Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: n
                    })
                }, e.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, e.t = function(t, i) {
                    if (1 & i && (t = e(t)), 8 & i) return t;
                    if (4 & i && "object" == typeof t && t && t.__esModule) return t;
                    var n = Object.create(null);
                    if (e.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & i && "string" != typeof t)
                        for (var s in t) e.d(n, s, function(e) {
                            return t[e]
                        }.bind(null, s));
                    return n
                }, e.n = function(t) {
                    var i = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return e.d(i, "a", i), i
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "", e(e.s = 0)
            }([function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }();
                e.default = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    t && new s(t, e <= 0 ? 2 : e, i).init()
                };
                var s = function() {
                    function t(e, i, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.element = e, this.numLines = i, this.allowResize = n, this.prevWidth = 0, this.prevHeight = 0, this.textCtx = !1, this.LINE_CLAMP_RULES = {
                            LINE_CLAMP: "-webkit-line-clamp",
                            BOX: "-webkit-box",
                            BOX_ORIENT: "-webkit-box-orient"
                        }
                    }
                    return n(t, [{
                        key: "init",
                        value: function() {
                            if (this.LINE_CLAMP_RULES.LINE_CLAMP in document.body.style) this.element.style.display = this.LINE_CLAMP_RULES.BOX, this.element.style[this.LINE_CLAMP_RULES.BOX_ORIENT] = "vertical", this.element.style[this.LINE_CLAMP_RULES.LINE_CLAMP] = this.numLines;
                            else {
                                var t = document.createElement("canvas");
                                this.textCtx = t.getContext("2d"), this.clamp(), this.allowResize && requestAnimationFrame(this.resize.bind(this))
                            }
                        }
                    }, {
                        key: "clamp",
                        value: function() {
                            var t = getComputedStyle(this.element),
                                e = t.fontFamily,
                                i = t.fontSize,
                                n = t.fontWeight,
                                s = t.lineHeight,
                                a = (parseInt(s, 10) || 0) * this.numLines;
                            if (this.element.scrollHeight > a || this.element.dataset.fullText) {
                                var r = this.element.dataset.fullText || this.element.innerText,
                                    o = r.split(" "),
                                    c = this.element.getBoundingClientRect().width;
                                this.textCtx.font = n + " " + i + " " + e;
                                for (var l = "", d = 0, h = 0; h < this.numLines - 1; h += 1) {
                                    for (var u = ""; this.textCtx.measureText(u + " " + o[d]).width < c && d < o.length - 1;) u = "" === u ? o[d] : u + " " + o[d], d += 1;
                                    l = "" === l ? u : l + " " + u
                                }
                                for (var v = r.slice(r.indexOf(o[d])); this.textCtx.measureText(v + "...").width > c;) v = v.substring(0, v.length - 1);
                                var f = l + " " + v;
                                f === r ? (this.element.innerText = r, this.element.dataset.fullText && delete this.element.dataset.fullText) : (this.element.innerText = f + "...", this.element.dataset.fullText || (this.element.dataset.fullText = r))
                            }
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            if (this.allowResize) {
                                var t = this.element.getBoundingClientRect(),
                                    e = t.width,
                                    i = t.height;
                                this.prevWidth === e && this.prevHeight === i || (this.clamp(), this.prevWidth = e, this.prevHeight = i), requestAnimationFrame(this.resize.bind(this))
                            }
                        }
                    }]), t
                }()
            }])
        })
    },
    15: function(t, e, i) {
        "use strict";

        function n(t) {
            if (t.status < 200 || t.status >= 300) {
                var e = new Error(t.statusText);
                throw e.response = t, e
            }
            return t
        }
        e.a = n
    },
    285: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (i(52), i(5), i(4), i(86)),
            s = (i.n(n), i(286), i(287), i(293), i(295)),
            a = (i.n(s), i(296)),
            r = (i.n(a), i(297), i(299));
        i.n(r)
    },
    286: function(t, e, i) {
        "use strict";
        var n = i(11);
        i.n(n);
        customElements.define("fbs-carousel", n.FbsCarouselComponent), document.addEventListener("DOMContentLoaded", function() {
            var t = ".featured__slide-bg",
                e = "featured__bg-image--current",
                i = "fbs-slider__slide--current",
                n = document.querySelector(".featured__carousel"),
                s = void 0;
            n && (n.addEventListener("slideChangeStart", function(n) {
                s.domNode.classList.remove(i), s = n.detail.targetSlide, s.domNode.classList.add(i);
                var a = document.querySelector("." + e),
                    r = document.querySelector(".featured__bg-image--next"),
                    o = s.domNode.querySelector(t);
                r.style.backgroundImage = "url(" + o.dataset.bgImage + ")", r.style.display = "block", a.classList.add("featured__bg-image--fade"), setTimeout(function() {
                    r.classList.remove("featured__bg-image--next"), r.classList.add(e), a.style.display = "none", a.classList.remove("featured__bg-image--fade"), a.classList.add("featured__bg-image--next"), a.classList.remove(e)
                }, 500)
            }), n.addEventListener("sliderResized", function(t) {
                t.detail.currentSlide !== s && n.nextSlide()
            }), function() {
                if (n.activeSlides.length) {
                    n.querySelector(".fbs-slider__controls").classList.add("fs-content"), s = n.currentSlide;
                    var a = s.domNode.querySelector(t),
                        r = document.querySelector("." + e);
                    s.domNode.classList.add(i), r.style.backgroundImage = "url(" + a.dataset.bgImage + ")", 5 === n.activeSlides.length && n.prevSlide()
                }
            }())
        })
    },
    287: function(t, e, i) {
        "use strict";

        function n(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }
        var s = i(2),
            a = i(121);
        document.addEventListener("DOMContentLoaded", function() {
            function t(t) {
                i.classList.add("body--modal-open"), a.a.clearTimer();
                var e = document.createElement("fbs-video");
                e.setAttribute("video-id", t.dataset.videoId), e.setAttribute("player-id", s.p), e.setAttribute("ad-unit-path", s.j), e.setAttribute("autoplay", ""), e.setAttribute("controls", "true"), e.setAttribute("secret-autoplay", ""), e.setAttribute("key-value-string", "pos=vid-overlay");
                var n = document.createElement("div");
                n.classList.add("modal__title", "fs-responsive-text", "fs-text-m"), n.append(t.dataset.videoTitle), o.append(e, n)
            }

            function e(e) {
                [].concat(n((e || document).getElementsByClassName("card--video"))).forEach(function(e) {
                    e.onclick = function(n) {
                        i.classList.contains("body--modal-open") || t(e), n.preventDefault()
                    }
                })
            }
            var i = document.querySelector("body"),
                r = document.getElementById("modal__box"),
                o = document.getElementsByClassName("modal__content")[0],
                c = [].concat(n(document.querySelectorAll("fbs-carousel"))),
                l = r.querySelector(".close");
            e(), c.forEach(function(t) {
                t.addEventListener("slideChanged", function() {
                    e()
                })
            }), document.addEventListener("fbs-channel-response", function(t) {
                e(t.detail)
            }), l.addEventListener("click", function() {
                a.a.startTimer(), i.classList.remove("body--modal-open"), o.innerHTML = "", o.appendChild(l)
            }), window.addEventListener("click", function(t) {
                t.target === r && (a.a.startTimer(), i.classList.remove("body--modal-open"), o.innerHTML = "")
            })
        })
    },
    288: function(t, e, i) {
        "use strict";

        function n(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var a = i(289),
            r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            o = null,
            c = function() {
                function t(e, i) {
                    return s(this, t), o || (o = this), this.dataVizModel = e, this.dataVizView = i, this.dataVizCanvas = new a.a, this.dataVizCanvas.init(), this.currentDataVizList = {}, this.newDataVizList = {}, this.dataIndex = 0, this.timer = null, o
                }
                return r(t, [{
                    key: "getNewData",
                    value: function() {
                        return (this.dataVizModel.dataModel.data[this.dataIndex] || {}).pages || []
                    }
                }, {
                    key: "getNewPageInfo",
                    value: function() {
                        return this.dataVizModel.dataModel.pageInfo || {}
                    }
                }, {
                    key: "getActiveUsers",
                    value: function() {
                        return Math.max(0, (this.dataVizModel.dataModel.data[this.dataIndex] || {}).siteVisits || 0)
                    }
                }, {
                    key: "mapNewData",
                    value: function(t, e) {
                        var i = this,
                            n = 0;
                        return t.forEach(function(t) {
                            i.newDataVizList[t.id] || (i.newDataVizList[t.id] = {
                                index: n,
                                views: t.val.toLocaleString(),
                                pageInfo: e[t.id]
                            }, n++)
                        })
                    }
                }, {
                    key: "leave",
                    value: function(t, e) {
                        var i = this,
                            n = t.filter(function(t) {
                                return -1 === e.indexOf(t)
                            });
                        n && n.forEach(function(t) {
                            delete i.currentDataVizList[t], i.dataVizView.leaving(t)
                        })
                    }
                }, {
                    key: "reposition",
                    value: function(t, e) {
                        var i = this,
                            s = [].concat(n(new Set(t.filter(function(t) {
                                return -1 !== e.indexOf(t)
                            }))));
                        s && s.forEach(function(t) {
                            var e = i.currentDataVizList[t].views < i.newDataVizList[t].views ? "up" : "down";
                            i.currentDataVizList[t] = i.newDataVizList[t], i.dataVizView.repositioning(t, i.newDataVizList, e)
                        })
                    }
                }, {
                    key: "enter",
                    value: function(t, e) {
                        var i = this,
                            n = e.filter(function(e) {
                                return -1 === t.indexOf(e)
                            });
                        n && n.forEach(function(t) {
                            i.currentDataVizList[t] = i.newDataVizList[t], i.dataVizView.entering(t, i.newDataVizList)
                        })
                    }
                }, {
                    key: "renderUpdatedUsersAndCanvas",
                    value: function() {
                        this.dataVizView.renderUsers(this.getActiveUsers()), this.dataVizCanvas.changeNumber(this.getActiveUsers())
                    }
                }, {
                    key: "renderUpdatedList",
                    value: function() {
                        var t = Object.keys(this.currentDataVizList),
                            e = Object.keys(this.newDataVizList);
                        this.leave(t, e), this.reposition(t, e), this.enter(t, e), this.dataVizView.hideItemsOutOfView(), this.renderUpdatedUsersAndCanvas()
                    }
                }, {
                    key: "renderInitialList",
                    value: function() {
                        var t = this;
                        if (0 === Object.keys(this.currentDataVizList).length) {
                            Object.keys(this.newDataVizList).forEach(function(e) {
                                t.dataVizView.loadInitialList(e, t.newDataVizList), t.dataVizView.hideItemsOutOfView()
                            })
                        }
                        this.renderUpdatedUsersAndCanvas()
                    }
                }, {
                    key: "renderMobileList",
                    value: function() {
                        var t = this,
                            e = Object.keys(this.currentDataVizList),
                            i = Object.keys(this.newDataVizList),
                            s = [].concat(n(new Set(e.filter(function(t) {
                                return -1 !== i.indexOf(t)
                            })))),
                            a = i.filter(function(t) {
                                return -1 === e.indexOf(t)
                            });
                        s.concat(a).forEach(function(e) {
                            if (t.newDataVizList[e].index < 10) {
                                var i = t.currentDataVizList[e] && t.currentDataVizList[e].views < t.newDataVizList[e].views,
                                    n = i || !t.currentDataVizList[e] ? "up" : "down";
                                t.dataVizView.loadMobileList(e, t.newDataVizList, n)
                            }
                        }), this.renderUpdatedUsersAndCanvas(), this.dataVizView.hideItemsOutOfView()
                    }
                }, {
                    key: "updateData",
                    value: function(t) {
                        this.dataIndex++, this.mapNewData(this.getNewData(), this.getNewPageInfo()), "mobile" === t ? this.renderUpdatedUsersAndCanvas() : this.renderUpdatedList()
                    }
                }, {
                    key: "getData",
                    value: function(t) {
                        var e = this;
                        this.clearTimer(), this.dataVizModel.refetchData().then(function() {
                            e.dataIndex = 0, e.mapNewData(e.getNewData(), e.getNewPageInfo()), "mobile" === t ? e.renderUpdatedUsersAndCanvas() : e.renderUpdatedList(), e.startTimer(t)
                        })
                    }
                }, {
                    key: "clearTimer",
                    value: function() {
                        this.timer && (clearInterval(this.timer), this.timer = null)
                    }
                }, {
                    key: "startTimer",
                    value: function(t) {
                        var e = this;
                        this.timer || (this.timer = setInterval(function() {
                            e.newDataVizList = {}, e.dataIndex === e.dataVizModel.dataModel.data.length - 1 ? e.getData(t) : e.updateData(t)
                        }, 5e3))
                    }
                }, {
                    key: "initializeMobileList",
                    value: function() {
                        0 === Object.keys(this.currentDataVizList).length && (this.mapNewData(this.getNewData(), this.getNewPageInfo()), this.currentDataVizList = this.newDataVizList), this.dataIndex++, this.newDataVizList = {}, this.mapNewData(this.getNewData(), this.getNewPageInfo()), this.renderMobileList()
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.mapNewData(this.getNewData(), this.getNewPageInfo()), this.renderInitialList(), 0 === Object.keys(this.currentDataVizList).length && (this.currentDataVizList = this.newDataVizList), this.startTimer()
                    }
                }]), t
            }();
        e.a = c
    },
    289: function(t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = function() {
                function t() {
                    n(this, t), this.ANGLE_BETWEEN_MARKS = Math.PI / 20, this.RANGE_MIN = 0, this.RANGE_MAX = Math.PI, this.FPS = 30, this.INTERVAL = 1e3 / this.FPS, this.PI = Math.PI, this.TWO_PI = 2 * Math.PI, this.TOTAL_ITERATIONS = {
                        IDLE: 10,
                        OVERDRIVE: 1.5
                    }, this.ANIMATION_AMPLITUDES = {
                        IDLE: 80,
                        OVERDRIVE: 50
                    }, this.OVERDRIVE_THRESHOLD = 5e3, this.ANIMATION_TYPES = {
                        IDLE: "IDLE",
                        OVERDRIVE: "OVERDRIVE"
                    }, this.GAUGE_RADIUS = 30, this.GAUGE_MARK_LENGTH = 50, this.NEEDLE_LENGTH = 60, this.NEEDLE_BASE_WIDTH = 2, this.NEEDLE_TIP_WIDTH = 1, this.NEEDLE_FILLSTYLE = "#6e6e6e", this.BACKGROUND_COLOR = "#fcfcfc", this.STANDARD_MARK_WIDTH = 1, this.CLOSE_MARK_WIDTH = 2, this.MATCHING_MARK_WIDTH = 3, this.MIN_USER_COUNT = 0, this.MAX_USER_COUNT = 6e4, this.canvas = null, this.ctx = null, this.lastTime = performance.now(), this.currentAngle = 0, this.nextAngle = 0, this.currentPerfectAngle = 0, this.currentValueIndex = 0, this.idleOffset = 0, this.idleDirection = 1, this.currentIteration = 0, this.startValue = 0, this.changeInValue = 0, this.totalIterations = this.TOTAL_ITERATIONS.IDLE, this.animationAmplitude = this.ANIMATION_AMPLITUDES.IDLE
                }
                return s(t, [{
                    key: "easeOutCubic",
                    value: function() {
                        return this.changeInValue * (Math.pow(this.currentIteration / this.totalIterations - 1, 3) + 1) + this.startValue
                    }
                }, {
                    key: "drawGauge",
                    value: function() {
                        for (var t = 2; t < 19; t++) {
                            this.ctx.save();
                            var e = t * this.ANGLE_BETWEEN_MARKS,
                                i = 1 - Math.abs(this.currentAngle - e) / this.PI,
                                n = 0;
                            if (t > 13) {
                                var s = 255 * (1 - .15 * (18 - t));
                                n = "rgba(" + s + ", 0, 0, " + s / 255 + ")"
                            } else n = "#ccc";
                            this.ctx.lineWidth = this.STANDARD_MARK_WIDTH, i >= .99 ? this.ctx.lineWidth = this.MATCHING_MARK_WIDTH : i >= .93 && (this.ctx.lineWidth = this.CLOSE_MARK_WIDTH), this.ctx.translate(this.canvas.width / 2, this.canvas.height - 10), this.ctx.rotate(e), this.ctx.beginPath(), this.ctx.moveTo(-this.GAUGE_RADIUS, 0), this.ctx.lineTo(-this.GAUGE_MARK_LENGTH, 0), this.ctx.strokeStyle = n, this.ctx.stroke(), this.ctx.restore()
                        }
                    }
                }, {
                    key: "drawNeedle",
                    value: function() {
                        this.ctx.save(), this.ctx.translate(this.canvas.width / 2, this.canvas.height - 10), this.ctx.rotate(this.currentAngle), this.ctx.beginPath(), this.ctx.moveTo(0, this.NEEDLE_BASE_WIDTH), this.ctx.lineTo(0, -this.NEEDLE_BASE_WIDTH), this.ctx.lineTo(-this.NEEDLE_LENGTH, -this.NEEDLE_TIP_WIDTH), this.ctx.lineTo(-this.NEEDLE_LENGTH, this.NEEDLE_TIP_WIDTH), this.ctx.fillStyle = this.NEEDLE_FILLSTYLE, this.ctx.closePath(), this.ctx.fill(), this.ctx.beginPath(), this.ctx.arc(-this.NEEDLE_LENGTH, 0, this.NEEDLE_TIP_WIDTH, 0, this.TWO_PI), this.ctx.fill(), this.ctx.restore()
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.ctx.save(), this.ctx.fillStyle = this.BACKGROUND_COLOR, this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore()
                    }
                }, {
                    key: "tick",
                    value: function() {
                        var t = performance.now(),
                            e = t - this.lastTime;
                        return e > this.INTERVAL && (this.lastTime = t - e % this.INTERVAL, !0)
                    }
                }, {
                    key: "drawLabels",
                    value: function() {
                        this.ctx.font = '9px "Work Sans"', this.ctx.fillStyle = "#737373", this.ctx.fillText("0", 15, 60), this.ctx.fillText("60k", 90, 60)
                    }
                }, {
                    key: "draw",
                    value: function() {
                        this.clear(), this.drawGauge(), this.drawLabels(), this.drawNeedle()
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.tick() && (this.currentIteration++, this.currentIteration < this.totalIterations ? (this.currentAngle = this.easeOutCubic(), this.draw()) : (this.idleOffset = Math.random() / this.animationAmplitude, this.idleDirection *= -1, this.currentIteration = 0, this.nextAngle = this.currentPerfectAngle + this.idleOffset * this.idleDirection, this.startValue = this.currentAngle, this.changeInValue = this.nextAngle - this.currentAngle)), this.currentIteration < this.totalIterations && requestAnimationFrame(this.update.bind(this))
                    }
                }, {
                    key: "setNeedleAnimation",
                    value: function(t) {
                        this.animationAmplitude = this.ANIMATION_AMPLITUDES[t], this.totalIterations = this.TOTAL_ITERATIONS[t]
                    }
                }, {
                    key: "changeNumber",
                    value: function(e) {
                        var i = e > this.MAX_USER_COUNT ? this.MAX_USER_COUNT : e;
                        i >= this.MAX_USER_COUNT - this.OVERDRIVE_THRESHOLD ? this.setNeedleAnimation(this.ANIMATION_TYPES.OVERDRIVE) : this.setNeedleAnimation(this.ANIMATION_TYPES.IDLE), this.currentPerfectAngle = t.mapNumberOntoRange(i, this.MIN_USER_COUNT, this.MAX_USER_COUNT, this.RANGE_MIN, this.RANGE_MAX), this.idleOffset = Math.random() / this.animationAmplitude, this.idleDirection = 1, this.nextAngle = this.currentPerfectAngle + this.idleOffset * this.idleDirection, this.currentIteration = 0, this.startValue = this.currentAngle, this.changeInValue = this.nextAngle - this.currentAngle, requestAnimationFrame(this.update.bind(this))
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.canvas = document.querySelector(".data-viz__canvas-gauge"), this.canvas && (this.ctx = this.canvas.getContext("2d"), this.draw(), this.changeNumber(this.MIN_USER_COUNT))
                    }
                }], [{
                    key: "mapNumberOntoRange",
                    value: function(t, e, i, n, s) {
                        return (t - e) * (s - n) / (i - e) + n
                    }
                }]), t
            }();
        e.a = a
    },
    290: function(t, e, i) {
        "use strict";

        function n(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var a = i(122),
            r = (i.n(a), i(123)),
            o = i.n(r),
            c = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            l = i(291),
            d = function() {
                function t(e, i) {
                    s(this, t), this.easeInCubic = function(t, e, i, n) {
                        return t /= n, i * Math.pow(t, 3) + e
                    }, this.easeOutCubic = function(t, e, i, n) {
                        return t /= n, t--, i * (Math.pow(t, 3) + 1) + e
                    }, this.dataVizList = e, this.dataVizActiveUsers = i, this.updateListItemHeight(), this.easeInOptions = {
                        easingFn: this.easeInCubic,
                        useEasing: !0,
                        useGrouping: !0,
                        separator: ",",
                        decimal: "."
                    }, this.noEasingOptions = {
                        useEasing: !1,
                        useGrouping: !0,
                        separator: ",",
                        decimal: "."
                    }, this.easeOutOptions = {
                        easingFn: this.easeOutCubic,
                        useEasing: !0,
                        useGrouping: !0,
                        separator: ",",
                        decimal: "."
                    };
                    var n = document.createElement("canvas");
                    this.textCtx = n.getContext("2d")
                }
                return c(t, [{
                    key: "updateListItemHeight",
                    value: function() {
                        document.body.clientWidth <= 480 ? this.listItemHeight = 75 : document.body.clientWidth <= 1024 ? this.listItemHeight = 90 : this.listItemHeight = 100
                    }
                }, {
                    key: "countUp",
                    value: function(t, e, i, n, s) {
                        var a = new l(this.dataVizActiveUsers, t, e, 0, i, n);
                        a.error ? this.dataVizActiveUsers.innerText = e : a.start(s)
                    }
                }, {
                    key: "renderUsers",
                    value: function(t) {
                        var e = this,
                            i = parseInt(this.dataVizActiveUsers.innerText.replace(",", ""), 10) || 0,
                            n = (i + t) / 2,
                            s = Math.max(0, i < t ? t - 50 : t + 50),
                            a = function() {
                                e.countUp(s, t, 1, e.easeOutOptions)
                            },
                            r = function() {
                                e.countUp(n, s, 1.5, e.noEasingOptions, a)
                            };
                        this.countUp(i, n, 2.5, this.easeInOptions, r)
                    }
                }, {
                    key: "setInitialAnimation",
                    value: function(t) {
                        var e = this;
                        t.style.transform = "translateY(1500px)", requestAnimationFrame(function() {
                            t.style.transform = "translateY(" + t.dataset.index * e.listItemHeight + "px)"
                        })
                    }
                }, {
                    key: "hideItemsOutOfView",
                    value: function() {
                        this.resetHiddenItems();
                        var t = Math.floor(this.dataVizList.clientHeight / this.listItemHeight);
                        [].concat(n(this.dataVizList.querySelectorAll("li"))).forEach(function(e) {
                            e.dataset.index >= t && e.classList.add("data-viz__hide")
                        });
                        var e = this.dataVizList.querySelector('[data-index="' + (t - 1) + '"]');
                        e && e.classList.add("data-viz__hide-border-bottom")
                    }
                }, {
                    key: "resetHiddenItems",
                    value: function() {
                        var t = this.dataVizList.querySelector(".data-viz__hide-border-bottom");
                        t && t.classList.remove("data-viz__hide-border-bottom"), [].concat(n(this.dataVizList.querySelectorAll(".data-viz__hide"))).forEach(function(t) {
                            t.classList.remove("data-viz__hide")
                        })
                    }
                }, {
                    key: "loadInitialList",
                    value: function(e, i) {
                        var n = t.createListItem(e, i);
                        this.setInitialAnimation(n), this.dataVizList.appendChild(n), setTimeout(function() {
                            var t = n.querySelector(".data-viz__title");
                            o()(t, 2, !1)
                        })
                    }
                }, {
                    key: "loadMobileList",
                    value: function(e, i, n) {
                        var s = i[e].index,
                            a = t.createListItem(e, i);
                        a.style.transform = "translateY(" + a.dataset.index * this.listItemHeight + "px)", this.dataVizList.appendChild(a), setTimeout(function() {
                            var t = a.querySelector(".data-viz__title");
                            o()(t, 2, !1)
                        });
                        var r = this.dataVizList.querySelector('[data-key="' + e + '"]');
                        t.updateViewNumber(r, e, s, i), t.updateArrowDirection(r, n)
                    }
                }, {
                    key: "leaving",
                    value: function(t) {
                        var e = this.dataVizList.querySelector('[data-key="' + t + '"]');
                        e && (e.style.transform = "translateY(1500px)", setTimeout(function() {
                            e.parentNode.removeChild(e)
                        }, 500))
                    }
                }, {
                    key: "repositioning",
                    value: function(e, i, n) {
                        var s = i[e].index,
                            a = this.dataVizList.querySelector('[data-key="' + e + '"]');
                        a && (a.style.transform = "translateY(" + s * this.listItemHeight + "px)", t.updateViewNumber(a, e, s, i), t.updateArrowDirection(a, n))
                    }
                }, {
                    key: "entering",
                    value: function(e, i) {
                        var n = this,
                            s = t.createListItem(e, i),
                            a = i[e].index;
                        s && (s.style.transform = "translateY(1500px)", this.dataVizList.appendChild(s), setTimeout(function() {
                            var t = s.querySelector(".data-viz__title");
                            o()(t, 2, !1)
                        }), requestAnimationFrame(function() {
                            s.style.transform = "translateY(" + a * n.listItemHeight + "px)"
                        }))
                    }
                }], [{
                    key: "createNumberContainer",
                    value: function(t) {
                        var e = document.createElement("div");
                        e.classList.add("data-viz__number-container");
                        var i = document.createElement("h4"),
                            n = document.createTextNode(t.views);
                        i.classList.add("data-viz__value"), i.appendChild(n);
                        var s = document.createElement("div");
                        return s.setAttribute("class", "data-viz__arrow-wrapper"), s.innerHTML = a.play, e.append(i, s), e
                    }
                }, {
                    key: "createBrandVoiceContainer",
                    value: function(t) {
                        var e = document.createElement("div");
                        e.classList.add("data-viz__brand-voice-container");
                        var i = document.createElement("span"),
                            n = document.createTextNode(t.pageInfo.advoiceBrand);
                        i.classList.add("data-viz__brand-voice-name"), i.appendChild(n);
                        var s = document.createElement("span"),
                            a = document.createTextNode("Brandvoice");
                        return s.classList.add("data-viz__brand-voice-logo"), s.appendChild(a), e.append(i, s), e
                    }
                }, {
                    key: "createForbesInsightsContainer",
                    value: function() {
                        var t = document.createElement("div"),
                            e = document.createTextNode("FORBES INSIGHTS");
                        return t.classList.add("card__insights"), t.appendChild(e), t
                    }
                }, {
                    key: "createPaidContentContainer",
                    value: function(t) {
                        var e = document.createElement("div");
                        e.classList.add("data-viz__paid-content-container");
                        var i = document.createElement("span"),
                            n = document.createTextNode(t.paidContentData.companyName);
                        i.classList.add("data-viz__paid-content-name"), i.appendChild(n);
                        var s = document.createElement("span"),
                            a = document.createTextNode(" " + t.paidContentData.label);
                        return s.classList.add("data-viz__paid-content-logo"), s.style.color = t.paidContentData.primaryColor, s.appendChild(a), e.append(i, s), e
                    }
                }, {
                    key: "createTitleContainer",
                    value: function(e) {
                        var i = document.createElement("div");
                        i.classList.add("data-viz__title-container");
                        var n = document.createElement("a"),
                            s = document.createTextNode(e.pageInfo.title);
                        if (n.setAttribute("href", e.pageInfo.url), n.setAttribute("data-ga-track", "Trending - Article - " + e.pageInfo.title), n.setAttribute("title", e.pageInfo.title), n.classList.add("data-viz__title", "body--dense-merriweather"), n.appendChild(s), e.pageInfo.advoiceBrand) {
                            var a = t.createBrandVoiceContainer(e);
                            i.append(a, n)
                        } else if ("insights" === e.blogType) {
                            var r = t.createForbesInsightsContainer();
                            i.append(r, n)
                        } else if (e.paidContentData) {
                            var o = t.createPaidContentContainer(e);
                            i.append(o, n)
                        } else i.append(n);
                        return i
                    }
                }, {
                    key: "createListItem",
                    value: function(e, i) {
                        var n = i[e],
                            s = t.createNumberContainer(n),
                            a = t.createTitleContainer(n),
                            r = document.createElement("li");
                        return r.setAttribute("data-index", n.index), r.setAttribute("data-key", e), r.classList.add("data-viz__item"), r.append(s, a), r
                    }
                }, {
                    key: "updateViewNumber",
                    value: function(t, e, i, n) {
                        t.setAttribute("data-index", i);
                        var s = n[e];
                        t.querySelector(".data-viz__value").innerHTML = s.views
                    }
                }, {
                    key: "updateArrowDirection",
                    value: function(t, e) {
                        var i = t.querySelector(".data-viz__arrow-wrapper");
                        "up" === e ? i.classList.contains("data-viz__arrow--down") && i.classList.remove("data-viz__arrow--down") : "down" === e && (i.classList.contains("data-viz__arrow--down") || i.classList.add("data-viz__arrow--down"))
                    }
                }]), t
            }();
        e.a = d
    },
    291: function(t, e, i) {
        var n, s;
        ! function(a, r) {
            n = r, void 0 !== (s = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = s)
        }(0, function(t, e, i) {
            return function(t, e, i, n, s, a) {
                function r(t) {
                    var e, i, n, s, a, r, o = t < 0;
                    if (t = Math.abs(t).toFixed(l.decimals), t += "", e = t.split("."), i = e[0], n = e.length > 1 ? l.options.decimal + e[1] : "", l.options.useGrouping) {
                        for (s = "", a = 0, r = i.length; a < r; ++a) 0 !== a && a % 3 == 0 && (s = l.options.separator + s), s = i[r - a - 1] + s;
                        i = s
                    }
                    return l.options.numerals.length && (i = i.replace(/[0-9]/g, function(t) {
                        return l.options.numerals[+t]
                    }), n = n.replace(/[0-9]/g, function(t) {
                        return l.options.numerals[+t]
                    })), (o ? "-" : "") + l.options.prefix + i + n + l.options.suffix
                }

                function o(t, e, i, n) {
                    return i * (1 - Math.pow(2, -10 * t / n)) * 1024 / 1023 + e
                }

                function c(t) {
                    return "number" == typeof t && !isNaN(t)
                }
                var l = this;
                if (l.version = function() {
                        return "1.9.3"
                    }, l.options = {
                        useEasing: !0,
                        useGrouping: !0,
                        separator: ",",
                        decimal: ".",
                        easingFn: o,
                        formattingFn: r,
                        prefix: "",
                        suffix: "",
                        numerals: []
                    }, a && "object" == typeof a)
                    for (var d in l.options) a.hasOwnProperty(d) && null !== a[d] && (l.options[d] = a[d]);
                "" === l.options.separator ? l.options.useGrouping = !1 : l.options.separator = "" + l.options.separator;
                for (var h = 0, u = ["webkit", "moz", "ms", "o"], v = 0; v < u.length && !window.requestAnimationFrame; ++v) window.requestAnimationFrame = window[u[v] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[u[v] + "CancelAnimationFrame"] || window[u[v] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
                    var i = (new Date).getTime(),
                        n = Math.max(0, 16 - (i - h)),
                        s = window.setTimeout(function() {
                            t(i + n)
                        }, n);
                    return h = i + n, s
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                }), l.initialize = function() {
                    return !(!l.initialized && (l.error = "", l.d = "string" == typeof t ? document.getElementById(t) : t, l.d ? (l.startVal = Number(e), l.endVal = Number(i), c(l.startVal) && c(l.endVal) ? (l.decimals = Math.max(0, n || 0), l.dec = Math.pow(10, l.decimals), l.duration = 1e3 * Number(s) || 2e3, l.countDown = l.startVal > l.endVal, l.frameVal = l.startVal, l.initialized = !0, 0) : (l.error = "[CountUp] startVal (" + e + ") or endVal (" + i + ") is not a number", 1)) : (l.error = "[CountUp] target is null or undefined", 1)))
                }, l.printValue = function(t) {
                    var e = l.options.formattingFn(t);
                    "INPUT" === l.d.tagName ? this.d.value = e : "text" === l.d.tagName || "tspan" === l.d.tagName ? this.d.textContent = e : this.d.innerHTML = e
                }, l.count = function(t) {
                    l.startTime || (l.startTime = t), l.timestamp = t;
                    var e = t - l.startTime;
                    l.remaining = l.duration - e, l.options.useEasing ? l.countDown ? l.frameVal = l.startVal - l.options.easingFn(e, 0, l.startVal - l.endVal, l.duration) : l.frameVal = l.options.easingFn(e, l.startVal, l.endVal - l.startVal, l.duration) : l.countDown ? l.frameVal = l.startVal - (l.startVal - l.endVal) * (e / l.duration) : l.frameVal = l.startVal + (l.endVal - l.startVal) * (e / l.duration), l.countDown ? l.frameVal = l.frameVal < l.endVal ? l.endVal : l.frameVal : l.frameVal = l.frameVal > l.endVal ? l.endVal : l.frameVal, l.frameVal = Math.round(l.frameVal * l.dec) / l.dec, l.printValue(l.frameVal), e < l.duration ? l.rAF = requestAnimationFrame(l.count) : l.callback && l.callback()
                }, l.start = function(t) {
                    l.initialize() && (l.callback = t, l.rAF = requestAnimationFrame(l.count))
                }, l.pauseResume = function() {
                    l.paused ? (l.paused = !1, delete l.startTime, l.duration = l.remaining, l.startVal = l.frameVal, requestAnimationFrame(l.count)) : (l.paused = !0, cancelAnimationFrame(l.rAF))
                }, l.reset = function() {
                    l.paused = !1, delete l.startTime, l.initialized = !1, l.initialize() && (cancelAnimationFrame(l.rAF), l.printValue(l.startVal))
                }, l.update = function(t) {
                    if (l.initialize()) {
                        if (t = Number(t), !c(t)) return void(l.error = "[CountUp] update() - new endVal is not a number: " + t);
                        l.error = "", t !== l.frameVal && (cancelAnimationFrame(l.rAF), l.paused = !1, delete l.startTime, l.startVal = l.frameVal, l.endVal = t, l.countDown = l.startVal > l.endVal, l.rAF = requestAnimationFrame(l.count))
                    }
                }, l.initialize() && l.printValue(l.startVal)
            }
        })
    },
    292: function(t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var s = i(2),
            a = i(15),
            r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            o = function() {
                function t() {
                    n(this, t), this.dataModel = s.s.dataVizModel
                }
                return r(t, [{
                    key: "refetchData",
                    value: function() {
                        var t = this,
                            e = s.s.division ? "/simple-data/data-viz/?division=" + s.s.division : "/simple-data/data-viz/";
                        return fetch(e).then(function(t) {
                            return Object(a.a)(t)
                        }).then(function(t) {
                            return t.json()
                        }).then(function(e) {
                            return t.dataModel = e, t.dataModel
                        }).catch(function(t) {
                            return console.error(t)
                        })
                    }
                }]), t
            }();
        e.a = o
    },
    293: function(t, e, i) {
        "use strict";

        function n(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }
        var s = i(123),
            a = i.n(s),
            r = i(1),
            o = (i.n(r), i(121)),
            c = i(2),
            l = i(33),
            d = i(15),
            h = i(294);
        document.addEventListener("DOMContentLoaded", function() {
            function t() {
                var t = m.clientHeight,
                    e = document.querySelector(".editors-pick--last-visible");
                e && e.classList.remove("editors-pick--last-visible");
                var i = void 0;
                y.forEach(function(e) {
                    e.offsetTop + e.clientHeight > t - 20 ? (e.classList.add("editors-pick--hidden"), e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", "-1"), i.classList.add("editors-pick--last-visible")) : (e.classList.remove("editors-pick--hidden"), e.removeAttribute("aria-hidden", "true"), e.removeAttribute("tabindex", "-1"), i = e)
                })
            }

            function e() {
                window.innerWidth > 768 && t()
            }

            function i() {
                var t = {
                        picksData: b
                    },
                    i = Object(h.a)(t);
                m.innerHTML = i, y = [].concat(n(m.querySelectorAll(".editors-pick"))), setTimeout(function() {
                    [].concat(n(m.querySelectorAll(".data-viz__title"))).forEach(function(t) {
                        a()(t, 2, !1)
                    })
                }), setTimeout(function() {
                    e()
                }, 100)
            }

            function s() {
                fetch("/simple-data/editors-picks/").then(function(t) {
                    return Object(d.a)(t)
                }).then(function(t) {
                    return t.json()
                }).then(function(t) {
                    b = t, i()
                }).catch(function(t) {
                    return console.error(t)
                })
            }

            function u() {
                w || (w = !0, p.classList.add("pop-picks__nav-btn--active"), _.classList.remove("pop-picks__nav-btn--active"), g.classList.add("pop-picks__content--active"), m.classList.remove("pop-picks__content--active"), r.isMobile || r.isTablet || o.a.startTimer())
            }

            function v() {
                w && (w = !1, o.a.clearTimer(), p.classList.remove("pop-picks__nav-btn--active"), _.classList.add("pop-picks__nav-btn--active"), g.classList.remove("pop-picks__content--active"), m.classList.add("pop-picks__content--active"), b || s())
            }
            var f = document.querySelector(".channel__sidebar--pop-picks"),
                p = f.querySelector(".pop-picks__nav-btn--popular"),
                _ = f.querySelector(".pop-picks__nav-btn--picks"),
                g = f.querySelector(".pop-picks__content--popular"),
                m = f.querySelector(".pop-picks__content--picks"),
                w = !0,
                b = null,
                y = void 0;
            ! function() {
                r.isMobile || r.isTablet ? o.a.initializeMobileList() : o.a.initialize()
            }(),
            function() {
                r.isMobile || r.isTablet || (window.addEventListener("focus", function() {
                    w && o.a.startTimer()
                }), window.addEventListener("blur", function() {
                    w && o.a.clearTimer()
                }), o.b.addEventListener("mouseenter", Object(l.a)(function() {
                    return o.a.clearTimer()
                })), o.b.addEventListener("mouseleave", Object(l.a)(function() {
                    return o.a.startTimer()
                }))), window.addEventListener("resize", Object(l.a)(function() {
                    w ? (o.c.updateListItemHeight(), o.c.hideItemsOutOfView()) : e()
                }, 200)), p.onclick = u, _.onclick = v
            }(),
            function() {
                "usa" !== c.q && o.b.classList.add("data-viz__list--international")
            }()
        })
    },
    294: function(t, e, i) {
        "use strict";

        function n(t, e, i, n) {
            return !1 !== e && null != e && (e || "class" !== t && "style" !== t) ? !0 === e ? " " + (n ? t : t + '="' + t + '"') : ("function" == typeof e.toJSON && (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), i || -1 === e.indexOf('"')) ? (i && (e = s(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'") : ""
        }

        function s(t) {
            var e = "" + t,
                i = l.exec(e);
            if (!i) return t;
            var n, s, a, r = "";
            for (n = i.index, s = 0; n < e.length; n++) {
                switch (e.charCodeAt(n)) {
                    case 34:
                        a = "&quot;";
                        break;
                    case 38:
                        a = "&amp;";
                        break;
                    case 60:
                        a = "&lt;";
                        break;
                    case 62:
                        a = "&gt;";
                        break;
                    default:
                        continue
                }
                s !== n && (r += e.substring(s, n)), s = n + 1, r += a
            }
            return s !== n ? r + e.substring(s, n) : r
        }

        function a(t) {
            if (!t) return "";
            if ("object" == (void 0 === t ? "undefined" : o(t))) {
                var e = "";
                for (var i in t) c.call(t, i) && (e = e + i + ":" + t[i] + ";");
                return e
            }
            return t + ""
        }

        function r(t) {
            var e, i = "",
                r = {},
                o = t || {};
            return function(t) {
                r.bylineAuthor = e = function(t, a, r, o, c) {
                    this && this.block, this && this.attributes;
                    (t || {}).name && (i += '<div class="byline__author">', i += c ? '<span class="byline__by-space">&nbsp;</span><span class="byline__by">and</span>' : '<span class="byline__by">By</span>', i = i + '<a class="byline__author-name"' + n("href", t.url, !0, !1) + n("data-ga-track", "editors picks" === a ? "Cover Story - Position 0 - " + t.name : "Channel - Block " + r + " - " + a + " - Position " + o + " - " + t.name, !0, !1) + ">" + s(null == (e = t.name) ? "" : e) + "</a>", t.displayType && (i = i + '<span class="byline__author-type">' + s(null == (e = t.displayType) ? "" : e) + "</span>"), i += "</div>")
                }, r.byline = e = function(t, e, n) {
                    this && this.block, this && this.attributes;
                    "video" !== t.type && (i += '<span class="byline"><div class="byline__author-group">', r.bylineAuthor(t.author, e, n, t.trackingIndex || 0, !1), function() {
                        var i = t.coAuthors || [];
                        if ("number" == typeof i.length)
                            for (var s = 0, a = i.length; s < a; s++) {
                                var o = i[s];
                                r.bylineAuthor(o, e, n, t.trackingIndex || 0, !0)
                            } else {
                                var a = 0;
                                for (var s in i) {
                                    a++;
                                    var o = i[s];
                                    r.bylineAuthor(o, e, n, t.trackingIndex || 0, !0)
                                }
                            }
                    }.call(this), i += "</div></span>")
                }, r.icon = e = function(t) {
                    this && this.block, this && this.attributes;
                    switch (t) {
                        case "amazon-books":
                            i += '<svg class="fs-icon fs-icon--amazon-books" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 6.1s3.8-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1zM10.5 6.1s3.9-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1z"/></svg>';
                            break;
                        case "arrowLeft":
                            i += '<svg class="fs-icon fs-icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 10h16v2h-16z"/><path transform="rotate(-45.001 4.5 8.877)" d="M.5 7.9h8v2h-8z"/><path transform="rotate(45.001 4.5 13.124)" d="M.5 12.1h8v2h-8z"/></svg>';
                            break;
                        case "arrowRight":
                            i += '<svg class="fs-icon fs-icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(-180 8.964 11)" d="M1 10h16v2H1z"/><path transform="rotate(134.999 14.965 13.124)" d="M11 12.1h8v2h-8z"/><path transform="rotate(-134.999 14.965 8.877)" d="M11 7.9h8v2h-8z"/></svg>';
                            break;
                        case "arrowUp":
                            i += '<svg class="fs-icon fs-icon--arrow-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#020202" d="M30 0L5 30h15v30h20V30h15L30 0z"/></svg>';
                            break;
                        case "arrowDown":
                            i += '<svg class="fs-icon fs-icon--arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#020202" d="M30 60l25-30H40V0H20v30H5l25 30z"/></svg>';
                            break;
                        case "chevronDown":
                            i += '<svg class="fs-icon fs-icon--chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/><path transform="rotate(-45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/></svg>';
                            break;
                        case "chevronLeft":
                            i += '<svg class="fs-icon fs-icon--chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-45.001 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/><path transform="rotate(45.001 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/></svg>';
                            break;
                        case "chevronRight":
                            i += '<svg class="fs-icon fs-icon--chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(134.999 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/><path transform="rotate(-134.999 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/></svg>';
                            break;
                        case "chevronUp":
                            i += '<svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/></svg>';
                            break;
                        case "close":
                            i += '<svg class="fs-icon fs-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(45.001 10 10)" d="M2 9h16v2H2z"/><path transform="rotate(134.999 10 10)" d="M2 9h16v2H2z"/></svg>';
                            break;
                        case "email":
                            i += '<svg class="fs-icon fs-icon--email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF106_" d="M17 15.2H3.2l5.2-4.3.6.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4l.6-.5 5.2 4.4zm.6-9.2v8l-4.8-4 4.8-4zm-15 8V6l4.8 4-4.8 4zm7.8-3.6c-.2.2-.4.2-.6 0L3.6 5.2h13l-6.2 5.2z"/></svg>';
                            break;
                        case "facebook":
                            i += '<svg class="fs-icon fs-icon--facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M32.9 49H25V30h-3.9v-6.6H25v-3.9c0-5.4 2.2-8.5 8.5-8.5h5.2v6.6h-3.3c-2.5 0-2.6.9-2.6 2.6v3.3h5.9l-.5 6.5H33v19h-.1z"/></svg>';
                            break;
                        case "forbesF":
                            i += '<svg class="fs-icon fs-icon--forbes-f" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.5 7l-.8.2C15 4.9 13.8 3.7 12 3.7H9.5C9.4 5 9.4 7 9.4 9.9h1.7c.9 0 1.6-.7 1.9-2.1h.6V13H13c-.3-1.4-.9-2.1-1.9-2.2H9.4c0 1.6.1 3.1.2 4.4.1.7.2 1.2.4 1.5.2.3.6.5 1.1.6l.8.1v.6H3.6v-.6l.7-.1c.9-.1 1.4-.8 1.5-2.1.3-3.3.3-6.5 0-9.6-.1-1.3-.6-2-1.5-2.1l-.7-.2v-.6h12.8l.1 4.3z"/></svg>';
                            break;
                        case "forbesLogo":
                            i += '<svg class="fs-icon fs-icon--forbes-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 54"><path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z"/></svg>';
                            break;
                        case "georgia-uaquo":
                            i += '<svg class="fs-icon fs-icon--georgia-uaquo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#010101" d="M9.9 9.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.6-5.3L2.3 19l-.8-1 6.8-7.2.6-.6c.3-.2.6-.4 1-.4zm0-7.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.5-5.3-7.5 5.3-.8-1 6.8-7.2c.1-.2.4-.3.7-.6.1-.2.5-.3.8-.3z"/></svg>';
                            break;
                        case "hamburger":
                            i += '<svg class="fs-icon fs-icon--hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z"/></svg>';
                            break;
                        case "info":
                            i += '<svg class="fs-icon fs-icon--info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#010101" d="M28.3 38.4h3.3v-10h-3.3v10zM30 13.3c-9.2 0-16.7 7.5-16.7 16.7S20.8 46.7 30 46.7 46.7 39.2 46.7 30 39.2 13.3 30 13.3zm0 30.1c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4 13.4 6 13.4 13.4-6 13.4-13.4 13.4zM28.3 25h3.3v-3.3h-3.3V25z"/></svg>';
                            break;
                        case "instagram":
                            i += '<svg class="fs-icon fs-icon--instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" d="M38.6 46.3H21.4c-4.3 0-7.7-3.5-7.7-7.7V21.4c0-4.3 3.5-7.7 7.7-7.7h17.1c4.3 0 7.7 3.5 7.7 7.7v17.1c.1 4.3-3.4 7.8-7.6 7.8z"/><circle fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" cx="30" cy="30" r="7.4"/><circle cx="38.7" cy="19.3" r="1.8"/></svg>';
                            break;
                        case "linkedin":
                            i += '<svg class="fs-icon fs-icon--linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M44.9 33.2v11h-6.4V34c0-2.6-.9-4.3-3.2-4.3-1.8 0-2.8 1.2-3.3 2.3-.2.4-.2 1-.2 1.6v10.7h-6.4s.1-17.4 0-19.2h6.4V27.9v-.1c.8-1.3 2.4-3.2 5.8-3.2 4.1 0 7.3 2.7 7.3 8.6zM18.7 15.8c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.5 3.6-3.3 0-1.9-1.3-3.3-3.5-3.3zm-3.2 28.4h6.4V25h-6.4v19.2z"/></svg>';
                            break;
                        case "phone":
                            i += '<svg class="fs-icon fs-icon--phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF14E_" d="M2.6 7.6c-.2-.8-.1-1.5.3-2.3S3.7 4 4.4 3.7c.2-.1.4-.1.6.1l3 3c.3.3.2.5 0 .8-.5.6-.8 1-.8 1.3s.2.7.8 1.3c.4.5 1.2 1.2 2.2 2 .6.5 1 .4 1.4-.1.3-.5.5-.7.7-.7s.5.1.9.5l.9.6c.3.2.7.5 1 .7.4.3.7.5.9.6.4.3.4.6.2.9-1.8 2.5-3.9 2.9-6.4 1.2-2.9-2.1-5.1-4.5-6.6-7.1 0-.1-.1-.3-.4-.8l-.2-.2v-.2zm7.2-3.4c1.5.1 2.7.7 3.7 1.7s1.6 2.3 1.7 3.8c0 .3-.1.5-.4.5-.3 0-.5-.1-.5-.4-.1-1.2-.6-2.3-1.5-3.1-.9-.9-1.9-1.4-3.1-1.5-.1 0-.2 0-.3-.1-.1-.2-.2-.3-.2-.4 0-.3.2-.5.6-.5zm-.3-1.8c0-.3.2-.4.5-.4 2.1.1 3.9.8 5.3 2.2s2.2 3.2 2.2 5.3c0 .3-.1.5-.4.5-.1 0-.2 0-.3-.1-.1-.1-.2-.2-.2-.3-.1-1.9-.7-3.5-2-4.7s-2.8-1.9-4.7-2c-.1 0-.2 0-.3-.1-.1-.2-.1-.3-.1-.4z"/></svg>';
                            break;
                        case "play":
                            i += '<svg class="fs-icon fs-icon--play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 2v16.9l11.1-8.5z"/></svg>';
                            break;
                        case "reddit":
                            i += '<svg class="fs-icon fs-icon--reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30"/><path fill="#FFF" d="M50 30c0-2.4-2-4.4-4.4-4.4-1.2 0-2.2.5-3 1.2-3-2.2-7.1-3.6-11.7-3.7l2-9.4 6.5 1.4c.1 1.7 1.4 3 3.1 3 1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1c-1.2 0-2.3.7-2.8 1.7l-7.3-1.5c-.2 0-.4 0-.6.1-.2.1-.3.3-.3.5l-2.2 10.5c-4.7.1-8.8 1.5-11.9 3.7-.8-.8-1.9-1.2-3-1.2-2.4 0-4.4 2-4.4 4.4 0 1.8 1.1 3.3 2.6 4-.1.4-.1.9-.1 1.3 0 6.7 7.8 12.2 17.5 12.2s17.5-5.5 17.5-12.2c0-.4 0-.9-.1-1.3 1.5-.8 2.6-2.3 2.6-4.1zm-30 3.1c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7.1-3.1-1.3-3.1-3.1zm17.4 8.3c-2.1 2.1-6.2 2.3-7.4 2.3-1.2 0-5.3-.2-7.4-2.3-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0 1.3 1.3 4.2 1.8 6.3 1.8s4.9-.5 6.3-1.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1zm-.5-5.1c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z"/></svg>';
                            break;
                        case "rss":
                            i += '<svg class="fs-icon fs-icon--rss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.2 13.6c-.6 0-1.1.2-1.5.6-.5.5-.7 1-.7 1.6 0 .6.2 1.1.6 1.5.5.5 1 .7 1.6.7.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5c-.4-.6-.9-.8-1.5-.8zm0 0M9.2 10.8c-.9-.9-1.8-1.6-2.9-2.1-1.1-.5-2.3-.8-3.5-.9h-.1c-.2 0-.3.1-.5.2-.1.1-.2.3-.2.5V10c0 .2.1.4.2.5.1.1.3.2.5.2 1.7.2 3.2.9 4.4 2.1C8.3 14 9 15.5 9.2 17.2c0 .2.1.3.2.5.2.2.3.3.5.3h1.5c.2 0 .4-.1.5-.2.1-.2.2-.3.2-.5-.1-1.2-.4-2.4-.9-3.5-.4-1.2-1.1-2.1-2-3zm0 0"/><path d="M16.6 11.5c-.8-1.8-1.9-3.4-3.3-4.8s-3-2.5-4.8-3.3C6.6 2.6 4.7 2.1 2.8 2c-.3 0-.4.1-.6.2-.1.1-.2.3-.2.5v1.6c0 .2.1.4.2.5.1.2.3.3.5.3 1.6.1 3.2.5 4.6 1.2 1.5.7 2.7 1.6 3.8 2.6 1.1 1.1 2 2.4 2.6 3.8.7 1.5 1.1 3 1.1 4.6 0 .2.1.3.2.5.1.1.3.2.5.2h1.6c.2 0 .4-.1.5-.2.2-.2.2-.3.2-.5.1-2-.4-3.9-1.2-5.8zm0 0"/></svg>';
                            break;
                        case "search":
                            i += '<svg class="fs-icon fs-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="2" cx="8.5" cy="9" r="6"/><path transform="rotate(45.001 14.922 15.421)" d="M12 14.4h5.9v2H12z"/></svg>';
                            break;
                        case "snapchat":
                            i += '<svg class="fs-icon fs-icon--snapchat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M47.7 38.3c-.2-.2-.4-.4-.7-.4-2.3-.4-3.9-1.7-5-3s-1.7-2.5-1.7-2.6v-.1c-.1-.2-.3-.5-.3-.7v-.4c.2-.6.3-.8 1.3-1.1 0 0 .1 0 .3-.1.1 0 .2-.1.3-.1.7-.3 1.4-.6 1.9-1.1.2-.2.5-.6.5-1-.1-.4-.2-.8-.6-1.1-.6-.4-1.6-.2-2.2 0-.4.1-1.2.5-1.5.1v-.5c.1-1.9.3-3.8 0-5.6-.1-.6-.2-1.1-.5-1.6-.9-2.1-2.3-3.6-3.9-4.5-1.4-.8-3-1.2-4.6-1.3-1.6-.1-3.3.1-4.9.6-.5.2-1 .4-1.4.7-1.7.9-3 2.4-3.9 4.5-.2.5-.4 1.1-.5 1.6-.3 1.9-.1 3.8 0 5.6v.5c-.3.3-1.2 0-1.5-.1-.7-.2-1.6-.4-2.2 0-.4.3-.5.6-.6 1.1-.1.3.2.7.5 1 .5.5 1.2.8 1.9 1.1.1 0 .2.1.3.1.2.1.2.1.3.1 1 .3 1.1.6 1.3 1.1 0 .1.1.2 0 .4 0 .2-.2.4-.3.7 0 .1-.6 1.3-1.7 2.6s-2.8 2.7-5 3c-.3 0-.5.2-.7.4-.2.2-.3.5-.2.8v.2c0 .1 0 .1.1.2.2.5.8.9 1.6 1.3.8.3 1.8.6 3.1.8 0 .1.1.4.1.6 0 .1.1.3.1.4 0 .1.1.3.1.4.1.2.2.5.4.7.2.1.4.2.8.2h.4c.1 0 .3 0 .4-.1.2 0 .5-.1.8-.1.3 0 .6-.1 1-.1h.6c.2 0 .4 0 .6.1.8.1 1.5.6 2.4 1.2 1.9 1.3 3.5 2 5.2 2 1.7 0 3.4-.7 5.2-2 .8-.6 1.6-1.1 2.4-1.2.2 0 .4-.1.6-.1h.6c.4 0 .7 0 1 .1.3 0 .6.1.8.1.2 0 .3.1.4.1h.4c.3 0 .6-.1.8-.2.3-.2.4-.4.4-.7 0-.2.1-.3.1-.4 0-.1.1-.3.1-.4 0-.2.1-.4.1-.6 1.3-.2 2.3-.5 3.1-.8.9-.4 1.4-.8 1.6-1.3 0-.1.1-.2.1-.2V39c.2-.2.1-.5-.1-.7z"/></svg>';
                            break;
                        case "twitter":
                            i += '<svg class="fs-icon fs-icon--twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M22.2 38.9c-3.4-.3-6.1-1.7-7.5-5.1h3.6c-3.9-1.4-5.6-4.3-5.9-8.4 1.2.6 2.3.7 3.5.7-2.1-1.6-3.6-3.4-3.7-6.1-.1-1.5.5-2.8 1.3-4 4.4 5 9.7 8.3 16.5 8.9v-2.7c.1-1.9.6-3.6 1.9-5.1 2.5-2.8 6.9-3.1 9.8-.7.2.2.5.4.7.6.2.2.4.2.7.2 1.1-.3 2-.9 3-1.4.5-.3 1.1-.6 1.7-1-.4 1.1-.9 2-1.5 2.8-.6.8-1.3 1.6-2.2 2.2 1.6-.2 3.2-.6 4.8-1.1-.3.4-.6.8-.9 1.1l-2.7 2.4c-.1.1-.2.3-.2.4.1 3.3-.6 6.5-1.9 9.6-1.9 4.2-4.7 7.5-8.6 9.9-2.5 1.5-5.2 2.4-8.1 2.9-5.5.8-10.5-.5-15.1-3.3-.1 0-.1-.1-.2-.1h.2c1.1.5 2.2.4 3.3.3 2.3-.2 4.5-.9 6.6-2.1l.9-.6v-.3z"/></svg>';
                            break;
                        case "website":
                            i += '<svg class="fs-icon fs-icon--website" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF10E_" d="M14.7 7.4l2.8 2.6v.4h-1.9V17h-3.7v-4.2H8.1V17H4.4v-6.6H2.5V10L10 3l2.8 2.6v-.9h1.9z"/></svg>';
                            break;
                        case "youtube":
                            i += '<svg class="fs-icon fs-icon--youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.2 12.5V7.7l4.6 2.4-4.6 2.4zm9.5-7.3c-.7-.7-1.4-.7-1.7-.7-2.4-.2-6-.2-6-.2s-3.6 0-6 .2c-.3 0-1.1 0-1.7.7-.5.5-.6 1.7-.6 1.7s-.2 1.4-.2 2.8V11c0 1.4.2 2.8.2 2.8s.2 1.2.7 1.7c.6.6 1.4.5 1.8.6 1.4.1 5.8.2 5.8.2s3.6 0 6-.2c.3 0 1.1 0 1.7-.7.5-.5.7-1.7.7-1.7s.2-1.4.2-2.8V9.7c0-1.4-.2-2.8-.2-2.8s-.2-1.2-.7-1.7z"/></svg>';
                            break;
                        case "sharrow":
                            i += '<svg class="fs-icon fs-icon--share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#010101" d="M34 19.6V4.9L59.2 28 34 51.2V36.5C17.3 32.9 1.8 38.5.8 55.4-1 40.8 3.9 31.1 11.3 25.5c6.3-4.8 15.2-6.6 22.7-5.9z"/></svg>'
                    }
                }, r.paidContentLabel = e = function(t) {
                    this && this.block, this && this.attributes;
                    i = i + '<span class="data-viz__paid-content-name">' + s(null == (e = t.paidContentData.brandName) ? "" : e) + '</span><span class="data-viz__paid-content-logo"' + n("style", a({
                        color: t.paidContentData.primaryColor
                    }), !0, !1) + ">" + s(null == (e = " " + t.paidContentData.label) ? "" : e) + "</span>"
                }, r.pickItem = e = function(t) {
                    this && this.block, this && this.attributes;
                    i = i + '<div class="editors-pick"><div class="data-viz__timestamp">' + s(null == (e = t.timestamp) ? "" : e) + "</div>", t.paidContentData && (i += '<div class="data-viz__paid-content-container">', r.paidContentLabel(t), i += "</div>"), i = i + '<a class="data-viz__title"' + n("href", t.uri, !0, !1) + n("title", t.title, !0, !1) + ">" + s(null == (e = t.title) ? "" : e) + "</a>", r.byline(t, "test", "test"), i += "</div>"
                }, t && (i += '<div class="editors-picks">', function() {
                    var e = t;
                    if ("number" == typeof e.length)
                        for (var i = 0, n = e.length; i < n; i++) {
                            var s = e[i];
                            r.pickItem(s)
                        } else {
                            var n = 0;
                            for (var i in e) {
                                n++;
                                var s = e[i];
                                r.pickItem(s)
                            }
                        }
                }.call(this), i += '<a class="editors-picks__see-all" href="https://www.forbes.com/editors-picks/"><span>See All</span>', r.icon("arrowRight"), i += "</a></div>")
            }.call(this, "picksData" in o ? o.picksData : "undefined" != typeof picksData ? picksData : void 0), i
        }
        e.a = r;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            c = Object.prototype.hasOwnProperty,
            l = /["&<>]/
    },
    295: function(t, e) {
        function i(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }
        document.addEventListener("DOMContentLoaded", function() {
            [].concat(i(document.querySelectorAll(".brand-voice-label"))).forEach(function(t) {
                t.addEventListener("click", function(t) {
                    t.preventDefault(), t.stopPropagation()
                })
            })
        })
    },
    296: function(t, e) {
        document.addEventListener("DOMContentLoaded", function() {
            var t = document.querySelector(".edition-dropdown");
            document.querySelector(".edition-dropdown__button").addEventListener("click", function() {
                t.classList.toggle("edition-dropdown--open")
            })
        })
    },
    297: function(t, e, i) {
        "use strict";

        function n(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }
        var s = i(122),
            a = (i.n(s), i(33)),
            r = i(2),
            o = i(1),
            c = (i.n(o), i(3)),
            l = i(298);
        document.addEventListener("DOMContentLoaded", function() {
            function t(t) {
                var e = t.querySelector(".channel__show-more-btn");
                e.addEventListener("click", function() {
                    e.parentNode.removeChild(e), [].concat(n(t.querySelectorAll(".card--show-more"))).forEach(function(t) {
                        t.classList.remove("card--show-more")
                    })
                })
            }

            function e() {
                for (var e = 0; e < h.length; e++) {
                    var n = h[e];
                    if (!d(n)) break;
                    ! function() {
                        var a = (n.getAttribute("id") || "").split("-")[1] || "",
                            r = n.dataset.lazyIndex,
                            d = {
                                row: i[r || 0] || {},
                                index: a,
                                svgIcons: s
                            },
                            u = document.createElement("div");
                        u.innerHTML = Object(l.a)(d), n.appendChild(u), Object(c.insertAd)(o.isMobile ? "ntv-mobchannel" : "ntv-deskchannel", u), t(u), setTimeout(function() {
                            u.classList.add("channel__content--lazy-loaded");
                            var t = new CustomEvent("fbs-channel-response", {
                                detail: u
                            });
                            document.dispatchEvent(t)
                        }), h.splice(e, 1), e--
                    }()
                }
                0 === h.length && window.removeEventListener("scroll", u)
            }
            var i = r.s.lazyLoadData,
                d = function(t) {
                    return t.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop <= window.innerHeight + (window.pageYOffset - 200)
                },
                h = [].concat(n(document.querySelectorAll(".channel--normal"))),
                u = void 0;
            u = Object(a.a)(e, 200), window.addEventListener("scroll", u)
        })
    },
    298: function(t, e, i) {
        "use strict";

        function n(t, e, i, n) {
            return !1 !== e && null != e && (e || "class" !== t && "style" !== t) ? !0 === e ? " " + (n ? t : t + '="' + t + '"') : ("function" == typeof e.toJSON && (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), i || -1 === e.indexOf('"')) ? (i && (e = o(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'") : ""
        }

        function s(t, e) {
            return Array.isArray(t) ? a(t, e) : t && "object" == (void 0 === t ? "undefined" : d(t)) ? r(t) : t || ""
        }

        function a(t, e) {
            for (var i, n = "", a = "", r = Array.isArray(e), c = 0; c < t.length; c++)(i = s(t[c])) && (r && e[c] && (i = o(i)), n = n + a + i, a = " ");
            return n
        }

        function r(t) {
            var e = "",
                i = "";
            for (var n in t) n && t[n] && h.call(t, n) && (e = e + i + n, i = " ");
            return e
        }

        function o(t) {
            var e = "" + t,
                i = u.exec(e);
            if (!i) return t;
            var n, s, a, r = "";
            for (n = i.index, s = 0; n < e.length; n++) {
                switch (e.charCodeAt(n)) {
                    case 34:
                        a = "&quot;";
                        break;
                    case 38:
                        a = "&amp;";
                        break;
                    case 60:
                        a = "&lt;";
                        break;
                    case 62:
                        a = "&gt;";
                        break;
                    default:
                        continue
                }
                s !== n && (r += e.substring(s, n)), s = n + 1, r += a
            }
            return s !== n ? r + e.substring(s, n) : r
        }

        function c(t) {
            if (!t) return "";
            if ("object" == (void 0 === t ? "undefined" : d(t))) {
                var e = "";
                for (var i in t) h.call(t, i) && (e = e + i + ":" + t[i] + ";");
                return e
            }
            return t + ""
        }

        function l(t) {
            var e, i = "",
                a = {},
                r = t || {};
            return function(t, r, l, d, h) {
                a.iconPreview = e = function(t) {
                    this && this.block, this && this.attributes;
                    "video" === t.type && (i = i + '<div class="card__icon card__icon--preview">' + (null == (e = h.play) ? "" : e) + "</div>")
                }, a.previewLarge = e = function(t, r, l) {
                    this && this.block, this && this.attributes;
                    i = i + '<a class="preview ratio16x9"' + n("href", t.url, !0, !1) + n("aria-label", t.title, !0, !1) + n("data-ga-track", "editors picks" === r ? "Cover Story - " + t.type + " - Position 0 - " + t.title : "Channel - Block " + l + " - " + r + " - " + t.type + " - Position " + t.trackingIndex + " - " + t.title, !0, !1) + '><div class="preview__overflow-wrapper">', i = "editors picks" === r ? i + '<div class="preview__image preview__image--non-progressive"' + n("style", c("background-image: url(" + t.image + ")"), !0, !1) + "></div>" : i + '<progressive-image class="preview__image"' + n("background-image", t.image, !0, !1) + "></progressive-image>", a.iconPreview(t, r, l), i += "</div>", t.eyebrows && (i = i + "<h3" + n("class", s(["preview__eyebrows", "editors picks" !== r ? "preview__eyebrows--mobile-left" : ""], [!1, !0]), !1, !1) + "><span" + n("class", s([t.color ? "preview__eyebrows--color-" + t.color : ""], [!0]), !1, !1) + ">" + o(null == (e = t.eyebrows) ? "" : e) + "</span></h3>"), a.photoCreditLarge(t), i = i + "<div" + n("class", s(["card--large__color-bar", t.color ? "card__color--" + t.color : ""], [!1, !0]), !1, !1) + "></div></a>"
                }, a.previewSmall = e = function(t, e, s, r) {
                    this && this.block, this && this.attributes;
                    i = i + '<a class="preview ratio16x9"' + n("href", t.url, !0, !1) + n("aria-label", t.title, !0, !1) + n("data-ga-track", r ? "Homepage Forbes List - " + t.title : "Channel - Block " + s + " - " + e + " - " + t.type + " - Position " + t.trackingIndex + " - " + t.title, !0, !1) + '><progressive-image class="preview__image"' + n("background-image", t.image, !0, !1) + "></progressive-image>", a.iconPreview(t, e, s), i += "</a>"
                }, a.photoCreditLarge = e = function(t) {
                    this && this.block, this && this.attributes;
                    t.photoCredit && (i = i + '<div class="card__photocredit--large">' + o(null == (e = t.photoCredit) ? "" : e) + "</div>")
                }, a.photoCreditSmall = e = function(t) {
                    this && this.block, this && this.attributes;
                    t.photoCredit && (i = i + '<div class="card__photocredit--small">' + o(null == (e = t.photoCredit) ? "" : e) + "</div>")
                }, a.previewText = e = function(t) {
                    this && this.block, this && this.attributes;
                    i = i + '<div class="preview"><a class="preview__link ratio1x2"' + n("href", t.url, !0, !1) + n("aria-label", t.title, !0, !1) + n("data-ga-track", "Channel - Block " + r + " - " + l + " - " + t.type + " - Position " + t.trackingIndex + " - " + t.title, !0, !1) + '><progressive-image class="preview__image"' + n("background-image", t.image, !0, !1) + "></progressive-image>", a.iconPreview(t, l, r), i += "</a></div>"
                }, a.bylineAuthor = e = function(t, s, a, r, c) {
                    this && this.block, this && this.attributes;
                    (t || {}).name && (i += '<div class="byline__author">', i += c ? '<span class="byline__by-space">&nbsp;</span><span class="byline__by">and</span>' : '<span class="byline__by">By</span>', i = i + '<a class="byline__author-name"' + n("href", t.url, !0, !1) + n("data-ga-track", "editors picks" === s ? "Cover Story - Position 0 - " + t.name : "Channel - Block " + a + " - " + s + " - Position " + r + " - " + t.name, !0, !1) + ">" + o(null == (e = t.name) ? "" : e) + "</a>", t.displayType && (i = i + '<span class="byline__author-type">' + o(null == (e = t.displayType) ? "" : e) + "</span>"), i += "</div>")
                }, a.byline = e = function(t, e, n) {
                    this && this.block, this && this.attributes;
                    "video" !== t.type && (i += '<span class="byline"><div class="byline__author-group">', a.bylineAuthor(t.author, e, n, t.trackingIndex || 0, !1), function() {
                        var i = t.coAuthors || [];
                        if ("number" == typeof i.length)
                            for (var s = 0, r = i.length; s < r; s++) {
                                var o = i[s];
                                a.bylineAuthor(o, e, n, t.trackingIndex || 0, !0)
                            } else {
                                var r = 0;
                                for (var s in i) {
                                    r++;
                                    var o = i[s];
                                    a.bylineAuthor(o, e, n, t.trackingIndex || 0, !0)
                                }
                            }
                    }.call(this), i += "</div></span>")
                }, a.bylineStatsLarge = e = function(t, e, n) {
                    this && this.block, this && this.attributes;
                    i += '<p class="byline-stats byline-stats--large">', a.byline(t, e, n), i += "</p>"
                }, a.bylineStatsSmall = e = function(t, e, n) {
                    this && this.block, this && this.attributes;
                    i += '<p class="byline-stats byline-stats--small">', a.byline(t, e, n), i += "</p>"
                }, a.iconPreview = e = function(t) {
                    this && this.block, this && this.attributes;
                    "video" === t.type && (i = i + '<div class="card__icon card__icon--preview">' + (null == (e = h.play) ? "" : e) + "</div>")
                }, a.brandvoice = e = function(t) {
                    this && this.block, this && this.attributes;
                    i = i + '<span class="brand">' + o(null == (e = t.brandVoiceBrand) ? "" : e) + '</span><span class="brand-voice">' + o(null == (e = " BRANDVOICE") ? "" : e) + "</span>"
                }, a.paidContentLabel = e = function(t) {
                    this && this.block, this && this.attributes;
                    i = i + '<span class="paid-content__brand-name">' + o(null == (e = t.paidContentData.brandName) ? "" : e) + '</span><span class="paid-content__type"' + n("style", c({
                        color: t.paidContentData.primaryColor
                    }), !0, !1) + ">" + o(null == (e = " " + t.paidContentData.label) ? "" : e) + "</span>"
                }, a.card = e = function(t, e, r, o, c, l, d) {
                    this && this.block, this && this.attributes;
                    switch (i = i + "<div" + (n("class", s(["card", t.cardClass, {
                        "csf-block": l
                    }, {
                        "channel__content__lazy-item": "small" === e
                    }, {
                        "channel__content__lazy-item-delay-400": "small" === e && 0 !== d
                    }], [!1, !0, !0, !0, !0]), !1, !1) + n("data-video-id", t.videoId, !0, !1) + n("data-video-title", t.videoTitle, !0, !1)) + ">", e) {
                        case "large":
                            a.cardLarge(t, r, o, c);
                            break;
                        case "small":
                            a.cardSmall(t, o, c);
                            break;
                        case "text":
                            a.cardText(t, o, c);
                            break;
                        case "smallForbesLists":
                            a.cardSmallForbesLists(t)
                    }
                    i += "</div>"
                }, a.cardLarge = e = function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        c = arguments[2],
                        l = arguments[3];
                    this && this.block, this && this.attributes;
                    a.previewLarge(t, c, l), t.brandVoiceBrand && (i += '<div class="card--large__brand-voice-container brand-voice-label">', a.brandvoice(t), i += "</div>"), t.paidContentData ? (i += '<div class="card--large__paid-content-container card--paid-content-label">', a.paidContentLabel(t), i += "</div>") : t.isInsights && (i = i + '<div class="card--large__insights card__insights">' + o(null == (e = "FORBES INSIGHTS") ? "" : e) + "</div>"), i = i + '<div class="card--large__title"><a' + (n("class", s(["headlink", "h1--dense", t.color ? "card__color--" + t.color : ""], [!1, !1, !0]), !1, !1) + n("href", t.url, !0, !1) + n("data-ga-track", "editors picks" === c ? "Cover Story - " + t.type + " - Position 0 - " + t.title : "Channel - Block " + l + " - " + c + " - " + t.type + " - Position " + t.trackingIndex + " - " + t.title, !0, !1)) + ">" + o(null == (e = t.title) ? "" : e) + "</a>", t.video && (i = i + '<span class="byline__duration">| ' + o(null == (e = t.video.duration || "") ? "" : e) + "</span>"), i += "</div>", t.author && (!(t.paidContentData || {}).showByline && t.paidContentData || a.bylineStatsLarge(t, c, l)), r && (i = i + '<h2 class="card__description">' + o(null == (e = t.description) ? "" : e) + "</h2>"), a.photoCreditLarge(t)
                }, a.cardSmall = e = function(t, s, r) {
                    this && this.block, this && this.attributes;
                    t.isMobile || a.previewSmall(t, s, r, !1), a.photoCreditSmall(t), t.brandVoiceBrand && (i += '<div class="card--small__brand-voice-container brand-voice-label">', a.brandvoice(t), i += "</div>"), t.paidContentData ? (i += '<div class="card--small__paid-content-container card--paid-content-label">', a.paidContentLabel(t), i += "</div>") : t.isInsights && (i = i + '<div class="card--small__insights card__insights">' + o(null == (e = "FORBES INSIGHTS") ? "" : e) + "</div>"), i = i + '<a class="headlink"' + n("href", t.url, !0, !1) + n("data-ga-track", "Channel - Block " + r + " - " + s + " - " + t.type + " - Position " + t.trackingIndex + " - " + t.title, !0, !1) + '><h3 class="h3--dense">', t.video && (i = i + '<span class="card__watch-video">' + o(null == (e = "Watch: ") ? "" : e) + "</span>"), i = i + "<span>" + o(null == (e = t.title) ? "" : e), t.video && (i = i + '<span class="byline__duration">| ' + o(null == (e = t.video.duration || "") ? "" : e) + "</span>"), i += "</span></h3></a>", t.author && (!(t.paidContentData || {}).showByline && t.paidContentData || a.bylineStatsSmall(t, s, r))
                }, a.cardText = e = function(t, s, r) {
                    this && this.block, this && this.attributes;
                    t.image && !t.isMobile && a.previewText(t), i += '<div class="card__text">', t.brandVoiceBrand && (i += '<div class="card--text__brand-voice-container brand-voice-label">', a.brandvoice(t), i += "</div>"), t.paidContentData ? (i += '<div class="card--text__paid-content-container card--paid-content-label">', a.paidContentLabel(t), i += "</div>") : t.isInsights && (i = i + '<div class="card--text__insights card__insights">' + o(null == (e = "FORBES INSIGHTS") ? "" : e) + "</div>"), i = i + '<a class="headlink h4--dense"' + n("href", t.url, !0, !1) + n("data-ga-track", "Channel - Block " + r + " - " + s + " - " + t.type + " - Position " + t.trackingIndex + " - " + t.title, !0, !1) + ">", t.video && (i = i + '<span class="card__watch-video">' + o(null == (e = "Watch: ") ? "" : e) + "</span>"), i = i + "<span>" + o(null == (e = t.title) ? "" : e) + "</span></a>", t.video && (i = i + '<span class="byline__duration">| ' + o(null == (e = t.video.duration || "") ? "" : e) + "</span>"), a.byline(t, s, r), i += "</div>"
                }, a.cardSmallForbesLists = e = function(t) {
                    this && this.block, this && this.attributes;
                    a.previewSmall(t, null, null, !0), i = i + '<h2 class="card__fl-logo">FORBES&nbsp;<span>LISTS</span></h2><a class="headlink"' + n("href", t.url, !0, !1) + n("data-ga-track", "Homepage Forbes List - " + t.title, !0, !1) + '><h3 class="h3--dense">' + o(null == (e = t.title) ? "" : e) + '</h3></a><p class="body--dense">' + o(null == (e = t.description) ? "" : e) + '</p><a class="card__fl-link"' + n("href", t.url, !0, !1) + n("data-ga-track", "Homepage Forbes List - View List - " + t.title, !0, !1) + "><span>View the list</span><span>" + (null == (e = h.arrowRight) ? "" : e) + "</span></a>"
                }, a.ntvLoadingPlaceholder = e = function(t) {
                    this && this.block, this && this.attributes;
                    i = i + '<div class="ntv-loading"><div' + n("class", s(["ntv-loading__image", t ? "ratio1x2" : "ratio16x9"], [!1, !0]), !1, !1) + '></div><div class="ntv-loading__text"><div class="ntv-loading__small-text"></div>';
                    var e = 0,
                        a = t ? 3 : 4;
                    for (i += "<ul>"; ++e <= a;) i = i + "<li" + n("class", s(["ntv-loading__large-text ntv-loading__large-text--" + e], [!0]), !1, !1) + "></li>";
                    i += "</ul></div></div>"
                }, a.channelSidebar = e = function(t, e) {
                    this && this.block, this && this.attributes;
                    i += '<div class="channel__sidebar">',
                        function() {
                            var e = t.blocks[0].items.smallCards;
                            if ("number" == typeof e.length)
                                for (var i = 0, n = e.length; i < n; i++) {
                                    var s = e[i];
                                    a.card(s, "small", d = !1, l = t.title, r = t.rowIdLetter, null, i)
                                } else {
                                    var n = 0;
                                    for (var i in e) {
                                        n++;
                                        var s = e[i];
                                        a.card(s, "small", d = !1, l = t.title, r = t.rowIdLetter, null, i)
                                    }
                                }
                        }.call(this), i += "</div>"
                }, (t.blocks || []).length > 0 && (i += '<div class="channel__content"><div class="channel__content__lazy-item">', a.card(t.blocks[0].items.largeCard, "large", !1, t.title, t.rowIdLetter), i += "</div>", a.channelSidebar(t), i = i + '<div class="channel__divider"></div><div class="channel__columns channel__content__lazy-item channel__content__lazy-item-delay-600"><div class="channel__column"><div class="fbs-ad--ntv-mobchannel-wrapper fbs-ad--progressive"' + n("data-custom-targeting", "ntv-channel:" + t.title.replace(/(-? ?RD|(New))/g, "").toLowerCase().trim(), !0, !1) + ">", a.ntvLoadingPlaceholder(!0), i += "</div>", function() {
                    var e = t.blocks[0].items.leftColumn.listCards;
                    if ("number" == typeof e.length)
                        for (var i = 0, n = e.length; i < n; i++) {
                            var s = e[i];
                            a.card(s, "text", d = !1, l = t.title, r = t.rowIdLetter)
                        } else {
                            var n = 0;
                            for (var i in e) {
                                n++;
                                var s = e[i];
                                a.card(s, "text", d = !1, l = t.title, r = t.rowIdLetter)
                            }
                        }
                }.call(this), i += '</div><div class="channel__column">', function() {
                    var e = t.blocks[0].items.rightColumn.listCards;
                    if ("number" == typeof e.length)
                        for (var i = 0, n = e.length; i < n; i++) {
                            var s = e[i];
                            a.card(s, "text", d = !1, l = t.title, r = t.rowIdLetter)
                        } else {
                            var n = 0;
                            for (var i in e) {
                                n++;
                                var s = e[i];
                                a.card(s, "text", d = !1, l = t.title, r = t.rowIdLetter)
                            }
                        }
                }.call(this), i = i + '<div class="fbs-ad--ntv-deskchannel-wrapper fbs-ad--progressive" tabindex="-1" aria-hidden="true"' + n("data-custom-targeting", "ntv-channel:" + t.title.replace(/(-? ?RD|(New))/g, "").toLowerCase().trim(), !0, !1) + ">", a.ntvLoadingPlaceholder(!0), i = i + '</div></div><button class="channel__show-more-btn"><span>Show More</span><span>' + (null == (e = h.arrowRight) ? "" : e) + "</span></button></div></div>")
            }.call(this, "row" in r ? r.row : "undefined" != typeof row ? row : void 0, "rowLetterId" in r ? r.rowLetterId : "undefined" != typeof rowLetterId ? rowLetterId : void 0, "rowTitle" in r ? r.rowTitle : "undefined" != typeof rowTitle ? rowTitle : void 0, "showDescription" in r ? r.showDescription : "undefined" != typeof showDescription ? showDescription : void 0, "svgIcons" in r ? r.svgIcons : "undefined" != typeof svgIcons ? svgIcons : void 0), i
        }
        e.a = l;
        var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            h = Object.prototype.hasOwnProperty,
            u = /["&<>]/
    },
    299: function(t, e) {
        document.addEventListener("DOMContentLoaded", function() {
            function t() {
                var n = 0,
                    s = setInterval(function() {
                        if (++n >= 20) clearInterval(t);
                        else if (window.MktoForms2) {
                            clearInterval(s);
                            var a = (e.id || "").replace("mktoForm_", "");
                            window.MktoForms2.loadForm("https://app-ab13.marketo.com", "790-SNV-353", a, function(t) {
                                t.onSuccess(function() {
                                    return t.getFormElem().hide(), i.style.display = "block", !1
                                })
                            })
                        }
                    }, 500)
            }
            var e = document.querySelector(".consumer__mktoForm"),
                i = document.querySelector(".consumer-marketing__confirmation");
            e && (! function() {
                var t = document.createElement("script");
                t.src = "https://app-ab13.marketo.com/js/forms2/js/forms2.min.js", e.parentElement.appendChild(t)
            }(), t())
        })
    },
    4: function(t, e, i) {
        "use strict";
        var n = i(1);
        i.n(n);
        document.addEventListener("DOMContentLoaded", function() {
            function t(t) {
                s.classList.contains("body--search-modal-open") || (s.classList.add("body--search-modal-open"), n.isIOS && (i.classList.add("touch-screen-input-fixed-modal"), s.classList.add("touch-screen-input-fixed-modal"))), t.preventDefault()
            }

            function e(t) {
                t.preventDefault(), window.location.href = "https://www.forbes.com/search/?q=" + r.value
            }
            var i = document.querySelector("html"),
                s = document.querySelector("body"),
                a = document.querySelector(".search-modal"),
                r = document.querySelector(".search-modal__input"),
                o = a.querySelector(".search-modal__icon--close-circle"),
                c = document.querySelector(".header .icon--search"),
                l = document.querySelector(".search-modal__submit");
            c.addEventListener("click", function(e) {
                t(e)
            }), c.addEventListener("keyup", function(e) {
                "Enter" !== e.key && 13 !== e.keyCode && 13 !== e.which || t(e)
            }), o.addEventListener("click", function() {
                s.classList.remove("body--search-modal-open"), n.isIOS && (i.classList.remove("touch-screen-input-fixed-modal"), s.classList.remove("touch-screen-input-fixed-modal"))
            }), o.addEventListener("keyup", function(t) {
                "Enter" !== t.key && 13 !== t.keyCode && 13 !== t.which || s.classList.remove("body--search-modal-open")
            }), l.addEventListener("click", function(t) {
                e(t)
            }), l.addEventListener("keyup", function(t) {
                "Enter" !== t.key && 13 !== t.keyCode && 13 !== t.which || e(t)
            })
        })
    },
    5: function(t, e, i) {
        "use strict";

        function n(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
            return Array.from(t)
        }
        var s = i(1),
            a = (i.n(s), i(3));
        document.addEventListener("DOMContentLoaded", function() {
            function t() {
                v.classList.remove(g), v.classList.add(_), E.classList.add(S), C = window.pageYOffset
            }

            function e() {
                v.classList.remove(_), v.classList.add(g), E.classList.remove(S), window.scrollTo(0, C)
            }

            function i(t) {
                var e = document.querySelector("." + k),
                    i = t.target.classList.contains("header__title") ? t.target.parentNode : t.target,
                    s = i.classList.contains("header__channel");
                e && s && !e.isSameNode(i) && e.classList.remove(k), i.classList.contains(k) ? (i.classList.remove(k), i.classList.add(z), i.setAttribute("data-ga-track", "U18 - Channel: " + i.dataset.title + " - Position " + i.dataset.position + " - Channel Expanded"), y.setAttribute("aria-hidden", "true")) : (i.classList.remove(z), [].concat(n(i.querySelectorAll(".header__section"))).length > 1 ? i.classList.add(k) : i.classList.add("header__channel--no-sections"), i.removeAttribute("data-ga-track"), y.setAttribute("aria-hidden", "false"))
            }

            function r() {
                u.classList.add(T), M && M.classList.add(I)
            }

            function o() {
                u.classList.remove(T), M && M.classList.remove(I)
            }

            function c() {
                var t = window.pageYOffset;
                t > A && t > u.clientHeight ? r() : o(), A = t
            }

            function l() {
                O.classList.remove("main-content__body--animating"), O.style.paddingTop = 0, M && (M.classList.remove(V), M.style.height = "auto")
            }

            function d(t) {
                M && (O.classList.add("main-content__body--animating"), O.style.paddingTop = t + "px", M.classList.add(V), M.style.height = t + "px")
            }

            function h(t) {
                t !== N && D && (D = !1, d(t), window.addEventListener("scroll", c), setTimeout(function() {
                    l()
                }, 5e3))
            }
            var u = document.querySelector(".header"),
                v = document.querySelector(".header__nav"),
                f = u.querySelector(".icon--hamburger"),
                p = u.querySelector(".icon--close"),
                _ = "header__nav--is-open",
                g = "header__nav--is-closed",
                m = [].concat(n(document.querySelectorAll(".header__channel"))),
                w = [].concat(n(document.querySelectorAll(".header__section"))),
                b = [].concat(n(document.querySelectorAll(".header__title"))),
                y = document.querySelector(".header__subnav"),
                x = u.querySelector(".icon--search"),
                L = document.querySelector(".header__channels").lastChild,
                k = "header__channel--is-open",
                z = "header__channel--is-closed",
                E = document.querySelector("body"),
                S = "body__prevent-scrolling",
                C = void 0;
            f.addEventListener("click", function() {
                t()
            }), f.addEventListener("keyup", function(e) {
                "Enter" !== e.key && 13 !== e.keyCode && 13 !== e.which || t()
            }), p.addEventListener("click", function() {
                e()
            }), p.addEventListener("keyup", function(t) {
                "Enter" !== t.key && 13 !== t.keyCode && 13 !== t.which || e()
            }), s.isMobile || s.isTablet ? m.forEach(function(t) {
                t.setAttribute("data-ga-track", "U18 - Channel: " + t.dataset.title + " - Position " + t.dataset.position + " - Channel Expanded"), t.addEventListener("click", function(t) {
                    i(t)
                })
            }) : ([].concat(n(m), n(w)).forEach(function(t) {
                t.classList.contains("header__channel") ? [].concat(n(t.querySelectorAll(".header__section"))).length > 1 ? t.classList.add("header__hoverable") : t.classList.add("header__channel--no-sections") : t.classList.add("header__hoverable"), t.addEventListener("mouseenter", function() {
                    var t = document.querySelector("." + k);
                    t && (t.classList.remove(k), document.activeElement.blur())
                })
            }), b.forEach(function(t) {
                t.addEventListener("focus", function(t) {
                    i(t)
                })
            }), x.addEventListener("focus", function() {
                L.classList.remove(k)
            }));
            var A = 0,
                M = document.querySelector(".fbs-ad--top-wrapper"),
                I = "fbs-ad--top-wrapper--up",
                V = "fbs-ad--top-wrapper--sticky",
                T = "header__nav--up",
                O = document.querySelector(".main-content--body"),
                N = 7,
                D = !0;
            a.adObservable.subscribe(h), s.isMobile ? O.style.paddingTop = 0 : M ? M.classList.add("fbs-ad--top-wrapper--desktop") : window.addEventListener("scroll", c)
        })
    },
    52: function(t, e, i) {
        "use strict";
        var n = i(2),
            s = n.s.channelColor,
            a = n.s.channelId,
            r = n.s.channelName,
            o = n.s.edittools,
            c = n.s.name,
            l = n.s.sectionId,
            d = n.s.variantUri;
        document.addEventListener("DOMContentLoaded", function() {
            function t() {
                return -1 !== document.cookie.indexOf("forbeseditor")
            }

            function e() {
                var t = "edittools.forbes.com" === o,
                    e = -1 !== window.location.host.indexOf("www-staging"),
                    i = !0;
                return t && e && (i = !1), i
            }

            function i() {
                var t = document.createElement("script");
                t.src = "https://i.forbesimg.com/assets/js/core/jquery-1.7.2.min.js", document.body.appendChild(t)
            }

            function n() {
                var t = document.createElement("script");
                t.src = "https://" + o + "/tools/init", document.body.appendChild(t)
            }

            function h() {
                var t = document.createElement("link");
                t.href = "https://images.forbes.com/assets/fonts/fbs-typography/0233/fbs-typography-2.33.css", t.type = "text/css", t.rel = "stylesheet", w.appendChild(t)
            }

            function u(t) {
                var e = document.createElement("div");
                e.innerHTML = t;
                var i = new DocumentFragment;
                i.appendChild(e), i.querySelectorAll("script").forEach(function(t) {
                    var e = document.createElement("script");
                    e.innerText = t.innerText, w.appendChild(e), t.remove()
                }), b.innerHTML = "";
                for (var n = e.firstChild; n;) b.appendChild(n), b.classList.add("injectButtons"), n = e.firstChild;
                b.classList.add("injectButtons")
            }

            function v(t) {
                var e = void 0;
                a && (e = {
                    id: l ? a.concat(l) : a,
                    sectionId: l,
                    channelName: r,
                    sectionName: c
                }, t.channelSectionData = e, t.color = s);
                var i = a ? "/simple-data/chansec/" + c + "/rows" : "/simple-data/homepage/" + d + "/rows";
                fetch(i, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(t)
                }).then(function(t) {
                    return t.text()
                }).then(function(t) {
                    u(t), window.jQuery(".injectButtons").trigger("change")
                })
            }

            function f() {
                window.jQuery(document).on("editToolsPreviewInit", function(t, e) {
                    y = e.data.promotedContent, v(y)
                }).on("editToolsPreviewUpdate", function(t, e) {
                    Object.keys(e.data.promotedContent).forEach(function(t) {
                        y[t] = e.data.promotedContent[t]
                    }), v(y)
                })
            }

            function p() {
                window.fbs_settings = {}, i();
                var t = setInterval(function() {
                    window.jQuery && (clearInterval(t), f(), n())
                }, 200)
            }

            function _(t) {
                return function() {
                    x ? x && !m.classList.contains("et-on") ? (m.classList.add("et-on"), t.textContent = "Hide Tools") : x && m.classList.contains("et-on") && (m.classList.remove("et-on"), t.textContent = "Show Tools") : (p(), x = !0, t.textContent = "Hide Tools")
                }
            }

            function g() {
                h();
                var t = document.createElement("button"),
                    e = document.createElement("i"),
                    i = document.createElement("span");
                e.setAttribute("class", "icon icon-cog"), i.setAttribute("class", "et-label"), i.textContent = "Edit This Page", t.setAttribute("class", "edittools-btn"), t.appendChild(i), t.appendChild(e), t.onclick = _(i), document.body.appendChild(t)
            }
            var m = document.getElementsByTagName("html")[0],
                w = document.getElementsByTagName("head")[0],
                b = document.querySelector("body>.main-content>main"),
                y = {},
                x = !1;
            ! function() {
                t() && e() && g()
            }()
        })
    },
    86: function(t, e) {
        document.addEventListener("DOMContentLoaded", function() {
            document.addEventListener("fbs-ad-render", function(t) {
                var e = t.detail;
                if (e.slot) {
                    var i = function(t) {
                            var e = t.querySelector(".ntv-loading");
                            e && e.parentNode.removeChild(e)
                        },
                        n = e.slot.getTargetingMap(),
                        s = e.slot.getSlotElementId(),
                        a = n["ntv-deskchannel"] || n["ntv-mobchannel"];
                    if (a) {
                        var r = n["ntv-deskchannel"] ? "deskchannel" : "mobchannel",
                            o = document.querySelector("#ntv-" + r + "-" + a);
                        if (!o) return;
                        i(o.parentNode.parentNode)
                    } else if (s.includes("ntv-")) {
                        var c = document.querySelector(".fbs-ad--" + s + "-wrapper");
                        c && i(c)
                    }
                }
            })
        })
    }
}, [285]);
//# sourceMappingURL=homepage-02b2574c3a9fd74b42b6.js.map