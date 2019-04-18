! function e(t, r, i) {
    function n(a, o) {
        if (!r[a]) {
            if (!t[a]) {
                var d = "function" == typeof require && require;
                if (!o && d) return d(a, !0);
                if (s) return s(a, !0);
                var u = new Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var c = r[a] = {
                exports: {}
            };
            t[a][0].call(c.exports, function(e) {
                var r = t[a][1][e];
                return n(r || e)
            }, c, c.exports, e, t, r, i)
        }
        return r[a].exports
    }
    for (var s = "function" == typeof require && require, a = 0; a < i.length; a++) n(i[a]);
    return n
}({
    1: [function(e, t, r) {
        "use strict";

        function i(e) {
            var t, r, i;
            return function() {
                t = s(), r = {
                    slotDemandHistory: {},
                    globalTimeout: e.globalTimeout
                }, a.globalTimeout = e.globalTimeout, i = {};
                for (var n = 0; n < d.length; n++) i = o.mergeObjects(i, d[n](e, r, t._executeNext));
                t._setDirectInterface("GptLayer", i)
            }(), n.derive(t, {})
        }
        var n = e(9),
            s = e(3),
            a = e(48),
            o = e(23),
            d = (e(24), [e(32), e(26), e(29), e(28), e(31), e(27), e(30)]);
        t.exports = i
    }, {}],
    2: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(e, t) {
                return _[e] = T.IN_PROGRESS, new d(function(r) {
                    t.retrieve().then(function() {
                        _[e] = T.COMPLETE, r()
                    }).catch(function(t) {
                        _[e] = T.COMPLETE, r()
                    })
                })
            }

            function r() {
                for (var e = [], r = d.defer(), i = Object.keys(m); i.length;) {
                    var n = c.randomSplice(i),
                        s = m[n];
                    if (s.enabled) try {
                        e.push(t(n, s.instance))
                    } catch (e) {}
                }
                return d.all(e).then(function() {
                    r.resolve()
                }), r
            }

            function i() {
                var e = {};
                for (var t in m)
                    if (m.hasOwnProperty(t)) {
                        var r = m[t];
                        if (r.enabled) {
                            var i = r.instance.getResults();
                            i && (e[t] = {
                                data: i
                            })
                        }
                    } return e
            }

            function p() {
                for (var e in _) _.hasOwnProperty(e) && _[e] !== T.COMPLETE && n.emit("hs_identity_timeout", {
                    statsId: m[e].instance.getStatsId()
                })
            }

            function f() {
                y === T.NOT_STARTED && (I = r(), y = T.IN_PROGRESS, I.promise.then(function() {
                    p(), y = T.COMPLETE
                }), 0 === b ? I.resolve() : x || (x = s.createTimer(b, !1, function() {
                    I.resolve()
                })))
            }

            function g() {
                return y === T.NOT_STARTED ? d.resolve(null) : (y !== T.COMPLETE && x && s.startTimer(x), I.promise.then(function() {
                    return i()
                }))
            }

            function h(e, t) {
                return g().then(function(r) {
                    if (r && !c.isEmpty(r))
                        for (var i = 0; i < t.length; i++) t[i].identityData = r;
                    return v._executeNext(e, t)
                })
            }
            var v, m, y, _, b, I, x, T = {
                NOT_STARTED: 0,
                IN_PROGRESS: 1,
                COMPLETE: 2
            };
            return function() {
                n = u.services.EventsService, s = u.services.TimerService, v = o(), b = e.timeout, y = T.NOT_STARTED, _ = {}, m = e.partners, n.emit("hs_define_identity_timeout", {
                    timeout: b
                });
                for (var t = Object.keys(m), r = t.length - 1; r >= 0; r--) {
                    var i = c.randomSplice(t),
                        a = m[i];
                    if (a.enabled) try {
                        if (a.instance = l[i](a.configs), !a.instance) {
                            a.enabled = !1;
                            continue
                        }
                        _[i] = T.NOT_STARTED
                    } catch (e) {
                        a.enabled = !1
                    }
                }
                v._setDirectInterface("IdentityLayer", {
                    retrieve: f,
                    getResult: g
                }), v._setExecutor(h)
            }(), a.derive(v, {
                retrieve: f,
                getResult: g
            })
        }
        var n, s, a = e(9),
            o = e(3),
            d = e(14),
            u = e(48),
            c = e(23),
            l = {
                AdserverOrgIp: e(33),
                LiveRampIp: e(34)
            };
        t.exports = i
    }, {}],
    3: [function(e, t, r) {
        "use strict";

        function i() {
            function e(e, t) {
                return n.resolve(t)
            }

            function t(e, t) {
                d = {}, d[e] = t
            }

            function r(e) {
                u = e
            }

            function i() {
                return d
            }

            function s(e) {
                c = e
            }

            function a(e, t) {
                return c(e, t)
            }

            function o(e, t) {
                return n.resolve().then(function() {
                    return u(e, t)
                })
            }
            var d, u, c;
            return function() {
                d = null, u = e, c = e
            }(), {
                _setDirectInterface: t,
                _setExecutor: r,
                _executeNext: a,
                setNext: s,
                getDirectInterface: i,
                execute: o
            }
        }
        var n = e(14);
        e(24);
        t.exports = i
    }, {}],
    4: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(e, t) {
                return r._executeNext(e, t).then(function(t) {
                    for (var r = {
                            slot: {},
                            partner: {}
                        }, s = [], a = t.slice(); t.length;) {
                        var u = d.randomSplice(t);
                        if (u.htSlot) {
                            var c = u.htSlot.getName();
                            u.pass || (u.hasOwnProperty("price") && d.isNumber(u.price) ? (r.slot.hasOwnProperty(c) ? r.slot[c].price < u.price && (r.slot[c] = u) : r.slot[c] = u, i === o.MediationLevels.PARTNER && (r.partner[c] = r.partner[c] || {}, r.partner[c].hasOwnProperty(u.partnerId) ? r.partner[c][u.partnerId].price < u.price && (r.partner[c][u.partnerId] = u) : r.partner[c][u.partnerId] = u)) : i === o.MediationLevels.PARTNER && s.push(u))
                        }
                    }
                    for (var l in r.slot)
                        if (r.slot.hasOwnProperty(l)) {
                            var p = r.slot[l];
                            if (n.emit("hs_slot_highest_bid", {
                                    sessionId: e,
                                    statsId: p.partnerStatsId,
                                    htSlotId: p.htSlot.getId(),
                                    requestId: p.requestId,
                                    xSlotNames: [p.xSlotName]
                                }), i === o.MediationLevels.HT_SLOT) s.push(p);
                            else if (i === o.MediationLevels.PARTNER)
                                for (var f in r.partner[l]) r.partner[l].hasOwnProperty(f) && s.push(r.partner[l][f])
                        } return i === o.MediationLevels.NONE ? a : s
                })
            }
            var r, i;
            return function() {
                n = u.services.EventsService, r = a(), r._setExecutor(t), i = o.MediationLevels[e.mediationLevel]
            }(), s.derive(r, {})
        }
        var n, s = e(9),
            a = e(3),
            o = e(11),
            d = e(23),
            u = (e(24), e(48));
        t.exports = i
    }, {}],
    5: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(e, t, r, i, n) {
                if (n && r.getPrefetchDisabled()) return [];
                var s = i.slice(),
                    a = [];
                if (!n && (u.appendToArray(a, g.fulfilDemand(e, t, r, s)), !s.length)) return a;
                var d = r.retrieve(e, s),
                    c = d.map(function(e) {
                        var t = o.defer();
                        return e.then(function(e) {
                            t.resolve(e)
                        }).catch(function(e) {
                            t.resolve([])
                        }), t
                    });
                if (n) {
                    var l = c.map(function(e) {
                        return e.promise
                    });
                    g.storeDemand(e, t, r, s, l)
                }
                return u.appendToArray(a, c), a
            }

            function r(e, r, i) {
                for (var n = {
                        defers: [],
                        promises: []
                    }, s = Object.keys(h); s.length;) {
                    var a = u.randomSplice(s),
                        o = h[a];
                    if (o.enabled) try {
                        for (var d = t(e, a, o.instance, r, i), c = 0; c < d.length; c++) n.defers.push(d[c]), n.promises.push(d[c].promise)
                    } catch (e) {}
                }
                return n
            }

            function i(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t) && v.hasOwnProperty(t))
                        for (var r = v[t], i = 0; i < r.length; i++) {
                            var n = r[i];
                            h.hasOwnProperty(n) && h[n].instance.setFirstPartyData(e[t])
                        }
            }

            function p(e, t) {
                var i = r(e, t);
                return n.addTimerCallback(e, function() {
                    for (var e = 0; e < i.defers.length; e++) i.defers[e].resolve([])
                }), o.all(i.promises).then(function(t) {
                    return n.clearTimer(e), t ? u.mergeArrays.apply(null, t) : []
                })
            }
            var f, g, h, v = {
                rubicon: ["RubiconHtb", "RubiconExtHtb"]
            };
            return function() {
                n = d.services.TimerService, f = a(), h = e.partners;
                for (var t = {}, s = Object.keys(h), o = s.length - 1; o >= 0; o--) {
                    var v = u.randomSplice(s),
                        m = h[v];
                    if (m.enabled) try {
                        if (m.instance = c[v](m.configs, v), !m.instance) {
                            m.enabled = !1;
                            continue
                        }
                        m.instance.getDirectInterface() && (t = u.mergeObjects(t, m.instance.getDirectInterface()))
                    } catch (e) {
                        m.enabled = !1
                    }
                }
                var y = {
                    Partners: t,
                    setFirstPartyData: i
                };
                g = l(e, {
                    __invokeAllPartners: r
                }), y.prefetchOnLoad = g.prefetchOnLoad, f._setDirectInterface("PartnersLayer", y), f._setExecutor(p)
            }(), s.derive(f, {})
        }
        var n, s = e(9),
            a = e(3),
            o = e(14),
            d = e(48),
            u = e(23),
            c = (e(24), {
                IndexExchangeHtb: e(37),
                OpenXHtb: e(38),
                CriteoHtb: e(36),
                RubiconHtb: e(41),
                BRealTimeHtb: e(35)
            }),
            l = e(40);
        t.exports = i
    }, {}],
    6: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(t) {
                return e.roundingType === i.RoundingTypes.FLOOR ? Math.floor(t) : t
            }

            function r(r) {
                var o = 0,
                    d = 1,
                    u = r.toString(),
                    c = u.indexOf(".");
                if (c > -1 && (o = u.length - c - 1, u = u.slice(0, c) + u.slice(c + 1)), o >= s) o -= s;
                else {
                    var l = s - o;
                    o = 0, u = n.padEnd(u, u.length + l, "0")
                }
                u.length > 9 && (o -= u.length - 9, u = u.slice(0, 9)), d = Math.pow(10, o), u = Number(u);
                var p = e.buckets.length;
                if (u < e.floor * d) u = 0;
                else if (u >= e.buckets[p - 1].max * d) u = e.buckets[p - 1].max * d;
                else {
                    for (var f, g = e.floor, h = 0; h < p && (f = e.buckets[h], !(u <= f.max * d)); h++) g = f.max;
                    e.roundingType !== i.RoundingTypes.NONE && (u -= g * d, u /= f.step * d, u = t(u), u *= f.step * d, u += g * d)
                }
                u = u.toString(), o += a;
                var v = u.length - o;
                v < 1 && (u = n.padStart(u, u.length + (1 - v), "0"), v = 1);
                var m = u.slice(0, v);
                return 0 !== e.outputPrecision && (m = m + "." + u.slice(v), e.outputPrecision > 0 && (m = o < e.outputPrecision ? n.padEnd(m, v + e.outputPrecision + 1, "0") : m.slice(0, v + e.outputPrecision + 1))), m
            }
            var s, a, o = {
                floor: 0,
                buckets: [{
                    max: 1 / 0,
                    step: 1
                }]
            };
            return function() {
                s = Math.round(Math.log(e.bidUnitInCents) * Math.LOG10E), a = Math.round(Math.log(e.outputCentsDivisor) * Math.LOG10E), e.roundingType = i.RoundingTypes[e.roundingType];
                for (var t = ["floor", "buckets"], r = 0; r < t.length; r++) {
                    var n = t[r];
                    e.hasOwnProperty(n) || (e[n] = o[n])
                }
            }(), {
                apply: r
            }
        }
        var n = e(23);
        e(24);
        i.RoundingTypes = {
            NONE: 0,
            FLOOR: 1
        }, t.exports = i
    }, {}],
    7: [function(e, t, r) {
        "use strict";
        e(24);
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

            function i() {
                return y.screen.width
            }

            function n() {
                return y.screen.height
            }

            function s() {
                return document.referrer
            }

            function a() {
                return y.location.hostname
            }

            function o() {
                return navigator.userAgent
            }

            function d() {
                return navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
            }

            function u() {
                return y.location.pathname
            }

            function c() {
                try {
                    return window.top === window.self
                } catch (e) {
                    return !1
                }
            }

            function l() {
                return c() ? location.href : document.referrer || location.href
            }

            function p() {
                try {
                    return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
                } catch (e) {
                    return !1
                }
            }

            function f(e, t, r, i) {
                try {
                    for (var n, s = window, a = 0;;)
                        if (!(r && a < r)) {
                            if (i && a > i) break;
                            if (e && (n = e(s))) return n;
                            var o;
                            try {
                                o = s.frameElement
                            } catch (e) {
                                o = null
                            }
                            if (null === o) {
                                if (t && (n = t(s))) return n;
                                break
                            }
                            s = s.parent, a++
                        }
                } catch (e) {}
                return null
            }

            function g(e) {
                return f(function(t) {
                    return t.hasOwnProperty(e) ? t[e] : null
                })
            }

            function h(e, t) {
                var r = t || y,
                    i = r.document.createElement("iframe");
                return e && (i.src = e), i.width = 0, i.height = 0, i.scrolling = "no", i.marginWidth = 0, i.marginHeight = 0, i.frameBorder = 0, i.setAttribute("style", "border: 0px; vertical-align: bottom; visibility: hidden; display: none;"), r.document.body.appendChild(i), i
            }

            function v(e) {
                var t = e + "=",
                    r = y.document.cookie.split(";");
                for (var i in r)
                    if (r.hasOwnProperty(i)) {
                        for (var n = r[i];
                            " " === n.charAt(0);) n = n.substring(1, n.length);
                        if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
                    } return null
            }

            function m() {
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
                y = f(null, function(e) {
                    return e
                })
            }(), {
                topWindow: y,
                getProtocol: e,
                isLocalStorageSupported: p,
                getViewportWidth: t,
                getViewportHeight: r,
                isTopFrame: c,
                getScreenWidth: i,
                getScreenHeight: n,
                getReferrer: s,
                getPageUrl: l,
                getHostname: a,
                getUserAgent: o,
                getLanguage: d,
                getPathname: u,
                getNearestEntity: g,
                traverseContextTree: f,
                createHiddenIFrame: h,
                readCookie: v,
                isFlashSupported: m
            }
        }()
    }, {}],
    8: [function(e, t, r) {
        "use strict";
        var i = e(7),
            n = e(23),
            s = e(22);
        t.exports = function() {
            function e(e) {
                if (!a) return !1;
                try {
                    localStorage.removeItem(o + e)
                } catch (e) {
                    return !1
                }
                return !0
            }

            function t(t) {
                if (!a) return null;
                var r;
                try {
                    r = JSON.parse(localStorage.getItem(o + t))
                } catch (e) {
                    return null
                }
                return null === r ? null : !r.e || r.e < s.now() ? (e(t), null) : n.isObject(r.d) ? r.d : null
            }

            function r(e, t, r) {
                if (!a) return !1;
                r > d && (r = d);
                var i = s.now(),
                    n = {
                        t: i,
                        d: t,
                        e: i + r
                    };
                try {
                    localStorage.setItem(o + e, JSON.stringify(n))
                } catch (e) {
                    return !1
                }
                return !0
            }
            var a, o = "IXWRAPPER",
                d = 6048e5;
            return function() {
                a = i.isLocalStorageSupported()
            }(), {
                deleteData: e,
                getData: t,
                setData: r
            }
        }()
    }, {}],
    9: [function(e, t, r) {
        "use strict";
        e(24);
        t.exports = function() {
            function e(e) {
                for (var t in e) e.hasOwnProperty(t) && "_" === t[0] && "__" !== t.slice(0, 2) && delete e[t];
                return e
            }

            function t(t, r) {
                var i, n = {};
                for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                for (i in r) r.hasOwnProperty(i) && (n[i] = r[i]);
                return e(n)
            }
            return {
                derive: t
            }
        }()
    }, {}],
    10: [function(e, t, r) {
        "use strict";

        function i(e) {
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
        var n = e(23);
        t.exports = i
    }, {}],
    11: [function(e, t, r) {
        "use strict";
        var i = {
            DEFAULT_UID_LENGTH: 8,
            MIN_BANNER_DIMENSION: 1,
            MIN_BID_FLOOR: 0,
            MIN_SITE_ID: 0,
            DEFAULT_UID_CHARSET: "ALPHANUM",
            SESSION_ID_LENGTH: 8,
            PUBKIT_AD_ID_LENGTH: 16,
            RENDER_SERVICE_EXPIRY_SWEEP_TIMER: 3e4,
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
        t.exports = i
    }, {}],
    12: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t() {
                return o.mobile() ? i.DeviceTypes.MOBILE : (o.tablet(), i.DeviceTypes.DESKTOP)
            }

            function r() {
                var t;
                try {
                    t = eval(e.configs.reference)
                } catch (e) {
                    throw a("INTERNAL_ERROR", "DeviceTypeChecker: could not eval() `reference`.")
                }
                if (!s.isFunction(t)) {
                    if (s.isString(t)) return t;
                    throw a("INVALID_TYPE", "DeviceTypeChecker: `reference` must refer to a function or a string")
                }
                try {
                    return t()
                } catch (e) {
                    throw a("INTERNAL_ERROR", "DeviceTypeChecker: could not execute `reference` function.")
                }
            }

            function d() {
                switch (u) {
                    case n.DeviceTypeMethods.USER_AGENT:
                        return t();
                    case n.DeviceTypeMethods.REFERENCE:
                        return r();
                    default:
                        return t()
                }
            }
            var u;
            return function() {
                u = n.DeviceTypeMethods[e.method] || n.DeviceTypeMethods.USER_AGENT
            }(), {
                getDeviceType: d
            }
        }
        var n = e(11),
            s = e(23),
            a = e(24),
            o = e(13);
        i.isValidDeviceType = function(e) {
            for (var t in i.DeviceTypes)
                if (i.DeviceTypes.hasOwnProperty(t) && "TABLET" !== t && e === i.DeviceTypes[t]) return !0;
            return !1
        }, i.DeviceTypes = {
            DESKTOP: "desktop",
            MOBILE: "mobile",
            TABLET: "tablet"
        }, t.exports = i
    }, {}],
    13: [function(e, t, r) {
        "use strict";
        var i, n, s;
        i = {}, s = window.navigator.userAgent.toLowerCase(), i.ios = function() {
            return i.iphone() || i.ipod() || i.ipad()
        }, i.iphone = function() {
            return !i.windows() && n("iphone")
        }, i.ipod = function() {
            return n("ipod")
        }, i.ipad = function() {
            return n("ipad")
        }, i.android = function() {
            return !i.windows() && n("android")
        }, i.androidPhone = function() {
            return i.android() && n("mobile")
        }, i.androidTablet = function() {
            return i.android() && !n("mobile")
        }, i.blackberry = function() {
            return n("blackberry") || n("bb10") || n("rim")
        }, i.blackberryPhone = function() {
            return i.blackberry() && !n("tablet")
        }, i.blackberryTablet = function() {
            return i.blackberry() && n("tablet")
        }, i.windows = function() {
            return n("windows")
        }, i.windowsPhone = function() {
            return i.windows() && n("phone")
        }, i.windowsTablet = function() {
            return i.windows() && n("touch") && !i.windowsPhone()
        }, i.fxos = function() {
            return (n("(mobile;") || n("(tablet;")) && n("; rv:")
        }, i.fxosPhone = function() {
            return i.fxos() && n("mobile")
        }, i.fxosTablet = function() {
            return i.fxos() && n("tablet")
        }, i.meego = function() {
            return n("meego")
        }, i.mobile = function() {
            return i.androidPhone() || i.iphone() || i.ipod() || i.windowsPhone() || i.blackberryPhone() || i.fxosPhone() || i.meego()
        }, i.tablet = function() {
            return i.ipad() || i.androidTablet() || i.blackberryTablet() || i.windowsTablet() || i.fxosTablet()
        }, i.desktop = function() {
            return !i.tablet() && !i.mobile()
        }, n = function(e) {
            return -1 !== s.indexOf(e)
        }, t.exports = i
    }, {}],
    14: [function(e, t, r) {
        function i() {}

        function n(e) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
        }

        function s(e, t) {
            for (; 3 === e._state;) e = e._value;
            if (0 === e._state) return void e._deferreds.push(t);
            e._handled = !0;
            var r = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null === r) return void(1 === e._state ? a : o)(t.promise, e._value);
            var i;
            try {
                i = r(e._value)
            } catch (e) {
                return void o(t.promise, e)
            }
            a(t.promise, i)
        }

        function a(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var r = t.then;
                    if (t instanceof n) return e._state = 3, e._value = t, void d(e);
                    if ("function" == typeof r) return void c(bind(r, t), e)
                }
                e._state = 1, e._value = t, d(e)
            } catch (t) {
                o(e, t)
            }
        }

        function o(e, t) {
            e._state = 2, e._value = t, d(e)
        }

        function d(e) {
            for (var t = 0, r = e._deferreds.length; t < r; t++) s(e, e._deferreds[t]);
            e._deferreds = null
        }

        function u(e, t, r) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = r
        }

        function c(e, t) {
            var r = !1;
            try {
                e(function(e) {
                    r || (r = !0, a(t, e))
                }, function(e) {
                    r || (r = !0, o(t, e))
                })
            } catch (e) {
                if (r) return;
                r = !0, o(t, e)
            }
        }
        n.prototype.catch = function(e) {
            return this.then(null, e)
        }, n.prototype.then = function(e, t) {
            var r = new this.constructor(i);
            return s(this, new u(e, t, r)), r
        }, n.all = function(e) {
            var t = Array.prototype.slice.call(e);
            return new n(function(e, r) {
                function i(s, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var o = a.then;
                            if ("function" == typeof o) return void o.call(a, function(e) {
                                i(s, e)
                            }, r)
                        }
                        t[s] = a, 0 == --n && e(t)
                    } catch (e) {
                        r(e)
                    }
                }
                if (0 === t.length) return e([]);
                for (var n = t.length, s = 0; s < t.length; s++) i(s, t[s])
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
                i = {
                    browser: t[5] || t[3] || t[1] || "",
                    version: t[2] || t[4] || "0",
                    versionNumber: t[4] || t[2] || "0"
                };
            if (i.browser && (r[i.browser] = !0, r.version = i.version, r.versionNumber = parseInt(i.versionNumber, 10)), r.rv || r.iemobile) {
                i.browser = "msie", r.msie = !0
            }
            if (r.edge) {
                delete r.edge;
                i.browser = "msedge", r.msedge = !0
            }
            if (r.opr) {
                i.browser = "opera", r.opera = !0
            }
            if (r.safari && r.android) {
                i.browser = "android", r.android = !0
            }
            if (r.safari && r.kindle) {
                i.browser = "kindle", r.kindle = !0
            }
            if (r.safari && r.silk) {
                i.browser = "silk", r.silk = !0
            }
            return r.name = i.browser, r
        }(window.navigator.userAgent)
    }, {}],
    16: [function(e, t, r) {
        "use strict";
        var i = e(7),
            n = e(19),
            s = e(23);
        e(24);
        t.exports = function() {
            function e(e, t) {
                (t = t || window.googletag) && t.cmd && t.cmd.push(e)
            }

            function t(e) {
                return e = e || window, e.googletag ? e.googletag : (e.googletag = e.googletag || {}, e.googletag.cmd = e.googletag.cmd || [], n.jsonp({
                    async: !0,
                    url: i.getProtocol() + "//www.googletagservices.com/tag/js/gpt.js",
                    windowScope: e
                }), e.googletag)
            }

            function r(e) {
                return void 0 === e ? i.getNearestEntity("googletag") : i.traverseContextTree(function(e) {
                    return e.hasOwnProperty("googletag") ? e.googletag : null
                }, null, e, e)
            }

            function a(e) {
                return s.isObject(e) && s.isFunction(e.getSlotElementId) && s.isFunction(e.setTargeting) && s.isFunction(e.getTargeting) && s.isFunction(e.clearTargeting)
            }

            function o() {
                return googletag.pubads().getSlots().slice()
            }

            function d(e) {
                for (var t = o(), r = 0; r < t.length; r++)
                    if (t[r].getSlotElementId() === e) return t[r];
                return null
            }
            return {
                run: e,
                loadGpt: t,
                getGpt: r,
                isGSlot: a,
                getGSlots: o,
                getGSlotByDivId: d
            }
        }()
    }, {}],
    17: [function(e, t, r) {
        "use strict";

        function i(e, t) {
            function r(e, t) {
                return Number(e) - Number(t)
            }

            function i() {
                return l
            }

            function n() {
                return p
            }

            function s() {
                return f
            }

            function a() {
                return g
            }

            function o(e, t) {
                var i, n, s, a, o = [];
                i = Object.keys(h).sort(r);
                for (var d = i.length - 1; d >= 0; d--)
                    if (s = i[d], !(Number(s) > e)) {
                        n = Object.keys(h[s]).sort(r);
                        for (var u = n.length - 1; u >= 0; u--)
                            if (a = n[u], !(Number(a) > t)) {
                                o = h[s][a];
                                break
                            } if (o.length > 0) break
                    } return o
            }

            function d() {
                return v
            }

            function u() {
                return m
            }

            function c() {
                return y
            }
            var l, p, f, g, h, v, m, y;
            return function() {
                if (l = e, p = t.id, f = null, g = null, h = null, v = null, m = null, y = null, t.hasOwnProperty("divId") && (f = RegExp(t.divId)), t.hasOwnProperty("adUnitPath") && (g = RegExp(t.adUnitPath)), t.hasOwnProperty("sizeMapping")) {
                    var r, i, n, s = /^(\d+)x(\d+)$/;
                    h = {};
                    for (var a in t.sizeMapping) t.sizeMapping.hasOwnProperty(a) && (r = s.exec(a), i = r[1], n = r[2], h.hasOwnProperty(i) || (h[i] = {}), h[i][n] = t.sizeMapping[a])
                }
                t.hasOwnProperty("targeting") && (v = t.targeting), t.hasOwnProperty("deviceType") && (m = t.deviceType), t.hasOwnProperty("position") && (y = t.position), t = void 0
            }(), {
                getName: i,
                getId: n,
                getDivId: s,
                getAdUnitPath: a,
                getSizes: o,
                getTargeting: d,
                getDeviceType: u,
                getPosition: c
            }
        }
        e(24);
        t.exports = i
    }, {}],
    18: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(e, t) {
                for (var r = 0; r < e.length; r++) {
                    var i, n;
                    "!" === e[r].charAt(0) ? (i = e[r].slice(1), n = !0) : (i = e[r], n = !1);
                    for (var s = !1, a = 0; a < t.length; a++)
                        if (i === t[a]) {
                            s = !0;
                            break
                        } if (n === s) return !1
                }
                return !0
            }

            function r(e, r) {
                for (var i in e)
                    if (e.hasOwnProperty(i)) {
                        if (!r.hasOwnProperty(i)) return !1;
                        if (!t(e[i], r[i])) return !1
                    } return !0
            }

            function i(e, t) {
                for (var r = 0; r < p.length; r++)
                    if (0 === p[r](e, t)) return !1;
                return !0
            }

            function d(e, t, r) {
                for (var i = 0; i < r.length; i++) {
                    if (r[i](e, t) <= 0) return !1
                }
                return !0
            }

            function u(e, t) {
                if (a.isEmpty(p)) return e.slice();
                for (var r = [], n = 0; n < e.length; n++)
                    for (var s = 0; s < t.length; s++)
                        if (i(t[s], e[n])) {
                            r.push(e[n]);
                            break
                        } return r
            }

            function c(e, t) {
                if (a.isEmpty(e) || a.isEmpty(t)) return [];
                for (var r = [], i = e.slice(), n = t.slice(), s = 0; s < l.length; s++) {
                    for (var o = l[s], u = [], c = n.length - 1; c >= 0; c--) {
                        for (var p = [], f = -1, g = 0; g < i.length; g++)
                            if (d(n[c], i[g], o)) {
                                for (var h = [], v = 0; v < o.length; v++) {
                                    var m = o[v](n[c], i[g]);
                                    h.push(m)
                                }
                                for (var y = 0; y < o.length; y++) {
                                    if (!p[y] || h[y] > p[y]) {
                                        p = h, f = g;
                                        break
                                    }
                                    if (h[y] < p[y]) break
                                }
                            } if (f >= 0) {
                            var _ = {};
                            u[f] = !0, _.htSlot = i[f], n[c].firstPartyData && (_.firstPartyData = n[c].firstPartyData), n[c].reference && (_.ref = n[c].reference), r.push(_), n.splice(c, 1)
                        }
                    }
                    for (var b = i.length - 1; b >= 0; b--) u[b] && i.splice(b, 1)
                }
                return r
            }
            var l = [],
                p = [],
                f = {
                    divId: function(e, t) {
                        var r = t.getDivId();
                        return r ? r.test(e.divId) ? 1 : 0 : -1
                    },
                    targeting: function(e, t) {
                        var i = t.getTargeting(),
                            n = e.targeting;
                        if (!i) return -1;
                        for (var s = !1, o = 0, d = 0; d < i.length; d++)
                            if (i[d])
                                if (a.isEmpty(i[d])) s = !0;
                                else if (r(i[d], n)) {
                            var u = 0;
                            for (var c in i[d]) i[d].hasOwnProperty(c) && (u += i[d][c].length);
                            o = Math.max(o, u)
                        }
                        return s || o > 0 ? o + 1 : 0
                    },
                    size: function(e, t) {
                        var r = t.getSizes(n.getViewportWidth(), n.getViewportHeight());
                        if (!r) return -1;
                        for (var i = 0, s = 0; s < r.length; s++) {
                            for (var a = 0, o = 0; o < e.sizes.length; o++)
                                if (r[s][0] === e.sizes[o][0] && r[s][1] === e.sizes[o][1]) {
                                    a++;
                                    break
                                } if (0 === a) return 0;
                            i += a
                        }
                        return 0 === i ? 0 : Math.ceil(100 * i / e.sizes.length)
                    },
                    deviceType: function(e, t) {
                        var r = t.getDeviceType();
                        return r ? r === s.DeviceTypeChecker.getDeviceType() ? 1 : 0 : -1
                    },
                    adUnitPath: function(e, t) {
                        var r = t.getAdUnitPath();
                        return r ? r.test(e.adUnitPath) ? 1 : 0 : -1
                    }
                };
            return function() {
                for (var t = 0; t < e.filters.length; t++) {
                    if (!f.hasOwnProperty(e.filters[t])) throw o("INVALID_CONFIG", "Cannot find function " + e.filters[t] + " in HtSlotMapper");
                    p.push(f[e.filters[t]])
                }
                for (var r = 0; r < e.selectors.length; r++) {
                    var i = [],
                        n = e.selectors[r];
                    if (a.isString(n)) i.push(f[n]);
                    else
                        for (var s = 0; s < n.length; s++) i.push(f[n[s]]);
                    l.push(i)
                }
            }(), {
                select: c,
                filter: u
            }
        }
        var n = e(7),
            s = e(48),
            a = e(23),
            o = e(24);
        t.exports = i
    }, {}],
    19: [function(e, t, r) {
        "use strict";
        var i = e(48),
            n = e(22),
            s = e(23),
            a = e(24),
            o = e(15);
        t.exports = function() {
            function e() {
                return l
            }

            function t(e) {
                var t = "";
                for (var r in e)
                    if (e.hasOwnProperty(r))
                        if (s.isObject(e[r]))
                            for (var i in e[r]) e[r].hasOwnProperty(i) && (t += r + "%5B" + i + "%5D=" + encodeURIComponent(e[r][i]) + "&");
                        else if (s.isArray(e[r]))
                    for (var n = 0; n < e[r].length; n++) t += r + "%5B%5D=" + encodeURIComponent(e[r][n]) + "&";
                else t += r + "=" + encodeURIComponent(e[r]) + "&";
                return t.slice(0, -1)
            }

            function r(e, r, i) {
                return "/" !== e[e.length - 1] && r && (e += "/"), r = r || [], s.isObject(i) && (i = t(i)), i = i ? "?" + i : "", e + r.join("/") + i
            }

            function d(e) {
                var a, d = null,
                    u = e.scope || window;
                if (e.useImgTag) a = u.document.createElement("img");
                else {
                    a = u.document.createElement("script"), a.type = "text/javascript";
                    var c = !0;
                    e.hasOwnProperty("async") && (c = e.async), a.async = c
                }
                var l = e.url;
                if (e.data) {
                    var p;
                    p = s.isString(e.data) ? e.data : t(e.data), l = r(e.url, null, p)
                }
                var f, g = !1,
                    h = function() {
                        try {
                            if (g) return;
                            g = !0, e.onTimeout && e.onTimeout(), e.useImgTag || e.continueAfterTimeout || a.parentNode.removeChild(a)
                        } catch (e) {}
                    };
                e.globalTimeout && i.services.TimerService.addTimerCallback(e.sessionId, h), e.timeout && (f = setTimeout(h, e.timeout));
                var v = function() {
                    try {
                        if (g) {
                            if (!e.continueAfterTimeout) return
                        } else clearTimeout(f);
                        e.onSuccess && e.onSuccess(null, n.now(), g), g = !0, e.useImgTag || a.parentNode.removeChild(a)
                    } catch (e) {}
                };
                null === a.onload ? a.onload = v : a.onreadystatechange = function() {
                    "loaded" !== a.readyState && "complete" !== a.readyState || (a.onreadystatechange = null, v())
                };
                var m = function() {
                    try {
                        if (g) {
                            if (!e.continueAfterTimeout) return
                        } else clearTimeout(f), g = !0;
                        e.onFailure && e.onFailure(), e.useImgTag || a.parentNode.removeChild(a)
                    } catch (e) {}
                };
                if (a.onerror = m, d = n.now(), a.src = l, !e.useImgTag) {
                    var y = u.document.getElementsByTagName("script")[0];
                    y ? y.parentNode.insertBefore(a, y) : o.msie || o.msedge || o.mozilla ? u.onload = function() {
                        u.document.body.appendChild(a)
                    } : u.document.body.appendChild(a)
                }
                return d
            }

            function u(o) {
                if (!e()) {
                    if (o.jsonp && "GET" === o.method) return d(o);
                    throw a("INTERNAL_ERROR", "XHR is not supported in this browser.")
                }
                var u = null,
                    c = o.scope || window,
                    l = new c.XMLHttpRequest,
                    p = o.url,
                    f = null;
                if (o.data)
                    if ("GET" === o.method) {
                        var g;
                        g = s.isString(o.data) ? o.data : t(o.data), p = r(o.url, null, g)
                    } else "POST" === o.method && (f = s.isString(o.data) ? o.data : JSON.stringify(o.data));
                var h = !0;
                o.hasOwnProperty("async") && (h = o.async), l.open(o.method, p, h);
                var v = "application/x-www-form-urlencoded; charset=UTF-8";
                if (void 0 !== o.contentType && (v = o.contentType), v && l.setRequestHeader("Content-Type", v), o.headers) {
                    o.headers.hasOwnProperty("X-Request-With") || l.setRequestHeader("X-Request-With", "XMLHttpRequest");
                    for (var m in o.headers) o.headers.hasOwnProperty(m) && l.setRequestHeader(m, o.headers[m])
                }
                o.withCredentials && (l.withCredentials = !0);
                var y, _ = !1,
                    b = function() {
                        try {
                            if (_) return;
                            _ = !0, o.onTimeout && o.onTimeout()
                        } catch (e) {}
                    };
                return o.globalTimeout && i.services.TimerService.addTimerCallback(o.sessionId, b), o.timeout && (o.continueAfterTimeout ? y = setTimeout(b, o.timeout) : (l.timeout = o.timeout, l.ontimeout = b)), (o.onSuccess || o.onFailure) && (l.onreadystatechange = function() {
                    if (4 === l.readyState) {
                        if (_) {
                            if (!o.continueAfterTimeout) return
                        } else clearTimeout(y), l.ontimeout = null;
                        if (200 === l.status) {
                            if (o.onSuccess) try {
                                o.onSuccess(l.responseText, n.now(), _)
                            } catch (e) {}
                        } else if (o.onFailure) try {
                            o.onFailure(l.status)
                        } catch (e) {}
                        _ = !0
                    }
                }), u = n.now(), l.send(f), u
            }

            function c(e) {
                return e.useImgTag = !0, d(e)
            }
            var l;
            return function() {
                l = window.XMLHttpRequest && "string" == typeof(new XMLHttpRequest).responseType
            }(), {
                ajax: u,
                jsonp: d,
                img: c,
                buildUrl: r,
                objToQueryString: t,
                isXhrSupported: e
            }
        }()
    }, {}],
    20: [function(e, t, r) {
        "use strict";
        var i = (e(11), e(22)),
            n = e(24);
        t.exports = function() {
            function e() {
                if (!(this instanceof e)) return new e;
                this.__bidRequest = {
                    id: Number(i.generateUniqueId(8, "NUM")),
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
            }, e.prototype.addImp = function(e, t, r, i) {
                var n = String(++this.__impCount);
                return this.__bidRequest.imp.push({
                    banner: e,
                    ext: t,
                    id: n,
                    bidfloor: r,
                    bidfloorcur: i
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
                for (var i = 0; i < t.length; i++)
                    if (t[i].hasOwnProperty("bid")) {
                        e = t[i].bid;
                        for (var n = 0; n < e.length; n++) this.__parseBid(e[n], r)
                    } return r
            }, {
                BidRequest: e,
                BidResponse: t
            }
        }()
    }, {}],
    21: [function(e, t, r) {
        "use strict";
        var i = e(23);
        t.exports = function() {
            function e(e) {
                return a[e]
            }

            function t(e) {
                return !(!i.isArray(e, "number") || 2 !== e.length)
            }

            function r(e) {
                if (t(e)) return !0;
                if (!i.isArray(e, "array")) return !1;
                for (var r = 0; r < e.length; r++)
                    if (!t(e[r])) return !1;
                return !0
            }

            function n(t, r, n) {
                r = r || ",", n = n || "x";
                var s = "";
                if (i.isArray(t, "array"))
                    for (var a = 0; a < t.length; a++) s += e(t[a]) ? t[a] : t[a][0] + n + t[a][1] + r;
                else e(t) ? s += t + r : s += t[0] + n + t[1] + r;
                return s.slice(0, -1)
            }

            function s(t, r, i) {
                r = r || ",", i = i || "x";
                for (var n = [], s = t.split(r), a = 0; a < s.length; a++)
                    if (e(s[a])) n.push(s[a]);
                    else {
                        var o = s[a].split(i);
                        n.push([Number(o[0]), Number(o[1])])
                    } return n
            }
            var a = {
                native: !0,
                fullwidth: !0
            };
            return {
                arrayToString: n,
                stringToArray: s,
                isSpecialSize: e,
                isSize: t,
                isSizes: r
            }
        }()
    }, {}],
    22: [function(e, t, r) {
        "use strict";
        var i = e(11);
        e(24);
        t.exports = function() {
            function e(e, t) {
                e.open("text/html", "replace"), e.write(t), e.close()
            }

            function t(e, t) {
                e = e || i.DEFAULT_UID_LENGTH, t = t || i.DEFAULT_UID_CHARSET;
                for (var r = "", n = 0; n < e; n++) r += d[t].charAt(Math.floor(Math.random() * d[t].length));
                return r
            }

            function r() {
                return t(8, "HEX") + "-" + t(4, "HEX") + "-4" + t(3, "HEX") + "-" + "89ab".charAt(Math.floor(4 * Math.random())) + t(3, "HEX") + "-" + t(8, "HEX")
            }

            function n() {
                return (new Date).getTime()
            }

            function s() {
                return o.getTimezoneOffset()
            }

            function a() {}
            var o, d = {
                ALPHANUM: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                ALPHA: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                ALPHA_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                ALPHA_LOWER: "abcdefghijklmnopqrstuvwxyz",
                HEX: "0123456789abcdef",
                NUM: "0123456789"
            };
            return function() {
                o = new Date
            }(), {
                UidCharacterSets: d,
                generateUniqueId: t,
                generateUuid: r,
                now: n,
                getTimezoneOffset: s,
                documentWrite: e,
                noOp: a
            }
        }()
    }, {}],
    23: [function(e, t, r) {
        "use strict";
        var i = e(24);
        t.exports = function() {
            function e(e) {
                return void 0 === e ? "undefined" : {}.toString.call(e).match(S)[1].toLowerCase()
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

            function s(e) {
                return r(e) && e % 1 == 0
            }

            function a(t) {
                return "function" === e(t)
            }

            function o(t) {
                return "boolean" === e(t)
            }

            function d(t) {
                return "object" === e(t)
            }

            function u(t) {
                return "regexp" === e(t)
            }

            function c(e, t) {
                var r = e.indexOf(t);
                r > -1 && e.splice(r, 1)
            }

            function l(r, n, s) {
                if ("array" !== e(r)) return !1;
                if (void 0 !== n) {
                    if (!t(n)) throw i("INVALID_TYPE", "`type` must be a string");
                    if ("class" === n) {
                        if (!t(s)) throw i("INVALID_TYPE", "`className` must be a string");
                        for (var a = 0; a < r.length; a++)
                            if ("object" != typeof r[a] || r[a].__type__ !== s) return !1
                    } else
                        for (var o = 0; o < r.length; o++)
                            if (e(r[o]) !== n) return !1
                }
                return !0
            }

            function p(e) {
                return e.length ? e.splice(Math.floor(Math.random() * e.length), 1)[0] : null
            }

            function f(e) {
                return JSON.parse(JSON.stringify(e))
            }

            function g() {
                for (var e = Array.prototype.slice.call(arguments), t = {}, r = 0; r < e.length; r++)
                    for (var i in e[r]) e[r].hasOwnProperty(i) && (t[i] = e[r][i]);
                return t
            }

            function h() {
                for (var e = Array.prototype.slice.call(arguments), t = [], r = 0; r < e.length; r++)
                    for (var i = 0; i < e[r].length; i++) t.push(e[r][i]);
                return t
            }

            function v(e) {
                if (t(e)) {
                    if ("" !== e) return !1
                } else if (d(e)) {
                    for (var r in e)
                        if (e.hasOwnProperty(r)) return !1
                } else {
                    if (!l(e)) throw i("INVALID_TYPE", "`entity` must be either a string, object, or an array");
                    if (e.length) return !1
                }
                return !0
            }

            function m(e, t, r) {
                void 0 === r && (r = D);
                for (var i = 0; i < e.length; i++) {
                    for (var n = !1, s = 0; s < t.length && !(n = r(e[i], t[s])); s++);
                    if (!n) return !1
                }
                return !0
            }

            function y(e, t, r, i) {
                return t = t || [], i = i || null, r = r || "Error occurred while calling function.",
                    function() {
                        try {
                            e.apply(i, t)
                        } catch (e) {}
                    }
            }

            function _(e, t) {
                var r = "" + e;
                if (t = +t, t != t && (t = 0), t < 0) throw new RangeError("repeat count must be non-negative");
                if (t == 1 / 0) throw new RangeError("repeat count must be less than infinity");
                if (t = Math.floor(t), 0 == r.length || 0 == t) return "";
                if (r.length * t >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
                for (var i = "", n = 0; n < t; n++) i += r;
                return i
            }

            function b(e, t, r) {
                return t >>= 0, r = String(r || " "), e.length > t ? String(e) : (t -= e.length, t > r.length && (r += _(r, t / r.length)), r.slice(0, t) + String(e))
            }

            function I(e, t, r) {
                return t >>= 0, r = String(r || " "), e.length > t ? String(e) : (t -= e.length, t > r.length && (r += _(r, t / r.length)), String(e) + r.slice(0, t))
            }

            function x(e, t) {
                t = t || null;
                try {
                    return eval.call(t, e)
                } catch (e) {}
                return null
            }

            function T(e, t, r) {
                r = r || null;
                try {
                    return eval.call(r, e + "(" + t.join() + ")")
                } catch (e) {}
                return null
            }

            function w() {
                for (var e = Array.prototype.slice.call(arguments), t = e[0], r = 1; r < e.length; r++) Array.prototype.push.apply(t, e[r]);
                return t
            }
            var S = /\s([a-zA-Z]+)/,
                D = function(e, t) {
                    return e === t
                };
            return {
                randomSplice: p,
                deepCopy: f,
                mergeObjects: g,
                mergeArrays: h,
                isArray: l,
                isEmpty: v,
                isInteger: s,
                isString: t,
                isNumeric: n,
                isRegex: u,
                isNumber: r,
                isBoolean: o,
                isFunction: a,
                isObject: d,
                isArraySubset: m,
                getType: e,
                tryCatchWrapper: y,
                arrayDelete: c,
                repeatString: _,
                padStart: b,
                padEnd: I,
                evalVariable: x,
                evalFunction: T,
                appendToArray: w
            }
        }()
    }, {}],
    24: [function(e, t, r) {
        "use strict";

        function i(e, t) {
            return new Error(e + ": " + t)
        }
        i.ErrorTokens = {
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
        }, t.exports = i
    }, {}],
    25: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t() {
                return r
            }
            var r;
            return function() {
                a.DeviceTypeChecker = n(e.DeviceTypeChecker);
                for (var t in e.htSlots)
                    if (e.htSlots.hasOwnProperty(t)) {
                        var i = s(t, e.htSlots[t]);
                        a.htSlots.push(i), a.htSlotsMap[t] = i
                    } r = {
                    Services: {},
                    Layers: {}
                };
                for (var c = 0; c < d.length; c++) {
                    var l = d[c].name,
                        p = d[c].constructor(e.Services[l]);
                    p && (a.services[l] = p, p.getDirectInterface && p.getDirectInterface() && (r.Services = o.mergeObjects(r.Services, p.getDirectInterface())))
                }
                for (var f, g = e.Layers.length - 1; g >= 0; g--) {
                    var h = e.Layers[g].layerId,
                        v = u[h](e.Layers[g].configs);
                    v.getDirectInterface() && (r.Layers = o.mergeObjects(r.Layers, v.getDirectInterface())), f && v.setNext(f.execute), f = v
                }
            }(), {
                getDirectInterface: t
            }
        }
        var n = e(12),
            s = e(17),
            a = e(48),
            o = e(23),
            d = (e(24), [{
                name: "EventsService",
                constructor: e(42)
            }, {
                name: "HeaderStatsService",
                constructor: e(43)
            }, {
                name: "TimerService",
                constructor: e(46)
            }, {
                name: "ComplianceService",
                constructor: e(45)
            }, {
                name: "RenderService",
                constructor: e(44)
            }]),
            u = {
                GptLayer: e(1),
                MediationLayer: e(4),
                PartnersLayer: e(5),
                IdentityLayer: e(2)
            };
        t.exports = i
    }, {}],
    26: [function(e, t, r) {
        "use strict";

        function i(e, t) {
            function r(e) {
                var r;
                r = t.pageDemandHistory;
                for (var i in r) r.hasOwnProperty(i) && (window.googletag.pubads().clearTargeting(i), delete r[i]);
                r = t.gSlotDemandHistory;
                for (var n = 0; n < e.length; n++)
                    if (e[n].ref) {
                        var s = e[n].ref,
                            a = s.getSlotElementId();
                        if (r.hasOwnProperty(a)) {
                            for (var o in r[a]) r[a].hasOwnProperty(o) && s.clearTargeting(o);
                            delete r[a]
                        }
                    }
            }
            return function() {
                t.gSlotDemandHistory = t.gSlotDemandHistory || {}, t.pageDemandHistory = t.pageDemandHistory || {}
            }(), {
                clearTargeting: r
            }
        }
        e(16), e(24);
        t.exports = i
    }, {}],
    27: [function(e, t, r) {
        "use strict";

        function i(e, t) {
            function r(e) {
                return a ? a(e) : window.googletag.destroySlots(e)
            }

            function i(e) {
                for (var i = e || s.getGSlots(), n = 0; n < i.length; n++) t.gSlotDisplayHistory.hasOwnProperty(i[n].getSlotElementId()) && delete t.gSlotDisplayHistory[i[n].getSlotElementId()];
                return r(e)
            }
            var a;
            return function() {
                t.hasOwnProperty("gSlotDisplayHistory") || (t.gSlotDisplayHistory = {});
                var r = function() {
                    e.override && e.override.destroySlots && (a = n.LastLineGoogletag.destroySlots)
                };
                n.initQueue.push(r)
            }(), {
                destroySlots: i
            }
        }
        var n = e(48),
            s = e(16);
        e(24);
        t.exports = i
    }, {}],
    28: [function(e, t, r) {
        "use strict";

        function i(e, t, r) {
            function i(e) {
                return _ ? _(e) : window.googletag.display(e)
            }

            function g(e) {
                if (t.requestArchitecture === d.RequestArchitectures.SRA)
                    for (; b.length;) {
                        if (!b[0].done) return;
                        var r = b.shift();
                        r.outParcels && !c.isEmpty(r.outParcels) && m(r.outParcels), r.parcels && !c.isEmpty(r.parcels) && y(r.sessionId, r.parcels), i(r.divId)
                    } else e.outParcels && !c.isEmpty(e.outParcels) && m(e.outParcels), e.parcels && !c.isEmpty(e.parcels) && y(e.sessionId, e.parcels), i(e.divId)
            }

            function h(e) {
                var i = {
                    done: !1,
                    divId: e,
                    outParcels: null,
                    parcels: null,
                    sessionId: ""
                };
                t.requestArchitecture === d.RequestArchitectures.SRA && b.push(i);
                var u = a.getGSlotByDivId(e);
                if (!u) return i.done = !0, g(i), o.resolve();
                var c = [];
                c = t.requestArchitecture === d.RequestArchitectures.SRA ? a.getGSlots() : u ? [u] : [];
                for (var l = c.length - 1; l >= 0; l--) t.gSlotDisplayHistory.hasOwnProperty(c[l].getSlotElementId()) && c.splice(l, 1);
                if (!c.length) return i.done = !0, g(i), o.resolve();
                for (var p = [], f = 0; f < c.length; f++) p.push({
                    slot: c[f]
                }), t.gSlotDisplayHistory[c[f].getSlotElementId()] = !0;
                if (t.initialLoadState === d.InitialLoadStates.DISABLED) return i.done = !0, g(i), o.resolve();
                var h = v(p);
                if (i.outParcels = h, !h.length) return s.emit("warning", "No valid Header Tag slots found in call to display."), i.done = !0, g(i), o.resolve();
                var m = n.createTimer(t.globalTimeout, !0);
                return n.addTimerCallback(m, function() {
                    s.emit("global_timeout_reached", {
                        sessionId: m
                    })
                }), i.sessionId = m, s.emit("hs_session_start", {
                    sessionId: m
                }), r(m, h).then(function(e) {
                    i.parcels = e, i.done = !0, g(i), s.emit("hs_session_end", {
                        sessionId: m
                    })
                })
            }
            var v, m, y, _, b;
            return function() {
                s = u.services.EventsService, n = u.services.TimerService, t.hasOwnProperty("gSlotDisplayHistory") || (t.gSlotDisplayHistory = {}), t.hasOwnProperty("requestArchitecture") || (t.requestArchitecture = d.RequestArchitectures.MRA), t.hasOwnProperty("initialLoadState") || (t.initialLoadState = d.InitialLoadStates.ENABLED);
                var r = function() {
                    e.override && e.override.display && (_ = u.LastLineGoogletag.display)
                };
                u.initQueue.push(r), v = l(e, t).mapHtSlots, m = p(e, t).clearTargeting, y = f(e, t).setTargeting, b = []
            }(), {
                display: h
            }
        }
        var n, s, a = e(16),
            o = e(14),
            d = e(11),
            u = e(48),
            c = (e(24), e(23)),
            l = e(29),
            p = e(26),
            f = e(32);
        t.exports = i
    }, {}],
    29: [function(e, t, r) {
        "use strict";

        function i(e, t) {
            function r(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var i = e[r].slot,
                        s = {
                            reference: i
                        };
                    e[r].firstPartyData && (s.firstPartyData = e[r].firstPartyData), s.divId = i.getSlotElementId();
                    var u = [],
                        c = i.getSizes(n.getViewportWidth(), n.getViewportHeight()) || i.getSizes();
                    if (c) {
                        for (var l = 0; l < c.length; l++) o.isString(c[l]) || u.push([c[l].getWidth(), c[l].getHeight()]);
                        for (var p = {}, f = i.getTargetingKeys(), g = 0; g < f.length; g++) p[f[g]] = i.getTargeting(f[g]).map(function(e) {
                            return String(e)
                        });
                        s.sizes = u, s.targeting = p, s.adUnitPath = i.getAdUnitPath(), t.push(s)
                    }
                }
                var h = a.htSlots,
                    v = d.filter(h, t);
                return d.select(v, t)
            }
            var i, d;
            return function() {
                i = t, d = s(e.slotMapping)
            }(), {
                mapHtSlots: r
            }
        }
        var n = e(7),
            s = (e(16), e(18)),
            a = e(48),
            o = e(23);
        e(24);
        t.exports = i
    }, {}],
    30: [function(e, t, r) {
        "use strict";

        function i(e, t) {
            function r() {
                return d ? d() : window.googletag.pubads().enableSingleRequest()
            }

            function i() {
                return u ? u() : window.googletag.pubads().disableInitialLoad()
            }

            function a() {
                return t.requestArchitecture = s.RequestArchitectures.SRA, r()
            }

            function o() {
                return t.initialLoadState = s.InitialLoadStates.DISABLED, i()
            }
            var d, u;
            return function() {
                t.requestArchitecture = e.enableSingleRequest ? s.RequestArchitectures.SRA : s.RequestArchitectures.MRA, t.initialLoadState = e.disableInitialLoad ? s.InitialLoadStates.DISABLED : s.InitialLoadStates.ENABLED;
                var r = function() {
                    e.override && (e.override.enableSingleRequest && (d = n.LastLineGoogletag.enableSingleRequest), e.override.disableInitialLoad && (u = n.LastLineGoogletag.disableInitialLoad))
                };
                n.initQueue.push(r)
            }(), {
                enableSingleRequest: a,
                disableInitialLoad: o
            }
        }
        var n = e(48),
            s = (e(24), e(11));
        t.exports = i
    }, {}],
    31: [function(e, t, r) {
        "use strict";

        function i(e, t, r) {
            function i(e, t) {
                return m ? m(e, t) : window.googletag.pubads().refresh(e, t)
            }

            function f(e, o) {
                e || (e = a.getGSlots());
                for (var d = e.slice(), u = e.length - 1; u >= 0; u--) a.isGSlot(e[u]) || e.splice(u, 1);
                if (t.requestArchitecture === l.RequestArchitectures.MRA)
                    for (var c = e.length - 1; c >= 0; c--) t.gSlotDisplayHistory.hasOwnProperty(e[c].getSlotElementId()) || e.splice(c, 1);
                if (!e.length) return i(d, o), p.resolve();
                for (var f = [], m = 0; m < e.length; m++) f.push({
                    slot: e[m]
                }), t.gSlotDisplayHistory[e[m].getSlotElementId()] = !0;
                var y = g(f);
                if (!y.length) return s.emit("warning", "No valid Header Tag slots found in call to refresh."), i(d, o), p.resolve();
                var _ = n.createTimer(t.globalTimeout, !0);
                return n.addTimerCallback(_, function() {
                    s.emit("global_timeout_reached", {
                        sessionId: _
                    })
                }), s.emit("hs_session_start", {
                    sessionId: _
                }), r(_, y).then(function(e) {
                    h(y), v(_, e), s.emit("hs_session_end", {
                        sessionId: _
                    }), i(d, o)
                })
            }
            var g, h, v, m;
            return function() {
                s = o.services.EventsService, n = o.services.TimerService, t.hasOwnProperty("gSlotDisplayHistory") || (t.gSlotDisplayHistory = {}), t.hasOwnProperty("requestArchitecture") || (t.requestArchitecture = l.RequestArchitectures.MRA), t.hasOwnProperty("initialLoadState") || (t.initialLoadState = l.InitialLoadStates.ENABLED);
                var r = function() {
                    e.override && e.override.refresh && (m = o.LastLineGoogletag.refresh)
                };
                o.initQueue.push(r), g = d(e, t).mapHtSlots, h = u(e, t).clearTargeting, v = c(e, t).setTargeting
            }(), {
                refresh: f
            }
        }
        var n, s, a = e(16),
            o = e(48),
            d = (e(24), e(29)),
            u = e(26),
            c = e(32),
            l = e(11),
            p = e(14);
        t.exports = i
    }, {}],
    32: [function(e, t, r) {
        "use strict";

        function i(e, t) {
            function r(e, r) {
                for (var i = 0; i < r.length; i++)
                    if (!r[i].pass && r[i].targeting && !a.isEmpty(r[i].targeting)) {
                        "slot" === r[i].targetingType && n.emit("hs_slot_kv_pushed", {
                            sessionId: e,
                            statsId: r[i].partnerStatsId,
                            htSlotId: r[i].htSlot.getId(),
                            requestId: r[i].requestId,
                            xSlotNames: [r[i].xSlotName]
                        });
                        var s, o = r[i].targeting;
                        for (var d in o)
                            if (o.hasOwnProperty(d))
                                if ("page" === r[i].targetingType) s = t.pageDemandHistory, s[d] = s[d] || {}, s[d] = !0, window.googletag.pubads().setTargeting(d, o[d]);
                                else {
                                    var u = r[i].ref,
                                        c = u.getSlotElementId();
                                    s = t.gSlotDemandHistory, s[c] = s[c] || {}, s[c][d] = !0, u.setTargeting(d, u.getTargeting(d).concat(o[d]))
                                }
                    }
            }
            return function() {
                n = s.services.EventsService, t.gSlotDemandHistory = t.gSlotDemandHistory || {}, t.pageDemandHistory = t.pageDemandHistory || {}
            }(), {
                setTargeting: r
            }
        }
        var n, s = (e(16), e(48)),
            a = e(23);
        e(24);
        t.exports = i
    }, {}],
    33: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(e) {
                h = {
                    source: g,
                    uids: []
                };
                for (var t in e) e.hasOwnProperty(t) && h.uids.push({
                    id: e[t],
                    ext: {
                        rtiPartner: t
                    }
                })
            }

            function r() {
                return l.statsId
            }

            function i() {
                return h
            }

            function c() {
                return new d(function(e) {
                    var r = a.getData(v);
                    if (r) {
                        n.emit("hs_identity_cached", {
                            statsId: l.statsId
                        });
                        var i;
                        return "match" === r.response ? (i = "hs_identity_response", t(r.data)) : i = "pass" === r.response ? "hs_identity_pass" : "hs_identity_error", n.emit(i, {
                            statsId: l.statsId
                        }), void e()
                    }
                    n.emit("hs_identity_request", {
                        statsId: l.statsId
                    }), o.ajax({
                        url: p,
                        data: {
                            ttd_pid: "casale",
                            fmt: "json",
                            p: f
                        },
                        method: "GET",
                        withCredentials: !0,
                        onSuccess: function(r) {
                            var i;
                            try {
                                i = JSON.parse(r)
                            } catch (t) {
                                return n.emit("hs_identity_error", {
                                    statsId: l.statsId
                                }), a.setData(v, {
                                    response: "error"
                                }, l.features.identityDataExpiry.error), void e()
                            }
                            if (!i.hasOwnProperty("TDID")) return n.emit("hs_identity_error", {
                                statsId: l.statsId
                            }), a.setData(v, {
                                response: "error"
                            }, l.features.identityDataExpiry.error), void e();
                            n.emit("hs_identity_response", {
                                statsId: l.statsId
                            }), t(i), a.setData(v, {
                                response: "match",
                                data: i
                            }, l.features.identityDataExpiry.match), e()
                        },
                        onFailure: function(t) {
                            n.emit("hs_identity_error", {
                                statsId: l.statsId
                            }), a.setData(v, {
                                response: "error"
                            }, l.features.identityDataExpiry.error), e()
                        }
                    })
                })
            }
            if (!o.isXhrSupported()) return null;
            var l, p, f, g, h, v;
            return function() {
                n = u.services.EventsService, l = {
                    partnerId: "AdserverOrgIp",
                    statsId: "ADSORG",
                    version: "1.0.0",
                    features: {
                        identityDataExpiry: {
                            match: 6048e5,
                            pass: 864e5,
                            error: 864e5
                        }
                    }
                }, p = s.getProtocol() + "//match.adsrvr.org/track/rid", f = e.publisherId, g = "adserver.org", v = "AdserverOrgIp", h = null
            }(), {
                getStatsId: r,
                getResults: i,
                retrieve: c
            }
        }
        var n, s = e(7),
            a = e(8),
            o = e(19),
            d = e(14),
            u = e(48);
        e(24);
        t.exports = i
    }, {}],
    34: [function(e, t, r) {
        "use strict";

        function i(e) {
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
                return p.statsId
            }

            function i() {
                return v
            }

            function l() {
                return new d(function(e) {
                    var r = a.getData(m);
                    if (r) {
                        n.emit("hs_identity_cached", {
                            statsId: p.statsId
                        });
                        var i;
                        return "match" === r.response ? (i = "hs_identity_response", t(r.envelope)) : i = "pass" === r.response ? "hs_identity_pass" : "hs_identity_error", n.emit(i, {
                            statsId: p.statsId
                        }), void e()
                    }
                    n.emit("hs_identity_request", {
                        statsId: p.statsId
                    }), o.ajax({
                        url: f,
                        data: {
                            pid: g,
                            rt: "envelope"
                        },
                        method: "GET",
                        withCredentials: !0,
                        onSuccess: function(r) {
                            var i;
                            try {
                                i = JSON.parse(r)
                            } catch (t) {
                                return n.emit("hs_identity_error", {
                                    statsId: p.statsId
                                }), a.setData(m, {
                                    response: "error"
                                }, p.features.identityDataExpiry.error), void e()
                            }
                            return c.isEmpty(i) ? (n.emit("hs_identity_pass", {
                                statsId: p.statsId
                            }), a.setData(m, {
                                response: "pass"
                            }, p.features.identityDataExpiry.pass), void e()) : i.hasOwnProperty("envelope") ? c.isEmpty(i.envelope) ? (n.emit("hs_identity_pass", {
                                statsId: p.statsId
                            }), a.setData(m, {
                                response: "pass"
                            }, p.features.identityDataExpiry.pass), void e()) : (n.emit("hs_identity_response", {
                                statsId: p.statsId
                            }), t(i.envelope), a.setData(m, {
                                response: "match",
                                envelope: i.envelope
                            }, p.features.identityDataExpiry.match), void e()) : (n.emit("hs_identity_error", {
                                statsId: p.statsId
                            }), a.setData(m, {
                                response: "error"
                            }, p.features.identityDataExpiry.error), void e())
                        },
                        onFailure: function(t) {
                            204 === t ? (n.emit("hs_identity_pass", {
                                statsId: p.statsId
                            }), a.setData(m, {
                                response: "pass"
                            }, p.features.identityDataExpiry.pass)) : (n.emit("hs_identity_error", {
                                statsId: p.statsId
                            }), a.setData(m, {
                                response: "error"
                            }, p.features.identityDataExpiry.error)), e()
                        }
                    })
                })
            }
            if (!o.isXhrSupported()) return null;
            var p, f, g, h, v, m;
            return function() {
                n = u.services.EventsService, p = {
                    partnerId: "LiveRampIp",
                    statsId: "LVRAMP",
                    version: "1.0.0",
                    features: {
                        identityDataExpiry: {
                            match: 864e5,
                            pass: 864e5,
                            error: 864e5
                        }
                    }
                }, f = s.getProtocol() + "//api.rlcdn.com/api/identity", g = 2, h = "liveramp.com", m = "LiveRampIp", v = null
            }(), {
                getStatsId: r,
                getResults: i,
                retrieve: l
            }
        }
        var n, s = e(7),
            a = e(8),
            o = e(19),
            d = e(14),
            u = e(48),
            c = (e(24), e(23));
        t.exports = i
    }, {}],
    35: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(e) {
                for (var t = o.getProtocol() + y, r = f.generateUniqueId(), i = a.gdpr.getConsent(), n = a.isPrivacyEnabled(), s = [], d = 0; d < e.length; d++) {
                    var u = e[d],
                        c = {},
                        l = f.generateUniqueId();
                    c.sizes = u.xSlotRef.sizes.map(function(e) {
                        return {
                            width: e[0],
                            height: e[1]
                        }
                    }), c.id = u.xSlotRef.placementId, c.primary_size = c.sizes[0], c.allow_smaller_sizes = !1, c.prebid = !0, c.disable_psa = !0, c.uuid = l, u.uuid = l, n && (void 0 !== i.consentString && (c.gdpr_consent = i.consentString), void 0 !== i.applies && (c.gpdr = i.applies ? "1" : "0")), s.push(c)
                }
                return {
                    url: t,
                    data: {
                        tags: s
                    },
                    callbackId: r,
                    networkParamOverrides: {
                        method: "POST"
                    }
                }
            }

            function r(e) {
                v._adResponseStore[0] = e
            }

            function i(e) {
                e && g.img({
                    url: decodeURIComponent(e),
                    method: "GET"
                })
            }

            function h(e, t, r) {
                if (!t.tags) return m.enabledAnalytics.requestTime && v._emitStatsEvent(e, "hs_slot_pass", d), void(o.pass = !0);
                for (var n = t.tags, a = 0; a < r.length; a++) {
                    var o = r[a],
                        d = {},
                        u = o.htSlot.getId();
                    d[u] = {}, d[u][o.requestId] = [o.xSlotName];
                    for (var c, p = 0; p < n.length; p++)
                        if (o.uuid === n[p].uuid) {
                            c = n[p], n.splice(p, 1);
                            break
                        } if (c) {
                        var g = c.nobid;
                        if (!g) {
                            c = c.ads[0];
                            var h = c.rtb.banner,
                                y = c.cpm,
                                _ = [Number(h.width), Number(h.height)],
                                b = h.content,
                                I = void 0 !== c.deal_id ? c.deal_id : null,
                                x = c.rtb.trackers[0].impression_urls[0] || ""
                        }
                        if (c = null, g) m.enabledAnalytics.requestTime && v._emitStatsEvent(e, "hs_slot_pass", d), o.pass = !0;
                        else {
                            m.enabledAnalytics.requestTime && v._emitStatsEvent(e, "hs_slot_bid", d), o.size = _, o.targetingType = "slot", o.targeting = {};
                            var T = "",
                                w = l.arrayToString(o.size);
                            T = v._bidTransformers.targeting.apply(y), null !== I ? (o.targeting[v._configs.targetingKeys.pmid] = [w + "_" + I], o.targeting[v._configs.targetingKeys.pm] = [w + "_" + T]) : o.targeting[v._configs.targetingKeys.om] = [w + "_" + T], o.targeting[v._configs.targetingKeys.id] = [o.requestId], o.price = Number(v._bidTransformers.price.apply(y));
                            s.registerAd({
                                sessionId: e,
                                partnerId: m.partnerId,
                                adm: b,
                                requestId: o.requestId,
                                size: o.size,
                                price: T || void 0,
                                dealId: I || void 0,
                                timeOfExpiry: m.features.demandExpiry.enabled ? m.features.demandExpiry.value + f.now() : 0,
                                auxFn: i,
                                auxArgs: [x]
                            })
                        }
                    } else m.enabledAnalytics.requestTime && v._emitStatsEvent(e, "hs_slot_pass", d), o.pass = !0
                }
            }
            var v, m, y = "//ib.adnxs.com/ut/v2/prebid";
            ! function() {
                n = p.services.EventsService, s = p.services.RenderService, a = p.services.ComplianceService, m = {
                    partnerId: "BRealTimeHtb",
                    namespace: "BRealTimeHtb",
                    statsId: "BRT",
                    version: "2.2.2",
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
                    bidUnitInCents: 100,
                    targetingKeys: {
                        id: "ix_brt_id",
                        om: "ix_brt_cpm",
                        pm: "ix_brt_cpm",
                        pmid: "ix_brt_dealid"
                    },
                    lineItemType: u.LineItemTypes.ID_AND_SIZE,
                    callbackType: c.CallbackTypes.NONE,
                    architecture: c.Architectures.FSRA,
                    requestType: c.RequestTypes.ANY
                }, v = c(m, e, null, {
                    parseResponse: h,
                    generateRequestObj: t,
                    adResponseCallback: r
                })
            }();
            var _ = {};
            return d.derive(v, _)
        }
        var n, s, a, o = e(7),
            d = e(9),
            u = e(11),
            c = e(39),
            l = e(21),
            p = e(48),
            f = e(22),
            g = e(19);
        e(23), e(24);
        t.exports = i
    }, {}],
    36: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var i = e[r].xSlotRef.zoneId;
                    g.isNumeric(i) && t.push(new window.Criteo.PubTag.DirectBidding.DirectBiddingSlot(e[r].htSlot.getName(), Number(i)))
                }
                return t
            }

            function r(e, t, r, i) {
                var a = r.slice();
                if (t.slots && g.isArray(t.slots))
                    for (var o = 0; o < t.slots.length; o++) {
                        for (var d, u = t.slots[o], c = a.length - 1; c >= 0; c--)
                            if (a[c].htSlot.getName() === u.impid && a[c].xSlotRef.zoneId === String(u.zoneid)) {
                                d = a[c], a.splice(c, 1);
                                break
                            } if (d) {
                            if (b.enabledAnalytics.requestTime) {
                                var p = d.htSlot.getId();
                                n.emit("hs_slot_bid", {
                                    sessionId: e,
                                    statsId: b.statsId,
                                    htSlotId: p,
                                    requestId: d.requestId,
                                    xSlotNames: [d.xSlotName]
                                }), i[p] && i[p][d.requestId] && g.arrayDelete(i[p][d.requestId], d.xSlotName)
                            }
                            var h = Number(u.cpm);
                            if (!g.isNumber(h) || h <= 0) d.pass = !0;
                            else if (u.hasOwnProperty("creative") && u.hasOwnProperty("width") && u.hasOwnProperty("height")) {
                                d.size = [u.width, u.height], d.targetingType = "slot", d.targeting = {};
                                var v = "",
                                    m = l.arrayToString(d.size);
                                v = _._bidTransformers.targeting.apply(h), d.targeting[_._configs.targetingKeys.om] = [m + "_" + v], d.targeting[_._configs.targetingKeys.id] = [d.requestId], d.price = Number(_._bidTransformers.price.apply(h));
                                s.registerAd({
                                    sessionId: e,
                                    partnerId: b.partnerId,
                                    adm: u.creative,
                                    requestId: d.requestId,
                                    size: d.size,
                                    price: v,
                                    timeOfExpiry: b.features.demandExpiry.enabled ? b.features.demandExpiry.value + f.now() : 0
                                })
                            }
                        }
                    }
                b.enabledAnalytics.requestTime && _._emitStatsEvent(e, "hs_slot_pass", i);
                for (var y = 0; y < a.length; y++) a[y].pass = !0
            }

            function i(e, t, i, s, a, o, d) {
                var u = "success";
                if (!I.hasOwnProperty(t)) return void o.resolve(i);
                clearTimeout(I[t]), delete I[t];
                try {
                    r(e, JSON.parse(d), i, s)
                } catch (e) {
                    n.emit("internal_error", b.partnerId + " error parsing demand: " + e, e.stack), u = "error"
                }
                n.emit("partner_request_complete", {
                    partner: b.partnerId,
                    status: u
                }), o.resolve(i)
            }

            function h(e, t, r, i, s, a) {
                if (!I.hasOwnProperty(t)) return void a.resolve(r);
                clearTimeout(I[t]), delete I[t], n.emit("partner_request_complete", {
                    partner: b.partnerId,
                    status: "timeout"
                }), b.enabledAnalytics.requestTime && _._emitStatsEvent(e, "hs_slot_timeout", i), a.resolve(r)
            }

            function v(e, t, r, i, s, a, o, d) {
                var u = "error";
                if (204 === d) {
                    u = "success";
                    for (var c = 0; c < r.length; c++) r[c].pass = !0
                }
                if (!I.hasOwnProperty(t)) return void a.resolve(r);
                clearTimeout(I[t]), delete I[t], n.emit("partner_request_complete", {
                    partner: b.partnerId,
                    status: u
                }), b.enabledAnalytics.requestTime && _._emitStatsEvent(e, "error" === u ? "hs_slot_error" : "hs_slot_pass", i), a.resolve(r)
            }

            function m(r, n) {
                if (0 === n.length) return u.resolve([]);
                var s = u.defer(),
                    a = {};
                if (b.enabledAnalytics.requestTime)
                    for (var o = 0; o < n.length; o++) {
                        var d = n[o],
                            c = d.htSlot.getId(),
                            l = d.requestId;
                        a.hasOwnProperty(c) || (a[c] = {}), a[c].hasOwnProperty(l) || (a[c][l] = []), a[c][l].push(d.xSlotName)
                    }
                return window.Criteo.events.push(function() {
                    b.enabledAnalytics.requestTime && _._emitStatsEvent(r, "hs_slot_request", a);
                    var o = "_" + f.generateUniqueId(),
                        d = t(n);
                    if (0 === d.length) return u.resolve([]);
                    var c = i.bind(null, r, o, n, a, d, s),
                        l = h.bind(null, r, o, n, a, d, s),
                        g = v.bind(null, r, o, n, a, d, s),
                        m = new window.Criteo.PubTag.DirectBidding.DirectBiddingUrlBuilder(!1),
                        y = new window.Criteo.PubTag.DirectBidding.DirectBiddingEvent(x, m, d, c, g, l);
                    I[o] = e.timeout ? setTimeout(l, e.timeout) : null, p.services.TimerService.addTimerCallback(r, l), window.criteo_pubtag.push(y)
                }), s.promise
            }

            function y(e, t) {
                for (var r = _._generateReturnParcels(t), i = [], n = 0; n < r.length; n++) i.push(m(e, r[n]));
                return i
            }
            var _, b, I, x;
            ! function() {
                n = p.services.EventsService, s = p.services.RenderService, b = {
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
                    lineItemType: d.LineItemTypes.ID_AND_SIZE,
                    callbackType: c.CallbackTypes.ID,
                    architecture: c.Architectures.SRA,
                    requestType: c.RequestTypes.ANY
                }, I = {}, x = 154, window.Criteo = window.Criteo || {}, window.Criteo.events = window.Criteo.events || [];
                var t = a.getProtocol() + "//static.criteo.net/js/ld/publishertag.js";
                _ = c(b, e, [t], {
                    retriever: y
                })
            }();
            var T = {};
            return o.derive(_, T)
        }
        var n, s, a = e(7),
            o = e(9),
            d = e(11),
            u = e(14),
            c = e(39),
            l = e(21),
            p = e(48),
            f = e(22),
            g = e(23);
        e(24);
        t.exports = i
    }, {}],
    37: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(t) {
                var r = {
                        v: 7.2,
                        s: e.siteId,
                        fn: _
                    },
                    i = c.BidRequest(),
                    n = o.isTopFrame() ? 1 : 0;
                i.setPage(o.getPageUrl()), h.isString(document.referrer) && "" !== document.referrer && i.setRef(document.referrer), i.setExt({
                    source: "ixwrapper"
                });
                for (var s = 0; s < t.length; s++)
                    if (t[s].hasOwnProperty("xSlotRef")) {
                        var d = t[s].xSlotRef;
                        if (d) {
                            t[s].size = d.size;
                            var u = {
                                    w: d.size[0],
                                    h: d.size[1],
                                    topframe: n
                                },
                                l = {
                                    sid: t[s].xSlotName,
                                    siteID: d.siteId
                                };
                            t[s].ixImpId = i.addImp(u, l, e.bidFloor, e.bidFloorCur)
                        }
                    } if (t[0].identityData)
                    for (var p in t[0].identityData) t[0].identityData.hasOwnProperty(p) && t[0].identityData[p].data && i.addUserEid(t[0].identityData[p].data);
                if (a.isPrivacyEnabled()) {
                    var f = a.gdpr.getConsent();
                    i.setGdprConsent(f.applies, f.consentString)
                }
                return r.r = i.stringify(), {
                    url: y,
                    data: r,
                    callbackId: i.getId()
                }
            }

            function r(e) {
                try {
                    var t = c.BidResponse(e),
                        r = t.getId();
                    v._adResponseStore[r] = t
                } catch (e) {
                    n.emit("internal_error", 'Error occurred while saving response for "' + m.partnerId + '".', e.stack)
                }
            }

            function i(t, r, i, a) {
                var o = r.getExt();
                if (e.hasOwnProperty("asedge") && o && o.akamaiDebugInfo) {
                    var d = y.replace(/^https?\:\/\/|\/cygnus/g, ""),
                        c = {
                            sessionId: t,
                            hostname: d
                        };
                    void 0 !== o.akamaiDebugInfo.akamaiPresent && (c.akamaiPresent = o.akamaiDebugInfo.akamaiPresent.toString()), void 0 !== o.akamaiDebugInfo.requestHost && (c.requestHost = o.akamaiDebugInfo.requestHost.toString()), n.emit("hs_akamai_debug", c)
                }
                for (var l = r.getBids(), f = i.slice(), _ = 0; _ < l.length; _++) {
                    for (var b, I = f.length - 1; I >= 0; I--)
                        if (f[I].ixImpId === l[_].impid) {
                            b = f[I], f.splice(I, 1);
                            break
                        } if (b) {
                        var x = b.htSlot.getId();
                        if (l[_].hasOwnProperty("price") || l[_].ext && l[_].ext.hasOwnProperty("dealid")) {
                            var T = l[_].price;
                            m.enabledAnalytics.requestTime && (n.emit("hs_slot_bid", {
                                sessionId: t,
                                statsId: m.statsId,
                                htSlotId: x,
                                requestId: b.requestId,
                                xSlotNames: [b.xSlotName]
                            }), a[x] && a[x][b.requestId] && h.arrayDelete(a[x][b.requestId], b.xSlotName));
                            var w;
                            l[_].ext && h.isString(l[_].ext.dealid) && !h.isEmpty(l[_].ext.dealid) && (w = l[_].ext.dealid);
                            var S = l[_].adm;
                            b.targetingType = "slot", b.targeting = {};
                            var D = "";
                            h.isNumeric(T) && (b.price = Number(v._bidTransformers.price.apply(T))), D = h.isNumeric(T) ? v._bidTransformers.targeting.apply(T) : T;
                            var E = v._configs.targetingKeys.pm,
                                P = v._configs.targetingKeys.pmid,
                                A = v._configs.targetingKeys.om,
                                O = v._configs.targetingKeys.id;
                            if (v._configs.lineItemType !== u.LineItemTypes.CUSTOM) {
                                var z = p.arrayToString(b.size);
                                w ? (b.targeting[P] = [z + "_" + w], h.isString(D) && !h.isEmpty(D) && (b.targeting[E] = [z + "_" + D])) : b.targeting[A] = [z + "_" + D], b.targeting[O] = [b.requestId];
                                s.registerAd({
                                    sessionId: t,
                                    partnerId: m.partnerId,
                                    adm: S,
                                    requestId: b.requestId,
                                    size: b.size,
                                    price: D,
                                    dealId: w,
                                    timeOfExpiry: m.features.demandExpiry.enabled ? m.features.demandExpiry.value + g.now() : 0
                                })
                            } else {
                                var R = b.xSlotName;
                                w ? (b.targeting[E] = [R + "_" + w], h.isString(D) && !h.isEmpty(D) && b.targeting[E].push(R + "_" + D)) : b.targeting[A] = [R + "_" + D], s.registerIndexLegacyAd(t, m.partnerId, S, m.features.demandExpiry.enabled ? m.features.demandExpiry.value + g.now() : 0, w || D, R)
                            }
                        }
                    }
                }
                m.enabledAnalytics.requestTime && v._emitStatsEvent(t, "hs_slot_pass", a)
            }
            var v, m, y, _;
            ! function() {
                n = f.services.EventsService, s = f.services.RenderService, a = f.services.ComplianceService, m = {
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
                    lineItemType: u.LineItemTypes.ID_AND_SIZE,
                    callbackType: l.CallbackTypes.ID,
                    architecture: l.Architectures.FSRA,
                    requestType: l.RequestTypes.ANY
                }, y = e.hasOwnProperty("asedge") ? o.getProtocol("http://ht-lb", "https://ht-lb-sec") + ".casalemedia.com/cygnus" : o.getProtocol("http://as", "https://as-sec") + ".casalemedia.com/cygnus", _ = f.NAMESPACE + "." + m.namespace + ".adResponseCallback", v = l(m, e, null, {
                    parseResponse: i,
                    generateRequestObj: t,
                    adResponseCallback: r
                }), window[f.NAMESPACE] && (window[f.NAMESPACE][m.namespace] = window[f.NAMESPACE][m.namespace] || {}, window[f.NAMESPACE][m.namespace].adResponseCallback = r)
            }();
            var b = {};
            return d.derive(v, b)
        }
        var n, s, a, o = e(7),
            d = e(9),
            u = e(11),
            c = e(20),
            l = e(39),
            p = e(21),
            f = e(48),
            g = e(22),
            h = e(23);
        e(24);
        t.exports = i
    }, {}],
    38: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(e, t) {
                var r = {
                    url: _,
                    data: t,
                    method: "GET",
                    sessionId: e
                };
                c.isXhrSupported() ? c.ajax(r) : c.img(r)
            }

            function r(t) {
                for (var r = "_" + g.generateUniqueId(), i = "", n = "", s = a.gdpr.getConsent(), d = a.isPrivacyEnabled(), u = null, c = 0; c < t.length; c++) i += t[c].xSlotRef.adUnitId.toString() + ",", n += p.arrayToString(t[c].xSlotRef.sizes, ",") + "|";
                i = i.slice(0, -1), n = n.slice(0, -1);
                var l = t[0] && t[0].identityData;
                if (l && l.AdserverOrgIp && l.AdserverOrgIp.data) {
                    var v = l.AdserverOrgIp.data.uids;
                    if (h.isArray(v))
                        for (var _ = 0; _ < v.length; _++)
                            if (v[_].ext && "TDID" === v[_].ext.rtiPartner) {
                                u = v[_].id;
                                break
                            }
                }
                var b = {
                    auid: i,
                    aus: n,
                    ju: o.getPageUrl(),
                    jr: o.getReferrer(),
                    ch: e.charset,
                    tz: g.getTimezoneOffset(),
                    bc: "hb_ix_" + m.version,
                    be: 1,
                    res: p.arrayToString([
                        [o.getScreenWidth(), o.getScreenHeight()]
                    ]),
                    tws: p.arrayToString([
                        [o.getViewportWidth(), o.getViewportHeight()]
                    ]),
                    ifr: o.isTopFrame() ? 0 : 1,
                    callback: "window." + f.NAMESPACE + ".OpenXHtb.adResponseCallbacks." + r,
                    cache: g.now()
                };
                return u && (b.ttduuid = u), d && (void 0 !== s.consentString && (b.gdpr_consent = s.consentString), void 0 !== s.applies && (b.gdpr = s.applies ? "1" : "0")), {
                    url: y,
                    data: b,
                    callbackId: r
                }
            }

            function i(r, i, d, u, c, l, f) {
                var y = d.slice(),
                    _ = a.gdpr.getConsent(),
                    b = a.isPrivacyEnabled(),
                    I = i.ads;
                if (!I || !I.ad || !h.isArray(I.ad)) return n.emit("internal_error", m.partnerId + " invalid ad response"), void(m.enabledAnalytics.requestTime && !f && v._emitStatsEvent(r, "hs_slot_error", u));
                I.pixels && (b && (void 0 !== _.consentString && (I.pixels += "&gdpr_consent=" + _.consentString), void 0 !== _.applies && (I.pixels += "&gdpr=" + (_.applies ? "1" : "0"))), o.createHiddenIFrame(I.pixels));
                for (var x = I.ad, T = 0; T < x.length; T++) {
                    var w, S = x[T];
                    x[T].adunitid = String(x[T].adunitid);
                    for (var D = y.length - 1; D >= 0; D--)
                        if (y[D].xSlotRef.adUnitId === x[T].adunitid) {
                            w = y[D], y.splice(D, 1);
                            break
                        } if (w) {
                        var E = w.htSlot.getId(),
                            P = {};
                        if (S.ts && (P.ts = S.ts), P.bt = e.timeout || 0, P.bd = l - c, P.br = f ? "t" : "p", P.bs = o.getHostname(), S.pub_rev && S.html && S.creative && S.creative.length) {
                            var A = S.pub_rev;
                            if (P.bp = A, t(r, P), !f) {
                                var O = Number(S.creative[0].width),
                                    z = Number(S.creative[0].height),
                                    R = S.html,
                                    F = S.deal_id ? String(S.deal_id) : "";
                                if (A <= 0 && "" === F) w.pass = !0;
                                else {
                                    m.enabledAnalytics.requestTime && (n.emit("hs_slot_bid", {
                                        sessionId: r,
                                        statsId: m.statsId,
                                        htSlotId: E,
                                        requestId: w.requestId,
                                        xSlotNames: [w.xSlotName]
                                    }), u[E] && u[E][w.requestId] && h.arrayDelete(u[E][w.requestId], w.xSlotName)), w.size = [O, z], w.targetingType = "slot", w.targeting = {};
                                    var N = "";
                                    N = v._bidTransformers.targeting.apply(A);
                                    var L = p.arrayToString(w.size);
                                    "" !== F && (w.targeting[v._configs.targetingKeys.pm] = [L + "_" + F]), w.targeting[v._configs.targetingKeys.om] = [L + "_" + N], w.targeting[v._configs.targetingKeys.id] = [w.requestId], w.price = Number(v._bidTransformers.price.apply(A));
                                    s.registerAd({
                                        sessionId: r,
                                        partnerId: m.partnerId,
                                        adm: R,
                                        requestId: w.requestId,
                                        size: w.size,
                                        price: N,
                                        dealId: F,
                                        timeOfExpiry: m.features.demandExpiry.enabled ? m.features.demandExpiry.value + g.now() : 0
                                    })
                                }
                            }
                        } else n.emit("internal_error", m.partnerId + " invalid ad response"), m.enabledAnalytics.requestTime && !f && (n.emit("hs_slot_error", {
                            sessionId: r,
                            statsId: m.statsId,
                            htSlotId: E,
                            requestId: w.requestId,
                            xSlotNames: [w.xSlotName]
                        }), u[E] && u[E][w.requestId] && h.arrayDelete(u[E][w.requestId], w.xSlotName))
                    }
                }
                m.enabledAnalytics.requestTime && !f && v._emitStatsEvent(r, "hs_slot_pass", u)
            }
            var v, m, y, _;
            ! function() {
                n = f.services.EventsService, s = f.services.RenderService, a = f.services.ComplianceService, m = {
                    partnerId: "OpenXHtb",
                    namespace: "OpenXHtb",
                    statsId: "OPNX",
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
                        id: "ix_ox_id",
                        om: "ix_ox_om",
                        pm: "ix_ox_pm"
                    },
                    bidUnitInCents: .1,
                    lineItemType: u.LineItemTypes.ID_AND_SIZE,
                    callbackType: l.CallbackTypes.CALLBACK_NAME,
                    architecture: l.Architectures.SRA,
                    requestType: l.RequestTypes.ANY,
                    parseAfterTimeout: !0
                }, e.medium = e.medium || "w", e.version = e.version || "1.0", e.endPointName = e.endPointName || "arj", e.charset = e.charset || "UTF-8", e.bidderCode = e.bidderCode || "hb_ix", y = c.buildUrl(o.getProtocol() + "//" + e.host, [e.medium, e.version, e.endPointName]), _ = c.buildUrl(o.getProtocol() + "//" + e.host, [e.medium, e.version, "bo"]), v = l(m, e, null, {
                    parseResponse: i,
                    generateRequestObj: r
                }), window[f.NAMESPACE] && (window[f.NAMESPACE][m.namespace] = window[f.NAMESPACE][m.namespace] || {}, window[f.NAMESPACE][m.namespace].adResponseCallbacks = v.getDirectInterface()[m.namespace].adResponseCallbacks, window[f.NAMESPACE][m.namespace].version = m.version)
            }();
            var b = {};
            return d.derive(v, b)
        }
        var n, s, a, o = e(7),
            d = e(9),
            u = e(11),
            c = e(19),
            l = e(39),
            p = e(21),
            f = e(48),
            g = e(22),
            h = e(23);
        e(24);
        t.exports = i
    }, {}],
    39: [function(e, t, r) {
        "use strict";

        function i(e, t, r, g) {
            function h(e) {
                return function(t) {
                    k[e] = t, delete H[e]
                }
            }

            function v(e, t, r) {
                for (var i in r)
                    if (r.hasOwnProperty(i))
                        for (var s in r[i]) r[i].hasOwnProperty(s) && r[i][s].length && n.emit(t, {
                            sessionId: e,
                            statsId: P.statsId,
                            htSlotId: i,
                            requestId: s,
                            xSlotNames: r[i][s]
                        })
            }

            function m(e, r) {
                var i = {};
                return "price" === e && (i = {
                    outputCentsDivisor: 1,
                    outputPrecision: 0,
                    roundingType: "NONE"
                }), f.mergeObjects(M[e], {
                    bidUnitInCents: P.bidUnitInCents
                }, r || {}, t.bidTransformer || {}, i)
            }

            function y(e) {
                var t = [];
                P.architecture === i.Architectures.FSRA && t.push([]);
                for (var r = {}, n = 0; n < e.length; n++) {
                    var s = e[n].htSlot.getName();
                    if (q.mapping.hasOwnProperty(s))
                        for (var a = "_" + p.generateUniqueId(), o = 0; o < q.mapping[s].length; o++) {
                            var d = {},
                                u = q.mapping[s][o];
                            d.partnerId = P.partnerId, d.partnerStatsId = P.statsId, d.htSlot = e[n].htSlot, d.ref = e[n].ref, d.xSlotRef = q.xSlots[u], d.xSlotName = u, d.requestId = a, e[n].firstPartyData && (d.firstPartyData = e[n].firstPartyData), e[n].identityData && (d.identityData = e[n].identityData), P.architecture === i.Architectures.MRA ? t.push([d]) : P.architecture === i.Architectures.FSRA ? t[0].push(d) : (r.hasOwnProperty(u) || (r[u] = 0), t.length < r[u] + 1 && t.push([]), t[r[u]].push(d), r[u]++)
                        }
                }
                return t
            }

            function _(e, t) {
                if (0 === t.length) return c.resolve([]);
                var r = N(t, e);
                P.callbackType === i.CallbackTypes.CALLBACK_NAME && (H[r.callbackId] = h(r.callbackId));
                var s = {};
                if (P.enabledAnalytics.requestTime) {
                    for (var a = 0; a < t.length; a++) {
                        var o = t[a],
                            d = o.htSlot.getId(),
                            l = o.requestId;
                        s.hasOwnProperty(d) || (s[d] = {}), s[d].hasOwnProperty(l) || (s[d][l] = []), s[d][l].push(o.xSlotName)
                    }
                    v(e, "hs_slot_request", s)
                }
                return new c(function(a) {
                    n.emit("partner_request_sent", {
                        partner: P.partnerId
                    });
                    var o, d, c = {
                        url: r.url,
                        data: r.data,
                        method: "GET",
                        timeout: q.timeout,
                        withCredentials: !0,
                        jsonp: !0,
                        sessionId: e,
                        globalTimeout: !0,
                        continueAfterTimeout: !0,
                        onSuccess: function(d, u, c) {
                            var l, p = "success";
                            try {
                                P.callbackType === i.CallbackTypes.NONE ? l = JSON.parse(d) : (d && eval.call(null, d), l = k[r.callbackId], delete k[r.callbackId]), c && !P.parseAfterTimeout || L(e, l, t, s, o, u, c)
                            } catch (t) {
                                n.emit("internal_error", P.partnerId + " error parsing demand: " + t, t.stack), p = "error", P.enabledAnalytics.requestTime && !c && v(e, "hs_slot_error", s)
                            }
                            n.emit("partner_request_complete", {
                                partner: P.partnerId,
                                status: p
                            }), a(t)
                        },
                        onTimeout: function() {
                            n.emit("partner_request_complete", {
                                partner: P.partnerId,
                                status: "timeout"
                            }), P.enabledAnalytics.requestTime && v(e, "hs_slot_timeout", s), a(t)
                        },
                        onFailure: function() {
                            n.emit("partner_request_complete", {
                                partner: P.partnerId,
                                status: "error"
                            }), P.enabledAnalytics.requestTime && v(e, "hs_slot_error", s), a(t)
                        }
                    };
                    d = r.networkParamOverrides ? f.mergeObjects(c, r.networkParamOverrides) : c, P.callbackType !== i.CallbackTypes.NONE && P.requestType !== i.RequestTypes.AJAX || (d.jsonp = !1), o = P.requestType === i.RequestTypes.JSONP ? u.jsonp(d) : u.ajax(d)
                })
            }

            function b(e) {
                B.push(e)
            }

            function I() {
                return A
            }

            function x(e) {
                R = {}, R[P.namespace] = e
            }

            function T(e, t) {
                R[P.namespace][e] = t
            }

            function w() {
                return P.partnerId
            }

            function S() {
                return R
            }

            function D() {
                return P.features.prefetchDisabled && P.features.prefetchDisabled.enabled
            }

            function E(e, t) {
                if (t = t.slice(), q.rateLimiting.enabled) {
                    var r = p.now();
                    if ("page" === P.targetingType) {
                        if (r <= O) return [];
                        O = r + q.rateLimiting.value
                    } else
                        for (var i = t.length - 1; i >= 0; i--) {
                            var n = t[i].htSlot.getName();
                            z.hasOwnProperty(n) && r <= z[n] ? t.splice(i, 1) : z[n] = r + q.rateLimiting.value
                        }
                }
                if (!t.length) return [];
                if (F) return F(e, t);
                for (var s = y(t), a = [], o = 0; o < s.length; o++) a.push(_(e, s[o]));
                return a
            }
            var P, A, O, z, R, F, N, L, M, q, B, k, C, U, H;
            return function() {
                if (n = l.services.EventsService, s = l.services.RenderService, M = {
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
                    }, P = e, O = 0, z = {}, B = [], H = {}, k = {}, q = {
                        timeout: 0,
                        lineItemType: e.lineItemType,
                        targetingKeys: e.targetingKeys,
                        rateLimiting: e.features.rateLimiting
                    }, t.hasOwnProperty("timeout") && t.timeout > 0 && (q.timeout = t.timeout, n.emit("hs_define_partner_timeout", {
                        timeout: q.timeout,
                        statsId: P.statsId
                    })), t.hasOwnProperty("targetingKeyOverride"))
                    for (var p in t.targetingKeyOverride) t.targetingKeyOverride.hasOwnProperty(p) && q.targetingKeys.hasOwnProperty(p) && (q.targetingKeys[p] = t.targetingKeyOverride[p]);
                if (t.hasOwnProperty("rateLimiting") && (t.rateLimiting.hasOwnProperty("enabled") && (q.rateLimiting.enabled = t.rateLimiting.enabled), t.rateLimiting.value && (q.rateLimiting.value = t.rateLimiting.value)), t.hasOwnProperty("lineItemType") && (q.lineItemType = d.LineItemTypes[t.lineItemType]), q.xSlots = t.xSlots, q.mapping = t.mapping, A = !1, r) {
                    f.isArray(r) || (r = [r]);
                    var h = [];
                    r.map(function(e) {
                        var t = c.defer();
                        h.push(t.promise), u.jsonp({
                            url: e,
                            onSuccess: function() {
                                t.resolve()
                            }
                        })
                    }), c.all(h).then(function() {
                        A = !0, n.emit("partner_instantiated", {
                            partner: P.partnerId
                        }), B = o(B)
                    })
                } else n.emit("partner_instantiated", {
                    partner: P.partnerId
                }), A = !0;
                s.registerPartner(P.partnerId, q.lineItemType, q.targetingKeys.id), C = {}, e.hasOwnProperty("bidUnitInCents") && (C.targeting = a(m("targeting")), C.price = a(m("price"))), g.retriever ? F = g.retriever : (L = g.parseResponse, N = g.generateRequestObj, U = g.adResponseCallback), R = {}, R.hasOwnProperty(P.namespace) || (R[P.namespace] = {}), P.callbackType === i.CallbackTypes.ID ? R[P.namespace].adResponseCallback = U : R[P.namespace].adResponseCallbacks = H
            }(), {
                _configs: q,
                _adResponseStore: k,
                _bidTransformers: C,
                _setDirectInterface: x,
                _addToDirectInterface: T,
                _generateReturnParcels: y,
                _emitStatsEvent: v,
                _pushToCommandQueue: b,
                _generateBidTransformerConfig: m,
                getPartnerId: w,
                getDirectInterface: S,
                getPrefetchDisabled: D,
                isReady: I,
                retrieve: E
            }
        }
        var n, s, a = e(6),
            o = e(10),
            d = e(11),
            u = e(19),
            c = e(14),
            l = e(48),
            p = e(22),
            f = e(23);
        e(24);
        i.Architectures = {
            MRA: 0,
            SRA: 1,
            FSRA: 2
        }, i.CallbackTypes = {
            ID: 0,
            CALLBACK_NAME: 1,
            NONE: 2
        }, i.RequestTypes = {
            ANY: 0,
            AJAX: 1,
            JSONP: 2
        }, t.exports = i
    }, {}],
    40: [function(e, t, r) {
        "use strict";

        function i(e, t) {
            function r(e) {
                T || (T = o({
                    selectors: ["divId"],
                    filters: ["deviceType"]
                }));
                for (var t = [], r = 0; r < e.length; r++) c.htSlotsMap.hasOwnProperty(e[r]) && t.push(c.htSlotsMap[e[r]]);
                return T.filter(t, [{}]).map(function(e) {
                    return e.getName()
                })
            }

            function i() {
                if (!D || !S) return null;
                var e = p.evalVariable(w);
                if (void 0 === e || null === e) return null;
                if (!p.isArray(e, "object") || p.isEmpty(e)) return n.emit("error", "`" + w + "` must be a non-empty array"), [];
                for (var t = [], r = ", ignoring this p-slot", i = 0; i < e.length; i++) {
                    var s = e[i];
                    if (p.isEmpty(s)) n.emit("error", "`" + w + "[" + i + "]` must be a non-empty object" + r);
                    else if (s.hasOwnProperty("adUnitPath") && p.isString(s.adUnitPath) && !p.isEmpty(s.adUnitPath))
                        if (!s.hasOwnProperty("divId") || p.isString(s.divId) && !p.isEmpty(s.divId))
                            if (!s.hasOwnProperty("sizes") || u.isSizes(s.sizes)) {
                                if (s.hasOwnProperty("targeting")) {
                                    if (!p.isArray(s.targeting, "object")) {
                                        n.emit("error", "`" + w + "[" + i + "].targeting` must be an array of objects" + r);
                                        continue
                                    }
                                    for (var d = !1, l = 0; l < s.targeting.length; l++) {
                                        var f = s.targeting[l];
                                        for (var g in f) f.hasOwnProperty(g) && (p.isArray(f[g], "string") || (d = !0, n.emit("error", "`" + w + "[" + i + "].targeting[" + l + "]." + g + "` must be an array of strings")))
                                    }
                                    if (d) continue
                                }!s.hasOwnProperty("deviceType") || a.isValidDeviceType(s.deviceType) ? t.push(s) : n.emit("error", "`" + w + "[" + i + "].deviceType` must be a valid device type string" + r)
                            } else n.emit("error", "`" + w + "[" + i + "].sizes` must be a sizes array" + r);
                    else n.emit("error", "`" + w + "[" + i + "].divId` must be a non-empty string" + r);
                    else n.emit("error", "`" + w + "[" + i + "].adUnitPath` is required and must be a non-empty string" + r)
                }
                if (!t.length) return [];
                T || (T = o(D));
                var h = T.filter(c.htSlots, t);
                if ("ALL" === S) return T.select(h, t).map(function(e) {
                    return e.htSlot.getName()
                });
                for (var v = [], m = 0; m < t.length; m++) v = p.appendToArray(v, T.select(h, [t[m]]).map(function(e) {
                    return e.htSlot.getName()
                }));
                return v
            }

            function f() {
                if (!P) return null;
                var e = p.evalVariable(E);
                return void 0 === e || null === e ? null : !p.isString(e) || p.isEmpty(e) ? (n.emit("error", "`" + E + "` must be a non-empty string"), []) : P.hasOwnProperty(e) ? r(P[e]) : (n.emit("error", 'Unrecognized page type "' + e + '"'), [])
            }

            function g() {
                return A ? r(A) : null
            }

            function h() {
                for (var e = [i, f, g], t = 0; t < e.length; t++) {
                    var r = e[t]();
                    if (r) return r
                }
                return []
            }

            function v(e, t, r, i) {
                t.drd.promise.then(function(t) {
                    for (var s = 0; s < t.length; s++) n.emit("hs_slot_prefetch", {
                        sessionId: e,
                        statsId: t[s].partnerStatsId,
                        htSlotId: t[s].htSlot.getId(),
                        requestId: t[s].requestId,
                        xSlotNames: [t[s].xSlotName]
                    }), t[s].ref = r.ref;
                    i.resolve(t)
                })
            }

            function m(e, t, r, i) {
                for (var n = [], a = 0; a < i.length;) {
                    var o = i[a].htSlot.getName();
                    if (!i[a].prefetch && I.hasOwnProperty(o) && I[o].hasOwnProperty(t))
                        for (var u = I[o][t]; u.length;) {
                            var c = u.shift();
                            if (!(c.timeOfExpiry < l.now())) {
                                s.startTimer(c.sessionId);
                                var p = d.defer();
                                v(e, c, i[a], p), n.push(p), i.splice(a, 1), a--;
                                break
                            }
                        }
                    a++
                }
                return n
            }

            function y(e, t, r, i, n) {
                var s = {};
                i.map(function(t) {
                    s[t.ref] = {
                        sessionId: e,
                        timeOfExpiry: 1 / 0,
                        drd: d.defer()
                    }
                }), i.map(function(e) {
                    if (!r.getPrefetchDisabled()) {
                        var i = s[e.ref],
                            a = i.drd;
                        d.all(n).then(function(t) {
                            i.timeOfExpiry = l.now() + O;
                            for (var r = [], n = 0; n < t.length; n++)
                                for (var s = t[n], o = 0; o < s.length; o++) {
                                    var d = s[o];
                                    d.ref === e.ref && r.push(d)
                                }
                            a.resolve(r)
                        }).catch(function(e) {
                            a.resolve([])
                        });
                        var o = e.htSlot.getName();
                        I.hasOwnProperty(o) || (I[o] = {}), I[o].hasOwnProperty(t) || (I[o][t] = []), I[o][t].push(i)
                    }
                })
            }

            function _(e, r) {
                if (e.length) {
                    for (var i = [], a = 0; a < e.length; a++) {
                        var o = e[a];
                        if (c.htSlotsMap.hasOwnProperty(o)) {
                            var u = {
                                htSlot: c.htSlotsMap[o],
                                prefetch: !0,
                                ref: l.generateUuid()
                            };
                            r && (u.identityData = r), i.push(u)
                        } else n.emit("error", "Unrecognized htSlotName " + o)
                    }
                    if (i.length) {
                        var p = s.createTimer(c.globalTimeout, !1);
                        n.emit("hs_session_start", {
                            sessionId: p
                        });
                        var f = t.__invokeAllPartners(p, i, !0);
                        s.addTimerCallback(p, function() {
                            for (var e = 0; e < f.defers.length; e++) f.defers[e].resolve([])
                        }), d.all(f.promises).then(function() {
                            n.emit("hs_session_end", {
                                sessionId: p
                            })
                        })
                    }
                }
            }

            function b(e) {
                if (x) {
                    var t = h();
                    t.length && _(t, e)
                }
            }
            var I, x, T, w, S, D, E, P, A, O = 55e3;
            return function() {
                if (n = c.services.EventsService, s = c.services.TimerService, I = {}, x = !1, w = "window.headertag.publisher.prefetchSlots", E = "window.headertag.pagetype", e.prefetchOnLoad && (e.prefetchOnLoad.enabled && (x = !0), e.prefetchOnLoad.configs)) {
                    var t = e.prefetchOnLoad.configs.dynamic;
                    t && (t.var && (w = t.var), t.slotMapping && (t.slotMapping.style && (S = t.slotMapping.style), t.slotMapping.selectors && t.slotMapping.filters && (D = {
                        selectors: t.slotMapping.selectors,
                        filters: t.slotMapping.filters
                    })));
                    var r = e.prefetchOnLoad.configs.pageType;
                    r && (r.var && (E = r.var), r.mapping && (P = r.mapping));
                    var i = e.prefetchOnLoad.configs.fixed;
                    i && i.htSlotNames && (A = i.htSlotNames)
                }
            }(), {
                prefetch: _,
                prefetchOnLoad: b,
                fulfilDemand: m,
                storeDemand: y
            }
        }
        var n, s, a = e(12),
            o = e(18),
            d = e(14),
            u = e(21),
            c = e(48),
            l = e(22),
            p = e(23);
        t.exports = i
    }, {}],
    41: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var i = p.arrayToString(e[r]);
                    D.hasOwnProperty(i) && t.push(D[i])
                }
                return t
            }

            function r(e) {
                for (var t in D)
                    if (D.hasOwnProperty(t) && D[t] === Number(e)) return p.stringToArray(t)[0];
                return []
            }

            function i(e) {
                try {
                    return eval.call(null, e)
                } catch (e) {}
                return null
            }

            function v(e, t) {
                try {
                    return eval.call(null, e + "(" + t.join() + ")")
                } catch (e) {}
                return null
            }

            function m(e) {
                var t = {};
                if (e.vars) {
                    var r = e.vars;
                    for (var n in r)
                        if (r.hasOwnProperty(n)) {
                            t[n] = t[n] || [];
                            for (var s = 0; s < r[n].length; s++) {
                                var a = i(r[n][s]);
                                null !== a && void 0 !== a && t[n].push(a)
                            }
                        }
                }
                if (e.strs) {
                    var o = e.strs;
                    for (var d in o)
                        if (o.hasOwnProperty(d)) {
                            t[d] = t[d] || [];
                            for (var u = 0; u < o[d].length; u++) t[d].push(o[d][u])
                        }
                }
                if (e.fns) {
                    var c = e.fns;
                    for (var l in c)
                        if (c.hasOwnProperty(l)) {
                            t[l] = t[l] || [];
                            var p = v(c[l].fn, c[l].args);
                            if (null !== p && void 0 !== p)
                                if (h.isArray(p))
                                    for (var f = 0; f < p.length; f++) t[l].push(p[f]);
                                else t[l].push(p)
                        }
                }
                return t
            }

            function y(e) {
                var t = {};
                return e.inventory && (t.inventory = m(e.inventory)), e.visitor && (t.visitor = m(e.visitor)), e.position && (t.position = e.position), e.keywords && (h.isString(e.keywords) ? t.keywords = [e.keywords] : t.keywords = e.keywords), t
            }

            function _() {
                var t = e.digitrustId || function() {
                    if (o.isTopFrame()) var e = window;
                    else try {
                        var e = window.top
                    } catch (t) {
                        console.log("impossible to reach top window, get topmost accessible window context  ");
                        var e = o.topWindow
                    }
                    try {
                        var t = e.DigiTrust.getUser({
                            member: "T9QSFKPDN9"
                        })
                    } catch (e) {
                        console.log("digiTrustUser not defined")
                    }
                    return t && t.success && t.identity || null
                }();
                return !t || t.privacy && t.privacy.optout ? {} : {
                    id: t.id,
                    keyv: t.keyv,
                    pref: 0
                }
            }

            function b(r) {
                var i = g.generateUniqueId(),
                    n = r[0],
                    s = {},
                    d = {};
                n.firstPartyData && n.firstPartyData.rubicon ? s = n.firstPartyData.rubicon : n.xSlotRef.slotFpd && (s = y(n.xSlotRef.slotFpd)), E ? d = E : e.partnerFpd && (d = y(e.partnerFpd));
                var u = t(n.xSlotRef.sizes),
                    c = o.getPageUrl(),
                    l = a.gdpr && a.gdpr.getConsent(),
                    p = a.isPrivacyEnabled(),
                    f = {
                        account_id: e.accountId,
                        size_id: u[0],
                        p_pos: s.position ? s.position : "btf",
                        rp_floor: .01,
                        rf: c || "",
                        p_screen_res: o.getScreenWidth() + "x" + o.getScreenHeight(),
                        site_id: n.xSlotRef.siteId,
                        zone_id: n.xSlotRef.zoneId,
                        kw: "rp.fastlane",
                        tk_flint: "custom",
                        rand: Math.random(),
                        dt: _()
                    };
                l && p && "object" == typeof l && ("boolean" == typeof l.applies && (f.gdpr = Number(l.applies)), f.gdpr_consent = l.consentString);
                for (var h in d.inventory) d.inventory.hasOwnProperty(h) && (f["tg_i." + h] = d.inventory[h].toString());
                for (var v in s.inventory) s.inventory.hasOwnProperty(v) && (f.hasOwnProperty("tg_i." + v) ? f["tg_i." + v] += "," + s.inventory[v].toString() : f["tg_i." + v] = s.inventory[v].toString());
                for (var m in d.visitor) d.visitor.hasOwnProperty(m) && (f["tg_v." + m] = d.visitor[m].toString());
                for (var b in s.visitor) s.visitor.hasOwnProperty(b) && (f.hasOwnProperty("tg_v." + b) ? f["tg_v." + b] += "," + s.visitor[b].toString() : f["tg_v." + b] = s.visitor[b].toString());
                var I = [];
                return d.keywords && (I = I.concat(d.keywords)), s.keywords && (I = I.concat(s.keywords)), I.length > 0 && (f.kw += "," + I.toString()), u.length > 1 && (f.alt_size_ids = u.slice(1).join(",")), {
                    url: S,
                    data: f,
                    callbackId: i
                }
            }

            function I(e, t, i) {
                var a = {
                        sessionId: e,
                        statsId: w.statsId
                    },
                    o = !1,
                    d = t.ads || [];
                d.length || (i[0].pass = !0);
                for (var c = 0; c < d.length; c++) {
                    var l;
                    0 === c ? (l = i[0], a.htSlotId = l.htSlot.getId(), a.requestId = l.requestId, a.xSlotNames = [l.xSlotName]) : (l = {
                        partnerId: i[0].partnerId,
                        htSlot: i[0].htSlot,
                        ref: i[0].ref,
                        xSlotRef: i[0].xSlotRef,
                        xSlotName: i[0].xSlotName,
                        requestId: i[0].requestId
                    }, i.push(l));
                    var f = d[c].cpm || 0;
                    if ("ok" !== d[c].status || !h.isNumber(f) || f <= 0) l.pass = !0;
                    else {
                        o = !0;
                        var v = d[c].deal || "",
                            m = r(d[c].size_id),
                            y = '<html><head><script type="text/javascript">inDapIF=true;<\/script></head><body style="margin : 0; padding: 0;">\x3c!-- Rubicon Project Ad Tag --\x3e<div data-rp-impression-id="' + d[c].impression_id + '"><script type="text/javascript">' + d[c].script + "<\/script></div></body></html>";
                        l.size = m, l.targetingType = "slot", l.targeting = {};
                        var _ = "",
                            b = "";
                        if (_ = T._bidTransformers.targeting.apply(f), T._configs.lineItemType === u.LineItemTypes.CUSTOM) {
                            if (!d[c].targeting) continue;
                            var I = d[c].targeting;
                            b = d[c].size_id;
                            for (var x = 0; x < I.length; x++) l.targeting[I[x].key] = I[x].values;
                            l.targeting.rpfl_elemid = [l.requestId], l.targeting.hb_pb_rubicon = _
                        } else {
                            var S = p.arrayToString(l.size);
                            v && (l.targeting[T._configs.targetingKeys.pm] = [S + "_" + v]), d[c].hasOwnProperty("cpm") && (l.targeting[T._configs.targetingKeys.om] = [S + "_" + _]), l.targeting[T._configs.targetingKeys.id] = [l.requestId]
                        }
                        l.price = Number(T._bidTransformers.price.apply(f));
                        s.registerAd({
                            sessionId: e,
                            partnerId: w.partnerId,
                            adm: y,
                            requestId: l.requestId,
                            size: b || l.size,
                            price: _ || void 0,
                            dealId: v || void 0,
                            timeOfExpiry: w.features.demandExpiry.enabled ? w.features.demandExpiry.value + g.now() : 0
                        })
                    }
                }
                if (w.enabledAnalytics.requestTime) {
                    var D = "hs_slot_pass";
                    o ? D = "hs_slot_bid" : "ok" !== t.status && (D = "hs_slot_error"), n.emit(D, a)
                }
            }

            function x(e) {
                E = e
            }
            if (!c.isXhrSupported()) return null;
            var T, w, S, D, E;
            ! function() {
                n = f.services.EventsService, s = f.services.RenderService, a = f.services.ComplianceService, w = {
                    partnerId: "RubiconHtb",
                    namespace: "RubiconHtb",
                    statsId: "RUBI",
                    version: "2.1.3",
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
                    lineItemType: u.LineItemTypes.ID_AND_SIZE,
                    callbackType: l.CallbackTypes.NONE,
                    architecture: l.Architectures.MRA,
                    requestType: l.RequestTypes.AJAX
                }, D = {
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
                    "200x600": 126
                }, S = o.getProtocol() + "//fastlane.rubiconproject.com/a/api/fastlane.json", T = l(w, e, null, {
                    parseResponse: I,
                    generateRequestObj: b
                })
            }();
            var P = {
                setFirstPartyData: x
            };
            return d.derive(T, P)
        }
        var n, s, a, o = e(7),
            d = e(9),
            u = e(11),
            c = e(19),
            l = e(39),
            p = e(21),
            f = e(48),
            g = e(22),
            h = e(23);
        e(24);
        t.exports = i
    }, {}],
    42: [function(e, t, r) {
        "use strict";

        function i() {
            function e(e, t, r) {
                a.hasOwnProperty(e) || (a[e] = []);
                var i = n.generateUniqueId();
                return a[e].push({
                    id: i,
                    fn: r,
                    once: t
                }), i
            }

            function t(t, r) {
                return e(t, !1, r)
            }

            function r(t, r) {
                return e(t, !0, r)
            }

            function i(e) {
                for (var t in a)
                    if (a.hasOwnProperty(t))
                        for (var r = a[t].length - 1; r >= 0; r--)
                            if (a[t][r].id === e) return void a[t].splice(r, 1)
            }

            function s() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift();
                if (t && a.hasOwnProperty(t))
                    for (var r = a[t].length - 1; r >= 0; r--) {
                        try {
                            a[t][r].fn.apply(null, e)
                        } catch (e) {}
                        a[t][r].once && a[t].splice(r, 1)
                    }
            }
            var a;
            return function() {
                a = {}
            }(), {
                on: t,
                once: r,
                off: i,
                emit: s
            }
        }
        var n = e(22);
        e(24);
        t.exports = i
    }, {}],
    43: [function(e, t, r) {
        "use strict";

        function i(e) {
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
                if (u.isEmpty(P)) return [];
                var e = {
                    s: "identity",
                    t: z,
                    xslots: {}
                };
                for (var r in P)
                    if (P.hasOwnProperty(r)) {
                        e.xslots.hasOwnProperty(r) || (e.xslots[r] = {});
                        for (var i = 0; i < P[r].length; i++) {
                            var n = P[r][i];
                            "bid_requests" !== n.n && "res_latency" !== n.n || (n.v = String(n.v)), e.xslots[r].hasOwnProperty(n.x) || (e.xslots[r][n.x] = {});
                            var s = t(n.n);
                            e.xslots[r][n.x][s] = n.v
                        }
                        F.hasOwnProperty(r) && !1 !== F[r] || (e.xslots[r].before[t("partner_timeout")] = A, F[r] = !0)
                    } return P = {}, [e]
            }

            function i(e, t) {
                u.isEmpty(P) && (z = d.now());
                var r = t.statsId;
                P[r] = P[r] || [];
                var i = {
                    b: r,
                    x: R ? "after" : "before"
                };
                "hs_identity_request" === e ? (i.n = "bid_requests", i.v = 1, O[r] = d.now()) : "hs_identity_cached" === e ? (i.n = "bid_requests", i.v = 0) : "hs_identity_response" === e ? (i.n = "bid_responses", i.v = 1) : "hs_identity_error" === e ? (i.n = "bid_errors", i.v = 1) : "hs_identity_pass" === e ? (i.n = "bid_passes", i.v = 1) : "hs_identity_timeout" === e ? (i.n = "bid_timeouts", i.v = 1) : "hs_identity_bid_latency" === e && (i.n = "res_latency", i.v = d.now() - O[r]), P[r].push(i)
            }

            function c(e, r) {
                var i = [],
                    n = "",
                    s = "";
                for (var a in r)
                    if (r.hasOwnProperty(a)) {
                        var o = r[a],
                            d = {
                                s: o.s,
                                t: o.t,
                                xslots: {}
                            };
                        for (s in o.events)
                            if (o.events.hasOwnProperty(s)) {
                                for (var u in o.events[s])
                                    if (o.events[s].hasOwnProperty(u))
                                        for (n in o.events[s][u])
                                            if (o.events[s][u].hasOwnProperty(n)) {
                                                var c = o.events[s][u][n],
                                                    l = c.v,
                                                    p = t(u);
                                                "res_latency" === c.n && (c.v = String(c.v)), d.xslots.hasOwnProperty(s) || (d.xslots[s] = {}), d.xslots[s].hasOwnProperty(n) || (d.xslots[s][n] = {}), d.xslots[s][n][p] = l
                                            } for (n in d.xslots[s]) d.xslots[s].hasOwnProperty(n) && D.hasOwnProperty(s) && (d.xslots[s][n][t("partner_timeout")] = D[s])
                            } i.push(d)
                    } return i
            }

            function l(e) {
                if (S.hasOwnProperty(e) && S[e] !== N.IPR && S[e] !== N.SENT) {
                    var i = {
                        p: "display",
                        d: o.DeviceTypeChecker.getDeviceType(),
                        c: h,
                        s: e,
                        w: m,
                        t: d.now(),
                        pg: {
                            t: y,
                            e: x[e]
                        }
                    };
                    i[t("global_timeout")] = String(o.globalTimeout), v.auctionCycle && (i.ac = I[e]), i.sl = u.mergeArrays(c(e, T[e]), r()), i.akamaiDebugInfo = w[e], delete w[e], delete x[e], delete T[e];
                    var n = a.buildUrl(f, null, {
                        s: g,
                        u: s.getPageUrl(),
                        v: 3
                    });
                    a.ajax({
                        method: "POST",
                        url: n,
                        data: i
                    }), S[e] = N.SENT
                }
            }

            function p(e, t) {
                var r = t.sessionId,
                    i = t.htSlotId,
                    s = t.statsId,
                    a = t.xSlotNames,
                    o = t.requestId || "";
                if (S.hasOwnProperty(r) && S[r] !== N.DONE && S[r] !== N.SENT) {
                    T[r].hasOwnProperty(i) || (T[r][i] = {
                        s: i,
                        t: d.now(),
                        events: {}
                    }), T[r][i].events.hasOwnProperty(s) || (T[r][i].events[s] = {}), T[r][i].events[s].hasOwnProperty(e) || (T[r][i].events[s][e] = {});
                    for (var u = T[r][i].events[s][e], c = 0; c < a.length; c++) {
                        var l = a[c],
                            p = r + s + i + l + o;
                        if (!E[p]) {
                            "bid_timeouts" === e && (E[p] = !0), u.hasOwnProperty(l) || (u[l] = {
                                n: e,
                                v: 0,
                                b: s,
                                x: l
                            });
                            var f = u[l];
                            if ("res_latency" === e) {
                                var g = d.now() - _[p];
                                delete _[p], (!f.v || f.v > g) && (f.v = g)
                            } else "prefetch" === e ? f.v = 1 : f.v++;
                            "bid_requests" === e ? _[p] = d.now() : "bid_responses" === e && n.emit("hs_slot_valid_bid_latency", t)
                        }
                    }
                }
            }
            if (!a.isXhrSupported()) return null;
            var f, g, h, v, m, y, _, b, I, x, T, w, S, D, E, P, A, O, z, R, F, N = {
                    IPR: 0,
                    DONE: 1,
                    SENT: 2
                },
                L = {
                    hs_session_start: function(e) {
                        var t = e.sessionId;
                        S.hasOwnProperty(t) || (S[t] = N.IPR, b[t] = d.now(), x[t] = [], T[t] = {})
                    },
                    hs_session_end: function(e) {
                        var t = e.sessionId;
                        S.hasOwnProperty(t) && S[t] !== N.DONE && (I[t] = String(d.now() - b[t]), delete b[t], setTimeout(function() {
                            S[t] = N.DONE, l(t)
                        }, 0))
                    },
                    hs_akamai_debug: function(e) {
                        var t = e.sessionId;
                        w[t] = {}, w[t].hostname = e.hostname, e.hasOwnProperty("requestHost") && (w[t].requestHost = e.requestHost), e.hasOwnProperty("akamaiPresent") && (w[t].akamaiPresent = e.akamaiPresent)
                    },
                    hs_slot_request: function(e) {
                        p("bid_requests", e)
                    },
                    hs_slot_bid: function(e) {
                        p("bid_responses", e)
                    },
                    hs_slot_pass: function(e) {
                        p("bid_passes", e)
                    },
                    hs_slot_timeout: function(e) {
                        p("bid_timeouts", e)
                    },
                    hs_slot_error: function(e) {
                        p("bid_errors", e)
                    },
                    hs_slot_highest_bid: function(e) {
                        p("top_bid", e)
                    },
                    hs_slot_valid_bid_latency: function(e) {
                        p("res_latency", e)
                    },
                    hs_slot_kv_pushed: function(e) {
                        p("dfp_kv_pushed", e)
                    },
                    hs_slot_prefetch: function(e) {
                        p("prefetch", e)
                    },
                    hs_define_partner_timeout: function(e) {
                        D[e.statsId] = String(e.timeout)
                    },
                    hs_identity_request: function(e) {
                        i("hs_identity_request", e)
                    },
                    hs_identity_cached: function(e) {
                        i("hs_identity_cached", e)
                    },
                    hs_identity_response: function(e) {
                        i("hs_identity_response", e), n.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_error: function(e) {
                        i("hs_identity_error", e), n.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_pass: function(e) {
                        i("hs_identity_pass", e), n.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_bid_latency: function(e) {
                        u.isNumber(O[e.statsId]) && i("hs_identity_bid_latency", e)
                    },
                    hs_identity_timeout: function(e) {
                        i("hs_identity_timeout", e), R = !0
                    },
                    hs_define_identity_timeout: function(e) {
                        A = String(e.timeout)
                    }
                };
            return function() {
                n = o.services.EventsService, y = d.now(), f = s.getProtocol("http://as", "https://as-sec") + ".casalemedia.com/headerstats", g = e.siteId, h = e.configId, v = e.options, m = g + d.now(), m += d.generateUniqueId(32 - m.length), o.instanceId = m, S = {}, x = {}, T = {}, w = {}, _ = {}, b = {}, I = {}, D = {}, E = {}, P = {}, O = {}, R = !1, F = {};
                for (var t in L) L.hasOwnProperty(t) && o.services.EventsService.on(t, L[t])
            }(), {}
        }
        var n, s = e(7),
            a = e(19),
            o = e(48),
            d = e(22),
            u = e(23);
        e(24);
        t.exports = i
    }, {}],
    44: [function(e, t, r) {
        "use strict";

        function i(e) {
            function t(e, t, r, i) {
                if (e.hasOwnProperty(t) && e[t].hasOwnProperty(r)) {
                    for (var n = null, s = 0; s < i.length; s++) {
                        var a = i[s];
                        e[t][r].hasOwnProperty(a) && (n = e[t][r][a])
                    }
                    return n
                }
            }

            function r(e) {
                return !!x.hasOwnProperty(e) && (T[e] = !0, delete x[e], !0)
            }

            function i() {
                var e = d.now();
                for (var t in x) x.hasOwnProperty(t) && x[t].timeOfExpiry && e > x[t].timeOfExpiry && r(t)
            }

            function l(e) {
                var t;
                do {
                    t = d.generateUniqueId(s.PUBKIT_AD_ID_LENGTH, "ALPHANUM")
                } while (x.hasOwnProperty[t]);
                return x[t] = e, t
            }

            function p(e) {
                if (x.hasOwnProperty(e) && x[e].timeOfExpiry && d.now() > x[e].timeOfExpiry && r(e), T[e]) return n.emit("internal_info", "Attempted to render expired ad " + e), null;
                if (!x.hasOwnProperty(e)) throw c("INVALID_VALUE", "`pubKitAdId` does not match any registered ad");
                var t = x[e];
                return r(e), t
            }

            function f(e) {
                if (e.auxFn) try {
                    e.auxFn.apply(null, e.auxArgs)
                } catch (e) {
                    n.emit("internal_error", "Error occurred running ad aux function.", e.stack)
                }
            }

            function g(e, t) {
                var r = p(t);
                if (!r) return !1;
                f(r);
                try {
                    d.documentWrite(e, r.adm)
                } catch (e) {
                    return n.emit("internal_error", 'Error occurred while rendering ad "' + t + '".', e.stack), !1
                }
                return !0
            }

            function h(e) {
                var t = l(e);
                if (e.price || e.dealId) {
                    var r = e.partnerId,
                        i = e.requestId;
                    if (D.hasOwnProperty(r)) {
                        var n;
                        n = u.isString(e.size) ? e.size : a.arrayToString(e.size), a.isSpecialSize(n) && (z[i] = n), E[r] || (E[r] = {}), E[r][n] || (E[r][n] = {}), E[r][n][i] || (E[r][n][i] = []), E[r][n][i].push(t);
                        var s = e.price;
                        s && (P[r] || (P[r] = {}), P[r][s] || (P[r][s] = {}), P[r][s][i] || (P[r][s][i] = []), P[r][s][i].push(t));
                        var o = e.dealId;
                        return o && (A[r] || (A[r] = {}), A[r][o] || (A[r][o] = {}), A[r][o][i] || (A[r][o][i] = []), A[r][o][i].push(t)), t
                    }
                }
            }

            function v(e, t, r, i, n, s) {
                if (D.hasOwnProperty(t)) {
                    var a = {
                        sessionId: e,
                        partnerId: t,
                        adm: r,
                        price: n
                    };
                    i && i > 0 && (a.timeOfExpiry = i);
                    var o = l(a);
                    return O[s] = O[s] || {}, O[s][n] = O[s][n] || [], O[s][n].push(o), o
                }
            }

            function m(e, t, r, i, s) {
                try {
                    if (!E.hasOwnProperty(e)) return void n.emit("internal_error", "Partner " + e + " missing from ad ID map.");
                    if (!u.isObject(r)) return void n.emit("internal_error", "invalid targeting map");
                    if (!r.hasOwnProperty(D[e].idKey)) return void n.emit("internal_error", "targeting map missing key " + D[e].idKey);
                    var a = r[D[e].idKey];
                    if (!u.isArray(a)) return void n.emit("internal_error", "invalid targeting map");
                    if (!u.isNumeric(i)) return void n.emit("internal_error", "invalid width");
                    if (!u.isNumeric(s)) return void n.emit("internal_error", "invalid height");
                    var o = i + "x" + s;
                    if (S && S.hasOwnProperty(o)) {
                        var d = S[o];
                        o = d[0] + "x" + d[1]
                    }
                    for (var c = 0; c < a.length; c++) {
                        var l = a[c],
                            p = z[l] || o;
                        if (!E[e].hasOwnProperty(p)) return void n.emit("internal_error", "Size key " + p + " missing from ad ID map for partner " + e);
                        if (E[e][p].hasOwnProperty(l)) {
                            var f = E[e][p][l];
                            if (f.length) {
                                g(t, u.randomSplice(f));
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
                    var i = e.partner,
                        s = e.price,
                        o = e.id,
                        d = e.targeting,
                        c = e.size;
                    if (D[i]) {
                        if (!d.hasOwnProperty(D[i].idKey)) return void n.emit("internal_error", "targeting map missing key " + D[i].idKey);
                        var l = d[D[i].idKey],
                            g = null;
                        if (void 0 !== s)
                            for (var h = [A, P], v = 0; v < h.length && !(g = t(h[v], i, s, l)); v++);
                        else {
                            if (!a.isSize(c)) return;
                            var m = a.arrayToString(c);
                            if (S && S.hasOwnProperty(m)) {
                                var y = S[m];
                                m = a.arrayToString(y)
                            }
                            g = t(E, i, m, l)
                        }
                        if (g) {
                            var _ = u.randomSplice(g),
                                b = p(_);
                            if (!b) return void n.emit("internal_error", "No ad found for ad ID " + _);
                            f(b);
                            for (var I, x = b.size, T = b.adm, w = document.getElementsByTagName("iframe"), O = 0; O < w.length; O++)
                                if (w[O].contentWindow === r) {
                                    I = w[O];
                                    break
                                } I && (I.width = String(x[0]), I.height = String(x[1]), "" !== I.parentElement.style.width && "" !== I.parentElement.style.height && (I.parentElement.style.width = x[0] + "px", I.parentElement.style.height = x[1] + "px")), r.postMessage("ix_ht_render_adm:" + JSON.stringify({
                                adm: T,
                                id: o,
                                size: x
                            }), "*")
                        }
                    }
                }
            }

            function _(e, t, r, i) {
                try {
                    var s = t.ownerDocument;
                    if (!E.hasOwnProperty(e)) return void n.emit("internal_error", "Partner " + e + " missing from ad ID map.");
                    if (!u.isString(i)) return void n.emit("internal_error", "invalid width");
                    if (!E[e].hasOwnProperty(i)) return void n.emit("internal_error", "Size key " + i + " missing from ad ID map for partner " + e);
                    if (E[e][i].hasOwnProperty(r)) {
                        var a = E[e][i][r];
                        if (!a.length) return void n.emit("internal_error", "Size key " + i + " contains no ads for partner " + e);
                        g(s, a.shift())
                    }
                } catch (t) {
                    n.emit("internal_error", 'Error occurred while rendering ad for "' + e + '".', t.stack)
                }
            }

            function b(e, t, r, i) {
                try {
                    for (var s, a = r.split(","), o = 0; o < a.length; o++)
                        if (s = a[o].split("_"), s[0] === i) {
                            if (O[i] && O[i][s[1]])
                                for (var d = O[i][s[1]], u = !1; d.length > 0 && !u;) u = g(t, d.shift());
                            return
                        }
                } catch (t) {
                    n.emit("internal_error", 'Error occurred while rendering ad for "' + e + '".', t.stack)
                }
            }

            function I(e, t, r) {
                D.hasOwnProperty(e) || (D[e] = {}), D[e].lineItemType = t, D[e].idKey = r
            }
            var x, T, w, S, D = {},
                E = {},
                P = {},
                A = {},
                O = {},
                z = {};
            return function() {
                x = {}, T = {}, S = e.sizeRetargeting || null, w = setInterval(i, s.RENDER_SERVICE_EXPIRY_SWEEP_TIMER), n = o.services.EventsService, window.addEventListener("message", function(e) {
                    try {
                        if (!u.isString(e.data) || "ix_ht_render:" !== e.data.substr(0, "ix_ht_render:".length)) return;
                        y(JSON.parse(e.data.substr("ix_ht_render:".length)), e.source, e.origin)
                    } catch (e) {
                        n.emit("internal_error", "Error occurred while rendering ad.", e.stack)
                    }
                }, !1)
            }(), {
                registerAd: h,
                render: g,
                registerPartner: I,
                renderDfpAd: m,
                registerIndexLegacyAd: v,
                renderIndexLegacyAd: b,
                renderRubiconAd: _
            }
        }
        var n, s = e(11),
            a = e(21),
            o = e(48),
            d = e(22),
            u = e(23),
            c = e(24);
        t.exports = i
    }, {}],
    45: [function(e, t, r) {
        "use strict";

        function i() {
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

            function i() {
                return n.resolve()
            }
            return {
                gdpr: {
                    getConsent: e,
                    setApplies: function() {}
                },
                isPrivacyEnabled: t,
                delay: r,
                wait: i
            }
        }
        var n = e(14);
        t.exports = i
    }, {}],
    46: [function(e, t, r) {
        "use strict";

        function i() {
            function e(e) {
                return function() {
                    d[e].state = u.TERMINATED;
                    for (var t = 0; t < d[e].cbs.length; t++) try {
                        d[e].cbs[t]()
                    } catch (e) {}
                    delete d[e].cbs, delete d[e].timer
                }
            }

            function t(t, r, i) {
                var a = s.generateUniqueId(n.SESSION_ID_LENGTH);
                return r = !!r, i = i ? [i] : [], d[a] = {
                    state: u.NEW,
                    cbs: i,
                    timeout: t
                }, r && (d[a].state = u.RUNNABLE, d[a].timer = setTimeout(e(a), t)), a
            }

            function r(t) {
                d.hasOwnProperty(t) && d[t].state === u.NEW && (d[t].state = u.RUNNABLE, d[t].timer = setTimeout(e(t), d[t].timeout))
            }

            function i(e, t) {
                d.hasOwnProperty(e) && d[e].state !== u.TERMINATED && d[e].cbs.unshift(t)
            }

            function a(e) {
                return d.hasOwnProperty(e) ? d[e].state : null
            }

            function o(e) {
                d.hasOwnProperty(e) && d[e].state !== u.TERMINATED && (d[e].state = u.TERMINATED, clearTimeout(d[e].timer), delete d[e].cbs, delete d[e].timer)
            }
            var d, u = {
                NEW: 0,
                RUNNABLE: 1,
                TERMINATED: 2
            };
            return function() {
                d = {}
            }(), {
                TimerStates: u,
                createTimer: t,
                startTimer: r,
                addTimerCallback: i,
                getTimerState: a,
                clearTimer: o
            }
        }
        var n = e(11),
            s = e(22);
        e(24);
        t.exports = i
    }, {}],
    47: [function(e, t, r) {
        "use strict";
        var i, n, s = (e(7), e(10)),
            a = e(25),
            o = e(48),
            d = e(23);
        window[o.NAMESPACE] = window[o.NAMESPACE] || {}, window[o.NAMESPACE].cmd = window[o.NAMESPACE].cmd || [];
        var u = window[o.NAMESPACE].cmd;
        window[o.NAMESPACE] = function() {
            function e(e) {
                return o.LastLineGoogletag.display ? o.LastLineGoogletag.display(e) : window.googletag.display(e)
            }

            function t(e, t) {
                return o.LastLineGoogletag.refresh ? o.LastLineGoogletag.refresh(e, t) : window.googletag.pubads().refresh(e, t)
            }

            function r(e) {
                return o.LastLineGoogletag.destroySlots ? o.LastLineGoogletag.destroySlots(e) : window.googletag.destroySlots(e)
            }

            function u() {
                return o.LastLineGoogletag.enableSingleRequest ? o.LastLineGoogletag.enableSingleRequest() : window.googletag.pubads().enableSingleRequest()
            }

            function c() {
                return o.LastLineGoogletag.disableInitialLoad ? o.LastLineGoogletag.disableInitialLoad() : window.googletag.pubads().disableInitialLoad()
            }

            function l(t) {
                try {
                    if (!d.isString(t)) return n.emit("error", "divId must be a string"), e(t);
                    I.Layers.GptLayer.display(t).catch(function(r) {
                        return n.emit("error", r), e(t)
                    })
                } catch (r) {
                    return n.emit("error", r), e(t)
                }
            }

            function p(e, r) {
                try {
                    if (e && !d.isArray(e)) return n.emit("error", "gSlots must be an array of g-slots."), t(e, r);
                    I.Layers.GptLayer.refresh(e, r).catch(function(i) {
                        return n.emit("error", i), t(e, r)
                    })
                } catch (i) {
                    return n.emit("error", i), t(e, r)
                }
            }

            function f(e, t) {
                var i = !1;
                !t && d.isFunction(e) && (t = e, e = void 0);
                try {
                    if (e && !d.isArray(e) ? (n.emit("error", "gSlots must be an array of g-slots."), i = r(e)) : i = I.Layers.GptLayer.destroySlots(e), d.isFunction(t)) return t(i), i
                } catch (s) {
                    if (n.emit("error", s), i = i || r(e), d.isFunction(t)) try {
                        return t(i), i
                    } catch (e) {
                        n.emit("error", e)
                    }
                }
                return i
            }

            function g() {
                try {
                    return I.Layers.GptLayer.enableSingleRequest()
                } catch (e) {
                    return n.emit("error", e), u()
                }
            }

            function h() {
                try {
                    return I.Layers.GptLayer.disableInitialLoad()
                } catch (e) {
                    return n.emit("error", e), c()
                }
            }

            function v() {
                return T
            }

            function m(e) {
                if (!d.isObject(e)) return void n.emit("error", "invalid first-party data: `data` must be an object");
                if (e.hasOwnProperty("rubicon")) {
                    if (!d.isObject(e.rubicon)) return void n.emit("error", "invalid first-party data.rubicon");
                    for (var t in e.rubicon)
                        if (e.rubicon.hasOwnProperty(t) && -1 === ["keywords", "inventory", "visitor"].indexOf(t)) return void n.emit("error", "invalid first-party data: unrecognized property " + t + " of `data.rubicon`");
                    if (e.rubicon.hasOwnProperty("keywords") && !d.isArray(e.rubicon.keywords, "string")) return void n.emit("error", "invalid first-party data: `data.rubicon.keywords` must be an array of strings");
                    if (e.rubicon.hasOwnProperty("inventory")) {
                        if (!d.isObject(e.rubicon.inventory)) return void n.emit("error", "invalid first-party data: `data.rubicon.inventory` must be an object");
                        for (var r in e.rubicon.inventory)
                            if (e.rubicon.inventory.hasOwnProperty(r) && !d.isArray(e.rubicon.inventory[r], "string")) return void n.emit("error", "invalid first-party data: property " + r + " of `data.rubicon.inventory` must be an array of strings")
                    }
                    if (e.rubicon.hasOwnProperty("visitor")) {
                        if (!d.isObject(e.rubicon.visitor)) return void n.emit("error", "invalid first-party data: `data.rubicon.visitor` must be an object");
                        for (var i in e.rubicon.visitor)
                            if (e.rubicon.visitor.hasOwnProperty(i) && !d.isArray(e.rubicon.visitor[i], "string")) return void n.emit("error", "invalid first-party data: property " + i + " of `data.rubicon.visitor` must be an array of strings")
                    }
                }
                try {
                    I.Layers.PartnersLayer.setFirstPartyData(e)
                } catch (e) {
                    n.emit("error", e)
                }
            }

            function y(e, t, r) {
                var i = "";
                try {
                    if (!d.isBoolean(t)) return n.emit("error", "`once` must be a boolean"), i;
                    if (!d.isFunction(r)) return n.emit("error", "`callback` must be a function"), i;
                    if (!d.isString(e)) return n.emit("error", "`eventName` must be a string"), i;
                    if (!w.hasOwnProperty(e)) return n.emit("error", "Unrecognized event " + e), i;
                    var s = function() {
                        var t = Array.prototype.slice.call(arguments);
                        r(e, JSON.stringify(t))
                    };
                    i = t ? n.once(e, s) : n.on(e, s)
                } catch (e) {
                    n.emit("error", e)
                }
                return i
            }

            function _(e) {
                try {
                    if (!d.isString(e)) return void n.emit("error", "`subscriptionId` must be a string");
                    n.off(e)
                } catch (e) {
                    n.emit("error", e)
                }
            }
            var b, I, x, T, w = {
                error: 1,
                warning: 2,
                global_timeout_reached: 3,
                partner_instantiated: 4,
                partner_request_sent: 5,
                partner_request_complete: 6
            };
            if (function() {
                    o.LastLineGoogletag = {};
                    try {
                        b = {
                            DeviceTypeChecker: {
                                method: "USER_AGENT",
                                configs: {}
                            },
                            htSlots: {
                                "D-ATF-pos_chmodule-300x250": {
                                    id: "9b8ce6ec-ac5b-2e5a-5cef-16f5fb7695ab",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["chmodule"]
                                    }]
                                },
                                "D-ATF-pos_chmodule-728x90": {
                                    id: "4e031e43-c8ec-4f1d-df7e-e4f6a3630b83",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["chmodule"]
                                    }]
                                },
                                "D-ATF-pos_hpleader-728x90": {
                                    id: "2e4d026a-4b3b-45d1-5831-4645ad9740fe",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["hpleader"]
                                    }]
                                },
                                "D-ATF-pos_leader1-728x90": {
                                    id: "361df68e-7c4a-4992-4727-42124bea706b",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["leader1"]
                                    }]
                                },
                                "D-ATF-pos_quiz-300x250": {
                                    id: "2a981cf5-098d-d35b-d0db-de00097d51e8",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["quiz"]
                                    }]
                                },
                                "D-ATF-pos_quiz-300x250|300x600": {
                                    id: "afa34f45-46fd-3485-83f8-c8ddf5675296",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250],
                                            [300, 600]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["quiz"]
                                    }]
                                },
                                "D-ATF-pos_rightrail1-300x250|300x600": {
                                    id: "f8bab589-4c11-7063-867e-87162a8ebf7f",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600],
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail1"]
                                    }]
                                },
                                "D-ATF-pos_rightrail1-728x90": {
                                    id: "2b2c9661-df0a-23f8-ad54-94b3779ffc7c",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail1"]
                                    }]
                                },
                                "D-ATF-pos_topic-300x250|300x600": {
                                    id: "75a1fbd3-c1fd-fc8d-6c63-a4f5183918c0",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600],
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["topic"]
                                    }]
                                },
                                "D-BTF-pos_billboard-728x90": {
                                    id: "22995d9f-265e-f171-23b1-2defcc5ec2c1",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["billboard"]
                                    }]
                                },
                                "D-BTF-pos_billboard-728x90|970x250": {
                                    id: "9593e0a1-8d1e-7d54-68ce-c12eb10cd807",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [970, 250],
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["billboard"]
                                    }]
                                },
                                "D-BTF-pos_leader1-728x90": {
                                    id: "8fb208ef-eba5-197c-4205-e69e8646d54d",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["leader1"]
                                    }]
                                },
                                "D-BTF-pos_leader2-728x90": {
                                    id: "8a6befb1-e498-b9ab-2d51-dca5d404a7a8",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["leader2"]
                                    }]
                                },
                                "D-BTF-pos_leader3-728x90": {
                                    id: "808d141e-f7b3-5a5f-a23c-806832d0149e",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["leader3"]
                                    }]
                                },
                                "D-BTF-pos_mpu_top-300x250": {
                                    id: "4a2451bf-7faa-26ac-5b14-c7867c941a34",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["mpu_top"]
                                    }]
                                },
                                "D-BTF-pos_null-300x250": {
                                    id: "9477f343-9c05-210a-b200-e95d97096ed1",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["null"]
                                    }]
                                },
                                "D-BTF-pos_null-300x250|300x600": {
                                    id: "0829b920-2e30-1bd2-e74a-82a6871b7c87",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600],
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["null"]
                                    }]
                                },
                                "D-BTF-pos_null-300x600": {
                                    id: "d35fd2ba-ddc1-ea61-043a-3ee205e8e229",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["null"]
                                    }]
                                },
                                "D-BTF-pos_null-728x90": {
                                    id: "e2842da5-302c-996d-02bf-1c5026cc8ae8",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["null"]
                                    }]
                                },
                                "D-BTF-pos_rightrail1-300x250": {
                                    id: "c06e9ce2-ed50-d49b-c686-3d76413f3eb6",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail1"]
                                    }]
                                },
                                "D-BTF-pos_rightrail1-300x250|300x600": {
                                    id: "36760987-0a7f-dc8f-24e5-d3497443ead9",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600],
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail"]
                                    }]
                                },
                                "D-BTF-pos_rightrail1-300x250|300x600|728x90": {
                                    id: "09c71194-b7ce-0496-b3f4-f1a9be878f67",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90],
                                            [300, 600],
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail1"]
                                    }]
                                },
                                "D-BTF-pos_rightrail2-300x250": {
                                    id: "6c584c5f-f1ad-77c7-3d91-41459d772b75",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail2"]
                                    }]
                                },
                                "D-BTF-pos_rightrail2-300x250|300x600": {
                                    id: "fb8c567f-ac09-22d8-ab39-2da4c159e539",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600],
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail2"]
                                    }]
                                },
                                "D-BTF-pos_rightrail2-300x600": {
                                    id: "6100276c-93e7-4d4d-edd2-ebd585f56aed",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail2"]
                                    }]
                                },
                                "D-BTF-pos_rightrail3-300x250": {
                                    id: "44fa8c07-6f32-8dc6-7cbd-2b12729bb8d3",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail3"]
                                    }]
                                },
                                "D-BTF-pos_rightrail4-300x250|300x600": {
                                    id: "0daa2843-a4ab-e01c-9f9d-2360c8d0c94d",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600],
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail4"]
                                    }]
                                },
                                "D-BTF-pos_rightrail4-300x600": {
                                    id: "2cc1f097-808f-9383-3ce1-6bdbcb5d4f55",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail4"]
                                    }]
                                },
                                "D-BTF-pos_top-728x90": {
                                    id: "46858ec9-de13-c658-6ca8-9748dce85265",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["top"]
                                    }]
                                },
                                "M-ATF-pos_chmodule-300x250": {
                                    id: "1c908d74-88a1-968a-0e68-fa791a457500",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["chmodule"]
                                    }]
                                },
                                "M-ATF-pos_topic-300x250": {
                                    id: "b87e76c3-2057-94ed-46c3-d4973330738c",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["topic"]
                                    }]
                                },
                                "M-BTF-pos_chmodule-300x250": {
                                    id: "f8a36052-a1ce-1217-c83a-037cb84704e3",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["chmodule"]
                                    }]
                                },
                                "M-BTF-pos_leader1-300x250": {
                                    id: "8657c7f8-2e23-c76a-1e56-6c812f6d1c06",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["leader1"]
                                    }]
                                },
                                "M-BTF-pos_leader2-300x250": {
                                    id: "e8bca375-2967-aa50-eaa3-eba7586711bb",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["leader2"]
                                    }]
                                },
                                "M-BTF-pos_mpu_top-300x250": {
                                    id: "f17e291d-9af1-05f1-a1ee-d32ae08aa5cf",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["mpu_top"]
                                    }]
                                },
                                "M-BTF-pos_null-300x250": {
                                    id: "8ff8cdad-69b8-4bc8-3620-fa59275ed75a",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["null"]
                                    }]
                                },
                                "M-BTF-pos_quiz-300x250": {
                                    id: "9bab5efd-3e20-a84c-5848-b99bb3d11a81",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["quiz"]
                                    }]
                                },
                                "M-BTF-pos_rightrail1-300x250": {
                                    id: "bc7cd803-a5c6-646b-adf0-13efd189c17f",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail1"]
                                    }]
                                },
                                "M-BTF-pos_rightrail1-300x250|300x600": {
                                    id: "479a4686-cec2-31ca-e7a7-65296cc0f7bd",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 600],
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail1"]
                                    }]
                                },
                                "M-BTF-pos_rightrail2-300x250": {
                                    id: "3ad04563-5a60-7c30-13b3-e53b3678e401",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail2"]
                                    }]
                                },
                                "M-BTF-pos_rightrail2-300x250|300x600": {
                                    id: "19301497-b53f-d57c-e461-c79983fc0f62",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250],
                                            [300, 600]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail2"]
                                    }]
                                },
                                "M-BTF-pos_rightrail3-300x250": {
                                    id: "2de3acf4-9d8f-a157-a784-9e5293a7f599",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["rightrail3"]
                                    }]
                                },
                                "M-BTF-pos_top-728x90": {
                                    id: "a48d6c2d-65f0-5ba9-d5da-d72be44270dd",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["top"]
                                    }]
                                },
                                "D-ATF-pos_topleader-728x90": {
                                    id: "1357b22c-77c8-c0ca-1ab6-875797312d15",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["topleader"]
                                    }]
                                },
                                "D-BTF-pos_botleader-728x90": {
                                    id: "9535280d-984e-ad32-641f-1fd2a4337a21",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["botleader"]
                                    }]
                                },
                                "M-ATF-pos_topleader-728x90": {
                                    id: "f039a7e4-66d6-f886-4662-3dd3e1e48409",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    targeting: [{
                                        pos: ["topleader"]
                                    }]
                                }
                            },
                            Services: {
                                TimerService: {},
                                RenderService: {
                                    sizeRetargeting: {}
                                },
                                HeaderStatsService: {
                                    siteId: "210636",
                                    configId: "252197778795886",
                                    options: {
                                        auctionCycle: !0
                                    }
                                },
                                EventsService: {}
                            },
                            Layers: [{
                                layerId: "GptLayer",
                                configs: {
                                    globalTimeout: 1e3,
                                    enableSingleRequest: !0,
                                    disableInitialLoad: !1,
                                    override: {
                                        display: !0,
                                        refresh: !0,
                                        destroySlots: !0,
                                        enableSingleRequest: !1,
                                        disableInitialLoad: !1
                                    },
                                    slotMapping: {
                                        selectors: [
                                            ["size", "targeting"]
                                        ],
                                        filters: ["deviceType"]
                                    }
                                }
                            }, {
                                layerId: "MediationLayer",
                                configs: {
                                    mediationLevel: "NONE"
                                }
                            }, {
                                layerId: "IdentityLayer",
                                configs: {
                                    timeout: 50,
                                    partners: {
                                        AdserverOrgIp: {
                                            enabled: !0,
                                            configs: {
                                                publisherId: 185640
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
                                                    10: {
                                                        siteId: "230698",
                                                        size: [300, 250]
                                                    },
                                                    11: {
                                                        siteId: "230700",
                                                        size: [728, 90]
                                                    },
                                                    12: {
                                                        siteId: "230701",
                                                        size: [300, 250]
                                                    },
                                                    13: {
                                                        siteId: "230702",
                                                        size: [300, 250]
                                                    },
                                                    14: {
                                                        siteId: "230703",
                                                        size: [300, 250]
                                                    },
                                                    17: {
                                                        siteId: "240540",
                                                        size: [300, 250]
                                                    },
                                                    18: {
                                                        siteId: "240541",
                                                        size: [300, 600]
                                                    },
                                                    19: {
                                                        siteId: "240542",
                                                        size: [728, 90]
                                                    },
                                                    20: {
                                                        siteId: "240543",
                                                        size: [300, 250]
                                                    },
                                                    21: {
                                                        siteId: "240544",
                                                        size: [300, 600]
                                                    },
                                                    22: {
                                                        siteId: "240545",
                                                        size: [300, 250]
                                                    },
                                                    23: {
                                                        siteId: "240546",
                                                        size: [300, 600]
                                                    },
                                                    25: {
                                                        siteId: "240548",
                                                        size: [728, 90]
                                                    },
                                                    26: {
                                                        siteId: "240549",
                                                        size: [728, 90]
                                                    },
                                                    28: {
                                                        siteId: "240551",
                                                        size: [300, 250]
                                                    },
                                                    31: {
                                                        siteId: "240554",
                                                        size: [300, 250]
                                                    },
                                                    32: {
                                                        siteId: "240555",
                                                        size: [300, 600]
                                                    },
                                                    33: {
                                                        siteId: "240556",
                                                        size: [300, 250]
                                                    },
                                                    34: {
                                                        siteId: "240557",
                                                        size: [300, 600]
                                                    },
                                                    36: {
                                                        siteId: "240559",
                                                        size: [300, 250]
                                                    },
                                                    37: {
                                                        siteId: "268727",
                                                        size: [300, 250]
                                                    },
                                                    38: {
                                                        siteId: "268728",
                                                        size: [300, 250]
                                                    },
                                                    39: {
                                                        siteId: "268729",
                                                        size: [300, 250]
                                                    },
                                                    40: {
                                                        siteId: "268730",
                                                        size: [300, 600]
                                                    },
                                                    41: {
                                                        siteId: "268731",
                                                        size: [300, 600]
                                                    },
                                                    42: {
                                                        siteId: "268732",
                                                        size: [728, 90]
                                                    },
                                                    43: {
                                                        siteId: "268733",
                                                        size: [300, 250]
                                                    },
                                                    44: {
                                                        siteId: "268734",
                                                        size: [300, 250]
                                                    },
                                                    45: {
                                                        siteId: "268735",
                                                        size: [728, 90]
                                                    },
                                                    46: {
                                                        siteId: "309258",
                                                        size: [728, 90]
                                                    },
                                                    47: {
                                                        siteId: "309259",
                                                        size: [300, 250]
                                                    },
                                                    48: {
                                                        siteId: "309260",
                                                        size: [300, 600]
                                                    },
                                                    49: {
                                                        siteId: "309261",
                                                        size: [728, 90]
                                                    },
                                                    50: {
                                                        siteId: "309262",
                                                        size: [300, 600]
                                                    },
                                                    52: {
                                                        siteId: "309264",
                                                        size: [728, 90]
                                                    },
                                                    53: {
                                                        siteId: "309265",
                                                        size: [728, 90]
                                                    },
                                                    54: {
                                                        siteId: "309266",
                                                        size: [970, 250]
                                                    },
                                                    55: {
                                                        siteId: "309267",
                                                        size: [728, 90]
                                                    },
                                                    56: {
                                                        siteId: "309268",
                                                        size: [300, 250]
                                                    },
                                                    57: {
                                                        siteId: "309269",
                                                        size: [300, 250]
                                                    },
                                                    58: {
                                                        siteId: "309270",
                                                        size: [300, 250]
                                                    },
                                                    59: {
                                                        siteId: "309271",
                                                        size: [300, 250]
                                                    },
                                                    60: {
                                                        siteId: "315685",
                                                        size: [300, 250]
                                                    },
                                                    61: {
                                                        siteId: "315686",
                                                        size: [300, 600]
                                                    },
                                                    62: {
                                                        siteId: "315687",
                                                        size: [300, 250]
                                                    },
                                                    63: {
                                                        siteId: "315688",
                                                        size: [300, 250]
                                                    },
                                                    64: {
                                                        siteId: "326562",
                                                        size: [728, 90]
                                                    },
                                                    65: {
                                                        siteId: "326563",
                                                        size: [728, 90]
                                                    },
                                                    66: {
                                                        siteId: "326564",
                                                        size: [728, 90]
                                                    },
                                                    "03": {
                                                        siteId: "230692",
                                                        size: [300, 250]
                                                    },
                                                    "04": {
                                                        siteId: "230693",
                                                        size: [300, 600]
                                                    },
                                                    "05": {
                                                        siteId: "230694",
                                                        size: [728, 90]
                                                    },
                                                    "06": {
                                                        siteId: "230695",
                                                        size: [300, 250]
                                                    },
                                                    "07": {
                                                        siteId: "230696",
                                                        size: [300, 600]
                                                    },
                                                    "01": {
                                                        siteId: "230690",
                                                        size: [728, 90]
                                                    },
                                                    "02": {
                                                        siteId: "230691",
                                                        size: [300, 250]
                                                    },
                                                    "08": {
                                                        siteId: "230697",
                                                        size: [300, 250]
                                                    },
                                                    "09": {
                                                        siteId: "230699",
                                                        size: [300, 600]
                                                    }
                                                },
                                                mapping: {
                                                    "D-BTF-pos_rightrail4-300x250|300x600": ["22", "23"],
                                                    "M-BTF-pos_rightrail1-300x250|300x600": ["31", "32"],
                                                    "D-BTF-pos_rightrail1-300x250|300x600": ["03", "04"],
                                                    "D-ATF-pos_leader1-728x90": ["05"],
                                                    "D-ATF-pos_quiz-300x250|300x600": ["06", "07"],
                                                    "D-ATF-pos_hpleader-728x90": ["01"],
                                                    "D-ATF-pos_chmodule-300x250": ["02"],
                                                    "D-ATF-pos_rightrail1-300x250|300x600": ["10", "09"],
                                                    "D-BTF-pos_leader1-728x90": ["11"],
                                                    "M-BTF-pos_rightrail1-300x250": ["12"],
                                                    "M-ATF-pos_chmodule-300x250": ["13"],
                                                    "M-BTF-pos_chmodule-300x250": ["14"],
                                                    "D-BTF-pos_rightrail1-300x250|300x600|728x90": ["18", "19", "17"],
                                                    "D-BTF-pos_rightrail2-300x250": ["08"],
                                                    "D-BTF-pos_rightrail2-300x250|300x600": ["20", "21"],
                                                    "D-BTF-pos_leader2-728x90": ["25"],
                                                    "D-BTF-pos_leader3-728x90": ["26"],
                                                    "D-BTF-pos_rightrail3-300x250": ["28"],
                                                    "M-BTF-pos_rightrail2-300x250|300x600": ["33", "34"],
                                                    "M-BTF-pos_leader1-300x250": ["36"],
                                                    "D-BTF-pos_mpu_top-300x250": ["37"],
                                                    "D-BTF-pos_null-300x250": ["38"],
                                                    "D-BTF-pos_null-300x250|300x600": ["39", "40"],
                                                    "D-BTF-pos_null-300x600": ["41"],
                                                    "D-BTF-pos_top-728x90": ["42"],
                                                    "M-BTF-pos_mpu_top-300x250": ["43"],
                                                    "M-BTF-pos_null-300x250": ["44"],
                                                    "M-BTF-pos_top-728x90": ["45"],
                                                    "D-BTF-pos_null-728x90": ["46"],
                                                    "D-BTF-pos_rightrail1-300x250": ["47"],
                                                    "D-BTF-pos_rightrail2-300x600": ["48"],
                                                    "D-ATF-pos_chmodule-728x90": ["49"],
                                                    "D-BTF-pos_rightrail4-300x600": ["50"],
                                                    "D-BTF-pos_billboard-728x90": ["52"],
                                                    "D-BTF-pos_billboard-728x90|970x250": ["53", "54"],
                                                    "D-ATF-pos_rightrail1-728x90": ["55"],
                                                    "M-BTF-pos_rightrail2-300x250": ["56"],
                                                    "M-BTF-pos_leader2-300x250": ["57"],
                                                    "M-BTF-pos_quiz-300x250": ["58"],
                                                    "M-BTF-pos_rightrail3-300x250": ["59"],
                                                    "D-ATF-pos_topic-300x250|300x600": ["60", "61"],
                                                    "D-ATF-pos_quiz-300x250": ["62"],
                                                    "M-ATF-pos_topic-300x250": ["63"],
                                                    "D-ATF-pos_topleader-728x90": ["64"],
                                                    "D-BTF-pos_botleader-728x90": ["65"],
                                                    "M-ATF-pos_topleader-728x90": ["66"]
                                                },
                                                timeout: 0,
                                                siteId: "210636",
                                                targetingKeyOverride: {
                                                    om: "IOM",
                                                    pm: "IOM"
                                                },
                                                bidTransformer: {
                                                    outputCentsDivisor: 1,
                                                    outputPrecision: 0,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 500,
                                                        step: 1
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 1e4,
                                                        step: 50
                                                    }],
                                                    bidUnitInCents: 1
                                                }
                                            }
                                        },
                                        OpenXHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        adUnitId: "539925039",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    2: {
                                                        adUnitId: "539925041",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    3: {
                                                        adUnitId: "539925042",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    4: {
                                                        adUnitId: "539925043",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    5: {
                                                        adUnitId: "539925044",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    6: {
                                                        adUnitId: "539925045",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    7: {
                                                        adUnitId: "539925046",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    8: {
                                                        adUnitId: "539925047",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    9: {
                                                        adUnitId: "540038067",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    10: {
                                                        adUnitId: "540038068",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    11: {
                                                        adUnitId: "540038069",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    12: {
                                                        adUnitId: "540038070",
                                                        sizes: [
                                                            [300, 600]
                                                        ]
                                                    },
                                                    13: {
                                                        adUnitId: "539925048",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    14: {
                                                        adUnitId: "539925049",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600],
                                                            [728, 90]
                                                        ]
                                                    },
                                                    15: {
                                                        adUnitId: "539925050",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    16: {
                                                        adUnitId: "539925051",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    17: {
                                                        adUnitId: "539925052",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    18: {
                                                        adUnitId: "539925053",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    19: {
                                                        adUnitId: "540038071",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    20: {
                                                        adUnitId: "539925054",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    21: {
                                                        adUnitId: "539925056",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    22: {
                                                        adUnitId: "539925057",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    23: {
                                                        adUnitId: "540038072",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    24: {
                                                        adUnitId: "540038073",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    25: {
                                                        adUnitId: "539925058",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    26: {
                                                        adUnitId: "539925059",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    27: {
                                                        adUnitId: "539925060",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    28: {
                                                        adUnitId: "540038074",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    }
                                                },
                                                mapping: {
                                                    "D-ATF-pos_chmodule-300x250": ["1"],
                                                    "D-ATF-pos_hpleader-728x90": ["2"],
                                                    "D-ATF-pos_leader1-728x90": ["3"],
                                                    "D-ATF-pos_quiz-300x250|300x600": ["4"],
                                                    "D-ATF-pos_rightrail1-300x250|300x600": ["5"],
                                                    "D-BTF-pos_leader1-728x90": ["6"],
                                                    "D-BTF-pos_leader2-728x90": ["7"],
                                                    "D-BTF-pos_leader3-728x90": ["8"],
                                                    "D-BTF-pos_mpu_top-300x250": ["9"],
                                                    "D-BTF-pos_null-300x250": ["10"],
                                                    "D-BTF-pos_null-300x250|300x600": ["11"],
                                                    "D-BTF-pos_null-300x600": ["12"],
                                                    "D-BTF-pos_rightrail1-300x250|300x600": ["13"],
                                                    "D-BTF-pos_rightrail1-300x250|300x600|728x90": ["14"],
                                                    "D-BTF-pos_rightrail2-300x250": ["15"],
                                                    "D-BTF-pos_rightrail2-300x250|300x600": ["16"],
                                                    "D-BTF-pos_rightrail3-300x250": ["17"],
                                                    "D-BTF-pos_rightrail4-300x250|300x600": ["18"],
                                                    "D-BTF-pos_top-728x90": ["19"],
                                                    "M-ATF-pos_chmodule-300x250": ["20"],
                                                    "M-BTF-pos_chmodule-300x250": ["21"],
                                                    "M-BTF-pos_leader1-300x250": ["22"],
                                                    "M-BTF-pos_mpu_top-300x250": ["23"],
                                                    "M-BTF-pos_null-300x250": ["24"],
                                                    "M-BTF-pos_rightrail1-300x250": ["25"],
                                                    "M-BTF-pos_rightrail1-300x250|300x600": ["26"],
                                                    "M-BTF-pos_rightrail2-300x250|300x600": ["27"],
                                                    "M-BTF-pos_top-728x90": ["28"]
                                                },
                                                host: "aarp-d.openx.net",
                                                timeout: 0,
                                                bidTransformer: {
                                                    outputCentsDivisor: 1,
                                                    outputPrecision: 0,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 500,
                                                        step: 1
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 1e4,
                                                        step: 50
                                                    }],
                                                    bidUnitInCents: .1
                                                }
                                            }
                                        },
                                        CriteoHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        zoneId: "1386050"
                                                    },
                                                    2: {
                                                        zoneId: "1386051"
                                                    },
                                                    3: {
                                                        zoneId: "1204725"
                                                    },
                                                    4: {
                                                        zoneId: "1204726"
                                                    },
                                                    5: {
                                                        zoneId: "1204727"
                                                    },
                                                    6: {
                                                        zoneId: "1386054"
                                                    },
                                                    7: {
                                                        zoneId: "1204728"
                                                    },
                                                    8: {
                                                        zoneId: "1386067"
                                                    },
                                                    9: {
                                                        zoneId: "1386055"
                                                    },
                                                    10: {
                                                        zoneId: "1386056"
                                                    },
                                                    11: {
                                                        zoneId: "1204729"
                                                    },
                                                    12: {
                                                        zoneId: "1204730"
                                                    },
                                                    13: {
                                                        zoneId: "1204731"
                                                    },
                                                    14: {
                                                        zoneId: "1386057"
                                                    },
                                                    15: {
                                                        zoneId: "1220045"
                                                    },
                                                    16: {
                                                        zoneId: "1220045"
                                                    },
                                                    17: {
                                                        zoneId: "1386068"
                                                    },
                                                    18: {
                                                        zoneId: "1204732"
                                                    },
                                                    19: {
                                                        zoneId: "1204733"
                                                    },
                                                    20: {
                                                        zoneId: "1204734"
                                                    },
                                                    21: {
                                                        zoneId: "1386058"
                                                    },
                                                    22: {
                                                        zoneId: "1204735"
                                                    },
                                                    23: {
                                                        zoneId: "1204737"
                                                    },
                                                    24: {
                                                        zoneId: "1386059"
                                                    },
                                                    25: {
                                                        zoneId: "1220046"
                                                    },
                                                    26: {
                                                        zoneId: "1204738"
                                                    },
                                                    27: {
                                                        zoneId: "1386069"
                                                    },
                                                    28: {
                                                        zoneId: "1204739"
                                                    },
                                                    29: {
                                                        zoneId: "1220047"
                                                    },
                                                    30: {
                                                        zoneId: "1386060"
                                                    },
                                                    31: {
                                                        zoneId: "1220048"
                                                    },
                                                    32: {
                                                        zoneId: "1220049"
                                                    },
                                                    33: {
                                                        zoneId: "1386061"
                                                    },
                                                    34: {
                                                        zoneId: "1204741"
                                                    },
                                                    35: {
                                                        zoneId: "1204742"
                                                    },
                                                    36: {
                                                        zoneId: "1386063"
                                                    },
                                                    37: {
                                                        zoneId: "1220050"
                                                    },
                                                    38: {
                                                        zoneId: "1386066"
                                                    },
                                                    39: {
                                                        zoneId: "1386065"
                                                    },
                                                    40: {
                                                        zoneId: "1386064"
                                                    }
                                                },
                                                mapping: {
                                                    "D-ATF-pos_chmodule-300x250": ["1"],
                                                    "D-ATF-pos_chmodule-728x90": ["2"],
                                                    "D-ATF-pos_hpleader-728x90": ["3"],
                                                    "D-ATF-pos_leader1-728x90": ["4"],
                                                    "D-ATF-pos_quiz-300x250|300x600": ["5"],
                                                    "D-ATF-pos_rightrail1-300x250|300x600": ["6", "7"],
                                                    "D-ATF-pos_rightrail1-728x90": ["8"],
                                                    "D-ATF-pos_topic-300x250|300x600": ["9"],
                                                    "D-BTF-pos_billboard-728x90|970x250": ["10"],
                                                    "D-BTF-pos_leader1-728x90": ["11"],
                                                    "D-BTF-pos_leader2-728x90": ["12"],
                                                    "D-BTF-pos_leader3-728x90": ["13"],
                                                    "D-BTF-pos_mpu_top-300x250": ["14"],
                                                    "D-BTF-pos_null-300x250|300x600": ["15"],
                                                    "D-BTF-pos_null-300x600": ["16"],
                                                    "D-BTF-pos_null-728x90": ["17"],
                                                    "D-BTF-pos_rightrail1-300x250|300x600": ["18"],
                                                    "D-BTF-pos_rightrail1-300x250|300x600|728x90": ["19"],
                                                    "D-BTF-pos_rightrail2-300x250|300x600": ["20"],
                                                    "D-BTF-pos_rightrail2-300x600": ["21"],
                                                    "D-BTF-pos_rightrail3-300x250": ["22"],
                                                    "D-BTF-pos_rightrail4-300x250|300x600": ["23"],
                                                    "D-BTF-pos_rightrail4-300x600": ["24"],
                                                    "D-BTF-pos_top-728x90": ["25"],
                                                    "M-ATF-pos_chmodule-300x250": ["26"],
                                                    "M-ATF-pos_topic-300x250": ["27"],
                                                    "M-BTF-pos_chmodule-300x250": ["28"],
                                                    "M-BTF-pos_leader1-300x250": ["29"],
                                                    "M-BTF-pos_leader2-300x250": ["30"],
                                                    "M-BTF-pos_mpu_top-300x250": ["31"],
                                                    "M-BTF-pos_null-300x250": ["32"],
                                                    "M-BTF-pos_quiz-300x250": ["33"],
                                                    "M-BTF-pos_rightrail1-300x250|300x600": ["34"],
                                                    "M-BTF-pos_rightrail2-300x250|300x600": ["35"],
                                                    "M-BTF-pos_rightrail3-300x250": ["36"],
                                                    "M-BTF-pos_top-728x90": ["37"],
                                                    "D-ATF-pos_topleader-728x90": ["38"],
                                                    "D-BTF-pos_botleader-728x90": ["39"],
                                                    "M-ATF-pos_topleader-728x90": ["40"]
                                                },
                                                timeout: 0,
                                                bidTransformer: {
                                                    outputCentsDivisor: 1,
                                                    outputPrecision: 0,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 500,
                                                        step: 1
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 1e4,
                                                        step: 50
                                                    }],
                                                    bidUnitInCents: 100
                                                }
                                            }
                                        },
                                        RubiconHtb: {
                                            enabled: !1,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        siteId: "193904",
                                                        zoneId: "944798",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    2: {
                                                        siteId: "193904",
                                                        zoneId: "944798",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    3: {
                                                        siteId: "193904",
                                                        zoneId: "944798",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    4: {
                                                        siteId: "193904",
                                                        zoneId: "944798",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    5: {
                                                        siteId: "193904",
                                                        zoneId: "944798",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    6: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    7: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    8: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    9: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    10: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    11: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    12: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [300, 600]
                                                        ]
                                                    },
                                                    13: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    14: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600],
                                                            [728, 90]
                                                        ]
                                                    },
                                                    15: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    16: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    17: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    18: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    19: {
                                                        siteId: "193904",
                                                        zoneId: "944800",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    20: {
                                                        siteId: "193904",
                                                        zoneId: "944802",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    21: {
                                                        siteId: "193904",
                                                        zoneId: "944804",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    22: {
                                                        siteId: "193904",
                                                        zoneId: "944804",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    23: {
                                                        siteId: "193904",
                                                        zoneId: "944804",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    24: {
                                                        siteId: "193904",
                                                        zoneId: "944804",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    25: {
                                                        siteId: "193904",
                                                        zoneId: "944804",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    26: {
                                                        siteId: "193904",
                                                        zoneId: "944804",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    27: {
                                                        siteId: "193904",
                                                        zoneId: "944804",
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    28: {
                                                        siteId: "193904",
                                                        zoneId: "944804",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    }
                                                },
                                                mapping: {
                                                    "D-ATF-pos_chmodule-300x250": ["1"],
                                                    "D-ATF-pos_hpleader-728x90": ["2"],
                                                    "D-ATF-pos_leader1-728x90": ["3"],
                                                    "D-ATF-pos_quiz-300x250|300x600": ["4"],
                                                    "D-ATF-pos_rightrail1-300x250|300x600": ["5"],
                                                    "D-BTF-pos_leader1-728x90": ["6"],
                                                    "D-BTF-pos_leader2-728x90": ["7"],
                                                    "D-BTF-pos_leader3-728x90": ["8"],
                                                    "D-BTF-pos_mpu_top-300x250": ["9"],
                                                    "D-BTF-pos_null-300x250": ["10"],
                                                    "D-BTF-pos_null-300x250|300x600": ["11"],
                                                    "D-BTF-pos_null-300x600": ["12"],
                                                    "D-BTF-pos_rightrail1-300x250|300x600": ["13"],
                                                    "D-BTF-pos_rightrail1-300x250|300x600|728x90": ["14"],
                                                    "D-BTF-pos_rightrail2-300x250": ["15"],
                                                    "D-BTF-pos_rightrail2-300x250|300x600": ["16"],
                                                    "D-BTF-pos_rightrail3-300x250": ["17"],
                                                    "D-BTF-pos_rightrail4-300x250|300x600": ["18"],
                                                    "D-BTF-pos_top-728x90": ["19"],
                                                    "M-ATF-pos_chmodule-300x250": ["20"],
                                                    "M-BTF-pos_chmodule-300x250": ["21"],
                                                    "M-BTF-pos_leader1-300x250": ["22"],
                                                    "M-BTF-pos_mpu_top-300x250": ["23"],
                                                    "M-BTF-pos_null-300x250": ["24"],
                                                    "M-BTF-pos_rightrail1-300x250": ["25"],
                                                    "M-BTF-pos_rightrail1-300x250|300x600": ["26"],
                                                    "M-BTF-pos_rightrail2-300x250|300x600": ["27"],
                                                    "M-BTF-pos_top-728x90": ["28"]
                                                },
                                                accountId: "13236",
                                                timeout: 0,
                                                lineItemType: "CUSTOM",
                                                bidTransformer: {
                                                    outputCentsDivisor: 1,
                                                    outputPrecision: 0,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 500,
                                                        step: 1
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 1e4,
                                                        step: 50
                                                    }],
                                                    bidUnitInCents: 100
                                                }
                                            }
                                        },
                                        BRealTimeHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        placementId: 13974115,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    2: {
                                                        placementId: 13974117,
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    3: {
                                                        placementId: 13974118,
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    4: {
                                                        placementId: 13974119,
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    5: {
                                                        placementId: 13974120,
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    6: {
                                                        placementId: 13974121,
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    7: {
                                                        placementId: 13974122,
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    8: {
                                                        placementId: 13974123,
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    9: {
                                                        placementId: 13974124,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    10: {
                                                        placementId: 13974125,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    11: {
                                                        placementId: 13974232,
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    12: {
                                                        placementId: 13974127,
                                                        sizes: [
                                                            [300, 600]
                                                        ]
                                                    },
                                                    13: {
                                                        placementId: 13974128,
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    14: {
                                                        placementId: 13974233,
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600],
                                                            [728, 90]
                                                        ]
                                                    },
                                                    15: {
                                                        placementId: 13974130,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    16: {
                                                        placementId: 13974234,
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    17: {
                                                        placementId: 13974132,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    18: {
                                                        placementId: 13974133,
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    19: {
                                                        placementId: 13974134,
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    20: {
                                                        placementId: 13974135,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    21: {
                                                        placementId: 13974137,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    22: {
                                                        placementId: 13974138,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    23: {
                                                        placementId: 13974139,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    24: {
                                                        placementId: 13974140,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    25: {
                                                        placementId: 13974141,
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    26: {
                                                        placementId: 13974236,
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    27: {
                                                        placementId: 13974143,
                                                        sizes: [
                                                            [300, 250],
                                                            [300, 600]
                                                        ]
                                                    },
                                                    28: {
                                                        placementId: 13974144,
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    }
                                                },
                                                mapping: {
                                                    "D-ATF-pos_chmodule-300x250": ["1"],
                                                    "D-ATF-pos_hpleader-728x90": ["2"],
                                                    "D-ATF-pos_leader1-728x90": ["3"],
                                                    "D-ATF-pos_quiz-300x250|300x600": ["4"],
                                                    "D-ATF-pos_rightrail1-300x250|300x600": ["5"],
                                                    "D-BTF-pos_leader1-728x90": ["6"],
                                                    "D-BTF-pos_leader2-728x90": ["7"],
                                                    "D-BTF-pos_leader3-728x90": ["8"],
                                                    "D-BTF-pos_mpu_top-300x250": ["9"],
                                                    "D-BTF-pos_null-300x250": ["10"],
                                                    "D-BTF-pos_null-300x250|300x600": ["11"],
                                                    "D-BTF-pos_null-300x600": ["12"],
                                                    "D-BTF-pos_rightrail1-300x250|300x600": ["13"],
                                                    "D-BTF-pos_rightrail1-300x250|300x600|728x90": ["14"],
                                                    "D-BTF-pos_rightrail2-300x250": ["15"],
                                                    "D-BTF-pos_rightrail2-300x250|300x600": ["16"],
                                                    "D-BTF-pos_rightrail3-300x250": ["17"],
                                                    "D-BTF-pos_rightrail4-300x250|300x600": ["18"],
                                                    "D-BTF-pos_top-728x90": ["19"],
                                                    "M-ATF-pos_chmodule-300x250": ["20"],
                                                    "M-BTF-pos_chmodule-300x250": ["21"],
                                                    "M-BTF-pos_leader1-300x250": ["22"],
                                                    "M-BTF-pos_mpu_top-300x250": ["23"],
                                                    "M-BTF-pos_null-300x250": ["24"],
                                                    "M-BTF-pos_rightrail1-300x250": ["25"],
                                                    "M-BTF-pos_rightrail1-300x250|300x600": ["26"],
                                                    "M-BTF-pos_rightrail2-300x250|300x600": ["27"],
                                                    "M-BTF-pos_top-728x90": ["28"]
                                                },
                                                timeout: 0,
                                                bidTransformer: {
                                                    outputCentsDivisor: 1,
                                                    outputPrecision: 0,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 500,
                                                        step: 1
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 1e4,
                                                        step: 50
                                                    }],
                                                    bidUnitInCents: 100
                                                }
                                            }
                                        }
                                    },
                                    prefetchOnLoad: {
                                        enabled: !1,
                                        configs: {
                                            dynamic: {
                                                slotMapping: {
                                                    selectors: [
                                                        ["size", "targeting"]
                                                    ],
                                                    filters: ["deviceType"],
                                                    style: "ALL"
                                                }
                                            }
                                        }
                                    }
                                }
                            }]
                        }, window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], I = a(b).getDirectInterface(), i = o.services.ComplianceService, n = o.services.EventsService;
                        var v = b.Layers[0].configs.override;
                        if (v) {
                            var m = function() {
                                v.display && (o.LastLineGoogletag.display = window.googletag.display, window.googletag.display = i.delay(l)), v.refresh && (o.LastLineGoogletag.refresh = window.googletag.pubads().refresh.bind(window.googletag.pubads()), window.googletag.pubads().refresh = i.delay(p)), v.destroySlots && (o.LastLineGoogletag.destroySlots = window.googletag.destroySlots, window.googletag.destroySlots = i.delay(f)), v.enableSingleRequest && (o.LastLineGoogletag.enableSingleRequest = window.googletag.pubads().enableSingleRequest.bind(window.googletag.pubads()), window.googletag.pubads().enableSingleRequest = g), v.disableInitialLoad && (o.LastLineGoogletag.disableInitialLoad = window.googletag.pubads().disableInitialLoad.bind(window.googletag.pubads()), window.googletag.pubads().disableInitialLoad = h)
                            };
                            o.initQueue.unshift(m);
                            var y = function() {
                                o.initQueue = s(o.initQueue)
                            };
                            d.isArray(window.googletag.cmd) ? window.googletag.cmd.unshift(y) : window.googletag.cmd.push(y)
                        }
                        T = {
                            refresh: i.delay(p),
                            enableSingleRequest: g,
                            disableInitialLoad: h
                        };
                        try {
                            I.Layers.IdentityLayer.retrieve()
                        } catch (e) {}
                        try {
                            i.wait().then(function() {
                                return I.Layers.IdentityLayer.getResult()
                            }).then(function(e) {
                                I.Layers.PartnersLayer.prefetchOnLoad(e)
                            }).catch(function(e) {
                                I.Layers.PartnersLayer.prefetchOnLoad()
                            })
                        } catch (e) {}
                    } catch (i) {
                        x = {
                            display: e,
                            destroySlots: r,
                            pubads: function() {
                                return {
                                    refresh: t,
                                    enableSingleRequest: u,
                                    disableInitialLoad: c
                                }
                            },
                            setFirstPartyData: function() {},
                            subscribeEvent: function() {
                                return ""
                            },
                            unsubscribeEvent: function() {}
                        }
                    }
                }(), x) return x;
            var S = {};
            if (window[o.NAMESPACE])
                for (var D in window[o.NAMESPACE]) window[o.NAMESPACE].hasOwnProperty(D) && (S[D] = window[o.NAMESPACE][D]);
            S.display = i.delay(l), S.refresh = i.delay(p), S.destroySlots = i.delay(f), S.enableSingleRequest = g, S.disableInitialLoad = h, S.pubads = v, S.setFirstPartyData = m, S.subscribeEvent = y, S.unsubscribeEvent = _, S.apiReady = !0;
            try {
                S.IndexExchangeHtb = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "IndexExchangeHtb")
                }, S.IxModule = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "IndexExchangeHtb")
                }, window.headertag_render = o.services.RenderService.renderIndexLegacyAd.bind(null, "IndexExchangeHtb"), I.Layers.PartnersLayer.Partners.IndexExchangeHtb && (S.IndexExchangeHtb = S.IndexExchangeHtb || {}, S.IndexExchangeHtb.adResponseCallback = I.Layers.PartnersLayer.Partners.IndexExchangeHtb.adResponseCallback)
            } catch (e) {}
            try {
                S.OpenXHtb = {
                    adResponseCallbacks: {},
                    version: "2.1.2"
                }, S.OpenXHtb.render = o.services.RenderService.renderDfpAd.bind(null, "OpenXHtb"), S.OpenXModule = {
                    render: S.OpenXHtb.render
                }, I.Layers.PartnersLayer.Partners.OpenXHtb && (S.OpenXHtb = S.OpenXHtb || {}, S.OpenXHtb.adResponseCallbacks = I.Layers.PartnersLayer.Partners.OpenXHtb.adResponseCallbacks, S.OpenXHtb.version = I.Layers.PartnersLayer.Partners.OpenXHtb.version)
            } catch (e) {}
            try {
                S.CriteoHtb = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "CriteoHtb")
                }, S.CriteoModule = {
                    render: S.CriteoHtb.render
                }
            } catch (e) {}
            try {
                S.RubiconHtb = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "RubiconHtb")
                }, window.top.rubicontag = window.top.rubicontag || {}, window.top.rubicontag.renderCreative = o.services.RenderService.renderRubiconAd.bind(null, "RubiconHtb")
            } catch (e) {}
            try {
                S.BRealTimeHtb = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "BRealTimeHtb")
                }
            } catch (e) {}
            return S
        }(), window[o.NAMESPACE].cmd = s(u)
    }, {}],
    48: [function(e, t, r) {
        "use strict";
        var i = {
            NAMESPACE: "headertag",
            PRODUCT: "DfpMode",
            services: {},
            htSlots: [],
            htSlotsMap: {},
            DeviceTypeChecker: {},
            initQueue: [],
            globalTimeout: null,
            instanceId: null,
            version: "2.9.9"
        };
        t.exports = i
    }, {}]
}, {}, [47]);