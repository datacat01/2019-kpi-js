! function() {
    function t(e, n, i) {
        function a(o, s) {
            if (!n[o]) {
                if (!e[o]) {
                    var c = "function" == typeof require && require;
                    if (!s && c) {
                        return c(o, !0);
                    }
                    if (r) {
                        return r(o, !0);
                    }
                    var u = new Error("Cannot find module '" + o + "'");
                    throw u.code = "MODULE_NOT_FOUND", u;
                }
                var l = n[o] = {
                    exports: {}
                };
                e[o][0].call(l.exports, function(t) {
                    return a(e[o][1][t] || t);
                }, l, l.exports, t, e, n, i);
            }
            return n[o].exports;
        }
        for (var r = "function" == typeof require && require, o = 0; o < i.length; o++) {
            a(i[o]);
        }
        return a;
    }
    return t;
}()({
    1: [function(t, e, n) {
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        window.GoogleAnalyticsObject = "ga", window.ga = window.ga || function() {
                window.ga.q = window.ga.q || [], window.ga.q.push(arguments);
            }, window.ga.l = 1 * new Date,
            function() {
                function t(t) {
                    O.set(t);
                }

                function e(t) {
                    if (100 != t.get(_n) && k(Nt(t, sn)) % 10000 >= 100 * Lt(t, _n)) {
                        throw "abort";
                    }
                }

                function n(t) {
                    if (nt(Nt(t, dn))) {
                        throw "abort";
                    }
                }

                function i() {
                    var t = Z.location.protocol;
                    if ("http:" != t && "https:" != t) {
                        throw "abort";
                    }
                }

                function a(e) {
                    try {
                        Y.navigator.sendBeacon ? t(42) : Y.XMLHttpRequest && "withCredentials" in new Y.XMLHttpRequest && t(40);
                    } catch (t) {}
                    e.set(Ve, S(e), !0), e.set(ee, Lt(e, ee) + 1);
                    var n = [];
                    Et.map(function(t, i) {
                        i.F && void 0 != (t = e.get(t)) && t != i.defaultValue && ("boolean" == typeof t && (t *= 1), n.push(i.F + "=" + L("" + t)));
                    }), n.push("z=" + It()), e.set(Zt, n.join("&"), !0);
                }

                function r(t) {
                    var e = Nt(t, Nn) || wt() + "/collect",
                        n = t.get(Pn),
                        i = Nt(t, te);
                    if (!i && t.get(Qt) && (i = "beacon"), n) {
                        kt(e, Nt(t, Zt), n, t.get(Yt));
                    } else {
                        if (i) {
                            n = i, i = Nt(t, Zt);
                            var a = t.get(Yt);
                            a = a || N, "image" == n ? _t(e, i, a) : "xhr" == n && Ot(e, i, a) || "beacon" == n && St(e, i, a) || bt(e, i, a);
                        } else {
                            bt(e, Nt(t, Zt), t.get(Yt));
                        }
                    }
                    e = t.get(dn), e = Tt(e), n = e.hitcount, e.hitcount = n ? n + 1 : 1, e = t.get(dn), delete Tt(e).pending_experiments, t.set(Yt, N, !0);
                }

                function o(t) {
                    (Y.gaData = Y.gaData || {}).expId && t.set(Ee, (Y.gaData = Y.gaData || {}).expId), (Y.gaData = Y.gaData || {}).expVar && t.set(je, (Y.gaData = Y.gaData || {}).expVar);
                    var e = t.get(dn);
                    if (e = Tt(e).pending_experiments) {
                        var n = [];
                        for (i in e) {
                            e.hasOwnProperty(i) && e[i] && n.push(encodeURIComponent(i) + "." + encodeURIComponent(e[i]));
                        }
                        var i = n.join("!");
                    } else {
                        i = void 0;
                    }
                    i && t.set(Ne, i, !0);
                }

                function s() {
                    if (Y.navigator && "preview" == Y.navigator.loadPurpose) {
                        throw "abort";
                    }
                }

                function c(t) {
                    var e = Y.gaDevIds;
                    C(e) && 0 != e.length && t.set("&did", e.join(","), !0);
                }

                function u(t) {
                    if (!t.get(dn)) {
                        throw "abort";
                    }
                }

                function l(e) {
                    var n = Lt(e, Ue);
                    500 <= n && t(15);
                    var i = Nt(e, Jt);
                    if ("transaction" != i && "item" != i) {
                        i = Lt(e, $e);
                        var a = (new Date).getTime(),
                            r = Lt(e, Me);
                        if (0 == r && e.set(Me, a), r = Math.round(2 * (a - r) / 1000), 0 < r && (i = Math.min(i + r, 20), e.set(Me, a)), 0 >= i) {
                            throw "abort";
                        }
                        e.set($e, --i);
                    }
                    e.set(Ue, ++n);
                }

                function d(e, n, i, a) {
                    n[e] = function() {
                        try {
                            return a && t(a), i.apply(this, arguments);
                        } catch (t) {
                            throw xt("exc", e, t && t.name), t;
                        }
                    };
                }

                function f() {
                    var t, e;
                    if ((e = (e = Y.navigator) ? e.plugins : null) && e.length) {
                        for (var n = 0; n < e.length && !t; n++) {
                            var i = e[n]; - 1 < i.name.indexOf("Shockwave Flash") && (t = i.description);
                        }
                    }
                    if (!t) {
                        try {
                            var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                            t = a.GetVariable("$version");
                        } catch (t) {}
                    }
                    if (!t) {
                        try {
                            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), t = "WIN 6,0,21,0", a.AllowScriptAccess = "always", t = a.GetVariable("$version");
                        } catch (t) {}
                    }
                    if (!t) {
                        try {
                            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), t = a.GetVariable("$version");
                        } catch (t) {}
                    }
                    return t && (a = t.match(/[\d]+/g)) && 3 <= a.length && (t = a[0] + "." + a[1] + " r" + a[2]), t || void 0;
                }

                function g(t, e, n) {
                    "none" == e && (e = "");
                    var i = [],
                        a = it(t);
                    t = "__utma" == t ? 6 : 2;
                    for (var r = 0; r < a.length; r++) {
                        var o = ("" + a[r]).split(".");
                        o.length >= t && i.push({
                            hash: o[0],
                            R: a[r],
                            O: o
                        });
                    }
                    if (0 != i.length) {
                        return 1 == i.length ? i[0] : h(e, i) || h(n, i) || h(null, i) || i[0];
                    }
                }

                function h(t, e) {
                    if (null == t) {
                        var n = t = 1;
                    } else {
                        n = k(t), t = k(I(t, ".") ? t.substring(1) : "." + t);
                    }
                    for (var i = 0; i < e.length; i++) {
                        if (e[i].hash == n || e[i].hash == t) {
                            return e[i];
                        }
                    }
                }

                function v(e) {
                    var n = e.get(sn),
                        i = e.get(xn) || "";
                    if (n = "_ga=2." + L(m(i + n, 0) + "." + i + "-" + n), (i = e.get(An)) && e.get(jn)) {
                        var a = Lt(e, In);
                        1000 * a + Lt(e, Rn) <= (new Date).getTime() ? (t(76), e = "") : (t(44), e = "&_gac=1." + L([m(i, 0), a, i].join(".")));
                    } else {
                        e = "";
                    }
                    return n + e;
                }

                function p(t, e) {
                    var n = new Date,
                        i = Y.navigator,
                        a = i.plugins || [];
                    for (t = [t, i.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + e], e = 0; e < a.length; ++e) {
                        t.push(a[e].description);
                    }
                    return k(t.join("."));
                }

                function m(t, e) {
                    var n = new Date,
                        i = Y.navigator,
                        a = n.getHours() + Math.floor((n.getMinutes() + e) / 60);
                    return k([t, i.userAgent, i.language || "", n.getTimezoneOffset(), n.getYear(), n.getDate() + Math.floor(a / 24), (24 + a) % 24, (60 + n.getMinutes() + e) % 60].join("."));
                }

                function w(t, e) {
                    if (e == Z.location.hostname) {
                        return !1;
                    }
                    for (var n = 0; n < t.length; n++) {
                        if (t[n] instanceof RegExp) {
                            if (t[n].test(e)) {
                                return !0;
                            }
                        } else {
                            if (0 <= e.indexOf(t[n])) {
                                return !0;
                            }
                        }
                    }
                    return !1;
                }

                function y(t, e) {
                    return e != p(t, 0) && e != p(t, -1) && e != p(t, -2) && e != m(t, 0) && e != m(t, -1) && e != m(t, -2);
                }

                function b(t) {
                    return 0 <= t.indexOf(".") || 0 <= t.indexOf(":");
                }

                function k(t) {
                    var e, n = 1;
                    if (t) {
                        for (n = 0, e = t.length - 1; 0 <= e; e--) {
                            var i = t.charCodeAt(e);
                            n = (n << 6 & 268435455) + i + (i << 14), i = 266338304 & n, n = 0 != i ? n ^ i >> 21 : n;
                        }
                    }
                    return n;
                }
                var _ = function(t) {
                    this.w = t || [];
                };
                _.prototype.set = function(t) {
                    this.w[t] = !0;
                }, _.prototype.encode = function() {
                    for (var t = [], e = 0; e < this.w.length; e++) {
                        this.w[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);
                    }
                    for (e = 0; e < t.length; e++) {
                        t[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e] || 0);
                    }
                    return t.join("") + "~";
                };
                var O = new _,
                    S = function(t) {
                        t = x(t), t = new _(t);
                        for (var e = O.w.slice(), n = 0; n < t.w.length; n++) {
                            e[n] = e[n] || t.w[n];
                        }
                        return new _(e).encode();
                    },
                    x = function(t) {
                        return t = t.get(qe), C(t) || (t = []), t;
                    },
                    T = function(t) {
                        return "function" == typeof t;
                    },
                    C = function(t) {
                        return "[object Array]" == Object.prototype.toString.call(Object(t));
                    },
                    A = function(t) {
                        return void 0 != t && -1 < (t.constructor + "").indexOf("String");
                    },
                    I = function(t, e) {
                        return 0 == t.indexOf(e);
                    },
                    R = function(t) {
                        return t ? t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
                    },
                    E = function() {
                        for (var t = Y.navigator.userAgent + (Z.cookie ? Z.cookie : "") + (Z.referrer ? Z.referrer : ""), e = t.length, n = Y.history.length; 0 < n;) {
                            t += n-- ^ e++;
                        }
                        return [At() ^ 2147483647 & k(t), Math.round((new Date).getTime() / 1000)].join(".");
                    },
                    j = function(t) {
                        var e = Z.createElement("img");
                        return e.width = 1, e.height = 1, e.src = t, e;
                    },
                    N = function() {},
                    L = function(e) {
                        return encodeURIComponent instanceof Function ? encodeURIComponent(e) : (t(28), e);
                    },
                    P = function(e, n, i, a) {
                        try {
                            e.addEventListener ? e.addEventListener(n, i, !!a) : e.attachEvent && e.attachEvent("on" + n, i);
                        } catch (e) {
                            t(27);
                        }
                    },
                    D = /^[\w\-:\/.?=&%!]+$/,
                    U = function(t, e, n, i) {
                        t && (n ? (i = "", e && D.test(e) && (i = ' id="' + e + '"'), D.test(t) && Z.write("<script" + i + ' src="' + t + '"><\/script>')) : (n = Z.createElement("script"), n.type = "text/javascript", n.async = !0, n.src = t, i && (n.onload = i), e && (n.id = e), t = Z.getElementsByTagName("script")[0], t.parentNode.insertBefore(n, t)));
                    },
                    M = function() {
                        return "https:" == Z.location.protocol;
                    },
                    $ = function(t, e) {
                        return V(Z.location[e ? "href" : "search"], t);
                    },
                    V = function(t, e) {
                        return (t = t.match("(?:&|#|\\?)" + L(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == t.length ? t[1] : "";
                    },
                    q = function() {
                        var t = "" + Z.location.hostname;
                        return 0 == t.indexOf("www.") ? t.substring(4) : t;
                    },
                    F = function(t, e) {
                        var n = t.indexOf(e);
                        return !(5 != n && 6 != n || "/" != (t = t.charAt(n + e.length)) && "?" != t && "" != t && ":" != t);
                    },
                    G = function(t, e) {
                        var n = Z.referrer;
                        if (/^(https?|android-app):\/\//i.test(n)) {
                            if (t) {
                                return n;
                            }
                            if (t = "//" + Z.location.hostname, !F(n, t)) {
                                return e && (e = t.replace(/\./g, "-") + ".cdn.ampproject.org", F(n, e)) ? void 0 : n;
                            }
                        }
                    },
                    H = function(t, e) {
                        if (1 == e.length && null != e[0] && "object" == typeof e[0]) {
                            return e[0];
                        }
                        for (var n = {}, i = Math.min(t.length + 1, e.length), a = 0; a < i; a++) {
                            if ("object" == typeof e[a]) {
                                for (var r in e[a]) {
                                    e[a].hasOwnProperty(r) && (n[r] = e[a][r]);
                                }
                                break;
                            }
                            a < t.length && (n[t[a]] = e[a]);
                        }
                        return n;
                    },
                    B = function() {
                        this.keys = [], this.values = {}, this.m = {};
                    };
                B.prototype.set = function(t, e, n) {
                    this.keys.push(t), n ? this.m[":" + t] = e : this.values[":" + t] = e;
                }, B.prototype.get = function(t) {
                    return this.m.hasOwnProperty(":" + t) ? this.m[":" + t] : this.values[":" + t];
                }, B.prototype.map = function(t) {
                    for (var e = 0; e < this.keys.length; e++) {
                        var n = this.keys[e],
                            i = this.get(n);
                        i && t(n, i);
                    }
                };
                var z, K, X, W, J, Y = window,
                    Z = document,
                    Q = function(t, e) {
                        return setTimeout(t, e);
                    },
                    tt = window,
                    et = document,
                    nt = function(t) {
                        var e = tt._gaUserPrefs;
                        if (e && e.ioo && e.ioo() || t && !0 === tt["ga-disable-" + t]) {
                            return !0;
                        }
                        try {
                            var n = tt.external;
                            if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) {
                                return !0;
                            }
                        } catch (t) {}
                        t = [], e = et.cookie.split(";"), n = /^\s*AMP_TOKEN=\s*(.*?)\s*$/;
                        for (var i = 0; i < e.length; i++) {
                            var a = e[i].match(n);
                            a && t.push(a[1]);
                        }
                        for (e = 0; e < t.length; e++) {
                            if ("$OPT_OUT" == decodeURIComponent(t[e])) {
                                return !0;
                            }
                        }
                        return !1;
                    },
                    it = function(t) {
                        var e = [],
                            n = Z.cookie.split(";");
                        t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
                        for (var i = 0; i < n.length; i++) {
                            var a = n[i].match(t);
                            a && e.push(a[1]);
                        }
                        return e;
                    },
                    at = function(t, e, n, i, a, r) {
                        if (!(a = !nt(a) && !(st.test(Z.location.hostname) || "/" == n && ot.test(i)))) {
                            return !1;
                        }
                        if (e && 1200 < e.length && (e = e.substring(0, 1200)), n = t + "=" + e + "; path=" + n + "; ", r && (n += "expires=" + new Date((new Date).getTime() + r).toGMTString() + "; "), i && "none" != i && (n += "domain=" + i + ";"), i = Z.cookie, Z.cookie = n, !(i = i != Z.cookie)) {
                            t: {
                                for (t = it(t), i = 0; i < t.length; i++) {
                                    if (e == t[i]) {
                                        i = !0;
                                        break t;
                                    }
                                }
                                i = !1;
                            }
                        }
                        return i;
                    },
                    rt = function(t) {
                        return encodeURIComponent ? encodeURIComponent(t).replace(/\(/g, "%28").replace(/\)/g, "%29") : t;
                    },
                    ot = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
                    st = /(^|\.)doubleclick\.net$/i,
                    ct = /^.*Version\/?(\d+)[^\d].*$/i,
                    ut = function() {
                        if (void 0 !== Y.__ga4__) {
                            return Y.__ga4__;
                        }
                        if (void 0 === z) {
                            var t = Y.navigator.userAgent;
                            if (t) {
                                var e = t;
                                try {
                                    e = decodeURIComponent(t);
                                } catch (t) {}(t = !(0 <= e.indexOf("Chrome") || 0 <= e.indexOf("CriOS") || !(0 <= e.indexOf("Safari/") || 0 <= e.indexOf("Safari,")))) && (e = ct.exec(e), t = 11 <= (e ? Number(e[1]) : -1)), z = t;
                            } else {
                                z = !1;
                            }
                        }
                        return z;
                    },
                    lt = /^https?:\/\/[^\/]*cdn\.ampproject\.org\//,
                    dt = [],
                    ft = function() {
                        Ki.D([N]);
                    },
                    gt = function(e, n) {
                        var i = it("AMP_TOKEN");
                        return 1 < i.length ? (t(55), !1) : "$OPT_OUT" == (i = decodeURIComponent(i[0] || "")) || "$ERROR" == i || nt(n) ? (t(62), !1) : lt.test(Z.referrer) || "$NOT_FOUND" != i ? void 0 !== J ? (t(56), Q(function() {
                            e(J);
                        }, 0), !0) : K ? (dt.push(e), !0) : "$RETRIEVING" == i ? (t(57), Q(function() {
                            gt(e, n);
                        }, 10000), !0) : (K = !0, i && "$" != i[0] || (pt("$RETRIEVING", 30000), setTimeout(vt, 30000), i = ""), !!ht(i, n) && (dt.push(e), !0)) : (t(68), !1);
                    },
                    ht = function(e, n, i) {
                        if (!window.JSON) {
                            return t(58), !1;
                        }
                        var a = Y.XMLHttpRequest;
                        if (!a) {
                            return t(59), !1;
                        }
                        var r = new a;
                        return "withCredentials" in r ? (r.open("POST", (i || "https://ampcid.google.com/v1/publisher:getClientId") + "?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM", !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "text/plain"), r.onload = function() {
                            if (K = !1, 4 == r.readyState) {
                                try {
                                    200 != r.status && (t(61), mt("", "$ERROR", 30000));
                                    var a = JSON.parse(r.responseText);
                                    a.optOut ? (t(63), mt("", "$OPT_OUT", 31536000000)) : a.clientId ? mt(a.clientId, a.securityToken, 31536000000) : !i && a.alternateUrl ? (X && clearTimeout(X), K = !0, ht(e, n, a.alternateUrl)) : (t(64), mt("", "$NOT_FOUND", 3600000));
                                } catch (e) {
                                    t(65), mt("", "$ERROR", 30000);
                                }
                                r = null;
                            }
                        }, a = {
                            originScope: "AMP_ECID_GOOGLE"
                        }, e && (a.securityToken = e), r.send(JSON.stringify(a)), X = Q(function() {
                            t(66), mt("", "$ERROR", 30000);
                        }, 10000), !0) : (t(60), !1);
                    },
                    vt = function() {
                        K = !1;
                    },
                    pt = function(t, e) {
                        if (void 0 === W) {
                            W = "";
                            for (var n = ti(), i = 0; i < n.length; i++) {
                                var a = n[i];
                                if (at("AMP_TOKEN", encodeURIComponent(t), "/", a, "", e)) {
                                    return void(W = a);
                                }
                            }
                        }
                        at("AMP_TOKEN", encodeURIComponent(t), "/", W, "", e);
                    },
                    mt = function(t, e, n) {
                        for (X && clearTimeout(X), e && pt(e, n), J = t, e = dt, dt = [], n = 0; n < e.length; n++) {
                            e[n](t);
                        }
                    },
                    wt = function() {
                        return (zt || M() ? "https:" : "http:") + "//www.google-analytics.com";
                    },
                    yt = function(t) {
                        this.name = "len", this.message = t + "-8192";
                    },
                    bt = function(t, e, n) {
                        if (n = n || N, 2036 >= e.length) {
                            _t(t, e, n);
                        } else {
                            if (!(8192 >= e.length)) {
                                throw xt("len", e.length), new yt(e.length);
                            }
                            St(t, e, n) || Ot(t, e, n) || _t(t, e, n);
                        }
                    },
                    kt = function(t, e, n, i) {
                        i = i || N, Ot(t + "?" + e, "", i, n);
                    },
                    _t = function(t, e, n) {
                        var i = j(t + "?" + e);
                        i.onload = i.onerror = function() {
                            i.onload = null, i.onerror = null, n();
                        };
                    },
                    Ot = function(t, e, n, i) {
                        var a = Y.XMLHttpRequest;
                        if (!a) {
                            return !1;
                        }
                        var r = new a;
                        return "withCredentials" in r && (t = t.replace(/^http:/, "https:"), r.open("POST", t, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "text/plain"), r.onreadystatechange = function() {
                            if (4 == r.readyState) {
                                if (i) {
                                    try {
                                        var t = r.responseText;
                                        if (1 > t.length) {
                                            xt("xhr", "ver", "0"), n();
                                        } else {
                                            if ("1" != t.charAt(0)) {
                                                xt("xhr", "ver", String(t.length)), n();
                                            } else {
                                                if (3 < i.count++) {
                                                    xt("xhr", "tmr", "" + i.count), n();
                                                } else {
                                                    if (1 == t.length) {
                                                        n();
                                                    } else {
                                                        var e = t.charAt(1);
                                                        if ("d" == e) {
                                                            kt("https://stats.g.doubleclick.net/j/collect", i.U, i, n);
                                                        } else {
                                                            if ("g" == e) {
                                                                var a = "https://www.google.%/ads/ga-audiences".replace("%", "com");
                                                                _t(a, i.google, n);
                                                                var o = t.substring(2);
                                                                if (o) {
                                                                    if (/^[a-z.]{1,6}$/.test(o)) {
                                                                        var s = "https://www.google.%/ads/ga-audiences".replace("%", o);
                                                                        _t(s, i.google, N);
                                                                    } else {
                                                                        xt("tld", "bcc", o);
                                                                    }
                                                                }
                                                            } else {
                                                                xt("xhr", "brc", e), n();
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } catch (t) {
                                        xt("xhr", "rsp"), n();
                                    }
                                } else {
                                    n();
                                }
                                r = null;
                            }
                        }, r.send(e), !0);
                    },
                    St = function(t, e, n) {
                        return !!Y.navigator.sendBeacon && (!!Y.navigator.sendBeacon(t, e) && (n(), !0));
                    },
                    xt = function(t, e, n) {
                        1 <= 100 * Math.random() || nt("?") || (t = ["t=error", "_e=" + t, "_v=j66", "sr=1"], e && t.push("_f=" + e), n && t.push("_m=" + L(n.substring(0, 100))), t.push("aip=1"), t.push("z=" + At()), _t(wt() + "/collect", t.join("&"), N));
                    },
                    Tt = function(t) {
                        var e = Y.gaData = Y.gaData || {};
                        return e[t] = e[t] || {};
                    },
                    Ct = function() {
                        this.M = [];
                    };
                Ct.prototype.add = function(t) {
                    this.M.push(t);
                }, Ct.prototype.D = function(t) {
                    try {
                        for (var e = 0; e < this.M.length; e++) {
                            var n = t.get(this.M[e]);
                            n && T(n) && n.call(Y, t);
                        }
                    } catch (t) {}(e = t.get(Yt)) != N && T(e) && (t.set(Yt, N, !0), setTimeout(e, 10));
                };
                var At = function() {
                        return Math.round(2147483647 * Math.random());
                    },
                    It = function() {
                        try {
                            var t = new Uint32Array(1);
                            return Y.crypto.getRandomValues(t), 2147483647 & t[0];
                        } catch (t) {
                            return At();
                        }
                    },
                    Rt = function() {
                        this.data = new B;
                    },
                    Et = new B,
                    jt = [];
                Rt.prototype.get = function(t) {
                    var e = Ut(t),
                        n = this.data.get(t);
                    return e && void 0 == n && (n = T(e.defaultValue) ? e.defaultValue() : e.defaultValue), e && e.Z ? e.Z(this, t, n) : n;
                };
                var Nt = function(t, e) {
                        return t = t.get(e), void 0 == t ? "" : "" + t;
                    },
                    Lt = function(t, e) {
                        return t = t.get(e), void 0 == t || "" === t ? 0 : 1 * t;
                    };
                Rt.prototype.set = function(t, e, n) {
                    if (t) {
                        if ("object" == typeof t) {
                            for (var i in t) {
                                t.hasOwnProperty(i) && Pt(this, i, t[i], n);
                            }
                        } else {
                            Pt(this, t, e, n);
                        }
                    }
                };
                var Pt = function(t, e, n, i) {
                        if (void 0 != n) {
                            switch (e) {
                                case dn:
                                    Ai.test(n);
                            }
                        }
                        var a = Ut(e);
                        a && a.o ? a.o(t, e, n, i) : t.data.set(e, n, i);
                    },
                    Dt = function(t, e, n, i, a) {
                        this.name = t, this.F = e, this.Z = i, this.o = a, this.defaultValue = n;
                    },
                    Ut = function(t) {
                        var e = Et.get(t);
                        if (!e) {
                            for (var n = 0; n < jt.length; n++) {
                                var i = jt[n],
                                    a = i[0].exec(t);
                                if (a) {
                                    e = i[1](a), Et.set(e.name, e);
                                    break;
                                }
                            }
                        }
                        return e;
                    },
                    Mt = function(t) {
                        var e;
                        return Et.map(function(n, i) {
                            i.F == t && (e = i);
                        }), e && e.name;
                    },
                    $t = function(t, e, n, i, a) {
                        return t = new Dt(t, e, n, i, a), Et.set(t.name, t), t.name;
                    },
                    Vt = function(t, e) {
                        jt.push([new RegExp("^" + t + "$"), e]);
                    },
                    qt = function(t, e, n) {
                        return $t(t, e, n, void 0, Ft);
                    },
                    Ft = function() {},
                    Gt = A(window.GoogleAnalyticsObject) && R(window.GoogleAnalyticsObject) || "ga",
                    Ht = /^(?:utma\.)?\d+\.\d+$/,
                    Bt = /^amp-[\w.-]{22,64}$/,
                    zt = !1,
                    Kt = qt("apiVersion", "v"),
                    Xt = qt("clientVersion", "_v");
                $t("anonymizeIp", "aip");
                var Wt = $t("adSenseId", "a"),
                    Jt = $t("hitType", "t"),
                    Yt = $t("hitCallback"),
                    Zt = $t("hitPayload");
                $t("nonInteraction", "ni"), $t("currencyCode", "cu"), $t("dataSource", "ds");
                var Qt = $t("useBeacon", void 0, !1),
                    te = $t("transport");
                $t("sessionControl", "sc", ""), $t("sessionGroup", "sg"), $t("queueTime", "qt");
                var ee = $t("_s", "_s");
                $t("screenName", "cd");
                var ne = $t("location", "dl", ""),
                    ie = $t("referrer", "dr"),
                    ae = $t("page", "dp", "");
                $t("hostname", "dh");
                var re = $t("language", "ul"),
                    oe = $t("encoding", "de");
                $t("title", "dt", function() {
                    return Z.title || void 0;
                }), Vt("contentGroup([0-9]+)", function(t) {
                    return new Dt(t[0], "cg" + t[1]);
                });
                var se = $t("screenColors", "sd"),
                    ce = $t("screenResolution", "sr"),
                    ue = $t("viewportSize", "vp"),
                    le = $t("javaEnabled", "je"),
                    de = $t("flashVersion", "fl");
                $t("campaignId", "ci"), $t("campaignName", "cn"), $t("campaignSource", "cs"), $t("campaignMedium", "cm"), $t("campaignKeyword", "ck"), $t("campaignContent", "cc");
                var fe = $t("eventCategory", "ec"),
                    ge = $t("eventAction", "ea"),
                    he = $t("eventLabel", "el"),
                    ve = $t("eventValue", "ev"),
                    pe = $t("socialNetwork", "sn"),
                    me = $t("socialAction", "sa"),
                    we = $t("socialTarget", "st"),
                    ye = $t("l1", "plt"),
                    be = $t("l2", "pdt"),
                    ke = $t("l3", "dns"),
                    _e = $t("l4", "rrt"),
                    Oe = $t("l5", "srt"),
                    Se = $t("l6", "tcp"),
                    xe = $t("l7", "dit"),
                    Te = $t("l8", "clt"),
                    Ce = $t("timingCategory", "utc"),
                    Ae = $t("timingVar", "utv"),
                    Ie = $t("timingLabel", "utl"),
                    Re = $t("timingValue", "utt");
                $t("appName", "an"), $t("appVersion", "av", ""), $t("appId", "aid", ""), $t("appInstallerId", "aiid", ""), $t("exDescription", "exd"), $t("exFatal", "exf");
                var Ee = $t("expId", "xid"),
                    je = $t("expVar", "xvar"),
                    Ne = $t("exp", "exp"),
                    Le = $t("_utma", "_utma"),
                    Pe = $t("_utmz", "_utmz"),
                    De = $t("_utmht", "_utmht"),
                    Ue = $t("_hc", void 0, 0),
                    Me = $t("_ti", void 0, 0),
                    $e = $t("_to", void 0, 20);
                Vt("dimension([0-9]+)", function(t) {
                    return new Dt(t[0], "cd" + t[1]);
                }), Vt("metric([0-9]+)", function(t) {
                    return new Dt(t[0], "cm" + t[1]);
                }), $t("linkerParam", void 0, void 0, v, Ft);
                var Ve = $t("usage", "_u"),
                    qe = $t("_um");
                $t("forceSSL", void 0, void 0, function() {
                    return zt;
                }, function(e, n, i) {
                    t(34), zt = !!i;
                });
                var Fe = $t("_j1", "jid"),
                    Ge = $t("_j2", "gjid");
                Vt("\\&(.*)", function(t) {
                    var e = new Dt(t[0], t[1]),
                        n = Mt(t[0].substring(1));
                    return n && (e.Z = function(t) {
                        return t.get(n);
                    }, e.o = function(t, e, i, a) {
                        t.set(n, i, a);
                    }, e.F = void 0), e;
                });
                var He = qt("_oot"),
                    Be = $t("previewTask"),
                    ze = $t("checkProtocolTask"),
                    Ke = $t("validationTask"),
                    Xe = $t("checkStorageTask"),
                    We = $t("historyImportTask"),
                    Je = $t("samplerTask"),
                    Ye = $t("_rlt"),
                    Ze = $t("buildHitTask"),
                    Qe = $t("sendHitTask"),
                    tn = $t("ceTask"),
                    en = $t("devIdTask"),
                    nn = $t("timingTask"),
                    an = $t("displayFeaturesTask"),
                    rn = $t("customTask"),
                    on = qt("name"),
                    sn = qt("clientId", "cid"),
                    cn = qt("clientIdTime"),
                    un = qt("storedClientId"),
                    ln = $t("userId", "uid"),
                    dn = qt("trackingId", "tid"),
                    fn = qt("cookieName", void 0, "_ga"),
                    gn = qt("cookieDomain"),
                    hn = qt("cookiePath", void 0, "/"),
                    vn = qt("cookieExpires", void 0, 63072000),
                    pn = qt("cookieUpdate", void 0, !0),
                    mn = qt("legacyCookieDomain"),
                    wn = qt("legacyHistoryImport", void 0, !0),
                    yn = qt("storage", void 0, "cookie"),
                    bn = qt("allowLinker", void 0, !1),
                    kn = qt("allowAnchor", void 0, !0),
                    _n = qt("sampleRate", "sf", 100),
                    On = qt("siteSpeedSampleRate", void 0, 1),
                    Sn = qt("alwaysSendReferrer", void 0, !1),
                    xn = qt("_gid", "_gid"),
                    Tn = qt("_gcn"),
                    Cn = qt("useAmpClientId"),
                    An = qt("_gclid"),
                    In = qt("_gt"),
                    Rn = qt("_ge", void 0, 7776000000),
                    En = qt("_gclsrc"),
                    jn = qt("storeGac", void 0, !0),
                    Nn = $t("transportUrl"),
                    Ln = $t("_r", "_r"),
                    Pn = $t("_dp"),
                    Dn = function(t, e) {
                        this.V = 10000, this.fa = t, this.$ = !1, this.oa = e, this.ea = 1;
                    },
                    Un = function(t, e) {
                        var n;
                        if (t.fa && t.$) {
                            return 0;
                        }
                        if (t.$ = !0, e) {
                            if (t.oa && Lt(e, t.oa)) {
                                return Lt(e, t.oa);
                            }
                            if (0 == e.get(On)) {
                                return 0;
                            }
                        }
                        return 0 == t.V ? 0 : (void 0 === n && (n = It()), 0 == n % t.V ? Math.floor(n / t.V) % t.ea + 1 : 0);
                    },
                    Mn = function(t) {
                        var e = Math.min(Lt(t, On), 100);
                        return !(k(Nt(t, sn)) % 100 >= e);
                    },
                    $n = function(t) {
                        var e = {};
                        if (Vn(e) || qn(e)) {
                            var n = e[ye];
                            void 0 == n || 1 / 0 == n || isNaN(n) || (0 < n ? (Fn(e, ke), Fn(e, Se), Fn(e, Oe), Fn(e, be), Fn(e, _e), Fn(e, xe), Fn(e, Te), Q(function() {
                                t(e);
                            }, 10)) : P(Y, "load", function() {
                                $n(t);
                            }, !1));
                        }
                    },
                    Vn = function(t) {
                        var e = Y.performance || Y.webkitPerformance;
                        if (!(e = e && e.timing)) {
                            return !1;
                        }
                        var n = e.navigationStart;
                        return 0 != n && (t[ye] = e.loadEventStart - n, t[ke] = e.domainLookupEnd - e.domainLookupStart, t[Se] = e.connectEnd - e.connectStart, t[Oe] = e.responseStart - e.requestStart, t[be] = e.responseEnd - e.responseStart, t[_e] = e.fetchStart - n, t[xe] = e.domInteractive - n, t[Te] = e.domContentLoadedEventStart - n, !0);
                    },
                    qn = function(t) {
                        if (Y.top != Y) {
                            return !1;
                        }
                        var e = Y.external,
                            n = e && e.onloadT;
                        return e && !e.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && e.setPageReadyTime(), void 0 != n && (t[ye] = n, !0);
                    },
                    Fn = function(t, e) {
                        var n = t[e];
                        (isNaN(n) || 1 / 0 == n || 0 > n) && (t[e] = void 0);
                    },
                    Gn = function(t) {
                        return function(e) {
                            if ("pageview" == e.get(Jt) && !t.I) {
                                t.I = !0;
                                var n = Mn(e),
                                    i = 0 < V(e.get(ne), "gclid").length;
                                (n || i) && $n(function(e) {
                                    n && t.send("timing", e), i && t.send("adtiming", e);
                                });
                            }
                        };
                    },
                    Hn = !1,
                    Bn = function(e) {
                        if ("cookie" == Nt(e, yn)) {
                            if (e.get(pn) || Nt(e, un) != Nt(e, sn)) {
                                var n = 1000 * Lt(e, vn);
                                zn(e, sn, fn, n);
                            }
                            if (zn(e, xn, Tn, 86400000), e.get(jn)) {
                                var i = e.get(An);
                                if (i) {
                                    var a = Math.min(Lt(e, Rn), 1000 * Lt(e, vn));
                                    a = Math.min(a, 1000 * Lt(e, In) + a - (new Date).getTime()), e.data.set(Rn, a);
                                    var r = e.get(In),
                                        o = e.get(En);
                                    n = ei(Nt(e, hn));
                                    var s = Qn(Nt(e, gn));
                                    e = Nt(e, dn), o && "aw.ds" != o || (i = ["1", r, rt(i)].join("."), 0 < a && at("_gac_" + rt(e), i, n, s, e, a)), ii({});
                                }
                            } else {
                                t(75);
                            }
                        }
                    },
                    zn = function(e, n, i, a) {
                        var r = Wn(e, n);
                        if (r) {
                            i = Nt(e, i);
                            var o = ei(Nt(e, hn)),
                                s = Qn(Nt(e, gn)),
                                c = Nt(e, dn);
                            if ("auto" != s) {
                                at(i, r, o, s, c, a) && (Hn = !0);
                            } else {
                                t(32);
                                for (var u = ti(), l = 0; l < u.length; l++) {
                                    if (s = u[l], e.data.set(gn, s), r = Wn(e, n), at(i, r, o, s, c, a)) {
                                        return void(Hn = !0);
                                    }
                                }
                                e.data.set(gn, "auto");
                            }
                        }
                    },
                    Kn = function(t) {
                        if ("cookie" == Nt(t, yn) && !Hn && (Bn(t), !Hn)) {
                            throw "abort";
                        }
                    },
                    Xn = function(e) {
                        if (e.get(wn)) {
                            var n = Nt(e, gn),
                                i = Nt(e, mn) || q(),
                                a = g("__utma", i, n);
                            a && (t(19), e.set(De, (new Date).getTime(), !0), e.set(Le, a.R), (n = g("__utmz", i, n)) && a.hash == n.hash && e.set(Pe, n.R));
                        }
                    },
                    Wn = function(t, e) {
                        e = rt(Nt(t, e));
                        var n = Qn(Nt(t, gn)).split(".").length;
                        return t = ni(Nt(t, hn)), 1 < t && (n += "-" + t), e ? ["GA1", n, e].join(".") : "";
                    },
                    Jn = function(t, e) {
                        return Yn(e, Nt(t, gn), Nt(t, hn));
                    },
                    Yn = function(e, n, i) {
                        if (!e || 1 > e.length) {
                            t(12);
                        } else {
                            for (var a = [], r = 0; r < e.length; r++) {
                                var o = e[r],
                                    s = o.split("."),
                                    c = s.shift();
                                ("GA1" == c || "1" == c) && 1 < s.length ? (o = s.shift().split("-"), 1 == o.length && (o[1] = "1"), o[0] *= 1, o[1] *= 1, s = {
                                    H: o,
                                    s: s.join(".")
                                }) : s = Bt.test(o) ? {
                                    H: [0, 0],
                                    s: o
                                } : void 0, s && a.push(s);
                            }
                            if (1 == a.length) {
                                return t(13), a[0].s;
                            }
                            if (0 != a.length) {
                                return t(14), a = Zn(a, Qn(n).split(".").length, 0), 1 == a.length ? a[0].s : (a = Zn(a, ni(i), 1), 1 < a.length && t(41), a[0] && a[0].s);
                            }
                            t(12);
                        }
                    },
                    Zn = function(t, e, n) {
                        for (var i, a = [], r = [], o = 0; o < t.length; o++) {
                            var s = t[o];
                            s.H[n] == e ? a.push(s) : void 0 == i || s.H[n] < i ? (r = [s], i = s.H[n]) : s.H[n] == i && r.push(s);
                        }
                        return 0 < a.length ? a : r;
                    },
                    Qn = function(t) {
                        return 0 == t.indexOf(".") ? t.substr(1) : t;
                    },
                    ti = function() {
                        var t = [],
                            e = q().split(".");
                        if (4 == e.length) {
                            var n = e[e.length - 1];
                            if (parseInt(n, 10) == n) {
                                return ["none"];
                            }
                        }
                        for (n = e.length - 2; 0 <= n; n--) {
                            t.push(e.slice(n).join("."));
                        }
                        return t.push("none"), t;
                    },
                    ei = function(t) {
                        return t ? (1 < t.length && t.lastIndexOf("/") == t.length - 1 && (t = t.substr(0, t.length - 1)), 0 != t.indexOf("/") && (t = "/" + t), t) : "/";
                    },
                    ni = function(t) {
                        return t = ei(t), "/" == t ? 1 : t.split("/").length;
                    },
                    ii = function(e) {
                        e.ta && t(77), e.na && t(74), e.pa && t(73), e.ua && t(69);
                    },
                    ai = new RegExp(/^https?:\/\/([^\/:]+)/),
                    ri = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,
                    oi = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/,
                    si = function(e) {
                        t(48), this.target = e, this.T = !1;
                    };
                si.prototype.ca = function(t, e) {
                    if (t.tagName) {
                        if ("a" == t.tagName.toLowerCase()) {
                            return void(t.href && (t.href = ci(this, t.href, e)));
                        }
                        if ("form" == t.tagName.toLowerCase()) {
                            return ui(this, t);
                        }
                    }
                    if ("string" == typeof t) {
                        return ci(this, t, e);
                    }
                };
                var ci = function(t, e, n) {
                        var i = ri.exec(e);
                        i && 3 <= i.length && (e = i[1] + (i[3] ? i[2] + i[3] : "")), (i = oi.exec(e)) && 3 <= i.length && (e = i[1] + (i[3] ? i[2] + i[3] : "")), t = t.target.get("linkerParam");
                        var a = e.indexOf("?");
                        return i = e.indexOf("#"), n ? e += (-1 == i ? "#" : "&") + t : (n = -1 == a ? "?" : "&", e = -1 == i ? e + (n + t) : e.substring(0, i) + n + t + e.substring(i)), e = e.replace(/&+_ga=/, "&_ga="), e = e.replace(/&+_gac=/, "&_gac=");
                    },
                    ui = function(t, e) {
                        if (e && e.action) {
                            if ("get" == e.method.toLowerCase()) {
                                t = t.target.get("linkerParam").split("&");
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n].split("="),
                                        a = i[1];
                                    i = i[0];
                                    for (var r = e.childNodes || [], o = !1, s = 0; s < r.length; s++) {
                                        if (r[s].name == i) {
                                            r[s].setAttribute("value", a), o = !0;
                                            break;
                                        }
                                    }
                                    o || (r = Z.createElement("input"), r.setAttribute("type", "hidden"), r.setAttribute("name", i), r.setAttribute("value", a), e.appendChild(r));
                                }
                            } else {
                                "post" == e.method.toLowerCase() && (e.action = ci(t, e.action));
                            }
                        }
                    };
                si.prototype.S = function(e, n, i) {
                    function a(i) {
                        try {
                            i = i || Y.event;
                            t: {
                                var a = i.target || i.srcElement;
                                for (i = 100; a && 0 < i;) {
                                    if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) {
                                        var o = a;
                                        break t;
                                    }
                                    a = a.parentNode, i--;
                                }
                                o = {};
                            }("http:" == o.protocol || "https:" == o.protocol) && w(e, o.hostname || "") && o.href && (o.href = ci(r, o.href, n));
                        } catch (e) {
                            t(26);
                        }
                    }
                    var r = this;
                    this.T || (this.T = !0, P(Z, "mousedown", a, !1), P(Z, "keyup", a, !1)), i && P(Z, "submit", function(t) {
                        if (t = t || Y.event, (t = t.target || t.srcElement) && t.action) {
                            var n = t.action.match(ai);
                            n && w(e, n[1]) && ui(r, t);
                        }
                    });
                };
                var li, di = /^(GTM|OPT)-[A-Z0-9]+$/,
                    fi = /;_gaexp=[^;]*/g,
                    gi = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
                    hi = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,
                    vi = function(t) {
                        function e(t, e) {
                            e && (n += "&" + t + "=" + L(e));
                        }
                        var n = "https://www.google-analytics.com/gtm/js?id=" + L(t.id);
                        return "dataLayer" != t.B && e("l", t.B), e("t", t.target), e("cid", t.clientId), e("cidt", t.ka), e("gac", t.la), e("aip", t.ia), t.sync && e("m", "sync"), e("cycle", t.G), t.qa && e("gclid", t.qa), hi.test(Z.referrer) && e("cb", String(At())), n;
                    },
                    pi = function(t, e, n) {
                        this.aa = e, (e = n) || (e = (e = Nt(t, on)) && "t0" != e ? ki.test(e) ? "_gat_" + rt(Nt(t, dn)) : "_gat_" + rt(e) : "_gat"), this.Y = e;
                    },
                    mi = function(e, n) {
                        var i = n.get(Ze);
                        n.set(Ze, function(t) {
                            wi(e, t, Fe), wi(e, t, Ge);
                            var n = i(t);
                            return yi(e, t), n;
                        });
                        var a = n.get(Qe);
                        n.set(Qe, function(n) {
                            var i = a(n);
                            if (n.get(Fe)) {
                                if (ut()) {
                                    t(80);
                                    var r = {
                                        U: bi(e, n, 1),
                                        google: bi(e, n, 2),
                                        count: 0
                                    };
                                    kt("https://stats.g.doubleclick.net/j/collect", r.U, r);
                                } else {
                                    j(bi(e, n, 0));
                                }
                                n.set(Fe, "", !0);
                            }
                            return i;
                        });
                    },
                    wi = function(t, e, n) {
                        e.get(n) || ("1" == it(t.Y)[0] ? e.set(n, "", !0) : e.set(n, "" + At(), !0));
                    },
                    yi = function(t, e) {
                        e.get(Fe) && at(t.Y, "1", e.get(hn), e.get(gn), e.get(dn), 60000);
                    },
                    bi = function(t, e, n) {
                        var i = new B,
                            a = function(t) {
                                Ut(t).F && i.set(Ut(t).F, e.get(t));
                            };
                        a(Kt), a(Xt), a(dn), a(sn), a(Fe), 0 != n && 1 != n || (a(ln), a(Ge), a(xn)), i.set(Ut(Ve).F, S(e));
                        var r = "";
                        return i.map(function(t, e) {
                            r += L(t) + "=", r += L("" + e) + "&";
                        }), r += "z=" + At(), 0 == n ? r = t.aa + r : 1 == n ? r = "t=dc&aip=1&_r=3&" + r : 2 == n && (r = "t=sr&aip=1&_r=4&slf_rd=1&" + r), r;
                    },
                    ki = /^gtm\d+$/,
                    _i = function(t, e) {
                        if (t = t.b, !t.get("dcLoaded")) {
                            var n = new _(x(t));
                            n.set(29), t.set(qe, n.w), e = e || {};
                            var i;
                            e[fn] && (i = rt(e[fn])), e = new pi(t, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", i), mi(e, t), t.set("dcLoaded", !0);
                        }
                    },
                    Oi = function(e) {
                        if (!e.get("dcLoaded") && "cookie" == e.get(yn)) {
                            var n = new pi(e);
                            wi(n, e, Fe), wi(n, e, Ge), yi(n, e), e.get(Fe) && (e.set(Ln, 1, !0), ut() ? (t(79), e.set(Nn, wt() + "/j/collect", !0), e.set(Pn, {
                                U: bi(n, e, 1),
                                google: bi(n, e, 2),
                                count: 0
                            }, !0)) : e.set(Nn, wt() + "/r/collect", !0));
                        }
                    },
                    Si = function() {
                        var t = Y.gaGlobal = Y.gaGlobal || {};
                        return t.hid = t.hid || At();
                    },
                    xi = function(t, e, n) {
                        if (!li) {
                            var i = Z.location.hash,
                                a = Y.name,
                                r = /^#?gaso=([^&]*)/;
                            (a = (i = (i = i && i.match(r) || a && a.match(r)) ? i[1] : it("GASO")[0] || "") && i.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (at("GASO", "" + i, n, e, t, 0), window._udo || (window._udo = e), window._utcp || (window._utcp = n), t = a[1], U("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (t ? "prefix=" + t + "&" : "") + At(), "_gasojs")), li = !0;
                        }
                    },
                    Ti = function(t) {
                        return t ? (1 * t).toFixed(3) : "0";
                    },
                    Ci = function(e) {
                        var n = Y.performance;
                        if (n && n.getEntriesByName) {
                            t(35);
                            var i = "https://www.google-analytics.com/analytics.js?wpid=" + e;
                            U(i, void 0, void 0, function() {
                                try {
                                    var a = 1,
                                        r = n.getEntriesByName("https://www.google-analytics.com/analytics.js");
                                    r && 0 != r.length || (r = n.getEntriesByName("http://www.google-analytics.com/analytics.js"), a = 0);
                                    var o = n.getEntriesByName(i);
                                    if (r && 1 == r.length && o && 1 == o.length) {
                                        t(37);
                                        var s = r[0],
                                            c = o[0],
                                            u = {
                                                tid: e,
                                                ad: Ti(s.duration),
                                                bd: Ti(c.duration),
                                                ar: Ti(s.responseEnd - s.requestStart),
                                                br: Ti(c.responseEnd - c.requestStart),
                                                an: Ti(s.domainLookupEnd - s.domainLookupStart),
                                                bn: Ti(c.domainLookupEnd - c.domainLookupStart),
                                                ac: Ti(s.connectEnd - s.connectStart),
                                                bc: Ti(c.connectEnd - c.connectStart),
                                                as: a
                                            };
                                        a = [], a.push("_v=j66"), a.push("id=10");
                                        for (var l in u) {
                                            u.hasOwnProperty(l) && a.push(l + "=" + L(u[l]));
                                        }
                                        a.push("z=" + At()), _t("https://www.google-analytics.com/u/d", a.join("&"), N);
                                    }
                                } catch (t) {}
                            });
                        }
                    },
                    Ai = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
                    Ii = function(t) {
                        function d(t, e) {
                            g.b.data.set(t, e);
                        }

                        function f(t, e) {
                            d(t, e), g.filters.add(t);
                        }
                        var g = this;
                        this.b = new Rt, this.filters = new Ct, d(on, t[on]), d(dn, R(t[dn])), d(fn, t[fn]), d(gn, t[gn] || q()), d(hn, t[hn]), d(vn, t[vn]), d(pn, t[pn]), d(mn, t[mn]), d(wn, t[wn]), d(bn, t[bn]), d(kn, t[kn]), d(_n, t[_n]), d(On, t[On]), d(Sn, t[Sn]), d(yn, t[yn]), d(ln, t[ln]), d(cn, t[cn]), d(Cn, t[Cn]), d(jn, t[jn]), d(Kt, 1), d(Xt, "j66"), f(He, n), f(rn, N), f(Be, s), f(ze, i), f(Ke, u), f(Xe, Kn), f(We, Xn), f(Je, e), f(Ye, l), f(tn, o), f(en, c), f(an, Oi), f(Ze, a), f(Qe, r), f(nn, Gn(this)), Ei(this.b), Ri(this.b, t[sn]), this.b.set(Wt, Si()), xi(this.b.get(dn), this.b.get(gn), this.b.get(hn)), this.ra = new Dn(!0, "gaexp10");
                    },
                    Ri = function(e, n) {
                        var i = Nt(e, fn);
                        if (e.data.set(Tn, "_ga" == i ? "_gid" : i + "_gid"), "cookie" == Nt(e, yn)) {
                            if (Hn = !1, i = it(Nt(e, fn)), !(i = Jn(e, i))) {
                                i = Nt(e, gn);
                                var a = Nt(e, mn) || q();
                                i = g("__utma", a, i), void 0 != i ? (t(10), i = i.O[1] + "." + i.O[2]) : i = void 0;
                            }
                            if (i && (Hn = !0), a = i && !e.get(pn)) {
                                if (a = i.split("."), 2 != a.length) {
                                    a = !1;
                                } else {
                                    if (a = Number(a[1])) {
                                        var r = Lt(e, vn);
                                        a = a + r < (new Date).getTime() / 1000;
                                    } else {
                                        a = !1;
                                    }
                                }
                            }
                            if (a && (i = void 0), i && (e.data.set(un, i), e.data.set(sn, i), i = it(Nt(e, Tn)), (i = Jn(e, i)) && e.data.set(xn, i)), e.get(jn) && (i = e.get(An), a = e.get(En), !i || a && "aw.ds" != a)) {
                                if (i = {}, Z) {
                                    a = [], r = Z.cookie.split(";");
                                    for (var o = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, s = 0; s < r.length; s++) {
                                        var c = r[s].match(o);
                                        c && a.push({
                                            ja: c[1],
                                            value: c[2]
                                        });
                                    }
                                    if (r = {}, a && a.length) {
                                        for (o = 0; o < a.length; o++) {
                                            s = a[o].value.split("."), "1" != s[0] || 3 != s.length ? i && (i.na = !0) : s[1] && (r[a[o].ja] ? i && (i.pa = !0) : r[a[o].ja] = [], r[a[o].ja].push({
                                                timestamp: s[1],
                                                qa: s[2]
                                            }));
                                        }
                                    }
                                    a = r;
                                } else {
                                    a = {};
                                }
                                a = a[Nt(e, dn)], ii(i), a && 0 != a.length && (i = a[0], e.data.set(In, i.timestamp), e.data.set(An, i.qa));
                            }
                        }
                        if (e.get(pn)) {
                            t: if (a = $("_ga", e.get(kn))) {
                                if (e.get(bn)) {
                                    if (-1 == (i = a.indexOf("."))) {
                                        t(22);
                                    } else {
                                        if (r = a.substring(0, i), o = a.substring(i + 1), i = o.indexOf("."), a = o.substring(0, i), o = o.substring(i + 1), "1" == r) {
                                            if (i = o, y(i, a)) {
                                                t(23);
                                                break t;
                                            }
                                        } else {
                                            if ("2" != r) {
                                                t(22);
                                                break t;
                                            }
                                            if (i = o.indexOf("-"), r = "", 0 < i ? (r = o.substring(0, i), i = o.substring(i + 1)) : i = o.substring(1), y(r + i, a)) {
                                                t(53);
                                                break t;
                                            }
                                            r && (t(2), e.data.set(xn, r));
                                        }
                                        t(11), e.data.set(sn, i), (i = $("_gac", e.get(kn))) && (i = i.split("."), "1" != i[0] || 4 != i.length ? t(72) : y(i[3], i[1]) ? t(71) : (e.data.set(An, i[3]), e.data.set(In, i[2]), t(70)));
                                    }
                                } else {
                                    t(21);
                                }
                            }
                        }
                        n && (t(9), e.data.set(sn, L(n))), e.get(sn) || ((n = (n = Y.gaGlobal && Y.gaGlobal.vid) && -1 != n.search(Ht) ? n : void 0) ? (t(17), e.data.set(sn, n)) : (t(8), e.data.set(sn, E()))), e.get(xn) || (t(3), e.data.set(xn, E())), Bn(e);
                    },
                    Ei = function(e) {
                        var n = Y.navigator,
                            i = Y.screen,
                            a = Z.location;
                        if (e.set(ie, G(e.get(Sn), e.get(Cn))), a) {
                            var r = a.pathname || "";
                            "/" != r.charAt(0) && (t(31), r = "/" + r), e.set(ne, a.protocol + "//" + a.hostname + r + a.search);
                        }
                        i && e.set(ce, i.width + "x" + i.height), i && e.set(se, i.colorDepth + "-bit"), i = Z.documentElement;
                        var o = (r = Z.body) && r.clientWidth && r.clientHeight,
                            s = [];
                        if (i && i.clientWidth && i.clientHeight && ("CSS1Compat" === Z.compatMode || !o) ? s = [i.clientWidth, i.clientHeight] : o && (s = [r.clientWidth, r.clientHeight]), i = 0 >= s[0] || 0 >= s[1] ? "" : s.join("x"), e.set(ue, i), e.set(de, f()), e.set(oe, Z.characterSet || Z.charset), e.set(le, n && "function" == typeof n.javaEnabled && n.javaEnabled() || !1), e.set(re, (n && (n.language || n.browserLanguage) || "").toLowerCase()), e.data.set(An, $("gclid", !0)), e.data.set(En, $("gclsrc", !0)), e.data.set(In, Math.round((new Date).getTime() / 1000)), a && e.get(kn) && (n = Z.location.hash)) {
                            for (n = n.split(/[?&#]+/), a = [], i = 0; i < n.length; ++i) {
                                (I(n[i], "utm_id") || I(n[i], "utm_campaign") || I(n[i], "utm_source") || I(n[i], "utm_medium") || I(n[i], "utm_term") || I(n[i], "utm_content") || I(n[i], "gclid") || I(n[i], "dclid") || I(n[i], "gclsrc")) && a.push(n[i]);
                            }
                            0 < a.length && (n = "#" + a.join("&"), e.set(ne, e.get(ne) + n));
                        }
                    };
                Ii.prototype.get = function(t) {
                    return this.b.get(t);
                }, Ii.prototype.set = function(t, e) {
                    this.b.set(t, e);
                };
                var ji = {
                    pageview: [ae],
                    event: [fe, ge, he, ve],
                    social: [pe, me, we],
                    timing: [Ce, Ae, Re, Ie]
                };
                Ii.prototype.send = function(t) {
                    if (!(1 > arguments.length)) {
                        if ("string" == typeof arguments[0]) {
                            var e = arguments[0],
                                n = [].slice.call(arguments, 1);
                        } else {
                            e = arguments[0] && arguments[0][Jt], n = arguments;
                        }
                        e && (n = H(ji[e] || [], n), n[Jt] = e, this.b.set(n, void 0, !0), this.filters.D(this.b), this.b.data.m = {}, Un(this.ra, this.b) && Ci(this.b.get(dn)));
                    }
                }, Ii.prototype.ma = function(t, e) {
                    var n = this;
                    qi(t, n, e) || (Gi(t, function() {
                        qi(t, n, e);
                    }), Fi(String(n.get(on)), t, void 0, e, !0));
                };
                var Ni, Li, Pi, Di, Ui = function(t) {
                        return "prerender" != Z.visibilityState && (t(), !0);
                    },
                    Mi = function(e) {
                        if (!Ui(e)) {
                            t(16);
                            var n = !1,
                                i = function() {
                                    if (!n && Ui(e)) {
                                        n = !0;
                                        var t = i,
                                            a = Z;
                                        a.removeEventListener ? a.removeEventListener("visibilitychange", t, !1) : a.detachEvent && a.detachEvent("onvisibilitychange", t);
                                    }
                                };
                            P(Z, "visibilitychange", i);
                        }
                    },
                    $i = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
                    Vi = function(t) {
                        if (T(t[0])) {
                            this.u = t[0];
                        } else {
                            var e = $i.exec(t[0]);
                            if (null != e && 4 == e.length && (this.c = e[1] || "t0", this.K = e[2] || "", this.C = e[3], this.a = [].slice.call(t, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (A(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), e = t[1], t = t[2], !this.C) {
                                throw "abort";
                            }
                            if (this.i && (!A(e) || "" == e)) {
                                throw "abort";
                            }
                            if (this.g && (!A(e) || "" == e || !T(t))) {
                                throw "abort";
                            }
                            if (b(this.c) || b(this.K)) {
                                throw "abort";
                            }
                            if (this.g && "t0" != this.c) {
                                throw "abort";
                            }
                        }
                    };
                Ni = new B, Pi = new B, Di = new B, Li = {
                    ec: 45,
                    ecommerce: 46,
                    linkid: 47
                };
                var qi = function(t, e, n) {
                        e == Xi || e.get(on);
                        var i = Ni.get(t);
                        return !!T(i) && (e.plugins_ = e.plugins_ || new B, !!e.plugins_.get(t) || (e.plugins_.set(t, new i(e, n || {})), !0));
                    },
                    Fi = function(e, n, i, a, r) {
                        if (!T(Ni.get(n)) && !Pi.get(n)) {
                            if (Li.hasOwnProperty(n) && t(Li[n]), di.test(n)) {
                                if (t(52), !(e = Xi.j(e))) {
                                    return !0;
                                }
                                i = a || {}, a = {
                                    id: n,
                                    B: i.dataLayer || "dataLayer",
                                    ia: !!e.get("anonymizeIp"),
                                    sync: r,
                                    G: !1
                                }, e.get("&gtm") == n && (a.G = !0);
                                var o = String(e.get("name"));
                                "t0" != o && (a.target = o), nt(String(e.get("trackingId"))) || (a.clientId = String(e.get(sn)), a.ka = Number(e.get(cn)), i = i.palindrome ? gi : fi, i = (i = Z.cookie.replace(/^|(; +)/g, ";").match(i)) ? i.sort().join("").substring(1) : void 0, a.la = i, a.qa = V(e.b.get(ne) || "", "gclid")), e = a.B, i = (new Date).getTime(), Y[e] = Y[e] || [], i = {
                                    "gtm.start": i
                                }, r || (i.event = "gtm.js"), Y[e].push(i), i = vi(a);
                            }!i && Li.hasOwnProperty(n) ? (t(39), i = n + ".js") : t(43), i && (i && 0 <= i.indexOf("/") || (i = (zt || M() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + i), a = zi(i), e = a.protocol, i = Z.location.protocol, ("https:" == e || e == i || ("http:" != e ? 0 : "http:" == i)) && Bi(a) && (U(a.url, void 0, r), Pi.set(n, !0)));
                        }
                    },
                    Gi = function(t, e) {
                        var n = Di.get(t) || [];
                        n.push(e), Di.set(t, n);
                    },
                    Hi = function(t, e) {
                        Ni.set(t, e), e = Di.get(t) || [];
                        for (var n = 0; n < e.length; n++) {
                            e[n]();
                        }
                        Di.set(t, []);
                    },
                    Bi = function(t) {
                        var e = zi(Z.location.href);
                        return !!I(t.url, "https://www.google-analytics.com/gtm/js?id=") || !(t.query || 0 <= t.url.indexOf("?") || 0 <= t.path.indexOf("://")) && (t.host == e.host && t.port == e.port || (e = "http:" == t.protocol ? 80 : 443, !("www.google-analytics.com" != t.host || (t.port || e) != e || !I(t.path, "/plugins/"))));
                    },
                    zi = function(t) {
                        function e(t) {
                            var e = (t.hostname || "").split(":")[0].toLowerCase(),
                                n = (t.protocol || "").toLowerCase();
                            return n = 1 * t.port || ("http:" == n ? 80 : "https:" == n ? 443 : ""), t = t.pathname || "", I(t, "/") || (t = "/" + t), [e, "" + n, t];
                        }
                        var n = Z.createElement("a");
                        n.href = Z.location.href;
                        var i = (n.protocol || "").toLowerCase(),
                            a = e(n),
                            r = n.search || "",
                            o = i + "//" + a[0] + (a[1] ? ":" + a[1] : "");
                        return I(t, "//") ? t = i + t : I(t, "/") ? t = o + t : !t || I(t, "?") ? t = o + a[2] + (t || r) : 0 > t.split("/")[0].indexOf(":") && (t = o + a[2].substring(0, a[2].lastIndexOf("/")) + "/" + t), n.href = t, i = e(n), {
                            protocol: (n.protocol || "").toLowerCase(),
                            host: i[0],
                            port: i[1],
                            path: i[2],
                            query: n.search || "",
                            url: t || ""
                        };
                    },
                    Ki = {
                        ga: function() {
                            Ki.f = [];
                        }
                    };
                Ki.ga(), Ki.D = function(t) {
                    var e = Ki.J.apply(Ki, arguments);
                    for (e = Ki.f.concat(e), Ki.f = []; 0 < e.length && !Ki.v(e[0]) && (e.shift(), !(0 < Ki.f.length));) {}
                    Ki.f = Ki.f.concat(e);
                }, Ki.J = function(t) {
                    for (var e = [], n = 0; n < arguments.length; n++) {
                        try {
                            var i = new Vi(arguments[n]);
                            i.g ? Hi(i.a[0], i.a[1]) : (i.i && (i.ha = Fi(i.c, i.a[0], i.X, i.W)), e.push(i));
                        } catch (t) {}
                    }
                    return e;
                }, Ki.v = function(t) {
                    try {
                        if (t.u) {
                            t.u.call(Y, Xi.j("t0"));
                        } else {
                            var e = t.c == Gt ? Xi : Xi.j(t.c);
                            if (t.A) {
                                if ("t0" == t.c && null === (e = Xi.create.apply(Xi, t.a))) {
                                    return !0;
                                }
                            } else {
                                if (t.ba) {
                                    Xi.remove(t.c);
                                } else {
                                    if (e) {
                                        if (t.i) {
                                            if (t.ha && (t.ha = Fi(t.c, t.a[0], t.X, t.W)), !qi(t.a[0], e, t.W)) {
                                                return !0;
                                            }
                                        } else {
                                            if (t.K) {
                                                var n = t.C,
                                                    i = t.a,
                                                    a = e.plugins_.get(t.K);
                                                a[n].apply(a, i);
                                            } else {
                                                e[t.C].apply(e, t.a);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (t) {}
                };
                var Xi = function(e) {
                    t(1), Ki.D.apply(Ki, [arguments]);
                };
                Xi.h = {}, Xi.P = [], Xi.L = 0, Xi.answer = 42;
                var Wi = [dn, gn, on];
                Xi.create = function(e) {
                    var n = H(Wi, [].slice.call(arguments));
                    n[on] || (n[on] = "t0");
                    var i = "" + n[on];
                    if (Xi.h[i]) {
                        return Xi.h[i];
                    }
                    t: {
                        if (n[Cn]) {
                            if (t(67), n[yn] && "cookie" != n[yn]) {
                                var a = !1;
                                break t;
                            }
                            if (void 0 !== J) {
                                n[sn] || (n[sn] = J);
                            } else {
                                e: {
                                    a = String(n[gn] || q());
                                    var r = String(n[hn] || "/"),
                                        o = it(String(n[fn] || "_ga"));
                                    if (!(a = Yn(o, a, r)) || Ht.test(a)) {
                                        a = !0;
                                    } else {
                                        if (a = it("AMP_TOKEN"), 0 == a.length) {
                                            a = !0;
                                        } else {
                                            if (1 == a.length && ("$RETRIEVING" == (a = decodeURIComponent(a[0])) || "$OPT_OUT" == a || "$ERROR" == a || "$NOT_FOUND" == a)) {
                                                a = !0;
                                                break e;
                                            }
                                            a = !1;
                                        }
                                    }
                                }
                                if (a && gt(ft, String(n[dn]))) {
                                    a = !0;
                                    break t;
                                }
                            }
                        }
                        a = !1;
                    }
                    return a ? null : (n = new Ii(n), Xi.h[i] = n, Xi.P.push(n), n);
                }, Xi.remove = function(t) {
                    for (var e = 0; e < Xi.P.length; e++) {
                        if (Xi.P[e].get(on) == t) {
                            Xi.P.splice(e, 1), Xi.h[t] = null;
                            break;
                        }
                    }
                }, Xi.j = function(t) {
                    return Xi.h[t];
                }, Xi.getAll = function() {
                    return Xi.P.slice(0);
                }, Xi.N = function() {
                    "ga" != Gt && t(49);
                    var e = Y[Gt];
                    if (!e || 42 != e.answer) {
                        Xi.L = e && e.l, Xi.loaded = !0;
                        var n = Y[Gt] = Xi;
                        if (d("create", n, n.create), d("remove", n, n.remove), d("getByName", n, n.j, 5), d("getAll", n, n.getAll, 6), n = Ii.prototype, d("get", n, n.get, 7), d("set", n, n.set, 4), d("send", n, n.send), d("requireSync", n, n.ma), n = Rt.prototype, d("get", n, n.get), d("set", n, n.set), !M() && !zt) {
                            t: {
                                n = Z.getElementsByTagName("script");
                                for (var i = 0; i < n.length && 100 > i; i++) {
                                    var a = n[i].src;
                                    if (a && 0 == a.indexOf("https://www.google-analytics.com/analytics")) {
                                        n = !0;
                                        break t;
                                    }
                                }
                                n = !1;
                            }
                            n && (zt = !0);
                        }
                        M() || zt || !Un(new Dn) || (zt = !0), (Y.gaplugins = Y.gaplugins || {}).Linker = si, n = si.prototype, Hi("linker", si), d("decorate", n, n.ca, 20), d("autoLink", n, n.S, 25), Hi("displayfeatures", _i), Hi("adfeatures", _i), e = e && e.q, C(e) ? Ki.D.apply(Xi, e) : t(50);
                    }
                }, Xi.da = function() {
                    for (var t = Xi.getAll(), e = 0; e < t.length; e++) {
                        t[e].get(on);
                    }
                };
                var Ji = Xi.N,
                    Yi = Y[Gt];
                Yi && Yi.r ? Ji() : Mi(Ji), Mi(function() {
                    Ki.D(["provide", "render", N]);
                });
            }(window);
        var a = {
                isDefined: function(t) {
                    return void 0 !== t && null !== t;
                },
                isString: function(t) {
                    return void 0 !== t && "string" == typeof t;
                },
                stringIsNotEmpty: function(t) {
                    return this.isString(t) && t.replace(/^(\s+)|(\s+)$/gm, "").replace(/\s+/gm, " ").length > 0;
                },
                isEmptyString: function(t) {
                    return void 0 !== t && "string" == typeof t && !this.stringIsNotEmpty(t);
                },
                isArray: function(t) {
                    return t && t.constructor === Array;
                },
                arrayIsNotEmpty: function(t) {
                    return this.isArray(t) && t.length > 0;
                },
                isObject: function(t) {
                    return t && t.constructor === Object;
                },
                isFunction: function(t) {
                    return void 0 !== t && t.constructor === Function;
                },
                isNumber: function(t) {
                    return Number(t) === t;
                },
                isInt: function(t) {
                    return this.isNumber(t) && t % 1 == 0;
                },
                isRegExp: function(t) {
                    return void 0 !== t && t.constructor === RegExp;
                },
                isNumericString: function(t) {
                    return this.isString(t) && !isNaN(t);
                },
                isBoolean: function(t) {
                    return void 0 !== t && t.constructor == Boolean;
                },
                isJson: function(t) {
                    try {
                        t = JSON.parse(t);
                    } catch (t) {
                        return !1;
                    }
                    return "object" === (void 0 === t ? "undefined" : i(t)) && null !== t;
                },
                isUrl: function(t) {
                    return /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/gi.test(t);
                },
                isNotMetric: function(t) {
                    return !this.isDefined(t) || this.isString(t) && !this.stringIsNotEmpty(t);
                },
                isElement: function(t) {
                    return t && 1 === t.nodeType && t && "object" == (void 0 === t ? "undefined" : i(t)) && Object.prototype.toString.call(t).indexOf("Element") > -1;
                }
            },
            r = {
                associate: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = {},
                        i = void 0,
                        a = void 0;
                    for (a in e) {
                        e[a].required && (i = this.keyValueObject(e[a], t[a]), n = this.extend(n, i));
                    }
                    for (a in t) {
                        e.hasOwnProperty(a) && (i = this.keyValueObject(e[a], t[a]), n = this.extend(n, i));
                    }
                    return n;
                },
                keyValueObject: function(t, e) {
                    var n = {},
                        i = t.keys,
                        r = t.required || !1,
                        o = a.isNotMetric(t.defaultValue) ? "none" : t.defaultValue,
                        s = t.notReplaceStress || !1,
                        c = void 0;
                    if (e = s ? e : this.replaceStress(e), e = r && a.isNotMetric(e) ? o : e, !a.isNotMetric(e)) {
                        if (a.isArray(i)) {
                            for (c = i.length - 1; c >= 0; c--) {
                                n[i[c]] = e;
                            }
                        } else {
                            a.isString(i) && (n[i] = e);
                        }
                    }
                    return n;
                },
                possibleValues: function(t, e) {
                    return t = new RegExp(t, "g"), t.test(e);
                },
                replaceStress: function(t) {
                    if (a.isArray(t) || a.isString(t)) {
                        var e = void 0,
                            n = void 0,
                            i = void 0,
                            r = void 0,
                            o = {
                                a: "A|Á|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Ǎ|Â|Ấ|Ậ|Ầ|Ẩ|Ẫ|Ä|Ǟ|Ȧ|Ǡ|Ạ|Ȁ|À|Ả|Ȃ|Ā|Ą|Å|Ǻ|Ḁ|Ⱥ|Ã|Ɐ|ᴀ|Α|Ά|А|á|ă|ắ|ặ|ằ|ẳ|ẵ|ǎ|â|ấ|ậ|ầ|ẩ|ẫ|ä|ǟ|ȧ|ǡ|ạ|ȁ|à|ả|ȃ|ā|ą|ᶏ|ẚ|å|ǻ|ḁ|ⱥ|ã|ɐ|ₐ|α|ά|а|ª",
                                b: "B|Ḃ|Ḅ|Ɓ|Ḇ|Ƀ|Ƃ|ʙ|ᴃ|Β|Б|ḃ|ḅ|ɓ|ḇ|ᵬ|ᶀ|ƀ|ƃ|β|б",
                                c: "C|Ć|Č|Ç|Ḉ|Ĉ|Ċ|Ƈ|Ȼ|Ꜿ|ᴄ|Ц|ć|č|ç|ḉ|ĉ|ɕ|ċ|ƈ|ȼ|ↄ|ꜿ|ц",
                                d: "D|Ď|Ḑ|Ḓ|Ḋ|Ḍ|Ɗ|Ḏ|ǲ|ǅ|Đ|Ƌ|Ꝺ|ᴅ|Ð|Δ|Д|ď|ḑ|ḓ|ȡ|ḋ|ḍ|ɗ|ᶑ|ḏ|ᵭ|ᶁ|đ|ɖ|ƌ|ꝺ|ð|δ|д|∂",
                                e: "E|É|Ĕ|Ě|Ȩ|Ḝ|Ê|Ế|Ệ|Ề|Ể|Ễ|Ḙ|Ë|Ė|Ẹ|Ȅ|È|Ẻ|Ȇ|Ē|Ḗ|Ḕ|Ɇ|Ẽ|Ḛ|Ɛ|Ǝ|ᴇ|ⱻ|Ε|Έ|Е|Э|Ę|é|ĕ|ě|ȩ|ḝ|ê|ế|ệ|ề|ể|ễ|ḙ|ë|ė|ẹ|ȅ|è|ẻ|ȇ|ē|ḗ|ḕ|ⱸ|ę|ᶒ|ɇ|ẽ|ḛ|ɛ|ᶓ|ɘ|ǝ|ₑ|ε|έ|е|э",
                                f: "F|Ḟ|Ƒ|Ꝼ|ꜰ|Φ|Ф|ḟ|ƒ|ᵮ|ᶂ|ꝼ|φ|ф",
                                g: "G|Ǵ|Ğ|Ǧ|Ģ|Ĝ|Ġ|Ɠ|Ḡ|Ǥ|Ᵹ|ɢ|ʛ|Γ|Г|Ґ|ǵ|ğ|ǧ|ģ|ĝ|ġ|ɠ|ḡ|ᶃ|ǥ|ᵹ|ɡ|ᵷ|γ|г|ґ",
                                h: "H|Ḫ|Ȟ|Ḩ|Ĥ|Ⱨ|Ḧ|Ḣ|Ḥ|Ħ|ʜ|Η|Ή|Х|ḫ|ȟ|ḩ|ĥ|ⱨ|ḧ|ḣ|ḥ|ɦ|ẖ|ħ|ɥ|ʮ|ʯ|η|ή|х",
                                i: "I|Í|Ĭ|Ǐ|Î|Ï|Ḯ|İ|Ị|Ȉ|Ì|Ỉ|Ȋ|Į|Ɨ|Ĩ|Ḭ|ɪ|Ι|Ί|Ϊ|И|І|Ī|ı|í|ĭ|ǐ|î|ï|ḯ|ị|ȉ|ì|ỉ|ȋ|ī|į|ᶖ|ɨ|ĩ|ḭ|ᴉ|ᵢ|ι|ί|ϊ|ΐ|и|і",
                                j: "J|Ĵ|Ɉ|ᴊ|Й|ȷ|ɟ|ʄ|ǰ|ĵ|ʝ|ɉ|ⱼ|й",
                                k: "K|Ḱ|Ǩ|Ⱪ|Ꝃ|Ḳ|Ƙ|Ḵ|Ꝁ|Ꝅ|ᴋ|Κ|К|Ķ|ḱ|ǩ|ķ|ⱪ|ꝃ|ḳ|ƙ|ḵ|ᶄ|ꝁ|ꝅ|ʞ|κ|к",
                                l: "L|Ĺ|Ƚ|Ľ|Ļ|Ḽ|Ḷ|Ḹ|Ⱡ|Ꝉ|Ḻ|Ŀ|Ɫ|ǈ|Ł|Ꞁ|ʟ|ᴌ|Λ|Л|ĺ|ƚ|ɬ|ľ|ļ|ḽ|ȴ|ḷ|ḹ|ⱡ|ꝉ|ḻ|ŀ|ɫ|ᶅ|ɭ|ł|ꞁ|λ|л",
                                m: "M|Ḿ|Ṁ|Ṃ|Ɱ|Ɯ|ᴍ|Μ|М|ḿ|ṁ|ṃ|ɱ|ᵯ|ᶆ|ɯ|ɰ|μ|м",
                                n: "N|Ń|Ň|Ņ|Ṋ|Ṅ|Ṇ|Ǹ|Ɲ|Ṉ|Ƞ|ǋ|Ñ|ɴ|ᴎ|Ν|Н|ń|ň|ņ|ṋ|ȵ|ṅ|ṇ|ǹ|ɲ|ṉ|ƞ|ᵰ|ᶇ|ɳ|ñ|ν|н",
                                o: "O|Ó|Ŏ|Ǒ|Ô|Ố|Ộ|Ồ|Ổ|Ỗ|Ö|Ȫ|Ȯ|Ȱ|Ọ|Ő|Ȍ|Ò|Ỏ|Ơ|Ớ|Ợ|Ờ|Ở|Ỡ|Ȏ|Ꝋ|Ꝍ|Ō|Ṓ|Ṑ|Ɵ|Ǫ|Ǭ|Ø|Ǿ|Õ|Ṍ|Ṏ|Ȭ|Ɔ|ᴏ|ᴐ|Ο|Ό|О|ɵ|ó|ŏ|ǒ|ô|ố|ộ|ồ|ổ|ỗ|ö|ȫ|ȯ|ȱ|ọ|ő|ȍ|ò|ỏ|ơ|ớ|ợ|ờ|ở|ỡ|ȏ|ꝋ|ꝍ|ⱺ|ō|ṓ|ṑ|ǫ|ǭ|ø|ǿ|õ|ṍ|ṏ|ȭ|ɔ|ᶗ|ᴑ|ᴓ|ₒ|ο|ό|о|˚|º",
                                p: "P|Ṕ|Ṗ|Ꝓ|Ƥ|Ꝕ|Ᵽ|Ꝑ|ᴘ|Π|П|ṕ|ṗ|ꝓ|ƥ|ᵱ|ᶈ|ꝕ|ᵽ|ꝑ|π|п",
                                q: "Q|Ꝙ|Ꝗ|ꝙ|ʠ|ɋ|ꝗ",
                                r: "R|Ꞃ|Ŕ|Ř|Ŗ|Ṙ|Ṛ|Ṝ|Ȑ|Ȓ|Ṟ|Ɍ|Ɽ|ʁ|ʀ|ᴙ|ᴚ|Ρ|Р|ꞃ|ŕ|ř|ŗ|ṙ|ṛ|ṝ|ȑ|ɾ|ᵳ|ȓ|ṟ|ɼ|ᵲ|ᶉ|ɍ|ɽ|ɿ|ɹ|ɻ|ɺ|ⱹ|ᵣ|ρ|р",
                                s: "S|Ꞅ|Ś|Ṥ|Š|Ṧ|Ş|Ŝ|Ș|Ṡ|Ṣ|Ṩ|ꜱ|Σ|С|ꞅ|ſ|ẜ|ẛ|ẝ|ś|ṥ|š|ṧ|ş|ŝ|ș|ṡ|ṣ|ṩ|ʂ|ᵴ|ᶊ|ȿ|σ|ς|с",
                                t: "T|Ꞇ|Ť|Ţ|Ṱ|Ț|Ⱦ|Ṫ|Ṭ|Ƭ|Ṯ|Ʈ|Ŧ|ᴛ|Τ|Т|ꞇ|ť|ţ|ṱ|ț|ȶ|ẗ|ⱦ|ṫ|ṭ|ƭ|ṯ|ᵵ|ƫ|ʈ|ŧ|ʇ|τ|т",
                                u: "U|Ú|Ŭ|Ǔ|Û|Ṷ|Ü|Ǘ|Ǚ|Ǜ|Ǖ|Ṳ|Ụ|Ű|Ȕ|Ù|Ủ|Ư|Ứ|Ự|Ừ|Ử|Ữ|Ȗ|Ṻ|Ų|Ů|Ũ|Ṹ|Ṵ|ᴜ|У|Ъ|Ū|ᴝ|ú|ŭ|ǔ|û|ṷ|ü|ǘ|ǚ|ǜ|ǖ|ṳ|ụ|ű|ȕ|ù|ủ|ư|ứ|ự|ừ|ử|ữ|ȗ|ū|ṻ|ų|ᶙ|ů|ũ|ṹ|ṵ|ᵤ|у|ъ",
                                v: "V|Ʌ|Ꝟ|Ṿ|Ʋ|Ṽ|ᴠ|В|ʌ|ⱴ|ꝟ|ṿ|ʋ|ᶌ|ⱱ|ṽ|ᵥ|в",
                                x: "X|Ẍ|Ẋ|Χ|ẍ|ẋ|ᶍ|ₓ|χ",
                                w: "W|Ẃ|Ŵ|Ẅ|Ẇ|Ẉ|Ẁ|Ⱳ|ᴡ|Ω|Ώ|ʍ|ẃ|ŵ|ẅ|ẇ|ẉ|ẁ|ⱳ|ẘ|ω|ώ",
                                y: "Y|Ý|Ŷ|Ÿ|Ẏ|Ỵ|Ỳ|Ƴ|Ỷ|Ỿ|Ȳ|Ɏ|Ỹ|ʏ|Υ|Ύ|Ϋ|Ы|ʎ|ý|ŷ|ÿ|ẏ|ỵ|ỳ|ƴ|ỷ|ỿ|ȳ|ẙ|ɏ|ỹ|υ|ύ|ΰ|ϋ|ы",
                                z: "Z|Ź|Ž|Ẑ|Ⱬ|Ż|Ẓ|Ȥ|Ẕ|Ƶ|ᴢ|Ζ|З|ź|ž|ẑ|ʑ|ⱬ|ż|ẓ|ȥ|ẕ|ᵶ|ᶎ|ʐ|ƶ|ɀ|ζ|з",
                                "(c)": "©",
                                "(r)": "®",
                                tm: "™",
                                sm: "℠",
                                "~": "˜",
                                "...": "…",
                                '"': "“|”",
                                "'": "‘|’"
                            };
                        for (i in o) {
                            if (e = new RegExp(o[i], "g"), a.isArray(t)) {
                                for (r = 0, n = t.length; r < n; r++) {
                                    a.isString(t[r]) && (t[r] = t[r].replace(e, i).trim());
                                }
                            } else {
                                a.isString(t) && (t = t.replace(e, i).trim());
                            }
                        }
                    }
                    return t;
                },
                extend: function(t, e) {
                    var n = {},
                        i = void 0;
                    for (i in t) {
                        n[i] = t[i];
                    }
                    for (i in e) {
                        n[i] = e[i];
                    }
                    return n;
                },
                getAssociateObject: function(t) {
                    var e = {},
                        n = void 0,
                        i = void 0;
                    for (n in t) {
                        if (t[n].hasOwnProperty("whereFind")) {
                            i = t[n].whereFind, a.isString(i) && (i = new Function(i));
                            try {
                                e[n] = i();
                            } catch (t) {}
                        }
                    }
                    return e;
                }
            },
            o = {
                defaultTracker: "uolMain",
                namespace: "uolAnalytics",
                script: "uolhome",
                tracker: "",
                model: null,
                init: function() {
                    if (window[this.namespace] = window[this.namespace] || function() {
                            (window[o.namespace].q = window[o.namespace].q || []).push(arguments);
                        }, this.execCommand.q = window[this.namespace].q || [], this.execCommand.t = window[this.namespace].t || [], this.execCommand.c = window[this.namespace].c || {}, window[this.namespace] = this.execCommand, this.tracker = this.tracker || this.defaultTracker, window[this.namespace].t.length) {
                        new RegExp(window[this.namespace].t.join("|")).test(this.script) && (this.tracker = this.script);
                    }
                },
                isMyCommand: function() {
                    var t = new RegExp(this.tracker),
                        e = arguments[0];
                    return e && this.tracker == this.defaultTracker && !/\./.test(e) && (e = this.tracker + "." + e), t.test(e);
                },
                clearQueue: function() {
                    var t = void 0,
                        e = void 0,
                        n = [];
                    for (t in window[this.namespace].q) {
                        e = Array.prototype.slice.call(window[this.namespace].q[t], 0), this.isMyCommand.apply(this, e) && this.execCommand.apply(null, e) && n.push(t);
                    }
                    for (t = n.length - 1; t >= 0; t--) {
                        window[this.namespace].q.splice(n[t], 1);
                    }
                },
                addCommand: function(t, e) {
                    this.tracker !== this.defaultTracker && (t = this.tracker + "." + t), window[this.namespace].c[t] = e;
                },
                execCommand: function() {
                    var t = void 0,
                        e = void 0,
                        n = void 0,
                        i = !1;
                    try {
                        t = arguments[0], e = Array.prototype.slice.call(arguments, 1), n = window[o.namespace].c[t], i = n.apply(n, e), i = void 0 === i || i;
                    } catch (t) {
                        window[o.namespace].q.push(arguments);
                    }
                    return i;
                }
            },
            s = {
                getValue: function(t) {
                    var e = window.universal_variable && window.universal_variable.aud && window.universal_variable.aud.hasOwnProperty(t) ? window.universal_variable.aud[t] : void 0,
                        n = window.universal_variable && window.universal_variable.sc && window.universal_variable.sc.hasOwnProperty(t) ? window.universal_variable.sc[t] : void 0;
                    return e || n;
                },
                setValue: function(t, e) {
                    window.universal_variable = window.universal_variable || {}, window.universal_variable.aud = window.universal_variable.aud || {}, window.universal_variable.aud[t] = e;
                },
                getAll: function() {
                    var t = window.universal_variable && window.universal_variable.aud ? window.universal_variable.aud : void 0,
                        e = window.universal_variable && window.universal_variable.sc ? window.universal_variable.sc : void 0;
                    return t || e;
                },
                getFull: function() {
                    return window.universal_variable || void 0;
                }
            },
            c = {
                category: {
                    keys: "eventCategory"
                },
                action: {
                    keys: "eventAction"
                },
                label: {
                    keys: "eventLabel"
                },
                value: {
                    keys: "eventValue"
                },
                nonInteraction: {
                    keys: "nonInteraction"
                },
                location: {
                    keys: "location",
                    notReplaceStress: !0
                },
                title: {
                    keys: "title",
                    notReplaceStress: !0
                },
                hitCallback: {
                    keys: "hitCallback",
                    notReplaceStress: !0
                },
                extend: function(t) {
                    var e = void 0;
                    for (e in t) {
                        c[e] = t[e];
                    }
                }
            },
            u = {
                init: function() {
                    o.addCommand("pageview", this.pageview), o.addCommand("media", this.media), o.addCommand("event", this.event), o.addCommand("click", this.click), o.addCommand("disable", this.disable), o.addCommand("get", this.get);
                },
                pageview: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.getAll(),
                        e = r.associate(t, c);
                    ga(o.tracker + ".send", "pageview", e);
                },
                media: function(t) {
                    var e = r.associate(t, c);
                    ga(o.tracker + ".send", "pageview", e);
                },
                event: function(t) {
                    var e = r.associate(t, c);
                    ga(o.tracker + ".send", "event", e);
                },
                click: function(t) {
                    var e = r.associate(t, c);
                    e = r.extend(e, {
                        metric1: 1
                    }), ga(o.tracker + ".send", "event", e);
                },
                disable: function() {
                    window["ga-disable-UA-88298165-11"] = !0;
                },
                get: function(t) {
                    if (a.isString(t)) {
                        return o.model.get(t) || !1;
                    }
                }
            },
            l = {
                active: !0,
                init: function() {
                    function t(t, e) {
                        var n, a, r, o, s, c = "comScore=",
                            u = document,
                            l = u.cookie,
                            d = "",
                            f = "indexOf",
                            g = "substring",
                            h = "length",
                            v = 2048,
                            p = "&ns_",
                            m = window,
                            w = m.encodeURIComponent || escape;
                        if (l[f](c) + 1) {
                            for (o = 0, r = l.split(";"), s = r[h]; o < s; o++) {
                                (a = r[o][f](c)) + 1 && (d = "&" + unescape(r[o][g](a + c[h])));
                            }
                        }
                        t += p + "_t=" + +new Date + p + "c=" + (u.characterSet || u.defaultCharset || "") + (m === m.top ? "" : p + "if=1") + "&cv=3.1&c8=" + w(u.title) + d + "&c7=" + w(u.URL) + "&c9=" + w(u.referrer), t[h] > v && t[f]("&") > 0 && (n = t[g](0, v - 8).lastIndexOf("&"), t = (t[g](0, n) + p + "cut=" + w(t[g](n + 1)))[g](0, v)), u.images ? (a = new Image, m.ns_p || (i = a), "function" == typeof e && (a.onload = a.onerror = e), a.src = t) : u.write("<", "p", "><", 'img src="', t, '" height="1" width="1" alt="*"', "><", "/p", ">");
                    }
                    if (!this.active) {
                        return !1;
                    }
                    var e = [];
                    e.push({
                        c1: 2,
                        c2: "6036356",
                        c3: "",
                        c4: "",
                        c5: "",
                        c6: "",
                        c15: ""
                    });
                    var n = void 0,
                        i = void 0;
                    n = i = void 0, void 0 === e && (e = []),
                        function() {
                            var i, a = "length",
                                r = window,
                                o = r.encodeURIComponent ? encodeURIComponent : escape,
                                s = function(e) {
                                    if (e) {
                                        var n, i, r, s, c = [],
                                            u = 0,
                                            l = "";
                                        for (var d in e) {
                                            "string" != (i = typeof e[d]) && "number" != i || (c[c[a]] = d + "=" + o(e[d]), "c2" == d ? l = e[d] : "c1" == d && (u = 1));
                                        }
                                        if (c[a] <= 0 || "" == l) {
                                            return;
                                        }
                                        if (s = e.options || {}, s.d = s.d || document, "string" == typeof s.url_append) {
                                            r = s.url_append.replace(/&amp;/, "&").split("&");
                                            for (var f, d = 0, g = r[a]; d < g; d++) {
                                                f = r[d].split("="), 2 == f[a] && (c[c[a]] = f[0] + "=" + o(f[1]));
                                            }
                                        }
                                        n = ["s" == s.d.URL.charAt(4) ? "//sb" : "//b", ".scorecardresearch.com/b?", u ? "" : "c1=2&", c.join("&").replace(/&$/, "")], t(n.join(""));
                                    }
                                },
                                c = function(t) {
                                    t = t || e;
                                    for (var n = 0, i = t[a]; n < i; n++) {
                                        s(t[n]);
                                    }
                                    t = e = [];
                                };
                            c(), (i = r.COMSCORE) ? (i.purge = c, i.beacon = s) : n = {
                                purge: c,
                                beacon: s
                            };
                        }();
                }
            },
            d = {
                fn: [],
                init: function() {
                    this.location(), this.comScore(), this.execFn(), this.devView(), this.clientId(), this.sessionId();
                },
                location: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href;
                    ga(o.tracker + ".set", "location", t);
                },
                comScore: function() {
                    "pageview" === o.model.get("hitType") && l.init();
                },
                execFn: function() {
                    var t = void 0,
                        e = d.fn.length;
                    for (t = 0; t < e; t++) {
                        d.fn[t]();
                    }
                },
                devView: function() {},
                clientId: function() {
                    o.model.set("dimension4", o.model.get("clientId"));
                },
                sessionId: function() {
                    var t = (new Date).getTime() + "." + Math.random().toString(36).substring(5);
                    o.model.set("dimension66", t);
                },
                piiRules: function() {
                    var t = void 0,
                        e = void 0,
                        n = void 0,
                        i = void 0,
                        a = void 0,
                        r = void 0,
                        s = void 0,
                        c = [{
                            name: "EMAIL",
                            regex: /[^\/]{4}@[^\/]{4}/gi
                        }];
                    for (n = o.model.get("hitPayload").split("&"), r = c.length, s = n.length, t = 0; t < s; t++) {
                        i = n[t].split("=");
                        try {
                            a = decodeURIComponent(decodeURIComponent(i[1]));
                        } catch (t) {
                            try {
                                a = decodeURIComponent(i[1]);
                            } catch (t) {
                                a = i[1];
                            }
                        }
                        for (e = 0; e < r; e++) {
                            a = a.replace(c[e].regex, "[REDACTED " + c[e].name + "]");
                        }
                        i[1] = encodeURIComponent(a), n[t] = i.join("=");
                    }
                    o.model.set("hitPayload", n.join("&"), !0);
                },
                debuggerExtension: function() {}
            };
        o.init(), ga("create", "UA-88298165-11", "auto", o.tracker, {
            allowLinker: !1
        }), ga(function() {
            var t = ga.getByName(o.tracker),
                e = t.get("customTask"),
                n = t.get("sendHitTask");
            t.set("customTask", function(t) {
                o.model = t, d.init(), e(o.model);
            }), t.set("sendHitTask", function(t) {
                d.piiRules(), n(t);
            });
        }), ga(o.tracker + ".set", {
            dimension1: "Conteudo",
            dimension2: "Home",
            dimension3: "Home"
        }), u.init(), window.UOLPD = window.UOLPD || {};
        var f = void 0;
        window.UOLPD.Audience2 && window.UOLPD.Audience2.Player && (f = window.UOLPD.Audience2.Player), window.UOLPD.Audience2 = {
            countMetrics: function() {
                ga(o.tracker + ".send", "pageview");
            },
            countMedia: function(t, e) {
                a.isObject(t) && (e = t.type, t = t.id), t && e && ga(o.tracker + ".send", "pageview", {
                    dimension9: e,
                    dimension10: t
                });
            },
            countClick: function(t) {
                ga(o.tracker + ".send", "event", {
                    eventCategory: t.category || t.component || "none",
                    eventAction: t.action || "none",
                    eventLabel: t.label || t.reference,
                    eventValue: t.value,
                    metric1: 1
                });
            },
            countEvent: function(t) {
                ga(o.tracker + ".send", "event", {
                    eventCategory: t.category || t.component || "none",
                    eventAction: t.action || "none",
                    eventLabel: t.label || t.reference,
                    eventValue: t.value
                });
            },
            countTime: function() {
                ga(o.tracker + ".send", "event", {
                    eventCategory: "countTime",
                    eventAction: "countTime"
                });
            }
        }, f && (window.UOLPD.Audience2.Player = f), window.hitOmniturePhoto = function(t) {
            UOLPD.Audience2.countMedia(t, "fotos");
        }, window.hitOmniture = function(t, e) {
            UOLPD.Audience2.countMedia(t, e);
        };
        var g = {
                get: function(t) {
                    return !!this.isAvailable() && window.localStorage.getItem(t);
                },
                set: function(t, e) {
                    this.isAvailable() && window.localStorage.setItem(t, e);
                },
                remove: function(t) {
                    this.isAvailable() && window.localStorage.removeItem(t);
                },
                isAvailable: function() {
                    try {
                        var t = "__storage_test__";
                        return window.localStorage.setItem(t, t), window.localStorage.removeItem(t), !0;
                    } catch (t) {
                        return !1;
                    }
                }
            },
            h = {
                init: function(t) {
                    var e = {},
                        n = void 0,
                        i = void 0;
                    try {
                        e = JSON.parse(g.get("uolDataLayer")).TailtargetTrack;
                    } catch (t) {}
                    for (n in e) {
                        i = n.substring(3), t.hasOwnProperty(i) && (/\,/.test(e[n]) && (e[n] = e[n].split(",").sort().join(",")), ga(o.tracker + ".set", "dimension" + t[i], e[n]));
                    }
                }
            },
            v = {
                category: {
                    keys: "eventCategory"
                },
                action: {
                    keys: "eventAction"
                },
                label: {
                    keys: "eventLabel"
                },
                area: {
                    keys: "dimension5"
                },
                position: {
                    keys: "dimension6"
                },
                quantityOfCalls: {
                    keys: "dimension33"
                },
                abTest1: {
                    keys: ["dimension7", "dimension18"],
                    notReplaceStress: !0
                },
                abTest: {
                    keys: ["dimension7", "dimension18"],
                    notReplaceStress: !0
                },
                abTest2: {
                    keys: ["dimension19", "dimension20"],
                    notReplaceStress: !0
                },
                abTest3: {
                    keys: ["dimension21", "dimension22"],
                    notReplaceStress: !0
                },
                abTest4: {
                    keys: ["dimension23", "dimension24"],
                    notReplaceStress: !0
                },
                abTest5: {
                    keys: ["dimension25", "dimension26"],
                    notReplaceStress: !0
                },
                abTest6: {
                    keys: ["dimension27", "dimension28"],
                    notReplaceStress: !0
                },
                abTest7: {
                    keys: ["dimension29", "dimension30"],
                    notReplaceStress: !0
                },
                abTest8: {
                    keys: ["dimension31", "dimension32"],
                    notReplaceStress: !0
                },
                firstPaint: {
                    keys: "metric2"
                },
                nonInteraction: {
                    keys: "nonInteraction"
                }
            };
        c.extend(v), h.init({
            age: 9,
            gender: 10,
            cluster: 11,
            subjects: 12,
            team: 13,
            socialclass: 14,
            microsegments: 15,
            customaudience: 16,
            lists: 17
        }), o.clearQueue(), u.pageview(), UOLPD.Audience2.countMetrics = u.pageview, UOLPD.Audience2.countClick = u.click, UOLPD.Audience2.countEvent = u.event;
    }, {}]
}, {}, [1]);