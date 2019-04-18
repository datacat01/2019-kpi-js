/**
 * CA State Template v5.5 -  @version v5.5.0 -  12/10/2018 
  STYLES COMPILED FROM SOURCE (source/js) DO NOT MODIFY */
$ = jQuery.noConflict(),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery)
    }(this, function(t, e) {
        "use strict";

        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function a(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t
        }

        function l(s) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {},
                    e = Object.keys(o);
                "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(o, t).enumerable
                }))), e.forEach(function(t) {
                    var e, i, n;
                    e = s, n = o[i = t], i in e ? Object.defineProperty(e, i, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[i] = n
                })
            }
            return s
        }
        for (var s, i, o, r, c, h, d, u, p, f, g, m, v, y, _, w, b, C, x, E, T, $, k, A, S, D, I, O, P, N, H, M, j, L, z, W, F, R, V, q, B, U, K, Q, G, Y, Z, X, J, tt, et, it, nt, st, ot, at, rt, lt, ct, ht, dt, ut, pt, ft, gt, mt, vt, yt, _t, wt, bt, Ct = function(n) {
                var e = "transitionend";

                function t(t) {
                    var e = this,
                        i = !1;
                    return n(this).one(l.TRANSITION_END, function() {
                        i = !0
                    }), setTimeout(function() {
                        i || l.triggerTransitionEnd(e)
                    }, t), this
                }
                var l = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
                        return t
                    },
                    getSelectorFromElement: function(t) {
                        var e = t.getAttribute("data-target");
                        e && "#" !== e || (e = t.getAttribute("href") || "");
                        try {
                            return document.querySelector(e) ? e : null
                        } catch (t) {
                            return null
                        }
                    },
                    getTransitionDurationFromElement: function(t) {
                        if (!t) return 0;
                        var e = n(t).css("transition-duration");
                        return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0
                    },
                    reflow: function(t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function(t) {
                        n(t).trigger(e)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(e)
                    },
                    isElement: function(t) {
                        return (t[0] || t).nodeType
                    },
                    typeCheckConfig: function(t, e, i) {
                        for (var n in i)
                            if (Object.prototype.hasOwnProperty.call(i, n)) {
                                var s = i[n],
                                    o = e[n],
                                    a = o && l.isElement(o) ? "element" : (r = o, {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase());
                                if (!new RegExp(s).test(a)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + a + '" but expected type "' + s + '".')
                            } var r
                    }
                };
                return n.fn.emulateTransitionEnd = t, n.event.special[l.TRANSITION_END] = {
                    bindType: e,
                    delegateType: e,
                    handle: function(t) {
                        if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                    }
                }, l
            }(e = e && e.hasOwnProperty("default") ? e.default : e), xt = (i = "alert", r = "." + (o = "bs.alert"), c = (s = e).fn[i], h = {
                CLOSE: "close" + r,
                CLOSED: "closed" + r,
                CLICK_DATA_API: "click" + r + ".data-api"
            }, d = "alert", u = "fade", p = "show", f = function() {
                function n(t) {
                    this._element = t
                }
                var t = n.prototype;
                return t.close = function(t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                }, t.dispose = function() {
                    s.removeData(this._element, o), this._element = null
                }, t._getRootElement = function(t) {
                    var e = Ct.getSelectorFromElement(t),
                        i = !1;
                    return e && (i = document.querySelector(e)), i || (i = s(t).closest("." + d)[0]), i
                }, t._triggerCloseEvent = function(t) {
                    var e = s.Event(h.CLOSE);
                    return s(t).trigger(e), e
                }, t._removeElement = function(e) {
                    var i = this;
                    if (s(e).removeClass(p), s(e).hasClass(u)) {
                        var t = Ct.getTransitionDurationFromElement(e);
                        s(e).one(Ct.TRANSITION_END, function(t) {
                            return i._destroyElement(e, t)
                        }).emulateTransitionEnd(t)
                    } else this._destroyElement(e)
                }, t._destroyElement = function(t) {
                    s(t).detach().trigger(h.CLOSED).remove()
                }, n._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = s(this),
                            e = t.data(o);
                        e || (e = new n(this), t.data(o, e)), "close" === i && e[i](this)
                    })
                }, n._handleDismiss = function(e) {
                    return function(t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, a(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }]), n
            }(), s(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), s.fn[i] = f._jQueryInterface, s.fn[i].Constructor = f, s.fn[i].noConflict = function() {
                return s.fn[i] = c, f._jQueryInterface
            }, f), Et = (m = "button", y = "." + (v = "bs.button"), _ = ".data-api", w = (g = e).fn[m], b = "active", C = "btn", E = '[data-toggle^="button"]', T = '[data-toggle="buttons"]', $ = "input", k = ".active", A = ".btn", S = {
                CLICK_DATA_API: "click" + y + _,
                FOCUS_BLUR_DATA_API: (x = "focus") + y + _ + " blur" + y + _
            }, D = function() {
                function i(t) {
                    this._element = t
                }
                var t = i.prototype;
                return t.toggle = function() {
                    var t = !0,
                        e = !0,
                        i = g(this._element).closest(T)[0];
                    if (i) {
                        var n = this._element.querySelector($);
                        if (n) {
                            if ("radio" === n.type)
                                if (n.checked && this._element.classList.contains(b)) t = !1;
                                else {
                                    var s = i.querySelector(k);
                                    s && g(s).removeClass(b)
                                } if (t) {
                                if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
                                n.checked = !this._element.classList.contains(b), g(n).trigger("change")
                            }
                            n.focus(), e = !1
                        }
                    }
                    e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), t && g(this._element).toggleClass(b)
                }, t.dispose = function() {
                    g.removeData(this._element, v), this._element = null
                }, i._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = g(this).data(v);
                        t || (t = new i(this), g(this).data(v, t)), "toggle" === e && t[e]()
                    })
                }, a(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }]), i
            }(), g(document).on(S.CLICK_DATA_API, E, function(t) {
                t.preventDefault();
                var e = t.target;
                g(e).hasClass(C) || (e = g(e).closest(A)), D._jQueryInterface.call(g(e), "toggle")
            }).on(S.FOCUS_BLUR_DATA_API, E, function(t) {
                var e = g(t.target).closest(A)[0];
                g(e).toggleClass(x, /^focus(in)?$/.test(t.type))
            }), g.fn[m] = D._jQueryInterface, g.fn[m].Constructor = D, g.fn[m].noConflict = function() {
                return g.fn[m] = w, D._jQueryInterface
            }, D), Tt = (O = "carousel", N = "." + (P = "bs.carousel"), H = ".data-api", M = (I = e).fn[O], j = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0
            }, L = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, z = "next", W = "prev", F = "left", R = "right", V = {
                SLIDE: "slide" + N,
                SLID: "slid" + N,
                KEYDOWN: "keydown" + N,
                MOUSEENTER: "mouseenter" + N,
                MOUSELEAVE: "mouseleave" + N,
                TOUCHEND: "touchend" + N,
                LOAD_DATA_API: "load" + N + H,
                CLICK_DATA_API: "click" + N + H
            }, q = "carousel", B = "active", U = "slide", K = "carousel-item-right", Q = "carousel-item-left", G = "carousel-item-next", Y = "carousel-item-prev", Z = ".active", X = ".active.carousel-item", J = ".carousel-item", tt = ".carousel-item-next, .carousel-item-prev", et = ".carousel-indicators", it = "[data-slide], [data-slide-to]", nt = '[data-ride="carousel"]', st = function() {
                function o(t, e) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = I(t)[0], this._indicatorsElement = this._element.querySelector(et), this._addEventListeners()
                }
                var t = o.prototype;
                return t.next = function() {
                    this._isSliding || this._slide(z)
                }, t.nextWhenVisible = function() {
                    !document.hidden && I(this._element).is(":visible") && "hidden" !== I(this._element).css("visibility") && this.next()
                }, t.prev = function() {
                    this._isSliding || this._slide(W)
                }, t.pause = function(t) {
                    t || (this._isPaused = !0), this._element.querySelector(tt) && (Ct.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, t.cycle = function(t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, t.to = function(t) {
                    var e = this;
                    this._activeElement = this._element.querySelector(X);
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding) I(this._element).one(V.SLID, function() {
                            return e.to(t)
                        });
                        else {
                            if (i === t) return this.pause(), void this.cycle();
                            var n = i < t ? z : W;
                            this._slide(n, this._items[t])
                        }
                }, t.dispose = function() {
                    I(this._element).off(N), I.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, t._getConfig = function(t) {
                    return t = l({}, j, t), Ct.typeCheckConfig(O, t, L), t
                }, t._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && I(this._element).on(V.KEYDOWN, function(t) {
                        return e._keydown(t)
                    }), "hover" === this._config.pause && (I(this._element).on(V.MOUSEENTER, function(t) {
                        return e.pause(t)
                    }).on(V.MOUSELEAVE, function(t) {
                        return e.cycle(t)
                    }), "ontouchstart" in document.documentElement && I(this._element).on(V.TOUCHEND, function() {
                        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                            return e.cycle(t)
                        }, 500 + e._config.interval)
                    }))
                }, t._keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                        case 37:
                            t.preventDefault(), this.prev();
                            break;
                        case 39:
                            t.preventDefault(), this.next()
                    }
                }, t._getItemIndex = function(t) {
                    return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(J)) : [], this._items.indexOf(t)
                }, t._getItemByDirection = function(t, e) {
                    var i = t === z,
                        n = t === W,
                        s = this._getItemIndex(e),
                        o = this._items.length - 1;
                    if ((n && 0 === s || i && s === o) && !this._config.wrap) return e;
                    var a = (s + (t === W ? -1 : 1)) % this._items.length;
                    return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                }, t._triggerSlideEvent = function(t, e) {
                    var i = this._getItemIndex(t),
                        n = this._getItemIndex(this._element.querySelector(X)),
                        s = I.Event(V.SLIDE, {
                            relatedTarget: t,
                            direction: e,
                            from: n,
                            to: i
                        });
                    return I(this._element).trigger(s), s
                }, t._setActiveIndicatorElement = function(t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                        I(e).removeClass(B);
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && I(i).addClass(B)
                    }
                }, t._slide = function(t, e) {
                    var i, n, s, o = this,
                        a = this._element.querySelector(X),
                        r = this._getItemIndex(a),
                        l = e || a && this._getItemByDirection(t, a),
                        c = this._getItemIndex(l),
                        h = Boolean(this._interval);
                    if (t === z ? (i = Q, n = G, s = F) : (i = K, n = Y, s = R), l && I(l).hasClass(B)) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, s).isDefaultPrevented() && a && l) {
                        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                        var d = I.Event(V.SLID, {
                            relatedTarget: l,
                            direction: s,
                            from: r,
                            to: c
                        });
                        if (I(this._element).hasClass(U)) {
                            I(l).addClass(n), Ct.reflow(l), I(a).addClass(i), I(l).addClass(i);
                            var u = Ct.getTransitionDurationFromElement(a);
                            I(a).one(Ct.TRANSITION_END, function() {
                                I(l).removeClass(i + " " + n).addClass(B), I(a).removeClass(B + " " + n + " " + i), o._isSliding = !1, setTimeout(function() {
                                    return I(o._element).trigger(d)
                                }, 0)
                            }).emulateTransitionEnd(u)
                        } else I(a).removeClass(B), I(l).addClass(B), this._isSliding = !1, I(this._element).trigger(d);
                        h && this.cycle()
                    }
                }, o._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = I(this).data(P),
                            e = l({}, j, I(this).data());
                        "object" == typeof n && (e = l({}, e, n));
                        var i = "string" == typeof n ? n : e.slide;
                        if (t || (t = new o(this, e), I(this).data(P, t)), "number" == typeof n) t.to(n);
                        else if ("string" == typeof i) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i]()
                        } else e.interval && (t.pause(), t.cycle())
                    })
                }, o._dataApiClickHandler = function(t) {
                    var e = Ct.getSelectorFromElement(this);
                    if (e) {
                        var i = I(e)[0];
                        if (i && I(i).hasClass(q)) {
                            var n = l({}, I(i).data(), I(this).data()),
                                s = this.getAttribute("data-slide-to");
                            s && (n.interval = !1), o._jQueryInterface.call(I(i), n), s && I(i).data(P).to(s), t.preventDefault()
                        }
                    }
                }, a(o, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return j
                    }
                }]), o
            }(), I(document).on(V.CLICK_DATA_API, it, st._dataApiClickHandler), I(window).on(V.LOAD_DATA_API, function() {
                for (var t = [].slice.call(document.querySelectorAll(nt)), e = 0, i = t.length; e < i; e++) {
                    var n = I(t[e]);
                    st._jQueryInterface.call(n, n.data())
                }
            }), I.fn[O] = st._jQueryInterface, I.fn[O].Constructor = st, I.fn[O].noConflict = function() {
                return I.fn[O] = M, st._jQueryInterface
            }, st), $t = (at = "collapse", lt = "." + (rt = "bs.collapse"), ct = (ot = e).fn[at], ht = {
                toggle: !0,
                parent: ""
            }, dt = {
                toggle: "boolean",
                parent: "(string|element)"
            }, ut = {
                SHOW: "show" + lt,
                SHOWN: "shown" + lt,
                HIDE: "hide" + lt,
                HIDDEN: "hidden" + lt,
                CLICK_DATA_API: "click" + lt + ".data-api"
            }, pt = "show", ft = "collapse", gt = "collapsing", mt = "collapsed", vt = "width", yt = "height", _t = ".show, .collapsing", wt = '[data-toggle="collapse"]', bt = function() {
                function r(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = ot.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var i = [].slice.call(document.querySelectorAll(wt)), n = 0, s = i.length; n < s; n++) {
                        var o = i[n],
                            a = Ct.getSelectorFromElement(o),
                            r = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                                return t === e
                            });
                        null !== a && 0 < r.length && (this._selector = a, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var t = r.prototype;
                return t.toggle = function() {
                    ot(this._element).hasClass(pt) ? this.hide() : this.show()
                }, t.show = function() {
                    var t, e, i = this;
                    if (!this._isTransitioning && !ot(this._element).hasClass(pt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(_t)).filter(function(t) {
                            return t.getAttribute("data-parent") === i._config.parent
                        })).length && (t = null), !(t && (e = ot(t).not(this._selector).data(rt)) && e._isTransitioning))) {
                        var n = ot.Event(ut.SHOW);
                        if (ot(this._element).trigger(n), !n.isDefaultPrevented()) {
                            t && (r._jQueryInterface.call(ot(t).not(this._selector), "hide"), e || ot(t).data(rt, null));
                            var s = this._getDimension();
                            ot(this._element).removeClass(ft).addClass(gt), this._element.style[s] = 0, this._triggerArray.length && ot(this._triggerArray).removeClass(mt).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var o = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                a = Ct.getTransitionDurationFromElement(this._element);
                            ot(this._element).one(Ct.TRANSITION_END, function() {
                                ot(i._element).removeClass(gt).addClass(ft).addClass(pt), i._element.style[s] = "", i.setTransitioning(!1), ot(i._element).trigger(ut.SHOWN)
                            }).emulateTransitionEnd(a), this._element.style[s] = this._element[o] + "px"
                        }
                    }
                }, t.hide = function() {
                    var t = this;
                    if (!this._isTransitioning && ot(this._element).hasClass(pt)) {
                        var e = ot.Event(ut.HIDE);
                        if (ot(this._element).trigger(e), !e.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", Ct.reflow(this._element), ot(this._element).addClass(gt).removeClass(ft).removeClass(pt);
                            var n = this._triggerArray.length;
                            if (0 < n)
                                for (var s = 0; s < n; s++) {
                                    var o = this._triggerArray[s],
                                        a = Ct.getSelectorFromElement(o);
                                    if (null !== a) ot([].slice.call(document.querySelectorAll(a))).hasClass(pt) || ot(o).addClass(mt).attr("aria-expanded", !1)
                                }
                            this.setTransitioning(!0);
                            this._element.style[i] = "";
                            var r = Ct.getTransitionDurationFromElement(this._element);
                            ot(this._element).one(Ct.TRANSITION_END, function() {
                                t.setTransitioning(!1), ot(t._element).removeClass(gt).addClass(ft).trigger(ut.HIDDEN)
                            }).emulateTransitionEnd(r)
                        }
                    }
                }, t.setTransitioning = function(t) {
                    this._isTransitioning = t
                }, t.dispose = function() {
                    ot.removeData(this._element, rt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, t._getConfig = function(t) {
                    return (t = l({}, ht, t)).toggle = Boolean(t.toggle), Ct.typeCheckConfig(at, t, dt), t
                }, t._getDimension = function() {
                    return ot(this._element).hasClass(vt) ? vt : yt
                }, t._getParent = function() {
                    var i = this,
                        t = null;
                    Ct.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                    var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        n = [].slice.call(t.querySelectorAll(e));
                    return ot(n).each(function(t, e) {
                        i._addAriaAndCollapsedClass(r._getTargetFromElement(e), [e])
                    }), t
                }, t._addAriaAndCollapsedClass = function(t, e) {
                    if (t) {
                        var i = ot(t).hasClass(pt);
                        e.length && ot(e).toggleClass(mt, !i).attr("aria-expanded", i)
                    }
                }, r._getTargetFromElement = function(t) {
                    var e = Ct.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null
                }, r._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = ot(this),
                            e = t.data(rt),
                            i = l({}, ht, t.data(), "object" == typeof n && n ? n : {});
                        if (!e && i.toggle && /show|hide/.test(n) && (i.toggle = !1), e || (e = new r(this, i), t.data(rt, e)), "string" == typeof n) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, a(r, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ht
                    }
                }]), r
            }(), ot(document).on(ut.CLICK_DATA_API, wt, function(t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var i = ot(this),
                    e = Ct.getSelectorFromElement(this),
                    n = [].slice.call(document.querySelectorAll(e));
                ot(n).each(function() {
                    var t = ot(this),
                        e = t.data(rt) ? "toggle" : i.data();
                    bt._jQueryInterface.call(t, e)
                })
            }), ot.fn[at] = bt._jQueryInterface, ot.fn[at].Constructor = bt, ot.fn[at].noConflict = function() {
                return ot.fn[at] = ct, bt._jQueryInterface
            }, bt), kt = "undefined" != typeof window && "undefined" != typeof document, At = ["Edge", "Trident", "Firefox"], St = 0, Dt = 0; Dt < At.length; Dt += 1)
            if (kt && 0 <= navigator.userAgent.indexOf(At[Dt])) {
                St = 1;
                break
            } var It = kt && window.Promise ? function(t) {
            var e = !1;
            return function() {
                e || (e = !0, window.Promise.resolve().then(function() {
                    e = !1, t()
                }))
            }
        } : function(t) {
            var e = !1;
            return function() {
                e || (e = !0, setTimeout(function() {
                    e = !1, t()
                }, St))
            }
        };

        function Ot(t) {
            return t && "[object Function]" === {}.toString.call(t)
        }

        function Pt(t, e) {
            if (1 !== t.nodeType) return [];
            var i = getComputedStyle(t, null);
            return e ? i[e] : i
        }

        function Nt(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host
        }

        function Ht(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
                case "HTML":
                case "BODY":
                    return t.ownerDocument.body;
                case "#document":
                    return t.body
            }
            var e = Pt(t),
                i = e.overflow,
                n = e.overflowX,
                s = e.overflowY;
            return /(auto|scroll|overlay)/.test(i + s + n) ? t : Ht(Nt(t))
        }
        var Mt = kt && !(!window.MSInputMethodContext || !document.documentMode),
            jt = kt && /MSIE 10/.test(navigator.userAgent);

        function Lt(t) {
            return 11 === t ? Mt : 10 === t ? jt : Mt || jt
        }

        function zt(t) {
            if (!t) return document.documentElement;
            for (var e = Lt(10) ? document.body : null, i = t.offsetParent; i === e && t.nextElementSibling;) i = (t = t.nextElementSibling).offsetParent;
            var n = i && i.nodeName;
            return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === Pt(i, "position") ? zt(i) : i : t ? t.ownerDocument.documentElement : document.documentElement
        }

        function Wt(t) {
            return null !== t.parentNode ? Wt(t.parentNode) : t
        }

        function Ft(t, e) {
            if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
            var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                n = i ? t : e,
                s = i ? e : t,
                o = document.createRange();
            o.setStart(n, 0), o.setEnd(s, 0);
            var a, r, l = o.commonAncestorContainer;
            if (t !== l && e !== l || n.contains(s)) return "BODY" === (r = (a = l).nodeName) || "HTML" !== r && zt(a.firstElementChild) !== a ? zt(l) : l;
            var c = Wt(t);
            return c.host ? Ft(c.host, e) : Ft(t, Wt(e).host)
        }

        function Rt(t) {
            var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                i = t.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var n = t.ownerDocument.documentElement;
                return (t.ownerDocument.scrollingElement || n)[e]
            }
            return t[e]
        }

        function Vt(t, e) {
            var i = "x" === e ? "Left" : "Top",
                n = "Left" === i ? "Right" : "Bottom";
            return parseFloat(t["border" + i + "Width"], 10) + parseFloat(t["border" + n + "Width"], 10)
        }

        function qt(t, e, i, n) {
            return Math.max(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], Lt(10) ? i["offset" + t] + n["margin" + ("Height" === t ? "Top" : "Left")] + n["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
        }

        function Bt() {
            var t = document.body,
                e = document.documentElement,
                i = Lt(10) && getComputedStyle(e);
            return {
                height: qt("Height", t, e, i),
                width: qt("Width", t, e, i)
            }
        }
        var Ut = function() {
                function n(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(t, e, i) {
                    return e && n(t.prototype, e), i && n(t, i), t
                }
            }(),
            Kt = function(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            },
            Qt = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            };

        function Gt(t) {
            return Qt({}, t, {
                right: t.left + t.width,
                bottom: t.top + t.height
            })
        }

        function Yt(t) {
            var e = {};
            try {
                if (Lt(10)) {
                    e = t.getBoundingClientRect();
                    var i = Rt(t, "top"),
                        n = Rt(t, "left");
                    e.top += i, e.left += n, e.bottom += i, e.right += n
                } else e = t.getBoundingClientRect()
            } catch (t) {}
            var s = {
                    left: e.left,
                    top: e.top,
                    width: e.right - e.left,
                    height: e.bottom - e.top
                },
                o = "HTML" === t.nodeName ? Bt() : {},
                a = o.width || t.clientWidth || s.right - s.left,
                r = o.height || t.clientHeight || s.bottom - s.top,
                l = t.offsetWidth - a,
                c = t.offsetHeight - r;
            if (l || c) {
                var h = Pt(t);
                l -= Vt(h, "x"), c -= Vt(h, "y"), s.width -= l, s.height -= c
            }
            return Gt(s)
        }

        function Zt(t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                n = Lt(10),
                s = "HTML" === e.nodeName,
                o = Yt(t),
                a = Yt(e),
                r = Ht(t),
                l = Pt(e),
                c = parseFloat(l.borderTopWidth, 10),
                h = parseFloat(l.borderLeftWidth, 10);
            i && "HTML" === e.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var d = Gt({
                top: o.top - a.top - c,
                left: o.left - a.left - h,
                width: o.width,
                height: o.height
            });
            if (d.marginTop = 0, d.marginLeft = 0, !n && s) {
                var u = parseFloat(l.marginTop, 10),
                    p = parseFloat(l.marginLeft, 10);
                d.top -= c - u, d.bottom -= c - u, d.left -= h - p, d.right -= h - p, d.marginTop = u, d.marginLeft = p
            }
            return (n && !i ? e.contains(r) : e === r && "BODY" !== r.nodeName) && (d = function(t, e) {
                var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                    n = Rt(e, "top"),
                    s = Rt(e, "left"),
                    o = i ? -1 : 1;
                return t.top += n * o, t.bottom += n * o, t.left += s * o, t.right += s * o, t
            }(d, e)), d
        }

        function Xt(t) {
            if (!t || !t.parentElement || Lt()) return document.documentElement;
            for (var e = t.parentElement; e && "none" === Pt(e, "transform");) e = e.parentElement;
            return e || document.documentElement
        }

        function Jt(t, e, i, n) {
            var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                o = {
                    top: 0,
                    left: 0
                },
                a = s ? Xt(t) : Ft(t, e);
            if ("viewport" === n) o = function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    i = t.ownerDocument.documentElement,
                    n = Zt(t, i),
                    s = Math.max(i.clientWidth, window.innerWidth || 0),
                    o = Math.max(i.clientHeight, window.innerHeight || 0),
                    a = e ? 0 : Rt(i),
                    r = e ? 0 : Rt(i, "left");
                return Gt({
                    top: a - n.top + n.marginTop,
                    left: r - n.left + n.marginLeft,
                    width: s,
                    height: o
                })
            }(a, s);
            else {
                var r = void 0;
                "scrollParent" === n ? "BODY" === (r = Ht(Nt(e))).nodeName && (r = t.ownerDocument.documentElement) : r = "window" === n ? t.ownerDocument.documentElement : n;
                var l = Zt(r, a, s);
                if ("HTML" !== r.nodeName || function t(e) {
                        var i = e.nodeName;
                        return "BODY" !== i && "HTML" !== i && ("fixed" === Pt(e, "position") || t(Nt(e)))
                    }(a)) o = l;
                else {
                    var c = Bt(),
                        h = c.height,
                        d = c.width;
                    o.top += l.top - l.marginTop, o.bottom = h + l.top, o.left += l.left - l.marginLeft, o.right = d + l.left
                }
            }
            return o.left += i, o.top += i, o.right -= i, o.bottom -= i, o
        }

        function te(t, e, n, i, s) {
            var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === t.indexOf("auto")) return t;
            var a = Jt(n, i, o, s),
                r = {
                    top: {
                        width: a.width,
                        height: e.top - a.top
                    },
                    right: {
                        width: a.right - e.right,
                        height: a.height
                    },
                    bottom: {
                        width: a.width,
                        height: a.bottom - e.bottom
                    },
                    left: {
                        width: e.left - a.left,
                        height: a.height
                    }
                },
                l = Object.keys(r).map(function(t) {
                    return Qt({
                        key: t
                    }, r[t], {
                        area: (e = r[t], e.width * e.height)
                    });
                    var e
                }).sort(function(t, e) {
                    return e.area - t.area
                }),
                c = l.filter(function(t) {
                    var e = t.width,
                        i = t.height;
                    return e >= n.clientWidth && i >= n.clientHeight
                }),
                h = 0 < c.length ? c[0].key : l[0].key,
                d = t.split("-")[1];
            return h + (d ? "-" + d : "")
        }

        function ee(t, e, i) {
            var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return Zt(i, n ? Xt(e) : Ft(e, i), n)
        }

        function ie(t) {
            var e = getComputedStyle(t),
                i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
                n = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
            return {
                width: t.offsetWidth + n,
                height: t.offsetHeight + i
            }
        }

        function ne(t) {
            var e = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return t.replace(/left|right|bottom|top/g, function(t) {
                return e[t]
            })
        }

        function se(t, e, i) {
            i = i.split("-")[0];
            var n = ie(t),
                s = {
                    width: n.width,
                    height: n.height
                },
                o = -1 !== ["right", "left"].indexOf(i),
                a = o ? "top" : "left",
                r = o ? "left" : "top",
                l = o ? "height" : "width",
                c = o ? "width" : "height";
            return s[a] = e[a] + e[l] / 2 - n[l] / 2, s[r] = i === r ? e[r] - n[c] : e[ne(r)], s
        }

        function oe(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0]
        }

        function ae(t, i, e) {
            return (void 0 === e ? t : t.slice(0, function(t, e, i) {
                if (Array.prototype.findIndex) return t.findIndex(function(t) {
                    return t[e] === i
                });
                var n = oe(t, function(t) {
                    return t[e] === i
                });
                return t.indexOf(n)
            }(t, "name", e))).forEach(function(t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var e = t.function || t.fn;
                t.enabled && Ot(e) && (i.offsets.popper = Gt(i.offsets.popper), i.offsets.reference = Gt(i.offsets.reference), i = e(i, t))
            }), i
        }

        function re(t, i) {
            return t.some(function(t) {
                var e = t.name;
                return t.enabled && e === i
            })
        }

        function le(t) {
            for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length; n++) {
                var s = e[n],
                    o = s ? "" + s + i : t;
                if (void 0 !== document.body.style[o]) return o
            }
            return null
        }

        function ce(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window
        }

        function he(t, e, i, n) {
            i.updateBound = n, ce(t).addEventListener("resize", i.updateBound, {
                passive: !0
            });
            var s = Ht(t);
            return function t(e, i, n, s) {
                var o = "BODY" === e.nodeName,
                    a = o ? e.ownerDocument.defaultView : e;
                a.addEventListener(i, n, {
                    passive: !0
                }), o || t(Ht(a.parentNode), i, n, s), s.push(a)
            }(s, "scroll", i.updateBound, i.scrollParents), i.scrollElement = s, i.eventsEnabled = !0, i
        }

        function de() {
            var t, e;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ce(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
                t.removeEventListener("scroll", e.updateBound)
            }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
        }

        function ue(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
        }

        function pe(i, n) {
            Object.keys(n).forEach(function(t) {
                var e = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ue(n[t]) && (e = "px"), i.style[t] = n[t] + e
            })
        }

        function fe(t, e, i) {
            var n = oe(t, function(t) {
                    return t.name === e
                }),
                s = !!n && t.some(function(t) {
                    return t.name === i && t.enabled && t.order < n.order
                });
            if (!s) {
                var o = "`" + e + "`",
                    a = "`" + i + "`";
                console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return s
        }
        var ge = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            me = ge.slice(3);

        function ve(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                i = me.indexOf(t),
                n = me.slice(i + 1).concat(me.slice(0, i));
            return e ? n.reverse() : n
        }
        var ye = "flip",
            _e = "clockwise",
            we = "counterclockwise";

        function be(t, s, o, e) {
            var a = [0, 0],
                r = -1 !== ["right", "left"].indexOf(e),
                i = t.split(/(\+|\-)/).map(function(t) {
                    return t.trim()
                }),
                n = i.indexOf(oe(i, function(t) {
                    return -1 !== t.search(/,|\s/)
                }));
            i[n] && -1 === i[n].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 !== n ? [i.slice(0, n).concat([i[n].split(l)[0]]), [i[n].split(l)[1]].concat(i.slice(n + 1))] : [i];
            return (c = c.map(function(t, e) {
                var i = (1 === e ? !r : r) ? "height" : "width",
                    n = !1;
                return t.reduce(function(t, e) {
                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, n = !0, t) : n ? (t[t.length - 1] += e, n = !1, t) : t.concat(e)
                }, []).map(function(t) {
                    return function(t, e, i, n) {
                        var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                            o = +s[1],
                            a = s[2];
                        if (!o) return t;
                        if (0 === a.indexOf("%")) {
                            var r = void 0;
                            switch (a) {
                                case "%p":
                                    r = i;
                                    break;
                                case "%":
                                case "%r":
                                default:
                                    r = n
                            }
                            return Gt(r)[e] / 100 * o
                        }
                        if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                        return o
                    }(t, i, s, o)
                })
            })).forEach(function(i, n) {
                i.forEach(function(t, e) {
                    ue(t) && (a[n] += t * ("-" === i[e - 1] ? -1 : 1))
                })
            }), a
        }
        var Ce = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function() {},
                onUpdate: function() {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function(t) {
                            var e = t.placement,
                                i = e.split("-")[0],
                                n = e.split("-")[1];
                            if (n) {
                                var s = t.offsets,
                                    o = s.reference,
                                    a = s.popper,
                                    r = -1 !== ["bottom", "top"].indexOf(i),
                                    l = r ? "left" : "top",
                                    c = r ? "width" : "height",
                                    h = {
                                        start: Kt({}, l, o[l]),
                                        end: Kt({}, l, o[l] + o[c] - a[c])
                                    };
                                t.offsets.popper = Qt({}, a, h[n])
                            }
                            return t
                        }
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function(t, e) {
                            var i = e.offset,
                                n = t.placement,
                                s = t.offsets,
                                o = s.popper,
                                a = s.reference,
                                r = n.split("-")[0],
                                l = void 0;
                            return l = ue(+i) ? [+i, 0] : be(i, o, a, r), "left" === r ? (o.top += l[0], o.left -= l[1]) : "right" === r ? (o.top += l[0], o.left += l[1]) : "top" === r ? (o.left += l[0], o.top -= l[1]) : "bottom" === r && (o.left += l[0], o.top += l[1]), t.popper = o, t
                        },
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function(t, n) {
                            var e = n.boundariesElement || zt(t.instance.popper);
                            t.instance.reference === e && (e = zt(e));
                            var i = le("transform"),
                                s = t.instance.popper.style,
                                o = s.top,
                                a = s.left,
                                r = s[i];
                            s.top = "", s.left = "", s[i] = "";
                            var l = Jt(t.instance.popper, t.instance.reference, n.padding, e, t.positionFixed);
                            s.top = o, s.left = a, s[i] = r, n.boundaries = l;
                            var c = n.priority,
                                h = t.offsets.popper,
                                d = {
                                    primary: function(t) {
                                        var e = h[t];
                                        return h[t] < l[t] && !n.escapeWithReference && (e = Math.max(h[t], l[t])), Kt({}, t, e)
                                    },
                                    secondary: function(t) {
                                        var e = "right" === t ? "left" : "top",
                                            i = h[e];
                                        return h[t] > l[t] && !n.escapeWithReference && (i = Math.min(h[e], l[t] - ("right" === t ? h.width : h.height))), Kt({}, e, i)
                                    }
                                };
                            return c.forEach(function(t) {
                                var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                h = Qt({}, h, d[e](t))
                            }), t.offsets.popper = h, t
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function(t) {
                            var e = t.offsets,
                                i = e.popper,
                                n = e.reference,
                                s = t.placement.split("-")[0],
                                o = Math.floor,
                                a = -1 !== ["top", "bottom"].indexOf(s),
                                r = a ? "right" : "bottom",
                                l = a ? "left" : "top",
                                c = a ? "width" : "height";
                            return i[r] < o(n[l]) && (t.offsets.popper[l] = o(n[l]) - i[c]), i[l] > o(n[r]) && (t.offsets.popper[l] = o(n[r])), t
                        }
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function(t, e) {
                            var i;
                            if (!fe(t.instance.modifiers, "arrow", "keepTogether")) return t;
                            var n = e.element;
                            if ("string" == typeof n) {
                                if (!(n = t.instance.popper.querySelector(n))) return t
                            } else if (!t.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                            var s = t.placement.split("-")[0],
                                o = t.offsets,
                                a = o.popper,
                                r = o.reference,
                                l = -1 !== ["left", "right"].indexOf(s),
                                c = l ? "height" : "width",
                                h = l ? "Top" : "Left",
                                d = h.toLowerCase(),
                                u = l ? "left" : "top",
                                p = l ? "bottom" : "right",
                                f = ie(n)[c];
                            r[p] - f < a[d] && (t.offsets.popper[d] -= a[d] - (r[p] - f)), r[d] + f > a[p] && (t.offsets.popper[d] += r[d] + f - a[p]), t.offsets.popper = Gt(t.offsets.popper);
                            var g = r[d] + r[c] / 2 - f / 2,
                                m = Pt(t.instance.popper),
                                v = parseFloat(m["margin" + h], 10),
                                y = parseFloat(m["border" + h + "Width"], 10),
                                _ = g - t.offsets.popper[d] - v - y;
                            return _ = Math.max(Math.min(a[c] - f, _), 0), t.arrowElement = n, t.offsets.arrow = (Kt(i = {}, d, Math.round(_)), Kt(i, u, ""), i), t
                        },
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function(f, g) {
                            if (re(f.instance.modifiers, "inner")) return f;
                            if (f.flipped && f.placement === f.originalPlacement) return f;
                            var m = Jt(f.instance.popper, f.instance.reference, g.padding, g.boundariesElement, f.positionFixed),
                                v = f.placement.split("-")[0],
                                y = ne(v),
                                _ = f.placement.split("-")[1] || "",
                                w = [];
                            switch (g.behavior) {
                                case ye:
                                    w = [v, y];
                                    break;
                                case _e:
                                    w = ve(v);
                                    break;
                                case we:
                                    w = ve(v, !0);
                                    break;
                                default:
                                    w = g.behavior
                            }
                            return w.forEach(function(t, e) {
                                if (v !== t || w.length === e + 1) return f;
                                v = f.placement.split("-")[0], y = ne(v);
                                var i, n = f.offsets.popper,
                                    s = f.offsets.reference,
                                    o = Math.floor,
                                    a = "left" === v && o(n.right) > o(s.left) || "right" === v && o(n.left) < o(s.right) || "top" === v && o(n.bottom) > o(s.top) || "bottom" === v && o(n.top) < o(s.bottom),
                                    r = o(n.left) < o(m.left),
                                    l = o(n.right) > o(m.right),
                                    c = o(n.top) < o(m.top),
                                    h = o(n.bottom) > o(m.bottom),
                                    d = "left" === v && r || "right" === v && l || "top" === v && c || "bottom" === v && h,
                                    u = -1 !== ["top", "bottom"].indexOf(v),
                                    p = !!g.flipVariations && (u && "start" === _ && r || u && "end" === _ && l || !u && "start" === _ && c || !u && "end" === _ && h);
                                (a || d || p) && (f.flipped = !0, (a || d) && (v = w[e + 1]), p && (_ = "end" === (i = _) ? "start" : "start" === i ? "end" : i), f.placement = v + (_ ? "-" + _ : ""), f.offsets.popper = Qt({}, f.offsets.popper, se(f.instance.popper, f.offsets.reference, f.placement)), f = ae(f.instance.modifiers, f, "flip"))
                            }), f
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport"
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function(t) {
                            var e = t.placement,
                                i = e.split("-")[0],
                                n = t.offsets,
                                s = n.popper,
                                o = n.reference,
                                a = -1 !== ["left", "right"].indexOf(i),
                                r = -1 === ["top", "left"].indexOf(i);
                            return s[a ? "left" : "top"] = o[i] - (r ? s[a ? "width" : "height"] : 0), t.placement = ne(e), t.offsets.popper = Gt(s), t
                        }
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function(t) {
                            if (!fe(t.instance.modifiers, "hide", "preventOverflow")) return t;
                            var e = t.offsets.reference,
                                i = oe(t.instance.modifiers, function(t) {
                                    return "preventOverflow" === t.name
                                }).boundaries;
                            if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                                if (!0 === t.hide) return t;
                                t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === t.hide) return t;
                                t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                            }
                            return t
                        }
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function(t, e) {
                            var i = e.x,
                                n = e.y,
                                s = t.offsets.popper,
                                o = oe(t.instance.modifiers, function(t) {
                                    return "applyStyle" === t.name
                                }).gpuAcceleration;
                            void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var a = void 0 !== o ? o : e.gpuAcceleration,
                                r = Yt(zt(t.instance.popper)),
                                l = {
                                    position: s.position
                                },
                                c = {
                                    left: Math.floor(s.left),
                                    top: Math.round(s.top),
                                    bottom: Math.round(s.bottom),
                                    right: Math.floor(s.right)
                                },
                                h = "bottom" === i ? "top" : "bottom",
                                d = "right" === n ? "left" : "right",
                                u = le("transform"),
                                p = void 0,
                                f = void 0;
                            if (f = "bottom" === h ? -r.height + c.bottom : c.top, p = "right" === d ? -r.width + c.right : c.left, a && u) l[u] = "translate3d(" + p + "px, " + f + "px, 0)", l[h] = 0, l[d] = 0, l.willChange = "transform";
                            else {
                                var g = "bottom" === h ? -1 : 1,
                                    m = "right" === d ? -1 : 1;
                                l[h] = f * g, l[d] = p * m, l.willChange = h + ", " + d
                            }
                            var v = {
                                "x-placement": t.placement
                            };
                            return t.attributes = Qt({}, v, t.attributes), t.styles = Qt({}, l, t.styles), t.arrowStyles = Qt({}, t.offsets.arrow, t.arrowStyles), t
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function(t) {
                            var e, i;
                            return pe(t.instance.popper, t.styles), e = t.instance.popper, i = t.attributes, Object.keys(i).forEach(function(t) {
                                !1 !== i[t] ? e.setAttribute(t, i[t]) : e.removeAttribute(t)
                            }), t.arrowElement && Object.keys(t.arrowStyles).length && pe(t.arrowElement, t.arrowStyles), t
                        },
                        onLoad: function(t, e, i, n, s) {
                            var o = ee(s, e, t, i.positionFixed),
                                a = te(i.placement, o, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                            return e.setAttribute("x-placement", a), pe(e, {
                                position: i.positionFixed ? "fixed" : "absolute"
                            }), i
                        },
                        gpuAcceleration: void 0
                    }
                }
            },
            xe = function() {
                function o(t, e) {
                    var i = this,
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), this.scheduleUpdate = function() {
                        return requestAnimationFrame(i.update)
                    }, this.update = It(this.update.bind(this)), this.options = Qt({}, o.Defaults, n), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Qt({}, o.Defaults.modifiers, n.modifiers)).forEach(function(t) {
                        i.options.modifiers[t] = Qt({}, o.Defaults.modifiers[t] || {}, n.modifiers ? n.modifiers[t] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                        return Qt({
                            name: t
                        }, i.options.modifiers[t])
                    }).sort(function(t, e) {
                        return t.order - e.order
                    }), this.modifiers.forEach(function(t) {
                        t.enabled && Ot(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                    }), this.update();
                    var s = this.options.eventsEnabled;
                    s && this.enableEventListeners(), this.state.eventsEnabled = s
                }
                return Ut(o, [{
                    key: "update",
                    value: function() {
                        return function() {
                            if (!this.state.isDestroyed) {
                                var t = {
                                    instance: this,
                                    styles: {},
                                    arrowStyles: {},
                                    attributes: {},
                                    flipped: !1,
                                    offsets: {}
                                };
                                t.offsets.reference = ee(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = te(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = se(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ae(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                            }
                        }.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return function() {
                            return this.state.isDestroyed = !0, re(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[le("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                        }.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return function() {
                            this.state.eventsEnabled || (this.state = he(this.reference, this.options, this.state, this.scheduleUpdate))
                        }.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return de.call(this)
                    }
                }]), o
            }();
        xe.Utils = ("undefined" != typeof window ? window : global).PopperUtils, xe.placements = ge, xe.Defaults = Ce;
        var Ee, Te, $e, ke, Ae, Se, De, Ie, Oe, Pe, Ne, He, Me, je, Le, ze, We, Fe, Re, Ve, qe, Be, Ue, Ke, Qe, Ge, Ye, Ze, Xe, Je, ti, ei, ii, ni, si, oi, ai, ri, li, ci, hi, di, ui, pi, fi, gi, mi, vi, yi, _i, wi, bi, Ci, xi, Ei, Ti, $i, ki, Ai, Si, Di, Ii, Oi, Pi, Ni, Hi, Mi, ji, Li, zi, Wi, Fi, Ri, Vi, qi, Bi, Ui, Ki, Qi, Gi, Yi, Zi, Xi, Ji, tn, en, nn, sn, on, an, rn, ln, cn, hn, dn, un, pn, fn, gn, mn, vn, yn, _n, wn, bn, Cn, xn, En, Tn, $n, kn, An, Sn, Dn, In, On, Pn, Nn, Hn, Mn, jn, Ln, zn, Wn, Fn, Rn = (Te = "dropdown", ke = "." + ($e = "bs.dropdown"), Ae = ".data-api", Se = (Ee = e).fn[Te], De = new RegExp("38|40|27"), Ie = {
                HIDE: "hide" + ke,
                HIDDEN: "hidden" + ke,
                SHOW: "show" + ke,
                SHOWN: "shown" + ke,
                CLICK: "click" + ke,
                CLICK_DATA_API: "click" + ke + Ae,
                KEYDOWN_DATA_API: "keydown" + ke + Ae,
                KEYUP_DATA_API: "keyup" + ke + Ae
            }, Oe = "disabled", Pe = "show", Ne = "dropup", He = "dropright", Me = "dropleft", je = "dropdown-menu-right", Le = "position-static", ze = '[data-toggle="dropdown"]', We = ".dropdown form", Fe = ".dropdown-menu", Re = ".navbar-nav", Ve = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", qe = "top-start", Be = "top-end", Ue = "bottom-start", Ke = "bottom-end", Qe = "right-start", Ge = "left-start", Ye = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic"
            }, Ze = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            }, Xe = function() {
                function c(t, e) {
                    this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var t = c.prototype;
                return t.toggle = function() {
                    if (!this._element.disabled && !Ee(this._element).hasClass(Oe)) {
                        var t = c._getParentFromElement(this._element),
                            e = Ee(this._menu).hasClass(Pe);
                        if (c._clearMenus(), !e) {
                            var i = {
                                    relatedTarget: this._element
                                },
                                n = Ee.Event(Ie.SHOW, i);
                            if (Ee(t).trigger(n), !n.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if (void 0 === xe) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var s = this._element;
                                    "parent" === this._config.reference ? s = t : Ct.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && Ee(t).addClass(Le), this._popper = new xe(s, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === Ee(t).closest(Re).length && Ee(document.body).children().on("mouseover", null, Ee.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Ee(this._menu).toggleClass(Pe), Ee(t).toggleClass(Pe).trigger(Ee.Event(Ie.SHOWN, i))
                            }
                        }
                    }
                }, t.dispose = function() {
                    Ee.removeData(this._element, $e), Ee(this._element).off(ke), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
                }, t.update = function() {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, t._addEventListeners = function() {
                    var e = this;
                    Ee(this._element).on(Ie.CLICK, function(t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    })
                }, t._getConfig = function(t) {
                    return t = l({}, this.constructor.Default, Ee(this._element).data(), t), Ct.typeCheckConfig(Te, t, this.constructor.DefaultType), t
                }, t._getMenuElement = function() {
                    if (!this._menu) {
                        var t = c._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(Fe))
                    }
                    return this._menu
                }, t._getPlacement = function() {
                    var t = Ee(this._element.parentNode),
                        e = Ue;
                    return t.hasClass(Ne) ? (e = qe, Ee(this._menu).hasClass(je) && (e = Be)) : t.hasClass(He) ? e = Qe : t.hasClass(Me) ? e = Ge : Ee(this._menu).hasClass(je) && (e = Ke), e
                }, t._detectNavbar = function() {
                    return 0 < Ee(this._element).closest(".navbar").length
                }, t._getPopperConfig = function() {
                    var e = this,
                        t = {};
                    "function" == typeof this._config.offset ? t.fn = function(t) {
                        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}), t
                    } : t.offset = this._config.offset;
                    var i = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: t,
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (i.modifiers.applyStyle = {
                        enabled: !1
                    }), i
                }, c._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = Ee(this).data($e);
                        if (t || (t = new c(this, "object" == typeof e ? e : null), Ee(this).data($e, t)), "string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                }, c._clearMenus = function(t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                        for (var e = [].slice.call(document.querySelectorAll(ze)), i = 0, n = e.length; i < n; i++) {
                            var s = c._getParentFromElement(e[i]),
                                o = Ee(e[i]).data($e),
                                a = {
                                    relatedTarget: e[i]
                                };
                            if (t && "click" === t.type && (a.clickEvent = t), o) {
                                var r = o._menu;
                                if (Ee(s).hasClass(Pe) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && Ee.contains(s, t.target))) {
                                    var l = Ee.Event(Ie.HIDE, a);
                                    Ee(s).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Ee(document.body).children().off("mouseover", null, Ee.noop), e[i].setAttribute("aria-expanded", "false"), Ee(r).removeClass(Pe), Ee(s).removeClass(Pe).trigger(Ee.Event(Ie.HIDDEN, a)))
                                }
                            }
                        }
                }, c._getParentFromElement = function(t) {
                    var e, i = Ct.getSelectorFromElement(t);
                    return i && (e = document.querySelector(i)), e || t.parentNode
                }, c._dataApiKeydownHandler = function(t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || Ee(t.target).closest(Fe).length)) : De.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !Ee(this).hasClass(Oe))) {
                        var e = c._getParentFromElement(this),
                            i = Ee(e).hasClass(Pe);
                        if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                            var n = [].slice.call(e.querySelectorAll(Ve));
                            if (0 !== n.length) {
                                var s = n.indexOf(t.target);
                                38 === t.which && 0 < s && s--, 40 === t.which && s < n.length - 1 && s++, s < 0 && (s = 0), n[s].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var o = e.querySelector(ze);
                                Ee(o).trigger("focus")
                            }
                            Ee(this).trigger("click")
                        }
                    }
                }, a(c, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Ye
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Ze
                    }
                }]), c
            }(), Ee(document).on(Ie.KEYDOWN_DATA_API, ze, Xe._dataApiKeydownHandler).on(Ie.KEYDOWN_DATA_API, Fe, Xe._dataApiKeydownHandler).on(Ie.CLICK_DATA_API + " " + Ie.KEYUP_DATA_API, Xe._clearMenus).on(Ie.CLICK_DATA_API, ze, function(t) {
                t.preventDefault(), t.stopPropagation(), Xe._jQueryInterface.call(Ee(this), "toggle")
            }).on(Ie.CLICK_DATA_API, We, function(t) {
                t.stopPropagation()
            }), Ee.fn[Te] = Xe._jQueryInterface, Ee.fn[Te].Constructor = Xe, Ee.fn[Te].noConflict = function() {
                return Ee.fn[Te] = Se, Xe._jQueryInterface
            }, Xe),
            Vn = (ti = "modal", ii = "." + (ei = "bs.modal"), ni = (Je = e).fn[ti], si = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            }, oi = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            }, ai = {
                HIDE: "hide" + ii,
                HIDDEN: "hidden" + ii,
                SHOW: "show" + ii,
                SHOWN: "shown" + ii,
                FOCUSIN: "focusin" + ii,
                RESIZE: "resize" + ii,
                CLICK_DISMISS: "click.dismiss" + ii,
                KEYDOWN_DISMISS: "keydown.dismiss" + ii,
                MOUSEUP_DISMISS: "mouseup.dismiss" + ii,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + ii,
                CLICK_DATA_API: "click" + ii + ".data-api"
            }, ri = "modal-scrollbar-measure", li = "modal-backdrop", ci = "modal-open", hi = "fade", di = "show", ui = ".modal-dialog", pi = '[data-toggle="modal"]', fi = '[data-dismiss="modal"]', gi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", mi = ".sticky-top", vi = function() {
                function s(t, e) {
                    this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ui), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                }
                var t = s.prototype;
                return t.toggle = function(t) {
                    return this._isShown ? this.hide() : this.show(t)
                }, t.show = function(t) {
                    var e = this;
                    if (!this._isTransitioning && !this._isShown) {
                        Je(this._element).hasClass(hi) && (this._isTransitioning = !0);
                        var i = Je.Event(ai.SHOW, {
                            relatedTarget: t
                        });
                        Je(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Je(document.body).addClass(ci), this._setEscapeEvent(), this._setResizeEvent(), Je(this._element).on(ai.CLICK_DISMISS, fi, function(t) {
                            return e.hide(t)
                        }), Je(this._dialog).on(ai.MOUSEDOWN_DISMISS, function() {
                            Je(e._element).one(ai.MOUSEUP_DISMISS, function(t) {
                                Je(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return e._showElement(t)
                        }))
                    }
                }, t.hide = function(t) {
                    var e = this;
                    if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                        var i = Je.Event(ai.HIDE);
                        if (Je(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var n = Je(this._element).hasClass(hi);
                            if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Je(document).off(ai.FOCUSIN), Je(this._element).removeClass(di), Je(this._element).off(ai.CLICK_DISMISS), Je(this._dialog).off(ai.MOUSEDOWN_DISMISS), n) {
                                var s = Ct.getTransitionDurationFromElement(this._element);
                                Je(this._element).one(Ct.TRANSITION_END, function(t) {
                                    return e._hideModal(t)
                                }).emulateTransitionEnd(s)
                            } else this._hideModal()
                        }
                    }
                }, t.dispose = function() {
                    Je.removeData(this._element, ei), Je(window, document, this._element, this._backdrop).off(ii), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                }, t.handleUpdate = function() {
                    this._adjustDialog()
                }, t._getConfig = function(t) {
                    return t = l({}, si, t), Ct.typeCheckConfig(ti, t, oi), t
                }, t._showElement = function(t) {
                    var e = this,
                        i = Je(this._element).hasClass(hi);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && Ct.reflow(this._element), Je(this._element).addClass(di), this._config.focus && this._enforceFocus();
                    var n = Je.Event(ai.SHOWN, {
                            relatedTarget: t
                        }),
                        s = function() {
                            e._config.focus && e._element.focus(), e._isTransitioning = !1, Je(e._element).trigger(n)
                        };
                    if (i) {
                        var o = Ct.getTransitionDurationFromElement(this._element);
                        Je(this._dialog).one(Ct.TRANSITION_END, s).emulateTransitionEnd(o)
                    } else s()
                }, t._enforceFocus = function() {
                    var e = this;
                    Je(document).off(ai.FOCUSIN).on(ai.FOCUSIN, function(t) {
                        document !== t.target && e._element !== t.target && 0 === Je(e._element).has(t.target).length && e._element.focus()
                    })
                }, t._setEscapeEvent = function() {
                    var e = this;
                    this._isShown && this._config.keyboard ? Je(this._element).on(ai.KEYDOWN_DISMISS, function(t) {
                        27 === t.which && (t.preventDefault(), e.hide())
                    }) : this._isShown || Je(this._element).off(ai.KEYDOWN_DISMISS)
                }, t._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? Je(window).on(ai.RESIZE, function(t) {
                        return e.handleUpdate(t)
                    }) : Je(window).off(ai.RESIZE)
                }, t._hideModal = function() {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                        Je(document.body).removeClass(ci), t._resetAdjustments(), t._resetScrollbar(), Je(t._element).trigger(ai.HIDDEN)
                    })
                }, t._removeBackdrop = function() {
                    this._backdrop && (Je(this._backdrop).remove(), this._backdrop = null)
                }, t._showBackdrop = function(t) {
                    var e = this,
                        i = Je(this._element).hasClass(hi) ? hi : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = li, i && this._backdrop.classList.add(i), Je(this._backdrop).appendTo(document.body), Je(this._element).on(ai.CLICK_DISMISS, function(t) {
                                e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                            }), i && Ct.reflow(this._backdrop), Je(this._backdrop).addClass(di), !t) return;
                        if (!i) return void t();
                        var n = Ct.getTransitionDurationFromElement(this._backdrop);
                        Je(this._backdrop).one(Ct.TRANSITION_END, t).emulateTransitionEnd(n)
                    } else if (!this._isShown && this._backdrop) {
                        Je(this._backdrop).removeClass(di);
                        var s = function() {
                            e._removeBackdrop(), t && t()
                        };
                        if (Je(this._element).hasClass(hi)) {
                            var o = Ct.getTransitionDurationFromElement(this._backdrop);
                            Je(this._backdrop).one(Ct.TRANSITION_END, s).emulateTransitionEnd(o)
                        } else s()
                    } else t && t()
                }, t._adjustDialog = function() {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, t._resetAdjustments = function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, t._checkScrollbar = function() {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, t._setScrollbar = function() {
                    var s = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(gi)),
                            e = [].slice.call(document.querySelectorAll(mi));
                        Je(t).each(function(t, e) {
                            var i = e.style.paddingRight,
                                n = Je(e).css("padding-right");
                            Je(e).data("padding-right", i).css("padding-right", parseFloat(n) + s._scrollbarWidth + "px")
                        }), Je(e).each(function(t, e) {
                            var i = e.style.marginRight,
                                n = Je(e).css("margin-right");
                            Je(e).data("margin-right", i).css("margin-right", parseFloat(n) - s._scrollbarWidth + "px")
                        });
                        var i = document.body.style.paddingRight,
                            n = Je(document.body).css("padding-right");
                        Je(document.body).data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
                    }
                }, t._resetScrollbar = function() {
                    var t = [].slice.call(document.querySelectorAll(gi));
                    Je(t).each(function(t, e) {
                        var i = Je(e).data("padding-right");
                        Je(e).removeData("padding-right"), e.style.paddingRight = i || ""
                    });
                    var e = [].slice.call(document.querySelectorAll("" + mi));
                    Je(e).each(function(t, e) {
                        var i = Je(e).data("margin-right");
                        void 0 !== i && Je(e).css("margin-right", i).removeData("margin-right")
                    });
                    var i = Je(document.body).data("padding-right");
                    Je(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                }, t._getScrollbarWidth = function() {
                    var t = document.createElement("div");
                    t.className = ri, document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e
                }, s._jQueryInterface = function(i, n) {
                    return this.each(function() {
                        var t = Je(this).data(ei),
                            e = l({}, si, Je(this).data(), "object" == typeof i && i ? i : {});
                        if (t || (t = new s(this, e), Je(this).data(ei, t)), "string" == typeof i) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i](n)
                        } else e.show && t.show(n)
                    })
                }, a(s, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return si
                    }
                }]), s
            }(), Je(document).on(ai.CLICK_DATA_API, pi, function(t) {
                var e, i = this,
                    n = Ct.getSelectorFromElement(this);
                n && (e = document.querySelector(n));
                var s = Je(e).data(ei) ? "toggle" : l({}, Je(e).data(), Je(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var o = Je(e).one(ai.SHOW, function(t) {
                    t.isDefaultPrevented() || o.one(ai.HIDDEN, function() {
                        Je(i).is(":visible") && i.focus()
                    })
                });
                vi._jQueryInterface.call(Je(e), s, this)
            }), Je.fn[ti] = vi._jQueryInterface, Je.fn[ti].Constructor = vi, Je.fn[ti].noConflict = function() {
                return Je.fn[ti] = ni, vi._jQueryInterface
            }, vi),
            qn = (_i = "tooltip", bi = "." + (wi = "bs.tooltip"), Ci = (yi = e).fn[_i], xi = "bs-tooltip", Ei = new RegExp("(^|\\s)" + xi + "\\S+", "g"), ki = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !($i = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                }),
                selector: !(Ti = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                }),
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent"
            }, Si = "out", Di = {
                HIDE: "hide" + bi,
                HIDDEN: "hidden" + bi,
                SHOW: (Ai = "show") + bi,
                SHOWN: "shown" + bi,
                INSERTED: "inserted" + bi,
                CLICK: "click" + bi,
                FOCUSIN: "focusin" + bi,
                FOCUSOUT: "focusout" + bi,
                MOUSEENTER: "mouseenter" + bi,
                MOUSELEAVE: "mouseleave" + bi
            }, Ii = "fade", Oi = "show", Pi = ".tooltip-inner", Ni = ".arrow", Hi = "hover", Mi = "focus", ji = "click", Li = "manual", zi = function() {
                function n(t, e) {
                    if (void 0 === xe) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                }
                var t = n.prototype;
                return t.enable = function() {
                    this._isEnabled = !0
                }, t.disable = function() {
                    this._isEnabled = !1
                }, t.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }, t.toggle = function(t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                i = yi(t.currentTarget).data(e);
                            i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), yi(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (yi(this.getTipElement()).hasClass(Oi)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, t.dispose = function() {
                    clearTimeout(this._timeout), yi.removeData(this.element, this.constructor.DATA_KEY), yi(this.element).off(this.constructor.EVENT_KEY), yi(this.element).closest(".modal").off("hide.bs.modal"), this.tip && yi(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, t.show = function() {
                    var e = this;
                    if ("none" === yi(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var t = yi.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        yi(this.element).trigger(t);
                        var i = yi.contains(this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !i) return;
                        var n = this.getTipElement(),
                            s = Ct.getUID(this.constructor.NAME);
                        n.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && yi(n).addClass(Ii);
                        var o = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement,
                            a = this._getAttachment(o);
                        this.addAttachmentClass(a);
                        var r = !1 === this.config.container ? document.body : yi(document).find(this.config.container);
                        yi(n).data(this.constructor.DATA_KEY, this), yi.contains(this.element.ownerDocument.documentElement, this.tip) || yi(n).appendTo(r), yi(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new xe(this.element, n, {
                            placement: a,
                            modifiers: {
                                offset: {
                                    offset: this.config.offset
                                },
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: Ni
                                },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function(t) {
                                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                            },
                            onUpdate: function(t) {
                                e._handlePopperPlacementChange(t)
                            }
                        }), yi(n).addClass(Oi), "ontouchstart" in document.documentElement && yi(document.body).children().on("mouseover", null, yi.noop);
                        var l = function() {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            e._hoverState = null, yi(e.element).trigger(e.constructor.Event.SHOWN), t === Si && e._leave(null, e)
                        };
                        if (yi(this.tip).hasClass(Ii)) {
                            var c = Ct.getTransitionDurationFromElement(this.tip);
                            yi(this.tip).one(Ct.TRANSITION_END, l).emulateTransitionEnd(c)
                        } else l()
                    }
                }, t.hide = function(t) {
                    var e = this,
                        i = this.getTipElement(),
                        n = yi.Event(this.constructor.Event.HIDE),
                        s = function() {
                            e._hoverState !== Ai && i.parentNode && i.parentNode.removeChild(i), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), yi(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                        };
                    if (yi(this.element).trigger(n), !n.isDefaultPrevented()) {
                        if (yi(i).removeClass(Oi), "ontouchstart" in document.documentElement && yi(document.body).children().off("mouseover", null, yi.noop), this._activeTrigger[ji] = !1, this._activeTrigger[Mi] = !1, this._activeTrigger[Hi] = !1, yi(this.tip).hasClass(Ii)) {
                            var o = Ct.getTransitionDurationFromElement(i);
                            yi(i).one(Ct.TRANSITION_END, s).emulateTransitionEnd(o)
                        } else s();
                        this._hoverState = ""
                    }
                }, t.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, t.isWithContent = function() {
                    return Boolean(this.getTitle())
                }, t.addAttachmentClass = function(t) {
                    yi(this.getTipElement()).addClass(xi + "-" + t)
                }, t.getTipElement = function() {
                    return this.tip = this.tip || yi(this.config.template)[0], this.tip
                }, t.setContent = function() {
                    var t = this.getTipElement();
                    this.setElementContent(yi(t.querySelectorAll(Pi)), this.getTitle()), yi(t).removeClass(Ii + " " + Oi)
                }, t.setElementContent = function(t, e) {
                    var i = this.config.html;
                    "object" == typeof e && (e.nodeType || e.jquery) ? i ? yi(e).parent().is(t) || t.empty().append(e) : t.text(yi(e).text()) : t[i ? "html" : "text"](e)
                }, t.getTitle = function() {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                }, t._getAttachment = function(t) {
                    return $i[t.toUpperCase()]
                }, t._setListeners = function() {
                    var n = this;
                    this.config.trigger.split(" ").forEach(function(t) {
                        if ("click" === t) yi(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(t) {
                            return n.toggle(t)
                        });
                        else if (t !== Li) {
                            var e = t === Hi ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
                                i = t === Hi ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                            yi(n.element).on(e, n.config.selector, function(t) {
                                return n._enter(t)
                            }).on(i, n.config.selector, function(t) {
                                return n._leave(t)
                            })
                        }
                        yi(n.element).closest(".modal").on("hide.bs.modal", function() {
                            return n.hide()
                        })
                    }), this.config.selector ? this.config = l({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, t._fixTitle = function() {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, t._enter = function(t, e) {
                    var i = this.constructor.DATA_KEY;
                    (e = e || yi(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), yi(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? Mi : Hi] = !0), yi(e.getTipElement()).hasClass(Oi) || e._hoverState === Ai ? e._hoverState = Ai : (clearTimeout(e._timeout), e._hoverState = Ai, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                        e._hoverState === Ai && e.show()
                    }, e.config.delay.show) : e.show())
                }, t._leave = function(t, e) {
                    var i = this.constructor.DATA_KEY;
                    (e = e || yi(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), yi(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? Mi : Hi] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Si, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                        e._hoverState === Si && e.hide()
                    }, e.config.delay.hide) : e.hide())
                }, t._isWithActiveTrigger = function() {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1
                }, t._getConfig = function(t) {
                    return "number" == typeof(t = l({}, this.constructor.Default, yi(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Ct.typeCheckConfig(_i, t, this.constructor.DefaultType), t
                }, t._getDelegateConfig = function() {
                    var t = {};
                    if (this.config)
                        for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }, t._cleanTipClass = function() {
                    var t = yi(this.getTipElement()),
                        e = t.attr("class").match(Ei);
                    null !== e && e.length && t.removeClass(e.join(""))
                }, t._handlePopperPlacementChange = function(t) {
                    var e = t.instance;
                    this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                }, t._fixTransition = function() {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") && (yi(t).removeClass(Ii), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
                }, n._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = yi(this).data(wi),
                            e = "object" == typeof i && i;
                        if ((t || !/dispose|hide/.test(i)) && (t || (t = new n(this, e), yi(this).data(wi, t)), "string" == typeof i)) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i]()
                        }
                    })
                }, a(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ki
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return _i
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return wi
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Di
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return bi
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Ti
                    }
                }]), n
            }(), yi.fn[_i] = zi._jQueryInterface, yi.fn[_i].Constructor = zi, yi.fn[_i].noConflict = function() {
                return yi.fn[_i] = Ci, zi._jQueryInterface
            }, zi),
            Bn = (Fi = "popover", Vi = "." + (Ri = "bs.popover"), qi = (Wi = e).fn[Fi], Bi = "bs-popover", Ui = new RegExp("(^|\\s)" + Bi + "\\S+", "g"), Ki = l({}, qn.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), Qi = l({}, qn.DefaultType, {
                content: "(string|element|function)"
            }), Gi = "fade", Zi = ".popover-header", Xi = ".popover-body", Ji = {
                HIDE: "hide" + Vi,
                HIDDEN: "hidden" + Vi,
                SHOW: (Yi = "show") + Vi,
                SHOWN: "shown" + Vi,
                INSERTED: "inserted" + Vi,
                CLICK: "click" + Vi,
                FOCUSIN: "focusin" + Vi,
                FOCUSOUT: "focusout" + Vi,
                MOUSEENTER: "mouseenter" + Vi,
                MOUSELEAVE: "mouseleave" + Vi
            }, tn = function(t) {
                var e, i;

                function n() {
                    return t.apply(this, arguments) || this
                }
                i = t, (e = n).prototype = Object.create(i.prototype), (e.prototype.constructor = e).__proto__ = i;
                var s = n.prototype;
                return s.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, s.addAttachmentClass = function(t) {
                    Wi(this.getTipElement()).addClass(Bi + "-" + t)
                }, s.getTipElement = function() {
                    return this.tip = this.tip || Wi(this.config.template)[0], this.tip
                }, s.setContent = function() {
                    var t = Wi(this.getTipElement());
                    this.setElementContent(t.find(Zi), this.getTitle());
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Xi), e), t.removeClass(Gi + " " + Yi)
                }, s._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                }, s._cleanTipClass = function() {
                    var t = Wi(this.getTipElement()),
                        e = t.attr("class").match(Ui);
                    null !== e && 0 < e.length && t.removeClass(e.join(""))
                }, n._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = Wi(this).data(Ri),
                            e = "object" == typeof i ? i : null;
                        if ((t || !/destroy|hide/.test(i)) && (t || (t = new n(this, e), Wi(this).data(Ri, t)), "string" == typeof i)) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i]()
                        }
                    })
                }, a(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Ki
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return Fi
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return Ri
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Ji
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return Vi
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Qi
                    }
                }]), n
            }(qn), Wi.fn[Fi] = tn._jQueryInterface, Wi.fn[Fi].Constructor = tn, Wi.fn[Fi].noConflict = function() {
                return Wi.fn[Fi] = qi, tn._jQueryInterface
            }, tn),
            Un = (nn = "scrollspy", on = "." + (sn = "bs.scrollspy"), an = (en = e).fn[nn], rn = {
                offset: 10,
                method: "auto",
                target: ""
            }, ln = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            }, cn = {
                ACTIVATE: "activate" + on,
                SCROLL: "scroll" + on,
                LOAD_DATA_API: "load" + on + ".data-api"
            }, hn = "dropdown-item", dn = "active", un = '[data-spy="scroll"]', pn = ".active", fn = ".nav, .list-group", gn = ".nav-link", mn = ".nav-item", vn = ".list-group-item", yn = ".dropdown", _n = ".dropdown-item", wn = ".dropdown-toggle", bn = "offset", Cn = "position", xn = function() {
                function i(t, e) {
                    var i = this;
                    this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + gn + "," + this._config.target + " " + vn + "," + this._config.target + " " + _n, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, en(this._scrollElement).on(cn.SCROLL, function(t) {
                        return i._process(t)
                    }), this.refresh(), this._process()
                }
                var t = i.prototype;
                return t.refresh = function() {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? bn : Cn,
                        s = "auto" === this._config.method ? t : this._config.method,
                        o = s === Cn ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                        var e, i = Ct.getSelectorFromElement(t);
                        if (i && (e = document.querySelector(i)), e) {
                            var n = e.getBoundingClientRect();
                            if (n.width || n.height) return [en(e)[s]().top + o, i]
                        }
                        return null
                    }).filter(function(t) {
                        return t
                    }).sort(function(t, e) {
                        return t[0] - e[0]
                    }).forEach(function(t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    })
                }, t.dispose = function() {
                    en.removeData(this._element, sn), en(this._scrollElement).off(on), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, t._getConfig = function(t) {
                    if ("string" != typeof(t = l({}, rn, "object" == typeof t && t ? t : {})).target) {
                        var e = en(t.target).attr("id");
                        e || (e = Ct.getUID(nn), en(t.target).attr("id", e)), t.target = "#" + e
                    }
                    return Ct.typeCheckConfig(nn, t, ln), t
                }, t._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, t._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, t._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, t._process = function() {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        i = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), i <= t) {
                        var n = this._targets[this._targets.length - 1];
                        this._activeTarget !== n && this._activate(n)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                        for (var s = this._offsets.length; s--;) {
                            this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (void 0 === this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                        }
                    }
                }, t._activate = function(e) {
                    this._activeTarget = e, this._clear();
                    var t = this._selector.split(",");
                    t = t.map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    });
                    var i = en([].slice.call(document.querySelectorAll(t.join(","))));
                    i.hasClass(hn) ? (i.closest(yn).find(wn).addClass(dn), i.addClass(dn)) : (i.addClass(dn), i.parents(fn).prev(gn + ", " + vn).addClass(dn), i.parents(fn).prev(mn).children(gn).addClass(dn)), en(this._scrollElement).trigger(cn.ACTIVATE, {
                        relatedTarget: e
                    })
                }, t._clear = function() {
                    var t = [].slice.call(document.querySelectorAll(this._selector));
                    en(t).filter(pn).removeClass(dn)
                }, i._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = en(this).data(sn);
                        if (t || (t = new i(this, "object" == typeof e && e), en(this).data(sn, t)), "string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                }, a(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return rn
                    }
                }]), i
            }(), en(window).on(cn.LOAD_DATA_API, function() {
                for (var t = [].slice.call(document.querySelectorAll(un)), e = t.length; e--;) {
                    var i = en(t[e]);
                    xn._jQueryInterface.call(i, i.data())
                }
            }), en.fn[nn] = xn._jQueryInterface, en.fn[nn].Constructor = xn, en.fn[nn].noConflict = function() {
                return en.fn[nn] = an, xn._jQueryInterface
            }, xn),
            Kn = ($n = "." + (Tn = "bs.tab"), kn = (En = e).fn.tab, An = {
                HIDE: "hide" + $n,
                HIDDEN: "hidden" + $n,
                SHOW: "show" + $n,
                SHOWN: "shown" + $n,
                CLICK_DATA_API: "click" + $n + ".data-api"
            }, Sn = "dropdown-menu", Dn = "active", In = "disabled", On = "fade", Pn = "show", Nn = ".dropdown", Hn = ".nav, .list-group", Mn = ".active", jn = "> li > .active", Ln = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', zn = ".dropdown-toggle", Wn = "> .dropdown-menu .active", Fn = function() {
                function n(t) {
                    this._element = t
                }
                var t = n.prototype;
                return t.show = function() {
                    var i = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && En(this._element).hasClass(Dn) || En(this._element).hasClass(In))) {
                        var t, n, e = En(this._element).closest(Hn)[0],
                            s = Ct.getSelectorFromElement(this._element);
                        if (e) {
                            var o = "UL" === e.nodeName ? jn : Mn;
                            n = (n = En.makeArray(En(e).find(o)))[n.length - 1]
                        }
                        var a = En.Event(An.HIDE, {
                                relatedTarget: this._element
                            }),
                            r = En.Event(An.SHOW, {
                                relatedTarget: n
                            });
                        if (n && En(n).trigger(a), En(this._element).trigger(r), !r.isDefaultPrevented() && !a.isDefaultPrevented()) {
                            s && (t = document.querySelector(s)), this._activate(this._element, e);
                            var l = function() {
                                var t = En.Event(An.HIDDEN, {
                                        relatedTarget: i._element
                                    }),
                                    e = En.Event(An.SHOWN, {
                                        relatedTarget: n
                                    });
                                En(n).trigger(t), En(i._element).trigger(e)
                            };
                            t ? this._activate(t, t.parentNode, l) : l()
                        }
                    }
                }, t.dispose = function() {
                    En.removeData(this._element, Tn), this._element = null
                }, t._activate = function(t, e, i) {
                    var n = this,
                        s = ("UL" === e.nodeName ? En(e).find(jn) : En(e).children(Mn))[0],
                        o = i && s && En(s).hasClass(On),
                        a = function() {
                            return n._transitionComplete(t, s, i)
                        };
                    if (s && o) {
                        var r = Ct.getTransitionDurationFromElement(s);
                        En(s).one(Ct.TRANSITION_END, a).emulateTransitionEnd(r)
                    } else a()
                }, t._transitionComplete = function(t, e, i) {
                    if (e) {
                        En(e).removeClass(Pn + " " + Dn);
                        var n = En(e.parentNode).find(Wn)[0];
                        n && En(n).removeClass(Dn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                    }
                    if (En(t).addClass(Dn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Ct.reflow(t), En(t).addClass(Pn), t.parentNode && En(t.parentNode).hasClass(Sn)) {
                        var s = En(t).closest(Nn)[0];
                        if (s) {
                            var o = [].slice.call(s.querySelectorAll(zn));
                            En(o).addClass(Dn)
                        }
                        t.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }, n._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = En(this),
                            e = t.data(Tn);
                        if (e || (e = new n(this), t.data(Tn, e)), "string" == typeof i) {
                            if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                            e[i]()
                        }
                    })
                }, a(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.1.3"
                    }
                }]), n
            }(), En(document).on(An.CLICK_DATA_API, Ln, function(t) {
                t.preventDefault(), Fn._jQueryInterface.call(En(this), "show")
            }), En.fn.tab = Fn._jQueryInterface, En.fn.tab.Constructor = Fn, En.fn.tab.noConflict = function() {
                return En.fn.tab = kn, Fn._jQueryInterface
            }, Fn);
        ! function(t) {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(e), t.Util = Ct, t.Alert = xt, t.Button = Et, t.Carousel = Tt, t.Collapse = $t, t.Dropdown = Rn, t.Modal = Vn, t.Popover = Bn, t.Scrollspy = Un, t.Tab = Kn, t.Tooltip = qn, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    });
