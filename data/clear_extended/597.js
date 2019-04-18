/*!
 * DO NOT OVERRIDE THIS FILE.
 * Generated with `npm run build`
 *
 * whitehouse-theme - WordPress Theme for whitehouse.gov
 * @version 45.0.0
 * @author White House
 * @link https://www.whitehouse.gov/
 * @compiled 2019-03-19T16:31:42.730Z
 */

"document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(t) {
        "use strict";
        if ("Element" in t) {
            var e = "classList",
                n = "prototype",
                r = t.Element[n],
                o = Object,
                i = String[n].trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                s = Array[n].indexOf || function(t) {
                    for (var e = 0, n = this.length; e < n; e++)
                        if (e in this && this[e] === t) return e;
                    return -1
                },
                u = function(t, e) {
                    this.name = t, this.code = DOMException[t], this.message = e
                },
                c = function(t, e) {
                    if ("" === e) throw new u("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(e)) throw new u("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return s.call(t, e)
                },
                a = function(t) {
                    for (var e = i.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], r = 0, o = n.length; r < o; r++) this.push(n[r]);
                    this._updateClassName = function() {
                        t.setAttribute("class", this.toString())
                    }
                },
                l = a[n] = [],
                f = function() {
                    return new a(this)
                };
            if (u[n] = Error[n], l.item = function(t) {
                    return this[t] || null
                }, l.contains = function(t) {
                    return -1 !== c(this, t += "")
                }, l.add = function() {
                    for (var t, e = arguments, n = 0, r = e.length, o = !1; t = e[n] + "", -1 === c(this, t) && (this.push(t), o = !0), ++n < r;);
                    o && this._updateClassName()
                }, l.remove = function() {
                    var t, e, n = arguments,
                        r = 0,
                        o = n.length,
                        i = !1;
                    do {
                        for (t = n[r] + "", e = c(this, t); - 1 !== e;) this.splice(e, 1), i = !0, e = c(this, t)
                    } while (++r < o);
                    i && this._updateClassName()
                }, l.toggle = function(t, e) {
                    t += "";
                    var n = this.contains(t),
                        r = n ? !0 !== e && "remove" : !1 !== e && "add";
                    return r && this[r](t), !0 === e || !1 === e ? e : !n
                }, l.toString = function() {
                    return this.join(" ")
                }, o.defineProperty) {
                var h = {
                    get: f,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    o.defineProperty(r, e, h)
                } catch (t) {
                    void 0 !== t.number && -2146823252 !== t.number || (h.enumerable = !1, o.defineProperty(r, e, h))
                }
            } else o[n].__defineGetter__ && r.__defineGetter__(e, f)
        }
    }(window.self), function() {
        "use strict";
        var t = document.createElement("_");
        if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
            var e = function(t) {
                var r = DOMTokenList.prototype[t];
                DOMTokenList.prototype[t] = function(t) {
                    var e, n = arguments.length;
                    for (e = 0; e < n; e++) t = arguments[e], r.call(this, t)
                }
            };
            e("add"), e("remove")
        }
        if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(t, e) {
                return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t)
            }
        }
        t = null
    }()),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e()
    }(this, function() {
        "use strict";

        function a(t) {
            return "function" == typeof t
        }
        var n = Array.isArray ? Array.isArray : function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            r = 0,
            e = void 0,
            o = void 0,
            u = function(t, e) {
                h[r] = t, h[r + 1] = e, 2 === (r += 2) && (o ? o(p) : w())
            };
        var t = "undefined" != typeof window ? window : void 0,
            i = t || {},
            s = i.MutationObserver || i.WebKitMutationObserver,
            c = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

        function f() {
            var t = setTimeout;
            return function() {
                return t(p, 1)
            }
        }
        var h = new Array(1e3);

        function p() {
            for (var t = 0; t < r; t += 2) {
                (0, h[t])(h[t + 1]), h[t] = void 0, h[t + 1] = void 0
            }
            r = 0
        }
        var d, v, m, y, w = void 0;

        function _(t, e) {
            var n = this,
                r = new this.constructor(E);
            void 0 === r[b] && R(r);
            var o = n._state;
            if (o) {
                var i = arguments[o - 1];
                u(function() {
                    return k(o, r, i, n._result)
                })
            } else F(n, r, t, e);
            return r
        }

        function g(t) {
            if (t && "object" == typeof t && t.constructor === this) return t;
            var e = new this(E);
            return O(e, t), e
        }
        w = c ? function() {
            return process.nextTick(p)
        } : s ? (v = 0, m = new s(p), y = document.createTextNode(""), m.observe(y, {
            characterData: !0
        }), function() {
            y.data = v = ++v % 2
        }) : l ? ((d = new MessageChannel).port1.onmessage = p, function() {
            return d.port2.postMessage(0)
        }) : void 0 === t && "function" == typeof require ? function() {
            try {
                var t = Function("return this")().require("vertx");
                return void 0 !== (e = t.runOnLoop || t.runOnContext) ? function() {
                    e(p)
                } : f()
            } catch (t) {
                return f()
            }
        }() : f();
        var b = Math.random().toString(36).substring(2);

        function E() {}
        var A = void 0,
            S = 1,
            M = 2,
            j = {
                error: null
            };

        function T(t) {
            try {
                return t.then
            } catch (t) {
                return j.error = t, j
            }
        }

        function C(t, e, n) {
            var r, o, i, s;
            e.constructor === t.constructor && n === _ && e.constructor.resolve === g ? (i = t, (s = e)._state === S ? L(i, s._result) : s._state === M ? N(i, s._result) : F(s, void 0, function(t) {
                return O(i, t)
            }, function(t) {
                return N(i, t)
            })) : n === j ? (N(t, j.error), j.error = null) : void 0 === n ? L(t, e) : a(n) ? (r = e, o = n, u(function(e) {
                var n = !1,
                    t = function(t, e, n, r) {
                        try {
                            t.call(e, n, r)
                        } catch (t) {
                            return t
                        }
                    }(o, r, function(t) {
                        n || (n = !0, r !== t ? O(e, t) : L(e, t))
                    }, function(t) {
                        n || (n = !0, N(e, t))
                    }, e._label);
                !n && t && (n = !0, N(e, t))
            }, t)) : L(t, e)
        }

        function O(t, e) {
            var n, r;
            t === e ? N(t, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = e), null === n || "object" !== r && "function" !== r ? L(t, e) : C(t, e, T(e)))
        }

        function x(t) {
            t._onerror && t._onerror(t._result), P(t)
        }

        function L(t, e) {
            t._state === A && (t._result = e, t._state = S, 0 !== t._subscribers.length && u(P, t))
        }

        function N(t, e) {
            t._state === A && (t._state = M, t._result = e, u(x, t))
        }

        function F(t, e, n, r) {
            var o = t._subscribers,
                i = o.length;
            t._onerror = null, o[i] = e, o[i + S] = n, o[i + M] = r, 0 === i && t._state && u(P, t)
        }

        function P(t) {
            var e = t._subscribers,
                n = t._state;
            if (0 !== e.length) {
                for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? k(n, r, o, i) : o(i);
                t._subscribers.length = 0
            }
        }

        function k(t, e, n, r) {
            var o = a(n),
                i = void 0,
                s = void 0,
                u = void 0,
                c = void 0;
            if (o) {
                if ((i = function(t, e) {
                        try {
                            return t(e)
                        } catch (t) {
                            return j.error = t, j
                        }
                    }(n, r)) === j ? (c = !0, s = i.error, i.error = null) : u = !0, e === i) return void N(e, new TypeError("A promises callback cannot return that same promise."))
            } else i = r, u = !0;
            e._state !== A || (o && u ? O(e, i) : c ? N(e, s) : t === S ? L(e, i) : t === M && N(e, i))
        }
        var D = 0;

        function R(t) {
            t[b] = D++, t._state = void 0, t._result = void 0, t._subscribers = []
        }
        var q = function() {
            function t(t, e) {
                this._instanceConstructor = t, this.promise = new t(E), this.promise[b] || R(this.promise), n(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? L(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && L(this.promise, this._result))) : N(this.promise, new Error("Array Methods must be provided an Array"))
            }
            return t.prototype._enumerate = function(t) {
                for (var e = 0; this._state === A && e < t.length; e++) this._eachEntry(t[e], e)
            }, t.prototype._eachEntry = function(e, t) {
                var n = this._instanceConstructor,
                    r = n.resolve;
                if (r === g) {
                    var o = T(e);
                    if (o === _ && e._state !== A) this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                    else if (n === Y) {
                        var i = new n(E);
                        C(i, e, o), this._willSettleAt(i, t)
                    } else this._willSettleAt(new n(function(t) {
                        return t(e)
                    }), t)
                } else this._willSettleAt(r(e), t)
            }, t.prototype._settledAt = function(t, e, n) {
                var r = this.promise;
                r._state === A && (this._remaining--, t === M ? N(r, n) : this._result[e] = n), 0 === this._remaining && L(r, this._result)
            }, t.prototype._willSettleAt = function(t, e) {
                var n = this;
                F(t, void 0, function(t) {
                    return n._settledAt(S, e, t)
                }, function(t) {
                    return n._settledAt(M, e, t)
                })
            }, t
        }();
        var Y = function() {
            function e(t) {
                this[b] = D++, this._result = this._state = void 0, this._subscribers = [], E !== t && ("function" != typeof t && function() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }(), this instanceof e ? function(e, t) {
                    try {
                        t(function(t) {
                            O(e, t)
                        }, function(t) {
                            N(e, t)
                        })
                    } catch (t) {
                        N(e, t)
                    }
                }(this, t) : function() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }())
            }
            return e.prototype.catch = function(t) {
                return this.then(null, t)
            }, e.prototype.finally = function(e) {
                var n = this.constructor;
                return a(e) ? this.then(function(t) {
                    return n.resolve(e()).then(function() {
                        return t
                    })
                }, function(t) {
                    return n.resolve(e()).then(function() {
                        throw t
                    })
                }) : this.then(e, e)
            }, e
        }();
        return Y.prototype.then = _, Y.all = function(t) {
            return new q(this, t).promise
        }, Y.race = function(o) {
            var i = this;
            return n(o) ? new i(function(t, e) {
                for (var n = o.length, r = 0; r < n; r++) i.resolve(o[r]).then(t, e)
            }) : new i(function(t, e) {
                return e(new TypeError("You must pass an array to race."))
            })
        }, Y.resolve = g, Y.reject = function(t) {
            var e = new this(E);
            return N(e, t), e
        }, Y._setScheduler = function(t) {
            o = t
        }, Y._setAsap = function(t) {
            u = t
        }, Y._asap = u, Y.polyfill = function() {
            var t = void 0;
            if ("undefined" != typeof global) t = global;
            else if ("undefined" != typeof self) t = self;
            else try {
                t = Function("return this")()
            } catch (t) {
                throw new Error("polyfill failed because global object is unavailable in this environment")
            }
            var e = t.Promise;
            if (e) {
                var n = null;
                try {
                    n = Object.prototype.toString.call(e.resolve())
                } catch (t) {}
                if ("[object Promise]" === n && !e.cast) return
            }
            t.Promise = Y
        }, (Y.Promise = Y).polyfill(), Y
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var e = Object(this),
                n = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var r = arguments[1], o = 0; o < n;) {
                var i = e[o];
                if (t.call(r, i, o, e)) return i;
                o++
            }
        },
        configurable: !0,
        writable: !0
    }), Array.from || (Array.from = function() {
        var e = Object.prototype.toString,
            c = function(t) {
                return "function" == typeof t || "[object Function]" === e.call(t)
            },
            r = Math.pow(2, 53) - 1,
            a = function(t) {
                var e, n = (e = Number(t), isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (0 < e ? 1 : -1) * Math.floor(Math.abs(e)) : e);
                return Math.min(Math.max(n, 0), r)
            };
        return function(t) {
            var e = Object(t);
            if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var n, r = 1 < arguments.length ? arguments[1] : void 0;
            if (void 0 !== r) {
                if (!c(r)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                2 < arguments.length && (n = arguments[2])
            }
            for (var o, i = a(e.length), s = c(this) ? Object(new this(i)) : new Array(i), u = 0; u < i;) o = e[u], s[u] = r ? void 0 === n ? r(o, u) : r.call(n, o, u) : o, u += 1;
            return s.length = i, s
        }
    }()), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
        for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; 0 <= --n && e.item(n) !== this;);
        return -1 < n
    }), String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }),
    function() {
        if ("function" == typeof window.CustomEvent) return;

        function t(t, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
        }
        t.prototype = window.Event.prototype, window.CustomEvent = t
    }(), window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var e = window.styleMedia || window.media;
        if (!e) {
            var n, r = document.createElement("style"),
                t = document.getElementsByTagName("script")[0];
            r.type = "text/css", r.id = "matchmediajs-test", t ? t.parentNode.insertBefore(r, t) : document.head.appendChild(r), n = "getComputedStyle" in window && window.getComputedStyle(r, null) || r.currentStyle, e = {
                matchMedium: function(t) {
                    var e = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return r.styleSheet ? r.styleSheet.cssText = e : r.textContent = e, "1px" === n.width
                }
            }
        }
        return function(t) {
            return {
                matches: e.matchMedium(t || "all"),
                media: t || "all"
            }
        }
    }());