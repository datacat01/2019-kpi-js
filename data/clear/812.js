! function e(t, r, a) {
    function n(s, i) {
        if (!r[s]) {
            if (!t[s]) {
                var p = "function" == typeof require && require;
                if (!i && p) return p(s, !0);
                if (o) return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = r[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function(e) {
                var r = t[s][1][e];
                return n(r || e)
            }, l, l.exports, e, t, r, a)
        }
        return r[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < a.length; s++) n(a[s]);
    return n
}({
    1: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                for (var t = [], s = 0; s < e.length; s++) {
                    for (var i = !1, f = 0; f < c.htSlots.length; f++)
                        if (e[s].htSlotName === c.htSlots[f].getName()) {
                            i = !0;
                            var u = {
                                htSlot: c.htSlots[f],
                                ref: ""
                            };
                            e[s].hasOwnProperty("firstPartyData") && (u.firstPartyData = e[s].firstPartyData), t.push(u)
                        } i || n.emit("error", "unrecognized header tag slot name " + e[s].htSlotName + " in call to retrieveDemand")
                }
                if (0 === t.length) return n.emit("warning", "no valid header tag slots found in call to retrieveDemand"), {
                    sessionId: "",
                    promise: p.resolve({})
                };
                var g = o.createTimer(r, !0);
                return n.emit("hs_session_start", {
                    sessionId: g
                }), o.addTimerCallback(g, function() {
                    n.emit("global_timeout_reached", {
                        sessionId: g
                    })
                }), {
                    promise: a._executeNext(g, t).then(function(e) {
                        n.emit("hs_session_end", {
                            sessionId: g
                        });
                        for (var t = {
                                slot: {},
                                page: []
                            }, r = 0; r < e.length; r++)
                            if (!e[r].pass && l.isObject(e[r].targeting) && !l.isEmpty(e[r].targeting))
                                if ("slot" === e[r].targetingType) {
                                    var a = e[r].htSlot.getName();
                                    t.slot.hasOwnProperty(a) || (t.slot[a] = []), t.slot[a].push({
                                        targeting: e[r].targeting,
                                        price: e[r].price ? e[r].price : 0,
                                        adm: e[r].adm ? e[r].adm : "",
                                        size: e[r].size ? e[r].size : [],
                                        partnerId: e[r].partnerId ? e[r].partnerId : "",
                                        winNotice: e[r].winNotice ? e[r].winNotice : d.noOp
                                    })
                                } else if ("page" === e[r].targetingType) {
                            var o = {
                                targeting: e[r].targeting,
                                partnerId: e[r].partnerId ? e[r].partnerId : ""
                            };
                            e.hasOwnProperty("price") && (o.price = e[r].price), e.hasOwnProperty("adm") && (o.adm = e[r].adm), t.page.push(o)
                        }
                        return t
                    }),
                    sessionId: g
                }
            }
            var r, a = i();
            ! function() {
                n = c.services.EventsService, o = c.services.TimerService, r = e.globalTimeout, c.globalTimeout = r, a._setDirectInterface("DirectBiddingLayer", {
                    retrieveDemand: t
                })
            }();
            var f = {};
            return s.derive(a, f)
        }
        var n, o, s = e(8),
            i = e(3),
            p = e(14),
            c = e(43),
            l = e(22),
            d = (e(23), e(21));
        t.exports = a
    }, {}],
    2: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e, t) {
                return m[e] = L.IN_PROGRESS, new p(function(r) {
                    t.instance.retrieve().then(function() {
                        t.enableSetTargeting && l.isFunction(t.instance.getTargets) && c.services.GptService.setIdentityTargeting(t.instance.getTargets())
                    }).then(function() {
                        m[e] = L.COMPLETE, r()
                    }).catch(function(t) {
                        m[e] = L.COMPLETE, r()
                    })
                })
            }

            function r() {
                for (var e = [], r = p.defer(), a = Object.keys(v); a.length;) {
                    var n = l.randomSplice(a),
                        o = v[n];
                    if (o.enabled) try {
                        e.push(t(n, o))
                    } catch (e) {}
                }
                return p.all(e).then(function() {
                    r.resolve()
                }), r
            }

            function a() {
                var e = {};
                for (var t in v)
                    if (v.hasOwnProperty(t)) {
                        var r = v[t];
                        if (r.enabled) {
                            var a = r.instance.getResults();
                            a && (e[t] = {
                                data: a
                            })
                        }
                    } return e
            }

            function f() {
                for (var e in m) m.hasOwnProperty(e) && m[e] !== L.COMPLETE && n.emit("hs_identity_timeout", {
                    statsId: v[e].instance.getStatsId()
                })
            }

            function u() {
                y === L.NOT_STARTED && (I = r(), y = L.IN_PROGRESS, I.promise.then(function() {
                    f(), y = L.COMPLETE
                }), 0 === x ? I.resolve() : S || (S = o.createTimer(x, !1, function() {
                    I.resolve()
                })))
            }

            function g() {
                return y === L.NOT_STARTED ? p.resolve(null) : (y !== L.COMPLETE && S && o.startTimer(S), I.promise.then(function() {
                    return a()
                }))
            }

            function b(e, t) {
                return g().then(function(r) {
                    if (r && !l.isEmpty(r))
                        for (var a = 0; a < t.length; a++) t[a].identityData = r;
                    return h._executeNext(e, t)
                })
            }
            var h, v, y, m, x, I, S, L = {
                NOT_STARTED: 0,
                IN_PROGRESS: 1,
                COMPLETE: 2
            };
            return function() {
                n = c.services.EventsService, o = c.services.TimerService, h = i(), x = e.timeout, y = L.NOT_STARTED, m = {}, v = e.partners, n.emit("hs_define_identity_timeout", {
                    timeout: x
                });
                for (var t = Object.keys(v), r = t.length - 1; r >= 0; r--) {
                    var a = l.randomSplice(t),
                        s = v[a];
                    if (s.enabled) try {
                        if (s.instance = d[a](s.configs), !s.instance) {
                            s.enabled = !1;
                            continue
                        }
                        m[a] = L.NOT_STARTED
                    } catch (e) {
                        s.enabled = !1
                    }
                }
                h._setDirectInterface("IdentityLayer", {
                    retrieve: u,
                    getResult: g
                }), h._setExecutor(b)
            }(), s.derive(h, {
                retrieve: u,
                getResult: g
            })
        }
        var n, o, s = e(8),
            i = e(3),
            p = e(14),
            c = e(43),
            l = e(22),
            d = {
                MerkleIp: e(30),
                AdserverOrgIp: e(28),
                LiveRampIp: e(29)
            };
        t.exports = a
    }, {}],
    3: [function(e, t, r) {
        "use strict";

        function a() {
            function e(e, t) {
                return n.resolve(t)
            }

            function t(e, t) {
                p = {}, p[e] = t
            }

            function r(e) {
                c = e
            }

            function a() {
                return p
            }

            function o(e) {
                l = e
            }

            function s(e, t) {
                return l(e, t)
            }

            function i(e, t) {
                return n.resolve().then(function() {
                    return c(e, t)
                })
            }
            var p, c, l;
            return function() {
                p = null, c = e, l = e
            }(), {
                _setDirectInterface: t,
                _setExecutor: r,
                _executeNext: s,
                setNext: o,
                getDirectInterface: a,
                execute: i
            }
        }
        var n = e(14);
        e(23);
        t.exports = a
    }, {}],
    4: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                var t = [];
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var a = e[r].priority;
                        l.isInteger(a) || (a = i.DEFAULT_PARTNER_PRIORITY), t[a] = t[a] || [], t[a].push(r)
                    } var n = [];
                return t.forEach(function(e) {
                    l.shuffle(e), e.forEach(function(e) {
                        n.push(e)
                    })
                }), n
            }

            function r(e, t, r, a, n) {
                if (n && r.getPrefetchDisabled()) return [];
                var o = a.slice(),
                    s = [],
                    i = r.retrieve(e, o),
                    c = i.map(function(e) {
                        var t = p.defer();
                        return e.then(function(e) {
                            t.resolve(e)
                        }).catch(function(e) {
                            t.resolve([])
                        }), t
                    });
                return l.appendToArray(s, c), s
            }

            function a(e, a, n) {
                for (var o = {
                        defers: [],
                        promises: []
                    }, s = t(b), i = 0; i < s.length; i++) {
                    var p = s[i],
                        c = b[p];
                    if (c.enabled) try {
                        for (var l = r(e, p, c.instance, a, n), d = 0; d < l.length; d++) o.defers.push(l[d]), o.promises.push(l[d].promise)
                    } catch (e) {}
                }
                return o
            }

            function f(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t) && h.hasOwnProperty(t))
                        for (var r = h[t], a = 0; a < r.length; a++) {
                            var n = r[a];
                            b.hasOwnProperty(n) && b[n].instance.setFirstPartyData(e[t])
                        }
            }

            function u(e, t) {
                var r = a(e, t);
                return n.addTimerCallback(e, function() {
                    for (var e = 0; e < r.defers.length; e++) r.defers[e].resolve([])
                }), p.all(r.promises).then(function(t) {
                    return n.clearTimer(e), t ? l.mergeArrays.apply(null, t) : []
                })
            }
            var g, b, h = {
                rubicon: ["RubiconHtb", "RubiconExtHtb"]
            };
            return function() {
                n = c.services.TimerService, g = s(), b = e.partners;
                for (var r = {}, a = t(b), o = 0; o < a.length; o++) {
                    var i = a[o],
                        p = b[i];
                    if (p.enabled) try {
                        if (p.instance = d[i](p.configs, i), !p.instance) {
                            p.enabled = !1;
                            continue
                        }
                        p.instance.getDirectInterface() && (r = l.mergeObjects(r, p.instance.getDirectInterface()))
                    } catch (e) {
                        p.enabled = !1
                    }
                }
                var h = {
                    Partners: r,
                    setFirstPartyData: f
                };
                g._setDirectInterface("PartnersLayer", h), g._setExecutor(u)
            }(), o.derive(g, {})
        }
        var n, o = e(8),
            s = e(3),
            i = e(10),
            p = e(14),
            c = e(43),
            l = e(22),
            d = (e(23), {
                IndexExchangeHtb: e(34),
                AolHtb: e(31),
                FacebookHtb: e(33),
                TrustXHtb: e(27),
                RubiconHtb: e(26),
                CriteoHtb: e(32)
            });
        t.exports = a
    }, {}],
    5: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(t) {
                return e.roundingType === a.RoundingTypes.FLOOR ? Math.floor(t) : t
            }

            function r(r) {
                var i = 0,
                    p = 1,
                    c = r.toString(),
                    l = c.indexOf(".");
                if (l > -1 && (i = c.length - l - 1, c = c.slice(0, l) + c.slice(l + 1)), i >= o) i -= o;
                else {
                    var d = o - i;
                    i = 0, c = n.padEnd(c, c.length + d, "0")
                }
                c.length > 9 && (i -= c.length - 9, c = c.slice(0, 9)), p = Math.pow(10, i), c = Number(c);
                var f = e.buckets.length;
                if (c < e.floor * p) c = 0;
                else if (c >= e.buckets[f - 1].max * p) c = e.buckets[f - 1].max * p;
                else {
                    for (var u, g = e.floor, b = 0; b < f && (u = e.buckets[b], !(c <= u.max * p)); b++) g = u.max;
                    e.roundingType !== a.RoundingTypes.NONE && (c -= g * p, c /= u.step * p, c = t(c), c *= u.step * p, c += g * p)
                }
                c = c.toString(), i += s;
                var h = c.length - i;
                h < 1 && (c = n.padStart(c, c.length + (1 - h), "0"), h = 1);
                var v = c.slice(0, h);
                return 0 !== e.outputPrecision && (v = v + "." + c.slice(h), e.outputPrecision > 0 && (v = i < e.outputPrecision ? n.padEnd(v, h + e.outputPrecision + 1, "0") : v.slice(0, h + e.outputPrecision + 1))), v
            }
            var o, s, i = {
                floor: 0,
                buckets: [{
                    max: 1 / 0,
                    step: 1
                }]
            };
            return function() {
                o = Math.round(Math.log(e.bidUnitInCents) * Math.LOG10E), s = Math.round(Math.log(e.outputCentsDivisor) * Math.LOG10E), e.roundingType = a.RoundingTypes[e.roundingType];
                for (var t = ["floor", "buckets"], r = 0; r < t.length; r++) {
                    var n = t[r];
                    e.hasOwnProperty(n) || (e[n] = i[n])
                }
            }(), {
                apply: r
            }
        }
        var n = e(22);
        e(23);
        a.RoundingTypes = {
            NONE: 0,
            FLOOR: 1
        }, t.exports = a
    }, {}],
    6: [function(e, t, r) {
        "use strict";
        e(23);
        t.exports = function() {
            function e(e, t) {
                return e = e || "http:", t = t || "https:", "https:" === document.location.protocol ? t : e
            }

            function t() {
                return ("CSS1Compat" === y.document.compatMode ? y.document.documentElement : y.document.body).clientWidth
            }

            function r() {
                return ("CSS1Compat" === y.document.compatMode ? y.document.documentElement : y.document.body).clientHeight
            }

            function a() {
                return y.screen.width
            }

            function n() {
                return y.screen.height
            }

            function o() {
                return document.referrer
            }

            function s() {
                return y.location.hostname
            }

            function i() {
                return navigator.userAgent
            }

            function p() {
                return navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
            }

            function c() {
                return y.location.pathname
            }

            function l() {
                try {
                    return window.top === window.self
                } catch (e) {
                    return !1
                }
            }

            function d() {
                return l() ? location.href : document.referrer || location.href
            }

            function f() {
                try {
                    return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
                } catch (e) {
                    return !1
                }
            }

            function u(e, t, r, a) {
                try {
                    for (var n, o = window, s = 0;;)
                        if (!(r && s < r)) {
                            if (a && s > a) break;
                            if (e && (n = e(o))) return n;
                            var i;
                            try {
                                i = o.frameElement
                            } catch (e) {
                                i = null
                            }
                            if (null === i) {
                                if (t && (n = t(o))) return n;
                                break
                            }
                            o = o.parent, s++
                        }
                } catch (e) {}
                return null
            }

            function g(e) {
                return u(function(t) {
                    return t.hasOwnProperty(e) ? t[e] : null
                })
            }

            function b(e, t) {
                var r = t || y,
                    a = r.document.createElement("iframe");
                return e && (a.src = e), a.width = 0, a.height = 0, a.scrolling = "no", a.marginWidth = 0, a.marginHeight = 0, a.frameBorder = 0, a.setAttribute("style", "border: 0px; vertical-align: bottom; visibility: hidden; display: none;"), r.document.body.appendChild(a), a
            }

            function h(e) {
                var t = e + "=",
                    r = y.document.cookie.split(";");
                for (var a in r)
                    if (r.hasOwnProperty(a)) {
                        for (var n = r[a];
                            " " === n.charAt(0);) n = n.substring(1, n.length);
                        if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
                    } return null
            }

            function v() {
                var e = !1;
                try {
                    new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0)
                } catch (t) {
                    navigator.mimeTypes && void 0 !== navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = !0)
                }
                return e
            }
            var y;
            return function() {
                y = u(null, function(e) {
                    return e
                })
            }(), {
                topWindow: y,
                getProtocol: e,
                isLocalStorageSupported: f,
                getViewportWidth: t,
                getViewportHeight: r,
                isTopFrame: l,
                getScreenWidth: a,
                getScreenHeight: n,
                getReferrer: o,
                getPageUrl: d,
                getHostname: s,
                getUserAgent: i,
                getLanguage: p,
                getPathname: c,
                getNearestEntity: g,
                traverseContextTree: u,
                createHiddenIFrame: b,
                readCookie: h,
                isFlashSupported: v
            }
        }()
    }, {}],
    7: [function(e, t, r) {
        "use strict";
        var a = e(6),
            n = e(22),
            o = e(21);
        t.exports = function() {
            function e(e) {
                if (!s) return !1;
                try {
                    localStorage.removeItem(i + e)
                } catch (e) {
                    return !1
                }
                return !0
            }

            function t(t) {
                if (!s) return null;
                var r;
                try {
                    r = JSON.parse(localStorage.getItem(i + t))
                } catch (e) {
                    return null
                }
                return null === r ? null : !r.e || r.e < o.now() ? (e(t), null) : n.isObject(r.d) ? r.d : null
            }

            function r(e, t, r) {
                if (!s) return !1;
                r > p && (r = p);
                var a = o.now(),
                    n = {
                        t: a,
                        d: t,
                        e: a + r
                    };
                try {
                    localStorage.setItem(i + e, JSON.stringify(n))
                } catch (e) {
                    return !1
                }
                return !0
            }
            var s, i = "IXWRAPPER",
                p = 6048e5;
            return function() {
                s = a.isLocalStorageSupported()
            }(), {
                deleteData: e,
                getData: t,
                setData: r
            }
        }()
    }, {}],
    8: [function(e, t, r) {
        "use strict";
        e(23);
        t.exports = function() {
            function e(e) {
                for (var t in e) e.hasOwnProperty(t) && "_" === t[0] && "__" !== t.slice(0, 2) && delete e[t];
                return e
            }

            function t(t, r) {
                var a, n = {};
                for (a in t) t.hasOwnProperty(a) && (n[a] = t[a]);
                for (a in r) r.hasOwnProperty(a) && (n[a] = r[a]);
                return e(n)
            }
            return {
                derive: t
            }
        }()
    }, {}],
    9: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                if (n.isFunction(e)) try {
                    e()
                } catch (e) {}
            }
            return function() {
                if (n.isArray(e))
                    for (var t = 0; t < e.length; t++) try {
                        e[t]()
                    } catch (e) {}
            }(), {
                push: t
            }
        }
        var n = e(22);
        t.exports = a
    }, {}],
    10: [function(e, t, r) {
        "use strict";
        var a = {
            DEFAULT_UID_LENGTH: 8,
            MIN_BANNER_DIMENSION: 1,
            MIN_BID_FLOOR: 0,
            MIN_SITE_ID: 0,
            DEFAULT_UID_CHARSET: "ALPHANUM",
            SESSION_ID_LENGTH: 8,
            PUBKIT_AD_ID_LENGTH: 16,
            RENDER_SERVICE_EXPIRY_SWEEP_TIMER: 3e4,
            DEFAULT_PARTNER_PRIORITY: 1,
            LineItemTypes: {
                ID_AND_SIZE: 1,
                ID_AND_PRICE: 2,
                CUSTOM: 3
            },
            DeviceTypeMethods: {
                USER_AGENT: 1,
                REFERENCE: 2,
                SIZE_MAPPING: 3
            },
            RequestArchitectures: {
                MRA: 1,
                SRA: 2
            },
            InitialLoadStates: {
                DISABLED: 1,
                ENABLED: 2
            },
            MediationLevels: {
                NONE: 1,
                HT_SLOT: 2,
                PARTNER: 3
            }
        };
        t.exports = a
    }, {}],
    11: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t() {
                return i.mobile() ? a.DeviceTypes.MOBILE : (i.tablet(), a.DeviceTypes.DESKTOP)
            }

            function r() {
                var t;
                try {
                    t = eval(e.configs.reference)
                } catch (e) {
                    throw s("INTERNAL_ERROR", "DeviceTypeChecker: could not eval() `reference`.")
                }
                if (!o.isFunction(t)) {
                    if (o.isString(t)) return t;
                    throw s("INVALID_TYPE", "DeviceTypeChecker: `reference` must refer to a function or a string")
                }
                try {
                    return t()
                } catch (e) {
                    throw s("INTERNAL_ERROR", "DeviceTypeChecker: could not execute `reference` function.")
                }
            }

            function p() {
                switch (c) {
                    case n.DeviceTypeMethods.USER_AGENT:
                        return t();
                    case n.DeviceTypeMethods.REFERENCE:
                        return r();
                    default:
                        return t()
                }
            }
            var c;
            return function() {
                c = n.DeviceTypeMethods[e.method] || n.DeviceTypeMethods.USER_AGENT
            }(), {
                getDeviceType: p
            }
        }
        var n = e(10),
            o = e(22),
            s = e(23),
            i = e(12);
        a.isValidDeviceType = function(e) {
            for (var t in a.DeviceTypes)
                if (a.DeviceTypes.hasOwnProperty(t) && "TABLET" !== t && e === a.DeviceTypes[t]) return !0;
            return !1
        }, a.DeviceTypes = {
            DESKTOP: "desktop",
            MOBILE: "mobile",
            TABLET: "tablet"
        }, t.exports = a
    }, {}],
    12: [function(e, t, r) {
        "use strict";
        var a, n, o;
        a = {}, o = window.navigator.userAgent.toLowerCase(), a.ios = function() {
            return a.iphone() || a.ipod() || a.ipad()
        }, a.iphone = function() {
            return !a.windows() && n("iphone")
        }, a.ipod = function() {
            return n("ipod")
        }, a.ipad = function() {
            return n("ipad")
        }, a.android = function() {
            return !a.windows() && n("android")
        }, a.androidPhone = function() {
            return a.android() && n("mobile")
        }, a.androidTablet = function() {
            return a.android() && !n("mobile")
        }, a.blackberry = function() {
            return n("blackberry") || n("bb10") || n("rim")
        }, a.blackberryPhone = function() {
            return a.blackberry() && !n("tablet")
        }, a.blackberryTablet = function() {
            return a.blackberry() && n("tablet")
        }, a.windows = function() {
            return n("windows")
        }, a.windowsPhone = function() {
            return a.windows() && n("phone")
        }, a.windowsTablet = function() {
            return a.windows() && n("touch") && !a.windowsPhone()
        }, a.fxos = function() {
            return (n("(mobile;") || n("(tablet;")) && n("; rv:")
        }, a.fxosPhone = function() {
            return a.fxos() && n("mobile")
        }, a.fxosTablet = function() {
            return a.fxos() && n("tablet")
        }, a.meego = function() {
            return n("meego")
        }, a.mobile = function() {
            return a.androidPhone() || a.iphone() || a.ipod() || a.windowsPhone() || a.blackberryPhone() || a.fxosPhone() || a.meego()
        }, a.tablet = function() {
            return a.ipad() || a.androidTablet() || a.blackberryTablet() || a.windowsTablet() || a.fxosTablet()
        }, a.desktop = function() {
            return !a.tablet() && !a.mobile()
        }, n = function(e) {
            return -1 !== o.indexOf(e)
        }, t.exports = a
    }, {}],
    13: [function(e, t, r) {
        "use strict";
        ! function(e, a) {
            "object" == typeof r ? a(t.exports) : "function" == typeof define && define.amd ? define(["exports"], a) : (e.jsonpatch = {}, e.returnExports = a(e.jsonpatch))
        }(this, function(e) {
            function t(e) {
                Error.call(this, e), this.message = e
            }

            function r(e) {
                Error.call(this, e), this.message = e
            }

            function a(e) {
                var t, r;
                if (l(e)) return e.slice();
                if (null === e) return e;
                if ("object" == typeof e) {
                    t = {};
                    for (r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }
                return e
            }

            function n(e, t) {
                var r;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("object" != typeof e) return !1;
                var a = l(e);
                if (a !== l(t)) return !1;
                if (!a) {
                    for (r in e)
                        if (Object.hasOwnProperty(e, r) && (!Object.hasOwnProperty(t, r) || !n(e[r], t[r]))) return !1;
                    for (r in t)
                        if (Object.hasOwnProperty(t, r) && !Object.hasOwnProperty(e, r)) return !1;
                    return !0
                }
                if (e.length != t.length) return !1;
                for (var o = 0; o < e.length; o++) return n(e[o], t[o])
            }

            function o(e) {
                var r, a;
                if (!e.op) throw new t("");
                if (!c.hasOwnProperty(e.op)) throw new t("");
                if (!("path" in e)) throw new t("");
                for (a = c[e.op], r = 0; r < a.length; r++)
                    if (!(a[r] in e)) throw new t("")
            }

            function s(e, a) {
                o(e);
                var s = e.op,
                    i = new p(e.path),
                    c = e.value,
                    l = e.from ? new p(e.from) : null;
                switch (s) {
                    case "add":
                        return function(e) {
                            return i.add(e, c, a)
                        };
                    case "remove":
                        return function(e) {
                            return i.remove(e, a)
                        };
                    case "replace":
                        return function(e) {
                            return i.replace(e, c, a)
                        };
                    case "move":
                        if (i.subsetOf(l)) throw new t("");
                        return function(e) {
                            var t = l.get(e),
                                r = l.remove(e, a);
                            return i.add(r, t, a)
                        };
                    case "copy":
                        return function(e) {
                            var t = l.get(e);
                            return i.add(e, t, a)
                        };
                    case "test":
                        return function(e) {
                            if (!n(i.get(e), c)) throw new r("");
                            return e
                        }
                }
            }
            var i, p, c, l;
            l = Array.isArray || function(e) {
                return "[object Array]" == Object.prototype.toString.call(e)
            }, e.applyPatch = function(e, t) {
                return new i(t).apply(e)
            }, e.InvalidPatch = t, t.prototype = new Error, e.PatchApplyError = r, r.prototype = new Error, e.JSONPointer = p = function(e) {
                var r, a, n = [];
                if (a = e.split("/"), "" !== a[0]) throw new t("");
                for (r = 1; r < a.length; r++) n[r - 1] = a[r].replace(/~1/g, "/").replace(/~0/g, "~");
                this.path = n, this.length = n.length
            }, p.prototype._get_segment = function(e, t) {
                var a = this.path[e];
                if (l(t))
                    if ("-" === a) a = t.length;
                    else {
                        if (!a.match(/^0|[1-9][0-9]*$/)) throw new r("");
                        a = parseInt(a, 10)
                    } return a
            }, p.prototype._action = function(e, t, n) {
                function o(e, i) {
                    var p, c;
                    if (n || (e = a(e)), p = s._get_segment(i, e), i == s.path.length - 1) e = t(e, p);
                    else {
                        if (l(e)) {
                            if (e.length <= p) throw new r("")
                        } else {
                            if ("object" != typeof e) throw new r("");
                            if (!Object.hasOwnProperty.call(e, p)) throw new r("")
                        }
                        c = o(e[p], i + 1), n || (e[p] = c)
                    }
                    return e
                }
                var s = this;
                return o(e, 0)
            }, p.prototype.add = function(e, t, a) {
                return 0 === this.length ? t : this._action(e, function(e, a) {
                    if (l(e)) {
                        if (a > e.length) throw new r("");
                        e.splice(a, 0, t)
                    } else e[a] = t;
                    return e
                }, a)
            }, p.prototype.remove = function(e, t) {
                if (0 !== this.length) return this._action(e, function(e, t) {
                    if (!Object.hasOwnProperty.call(e, t)) throw new r("");
                    return l(e) ? e.splice(t, 1) : delete e[t], e
                }, t)
            }, p.prototype.replace = function(e, t, a) {
                return 0 === this.length ? t : this._action(e, function(e, a) {
                    if (!Object.hasOwnProperty.call(e, a)) throw new r("");
                    return l(e) ? e.splice(a, 1, t) : e[a] = t, e
                }, a)
            }, p.prototype.get = function(e) {
                var t;
                return 0 === this.length ? e : (this._action(e, function(e, a) {
                    if (!Object.hasOwnProperty.call(e, a)) throw new r("");
                    return t = e[a], e
                }, !0), t)
            }, p.prototype.subsetOf = function(e) {
                if (this.length <= e.length) return !1;
                for (var t = 0; t < e.length; t++)
                    if (e.path[t] !== this.path[t]) return !1;
                return !0
            }, c = {
                add: ["value"],
                replace: ["value"],
                test: ["value"],
                remove: [],
                move: ["from"],
                copy: ["from"]
            }, e.JSONPatch = i = function(e, t) {
                this._compile(e, t)
            }, i.prototype._compile = function(e, r) {
                var a, n = this;
                if (this.compiledOps = [], "string" == typeof e && (e = JSON.parse(e)), !l(e)) throw new t("");
                for (a = 0; a < e.length; a++) {
                    var o = s(e[a], r);
                    n.compiledOps.push(o)
                }
            }, e.JSONPatch.prototype.apply = function(e) {
                var t;
                for (t = 0; t < this.compiledOps.length; t++) e = this.compiledOps[t](e);
                return e
            }
        })
    }, {}],
    14: [function(e, t, r) {
        function a() {}

        function n(e) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(e, this)
        }

        function o(e, t) {
            for (; 3 === e._state;) e = e._value;
            if (0 === e._state) return void e._deferreds.push(t);
            e._handled = !0;
            var r = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null === r) return void(1 === e._state ? s : i)(t.promise, e._value);
            var a;
            try {
                a = r(e._value)
            } catch (e) {
                return void i(t.promise, e)
            }
            s(t.promise, a)
        }

        function s(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var r = t.then;
                    if (t instanceof n) return e._state = 3, e._value = t, void p(e);
                    if ("function" == typeof r) return void l(bind(r, t), e)
                }
                e._state = 1, e._value = t, p(e)
            } catch (t) {
                i(e, t)
            }
        }

        function i(e, t) {
            e._state = 2, e._value = t, p(e)
        }

        function p(e) {
            for (var t = 0, r = e._deferreds.length; t < r; t++) o(e, e._deferreds[t]);
            e._deferreds = null
        }

        function c(e, t, r) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = r
        }

        function l(e, t) {
            var r = !1;
            try {
                e(function(e) {
                    r || (r = !0, s(t, e))
                }, function(e) {
                    r || (r = !0, i(t, e))
                })
            } catch (e) {
                if (r) return;
                r = !0, i(t, e)
            }
        }
        n.prototype.catch = function(e) {
            return this.then(null, e)
        }, n.prototype.then = function(e, t) {
            var r = new this.constructor(a);
            return o(this, new c(e, t, r)), r
        }, n.all = function(e) {
            var t = Array.prototype.slice.call(e);
            return new n(function(e, r) {
                function a(o, s) {
                    try {
                        if (s && ("object" == typeof s || "function" == typeof s)) {
                            var i = s.then;
                            if ("function" == typeof i) return void i.call(s, function(e) {
                                a(o, e)
                            }, r)
                        }
                        t[o] = s, 0 == --n && e(t)
                    } catch (e) {
                        r(e)
                    }
                }
                if (0 === t.length) return e([]);
                for (var n = t.length, o = 0; o < t.length; o++) a(o, t[o])
            })
        }, n.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === n ? e : new n(function(t) {
                t(e)
            })
        }, n.reject = function(e) {
            return new n(function(t, r) {
                r(e)
            })
        }, n.defer = function() {
            var e = {};
            return e.promise = new n(function(t, r) {
                e.resolve = t, e.reject = r
            }), e
        }, t.exports = n
    }, {}],
    15: [function(e, t, r) {
        "use strict";
        t.exports = function(e) {
            e = e.toLowerCase();
            var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                r = {},
                a = {
                    browser: t[5] || t[3] || t[1] || "",
                    version: t[2] || t[4] || "0",
                    versionNumber: t[4] || t[2] || "0"
                };
            if (a.browser && (r[a.browser] = !0, r.version = a.version, r.versionNumber = parseInt(a.versionNumber, 10)), r.rv || r.iemobile) {
                a.browser = "msie", r.msie = !0
            }
            if (r.edge) {
                delete r.edge;
                a.browser = "msedge", r.msedge = !0
            }
            if (r.opr) {
                a.browser = "opera", r.opera = !0
            }
            if (r.safari && r.android) {
                a.browser = "android", r.android = !0
            }
            if (r.safari && r.kindle) {
                a.browser = "kindle", r.kindle = !0
            }
            if (r.safari && r.silk) {
                a.browser = "silk", r.silk = !0
            }
            return r.name = a.browser, r
        }(window.navigator.userAgent)
    }, {}],
    16: [function(e, t, r) {
        "use strict";
        var a = e(6),
            n = e(18),
            o = e(22);
        e(23);
        t.exports = function() {
            function e(e, t) {
                (t = t || window.googletag) && t.cmd && t.cmd.push(e)
            }

            function t(e) {
                return e = e || window, e.googletag ? e.googletag : (e.googletag = e.googletag || {}, e.googletag.cmd = e.googletag.cmd || [], n.jsonp({
                    async: !0,
                    url: a.getProtocol() + "//www.googletagservices.com/tag/js/gpt.js",
                    windowScope: e
                }), e.googletag)
            }

            function r(e) {
                return void 0 === e ? a.getNearestEntity("googletag") : a.traverseContextTree(function(e) {
                    return e.hasOwnProperty("googletag") ? e.googletag : null
                }, null, e, e)
            }

            function s(e) {
                return o.isObject(e) && o.isFunction(e.getSlotElementId) && o.isFunction(e.setTargeting) && o.isFunction(e.getTargeting) && o.isFunction(e.clearTargeting)
            }

            function i() {
                return googletag.pubads().getSlots().slice()
            }

            function p(e) {
                for (var t = i(), r = 0; r < t.length; r++)
                    if (t[r].getSlotElementId() === e) return t[r];
                return null
            }
            return {
                run: e,
                loadGpt: t,
                getGpt: r,
                isGSlot: s,
                getGSlots: i,
                getGSlotByDivId: p
            }
        }()
    }, {}],
    17: [function(e, t, r) {
        "use strict";

        function a(e, t) {
            function r(e, t) {
                return Number(e) - Number(t)
            }

            function a() {
                return d
            }

            function n() {
                return f
            }

            function o() {
                return u
            }

            function s() {
                return g
            }

            function i(e, t) {
                var a, n, o, s, i = [];
                a = Object.keys(b).sort(r);
                for (var p = a.length - 1; p >= 0; p--)
                    if (o = a[p], !(Number(o) > e)) {
                        n = Object.keys(b[o]).sort(r);
                        for (var c = n.length - 1; c >= 0; c--)
                            if (s = n[c], !(Number(s) > t)) {
                                i = b[o][s];
                                break
                            } if (i.length > 0) break
                    } return i
            }

            function p() {
                return h
            }

            function c() {
                return v
            }

            function l() {
                return y
            }
            var d, f, u, g, b, h, v, y;
            return function() {
                if (d = e, f = t.id, u = null, g = null, b = null, h = null, v = null, y = null, t.hasOwnProperty("divId") && (u = RegExp(t.divId)), t.hasOwnProperty("adUnitPath") && (g = RegExp(t.adUnitPath)), t.hasOwnProperty("sizeMapping")) {
                    var r, a, n, o = /^(\d+)x(\d+)$/;
                    b = {};
                    for (var s in t.sizeMapping) t.sizeMapping.hasOwnProperty(s) && (r = o.exec(s), a = r[1], n = r[2], b.hasOwnProperty(a) || (b[a] = {}), b[a][n] = t.sizeMapping[s])
                }
                t.hasOwnProperty("targeting") && (h = t.targeting), t.hasOwnProperty("deviceType") && (v = t.deviceType), t.hasOwnProperty("position") && (y = t.position), t = void 0
            }(), {
                getName: a,
                getId: n,
                getDivId: o,
                getAdUnitPath: s,
                getSizes: i,
                getTargeting: p,
                getDeviceType: c,
                getPosition: l
            }
        }
        e(23);
        t.exports = a
    }, {}],
    18: [function(e, t, r) {
        "use strict";
        var a = e(43),
            n = e(21),
            o = e(22),
            s = e(23),
            i = e(15);
        t.exports = function() {
            function e() {
                return d
            }

            function t(e) {
                var t = "";
                for (var r in e)
                    if (e.hasOwnProperty(r))
                        if (o.isObject(e[r]))
                            for (var a in e[r]) e[r].hasOwnProperty(a) && (t += r + "%5B" + a + "%5D=" + encodeURIComponent(e[r][a]) + "&");
                        else if (o.isArray(e[r]))
                    for (var n = 0; n < e[r].length; n++) t += r + "%5B%5D=" + encodeURIComponent(e[r][n]) + "&";
                else t += r + "=" + encodeURIComponent(e[r]) + "&";
                return t.slice(0, -1)
            }

            function r(e, r, a) {
                return "/" !== e[e.length - 1] && r && (e += "/"), r = r || [], o.isObject(a) && (a = t(a)), a = a ? "?" + a : "", e + r.join("/") + a
            }

            function p(e) {
                var s, p = null,
                    c = e.scope || window;
                if (e.useImgTag) s = c.document.createElement("img");
                else {
                    s = c.document.createElement("script"), s.type = "text/javascript";
                    var l = !0;
                    e.hasOwnProperty("async") && (l = e.async), s.async = l
                }
                var d = e.url;
                if (e.data) {
                    var f;
                    f = o.isString(e.data) ? e.data : t(e.data), d = r(e.url, null, f)
                }
                var u, g = !1,
                    b = function() {
                        try {
                            if (g) return;
                            g = !0, e.onTimeout && e.onTimeout(), e.useImgTag || e.continueAfterTimeout || s.parentNode.removeChild(s)
                        } catch (e) {}
                    };
                e.globalTimeout && a.services.TimerService.addTimerCallback(e.sessionId, b), e.timeout && (u = setTimeout(b, e.timeout));
                var h = function() {
                    try {
                        if (g) {
                            if (!e.continueAfterTimeout) return
                        } else clearTimeout(u);
                        e.onSuccess && e.onSuccess(null, n.now(), g), g = !0, e.useImgTag || s.parentNode.removeChild(s)
                    } catch (e) {}
                };
                null === s.onload ? s.onload = h : s.onreadystatechange = function() {
                    "loaded" !== s.readyState && "complete" !== s.readyState || (s.onreadystatechange = null, h())
                };
                var v = function() {
                    try {
                        if (g) {
                            if (!e.continueAfterTimeout) return
                        } else clearTimeout(u), g = !0;
                        e.onFailure && e.onFailure(), e.useImgTag || s.parentNode.removeChild(s)
                    } catch (e) {}
                };
                if (s.onerror = v, p = n.now(), s.src = d, !e.useImgTag) {
                    var y = c.document.getElementsByTagName("script")[0];
                    y ? y.parentNode.insertBefore(s, y) : i.msie || i.msedge || i.mozilla ? c.onload = function() {
                        c.document.body.appendChild(s)
                    } : c.document.body.appendChild(s)
                }
                return p
            }

            function c(i) {
                if (!e()) {
                    if (i.jsonp && "GET" === i.method) return p(i);
                    throw s("INTERNAL_ERROR", "XHR is not supported in this browser.")
                }
                var c = null,
                    l = i.scope || window,
                    d = new l.XMLHttpRequest,
                    f = i.url,
                    u = null;
                if (i.data)
                    if ("GET" === i.method) {
                        var g;
                        g = o.isString(i.data) ? i.data : t(i.data), f = r(i.url, null, g)
                    } else "POST" === i.method && (u = o.isString(i.data) ? i.data : JSON.stringify(i.data));
                var b = !0;
                i.hasOwnProperty("async") && (b = i.async), d.open(i.method, f, b);
                var h = "application/x-www-form-urlencoded; charset=UTF-8";
                if (void 0 !== i.contentType && (h = i.contentType), h && d.setRequestHeader("Content-Type", h), i.headers) {
                    i.headers.hasOwnProperty("X-Request-With") || d.setRequestHeader("X-Request-With", "XMLHttpRequest");
                    for (var v in i.headers) i.headers.hasOwnProperty(v) && d.setRequestHeader(v, i.headers[v])
                }
                i.withCredentials && (d.withCredentials = !0);
                var y, m = !1,
                    x = function() {
                        try {
                            if (m) return;
                            m = !0, i.onTimeout && i.onTimeout()
                        } catch (e) {}
                    };
                return i.globalTimeout && a.services.TimerService.addTimerCallback(i.sessionId, x), i.timeout && (i.continueAfterTimeout ? y = setTimeout(x, i.timeout) : (d.timeout = i.timeout, d.ontimeout = x)), (i.onSuccess || i.onFailure) && (d.onreadystatechange = function() {
                    if (4 === d.readyState) {
                        if (m) {
                            if (!i.continueAfterTimeout) return
                        } else clearTimeout(y), d.ontimeout = null;
                        if (200 === d.status) {
                            if (i.onSuccess) try {
                                i.onSuccess(d.responseText, n.now(), m)
                            } catch (e) {}
                        } else if (i.onFailure) try {
                            i.onFailure(d.status)
                        } catch (e) {}
                        m = !0
                    }
                }), c = n.now(), d.send(u), c
            }

            function l(e) {
                return e.useImgTag = !0, p(e)
            }
            var d;
            return function() {
                d = window.XMLHttpRequest && "string" == typeof(new XMLHttpRequest).responseType
            }(), {
                ajax: c,
                jsonp: p,
                img: l,
                buildUrl: r,
                objToQueryString: t,
                isXhrSupported: e
            }
        }()
    }, {}],
    19: [function(e, t, r) {
        "use strict";
        var a = (e(10), e(21)),
            n = e(23);
        t.exports = function() {
            function e() {
                if (!(this instanceof e)) return new e;
                this.__bidRequest = {
                    id: Number(a.generateUniqueId(8, "NUM")),
                    site: {
                        page: ""
                    },
                    imp: []
                }, this.__impCount = 0
            }

            function t(e) {
                if (!(this instanceof t)) return new t(e);
                try {
                    this.__bidResponse = e
                } catch (e) {
                    throw n("INTERNAL_ERROR", "cannot parse `bidResponse`")
                }
            }
            return e.prototype.setPage = function(e) {
                this.__bidRequest.site.page = e
            }, e.prototype.setRef = function(e) {
                this.__bidRequest.site.ref = e
            }, e.prototype.getId = function() {
                return this.__bidRequest.id
            }, e.prototype.addImp = function(e, t, r, a) {
                var n = String(++this.__impCount);
                return this.__bidRequest.imp.push({
                    banner: e,
                    ext: t,
                    id: n,
                    bidfloor: r,
                    bidfloorcur: a
                }), n
            }, e.prototype.addUserEid = function(e) {
                this.__bidRequest.user = this.__bidRequest.user || {}, this.__bidRequest.user.eids = this.__bidRequest.user.eids || [], this.__bidRequest.user.eids.push(e)
            }, e.prototype.setGdprConsent = function(e, t) {
                this.__bidRequest.regs = this.__bidRequest.regs || {}, this.__bidRequest.regs.ext = this.__bidRequest.regs.ext || {}, this.__bidRequest.regs.ext.gdpr = e ? 1 : 0, this.__bidRequest.user = this.__bidRequest.user || {}, this.__bidRequest.user.ext = this.__bidRequest.user.ext || {}, this.__bidRequest.user.ext.consent = t || ""
            }, e.prototype.setExt = function(e) {
                this.__bidRequest.ext = e
            }, e.prototype.stringify = function() {
                return JSON.stringify(this.__bidRequest)
            }, t.prototype.__parseBid = function(e, t) {
                var r = {};
                e.hasOwnProperty("impid") && (r.impid = e.impid), e.hasOwnProperty("price") && (r.price = e.price), e.hasOwnProperty("adm") && (r.adm = e.adm), e.hasOwnProperty("ext") && (r.ext = e.ext), e.hasOwnProperty("dealid") && (r.dealid = e.dealid), e.hasOwnProperty("nurl") && (r.nurl = e.nurl), e.hasOwnProperty("nbr") && (r.nbr = e.nbr), e.hasOwnProperty("w") && (r.w = e.w), e.hasOwnProperty("h") && (r.h = e.h), t.push(r)
            }, t.prototype.getId = function() {
                return this.__bidResponse.id
            }, t.prototype.getCur = function() {
                return this.__bidResponse.cur || "USD"
            }, t.prototype.getExt = function() {
                return this.__bidResponse.ext
            }, t.prototype.getBids = function() {
                var e, t, r = [];
                if (!this.__bidResponse.hasOwnProperty("seatbid")) return r;
                t = this.__bidResponse.seatbid;
                for (var a = 0; a < t.length; a++)
                    if (t[a].hasOwnProperty("bid")) {
                        e = t[a].bid;
                        for (var n = 0; n < e.length; n++) this.__parseBid(e[n], r)
                    } return r
            }, {
                BidRequest: e,
                BidResponse: t
            }
        }()
    }, {}],
    20: [function(e, t, r) {
        "use strict";
        var a = e(22);
        t.exports = function() {
            function e(e) {
                return s[e]
            }

            function t(e) {
                return !(!a.isArray(e, "number") || 2 !== e.length)
            }

            function r(e) {
                if (t(e)) return !0;
                if (!a.isArray(e, "array")) return !1;
                for (var r = 0; r < e.length; r++)
                    if (!t(e[r])) return !1;
                return !0
            }

            function n(t, r, n) {
                r = r || ",", n = n || "x";
                var o = "";
                if (a.isArray(t, "array"))
                    for (var s = 0; s < t.length; s++) o += e(t[s]) ? t[s] : t[s][0] + n + t[s][1] + r;
                else e(t) ? o += t + r : o += t[0] + n + t[1] + r;
                return o.slice(0, -1)
            }

            function o(t, r, a) {
                r = r || ",", a = a || "x";
                for (var n = [], o = t.split(r), s = 0; s < o.length; s++)
                    if (e(o[s])) n.push(o[s]);
                    else {
                        var i = o[s].split(a);
                        n.push([Number(i[0]), Number(i[1])])
                    } return n
            }
            var s = {
                native: !0,
                fullwidth: !0
            };
            return {
                arrayToString: n,
                stringToArray: o,
                isSpecialSize: e,
                isSize: t,
                isSizes: r
            }
        }()
    }, {}],
    21: [function(e, t, r) {
        "use strict";
        var a = e(10);
        e(23);
        t.exports = function() {
            function e(e, t) {
                e.open("text/html", "replace"), e.write(t), e.close()
            }

            function t(e, t) {
                e = e || a.DEFAULT_UID_LENGTH, t = t || a.DEFAULT_UID_CHARSET;
                for (var r = "", n = 0; n < e; n++) r += p[t].charAt(Math.floor(Math.random() * p[t].length));
                return r
            }

            function r() {
                return t(8, "HEX") + "-" + t(4, "HEX") + "-4" + t(3, "HEX") + "-" + "89ab".charAt(Math.floor(4 * Math.random())) + t(3, "HEX") + "-" + t(8, "HEX")
            }

            function n() {
                return (new Date).getTime()
            }

            function o() {
                return i.getTimezoneOffset()
            }

            function s() {}
            var i, p = {
                ALPHANUM: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                ALPHA: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                ALPHA_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                ALPHA_LOWER: "abcdefghijklmnopqrstuvwxyz",
                HEX: "0123456789abcdef",
                NUM: "0123456789"
            };
            return function() {
                i = new Date
            }(), {
                UidCharacterSets: p,
                generateUniqueId: t,
                generateUuid: r,
                now: n,
                getTimezoneOffset: o,
                documentWrite: e,
                noOp: s
            }
        }()
    }, {}],
    22: [function(e, t, r) {
        "use strict";
        var a = e(23);
        t.exports = function() {
            function e(e) {
                return void 0 === e ? "undefined" : {}.toString.call(e).match(w)[1].toLowerCase()
            }

            function t(t) {
                return "string" === e(t)
            }

            function r(t) {
                return "number" === e(t) && !isNaN(t)
            }

            function n(t) {
                return "number" === e(t) || "string" === e(t) && !isNaN(Number(t))
            }

            function o(e) {
                return r(e) && e % 1 == 0
            }

            function s(t) {
                return "function" === e(t)
            }

            function i(t) {
                return "boolean" === e(t)
            }

            function p(t) {
                return "object" === e(t)
            }

            function c(t) {
                return "regexp" === e(t)
            }

            function l(e, t) {
                var r = e.indexOf(t);
                r > -1 && e.splice(r, 1)
            }

            function d(r, n, o) {
                if ("array" !== e(r)) return !1;
                if (void 0 !== n) {
                    if (!t(n)) throw a("INVALID_TYPE", "`type` must be a string");
                    if ("class" === n) {
                        if (!t(o)) throw a("INVALID_TYPE", "`className` must be a string");
                        for (var s = 0; s < r.length; s++)
                            if ("object" != typeof r[s] || r[s].__type__ !== o) return !1
                    } else
                        for (var i = 0; i < r.length; i++)
                            if (e(r[i]) !== n) return !1
                }
                return !0
            }

            function f(e) {
                return e.length ? e.splice(Math.floor(Math.random() * e.length), 1)[0] : null
            }

            function u(e) {
                var t, r, a;
                for (a = e.length - 1; a > 0; a--) t = Math.floor(Math.random() * (a + 1)), r = e[a], e[a] = e[t], e[t] = r;
                return e
            }

            function g(e) {
                return JSON.parse(JSON.stringify(e))
            }

            function b() {
                for (var e = Array.prototype.slice.call(arguments), t = {}, r = 0; r < e.length; r++)
                    for (var a in e[r]) e[r].hasOwnProperty(a) && (t[a] = e[r][a]);
                return t
            }

            function h() {
                for (var e = Array.prototype.slice.call(arguments), t = [], r = 0; r < e.length; r++)
                    for (var a = 0; a < e[r].length; a++) t.push(e[r][a]);
                return t
            }

            function v(e) {
                if (t(e)) {
                    if ("" !== e) return !1
                } else if (p(e)) {
                    for (var r in e)
                        if (e.hasOwnProperty(r)) return !1
                } else {
                    if (!d(e)) throw a("INVALID_TYPE", "`entity` must be either a string, object, or an array");
                    if (e.length) return !1
                }
                return !0
            }

            function y(e, t, r) {
                void 0 === r && (r = z);
                for (var a = 0; a < e.length; a++) {
                    for (var n = !1, o = 0; o < t.length && !(n = r(e[a], t[o])); o++);
                    if (!n) return !1
                }
                return !0
            }

            function m(e, t, r, a) {
                return t = t || [], a = a || null, r = r || "Error occurred while calling function.",
                    function() {
                        try {
                            e.apply(a, t)
                        } catch (e) {}
                    }
            }

            function x(e, t) {
                var r = "" + e;
                if (t = +t, t != t && (t = 0), t < 0) throw new RangeError("repeat count must be non-negative");
                if (t == 1 / 0) throw new RangeError("repeat count must be less than infinity");
                if (t = Math.floor(t), 0 == r.length || 0 == t) return "";
                if (r.length * t >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
                for (var a = "", n = 0; n < t; n++) a += r;
                return a
            }

            function I(e, t, r) {
                return t >>= 0, r = String(r || " "), e.length > t ? String(e) : (t -= e.length, t > r.length && (r += x(r, t / r.length)), r.slice(0, t) + String(e))
            }

            function S(e, t, r) {
                return t >>= 0, r = String(r || " "), e.length > t ? String(e) : (t -= e.length, t > r.length && (r += x(r, t / r.length)), String(e) + r.slice(0, t))
            }

            function L(e, t) {
                t = t || null;
                try {
                    return eval.call(t, e)
                } catch (e) {}
                return null
            }

            function H(e, t, r) {
                r = r || null;
                try {
                    return eval.call(r, e + "(" + t.join() + ")")
                } catch (e) {}
                return null
            }

            function _() {
                for (var e = Array.prototype.slice.call(arguments), t = e[0], r = 1; r < e.length; r++) Array.prototype.push.apply(t, e[r]);
                return t
            }
            var w = /\s([a-zA-Z]+)/,
                z = function(e, t) {
                    return e === t
                };
            return {
                randomSplice: f,
                shuffle: u,
                deepCopy: g,
                mergeObjects: b,
                mergeArrays: h,
                isArray: d,
                isEmpty: v,
                isInteger: o,
                isString: t,
                isNumeric: n,
                isRegex: c,
                isNumber: r,
                isBoolean: i,
                isFunction: s,
                isObject: p,
                isArraySubset: y,
                getType: e,
                tryCatchWrapper: m,
                arrayDelete: l,
                repeatString: x,
                padStart: I,
                padEnd: S,
                evalVariable: L,
                evalFunction: H,
                appendToArray: _
            }
        }()
    }, {}],
    23: [function(e, t, r) {
        "use strict";

        function a(e, t) {
            return new Error(e + ": " + t)
        }
        a.ErrorTokens = {
            MISSING_ARGUMENT: 1,
            INVALID_TYPE: 2,
            INVALID_VALUE: 3,
            MISSING_PROPERTY: 4,
            NUMBER_OUT_OF_RANGE: 5,
            EMPTY_ENTITY: 6,
            INTERNAL_ERROR: 7,
            DUPLICATE_ENTITY: 8,
            INVALID_ARGUMENT: 9,
            INVALID_CONFIG: 10
        }, t.exports = a
    }, {}],
    24: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t() {
                return r
            }
            var r;
            return function() {
                s.DeviceTypeChecker = n(e.DeviceTypeChecker);
                for (var t in e.htSlots)
                    if (e.htSlots.hasOwnProperty(t)) {
                        var a = o(t, e.htSlots[t]);
                        s.htSlots.push(a), s.htSlotsMap[t] = a
                    } r = {
                    Services: {},
                    Layers: {}
                };
                for (var l = 0; l < p.length; l++) {
                    var d = p[l].name,
                        f = p[l].constructor(e.Services[d]);
                    f && (s.services[d] = f, f.getDirectInterface && f.getDirectInterface() && (r.Services = i.mergeObjects(r.Services, f.getDirectInterface())))
                }
                for (var u, g = e.Layers.length - 1; g >= 0; g--) {
                    var b = e.Layers[g].layerId,
                        h = c[b](e.Layers[g].configs);
                    h.getDirectInterface() && (r.Layers = i.mergeObjects(r.Layers, h.getDirectInterface())), u && h.setNext(u.execute), u = h
                }
            }(), {
                getDirectInterface: t
            }
        }
        var n = e(11),
            o = e(17),
            s = e(43),
            i = e(22),
            p = (e(23), [{
                name: "EventsService",
                constructor: e(36)
            }, {
                name: "GptService",
                constructor: e(37)
            }, {
                name: "HeaderStatsService",
                constructor: e(38)
            }, {
                name: "TimerService",
                constructor: e(41)
            }, {
                name: "ComplianceService",
                constructor: e(40)
            }, {
                name: "RenderService",
                constructor: e(39)
            }]),
            c = {
                PartnersLayer: e(4),
                DirectBiddingLayer: e(1),
                IdentityLayer: e(2)
            };
        t.exports = a
    }, {}],
    25: [function(e, t, r) {
        "use strict";

        function a(e, t) {
            function r(e, r) {
                for (var a = 0; a < r.length; a++)
                    if (!r[a].pass && r[a].targeting && !s.isEmpty(r[a].targeting)) {
                        e && "slot" === r[a].targetingType && n.emit("hs_slot_kv_pushed", {
                            sessionId: e,
                            statsId: r[a].partnerStatsId,
                            htSlotId: r[a].htSlot.getId(),
                            requestId: r[a].requestId,
                            xSlotNames: [r[a].xSlotName]
                        });
                        var o, i = r[a].targeting;
                        for (var p in i)
                            if (i.hasOwnProperty(p))
                                if ("page" === r[a].targetingType) o = t.pageDemandHistory, o[p] = o[p] || {}, o[p] = !0, window.googletag.pubads().setTargeting(p, i[p]);
                                else {
                                    var c = r[a].ref,
                                        l = c.getSlotElementId();
                                    o = t.gSlotDemandHistory, o[l] = o[l] || {}, o[l][p] = !0, c.setTargeting(p, c.getTargeting(p).concat(i[p]))
                                }
                    }
            }
            return function() {
                n = o.services.EventsService, t.gSlotDemandHistory = t.gSlotDemandHistory || {}, t.pageDemandHistory = t.pageDemandHistory || {}
            }(), {
                setTargeting: r
            }
        }
        var n, o = (e(16), e(43)),
            s = e(22);
        e(23);
        t.exports = a
    }, {}],
    26: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var a = f.arrayToString(e[r]);
                    w.hasOwnProperty(a) && t.push(w[a])
                }
                return t
            }

            function r(e) {
                for (var t in w)
                    if (w.hasOwnProperty(t) && w[t] === Number(e)) return f.stringToArray(t)[0];
                return []
            }

            function a(e) {
                try {
                    return eval.call(null, e)
                } catch (e) {}
                return null
            }

            function h(e, t) {
                try {
                    return eval.call(null, e + "(" + t.join() + ")")
                } catch (e) {}
                return null
            }

            function v(e) {
                var t = {};
                if (e.vars) {
                    var r = e.vars;
                    for (var n in r)
                        if (r.hasOwnProperty(n)) {
                            t[n] = t[n] || [];
                            for (var o = 0; o < r[n].length; o++) {
                                var s = a(r[n][o]);
                                null !== s && "undefined" !== s && t[n].push(s)
                            }
                        }
                }
                if (e.strs) {
                    var i = e.strs;
                    for (var p in i)
                        if (i.hasOwnProperty(p)) {
                            t[p] = t[p] || [];
                            for (var c = 0; c < i[p].length; c++) t[p].push(i[p][c])
                        }
                }
                if (e.fns) {
                    var l = e.fns;
                    for (var d in l)
                        if (l.hasOwnProperty(d)) {
                            t[d] = t[d] || [];
                            var f = h(l[d].fn, l[d].args);
                            if (null !== f && "undefined" !== f)
                                if (b.isArray(f))
                                    for (var u = 0; u < f.length; u++) t[d].push(f[u]);
                                else t[d].push(f)
                        }
                }
                return t
            }

            function y(e) {
                var t = {};
                return e.inventory && (t.inventory = v(e.inventory)), e.visitor && (t.visitor = v(e.visitor)), e.position && (t.position = e.position), e.keywords && (b.isString(e.keywords) ? t.keywords = [e.keywords] : t.keywords = e.keywords), t
            }

            function m() {
                var t = e.digitrustId || function() {
                    var e, t;
                    if (i.isTopFrame()) t = window;
                    else try {
                        t = window.top
                    } catch (e) {
                        t = i.topWindow
                    }
                    try {
                        e = t.DigiTrust.getUser({
                            member: "T9QSFKPDN9"
                        })
                    } catch (e) {}
                    return e && e.success && e.identity || null
                }();
                return !t || t.privacy && t.privacy.optout ? {} : {
                    id: t.id,
                    keyv: t.keyv,
                    pref: 0
                }
            }

            function x(r) {
                var a = g.generateUniqueId(),
                    n = r[0],
                    o = {},
                    p = {};
                n.firstPartyData && n.firstPartyData.rubicon ? o = n.firstPartyData.rubicon : n.xSlotRef.slotFpd && (o = y(n.xSlotRef.slotFpd)), z ? p = z : e.partnerFpd && (p = y(e.partnerFpd));
                var c = t(n.xSlotRef.sizes),
                    l = i.getPageUrl(),
                    d = s.gdpr && s.gdpr.getConsent(),
                    f = s.isPrivacyEnabled(),
                    u = {
                        account_id: e.accountId,
                        size_id: c[0],
                        p_pos: o.position ? o.position : "btf",
                        rp_floor: .01,
                        rf: l || "",
                        p_screen_res: i.getScreenWidth() + "x" + i.getScreenHeight(),
                        site_id: n.xSlotRef.siteId,
                        zone_id: n.xSlotRef.zoneId,
                        kw: "rp.fastlane",
                        tk_flint: "index",
                        rand: Math.random(),
                        dt: m()
                    };
                d && f && "object" == typeof d && ("boolean" == typeof d.applies && (u.gdpr = Number(d.applies)), u.gdpr_consent = d.consentString);
                for (var b in p.inventory) p.inventory.hasOwnProperty(b) && (u["tg_i." + b] = p.inventory[b].toString());
                for (var h in o.inventory) o.inventory.hasOwnProperty(h) && (u.hasOwnProperty("tg_i." + h) ? u["tg_i." + h] += "," + o.inventory[h].toString() : u["tg_i." + h] = o.inventory[h].toString());
                for (var v in p.visitor) p.visitor.hasOwnProperty(v) && (u["tg_v." + v] = p.visitor[v].toString());
                for (var x in o.visitor) o.visitor.hasOwnProperty(x) && (u.hasOwnProperty("tg_v." + x) ? u["tg_v." + x] += "," + o.visitor[x].toString() : u["tg_v." + x] = o.visitor[x].toString());
                var I = [];
                return p.keywords && (I = I.concat(p.keywords)), o.keywords && (I = I.concat(o.keywords)), I.length > 0 && (u.kw += "," + I.toString()), c.length > 1 && (u.alt_size_ids = c.slice(1).join(",")), {
                    url: _,
                    data: u,
                    callbackId: a
                }
            }

            function I(e, t, a) {
                var s = {
                        sessionId: e,
                        statsId: H.statsId
                    },
                    i = !1,
                    p = t.ads || [];
                p.length || (a[0].pass = !0);
                for (var l = 0; l < p.length; l++) {
                    var d;
                    0 === l ? (d = a[0], s.htSlotId = d.htSlot.getId(), s.requestId = d.requestId, s.xSlotNames = [d.xSlotName]) : (d = {
                        partnerId: a[0].partnerId,
                        htSlot: a[0].htSlot,
                        ref: a[0].ref,
                        xSlotRef: a[0].xSlotRef,
                        xSlotName: a[0].xSlotName,
                        requestId: a[0].requestId
                    }, a.push(d));
                    var u = p[l].cpm || 0;
                    if ("ok" !== p[l].status || !b.isNumber(u) || u <= 0) d.pass = !0;
                    else {
                        i = !0;
                        var h = p[l].deal || "",
                            v = r(p[l].size_id),
                            y = '<html><head><script type="text/javascript">inDapIF=true;<\/script></head><body style="margin : 0; padding: 0;">\x3c!-- Rubicon Project Ad Tag --\x3e<div data-rp-impression-id="' + p[l].impression_id + '"><script type="text/javascript">' + p[l].script + "<\/script></div></body></html>";
                        d.size = v, d.targetingType = "slot", d.targeting = {};
                        var m = "";
                        if (m = L._bidTransformers.targeting.apply(u), L._configs.lineItemType === c.LineItemTypes.CUSTOM) {
                            if (p[l].targeting)
                                for (var x = p[l].targeting, I = 0; I < x.length; I++) d.targeting[x[I].key] = x[I].values;
                            d.targeting.rpfl_elemid = [d.requestId]
                        } else {
                            var S = f.arrayToString(d.size);
                            if (h && (d.targeting[L._configs.targetingKeys.pm] = [S + "_" + h], p[l].targeting))
                                for (var _ = p[l].targeting, w = 0; w < _.length; w++) d.targeting[_[w].key] = _[w].values;
                            p[l].hasOwnProperty("cpm") && (d.targeting[L._configs.targetingKeys.om] = [S + "_" + m]), d.targeting[L._configs.targetingKeys.id] = [d.requestId]
                        }
                        d.adm = y, d.price = Number(L._bidTransformers.price.apply(u));
                        o.registerAd({
                            sessionId: e,
                            partnerId: H.partnerId,
                            adm: y,
                            requestId: d.requestId,
                            size: d.size,
                            price: m || "",
                            dealId: h || "",
                            timeOfExpiry: H.features.demandExpiry.enabled ? H.features.demandExpiry.value + g.now() : 0
                        })
                    }
                }
                if (H.enabledAnalytics.requestTime) {
                    var z = "hs_slot_pass";
                    i ? z = "hs_slot_bid" : "ok" !== t.status && (z = "hs_slot_error"), n.emit(z, s)
                }
            }

            function S(e) {
                z = e
            }
            if (!l.isXhrSupported()) return null;
            var L, H, _, w, z;
            ! function() {
                n = u.services.EventsService, o = u.services.RenderService, s = u.services.ComplianceService, H = {
                    partnerId: "RubiconHtb",
                    namespace: "RubiconHtb",
                    statsId: "RUBI",
                    version: "2.1.4",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !1,
                            value: 0
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_rubi_id",
                        om: "ix_rubi_om",
                        pm: "ix_rubi_pm"
                    },
                    bidUnitInCents: 100,
                    lineItemType: c.LineItemTypes.ID_AND_SIZE,
                    callbackType: d.CallbackTypes.NONE,
                    architecture: d.Architectures.MRA,
                    requestType: d.RequestTypes.AJAX
                }, w = {
                    "468x60": 1,
                    "728x90": 2,
                    "120x600": 8,
                    "160x600": 9,
                    "300x600": 10,
                    "250x250": 14,
                    "300x250": 15,
                    "336x280": 16,
                    "300x100": 19,
                    "980x120": 31,
                    "250x360": 32,
                    "180x500": 33,
                    "980x150": 35,
                    "468x400": 37,
                    "930x180": 38,
                    "320x50": 43,
                    "300x50": 44,
                    "300x300": 48,
                    "300x1050": 54,
                    "970x90": 55,
                    "970x250": 57,
                    "1000x90": 58,
                    "320x80": 59,
                    "320x150": 60,
                    "1000x1000": 61,
                    "640x480": 65,
                    "320x480": 67,
                    "1800x1000": 68,
                    "320x320": 72,
                    "320x160": 73,
                    "980x240": 78,
                    "980x300": 79,
                    "980x400": 80,
                    "480x300": 83,
                    "970x310": 94,
                    "970x210": 96,
                    "480x320": 101,
                    "768x1024": 102,
                    "480x280": 103,
                    "320x240": 108,
                    "1000x300": 113,
                    "320x100": 117,
                    "800x250": 125,
                    "200x600": 126,
                    "320x250": 159,
                    "970x1000": 264,
                    "840x250": 158,
                    "840x150": 147
                }, _ = i.getProtocol() + "//fastlane.rubiconproject.com/a/api/fastlane.json", L = d(H, e, null, {
                    parseResponse: I,
                    generateRequestObj: x
                })
            }();
            var R = {
                setFirstPartyData: S
            };
            return p.derive(L, R)
        }
        var n, o, s, i = e(6),
            p = e(8),
            c = e(10),
            l = e(18),
            d = e(35),
            f = e(20),
            u = e(43),
            g = e(21),
            b = e(22);
        e(23);
        t.exports = a
    }, {}],
    27: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e, t) {
                if (!t.hasOwnProperty("seatbid")) return null;
                for (var r = 0; r < t.seatbid.length; r++)
                    for (var a = t.seatbid[r].bid, n = 0; n < a.length; n++)
                        if (e.xSlotRef.adSlotId === String(a[n].auid)) return a[n];
                return null
            }

            function r(e) {
                for (var t = {}, r = "_" + f.generateUniqueId(), a = n.gdpr.getConsent(), o = [], i = 0; i < e.length; i++) o.push(e[i].xSlotRef.adSlotId);
                return t.auids = o.join(","), t.u = s.getPageUrl(), t.pt = "net", t.cb = "window." + d.NAMESPACE + "." + v.namespace + ".adResponseCallbacks." + r, a && (a.consentString && (t.gdpr_consent = a.consentString), t.gdpr_applies = g.isBoolean(a.applies) ? Number(a.applies) : 1), d.globalTimeout && (t.wtimeout = d.globalTimeout), {
                    url: y,
                    data: t,
                    callbackId: r
                }
            }

            function a(e) {
                e && u.img({
                    url: decodeURIComponent(e),
                    method: "GET"
                })
            }

            function b(e, r, n) {
                for (var s = 0; s < n.length; s++) {
                    var i = n[s],
                        p = t(i, r),
                        c = {},
                        d = i.htSlot.getId();
                    if (c[d] = {}, c[d][i.requestId] = [i.xSlotName], p) {
                        var u = p.price,
                            g = [Number(p.w), Number(p.h)],
                            b = p.adm,
                            y = p.dealid;
                        if (u <= 0) v.enabledAnalytics.requestTime && h._emitStatsEvent(e, "hs_slot_pass", c), i.pass = !0;
                        else {
                            v.enabledAnalytics.requestTime && h._emitStatsEvent(e, "hs_slot_bid", c), i.size = g, i.targetingType = "slot", i.targeting = {};
                            var m = "";
                            m = h._bidTransformers.targeting.apply(u);
                            var x = l.arrayToString(i.size);
                            y ? (i.targeting[h._configs.targetingKeys.pmid] = [x + "_" + y], i.targeting[h._configs.targetingKeys.pm] = [x + "_" + m]) : i.targeting[h._configs.targetingKeys.om] = [x + "_" + m], i.targeting[h._configs.targetingKeys.id] = [i.requestId], i.adm = b, i.price = Number(h._bidTransformers.price.apply(u));
                            o.registerAd({
                                sessionId: e,
                                partnerId: v.partnerId,
                                adm: b,
                                requestId: i.requestId,
                                size: i.size,
                                price: m,
                                dealId: y,
                                timeOfExpiry: v.features.demandExpiry.enabled ? v.features.demandExpiry.value + f.now() : 0,
                                auxFn: a,
                                auxArgs: [""]
                            })
                        }
                    } else v.enabledAnalytics.requestTime && h._emitStatsEvent(e, "hs_slot_pass", c), i.pass = !0
                }
            }
            var h, v, y;
            ! function() {
                n = d.services.ComplianceService, o = d.services.RenderService, v = {
                    partnerId: "TrustXHtb",
                    namespace: "TrustXHtb",
                    statsId: "TRSTX",
                    version: "2.2.0",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !1,
                            value: 0
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_trstx_id",
                        om: "ix_trstx_cpm",
                        pm: "ix_trstx_cpm",
                        pmid: "ix_trstx_dealid"
                    },
                    bidUnitInCents: 100,
                    lineItemType: p.LineItemTypes.ID_AND_SIZE,
                    callbackType: c.CallbackTypes.CALLBACK_NAME,
                    architecture: c.Architectures.SRA,
                    requestType: c.RequestTypes.ANY
                }, y = s.getProtocol() + "//sofia.trustx.org/hb", h = c(v, e, null, {
                    parseResponse: b,
                    generateRequestObj: r
                })
            }();
            var m = {};
            return i.derive(h, m)
        }
        var n, o, s = e(6),
            i = e(8),
            p = e(10),
            c = e(35),
            l = e(20),
            d = e(43),
            f = e(21),
            u = e(18),
            g = e(22);
        t.exports = a
    }, {}],
    28: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                var t, r = "0";
                h = {
                    source: b,
                    uids: []
                };
                for (var a in e) e.hasOwnProperty(a) && ("TDID" === a && (t = e[a]), "TDID_LOOKUP" === a && (r = "TRUE" === e[a] ? "1" : "0"), h.uids.push({
                    id: e[a],
                    ext: {
                        rtiPartner: a
                    }
                }));
                t && (y = t + "," + r)
            }

            function r() {
                return f.statsId
            }

            function a() {
                return h
            }

            function l() {
                var e = {};
                return y && (e[f.targetingKeys.exchangeBidding] = y), e
            }

            function d() {
                return new p(function(e) {
                    var r = s.getData(v);
                    if (r) {
                        n.emit("hs_identity_cached", {
                            statsId: f.statsId
                        });
                        var a;
                        return "match" === r.response ? (a = "hs_identity_response", t(r.data)) : a = "pass" === r.response ? "hs_identity_pass" : "hs_identity_error", n.emit(a, {
                            statsId: f.statsId
                        }), void e()
                    }
                    n.emit("hs_identity_request", {
                        statsId: f.statsId
                    }), i.ajax({
                        url: u,
                        data: {
                            ttd_pid: "casale",
                            fmt: "json",
                            p: g
                        },
                        method: "GET",
                        withCredentials: !0,
                        onSuccess: function(r) {
                            var a;
                            try {
                                a = JSON.parse(r)
                            } catch (t) {
                                return n.emit("hs_identity_error", {
                                    statsId: f.statsId
                                }), s.setData(v, {
                                    response: "error"
                                }, f.features.identityDataExpiry.error), void e()
                            }
                            if (!a.hasOwnProperty("TDID")) return n.emit("hs_identity_error", {
                                statsId: f.statsId
                            }), s.setData(v, {
                                response: "error"
                            }, f.features.identityDataExpiry.error), void e();
                            n.emit("hs_identity_response", {
                                statsId: f.statsId
                            }), t(a), s.setData(v, {
                                response: "match",
                                data: a
                            }, f.features.identityDataExpiry.match), e()
                        },
                        onFailure: function(t) {
                            n.emit("hs_identity_error", {
                                statsId: f.statsId
                            }), s.setData(v, {
                                response: "error"
                            }, f.features.identityDataExpiry.error), e()
                        }
                    })
                })
            }
            if (!i.isXhrSupported()) return null;
            var f, u, g, b, h, v, y;
            return function() {
                n = c.services.EventsService, f = {
                    partnerId: "AdserverOrgIp",
                    statsId: "ADSORG",
                    version: "1.2.0",
                    features: {
                        identityDataExpiry: {
                            match: 6048e5,
                            pass: 864e5,
                            error: 864e5
                        }
                    },
                    targetingKeys: {
                        exchangeBidding: "ixpid_1"
                    }
                }, u = o.getProtocol() + "//match.adsrvr.org/track/rid", g = e.publisherId, b = "adserver.org", v = "AdserverOrgIp", h = null, y = ""
            }(), {
                getStatsId: r,
                getResults: a,
                getTargets: l,
                retrieve: d
            }
        }
        var n, o = e(6),
            s = e(7),
            i = e(18),
            p = e(14),
            c = e(43);
        e(23);
        t.exports = a
    }, {}],
    29: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                v = {
                    source: h,
                    uids: [{
                        id: e,
                        ext: {
                            rtiPartner: "idl"
                        }
                    }]
                }
            }

            function r() {
                return u.statsId
            }

            function a() {
                return v
            }

            function d() {
                var e = {};
                return v && (e[u.targetingKeys.exchangeBidding] = v.uids[0].id), e
            }

            function f() {
                return new p(function(e) {
                    var r = s.getData(y);
                    if (r) {
                        n.emit("hs_identity_cached", {
                            statsId: u.statsId
                        });
                        var a;
                        return "match" === r.response ? (a = "hs_identity_response", t(r.envelope)) : a = "pass" === r.response ? "hs_identity_pass" : "hs_identity_error", n.emit(a, {
                            statsId: u.statsId
                        }), void e()
                    }
                    n.emit("hs_identity_request", {
                        statsId: u.statsId
                    }), i.ajax({
                        url: g,
                        data: {
                            pid: b,
                            rt: "envelope"
                        },
                        method: "GET",
                        withCredentials: !0,
                        onSuccess: function(r) {
                            var a;
                            try {
                                a = JSON.parse(r)
                            } catch (t) {
                                return n.emit("hs_identity_error", {
                                    statsId: u.statsId
                                }), s.setData(y, {
                                    response: "error"
                                }, u.features.identityDataExpiry.error), void e()
                            }
                            return l.isEmpty(a) ? (n.emit("hs_identity_pass", {
                                statsId: u.statsId
                            }), s.setData(y, {
                                response: "pass"
                            }, u.features.identityDataExpiry.pass), void e()) : a.hasOwnProperty("envelope") ? l.isEmpty(a.envelope) ? (n.emit("hs_identity_pass", {
                                statsId: u.statsId
                            }), s.setData(y, {
                                response: "pass"
                            }, u.features.identityDataExpiry.pass), void e()) : (n.emit("hs_identity_response", {
                                statsId: u.statsId
                            }), t(a.envelope), s.setData(y, {
                                response: "match",
                                envelope: a.envelope
                            }, u.features.identityDataExpiry.match), void e()) : (n.emit("hs_identity_error", {
                                statsId: u.statsId
                            }), s.setData(y, {
                                response: "error"
                            }, u.features.identityDataExpiry.error), void e())
                        },
                        onFailure: function(t) {
                            204 === t ? (n.emit("hs_identity_pass", {
                                statsId: u.statsId
                            }), s.setData(y, {
                                response: "pass"
                            }, u.features.identityDataExpiry.pass)) : (n.emit("hs_identity_error", {
                                statsId: u.statsId
                            }), s.setData(y, {
                                response: "error"
                            }, u.features.identityDataExpiry.error)), e()
                        }
                    })
                })
            }
            if (!i.isXhrSupported()) return null;
            var u, g, b, h, v, y;
            return function() {
                n = c.services.EventsService, u = {
                    partnerId: "LiveRampIp",
                    statsId: "LVRAMP",
                    version: "1.1.0",
                    features: {
                        identityDataExpiry: {
                            match: 864e5,
                            pass: 864e5,
                            error: 864e5
                        }
                    },
                    targetingKeys: {
                        exchangeBidding: "ixpid_3"
                    }
                }, g = o.getProtocol() + "//api.rlcdn.com/api/identity", b = 2, h = "liveramp.com", y = "LiveRampIp", v = null
            }(), {
                getStatsId: r,
                getResults: a,
                getTargets: d,
                retrieve: f
            }
        }
        var n, o = e(6),
            s = e(7),
            i = e(18),
            p = e(14),
            c = e(43),
            l = (e(23), e(22));
        t.exports = a
    }, {}],
    30: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                v = {
                    source: h,
                    uids: [{
                        id: e
                    }]
                }
            }

            function r() {
                return f.statsId
            }

            function a() {
                return v
            }

            function l() {
                var e = {};
                return v && (e[f.targetingKeys.exchangeBidding] = v.uids[0].id), e
            }

            function d() {
                return new p(function(e) {
                    var r = s.getData(y);
                    if (r) {
                        n.emit("hs_identity_cached", {
                            statsId: f.statsId
                        });
                        var a;
                        return "match" === r.response ? (a = "hs_identity_response", t(r.ppid)) : a = "pass" === r.response ? "hs_identity_pass" : "hs_identity_error", n.emit(a, {
                            statsId: f.statsId
                        }), void e()
                    }
                    n.emit("hs_identity_request", {
                        statsId: f.statsId
                    }), i.ajax({
                        url: u,
                        data: {
                            ptk: b,
                            pubid: g
                        },
                        method: "GET",
                        withCredentials: !0,
                        onSuccess: function(r) {
                            var a;
                            try {
                                a = JSON.parse(r)
                            } catch (t) {
                                return n.emit("hs_identity_error", {
                                    statsId: f.statsId
                                }), s.setData(y, {
                                    response: "error"
                                }, f.features.identityDataExpiry.error), void e()
                            }
                            if (!a.hasOwnProperty("ppid")) return n.emit("hs_identity_pass", {
                                statsId: f.statsId
                            }), s.setData(y, {
                                response: "pass"
                            }, f.features.identityDataExpiry.pass), void e();
                            n.emit("hs_identity_response", {
                                statsId: f.statsId
                            }), t(a.ppid), s.setData(y, {
                                response: "match",
                                ppid: a.ppid
                            }, f.features.identityDataExpiry.match), e()
                        },
                        onFailure: function(t) {
                            404 === t ? (n.emit("hs_identity_pass", {
                                statsId: f.statsId
                            }), s.setData(y, {
                                response: "pass"
                            }, f.features.identityDataExpiry.pass)) : (n.emit("hs_identity_error", {
                                statsId: f.statsId
                            }), s.setData(y, {
                                response: "error"
                            }, f.features.identityDataExpiry.error)), e()
                        }
                    })
                })
            }
            if (!i.isXhrSupported()) return null;
            var f, u, g, b, h, v, y;
            return function() {
                n = c.services.EventsService, f = {
                    partnerId: "MerkleIp",
                    statsId: "MRKL",
                    version: "1.2.0",
                    features: {
                        identityDataExpiry: {
                            match: 6048e5,
                            pass: 864e5,
                            error: 864e5
                        }
                    },
                    targetingKeys: {
                        exchangeBidding: "ixpid_4"
                    }
                }, u = o.getProtocol() + "//mid.rkdms.com/ids", b = "17c1789b-e660-493b-aa74-3c8fb990dc5f", g = e.pubid, h = "merkleinc.com", y = "MerkleIp", v = null
            }(), {
                getStatsId: r,
                getResults: a,
                getTargets: l,
                retrieve: d
            }
        }
        var n, o = e(6),
            s = e(7),
            i = e(18),
            p = e(14),
            c = e(43);
        e(23);
        t.exports = a
    }, {}],
    31: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                var t = s.gdpr.getConsent();
                t && t.applies && (e.gdpr = 1, t.consentString && (e.euconsent = t.consentString))
            }

            function r(e) {
                var r = e[0],
                    a = r.xSlotRef,
                    n = "_" + g.generateUniqueId(),
                    o = a.sizeId || "-1",
                    i = a.pageId || "0",
                    p = {
                        cmd: "bid",
                        cors: "yes",
                        v: "2",
                        misc: g.now(),
                        callback: "window." + u.NAMESPACE + "." + y.namespace + ".adResponseCallbacks." + n
                    };
                a.bidFloor && (p.bidFloor = a.bidFloor), s.isPrivacyEnabled() && t(p);
                var c = b.buildUrl(m, [a.placementId, i, o, "ADTECH;"]);
                for (var l in p) p.hasOwnProperty(l) && (c += l + "=" + p[l] + ";");
                return {
                    url: c,
                    callbackId: n
                }
            }

            function a(e) {
                if (e) {
                    var t = i.createHiddenIFrame();
                    g.documentWrite(t.contentDocument, e)
                }
            }

            function h(e, t, r) {
                var s = r[0],
                    i = {
                        sessionId: e,
                        statsId: y.statsId,
                        htSlotId: s.htSlot.getId(),
                        requestId: s.requestId,
                        xSlotNames: [s.xSlotName]
                    },
                    p = l.BidResponse(t),
                    c = p.getBids()[0];
                if (c && !c.hasOwnProperty("nbr")) {
                    var d = c.price;
                    if (0 === Number(d)) return y.enabledAnalytics.requestTime && n.emit("hs_slot_pass", i), void(s.pass = !0);
                    y.enabledAnalytics.requestTime && n.emit("hs_slot_bid", i);
                    var u, b = c.adm,
                        h = [Number(c.w), Number(c.h)],
                        m = c.hasOwnProperty("dealid") ? c.dealid : null;
                    t.hasOwnProperty("ext") && (u = t.ext.pixels || ""), s.targetingType = "slot", s.targeting = {}, s.size = h;
                    var x = "",
                        I = f.arrayToString(h);
                    x = v._bidTransformers.targeting.apply(d), m && (s.targeting[v._configs.targetingKeys.pm] = [I + "_" + m]), s.targeting[v._configs.targetingKeys.om] = [I + "_" + x], s.targeting[v._configs.targetingKeys.id] = [s.requestId], s.adm = b, u && (s.winNotice = a.bind(null, u)), s.price = Number(v._bidTransformers.price.apply(d));
                    o.registerAd({
                        sessionId: e,
                        partnerId: y.partnerId,
                        adm: b,
                        requestId: s.requestId,
                        size: s.size,
                        price: x || void 0,
                        dealId: m || void 0,
                        timeOfExpiry: y.features.demandExpiry.enabled ? y.features.demandExpiry.value + g.now() : 0,
                        auxFn: a,
                        auxArgs: [u]
                    })
                } else y.enabledAnalytics.requestTime && n.emit("hs_slot_pass", i), s.pass = !0
            }
            var v, y, m;
            ! function() {
                n = u.services.EventsService, o = u.services.RenderService, s = u.services.ComplianceService, y = {
                    partnerId: "AolHtb",
                    namespace: "AolHtb",
                    statsId: "AOL",
                    version: "2.1.2",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !1,
                            value: 0
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        om: "ix_aol_om",
                        pm: "ix_aol_pm",
                        id: "ix_aol_id"
                    },
                    bidUnitInCents: 100,
                    lineItemType: c.LineItemTypes.ID_AND_SIZE,
                    callbackType: d.CallbackTypes.CALLBACK_NAME,
                    architecture: d.Architectures.MRA,
                    requestType: d.RequestTypes.ANY
                };
                var t = {
                    eu: "//adserver-eu.adtech.advertising.com",
                    na: "//adserver-us.adtech.advertising.com",
                    asia: "//adserver-as.adtech.advertising.com"
                };
                m = i.getProtocol() + t[e.region] + "/pubapi/3.0/" + e.networkId, v = d(y, e, null, {
                    parseResponse: h,
                    generateRequestObj: r
                })
            }();
            var x = {};
            return p.derive(v, x)
        }
        var n, o, s, i = e(6),
            p = e(8),
            c = e(10),
            l = e(19),
            d = e(35),
            f = e(20),
            u = e(43),
            g = e(21),
            b = e(18);
        e(23);
        t.exports = a
    }, {}],
    32: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var a = e[r].xSlotRef.zoneId;
                    g.isNumeric(a) && t.push(new window.Criteo.PubTag.DirectBidding.DirectBiddingSlot(e[r].htSlot.getName(), Number(a)))
                }
                return t
            }

            function r(e, t, r, a) {
                var s = r.slice();
                if (t.slots && g.isArray(t.slots))
                    for (var i = 0; i < t.slots.length; i++) {
                        for (var p, c = t.slots[i], l = s.length - 1; l >= 0; l--)
                            if (s[l].htSlot.getName() === c.impid && s[l].xSlotRef.zoneId === String(c.zoneid)) {
                                p = s[l], s.splice(l, 1);
                                break
                            } if (p) {
                            if (x.enabledAnalytics.requestTime) {
                                var f = p.htSlot.getId();
                                n.emit("hs_slot_bid", {
                                    sessionId: e,
                                    statsId: x.statsId,
                                    htSlotId: f,
                                    requestId: p.requestId,
                                    xSlotNames: [p.xSlotName]
                                }), a[f] && a[f][p.requestId] && g.arrayDelete(a[f][p.requestId], p.xSlotName)
                            }
                            var b = Number(c.cpm);
                            if (!g.isNumber(b) || b <= 0) p.pass = !0;
                            else if (c.hasOwnProperty("creative") && c.hasOwnProperty("width") && c.hasOwnProperty("height")) {
                                p.size = [c.width, c.height], p.targetingType = "slot", p.targeting = {};
                                var h = "",
                                    v = d.arrayToString(p.size);
                                h = m._bidTransformers.targeting.apply(b), p.targeting[m._configs.targetingKeys.om] = [v + "_" + h], p.targeting[m._configs.targetingKeys.id] = [p.requestId], p.adm = c.creative, p.price = Number(m._bidTransformers.price.apply(b));
                                o.registerAd({
                                    sessionId: e,
                                    partnerId: x.partnerId,
                                    adm: c.creative,
                                    requestId: p.requestId,
                                    size: p.size,
                                    price: h,
                                    timeOfExpiry: x.features.demandExpiry.enabled ? x.features.demandExpiry.value + u.now() : 0
                                })
                            }
                        }
                    }
                x.enabledAnalytics.requestTime && m._emitStatsEvent(e, "hs_slot_pass", a);
                for (var y = 0; y < s.length; y++) s[y].pass = !0
            }

            function a(e, t, a, o, s, i, p) {
                var c = "success";
                if (!I.hasOwnProperty(t)) return void i.resolve(a);
                clearTimeout(I[t]), delete I[t];
                try {
                    r(e, JSON.parse(p), a, o)
                } catch (e) {
                    n.emit("internal_error", x.partnerId + " error parsing demand: " + e, e.stack), c = "error"
                }
                n.emit("partner_request_complete", {
                    partner: x.partnerId,
                    status: c
                }), i.resolve(a)
            }

            function b(e, t, r, a, o, s) {
                if (!I.hasOwnProperty(t)) return void s.resolve(r);
                clearTimeout(I[t]), delete I[t], n.emit("partner_request_complete", {
                    partner: x.partnerId,
                    status: "timeout"
                }), x.enabledAnalytics.requestTime && m._emitStatsEvent(e, "hs_slot_timeout", a), s.resolve(r)
            }

            function h(e, t, r, a, o, s, i, p) {
                var c = "error";
                if (204 === p) {
                    c = "success";
                    for (var l = 0; l < r.length; l++) r[l].pass = !0
                }
                if (!I.hasOwnProperty(t)) return void s.resolve(r);
                clearTimeout(I[t]), delete I[t], n.emit("partner_request_complete", {
                    partner: x.partnerId,
                    status: c
                }), x.enabledAnalytics.requestTime && m._emitStatsEvent(e, "error" === c ? "hs_slot_error" : "hs_slot_pass", a), s.resolve(r)
            }

            function v(r, n) {
                if (0 === n.length) return c.resolve([]);
                var o = c.defer(),
                    s = {};
                if (x.enabledAnalytics.requestTime)
                    for (var i = 0; i < n.length; i++) {
                        var p = n[i],
                            l = p.htSlot.getId(),
                            d = p.requestId;
                        s.hasOwnProperty(l) || (s[l] = {}), s[l].hasOwnProperty(d) || (s[l][d] = []), s[l][d].push(p.xSlotName)
                    }
                return window.Criteo.events.push(function() {
                    x.enabledAnalytics.requestTime && m._emitStatsEvent(r, "hs_slot_request", s);
                    var i = "_" + u.generateUniqueId(),
                        p = t(n);
                    if (0 === p.length) return c.resolve([]);
                    var l = a.bind(null, r, i, n, s, p, o),
                        d = b.bind(null, r, i, n, s, p, o),
                        g = h.bind(null, r, i, n, s, p, o),
                        v = new window.Criteo.PubTag.DirectBidding.DirectBiddingUrlBuilder(!1),
                        y = new window.Criteo.PubTag.DirectBidding.DirectBiddingEvent(S, v, p, l, g, d);
                    I[i] = e.timeout ? setTimeout(d, e.timeout) : null, f.services.TimerService.addTimerCallback(r, d), window.criteo_pubtag.push(y)
                }), o.promise
            }

            function y(e, t) {
                for (var r = m._generateReturnParcels(t), a = [], n = 0; n < r.length; n++) a.push(v(e, r[n]));
                return a
            }
            var m, x, I, S;
            ! function() {
                n = f.services.EventsService, o = f.services.RenderService, x = {
                    partnerId: "CriteoHtb",
                    namespace: "CriteoHtb",
                    statsId: "CRTB",
                    version: "2.1.0",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !1,
                            value: 0
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_cdb_id",
                        om: "ix_cdb_om"
                    },
                    bidUnitInCents: 100,
                    lineItemType: p.LineItemTypes.ID_AND_SIZE,
                    callbackType: l.CallbackTypes.ID,
                    architecture: l.Architectures.SRA,
                    requestType: l.RequestTypes.ANY
                }, I = {}, S = 154, window.Criteo = window.Criteo || {}, window.Criteo.events = window.Criteo.events || [];
                var t = s.getProtocol() + "//static.criteo.net/js/ld/publishertag.js";
                m = l(x, e, [t], {
                    retriever: y
                })
            }();
            var L = {};
            return i.derive(m, L)
        }
        var n, o, s = e(6),
            i = e(8),
            p = e(10),
            c = e(14),
            l = e(35),
            d = e(20),
            f = e(43),
            u = e(21),
            g = e(22);
        e(23);
        t.exports = a
    }, {}],
    33: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                for (var t = {
                        sdk: "5.5.web",
                        placementids: [],
                        adformats: [],
                        cachebuster: f.generateUniqueId(56, "ALPHANUM"),
                        platform: "2061185240785516",
                        adapterver: a
                    }, r = 0; r < e.length; r++)
                    if (e[r].hasOwnProperty("xSlotRef")) {
                        var n = e[r].xSlotRef,
                            o = l.arrayToString(n.size);
                        t.placementids.push(n.placementId), t.adformats.push(n.adFormat ? n.adFormat : o), e[r].size = n.size, e[r].adFormat = n.adFormat
                    } return {
                    url: h,
                    data: t
                }
            }

            function r(t, r, a, s) {
                if (!r.bids) return void g._emitStatsEvent(t, "hs_slot_error", s);
                var i = a.slice();
                for (var p in r.bids)
                    if (r.bids.hasOwnProperty(p))
                        for (var c = r.bids[p], d = 0; d < c.length; d++) {
                            var h = c[d];
                            if (h.hasOwnProperty("bid_id") && h.hasOwnProperty("bid_price_cents")) {
                                for (var y, m = i.length - 1; m >= 0; m--)
                                    if (i[m].xSlotRef.placementId === h.placement_id) {
                                        y = i[m], i.splice(m, 1);
                                        break
                                    } if (y)
                                    if (h.bid_price_cents <= 0) y.pass = !0;
                                    else {
                                        if (b.enabledAnalytics.requestTime) {
                                            var x = y.htSlot.getId();
                                            n.emit("hs_slot_bid", {
                                                sessionId: t,
                                                statsId: b.statsId,
                                                htSlotId: x,
                                                requestId: y.requestId,
                                                xSlotNames: [y.xSlotName]
                                            }), s[x] && s[x][y.requestId] && u.arrayDelete(s[x][y.requestId], y.xSlotName)
                                        }
                                        var I = l.arrayToString(y.size),
                                            S = y.adFormat ? y.adFormat : I,
                                            L = "fullwidth" !== y.adFormat ? "" : v.scriptTag,
                                            H = "fullwidth" !== y.adFormat ? "" : v.domElements,
                                            _ = "native" !== y.adFormat ? "" : e.nativeAssets,
                                            w = "<html><head>" + L + '</head><body><div style="display:none;position:relative;"><script>var data = {placementid:"' + h.placement_id + '",format:"' + S + '",bidid:"' + h.bid_id + '",onAdLoaded:function(e){e.style.display = "block";},onAdError:function(c,m){console.log("Audience Network [' + h.placement_id + '] error (" + c + ") " + m);}};(function(a,b,c){var d="https://www.facebook.com",e="https://connect.facebook.net/en_US/fbadnw55.js",f={iframeLoaded:true,xhrLoaded:true},g=5,h=a.data,i=0,j=function(ea){if(ea==null)throw new Error();return ea;},k=function(ea){if(ea instanceof HTMLElement)return ea;throw new Error();},l=function(){if(Date.now){return Date.now();}else return +new Date();},m=function(ea){if(++i>g)return;var fa=d+"/audience_network/client_event",ga={cb:l(),event_name:"ADNW_ADERROR",ad_pivot_type:"audience_network_mobile_web",sdk_version:"5.5.web",app_id:h.placementid.split("_")[0],publisher_id:h.placementid.split("_")[1],error_message:ea},ha=[];for(var ia in ga)ha.push(encodeURIComponent(ia)+"="+encodeURIComponent(ga[ia]));var ja=fa+"?"+ha.join("&"),ka=new XMLHttpRequest();ka.open("GET",ja,true);ka.send();},n=function(){if(b.currentScript){return b.currentScript;}else{var ea=b.getElementsByTagName("script");return ea[ea.length-1];}},o=function(ea){try{return ea.document.referrer;}catch(fa){}return "";},p=function(){var ea=a;try{while(ea!=ea.parent){ea.parent.origin;ea=ea.parent;}}catch(fa){}return ea;},q=function(ea){var fa=ea.indexOf("/",ea.indexOf("://")+3);if(fa===-1)return ea;return ea.substring(0,fa);},r=function(ea){return ea.location.href||o(ea);},s=function(ea,fa){if(ea.sdkLoaded)return;var ga=fa.createElement("iframe");ga.name="fbadnw";ga.style.display="none";j(fa.body).appendChild(ga);ga.contentWindow.addEventListener("error",function(event){m(event.message);},false);var ha=ga.contentDocument.createElement("script");ha.src=e;ha.async=true;j(ga.contentDocument.body).appendChild(ha);ea.sdkLoaded=true;},t=function(ea){var fa=/^https?:\\/\\/www\\.google(\\.com?)?.\\w{2,3}$/;return !!ea.match(fa);},u=function(ea){return ea.endsWith("cdn.ampproject.org");},v=function(){var ea=c.ancestorOrigins||[],fa=ea[ea.length-1]||c.origin,ga=ea[ea.length-2]||c.origin;if(t(fa)&&u(ga)){return q(ga);}else return q(fa);},w=function(ea){try{return JSON.parse(ea);}catch(fa){m(fa.message);return null;}},x=function(ea,fa,ga){if(!ea.iframe){var ha=ga.createElement("iframe");ha.src=d+"/audiencenetwork/iframe/";ha.style.display="none";j(ga.body).appendChild(ha);ea.iframe=ha;ea.iframeAppendedTime=l();ea.iframeData={};}fa.iframe=j(ea.iframe);fa.iframeData=ea.iframeData;fa.tagJsIframeAppendedTime=ea.iframeAppendedTime||0;},y=function(ea){var fa=d+"/audiencenetwork/xhr/?sdk=5.5.web";for(var ga in ea)if(typeof ea[ga]!=="function")fa+="&"+ga+"="+encodeURIComponent(ea[ga]);var ha=new XMLHttpRequest();ha.open("GET",fa,true);ha.withCredentials=true;ha.onreadystatechange=function(){if(ha.readyState===4){var ia=w(ha.response);if(ia)ea.events.push({name:"xhrLoaded",source:ea.iframe.contentWindow,data:ia,postMessageTimestamp:l(),receivedTimestamp:l()});}};ha.send();},z=function(ea,fa){var ga=d+"/audiencenetwork/xhriframe/?sdk=5.5.web";for(var ha in fa)if(typeof fa[ha]!=="function")ga+="&"+ha+"="+encodeURIComponent(fa[ha]);var ia=b.createElement("iframe");ia.src=ga;ia.style.display="none";j(b.body).appendChild(ia);fa.iframe=ia;fa.iframeData={};fa.tagJsIframeAppendedTime=l();},aa=function(ea){var fa=function(event){try{var ia=event.data;if(ia.name in f)ea.events.push({name:ia.name,source:event.source,data:ia.data});}catch(ha){}},ga=j(ea.iframe).contentWindow.parent;ga.addEventListener("message",fa,false);},ba=function(ea){if(ea.context)return true;try{return !!JSON.parse(decodeURI(ea.name)).ampcontextVersion;}catch(fa){return false;}},ca=function(ea){var fa=l(),ga=p(),ha=k(n().parentElement),ia=ga!=a.top,ja=ga.$sf&&ga.$sf.ext,ka=r(ga);ga.ADNW=ga.ADNW||{};ga.ADNW.v55=ga.ADNW.v55||{ads:[]};var la=ga.ADNW.v55;s(la,ga.document);var ma={amp:ba(ga),events:[],tagJsInitTime:fa,rootElement:ha,iframe:null,tagJsIframeAppendedTime:la.iframeAppendedTime||0,url:ka,domain:v(),channel:q(r(ga)),width:screen.width,height:screen.height,pixelratio:a.devicePixelRatio,placementindex:la.ads.length,crossdomain:ia,safeframe:!!ja,placementid:h.placementid,format:h.format||"300x250",testmode:!!h.testmode,onAdLoaded:h.onAdLoaded,onAdError:h.onAdError};if(h.bidid)ma.bidid=h.bidid;if(ia){z(la,ma);}else{x(la,ma,ga.document);y(ma);}aa(ma);ma.rootElement.dataset.placementid=ma.placementid;la.ads.push(ma);};try{ca();}catch(da){m(da.message||da);throw da;}})(window,document,location);<\/script>' + H + _ + "</div></body></html>";
                                        y.targetingType = "slot", y.targeting = {};
                                        var z = "";
                                        z = g._bidTransformers.targeting.apply(h.bid_price_cents), y.targeting[g._configs.targetingKeys.om] = [I + "_" + z], y.targeting[g._configs.targetingKeys.id] = [y.requestId], y.adm = w, y.price = Number(g._bidTransformers.price.apply(h.bid_price_cents));
                                        o.registerAd({
                                            sessionId: t,
                                            partnerId: b.partnerId,
                                            adm: w,
                                            requestId: y.requestId,
                                            size: y.size,
                                            price: z,
                                            timeOfExpiry: b.features.demandExpiry.enabled ? b.features.demandExpiry.value + f.now() : 0
                                        })
                                    }
                            }
                        }
                for (var R = 0; R < i.length; R++) i[R].pass = !0;
                b.enabledAnalytics.requestTime && g._emitStatsEvent(t, "hs_slot_pass", s)
            }
            var a = "2.1.0";
            if (!p.isXhrSupported()) return null;
            var g, b, h, v;
            ! function() {
                n = d.services.EventsService, o = d.services.RenderService, b = {
                    partnerId: "FacebookHtb",
                    namespace: "FacebookHtb",
                    statsId: "FB",
                    version: a,
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !1,
                            value: 0
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_fb_id",
                        om: "ix_fb_om"
                    },
                    bidUnitInCents: 1,
                    lineItemType: i.LineItemTypes.ID_AND_SIZE,
                    callbackType: c.CallbackTypes.NONE,
                    architecture: c.Architectures.SRA,
                    requestType: c.RequestTypes.AJAX
                }, h = "https://an.facebook.com/v2/placementbid.json", v = {
                    scriptTag: '<script type="text/javascript">  window.onload = function() {      if (parent) {          var oHead = document.getElementsByTagName("head")[0];          var arrStyleSheets = parent.document.getElementsByTagName("style");          for (var i = 0; i < arrStyleSheets.length; i++)              oHead.appendChild(arrStyleSheets[i].cloneNode(true));      }  }<\/script>',
                    domElements: '<div class="thirdPartyRoot">    <a class="fbAdLink">        <div class="fbAdMedia thirdPartyMediaClass"></div>        <div class="fbAdSubtitle thirdPartySubtitleClass"></div>        <div class="fbDefaultNativeAdWrapper">            <div class="fbAdCallToAction thirdPartyCallToActionClass"></div>            <div class="fbAdTitle thirdPartyTitleClass"></div>        </div>    </a></div>'
                }, g = c(b, e, null, {
                    parseResponse: r,
                    generateRequestObj: t
                })
            }();
            var y = {
                __type__: "FacebookHtb",
                __baseClass: g,
                profile: b,
                parseResponse: r,
                generateRequestObj: t
            };
            return s.derive(g, y)
        }
        var n, o, s = e(8),
            i = e(10),
            p = e(18),
            c = e(35),
            l = e(20),
            d = e(43),
            f = e(21),
            u = e(22);
        e(23);
        t.exports = a
    }, {}],
    34: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(t) {
                var r = {
                        v: 7.2,
                        s: e.siteId,
                        fn: m
                    },
                    a = l.BidRequest(),
                    n = i.isTopFrame() ? 1 : 0;
                a.setPage(i.getPageUrl()), b.isString(document.referrer) && "" !== document.referrer && a.setRef(document.referrer), a.setExt({
                    source: "ixwrapper"
                });
                for (var o = 0; o < t.length; o++)
                    if (t[o].hasOwnProperty("xSlotRef")) {
                        var p = t[o].xSlotRef;
                        if (p) {
                            t[o].size = p.size;
                            var c = {
                                    w: p.size[0],
                                    h: p.size[1],
                                    topframe: n
                                },
                                d = {
                                    sid: t[o].xSlotName,
                                    siteID: p.siteId
                                };
                            t[o].ixImpId = a.addImp(c, d, e.bidFloor, e.bidFloorCur)
                        }
                    } if (t[0].identityData)
                    for (var f in t[0].identityData) t[0].identityData.hasOwnProperty(f) && t[0].identityData[f].data && a.addUserEid(t[0].identityData[f].data);
                if (s.isPrivacyEnabled()) {
                    var u = s.gdpr.getConsent();
                    a.setGdprConsent(u.applies, u.consentString)
                }
                return r.r = a.stringify(), {
                    url: y,
                    data: r,
                    callbackId: a.getId()
                }
            }

            function r(e) {
                try {
                    var t = l.BidResponse(e),
                        r = t.getId();
                    h._adResponseStore[r] = t
                } catch (e) {
                    n.emit("internal_error", 'Error occurred while saving response for "' + v.partnerId + '".', e.stack)
                }
            }

            function a(t, r, a, s) {
                var i = r.getExt();
                if (e.hasOwnProperty("asedge") && i && i.akamaiDebugInfo) {
                    var p = y.replace(/^https?\:\/\/|\/cygnus/g, ""),
                        l = {
                            sessionId: t,
                            hostname: p
                        };
                    void 0 !== i.akamaiDebugInfo.akamaiPresent && (l.akamaiPresent = i.akamaiDebugInfo.akamaiPresent.toString()), void 0 !== i.akamaiDebugInfo.requestHost && (l.requestHost = i.akamaiDebugInfo.requestHost.toString()), n.emit("hs_akamai_debug", l)
                }
                for (var d = r.getBids(), u = a.slice(), m = 0; m < d.length; m++) {
                    for (var x, I = u.length - 1; I >= 0; I--)
                        if (u[I].ixImpId === d[m].impid) {
                            x = u[I], u.splice(I, 1);
                            break
                        } if (x) {
                        var S = x.htSlot.getId();
                        if (d[m].hasOwnProperty("price") || d[m].ext && d[m].ext.hasOwnProperty("dealid")) {
                            var L = d[m].price;
                            v.enabledAnalytics.requestTime && (n.emit("hs_slot_bid", {
                                sessionId: t,
                                statsId: v.statsId,
                                htSlotId: S,
                                requestId: x.requestId,
                                xSlotNames: [x.xSlotName]
                            }), s[S] && s[S][x.requestId] && b.arrayDelete(s[S][x.requestId], x.xSlotName));
                            var H;
                            d[m].ext && b.isString(d[m].ext.dealid) && !b.isEmpty(d[m].ext.dealid) && (H = d[m].ext.dealid);
                            var _ = d[m].adm;
                            x.targetingType = "slot", x.targeting = {};
                            var w = "";
                            x.adm = _, b.isNumeric(L) && (x.price = Number(h._bidTransformers.price.apply(L))), w = b.isNumeric(L) ? h._bidTransformers.targeting.apply(L) : L;
                            var z = h._configs.targetingKeys.pm,
                                R = h._configs.targetingKeys.pmid,
                                T = h._configs.targetingKeys.om,
                                E = h._configs.targetingKeys.id;
                            if (h._configs.lineItemType !== c.LineItemTypes.CUSTOM) {
                                var A = f.arrayToString(x.size);
                                H ? (x.targeting[R] = [A + "_" + H], b.isString(w) && !b.isEmpty(w) && (x.targeting[z] = [A + "_" + w])) : x.targeting[T] = [A + "_" + w], x.targeting[E] = [x.requestId];
                                o.registerAd({
                                    sessionId: t,
                                    partnerId: v.partnerId,
                                    adm: _,
                                    requestId: x.requestId,
                                    size: x.size,
                                    price: w,
                                    dealId: H,
                                    timeOfExpiry: v.features.demandExpiry.enabled ? v.features.demandExpiry.value + g.now() : 0
                                })
                            } else {
                                var C = x.xSlotName;
                                H ? (x.targeting[z] = [C + "_" + H], b.isString(w) && !b.isEmpty(w) && x.targeting[z].push(C + "_" + w)) : x.targeting[T] = [C + "_" + w], o.registerIndexLegacyAd(t, v.partnerId, _, v.features.demandExpiry.enabled ? v.features.demandExpiry.value + g.now() : 0, H || w, C)
                            }
                        }
                    }
                }
                v.enabledAnalytics.requestTime && h._emitStatsEvent(t, "hs_slot_pass", s)
            }
            var h, v, y, m;
            ! function() {
                n = u.services.EventsService, o = u.services.RenderService, s = u.services.ComplianceService, v = {
                    partnerId: "IndexExchangeHtb",
                    namespace: "IndexExchangeHtb",
                    statsId: "INDX",
                    version: "2.4.0",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !0,
                            value: 45e3
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_id",
                        om: "IOM",
                        pm: "IPM",
                        pmid: "IPMID"
                    },
                    bidUnitInCents: 1,
                    lineItemType: c.LineItemTypes.ID_AND_SIZE,
                    callbackType: d.CallbackTypes.ID,
                    architecture: d.Architectures.FSRA,
                    requestType: d.RequestTypes.ANY
                }, y = e.hasOwnProperty("asedge") ? i.getProtocol("http://ht-lb", "https://ht-lb-sec") + ".casalemedia.com/cygnus" : i.getProtocol("http://as", "https://as-sec") + ".casalemedia.com/cygnus", m = u.NAMESPACE + "." + v.namespace + ".adResponseCallback", h = d(v, e, null, {
                    parseResponse: a,
                    generateRequestObj: t,
                    adResponseCallback: r
                }), window[u.NAMESPACE] && (window[u.NAMESPACE][v.namespace] = window[u.NAMESPACE][v.namespace] || {}, window[u.NAMESPACE][v.namespace].adResponseCallback = r)
            }();
            var x = {};
            return p.derive(h, x)
        }
        var n, o, s, i = e(6),
            p = e(8),
            c = e(10),
            l = e(19),
            d = e(35),
            f = e(20),
            u = e(43),
            g = e(21),
            b = e(22);
        e(23);
        t.exports = a
    }, {}],
    35: [function(e, t, r) {
        "use strict";

        function a(e, t, r, g) {
            function b(e) {
                return function(t) {
                    M[e] = t, delete F[e]
                }
            }

            function h(e, t, r) {
                for (var a in r)
                    if (r.hasOwnProperty(a))
                        for (var o in r[a]) r[a].hasOwnProperty(o) && r[a][o].length && n.emit(t, {
                            sessionId: e,
                            statsId: R.statsId,
                            htSlotId: a,
                            requestId: o,
                            xSlotNames: r[a][o]
                        })
            }

            function v(e, r) {
                var a = {};
                return "price" === e && (a = {
                    outputCentsDivisor: 1,
                    outputPrecision: 0,
                    roundingType: "NONE"
                }), u.mergeObjects(N[e], {
                    bidUnitInCents: R.bidUnitInCents
                }, r || {}, t.bidTransformer || {}, a)
            }

            function y(e) {
                var t = [];
                R.architecture === a.Architectures.FSRA && t.push([]);
                for (var r = {}, n = 0; n < e.length; n++) {
                    var o = e[n].htSlot.getName();
                    if (k.mapping.hasOwnProperty(o))
                        for (var s = "_" + f.generateUniqueId(), i = 0; i < k.mapping[o].length; i++) {
                            var p = {},
                                c = k.mapping[o][i];
                            p.partnerId = R.partnerId, p.partnerStatsId = R.statsId, p.htSlot = e[n].htSlot, p.ref = e[n].ref, p.xSlotRef = k.xSlots[c], p.xSlotName = c, p.requestId = s, e[n].firstPartyData && (p.firstPartyData = e[n].firstPartyData), e[n].identityData && (p.identityData = e[n].identityData), R.architecture === a.Architectures.MRA ? t.push([p]) : R.architecture === a.Architectures.FSRA ? t[0].push(p) : (r.hasOwnProperty(c) || (r[c] = 0), t.length < r[c] + 1 && t.push([]), t[r[c]].push(p), r[c]++)
                        }
                }
                return t
            }

            function m(e, t) {
                if (0 === t.length) return l.resolve([]);
                var r = O(t, e);
                if (u.isEmpty(r)) return l.resolve([]);
                R.callbackType === a.CallbackTypes.CALLBACK_NAME && (F[r.callbackId] = b(r.callbackId));
                var o = {};
                if (R.enabledAnalytics.requestTime) {
                    for (var s = 0; s < t.length; s++) {
                        var i = t[s],
                            p = i.htSlot.getId(),
                            d = i.requestId;
                        o.hasOwnProperty(p) || (o[p] = {}), o[p].hasOwnProperty(d) || (o[p][d] = []), o[p][d].push(i.xSlotName)
                    }
                    h(e, "hs_slot_request", o)
                }
                return new l(function(s) {
                    n.emit("partner_request_sent", {
                        partner: R.partnerId
                    });
                    var i, p, l = {
                        url: r.url,
                        data: r.data,
                        method: "GET",
                        timeout: k.timeout,
                        withCredentials: !0,
                        jsonp: !0,
                        sessionId: e,
                        globalTimeout: !0,
                        continueAfterTimeout: !0,
                        onSuccess: function(p, c, l) {
                            var d, f = "success";
                            try {
                                R.callbackType === a.CallbackTypes.NONE ? d = JSON.parse(p) : (p && eval.call(null, p), d = M[r.callbackId], delete M[r.callbackId]), l && !R.parseAfterTimeout || D(e, d, t, o, i, c, l)
                            } catch (t) {
                                n.emit("internal_error", R.partnerId + " error parsing demand: " + t, t.stack), f = "error", R.enabledAnalytics.requestTime && !l && h(e, "hs_slot_error", o)
                            }
                            n.emit("partner_request_complete", {
                                partner: R.partnerId,
                                status: f
                            }), s(t)
                        },
                        onTimeout: function() {
                            n.emit("partner_request_complete", {
                                partner: R.partnerId,
                                status: "timeout"
                            }), R.enabledAnalytics.requestTime && h(e, "hs_slot_timeout", o), s(t)
                        },
                        onFailure: function() {
                            n.emit("partner_request_complete", {
                                partner: R.partnerId,
                                status: "error"
                            }), R.enabledAnalytics.requestTime && h(e, "hs_slot_error", o), s(t)
                        }
                    };
                    p = r.networkParamOverrides ? u.mergeObjects(l, r.networkParamOverrides) : l, R.callbackType !== a.CallbackTypes.NONE && R.requestType !== a.RequestTypes.AJAX || (p.jsonp = !1), i = R.requestType === a.RequestTypes.JSONP ? c.jsonp(p) : c.ajax(p)
                })
            }

            function x(e) {
                q.push(e)
            }

            function I() {
                return T
            }

            function S(e) {
                C = {}, C[R.namespace] = e
            }

            function L(e, t) {
                C[R.namespace][e] = t
            }

            function H() {
                return R.partnerId
            }

            function _() {
                return C
            }

            function w() {
                return R.features.prefetchDisabled && R.features.prefetchDisabled.enabled
            }

            function z(e, t) {
                if (t = t.slice(), k.rateLimiting.enabled) {
                    var r = f.now();
                    if ("page" === R.targetingType) {
                        if (r <= E) return [];
                        E = r + k.rateLimiting.value
                    } else
                        for (var a = t.length - 1; a >= 0; a--) {
                            var n = t[a].htSlot.getName();
                            A.hasOwnProperty(n) && r <= A[n] ? t.splice(a, 1) : A[n] = r + k.rateLimiting.value
                        }
                }
                if (!t.length) return [];
                if (P) return P(e, t);
                for (var o = y(t), s = [], i = 0; i < o.length; i++) s.push(m(e, o[i]));
                return s
            }
            var R, T, E, A, C, P, O, D, N, k, q, M, j, U, F;
            return function() {
                if (n = d.services.EventsService, o = d.services.RenderService, N = {
                        targeting: {
                            bidUnitInCents: 1,
                            outputCentsDivisor: 1,
                            outputPrecision: 0,
                            roundingType: "FLOOR",
                            floor: 0,
                            buckets: [{
                                max: 2e3,
                                step: 5
                            }, {
                                max: 5e3,
                                step: 100
                            }]
                        },
                        price: {
                            bidUnitInCents: 1
                        }
                    }, R = e, E = 0, A = {}, q = [], F = {}, M = {}, k = {
                        timeout: 0,
                        lineItemType: e.lineItemType,
                        targetingKeys: e.targetingKeys,
                        rateLimiting: e.features.rateLimiting
                    }, t.hasOwnProperty("timeout") && t.timeout > 0 && (k.timeout = t.timeout, n.emit("hs_define_partner_timeout", {
                        timeout: k.timeout,
                        statsId: R.statsId
                    })), t.hasOwnProperty("targetingKeyOverride"))
                    for (var f in t.targetingKeyOverride) t.targetingKeyOverride.hasOwnProperty(f) && k.targetingKeys.hasOwnProperty(f) && (k.targetingKeys[f] = t.targetingKeyOverride[f]);
                if (t.hasOwnProperty("rateLimiting") && (t.rateLimiting.hasOwnProperty("enabled") && (k.rateLimiting.enabled = t.rateLimiting.enabled), t.rateLimiting.value && (k.rateLimiting.value = t.rateLimiting.value)), t.hasOwnProperty("lineItemType") && (k.lineItemType = p.LineItemTypes[t.lineItemType]), k.xSlots = t.xSlots, k.mapping = t.mapping, T = !1, r) {
                    u.isArray(r) || (r = [r]);
                    var b = [];
                    r.map(function(e) {
                        var t = l.defer();
                        b.push(t.promise), c.jsonp({
                            url: e,
                            onSuccess: function() {
                                t.resolve()
                            }
                        })
                    }), l.all(b).then(function() {
                        T = !0, n.emit("partner_instantiated", {
                            partner: R.partnerId
                        }), q = i(q)
                    })
                } else n.emit("partner_instantiated", {
                    partner: R.partnerId
                }), T = !0;
                o.registerPartner(R.partnerId, k.lineItemType, k.targetingKeys.id), j = {}, e.hasOwnProperty("bidUnitInCents") && (j.targeting = s(v("targeting")), j.price = s(v("price"))), g.retriever ? P = g.retriever : (D = g.parseResponse, O = g.generateRequestObj, U = g.adResponseCallback), C = {}, C.hasOwnProperty(R.namespace) || (C[R.namespace] = {}), R.callbackType === a.CallbackTypes.ID ? C[R.namespace].adResponseCallback = U : C[R.namespace].adResponseCallbacks = F
            }(), {
                _configs: k,
                _adResponseStore: M,
                _bidTransformers: j,
                _setDirectInterface: S,
                _addToDirectInterface: L,
                _generateReturnParcels: y,
                _emitStatsEvent: h,
                _pushToCommandQueue: x,
                _generateBidTransformerConfig: v,
                getPartnerId: H,
                getDirectInterface: _,
                getPrefetchDisabled: w,
                isReady: I,
                retrieve: z
            }
        }
        var n, o, s = e(5),
            i = e(9),
            p = e(10),
            c = e(18),
            l = e(14),
            d = e(43),
            f = e(21),
            u = e(22);
        e(23);
        a.Architectures = {
            MRA: 0,
            SRA: 1,
            FSRA: 2
        }, a.CallbackTypes = {
            ID: 0,
            CALLBACK_NAME: 1,
            NONE: 2
        }, a.RequestTypes = {
            ANY: 0,
            AJAX: 1,
            JSONP: 2
        }, t.exports = a
    }, {}],
    36: [function(e, t, r) {
        "use strict";

        function a() {
            function e(e, t, r) {
                s.hasOwnProperty(e) || (s[e] = []);
                var a = n.generateUniqueId();
                return s[e].push({
                    id: a,
                    fn: r,
                    once: t
                }), a
            }

            function t(t, r) {
                return e(t, !1, r)
            }

            function r(t, r) {
                return e(t, !0, r)
            }

            function a(e) {
                for (var t in s)
                    if (s.hasOwnProperty(t))
                        for (var r = s[t].length - 1; r >= 0; r--)
                            if (s[t][r].id === e) return void s[t].splice(r, 1)
            }

            function o() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift();
                if (t && s.hasOwnProperty(t))
                    for (var r = s[t].length - 1; r >= 0; r--) {
                        try {
                            s[t][r].fn.apply(null, e)
                        } catch (e) {}
                        s[t][r].once && s[t].splice(r, 1)
                    }
            }
            var s;
            return function() {
                s = {}
            }(), {
                on: t,
                once: r,
                off: a,
                emit: o
            }
        }
        var n = e(21);
        e(23);
        t.exports = a
    }, {}],
    37: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                n.loadGpt().cmd.push(function() {
                    r(null, [{
                        targetingType: "page",
                        targeting: e
                    }])
                })
            }
            var r;
            return function() {
                r = o(e, {}).setTargeting
            }(), {
                setIdentityTargeting: t
            }
        }
        var n = e(16),
            o = e(25);
        t.exports = a
    }, {}],
    38: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e) {
                var t = {
                    auction_cycle: "ac",
                    global_timeout: "gt",
                    bid_requests: "brq",
                    bid_responses: "brs",
                    bid_errors: "be",
                    bid_passes: "bp",
                    bid_timeouts: "bt",
                    dfp_kv_pushed: "kv",
                    top_bid: "tb",
                    prefetch: "p",
                    res_latency: "rl",
                    partner_timeout: "pt"
                };
                return t.hasOwnProperty(e) ? t[e] : e
            }

            function r() {
                if (c.isEmpty(R)) return [];
                var e = {
                    s: "identity",
                    t: A,
                    xslots: {}
                };
                for (var r in R)
                    if (R.hasOwnProperty(r)) {
                        e.xslots.hasOwnProperty(r) || (e.xslots[r] = {});
                        for (var a = 0; a < R[r].length; a++) {
                            var n = R[r][a];
                            "bid_requests" !== n.n && "res_latency" !== n.n || (n.v = String(n.v)), e.xslots[r].hasOwnProperty(n.x) || (e.xslots[r][n.x] = {});
                            var o = t(n.n);
                            e.xslots[r][n.x][o] = n.v
                        }
                        P.hasOwnProperty(r) && !1 !== P[r] || (e.xslots[r].before[t("partner_timeout")] = T, P[r] = !0)
                    } return R = {}, [e]
            }

            function a(e, t) {
                c.isEmpty(R) && (A = p.now());
                var r = t.statsId;
                R[r] = R[r] || [];
                var a = {
                    b: r,
                    x: C ? "after" : "before"
                };
                "hs_identity_request" === e ? (a.n = "bid_requests", a.v = 1, E[r] = p.now()) : "hs_identity_cached" === e ? (a.n = "bid_requests", a.v = 0) : "hs_identity_response" === e ? (a.n = "bid_responses", a.v = 1) : "hs_identity_error" === e ? (a.n = "bid_errors", a.v = 1) : "hs_identity_pass" === e ? (a.n = "bid_passes", a.v = 1) : "hs_identity_timeout" === e ? (a.n = "bid_timeouts", a.v = 1) : "hs_identity_bid_latency" === e && (a.n = "res_latency", a.v = p.now() - E[r]), R[r].push(a)
            }

            function l(e, r) {
                var a = [],
                    n = "",
                    o = "";
                for (var s in r)
                    if (r.hasOwnProperty(s)) {
                        var i = r[s],
                            p = {
                                s: i.s,
                                t: i.t,
                                xslots: {}
                            };
                        for (o in i.events)
                            if (i.events.hasOwnProperty(o)) {
                                for (var c in i.events[o])
                                    if (i.events[o].hasOwnProperty(c))
                                        for (n in i.events[o][c])
                                            if (i.events[o][c].hasOwnProperty(n)) {
                                                var l = i.events[o][c][n],
                                                    d = l.v,
                                                    f = t(c);
                                                "res_latency" === l.n && (l.v = String(l.v)), p.xslots.hasOwnProperty(o) || (p.xslots[o] = {}), p.xslots[o].hasOwnProperty(n) || (p.xslots[o][n] = {}), p.xslots[o][n][f] = d
                                            } for (n in p.xslots[o]) p.xslots[o].hasOwnProperty(n) && w.hasOwnProperty(o) && (p.xslots[o][n][t("partner_timeout")] = w[o])
                            } a.push(p)
                    } return a
            }

            function d(e) {
                if (_.hasOwnProperty(e) && _[e] !== O.IPR && _[e] !== O.SENT) {
                    var a = {
                        p: "display",
                        d: i.DeviceTypeChecker.getDeviceType(),
                        c: b,
                        s: e,
                        w: v,
                        t: p.now(),
                        pg: {
                            t: y,
                            e: S[e]
                        }
                    };
                    a[t("global_timeout")] = String(i.globalTimeout), h.auctionCycle && (a.ac = I[e]), a.sl = c.mergeArrays(l(e, L[e]), r()), a.akamaiDebugInfo = H[e], delete H[e], delete S[e], delete L[e];
                    var n = s.buildUrl(u, null, {
                        s: g,
                        u: o.getPageUrl(),
                        v: 3
                    });
                    s.ajax({
                        method: "POST",
                        url: n,
                        data: a
                    }), _[e] = O.SENT
                }
            }

            function f(e, t) {
                var r = t.sessionId,
                    a = t.htSlotId,
                    o = t.statsId,
                    s = t.xSlotNames,
                    i = t.requestId || "";
                if (_.hasOwnProperty(r) && _[r] !== O.DONE && _[r] !== O.SENT) {
                    L[r].hasOwnProperty(a) || (L[r][a] = {
                        s: a,
                        t: p.now(),
                        events: {}
                    }), L[r][a].events.hasOwnProperty(o) || (L[r][a].events[o] = {}), L[r][a].events[o].hasOwnProperty(e) || (L[r][a].events[o][e] = {});
                    for (var c = L[r][a].events[o][e], l = 0; l < s.length; l++) {
                        var d = s[l],
                            f = r + o + a + d + i;
                        if (!z[f]) {
                            "bid_timeouts" === e && (z[f] = !0), c.hasOwnProperty(d) || (c[d] = {
                                n: e,
                                v: 0,
                                b: o,
                                x: d
                            });
                            var u = c[d];
                            if ("res_latency" === e) {
                                var g = p.now() - m[f];
                                delete m[f], (!u.v || u.v > g) && (u.v = g)
                            } else "prefetch" === e ? u.v = 1 : u.v++;
                            "bid_requests" === e ? m[f] = p.now() : "bid_responses" === e && n.emit("hs_slot_valid_bid_latency", t)
                        }
                    }
                }
            }
            if (!s.isXhrSupported()) return null;
            var u, g, b, h, v, y, m, x, I, S, L, H, _, w, z, R, T, E, A, C, P, O = {
                    IPR: 0,
                    DONE: 1,
                    SENT: 2
                },
                D = {
                    hs_session_start: function(e) {
                        var t = e.sessionId;
                        _.hasOwnProperty(t) || (_[t] = O.IPR, x[t] = p.now(), S[t] = [], L[t] = {})
                    },
                    hs_session_end: function(e) {
                        var t = e.sessionId;
                        _.hasOwnProperty(t) && _[t] !== O.DONE && (I[t] = String(p.now() - x[t]), delete x[t], setTimeout(function() {
                            _[t] = O.DONE, d(t)
                        }, 0))
                    },
                    hs_akamai_debug: function(e) {
                        var t = e.sessionId;
                        H[t] = {}, H[t].hostname = e.hostname, e.hasOwnProperty("requestHost") && (H[t].requestHost = e.requestHost), e.hasOwnProperty("akamaiPresent") && (H[t].akamaiPresent = e.akamaiPresent)
                    },
                    hs_slot_request: function(e) {
                        f("bid_requests", e)
                    },
                    hs_slot_bid: function(e) {
                        f("bid_responses", e)
                    },
                    hs_slot_pass: function(e) {
                        f("bid_passes", e)
                    },
                    hs_slot_timeout: function(e) {
                        f("bid_timeouts", e)
                    },
                    hs_slot_error: function(e) {
                        f("bid_errors", e)
                    },
                    hs_slot_highest_bid: function(e) {
                        f("top_bid", e)
                    },
                    hs_slot_valid_bid_latency: function(e) {
                        f("res_latency", e)
                    },
                    hs_slot_kv_pushed: function(e) {
                        f("dfp_kv_pushed", e)
                    },
                    hs_slot_prefetch: function(e) {
                        f("prefetch", e)
                    },
                    hs_define_partner_timeout: function(e) {
                        w[e.statsId] = String(e.timeout)
                    },
                    hs_identity_request: function(e) {
                        a("hs_identity_request", e)
                    },
                    hs_identity_cached: function(e) {
                        a("hs_identity_cached", e)
                    },
                    hs_identity_response: function(e) {
                        a("hs_identity_response", e), n.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_error: function(e) {
                        a("hs_identity_error", e), n.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_pass: function(e) {
                        a("hs_identity_pass", e), n.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_bid_latency: function(e) {
                        c.isNumber(E[e.statsId]) && a("hs_identity_bid_latency", e)
                    },
                    hs_identity_timeout: function(e) {
                        a("hs_identity_timeout", e), C = !0
                    },
                    hs_define_identity_timeout: function(e) {
                        T = String(e.timeout)
                    }
                };
            return function() {
                n = i.services.EventsService, y = p.now(), u = o.getProtocol("http://as", "https://as-sec") + ".casalemedia.com/headerstats", g = e.siteId, b = e.configId, h = e.options, v = g + p.now(), v += p.generateUniqueId(32 - v.length), i.instanceId = v, _ = {}, S = {}, L = {}, H = {}, m = {}, x = {}, I = {}, w = {}, z = {}, R = {}, E = {}, C = !1, P = {};
                for (var t in D) D.hasOwnProperty(t) && i.services.EventsService.on(t, D[t])
            }(), {}
        }
        var n, o = e(6),
            s = e(18),
            i = e(43),
            p = e(21),
            c = e(22);
        e(23);
        t.exports = a
    }, {}],
    39: [function(e, t, r) {
        "use strict";

        function a(e) {
            function t(e, t, r, a) {
                if (e.hasOwnProperty(t) && e[t].hasOwnProperty(r)) {
                    for (var n = null, o = 0; o < a.length; o++) {
                        var s = a[o];
                        e[t][r].hasOwnProperty(s) && (n = e[t][r][s])
                    }
                    return n
                }
            }

            function r(e) {
                return !!S.hasOwnProperty(e) && (L[e] = !0, delete S[e], !0)
            }

            function a() {
                var e = p.now();
                for (var t in S) S.hasOwnProperty(t) && S[t].timeOfExpiry && e > S[t].timeOfExpiry && r(t)
            }

            function d(e) {
                var t;
                do {
                    t = p.generateUniqueId(o.PUBKIT_AD_ID_LENGTH, "ALPHANUM")
                } while (S.hasOwnProperty[t]);
                return S[t] = e, t
            }

            function f(e) {
                if (S.hasOwnProperty(e) && S[e].timeOfExpiry && p.now() > S[e].timeOfExpiry && r(e), L[e]) return n.emit("internal_info", "Attempted to render expired ad " + e), null;
                if (!S.hasOwnProperty(e)) throw l("INVALID_VALUE", "`pubKitAdId` does not match any registered ad");
                var t = S[e];
                return r(e), t
            }

            function u(e) {
                if (e.auxFn) try {
                    e.auxFn.apply(null, e.auxArgs)
                } catch (e) {
                    n.emit("internal_error", "Error occurred running ad aux function.", e.stack)
                }
            }

            function g(e, t) {
                var r = f(t);
                if (!r) return !1;
                u(r);
                try {
                    p.documentWrite(e, r.adm)
                } catch (e) {
                    return n.emit("internal_error", 'Error occurred while rendering ad "' + t + '".', e.stack), !1
                }
                return !0
            }

            function b(e) {
                var t = d(e);
                if (e.price || e.dealId) {
                    var r = e.partnerId,
                        a = e.requestId;
                    if (w.hasOwnProperty(r)) {
                        var n;
                        n = c.isString(e.size) ? e.size : s.arrayToString(e.size), s.isSpecialSize(n) && (A[a] = n), z[r] || (z[r] = {}), z[r][n] || (z[r][n] = {}), z[r][n][a] || (z[r][n][a] = []), z[r][n][a].push(t);
                        var o = e.price;
                        o && (R[r] || (R[r] = {}), R[r][o] || (R[r][o] = {}), R[r][o][a] || (R[r][o][a] = []), R[r][o][a].push(t));
                        var i = e.dealId;
                        return i && (T[r] || (T[r] = {}), T[r][i] || (T[r][i] = {}), T[r][i][a] || (T[r][i][a] = []), T[r][i][a].push(t)), t
                    }
                }
            }

            function h(e, t, r, a, n, o) {
                if (w.hasOwnProperty(t)) {
                    var s = {
                        sessionId: e,
                        partnerId: t,
                        adm: r,
                        price: n
                    };
                    a && a > 0 && (s.timeOfExpiry = a);
                    var i = d(s);
                    return E[o] = E[o] || {}, E[o][n] = E[o][n] || [], E[o][n].push(i), i
                }
            }

            function v(e, t, r, a, o) {
                try {
                    if (!z.hasOwnProperty(e)) return void n.emit("internal_error", "Partner " + e + " missing from ad ID map.");
                    if (!c.isObject(r)) return void n.emit("internal_error", "invalid targeting map");
                    if (!r.hasOwnProperty(w[e].idKey)) return void n.emit("internal_error", "targeting map missing key " + w[e].idKey);
                    var s = r[w[e].idKey];
                    if (!c.isArray(s)) return void n.emit("internal_error", "invalid targeting map");
                    if (!c.isNumeric(a)) return void n.emit("internal_error", "invalid width");
                    if (!c.isNumeric(o)) return void n.emit("internal_error", "invalid height");
                    var i = a + "x" + o;
                    if (_ && _.hasOwnProperty(i)) {
                        var p = _[i];
                        i = p[0] + "x" + p[1]
                    }
                    for (var l = 0; l < s.length; l++) {
                        var d = s[l],
                            f = A[d] || i;
                        if (!z[e].hasOwnProperty(f)) return void n.emit("internal_error", "Size key " + f + " missing from ad ID map for partner " + e);
                        if (z[e][f].hasOwnProperty(d)) {
                            var u = z[e][f][d];
                            if (u.length) {
                                g(t, c.randomSplice(u));
                                break
                            }
                        }
                    }
                } catch (t) {
                    n.emit("internal_error", 'Error occurred while rendering ad for "' + e + '".', t.stack)
                }
            }

            function y(e, r) {
                if (void 0 !== e.partner && void 0 !== e.id && void 0 !== e.targeting && (void 0 !== e.size || void 0 !== e.price)) {
                    var a = e.partner,
                        o = e.price,
                        i = e.id,
                        p = e.targeting,
                        l = e.size;
                    if (w[a]) {
                        if (!p.hasOwnProperty(w[a].idKey)) return void n.emit("internal_error", "targeting map missing key " + w[a].idKey);
                        var d = p[w[a].idKey],
                            g = null;
                        if (void 0 !== o)
                            for (var b = [T, R], h = 0; h < b.length && !(g = t(b[h], a, o, d)); h++);
                        else {
                            if (!s.isSize(l)) return;
                            var v = s.arrayToString(l);
                            if (_ && _.hasOwnProperty(v)) {
                                var y = _[v];
                                v = s.arrayToString(y)
                            }
                            g = t(z, a, v, d)
                        }
                        if (g) {
                            var m = c.randomSplice(g),
                                x = f(m);
                            if (!x) return void n.emit("internal_error", "No ad found for ad ID " + m);
                            u(x);
                            for (var I, S = x.size, L = x.adm, H = document.getElementsByTagName("iframe"), E = 0; E < H.length; E++)
                                if (H[E].contentWindow === r) {
                                    I = H[E];
                                    break
                                } I && (I.width = String(S[0]), I.height = String(S[1]), "" !== I.parentElement.style.width && "" !== I.parentElement.style.height && (I.parentElement.style.width = S[0] + "px", I.parentElement.style.height = S[1] + "px")), r.postMessage("ix_ht_render_adm:" + JSON.stringify({
                                adm: L,
                                id: i,
                                size: S
                            }), "*")
                        }
                    }
                }
            }

            function m(e, t, r, a) {
                try {
                    var o = t.ownerDocument;
                    if (!z.hasOwnProperty(e)) return void n.emit("internal_error", "Partner " + e + " missing from ad ID map.");
                    if (!c.isString(a)) return void n.emit("internal_error", "invalid width");
                    if (!z[e].hasOwnProperty(a)) return void n.emit("internal_error", "Size key " + a + " missing from ad ID map for partner " + e);
                    if (z[e][a].hasOwnProperty(r)) {
                        var s = z[e][a][r];
                        if (!s.length) return void n.emit("internal_error", "Size key " + a + " contains no ads for partner " + e);
                        g(o, s.shift())
                    }
                } catch (t) {
                    n.emit("internal_error", 'Error occurred while rendering ad for "' + e + '".', t.stack)
                }
            }

            function x(e, t, r, a) {
                try {
                    for (var o, s = r.split(","), i = 0; i < s.length; i++)
                        if (o = s[i].split("_"), o[0] === a) {
                            if (E[a] && E[a][o[1]])
                                for (var p = E[a][o[1]], c = !1; p.length > 0 && !c;) c = g(t, p.shift());
                            return
                        }
                } catch (t) {
                    n.emit("internal_error", 'Error occurred while rendering ad for "' + e + '".', t.stack)
                }
            }

            function I(e, t, r) {
                w.hasOwnProperty(e) || (w[e] = {}), w[e].lineItemType = t, w[e].idKey = r
            }
            var S, L, H, _, w = {},
                z = {},
                R = {},
                T = {},
                E = {},
                A = {};
            return function() {
                S = {}, L = {}, _ = e.sizeRetargeting || null, H = setInterval(a, o.RENDER_SERVICE_EXPIRY_SWEEP_TIMER), n = i.services.EventsService, window.addEventListener("message", function(e) {
                    try {
                        if (!c.isString(e.data) || "ix_ht_render:" !== e.data.substr(0, "ix_ht_render:".length)) return;
                        y(JSON.parse(e.data.substr("ix_ht_render:".length)), e.source, e.origin)
                    } catch (e) {
                        n.emit("internal_error", "Error occurred while rendering ad.", e.stack)
                    }
                }, !1)
            }(), {
                registerAd: b,
                render: g,
                registerPartner: I,
                renderDfpAd: v,
                registerIndexLegacyAd: h,
                renderIndexLegacyAd: x,
                renderRubiconAd: m
            }
        }
        var n, o = e(10),
            s = e(20),
            i = e(43),
            p = e(21),
            c = e(22),
            l = e(23);
        t.exports = a
    }, {}],
    40: [function(e, t, r) {
        "use strict";

        function a() {
            function e() {
                return {
                    applies: !0,
                    consentString: ""
                }
            }

            function t() {
                return !1
            }

            function r(e) {
                return e
            }

            function a() {
                return n.resolve()
            }
            return {
                gdpr: {
                    getConsent: e,
                    setApplies: function() {}
                },
                isPrivacyEnabled: t,
                delay: r,
                wait: a
            }
        }
        var n = e(14);
        t.exports = a
    }, {}],
    41: [function(e, t, r) {
        "use strict";

        function a() {
            function e(e) {
                return function() {
                    p[e].state = c.TERMINATED;
                    for (var t = 0; t < p[e].cbs.length; t++) try {
                        p[e].cbs[t]()
                    } catch (e) {}
                    delete p[e].cbs, delete p[e].timer
                }
            }

            function t(t, r, a) {
                var s = o.generateUniqueId(n.SESSION_ID_LENGTH);
                return r = !!r, a = a ? [a] : [], p[s] = {
                    state: c.NEW,
                    cbs: a,
                    timeout: t
                }, r && (p[s].state = c.RUNNABLE, p[s].timer = setTimeout(e(s), t)), s
            }

            function r(t) {
                p.hasOwnProperty(t) && p[t].state === c.NEW && (p[t].state = c.RUNNABLE, p[t].timer = setTimeout(e(t), p[t].timeout))
            }

            function a(e, t) {
                p.hasOwnProperty(e) && p[e].state !== c.TERMINATED && p[e].cbs.unshift(t)
            }

            function s(e) {
                return p.hasOwnProperty(e) ? p[e].state : null
            }

            function i(e) {
                p.hasOwnProperty(e) && p[e].state !== c.TERMINATED && (p[e].state = c.TERMINATED, clearTimeout(p[e].timer), delete p[e].cbs, delete p[e].timer)
            }
            var p, c = {
                NEW: 0,
                RUNNABLE: 1,
                TERMINATED: 2
            };
            return function() {
                p = {}
            }(), {
                TimerStates: c,
                createTimer: t,
                startTimer: r,
                addTimerCallback: a,
                getTimerState: s,
                clearTimer: i
            }
        }
        var n = e(10),
            o = e(21);
        e(23);
        t.exports = a
    }, {}],
    42: [function(e, t, r) {
        "use strict";
        var a, n, o = e(6),
            s = e(9),
            i = e(24),
            p = e(43),
            c = e(22),
            l = e(13);
        window[p.NAMESPACE] = window[p.NAMESPACE] || {}, window[p.NAMESPACE].cmd = window[p.NAMESPACE].cmd || [];
        var d = window[p.NAMESPACE].cmd;
        window[p.NAMESPACE] = function() {
            function e(e) {
                if (!c.isObject(e)) return void n.emit("error", "invalid first-party data: `data` must be an object");
                if (e.hasOwnProperty("rubicon")) {
                    if (!c.isObject(e.rubicon)) return void n.emit("error", "invalid first-party data.rubicon");
                    for (var t in e.rubicon)
                        if (e.rubicon.hasOwnProperty(t) && -1 === ["keywords", "inventory", "visitor"].indexOf(t)) return void n.emit("error", "invalid first-party data: unrecognized property " + t + " of `data.rubicon`");
                    if (e.rubicon.hasOwnProperty("keywords") && !c.isArray(e.rubicon.keywords, "string")) return void n.emit("error", "invalid first-party data: `data.rubicon.keywords` must be an array of strings");
                    if (e.rubicon.hasOwnProperty("inventory")) {
                        if (!c.isObject(e.rubicon.inventory)) return void n.emit("error", "invalid first-party data: `data.rubicon.inventory` must be an object");
                        for (var r in e.rubicon.inventory)
                            if (e.rubicon.inventory.hasOwnProperty(r) && !c.isArray(e.rubicon.inventory[r], "string")) return void n.emit("error", "invalid first-party data: property " + r + " of `data.rubicon.inventory` must be an array of strings")
                    }
                    if (e.rubicon.hasOwnProperty("visitor")) {
                        if (!c.isObject(e.rubicon.visitor)) return void n.emit("error", "invalid first-party data: `data.rubicon.visitor` must be an object");
                        for (var a in e.rubicon.visitor)
                            if (e.rubicon.visitor.hasOwnProperty(a) && !c.isArray(e.rubicon.visitor[a], "string")) return void n.emit("error", "invalid first-party data: property " + a + " of `data.rubicon.visitor` must be an array of strings")
                    }
                }
                try {
                    f.Layers.PartnersLayer.setFirstPartyData(e)
                } catch (e) {
                    n.emit("error", e)
                }
            }

            function t(e, t) {
                var r = {
                    sessionId: ""
                };
                try {
                    if (!c.isFunction(t)) return n.emit("error", "callback must be a function"), "";
                    if (!c.isArray(e, "object")) return void n.emit("error", "htSlotDemandObjs must be an array of objects");
                    for (var a = 0; a < e.length; a++) {
                        var o = e[a];
                        if (!o.hasOwnProperty("htSlotName")) return void n.emit("error", "htSlotDemandObjs[" + a + "]: members must contain the htSlotName property");
                        if (!c.isString(o.htSlotName)) return void n.emit("error", "htSlotDemandObjs[" + a + "]: htSlotName must be a string");
                        if (o.hasOwnProperty("firstPartyData")) {
                            if (!c.isObject(o.firstPartyData)) return void n.emit("error", "htSlotDemandObjs[" + a + "]: invalid first-party data: `data` must be an object");
                            if (o.firstPartyData.hasOwnProperty("rubicon")) {
                                var s = o.firstPartyData.rubicon;
                                if (!c.isObject(s)) return void n.emit("error", "htSlotDemandObjs[" + a + "]: invalid rubicon first-party data");
                                for (var i in s)
                                    if (s.hasOwnProperty(i) && -1 === ["keywords", "inventory", "visitor", "position"].indexOf(i)) return void n.emit("error", "htSlotDemandObjs[" + a + "]: invalid first-party data: unrecognized property of `firstPartyData.rubicon`");
                                if (s.hasOwnProperty("keywords") && !c.isArray(s.keywords, "string")) return void n.emit("error", "htSlotDemandObjs[" + a + "]: invalid first-party data: `firstPartyData.rubicon.keywords` must be an array of strings");
                                if (!s.hasOwnProperty("inventory")) {
                                    if (!c.isObject(s.inventory)) return void n.emit("error", "htSlotDemandObjs[" + a + "]: invalid first-party data: `firstPartyData.rubicon.inventory` must be an object");
                                    for (var p in s.inventory)
                                        if (s.inventory.hasOwnProperty(p) && !c.isArray(s.inventory[p], "string")) return void n.emit("error", "htSlotDemandObjs[" + a + "]: invalid first-party data: property " + p + " of `firstPartyData.rubicon.inventory` must be an array of strings")
                                }
                                if (s.hasOwnProperty("visitor")) {
                                    if (!c.isObject(s.visitor)) return void n.emit("error", "htSlotDemandObjs[" + a + "]: invalid first-party data: `firstPartyData.rubicon.visitor` must be an object");
                                    for (var l in s.visitor)
                                        if (s.visitor.hasOwnProperty(l) && !c.isArray(s.visitor[l], "string")) return void n.emit("error", "htSlotDemandObjs[" + a + "]: invalid first-party data: property " + l + " of `firstPartyData.rubicon.visitor` must be an array of strings")
                                }
                                if (s.hasOwnProperty("position") && !c.isString(s.position)) return void n.emit("error", "htSlotDemandObjs[" + a + "]: invalid first-party data: `firstPartyData.rubicon.position` must be a string")
                            }
                        }
                    }
                    r = f.Layers.DirectBiddingLayer.retrieveDemand(e), r.promise.then(function(e) {
                        return f.Layers.IdentityLayer.getResult().then(function(t) {
                            for (var r in g) g.hasOwnProperty(r) && delete t[g[r]];
                            return e.identity = t, e
                        })
                    }).then(function(e) {
                        t(e)
                    }).catch(function(e) {
                        n.emit("error", e), setTimeout(t.bind(null, {}), 0)
                    })
                } catch (e) {
                    n.emit("error", e), setTimeout(t.bind(null, {}), 0)
                }
                return r.sessionId
            }

            function r(e, t, r) {
                var a = "";
                try {
                    if (!c.isBoolean(t)) return n.emit("error", "`once` must be a boolean"), a;
                    if (!c.isFunction(r)) return n.emit("error", "`callback` must be a function"), a;
                    if (!c.isString(e)) return n.emit("error", "`eventName` must be a string"), a;
                    if (!b.hasOwnProperty(e)) return n.emit("error", "Unrecognized event " + e), a;
                    var o = function() {
                        var t = Array.prototype.slice.call(arguments);
                        r(e, JSON.stringify(t))
                    };
                    a = t ? n.once(e, o) : n.on(e, o)
                } catch (e) {
                    n.emit("error", e)
                }
                return a
            }

            function s(e) {
                try {
                    if (!c.isString(e)) return void n.emit("error", "`subscriptionId` must be a string");
                    n.off(e)
                } catch (e) {
                    n.emit("error", e)
                }
            }
            var d, f, u, g, b = {
                error: 1,
                warning: 2,
                global_timeout_reached: 3,
                partner_instantiated: 4,
                partner_request_sent: 5,
                partner_request_complete: 6
            };
            if (function() {
                    try {
                        d = {
                            DeviceTypeChecker: {
                                method: "USER_AGENT",
                                configs: {}
                            },
                            htSlots: {
                                "300x1050": {
                                    id: "e5c5aedf-056f-20d5-9710-481272a93d27",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 1050]
                                        ]
                                    }
                                },
                                "300x1051": {
                                    id: "8e005363-30d2-ecd8-64b5-401d4a16b6d7",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 1051],
                                            [300, 1050]
                                        ]
                                    }
                                },
                                "300x1052": {
                                    id: "b8d6639f-3d07-c15e-0709-beb9f15fd81b",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 1052],
                                            [300, 1050]
                                        ]
                                    }
                                },
                                "300x250": {
                                    id: "9b27fdd2-dc02-e2c6-b3c6-cd6f4de35f72",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    }
                                },
                                "300x250-mobile": {
                                    id: "7a3ce761-d751-57ad-5976-902f6d9ec627",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    }
                                },
                                "300x251": {
                                    id: "327f4aff-987c-1f4e-8b8f-a7d8bcb0b61d",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 251],
                                            [300, 250]
                                        ]
                                    }
                                },
                                "300x251-mobile": {
                                    id: "0e26192f-e552-ef46-99a5-b1929b05adb9",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 251],
                                            [300, 250]
                                        ]
                                    }
                                },
                                "300x252": {
                                    id: "f72ffe8f-135c-f17c-76f0-f1d30a33dab1",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 252],
                                            [300, 250]
                                        ]
                                    }
                                },
                                "300x258-mobile": {
                                    id: "729f0750-8683-e087-255f-2001bf5adc58",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 258],
                                            [300, 250]
                                        ]
                                    }
                                },
                                "300x259-mobile": {
                                    id: "60e2438d-7c98-e90f-1624-a6cb17f25389",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 259],
                                            [300, 250]
                                        ]
                                    }
                                },
                                "300x50-mobile": {
                                    id: "135edf4f-83f7-225a-ef8b-d5f3c353831b",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 50]
                                        ]
                                    }
                                },
                                "300x51-mobile": {
                                    id: "877b1d56-d5fd-d599-6e91-e1f8370aaa42",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 51],
                                            [300, 50]
                                        ]
                                    }
                                },
                                "300x58-mobile": {
                                    id: "605b6794-bae2-79e9-7d06-f171dc73a885",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 58],
                                            [300, 50]
                                        ]
                                    }
                                },
                                "300x59-mobile": {
                                    id: "da434c4e-4109-9f77-b7da-07c6b610b8b1",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 59],
                                            [300, 50]
                                        ]
                                    }
                                },
                                "300x600": {
                                    id: "d6ad6cd4-8746-027d-8c8c-83e8121ed73b",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600]
                                        ]
                                    }
                                },
                                "300x601": {
                                    id: "1d92065d-42aa-77bf-7882-86cc48e81934",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 601],
                                            [300, 600]
                                        ]
                                    }
                                },
                                "300x602": {
                                    id: "b3cfca16-8fb9-82a1-c267-8c9c7d06a91a",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 602],
                                            [300, 600]
                                        ]
                                    }
                                },
                                "320x50-mobile": {
                                    id: "80a6d774-6e8a-3c62-c2e3-c4a3fdbfe2c1",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [320, 50]
                                        ]
                                    }
                                },
                                "320x51-mobile": {
                                    id: "34997eae-fec1-d0d9-90e3-65e30d5903fe",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [320, 51],
                                            [320, 50]
                                        ]
                                    }
                                },
                                "320x58-mobile": {
                                    id: "0acf4d06-d7fe-b092-27b8-106b9767d302",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [320, 58],
                                            [320, 50]
                                        ]
                                    }
                                },
                                "320x59-mobile": {
                                    id: "4b6065eb-58b1-82d0-b5db-a8dcedc517e1",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [320, 59],
                                            [320, 50]
                                        ]
                                    }
                                },
                                "728x90": {
                                    id: "8004242f-0c5e-a804-2547-94b12255e889",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    }
                                },
                                "728x91": {
                                    id: "b20a4a2d-522b-fbfe-4427-2d230c209690",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 91],
                                            [728, 90]
                                        ]
                                    }
                                },
                                "728x92": {
                                    id: "bbaadfb9-2f35-c8cb-67b3-a071d6c0c41b",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 92],
                                            [728, 90]
                                        ]
                                    }
                                },
                                "970x250": {
                                    id: "dc0c66ef-ff88-d562-8f65-e46aa7b560c1",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [970, 250]
                                        ]
                                    }
                                },
                                "970x251": {
                                    id: "c5ab30de-5369-0a7e-14d8-ad14ca176a29",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [970, 251],
                                            [970, 250]
                                        ]
                                    }
                                },
                                "970x252": {
                                    id: "735d4d00-370a-f1f8-5b40-a447c50d8f0d",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [970, 252],
                                            [970, 250]
                                        ]
                                    }
                                },
                                "970x90": {
                                    id: "685b5625-4737-1b08-780c-0955aeed087f",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [970, 90]
                                        ]
                                    }
                                },
                                "970x91": {
                                    id: "dd9adde0-5671-aa9c-930f-2632a9d16ec7",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [970, 91],
                                            [970, 90]
                                        ]
                                    }
                                },
                                "970x92": {
                                    id: "674e5e10-bb58-04c1-a065-3eef429cf96e",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [970, 92],
                                            [970, 90]
                                        ]
                                    }
                                },
                                "Crown-9x1": {
                                    id: "3cd7679f-e5d5-3e39-25c5-bc9d8d063f1c",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [9, 1],
                                            [970, 250],
                                            [900, 550]
                                        ]
                                    }
                                }
                            },
                            Services: {
                                TimerService: {},
                                RenderService: {
                                    sizeRetargeting: {
                                        "300x1051": [300, 1050],
                                        "300x1052": [300, 1050],
                                        "300x251": [300, 250],
                                        "300x252": [300, 250],
                                        "300x258": [300, 250],
                                        "300x259": [300, 250],
                                        "300x51": [300, 50],
                                        "300x58": [300, 50],
                                        "300x59": [300, 50],
                                        "300x601": [300, 600],
                                        "300x602": [300, 600],
                                        "320x51": [320, 50],
                                        "320x58": [320, 50],
                                        "320x59": [320, 50],
                                        "728x91": [728, 90],
                                        "728x92": [728, 90],
                                        "970x251": [970, 250],
                                        "970x252": [970, 250],
                                        "970x91": [970, 90],
                                        "970x92": [970, 90]
                                    }
                                },
                                HeaderStatsService: {
                                    siteId: "175689",
                                    configId: "82866255193760",
                                    options: {
                                        auctionCycle: !0
                                    }
                                },
                                EventsService: {},
                                GptService: {}
                            },
                            Layers: [{
                                layerId: "DirectBiddingLayer",
                                configs: {
                                    globalTimeout: 1e3
                                }
                            }, {
                                layerId: "IdentityLayer",
                                configs: {
                                    timeout: 50,
                                    partners: {
                                        MerkleIp: {
                                            enabled: !0,
                                            configs: {
                                                pubid: "CONDENAST"
                                            },
                                            enableSetTargeting: !0
                                        },
                                        AdserverOrgIp: {
                                            enabled: !0,
                                            configs: {
                                                publisherId: 183973
                                            }
                                        },
                                        LiveRampIp: {
                                            enabled: !0,
                                            configs: {}
                                        }
                                    }
                                }
                            }, {
                                layerId: "PartnersLayer",
                                configs: {
                                    partners: {
                                        IndexExchangeHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        siteId: "175689",
                                                        size: [728, 90]
                                                    },
                                                    2: {
                                                        siteId: "175690",
                                                        size: [970, 250]
                                                    },
                                                    3: {
                                                        siteId: "175691",
                                                        size: [970, 90]
                                                    },
                                                    4: {
                                                        siteId: "175692",
                                                        size: [728, 90]
                                                    },
                                                    5: {
                                                        siteId: "175693",
                                                        size: [970, 250]
                                                    },
                                                    6: {
                                                        siteId: "175694",
                                                        size: [970, 90]
                                                    },
                                                    7: {
                                                        siteId: "175695",
                                                        size: [728, 90]
                                                    },
                                                    8: {
                                                        siteId: "175696",
                                                        size: [970, 250]
                                                    },
                                                    9: {
                                                        siteId: "175697",
                                                        size: [970, 90]
                                                    },
                                                    10: {
                                                        siteId: "175698",
                                                        size: [300, 250]
                                                    },
                                                    11: {
                                                        siteId: "175699",
                                                        size: [300, 600]
                                                    },
                                                    12: {
                                                        siteId: "175700",
                                                        size: [300, 1050]
                                                    },
                                                    13: {
                                                        siteId: "175701",
                                                        size: [300, 250]
                                                    },
                                                    14: {
                                                        siteId: "175702",
                                                        size: [300, 600]
                                                    },
                                                    15: {
                                                        siteId: "175703",
                                                        size: [300, 1050]
                                                    },
                                                    16: {
                                                        siteId: "175704",
                                                        size: [300, 250]
                                                    },
                                                    17: {
                                                        siteId: "175705",
                                                        size: [300, 600]
                                                    },
                                                    18: {
                                                        siteId: "175706",
                                                        size: [300, 1050]
                                                    },
                                                    19: {
                                                        siteId: "175707",
                                                        size: [300, 50]
                                                    },
                                                    20: {
                                                        siteId: "175708",
                                                        size: [320, 50]
                                                    },
                                                    21: {
                                                        siteId: "175709",
                                                        size: [300, 250]
                                                    },
                                                    22: {
                                                        siteId: "175710",
                                                        size: [300, 50]
                                                    },
                                                    23: {
                                                        siteId: "175711",
                                                        size: [320, 50]
                                                    },
                                                    24: {
                                                        siteId: "175712",
                                                        size: [300, 250]
                                                    },
                                                    25: {
                                                        siteId: "175713",
                                                        size: [300, 50]
                                                    },
                                                    26: {
                                                        siteId: "175714",
                                                        size: [320, 50]
                                                    },
                                                    27: {
                                                        siteId: "175715",
                                                        size: [300, 250]
                                                    },
                                                    28: {
                                                        siteId: "175716",
                                                        size: [300, 50]
                                                    },
                                                    29: {
                                                        siteId: "175717",
                                                        size: [320, 50]
                                                    },
                                                    30: {
                                                        siteId: "175718",
                                                        size: [300, 250]
                                                    },
                                                    31: {
                                                        siteId: "278426",
                                                        size: [300, 600]
                                                    },
                                                    32: {
                                                        siteId: "278427",
                                                        size: [300, 250]
                                                    },
                                                    33: {
                                                        siteId: "194348",
                                                        size: [900, 550]
                                                    }
                                                },
                                                mapping: {
                                                    "728x90": ["1"],
                                                    "970x250": ["2"],
                                                    "970x90": ["3"],
                                                    "728x91": ["4"],
                                                    "970x251": ["5"],
                                                    "970x91": ["6"],
                                                    "728x92": ["7"],
                                                    "970x252": ["8"],
                                                    "970x92": ["9"],
                                                    "300x250": ["10"],
                                                    "300x600": ["11"],
                                                    "300x1050": ["12"],
                                                    "300x251": ["13"],
                                                    "300x601": ["14"],
                                                    "300x1051": ["15"],
                                                    "300x252": ["16", "32"],
                                                    "300x602": ["17", "31"],
                                                    "300x1052": ["18"],
                                                    "300x50-mobile": ["19"],
                                                    "320x50-mobile": ["20"],
                                                    "300x250-mobile": ["21"],
                                                    "300x51-mobile": ["22"],
                                                    "320x51-mobile": ["23"],
                                                    "300x251-mobile": ["24"],
                                                    "300x58-mobile": ["25"],
                                                    "320x58-mobile": ["26"],
                                                    "300x258-mobile": ["27"],
                                                    "300x59-mobile": ["28"],
                                                    "320x59-mobile": ["29"],
                                                    "300x259-mobile": ["30"],
                                                    "Crown-9x1": ["33"]
                                                },
                                                timeout: 0,
                                                siteId: "175689",
                                                targetingKeyOverride: {
                                                    om: "IOM",
                                                    pm: "IOM"
                                                },
                                                bidTransformer: {
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }]
                                                }
                                            }
                                        },
                                        AolHtb: {
                                            enabled: !0,
                                            configs: {
                                                timeout: 0,
                                                region: "na",
                                                networkId: "10920.1",
                                                xSlots: {
                                                    1: {
                                                        placementId: "4704180",
                                                        sizeId: "-1",
                                                        pageId: "0"
                                                    },
                                                    2: {
                                                        placementId: "4704193",
                                                        sizeId: "-1",
                                                        pageId: "0"
                                                    },
                                                    3: {
                                                        placementId: "4704196",
                                                        sizeId: "-1",
                                                        pageId: "0"
                                                    },
                                                    4: {
                                                        placementId: "4704195",
                                                        sizeId: "-1",
                                                        pageId: "0"
                                                    },
                                                    5: {
                                                        placementId: "4704186",
                                                        sizeId: "-1",
                                                        pageId: "0"
                                                    },
                                                    6: {
                                                        placementId: "4704196",
                                                        sizeId: "-1",
                                                        pageId: "0"
                                                    },
                                                    7: {
                                                        placementId: "4704195",
                                                        sizeId: "-1",
                                                        pageId: "0"
                                                    },
                                                    8: {
                                                        placementId: "4704187",
                                                        sizeId: "-1",
                                                        pageId: "0"
                                                    },
                                                    9: {
                                                        placementId: "4704190",
                                                        sizeId: "-1",
                                                        pageId: "0"
                                                    },
                                                    10: {
                                                        placementId: "4704191",
                                                        sizeId: "-1",
                                                        pageId: "0"
                                                    }
                                                },
                                                mapping: {
                                                    "300x250": ["1"],
                                                    "300x250-mobile": ["2"],
                                                    "300x50-mobile": ["3"],
                                                    "300x58-mobile": ["4"],
                                                    "300x600": ["5"],
                                                    "320x50-mobile": ["6"],
                                                    "320x58-mobile": ["7"],
                                                    "728x90": ["8"],
                                                    "970x250": ["9"],
                                                    "Crown-9x1": ["10"]
                                                },
                                                bidTransformer: {
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }]
                                                }
                                            }
                                        },
                                        FacebookHtb: {
                                            enabled: !1,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        placementId: "sertwe456",
                                                        size: [300, 250]
                                                    }
                                                },
                                                mapping: {
                                                    "300x250-mobile": ["1"]
                                                },
                                                timeout: 0,
                                                bidTransformer: {
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }]
                                                }
                                            }
                                        },
                                        TrustXHtb: {
                                            enabled: !1,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        adSlotId: "3856"
                                                    },
                                                    2: {
                                                        adSlotId: "3857"
                                                    },
                                                    3: {
                                                        adSlotId: "3858"
                                                    }
                                                },
                                                mapping: {
                                                    "300x600": ["1"],
                                                    "300x601": ["2"],
                                                    "300x602": ["3"]
                                                },
                                                timeout: 0,
                                                bidTransformer: {
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }]
                                                }
                                            }
                                        },
                                        RubiconHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [300, 1050]
                                                        ]
                                                    },
                                                    2: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [300, 1050],
                                                            [300, 1050]
                                                        ]
                                                    },
                                                    3: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [300, 1050],
                                                            [300, 1050]
                                                        ]
                                                    },
                                                    4: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    5: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    6: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 250]
                                                        ]
                                                    },
                                                    7: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 250]
                                                        ]
                                                    },
                                                    8: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 250]
                                                        ]
                                                    },
                                                    9: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 250]
                                                        ]
                                                    },
                                                    10: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 250]
                                                        ]
                                                    },
                                                    11: {
                                                        siteId: "196714",
                                                        zoneId: "960280",
                                                        sizes: [
                                                            [300, 50]
                                                        ]
                                                    },
                                                    12: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [300, 50],
                                                            [300, 50]
                                                        ]
                                                    },
                                                    13: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [300, 50],
                                                            [300, 50]
                                                        ]
                                                    },
                                                    14: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [300, 50],
                                                            [300, 50]
                                                        ]
                                                    },
                                                    15: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [300, 600]
                                                        ]
                                                    },
                                                    16: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [300, 600],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    17: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [300, 600],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    18: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [320, 50]
                                                        ]
                                                    },
                                                    19: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [320, 50],
                                                            [320, 50]
                                                        ]
                                                    },
                                                    20: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [320, 50],
                                                            [320, 50]
                                                        ]
                                                    },
                                                    21: {
                                                        siteId: "196714",
                                                        zoneId: "960282",
                                                        sizes: [
                                                            [320, 50],
                                                            [320, 50]
                                                        ]
                                                    },
                                                    22: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    23: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [728, 90],
                                                            [728, 90]
                                                        ]
                                                    },
                                                    24: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [728, 90],
                                                            [728, 90]
                                                        ]
                                                    },
                                                    25: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [970, 250]
                                                        ]
                                                    },
                                                    26: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [970, 250],
                                                            [970, 250]
                                                        ]
                                                    },
                                                    27: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [970, 250],
                                                            [970, 250]
                                                        ]
                                                    },
                                                    28: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [970, 90]
                                                        ]
                                                    },
                                                    29: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [970, 90],
                                                            [970, 90]
                                                        ]
                                                    },
                                                    30: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [970, 90],
                                                            [970, 90]
                                                        ]
                                                    },
                                                    31: {
                                                        siteId: "196712",
                                                        zoneId: "960274",
                                                        sizes: [
                                                            [9, 1],
                                                            [900, 550],
                                                            [970, 250]
                                                        ]
                                                    }
                                                },
                                                mapping: {
                                                    "300x1050": ["1"],
                                                    "300x1051": ["2"],
                                                    "300x1052": ["3"],
                                                    "300x250": ["4"],
                                                    "300x250-mobile": ["5"],
                                                    "300x251": ["6"],
                                                    "300x251-mobile": ["7"],
                                                    "300x252": ["8"],
                                                    "300x258-mobile": ["9"],
                                                    "300x259-mobile": ["10"],
                                                    "300x50-mobile": ["11"],
                                                    "300x51-mobile": ["12"],
                                                    "300x58-mobile": ["13"],
                                                    "300x59-mobile": ["14"],
                                                    "300x600": ["15"],
                                                    "300x601": ["16"],
                                                    "300x602": ["17"],
                                                    "320x50-mobile": ["18"],
                                                    "320x51-mobile": ["19"],
                                                    "320x58-mobile": ["20"],
                                                    "320x59-mobile": ["21"],
                                                    "728x90": ["22"],
                                                    "728x91": ["23"],
                                                    "728x92": ["24"],
                                                    "970x250": ["25"],
                                                    "970x251": ["26"],
                                                    "970x252": ["27"],
                                                    "970x90": ["28"],
                                                    "970x91": ["29"],
                                                    "970x92": ["30"],
                                                    "Crown-9x1": ["31"]
                                                },
                                                accountId: "11850",
                                                timeout: 0,
                                                bidTransformer: {
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }]
                                                }
                                            }
                                        },
                                        CriteoHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        zoneId: "1248507"
                                                    },
                                                    2: {
                                                        zoneId: "1248507"
                                                    },
                                                    3: {
                                                        zoneId: "1248507"
                                                    },
                                                    4: {
                                                        zoneId: "1248507"
                                                    },
                                                    5: {
                                                        zoneId: "1248507"
                                                    },
                                                    6: {
                                                        zoneId: "1248414"
                                                    },
                                                    7: {
                                                        zoneId: "1248414"
                                                    },
                                                    8: {
                                                        zoneId: "1248414"
                                                    },
                                                    9: {
                                                        zoneId: "1248419"
                                                    },
                                                    10: {
                                                        zoneId: "1248419"
                                                    },
                                                    11: {
                                                        zoneId: "1248419"
                                                    },
                                                    12: {
                                                        zoneId: "1248419"
                                                    },
                                                    13: {
                                                        zoneId: "1248414"
                                                    },
                                                    14: {
                                                        zoneId: "1248419"
                                                    },
                                                    15: {
                                                        zoneId: "1248414"
                                                    },
                                                    16: {
                                                        zoneId: "1248419"
                                                    },
                                                    17: {
                                                        zoneId: "1248419"
                                                    },
                                                    18: {
                                                        zoneId: "1248463"
                                                    },
                                                    19: {
                                                        zoneId: "1248463"
                                                    },
                                                    20: {
                                                        zoneId: "1248463"
                                                    },
                                                    21: {
                                                        zoneId: "1248463"
                                                    },
                                                    22: {
                                                        zoneId: "1248463"
                                                    },
                                                    23: {
                                                        zoneId: "1248463"
                                                    },
                                                    24: {
                                                        zoneId: "1248463"
                                                    },
                                                    25: {
                                                        zoneId: "1248504"
                                                    },
                                                    26: {
                                                        zoneId: "1248504"
                                                    },
                                                    27: {
                                                        zoneId: "1248504"
                                                    },
                                                    28: {
                                                        zoneId: "1248504"
                                                    },
                                                    29: {
                                                        zoneId: "1248504"
                                                    },
                                                    30: {
                                                        zoneId: "1248415"
                                                    },
                                                    31: {
                                                        zoneId: "1248415"
                                                    },
                                                    32: {
                                                        zoneId: "1248415"
                                                    },
                                                    33: {
                                                        zoneId: "1248415"
                                                    },
                                                    34: {
                                                        zoneId: "1248415"
                                                    },
                                                    35: {
                                                        zoneId: "1248415"
                                                    },
                                                    36: {
                                                        zoneId: "1248415"
                                                    },
                                                    37: {
                                                        zoneId: "1248413"
                                                    },
                                                    38: {
                                                        zoneId: "1248413"
                                                    },
                                                    39: {
                                                        zoneId: "1248413"
                                                    },
                                                    40: {
                                                        zoneId: "1248413"
                                                    },
                                                    41: {
                                                        zoneId: "1248413"
                                                    },
                                                    42: {
                                                        zoneId: "1248505"
                                                    },
                                                    43: {
                                                        zoneId: "1248505"
                                                    },
                                                    44: {
                                                        zoneId: "1248505"
                                                    },
                                                    45: {
                                                        zoneId: "1248505"
                                                    },
                                                    46: {
                                                        zoneId: "1248505"
                                                    },
                                                    47: {
                                                        zoneId: "1248505"
                                                    },
                                                    48: {
                                                        zoneId: "1248435"
                                                    }
                                                },
                                                mapping: {
                                                    "300x1050": ["1"],
                                                    "300x1051": ["2", "4"],
                                                    "300x1052": ["3", "5"],
                                                    "300x250": ["6"],
                                                    "300x251": ["7", "13"],
                                                    "300x252": ["8", "15"],
                                                    "300x250-mobile": ["9"],
                                                    "300x251-mobile": ["10", "14"],
                                                    "300x258-mobile": ["11", "16"],
                                                    "300x259-mobile": ["12", "17"],
                                                    "300x50-mobile": ["18"],
                                                    "300x51-mobile": ["19", "20"],
                                                    "300x58-mobile": ["21", "23"],
                                                    "300x59-mobile": ["22", "24"],
                                                    "300x600": ["25"],
                                                    "300x601": ["26", "28"],
                                                    "300x602": ["27", "29"],
                                                    "320x50-mobile": ["30"],
                                                    "320x51-mobile": ["31", "34"],
                                                    "320x58-mobile": ["32", "35"],
                                                    "320x59-mobile": ["33", "36"],
                                                    "728x90": ["37"],
                                                    "728x91": ["38", "40"],
                                                    "728x92": ["39", "41"],
                                                    "970x250": ["42"],
                                                    "970x251": ["43", "46"],
                                                    "970x252": ["44", "47"],
                                                    "Crown-9x1": ["45", "48"]
                                                },
                                                timeout: 0,
                                                bidTransformer: {
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }]
                                                }
                                            }
                                        }
                                    }
                                }
                            }]
                        }, g = ["MerkleIp", "LiveRampIp"];
                        for (var e = [{
                                regex: "glamour\\.com",
                                patch: [{
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/Crown-9x1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/970x252/1",
                                    value: "48"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/970x252/0",
                                    value: "46"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/970x251/1",
                                    value: "47"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/970x251/0",
                                    value: "45"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/970x250/0",
                                    value: "44"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/728x92/1",
                                    value: "43"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/728x92/0",
                                    value: "41"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/728x91/1",
                                    value: "42"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/728x91/0",
                                    value: "40"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/728x90/0",
                                    value: "39"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/320x59-mobile/1",
                                    value: "38"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/320x59-mobile/0",
                                    value: "35"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/320x58-mobile/1",
                                    value: "37"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/320x58-mobile/0",
                                    value: "34"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/320x51-mobile/1",
                                    value: "36"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/320x51-mobile/0",
                                    value: "33"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/320x50-mobile/0",
                                    value: "32"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x602/1",
                                    value: "31"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x602/0",
                                    value: "29"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x601/1",
                                    value: "30"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x601/0",
                                    value: "28"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x600/0",
                                    value: "27"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x51-mobile/1",
                                    value: "22"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x51-mobile/0",
                                    value: "21"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x50-mobile/0",
                                    value: "20"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x259-mobile/1",
                                    value: "19"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x259-mobile/0",
                                    value: "14"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x258-mobile/1",
                                    value: "18"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x258-mobile/0",
                                    value: "13"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x251-mobile/1",
                                    value: "16"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x251-mobile/0",
                                    value: "11"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x250-mobile/1",
                                    value: "10"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x252/1",
                                    value: "17"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x251/1",
                                    value: "15"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x252-mobile",
                                    value: ["12"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x581-mobile",
                                    value: ["23", "25"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x591-mobile",
                                    value: ["24", "26"]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/48/zoneId",
                                    value: "1248515"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/47/zoneId",
                                    value: "1248515"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/46/zoneId",
                                    value: "1248515"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/45/zoneId",
                                    value: "1248515"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/44/zoneId",
                                    value: "1248515"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/43/zoneId",
                                    value: "1248440"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/42/zoneId",
                                    value: "1248440"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/41/zoneId",
                                    value: "1248440"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/40/zoneId",
                                    value: "1248440"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/39/zoneId",
                                    value: "1248440"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/38/zoneId",
                                    value: "1248438"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/37/zoneId",
                                    value: "1248438"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/36/zoneId",
                                    value: "1248438"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/35/zoneId",
                                    value: "1248438"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/34/zoneId",
                                    value: "1248438"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/33/zoneId",
                                    value: "1248438"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/32/zoneId",
                                    value: "1248438"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/31/zoneId",
                                    value: "1248514"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/30/zoneId",
                                    value: "1248514"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/29/zoneId",
                                    value: "1248514"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/28/zoneId",
                                    value: "1248514"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/27/zoneId",
                                    value: "1248514"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/26/zoneId",
                                    value: "1248464"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/25/zoneId",
                                    value: "1248464"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/24/zoneId",
                                    value: "1248464"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/23/zoneId",
                                    value: "1248464"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/22/zoneId",
                                    value: "1248464"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/21/zoneId",
                                    value: "1248464"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/20/zoneId",
                                    value: "1248464"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/19/zoneId",
                                    value: "1248437"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/18/zoneId",
                                    value: "1248437"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/17/zoneId",
                                    value: "1248436"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/16/zoneId",
                                    value: "1248437"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/15/zoneId",
                                    value: "1248436"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/14/zoneId",
                                    value: "1248437"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/13/zoneId",
                                    value: "1248437"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/12/zoneId",
                                    value: "1248437"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/11/zoneId",
                                    value: "1248437"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/10/zoneId",
                                    value: "1248437"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/9/zoneId",
                                    value: "1248437"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/8/zoneId",
                                    value: "1248436"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/7/zoneId",
                                    value: "1248436"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/6/zoneId",
                                    value: "1248436"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/5/zoneId",
                                    value: "1248516"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/4/zoneId",
                                    value: "1248516"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/3/zoneId",
                                    value: "1248516"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/2/zoneId",
                                    value: "1248516"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/1/zoneId",
                                    value: "1248516"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/Crown-9x1/0",
                                    value: "32"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/970x92/0",
                                    value: "31"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/970x91/0",
                                    value: "30"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/970x90/0",
                                    value: "29"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/970x252/0",
                                    value: "28"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/970x251/0",
                                    value: "27"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/970x250/0",
                                    value: "26"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/728x92/0",
                                    value: "25"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/728x91/0",
                                    value: "24"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/728x90/0",
                                    value: "23"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/320x59-mobile/0",
                                    value: "22"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/320x58-mobile/0",
                                    value: "21"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/320x51-mobile/0",
                                    value: "20"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/320x50-mobile/0",
                                    value: "19"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x602/0",
                                    value: "18"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x601/0",
                                    value: "17"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x600/0",
                                    value: "16"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x51-mobile/0",
                                    value: "13"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x50-mobile/0",
                                    value: "12"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x259-mobile/0",
                                    value: "11"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x258-mobile/0",
                                    value: "10"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x252-mobile",
                                    value: ["9"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x581-mobile",
                                    value: ["14"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x591-mobile",
                                    value: ["15"]
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/sizes/2"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/sizes/1/1",
                                    value: 90
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/sizes/1/0",
                                    value: 970
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/sizes/0/1",
                                    value: 90
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/sizes/0/0",
                                    value: 970
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/30/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/30/siteId",
                                    value: "193912"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/29/sizes/1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/29/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/29/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/28/sizes/0/1",
                                    value: 250
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/28/sizes/1",
                                    value: [970, 250]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/28/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/28/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/27/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/27/siteId",
                                    value: "193912"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/26/sizes/1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/26/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/26/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/25/sizes/0/1",
                                    value: 90
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/25/sizes/0/0",
                                    value: 728
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/25/sizes/1",
                                    value: [728, 90]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/25/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/25/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/24/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/24/siteId",
                                    value: "193912"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/23/sizes/1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/23/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/23/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/22/sizes/0/1",
                                    value: 50
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/22/sizes/0/0",
                                    value: 320
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/22/sizes/1",
                                    value: [320, 50]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/22/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/22/siteId",
                                    value: "193916"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/21/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/21/siteId",
                                    value: "193916"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/20/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/20/siteId",
                                    value: "193916"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/19/sizes/1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/19/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/19/siteId",
                                    value: "193916"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/18/sizes/0/1",
                                    value: 600
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/18/sizes/0/0",
                                    value: 300
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/18/sizes/1",
                                    value: [300, 600]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/18/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/18/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/17/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/17/siteId",
                                    value: "193912"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/16/sizes/1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/16/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/16/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/15/sizes/0/1",
                                    value: 50
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/15/sizes/1",
                                    value: [300, 50]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/15/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/15/siteId",
                                    value: "193916"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/14/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/14/siteId",
                                    value: "193916"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/13/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/13/siteId",
                                    value: "193916"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/12/sizes/1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/12/zoneId",
                                    value: "944888"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/12/siteId",
                                    value: "193916"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/11/sizes/0/1",
                                    value: 250
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/11/sizes/1",
                                    value: [300, 250]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/11/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/11/siteId",
                                    value: "193916"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/10/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/10/siteId",
                                    value: "193916"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/9/sizes/1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/9/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/9/siteId",
                                    value: "193916"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/8/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/8/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/7/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/7/siteId",
                                    value: "193916"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/6/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/6/siteId",
                                    value: "193912"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/5/sizes/1",
                                    value: [800, 1100]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/5/zoneId",
                                    value: "944890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/5/siteId",
                                    value: "193916"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/4/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/4/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/3/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/3/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/2/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/2/siteId",
                                    value: "193912"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/1/zoneId",
                                    value: "944884"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/1/siteId",
                                    value: "193912"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/32",
                                    value: {
                                        siteId: "193912",
                                        zoneId: "944886",
                                        sizes: [
                                            [9, 1]
                                        ]
                                    }
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/TrustXHtb/configs/xSlots/3/adSlotId",
                                    value: "3890"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/TrustXHtb/configs/xSlots/2/adSlotId",
                                    value: "3889"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/TrustXHtb/configs/xSlots/1/adSlotId",
                                    value: "3888"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/FacebookHtb/configs/xSlots/1/placementId",
                                    value: "101358874221_10155740031054222"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/Crown-9x1"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/970x250"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/728x90"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/320x50-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x600"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x50-mobile"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x258-mobile",
                                    value: ["3"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x259-mobile",
                                    value: ["4"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x581-mobile",
                                    value: ["5"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x591-mobile",
                                    value: ["6"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/320x59-mobile",
                                    value: ["8"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/728x91",
                                    value: ["9"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/728x92",
                                    value: ["10"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/970x252",
                                    value: ["11"]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/10/placementId",
                                    value: "4704223"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/9/placementId",
                                    value: "4704219"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/8/placementId",
                                    value: "4704279"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/7/placementId",
                                    value: "4704278"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/6/placementId",
                                    value: "4704273"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/5/placementId",
                                    value: "4704269"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/4/placementId",
                                    value: "4704277"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/3/placementId",
                                    value: "4704271"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/2/placementId",
                                    value: "4704274"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/1/placementId",
                                    value: "4704218"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/11",
                                    value: {
                                        placementId: "4704220",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/Crown-9x1"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x602/1"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x252/1"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x581-mobile",
                                    value: ["25"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x591-mobile",
                                    value: ["28"]
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/xSlots/33"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/xSlots/32"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/xSlots/31"
                                }, {
                                    op: "replace",
                                    path: "/Services/HeaderStatsService/configId",
                                    value: "249989677871537"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/Crown-9x1/sizeMapping/0x0/2"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/Crown-9x1/sizeMapping/0x0/1"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/Crown-9x1/id",
                                    value: "8aa080b3-2780-d719-19e4-5f63f5aa2af2"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x92/id",
                                    value: "aad5bf32-b832-3a92-53ec-ed1376c993e9"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x91/id",
                                    value: "e101ae8e-9219-7e3c-c0e0-d3c9c17e40e2"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x90/id",
                                    value: "9532ab5b-4555-ce2a-887f-9eefe03ee35d"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x252/id",
                                    value: "ce0948f6-0288-d9e5-0c1a-327b59022dd9"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x251/id",
                                    value: "07620cac-d0c8-b3a0-bec8-6834f4ecda31"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x250/id",
                                    value: "7dafa348-7953-b574-a6cf-79e3eed7ac53"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/728x92/id",
                                    value: "6f4f5571-4e7a-ed26-c176-a1db147b4874"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/728x91/id",
                                    value: "70648603-f41b-54ec-93a6-99c21914732b"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/728x90/id",
                                    value: "64496a3d-6778-5a1a-2b0a-7b773be00a52"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x59-mobile/id",
                                    value: "fc450c73-6601-6979-1ae8-b928eb5a2bab"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x58-mobile/id",
                                    value: "b71b1217-158f-cd90-9ca8-7771f5bdc53d"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x51-mobile/id",
                                    value: "5bcfcc93-6cc6-203c-0ae9-5f356570eeed"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x50-mobile/id",
                                    value: "a825c853-6181-695c-aa74-89320c8e3839"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x602/id",
                                    value: "426c0516-31e2-bfeb-e432-3bb318634641"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x601/id",
                                    value: "4eeeaab8-4dba-c38b-e882-8047dd5f32b0"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x600/id",
                                    value: "3554362a-7050-c2f3-908f-0807cabd01f1"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/300x58-mobile"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x51-mobile/id",
                                    value: "67b28568-60b9-0428-a270-c4601c721f0a"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x50-mobile/id",
                                    value: "50d5241a-1269-db79-b59b-fb2c31b5d1b3"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x259-mobile/id",
                                    value: "8818d787-042f-c90e-752c-97e8520aa276"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x258-mobile/id",
                                    value: "6da5fbb5-f754-2fca-b410-731b00c46d22"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x252/id",
                                    value: "d3551334-177f-84e0-a633-b1882df67c7c"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x251-mobile/id",
                                    value: "c6a4e9bc-c08d-5c11-005f-84d411af8b37"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x251/id",
                                    value: "a2cc26b7-b1c3-ef03-59cb-6d95466d6fa1"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x250-mobile/sizeMapping/0x0/0/1",
                                    value: 1100
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x250-mobile/sizeMapping/0x0/0/0",
                                    value: 800
                                }, {
                                    op: "add",
                                    path: "/htSlots/300x250-mobile/sizeMapping/0x0/1",
                                    value: [300, 250]
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x250-mobile/id",
                                    value: "3cc70385-13d1-b5e4-e89f-7a6f45f1ce62"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x250/id",
                                    value: "16f5c21d-f03c-eb53-6b0d-1ab4759c4254"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x1052/id",
                                    value: "4c4ebeba-e101-f1e4-c186-9627eed22571"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x1051/id",
                                    value: "c916e64c-d50b-8217-d85e-89ea1fb486e7"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x1050/id",
                                    value: "d216480f-7772-a89e-ec1b-c1a52770f00e"
                                }, {
                                    op: "add",
                                    path: "/htSlots/300x252-mobile",
                                    value: {
                                        id: "5a4ea49e-f4eb-a3a6-76f8-17297091b640",
                                        deviceType: "mobile",
                                        sizeMapping: {
                                            "0x0": [
                                                [300, 250]
                                            ]
                                        }
                                    }
                                }, {
                                    op: "add",
                                    path: "/htSlots/300x581-mobile",
                                    value: {
                                        id: "4957b39f-7553-a73d-d7fb-9a5d52069da4",
                                        deviceType: "mobile",
                                        sizeMapping: {
                                            "0x0": [
                                                [300, 58],
                                                [300, 50]
                                            ]
                                        }
                                    }
                                }, {
                                    op: "add",
                                    path: "/htSlots/300x591-mobile",
                                    value: {
                                        id: "bc2d567e-4125-3b63-4363-6300321af43e",
                                        deviceType: "mobile",
                                        sizeMapping: {
                                            "0x0": [
                                                [300, 59],
                                                [300, 50]
                                            ]
                                        }
                                    }
                                }]
                            }, {
                                regex: "newyorker\\.com",
                                patch: [{
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/Crown-9x1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/970x252/1",
                                    value: "46"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/970x251/1",
                                    value: "45"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x581-mobile",
                                    value: ["21", "23"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x591-mobile",
                                    value: ["22", "24"]
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/48"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/47"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/46/zoneId",
                                    value: "1248518"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/45/zoneId",
                                    value: "1248518"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/44/zoneId",
                                    value: "1248518"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/43/zoneId",
                                    value: "1248518"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/42/zoneId",
                                    value: "1248518"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/41/zoneId",
                                    value: "1248446"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/40/zoneId",
                                    value: "1248446"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/39/zoneId",
                                    value: "1248446"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/38/zoneId",
                                    value: "1248446"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/37/zoneId",
                                    value: "1248446"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/36/zoneId",
                                    value: "1248449"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/35/zoneId",
                                    value: "1248449"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/34/zoneId",
                                    value: "1248449"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/33/zoneId",
                                    value: "1248449"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/32/zoneId",
                                    value: "1248449"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/31/zoneId",
                                    value: "1248449"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/30/zoneId",
                                    value: "1248449"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/29/zoneId",
                                    value: "1248517"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/28/zoneId",
                                    value: "1248517"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/27/zoneId",
                                    value: "1248517"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/26/zoneId",
                                    value: "1248517"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/25/zoneId",
                                    value: "1248517"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/24/zoneId",
                                    value: "1248466"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/23/zoneId",
                                    value: "1248466"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/22/zoneId",
                                    value: "1248466"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/21/zoneId",
                                    value: "1248466"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/20/zoneId",
                                    value: "1248466"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/19/zoneId",
                                    value: "1248466"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/18/zoneId",
                                    value: "1248466"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/17/zoneId",
                                    value: "1248447"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/16/zoneId",
                                    value: "1248447"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/15/zoneId",
                                    value: "1248448"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/14/zoneId",
                                    value: "1248447"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/13/zoneId",
                                    value: "1248448"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/12/zoneId",
                                    value: "1248447"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/11/zoneId",
                                    value: "1248447"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/10/zoneId",
                                    value: "1248447"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/9/zoneId",
                                    value: "1248447"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/8/zoneId",
                                    value: "1248448"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/7/zoneId",
                                    value: "1248448"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/6/zoneId",
                                    value: "1248448"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/5/zoneId",
                                    value: "1248519"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/4/zoneId",
                                    value: "1248519"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/3/zoneId",
                                    value: "1248519"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/2/zoneId",
                                    value: "1248519"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/1/zoneId",
                                    value: "1248519"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x581-mobile",
                                    value: ["13"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x591-mobile",
                                    value: ["14"]
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/sizes/2"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/sizes/1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/zoneId",
                                    value: "944894"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/30/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/30/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/29/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/29/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/28/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/28/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/27/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/27/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/26/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/26/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/25/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/25/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/24/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/24/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/23/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/23/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/22/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/22/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/21/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/21/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/20/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/20/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/19/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/19/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/18/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/18/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/17/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/17/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/16/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/16/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/15/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/15/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/14/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/14/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/13/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/13/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/12/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/12/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/11/zoneId",
                                    value: "944896"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/11/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/10/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/10/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/9/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/9/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/8/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/8/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/7/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/7/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/6/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/6/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/5/zoneId",
                                    value: "944898"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/5/siteId",
                                    value: "193920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/4/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/4/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/3/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/3/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/2/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/2/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/1/zoneId",
                                    value: "944892"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/1/siteId",
                                    value: "193918"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/TrustXHtb/configs/xSlots/3/adSlotId",
                                    value: "3921"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/TrustXHtb/configs/xSlots/2/adSlotId",
                                    value: "3920"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/TrustXHtb/configs/xSlots/1/adSlotId",
                                    value: "3919"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/FacebookHtb/configs/xSlots/1/placementId",
                                    value: "101358874221_10155745905859222"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/Crown-9x1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/970x250/0",
                                    value: "23"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/728x90/0",
                                    value: "21"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/320x58-mobile/0",
                                    value: "19"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/320x50-mobile/0",
                                    value: "17"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x600/0",
                                    value: "14"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x50-mobile/0",
                                    value: "10"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x250-mobile/0",
                                    value: "4"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x250/0",
                                    value: "3"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x1051",
                                    value: ["1"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x1052",
                                    value: ["2"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x251",
                                    value: ["5"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x251-mobile",
                                    value: ["6"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x252",
                                    value: ["7"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x258-mobile",
                                    value: ["8"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x259-mobile",
                                    value: ["9"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x51-mobile",
                                    value: ["11"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x581-mobile",
                                    value: ["12"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x591-mobile",
                                    value: ["13"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x601",
                                    value: ["15"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x602",
                                    value: ["16"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/320x51-mobile",
                                    value: ["18"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/320x59-mobile",
                                    value: ["20"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/728x92",
                                    value: ["22"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/970x252",
                                    value: ["24"]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/10/placementId",
                                    value: "4704334"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/9/placementId",
                                    value: "4704335"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/8/placementId",
                                    value: "4704333"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/7/placementId",
                                    value: "4704291"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/6/placementId",
                                    value: "4704331"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/5/placementId",
                                    value: "4704293"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/4/placementId",
                                    value: "4704332"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/3/placementId",
                                    value: "4704296"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/2/placementId",
                                    value: "4704300"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/1/placementId",
                                    value: "4704299"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/11",
                                    value: {
                                        placementId: "4704338",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/12",
                                    value: {
                                        placementId: "4704339",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/13",
                                    value: {
                                        placementId: "4704341",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/14",
                                    value: {
                                        placementId: "4704294",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/15",
                                    value: {
                                        placementId: "4704295",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/16",
                                    value: {
                                        placementId: "4704298",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/17",
                                    value: {
                                        placementId: "4704336",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/18",
                                    value: {
                                        placementId: "4704330",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/19",
                                    value: {
                                        placementId: "4704337",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/20",
                                    value: {
                                        placementId: "4704340",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/21",
                                    value: {
                                        placementId: "4704297",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/22",
                                    value: {
                                        placementId: "4704301",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/23",
                                    value: {
                                        placementId: "4704305",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/24",
                                    value: {
                                        placementId: "4704304",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/Crown-9x1"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x602/1"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x252/1"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x581-mobile",
                                    value: ["25"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x591-mobile",
                                    value: ["28"]
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/xSlots/33"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/xSlots/32"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/xSlots/31"
                                }, {
                                    op: "replace",
                                    path: "/Services/HeaderStatsService/configId",
                                    value: "38885784035689"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/Crown-9x1/sizeMapping/0x0/2"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/Crown-9x1/sizeMapping/0x0/1"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/Crown-9x1/id",
                                    value: "63d7ca1a-f02a-2471-ebde-f3e86e8c8bb2"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x92/id",
                                    value: "5d09fcab-6639-ccc2-3142-6ccf29cdb282"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x91/id",
                                    value: "7b8a05ad-43fe-08ae-da98-61b483172b0c"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x90/id",
                                    value: "00526089-8eb7-aaf6-8551-1b9c2cd71767"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x252/id",
                                    value: "28f9618e-5ff0-8f9d-966a-b2fde2834153"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x251/id",
                                    value: "14e5fdee-90da-a27f-e4c3-365ea4060639"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x250/id",
                                    value: "34d9358e-7429-3179-df7b-e2df89842ee6"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/728x92/id",
                                    value: "a6396532-eec2-8fe1-6672-45774183012e"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/728x91/id",
                                    value: "76dc690e-6dc1-e894-434e-a67e53215f67"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/728x90/id",
                                    value: "7173db29-81cc-73bf-9b0b-48c062c4d845"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x59-mobile/id",
                                    value: "9fccae5b-b2a8-d696-cbe7-d58be3dcb862"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x58-mobile/id",
                                    value: "688fbe97-5c27-dac8-93cc-21f37177f26b"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x51-mobile/id",
                                    value: "88b3c074-b9c9-f1d7-4c32-790155057ba4"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x50-mobile/id",
                                    value: "f24f88e6-efce-8f17-f084-619fc015d27f"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x602/id",
                                    value: "0c211a70-6560-65af-3a23-f0a12439ae2f"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x601/id",
                                    value: "8d6f6dfc-b3a3-fc73-6fe9-12db3ce62ff7"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x600/id",
                                    value: "9a4d9130-39ec-ee4f-c0cb-5f76bdf6e6db"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/300x58-mobile"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x51-mobile/id",
                                    value: "12039462-c877-3bc8-808d-791e799abcf7"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x50-mobile/id",
                                    value: "ba86de83-e31d-f670-f5ef-c7bb0f713925"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x259-mobile/id",
                                    value: "f994ffc5-b903-0404-c970-03f50a68d0af"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x258-mobile/id",
                                    value: "f3c697b7-2b2c-a822-3201-7a1a35f3e647"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x252/id",
                                    value: "8ddbd635-38f8-f918-eee8-3fac99e1b840"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x251-mobile/id",
                                    value: "90c26f13-37e6-2f24-5978-b43c405074e7"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x251/id",
                                    value: "772c2987-4e61-772f-8ac2-504dc6e22a7c"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x250-mobile/id",
                                    value: "52f1bdad-70b0-6be9-c11c-7790b68171b4"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x250/id",
                                    value: "c92e4523-744b-ec68-60c6-6795026102a7"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x1052/id",
                                    value: "eea53ba4-2228-43a8-756c-fd67079e4915"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x1051/id",
                                    value: "d66c3a54-cb7a-2da7-ee09-9211ae2105f3"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x1050/id",
                                    value: "f5cf0469-c7f3-c8b3-16bc-46c09f903502"
                                }, {
                                    op: "add",
                                    path: "/htSlots/300x581-mobile",
                                    value: {
                                        id: "98d0aae8-0039-bb09-192f-4b0c31581d6c",
                                        deviceType: "mobile",
                                        sizeMapping: {
                                            "0x0": [
                                                [300, 58],
                                                [300, 50]
                                            ]
                                        }
                                    }
                                }, {
                                    op: "add",
                                    path: "/htSlots/300x591-mobile",
                                    value: {
                                        id: "27ae5325-b8f2-c8e2-7ae8-d013136acbd2",
                                        deviceType: "mobile",
                                        sizeMapping: {
                                            "0x0": [
                                                [300, 59],
                                                [300, 50]
                                            ]
                                        }
                                    }
                                }]
                            }, {
                                regex: "vanityfair\\.com",
                                patch: [{
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/Crown-9x1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/970x252/1",
                                    value: "46"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/970x251/1",
                                    value: "45"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x581-mobile",
                                    value: ["21", "23"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/mapping/300x591-mobile",
                                    value: ["22", "24"]
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/48"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/47"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/46/zoneId",
                                    value: "1248521"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/45/zoneId",
                                    value: "1248521"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/44/zoneId",
                                    value: "1248521"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/43/zoneId",
                                    value: "1248521"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/42/zoneId",
                                    value: "1248521"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/41/zoneId",
                                    value: "1248454"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/40/zoneId",
                                    value: "1248454"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/39/zoneId",
                                    value: "1248454"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/38/zoneId",
                                    value: "1248454"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/37/zoneId",
                                    value: "1248454"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/36/zoneId",
                                    value: "1248457"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/35/zoneId",
                                    value: "1248457"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/34/zoneId",
                                    value: "1248457"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/33/zoneId",
                                    value: "1248457"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/32/zoneId",
                                    value: "1248457"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/31/zoneId",
                                    value: "1248457"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/30/zoneId",
                                    value: "1248457"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/29/zoneId",
                                    value: "1248520"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/28/zoneId",
                                    value: "1248520"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/27/zoneId",
                                    value: "1248520"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/26/zoneId",
                                    value: "1248520"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/25/zoneId",
                                    value: "1248520"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/24/zoneId",
                                    value: "1248462"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/23/zoneId",
                                    value: "1248462"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/22/zoneId",
                                    value: "1248462"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/21/zoneId",
                                    value: "1248462"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/20/zoneId",
                                    value: "1248462"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/19/zoneId",
                                    value: "1248462"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/18/zoneId",
                                    value: "1248462"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/17/zoneId",
                                    value: "1248456"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/16/zoneId",
                                    value: "1248456"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/15/zoneId",
                                    value: "1248455"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/14/zoneId",
                                    value: "1248456"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/13/zoneId",
                                    value: "1248455"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/12/zoneId",
                                    value: "1248456"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/11/zoneId",
                                    value: "1248456"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/10/zoneId",
                                    value: "1248456"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/9/zoneId",
                                    value: "1248456"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/8/zoneId",
                                    value: "1248455"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/7/zoneId",
                                    value: "1248455"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/6/zoneId",
                                    value: "1248455"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/5/zoneId",
                                    value: "1248522"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/4/zoneId",
                                    value: "1248522"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/3/zoneId",
                                    value: "1248522"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/2/zoneId",
                                    value: "1248522"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/CriteoHtb/configs/xSlots/1/zoneId",
                                    value: "1248522"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x581-mobile",
                                    value: ["13"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/mapping/300x591-mobile",
                                    value: ["14"]
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/sizes/2"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/sizes/1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/zoneId",
                                    value: "944902"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/31/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/30/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/30/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/29/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/29/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/28/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/28/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/27/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/27/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/26/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/26/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/25/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/25/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/24/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/24/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/23/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/23/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/22/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/22/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/21/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/21/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/20/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/20/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/19/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/19/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/18/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/18/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/17/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/17/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/16/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/16/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/15/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/15/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/14/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/14/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/13/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/13/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/12/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/12/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/11/zoneId",
                                    value: "944904"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/11/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/10/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/10/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/9/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/9/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/8/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/8/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/7/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/7/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/6/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/6/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/5/zoneId",
                                    value: "944906"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/5/siteId",
                                    value: "193924"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/4/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/4/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/3/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/3/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/2/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/2/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/1/zoneId",
                                    value: "944900"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/RubiconHtb/configs/xSlots/1/siteId",
                                    value: "193922"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/TrustXHtb/configs/xSlots/3/adSlotId",
                                    value: "3952"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/TrustXHtb/configs/xSlots/2/adSlotId",
                                    value: "3951"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/TrustXHtb/configs/xSlots/1/adSlotId",
                                    value: "3950"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/FacebookHtb/configs/xSlots/1/placementId",
                                    value: "101358874221_10155745907434222"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/Crown-9x1"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/970x250/0",
                                    value: "14"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/728x90/0",
                                    value: "12"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/320x58-mobile/0",
                                    value: "11"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/320x50-mobile/0",
                                    value: "10"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x600/0",
                                    value: "8"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x50-mobile/0",
                                    value: "5"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x250-mobile/0",
                                    value: "4"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x250/0",
                                    value: "3"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x1051",
                                    value: ["1"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x1052",
                                    value: ["2"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x581-mobile",
                                    value: ["6"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x591-mobile",
                                    value: ["7"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/300x602",
                                    value: ["9"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/mapping/728x91",
                                    value: ["13"]
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/10/placementId",
                                    value: "4704365"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/9/placementId",
                                    value: "4704348"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/8/placementId",
                                    value: "4704345"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/7/placementId",
                                    value: "4704360"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/6/placementId",
                                    value: "4704367"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/5/placementId",
                                    value: "4704364"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/4/placementId",
                                    value: "4704362"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/3/placementId",
                                    value: "4704353"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/2/placementId",
                                    value: "4704346"
                                }, {
                                    op: "replace",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/1/placementId",
                                    value: "4704347"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/11",
                                    value: {
                                        placementId: "4704370",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/12",
                                    value: {
                                        placementId: "4704352",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/13",
                                    value: {
                                        placementId: "4704357",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/AolHtb/configs/xSlots/14",
                                    value: {
                                        placementId: "4704358",
                                        sizeId: "-1",
                                        pageId: "0"
                                    }
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/Crown-9x1"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x58-mobile"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x602/1"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x252/1"
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x581-mobile",
                                    value: ["25"]
                                }, {
                                    op: "add",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/mapping/300x591-mobile",
                                    value: ["28"]
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/xSlots/33"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/xSlots/32"
                                }, {
                                    op: "remove",
                                    path: "/Layers/2/configs/partners/IndexExchangeHtb/configs/xSlots/31"
                                }, {
                                    op: "replace",
                                    path: "/Services/HeaderStatsService/configId",
                                    value: "85065272300572"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/Crown-9x1/sizeMapping/0x0/2"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/Crown-9x1/sizeMapping/0x0/1"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/Crown-9x1/id",
                                    value: "25ab0313-7fdf-310a-5ac4-a5f85c4e6c53"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x92/id",
                                    value: "fdb51798-17f4-b433-0b08-b04ce6f6b176"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x91/id",
                                    value: "48d03263-caaf-df13-380a-f89c6d867fba"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x90/id",
                                    value: "4eeb143a-5914-1864-ef0a-465e650b061c"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x252/id",
                                    value: "a4703a31-adb9-b253-ff83-2c4a4de7500b"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x251/id",
                                    value: "9ff79175-2b17-a7bf-73ca-33b5b557b2ef"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/970x250/id",
                                    value: "9bfced74-3739-80e6-a1cb-b01c31e5547e"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/728x92/id",
                                    value: "1dad5cb0-f2ac-cb7a-4f33-ea875cdeb7d8"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/728x91/id",
                                    value: "88dc96c1-7629-14bf-678f-767150657dfc"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/728x90/id",
                                    value: "21b3d5ff-776d-479c-dc57-98b685a6707f"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x59-mobile/id",
                                    value: "a659425e-25ff-54d2-d2f1-0a1f622eedcc"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x58-mobile/id",
                                    value: "d096cb53-4869-c32e-0aa0-d8c1eb1aa9c7"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x51-mobile/id",
                                    value: "2aff807a-1038-424b-fd7f-2d8b2d602ba2"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/320x50-mobile/id",
                                    value: "a6a7ae0f-b94e-538f-a53f-bf06bf8629a7"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x602/id",
                                    value: "1a3d8636-bb2c-b340-e28a-5ee8178abd00"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x601/id",
                                    value: "57f15c71-6035-3c92-d9b4-197d36d84be2"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x600/id",
                                    value: "ada82f8f-d2ef-2998-cc30-8eb7699606b9"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/300x59-mobile"
                                }, {
                                    op: "remove",
                                    path: "/htSlots/300x58-mobile"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x51-mobile/id",
                                    value: "8a192c76-6000-681b-9477-740c241a874c"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x50-mobile/id",
                                    value: "39443fcc-770c-a0bc-5335-98261527a5f9"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x259-mobile/id",
                                    value: "fe4bb7fa-202f-f131-31b3-1c79430624c4"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x258-mobile/id",
                                    value: "72b422bf-b49a-3121-79f3-0e8e67344ac3"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x252/id",
                                    value: "4b7918f5-ee1e-9ccd-fb66-afff34e441ed"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x251-mobile/id",
                                    value: "a05087c2-df89-05eb-2c75-4cfd948359f6"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x251/id",
                                    value: "64619602-4e4c-96c6-b2b6-e130f7835b38"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x250-mobile/id",
                                    value: "de303a69-375d-34ee-7f05-b20d5c1ee3a2"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x250/id",
                                    value: "70aa2b80-f739-b5e3-0458-d50020136037"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x1052/id",
                                    value: "67dcfbfb-5061-c169-9a82-f5f9b39a408e"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x1051/id",
                                    value: "29bfcc9b-409e-b82a-5f56-16ce2e32c4b4"
                                }, {
                                    op: "replace",
                                    path: "/htSlots/300x1050/id",
                                    value: "15852d04-4260-8742-eafa-a0bfa2e647fd"
                                }, {
                                    op: "add",
                                    path: "/htSlots/300x581-mobile",
                                    value: {
                                        id: "be2cc4b6-e93b-c825-8e61-4a2e6be9da0d",
                                        deviceType: "mobile",
                                        sizeMapping: {
                                            "0x0": [
                                                [300, 58],
                                                [300, 50]
                                            ]
                                        }
                                    }
                                }, {
                                    op: "add",
                                    path: "/htSlots/300x591-mobile",
                                    value: {
                                        id: "bbb66ec8-fb0f-d270-d588-4513cc24f674",
                                        deviceType: "mobile",
                                        sizeMapping: {
                                            "0x0": [
                                                [300, 59],
                                                [300, 50]
                                            ]
                                        }
                                    }
                                }]
                            }], t = 0; t < e.length; t++) {
                            if (new RegExp(e[t].regex).test(o.getPageUrl())) {
                                d = l.applyPatch(d, e[t].patch);
                                break
                            }
                        }
                        f = i(d).getDirectInterface(), a = p.services.ComplianceService, n = p.services.EventsService;
                        try {
                            f.Layers.IdentityLayer.retrieve()
                        } catch (e) {}
                    } catch (e) {
                        u = {
                            setFirstPartyData: function() {},
                            retrieveDemand: function(e, t) {
                                return setTimeout(t.bind(null, {}), 0), ""
                            },
                            subscribeEvent: function() {
                                return ""
                            },
                            unsubscribeEvent: function() {}
                        }
                    }
                }(), u) return u;
            var h = {};
            if (window[p.NAMESPACE])
                for (var v in window[p.NAMESPACE]) window[p.NAMESPACE].hasOwnProperty(v) && (h[v] = window[p.NAMESPACE][v]);
            h.setFirstPartyData = e, h.retrieveDemand = a.delay(t), h.subscribeEvent = r, h.unsubscribeEvent = s;
            try {
                h.IndexExchangeHtb = {
                    render: p.services.RenderService.renderDfpAd.bind(null, "IndexExchangeHtb")
                }, h.IxModule = {
                    render: p.services.RenderService.renderDfpAd.bind(null, "IndexExchangeHtb")
                }, window.headertag_render = p.services.RenderService.renderIndexLegacyAd.bind(null, "IndexExchangeHtb"), f.Layers.PartnersLayer.Partners.IndexExchangeHtb && (h.IndexExchangeHtb = h.IndexExchangeHtb || {}, h.IndexExchangeHtb.adResponseCallback = f.Layers.PartnersLayer.Partners.IndexExchangeHtb.adResponseCallback)
            } catch (e) {}
            try {
                h.AolHtb = {
                    render: p.services.RenderService.renderDfpAd.bind(null, "AolHtb")
                }, h.AolModule = {
                    render: p.services.RenderService.renderDfpAd.bind(null, "AolHtb")
                }, f.Layers.PartnersLayer.Partners.AolHtb && (h.AolHtb = h.AolHtb || {}, h.AolHtb.adResponseCallbacks = f.Layers.PartnersLayer.Partners.AolHtb.adResponseCallbacks)
            } catch (e) {}
            try {
                h.FacebookHtb = {
                    render: p.services.RenderService.renderDfpAd.bind(null, "FacebookHtb")
                }, h.renderFacebookAd = h.FacebookHtb.render
            } catch (e) {}
            try {
                h.TrustXHtb = {
                    render: p.services.RenderService.renderDfpAd.bind(null, "TrustXHtb")
                }, f.Layers.PartnersLayer.Partners.TrustXHtb && (h.TrustXHtb = h.TrustXHtb || {}, h.TrustXHtb.adResponseCallbacks = f.Layers.PartnersLayer.Partners.TrustXHtb.adResponseCallbacks)
            } catch (e) {}
            try {
                h.RubiconHtb = {
                    render: p.services.RenderService.renderDfpAd.bind(null, "RubiconHtb")
                }, window.top.rubicontag = window.top.rubicontag || {}, window.top.rubicontag.renderCreative = p.services.RenderService.renderRubiconAd.bind(null, "RubiconHtb")
            } catch (e) {}
            try {
                h.CriteoHtb = {
                    render: p.services.RenderService.renderDfpAd.bind(null, "CriteoHtb")
                }, h.CriteoModule = {
                    render: h.CriteoHtb.render
                }
            } catch (e) {}
            return h
        }(), window[p.NAMESPACE].cmd = s(d)
    }, {}],
    43: [function(e, t, r) {
        "use strict";
        var a = {
            NAMESPACE: "headertag",
            PRODUCT: "Universal",
            services: {},
            htSlots: [],
            htSlotsMap: {},
            DeviceTypeChecker: {},
            initQueue: [],
            globalTimeout: null,
            instanceId: null,
            version: "2.10.0"
        };
        t.exports = a
    }, {}]
}, {}, [42]);
(function() {
    'use strict';
    var condePrefix = 'vnd_indx_';
    var storeTargetingKeys = [];
    for (var renderer in window.headertag) {
        if (!window.headertag.hasOwnProperty(renderer) || typeof window.headertag[renderer] !== 'object' || typeof window.headertag[renderer].render !== 'function') {
            continue
        }(function(originalRenderer) {
            window.headertag[renderer].render = function() {
                var args = Array.prototype.slice.call(arguments);
                var targeting = args[1];
                for (var key in targeting) {
                    if (targeting.hasOwnProperty(key)) {
                        if (key.indexOf(condePrefix) === 0) {
                            targeting[key.slice(condePrefix.length)] = targeting[key]
                        }
                    }
                }
                originalRenderer.apply(null, args)
            }
        })(window.headertag[renderer].render)
    }
    window.headertag.condeFetchDemand = function(api, callback) {
        var requestObjs = [];
        var sizeStrings = api.getMeta().sizes;
        if (!sizeStrings) {
            return
        }
        var deviceType = navigator.userAgent.indexOf('Mobi') !== -1 ? 'mobile' : 'desktop';
        for (var i = 0; i < sizeStrings.length; i++) {
            requestObjs.push({
                htSlotName: sizeStrings[i] + (deviceType === 'mobile' ? '-mobile' : '')
            })
        }
        window.headertag.retrieveDemand(requestObjs, function(receivedDemand) {
            for (var i = 0; i < storeTargetingKeys.length; i++) {
                api.addTargeting(storeTargetingKeys[i].toLowerCase(), [''])
            }
            var targetingKeyVals = {};
            if (receivedDemand.slot) {
                for (var htSlotName in receivedDemand.slot) {
                    if (!receivedDemand.slot.hasOwnProperty(htSlotName)) {
                        continue
                    }
                    var slotDemand = receivedDemand.slot[htSlotName];
                    for (var j = 0; j < slotDemand.length; j++) {
                        var targeting = slotDemand[j].targeting;
                        for (var slotKey in targeting) {
                            if (!targeting.hasOwnProperty(slotKey)) {
                                continue
                            }
                            targetingKeyVals[slotKey] = targetingKeyVals[slotKey] || [];
                            for (var k = 0; k < targeting[slotKey].length; k++) {
                                targetingKeyVals[slotKey].push(targeting[slotKey][k]);
                                if (!(storeTargetingKeys.indexOf(slotKey) > -1)) {
                                    storeTargetingKeys.push(slotKey)
                                }
                            }
                        }
                    }
                }
            }
            if (receivedDemand.page && receivedDemand.page.targeting) {
                var pTargeting = receivedDemand.page.targeting;
                for (var pageKey in pTargeting) {
                    if (!pTargeting.hasOwnProperty(pageKey)) {
                        continue
                    }
                    targetingKeyVals[pageKey] = targetingKeyVals[pageKey] || [];
                    for (var l = 0; l < pTargeting[pageKey].length; l++) {
                        targetingKeyVals[pageKey].push(pTargeting[pageKey][l])
                    }
                }
            }
            for (var key in targetingKeyVals) {
                if (!targetingKeyVals.hasOwnProperty(key)) {
                    continue
                }
                api.addTargeting(key, targetingKeyVals[key])
            }
            if (callback) {
                callback(api, targetingKeyVals)
            }
        })
    }
})();