var uniqueId = function(t) {
        return (t || "ui-id") + "-" + Math.floor(1e3 * Math.random() + 1)
    },
    removeMultiValAttributes = function(t, e, i) {
        var n = (t.attr(e) || "").split(/\s+/),
            s = $.inArray(i, n); - 1 !== s && n.splice(s, 1), (n = $.trim(n.join(" "))) ? t.attr(e, n) : t.removeAttr(e)
    },
    $colltabs = $('[data-toggle="collapse"]');
$colltabs.attr({
    role: "tab",
    "aria-selected": "false",
    "aria-expanded": "false"
}), $colltabs.each(function(t) {
    var e = $(this),
        i = e.attr("data-target") ? $(e.attr("data-target")) : $(e.attr("href")),
        n = e.attr("data-parent"),
        s = n && $(n),
        o = e.attr("id") || uniqueId("ui-collapse");
    $(s).find("div:not(.collapse,.panel-body), h4").attr("role", "presentation"), e.attr("id", o), s && (s.attr({
        role: "tablist",
        "aria-multiselectable": "true"
    }), i.hasClass("in") ? (e.attr({
        "aria-controls": e.attr("href").substr(1),
        "aria-selected": "true",
        "aria-expanded": "true",
        tabindex: "0"
    }), i.attr({
        role: "tabpanel",
        tabindex: "0",
        "aria-labelledby": o,
        "aria-hidden": "false"
    })) : (e.attr({
        "aria-controls": e.attr("href").substr(1),
        tabindex: "-1"
    }), i.attr({
        role: "tabpanel",
        tabindex: "-1",
        "aria-labelledby": o,
        "aria-hidden": "true"
    })))
});
var collToggle = $.fn.collapse.Constructor.prototype.toggle;
$.fn.collapse.Constructor.prototype.toggle = function() {
    var t, e = this.$parent && this.$parent.find('[aria-expanded="true"]');
    if (e) {
        var i, n = e.attr("data-target") || (t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""),
            s = $(n),
            o = this.$element;
        this.$parent;
        this.$parent && (i = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr("id") + '"]')), collToggle.apply(this, arguments), $.support.transition && this.$element.one($.support.transition.end, function() {
            e.attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: "-1"
            }), s.attr({
                "aria-hidden": "true",
                tabIndex: "-1"
            }), i.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: "0"
            }), o.hasClass("in") ? o.attr({
                "aria-hidden": "false",
                tabIndex: "0"
            }) : (i.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), o.attr({
                "aria-hidden": "true",
                tabIndex: "-1"
            }))
        })
    } else collToggle.apply(this, arguments)
}, $.fn.collapse.Constructor.prototype.keydown = function(t) {
    var e, i, n = $(this),
        s = n.closest("div[role=tablist] "),
        o = t.which || t.keyCode;
    n = $(this), /(32|37|38|39|40)/.test(o) && (32 == o && n.click(), i = (e = s.find("[role=tab]")).index(e.filter(":focus")), 38 != o && 37 != o || i--, 39 != o && 40 != o || i++, i < 0 && (i = e.length - 1), i == e.length && (i = 0), e.eq(i).on("focus"), t.preventDefault(), t.stopPropagation())
}, $(document).on("keydown.collapse.data-api", '[data-toggle="collapse"]', $.fn.collapse.Constructor.prototype.keydown);
var $par, firstItem, toggle = "[data-toggle=dropdown]",
    focusDelay = 200,
    menus = $(toggle).parent().find("ul").attr("role", "menu"),
    lis = menus.find("li").attr("role", "presentation");
