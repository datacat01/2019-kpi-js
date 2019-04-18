// T: 18:20:46 13-4 / 12:09:56 28-3
// I: 1471 / 3.3.13
// U: spotGroup=ENGADGET / /spot/sp_f76RE06N

! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    n(1), e.exports = n(7)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
        if ("function" != typeof e) throw new TypeError("predicate must be a function");
        for (var t, n = Object(this), r = n.length >>> 0, i = arguments[1], o = 0; o < r; o++)
            if (t = n[o], e.call(i, t, o, n)) return t
    }
    var i = n(2);
    n(3), (0, i.supportCustomEvent)(), window.Promise || n(4).polyfill(), window.Object.assign || (window.Object.assign = n(6)), Array.from || (Array.from = function(e) {
            return [].slice.call(e)
        }), window.Array.prototype.find || window.Object.defineProperty(window.Array.prototype, "find", {
            get: function() {
                return r
            },
            enumerable: !1,
            configurable: !1
        }),
        function(e) {
            e.startsWith || (e.startsWith = function(e) {
                return !(!e || !this || this.lastIndexOf(e, 0))
            }), e.endsWith || (e.endsWith = function(e) {
                var t = e && this ? this.length - e.length : -1;
                return t >= 0 && this.lastIndexOf(e, t) === t
            })
        }(String.prototype)
}, function(e, t) {
    "use strict";

    function n() {
        try {
            new CustomEvent("test")
        } catch (e) {
            r.prototype = window.Event.prototype, window.CustomEvent = r
        }
    }

    function r(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.supportCustomEvent = n
}, function(e, t) {
    ! function(e, t) {
        "use strict";

        function n(e) {
            this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || l(), this.isIntersecting = !!e.intersectionRect;
            var t = this.boundingClientRect,
                n = t.width * t.height,
                r = this.intersectionRect,
                i = r.width * r.height;
            n ? this.intersectionRatio = Number((i / n).toFixed(4)) : this.intersectionRatio = this.isIntersecting ? 1 : 0
        }

        function r(e, t) {
            var n = t || {};
            if ("function" != typeof e) throw new Error("callback must be a function");
            if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
            this._checkForIntersections = o(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
                return e.value + e.unit
            }).join(" ")
        }

        function i() {
            return e.performance && performance.now && performance.now()
        }

        function o(e, t) {
            var n = null;
            return function() {
                n || (n = setTimeout(function() {
                    e(), n = null
                }, t))
            }
        }

        function a(e, t, n, r) {
            "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
        }

        function s(e, t, n, r) {
            "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
        }

        function u(e, t) {
            var n = Math.max(e.top, t.top),
                r = Math.min(e.bottom, t.bottom),
                i = Math.max(e.left, t.left),
                o = Math.min(e.right, t.right),
                a = o - i,
                s = r - n;
            return a >= 0 && s >= 0 && {
                top: n,
                bottom: r,
                left: i,
                right: o,
                width: a,
                height: s
            }
        }

        function c(e) {
            var t;
            try {
                t = e.getBoundingClientRect()
            } catch (e) {}
            return t ? (t.width && t.height || (t = {
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left,
                width: t.right - t.left,
                height: t.bottom - t.top
            }), t) : l()
        }

        function l() {
            return {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }

        function d(e, t) {
            for (var n = t; n;) {
                if (n == e) return !0;
                n = f(n)
            }
            return !1
        }

        function f(e) {
            var t = e.parentNode;
            return t && 11 == t.nodeType && t.host ? t.host : t
        }
        if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) return void("isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
            get: function() {
                return this.intersectionRatio > 0
            }
        }));
        var p = [];
        r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(e) {
            var t = this._observationTargets.some(function(t) {
                return t.element == e
            });
            if (!t) {
                if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                this._registerInstance(), this._observationTargets.push({
                    element: e,
                    entry: null
                }), this._monitorIntersections(), this._checkForIntersections()
            }
        }, r.prototype.unobserve = function(e) {
            this._observationTargets = this._observationTargets.filter(function(t) {
                return t.element != e
            }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
        }, r.prototype.disconnect = function() {
            this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
        }, r.prototype.takeRecords = function() {
            var e = this._queuedEntries.slice();
            return this._queuedEntries = [], e
        }, r.prototype._initThresholds = function(e) {
            var t = e || [0];
            return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, n) {
                if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                return e !== n[t - 1]
            })
        }, r.prototype._parseRootMargin = function(e) {
            var t = e || "0px",
                n = t.split(/\s+/).map(function(e) {
                    var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                    if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                    return {
                        value: parseFloat(t[1]),
                        unit: t[2]
                    }
                });
            return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n
        }, r.prototype._monitorIntersections = function() {
            this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }))))
        }, r.prototype._unmonitorIntersections = function() {
            this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
        }, r.prototype._checkForIntersections = function() {
            var e = this._rootIsInDom(),
                t = e ? this._getRootRect() : l();
            this._observationTargets.forEach(function(r) {
                var o = r.element,
                    a = c(o),
                    s = this._rootContainsTarget(o),
                    u = r.entry,
                    l = e && s && this._computeTargetAndRootIntersection(o, t),
                    d = r.entry = new n({
                        time: i(),
                        target: o,
                        boundingClientRect: a,
                        rootBounds: t,
                        intersectionRect: l
                    });
                u ? e && s ? this._hasCrossedThreshold(u, d) && this._queuedEntries.push(d) : u && u.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
            }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
        }, r.prototype._computeTargetAndRootIntersection = function(n, r) {
            if ("none" != e.getComputedStyle(n).display) {
                for (var i = c(n), o = i, a = f(n), s = !1; !s;) {
                    var l = null,
                        d = 1 == a.nodeType ? e.getComputedStyle(a) : {};
                    if ("none" == d.display) return;
                    if (a == this.root || a == t ? (s = !0, l = r) : a != t.body && a != t.documentElement && "visible" != d.overflow && (l = c(a)), l && (o = u(l, o), !o)) break;
                    a = f(a)
                }
                return o
            }
        }, r.prototype._getRootRect = function() {
            var e;
            if (this.root) e = c(this.root);
            else {
                var n = t.documentElement,
                    r = t.body;
                e = {
                    top: 0,
                    left: 0,
                    right: n.clientWidth || r.clientWidth,
                    width: n.clientWidth || r.clientWidth,
                    bottom: n.clientHeight || r.clientHeight,
                    height: n.clientHeight || r.clientHeight
                }
            }
            return this._expandRectByRootMargin(e)
        }, r.prototype._expandRectByRootMargin = function(e) {
            var t = this._rootMarginValues.map(function(t, n) {
                    return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                }),
                n = {
                    top: e.top - t[0],
                    right: e.right + t[1],
                    bottom: e.bottom + t[2],
                    left: e.left - t[3]
                };
            return n.width = n.right - n.left, n.height = n.bottom - n.top, n
        }, r.prototype._hasCrossedThreshold = function(e, t) {
            var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
            if (n !== r)
                for (var i = 0; i < this.thresholds.length; i++) {
                    var o = this.thresholds[i];
                    if (o == n || o == r || o < n != o < r) return !0
                }
        }, r.prototype._rootIsInDom = function() {
            return !this.root || d(t, this.root)
        }, r.prototype._rootContainsTarget = function(e) {
            return d(this.root || t, e)
        }, r.prototype._registerInstance = function() {
            p.indexOf(this) < 0 && p.push(this)
        }, r.prototype._unregisterInstance = function() {
            var e = p.indexOf(this);
            e != -1 && p.splice(e, 1)
        }, e.IntersectionObserver = r, e.IntersectionObserverEntry = n
    }(window, document)
}, function(e, t, n) {
    (function(t, n) {
        ! function(t, n) {
            e.exports = n()
        }(this, function() {
            "use strict";

            function e(e) {
                var t = typeof e;
                return null !== e && ("object" === t || "function" === t)
            }

            function r(e) {
                return "function" == typeof e
            }

            function i(e) {
                $ = e
            }

            function o(e) {
                W = e
            }

            function a() {
                return function() {
                    return t.nextTick(d)
                }
            }

            function s() {
                return "undefined" != typeof B ? function() {
                    B(d)
                } : l()
            }

            function u() {
                var e = 0,
                    t = new J(d),
                    n = document.createTextNode("");
                return t.observe(n, {
                        characterData: !0
                    }),
                    function() {
                        n.data = e = ++e % 2
                    }
            }

            function c() {
                var e = new MessageChannel;
                return e.port1.onmessage = d,
                    function() {
                        return e.port2.postMessage(0)
                    }
            }

            function l() {
                var e = setTimeout;
                return function() {
                    return e(d, 1)
                }
            }

            function d() {
                for (var e = 0; e < z; e += 2) {
                    var t = Q[e],
                        n = Q[e + 1];
                    t(n), Q[e] = void 0, Q[e + 1] = void 0
                }
                z = 0
            }

            function f() {
                try {
                    var e = Function("return this")().require("vertx");
                    return B = e.runOnLoop || e.runOnContext, s()
                } catch (e) {
                    return l()
                }
            }

            function p(e, t) {
                var n = this,
                    r = new this.constructor(v);
                void 0 === r[ee] && M(r);
                var i = n._state;
                if (i) {
                    var o = arguments[i - 1];
                    W(function() {
                        return P(i, r, o, n._result)
                    })
                } else T(n, r, e, t);
                return r
            }

            function h(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t) return e;
                var n = new t(v);
                return S(n, e), n
            }

            function v() {}

            function m() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function g() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function y(e) {
                try {
                    return e.then
                } catch (e) {
                    return ie.error = e, ie
                }
            }

            function _(e, t, n, r) {
                try {
                    e.call(t, n, r)
                } catch (e) {
                    return e
                }
            }

            function b(e, t, n) {
                W(function(e) {
                    var r = !1,
                        i = _(n, t, function(n) {
                            r || (r = !0, t !== n ? S(e, n) : A(e, n))
                        }, function(t) {
                            r || (r = !0, k(e, t))
                        }, "Settle: " + (e._label || " unknown promise"));
                    !r && i && (r = !0, k(e, i))
                }, e)
            }

            function w(e, t) {
                t._state === ne ? A(e, t._result) : t._state === re ? k(e, t._result) : T(t, void 0, function(t) {
                    return S(e, t)
                }, function(t) {
                    return k(e, t)
                })
            }

            function E(e, t, n) {
                t.constructor === e.constructor && n === p && t.constructor.resolve === h ? w(e, t) : n === ie ? (k(e, ie.error), ie.error = null) : void 0 === n ? A(e, t) : r(n) ? b(e, t, n) : A(e, t)
            }

            function S(t, n) {
                t === n ? k(t, m()) : e(n) ? E(t, n, y(n)) : A(t, n)
            }

            function O(e) {
                e._onerror && e._onerror(e._result), x(e)
            }

            function A(e, t) {
                e._state === te && (e._result = t, e._state = ne, 0 !== e._subscribers.length && W(x, e))
            }

            function k(e, t) {
                e._state === te && (e._state = re, e._result = t, W(O, e))
            }

            function T(e, t, n, r) {
                var i = e._subscribers,
                    o = i.length;
                e._onerror = null, i[o] = t, i[o + ne] = n, i[o + re] = r, 0 === o && e._state && W(x, e)
            }

            function x(e) {
                var t = e._subscribers,
                    n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, i = void 0, o = e._result, a = 0; a < t.length; a += 3) r = t[a], i = t[a + n], r ? P(n, r, i, o) : i(o);
                    e._subscribers.length = 0
                }
            }

            function I(e, t) {
                try {
                    return e(t)
                } catch (e) {
                    return ie.error = e, ie
                }
            }

            function P(e, t, n, i) {
                var o = r(n),
                    a = void 0,
                    s = void 0,
                    u = void 0,
                    c = void 0;
                if (o) {
                    if (a = I(n, i), a === ie ? (c = !0, s = a.error, a.error = null) : u = !0, t === a) return void k(t, g())
                } else a = i, u = !0;
                t._state !== te || (o && u ? S(t, a) : c ? k(t, s) : e === ne ? A(t, a) : e === re && k(t, a))
            }

            function C(e, t) {
                try {
                    t(function(t) {
                        S(e, t)
                    }, function(t) {
                        k(e, t)
                    })
                } catch (t) {
                    k(e, t)
                }
            }

            function R() {
                return oe++
            }

            function M(e) {
                e[ee] = oe++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function D() {
                return new Error("Array Methods must be provided an Array")
            }

            function L(e) {
                return new ae(this, e).promise
            }

            function j(e) {
                var t = this;
                return new t(H(e) ? function(n, r) {
                    for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
                } : function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }

            function N(e) {
                var t = this,
                    n = new t(v);
                return k(n, e), n
            }

            function F() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function U() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function V() {
                var e = void 0;
                if ("undefined" != typeof n) e = n;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === r && !t.cast) return
                }
                e.Promise = se
            }
            var q = void 0;
            q = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var H = q,
                z = 0,
                B = void 0,
                $ = void 0,
                W = function(e, t) {
                    Q[z] = e, Q[z + 1] = t, z += 2, 2 === z && ($ ? $(d) : Z())
                },
                G = "undefined" != typeof window ? window : void 0,
                K = G || {},
                J = K.MutationObserver || K.WebKitMutationObserver,
                X = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
                Y = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                Q = new Array(1e3),
                Z = void 0;
            Z = X ? a() : J ? u() : Y ? c() : void 0 === G ? f() : l();
            var ee = Math.random().toString(36).substring(2),
                te = void 0,
                ne = 1,
                re = 2,
                ie = {
                    error: null
                },
                oe = 0,
                ae = function() {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(v), this.promise[ee] || M(this.promise), H(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && A(this.promise, this._result))) : k(this.promise, D())
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === te && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor,
                            r = n.resolve;
                        if (r === h) {
                            var i = y(e);
                            if (i === p && e._state !== te) this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof i) this._remaining--, this._result[t] = e;
                            else if (n === se) {
                                var o = new n(v);
                                E(o, e, i), this._willSettleAt(o, t)
                            } else this._willSettleAt(new n(function(t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(r(e), t)
                    }, e.prototype._settledAt = function(e, t, n) {
                        var r = this.promise;
                        r._state === te && (this._remaining--, e === re ? k(r, n) : this._result[t] = n), 0 === this._remaining && A(r, this._result)
                    }, e.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        T(e, void 0, function(e) {
                            return n._settledAt(ne, t, e)
                        }, function(e) {
                            return n._settledAt(re, t, e)
                        })
                    }, e
                }(),
                se = function() {
                    function e(t) {
                        this[ee] = R(), this._result = this._state = void 0, this._subscribers = [], v !== t && ("function" != typeof t && F(), this instanceof e ? C(this, t) : U())
                    }
                    return e.prototype.catch = function(e) {
                        return this.then(null, e)
                    }, e.prototype.finally = function(e) {
                        var t = this,
                            n = t.constructor;
                        return r(e) ? t.then(function(t) {
                            return n.resolve(e()).then(function() {
                                return t
                            })
                        }, function(t) {
                            return n.resolve(e()).then(function() {
                                throw t
                            })
                        }) : t.then(e, e)
                    }, e
                }();
            return se.prototype.then = p, se.all = L, se.race = j, se.resolve = h, se.reject = N, se._setScheduler = i, se._setAsap = o, se._asap = W, se.polyfill = V, se.Promise = se, se
        })
    }).call(t, n(5), function() {
        return this
    }())
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }

    function o(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }

    function a() {
        v && p && (v = !1, p.length ? h = p.concat(h) : m = -1, h.length && s())
    }

    function s() {
        if (!v) {
            var e = i(a);
            v = !0;
            for (var t = h.length; t;) {
                for (p = h, h = []; ++m < t;) p && p[m].run();
                m = -1, t = h.length
            }
            p = null, v = !1, o(e)
        }
    }

    function u(e, t) {
        this.fun = e, this.array = t
    }

    function c() {}
    var l, d, f = e.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            d = r
        }
    }();
    var p, h = [],
        v = !1,
        m = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new u(e, t)), 1 !== h.length || v || i(s)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function(e) {
        return []
    }, f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }

    function r() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            var r = Object.getOwnPropertyNames(t).map(function(e) {
                return t[e]
            });
            if ("0123456789" !== r.join("")) return !1;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                i[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
        } catch (e) {
            return !1
        }
    }
    var i = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
    e.exports = r() ? Object.assign : function(e, t) {
        for (var r, s, u = n(e), c = 1; c < arguments.length; c++) {
            r = Object(arguments[c]);
            for (var l in r) o.call(r, l) && (u[l] = r[l]);
            if (i) {
                s = i(r);
                for (var d = 0; d < s.length; d++) a.call(r, s[d]) && (u[s[d]] = r[s[d]])
            }
        }
        return u
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t, n) {
        var r = e.forceLazyLoadMargin(),
            i = e.forceLazyLoadTimeout(),
            o = parseInt(r) === r || parseInt(i) === i;
        return {
            shouldLazyLoad: o,
            forcedLazyMargin: r,
            forcedLazyTimeout: i
        }
    }

    function o(e, t, n) {
        e.userPlatform = (0, x.resolveUserPlatform)();
        var r = new k.default(E.spotId, t, e),
            o = function() {
                return y(r, t, n)
            },
            a = i(r, E.spotId, t),
            s = a.shouldLazyLoad,
            c = a.forcedLazyMargin,
            l = a.forcedLazyTimeout;
        if (s || (s = e && R.default.get(e, "ads.spot.features.recirculation.lazy_load_enabled", !1)), s) {
            var d = R.default.get(e, "ads.spot.features.recirculation.lazy_load_distance"),
                f = R.default.get(e, "ads.spot.features.recirculation.lazy_load_timeout"),
                p = c || d,
                h = l || f;
            D("TMS lazy margin: " + p), D("TMS lazy Load(timeout) " + h), u(o, t, p, h)
        } else D("No lazy load config"), o()
    }

    function a(e, t, n, r) {
        var i = function() {};
        if (parseInt(n) !== n) return D("Invalid lazy load margin distance: " + n), i;
        if (0 === n) return D("Recieved 0 margin distance, ignoring"), i;
        var o = new IntersectionObserver(function(t) {
            var n = (0, v.default)(t, 1),
                i = n[0];
            i.isIntersecting && (D("Intersection reached, initializing"), r(), e())
        }, {
            rootMargin: n + "px"
        });
        return o.observe(t),
            function() {
                o.disconnect()
            }
    }

    function s(e, t, n, r) {
        if (Number(n) !== n) return D("Invalid lazy load margin timeout: " + n),
            function() {};
        var i = setTimeout(function() {
            D("Timeout reached, initializing"), r(), e()
        }, 1e3 * n);
        return function() {
            clearTimeout(i)
        }
    }

    function u(e, t) {
        function n() {
            o(), u()
        }
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : j,
            o = a(e, t, r, n),
            u = s(e, t, i, n)
    }

    function c(e) {
        var t = e.querySelector('div[data-layout="siderail"]');
        if (t) {
            var n = e.querySelector("div[data-items-scroll]");
            if (n) {
                var r = n.getBoundingClientRect(),
                    i = r.width,
                    o = r.height;
                t.style.width = i + "px", t.style.height = o + "px"
            }
        }
    }
    var l = n(8),
        d = r(l),
        f = n(11),
        p = r(f),
        h = n(83),
        v = r(h),
        m = n(90),
        g = r(m),
        y = function() {
            var e = (0, p.default)(d.default.mark(function e(t, n, r) {
                var i, o, a, s, u;
                return d.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (D("RC config", E.config), n.setAttribute("data-spotim-ready", !0), n.setAttribute("data-spotim-instance", r), i = (0, M.resolveSourceFeatureString)(), o = R.default.get(E.config, "ads.spot.features." + i), !o || o.enabled !== !1) {
                                e.next = 8;
                                break
                            }
                            return D(i + " is disabled."), e.abrupt("return");
                        case 8:
                            a = null, s = "NO_MARKUP" === E.content, s ? a = n.querySelector("div") : (a = document.createDocumentFragment(), a.appendChild(document.createElement("div")), a.firstChild.innerHTML = E.css + E.content), e.prev = 11, t.onBeforeRender(a.firstChild), s || [].concat((0, g.default)(a.childNodes)).forEach(function(e) {
                                n.appendChild(e)
                            }), e.next = 21;
                            break;
                        case 16:
                            throw e.prev = 16, e.t0 = e.catch(11), s || (n.innerHTML = E.css + E.content), (0, S.reportError)(e.t0, {
                                errorSource: "initialize"
                            }), e.t0;
                        case 21:
                            try {
                                n.setAttribute("data-spotim-useragent", navigator.userAgent), u = (0, x.isPhone)() ? "mobile" : "desktop", n.setAttribute("data-spotim-device", u), n.setAttribute("data-spotim-platform", (0, x.resolveUserPlatform)())
                            } catch (e) {}
                            return (0, w.initialize)(n, E.spotId, t), e.next = 25, (0, I.lazyLoad)();
                        case 25:
                            if (n.querySelector(".spotim-recirculation").setAttribute("style", ""), c(n), !t.deferInitAds) {
                                e.next = 30;
                                break
                            }
                            return t.deferInitAds(P.initialize, E.spotId, n, t, E.config.ads), e.abrupt("return");
                        case 30:
                            setTimeout(function() {
                                return (0, P.initialize)(E.spotId, n, t, E.config.ads)
                            }, 100);
                        case 31:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [11, 16]
                ])
            }));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }(),
        _ = n(95),
        b = r(_),
        w = n(96),
        E = n(144),
        S = n(146),
        O = n(117),
        A = n(241),
        k = r(A),
        T = n(113),
        x = n(98),
        I = n(229),
        P = n(285),
        C = n(118),
        R = r(C),
        M = n(231),
        D = (0, T.getDebugger)("recirculation"),
        L = 500,
        j = 0;
    window.__SPOTIM_SPOT_ID__ = E.spotId;
    var N = b.default.getKey(window.location.href.toLowerCase(), "spotim_rc_whitelist");
    if (N && D("Force whitelist"), (0, O.whitelistUrl)(window.location.href, E.config.whitelist) || N) {
        var F = [].concat((0, g.default)(document.querySelectorAll('[data-spotim-module="recirculation"]')));
        if (F.length > 0)
            for (var U = 0; U < F.length; U++)
                if ("true" !== F[U].getAttribute("data-spotim-ready")) {
                    o(E.config, F[U], U);
                    break
                }
    } else D("URL not whitelisted"), D(E.config.whitelist)
}, function(e, t, n) {
    e.exports = n(9)
}, function(e, t, n) {
    var r = function() {
            return this
        }() || Function("return this")(),
        i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        o = i && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, e.exports = n(10), i) r.regeneratorRuntime = o;
    else try {
        delete r.regeneratorRuntime
    } catch (e) {
        r.regeneratorRuntime = void 0
    }
}, function(e, t) {
    ! function(t) {
        "use strict";

        function n(e, t, n, r) {
            var o = t && t.prototype instanceof i ? t : i,
                a = Object.create(o.prototype),
                s = new p(r || []);
            return a._invoke = c(e, n, s), a
        }

        function r(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }

        function i() {}

        function o() {}

        function a() {}

        function s(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function u(e) {
            function t(n, i, o, a) {
                var s = r(e[n], e, i);
                if ("throw" !== s.type) {
                    var u = s.arg,
                        c = u.value;
                    return c && "object" == typeof c && y.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
                        t("next", e, o, a)
                    }, function(e) {
                        t("throw", e, o, a)
                    }) : Promise.resolve(c).then(function(e) {
                        u.value = e, o(u)
                    }, a)
                }
                a(s.arg)
            }

            function n(e, n) {
                function r() {
                    return new Promise(function(r, i) {
                        t(e, n, r, i)
                    })
                }
                return i = i ? i.then(r, r) : r()
            }
            var i;
            this._invoke = n
        }

        function c(e, t, n) {
            var i = A;
            return function(o, a) {
                if (i === T) throw new Error("Generator is already running");
                if (i === x) {
                    if ("throw" === o) throw a;
                    return v()
                }
                for (n.method = o, n.arg = a;;) {
                    var s = n.delegate;
                    if (s) {
                        var u = l(s, n);
                        if (u) {
                            if (u === I) continue;
                            return u
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if (i === A) throw i = x, n.arg;
                        n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    i = T;
                    var c = r(e, t, n);
                    if ("normal" === c.type) {
                        if (i = n.done ? x : k, c.arg === I) continue;
                        return {
                            value: c.arg,
                            done: n.done
                        }
                    }
                    "throw" === c.type && (i = x, n.method = "throw", n.arg = c.arg)
                }
            }
        }

        function l(e, t) {
            var n = e.iterator[t.method];
            if (n === m) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = m, l(e, t), "throw" === t.method)) return I;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return I
            }
            var i = r(n, e.iterator, t.arg);
            if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, I;
            var o = i.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = m), t.delegate = null, I) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, I)
        }

        function d(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function f(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function p(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(d, this), this.reset(!0)
        }

        function h(e) {
            if (e) {
                var t = e[b];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        r = function t() {
                            for (; ++n < e.length;)
                                if (y.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = m, t.done = !0, t
                        };
                    return r.next = r
                }
            }
            return {
                next: v
            }
        }

        function v() {
            return {
                value: m,
                done: !0
            }
        }
        var m, g = Object.prototype,
            y = g.hasOwnProperty,
            _ = "function" == typeof Symbol ? Symbol : {},
            b = _.iterator || "@@iterator",
            w = _.asyncIterator || "@@asyncIterator",
            E = _.toStringTag || "@@toStringTag",
            S = "object" == typeof e,
            O = t.regeneratorRuntime;
        if (O) return void(S && (e.exports = O));
        O = t.regeneratorRuntime = S ? e.exports : {}, O.wrap = n;
        var A = "suspendedStart",
            k = "suspendedYield",
            T = "executing",
            x = "completed",
            I = {},
            P = {};
        P[b] = function() {
            return this
        };
        var C = Object.getPrototypeOf,
            R = C && C(C(h([])));
        R && R !== g && y.call(R, b) && (P = R);
        var M = a.prototype = i.prototype = Object.create(P);
        o.prototype = M.constructor = a, a.constructor = o, a[E] = o.displayName = "GeneratorFunction", O.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name))
        }, O.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, E in e || (e[E] = "GeneratorFunction")), e.prototype = Object.create(M), e
        }, O.awrap = function(e) {
            return {
                __await: e
            }
        }, s(u.prototype), u.prototype[w] = function() {
            return this
        }, O.AsyncIterator = u, O.async = function(e, t, r, i) {
            var o = new u(n(e, t, r, i));
            return O.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                return e.done ? e.value : o.next()
            })
        }, s(M), M[E] = "Generator", M[b] = function() {
            return this
        }, M.toString = function() {
            return "[object Generator]"
        }, O.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, O.values = h, p.prototype = {
            constructor: p,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.method = "next", this.arg = m, this.tryEntries.forEach(f), !e)
                    for (var t in this) "t" === t.charAt(0) && y.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = m)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0],
                    t = e.completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(e) {
                function t(t, r) {
                    return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = m), !!r
                }
                if (this.done) throw e;
                for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r],
                        o = i.completion;
                    if ("root" === i.tryLoc) return t("end");
                    if (i.tryLoc <= this.prev) {
                        var a = y.call(i, "catchLoc"),
                            s = y.call(i, "finallyLoc");
                        if (a && s) {
                            if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                        } else if (a) {
                            if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && y.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var i = r;
                        break
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var o = i ? i.completion : {};
                return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, I) : this.complete(o)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), I
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), f(n), I
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            f(n)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: h(e),
                    resultName: t,
                    nextLoc: n
                }, "next" === this.method && (this.arg = m), I
            }
        }
    }(function() {
        return this
    }() || Function("return this")())
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(12),
        o = r(i);
    t.default = function(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new o.default(function(e, n) {
                function r(i, a) {
                    try {
                        var s = t[i](a),
                            u = s.value
                    } catch (e) {
                        return void n(e)
                    }
                    return s.done ? void e(u) : o.default.resolve(u).then(function(e) {
                        r("next", e)
                    }, function(e) {
                        r("throw", e)
                    })
                }
                return r("next")
            })
        }
    }
}, function(e, t, n) {
    e.exports = {
        default: n(13),
        __esModule: !0
    }
}, function(e, t, n) {
    n(14), n(15), n(59), n(63), n(81), n(82), e.exports = n(23).Promise
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    var r = n(16)(!0);
    n(19)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    var r = n(17),
        i = n(18);
    e.exports = function(e) {
        return function(t, n) {
            var o, a, s = String(i(t)),
                u = r(n),
                c = s.length;
            return u < 0 || u >= c ? e ? "" : void 0 : (o = s.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : o : e ? s.slice(u, u + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
        }
    }
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(20),
        i = n(21),
        o = n(37),
        a = n(26),
        s = n(38),
        u = n(39),
        c = n(55),
        l = n(57),
        d = n(56)("iterator"),
        f = !([].keys && "next" in [].keys()),
        p = "@@iterator",
        h = "keys",
        v = "values",
        m = function() {
            return this
        };
    e.exports = function(e, t, n, g, y, _, b) {
        u(n, t, g);
        var w, E, S, O = function(e) {
                if (!f && e in x) return x[e];
                switch (e) {
                    case h:
                        return function() {
                            return new n(this, e)
                        };
                    case v:
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            A = t + " Iterator",
            k = y == v,
            T = !1,
            x = e.prototype,
            I = x[d] || x[p] || y && x[y],
            P = I || O(y),
            C = y ? k ? O("entries") : P : void 0,
            R = "Array" == t ? x.entries || I : I;
        if (R && (S = l(R.call(new e)), S !== Object.prototype && S.next && (c(S, A, !0), r || "function" == typeof S[d] || a(S, d, m))), k && I && I.name !== v && (T = !0, P = function() {
                return I.call(this)
            }), r && !b || !f && !T && x[d] || a(x, d, P), s[t] = P, s[A] = m, y)
            if (w = {
                    values: k ? P : O(v),
                    keys: _ ? P : O(h),
                    entries: C
                }, b)
                for (E in w) E in x || o(x, E, w[E]);
            else i(i.P + i.F * (f || T), t, w);
        return w
    }
}, function(e, t) {
    e.exports = !0
}, function(e, t, n) {
    var r = n(22),
        i = n(23),
        o = n(24),
        a = n(26),
        s = n(36),
        u = "prototype",
        c = function(e, t, n) {
            var l, d, f, p = e & c.F,
                h = e & c.G,
                v = e & c.S,
                m = e & c.P,
                g = e & c.B,
                y = e & c.W,
                _ = h ? i : i[t] || (i[t] = {}),
                b = _[u],
                w = h ? r : v ? r[t] : (r[t] || {})[u];
            h && (n = t);
            for (l in n) d = !p && w && void 0 !== w[l], d && s(_, l) || (f = d ? w[l] : n[l], _[l] = h && "function" != typeof w[l] ? n[l] : g && d ? o(f, r) : y && w[l] == f ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t[u] = e[u], t
            }(f) : m && "function" == typeof f ? o(Function.call, f) : f, m && ((_.virtual || (_.virtual = {}))[l] = f, e & c.R && b && !b[l] && a(b, l, f)))
        };
    c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t) {
    var n = e.exports = {
        version: "2.6.5"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    var r = n(25);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, n) {
    var r = n(27),
        i = n(35);
    e.exports = n(31) ? function(e, t, n) {
        return r.f(e, t, i(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    var r = n(28),
        i = n(30),
        o = n(34),
        a = Object.defineProperty;
    t.f = n(31) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = o(t, !0), r(n), i) try {
            return a(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    var r = n(29);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, n) {
    e.exports = !n(31) && !n(32)(function() {
        return 7 != Object.defineProperty(n(33)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    e.exports = !n(32)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, n) {
    var r = n(29),
        i = n(22).document,
        o = r(i) && r(i.createElement);
    e.exports = function(e) {
        return o ? i.createElement(e) : {}
    }
}, function(e, t, n) {
    var r = n(29);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, i;
        if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
        if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
        if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    e.exports = n(26)
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    "use strict";
    var r = n(40),
        i = n(35),
        o = n(55),
        a = {};
    n(26)(a, n(56)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = r(a, {
            next: i(1, n)
        }), o(e, t + " Iterator")
    }
}, function(e, t, n) {
    var r = n(28),
        i = n(41),
        o = n(53),
        a = n(50)("IE_PROTO"),
        s = function() {},
        u = "prototype",
        c = function() {
            var e, t = n(33)("iframe"),
                r = o.length,
                i = "<",
                a = ">";
            for (t.style.display = "none", n(54).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(i + "script" + a + "document.F=Object" + i + "/script" + a), e.close(), c = e.F; r--;) delete c[u][o[r]];
            return c()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s[u] = r(e), n = new s, s[u] = null, n[a] = e) : n = c(), void 0 === t ? n : i(n, t)
    }
}, function(e, t, n) {
    var r = n(27),
        i = n(28),
        o = n(42);
    e.exports = n(31) ? Object.defineProperties : function(e, t) {
        i(e);
        for (var n, a = o(t), s = a.length, u = 0; s > u;) r.f(e, n = a[u++], t[n]);
        return e
    }
}, function(e, t, n) {
    var r = n(43),
        i = n(53);
    e.exports = Object.keys || function(e) {
        return r(e, i)
    }
}, function(e, t, n) {
    var r = n(36),
        i = n(44),
        o = n(47)(!1),
        a = n(50)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = i(e),
            u = 0,
            c = [];
        for (n in s) n != a && r(s, n) && c.push(n);
        for (; t.length > u;) r(s, n = t[u++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function(e, t, n) {
    var r = n(45),
        i = n(18);
    e.exports = function(e) {
        return r(i(e))
    }
}, function(e, t, n) {
    var r = n(46);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t, n) {
    var r = n(44),
        i = n(48),
        o = n(49);
    e.exports = function(e) {
        return function(t, n, a) {
            var s, u = r(t),
                c = i(u.length),
                l = o(a, c);
            if (e && n != n) {
                for (; c > l;)
                    if (s = u[l++], s != s) return !0
            } else
                for (; c > l; l++)
                    if ((e || l in u) && u[l] === n) return e || l || 0;
            return !e && -1
        }
    }
}, function(e, t, n) {
    var r = n(17),
        i = Math.min;
    e.exports = function(e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}, function(e, t, n) {
    var r = n(17),
        i = Math.max,
        o = Math.min;
    e.exports = function(e, t) {
        return e = r(e), e < 0 ? i(e + t, 0) : o(e, t)
    }
}, function(e, t, n) {
    var r = n(51)("keys"),
        i = n(52);
    e.exports = function(e) {
        return r[e] || (r[e] = i(e))
    }
}, function(e, t, n) {
    var r = n(23),
        i = n(22),
        o = "__core-js_shared__",
        a = i[o] || (i[o] = {});
    (e.exports = function(e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: r.version,
        mode: n(20) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    var r = n(22).document;
    e.exports = r && r.documentElement
}, function(e, t, n) {
    var r = n(27).f,
        i = n(36),
        o = n(56)("toStringTag");
    e.exports = function(e, t, n) {
        e && !i(e = n ? e : e.prototype, o) && r(e, o, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    var r = n(51)("wks"),
        i = n(52),
        o = n(22).Symbol,
        a = "function" == typeof o,
        s = e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        };
    s.store = r
}, function(e, t, n) {
    var r = n(36),
        i = n(58),
        o = n(50)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function(e, t, n) {
    var r = n(18);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t, n) {
    n(60);
    for (var r = n(22), i = n(26), o = n(38), a = n(56)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
        var c = s[u],
            l = r[c],
            d = l && l.prototype;
        d && !d[a] && i(d, a, c), o[c] = o.Array
    }
}, function(e, t, n) {
    "use strict";
    var r = n(61),
        i = n(62),
        o = n(38),
        a = n(44);
    e.exports = n(19)(Array, "Array", function(e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function(e, t) {
    e.exports = function() {}
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    "use strict";
    var r, i, o, a, s = n(20),
        u = n(22),
        c = n(24),
        l = n(64),
        d = n(21),
        f = n(29),
        p = n(25),
        h = n(65),
        v = n(66),
        m = n(70),
        g = n(71).set,
        y = n(73)(),
        _ = n(74),
        b = n(75),
        w = n(76),
        E = n(77),
        S = "Promise",
        O = u.TypeError,
        A = u.process,
        k = A && A.versions,
        T = k && k.v8 || "",
        x = u[S],
        I = "process" == l(A),
        P = function() {},
        C = i = _.f,
        R = !! function() {
            try {
                var e = x.resolve(1),
                    t = (e.constructor = {})[n(56)("species")] = function(e) {
                        e(P, P)
                    };
                return (I || "function" == typeof PromiseRejectionEvent) && e.then(P) instanceof t && 0 !== T.indexOf("6.6") && w.indexOf("Chrome/66") === -1
            } catch (e) {}
        }(),
        M = function(e) {
            var t;
            return !(!f(e) || "function" != typeof(t = e.then)) && t
        },
        D = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                y(function() {
                    for (var r = e._v, i = 1 == e._s, o = 0, a = function(t) {
                            var n, o, a, s = i ? t.ok : t.fail,
                                u = t.resolve,
                                c = t.reject,
                                l = t.domain;
                            try {
                                s ? (i || (2 == e._h && N(e), e._h = 1), s === !0 ? n = r : (l && l.enter(), n = s(r), l && (l.exit(), a = !0)), n === t.promise ? c(O("Promise-chain cycle")) : (o = M(n)) ? o.call(n, u, c) : u(n)) : c(r)
                            } catch (e) {
                                l && !a && l.exit(), c(e)
                            }
                        }; n.length > o;) a(n[o++]);
                    e._c = [], e._n = !1, t && !e._h && L(e)
                })
            }
        },
        L = function(e) {
            g.call(u, function() {
                var t, n, r, i = e._v,
                    o = j(e);
                if (o && (t = b(function() {
                        I ? A.emit("unhandledRejection", i, e) : (n = u.onunhandledrejection) ? n({
                            promise: e,
                            reason: i
                        }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                    }), e._h = I || j(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v
            })
        },
        j = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        N = function(e) {
            g.call(u, function() {
                var t;
                I ? A.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        F = function(e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), D(t, !0))
        },
        U = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw O("Promise can't be resolved itself");
                    (t = M(e)) ? y(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, c(U, r, 1), c(F, r, 1))
                        } catch (e) {
                            F.call(r, e)
                        }
                    }): (n._v = e, n._s = 1, D(n, !1))
                } catch (e) {
                    F.call({
                        _w: n,
                        _d: !1
                    }, e)
                }
            }
        };
    R || (x = function(e) {
        h(this, x, S, "_h"), p(e), r.call(this);
        try {
            e(c(U, this, 1), c(F, this, 1))
        } catch (e) {
            F.call(this, e)
        }
    }, r = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, r.prototype = n(78)(x.prototype, {
        then: function(e, t) {
            var n = C(m(this, x));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = I ? A.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && D(this, !1), n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), o = function() {
        var e = new r;
        this.promise = e, this.resolve = c(U, e, 1), this.reject = c(F, e, 1)
    }, _.f = C = function(e) {
        return e === x || e === a ? new o(e) : i(e)
    }), d(d.G + d.W + d.F * !R, {
        Promise: x
    }), n(55)(x, S), n(79)(S), a = n(23)[S], d(d.S + d.F * !R, S, {
        reject: function(e) {
            var t = C(this),
                n = t.reject;
            return n(e), t.promise
        }
    }), d(d.S + d.F * (s || !R), S, {
        resolve: function(e) {
            return E(s && this === a ? x : this, e)
        }
    }), d(d.S + d.F * !(R && n(80)(function(e) {
        x.all(e).catch(P)
    })), S, {
        all: function(e) {
            var t = this,
                n = C(t),
                r = n.resolve,
                i = n.reject,
                o = b(function() {
                    var n = [],
                        o = 0,
                        a = 1;
                    v(e, !1, function(e) {
                        var s = o++,
                            u = !1;
                        n.push(void 0), a++, t.resolve(e).then(function(e) {
                            u || (u = !0, n[s] = e, --a || r(n))
                        }, i)
                    }), --a || r(n)
                });
            return o.e && i(o.v), n.promise
        },
        race: function(e) {
            var t = this,
                n = C(t),
                r = n.reject,
                i = b(function() {
                    v(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, r)
                    })
                });
            return i.e && r(i.v), n.promise
        }
    })
}, function(e, t, n) {
    var r = n(46),
        i = n(56)("toStringTag"),
        o = "Arguments" == r(function() {
            return arguments
        }()),
        a = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        };
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = a(t = Object(e), i)) ? n : o ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function(e, t, n) {
    var r = n(24),
        i = n(67),
        o = n(68),
        a = n(28),
        s = n(48),
        u = n(69),
        c = {},
        l = {},
        t = e.exports = function(e, t, n, d, f) {
            var p, h, v, m, g = f ? function() {
                    return e
                } : u(e),
                y = r(n, d, t ? 2 : 1),
                _ = 0;
            if ("function" != typeof g) throw TypeError(e + " is not iterable!");
            if (o(g)) {
                for (p = s(e.length); p > _; _++)
                    if (m = t ? y(a(h = e[_])[0], h[1]) : y(e[_]), m === c || m === l) return m
            } else
                for (v = g.call(e); !(h = v.next()).done;)
                    if (m = i(v, y, h.value, t), m === c || m === l) return m
        };
    t.BREAK = c, t.RETURN = l
}, function(e, t, n) {
    var r = n(28);
    e.exports = function(e, t, n, i) {
        try {
            return i ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var o = e.return;
            throw void 0 !== o && r(o.call(e)), t
        }
    }
}, function(e, t, n) {
    var r = n(38),
        i = n(56)("iterator"),
        o = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || o[i] === e)
    }
}, function(e, t, n) {
    var r = n(64),
        i = n(56)("iterator"),
        o = n(38);
    e.exports = n(23).getIteratorMethod = function(e) {
        if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)]
    }
}, function(e, t, n) {
    var r = n(28),
        i = n(25),
        o = n(56)("species");
    e.exports = function(e, t) {
        var n, a = r(e).constructor;
        return void 0 === a || void 0 == (n = r(a)[o]) ? t : i(n)
    }
}, function(e, t, n) {
    var r, i, o, a = n(24),
        s = n(72),
        u = n(54),
        c = n(33),
        l = n(22),
        d = l.process,
        f = l.setImmediate,
        p = l.clearImmediate,
        h = l.MessageChannel,
        v = l.Dispatch,
        m = 0,
        g = {},
        y = "onreadystatechange",
        _ = function() {
            var e = +this;
            if (g.hasOwnProperty(e)) {
                var t = g[e];
                delete g[e], t()
            }
        },
        b = function(e) {
            _.call(e.data)
        };
    f && p || (f = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return g[++m] = function() {
            s("function" == typeof e ? e : Function(e), t)
        }, r(m), m
    }, p = function(e) {
        delete g[e]
    }, "process" == n(46)(d) ? r = function(e) {
        d.nextTick(a(_, e, 1))
    } : v && v.now ? r = function(e) {
        v.now(a(_, e, 1))
    } : h ? (i = new h, o = i.port2, i.port1.onmessage = b, r = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
        l.postMessage(e + "", "*")
    }, l.addEventListener("message", b, !1)) : r = y in c("script") ? function(e) {
        u.appendChild(c("script"))[y] = function() {
            u.removeChild(this), _.call(e)
        }
    } : function(e) {
        setTimeout(a(_, e, 1), 0)
    }), e.exports = {
        set: f,
        clear: p
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function(e, t, n) {
    var r = n(22),
        i = n(71).set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        s = r.Promise,
        u = "process" == n(46)(a);
    e.exports = function() {
        var e, t, n, c = function() {
            var r, i;
            for (u && (r = a.domain) && r.exit(); e;) {
                i = e.fn, e = e.next;
                try {
                    i()
                } catch (r) {
                    throw e ? n() : t = void 0, r
                }
            }
            t = void 0, r && r.enter()
        };
        if (u) n = function() {
            a.nextTick(c)
        };
        else if (!o || r.navigator && r.navigator.standalone)
            if (s && s.resolve) {
                var l = s.resolve(void 0);
                n = function() {
                    l.then(c)
                }
            } else n = function() {
                i.call(r, c)
            };
        else {
            var d = !0,
                f = document.createTextNode("");
            new o(c).observe(f, {
                characterData: !0
            }), n = function() {
                f.data = d = !d
            }
        }
        return function(r) {
            var i = {
                fn: r,
                next: void 0
            };
            t && (t.next = i), e || (e = i, n()), t = i
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t, n;
        this.promise = new e(function(e, r) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = r
        }), this.resolve = i(t), this.reject = i(n)
    }
    var i = n(25);
    e.exports.f = function(e) {
        return new r(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function(e, t, n) {
    var r = n(22),
        i = r.navigator;
    e.exports = i && i.userAgent || ""
}, function(e, t, n) {
    var r = n(28),
        i = n(29),
        o = n(74);
    e.exports = function(e, t) {
        if (r(e), i(t) && t.constructor === e) return t;
        var n = o.f(e),
            a = n.resolve;
        return a(t), n.promise
    }
}, function(e, t, n) {
    var r = n(26);
    e.exports = function(e, t, n) {
        for (var i in t) n && e[i] ? e[i] = t[i] : r(e, i, t[i]);
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(23),
        o = n(27),
        a = n(31),
        s = n(56)("species");
    e.exports = function(e) {
        var t = "function" == typeof i[e] ? i[e] : r[e];
        a && t && !t[s] && o.f(t, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, n) {
    var r = n(56)("iterator"),
        i = !1;
    try {
        var o = [7][r]();
        o.return = function() {
            i = !0
        }, Array.from(o, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !i) return !1;
        var n = !1;
        try {
            var o = [7],
                a = o[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, o[r] = function() {
                return a
            }, e(o)
        } catch (e) {}
        return n
    }
}, function(e, t, n) {
    "use strict";
    var r = n(21),
        i = n(23),
        o = n(22),
        a = n(70),
        s = n(77);
    r(r.P + r.R, "Promise", {
        finally: function(e) {
            var t = a(this, i.Promise || o.Promise),
                n = "function" == typeof e;
            return this.then(n ? function(n) {
                return s(t, e()).then(function() {
                    return n
                })
            } : e, n ? function(n) {
                return s(t, e()).then(function() {
                    throw n
                })
            } : e)
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(21),
        i = n(74),
        o = n(75);
    r(r.S, "Promise", {
        try: function(e) {
            var t = i.f(this),
                n = o(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(84),
        o = r(i),
        a = n(87),
        s = r(a);
    t.default = function() {
        function e(e, t) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = (0, s.default)(e); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    !r && u.return && u.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if ((0, o.default)(Object(t))) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
}, function(e, t, n) {
    e.exports = {
        default: n(85),
        __esModule: !0
    }
}, function(e, t, n) {
    n(59), n(15), e.exports = n(86)
}, function(e, t, n) {
    var r = n(64),
        i = n(56)("iterator"),
        o = n(38);
    e.exports = n(23).isIterable = function(e) {
        var t = Object(e);
        return void 0 !== t[i] || "@@iterator" in t || o.hasOwnProperty(r(t))
    }
}, function(e, t, n) {
    e.exports = {
        default: n(88),
        __esModule: !0
    }
}, function(e, t, n) {
    n(59), n(15), e.exports = n(89)
}, function(e, t, n) {
    var r = n(28),
        i = n(69);
    e.exports = n(23).getIterator = function(e) {
        var t = i(e);
        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
        return r(t.call(e))
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(91),
        o = r(i);
    t.default = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return (0, o.default)(e)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(92),
        __esModule: !0
    }
}, function(e, t, n) {
    n(15), n(93), e.exports = n(23).Array.from
}, function(e, t, n) {
    "use strict";
    var r = n(24),
        i = n(21),
        o = n(58),
        a = n(67),
        s = n(68),
        u = n(48),
        c = n(94),
        l = n(69);
    i(i.S + i.F * !n(80)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, i, d, f = o(e),
                p = "function" == typeof this ? this : Array,
                h = arguments.length,
                v = h > 1 ? arguments[1] : void 0,
                m = void 0 !== v,
                g = 0,
                y = l(f);
            if (m && (v = r(v, h > 2 ? arguments[2] : void 0, 2)), void 0 == y || p == Array && s(y))
                for (t = u(f.length), n = new p(t); t > g; g++) c(n, g, m ? v(f[g], g) : f[g]);
            else
                for (d = y.call(f), n = new p; !(i = d.next()).done; g++) c(n, g, m ? a(d, v, [i.value, g], !0) : i.value);
            return n.length = g, n
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(27),
        i = n(35);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, i(0, n)) : e[t] = n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return e.split("?")[0].split("#")[0]
    }

    function o(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = Object.keys(e).reduce(function(t, n) {
                return [].concat((0, y.default)(t), [n + "=" + encodeURIComponent(e[n])])
            }, []).join("&");
        return t && n.length > 0 && (n = "?" + n), n
    }

    function a(e) {
        var t = {},
            n = e.indexOf("?");
        if (n > -1) {
            var r = e.substring(n + 1);
            "" !== r && r.split("&").forEach(function(e) {
                var n = e.split("="),
                    r = (0, m.default)(n, 2),
                    i = r[0],
                    o = r[1];
                t[i] = decodeURIComponent(o)
            })
        }
        return t
    }

    function s(e) {
        var t = e.indexOf("?");
        if (t === -1) return {};
        var n = e.substring(t).slice(1).split("&"),
            r = {};
        return n.forEach(function(e) {
            e = e.split("="), "" !== e[0] && (r[e[0]] = decodeURIComponent(e[1] || ""))
        }), JSON.parse(JSON.stringify(r))
    }

    function u(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = s(e),
            i = !1;
        return r.hasOwnProperty(t) && (i = null === n || r[t] === n), i
    }

    function c(e, t) {
        var n = e,
            r = {};
        if (n) {
            var i = n.indexOf("?");
            i > -1 && (r = s(n), n = n.substring(0, i))
        } else n = "";
        var a = Object.assign(r, t),
            u = o(a);
        return u.length > 0 && (n += u), n
    }

    function l(e, t) {
        return t.reduce(function(e, t) {
            return d(e, t)
        }, e)
    }

    function d(e, t) {
        var n = e,
            r = e.indexOf("?");
        if (r !== -1) {
            var i = e.substring(0, r),
                o = e.substring(r + 1),
                a = new RegExp("&" + t + "(=[^&]*)?|^" + t + "(=[^&]*)?&?");
            o = o.replace(a, ""), n = i + (o.length > 0 ? "?" : "") + o
        }
        return n
    }

    function f(e, t) {
        t = t.replace(/[\[\]]/g, "\\$&");
        var n, r = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"),
            i = r.exec(e);
        return n = i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }

    function p(e, t, n) {
        var r = e,
            i = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
        if (e.match(i)) r = e.replace(i, "$1" + t + "=" + n + "$2");
        else {
            var o = e.indexOf("?") !== -1 ? "&" : "?";
            r = e + o + t + "=" + n
        }
        return r
    }

    function h(e) {
        return l(e, ["utm_source", "utm_medium", "utm_content", "prerender", "spot_im_state", "spot_im_comment_id", "spot_im_reply_id", "spot_im_expand_reply", "spot_im_highlight_immediate", "spot_im_scroll_to_comments", "spot_im_source", "spot_im_email_settings", "spotim_referrer"])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var v = n(83),
        m = r(v),
        g = n(90),
        y = r(g);
    t.stripQueryStringAndHash = i, t.queryStringFromObject = o, t.objectFromQueryString = a, t.default = {
        parseUrl: s,
        buildUrl: c,
        getKey: f,
        setKey: p,
        removeParams: l,
        removeSpotImParams: h,
        hasQueryString: u
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t, n) {
        O("Initializing RC"), console.log("Spot.IM Recirculation Module version " + "6e01986b\n".trim() + " deployed at Thu Mar 28 2019 12:01:07 GMT+0000 (Coordinated Universal Time)"), (0, g.setElementMark)(e, "recirculation"), (0, h.initialize)({
            spotId: t,
            uiCaptureRoot: e,
            viewportCaptureRoot: e,
            clientPlatform: (0, d.resolveUserPlatform)()
        }), (0, h.captureEvent)({
            type: "loaded",
            engineStatus: n.allowAds() ? "available" : null
        });
        var r = new m.ViewportObserver;
        r.observe(e, {
            stateChangeHandler: function(t) {
                (0, h.captureViewportEvent)(e, t.change), E.default.trigger("visibility_state_change", t)
            }
        }), (0, v.setupIntersectionObserver)(e), (0, v.observeElement)(e, function() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            h.captureIntersectionEvent.apply(void 0, [e].concat(n))
        }), n.onAfterRender(e);
        var i = (0, g.findMarkedElements)("item", {
            container: e
        });
        if (i.length > 0) {
            var a = p.config.languageDirection,
                s = p.config.cursor,
                u = p.config.must,
                c = p.config.should;
            o(e, {
                languageDirection: a,
                cursor: s,
                must: u,
                should: c,
                spotGroup: n,
                startWithItemInView: 0
            })
        }
    }

    function o(e, t) {
        var n = (t.languageDirection, t.startWithItemInView),
            r = t.cursor,
            i = t.must,
            o = t.should,
            a = t.spotGroup,
            u = e.querySelector("." + p.cssSelectors.content),
            d = [].concat((0, c.default)(u.querySelectorAll("." + p.cssSelectors.scrollable))),
            v = [].concat((0, c.default)(u.querySelectorAll("." + p.cssSelectors.item))),
            m = u.querySelector("." + p.cssSelectors.navigateForward),
            y = u.querySelector("." + p.cssSelectors.navigateBack),
            w = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                (0, b.nextPageAjax)(r, a, i, o).then(function(n) {
                    var i = n.newItems,
                        o = n.newCursor;
                    r = o;
                    var a = e,
                        s = parseInt(e.parentNode.parentNode.getAttribute("data-spotim-row")),
                        f = [].concat((0, c.default)(a.querySelectorAll("[data-spotim-cell-index]"))),
                        h = (0, _.getDeckItems)(d.length, i, s);
                    h.forEach(function(e, t) {
                        e.setAttribute("data-spotim-row-index", s), e.setAttribute("data-spotim-cell-index", t + f.length);
                        var n = e.querySelector("[data-user-image]");
                        n && (n.style.backgroundImage = "url(" + n.getAttribute("data-user-image") + ")");
                        var r = e.querySelector("[data-item-image]");
                        r && (r.style.backgroundImage = "url(" + r.getAttribute("data-item-image") + ")"), a.append(e)
                    }), 0 === h.length && (0, l.addClass)(u, p.cssSelectors.reachedEnd), t({
                        newItems: h
                    })
                })
            };
        if (e.setAttribute("data-spotim-direction", p.config.languageDirection), d.length > 0) {
            if (m && y) {
                var O = d[0],
                    A = new f.Interaction({
                        onNavigateForward: function(e) {
                            var t = e.trigger,
                                n = e.toItem;
                            (0, h.captureEvent)({
                                type: "navigate-forward",
                                trigger: t,
                                toItem: n
                            })
                        },
                        onNavigateBack: function(e) {
                            var t = e.trigger,
                                n = e.toItem;
                            (0, h.captureEvent)({
                                type: "navigate-back",
                                trigger: t,
                                toItem: n
                            })
                        },
                        onReachEnd: function() {
                            (0, l.removeClass)(u, p.cssSelectors.hasForwardItems), (0, g.removeElementMark)(u.querySelector('[data-spmark~="navigate-forward"]'), "navigate-enabled"), (0, g.setElementMark)(u.querySelector('[data-spmark~="navigate-forward"]'), "navigate-disabled")
                        },
                        onReachStart: function() {
                            (0, l.removeClass)(u, p.cssSelectors.hasBackItems), (0, g.removeElementMark)(u.querySelector('[data-spmark~="navigate-back"]'), "navigate-enabled"), (0, g.setElementMark)(u.querySelector('[data-spmark~="navigate-back"]'), "navigate-disabled")
                        },
                        onOverflowForward: function() {
                            (0, l.addClass)(u, p.cssSelectors.hasForwardItems), (0, g.removeElementMark)(u.querySelector('[data-spmark~="navigate-forward"]'), "navigate-disabled"), (0, g.setElementMark)(u.querySelector('[data-spmark~="navigate-forward"]'), "navigate-enabled")
                        },
                        onOverflowBack: function() {
                            (0, l.addClass)(u, p.cssSelectors.hasBackItems), (0, g.removeElementMark)(u.querySelector('[data-spmark~="navigate-back"]'), "navigate-disabled"), (0, g.setElementMark)(u.querySelector('[data-spmark~="navigate-back"]'), "navigate-enabled")
                        },
                        onFetchStart: function() {
                            (0, l.addClass)(u, p.cssSelectors.fetching)
                        },
                        onFetchComplete: function() {
                            (0, l.removeClass)(u, p.cssSelectors.fetching)
                        },
                        fetchNextPage: w
                    });
                A.initialize({
                    startWithItemInView: n,
                    container: u,
                    scrollable: O,
                    items: v,
                    forwardButton: m,
                    backButton: y,
                    direction: p.config.languageDirection
                })
            }
            d.length > 1 && d.slice(1).forEach(function(e, t) {
                E.default.on("set-scroll-x-from-start", function(t) {
                    var n = (0, s.default)(t.args, 2),
                        r = n[0],
                        i = n[1];
                    e.scrollWidth + r > e.parentNode.getBoundingClientRect().width && (0, f.setScrollXFromStart)(e, r, i)
                }), E.default.on("attempt-fetch-next-page", function() {
                    w(e)
                })
            })
        }(0, S.lazyFonts)()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(83),
        s = r(a),
        u = n(90),
        c = r(u);
    t.initialize = i;
    var l = n(97),
        d = n(98),
        f = n(137),
        p = n(144),
        h = n(154),
        v = n(232),
        m = n(233),
        g = n(222),
        y = n(113),
        _ = n(117),
        b = n(239),
        w = n(151),
        E = r(w),
        S = n(240),
        O = (0, y.getDebugger)("recirculation")
}, function(e, t) {
    "use strict";

    function n(e, t) {
        return new RegExp(" " + t + " ").test(" " + e.className + " ")
    }

    function r(e, t) {
        var r = Array.isArray(t) ? t : t.split(" ");
        if (r.length)
            for (var i = 0; i < r.length; i++)
                if (!n(e, r[i])) {
                    var o = e.getAttribute("class") || "",
                        t = o + " " + r[i];
                    e.setAttribute("class", t)
                }
    }

    function i(e, t) {
        var r = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
        if (n(e, t)) {
            for (; r.indexOf(" " + t + " ") >= 0;) r = r.replace(" " + t + " ", " ");
            e.className = r.replace(/^\s+|\s+$/g, "")
        }
    }

    function o(e, t) {
        var r = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
        if (n(e, t)) {
            for (; r.indexOf(" " + t + " ") >= 0;) r = r.replace(" " + t + " ", " ");
            e.className = r.replace(/^\s+|\s+$/g, "")
        } else e.className += " " + t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hasClass = n, t.addClass = r, t.removeClass = i, t.toggleClass = o, t.default = {
        has: n,
        add: r,
        remove: i,
        toggle: o
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        var e = null,
            t = null;
        if (m.default) {
            var n = navigator.userAgent || navigator.vendor || window.opera;
            e = /iPad|iPhone|iPod/.test(n) && !window.MSStream ? "iOS" : "Android", t = window.matchMedia && window.matchMedia("(min-width: 415px)").matches ? "Tablet" : "Phone"
        } else e = "Desktop", t = "Desktop";
        return "Desktop" === e ? "Desktop" : e + "-" + t
    }

    function o() {
        return /Tablet/.test(i())
    }

    function a() {
        return /Desktop/.test(i())
    }

    function s() {
        var e = window.__SPOTIM_SPOT_ID__ || "";
        return (!e || !y.includes(e)) && /Phone/.test(i())
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resolveTag = t.fetchAdsConfig = t.useAdvancedTargeting = t.getDeviceType = t.forcingDesktopSpotIds = void 0;
    var u = n(90),
        c = r(u);
    t.resolveUserPlatform = i, t.isTablet = o, t.isDesktop = a, t.isPhone = s;
    var l = n(99),
        d = r(l),
        f = n(113),
        p = n(117),
        h = n(95),
        v = n(135),
        m = r(v),
        g = (0, f.getDebugger)("ads"),
        y = t.forcingDesktopSpotIds = ["sp_9LMINbK9", "sp_8UEKuEUC", "sp_79R6422u", "sp_tBSwIZWa", "sp_JjfsdV5M"],
        _ = (t.getDeviceType = function() {
            return m.default ? window.matchMedia && window.matchMedia("(min-width: 415px)").matches ? "Tablet" : "Mobile" : "Desktop"
        }, t.useAdvancedTargeting = function(e, t) {
            if (e[t].advanced_targeting) return !0;
            var n = e[t].campaigns.find(function(e) {
                return e.advanced_targeting
            });
            return !!n
        }, t.fetchAdsConfig = function(e, t, r, i) {
            var o = n(136),
                a = d.default.api.adsConfig.clientUrl.replace("{{spotId}}", e).replace("{{platform}}", t).replace("{{source}}", r || "recirculation");
            if (a = a.replace("siderail", "side-rail"), i) {
                var s = "&" + (0, h.queryStringFromObject)(i, !1);
                a += s
            }
            return new Promise(function(e, t) {
                o.ajax({
                    url: a,
                    responseType: "json"
                }, function(n, r) {
                    200 !== n || r.success === !1 ? t(r) : (r = "string" == typeof r ? JSON.parse(r) : r, e(r))
                })
            })
        }, function(e, t) {
            return e ? e.campaigns || e[t].campaigns : []
        }),
        b = function(e, t, n, r) {
            r = [].concat((0, c.default)(r)).sort(function(e, t) {
                return e.slot.row > t.slot.row || e.slot.row === t.slot.row && e.slot.column > t.slot.column ? 1 : -1
            });
            var i = null,
                o = function(t) {
                    return t.slot.row === e
                },
                a = function(e) {
                    return "start" === t ? e.slot.column <= 2 : "end" === t && e.slot.column >= 3
                };
            if ("Android-Phone" === n || "iOS-Phone" === n ? (r.length > 0 && (i = r[0], g("Campaign mobile. TMS legacy slot: " + JSON.stringify(i.slot))), r.length > 1 && ((0, f.publicWarning)("campaign collision - mobile"), g("Campaign collision on mobile. Using only first campaign."))) : r.forEach(function(n) {
                    o(n) && a(n) && (i ? ((0, f.publicWarning)("campaign collision"), g("Campaign collision. TMS campaign: " + n.name + ", legacy slot: " + JSON.stringify(n.slot) + " collides with already found: " + i.name + ", slot: " + JSON.stringify(i.slot))) : (i = n, g("Campaign found: " + n.name + " for: row " + e + ", pos " + t + ". TMS legacy slot: " + JSON.stringify(n.slot))))
                }), !i) return !1;
            var s = i.creative[0];
            return s && s.tags[n] ? i : null
        };
    t.resolveTag = function(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = r.isDraftModeUrl,
            o = void 0 !== i && i,
            a = r.sprcopPlayer,
            s = void 0 === a ? null : a;
        if (s) return (1 === e.row && "start" === e.pos || "center" === e.pos) && (g("SPRCOP PLAYER OVERRIDE", s), s);
        var u = _(n, t),
            c = b(e.row, e.pos, t, u);
        if (!c) return null;
        if (c.draftModeEnabled && !o) return null;
        var l = (0, p.randomInt)(1, 100),
            d = 0;
        l > c.creative[0].percent && (d = 1);
        var f = c.creative[d].tags[t],
            h = n.tags || n[t].tags,
            v = h[f];
        return g("resolved creative for " + e.name + ", " + t + ", creative index " + d + ", random generated " + l + ", chance " + c.creative[d].percent + "%", v), v
    }
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(100),
            o = n(101),
            a = r(o),
            s = n(113),
            u = null,
            c = (0, s.getDebugger)("ads");
        c("BRANCH", void 0), c("NODE_ENV", "production"), u = "premaster" === e.env.CI_BRANCH || "premaster" === e.env.DRONE_BRANCH ? n(114).default : n(116).default, c("ENV", u), t.default = (0, i.deepExtendObject)({}, a.default, u)
    }).call(t, n(5))
}, function(e, t) {
    "use strict";

    function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = t.shift();
        return t.forEach(function(e) {
            for (var t in e) e[t] && e[t].constructor && e[t].constructor === Object ? (i[t] = i[t] || {}, n(i[t], e[t])) : i[t] = e[t]
        }), i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.deepExtendObject = n
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(102),
        o = r(i),
        a = n(109),
        s = r(a);
    t.default = (0, o.default)({
        cloudinary: {
            url: "https://images.spot.im/image/upload"
        },
        transifex: {
            username: "naorye",
            password: "t91x9AepHN_6d0S7TPVS"
        },
        min_items_to_display: 6,
        max_items_to_display: 15,
        default_prerender_items: 6
    }, s.default)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(103),
        o = r(i);
    t.default = o.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
}, function(e, t, n) {
    e.exports = {
        default: n(104),
        __esModule: !0
    }
}, function(e, t, n) {
    n(105), e.exports = n(23).Object.assign
}, function(e, t, n) {
    var r = n(21);
    r(r.S + r.F, "Object", {
        assign: n(106)
    })
}, function(e, t, n) {
    "use strict";
    var r = n(42),
        i = n(107),
        o = n(108),
        a = n(58),
        s = n(45),
        u = Object.assign;
    e.exports = !u || n(32)(function() {
        var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e
        }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = a(e), u = arguments.length, c = 1, l = i.f, d = o.f; u > c;)
            for (var f, p = s(arguments[c++]), h = l ? r(p).concat(l(p)) : r(p), v = h.length, m = 0; v > m;) d.call(p, f = h[m++]) && (n[f] = p[f]);
        return n
    } : u
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(110),
        o = r(i),
        a = null;
    a = n(112).default, t.default = Object.assign({}, o.default, a)
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {}
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        redirectUrl: "https://traffic-staging.spot.im/v2",
        immediateScriptUrl: "https://recirculation-qa-direct.spot.im/spot-immediate/{{spotId}}",
        addMoatImpression: "https://spotops.spot.im/spot/{{spotId}}/module/recirculation/moat/{{moatType}}/increase"
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        redirectUrl: "https://traffic.spot.im/v2",
        immediateScriptUrl: "https://recirculation.spot.im/spot-immediate/{{spotId}}",
        addMoatImpression: "https://spotops.spot.im/spot/{{spotId}}/module/recirculation/moat/{{moatType}}/increase"
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        try {
            if (null === d) {
                if (d = c.default.getKey(window.location.href.toLowerCase(), l.toLowerCase()), d || (d = window[l]), !d) try {
                    d = window.localStorage.getItem(l)
                } catch (e) {}
                d || (d = ""), d = d.split(",").map(function(e) {
                    return e.toLowerCase()
                })
            }
            return d
        } catch (e) {
            return []
        }
    }

    function o(e) {
        for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        (t = console).log.apply(t, ["%cSpot.IM " + e, "background: #307fe2; color: white;"].concat(r));
        try {
            var o = "SPOTIM_DEBUG_SINK";
            window[o] = window[o] || [], window[o].push({
                module: "recirculation",
                source: e,
                messages: r,
                timestamp: Date.now()
            })
        } catch (e) {}
    }

    function a(e) {
        var t = i();
        return t.indexOf("*") > -1 || t.indexOf(e.toLowerCase()) > -1 ? o.bind(null, e) : function() {}
    }

    function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        console.warn("%cSP warning", "background: red; font-weight :bold; color: white;", e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getDebugger = a, t.publicWarning = s;
    var u = n(95),
        c = r(u),
        l = "SPOTIM_DEBUG_RECIRCULATION",
        d = null
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        cloudinary: {
            apiKey: "468332229667797"
        },
        demoPageServiceUrl: "/spot/{{spotId}}",
        siderailDemoPageServiceUrl: "/spot/{{spotId}}/siderail",
        ampDemoPageServiceUrl: "https://recirculation.spot.im/spot/json/{{spotId}}",
        api: {
            extract: {
                url: "https://extract.spot.im",
                cdn: "https://api.spot.im/extract"
            },
            recirculation: {
                url: "https://www.spot.im/api/newsfeed-sync/spot/{{spotId}}/circulation",
                cdn: "https://www.spot.im/api/newsfeed-sync/spot/{{spotId}}/circulation"
            },
            topics: {
                url: "https://www.spot.im/api/topics/circulation/spot/{{spotId}}",
                cdn: "https://www.spot.im/api/topics/circulation/spot/{{spotId}}"
            },
            adsConfig: {
                clientUrl: "https://premaster-spotops.spot.im/spot/{{spotId}}/{{source}}?platform={{platform}}",
                serverUrl: "https://premaster-spotops.spot.im/spot/{{spotId}}/recirculation-all",
                amp: "https://premaster-spotops.spot.im/spot/{{spotId}}/recirculation/amp"
            },
            ampAnalytics: "https://pix.spot.im/api/v1/pixel?m={{m}}"
        },
        nextPageUrl: "https://recirculation.spot.im/page/{{spotId}}",
        prerenderScriptUrl: "https://recirculation.spot.im/script/{{spotId}}"
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        cloudinary: {
            apiKey: "468332229667797"
        },
        demoPageServiceUrl: "/spot/{{spotId}}",
        siderailDemoPageServiceUrl: "/spot/{{spotId}}/siderail",
        ampDemoPageServiceUrl: "https:/recirculation-qa-direct.spot.im/spot/json/{{spotId}}",
        api: {
            extract: {
                url: "https://extract.spot.im",
                cdn: "https://api.spot.im/extract"
            },
            recirculation: {
                url: "https://www.spot.im/api/newsfeed-sync/spot/{{spotId}}/circulation",
                cdn: "https://www.spot.im/api/newsfeed-sync/spot/{{spotId}}/circulation"
            },
            topics: {
                url: "https://www.spot.im/api/topics/circulation/spot/{{spotId}}",
                cdn: "https://www.spot.im/api/topics/circulation/spot/{{spotId}}"
            },
            adsConfig: {
                clientUrl: "https://spotops.spot.im/spot/{{spotId}}/{{source}}?platform={{platform}}",
                serverUrl: "https://spotops.spot.im/spot/{{spotId}}/recirculation-all",
                amp: "https://spotops.spot.im/spot/{{spotId}}/recirculation/amp"
            },
            ampAnalytics: "https://pix.staging-spot.im/api/v1/pixel?m={{m}}"
        },
        nextPageUrl: "https://recirculation-qa-direct.spot.im/page/{{spotId}}",
        prerenderScriptUrl: "https://recirculation-qa-direct.spot.im/script/{{spotId}}"
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        cloudinary: {
            apiKey: "468332229667797"
        },
        demoPageServiceUrl: "/spot/{{spotId}}",
        siderailDemoPageServiceUrl: "/spot/{{spotId}}/siderail",
        ampDemoPageServiceUrl: "https://recirculation.spot.im/spot/json/{{spotId}}",
        api: {
            extract: {
                url: "https://extract.spot.im",
                cdn: "https://api.spot.im/extract"
            },
            recirculation: {
                url: "https://www.spot.im/api/newsfeed-sync/spot/{{spotId}}/circulation",
                cdn: "https://www.spot.im/api/newsfeed-sync/spot/{{spotId}}/circulation"
            },
            topics: {
                url: "https://www.spot.im/api/topics/circulation/spot/{{spotId}}",
                cdn: "https://www.spot.im/api/topics/circulation/spot/{{spotId}}"
            },
            adsConfig: {
                clientUrl: "https://spotops.spot.im/spot/{{spotId}}/{{source}}?platform={{platform}}",
                serverUrl: "https://spotops.spot.im/spot/{{spotId}}/recirculation-all",
                amp: "https://spotops.spot.im/spot/{{spotId}}/recirculation/amp"
            },
            ampAnalytics: "https://pix.spot.im/api/v1/pixel?m={{m}}"
        },
        nextPageUrl: "https://recirculation.spot.im/page/{{spotId}}",
        prerenderScriptUrl: "https://recirculation.spot.im/script/{{spotId}}"
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        e = b.default.removeSpotImParams(e).toLowerCase(), t = b.default.removeSpotImParams(t).toLowerCase();
        var n = /(https?):\/\/(?:www\.)?(.[^\/]+)(.*)/,
            r = e.match(n),
            i = t.match(n);
        if (r && i) {
            var o = (0, y.default)(r, 4),
                a = o[3],
                s = (0, y.default)(i, 4),
                u = s[3];
            return a = a.split("/").join(""), u = u.split("/").join(""), a === u
        }
        return !1
    }

    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.locationHref,
            r = void 0 === n ? window.location.href : n,
            o = t.compareFunc,
            a = void 0 === o ? null : o;
        a || (a = i);
        var s = [].concat((0, m.default)(e.querySelectorAll("[data-spmark=item-link]")));
        return s.forEach(function(e, t) {
            var n = e.href,
                i = a(n, r);
            if (i) {
                var o = e.parentNode;
                o.parentNode.removeChild(o)
            }
        }), e
    }

    function a(e) {
        return [].concat((0, m.default)(e.querySelectorAll("[data-spotim-item]"))).forEach(function(e, t) {
            e.dataset.spmark = e.dataset.spmark.replace(/index\:(\d+)/, "index:" + t), e.dataset.spotimIndex = t
        }), e
    }

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return 0 === t.length || t.reduce(function(t, n) {
            if (t) return !0;
            var r = null;
            try {
                r = new RegExp(n)
            } catch (e) {
                return !1
            }
            return !!e.match(r)
        }, !1)
    }

    function u(e, t) {
        return Array.apply(0, new Array(t)).map(function(t, n) {
            return n + e
        })
    }

    function c(e, t, n) {
        var r = Math.floor(t.length / e);
        return t.slice((n - 1) * r, n * r)
    }

    function l(e) {
        var t = /row(\d+)-cell(\d+)/,
            n = t.exec(e);
        return n ? {
            row: parseInt(n[1]),
            column: parseInt(n[2]),
            name: e
        } : isNaN(parseInt(e)) ? {
            row: null,
            column: null,
            name: e
        } : {
            row: 1,
            column: parseInt(e),
            name: e
        }
    }

    function d(e) {
        var t = {};
        return function() {
            var n = JSON.stringify(arguments);
            if (t[n]) return t[n];
            var r = e.apply(this, arguments);
            return t[n] = r, r
        }
    }

    function f(e) {
        var t = document.createElement("div");
        t.innerHTML = e;
        var n = t.firstElementChild;
        return t.removeChild(n), n
    }

    function p(e, t) {
        if (void 0 === t && (t = e, e = 0), "number" != typeof e || "number" != typeof t) throw new TypeError("Expected all arguments to be numbers");
        return Math.floor(Math.random() * (t - e + 1) + e)
    }

    function h() {
        return {
            day: S(),
            hour: (new Date).getHours()
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isMonetizedSpot = t.ACTIVATE_MONETIZATION_EVENT = t.createFrame = t.createPlayer = t.getRealBackgroundColor = t.getSlotId = void 0;
    var v = n(90),
        m = r(v),
        g = n(83),
        y = r(g);
    t.urlsAreSimilar = i, t.removeItemByUrl = o, t.resequenceIndexes = a, t.whitelistUrl = s, t.range = u, t.getDeckItems = c, t.getSlot = l, t.memoize = d, t.createDomElement = f, t.randomInt = p, t.getAdvancedTargetingParams = h;
    var _ = n(95),
        b = r(_),
        w = n(118),
        E = r(w),
        S = function() {
            var e = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
                t = (new Date).getDay();
            return e[t]
        };
    t.getSlotId = function(e, t) {
        return "row" + e + "-cell" + t
    }, t.getRealBackgroundColor = function e(t) {
        if (!t) return "#fff";
        var n = "rgba(0, 0, 0, 0)",
            r = getComputedStyle(t).backgroundColor;
        return r === n ? e(t.parentElement) : r
    }, t.createPlayer = function(e, t, n, r, i, o) {
        return {
            id: p(1e3, 1e5).toString(),
            code: e,
            name: t,
            size: {
                width: n,
                height: r
            },
            type: i,
            server: o
        }
    }, t.createFrame = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = document.createElement("iframe");
        Object.assign(n.style, {
            width: "100%",
            height: "100%",
            border: "none"
        });
        var r = "<html><body style='margin: 0; padding: 0; background: transparent; overflow: hidden;'>" + e + "</body></html>";
        return t && t.appendChild(n), n.contentWindow.document.open(), n.contentWindow.document.write(r), n.contentWindow.document.close(), n
    }, t.ACTIVATE_MONETIZATION_EVENT = "spot-im-activate-recirculation", t.isMonetizedSpot = function(e) {
        var t = E.default.get(e, "spot.features.recirculation.ads_enabled");
        return Array.isArray(t) && t.length > 0
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        for (var t = e.split("."), n = [], r = 0; r < t.length; r++) {
            for (var i = t[r];
                "\\" === i[i.length - 1] && void 0 !== t[r + 1];) i = i.slice(0, -1) + ".", i += t[++r];
            n.push(i)
        }
        return n
    }
    var o = n(119),
        a = r(o),
        s = function(e) {
            var t = "undefined" == typeof e ? "undefined" : (0, a.default)(e);
            return null !== e && ("object" === t || "function" === t)
        };
    e.exports = {
        get: function(e, t, n) {
            if (!s(e) || "string" != typeof t) return void 0 === n ? e : n;
            for (var r = i(t), o = 0; o < r.length; o++) {
                if (!Object.prototype.propertyIsEnumerable.call(e, r[o])) return n;
                if (e = e[r[o]], void 0 === e || null === e) {
                    if (o !== r.length - 1) return n;
                    break
                }
            }
            return e
        },
        set: function(e, t, n) {
            if (!s(e) || "string" != typeof t) return e;
            for (var r = e, o = i(t), a = 0; a < o.length; a++) {
                var u = o[a];
                s(e[u]) || (e[u] = {}), a === o.length - 1 && (e[u] = n), e = e[u]
            }
            return r
        },
        delete: function(e, t) {
            if (s(e) && "string" == typeof t)
                for (var n = i(t), r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (r === n.length - 1) return void delete e[o];
                    if (e = e[o], !s(e)) return
                }
        },
        has: function(e, t) {
            if (!s(e) || "string" != typeof t) return !1;
            for (var n = i(t), r = 0; r < n.length; r++) {
                if (!s(e)) return !1;
                if (!(n[r] in e)) return !1;
                e = e[n[r]]
            }
            return !0
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(120),
        o = r(i),
        a = n(123),
        s = r(a),
        u = "function" == typeof s.default && "symbol" == typeof o.default ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e
        };
    t.default = "function" == typeof s.default && "symbol" === u(o.default) ? function(e) {
        return "undefined" == typeof e ? "undefined" : u(e)
    } : function(e) {
        return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : u(e)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(121),
        __esModule: !0
    }
}, function(e, t, n) {
    n(15), n(59), e.exports = n(122).f("iterator")
}, function(e, t, n) {
    t.f = n(56)
}, function(e, t, n) {
    e.exports = {
        default: n(124),
        __esModule: !0
    }
}, function(e, t, n) {
    n(125), n(14), n(133), n(134), e.exports = n(23).Symbol
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(36),
        o = n(31),
        a = n(21),
        s = n(37),
        u = n(126).KEY,
        c = n(32),
        l = n(51),
        d = n(55),
        f = n(52),
        p = n(56),
        h = n(122),
        v = n(127),
        m = n(128),
        g = n(129),
        y = n(28),
        _ = n(29),
        b = n(44),
        w = n(34),
        E = n(35),
        S = n(40),
        O = n(130),
        A = n(132),
        k = n(27),
        T = n(42),
        x = A.f,
        I = k.f,
        P = O.f,
        C = r.Symbol,
        R = r.JSON,
        M = R && R.stringify,
        D = "prototype",
        L = p("_hidden"),
        j = p("toPrimitive"),
        N = {}.propertyIsEnumerable,
        F = l("symbol-registry"),
        U = l("symbols"),
        V = l("op-symbols"),
        q = Object[D],
        H = "function" == typeof C,
        z = r.QObject,
        B = !z || !z[D] || !z[D].findChild,
        $ = o && c(function() {
            return 7 != S(I({}, "a", {
                get: function() {
                    return I(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var r = x(q, t);
            r && delete q[t], I(e, t, n), r && e !== q && I(q, t, r)
        } : I,
        W = function(e) {
            var t = U[e] = S(C[D]);
            return t._k = e, t
        },
        G = H && "symbol" == typeof C.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof C
        },
        K = function(e, t, n) {
            return e === q && K(V, t, n), y(e), t = w(t, !0), y(n), i(U, t) ? (n.enumerable ? (i(e, L) && e[L][t] && (e[L][t] = !1), n = S(n, {
                enumerable: E(0, !1)
            })) : (i(e, L) || I(e, L, E(1, {})), e[L][t] = !0), $(e, t, n)) : I(e, t, n)
        },
        J = function(e, t) {
            y(e);
            for (var n, r = m(t = b(t)), i = 0, o = r.length; o > i;) K(e, n = r[i++], t[n]);
            return e
        },
        X = function(e, t) {
            return void 0 === t ? S(e) : J(S(e), t)
        },
        Y = function(e) {
            var t = N.call(this, e = w(e, !0));
            return !(this === q && i(U, e) && !i(V, e)) && (!(t || !i(this, e) || !i(U, e) || i(this, L) && this[L][e]) || t)
        },
        Q = function(e, t) {
            if (e = b(e), t = w(t, !0), e !== q || !i(U, t) || i(V, t)) {
                var n = x(e, t);
                return !n || !i(U, t) || i(e, L) && e[L][t] || (n.enumerable = !0), n
            }
        },
        Z = function(e) {
            for (var t, n = P(b(e)), r = [], o = 0; n.length > o;) i(U, t = n[o++]) || t == L || t == u || r.push(t);
            return r
        },
        ee = function(e) {
            for (var t, n = e === q, r = P(n ? V : b(e)), o = [], a = 0; r.length > a;) !i(U, t = r[a++]) || n && !i(q, t) || o.push(U[t]);
            return o
        };
    H || (C = function() {
        if (this instanceof C) throw TypeError("Symbol is not a constructor!");
        var e = f(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
                this === q && t.call(V, n), i(this, L) && i(this[L], e) && (this[L][e] = !1), $(this, e, E(1, n))
            };
        return o && B && $(q, e, {
            configurable: !0,
            set: t
        }), W(e)
    }, s(C[D], "toString", function() {
        return this._k
    }), A.f = Q, k.f = K, n(131).f = O.f = Z, n(108).f = Y, n(107).f = ee, o && !n(20) && s(q, "propertyIsEnumerable", Y, !0), h.f = function(e) {
        return W(p(e))
    }), a(a.G + a.W + a.F * !H, {
        Symbol: C
    });
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) p(te[ne++]);
    for (var re = T(p.store), ie = 0; re.length > ie;) v(re[ie++]);
    a(a.S + a.F * !H, "Symbol", {
        for: function(e) {
            return i(F, e += "") ? F[e] : F[e] = C(e)
        },
        keyFor: function(e) {
            if (!G(e)) throw TypeError(e + " is not a symbol!");
            for (var t in F)
                if (F[t] === e) return t
        },
        useSetter: function() {
            B = !0
        },
        useSimple: function() {
            B = !1
        }
    }), a(a.S + a.F * !H, "Object", {
        create: X,
        defineProperty: K,
        defineProperties: J,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: ee
    }), R && a(a.S + a.F * (!H || c(function() {
        var e = C();
        return "[null]" != M([e]) || "{}" != M({
            a: e
        }) || "{}" != M(Object(e))
    })), "JSON", {
        stringify: function(e) {
            for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
            if (n = t = r[1], (_(t) || void 0 !== e) && !G(e)) return g(t) || (t = function(e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !G(t)) return t
            }), r[1] = t, M.apply(R, r)
        }
    }), C[D][j] || n(26)(C[D], j, C[D].valueOf), d(C, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
}, function(e, t, n) {
    var r = n(52)("meta"),
        i = n(29),
        o = n(36),
        a = n(27).f,
        s = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        c = !n(32)(function() {
            return u(Object.preventExtensions({}))
        }),
        l = function(e) {
            a(e, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        d = function(e, t) {
            if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!o(e, r)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                l(e)
            }
            return e[r].i
        },
        f = function(e, t) {
            if (!o(e, r)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                l(e)
            }
            return e[r].w
        },
        p = function(e) {
            return c && h.NEED && u(e) && !o(e, r) && l(e), e
        },
        h = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: d,
            getWeak: f,
            onFreeze: p
        }
}, function(e, t, n) {
    var r = n(22),
        i = n(23),
        o = n(20),
        a = n(122),
        s = n(27).f;
    e.exports = function(e) {
        var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {
            value: a.f(e)
        })
    }
}, function(e, t, n) {
    var r = n(42),
        i = n(107),
        o = n(108);
    e.exports = function(e) {
        var t = r(e),
            n = i.f;
        if (n)
            for (var a, s = n(e), u = o.f, c = 0; s.length > c;) u.call(e, a = s[c++]) && t.push(a);
        return t
    }
}, function(e, t, n) {
    var r = n(46);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}, function(e, t, n) {
    var r = n(44),
        i = n(131).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function(e) {
            try {
                return i(e)
            } catch (e) {
                return a.slice()
            }
        };
    e.exports.f = function(e) {
        return a && "[object Window]" == o.call(e) ? s(e) : i(r(e))
    }
}, function(e, t, n) {
    var r = n(43),
        i = n(53).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, i)
    }
}, function(e, t, n) {
    var r = n(108),
        i = n(35),
        o = n(44),
        a = n(34),
        s = n(36),
        u = n(30),
        c = Object.getOwnPropertyDescriptor;
    t.f = n(31) ? c : function(e, t) {
        if (e = o(e), t = a(t, !0), u) try {
            return c(e, t)
        } catch (e) {}
        if (s(e, t)) return i(!r.f.call(e, t), e[t])
    }
}, function(e, t, n) {
    n(127)("asyncIterator")
}, function(e, t, n) {
    n(127)("observable")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return "object" === ("undefined" == typeof window ? "undefined" : (0, a.default)(window)) && !!window.navigator.userAgent.toLocaleLowerCase().match(/(mobile|iemobile|android|webos|iphone|ipad|ipod|blackberry|windows phone)/)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(119),
        a = r(o);
    t.default = i()
}, function(e, t) {
    (function(e) {
        function n(t) {
            return t && e.XDomainRequest && !/MSIE 1/.test(navigator.userAgent) ? new XDomainRequest : e.XMLHttpRequest ? new XMLHttpRequest : void 0
        }

        function r(e, t, n) {
            e[t] = e[t] || n
        }
        var i = ["responseType", "withCredentials", "timeout", "onprogress"];
        t.ajax = function(t, o) {
            function a(e, t) {
                return function() {
                    l || (o(void 0 === d.status ? e : d.status, 0 === d.status ? "Error" : d.response || d.responseText || t, d), l = !0)
                }
            }
            var s = t.headers || {},
                u = t.body,
                c = t.method || (u ? "POST" : "GET"),
                l = !1,
                d = n(t.cors);
            d.open(c, t.url, !0);
            var f = d.onload = a(200);
            d.onreadystatechange = function() {
                4 === d.readyState && f()
            }, d.onerror = a(null, "Error"), d.ontimeout = a(null, "Timeout"), d.onabort = a(null, "Abort"), u && (r(s, "X-Requested-With", "XMLHttpRequest"), e.FormData && u instanceof e.FormData || r(s, "Content-Type", "application/x-www-form-urlencoded"));
            for (var p, h = 0, v = i.length; h < v; h++) p = i[h], void 0 !== t[p] && (d[p] = t[p]);
            for (var p in s) d.setRequestHeader(p, s[p]);
            return d.send(u), d
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        j = [], N = [], F = []
    }

    function o(e) {
        var t = j.find(function(t) {
            return t.element === e
        });
        if (t) return t.width;
        var n = {
            element: e,
            width: Math.floor(e.getBoundingClientRect().width)
        };
        return j.push(n), n.width
    }

    function a(e) {
        var t = N.find(function(t) {
            return t.element === e
        });
        if (t) return t.width;
        var n = {
            element: e,
            width: e.scrollWidth
        };
        return N.push(n), n.width
    }

    function s(e, t) {
        var n = (0, C.getElementRect)(e),
            r = (0, C.getElementRect)(t),
            i = n.intersect(r),
            o = n.getArea(),
            a = i.getArea();
        return a / o
    }

    function u(e, t, n) {
        var r = F.find(function(t) {
                return t.item === e
            }),
            i = 0;
        if (r ? i = r.offsetLeft : (i = e.offsetLeft, F.push({
                item: e,
                offsetLeft: i
            })), "ltr" === n) return i;
        var s = a(t),
            u = o(e);
        return s - i - u
    }

    function c(e, t, n) {
        var r = w(t, n),
            i = u(e, t, n);
        return r + i
    }

    function l(e, t, n) {
        for (var r = e.map(function(e) {
                return c(e, t, n)
            }), i = 0; i < r.length - 1; i++)
            if (r[i] > 0) return e[i];
        return null
    }

    function d(e, t, n) {
        for (var r = e.map(function(e) {
                return c(e, t, n)
            }), i = r.length - 1; i >= 0; i--)
            if (r[i] < 0) return e[i];
        return null
    }

    function f(e, t, n) {
        return p(e, t, 0, n)
    }

    function p(e, t, n, r) {
        var i = w(e, r);
        return i + n < 0
    }

    function h(e, t, n) {
        return v(e, t, 0, n)
    }

    function v(e, t, n, r) {
        var i = w(e, r),
            s = o(t),
            u = a(e);
        return u + i + n > s
    }

    function m(e, t, n) {
        return 0
    }

    function g(e, t, n) {
        var r = a(e),
            i = o(t);
        return i - r
    }

    function y(e) {
        return U
    }

    function _(e, t) {
        ["transform", "webkitTransform", "mozTransform", "msTransform"].forEach(function(n) {
            e.style[n] = "translateX(" + t + "px)"
        }), U = t
    }

    function b(e, t, n) {
        "ltr" === n ? _(e, t) : _(e, -t)
    }

    function w(e, t) {
        var n = y(e);
        return "ltr" === t ? n : -n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Interaction = void 0;
    var E = n(138),
        S = r(E),
        O = n(139),
        A = r(O);
    t.setScrollXFromStart = b;
    var k = n(143),
        T = n(135),
        x = r(T),
        I = n(144),
        P = n(97),
        C = n(145),
        R = n(146),
        M = n(151),
        D = r(M),
        L = n(153),
        j = (t.Interaction = function() {
            function e(t) {
                var n = t.onNavigateForward,
                    r = void 0 === n ? function() {} : n,
                    i = t.onNavigateBack,
                    o = void 0 === i ? function() {} : i,
                    a = t.onReachEnd,
                    s = void 0 === a ? function() {} : a,
                    u = t.onOverflowForward,
                    c = void 0 === u ? function() {} : u,
                    l = t.onReachStart,
                    d = void 0 === l ? function() {} : l,
                    f = t.onOverflowBack,
                    p = void 0 === f ? function() {} : f,
                    h = t.fetchNextPage,
                    v = void 0 === h ? null : h,
                    m = t.onFetchStart,
                    g = void 0 === m ? function() {} : m,
                    y = t.onFetchComplete,
                    _ = void 0 === y ? function() {} : y;
                (0, S.default)(this, e), this.container = null, this.scrollable = null, this.items = [], this.direction = "ltr", this.onNavigateForward = r, this.onNavigateBack = o, this.onReachEnd = s, this.onOverflowForward = c, this.onReachStart = d, this.onOverflowBack = p, this.fetchNextPage = v, this.ajaxInProgress = !1, this.onFetchStart = g, this.onFetchComplete = _
            }
            return (0, A.default)(e, [{
                key: "initialize",
                value: function(e) {
                    var t = this,
                        n = e.startWithItemInView,
                        r = void 0 === n ? 0 : n,
                        a = e.container,
                        c = e.direction,
                        l = void 0 === c ? "ltr" : c,
                        d = e.scrollable,
                        f = e.items,
                        p = e.forwardButton,
                        h = e.backButton,
                        v = "ltr" === l;
                    this.direction = l, this.container = a, this.scrollable = d, this.items = f;
                    try {
                        if (x.default) {
                            (0, k.onTap)(p, this.moveForward.bind(this, "click")), (0, k.onTap)(h, this.moveBack.bind(this, "click"));
                            var m = null;
                            (0, k.onGesture)(this.scrollable, {
                                onSwipeLeft: v ? this.moveForward.bind(this, "swipe") : this.moveBack.bind(this, "swipe"),
                                onSwipeRight: v ? this.moveBack.bind(this, "swipe") : this.moveForward.bind(this, "swipe"),
                                onDragStart: function() {
                                    (0, P.addClass)(t.scrollable, I.cssSelectors.dragging), m = y(t.scrollable)
                                },
                                onDragStop: function() {
                                    (0, P.removeClass)(t.scrollable, I.cssSelectors.dragging), m = null
                                },
                                onDragProgress: function(e) {
                                    null !== m && _(t.scrollable, m + e)
                                }
                            })
                        } else p.addEventListener("click", this.moveForward.bind(this, "click")), h.addEventListener("click", this.moveBack.bind(this, "click"));
                        this.scrollable.addEventListener("transitionend", this.checkOverflows.bind(this), !1), window.addEventListener("resize", i), window.addEventListener("orientationchange", i), setTimeout(function() {
                            try {
                                if (r > 0 && t.items[r]) {
                                    var e = t.items[r],
                                        n = s(e, t.container);
                                    if (n < .51) {
                                        var i = u(e, t.scrollable, t.direction),
                                            a = o(e),
                                            c = o(t.container),
                                            l = Math.ceil(.51 * a),
                                            d = i + l,
                                            f = d - c,
                                            p = f;
                                        p > i && (p = i), b(t.scrollable, -p, t.direction)
                                    }
                                }
                                t.checkOverflows()
                            } catch (e) {
                                (0, R.reportError)(e, {
                                    errorSource: "interaction"
                                })
                            }
                        }, 1e3)
                    } catch (e) {
                        (0, R.reportError)(e, {
                            errorSource: "interaction"
                        })
                    }
                    this.initEvents()
                }
            }, {
                key: "initEvents",
                value: function() {
                    var e = this;
                    D.default.on(L.DO_PAGE_BACK, function() {
                        e.moveBack("event")
                    }), D.default.on(L.DO_PAGE_NEXT, function() {
                        e.moveForward("event")
                    })
                }
            }, {
                key: "checkOverflows",
                value: function() {
                    f(this.scrollable, this.container, this.direction) ? this.onOverflowBack() : this.onReachStart(), h(this.scrollable, this.container, this.direction) ? this.onOverflowForward() : this.onReachEnd()
                }
            }, {
                key: "moveForward",
                value: function(e) {
                    var t = this;
                    if (!this.ajaxInProgress) {
                        "click" !== e && "swipe" !== e || D.default.trigger(L.PAGE_NEXT_CLICKED);
                        try {
                            if (!this.container) throw new Error("Container not initialized");
                            var n = l(this.items, this.scrollable, this.direction);
                            if (n) {
                                var r = -c(n, this.scrollable, this.direction),
                                    i = v(this.scrollable, this.container, r, this.direction);
                                if (i) {
                                    this.onOverflowForward(), p(this.scrollable, this.container, r, this.direction) ? this.onOverflowBack() : this.onReachStart();
                                    var o = -u(n, this.scrollable, this.direction);
                                    requestAnimationFrame(function() {
                                        b(t.scrollable, o, t.direction), D.default.trigger("set-scroll-x-from-start", {
                                            args: [o, t.direction]
                                        })
                                    })
                                } else {
                                    var a = g(this.scrollable, this.container, this.direction);
                                    b(this.scrollable, a, this.direction), D.default.trigger("set-scroll-x-from-start", {
                                        args: [a, this.direction]
                                    }), this.attemptFetchNextPage(e), this.onReachEnd()
                                }
                                setTimeout(function() {
                                    t.onNavigateForward({
                                        trigger: e,
                                        toItem: n
                                    })
                                }, 700)
                            } else {
                                var s = g(this.scrollable, this.container, this.direction);
                                b(this.scrollable, s, this.direction), D.default.trigger("set-scroll-x-from-start", {
                                    args: [s, this.direction]
                                }), this.attemptFetchNextPage(e)
                            }
                        } catch (e) {
                            (0, R.reportError)(e, {
                                errorSource: "interaction"
                            })
                        }
                    }
                }
            }, {
                key: "moveBack",
                value: function(e) {
                    var t = this;
                    "click" !== e && "swipe" !== e || D.default.trigger(L.PAGE_BACK_CLICKED);
                    try {
                        if (!this.container) throw new Error("Container not initialized");
                        var n = d(this.items, this.scrollable, this.direction);
                        if (n) {
                            var r = -c(n, this.scrollable, this.direction),
                                i = p(this.scrollable, this.container, r, this.direction);
                            if (i) {
                                this.onOverflowBack(), v(this.scrollable, this.container, r, this.direction) ? this.onOverflowForward() : this.onReachEnd();
                                var o = -u(n, this.scrollable, this.direction);
                                requestAnimationFrame(function() {
                                    b(t.scrollable, o, t.direction), D.default.trigger("set-scroll-x-from-start", {
                                        args: [o, t.direction]
                                    })
                                })
                            } else {
                                var a = m(this.scrollable, this.container, this.direction);
                                b(this.scrollable, a, this.direction), D.default.trigger("set-scroll-x-from-start", {
                                    args: [a, this.direction]
                                }), this.onReachStart()
                            }
                            setTimeout(function() {
                                t.onNavigateBack({
                                    trigger: e,
                                    toItem: n
                                })
                            }, 700)
                        } else {
                            var s = m(this.scrollable, this.container, this.direction);
                            b(this.scrollable, s, this.direction), D.default.trigger("set-scroll-x-from-start", {
                                args: [s, this.direction]
                            })
                        }
                    } catch (e) {
                        (0, R.reportError)(e, {
                            errorSource: "interaction"
                        })
                    }
                }
            }, {
                key: "attemptFetchNextPage",
                value: function(e) {
                    var t = this;
                    D.default.trigger("attempt-fetch-next-page"), this.fetchNextPage && (this.ajaxInProgress = !0, this.onFetchStart(), this.fetchNextPage(this.scrollable, function(n) {
                        var r = n.newItems;
                        [].push.apply(t.items, r), i(), t.ajaxInProgress = !1, t.onFetchComplete(), r.length > 0 && t.moveForward(e)
                    }))
                }
            }]), e
        }(), []),
        N = [],
        F = [],
        U = 0
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(140),
        o = r(i);
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }()
}, function(e, t, n) {
    e.exports = {
        default: n(141),
        __esModule: !0
    }
}, function(e, t, n) {
    n(142);
    var r = n(23).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function(e, t, n) {
    var r = n(21);
    r(r.S + r.F * !n(31), "Object", {
        defineProperty: n(27).f
    })
}, function(e, t) {
    "use strict";

    function n(e) {
        function t() {
            A = !0, k = !0
        }

        function n() {
            A && (T && (m(), s()), A = !1, k = !0, T = !1)
        }

        function r(e, t, n, r) {
            return 180 * Math.atan2(r - n, t - e) / Math.PI
        }

        function a(e) {
            var t = e.changedTouches[0].screenX,
                n = e.changedTouches[0].screenY;
            r(_, t, b, n);
            if (A) {
                if (T) return y(t - _), e.stopPropagation(), e.preventDefault(), !1;
                if (k) {
                    var a = Math.abs(b - n),
                        s = Math.abs(_ - t);
                    a > i && s < o ? k = !1 : a < i && s > o && (T = !0, h())
                }
            }
        }

        function s() {
            var e = (Math.abs(b - E), Math.abs(_ - w), w < _),
                t = w > _,
                n = r(_, w, b, E),
                i = n >= -45 && n <= 45 || n >= 135 && n <= 180 || n >= -180 && n <= -135;
            i && (e && l(), t && f())
        }
        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = u.onSwipeLeft,
            l = void 0 === c ? function() {} : c,
            d = u.onSwipeRight,
            f = void 0 === d ? function() {} : d,
            p = u.onDragStart,
            h = void 0 === p ? function() {} : p,
            v = u.onDragStop,
            m = void 0 === v ? function() {} : v,
            g = u.onDragProgress,
            y = void 0 === g ? function() {} : g,
            _ = 0,
            b = 0,
            w = 0,
            E = 0,
            S = 0,
            O = 0,
            A = !1,
            k = !0,
            T = !1;
        e.addEventListener("touchstart", function(e) {
            _ = e.touches[0].screenX, b = e.touches[0].screenY, t()
        }, !1), e.addEventListener("touchend", function(e) {
            w = e.changedTouches[0].screenX, E = e.changedTouches[0].screenY, n()
        }, !1), e.addEventListener("touchmove", function(e) {
            return S = e.changedTouches[0].screenX, O = e.changedTouches[0].screenY, a(e)
        })
    }

    function r(e, t) {
        function n() {
            var e = Math.abs(i - a),
                n = Math.abs(r - o),
                s = Math.sqrt(Math.pow(n, 2) + Math.pow(e, 2));
            s <= 5 && t()
        }
        var r = 0,
            i = 0,
            o = 0,
            a = 0;
        e.addEventListener("touchstart", function(e) {
            r = e.touches[0].screenX, i = e.touches[0].screenY
        }, !1), e.addEventListener("touchend", function(e) {
            o = e.changedTouches[0].screenX, a = e.changedTouches[0].screenY, n()
        }, !1)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.onGesture = n, t.onTap = r;
    var i = 10,
        o = 10
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (t.spotId = "sp_f76RE06N", t.spotGroup = "ENGADGET", t.css = "<style>.sprc1YjLM g{display:initial}[data-spotim-useragent*=MSIE] .sprc1YjLM g{display:inline}.sprc1YjLM *{-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important}.sprc1YjLM a,.sprc1YjLM div,.sprc1YjLM span{all:initial;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;-webkit-border-image:none;border-image:none;-webkit-border-radius:0;border-radius:0;bottom:auto;-webkit-box-shadow:none;box-shadow:none;clear:none;clip:auto;cursor:auto;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;vertical-align:baseline;visibility:visible;white-space:normal;width:auto;word-spacing:normal;z-index:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-box-sizing:border-box;box-sizing:border-box;color:#373e44;font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:15px;line-height:25px}.sprc1YjLM a,.sprc1YjLM a:hover,.sprc1YjLM div,.sprc1YjLM div:hover,.sprc1YjLM span,.sprc1YjLM span:hover{text-decoration:none!important}[data-spotim-direction=rtl] .sprc1YjLM a,[data-spotim-direction=rtl] .sprc1YjLM div,[data-spotim-direction=rtl] .sprc1YjLM span{text-align:inherit}.sprc1YjLM .sprc3x--K{display:none}[data-spotim-direction=rtl]{direction:rtl}.sprc1YjLM{margin:0 auto;padding:25px 0;width:calc(100% - 14px);overflow:hidden}.sprc1YjLM.sprc1pfAD{display:block!important}@media (max-width:550px){.sprc1YjLM{width:100%}}.sprc1YjLM .sprc10Iqt{cursor:pointer;-ms-flex-item-align:start;-ms-grid-row-align:start;align-self:start;margin-top:-5px;display:none}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"]:before{display:block!important;left:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"]:before{left:0!important;right:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"]:before{display:block!important;left:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"]:before{left:0!important;right:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprcRftoX{left:405px!important;height:300px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprcRftoX{left:0!important;right:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprc1eDLH{margin-left:-405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprc1eDLH{margin-left:0!important;margin-right:-405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprcRftoX{height:300px!important;margin-right:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprcRftoX{margin-right:0!important;margin-left:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprc1eDLH{margin-right:-405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprc1eDLH{margin-right:0!important;margin-left:-405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"]:after{display:block!important;right:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"]:after{right:auto!important;left:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"]:after{display:block!important;right:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-400x300\"] .sprc2PlxR [data-spotim-row=\"1\"]:after{right:auto!important;left:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprcRftoX{height:250px!important;margin-left:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprcRftoX{margin-left:0!important;margin-right:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprc1eDLH{margin-left:-305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-start-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprc1eDLH{margin-left:0!important;margin-right:-305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprcRftoX{height:250px!important;margin-right:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprcRftoX{margin-right:0!important;margin-left:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-300x250\"] .sprc2PlxR [data-spotim-row=\"2\"]:before{display:block!important;left:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-300x250\"] .sprc2PlxR [data-spotim-row=\"2\"]:before{left:0!important;right:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"]:before{display:block!important;left:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"]:before{left:0!important;right:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprcRftoX{left:405px!important;height:300px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprcRftoX{left:0!important;right:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprc1eDLH{margin-left:-405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprc1eDLH{margin-left:0!important;margin-right:-405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-end-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprcRftoX{height:300px!important;margin-right:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-end-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprcRftoX{margin-right:0!important;margin-left:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-end-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprc1eDLH{margin-right:-405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-end-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprc1eDLH{margin-right:0!important;margin-left:-405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-end-300x250\"] .sprc2PlxR [data-spotim-row=\"2\"]:after{display:block!important;right:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-end-300x250\"] .sprc2PlxR [data-spotim-row=\"2\"]:after{right:auto!important;left:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-end-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"]:after{display:block!important;right:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-end-400x300\"] .sprc2PlxR [data-spotim-row=\"2\"]:after{right:auto!important;left:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-300x250\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprcRftoX{height:250px!important;margin-left:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-300x250\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprcRftoX{margin-left:0!important;margin-right:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-300x250\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprc1eDLH{margin-left:-305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-start-300x250\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprc1eDLH{margin-left:0!important;margin-right:-305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-end-300x250\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprcRftoX{height:250px!important;margin-right:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"2-end-300x250\"] .sprc2PlxR [data-spotim-row=\"2\"] .sprcRftoX{margin-right:0!important;margin-left:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-300x250\"] .sprc2PlxR [data-spotim-row=\"3\"]:before{display:block!important;left:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-300x250\"] .sprc2PlxR [data-spotim-row=\"3\"]:before{left:0!important;right:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"]:before{display:block!important;left:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"]:before{left:0!important;right:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprcRftoX{left:405px!important;height:300px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprcRftoX{left:0!important;right:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprc1eDLH{margin-left:-405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprc1eDLH{margin-left:0!important;margin-right:-405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-end-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprcRftoX{height:300px!important;margin-right:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-end-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprcRftoX{margin-right:0!important;margin-left:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-end-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprc1eDLH{margin-right:-405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-end-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprc1eDLH{margin-right:0!important;margin-left:-405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-end-300x250\"] .sprc2PlxR [data-spotim-row=\"3\"]:after{display:block!important;right:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-end-300x250\"] .sprc2PlxR [data-spotim-row=\"3\"]:after{right:auto!important;left:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-end-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"]:after{display:block!important;right:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-end-400x300\"] .sprc2PlxR [data-spotim-row=\"3\"]:after{right:auto!important;left:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-300x250\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprcRftoX{height:250px!important;margin-left:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-300x250\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprcRftoX{margin-left:0!important;margin-right:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-300x250\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprc1eDLH{margin-left:-305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-start-300x250\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprc1eDLH{margin-left:0!important;margin-right:-305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-end-300x250\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprcRftoX{height:250px!important;margin-right:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"3-end-300x250\"] .sprc2PlxR [data-spotim-row=\"3\"] .sprcRftoX{margin-right:0!important;margin-left:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-300x250\"] .sprc2PlxR [data-spotim-row=\"4\"]:before{display:block!important;left:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-300x250\"] .sprc2PlxR [data-spotim-row=\"4\"]:before{left:0!important;right:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"]:before{display:block!important;left:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"]:before{left:0!important;right:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprcRftoX{left:405px!important;height:300px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprcRftoX{left:0!important;right:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprc1eDLH{margin-left:-405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprc1eDLH{margin-left:0!important;margin-right:-405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-end-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprcRftoX{height:300px!important;margin-right:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-end-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprcRftoX{margin-right:0!important;margin-left:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-end-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprc1eDLH{margin-right:-405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-end-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprc1eDLH{margin-right:0!important;margin-left:-405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-end-300x250\"] .sprc2PlxR [data-spotim-row=\"4\"]:after{display:block!important;right:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-end-300x250\"] .sprc2PlxR [data-spotim-row=\"4\"]:after{right:auto!important;left:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-end-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"]:after{display:block!important;right:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-end-400x300\"] .sprc2PlxR [data-spotim-row=\"4\"]:after{right:auto!important;left:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-300x250\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprcRftoX{height:250px!important;margin-left:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-300x250\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprcRftoX{margin-left:0!important;margin-right:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-300x250\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprc1eDLH{margin-left:-305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-start-300x250\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprc1eDLH{margin-left:0!important;margin-right:-305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-end-300x250\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprcRftoX{height:250px!important;margin-right:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"4-end-300x250\"] .sprc2PlxR [data-spotim-row=\"4\"] .sprcRftoX{margin-right:0!important;margin-left:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-300x250\"] .sprc2PlxR [data-spotim-row=\"5\"]:before{display:block!important;left:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-300x250\"] .sprc2PlxR [data-spotim-row=\"5\"]:before{left:0!important;right:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"]:before{display:block!important;left:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"]:before{left:0!important;right:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprcRftoX{left:405px!important;height:300px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprcRftoX{left:0!important;right:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprc1eDLH{margin-left:-405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprc1eDLH{margin-left:0!important;margin-right:-405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-end-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprcRftoX{height:300px!important;margin-right:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-end-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprcRftoX{margin-right:0!important;margin-left:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-end-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprc1eDLH{margin-right:-405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-end-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprc1eDLH{margin-right:0!important;margin-left:-405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-end-300x250\"] .sprc2PlxR [data-spotim-row=\"5\"]:after{display:block!important;right:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-end-300x250\"] .sprc2PlxR [data-spotim-row=\"5\"]:after{right:auto!important;left:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-end-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"]:after{display:block!important;right:405px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-end-400x300\"] .sprc2PlxR [data-spotim-row=\"5\"]:after{right:auto!important;left:405px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-300x250\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprcRftoX{height:250px!important;margin-left:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-300x250\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprcRftoX{margin-left:0!important;margin-right:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-300x250\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprc1eDLH{margin-left:-305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-start-300x250\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprc1eDLH{margin-left:0!important;margin-right:-305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-end-300x250\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprcRftoX{height:250px!important;margin-right:305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"5-end-300x250\"] .sprc2PlxR [data-spotim-row=\"5\"] .sprcRftoX{margin-right:0!important;margin-left:305px!important}[data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprc1eDLH{margin-right:-305px!important}[data-spotim-direction=rtl][data-spotim-module=recirculation][data-spotim-showing-slots~=\"1-end-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"] .sprc1eDLH{margin-right:0!important;margin-left:-305px!important}.sprc1YjLM .sprc2PlxR{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.sprc1YjLM .sprc2PlxR .sprcRftoX{display:block;position:relative;overflow:hidden;width:auto;height:250px}.sprc1YjLM .sprc2PlxR .sprc26lX3:before{display:none;content:\" \";position:absolute;top:0;left:0;bottom:0;width:5px;background-image:-webkit-gradient(linear,right top,left top,from(transparent),to(rgba(0,0,0,.2)));background-image:-webkit-linear-gradient(right,transparent,rgba(0,0,0,.2));background-image:linear-gradient(270deg,transparent,rgba(0,0,0,.2));z-index:2}[data-spotim-direction=rtl] .sprc1YjLM .sprc2PlxR .sprc26lX3:before{left:auto}.sprc1YjLM .sprc2PlxR .sprc26lX3:after,[data-spotim-direction=rtl] .sprc1YjLM .sprc2PlxR .sprc26lX3:before{right:0;background-image:-webkit-gradient(linear,left top,right top,from(transparent),to(rgba(0,0,0,.2)));background-image:-webkit-linear-gradient(left,transparent,rgba(0,0,0,.2));background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2))}.sprc1YjLM .sprc2PlxR .sprc26lX3:after{display:none;content:\" \";position:absolute;top:0;bottom:0;width:5px;z-index:2}[data-spotim-direction=rtl] .sprc1YjLM .sprc2PlxR .sprc26lX3:after{right:auto;left:0;background-image:-webkit-gradient(linear,right top,left top,from(transparent),to(rgba(0,0,0,.2)));background-image:-webkit-linear-gradient(right,transparent,rgba(0,0,0,.2));background-image:linear-gradient(270deg,transparent,rgba(0,0,0,.2))}.sprc1YjLM .sprc2PlxR.sprc2vg5s .sprc26lX3:after,.sprc1YjLM .sprc2PlxR.sprc8_NwJ .sprc26lX3:before{display:block}.sprc1YjLM .sprc2PlxR .sprc26lX3{margin-bottom:5px;position:relative;height:250px;-webkit-transition:height .5s;transition:height .5s}.sprc1YjLM .sprc2PlxR .sprc1eDLH{position:absolute;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-timing-function:cubic-bezier(.19,1,.22,1);transition-timing-function:cubic-bezier(.19,1,.22,1)}[data-spotim-direction=rtl] .sprc1YjLM .sprc2PlxR .sprc1eDLH{left:auto;right:0}.sprc1YjLM .sprc2PlxR .sprc1eDLH.sprcPesrx{-webkit-transition-property:none;transition-property:none}@-webkit-keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sprc1YjLM .sprc-T0Wq,.sprc1YjLM .sprc-T0Wq:after{display:block;-webkit-border-radius:50%;border-radius:50%;width:20px;height:20px}.sprc1YjLM .sprc-T0Wq{margin:0 auto;font-size:10px;position:relative;text-indent:-9999em;border-top:3px solid rgba(0,0,0,.4);border-right:3px solid rgba(0,0,0,.4);border-bottom:3px solid rgba(0,0,0,.4);border-left:3px solid rgba(0,0,0,.2);-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:a .7s infinite linear;animation:a .7s infinite linear}.sprc1YjLM .sprcZYoEa{cursor:pointer;width:9px;display:none}.sprc1YjLM [data-spotim-slot]{width:1px;height:1px;display:block;position:relative;z-index:0;background:#f2f2f2}.sprc1YjLM [data-spotim-slot][data-spotim-slot=mobile]{background:hsla(0,0%,90%,.2)}.sprc1YjLM [data-spotim-slot] .sprcbSkmQ{-webkit-user-select:none;-ms-user-select:none;user-select:none;font-size:12px;z-index:0;opacity:.4;display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.sprc1YjLM [data-spotim-slot] .sprcbSkmQ .sprcmlmgM{height:60px;width:73px}.sprc1YjLM [data-spotim-slot]:not([data-spotim-engine-type]) .sprcbSkmQ{display:none}.sprc1YjLM [data-spotim-slot] [data-spotim-extra-placement],.sprc1YjLM [data-spotim-slot] [data-spotim-slot-placement]{display:block;position:absolute;z-index:0;top:0;left:0;overflow:hidden}.sprc1YjLM [data-spotim-slot] [data-spotim-extra-placement]:empty{pointer-events:none}.sprc1YjLM [data-spotim-slot][data-spotim-slot-active] [data-spotim-extra-placement],.sprc1YjLM [data-spotim-slot][data-spotim-slot-showing] [data-spotim-extra-placement]{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.sprc1YjLM [data-spotim-slot][data-spotim-slot-active][data-spotim-slot-size=\"300x250\"],.sprc1YjLM [data-spotim-slot][data-spotim-slot-showing][data-spotim-slot-size=\"300x250\"]{width:300px!important;height:251px!important}.sprc1YjLM [data-spotim-slot][data-spotim-slot-active][data-spotim-slot-size=\"300x250\"][data-spotim-slot=mobile],.sprc1YjLM [data-spotim-slot][data-spotim-slot-showing][data-spotim-slot-size=\"300x250\"][data-spotim-slot=mobile]{width:100%!important;height:251px!important}.sprc1YjLM [data-spotim-slot][data-spotim-slot-active][data-spotim-slot-size=\"400x300\"],.sprc1YjLM [data-spotim-slot][data-spotim-slot-showing][data-spotim-slot-size=\"400x300\"]{width:400px!important;height:300px!important}.sprc1YjLM [data-spotim-slot][data-spotim-slot-active][data-spotim-slot-size=\"400x300\"][data-spotim-slot=mobile],.sprc1YjLM [data-spotim-slot][data-spotim-slot-showing][data-spotim-slot-size=\"400x300\"][data-spotim-slot=mobile]{width:100%!important;height:300px!important}.sprc1YjLM [data-spotim-slot][data-spotim-force-show][data-spotim-slot-size=\"300x250\"]{width:300px!important;height:251px!important}.sprc1YjLM [data-spotim-slot][data-spotim-force-show][data-spotim-slot-size=\"300x250\"][data-spotim-slot=mobile]{width:100%!important;height:251px!important}.sprc1YjLM [data-spotim-slot][data-spotim-force-show][data-spotim-slot-size=\"400x300\"]{width:400px!important;height:300px!important}.sprc1YjLM [data-spotim-slot][data-spotim-force-show][data-spotim-slot-size=\"400x300\"][data-spotim-slot=mobile]{width:100%!important;height:300px!important}.sprc1YjLM [data-spotim-slot][data-spotim-slot-size=\"400x300\"],.sprc1YjLM [data-spotim-slot][data-spotim-slot-size=\"400x300\"] [data-spotim-slot-placement]{width:400px;height:300px}.sprc1YjLM [data-spotim-slot][data-spotim-slot-size=\"400x300\"][data-spotim-slot=mobile] [data-spotim-slot-placement]{width:100%;height:300px}.sprc1YjLM [data-spotim-slot][data-spotim-slot-size=\"400x300\"] [data-spotim-extra-placement]{width:300px;height:250px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.sprc1YjLM [data-spotim-slot][data-spotim-slot-size=\"300x250\"] [data-spotim-extra-placement],.sprc1YjLM [data-spotim-slot][data-spotim-slot-size=\"300x250\"] [data-spotim-slot-placement]{width:300px;height:251px}.sprc1YjLM [data-spotim-slot=desktop]{position:absolute;top:0;overflow:hidden}.sprc1YjLM [data-spotim-slot=desktop][data-spotim-slot-pos=start]{right:auto;left:0}.sprc1YjLM [data-spotim-slot=desktop][data-spotim-slot-pos=end],[data-spotim-direction=rtl] .sprc1YjLM [data-spotim-slot=desktop][data-spotim-slot-pos=start]{right:0;left:auto}[data-spotim-direction=rtl] .sprc1YjLM [data-spotim-slot=desktop][data-spotim-slot-pos=end]{right:auto;left:0}.sprc1YjLM [data-spotim-slot=mobile]{display:block!important;height:0!important;overflow:hidden;width:100%;-webkit-transition:height .5s;transition:height .5s}.sprc1YjLM .sprc1GjYe{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.sprc1YjLM .sprc1GjYe .sprc2wE2_{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-weight:700;font-size:18px;line-height:24px;color:#373e44;letter-spacing:0;margin-bottom:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:10px}[data-spotim-direction=rtl] .sprc1YjLM .sprc1GjYe .sprc2wE2_{padding-right:0;padding-left:10px}@media (max-width:400px){.sprc1YjLM .sprc1GjYe .sprc2wE2_{font-size:16px}}.sprc1YjLM .sprc3VPpS{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-top:2px}.sprc1YjLM .sprc2hlM8{width:24px;height:24px;border:2px solid #c3c5c7;-webkit-border-radius:100px;border-radius:100px}.sprc1YjLM .sprc2hlM8 svg{width:24px;height:24px;stroke:#c3c5c7;margin-top:-2px;margin-left:-2px}[data-spotim-direction=rtl] .sprc1YjLM .sprc2hlM8 svg{margin-left:0;margin-right:-2px}.sprc1YjLM .sprc2hlM8:hover{cursor:default;border-color:#c3c5c7}.sprc1YjLM .sprc2hlM8:hover svg{stroke:#c3c5c7}.sprc1YjLM .sprc2hlM8.sprcJjYeB{opacity:.5;margin-right:10px}[data-spotim-direction=rtl] .sprc1YjLM .sprc2hlM8.sprcJjYeB{margin-right:0;margin-left:10px}.sprc1YjLM .sprc2hlM8.sprcJjYeB svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}[data-spotim-direction=rtl] .sprc1YjLM .sprc2hlM8.sprcJjYeB svg{-webkit-transform:rotate(0);transform:rotate(0)}.sprc1YjLM .sprc2hlM8.sprc2MkMP{opacity:.5}.sprc1YjLM .sprc2hlM8.sprc2MkMP svg{-webkit-transform:rotate(0);transform:rotate(0)}[data-spotim-direction=rtl] .sprc1YjLM .sprc2hlM8.sprc2MkMP svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sprc1YjLM .sprc2vg5s .sprc2MkMP{opacity:1}.sprc1YjLM .sprc2vg5s .sprc2MkMP:hover{cursor:pointer;border-color:#7b7f83}.sprc1YjLM .sprc2vg5s .sprc2MkMP:hover *{cursor:pointer}.sprc1YjLM .sprc2vg5s .sprc2MkMP:hover svg{stroke:#7b7f83}.sprc1YjLM .sprc8_NwJ .sprcJjYeB{opacity:1}.sprc1YjLM .sprc8_NwJ .sprcJjYeB:hover{cursor:pointer;border-color:#7b7f83}.sprc1YjLM .sprc8_NwJ .sprcJjYeB:hover *{cursor:pointer}.sprc1YjLM .sprc8_NwJ .sprcJjYeB:hover svg{stroke:#7b7f83}.sprc1YjLM .sprc2A0Jn:after{display:block;width:20px;height:20px}.sprc1YjLM .sprc2A0Jn,.sprc1YjLM .sprc2A0Jn:after{-webkit-border-radius:50%;border-radius:50%}.sprc1YjLM .sprc2A0Jn{display:none;z-index:4;width:24px;height:24px;margin:0 auto;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid #7b7f83;border-right:2px solid #7b7f83;border-bottom:2px solid #7b7f83;border-left:2px solid rgba(0,0,0,.2);-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:a .7s infinite linear;animation:a .7s infinite linear;position:absolute;top:44px;right:7px}[data-spotim-device=mobile] .sprc1YjLM .sprc2A0Jn{right:0}[data-spotim-direction=rtl] .sprc1YjLM .sprc2A0Jn{right:auto;left:7px}[data-spotim-device=mobile][data-spotim-direction=rtl] .sprc1YjLM .sprc2A0Jn{right:auto;left:0}.sprc1YjLM .sprc3xVa6 .sprc2MkMP{opacity:0}.sprc1YjLM .sprc3xVa6 .sprc2A0Jn{display:block}.sprc1YjLM .sprc1gJKQ .sprc2A0Jn{display:none!important}.sprc1YjLM .sprc1gJKQ.sprc3xVa6 .sprc2MkMP{opacity:.5!important}.sprc1YjLM .sprcFco6q{fill:#7fa6b3;background-color:rgba(127,166,179,.3)}.sprc1YjLM .sprc3pB4W{fill:#d59247;background-color:rgba(213,146,71,.3)}.sprc1YjLM .sprc2ko5l{fill:#9e79ac;background-color:rgba(158,121,172,.3)}.sprc1YjLM .sprc1_682{fill:#7fa835;background-color:rgba(127,168,53,.3)}.sprc1YjLM .sprc1mcRl{fill:#c15a5a;background-color:rgba(193,90,90,.3)}.sprc1YjLM .sprc82og8{fill:#a8abae;background-color:hsla(210,4%,67%,.3)}.sprc1YjLM .sprc3tjZF{fill:#71bbbb;background-color:rgba(113,187,187,.3)}.sprc1YjLM .sprc3xOeN{fill:#e2c62a;background-color:rgba(226,198,42,.3)}.sprc1YjLM .sprcnQGvt{fill:#b0b032;background-color:rgba(176,176,50,.3)}.sprc1YjLM .sprc3ioJl{fill:#3f62aa;background-color:rgba(63,98,170,.3)}.sprc1YjLM .sprcP_TJG{fill:red;background-color:rgba(255,0,0,.3)}.sprc1YjLM .sprc13toH{fill:#ff661a;background-color:rgba(255,102,26,.3)}.sprc1YjLM .sprc34RnE{fill:#8f2d8e;background-color:rgba(143,45,142,.3)}.sprc1YjLM .sprc1nBKX{fill:#026664;background-color:rgba(2,102,100,.3)}.sprc1YjLM .sprcdbEGT{fill:#282561;background-color:rgba(40,37,97,.3)}.sprc1YjLM .sprc272Tr{fill:#62cc6f;background-color:rgba(98,204,111,.3)}.sprc1YjLM .sprc1Hh5N{fill:#e7ae98;background-color:hsla(17,62%,75%,.3)}.sprc1YjLM .sprc2CWoE{fill:#b1b6e5;background-color:rgba(177,182,229,.3)}.sprc1YjLM .sprcU3Qow{fill:#701b2e;background-color:rgba(112,27,46,.3)}.sprc1YjLM .sprc2tD0r{fill:#ff0bd1;background-color:rgba(255,11,209,.3)}.sprc1YjLM .sprc2WM0y{fill:#b737b1;background-color:rgba(183,55,177,.3)}.sprc1YjLM .sprc1UMcc{fill:#fbcb14;background-color:rgba(251,203,20,.3)}.sprc1YjLM .sprcBh74L{fill:#0025ff;background-color:rgba(0,37,255,.3)}.sprc1YjLM .sprc7luQk{fill:#bf5253;background-color:rgba(191,82,83,.3)}.sprc1YjLM .sprc3lBDj{background-color:hsla(225,2%,52%,.3)}.sprc1YjLM .sprc29n13{fill:#a4dae7;background-color:rgba(164,218,231,.3)}.sprc1YjLM .sprc32M_R{fill:#fdcca0;background-color:hsla(28,96%,81%,.3)}.sprc1YjLM .sprc2PdlH{fill:#999bcd;background-color:rgba(153,155,205,.3)}.sprc1YjLM .sprc2WrDE{fill:#e0c9c4;background-color:hsla(11,31%,82%,.3)}.sprc1YjLM .sprcpfbj5{fill:#ef8182;background-color:rgba(239,129,130,.3)}.sprc1YjLM .sprc1j5YQ{fill:#d3708f;background-color:rgba(211,112,143,.3)}.sprc1YjLM .sprcSjIj8{fill:#ebd03a;background-color:rgba(235,208,58,.3)}[data-spotim-module=recirculation][data-spotim-active-slots~=\"1-start-300x250\"] [data-spotim-row=\"1\"] [data-spmark~=item][data-spotim-cell-index=\"1\"],[data-spotim-module=recirculation][data-spotim-active-slots~=\"1-start-300x250\"] [data-spotim-row=\"1\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3ep3z,[data-spotim-module=recirculation][data-spotim-active-slots~=\"1-start-300x250\"] [data-spotim-row=\"1\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3JGD_,[data-spotim-module=recirculation][data-spotim-active-slots~=\"2-start-300x250\"] [data-spotim-row=\"2\"] [data-spmark~=item][data-spotim-cell-index=\"1\"],[data-spotim-module=recirculation][data-spotim-active-slots~=\"2-start-300x250\"] [data-spotim-row=\"2\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3ep3z,[data-spotim-module=recirculation][data-spotim-active-slots~=\"2-start-300x250\"] [data-spotim-row=\"2\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3JGD_,[data-spotim-module=recirculation][data-spotim-active-slots~=\"3-start-300x250\"] [data-spotim-row=\"3\"] [data-spmark~=item][data-spotim-cell-index=\"1\"],[data-spotim-module=recirculation][data-spotim-active-slots~=\"3-start-300x250\"] [data-spotim-row=\"3\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3ep3z,[data-spotim-module=recirculation][data-spotim-active-slots~=\"3-start-300x250\"] [data-spotim-row=\"3\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3JGD_,[data-spotim-module=recirculation][data-spotim-active-slots~=\"4-start-300x250\"] [data-spotim-row=\"4\"] [data-spmark~=item][data-spotim-cell-index=\"1\"],[data-spotim-module=recirculation][data-spotim-active-slots~=\"4-start-300x250\"] [data-spotim-row=\"4\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3ep3z,[data-spotim-module=recirculation][data-spotim-active-slots~=\"4-start-300x250\"] [data-spotim-row=\"4\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3JGD_,[data-spotim-module=recirculation][data-spotim-active-slots~=\"5-start-300x250\"] [data-spotim-row=\"5\"] [data-spmark~=item][data-spotim-cell-index=\"1\"],[data-spotim-module=recirculation][data-spotim-active-slots~=\"5-start-300x250\"] [data-spotim-row=\"5\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3ep3z,[data-spotim-module=recirculation][data-spotim-active-slots~=\"5-start-300x250\"] [data-spotim-row=\"5\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3JGD_{width:300px!important}[data-spotim-module=recirculation][data-spotim-active-slots~=\"1-start-400x300\"] [data-spotim-row=\"1\"] [data-spmark~=item][data-spotim-cell-index=\"1\"],[data-spotim-module=recirculation][data-spotim-active-slots~=\"1-start-400x300\"] [data-spotim-row=\"1\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3ep3z,[data-spotim-module=recirculation][data-spotim-active-slots~=\"1-start-400x300\"] [data-spotim-row=\"1\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3JGD_,[data-spotim-module=recirculation][data-spotim-active-slots~=\"2-start-400x300\"] [data-spotim-row=\"2\"] [data-spmark~=item][data-spotim-cell-index=\"1\"],[data-spotim-module=recirculation][data-spotim-active-slots~=\"2-start-400x300\"] [data-spotim-row=\"2\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3ep3z,[data-spotim-module=recirculation][data-spotim-active-slots~=\"2-start-400x300\"] [data-spotim-row=\"2\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3JGD_,[data-spotim-module=recirculation][data-spotim-active-slots~=\"3-start-400x300\"] [data-spotim-row=\"3\"] [data-spmark~=item][data-spotim-cell-index=\"1\"],[data-spotim-module=recirculation][data-spotim-active-slots~=\"3-start-400x300\"] [data-spotim-row=\"3\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3ep3z,[data-spotim-module=recirculation][data-spotim-active-slots~=\"3-start-400x300\"] [data-spotim-row=\"3\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3JGD_,[data-spotim-module=recirculation][data-spotim-active-slots~=\"4-start-400x300\"] [data-spotim-row=\"4\"] [data-spmark~=item][data-spotim-cell-index=\"1\"],[data-spotim-module=recirculation][data-spotim-active-slots~=\"4-start-400x300\"] [data-spotim-row=\"4\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3ep3z,[data-spotim-module=recirculation][data-spotim-active-slots~=\"4-start-400x300\"] [data-spotim-row=\"4\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3JGD_,[data-spotim-module=recirculation][data-spotim-active-slots~=\"5-start-400x300\"] [data-spotim-row=\"5\"] [data-spmark~=item][data-spotim-cell-index=\"1\"],[data-spotim-module=recirculation][data-spotim-active-slots~=\"5-start-400x300\"] [data-spotim-row=\"5\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3ep3z,[data-spotim-module=recirculation][data-spotim-active-slots~=\"5-start-400x300\"] [data-spotim-row=\"5\"] [data-spmark~=item][data-spotim-cell-index=\"1\"] .sprc3JGD_{width:400px!important}.sprc1YjLM .sprc5DECK{-webkit-user-select:none;-ms-user-select:none;user-select:none;display:block;position:relative;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;width:160px;height:250px;-webkit-transition:width .5s;transition:width .5s;overflow:hidden;margin-right:4px;border:1px solid rgba(0,0,0,.1)}.sprc1YjLM .sprc5DECK a{margin:0;cursor:pointer}.sprc1YjLM .sprc5DECK a *,.sprc1YjLM .sprc5DECK a:hover,.sprc1YjLM .sprc5DECK a:hover *{cursor:pointer}.sprc1YjLM .sprc5DECK:hover{border:1px solid rgba(0,0,0,.2)}.sprc1YjLM .sprc5DECK:hover .sprc3JGD_{opacity:.75}.sprc1YjLM .sprc5DECK:hover .sprcrXXxN:after{z-index:3}[data-spotim-direction=rtl] .sprc1YjLM .sprc5DECK{margin-right:0;margin-left:4px}.sprc1YjLM .sprc5DECK:last-child{margin-right:0}[data-spotim-direction=rtl] .sprc1YjLM .sprc5DECK:last-child{margin-right:0;margin-left:0}.sprc1YjLM .sprcW0DhN{zoom:1}.sprc1YjLM .sprc37Avc{display:block;width:34px;height:34px;-webkit-border-radius:50%;border-radius:50%;overflow:hidden;-webkit-background-size:contain;background-size:contain}.sprc1YjLM .sprc37Avc svg{margin:10px;width:14px;height:14px}.sprc1YjLM .sprc1IQpV{-ms-flex-negative:0;flex-shrink:0}.sprc1YjLM .sprcdi9x9{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:10px;-ms-flex-negative:1;flex-shrink:1;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}[data-spotim-direction=rtl] .sprc1YjLM .sprcdi9x9{margin-left:0;margin-right:10px}.sprc1YjLM .sprc2qQzr{font-weight:700;font-size:11px;color:#373e44;line-height:1.3em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sprc1YjLM .sprcpvB1z{font-size:11px;color:#7b7f83;line-height:1.3em}.sprc1YjLM .sprc16C2K{margin-top:10px;font-size:13px;color:#373e44;line-height:18px;overflow:hidden;display:block;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;-webkit-line-clamp:2;height:40px}.sprc1YjLM .sprc3ep3z{display:block;width:160px;height:150px;position:relative;left:-1px}.sprc1YjLM .sprcrXXxN{position:absolute;left:0;right:0;bottom:0;z-index:1}.sprc1YjLM .sprcrXXxN:after{content:\" \";width:100%;height:64px;position:absolute;bottom:0;left:0;right:0;opacity:.5;background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),to(#000));background-image:-webkit-linear-gradient(top,transparent,#000);background-image:linear-gradient(-180deg,transparent,#000)}.sprc1YjLM .sprcLz-T4{text-transform:uppercase;position:relative;z-index:4;font-weight:700;font-size:11px;line-height:18px;color:#fff;margin:10px;display:block;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;max-height:36px;overflow:hidden}.sprc1YjLM .sprcLz-T4:hover{text-decoration:underline!important}.sprc1YjLM .sprc3JGD_{display:block;position:relative;width:160px;height:150px}.sprc1YjLM .sprc3JGD_ .sprc1D3TP{background-position:50%;background-repeat:no-repeat;-webkit-background-size:cover;background-size:cover;position:absolute;top:0;left:0;right:0;bottom:0}[data-spotim-direction=rtl] .sprc1YjLM .sprc3JGD_{margin-left:0;margin-right:-1px}.sprc1YjLM .sprc1LKYH{padding:10px;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.sprc1YjLM .sprc1LKYH,.sprc1YjLM .sprc2xJTJ{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.sprc1YjLM .sprc2xJTJ{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.sprc1YjLM [data-spotim-row][data-spotim-row-size=large]{height:300px}.sprc1YjLM [data-spotim-row][data-spotim-row-size=large] .sprc5DECK{width:220px;height:300px}.sprc1YjLM [data-spotim-row][data-spotim-row-size=large] .sprc5DECK .sprcpvB1z{font-size:13px}.sprc1YjLM [data-spotim-row][data-spotim-row-size=large] .sprc5DECK .sprc16C2K{-webkit-line-clamp:3;height:54px}.sprc1YjLM [data-spotim-row][data-spotim-row-size=large] .sprc5DECK .sprc3ep3z{width:220px;height:182px}.sprc1YjLM [data-spotim-row][data-spotim-row-size=large] .sprc5DECK .sprcLz-T4{font-size:13px}.sprc1YjLM [data-spotim-row][data-spotim-row-size=large] .sprc5DECK .sprc3JGD_{width:220px;height:182px}.sprc1YjLM .sprc2A0Jn{display:none!important}.sprc1YjLM .sprc3xVa6 .sprc2MkMP{opacity:1!important}.sprc1YjLM .sprc1GjYe .sprc2wE2_{font-size:30px;line-height:50px;margin-top:2px;font-family:Guardian Egyp,serif;font-weight:400}.sprc1YjLM .sprc16C2K{font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:400;font-size:11px;height:38px}.sprc1YjLM .sprc3VPpS{margin-bottom:25px}.sprc1YjLM .sprc3VPpS .sprcJjYeB{margin-right:10px}.sprc1YjLM .sprc3VPpS .sprc2hlM8{width:50px;height:50px;-webkit-border-radius:0;border-radius:0;border-width:1px}.sprc1YjLM .sprc3VPpS .sprc2hlM8 svg{margin-top:13px;margin-left:12px}</style>", t.content = "\n\t\t<!--googleoff: all-->\n\t\t<div style=\"display: none;\" class=\"spotim-recirculation sprc1YjLM\" data-spotim-direction=\"ltr\" data-spotim-rows=\"1\"><div style=\"border-top: 2px solid #2C2E33; padding-top: 15px;\" class=\"sprc2PlxR sprc2vg5s\"><div class=\"sprc1GjYe\" data-spmark=\"header\"><div class=\"sprc2wE2_\" data-spmark=\"title\">Popular In the Community</div><div class=\"sprc3VPpS\"><div data-spmark=\"navigate-back\" class=\"sprc2hlM8 sprcJjYeB\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><g fill=\"none\" fill-rule=\"evenodd\"><polyline stroke-width=\"2\" points=\"10 17 15 12 10 7\"></polyline></g></svg></div><div data-spmark=\"navigate-forward\" class=\"sprc2hlM8 sprc2MkMP\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><g fill=\"none\" fill-rule=\"evenodd\"><polyline stroke-width=\"2\" points=\"10 17 15 12 10 7\"></polyline></g></svg></div><div class=\"sprc3xVa6 sprc-T0Wq sprc2A0Jn\"></div></div></div><div class=\"sprc26lX3\" data-spmark=\"items\" data-spotim-row=\"1\" data-spotim-row-size=\"small\"><div><div data-spotim-slot=\"desktop\" data-spotim-slot-row=\"1\" data-spotim-slot-pos=\"start\"><div class=\"sprcbSkmQ\"><div class=\"sprcmlmgM\">Sponsored<div class=\"sprc-T0Wq\"></div></div></div><div data-spotim-slot-placement=\"desktop start row1\"></div><div data-spotim-overlay-slot-placement=\"desktop start row1\" data-spotim-extra-placement=\"desktop start row1\"></div><div data-spotim-passback-slot-placement=\"desktop start row1\" data-spotim-extra-placement=\"desktop start row1\"></div></div><div data-spotim-slot=\"desktop\" data-spotim-slot-row=\"1\" data-spotim-slot-pos=\"end\"><div class=\"sprcbSkmQ\"><div class=\"sprcmlmgM\">Sponsored<div class=\"sprc-T0Wq\"></div></div></div><div data-spotim-slot-placement=\"desktop end row1\"></div><div data-spotim-overlay-slot-placement=\"desktop end row1\" data-spotim-extra-placement=\"desktop end row1\"></div><div data-spotim-passback-slot-placement=\"desktop end row1\" data-spotim-extra-placement=\"desktop end row1\"></div></div></div><div class=\"sprcRftoX\"><div class=\"sprc1eDLH\" data-items-scroll><div data-spotim-cell-index=\"1\" data-spotim-row-index=\"1\" data-spmark=\"item index:1 message-id:sp_f76RE06N_post-23711027_c_LWTQyV row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/12/oculus-touch-privacy-jokes-vr/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Oculus put privacy-mocking jokes inside Touch controllers</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/nrorkhhzxuxec7pprmrk\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_ONNb5LTTuwFO\" class=\"sprc2qQzr\">samdu</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">21h</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">Lighten up, people. Sheesh.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"2\" data-spotim-row-index=\"1\" data-spmark=\"item index:2 message-id:sp_f76RE06N_post-23710960_c_6QxwtU row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/12/disney-plus-netflix-streaming/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Netflix should certainly feel threatened by Disney+</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/ue8gknftrbrjm3fzngvn\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_c51YKsLZgQqn\" class=\"sprc2qQzr\">mrreal</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">23h</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">Actually netflix is still a better deal and I will explain why. Disney plus is targeting kids it only has family friendly programs if you are looking for adult shows you need another streaming service. Netflix has something for everybody adults, kids, grandma you name it so if you are on a limited budget and can only pay for one streaming service Netflix would be your best choice.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"3\" data-spotim-row-index=\"1\" data-spmark=\"item index:3 message-id:sp_f76RE06N_post-23711020_c_bbjm1h_r_mL5KsU row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/12/weedcraft-youtube-facebook-ads-legal-marijuana-violence/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Weed is worse than murder, if you're selling a video game</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/xt9qo8q2y829grygsmc8\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_azeaTYJ9tQEz\" class=\"sprc2qQzr\">Robert</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">18h</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">Nudity and weed are extremely hazardous to the health of Americans. Violence, not so much.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"4\" data-spotim-row-index=\"1\" data-spmark=\"item index:4 message-id:sp_f76RE06N_post-23710487_c_q42mI8 row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/13/zero-motorcycles-sfr-first-ride/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Zero’s SF/R electric motorcycle is quicker and now more connected</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/lm7ddbvxyeocmfmosonm\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_ilrKWKUWIpSm\" class=\"sprc2qQzr\">twolf2919</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">3h</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">Nice article.  It would be very useful and even more informative if you compared it to the other electric motorcycle just released: the Lightning Strike (if already available for test rides).</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"5\" data-spotim-row-index=\"1\" data-spmark=\"item index:5 message-id:sp_f76RE06N_post-23708940_c_B1GQGS row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/10/canon-eos-rebel-sl3-dslr-dual-pixel/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Canon continues to shrink its DSLRs with the EOS Rebel SL3</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/qyhmycwoauuqfeqn2ubf\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_UxwKchPLaxM8\" class=\"sprc2qQzr\">Gibhunter</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">3d</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">My Samsung NX500 from 4 years ago had sensor cropped 4k video with these other limitations..   why is the market moving so slow?   Need samsung back in the game...   Even today its still a great sensor and great camera.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"6\" data-spotim-row-index=\"1\" data-spmark=\"item index:6 message-id:sp_f76RE06N_post-23710633_c_WzUVaC row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/12/tesla-35k-model-3-pulled-from-online-store/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Tesla's $35,000 Model 3 is only available as a special order</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/qk955wxj44aim5mxqvkv\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_faYCDcDULSVl\" class=\"sprc2qQzr\">theindiearmy</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">1d</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">So if I'm reading this correctly, the new M3 Standard will be a software-limited version of the M3 Standard Plus. Meaning you will now get the hardware differences that existed between the two, such as leather seats, with the Model 3 Standard. For $35,000. With the option to gain back the software-limited options by upgrading later.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"7\" data-spotim-row-index=\"1\" data-spmark=\"item index:7 message-id:sp_f76RE06N_post-23710920_c_ygQaX4 row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/12/andrew-yang-3d-hologram-rallies/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Presidential candidate Andrew Yang will use 3D holograms for remote rallies</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/ir3feti4gb3bna4nwsfd\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_im14qv6kvI4J\" class=\"sprc2qQzr\">Suzanne</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">18h</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">Ah, the personal touch. No handshakes, no autographs. No thanks. But maybe Biden could use this idea to keep his creepy hands off people.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"8\" data-spotim-row-index=\"1\" data-spmark=\"item index:8 message-id:sp_f76RE06N_post-23709763_c_v7QS0Q row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/10/ford-ceo-says-the-company-overestimated-self-driving-cars/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Ford CEO says the company 'overestimated' self-driving cars</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/ptvopaiosfeijjul8kqs\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_c51YKsLZgQqn\" class=\"sprc2qQzr\">mrreal</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">2d</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">I would take a robot behind the wheel over a human any day.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"9\" data-spotim-row-index=\"1\" data-spmark=\"item index:9 message-id:sp_f76RE06N_post-23711032_c_nWjL7D row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/12/hulu-veronica-mars-reboot-july-26/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">'Veronica Mars' reboot debuts on Hulu July 26th</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/rftl0r3sgujlxq2iucrb\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_PDbHFYkygYS1\" class=\"sprc2qQzr\">TurboFool</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">19h</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">The definition of reboot has really gone through the ringer.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"10\" data-spotim-row-index=\"1\" data-spmark=\"item index:10 message-id:sp_f76RE06N_post-23710082_c_fn3sWs row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/11/nvidia-shows-how-much-ray-tracing-sucks-on-older-gpus/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">NVIDIA shows how much ray-tracing sucks on older GPUs</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/l9fdjt68e02nxewnepjj\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_2g9aVMbEkdxt\" class=\"sprc2qQzr\">im_thatoneguy</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">2d</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">Couple important notes here.  1) No duh, RTX isn't some grand conspiracy as many people make it out to be.  Dedicated hardware smokes general purpose hardware at a task.  That shouldn't have ever been a conspiracy. 2) Port Royal isn't a game it's a tech demo designed to bring every computer to its knees.  So yeah 1080 Ti only gets 9.2fps which is 'unplayable' but the 2060 ti only gets 18fps without DLSS which is also unplayable.  It's not supposed to be playable. 3) You can always run at lower settings and use Raytracing on your older cards.   Instead of running at 1440p you can run at 1080p and get a 1.7x framerate bump.  What's important isn't to look at absolute numbers like OMG only 9FPS!!! Raytracing is worthless on my 1080ti! but the relative scales.   The 1080ti is about 1/3rd the framerate 2080.   So if you are playing a game on your 1080ti that gets 100fps at 1440p you could play at 1080p at 60fps with raytracing which is perfectly playable. This is the trade off gamers have made forever.  Resolution, Quality, Framerate. You could always balance the three. I remember on a Voodoo2 running Unreal Tournament at 640x480 because then I could turn on all of the cool lighting effects or run at 1024x768 with everything turned off. Another feature of this is you don't always need high fps.  Developers can now use DirectX raytracing in cutscenes where 24fps and 1080p is fine (aka a movie).</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"11\" data-spotim-row-index=\"1\" data-spmark=\"item index:11 message-id:sp_f76RE06N_post-23711255_c_tdOuKW row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/13/stratolaunch-completes-first-flight/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Stratolaunch completes the first flight of the world's largest airplane</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/x15wp45agqv9jzj1a2fm\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_thZzqHUCfoBL\" class=\"sprc2qQzr\">Peter</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">2m</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">That design looks awfully dodgy. I would of thought they'd join the rear wings together to make it stronger as it looks like the plane would twist itself apart in some heavy turbulence. I wouldn't get in it.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"12\" data-spotim-row-index=\"1\" data-spmark=\"item index:12 message-id:sp_f76RE06N_post-23709555_c_mGi3bZ row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/10/house-passes-net-neutrality-bill-save-the-internet-act/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">House of Representatives passes bill to restore net neutrality</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/dqwicdxgma5p7wpgjuki\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_XaOID2U4fRJ6\" class=\"sprc2qQzr\">arex91</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">2d</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">As others have posted, McConnell has already said this bill is DOA in the Senate, and 45 has said he will veto it, which should serve as a reminder to all that the GOP doesn't care about consumers.  Their priorities are 100% with their corporate benefactors.Voters need to start acting more like corporations and looking out, first and foremost, for their OWN interests, by holding their elected politicians accountable for passing legislation that benefits voters even if it is at the expense of corporate interests.  Corporations lobby politicians for deregulation so they can pollute the air and water, or for limits on liability, all to eek out more profits.  Consumers can and should play that same game by seeking laws and regulations to protect our own pocketbooks.I've said it numerous times and I'll say it again: the ONLY people who should be against Net Neutrality are ISPs, major holders of ISP stock and ISP executives whose compensation is tied directly to ISP profits.  EVERYONE ELSE--from consumers to internet-based startups, to giant edge providers like Google and Netflix--benefits from NN because it prevents ISPs from interfering with how we use our internet connections.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"13\" data-spotim-row-index=\"1\" data-spmark=\"item index:13 message-id:sp_f76RE06N_post-23710928_c_R5nP2j row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/12/pokemon-go-photo-contest/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">'Pokémon Go' challenges you to photograph its AR creatures</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/p9eoafvrg9qvxbrp8otr\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_rSUSpv4ChbOO\" class=\"sprc2qQzr\">btullis</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">22h</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">The picture at the top of the  article is photoshopped. It is virtually impossible to create a picture composed that well with their software.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"14\" data-spotim-row-index=\"1\" data-spmark=\"item index:14 message-id:sp_f76RE06N_post-23710379_c_aXQogy row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/11/playerunknowns-battlegrounds-nepal-ban-addiction/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Nepal bans 'PUBG' over concerns kids are addicted</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/vzerybavlxuyhcdq8szt\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_BWSfp2CkscKz\" class=\"sprc2qQzr\">Elranzer</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">1d</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">Nepal will be an Epic Games Store exclusive instead.</div></div></a><hr class=\"siderail-hr\" /></div><div data-spotim-cell-index=\"15\" data-spotim-row-index=\"1\" data-spmark=\"item index:15 message-id:sp_f76RE06N_post-23710474_c_WearmR row:1\" class=\"sprc5DECK\"><a href=\"https://www.engadget.com/2019/04/11/disney-plus/\" class=\"sprcW0DhN\" data-spmark=\"item-link\"><div class=\"sprc3ep3z\"><div data-spmark=\"item-title\" class=\"sprcrXXxN\"><div class=\"sprcLz-T4\">Disney+ app and worldwide rollout plans revealed</div></div><div data-spmark=\"item-image\" class=\"sprc3JGD_\"><div data-item-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_300,w_320,c_fill,g_face/v200/production/nurz2di1qbfx6qbgyflr\" class=\"sprc1D3TP\"></div></div></div><div data-spmark=\"social-content\" class=\"sprc1LKYH\"><div class=\"sprc2xJTJ\"><div class=\"sprc1IQpV\"><div data-spmark=\"user-image\" class=\"sprc37Avc\" data-user-image=\"https://images.spot.im/image/upload/q_70,fl_lossy,dpr_1.0,h_34,w_34,c_thumb,r_max,g_face/v200/aol-eng_kxziqd\"></div></div><div class=\"sprcdi9x9\"><div data-spmark=\"username user-id:u_M6Siz5YJkiqn\" class=\"sprc2qQzr\">Eludium-Q36</div><div data-spmark=\"message-time\" class=\"sprcpvB1z\">1d</div></div></div><div data-spmark=\"message-text\" class=\"sprc16C2K\">You do realize the $7/$70 pricing is their introductory rate. By year 3 it'll be $10/$100 and by year 5 at parity with Netflix. Also, among the things that went unanswered, how many simultaneous device streams per account?</div></div></a><hr class=\"siderail-hr\" /></div></div></div></div><a data-spmark=\"ad-choice\" href=\"https://dynamic-cdn.spot.im/yad/optout.html\" target=\"_blank\" class=\"sprcZYoEa\"><img src=\"https://publisher-assets.spot.im/yad/ad-choises.png\" width=\"9px\" /></a><div data-spotim-slot=\"mobile\" data-spotim-slot-row=\"2\" data-spotim-slot-pos=\"center\"><div class=\"sprcbSkmQ\"><div class=\"sprcmlmgM\">Sponsored<div class=\"sprc-T0Wq\"></div></div></div><div data-spotim-slot-placement=\"mobile\"></div><div data-spotim-overlay-slot-placement=\"mobile\" data-spotim-extra-placement=\"mobile\"></div><div data-spotim-passback-slot-placement=\"mobile\" data-spotim-extra-placement=\"mobile\"></div></div></div></div>\n\t\t<!--googleon: all-->\n  ", t.cssSelectors = {
        "recirculation": "sprc1YjLM",
        "siderail-hr": "sprc3x--K",
        "active": "sprc1pfAD",
        "adChoice": "sprcZYoEa",
        "content": "sprc2PlxR",
        "items-window": "sprcRftoX",
        "scrollable": "sprc1eDLH",
        "items": "sprc26lX3",
        "has-back-items": "sprc8_NwJ",
        "has-forward-items": "sprc2vg5s",
        "dragging": "sprcPesrx",
        "loader": "sprc-T0Wq",
        "a": "sprc2rEMe",
        "ad-choice": "sprcZYoEa",
        "sponsored-label": "sprcbSkmQ",
        "sponsored-label-content": "sprcmlmgM",
        "header": "sprc1GjYe",
        "title": "sprc2wE2_",
        "navigation": "sprc3VPpS",
        "navigate": "sprc2hlM8",
        "navigate-back": "sprcJjYeB",
        "navigate-forward": "sprc2MkMP",
        "fetch-loader": "sprc2A0Jn",
        "fetching": "sprc3xVa6",
        "reached-end": "sprc1gJKQ",
        "avatar-blue": "sprcFco6q",
        "avatar-orange": "sprc3pB4W",
        "avatar-purple": "sprc2ko5l",
        "avatar-green": "sprc1_682",
        "avatar-red": "sprc1mcRl",
        "avatar-grey": "sprc82og8",
        "avatar-cyan": "sprc3tjZF",
        "avatar-gold": "sprc3xOeN",
        "avatar-olive": "sprcnQGvt",
        "avatar-fabulous": "sprc3ioJl",
        "avatar-hot": "sprcP_TJG",
        "avatar-fierce": "sprc13toH",
        "avatar-cosmic": "sprc34RnE",
        "avatar-zen": "sprc1nBKX",
        "avatar-strong": "sprcdbEGT",
        "avatar-super": "sprc272Tr",
        "avatar-magic": "sprc1Hh5N",
        "avatar-peaceful": "sprc2CWoE",
        "avatar-daring": "sprcU3Qow",
        "avatar-heroic": "sprc2tD0r",
        "avatar-wise": "sprc2WM0y",
        "avatar-fresh": "sprc1UMcc",
        "avatar-powerful": "sprcBh74L",
        "avatar-slick": "sprc7luQk",
        "avatar-autoblog": "sprc3lBDj",
        "avatar-petty": "sprc29n13",
        "avatar-hangry": "sprc32M_R",
        "avatar-thirsty": "sprc2PdlH",
        "avatar-sarcastic": "sprc2WrDE",
        "avatar-lit": "sprcpfbj5",
        "avatar-amazing": "sprc1j5YQ",
        "avatar-drunk": "sprcSjIj8",
        "article-content": "sprc3ep3z",
        "item-image": "sprc3JGD_",
        "item": "sprc5DECK",
        "item-title": "sprcrXXxN",
        "item-content": "sprcW0DhN",
        "user-image": "sprc37Avc",
        "user-image-container": "sprc1IQpV",
        "social-details": "sprcdi9x9",
        "username": "sprc2qQzr",
        "message-time": "sprcpvB1z",
        "message-text": "sprc16C2K",
        "item-title-text": "sprcLz-T4",
        "image-background": "sprc1D3TP",
        "social-content": "sprc1LKYH",
        "social-header": "sprc2xJTJ",
        "siderailHr": "sprc3x--K",
        "itemsWindow": "sprcRftoX",
        "hasBackItems": "sprc8_NwJ",
        "hasForwardItems": "sprc2vg5s",
        "sponsoredLabel": "sprcbSkmQ",
        "sponsoredLabelContent": "sprcmlmgM",
        "navigateBack": "sprcJjYeB",
        "navigateForward": "sprc2MkMP",
        "fetchLoader": "sprc2A0Jn",
        "reachedEnd": "sprc1gJKQ",
        "avatarBlue": "sprcFco6q",
        "avatarOrange": "sprc3pB4W",
        "avatarPurple": "sprc2ko5l",
        "avatarGreen": "sprc1_682",
        "avatarRed": "sprc1mcRl",
        "avatarGrey": "sprc82og8",
        "avatarCyan": "sprc3tjZF",
        "avatarGold": "sprc3xOeN",
        "avatarOlive": "sprcnQGvt",
        "avatarFabulous": "sprc3ioJl",
        "avatarHot": "sprcP_TJG",
        "avatarFierce": "sprc13toH",
        "avatarCosmic": "sprc34RnE",
        "avatarZen": "sprc1nBKX",
        "avatarStrong": "sprcdbEGT",
        "avatarSuper": "sprc272Tr",
        "avatarMagic": "sprc1Hh5N",
        "avatarPeaceful": "sprc2CWoE",
        "avatarDaring": "sprcU3Qow",
        "avatarHeroic": "sprc2tD0r",
        "avatarWise": "sprc2WM0y",
        "avatarFresh": "sprc1UMcc",
        "avatarPowerful": "sprcBh74L",
        "avatarSlick": "sprc7luQk",
        "avatarAutoblog": "sprc3lBDj",
        "avatarPetty": "sprc29n13",
        "avatarHangry": "sprc32M_R",
        "avatarThirsty": "sprc2PdlH",
        "avatarSarcastic": "sprc2WrDE",
        "avatarLit": "sprcpfbj5",
        "avatarAmazing": "sprc1j5YQ",
        "avatarDrunk": "sprcSjIj8",
        "articleContent": "sprc3ep3z",
        "itemImage": "sprc3JGD_",
        "itemTitle": "sprcrXXxN",
        "itemContent": "sprcW0DhN",
        "userImage": "sprc37Avc",
        "userImageContainer": "sprc1IQpV",
        "socialDetails": "sprcdi9x9",
        "messageTime": "sprcpvB1z",
        "messageText": "sprc16C2K",
        "itemTitleText": "sprcLz-T4",
        "imageBackground": "sprc1D3TP",
        "socialContent": "sprc1LKYH",
        "socialHeader": "sprc2xJTJ"
    }, t.config = {
        "must": null,
        "should": null,
        "nextPageUrl": "https://recirculation.spot.im/page/sp_f76RE06N",
        "cursor": {
            "pinned": {
                "offset": 0,
                "count": 20,
                "has_next": false
            },
            "typing": {
                "offset": 0,
                "count": 20,
                "has_next": false
            },
            "live": {
                "offset": 20,
                "count": 20,
                "has_next": true
            },
            "static": {
                "offset": 0,
                "count": 20,
                "has_next": true
            },
            "has_next": true
        },
        "brandColor": "#2C2E33",
        "languageDirection": "ltr",
        "whitelist": [],
        "ads": {
            "Desktop": {
                "success": true,
                "campaigns": [{
                    "id": "camp_iyPLb28ioTfl",
                    "name": "Engadget Desktop",
                    "slot": {
                        "row": 1,
                        "column": 3
                    },
                    "tags_type": "regular",
                    "advanced_targeting": false,
                    "draft_mode_enabled": false,
                    "creative": [{
                        "percent": 100,
                        "tags": {
                            "Desktop": "tag_HTNl7aDZgmmr"
                        }
                    }]
                }],
                "tags": {
                    "tag_HTNl7aDZgmmr": {
                        "id": "tag_HTNl7aDZgmmr",
                        "name": "Engadget - Desktop Blade",
                        "type": "video",
                        "server": "SR",
                        "size": {
                            "width": "400",
                            "height": "300"
                        },
                        "code": "{\n        \"playerId\": \"5bacca380e4e28000188d092\",\n        \"apiKey\": \"587dfc37febaab0002000001\",\n        \"version\": \"1.0\", \"iframe\": true,\n                \"macros\": {\"sr_format\" : \"js\", \"page_url\":\"{PAGE_URL}\"},\n\"passback\": { \"write\": true }\n    }",
                        "reload_after": null,
                        "passback_enabled": true,
                        "passback_interval": 40,
                        "passback_code": "<script> var dayMs = 864e5, cb = parseInt(Date.now() / dayMs), vpbSrc = '//cdn.spotim.market/prebid/wrapper_hb_270443_88.js?cb=' + cb, gptSrc = '//www.googletagservices.com/tag/js/gpt.js', c = document.head || document.body || document.documentElement; function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; c.appendChild(s); s.onload = cb; s.onerror = cb; return s; } loadScript(vpbSrc, function() { loadScript(gptSrc); }) </script>\n<script src='https://www.googletagservices.com/tag/js/gpt.js'></script>\n<script>\n  window.googletag = window.googletag || {};\n  window.googletag.cmd = window.googletag.cmd || [];\n</script>\n\n<script>\nconsole.log('CMD',googletag.cmd);\n  googletag.cmd.push(function() {\n    googletag.defineSlot('/39694909/Video_Passbacks/Engadget_Passback', [300, 250], 'div-gpt-ad-1538053797337-0').addService(googletag.pubads());\n    googletag.pubads().enableSingleRequest();\n    googletag.enableServices();\n  });\n</script>\n\n<div id='div-gpt-ad-1538053797337-0' style='height:250px; width:300px;'>\n<script>\ngoogletag.cmd.push(function() { googletag.display('div-gpt-ad-1538053797337-0'); });\n</script>\n</div>"
                    }
                }
            },
            "Android-Tablet": {
                "success": true,
                "campaigns": [{
                    "id": "camp_XcvQPLVQLYEu",
                    "name": "Engadget MW Tablet",
                    "slot": {
                        "row": 1,
                        "column": 3
                    },
                    "tags_type": "regular",
                    "advanced_targeting": false,
                    "draft_mode_enabled": false,
                    "creative": [{
                        "percent": 100,
                        "tags": {
                            "Android-Tablet": "tag_lohkVCJrdDFy"
                        }
                    }]
                }],
                "tags": {
                    "tag_lohkVCJrdDFy": {
                        "id": "tag_lohkVCJrdDFy",
                        "name": "Engadget - MW MP Blade",
                        "type": "video",
                        "server": "SR",
                        "size": {
                            "width": "400",
                            "height": "300"
                        },
                        "code": "{\n        \"playerId\": \"5bacda00c604ac0001b1ea43\",\n        \"apiKey\": \"587dfc37febaab0002000001\",\n        \"version\": \"1.0\", \"iframe\": true,\n                \"macros\": {\"sr_format\" : \"js\", \"page_url\":\"{PAGE_URL}\"},\n\"passback\": { \"write\": true }\n    }",
                        "reload_after": null,
                        "passback_enabled": true,
                        "passback_interval": 40,
                        "passback_code": "<script> var dayMs = 864e5, cb = parseInt(Date.now() / dayMs), vpbSrc = '//cdn.spotim.market/prebid/wrapper_hb_270443_88.js?cb=' + cb, gptSrc = '//www.googletagservices.com/tag/js/gpt.js', c = document.head || document.body || document.documentElement; function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; c.appendChild(s); s.onload = cb; s.onerror = cb; return s; } loadScript(vpbSrc, function() { loadScript(gptSrc); }) </script>\n<script src='https://www.googletagservices.com/tag/js/gpt.js'></script>\n<script>\n  window.googletag = window.googletag || {};\n  window.googletag.cmd = window.googletag.cmd || [];\n</script>\n\n<script>\nconsole.log('CMD',googletag.cmd);\n  googletag.cmd.push(function() {\n    googletag.defineSlot('/39694909/Video_Passbacks/Engadget_Passback', [300, 250], 'div-gpt-ad-1538053797337-0').addService(googletag.pubads());\n    googletag.pubads().enableSingleRequest();\n    googletag.enableServices();\n  });\n</script>\n\n<div id='div-gpt-ad-1538053797337-0' style='height:250px; width:300px;'>\n<script>\ngoogletag.cmd.push(function() { googletag.display('div-gpt-ad-1538053797337-0'); });\n</script>\n</div>"
                    }
                }
            },
            "Android-Phone": {
                "success": true,
                "campaigns": [{
                    "id": "camp_s5gqiJHxiTj1",
                    "name": "Engadget MW Phone",
                    "slot": {
                        "row": 1,
                        "column": 3
                    },
                    "tags_type": "regular",
                    "advanced_targeting": false,
                    "draft_mode_enabled": false,
                    "creative": [{
                        "percent": 100,
                        "tags": {
                            "Android-Phone": "tag_Sjfo7ByJpLMX"
                        }
                    }]
                }],
                "tags": {
                    "tag_Sjfo7ByJpLMX": {
                        "id": "tag_Sjfo7ByJpLMX",
                        "name": "Engadget - MW SP Blade",
                        "type": "video",
                        "server": "SR",
                        "size": {
                            "width": "Responsive"
                        },
                        "code": "{\n        \"playerId\": \"5bacca280e4e28000188d08e\",\n        \"apiKey\": \"587dfc37febaab0002000001\",\n        \"version\": \"1.0\", \"iframe\": true,\n                \"macros\": {\"sr_format\" : \"js\", \"page_url\":\"{PAGE_URL}\"},\n\"passback\": { \"write\": true }\n    }",
                        "reload_after": null,
                        "passback_enabled": true,
                        "passback_interval": 40,
                        "passback_code": "<script> var dayMs = 864e5, cb = parseInt(Date.now() / dayMs), vpbSrc = '//cdn.spotim.market/prebid/wrapper_hb_270443_88.js?cb=' + cb, gptSrc = '//www.googletagservices.com/tag/js/gpt.js', c = document.head || document.body || document.documentElement; function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; c.appendChild(s); s.onload = cb; s.onerror = cb; return s; } loadScript(vpbSrc, function() { loadScript(gptSrc); }) </script>\n<script src='https://www.googletagservices.com/tag/js/gpt.js'></script>\n<script>\n  window.googletag = window.googletag || {};\n  window.googletag.cmd = window.googletag.cmd || [];\n</script>\n\n<script>\nconsole.log('CMD',googletag.cmd);\n  googletag.cmd.push(function() {\n    googletag.defineSlot('/39694909/Video_Passbacks/Engadget_Passback', [300, 250], 'div-gpt-ad-1538053797337-0').addService(googletag.pubads());\n    googletag.pubads().enableSingleRequest();\n    googletag.enableServices();\n  });\n</script>\n\n<div id='div-gpt-ad-1538053797337-0' style='height:250px; width:300px;'>\n<script>\ngoogletag.cmd.push(function() { googletag.display('div-gpt-ad-1538053797337-0'); });\n</script>\n</div>"
                    }
                }
            },
            "iOS-Tablet": {
                "success": true,
                "campaigns": [{
                    "id": "camp_XcvQPLVQLYEu",
                    "name": "Engadget MW Tablet",
                    "slot": {
                        "row": 1,
                        "column": 3
                    },
                    "tags_type": "regular",
                    "advanced_targeting": false,
                    "draft_mode_enabled": false,
                    "creative": [{
                        "percent": 100,
                        "tags": {
                            "iOS-Tablet": "tag_lohkVCJrdDFy"
                        }
                    }]
                }],
                "tags": {
                    "tag_lohkVCJrdDFy": {
                        "id": "tag_lohkVCJrdDFy",
                        "name": "Engadget - MW MP Blade",
                        "type": "video",
                        "server": "SR",
                        "size": {
                            "width": "400",
                            "height": "300"
                        },
                        "code": "{\n        \"playerId\": \"5bacda00c604ac0001b1ea43\",\n        \"apiKey\": \"587dfc37febaab0002000001\",\n        \"version\": \"1.0\", \"iframe\": true,\n                \"macros\": {\"sr_format\" : \"js\", \"page_url\":\"{PAGE_URL}\"},\n\"passback\": { \"write\": true }\n    }",
                        "reload_after": null,
                        "passback_enabled": true,
                        "passback_interval": 40,
                        "passback_code": "<script> var dayMs = 864e5, cb = parseInt(Date.now() / dayMs), vpbSrc = '//cdn.spotim.market/prebid/wrapper_hb_270443_88.js?cb=' + cb, gptSrc = '//www.googletagservices.com/tag/js/gpt.js', c = document.head || document.body || document.documentElement; function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; c.appendChild(s); s.onload = cb; s.onerror = cb; return s; } loadScript(vpbSrc, function() { loadScript(gptSrc); }) </script>\n<script src='https://www.googletagservices.com/tag/js/gpt.js'></script>\n<script>\n  window.googletag = window.googletag || {};\n  window.googletag.cmd = window.googletag.cmd || [];\n</script>\n\n<script>\nconsole.log('CMD',googletag.cmd);\n  googletag.cmd.push(function() {\n    googletag.defineSlot('/39694909/Video_Passbacks/Engadget_Passback', [300, 250], 'div-gpt-ad-1538053797337-0').addService(googletag.pubads());\n    googletag.pubads().enableSingleRequest();\n    googletag.enableServices();\n  });\n</script>\n\n<div id='div-gpt-ad-1538053797337-0' style='height:250px; width:300px;'>\n<script>\ngoogletag.cmd.push(function() { googletag.display('div-gpt-ad-1538053797337-0'); });\n</script>\n</div>"
                    }
                }
            },
            "iOS-Phone": {
                "success": true,
                "campaigns": [{
                    "id": "camp_s5gqiJHxiTj1",
                    "name": "Engadget MW Phone",
                    "slot": {
                        "row": 1,
                        "column": 3
                    },
                    "tags_type": "regular",
                    "advanced_targeting": false,
                    "draft_mode_enabled": false,
                    "creative": [{
                        "percent": 100,
                        "tags": {
                            "iOS-Phone": "tag_Sjfo7ByJpLMX"
                        }
                    }]
                }],
                "tags": {
                    "tag_Sjfo7ByJpLMX": {
                        "id": "tag_Sjfo7ByJpLMX",
                        "name": "Engadget - MW SP Blade",
                        "type": "video",
                        "server": "SR",
                        "size": {
                            "width": "Responsive"
                        },
                        "code": "{\n        \"playerId\": \"5bacca280e4e28000188d08e\",\n        \"apiKey\": \"587dfc37febaab0002000001\",\n        \"version\": \"1.0\", \"iframe\": true,\n                \"macros\": {\"sr_format\" : \"js\", \"page_url\":\"{PAGE_URL}\"},\n\"passback\": { \"write\": true }\n    }",
                        "reload_after": null,
                        "passback_enabled": true,
                        "passback_interval": 40,
                        "passback_code": "<script> var dayMs = 864e5, cb = parseInt(Date.now() / dayMs), vpbSrc = '//cdn.spotim.market/prebid/wrapper_hb_270443_88.js?cb=' + cb, gptSrc = '//www.googletagservices.com/tag/js/gpt.js', c = document.head || document.body || document.documentElement; function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; c.appendChild(s); s.onload = cb; s.onerror = cb; return s; } loadScript(vpbSrc, function() { loadScript(gptSrc); }) </script>\n<script src='https://www.googletagservices.com/tag/js/gpt.js'></script>\n<script>\n  window.googletag = window.googletag || {};\n  window.googletag.cmd = window.googletag.cmd || [];\n</script>\n\n<script>\nconsole.log('CMD',googletag.cmd);\n  googletag.cmd.push(function() {\n    googletag.defineSlot('/39694909/Video_Passbacks/Engadget_Passback', [300, 250], 'div-gpt-ad-1538053797337-0').addService(googletag.pubads());\n    googletag.pubads().enableSingleRequest();\n    googletag.enableServices();\n  });\n</script>\n\n<div id='div-gpt-ad-1538053797337-0' style='height:250px; width:300px;'>\n<script>\ngoogletag.cmd.push(function() { googletag.display('div-gpt-ad-1538053797337-0'); });\n</script>\n</div>"
                    }
                }
            },
            "spot": {
                "pub_spot_id": "sp_f76RE06N",
                "features": {
                    "conversation": {
                        "enabled": true
                    },
                    "recirculation": {
                        "enabled": true,
                        "decks": 1,
                        "ads_enabled": [1],
                        "passback": true,
                        "video_enabled": true,
                        "display_over_video_enabled": true,
                        "display_over_video_type": "display",
                        "display_over_video_code": "<script> var dayMs = 864e5, cb = parseInt(Date.now() / dayMs), vpbSrc = '//cdn.spotim.market/prebid/wrapper_hb_270443_88.js?cb=' + cb, gptSrc = '//www.googletagservices.com/tag/js/gpt.js', c = document.head || document.body || document.documentElement; function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; c.appendChild(s); s.onload = cb; s.onerror = cb; return s; } loadScript(vpbSrc, function() { loadScript(gptSrc); }) </script>\n<script src='https://www.googletagservices.com/tag/js/gpt.js'></script>\n<script>\n  window.googletag = window.googletag || {};\n  window.googletag.cmd = window.googletag.cmd || [];\n</script>\n\n<script>\nconsole.log('CMD',googletag.cmd);\n  googletag.cmd.push(function() {\n    googletag.defineSlot('/39694909/HB/Engadget_HB', [300, 250], 'div-gpt-ad-1516874908170-0').addService(googletag.pubads());\n    googletag.pubads().enableSingleRequest();\n    googletag.enableServices();\n  });\n</script>\n\n<div id='div-gpt-ad-1516874908170-0' style='height:250px; width:300px;'>\n<script>\ngoogletag.cmd.push(function() { googletag.display('div-gpt-ad-1516874908170-0'); });\n</script>\n</div>",
                        "moat_enabled": true,
                        "moat_widget_percent": 3,
                        "moat_player_percent": 3
                    }
                }
            },
            "moat_counter": {}
        },
        "enableSpotimUtm": true,
        "openLinksInNewTab": false,
        "referTraffic": true,
        "isAmp": false,
        "isSiderail": false
    });
    window.location.href.indexOf("spotim_direction=rtl") > -1 && (r.languageDirection = "rtl")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return new l({
            right: window.innerWidth,
            bottom: window.innerHeight
        })
    }

    function o(e) {
        var t = e.getBoundingClientRect();
        return new l(t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Rect = void 0;
    var a = n(138),
        s = r(a),
        u = n(139),
        c = r(u);
    t.getWindowRect = i, t.getElementRect = o;
    var l = t.Rect = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.top,
                r = void 0 === n ? 0 : n,
                i = t.left,
                o = void 0 === i ? 0 : i,
                a = t.right,
                u = void 0 === a ? 0 : a,
                c = t.bottom,
                l = void 0 === c ? 0 : c;
            (0, s.default)(this, e), this.top = r, this.left = o, this.right = u, this.bottom = l
        }
        return (0, c.default)(e, [{
            key: "getHeight",
            value: function() {
                return Math.max(this.bottom - this.top, 0)
            }
        }, {
            key: "getWidth",
            value: function() {
                return Math.max(this.right - this.left, 0)
            }
        }, {
            key: "isEmpty",
            value: function() {
                return this.top === this.bottom || this.left === this.right
            }
        }, {
            key: "isNegative",
            value: function() {
                return this.top > this.bottom || this.left > this.right
            }
        }, {
            key: "getArea",
            value: function() {
                return this.getHeight() * this.getWidth()
            }
        }, {
            key: "intersect",
            value: function(t) {
                var n = Math.max(this.top, t.top),
                    r = Math.max(this.left, t.left),
                    i = Math.min(this.right, t.right),
                    o = Math.min(this.bottom, t.bottom);
                return new e({
                    top: n,
                    left: r,
                    right: i,
                    bottom: o
                })
            }
        }, {
            key: "addFrameRect",
            value: function(t) {
                return new e({
                    top: t.top + this.top,
                    left: t.left + this.left,
                    right: t.left + this.right,
                    bottom: t.top + this.bottom
                })
            }
        }, {
            key: "toObject",
            value: function() {
                return {
                    top: this.top,
                    left: this.left,
                    right: this.right,
                    bottom: this.bottom
                }
            }
        }], [{
            key: "fromObject",
            value: function(t) {
                return new e(t)
            }
        }]), e
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.reportError = void 0;
    var i = n(102),
        o = r(i),
        a = n(147),
        s = n(113),
        u = n(150),
        c = (0, s.getDebugger)("errors"),
        l = 2,
        d = window.navigator && window.navigator.userAgent || null,
        f = (0, a.createReporter)("RecirculationClient", !0);
    t.reportError = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {};
        if (e instanceof Error) n = {
            error: e.message,
            stack: e.stack
        };
        else if ("string" == typeof e) n = {
            error: e
        };
        else try {
            n = {
                error: JSON.stringify(e)
            }
        } catch (e) {
            n = {
                error: "ERROR_IN_ERROR_REPORT" + e.message,
                stack: e.stack
            }
        }
        n = (0, o.default)({}, n, t, {
            v: l,
            ua: d,
            packageVersion: u.version
        }), c(n), f("FED-ERROR", n)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return Object.keys(e).reduce(function(t, n) {
            return t["payload_" + n] = e[n], t
        }, {})
    }

    function o(e) {
        var t = new XMLHttpRequest;
        t.open("GET", e), t.send()
    }

    function a(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
        return function(r) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (t || a) {
                var s = (0, u.default)({
                        source: "FED",
                        moduleName: e,
                        message: r
                    }, i(o)),
                    c = "https://track.spots.im/?m=" + JSON.stringify(s);
                n(c)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(148),
        u = r(s);
    t.createReporter = a
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(149),
        o = r(i);
    t.default = o.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
}, function(e, t, n) {
    e.exports = {
        default: n(104),
        __esModule: !0
    }
}, function(e, t) {
    e.exports = {
        name: "@spotim/fed-recirculation-prerender",
        version: "3.3.13",
        private: !0,
        scripts: {
            start: "node index",
            tests: "npm run node-tests && npm run browser-tests",
            "node-tests": "NODE_ENV=qa ./node_modules/mocha/bin/mocha --compilers js:./babel.js ./tests/node/**/*.js",
            "casper-tests": "NODE_ENV=tests ./node_modules/mocha-casperjs/bin/mocha-casperjs --verbose --log-level=debug ./tests/casper/*.js",
            "casper-tests-debug": "NODE_ENV=tests ./node_modules/mocha-casperjs/bin/mocha-casperjs --verbose --log-level=debug --remote-debugger-port=9022 ./tests/casper/*.js",
            "browser-tests": "NODE_ENV=tests ./node_modules/karma/bin/karma start karma.conf.js",
            "tests-debug": "NODE_ENV=tests node ./node_modules/iron-node/bin/run.js ./node_modules/mocha/bin/_mocha --compilers js:babel-register ./tests/node/**/*.js",
            production: "NODE_ENV=production node ./index.js",
            staging: "NODE_ENV=staging node ./index.js",
            qa: "NODE_ENV=staging IS_QA_ENV=true node ./index.js",
            "dev-debug": "NODE_ENV=development node ./node_modules/iron-node/bin/run.js ./index.js",
            dev: "NODE_ENV=development node ./index.js",
            "notify-translations": "NODE_ENV=staging node ./notify-translations"
        },
        dependencies: {
            "@spotim/fed-avatars": "1.0.51-rc-backport",
            "@spotim/fed-common": "1.0.161",
            "@spotim/fed-module-options": "1.1.14",
            "@spotim/fed-resources": "1.1.11",
            "@spotim/fed-utils": "1.1.68",
            "@spotim/fed-utils-viewport-observer": "1.0.69",
            "@spotim/spot-libs": "4.0.280-extractify-JRPOfWWG.0",
            animejs: "^2.0.1",
            autoprefixer: "^6.5.0",
            "aws-sdk": "^2.411.0",
            "babel-core": "^6.17.0",
            "babel-loader": "^6.2.5",
            "babel-plugin-transform-decorators-legacy": "^1.3.4",
            "babel-plugin-transform-react-jsx": "^6.8.0",
            "babel-plugin-transform-runtime": "^6.12.0",
            "babel-preset-es2015": "^6.16.0",
            "babel-preset-es2017": "^6.14.0",
            "babel-preset-react": "^6.16.0",
            "babel-preset-stage-0": "^6.5.0",
            "babel-register": "^6.16.3",
            "babel-runtime": "^6.11.6",
            "body-parser": "1.15.2",
            bugsnag: "^2.3.1",
            "bugsnag-js": "^4.7.2",
            classnames: "^2.2.5",
            compression: "1.6.2",
            cssnano: "^3.7.7",
            "deep-extend": "0.4.1",
            ejs: "^2.5.2",
            electron: "1.7.6",
            ent: "^2.2.0",
            "es6-promise": "^4.0.5",
            express: "4.14.0",
            globby: "^6.1.0",
            heapdump: "^0.3.12",
            htmlparser2: "^3.9.2",
            "inline-environment-variables-webpack-plugin": "^1.1.0",
            "intersection-observer": "^0.5.0",
            "json-loader": "^0.5.4",
            lodash: "^4.17.4",
            lozad: "^1.3.0",
            "memory-fs": "^0.3.0",
            "mobile-detect": "^1.3.5",
            moment: "^2.17.0",
            morgan: "^1.8.2",
            nanoajax: "^0.4.3",
            newrelic: "^2.2.0",
            "node-dir": "^0.1.16",
            "object-assign": "^4.1.0",
            postcss: "^5.2.4",
            "postcss-import": "9.1.0",
            "postcss-initial": "^1.5.2",
            "postcss-js": "^0.1.3",
            "postcss-mixins": "^5.4.0",
            "postcss-modules": "^0.5.2",
            "postcss-nested": "^1.0.0",
            "postcss-simple-vars": "^3.0.0",
            preact: "^6.3.0",
            "preact-render-to-string": "^3.2.1",
            "promisify-node": "^0.5.0",
            "random-int": "^1.0.0",
            raven: "^2.1.0",
            "raw-loader": "^0.5.1",
            request: "^2.75.0",
            "source-map-loader": "^0.1.5",
            svgo: "^0.6.6",
            "svgo-loader": "^1.1.0",
            transifex: "^1.4.4",
            "ua-parser": "^0.3.5",
            webfontloader: "^1.6.28",
            webpack: "^1.13.2",
            "whatwg-fetch": "^2.0.2"
        },
        devDependencies: {
            "@spotim/fed-bootstrap": "3.0.692-fed.conversation-nElUIFqc.0",
            "babel-eslint": "^6.1.2",
            "babel-plugin-transform-react-jsx": "^6.8.0",
            "babel-plugin-transform-runtime": "^6.12.0",
            "babel-preset-es2015": "^6.9.0",
            "babel-preset-stage-0": "^6.5.0",
            "babel-register": "^6.9.0",
            babelify: "^7.3.0",
            brfs: "^1.4.3",
            browserify: "^13.1.1",
            "casper-chai": "^0.3.0",
            casperjs: "^1.1.3",
            chai: "^3.5.0",
            "chai-http": "^4.2.1",
            "chai-spies": "^0.7.1",
            "concurrent-transform": "^1.0.0",
            "deep-extend": "^0.4.1",
            envify: "^4.0.0",
            eslint: "3.4.0",
            gulp: "^3.9.1",
            "gulp-awspublish": "^3.2.0",
            "gulp-awspublish-router": "^0.1.2",
            "gulp-rename": "^1.2.2",
            "gulp-svgo": "^1.0.3",
            "iron-node": "^3.0.15",
            karma: "^1.3.0",
            "karma-browserify": "^5.1.0",
            "karma-chai": "^0.1.0",
            "karma-fixture": "^0.2.6",
            "karma-html2js-preprocessor": "^1.1.0",
            "karma-mocha": "^1.3.0",
            "karma-phantomjs-launcher": "^1.0.2",
            "karma-verbose-reporter": "0.0.3",
            mkdirp: "^0.5.1",
            mocha: "^3.2.0",
            "mocha-casperjs": "^0.5.8",
            "postcss-for": "^2.1.1",
            rimraf: "^2.5.4",
            sinon: "^1.17.6",
            watchify: "^3.7.0"
        },
        resolutions: {
            "react-dev-utils": "^5.0.2"
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(152),
        o = r(i),
        a = n(113),
        s = (0, a.getDebugger)("pubsub"),
        u = new o.default,
        c = u.trigger.bind(u);
    u.trigger = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        s.apply(void 0, ["pubsub trigger"].concat(t)), c.apply(void 0, t)
    }, t.default = u
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        var n = e.indexOf(t);
        n !== -1 && e.splice(n, 1)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(138),
        a = r(o),
        s = n(139),
        u = r(s),
        c = function() {
            function e() {
                (0, a.default)(this, e), this.events = {}
            }
            return (0, u.default)(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this;
                    if (t && "function" == typeof t) return this.events[e] = this.events[e] || [], this.events[e].push(t),
                        function() {
                            n.off(e, t)
                        }
                }
            }, {
                key: "once",
                value: function(e, t) {
                    if (t && "function" == typeof t) var n = this.on(e, function() {
                        t.apply(void 0, arguments), n()
                    })
                }
            }, {
                key: "trigger",
                value: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = [];
                    this.events && this.events[e] && this.events[e].length > 0 && (i = this.events[e]), i.forEach(function(e) {
                        return e.apply(void 0, n)
                    })
                }
            }, {
                key: "off",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    this.events[e] && this.events[e].length > 0 && (t ? i(this.events[e], t) : this.events[e] = [])
                }
            }]), e
        }();
    t.default = c
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.AD_DISPLAY_STARTED = "ad-display-start", t.AD_DISPLAY_FINISHED = "ad-display-finish", t.AD_CONTENT_DISPLAY_STARTED = "ad-content-display-start", t.AD_CONTENT_DISPLAY_FINISHED = "ad-content-display-finish", t.AD_VIEWABILITY_2SEC = "ad-viewability-2sec", t.AD_VIEWABILITY_3SEC = "ad-viewability-3sec", t.DO_PAGE_BACK = "do-page-back", t.DO_PAGE_NEXT = "do-page-next", t.PAGE_BACK_CLICKED = "page-back-clicked", t.PAGE_NEXT_CLICKED = "page-next-clicked", t.IN_VIEW_2S = "in-view-2s", t.ENTERED_VIEWPORT = "entered-viewport", t.LEFT_VIEWPORT = "left-viewport"
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return (t = x).handleEvent.apply(t, [e].concat(r))
    }

    function o(e, t) {
        return x.handleEvent(e, "view_" + t)
    }

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return T.handleEvent(e, t)
    }

    function s(e) {
        return I.handleEvent(e)
    }

    function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        A.then(function(e) {
            A = function() {
                var n;
                return Promise.resolve((n = k).applyTrackerParams.apply(n, [e].concat(t)))
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initialize = void 0;
    var c = n(8),
        l = r(c),
        d = n(11),
        f = r(d),
        p = (t.initialize = function() {
            var e = (0, f.default)(l.default.mark(function e(t) {
                var n, r = t.spotId,
                    i = t.uiCaptureRoot,
                    o = t.viewportCaptureRoot,
                    a = t.demand,
                    s = void 0 === a ? null : a,
                    u = t.tagName,
                    c = void 0 === u ? null : u,
                    d = t.clientPlatform,
                    f = void 0 === d ? null : d;
                return l.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return T = new m.UiCapture({
                                root: i,
                                events: "click",
                                filters: _.filters,
                                track: p
                            }), x = new g.ViewportCapture({
                                root: o,
                                track: p,
                                filters: b.filters
                            }), I = new y.EventsCapture({
                                filters: w.filters,
                                track: p
                            }), n = [{
                                name: "logstash-analytics",
                                send: v.send
                            }], k = (0, h.exposeTrackerTo)(window, window, {
                                spotId: r,
                                senders: n
                            }), A = k.getTrackerForSource({
                                source: (0, O.resolveSource)(),
                                sourceVersion: "1471",
                                engineVendorName: s,
                                engineTagId: c,
                                clientPlatform: f
                            }), e.next = 8, (0, S.lazyLoad)();
                        case 8:
                            k.trackInitialEvents(r);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), function() {
            var e = (0, f.default)(l.default.mark(function e() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return l.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, (0, S.lazyLoad)();
                        case 2:
                            return e.abrupt("return", A.then(function(e) {
                                return e.apply(void 0, n)
                            }));
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }());
    t.captureViewportEvent = i, t.captureIntersectionEvent = o, t.captureUiEvent = a, t.captureEvent = s, t.appendTrackerParams = u;
    var h = n(155),
        v = n(182),
        m = n(218),
        g = n(219),
        y = n(220),
        _ = n(221),
        b = n(224),
        w = n(228),
        E = n(146),
        S = n(229),
        O = n(231),
        A = function() {
            return Promise.resolve(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                (0, E.reportError)("Tried to track before tracker initialized", {
                    args: t
                })
            })
        },
        k = null,
        T = null,
        x = null,
        I = null
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.exposeTrackerTo = void 0;
    var i = n(102),
        o = r(i),
        a = n(156),
        s = n(157),
        u = n(159),
        c = (n(161), n(162)),
        l = (n(181), n(180)),
        d = (0, c.getDebugger)("track");
    t.exposeTrackerTo = (0, a.exposer)("Tracker", function(e, t) {
        var n = t.spotId,
            r = t.senders;
        return d("Tracker exposed"), new s.TrackerService({
            spotId: n,
            visitId: l.visitId,
            browserId: l.browserId,
            startTime: (0, u.getStartTime)(e),
            commonParams: (0, o.default)({}, (0, u.getBrowserWindowParams)(e)),
            senders: r
        })
    })
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = e.__exposedModules = e.__exposedModules || {},
            r = n[t] = n[t] || {};
        return r
    }

    function r(e, t) {
        var r = n(e, t),
            i = r.instance;
        return i
    }

    function i(e, t) {
        function r(r) {
            var i = n(r, e);
            if (!i.instance) {
                for (var o = arguments.length, a = Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) a[s - 1] = arguments[s];
                i.instance = t.apply(void 0, a.concat([r]))
            }
            return i.instance
        }
        return r.exposeTo = function(t) {
            var i = n(t, e);
            return i.exposeTo || (i.exposeTo = r), i.exposeTo
        }, r
    }

    function o(e, t) {
        if ("function" != typeof t) throw Error("Create method must be supplied to exposer");
        return i(e, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resolveInstance = r, t.exposer = o
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return !0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TrackerService = void 0;
    var o = n(102),
        a = r(o),
        s = n(158),
        u = r(s),
        c = n(138),
        l = r(c),
        d = n(139),
        f = r(d),
        p = n(159),
        h = n(161),
        v = n(162),
        m = n(166),
        g = n(180),
        y = (0, v.getDebugger)("track");
    t.TrackerService = function() {
        function e(t) {
            var n = t.spotId,
                r = t.visitId,
                i = t.browserId,
                o = t.startTime,
                a = void 0 === o ? null : o,
                s = t.commonParams,
                u = void 0 === s ? {} : s,
                c = t.senders,
                d = void 0 === c ? [] : c;
            (0, l.default)(this, e), this.spotId = n, this.visitId = r, this.browserId = i, this.startTime = a, this.commonParams = u, this.senders = d, this.trackInitialEvents(n), y("Tracker initialized with", {
                spotId: n,
                startTime: a,
                commonParams: u
            })
        }
        return (0, f.default)(e, [{
            key: "getParamsToSend",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = Object.assign.apply(Object, [{
                    visitId: this.visitId,
                    ibBrowserId: this.browserId,
                    v: g.VERSION,
                    timeDelta: (0, p.getTimeDelta)(this.startTime),
                    uid: (0, h.guid)()
                }].concat(t));
                return r = (0, p.objectKeysToSnakeCase)(r)
            }
        }, {
            key: "track",
            value: function() {
                for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return new Promise(function(t, r) {
                    var o = e.getParamsToSend.apply(e, n);
                    i(o) ? Promise.all(e.senders.map(function(e) {
                        var t = e.name,
                            n = e.send;
                        return y("Will send with sender - " + t, o), n(o).catch(function(e) {
                            return y("Sender error - " + t, e, o)
                        })
                    })).then(t).catch(r) : (y("Excluded with", o), t())
                })
            }
        }, {
            key: "beacon",
            value: function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var i = this.getParamsToSend.apply(this, n);
                e(i), y("Beacon", i)
            }
        }, {
            key: "getTrackerForSource",
            value: function(e) {
                var t = e.source,
                    n = e.sourceVersion,
                    r = (0, u.default)(e, ["source", "sourceVersion"]);
                return Promise.resolve(this.applyTrackerParams(this.track, (0, a.default)({
                    spotId: this.spotId,
                    source: t,
                    sourceVersion: n
                }, r), this.commonParams))
            }
        }, {
            key: "applyTrackerParams",
            value: function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return y.apply(void 0, ["Applying tracker for"].concat(n)), e.bind.apply(e, [this].concat(n))
            }
        }, {
            key: "trackInitialEvents",
            value: function(e) {
                window.$$SPOTIM_TRACK_SPOTLOAD$$ = window.$$SPOTIM_TRACK_SPOTLOAD$$ || !1, window.$$SPOTIM_TRACK_SPOTLOAD$$ || (window.$$SPOTIM_TRACK_SPOTLOAD$$ = !0, m.trackSpotLoad.execute(e))
            }
        }]), e
    }()
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = {
            domain: e.location.hostname,
            url: e.location.href,
            referrer: e.document.referrer,
            lang: e.navigator.userLanguage || e.navigator.language
        };
        return t
    }

    function o(e) {
        if (e.performance && e.performance.timing) {
            var t = e.performance.timing.domLoading;
            if (!isNaN(parseInt(t)) && t > 0) return t
        }
        return null
    }

    function a(e) {
        var t = function(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "_" + e.toLowerCase()
            })
        };
        return Object.assign.apply(Object, [{}].concat((0, f.default)(Object.keys(e).map(function(n) {
            return (0, l.default)({}, t(n), e[n])
        }))))
    }

    function s(e) {
        if (e < 0) return null;
        var t = 9007199254740991;
        if (e && !isNaN(parseInt(e))) {
            var n = Date.now() - e;
            return isNaN(n) ? n = null : n < 0 ? n = null : n > t && (n = null), n
        }
        return null
    }

    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = {};
        return Object.keys(e).forEach(function(n) {
            null !== e[n] && "undefined" != typeof e[n] && (t[n] = e[n])
        }), t = encodeURIComponent(btoa(JSON.stringify(t)))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(160),
        l = r(c),
        d = n(90),
        f = r(d);
    t.getBrowserWindowParams = i, t.getStartTime = o, t.objectKeysToSnakeCase = a, t.getTimeDelta = s, t.preparePayload = u
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(140),
        o = r(i);
    t.default = function(e, t, n) {
        return t in e ? (0, o.default)(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e, t) {
    "use strict";

    function n() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }

    function r() {
        var e = n;
        return e() + e() + e() + e() + e() + e() + e() + e()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shortGuid = n, t.guid = r, t.default = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        try {
            if (null === l) {
                if (l = u.default.getKey(window.location.href.toLowerCase(), c.toLowerCase()), l || (l = window[c]), !l) try {
                    l = window.localStorage.getItem(c)
                } catch (e) {}
                l || (l = ""), l = l.split(",").map(function(e) {
                    return e.toLowerCase()
                })
            }
            return l
        } catch (e) {
            return []
        }
    }

    function o(e) {
        for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        (t = console).log.apply(t, ["%cSpot.IM " + e, "background: #307fe2; color: white;"].concat(r))
    }

    function a(e) {
        var t = i();
        return t.indexOf("*") > -1 || t.indexOf(e.toLowerCase()) > -1 ? o.bind(null, e) : function() {}
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getDebugger = a;
    var s = n(163),
        u = r(s),
        c = "SPOTIM_DEBUG_TRACK",
        l = null
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return e.split("?")[0].split("#")[0]
    }

    function o(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = Object.keys(e).reduce(function(t, n) {
                return [].concat((0, h.default)(t), [n + "=" + encodeURIComponent(e[n])])
            }, []).join("&");
        return t && n.length > 0 && (n = "?" + n), n
    }

    function a(e) {
        var t = e.indexOf("?");
        if (t === -1) return {};
        var n = e.substring(t).slice(1).split("&"),
            r = {};
        return n.forEach(function(e) {
            e = e.split("="), "" !== e[0] && (r[e[0]] = decodeURIComponent(e[1] || ""))
        }), JSON.parse(JSON.stringify(r))
    }

    function s(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = a(e),
            i = !1;
        return r.hasOwnProperty(t) && (i = null === n || r[t] === n), i
    }

    function u(e, t) {
        var n = e,
            r = {};
        if (n) {
            var i = n.indexOf("?");
            i > -1 && (r = a(n), n = n.substring(0, i))
        } else n = "";
        var s = Object.assign(r, t),
            u = o(s);
        return u.length > 0 && (n += u), n
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.urlParams,
            r = t.queryString;
        return e = Object.keys(n).reduce(function(e, t) {
            return e.indexOf(":" + t) >= -1 && (e = e.replace(":" + t, n[t])), e
        }, e), u(e, r)
    }

    function l(e, t) {
        return t.reduce(function(e, t) {
            return d(e, t)
        }, e)
    }

    function d(e, t) {
        var n = e,
            r = e.indexOf("?");
        if (r !== -1) {
            var i = e.substring(0, r),
                o = e.substring(r + 1),
                a = new RegExp("&" + t + "(=[^&]*)?|^" + t + "(=[^&]*)?&?");
            o = o.replace(a, ""), n = i + (o.length > 0 ? "?" : "") + o
        }
        return n
    }

    function f(e, t, n) {
        var r = e,
            i = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
        if (e.match(i)) r = e.replace(i, "$1" + t + "=" + n + "$2");
        else {
            var o = e.indexOf("?") !== -1 ? "&" : "?";
            r = e + o + t + "=" + n
        }
        return r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.objectFromQueryString = void 0;
    var p = n(90),
        h = r(p),
        v = n(164);
    Object.defineProperty(t, "objectFromQueryString", {
        enumerable: !0,
        get: function() {
            return v.objectFromQueryString
        }
    }), t.stripQueryStringAndHash = i, t.queryStringFromObject = o, t.buildUrl = u, t.composeUrl = c, t.removeParams = l;
    var m = n(165);
    t.default = {
        parseUrl: a,
        buildUrl: u,
        getKey: m.getKey,
        setKey: f,
        removeParams: l,
        hasQueryString: s
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = {},
            r = e.indexOf("?");
        if (r > -1) {
            var i = e.substring(r + 1);
            "" !== i && i.split("&").forEach(function(e) {
                var r = e.split("="),
                    i = (0, a.default)(r, 2),
                    o = i[0],
                    s = i[1];
                if (!t || t.indexOf(o) !== -1) try {
                    n[o] = decodeURIComponent(s)
                } catch (e) {}
            })
        }
        return n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(83),
        a = r(o);
    t.objectFromQueryString = i
}, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t.replace(/[\[\]]/g, "\\$&");
        var n, r = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"),
            i = r.exec(e);
        return n = i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getKey = n
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return this.performRequest(null, {
            spotId: e
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.trackSpotLoad = void 0;
    var i = n(167),
        o = n(178);
    t.trackSpotLoad = (0, i.createDefaultResource)(o.apiUrl, "get", "/spot/{{spotId}}", r, {
        withCredentials: !0
    })
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r, a) {
        return (0, i.createResource)(e, t, n, r, a, o.RequestHandler)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createDefaultResource = r;
    var i = n(168),
        o = n(170)
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, a) {
        function s() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return n.replace(o, function(t, n) {
                return e.hasOwnProperty(n) ? encodeURIComponent(e[n]) : t
            })
        }

        function u() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e + s(t)
        }

        function c(o) {
            return o = (0, i.extendOptions)(f, o), r(e, t, n, a, o, p)
        }

        function l() {
            return {
                apiUrl: e,
                method: t,
                url: n,
                execute: a,
                options: f
            }
        }

        function d(e, n) {
            var r = u(n);
            f = (0, i.extendOptions)(i.defaultOptions, f);
            var o;
            switch (t.toLowerCase()) {
                case "get":
                    o = p.get(r, e, f);
                    break;
                case "delete":
                    o = p.delete(r, f);
                    break;
                case "patch":
                    o = p.patch(r, e, f);
                    break;
                case "post":
                    o = p.post(r, e, f);
                    break;
                case "put":
                    o = p.put(r, e, f)
            }
            return o
        }
        var f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            p = arguments[5];
        return {
            getUrl: s,
            getFullUrl: u,
            performRequest: d,
            extend: c,
            execute: a,
            getProperties: l
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createResource = r;
    var i = n(169),
        o = /\{\{(\w+)\}\}/gi
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t, n) {
        t in e && (n[t] = e[t])
    }

    function o(e, t, n) {
        if (t in e)
            if (n[t]) {
                var r = n[t];
                n[t] = function() {
                    e[t](), r()
                }
            } else n[t] = e[t]
    }

    function a(e, t, n) {
        t in e && (Array.isArray(e[t]) ? n[t] = [].concat((0, c.default)(n[t] || []), (0, c.default)(e[t])) : n[t] = [].concat((0, c.default)(n[t] || []), [e[t]]))
    }

    function s() {
        for (var e = {}, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return n.forEach(function(t) {
            i(t, "withCredentials", e), i(t, "contentType", e), o(t, "success", e), o(t, "error", e), a(t, "requestInterceptors", e), a(t, "responseInterceptors", e), a(t, "parsers", e)
        }), e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.defaultOptions = void 0;
    var u = n(90),
        c = r(u);
    t.extendPrimitive = i, t.extendFunction = o, t.extendArray = a, t.extendOptions = s;
    t.defaultOptions = {
        withCredentials: !1,
        requestInterceptors: [],
        responseInterceptors: [],
        parsers: [],
        contentType: "application/json",
        success: function() {},
        error: function() {}
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RequestHandler = void 0;
    var i = n(138),
        o = r(i),
        a = n(139),
        s = r(a),
        u = n(171),
        c = r(u);
    t.RequestHandler = function() {
        function e() {
            (0, o.default)(this, e)
        }
        return (0, s.default)(e, null, [{
            key: "retryRequest",
            value: function(t, n) {
                var r = t.url,
                    i = t.method,
                    o = (0, c.default)(i, r);
                return o._query = t._query, o.header = t.header, o._header = t._header, o._data = t._data, e.performRequest(o, n)
            }
        }, {
            key: "performRequest",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n.withCredentials && (t = t.withCredentials()), n.contentType && (t = t.set("Content-Type", n.contentType), "application/x-www-form-urlencoded" !== n.contentType && "text/plain" !== n.contentType || (t._data = JSON.stringify(t._data))), new Promise(function(r, i) {
                    e.invokeRequestInterceptors(t, n.requestInterceptors, n).then(function(t) {
                        var o = t.request;
                        o.end(function(t, a) {
                            t ? (i(t), n.error && n.error(t)) : e.invokeResponseInterceptors(o, a, n.responseInterceptors, n).then(function(t) {
                                var o = t.response;
                                if (o.ok) {
                                    var a = e.invokeParsers(o.body, n.parsers);
                                    r(a), n.success && n.success(a)
                                } else i(o), n.error && n.error(o)
                            })
                        })
                    })
                })
            }
        }, {
            key: "invokeParsers",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) || (t = [t]);
                var n = Object.freeze(e);
                return t.reduce(function(e, t) {
                    return t(n, e)
                }, n)
            }
        }, {
            key: "invokeRequestInterceptors",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return t.reduce(function(e, t) {
                    return e.then(function(e) {
                        var r = e.request;
                        return t.requestInterceptor(r, n)
                    })
                }, Promise.resolve({
                    request: e
                }))
            }
        }, {
            key: "invokeResponseInterceptors",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return n.reduce(function(t, n) {
                    return t.then(function(t) {
                        var i = t.response;
                        return n.responseInterceptor(e, i, r)
                    })
                }, Promise.resolve({
                    response: t
                }))
            }
        }, {
            key: "get",
            value: function(t, n, r) {
                var i = c.default.get(t, n);
                return e.performRequest(i, r)
            }
        }, {
            key: "post",
            value: function(t, n, r) {
                var i = c.default.post(t, n);
                return e.performRequest(i, r)
            }
        }, {
            key: "patch",
            value: function(t, n, r) {
                var i = c.default.patch(t, n);
                return e.performRequest(i, r)
            }
        }, {
            key: "put",
            value: function(t, n, r) {
                var i = c.default.put(t, n);
                return e.performRequest(i, r)
            }
        }, {
            key: "delete",
            value: function(t, n) {
                var r = c.default.del(t);
                return e.performRequest(r, n)
            }
        }]), e
    }()
}, function(e, t, n) {
    function r() {}

    function i(e) {
        if (!v(e)) return e;
        var t = [];
        for (var n in e) o(t, n, e[n]);
        return t.join("&")
    }

    function o(e, t, n) {
        if (null != n)
            if (Array.isArray(n)) n.forEach(function(n) {
                o(e, t, n)
            });
            else if (v(n))
            for (var r in n) o(e, t + "[" + r + "]", n[r]);
        else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
        else null === n && e.push(encodeURIComponent(t))
    }

    function a(e) {
        for (var t, n, r = {}, i = e.split("&"), o = 0, a = i.length; o < a; ++o) t = i[o], n = t.indexOf("="), n == -1 ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
        return r
    }

    function s(e) {
        for (var t, n, r, i, o = e.split(/\r?\n/), a = {}, s = 0, u = o.length; s < u; ++s) n = o[s], t = n.indexOf(":"), t !== -1 && (r = n.slice(0, t).toLowerCase(), i = _(n.slice(t + 1)), a[r] = i);
        return a
    }

    function u(e) {
        return /[\/+]json($|[^-\w])/.test(e)
    }

    function c(e) {
        this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
        var t = this.xhr.status;
        1223 === t && (t = 204), this._setStatusProperties(t), this.header = this.headers = s(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function l(e, t) {
        var n = this;
        this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function() {
            var e = null,
                t = null;
            try {
                t = new c(n)
            } catch (t) {
                return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, n.xhr ? (e.rawResponse = "undefined" == typeof n.xhr.responseType ? n.xhr.responseText : n.xhr.response, e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, e.status = null), n.callback(e)
            }
            n.emit("response", t);
            var r;
            try {
                n._isResponseOK(t) || (r = new Error(t.statusText || "Unsuccessful HTTP response"))
            } catch (e) {
                r = e
            }
            r ? (r.original = e, r.response = t, r.status = t.status, n.callback(r, t)) : n.callback(null, t)
        })
    }

    function d(e, t, n) {
        var r = y("DELETE", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
    var f;
    "undefined" != typeof window ? f = window : "undefined" != typeof self ? f = self : (console.warn("Using browser-only version of superagent in non-browser environment"), f = this);
    var p = n(172),
        h = n(173),
        v = n(174),
        m = n(175),
        g = n(177),
        y = t = e.exports = function(e, n) {
            return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n)
        };
    t.Request = l, y.getXHR = function() {
        if (!(!f.XMLHttpRequest || f.location && "file:" == f.location.protocol && f.ActiveXObject)) return new XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {}
        throw Error("Browser-only version of superagent could not find XHR")
    };
    var _ = "".trim ? function(e) {
        return e.trim()
    } : function(e) {
        return e.replace(/(^\s*|\s*$)/g, "")
    };
    y.serializeObject = i, y.parseString = a, y.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
    }, y.serialize = {
        "application/x-www-form-urlencoded": i,
        "application/json": JSON.stringify
    }, y.parse = {
        "application/x-www-form-urlencoded": a,
        "application/json": JSON.parse
    }, m(c.prototype), c.prototype._parseBody = function(e) {
        var t = y.parse[this.type];
        return this.req._parser ? this.req._parser(this, e) : (!t && u(this.type) && (t = y.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null)
    }, c.prototype.toError = function() {
        var e = this.req,
            t = e.method,
            n = e.url,
            r = "cannot " + t + " " + n + " (" + this.status + ")",
            i = new Error(r);
        return i.status = this.status, i.method = t, i.url = n, i
    }, y.Response = c, p(l.prototype), h(l.prototype), l.prototype.type = function(e) {
        return this.set("Content-Type", y.types[e] || e), this
    }, l.prototype.accept = function(e) {
        return this.set("Accept", y.types[e] || e), this
    }, l.prototype.auth = function(e, t, n) {
        1 === arguments.length && (t = ""), "object" == typeof t && null !== t && (n = t, t = ""), n || (n = {
            type: "function" == typeof btoa ? "basic" : "auto"
        });
        var r = function(e) {
            if ("function" == typeof btoa) return btoa(e);
            throw new Error("Cannot use basic auth, btoa is not a function")
        };
        return this._auth(e, t, n, r)
    }, l.prototype.query = function(e) {
        return "string" != typeof e && (e = i(e)), e && this._query.push(e), this
    }, l.prototype.attach = function(e, t, n) {
        if (t) {
            if (this._data) throw Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(e, t, n || t.name)
        }
        return this
    }, l.prototype._getFormData = function() {
        return this._formData || (this._formData = new f.FormData), this._formData
    }, l.prototype.callback = function(e, t) {
        if (this._shouldRetry(e, t)) return this._retry();
        var n = this._callback;
        this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t)
    }, l.prototype.crossDomainError = function() {
        var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
    }, l.prototype.buffer = l.prototype.ca = l.prototype.agent = function() {
        return console.warn("This is not supported in browser version of superagent"), this
    }, l.prototype.pipe = l.prototype.write = function() {
        throw Error("Streaming is not supported in browser version of superagent")
    }, l.prototype._isHost = function(e) {
        return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
    }, l.prototype.end = function(e) {
        return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || r, this._finalizeQueryString(), this._end()
    }, l.prototype._end = function() {
        var e = this,
            t = this.xhr = y.getXHR(),
            n = this._formData || this._data;
        this._setTimeouts(), t.onreadystatechange = function() {
            var n = t.readyState;
            if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 == n) {
                var r;
                try {
                    r = t.status
                } catch (e) {
                    r = 0
                }
                if (!r) {
                    if (e.timedout || e._aborted) return;
                    return e.crossDomainError()
                }
                e.emit("end")
            }
        };
        var r = function(t, n) {
            n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = t, e.emit("progress", n)
        };
        if (this.hasListeners("progress")) try {
            t.onprogress = r.bind(null, "download"), t.upload && (t.upload.onprogress = r.bind(null, "upload"))
        } catch (e) {}
        try {
            this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0)
        } catch (e) {
            return this.callback(e)
        }
        if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
            var i = this._header["content-type"],
                o = this._serializer || y.serialize[i ? i.split(";")[0] : ""];
            !o && u(i) && (o = y.serialize["application/json"]), o && (n = o(n))
        }
        for (var a in this.header) null != this.header[a] && this.header.hasOwnProperty(a) && t.setRequestHeader(a, this.header[a]);
        return this._responseType && (t.responseType = this._responseType), this.emit("request", this), t.send("undefined" != typeof n ? n : null), this
    }, y.agent = function() {
        return new g
    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(e) {
        g.prototype[e.toLowerCase()] = function(t, n) {
            var r = new y.Request(e, t);
            return this._setDefaults(r), n && r.end(n), r
        }
    }), g.prototype.del = g.prototype.delete, y.get = function(e, t, n) {
        var r = y("GET", e);
        return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
    }, y.head = function(e, t, n) {
        var r = y("HEAD", e);
        return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
    }, y.options = function(e, t, n) {
        var r = y("OPTIONS", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, y.del = d, y.delete = d, y.patch = function(e, t, n) {
        var r = y("PATCH", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, y.post = function(e, t, n) {
        var r = y("POST", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, y.put = function(e, t, n) {
        var r = y("PUT", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
}, function(e, t, n) {
    function r(e) {
        if (e) return i(e)
    }

    function i(e) {
        for (var t in r.prototype) e[t] = r.prototype[t];
        return e
    }
    e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, r.prototype.once = function(e, t) {
        function n() {
            this.off(e, n), t.apply(this, arguments)
        }
        return n.fn = t, this.on(e, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n = this._callbacks["$" + e];
        if (!n) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + e], this;
        for (var r, i = 0; i < n.length; i++)
            if (r = n[i], r === t || r.fn === t) {
                n.splice(i, 1);
                break
            } return this
    }, r.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
            n = this._callbacks["$" + e];
        if (n) {
            n = n.slice(0);
            for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
        }
        return this
    }, r.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, r.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e) return i(e)
    }

    function i(e) {
        for (var t in r.prototype) e[t] = r.prototype[t];
        return e
    }
    var o = n(174);
    e.exports = r, r.prototype.clearTimeout = function() {
        return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
    }, r.prototype.parse = function(e) {
        return this._parser = e, this
    }, r.prototype.responseType = function(e) {
        return this._responseType = e, this
    }, r.prototype.serialize = function(e) {
        return this._serializer = e, this
    }, r.prototype.timeout = function(e) {
        if (!e || "object" != typeof e) return this._timeout = e, this._responseTimeout = 0, this;
        for (var t in e) switch (t) {
            case "deadline":
                this._timeout = e.deadline;
                break;
            case "response":
                this._responseTimeout = e.response;
                break;
            default:
                console.warn("Unknown timeout option", t)
        }
        return this
    }, r.prototype.retry = function(e, t) {
        return 0 !== arguments.length && e !== !0 || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, this._retries = 0, this._retryCallback = t, this
    };
    var a = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    r.prototype._shouldRetry = function(e, t) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
        if (this._retryCallback) try {
            var n = this._retryCallback(e, t);
            if (n === !0) return !0;
            if (n === !1) return !1
        } catch (e) {
            console.error(e)
        }
        if (t && t.status && t.status >= 500 && 501 != t.status) return !0;
        if (e) {
            if (e.code && ~a.indexOf(e.code)) return !0;
            if (e.timeout && "ECONNABORTED" == e.code) return !0;
            if (e.crossDomain) return !0
        }
        return !1
    }, r.prototype._retry = function() {
        return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
    }, r.prototype.then = function(e, t) {
        if (!this._fullfilledPromise) {
            var n = this;
            this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(e, t) {
                n.end(function(n, r) {
                    n ? t(n) : e(r)
                })
            })
        }
        return this._fullfilledPromise.then(e, t)
    }, r.prototype.catch = function(e) {
        return this.then(void 0, e)
    }, r.prototype.use = function(e) {
        return e(this), this
    }, r.prototype.ok = function(e) {
        if ("function" != typeof e) throw Error("Callback required");
        return this._okCallback = e, this
    }, r.prototype._isResponseOK = function(e) {
        return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300)
    }, r.prototype.get = function(e) {
        return this._header[e.toLowerCase()]
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function(e, t) {
        if (o(e)) {
            for (var n in e) this.set(n, e[n]);
            return this
        }
        return this._header[e.toLowerCase()] = t, this.header[e] = t, this
    }, r.prototype.unset = function(e) {
        return delete this._header[e.toLowerCase()], delete this.header[e], this
    }, r.prototype.field = function(e, t) {
        if (null === e || void 0 === e) throw new Error(".field(name, val) name can not be empty");
        if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), o(e)) {
            for (var n in e) this.field(n, e[n]);
            return this
        }
        if (Array.isArray(t)) {
            for (var r in t) this.field(e, t[r]);
            return this
        }
        if (null === t || void 0 === t) throw new Error(".field(name, val) val can not be empty");
        return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), this
    }, r.prototype.abort = function() {
        return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
    }, r.prototype._auth = function(e, t, n, r) {
        switch (n.type) {
            case "basic":
                this.set("Authorization", "Basic " + r(e + ":" + t));
                break;
            case "auto":
                this.username = e, this.password = t;
                break;
            case "bearer":
                this.set("Authorization", "Bearer " + e)
        }
        return this
    }, r.prototype.withCredentials = function(e) {
        return void 0 == e && (e = !0), this._withCredentials = e, this
    }, r.prototype.redirects = function(e) {
        return this._maxRedirects = e, this
    }, r.prototype.maxResponseSize = function(e) {
        if ("number" != typeof e) throw TypeError("Invalid argument");
        return this._maxResponseSize = e, this
    }, r.prototype.toJSON = function() {
        return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
        }
    }, r.prototype.send = function(e) {
        var t = o(e),
            n = this._header["content-type"];
        if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});
        else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
        if (t && o(this._data))
            for (var r in e) this._data[r] = e[r];
        else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + e : e : this._data = (this._data || "") + e) : this._data = e;
        return !t || this._isHost(e) ? this : (n || this.type("json"),
            this)
    }, r.prototype.sortQuery = function(e) {
        return this._sort = "undefined" == typeof e || e, this
    }, r.prototype._finalizeQueryString = function() {
        var e = this._query.join("&");
        if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._query.length = 0, this._sort) {
            var t = this.url.indexOf("?");
            if (t >= 0) {
                var n = this.url.substring(t + 1).split("&");
                "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&")
            }
        }
    }, r.prototype._appendQueryString = function() {
        console.trace("Unsupported")
    }, r.prototype._timeoutError = function(e, t, n) {
        if (!this._aborted) {
            var r = new Error(e + t + "ms exceeded");
            r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r)
        }
    }, r.prototype._setTimeouts = function() {
        var e = this;
        this._timeout && !this._timer && (this._timer = setTimeout(function() {
            e._timeoutError("Timeout of ", e._timeout, "ETIME")
        }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
            e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT")
        }, this._responseTimeout))
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        return null !== e && "object" == typeof e
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e) return i(e)
    }

    function i(e) {
        for (var t in r.prototype) e[t] = r.prototype[t];
        return e
    }
    var o = n(176);
    e.exports = r, r.prototype.get = function(e) {
        return this.header[e.toLowerCase()]
    }, r.prototype._setHeaderProperties = function(e) {
        var t = e["content-type"] || "";
        this.type = o.type(t);
        var n = o.params(t);
        for (var r in n) this[r] = n[r];
        this.links = {};
        try {
            e.link && (this.links = o.parseLinks(e.link))
        } catch (e) {}
    }, r.prototype._setStatusProperties = function(e) {
        var t = e / 100 | 0;
        this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), this.created = 201 == e, this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, this.notFound = 404 == e, this.unprocessableEntity = 422 == e
    }
}, function(e, t) {
    "use strict";
    t.type = function(e) {
        return e.split(/ *; */).shift()
    }, t.params = function(e) {
        return e.split(/ *; */).reduce(function(e, t) {
            var n = t.split(/ *= */),
                r = n.shift(),
                i = n.shift();
            return r && i && (e[r] = i), e
        }, {})
    }, t.parseLinks = function(e) {
        return e.split(/ *, */).reduce(function(e, t) {
            var n = t.split(/ *; */),
                r = n[0].slice(1, -1),
                i = n[1].split(/ *= */)[1].slice(1, -1);
            return e[i] = r, e
        }, {})
    }, t.cleanHeader = function(e, t) {
        return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && (delete e.authorization, delete e.cookie), e
    }
}, function(e, t) {
    function n() {
        this._defaults = []
    } ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(e) {
        n.prototype[e] = function() {
            return this._defaults.push({
                fn: e,
                arguments: arguments
            }), this
        }
    }), n.prototype._setDefaults = function(e) {
        this._defaults.forEach(function(t) {
            e[t.fn].apply(e, t.arguments)
        })
    }, e.exports = n
}, function(e, t, n) {
    (function(e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r;
        r = n(179);
        t.apiUrl = e.env.SKIP_CDN ? r.url : r.cdn
    }).call(t, n(5))
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.url = "https://tracker.spot.im", t.cdn = "https://www.spot.im/api/tracker"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.browserId = t.visitId = t.VERSION = void 0;
    var r = n(161);
    window.$$SPOTIM_VID$$ = window.$$SPOTIM_VID$$ || (0, r.guid)(), window.$$SPOTIM_BID$$ = window.$$SPOTIM_BID$$ || (0, r.guid)();
    t.VERSION = 6, t.visitId = $$SPOTIM_VID$$, t.browserId = window.$$SPOTIM_BID$$
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = u(e),
            n = {};
        return t.forEach(function(e) {
            var t = e.match(m);
            t ? n[t[1]] = t[2] : n[e] = !0
        }), Object.keys(n).length > 0 ? n : null
    }

    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!t) throw "Can't get marks path without rootNode";
        for (var n = [], r = t.parentNode ? t.parentNode : t; e && e !== r;) {
            if (e.getAttribute) {
                var o = i(e);
                o && n.push(o)
            }
            e = e.parentNode
        }
        return n
    }

    function a(e, t) {
        return !!e.find(function(e) {
            return e[t]
        })
    }

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.having,
            r = t.key,
            i = null,
            o = e.find(function(e) {
                return e[n]
            });
        return o && (i = o[r]), i
    }

    function u(e) {
        return (e.getAttribute(v) || "").split(" ").map(function(e) {
            return e.trim()
        }).filter(function(e, t, n) {
            return n.indexOf(e) === t
        }).filter(function(e) {
            return "" !== e
        })
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = u(e);
        n = n.filter(function(e) {
            return e !== t
        }), n.push(t), e.setAttribute(v, n.join(" "))
    }

    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = u(e);
        n = n.filter(function(e) {
            return e !== t
        }), e.setAttribute(v, n.join(" "))
    }

    function d(e, t) {
        var n = u(e);
        return n.indexOf(t) > -1
    }

    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.container,
            r = void 0 === n ? null : n;
        r || (r = document);
        var i = r.querySelectorAll("[" + v + '~="' + e + '"]');
        return [].concat((0, h.default)(i))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MARK_KEY = void 0;
    var p = n(90),
        h = r(p);
    t.getElementMarks = i, t.getMarksPathFromTarget = o, t.pathHasMark = a, t.getMarkValueFromPath = s, t.setElementMark = c, t.removeElementMark = l, t.elementHasMark = d, t.findMarkedElements = f;
    var v = t.MARK_KEY = "data-spmark",
        m = /([^\s]+):([^\s]*)/
}, function(e, t, n) {
    "use strict";

    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = (0, s.preparePayload)(e);
        return new Promise(function(e, n) {
            function r() {
                try {
                    document.body.removeChild(o)
                } catch (e) {}
            }

            function i() {
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                n({
                    data: t
                })
            }
            var o = document.createElement("img");
            try {
                Object.assign(o.style, {
                    width: 0,
                    height: 0,
                    opacity: 0,
                    position: "absolute"
                });
                var a = "" + c + t + "&rnd=" + Math.random();
                o.onload = function() {
                    e(), r()
                }, o.onerror = function(t) {
                    (0, u.reportToBugsnag)(a), e(), r()
                }, o.src = a, document.body.appendChild(o)
            } catch (e) {
                i(e), r()
            }
        })
    }

    function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, s.preparePayload)(e);
        "function" == typeof window.navigator.sendBeacon
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.send = r, t.beacon = i;
    var o, a = n(183),
        s = n(159),
        u = n(184);
    o = n(217).production;
    var c = ((0, a.createReporter)("Recirculation", !0), o.logstashAnalyticsUrlPrefix);
    o.logstashAnalyticsBeaconUrl
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return Object.keys(e).reduce(function(t, n) {
            return t["payload_" + n] = e[n], t
        }, {})
    }

    function o(e) {
        var t = new XMLHttpRequest;
        t.open("GET", e), t.send()
    }

    function a(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
        return function(r) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (t || a) {
                var s = (0, u.default)({
                        source: "FED",
                        moduleName: e,
                        message: r
                    }, i(o)),
                    c = "https://pix.spot.im/api/v1/pixel?m=" + JSON.stringify(s);
                n(c)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(102),
        u = r(s);
    t.createReporter = a
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = void 0;
            return window.performance && window.performance.timing && (e = parseInt(window.performance.timing.domLoading), (isNaN(e) || e < 0) && (e = void 0)), e
        }

        function o(e) {
            if (!(!e || isNaN(e) || e < 0)) {
                var t = 9007199254740991,
                    n = Date.now() - e;
                return (isNaN(n) || n < 0 || n > t) && (n = void 0), n
            }
        }

        function a() {
            var e = window.location.hostname,
                t = window.location.href,
                n = window.document.referrer,
                r = window.navigator.userLanguage || window.navigator.language,
                a = o(i()),
                s = (0, m.guid)(),
                u = window.$$SPOTIM_VID$$ = window.$$SPOTIM_VID$$ || (0, m.guid)(),
                c = void 0,
                l = void 0;
            if (window.localStorage) {
                var d = E.default.get(w.CURRENT_USER_STORAGE_KEY);
                if (l = d && d.id, l || (l = void 0), c = window.localStorage.$$SPOTIM_BID$$, !c) {
                    c = (0, m.guid)();
                    try {
                        window.localStorage.$$SPOTIM_BID$$ = c
                    } catch (e) {}
                }
            } else c = window.$$SPOTIM_BID$$ || (0, m.guid)();
            return window.$$SPOTIM_BID$$ = c, {
                domain: e,
                href: t,
                referrer: n,
                language: r,
                timeFromDomLoading: a,
                eventId: s,
                visitId: u,
                browserId: c,
                userId: l
            }
        }

        function s(e, t, n) {
            n && n()
        }

        function u(e) {
            O.default.get(e).catch(function(t) {
                s(e, t.response)
            })
        }

        function c() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = {};
            Object.keys(e).forEach(function(n) {
                null !== e[n] && "undefined" != typeof e[n] && (t[n] = e[n])
            });
            var n = encodeURIComponent(btoa(JSON.stringify(t)));
            return "" + b.default.analyticsUrl + n + "&rnd=" + Math.random()
        }

        function l(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = a(),
                o = i.domain,
                s = i.href,
                u = i.referrer,
                c = i.language,
                l = i.timeFromDomLoading,
                d = i.eventId,
                f = i.visitId,
                p = i.browserId,
                h = i.userId,
                m = (0, v.default)({
                    uid: d,
                    time_delta: l,
                    visit_id: f,
                    ib_browser_id: p,
                    source: e,
                    source_version: t,
                    type: n,
                    domain: o,
                    url: s,
                    referrer: u,
                    lang: c,
                    user_id: h
                }, r);
            return m
        }

        function d(t, n) {
            function r(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = l(t, n, e, (0, v.default)({}, m, r)),
                    o = null;
                i.navigateAfterSending && (o = i.navigateAfterSending, delete i.navigateAfterSending), A("Track", i);
                var a = c(i);
                u(a)
            }

            function i(e) {
                m.spot_id = e
            }

            function o(e) {
                m.current_user_id = e
            }

            function a(e) {
                m.post_id = e
            }

            function s(e) {
                m.is_registered = e || null
            }

            function d(e) {
                m.conversation_id = e
            }

            function f(e) {
                m = (0, v.default)({}, m, e)
            }

            function h() {
                return m
            }
            var m = {};
            e.env.PRERENDER || document.addEventListener(y.CURRENT_USER_CHANGE, function(e) {
                var t = e.detail.currentUserId;
                o(t)
            });
            var g = function(e, t) {
                    return "object" === ("undefined" == typeof e ? "undefined" : (0, p.default)(e)) && (t = e, e = t.event, delete t.event), {
                        eventType: e,
                        params: t
                    }
                },
                _ = function(e, t) {
                    var n = g(e, t);
                    r(n.eventType, n.params)
                };
            return {
                track: _,
                setSpotId: i,
                setCurrentUserId: o,
                setCurrentUserIsRegistered: s,
                setCommonParams: f,
                setPostId: a,
                setConversationId: d,
                backwardsCompat: g,
                getCommonParams: h
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = n(119),
            p = r(f),
            h = n(102),
            v = r(h);
        t.reportToBugsnag = s, t.createTracker = d;
        var m = n(161),
            g = n(185),
            y = n(186),
            _ = n(187),
            b = r(_),
            w = n(189),
            E = r(w),
            S = n(191),
            O = r(S),
            A = (0, g.getDebugger)("Analytics")
    }).call(t, n(5))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        try {
            if (null === l) {
                if (l = u.default.getKey(window.location.href.toLowerCase(), c.toLowerCase()), l || (l = window[c]), !l) try {
                    l = window.localStorage.getItem(c)
                } catch (e) {}
                l || (l = ""), l = l.split(",").map(function(e) {
                    return e.toLowerCase()
                })
            }
            return l
        } catch (e) {
            return []
        }
    }

    function o(e) {
        for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        (t = console).log.apply(t, ["%cSpot.IM " + e, "background: #307fe2; color: white;"].concat(r))
    }

    function a(e) {
        var t = i();
        return t.indexOf("*") > -1 || t.indexOf(e.toLowerCase()) > -1 ? o.bind(null, e) : function() {}
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getDebugger = a;
    var s = n(163),
        u = r(s),
        c = "SPOTIM_DEBUG_API",
        l = null
}, function(e, t, n) {
    (function(e) {
        "use strict";

        function n(e, t) {
            switch (e) {
                case i:
                    var n = t,
                        r = n.currentUser;
                    r = void 0 === r ? {} : r;
                    var o = r.username,
                        a = r.email,
                        s = r.socialNetworks;
                    t = {
                        currentUser: {
                            username: o,
                            email: a,
                            socialNetworks: s
                        }
                    }
            }
            return t
        }

        function r(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (r = n(t, r), !e.env.PRERENDER) {
                var i = new CustomEvent(t, {
                    detail: r
                });
                document.dispatchEvent(i)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.notifyHostEvent = r;
        var i = (t.USER_UP_VOTE_CLICK = "spot-im-user-up-vote-click", t.USER_DOWN_VOTE_CLICK = "spot-im-user-down-vote-click", t.USER_NOTIFICATIONS_CLICK = "spot-im-user-notifications-click", t.CURRENT_USER_TYPING_START = "spot-im-current-user-typing-start", t.CURRENT_USER_TYPING_END = "spot-im-current-user-typing-end", t.CURRENT_USER_SENT_MESSAGE = "spot-im-current-user-sent-message", t.POST_LOGIN = "spot-im-post-login");
        t.CURRENT_USER_CHANGE = "spot-im-current-user-change", t.LOGIN_START = "spot-im-login-start", t.FRAME_ENTITY_LOAD = "spot-im-frame-entity-load", t.FRAME_RESIZE = "spot-im-frame-resize", t.MODALS_HEIGHT = "spot-im-modals-height", t.USER_CLICK = "spot-im-user-click", t.API_READY = "spot-im-api-ready", t.OPEN_USER_PROFILE = "spot-im-open-user-profile", t.CONVERSATION_LOAD = "spot-im-conversation-loaded", t.CONVERSATION_CHANGE = "spot-im-conversation-changed", t.FOLLOW_TOGGLE = "spot-im-follow-toggle", t.RELOAD_WINDOW = "spot-im-reload-window", t.NAVIGATE_TO_URL = "spot-im-navigate-to-url", t.HOST_API_REALTIME_NEW_MESSAGE = "spot-im-realtime-new-message"
    }).call(t, n(5))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = null;
    r = n(188).default, t.default = r
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        analyticsUrl: "https://pix.spot.im/api/v1/pixel?m="
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.removeKey = t.safeGetObject = t.SET_AUTO_FOLLOW = t.CURRENT_USER_STORAGE_KEY = void 0;
    var i = n(190),
        o = r(i),
        a = "SPOTIM_";
    o.default.prefix = a;
    t.CURRENT_USER_STORAGE_KEY = "CURRENT_USER", t.SET_AUTO_FOLLOW = "SET_AUTO_FOLLOW", t.safeGetObject = function() {
        return o.default.get.apply(o.default, arguments) || {}
    }, t.removeKey = function(e) {
        return localStorage.removeItem(a + e)
    };
    t.default = o.default
}, function(e, t, n) {
    ! function(n, r) {
        "undefined" != typeof e && e.exports && (t = e.exports = r(n, t))
    }(this, function(e, t) {
        "use strict";
        return Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
            var t = this.length >>> 0,
                n = Number(arguments[1]) || 0;
            for (n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += t); n < t; n++)
                if (n in this && this[n] === e) return n;
            return -1
        }), t.prefix = "", t._getPrefixedKey = function(e, t) {
            return t = t || {}, t.noPrefix ? e : this.prefix + e
        }, t.set = function(e, t, n) {
            var r = this._getPrefixedKey(e, n);
            try {
                localStorage.setItem(r, JSON.stringify({
                    data: t
                }))
            } catch (n) {
                console && console.warn("Lockr didn't successfully save the '{" + e + ": " + t + "}' pair, because the localStorage is full.")
            }
        }, t.get = function(e, t, n) {
            var r, i = this._getPrefixedKey(e, n);
            try {
                r = JSON.parse(localStorage.getItem(i))
            } catch (e) {
                r = localStorage[i] ? {
                    data: localStorage.getItem(i)
                } : null
            }
            return r ? "object" == typeof r && "undefined" != typeof r.data ? r.data : void 0 : t
        }, t.sadd = function(e, n, r) {
            var i, o = this._getPrefixedKey(e, r),
                a = t.smembers(e);
            if (a.indexOf(n) > -1) return null;
            try {
                a.push(n), i = JSON.stringify({
                    data: a
                }), localStorage.setItem(o, i)
            } catch (t) {
                console.log(t), console && console.warn("Lockr didn't successfully add the " + n + " to " + e + " set, because the localStorage is full.")
            }
        }, t.smembers = function(e, t) {
            var n, r = this._getPrefixedKey(e, t);
            try {
                n = JSON.parse(localStorage.getItem(r))
            } catch (e) {
                n = null
            }
            return n && n.data ? n.data : []
        }, t.sismember = function(e, n, r) {
            return t.smembers(e).indexOf(n) > -1
        }, t.keys = function() {
            var e = [],
                n = Object.keys(localStorage);
            return 0 === t.prefix.length ? n : (n.forEach(function(n) {
                n.indexOf(t.prefix) !== -1 && e.push(n.replace(t.prefix, ""))
            }), e)
        }, t.getAll = function(e) {
            var n = t.keys();
            return e ? n.reduce(function(e, n) {
                var r = {};
                return r[n] = t.get(n), e.push(r), e
            }, []) : n.map(function(e) {
                return t.get(e)
            })
        }, t.srem = function(e, n, r) {
            var i, o, a = this._getPrefixedKey(e, r),
                s = t.smembers(e, n);
            o = s.indexOf(n), o > -1 && s.splice(o, 1), i = JSON.stringify({
                data: s
            });
            try {
                localStorage.setItem(a, i)
            } catch (t) {
                console && console.warn("Lockr couldn't remove the " + n + " from the set " + e)
            }
        }, t.rm = function(e) {
            var t = this._getPrefixedKey(e);
            localStorage.removeItem(t)
        }, t.flush = function() {
            t.prefix.length ? t.keys().forEach(function(e) {
                localStorage.removeItem(t._getPrefixedKey(e))
            }) : localStorage.clear()
        }, t
    })
}, function(e, t, n) {
    e.exports = n(192)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = new a(e),
            n = o(a.prototype.request, t);
        return i.extend(n, a.prototype, t), i.extend(n, t), n
    }
    var i = n(193),
        o = n(194),
        a = n(196),
        s = n(197),
        u = r(s);
    u.Axios = a, u.create = function(e) {
        return r(i.merge(s, e))
    }, u.Cancel = n(214), u.CancelToken = n(215), u.isCancel = n(211), u.all = function(e) {
        return Promise.all(e)
    }, u.spread = n(216), e.exports = u, e.exports.default = u
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return "[object Array]" === O.call(e)
    }

    function i(e) {
        return "[object ArrayBuffer]" === O.call(e)
    }

    function o(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }

    function a(e) {
        var t;
        return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
    }

    function s(e) {
        return "string" == typeof e
    }

    function u(e) {
        return "number" == typeof e
    }

    function c(e) {
        return "undefined" == typeof e
    }

    function l(e) {
        return null !== e && "object" == typeof e
    }

    function d(e) {
        return "[object Date]" === O.call(e)
    }

    function f(e) {
        return "[object File]" === O.call(e)
    }

    function p(e) {
        return "[object Blob]" === O.call(e)
    }

    function h(e) {
        return "[object Function]" === O.call(e)
    }

    function v(e) {
        return l(e) && h(e.pipe)
    }

    function m(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }

    function g(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "")
    }

    function y() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }

    function _(e, t) {
        if (null !== e && "undefined" != typeof e)
            if ("object" != typeof e && (e = [e]), r(e))
                for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
            else
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }

    function b() {
        function e(e, n) {
            "object" == typeof t[n] && "object" == typeof e ? t[n] = b(t[n], e) : t[n] = e
        }
        for (var t = {}, n = 0, r = arguments.length; n < r; n++) _(arguments[n], e);
        return t
    }

    function w(e, t, n) {
        return _(t, function(t, r) {
            n && "function" == typeof t ? e[r] = E(t, n) : e[r] = t
        }), e
    }
    var E = n(194),
        S = n(195),
        O = Object.prototype.toString;
    e.exports = {
        isArray: r,
        isArrayBuffer: i,
        isBuffer: S,
        isFormData: o,
        isArrayBufferView: a,
        isString: s,
        isNumber: u,
        isObject: l,
        isUndefined: c,
        isDate: d,
        isFile: f,
        isBlob: p,
        isFunction: h,
        isStream: v,
        isURLSearchParams: m,
        isStandardBrowserEnv: y,
        forEach: _,
        merge: b,
        extend: w,
        trim: g
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    function r(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
    }
    e.exports = function(e) {
        return null != e && (n(e) || r(e) || !!e._isBuffer)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.defaults = e, this.interceptors = {
            request: new a,
            response: new a
        }
    }
    var i = n(197),
        o = n(193),
        a = n(208),
        s = n(209);
    r.prototype.request = function(e) {
        "string" == typeof e && (e = o.merge({
            url: arguments[0]
        }, arguments[1])), e = o.merge(i, {
            method: "get"
        }, this.defaults, e), e.method = e.method.toLowerCase();
        var t = [s, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, o.forEach(["delete", "get", "head", "options"], function(e) {
        r.prototype[e] = function(t, n) {
            return this.request(o.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    }), o.forEach(["post", "put", "patch"], function(e) {
        r.prototype[e] = function(t, n, r) {
            return this.request(o.merge(r || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    }), e.exports = r
}, function(e, t, n) {
    (function(t) {
        "use strict";

        function r(e, t) {
            !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }

        function i() {
            var e;
            return "undefined" != typeof XMLHttpRequest ? e = n(199) : "undefined" != typeof t && (e = n(199)), e
        }
        var o = n(193),
            a = n(198),
            s = {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            u = {
                adapter: i(),
                transformRequest: [function(e, t) {
                    return a(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : o.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                }
            };
        u.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, o.forEach(["delete", "get", "head"], function(e) {
            u.headers[e] = {}
        }), o.forEach(["post", "put", "patch"], function(e) {
            u.headers[e] = o.merge(s)
        }), e.exports = u
    }).call(t, n(5))
}, function(e, t, n) {
    "use strict";
    var r = n(193);
    e.exports = function(e, t) {
        r.forEach(e, function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(193),
        i = n(200),
        o = n(203),
        a = n(204),
        s = n(205),
        u = n(201),
        c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(206);
    e.exports = function(e) {
        return new Promise(function(t, l) {
            var d = e.data,
                f = e.headers;
            r.isFormData(d) && delete f["Content-Type"];
            var p = new XMLHttpRequest,
                h = "onreadystatechange",
                v = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || s(e.url) || (p = new window.XDomainRequest, h = "onload", v = !0, p.onprogress = function() {}, p.ontimeout = function() {}), e.auth) {
                var m = e.auth.username || "",
                    g = e.auth.password || "";
                f.Authorization = "Basic " + c(m + ":" + g)
            }
            if (p.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[h] = function() {
                    if (p && (4 === p.readyState || v) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
                            r = e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                            o = {
                                data: r,
                                status: 1223 === p.status ? 204 : p.status,
                                statusText: 1223 === p.status ? "No Content" : p.statusText,
                                headers: n,
                                config: e,
                                request: p
                            };
                        i(t, l, o), p = null
                    }
                }, p.onerror = function() {
                    l(u("Network Error", e, null, p)), p = null
                }, p.ontimeout = function() {
                    l(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
                }, r.isStandardBrowserEnv()) {
                var y = n(207),
                    _ = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
                _ && (f[e.xsrfHeaderName] = _)
            }
            if ("setRequestHeader" in p && r.forEach(f, function(e, t) {
                    "undefined" == typeof d && "content-type" === t.toLowerCase() ? delete f[t] : p.setRequestHeader(t, e)
                }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                p.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                p && (p.abort(), l(e), p = null)
            }), void 0 === d && (d = null), p.send(d)
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(201);
    e.exports = function(e, t, n) {
        var i = n.config.validateStatus;
        n.status && i && !i(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(202);
    e.exports = function(e, t, n, i, o) {
        var a = new Error(e);
        return r(a, t, n, i, o)
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t, n, r, i) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = i, e
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var i = n(193);
    e.exports = function(e, t, n) {
        if (!t) return e;
        var o;
        if (n) o = n(t);
        else if (i.isURLSearchParams(t)) o = t.toString();
        else {
            var a = [];
            i.forEach(t, function(e, t) {
                null !== e && "undefined" != typeof e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, function(e) {
                    i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), a.push(r(t) + "=" + r(e))
                }))
            }), o = a.join("&")
        }
        return o && (e += (e.indexOf("?") === -1 ? "?" : "&") + o), e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(193),
        i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, o, a = {};
        return e ? (r.forEach(e.split("\n"), function(e) {
            if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
                if (a[t] && i.indexOf(t) >= 0) return;
                "set-cookie" === t ? a[t] = (a[t] ? a[t] : []).concat([n]) : a[t] = a[t] ? a[t] + ", " + n : n
            }
        }), a) : a
    }
}, function(e, t, n) {
    "use strict";
    var r = n(193);
    e.exports = r.isStandardBrowserEnv() ? function() {
        function e(e) {
            var t = e;
            return n && (i.setAttribute("href", t), t = i.href), i.setAttribute("href", t), {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }
        var t, n = /(msie|trident)/i.test(navigator.userAgent),
            i = document.createElement("a");
        return t = e(window.location.href),
            function(n) {
                var i = r.isString(n) ? e(n) : n;
                return i.protocol === t.protocol && i.host === t.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }()
}, function(e, t) {
    "use strict";

    function n() {
        this.message = "String contains an invalid character"
    }

    function r(e) {
        for (var t, r, o = String(e), a = "", s = 0, u = i; o.charAt(0 | s) || (u = "=", s % 1); a += u.charAt(63 & t >> 8 - s % 1 * 8)) {
            if (r = o.charCodeAt(s += .75), r > 255) throw new n;
            t = t << 8 | r
        }
        return a
    }
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    n.prototype = new Error, n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(193);
    e.exports = r.isStandardBrowserEnv() ? function() {
        return {
            write: function(e, t, n, i, o, a) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(i) && s.push("path=" + i), r.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }()
}, function(e, t, n) {
    "use strict";

    function r() {
        this.handlers = []
    }
    var i = n(193);
    r.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, r.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, r.prototype.forEach = function(e) {
        i.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }, e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    var i = n(193),
        o = n(210),
        a = n(211),
        s = n(197),
        u = n(212),
        c = n(213);
    e.exports = function(e) {
        r(e), e.baseURL && !u(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
            delete e.headers[t]
        });
        var t = e.adapter || s.adapter;
        return t(e).then(function(t) {
            return r(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }, function(t) {
            return a(t) || (r(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(193);
    e.exports = function(e, t, n) {
        return r.forEach(n, function(n) {
            e = n(e, t)
        }), e
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        this.message = e
    }
    n.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, n.prototype.__CANCEL__ = !0, e.exports = n
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e
        });
        var n = this;
        e(function(e) {
            n.reason || (n.reason = new i(e), t(n.reason))
        })
    }
    var i = n(214);
    r.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, r.source = function() {
        var e, t = new r(function(t) {
            e = t
        });
        return {
            token: t,
            cancel: e
        }
    }, e.exports = r
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        staging: {
            serviceUrl: "http://v2.staging-spot.im/api/track",
            logstashAnalyticsUrlPrefix: "https://pix.staging-spot.im/api/v1/pixel?m=",
            logstashAnalyticsBeaconUrl: "https://pix.staging-spot.im/api/v1/pixel"
        },
        production: {
            serviceUrl: "http://www.spot.im/api/track",
            logstashAnalyticsUrlPrefix: "https://pix.spot.im/api/v1/pixel?m=",
            logstashAnalyticsBeaconUrl: "https://pix.spot.im/api/v1/pixel"
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.UiCapture = void 0;
    var i = n(138),
        o = r(i),
        a = n(139),
        s = r(a),
        u = n(181);
    t.UiCapture = function() {
        function e(t) {
            var n = t.root,
                r = void 0 === n ? null : n,
                i = (t.events, t.filters),
                a = void 0 === i ? [] : i,
                s = t.track,
                u = void 0 === s ? function() {} : s;
            (0, o.default)(this, e), this.root = r, this.filters = a, this.track = u
        }
        return (0, s.default)(e, [{
            key: "attachHandlers",
            value: function(e, t) {
                var n = this;
                t = t.split(" "), t.forEach(function(t) {
                    return e.addEventListener(t, n.handleEvent.bind(n), !0)
                })
            }
        }, {
            key: "handleEvent",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = {},
                    i = !1;
                return this.filters.forEach(function(o) {
                    for (var a = [], s = e.target, c = t.root && t.root.parentNode ? t.root.parentNode : t.root; s && s !== c;) {
                        if (s.getAttribute) {
                            var l = (0, u.getElementMarks)(s);
                            l && a.push(l)
                        }
                        s = s.parentNode
                    }
                    if (a.length > 0 && o.query(e.type, a, n)) {
                        var d = o.transform(e.type, a, n);
                        d && Object.keys(d).length > 0 && (Object.assign(r, d), i = !0)
                    }
                }), i ? this.track(r) : Promise.resolve()
            }
        }]), e
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ViewportCapture = void 0;
    var i = n(138),
        o = r(i),
        a = n(139),
        s = r(a),
        u = n(181);
    t.ViewportCapture = function() {
        function e(t) {
            var n = t.root,
                r = t.filters,
                i = t.track;
            (0, o.default)(this, e), this.root = n, this.track = i, this.filters = r
        }
        return (0, s.default)(e, [{
            key: "handleEvent",
            value: function(e, t) {
                var n = this,
                    r = {},
                    i = !1;
                return this.filters.forEach(function(o) {
                    for (var a = [], s = e, c = n.root && n.root.parentNode ? n.root.parentNode : n.root; s && s !== c;) {
                        if (s.getAttribute) {
                            var l = (0, u.getElementMarks)(s);
                            l && a.push(l)
                        }
                        s = s.parentNode
                    }
                    if (o.query(t, a)) {
                        var d = o.transform(t, a, n.handleEvent.bind(n, e));
                        d && Object.keys(d).length > 0 && (Object.assign(r, d), i = !0)
                    }
                }), i ? this.track(r) : Promise.resolve()
            }
        }]), e
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.EventsCapture = void 0;
    var i = n(138),
        o = r(i),
        a = n(139),
        s = r(a);
    t.EventsCapture = function() {
        function e(t) {
            var n = t.filters,
                r = t.track;
            (0, o.default)(this, e), this.filters = n, this.track = r
        }
        return (0, s.default)(e, [{
            key: "handleEvent",
            value: function(e) {
                var t = {},
                    n = !1;
                return this.filters.forEach(function(r) {
                    if (r.query(e)) {
                        var i = r.transform(e, null);
                        i && Object.keys(i).length > 0 && (Object.assign(t, i), n = !0)
                    }
                }), n ? this.track(t) : Promise.resolve()
            }
        }]), e
    }()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.filters = void 0;
    var r = n(222),
        i = n(223);
    t.filters = [{
        query: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    redirect: !1
                },
                i = n.redirect;
            return i && (0, r.pathHasMark)(t, "item")
        },
        transform: function(e, t) {
            var n = "item";
            return (0, r.pathHasMark)(t, "user-image") ? n = "user-image" : (0, r.pathHasMark)(t, "username") ? n = "username" : (0, r.pathHasMark)(t, "message-time") ? n = "message-time" : (0, r.pathHasMark)(t, "message-text") ? n = "message-text" : (0, r.pathHasMark)(t, "item-title") ? n = "item-title" : (0, r.pathHasMark)(t, "item-image") && (n = "item-image"), {
                type: "clicked",
                element: n,
                row: (0, i.safeParseInt)((0, r.getMarkValueFromPath)(t, {
                    having: "item",
                    key: "row"
                })),
                column: (0, i.safeParseInt)((0, r.getMarkValueFromPath)(t, {
                    having: "item",
                    key: "index"
                }))
            }
        }
    }]
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = u(e),
            n = {};
        return t.forEach(function(e) {
            var t = e.match(m);
            t ? n[t[1]] = t[2] : n[e] = !0
        }), Object.keys(n).length > 0 ? n : null
    }

    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!t) throw "Can't get marks path without rootNode";
        for (var n = [], r = t.parentNode ? t.parentNode : t; e && e !== r;) {
            if (e.getAttribute) {
                var o = i(e);
                o && n.push(o)
            }
            e = e.parentNode
        }
        return n
    }

    function a(e, t) {
        return !!e.find(function(e) {
            return e[t]
        })
    }

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.having,
            r = t.key,
            i = null,
            o = e.find(function(e) {
                return e[n];
            });
        return o && (i = o[r]), i
    }

    function u(e) {
        return (e.getAttribute(v) || "").split(" ").map(function(e) {
            return e.trim()
        }).filter(function(e, t, n) {
            return n.indexOf(e) === t
        }).filter(function(e) {
            return "" !== e
        })
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = u(e);
        n = n.filter(function(e) {
            return e !== t
        }), n.push(t), e.setAttribute(v, n.join(" "))
    }

    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = u(e);
        n = n.filter(function(e) {
            return e !== t
        }), e.setAttribute(v, n.join(" "))
    }

    function d(e, t) {
        var n = u(e);
        return n.indexOf(t) > -1
    }

    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.container,
            r = void 0 === n ? null : n;
        r || (r = document);
        var i = r.querySelectorAll("[" + v + '~="' + e + '"]');
        return [].concat((0, h.default)(i))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MARK_KEY = void 0;
    var p = n(90),
        h = r(p);
    t.getElementMarks = i, t.getMarksPathFromTarget = o, t.pathHasMark = a, t.getMarkValueFromPath = s, t.setElementMark = c, t.removeElementMark = l, t.elementHasMark = d, t.findMarkedElements = f;
    var v = t.MARK_KEY = "data-spmark",
        m = /([^\s]+):([^\s]*)/
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.safeParseInt = function(e) {
        var t = parseInt(e);
        return isNaN(t) ? null : t
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        "viewed" === e ? (d || (l = Date.now(), d = setTimeout(function() {
            t("in-viewport-2s"), u.default.trigger(c.IN_VIEW_2S)
        }, 2e3)), f || (f = !0, u.default.trigger(c.ENTERED_VIEWPORT), setTimeout(function() {
            t("after-viewed-3s")
        }, 3e3), setTimeout(function() {
            t("after-viewed-10s")
        }, 1e4))) : "unviewed" === e && (clearTimeout(d), d = null)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.filters = void 0, t.viewportTimers = i;
    var o = n(225),
        a = n(226),
        s = n(151),
        u = r(s),
        c = n(153),
        l = (t.filters = [{
            query: function(e, t) {
                return [a.MORE_HALF_ENTER, a.FULL_ENTER].indexOf(e) > -1
            },
            transform: function(e, t, n) {
                return i("viewed", n), o.filters.onlyOnce({
                    type: "viewed",
                    element: "recirculation"
                })
            }
        }, {
            query: function(e, t) {
                return [a.MORE_HALF_LEAVE, a.FULL_LEAVE].indexOf(e) > -1
            },
            transform: function(e, t, n) {
                return i("unviewed", n), o.filters.onlyOnce({
                    type: "unviewed",
                    element: "recirculation"
                })
            }
        }, {
            query: function(e) {
                return ["in-viewport-2s", "after-viewed-3s", "after-viewed-10s"].indexOf(e) > -1
            },
            transform: function(e) {
                return o.filters.onlyOnce({
                    type: e
                })
            }
        }], null),
        d = null,
        f = !1
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.filters = t.Filters = void 0;
    var i = n(102),
        o = r(i),
        a = n(119),
        s = r(a),
        u = n(138),
        c = r(u),
        l = n(139),
        d = r(l),
        f = t.Filters = function() {
            function e() {
                (0, c.default)(this, e), this.buffer = {}
            }
            return (0, d.default)(e, [{
                key: "getNow",
                value: function() {
                    return Date.now()
                }
            }, {
                key: "getParamsHash",
                value: function(e) {
                    var t = function e(t) {
                        return Object.keys(t).sort().reduce(function(n, r) {
                            if (Array.isArray(t[r])) throw new Error("Filters - can't hash Array values");
                            if ("function" == typeof t[r]) throw new Error("Filters - can't hash Function values");
                            return "undefined" != typeof t[r] && (null === t[r] || Array.isArray(t[r]) || "object" !== (0, s.default)(t[r]) ? n.push([r, t[r]]) : n.push([r, e(t[r])])), n
                        }, [])
                    };
                    return JSON.stringify(t(e))
                }
            }, {
                key: "addToBuffer",
                value: function(e) {
                    var t = this.getParamsHash(e),
                        n = this.buffer[t];
                    if (n) {
                        var r = (0, o.default)({}, this.buffer[t]);
                        return this.buffer[t] = {
                            times: r.times + 1,
                            lastTime: this.getNow()
                        }, r
                    }
                    return this.buffer[t] = {
                        times: 1,
                        lastTime: this.getNow()
                    }, {
                        times: 0,
                        lastTime: null
                    }
                }
            }, {
                key: "onlyOnce",
                value: function(e) {
                    return this.atMostNTimes(e, 1)
                }
            }, {
                key: "everyNTimes",
                value: function(e, t) {
                    var n = this.addToBuffer(e);
                    return n.times % t === 0 ? e : null
                }
            }, {
                key: "atMostNTimes",
                value: function(e, t) {
                    var n = this.addToBuffer(e);
                    return n.times < t ? e : null
                }
            }, {
                key: "afterNTimes",
                value: function(e, t) {
                    var n = this.addToBuffer(e);
                    return n.times >= t ? e : null
                }
            }, {
                key: "throttleNMs",
                value: function(e, t) {
                    var n = this.addToBuffer(e);
                    return Date.now() - n.lastTime > t ? e : null
                }
            }, {
                key: "withCount",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "count",
                        n = this.addToBuffer(e);
                    return e[t] = n.times + 1, e
                }
            }]), e
        }();
    t.filters = new f
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = o;
        return e !== t && (e === i.NOT_VISIBLE ? t === i.LESS_HALF_VISIBLE ? n = a : t === i.MORE_HALF_VISIBLE ? n = s : t === i.FULL_VISIBLE && (n = u) : e === i.LESS_HALF_VISIBLE ? t === i.NOT_VISIBLE ? n = d : t === i.MORE_HALF_VISIBLE ? n = s : t === i.FULL_VISIBLE && (n = u) : e === i.MORE_HALF_VISIBLE ? t === i.NOT_VISIBLE ? n = d : t === i.LESS_HALF_VISIBLE ? n = l : t === i.FULL_VISIBLE && (n = u) : e === i.FULL_VISIBLE && (t === i.NOT_VISIBLE ? n = d : t === i.LESS_HALF_VISIBLE ? n = l : t === i.MORE_HALF_VISIBLE && (n = c))), n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.VISIBILITY_CHANGE = t.FULL_LEAVE = t.MORE_HALF_LEAVE = t.LESS_HALF_LEAVE = t.FULL_ENTER = t.MORE_HALF_ENTER = t.LESS_HALF_ENTER = t.UNCHANGED = void 0, t.getChange = r;
    var i = n(227),
        o = t.UNCHANGED = "UNCHANGED",
        a = t.LESS_HALF_ENTER = "LESS_HALF_ENTER",
        s = t.MORE_HALF_ENTER = "MORE_HALF_ENTER",
        u = t.FULL_ENTER = "FULL_ENTER",
        c = t.LESS_HALF_LEAVE = "LESS_HALF_LEAVE",
        l = t.MORE_HALF_LEAVE = "MORE_HALF_LEAVE",
        d = t.FULL_LEAVE = "FULL_LEAVE";
    t.VISIBILITY_CHANGE = {
        UNCHANGED: o,
        LESS_HALF_ENTER: a,
        MORE_HALF_ENTER: s,
        FULL_ENTER: u,
        LESS_HALF_LEAVE: c,
        MORE_HALF_LEAVE: l,
        FULL_LEAVE: d
    }
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = r;
        return e && (t > 0 && t < .5 ? n = i : t >= .5 && t < 1 ? n = o : 1 === t && (n = a)), n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getStatus = n;
    var r = t.NOT_VISIBLE = "NOT_VISIBLE",
        i = t.LESS_HALF_VISIBLE = "LESS_HALF_VISIBLE",
        o = t.MORE_HALF_VISIBLE = "MORE_HALF_VISIBLE",
        a = t.FULL_VISIBLE = "FULL_VISIBLE";
    t.VISIBILITY_STATUS = {
        NOT_VISIBLE: r,
        LESS_HALF_VISIBLE: i,
        MORE_HALF_VISIBLE: o,
        FULL_VISIBLE: a
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.filters = void 0;
    var r = n(225),
        i = n(117),
        o = n(223);
    t.filters = [{
        query: function(e) {
            var t = e.type;
            return "loaded" === t
        },
        transform: function(e) {
            var t = e.type,
                n = e.engineStatus,
                i = void 0 === n ? null : n;
            return r.filters.onlyOnce({
                type: t,
                engineStatus: i
            })
        }
    }, {
        query: function(e) {
            var t = e.type;
            return "navigate-forward" === t
        },
        transform: function(e) {
            var t = (e.type, e.trigger);
            return "click" === t ? r.filters.withCount({
                type: "navigate-click",
                element: "next-button",
                navigationDirection: "next"
            }) : "swipe" === t ? r.filters.withCount({
                type: "swiped",
                element: "items",
                navigationDirection: "next"
            }) : void 0
        }
    }, {
        query: function(e) {
            var t = e.type;
            return "navigate-back" === t
        },
        transform: function(e) {
            var t = (e.type, e.trigger);
            return "click" === t ? r.filters.withCount({
                type: "navigate-click",
                element: "prev-button",
                navigationDirection: "prev"
            }) : "swipe" === t ? r.filters.withCount({
                type: "swiped",
                element: "items",
                navigationDirection: "prev"
            }) : void 0
        }
    }, {
        query: function(e) {
            var t = e.type;
            return 0 === t.indexOf("engine-")
        },
        transform: function(e) {
            var t = e.type,
                n = e.itemIndex,
                a = void 0 === n ? null : n,
                s = e.engineVendorName,
                u = void 0 === s ? null : s,
                c = e.engineTagId,
                l = void 0 === c ? null : c,
                d = (0, i.getSlot)(a);
            return r.filters.withCount({
                type: "engine_status",
                engineStatus: t,
                row: (0, o.safeParseInt)(d.row),
                column: (0, o.safeParseInt)(d.column),
                engineVendorName: u,
                engineTagId: l
            })
        }
    }]
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.lazyLoad = void 0;
    var i = n(230),
        o = r(i),
        a = 1e4,
        s = new Promise(function(e) {
            return (0, o.default)(e)
        }),
        u = new Promise(function(e) {
            return setTimeout(e, a)
        });
    t.lazyLoad = function() {
        return Promise.race([s, u])
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        "undefined" != typeof window ? window.addEventListener("load", e) : e()
    }

    function r() {
        return o || "complete" === document.readyState
    }

    function i(e) {
        e && "function" == typeof e && (r() ? e() : n(e))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = !1;
    n(function() {
        o = !0
    }), t.default = i
}, function(e, t, n) {
    "use strict";

    function r() {
        return o.config.isSiderail ? "siderail" : o.config.isAmp ? "recirculation_amp" : "recirculation"
    }

    function i() {
        var e = r();
        return "siderail" === e && (e = "side_rail"), e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resolveSource = r, t.resolveSourceFeatureString = i;
    var o = n(144)
}, function(e, t, n) {
    "use strict";

    function r() {
        if (c && !l) try {
            l = new IntersectionObserver(function(e) {
                try {
                    e.forEach(function(e) {
                        var t = d.find(function(t) {
                            return t.element === e.target
                        });
                        t && a(e.intersectionRatio, t)
                    })
                } catch (e) {}
            }, {
                threshold: [0, .5, 1]
            })
        } catch (e) {}
    }

    function i(e, t) {
        if (c) try {
            d.push({
                element: e,
                callback: t,
                visibilityState: u.NOT_VISIBLE
            }), l && l.observe(e)
        } catch (e) {}
    }

    function o(e) {
        if (c) try {
            d = d.filter(function(t) {
                return t.element !== e
            }), l && l.unobserve(e)
        } catch (e) {}
    }

    function a(e, t) {
        var n = t.visibilityState,
            r = (0, u.getStatus)(!0, e);
        t.visibilityState = r;
        var i = (0, s.getChange)(n, r);
        i !== s.UNCHANGED && t.callback(i)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CAN_OBSERVE_INTERSECTION = void 0, t.setupIntersectionObserver = r, t.observeElement = i, t.unobserveElement = o;
    var s = n(226),
        u = n(227),
        c = t.CAN_OBSERVE_INTERSECTION = "function" == typeof window.IntersectionObserver,
        l = null,
        d = []
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ViewportObserver = void 0;
    var i = n(138),
        o = r(i),
        a = n(139),
        s = r(a),
        u = n(234),
        c = r(u),
        l = n(235),
        d = n(236),
        f = n(145),
        p = n(237);
    t.ViewportObserver = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.samplingRate,
                r = void 0 === n ? l.MEDIUM : n,
                i = t.container,
                a = void 0 === i ? void 0 : i,
                s = t.isScrollableContainer,
                u = void 0 !== s && s;
            (0, o.default)(this, e), this.parentWindow = void 0, this.observedElements = [], this.isObserving = !1, this.scrollableContainer = u ? a : void 0, this.handleEvent = (0, c.default)(this.handleEvent.bind(this), r), this.changeListener = new d.ViewportChangeListener(window, this.scrollableContainer), this.changeListener.onChange(this.handleEvent), a && (this.observedContainer = this.observe(a))
        }
        return (0, s.default)(e, [{
            key: "setParentWindow",
            value: function(e, t) {
                this.parentWindow = {
                    windowRect: e,
                    frameRect: t
                }, this.handleEvent()
            }
        }, {
            key: "startObserving",
            value: function() {
                this.changeListener.start(), this.isObserving = !0
            }
        }, {
            key: "stopObserving",
            value: function() {
                this.changeListener.stop(), this.isObserving = !1
            }
        }, {
            key: "observe",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.stateChangeHandler,
                    i = n.rectChangeHandler;
                this.isObserving || this.startObserving();
                var o = new p.ObservedElement(e, r, i);
                return this.observedElements.push(o), setTimeout(function() {
                    var e = t.scrollableContainer ? (0, f.getElementRect)(t.scrollableContainer) : void 0;
                    o.renderState({
                        parentWindow: t.parentWindow,
                        scrollableContainerRect: e
                    })
                }, 0), o
            }
        }, {
            key: "unobserve",
            value: function(e) {
                this.observedElements = this.observedElements.filter(function(t) {
                    return t.element !== e
                }), this.isObserving && 0 === this.observedElements.length && this.stopObserving()
            }
        }, {
            key: "handleEvent",
            value: function() {
                var e = this;
                if (this.observedContainer && !this.observedContainer.state.isVisible) return void this.observedContainer.renderState({
                    parentWindow: this.parentWindow
                });
                var t = this.scrollableContainer ? (0, f.getElementRect)(this.scrollableContainer) : void 0;
                this.observedElements.forEach(function(n) {
                    n.renderState({
                        parentWindow: e.parentWindow,
                        scrollableContainerRect: t
                    })
                })
            }
        }, {
            key: "getVisibilityState",
            value: function(e) {
                var t, n;
                if (n = this.observedElements.find(function(t) {
                        return t.element === e
                    })) t = n.state;
                else {
                    n = new p.ObservedElement(e);
                    var r = this.scrollableContainer ? (0, f.getElementRect)(this.scrollableContainer) : void 0;
                    t = n.renderState({
                        parentWindow: this.parentWindow,
                        scrollableContainerRect: r
                    })
                }
                return t
            }
        }]), e
    }()
}, function(e, t) {
    "use strict";

    function n(e, t, n, r) {
        var i, o, a, s, u = 0;
        r || (r = {});
        var c = function() {
                u = r.leading === !1 ? 0 : +new Date, i = null, s = e.apply(o, a), i || (o = a = null)
            },
            l = function() {
                var l = +new Date;
                u || r.leading !== !1 || (u = l);
                var d = t - (l - u);
                return o = n || this, a = arguments, d <= 0 || d > t ? (i && (clearTimeout(i), i = null), u = l, s = e.apply(o, a), i || (o = a = null)) : i || r.trailing === !1 || (i = setTimeout(c, d)), s
            };
        return l.cancel = function() {
            clearTimeout(i), u = 0, i = o = a = null
        }, l
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.HIGH = 200,
        r = t.MEDIUM = 500,
        i = t.LOW = 800;
    t.default = {
        HIGH: n,
        MEDIUM: r,
        LOW: i
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ViewportChangeListener = void 0;
    var i = n(138),
        o = r(i),
        a = n(139),
        s = r(a);
    t.ViewportChangeListener = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            (0, o.default)(this, e), this.target = t, this.scrollableContainer = n, this.handlers = [], this.trigger = this.trigger.bind(this)
        }
        return (0, s.default)(e, [{
            key: "start",
            value: function() {
                this.target.addEventListener("scroll", this.trigger), this.target.addEventListener("resize", this.trigger), this.scrollableContainer && this.scrollableContainer.addEventListener("scroll", this.trigger)
            }
        }, {
            key: "stop",
            value: function() {
                this.target.removeEventListener("scroll", this.trigger), this.target.removeEventListener("resize", this.trigger), this.scrollableContainer && this.scrollableContainer.removeEventListener("scroll", this.trigger)
            }
        }, {
            key: "onChange",
            value: function(e) {
                "function" == typeof e && this.handlers.push(e)
            }
        }, {
            key: "trigger",
            value: function() {
                this.handlers.forEach(function(e) {
                    return e()
                })
            }
        }]), e
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ObservedElement = void 0;
    var i = n(138),
        o = r(i),
        a = n(139),
        s = r(a),
        u = n(238),
        c = n(145);
    t.ObservedElement = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
            (0, o.default)(this, e), this.element = t, this.state = u.initialState, this.stateChangeHandler = n, this.rectChangeHandler = r
        }
        return (0, s.default)(e, [{
            key: "renderState",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.parentWindow,
                    n = e.scrollableContainerRect,
                    r = (0, c.getElementRect)(this.element),
                    i = (0, c.getWindowRect)();
                this.rectChangeHandler(i, r);
                var o = r.intersect(i);
                return n && (o = o.intersect(n)), t && (o = o.addFrameRect(t.frameRect), o = o.intersect(t.windowRect)), this.state = (0, u.getVisibilityState)(o, r, this.state), this.state.hasChange && this.stateChangeHandler(this.state), this.state
            }
        }]), e
    }()
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = !1,
            a = 0,
            s = 0;
        if (!e.isNegative())
            if (r = !0, t.isEmpty()) a = 1;
            else {
                var u = t.getArea();
                s = e.getArea(), a = s / u
            } var c = (0, i.getStatus)(r, a, s),
            l = (0, o.getChange)(n.status, c),
            d = l !== o.UNCHANGED;
        return {
            isVisible: r,
            visiblityRatio: a,
            visibleArea: s,
            status: c,
            change: l,
            hasChange: d
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initialState = void 0, t.getVisibilityState = r;
    var i = n(227),
        o = n(226);
    t.initialState = {
        isVisible: !1,
        visiblityRatio: 0,
        visibleArea: 0,
        status: i.NOT_VISIBLE,
        change: o.UNCHANGED
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return new Promise(function(i, a) {
            var s = l.config.nextPageUrl + "?cursor=" + JSON.stringify(e);
            n && (s += "&must=" + n), r && (s += "&should=" + r), c.default.ajax({
                url: s
            }, function(e, n, r) {
                if (!e || e > 300 || e < 200) a();
                else {
                    var s = JSON.parse(n),
                        u = s.markup,
                        c = s.cursor,
                        l = o(u, t);
                    i({
                        newItems: l,
                        newCursor: c
                    })
                }
            })
        })
    }

    function o(e, t) {
        var n = document.createDocumentFragment();
        n.appendChild(document.createElement("div")), n.firstChild.innerHTML = e, t.onBeforeRender(n.firstChild);
        var r = n.querySelectorAll("." + l.cssSelectors.item);
        return [].concat((0, s.default)(r))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(90),
        s = r(a);
    t.nextPageAjax = i;
    var u = n(136),
        c = r(u),
        l = n(144)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.lazyFonts = void 0;
    var i = n(8),
        o = r(i),
        a = n(11),
        s = r(a),
        u = n(229);
    t.lazyFonts = function() {
        var e = (0, s.default)(o.default.mark(function e() {
            var t;
            return o.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, u.lazyLoad)();
                    case 2:
                        t = document.createElement("link"), t.href = "https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subweset=latin,cyrillic-ext,cyrillic,greek-ext,greek,vietnamese,latin-ext", t.type = "text/css", t.rel = "stylesheet", document.head.appendChild(t);
                    case 7:
                    case "end":
                        return e.stop()
                }
            }, e, void 0)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = n(90),
        o = r(i),
        a = n(138),
        s = r(a),
        u = n(139),
        c = r(u),
        l = n(242),
        d = r(l),
        f = n(243),
        p = r(f),
        h = n(251),
        v = r(h),
        m = n(259),
        g = r(m),
        y = n(113),
        _ = (0, y.getDebugger)("spot-group"),
        b = function(e) {
            function t() {
                return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return (0, v.default)(t, e), (0, c.default)(t, [{
                key: "onBeforeRender",
                value: function(e) {
                    (0, p.default)(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onBeforeRender", this).call(this, e);
                    var n = e.querySelector('[data-spmark="title"]');
                    n && (n.innerHTML = "Popular Conversations")
                }
            }, {
                key: "allowAds",
                value: function e() {
                    var e = !0;
                    try {
                        [].concat((0, o.default)(document.querySelectorAll('meta[property="article:tag"]'))).forEach(function(t) {
                            var n = (t.getAttribute("content") || "").trim();
                            ["review", "buyersguide", "buyers guide", "gear", "holiday", "hgg2017"].indexOf(n) > -1 && (e = !1, _("Engadget disallow ads for meta tag:", n))
                        })
                    } catch (e) {
                        _("Engadget allow ads error", e)
                    }
                    return _("Engadget allow ads", e), e
                }
            }]), t
        }(g.default);
    t.default = b
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(119),
        o = r(i);
    t.default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, o.default)(t)) && "function" != typeof t ? e : t
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(244),
        o = r(i),
        a = n(248),
        s = r(a);
    t.default = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var i = (0, s.default)(t, n);
        if (void 0 === i) {
            var a = (0, o.default)(t);
            return null === a ? void 0 : e(a, n, r)
        }
        if ("value" in i) return i.value;
        var u = i.get;
        if (void 0 !== u) return u.call(r)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(245),
        __esModule: !0
    }
}, function(e, t, n) {
    n(246), e.exports = n(23).Object.getPrototypeOf
}, function(e, t, n) {
    var r = n(58),
        i = n(57);
    n(247)("getPrototypeOf", function() {
        return function(e) {
            return i(r(e))
        }
    })
}, function(e, t, n) {
    var r = n(21),
        i = n(23),
        o = n(32);
    e.exports = function(e, t) {
        var n = (i.Object || {})[e] || Object[e],
            a = {};
        a[e] = t(n), r(r.S + r.F * o(function() {
            n(1)
        }), "Object", a)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(249),
        __esModule: !0
    }
}, function(e, t, n) {
    n(250);
    var r = n(23).Object;
    e.exports = function(e, t) {
        return r.getOwnPropertyDescriptor(e, t)
    }
}, function(e, t, n) {
    var r = n(44),
        i = n(132).f;
    n(247)("getOwnPropertyDescriptor", function() {
        return function(e, t) {
            return i(r(e), t)
        }
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(252),
        o = r(i),
        a = n(256),
        s = r(a),
        u = n(119),
        c = r(u);
    t.default = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, c.default)(t)));
        e.prototype = (0, s.default)(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(253),
        __esModule: !0
    }
}, function(e, t, n) {
    n(254), e.exports = n(23).Object.setPrototypeOf
}, function(e, t, n) {
    var r = n(21);
    r(r.S, "Object", {
        setPrototypeOf: n(255).set
    })
}, function(e, t, n) {
    var r = n(29),
        i = n(28),
        o = function(e, t) {
            if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
            try {
                r = n(24)(Function.call, n(132).f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, n) {
                return o(e, n), t ? e.__proto__ = n : r(e, n), e
            }
        }({}, !1) : void 0),
        check: o
    }
}, function(e, t, n) {
    e.exports = {
        default: n(257),
        __esModule: !0
    }
}, function(e, t, n) {
    n(258);
    var r = n(23).Object;
    e.exports = function(e, t) {
        return r.create(e, t)
    }
}, function(e, t, n) {
    var r = n(21);
    r(r.S, "Object", {
        create: n(40)
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i, o, a = n(242),
        s = r(a),
        u = n(251),
        c = r(u),
        l = n(8),
        d = r(l),
        f = n(11),
        p = r(f),
        h = n(83),
        v = r(h),
        m = n(90),
        g = r(m),
        y = n(138),
        _ = r(y),
        b = n(139),
        w = r(b),
        E = n(260),
        S = n(283),
        O = n(144),
        A = n(151),
        k = r(A),
        T = n(153),
        x = n(117),
        I = n(229),
        P = n(113),
        C = n(284),
        R = "800px",
        M = (0, P.getDebugger)("Default spot group"),
        D = (o = i = function() {
            function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                (0, _.default)(this, e), this.getAvailableSlots = function(e, t) {
                    var n = [];
                    if ("mobile" === t) n.push({
                        element: e.querySelector('[data-spotim-slot="mobile"]'),
                        row: 2,
                        pos: "center",
                        name: "row2-center",
                        device: "mobile"
                    });
                    else {
                        var r = [].concat((0, g.default)(e.querySelectorAll('[data-spotim-slot="desktop"]')));
                        r.forEach(function(e) {
                            var t = parseInt(e.getAttribute("data-spotim-slot-row")),
                                r = e.getAttribute("data-spotim-slot-pos");
                            n.push({
                                element: e,
                                row: t,
                                pos: r,
                                name: "row" + t + "-" + r
                            })
                        })
                    }
                    return n
                }, this.spotId = t, this.element = n, this.spotConfig = r
            }
            return (0, w.default)(e, [{
                key: "forceLazyLoadMargin",
                value: function() {
                    return null
                }
            }, {
                key: "forceLazyLoadTimeout",
                value: function() {
                    return null
                }
            }, {
                key: "allowAds",
                value: function() {
                    var e = !0,
                        t = [].concat((0, g.default)(document.querySelectorAll("meta[name=spotim-ads]")));
                    return t.forEach(function(t) {
                        M("Found <meta name=spotim-ads>", t);
                        var n = (t.getAttribute("content") || "").trim();
                        switch (n) {
                            case "disable-all":
                                M('Disabling all ads because of "disable-all" meta policy'), e = !1
                        }
                    }), e
                }
            }, {
                key: "getSponsoredPlayer",
                value: function() {
                    return !1
                }
            }, {
                key: "assignClickHandlers",
                value: function(e) {
                    return (0, E.assignClickHandlers)(e, this.spotId, {
                        traffic: O.config.referTraffic
                    })
                }
            }, {
                key: "pixelTrack",
                value: function() {
                    (0, C.pixelTracker)()
                }
            }, {
                key: "onBeforeRender",
                value: function(e) {
                    var t = this.spotConfig.ads;
                    (0, x.isMonetizedSpot)(t) && this.pixelTrack(), this.assignClickHandlers(e), (0, x.removeItemByUrl)(e, {
                        locationHref: window.location.href
                    })
                }
            }, {
                key: "onAfterRender",
                value: function(e) {
                    var t = this;
                    (0, x.resequenceIndexes)(e), k.default.once(T.PAGE_NEXT_CLICKED, function() {
                        return t.displayItemImages(e)
                    });
                    var n = new IntersectionObserver(function(r) {
                        var i = (0, v.default)(r, 1),
                            o = i[0];
                        o.isIntersecting && (t.displayItemImages(e, t.getFirstVisibleItemsCount(e)), n.unobserve(e))
                    }, {
                        rootMargin: R
                    });
                    n.observe(e)
                }
            }, {
                key: "displayItemImages",
                value: function() {
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    var t = (0, p.default)(d.default.mark(function e(t) {
                        var n, r, i, o, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return d.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, I.lazyLoad)();
                                case 2:
                                    n = [].concat((0, g.default)(t.querySelectorAll("[data-item-image]"))), r = [].concat((0, g.default)(t.querySelectorAll("[data-user-image]"))), i = function(e) {
                                        e.style.backgroundImage || (e.style.backgroundImage = "url(" + e.getAttribute("data-item-image") + ")")
                                    }, o = function(e) {
                                        e.style.backgroundImage || "NONE" === e.getAttribute("data-user-image") || (e.style.backgroundImage = "url(" + e.getAttribute("data-user-image") + ")")
                                    }, null === a ? (n.forEach(i), r.forEach(o)) : (n.slice(0, a).forEach(i), r.slice(0, a).forEach(o));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "getFirstVisibleItemsCount",
                value: function(e) {
                    var t = document.documentElement.clientWidth,
                        n = e.querySelectorAll('[data-spmark="items"]').length,
                        r = Math.ceil(t / 160);
                    return r < 6 && (r = 6), r * n
                }
            }]), e
        }(), i.Player = function(e) {
            function t() {
                return (0, _.default)(this, t), (0, s.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return (0, c.default)(t, e), t
        }(S.Player), o);
    t.default = D
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = n.trackRedirect,
            i = void 0 !== r && r,
            a = n.handleUtm,
            s = void 0 === a || a,
            u = n.enableSpotimUtm,
            l = void 0 === u || u,
            d = n.referrer,
            f = void 0 === d || d,
            h = n.commentId,
            v = void 0 === h || h,
            m = n.traffic,
            g = void 0 === m || m,
            _ = n.qs,
            b = void 0 === _ ? {} : _,
            w = n.transformUrl,
            E = void 0 === w ? function(e) {
                return e
            } : w,
            S = (0, y.findMarkedElements)("item", {
                container: e
            }),
            O = o(e, t, {
                trackRedirect: i,
                referrer: f,
                commentId: v,
                traffic: g,
                qs: b,
                transformUrl: E
            });
        S.forEach(function(e) {
            var t = (0, y.findMarkedElements)("item-link", {
                container: e
            }) || [];
            [].concat((0, p.default)(t)).forEach(function(e) {
                e.setAttribute("data-original-href", e.getAttribute("href")), k.config.openLinksInNewTab && e.setAttribute("target", "_blank"), s && c(e, l), e.addEventListener("click", function(e) {
                    return O(e, !0)
                }), e.addEventListener("mousedown", function(e) {
                    [T, x].indexOf(e.which) > -1 && O(e, !1)
                })
            })
        })
    }

    function o(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = n.trackRedirect,
            i = void 0 !== r && r,
            o = n.referrer,
            c = void 0 === o || o,
            l = n.commentId,
            d = void 0 === l || l,
            f = n.traffic,
            p = void 0 === f || f,
            h = n.qs,
            v = void 0 === h ? {} : h,
            m = n.transformUrl,
            y = void 0 === m ? function(e) {
                return e
            } : m,
            _ = (0, g.getHostOptions)();
        return function(n, r) {
            var o = k.config.openLinksInNewTab || 1 === n.button || n.ctrlKey || n.metaKey,
                l = !o;
            l && n.preventDefault();
            var f = n.currentTarget,
                h = f.getAttribute("data-original-href");
            if (h = s(h), h = b.default.buildUrl(h, v), c && (h = b.default.buildUrl(h, {
                    spotim_referrer: "recirculation"
                })), d) {
                var m = u(n.target, e);
                m && (h = b.default.buildUrl(h, {
                    spot_im_comment_id: m
                }))
            }
            if (_.redirectUrlTransform) {
                var g = _.redirectUrlTransform(h);
                "undefined" != typeof g && (h = g)
            }
            if (y) {
                var O = y(h);
                "undefined" != typeof O && (h = O)
            }
            var T = {
                url: h
            };
            p && !I() && (T.redirect = {
                source: "recommendations",
                fromSpotId: t,
                toSpotId: t,
                redirectEndpoint: A.default.redirectUrl
            });
            var x = (0, w.buildSpotImUrl)(T);
            f.href = x;
            var P = function() {
                l && r && x && (window.location.href = x)
            };
            return Promise.all([(0, E.captureUiEvent)(n, {
                redirect: !0
            }), i ? a({
                source: "recommendations",
                fromSpotId: t,
                toSpotId: t
            }) : Promise.resolve()]).then(P).catch(function(e) {
                (0, S.reportError)(e, {
                    errorSource: "click-handler"
                }), P()
            })
        }
    }

    function a(e) {
        var t = e.url,
            n = e.source,
            r = e.fromSpotId,
            i = e.toSpotId;
        return new Promise(function(e) {
            v.default.ajax({
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    events: [{
                        type: "generated-page-view",
                        version: 1,
                        value: {
                            from: {
                                spot_id: r,
                                source: n,
                                url: t
                            },
                            to: {
                                spot_id: i,
                                url: t
                            }
                        }
                    }]
                }),
                url: m.track.getFullUrl()
            }, function(t, n, r) {
                !t || t > 300 || t < 200 ? reject() : e()
            })
        })
    }

    function s(e) {
        try {
            return window.location.hostname.endsWith("rt.com") ? e.replace(/([^\/])\?/, "$1/?") : e
        } catch (t) {
            return e
        }
    }

    function u(e, t) {
        var n = (0, y.getMarksPathFromTarget)(e, t);
        if (!(0, y.pathHasMark)(n, "item-title")) {
            var r = (0, y.getMarkValueFromPath)(n, {
                having: "item",
                key: "message-id"
            });
            if (r) return r
        }
        return null
    }

    function c(e, t) {
        var n = window.location.href,
            r = e.getAttribute("href");
        t && k.config.enableSpotimUtm ? r = b.default.buildUrl(r, {
            utm_source: "spotim",
            utm_medium: "spotim_recirculation"
        }) : ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"].forEach(function(e) {
            var t = b.default.getKey(n, e) || null;
            t && (r = b.default.buildUrl(r, (0, d.default)({}, e, t)))
        }), e.setAttribute("href", r), e.setAttribute("data-original-href", r)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = n(160),
        d = r(l),
        f = n(90),
        p = r(f);
    t.assignClickHandlers = i;
    var h = n(136),
        v = r(h),
        m = n(261),
        g = n(271),
        y = n(222),
        _ = n(95),
        b = r(_),
        w = n(281),
        E = n(154),
        S = n(146),
        O = n(109),
        A = r(O),
        k = n(144),
        T = 2,
        x = 3,
        I = function() {
            var e = document.querySelector("[data-spotim-module=recirculation]");
            return e && "false" === e.dataset.referTraffic
        }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = (0, u.default)(e, []);
        return this.performRequest((0, a.default)({}, t))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.track = void 0;
    var o = n(102),
        a = r(o),
        s = n(158),
        u = r(s),
        c = n(262),
        l = n(269);
    t.track = (0, c.createResource)(l.apiUrl, "post", "/track", i, {
        withCredentials: !0
    })
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, s) {
        function u() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return n.replace(a, function(t, n) {
                return e.hasOwnProperty(n) ? e[n] : t
            })
        }

        function c() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e + u(t)
        }

        function l(o) {
            return o = (0, i.extendOptions)(p, o), r(e, t, n, s, o)
        }

        function d() {
            return {
                apiUrl: e,
                method: t,
                url: n,
                execute: s,
                options: p
            }
        }

        function f(e, n) {
            var r = c(n);
            p = (0, i.extendOptions)(i.defaultOptions, p);
            var o;
            switch (t.toLowerCase()) {
                case "get":
                    o = h.get(r, e, p);
                    break;
                case "delete":
                    o = h.delete(r, p);
                    break;
                case "patch":
                    o = h.patch(r, e, p);
                    break;
                case "post":
                    o = h.post(r, e, p);
                    break;
                case "put":
                    o = h.put(r, e, p)
            }
            return o
        }
        var p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            h = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o.RequestHandler;
        return {
            getUrl: u,
            getFullUrl: c,
            performRequest: f,
            extend: l,
            execute: s,
            getProperties: d
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createResource = r;
    var i = n(263),
        o = n(264),
        a = /\{\{(\w+)\}\}/gi
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t, n) {
        t in e && (n[t] = e[t])
    }

    function o(e, t, n) {
        if (t in e)
            if (n[t]) {
                var r = n[t];
                n[t] = function() {
                    e[t](), r()
                }
            } else n[t] = e[t]
    }

    function a(e, t, n) {
        t in e && Array.isArray(e[t]) && (n[t] = [].concat((0, c.default)(n[t] || []), (0, c.default)(e[t])))
    }

    function s() {
        for (var e = {}, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return n.forEach(function(t) {
            i(t, "withCredentials", e), i(t, "contentType", e), o(t, "success", e), o(t, "error", e), a(t, "requestInterceptors", e), a(t, "responseInterceptors", e), a(t, "parsers", e)
        }), e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.defaultOptions = void 0;
    var u = n(90),
        c = r(u);
    t.extendPrimitive = i, t.extendFunction = o, t.extendArray = a, t.extendOptions = s;
    t.defaultOptions = {
        withCredentials: !1,
        requestInterceptors: [],
        responseInterceptors: [],
        parsers: [],
        contentType: "application/json",
        success: function() {},
        error: function() {}
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RequestHandler = void 0;
    var i = n(138),
        o = r(i),
        a = n(139),
        s = r(a),
        u = n(265),
        c = r(u);
    t.RequestHandler = function() {
        function e() {
            (0, o.default)(this, e)
        }
        return (0, s.default)(e, null, [{
            key: "retryRequest",
            value: function(t, n) {
                var r = t.url,
                    i = t.method,
                    o = (0, c.default)(i, r);
                return o._query = t._query, o.header = t.header, o._header = t._header, o._data = t._data, e.performRequest(o, n)
            }
        }, {
            key: "performRequest",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n.withCredentials && (t = t.withCredentials()), n.contentType && (t = t.set("Content-Type", n.contentType), "application/x-www-form-urlencoded" !== n.contentType && "text/plain" !== n.contentType || (t._data = JSON.stringify(t._data))), new Promise(function(r, i) {
                    e.invokeRequestInterceptors(t, n.requestInterceptors, n).then(function(t) {
                        var o = t.request;
                        o.end(function(t, a) {
                            t ? (i(t), n.error && n.error(t)) : e.invokeResponseInterceptors(o, a, n.responseInterceptors, n).then(function(t) {
                                var o = t.response;
                                if (o.ok) {
                                    var a = e.invokeParsers(o.body, n.parsers);
                                    r(a), n.success && n.success(a)
                                } else i(o), n.error && n.error(o)
                            })
                        })
                    })
                })
            }
        }, {
            key: "invokeParsers",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = Object.freeze(e);
                return t.reduce(function(e, t) {
                    return t(n, e)
                }, n)
            }
        }, {
            key: "invokeRequestInterceptors",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return t.reduce(function(e, t) {
                    return e.then(function(e) {
                        var r = e.request;
                        return t.requestInterceptor(r, n)
                    })
                }, Promise.resolve({
                    request: e
                }))
            }
        }, {
            key: "invokeResponseInterceptors",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return n.reduce(function(t, n) {
                    return t.then(function(t) {
                        var i = t.response;
                        return n.responseInterceptor(e, i, r)
                    })
                }, Promise.resolve({
                    response: t
                }))
            }
        }, {
            key: "get",
            value: function(t, n, r) {
                var i = c.default.get(t, n);
                return e.performRequest(i, r)
            }
        }, {
            key: "post",
            value: function(t, n, r) {
                var i = c.default.post(t, n);
                return e.performRequest(i, r)
            }
        }, {
            key: "patch",
            value: function(t, n, r) {
                var i = c.default.patch(t, n);
                return e.performRequest(i, r)
            }
        }, {
            key: "put",
            value: function(t, n, r) {
                var i = c.default.put(t, n);
                return e.performRequest(i, r)
            }
        }, {
            key: "delete",
            value: function(t, n) {
                var r = c.default.del(t);
                return e.performRequest(r, n)
            }
        }]), e
    }()
}, function(e, t, n) {
    function r() {}

    function i(e) {
        if (!g(e)) return e;
        var t = [];
        for (var n in e) o(t, n, e[n]);
        return t.join("&")
    }

    function o(e, t, n) {
        if (null != n)
            if (Array.isArray(n)) n.forEach(function(n) {
                o(e, t, n)
            });
            else if (g(n))
            for (var r in n) o(e, t + "[" + r + "]", n[r]);
        else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
        else null === n && e.push(encodeURIComponent(t))
    }

    function a(e) {
        for (var t, n, r = {}, i = e.split("&"), o = 0, a = i.length; o < a; ++o) t = i[o], n = t.indexOf("="), n == -1 ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
        return r
    }

    function s(e) {
        var t, n, r, i, o = e.split(/\r?\n/),
            a = {};
        o.pop();
        for (var s = 0, u = o.length; s < u; ++s) n = o[s], t = n.indexOf(":"), r = n.slice(0, t).toLowerCase(), i = _(n.slice(t + 1)), a[r] = i;
        return a
    }

    function u(e) {
        return /[\/+]json\b/.test(e)
    }

    function c(e) {
        return e.split(/ *; */).shift()
    }

    function l(e) {
        return e.split(/ *; */).reduce(function(e, t) {
            var n = t.split(/ *= */),
                r = n.shift(),
                i = n.shift();
            return r && i && (e[r] = i), e
        }, {})
    }

    function d(e, t) {
        t = t || {}, this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText, this._setStatusProperties(this.xhr.status), this.header = this.headers = s(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function f(e, t) {
        var n = this;
        this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function() {
            var e = null,
                t = null;
            try {
                t = new d(n)
            } catch (t) {
                return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, e.rawResponse = n.xhr && n.xhr.responseText ? n.xhr.responseText : null, e.statusCode = n.xhr && n.xhr.status ? n.xhr.status : null, n.callback(e)
            }
            n.emit("response", t);
            var r;
            try {
                (t.status < 200 || t.status >= 300) && (r = new Error(t.statusText || "Unsuccessful HTTP response"), r.original = e, r.response = t, r.status = t.status)
            } catch (e) {
                r = e
            }
            r ? n.callback(r, t) : n.callback(null, t)
        })
    }

    function p(e, t) {
        var n = y("DELETE", e);
        return t && n.end(t), n
    }
    var h;
    "undefined" != typeof window ? h = window : "undefined" != typeof self ? h = self : (console.warn("Using browser-only version of superagent in non-browser environment"), h = this);
    var v = n(172),
        m = n(266),
        g = n(267),
        y = e.exports = n(268).bind(null, f);
    y.getXHR = function() {
        if (!(!h.XMLHttpRequest || h.location && "file:" == h.location.protocol && h.ActiveXObject)) return new XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {}
        throw Error("Browser-only verison of superagent could not find XHR")
    };
    var _ = "".trim ? function(e) {
        return e.trim()
    } : function(e) {
        return e.replace(/(^\s*|\s*$)/g, "")
    };
    y.serializeObject = i, y.parseString = a, y.types = {
        html: "text/html",
        json: "application/json",
        xml: "application/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
    }, y.serialize = {
        "application/x-www-form-urlencoded": i,
        "application/json": JSON.stringify
    }, y.parse = {
        "application/x-www-form-urlencoded": a,
        "application/json": JSON.parse
    }, d.prototype.get = function(e) {
        return this.header[e.toLowerCase()]
    }, d.prototype._setHeaderProperties = function(e) {
        var t = this.header["content-type"] || "";
        this.type = c(t);
        var n = l(t);
        for (var r in n) this[r] = n[r]
    }, d.prototype._parseBody = function(e) {
        var t = y.parse[this.type];
        return !t && u(this.type) && (t = y.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null
    }, d.prototype._setStatusProperties = function(e) {
        1223 === e && (e = 204);
        var t = e / 100 | 0;
        this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.notFound = 404 == e, this.forbidden = 403 == e
    }, d.prototype.toError = function() {
        var e = this.req,
            t = e.method,
            n = e.url,
            r = "cannot " + t + " " + n + " (" + this.status + ")",
            i = new Error(r);
        return i.status = this.status, i.method = t, i.url = n, i
    }, y.Response = d, v(f.prototype);
    for (var b in m) f.prototype[b] = m[b];
    f.prototype.type = function(e) {
        return this.set("Content-Type", y.types[e] || e), this
    }, f.prototype.responseType = function(e) {
        return this._responseType = e, this
    }, f.prototype.accept = function(e) {
        return this.set("Accept", y.types[e] || e), this
    }, f.prototype.auth = function(e, t, n) {
        switch (n || (n = {
            type: "basic"
        }), n.type) {
            case "basic":
                var r = btoa(e + ":" + t);
                this.set("Authorization", "Basic " + r);
                break;
            case "auto":
                this.username = e, this.password = t
        }
        return this
    }, f.prototype.query = function(e) {
        return "string" != typeof e && (e = i(e)), e && this._query.push(e), this
    }, f.prototype.attach = function(e, t, n) {
        return this._getFormData().append(e, t, n || t.name), this
    }, f.prototype._getFormData = function() {
        return this._formData || (this._formData = new h.FormData), this._formData
    }, f.prototype.callback = function(e, t) {
        var n = this._callback;
        this.clearTimeout(), n(e, t)
    }, f.prototype.crossDomainError = function() {
        var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
    }, f.prototype._timeoutError = function() {
        var e = this._timeout,
            t = new Error("timeout of " + e + "ms exceeded");
        t.timeout = e, this.callback(t)
    }, f.prototype._appendQueryString = function() {
        var e = this._query.join("&");
        e && (this.url += ~this.url.indexOf("?") ? "&" + e : "?" + e)
    }, f.prototype.end = function(e) {
        var t = this,
            n = this.xhr = y.getXHR(),
            i = this._timeout,
            o = this._formData || this._data;
        this._callback = e || r, n.onreadystatechange = function() {
            if (4 == n.readyState) {
                var e;
                try {
                    e = n.status
                } catch (t) {
                    e = 0
                }
                if (0 == e) {
                    if (t.timedout) return t._timeoutError();
                    if (t._aborted) return;
                    return t.crossDomainError()
                }
                t.emit("end")
            }
        };
        var a = function(e, n) {
            n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = e, t.emit("progress", n)
        };
        if (this.hasListeners("progress")) try {
            n.onprogress = a.bind(null, "download"), n.upload && (n.upload.onprogress = a.bind(null, "upload"))
        } catch (e) {}
        if (i && !this._timer && (this._timer = setTimeout(function() {
                t.timedout = !0, t.abort()
            }, i)), this._appendQueryString(), this.username && this.password ? n.open(this.method, this.url, !0, this.username, this.password) : n.open(this.method, this.url, !0), this._withCredentials && (n.withCredentials = !0), "GET" != this.method && "HEAD" != this.method && "string" != typeof o && !this._isHost(o)) {
            var s = this._header["content-type"],
                c = this._serializer || y.serialize[s ? s.split(";")[0] : ""];
            !c && u(s) && (c = y.serialize["application/json"]), c && (o = c(o))
        }
        for (var l in this.header) null != this.header[l] && n.setRequestHeader(l, this.header[l]);
        return this._responseType && (n.responseType = this._responseType), this.emit("request", this), n.send("undefined" != typeof o ? o : null), this
    }, y.Request = f, y.get = function(e, t, n) {
        var r = y("GET", e);
        return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
    }, y.head = function(e, t, n) {
        var r = y("HEAD", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, y.options = function(e, t, n) {
        var r = y("OPTIONS", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, y.del = p, y.delete = p, y.patch = function(e, t, n) {
        var r = y("PATCH", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, y.post = function(e, t, n) {
        var r = y("POST", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, y.put = function(e, t, n) {
        var r = y("PUT", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
}, function(e, t, n) {
    var r = n(267);
    t.clearTimeout = function() {
        return this._timeout = 0, clearTimeout(this._timer), this
    }, t.parse = function(e) {
        return this._parser = e, this
    }, t.serialize = function(e) {
        return this._serializer = e, this
    }, t.timeout = function(e) {
        return this._timeout = e, this
    }, t.then = function(e, t) {
        if (!this._fullfilledPromise) {
            var n = this;
            this._fullfilledPromise = new Promise(function(e, t) {
                n.end(function(n, r) {
                    n ? t(n) : e(r)
                })
            })
        }
        return this._fullfilledPromise.then(e, t)
    }, t.catch = function(e) {
        return this.then(void 0, e)
    }, t.use = function(e) {
        return e(this), this
    }, t.get = function(e) {
        return this._header[e.toLowerCase()]
    }, t.getHeader = t.get, t.set = function(e, t) {
        if (r(e)) {
            for (var n in e) this.set(n, e[n]);
            return this
        }
        return this._header[e.toLowerCase()] = t, this.header[e] = t, this
    }, t.unset = function(e) {
        return delete this._header[e.toLowerCase()], delete this.header[e], this
    }, t.field = function(e, t) {
        if (null === e || void 0 === e) throw new Error(".field(name, val) name can not be empty");
        if (r(e)) {
            for (var n in e) this.field(n, e[n]);
            return this
        }
        if (null === t || void 0 === t) throw new Error(".field(name, val) val can not be empty");
        return this._getFormData().append(e, t), this
    }, t.abort = function() {
        return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
    }, t.withCredentials = function() {
        return this._withCredentials = !0, this
    }, t.redirects = function(e) {
        return this._maxRedirects = e, this
    }, t.toJSON = function() {
        return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
        }
    }, t._isHost = function(e) {
        var t = {}.toString.call(e);
        switch (t) {
            case "[object File]":
            case "[object Blob]":
            case "[object FormData]":
                return !0;
            default:
                return !1
        }
    }, t.send = function(e) {
        var t = r(e),
            n = this._header["content-type"];
        if (t && r(this._data))
            for (var i in e) this._data[i] = e[i];
        else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + e : e : this._data = (this._data || "") + e) : this._data = e;
        return !t || this._isHost(e) ? this : (n || this.type("json"), this)
    }
}, function(e, t) {
    function n(e) {
        return null !== e && "object" == typeof e
    }
    e.exports = n
}, function(e, t) {
    function n(e, t, n) {
        return "function" == typeof n ? new e("GET", t).end(n) : 2 == arguments.length ? new e("GET", t) : new e(t, n)
    }
    e.exports = n
}, function(e, t, n) {
    (function(e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r;
        r = n(270);
        t.apiUrl = e.env.SKIP_CDN ? r.url : r.cdn
    }).call(t, n(5))
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.url = "https://tracker.spot.im", t.cdn = "https://www.spot.im/api/tracker"
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function parseSpotOptions(code) {
        var hostOptions = {};
        if (code) try {
            ! function(c) {
                try {
                    var SPOTIM_OPTIONS = {};
                    eval(c), hostOptions = Object.assign(hostOptions, SPOTIM_OPTIONS)
                } catch (e) {
                    console.error("Failed to parse host options")
                }
            }(code)
        } catch (e) {
            console.error("Failed to parse host options")
        }
        return hostOptions
    }

    function getHostOptions() {
        var e = hostOptions.resolve();
        return (0, _defaults.filterValidOptions)(e)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _classCallCheck2 = __webpack_require__(138),
        _classCallCheck3 = _interopRequireDefault(_classCallCheck2),
        _createClass2 = __webpack_require__(139),
        _createClass3 = _interopRequireDefault(_createClass2),
        _class, _temp;
    exports.parseSpotOptions = parseSpotOptions, exports.getHostOptions = getHostOptions;
    var _defaults = __webpack_require__(272),
        _deepExtendObject = __webpack_require__(280),
        HostOptions = (_temp = _class = function() {
            function e() {
                (0, _classCallCheck3.default)(this, e), this.isExecuted = !1, this.hostOptions = {}
            }
            return (0, _createClass3.default)(e, [{
                key: "resolve",
                value: function() {
                    if (!this.isExecuted) {
                        this.isExecuted = !0;
                        for (var t = document.querySelectorAll('script[type="' + e.scriptType + '"]'), n = 0; n < t.length; n++) {
                            var r = t[n].textContent;
                            (0, _deepExtendObject.deepExtendObject)(this.hostOptions, parseSpotOptions(r))
                        }
                    }
                    return this.hostOptions
                }
            }]), e
        }(), _class.scriptType = "text/x-spotim-options", _temp),
        hostOptions = new HostOptions
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return h.filter(function(t) {
            return t in e
        }).reduce(function(t, n) {
            return t[n] = e[n], t
        }, {})
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.defaults = void 0, t.filterValidOptions = i;
    var o = n(273),
        a = r(o),
        s = n(274),
        u = n(275),
        c = n(276),
        l = n(277),
        d = n(278),
        f = n(279),
        p = t.defaults = {
            networkId: "NOT_SET",
            spotId: "NOT_SET",
            spotName: "NOT_SET",
            postId: void 0,
            iosUrl: void 0,
            androidUrl: void 0,
            liveEventCode: void 0,
            conversationId: void 0,
            implementationId: "NOT_SET",
            disqusIdentifier: void 0,
            disqusUrl: void 0,
            gigyaStreamId: void 0,
            gigyaCategoryId: void 0,
            wpImportEndpoint: void 0,
            facebookUrl: void 0,
            pageSize: void 0,
            conversationSort: void 0,
            loadMoreInModal: void 0,
            isStarsRatingEnabled: !1,
            isLazyLoad: !1,
            isLiveBlogConversation: !1,
            reporters: [],
            reporterBadgeText: "Reporter",
            postUrl: void 0,
            href: window.location.href,
            canonicalHref: a.default.getCanonicalHref(),
            referTraffic: !0,
            displayNameInSayControlForGuests: !1,
            disableImageUploadInConversation: !1,
            disableSignupWizard: !1,
            conversationLongerComments: !1,
            conversationImageAnchorsDisabled: !1,
            numberedAvatars: !1,
            avatarsTheme: s.REGULAR_THEME,
            connectTypes: [],
            loginUponSayControlFocus: !1,
            shouldOpenLogin: !0,
            isConnectEnabled: !0,
            useDisqusLogin: !1,
            popularItemsCount: 0,
            direction: c.LTR,
            forceRegister: !1,
            tickerIcon: void 0,
            tickerIconSize: void 0,
            tickerSkin: u.BRAND,
            tickerOffset: 0,
            brandColor: void 0,
            categoryId: void 0,
            subCategoryId: void 0,
            languages: [],
            whitelistUrls: [],
            mainLanguage: "en",
            newsfeedSkin: void 0,
            newsfeedPosition: f.RIGHT,
            newsfeed_slideAlong_enabled: !1,
            newsfeed_slideAlong_selector: "",
            conversationSkin: l.LIGHT,
            registrationSkin: l.LIGHT,
            platform: void 0,
            websiteUrl: void 0,
            enableSSO: !1,
            enableConversationHeaderFacesList: !0,
            conversationRecommendationsRowsCount: 1,
            openMode: d.ON_CLICK,
            enableMiniNewsfeed: !0,
            enableNewsfeed: !0,
            enableVideoItems: !1,
            enableRecommendation: !0,
            enableBlindfold: !1,
            enableGuestVoting: !0,
            hashImageSelector: '[data-spotim-image-id="{HASH_ID}"]',
            disableRegistrationModule: !1,
            recommendationBelowConversation: !1,
            disableNavigation: !1,
            disableUserProileModal: !1,
            utm: {},
            highlightedCommentId: null,
            highlightedReplyId: null,
            highlightImmediate: null,
            scrollToComments: null,
            isSayControlExpanded: null,
            resetPasswordStatus: null,
            resetPasswordTicket: null,
            emailVerify: null,
            enableRealtimeCommentsSticky: !0,
            enableHighlightMessageSticky: !0,
            enableDownVotesCount: !1,
            enableUserPoints: !0,
            redirectUrlTransform: function(e) {
                return e
            },
            styleBlock: void 0,
            scriptBlock: void 0,
            hostOptionsBlock: void 0,
            enableSpotimUtm: !0,
            enableSpotimReferrer: !0,
            openLinksInNewTab: !1,
            preserveHostQueryString: !1,
            useExternalUserId: !1,
            conversationCommunityQuestion: void 0,
            allowVA: !0,
            textsOverrides: {}
        },
        h = Object.keys(p)
}, function(e, t) {
    "use strict";

    function n(e) {
        return e.split(/\?/)[0]
    }

    function r(e) {
        return e.split(/#/)[0]
    }

    function i(e) {
        return e.replace(/.*?:\/\//g, "")
    }

    function o(e, t) {
        return t.removeProtocol && (e = i(e)), t.removeQueryString && (e = n(e)), t.removeFragment && (e = r(e)), e
    }

    function a(e) {
        var t = "";
        if (e) {
            var n = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
            t = n && n[1]
        }
        return t
    }

    function s() {
        var e = document.location.href,
            t = document.querySelector("link[rel='canonical']");
        return t && (e = t.href), e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        parse: o,
        extractDomain: a,
        getCanonicalHref: s
    }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.REGULAR_THEME = "REGULAR_THEME"
}, function(e, t) {
    "use strict";

    function n(e) {
        switch (e.toUpperCase()) {
            case "BRAND":
                return r;
            case "WHITE":
                return r;
            default:
                return
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.parse = n;
    var r = t.BRAND = "BRAND";
    t.WHITE = "WHITE"
}, function(e, t) {
    "use strict";

    function n(e) {
        switch (e.toUpperCase()) {
            case "RTL":
                return r;
            case "LTR":
                return i;
            default:
                return
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.parse = n;
    var r = t.RTL = "rtl",
        i = t.LTR = "ltr";
    t.RTL_LANGUAGES = ["he", "ar"]
}, function(e, t) {
    "use strict";

    function n(e) {
        switch (e.toUpperCase()) {
            case "DARK":
                return r;
            case "LIGHT":
                return i;
            default:
                return
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.parse = n;
    var r = t.DARK = "dark",
        i = t.LIGHT = "light"
}, function(e, t) {
    "use strict";

    function n(e) {
        switch (e.toUpperCase()) {
            case "AUTOMATIC":
                return r;
            case "PERMANENT":
                return i;
            case "ON_CLICK":
                return o;
            default:
                return
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.parse = n;
    var r = t.AUTOMATIC = "AUTOMATIC",
        i = t.PERMANENT = "PERMANENT",
        o = t.ON_CLICK = "ON_CLICK"
}, function(e, t) {
    "use strict";

    function n(e) {
        switch (e.toUpperCase()) {
            case "LEFT":
                return r;
            case "RIGHT":
                return i;
            default:
                return
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.parse = n;
    var r = t.LEFT = "LEFT",
        i = t.RIGHT = "RIGHT"
}, function(e, t) {
    "use strict";

    function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = t.shift();
        return t.forEach(function(e) {
            for (var t in e) e[t] && e[t].constructor && e[t].constructor === Object ? (i[t] = i[t] || {}, n(i[t], e[t])) : i[t] = e[t]
        }), i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.deepExtendObject = n
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = e.url,
            n = e.redirectParams,
            r = void 0 === n ? {} : n,
            i = {
                to_url: t,
                from_spot: r.fromSpotId,
                to_spot: r.toSpotId,
                source: r.source || null
            },
            o = Object.keys(i).map(function(e) {
                return e + "=" + encodeURIComponent(i[e])
            }).join("&"),
            a = r.redirectEndpoint + "#" + window.encodeURIComponent(o);
        return a
    }

    function o(e) {
        var t = e.url,
            n = e.highlightedReplyId,
            r = void 0 === n ? null : n,
            o = e.highlightedCommentId,
            a = void 0 === o ? null : o,
            u = e.highlightImmediate,
            l = void 0 === u ? null : u,
            f = e.scrollToComments,
            p = void 0 === f ? null : f,
            h = e.typingUsersCount,
            v = void 0 === h ? 0 : h,
            m = e.redirect,
            g = void 0 === m ? void 0 : m,
            y = (0, c.default)(e, ["url", "highlightedReplyId", "highlightedCommentId", "highlightImmediate", "scrollToComments", "typingUsersCount", "redirect"]),
            _ = (0, s.default)({}, y);
        return (r || a) && (a && (_.spot_im_comment_id = a), r && (_.spot_im_reply_id = r), null !== l && (_.spot_im_highlight_immediate = l)), v > 0 && (_.spot_im_state = "typing"), null !== p && (_.spot_im_scroll_to_comments = p), t = d.default.buildUrl(t, _), g && (t = i({
            url: t,
            redirectParams: g
        })), t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(148),
        s = r(a),
        u = n(282),
        c = r(u);
    t.makeRedirectUrl = i, t.buildSpotImUrl = o;
    var l = n(95),
        d = r(l)
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
    }

    function o(e) {
        var t = e.initialStyle,
            n = void 0 === t ? {} : t,
            r = e.onClose,
            i = void 0 === r ? function() {} : r,
            o = document.createElement("div");
        Object.assign(o.style, (0, s.default)({
            position: "absolute",
            transform: "translateX(-50%)",
            height: "0px",
            width: "0px",
            overflow: "hidden",
            zIndex: 1
        }, n)), o.className = "sprc-lp", o.innerHTML = '\n\t\t<style>\n\t\t\t.sprc-lp-title {\n\t\t\t\tpadding: 7px 10px 22px 10px;\n\t\t\t\tcolor: white;\n\t\t\t\tfont-size: 11px;\n\t\t\t\tfont-family: \'Open Sans\', Helvetica, Arial, sans-serif;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\theight: 44px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tz-index: 100;\n\t\t\t}\n\t\t\t.sprc-lp-title:before {\n\t\t\t\tcontent: \' \';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tright: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\topacity: 0.5;\n\t\t\t\tbackground: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);\n\t\t\t\tbackground: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);\n\t\t\t\tbackground: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);\n\t\t\t}\n\t\t\t.sprc-lp-title-label {\n\t\t\t\tposition: relative;\n\t\t\t\tz-index: 110;\n\t\t\t}\n\t\t\t.sprc-lp-close {\n\t\t\t\tcursor: pointer;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t\twidth 30px;\n\t\t\t\theight: 30px;\n\t\t\t\tpadding: 10px;\n\t\t\t\tz-index: 120;\n\t\t\t}\n\t\t\t.sprc-lp-close svg {\n\t\t\t\twidth: 10px;\n\t\t\t\theight: 10px;\n\t\t\t\topacity: 0.8;\n\t\t\t\tfill: #FFFFFF;\n\t\t\t}\n\t\t</style>\n\t\t<div class="sprc-lp-title">\n\t\t\t<span class="sprc-lp-title-label">Advertisement</span>\n\t\t\t<span class="sprc-lp-close">\n\t\t\t\t<svg viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t<g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-1047.000000, -180.000000)"><path d="M1052.00036,183.990285 L1048.01007,180 L1047,181.010072 L1050.98957,185.000357 L1047,188.990642 L1048.01007,190.000714 L1052.00036,186.010429 L1055.99064,190.000714 L1057,188.990642 L1053.01043,185.000357 L1057,181.010072 L1055.99064,180 L1052.00036,183.990285 Z"></path></g></g>\n\t\t\t\t</svg>\n\t\t\t</span>\n\t\t</div>\n\t';
        var a = document.createElement("div");
        return Object.assign(a.style, {
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%)"
        }), o.querySelector(".sprc-lp-close").addEventListener("click", i), o.appendChild(a), document.body.appendChild(o), {
            container: a,
            element: o
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Player = void 0;
    var a = n(102),
        s = r(a),
        u = n(243),
        c = r(u),
        l = n(138),
        d = r(l),
        f = n(139),
        p = r(f),
        v = n(242),
        m = r(v),
        g = n(251),
        y = r(g),
        _ = n(135),
        b = r(_),
        w = n(145),
        E = 100,
        S = function(e) {
            function t() {
                return (0, d.default)(this, t), (0, m.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return (0, y.default)(t, e), (0, p.default)(t, [{
                key: "union",
                value: function(e) {
                    var n = Math.min(this.top, e.top),
                        r = Math.min(this.left, e.left),
                        i = Math.max(this.right, e.right),
                        o = Math.max(this.bottom, e.bottom);
                    return new t({
                        top: n,
                        left: r,
                        right: i,
                        bottom: o
                    })
                }
            }]), t
        }(w.Rect),
        O = function() {
            function e(t) {
                (0, d.default)(this, e), this.value = t, this._changed = !1
            }
            return (0, p.default)(e, [{
                key: "set",
                value: function(e) {
                    this.value !== e && (this._changed = !0), this.value = e
                }
            }, {
                key: "get",
                value: function() {
                    return this.value
                }
            }, {
                key: "reset",
                value: function() {
                    this._changed = !1
                }
            }, {
                key: "changed",
                value: function() {
                    return this._changed
                }
            }, {
                key: "differentThan",
                value: function(e) {
                    return this.value === e
                }
            }]), e
        }(),
        A = function(e) {
            return Math.ceil(e / (1e3 / 60))
        },
        k = 600,
        T = A(k),
        x = 300,
        I = (A(x), function() {
            function e(t) {
                (0, d.default)(this, e), this.domNode = t
            }
            return (0, p.default)(e, [{
                key: "getDomNode",
                value: function() {
                    return this.domNode
                }
            }, {
                key: "setHeight",
                value: function(e) {
                    this.setStyle({
                        height: e + "px"
                    })
                }
            }, {
                key: "getHeight",
                value: function() {
                    return parseInt(window.getComputedStyle(this.domNode).height)
                }
            }, {
                key: "setWidth",
                value: function(e) {
                    this.setStyle({
                        width: h + "px"
                    })
                }
            }, {
                key: "getWidth",
                value: function() {
                    return parseInt(window.getComputedStyle(this.domNode).width)
                }
            }, {
                key: "setPosition",
                value: function(e) {
                    this.setStyle({
                        position: "" + e
                    })
                }
            }, {
                key: "getPosition",
                value: function() {
                    return window.getComputedStyle(this.domNode).position
                }
            }, {
                key: "setTop",
                value: function(e) {
                    this.setStyle({
                        top: e + "px"
                    })
                }
            }, {
                key: "getTop",
                value: function() {
                    return parseInt(window.getComputedStyle(this.domNode).top)
                }
            }, {
                key: "setLeft",
                value: function(e) {
                    this.setStyle({
                        left: e + "px"
                    })
                }
            }, {
                key: "getLeft",
                value: function() {
                    return parseInt(window.getComputedStyle(this.domNode).left)
                }
            }, {
                key: "setStyle",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object.assign(this.domNode.style, e)
                }
            }]), e
        }()),
        P = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.update,
                    i = void 0 === r ? function() {} : r;
                (0, d.default)(this, t);
                var o = (0, m.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return o.update = i, o
            }
            return (0, y.default)(t, e), (0, p.default)(t, [{
                key: "setHeight",
                value: function(e) {
                    (0, c.default)(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setHeight", this).call(this, e), this.update(e + "px")
                }
            }, {
                key: "align",
                value: function(e) {
                    var t = e.documentTop;
                    e.viewportTop, e.isVisible;
                    this.setPosition("absolute"), this.setTop(t)
                }
            }]), t
        }(I),
        C = function() {
            function e(t) {
                var n = t.element;
                (0, d.default)(this, e), this.element = n, this.props = {
                    state: new O("hidden"),
                    alignment: new O("none"),
                    position: new O(null),
                    top: new O(null),
                    left: new O(null),
                    height: new O(null),
                    width: new O(null)
                }, this.alive = !0, this.frames = []
            }
            return (0, p.default)(e, [{
                key: "kill",
                value: function() {
                    this.alive = !1
                }
            }, {
                key: "growTo",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                    return new Promise(function(r) {
                        if (t._growing) r();
                        else {
                            t._growing = !0;
                            var o = function(e, t) {
                                    return i(t) * e
                                },
                                a = function(e, t) {
                                    return e - o(e, t)
                                },
                                u = t.element.getHeight(),
                                c = Math.abs(e - u),
                                l = (e || 0) > u;
                            if (c > 0) {
                                for (var d = 0; d < T; d++) {
                                    var f = (l ? o : a)(c, d / (T - 1));
                                    t.frames[d] = (0, s.default)({}, t.frames[d] || {}, {
                                        height: f + "px"
                                    }), t.frames[d].callbacks = t.frames[d].callbacks || [], t.frames[d].callbacks.push(n.bind(null, f))
                                }
                                t.frames[T] = t.frames[T] || {}, t.frames[T].height = e + "px", t.frames[T].callbacks = t.frames[T].callbacks || [], t.frames[T].callbacks.push(function() {
                                    t._growing = !1, r()
                                })
                            } else t._growing = !1, r()
                        }
                    })
                }
            }, {
                key: "interpolateTo",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = function(e, t) {
                            return i(t) * e
                        },
                        r = function(e, t) {
                            return e - n(e, t)
                        },
                        o = {
                            height: this.element.getHeight(),
                            width: this.element.getWidth(),
                            position: this.element.getPosition(),
                            top: this.element.getTop(),
                            left: this.element.getLeft()
                        },
                        a = (0, s.default)({
                            state: this.props.state.get(),
                            alignment: this.props.alignment.get(),
                            position: this.props.position.get(),
                            top: this.props.top.get(),
                            left: this.props.left.get(),
                            height: this.props.height.get(),
                            width: this.props.width.get()
                        }, o, t),
                        u = "hidden" === this.props.state.get() && "expanded" === a.state,
                        c = "hidden" === this.props.state.get() && "collapsed" === a.state,
                        l = "expanded" === this.props.state.get() && "collapsed" === a.state,
                        d = "collapsed" === this.props.state.get() && "expanded" === a.state,
                        f = function(t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                o = e.element.getHeight(),
                                a = Math.abs((e.props.height.get() || 0) - o),
                                u = (e.props.height.get() || 0) > o;
                            if (a > 0) {
                                e.frames[i] = e.frames[i] || {};
                                for (var c = i; c < i + T; c++) e.frames[c] = (0, s.default)({}, e.frames[c] || {}, {
                                    height: (u ? n : r)(a, c / (T - 1)) + "px"
                                })
                            }
                        };
                    (u || c || l || d) && a.height !== o.height && ((l || c) && (this.frames = []), this.props.height.set(a.height), this.props.width.set(a.width), this.frames[0] = (0, s.default)({}, this.frames[0] || {}, {
                        width: a.width + "px"
                    }), f(this.frames, 0));
                    var p = "none" === this.props.alignment.get() && "static" === a.alignment,
                        h = "none" === this.props.alignment.get() && "sticky" === a.alignment,
                        v = "sticky" === this.props.alignment.get() && "static" === a.alignment,
                        m = "static" === this.props.alignment.get() && "sticky" === a.alignment,
                        g = "sticky" === this.props.alignment.get() && "sticky" === a.alignment;
                    if (p || h) this.props.position.set(a.position), this.props.alignment.set(a.alignment), this.frames[0] = (0, s.default)({}, this.frames[0] || {}, {
                        position: a.position,
                        top: a.top + "px",
                        left: a.left + "px"
                    });
                    else if (m) this.props.position.set(a.position), this.props.alignment.set(a.alignment), this.frames[0] = (0, s.default)({}, this.frames[0] || {}, {
                        position: a.position,
                        top: a.top + "px",
                        left: a.left + "px"
                    });
                    else if (v) {
                        if (!this.stickyToStaticInProgress) {
                            this.stickyToStaticInProgress = !0;
                            var y = t.toArea,
                                _ = this.viewDistanceTo(y);
                            if (_ > this.props.height.get() / 4) {
                                for (var b = this.element.getHeight(), w = this.props.height.get(), E = 0; E < T; E++) this.frames[E] = (0, s.default)({}, this.frames[E] || {}, {
                                    height: r(b, E / (T - 1)) + "px"
                                });
                                this.frames[T - 1] = (0, s.default)({}, this.frames[T - 1] || {}, {
                                    position: "absolute",
                                    top: a.top + "px",
                                    left: a.left + "px"
                                });
                                for (var S = 0; S < T; S++) this.frames[T + S] = (0, s.default)({}, this.frames[T + S] || {}, {
                                    height: n(w, S / (T - 1)) + "px"
                                });
                                this.frames[2 * T] = this.frames[2 * T] || {}, this.frames[2 * T].callbacks = this.frames[2 * T].callbacks || [], this.frames[2 * T].callbacks.push(function() {
                                    e.props.alignment.set("static"), e.stickyToStaticInProgress = !1
                                })
                            } else this.props.position.set(a.position), this.props.alignment.set(a.alignment), this.frames[0] = (0, s.default)({}, this.frames[0] || {}, {
                                position: a.position,
                                top: a.top + "px",
                                left: a.left + "px"
                            }), this.stickyToStaticInProgress = !1
                        }
                    } else g && (this.props.position.set(a.position), this.props.alignment.set(a.alignment), this.frames[0] = (0, s.default)({}, this.frames[0] || {}, {
                        position: a.position,
                        top: a.top + "px",
                        left: a.left + "px"
                    }))
                }
            }, {
                key: "interpolate",
                value: function() {
                    var e = this.frames.shift();
                    if (e) {
                        var t = e.callbacks,
                            n = void 0 === t ? [] : t,
                            r = ["position", "top", "left", "width", "height"].reduce(function(t, n) {
                                return "undefined" != typeof e[n] && (t[n] = e[n]), t
                            }, {});
                        this.element.setStyle(r), n.forEach(function(e) {
                            return e()
                        })
                    }
                }
            }, {
                key: "getElement",
                value: function() {
                    return this.element
                }
            }, {
                key: "getDocRect",
                value: function() {
                    var e = 0,
                        t = 0,
                        n = this.element.getDomNode();
                    do e += n.offsetTop || 0, t += n.offsetLeft || 0, n = n.offsetParent; while (n);
                    var r = (0, w.getElementRect)(this.element.getDomNode());
                    return new S({
                        top: e,
                        left: t,
                        bottom: e + r.getHeight(),
                        right: t + r.getWidth()
                    })
                }
            }, {
                key: "getDocRectUnion",
                value: function(e) {
                    return this.getDocRect().union(e.getDocRect())
                }
            }, {
                key: "getViewRect",
                value: function() {
                    return (0, w.getElementRect)(this.element.getDomNode())
                }
            }, {
                key: "getViewRectUnion",
                value: function(e) {
                    return this.getViewRect().union(e.getViewRect())
                }
            }, {
                key: "getVisibleRect",
                value: function() {
                    return this.getViewRect().intersect((0, w.getWindowRect)())
                }
            }, {
                key: "getVisiblePercent",
                value: function() {
                    var e = this.getVisibleRect().getArea(),
                        t = this.getViewRect().getArea();
                    return e / t || 0
                }
            }, {
                key: "docDistanceTo",
                value: function(e) {
                    var t = this.getDocRect(),
                        n = e.getDocRect(),
                        r = Math.floor(t.left + (t.right - t.left) / 2),
                        i = (Math.floor(t.top + (t.bottom - t.top) / 2), Math.floor(n.left + (n.right - n.left) / 2)),
                        o = (Math.floor(n.top + (n.bottom - n.top) / 2), Math.abs(r - i)),
                        a = Math.abs(r - i);
                    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2))
                }
            }, {
                key: "viewDistanceTo",
                value: function(e) {
                    var t = this.getViewRect(),
                        n = e.getViewRect(),
                        r = Math.floor(t.left + (t.right - t.left) / 2),
                        i = Math.floor(t.top + (t.bottom - t.top) / 2),
                        o = Math.floor(n.left + (n.right - n.left) / 2),
                        a = Math.floor(n.top + (n.bottom - n.top) / 2),
                        s = Math.abs(r - o),
                        u = Math.abs(i - a);
                    return Math.sqrt(Math.pow(s, 2) + Math.pow(u, 2))
                }
            }, {
                key: "getStyleToAlign",
                value: function() {
                    var e = this.getDocRect();
                    return {
                        position: "absolute",
                        top: e.top,
                        left: e.left + (e.right - e.left) / 2
                    }
                }
            }]), e
        }(),
        R = function(e) {
            function t(e) {
                var n = e.element,
                    r = e.update,
                    i = void 0 === r ? function() {} : r;
                (0, d.default)(this, t);
                var o = (0, m.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                    element: n
                }));
                return o.update = i, o
            }
            return (0, y.default)(t, e), (0, p.default)(t, [{
                key: "growTo",
                value: function(e) {
                    var n = this;
                    return (0, c.default)(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "growTo", this).call(this, e, function(e) {
                        return n.update(e + "px")
                    })
                }
            }]), t
        }(C),
        M = function() {
            function e(t) {
                var n = t.stickyArea,
                    r = t.staticArea,
                    i = t.topOffset;
                (0, d.default)(this, e), this.stickyArea = n, this.staticArea = r, this.topOffset = i
            }
            return (0, p.default)(e, [{
                key: "hasElement",
                value: function() {
                    return !(!this.staticArea.getElement().getDomNode() || !this.stickyArea.getElement().getDomNode())
                }
            }, {
                key: "setStaticArea",
                value: function(e) {
                    this.staticArea = e
                }
            }, {
                key: "getDocRange",
                value: function() {
                    var e = this.stickyArea.getDocRect().bottom,
                        t = this.staticArea.getDocRect().top;
                    return {
                        top: t,
                        bottom: e,
                        height: e - t
                    }
                }
            }, {
                key: "getViewRange",
                value: function() {
                    var e = this.stickyArea.getViewRect().bottom - this.topOffset,
                        t = this.staticArea.getViewRect().top;
                    return {
                        top: t,
                        bottom: e,
                        height: e - t
                    }
                }
            }, {
                key: "getStyleToAlign",
                value: function(e) {
                    var t = this.getDocRange(),
                        n = this.getViewRange(),
                        r = (e.getDocRect(), e.getViewRect()),
                        i = {};
                    if (n.top < this.topOffset && n.bottom > r.getHeight()) {
                        i.position = "fixed", i.top = this.topOffset;
                        this.stickyArea.getViewRect()
                    } else {
                        i.position = "absolute";
                        var o = this.staticArea.getViewRect();
                        n.top > 0 ? i.top = t.top : i.top = t.bottom - e.getDocRect().getHeight(), i.left = o.left + (o.right - o.left) / 2
                    }
                    return i
                }
            }]), e
        }(),
        D = function() {
            function e(t) {
                var n = t.area;
                (0, d.default)(this, e), this.observedArea = n, this.startViewTime = null, this.lastViewTime = null, this.achieved = !1
            }
            return (0, p.default)(e, [{
                key: "didAchieveViewability",
                value: function() {
                    return this.achieved
                }
            }, {
                key: "setDesiredDuration",
                value: function(e) {
                    this.desiredDuration = e
                }
            }, {
                key: "start",
                value: function() {
                    this.achieved = !1, this.reset()
                }
            }, {
                key: "update",
                value: function() {
                    if (!this.achieved) {
                        var e = parseInt(this.lastViewTime) - parseInt(this.startViewTime);
                        !isNaN(e) && e > this.desiredDuration && (this.achieved = !0), this.observedArea.getVisiblePercent() > .5 ? (this.startViewTime || (this.startViewTime = Date.now()), this.lastViewTime = Date.now()) : this.startViewTime = null
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.lastViewTime = null, this.startViewTime = null
                }
            }]), e
        }(),
        L = function() {
            function e(t) {
                var n = t.playArea,
                    r = t.stickyRange,
                    i = t.staticArea,
                    o = t.topOffset;
                (0, d.default)(this, e), this.playArea = n, this.stickyRange = r, this.staticArea = i, this.requireSticky = !1, this.firstStaticEntranceDone = !1, this.currentPosition = "absolute", this.topOffset = o, this.topOffsetReached = !1;
            }
            return (0, p.default)(e, [{
                key: "reset",
                value: function() {
                    this.requireSticky = !1, this.firstStaticEntranceDone = !1
                }
            }, {
                key: "setRequireSticky",
                value: function(e) {
                    this.requireSticky = e
                }
            }, {
                key: "alignToStatic",
                value: function() {
                    var e = this.staticArea.getStyleToAlign(this.playArea);
                    this.playArea.interpolateTo((0, s.default)({
                        alignment: "static"
                    }, e, {
                        toArea: this.staticArea
                    })), this.staticArea.getViewRect().top >= this.topOffset && (this.topOffsetReached = !0), this.playArea.getVisiblePercent() >= 1 && this.topOffsetReached && (this.firstStaticEntranceDone = !0)
                }
            }, {
                key: "alignToSticky",
                value: function() {
                    var e = this.stickyRange.getStyleToAlign(this.playArea);
                    this.playArea.interpolateTo((0, s.default)({
                        alignment: "sticky"
                    }, e))
                }
            }, {
                key: "alignAsNeeded",
                value: function() {
                    this.stickyRange.hasElement() && this.requireSticky && this.firstStaticEntranceDone ? this.alignToSticky() : this.alignToStatic()
                }
            }, {
                key: "changedPositionForViewabilityPursuit",
                value: function() {
                    return "absolute" === this.currentPosition ? "fixed" === this.playArea.getElement().getPosition() && (this.currentPosition = "fixed", !0) : "absolute" === this.playArea.getElement().getPosition() && (this.currentPosition = "absolute", !0)
                }
            }, {
                key: "getDesiredViewabilityDuration",
                value: function() {
                    return "fixed" === this.currentPosition ? 3e3 : 2e3
                }
            }]), e
        }(),
        j = function() {
            function e(t) {
                var n = t.size,
                    r = t.playArea,
                    i = t.stickyRange,
                    o = t.staticArea;
                (0, d.default)(this, e), this.size = n, this.playArea = r, this.stickyRange = i, this.staticArea = o
            }
            return (0, p.default)(e, [{
                key: "expand",
                value: function() {
                    this.playArea.interpolateTo({
                        state: "expanded",
                        width: this.size.width,
                        height: this.size.height
                    })
                }
            }, {
                key: "collapse",
                value: function() {
                    this.playArea.interpolateTo({
                        state: "collapsed",
                        width: this.size.width,
                        height: 0
                    })
                }
            }]), e
        }(),
        N = function() {
            function e(t) {
                var n = t.size,
                    r = t.playArea,
                    i = t.areaToSync;
                (0, d.default)(this, e), this.playArea = r, this.areaToSync = i, this.size = n, this.alive = !0
            }
            return (0, p.default)(e, [{
                key: "update",
                value: function(e) {
                    var t = this,
                        n = this.areaToSync.getViewRect();
                    if (e) {
                        var r = (this.areaToSync.getViewRect().getArea(), this.playArea.getViewRect().getArea());
                        this.areaToSync.getVisiblePercent(), this.areaToSync.viewDistanceTo(this.playArea);
                        if (r > 0) {
                            var i = E;
                            if (n.top >= i) {
                                var o = this.playArea.getElement().getHeight();
                                this.areaToSync.getElement().setHeight(o)
                            }
                        } else n.top >= 0 && this.areaToSync.growTo(0);
                        this.areaToSync.interpolate()
                    } else this.alive && n.top >= 0 && this.areaToSync.growTo(0).then(function() {
                        return t.destroy()
                    })
                }
            }, {
                key: "tryCompleteSync",
                value: function() {
                    var e = this;
                    requestAnimationFrame(function() {
                        e.update(!1), e.alive && e.tryCompleteSync()
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.alive = !1
                }
            }]), e
        }();
    t.Player = function() {
        function e(t) {
            var n = t.findPlaceholders,
                r = void 0 === n ? Promise.resolve(null) : n,
                i = t.updatePlaceholder,
                a = void 0 === i ? Promise.resolve(null) : i,
                s = t.findStickyElement,
                u = void 0 === s ? Promise.resolve(null) : s,
                c = t.findPlaceholderTop,
                l = void 0 === c ? Promise.resolve(null) : c,
                f = t.staticDomNode,
                p = t.onClose,
                h = t.isSticky,
                v = void 0 !== h && h,
                m = t.isInread,
                g = void 0 !== m && m;
            (0, d.default)(this, e), this.onClose = p;
            var y = o({
                    initialStyle: this.getInitialStyle(),
                    onClose: p
                }),
                _ = y.container,
                b = y.element;
            this.container = new I(_), this.element = new I(b), this.staticDomNode = f, this.findStickyElement = u, g ? (this.findPlaceholders = r, this.updatePlaceholder = a, this.findPlaceholderTop = l) : (this.findPlaceholders = function() {
                return Promise.resolve(null)
            }, this.updatePlaceholder = function() {
                return Promise.resolve(!0)
            }, this.findPlaceholderTop = function() {
                return Promise.resolve(null)
            }), this.shouldPlay = !0, this.isSticky = v, this.isInread = g
        }
        return (0, p.default)(e, [{
            key: "getInitialStyle",
            value: function() {
                return {}
            }
        }, {
            key: "getTopOffset",
            value: function() {
                return b.default ? window.innerHeight / 2 - this.size.height / 2 : E
            }
        }, {
            key: "getAdContainer",
            value: function() {
                return this.container.getDomNode()
            }
        }, {
            key: "tick",
            value: function() {
                (!this.cancelTime || this.cancelTime - Date.now() > 0) && (this.tickRaf = window.requestAnimationFrame(this.tick.bind(this))), this.shouldPlay && (this.observer.setDesiredDuration(this.alignResolver.getDesiredViewabilityDuration()), this.isSticky ? this.observer.didAchieveViewability() ? this.alignResolver.setRequireSticky(!1) : this.alignResolver.setRequireSticky(!0) : this.alignResolver.setRequireSticky(!1), this.alignResolver.alignAsNeeded(), this.alignResolver.changedPositionForViewabilityPursuit() && (this.observer.reset(), this.observer.setDesiredDuration(this.alignResolver.getDesiredViewabilityDuration())), this.playArea.interpolate(), this.displaySync.update(!0), this.observer.update())
            }
        }, {
            key: "begin",
            value: function(e) {
                var t = this,
                    n = e.width,
                    r = e.height;
                this.cancelTime = null, this.size = {
                    width: n,
                    height: r
                }, this.playArea = new C({
                    element: this.element
                }), this.findPlaceholders().then(function(e) {
                    t.findStickyElement().then(function(r) {
                        var i = new I(r);
                        t.stickyArea = new C({
                            element: i
                        });
                        var o = new I(t.staticDomNode),
                            a = new C({
                                element: o
                            }),
                            u = (a.getViewRect(), (e || []).filter(function(e) {
                                return e.viewportTop >= t.getTopOffset()
                            }));
                        if (e && e.length > 0 && a.getViewRect().top < t.getTopOffset() && u.length > 0) {
                            var c = u[0],
                                l = c.documentTop,
                                d = c.frameUniqueId,
                                f = c.isVisible,
                                p = c.placeholderId,
                                h = c.viewportTop,
                                v = t.updatePlaceholder.bind(null, d, p),
                                m = document.createElement("div"),
                                g = t.stickyArea.getStyleToAlign();
                            Object.assign(m.style, (0, s.default)({}, a.getStyleToAlign(), {
                                width: n + "px",
                                left: g.left - n / 2 + "px"
                            })), o = new I(m), m.setAttribute("data-spotim-pid", p), m.setAttribute("data-spotim-fid", d), document.body.appendChild(m), o = new P(m, {
                                update: v
                            }), o.align({
                                documentTop: l,
                                viewportTop: h,
                                isVisible: f
                            }), a = new R({
                                element: o,
                                update: v
                            })
                        }
                        t.stickyRange = new M({
                            stickyArea: t.stickyArea,
                            staticArea: a,
                            topOffset: t.getTopOffset()
                        }), t.observer = new D({
                            area: t.playArea
                        }), t.alignResolver = new L({
                            playArea: t.playArea,
                            stickyRange: t.stickyRange,
                            staticArea: a,
                            topOffset: t.getTopOffset()
                        }), t.displayResolver = new j({
                            size: t.size,
                            playArea: t.playArea,
                            stickyRange: t.stickyRange,
                            staticArea: a
                        }), t.displaySync = new N({
                            size: t.size,
                            playArea: t.playArea,
                            areaToSync: a
                        }), t.alignResolver.alignAsNeeded(), t.displayResolver.expand(), t.tickRaf = window.requestAnimationFrame(t.tick.bind(t))
                    })
                })
            }
        }, {
            key: "end",
            value: function() {
                this.displayResolver.collapse(), this.displaySync.tryCompleteSync()
            }
        }, {
            key: "pause",
            value: function() {
                this.shouldPlay = !1
            }
        }, {
            key: "resume",
            value: function() {
                this.shouldPlay = !0
            }
        }]), e
    }()
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = ["https://ib.adnxs.com/getuid?https%3A%2F%2Fsync.spotim.market%2Fcsync%3Ft%3Da%26ep%3D271858%26extuid%3D%24UID", "https://ads.pubmatic.com/AdServer/js/user_sync.html?p=156758&userIdMacro=PM_UID&predirect=https%3A%2F%2Fsync.spotim.market%2Fcsync%3Ft%3Da%26ep%3D281178%26extuid%3DPM_UID", "//sync.search.spotxchange.com/partner?source=211945", "//pixel.advertising.com/ups/58196/sync?&gdpr=&gdpr_consent=&redir=true"];
    t.pixelTracker = function() {
        n.forEach(function(e) {
            var t = document.createElement("img");
            t.setAttribute("src", e), t.setAttribute("width", "0"), t.setAttribute("height", "0"), Object.assign(t.style, {
                position: "absolute",
                opacity: 0,
                pointerEvents: "none"
            }), document.body.appendChild(t)
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initialize = void 0;
    var o = n(8),
        a = i(o),
        s = n(102),
        u = i(s),
        c = n(11),
        l = i(c),
        d = (t.initialize = function() {
            var e = (0, l.default)(a.default.mark(function e(t, n, r, i) {
                var o, s, c, l, d, v, _, E, M, D, L, j;
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return o = m.default.getKey(window.location.href, "sprcop"), s = (0, T.once)(k.addMoatPixel), e.prev = 2, P("Waiting for OptOut status, timeout is " + R), e.next = 6, Promise.race([new Promise(function(e) {
                                return setTimeout(function() {
                                    e({
                                        timeout: !0
                                    })
                                }, R)
                            }), (0, S.getOptOutStatus)()]);
                        case 6:
                            if (c = e.sent, P("OptOut status:", c), !c || !c.timeout && !c.userOptedOut) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return");
                        case 10:
                            e.next = 16;
                            break;
                        case 12:
                            return e.prev = 12, e.t0 = e.catch(2), P("Optout error", e.t0), e.abrupt("return");
                        case 16:
                            if (b.checkIfAdsAllowed(r, o)) {
                                e.next = 19;
                                break
                            }
                            return P("Ads not allowed"), e.abrupt("return");
                        case 19:
                            if (b.subscribeToLayoutEvents(n), l = (0, u.default)({}, h.defaults, (0, f.getHostOptions)(), (0, p.getElementOptions)(n)), d = l.allowVA, P("allowVA: " + d + ". x-options: " + (0, f.getHostOptions)().allowVA + "; element options: " + (0, p.getElementOptions)(n).allowVA), d) {
                                e.next = 24;
                                break
                            }
                            return e.abrupt("return");
                        case 24:
                            if (!i) {
                                e.next = 43;
                                break
                            }
                            return v = !!m.default.getKey(window.location.href, "draft_mode"), _ = r.getAvailableSlots(n, (0, g.isPhone)() ? "mobile" : "desktop"), P("Available slots", _), e.next = 30, b.fetchUpdatedAdsConfig(t, i);
                        case 30:
                            i = e.sent, O.config.geo = i && i.geo, E = b.getDisplayOverVideoCode(i), M = b.isPassbackEnabledForSpot(i), D = null, E && (D = (0, w.createPlayer)(E, "Display overlay player", "300", "250", "display", "DFP")), L = null, o && (L = JSON.parse(atob(o))), _.forEach(function(e) {
                                var o = (0, g.resolveUserPlatform)(),
                                    a = {
                                        isDraftModeUrl: v,
                                        sprcopPlayer: L
                                    },
                                    u = (0, g.resolveTag)(e, o, i, a);
                                if (u) {
                                    if ((0, A.shouldUseMoat)(O.config, I, t) && s(n, t), Object.keys(C).length > 0 && ((0, g.isPhone)() || g.forcingDesktopSpotIds.includes(t))) return void P("only one add is allowed on mobile disabling player", u);
                                    var c = r.getSponsoredPlayer();
                                    c && (u = c), window.location.search.indexOf("spotim_show_player") > -1 && (u.show = !0, e.element.setAttribute("data-spotim-force-show", ""));
                                    var l = null,
                                        d = "siderail" === (0, x.resolveSource)();
                                    M && u.passback_enabled && !d && (l = (0, w.createPlayer)(u.passback_code, "Passback player", "300", "250", "display", "DFP")), C[e.name] = new y.AdsPlayer({
                                        spotId: t,
                                        player: u,
                                        slot: e,
                                        overlayPlayer: D,
                                        passbackPlayer: l,
                                        rcElement: n
                                    })
                                }
                            }), Object.keys(C).length > 0 && (b.adjustLayoutForAds(n), document.querySelector('a[data-spmark="ad-choice"]').style.display = "block"), Object.keys(C).forEach(function(e) {
                                C[e].initialize()
                            }), e.next = 44;
                            break;
                        case 43:
                            P("no ads config");
                        case 44:
                            j = function e() {
                                window.$$SPOTIM_ACTIVATE_RC_CALLED$$ = !0, document.removeEventListener(w.ACTIVATE_MONETIZATION_EVENT, e)
                            }, document.addEventListener(w.ACTIVATE_MONETIZATION_EVENT, j, !1), n.setAttribute("data-spotim-engine", !0);
                        case 47:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [2, 12]
                ])
            }));
            return function(t, n, r, i) {
                return e.apply(this, arguments)
            }
        }(), n(113)),
        f = n(271),
        p = n(286),
        h = n(272),
        v = n(95),
        m = i(v),
        g = n(98),
        y = n(287),
        _ = n(304),
        b = r(_),
        w = n(117),
        E = n(118),
        S = (i(E), n(305)),
        O = n(144),
        A = n(302),
        k = n(307),
        T = n(308),
        x = n(231),
        I = "widget",
        P = (0, d.getDebugger)("ads");
    window.$$SPOTIM_ACTIVATE_RC_CALLED$$ = !1;
    var C = {},
        R = 1e4
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = Object.keys(o).reduce(function(t, n) {
            var r = e.getAttribute(n);
            if (r) {
                var i = o[n];
                switch (r) {
                    case "true":
                        r = !0;
                        break;
                    case "false":
                        r = !1
                }
                t[i] = r
            }
            return t
        }, {});
        return (0, i.filterValidOptions)(t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.supportedAttributesMap = void 0, t.getElementOptions = r;
    var i = n(272),
        o = t.supportedAttributesMap = {
            "data-spot-id": "spotId",
            "data-post-id": "postId",
            "data-ios-url": "iosUrl",
            "data-android-url": "androidUrl",
            "data-conversation-id": "conversationId",
            "data-implementation-id": "implementationId",
            "data-disqus-identifier": "disqusIdentifier",
            "data-disqus-url": "disqusUrl",
            "data-gigya-streamid": "gigyaStreamId",
            "data-gigya-categoryid": "gigyaCategoryId",
            "data-wp-import-endpoint": "wpImportEndpoint",
            "data-facebook-url": "facebookUrl",
            "data-messages-count": "pageSize",
            "data-sort-by": "conversationSort",
            "data-post-url": "postUrl",
            "data-load-more-in-modal": "loadMoreInModal",
            "data-social-reviews": "isStarsRatingEnabled",
            "data-lazy-load": "isLazyLoad",
            "data-live-blog": "isLiveBlogConversation",
            "data-live-event-code": "liveEventCode",
            "data-reporters": "reporters",
            "data-reporter-badge-text": "reporterBadgeText",
            "data-refer-traffic": "referTraffic",
            "data-disable-navigation": "disableNavigation",
            "data-community-question": "conversationCommunityQuestion",
            "data-allow-va": "allowVA"
        }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AdsPlayer = void 0;
    var i = n(138),
        o = r(i),
        a = n(139),
        s = r(a),
        u = n(113),
        c = n(146),
        l = n(288),
        d = n(151),
        f = r(d),
        p = n(95),
        h = r(p),
        v = n(98),
        m = n(153),
        g = n(154),
        y = n(232),
        _ = n(231),
        b = n(117),
        w = (0, u.getDebugger)("ads-player"),
        E = (0, l.once)(function(e) {
            return (0, g.captureEvent)(e)
        }),
        S = function(e, t) {
            return "video" === e.type && t && "LQKD" !== e.server
        };
    t.AdsPlayer = function() {
        function e(t) {
            var n = t.spotId,
                r = t.player,
                i = t.slot,
                a = t.rcElement,
                s = t.overlayPlayer,
                u = t.isOverlayPlayer,
                c = t.passbackPlayer,
                l = t.isPassbackPlayer;
            (0, o.default)(this, e), this.spotId = n, this.player = r, this.slot = i, this.overlayPlayer = s, this.isOverlayPlayer = u, this.passbackPlayer = c, this.isPassbackPlayer = l, this.rcElement = a, this.deferred = r.waitForEvent && !window.$$SPOTIM_ACTIVATE_RC_CALLED$$, this.createPlacement = function() {}, this.isShowing = !1
        }
        return (0, s.default)(e, [{
            key: "limitIframeHeight",
            value: function() {
                this.adContainer.style.maxHeight = "600px"
            }
        }, {
            key: "initialize",
            value: function() {
                var e = this;
                if (w("initialize player", this.player), this.deferred) {
                    w("player is deferred");
                    var t = function t() {
                        w(b.ACTIVATE_MONETIZATION_EVENT + " activation event fired"), e.prepareForActivation(), document.removeEventListener(b.ACTIVATE_MONETIZATION_EVENT, t)
                    };
                    document.addEventListener(b.ACTIVATE_MONETIZATION_EVENT, t, !1)
                } else this.player.delayLoad ? (w("player load is delayed by " + 1e3 * this.player.delayLoad), setTimeout(function() {
                    e.prepareForActivation()
                }, 1e3 * this.player.delayLoad)) : this.prepareForActivation()
            }
        }, {
            key: "prepareForActivation",
            value: function() {
                try {
                    var e = this.player.server.toLowerCase();
                    "dfp" === e && (e = "display");
                    var t = n(289)("./" + e + "/index.js");
                    this.PlacementClass = t.Placement;
                    var r = !0;
                    if (!r && document.querySelector('[data-spotim-module="recirculation"] [data-spotim-engine-type="' + e + '"]')) return void w("Another RC loaded, but type '" + e + "' doesn't support multiple placements");
                    this.slot.element.setAttribute("data-spotim-engine-type", e);
                    var i = "[data-spotim-slot-placement]";
                    this.isOverlayPlayer ? i = "[data-spotim-overlay-slot-placement]" : this.isPassbackPlayer && (i = "[data-spotim-passback-slot-placement]"), this.adContainer = this.slot.element.querySelector(i), f.default.trigger("ad-container-active", this), this.activate()
                } catch (e) {
                    w("Ads initialize error", e), (0, c.reportError)(e, {
                        errorSource: "demand-initialize",
                        demand: this.player.server
                    })
                }
            }
        }, {
            key: "activate",
            value: function() {
                var e = this;
                return w("Ads will initialize for " + this.spotId + " with demand " + this.player.server), "" === this.player.code.trim() ? void w("Received empty tag. Doing nothing.", this.player) : (E({
                    type: "engine-monetization-load"
                }), (0, g.captureEvent)({
                    type: "engine-will-initialize",
                    itemIndex: this.slotName,
                    engineVendorName: this.player.server,
                    engineTagId: this.player.id
                }), void this.placeAd({
                    onEvent: function(e, t, n, r) {
                        w("Ads event: " + e + ", for demand: " + t + ", tagName: " + n + ", in itemIndex: " + r), (0, g.captureEvent)({
                            type: e,
                            itemIndex: r
                        })
                    }
                }).then(function(t) {
                    (0, y.observeElement)(t, function() {
                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        g.captureViewportEvent.apply(void 0, [t].concat(n))
                    }), w("Ads initialized for demand " + e.player.server), (0, g.captureEvent)({
                        type: "engine-initialized",
                        itemIndex: e.slotName,
                        engineVendorName: e.player.server,
                        engineTagId: e.player.id
                    })
                }).catch(function(t) {
                    w("Ads initialize error", t), (0, g.captureEvent)({
                        type: "engine-initialize-error",
                        itemIndex: e.slotName,
                        engineVendorName: e.player.server,
                        engineTagId: e.player.id
                    })
                }).catch(function(t) {
                    w("Ads initialize error", t), (0, g.captureEvent)({
                        type: "engine-initialize-error",
                        itemIndex: e.slotName,
                        engineVendorName: e.player.server,
                        engineTagId: e.player.id
                    }), (0, c.reportError)(t, {
                        errorSource: "ads-initialize",
                        demand: e.player.server
                    })
                }))
            }
        }, {
            key: "placeAd",
            value: function() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = (n.onEvent, h.default.getKey(window.location.href.toLowerCase(), "utm_source")),
                    i = (0, v.resolveUserPlatform)(),
                    o = {
                        domain: window.location.hostname,
                        os: i,
                        spotId: this.spotId,
                        source: (0, _.resolveSource)(),
                        utm: r || ""
                    };
                return this.placement = new this.PlacementClass(this.adContainer, {
                    slot: this.slot,
                    row: this.slot.row,
                    pos: this.slot.pos,
                    player: this.player,
                    subid: o,
                    utmSource: r,
                    spotId: this.spotId,
                    clientPlatform: i,
                    itemIndex: this.slotName,
                    pageUrl: document.location.href,
                    width: this.player.size.width,
                    height: this.player.size.height,
                    isOverlayPlayer: this.isOverlayPlayer,
                    isPassbackPlayer: this.isPassbackPlayer,
                    adsPlayer: this,
                    onContentVideoStart: function(e) {
                        t.isShowing = !0, f.default.trigger(m.AD_DISPLAY_STARTED, {
                            width: t.player.size.width,
                            height: t.player.size.height,
                            row: t.slot.row,
                            pos: t.slot.pos
                        }), f.default.trigger("update-ad-slot", {
                            server: t.player.server,
                            row: t.slot.row,
                            pos: t.slot.pos,
                            width: t.player.size.width,
                            height: t.player.size.height,
                            itemDisplay: "hide",
                            adDisplay: "show"
                        })
                    },
                    onContentVideoFinish: function(e) {
                        t.isShowing = !1, f.default.trigger(m.AD_DISPLAY_FINISHED, {
                            width: t.player.size.width,
                            height: t.player.size.height,
                            row: t.slot.row,
                            pos: t.slot.pos
                        }), f.default.trigger("update-ad-slot", {
                            server: t.player.server,
                            width: t.player.size.width,
                            height: t.player.size.height,
                            row: t.slot.row,
                            pos: t.slot.pos,
                            itemDisplay: "show",
                            adDisplay: "hide"
                        })
                    },
                    onAdTagLoad: function(e, t, n) {},
                    onAdTagLoadSuccess: function(e, t, n) {},
                    onAdTagLoadFail: function(e, t, n) {},
                    onAdDisplayStart: function(e, n, r) {
                        t.isShowing = !0, f.default.trigger(m.AD_DISPLAY_STARTED, {
                            width: t.player.size.width,
                            height: t.player.size.height,
                            row: t.slot.row,
                            pos: t.slot.pos
                        }), f.default.trigger("update-ad-slot", {
                            server: t.player.server,
                            row: t.slot.row,
                            pos: t.slot.pos,
                            width: t.player.size.width,
                            height: t.player.size.height,
                            itemDisplay: "hide",
                            adDisplay: "show"
                        })
                    },
                    onAdDisplayFinish: function(e, n, r) {
                        t.isShowing = !1, f.default.trigger(m.AD_DISPLAY_FINISHED, {
                            width: t.player.size.width,
                            height: t.player.size.height,
                            row: t.slot.row,
                            pos: t.slot.pos
                        }), f.default.trigger("update-ad-slot", {
                            server: t.player.server,
                            width: t.player.size.width,
                            height: t.player.size.height,
                            row: t.slot.row,
                            pos: t.slot.pos,
                            itemDisplay: "show",
                            adDisplay: "hide"
                        })
                    },
                    onPlayerDone: function(e, n, r) {
                        f.default.trigger("update-ad-slot", {
                            server: t.player.server,
                            width: 300,
                            height: 250,
                            row: t.slot.row,
                            pos: t.slot.pos,
                            itemDisplay: "hide",
                            adDisplay: "show"
                        })
                    },
                    onAdImpression: function(e, t, n) {},
                    onAdViewableImpression: function(e, t, n) {},
                    onAdViewableIab: function(e, t, n) {},
                    onAdViewedFirstQuartile: function(e, t, n) {},
                    onAdClickThrough: function(e, t, n) {},
                    onAdNoFill: function(e, t, n) {},
                    onDispose: function() {
                        w("Disposing " + (t.isOverlayPlayer ? "overlay player" : "") + " " + t.player.server + " placement"), Object.keys(t.placement).forEach(function(e) {
                            e.startsWith("on") && (t.placement[e] = function() {})
                        }), t.adContainer.innerHTML = ""
                    }
                }), this.placement.create().then(function() {
                    t.passbackPlayer && (t.placement.passbackAdsPlayer = new e({
                        spotId: t.spotId,
                        player: t.passbackPlayer,
                        slot: t.slot,
                        rcElement: t.rcElement,
                        isPassbackPlayer: !0
                    })), S(t.player, t.overlayPlayer) && (w("Ads Player: Overlay player detected. Creating overlay ads player"), Object.assign(t.adContainer.style, {
                        opacity: 0
                    }), Object.assign(t.slot.element.style, {
                        zIndex: "5"
                    }), t.limitIframeHeight(), t.placement.overlayAdsPlayer = new e({
                        spotId: t.spotId,
                        player: t.overlayPlayer,
                        slot: t.slot,
                        rcElement: t.rcElement,
                        isOverlayPlayer: !0
                    }), t.placement.overlayAdsPlayer.initialize())
                }).catch(function(e) {
                    throw e
                })
            }
        }]), e
    }()
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var n;
        return function() {
            return e && (n = e.apply(t || this, arguments), e = null), n
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.once = n
}, function(e, t, n) {
    function r(e) {
        return n(i(e))
    }

    function i(e) {
        return o[e] || function() {
            throw new Error("Cannot find module '" + e + "'.")
        }()
    }
    var o = {
        "./cedato/index.js": 290,
        "./display/index.js": 291,
        "./inline/index.js": 293,
        "./sr/index.js": 294
    };
    r.keys = function() {
        return Object.keys(o)
    }, r.resolve = i, e.exports = r, r.id = 289
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.Placement = exports.SUPPORT_MULTI_PLACEMENTS = exports.ADS_DEMAND_NAME = void 0;
    var _toConsumableArray2 = __webpack_require__(90),
        _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2),
        _classCallCheck2 = __webpack_require__(138),
        _classCallCheck3 = _interopRequireDefault(_classCallCheck2),
        _createClass2 = __webpack_require__(139),
        _createClass3 = _interopRequireDefault(_createClass2),
        _debug = __webpack_require__(113),
        _pubsub = __webpack_require__(151),
        _pubsub2 = _interopRequireDefault(_pubsub),
        _index = __webpack_require__(291),
        _utils = __webpack_require__(292),
        utils = _interopRequireWildcard(_utils),
        adsDebug = (0, _debug.getDebugger)("ads"),
        ADS_DEMAND_NAME = exports.ADS_DEMAND_NAME = "Cedato",
        SUPPORT_MULTI_PLACEMENTS = exports.SUPPORT_MULTI_PLACEMENTS = !1,
        initPassbackHandler = function(e, t) {
            adsDebug("cedato: initPassbackHandler()", e, t);
            var n = document.createElement("iframe");
            n.setAttribute("width", "300"), n.setAttribute("height", "250"), n.style.border = "none";
            var r = e.adContainer.parentNode.querySelector("[data-spotim-passback-slot-placement]");
            adsDebug("cedato: initPassbackHandler() passbackSlot", r), r && r.appendChild(n);
            var i = (0, _index.normalizeDisplayConfig)(t.innerHTML, e.pageUrl, e.subid, {
                    reloadAfter: e.player.reload_after
                }),
                o = i.replace(/\\\//g, "/"),
                a = "<html><body style='margin: 0; padding: 0; background: transparent; overflow: hidden;'>" + o + "</body></html>";
            n.contentWindow.document.open(), n.contentWindow.document.write(a), n.contentWindow.document.close(), adsDebug("cedato: initPassbackHandler() display:none on adContainer", e.adContainer), Object.assign(e.adContainer.style, {
                display: "none"
            }), _pubsub2.default.trigger("update-ad-slot", {
                server: e.player.server,
                row: e.row,
                pos: e.pos,
                width: 300,
                height: 250,
                itemDisplay: "hide",
                adDisplay: "show"
            })
        },
        Placement = exports.Placement = function() {
            function Placement(e, t) {
                var n = t.row,
                    r = t.pos,
                    i = t.player,
                    o = void 0 === i ? {} : i,
                    a = t.subid,
                    s = void 0 === a ? {} : a,
                    u = t.itemIndex,
                    c = void 0 === u ? -1 : u,
                    l = t.width,
                    d = void 0 === l ? 300 : l,
                    f = t.height,
                    p = void 0 === f ? 250 : f,
                    h = t.pageUrl,
                    v = void 0 === h ? "" : h,
                    m = t.bannerHtml,
                    g = void 0 === m ? "" : m,
                    y = t.onContentVideoStart,
                    _ = void 0 === y ? function() {} : y,
                    b = t.onContentVideoFinish,
                    w = void 0 === b ? function() {} : b,
                    E = t.onAdTagLoad,
                    S = void 0 === E ? function() {} : E,
                    O = t.onAdTagLoadSuccess,
                    A = void 0 === O ? function() {} : O,
                    k = t.onAdTagLoadFail,
                    T = void 0 === k ? function() {} : k,
                    x = t.onAdDisplayStart,
                    I = void 0 === x ? function() {} : x,
                    P = t.onAdDisplayFinish,
                    C = void 0 === P ? function() {} : P,
                    R = t.onAdImpression,
                    M = void 0 === R ? function() {} : R,
                    D = t.onAdViewableImpression,
                    L = void 0 === D ? function() {} : D,
                    j = t.onAdViewableIab,
                    N = void 0 === j ? function() {} : j,
                    F = t.onAdViewedFirstQuartile,
                    U = void 0 === F ? function() {} : F,
                    V = t.onAdClickThrough,
                    q = void 0 === V ? function() {} : V,
                    H = t.onAdNoFill,
                    z = void 0 === H ? function() {} : H,
                    B = t.onDispose,
                    $ = void 0 === B ? function() {} : B;
                (0, _classCallCheck3.default)(this, Placement), Object.assign(this, {
                    adContainer: e,
                    row: n,
                    pos: r,
                    player: o,
                    itemIndex: c,
                    width: d,
                    height: p,
                    pageUrl: v,
                    onContentVideoStart: _,
                    onContentVideoFinish: w,
                    onAdTagLoad: S,
                    onAdTagLoadFail: T,
                    onAdDisplayStart: I,
                    onAdDisplayFinish: C,
                    onAdImpression: M,
                    onAdViewableImpression: L,
                    onAdViewableIab: N,
                    onAdViewedFirstQuartile: U,
                    onAdClickThrough: q,
                    onAdNoFill: z,
                    onDispose: $,
                    onAdTagLoadSuccess: A,
                    bannerHtml: g,
                    subid: s
                })
            }
            return (0, _createClass3.default)(Placement, [{
                key: "showPassback",
                value: function(e, t, n) {
                    e && (adsDebug("cedato: showPassback()", e, t, n), this.overlayAdsPlayer && (adsDebug("cedato: showPassback(): disposing overlay"), this.overlayAdsPlayer.placement.onDispose()), this.onAdDisplayStart(ADS_DEMAND_NAME, t, this.itemIndex), _pubsub2.default.trigger("update-ad-slot", {
                        server: this.player.server,
                        row: this.row,
                        pos: this.pos,
                        width: 300,
                        height: 250,
                        itemDisplay: "hide",
                        adDisplay: "show"
                    }), n && n.style && (n.style.width = "300px", n.style.height = "250px"), adsDebug("cedato: showPassback(): will call initPassbackHandler"), initPassbackHandler(this, e), this.overlayAdsPlayer && this.overlayAdsPlayer.placement.onDispose())
                }
            }, {
                key: "createAdStartTimer",
                value: function(e, t, n) {
                    var r = this;
                    adsDebug("cedato: createAdStartTimer()");
                    var i = e.getAttribute("data-timeout"),
                        o = 1e3 * parseInt(i, 10);
                    return adsDebug("cedato: createAdStartTimer() timeOut", o), setTimeout(function() {
                        return r.showPassback(e, t, n)
                    }, o)
                }
            }, {
                key: "create",
                value: function create() {
                    var _this2 = this;
                    return new Promise(function(resolve, reject) {
                        try {
                            var tagName = _this2.player.name,
                                rawConfig = utils.composeRawConfig(_this2.player.code, _this2.pageUrl, _this2.subid);
                            if (adsDebug("Cedato player config", _this2.player), adsDebug("Cedato player raw config", rawConfig), !rawConfig) return adsDebug("Cedato can't find config for player", _this2.player), reject("Cedato can't find config for player", _this2.player);
                            _this2.onAdTagLoad(ADS_DEMAND_NAME, tagName, _this2.itemIndex);
                            var fragment = document.createElement("div");
                            fragment.innerHTML = rawConfig;
                            var playerDiv = fragment.querySelector("div");
                            if (!playerDiv) return resolve();
                            var cedatoDivId = playerDiv.getAttribute("id"),
                                script = fragment.querySelector("script"),
                                scriptContent = script.textContent || script.text,
                                scriptParent = script.parentNode;
                            scriptParent.removeChild(script);
                            var passbackScript = fragment.querySelector('script[type="cedato/passback"]');
                            passbackScript && passbackScript.parentNode.removeChild(passbackScript);
                            var attrs = [].concat((0, _toConsumableArray3.default)(script.attributes));
                            _this2.adContainer.appendChild(playerDiv);
                            var scriptTag = document.createElement("script");
                            if (attrs.forEach(function(e) {
                                    scriptTag.setAttribute(e.nodeName, e.nodeValue)
                                }), playerDiv.appendChild(scriptTag), scriptContent) try {
                                eval(scriptContent)
                            } catch (e) {
                                return scriptTag.textContent = scriptContent, adsDebug("Cedato content eval error", e), reject(e)
                            }
                            var adStartTimer = null;
                            passbackScript && (passbackScript.innerHTML = (0, _index.normalizeDisplayConfig)(passbackScript.innerHTML, _this2.pageUrl, _this2.subid), adsDebug("Cedato passback", passbackScript.outerHTML), playerDiv.appendChild(passbackScript), adStartTimer = _this2.createAdStartTimer(passbackScript, tagName, playerDiv)), window.CEDATO_INIT = window.CEDATO_INIT || {}, window.CEDATO_INIT[cedatoDivId] = utils.createCedatoInit(_this2, adStartTimer, ADS_DEMAND_NAME, tagName, _this2.showPassback.bind(_this2, passbackScript, tagName, playerDiv));
                            var shouldAlwaysShowPlayer = _this2.player && _this2.player.show || "true" === playerDiv.getAttribute("always-show-player");
                            return shouldAlwaysShowPlayer === !0 && _this2.onContentVideoStart(_this2.itemIndex), resolve()
                        } catch (e) {
                            return _this2.onAdTagLoadFail(ADS_DEMAND_NAME, _this2.player.name, _this2.itemIndex), adsDebug("Cedato init error", e), reject(e)
                        }
                    })
                }
            }]), Placement
        }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Placement = t.normalizeDisplayConfig = t.SUPPORT_MULTI_PLACEMENTS = t.ADS_DEMAND_NAME = void 0;
    var i = n(138),
        o = r(i),
        a = n(139),
        s = r(a),
        u = n(144),
        c = n(113),
        l = n(151),
        d = (r(l), n(95)),
        f = (0, c.getDebugger)("ads"),
        p = t.ADS_DEMAND_NAME = "DISPLAY",
        h = (t.SUPPORT_MULTI_PLACEMENTS = !0, function(e) {
            var t = "div id='",
                n = "'",
                r = e.lastIndexOf(t),
                i = e.substr(r + t.length).indexOf(n);
            return e.slice(r + t.length, r + t.length + i)
        }),
        v = function(e, t) {
            var n = "div#" + t + " iframe { height: 100% }",
                r = e.createElement("style");
            return r.type = "text/css", r.appendChild(e.createTextNode(n)), r
        },
        m = t.normalizeDisplayConfig = function(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = r.reloadAfter,
                o = void 0 === i ? 0 : i;
            if (e = e.replace(/\{RND\}/g, Math.random().toString()).replace(/\{PAGE_URL\}/g, t).replace(/\{DOMAIN\}/g, window.location.hostname).replace(/&lt;/g, "<").replace(/&gt;/g, ">"), e.indexOf("static.criteo.net") > -1) {
                var a = g.exec(e)[0];
                e = e.replace(a, a + '"extraData":{"subid":"' + (0, d.queryStringFromObject)(n) + '"},')
            }
            if (e.lastIndexOf(".com/tag/js/gpt.js") > -1) {
                e = e.replace("googletag.cmd = googletag.cmd || [];", "googletag.cmd = [];");
                var s = y({
                    spotId: n.spotId,
                    source: n.source
                });
                e = e.replace(".addService(googletag.pubads());", s + ".addService(googletag.pubads());"), e = e.replace(".addService(googletag.pubads());", ".set('page_url','" + n.domain + "').addService(googletag.pubads());"), o && (e = e.replace(".addService(googletag.pubads());", ".addService(googletag.pubads());\n      var counter=0;\n      var intervalId=setInterval(function(){\n      googletag.pubads().refresh();\n      counter++;\n      if( counter === 3 ){\n          clearInterval(intervalId)\n      }\n      }," + 1e3 * o + ")"))
            }
            return e.indexOf("text/x-spotim-passback") > -1 && (e = e.replace(/\n/g, "@@@PLACEHOLDER").match(/<script.* type="text\/x-spotim-passback">(.*)<\/script>/)[1].replace(/@@@PLACEHOLDER/g, "\n")), e
        },
        g = /"zoneid".*/,
        y = function(e) {
            return Object.keys(e).reduce(function(t, n) {
                return e[n] && (t += ".setTargeting('" + n + "','" + e[n] + "')"), t
            }, "")
        };
    t.Placement = function() {
        function e(t, n) {
            var r = n.player,
                i = void 0 === r ? {} : r,
                a = n.itemIndex,
                s = void 0 === a ? -1 : a,
                u = n.width,
                c = void 0 === u ? 300 : u,
                l = n.height,
                d = void 0 === l ? 250 : l,
                f = n.pageUrl,
                p = void 0 === f ? "" : f,
                h = n.subid,
                v = void 0 === h ? {} : h,
                m = n.onContentVideoStart,
                g = void 0 === m ? function() {} : m,
                y = n.onContentVideoFinish,
                _ = void 0 === y ? function() {} : y,
                b = n.onAdTagLoad,
                w = void 0 === b ? function() {} : b,
                E = n.onAdTagLoadFail,
                S = void 0 === E ? function() {} : E,
                O = n.onAdDisplayStart,
                A = void 0 === O ? function() {} : O,
                k = n.onAdDisplayFinish,
                T = void 0 === k ? function() {} : k,
                x = n.onDispose,
                I = void 0 === x ? function() {} : x;
            (0, o.default)(this, e), Object.assign(this, {
                adContainer: t,
                player: i,
                itemIndex: s,
                width: c,
                height: d,
                pageUrl: p,
                onContentVideoStart: g,
                onContentVideoFinish: _,
                onAdTagLoad: w,
                onAdTagLoadFail: S,
                onAdDisplayStart: A,
                onAdDisplayFinish: T,
                onDispose: I,
                subid: v
            }), this.DISPLAY_CLOSE = "$$SPOTIM_DISPLAY_CLOSE_" + this.itemIndex + "$$", this.DISPLAY_RELOAD = "$$SPOTIM_DISPLAY_RELOAD_" + this.itemIndex + "$$"
        }
        return (0, s.default)(e, [{
            key: "create",
            value: function() {
                var e = this;
                return new Promise(function(t, n) {
                    try {
                        var r = m(e.player.code, e.pageUrl, e.subid, {
                                reloadAfter: e.player.reload_after
                            }),
                            i = e.player.name,
                            o = h(r);
                        e.registerForFallbackEvent(), f("Display config", e.player), e.onAdTagLoad(p, i, e.itemIndex), e.onAdDisplayStart(p, i, e.itemIndex);
                        var a = document.createElement("iframe");
                        Object.assign(a.style, {
                            width: "100%",
                            height: "100%",
                            border: "none"
                        }), r = "<html><body style='margin: 0; padding: 0; background: transparent; overflow: hidden;'>" + r + "</body></html>", e.adContainer.appendChild(a), a.contentWindow.document.open(), a.contentWindow.document.write(r), a.contentWindow.document.head.appendChild(v(a.contentWindow.document, o)), a.contentWindow.document.close(), e.player.closeAfter && (f("Display will close after " + e.player.closeAfter + " seconds."), window[e.DISPLAY_CLOSE] = setTimeout(function() {
                            f("Display timeout. Closing."), e.onAdDisplayFinish(), clearInterval(window.$$SPOTIM_DISPLAY_RELOAD$$)
                        }, 1e3 * e.player.closeAfter)), f("Display content", r), t()
                    } catch (t) {
                        e.onAdTagLoadFail(p, e.player.name, e.itemIndex), f("Display init error", t), n(t)
                    }
                })
            }
        }, {
            key: "registerForFallbackEvent",
            value: function() {
                var e = this;
                if (!u.config.isAmp) {
                    f("registerForFallbackEvent");
                    var t = function t(n) {
                        var r = /^spotim-display-fallback$/.exec(n.data);
                        null !== r && (f("calling onAdDisplayFinish from registerForFallbackEvent"), e.onAdDisplayFinish(), clearTimeout(window[e.DISPLAY_CLOSE]), clearInterval(window[e.DISPLAY_RELOAD]), window.top.removeEventListener("message", t, !1))
                    };
                    window.top.addEventListener("message", t, !1)
                }
            }
        }]), e
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getPassbackFrame = t.createCedatoInit = t.composeRawConfig = void 0;
    var i = n(102),
        o = r(i),
        a = n(95),
        s = n(113),
        u = (0, s.getDebugger)("ads");
    t.composeRawConfig = function(e, t, n) {
        var r = e;
        switch (r) {
            case "ineractive":
                r = '<div id="video1023275456{CB}" style="width: 300px; height: 250px;"><script src="http://p.algovid.com/player/player.js?p=1023275456&sid={SID}&cb={CB}&w=300&h=250&d={URL}" type="text/javascript"></script></div>';
                break;
            case "loopme":
                r = '<div id="video187238151{CB}" style="width: 300px; height: 250px;"><script src="https://p.algovid.com/player/player.js?p=187238151&sid={SID}&cb={CB}&w=300&h=250&d={URL}" type="text/javascript"></script></div>';
                break;
            case "vdopia":
                r = '<div id="video584309398{CB}" style="width: 300px; height: 250px;"><script src="https://p.algovid.com/player/player.js?p=584309398&sid={SID}&cb={CB}&w=300&h=250&d={URL}" type="text/javascript"></script></div>'
        }
        return r = r.replace(/\{RND\}/g, Math.random().toString()).replace(/\{PAGE_URL\}/g, t).replace(/\{DOMAIN\}/g, window.location.hostname).replace(/\{SID\}/g, encodeURIComponent((0, a.queryStringFromObject)((0, o.default)({}, n), !1))).replace(/\{URL\}/g, t).replace(/\{CB\}/g, Math.random().toString());
    }, t.createCedatoInit = function(e, t, n, r, i) {
        return function() {
            this.overrideInitParams({
                allowSound: !1
            }), this.on("adstart", function() {
                u("Cedato event: adstart"), e.adContainer ? (Object.assign(e.adContainer.style, {
                    opacity: 1
                }), u("adContainer got opacity: 1", e.adContainer)) : u("adContainer not found"), t && (u("Cedato passback clear"), clearTimeout(t)), e.onAdDisplayStart(n, r, e.itemIndex), e.overlayAdsPlayer && (u("Cedato adstart - disposing overlay"), e.overlayAdsPlayer.placement.onDispose())
            }), e.player && e.player.show || this.on("adcomplete", function(t) {
                t.data.listCompleted && (u("Cedato event: adcomplete"), e.adContainer ? (u("Cedato adcomplete - hiding adContainer with display:none"), Object.assign(e.adContainer.style, {
                    display: "none"
                })) : u("Cedato adcomplete - trying to hide ad container, but wasn't found"), i(), e.onAdDisplayFinish.call(null, n, r, e.itemIndex))
            })
        }
    }, t.getPassbackFrame = function(e) {
        var t = e.adContainer,
            n = t.querySelector("iframe");
        return n || (n = document.createElement("iframe"), t.appendChild(n)), n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Placement = t.SUPPORT_MULTI_PLACEMENTS = t.ADS_DEMAND_NAME = void 0;
    var i = n(90),
        o = r(i),
        a = n(138),
        s = r(a),
        u = n(139),
        c = r(u),
        l = n(113),
        d = n(151),
        f = (r(d), (0, l.getDebugger)("ads")),
        p = t.ADS_DEMAND_NAME = "INLINE";
    t.SUPPORT_MULTI_PLACEMENTS = !0, t.Placement = function() {
        function e(t, n) {
            var r = n.player,
                i = void 0 === r ? {} : r,
                o = n.itemIndex,
                a = void 0 === o ? -1 : o,
                u = n.width,
                c = void 0 === u ? 300 : u,
                l = n.height,
                d = void 0 === l ? 250 : l,
                f = n.pageUrl,
                p = void 0 === f ? "" : f,
                h = n.onContentVideoStart,
                v = void 0 === h ? function() {} : h,
                m = n.onContentVideoFinish,
                g = void 0 === m ? function() {} : m,
                y = n.onAdTagLoad,
                _ = void 0 === y ? function() {} : y,
                b = n.onAdTagLoadFail,
                w = void 0 === b ? function() {} : b,
                E = n.onAdDisplayStart,
                S = void 0 === E ? function() {} : E,
                O = n.onAdDisplayFinish,
                A = void 0 === O ? function() {} : O;
            (0, s.default)(this, e), Object.assign(this, {
                adContainer: t,
                player: i,
                itemIndex: a,
                width: c,
                height: d,
                pageUrl: p,
                onContentVideoStart: v,
                onContentVideoFinish: g,
                onAdTagLoad: _,
                onAdTagLoadFail: w,
                onAdDisplayStart: S,
                onAdDisplayFinish: A
            })
        }
        return (0, c.default)(e, [{
            key: "create",
            value: function() {
                var e = this;
                return new Promise(function(t, n) {
                    try {
                        var r = e.player.code;
                        r = r.replace(/\{RND\}/g, Math.random().toString()).replace(/\{PAGE_URL\}/g, e.pageUrl).replace(/\{DOMAIN\}/g, window.location.hostname).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        var i = e.player.name;
                        f("Inline config", e.player), e.onAdTagLoad(p, i, e.itemIndex), e.adContainer.innerHTML = r;
                        var a = [].concat((0, o.default)(e.adContainer.querySelectorAll("script")));
                        a.forEach(function(t) {
                            var n = document.createElement("script");
                            if (n.textContent = t.textContent, t.hasAttributes()) {
                                var r = [].concat((0, o.default)(t.attributes));
                                r.forEach(function(e) {
                                    n.setAttribute(e.name, e.value)
                                })
                            }
                            e.adContainer.insertBefore(n, t), e.adContainer.removeChild(t)
                        }), f("Inline content", r), e.onAdDisplayStart(p, i, e.itemIndex), t()
                    } catch (t) {
                        e.onAdTagLoadFail(p, e.player.name, e.itemIndex), f("Inline init error", t), n(t)
                    }
                })
            }
        }]), e
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Placement = t.SUPPORT_MULTI_PLACEMENTS = t.ADS_DEMAND_NAME = void 0;
    var i = n(102),
        o = r(i),
        a = n(138),
        s = r(a),
        u = n(139),
        c = r(u),
        l = n(295),
        d = r(l),
        f = n(113),
        p = n(296),
        h = r(p),
        v = n(95),
        m = n(297),
        g = r(m),
        y = n(135),
        _ = r(y),
        b = n(298),
        w = n(301),
        E = n(144),
        S = n(302),
        O = n(303),
        A = n(98),
        k = n(151),
        T = r(k),
        x = (0, f.getDebugger)("ads"),
        I = t.ADS_DEMAND_NAME = "SR",
        P = (t.SUPPORT_MULTI_PLACEMENTS = !1, "player"),
        C = function() {
            return {
                geo: E.config.geo,
                device: (0, A.getDeviceType)()
            }
        },
        R = function() {
            return "sp_K1uZhoSA" === E.spotId && !!document.querySelector(".vdb_player")
        },
        M = function() {
            return R() ? {
                overrideRemoteConfig: !0,
                plugins: {
                    sticky: !1
                }
            } : {}
        };
    t.Placement = function() {
        function e(t, n) {
            var r = n.row,
                i = n.pos,
                o = n.player,
                a = void 0 === o ? {} : o,
                u = n.itemIndex,
                c = void 0 === u ? -1 : u,
                l = n.subid,
                d = void 0 === l ? {} : l,
                f = n.width,
                p = void 0 === f ? 400 : f,
                h = n.height,
                v = void 0 === h ? 300 : h,
                m = n.scaleWidthToFit,
                y = void 0 !== m && m,
                _ = n.pageUrl,
                b = void 0 === _ ? "" : _,
                w = n.onContentVideoStart,
                E = void 0 === w ? function() {} : w,
                S = n.onContentVideoFinish,
                O = void 0 === S ? function() {} : S,
                A = n.onAdTagLoad,
                k = void 0 === A ? function() {} : A,
                T = n.onAdTagLoadSuccess,
                x = void 0 === T ? function() {} : T,
                I = n.onAdTagLoadFail,
                P = void 0 === I ? function() {} : I,
                C = n.onAdDisplayStart,
                R = void 0 === C ? function() {} : C,
                M = n.onAdDisplayFinish,
                D = void 0 === M ? function() {} : M,
                L = n.onAdImpression,
                j = void 0 === L ? function() {} : L,
                N = n.onAdViewableImpression,
                F = void 0 === N ? function() {} : N,
                U = n.onAdViewableIab,
                V = void 0 === U ? function() {} : U,
                q = n.onAdViewedFirstQuartile,
                H = void 0 === q ? function() {} : q,
                z = n.onAdClickThrough,
                B = void 0 === z ? function() {} : z,
                $ = n.onAdNoFill,
                W = void 0 === $ ? function() {} : $,
                G = n.onDispose,
                K = void 0 === G ? function() {} : G,
                J = n.onPlayerDone,
                X = void 0 === J ? function() {} : J,
                Y = n.isOverlayPlayer,
                Q = void 0 !== Y && Y;
            (0, s.default)(this, e), Object.assign(this, {
                adContainer: t,
                player: a,
                row: r,
                pos: i,
                itemIndex: c,
                width: p,
                height: v,
                scaleWidthToFit: y,
                pageUrl: b,
                onContentVideoStart: E,
                onContentVideoFinish: O,
                onAdTagLoad: k,
                onAdTagLoadFail: P,
                onAdDisplayStart: R,
                onAdDisplayFinish: D,
                onAdTagLoadSuccess: x,
                onAdImpression: j,
                onAdViewableImpression: F,
                onAdViewableIab: V,
                onAdViewedFirstQuartile: H,
                onAdClickThrough: B,
                onAdNoFill: W,
                onDispose: K,
                onPlayerDone: X,
                subid: d,
                isOverlayPlayer: Q
            }), this.demandDeferred = new g.default
        }
        return (0, c.default)(e, [{
            key: "startPassbackTimer",
            value: function(e) {
                this.passbackAdsPlayer && this.player.passback_interval && (x("startPassbackTimer", this.player.passback_interval), this.passbackTimer = setTimeout(this.showPassback.bind(this, e), 1e3 * this.player.passback_interval))
            }
        }, {
            key: "cancelPassbackTimer",
            value: function() {
                x("cancelPassbackTimer"), clearTimeout(this.passbackTimer)
            }
        }, {
            key: "showPassback",
            value: function(e) {
                this.cancelPassbackTimer(), this.passbackAdsPlayer && (this.overlayAdsPlayer && (x("Placement: Passback called"), this.overlayAdsPlayer.placement.onDispose()), this.onDispose(), e.dispose(), x("Initializing passback"), this.passbackAdsPlayer.initialize())
            }
        }, {
            key: "handleMoatTracking",
            value: function(e, t) {
                var n = void 0;
                (0, S.shouldUseMoat)(E.config, P, E.spotId) && (n = C(), (0, O.initMoatEvents)(e, t, E.spotId, n))
            }
        }, {
            key: "mountContentClickFunctionality",
            value: function(e, t) {
                var n = this,
                    r = e.querySelector("video");
                if (r) {
                    var i = r.style.cssText;
                    r.style = i + " cursor: pointer;", r.addEventListener("click", function() {
                        return n.handleContentClick(t)
                    }, !1)
                }
            }
        }, {
            key: "handleContentClick",
            value: function(e) {
                e.paused ? (x("Bladex ovelay clicked => play"), e.play()) : (x("Bladex overlay clicked => paused"), e.pause())
            }
        }, {
            key: "getContentName",
            value: function(e) {
                var t = void 0;
                try {
                    var n = e.options.content[0].url,
                        r = n.split("/"),
                        i = r[r.length - 1];
                    t = i.split(".")[0]
                } catch (e) {
                    console.error("failed to parse sr content name"), t = null
                }
                return t
            }
        }, {
            key: "create",
            value: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return _.default ? (this.adContainer.style.width = "100%", this.adContainer.style.height = this.height + "px") : (this.adContainer.style.width = this.width + "px", this.adContainer.style.height = this.height + "px"), this.scaleWidthToFit && (this.adContainer.style.width = "100%"), (0, w.initializeStreamRailSdk)(t).then(function() {
                    e.demandDeferred.resolve()
                }), this.demandDeferred.promise.then(function() {
                    try {
                        var t = function(e) {
                                var t = this;
                                this.handleMoatTracking(e, a), this.mountContentClickFunctionality(e.el(), e), h.default.trigger("placement-created", {
                                    dispose: function() {
                                        t.onDispose(), e.dispose()
                                    }
                                }), this.onAdTagLoadSuccess(I, i, this.itemIndex), x("StreamRail player", e), e.on("contentloadstart", function() {
                                    (0, b.trackRecirculation)({
                                        type: "sr_player_content_start",
                                        spot_id: E.spotId,
                                        item_id: t.getContentName(e)
                                    })
                                }), e.on("contentStart", function() {
                                    x("SR Event: contentStart"), t.onContentVideoStart(I, i, t.itemIndex)
                                }), e.on("contentplay", function(e) {
                                    x("SR Event: contentplay"), t.onContentVideoStart(I, i, t.itemIndex)
                                }), e.on("contentEnd", function() {
                                    x("SR Event: contentEnd"), t.onContentVideoFinish(I, i, t.itemIndex), t.onDispose(), e.dispose()
                                }), e.on("contentend", function() {
                                    (0, b.trackRecirculation)({
                                        type: "sr_player_content_end",
                                        spot_id: E.spotId,
                                        item_id: t.getContentName(e)
                                    }), t.onDispose(), e.dispose(), x("SR Event: contentend"), t.onContentVideoFinish(I, i, t.itemIndex)
                                }), e.on("onPlayerDone", function() {
                                    x("SR Event: onPlayerDone"), t.onPlayerDone(I, i, t.itemIndex)
                                }), e.on("AdRequest", function() {
                                    return x("SR Event: AdRequest")
                                }), e.on("AdResponse", function() {
                                    return x("SR Event: AdResponse")
                                }), e.on("AdLoaded", function() {
                                    return x("SR Event: AdLoaded")
                                }), e.on("AdError", function() {
                                    return x("SR Event: AdError")
                                }), e.on("AdImpression", function() {
                                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                                    x.apply(void 0, ["SR Event: AdImpression"].concat(r)), t.onAdImpression.bind(null, I, i, t.itemIndex), T.default.trigger("sr_ad_impression", {
                                        player: e
                                    }), t.cancelPassbackTimer()
                                }), e.on("AdVideoStart", function() {
                                    x("SR Event: AdVideoStart"), t.onAdDisplayStart.call(null, I, i, t.itemIndex)
                                }), e.on("AdVideoFirstQuartile", function() {
                                    x("SR Event: AdVideoFirstQuartile"), t.onAdViewedFirstQuartile(null, I, i, t.itemIndex)
                                }), this.player && this.player.show || r.alwaysShowPlayer || r.hidePlayerOnContentEnd || (e.on("AdVideoComplete", function() {
                                    x("SR Event: AdVideoComplete"), t.onAdDisplayFinish(I, i, t.itemIndex)
                                }), e.on("AdSkipped", function() {
                                    x("SR Event: AdSkipped"), t.onAdDisplayFinish(I, i, t.itemIndex)
                                }), e.on("skipButtonClicked", function() {
                                    x("SR Event: skipButtonClicked"), t.onAdDisplayFinish(I, i, t.itemIndex)
                                })), r.hidePlayerOnContentEnd && (e.on("AdVideoComplete", function() {
                                    x("SR Event: AdVideoComplete"), t.onAdDisplayFinish(t.itemIndex)
                                }), this.onDispose(), e.dispose()), e.on("AdClickThru", function() {
                                    x("SR Event: AdClickThru"), t.onAdClickThrough(null, I, i, t.itemIndex)
                                });
                                try {
                                    e.resize()
                                } catch (e) {}
                                if ((this.player && this.player.show || r.alwaysShowPlayer) && this.onContentVideoStart(this.itemIndex), this.passbackAdsPlayer && (x("has passback"), this.startPassbackTimer(e), e.on("playerDone", function() {
                                        x("SR Event: playerDone"), setTimeout(t.showPassback.bind(t, e))
                                    }), e.on("AdError", function() {
                                        x("SR Event: AdError")
                                    })), this.overlayAdsPlayer) {
                                    x("Placement: overlay player detected");
                                    var n = this.onAdDisplayStart;
                                    this.onAdDisplayStart = function() {
                                        for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                                        if ("display" === t.overlayAdsPlayer.player.type) return t.overlayAdsPlayer.placement.onDispose(), Object.assign(t.adContainer.style, {
                                            width: "",
                                            height: "",
                                            opacity: 1,
                                            position: ""
                                        }), n.apply(t, i);
                                        if (t.overlayAdsPlayer.isShowing) {
                                            x("Placement: Ad display is showing. Pausing Ad."), e.pause();
                                            var a = t.overlayAdsPlayer.placement.onAdDisplayFinish;
                                            t.overlayAdsPlayer.placement.onAdDisplayFinish = function() {
                                                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                                                x("Placement: Overlay player finished. Resuming ad."), a.apply(t.overlayAdsPlayer, i), Object.assign(t.adContainer.style, {
                                                    opacity: 1,
                                                    left: "50%",
                                                    transform: "translateX(-50%)"
                                                }), n.apply(t, i), t.overlayAdsPlayer.placement.onDispose(), e.play()
                                            }
                                        } else x("Placement: overlay player isn't showing. Playing ad"), t.overlayAdsPlayer.placement.onDispose(), Object.assign(t.adContainer.style, {
                                            opacity: 1,
                                            left: "50%",
                                            transform: "translateX(-50%)"
                                        }), n.apply(t, i)
                                    }
                                }
                            },
                            n = e.player.code;
                        n = n.replace(/\{RND\}/g, Math.random().toString()).replace(/\{PAGE_URL\}/g, e.pageUrl).replace(/\{DOMAIN\}/g, window.location.hostname);
                        var r = JSON.parse(n);
                        r.cleanDOMOnImpression = !0, Object.assign(r, M());
                        var i = e.player.name;
                        if (x("StreamRail player config", e.player), x("StreamRail player config", JSON.parse(JSON.stringify(r))), !r) throw x("StreamRail can't find config for player", e.player), new Error("StreamRail can't find config for player", e.player);
                        r.macros = r.macros || {}, r.macros.sub_id = (0, v.queryStringFromObject)((0, o.default)({}, e.subid), !1), e.onAdTagLoad(I, i, e.itemIndex);
                        var a = "player-" + (0, d.default)();
                        e.adContainer.setAttribute("id", a);
                        var s = SR(a, r);
                        s.then ? (x("StreamRail player with promise"), s.then(t.bind(e)).catch(function(e) {
                            throw e
                        })) : (x("StreamRail player no-promise"), t(s))
                    } catch (t) {
                        throw e.onAdTagLoadFail(I, e.player.name, e.itemIndex), x("StreamRail init error", t), t
                    }
                })
            }
        }]), e
    }()
}, function(e, t) {
    "use strict";

    function n() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }

    function r() {
        var e = n;
        return e() + e() + e() + e() + e() + e() + e() + e()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shortGuid = n, t.guid = r, t.default = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(158),
        o = r(i),
        a = n(102),
        s = r(a),
        u = n(138),
        c = r(u),
        l = n(139),
        d = r(l),
        f = n(295),
        p = r(f),
        h = function() {
            function e() {
                (0, c.default)(this, e), this.uid = (0, p.default)()
            }
            return (0, d.default)(e, [{
                key: "trigger",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = new CustomEvent("spotim-rc-" + e, {
                            detail: (0, s.default)({
                                uid: this.uid
                            }, t)
                        });
                    document.dispatchEvent(n)
                }
            }, {
                key: "on",
                value: function(e, t) {
                    var n = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    document.addEventListener("spotim-rc-" + e, function(e) {
                        var i = e.detail,
                            a = i.uid,
                            s = (0, o.default)(i, ["uid"]);
                        (r || a !== n.uid) && t(s)
                    }, !1)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    throw new Error("Not implemented")
                }
            }]), e
        }(),
        v = new h;
    t.default = v
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(138),
        o = r(i),
        a = function e() {
            var t = this;
            (0, o.default)(this, e), this.promise = new Promise(function(e, n) {
                t.resolve = e, t.reject = n
            })
        };
    t.default = a
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        if (!d) {
            var t = (0, a.getStoredCurrentUserId)();
            l.setSpotId(e), l.setCurrentUserId(t);
            var n = c.default.get(u.CURRENT_USER_STORAGE_KEY);
            n && l.setCurrentUserIsRegistered(n.isRegistered), l.track("loaded"), d = !0
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.trackRecirculation = t.trackConversation = t.track = t.tracker = void 0, t.reportLauncherLoaded = i;
    var o = n(184),
        a = n(299),
        s = n(300),
        u = n(189),
        c = r(u),
        l = t.tracker = (0, o.createTracker)("launcher", s.version);
    l.trackConversation = function() {
        var e = l.backwardsCompat.apply(l, arguments),
            t = e.eventType,
            n = e.params;
        n = n || {}, n.source = "conversation", l.track(t, n)
    }, l.trackRecirculation = function() {
        var e = l.backwardsCompat.apply(l, arguments),
            t = e.eventType,
            n = e.params;
        n = n || {}, n.source = "recirculation", l.track(t, n)
    };
    var d = (t.track = l.track, t.trackConversation = l.trackConversation, t.trackRecirculation = l.trackRecirculation, !1)
}, function(e, t) {
    "use strict";

    function n() {
        var e = void 0;
        try {
            e = window.localStorage.getItem(i)
        } catch (e) {}
        return e
    }

    function r() {
        o || (o = !0, document.addEventListener("spot-im-current-user-change", function(e) {
            try {
                var t = e.detail.currentUserId;
                window.localStorage.setItem(i, t)
            } catch (e) {}
        }))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getStoredCurrentUserId = n, t.storeCurrentUserId = r;
    var i = "SpotIM.currentUserId",
        o = !1
}, function(e, t) {
    e.exports = {
        _from: "@spotim/spot-libs@4.0.280-extractify-JRPOfWWG.0",
        _id: "@spotim/spot-libs@4.0.280-extractify-JRPOfWWG.0",
        _inBundle: !1,
        _integrity: "sha512-QoDYf+fgnZ+z7xqkBsQpLs8irEUDpilmDRpjVWV63RMvlbc00zlSV9WodhxCV0GqvMJIagsoor3wEninbYPKMQ==",
        _location: "/@spotim/spot-libs",
        _phantomChildren: {
            accepts: "1.3.5",
            acorn: "5.7.3",
            "acorn-dynamic-import": "2.0.2",
            "ansi-escapes": "1.4.0",
            "ansi-regex": "2.1.1",
            argparse: "1.0.10",
            "array-flatten": "1.1.1",
            asynckit: "0.4.0",
            "babel-cli": "6.26.0",
            "babel-code-frame": "6.26.0",
            "babel-core": "6.26.3",
            "babel-jest": "22.4.4",
            "babel-plugin-transform-react-jsx": "6.24.1",
            "babel-plugin-transform-runtime": "6.23.0",
            "babel-preset-es2015": "6.24.1",
            "babel-preset-es2017": "6.24.1",
            "babel-preset-stage-0": "6.24.1",
            "babel-register": "6.26.0",
            "babel-traverse": "6.26.0",
            "babel-types": "6.26.0",
            babylon: "6.18.0",
            browserslist: "1.7.7",
            build: "0.1.4",
            bytes: "3.0.0",
            "caniuse-db": "1.0.30000955",
            "caniuse-lite": "1.0.30000955",
            chai: "3.5.0",
            chalk: "1.1.3",
            chardet: "0.4.2",
            classnames: "2.2.6",
            "clean-webpack-plugin": "0.1.19",
            "cli-cursor": "1.0.2",
            "cli-table": "0.3.1",
            "cli-width": "2.2.0",
            cliui: "3.2.0",
            co: "4.6.0",
            "color-convert": "1.9.3",
            colors: "1.1.2",
            "combined-stream": "1.0.7",
            commondir: "1.0.1",
            "component-emitter": "1.2.1",
            "concat-stream": "1.6.2",
            "concurrent-transform": "1.0.0",
            "content-type": "1.0.4",
            cookie: "0.3.1",
            "cookie-signature": "1.0.6",
            cookiejar: "2.1.2",
            "css-selector-tokenizer": "0.7.1",
            cssnano: "3.10.0",
            debug: "2.6.9",
            decamelize: "1.2.0",
            "deep-extend": "0.4.1",
            depd: "1.1.2",
            destroy: "1.0.4",
            doctrine: "2.1.0",
            "electron-to-chromium": "1.3.120",
            "emojis-list": "2.1.0",
            encodeurl: "1.0.2",
            "enhanced-resolve": "3.4.1",
            errno: "0.1.7",
            "escape-html": "1.0.3",
            "escape-string-regexp": "1.0.5",
            escope: "3.6.0",
            "eslint-scope": "3.7.3",
            "eslint-visitor-keys": "1.0.0",
            espree: "3.5.4",
            esquery: "1.0.1",
            estraverse: "4.2.0",
            esutils: "2.0.2",
            extend: "3.0.2",
            "external-editor": "1.1.1",
            "fast-json-stable-stringify": "2.0.0",
            figures: "1.7.0",
            "file-entry-cache": "2.0.0",
            filesize: "3.6.1",
            "find-cache-dir": "0.1.1",
            "find-versions": "2.0.0",
            formatio: "1.2.0",
            formidable: "1.2.1",
            forwarded: "0.1.2",
            "functional-red-black-tree": "1.0.1",
            "get-caller-file": "1.0.3",
            glob: "7.1.3",
            globals: "9.18.0",
            "graceful-fs": "4.1.15",
            gulp: "3.9.1",
            "gulp-awspublish": "3.3.0",
            "gulp-awspublish-router": "0.1.2",
            "gulp-rename": "1.2.2",
            "gulp-svgo": "1.5.4",
            "gzip-size": "3.0.0",
            "html-loader": "0.4.5",
            "iconv-lite": "0.4.23",
            ignore: "3.3.10",
            imurmurhash: "0.1.4",
            inherits: "2.0.3",
            inquirer: "0.12.0",
            interpret: "1.2.0",
            "is-my-json-valid": "2.19.0",
            "is-promise": "2.1.0",
            "is-resolvable": "1.1.0",
            "is-stream": "1.1.0",
            "js-yaml": "3.6.1",
            "json-loader": "0.5.7",
            "json-stable-stringify": "1.0.1",
            "json-stable-stringify-without-jsonify": "1.0.1",
            lcid: "1.0.0",
            levn: "0.3.0",
            "loader-runner": "2.4.0",
            "loader-utils": "1.2.3",
            "locate-path": "2.0.0",
            lodash: "4.17.11",
            "lodash.camelcase": "4.3.0",
            "lodash.get": "4.4.2",
            lolex: "2.7.5",
            "make-dir": "1.3.0",
            "merge-descriptors": "1.0.1",
            methods: "1.1.2",
            "mime-types": "2.1.22",
            minimatch: "3.0.4",
            mkdirp: "0.5.1",
            mocha: "3.2.0",
            "native-promise-only": "0.8.1",
            "natural-compare": "1.4.0",
            nise: "1.4.10",
            "node-libs-browser": "2.2.0",
            "node-sass": "4.11.0",
            "normalize-package-data": "2.5.0",
            "normalize-range": "0.1.2",
            "npm-run-path": "2.0.2",
            num2fraction: "1.2.2",
            "object-assign": "4.1.1",
            "on-finished": "2.3.0",
            open: "0.0.5",
            optionator: "0.8.2",
            "os-homedir": "1.0.2",
            "os-tmpdir": "1.0.2",
            "p-finally": "1.0.0",
            "parse-json": "2.2.0",
            parseurl: "1.3.2",
            "path-is-inside": "1.0.2",
            "path-to-regexp": "0.1.7",
            pify: "2.3.0",
            "pinkie-promise": "2.0.1",
            pluralize: "1.2.1",
            postcss: "5.2.18",
            "postcss-load-config": "1.2.0",
            "postcss-modules-extract-imports": "1.2.1",
            "postcss-modules-local-by-default": "1.2.0",
            "postcss-modules-scope": "1.1.0",
            "postcss-modules-values": "1.3.0",
            "postcss-value-parser": "3.3.1",
            progress: "1.1.8",
            pseudomap: "1.0.2",
            "range-parser": "1.2.0",
            "raw-body": "2.3.3",
            "raw-loader": "0.5.1",
            "readable-stream": "2.3.6",
            readline2: "1.0.1",
            regexpp: "1.1.0",
            "require-directory": "2.1.1",
            "require-main-filename": "1.0.1",
            "require-uncached": "1.0.3",
            rimraf: "2.6.3",
            "run-async": "0.1.0",
            rx: "4.1.0",
            "rx-lite": "3.1.2",
            "rx-lite-aggregates": "4.0.8",
            "safe-buffer": "5.1.2",
            samsam: "1.3.0",
            "sass-loader": "4.1.1",
            "schema-utils": "0.3.0",
            "set-blocking": "2.0.0",
            "shebang-command": "1.2.0",
            shelljs: "0.7.8",
            "signal-exit": "3.0.2",
            "source-list-map": "0.1.8",
            "source-map": "0.5.7",
            "source-map-loader": "0.1.6",
            "stats-webpack-plugin": "0.4.3",
            "string-width": "1.0.2",
            "strip-ansi": "3.0.1",
            "strip-bom": "3.0.0",
            "strip-eof": "1.0.0",
            "strip-json-comments": "2.0.1",
            "svg-inline-loader": "0.7.1",
            "svg-sprite": "1.5.0",
            "svg-sprite-loader": "0.0.31",
            svgo: "0.6.6",
            "svgo-loader": "1.2.1",
            sync: "0.2.5",
            table: "3.8.3",
            tapable: "0.2.9",
            "text-encoding": "0.6.4",
            "text-table": "0.2.0",
            through: "2.3.8",
            transifex: "1.6.6",
            "type-is": "1.6.16",
            "uglify-js": "2.8.29",
            "uglifyjs-webpack-plugin": "0.4.6",
            unpipe: "1.0.0",
            "uri-js": "4.2.2",
            vary: "1.1.2",
            watchpack: "1.6.0",
            "webpack-bundle-analyzer": "1.5.4",
            "webpack-dashboard": "0.3.0",
            "webpack-dev-server": "2.11.5",
            "webpack-sources": "1.3.0",
            "webpack-visualizer-plugin": "0.1.11",
            which: "1.3.1",
            y18n: "3.2.1",
            yallist: "2.1.2"
        },
        _requested: {
            type: "version",
            registry: !0,
            raw: "@spotim/spot-libs@4.0.280-extractify-JRPOfWWG.0",
            name: "@spotim/spot-libs",
            escapedName: "@spotim%2fspot-libs",
            scope: "@spotim",
            rawSpec: "4.0.280-extractify-JRPOfWWG.0",
            saveSpec: null,
            fetchSpec: "4.0.280-extractify-JRPOfWWG.0"
        },
        _requiredBy: ["/"],
        _resolved: "https://registry.npmjs.org/@spotim/spot-libs/-/spot-libs-4.0.280-extractify-JRPOfWWG.0.tgz",
        _shasum: "f41ad805941581bb61c9226256cfca485536fac0",
        _spec: "@spotim/spot-libs@4.0.280-extractify-JRPOfWWG.0",
        _where: "/drone/src/github.com/SpotIM/fed.recirculation-prerender",
        author: {
            name: "Spot.IM Front End Team"
        },
        bundleDependencies: !1,
        dependencies: {
            "@spotim/fed-avatars": "4.0.280-extractify-JRPOfWWG.0",
            "@spotim/fed-bootstrap": "4.0.280-extractify-JRPOfWWG.0",
            "@storybook/addon-actions": "^3.4.3",
            "@storybook/addon-links": "^3.4.3",
            "@storybook/addons": "^3.4.3",
            "@storybook/react": "^3.4.3",
            adjust: "^2.1.1",
            "assets-webpack-plugin": "^3.5.1",
            "autobind-decorator": "^1.3.4",
            autoprefixer: "^7.1.1",
            axios: "^0.18.0",
            babel: "^6.5.2",
            "babel-core": "^6.25.0",
            "babel-eslint": "^7.1.1",
            "babel-jest": "^22.4.3",
            "babel-loader": "^7.1.1",
            "babel-plugin-styled-components": "^1.5.1",
            "babel-plugin-transform-decorators-legacy": "^1.3.4",
            "babel-plugin-transform-es2015-modules-commonjs": "^6.26.2",
            "babel-plugin-transform-react-constant-elements": "^6.22.0",
            "babel-plugin-transform-react-inline-elements": "^6.22.0",
            "babel-plugin-transform-react-jsx": "^6.23.0",
            "babel-plugin-transform-react-remove-prop-types": "^0.4.3",
            "babel-plugin-transform-runtime": "^6.23.0",
            "babel-preset-env": "^1.6.1",
            "babel-preset-es2015": "^6.22.0",
            "babel-preset-es2017": "^6.22.0",
            "babel-preset-jest": "^22.4.3",
            "babel-preset-react": "^6.23.0",
            "babel-preset-stage-0": "^6.22.0",
            "babel-register": "^6.23.0",
            "babel-runtime": "^6.22.0",
            babelify: "^7.3.0",
            "browser-process-hrtime": "^0.1.2",
            browserify: "^13.0.0",
            "bugsnag-js": "^4.7.2",
            centrifuge: "^1.4.2",
            chai: "^3.5.0",
            "chai-as-promised": "^6.0.0",
            "chai-spies": "^0.7.1",
            chalk: "^1.1.3",
            "change-case": "^3.0.1",
            classnames: "^2.2.5",
            "clean-webpack-plugin": "^0.1.15",
            "core-decorators": "^0.14.0",
            "css-loader": "^0.28.4",
            "date-fns": "^1.29.0",
            debug: "^2.6.0",
            "deep-extend": "^0.4.1",
            "dirty-chai": "^1.2.2",
            "dom-iterator": "^0.3.0",
            dotenv: "^4.0.0",
            "es6-map": "^0.1.4",
            "es6-promise": "^4.1.1",
            "es6-set": "^0.1.4",
            eslint: "^4.5.0",
            "eslint-config-google": "^0.9.1",
            "eslint-config-react-app": "^2.0.0",
            "eslint-loader": "^1.9.0",
            "eslint-plugin-flowtype": "^2.35.0",
            "eslint-plugin-import": "^2.7.0",
            "eslint-plugin-jsx-a11y": "^5.1.1",
            "eslint-plugin-react": "^7.7.0",
            express: "^4.16.3",
            "extract-text-webpack-plugin": "^3.0.0",
            faker: "^4.1.0",
            "file-loader": "^0.11.2",
            "fs-extra": "^3.0.1",
            "giphy-api": "^1.2.7",
            gulp: "^3.9.1",
            "gulp-awspublish": "^3.3.0",
            "gulp-awspublish-router": "^0.1.2",
            "gulp-concat": "^2.6.0",
            "gulp-rename": "^1.2.2",
            "gulp-replace": "^0.5.4",
            "gulp-sourcemaps": "^1.6.0",
            "gulp-uglify": "^1.5.3",
            "gulp-util": "^3.0.7",
            "html-webpack-plugin": "^2.28.0",
            htmlparser2: "^3.9.2",
            "ima.js-babel6-polyfill": "^0.1.1",
            immer: "^1.3.1",
            "immutability-helper": "^2.6.4",
            immutable: "^3.8.1",
            "innersvg-polyfill": "^0.0.2",
            "iron-node": "^3.0.20",
            jest: "^22.4.2",
            "jest-styled-components": "^5.0.1",
            "js-cookie": "^2.1.3",
            jsdom: "^9.11.0",
            "jsdom-global": "^2.1.1",
            "loader-utils": "^1.1.0",
            lockr: "^0.8.4",
            "lorem-ipsum": "^1.0.4",
            mocha: "^3.2.0",
            "mocha-jsdom": "^1.1.0",
            "mock-raf": "^1.0.0",
            "move-js": "^0.5.0",
            "node-sass": "^4.8.3",
            "object-assign": "^4.1.0",
            "object.entries": "^1.0.4",
            open: "^0.0.5",
            polished: "^1.9.0",
            "popper.js": "^1.11.0",
            "postcss-flexbugs-fixes": "^3.0.0",
            "postcss-loader": "^2.0.6",
            "progress-bar-webpack-plugin": "^1.9.0",
            "prop-types": "^15.6.0",
            quill: "^1.2.2",
            "razzle-dev-utils": "^0.8.4",
            react: "^16.3.0",
            "react-addons-css-transition-group": "^15.6.2",
            "react-addons-test-utils": "^15.6.2",
            "react-dev-utils": "^4.0.0",
            "react-dom": "^16.0.0",
            "react-error-overlay": "^2.0.0",
            "react-immutable-proptypes": "^2.1.0",
            "react-redux": "^5.0.7",
            "react-tools": "^0.13.3",
            "react-tracking": "^5.2.1",
            "react-truncate": "^2.3.0",
            redux: "^4.0.0",
            "redux-act": "^1.7.4",
            "redux-actions": "^2.3.2",
            "redux-batched-actions": "^0.2.1",
            "redux-logic": "^0.12.3",
            "redux-mock-store": "^1.2.2",
            "redux-thunk": "^2.2.0",
            "regenerator-runtime": "^0.11.1",
            renorm: "^0.3.5",
            rxjs: "^5.5.6",
            "sass-loader": "^4.1.1",
            sinon: "^3.2.1",
            "source-map-loader": "^0.1.5",
            "start-server-webpack-plugin": "^2.2.0",
            "style-loader": "^0.18.2",
            "styled-components": "^3.1.5",
            superagent: "^3.5.2",
            "superagent-jsonp": "^0.1.1",
            "svg-sprite-loader": "^0.0.31",
            "svgo-loader": "^1.2.1",
            transifex: "^1.4.4",
            "url-loader": "^0.5.9",
            verge: "^1.9.1",
            "viewport-observer": "^2.3.0",
            "vinyl-buffer": "^1.0.0",
            "vinyl-source-stream": "^1.1.0",
            webpack: "^3.4.1",
            "webpack-dev-server": "^2.6.1",
            "webpack-node-externals": "^1.6.0",
            "whatwg-fetch": "^1.0.0",
            xhr: "^2.2.2",
            yargs: "^7.0.1"
        },
        deprecated: !1,
        description: "Spot.IM libraries",
        devDependencies: {
            "babel-plugin-styled-components": "^1.5.1"
        },
        license: "UNLICENSED",
        name: "@spotim/spot-libs",
        scripts: {
            "build-storybook": "build-storybook",
            "deploy-fed-multiframes:production": "NODE_ENV=production node ./webpack/index.js --deploy",
            "deploy-fed-multiframes:staging": "NODE_ENV=staging node ./webpack/index.js --deploy",
            "dev-fed-multiframes": "NODE_ENV=development node ./webpack/index.js",
            "dev-fed-multiframes:build": "NODE_ENV=development node ./webpack/index.js --build",
            storybook: "start-storybook -p 6006",
            test: "jest",
            "test-debug-fed-analytics": "NODE_ENV=tests node ./node_modules/iron-node/bin/run.js ./node_modules/mocha/bin/_mocha ./tests/index.js",
            "test-debug-fed-common": "NODE_ENV=staging node ./node_modules/iron-node/bin/run.js ./node_modules/mocha/bin/_mocha ./test/index.js",
            "test-debug-fed-communicator": "NODE_ENV=tests node ./node_modules/iron-node/bin/run.js ./node_modules/mocha/bin/_mocha ./tests/index.js",
            "test-debug-fed-connected-components": "NODE_ENV=tests node ./node_modules/iron-node/bin/run.js ./node_modules/mocha/bin/_mocha ./tests/index.js",
            "test-debug-fed-models": "NODE_ENV=tests node ./node_modules/iron-node/bin/run.js ./node_modules/mocha/bin/_mocha ./tests/index.js",
            "test-debug-fed-module-options": "NODE_ENV=tests node ./node_modules/iron-node/bin/run.js ./node_modules/mocha/bin/_mocha ./tests/index.js",
            "test-debug-fed-realtime": "NODE_ENV=tests node ./node_modules/iron-node/bin/run.js ./node_modules/mocha/bin/_mocha ./tests/index.js",
            "test-debug-fed-utils": "NODE_ENV=tests TEST_DEBUG=true iron-node ./node_modules/mocha/bin/_mocha ./test/index.js",
            "test-fed-analytics": "NODE_ENV=tests ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-broadcast": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-common": "NODE_ENV=staging ../../node_modules/mocha/bin/mocha ./fed-common/test/index.js",
            "test-fed-common-components": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-communicator": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-connected-components": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-models": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-module-options": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-multiframes": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-realtime": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-resources": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-rich-editor": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-uikit": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test-fed-utils": "NODE_ENV=staging ./node_modules/mocha/bin/mocha ./test/index.js",
            "test:watch": "jest --watch"
        },
        version: "4.0.280-extractify-JRPOfWWG.0"
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return u("StreamRail SDK init"), new Promise(function(t, n) {
            window.$$SPOTIM_SRSDK_CALLED$$ ? window.$$SPOTIM_SRSDK_RESOLVED$$ ? t() : a.default.on("srs-sdk-resolved", t) : (window.$$SPOTIM_SRSDK_CALLED$$ = !0, window.srAsyncInit = function() {
                window.$$SPOTIM_SRSDK_RESOLVED$$ = !0, a.default.trigger("srs-sdk-resolved"), t()
            }, function(t, r, i) {
                var o, a = t.getElementsByTagName(r)[0];
                t.getElementById(i) || (o = t.createElement(r), o.id = i, o.setAttribute("crossorigin", "anonymous"), u("Using Old SR Ads player: " + e), e ? o.src = "https://sdk.streamrail.com/player/sr.ads.js" : o.src = "https://sdk.streamrail.com/blade/sr.bladex.js", o.onload = function() {
                    u("StreamRail SDK success")
                }, o.onerror = function() {
                    n("StreamRail SDK script load error")
                }, a.parentNode.insertBefore(o, a))
            }(document, "script", "streamrail-jssdk"))
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initializeStreamRailSdk = i;
    var o = n(296),
        a = r(o),
        s = n(113),
        u = (0, s.getDebugger)("ads")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shouldUseMoat = t.addMoatImpression = void 0;
    var i = n(109),
        o = r(i),
        a = n(136),
        s = r(a),
        u = n(118),
        c = r(u),
        l = 0,
        d = 100,
        f = "moat",
        p = "percent",
        h = function() {},
        v = function(e) {
            return s.default.ajax({
                url: e,
                method: "POST",
                responseType: "json"
            }, h)
        },
        m = (t.addMoatImpression = function(e, t) {
            var n = o.default.addMoatImpression.replace("{{spotId}}", e).replace("{{moatType}}", t);
            return v(n)
        }, function(e) {
            return c.default.get(e, "ads.spot.features.recirculation.moat_enabled")
        }),
        g = function(e, t) {
            return c.default.get(e, "ads.spot.features.recirculation." + f + "_" + t + "_" + p)
        },
        y = function(e, t, n) {
            var r = parseFloat((Math.random() * (t - e) + e).toFixed(2));
            return n > r
        },
        _ = function(e, t) {
            var n = g(e, t);
            return y(l, d, n)
        };
    t.shouldUseMoat = function(e, t, n) {
        return !!m(e) && _(e, t)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        var n = t.geo,
            r = t.device,
            i = e.options.playerId;
        return {
            zMoatPLYR: i,
            zMoatGEO: n,
            zMoatENV: r
        }
    }

    function o(e) {
        var t = document.getElementById(e),
            n = t.querySelector("iframe"),
            r = n.contentDocument || n.contentWindow.document;
        return r.querySelector('[id*="sr-player"]')
    }

    function a(e, t, n, r, i) {
        var o = document.createElement("script"),
            a = [];
        t = {
            adData: {
                ids: t,
                duration: n,
                url: i
            },
            dispatchEvent: function(e) {
                this.sendEvent ? (a && (a.push(e), e = a, a = !1), this.sendEvent(e)) : a.push(e)
            }
        }, n = "_moatApi" + Math.floor(1e8 * Math.random());
        var s, u;
        try {
            s = e.ownerDocument, u = s.defaultView || s.parentWindow
        } catch (e) {
            s = document, u = window
        }
        return u[n] = t, o.type = "text/javascript", e && e.insertBefore(o, e.childNodes[0] || null), o.src = "https://z.moatads.com/" + r + "/moatvideo.js#" + n, t
    }

    function s(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "no Spot ID",
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        e.on("AdStarted", function(s) {
            try {
                var u = o(t),
                    l = i(e, r),
                    d = (0, c.default)({
                        level1: n
                    }, l),
                    f = Math.round(e.duration || 15);
                window.MoatApiReference = a(u, d, f, "spotimvideo623280551130")
            } catch (e) {
                console.error(e)
            }
        }), e.on("AdImpression", function(t, n) {
            try {
                window.adVolume = e.muted ? 1 : 0, window.MoatApiReference.dispatchEvent({
                    type: "AdVideoStart",
                    "window.adVolume": window.adVolume
                })
            } catch (e) {
                console.error(e)
            }
        }), e.on("AdStopped", function(t) {
            window.MoatApiReference.dispatchEvent({
                type: "AdStopped",
                "window.adVolume": e.volume
            })
        }), e.on("AdVideoFirstQuartile", function(t) {
            window.MoatApiReference.dispatchEvent({
                type: "AdVideoFirstQuartile",
                "window.adVolume": e.volume
            })
        }), e.on("AdVideoMidpoint", function(t) {
            window.MoatApiReference.dispatchEvent({
                type: "AdVideoMidpoint",
                "window.adVolume": e.volume
            })
        }), e.on("AdVideoThirdQuartile", function(t) {
            window.MoatApiReference.dispatchEvent({
                type: "AdVideoThirdQuartile",
                "window.adVolume": e.volume
            })
        }), e.on("AdVideoComplete", function(t) {
            window.MoatApiReference.dispatchEvent({
                type: "AdVideoComplete",
                "window.adVolume": e.volume
            })
        }), e.on("AdPaused", function(t) {
            window.MoatApiReference.dispatchEvent({
                type: "AdPaused",
                "window.adVolume": e.volume
            })
        }), e.on("window.adVolumeChange", function(t) {
            window.adVolume = e.muted ? 1 : 0, window.MoatApiReference.dispatchEvent({
                type: "window.adVolumeChange",
                "window.adVolume": window.adVolume
            })
        }), e.on("AdPlaying", function(t) {
            window.MoatApiReference.dispatchEvent({
                type: "AdPlaying",
                "window.adVolume": e.volume
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(102),
        c = r(u);
    t.initMoatEvents = s
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = [].concat((0, f.default)(e.querySelectorAll("[data-spotim-row]")));
        t.forEach(function(e) {
            e.querySelector('[data-spotim-slot-size="400x300"]') ? e.setAttribute("data-spotim-row-size", "large") : e.setAttribute("data-spotim-row-size", "small")
        })
    }

    function o(e) {
        var t = {},
            n = {
                width: 400,
                height: 300
            },
            r = !0,
            i = !1,
            o = void 0;
        try {
            for (var a, s = Object.entries(e)[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                var u = (0, l.default)(a.value, 2),
                    c = u[0],
                    d = u[1];
                t[c] = (0, m.default)({}, d, {
                    size: "Responsive" === d.size.width ? n : d.size
                })
            }
        } catch (e) {
            i = !0, o = e
        } finally {
            try {
                !r && s.return && s.return()
            } finally {
                if (i) throw o
            }
        }
        return t
    }

    function a(e) {
        var t = (0, x.resolveSourceFeatureString)();
        return !!T.default.get(e, "spot.features." + t + ".display_over_video_enabled")
    }

    function s(e) {
        var t = (0, x.resolveSourceFeatureString)();
        return a(e) && T.default.get(e, "spot.features." + t + ".display_over_video_code")
    }

    function u(e) {
        var t = (0, x.resolveSourceFeatureString)();
        return T.default.get(e, "spot.features." + t + ".passback")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.adjustLayoutForAds = t.subscribeToLayoutEvents = t.fetchUpdatedAdsConfig = t.checkIfAdsAllowed = void 0;
    var c = n(83),
        l = r(c),
        d = n(90),
        f = r(d),
        p = n(8),
        h = r(p),
        v = n(102),
        m = r(v),
        g = n(11),
        y = r(g);
    t.getDisplayOverVideoCode = s, t.isPassbackEnabledForSpot = u;
    var _ = n(144),
        b = n(113),
        w = n(153),
        E = n(151),
        S = r(E),
        O = n(98),
        A = n(117),
        k = n(118),
        T = r(k),
        x = n(231),
        I = (0, b.getDebugger)("ads");
    window.$$SPOTIM_ACTIVATE_RC_CALLED$$ = !1;
    t.checkIfAdsAllowed = function(e, t) {
        return e.allowAds() || t
    }, t.fetchUpdatedAdsConfig = function() {
        var e = (0, y.default)(h.default.mark(function e(t, n) {
            var r, i, a;
            return h.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return r = (0, O.resolveUserPlatform)(), I("fetching updated ads config"), e.prev = 2, i = (0, A.getAdvancedTargetingParams)(), a = (0, x.resolveSource)(), e.next = 7, (0, O.fetchAdsConfig)(t, r, a, i);
                    case 7:
                        n = e.sent, I("client ads config success", n), e.next = 15;
                        break;
                    case 11:
                        return e.prev = 11, e.t0 = e.catch(2), I("ERROR: client ads config fail", e.t0), e.abrupt("return", null);
                    case 15:
                        return e.abrupt("return", (0, m.default)({}, n, {
                            tags: o(n.tags)
                        }));
                    case 16:
                    case "end":
                        return e.stop()
                }
            }, e, this, [
                [2, 11]
            ])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    }(), t.subscribeToLayoutEvents = function(e) {
        function t() {
            var t = [].concat((0, f.default)(e.querySelectorAll("[data-spotim-slot-active]"))),
                n = t.map(function(e) {
                    return e.getAttribute("data-spotim-slot-row") + "-" + e.getAttribute("data-spotim-slot-pos") + "-" + e.getAttribute("data-spotim-slot-size")
                });
            e.setAttribute("data-spotim-active-slots", n.join(" "));
            var r = ([].concat((0, f.default)(e.querySelectorAll("[data-spotim-slot-showing]"))), t.map(function(e) {
                return e.getAttribute("data-spotim-slot-row") + "-" + e.getAttribute("data-spotim-slot-pos") + "-" + e.getAttribute("data-spotim-slot-size")
            }));
            e.setAttribute("data-spotim-showing-slots", r.join(" "))
        }
        S.default.on("update-ad-slot", function(n) {
            var r = e.querySelector('[data-spotim-slot-row="' + n.row + '"][data-spotim-slot-pos="' + n.pos + '"]');
            "show" === n.adDisplay ? (r.setAttribute("data-spotim-slot-active", ""), 300 === parseInt(n.width) && 250 === parseInt(n.height) ? r.setAttribute("data-spotim-slot-size", "300x250") : 400 === parseInt(n.width) && 300 === parseInt(n.height) ? r.setAttribute("data-spotim-slot-size", "400x300") : r.removeAttribute("data-spotim-slot-size")) : (r.removeAttribute("data-spotim-slot-active"), r.removeAttribute("data-spotim-slot-size")), t(), i(e)
        }), S.default.on(w.AD_DISPLAY_STARTED, function(n) {
            var r = (n.row, n.pos, e.querySelector('[data-spotim-slot-row="' + n.row + '"][data-spotim-slot-pos="' + n.pos + '"]'));
            r.setAttribute("data-spotim-slot-showing", ""), t()
        }), S.default.on(w.AD_DISPLAY_FINISHED, function(n) {
            var r = (n.row, n.pos, e.querySelector('[data-spotim-slot-row="' + n.row + '"][data-spotim-slot-pos="' + n.pos + '"]'));
            r.removeAttribute("data-spotim-slot-showing"), t()
        })
    }, t.adjustLayoutForAds = function(e) {
        if ((0, O.isPhone)())
            for (var t = [].concat((0, f.default)(e.querySelectorAll("." + _.cssSelectors.items))), n = 1; n < t.length; n++) t[n].parentNode.removeChild(t[n]);
        else {
            var r = e.querySelector('[data-spotim-slot="mobile"]');
            r && r.parentNode.removeChild(r)
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getOptOutStateObj = t.getOptOutStatus = t.OPT_OUT_TOKEN_COOKIE = t.OPT_OUT_COOKIE = void 0;
    var i = n(306),
        o = r(i),
        a = (t.OPT_OUT_COOKIE = "spotim-yad", t.OPT_OUT_TOKEN_COOKIE = "spotim-yad-token", "https://dynamic-cdn.spot.im/yad/index.v2.html"),
        s = "https://dynamic-cdn.spot.im",
        u = t.getOptOutStatus = function() {
            return new Promise(function(e) {
                var t = function t(n) {
                    n.origin === s && (o.default.window.removeEventListener("message", t, !1), e(n.data))
                };
                o.default.window.addEventListener("message", t, !1);
                var n = document.createElement("iframe");
                n.src = a, n.style.display = "none", n.style.border = "none", document.body.appendChild(n)
            })
        };
    t.getOptOutStateObj = function() {
        return u().then(function(e) {
            return e.userOptedOut ? {
                hasOptedOut: !0,
                hasAdChoiceStatus: !0
            } : {
                hasOptedOut: !1,
                hasAdChoiceStatus: !0
            }
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(160),
        o = r(i),
        a = n(102),
        s = r(a),
        u = null,
        c = function() {
            return u || (u = document.createElement("iframe"), u.style.display = "none", document.body.appendChild(u)), u
        },
        l = function() {
            return window
        },
        d = function() {
            return c().contentWindow
        },
        f = function() {
            return document
        },
        p = function() {
            return d().document
        },
        h = function(e, t, n) {
            return e.reduce(function(e, r) {
                return (0, s.default)({}, e, (0, o.default)({}, r, function() {
                    return t()[r].bind(n()).apply(void 0, arguments)
                }))
            }, {})
        };
    t.default = {
        window: (0, s.default)({}, h(["addEventListener", "removeEventListener"], d, l)),
        document: (0, s.default)({}, h([], p, f))
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = window.location.hostname,
            r = (0, o.getDeviceType)(),
            i = "recirculation",
            s = "https://z.moatads.com/spotimdisplay705463185058/moatad.js#moatClientLevel1=" + t + "&moatClientLevel2=" + n + "&moatClientLevel3=" + r + "&moatClientLevel4=Geo&moatClientSlicer1=" + i;
        a("Moat pixel src: " + s);
        var u = document.createElement("script");
        u.setAttribute("src", s), e.appendChild(u)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.addMoatPixel = r;
    var i = n(113),
        o = n(98),
        a = (0, i.getDebugger)("spot-features")
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.once = function(e) {
        var t = void 0;
        return function() {
            return e && (t = e.apply(void 0, arguments), e = null), t
        }
    }
}]);