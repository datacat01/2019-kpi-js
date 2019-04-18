/*
 * shisa/1.1.6
 * Copyright (c) 2019 Rakuten Inc.
 * 2019-02-21 13:36:11
 */
! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = "//rat.rakuten.co.jp/",
        i = 604800,
        s = 3e4,
        a = 100,
        c = "__STORAGE_TEST_KEY__",
        u = 5e3,
        l = .5,
        p = (new Date).getTime(),
        h = p + String(Math.random()).substring(1),
        d = Object.prototype.hasOwnProperty;

    function f(e) {
        var t = function(e) {
                var t, n, r, o, i = document.cookie && document.cookie.split(";");
                if (!i) return null;
                for (t = 0; t < i.length; t++)
                    if (-1 !== (n = (r = i[t]).indexOf("=")) && window.decodeURIComponent(r.substr(0, n)).replace(/^\s+/g, "") === e) {
                        try {
                            o = window.decodeURIComponent(r.substr(n + 1, r.length - n - 1)), o = window.JSON.parse(o)
                        } catch (e) {}
                        return o
                    } return null
            }("Rt"),
            n = parseInt(t ? t.substr(t.length - 3) : 0, 16),
            r = e.split("-");
        return n >= parseInt(r[0], 16) && n <= parseInt(r[1], 16)
    }

    function g(e) {
        var t = e ? window.sessionStorage : window.localStorage;
        try {
            return t.setItem(c, "1"), t.removeItem(c), !0
        } catch (e) {
            return !1
        }
    }
    var m = function() {
        function e(e) {
            this.options = function(e, t) {
                var n;
                for (n in t) d.call(t, n) && (e[n] = t[n]);
                return e
            }({
                sendData: !0,
                useTimer: !0,
                hideErrors: !1,
                cacheErrors: !0,
                sendUnknown: !0,
                maxCachedErrors: a,
                cacheTime: i,
                timeLimit: u,
                sendPercentage: l,
                url: o
            }, e), (100 * Math.random() > this.options.sendPercentage || this.options.sendRange && !f(this.options.sendRange)) && (this.options.sendData = !1), this.options.regExp && (this.regExp = new RegExp(this.options.regExp, this.options.regExpFlags)), this.queue = [], this.list = [], this.ignored = [], this.purgeCache = this.purgeCache.bind(this), setTimeout(this.purgeCache, s)
        }
        return e.prototype.log = function(e) {
            (this.regExp && !this.regExp.exec(e.msg) ? this.ignored : this.queue).push(e), this.list.push(e);
            var t = this;
            this.options.useTimer && (clearTimeout(this.timer), this.timer = window.setTimeout(function() {
                return t.sendData()
            }, this.options.timeLimit))
        }, e.prototype.sendData = function() {
            if (this.options.sendData && 0 !== this.queue.length && this.options.url) {
                for (var e = function(e) {
                        var t, n = new XMLHttpRequest;
                        return "withCredentials" in n || "undefined" == typeof XDomainRequest ? (n.open("POST", e), n.setRequestHeader("Content-Type", "text/plain; charset=UTF-8"), n) : ((t = new XDomainRequest).open("POST", e), t)
                    }(this.options.url), t = "cpkg_none=", n = [], o = 0, i = this.queue; o < i.length; o++) {
                    var s = i[o];
                    if (!this.errorIsCached(s)) {
                        this.options.beforeSend && "function" == typeof this.options.beforeSend && this.options.beforeSend(s);
                        var a = {
                            acc: 1164,
                            aid: 1,
                            ckp: null,
                            cks: null,
                            cp: r({}, s, {
                                group: this.options.group,
                                sessionId: h,
                                shisaVersion: "1.1.6",
                                start: p,
                                page: window.location.href
                            }),
                            etype: "pv"
                        };
                        n.push(a)
                    }
                }
                if (0 !== n.length) {
                    t += JSON.stringify(n);
                    try {
                        e.send(t), this.queue = []
                    } catch (e) {}
                } else this.queue = []
            }
        }, e.prototype.errorIsCached = function(e) {
            if (this.options.cacheErrors && g(!1)) {
                var t = "shisa:" + (window.location.href + "_" + (e.msg || "") + "_" + (e.lineNumber || "") + "_" + (e.column || "") + "_" + (e.stack && "string" == typeof e.stack ? e.stack.split("\n").slice(0, 2).join("\n") : ""));
                if (localStorage.getItem(t)) return !0;
                if (localStorage.length >= this.options.maxCachedErrors) {
                    var n = 0,
                        r = void 0;
                    for (r in localStorage) d.call(localStorage, r) && 0 === r.indexOf("shisa:") && n++;
                    if (n >= this.options.maxCachedErrors) return !1
                }
                var o = {
                    d: !0,
                    t: Math.floor((new Date).getTime() / 1e3) + this.options.cacheTime
                };
                try {
                    localStorage.setItem(t, JSON.stringify(o))
                } catch (e) {}
            }
            return !1
        }, e.prototype.purgeCache = function() {
            if (g(!1)) {
                var e = void 0,
                    t = Math.floor((new Date).getTime() / 1e3);
                for (e in localStorage)
                    if (d.call(localStorage, e) && 0 === e.indexOf("shisa:")) {
                        var n = JSON.parse(localStorage.getItem(e));
                        n.t && t > n.t && localStorage.removeItem(e)
                    }
            }
        }, e
    }();
    t.Shisa = m
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o, i = n(0),
        s = "script-shisa",
        a = /(^data-)/,
        c = document.documentMode;

    function u(e, t) {
        return function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var o = t.apply(null, n);
            return "function" == typeof e && e.apply(null, n), o
        }
    }

    function l(e) {
        for (var t = (e = e.replace(a, "")).indexOf("-"); - 1 !== t;) t = (e = e.substr(0, t) + e.charAt(t + 1).toUpperCase() + e.substr(t + 2)).indexOf("-");
        return e
    }
    "undefined" == typeof window || c < 9 || (r = function(e) {
        function t(e, t) {
            return void 0 !== e ? !("false" === e || "0" === e) : t
        }
        var n, r, o = e.attributes,
            i = {},
            s = {};
        for (n = 0; n < o.length; n++) i[l((r = o[n]).name)] = r.value;
        return s.sendData = t(i.sendData, !0), s.hideErrors = t(i.hideErrors, !1), s.useTimer = t(i.useTimer, !0), s.cacheErrors = t(i.cacheErrors, !0), s.sendUnknown = t(i.sendUnknown, !0), s.exportClass = t(i.exportClass, !1), i.sendPercentage && (s.sendPercentage = parseFloat(i.sendPercentage)), i.timeLimit && (s.timeLimit = parseFloat(i.timeLimit)), i.maxCachedErrors && (s.maxCachedErrors = parseFloat(i.maxCachedErrors)), i.cacheTime && (s.cacheTime = parseFloat(i.cacheTime)), s
    }(document.currentScript || document.getElementById(s)), function(e) {
        window.onbeforeunload = u(window.onbeforeunload, function() {
            e.sendData()
        }), window.onerror = u(window.onerror, function(t, n, r, o, i) {
            return !e.options.sendUnknown || n && r && 0 !== r ? (e.log({
                type: "Uncaught Exception",
                msg: t,
                fileUrl: n,
                lineNumber: r,
                column: o,
                stack: i.stack
            }), e.options.hideErrors) : (e.log({
                type: "Uncaught Exception",
                msg: "There are unknown errors on this page, please check it in browser console"
            }), e.options.hideErrors)
        }), window.onunhandledrejection = u(window.onunhandledrejection, function(t) {
            return e.log({
                type: "Unhandled Rejection",
                msg: t.reason ? t.reason.message : "",
                stack: t.reason
            }), e.options.hideErrors
        })
    }(o = new i.Shisa(r)), r.globalVar && (window[r.globalVar] = o), r.exportClass && (window.Shisa = i.Shisa))
}]);
//# sourceMappingURL=shisa.min.js.map