lis.find("a").attr({
    role: "menuitem",
    tabIndex: "-1"
}), $(toggle).attr({
    "aria-haspopup": "true",
    "aria-expanded": "false"
}), $(toggle).parent().on("shown.bs.dropdown", function(t) {
    ($par = $(this)).find(toggle).attr("aria-expanded", "true"), setTimeout(function() {
        firstItem = $(".dropdown-menu [role=menuitem]:visible", $par)[0];
        try {
            firstItem.focus()
        } catch (t) {}
    }, focusDelay)
}), $(toggle).parent().on("hidden.bs.dropdown", function(t) {
    ($par = $(this)).find(toggle).attr("aria-expanded", "false")
}), $.fn.dropdown.Constructor.prototype.keydown = function(t) {
    /(32)/.test(t.keyCode) && ($(this).parent(), $(this).trigger("click"), t.preventDefault() && t.stopPropagation())
}, $(document).on("focusout.dropdown.data-api", ".dropdown-menu", function(t) {
    var e = $(this),
        i = this;
    setTimeout(function() {
        $.contains(i, document.activeElement) || (e.parent().removeClass("open"), e.parent().find("[data-toggle=dropdown]").attr("aria-expanded", "false"))
    }, 150)
}).on("keydown.bs.dropdown.data-api", toggle + ", [role=menu]", $.fn.dropdown.Constructor.prototype.keydown);
var $tablist = $(".nav-tabs, .nav-pills"),
    $lis = $tablist.children("li"),
    $tabs = $tablist.find('[data-toggle="tab"], [data-toggle="pill"]');
