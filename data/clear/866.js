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
            return e["default"]
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 13)
}([function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = n(4),
        a = function() {
            var e = navigator.userAgent.toLowerCase(),
                t = {
                    br: "",
                    device: "",
                    ver: "",
                    params: null,
                    os: ""
                };

            function n(e) {
                for (var t = [{
                        name: "ie",
                        test: /msie/
                    }, {
                        name: "opera",
                        test: /opera/
                    }, {
                        name: "firefox",
                        test: /firefox/
                    }, {
                        name: "safari",
                        test: /safari.*(?!chrome)/
                    }, {
                        name: "chrome",
                        test: /chrome/
                    }, {
                        name: "wph",
                        test: /windows phone/
                    }, {
                        name: "ps",
                        test: /playstation/
                    }, {
                        name: "uc",
                        test: /ucbrowser|ucweb/
                    }, {
                        name: "ps",
                        test: /playstation/
                    }, {
                        name: "xiaomi",
                        test: /xiaomi/
                    }, {
                        name: "qq",
                        test: /qqbrowser/
                    }, {
                        name: "weixin",
                        test: /micromessenger/
                    }, {
                        name: "360",
                        test: /360browser/
                    }, {
                        name: "baidu",
                        test: /baidu/
                    }, {
                        name: "qqwebview",
                        test: / qq/
                    }, {
                        name: "sougou",
                        test: /sougou/
                    }, {
                        name: "liebao",
                        test: /liebaofast/
                    }, {
                        name: "letv",
                        test: /eui browser/
                    }], n = "un", r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.test.test(e) && (n = o.name)
                }
                return n
            }
            return {
                br: t,
                getOs: function() {
                    return "" == t.os && (t.os = function(e) {
                        var t = "Win32" == navigator.platform || "Windows" == navigator.platform,
                            n = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
                        if (n) return "mac";
                        if (t) {
                            if (e.indexOf("windows nt 5.0") > -1 || e.indexOf("windows 2000") > -1) return "win2000";
                            if (e.indexOf("windows nt 5.1") > -1 || e.indexOf("windows XP") > -1) return "winXP";
                            if (e.indexOf("windows nt 5.2") > -1 || e.indexOf("windows 2003") > -1) return "win2003";
                            if (e.indexOf("windows nt 6.0") > -1 || e.indexOf("windows vista") > -1) return "winVista";
                            if (e.indexOf("windows nt 6.1") > -1 || e.indexOf("windows 7") > -1) return "win7"
                        }
                        return /android/.test(e) ? "android" : e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || e.match(/iphone/) || e.match(/ipad/) ? "ios" : "X11" != navigator.platform || t || n ? String(navigator.platform).indexOf("Linux") > -1 ? "linux" : "un" : "unix"
                    }(e)), t.os
                },
                getUrlParams: function(e) {
                    return null == t.params && (t.params = function() {
                        var e = window.location.search,
                            t = {};
                        if (-1 != e.indexOf("?"))
                            for (var n = e.substr(1).split("&"), r = 0; r < n.length; r++) {
                                var o = n[r].substr(0, n[r].indexOf("=")),
                                    a = n[r].substr(n[r].indexOf("=") + 1);
                                t[o] = a
                            }
                        return t
                    }()), !(!t.params || !t.params.hasOwnProperty(e)) && t.params[e]
                },
                getDevice: function() {
                    return "" == t.device && (t.device = function(e) {
                        for (var t = [{
                                name: "wph",
                                test: /windows phone/
                            }, {
                                name: "ipad",
                                test: /ipad/
                            }, {
                                name: "iphone",
                                test: /iphone/
                            }, {
                                name: "androidPad",
                                test: /(?!.*mobile)android/
                            }, {
                                name: "androidPhone",
                                test: /android.*mobile/
                            }, {
                                name: "android",
                                test: /android/
                            }, {
                                name: "pc",
                                test: /windows/
                            }, {
                                name: "mac",
                                test: /macintosh|mac os x/
                            }], n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (r.test.test(e)) return r.name
                        }
                        return "un"
                    }(e)), t.device
                },
                getBrowser: function() {
                    return "" == t.br && (t.br = n(e)), t.br
                },
                getBrowserVersion: function() {
                    return "" == t.br && (t.br = n(e)), "" == t.ver && (t.ver = function(e) {
                        var t, n = {};
                        (t = e.match(/msie ([\d.]+)/)) ? n.msie = t[1]: (t = e.match(/firefox\/([\d.]+)/)) ? n.firefox = t[1] : (t = e.match(/360browser/)) ? n.b360 = t[1] ? t[1] : "-" : (t = e.match(/qqbrowser\/([\d.]+)/)) ? n.bqq = t[1] : (t = e.match(/ucbrowser\/([\d.]+)/)) ? n.buc = t[1] : (t = e.match(/baidubrowser\/([\d.]+)/)) ? n.bbaidu = t[1] : (t = e.match(/sogoumobilebrowser\/([\d.]+)/)) ? n.bsgm = t[1] : (t = e.match(/liebaofast\/([\d.]+)/)) ? n.blbfast = t[1] : (t = e.match(/mb2345browser\/([\d.]+)/)) ? n.b2345 = t[1] : (t = e.match(/4g explorer\/([\d.]+)/)) ? n.b4g = t[1] : (t = e.match(/huohoubrowser\/([\d.]+)/)) ? n.bhuohou = t[1] : (t = e.match(/maxthon[\/ ]([\d.]+)/)) ? n.maxthon = t[1] : (t = e.match(/(opera)|(opr)\/([\d.]+)/)) ? n.opera = t[3] : (t = e.match(/chrome\/([\d.]+)/)) ? n.chrome = t[1] : (t = e.match(/version\/([\d.]+).*safari/)) ? n.safari = t[1] : n.other = "-";
                        var r = "";
                        for (var o in n) r = n[o];
                        return r
                    }(e)), t.br + t.ver
                },
                now: Date.now || function() {
                    return +new Date
                },
                creatUuid: function() {
                    var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                        n = [],
                        r = 16;
                    for (r = r || t.length, e = 0; e < 32; e++) n[e] = t[0 | Math.random() * r];
                    return n.join("")
                },
                urlToObj: o.urlToObj,
                getMate: function() {
                    for (var e = (document.head || document.getElementsByTagName("head")[0]).getElementsByTagName("meta"), t = {}, n = 0; n < e.length; n++) {
                        var r = e[n];
                        "" != r.name && (t[r.name] = r.content)
                    }
                    return t
                },
                objectParseToString: o.objectParseToString,
                cookie: function(e, t, n) {
                    if (void 0 === t) {
                        var r = null;
                        if (document.cookie && "" != document.cookie)
                            for (var o = document.cookie.split(";"), a = 0; a < o.length; a++) {
                                var i = o[a];
                                if (" " == i.substr(0, 1) && (i = i.substr(1)), i.substring(0, e.length + 1) == e + "=") {
                                    r = decodeURIComponent(i.substring(e.length + 1));
                                    break
                                }
                            }
                        return r
                    }
                    n = n || {}, null === t && (t = "", n.expires = -1);
                    var u, d = "";
                    n.expires && ("number" == typeof n.expires || n.expires.toUTCString) && ("number" == typeof n.expires ? (u = new Date).setTime(u.getTime() + 24 * n.expires * 60 * 60 * 1e3) : u = n.expires, d = "; expires=" + u.toUTCString());
                    var s = n.path ? "; path=" + n.path : "",
                        l = n.domain ? "; domain=" + n.domain : "",
                        c = n.secure ? "; secure" : "";
                    return document.cookie = [e, "=", encodeURIComponent(t), d, s, l, c].join(""), null
                },
                setLocal: function(e, t, n) {
                    if (void 0 === n && (n = !0), window.localStorage) try {
                        localStorage.setItem(e, t)
                    } catch (r) {}
                    n && this.cookie(e, t, n)
                },
                getLocal: function(e, t) {
                    if (void 0 === t && (t = !0), window.localStorage) try {
                        if (localStorage.getItem(e)) return localStorage.getItem(e)
                    } catch (n) {}
                    return t ? this.cookie(e) : -1
                },
                num2Time: function(e) {
                    return (parseInt(e / 60) < 10 ? "0" + parseInt(e / 60) + ":" : parseInt(e / 60) + ":") + (parseInt(e % 60) < 10 ? "0" + parseInt(e % 60) : parseInt(e % 60) + "")
                },
                lt10: function(e) {
                    return e < 10 ? "0" + e : e
                },
                num2Duration: function(e) {
                    return parseInt(e / 60) >= 60 ? this.lt10(parseInt(e / 3600)) + ":" + this.lt10(parseInt(e / 60 % 60)) + ":" + this.lt10(parseInt(e % 60)) : this.lt10(parseInt(e / 60)) + ":" + this.lt10(parseInt(e % 60))
                },
                clone: function(e) {
                    var t, n, o;
                    if ("object" != (void 0 === e ? "undefined" : r(e)) || null === e) return e;
                    if (e instanceof Array)
                        for (t = [], n = 0, o = e.length; n < o; n++) "object" == r(e[n]) && null != e[n] ? t[n] = arguments.callee(e[n]) : t[n] = e[n];
                    else
                        for (n in t = {}, e) "object" == r(e[n]) && null != e[n] ? t[n] = arguments.callee(e[n]) : t[n] = e[n];
                    return t
                },
                isHttps: function() {
                    try {
                        return "https:" == window.location.protocol
                    } catch (e) {}
                    return !1
                },
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isIe6: function() {
                    return /msie 6/.test(navigator.userAgent.toLowerCase())
                },
                isNullObj: function(e) {
                    if ("object" == (void 0 === e ? "undefined" : r(e))) {
                        for (var t in e) return !1;
                        return !0
                    }
                    return !1
                },
                isMobile: function() {
                    return !!navigator.userAgent.match(/(phone|pad|pod|ios|android|mobile|blackberry|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian)/i)
                },
                getRndItemFromArr: function(e) {
                    return this.isArray(e) ? e[Math.floor(Math.random() * e.length)] : e
                }
            }
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r, o = n(14),
        a = (r = o) && r.__esModule ? r : {
            "default": r
        };
    e.exports = a["default"]
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = function(e) {
        return "object" === ("undefined" == typeof HTMLElement ? "undefined" : r(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : r(e)) && 1 === e.nodeType && "string" == typeof e.nodeName
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (function(e) {
                if (e) return "function" == typeof e && (e = e()), "string" == typeof e && ("http:" == e.substr(0, 5) || "https:" == e.substr(0, 6) || "//" == e.substr(0, 2));
                return !1
            }(e)) {
            var t = document.createElement("IMG");
            t.onload = t.onerror = function() {
                this.onload = t.onerror = null, document.body.removeChild(this)
            }, t.style.position = "absolute", t.style.top = "-1px", t.style.left = "-1px", t.style.width = "1px", t.style.height = "1px", t.style.display = "none", document.body.appendChild(t), t.src = e
        }
    }
    e.exports = function(e) {
        for (var t = 0; t < e.length; t++) r(e[t])
    }
}, function(e, t, n) {
    "use strict";
    e.exports = {
        urlToObj: function(e) {
            var t = {},
                n = e; - 1 != e.indexOf("?") && (n = e.substr(e.indexOf("?") + 1));
            for (var r = n.split("&"), o = 0; o < r.length; o++) {
                var a = r[o].substr(0, r[o].indexOf("=")),
                    i = r[o].substr(r[o].indexOf("=") + 1);
                t[a] = i
            }
            return t
        },
        objectParseToString: function(e) {
            if (null == e) return "";
            var t = "",
                n = 0;
            for (var r in e) t += n > 0 ? "&" + r + "=" + e[r] : r + "=" + e[r], n++;
            return t
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(0)),
        o = a(n(3));

    function a(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var i = function() {
        var e, t = ["https://stadig.ifeng.com/apstat.js?", "https://stadig.ifeng.com/apwsta.js?"],
            n = [],
            a = "3.3.15";

        function i() {
            return r["default"].isMobile() ? ((e = []).push("datatype=wapap"), e.push("url=" + encodeURIComponent(window.location.href.replace(/&/g, "|"))), e.push("ar=" + r["default"].cookie("city") || !1), e.push("ap=" + n.join("|")), e.push("cu=" + r["default"].cookie("userid")), e.push("tm=" + (new Date).getTime()), e.push("sys=" + r["default"].getOs()), e.push("browser=" + r["default"].getBrowser()), e.push("wh=" + window.screen.width + "*" + window.screen.height), e.join("&")) : function() {
                var e = "",
                    t = "",
                    o = "";
                try {
                    t = r["default"].cookie("prov"), r["default"].cookie("city"), o = r["default"].cookie("userid")
                } catch (i) {}
                e += "url=" + encodeURIComponent(document.URL), e += "&ap=" + n.join("|"), e += "&ar=" + t, e += "&cu=" + o, "function" == typeof window.getChannelInfo && (e += "&ci=" + encodeURIComponent(window.getChannelInfo()));
                return e += "&version=" + a
            }();
            var e
        }

        function u() {
            return r["default"].isMobile() ? t[1] : t[0]
        }
        return {
            loadCmp: !0,
            delaySendTime: 500,
            add: function(t) {
                return n.push(t), this.loadCmp && (clearTimeout(e), e = setTimeout(function() {
                    var e = i();
                    (0, o["default"])([u() + e]), n.length = 0
                }, this.delaySendTime)), this
            },
            get: function() {
                return u() + i()
            },
            collection: function() {
                if (0 === n.length || this.loadCmp) return !1;
                var e = i();
                (0, o["default"])([u() + e]), n = [], this.loadCmp = !0
            }
        }
    }();
    t["default"] = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = v(n(3)),
        a = v(n(0)),
        i = v(n(7)),
        u = v(n(1)),
        d = v(n(17)),
        s = v(n(2)),
        l = v(n(8)),
        c = v(n(10)),
        f = v(n(11)),
        p = v(n(19)),
        h = n(20),
        m = v(n(21));

    function v(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var b = m["default"].preViewListHandler,
        y = m["default"].iframeHandler,
        w = m["default"].noCodeHandler,
        g = m["default"].callbackHandler,
        O = m["default"].jsIframeCodeHandler,
        C = {
            version: "4.0.1",
            cl: 0,
            init: function() {},
            show: function(e, t) {
                var n = this,
                    r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                    o = !(arguments.length > 3 && arguments[3] !== undefined) || arguments[3];
                null == r && (r = {}), "function" == typeof r && (r = {
                    RenderCmp: r
                });
                var u = "https://ax.ifeng.com/showcode",
                    d = "",
                    f = "",
                    m = "",
                    v = a["default"].cookie("userid"),
                    y = {};
                null == v && (v = "");
                for (var w = c["default"].getRequestArr(e.aids, t), g = w.adArr, O = w.preViewList, C = 0; C < g.length; C++) {
                    var x = g[C],
                        P = "";
                    0 != C && (P = ",");
                    var _ = t;
                    (0, s["default"])(t) || (_ = t[x.ap]), d += P + x.ap, f += P + (0, h.getRealNum)(x.w, _), m += P + (0, h.getRealNum)(x.h, _), x.el = _, x.w = (0, h.getRealNum)(x.w, _, !1), x.h = (0, h.getRealNum)(x.h, _, !1), y[x.ap] = x
                }
                if ("" != d) {
                    if (u += "?adids=" + d, u += "&uid=" + v, u += "&w=" + f, u += "&h=" + m, u += "&dm=" + (0, h.getDomain)(), u += "&tc=" + (new Date).getTime(), 0 == this.cl) {
                        var k = (0, h.isIndex)() ? "ifengRotator_iis3" : "ifengRotator_iis3_c";
                        this.cl = a["default"].getLocal(k), "undefined" != typeof this.cl && null != this.cl && "" !== this.cl && "NaN" != this.cl && 1e3 != this.cl || (this.cl = parseInt(10 * Math.random() + 1)), a["default"].setLocal(k, parseInt(this.cl) + 1, 12)
                    }
                    u += "&cl=" + this.cl;
                    var j = (0, h.getCH)();
                    "" != j && (u += "&ch=" + j), u += "&cb=callback";
                    var M = (0, h.getExtend)();
                    "" != M && (u += M), i["default"].getJsonP({
                        url: u,
                        urlHandler: function(e) {
                            return l["default"].urlHandler(e)
                        }
                    }, "cb", function(e) {
                        l["default"].loadCmpHandler();
                        var a = (0, h.turnAdResCode)(e);
                        if (r.DataCmp) {
                            var i = r.DataCmp(a);
                            if (void 0 !== i && !i) return
                        }
                        n.adDataHanlder(t, r, y, a, o)
                    }, function() {
                        l["default"].loadErrHandler(), r.RenderError && r.RenderError(p["default"].Iis_Net_Error), n.errHandler(e, t, o)
                    }, 1e4, 1)
                }
                b(O, r)
            },
            adDataHanlder: function(e, t, n, o, i) {
                if ("" != o && void 0 !== o) {
                    var u = [],
                        d = {};
                    for (var l in o) {
                        var c = o[l],
                            f = n[c.ap].el;
                        try {
                            n[c.ap].responseData = c;
                            var h = this.setElContent({
                                ap: c.ap,
                                code: c.code,
                                el: f,
                                w: n[c.ap].w,
                                h: n[c.ap].h,
                                murls: c.murls,
                                curls: c.curls,
                                encode: !1,
                                adConfig: n[c.ap]
                            });
                            ("object" == (void 0 === h ? "undefined" : r(h)) && h.hasOwnProperty("data") && (h.data.hasOwnProperty("isTemplet") && "on" != h.data.isTemplet || !h.data.hasOwnProperty("isTemplet")) || "string" == typeof h) && this.sendLog(f, c.murls, c.curls), "" == h && (w(f, i), u.push(l))
                        } catch (b) {
                            d[c.ap] = c, this.errHandler(adData, e, i)
                        }
                    }
                    if (!(0, s["default"])(e) && "object" == (void 0 === e ? "undefined" : r(e)))
                        for (var m in e) o.hasOwnProperty(m) || (w(e[m], i), u.push(m));
                    for (var v = 0; v < u.length; v++) {
                        delete o[u[v]]
                    }
                    a["default"].isNullObj(o) || t.RenderCmp && t.RenderCmp(o), a["default"].isNullObj(d) || t.RenderError && t.RenderError(p["default"].ResponseDataError, d)
                } else t.RenderError && t.RenderError(p["default"].NoResponseData)
            },
            sendLog: function(e, t, n) {
                (0, s["default"])(e) && n && n.hasOwnProperty("length") && n.length > 0 && d["default"].addEvent(e, "click", function() {
                    (0, o["default"])(n)
                }), (0, o["default"])(t)
            },
            setElContent: function(e) {
                var t = e.ap,
                    n = e.code,
                    r = e.el,
                    o = e.w,
                    a = e.h,
                    i = e.murls,
                    u = i === undefined ? [] : i,
                    d = e.curls,
                    s = d === undefined ? [] : d,
                    l = e.encode,
                    f = l === undefined || l,
                    p = e.adConfig,
                    m = p === undefined ? null : p,
                    v = c["default"].getAdCode(t, n, f),
                    b = v.adCode,
                    y = v.adEncode,
                    w = (0, h.setAdResCode)(b, y);
                return this.codeHandler({
                    code: w,
                    ap: t,
                    el: r,
                    w: o,
                    h: a,
                    murls: u,
                    curls: s,
                    adConfig: m
                })
            },
            checkParam: function(e, t) {},
            codeHandler: function(e) {
                var t = e.ap,
                    n = e.code,
                    r = e.el,
                    o = e.w,
                    a = e.h,
                    i = e.murls,
                    d = e.curls,
                    l = e.adConfig,
                    c = l === undefined ? null : l;
                if ("" == n) return "";
                var p = n,
                    m = !1;
                try {
                    p = JSON.parse(n), m = (0, h.isTpl)(p)
                } catch (w) {}
                if (m) {
                    var v = {
                        ap: t,
                        w: o,
                        h: a,
                        click_imp_arr: d,
                        imp_arr: i
                    };
                    for (var b in p.data) v[b] = p.data[b];
                    c && c.hasOwnProperty("extCode") && (v.extCode = c.extCode), "" != p.script ? (p.script = (0, f["default"])(p.script, p.callback), (0, u["default"])(p.script, function() {
                        g(p, v, r)
                    })) : g(p, v, r)
                } else if ((0, s["default"])(r))
                    if (-1 == (p = n + "").indexOf("<\/script>") && -1 == p.indexOf("</html>")) r.innerHTML = p;
                    else {
                        r.innerHTML = "";
                        try {
                            y(r, O(p, i, d), o, a, c)
                        } catch (w) {}
                    } return p
            },
            errHandler: function(e, t, n) {
                if (n)
                    if (e.extra && e.extra.base && e.extra.w && e.extra.h) this.codeHandler({
                        code: e.extra.base,
                        el: t,
                        w: e.extra.w,
                        h: e.extra.h
                    });
                    else if ((0, s["default"])(t)) "" == t.innerHTML && (t.style.display = "none");
                else if ("object" == (void 0 === t ? "undefined" : r(t)))
                    for (var o in t) t[o] && "" == t[o].innerHTML && (t[o].style.display = "none")
            }
        };
    t["default"] = C
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = n(0),
        a = {
            getJsonP: function(e, t, n, r, a, i, u) {
                var d, s = "if" + l + Math.floor(100 * Math.random()),
                    l = o.now(),
                    c = 0,
                    f = 0,
                    p = this,
                    h = -1,
                    m = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                    v = (a = a || 1e4, i || 1),
                    b = u || 1e3,
                    y = function() {
                        window.hasOwnProperty ? window.hasOwnProperty(s) && delete window[s] : window[s] = undefined, clearTimeout(f), d && d.parentNode && (m.removeChild(d), d.onload = d.onreadystatechange = null, d.onerror = null, d = undefined)
                    },
                    w = function() {
                        y(), c >= v ? r && r.call(this, null, {
                            responseTime: o.now() - l,
                            retryCount: c,
                            error: h
                        }) : setTimeout(g, b)
                    },
                    g = function() {
                        y(), s = "fa_" + c + "_" + l + Math.floor(100 * Math.random());
                        var r = p.getUrl(e, t, s);
                        window[s] = function(e) {
                            y(), h = -1, n.call(this, e, {
                                responseTime: o.now() - l,
                                retryCount: c
                            })
                        }, c++, (d = document.createElement("script")).setAttribute("type", "text/javascript"), d.setAttribute("src", r), d.setAttribute("charset", "utf-8"), m.insertBefore(d, m.firstChild), h = 1, f = setTimeout(w, a)
                    };
                g()
            },
            getUrl: function(e, t, n) {
                void 0 === t && (t = "callback");
                var o = e,
                    a = null;
                if ("object" == (void 0 === e ? "undefined" : r(e)) && e.hasOwnProperty("url") && e.hasOwnProperty("urlHandler") && (o = e.url, a = e.urlHandler), -1 != o.indexOf(t + "=")) {
                    var i = new RegExp("([\\?|&])" + t + "=\\w*", "g");
                    o = o.replace(i, "$1" + t + "=" + n)
                } else -1 != o.indexOf("?") ? o += "&" + t + "=" + n : o += "?" + t + "=" + n;
                return a && (o = a(o)), o
            }
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0)),
        o = i(n(9)),
        a = i(n(1));

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var u = {
        isBlock: !1,
        loadErrorNum: 0,
        pArr: ["GZHGXDs", "J2Bc", "jWtgT", "FA0", "Pxlv2L"],
        dArr: ["qcvf.ifeng.com", "ztyumn.ifeng.com"],
        urlHandler: function(e) {
            var t = e;
            if (this.isBlock && -1 == window.location.href.indexOf("###DEBUG")) {
                t = e;
                var n = e.substr(0, e.indexOf("?")),
                    a = e.substr(e.indexOf("?") + 1);
                a = this.randomSearch(a);
                var i = this.dArr[Math.floor(this.dArr.length * Math.random())],
                    u = this.pArr[Math.floor(this.pArr.length * Math.random())];
                n = (n = n.replace("ax.ifeng.com", i)).replace("showcode", u), a = this.insertRand(encodeURIComponent(o["default"].encode(a))), t = n + "?" + r["default"].creatUuid().substring(0, 6) + "=" + a
            }
            return t
        },
        randomSearch: function(e) {
            for (var t = e.split("&"), n = "", r = t.length, o = 0; o < t.length; o++)
                if (-1 != t[o].indexOf("adids")) {
                    n = t[o], t.splice(o, 1), r -= 1;
                    break
                } t.sort(function(e, t) {
                return Math.random() > .5 ? -1 : 1
            });
            var a = 1 + Math.round(Math.random() * r);
            return t.splice(a, 0, n), t.join("&")
        },
        insertRand: function(e) {
            var t = e,
                n = ["|", "~"],
                r = Math.round(60 + 40 * Math.random());
            return t = t.substr(0, r) + n[Math.floor(n.length * Math.random())] + t.substr(r)
        },
        loadErrHandler: function() {},
        loadCmpHandler: function() {},
        setAdblock: function(e) {
            e ? (this.isBlock = !0, r["default"].cookie("adb_isBlock", 1)) : (this.isBlock = !1, r["default"].cookie("adb_isBlock", 0))
        },
        checkAdblock: function() {
            var e = this,
                t = "https://c0.ifengimg.com/p/ax_/pic_cpc_cpm_cpa_guanggao_gg_ads.js",
                n = !1;
            if (XMLHttpRequest) {
                var r = new XMLHttpRequest;
                r.onload = function() {
                    e.setAdblock(!1)
                }, r.onerror = function() {
                    e.setAdblock(!0)
                };
                try {
                    r.open("GET", t, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"), r.send(""), n = !0
                } catch (o) {
                    n = !1
                }
            }
            n || (0, a["default"])(t, function() {
                e.setAdblock(!1)
            }, function() {
                e.setAdblock(!0)
            })
        },
        init: function() {
            var e = r["default"].cookie("adb_isBlock");
            e && (this.isBlock = 1 == e), "undefined" != typeof window.killads && window.killads ? this.setAdblock(!1) : r["default"].isMobile() && this.isBlock || this.checkAdblock()
        }
    };
    t["default"] = u
}, function(e, t, n) {
    "use strict";
    var r = function() {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            t = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
        return {
            encode: function(t) {
                var n, r, o, a, i, u;
                for (o = t.length, r = 0, n = ""; r < o;) {
                    if (a = 255 & t.charCodeAt(r++), r == o) {
                        n += e.charAt(a >> 2), n += e.charAt((3 & a) << 4), n += "==";
                        break
                    }
                    if (i = t.charCodeAt(r++), r == o) {
                        n += e.charAt(a >> 2), n += e.charAt((3 & a) << 4 | (240 & i) >> 4), n += e.charAt((15 & i) << 2), n += "=";
                        break
                    }
                    u = t.charCodeAt(r++), n += e.charAt(a >> 2), n += e.charAt((3 & a) << 4 | (240 & i) >> 4), n += e.charAt((15 & i) << 2 | (192 & u) >> 6), n += e.charAt(63 & u)
                }
                return n
            },
            decode: function(e) {
                var n, r, o, a, i, u, d;
                for (u = e.length, i = 0, d = ""; i < u;) {
                    do {
                        n = t[255 & e.charCodeAt(i++)]
                    } while (i < u && -1 == n);
                    if (-1 == n) break;
                    do {
                        r = t[255 & e.charCodeAt(i++)]
                    } while (i < u && -1 == r);
                    if (-1 == r) break;
                    d += String.fromCharCode(n << 2 | (48 & r) >> 4);
                    do {
                        if (61 == (o = 255 & e.charCodeAt(i++))) return d;
                        o = t[o]
                    } while (i < u && -1 == o);
                    if (-1 == o) break;
                    d += String.fromCharCode((15 & r) << 4 | (60 & o) >> 2);
                    do {
                        if (61 == (a = 255 & e.charCodeAt(i++))) return d;
                        a = t[a]
                    } while (i < u && -1 == a);
                    if (-1 == a) break;
                    d += String.fromCharCode((3 & o) << 6 | a)
                }
                return d
            },
            utf16to8: function(e) {
                var t, n, r, o;
                for (t = "", r = e.length, n = 0; n < r; n++)(o = e.charCodeAt(n)) >= 1 && o <= 127 ? t += e.charAt(n) : o > 2047 ? (t += String.fromCharCode(224 | o >> 12 & 15), t += String.fromCharCode(128 | o >> 6 & 63), t += String.fromCharCode(128 | o >> 0 & 63)) : (t += String.fromCharCode(192 | o >> 6 & 31), t += String.fromCharCode(128 | o >> 0 & 63));
                return t
            },
            utf8to16: function(e) {
                var t, n, r, o, a, i;
                for (t = "", r = e.length, n = 0; n < r;) switch ((o = e.charCodeAt(n++)) >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        t += e.charAt(n - 1);
                        break;
                    case 12:
                    case 13:
                        a = e.charCodeAt(n++), t += String.fromCharCode((31 & o) << 6 | 63 & a);
                        break;
                    case 14:
                        a = e.charCodeAt(n++), i = e.charCodeAt(n++), t += String.fromCharCode((15 & o) << 12 | (63 & a) << 6 | (63 & i) << 0)
                }
                return t
            }
        }
    }();
    e.exports = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        a = d(n(0)),
        i = d(n(1)),
        u = d(n(6));

    function d(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var s = {
        isRun: !1,
        urlPreViewCode: null,
        preViewCode: null,
        getPreViewCodeObj: {},
        init: function() {
            var e = a["default"].urlToObj(window.location.href);
            e.hasOwnProperty("PreViewCode") && (this.urlPreViewCode = e.PreViewCode), "object" == o(window.AdPreviewData) && (this.preViewCode = window.AdPreviewData)
        },
        run: function(e) {
            var t = this;
            null == this.preViewCode && null == this.urlPreViewCode ? e() : this.isRun ? e() : this.urlPreViewCode ? (0, i["default"])("//c0.ifengimg.com/web/d/aes.js", function() {
                if (!t.isRun) {
                    t.urlPreViewCode = window.IfengToolAES.decryption(t.urlPreViewCode, "asdfghjklzxcvbnm");
                    try {
                        t.urlPreViewCode = JSON.parse(t.urlPreViewCode)
                    } catch (n) {}
                    t.preViewCode = r({}, t.urlPreViewCode, t.preViewCode), t.isRun = !0
                }
                e()
            }) : (this.isRun = !0, e())
        },
        getAdCode: function(e, t, n) {
            var r = {
                adCode: t,
                adEncode: n
            };
            this.preViewCode && this.preViewCode.hasOwnProperty(e) && (this.getCodeById(e) && (r.adCode = this.getCodeById(e), r.adEncode = !1));
            return r
        },
        getCodeById: function(e) {
            if (this.preViewCode.hasOwnProperty(e)) {
                if (this.getPreViewCodeObj.hasOwnProperty(e)) return this.getPreViewCodeObj[e];
                var t = this.preViewCode[e],
                    n = t.code;
                a["default"].isArray(t) && (n = t[Math.floor(Math.random() * t.length)].code);
                var r = n.match(/<!--!([\s\S]*?)!-->/g),
                    o = n;
                if (null != r) {
                    for (var i = 0; i < r.length; i++) r[i] = r[i].replace(/<!--!([\s\S]*?)!-->/g, "$1");
                    o = r.join("")
                }
                try {
                    o = new Function("return " + o)(), !u["default"].isTpl(o) && o.data && o.data.hasOwnProperty("code") && (n = o.data.code)
                } catch (d) {}
                if ("" != n) return this.getPreViewCodeObj[e] = n, n
            }
            return null
        },
        getRequestArr: function(e, t) {
            var n = {
                adArr: e,
                preViewList: []
            };
            if (null != this.preViewCode) {
                for (var r = [], o = [], a = 0; a < e.length; a++) {
                    var i = e[a];
                    if (this.preViewCode.hasOwnProperty(i.ap)) {
                        var u = t,
                            d = i.ap,
                            s = i.w,
                            l = i.h,
                            c = i.murls,
                            f = c === undefined ? [] : c,
                            p = i.curls,
                            h = p === undefined ? [] : p,
                            m = i.extCode,
                            v = m === undefined ? "" : m,
                            b = i.iframeType,
                            y = b === undefined ? 1 : b;
                        this.getCodeById(d) ? (t.hasOwnProperty && t.hasOwnProperty(d) && (u = t[d]), r.push({
                            ap: d,
                            code: this.getCodeById(d),
                            el: u,
                            w: s,
                            h: l,
                            murls: f,
                            curls: h,
                            encode: !1,
                            adConfig: {
                                extCode: v,
                                iframeType: y
                            }
                        })) : o.push(i)
                    } else o.push(i)
                }
                n.adArr = o, n.preViewList = r
            }
            return n
        }
    };
    t["default"] = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "https://c0.ifengimg.com/web/d/",
        o = n(18);
    t["default"] = function(e, t) {
        var n = e;
        if ("http" != e.substr(0, 4) && "//" != e.substr(0, 2) && (n = r + e), o.hasOwnProperty(t)) {
            var a = o[t];
            n = a.dist + "?key=" + t + "&ver=" + a.version
        }
        return n
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function(e, t) {
        t && (0, a["default"])(e) && "" == e.innerHTML && (e.style.display = "none")
    };
    var r, o = n(2),
        a = (r = o) && r.__esModule ? r : {
            "default": r
        }
}, function(e, t, n) {
    "use strict";
    var r = v(n(1)),
        o = v(n(0)),
        a = v(n(15)),
        i = v(n(2)),
        u = v(n(3)),
        d = v(n(16)),
        s = v(n(6)),
        l = v(n(5)),
        c = v(n(27)),
        f = v(n(10)),
        p = v(n(8)),
        h = v(n(28)),
        m = v(n(29));

    function v(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var b = {
        pex: "c",
        tplLib: {},
        adElObj: [],
        init: function() {
            p["default"].init(), f["default"].init(), m["default"].init()
        },
        start: function() {
            new d["default"]({
                a: 1
            })
        },
        preload: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            h["default"].apply(this, t)
        },
        show: function(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null,
                r = !(arguments.length > 3 && arguments[3] !== undefined) || arguments[3],
                a = !(arguments.length > 4 && arguments[4] !== undefined) || arguments[4],
                d = e,
                l = t;
            e && !(0, i["default"])(e) && e.hasOwnProperty && (e.hasOwnProperty("aids") || e.hasOwnProperty("ap")) && (d = t, l = e), (0, i["default"])(d) && (l.hasOwnProperty("aids") ? d.setAttribute("c", l.aids[0].ap) : d.setAttribute("c", l.ap), this.adElObj.push(d)), a && (l.hasOwnProperty("aids") ? this.add(l.aids) : this.add([l])), f["default"].run(function() {
                l.hasOwnProperty("extra") && l.extra.hasOwnProperty("isOverseas") && l.extra.isOverseas.hasOwnProperty("prov") && o["default"].cookie("prov") === l.extra.isOverseas.prov ? s["default"].setElContent(l.ap, l.extra.isOverseas.data, d, l.extra.isOverseas.w, l.extra.isOverseas.h) : (l.hasOwnProperty("aids") ? s["default"].show(l, d, n, r) : l.hasOwnProperty("ap") && (l.hasOwnProperty("encode") || (l.encode = !0), l.el = d, s["default"].setElContent(l)), l.hasOwnProperty("rurls") && (0, u["default"])(l.rurls))
            })
        },
        add: function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n && n.hasOwnProperty("ap") && l["default"].add(n.ap)
            }
        },
        setAdElContent: function(e) {
            s["default"].setElContent(e)
        },
        adControl: a["default"],
        adRotatorFactory: c["default"],
        uuid: o["default"].creatUuid,
        loadJs: r["default"],
        showTip: function() {
            for (var e = 0; e < this.adElObj.length; e++) {
                var t = this.adElObj[e];
                t.style.borderWidth = "5px", t.style.borderColor = "red", t.style.position = "relative", document.createElement("SPAN")
            }
        }
    };
    window.IfengAmgr = b, window.IfengAmgr.init()
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = n(4),
        a = {};
    e.exports = function(e, t, n, i, u, d) {
        var s = function(e) {
            var t = e;
            if (-1 != e.indexOf("?")) {
                var n = (0, o.urlToObj)(e);
                if (n.hasOwnProperty("key")) {
                    n.hasOwnProperty("ver") || (n.ver = "1.0");
                    var r = n.key,
                        a = n.ver;
                    if (delete n.key, delete n.ver, XMLHttpRequest && localStorage) try {
                        var i = localStorage.getItem(r);
                        if ((i = JSON.parse(i)) && i.ver == a) {
                            var u = new Function(i.content);
                            return {
                                url: t,
                                callback: u
                            }
                        }
                        var d = new XMLHttpRequest;
                        if (d.upload) {
                            var s = {
                                sn: null,
                                en: null
                            };
                            d.timeout = 1e4, d.onload = function() {
                                localStorage.setItem(r, JSON.stringify({
                                    url: e,
                                    content: d.responseText,
                                    ver: a
                                })), new Function(d.responseText).call(window), s.sn && s.sn()
                            }, d.ontimeout = function() {
                                s.en && s.en()
                            }, d.onerror = function() {
                                s.en && s.en()
                            }, s.load = function() {
                                d.open("GET", t, !0), d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"), d.send("")
                            };
                            var l = t.substr(0, t.indexOf("?"));
                            return {
                                url: t = l + (0, o.objectParseToString)(n),
                                callback: s
                            }
                        }
                    } catch (c) {}
                }
            }
            return {
                url: t,
                callback: null
            }
        }(e);
        e = s.url;
        var l, c = 0,
            f = 0,
            p = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
            h = (i = i || 5e3, u || 1),
            m = d || 1e3,
            v = Date.now();

        function b() {
            clearTimeout(f), l && l.parentNode && (p.removeChild(l), l.onload = l.onreadystatechange = null, l.onload = null, l.onerror = null, l = undefined)
        }

        function y() {
            b();
            for (var t = 0; t < a[e].su.length; t++) {
                var n = a[e].su[t];
                n && n()
            }
            a[e].er.length = 0, a[e].su.length = 0, a[e].load = !0
        }

        function w() {
            b(), c >= h ? function() {
                b();
                for (var t = 0; t < a[e].er.length; t++) {
                    var n = a[e].er[t];
                    n && n.call(this, null, {
                        responseTime: Date.now() - v,
                        retryCount: c
                    })
                }
                a[e].er.length = 0, a[e].su.length = 0
            }() : setTimeout(g, m)
        }

        function g() {
            b(), c++, (l = document.createElement("script")).setAttribute("type", "text/javascript"), l.setAttribute("src", e), l.setAttribute("charset", "utf-8"), l.readyState ? l.onreadystatechange = function() {
                "loaded" != l.readyState && "complete" != l.readyState || y()
            } : l.onload = function() {
                y()
            }, p.insertBefore(l, p.firstChild), f = setTimeout(w, i)
        }
        a.hasOwnProperty(e) ? a[e].load ? t && t() : (a[e].su.push(t), a[e].er.push(n)) : (a[e] = {
            su: [t],
            er: [n],
            load: !1
        }, null != s.callback ? "function" == typeof s.callback ? (s.callback.call(window), y()) : "object" == r(s.callback) ? (s.callback.sn = y, s.callback.en = g, s.callback.load()) : g() : g())
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(0),
        a = (r = o) && r.__esModule ? r : {
            "default": r
        };
    t["default"] = function(e) {
        var t = e.showIntervalTime,
            n = t === undefined ? 0 : t,
            r = e.handler,
            o = r === undefined ? null : r,
            i = e.apid,
            u = i === undefined ? "0" : i,
            d = e.frequency,
            s = d === undefined ? 2 : d,
            l = e.delayTime,
            c = l === undefined ? 0 : l,
            f = a["default"].cookie("ifengWindowCookieName_" + u);
        Number(f) < s && setTimeout(function() {
            a["default"].cookie("ifengWindowCookieName_" + u, Number(f) + 1, {
                expires: n
            }), o && o()
        }, 1e3 * c)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(5),
        i = (r = a) && r.__esModule ? r : {
            "default": r
        };
    var u = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.init(t)
        }
        return o(e, [{
            key: "init",
            value: function(e) {
                setTimeout(function() {
                    i["default"].collection()
                }, 800)
            }
        }]), e
    }();
    t["default"] = u
}, function(e, t, n) {
    "use strict";
    var r = {
        $E: function(e) {
            var t = "string" == typeof e ? document.getElementById(e) : e;
            return null != t ? t : null
        },
        addEvent: function(e, t, n) {
            var r = this.$E(e);
            if (null != r)
                if (-1 != t.indexOf(",")) {
                    for (var o = t.split(","), a = 0, i = o.length; a < i; a++) {
                        var u = o[a];
                        if ("" == u) return;
                        r.attachEvent ? r.attachEvent("on" + u, n) : r.addEventListener(u, n, !1)
                    }
                    o = null
                } else r.attachEvent ? r.attachEvent("on" + t, n) : r.addEventListener(t, n, !1)
        },
        removeEvent: function(e, t, n) {
            var r = this.$E(e);
            if (null != r && "function" == typeof n && void 0 !== t)
                if (-1 != t.indexOf(",")) {
                    for (var o = t.split(","), a = 0, i = o.length; a < i; a++) {
                        var u = o[a];
                        if ("" == u) return;
                        r.addEventListener ? r.removeEventListener(u, n, !1) : r.attachEvent && r.detachEvent("on" + u, n)
                    }
                    o = null
                } else r.addEventListener ? r.removeEventListener(t, n, !1) : r.attachEvent && r.detachEvent("on" + t, n)
        }
    };
    e.exports = r
}, function(e, t, n) {
    "use strict";
    e.exports = {
        yg: {
            dist: "https://c0.ifengimg.com/web/d/yg.js",
            version: "1.0.0"
        },
        embed: {
            dist: "https://c0.ifengimg.com/web/d/ebd.js",
            version: "1.0.0"
        },
        showFeed: {
            dist: "https://c0.ifengimg.com/web/d/showFeed.js",
            version: "1.0.0"
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = {
        Iis_Net_Error: 1003,
        NoResponseData: 1004,
        ResponseDataError: 1005
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    t.getRealNum = function(e, t) {
        var n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2],
            r = e;
        switch (void 0 === e ? "undefined" : o(e)) {
            case "function":
                r = e(t);
                break;
            case "string":
                if (n && "%" == e.substr(e.length - 1, 1)) {
                    var a = t.parentNode || document.body;
                    r = a.offsetWidth
                }
        }
        return r
    }, t.getCH = function() {
        var e = "";
        if (u["default"].isMobile()) {
            var t = u["default"].urlToObj(window.location.href);
            t && t.hasOwnProperty("ch") && (e = t.ch)
        } else {
            var n = window.location.href.match(/[&|#|\?]+(_.*?)(?=&|\s|\?|\||#|%|$)/);
            n && n.length > 1 && (e = n[1])
        }
        return e
    }, t.getExtend = function() {
        var e = "",
            t = u["default"].urlToObj(window.location.href);
        t && t.hasOwnProperty("iip") && (e = "&iip=" + t.iip);
        try {
            var n = u["default"].getMate();
            n.hasOwnProperty("keywords") && "" != n.keywords && (e += "&keywords=" + encodeURIComponent(n.keywords))
        } catch (r) {}
        return e
    }, t.getDomain = function() {
        var e = location.hostname;
        u["default"].isMobile() && (navigator.userAgent.match(/(baidubrowser|baiduboxapp)/i) && (e = "baidu.ua"), navigator.userAgent.match(/(ucbrowser|ucweb)/i) && (e = "uc.ua"), navigator.userAgent.match(/qqbrowser/i) && (e = "qq.ua"));
        return e
    }, t.isIndex = function() {
        var e = window.location.pathname;
        return "/index.html" == e || "/index.html" == e || "/" == e
    }, t.isTpl = function(e) {
        return e.hasOwnProperty("data") && e.hasOwnProperty("script") && e.hasOwnProperty("callback")
    }, t.setAdResCode = d, t.turnAdResCode = function(e) {
        if ("object" == (void 0 === e ? "undefined" : o(e))) {
            var t = {};
            for (var n in e) {
                var a = r({}, e[n]);
                a.code = d(a.code), t[n] = a
            }
            return t
        }
        return e
    };
    var a, i = n(0),
        u = (a = i) && a.__esModule ? a : {
            "default": a
        };

    function d(e) {
        var t = e;
        if (!(arguments.length > 1 && arguments[1] !== undefined) || arguments[1]) try {
            t = decodeURIComponent(e.replace(/\+/g, "%20"))
        } catch (u) {}
        var n, r, o, a, i = "#";
        return -1 != t.indexOf("\x3c!--!") && (i = "!"), r = "\x3c!--" + i, o = i + "--\x3e", n = t.indexOf(r) + r.length, a = t.indexOf(o), -1 != n && -1 != a && a >= n && (t = t.substring(n, a)), t
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = d(n(22)),
        o = d(n(23)),
        a = d(n(12)),
        i = d(n(25)),
        u = d(n(26));

    function d(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t["default"] = {
        preViewListHandler: r["default"],
        iframeHandler: o["default"],
        noCodeHandler: a["default"],
        callbackHandler: i["default"],
        jsIframeCodeHandler: u["default"]
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function(e, t) {
        if (e.length > 0) {
            for (var n = {}, r = 0; r < e.length; r++) {
                var o = e[r];
                "" != o.code && (n[o.ap] = o)
            }
            if (!sdkTool.isNullObj(n) && t.DataCmp) {
                var i = t.DataCmp(n);
                if (void 0 !== i && !i) return
            }
            for (var u = 0; u < e.length; u++) {
                var d = e[u],
                    s = this.setElContent(d);
                "" == s && (0, a["default"])(d.el, !0)
            }
            sdkTool.isNullObj(n) || t.RenderCmp && t.RenderCmp(n)
        }
    };
    var r, o = n(12),
        a = (r = o) && r.__esModule ? r : {
            "default": r
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function(e, t, n, i, d) {
        if (d && d.hasOwnProperty("iframeType") && 0 == d.iframeType) return void(0, r["default"])(e, t, n, i);
        if (o["default"].isMobile()) {
            var s = -1;
            if (d && d.responseData && d.responseData.hasOwnProperty("b") && (s = d.responseData.b), -1 == u.indexOf(s)) return void(e.innerHTML = function(e, t, n) {
                var r = "//api.3g.ifeng.com/thirdoutput?" + encodeURIComponent(a["default"].encode(e)),
                    o = t,
                    i = n;
                isNaN(Number(t)) || (o = t + "px");
                isNaN(Number(n)) || (i = n + "px");
                return '<iframe  src="' + r + '" width="' + t + '" height="' + n + '" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0;vertical-align:bottom;margin:0;width:' + o + ";height:" + i + '" allowtransparency="true"></iframe>'
            }(t, n, i))
        }(0, r["default"])(e, t, n, i)
    };
    var r = i(n(24)),
        o = i(n(0)),
        a = i(n(9));

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var u = ["92"]
}, function(e, t, n) {
    "use strict";
    var r = function(e, t, n, r) {
        var o = document.createElement("iframe"),
            a = t; - 1 == a.indexOf("</html>") && (a = '<!doctype html><html><head><meta charset="utf-8" /></head><body style="margin:0;padding:0;">' + t + "</body></html>"), o.setAttribute("frameborder", 0), o.setAttribute("border", 0), o.setAttribute("scrolling", "no");
        var i = n,
            u = r;
        isNaN(Number(i)) || (i += "px"), isNaN(Number(u)) || (u += "px"), o.style.width = i, o.style.height = u, e.appendChild(o);
        var d = o.contentWindow.document ? o.contentWindow.document : o.contentDocument;
        o.document ? (d.open(), o.contentWindow.contents = a, o.src = 'javascript:window["contents"]', d.close()) : (d.open(), d.write(a), d.close())
    };
    e.exports = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function(e, t, n) {
        if (IfengAmgr && IfengAmgr.tplLib.hasOwnProperty(e.callback)) IfengAmgr.tplLib[e.callback].render(t, n);
        else {
            var r = new Function("return " + e.callback)();
            r(t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = function(e, t, n) {
        if (-1 != e.indexOf("click_imp_arr") || -1 != e.indexOf("yingguang") || -1 != e.indexOf("imagetext20170622")) {
            var r = "";
            0 == n.length && (n = [""]);
            for (var o = 0; o < n.length; o++) r += '"' + n[o] + '",';
            r = r.substr(0, r.length - 1), e = "<script>var click_imp_arr =[" + r + "];var imp_arr = [];<\/script>" + e
        }
        return e
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(0),
        a = (r = o) && r.__esModule ? r : {
            "default": r
        };
    t["default"] = function(e) {
        if ("undefined" != typeof e.saleMode) var t = e.saleMode;
        else t = "CPD";
        "CPD" == t ? new function(e) {
            var t = "ifengRotator_" + e.apid,
                n = e.maxTimes,
                r = a["default"].cookie(t),
                o = {};
            if (e.data.ap && (o.ap = e.data.ap), e.data.extra && (o.extra = e.data.extra), (void 0 === r || "" === r || "NaN" == r) && (r = parseInt(1e5 * Math.random()) % n), a["default"].cookie(t, (parseInt(r) + 1) % n), e.data && e.data.lists)
                for (var i = e.data.lists, u = [], d = [], s = 0; s < i.length; s++) i[s].base && "ture" == i[s].base ? d.push(i[s]) : u.push(i[s]);
            if (u[r])
                for (var l in u[r]) o[l] = u[r][l];
            else if (d[0])
                for (var c in d[0]) o[c] = d[0][c];
            e.handler && e.handler(e.elm, o)
        }(e) : "CPT" == t && new function(e) {}(e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(1)),
        o = a(n(11));

    function a(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t["default"] = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var a = [].concat(t),
            i = a.shift();
        i.hasOwnProperty("data") && i.hasOwnProperty("preload") && i.hasOwnProperty("callback") && (0, r["default"])((0, o["default"])(i.preload), function() {
            a.unshift(i.data), IfengAmgr.tplLib[i.callback].render.apply(null, a)
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(7)),
        o = a(n(0));

    function a(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var i = {
        init: function() {
            if ("undefined" == typeof regionOrientProv) {
                o["default"].cookie("prov"), o["default"].cookie("city"), o["default"].cookie("weather_city"), o["default"].cookie("region_ip");
                var e = o["default"].cookie("region_ver");
                null != typeof e && "undefined" != e && "" != e && "1.2" == e || r["default"].getJsonP("https://region.ifeng.com/get?format=js", "callback", function(e) {
                    var t = e.split("["),
                        n = t[0].slice(0, -1).split("_"),
                        r = n[0],
                        a = n[1],
                        i = t[1].slice(0, -1),
                        u = t[2].slice(0, -1);
                    u = u.substring(0, u.lastIndexOf(".")) + ".x", o["default"].cookie("prov", r, {
                        expires: 43200
                    }), o["default"].cookie("city", a, {
                        expires: 43200
                    }), o["default"].cookie("weather_city", i, {
                        expires: 43200
                    }), o["default"].cookie("region_ip", u, {
                        expires: 43200
                    }), o["default"].cookie("region_ver", "1.2", {
                        expires: 43200
                    })
                })
            }
        }
    };
    t["default"] = i
}]);
//-----[MjAxOS0wMy0yNSAxMToyMzo1OS10bXAvd2VicGFjay5pZmVuZy5jb20uY29uZmlnLmpzLWhvc3RuYW1lOnh1eWFmZW5nZGVNYWNCb29rLVByby5sb2NhbC1pcDoxNzIuMzEuMTU2Ljk2]---//