! function t(e, n) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = n();
    else if ("function" == typeof define && define.amd) define([], n);
    else {
        var r = n();
        for (var o in r)("object" == typeof exports ? exports : e)[o] = r[o]
    }
}(this, function() {
    return function(n) {
        var r = {};

        function o(t) {
            if (r[t]) return r[t].exports;
            var e = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
        }
        return o.m = n, o.c = r, o.d = function(t, e, n) {
            o.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, o.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, o.t = function(e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) o.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, o.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, o.p = "", o(o.s = 861)
    }({
        1: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(5),
                p = n.n(r),
                o = function() {
                    if ("string" == typeof self.origin && ~self.origin.indexOf("://")) return self.origin;
                    var t = document.location,
                        e = t.protocol,
                        n = t.host,
                        r;
                    return "".concat(e, "//").concat(n)
                },
                i = n(2);
            n.d(e, "send", function() {
                return f
            }), n.d(e, "on", function() {
                return d
            }), n.d(e, "off", function() {
                return h
            }), n.d(e, "once", function() {
                return m
            }), n.d(e, "onRequest", function() {
                return y
            }), n.d(e, "request", function() {
                return g
            });
            var a = "sqs",
                s = {};

            function u(e) {
                return Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function(t) {
                    !e.hasOwnProperty(t) || null === e[t] || "object" !== p()(e[t]) && "function" != typeof e[t] || Object.isFrozen(e[t]) || u(e[t])
                }), e
            }

            function c(t) {
                return t.origin === o() && ("object" === p()(t.data) && (t.data.namespace === a && "string" == typeof t.data.key))
            }

            function l(t, e, n) {
                var r;
                s[t] && s[t].filter(function(t) {
                    return !n || t.signature === n
                }).forEach(function(t) {
                    t.callback.apply(null, [e])
                })
            }

            function f(t, e, n) {
                try {
                    var r = {
                        namespace: a,
                        key: t,
                        payload: e,
                        signature: n
                    };
                    window.postMessage(r, o())
                } catch (t) {
                    console.error(t)
                }
            }

            function d(t, e, n) {
                void 0 === s[t] && (s[t] = []), s[t].push({
                    callback: e,
                    signature: n
                })
            }

            function h(t, e) {
                s[t] = s[t].filter(function(t) {
                    return t.callback !== e
                })
            }

            function m(r, e) {
                return new Promise(function(n) {
                    var t;
                    d(r, function t(e) {
                        h(r, t), n(e)
                    }, e)
                })
            }

            function y(e, t, n) {
                d("".concat(e, "-request"), function() {
                    t().then(function(t) {
                        f("".concat(e, "-response"), t, n)
                    })
                }, n)
            }

            function g(t, e) {
                var n = m("".concat(t, "-response"), e).then(function(t) {
                    return t
                });
                return f("".concat(t, "-request"), e), n
            }

            function v(t, e) {
                var r = [],
                    n = function t(e) {
                        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        r.push({
                            object: e,
                            path: n
                        })
                    };
                for (n(t); 0 < r.length;)
                    for (var o = r.pop(), i = o.object, a = o.path, s, u = Object.keys(i), c = 0; c < u.length; c++) {
                        var l = u[c],
                            f = i[l],
                            d = "" === a ? l : "".concat(a, ".").concat(l);
                        "object" === p()(f) ? n(f, d) : i[l] = e(f, d)
                    }
                return t
            }

            function b(t) {
                var e;
                return u(v(t, function(t, e) {
                    return e
                }))
            }
            b(i.a), window.addEventListener("message", function(t) {
                if (c(t)) {
                    var e = t.data,
                        n, r, o;
                    l(e.key, e.payload, e.signature)
                }
            })
        },
        117: function(t, e) {
            function n(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            t.exports = n
        },
        146: function(t, e, n) {
            "use strict";
            var r = n(210),
                o, i = new(n.n(r).a)({
                    customSchemaName: "frontsite",
                    logging: window._sqspEventsLogging,
                    url: window._sqspEventsUrl
                }, {
                    client_version: window.__templateVersion || null,
                    context_website_identifier: "www",
                    event_owner_team: "frontsite",
                    event_source: "web",
                    product_area: "frontsite",
                    product_design_identifier: window.__collectionName || null,
                    product_page: "www"
                });
            e.a = i
        },
        2: function(t, e, n) {
            "use strict";
            var r = {
                    ready: !0,
                    currency: {
                        active: !0,
                        changed: !0,
                        showOverlay: !0
                    },
                    language: {
                        active: !0,
                        changed: !0,
                        showOverlay: !0
                    },
                    nationality: {
                        isVATApplicable: !0,
                        isInEU: !0
                    }
                },
                o = {
                    linkClick: !0,
                    loadImages: !0,
                    resize: !0,
                    componentInitialized: !0
                },
                i = {
                    fetchLogoWall: !0,
                    getTemplate: !0,
                    getCustomerExample: !0
                },
                a, s, u, c, l = {
                    heroHomeNov18: {
                        startAutoplay: !0,
                        stopAutoplay: !0
                    },
                    featuredCustomers: {
                        startAutoplay: !0,
                        stopAutoplay: !0
                    },
                    featureTextGallery: {
                        startAutoplay: !0,
                        stopAutoplay: !0
                    },
                    header: {
                        setDarkBackground: !0,
                        setLightBackground: !0,
                        disableSticky: !0,
                        enableSticky: !0
                    }
                },
                f = e.a = {
                    i18n: r,
                    page: o,
                    taxonomy: i,
                    components: l
                }
        },
        210: function(yb, zb) {
            yb.exports = function(n) {
                var r = {};

                function o(t) {
                    if (r[t]) return r[t].exports;
                    var e = r[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
                }
                return o.m = n, o.c = r, o.d = function(t, e, n) {
                    o.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: n
                    })
                }, o.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, o.t = function(e, t) {
                    if (1 & t && (e = o(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if (o.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var r in e) o.d(n, r, function(t) {
                            return e[t]
                        }.bind(null, r));
                    return n
                }, o.n = function(e) {
                    var t = e && e.__esModule ? function t() {
                        return e.default
                    } : function t() {
                        return e
                    };
                    return o.d(t, "a", t), t
                }, o.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, o.p = "", o(o.s = 2)
            }([function(Ub, Vb) {
                var Wb;
                Wb = function() {
                    return this
                }();
                try {
                    Wb = Wb || Function("return this")() || eval("this")
                } catch (t) {
                    "object" == typeof window && (Wb = window)
                }
                Ub.exports = Wb
            }, function(t, e, n) {
                "use strict";

                function r(e) {
                    var n = this.constructor;
                    return this.then(function(t) {
                        return n.resolve(e()).then(function() {
                            return t
                        })
                    }, function(t) {
                        return n.resolve(e()).then(function() {
                            return n.reject(t)
                        })
                    })
                }
                e.a = r
            }, function(t, e, n) {
                "use strict";
                var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    _ = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    },
                    o = function() {
                        function r(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(t, e, n) {
                            return e && r(t.prototype, e), n && r(t, n), t
                        }
                    }(),
                    r, a = d(n(3)),
                    i, w = d(n(7)),
                    s, u = d(n(8)),
                    c, l = d(n(11)),
                    f, T = d(n(14));

                function d(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function p(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var h = function() {
                    function r() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        p(this, r), this.config = _({
                            customSchemaName: null,
                            logging: !1,
                            url: "https://events.squarespace.com/api/v1/events",
                            useBeacon: !0,
                            storageKey: "SS_ANALYTICS_ID"
                        }, t), "sendBeacon" in navigator || (this.config.useBeacon = !1), this.defaultPayload = e, this._assignAnalyticsId()
                    }
                    return o(r, [{
                        key: "spawnTracker",
                        value: function t(e) {
                            var n = _({}, this.defaultPayload, e);
                            return new r(this.config, n)
                        }
                    }, {
                        key: "track",
                        value: function t(e) {
                            if (this.config.url) {
                                var n = this._generatePayload(e);
                                return n ? this.config.useBeacon ? this._sendBeacon(n) : this._sendXhr(n) : a.default.reject()
                            }
                        }
                    }, {
                        key: "_log",
                        value: function t(e) {
                            this.config.logging && console.log(e)
                        }
                    }, {
                        key: "_warn",
                        value: function t(e) {
                            this.config.logging && console.warn(e)
                        }
                    }, {
                        key: "_assignAnalyticsId",
                        value: function t() {
                            if (!this._getAnalyticsId()) try {
                                localStorage.setItem(this.config.storageKey, (0, l.default)())
                            } catch (t) {
                                this._warn("Unable to store analyticsId in localStorage")
                            }
                        }
                    }, {
                        key: "_getAnalyticsId",
                        value: function t() {
                            try {
                                return localStorage.getItem(this.config.storageKey)
                            } catch (t) {
                                return this._warn("Unable to get analyticsId from localStorage"), null
                            }
                        }
                    }, {
                        key: "_sendBeacon",
                        value: function t(e) {
                            var n = {
                                    type: "application/x-www-form-urlencoded"
                                },
                                r = new Blob([u.default.stringify(e)], n);
                            return navigator.sendBeacon(this.config.url, r), a.default.resolve()
                        }
                    }, {
                        key: "_sendXhr",
                        value: function t(o) {
                            var i = this;
                            return new a.default(function(t, e) {
                                var n = new XMLHttpRequest,
                                    r = JSON.stringify(o);
                                n.open("POST", i.config.url, !0), n.setRequestHeader("Content-Type", "application/json"), n.send(r), n.addEventListener("readystatechange", function() {
                                    4 === n.readyState && (200 === n.status || 202 === n.status ? t() : (i._warn("Error tracking event: HTTP Status " + n.status), e()))
                                })
                            })
                        }
                    }, {
                        key: "_generatePayload",
                        value: function t(e) {
                            var n = _({}, this.defaultPayload, e),
                                r = new Date,
                                o = {
                                    analyticsId: this._getAnalyticsId(),
                                    commonData: {
                                        browser_window_height: window.innerHeight,
                                        browser_window_width: window.innerWidth,
                                        browser_language: navigator.language,
                                        page_host: window.location.hostname,
                                        page_path: window.location.pathname,
                                        page_query_params: window.location.search,
                                        page_referrer_url: document.referrer,
                                        resolved_locale: document.documentElement.lang || "en-US",
                                        timestamp_client: r.getTime(),
                                        user_marketing_id: w.default.get("SS_MID") || null
                                    },
                                    customData: {},
                                    customSchemaName: this.config.customSchemaName
                                };
                            if (!o.analyticsId) return null;
                            for (var i in n)
                                if (n.hasOwnProperty(i)) {
                                    var a = n[i];
                                    if (T.default.hasOwnProperty(i)) {
                                        var s = T.default[i];
                                        (void 0 === a ? "undefined" : b(a)) === s.type || s.nullable && null === a ? (o.commonData[i] = a, this._log("common field " + i + " set successfully")) : this._warn("common field " + i + " was not set or was the incorrect type")
                                    } else o.customData[i] = a, this._log("custom field " + i + " set successfully")
                                } if (this.config.logging)
                                for (var u in T.default) {
                                    var c;
                                    T.default.hasOwnProperty(u) && !T.default[u].nullable && !n[u] && this._warn("required common field " + u + " was not set or was the incorrect type")
                                }
                            var l = window.Static && window.Static.SQUARESPACE_CONTEXT;
                            if (l && l.website && (o.commonData.context_website_id = l.website.id), l && l.templateId && (o.commonData.context_template_website_id = l.templateId), this.config.logging) {
                                for (var f = {}, d = {}, p = Object.keys(o.commonData).sort(), h = Object.keys(o.customData).sort(), m = 0; m < p.length; m++) {
                                    var y = p[m];
                                    f[y] = o.commonData[y]
                                }
                                for (var g = 0; g < h.length; g++) {
                                    var v = h[g];
                                    d[v] = o.customData[v]
                                }
                                this._log("commonData:"), this._log(JSON.stringify(f, null, 2)), this._log("customData:"), this._log(JSON.stringify(d, null, 2))
                            }
                            return o.commonData = JSON.stringify(o.commonData), o.customData = JSON.stringify(o.customData), o
                        }
                    }]), r
                }();
                t.exports = h
            }, function(t, d, p) {
                "use strict";
                p.r(d),
                    function(e) {
                        var t = p(1),
                            n = setTimeout;

                        function r() {}

                        function o(t, e) {
                            return function() {
                                t.apply(e, arguments)
                            }
                        }

                        function i(t) {
                            if (!(this instanceof i)) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof t) throw new TypeError("not a function");
                            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this)
                        }

                        function a(n, r) {
                            for (; 3 === n._state;) n = n._value;
                            0 !== n._state ? (n._handled = !0, i._immediateFn(function() {
                                var t = 1 === n._state ? r.onFulfilled : r.onRejected;
                                if (null !== t) {
                                    var e;
                                    try {
                                        e = t(n._value)
                                    } catch (t) {
                                        return void u(r.promise, t)
                                    }
                                    s(r.promise, e)
                                } else(1 === n._state ? s : u)(r.promise, n._value)
                            })) : n._deferreds.push(r)
                        }

                        function s(e, t) {
                            try {
                                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                                if (t && ("object" == typeof t || "function" == typeof t)) {
                                    var n = t.then;
                                    if (t instanceof i) return e._state = 3, e._value = t, void c(e);
                                    if ("function" == typeof n) return void f(o(n, t), e)
                                }
                                e._state = 1, e._value = t, c(e)
                            } catch (t) {
                                u(e, t)
                            }
                        }

                        function u(t, e) {
                            t._state = 2, t._value = e, c(t)
                        }

                        function c(t) {
                            2 === t._state && 0 === t._deferreds.length && i._immediateFn(function() {
                                t._handled || i._unhandledRejectionFn(t._value)
                            });
                            for (var e = 0, n = t._deferreds.length; e < n; e++) a(t, t._deferreds[e]);
                            t._deferreds = null
                        }

                        function l(t, e, n) {
                            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
                        }

                        function f(t, e) {
                            var n = !1;
                            try {
                                t(function(t) {
                                    n || (n = !0, s(e, t))
                                }, function(t) {
                                    n || (n = !0, u(e, t))
                                })
                            } catch (t) {
                                if (n) return;
                                n = !0, u(e, t)
                            }
                        }
                        i.prototype.catch = function(t) {
                            return this.then(null, t)
                        }, i.prototype.then = function(t, e) {
                            var n = new this.constructor(r);
                            return a(this, new l(t, e, n)), n
                        }, i.prototype.finally = t.a, i.all = function(e) {
                            return new i(function(r, o) {
                                if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                                var i = Array.prototype.slice.call(e);
                                if (0 === i.length) return r([]);
                                var a = i.length;

                                function s(e, t) {
                                    try {
                                        if (t && ("object" == typeof t || "function" == typeof t)) {
                                            var n = t.then;
                                            if ("function" == typeof n) return void n.call(t, function(t) {
                                                s(e, t)
                                            }, o)
                                        }
                                        i[e] = t, 0 == --a && r(i)
                                    } catch (t) {
                                        o(t)
                                    }
                                }
                                for (var t = 0; t < i.length; t++) s(t, i[t])
                            })
                        }, i.resolve = function(e) {
                            return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
                                t(e)
                            })
                        }, i.reject = function(n) {
                            return new i(function(t, e) {
                                e(n)
                            })
                        }, i.race = function(o) {
                            return new i(function(t, e) {
                                for (var n = 0, r = o.length; n < r; n++) o[n].then(t, e)
                            })
                        }, i._immediateFn = "function" == typeof e && function(t) {
                            e(t)
                        } || function(t) {
                            n(t, 0)
                        }, i._unhandledRejectionFn = function t(e) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                        }, d.default = i
                    }.call(this, p(4).setImmediate)
            }, function(t, o, i) {
                (function(t) {
                    var e = void 0 !== t && t || "undefined" != typeof self && self || window,
                        n = Function.prototype.apply;

                    function r(t, e) {
                        this._id = t, this._clearFn = e
                    }
                    o.setTimeout = function() {
                        return new r(n.call(setTimeout, e, arguments), clearTimeout)
                    }, o.setInterval = function() {
                        return new r(n.call(setInterval, e, arguments), clearInterval)
                    }, o.clearTimeout = o.clearInterval = function(t) {
                        t && t.close()
                    }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
                        this._clearFn.call(e, this._id)
                    }, o.enroll = function(t, e) {
                        clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                    }, o.unenroll = function(t) {
                        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                    }, o._unrefActive = o.active = function(e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        0 <= t && (e._idleTimeoutId = setTimeout(function t() {
                            e._onTimeout && e._onTimeout()
                        }, t))
                    }, i(5), o.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, o.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
                }).call(this, i(0))
            }, function(t, e, n) {
                (function(t, v) {
                    ! function(n, r) {
                        "use strict";
                        if (!n.setImmediate) {
                            var o = 1,
                                i = {},
                                a = !1,
                                s = n.document,
                                u, t = Object.getPrototypeOf && Object.getPrototypeOf(n);
                            t = t && t.setTimeout ? t : n, "[object process]" === {}.toString.call(n.process) ? d() : p() ? h() : n.MessageChannel ? m() : s && "onreadystatechange" in s.createElement("script") ? y() : g(), t.setImmediate = e, t.clearImmediate = c
                        }

                        function e(t) {
                            "function" != typeof t && (t = new Function("" + t));
                            for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                            var r = {
                                callback: t,
                                args: e
                            };
                            return i[o] = r, u(o), o++
                        }

                        function c(t) {
                            delete i[t]
                        }

                        function l(t) {
                            var e = t.callback,
                                n = t.args;
                            switch (n.length) {
                                case 0:
                                    e();
                                    break;
                                case 1:
                                    e(n[0]);
                                    break;
                                case 2:
                                    e(n[0], n[1]);
                                    break;
                                case 3:
                                    e(n[0], n[1], n[2]);
                                    break;
                                default:
                                    e.apply(r, n)
                            }
                        }

                        function f(t) {
                            if (a) setTimeout(f, 0, t);
                            else {
                                var e = i[t];
                                if (e) {
                                    a = !0;
                                    try {
                                        l(e)
                                    } finally {
                                        c(t), a = !1
                                    }
                                }
                            }
                        }

                        function d() {
                            u = function(t) {
                                v.nextTick(function() {
                                    f(t)
                                })
                            }
                        }

                        function p() {
                            if (n.postMessage && !n.importScripts) {
                                var t = !0,
                                    e = n.onmessage;
                                return n.onmessage = function() {
                                    t = !1
                                }, n.postMessage("", "*"), n.onmessage = e, t
                            }
                        }

                        function h() {
                            var e = "setImmediate$" + Math.random() + "$",
                                t = function(t) {
                                    t.source === n && "string" == typeof t.data && 0 === t.data.indexOf(e) && f(+t.data.slice(e.length))
                                };
                            n.addEventListener ? n.addEventListener("message", t, !1) : n.attachEvent("onmessage", t), u = function(t) {
                                n.postMessage(e + t, "*")
                            }
                        }

                        function m() {
                            var e = new MessageChannel;
                            e.port1.onmessage = function(t) {
                                var e;
                                f(t.data)
                            }, u = function(t) {
                                e.port2.postMessage(t)
                            }
                        }

                        function y() {
                            var n = s.documentElement;
                            u = function(t) {
                                var e = s.createElement("script");
                                e.onreadystatechange = function() {
                                    f(t), e.onreadystatechange = null, n.removeChild(e), e = null
                                }, n.appendChild(e)
                            }
                        }

                        function g() {
                            u = function(t) {
                                setTimeout(f, 0, t)
                            }
                        }
                    }("undefined" == typeof self ? void 0 === t ? this : t : self)
                }).call(this, n(0), n(6))
            }, function(t, e) {
                var n = t.exports = {},
                    r, o;

                function i() {
                    throw new Error("setTimeout has not been defined")
                }

                function a() {
                    throw new Error("clearTimeout has not been defined")
                }

                function s(e) {
                    if (r === setTimeout) return setTimeout(e, 0);
                    if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                    try {
                        return r(e, 0)
                    } catch (t) {
                        try {
                            return r.call(null, e, 0)
                        } catch (t) {
                            return r.call(this, e, 0)
                        }
                    }
                }

                function u(e) {
                    if (o === clearTimeout) return clearTimeout(e);
                    if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                    try {
                        return o(e)
                    } catch (t) {
                        try {
                            return o.call(null, e)
                        } catch (t) {
                            return o.call(this, e)
                        }
                    }
                }! function() {
                    try {
                        r = "function" == typeof setTimeout ? setTimeout : i
                    } catch (t) {
                        r = i
                    }
                    try {
                        o = "function" == typeof clearTimeout ? clearTimeout : a
                    } catch (t) {
                        o = a
                    }
                }();
                var c = [],
                    l = !1,
                    f, d = -1;

                function p() {
                    l && f && (l = !1, f.length ? c = f.concat(c) : d = -1, c.length && h())
                }

                function h() {
                    if (!l) {
                        var t = s(p);
                        l = !0;
                        for (var e = c.length; e;) {
                            for (f = c, c = []; ++d < e;) f && f[d].run();
                            d = -1, e = c.length
                        }
                        f = null, l = !1, u(t)
                    }
                }

                function m(t, e) {
                    this.fun = t, this.array = e
                }

                function y() {}
                n.nextTick = function(t) {
                    var e = new Array(arguments.length - 1);
                    if (1 < arguments.length)
                        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    c.push(new m(t, e)), 1 !== c.length || l || s(h)
                }, m.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = y, n.addListener = y, n.once = y, n.off = y, n.removeListener = y, n.removeAllListeners = y, n.emit = y, n.prependListener = y, n.prependOnceListener = y, n.listeners = function(t) {
                    return []
                }, n.binding = function(t) {
                    throw new Error("process.binding is not supported")
                }, n.cwd = function() {
                    return "/"
                }, n.chdir = function(t) {
                    throw new Error("process.chdir is not supported")
                }, n.umask = function() {
                    return 0
                }
            }, function(t, e) {
                var s = /^([^=]+)=([^;]*)$/,
                    e = t.exports = function(i, t) {
                        i || (i = {}), "string" == typeof i && (i = {
                            cookie: i
                        }), void 0 === i.cookie && (i.cookie = ""), !1 !== t && (t = !0);
                        var e = function(t) {
                                return t
                            },
                            o = t ? escape : e,
                            a = t ? unescape : e,
                            n = {
                                get: function(t) {
                                    for (var e = i.cookie.split(/;\s*/), n = 0; n < e.length; n++) {
                                        var r = (e[n] || "").match(s) || [],
                                            o;
                                        if (a(r[1] || "") === t) return a(r[2] || "")
                                    }
                                },
                                set: function(t, e, n) {
                                    n || (n = {});
                                    var r = o(t) + "=" + o(e);
                                    return n.expires && (r += "; expires=" + n.expires), n.path && (r += "; path=" + o(n.path)), n.domain && (r += "; domain=" + o(n.domain)), n.secure && (r += "; secure"), i.cookie = r
                                }
                            };
                        return n
                    };
                if ("undefined" != typeof document) {
                    var n = e(document);
                    e.get = n.get, e.set = n.set
                }
            }, function(t, e, n) {
                "use strict";
                e.decode = e.parse = n(9), e.encode = e.stringify = n(10)
            }, function(t, e, n) {
                "use strict";

                function m(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                t.exports = function(t, e, n, r) {
                    e = e || "&", n = n || "=";
                    var o = {};
                    if ("string" != typeof t || 0 === t.length) return o;
                    var i = /\+/g;
                    t = t.split(e);
                    var a = 1e3;
                    r && "number" == typeof r.maxKeys && (a = r.maxKeys);
                    var s = t.length;
                    0 < a && a < s && (s = a);
                    for (var u = 0; u < s; ++u) {
                        var c = t[u].replace(i, "%20"),
                            l = c.indexOf(n),
                            f, d, p, h;
                        d = 0 <= l ? (f = c.substr(0, l), c.substr(l + 1)) : (f = c, ""), p = decodeURIComponent(f), h = decodeURIComponent(d), m(o, p) ? y(o[p]) ? o[p].push(h) : o[p] = [o[p], h] : o[p] = h
                    }
                    return o
                };
                var y = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
            }, function(t, e, n) {
                "use strict";
                var i = function(t) {
                    switch (typeof t) {
                        case "string":
                            return t;
                        case "boolean":
                            return t ? "true" : "false";
                        case "number":
                            return isFinite(t) ? t : "";
                        default:
                            return ""
                    }
                };
                t.exports = function(n, r, o, t) {
                    return r = r || "&", o = o || "=", null === n && (n = void 0), "object" == typeof n ? s(u(n), function(t) {
                        var e = encodeURIComponent(i(t)) + o;
                        return a(n[t]) ? s(n[t], function(t) {
                            return e + encodeURIComponent(i(t))
                        }).join(r) : e + encodeURIComponent(i(n[t]))
                    }).join(r) : t ? encodeURIComponent(i(t)) + o + encodeURIComponent(i(n)) : ""
                };
                var a = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };

                function s(t, e) {
                    if (t.map) return t.map(e);
                    for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
                    return n
                }
                var u = Object.keys || function(t) {
                    var e = [];
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                    return e
                }
            }, function(t, e, n) {
                var a = n(12),
                    s = n(13);

                function r(t, e, n) {
                    var r = e && n || 0;
                    "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
                    var o = (t = t || {}).random || (t.rng || a)();
                    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e)
                        for (var i = 0; i < 16; ++i) e[r + i] = o[i];
                    return e || s(o)
                }
                t.exports = r
            }, function(t, e) {
                var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                if (n) {
                    var r = new Uint8Array(16);
                    t.exports = function t() {
                        return n(r), r
                    }
                } else {
                    var o = new Array(16);
                    t.exports = function t() {
                        for (var e = 0, n; e < 16; e++) 0 == (3 & e) && (n = 4294967296 * Math.random()), o[e] = n >>> ((3 & e) << 3) & 255;
                        return o
                    }
                }
            }, function(t, e) {
                for (var o = [], n = 0; n < 256; ++n) o[n] = (n + 256).toString(16).substr(1);

                function r(t, e) {
                    var n = e || 0,
                        r = o;
                    return [r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]]].join("")
                }
                t.exports = r
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = {
                    actor: {
                        type: "string",
                        nullable: !1
                    },
                    action: {
                        type: "string",
                        nullable: !1
                    },
                    event_owner_team: {
                        type: "string",
                        nullable: !1
                    },
                    event_source: {
                        type: "string",
                        nullable: !1
                    },
                    object_type: {
                        type: "string",
                        nullable: !1
                    },
                    context_website_identifier: {
                        type: "string",
                        nullable: !0
                    },
                    destination_url: {
                        type: "string",
                        nullable: !0
                    },
                    object_identifier: {
                        type: "string",
                        nullable: !0
                    },
                    object_id: {
                        type: "string",
                        nullable: !0
                    },
                    object_display_name: {
                        type: "string",
                        nullable: !0
                    },
                    object_value: {
                        type: "string",
                        nullable: !0
                    },
                    product_area: {
                        type: "string",
                        nullable: !0
                    },
                    product_page: {
                        type: "string",
                        nullable: !0
                    },
                    product_section: {
                        type: "string",
                        nullable: !0
                    },
                    product_design_identifier: {
                        type: "string",
                        nullable: !0
                    },
                    user_member_account_id: {
                        type: "string",
                        nullable: !0
                    }
                }
            }])
        },
        3: function(t, e) {
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            t.exports = n
        },
        5: function(e, t) {
            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function t(e) {
                    return typeof e
                } : function t(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }

            function r(t) {
                return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = r = function t(e) {
                    return n(e)
                } : e.exports = r = function t(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
                }, r(t)
            }
            e.exports = r
        },
        6: function(t, e) {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function n(t, e, n) {
                return e && r(t.prototype, e), n && r(t, n), t
            }
            t.exports = n
        },
        861: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(3),
                o = n.n(r),
                i = n(6),
                a = n.n(i),
                s = n(117),
                u = n.n(s),
                c = n(92),
                l = {
                    container: document.body,
                    strings: ["This is demo text."],
                    typeSpeed: 200,
                    deleteSpeed: 100,
                    pauseLength: 500,
                    hasCursor: !1,
                    shouldAutoplay: !0
                },
                f = "paused",
                d = "typing",
                p = "deleting",
                h, m = function() {
                    function e() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        o()(this, e), t = Object.assign(l, t), this.$container = t.container, this.strings = t.strings, this.typeSpeed = t.typeSpeed, this.deleteSpeed = t.deleteSpeed, this.pauseLength = t.pauseLength, this.hasCursor = t.hasCursor, this.lastStringIndex = this.strings.length - 1, this.stringIndex = 0, this.lastCharIndex = this.strings[this.stringIndex].length - 1, this.charIndex = 0, this.hasCursor && this.$container.classList.add("has-cursor"), t.shouldAutoplay && this.play()
                    }
                    return a()(e, [{
                        key: "play",
                        value: function t() {
                            if (this.forcePaused) return this.forcePaused = !1, void(this.state = p);
                            this.stopAtNextFrame = !1, this.lastAnimationTime = (new Date).getTime(), this.state = d
                        }
                    }, {
                        key: "stop",
                        value: function t() {
                            this.stopAtNextFrame = !0
                        }
                    }, {
                        key: "pause",
                        value: function t() {
                            this.forcePaused = !0
                        }
                    }, {
                        key: "queue",
                        value: function t(e) {
                            this.nextIndex = e
                        }
                    }, {
                        key: "setString",
                        value: function t(e) {
                            this.$container.textContent = this.strings[e]
                        }
                    }, {
                        key: "update",
                        value: function t() {
                            if (!this.stopAtNextFrame) {
                                this.$container.dataset.state = this.state;
                                var e = (new Date).getTime(),
                                    n = this.strings[this.stringIndex].split(""),
                                    r = e - this.lastAnimationTime;
                                this.state === f && this.forcePaused || (this.state === f && r >= this.pauseLength ? this.state = p : this.state === d && r >= this.typeSpeed ? (this.charIndex === this.lastCharIndex && (this.state = f), this.$container.textContent = n.splice(0, this.charIndex + 1).join(""), this.charIndex += 1, this.lastAnimationTime = e) : this.state === p && r >= this.deleteSpeed && (0 === this.charIndex && (this.state = d, void 0 !== this.nextIndex ? this.stringIndex = this.nextIndex : this.stringIndex === this.lastStringIndex ? this.stringIndex = 0 : this.stringIndex += 1, this.lastCharIndex = this.strings[this.stringIndex].length - 1), this.$container.textContent = n.splice(0, this.charIndex + 1).join(""), this.charIndex -= 1, this.lastAnimationTime = e))
                            }
                        }
                    }]), e
                }(),
                y = n(146),
                g = function() {
                    function n(t) {
                        var e = this;
                        o()(this, n), u()(this, "updateTyper", function() {
                            requestAnimationFrame(function() {
                                return e.updateTyper()
                            }), e.typer.update()
                        }), this.inputContainer = t.querySelector(".linear-onboarding-block__input-container"), this.inputDisplay = t.querySelector(".linear-onboarding-block__input-display"), this.form = t.querySelector(".linear-onboarding-block__form"), this.question = t.querySelector(".linear-onboarding-block__question"), this.input = t.querySelector(".linear-onboarding-block__input"), this.submitButtonContainer = t.querySelector(".linear-onboarding-block__submit-container"), this.submitButton = t.querySelector(".linear-onboarding-block__submit"), this.errorContainer = t.querySelector(".linear-onboarding-block__error-container"), this.inputTrigger = t.querySelector(".linear-onboarding-block__input-trigger"), this.initializeTyper(), this.addFormListeners(), this.hasTrackedInput = !1, this.tracker = y.a.spawnTracker({
                            actor: "user",
                            object_type: "form",
                            object_identifier: "site-intent-form",
                            product_page: "www",
                            product_section: "linear-onboarding-block"
                        })
                    }
                    return a()(n, [{
                        key: "initializeTyper",
                        value: function t() {
                            this.typer = new m({
                                container: this.inputDisplay,
                                strings: ["To sell my pottery", "To show my photography", "To promote my restaurant"],
                                typeSpeed: 100,
                                deleteSpeed: 80,
                                pauseLength: 1500,
                                hasCursor: !0,
                                shouldAutoplay: !0
                            }), this.startTyper()
                        }
                    }, {
                        key: "startTyper",
                        value: function t() {
                            this.typer.play(), this.updateTyper()
                        }
                    }, {
                        key: "addFormListeners",
                        value: function t() {
                            var e = this,
                                n = function t() {
                                    e.input.classList.contains("active") || (e.showForm(), e.input.focus(), e.typer.stop(), e.typer.charIndex = 0, e.inputDisplay.innerHTML = "")
                                };
                            this.inputContainer.addEventListener("click", n), this.inputTrigger.addEventListener("click", n), this.input.addEventListener("blur", function() {
                                e.input.value.length <= 0 && (e.startTyper(), e.hideForm(), e.hideEmptyInputError())
                            }), this.input.addEventListener("input", function() {
                                0 < e.input.value.length ? (e.hideEmptyInputError(), e.showSubmitButton(), e.hasTrackedInput || (e.tracker.track({
                                    action: "input"
                                }), e.hasTrackedInput = !0)) : e.hideSubmitButton()
                            }), this.submitButton.addEventListener("click", function(t) {
                                t.preventDefault(), e.handleSubmit()
                            }), this.form.addEventListener("submit", function(t) {
                                t.preventDefault(), e.handleSubmit()
                            })
                        }
                    }, {
                        key: "showForm",
                        value: function t() {
                            this.inputContainer.classList.add("active"), this.tracker.track({
                                action: "focus"
                            })
                        }
                    }, {
                        key: "hideForm",
                        value: function t() {
                            this.inputContainer.classList.remove("active")
                        }
                    }, {
                        key: "showEmptyInputError",
                        value: function t() {
                            this.errorContainer.classList.add("visible"), this.errorContainer.classList.remove("hidden")
                        }
                    }, {
                        key: "hideEmptyInputError",
                        value: function t() {
                            this.errorContainer.classList.contains("visible") && (this.errorContainer.classList.remove("visible"), this.errorContainer.classList.add("hidden"))
                        }
                    }, {
                        key: "showSubmitButton",
                        value: function t() {
                            var e = this;
                            this.submitButtonContainer.classList.add("visible"), this.submitButtonContainer.classList.remove("hidden"), this.question.classList.add("fade"), setTimeout(function() {
                                e.submitButton.classList.add("active")
                            }, 300)
                        }
                    }, {
                        key: "hideSubmitButton",
                        value: function t() {
                            var e = this;
                            this.submitButtonContainer.classList.remove("visible"), this.submitButtonContainer.classList.add("hidden"), this.question.classList.remove("fade"), setTimeout(function() {
                                e.submitButton.classList.remove("active")
                            }, 300)
                        }
                    }, {
                        key: "handleSubmit",
                        value: function t() {
                            var e = this.input.value;
                            if ("" === e) this.showEmptyInputError();
                            else {
                                this.tracker.track({
                                    action: "submit",
                                    object_value: e
                                });
                                var n = encodeURIComponent(e);
                                window.location.href = "/get-started?site_intent=".concat(n)
                            }
                        }
                    }]), n
                }();
            Object(c.b)(g, "linear-onboarding-block")
        },
        92: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return r
            }), n.d(e, "a", function() {
                return o
            }), n.d(e, "c", function() {
                return a
            });
            var s = n(1),
                u = n(2),
                p, h;

            function r(t, r, e) {
                try {
                    if (void 0 === e) {
                        var n, o = Array.from(document.querySelectorAll("[data-component-id]")).filter(function(t) {
                            var e = "" === t.dataset.componentId,
                                n = t.dataset.componentName === r;
                            return e && n
                        });
                        if (o.length <= 0) throw Error("No uninitialized component containers found.");
                        e = o.pop()
                    }
                    var i = window.componentId();
                    e.dataset.componentId = i;
                    var a = new t(e, i);
                    return s.send(u.a.page.componentInitialized, {
                        id: i
                    }), a
                } catch (t) {
                    console.error("Unable to initialize component.", t)
                }
            }

            function o(t) {
                return t.dataset.componentId
            }

            function i(t) {
                return t.dataset.componentName
            }

            function a(t) {
                var e = t.template,
                    n = t.content,
                    r = t.parentElement;
                if (r) {
                    if (!p) {
                        var o = document.getElementById("cdn-lark");
                        p = o ? o.dataset.src.split("assets")[0] : "/"
                    }
                    if (!h) {
                        var i = window.__templateVersion;
                        h = i ? "?".concat(i) : "?"
                    }
                    var a = document.createElement("div"),
                        s, u;
                    if (a.innerHTML = e(n), "/" !== p) Array.from(a.getElementsByTagName("link")).forEach(function(t) {
                        var e, n = t.getAttribute("href").split("styles")[1],
                            r = "".concat(p, "assets/styles").concat(n);
                        t.setAttribute("href", r)
                    });
                    Array.from(a.getElementsByTagName("squarespace:script")).forEach(function(t) {
                        var e = t.getAttribute("src"),
                            n = "".concat(p, "scripts/").concat(e).concat(h),
                            r = document.createElement("script");
                        r.setAttribute("src", n), t.parentElement.appendChild(r), t.parentElement.removeChild(t)
                    });
                    var c = Array.from(a.children),
                        l = c.find(function(t) {
                            return void 0 !== t.dataset.componentId
                        }),
                        f = c.find(function(t) {
                            return "LINK" === t.tagName
                        }),
                        d = c.find(function(t) {
                            return "SCRIPT" === t.tagName
                        });
                    return f.addEventListener("load", function() {
                        r.appendChild(l), r.appendChild(d)
                    }), r.appendChild(f), l
                }
            }
        }
    })
});