$tablist.attr("role", "tablist"), $lis.attr("role", "presentation"), $tabs.attr("role", "tab"), $tabs.each(function(t) {
    var e = $($(this).attr("href")),
        i = $(this),
        n = i.attr("id") || uniqueId("ui-tab");
    i.attr("id", n), i.parent().hasClass("active") ? (i.attr({
        tabIndex: "0",
        "aria-selected": "true",
        "aria-controls": i.attr("href").substr(1)
    }), e.attr({
        role: "tabpanel",
        tabIndex: "0",
        "aria-hidden": "false",
        "aria-labelledby": n
    })) : (i.attr({
        tabIndex: "-1",
        "aria-selected": "false",
        "aria-controls": i.attr("href").substr(1)
    }), e.attr({
        role: "tabpanel",
        tabIndex: "-1",
        "aria-hidden": "true",
        "aria-labelledby": n
    }))
}), $.fn.tab.Constructor.prototype.keydown = function(t) {
    var e, i, n = $(this),
        s = n.closest("ul[role=tablist] "),
        o = t.which || t.keyCode;
    if (n = $(this), /(37|38|39|40)/.test(o)) {
        i = (e = s.find("[role=tab]:visible")).index(e.filter(":focus")), 38 != o && 37 != o || i--, 39 != o && 40 != o || i++, i < 0 && (i = e.length - 1), i == e.length && (i = 0);
        var a = e.eq(i);
        "tab" === a.attr("role") && a.tab("show").focus(), t.preventDefault(), t.stopPropagation()
    }
}, $(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', $.fn.tab.Constructor.prototype.keydown);
var tabactivate = $.fn.tab.Constructor.prototype.activate;
$.fn.tab.Constructor.prototype.activate = function(t, e, i) {
        var n = e.find("> .active");
        n.find("[data-toggle=tab], [data-toggle=pill]").attr({
            tabIndex: "-1",
            "aria-selected": !1
        }), n.filter(".tab-pane").attr({
            "aria-hidden": !0,
            tabIndex: "-1"
        }), tabactivate.apply(this, arguments), t.addClass("active"), t.find("[data-toggle=tab], [data-toggle=pill]").attr({
            tabIndex: "0",
            "aria-selected": !0
        }), t.filter(".tab-pane").attr({
            "aria-hidden": !1,
            tabIndex: "0"
        })
    },
    function(l, i, s, r) {
        function c(t, e) {
            this.settings = null, this.options = l.extend({}, c.Defaults, e), this.$element = l(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, l.each(["onResize", "onThrottledResize"], l.proxy(function(t, e) {
                this._handlers[e] = l.proxy(this[e], this)
            }, this)), l.each(c.Plugins, l.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), l.each(c.Workers, l.proxy(function(t, e) {
                this._pipe.push({
                    filter: e.filter,
                    run: l.proxy(e.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        c.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: i,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, c.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, c.Type = {
            Event: "event",
            State: "state"
        }, c.Plugins = {}, c.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    s = {
                        width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
                    };
                !i && this.$stage.children().css(s), t.css = s
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    s = !this.settings.autoWidth,
                    o = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, o[n] = s ? e * i : this._items[n].width();
                this._widths = o
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t = [],
                    e = this._items,
                    i = this.settings,
                    n = Math.max(2 * i.items, 4),
                    s = 2 * Math.ceil(e.length / 2),
                    o = i.loop && e.length ? i.rewind ? n : Math.max(n, s) : 0,
                    a = "",
                    r = "";
                for (o /= 2; 0 < o;) t.push(this.normalize(t.length / 2, !0)), a += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), r = e[t[t.length - 1]][0].outerHTML + r, o -= 1;
                this._clones = t, l(a).addClass("cloned").appendTo(this.$stage), l(r).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
                this._coordinates = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    a = this.coordinates(this.current()) + o,
                    r = a + this.width() * s,
                    l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", a) && this.op(t, ">", r) || this.op(e, "<", a) && this.op(e, ">", r)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
            }
        }], c.prototype.initializeStage = function() {
            this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ">", {
                class: this.settings.stageClass
            }).wrap(l("<div/>", {
                class: this.settings.stageOuterClass
            })), this.$element.append(this.$stage.parent()))
        }, c.prototype.initializeItems = function() {
            var t = this.$element.find(".owl-item");
            if (t.length) return this._items = t.get().map(function(t) {
                return l(t)
            }), this._mergers = this._items.map(function() {
                return 1
            }), void this.refresh();
            this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
        }, c.prototype.initialize = function() {
            var t, e, i;
            (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
            this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, c.prototype.isVisible = function() {
            return !this.settings.checkVisibility || this.$element.is(":visible")
        }, c.prototype.setup = function() {
            var e = this.viewport(),
                t = this.options.responsive,
                i = -1,
                n = null;
            t ? (l.each(t, function(t) {
                t <= e && i < t && (i = Number(t))
            }), "function" == typeof(n = l.extend({}, this.options, t[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = l.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: n
                }
            }), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, c.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, c.prototype.prepare = function(t) {
            var e = this.trigger("prepare", {
                content: t
            });
            return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
                content: e.data
            }), e.data
        }, c.prototype.update = function() {
            for (var t = 0, e = this._pipe.length, i = l.proxy(function(t) {
                    return this[t]
                }, this._invalidated), n = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, c.prototype.width = function(t) {
            switch (t = t || c.Width.Default) {
                case c.Width.Inner:
                case c.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, c.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, c.prototype.onThrottledResize = function() {
            i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, c.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
        }, c.prototype.registerEventHandlers = function() {
            l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
        }, c.prototype.onDragStart = function(t) {
            var e = null;
            3 !== t.which && (l.support.transform ? e = {
                x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
                y: e[16 === e.length ? 13 : 5]
            } : (e = this.$stage.position(), e = {
                x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
                y: e.top
            }), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(s).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(s).one("mousemove.owl.core touchmove.owl.core", l.proxy(function(t) {
                var e = this.difference(this._drag.pointer, this.pointer(t));
                l(s).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, c.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                s = this.difference(this._drag.pointer, this.pointer(t)),
                o = this.difference(this._drag.stage.start, s);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
        }, c.prototype.onDragEnd = function(t) {
            var e = this.difference(this._drag.pointer, this.pointer(t)),
                i = this._drag.stage.current,
                n = 0 < e.x ^ this.settings.rtl ? "left" : "right";
            l(s).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? n : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = n, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, c.prototype.closest = function(i, n) {
            var s = -1,
                o = this.width(),
                a = this.coordinates();
            return this.settings.freeDrag || l.each(a, l.proxy(function(t, e) {
                return "left" === n && e - 30 < i && i < e + 30 ? s = t : "right" === n && e - o - 30 < i && i < e - o + 30 ? s = t + 1 : this.op(i, "<", e) && this.op(i, ">", a[t + 1] !== r ? a[t + 1] : e - o) && (s = "left" === n ? t + 1 : t), -1 === s
            }, this)), this.settings.loop || (this.op(i, ">", a[this.minimum()]) ? s = i = this.minimum() : this.op(i, "<", a[this.maximum()]) && (s = i = this.maximum())), s
        }, c.prototype.animate = function(t) {
            var e = 0 < this.speed();
            this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
                transform: "translate3d(" + t + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
            }) : e ? this.$stage.animate({
                left: t + "px"
            }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: t + "px"
            })
        }, c.prototype.is = function(t) {
            return this._states.current[t] && 0 < this._states.current[t]
        }, c.prototype.current = function(t) {
            if (t === r) return this._current;
            if (0 === this._items.length) return r;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== r && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, c.prototype.invalidate = function(t) {
            return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function(t, e) {
                return e
            })
        }, c.prototype.reset = function(t) {
            (t = this.normalize(t)) !== r && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, c.prototype.normalize = function(t, e) {
            var i = this._items.length,
                n = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || i < 1 ? t = r : (t < 0 || i + n <= t) && (t = ((t - n / 2) % i + i) % i + n / 2), t
        }, c.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, c.prototype.maximum = function(t) {
            var e, i, n, s = this.settings,
                o = this._coordinates.length;
            if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
            else if (s.autoWidth || s.merge) {
                if (e = this._items.length)
                    for (i = this._items[--e].width(), n = this.$element.width(); e-- && !(n < (i += this._items[e].width() + this.settings.margin)););
                o = e + 1
            } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
            return t && (o -= this._clones.length / 2), Math.max(o, 0)
        }, c.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, c.prototype.items = function(t) {
            return t === r ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, c.prototype.mergers = function(t) {
            return t === r ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, c.prototype.clones = function(i) {
            var e = this._clones.length / 2,
                n = e + this._items.length,
                s = function(t) {
                    return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
                };
            return i === r ? l.map(this._clones, function(t, e) {
                return s(e)
            }) : l.map(this._clones, function(t, e) {
                return t === i ? s(e) : null
            })
        }, c.prototype.speed = function(t) {
            return t !== r && (this._speed = t), this._speed
        }, c.prototype.coordinates = function(t) {
            var e, i = 1,
                n = t - 1;
            return t === r ? l.map(this._coordinates, l.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, n = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[n] || 0)) / 2 * i) : e = this._coordinates[n] || 0, e = Math.ceil(e))
        }, c.prototype.duration = function(t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, c.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                s = t - this.relative(i),
                o = (0 < s) - (s < 0),
                a = this._items.length,
                r = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(s) > a / 2 && (s += -1 * o * a), (n = (((t = i + s) - r) % a + a) % a + r) !== t && n - s <= l && 0 < n - s && (i = n - s, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(r, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
        }, c.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, c.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, c.prototype.onTransitionEnd = function(t) {
            if (t !== r && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, c.prototype.viewport = function() {
            var t;
            return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : s.documentElement && s.documentElement.clientWidth ? t = s.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
        }, c.prototype.replace = function(t) {
            this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
                return 1 === this.nodeType
            }).each(l.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, c.prototype.add = function(t, e) {
            var i = this.relative(this._current);
            e = e === r ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
                content: t,
                position: e
            }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, c.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== r && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, c.prototype.preloadAutoWidthImages = function(t) {
            t.each(l.proxy(function(t, e) {
                this.enter("pre-loading"), e = l(e), l(new Image).one("load", l.proxy(function(t) {
                    e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
            }, this))
        }, c.prototype.destroy = function() {
            for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(s).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, c.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? i < t : t < i;
                case ">":
                    return n ? t < i : i < t;
                case ">=":
                    return n ? t <= i : i <= t;
                case "<=":
                    return n ? i <= t : t <= i
            }
        }, c.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, c.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, c.prototype.trigger = function(t, e, i, n, s) {
            var o = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                a = l.camelCase(l.grep(["on", t, i], function(t) {
                    return t
                }).join("-").toLowerCase()),
                r = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
                    relatedTarget: this
                }, o, e));
            return this._supress[t] || (l.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(r)
            }), this.register({
                type: c.Type.Event,
                name: t
            }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[a] && this.settings[a].call(this, r)), r
        }, c.prototype.enter = function(t) {
            l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
                this._states.current[e] === r && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, c.prototype.leave = function(t) {
            l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, c.prototype.register = function(i) {
            if (i.type === c.Type.Event) {
                if (l.event.special[i.name] || (l.event.special[i.name] = {}), !l.event.special[i.name].owl) {
                    var e = l.event.special[i.name]._default;
                    l.event.special[i.name]._default = function(t) {
                        return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
                    }, l.event.special[i.name].owl = !0
                }
            } else i.type === c.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function(t, e) {
                return l.inArray(t, this._states.tags[i.name]) === e
            }, this)))
        }, c.prototype.suppress = function(t) {
            l.each(t, l.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, c.prototype.release = function(t) {
            l.each(t, l.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, c.prototype.pointer = function(t) {
            var e = {
                x: null,
                y: null
            };
            return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
        }, c.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, c.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, l.fn.owlCarousel = function(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var t = l(this),
                    i = t.data("owl.carousel");
                i || (i = new c(this, "object" == typeof e && e), t.data("owl.carousel", i), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
                    i.register({
                        type: c.Type.Event,
                        name: e
                    }), i.$element.on(e + ".owl.carousel.core", l.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                    }, i))
                })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n)
            })
        }, l.fn.owlCarousel.Constructor = c
    }(window.Zepto || window.jQuery, window, document),
    function(e, i, t, n) {
        var s = function(t) {
            this._core = t, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": e.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, s.prototype.watch = function() {
            this._interval || (this._visible = this._core.isVisible(), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, s.prototype.refresh = function() {
            this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
    }(window.Zepto || window.jQuery, window, document),
    function(r, o, t, e) {
        var i = function(t) {
            this._core = t, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": r.proxy(function(t) {
                    if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                        var e = this._core.settings,
                            i = e.center && Math.ceil(e.items / 2) || e.items,
                            n = e.center && -1 * i || 0,
                            s = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n,
                            o = this._core.clones().length,
                            a = r.proxy(function(t, e) {
                                this.load(e)
                            }, this);
                        for (0 < e.lazyLoadEager && (i += e.lazyLoadEager, e.loop && (s -= e.lazyLoadEager, i++)); n++ < i;) this.load(o / 2 + this._core.relative(s)), o && r.each(this._core.clones(this._core.relative(s)), a), s++
                    }
                }, this)
            }, this._core.options = r.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            lazyLoad: !1,
            lazyLoadEager: 0
        }, i.prototype.load = function(t) {
            var e = this._core.$stage.children().eq(t),
                i = e && e.find(".owl-lazy");
            !i || -1 < r.inArray(e.get(0), this._loaded) || (i.each(r.proxy(function(t, e) {
                var i, n = r(e),
                    s = 1 < o.devicePixelRatio && n.attr("data-src-retina") || n.attr("data-src") || n.attr("data-srcset");
                this._core.trigger("load", {
                    element: n,
                    url: s
                }, "lazy"), n.is("img") ? n.one("load.owl.lazy", r.proxy(function() {
                    n.css("opacity", 1), this._core.trigger("loaded", {
                        element: n,
                        url: s
                    }, "lazy")
                }, this)).attr("src", s) : n.is("source") ? n.one("load.owl.lazy", r.proxy(function() {
                    this._core.trigger("loaded", {
                        element: n,
                        url: s
                    }, "lazy")
                }, this)).attr("srcset", s) : ((i = new Image).onload = r.proxy(function() {
                    n.css({
                        "background-image": 'url("' + s + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: n,
                        url: s
                    }, "lazy")
                }, this), i.src = s)
            }, this)), this._loaded.push(e.get(0)))
        }, i.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, r.fn.owlCarousel.Constructor.Plugins.Lazy = i
    }(window.Zepto || window.jQuery, window, document),
    function(a, i, t, e) {
        var n = function(t) {
            this._core = t, this._previousHeight = null, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": a.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": a.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = a.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
            var e = this;
            a(i).on("load", function() {
                e._core.settings.autoHeight && e.update()
            }), a(i).on("resize", function() {
                e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId), e._intervalId = setTimeout(function() {
                    e.update()
                }, 250))
            })
        };
        n.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, n.prototype.update = function() {
            var t = this._core._current,
                e = t + this._core.settings.items,
                i = this._core.settings.lazyLoad,
                n = this._core.$stage.children().toArray().slice(t, e),
                s = [],
                o = 0;
            a.each(n, function(t, e) {
                s.push(a(e).height())
            }), (o = Math.max.apply(null, s)) <= 1 && i && this._previousHeight && (o = this._previousHeight), this._previousHeight = o, this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
        }, n.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
    }(window.Zepto || window.jQuery, window, document),
    function(h, t, e, i) {
        var n = function(t) {
            this._core = t, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": h.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": h.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": h.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": h.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": h.proxy(function(t) {
                    if (t.namespace) {
                        var e = h(t.content).find(".owl-video");
                        e.length && (e.css("display", "none"), this.fetch(e, h(t.content)))
                    }
                }, this)
            }, this._core.options = h.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", h.proxy(function(t) {
                this.play(t)
            }, this))
        };
        n.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, n.prototype.fetch = function(t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                s = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                a = t.attr("href");
            if (!a) throw new Error("Missing video URL.");
            if (-1 < (n = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
            else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";
            else {
                if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[a] = {
                type: i,
                id: n,
                width: s,
                height: o
            }, e.attr("data-video", a), this.thumbnail(t, this._videos[a])
        }, n.prototype.thumbnail = function(e, t) {
            var i, n, s = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "",
                o = e.find("img"),
                a = "src",
                r = "",
                l = this._core.settings,
                c = function(t) {
                    '<div class="owl-video-play-icon"></div>',
                    i = l.lazyLoad ? h("<div/>", {
                        class: "owl-video-tn " + r,
                        srcType: t
                    }) : h("<div/>", {
                        class: "owl-video-tn",
                        style: "opacity:1;background-image:url(" + t + ")"
                    }),
                    e.after(i),
                    e.after('<div class="owl-video-play-icon"></div>')
                };
            if (e.wrap(h("<div/>", {
                    class: "owl-video-wrapper",
                    style: s
                })), this._core.settings.lazyLoad && (a = "data-src", r = "owl-lazy"), o.length) return c(o.attr(a)), o.remove(), !1;
            "youtube" === t.type ? (n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", c(n)) : "vimeo" === t.type ? h.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    n = t[0].thumbnail_large, c(n)
                }
            }) : "vzaar" === t.type && h.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    n = t.framegrab_url, c(n)
                }
            })
        }, n.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, n.prototype.play = function(t) {
            var e, i = h(t.target).closest("." + this._core.settings.itemClass),
                n = this._videos[i.attr("data-video")],
                s = n.width || "100%",
                o = n.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (e = h('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o), e.attr("width", s), "youtube" === n.type ? e.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? e.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && e.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), h(e).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
        }, n.prototype.isInFullScreen = function() {
            var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
            return t && h(t).parent().hasClass("owl-video-frame")
        }, n.prototype.destroy = function() {
            var t, e;
            for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, h.fn.owlCarousel.Constructor.Plugins.Video = n
    }(window.Zepto || window.jQuery, window, document),
    function(a, t, e, i) {
        var n = function(t) {
            this.core = t, this.core.options = a.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
                "change.owl.carousel": a.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": a.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        n.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, n.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var t, e = a.proxy(this.clear, this),
                    i = this.core.$stage.children().eq(this.previous),
                    n = this.core.$stage.children().eq(this.next),
                    s = this.core.settings.animateIn,
                    o = this.core.settings.animateOut;
                this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(a.support.animation.end, e).css({
                    left: t + "px"
                }).addClass("animated owl-animated-out").addClass(o)), s && n.one(a.support.animation.end, e).addClass("animated owl-animated-in").addClass(s))
            }
        }, n.prototype.clear = function(t) {
            a(t.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, n.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Animate = n
    }(window.Zepto || window.jQuery, window, document),
    function(n, s, e, t) {
        var i = function(t) {
            this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
                "changed.owl.carousel": n.proxy(function(t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
                }, this),
                "initialized.owl.carousel": n.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": n.proxy(function(t, e, i) {
                    t.namespace && this.play(e, i)
                }, this),
                "stop.owl.autoplay": n.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = n.extend({}, i.Defaults, this._core.options)
        };
        i.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, i.prototype._next = function(t) {
            this._call = s.setTimeout(n.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
        }, i.prototype.read = function() {
            return (new Date).getTime() - this._time
        }, i.prototype.play = function(t, e) {
            var i;
            this._core.is("rotating") || this._core.enter("rotating"), t = t || this._core.settings.autoplayTimeout, i = Math.min(this._time % (this._timeout || t), t), this._paused ? (this._time = this.read(), this._paused = !1) : s.clearTimeout(this._call), this._time += this.read() % t - i, this._timeout = t, this._call = s.setTimeout(n.proxy(this._next, this, e), t - i)
        }, i.prototype.stop = function() {
            this._core.is("rotating") && (this._time = 0, this._paused = !0, s.clearTimeout(this._call), this._core.leave("rotating"))
        }, i.prototype.pause = function() {
            this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, s.clearTimeout(this._call))
        }, i.prototype.destroy = function() {
            var t, e;
            for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, n.fn.owlCarousel.Constructor.Plugins.autoplay = i
    }(window.Zepto || window.jQuery, window, document),
    function(o, t, e, i) {
        "use strict";
        var n = function(t) {
            this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": o.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": o.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": o.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": o.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": o.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": o.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = o.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        n.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, n.prototype.initialize = function() {
            var t, i = this._core.settings;
            for (t in this._controls.$relative = (i.navContainer ? o(i.navContainer) : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = o("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function(t) {
                    this.prev(i.navSpeed)
                }, this)), this._controls.$next = o("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function(t) {
                    this.next(i.navSpeed)
                }, this)), i.dotsData || (this._templates = [o('<button role="button">').addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? o(i.dotsContainer) : o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", o.proxy(function(t) {
                    var e = o(t.target).parent().is(this._controls.$absolute) ? o(t.target).index() : o(t.target).parent().index();
                    t.preventDefault(), this.to(e, i.dotsSpeed)
                }, this)), this._overrides) this._core[t] = o.proxy(this[t], this)
        }, n.prototype.destroy = function() {
            var t, e, i, n, s;
            for (t in s = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) "$relative" === e && s.navContainer ? this._controls[e].html("") : this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, n.prototype.update = function() {
            var t, e, i = this._core.clones().length / 2,
                n = i + this._core.items().length,
                s = this._core.maximum(!0),
                o = this._core.settings,
                a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
            if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                for (this._pages = [], t = i, e = 0; t < n; t++) {
                    if (a <= e || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(s, t - i),
                                end: t - i + a - 1
                            }), Math.min(s, t - i) === s) break;
                        e = 0, 0
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, n.prototype.draw = function() {
            var t, e = this._core.settings,
                i = this._core.items().length <= e.items,
                n = this._core.relative(this._core.current()),
                s = e.loop || e.rewind;
            this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !s && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
        }, n.prototype.onTrigger = function(t) {
            var e = this._core.settings;
            t.page = {
                index: o.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
            }
        }, n.prototype.current = function() {
            var i = this._core.relative(this._core.current());
            return o.grep(this._pages, o.proxy(function(t, e) {
                return t.start <= i && t.end >= i
            }, this)).pop()
        }, n.prototype.getPosition = function(t) {
            var e, i, n = this._core.settings;
            return "page" == n.slideBy ? (e = o.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += n.slideBy : e -= n.slideBy), e
        }, n.prototype.next = function(t) {
            o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
        }, n.prototype.prev = function(t) {
            o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
        }, n.prototype.to = function(t, e, i) {
            var n;
            !i && this._pages.length ? (n = this._pages.length, o.proxy(this._overrides.to, this._core)(this._pages[(t % n + n) % n].start, e)) : o.proxy(this._overrides.to, this._core)(t, e)
        }, o.fn.owlCarousel.Constructor.Plugins.Navigation = n
    }(window.Zepto || window.jQuery, window, document),
    function(n, s, t, e) {
        "use strict";
        var i = function(t) {
            this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": n.proxy(function(t) {
                    t.namespace && "URLHash" === this._core.settings.startPosition && n(s).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": n.proxy(function(t) {
                    if (t.namespace) {
                        var e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!e) return;
                        this._hashes[e] = t.content
                    }
                }, this),
                "changed.owl.carousel": n.proxy(function(t) {
                    if (t.namespace && "position" === t.property.name) {
                        var i = this._core.items(this._core.relative(this._core.current())),
                            e = n.map(this._hashes, function(t, e) {
                                return t === i ? e : null
                            }).join();
                        if (!e || s.location.hash.slice(1) === e) return;
                        s.location.hash = e
                    }
                }, this)
            }, this._core.options = n.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), n(s).on("hashchange.owl.navigation", n.proxy(function(t) {
                var e = s.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    n = this._hashes[e] && i.index(this._hashes[e]);
                void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
            }, this))
        };
        i.Defaults = {
            URLhashListener: !1
        }, i.prototype.destroy = function() {
            var t, e;
            for (t in n(s).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, n.fn.owlCarousel.Constructor.Plugins.Hash = i
    }(window.Zepto || window.jQuery, window, document),
    function(s, t, e, o) {
        var a = s("<support>").get(0).style,
            r = "Webkit Moz O ms".split(" "),
            i = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            n = function() {
                return !!h("transform")
            },
            l = function() {
                return !!h("perspective")
            },
            c = function() {
                return !!h("animation")
            };

        function h(t, i) {
            var n = !1,
                e = t.charAt(0).toUpperCase() + t.slice(1);
            return s.each((t + " " + r.join(e + " ") + e).split(" "), function(t, e) {
                if (a[e] !== o) return n = !i || e, !1
            }), n
        }

        function d(t) {
            return h(t, !0)
        }(function() {
            return !!h("transition")
        })() && (s.support.transition = new String(d("transition")), s.support.transition.end = i.transition.end[s.support.transition]), c() && (s.support.animation = new String(d("animation")), s.support.animation.end = i.animation.end[s.support.animation]), n() && (s.support.transform = new String(d("transform")), s.support.transform3d = l())
    }(window.Zepto || window.jQuery, window, document),
    function(s, i, N, u) {
        "use strict";
        var o = N("html"),
            n = N(s),
            c = N(i),
            H = N.fancybox = function() {
                H.open.apply(this, arguments)
            },
            a = navigator.userAgent.match(/msie/i),
            r = null,
            h = i.createTouch !== u,
            p = function(t) {
                return t && t.hasOwnProperty && t instanceof N
            },
            f = function(t) {
                return t && "string" === N.type(t)
            },
            M = function(t) {
                return f(t) && 0 < t.indexOf("%")
            },
            j = function(t, e) {
                var i = parseInt(t, 10) || 0;
                return e && M(t) && (i = H.getViewport()[e] / 100 * i), Math.ceil(i)
            },
            L = function(t, e) {
                return j(t, e) + "px"
            };
        N.extend(H, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !h,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (a ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                    loading: '<div id="fancybox-loading"><div></div></div>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: N.noop,
                beforeLoad: N.noop,
                afterLoad: N.noop,
                beforeShow: N.noop,
                afterShow: N.noop,
                beforeChange: N.noop,
                beforeClose: N.noop,
                afterClose: N.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(h, d) {
                if (h && (N.isPlainObject(d) || (d = {}), !1 !== H.close(!0))) return N.isArray(h) || (h = p(h) ? N(h).get() : [h]), N.each(h, function(t, e) {
                    var i, n, s, o, a, r, l, c = {};
                    "object" === N.type(e) && (e.nodeType && (e = N(e)), p(e) ? (c = {
                        href: e.data("fancybox-href") || e.attr("href"),
                        title: N("<div/>").text(e.data("fancybox-title") || e.attr("title") || "").html(),
                        isDom: !0,
                        element: e
                    }, N.metadata && N.extend(!0, c, e.metadata())) : c = e), i = d.href || c.href || (f(e) ? e : null), n = d.title !== u ? d.title : c.title || "", !(o = (s = d.content || c.content) ? "html" : d.type || c.type) && c.isDom && ((o = e.data("fancybox-type")) || (o = (a = e.prop("class").match(/fancybox\.(\w+)/)) ? a[1] : null)), f(i) && (o || (H.isImage(i) ? o = "image" : H.isSWF(i) ? o = "swf" : "#" === i.charAt(0) ? o = "inline" : f(e) && (o = "html", s = e)), "ajax" === o && (i = (r = i.split(/\s+/, 2)).shift(), l = r.shift())), s || ("inline" === o ? i ? s = N(f(i) ? i.replace(/.*(?=#[^\s]+$)/, "") : i) : c.isDom && (s = e) : "html" === o ? s = i : o || i || !c.isDom || (o = "inline", s = e)), N.extend(c, {
                        href: i,
                        type: o,
                        content: s,
                        title: n,
                        selector: l
                    }), h[t] = c
                }), H.opts = N.extend(!0, {}, H.defaults, d), d.keys !== u && (H.opts.keys = !!d.keys && N.extend({}, H.defaults.keys, d.keys)), H.group = h, H._start(H.opts.index)
            },
            cancel: function() {
                var t = H.coming;
                t && !1 === H.trigger("onCancel") || (H.hideLoading(), t && (H.ajaxLoad && H.ajaxLoad.abort(), H.ajaxLoad = null, H.imgPreload && (H.imgPreload.onload = H.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), H.coming = null, H.current || H._afterZoomOut(t)))
            },
            close: function(t) {
                H.cancel(), !1 !== H.trigger("beforeClose") && (H.unbindEvents(), H.isActive && (H.isOpen && !0 !== t ? (H.isOpen = H.isOpened = !1, H.isClosing = !0, N(".fancybox-item, .fancybox-nav").remove(), H.wrap.stop(!0, !0).removeClass("fancybox-opened"), H.transitions[H.current.closeMethod]()) : (N(".fancybox-wrap").stop(!0).trigger("onReset").remove(), H._afterZoomOut())))
            },
            play: function(t) {
                var e = function() {
                        clearTimeout(H.player.timer)
                    },
                    i = function() {
                        e(), H.current && H.player.isActive && (H.player.timer = setTimeout(H.next, H.current.playSpeed))
                    },
                    n = function() {
                        e(), c.unbind(".player"), H.player.isActive = !1, H.trigger("onPlayEnd")
                    };
                !0 === t || !H.player.isActive && !1 !== t ? H.current && (H.current.loop || H.current.index < H.group.length - 1) && (H.player.isActive = !0, c.bind({
                    "onCancel.player beforeClose.player": n,
                    "onUpdate.player": i,
                    "beforeLoad.player": e
                }), i(), H.trigger("onPlayStart")) : n()
            },
            next: function(t) {
                var e = H.current;
                e && (f(t) || (t = e.direction.next), H.jumpto(e.index + 1, t, "next"))
            },
            prev: function(t) {
                var e = H.current;
                e && (f(t) || (t = e.direction.prev), H.jumpto(e.index - 1, t, "prev"))
            },
            jumpto: function(t, e, i) {
                var n = H.current;
                n && (t = j(t), H.direction = e || n.direction[t >= n.index ? "next" : "prev"], H.router = i || "jumpto", n.loop && (t < 0 && (t = n.group.length + t % n.group.length), t %= n.group.length), n.group[t] !== u && (H.cancel(), H._start(t)))
            },
            reposition: function(t, e) {
                var i, n = H.current,
                    s = n ? n.wrap : null;
                s && (i = H._getPosition(e), t && "scroll" === t.type ? (delete i.position, s.stop(!0, !0).animate(i, 200)) : (s.css(i), n.pos = N.extend({}, n.dim, i)))
            },
            update: function(e) {
                var i = e && e.originalEvent && e.originalEvent.type,
                    n = !i || "orientationchange" === i;
                n && (clearTimeout(r), r = null), H.isOpen && !r && (r = setTimeout(function() {
                    var t = H.current;
                    t && !H.isClosing && (H.wrap.removeClass("fancybox-tmp"), (n || "load" === i || "resize" === i && t.autoResize) && H._setDimension(), "scroll" === i && t.canShrink || H.reposition(e), H.trigger("onUpdate"), r = null)
                }, n && !h ? 0 : 300))
            },
            toggle: function(t) {
                H.isOpen && (H.current.fitToView = "boolean" === N.type(t) ? t : !H.current.fitToView, h && (H.wrap.removeAttr("style").addClass("fancybox-tmp"), H.trigger("onUpdate")), H.update())
            },
            hideLoading: function() {
                c.unbind(".loading"), N("#fancybox-loading").remove()
            },
            showLoading: function() {
                var t, e;
                H.hideLoading(), t = N(H.opts.tpl.loading).click(H.cancel).appendTo("body"), c.bind("keydown.loading", function(t) {
                    27 === (t.which || t.keyCode) && (t.preventDefault(), H.cancel())
                }), H.defaults.fixed || (e = H.getViewport(), t.css({
                    position: "absolute",
                    top: .5 * e.h + e.y,
                    left: .5 * e.w + e.x
                })), H.trigger("onLoading")
            },
            getViewport: function() {
                var t = H.current && H.current.locked || !1,
                    e = {
                        x: n.scrollLeft(),
                        y: n.scrollTop()
                    };
                return t && t.length ? (e.w = t[0].clientWidth, e.h = t[0].clientHeight) : (e.w = h && s.innerWidth ? s.innerWidth : n.width(), e.h = h && s.innerHeight ? s.innerHeight : n.height()), e
            },
            unbindEvents: function() {
                H.wrap && p(H.wrap) && H.wrap.unbind(".fb"), c.unbind(".fb"), n.unbind(".fb")
            },
            bindEvents: function() {
                var e, l = H.current;
                l && (n.bind("orientationchange.fb" + (h ? "" : " resize.fb") + (l.autoCenter && !l.locked ? " scroll.fb" : ""), H.update), (e = l.keys) && c.bind("keydown.fb", function(i) {
                    var n = i.which || i.keyCode,
                        t = i.target || i.srcElement;
                    if (27 === n && H.coming) return !1;
                    i.ctrlKey || i.altKey || i.shiftKey || i.metaKey || t && (t.type || N(t).is("[contenteditable]")) || N.each(e, function(t, e) {
                        return 1 < l.group.length && e[n] !== u ? (H[t](e[n]), i.preventDefault(), !1) : -1 < N.inArray(n, e) ? (H[t](), i.preventDefault(), !1) : void 0
                    })
                }), N.fn.mousewheel && l.mouseWheel && H.wrap.bind("mousewheel.fb", function(t, e, i, n) {
                    for (var s, o = t.target || null, a = N(o), r = !1; a.length && !(r || a.is(".fancybox-skin") || a.is(".fancybox-wrap"));) r = (s = a[0]) && !(s.style.overflow && "hidden" === s.style.overflow) && (s.clientWidth && s.scrollWidth > s.clientWidth || s.clientHeight && s.scrollHeight > s.clientHeight), a = N(a).parent();
                    0 === e || r || 1 < H.group.length && !l.canShrink && (0 < n || 0 < i ? H.prev(0 < n ? "down" : "left") : (n < 0 || i < 0) && H.next(n < 0 ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function(i, t) {
                var e, n = t || H.coming || H.current;
                if (n) {
                    if (N.isFunction(n[i]) && (e = n[i].apply(n, Array.prototype.slice.call(arguments, 1))), !1 === e) return !1;
                    n.helpers && N.each(n.helpers, function(t, e) {
                        e && H.helpers[t] && N.isFunction(H.helpers[t][i]) && H.helpers[t][i](N.extend(!0, {}, H.helpers[t].defaults, e), n)
                    })
                }
                c.trigger(i)
            },
            isImage: function(t) {
                return f(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(t) {
                return f(t) && t.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(t) {
                var e, i, n, s, o, a = {};
                if (t = j(t), !(e = H.group[t] || null)) return !1;
                if (s = (a = N.extend(!0, {}, H.opts, e)).margin, o = a.padding, "number" === N.type(s) && (a.margin = [s, s, s, s]), "number" === N.type(o) && (a.padding = [o, o, o, o]), a.modal && N.extend(!0, a, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), a.autoSize && (a.autoWidth = a.autoHeight = !0), "auto" === a.width && (a.autoWidth = !0), "auto" === a.height && (a.autoHeight = !0), a.group = H.group, a.index = t, H.coming = a, !1 !== H.trigger("beforeLoad")) {
                    if (n = a.type, i = a.href, !n) return H.coming = null, !(!H.current || !H.router || "jumpto" === H.router) && (H.current.index = t, H[H.router](H.direction));
                    if (H.isActive = !0, "image" !== n && "swf" !== n || (a.autoHeight = a.autoWidth = !1, a.scrolling = "visible"), "image" === n && (a.aspectRatio = !0), "iframe" === n && h && (a.scrolling = "scroll"), a.wrap = N(a.tpl.wrap).addClass("fancybox-" + (h ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + a.wrapCSS).appendTo(a.parent || "body"), N.extend(a, {
                            skin: N(".fancybox-skin", a.wrap),
                            outer: N(".fancybox-outer", a.wrap),
                            inner: N(".fancybox-inner", a.wrap)
                        }), N.each(["Top", "Right", "Bottom", "Left"], function(t, e) {
                            a.skin.css("padding" + e, L(a.padding[t]))
                        }), H.trigger("onReady"), "inline" === n || "html" === n) {
                        if (!a.content || !a.content.length) return H._error("content")
                    } else if (!i) return H._error("href");
                    "image" === n ? H._loadImage() : "ajax" === n ? H._loadAjax() : "iframe" === n ? H._loadIframe() : H._afterLoad()
                } else H.coming = null
            },
            _error: function(t) {
                N.extend(H.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: t,
                    content: H.coming.tpl.error
                }), H._afterLoad()
            },
            _loadImage: function() {
                var t = H.imgPreload = new Image;
                t.onload = function() {
                    this.onload = this.onerror = null, H.coming.width = this.width / H.opts.pixelRatio, H.coming.height = this.height / H.opts.pixelRatio, H._afterLoad()
                }, t.onerror = function() {
                    this.onload = this.onerror = null, H._error("image")
                }, t.src = H.coming.href, !0 !== t.complete && H.showLoading()
            },
            _loadAjax: function() {
                var i = H.coming;
                H.showLoading(), H.ajaxLoad = N.ajax(N.extend({}, i.ajax, {
                    url: i.href,
                    error: function(t, e) {
                        H.coming && "abort" !== e ? H._error("ajax", t) : H.hideLoading()
                    },
                    success: function(t, e) {
                        "success" === e && (i.content = t, H._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var t = H.coming,
                    e = N(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", h ? "auto" : t.iframe.scrolling).attr("src", t.href);
                N(t.wrap).bind("onReset", function() {
                    try {
                        N(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (t) {}
                }), t.iframe.preload && (H.showLoading(), e.one("load", function() {
                    N(this).data("ready", 1), h || N(this).bind("load.fb", H.update), N(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), H._afterLoad()
                })), t.content = e.appendTo(t.inner), t.iframe.preload || H._afterLoad()
            },
            _preloadImages: function() {
                var t, e, i = H.group,
                    n = H.current,
                    s = i.length,
                    o = n.preload ? Math.min(n.preload, s - 1) : 0;
                for (e = 1; e <= o; e += 1) "image" === (t = i[(n.index + e) % s]).type && t.href && ((new Image).src = t.href)
            },
            _afterLoad: function() {
                var t, i, e, n, s, o, a = H.coming,
                    r = H.current,
                    l = "fancybox-placeholder";
                if (H.hideLoading(), a && !1 !== H.isActive) {
                    if (!1 === H.trigger("afterLoad", a, r)) return a.wrap.stop(!0).trigger("onReset").remove(), void(H.coming = null);
                    switch (r && (H.trigger("beforeChange", r), r.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), H.unbindEvents(), i = (t = a).content, e = a.type, n = a.scrolling, N.extend(H, {
                        wrap: t.wrap,
                        skin: t.skin,
                        outer: t.outer,
                        inner: t.inner,
                        current: t,
                        previous: r
                    }), s = t.href, e) {
                        case "inline":
                        case "ajax":
                        case "html":
                            t.selector ? i = N("<div>").html(i).find(t.selector) : p(i) && (i.data(l) || i.data(l, N('<div class="' + l + '"></div>').insertAfter(i).hide()), i = i.show().detach(), t.wrap.bind("onReset", function() {
                                N(this).find(i).length && i.hide().replaceAll(i.data(l)).data(l, !1)
                            }));
                            break;
                        case "image":
                            i = t.tpl.image.replace(/\{href\}/g, s);
                            break;
                        case "swf":
                            i = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>', o = "", N.each(t.swf, function(t, e) {
                                i += '<param name="' + t + '" value="' + e + '"></param>', o += " " + t + '="' + e + '"'
                            }), i += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
                    }
                    p(i) && i.parent().is(t.inner) || t.inner.append(i), H.trigger("beforeShow"), t.inner.css("overflow", "yes" === n ? "scroll" : "no" === n ? "hidden" : n), H._setDimension(), H.reposition(), H.isOpen = !1, H.coming = null, H.bindEvents(), H.isOpened ? r.prevMethod && H.transitions[r.prevMethod]() : N(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), H.transitions[H.isOpened ? t.nextMethod : t.openMethod](), H._preloadImages()
                }
            },
            _setDimension: function() {
                var t, e, i, n, s, o, a, r, l, c, h, d, u, p, f, g, m, v = H.getViewport(),
                    y = 0,
                    _ = H.wrap,
                    w = H.skin,
                    b = H.inner,
                    C = H.current,
                    x = C.width,
                    E = C.height,
                    T = C.minWidth,
                    $ = C.minHeight,
                    k = C.maxWidth,
                    A = C.maxHeight,
                    S = C.scrolling,
                    D = C.scrollOutside ? C.scrollbarWidth : 0,
                    I = C.margin,
                    O = j(I[1] + I[3]),
                    P = j(I[0] + I[2]);
                if (_.add(w).add(b).width("auto").height("auto").removeClass("fancybox-tmp"), s = O + (i = j(w.outerWidth(!0) - w.width())), o = P + (n = j(w.outerHeight(!0) - w.height())), a = M(x) ? (v.w - s) * j(x) / 100 : x, r = M(E) ? (v.h - o) * j(E) / 100 : E, "iframe" === C.type) {
                    if (g = C.content, C.autoHeight && 1 === g.data("ready")) try {
                        g[0].contentWindow.document.location && (b.width(a).height(9999), m = g.contents().find("body"), D && m.css("overflow-x", "hidden"), r = m.outerHeight(!0))
                    } catch (t) {}
                } else(C.autoWidth || C.autoHeight) && (b.addClass("fancybox-tmp"), C.autoWidth || b.width(a), C.autoHeight || b.height(r), C.autoWidth && (a = b.width()), C.autoHeight && (r = b.height()), b.removeClass("fancybox-tmp"));
                if (x = j(a), E = j(r), h = a / r, T = j(M(T) ? j(T, "w") - s : T), k = j(M(k) ? j(k, "w") - s : k), $ = j(M($) ? j($, "h") - o : $), l = k, c = A = j(M(A) ? j(A, "h") - o : A), C.fitToView && (k = Math.min(v.w - s, k), A = Math.min(v.h - o, A)), p = v.w - O, f = v.h - P, C.aspectRatio ? (k < x && (E = j((x = k) / h)), A < E && (x = j((E = A) * h)), x < T && (E = j((x = T) / h)), E < $ && (x = j((E = $) * h))) : (x = Math.max(T, Math.min(x, k)), C.autoHeight && "iframe" !== C.type && (b.width(x), E = b.height()), E = Math.max($, Math.min(E, A))), C.fitToView)
                    if (b.width(x).height(E), _.width(x + i), d = _.width(), u = _.height(), C.aspectRatio)
                        for (;
                            (p < d || f < u) && T < x && $ < E && !(19 < y++);) E = Math.max($, Math.min(A, E - 10)), (x = j(E * h)) < T && (E = j((x = T) / h)), k < x && (E = j((x = k) / h)), b.width(x).height(E), _.width(x + i), d = _.width(), u = _.height();
                    else x = Math.max(T, Math.min(x, x - (d - p))), E = Math.max($, Math.min(E, E - (u - f)));
                D && "auto" === S && E < r && x + i + D < p && (x += D), b.width(x).height(E), _.width(x + i), d = _.width(), u = _.height(), t = (p < d || f < u) && T < x && $ < E, e = C.aspectRatio ? x < l && E < c && x < a && E < r : (x < l || E < c) && (x < a || E < r), N.extend(C, {
                    dim: {
                        width: L(d),
                        height: L(u)
                    },
                    origWidth: a,
                    origHeight: r,
                    canShrink: t,
                    canExpand: e,
                    wPadding: i,
                    hPadding: n,
                    wrapSpace: u - w.outerHeight(!0),
                    skinSpace: w.height() - E
                }), !g && C.autoHeight && $ < E && E < A && !e && b.height("auto")
            },
            _getPosition: function(t) {
                var e = H.current,
                    i = H.getViewport(),
                    n = e.margin,
                    s = H.wrap.width() + n[1] + n[3],
                    o = H.wrap.height() + n[0] + n[2],
                    a = {
                        position: "absolute",
                        top: n[0],
                        left: n[3]
                    };
                return e.autoCenter && e.fixed && !t && o <= i.h && s <= i.w ? a.position = "fixed" : e.locked || (a.top += i.y, a.left += i.x), a.top = L(Math.max(a.top, a.top + (i.h - o) * e.topRatio)), a.left = L(Math.max(a.left, a.left + (i.w - s) * e.leftRatio)), a
            },
            _afterZoomIn: function() {
                var e = H.current;
                e && (H.isOpen = H.isOpened = !0, H.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0), H.update(), (e.closeClick || e.nextClick && 1 < H.group.length) && H.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    N(t.target).is("a") || N(t.target).parent().is("a") || (t.preventDefault(), H[e.closeClick ? "close" : "next"]())
                }), e.closeBtn && N(e.tpl.closeBtn).appendTo(H.skin).bind("click.fb", function(t) {
                    t.preventDefault(), H.close()
                }), e.arrows && 1 < H.group.length && ((e.loop || 0 < e.index) && N(e.tpl.prev).appendTo(H.outer).bind("click.fb", H.prev), (e.loop || e.index < H.group.length - 1) && N(e.tpl.next).appendTo(H.outer).bind("click.fb", H.next)), H.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? H.opts.autoPlay && !H.player.isActive && (H.opts.autoPlay = !1, H.play(!0)) : H.play(!1))
            },
            _afterZoomOut: function(t) {
                t = t || H.current, N(".fancybox-wrap").trigger("onReset").remove(), N.extend(H, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), H.trigger("afterClose", t)
            }
        }), H.transitions = {
            getOrigPosition: function() {
                var t = H.current,
                    e = t.element,
                    i = t.orig,
                    n = {},
                    s = 50,
                    o = 50,
                    a = t.hPadding,
                    r = t.wPadding,
                    l = H.getViewport();
                return !i && t.isDom && e.is(":visible") && ((i = e.find("img:first")).length || (i = e)), p(i) ? (n = i.offset(), i.is("img") && (s = i.outerWidth(), o = i.outerHeight())) : (n.top = l.y + (l.h - o) * t.topRatio, n.left = l.x + (l.w - s) * t.leftRatio), ("fixed" === H.wrap.css("position") || t.locked) && (n.top -= l.y, n.left -= l.x), n = {
                    top: L(n.top - a * t.topRatio),
                    left: L(n.left - r * t.leftRatio),
                    width: L(s + r),
                    height: L(o + a)
                }
            },
            step: function(t, e) {
                var i, n, s = e.prop,
                    o = H.current,
                    a = o.wrapSpace,
                    r = o.skinSpace;
                "width" !== s && "height" !== s || (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), H.isClosing && (i = 1 - i), n = t - ("width" === s ? o.wPadding : o.hPadding), H.skin[s](j("width" === s ? n : n - a * i)), H.inner[s](j("width" === s ? n : n - a * i - r * i)))
            },
            zoomIn: function() {
                var t = H.current,
                    e = t.pos,
                    i = t.openEffect,
                    n = "elastic" === i,
                    s = N.extend({
                        opacity: 1
                    }, e);
                delete s.position, n ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === i && (e.opacity = .1), H.wrap.css(e).animate(s, {
                    duration: "none" === i ? 0 : t.openSpeed,
                    easing: t.openEasing,
                    step: n ? this.step : null,
                    complete: H._afterZoomIn
                })
            },
            zoomOut: function() {
                var t = H.current,
                    e = t.closeEffect,
                    i = "elastic" === e,
                    n = {
                        opacity: .1
                    };
                i && (n = this.getOrigPosition(), t.closeOpacity && (n.opacity = .1)), H.wrap.animate(n, {
                    duration: "none" === e ? 0 : t.closeSpeed,
                    easing: t.closeEasing,
                    step: i ? this.step : null,
                    complete: H._afterZoomOut
                })
            },
            changeIn: function() {
                var t, e = H.current,
                    i = e.nextEffect,
                    n = e.pos,
                    s = {
                        opacity: 1
                    },
                    o = H.direction;
                n.opacity = .1, "elastic" === i && (t = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (n[t] = L(j(n[t]) - 200), s[t] = "+=200px") : (n[t] = L(j(n[t]) + 200), s[t] = "-=200px")), "none" === i ? H._afterZoomIn() : H.wrap.css(n).animate(s, {
                    duration: e.nextSpeed,
                    easing: e.nextEasing,
                    complete: H._afterZoomIn
                })
            },
            changeOut: function() {
                var t = H.previous,
                    e = t.prevEffect,
                    i = {
                        opacity: .1
                    },
                    n = H.direction;
                "elastic" === e && (i["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px"), t.wrap.animate(i, {
                    duration: "none" === e ? 0 : t.prevSpeed,
                    easing: t.prevEasing,
                    complete: function() {
                        N(this).trigger("onReset").remove()
                    }
                })
            }
        }, H.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !h,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: N("html"),
            create: function(t) {
                var e;
                t = N.extend({}, this.defaults, t), this.overlay && this.close(), e = H.coming ? H.coming.parent : t.parent, this.overlay = N('<div class="fancybox-overlay"></div>').appendTo(e && e.length ? e : "body"), this.fixed = !1, t.fixed && H.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(t) {
                var e = this;
                t = N.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (n.bind("resize.overlay", N.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function(t) {
                    if (N(t.target).hasClass("fancybox-overlay")) return H.isActive ? H.close() : e.close(), !1
                }), this.overlay.css(t.css).show()
            },
            close: function() {
                n.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (N(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), n.scrollTop(this.scrollV).scrollLeft(this.scrollH)), N(".fancybox-overlay").remove().hide(), N.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var t, e = "100%";
                this.overlay.width(e).height("100%"), a ? (t = Math.max(i.documentElement.offsetWidth, i.body.offsetWidth), c.width() > t && (e = c.width())) : c.width() > n.width() && (e = c.width()), this.overlay.width(e).height(c.height())
            },
            onReady: function(t, e) {
                var i = this.overlay;
                N(".fancybox-overlay").stop(!0, !0), i || this.create(t), t.locked && this.fixed && e.fixed && (e.locked = this.overlay.append(e.wrap), e.fixed = !1), !0 === t.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(t, e) {
                e.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && N("*").filter(function() {
                    return "fixed" === N(this).css("position") && !N(this).hasClass("fancybox-overlay") && !N(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = n.scrollTop(), this.scrollH = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(this.scrollV).scrollLeft(this.scrollH)), this.open(t)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(t) {
                this.overlay && !H.coming && this.overlay.fadeOut(t.speedOut, N.proxy(this.close, this))
            }
        }, H.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(t) {
                var e, i, n = H.current,
                    s = n.title,
                    o = t.type;
                if (N.isFunction(s) && (s = s.call(n.element, n)), f(s) && "" !== N.trim(s)) {
                    switch (e = N('<div class="fancybox-title fancybox-title-' + o + '-wrap">' + s + "</div>"), o) {
                        case "inside":
                            i = H.skin;
                            break;
                        case "outside":
                            i = H.wrap;
                            break;
                        case "over":
                            i = H.inner;
                            break;
                        default:
                            i = H.skin, e.appendTo("body"), a && e.width(e.width()), e.wrapInner('<span class="child"></span>'), H.current.margin[2] += Math.abs(j(e.css("margin-bottom")))
                    }
                    e["top" === t.position ? "prependTo" : "appendTo"](i)
                }
            }
        }, N.fn.fancybox = function(o) {
            var a, r = N(this),
                l = this.selector || "",
                t = function(t) {
                    var e, i, n = N(this).blur(),
                        s = a;
                    t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || n.is(".fancybox-wrap") || (e = o.groupAttr || "data-fancybox-group", (i = n.attr(e)) || (e = "rel", i = n.get(0)[e]), i && "" !== i && "nofollow" !== i && (s = (n = (n = l.length ? N(l) : r).filter("[" + e + '="' + i + '"]')).index(this)), o.index = s, !1 !== H.open(n, o) && t.preventDefault())
                };
            return a = (o = o || {}).index || 0, l && !1 !== o.live ? c.undelegate(l, "click.fb-start").delegate(l + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", t) : r.off("click.fb-start").on("click.fb-start", t), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, c.ready(function() {
            var t, e, i, n;
            N.scrollbarWidth === u && (N.scrollbarWidth = function() {
                var t = N('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    e = t.children(),
                    i = e.innerWidth() - e.height(99).innerWidth();
                return t.remove(), i
            }), N.support.fixedPosition === u && (N.support.fixedPosition = (i = N('<div style="position:fixed;top:20px;"></div>').appendTo("body"), n = 20 === i[0].offsetTop || 15 === i[0].offsetTop, i.remove(), n)), N.extend(H.defaults, {
                scrollbarWidth: N.scrollbarWidth(),
                fixed: N.support.fixedPosition,
                parent: N("body")
            }), t = N(s).width(), o.addClass("fancybox-lock-test"), e = N(s).width(), o.removeClass("fancybox-lock-test"), N("<style type='text/css'>.fancybox-margin{margin-right:" + (e - t) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery),
    function() {
        var s;
        (s = jQuery).fn.extend({
            eqHeight: function(n) {
                return this.each(function() {
                    var e, t, i;
                    if (0 === (e = s(this).find(n)).length && (e = s(this).children(n)), 0 !== e.length) return i = function() {
                        var t, e;
                        return t = s(".eqHeight_row"), e = 0, t.each(function() {
                            if (s(this).height() > e) return e = s(this).height()
                        }), t.height(e), s(".eqHeight_row").removeClass("eqHeight_row")
                    }, t = function() {
                        var t;
                        return e.height("auto"), t = e.first().position().top, e.each(function() {
                            return s(this).position().top !== t && (i(), t = s(this).position().top), s(this).addClass("eqHeight_row")
                        }), i()
                    }, s(window).on("load", t), s(window).on("resize", t)
                })
            }
        })
    }.call(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.CountUp = e()
    }(this, function(t, e, i) {
        return function(t, e, i, n, s, o) {
            var l = this;
            if (l.version = function() {
                    return "1.9.3"
                }, l.options = {
                    useEasing: !0,
                    useGrouping: !0,
                    separator: ",",
                    decimal: ".",
                    easingFn: function(t, e, i, n) {
                        return i * (1 - Math.pow(2, -10 * t / n)) * 1024 / 1023 + e
                    },
                    formattingFn: function(t) {
                        var e, i, n, s, o, a, r = t < 0;
                        if (t = Math.abs(t).toFixed(l.decimals), e = (t += "").split("."), i = e[0], n = 1 < e.length ? l.options.decimal + e[1] : "", l.options.useGrouping) {
                            for (s = "", o = 0, a = i.length; o < a; ++o) 0 !== o && o % 3 == 0 && (s = l.options.separator + s), s = i[a - o - 1] + s;
                            i = s
                        }
                        return l.options.numerals.length && (i = i.replace(/[0-9]/g, function(t) {
                            return l.options.numerals[+t]
                        }), n = n.replace(/[0-9]/g, function(t) {
                            return l.options.numerals[+t]
                        })), (r ? "-" : "") + l.options.prefix + i + n + l.options.suffix
                    },
                    prefix: "",
                    suffix: "",
                    numerals: []
                }, o && "object" == typeof o)
                for (var a in l.options) o.hasOwnProperty(a) && null !== o[a] && (l.options[a] = o[a]);
            "" === l.options.separator ? l.options.useGrouping = !1 : l.options.separator = "" + l.options.separator;
            for (var r = 0, c = ["webkit", "moz", "ms", "o"], h = 0; h < c.length && !window.requestAnimationFrame; ++h) window.requestAnimationFrame = window[c[h] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c[h] + "CancelAnimationFrame"] || window[c[h] + "CancelRequestAnimationFrame"];

            function d(t) {
                return "number" == typeof t && !isNaN(t)
            }
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - r)),
                    s = window.setTimeout(function() {
                        t(i + n)
                    }, n);
                return r = i + n, s
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }), l.initialize = function() {
                return !!l.initialized || (l.error = "", l.d = "string" == typeof t ? document.getElementById(t) : t, l.d ? (l.startVal = Number(e), l.endVal = Number(i), d(l.startVal) && d(l.endVal) ? (l.decimals = Math.max(0, n || 0), l.dec = Math.pow(10, l.decimals), l.duration = 1e3 * Number(s) || 2e3, l.countDown = l.startVal > l.endVal, l.frameVal = l.startVal, l.initialized = !0) : (l.error = "[CountUp] startVal (" + e + ") or endVal (" + i + ") is not a number", !1)) : !(l.error = "[CountUp] target is null or undefined"))
            }, l.printValue = function(t) {
                var e = l.options.formattingFn(t);
                "INPUT" === l.d.tagName ? this.d.value = e : "text" === l.d.tagName || "tspan" === l.d.tagName ? this.d.textContent = e : this.d.innerHTML = e
            }, l.count = function(t) {
                l.startTime || (l.startTime = t);
                var e = (l.timestamp = t) - l.startTime;
                l.remaining = l.duration - e, l.options.useEasing ? l.countDown ? l.frameVal = l.startVal - l.options.easingFn(e, 0, l.startVal - l.endVal, l.duration) : l.frameVal = l.options.easingFn(e, l.startVal, l.endVal - l.startVal, l.duration) : l.countDown ? l.frameVal = l.startVal - (l.startVal - l.endVal) * (e / l.duration) : l.frameVal = l.startVal + (l.endVal - l.startVal) * (e / l.duration), l.countDown ? l.frameVal = l.frameVal < l.endVal ? l.endVal : l.frameVal : l.frameVal = l.frameVal > l.endVal ? l.endVal : l.frameVal, l.frameVal = Math.round(l.frameVal * l.dec) / l.dec, l.printValue(l.frameVal), e < l.duration ? l.rAF = requestAnimationFrame(l.count) : l.callback && l.callback()
            }, l.start = function(t) {
                l.initialize() && (l.callback = t, l.rAF = requestAnimationFrame(l.count))
            }, l.pauseResume = function() {
                l.paused ? (l.paused = !1, delete l.startTime, l.duration = l.remaining, l.startVal = l.frameVal, requestAnimationFrame(l.count)) : (l.paused = !0, cancelAnimationFrame(l.rAF))
            }, l.reset = function() {
                l.paused = !1, delete l.startTime, l.initialized = !1, l.initialize() && (cancelAnimationFrame(l.rAF), l.printValue(l.startVal))
            }, l.update = function(t) {
                l.initialize() && (d(t = Number(t)) ? (l.error = "", t !== l.frameVal && (cancelAnimationFrame(l.rAF), l.paused = !1, delete l.startTime, l.startVal = l.frameVal, l.endVal = t, l.countDown = l.startVal > l.endVal, l.rAF = requestAnimationFrame(l.count))) : l.error = "[CountUp] update() - new endVal is not a number: " + t)
            }, l.initialize() && l.printValue(l.startVal)
        }
    }),
    function() {
        "use strict";
        var e = 0,
            o = {};

        function i(t) {
            if (!t) throw new Error("No options passed to Waypoint constructor");
            if (!t.element) throw new Error("No element option passed to Waypoint constructor");
            if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e, this.options = i.Adapter.extend({}, i.defaults, t), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = t.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), o[this.key] = this, e += 1
        }
        i.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }, i.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, i.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete o[this.key]
        }, i.prototype.disable = function() {
            return this.enabled = !1, this
        }, i.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, i.prototype.next = function() {
            return this.group.next(this)
        }, i.prototype.previous = function() {
            return this.group.previous(this)
        }, i.invokeAll = function(t) {
            var e = [];
            for (var i in o) e.push(o[i]);
            for (var n = 0, s = e.length; n < s; n++) e[n][t]()
        }, i.destroyAll = function() {
            i.invokeAll("destroy")
        }, i.disableAll = function() {
            i.invokeAll("disable")
        }, i.enableAll = function() {
            i.invokeAll("enable")
        }, i.refreshAll = function() {
            i.Context.refreshAll()
        }, i.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, i.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, i.adapters = [], i.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, i.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = i
    }(),
    function() {
        "use strict";

        function e(t) {
            window.setTimeout(t, 1e3 / 60)
        }
        var i = 0,
            n = {},
            m = window.Waypoint,
            t = window.onload;

        function s(t) {
            this.element = t, this.Adapter = m.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        s.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, s.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical);
            t && e && (this.adapter.off(".waypoints"), delete n[this.key])
        }, s.prototype.createThrottledResizeHandler = function() {
            var t = this;

            function e() {
                t.handleResize(), t.didResize = !1
            }
            this.adapter.on("resize.waypoints", function() {
                t.didResize || (t.didResize = !0, m.requestAnimationFrame(e))
            })
        }, s.prototype.createThrottledScrollHandler = function() {
            var t = this;

            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            this.adapter.on("scroll.waypoints", function() {
                t.didScroll && !m.isTouch || (t.didScroll = !0, m.requestAnimationFrame(e))
            })
        }, s.prototype.handleResize = function() {
            m.Context.refreshAll()
        }, s.prototype.handleScroll = function() {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in e) {
                var n = e[i],
                    s = n.newScroll > n.oldScroll ? n.forward : n.backward;
                for (var o in this.waypoints[i]) {
                    var a = this.waypoints[i][o],
                        r = n.oldScroll < a.triggerPoint,
                        l = n.newScroll >= a.triggerPoint;
                    (r && l || !r && !l) && (a.queueTrigger(s), t[a.group.id] = a.group)
                }
            }
            for (var c in t) t[c].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, s.prototype.innerHeight = function() {
            return this.element == this.element.window ? m.viewportHeight() : this.adapter.innerHeight()
        }, s.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, s.prototype.innerWidth = function() {
            return this.element == this.element.window ? m.viewportWidth() : this.adapter.innerWidth()
        }, s.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var n = 0, s = t.length; n < s; n++) t[n].destroy()
        }, s.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                n = {};
            for (var s in this.handleScroll(), t = {
                    horizontal: {
                        contextOffset: e ? 0 : i.left,
                        contextScroll: e ? 0 : this.oldScroll.x,
                        contextDimension: this.innerWidth(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: e ? 0 : i.top,
                        contextScroll: e ? 0 : this.oldScroll.y,
                        contextDimension: this.innerHeight(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }) {
                var o = t[s];
                for (var a in this.waypoints[s]) {
                    var r, l, c, h, d = this.waypoints[s][a],
                        u = d.options.offset,
                        p = d.triggerPoint,
                        f = 0,
                        g = null == p;
                    d.element !== d.element.window && (f = d.adapter.offset()[o.offsetProp]), "function" == typeof u ? u = u.apply(d) : "string" == typeof u && (u = parseFloat(u), -1 < d.options.offset.indexOf("%") && (u = Math.ceil(o.contextDimension * u / 100))), r = o.contextScroll - o.contextOffset, d.triggerPoint = f + r - u, l = p < o.oldScroll, c = d.triggerPoint >= o.oldScroll, h = !l && !c, !g && (l && c) ? (d.queueTrigger(o.backward), n[d.group.id] = d.group) : !g && h ? (d.queueTrigger(o.forward), n[d.group.id] = d.group) : g && o.oldScroll >= d.triggerPoint && (d.queueTrigger(o.forward), n[d.group.id] = d.group)
                }
            }
            return m.requestAnimationFrame(function() {
                for (var t in n) n[t].flushTriggers()
            }), this
        }, s.findOrCreateByElement = function(t) {
            return s.findByElement(t) || new s(t)
        }, s.refreshAll = function() {
            for (var t in n) n[t].refresh()
        }, s.findByElement = function(t) {
            return n[t.waypointContextKey]
        }, window.onload = function() {
            t && t(), s.refreshAll()
        }, m.requestAnimationFrame = function(t) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
        }, m.Context = s
    }(),
    function() {
        "use strict";

        function a(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function r(t, e) {
            return e.triggerPoint - t.triggerPoint
        }
        var e = {
                vertical: {},
                horizontal: {}
            },
            i = window.Waypoint;

        function n(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), e[this.axis][this.name] = this
        }
        n.prototype.add = function(t) {
            this.waypoints.push(t)
        }, n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, n.prototype.flushTriggers = function() {
            for (var t in this.triggerQueues) {
                var e = this.triggerQueues[t],
                    i = "up" === t || "left" === t;
                e.sort(i ? r : a);
                for (var n = 0, s = e.length; n < s; n += 1) {
                    var o = e[n];
                    (o.options.continuous || n === e.length - 1) && o.trigger([t])
                }
            }
            this.clearTriggerQueues()
        }, n.prototype.next = function(t) {
            this.waypoints.sort(a);
            var e = i.Adapter.inArray(t, this.waypoints);
            return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
        }, n.prototype.previous = function(t) {
            this.waypoints.sort(a);
            var e = i.Adapter.inArray(t, this.waypoints);
            return e ? this.waypoints[e - 1] : null
        }, n.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }, n.prototype.remove = function(t) {
            var e = i.Adapter.inArray(t, this.waypoints); - 1 < e && this.waypoints.splice(e, 1)
        }, n.prototype.first = function() {
            return this.waypoints[0]
        }, n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function(t) {
            return e[t.axis][t.name] || new n(t)
        }, i.Group = n
    }(),
    function() {
        "use strict";
        var i = window.jQuery,
            t = window.Waypoint;

        function n(t) {
            this.$element = i(t)
        }
        i.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, e) {
            n.prototype[e] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[e].apply(this.$element, t)
            }
        }), i.each(["extend", "inArray", "isEmptyObject"], function(t, e) {
            n[e] = i[e]
        }), t.adapters.push({
            name: "jquery",
            Adapter: n
        }), t.Adapter = n
    }(),
    function() {
        "use strict";
        var s = window.Waypoint;

        function t(n) {
            return function() {
                var e = [],
                    i = arguments[0];
                return n.isFunction(arguments[0]) && ((i = n.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
                    var t = n.extend({}, i, {
                        element: this
                    });
                    "string" == typeof t.context && (t.context = n(this).closest(t.context)[0]), e.push(new s(t))
                }), e
            }
        }
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
    }(),
    function(f, g, m) {
        "use strict";
        var v = {
                filterId: 0
            },
            y = m("body"),
            e = function(t, e) {
                var n, s, o, i, a = m.extend({
                        intensity: 5,
                        forceSVGUrl: !1,
                        animationOptions: {
                            duration: 1e3,
                            easing: "linear"
                        }
                    }, e),
                    r = " -webkit- -moz- -o- -ms- ".split(" "),
                    l = {},
                    c = ((i = g.createElement("div")).style.cssText = r.join("filter:blur(2px); "), !!i.style.length && (void 0 === g.documentMode || 9 < g.documentMode)),
                    h = function() {
                        var t = !1;
                        try {
                            t = void 0 !== typeof SVGFEColorMatrixElement && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
                        } catch (t) {}
                        return t
                    }(),
                    d = !1,
                    u = function(t) {
                        if (l[t] || "" === l[t]) return l[t] + t;
                        var e = g.createElement("div"),
                            i = ["", "Moz", "Webkit", "O", "ms", "Khtml"];
                        for (var n in i)
                            if (void 0 !== e.style[i[n] + t]) return l[t] = i[n], i[n] + t;
                        return t.toLowerCase()
                    }("Filter"),
                    p = function(t) {
                        return g.createElementNS("http://www.w3.org/2000/svg", t)
                    };
                return this.$elm = t instanceof m ? t : m(t), this.init = function() {
                    var t, e;
                    return h && (t = p("svg"), e = p("filter"), n = p("feGaussianBlur"), t.setAttribute("style", "position:absolute"), t.setAttribute("width", "0"), t.setAttribute("height", "0"), e.setAttribute("id", "blur-effect-id-" + v.filterId), e.appendChild(n), t.appendChild(e), y.append(t)), s = v.filterId, v.filterId++, this
                }, this.blur = function() {
                    var t, e = f.location,
                        i = a.forceSVGUrl ? e.protocol + "//" + e.host + e.pathname + e.search : "";
                    return c ? t = "blur(" + a.intensity + "px)" : h ? (n.setAttribute("stdDeviation", a.intensity), t = "url(" + i + "#blur-effect-id-" + s + ")") : t = "progid:DXImageTransform.Microsoft.Blur(pixelradius=" + a.intensity + ")", this.$elm[0].style[u] = t, d = !0, this
                }, this.animate = function(t, e) {
                    if ("number" != typeof t) throw typeof t + " is not a valid number to animate the blur";
                    if (t < 0) throw "I can animate only positive numbers";
                    var i = new m.Deferred;
                    return o && o.stop(!0, !0), o = new m.Animation(a, {
                        intensity: t
                    }, m.extend(a.animationOptions, e)).progress(m.proxy(this.blur, this)).done(i.resolve), i.promise()
                }, this.unblur = function() {
                    return this.$elm.css(u, "none"), d = !1, this
                }, this.toggleblur = function() {
                    return d ? this.unblur() : this.blur(), this
                }, this.destroy = function() {
                    for (var t in h && m("filter#blur-effect-id-" + s).parent().remove(), this.unblur(), this) delete this[t];
                    return this
                }, this.init()
            };
        m.fn.Vague = function(t) {
            return new e(this, t)
        }
    }(window, document, jQuery),
    function(t, e) {
        "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : t.Circles = e()
    }(this, function() {
        "use strict";
        var h = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                setTimeout(t, 1e3 / 60)
            },
            e = function(t) {
                var e = t.id;
                if (this._el = document.getElementById(e), null !== this._el) {
                    this._radius = t.radius || 10, this._duration = void 0 === t.duration ? 500 : t.duration, this._value = 0, this._maxValue = t.maxValue || 100, this._text = void 0 === t.text ? function(t) {
                        return this.htmlifyNumber(t)
                    } : t.text, this._strokeWidth = t.width || 10, this._colors = t.colors || ["#EEE", "#F00"], this._svg = null, this._movingPath = null, this._wrapContainer = null, this._textContainer = null, this._wrpClass = t.wrpClass || "circles-wrp", this._textClass = t.textClass || "circles-text", this._valClass = t.valueStrokeClass || "circles-valueStroke", this._maxValClass = t.maxValueStrokeClass || "circles-maxValueStroke", this._styleWrapper = !1 !== t.styleWrapper, this._styleText = !1 !== t.styleText;
                    var i = Math.PI / 180 * 270;
                    this._start = -Math.PI / 180 * 90, this._startPrecise = this._precise(this._start), this._circ = i - this._start, this._generate().update(t.value || 0)
                }
            };
        return e.prototype = {
            VERSION: "0.0.6",
            _generate: function() {
                return this._svgSize = 2 * this._radius, this._radiusAdjusted = this._radius - this._strokeWidth / 2, this._generateSvg()._generateText()._generateWrapper(), this._el.innerHTML = "", this._el.appendChild(this._wrapContainer), this
            },
            _setPercentage: function(t) {
                this._movingPath.setAttribute("d", this._calculatePath(t, !0)), this._textContainer.innerHTML = this._getText(this.getValueFromPercent(t))
            },
            _generateWrapper: function() {
                return this._wrapContainer = document.createElement("div"), this._wrapContainer.className = this._wrpClass, this._styleWrapper && (this._wrapContainer.style.position = "relative", this._wrapContainer.style.display = "inline-block"), this._wrapContainer.appendChild(this._svg), this._wrapContainer.appendChild(this._textContainer), this
            },
            _generateText: function() {
                if (this._textContainer = document.createElement("div"), this._textContainer.className = this._textClass, this._styleText) {
                    var t = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        textAlign: "center",
                        width: "100%",
                        fontSize: .7 * this._radius + "px",
                        height: this._svgSize + "px",
                        lineHeight: this._svgSize + "px"
                    };
                    for (var e in t) this._textContainer.style[e] = t[e]
                }
                return this._textContainer.innerHTML = this._getText(0), this
            },
            _getText: function(t) {
                return this._text ? (void 0 === t && (t = this._value), t = parseFloat(t.toFixed(2)), "function" == typeof this._text ? this._text.call(this, t) : this._text) : ""
            },
            _generateSvg: function() {
                return this._svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._svg.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this._svg.setAttribute("width", this._svgSize), this._svg.setAttribute("height", this._svgSize), this._generatePath(100, !1, this._colors[0], this._maxValClass)._generatePath(1, !0, this._colors[1], this._valClass), this._movingPath = this._svg.getElementsByTagName("path")[1], this
            },
            _generatePath: function(t, e, i, n) {
                var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return s.setAttribute("fill", "transparent"), s.setAttribute("stroke", i), s.setAttribute("stroke-width", this._strokeWidth), s.setAttribute("d", this._calculatePath(t, e)), s.setAttribute("class", n), this._svg.appendChild(s), this
            },
            _calculatePath: function(t, e) {
                var i = this._start + t / 100 * this._circ,
                    n = this._precise(i);
                return this._arc(n, e)
            },
            _arc: function(t, e) {
                var i = t - .001,
                    n = t - this._startPrecise < Math.PI ? 0 : 1;
                return ["M", this._radius + this._radiusAdjusted * Math.cos(this._startPrecise), this._radius + this._radiusAdjusted * Math.sin(this._startPrecise), "A", this._radiusAdjusted, this._radiusAdjusted, 0, n, 1, this._radius + this._radiusAdjusted * Math.cos(i), this._radius + this._radiusAdjusted * Math.sin(i), e ? "" : "Z"].join(" ")
            },
            _precise: function(t) {
                return Math.round(1e3 * t) / 1e3
            },
            htmlifyNumber: function(t, e, i) {
                e = e || "circles-integer", i = i || "circles-decimals";
                var n = (t + "").split("."),
                    s = '<span class="' + e + '">' + n[0] + "</span>";
                return 1 < n.length && (s += '.<span class="' + i + '">' + n[1].substring(0, 2) + "</span>"), s
            },
            updateRadius: function(t) {
                return this._radius = t, this._generate().update(!0)
            },
            updateWidth: function(t) {
                return this._strokeWidth = t, this._generate().update(!0)
            },
            updateColors: function(t) {
                this._colors = t;
                var e = this._svg.getElementsByTagName("path");
                return e[0].setAttribute("stroke", t[0]), e[1].setAttribute("stroke", t[1]), this
            },
            getPercent: function() {
                return 100 * this._value / this._maxValue
            },
            getValueFromPercent: function(t) {
                return this._maxValue * t / 100
            },
            getValue: function() {
                return this._value
            },
            getMaxValue: function() {
                return this._maxValue
            },
            update: function(t, e) {
                if (!0 === t) return this._setPercentage(this.getPercent()), this;
                if (this._value == t || isNaN(t)) return this;
                void 0 === e && (e = this._duration);
                var s, o, i, a, r = this,
                    l = r.getPercent(),
                    c = 1;
                return this._value = Math.min(this._maxValue, Math.max(0, t)), e ? (s = r.getPercent(), o = l < s, c += s % 1, i = Math.floor(Math.abs(s - l) / c), a = e / i, function t(e) {
                    if (o ? l += c : l -= c, o && s <= l || !o && l <= s) h(function() {
                        r._setPercentage(s)
                    });
                    else {
                        h(function() {
                            r._setPercentage(l)
                        });
                        var i = Date.now(),
                            n = i - e;
                        a <= n ? t(i) : setTimeout(function() {
                            t(Date.now())
                        }, a - n)
                    }
                }(Date.now())) : this._setPercentage(this.getPercent()), this
            }
        }, e.create = function(t) {
            return new e(t)
        }, e
    }), $(document).ready(function() {
        var i = $(".header-single-banner, .header-large-banner, .header-primary-banner"),
            n = $(".header-large-banner"),
            s = $(".header-primary-banner"),
            o = $(window).height(),
            a = $("header"),
            t = $(".ask-group"),
            e = $("#head-search");
        t.addClass("in"), e.addClass("in"), window.headerVars = {
            MOBILEWIDTH: 767,
            MAXHEIGHT: 1200,
            MINHEIGHT: 500,
            setHeaderImageHeight: function() {
                if (0 != i.length) {
                    var t = o;
                    t = Math.max(Math.min(t, headerVars.MAXHEIGHT), headerVars.MINHEIGHT);
                    var e = i.offset().top;
                    i.css({
                        height: t - a.height()
                    }), headerImageHeight = i.height(), n.css({
                        height: t - e
                    }), headerImageHeight = n.height(), s.css({
                        height: 450
                    })
                }
            }
        }, headerVars.setHeaderImageHeight();
        var r = i.css("background-image");
        $(".ask-group").attr("style", "background-size: cover; background-repeat: no-repeat; background-image:" + r)
    }), $(document).ready(function() {
        $("#settings-btn").removeAttr("role aria-selected")
    }), $(document).ready(function() {
        var i = 220,
            e = 80,
            n = 10,
            s = $("header"),
            o = $(".header-single-banner"),
            t = $(".explore-invite"),
            a = $(".global-header"),
            r = $(".alert-banner"),
            l = $(".ask-group"),
            c = $("#askGroup"),
            h = $("#head-search"),
            d = $("#main-content"),
            u = a.innerHeight(),
            p = ($(window).height(), $(window).width()),
            f = $(document).scrollTop();
        _();

        function g() {
            window.setTimeout(function() {
                if (!h.hasClass("active") && a.hasClass("fixed") && !(i <= f)) {
                    var t = h.get(0).getBoundingClientRect(),
                        e = t.top + t.height + n;
                    c.css("top", e), c.trigger("cagov.askgroup.update")
                }
            }, 0)
        }
        g(), h.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            g()
        });
        var m, v = $('<span class="return-top"/>').appendTo(".main-content");

        function y() {
            i <= f ? v.addClass("is-visible") : v.removeClass("is-visible")
        }

        function _() {
            return t.length && c.length ? h.height() + c.height() : 0
        }

        function w() {
            s.hasClass("fixed") && p > headerVars.MOBILEWIDTH ? b() : C()
        }

        function b() {
            if (s.addClass("fixed"), headerVars.setHeaderImageHeight(), o.length) {
                var t = o.height();
                t = Math.max(Math.min(t, headerVars.MAXHEIGHT), headerVars.MINHEIGHT), o.css({
                    height: t + u + 10
                })
            } else d.css({
                "padding-top": Math.max(u, 119)
            });
            0 < $(".ask-group").length && (d.addClass("print-p-t"), d.css({
                "padding-top": 0
            }), $(".header-slideshow-banner, .header-primary-banner").css({
                "margin-top": 119
            }))
        }

        function C() {
            s.removeClass("fixed"), o.css({
                top: "",
                "margin-bottom": ""
            }), d.css({
                "padding-top": ""
            }), c.css("top", "")
        }! function() {
            if (!s.hasClass("fixed")) return;
            $(window).on("resize", function() {
                $(window).height(), p = window.innerWidth, u = a.innerHeight(), _(), p > headerVars.MOBILEWIDTH ? (b(), g()) : C(), g()
            })
        }(),
        function() {
            var t;
            t = s.hasClass("fixed") ? function() {
                p < headerVars.MOBILEWIDTH || (function() {
                    e <= f ? (l.addClass("fixed-hide"), h.addClass("fixed-hide")) : (l.removeClass("fixed-hide"), h.removeClass("fixed-hide"));
                    i <= f ? s.addClass("compact") : s.hasClass("compact") && s.removeClass("compact")
                }(), function() {
                    if (h.hasClass("active")) l.addClass("fixed-hide"), s.addClass("compact, .fixed")
                }())
            } : function() {
                y()
            };
            $(window).on("scroll", function() {
                f = $(document).scrollTop(), t(), y()
            }), t()
        }(), (m = jQuery).fn.customScrollTop = function() {
            return this.each(function() {
                $el = m(this), $el.on("click", function() {
                    m("html,body").animate({
                        scrollTop: 0
                    }, 400, function() {
                        m(window).scroll()
                    })
                })
            })
        }, $('[href="#skip-to-content"]').customScrollTop(), v.customScrollTop(), s.hasClass("fixed") && $("#nav-item-search").customScrollTop(), w(), r.on("closed.bs.alert", function() {
            u = a.innerHeight(), w(), g()
        })
    });
var $special, resizeTimeout, $event = $.event;

function addGAToDownloadLinks() {
    if (document.getElementsByTagName)
        for (var t = document.getElementsByTagName("a"), e = 0; e < t.length; e++) try {
            if ("mailto:" == t[e].protocol) startListening(t[e], "mousedown", trackMailto);
            else if ("tel:" == t[e].protocol) startListening(t[e], "mousedown", trackTelto);
            else if (t[e].hostname == location.host) {
                (t[e].pathname + t[e].search).match(/\.(?:doc|docx|eps|jpg|png|svg|xls|xlsx|ppt|pptx|pdf|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3)($|\&|\?)/) && startListening(t[e], "mousedown", trackExternalLinks)
            } else t[e].href.match(/^javascript:/) || startListening(t[e], "mousedown", trackExternalLinks)
        } catch (t) {
            continue
        }
}

function startListening(t, e, i) {
    t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i)
}

function trackMailto(t) {
    var e = "/mailto/" + (t.srcElement ? t.srcElement.href : this.href).substring(7);
    _gaq.push(["_trackPageview", e]), _gaq.push(["b._trackPageview", e])
}

function trackTelto(t) {
    var e = "/telto/" + (t.srcElement ? t.srcElement.href : this.href).substring(4);
    _gaq.push(["_trackPageview", e]), _gaq.push(["b._trackPageview", e])
}

function trackExternalLinks(t) {
    for (var e = t.srcElement ? t.srcElement : this;
        "A" != e.tagName;) e = e.parentNode;
    var i = "/" == e.pathname.charAt(0) ? e.pathname : "/" + e.pathname;
    e.search && -1 == e.pathname.indexOf(e.search) && (i += e.search), e.hostname != location.host && (i = "/external/" + e.hostname + i), _gaq.push(["_trackPageview", i]), _gaq.push(["b._trackPageview", i])
}

function keyCodes() {
    this.tab = 9, this.enter = 13, this.esc = 27, this.space = 32, this.pageup = 33, this.pagedown = 34, this.end = 35, this.home = 36, this.left = 37, this.up = 38, this.right = 39, this.down = 40
}

function tabpanel(t, e) {
    this.panel_id = t, this.accordian = e, this.$panel = $("#" + t), this.keys = new keyCodes, this.$tabs = this.$panel.find(".tab"), this.$panels = this.$panel.children(".panel"), this.bindHandlers(), this.init()
}

function initContent() {
    var e = $(this);
    $(window).on("load", function() {
        e.owlCarousel({
            items: 1,
            autoHeight: !0,
            loop: !0,
            nav: !0,
            navText: ['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>'],
            dots: !0,
            onResized: function() {
                window.setTimeout(function() {
                    $(window).trigger("resize")
                }, 0)
            },
            onDragged: function() {
                window.setTimeout(function() {
                    $(window).trigger("resize")
                }, 0)
            },
            onTranslated: function() {
                window.setTimeout(function() {
                    $(window).trigger("resize")
                }, 0)
            }
        }), e.on("changed.owl.carousel", function(t) {
            setTimeout(function() {
                e.find(".owl-item.active .item video").each(function() {
                    $(this).get(0).play()
                })
            }, 10)
        })
    })
}

function breadcrumbs() {
    if ($(".breadcrumb.dynamic")[0]) {
        var t, e = location.href; - 1 != (t = e.indexOf("#")) && (e = e.substr(0, t)), -1 != (t = e.indexOf("?")) && (e = e.substr(0, t));
        var i = (e = (e = unescape(e)).replace(/<.*/g, "")).split("/"),
            n = '<li><a href="/">Home</a></li>',
            s = "/";
        if (("" == i[i.length - 1] || i[i.length - 1].match(/^index\.|^default\./i)) && i.length--, 3 < i.length) {
            for (counter = 3; counter < i.length - 1; counter++) n += '<li><a href="' + (s += i[counter] + "/") + '">' + i[counter].replace(/(_|-)/g, " ") + "</a></li>";
            n += '<li class="active">' + i[i.length - 1].replace(/(_|-)/g, " ").replace(/\.\w{3,5}$/, "") + "</li>"
        }
        $(".breadcrumb.dynamic").html(n)
    }
}

function initServiceGroup() {
    var e = $(this),
        i = e.find(".service-tile");
    e.find(".service-tile-empty").on("click", function(t) {
        t.stopPropagation();
        var e = $(this).attr("data-url");
        window.location = e
    }), $(window).on("resize", function() {
        var t = $(window).width();
        t !== n && (__$currentRow && shrinkAndRemove(__$currentRow), initTiles(e, i), n = t)
    });
    var n = $(window).width();
    e.eqHeight(".service-tile"), e.on("more.new", function() {
        e.eqHeight(".service-tile"), $(window).trigger("resize"), i = e.find(".service-tile"), initTiles(e, i)
    }), i.find(".icon-fallback").each(setIconFallback), initTiles(e, i), setUpEvents(e)
}
$special = $event.special.debouncedresize = {
        setup: function() {
            $(this).on("resize", $special.handler)
        },
        teardown: function() {
            $(this).off("resize", $special.handler)
        },
        handler: function(t, e) {
            var i = this,
                n = arguments,
                s = function() {
                    t.type = "debouncedresize", $event.dispatch.apply(i, n)
                };
            resizeTimeout && clearTimeout(resizeTimeout), e ? s() : resizeTimeout = setTimeout(s, $special.threshold)
        },
        threshold: 250
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1),
            i = this,
            n = function() {},
            s = function() {
                return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
            };
        return this.prototype && (n.prototype = this.prototype), s.prototype = new n, s
    }), $(document).ready(function() {
        "table" == $(".top-level-nav").css("display") && $("body").addClass("no-flex");
        var t = $("#navigation.main-navigation"),
            e = t.find(".nav-item"),
            i = e.has(".sub-nav"),
            n = (t.find(".sub-nav"), t.hasClass("megadropdown")),
            s = t.hasClass("dropdown"),
            o = t.hasClass("singleLevel");
        mobileWidth = 767, setActiveLinkByFolder = t.hasClass("auto-highlight");
        var a = Modernizr.touch,
            r = "ontouchstart" in window || 0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints,
            l = !1;
        $(window).on("mousemove", function() {
            l && (touchmode = !1)
        });
        var c = "",
            h = location.href.split("/");

        function d() {
            return "none" !== $(".global-header .mobile-controls").css("display")
        }
        "undefined" != typeof defaultActiveLink && (c = new RegExp("^" + defaultActiveLink + "$", "i")), e.each(function() {
            var t = $(this),
                e = t.find(".first-level-link");
            if (c) e.text().match(c) && t.addClass("active");
            else if (setActiveLinkByFolder && e.attr("href")) {
                var i = e[0].href.split("/");
                4 < i.length && h[3] == i[3] && t.addClass("active")
            }
        }), i.each(function() {
            $(this).find(".second-level-nav > li").length <= 2 && $(this).find(".sub-nav").addClass("with-few-items")
        }), !n && !s || !a && r ? (n || s) && r && i.each(function() {
            var t = $(this),
                e = t.find(".first-level-link"),
                i = (e[0], t.find(".sub-nav"));
            i.find("a");
            e.data("link", e.attr("href")), t.on("click.ca.propagation", function(t) {
                t.stopPropagation()
            }), e.on("click.ca.navclose", function(t) {
                i.is(":visible") || d() || (t.preventDefault(), t.stopPropagation())
            })
        }) : a && i.each(function() {
            var t = $(this),
                e = t.find(".first-level-link"),
                i = (e[0], t.find(".sub-nav"));
            i.find("a");
            e.data("link", e.attr("href")).removeAttr, t.on("touchstart.ca.propagation", function(t) {
                t.stopPropagation()
            }), t.on("touchstart.ca.navclose", function(t) {
                l = !0, i.is(":visible") || d() || (t.preventDefault(), t.stopPropagation())
            }, !1)
        }), o || i.each(function() {
            $(this).find(".first-level-link").addClass("has-sub");
            var t = $('<button class="mobile-control toggle-sub-nav closed"><div class="ca-gov-icon-arrow-next rotate" aria-hidden="true"></div><span class="sr-only">Sub Menu Toggle</span></button>');
            $(this).find(".sub-nav").before(t)
        }), $("#navigation").addClass("mobile-closed"), $(".sub-nav").addClass("subnav-closed"), $(".toggle-menu").on("click", function() {
            $("#navigation").hasClass("mobile-closed") ? ($(this).addClass("open"), $(this).attr("aria-expanded", "true"), $("#navigation").slideDownTransition()) : ($(this).removeClass("open"), $(this).attr("aria-expanded", "false"), $("#navigation").slideUpTransition()), $(".search-container").removeClass("active")
        }), r ? $(".toggle-sub-nav").on("touchstart", function() {
            var t = $(this).parent().find(".sub-nav");
            $(this).hasClass("closed") ? ($(this).removeClass("closed").addClass("open"), $(this).find(".rotate").addClass("down"), $(t).slideDownTransitionSub()) : ($(this).removeClass("open").addClass("closed"), $(this).find(".rotate").removeClass("down"), $(t).slideUpTransitionSub())
        }) : $(".toggle-sub-nav").on("click", function() {
            var t = $(this).parent().find(".sub-nav");
            $(this).hasClass("closed") ? ($(this).removeClass("closed").addClass("open"), $(this).find(".rotate").addClass("down"), $(t).slideDownTransitionSub()) : ($(this).removeClass("open").addClass("closed"), $(this).find(".rotate").removeClass("down"), $(t).slideUpTransitionSub())
        }), $(".rotate1").on("click", function() {
            $(this).toggleClass("down")
        }), $(".toggle-search").on("click", function() {
            $(".search-container").toggleClass("active"), $("#navigation").hasClass("active") || $("#navigation").addClass("mobile-closed")
        });
        var u = "focus",
            p = "clickedFocus";
        $(".top-level-nav > li > a").on("mouseenter", function() {
            $(this).closest("ul").find("." + u).removeClass(u)
        }).on("mouseleave", function() {
            $("." + p).removeClass(p)
        }), $(".top-level-nav > li > a").on("focus", function(t) {
            $(this).closest("ul").find("." + u).removeClass(u), $(this).parent().find(".toggle-sub-nav").hasClass("open") || $(this).parent().addClass(u)
        }).on("mousedown", function() {
            $(this).parent().find(".toggle-sub-nav").hasClass("open") || $(this).parent().addClass(p)
        }), $(".top-level-nav a").last().on("keydown", function(t) {
            9 == t.keyCode && $(".top-level-nav ." + u).removeClass(u)
        }), $(document).on("click", function() {
            $(".top-level-nav ." + u).removeClass(u)
        }), $(".top-level-nav").on("click", function(t) {
            t.stopPropagation()
        })
    }),
    function(i) {
        i.fn.slideUpTransition = function() {
            return this.each(function() {
                var t = i(this);
                t.css("max-height", "0"), t.addClass("mobile-closed")
            })
        }, i.fn.slideDownTransition = function() {
            return this.each(function() {
                var t = i(this);
                t.removeClass("mobile-closed"), t.css("max-height", "none");
                var e = t.outerHeight();
                t.css("max-height", "0"), setTimeout(function() {
                    t.css({
                        "max-height": e
                    })
                }, 1)
            })
        }
    }(jQuery),
    function(s) {
        s.fn.slideUpTransitionSub = function() {
            return this.each(function() {
                var t = s(this),
                    e = t.outerHeight(),
                    i = s("#navigation").outerHeight() - e;
                t.css("max-height", "0"), t.addClass("subnav-closed"), t.attr("aria-expanded", "false"), t.attr("aria-hidden", "true"), s("#navigation").css({
                    "max-height": i
                })
            })
        }, s.fn.slideDownTransitionSub = function() {
            return this.each(function() {
                var t = s(this);
                t.removeClass("subnav-closed"), t.css("max-height", "none");
                var e = t.outerHeight(),
                    i = s("#navigation").outerHeight(),
                    n = e + i;
                t.css("max-height", "0"), setTimeout(function() {
                    t.css({
                        "max-height": e
                    }), t.attr("aria-expanded", "true"), t.attr("aria-hidden", "false"), s("#navigation").css({
                        "max-height": n
                    })
                }, 1)
            })
        }
    }(jQuery),
    function(b, C, c) {
        "use strict";
        var x, a, E, T, i, n, r, l, h, d, u, p, f, s, $, g, o = "accessibleMenu",
            m = {
                navToggle: "#nav-toggle",
                navId: "#navigation",
                uuidPrefix: "accessible-menu",
                menuClass: "nav-menu",
                topNavItemClass: "nav-item",
                panelClass: "accessible-menu-panel",
                panelGroupClass: "accessible-menu-panel-group",
                hoverClass: "hover",
                focusClass: "focus",
                openClass: "open",
                openDelay: 400,
                closeDelay: 500
            },
            k = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                keyMap: {
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9",
                    190: "."
                }
            };

        function A(t, e) {
            this.element = t, this.settings = b.extend({}, m, e), this._defaults = m, this._name = o, this.mouseTimeoutID = null, this.focusTimeoutID = null, this.mouseFocused = !1, this.justFocused = !1, this.init()
        }

        function v(t) {
            return b.expr.pseudos.visible(t) && !b(t).parents().addBack().filter(function() {
                return "hidden" === b.css(this, "visibility")
            }).length
        }

        function y(t, e) {
            var i, n, s, o = t.nodeName.toLowerCase();
            return "area" === o ? (n = (i = t.parentNode).name, !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) && (!!(s = b("img[usemap=#" + n + "]")[0]) && v(s))) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o && t.href || e) && v(t)
        }
        A.prototype = (s = 0, $ = "", g = "function" == typeof C.hasOwnProperty && !!C.hasOwnProperty("ontouchstart"), x = function(t) {
            return b(t).closest(":data(plugin_" + o + ")").data("plugin_" + o)
        }, a = function(t) {
            t = b(t);
            var e = this.settings;
            t.attr("id") || t.attr("id", e.uuidPrefix + "-" + (new Date).getTime() + "-" + ++s)
        }, E = function(t, e) {
            var i, n = b(t.target),
                s = this,
                o = this.settings,
                a = this.menu,
                r = n.closest("." + o.topNavItemClass),
                l = n.hasClass(o.panelClass) ? n : n.closest("." + o.panelClass);
            if (f.call(this, !0), e)
                if ((r = a.find("." + o.topNavItemClass + " ." + o.openClass + ":first").closest("." + o.topNavItemClass)).is(t.relatedTarget) || 0 < r.has(t.relatedTarget).length) 0 === r.length && a.find("[aria-expanded=true]").attr("aria-expanded", "false").removeClass(o.openClass).filter("." + o.panelClass).attr("aria-hidden", "true");
                else {
                    if (("mouseout" === t.type || "focusout" === t.type) && 0 < r.has(c.activeElement).length) return;
                    r.find("[aria-expanded]").attr("aria-expanded", "false").removeClass(o.openClass).filter("." + o.panelClass).attr("aria-hidden", "true"), ("keydown" === t.type && t.keyCode === k.ESCAPE || "DOMAttrModified" === t.type) && (i = r.find(":tabbable:first"), setTimeout(function() {
                        a.find("[aria-expanded]." + s.settings.panelClass).off("DOMAttrModified.accessible-menu"), i.trigger("focus"), s.justFocused = !1
                    }, 99))
                }
            else clearTimeout(s.focusTimeoutID), r.siblings().find("[aria-expanded]").attr("aria-expanded", "false").removeClass(o.openClass).filter("." + o.panelClass).attr("aria-hidden", "true"), r.find("[aria-expanded]").attr("aria-expanded", "true").addClass(o.openClass).filter("." + o.panelClass).attr("aria-hidden", "false"), "mouseover" === t.type && n.is(":tabbable") && 1 === r.length && 0 === l.length && 0 < a.has(c.activeElement).length && (n.trigger("focus"), s.justFocused = !1), f.call(s)
        }, T = function(t) {
            var e = b(t.target).closest(":tabbable"),
                i = e.closest("." + this.settings.topNavItemClass),
                n = e.closest("." + this.settings.panelClass);
            1 === i.length && 0 === n.length && 1 === i.find("." + this.settings.panelClass).length && (e.hasClass(this.settings.openClass) ? this.justFocused && (t.preventDefault(), t.stopPropagation(), this.justFocused = !1) : (t.preventDefault(), t.stopPropagation(), E.call(this, t), this.justFocused = !1))
        }, i = function(t) {
            0 === b(t.target).closest(this.menu).length && (t.preventDefault(), t.stopPropagation(), E.call(this, t, !0))
        }, n = function(t) {
            "aria-expanded" === t.originalEvent.attrName && "false" === t.originalEvent.newValue && b(t.target).hasClass(this.settings.openClass) && (t.preventDefault(), t.stopPropagation(), E.call(this, t, !0))
        }, r = function(t) {
            clearTimeout(this.focusTimeoutID);
            var e = b(t.target),
                i = e.closest("." + this.settings.panelClass);
            e.addClass(this.settings.focusClass), this.justFocused = !this.mouseFocused, this.mouseFocused = !1, this.panels.not(i).filter("." + this.settings.openClass).length && E.call(this, t)
        }, l = function(e) {
            this.justFocused = !1;
            var i = this,
                t = b(e.target),
                n = t.closest("." + this.settings.topNavItemClass);
            t.removeClass(this.settings.focusClass).off("click.accessible-menu"), C.cvox ? i.focusTimeoutID = setTimeout(function() {
                C.cvox.Api.getCurrentNode(function(t) {
                    n.has(t).length ? clearTimeout(i.focusTimeoutID) : i.focusTimeoutID = setTimeout(function(t, e, i) {
                        E.call(t, e, i)
                    }, 275, i, e, !0)
                })
            }, 25) : i.focusTimeoutID = setTimeout(function() {
                E.call(i, e, !0)
            }, 300)
        }, h = function(t) {
            var e, i, n, s, o, a, r = this.constructor === A ? this : x(this),
                l = r.settings,
                c = b(b(this).is("." + l.hoverClass + ":tabbable") ? this : t.target),
                h = r.menu,
                d = r.topnavitems,
                u = c.closest("." + l.topNavItemClass),
                p = h.find(":tabbable"),
                f = c.hasClass(l.panelClass) ? c : c.closest("." + l.panelClass),
                g = f.find("." + l.panelGroupClass),
                m = c.closest("." + l.panelGroupClass),
                v = t.keyCode || t.which,
                y = !1,
                _ = k.keyMap[t.keyCode] || "",
                w = 1 === u.length && 0 === f.length;
            if (!c.is("input:focus, select:focus, textarea:focus, button:focus")) {
                switch (c.is("." + l.hoverClass + ":tabbable") && b("html").off("keydown.accessible-menu"), v) {
                    case k.ESCAPE:
                        E.call(r, t, !0);
                        break;
                    case k.DOWN:
                        t.preventDefault(), w ? (E.call(r, t), y = 1 === u.find("." + l.panelClass + " :tabbable:first").trigger("focus").length) : y = 1 === p.filter(":gt(" + p.index(c) + "):first").trigger("focus").length, !y && C.opera && "[object Opera]" === opera.toString() && (t.ctrlKey || t.metaKey) && (n = (p = b(":tabbable")).index(c), y = 1 === b(":tabbable:gt(" + b(":tabbable").index(c) + "):first").trigger("focus").length);
                        break;
                    case k.UP:
                        t.preventDefault(), w && c.hasClass(l.openClass) ? (E.call(r, t, !0), (e = d.filter(":lt(" + d.index(u) + "):last")).children("." + l.panelClass).length && (y = 1 === e.children().attr("aria-expanded", "true").addClass(l.openClass).filter("." + l.panelClass).attr("aria-hidden", "false").find(":tabbable:last").trigger("focus"))) : w || (y = 1 === p.filter(":lt(" + p.index(c) + "):last").trigger("focus").length), !y && C.opera && "[object Opera]" === opera.toString() && (t.ctrlKey || t.metaKey) && (n = (p = b(":tabbable")).index(c), y = 1 === b(":tabbable:lt(" + b(":tabbable").index(c) + "):first").trigger("focus").length);
                        break;
                    case k.RIGHT:
                        t.preventDefault(), w ? y = 1 === d.filter(":gt(" + d.index(u) + "):first").find(":tabbable:first").trigger("focus").length : (g.length && m.length && (y = 1 === g.filter(":gt(" + g.index(m) + "):first").find(":tabbable:first").trigger("focus").length), y || (y = 1 === u.find(":tabbable:first").trigger("focus").length));
                        break;
                    case k.LEFT:
                        t.preventDefault(), w ? y = 1 === d.filter(":lt(" + d.index(u) + "):last").find(":tabbable:first").trigger("focus").length : (g.length && m.length && (y = 1 === g.filter(":lt(" + g.index(m) + "):last").find(":tabbable:first").trigger("focus").length), y || (y = 1 === u.find(":tabbable:first").trigger("focus").length));
                        break;
                    case k.TAB:
                        n = p.index(c), t.shiftKey && w && c.hasClass(l.openClass) ? (E.call(r, t, !0), (e = d.filter(":lt(" + d.index(u) + "):last")).children("." + l.panelClass).length && (y = e.children().attr("aria-expanded", "true").addClass(l.openClass).filter("." + l.panelClass).attr("aria-hidden", "false").find(":tabbable:last").trigger("focus"))) : t.shiftKey && 0 < n ? y = 1 === p.filter(":lt(" + n + "):last").trigger("focus").length : !t.shiftKey && n < p.length - 1 ? y = 1 === p.filter(":gt(" + n + "):first").trigger("focus").length : C.opera && "[object Opera]" === opera.toString() && (n = (p = b(":tabbable")).index(c), y = t.shiftKey ? 1 === b(":tabbable:lt(" + b(":tabbable").index(c) + "):last").trigger("focus").length : 1 === b(":tabbable:gt(" + b(":tabbable").index(c) + "):first").trigger("focus").length), y && t.preventDefault();
                        break;
                    case k.SPACE:
                        if (!w) return !0;
                        t.preventDefault(), T.call(r, t);
                        break;
                    case k.ENTER:
                        return !0;
                    default:
                        if (clearTimeout(this.keydownTimeoutID), 0 === ($ += _ !== $ ? _ : "").length) return;
                        for (this.keydownTimeoutID = setTimeout(function() {
                                $ = ""
                            }, 1e3), p = w && !c.hasClass(l.openClass) ? p.filter(":not(." + l.panelClass + " :tabbable)") : u.find(":tabbable"), t.shiftKey && (p = b(p.get().reverse())), n = 0; n < p.length; n++)
                            if ((s = p.eq(n)).is(c)) {
                                i = 1 === $.length ? n + 1 : n;
                                break
                            } for (a = new RegExp("^" + $.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), "i"), n = i; n < p.length; n++)
                            if (s = p.eq(n), o = b.trim(s.text()), a.test(o)) {
                                y = !0, s.trigger("focus");
                                break
                            } if (!y)
                            for (n = 0; n < i; n++)
                                if (s = p.eq(n), o = b.trim(s.text()), a.test(o)) {
                                    s.trigger("focus");
                                    break
                                }
                }
                r.justFocused = !1
            }
        }, d = function(t) {
            (b(t.target).is(this.settings.panelClass) || b(t.target).closest(":focusable").length) && (this.mouseFocused = !0), clearTimeout(this.mouseTimeoutID), this.mouseTimeoutID = setTimeout(function() {
                clearTimeout(this.focusTimeoutID)
            }, 1)
        }, u = function(t) {
            clearTimeout(this.mouseTimeoutID);
            var e = this;
            768 < C.innerWidth && (this.mouseTimeoutID = setTimeout(function() {
                b(t.target).addClass(e.settings.hoverClass), E.call(e, t), b(t.target).is(":tabbable") && b("html").on("keydown.accessible-menu", b.proxy(h, t.target))
            }, this.settings.openDelay))
        }, p = function(t) {
            clearTimeout(this.mouseTimeoutID);
            var e = this;
            b(t.target).removeClass(e.settings.hoverClass), e.mouseTimeoutID = setTimeout(function() {
                E.call(e, t, !0)
            }, this.settings.closeDelay), b(t.target).is(":tabbable") && b("html").off("keydown.accessible-menu")
        }, f = function(t) {
            var e = this.menu;
            t ? (b("html").off("mouseup.outside-accessible-menu, touchend.outside-accessible-menu, mspointerup.outside-accessible-menu,  pointerup.outside-accessible-menu"), e.find("[aria-expanded]." + this.settings.panelClass).off("DOMAttrModified.accessible-menu")) : (b("html").on("mouseup.outside-accessible-menu, touchend.outside-accessible-menu, mspointerup.outside-accessible-menu,  pointerup.outside-accessible-menu", b.proxy(i, this)), e.find("[aria-expanded=true]." + this.settings.panelClass).on("DOMAttrModified.accessible-menu", b.proxy(n, this)))
        }, {
            constructor: A,
            init: function() {
                var t = this.settings,
                    e = b(this.element),
                    i = b("#nav_list"),
                    n = i.children();
                this.start(t, e, i, n)
            },
            start: function(s, t, e, i) {
                var o = this;
                this.settings = s, this.menu = e, this.topnavitems = i, t.attr("role", "navigation"), e.addClass(s.menuClass), i.each(function(t, e) {
                    var i, n;
                    (e = b(e)).addClass(s.topNavItemClass), i = e.find(":tabbable:first"), n = e.children(":not(:tabbable):last"), a.call(o, i), n.length && (a.call(o, n), i.attr({
                        "aria-controls": n.attr("id"),
                        "aria-expanded": !1
                    }), n.attr({
                        role: "region",
                        "aria-expanded": !1,
                        "aria-hidden": !0
                    }).addClass(s.panelClass).not("[aria-labelledby]").attr("aria-labelledby", i.attr("id")))
                }), this.panels = e.find("." + s.panelClass), e.on("focusin.accessible-menu", ":focusable, ." + s.panelClass, b.proxy(r, this)).on("focusout.accessible-menu", ":focusable, ." + s.panelClass, b.proxy(l, this)).on("keydown.accessible-menu", b.proxy(h, this)).on("mouseover.accessible-menu", b.proxy(u, this)).on("mouseout.accessible-menu", b.proxy(p, this)).on("mousedown.accessible-menu", b.proxy(d, this)), g && e.on("touchstart.accessible-menu", b.proxy(T, this)), e.find("hr").attr("role", "separator"), b(c.activeElement).closest(e).length && b(c.activeElement).trigger("focusin.accessible-menu")
            },
            getDefaults: function() {
                return this._defaults
            },
            getOption: function(t) {
                return this.settings[t]
            },
            getAllOptions: function() {
                return this.settings
            },
            setOption: function(t, e, i) {
                this.settings[t] = e, i && this.init()
            }
        }), b.fn[o] = function(t) {
            return this.each(function() {
                b.data(this, "plugin_" + o) || b.data(this, "plugin_" + o, new b.fn[o].accessibleMenu(this, t))
            })
        }, b.fn[o].accessibleMenu = A, b.extend(b.expr.pseudos, {
            data: b.expr.createPseudo ? b.expr.createPseudo(function(e) {
                return function(t) {
                    return !!b.data(t, e)
                }
            }) : function(t, e, i) {
                return !!b.data(t, i[3])
            },
            focusable: function(t) {
                return y(t, !isNaN(b.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var e = b.attr(t, "tabindex"),
                    i = isNaN(e);
                return (i || 0 <= e) && y(t, !i)
            }
        }), b(C).on("resize", function() {
            if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) return !1;
            ! function() {
                b(".sub-nav").removeClass("open"), b(".sub-nav").removeClass("secondary-open"), b(".sub-nav").attr("aria-expanded", !1), b(".sub-nav").attr("aria-hidden", !0), b(".first-level-link").removeClass("open"), b(".first-level-link").removeClass("active"), b(".first-level-link").attr("aria-expanded", !1), b("#navigation").addClass("mobile-closed"), C.innerWidth < 768 ? (b("#navigation").css("max-height", "0"), b(".sub-nav").slideUpTransitionSub(), b("#navigation").slideUpTransition(), b(".rotate").removeClass("down")) : (b("#navigation").removeAttr("style"), b(".sub-nav").removeAttr("style"));
                b(".toggle-sub-nav").removeClass("open"), b(".toggle-sub-nav").addClass("closed"), b(".nav-item").removeClass("active"), b(".toggle-menu").attr("aria-expanded", "false"), b(".toggle-menu").removeClass("open"), b(".toggle-sub-nav").removeClass("open")
            }()
        })
    }(jQuery, window, document), $("nav:first").accessibleMenu({
        navId: "#navigation",
        uuidPrefix: "accessible-menu",
        menuClass: "nav-menu",
        topNavItemClass: "nav-item",
        panelClass: "sub-nav",
        panelGroupClass: "sub-nav-group",
        hoverClass: "hover",
        focusClass: "focus",
        openClass: "open"
    }), $(document).ready(function() {
        $(".accordion-list").find(".description").hide().attr("aria-hidden", "true");
        $(".accordion-list .toggle").attr("tabindex", "0").attr("aria-expanded", "false"), $(".accordion-list .toggle").on("click", function(t) {
            var e = $(this).next(".description");
            return e.is(":visible") ? (e.slideUp("fast").removeClass("hide").attr("aria-hidden", "true"), $(this).parent("li").removeClass("open"), $(this).attr("aria-expanded", "false")) : (e.slideDown("fast").removeClass("hide").attr("aria-hidden", "false"), $(this).parent("li").addClass("open"), $(this).attr("aria-expanded", "true")), !1
        })
    }), $(document).ready(function() {
        new tabpanel("accordion", !0)
    }), tabpanel.prototype.init = function() {
        var t;
        this.$panels.attr("aria-hidden", "true"), this.$panels.hide(), null == (t = this.$tabs.filter(".selected")) && (t = this.$tabs.first()).addClass("selected"), this.$panel.find("#" + t.attr("aria-controls")).show().attr("aria-hidden", "false")
    }, tabpanel.prototype.switchTabs = function(t, e) {
        t.removeClass("selected focus"), t.attr("tabindex", "-1").attr("aria-selected", "false"), e.addClass("selected").attr("aria-selected", "true"), 0 == this.accordian && (this.$panel.find("#" + t.attr("aria-controls")).hide().attr("aria-hidden", "true"), t.attr("aria-expanded", "false"), this.$panel.find("#" + e.attr("aria-controls")).show().attr("aria-hidden", "false"), e.attr("aria-expanded", "true"), this.$focusable.length = 0, this.$panels.find(":focusable")), e.attr("tabindex", "0"), e.trigger("focus")
    }, tabpanel.prototype.togglePanel = function(t) {
        $panel = this.$panel.find("#" + t.attr("aria-controls")), "true" == $panel.attr("aria-hidden") ? ($panel.attr("aria-hidden", "false"), $panel.slideDown(100), t.addClass("open"), t.find("i").attr("class", "ca-gov-icon-menu-toggle-open font-size-sm"), t.attr("aria-expanded", "true")) : ($panel.attr("aria-hidden", "true"), $panel.slideUp(100), t.removeClass("open"), t.find("i").attr("class", "ca-gov-icon-menu-toggle-closed font-size-sm"), t.attr("aria-expanded", "false"))
    }, tabpanel.prototype.bindHandlers = function() {
        var e = this;
        this.$tabs.on("keydown", function(t) {
            return e.handleTabKeyDown($(this), t)
        }), this.$tabs.on("keypress", function(t) {
            return e.handleTabKeyPress($(this), t)
        }), this.$tabs.on("click", function(t) {
            return e.handleTabClick($(this), t)
        }), this.$tabs.on("focus", function(t) {
            return e.handleTabFocus($(this), t)
        }), this.$tabs.on("blur", function(t) {
            return e.handleTabBlur($(this), t)
        }), this.$panels.on("keydown", function(t) {
            return e.handlePanelKeyDown($(this), t)
        }), this.$panels.on("keypress", function(t) {
            return e.handlePanelKeyPress($(this), t)
        }), this.$panels.on("click", function(t) {
            return e.handlePanelClick($(this), t)
        })
    }, tabpanel.prototype.handleTabKeyDown = function(t, e) {
        if (e.altKey) return !0;
        switch (e.keyCode) {
            case this.keys.enter:
            case this.keys.space:
                return 1 != this.accordian || (this.togglePanel(t), e.stopPropagation(), !1);
            case this.keys.left:
            case this.keys.up:
                if (e.ctrlKey);
                else i = 0 == (n = this.$tabs.index(t)) ? this.$tabs.last() : this.$tabs.eq(n - 1), this.switchTabs(t, i);
                return e.stopPropagation(), !1;
            case this.keys.right:
            case this.keys.down:
                var i, n;
                return i = (n = this.$tabs.index(t)) == this.$tabs.length - 1 ? this.$tabs.first() : this.$tabs.eq(n + 1), this.switchTabs(t, i), e.stopPropagation(), !1;
            case this.keys.home:
                return this.switchTabs(t, this.$tabs.first()), e.stopPropagation(), !1;
            case this.keys.end:
                return this.switchTabs(t, this.$tabs.last()), e.stopPropagation(), !1
        }
    }, tabpanel.prototype.handleTabKeyPress = function(t, e) {
        if (e.altKey) return !0;
        switch (e.keyCode) {
            case this.keys.enter:
            case this.keys.space:
            case this.keys.left:
            case this.keys.up:
            case this.keys.right:
            case this.keys.down:
            case this.keys.home:
            case this.keys.end:
                return e.stopPropagation(), !1;
            case this.keys.pageup:
            case this.keys.pagedown:
                return !e.ctrlKey || (e.stopPropagation(), !1)
        }
        return !0
    }, tabpanel.prototype.handleTabClick = function(t, e) {
        return t.attr("tabindex", "0").attr("aria-selected", "true").addClass("selected"), this.$tabs.not(t).attr("tabindex", "-1").attr("aria-selected", "false").removeClass("selected"), this.togglePanel(t), e.stopPropagation(), !1
    }, tabpanel.prototype.handleTabFocus = function(t, e) {
        return t.addClass("focus"), !0
    }, tabpanel.prototype.handleTabBlur = function(t, e) {
        return t.removeClass("focus"), !0
    }, tabpanel.prototype.handlePanelKeyDown = function(t, e) {
        if (e.altKey) return !0;
        switch (e.keyCode) {
            case this.keys.tab:
                var i = t.find(":focusable"),
                    n = i.index($(e.target)),
                    s = this.$panels.index(t),
                    o = this.$panels.length;
                if (e.shiftKey) {
                    if (0 == n && 0 < s)
                        for (var a = s - 1; 0 <= a; a--) {
                            var r = this.$panels.eq(a),
                                l = $("#" + r.attr("aria-labelledby"));
                            if ((i.length = 0) < (i = r.find(":focusable")).length) return i.last().trigger("focus"), this.$tabs.attr("aria-selected", "false").removeClass("selected"), l.attr("aria-selected", "true").addClass("selected"), e.stopPropagation, !1
                        }
                } else if (s < o && n == i.length - 1)
                    for (a = s + 1; a < o; a++) {
                        var c = this.$panels.eq(a),
                            h = $("#" + c.attr("aria-labelledby"));
                        if ((i.length = 0) < (i = c.find(":focusable")).length) return i.first().trigger("focus"), this.$tabs.attr("aria-selected", "false").removeClass("selected"), h.attr("aria-selected", "true").addClass("selected"), e.stopPropagation, !1
                    }
                break;
            case this.keys.left:
            case this.keys.up:
                return !e.ctrlKey || ((d = $("#" + t.attr("aria-labelledby"))).trigger("focus"), e.stopPropagation(), !1);
            case this.keys.pageup:
                if (!e.ctrlKey) return !0;
                var d = this.$tabs.filter(".selected");
                return u = 0 == (n = this.$tabs.index(d)) ? this.$tabs.last() : this.$tabs.eq(n - 1), this.switchTabs(d, u), e.stopPropagation(), e.preventDefault(), !1;
            case this.keys.pagedown:
                var u;
                if (!e.ctrlKey) return !0;
                d = $("#" + t.attr("aria-labelledby"));
                return u = (n = this.$tabs.index(d)) == this.$tabs.length - 1 ? this.$tabs.first() : this.$tabs.eq(n + 1), this.switchTabs(d, u), e.stopPropagation(), e.preventDefault(), !1
        }
        return !0
    }, tabpanel.prototype.handlePanelKeyPress = function(t, e) {
        if (e.altKey) return !0;
        if (e.ctrlKey && (e.keyCode == this.keys.pageup || e.keyCode == this.keys.pagedown)) return e.stopPropagation(), e.preventDefault(), !1;
        switch (e.keyCode) {
            case this.keys.esc:
                return e.stopPropagation(), e.preventDefault(), !1
        }
        return !0
    }, tabpanel.prototype.handlePanelClick = function(t, e) {
        var i = $("#" + t.attr("aria-labelledby"));
        return i.attr("tabindex", "0").attr("aria-selected", "true").addClass("selected"), this.$tabs.not(i).attr("tabindex", "-1").attr("aria-selected", "false").removeClass("selected"), !0
    }, $.extend($.expr.pseudos, {
        focusable: function(t) {
            var e = t.nodeName.toLowerCase(),
                i = $(t).attr("tabindex");
            return 1 != $(t)["area" == e ? "parents" : "closest"](":hidden").length && (!(!isNaN(i) && i < 0) && (1 == /input|select|textarea|button|object/.test(e) ? !t.disabled : 1 == ("a" == e || "area" == e) && 0 < t.href.length))
        }
    }), $(document).ready(function() {
        $(".nav-tabs > li > a[aria-selected='true']").addClass("active"), $(".nav-tabs > li > a").on("click", function() {
            $(this).attr("aria-selected"), $(".nav-tabs > li").removeClass("active"), $(this).parent("li").addClass("active")
        })
    }), $(document).ready(function() {
        $(".main-secondary .panel").first().addClass("first"), $(".panel.highlight").find(".panel-heading").prepend("<span class='triangle'></span>"), $(".card.highlight").find(".card-heading").prepend("<span class='triangle'></span>")
    }), $(document).ready(function() {
        var t = $("#head-search"),
            e = t.find(".search-textfield"),
            i = $(".search-results-container"),
            n = $("body");
        $(".search-tabs button").on("click", function(t) {
            $(this).siblings().removeClass("active"), $(this).tab("show").addClass("active"), t.preventDefault()
        });

        function s() {
            n.removeClass("active-search"), e.val(""), t.removeClass("active"), i.removeClass("visible"), $(".ask-group").removeClass("fade-out"), $(window).scroll(), $.event.trigger("cagov.searchresults.hide")
        }
        e.on("blur focus", function(t) {
            $(this).parents("#head-search").removeClass("focus"), $(this).parents(".search-container").addClass("focus")
        }), e.on("change keyup paste", function() {
            $(this).val() && (n.addClass("active-search"), t.addClass("active"), i.addClass("visible"), $("#navigation").addClass("mobile-closed"), $(".ask-group").addClass("fade-out"), $(window).scroll(), $.event.trigger("cagov.searchresults.show"))
        }), i.find(".close").on("click", s), t.find(".close").on("click", s), $(".top-level-nav .nav-item .ca-gov-icon-search, #nav-item-search").parents(".nav-item").on("click", function(t) {
            e.trigger("focus").trigger("focus"), $("#head-search").addClass("play-animation").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                $(this).removeClass("play-animation")
            }), $("#head-search").is(".featured-search") ? window.setTimeout(function() {
                $("body:not(.primary) .search-container").addClass("active")
            }, 401) : window.setTimeout(function() {
                $(".search-container").addClass("active")
            }, 401)
        }), $(".close-search").on("click", s)
    }), $(document).ready(function() {
        $(".eqHeight").eqHeight()
    }), $(document).ready(function() {
        $(".gallery .item a, .carousel-gallery .item a, a.gallery-item").fancybox({
            groupAttr: "data-gallery"
        }), $(".gallery").eqHeight(".item"), $('a[data-toggle="tab"]').on("shown.bs.tab", function(t) {
            window.dispatchEvent(new Event("resize"))
        })
    }), $(document).ready(function() {
        $(".main-secondary").eqHeight(".profile-banner > .inner")
    }), $(document).ready(function() {
        var r;
        $(".carousel-video").initCAVideo(), $(".carousel-content").each(initContent), (r = jQuery).fn.owlBannerCarousel = function(t) {
            var a = r.extend({
                delay: 4e3,
                smallSearch: !0
            }, t);
            return this.each(function() {
                a.smallSearch && r(".navigation-search").addClass("small-search");
                var i = r(".header-slideshow-banner");
                i.addClass("enabled"), window.setTimeout(function() {
                    var t = i.offset().top,
                        e = r(window).height() - t;
                    e = 450 < e ? 450 : e, i.css({
                        height: e
                    })
                }, 0);
                var t = r(this),
                    e = r("html").hasClass("oldie") ? 0 : 250;
                t.owlCarousel({
                    items: 1,
                    smartSpeed: e,
                    animateOut: "fadeOut",
                    loop: !0,
                    autoplay: !0,
                    autoplayTimeout: a.delay,
                    autoplayHoverPause: !1,
                    mouseDrag: !1,
                    touchDrag: !1,
                    pullDrag: !1,
                    pagination: !0,
                    dotsClass: "banner-pager",
                    dotClass: "banner-control",
                    dotsContainer: !1
                });
                var n = r('<div class="banner-play-pause"><div class="banner-control"><button class="play ca-gov-icon-carousel-play" aria-hidden="true"></button><button class="pause ca-gov-icon-carousel-pause" aria-hidden="true"></span></div></div>');
                t.append(n);
                var s = n.find(".play").hide(),
                    o = n.find(".pause");
                s.on("click", function() {
                    r(this).hide(), r(this).parent().removeClass("active"), o.show(), t.trigger("play.owl.autoplay", [a.delay]), t.owlCarousel("next")
                }), o.on("click", function() {
                    r(this).hide(), r(this).parent().addClass("active"), s.show(), t.trigger("stop.owl.autoplay")
                }), r(".banner-pager .banner-control").each(function() {
                    r(this).find("span").append(r(this).index() + 1)
                })
            })
        }, $("body .carousel-banner").owlBannerCarousel(), $.fn.owlCarousel && ($(".carousel-media").owlCarousel({
            onResized: function() {
                window.setTimeout(function() {
                    $(window).trigger("resize")
                }, 0)
            },
            onDragged: function() {
                window.setTimeout(function() {
                    $(window).trigger("resize")
                }, 0)
            },
            onTranslated: function() {
                window.setTimeout(function() {
                    $(window).trigger("resize")
                }, 0)
            },
            responsive: !0,
            margin: 10,
            nav: !0,
            loop: !0,
            responsiveClass: !0,
            responsive: {
                0: {
                    items: 1,
                    nav: !0
                },
                400: {
                    items: 2
                },
                700: {
                    items: 3,
                    nav: !0
                },
                1e3: {
                    items: 4,
                    nav: !0
                }
            },
            navText: ['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>'],
            dots: !1
        }), $(".carousel-link").owlCarousel({
            margin: 25,
            autoWidth: !0,
            nav: !0,
            navText: ['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>'],
            dots: !1
        }), $(".carousel-slider").owlCarousel({
            items: 1,
            nav: !0,
            navText: ['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>'],
            dots: !1
        }), $(".carousel-gallery").owlCarousel({
            items: 1,
            nav: !0,
            navText: ['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>'],
            dots: !1
        }))
    }),
    function(c) {
        c.fn.initCAVideo = function(t) {
            return this.each(function() {
                var a = c(this);
                if (!a.attr("data-loaded")) {
                    a.attr("data-loaded", "true");
                    var e = (a.find(".item a").first().attr("href") || "").split("?v=").pop(),
                        i = 0,
                        r = a.find(".item").length;
                    a.owlCarousel({
                        items: 1,
                        loop: !1,
                        nav: !0,
                        lazyLoad: !1,
                        video: !0,
                        navText: ['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>'],
                        dots: !1
                    }), a.on("translated.owl.carousel", function(t) {
                        e = a.find(".owl-item.active").attr("data-video").split(/\?v=|\/v\//).pop(), n(), i = t.item.index, l.trigger("to.owl.carousel", [i, 300, !0])
                    }), a.find(".owl-video-play-icon").append(c('<span class="ca-gov-icon-play" />')), a.find(".owl-video-tn").after(c("<div />").addClass("item-overlay"));
                    var l = c("<div></div>").insertAfter(a);
                    l.addClass("carousel owl-carousel carousel-video-submenu"), a.find("a.owl-video").each(function(t) {
                        var e = c(this).attr("href"),
                            i = c("<div/>").addClass("item-thumbnail");
                        i.on("click", function() {
                            a.trigger("to.owl.carousel", [t % r, 300, !0]), l.find(".watching").removeClass("watching"), c(this).parents(".owl-item").addClass("watching"), a.find(".active .owl-video-play-icon").trigger("click")
                        });
                        new RegExp("ab+c", "i");
                        var n = "url(http://img.youtube.com/vi/" + e.split(/\?v=|\/v\//).pop() + "/0.jpg )",
                            s = c("<button />").css("background-image", n).addClass("videoThumb"),
                            o = c("<div />").addClass("item-overlay");
                        o.append(c('<span class="ca-gov-icon-play" />')), i.append(s).append(o), l.append(i)
                    }), (l = a.next()).on("initialized.owl.carousel", function() {
                        n()
                    }), l.owlCarousel({
                        items: 4,
                        loop: !1,
                        nav: !0,
                        margin: 20,
                        dots: !1,
                        navText: ['<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>', '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>']
                    }), l.on("changed.owl.carousel", function() {
                        setTimeout(n, 50)
                    })
                }

                function n() {
                    l.find(".watching").removeClass("watching"), l.find('button[style*="' + e + '"]').parents(".owl-item").addClass("watching")
                }
            })
        }
    }(jQuery), $(document).ready(function() {
        $(".job-detail").eqHeight(".well")
    }), $(document).ready(function() {
        $(".location.full").eqHeight(".photo, .map")
    }), $(document).ready(function() {
        var e = t(document.title),
            i = window.location.href;

        function t(t) {
            return t = t.replace(/<\S[^>]*>/g, " ")
        }

        function n(t, e, i, n) {
            var s = window.screenX ? window.screenX : window.screenLeft ? window.screenLeft : screen.left ? screen.left : 0,
                o = window.screenY ? window.screenY : window.screenTop ? window.screenTop : screen.top ? screen.top : 0,
                a = (window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width) / 2 - i / 2 + s,
                r = (window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height) / 2 - n / 2 + o;
            window.open(t, e, "scrollbars=yes, width=" + i + ", height=" + n + ", left=" + a + ", top=" + r)
        }
        i = encodeURIComponent(t(i)), $(".ca-gov-icon-share-facebook").on("click", function(t) {
            n("https://www.facebook.com/sharer/sharer.php?u=" + i + "&display=popup", "socialsharer", "658", "450")
        }), $(".ca-gov-icon-share-twitter").on("click", function(t) {
            n("https://twitter.com/intent/tweet?text=" + e + "&url=" + i, "socialsharer", "568", "531")
        }), $(".ca-gov-icon-share-googleplus").on("click", function(t) {
            n("https://plus.google.com/share?url=" + i, "socialsharer", "550", "552")
        }), $(".ca-gov-icon-share-email").attr("href", "mailto:?subject=" + e + "&body=%0a" + i + "%0a%0a")
    }), $(document).ready(function() {
        breadcrumbs()
    }), $(document).ready(function() {
        $(".service-group").each(initServiceGroup)
    });
var __$currentRow = null;

function initTiles(t, e) {
    e.each(function() {
        setCloseClasses($(this))
    }), e.find(".icon-fallback").each(setIconFallback), e.find(".collapse").collapse(), t.find(".service-tile-full .container").css({
        height: ""
    })
}

function shrinkAndRemove(t) {
    t.animate({
        height: "0px"
    }, 300, "linear", function() {
        t.empty().remove()
    })
}

function setUpEvents(n) {
    function s(t) {
        var e = $(this);
        t.preventDefault(), shrinkAndRemove(findRow(e)), setCloseClasses(e)
    }
    n.on("click", ".service-tile", function(t) {
        if (t.preventDefault(), $(this).hasClass("touched")) $(this).removeClass("touched");
        else switch ($(this).attr("data-state")) {
            case "closed":
            case "info":
                (function(t) {
                    var e = $(this);
                    t.preventDefault(), n.find(".service-tile").not(e).each(function() {
                        setCloseClasses($(this))
                    }), e.attr("data-state", "open");
                    var i = findRow(e);
                    checkIfOldAndSet(i), insertContent(i, e), setCloseButtonEvent(e, s)
                }).call(this, t), $("button.close").trigger("focus");
                break;
            case "open":
                s.call(this, t)
        }
    }), $(".service-tile").on("focusin", function() {
        $(this).addClass("tile-focus")
    }), $(".service-tile").on("focusout", function() {
        $(this).removeClass("tile-focus")
    }), n.on("keyup", ".service-tile", function(t) {
        13 == t.which && $(".service-tile").hasClass("tile-focus") && $(this).trigger("click")
    })
}

function setIconFallback() {
    var t = $(this).width();
    $(this).css({
        "font-size": .6 * t
    })
}

function setCloseClasses(t) {
    t.attr("data-state", "closed").removeClass("show-info")
}

function setCloseButtonEvent(e, i) {
    var t = e.data("tile-id");
    e.parent().find('.service-tile-panel[data-tile-id="' + t + '"]').first().find(".close.btn").on("click", function(t) {
        i.call(e, t)
    })
}

function insertContent(t, e) {
    if (t) {
        var i = e.data("tile-id"),
            n = e.parent().find('.service-tile-panel[data-tile-id="' + i + '"]').first();
        t.css("height", t.height() + "px"), t.empty(), n.clone().appendTo(t), t.animate({
            height: n.height() + "px"
        }, 300, "linear", function() {
            t.css("height", ""), scrollToEl(e)
        })
    }
}

function findRow(t) {
    var e = t.nextAll(".service-tile, .service-tile-full").filter(function() {
        return $(this).offset().top !== t.offset().top
    }).first();
    return e.is(".service-tile-full") ? e : e.is(".service-tile") ? createExpandedRow(e, "before") : t.nextAll(".service-tile").length ? createExpandedRow(t.nextAll(".service-tile").last(), "after") : createExpandedRow(t, "after")
}

function checkIfOldAndSet(t) {
    __$currentRow && !__$currentRow.is(t) && shrinkAndRemove(__$currentRow), __$currentRow = t
}

function createExpandedRow(t, e) {
    var i = $("<div>").addClass("service-tile-full");
    return t[e](i), i.trigger("focus"), i.addClass("is-open"), i
}

function scrollToEl(t) {
    if (t && t.length) {
        var e = t.offset().top;
        $("html, body").animate({
            scrollTop: e
        }, 450)
    }
}

function initCountUp() {
    var t = $(this),
        e = t.text().trim();
    t.text("0"), t.css({
        visibility: "visible"
    });
    var i = {
            useEasing: !0,
            useGrouping: !1,
            separator: "",
            decimal: ".",
            prefix: ""
        },
        n = 0; - 1 !== e.indexOf(".") && (n = e.split(".")[1].length), -1 !== e.indexOf(",") && (i.useGrouping = !0, i.separator = ",", e = parseFloat(e.replace(/,/g, "")));
    var s = new CountUp(t.get(0), 0, e, n, 3.5, i);
    new Waypoint({
        element: t.get(0),
        offset: "100%",
        handler: function() {
            s.start()
        }
    })
}

function initAnimations() {
    var e = $(this);
    new Waypoint({
        element: e.get(0),
        offset: "95%",
        handler: function() {
            var t = e.attr("class").match(/animate-(\w+)\b/i)[1];
            e.removeClass("animate-" + t), e.addClass("animated " + t), this.disable()
        }
    })
}

function makeBlur(t) {
    t.Vague({
        intensity: 6
    }).trigger("blur")
}

function initLoad() {
    var s = $(this),
        o = s.attr("data-ajax-target"),
        e = s.attr("data-container-target"),
        i = s.find(".more-content"),
        a = s.attr("data-ajax-test");

    function n(t) {
        $(i).load(t, function(t, e, i) {
            var n = i.getResponseHeader("Link");
            a || ("error" == e || null == n ? s.animate({
                opacity: 0,
                height: 0
            }, 300, "linear") : o = n.match(/<(.*?)>/)[1])
        })
    }
    makeBlur(i), n(o), s.on("click", function(t) {
        t.preventDefault(), $(i).children().hide().appendTo(e).fadeIn(1e3), $(e).trigger("more.new"), n(o)
    })
}

function pane() {
    $(".even .group-left").each(function() {
        if (window.innerWidth < 768) {
            var t = $(this).height();
            $(this).height(t), $(this).css("top", t)
        } else $(this).css("top", 0)
    }), $(".even .group-right").each(function() {
        if (window.innerWidth < 768) {
            var t = $(this).prev().height();
            $(this).height(t), $(this).css("top", -t)
        } else $(this).css("top", 0)
    }), $(".pane-img").each(function() {
        var t = $(this).parent().height();
        $(this).height(t)
    })
}
$(document).ready(function() {
        $(".number-counter").each(initCountUp)
    }), String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }),
    function(s) {
        s.fn.parallax = function(t) {
            s(window).height();
            var n = s.extend({
                speed: .3
            }, t);
            return this.each(function() {
                var i = s(this),
                    t = s(window).outerHeight() * n.speed + i.innerHeight();
                i.css({
                    height: t
                }), s(window).scroll(function() {
                    var t, e = i.offset().top;
                    t = "translate(0, " + (s(window).scrollTop() + s(window).innerHeight() - e) * n.speed + "px)", i.css({
                        "-webkit-transform": t,
                        "-moz-transform": t,
                        "-ms-transform": t,
                        transform: t
                    })
                })
            })
        }
    }(jQuery), $(".parallax-bg").parallax(), $(document).ready(function() {
        $("[class*='animate-']").each(initAnimations)
    }), $(document).ready(function() {
        $(".toggle-more").toggleMore(), $("[data-ajax-target]").each(initLoad);
        var i = $("html, body");
        $(".explore-invite").on("click", function(t) {
            t.preventDefault();
            var e = $("header.fixed").height();
            i.animate({
                scrollTop: $(".main-primary").offset().top - e
            }, 2e3), $(document).one("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function(t) {
                (0 < t.which || "mousedown" === t.type || "mousewheel" === t.type || "touchstart" == t.type) && i.stop()
            })
        })
    }),
    function(n) {
        n.fn.toggleMore = function(e) {
            function i(t, e) {
                e ? t.addClass("active").attr("aria-expanded", "true") : t.removeClass("active").attr("aria-expanded", "false")
            }
            return this.each(function() {
                var t = n(this);
                void 0 !== e ? i(t, !!e) : t.hasClass("active") ? i(t, !0) : i(t, !1), t.off("click.cagovmore"), t.on("click.cagovmore", function() {
                    t.hasClass("active") ? i(t, !1) : i(t, !0)
                })
            })
        }
    }(jQuery), $(document).ready(function() {
        var t = $(".enableHighContrastMode"),
            e = $(".disableHighContrastMode"),
            i = $("html");

        function n() {
            t.addClass("active"), e.removeClass("active"), i.addClass("high-contrast"), localStorage.setItem("high-contrast", "true")
        }
        localStorage.getItem("high-contrast") && n(), t.on("click", n), e.on("click", function() {
            e.addClass("active"), t.removeClass("active"), i.removeClass("high-contrast"), localStorage.removeItem("high-contrast")
        });
        var s = $(".enableTextOnlyMode"),
            o = $(".disableTextOnlyMode");
        s.on("click", function() {
            s.addClass("active"), o.removeClass("active"), $('link[rel~="stylesheet"]').prop("disabled", !0)
        }), o.on("click", function() {
            o.addClass("active"), s.removeClass("active"), $('link[rel~="stylesheet"]').prop("disabled", !1)
        });
        var a = $(".increaseTextSize"),
            r = $(".decreaseTextSize"),
            l = $(".resetTextSize"),
            c = 1.5,
            h = 1,
            d = +localStorage.getItem("font-size");

        function u(t) {
            var e = Math.min(c, Math.max(t, h));
            return localStorage.setItem("font-size", e), $("html").css("font-size", e + "rem"), p(e), e
        }

        function p(t) {}
        d || (d = 1), $("html").css("font-size", d + "rem"), p(d), a.on("click", function() {
            d = u(d += .1)
        }), r.on("click", function() {
            d = u(d -= .1)
        }), l.on("click", function() {
            d = u(1)
        })
    }), $(".ask-button").attr("tabindex", 0), $("body").on("click", function(t) {
        try {
            $(".ask-panel").collapse("hide")
        } catch (t) {}
    }), $(document).ready(pane), $(window).on("resize", function() {
        pane()
    });
var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};

function escapeHtml(t) {
    return String(t).replace(/[&<>"'\/]/g, function(t) {
        return entityMap[t]
    })
}
window.onload = function() {
    var t = document.querySelectorAll("pre code");
    if (t.length)
        for (var e = 0, i = t.length; e < i; e++) {
            var n = t[e],
                s = n.innerHTML;
            s = escapeHtml(s), n.innerHTML = s
        }
};