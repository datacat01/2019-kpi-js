! function() {
    function t(n, e, r) {
        function o(u, c) {
            if (!e[u]) {
                if (!n[u]) {
                    var s = "function" == typeof require && require;
                    if (!c && s) return s(u, !0);
                    if (i) return i(u, !0);
                    var a = new Error("Cannot find module '" + u + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var l = e[u] = {
                    exports: {}
                };
                n[u][0].call(l.exports, function(t) {
                    return o(n[u][1][t] || t)
                }, l, l.exports, t, n, e, r)
            }
            return e[u].exports
        }
        for (var i = "function" == typeof require && require, u = 0; u < r.length; u++) o(r[u]);
        return o
    }
    return t
}()({
    1: [function(t, n, e) {
        (function(r, o) {
            ! function(t, r) {
                "object" == typeof e && void 0 !== n ? n.exports = r() : "function" == typeof define && define.amd ? define(r) : t.ES6Promise = r()
            }(this, function() {
                "use strict";

                function n(t) {
                    var n = typeof t;
                    return null !== t && ("object" === n || "function" === n)
                }

                function e(t) {
                    return "function" == typeof t
                }

                function i(t) {
                    B = t
                }

                function u(t) {
                    Y = t
                }

                function c() {
                    return void 0 !== q ? function() {
                        q(a)
                    } : s()
                }

                function s() {
                    var t = setTimeout;
                    return function() {
                        return t(a, 1)
                    }
                }

                function a() {
                    for (var t = 0; t < F; t += 2) {
                        (0, z[t])(z[t + 1]), z[t] = void 0, z[t + 1] = void 0
                    }
                    F = 0
                }

                function l(t, n) {
                    var e = this,
                        r = new this.constructor(h);
                    void 0 === r[J] && P(r);
                    var o = e._state;
                    if (o) {
                        var i = arguments[o - 1];
                        Y(function() {
                            return x(o, r, i, e._result)
                        })
                    } else I(e, r, t, n);
                    return r
                }

                function f(t) {
                    var n = this;
                    if (t && "object" == typeof t && t.constructor === n) return t;
                    var e = new n(h);
                    return _(e, t), e
                }

                function h() {}

                function d() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function v() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function p(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return nt.error = t, nt
                    }
                }

                function y(t, n, e, r) {
                    try {
                        t.call(n, e, r)
                    } catch (t) {
                        return t
                    }
                }

                function m(t, n, e) {
                    Y(function(t) {
                        var r = !1,
                            o = y(e, n, function(e) {
                                r || (r = !0, n !== e ? _(t, e) : A(t, e))
                            }, function(n) {
                                r || (r = !0, T(t, n))
                            }, "Settle: " + (t._label || " unknown promise"));
                        !r && o && (r = !0, T(t, o))
                    }, t)
                }

                function g(t, n) {
                    n._state === $ ? A(t, n._result) : n._state === tt ? T(t, n._result) : I(n, void 0, function(n) {
                        return _(t, n)
                    }, function(n) {
                        return T(t, n)
                    })
                }

                function w(t, n, r) {
                    n.constructor === t.constructor && r === l && n.constructor.resolve === f ? g(t, n) : r === nt ? (T(t, nt.error), nt.error = null) : void 0 === r ? A(t, n) : e(r) ? m(t, n, r) : A(t, n)
                }

                function _(t, e) {
                    t === e ? T(t, d()) : n(e) ? w(t, e, p(e)) : A(t, e)
                }

                function b(t) {
                    t._onerror && t._onerror(t._result), O(t)
                }

                function A(t, n) {
                    t._state === Z && (t._result = n, t._state = $, 0 !== t._subscribers.length && Y(O, t))
                }

                function T(t, n) {
                    t._state === Z && (t._state = tt, t._result = n, Y(b, t))
                }

                function I(t, n, e, r) {
                    var o = t._subscribers,
                        i = o.length;
                    t._onerror = null, o[i] = n, o[i + $] = e, o[i + tt] = r, 0 === i && t._state && Y(O, t)
                }

                function O(t) {
                    var n = t._subscribers,
                        e = t._state;
                    if (0 !== n.length) {
                        for (var r = void 0, o = void 0, i = t._result, u = 0; u < n.length; u += 3) r = n[u], o = n[u + e], r ? x(e, r, o, i) : o(i);
                        t._subscribers.length = 0
                    }
                }

                function L(t, n) {
                    try {
                        return t(n)
                    } catch (t) {
                        return nt.error = t, nt
                    }
                }

                function x(t, n, r, o) {
                    var i = e(r),
                        u = void 0,
                        c = void 0,
                        s = void 0,
                        a = void 0;
                    if (i) {
                        if (u = L(r, o), u === nt ? (a = !0, c = u.error, u.error = null) : s = !0, n === u) return void T(n, v())
                    } else u = o, s = !0;
                    n._state !== Z || (i && s ? _(n, u) : a ? T(n, c) : t === $ ? A(n, u) : t === tt && T(n, u))
                }

                function C(t, n) {
                    try {
                        n(function(n) {
                            _(t, n)
                        }, function(n) {
                            T(t, n)
                        })
                    } catch (n) {
                        T(t, n)
                    }
                }

                function D() {
                    return et++
                }

                function P(t) {
                    t[J] = et++, t._state = void 0, t._result = void 0, t._subscribers = []
                }

                function E() {
                    return new Error("Array Methods must be provided an Array")
                }

                function N(t) {
                    return new rt(this, t).promise
                }

                function j(t) {
                    var n = this;
                    return new n(K(t) ? function(e, r) {
                        for (var o = t.length, i = 0; i < o; i++) n.resolve(t[i]).then(e, r)
                    } : function(t, n) {
                        return n(new TypeError("You must pass an array to race."))
                    })
                }

                function S(t) {
                    var n = this,
                        e = new n(h);
                    return T(e, t), e
                }

                function U() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function R() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function k() {
                    var t = void 0;
                    if (void 0 !== o) t = o;
                    else if ("undefined" != typeof self) t = self;
                    else try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var n = t.Promise;
                    if (n) {
                        var e = null;
                        try {
                            e = Object.prototype.toString.call(n.resolve())
                        } catch (t) {}
                        if ("[object Promise]" === e && !n.cast) return
                    }
                    t.Promise = ot
                }
                var M = void 0;
                M = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var K = M,
                    F = 0,
                    q = void 0,
                    B = void 0,
                    Y = function(t, n) {
                        z[F] = t, z[F + 1] = n, 2 === (F += 2) && (B ? B(a) : G())
                    },
                    V = "undefined" != typeof window ? window : void 0,
                    H = V || {},
                    Q = H.MutationObserver || H.WebKitMutationObserver,
                    W = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
                    X = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    z = new Array(1e3),
                    G = void 0;
                G = W ? function() {
                    return function() {
                        return r.nextTick(a)
                    }
                }() : Q ? function() {
                    var t = 0,
                        n = new Q(a),
                        e = document.createTextNode("");
                    return n.observe(e, {
                            characterData: !0
                        }),
                        function() {
                            e.data = t = ++t % 2
                        }
                }() : X ? function() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = a,
                        function() {
                            return t.port2.postMessage(0)
                        }
                }() : void 0 === V && "function" == typeof t ? function() {
                    try {
                        var t = Function("return this")().require("vertx");
                        return q = t.runOnLoop || t.runOnContext, c()
                    } catch (t) {
                        return s()
                    }
                }() : s();
                var J = Math.random().toString(36).substring(2),
                    Z = void 0,
                    $ = 1,
                    tt = 2,
                    nt = {
                        error: null
                    },
                    et = 0,
                    rt = function() {
                        function t(t, n) {
                            this._instanceConstructor = t, this.promise = new t(h), this.promise[J] || P(this.promise), K(n) ? (this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n), 0 === this._remaining && A(this.promise, this._result))) : T(this.promise, E())
                        }
                        return t.prototype._enumerate = function(t) {
                            for (var n = 0; this._state === Z && n < t.length; n++) this._eachEntry(t[n], n)
                        }, t.prototype._eachEntry = function(t, n) {
                            var e = this._instanceConstructor,
                                r = e.resolve;
                            if (r === f) {
                                var o = p(t);
                                if (o === l && t._state !== Z) this._settledAt(t._state, n, t._result);
                                else if ("function" != typeof o) this._remaining--, this._result[n] = t;
                                else if (e === ot) {
                                    var i = new e(h);
                                    w(i, t, o), this._willSettleAt(i, n)
                                } else this._willSettleAt(new e(function(n) {
                                    return n(t)
                                }), n)
                            } else this._willSettleAt(r(t), n)
                        }, t.prototype._settledAt = function(t, n, e) {
                            var r = this.promise;
                            r._state === Z && (this._remaining--, t === tt ? T(r, e) : this._result[n] = e), 0 === this._remaining && A(r, this._result)
                        }, t.prototype._willSettleAt = function(t, n) {
                            var e = this;
                            I(t, void 0, function(t) {
                                return e._settledAt($, n, t)
                            }, function(t) {
                                return e._settledAt(tt, n, t)
                            })
                        }, t
                    }(),
                    ot = function() {
                        function t(n) {
                            this[J] = D(), this._result = this._state = void 0, this._subscribers = [], h !== n && ("function" != typeof n && U(), this instanceof t ? C(this, n) : R())
                        }
                        return t.prototype.catch = function(t) {
                            return this.then(null, t)
                        }, t.prototype.finally = function(t) {
                            var n = this,
                                e = n.constructor;
                            return n.then(function(n) {
                                return e.resolve(t()).then(function() {
                                    return n
                                })
                            }, function(n) {
                                return e.resolve(t()).then(function() {
                                    throw n
                                })
                            })
                        }, t
                    }();
                return ot.prototype.then = l, ot.all = N, ot.race = j, ot.resolve = f, ot.reject = S, ot._setScheduler = i, ot._setAsap = u, ot._asap = Y, ot.polyfill = k, ot.Promise = ot, ot
            })
        }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 2
    }],
    2: [function(t, n, e) {
        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function o() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(t) {
            if (f === setTimeout) return setTimeout(t, 0);
            if ((f === r || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0);
            try {
                return f(t, 0)
            } catch (n) {
                try {
                    return f.call(null, t, 0)
                } catch (n) {
                    return f.call(this, t, 0)
                }
            }
        }

        function u(t) {
            if (h === clearTimeout) return clearTimeout(t);
            if ((h === o || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
            try {
                return h(t)
            } catch (n) {
                try {
                    return h.call(null, t)
                } catch (n) {
                    return h.call(this, t)
                }
            }
        }

        function c() {
            y && v && (y = !1, v.length ? p = v.concat(p) : m = -1, p.length && s())
        }

        function s() {
            if (!y) {
                var t = i(c);
                y = !0;
                for (var n = p.length; n;) {
                    for (v = p, p = []; ++m < n;) v && v[m].run();
                    m = -1, n = p.length
                }
                v = null, y = !1, u(t)
            }
        }

        function a(t, n) {
            this.fun = t, this.array = n
        }

        function l() {}
        var f, h, d = n.exports = {};
        ! function() {
            try {
                f = "function" == typeof setTimeout ? setTimeout : r
            } catch (t) {
                f = r
            }
            try {
                h = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (t) {
                h = o
            }
        }();
        var v, p = [],
            y = !1,
            m = -1;
        d.nextTick = function(t) {
            var n = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
            p.push(new a(t, n)), 1 !== p.length || y || i(s)
        }, a.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(t) {
            return []
        }, d.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function() {
            return 0
        }
    }, {}],
    3: [function(t, n, e) {
        "use strict";
        var r = window.ABC || {},
            o = "MyLoginEmbedded";
        t("es6-promise").polyfill(), r[o] = function() {
            function t() {
                return new Promise(function(t, n) {
                    a(function() {
                        return void 0 !== r.appId
                    }, 2e3, 150).then(function() {
                        v.CID = r.appId, t.call(null)
                    }).catch(function() {
                        v.CID = "SnowplowTimedOutAfter 2000", t.call(null)
                    })
                })
            }

            function n(n) {
                return new Promise(function(r, o) {
                    n = n || {}, n.APIKeyOverride && (n.APIKey = n.APIKeyOverride, delete n.APIKeyOverride), n.CIDOverride && (n.CID = n.CIDOverride, delete n.CIDOverride), n.NextURLOverride && (n.NextURL = n.NextURLOverride, delete n.NextURLOverride), h = s(v, n), e().then(c).then(function() {
                        l(), t().then(function() {
                            l(), r.call(null)
                        })
                    }).catch(function(t) {
                        console.error(t), o.call(null, t)
                    })
                })
            }

            function e() {
                return new Promise(function(t, n) {
                    var e = document.createElement("script");
                    e.type = "text/javascript", e.async = !0, e.src = "https://cdns.au1.gigya.com/js/gigya.js?apikey=" + h.APIKey, e.onload = function() {
                        t.call(null)
                    }, e.onerror = function(t) {
                        n.call(null, t)
                    }, document.head.appendChild(e)
                })
            }

            function i() {
                return {
                    login: u("login"),
                    logout: u("logout"),
                    settings: u("settings")
                }
            }

            function u(t) {
                var n = "[window.location]" == h.nextURL ? window.location : h.nextURL;
                return d + "index.html?screen=" + t + "&next=" + encodeURIComponent(n) + (h.CID ? "&cid=" + h.CID : "")
            }

            function c() {
                return new Promise(function(t, n) {
                    "undefined" != typeof gigya ? gigya.accounts.getAccountInfo({
                        callback: function(n) {
                            var e = 0 === n.errorCode;
                            f = {
                                isLoggedIn: e,
                                URLs: i()
                            }, e && (f.UID = n.UID, f.user = n.data), t.call(null, f)
                        }
                    }) : n.call(null, "No gigya. Have you initialised " + o + "?")
                })
            }

            function s() {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = 1; n < arguments.length; n++)
                    if (arguments[n])
                        for (var e in arguments[n]) arguments[n].hasOwnProperty(e) && (t[e] = arguments[n][e]);
                return t
            }

            function a(t, n, e) {
                var r = Number(new Date) + (n || 2e3);
                e = e || 100;
                var o = function n(o, i) {
                    var u = t();
                    u ? o(u) : Number(new Date) < r ? setTimeout(n, e, o, i) : i(new Error("timed out for " + t + ": " + arguments))
                };
                return new Promise(o)
            }

            function l() {
                var t = {};
                f.isLoggedIn && (t.user = {
                    username: f.user.displayName
                });
                var n = i();
                t.uri = {
                    signIn: n.login,
                    signOut: n.logout,
                    manageAccount: n.settings
                }, r.ID && r.ID.setup && r.Nav && r.Nav.initAccount && (r.ID.setup(t), r.Nav.initAccount())
            }
            var f = {},
                h = {},
                d = "https://mylogin.abc.net.au/",
                v = {
                    APIKey: "3_fA1lYde7bHFw4kAQ_VLT37l-OacxV6xOkYAn0KOPFjrXyrlrovPpV1toELQLABDp",
                    nextURL: "[window.location]",
                    patchLegacyABCIDNav: !0
                };
            return {
                init: n,
                patchLegacyABCIDNav: l,
                getScreenURL: u,
                getState: c
            }
        }(), window.ABC = r
    }, {
        "es6-promise": 1
    }]
}, {}, [3]);
//# sourceMappingURL=abc.mylogin.embedded.js.map