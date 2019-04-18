/*@ 2019 PayPal (v1.3.11) */ ! function() {
    "use strict";

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function y(t, e, n) {
        var r;
        if ((n = n || {}).expires) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * n.expires * 60 * 60 * 1e3), r = "; expires=" + i.toGMTString()
        } else r = "";
        document.cookie = t + "=" + e + r + "; path=/"
    }

    function k(t) {
        for (var e = document.cookie.split(";"), n = 0; n < e.length; n++) {
            for (var r = e[n];
                " " === r.charAt(0);) r = r.substring(1, r.length);
            if (0 === r.indexOf(t + "=")) return r.substring((t + "=").length, r.length)
        }
        return null
    }
    var b = 1,
        E = 0;

    function a() {
        return (new Date).getTime()
    }

    function o(t, e) {
        for (var n in e) n && "undefined" != typeof e[n] && "" !== e[n] && (t = c(t, n, e[n]));
        return t
    }

    function c(t, e, n) {
        if (e && (n || 0 === n)) {
            if ("object" === s(n)) try {
                n = JSON.stringify(n)
            } catch (r) {}
            t += "&" + e + "=" + encodeURIComponent(n)
        }
        return t
    }

    function P(t) {
        var e = -1;
        return void 0 !== t && (e = t === parseInt(t, 10) ? t : 0 < t && t < 1 ? parseFloat(t.toFixed(1)) : parseFloat(t.toFixed(0))), e
    }

    function r(t) {
        return Number(t) === t && 0 <= t
    }

    function v(t, e) {
        var n = 0;
        return r(e) && r(t) && e <= t && (12e4 < (n = t - e) && (n = 0), n = P(n)), n
    }
    window.PAYPAL = window.PAYPAL || {}, window.fpti = window.fpti || {}, window.fptiserverurl = window.fptiserverurl || "https://t.paypal.com/ts";
    var e = function e() {},
        t = function t() {
            return {}
        };
    "undefined" == typeof JSON && (JSON = {}, JSON.stringify = e, JSON.parse = t, window.JSON = JSON);
    var _ = "performance" in window && window.performance || {},
        u = function u() {
            return !(!_ || "function" != typeof _.getEntries)
        };
    if (_ && !_.now) {
        var n = _.timing;
        _.now = function() {
            var t = a() - (n && n.navigationStart || 0);
            return 0 < t ? t : 0
        }
    }
    String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
        if (null == this) throw new TypeError("Array.indexOf() - can't convert \"" + this + '" to object');
        var n = isFinite(e) ? Math.floor(e) : 0,
            r = this instanceof Object ? this : new Object(this),
            i = isFinite(r.length) ? Math.floor(r.length) : 0;
        if (i <= n) return -1;
        if (n < 0 && (n = Math.max(i + n, 0)), t === undefined) {
            do {
                if (n in r && r[n] === undefined) return n
            } while (++n < i)
        } else
            do {
                if (r[n] === t) return n
            } while (++n < i);
        return -1
    }), Array.prototype.forEach || (Array.prototype.forEach = function(t) {
        var e;
        if (null == this) throw new TypeError("this is null or not defined");
        var n = Object(this),
            r = n.length >>> 0;
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        1 < arguments.length && (e = arguments[1]);
        for (var i = 0; i < r;) {
            if (i in n) {
                var o = n[i];
                t.call(e, o, i, n)
            }
            i++
        }
    }), window.document.querySelectorAll || (document.querySelectorAll = function(t, e, n, r, i) {
        var o = document,
            a = o.createStyleSheet();
        for (i = o.all, e = [], n = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; n--;) {
            for (a.addRule(t[n], "k:v"), r = i.length; r--;) i[r].currentStyle.k && e.push(i[r]);
            a.removeRule(0)
        }
        return e
    });
    var l = {},
        f = {},
        i = -1;

    function p(t) {
        for (var e in t)
            if (t.hasOwnProperty(e)) return !0;
        return !1
    }

    function d(t, e, n) {
        try {
            t(e, n)
        } catch (r) {
            setTimeout(function A(e) {
                return function() {
                    throw e
                }
            }(r), 0)
        }
    }

    function g(t, e, n) {
        t(e, n)
    }

    function m(t, e, n, r) {
        var i = f[e],
            o = r ? g : d;
        if (f.hasOwnProperty(e))
            for (var a in i) i.hasOwnProperty(a) && o(i[a], t, n)
    }

    function h(t, e, n, r) {
        var i = function o(n, r, i) {
            return function() {
                var t = String(n),
                    e = t.lastIndexOf(".");
                for (m(n, n, r, i); - 1 !== e;) e = (t = t.substr(0, e)).lastIndexOf("."), m(n, t, r, i)
            }
        }(t, e, r);
        return !! function a(t) {
            for (var e = String(t), n = Boolean(f.hasOwnProperty(e) && p(f[e])), r = e.lastIndexOf("."); !n && -1 !== r;) r = (e = e.substr(0, r)).lastIndexOf("."), n = Boolean(f.hasOwnProperty(e) && p(f[e]));
            return n
        }(t) && (!0 === n ? i() : setTimeout(i, 0), !0)
    }
    l.publish = function(t, e) {
        return h(t, e, !1, l.immediateExceptions)
    }, l.publishSync = function(t, e) {
        return h(t, e, !0, l.immediateExceptions)
    }, l.subscribe = function(t, e) {
        if ("function" != typeof e) return !1;
        f.hasOwnProperty(t) || (f[t] = {});
        var n = "uid_" + String(++i);
        return f[t][n] = e, n
    }, l.subscribeOnce = function(t, e) {
        var n = l.subscribe(t, function() {
            l.unsubscribe(n), e.apply(this, arguments)
        });
        return l
    }, l.clearAllSubscriptions = function() {
        f = {}
    }, l.clearSubscriptions = function(t) {
        for (var e in f) f.hasOwnProperty(e) && 0 === e.indexOf(t) && delete f[e]
    }, l.unsubscribe = function(t) {
        var e, n, r, i = function i(t) {
                var e;
                for (e in f)
                    if (f.hasOwnProperty(e) && 0 === e.indexOf(t)) return !0;
                return !1
            },
            o = "string" == typeof t && (f.hasOwnProperty(t) || i(t)),
            a = !o && "string" == typeof t,
            c = "function" == typeof t,
            s = !1;
        if (!o) {
            for (e in f)
                if (f.hasOwnProperty(e)) {
                    if (n = f[e], a && n[t]) {
                        delete n[t], s = t;
                        break
                    }
                    if (c)
                        for (r in n) n.hasOwnProperty(r) && n[r] === t && (delete n[r], s = !0)
                } return s
        }
        l.clearSubscriptions(t)
    };
    var w = {
        click: {
            elements: "*[data-pa-click]",
            onClick: e,
            request: {
                keys: {
                    linkUrl: "lu"
                },
                values: {
                    eventType: "cl"
                }
            }
        },
        formAbandonment: {
            elements: "form",
            request: {
                keys: {
                    lastFormFocused: "lf",
                    lastInputFocused: "li"
                },
                values: {
                    eventType: "fa"
                }
            }
        },
        impression: {
            request: {
                keys: {
                    cookiesEnabled: "ce",
                    plugins: "pl",
                    pageTitle: "pt",
                    referrer: "ru",
                    screenColorDepth: "cd",
                    screenWidth: "sw",
                    screenHeight: "sh",
                    deviceWidth: "dw",
                    deviceHeight: "dh",
                    browserWidth: "bw",
                    browserHeight: "bh"
                },
                values: {
                    eventType: "im"
                }
            }
        },
        error: {
            values: {
                eventType: "err"
            }
        },
        request: {
            data: {},
            unloadDelay: !1,
            keys: {
                version: "v",
                timestamp: "t",
                gmtOffset: "g",
                eventType: "e"
            },
            values: {
                eventType: "na"
            },
            url: window.fptiserverurl,
            onBeaconCreate: e
        }
    };

    function A(t) {
        var e = navigator.mimeTypes;
        if (e && e.length) {
            var n = e[t];
            return n && n.enabledPlugin
        }
    }

    function C() {
        var t = [],
            e = {
                director: "application/x-director",
                mediaplayer: "application/x-mplayer2",
                pdf: "application/pdf",
                quicktime: "video/quicktime",
                real: "audio/x-pn-realaudio-plugin",
                silverlight: "application/x-silverlight"
            };
        for (var n in e) A(e[n]) && t.push(n);
        var r = function i() {
            var t = null;
            if (navigator.plugins && 0 < navigator.plugins.length) {
                var e = "application/x-shockwave-flash",
                    n = navigator.mimeTypes;
                n && n[e] && n[e].enabledPlugin && n[e].enabledPlugin.description && (t = n[e].enabledPlugin.description)
            }
            return t
        }();
        return r && t.push(r), t.join(",")
    }
    var T = {
            IS_MARKED: "pa-marked",
            PA_CL: "data-pa-click",
            PA_EX: "data-pa-exit",
            PA_DL: "data-pa-download",
            ERR_TYPE: "WINDOW_ONERROR",
            REJECTION_ERR_TYPE: "PROMISE_ONERROR",
            MI_ERR: "MI_ERROR",
            MI_OPT_OUT: "T=0",
            MI_POLICY: "gdpr_eu",
            ERR_MSG: "Script error",
            IMP_PL: ["page", "comp"],
            E: {
                BEACON: "pa.beacon",
                INIT: "pa.init"
            },
            HOST_PP: "paypal.com",
            HOST_PPOBJ: "paypalobjects.com",
            URL_PPOBJ: "https://www.paypalobjects.com"
        },
        S = null;
    try {
        S = window.localStorage
    } catch (Gt) {
        S = null
    }

    function O(t) {
        if (!t || t.constructor !== Object && t.constructor !== Array) return t;
        var e = t.constructor();
        for (var n in t) e[n] = O(t[n]);
        return e
    }

    function I(t, e) {
        e = e || {};
        var n = O(t = t || {});
        for (var r in e) try {
            e[r].constructor === Object && n[r] && n[r].constructor === Object ? n[r] = I(n[r], e[r]) : n[r] = e[r]
        } catch (Gt) {
            n[r] = e[r]
        }
        return n
    }

    function L(t, e) {
        return t && t.data && "string" == typeof t.data && (t.data = x(t.data)), e && e.data && "string" == typeof e.data && (e.data = x(e.data)), I(t, e)
    }

    function x(t) {
        var e = {};
        if (!t || void 0 === t) return e;
        if ("object" === s(t)) return t;
        for (var n = t.split("&"), r = 0; r < n.length; r++) {
            var i = n[r].split("="),
                o = i.shift(),
                a = i.join("=");
            e[o] = decodeURIComponent(a)
        }
        return e
    }

    function R(t, e, n) {
        for (var r in void 0 === n && (n = !0), t = t || {}, e = e || {}) e[r] && (n || !n && !t[r]) && (t[r] = e[r]);
        return t
    }

    function q(t, e) {
        var n = [];
        if ((e = e || document).querySelectorAll) {
            var r = e.querySelectorAll(t);
            if ("object" !== s(r) && "function" != typeof r || "number" != typeof r.length) "object" === s(r) && (n = r);
            else
                for (var i = 0; i < r.length; i++) n.push(r[i])
        }
        return n
    }

    function D(t, e) {
        var n;
        return function() {
            return t && (n = t.apply(e || this, arguments), t = null), n
        }
    }

    function F(t) {
        t = D(t), "complete" === document.readyState ? t() : (j(window, "load", t), j(window, "DOMContentLoaded", function() {
            setTimeout(t, 3e3)
        }))
    }

    function j(t, e, n) {
        if (t.addEventListener) t.addEventListener(e, n, !1);
        else if (t.attachEvent) return t.attachEvent("on" + e, n)
    }

    function U(t, e, n) {
        if (e.removeEventListener) e.removeEventListener(t, n, !1);
        else if (e.detachEvent) return e.detachEvent("on" + t, n)
    }

    function N() {
        var t = !1,
            e = function n() {
                var t = null;
                try {
                    if (S) {
                        var e = "pa_feature_mod";
                        (!(t = +S.getItem(e)) || t < 0 || 100 < t) && (t = Math.floor(Math.random() * Math.floor(100)), S.setItem(e, t))
                    }
                } catch (Gt) {}
                return t
            }();
        return e && e < 2 && (t = !0), t
    }

    function M(t, e) {
        var n;
        return e && (n = t.getAttribute(e)), n || (n = t.getAttribute("id") || t.getAttribute("name") || t.getAttribute("data-name") || t.getAttribute("class") || t.getAttribute("href") || t.getAttribute("alt") || function i(t) {
            for (var e = t.childNodes, n = null, r = 0; r < e.length; r++) {
                if (3 === (n = e[r]).nodeType && n.nodeValue && n.nodeValue.match(/\S/)) return n.nodeValue.trim();
                if (1 === n.nodeType && n.childNodes.length) return i(n)
            }
        }(t)), n
    }

    function B(t, e) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function J(t, e) {
        var n = "";
        if ("string" == typeof t && "string" == typeof e) {
            t = t.split(",");
            for (var r = 0; r < t.length; r++) r !== t.length - 1 ? n += e.trim() + " " + t[r].trim() + ", " : n += e.trim() + " " + t[r].trim()
        } else n = t;
        return n
    }

    function Y(t) {
        var e = (t = "string" == typeof t ? t : "").length,
            n = /&res=(%7B.*%7D)/i,
            r = t.match(n);
        return 6e3 < e && (t = c(t, "plsize", 1), r && (t = t.replace(n, ""))), t
    }

    function H(t, e) {
        if (t) {
            var n = document.createElement("script");
            if (n.setAttribute("crossorigin", "anonymous"), n.setAttribute("src", t), e) {
                var r = !1;
                n.onreadystatechange = n.onload = function() {
                    r || e(), r = !0
                }
            }
            F(function() {
                document.body.appendChild(n)
            })
        }
    }

    function V(t, e) {
        var n = !1,
            r = e || window.location && window.location.hostname || "",
            i = /paypal.(com|me)$/;
        return t && (i = /paypal.com$/), -1 === r.indexOf("localhost") && i.test(r) && (n = !0), n
    }

    function W() {
        return decodeURIComponent(k("enforce_policy") || K(window, "fpti.ef_policy")) === T.MI_POLICY
    }

    function G() {
        return decodeURIComponent(k("cookie_prefs") || K(window, "fpti.c_prefs")) === T.MI_OPT_OUT
    }

    function K(t, e, n) {
        try {
            return e.replace("[", ".").replace("]", "").split(".").reduce(function(t, e) {
                return t && t[e] ? t[e] : n
            }, t)
        } catch (r) {
            return n
        }
    }

    function z() {
        var t = {},
            e = decodeURIComponent(k("ts"));
        if (e)
            for (var n = e.split("&"), r = 0; r < n.length; r++) {
                var i = n[r].split("=");
                i[0] && i[1] && (t[i[0]] = i[1])
            }
        return t
    }
    var $ = 0,
        X = !1,
        Q = !1,
        Z = 31e3,
        tt = 6e3,
        et = /^xmlhttprequest|fetch/i,
        nt = /^xmlhttprequest|fetch|iframe|script/i;

    function rt() {
        return _ && _.now && _.timing ? Math.round(_.now() + _.timing.navigationStart) : a()
    }

    function it(t) {
        var e = [];
        return _ && "function" == typeof _.getEntriesByType && (e = _.getEntriesByType(t)), e
    }

    function ot(t, e) {
        t = t || {};
        var n = {},
            r = (e = e || {}).data || {},
            i = _.now();
        if (_) {
            var o = it("navigation")[0],
                a = it("paint"),
                c = a[a.length - 1],
                s = 0,
                u = {},
                l = _.timing;
            if (l && !X) {
                var f = l.secureConnectionStart || l.connectEnd,
                    p = l.loadEventEnd || l.loadEventStart || l.domComplete || l.domInteractive || Date.now();
                n.t1 = v(l.requestStart, l.fetchStart), n.t1c = v(l.connectEnd, l.fetchStart), n.t1d = v(l.domainLookupEnd, l.domainLookupStart), n.t1s = v(l.connectEnd, f), n.t2 = v(l.responseStart, l.requestStart), n.t3 = v(l.responseEnd, l.responseStart), n.t4d = v(l.domComplete, l.domLoading), n.t4 = v(p, l.domLoading), n.t4e = v(p, l.loadEventStart), n.tt = v(p, l.navigationStart), s = v(l.requestStart, l.navigationStart), o && (n.rdc = o.redirectCount || 0, u.type = o.type), l.msFirstPaint ? u.tcp = v(l.msFirstPaint, l.navigationStart) : c ? u.tcp = P(c.startTime) : o && (u.tcp = P(o.domInteractive))
            }
            if (!t.view) {
                var d = {
                        t10: s
                    },
                    g = r.view && r.view._t11s;
                Q ? g && (d.t11 = P(i - g)) : (d.t11 = P(i), Q = !0), 6e4 < d.t11 && (d.t11 = n.tt || 0), u.tcp && (d.tcp = u.tcp), u.type && (d.type = u.type), n.view = d, st(n, !0)
            }
        }
        return PAYPAL.analytics.perf = n
    }

    function at(t, e) {
        var n, r, i, o, a, c, s, u = _.getEntries(),
            l = !0;
        if (-1 != t.indexOf("://") && (l = !1), u)
            for (var f = u.length - 1; 0 < f; f--) {
                var p = u[f];
                if ((!e || e && p.initiatorType === e) && (l && -1 !== p.name.indexOf(t) || !l && p.name === t)) {
                    i = void 0, i = {}, o = (r = p).secureConnectionStart || r.connectEnd, a = r.loadEventEnd || r.loadEventStart || r.domComplete || r.domInteractive, c = r.domLoading || r.domInteractive || 0, s = r.responseStart || r.fetchStart, i.t1 = v(r.requestStart, r.fetchStart), i.t1d = v(r.domainLookupEnd, r.domainLookupStart), i.t1s = v(r.connectEnd, o), i.t2 = v(r.responseStart, r.requestStart), i.t3 = v(r.responseEnd, s), i.t4 = v(a, c), i.t4d = v(r.domComplete, c), i.t4e = v(a, r.loadEventStart), i.tt = P(r.duration), n = i;
                    break
                }
            }
        return n
    }

    function ct() {
        var t = _.getEntries(),
            e = 0 === $ ? t : t.slice($);
        $ = t.length;
        var n = N(),
            r = {
                rtt: function c() {
                    var t = at("/ts?", "img");
                    return t && t.tt || 0
                }(),
                view: {}
            },
            i = {
                scr: {
                    startTimes: [],
                    responseEnds: [],
                    t9: 0,
                    t12: 0,
                    t13: 0,
                    cnt: 0
                },
                xhr: []
            };
        for (var o in n && e.forEach(function(t) {
                var e = t.initiatorType,
                    n = t.name || "";
                "script" === e ? (i.scr.startTimes.push(t.startTime), i.scr.responseEnds.push(t.responseEnd), 0 < t.redirectStart && (i.scr.t13 += t.redirectEnd - t.redirectStart), t.duration > i.scr.t12 && (i.scr.t12 = t.duration), i.scr.cnt++) : "" !== e && !et.test(e) || -1 !== n.indexOf(T.HOST_PPOBJ) || i.xhr.push({
                    nm: function a(t) {
                        var e = document.createElement("a");
                        e.href = t;
                        var n = e.pathname.replace(/\/*$/, ""),
                            r = n.indexOf("&"); - 1 !== r && (n = n.substr(0, r));
                        var i = n.split("/"),
                            o = e.hostname;
                        return -1 === o.indexOf(T.HOST_PP) && -1 === o.indexOf(T.HOST_PPOBJ) ? i.join("").length ? o + "/./" + i.pop() : o : i.join("").length ? i.slice(-2).join("/") : "/"
                    }(t.name),
                    t4: P(t.connectStart),
                    t5: P(t.secureConnectionStart),
                    t6: P(t.connectEnd),
                    t7: P(t.domainLookupStart),
                    t8: P(t.domainLookupEnd),
                    t9: P(t.duration),
                    ta: P(t.fetchStart),
                    td: P(t.requestStart),
                    te: P(t.responseStart),
                    tf: P(t.responseEnd),
                    t10: P(t.startTime)
                })
            }), i.scr.t9 = Math.max.apply(null, i.scr.responseEnds) - Math.min.apply(null, i.scr.startTimes), i.scr.t9 = i.scr.t9 < 0 || null === i.scr.t9 && "object" === s(i.scr.t9) ? i.scr.t12 : i.scr.t9, i)
            if (delete i[o].startTimes, delete i[o].responseEnds, "xhr" !== o) {
                for (var a in i[o]) i[o][a] = P(i[o][a]);
                i[o].cnt || delete i[o]
            } else i[o].length || delete i[o];
        return r.res = i, r
    }

    function st(t, e) {
        var n, r = t.res;
        !u() || !e && r || (n = ct(), r = r ? L(r, n.res) : n.res, t.res = r),
            function i(t, e) {
                (e = e || {}).rtt && (t.rtt = e.rtt), 0 <= e.rdc && (t.rdc = e.rdc);
                var n = t.view = t.view || {};
                n.t10 = n.t10 || t.t1 || 0, n.t11 = n.t11 || 0, n.t11 < n.tcp && (n.t11 = P(n.t11 + n.tcp)), n.t10 > n.t11 && (n.t10 = 0), n.t10 > tt && (n.t10 = tt), n.t11 > Z && (n.t11 = Z);
                var r = e.view;
                r && (r.tcp && (n.tcp = r.tcp), r.type && (n.nt = r.type), r.dbs && (n.dbs = r.dbs), r.ebs && (n.ebs = r.ebs))
            }(t, n)
    }

    function ut(t) {
        t = t || 4;
        for (var e = [], n = "", r = !1, i = 0; i < t; i++) e.push(0), n += "1";
        return {
            push: function(t) {
                0 !== (t = +t) && 1 !== t && (t = 0), e.shift(), e.push(t)
            },
            skip: function() {
                r = !0
            },
            isTrue: function() {
                var t = e.join("");
                return r || (r = t === n), r
            }
        }
    }

    function lt(t) {
        var e, n, i = rt(),
            o = i,
            a = 0,
            s = 0,
            u = ut(),
            l = ut(),
            f = !1,
            r = 0,
            c = !0;

        function p() {
            return c = !1, clearInterval(e), clearInterval(n), f = !1, t()
        }

        function d() {
            var t = rt(),
                e = t - o;
            if (o = t, PAYPAL.analytics.isUnloading) p();
            else {
                for (1e4 < t - i && (u.skip(), l.skip(), f = !0); 105 < e;) a++, s++, e -= 50;
                a++, 55 < e && s++;
                var n = Math.round(s / a * 100);
                if (s = a = 0, u.push(n < 25), u.isTrue() && !f) {
                    var r = it("resource");
                    f = function c(t) {
                        var e = !0,
                            n = _ && _.timing;
                        if (n && (0 === (n.loadEventEnd || n.loadEventStart || n.domComplete || n.domInteractive) && (e = !1), t))
                            for (var r = 0; r < t.length; r++) {
                                var i = t[r];
                                if (nt.test(i.initiatorType) && 0 === i.responseEnd) {
                                    e = !1;
                                    break
                                }
                            }
                        if (e && 0 < q("[type=submit][disabled]").length && (e = !1), !e) {
                            var o = document.activeElement,
                                a = o && o.tagName || "body";
                            a = a.toLowerCase(), -1 === ["body", "a"].indexOf(a) && (e = !0)
                        }
                        return e
                    }(r)
                }
                f && u.isTrue() && l.isTrue() && p()
            }
        }
        window.requestAnimationFrame ? (window.requestAnimationFrame(function g() {
            r++, c && window.requestAnimationFrame(g)
        }), n = setInterval(function() {
            var t = 10 * r;
            l.push(30 <= t), r = 0
        }, 100)) : l.skip(), setTimeout(function() {
            e = setInterval(d, 50)
        }, 25)
    }
    l.subscribe(T.E.BEACON, function(t, e) {
        "im" === (e && e.values && e.values.eventType) && (X = !0)
    });
    var ft = T.URL_PPOBJ,
        pt = H,
        dt = 1e4;

    function gt(t, e) {
        if ("ga" === t) ! function n(e) {
            e = D(e);
            var t = ft + "/gajs/analytics.js";
            if (window.ga) return void e();
            pt(t, function() {
                window.ga = window.ga || function() {
                    (t.q = t.q || []).push(arguments)
                };
                var t = window.ga;
                t.l = +new Date, t("create", "UA-53389718-12", "auto", "PayPal", {
                    allowLinker: !0
                }), t("PayPal.require", "linker"), window.location && window.location.hostname.match(/paypal.me/) ? t("PayPal.linker:autoLink", ["paypal.com"]) : t("PayPal.linker:autoLink", ["paypal.me"]), W() && (t("set", "anonymizeIp", !0), G() && t("set", "allowAdFeatures", !1)), e()
            }), setTimeout(e, dt)
        }(e);
        else if ("gtag" === t) ! function r(e) {
            e = D(e), pt(ft + "/gajs/gtag.js", function() {
                function t() {
                    window.gDataLayer.push(arguments)
                }
                window.gDataLayer = window.gDataLayer || [], t("js", new Date), t("config", "DC-6386697"), window.gtag = window.gtag || t, e()
            }), setTimeout(e, dt)
        }(e);
        else {
            (0, PAYPAL.analytics.logJSError)("Cannot load js", t, T.MI_ERR), (e = D(e))()
        }
    }
    var vt = {};

    function mt() {
        V() && H(T.URL_PPOBJ + "/pa/mi/miconfig.js", function() {
            vt = window.miconfig;
            var n = window.fpti && window.fpti.comp;
            n && vt && ! function i(t, e) {
                var n = vt.loadJs && vt.loadJs(t) || [];
                n.push("ga");
                var r = n.length;
                n.forEach(function(t) {
                    gt(t, function() {
                        0 === (r -= 1) && e()
                    })
                })
            }(n, function() {
                var t = vt.loadTags(n);
                t && (vt.fireState = vt.fireState || {}, function e(t) {
                    var o = K(window, "miconfig.fireState", {});
                    t.forEach(function(t) {
                        o[t] = t in o && o[t];
                        var e = vt.loadTagConfig && vt.loadTagConfig(t) || {};
                        if (function r(t) {
                                return ht(t)
                            }(e)) {
                            var i = [],
                                n = e.vendors ? e.vendors : [];
                            n.forEach(function(t) {
                                var e = vt.loadVendorDefault && vt.loadVendorDefault(t.name) || {},
                                    n = I(e, t);
                                (function r(t) {
                                    if (function e(t) {
                                            if (t && t.hasOwnProperty("enforce_gdpr") && !t.enforce_gdpr) return !1;
                                            if (W() && G()) return !0;
                                            return !1
                                        }(t)) return !1;
                                    return ht(t)
                                })(n) && i.push(n)
                            }), i.length && function c(o) {
                                var t = PAYPAL.analytics.logJSError,
                                    e = o.trigger.type;
                                o.trigger.hasOwnProperty("once") || (o.trigger.once = !0);
                                if ("fn" === e) {
                                    var n = o.trigger.name;
                                    Ot(n) ? Ot(n)(o) : t("Invalid trigger function", o.trigger, T.MI_ERR)
                                } else if (e === T.E.BEACON) {
                                    var a = o.trigger.condition;
                                    l.subscribe(e, function(t, e) {
                                        if (e && e.data && e.values) {
                                            var n = e.data;
                                            for (var r in n.e = e.values.eventType, o.options = e, a)
                                                if (a[r]) {
                                                    var i = new RegExp(a[r]);
                                                    if (!i.test(n[r])) return
                                                } wt(o)
                                        }
                                    })
                                } else t("Invalid trigger type", o.trigger, T.MI_ERR)
                            }({
                                id: t,
                                trigger: e.trigger,
                                vendors: i
                            })
                        }
                    })
                }(t))
            })
        })
    }

    function ht(t) {
        if (t && !t.hasOwnProperty("enable")) return !0;
        if (t && t.hasOwnProperty("enable")) {
            if ("boolean" == typeof t.enable) return t.enable;
            var e = t.enable,
                n = e.type,
                r = e.name,
                i = e.args,
                o = void 0 === i ? [] : i;
            if ("fn" === n && r) return !!Ot(r) && Ot(r).apply(null, o)
        }
        return !1
    }

    function wt(t) {
        var e = t.id,
            n = K(window, "miconfig.fireState");
        n && !n[e] && (function i(r) {
            var t = O(r.vendors);
            return t.forEach(function(t) {
                var e = t.vars;
                for (var n in e) e.hasOwnProperty(n) && (e[n] = kt(e[n], r.options))
            }), t
        }(t).forEach(function(t) {
            if ("google" === t.name && window.ga) window.ga("PayPal.send", t.vars);
            else if ("gtag" === t.name && window.gtag) window.gtag("event", t.action, t.vars);
            else {
                ! function n(t) {
                    var e = new Image(0, 0);
                    return e.src = t, e
                }(function a(t) {
                    var e = t.seperator || "&",
                        n = t.endpoint,
                        r = "".concat(n.scheme, "://").concat(n.host).concat(n.path),
                        i = t.vars || {},
                        o = Object.keys(i).map(function(t) {
                            if (i[t]) return t + "=" + i[t]
                        }).filter(Boolean).join(e);
                    return r + o
                }(t))
            }
        }), n[e] = t.trigger.once)
    }

    function yt(t) {
        return K(window, t)
    }

    function kt(t, e) {
        if (t) {
            if ("string" == typeof t) return t;
            var n = t.type;
            if ("fn" === n) {
                var r = t.name,
                    i = t.args,
                    o = void 0 === i ? [] : i;
                return Ot(r) ? Ot(r).apply(null, o) : ""
            }
            if ("var" === n) {
                var a = {
                        data: e ? e.data : {}
                    },
                    c = t.obj,
                    s = void 0 === c ? window : c,
                    u = t.path,
                    l = t.defaultVal;
                return "data" === s && (s = a[s]), K(s, u, void 0 === l ? "" : l)
            }
        }
    }

    function bt() {
        var t = yt("location.host") + yt("location.pathname");
        return t && -1 !== t.indexOf("&") && (t = t.substr(0, t.indexOf("&"))), t
    }

    function Et(t) {
        var e = document.querySelectorAll("button[type=submit], input[type=submit]");
        if (e = e && e[0]) {
            var n = function n() {
                wt(t), U(e, "click", n)
            };
            j(e, "click", n)
        } else var r = setTimeout(function() {
            clearTimeout(r), Et(t)
        }, 500)
    }

    function Pt(t, e, n) {
        var r = Ot(e),
            i = r && r();
        if (i && t) {
            if (t.constructor !== Object || t.constructor === Array) {
                if (t.constructor !== String) return null;
                var o = i.match(t);
                return o ? o[0] : null
            }
            for (var a in t) {
                var c = i.match(t[a]);
                if (c && c[0]) return n ? n[a] : c[0]
            }
        }
    }

    function _t() {
        var t = yt("fpti.ccpg") || yt("dataLayer.contentCountry");
        return t ? t.toLowerCase() : null
    }

    function At() {
        return 0 < K(window, "fpti.cust", "").length
    }

    function Ct() {
        var t = window.ga.getByName("PayPal");
        return t ? t.get("clientId") : ""
    }

    function Tt() {
        return z().vr || ""
    }

    function St() {
        return Tt()
    }

    function Ot(t) {
        return {
            constructUrl: bt,
            fetchFptiCookie: St,
            fetchGuid: Tt,
            fireImmediate: wt,
            encodeURIComponent: encodeURIComponent,
            fireButtonClick: Et,
            fetchCountry: _t,
            conditionalValue: Pt,
            gdprOptOut: G,
            isLoggedIn: At,
            gaClientId: Ct
        } [t]
    }
    PAYPAL.analytics = PAYPAL.analytics || {};
    var It = PAYPAL.analytics;
    It.options = {}, It.settings = "", It.beaconURL = "";
    var Lt = !1;

    function xt() {
        var t = {};
        if (window._ifpti && window.fpti)
            for (var e in t = O(window._ifpti), window.fpti) "undefined" != typeof window.fpti[e] && window.fpti[e] !== window._ifpti[e] && (t[e] = window.fpti[e]);
        return t
    }

    function Rt(t) {
        t.view && delete t.view
    }

    function qt(t) {
        t && (window.fpti = O(t), Rt(window.fpti), window._ifpti = O(window.fpti))
    }
    It.Analytics = function(t) {
        this._init(t)
    }, It.Analytics.prototype = {
        version: "1.3.11",
        options: w,
        _delayUnloadUntil: null,
        _lastForm: null,
        _lastInput: null,
        _init: function(t) {
            this.setOptions(t),
                function e() {
                    "3p" !== It.settings && mt()
                }(), this._enableUnloadDelay()
        },
        _enableUnloadDelay: function() {
            var t = this;
            It.isUnloading = !1;
            var e = function e() {
                if (It._imInProgress || It.setup._onLoadImpression(), It.isUnloading = !0, t._delayUnloadUntil)
                    for (;
                        (new Date).getTime() < t._delayUnloadUntil;);
            };
            U(window, "beforeunload", e), j(window, "beforeunload", e)
        },
        _recordEvent: function(t, e) {
            e.data = e.data || {}, e.data = R(e.data, t), this.record(e)
        },
        _createBeacon: function(t) {
            var e, n = new window.Image;
            "function" == typeof t.onBeaconCreate && !1 !== t.onBeaconCreate(n) ? (e = this._generateBeaconUrl(t), t.unloadDelay && this.setUnloadDelay(t.unloadDelay)) : t.logActivity && (e = this._generateLogBeaconUrl(t)), e && (n.src = e, It.beaconURL = e), l.publish(T.E.BEACON, t)
        },
        _generateBeaconUrl: function(t) {
            var e = t.url || window.fptiserverurl,
                n = e.split("?");
            e = n[0];
            var r = t.keys;
            if (e.match(/^\/\//) && (e = window.location.protocol + e), e += "?", n[1] && (e += n[1] + "&"), e += r.version + "=" + encodeURIComponent(this.version), r.timestamp && (e = c(e, r.timestamp, a())), r.gmtOffset && (e = c(e, r.gmtOffset, this._getGmtOffset())), r.eventType && (e = c(e, r.eventType, t.values.eventType)), t.data.opic) {
                var i = t.data.opic;
                i = (i = i.replace(/\w+@\w+\.\w+/g, "")).replace(/\d+/g, ""), t.data.opic = i
            }
            return Y(e = o(e, t.data))
        },
        _generateLogBeaconUrl: function(t) {
            var e = window.fptiserverurl + "?v=" + this.version;
            return t.g = this._getGmtOffset(), t.t = rt(), t.start && (t.end = t.end || t.t, t.tt = t.end - t.start), delete t.logActivity, delete t.trackCPL, Y(e = o(e, t))
        },
        getTimeNow: rt,
        _getGmtOffset: function() {
            return (new Date).getTimezoneOffset()
        },
        _getPageTitle: function() {
            return document.title
        },
        _getReferrer: function() {
            return document.referrer
        },
        _getLastFormFocusedValue: function() {
            var t = "";
            return this._lastForm && (t = this._lastForm.getAttribute("name") || this._lastForm.getAttribute("id") || ""), t
        },
        _getLastInputFocusedValue: function() {
            var t = "";
            return this._lastInput && (t = this._lastInput.getAttribute("name") || this._lastInput.getAttribute("id") || ""), t
        },
        _getElements: function(t) {
            var e = [];
            if (t)
                if ("string" == typeof t) e = q(t);
                else if ("object" === s(t))
                for (var n in t) t.hasOwnProperty(n) && 1 === t[n].nodeType && e.push(t[n]);
            else 1 === t.nodeType && e.push(t);
            return e
        },
        _click: function(t) {
            t.getAttribute("href") && (window.location.href = t.getAttribute("href"))
        },
        setOptions: function(t) {
            var e = (t = t || {}).request && t.request.data;
            e && (delete t.request.data, "string" == typeof e && (e = x(e)), qt(e = L(window.fpti, e))), this.options = L(this.options, t)
        },
        setRequestData: function(t, e) {
            if ("object" === s(t))
                for (var n in t) this.options.request.data[n] = t[n];
            else "string" == typeof t && e === undefined ? this.setRequestData(x(t)) : "string" == typeof t && e !== undefined && (this.options.request.data[t] = e)
        },
        getRequestData: function(t) {
            var e = this.options.request.data;
            return t && (e = e[t] || window.fpti[t]), e
        },
        removeRequestData: function(t) {
            void 0 !== t ? this.options.request.data[t] && delete this.options.request.data[t] : this.options.request.data = {}
        },
        setUnloadDelay: function(t) {
            this._delayUnloadUntil = a() + t
        },
        recordImpression: function(i, t) {
            It._imInProgress = !0;
            var o = this,
                a = {};
            if ((i = i || {}).data) {
                i.data = x(i.data);
                var e = xt();
                i.data = L(e, i.data), qt(i.data)
            } else i.data = window.fpti || {};
            t && (i.data = L(i.data, t));
            var n = k("tcs");
            ! function p(t) {
                y(t, "", {
                    expires: -1
                })
            }("tcs"), n && (i.data.pglk = decodeURIComponent(n));
            var r = k("AKDC");
            r && (i.data.akdc = decodeURIComponent(r));
            var c = function d() {
                var t, e = k("_ga");
                if (e) {
                    if (-1 !== e.indexOf("GA1")) {
                        var n = e.split(".");
                        4 === n.length && (t = [n[2], n[3]].join("."))
                    }
                    t && (t = encodeURIComponent(t))
                }
                return t
            }();
            c && (i.data.gacook = c);
            var s = (i = L(o.options.impression.request, i)).keys;
            a[s.pageTitle] = o._getPageTitle(), a[s.referrer] = o._getReferrer(), a[s.screenColorDepth] = function g() {
                return window.screen.colorDepth
            }();
            var u = function v() {
                var t = window.screen || {};
                return {
                    width: t.width,
                    height: t.height
                }
            }();
            a[s.screenWidth] = u.width, a[s.screenHeight] = u.height;
            var l = function m() {
                var t = window.screen || {},
                    e = window.devicePixelRatio || 1,
                    n = P(t.width * e),
                    r = P(t.height * e);
                if (90 === Math.abs(window.orientation)) {
                    var i = n;
                    n = r, r = i
                }
                return {
                    width: n,
                    height: r
                }
            }();
            a[s.deviceWidth] = l.width, a[s.deviceHeight] = l.height;
            var f = function h() {
                var t = window,
                    e = "inner";
                return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
                    width: t[e + "Width"],
                    height: t[e + "Height"]
                }
            }();
            a[s.browserWidth] = f.width, a[s.browserHeight] = f.height, a[s.cookiesEnabled] = function w() {
                return "undefined" === navigator.cookieEnabled ? (document.cookie = "enabledCheck", -1 !== document.cookie.indexOf("enabledCheck") ? b : E) : navigator.cookieEnabled ? b : E
            }(), "mo" !== It.settings && (a[s.plugins] = C()), i.data.res ? o._recordEvent(a, i) : (_ && (i.data.view = i.data.view || {}, i.data.view._t11s = _.now()), lt(function() {
                var t = It.cpl && It.cpl.beaconData || {},
                    e = t.view && t.view._t11s || 0,
                    n = i.data.view._t11s || 0;
                i.data.view._t11s = Math.min.apply(null, [e, n].filter(Boolean));
                var r = ot(a, i);
                a = R(a, r), It._imInProgress = !1, o._recordEvent(a, i)
            }))
        },
        recordClick: function(t) {
            (t = t || {}).data = x(t.data), t.data = L(window.fpti, t.data), Rt((t = L(this.options.click.request, t)).data), this._recordEvent({}, t)
        },
        recordFormAbandonment: function(t) {
            var e = {};
            (t = t || {}).data = x(t.data), t.data = L(window.fpti, t.data), Rt((t = L(this.options.formAbandonment.request, t)).data);
            var n = t.keys;
            e[n.lastFormFocused] = this._getLastFormFocusedValue(), e[n.lastInputFocused] = this._getLastInputFocusedValue(), this._recordEvent(e, t)
        },
        trackFormFocus: function(t) {
            t = this._getElements(t);
            for (var r = function r(t) {
                    var e = t.currentTarget || t.srcElement,
                        n = {
                            uicomp: M(e, "data-pa-focus"),
                            uitype: "form",
                            action: "focus",
                            value: t.target.value ? t.target.value : M(e)
                        };
                    It.logActivity(n)
                }, e = 0; e < t.length; e++) {
                var n = t[e];
                U(n, "focus", r), j(n, "focus", r)
            }
        },
        _recordClick: function(i) {
            var o = this;
            return i = L(this.options.click, i), i = L({
                    request: this.options.request
                }, i),
                function c(t, e) {
                    var n, r = function a(t, e) {
                        for (var n, r = [e, t.target, t.currentTarget, t.srcElement], i = 0; i < r.length; i++) {
                            var o = r[i];
                            if (n = n || o, o && o.getAttribute(T.IS_MARKED)) {
                                n = o;
                                break
                            }
                        }
                        return n
                    }(t, e);
                    "function" == typeof i.onClick && (n = i.onClick(t, r)), !1 !== n && ("object" === s(n) && (i.request = L(i.request, n)), i.request.data[i.request.keys.linkUrl] = r.getAttribute("href") || "", o.recordClick(i.request))
                }
        },
        trackClicks: function(t) {
            for (var e = this._getElements(t.elements), n = this._recordClick(t), r = 0; r < e.length; r++) {
                var i = e[r];
                i.setAttribute(T.IS_MARKED, 1), U(i, "click", n), j(i, "click", n)
            }
        },
        trackFormAbandonment: function(n) {
            var r = this;
            (n = n || {}).data = x(n.data), n = L(this.options.formAbandonment, n), n = L({
                request: this.options.request
            }, n);
            for (var t = this._getElements(n.elements) || [], e = 0; e < t.length; e++)
                for (var i = t[e], o = "form" === i.tagName.toLowerCase() ? [i] : q("form", i), a = 0; a < o.length; a++)
                    for (var c = o[a], s = q("input", c), u = s.length, l = 0; l < u; l++) {
                        ! function(t, e) {
                            j(e, "focus", function() {
                                r._lastForm = t, r._lastInput = e, r._trackingFA || (r._trackingFA = !0, "beforeunload,hashchange".split(",").forEach(function(t) {
                                    j(window, t, function() {
                                        null !== r._lastForm && null !== r._lastInput && (r.recordFormAbandonment(n.request), r._lastForm = null, r._lastInput = null)
                                    })
                                }), j(t, "submit", function() {
                                    r._lastForm = null, r._lastInput = null
                                }))
                            })
                        }(c, s[l])
                    }
        },
        recordAjaxStartTime: function() {
            this.activityStartTime = a()
        },
        logActivity: function(t) {
            t.page = t.page || window.fpti.page, t.pgrp = t.pgrp || window.fpti.pgrp, t.logActivity = !0, this._createBeacon(t)
        },
        logPerf: function(t, e) {
            (t.e = "pf", t.logActivity = !0, (t = L(xt(), t)).tt) || (t = R(t, ot(t), !1));
            var n = !0;
            if (e) {
                n = !1;
                for (var r = T.IMP_PL, i = 0; i < r.length; i++) {
                    if (t[r[i]]) {
                        n = !0;
                        break
                    }
                }
            }
            n && this._createBeacon(t)
        },
        recordAjaxPerformanceData: function(t) {
            var e = this.activityStartTime;
            if (e) {
                var n = a(),
                    r = v(n, e),
                    i = t.sys && t.sys.tracking && t.sys.tracking.fpti.dataString;
                if (i && 0 < r) {
                    var o = x(i);
                    o.tajst = e, o.tajnd = n, o.tt = r, this.logPerf(o)
                }
            }
        },
        recordError: function(t) {
            var e = L(this.options.error, {
                data: t
            });
            this.record(e)
        },
        record: function(t) {
            t = L(this.options.request, t), this._createBeacon(t)
        }
    }, It.Analytics.prototype.utils = {
        queryStringToObject: x
    }, It.logPerformance = function(t) {
        It.Analytics.prototype.logPerf(t)
    }, It.logActivity = function(t) {
        t.e = "ac", It.Analytics.prototype.logActivity(t)
    }, It.setup = function(t) {
        It.setupComplete = It.setupComplete || e, It.settings = It.settings || "pp", It.setup.init(t), It.setup.onLoad(), setTimeout(function() {
            It.setupComplete(It.setup.bindEvents()), l.publish(T.E.INIT)
        }, 500)
    }, It.setup3p = function(t) {
        t = B(t || {}, {
            trackPPLegacyClicks: !1,
            trackPPLegacyExitClicks: !1
        }), It.settings = "3p", It.setup(t)
    }, It.setupMobile = function(t) {
        t = B(t || {}, {
            trackPPLegacyClicks: !1,
            trackPPLegacyExitClicks: !1,
            trackPPDownloadClicks: !1,
            trackPPClickThrough: !1,
            trackFormAbandonment: !1
        }), It.settings = "mo", It.setup(t)
    }, It.reSetup = function(t) {
        delete It.instance, t = B(t || {}, It.options), It.setup(t)
    }, It.setup.init = function(t) {
        t = B(t || {}, {
            trackImpression: !0,
            trackPPClicks: !0,
            trackPPExitClicks: !0,
            trackPPDownloadClicks: !0,
            trackPPLegacyClicks: !0,
            trackPPLegacyExitClicks: !0,
            trackPPClickThrough: !0,
            trackFormAbandonment: !0,
            trackFormFocus: !1
        }), It.Analytics.prototype.options.request.url = window.fptiserverurl = t.url || window.fptiserverurl, It.options = t;
        var e = new It.Analytics({
            request: {
                data: t.data || {}
            }
        });
        return t.data && (t.data = x(t.data), qt(t.data)), It.instance = e
    }, It.setup._onLoadImpression = function() {
        var t = It.instance,
            e = It.options;
        e.trackImpression && Lt && (t.recordImpression(e), Lt = !1)
    }, It.setup.onLoad = function() {
        var t = It.options,
            e = It.setup._onLoadImpression;
        t.trackImpression && (Lt = !0, F(function() {
            It.isUnloading || e()
        }))
    }, It.setup.bindEvents = function() {
        var l = It.instance,
            r = It.options;

        function u(t, e) {
            var n = e || t.target || t.currentTarget || t.srcElement;
            if (n) {
                var r = n.tagName.toLowerCase(); - 1 !== ["svg"].indexOf(r) && (n = n.parentElement)
            }
            return n
        }

        function i(t, e, n) {
            var r = u(t, n),
                i = M(r, e),
                o = r.getAttribute("data-pa-page"),
                a = r.getAttribute("data-pa-pgrp"),
                c = function s(t, e, n) {
                    var r = t || "";
                    return {
                        pglk: (n || l.getRequestData("pgrp") || "") + "|" + r,
                        pgln: (e || l.getRequestData("page") || "") + "|" + r
                    }
                }(i, o, a);
            return c.link = i, o && (c.page = o), a && (c.pgrp = a), c
        }
        var f = {
            unloadDelay: 500
        };

        function o(t, e) {
            var n;
            if ("string" == typeof t.className)
                for (var r = t.className.split(" "), i = 0; i < r.length; i++) {
                    var o = r[i].split(":"); - 1 !== e.indexOf(o[0]) && 1 < o.length && (o.shift(), n = o.join(":"))
                }
            return n
        }
        var p = {
            customClicks: function(t) {
                var e = i(t),
                    n = r.customClicks;
                return e.link = n.linkName ? n.linkName : e.link, e.exit = n.exitClick ? b : E, {
                    data: e
                }
            },
            click: function(t, e) {
                return {
                    data: i(t, T.PA_CL, e)
                }
            },
            exit: function(t) {
                var e = i(t, T.PA_EX);
                return e.exit = b, {
                    data: e
                }
            },
            download: function(t) {
                var e = i(t, T.PA_DL);
                return e.dwnl = b, {
                    data: e
                }
            },
            scTrack: function(t) {
                var e = i(t),
                    n = o(u(t), ["scTrack"]) || e.link;
                return e.link = n, {
                    data: e
                }
            },
            scExit: function(t) {
                var e = i(t),
                    n = o(u(t), ["scExit"]) || e.link;
                return e.link = n, e.exit = b, {
                    data: e
                }
            },
            clickThrough: function(t, e) {
                var n = (e = e || u(t)).getAttribute(T.PA_CL) || e.getAttribute(T.PA_EX) || e.getAttribute(T.PA_DL);
                n || (n = o(e, ["scTrack", "scExit"])), n || (n = M(e));
                var r = l.getRequestData("pgrp") || "";
                return y("tcs", encodeURIComponent(r + "|" + n)), !1
            }
        };
        return "object" === s(r.customClicks) && l.trackClicks({
            elements: r.customClicks.elements,
            onClick: p.customClicks,
            request: f
        }), r.trackPPClicks && l.trackClicks({
            elements: "*[data-pa-click]",
            onClick: p.click,
            request: f
        }), r.trackPPExitClicks && l.trackClicks({
            elements: "*[data-pa-exit]",
            onClick: p.exit,
            request: f
        }), r.trackFormFocus && l.trackFormFocus("*[data-pa-focus], " + J("textarea, input[type=text]", r.wrappingElement)), r.trackPPDownloadClicks && l.trackClicks({
            elements: "*[data-pa-download], " + J('*[href*=".zip"], *[href*=".wav"], *[href*=".mov"], *[href*=".mpg"], *[href*=".avi"], *[href*=".wmv"], *[href*=".doc"], *[href*=".docx"], *[href*=".pdf"], *[href*=".xls"], *[href*=".xlsx"], *[href*=".ppt"], *[href*=".pptx"], *[href*=".txt"], *[href*=".csv"], *[href*=".psd"], *[href*=".tar"]', r.wrappingElement),
            onClick: p.download,
            request: f
        }), r.trackPPLegacyClicks && l.trackClicks({
            elements: '*[class*="scTrack"]',
            onClick: p.scTrack,
            request: f
        }), r.trackPPLegacyExitClicks && l.trackClicks({
            elements: '*[class*="scExit"]',
            onClick: p.scExit,
            request: f
        }), r.trackPPClickThrough && l.trackClicks({
            elements: J("a, button, input[type=submit], input[type=button], input[type=image]", r.wrappingElement),
            onClick: p.clickThrough
        }), r.trackFormAbandonment && l.trackFormAbandonment({
            elements: J("form", r.wrappingElement),
            request: f
        }), j(document.body, "click", function(t) {
            var e, n, r, i = 0,
                o = !1,
                a = t.target,
                c = {
                    onClick: p.click,
                    request: f
                };
            if (a) {
                for (; !o && a;) n = a.tagName.toLowerCase(), -1 !== ["a", "button"].indexOf(n) ? r = a : "input" === n && -1 !== ["submit", "button", "image"].indexOf(a.type) && (r = a), e = a.getAttribute(T.PA_CL), 10 <= i++ || a === document.body || e ? o = !0 : a = a.parentElement;
                r && p.clickThrough(t, r);
                var s = a && a.getAttribute(T.IS_MARKED);
                if (e && !s) {
                    a.setAttribute(T.IS_MARKED, 1);
                    var u = l._recordClick(c);
                    u(t, a), j(a, "click", u)
                }
            }
        }), It.instance = l
    };

    function Dt(t, e) {
        if (_) {
            e = e || {};
            var n = t.cpl = t.cpl || {};
            n.started = !0;
            var r = n.beaconData = n.beaconData || {};
            e.flid && (r.flid = r.flid || e.flid), r.page = r.page || e.page, r.pgrp = r.pgrp || e.pgrp, r.view = {
                t10: e.t10 ? P(e.t10) : 0
            }, n.cplData = n.cplData || {
                pgrpData: {}
            }
        }
    }

    function Ft(t, e, n) {
        if (t.cpl = t.cpl || {}, t.cpl.beaconData = t.cpl.beaconData || {}, "object" === s(e)) {
            var r = {};
            B(r = e.pageData ? I(r, e.pageData) : e, t.cpl.beaconData)
        }
        _ && (t.cpl.started || (Dt(t), n && (t.cpl.beaconData.view._t11s = _.now())))
    }

    function jt(t, e) {
        var n = t.cpl.beaconData || {};
        if (_ && n.view && (!e || e && !t._imInProgress)) {
            n.view._t11s && (n.view.t11 = P(_.now() - n.view._t11s), delete n.view._t11s), st(n);
            var r = n.view.t11;
            (!e && r < 61e3 || e && 50 < r && r < 31e3) && setTimeout(function() {
                t.Analytics.prototype.logPerf(n, e)
            }, 100)
        }
        t.cpl = {
            started: !1
        }
    }
    It.resumeCPLTracking = function() {}, It.beaconTrackingData = {}, It.addCPLData = function() {}, It.setCPLData = function() {}, It.startCPLTracking = function(t) {
        _ && (Dt(It, t), It.cpl.beaconData.view = {
            t10: 0,
            _t11s: _.now()
        })
    }, It.endCPLTracking = function(t) {
        Ft(It, t), jt(It)
    }, It.resourceCPL = function(t, e) {
        if (t) {
            var n = at(t);
            if (n) {
                var r = R(e, n);
                r.tmpl = t, r.view = {
                    t10: 0,
                    t11: n.tt
                }, It.Analytics.prototype.logPerf(r)
            }
        }
    };
    var Ut = !(It.autoCPLTracking = function(t) {
        Ft(It, t, !0), setTimeout(function() {
            It._imInProgress || lt(function() {
                jt(It, !0)
            })
        }, 500)
    });

    function Nt() {
        Ut || (Ut = !0, It.autoCPLTracking())
    }! function Kt(t) {
        t || (t = window.history);
        var e = {
            listen: t.listen,
            transitionTo: t.transitionTo,
            pushState: t.pushState,
            setState: t.setState,
            replaceState: t.replaceState,
            go: t.go
        };
        t.setState = function() {
            Nt(), e.setState.apply(this, arguments)
        }, t.listen = function() {
            Nt(), e.listen.apply(this, arguments)
        }, t.transitionTo = function() {
            Nt(), e.transitionTo.apply(this, arguments)
        }, t.pushState = function() {
            Nt(), e.pushState.apply(this, arguments)
        }, t.go = function() {
            Nt(), e.go.apply(this, arguments)
        }, j(window, "hashchange", Nt), l.subscribe(T.E.BEACON, function() {
            Ut = !1
        })
    }();
    var Mt = !1;
    It.startClientErrorTracking = function(a) {
        if (a = a || {}, !Mt) {
            Mt = !0;
            var c, s = a.maxErrors || 5,
                u = 0,
                o = window.onerror;
            j(window, "unhandledrejection", function e(t) {
                t.preventDefault(), t.reason && t.reason.stack && l(t.reason.message, "", 0, 0, t.reason, T.REJECTION_ERR_TYPE)
            }), j(window, "error", function n(t) {
                t && t.error && l(t.message, t.filename, t.lineno, t.colno, t.error)
            }), window.onerror = function f(t, e, n, r, i) {
                l(t, e, n, r, i), "function" == typeof o && o.apply(window, arguments)
            }
        }

        function l(t, e, n, r, i, o) {
            c && c === i || (c = i, s < ++u || (e = e || "-", n = n || 0, r = r || 0, It.logJSError(i, e + " " + n + ":" + r, o), "function" == typeof a.onError && a.onError({
                message: t,
                file: e,
                line: n,
                column: r,
                error: i
            })))
        }
    }, It.logJSError = function(t, e, n) {
        var r = window.fpti || {},
            i = {
                page: r.page,
                pgrp: r.pgrp,
                comp: r.comp,
                erpg: t && t.message || t || T.ERR_MSG,
                error_type: n || T.ERR_TYPE,
                error_description: function o(t) {
                    return (t && t.stack || "").replace(/http.*\/(\w+.)/gm, "_/$1").substring(0, 500)
                }(t),
                error_source: e
            };
        It.Analytics.prototype.recordError(i)
    }, PAYPAL.trackJSError = function(t) {
        It && It.logJSError(t, "", "customError")
    }, l.subscribe(T.E.INIT, function() {
        ! function t() {
            Mt || (It.startClientErrorTracking(), Mt = !0)
        }()
    });
    var Bt = /^auth|banking|bizpro|checkoutui|creditapply|creditnode|debit|latin|mep|merchantsignup|money|mpp|p2p|pools|ppdg|ppme|self|smarthelp|rescenter|smc|walletexp|workingcapitaln/i,
        Jt = T.URL_PPOBJ + "/pa/tl",
        Yt = Jt + "/patleaf.js",
        Ht = Jt + "/patlcfg.js";

    function Vt() {
        H(Ht)
    }
    V(!0) && l.subscribe(T.E.INIT, function() {
        !window.TLT && window.fpti && Bt.test(window.fpti.comp || "") && H(Yt, Vt)
    });
    var Wt = /moneynodeweb:(cards:new|money:banks)/i;
    V(!0) && l.subscribe(T.E.INIT, function() {
        var t = window.fpti;
        if (t && Wt.test(t.page || "")) {
            var e = z();
            ! function n(t) {
                var e = document.getElementById("fconfig");
                e || ((e = document.createElement("script")).id = "fconfig", e.type = "application/json", e.setAttribute("fncls", "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"), e.text = JSON.stringify(t), document.body.appendChild(e))
            }({
                s: function r(t) {
                    var e = (t || "").replace("main:", "").replace(/:+/g, "_").toUpperCase(),
                        n = (e = e.substr(0, 32)).length - 1;
                    return "_" === e.charAt(n) && (e = e.substr(0, n)), e
                }(t.page),
                f: e.vt || ""
            }), H("https://c.paypal.com/da/r/fb.js")
        }
    })
}();