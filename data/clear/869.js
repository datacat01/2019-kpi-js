! function(e) {
    function t(t) {
        for (var n, d, u = t[0], o = t[1], i = t[2], c = 0, f = []; c < u.length; c++) d = u[c], l[d] && f.push(l[d][0]), l[d] = 0;
        for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        for (s && s(t); f.length;) f.shift()();
        return r.push.apply(r, i || []), a()
    }

    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], n = !0, u = 1; u < a.length; u++) {
                var o = a[u];
                0 !== l[o] && (n = !1)
            }
            n && (r.splice(t--, 1), e = d(d.s = a[0]))
        }
        return e
    }
    var n = {},
        l = {
            8: 0
        },
        r = [];

    function d(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, d), a.l = !0, a.exports
    }
    d.m = e, d.c = n, d.d = function(e, t, a) {
        d.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, d.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, d.t = function(e, t) {
        if (1 & t && (e = d(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (d.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) d.d(a, n, function(t) {
                return e[t]
            }.bind(null, n));
        return a
    }, d.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return d.d(t, "a", t), t
    }, d.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, d.p = "https://p0.ifengimg.com/fe/zl/test/live/application/";
    var u = window.webpackJsonp = window.webpackJsonp || [],
        o = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var i = 0; i < u.length; i++) t(u[i]);
    var s = o;
    r.push([747, 0, 1]), a()
}([, , , , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(45)).default;
    t.default = l
}, function(e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.rel = void 0;
    t.rel = ""
}, , function(e, t) {
    function a(e, t, a, n, l, r, d) {
        try {
            var u = e[r](d),
                o = u.value
        } catch (e) {
            return void a(e)
        }
        u.done ? t(o) : Promise.resolve(o).then(n, l)
    }
    e.exports = function(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(l, r) {
                var d = e.apply(t, n);

                function u(e) {
                    a(d, l, r, u, o, "next", e)
                }

                function o(e) {
                    a(d, l, r, u, o, "throw", e)
                }
                u(void 0)
            })
        }
    }
}, , function(e, t) {
    e.exports = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, a) : {};
                    n.get || n.set ? Object.defineProperty(t, a, n) : t[a] = e[a]
                } return t.default = e, t
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "handleAd", {
        enumerable: !0,
        get: function() {
            return r.handleAd
        }
    }), t.default = void 0;
    var l = n(a(118)),
        r = a(75),
        d = l.default;
    t.default = d
}, , function(e, t) {
    var a = e.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = a)
}, , function(e, t) {
    var a = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = a)
}, function(e, t, a) {
    e.exports = a(189)
}, function(e, t, a) {
    e.exports = !a(31)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, a) {
    var n = a(32),
        l = a(112),
        r = a(85),
        d = Object.defineProperty;
    t.f = a(16) ? Object.defineProperty : function(e, t, a) {
        if (n(e), t = r(t, !0), n(a), l) try {
            return d(e, t, a)
        } catch (e) {}
        if ("get" in a || "set" in a) throw TypeError("Accessors not supported!");
        return "value" in a && (e[t] = a.value), e
    }
}, function(e, t) {
    var a = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return a.call(e, t)
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.remoteChecklogin = t.logout = t.closeDialog = t.login = t.getUserInfo = t.isLogin = t.isReal = t.event = t.EVENTNAMES = t.uuid = t.LOGINURL = void 0;
    var l = n(a(7)),
        r = a(8);
    const d = "//id.ifeng.com/allsite/login";
    t.LOGINURL = d;
    t.uuid = function() {
        return `dialog_${Math.floor(Math.random()*Date.now())}`
    };
    const u = {
        login: "login",
        logout: "logout",
        dialogOpen: "dialogOpen",
        dialogClose: "dialogClose",
        urlChange: "urlChange"
    };
    t.EVENTNAMES = u;
    let o = null,
        i = null,
        s = null,
        c = null;
    const f = "undefined" != typeof window && window.WHALE_PC_AUTH_EVENT || new r.Event;
    t.event = f, "undefined" != typeof window && (window.WHALE_PC_AUTH_EVENT || (window.WHALE_PC_AUTH_EVENT = f));
    const m = function() {
        return !(!r.cookie.get("sid") || "0" !== r.cookie.get("IF_REAL"))
    };
    t.isReal = m;
    const p = function() {
        return !!r.cookie.get("sid")
    };
    t.isLogin = p;
    const h = function() {
        return {
            sid: r.cookie.get("sid"),
            userName: r.cookie.get("IF_USER"),
            isReal: m()
        }
    };
    t.getUserInfo = h;
    const g = function() {
        clearInterval(o), o = setInterval(() => {
            p() && (f.trigger(u.login, h()), clearInterval(o), r.cookie.get("IF_OTK") || clearInterval(s))
        }, 300)
    };
    t.login = function(e) {
        g(), clearInterval(i), i = setInterval(() => {
            m() && (f.trigger(u.dialogClose), clearInterval(i))
        }, 300), r.cookie.del("IF_OTK", "/", ".ifeng.com"), clearInterval(s), s = setInterval(() => {
            const e = r.cookie.get("IF_OTK");
            if (e.trim()) {
                clearInterval(s);
                try {
                    const t = new Function(`return ${e}`)();
                    r.cookie.del("IF_OTK", "/", ".ifeng.com"), 1 === t.code ? f.trigger(u.urlChange, t.data.url) : (f.trigger(u.urlChange, d), t.message && alert(t.message))
                } catch (e) {
                    r.cookie.del("IF_OTK", "/", ".ifeng.com"), alert("第三方登录失败，请刷新页面重试")
                }
            }
        }, 300);
        const t = p() && !m() ? "//id.ifeng.com/allsite/loginmob" : d;
        f.trigger(u.dialogOpen, t, e)
    };
    t.closeDialog = function() {
        clearInterval(o), clearInterval(i), clearInterval(s), f.trigger(u.dialogClose)
    };
    t.logout = function() {
        r.cookie.del("sid", "/", ".ifeng.com"), clearInterval(c), c = setInterval(() => {
            p() || (clearInterval(c), f.trigger(u.logout), g())
        }, 300)
    };
    const v = function() {
        var e = (0, l.default)(function*(e) {
            try {
                const t = yield(0, r.jsonp)("//id.ifeng.com/api/checklogin", {
                    data: {
                        sid: e
                    },
                    jsonpCallback: "__checkloginCallback",
                    cache: !1
                });
                return 1 === t.code ? t.data : {}
            } catch (e) {
                return {}
            }
        });
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
    t.remoteChecklogin = v
}, function(e, t, a) {
    "use strict";
    e.exports = {
        randomSort: (e, t) => {
            if ("[object Array]" !== Object.prototype.toString.call(e)) return e;
            const a = [];
            let n = e.length;
            const l = [...Array(n).keys()];
            for (let r = 0; r < t; r++) {
                const e = Math.ceil(Math.random() * n) - 1;
                a[r] = l[e], l.splice(e, 1), n--
            }
            return a.sort().map(t => e[t])
        }
    }
}, function(e, t, a) {
    var n = a(86)("wks"),
        l = a(37),
        r = a(14).Symbol,
        d = "function" == typeof r;
    (e.exports = function(e) {
        return n[e] || (n[e] = d && r[e] || (d ? r : l)("Symbol." + e))
    }).store = n
}, function(e, t, a) {
    var n = a(171),
        l = a(88);
    e.exports = function(e) {
        return n(l(e))
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, a) {
    var n = a(17),
        l = a(36);
    e.exports = a(16) ? function(e, t, a) {
        return n.f(e, t, l(1, a))
    } : function(e, t, a) {
        return e[t] = a, e
    }
}, function(e, t, a) {
    var n = a(14),
        l = a(12),
        r = a(113),
        d = a(24),
        u = a(18),
        o = function(e, t, a) {
            var i, s, c, f = e & o.F,
                m = e & o.G,
                p = e & o.S,
                h = e & o.P,
                g = e & o.B,
                v = e & o.W,
                _ = m ? l : l[t] || (l[t] = {}),
                y = _.prototype,
                E = m ? n : p ? n[t] : (n[t] || {}).prototype;
            for (i in m && (a = t), a)(s = !f && E && void 0 !== E[i]) && u(_, i) || (c = s ? E[i] : a[i], _[i] = m && "function" != typeof E[i] ? a[i] : g && s ? r(c, n) : v && E[i] == c ? function(e) {
                var t = function(t, a, n) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, a)
                        }
                        return new e(t, a, n)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(c) : h && "function" == typeof c ? r(Function.call, c) : c, h && ((_.virtual || (_.virtual = {}))[i] = c, e & o.R && y && !y[i] && d(y, i, c)))
        };
    o.F = 1, o.G = 2, o.S = 4, o.P = 8, o.B = 16, o.W = 32, o.U = 64, o.R = 128, e.exports = o
}, function(e, t, a) {
    var n, l, r, d, u;
    n = a(72), l = a(27).utf8, r = a(71), d = a(27).bin, (u = function(e, t) {
        e.constructor == String ? e = t && "binary" === t.encoding ? d.stringToBytes(e) : l.stringToBytes(e) : r(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
        for (var a = n.bytesToWords(e), o = 8 * e.length, i = 1732584193, s = -271733879, c = -1732584194, f = 271733878, m = 0; m < a.length; m++) a[m] = 16711935 & (a[m] << 8 | a[m] >>> 24) | 4278255360 & (a[m] << 24 | a[m] >>> 8);
        a[o >>> 5] |= 128 << o % 32, a[14 + (o + 64 >>> 9 << 4)] = o;
        var p = u._ff,
            h = u._gg,
            g = u._hh,
            v = u._ii;
        for (m = 0; m < a.length; m += 16) {
            var _ = i,
                y = s,
                E = c,
                b = f;
            s = v(s = v(s = v(s = v(s = g(s = g(s = g(s = g(s = h(s = h(s = h(s = h(s = p(s = p(s = p(s = p(s, c = p(c, f = p(f, i = p(i, s, c, f, a[m + 0], 7, -680876936), s, c, a[m + 1], 12, -389564586), i, s, a[m + 2], 17, 606105819), f, i, a[m + 3], 22, -1044525330), c = p(c, f = p(f, i = p(i, s, c, f, a[m + 4], 7, -176418897), s, c, a[m + 5], 12, 1200080426), i, s, a[m + 6], 17, -1473231341), f, i, a[m + 7], 22, -45705983), c = p(c, f = p(f, i = p(i, s, c, f, a[m + 8], 7, 1770035416), s, c, a[m + 9], 12, -1958414417), i, s, a[m + 10], 17, -42063), f, i, a[m + 11], 22, -1990404162), c = p(c, f = p(f, i = p(i, s, c, f, a[m + 12], 7, 1804603682), s, c, a[m + 13], 12, -40341101), i, s, a[m + 14], 17, -1502002290), f, i, a[m + 15], 22, 1236535329), c = h(c, f = h(f, i = h(i, s, c, f, a[m + 1], 5, -165796510), s, c, a[m + 6], 9, -1069501632), i, s, a[m + 11], 14, 643717713), f, i, a[m + 0], 20, -373897302), c = h(c, f = h(f, i = h(i, s, c, f, a[m + 5], 5, -701558691), s, c, a[m + 10], 9, 38016083), i, s, a[m + 15], 14, -660478335), f, i, a[m + 4], 20, -405537848), c = h(c, f = h(f, i = h(i, s, c, f, a[m + 9], 5, 568446438), s, c, a[m + 14], 9, -1019803690), i, s, a[m + 3], 14, -187363961), f, i, a[m + 8], 20, 1163531501), c = h(c, f = h(f, i = h(i, s, c, f, a[m + 13], 5, -1444681467), s, c, a[m + 2], 9, -51403784), i, s, a[m + 7], 14, 1735328473), f, i, a[m + 12], 20, -1926607734), c = g(c, f = g(f, i = g(i, s, c, f, a[m + 5], 4, -378558), s, c, a[m + 8], 11, -2022574463), i, s, a[m + 11], 16, 1839030562), f, i, a[m + 14], 23, -35309556), c = g(c, f = g(f, i = g(i, s, c, f, a[m + 1], 4, -1530992060), s, c, a[m + 4], 11, 1272893353), i, s, a[m + 7], 16, -155497632), f, i, a[m + 10], 23, -1094730640), c = g(c, f = g(f, i = g(i, s, c, f, a[m + 13], 4, 681279174), s, c, a[m + 0], 11, -358537222), i, s, a[m + 3], 16, -722521979), f, i, a[m + 6], 23, 76029189), c = g(c, f = g(f, i = g(i, s, c, f, a[m + 9], 4, -640364487), s, c, a[m + 12], 11, -421815835), i, s, a[m + 15], 16, 530742520), f, i, a[m + 2], 23, -995338651), c = v(c, f = v(f, i = v(i, s, c, f, a[m + 0], 6, -198630844), s, c, a[m + 7], 10, 1126891415), i, s, a[m + 14], 15, -1416354905), f, i, a[m + 5], 21, -57434055), c = v(c, f = v(f, i = v(i, s, c, f, a[m + 12], 6, 1700485571), s, c, a[m + 3], 10, -1894986606), i, s, a[m + 10], 15, -1051523), f, i, a[m + 1], 21, -2054922799), c = v(c, f = v(f, i = v(i, s, c, f, a[m + 8], 6, 1873313359), s, c, a[m + 15], 10, -30611744), i, s, a[m + 6], 15, -1560198380), f, i, a[m + 13], 21, 1309151649), c = v(c, f = v(f, i = v(i, s, c, f, a[m + 4], 6, -145523070), s, c, a[m + 11], 10, -1120210379), i, s, a[m + 2], 15, 718787259), f, i, a[m + 9], 21, -343485551), i = i + _ >>> 0, s = s + y >>> 0, c = c + E >>> 0, f = f + b >>> 0
        }
        return n.endian([i, s, c, f])
    })._ff = function(e, t, a, n, l, r, d) {
        var u = e + (t & a | ~t & n) + (l >>> 0) + d;
        return (u << r | u >>> 32 - r) + t
    }, u._gg = function(e, t, a, n, l, r, d) {
        var u = e + (t & n | a & ~n) + (l >>> 0) + d;
        return (u << r | u >>> 32 - r) + t
    }, u._hh = function(e, t, a, n, l, r, d) {
        var u = e + (t ^ a ^ n) + (l >>> 0) + d;
        return (u << r | u >>> 32 - r) + t
    }, u._ii = function(e, t, a, n, l, r, d) {
        var u = e + (a ^ (t | ~n)) + (l >>> 0) + d;
        return (u << r | u >>> 32 - r) + t
    }, u._blocksize = 16, u._digestsize = 16, e.exports = function(e, t) {
        if (null == e) throw new Error("Illegal argument " + e);
        var a = n.wordsToBytes(u(e, t));
        return t && t.asBytes ? a : t && t.asString ? d.bytesToString(a) : n.bytesToHex(a)
    }
}, function(e, t) {
    var a = {
        utf8: {
            stringToBytes: function(e) {
                return a.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(a.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], a = 0; a < e.length; a++) t.push(255 & e.charCodeAt(a));
                return t
            },
            bytesToString: function(e) {
                for (var t = [], a = 0; a < e.length; a++) t.push(String.fromCharCode(e[a]));
                return t.join("")
            }
        }
    };
    e.exports = a
}, , function(e, t, a) {
    "use strict";
    const n = a(20).randomSort,
        l = a(44).recommendRandomSort,
        r = a(43).formatImage,
        d = a(42).formatUrl;
    e.exports = {
        randomSort: n,
        recommendRandomSort: l,
        formatImage: r,
        formatUrl: d
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.oneChangeTwoDimensional = t.handleNewstime = t.getSkey = t.handleAd = void 0;
    var l = n(a(7)),
        r = a(8);
    const d = function() {
        var e = (0, l.default)(function*(e) {
            let t = null;
            try {
                if (e.preload) {
                    let t = [],
                        a = 0;
                    for (t = "string" == typeof e.preload ? [e.preload] : e.preload; t.length > a;) {
                        const e = t[a];
                        yield(0, r.loadScript)(e, {
                            cache: !1,
                            reload: !1
                        }), ++a
                    }
                }
                t = new Function(`return ${e.callback}`)()
            } catch (e) {
                e.message = `AdError - ${e.message}`, window && window.BJ_REPORT && window.BJ_REPORT.report(e)
            }
            return t
        });
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
    t.handleAd = d;
    const u = a(26);
    t.getSkey = ((e, t) => {
        const a = `Ifeng888${encodeURI(e)}${encodeURI(t)}`;
        return u(a).substr(2, 6).toLowerCase()
    });
    t.handleNewstime = (e => {
        try {
            if (!e) return e;
            const t = new Date;
            return e = e.substr(0, e.length - 3), Number(e.split("-")[0]) < t.getFullYear() ? e : e.substr(5, e.length)
        } catch (t) {
            return e
        }
    });
    t.oneChangeTwoDimensional = ((e, t) => {
        const a = [];
        for (let n = 0, l = e.length; n < l; n += t) {
            const l = e.slice(n, n + t);
            a.push(l)
        }
        return a
    })
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, a) {
    var n = a(23);
    e.exports = function(e) {
        if (!n(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t, a) {
    "use strict";
    var n = a(9),
        l = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "LoginDialog", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), t.default = void 0;
    var r = l(a(41)),
        d = n(a(19));
    t.default = d
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(7)),
        r = n(a(3)),
        d = n(a(1)),
        u = n(a(2)),
        o = n(a(668)),
        i = a(8),
        s = a(10),
        c = n(a(4)),
        f = n(a(208)),
        m = a(5);
    const p = (e, t) => {
        for (const a of t) "replaceArr" === a.type ? e.splice(a.index, 1, [{
            type: "ad",
            ref: a.ref
        }]) : "insertArr" === a.type && e.splice(a.index, 0, [{
            type: "ad",
            ref: a.ref
        }]);
        return e
    };
    class h extends d.default.PureComponent {
        constructor(...e) {
            super(...e), (0, r.default)(this, "state", {
                ads: []
            }), (0, r.default)(this, "event", new i.Event), (0, r.default)(this, "insert", (e, t, a) => {
                if (a && "function" == typeof a) {
                    const n = [];
                    t.forEach(e => {
                        const t = d.default.createRef();
                        n.push({
                            index: e,
                            ref: t,
                            type: "replaceArr"
                        })
                    }), e.forEach(e => {
                        const t = d.default.createRef();
                        n.push({
                            index: e,
                            ref: t,
                            type: "insertArr"
                        })
                    }), this.setState({
                        ads: [...this.state.ads, ...n]
                    }, () => {
                        const e = {};
                        for (const t of n) e[t.index] = t.ref.current;
                        a(e)
                    })
                }
            })
        }
        componentDidMount() {
            var e = this;
            return (0, l.default)(function*() {
                const t = e.props.ad;
                if (t) {
                    try {
                        (yield(0, s.handleAd)(t))(t.data, e.event, e.insert)
                    } catch (e) {}
                    try {
                        e.event.trigger("init")
                    } catch (e) {}
                }
            })()
        }
        render() {
            const e = this.state.ads,
                t = this.props,
                a = t.content,
                n = t.hasTopic,
                l = t.hasTitle,
                r = t.isContent,
                u = t.isList;
            let i = [],
                s = a instanceof Array ? a : [a];
            s = p(s, e), l && (i = s.slice(0, 1), s = s.slice(1));
            let c = "news_list";
            return r && (c = "content_list"), u && (c = "list"), d.default.createElement("ul", {
                className: o.default[c]
            }, l ? d.default.createElement(f.default, {
                content: i
            }) : "", s.map((e, t) => {
                if ("ad" === e.type) return d.default.createElement("li", {
                    key: t,
                    ref: e.ref
                });
                if ("1" === e.isHidden) return "";
                const a = [];
                let l = !1,
                    r = !1;
                if (e.pcNewsMark && e.pcNewsMark.length > 0)
                    for (const n of e.pcNewsMark) 1 === n ? a.push(o.default.bold) : 2 === n ? a.push(o.default.video) : 3 === n ? l = !0 : 4 === n && (r = !0);
                return 0 === t && n ? d.default.createElement("li", {
                    key: t,
                    className: o.default.topic
                }, d.default.createElement("h1", null, l ? d.default.createElement("span", {
                    className: o.default.zoujc
                }) : "", e.children && e.children.length > 0 ? d.default.createElement(d.default.Fragment, null, d.default.createElement("a", {
                    className: r ? o.default.cnRed : "",
                    href: e.url,
                    target: "_blank",
                    rel: m.rel
                }, e.title), e.children.map((e, t) => d.default.createElement(d.default.Fragment, {
                    key: t
                }, d.default.createElement("a", {
                    className: e.pcNewsMark && e.pcNewsMark.includes(4) ? o.default.cnRed : "",
                    href: e.url,
                    target: "_blank",
                    rel: m.rel
                }, e.title)))) : d.default.createElement("a", {
                    className: r ? o.default.cnRed : "",
                    href: e.url,
                    target: "_blank",
                    rel: m.rel
                }, e.title))) : d.default.createElement("li", {
                    key: t,
                    className: a.join(" ")
                }, l ? d.default.createElement("span", {
                    className: o.default.zoujc
                }) : "", e.children && e.children.length > 0 ? d.default.createElement(d.default.Fragment, null, d.default.createElement("a", {
                    className: r ? o.default.cnRed : "",
                    href: e.url,
                    target: "_blank",
                    rel: m.rel
                }, e.title), e.children.map((e, t) => d.default.createElement(d.default.Fragment, {
                    key: t
                }, d.default.createElement("a", {
                    className: e.pcNewsMark && e.pcNewsMark.includes(4) ? o.default.cnRed : "",
                    href: e.url,
                    target: "_blank",
                    rel: m.rel
                }, e.title)))) : d.default.createElement("a", {
                    className: r ? o.default.cnRed : "",
                    href: e.url,
                    target: "_blank",
                    rel: m.rel
                }, e.title))
            }))
        }
    }(0, r.default)(h, "propTypes", {
        content: u.default.oneOfType([u.default.object, u.default.array]),
        hasTopic: u.default.bool,
        hasTitle: u.default.bool,
        isContent: u.default.bool,
        isList: u.default.bool,
        ad: u.default.object
    });
    var g = (0, c.default)(h);
    t.default = g
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
    var a = 0,
        n = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++a + n).toString(36))
    }
}, function(e, t) {
    e.exports = !0
}, , function(e, t, a) {
    e.exports = {
        mask: "mask-3BMLJHyD",
        box: "box-1pZSPyeN",
        close: "close-280M1A5o",
        page: "page-1vTQpVJA"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(13)),
        u = n(a(2)),
        o = a(19),
        i = n(a(40));
    const s = function(e) {
        return {
            __html: `<iframe width="520" height="410" scrolling="no" frameborder="no" border="0" style="border:0px; margin:0px;padding:0px;" src="${e}"></iframe>`
        }
    };
    class c extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                isOpen: !1,
                src: o.LOGINURL
            }), (0, l.default)(this, "closeHandle", () => {
                (0, o.closeDialog)()
            })
        }
        componentDidMount() {
            this.unbindDialogOpen = o.event.on(o.EVENTNAMES.dialogOpen, (e = o.LOGINURL, t) => {
                t === this.props.id && this.setState({
                    isOpen: !0,
                    src: e
                })
            }), this.unbindDialogClose = o.event.on(o.EVENTNAMES.dialogClose, () => {
                this.setState({
                    isOpen: !1,
                    src: o.LOGINURL
                })
            }), this.unBindUrlChang = o.event.on(o.EVENTNAMES.urlChange, e => {
                this.setState({
                    src: e
                })
            })
        }
        componentWillUnmount() {
            this.unbindDialogOpen(), this.unbindDialogClose(), this.unBindUrlChang()
        }
        render() {
            const e = this.state,
                t = e.isOpen,
                a = e.src;
            return t ? d.default.createPortal([r.default.createElement("div", {
                className: i.default.mask,
                key: "mask"
            }), r.default.createElement("div", {
                className: i.default.box,
                key: "box"
            }, r.default.createElement("div", {
                className: i.default.close,
                onClick: this.closeHandle
            }), r.default.createElement("div", {
                dangerouslySetInnerHTML: s(a)
            }))], document.body) : null
        }
    }
    t.default = c, (0, l.default)(c, "propTypes", {
        id: u.default.string.isRequired
    }), (0, l.default)(c, "defaultProps", {})
}, function(e, t, a) {
    "use strict";
    e.exports = {
        formatUrl: e => {
            try {
                return e ? 0 === (e = e.trim()).indexOf("http:") ? e : 0 === e.indexOf("https:") ? e.replace("https:", "") : 0 === e.indexOf("/") ? 0 === e.indexOf("//") ? e : `/${e}` : `//${e}` : e
            } catch (t) {
                return e
            }
        }
    }
}, function(e, t, a) {
    "use strict";
    const n = e => {
            try {
                if (!e) return e;
                if (e.includes("d.ifengimg.com/")) {
                    const t = (e = e.split("d.ifengimg.com/").pop()).split("/");
                    t.shift(), e = t.join("/")
                }
                return e.includes("http://") && (e = e.substring(7)), e.includes("https://") && (e = e.substring(8)), e.includes("//") && (e = e.substring(2)), e
            } catch (t) {
                return e
            }
        },
        l = ["y0.ifengimg.com", "y1.ifengimg.com", "y2.ifengimg.com", "y3.ifengimg.com", "m0.ifengimg.com", "m1.ifengimg.com", "m2.ifengimg.com", "m3.ifengimg.com", "img.ifeng.com", "mimg.ifeng.com", "s0.mimg.ifeng.com", "s1.mimg.ifeng.com", "s2.mimg.ifeng.com", "s3.mimg.ifeng.com", "s4.mimg.ifeng.com", "a0.ifengimg.com", "a1.ifengimg.com", "a2.ifengimg.com", "a3.ifengimg.com", "s0.ifengimg.com", "s1.ifengimg.com", "s2.ifengimg.com", "s3.ifengimg.com", "res.ent.ifeng.com", "res.news.ifeng.com", "res.fashion.ifeng.com", "blogfile.ifeng.com", "entimg.ifeng.com", "res.health.ifeng.com", "res.book.ifeng.com", "imgs.diantai.ifeng.com", "img.ugc.ifeng.com", "img1.ugc.ifeng.com", "res.phtv.ifeng.com", "bbsfile.ifeng.com", "res.img.ifeng.com", "c0.ifengimg.com", "c1.ifengimg.com", "p0.ifengimg.com", "p1.ifengimg.com", "p2.ifengimg.com", "p3.ifengimg.com", "q0.ifengimg.com", "p0.iikuzhan.com", "yj.fcai.com", "my.ifengimg.com", "sy.ifeng.com", "c0.fengshows.com", "c1.fengshows.com", "p0.fengshows.com", "p1.fengshows.com", "p2.fengshows.com", "p3.fengshows.com", "y0.fengshows.com", "y1.fengshows.com", "y2.fengshows.com", "y3.fengshows.com", "e0.ifengimg.com"];
    e.exports = {
        formatImage: (e, t, a, r = 70) => {
            try {
                if (!e) return e;
                if (!(e => {
                        try {
                            if (!e) return e;
                            const t = e.split("/")[0];
                            return !!l.includes(t)
                        } catch (e) {
                            return !1
                        }
                    })(e = n(e.trim()))) return `//${e}`;
                const d = [];
                return t && d.push(`w${t}`), a && d.push(`h${a}`), r && d.push(`q${r}`), `//d.ifengimg.com/${d.join("_")}/${n(e)}`
            } catch (t) {
                return e
            }
        }
    }
}, function(e, t, a) {
    "use strict";
    const n = a(20).randomSort;
    e.exports = {
        recommendRandomSort: (e, t) => {
            if ("[object Array]" !== Object.prototype.toString.call(e)) return e;
            if (e.length <= t) return e;
            const a = [];
            let l = 0,
                r = e.filter(e => 0 === e.top && 0 === e.fix),
                d = e.map((e, a) => 0 === e.top && 0 === e.fix ? a : (a < t - 1 && l++, null));
            d = d.filter(e => null !== e), r = n(r, t - l);
            let u = 0;
            for (let n = 0; n < t; n++) d.includes(n) ? (a[n] = r[u], u++) : a[n] = e[n];
            return a
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.errorBoundary = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2));
    class u extends r.default.Component {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                hasError: !1
            })
        }
        componentDidCatch(e, t) {
            this.setState({
                hasError: !0
            }), e.message = `${e.message} - componentStack: ${t.componentStack}`, window && window.BJ_REPORT && window.BJ_REPORT.report(e, !1, "ui")
        }
        render() {
            return this.state.hasError ? "" : this.props.children
        }
    }(0, l.default)(u, "propTypes", {
        children: d.default.object
    });
    const o = e => (class extends r.default.PureComponent {
        render() {
            return r.default.createElement(u, null, r.default.createElement(e, this.props))
        }
    });
    t.errorBoundary = o;
    var i = o;
    t.default = i
}, function(e, t, a) {
    a(102).polyfill()
}, , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(640)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("h2", {
                className: u.default.content_title
            }, e.map((e, t) => e.children && e.children.length > 0 ? r.default.createElement(r.default.Fragment, {
                key: t
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title), e.children.map((e, t) => r.default.createElement("a", {
                key: t,
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title))) : r.default.createElement("a", {
                key: t,
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title)))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , , , , , , , , , , , , , , , , , function(e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.rel = void 0;
    t.rel = ""
}, , function(e, t, a) {
    e.exports = {
        login: "login-1jy9V4B1",
        login_icon: "login_icon-WIExzV-k",
        login_in: "login_in-1twGaNkr",
        register_icon: "register_icon-1E9PZAnU",
        register: "register-2uGFT8Rr",
        login_after: "login_after-3pfBQRS2",
        welcome: "welcome-3g1mcvgo",
        login_info: "login_info-15gt-clA",
        login_name: "login_name-23slSiWf",
        login_option: "login_option-3saAvDNP",
        up: "up-3XUNscnI",
        down: "down-37V_xfnc",
        login_out: "login_out-3Sqvpm6v",
        options: "options-njQGPAQg"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(9),
        l = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.UserInfo = void 0;
    var r = l(a(3)),
        d = l(a(1)),
        u = l(a(2)),
        o = l(a(68)),
        i = a(66),
        s = n(a(34));
    class c extends d.default.PureComponent {
        constructor(...e) {
            super(...e), (0, r.default)(this, "state", {
                isShow: !1,
                userInfo: s.default.isLogin() ? s.default.getUserInfo() : null
            }), (0, r.default)(this, "loginId", s.default.uuid()), (0, r.default)(this, "handleLoginIn", () => {
                s.default.login(this.loginId)
            }), (0, r.default)(this, "handleLoginOut", () => {
                s.default.logout()
            }), (0, r.default)(this, "handleOptionList", () => {
                const e = this.state.isShow;
                this.setState({
                    isShow: !e
                })
            })
        }
        componentDidMount() {
            this.unBindLogin = s.default.event.on(s.default.EVENTNAMES.login, e => {
                this.setState({
                    userInfo: e
                })
            }), this.unBindLogout = s.default.event.on(s.default.EVENTNAMES.logout, () => {
                this.setState({
                    userInfo: null
                })
            })
        }
        componentWillUnmount() {
            this.unBindLogin(), this.unBindLogout()
        }
        render() {
            const e = this.state,
                t = e.isShow,
                a = e.userInfo,
                n = this.props,
                l = n.iconShow,
                r = n.option,
                u = s.default.isLogin(),
                c = {
                    register: d.default.createElement("span", {
                        key: "register",
                        className: `${o.default.register} ${o.default.register_icon}`
                    }, d.default.createElement("a", {
                        href: "https://id.ifeng.com/user/register/",
                        target: "_blank",
                        rel: i.rel
                    }, "注册")),
                    login: d.default.createElement("span", {
                        key: "login",
                        className: `${o.default.login_in} ${o.default.login_icon}`,
                        onClick: this.handleLoginIn
                    }, "登录")
                },
                f = {
                    register: d.default.createElement("span", {
                        key: "register",
                        className: o.default.register
                    }, d.default.createElement("a", {
                        href: "https://id.ifeng.com/user/register/",
                        target: "_blank",
                        rel: i.rel
                    }, "注册")),
                    login: d.default.createElement("span", {
                        key: "login",
                        className: o.default.login_in,
                        onClick: this.handleLoginIn
                    }, "登录")
                };
            let m = "";
            return m = u ? d.default.createElement("div", {
                className: o.default.login_after
            }, l ? d.default.createElement("div", {
                className: o.default.welcome
            }, "欢迎您") : "", d.default.createElement("div", {
                className: o.default.login_info,
                onClick: this.handleOptionList
            }, d.default.createElement("span", {
                className: o.default.login_name
            }, a.userName), d.default.createElement("span", {
                className: `${o.default.login_option} ${t?o.default.up:o.default.down}`
            }, " "), t ? d.default.createElement("ul", {
                className: o.default.options
            }, d.default.createElement("li", null, d.default.createElement("a", {
                href: "//id.ifeng.com",
                target: "_blank",
                rel: i.rel
            }, "进入个人中心")), d.default.createElement("li", null, d.default.createElement("a", {
                href: "//zmt.ifeng.com/",
                target: "_blank",
                rel: i.rel
            }, "进入我的大风号"))) : ""), d.default.createElement("div", {
                className: o.default.login_out,
                onClick: this.handleLoginOut
            }, "退出")) : d.default.createElement("div", {
                className: o.default.login
            }, r.map(e => l ? c[e] : f[e]), d.default.createElement(s.LoginDialog, {
                id: this.loginId
            }))
        }
    }
    t.UserInfo = c, (0, r.default)(c, "propTypes", {
        iconShow: u.default.bool,
        option: u.default.array
    }), (0, r.default)(c, "defaultProps", {
        iconShow: !1,
        option: ["register", "login"]
    });
    var f = c;
    t.default = f
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(69)).default;
    t.default = l
}, function(e, t) {
    function a(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function(e) {
        return null != e && (a(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && a(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function(e, t) {
    var a, n;
    a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
        rotl: function(e, t) {
            return e << t | e >>> 32 - t
        },
        rotr: function(e, t) {
            return e << 32 - t | e >>> t
        },
        endian: function(e) {
            if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
            for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
            return e
        },
        randomBytes: function(e) {
            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
            return t
        },
        bytesToWords: function(e) {
            for (var t = [], a = 0, n = 0; a < e.length; a++, n += 8) t[n >>> 5] |= e[a] << 24 - n % 32;
            return t
        },
        wordsToBytes: function(e) {
            for (var t = [], a = 0; a < 32 * e.length; a += 8) t.push(e[a >>> 5] >>> 24 - a % 32 & 255);
            return t
        },
        bytesToHex: function(e) {
            for (var t = [], a = 0; a < e.length; a++) t.push((e[a] >>> 4).toString(16)), t.push((15 & e[a]).toString(16));
            return t.join("")
        },
        hexToBytes: function(e) {
            for (var t = [], a = 0; a < e.length; a += 2) t.push(parseInt(e.substr(a, 2), 16));
            return t
        },
        bytesToBase64: function(e) {
            for (var t = [], n = 0; n < e.length; n += 3)
                for (var l = e[n] << 16 | e[n + 1] << 8 | e[n + 2], r = 0; r < 4; r++) 8 * n + 6 * r <= 8 * e.length ? t.push(a.charAt(l >>> 6 * (3 - r) & 63)) : t.push("=");
            return t.join("")
        },
        base64ToBytes: function(e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, "");
            for (var t = [], n = 0, l = 0; n < e.length; l = ++n % 4) 0 != l && t.push((a.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * l + 8) - 1) << 2 * l | a.indexOf(e.charAt(n)) >>> 6 - 2 * l);
            return t
        }
    }, e.exports = n
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(610)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props,
                t = e.content,
                a = e.handleMouseOver;
            return r.default.createElement("div", {
                className: u.default.topic
            }, t.map((e, t) => "more" === e.type ? r.default.createElement("span", {
                key: t,
                className: u.default.more
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, r.default.createElement("img", {
                src: e.src,
                width: e.width,
                height: e.height
            }))) : "tag" === e.type ? r.default.createElement("span", {
                key: t,
                className: u.default.tag
            }) : r.default.createElement(r.default.Fragment, {
                key: t
            }, 0 === t ? "" : "·", r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel,
                "data-index": t,
                onMouseOver: a
            }, e.title))))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array,
        handleMouseOver: d.default.func
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.handleAd = void 0;
    var l = n(a(89)),
        r = n(a(7)),
        d = a(8);
    const u = function() {
        var e = (0, r.default)(function*(e) {
            let t = null;
            try {
                if (e.preload) {
                    let t = [],
                        a = 0;
                    for (t = "string" == typeof e.preload ? [e.preload] : e.preload; t.length > a;) {
                        const e = t[a];
                        yield(0, d.loadScript)(e, {
                            cache: !1,
                            reload: !1
                        }), ++a
                    }
                }
                t = new Function(`return ${e.callback}`)()
            } catch (t) {
                const n = {};
                if (allData)
                    for (const r of Object.entries(allData)) {
                        var a = (0, l.default)(r, 2);
                        const t = a[0],
                            d = a[1];
                        d === e && (n.key = t, n.value = d)
                    }
                t.message = `AdError - ${t.message};`, t.message += `AdInfo - ${JSON.stringify(n)}`, window && window.BJ_REPORT && window.BJ_REPORT.report(t, !1, "ad")
            }
            return t
        });
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
    t.handleAd = u
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, a) {
    var n = a(14),
        l = a(12),
        r = a(38),
        d = a(78),
        u = a(17).f;
    e.exports = function(e) {
        var t = l.Symbol || (l.Symbol = r ? {} : n.Symbol || {});
        "_" == e.charAt(0) || e in t || u(t, e, {
            value: d.f(e)
        })
    }
}, function(e, t, a) {
    t.f = a(21)
}, function(e, t, a) {
    var n = a(17).f,
        l = a(18),
        r = a(21)("toStringTag");
    e.exports = function(e, t, a) {
        e && !l(e = a ? e : e.prototype, r) && n(e, r, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, a) {
    var n = a(107),
        l = a(80);
    e.exports = Object.keys || function(e) {
        return n(e, l)
    }
}, function(e, t, a) {
    var n = a(32),
        l = a(172),
        r = a(80),
        d = a(87)("IE_PROTO"),
        u = function() {},
        o = function() {
            var e, t = a(111)("iframe"),
                n = r.length;
            for (t.style.display = "none", a(167).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), o = e.F; n--;) delete o.prototype[r[n]];
            return o()
        };
    e.exports = Object.create || function(e, t) {
        var a;
        return null !== e ? (u.prototype = n(e), a = new u, u.prototype = null, a[d] = e) : a = o(), void 0 === t ? a : l(a, t)
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t) {
    var a = Math.ceil,
        n = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : a)(e)
    }
}, function(e, t, a) {
    var n = a(23);
    e.exports = function(e, t) {
        if (!n(e)) return e;
        var a, l;
        if (t && "function" == typeof(a = e.toString) && !n(l = a.call(e))) return l;
        if ("function" == typeof(a = e.valueOf) && !n(l = a.call(e))) return l;
        if (!t && "function" == typeof(a = e.toString) && !n(l = a.call(e))) return l;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, a) {
    var n = a(12),
        l = a(14),
        r = l["__core-js_shared__"] || (l["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: n.version,
        mode: a(38) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t, a) {
    var n = a(86)("keys"),
        l = a(37);
    e.exports = function(e) {
        return n[e] || (n[e] = l(e))
    }
}, function(e, t) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, , , , , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(101)).default;
    t.default = l
}, , , function(e, t, a) {
    e.exports = {
        search_box: "search_box-3thkJMuh",
        search: "search-1Y9Df02M",
        text: "text-2_cjBhKD",
        select: "select-1-GjI1rZ",
        checked: "checked-1nm3B4Rr",
        upArrow: "upArrow-3PFNJ0T3",
        search_btn: "search_btn-1clDo81r",
        btn: "btn-2ZgLVEZU",
        close: "close-2so3OLaz",
        searchBtn: "searchBtn-1KkNNYyW"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(96));
    class o extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                data: this.props.content,
                searchTxt: this.props.content[0].keyword,
                current: 0,
                isShow: !1,
                isExpand: !1
            }), (0, l.default)(this, "handleExpand", () => {
                const e = this.state.isExpand;
                this.setState({
                    isExpand: !e
                })
            }), (0, l.default)(this, "handMouseLeave", () => {
                setTimeout(() => {
                    this.setState({
                        isShow: !1
                    })
                }, 1e3)
            }), (0, l.default)(this, "handleOptionShow", () => {
                const e = this.state.isShow;
                this.setState({
                    isShow: !e
                })
            }), (0, l.default)(this, "handleSelect", e => {
                const t = this.state,
                    a = t.data,
                    n = t.isShow,
                    l = Number(e.currentTarget.attributes.value.value);
                this.setState({
                    current: l,
                    searchTxt: a[l].keyword,
                    isShow: !n
                })
            }), (0, l.default)(this, "handleChange", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: t
                })
            }), (0, l.default)(this, "handleKeydown", e => {
                "Enter" === e.key && this.handleClick()
            }), (0, l.default)(this, "handleClick", () => {
                const e = this.state,
                    t = e.data,
                    a = e.current,
                    n = e.searchTxt,
                    l = t[a].type;
                "sofeng" === l ? window.open(`//search.ifeng.com/sofeng/search.action?q=${encodeURI(n)}&c=1`) : "hq" === l ? window.open(`//app.finance.ifeng.com/hq/search.php?keyword=${encodeURI(n)}`) : "car" === l ? window.open(`//data.auto.ifeng.com/search/search.do?keywords=${encodeURI(n)}`) : "video" === l && window.open(`//so.v.ifeng.com/video?q=${encodeURI(n)}&c=5`)
            }), (0, l.default)(this, "handleFocus", e => {
                const t = this.state,
                    a = t.data,
                    n = t.current,
                    l = e.currentTarget.value;
                a[n].keyword === l && this.setState({
                    searchTxt: ""
                })
            }), (0, l.default)(this, "handleBlur", e => {
                const t = this.state,
                    a = t.data,
                    n = t.current;
                "" === e.currentTarget.value && this.setState({
                    searchTxt: a[n].keyword
                })
            })
        }
        render() {
            const e = this.state,
                t = e.data,
                a = e.current,
                n = e.searchTxt,
                l = e.isShow,
                d = e.isExpand;
            return r.default.createElement("div", {
                className: u.default.search_box
            }, d ? r.default.createElement("div", {
                className: u.default.search
            }, r.default.createElement("span", {
                className: u.default.text
            }, r.default.createElement("input", {
                type: "text",
                value: n,
                className: u.default.text,
                onChange: this.handleChange,
                onKeyDown: this.handleKeydown,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
            })), r.default.createElement("div", {
                className: u.default.select,
                onMouseLeave: this.handMouseLeave
            }, r.default.createElement("span", {
                className: `${u.default.checked} ${l?u.default.upArrow:""}`,
                onClick: this.handleOptionShow
            }, t[a].name), l ? r.default.createElement("ul", null, t.map((e, t) => r.default.createElement("li", {
                key: t
            }, r.default.createElement("a", {
                href: "javascript:void(0);",
                value: t,
                onClick: this.handleSelect
            }, e.name)))) : ""), r.default.createElement("span", {
                className: u.default.search_btn
            }, r.default.createElement("button", {
                className: u.default.btn,
                onClick: this.handleClick
            })), r.default.createElement("div", {
                className: u.default.close,
                onClick: this.handleExpand
            })) : r.default.createElement("a", {
                className: u.default.searchBtn,
                onClick: this.handleExpand
            }, "查找"))
        }
    }(0, l.default)(o, "propTypes", {
        content: d.default.array
    });
    var i = o;
    t.default = i
}, , function(e, t, a) {
    e.exports = {
        search: "search-2QVk7jV0",
        select: "select--pkM4nZE",
        checked: "checked-ccAEi6F2",
        btn: "btn-1NI76BXl clearfix",
        text: "text-ZqgX7hWC",
        search_btn: "search_btn-55egvSbu"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(99));
    class o extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                data: this.props.content,
                searchTxt: this.props.content[0].keyword,
                current: 0,
                isShow: !1
            }), (0, l.default)(this, "handMouseLeave", () => {
                setTimeout(() => {
                    this.setState({
                        isShow: !1
                    })
                }, 1e3)
            }), (0, l.default)(this, "handleOptionShow", () => {
                const e = this.state.isShow;
                this.setState({
                    isShow: !e
                })
            }), (0, l.default)(this, "handleSelect", e => {
                const t = this.state,
                    a = t.data,
                    n = t.isShow,
                    l = Number(e.currentTarget.attributes.value.value);
                this.setState({
                    current: l,
                    searchTxt: a[l].keyword,
                    isShow: !n
                })
            }), (0, l.default)(this, "handleChange", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: t
                })
            }), (0, l.default)(this, "handleKeydown", e => {
                "Enter" === e.key && this.handleClick()
            }), (0, l.default)(this, "handleClick", () => {
                const e = this.state,
                    t = e.data,
                    a = e.current,
                    n = e.searchTxt,
                    l = t[a].type;
                "sofeng" === l ? window.open(`//search.ifeng.com/sofeng/search.action?q=${encodeURI(n)}&c=1`) : "hq" === l ? window.open(`//app.finance.ifeng.com/hq/search.php?keyword=${encodeURI(n)}`) : "car" === l ? window.open(`//data.auto.ifeng.com/search/search.do?keywords=${encodeURI(n)}`) : "video" === l && window.open(`//so.v.ifeng.com/video?q=${encodeURI(n)}&c=5`)
            }), (0, l.default)(this, "handleFocus", e => {
                const t = this.state,
                    a = t.data,
                    n = t.current,
                    l = e.currentTarget.value;
                a[n].keyword === l && this.setState({
                    searchTxt: ""
                })
            }), (0, l.default)(this, "handleBlur", e => {
                const t = this.state,
                    a = t.data,
                    n = t.current;
                "" === e.currentTarget.value && this.setState({
                    searchTxt: a[n].keyword
                })
            })
        }
        render() {
            const e = this.state,
                t = e.data,
                a = e.current,
                n = e.searchTxt,
                l = e.isShow;
            return r.default.createElement("div", {
                className: u.default.search
            }, r.default.createElement("div", {
                className: u.default.select,
                onMouseLeave: this.handMouseLeave
            }, r.default.createElement("div", {
                className: u.default.checked,
                onClick: this.handleOptionShow
            }, t[a].name), l ? r.default.createElement("ul", null, t.map((e, t) => r.default.createElement("li", {
                key: t
            }, r.default.createElement("a", {
                href: "javascript:void(0);",
                value: t,
                onClick: this.handleSelect
            }, e.name)))) : ""), r.default.createElement("div", {
                className: u.default.text
            }, r.default.createElement("input", {
                type: "text",
                value: n,
                className: u.default.text,
                onChange: this.handleChange,
                onKeyDown: this.handleKeydown,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
            })), r.default.createElement("div", {
                className: u.default.search_btn
            }, r.default.createElement("button", {
                className: u.default.btn,
                onClick: this.handleClick
            })))
        }
    }(0, l.default)(o, "propTypes", {
        content: d.default.array
    });
    var i = o;
    t.default = i
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.Search = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(100)),
        o = n(a(97));
    class i extends r.default.PureComponent {
        render() {
            const e = this.props,
                t = e.content;
            return e.expand ? r.default.createElement(o.default, {
                content: t
            }) : r.default.createElement(u.default, {
                content: t
            })
        }
    }
    t.Search = i, (0, l.default)(i, "propTypes", {
        content: d.default.array,
        expand: d.default.bool
    }), (0, l.default)(i, "defaultProps", {
        expand: !1
    });
    var s = i;
    t.default = s
}, , function(e, t, a) {
    var n = a(76),
        l = a(36),
        r = a(22),
        d = a(85),
        u = a(18),
        o = a(112),
        i = Object.getOwnPropertyDescriptor;
    t.f = a(16) ? i : function(e, t) {
        if (e = r(e), t = d(t, !0), o) try {
            return i(e, t)
        } catch (e) {}
        if (u(e, t)) return l(!n.f.call(e, t), e[t])
    }
}, function(e, t, a) {
    var n = a(107),
        l = a(80).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return n(e, l)
    }
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t) {
    var a = {}.toString;
    e.exports = function(e) {
        return a.call(e).slice(8, -1)
    }
}, function(e, t, a) {
    var n = a(18),
        l = a(22),
        r = a(170)(!1),
        d = a(87)("IE_PROTO");
    e.exports = function(e, t) {
        var a, u = l(e),
            o = 0,
            i = [];
        for (a in u) a != d && n(u, a) && i.push(a);
        for (; t.length > o;) n(u, a = t[o++]) && (~r(i, a) || i.push(a));
        return i
    }
}, function(e, t, a) {
    e.exports = a(24)
}, function(e, t, a) {
    "use strict";
    var n = a(38),
        l = a(25),
        r = a(108),
        d = a(24),
        u = a(83),
        o = a(173),
        i = a(79),
        s = a(114),
        c = a(21)("iterator"),
        f = !([].keys && "next" in [].keys()),
        m = function() {
            return this
        };
    e.exports = function(e, t, a, p, h, g, v) {
        o(a, t, p);
        var _, y, E, b = function(e) {
                if (!f && e in j) return j[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new a(this, e)
                        }
                }
                return function() {
                    return new a(this, e)
                }
            },
            x = t + " Iterator",
            N = "values" == h,
            w = !1,
            j = e.prototype,
            T = j[c] || j["@@iterator"] || h && j[h],
            C = T || b(h),
            k = h ? N ? b("entries") : C : void 0,
            S = "Array" == t && j.entries || T;
        if (S && (E = s(S.call(new e))) !== Object.prototype && E.next && (i(E, x, !0), n || "function" == typeof E[c] || d(E, c, m)), N && T && "values" !== T.name && (w = !0, C = function() {
                return T.call(this)
            }), n && !v || !f && !w && j[c] || d(j, c, C), u[t] = C, u[x] = m, h)
            if (_ = {
                    values: N ? C : b("values"),
                    keys: g ? C : b("keys"),
                    entries: k
                }, v)
                for (y in _) y in j || r(j, y, _[y]);
            else l(l.P + l.F * (f || w), t, _);
        return _
    }
}, function(e, t, a) {
    "use strict";
    t.__esModule = !0;
    var n = d(a(177)),
        l = d(a(162)),
        r = "function" == typeof l.default && "symbol" == typeof n.default ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof l.default && e.constructor === l.default && e !== l.default.prototype ? "symbol" : typeof e
        };

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = "function" == typeof l.default && "symbol" === r(n.default) ? function(e) {
        return void 0 === e ? "undefined" : r(e)
    } : function(e) {
        return e && "function" == typeof l.default && e.constructor === l.default && e !== l.default.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
    }
}, function(e, t, a) {
    var n = a(23),
        l = a(14).document,
        r = n(l) && n(l.createElement);
    e.exports = function(e) {
        return r ? l.createElement(e) : {}
    }
}, function(e, t, a) {
    e.exports = !a(16) && !a(31)(function() {
        return 7 != Object.defineProperty(a(111)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, a) {
    var n = a(184);
    e.exports = function(e, t, a) {
        if (n(e), void 0 === t) return e;
        switch (a) {
            case 1:
                return function(a) {
                    return e.call(t, a)
                };
            case 2:
                return function(a, n) {
                    return e.call(t, a, n)
                };
            case 3:
                return function(a, n, l) {
                    return e.call(t, a, n, l)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, a) {
    var n = a(18),
        l = a(115),
        r = a(87)("IE_PROTO"),
        d = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = l(e), n(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? d : null
    }
}, function(e, t, a) {
    var n = a(88);
    e.exports = function(e) {
        return Object(n(e))
    }
}, , , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(89)),
        r = n(a(7)),
        d = n(a(3)),
        u = n(a(1)),
        o = n(a(2)),
        i = a(75),
        s = n(a(6));
    class c extends u.default.PureComponent {
        constructor(...e) {
            super(...e), (0, d.default)(this, "container", u.default.createRef())
        }
        componentDidMount() {
            var e = this;
            return (0, r.default)(function*() {
                const t = e.props.content;
                try {
                    (yield(0, i.handleAd)(t))(e.container.current, t.data)
                } catch (e) {
                    const n = {};
                    if (allData)
                        for (const r of Object.entries(allData)) {
                            var a = (0, l.default)(r, 2);
                            const e = a[0],
                                d = a[1];
                            d === t && (n.key = e, n.value = d)
                        }
                    e.message = `AdError - ${e.message};`, e.message += `AdInfo - ${JSON.stringify(n)}`, window && window.BJ_REPORT && window.BJ_REPORT.report(e, !1, "ad")
                }
            })()
        }
        render() {
            const e = this.props.styleName;
            return u.default.createElement("div", {
                className: e,
                ref: this.container
            })
        }
    }(0, d.default)(c, "propTypes", {
        content: o.default.object,
        styleName: o.default.string
    });
    class f extends u.default.PureComponent {
        render() {
            const e = this.props,
                t = e.styleName,
                a = e.content;
            if (a) {
                const e = a.desc,
                    n = a.code,
                    l = void 0 === n ? "" : n;
                return e ? u.default.createElement(s.default, {
                    id: e.id,
                    groupName: "ad",
                    type: e.type,
                    title: e.title,
                    name: e.key,
                    user: "dev",
                    code: l,
                    content: this.props.content
                }, u.default.createElement(c, {
                    styleName: t
                })) : u.default.createElement(c, {
                    styleName: t,
                    content: a
                })
            }
            return u.default.createElement("div", null)
        }
    }(0, d.default)(f, "propTypes", {
        content: o.default.object,
        styleName: o.default.string
    });
    var m = f;
    t.default = m
}, , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(706)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props,
                t = e.content,
                a = e.isVideo,
                n = e.hasTopic,
                l = e.hasSummary;
            return r.default.createElement("dl", {
                className: u.default.list
            }, t.map((e, t) => r.default.createElement(r.default.Fragment, {
                key: t
            }, r.default.createElement("dt", {
                className: `${a?u.default.video:""} ${0===t&&n?u.default.topic:""}`
            }, e.children && e.children.length > 0 ? r.default.createElement(r.default.Fragment, null, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title), e.children.map((e, t) => r.default.createElement("a", {
                key: t,
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title))) : r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title)), n && e.thumbnail && "" !== e.thumbnail && e.summary && "" !== e.summary ? r.default.createElement("dd", {
                className: u.default.pic_box
            }, r.default.createElement("div", {
                className: u.default.pic
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel,
                "data-nomask": !0
            }, r.default.createElement("img", {
                src: e.thumbnail
            }))), r.default.createElement("span", null, e.summary)) : "", n && (!e.thumbnail || "" === e.thumbnail) && e.summary && "" !== e.summary || l && e.summary && "" !== e.summary ? r.default.createElement("dd", null, e.summary) : "")))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array,
        isVideo: d.default.bool,
        hasTopic: d.default.bool,
        hasSummary: d.default.bool
    });
    var c = (0, o.default)(s);
    t.default = c
}, , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(638)),
        o = n(a(4)),
        i = n(a(48)),
        s = n(a(35)),
        c = a(5);
    class f extends r.default.PureComponent {
        render() {
            let e = [],
                t = this.props.content;
            const a = this.props,
                n = a.hasTopic,
                l = a.isVideo,
                d = a.hasEnd;
            n && (e = t.slice(0, 1), t = t.slice(1));
            const o = t[0],
                f = t.slice(1, 6),
                m = t.slice(6, 7);
            return r.default.createElement("div", null, n ? r.default.createElement(i.default, {
                content: e
            }) : "", r.default.createElement("div", {
                className: `${l?u.default.video_list:u.default.pic_list}`
            }, o.thumbnail ? r.default.createElement("div", {
                className: `${l?u.default.video_pic:u.default.pic}`
            }, r.default.createElement("a", {
                href: o.url,
                target: "_blank",
                rel: c.rel,
                "data-nomask": !0
            }, r.default.createElement("img", {
                src: o.thumbnail,
                alt: o.title,
                title: o.title
            })), l ? r.default.createElement("div", {
                className: u.default.play_btn
            }, r.default.createElement("a", {
                href: o.url,
                target: "_blank",
                rel: c.rel,
                "data-nomask": !0
            })) : "", r.default.createElement("div", {
                className: u.default.txt_bg
            }), r.default.createElement("div", {
                className: u.default.txt
            }, r.default.createElement("a", {
                href: o.url,
                target: "_blank",
                rel: c.rel
            }, o.title))) : "", r.default.createElement("div", {
                className: u.default.list
            }, r.default.createElement(s.default, {
                content: f,
                isContent: !0
            }))), d ? r.default.createElement(s.default, {
                content: m,
                isList: !0
            }) : "")
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.array,
        hasTopic: d.default.bool,
        isVideo: d.default.bool,
        hasEnd: d.default.bool
    });
    var m = (0, o.default)(f);
    t.default = m
}, function(e, t, a) {
    var n = a(25);
    n(n.S, "Object", {
        create: a(82)
    })
}, function(e, t, a) {
    a(145);
    var n = a(12).Object;
    e.exports = function(e, t) {
        return n.create(e, t)
    }
}, function(e, t, a) {
    e.exports = {
        default: a(146),
        __esModule: !0
    }
}, function(e, t, a) {
    var n = a(23),
        l = a(32),
        r = function(e, t) {
            if (l(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
            try {
                (n = a(113)(Function.call, a(103).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, a) {
                return r(e, a), t ? e.__proto__ = a : n(e, a), e
            }
        }({}, !1) : void 0),
        check: r
    }
}, function(e, t, a) {
    var n = a(25);
    n(n.S, "Object", {
        setPrototypeOf: a(148).set
    })
}, function(e, t, a) {
    a(149), e.exports = a(12).Object.setPrototypeOf
}, function(e, t, a) {
    e.exports = {
        default: a(150),
        __esModule: !0
    }
}, function(e, t, a) {
    "use strict";
    t.__esModule = !0;
    var n = d(a(151)),
        l = d(a(147)),
        r = d(a(110));

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, r.default)(t)));
        e.prototype = (0, l.default)(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (n.default ? (0, n.default)(e, t) : e.__proto__ = t)
    }
}, function(e, t, a) {
    a(77)("observable")
}, function(e, t, a) {
    a(77)("asyncIterator")
}, function(e, t) {}, function(e, t, a) {
    var n = a(22),
        l = a(104).f,
        r = {}.toString,
        d = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function(e) {
        return d && "[object Window]" == r.call(e) ? function(e) {
            try {
                return l(e)
            } catch (e) {
                return d.slice()
            }
        }(e) : l(n(e))
    }
}, function(e, t, a) {
    var n = a(106);
    e.exports = Array.isArray || function(e) {
        return "Array" == n(e)
    }
}, function(e, t, a) {
    var n = a(81),
        l = a(105),
        r = a(76);
    e.exports = function(e) {
        var t = n(e),
            a = l.f;
        if (a)
            for (var d, u = a(e), o = r.f, i = 0; u.length > i;) o.call(e, d = u[i++]) && t.push(d);
        return t
    }
}, function(e, t, a) {
    var n = a(37)("meta"),
        l = a(23),
        r = a(18),
        d = a(17).f,
        u = 0,
        o = Object.isExtensible || function() {
            return !0
        },
        i = !a(31)(function() {
            return o(Object.preventExtensions({}))
        }),
        s = function(e) {
            d(e, n, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        },
        c = e.exports = {
            KEY: n,
            NEED: !1,
            fastKey: function(e, t) {
                if (!l(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!r(e, n)) {
                    if (!o(e)) return "F";
                    if (!t) return "E";
                    s(e)
                }
                return e[n].i
            },
            getWeak: function(e, t) {
                if (!r(e, n)) {
                    if (!o(e)) return !0;
                    if (!t) return !1;
                    s(e)
                }
                return e[n].w
            },
            onFreeze: function(e) {
                return i && c.NEED && o(e) && !r(e, n) && s(e), e
            }
        }
}, function(e, t, a) {
    "use strict";
    var n = a(14),
        l = a(18),
        r = a(16),
        d = a(25),
        u = a(108),
        o = a(159).KEY,
        i = a(31),
        s = a(86),
        c = a(79),
        f = a(37),
        m = a(21),
        p = a(78),
        h = a(77),
        g = a(158),
        v = a(157),
        _ = a(32),
        y = a(23),
        E = a(22),
        b = a(85),
        x = a(36),
        N = a(82),
        w = a(156),
        j = a(103),
        T = a(17),
        C = a(81),
        k = j.f,
        S = T.f,
        A = w.f,
        P = n.Symbol,
        L = n.JSON,
        O = L && L.stringify,
        D = m("_hidden"),
        z = m("toPrimitive"),
        M = {}.propertyIsEnumerable,
        I = s("symbol-registry"),
        R = s("symbols"),
        B = s("op-symbols"),
        q = Object.prototype,
        F = "function" == typeof P,
        V = n.QObject,
        $ = !V || !V.prototype || !V.prototype.findChild,
        H = r && i(function() {
            return 7 != N(S({}, "a", {
                get: function() {
                    return S(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, a) {
            var n = k(q, t);
            n && delete q[t], S(e, t, a), n && e !== q && S(q, t, n)
        } : S,
        K = function(e) {
            var t = R[e] = N(P.prototype);
            return t._k = e, t
        },
        U = F && "symbol" == typeof P.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof P
        },
        J = function(e, t, a) {
            return e === q && J(B, t, a), _(e), t = b(t, !0), _(a), l(R, t) ? (a.enumerable ? (l(e, D) && e[D][t] && (e[D][t] = !1), a = N(a, {
                enumerable: x(0, !1)
            })) : (l(e, D) || S(e, D, x(1, {})), e[D][t] = !0), H(e, t, a)) : S(e, t, a)
        },
        G = function(e, t) {
            _(e);
            for (var a, n = g(t = E(t)), l = 0, r = n.length; r > l;) J(e, a = n[l++], t[a]);
            return e
        },
        W = function(e) {
            var t = M.call(this, e = b(e, !0));
            return !(this === q && l(R, e) && !l(B, e)) && (!(t || !l(this, e) || !l(R, e) || l(this, D) && this[D][e]) || t)
        },
        Z = function(e, t) {
            if (e = E(e), t = b(t, !0), e !== q || !l(R, t) || l(B, t)) {
                var a = k(e, t);
                return !a || !l(R, t) || l(e, D) && e[D][t] || (a.enumerable = !0), a
            }
        },
        X = function(e) {
            for (var t, a = A(E(e)), n = [], r = 0; a.length > r;) l(R, t = a[r++]) || t == D || t == o || n.push(t);
            return n
        },
        Q = function(e) {
            for (var t, a = e === q, n = A(a ? B : E(e)), r = [], d = 0; n.length > d;) !l(R, t = n[d++]) || a && !l(q, t) || r.push(R[t]);
            return r
        };
    F || (u((P = function() {
        if (this instanceof P) throw TypeError("Symbol is not a constructor!");
        var e = f(arguments.length > 0 ? arguments[0] : void 0),
            t = function(a) {
                this === q && t.call(B, a), l(this, D) && l(this[D], e) && (this[D][e] = !1), H(this, e, x(1, a))
            };
        return r && $ && H(q, e, {
            configurable: !0,
            set: t
        }), K(e)
    }).prototype, "toString", function() {
        return this._k
    }), j.f = Z, T.f = J, a(104).f = w.f = X, a(76).f = W, a(105).f = Q, r && !a(38) && u(q, "propertyIsEnumerable", W, !0), p.f = function(e) {
        return K(m(e))
    }), d(d.G + d.W + d.F * !F, {
        Symbol: P
    });
    for (var Y = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Y.length > ee;) m(Y[ee++]);
    for (var te = C(m.store), ae = 0; te.length > ae;) h(te[ae++]);
    d(d.S + d.F * !F, "Symbol", {
        for: function(e) {
            return l(I, e += "") ? I[e] : I[e] = P(e)
        },
        keyFor: function(e) {
            if (!U(e)) throw TypeError(e + " is not a symbol!");
            for (var t in I)
                if (I[t] === e) return t
        },
        useSetter: function() {
            $ = !0
        },
        useSimple: function() {
            $ = !1
        }
    }), d(d.S + d.F * !F, "Object", {
        create: function(e, t) {
            return void 0 === t ? N(e) : G(N(e), t)
        },
        defineProperty: J,
        defineProperties: G,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: X,
        getOwnPropertySymbols: Q
    }), L && d(d.S + d.F * (!F || i(function() {
        var e = P();
        return "[null]" != O([e]) || "{}" != O({
            a: e
        }) || "{}" != O(Object(e))
    })), "JSON", {
        stringify: function(e) {
            for (var t, a, n = [e], l = 1; arguments.length > l;) n.push(arguments[l++]);
            if (a = t = n[1], (y(t) || void 0 !== e) && !U(e)) return v(t) || (t = function(e, t) {
                if ("function" == typeof a && (t = a.call(this, e, t)), !U(t)) return t
            }), n[1] = t, O.apply(L, n)
        }
    }), P.prototype[z] || a(24)(P.prototype, z, P.prototype.valueOf), c(P, "Symbol"), c(Math, "Math", !0), c(n.JSON, "JSON", !0)
}, function(e, t, a) {
    a(160), a(155), a(154), a(153), e.exports = a(12).Symbol
}, function(e, t, a) {
    e.exports = {
        default: a(161),
        __esModule: !0
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t) {
    e.exports = function() {}
}, function(e, t, a) {
    "use strict";
    var n = a(164),
        l = a(163),
        r = a(83),
        d = a(22);
    e.exports = a(109)(Array, "Array", function(e, t) {
        this._t = d(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            a = this._i++;
        return !e || a >= e.length ? (this._t = void 0, l(1)) : l(0, "keys" == t ? a : "values" == t ? e[a] : [a, e[a]])
    }, "values"), r.Arguments = r.Array, n("keys"), n("values"), n("entries")
}, function(e, t, a) {
    a(165);
    for (var n = a(14), l = a(24), r = a(83), d = a(21)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), o = 0; o < u.length; o++) {
        var i = u[o],
            s = n[i],
            c = s && s.prototype;
        c && !c[d] && l(c, d, i), r[i] = r.Array
    }
}, function(e, t, a) {
    var n = a(14).document;
    e.exports = n && n.documentElement
}, function(e, t, a) {
    var n = a(84),
        l = Math.max,
        r = Math.min;
    e.exports = function(e, t) {
        return (e = n(e)) < 0 ? l(e + t, 0) : r(e, t)
    }
}, function(e, t, a) {
    var n = a(84),
        l = Math.min;
    e.exports = function(e) {
        return e > 0 ? l(n(e), 9007199254740991) : 0
    }
}, function(e, t, a) {
    var n = a(22),
        l = a(169),
        r = a(168);
    e.exports = function(e) {
        return function(t, a, d) {
            var u, o = n(t),
                i = l(o.length),
                s = r(d, i);
            if (e && a != a) {
                for (; i > s;)
                    if ((u = o[s++]) != u) return !0
            } else
                for (; i > s; s++)
                    if ((e || s in o) && o[s] === a) return e || s || 0;
            return !e && -1
        }
    }
}, function(e, t, a) {
    var n = a(106);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == n(e) ? e.split("") : Object(e)
    }
}, function(e, t, a) {
    var n = a(17),
        l = a(32),
        r = a(81);
    e.exports = a(16) ? Object.defineProperties : function(e, t) {
        l(e);
        for (var a, d = r(t), u = d.length, o = 0; u > o;) n.f(e, a = d[o++], t[a]);
        return e
    }
}, function(e, t, a) {
    "use strict";
    var n = a(82),
        l = a(36),
        r = a(79),
        d = {};
    a(24)(d, a(21)("iterator"), function() {
        return this
    }), e.exports = function(e, t, a) {
        e.prototype = n(d, {
            next: l(1, a)
        }), r(e, t + " Iterator")
    }
}, function(e, t, a) {
    var n = a(84),
        l = a(88);
    e.exports = function(e) {
        return function(t, a) {
            var r, d, u = String(l(t)),
                o = n(a),
                i = u.length;
            return o < 0 || o >= i ? e ? "" : void 0 : (r = u.charCodeAt(o)) < 55296 || r > 56319 || o + 1 === i || (d = u.charCodeAt(o + 1)) < 56320 || d > 57343 ? e ? u.charAt(o) : r : e ? u.slice(o, o + 2) : d - 56320 + (r - 55296 << 10) + 65536
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(174)(!0);
    a(109)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            a = this._i;
        return a >= t.length ? {
            value: void 0,
            done: !0
        } : (e = n(t, a), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, a) {
    a(175), a(166), e.exports = a(78).f("iterator")
}, function(e, t, a) {
    e.exports = {
        default: a(176),
        __esModule: !0
    }
}, function(e, t, a) {
    "use strict";
    t.__esModule = !0;
    var n, l = a(110),
        r = (n = l) && n.__esModule ? n : {
            default: n
        };
    t.default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : (0, r.default)(t)) && "function" != typeof t ? e : t
    }
}, function(e, t, a) {
    var n = a(25);
    n(n.S + n.F * !a(16), "Object", {
        defineProperty: a(17).f
    })
}, function(e, t, a) {
    a(179);
    var n = a(12).Object;
    e.exports = function(e, t, a) {
        return n.defineProperty(e, t, a)
    }
}, function(e, t, a) {
    e.exports = {
        default: a(180),
        __esModule: !0
    }
}, function(e, t, a) {
    "use strict";
    t.__esModule = !0;
    var n, l = a(181),
        r = (n = l) && n.__esModule ? n : {
            default: n
        };
    t.default = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, r.default)(e, n.key, n)
            }
        }
        return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t
        }
    }()
}, function(e, t, a) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, a) {
    var n = a(25),
        l = a(12),
        r = a(31);
    e.exports = function(e, t) {
        var a = (l.Object || {})[e] || Object[e],
            d = {};
        d[e] = t(a), n(n.S + n.F * r(function() {
            a(1)
        }), "Object", d)
    }
}, function(e, t, a) {
    var n = a(115),
        l = a(114);
    a(185)("getPrototypeOf", function() {
        return function(e) {
            return l(n(e))
        }
    })
}, function(e, t, a) {
    a(186), e.exports = a(12).Object.getPrototypeOf
}, function(e, t, a) {
    e.exports = {
        default: a(187),
        __esModule: !0
    }
}, function(e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(a(188)),
        l = i(a(183)),
        r = i(a(182)),
        d = i(a(178)),
        u = i(a(152)),
        o = i(a(1));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = function() {
            return o.default.createElement("span", null)
        },
        c = function(e) {
            function t() {
                var e;
                (0, l.default)(this, t);
                for (var a = arguments.length, r = Array(a), u = 0; u < a; u++) r[u] = arguments[u];
                var o = (0, d.default)(this, (e = (0, n.default)(t)).call.apply(e, [this].concat(r)));
                return o.state = {
                    canRender: !1
                }, o
            }
            return (0, u.default)(t, e), (0, r.default)(t, [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        canRender: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        a = e.onSSR,
                        n = void 0 === a ? o.default.createElement(s, null) : a;
                    return this.state.canRender ? t : n
                }
            }]), t
        }(o.default.Component);
    t.default = c
}, , , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(630)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.title
            }, e.map((e, t) => r.default.createElement("a", {
                key: t,
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title)))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , , , , , , , , , , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(4));
    class o extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: e
                }
            })
        }
    }(0, l.default)(o, "propTypes", {
        content: d.default.string
    });
    var i = (0, u.default)(o);
    t.default = i
}, , , , , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(666)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("h3", {
                className: u.default.list_title
            }, e.map((e, t) => e.children && e.children.length > 0 ? r.default.createElement(r.default.Fragment, {
                key: t
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title), e.children.map((e, t) => r.default.createElement("a", {
                key: t,
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title))) : r.default.createElement("a", {
                key: t,
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title)))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , , , , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getStockInfoData = t.getFLiveData = t.getNewsDataList = void 0;
    var l = n(a(7)),
        r = a(8),
        d = a(29);
    let u = "//shankapi.ifeng.com/spring";
    "undefined" != typeof window && /\.shank\.ifeng\.com/.test(window.location.hostname) && (u = "/api");
    const o = a(26),
        i = function() {
            var e = (0, l.default)(function*(e) {
                const t = ((e, t) => {
                        let a = `_${o(`${e}_${t=t||0}`)}`;
                        for (; window[a];) a = `_${o(`${e}_${++t}`)}`;
                        return a
                    })("getNewsDataList"),
                    a = yield(0, r.jsonp)(`${u}/index/newsData/${e}/${t}`, {
                        jsonpCallback: t,
                        cache: !1
                    });
                return 0 === a.code ? a.data : null
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
    t.getNewsDataList = i;
    const s = function() {
        var e = (0, l.default)(function*() {
            const e = yield(0, r.jsonp)("//data.zhibo.ifeng.com/508df9aec9e2a/data/ifeng.json", {
                jsonpCallback: "column_data_all_hot_success"
            });
            return e ? e.map(e => ({
                img: (0, d.formatImage)(e.thumb_new, 157, 71),
                url: (0, d.formatUrl)(e.pc_preview),
                title: e.title,
                endtime: e.endtime
            })) : []
        });
        return function() {
            return e.apply(this, arguments)
        }
    }();
    t.getFLiveData = s;
    const c = function() {
        var e = (0, l.default)(function*(e) {
            const t = e.join(",");
            return yield(0, r.jsonp)(`${u}/index/stockInfoData/${t}/getStockInfoData`, {
                jsonpCallback: "getStockInfoData",
                cache: !1
            })
        });
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
    t.getStockInfoData = c
}, , , , , , , , , , , , , , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(574)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.news_box
            }, e.map((e, t) => r.default.createElement("div", {
                key: t,
                className: `${u.default.box} ${0===t?u.default.box_l:u.default.box_r}`
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel,
                "data-nomask": !0
            }, r.default.createElement("img", {
                src: e.thumbnail,
                alt: e.title
            })), e.isVideo ? r.default.createElement("div", {
                className: u.default.btn
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel,
                "data-nomask": !0
            })) : "", r.default.createElement("div", {
                className: u.default.txt_bg
            }), r.default.createElement("div", {
                className: u.default.txt
            }, r.default.createElement("a", {
                key: t,
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title)))))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(708)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props,
                t = e.content,
                a = e.type,
                n = e.children,
                l = 0 === a ? "/" : "·";
            return r.default.createElement("div", {
                className: u.default.title
            }, t.map((e, a) => r.default.createElement(r.default.Fragment, {
                key: a
            }, e.url ? r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title) : r.default.createElement("a", null, e.title), a !== t.length - 1 ? l : "")), n)
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array,
        type: d.default.number,
        children: d.default.object
    });
    var c = (0, o.default)(s);
    t.default = c
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(566)),
        o = n(a(4)),
        i = n(a(564)),
        s = n(a(561)),
        c = n(a(558));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.tabs
            }, r.default.createElement(i.default, null, e.map((e, t) => r.default.createElement(s.default, {
                key: t,
                title: e.title,
                url: e.url
            }, r.default.createElement(c.default, {
                content: e.data
            })))))
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.array
    });
    var m = (0, o.default)(f);
    t.default = m
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
    e.exports = {
        content_list: "content_list--2gqytsD",
        chip_item: "chip_item-c6g-eZ80"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(1)),
        r = n(a(13)),
        d = n(a(407)),
        u = n(a(6));
    var o = (0, n(a(4)).default)(class extends l.default.PureComponent {
        render() {
            const e = l.default.createElement("div", {
                className: d.default.content_list
            }, l.default.createElement(u.default, {
                id: "40009",
                type: "static",
                title: "要闻区地方站辽宁",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40010",
                type: "static",
                title: "要闻区地方站山东",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40011",
                type: "static",
                title: "要闻区地方站河北",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40012",
                type: "static",
                title: "要闻区地方站湖北",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40013",
                type: "static",
                title: "要闻区地方站江苏",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40014",
                type: "static",
                title: "要闻区地方站湖南",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40015",
                type: "static",
                title: "要闻区地方站陕西",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40016",
                type: "static",
                title: "要闻区地方站浙江",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40017",
                type: "static",
                title: "要闻区地方站江西",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40018",
                type: "static",
                title: "要闻区地方站海南",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40019",
                type: "static",
                title: "要闻区地方站安徽",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40020",
                type: "static",
                title: "要闻区地方站广东",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40021",
                type: "static",
                title: "要闻区地方站重庆",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40022",
                type: "static",
                title: "要闻区地方站黑龙江",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40023",
                type: "static",
                title: "要闻区地方站四川",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40024",
                type: "static",
                title: "要闻区地方站吉林",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40025",
                type: "static",
                title: "要闻区地方站甘肃",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40026",
                type: "static",
                title: "要闻区地方站河南",
                groupName: "要闻区地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40028",
                type: "static",
                title: "要闻区地方站最后一条辽宁",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40029",
                type: "static",
                title: "要闻区地方站最后一条山东",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40033",
                type: "static",
                title: "要闻区地方站最后一条河北",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40031",
                type: "static",
                title: "要闻区地方站最后一条湖北",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40032",
                type: "static",
                title: "要闻区地方站最后一条江苏",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40030",
                type: "static",
                title: "要闻区地方站最后一条湖南",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40034",
                type: "static",
                title: "要闻区地方站最后一条陕西",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40027",
                type: "static",
                title: "要闻区地方站最后一条浙江",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40035",
                type: "static",
                title: "要闻区地方站最后一条江西",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40036",
                type: "static",
                title: "要闻区地方站最后一条海南",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40037",
                type: "static",
                title: "要闻区地方站最后一条安徽",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40038",
                type: "static",
                title: "要闻区地方站最后一条广东",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40039",
                type: "static",
                title: "要闻区地方站最后一条重庆",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40040",
                type: "static",
                title: "要闻区地方站最后一条黑龙江",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40041",
                type: "static",
                title: "要闻区地方站最后一条四川",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40042",
                type: "static",
                title: "要闻区地方站最后一条吉林",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40043",
                type: "static",
                title: "要闻区地方站最后一条甘肃",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40044",
                type: "static",
                title: "要闻区地方站最后一条河南",
                groupName: "要闻区地方站最后一条"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40051",
                type: "static",
                title: "房产头条广州",
                groupName: "房产头条地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40052",
                type: "static",
                title: "房产列表一地方站广州",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40053",
                type: "static",
                title: "房产列表一地方站青岛",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40054",
                type: "static",
                title: "房产列表一地方站大连",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40055",
                type: "static",
                title: "房产列表一地方站南京",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40056",
                type: "static",
                title: "房产列表一地方站杭州",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40057",
                type: "static",
                title: "房产列表一地方站上海",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40058",
                type: "static",
                title: "房产列表一地方站西安",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40059",
                type: "static",
                title: "房产列表一地方站长沙",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40060",
                type: "static",
                title: "房产列表一地方站济南",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40061",
                type: "static",
                title: "房产列表一地方站成都",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40062",
                type: "static",
                title: "房产列表一地方站重庆",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40063",
                type: "static",
                title: "房产列表一地方站深圳",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40064",
                type: "static",
                title: "房产列表一地方站天津",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40065",
                type: "static",
                title: "房产列表一地方站烟台",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40066",
                type: "static",
                title: "房产列表一地方站武汉",
                groupName: "房产列表一地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40067",
                type: "static",
                title: "房产列表二地方站广州",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40068",
                type: "static",
                title: "房产列表二地方站青岛",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40069",
                type: "static",
                title: "房产列表二地方站大连",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40070",
                type: "static",
                title: "房产列表二地方站南京",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40071",
                type: "static",
                title: "房产列表二地方站杭州",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40072",
                type: "static",
                title: "房产列表二地方站上海",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40073",
                type: "static",
                title: "房产列表二地方站西安",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40074",
                type: "static",
                title: "房产列表二地方站长沙",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40075",
                type: "static",
                title: "房产列表二地方站济南",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40076",
                type: "static",
                title: "房产列表二地方站成都",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40077",
                type: "static",
                title: "房产列表二地方站重庆",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40078",
                type: "static",
                title: "房产列表二地方站深圳",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40079",
                type: "static",
                title: "房产列表二地方站天津",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40080",
                type: "static",
                title: "房产列表二地方站烟台",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40081",
                type: "static",
                title: "房产列表二地方站武汉",
                groupName: "房产列表二地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40082",
                type: "static",
                title: "房产左侧地方站广州",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40083",
                type: "static",
                title: "房产左侧地方站青岛",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40084",
                type: "static",
                title: "房产左侧地方站大连",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40085",
                type: "static",
                title: "房产左侧地方站南京",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40086",
                type: "static",
                title: "房产左侧地方站杭州",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40087",
                type: "static",
                title: "房产左侧地方站上海",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40088",
                type: "static",
                title: "房产左侧地方站西安",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40089",
                type: "static",
                title: "房产左侧地方站长沙",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40090",
                type: "static",
                title: "房产左侧地方站济南",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40091",
                type: "static",
                title: "房产左侧地方站成都",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40092",
                type: "static",
                title: "房产左侧地方站重庆",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40093",
                type: "static",
                title: "房产左侧地方站深圳",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40094",
                type: "static",
                title: "房产左侧地方站天津",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40095",
                type: "static",
                title: "房产左侧地方站烟台",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })), l.default.createElement(u.default, {
                id: "40096",
                type: "static",
                title: "房产左侧地方站武汉",
                groupName: "房产左侧地方站"
            }, l.default.createElement("div", {
                className: d.default.chip_item
            })));
            return r.default.createPortal(e, document.body)
        }
    });
    t.default = o
}, , function(e, t, a) {
    e.exports = {
        top_img: "top_img-2XDidKGL",
        closed: "closed-3ufh3pih",
        a_link: "a_link-OCpqrp9M"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = (n(a(13)), n(a(2))),
        u = n(a(410)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "handleClick", () => {
                (0, this.props.handleCloseTurnRed)()
            })
        }
        render() {
            const e = this.props,
                t = e.content,
                a = t.src,
                n = t.ipadSrc,
                l = t.url,
                d = e.isIpad,
                o = e.turnRed,
                s = document.querySelector("body");
            return o ? (s.style.backgroundColor = "#fff", s.style.backgroundImage = `url(${d?n:a})`, s.style.backgroundPosition = "center 1px", s.style.backgroundRepeat = "no-repeat") : s.style.background = "none", o ? r.default.createElement("div", {
                className: u.default.red_cog
            }, r.default.createElement("div", {
                className: u.default.top_img
            }, r.default.createElement("div", {
                className: u.default.closed,
                onClick: this.handleClick
            }), r.default.createElement("a", {
                className: u.default.a_link,
                href: l,
                target: "_blank",
                rel: i.rel
            }))) : r.default.createElement("div", null)
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object,
        isIpad: d.default.bool,
        turnRed: d.default.bool,
        handleCloseTurnRed: d.default.func
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        floatAd: "floatAd-37oYXiAT"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(13)),
        u = n(a(2)),
        o = n(a(413)),
        i = n(a(10)),
        s = n(a(4));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.floatAd1,
                a = e.floatAd2,
                n = e.floatAd3,
                l = e.floatAd4,
                u = e.floatAd5,
                s = e.floatAd6,
                c = e.floatAd7,
                f = r.default.createElement(r.default.Fragment, null, t ? r.default.createElement(i.default, {
                    content: t,
                    styleName: o.default.floatAd
                }) : "", a ? r.default.createElement(i.default, {
                    content: a,
                    styleName: o.default.floatAd
                }) : "", n ? r.default.createElement(i.default, {
                    content: n,
                    styleName: o.default.floatAd
                }) : "", l ? r.default.createElement(i.default, {
                    content: l,
                    styleName: o.default.floatAd
                }) : "", u ? r.default.createElement(i.default, {
                    content: u,
                    styleName: o.default.floatAd
                }) : "", s ? r.default.createElement(i.default, {
                    content: s,
                    styleName: o.default.floatAd
                }) : "", c ? r.default.createElement(i.default, {
                    content: c,
                    styleName: o.default.floatAd
                }) : "");
            return d.default.createPortal(f, document.body)
        }
    }(0, l.default)(c, "propTypes", {
        content: u.default.object
    });
    var f = (0, s.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        qrCode: "qrCode-dYhwxVY8",
        close: "close-2nOnrzen"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(13)),
        u = n(a(2)),
        o = n(a(416)),
        i = n(a(4)),
        s = a(5),
        c = a(8);
    const f = "undefined" != typeof document ? c.cookie.get("wxIsclose") : "";
    class m extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                isShow: "false" === f
            }), (0, l.default)(this, "handleClick", () => {
                const e = new Date;
                c.cookie.set("wxIsclose", !0), c.cookie.set("wxCloseStart", e.getTime()), this.setState({
                    isShow: !1
                })
            })
        }
        componentDidMount() {
            (new Date).getTime() - c.cookie.get("wxCloseStart") >= 36e5 && (c.cookie.set("wxIsclose", !1), this.setState({
                isShow: !0
            }))
        }
        render() {
            const e = this.state.isShow,
                t = this.props.content.qrCode,
                a = t.url,
                n = t.title,
                l = t.src,
                u = t.width,
                i = t.height,
                c = e ? r.default.createElement("div", {
                    id: "qrCode",
                    className: o.default.qrCode
                }, r.default.createElement("span", {
                    className: o.default.close,
                    onClick: this.handleClick
                }, "关闭"), r.default.createElement("a", {
                    href: a,
                    target: "_blank",
                    rel: s.rel
                }, r.default.createElement("img", {
                    src: l,
                    width: u,
                    height: i,
                    alt: n,
                    title: n
                }))) : r.default.createElement("div", null);
            return d.default.createPortal(c, document.body)
        }
    }(0, l.default)(m, "propTypes", {
        content: u.default.object
    });
    var p = (0, i.default)(m);
    t.default = p
}, , function(e, t, a) {}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = (n(a(419)), n(a(4)));
    class o extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                id: "footer",
                dangerouslySetInnerHTML: {
                    __html: e
                }
            })
        }
    }(0, l.default)(o, "propTypes", {
        content: d.default.string
    });
    var i = (0, u.default)(o);
    t.default = i
}, , function(e, t, a) {
    e.exports = {
        shop_box: "shop_box-3PT5u6Kj"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(422)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(35));
    class m extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.shopTopic,
                a = e.shopTitle,
                n = e.shopList0,
                l = e.shopList1;
            return r.default.createElement("div", {
                id: "shopNewsList",
                className: u.default.shop_box
            }, r.default.createElement(o.default, {
                id: "50084",
                type: "struct",
                title: "财经梧桐汇标题",
                groupName: "财经梧桐汇",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75124",
                type: "recommend",
                title: "财经梧桐汇头条",
                groupName: "财经梧桐汇",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75125",
                type: "recommend",
                title: "财经梧桐汇新闻列表1",
                groupName: "财经梧桐汇",
                content: n,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75126",
                type: "recommend",
                title: "财经梧桐汇新闻列表2",
                groupName: "财经梧桐汇",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                hasTitle: !0,
                isList: !0
            })))
        }
    }(0, l.default)(m, "propTypes", {
        content: d.default.object
    });
    var p = (0, i.default)(m);
    t.default = p
}, , function(e, t, a) {
    e.exports = {
        vip_box: "vip_box-2vt09NS4",
        fl: "fl-bKFRNnPf",
        fr: "fr-3C9PTUrE"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(425)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(35)),
        m = n(a(227));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.vipTopic,
                a = e.vipTitle,
                n = e.vipList0,
                l = e.vipList1,
                d = e.vipBoxData0,
                i = e.vipBoxData1;
            return r.default.createElement("div", {
                id: "vipNewsList",
                className: u.default.vip_box
            }, r.default.createElement(o.default, {
                id: "50085",
                type: "struct",
                title: "视频标题",
                groupName: "视频",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75119",
                type: "recommend",
                title: "视频头条",
                groupName: "视频",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75120",
                type: "recommend",
                title: "视频新闻列表",
                groupName: "视频",
                content: n,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75121",
                type: "recommend",
                title: "互娱动漫新闻列表",
                groupName: "视频",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement("div", {
                className: u.default.fl
            }, r.default.createElement(o.default, {
                id: "75122",
                type: "recommend",
                title: "互娱动漫新闻盒1",
                groupName: "视频",
                content: d,
                translate: "handleNewsBoxData"
            }, r.default.createElement(m.default, null))), r.default.createElement("div", {
                className: u.default.fr
            }, r.default.createElement(o.default, {
                id: "75123",
                type: "recommend",
                title: "互娱动漫新闻盒2",
                groupName: "视频",
                content: i,
                translate: "handleNewsBoxData"
            }, r.default.createElement(m.default, null))))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        box: "box-h-N7S5NR",
        ad: "ad-3oH9r-Dc"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(428)),
        o = n(a(4)),
        i = n(a(426)),
        s = n(a(423));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.vipData,
                a = e.shopData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement("div", {
                className: "clearfix"
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            })))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        sider_box: "sider_box-2Raw2zR7",
        sider: "sider-19Sx6vgv",
        stock_box: "stock_box-c2FS0wiS clearfix",
        sider_list: "sider_list-38IO1RaP",
        title: "title-1HKGj4Rz"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(431)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(192)),
        c = n(a(120));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.vsNewsSiderTitle,
                a = e.vsNewsSiderTips,
                n = e.vsNewsSiderContent0,
                l = e.vsNewsSiderContent1;
            return r.default.createElement("div", {
                className: u.default.sider_box
            }, r.default.createElement("div", {
                id: "vipSiderList",
                className: u.default.sider
            }, r.default.createElement(o.default, {
                id: "50086",
                type: "struct",
                title: "市场部标题",
                groupName: "市场部",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement("p", {
                className: u.default.title
            }, a[0]), r.default.createElement(o.default, {
                id: "75127",
                type: "recommend",
                title: "市场部列表",
                groupName: "市场部",
                content: n,
                translate: "handleNewsSiderContentData",
                translateOptions: {
                    index: -1
                }
            }, r.default.createElement(c.default, null)), r.default.createElement("p", {
                className: u.default.title
            }, a[1]), r.default.createElement(o.default, {
                id: "75128",
                type: "recommend",
                title: "市场部列表",
                groupName: "市场部",
                content: l,
                translate: "handleNewsSiderContentData",
                translateOptions: {
                    index: -1
                }
            }, r.default.createElement(c.default, null))))
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        box: "box-1ouVGFFT clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(434)),
        o = n(a(4)),
        i = n(a(432)),
        s = n(a(429));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.vsNewsSiderData,
                a = e.vsNewsData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        fiction_box: "fiction_box-OFAFrmW0"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(437)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(35));
    class m extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.fictionTopic,
                a = e.fictionTitle,
                n = e.fictionList0,
                l = e.fictionList1;
            return r.default.createElement("div", {
                id: "fictionNewsList",
                className: u.default.fiction_box
            }, r.default.createElement(o.default, {
                id: "50083",
                type: "struct",
                title: "互娱小说栏标题",
                groupName: "互娱小说栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75116",
                type: "recommend",
                title: "互娱小说栏头条",
                groupName: "互娱小说栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75117",
                type: "recommend",
                title: "互娱小说栏新闻列表1",
                groupName: "互娱小说栏",
                content: n,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75118",
                type: "recommend",
                title: "互娱小说栏新闻列表2",
                groupName: "互娱小说栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                hasTitle: !0,
                isList: !0
            })))
        }
    }(0, l.default)(m, "propTypes", {
        content: d.default.object
    });
    var p = (0, i.default)(m);
    t.default = p
}, , function(e, t, a) {
    e.exports = {
        ffh_box: "ffh_box-1fzs1oAW"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(440)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(35)),
        m = n(a(227));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.ffhTopic,
                a = e.ffhTitle,
                n = e.ffhList,
                l = e.ffhBoxData;
            return r.default.createElement("div", {
                id: "ffhNewsList",
                className: u.default.ffh_box
            }, r.default.createElement(o.default, {
                id: "50082",
                type: "struct",
                title: "大风号栏标题",
                groupName: "大风号栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75113",
                type: "recommend",
                title: "大风号栏头条",
                groupName: "大风号栏",
                content: a,
                translate: "handleFFHNewsData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75114",
                type: "recommend",
                title: "大风号栏新闻列表",
                groupName: "大风号栏",
                content: n,
                translate: "handleFFHNewsData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75115",
                type: "recommend",
                title: "大风号栏新闻盒",
                groupName: "大风号栏",
                content: l,
                translate: "handleNewsBoxData"
            }, r.default.createElement(m.default, null)))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        box: "box-39yF9uRq",
        ad: "ad-1XU6S-2V"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(443)),
        o = n(a(4)),
        i = n(a(441)),
        s = n(a(438));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.ffhData,
                a = e.fictionData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement("div", {
                className: "clearfix"
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            })))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = (n(a(446)), n(a(4))),
        o = n(a(192)),
        i = n(a(120));
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.nav,
                a = e.data;
            return r.default.createElement("div", null, r.default.createElement(o.default, {
                content: t
            }), r.default.createElement(i.default, {
                content: a,
                hasTopic: !0
            }))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object
    });
    var c = (0, u.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        sider_box: "sider_box-3LCMCWIN",
        sider: "sider-22IMDRP-",
        stock_box: "stock_box-2sZKXtCw clearfix",
        sider_list: "sider_list-XtzVNWg0"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(449)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(447)),
        c = n(a(273));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.ffNewsSiderContent,
                a = e.ffNewsSiderTabs;
            return r.default.createElement("div", {
                className: u.default.sider_box
            }, r.default.createElement("div", {
                id: "ffhSiderList",
                className: u.default.sider
            }, r.default.createElement(o.default, {
                id: "50097",
                type: "struct",
                title: "互娱讲堂",
                groupName: "大风号要闻区左侧栏",
                content: t
            }, r.default.createElement(s.default, null))), r.default.createElement(o.default, {
                id: "50100",
                type: "struct",
                title: "音乐标签",
                groupName: "大风号要闻区左侧栏",
                content: a
            }, r.default.createElement(c.default, null)))
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        box: "box-2iZ7-ou_ clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(452)),
        o = n(a(4)),
        i = n(a(450)),
        s = n(a(444));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.ffNewsSiderData,
                a = e.ffNewsData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        fo_box: "fo_box-1O7B-tyN"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(455)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(144)),
        m = n(a(35));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.foTopic,
                a = e.foTitle,
                n = e.foList0,
                l = e.foList1;
            return r.default.createElement("div", {
                id: "foNewsList",
                className: u.default.fo_box
            }, r.default.createElement(o.default, {
                id: "50081",
                type: "struct",
                title: "佛教栏标题",
                groupName: "佛教栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75110",
                type: "recommend",
                title: "佛教栏头条",
                groupName: "佛教栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75111",
                type: "recommend",
                title: "佛教栏新闻列表1",
                groupName: "佛教栏",
                content: n,
                translate: "handleVideoContentData",
                translateOptions: {
                    index: 0
                }
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75112",
                type: "recommend",
                title: "佛教栏新闻列表2",
                groupName: "佛教栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, {
                hasTitle: !0,
                isList: !0
            })))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        digital_box: "digital_box-15ZV5ttQ"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(458)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(144)),
        m = n(a(35));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.digitalTopic,
                a = e.digitalTitle,
                n = e.digitalList0,
                l = e.digitalList1;
            return r.default.createElement("div", {
                id: "digitalNewsList",
                className: u.default.digital_box
            }, r.default.createElement(o.default, {
                id: "50080",
                type: "struct",
                title: "数码栏标题",
                groupName: "数码栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75107",
                type: "recommend",
                title: "数码栏头条",
                groupName: "数码栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75108",
                type: "recommend",
                title: "数码栏新闻列表1",
                groupName: "数码栏",
                content: n,
                translate: "handleVideoContentData",
                translateOptions: {
                    index: 0
                }
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75109",
                type: "recommend",
                title: "数码栏头条2",
                groupName: "数码栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, {
                hasTitle: !0,
                isList: !0
            })))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        box: "box-NrH4uX71",
        ad: "ad-1EQznkpv"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(461)),
        o = n(a(10)),
        i = n(a(4)),
        s = n(a(459)),
        c = n(a(456));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.digitalData,
                a = e.foData,
                n = e.digitalAndFoAd;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement("div", {
                className: "clearfix"
            }, r.default.createElement(s.default, {
                content: t
            }), r.default.createElement(c.default, {
                content: a
            })), n ? r.default.createElement(o.default, {
                content: n,
                styleName: u.default.ad
            }) : "")
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        sider_box: "sider_box-3IsutpHr",
        sider: "sider-MbzgrDx7",
        ipad_sider: "ipad_sider-1PQxqNAx"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(464)),
        o = n(a(6)),
        i = n(a(10)),
        s = n(a(4)),
        c = n(a(203));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.dfNewsSiderAd,
                a = e.ipadAd6;
            return r.default.createElement("div", {
                className: u.default.sider_box
            }, t ? r.default.createElement(i.default, {
                content: t,
                styleName: u.default.sider
            }) : r.default.createElement("div", {
                className: u.default.ipad_sider
            }, r.default.createElement(o.default, {
                id: "40108",
                type: "static",
                title: "广告7",
                groupName: "数码佛教要闻区左侧栏",
                content: a
            }, r.default.createElement(c.default, null))))
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, s.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        box: "box-1asbbvfl clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(467)),
        i = n(a(4)),
        s = n(a(465)),
        c = n(a(462));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.dfNewsSiderData,
                a = e.dfNewsData;
            return r.default.createElement("div", {
                className: o.default.box
            }, r.default.createElement(d.default, null, r.default.createElement(s.default, {
                content: t
            })), r.default.createElement(c.default, {
                content: a
            }))
        }
    }(0, l.default)(f, "propTypes", {
        content: u.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        guoxue_box: "guoxue_box-1GC1TSkM"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(470)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(35));
    class m extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.guoxueTopic,
                a = e.guoxueTitle,
                n = e.guoxueList0,
                l = e.guoxueList1;
            return r.default.createElement("div", {
                id: "guoxueNewsList",
                className: u.default.guoxue_box
            }, r.default.createElement(o.default, {
                id: "50079",
                type: "struct",
                title: "国学公益栏标题",
                groupName: "国学公益栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75104",
                type: "recommend",
                title: "国学公益栏头条",
                groupName: "国学公益栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75105",
                type: "recommend",
                title: "国学公益栏新闻列表1",
                groupName: "国学公益栏",
                content: n,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75106",
                type: "recommend",
                title: "国学公益栏新闻列表2",
                groupName: "国学公益栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                hasTitle: !0,
                isList: !0
            })))
        }
    }(0, l.default)(m, "propTypes", {
        content: d.default.object
    });
    var p = (0, i.default)(m);
    t.default = p
}, , function(e, t, a) {
    e.exports = {
        tech_box: "tech_box-220t-4IT"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(473)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(35)),
        m = n(a(208));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.techTopic,
                a = e.techTitle0,
                n = e.techTitle1,
                l = e.techList0,
                d = e.techList1,
                i = e.techList2,
                p = e.techListAd;
            return r.default.createElement("div", {
                id: "techNewsList",
                className: u.default.tech_box
            }, r.default.createElement(o.default, {
                id: "50078",
                type: "struct",
                title: "科技凤眼栏标题",
                groupName: "科技凤眼栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75099",
                type: "recommend",
                title: "科技凤眼栏头条1",
                groupName: "科技凤眼栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75100",
                type: "recommend",
                title: "科技凤眼栏新闻列表1",
                groupName: "科技凤眼栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75101",
                type: "recommend",
                title: "科技凤眼栏头条2",
                groupName: "科技凤眼栏",
                content: n,
                translate: "handleNewsBoxData"
            }, r.default.createElement(m.default, null)), r.default.createElement(o.default, {
                id: "75102",
                type: "recommend",
                title: "科技凤眼栏新闻列表2",
                groupName: "科技凤眼栏",
                content: d,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75103",
                type: "recommend",
                title: "科技凤眼栏新闻列表3",
                groupName: "科技凤眼栏",
                content: i,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0,
                ad: p
            })))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        box: "box-18IOROxd",
        ad_box: "ad_box-170uiJCI clearfix",
        fl: "fl-11hywVDh fl",
        fr: "fr-3DBrToGP fr"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(476)),
        o = n(a(10)),
        i = n(a(4)),
        s = n(a(474)),
        c = n(a(471));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.techData,
                a = e.guoxueData,
                n = e.techAndGuoxueAd0,
                l = e.techAndGuoxueAd1;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement("div", {
                className: "clearfix"
            }, r.default.createElement(s.default, {
                content: t
            }), r.default.createElement(c.default, {
                content: a
            })), r.default.createElement("div", {
                className: u.default.ad_box
            }, n ? r.default.createElement(o.default, {
                content: n,
                styleName: u.default.fl
            }) : "", l ? r.default.createElement(o.default, {
                content: l,
                styleName: u.default.fr
            }) : ""))
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = (n(a(479)), n(a(4))),
        o = n(a(192)),
        i = n(a(120));
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.nav,
                a = e.data;
            return r.default.createElement("div", null, r.default.createElement(o.default, {
                content: t
            }), r.default.createElement(i.default, {
                content: a,
                hasTopic: !0
            }))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object
    });
    var c = (0, u.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        sider_box: "sider_box-204RXoAK",
        sider: "sider-1t34urNN",
        stock_box: "stock_box-35ip9KuN clearfix",
        sider_list: "sider_list-2RDLJ2pm"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(482)),
        i = n(a(6)),
        s = n(a(10)),
        c = n(a(4)),
        f = n(a(480)),
        m = n(a(203));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.tgNewsSiderContent,
                a = e.tgNewsSiderAd,
                n = e.ipadAd5;
            return r.default.createElement("div", {
                id: "techSiderList",
                className: o.default.sider_box
            }, r.default.createElement("div", {
                className: o.default.sider
            }, r.default.createElement(i.default, {
                id: "50096",
                type: "struct",
                title: "科技要闻区左侧栏标题",
                groupName: "科技国学要闻区左侧栏",
                content: t
            }, r.default.createElement(f.default, null))), r.default.createElement(d.default, null, a ? r.default.createElement(s.default, {
                content: a
            }) : r.default.createElement(i.default, {
                id: "40107",
                type: "static",
                title: "广告6",
                groupName: "科技国学要闻区左侧栏",
                content: n
            }, r.default.createElement(m.default, null))))
        }
    }(0, l.default)(p, "propTypes", {
        content: u.default.object
    });
    var h = (0, c.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        box: "box-3y0ZMGe3 clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(485)),
        o = n(a(4)),
        i = n(a(483)),
        s = n(a(477));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.tgNewsSiderData,
                a = e.tgNewsData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        travel_box: "travel_box-1aVdZF-w"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(488)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(144)),
        m = n(a(35));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.travelTopic,
                a = e.travelTitle,
                n = e.travelList0,
                l = e.travelList1;
            return r.default.createElement("div", {
                id: "travelNewsList",
                className: u.default.travel_box
            }, r.default.createElement(o.default, {
                id: "50077",
                type: "struct",
                title: "旅游酒业栏标题",
                groupName: "旅游酒业栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75096",
                type: "recommend",
                title: "旅游栏头条",
                groupName: "旅游酒业栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75097",
                type: "recommend",
                title: "旅游栏新闻列表",
                groupName: "旅游酒业栏",
                content: n,
                translate: "handleVideoContentData",
                translateOptions: {
                    index: 0
                }
            }, r.default.createElement(f.default, {
                hasEnd: !0
            })), r.default.createElement(o.default, {
                id: "75098",
                type: "recommend",
                title: "酒业栏新闻列表",
                groupName: "旅游酒业栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, {
                isList: !0
            })))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        fashion_box: "fashion_box-1FLdHBNm"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(491)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(35)),
        m = n(a(227));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.fashionTopic,
                a = e.fashionTitle,
                n = e.fashionList,
                l = e.fashionBoxData,
                d = e.fashionListAd;
            return r.default.createElement("div", {
                id: "fashionNewsList",
                className: u.default.fashion_box
            }, r.default.createElement(o.default, {
                id: "50076",
                type: "struct",
                title: "时尚栏标题",
                groupName: "时尚栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75093",
                type: "recommend",
                title: "时尚栏头条",
                groupName: "时尚栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75094",
                type: "recommend",
                title: "时尚栏新闻列表",
                groupName: "时尚栏",
                content: n,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0,
                ad: d
            })), r.default.createElement(o.default, {
                id: "75095",
                type: "recommend",
                title: "时尚栏新闻盒",
                groupName: "时尚栏",
                content: l,
                translate: "handleNewsBoxData"
            }, r.default.createElement(m.default, null)))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        box: "box-Tvp4PxPJ",
        ad: "ad-3fzmf0s0"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(494)),
        o = n(a(10)),
        i = n(a(4)),
        s = n(a(492)),
        c = n(a(489));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.fashionData,
                a = e.travelData,
                n = e.fashionAndTravelAd;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement("div", {
                className: "clearfix"
            }, r.default.createElement(s.default, {
                content: t
            }), r.default.createElement(c.default, {
                content: a
            })), n ? r.default.createElement(o.default, {
                content: n,
                styleName: u.default.ad
            }) : "")
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = (n(a(497)), n(a(4))),
        o = n(a(192)),
        i = n(a(120));
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.nav,
                a = e.data;
            return r.default.createElement("div", null, r.default.createElement(o.default, {
                content: t
            }), r.default.createElement(i.default, {
                content: a,
                hasTopic: !0
            }))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object
    });
    var c = (0, u.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        sider_box: "sider_box-3Oh4GPL6",
        sider: "sider-GhmxI9ob",
        stock_box: "stock_box-2DFo6BeQ clearfix",
        sider_list: "sider_list-hBzoD7hc"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(500)),
        i = n(a(6)),
        s = n(a(10)),
        c = n(a(4)),
        f = n(a(498)),
        m = n(a(203));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.ftNewsSiderContent,
                a = e.ftNewsSiderAd,
                n = e.ipadAd4;
            return r.default.createElement("div", {
                id: "fashionSiderList",
                className: o.default.sider_box
            }, r.default.createElement("div", {
                className: o.default.sider
            }, r.default.createElement(i.default, {
                id: "50095",
                type: "struct",
                title: "时尚要闻区左侧栏标题",
                groupName: "时尚旅游要闻区左侧栏",
                content: t
            }, r.default.createElement(f.default, null))), r.default.createElement(d.default, null, a ? r.default.createElement(s.default, {
                content: a
            }) : r.default.createElement(i.default, {
                id: "40106",
                type: "static",
                title: "广告5",
                groupName: "时尚旅游要闻区左侧栏",
                content: n
            }, r.default.createElement(m.default, null))))
        }
    }(0, l.default)(p, "propTypes", {
        content: u.default.object
    });
    var h = (0, c.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        box: "box-2QDDta3F clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(503)),
        o = n(a(4)),
        i = n(a(501)),
        s = n(a(495));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.ftNewsSiderData,
                a = e.ftNewsData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        book_box: "book_box-16QHm3jB"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(506)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(144)),
        m = n(a(35));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.bookTopic,
                a = e.bookTitle,
                n = e.bookList0,
                l = e.bookList1;
            return r.default.createElement("div", {
                id: "bookNewsList",
                className: u.default.book_box
            }, r.default.createElement(o.default, {
                id: "50075",
                type: "struct",
                title: "文化读书栏标题",
                groupName: "文化读书栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75090",
                type: "recommend",
                title: "文化读书栏头条",
                groupName: "文化读书栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75091",
                type: "recommend",
                title: "文化读书栏新闻列表1",
                groupName: "文化读书栏",
                content: n,
                translate: "handleVideoContentData",
                translateOptions: {
                    index: 0
                }
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75092",
                type: "recommend",
                title: "文化读书栏新闻列表2",
                groupName: "文化读书栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, {
                hasTitle: !0,
                isList: !0
            })))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        area_list: "area_list-2p4WRLj9"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(509)),
        o = n(a(4));
    class i extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.area_list,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            })
        }
    }(0, l.default)(i, "propTypes", {
        content: d.default.string
    });
    var s = (0, o.default)(i);
    t.default = s
}, , function(e, t, a) {
    e.exports = {
        home_box: "home_box-1nHnPDmR"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(7)),
        r = n(a(3)),
        d = n(a(1)),
        u = n(a(2)),
        o = n(a(512)),
        i = n(a(6)),
        s = n(a(4)),
        c = n(a(73)),
        f = n(a(48)),
        m = n(a(35)),
        p = n(a(208)),
        h = n(a(510)),
        g = a(213);
    class v extends d.default.PureComponent {
        constructor(...e) {
            super(...e), (0, r.default)(this, "state", {
                areaTitle: "",
                areaList0: "",
                areaList1: "",
                isTitleShow: !0,
                isList0Show: !0,
                isList1Show: !0
            })
        }
        componentDidMount() {
            var e = this;
            return (0, l.default)(function*() {
                const t = e.props,
                    a = t.listOne,
                    n = t.listTwo;
                if (t.isGZ) try {
                    const t = yield(0, g.getNewsDataList)("40051");
                    e.setState({
                        areaTitle: t,
                        isTitleShow: !("string" == typeof t && "" !== t)
                    })
                } catch (e) {}
                if (a && n) try {
                    const t = yield(0, g.getNewsDataList)(a), l = yield(0, g.getNewsDataList)(n);
                    e.setState({
                        areaList0: t,
                        areaList1: l,
                        isList0Show: !("string" == typeof t && "" !== t),
                        isList1Show: !("string" == typeof l && "" !== l)
                    })
                } catch (e) {}
            })()
        }
        render() {
            const e = this.state,
                t = e.areaTitle,
                a = e.areaList0,
                n = e.areaList1,
                l = e.isTitleShow,
                r = e.isList0Show,
                u = e.isList1Show,
                s = this.props,
                g = s.content,
                v = g.homeTopic,
                _ = g.homeTitle0,
                y = g.homeTitle1,
                E = g.homeList0,
                b = g.homeList1,
                x = g.homeList2,
                N = s.listOne,
                w = s.listTwo;
            return d.default.createElement("div", {
                id: "homeNewsList",
                className: o.default.home_box
            }, d.default.createElement(i.default, {
                id: "50074",
                type: "struct",
                title: "房产家居栏标题",
                groupName: "房产家居栏",
                content: v
            }, d.default.createElement(c.default, null)), "string" == typeof t && "" !== t ? d.default.createElement(i.default, {
                id: "40051",
                type: "static",
                title: "地方站房产头条1",
                groupName: "房产家居栏",
                content: t,
                position: "relative"
            }, d.default.createElement(h.default, null)) : "", l ? d.default.createElement(i.default, {
                id: "75085",
                type: "recommend",
                title: "房产家居栏头条1",
                groupName: "房产家居栏",
                content: _,
                translate: "handleNewsContentData"
            }, d.default.createElement(f.default, null)) : "", "string" == typeof a && "" !== a ? d.default.createElement(i.default, {
                id: N,
                type: "static",
                title: "地方站房产新闻列表1",
                groupName: "房产家居栏",
                content: a,
                position: "relative"
            }, d.default.createElement(h.default, null)) : "", r ? d.default.createElement(i.default, {
                id: "75086",
                type: "recommend",
                title: "房产家居栏新闻列表1",
                groupName: "房产家居栏",
                content: E,
                translate: "handleNewsContentData"
            }, d.default.createElement(m.default, {
                isList: !0
            })) : "", d.default.createElement(i.default, {
                id: "75087",
                type: "recommend",
                title: "房产家居栏头条2",
                groupName: "房产家居栏",
                content: y,
                translate: "handleNewsContentData"
            }, d.default.createElement(p.default, null)), "string" == typeof n && "" !== n ? d.default.createElement(i.default, {
                id: w,
                type: "static",
                title: "地方站房产新闻列表2",
                groupName: "房产家居栏",
                content: n,
                position: "relative"
            }, d.default.createElement(h.default, null)) : "", u ? d.default.createElement(i.default, {
                id: "75088",
                type: "recommend",
                title: "房产家居栏新闻列表2",
                groupName: "房产家居栏",
                content: b,
                translate: "handleNewsContentData"
            }, d.default.createElement(m.default, {
                isList: !0
            })) : "", d.default.createElement(i.default, {
                id: "75089",
                type: "recommend",
                title: "房产家居栏新闻列表3",
                groupName: "房产家居栏",
                content: x,
                translate: "handleNewsContentData"
            }, d.default.createElement(m.default, {
                isList: !0
            })))
        }
    }(0, r.default)(v, "propTypes", {
        content: u.default.object,
        listOne: u.default.string,
        listTwo: u.default.string,
        isGZ: u.default.bool
    });
    var _ = (0, s.default)(v);
    t.default = _
}, , function(e, t, a) {
    e.exports = {
        box: "box-V7yj_L2j",
        ad_box: "ad_box-2TGc9U6r clearfix",
        fl: "fl-3eLYp8BG fl",
        fr: "fr-2cq6tEfl fr",
        ad: "ad-8ETx2pLd"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(515)),
        i = n(a(10)),
        s = n(a(4)),
        c = n(a(513)),
        f = n(a(507));
    class m extends r.default.PureComponent {
        render() {
            const e = this.props,
                t = e.content,
                a = t.homeData,
                n = t.bookData,
                l = t.homeAndBookAd0,
                u = t.homeAndBookAd1,
                s = t.homeAndBookAd2,
                m = e.listOne,
                p = e.listTwo,
                h = e.isGZ;
            return r.default.createElement("div", {
                className: o.default.box
            }, r.default.createElement("div", {
                className: "clearfix"
            }, r.default.createElement(c.default, {
                content: a,
                listOne: m,
                listTwo: p,
                isGZ: h
            }), r.default.createElement(f.default, {
                content: n
            })), r.default.createElement("div", {
                className: o.default.ad_box
            }, r.default.createElement(d.default, null, r.default.createElement(i.default, {
                content: l,
                styleName: o.default.fl
            })), r.default.createElement(d.default, null, r.default.createElement(i.default, {
                content: u,
                styleName: o.default.fr
            }))), s ? r.default.createElement(i.default, {
                content: s,
                styleName: o.default.ad
            }) : "")
        }
    }(0, l.default)(m, "propTypes", {
        content: u.default.object,
        listOne: u.default.string,
        listTwo: u.default.string,
        isGZ: u.default.bool
    });
    var p = (0, s.default)(m);
    t.default = p
}, , function(e, t, a) {
    e.exports = {
        auto_search: "auto_search-2jy8HJy0",
        txt: "txt-3Mulkyvd",
        btn: "btn-IK0U5lDu"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = (n(a(2)), n(a(518))),
        u = n(a(4));
    a(5);
    var o = (0, u.default)(class extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                searchTxt: "请输入楼盘名/地址"
            }), (0, l.default)(this, "handleChange", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: t
                })
            }), (0, l.default)(this, "handleKeydown", e => {
                const t = e.currentTarget.value ? e.currentTarget.value : "";
                13 === e.keyCode && window.open(`http://house.ifeng.com/search?keyword=${t}`)
            }), (0, l.default)(this, "handleFocus", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: "请输入楼盘名/地址" === t ? "" : t
                })
            }), (0, l.default)(this, "handleBlur", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: "" === t ? "请输入楼盘名/地址" : t
                })
            }), (0, l.default)(this, "handleClick", e => {
                const t = "请输入楼盘名/地址" !== e.currentTarget.attributes.txt.value ? e.currentTarget.attributes.txt.value : "";
                window.open(`http://house.ifeng.com/search?keyword=${t}`)
            })
        }
        render() {
            const e = this.state.searchTxt;
            return r.default.createElement("div", {
                className: d.default.auto_search
            }, r.default.createElement("span", null, r.default.createElement("input", {
                className: d.default.txt,
                type: "text",
                value: e,
                onChange: this.handleChange,
                onKeyDown: this.handleKeydown,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
            })), r.default.createElement("span", null, r.default.createElement("input", {
                className: d.default.btn,
                type: "button",
                txt: e,
                onClick: this.handleClick
            })))
        }
    });
    t.default = o
}, , function(e, t, a) {
    e.exports = {
        sider: "sider-1virgu6n"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(521)),
        o = n(a(4)),
        i = n(a(192)),
        s = n(a(120));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.nav,
                a = e.data;
            return r.default.createElement("div", {
                className: u.default.sider
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a,
                hasTopic: !0
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        extra_list: "extra_list-21rsiuOI"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(524)),
        o = n(a(4));
    class i extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.extra_list,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            })
        }
    }(0, l.default)(i, "propTypes", {
        content: d.default.string
    });
    var s = (0, o.default)(i);
    t.default = s
}, , function(e, t, a) {
    e.exports = {
        sider_box: "sider_box-1UaOLnWJ",
        sider: "sider-2EU_h9G4",
        stock_box: "stock_box-2IsxmqSY clearfix",
        sider_list: "sider_list-35gy9MQh"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(7)),
        r = n(a(3)),
        d = n(a(1)),
        u = n(a(15)),
        o = n(a(2)),
        i = n(a(527)),
        s = n(a(6)),
        c = n(a(10)),
        f = n(a(4)),
        m = n(a(525)),
        p = n(a(522)),
        h = n(a(519)),
        g = n(a(203)),
        v = a(213);
    class _ extends d.default.PureComponent {
        constructor(...e) {
            super(...e), (0, r.default)(this, "state", {
                areaData: "",
                isShow: !0
            })
        }
        componentDidMount() {
            var e = this;
            return (0, l.default)(function*() {
                const t = e.props.listLeft;
                if (t) try {
                    const a = yield(0, v.getNewsDataList)(t);
                    e.setState({
                        areaData: a,
                        isShow: !1
                    })
                } catch (e) {}
            })()
        }
        render() {
            const e = this.state,
                t = e.areaData,
                a = e.isShow,
                n = this.props,
                l = n.content,
                r = l.hbNewsSiderContent,
                o = l.hbNewsSiderAd,
                f = l.ipadAd3,
                v = n.listLeft;
            return d.default.createElement("div", {
                id: "homeSiderList",
                className: i.default.sider_box
            }, d.default.createElement("div", {
                className: i.default.sider
            }, "string" == typeof t && "" !== t ? d.default.createElement(s.default, {
                id: v,
                type: "static",
                title: "地方站房产左侧栏",
                groupName: "家居文化要闻区左侧栏",
                content: t,
                position: "relative"
            }, d.default.createElement(m.default, null)) : "", a ? d.default.createElement(s.default, {
                id: "50094",
                type: "struct",
                title: "房产左侧栏",
                groupName: "家居文化要闻区左侧栏",
                content: r,
                position: "relative"
            }, d.default.createElement(p.default, null)) : ""), d.default.createElement(h.default, null), d.default.createElement(u.default, null, o ? d.default.createElement(c.default, {
                content: o
            }) : d.default.createElement(s.default, {
                id: "40105",
                type: "static",
                title: "广告4",
                groupName: "家居文化要闻区左侧栏",
                content: f
            }, d.default.createElement(g.default, null))))
        }
    }(0, r.default)(_, "propTypes", {
        content: o.default.object,
        listLeft: o.default.string
    });
    var y = (0, f.default)(_);
    t.default = y
}, , function(e, t, a) {
    e.exports = {
        box: "box-1E9yCbxA clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(530)),
        o = a(8),
        i = n(a(4)),
        s = n(a(528)),
        c = n(a(516));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.houseAreaMap,
                a = e.hbNewsSiderData,
                n = e.hbNewsData;
            let l = null,
                d = {};
            if ("undefined" != typeof document) {
                l = o.cookie.get("city") && "" !== o.cookie.get("city") && "010" !== o.cookie.get("city") ? o.cookie.get("city") : null;
                for (const e of t) e.city === l && (d = e)
            }
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement(s.default, {
                content: a,
                listLeft: d.listLeft
            }), r.default.createElement(c.default, {
                content: n,
                listOne: d.listOne,
                listTwo: d.listTwo,
                isGZ: "020" === l
            }))
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        food_box: "food_box-3JjxF1pE"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(533)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(144)),
        m = n(a(35));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.foodTopic,
                a = e.foodTitle,
                n = e.foodList0,
                l = e.foodList1;
            return r.default.createElement("div", {
                id: "foodNewsList",
                className: u.default.food_box
            }, r.default.createElement(o.default, {
                id: "50073",
                type: "struct",
                title: "美食栏标题",
                groupName: "美食栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75082",
                type: "recommend",
                title: "美食栏头条",
                groupName: "美食栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75083",
                type: "recommend",
                title: "美食栏新闻列表1",
                groupName: "美食栏",
                content: n,
                translate: "handleVideoContentData",
                translateOptions: {
                    index: 0
                }
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75084",
                type: "recommend",
                title: "财经梧桐汇新闻列表",
                groupName: "美食栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, {
                hasTitle: !0,
                isList: !0
            })))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        pit_box: "pit_box-3TM6v2Fa"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(536)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(144)),
        m = n(a(35));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.pitTopic,
                a = e.pitTitle0,
                n = e.pitTitle1,
                l = e.pitList0,
                d = e.pitList1,
                i = e.pitList2;
            return r.default.createElement("div", {
                id: "pitNewsList",
                className: u.default.pit_box
            }, r.default.createElement(o.default, {
                id: "50072",
                type: "struct",
                title: "智库栏标题",
                groupName: "智库栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75077",
                type: "recommend",
                title: "智库栏头条",
                groupName: "智库栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75078",
                type: "recommend",
                title: "智库栏新闻列表",
                groupName: "智库栏",
                content: l,
                translate: "handleVideoContentData",
                translateOptions: {
                    index: 0
                }
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75079",
                type: "recommend",
                title: "互娱有声书头条",
                groupName: "智库栏",
                content: n,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, {
                hasTitle: !0,
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75080",
                type: "recommend",
                title: "互娱有声书新闻列表",
                groupName: "智库栏",
                content: d,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75081",
                type: "recommend",
                title: "互娱有声书新闻列表",
                groupName: "智库栏",
                content: i,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, {
                isList: !0
            })))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        box: "box-2jmjvXlB",
        ad: "ad-15lVKiCo"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(539)),
        o = n(a(10)),
        i = n(a(4)),
        s = n(a(537)),
        c = n(a(534));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.pitData,
                a = e.foodData,
                n = e.pitAndFoodAd;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement("div", {
                className: "clearfix"
            }, r.default.createElement(s.default, {
                content: t
            }), r.default.createElement(c.default, {
                content: a
            })), n ? r.default.createElement(o.default, {
                content: n,
                styleName: u.default.ad
            }) : "")
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        sider_box: "sider_box-1eM8VHV_",
        sider: "sider-23B0EWrV",
        ipad_sider: "ipad_sider-fyacVNCn"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(542)),
        o = n(a(6)),
        i = n(a(10)),
        s = n(a(4)),
        c = n(a(203));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.pfNewsSiderAd,
                a = e.ipadAd2;
            return r.default.createElement("div", {
                className: u.default.sider_box
            }, t ? r.default.createElement(i.default, {
                content: t,
                styleName: u.default.sider
            }) : r.default.createElement("div", {
                className: u.default.ipad_sider
            }, r.default.createElement(o.default, {
                id: "40104",
                type: "static",
                title: "广告3",
                groupName: "智库美食要闻区左侧栏",
                content: a
            }, r.default.createElement(c.default, null))))
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, s.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        box: "box-1pTRTd5_ clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(545)),
        i = n(a(4)),
        s = n(a(543)),
        c = n(a(540));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.pfNewsSiderData,
                a = e.pfNewsData;
            return r.default.createElement("div", {
                className: o.default.box
            }, r.default.createElement(d.default, null, r.default.createElement(s.default, {
                content: t
            })), r.default.createElement(c.default, {
                content: a
            }))
        }
    }(0, l.default)(f, "propTypes", {
        content: u.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        game_box: "game_box-3_yMT4uc"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(548)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(144)),
        m = n(a(35));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.gameTopic,
                a = e.gameTitle,
                n = e.gameList0,
                l = e.gameList1,
                d = e.gameList2;
            return r.default.createElement("div", {
                id: "gameNewsList",
                className: u.default.game_box
            }, r.default.createElement(o.default, {
                id: "50070",
                type: "struct",
                title: "游戏栏标题",
                groupName: "游戏栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75073",
                type: "recommend",
                title: "游戏栏头条",
                groupName: "游戏栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75074",
                type: "recommend",
                title: "游戏栏新闻列表1",
                groupName: "游戏栏",
                content: n,
                translate: "handleVideoContentData",
                translateOptions: {
                    index: 0
                }
            }, r.default.createElement(f.default, {
                hasEnd: !0
            })), r.default.createElement(o.default, {
                id: "75075",
                type: "recommend",
                title: "游戏栏新闻列表2",
                groupName: "游戏栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, {
                hasTitle: !0,
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75076",
                type: "recommend",
                title: "游戏栏新闻列表3",
                groupName: "游戏栏",
                content: d,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, {
                isList: !0
            })))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        history_box: "history_box-OFqkECes"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(551)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(35));
    n(a(208));
    class m extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.historyTopic,
                a = e.historyTitle,
                n = e.historyList0,
                l = e.historyList1;
            return r.default.createElement("div", {
                id: "historyNewsList",
                className: u.default.history_box
            }, r.default.createElement(o.default, {
                id: "50071",
                type: "struct",
                title: "军事历史栏标题",
                groupName: "军事历史栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75069",
                type: "recommend",
                title: "军事历史栏头条",
                groupName: "军事历史栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75071",
                type: "recommend",
                title: "军事历史栏新闻列表1",
                groupName: "军事历史栏",
                content: n,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75072",
                type: "recommend",
                title: "军事历史栏新闻列表2",
                groupName: "军事历史栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                hasTitle: !0,
                isList: !0
            })))
        }
    }(0, l.default)(m, "propTypes", {
        content: d.default.object
    });
    var p = (0, i.default)(m);
    t.default = p
}, , function(e, t, a) {
    e.exports = {
        box: "box-3bhTcEVS"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(554)),
        o = n(a(4)),
        i = n(a(552)),
        s = n(a(549));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.historyData,
                a = e.gameData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        tab_content: "tab_content-1oA6sbgL",
        content: "content-3HCGiTSh"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(557)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.tab_content
            }, r.default.createElement("div", {
                className: u.default.content
            }, r.default.createElement("a", {
                href: e[0].url,
                target: "_blank",
                rel: i.rel
            }, r.default.createElement("img", {
                src: e[0].src,
                alt: e[0].title,
                title: e[0].title
            }))), r.default.createElement("ul", null, e.slice(1).map((e, t) => r.default.createElement("li", {
                key: t
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title)))))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        tabBodyItemActive: "tabBodyItemActive-2-fk2TaV",
        tabBodyItem: "tabBodyItem-2X8IRw01"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(560)),
        o = n(a(4));
    class i extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                isReady: this.props.active
            }), (0, l.default)(this, "container", r.default.createRef())
        }
        static getDerivedStateFromProps(e, t) {
            return t.isReady || !e.active ? t : {
                isReady: e.active
            }
        }
        render() {
            const e = this.props,
                t = e.active,
                a = e.children;
            return this.state.isReady ? r.default.createElement("div", {
                className: t ? u.default.tabBodyItemActive : u.default.tabBodyItem
            }, r.default.Children.map(a, e => r.default.cloneElement(e))) : null
        }
    }(0, l.default)(i, "propTypes", {
        active: d.default.bool,
        children: d.default.any
    });
    var s = (0, o.default)(i);
    t.default = s
}, , function(e, t, a) {
    e.exports = {
        tabHead: "tabHead-3WCDrHgl clearfix",
        tabHeadItem: "tabHeadItem-3Jyjv1RI",
        current: "current-2Tk3ZwbH"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(563)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                current: 0
            }), (0, l.default)(this, "handleMouseOver", e => {
                const t = Number(e.currentTarget.getAttribute("index"));
                t !== this.state.current && this.setState({
                    current: t
                })
            }), (0, l.default)(this, "renderTabHead", () => {
                const e = this.state.current;
                return r.default.createElement("div", {
                    className: u.default.tabHead
                }, r.default.Children.map(this.props.children, (t, a) => r.default.createElement("div", {
                    className: `${u.default.tabHeadItem} ${a===e?u.default.current:""}`,
                    key: a,
                    index: a,
                    onMouseOver: this.handleMouseOver
                }, r.default.createElement("a", {
                    href: t.props.url,
                    target: "_blank",
                    rel: i.rel
                }, t.props.title))))
            })
        }
        renderBody() {
            return r.default.createElement("div", {
                className: u.default.tabBody
            }, r.default.Children.map(this.props.children, (e, t) => r.default.cloneElement(e, {
                active: this.state.current === t
            })))
        }
        render() {
            return r.default.createElement("div", {
                id: "tabs"
            }, this.renderTabHead(), this.renderBody())
        }
    }(0, l.default)(s, "propTypes", {
        children: d.default.any
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        tabs: "tabs-3vTRwRoC"
    }
}, , function(e, t, a) {
    e.exports = {
        sider_box: "sider_box-1eKNdVgQ",
        sider: "sider-2DsdK3Zd",
        stock_box: "stock_box-WKzq0FfW clearfix",
        sider_list: "sider_list-3R4HQ9jM"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(568)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(192)),
        c = n(a(120)),
        f = n(a(273));
    class m extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.hgNewsSiderTitle,
                a = e.hgNewsSiderContent,
                n = e.hgNewsSiderTabs;
            return r.default.createElement("div", {
                id: "wutonghuiSiderList",
                className: u.default.sider_box
            }, r.default.createElement("div", {
                className: u.default.sider
            }, r.default.createElement(o.default, {
                id: "50069",
                type: "struct",
                title: "财经梧桐汇标题",
                groupName: "军事历史要闻区左侧栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75070",
                type: "recommend",
                title: "财经列表",
                groupName: "军事历史要闻区左侧栏",
                content: a,
                translate: "handleNewsSiderContentData",
                translateOptions: {
                    index: 0
                }
            }, r.default.createElement(c.default, {
                hasTopic: !0
            }))), r.default.createElement(o.default, {
                id: "50099",
                type: "struct",
                title: "娱乐标签",
                groupName: "军事历史要闻区左侧栏",
                content: n
            }, r.default.createElement(f.default, null)))
        }
    }(0, l.default)(m, "propTypes", {
        content: d.default.object
    });
    var p = (0, i.default)(m);
    t.default = p
}, , function(e, t, a) {
    e.exports = {
        box: "box-zX3kN04_ clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(571)),
        o = n(a(4)),
        i = n(a(569)),
        s = n(a(555));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.hgNewsSiderData,
                a = e.hgNewsData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        news_box: "news_box-2tVwbQ7r clearfix",
        box: "box-19XkIEpF",
        box_l: "box_l-3ZDeWmZm",
        box_r: "box_r-31kE_Iy9",
        btn: "btn-3rPbbip1",
        txt_bg: "txt_bg-38vuscdT",
        txt: "txt-2vuKQEmE"
    }
}, , function(e, t, a) {
    e.exports = {
        ent_box: "ent_box-3izDCY_3",
        hide: "hide-2AnmZ1-g"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(576)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(35)),
        m = n(a(227));
    class p extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                current: "0"
            }), (0, l.default)(this, "handleMouseOver", e => {
                const t = e.currentTarget.attributes["data-index"].value;
                this.setState({
                    current: t
                })
            })
        }
        render() {
            const e = this.state.current,
                t = this.props.content,
                a = t.entTopic,
                n = t.entTitle,
                l = t.entList,
                d = t.entVideoList,
                i = t.entListAd,
                p = t.entBoxData,
                h = t.entVideoBoxData;
            return r.default.createElement("div", {
                id: "entNewsList",
                className: u.default.ent_box
            }, r.default.createElement(o.default, {
                id: "50087",
                type: "struct",
                title: "娱乐栏标题",
                groupName: "娱乐栏",
                content: a
            }, r.default.createElement(s.default, {
                handleMouseOver: this.handleMouseOver
            })), r.default.createElement(o.default, {
                id: "75058",
                type: "recommend",
                title: "娱乐栏头条",
                groupName: "娱乐栏",
                content: n,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement("div", {
                className: `${"0"===e?"":u.default.hide}`
            }, r.default.createElement(o.default, {
                id: "75059",
                type: "recommend",
                title: "娱乐栏娱乐新闻列表",
                groupName: "娱乐栏",
                content: l,
                translate: "handleNewsContentData",
                position: "relative"
            }, r.default.createElement(f.default, {
                isList: !0,
                ad: i
            }))), r.default.createElement("div", {
                className: `${"0"===e?u.default.hide:""}`
            }, r.default.createElement(o.default, {
                id: "75140",
                type: "recommend",
                title: "娱乐栏视频新闻列表",
                groupName: "娱乐栏",
                content: d,
                translate: "handleNewsContentData",
                position: "relative"
            }, r.default.createElement(f.default, {
                isList: !0
            }))), r.default.createElement("div", {
                className: `${"0"===e?"":u.default.hide}`
            }, r.default.createElement(o.default, {
                id: "75060",
                type: "recommend",
                title: "娱乐栏娱乐新闻图片盒",
                groupName: "娱乐栏",
                content: p,
                translate: "handleNewsContentData",
                position: "relative"
            }, r.default.createElement(m.default, null))), r.default.createElement("div", {
                className: `${"0"===e?u.default.hide:""}`
            }, r.default.createElement(o.default, {
                id: "75141",
                type: "recommend",
                title: "娱乐栏视频盒",
                groupName: "娱乐栏",
                content: h,
                translate: "handleNewsContentData",
                position: "relative"
            }, r.default.createElement(m.default, null))))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getAutoAreaData = void 0;
    var l = n(a(7)),
        r = a(8);
    const d = new Array(["010", "北京市", "beijing", "bj", "11"], ["021", "上海市", "shanghai", "sh", "31"], ["022", "天津市", "tianjin", "tj", "12"], ["023", "重庆市", "chongqing", "cq", "50"], ["0311", "河北省", "hebei", "hb", "1300"], ["0351", "山西省", "shanxi", "sx", "1400"], ["0471", "内蒙古自治区", "neimenggu", "nmg", "1500"], ["024", "辽宁省", "liaoning", "ln", "2100"], ["0431", "吉林省", "jilin", "jl", "2200"], ["0451", "黑龙江省", "heilongjiang", "hlj", "2300"], ["025", "江苏省", "jiangsu", "js", "3200"], ["0571", "浙江省", "zhejiang", "zj", "3300"], ["0551", "安徽省", "anhui", "ah", "3400"], ["0591", "福建省", "fujian", "fj", "3500"], ["0791", "江西省", "jiangxi", "jx", "3600"], ["0531", "山东省", "shandong", "sd", "3700"], ["0371", "河南省", "henan", "hn", "4100"], ["027", "湖北省", "hubei", "hb", "4200"], ["0731", "湖南省", "hunan", "hn", "4300"], ["020", "广东省", "guangdong", "gd", "4400"], ["0771", "广西壮族自治区", "guangxi", "gx", "4500"], ["0898", "海南省", "hainan", "hn", "4600"], ["028", "四川省", "sichuan", "sc", "5100"], ["0851", "贵州省", "guizhou", "gz", "5200"], ["0871", "云南省", "yunnan", "yn", "5300"], ["0891", "西藏自治区", "xizang", "xz", "5400"], ["029", "陕西省", "shanxi", "sx", "6100"], ["0931", "甘肃省", "gansu", "gs", "6200"], ["0951", "宁夏回族自治区", "ningxia", "nx", "6400"], ["0971", "青海省", "qinghai", "qh", "6300"], ["0991", "新疆维吾尔自治区", "xinjiang", "xj", "6500"], ["0311", "石家庄市", "shijiazhuang", "hb_sjz", "1301"], ["0315", "唐山市", "tangshan", "hb_ts", "1302"], ["0335", "秦皇岛", "qinhuangdao", "hb_qhd", "1303"], ["0310", "邯郸市", "handan", "hb_hd", "1304"], ["0319", "邢台市", "xingtai", "hb_xta", "1305"], ["0312", "保定市", "baoding", "hb_bd", "1306"], ["0313", "张家口", "zhangjiakou", "hb_zjk", "1307"], ["0314", "承德市", "chengde", "hb_cd", "1308"], ["0317", "沧州市", "cangzhou", "hb_cz", "1309"], ["0316", "廊坊市", "langfang", "hb_lf", "1310"], ["0318", "衡水市", "hengshui", "hb_hs", "1311"], ["0351", "太原市", "taiyuan", "sx_ty", "1401"], ["0352", "大同市", "datong", "sx_dt", "1402"], ["0353", "阳泉市", "yangquan", "sx_yq", "1403"], ["0355", "长治市", "changzhi", "sx_cz", "1404"], ["0356", "晋城市", "jincheng", "sx_jc", "1405"], ["0349", "朔州市", "shuozhou", "sx_sz", "1406"], ["0354", "晋中市", "jinzhong", "sx_jz", "1407"], ["0359", "运城市", "yuncheng", "sx_yc", "1408"], ["0350", "忻州市", "xinzhou", "sx_xz", "1409"], ["0357", "临汾市", "linfen", "sx_lf", "1410"], ["0358", "吕梁市", "lvliang", "sx_ll", "1411"], ["0471", "呼和浩特", "huhehaote", "nmg_hhht", "1501"], ["0472", "包头市", "baotou", "nmg_bt", "1502"], ["0473", "乌海市", "wuhai", "nmg_wh", "1503"], ["0476", "赤峰市", "chifeng", "nmg_cf", "1504"], ["0475", "通辽市", "tongliao", "nmg_tl", "1505"], ["0470", "呼伦贝尔", "hulunbeier", "nmg_hlbe", "1507"], ["0477", "鄂尔多斯市", "eerduosi", "nmg_eeds", "1506"], ["0478", "巴彦淖尔市", "bayannaoer", "nmg_byze", "1508"], ["0474", "乌兰察布市", "wulanchabu", "nmg_wlcb", "1509"], ["0313", "兴安盟", "xinganmeng", "nmg_xa", "1522"], ["0479", "锡林郭勒盟", "xilinguole", "nmg_xlgl", "1525"], ["024", "沈阳市", "shenyang", "ln_sy", "2101"], ["0411", "大连市", "dalian", "ln_dl", "2102"], ["0412", "鞍山市", "anshan", "ln_as", "2103"], ["0413", "抚顺市", "fushun", "ln_fs", "2104"], ["0414", "本溪市", "benxi", "ln_bx", "2105"], ["0415", "丹东市", "dandong", "ln_dd", "2106"], ["0416", "锦州市", "jinzhou", "ln_jz", "2107"], ["0417", "营口市", "yingkou", "ln_yk", "2108"], ["0418", "阜新市", "fuxin", "ln_fx", "2109"], ["0419", "辽阳市", "liaoyang", "ln_ly", "2110"], ["0427", "盘锦市", "panjin", "ln_pj", "2111"], ["0410", "铁岭市", "tieling", "ln_tl", "2112"], ["0421", "朝阳市", "chaoyang", "ln_cy", "2113"], ["0429", "葫芦岛市", "huludao", "ln_hld", "2114"], ["0431", "长春市", "changchun", "jl_cc", "2201"], ["0432", "吉林市", "jilin", "jl_jl", "2202"], ["0434", "四平市", "siping", "jl_sp", "2203"], ["0437", "辽源市", "liaoyuan", "jl_ly", "2204"], ["0435", "通化市", "tonghua", "jl_th", "2205"], ["0439", "白山市", "baishan", "jl_bs", "2206"], ["0438", "松原市", "songyuan", "jl_sy", "2207"], ["0436", "白城市", "baicheng", "jl_bc", "2208"], ["0433", "延边朝鲜族", "yanbian", "jl_yb", "2224"], ["0451", "哈尔滨市", "haerbin", "hlj_heb", "2301"], ["0452", "齐齐哈尔市", "qiqihaer", "hlj_qqhe", "2302"], ["0467", "鸡西市", "jixi", "hlj_jx", "2303"], ["0468", "鹤岗市", "hegang", "hlj_hg", "2304"], ["0469", "双鸭山市", "shuangyashan", "hlj_sys", "2305"], ["0459", "大庆市", "daqing", "hlj_dq", "2306"], ["0458", "伊春市", "yichun", "hlj_yc", "2307"], ["0454", "佳木斯市", "jiamusi", "hlj_jms", "2308"], ["0464", "七台河市", "qitaihe", "hlj_qth", "2309"], ["0453", "牡丹江市", "mudanjiang", "hlj_mdj", "2310"], ["0456", "黑河市", "heihe", "hlj_hh", "2311"], ["0455", "绥化市", "suihua", "hlj_sh", "2312"], ["0457", "大兴安岭", "daxinganling", "hlj_dxal", "2327"], ["025", "南京市", "nanjing", "js_nj", "3201"], ["0510", "无锡市", "wuxi", "js_wx", "3202"], ["0516", "徐州市", "xuzhou", "js_xz", "3203"], ["0519", "常州市", "changzhou", "js_cz", "3204"], ["0512", "苏州市", "suzhou", "js_sz", "3205"], ["0513", "南通市", "nantong", "js_nt", "3206"], ["0518", "连云港市", "lianyungang", "js_lyg", "3207"], ["0517", "淮安市", "huaian", "js_ha", "3208"], ["0515", "盐城市", "yancheng", "js_yc", "3209"], ["0514", "扬州市", "yangzhou", "js_yz", "3210"], ["0511", "镇江市", "zhenjiang", "js_zj", "3211"], ["0523", "泰州市", "taizhou", "js_tz", "3212"], ["0527", "宿迁市", "suqian", "js_sq", "3213"], ["0571", "杭州市", "hangzhou", "zj_hz", "3301"], ["0574", "宁波市", "ningbo", "zj_nb", "3302"], ["0577", "温州市", "wenzhou", "zj_wz", "3303"], ["0573", "嘉兴市", "jiaxing", "zj_jx", "3304"], ["0572", "湖州市", "huzhou", "zj_hzh", "3305"], ["0575", "绍兴市", "shaoxing", "zj_sx", "3306"], ["0579", "金华市", "jinhua", "zj_jh", "3307"], ["0570", "衢州市", "quzhou", "zj_qz", "3308"], ["0580", "舟山市", "zhoushan", "zj_zs", "3309"], ["0576", "台州市", "tzhou", "zj_tz", "3310"], ["0578", "丽水市", "lishui", "zj_ls", "3311"], ["0551", "合肥市", "hefei", "ah_hf", "3401"], ["0553", "芜湖市", "wuhu", "ah_wh", "3402"], ["0552", "蚌埠市", "bengbu", "ah_bb", "3403"], ["0554", "淮南市", "huainan", "ah_hn", "3404"], ["0555", "马鞍山市", "maanshan", "ah_mas", "3405"], ["0561", "淮北市", "huaibei", "ah_hb", "3406"], ["0562", "铜陵市", "tongling", "ah_tl", "3407"], ["0556", "安庆市", "anqing", "ah_aq", "3408"], ["0559", "黄山市", "huangshan", "ah_hs", "3410"], ["0550", "滁州市", "chuzhou", "ah_cz", "3411"], ["0558", "阜阳市", "fuyang", "ah_fy", "3412"], ["0557", "宿州市", "suzhou", "ah_sz", "3413"], ["0565", "巢湖市", "chaohu", "ah_ch", "3414"], ["0564", "六安市", "luan", "ah_la", "3415"], ["0558", "亳州市", "bozhou", "ah_bz", "3416"], ["0566", "池州市", "chizhou", "ah_cz", "3417"], ["0563", "宣城市", "xuancheng", "ah_xc", "3418"], ["0591", "福州市", "fuzhou", "fj_fz", "3501"], ["0592", "厦门市", "xiamen", "fj_xm", "3502"], ["0594", "莆田市", "putian", "fj_pt", "3503"], ["0598", "三明市", "sanming", "fj_sm", "3504"], ["0595", "泉州市", "quanzhou", "fj_qz", "3505"], ["0596", "漳州市", "zhangzhou", "fj_zz", "3506"], ["0599", "南平市", "nanping", "fj_np", "3507"], ["0597", "龙岩市", "longyan", "fj_ly", "3508"], ["0593", "宁德市", "ningde", "fj_nd", "3509"], ["0313", "南昌市", "nanchang", "jx_nc", "3601"], ["0798", "景德镇市", "jingdezhen", "jx_jdz", "3602"], ["0799", "萍乡市", "pingxiang", "jx_px", "3603"], ["0792", "九江市", "jiujiang", "jx_jj", "3604"], ["0790", "新余市", "xinyu", "jx_xy", "3605"], ["0701", "鹰潭市", "yingtan", "jx_yt", "3606"], ["0797", "赣州市", "ganzhou", "jx_gz", "3607"], ["0796", "吉安市", "jian", "jx_ja", "3608"], ["0795", "宜春市", "yichun", "jx_yc", "3609"], ["0794", "抚州市", "fuzhou", "jx_fz", "3610"], ["0793", "上饶市", "shangrao", "jx_sr", "3611"], ["0531", "济南市", "jinan", "sd_jn", "3701"], ["0532", "青岛市", "qingdao", "sd_qd", "3702"], ["0533", "淄博市", "zibo", "sd_zb", "3703"], ["0632", "枣庄市", "zaozhuang", "sd_zz", "3704"], ["0546", "东营市", "dongying", "sd_dy", "3705"], ["0535", "烟台市", "yantai", "sd_yt", "3706"], ["0536", "潍坊市", "weifang", "sd_wf", "3707"], ["0537", "济宁市", "jining", "sd_jni", "3708"], ["0538", "泰安市", "taian", "sd_ta", "3709"], ["0631", "威海市", "weihai", "sd_wh", "3710"], ["0633", "日照市", "rizhao", "sd_rz", "3711"], ["0634", "莱芜市", "laiwu", "sd_lw", "3712"], ["0539", "临沂市", "linyi", "sd_ly", "3713"], ["0534", "德州市", "dezhou", "sd_dz", "3714"], ["0635", "聊城市", "liaocheng", "sd_lc", "3715"], ["0543", "滨州市", "binzhou", "sd_bz", "3716"], ["0530", "荷泽市", "heze", "sd_hz", "3717"], ["0371", "郑州市", "zhengzhou", "hn_zzh", "4101"], ["0378", "开封市", "kaifeng", "hn_kf", "4102"], ["0379", "洛阳市", "luoyang", "hn_ly", "4103"], ["0375", "平顶山市", "pingdingshan", "hn_pts", "4104"], ["0372", "安阳市", "anyang", "hn_ay", "4105"], ["0392", "鹤壁市", "hebi", "hn_hb", "4106"], ["0373", "新乡市", "xinxiang", "hn_xx", "4107"], ["0391", "焦作市", "jiaozuo", "hn_jz", "4108"], ["0393", "濮阳市", "puyang", "hn_py", "4109"], ["0374", "许昌市", "xuchang", "hn_xc", "4110"], ["0395", "漯河市", "luohe", "hn_lh", "4111"], ["0398", "三门峡市", "sanmenxia", "hn_smx", "4112"], ["0377", "南阳市", "nanyang", "hn_ny", "4113"], ["0370", "商丘市", "shangqiu", "hn_sq", "4114"], ["0376", "信阳市", "xinyang", "hn_xy", "4115"], ["0394", "周口市", "zhoukou", "hn_zk", "4116"], ["0396", "驻马店市", "zhumadian", "hn_zmd", "4117"], ["0391", "济源市", "jiyuan", "hn_jy", "410881"], ["027", "武汉市", "wuhan", "hb_wh", "4201"], ["0714", "黄石市", "huangshi", "hb_hs", "4202"], ["0719", "十堰市", "shiyan", "hb_sy", "4203"], ["0717", "宜昌市", "yichang", "hb_yc", "4205"], ["0710", "襄阳市", "xiangyang", "hb_xf", "4206"], ["0711", "鄂州市", "ezhou", "hb_ez", "4207"], ["0724", "荆门市", "jingmen", "hb_jm", "4208"], ["0712", "孝感市", "xiaogan", "hb_xg", "4209"], ["0716", "荆州市", "jingzhou", "hb_jz", "4210"], ["0713", "黄冈市", "huanggang", "hb_hg", "4211"], ["0715", "咸宁市", "xianning", "hb_xn", "4212"], ["0722", "随州市", "suizhou", "hb_sz", "4213"], ["0718", "恩施土家族苗族", "enshi", "hb_es", "4228"], ["0728", "仙桃市", "xiantao", "hb_xt", "429004"], ["0728", "潜江市", "qianjiang", "hb_qj", "429005"], ["0728", "天门市", "tianmen", "hb_tm", "429006"], ["0719", "神农架林区", "shennongjia", "hb_snj", "429021"], ["0731", "株洲市", "zhuzhou", "hn_zz", "4302"], ["0731", "湘潭市", "xiangtan", "hn_xt", "4303"], ["0731", "长沙市", "changsha", "hn_cs", "4301"], ["0734", "衡阳市", "hengyang", "hn_hy", "4304"], ["0739", "邵阳市", "shaoyang", "hn_sya", "4305"], ["0730", "岳阳市", "yueyang", "hn_yy", "4306"], ["0736", "常德市", "changde", "hn_cd", "4307"], ["0744", "张家界市", "zhangjiajie", "hn_zjj", "4308"], ["0737", "益阳市", "yiyang", "hn_yy", "4309"], ["0735", "郴州市", "chenzhou", "hn_cz", "4310"], ["0746", "永州市", "yongzhou", "hn_yz", "4311"], ["0745", "怀化市", "huaihua", "hn_hh", "4312"], ["0738", "娄底市", "loudi", "hn_ldi", "4313"], ["0743", "湘西土家族苗族", "xiangxi", "hn_xx", "4331"], ["020", "广州市", "guangzhou", "gd_gz", "4401"], ["0751", "韶关市", "shaoguan", "gd_sg", "4402"], ["0755", "深圳市", "shenzhen", "gd_sz", "4403"], ["0756", "珠海市", "zhuhai", "gd_zh", "4404"], ["0754", "汕头市", "shantou", "gd_st", "4405"], ["0757", "佛山市", "foshan", "gd_fs", "4406"], ["0750", "江门市", "jiangmen", "gd_jm", "4407"], ["0759", "湛江市", "zhanjiang", "gd_zj", "4408"], ["0668", "茂名市", "maoming", "gd_mm", "4409"], ["0758", "肇庆市", "zhaoqing", "gd_zq", "4412"], ["0752", "惠州市", "huizhou", "gd_hz", "4413"], ["0753", "梅州市", "meizhou", "gd_mz", "4414"], ["0660", "汕尾市", "shanwei", "gd_sw", "4415"], ["0762", "河源市", "heyuan", "gd_hy", "4416"], ["0662", "阳江市", "yangjiang", "gd_yj", "4417"], ["0763", "清远市", "qingyuan", "gd_qy", "4418"], ["0769", "东莞市", "dongguan", "gd_d", "4419"], ["0760", "中山市", "zhongshan", "gd_zs", "4420"], ["0768", "潮州市", "chaozhou", "gd_sz", "4451"], ["0663", "揭阳市", "jieyang", "gd_jy", "4452"], ["0766", "云浮市", "yunfu", "gd_yf", "4453"], ["0771", "南宁市", "nanning", "gx_nn", "4501"], ["0772", "柳州市", "liuzhou", "gx_lz", "4502"], ["0773", "桂林市", "guilin", "gx_gl", "4503"], ["0774", "梧州市", "wuzhou", "gx_wz", "4504"], ["0779", "北海市", "beihai", "gx_bh", "4505"], ["0770", "防城港市", "fangchenggang", "gx_fcg", "4506"], ["0777", "钦州市", "qinzhou", "gx_qz", "4507"], ["0775", "贵港市", "guigang", "gx_gg", "4508"], ["0775", "玉林市", "yulin", "gx_yl", "4509"], ["0776", "百色市", "baise", "gx_bs", "4510"], ["0774", "贺州市", "hezhou", "gx_hz", "4511"], ["0778", "河池市", "hechi", "gx_hc", "4512"], ["0772", "来宾市", "laibin", "gx_lb", "4513"], ["0771", "崇左市", "chongzuo", "gx_cz", "4514"], ["0898", "海口市", "haikou", "hn_hk", "4601"], ["0898", "三亚市", "sanya", "hn_sy", "4602"], ["028", "成都市", "chengdu", "sc_cd", "5101"], ["0813", "自贡市", "zigong", "sc_zg", "5103"], ["0812", "攀枝花市", "panzhihua", "sc_pzh", "5104"], ["0830", "泸州市", "luzhou", "sc_lz", "5105"], ["0838", "德阳市", "deyang", "sc_dy", "5106"], ["0816", "绵阳市", "mianyang", "sc_my", "5107"], ["0839", "广元市", "guangyuan", "sc_gy", "5108"], ["0825", "遂宁市", "suining", "sc_sn", "5109"], ["0832", "内江市", "neijiang", "sc_nj", "5110"], ["0833", "乐山市", "leshan", "sc_ls", "5111"], ["0817", "南充市", "nanchong", "sc_nc", "5113"], ["028", "眉山市", "meishan", "sc_ms", "5114"], ["0831", "宜宾市", "yibin", "sc_yb", "5115"], ["0826", "广安市", "guangan", "sc_ga", "5116"], ["0818", "达州市", "dazhou", "sc_dz", "5117"], ["0835", "雅安市", "yaan", "sc_ya", "5118"], ["0827", "巴中市", "bazhong", "sc_bz", "5119"], ["028", "资阳市", "ziyang", "sc_zy", "5120"], ["0837", "阿坝藏族", "aba", "sc_ab", "5132"], ["0836", "甘孜藏族", "ganzi", "sc_gz", "5133"], ["0834", "凉山彝族", "liangshan", "sc_ls", "5134"], ["0851", "贵阳市", "guiyang", "gz_gy", "5201"], ["0858", "六盘水市", "liupanshui", "gz_lps", "5202"], ["0852", "遵义市", "zunyi", "gz_zy", "5203"], ["0853", "安顺市", "anshun", "gz_as", "5204"], ["0856", "铜仁", "tongren", "gz_tr", "5222"], ["0859", "黔西南布依族苗族", "qianxinan", "gz_qxn", "5223"], ["0857", "毕节区", "bijiequ", "gz_bj", "5224"], ["0855", "黔东南苗族侗族", "qiandongnan", "gz_qdn", "5226"], ["0854", "黔南布依族苗族", "qiannan", "gz_qn", "5227"], ["0871", "昆明市", "kunming", "yn_km", "5301"], ["0874", "曲靖市", "qujing", "yn_qj", "5303"], ["0877", "玉溪市", "yuxi", "yn_yx", "5304"], ["0875", "保山市", "baoshan", "yn_bs", "5305"], ["0870", "昭通市", "zhaotong", "yn_zt", "5306"], ["0888", "丽江市", "lijiang", "yn_lj", "5307"], ["0879", "普洱市", "puer", "yn_pe", "5308"], ["0883", "临沧市", "lincang", "yn_lc", "5309"], ["0878", "楚雄彝族", "chuxiong", "yn_cx", "5323"], ["0873", "红河哈尼族彝族", "honghe", "yn_hh", "5325"], ["0876", "文山壮族苗族", "wenshan", "yn_ws", "5326"], ["0691", "西双版纳傣族", "xishuangbanna", "yn_xsbn", "5328"], ["0872", "大理白族", "dali", "yn_dl", "5329"], ["0692", "德宏傣族景颇族", "dehong", "yn_dh", "5331"], ["0886", "怒江傈僳族", "nujiang", "yn_nj", "5333"], ["0887", "迪庆藏族", "diqing", "yn_dq", "5334"], ["0891", "拉萨市", "lasa", "xz_ls", "5401"], ["0895", "昌都", "changdu", "xz_cd", "5421"], ["0893", "山南", "shannan", "xz_sn", "5422"], ["0892", "日喀则", "rikeze", "xz_rkz", "5423"], ["0896", "那曲地区", "naqu", "xz_nq", "5424"], ["0897", "阿里地区", "ali", "xz_al", "5425"], ["0894", "林芝地区", "linzhi", "xz_lz", "5426"], ["029", "西安市", "xian", "sx_xa", "6101"], ["0919", "铜川市", "tongchuan", "sx_tc", "6102"], ["0917", "宝鸡市", "baoji", "sx_bj", "6103"], ["029", "咸阳市", "xianyang", "sx_xy", "6104"], ["0913", "渭南市", "weinan", "sx_wn", "6105"], ["0911", "延安市", "yanan", "sx_ya", "6106"], ["0916", "汉中市", "hanzhong", "sx_hz", "6107"], ["0912", "榆林市", "yulin", "sx_yl", "6108"], ["0915", "安康市", "ankang", "sx_ak", "6109"], ["0914", "商洛市", "shangluo", "sx_sl", "6110"], ["0931", "兰州市", "lanzhou", "gs_lz", "6201"], ["0937", "嘉峪关市", "jiayuguan", "gs_jyg", "6202"], ["0935", "金昌市", "jinchang", "gs_jc", "6203"], ["0943", "白银市", "baiyin", "gs_by", "6204"], ["0938", "天水市", "tianshui", "gs_ts", "6205"], ["0935", "武威市", "wuwei", "gs_ww", "6206"], ["0936", "张掖市", "zhangye", "gs_zy", "6207"], ["0933", "平凉市", "pingliang", "gs_pl", "6208"], ["0937", "酒泉市", "jiuquan", "gs_jq", "6209"], ["0934", "庆阳市", "qingyang", "gs_qy", "6210"], ["0932", "定西市", "dingxi", "gs_dx", "6211"], ["0939", "陇南市", "longnan", "gs_ln", "6212"], ["0930", "临夏回族", "linxia", "gs_lx", "6229"], ["0941", "甘南藏族", "gannan", "gs_gn", "6230"], ["0972", "海东", "haidong", "qh_hd", "6321"], ["0970", "海北藏族", "haibei", "qh_hb", "6322"], ["0973", "黄南藏族", "huangnan", "qh_hn", "6323"], ["0974", "海南藏族", "hainan", "qh_hn", "6325"], ["0975", "果洛藏族", "guoluo", "qh_gl", "6326"], ["0976", "玉树藏族", "yushu", "qh_ys", "6327"], ["0979", "海西蒙古族藏族", "haixi", "qh_hx", "6328"], ["0951", "银川市", "yinchuan", "nx_yc", "6401"], ["0971", "西宁市", "xining", "qh_xn", "6301"], ["0952", "石嘴山市", "shizuishan", "nx_szs", "6402"], ["0953", "吴忠市", "wuzhong", "nx_wz", "6403"], ["0954", "固原市", "guyuan", "nx_gy", "6404"], ["0955", "中卫市", "zhongwei", "nx_zw", "6405"], ["0991", "乌鲁木齐市", "wulumuqi", "xj_wlmq", "6501"], ["0990", "克拉玛依市", "kelamayi", "xj_klmy", "6502"], ["0995", "吐鲁番地区", "tulufan", "xj_tlf", "6501"], ["0902", "哈密地区", "hami", "xj_hm", "6502"], ["0994", "昌吉回族", "changji", "xj_cj", "6503"], ["0909", "博尔塔拉", "boertala", "xj_betl", "6507"], ["0996", "巴音郭楞", "bayinguoleng", "xj_bygl", "6508"], ["0997", "阿克苏地区", "akesu", "xj_aks", "6509"], ["0908", "克孜勒苏柯尔克孜", "kezilesukeerkezi", "xj_kzlskekz", "6530"], ["0998", "喀什地区", "kashi", "xj_ks", "6531"], ["0903", "和田地区", "hetian", "xj_ht", "6532"], ["0999", "伊犁哈萨克", "yilihasake", "xj_ylhsk", "6540"], ["0901", "塔城地区", "tacheng", "xj_tc", "6542"], ["0906", "阿勒泰地区", "aletai", "xj_alt", "6543"], ["0993", "石河子市", "shihezi", "xj_shz", "659001"], ["0512", "昆山市", "kunshan", "js_ks", "320583"], ["0998", "图木舒克市", "tumushuke", "xj_tmsk", "659003"], ["0483", "阿拉善盟", "alashanmeng", "nmg_alsm", "1529"]),
        u = new Array(["010", "北京市", "beijing", "bj", "11"], ["021", "上海市", "shanghai", "sh", "31"], ["022", "天津市", "tianjin", "tj", "12"], ["0311", "石家庄市", "shijiazhuang", "hb_sjz", "1301"], ["0531", "济南市", "jinan", "sd_jn", "3701"], ["0539", "临沂市", "linyi", "sd_ly", "3713"], ["0537", "济宁市", "jining", "sd_jni", "3708"], ["0543", "滨州市", "binzhou", "sd_bz", "3716"], ["0431", "长春市", "changchun", "jl_cc", "2201"], ["0411", "大连市", "dalian", "ln_dl", "2102"], ["0451", "哈尔滨市", "haerbin", "hlj_heb", "2301"], ["0454", "佳木斯市", "jiamusi", "hlj_jms", "2308"], ["0453", "牡丹江市", "mudanjiang", "hlj_mdj", "2310"], ["025", "南京市", "nanjing", "js_nj", "3201"], ["0512", "苏州市", "suzhou", "js_sz", "3205"], ["0510", "无锡市", "wuxi", "js_wx", "3202"], ["0514", "扬州市", "yangzhou", "js_yz", "3210"], ["0519", "常州市", "changzhou", "js_cz", "3204"], ["0523", "泰州市", "taizhou", "js_tz", "3212"], ["0551", "合肥市", "hefei", "ah_hf", "3401"], ["0564", "六安市", "luan", "ah_la", "3415"], ["0371", "郑州市", "zhengzhou", "hn_zzh", "4101"], ["027", "武汉市", "wuhan", "hb_wh", "4201"], ["020", "广州市", "guangzhou", "gd_gz", "4401"], ["0760", "中山市", "zhongshan", "gd_zs", "4420"], ["0750", "江门市", "jiangmen", "gd_jm", "4407"], ["0871", "昆明市", "kunming", "yn_km", "5301"], ["0931", "兰州市", "lanzhou", "gs_lz", "6201"], ["029", "西安市", "xian", "sx_xa", "6101"], ["0991", "乌鲁木齐市", "wulumuqi", "xj_wlmq", "6501"], ["0769", "东莞市", "dongguan", "gd_d", "4419"], ["0313", "南昌市", "nanchang", "jx_nc", "3601"], ["0771", "南宁市", "nanning", "gx_nn", "4501"], ["0571", "杭州市", "hangzhou", "zj_hz", "3301"], ["0951", "银川市", "yinchuan", "nx_yc", "6401"], ["0523", "泰州市", "taizhou", "js_tz", "3212"], ["0519", "常州市", "changzhou", "js_cz", "3204"], ["0513", "南通市", "nantong", "js_nt", "3206"], ["0551", "合肥市", "hefei", "ah_hf", "3401"], ["0533", "淄博市", "zibo", "sd_zb", "3703"], ["0851", "贵阳市", "guiyang", "gz_gy", "5201"], ["0574", "宁波市", "ningbo", "zj_nb", "3302"], ["0575", "绍兴市", "shaoxing", "zj_sx", "3306"], ["0576", "台州市", "tzhou", "zj_tz", "3310"], ["0570", "衢州市", "quzhou", "zj_qz", "3308"], ["0511", "镇江市", "zhenjiang", "js_zj", "3211"], ["0512", "昆山市", "kunshan", "js_ks", "320583"], ["0579", "金华市", "jinhua", "zj_jh", "3307"], ["0757", "佛山市", "foshan", "gd_fs", "4406"], ["0471", "呼和浩特", "huhehaote", "nmg_hhht", "1501"], ["0432", "吉林市", "jilin", "jl_jl", "2202"], ["0792", "九江市", "jiujiang", "jx_jj", "3604"], ["0755", "深圳市", "shenzhen", "gd_sz", "4403"], ["0573", "嘉兴市", "jiaxing", "zj_jx", "3304"], ["0319", "邢台市", "xingtai", "hb_xta", "1305"], ["0635", "聊城市", "liaocheng", "sd_lc", "3715"], ["0774", "梧州市", "wuzhou", "gx_wz", "4504"], ["0412", "鞍山市", "anshan", "ln_as", "2103"], ["0315", "唐山市", "tangshan", "hb_ts", "1302"], ["0773", "桂林市", "guilin", "gx_gl", "4503"], ["0472", "包头市", "baotou", "nmg_bt", "1502"], ["0477", "鄂尔多斯市", "eerduosi", "nmg_eeds", "1506"], ["0393", "濮阳市", "puyang", "hn_py", "4109"], ["0310", "邯郸市", "handan", "hb_hd", "1304"], ["0731", "株洲市", "zhuzhou", "hn_zz", "4302"], ["0739", "邵阳市", "shaoyang", "hn_sya", "4305"], ["029", "咸阳市", "xianyang", "sx_xy", "6104"], ["0452", "齐齐哈尔市", "qiqihaer", "hlj_qqhe", "2302"], ["0572", "湖州市", "huzhou", "zj_hzh", "3305"], ["0745", "怀化市", "huaihua", "hn_hh", "4312"], ["0752", "惠州市", "huizhou", "gd_hz", "4413"], ["0454", "佳木斯市", "jiamusi", "hlj_jms", "2308"], ["0535", "烟台市", "yantai", "sd_yt", "3706"], ["0351", "太原市", "taiyuan", "sx_ty", "1401"], ["0536", "潍坊市", "weifang", "sd_wf", "3707"], ["023", "重庆市", "chongqing", "cq", "50"], ["0591", "福州市", "fuzhou", "fj_fz", "3501"], ["0971", "西宁市", "xining", "qh_xn", "6301"], ["0852", "遵义市", "zunyi", "gz_zy", "5203"], ["0379", "洛阳市", "luoyang", "hn_ly", "4103"], ["0317", "沧州市", "cangzhou", "hb_cz", "1309"], ["0710", "襄阳市", "xiangyang", "hb_xf", "4206"], ["0738", "娄底市", "loudi", "hn_ldi", "4313"], ["024", "沈阳市", "shenyang", "ln_sy", "2101"], ["0532", "青岛市", "qingdao", "sd_qd", "3702"], ["0312", "保定市", "baoding", "hb_bd", "1306"], ["0476", "赤峰市", "chifeng", "nmg_cf", "1504"], ["0592", "厦门市", "xiamen", "fj_xm", "3502"], ["0898", "海口市", "haikou", "hn_hk", "4601"], ["0731", "长沙市", "changsha", "hn_cs", "4301"], ["028", "成都市", "chengdu", "sc_cd", "5101"], ["0762", "河源市", "heyuan", "gd_hy", "4416"]),
        o = function() {
            var e = (0, l.default)(function*(e) {
                try {
                    let t = "";
                    if (null != u)
                        for (let n = 0; n < u.length; n++)
                            if (u[n][3] === e) {
                                t = u[n][2];
                                break
                            } if ("" === t) {
                        let a = "";
                        for (let t = 0; t < d.length; t++)
                            if (d[t][3] === e) {
                                a = d[t][4];
                                break
                            } const n = e.replace(/_.+/, "");
                        for (let e = 0; e < u.length; e++)
                            if (/bj|sh|tj|cq/.test(n)) {
                                if (u[e][3] === n) {
                                    t = u[e][2];
                                    break
                                }
                            } else if (u[e][3].replace(/(_).+/, "$1") === `${n}_` && u[e][4].substring(0, 2) === a.substring(0, 2)) {
                            t = u[e][2];
                            break
                        }
                    }
                    t = null == t || "" === t ? "beijing" : t;
                    const a = `http://m${Math.floor(4*Math.random())}.ifengimg.com/auto_city/v_i_a_b/auto_area_news_v3_${t}.js`;
                    return yield(0, r.loadScript)(a), a_a_n_s
                } catch (e) {}
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
    t.getAutoAreaData = (() => {
        let e = r.cookie.get("weather_city");
        return o(e = null == e || "" === e ? "bj" : e)
    })
}, , function(e, t, a) {
    e.exports = {
        car_city: "car_city-CNzfwkjL"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(580)),
        o = n(a(4));
    class i extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.car_city,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            })
        }
    }(0, l.default)(i, "propTypes", {
        content: d.default.string
    });
    var s = (0, o.default)(i);
    t.default = s
}, , function(e, t, a) {
    e.exports = {
        auto_box: "auto_box-3jYt6hkD"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(7)),
        r = n(a(3)),
        d = n(a(1)),
        u = n(a(2)),
        o = n(a(583)),
        i = n(a(6)),
        s = n(a(4)),
        c = n(a(73)),
        f = n(a(48)),
        m = n(a(35)),
        p = n(a(208)),
        h = n(a(581)),
        g = a(578);
    class v extends d.default.PureComponent {
        constructor(...e) {
            super(...e), (0, r.default)(this, "state", {
                autoAreaData: ""
            })
        }
        componentDidMount() {
            var e = this;
            return (0, l.default)(function*() {
                const t = yield(0, g.getAutoAreaData)();
                e.setState({
                    autoAreaData: t
                })
            })()
        }
        render() {
            const e = this.state.autoAreaData,
                t = this.props.content,
                a = t.autoTopic,
                n = t.autoTitle0,
                l = t.autoTitle1,
                r = t.autoList0,
                u = t.autoList1,
                s = t.autoList2,
                g = t.autoListAd;
            return d.default.createElement("div", {
                id: "autoNewsList",
                className: o.default.auto_box
            }, d.default.createElement(i.default, {
                id: "50066",
                type: "struct",
                title: "汽车栏标题",
                groupName: "汽车栏",
                content: a
            }, d.default.createElement(c.default, null)), d.default.createElement(i.default, {
                id: "75053",
                type: "recommend",
                title: "汽车栏头条1",
                groupName: "汽车栏",
                content: n,
                translate: "handleNewsContentData"
            }, d.default.createElement(f.default, null)), d.default.createElement(i.default, {
                id: "75054",
                type: "recommend",
                title: "汽车栏新闻列表1",
                groupName: "汽车栏",
                content: r,
                translate: "handleNewsContentData"
            }, d.default.createElement(m.default, {
                isList: !0
            })), d.default.createElement(i.default, {
                id: "75055",
                type: "recommend",
                title: "汽车栏头条2",
                groupName: "汽车栏",
                content: l,
                translate: "handleNewsContentData"
            }, d.default.createElement(p.default, null)), e && "" !== e ? d.default.createElement(h.default, {
                content: e
            }) : d.default.createElement(i.default, {
                id: "75056",
                type: "recommend",
                title: "汽车栏新闻列表2",
                groupName: "汽车栏",
                content: u,
                translate: "handleNewsContentData"
            }, d.default.createElement(m.default, {
                isList: !0
            })), d.default.createElement(i.default, {
                id: "75057",
                type: "recommend",
                title: "汽车栏新闻列表3",
                groupName: "汽车栏",
                content: s,
                translate: "handleNewsContentData"
            }, d.default.createElement(m.default, {
                isList: !0,
                ad: g
            })))
        }
    }(0, r.default)(v, "propTypes", {
        content: u.default.object
    });
    var _ = (0, s.default)(v);
    t.default = _
}, , function(e, t, a) {
    e.exports = {
        box: "box-3UPIdfRV",
        ad_box: "ad_box-vdTDYOJl clearfix",
        fl: "fl-1d1x8OnM fl",
        fr: "fr-3jFLz_pk fr",
        ad: "ad-7XY48bIk"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(586)),
        i = n(a(10)),
        s = n(a(4)),
        c = n(a(584)),
        f = n(a(577));
    class m extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.autoData,
                a = e.entData,
                n = e.autoAndEntAd0,
                l = e.autoAndEntAd1,
                u = e.autoAndEntAd2;
            return r.default.createElement("div", {
                className: o.default.box
            }, r.default.createElement("div", {
                className: "clearfix"
            }, r.default.createElement(c.default, {
                content: t
            }), r.default.createElement(f.default, {
                content: a
            })), r.default.createElement("div", {
                className: o.default.ad_box
            }, r.default.createElement(d.default, null, r.default.createElement(i.default, {
                content: n,
                styleName: o.default.fl
            })), r.default.createElement(d.default, null, r.default.createElement(i.default, {
                content: l,
                styleName: o.default.fr
            }))), u ? r.default.createElement(i.default, {
                content: u,
                styleName: o.default.ad
            }) : "")
        }
    }(0, l.default)(m, "propTypes", {
        content: u.default.object
    });
    var p = (0, s.default)(m);
    t.default = p
}, , function(e, t, a) {
    e.exports = {
        auto_search: "auto_search-8BA-rsFl",
        txt: "txt-nyXHcw9c",
        btn: "btn-3sxZmARa"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = (n(a(2)), n(a(589))),
        u = n(a(4));
    a(5);
    var o = (0, u.default)(class extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                searchTxt: "输入品牌或车系"
            }), (0, l.default)(this, "handleChange", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: t
                })
            }), (0, l.default)(this, "handleKeydown", e => {
                const t = e.currentTarget.value ? e.currentTarget.value : "";
                13 === e.keyCode && window.open(`http://data.auto.ifeng.com/search/search.do?keywords=${t}#index3`)
            }), (0, l.default)(this, "handleFocus", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: "输入品牌或车系" === t ? "" : t
                })
            }), (0, l.default)(this, "handleBlur", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: "" === t ? "输入品牌或车系" : t
                })
            }), (0, l.default)(this, "handleClick", e => {
                const t = "输入品牌或车系" !== e.currentTarget.attributes.txt.value ? e.currentTarget.attributes.txt.value : "";
                window.open(`http://data.auto.ifeng.com/search/search.do?keywords=${t}#index3`)
            })
        }
        render() {
            const e = this.state.searchTxt;
            return r.default.createElement("div", {
                className: d.default.auto_search
            }, r.default.createElement("span", null, r.default.createElement("input", {
                className: d.default.txt,
                type: "text",
                value: e,
                onChange: this.handleChange,
                onKeyDown: this.handleKeydown,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
            })), r.default.createElement("span", null, r.default.createElement("input", {
                className: d.default.btn,
                type: "button",
                txt: e,
                onClick: this.handleClick
            })))
        }
    });
    t.default = o
}, , function(e, t, a) {
    e.exports = {
        auto_btn: "auto_btn-QnhOlI8N clearfix",
        btn0: "btn0-3b0x4Q9E",
        btn1: "btn1-10-F4o4K"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(592)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.auto_btn
            }, r.default.createElement("div", {
                className: u.default.btn0
            }, r.default.createElement("a", {
                href: e[0].url,
                target: "_blank",
                rel: i.rel
            }, e[0].title)), r.default.createElement("div", {
                className: u.default.btn1
            }, r.default.createElement("a", {
                href: e[1].url,
                target: "_blank",
                rel: i.rel
            }, e[1].title)))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        auto_list: "auto_list-22aa21qx"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(595)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.auto_list
            }, r.default.createElement("ul", {
                className: "clearfix"
            }, e.map((e, t) => r.default.createElement("li", {
                key: t
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, r.default.createElement("img", {
                src: e.src,
                title: e.title,
                alt: e.title
            })), r.default.createElement("p", null, e.title)))))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        auto_title: "auto_title-2IuO-gez"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(598)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.auto_title
            }, r.default.createElement("ul", {
                className: "clearfix"
            }, e.map((e, t) => r.default.createElement("li", {
                key: t
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title)))))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        sider_box: "sider_box-3D8aXFR4",
        stock_box: "stock_box-28wqt67c clearfix",
        sider_list: "sider_list-34aE0AnP"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(601)),
        i = n(a(6)),
        s = n(a(10)),
        c = n(a(4)),
        f = n(a(192)),
        m = n(a(599)),
        p = n(a(596)),
        h = n(a(593)),
        g = n(a(590)),
        v = n(a(203));
    class _ extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.aeNewsSiderTitle,
                a = e.aeNewsSiderContent0,
                n = e.aeNewsSiderContent1,
                l = e.aeNewsSiderContent2,
                u = e.autoAndEntSiderAd,
                c = e.ipadAd1;
            return r.default.createElement("div", {
                className: o.default.sider_box
            }, r.default.createElement(i.default, {
                id: "50065",
                type: "struct",
                title: "汽车娱乐要闻区左侧栏标题",
                groupName: "汽车娱乐要闻区左侧栏",
                content: t
            }, r.default.createElement(f.default, null)), r.default.createElement(i.default, {
                id: "50067",
                type: "struct",
                title: "汽车娱乐要闻区左侧栏编辑区1",
                groupName: "汽车娱乐要闻区左侧栏",
                content: a
            }, r.default.createElement(m.default, null)), r.default.createElement(i.default, {
                id: "50091",
                type: "struct",
                title: "汽车娱乐要闻区左侧栏编辑区2",
                groupName: "汽车娱乐要闻区左侧栏",
                content: n
            }, r.default.createElement(p.default, null)), r.default.createElement(i.default, {
                id: "50068",
                type: "struct",
                title: "汽车娱乐要闻区左侧栏编辑区3",
                groupName: "汽车娱乐要闻区左侧栏",
                content: l
            }, r.default.createElement(h.default, null)), r.default.createElement(g.default, null), r.default.createElement(d.default, null, u ? r.default.createElement(s.default, {
                content: u
            }) : r.default.createElement(i.default, {
                id: "40103",
                type: "static",
                title: "广告2",
                groupName: "汽车娱乐要闻区左侧栏",
                content: c
            }, r.default.createElement(v.default, null))))
        }
    }(0, l.default)(_, "propTypes", {
        content: u.default.object
    });
    var y = (0, c.default)(_);
    t.default = y
}, , function(e, t, a) {
    e.exports = {
        box: "box-3CtuYPRB clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(604)),
        o = n(a(4)),
        i = n(a(602)),
        s = n(a(587));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.aeNewsSiderData,
                a = e.aeNewsData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        pe_box: "pe_box-I0T9wtTK"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(607)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(144)),
        m = n(a(35));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.peTopic,
                a = e.peTitle,
                n = e.peContent0,
                l = e.peContent1,
                d = e.peListAd;
            return r.default.createElement("div", {
                id: "peNewsList",
                className: u.default.pe_box
            }, r.default.createElement(o.default, {
                id: "50063",
                type: "struct",
                title: "体育栏标题",
                groupName: "体育栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75050",
                type: "recommend",
                title: "体育栏头条",
                groupName: "体育栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75051",
                type: "recommend",
                title: "体育栏新闻列表1",
                groupName: "体育栏",
                content: n,
                translate: "handleVideoContentData",
                translateOptions: {
                    index: 0
                }
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75052",
                type: "recommend",
                title: "体育栏新闻列表1",
                groupName: "体育栏",
                content: l,
                translate: "handleVideoContentData",
                translateOptions: {
                    index: 0
                }
            }, r.default.createElement(m.default, {
                hasTitle: !0,
                isList: !0,
                ad: d
            })))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        topic: "topic-3T9puyH6",
        more: "more-2K_IXZdX",
        tag: "tag-WkvlDfAn"
    }
}, , function(e, t, a) {
    e.exports = {
        finance_box: "finance_box-2yAjIUsY"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(612)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(73)),
        c = n(a(48)),
        f = n(a(35)),
        m = n(a(208));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.financeTopic,
                a = e.financeTitle0,
                n = e.financeTitle1,
                l = e.financeList0,
                d = e.financeList1,
                i = e.financeList2,
                p = e.financeList3,
                h = e.financeListAd;
            return r.default.createElement("div", {
                id: "financeNewsList",
                className: u.default.finance_box
            }, r.default.createElement(o.default, {
                id: "50062",
                type: "struct",
                title: "财经栏标题",
                groupName: "财经栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75044",
                type: "recommend",
                title: "财经栏头条1",
                groupName: "财经栏",
                content: a,
                translate: "handleNewsContentData"
            }, r.default.createElement(c.default, null)), r.default.createElement(o.default, {
                id: "75045",
                type: "recommend",
                title: "财经栏新闻列表1",
                groupName: "财经栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75046",
                type: "recommend",
                title: "财经栏头条2",
                groupName: "财经栏",
                content: n,
                translate: "handleNewsContentData"
            }, r.default.createElement(m.default, null)), r.default.createElement(o.default, {
                id: "75047",
                type: "recommend",
                title: "财经栏新闻列表2",
                groupName: "财经栏",
                content: d,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75048",
                type: "recommend",
                title: "财经栏新闻列表3",
                groupName: "财经栏",
                content: i,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0
            })), r.default.createElement(o.default, {
                id: "75049",
                type: "recommend",
                title: "财经栏新闻列表4",
                groupName: "财经栏",
                content: p,
                translate: "handleNewsContentData"
            }, r.default.createElement(f.default, {
                isList: !0,
                ad: h
            })))
        }
    }(0, l.default)(p, "propTypes", {
        content: d.default.object
    });
    var h = (0, i.default)(p);
    t.default = h
}, , function(e, t, a) {
    e.exports = {
        box: "box-mpiX0E2D",
        financeAndPeAd: "financeAndPeAd-3WFayMvB"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(615)),
        o = n(a(10)),
        i = n(a(4)),
        s = n(a(613)),
        c = n(a(608));
    class f extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.financeData,
                a = e.peData,
                n = e.financeAndPeAd;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement("div", {
                className: "clearfix"
            }, r.default.createElement(s.default, {
                content: t
            }), r.default.createElement(c.default, {
                content: a
            })), n ? r.default.createElement(o.default, {
                content: n,
                styleName: u.default.financeAndPeAd
            }) : "")
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        editor_box: "editor_box-3XoPYU1j",
        short_title_bg: "short_title_bg-2q8OTDTJ",
        short_title: "short_title-kaCkUEQB",
        long_title_bg: "long_title_bg-253h4p_Q",
        long_title: "long_title-1BxnX_--"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(618)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.src,
                a = e.width,
                n = e.height,
                l = e.shortTitle,
                d = e.shortTitleUrl,
                o = e.longTitle,
                s = e.longTitleUrl;
            return r.default.createElement("div", {
                className: u.default.editor_box
            }, r.default.createElement("a", {
                href: d,
                target: "_blank",
                rel: i.rel
            }, r.default.createElement("img", {
                src: t,
                width: a,
                height: n,
                alt: l,
                title: l
            })), r.default.createElement("div", {
                className: u.default.short_title_bg
            }), r.default.createElement("div", {
                className: u.default.short_title
            }, r.default.createElement("a", {
                href: d,
                target: "_blank",
                rel: i.rel
            }, l)), r.default.createElement("div", {
                className: u.default.long_title_bg
            }), r.default.createElement("div", {
                className: u.default.long_title
            }, r.default.createElement("a", {
                href: s,
                target: "_blank",
                rel: i.rel
            }, o)))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        stock_search: "stock_search-3S2EO-wI clearfix",
        text: "text-2-Ut2SB0",
        btn: "btn-1c6qU1io"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(621)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                searchTxt: "代码/拼音/名称"
            }), (0, l.default)(this, "handleChange", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: t
                })
            }), (0, l.default)(this, "handleFocus", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: "代码/拼音/名称" === t ? "" : t,
                    isShow: !0
                })
            }), (0, l.default)(this, "handleBlur", e => {
                const t = e.currentTarget.value;
                this.setState({
                    searchTxt: "" === t ? "代码/拼音/名称" : t,
                    isShow: !1
                })
            })
        }
        render() {
            const e = this.state.searchTxt,
                t = this.props.content,
                a = t.searchUrl,
                n = t.url,
                l = t.title;
            return r.default.createElement("div", {
                className: u.default.stock_search
            }, r.default.createElement("form", {
                method: "get",
                action: a,
                target: "_blank",
                rel: i.rel
            }, r.default.createElement("input", {
                className: u.default.text,
                type: "text",
                name: "keyword",
                value: e,
                onChange: this.handleChange,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
            }), r.default.createElement("input", {
                className: u.default.btn,
                type: "submit",
                value: "搜索"
            }), r.default.createElement("a", {
                href: n,
                target: "_blank",
                rel: i.rel
            }, l)))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        stock_info: "stock_info-3FJgsdTk",
        price: "price-3pf-XK6d",
        red: "red-mUAGKDyu",
        green: "green-1_UxDuP7",
        black: "black-3orZ6Gij"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(7)),
        r = n(a(3)),
        d = n(a(1)),
        u = (n(a(2)), n(a(624))),
        o = n(a(4)),
        i = a(213),
        s = a(5);
    var c = (0, o.default)(class extends d.default.PureComponent {
        constructor(...e) {
            super(...e), (0, r.default)(this, "state", {
                data: [0, 0, 0, 0]
            })
        }
        componentDidMount() {
            var e = this;
            return (0, l.default)(function*() {
                try {
                    const t = yield(0, i.getStockInfoData)(["s_sh000001"]);
                    t && t.s_sh000001 && e.setState({
                        data: t.s_sh000001
                    })
                } catch (e) {}
            })()
        }
        render() {
            const e = this.state.data;
            let t = "blank";
            return e[3] > 0 ? t = "red" : e[3] < 0 && (t = "green"), d.default.createElement("div", {
                className: u.default.stock_info
            }, d.default.createElement("a", {
                href: "//finance.ifeng.com/app/hq/stock/sh000001/",
                target: "_blank",
                rel: s.rel
            }, "上证指数"), d.default.createElement("p", {
                className: `${u.default.price} ${u.default[t]}`
            }, e[0]), d.default.createElement("p", {
                className: `${u.default.info} ${u.default[t]}`
            }, d.default.createElement("span", null, `${e[2]>0?`+${e[2]}`:e[2]}`, " "), d.default.createElement("span", null, `${e[3]>0?`+${e[3]}`:e[3]}%`)))
        }
    });
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        stock: "stock-2zqqbAJM"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(627)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.url,
                a = e.src;
            return r.default.createElement("div", {
                className: u.default.stock
            }, r.default.createElement("a", {
                href: t,
                target: "_blank",
                rel: i.rel
            }, r.default.createElement("img", {
                src: a
            })))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        title: "title-1LJf2-XR"
    }
}, , function(e, t, a) {
    e.exports = {
        sider_box: "sider_box-2Okrlnim",
        stock_box: "stock_box-rXMcCvJS clearfix",
        sider_list: "sider_list-3393I5F5"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(632)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(192)),
        c = n(a(628)),
        f = n(a(625)),
        m = n(a(622)),
        p = n(a(120)),
        h = n(a(619));
    class g extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.fpNewsSiderTitle,
                a = e.fpNewsSiderStockImg,
                n = e.fpNewsSiderStockSearch,
                l = e.fpNewsSiderList,
                d = e.fpNewsSiderContent;
            return r.default.createElement("div", {
                className: u.default.sider_box
            }, r.default.createElement(o.default, {
                id: "50061",
                type: "struct",
                title: "财经体育要闻区左侧栏标题",
                groupName: "财经体育要闻区左侧栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement("div", {
                className: u.default.stock_box
            }, r.default.createElement(o.default, {
                id: "50064",
                type: "struct",
                title: "财经左侧栏股票行情图",
                groupName: "财经体育要闻区左侧栏",
                content: a
            }, r.default.createElement(c.default, null)), r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "50104",
                type: "struct",
                title: "财经左侧栏股票搜索",
                groupName: "财经体育要闻区左侧栏",
                content: n
            }, r.default.createElement(m.default, null)), r.default.createElement("div", {
                id: "financeSiderList",
                className: u.default.sider_list
            }, r.default.createElement(o.default, {
                id: "75043",
                type: "recommend",
                title: "财经左侧栏凤凰金融内容",
                groupName: "财经体育要闻区左侧栏",
                content: l,
                translate: "handleNewsContentData"
            }, r.default.createElement(p.default, null))), r.default.createElement(o.default, {
                id: "50090",
                type: "struct",
                title: "旅游编辑区",
                groupName: "财经体育要闻区左侧栏",
                content: d
            }, r.default.createElement(h.default, null)))
        }
    }(0, l.default)(g, "propTypes", {
        content: d.default.object
    });
    var v = (0, i.default)(g);
    t.default = v
}, , function(e, t, a) {
    e.exports = {
        box: "box-17uNhnoq clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(635)),
        o = n(a(4)),
        i = n(a(633)),
        s = n(a(616));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.fpNewsSiderData,
                a = e.fpNewsData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        video_list: "video_list-N6NRYqNF clearfix",
        pic_list: "pic_list-1kvQ-oOM clearfix",
        video_pic: "video_pic-1dVc2vPq",
        pic: "pic-1ih7bHr7",
        play_btn: "play_btn-1SniqVAa",
        txt_bg: "txt_bg-1cvR8d7J",
        txt: "txt-3ZeUyyLE",
        list: "list-3XTqcM0P"
    }
}, , function(e, t, a) {
    e.exports = {
        content_title: "content_title-2i5cY33_"
    }
}, , function(e, t, a) {
    e.exports = {
        title: "title-2JccdFmx clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(642)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.title
            }, e.map((e, t) => r.default.createElement("a", {
                key: t,
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title)))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        video_list: "video_list-e2rIS6n-"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(645)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(643)),
        c = (n(a(48)), n(a(144))),
        f = n(a(35));
    class m extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.videoTitle,
                a = e.videoContent0,
                n = e.videoContent1,
                l = e.videoContent2,
                d = e.videoWSContent,
                i = e.videoJSContent,
                m = e.videoLSContent,
                p = e.videoWHContent,
                h = e.videoCJContent,
                g = e.videoKJContent,
                v = e.videoPEContent,
                _ = e.videoFFHContent,
                y = e.videoGGContent,
                E = e.videoListAd;
            return r.default.createElement("div", {
                id: "newsVideoList",
                className: u.default.video_box
            }, r.default.createElement(o.default, {
                id: "50060",
                type: "struct",
                title: "要闻区右栏视频标题",
                groupName: "要闻区右栏",
                content: t
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "75031",
                type: "recommend",
                title: "要闻区右栏视频区图文编辑1_视频",
                groupName: "要闻区右栏",
                translate: "handleNewsVideoContentData",
                translateOptions: {
                    index: 1
                },
                content: a
            }, r.default.createElement(c.default, {
                hasTopic: !0,
                isVideo: !0
            })), r.default.createElement(o.default, {
                id: "75032",
                type: "recommend",
                title: "要闻区右栏视频区图文编辑2_娱乐",
                groupName: "要闻区右栏",
                translate: "handleNewsVideoContentData",
                translateOptions: {
                    index: 0
                },
                content: n
            }, r.default.createElement(c.default, {
                isVideo: !0
            })), r.default.createElement(o.default, {
                id: "75033",
                type: "recommend",
                title: "要闻区右栏视频区图文编辑3_时尚",
                groupName: "要闻区右栏",
                translate: "handleNewsVideoContentData",
                translateOptions: {
                    index: 0
                },
                content: l
            }, r.default.createElement(c.default, {
                isVideo: !0
            })), r.default.createElement("div", {
                className: u.default.video_list
            }, r.default.createElement(o.default, {
                id: "75034",
                type: "recommend",
                title: "要闻区右栏视频区新闻列表_视频",
                groupName: "要闻区右栏",
                translate: "handleVideoContentData1",
                content: d
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75035",
                type: "recommend",
                title: "要闻区右栏视频区新闻列表_军事",
                groupName: "要闻区右栏",
                translate: "handleVideoContentData1",
                content: i
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75036",
                type: "recommend",
                title: "要闻区右栏视频区新闻列表_历史",
                groupName: "要闻区右栏",
                translate: "handleVideoContentData1",
                content: m
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75037",
                type: "recommend",
                title: "要闻区右栏视频区新闻列表_文化",
                groupName: "要闻区右栏",
                translate: "handleVideoContentData1",
                content: p
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75038",
                type: "recommend",
                title: "要闻区右栏视频区新闻列表_财经",
                groupName: "要闻区右栏",
                translate: "handleVideoContentData1",
                content: h
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75039",
                type: "recommend",
                title: "要闻区右栏视频区新闻列表_科技",
                groupName: "要闻区右栏",
                translate: "handleVideoContentData1",
                content: g
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75040",
                type: "recommend",
                title: "要闻区右栏视频区新闻列表_体育",
                groupName: "要闻区右栏",
                translate: "handleVideoContentData1",
                content: v
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75041",
                type: "recommend",
                title: "要闻区右栏视频区新闻列表_大风号",
                groupName: "要闻区右栏",
                translate: "handleVideoContentData1",
                content: _
            }, r.default.createElement(f.default, null)), r.default.createElement(o.default, {
                id: "75042",
                type: "recommend",
                title: "要闻区右栏视频区新闻列表_游戏",
                groupName: "要闻区右栏",
                translate: "handleVideoContentData1",
                content: y
            }, r.default.createElement(f.default, {
                ad: E
            }))))
        }
    }(0, l.default)(m, "propTypes", {
        content: d.default.object
    });
    var p = (0, i.default)(m);
    t.default = p
}, , function(e, t, a) {
    e.exports = {
        slideItem: "slideItem-De6D4JVC",
        FosPicConTxt: "FosPicConTxt-3c3sDXpe",
        FosPicConTxtA: "FosPicConTxtA-3OgSkNjD",
        arrow: "arrow-3wX2MXcB",
        pre: "pre-1Fw-TKwa",
        next: "next-eDerXsic",
        none: "none-33wFxmam"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(648)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "onClickNext", () => {
                const e = this.props.other,
                    t = e.type,
                    a = e.len,
                    n = e.onArrow;
                if (t + 1 >= a) return null;
                n(t + 1)
            }), (0, l.default)(this, "onClickPre", () => {
                const e = this.props.other,
                    t = e.type,
                    a = e.onArrow;
                if (t - 1 < 0) return null;
                a(t - 1)
            })
        }
        render() {
            const e = this.props,
                t = e.content,
                a = e.other,
                n = e.index,
                l = a.showArrow,
                d = a.type,
                o = Array.isArray(t) && t.length > 0 && t[0];
            return r.default.createElement("div", {
                className: d === n ? u.default.slideItem : u.default.none
            }, r.default.createElement("a", {
                href: o.url,
                target: "_blank",
                alt: o.title,
                title: o.title,
                rel: i.rel,
                "data-nomask": !0
            }, r.default.createElement("img", {
                src: o.thumbnail,
                style: {
                    width: 360,
                    height: 220
                }
            })), r.default.createElement("div", {
                className: u.default.FosPicConTxt
            }, r.default.createElement("a", {
                className: u.default.FosPicConTxtA,
                href: o.url,
                target: "_blank",
                alt: o.title,
                title: o.title,
                rel: i.rel,
                "data-innermask": !0
            }, o.title)), l && r.default.createElement("a", {
                className: `${u.default.pre} ${u.default.arrow}`,
                onClick: this.onClickPre
            }, "<"), l && r.default.createElement("a", {
                className: `${u.default.next} ${u.default.arrow}`,
                onClick: this.onClickNext
            }, ">"))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array,
        other: d.default.object,
        index: d.default.number
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        wrap: "wrap-3KINPl_L clearfix",
        current: "current-MhVeqUF7"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(651)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "tabTimer", null), (0, l.default)(this, "loop", () => {
                const e = this.props.other,
                    t = e.tabChange,
                    a = e.type,
                    n = e.showArrow,
                    l = e.len;
                let r = a;
                n || (a + 1 >= l ? r = 0 : a < 0 ? r = l - 1 : r += 1, t(r))
            }), (0, l.default)(this, "hoverLi", e => {
                e.stopPropagation();
                const t = this.props.other,
                    a = t.type,
                    n = t.tabChange,
                    l = e.currentTarget.getAttribute("data-type");
                null === l && l === a || n(l)
            })
        }
        componentDidMount() {
            this.tabTimer = setInterval(() => {
                this.loop()
            }, 5e3)
        }
        componentWillUnmount() {
            this.tabTimer = null
        }
        render() {
            const e = this.props,
                t = e.content,
                a = e.other.type,
                n = t.map((e, t) => r.default.createElement("li", {
                    key: t,
                    "data-type": t,
                    onMouseEnter: this.hoverLi,
                    className: a === t ? u.default.current : ""
                }, r.default.createElement("a", {
                    href: e.url,
                    target: "_blank",
                    rel: i.rel
                }, e.title)));
            return r.default.createElement("ul", {
                className: u.default.wrap
            }, n)
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array,
        other: d.default.object
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        wrap: "wrap-178QtgJO"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(654)),
        o = n(a(4)),
        i = n(a(652)),
        s = n(a(649)),
        c = n(a(6));
    class f extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                type: 0,
                showArrow: !1
            }), (0, l.default)(this, "tabChange", e => {
                this.setState({
                    type: e
                })
            }), (0, l.default)(this, "onArrow", e => {
                this.setState({
                    type: e
                })
            }), (0, l.default)(this, "handleData", e => {
                const t = e.slidesTab,
                    a = e.slideContent,
                    n = [];
                return Object.values(a).forEach((e, a) => {
                    (e = e[0]).id = t[a].id, n.push(e)
                }), n
            }), (0, l.default)(this, "mouseEnter", () => {
                this.setState({
                    showArrow: !0
                })
            }), (0, l.default)(this, "mouseLeave", () => {
                this.setState({
                    showArrow: !1
                })
            })
        }
        render() {
            const e = this.state,
                t = e.type,
                a = e.showArrow,
                n = this.props.content,
                l = n.slidesTab,
                d = this.handleData(n),
                o = d.length,
                f = Number(t),
                m = {
                    tabChange: this.tabChange,
                    type: f,
                    showArrow: a,
                    len: o
                },
                p = {
                    onArrow: this.onArrow,
                    showArrow: a,
                    type: f,
                    len: o
                },
                h = Array.isArray(d) && d.length > 0;
            return r.default.createElement("div", {
                id: "newsSlide",
                className: u.default.wrap,
                onMouseEnter: this.mouseEnter,
                onMouseLeave: this.mouseLeave
            }, r.default.createElement(c.default, {
                id: "50102",
                type: "struct",
                title: "要闻区右栏轮播图标题栏",
                groupName: "要闻区右栏轮播图",
                content: l
            }, r.default.createElement(i.default, {
                content: l,
                other: m
            })), h && d.map((e, t) => r.default.createElement(c.default, {
                key: t,
                id: e.id,
                type: "recommend",
                title: `要闻区右栏轮播图${l[t].title}`,
                groupName: "要闻区右栏轮播图",
                content: [e],
                translate: "handleIndexSlideData",
                position: "relative"
            }, r.default.createElement(s.default, {
                other: p,
                index: t
            }))))
        }
    }(0, l.default)(f, "propTypes", {
        content: d.default.object
    });
    var m = (0, o.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        ActionLeague: "ActionLeague-2J_as0kh",
        title: "title-35LAyKtK",
        slideItem: "slideItem-J4eJZR-s",
        imgWrap: "imgWrap-1sZ59Zpf",
        img: "img-1EPHX5hF",
        preLook: "preLook-3os_c9Wi",
        live: "live-2pMLFUTE preLook-3os_c9Wi",
        title_wrap: "title_wrap-18dGvtGd",
        dot: "dot-1BodLZqy",
        current: "current-SpPLebmi dot-1BodLZqy"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(7)),
        r = n(a(3)),
        d = n(a(1)),
        u = n(a(2)),
        o = n(a(657)),
        i = a(8),
        s = a(10),
        c = n(a(4)),
        f = n(a(116)),
        m = (a(29), a(213)),
        p = a(30),
        h = a(5);
    class g extends d.default.PureComponent {
        constructor(...e) {
            super(...e), (0, r.default)(this, "state", {
                data: []
            }), (0, r.default)(this, "event", new i.Event), (0, r.default)(this, "insert", (e, t, a) => {
                if (a && "function" == typeof a) {
                    const n = [...this.state.data],
                        l = [];
                    e.forEach(e => {
                        const t = d.default.createRef();
                        l.push({
                            index: e,
                            ref: t
                        }), n.splice(e, 0, {
                            type: "ad",
                            ref: t
                        })
                    }), t.forEach(e => {
                        const t = d.default.createRef();
                        l.push({
                            index: e,
                            ref: t
                        }), n.splice(e, 1, {
                            type: "ad",
                            ref: t
                        })
                    }), this.setState({
                        data: n
                    }, () => {
                        const e = {};
                        for (const t of l) e[t.index] = t.ref.current;
                        a(e)
                    })
                }
            }), (0, r.default)(this, "isLive", e => {
                const t = +new Date;
                return 1e3 * Number(e) - t > 0
            }), (0, r.default)(this, "sliderTmpl", e => "ad" === e.type ? d.default.createElement("div", {
                ref: e.ref
            }) : e.map((e, t) => d.default.createElement("div", {
                className: o.default.slideItem,
                key: t
            }, d.default.createElement("a", {
                className: o.default.blockA,
                href: e.url,
                target: "_blank",
                alt: e.title,
                title: e.title,
                rel: h.rel,
                "data-nomask": !0
            }, d.default.createElement("div", {
                className: o.default.imgWrap
            }, d.default.createElement("img", {
                src: e.img,
                className: o.default.img
            })), d.default.createElement("span", {
                className: this.isLive(e.endtime) ? o.default.live : o.default.preLook
            }, this.isLive(e.endtime) ? "直播中" : "回看")), d.default.createElement("div", {
                className: o.default.title_wrap
            }, d.default.createElement("a", {
                href: e.url,
                target: "_blank",
                alt: e.title,
                title: e.title,
                rel: h.rel,
                "data-innermask": !0
            }, e.title)))))
        }
        componentDidMount() {
            var e = this;
            return (0, l.default)(function*() {
                try {
                    const t = (yield(0, m.getFLiveData)()).slice(0, 4);
                    e.setState({
                        data: t
                    })
                } catch (e) {}
                try {
                    const t = e.props.ad;
                    (yield(0, s.handleAd)(t))(t.data, e.event, e.insert)
                } catch (e) {}
                try {
                    e.event.trigger("init")
                } catch (e) {}
            })()
        }
        render() {
            const e = this.state.data,
                t = e.filter(e => "ad" !== e.type),
                a = e.filter(e => "ad" === e.type),
                n = t.length > 0 ? (0, p.oneChangeTwoDimensional)(t.slice(0, 4), 2).concat(a) : a,
                l = {
                    arrows: !0,
                    autoplay: !0,
                    dots: !0,
                    dotsAction: "hover",
                    direction: "forward",
                    pauseOnHover: !0,
                    autoplayInterval: 5e3,
                    axis: "horizonta",
                    initialSlide: 0,
                    speed: 300,
                    infinite: !0,
                    dotStyle: o.default.dot,
                    dotCurrentStyle: o.default.current,
                    sliderTmpl: this.sliderTmpl
                };
            return d.default.createElement("div", {
                id: "flive",
                className: o.default.ActionLeague
            }, d.default.createElement("div", {
                className: o.default.title
            }, d.default.createElement("a", {
                href: "//zhibo.ifeng.com",
                target: "_blank",
                alt: "风直播",
                title: "风直播",
                rel: h.rel
            }, "风直播")), d.default.createElement(f.default, {
                content: n,
                config: l
            }))
        }
    }(0, r.default)(g, "propTypes", {
        ad: u.default.object
    });
    var v = (0, c.default)(g);
    t.default = v
}, , function(e, t, a) {
    e.exports = {
        extra_list: "extra_list-1GWK6bLA"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(660)),
        o = n(a(4));
    class i extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", {
                className: u.default.extra_list,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            })
        }
    }(0, l.default)(i, "propTypes", {
        content: d.default.string
    });
    var s = (0, o.default)(i);
    t.default = s
}, , function(e, t, a) {}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(7)),
        r = n(a(3)),
        d = n(a(1)),
        u = n(a(2)),
        o = (n(a(663)), n(a(6))),
        i = n(a(4)),
        s = n(a(661)),
        c = a(213);
    class f extends d.default.PureComponent {
        constructor(...e) {
            super(...e), (0, r.default)(this, "state", {
                html: ""
            })
        }
        componentDidMount() {
            var e = this;
            return (0, l.default)(function*() {
                const t = e.props.localKey,
                    a = yield(0, c.getNewsDataList)(t);
                e.setState({
                    html: a
                })
            })()
        }
        render() {
            const e = this.state.html,
                t = this.props.info;
            return t.content = e, "" !== e ? d.default.createElement(o.default, t, d.default.createElement(s.default, null)) : ""
        }
    }(0, r.default)(f, "propTypes", {
        localKey: u.default.string,
        info: u.default.object
    });
    var m = (0, i.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        list_title: "list_title-36HUNFX9"
    }
}, , function(e, t, a) {
    e.exports = {
        news_list: "news_list-3wjAJJJM",
        content_list: "content_list-1Nu09n2r",
        list: "list-sH9EOaA1",
        topic: "topic-21mlMS78",
        video: "video-2w22ayfc",
        bold: "bold-1_9fb0GT",
        zoujc: "zoujc-1H7bZ_qM",
        cnRed: "cnRed-ZAqThTnh"
    }
}, , function(e, t, a) {
    e.exports = {
        content_list: "content_list-20FBfkSg"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(670)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(35));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.newsContent0,
                a = e.newsContent1,
                n = e.newsContent2;
            return r.default.createElement("div", {
                id: "newsList",
                className: u.default.content_list
            }, r.default.createElement(o.default, {
                id: "75028",
                type: "recommend",
                title: "要闻区中栏要闻列表第一部分",
                groupName: "要闻区中栏",
                translate: "handleNewsContentData",
                position: "relative",
                content: t
            }, r.default.createElement(s.default, {
                hasTopic: !0
            })), r.default.createElement(o.default, {
                id: "75029",
                type: "recommend",
                title: "要闻区中栏要闻列表第二部分",
                groupName: "要闻区中栏",
                translate: "handleNewsContentData",
                position: "relative",
                content: a
            }, r.default.createElement(s.default, null)), r.default.createElement(o.default, {
                id: "50098",
                type: "struct",
                title: "要闻区中栏要闻列表倒数第二条",
                groupName: "要闻区中栏",
                position: "relative",
                content: n
            }, r.default.createElement(s.default, null)))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, i.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        tabBodyItemActive: "tabBodyItemActive-2_zoZQRN",
        tabBodyItem: "tabBodyItem-1Dq3ReEx"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(673)),
        o = n(a(4));
    class i extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                isReady: this.props.active
            }), (0, l.default)(this, "container", r.default.createRef())
        }
        static getDerivedStateFromProps(e, t) {
            return t.isReady || !e.active ? t : {
                isReady: e.active
            }
        }
        render() {
            const e = this.props,
                t = e.active,
                a = e.children;
            return this.state.isReady ? r.default.createElement("div", {
                className: t ? u.default.tabBodyItemActive : u.default.tabBodyItem
            }, r.default.Children.map(a, e => r.default.cloneElement(e))) : null
        }
    }(0, l.default)(i, "propTypes", {
        active: d.default.bool,
        children: d.default.any
    });
    var s = (0, o.default)(i);
    t.default = s
}, , function(e, t, a) {
    e.exports = {
        tabTitle: "tabTitle-3eNozaAa clearfix",
        tabHead: "tabHead-2DwToffd"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(676)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props,
                t = (e.content, e.tabs),
                a = e.handleMouseOver;
            return r.default.createElement("div", {
                className: u.default.tabTitle
            }, r.default.createElement("div", {
                className: u.default.tabHead
            }, t.map((e, t) => r.default.createElement(r.default.Fragment, {
                key: t
            }, 1 === t && e.prov && e.city ? r.default.createElement("span", null, "|") : "", r.default.createElement("a", {
                index: t,
                href: e.url,
                target: "_blank",
                rel: i.rel,
                onMouseOver: a
            }, e.title)))))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array,
        tabs: d.default.array,
        handleMouseOver: d.default.func
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(679)),
        i = n(a(6)),
        s = n(a(4)),
        c = n(a(677));
    class f extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                current: 0
            }), (0, l.default)(this, "handleMouseOver", e => {
                const t = Number(e.currentTarget.getAttribute("index"));
                t !== this.state.current && this.setState({
                    current: t
                })
            }), (0, l.default)(this, "renderTabHead", () => {
                const e = this.props,
                    t = e.newsTitle,
                    a = e.tabs;
                return r.default.createElement(d.default, null, r.default.createElement(i.default, {
                    id: "50058",
                    type: "struct",
                    title: "要闻区中栏标题",
                    groupName: "要闻区中栏",
                    content: t,
                    position: "relative"
                }, r.default.createElement(c.default, {
                    tabs: a,
                    handleMouseOver: this.handleMouseOver
                })))
            })
        }
        renderBody() {
            return r.default.createElement("div", {
                className: o.default.tabBody
            }, r.default.Children.map(this.props.children, (e, t) => r.default.cloneElement(e, {
                active: this.state.current === t
            })))
        }
        render() {
            return r.default.createElement("div", {
                id: "tabs"
            }, this.renderTabHead(), this.renderBody())
        }
    }(0, l.default)(f, "propTypes", {
        newsTitle: u.default.array,
        tabs: u.default.array,
        children: u.default.any
    });
    var m = (0, s.default)(f);
    t.default = m
}, , function(e, t, a) {
    e.exports = {
        title_ad: "title_ad-2kUCtiXN"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(682)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return e && 0 !== e.length ? r.default.createElement("div", {
                id: "newsTitleAd",
                className: u.default.title_ad
            }, e.map((e, t) => e.children && e.children.length > 0 ? r.default.createElement(r.default.Fragment, {
                key: t
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title), e.children.map((e, t) => r.default.createElement(r.default.Fragment, {
                key: t
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title)))) : r.default.createElement("a", {
                key: t,
                href: e.url,
                target: "_blank",
                rel: i.rel
            }, e.title))) : r.default.createElement("div", null)
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        news_top: "news_top-1PMR_KNt"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(685)),
        i = n(a(6)),
        s = a(8),
        c = n(a(4)),
        f = n(a(683)),
        m = n(a(680)),
        p = n(a(674)),
        h = n(a(671)),
        g = n(a(664)),
        v = n(a(35));
    class _ extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "handleAreaArr", () => {
                const e = this.props.content.newsTitle;
                try {
                    let t = null,
                        a = null;
                    "undefined" != typeof document && (t = s.cookie.get("prov") && "" !== s.cookie.get("prov") && "cn010" !== s.cookie.get("prov") ? s.cookie.get("prov") : null, a = s.cookie.get("city") && "" !== s.cookie.get("city") && "010" !== s.cookie.get("city") ? s.cookie.get("city") : null);
                    let n = "",
                        l = "";
                    if (t && a) {
                        let r = e.filter(e => e.city === a);
                        return 0 === r.length && (r = e.filter(e => e.prov === t).filter(e => e.prov === `cn${e.city}`)), r.length > 0 && (n = (r = r[0]).localKey, l = r.lastOneKey), {
                            arr: r,
                            localKey: n,
                            lastOneKey: l
                        }
                    }
                    return {
                        arr: [],
                        localKey: n,
                        lastOneKey: l
                    }
                } catch (e) {
                    return {
                        arr: [],
                        localKey: "",
                        lastOneKey: ""
                    }
                }
            })
        }
        render() {
            const e = this.props.content,
                t = e.newsTitle,
                a = e.newsTitleAd,
                n = e.newContent,
                l = e.newsListAd;
            let u = [t[0]],
                s = "",
                c = "";
            const _ = this.handleAreaArr();
            _ && (u = [t[0], _.arr ? _.arr : []], s = _.localKey ? _.localKey : "", c = _.lastOneKey ? _.lastOneKey : "");
            const y = {
                    id: s,
                    type: "static",
                    title: "要闻区中栏地方站要闻列表",
                    groupName: "要闻区中栏",
                    position: "relative"
                },
                E = {
                    id: c,
                    type: "static",
                    title: "要闻区中栏地方站要闻列表最后一条",
                    groupName: "要闻区中栏",
                    position: "relative"
                };
            return r.default.createElement("div", {
                className: o.default.news_top
            }, r.default.createElement(i.default, {
                id: "75129",
                type: "recommend",
                title: "要闻区中栏标题推广",
                groupName: "要闻区中栏",
                content: a
            }, r.default.createElement(f.default, null)), r.default.createElement(m.default, {
                newsTitle: t,
                tabs: u
            }, u.map((e, t) => r.default.createElement(p.default, {
                key: t,
                tab: e.title,
                url: e.url
            }, 0 === t ? r.default.createElement(h.default, {
                content: n
            }) : r.default.createElement(d.default, null, r.default.createElement(g.default, {
                localKey: s,
                info: y
            }))))), c ? r.default.createElement(d.default, null, r.default.createElement(g.default, {
                localKey: c,
                info: E
            })) : r.default.createElement(i.default, {
                id: "75030",
                type: "recommend",
                title: "要闻区中栏要闻列表最后一条",
                groupName: "要闻区中栏",
                translate: "handleNewsContentData",
                position: "relative",
                content: n.newsContent3
            }, r.default.createElement(v.default, {
                ad: l
            })))
        }
    }(0, l.default)(_, "propTypes", {
        content: u.default.object
    });
    var y = (0, c.default)(_);
    t.default = y
}, , function(e, t, a) {
    e.exports = {
        news_box: "news_box-3DciADcS",
        news_top: "news_top-1tjVXPNV"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(688)),
        o = n(a(4)),
        i = n(a(686)),
        s = n(a(658));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.newsTopData,
                a = e.liveAd;
            return r.default.createElement("div", {
                className: u.default.news_box
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                ad: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        news: "news-1fEl0rQa",
        news_R: "news_R-19la3l3x",
        ad_box: "ad_box-3A5sCRNW clearfix",
        fl: "fl-3-YlAWw- fl",
        fr: "fr-2UfCjN3u fr",
        ad: "ad-1hclWNU_"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(691)),
        i = n(a(10)),
        s = n(a(4)),
        c = n(a(689)),
        f = n(a(655)),
        m = n(a(646));
    class p extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.newsBoxData,
                a = e.slideData,
                n = e.videoBoxData,
                l = e.newsAndVideoAd0,
                u = e.newsAndVideoAd1,
                s = e.newsAndVideoAd2;
            return r.default.createElement("div", {
                className: o.default.news
            }, r.default.createElement("div", {
                className: "clearfix"
            }, r.default.createElement(c.default, {
                content: t
            }), r.default.createElement("div", {
                className: o.default.news_R
            }, r.default.createElement(f.default, {
                content: a
            }), r.default.createElement(m.default, {
                content: n
            }))), r.default.createElement("div", {
                className: o.default.ad_box
            }, r.default.createElement(d.default, null, r.default.createElement(i.default, {
                content: l,
                styleName: o.default.fl
            })), r.default.createElement(d.default, null, r.default.createElement(i.default, {
                content: u,
                styleName: o.default.fr
            }))), s ? r.default.createElement(i.default, {
                content: s,
                styleName: o.default.ad
            }) : "")
        }
    }(0, l.default)(p, "propTypes", {
        content: u.default.object
    });
    var h = (0, s.default)(p);
    t.default = h
}, , function(e, t, a) {}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = (n(a(694)), n(a(4))),
        o = n(a(228)),
        i = n(a(120));
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.nav,
                a = e.data;
            return r.default.createElement("div", null, r.default.createElement(o.default, {
                type: 1,
                content: t
            }), r.default.createElement(i.default, {
                content: a
            }))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object
    });
    var c = (0, u.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        donate: "donate-lJncHVkw"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(697)),
        o = n(a(4)),
        i = n(a(228)),
        s = n(a(120));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.nav,
                a = e.data,
                n = t.length - 1;
            return r.default.createElement("div", null, r.default.createElement(i.default, {
                type: 1,
                content: t.slice(0, n)
            }, r.default.createElement("a", {
                className: u.default.donate,
                href: t[n].url,
                target: "_blank"
            }, r.default.createElement("img", {
                src: t[n].src,
                title: t[n].title
            }))), r.default.createElement(s.default, {
                content: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        jp_list: "jp_list-1bM6P288"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(700)),
        o = n(a(4)),
        i = n(a(120)),
        s = a(5);
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content;
            return r.default.createElement("div", null, r.default.createElement("ul", {
                className: u.default.jp_list
            }, e.slice(0, 4).map((e, t) => r.default.createElement("li", {
                key: t
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: s.rel
            }, r.default.createElement("img", {
                src: e.thumbnail
            })), r.default.createElement("h5", null, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: s.rel
            }, e.title))))), r.default.createElement(i.default, {
                content: e.slice(4),
                isVideo: !0
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.array
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        jp: "jp-13JIM9ti"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(703)),
        o = n(a(4)),
        i = n(a(228));
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content.nav,
                t = e.length - 1;
            return r.default.createElement("div", null, r.default.createElement(i.default, {
                type: 1,
                content: e.slice(0, t)
            }, r.default.createElement("a", {
                className: u.default.jp,
                href: e[t].url,
                target: "_blank"
            }, e[t].title)))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        list: "list-1CCaEebJ",
        video: "video-Vu82y2EG",
        topic: "topic-2D9qUbmF",
        pic_box: "pic_box-3qqQp1KU",
        pic: "pic-25STh04J"
    }
}, , function(e, t, a) {
    e.exports = {
        title: "title-1noClO6w clearfix"
    }
}, , function(e, t, a) {
    e.exports = {
        news_sider: "news_sider-27rktrh3",
        sider_box: "sider_box-zNIn8d7U",
        box: "box-3J7SXsmZ",
        newsSiderAd: "newsSiderAd-2MgkC-jG"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(710)),
        i = n(a(6)),
        s = n(a(10)),
        c = n(a(4)),
        f = n(a(228)),
        m = n(a(120)),
        p = n(a(704)),
        h = n(a(701)),
        g = n(a(698)),
        v = n(a(695)),
        _ = n(a(203));
    class y extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.newsSiderTitle0,
                a = e.newsSiderContent0,
                n = e.newsSiderContent1,
                l = e.newsSiderContent2,
                u = e.newsSiderContent3,
                c = e.newsSiderContentList,
                y = e.newsSiderAd,
                E = e.ipadAd0;
            return r.default.createElement("div", {
                className: o.default.news_sider
            }, r.default.createElement("div", {
                className: o.default.sider_box
            }, r.default.createElement("div", {
                id: "newsSider_0",
                className: o.default.box
            }, r.default.createElement(i.default, {
                id: "50059",
                type: "struct",
                title: "评论与政务标题",
                groupName: "要闻区左侧栏",
                content: t
            }, r.default.createElement(f.default, {
                type: 0
            })), r.default.createElement(i.default, {
                id: "75027",
                type: "recommend",
                title: "评论与政务列表",
                groupName: "要闻区左侧栏",
                translate: "handleNewsSiderContentData",
                translateOptions: {
                    index: 0
                },
                content: a
            }, r.default.createElement(m.default, {
                hasSummary: !0
            }))), r.default.createElement("div", {
                id: "newsSider_1",
                className: o.default.box
            }, r.default.createElement(i.default, {
                id: "50089",
                type: "struct",
                title: "视频凤凰精品标题",
                groupName: "要闻区左侧栏",
                content: n
            }, r.default.createElement(p.default, null)), r.default.createElement(i.default, {
                id: "75180",
                type: "recommend",
                title: "视频凤凰精品列表",
                groupName: "要闻区左侧栏",
                translate: "handleNewsSiderContentListData",
                content: c
            }, r.default.createElement(h.default, null))), r.default.createElement("div", {
                id: "newsSider_2",
                className: o.default.box
            }, r.default.createElement(i.default, {
                id: "50092",
                type: "struct",
                title: "互娱有声书知之列表",
                groupName: "要闻区左侧栏",
                content: l
            }, r.default.createElement(g.default, null))), r.default.createElement("div", {
                id: "newsSider_3",
                className: o.default.box
            }, r.default.createElement(i.default, {
                id: "50093",
                type: "struct",
                title: "互娱小说列表",
                groupName: "要闻区左侧栏",
                content: u
            }, r.default.createElement(v.default, null)))), r.default.createElement(d.default, null, y ? r.default.createElement(s.default, {
                content: y,
                styleName: o.default.newsSiderAd
            }) : r.default.createElement("div", {
                className: o.default.newsSiderAd
            }, r.default.createElement(i.default, {
                id: "40102",
                type: "static",
                title: "广告1",
                groupName: "要闻区左侧栏",
                content: E
            }, r.default.createElement(_.default, null)))))
        }
    }(0, l.default)(y, "propTypes", {
        content: u.default.object
    });
    var E = (0, c.default)(y);
    t.default = E
}, , function(e, t, a) {
    e.exports = {
        box: "box-30wkVuOM clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(713)),
        o = n(a(4)),
        i = n(a(711)),
        s = n(a(692));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.newsSiderData,
                a = e.newsData;
            return r.default.createElement("div", {
                className: u.default.box
            }, r.default.createElement(i.default, {
                content: t
            }), r.default.createElement(s.default, {
                content: a
            }))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, o.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        list: "list-2TAUnWE1 clearfix",
        item: "item-2pdAZ0v2 clearfix",
        pic: "pic-30gq0kfc",
        content: "content-1z3Y_oh7",
        title: "title-31m9JMuT"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(7)),
        r = n(a(3)),
        d = n(a(1)),
        u = n(a(2)),
        o = n(a(716)),
        i = a(8),
        s = a(10),
        c = n(a(4)),
        f = a(30),
        m = a(5);
    const p = (e, t) => {
        const a = (0, f.oneChangeTwoDimensional)([...e], 2);
        for (const n of t) "replaceArr" === n.type ? a.splice(n.index, 1, [{
            type: "ad",
            ref: n.ref
        }]) : "insertArr" === n.type && a.splice(n.index, 0, [{
            type: "ad",
            ref: n.ref
        }]);
        return a
    };
    class h extends d.default.PureComponent {
        constructor(...e) {
            super(...e), (0, r.default)(this, "state", {
                ads: []
            }), (0, r.default)(this, "event", new i.Event), (0, r.default)(this, "insert", (e, t, a) => {
                if (a && "function" == typeof a) {
                    const n = [];
                    t.forEach(e => {
                        const t = d.default.createRef();
                        n.push({
                            index: e,
                            ref: t,
                            type: "replaceArr"
                        })
                    }), e.forEach(e => {
                        const t = d.default.createRef();
                        n.push({
                            index: e,
                            ref: t,
                            type: "insertArr"
                        })
                    }), this.setState({
                        ads: [...this.state.ads, ...n]
                    }, () => {
                        const e = {};
                        for (const t of n) e[t.index] = t.ref.current;
                        a(e)
                    })
                }
            })
        }
        componentDidMount() {
            var e = this;
            return (0, l.default)(function*() {
                const t = e.props.ad;
                if (t) {
                    try {
                        (yield(0, s.handleAd)(t))(t.data, e.event, e.insert)
                    } catch (e) {}
                    try {
                        e.event.trigger("init")
                    } catch (e) {}
                }
            })()
        }
        render() {
            const e = this.state.ads,
                t = this.props.content,
                a = p(t, e);
            return d.default.createElement("ul", {
                className: o.default.list
            }, a.map((e, t) => "ad" === e[0].type ? d.default.createElement("li", {
                key: t,
                className: o.default.item,
                ref: e[0].ref
            }) : d.default.createElement("li", {
                key: t,
                className: o.default.item
            }, d.default.createElement("div", {
                className: o.default.pic
            }, d.default.createElement("a", {
                href: e[1].url,
                target: "_blank",
                rel: m.rel
            }, d.default.createElement("img", {
                src: e[1].thumbnail,
                alt: e[1].title,
                title: e[1].title
            }), d.default.createElement("div", null))), d.default.createElement("div", {
                className: o.default.content
            }, d.default.createElement("div", {
                className: o.default.title
            }, d.default.createElement("a", {
                href: e[0].url,
                target: "_blank",
                rel: m.rel,
                title: e[0].title
            }, e[0].title)), d.default.createElement("h4", null, d.default.createElement("a", {
                href: e[1].url,
                target: "_blank",
                rel: m.rel,
                "sign-trs-href": e[1].url,
                title: e[1].title
            }, e[1].title))))))
        }
    }(0, r.default)(h, "propTypes", {
        content: u.default.array,
        ad: u.default.object
    });
    var g = (0, c.default)(h);
    t.default = g
}, , function(e, t, a) {
    e.exports = {
        banner: "banner-2FOyePsh"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(719)),
        o = n(a(6)),
        i = n(a(4)),
        s = n(a(717));
    class c extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.content,
                a = e.bannerAd;
            return r.default.createElement("div", {
                id: "banner",
                className: u.default.banner
            }, r.default.createElement(o.default, {
                id: "75024",
                type: "recommend",
                title: "推荐图",
                groupName: "推荐图栏",
                translate: "handleRecommendImageData",
                content: t
            }, r.default.createElement(s.default, {
                ad: a
            })))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.object
    });
    var f = (0, i.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        sub_box: "sub_box-yNw9RL3I",
        sub_nav: "sub_nav-2uiN0d8V clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(722)),
        o = a(8),
        i = n(a(4)),
        s = a(5);
    class c extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "handleAreaArr", () => {
                try {
                    const e = this.props.subNavArea;
                    let t = null,
                        a = null;
                    if ("undefined" != typeof document && (t = o.cookie.get("prov") && "" !== o.cookie.get("prov") && "cn010" !== o.cookie.get("prov") ? o.cookie.get("prov") : null, a = o.cookie.get("city") && "" !== o.cookie.get("city") && "010" !== o.cookie.get("city") ? o.cookie.get("city") : null), t && a) {
                        let n = e.filter(e => e.city === a);
                        if (0 === n.length && (n = e.filter(e => e.prov === t).filter(e => e.prov === `cn${e.city}`)), n.length > 0) return {
                            url: n[0].url ? n[0].url : "",
                            title: n[0].title ? n[0].title : ""
                        }
                    }
                    return null
                } catch (e) {
                    return null
                }
            }), (0, l.default)(this, "getInsteadIndex", e => {
                let t = 16;
                try {
                    for (let a = 0; a < e.length; a++) e[a] && "音乐" === e[a].title && (t = a)
                } catch (e) {
                    return t
                }
                return t
            })
        }
        render() {
            const e = this.props.content,
                t = e.length,
                a = this.handleAreaArr(),
                n = this.getInsteadIndex(e);
            return a && e.length > 0 && e.splice(n, 1, a), r.default.createElement("div", {
                id: "subNav",
                className: u.default.sub_box
            }, r.default.createElement("ul", {
                className: u.default.sub_nav
            }, e.map((e, a) => r.default.createElement("li", {
                key: a,
                style: {
                    width: `${99/t}%`
                }
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: s.rel,
                title: e.title
            }, e.title)))))
        }
    }(0, l.default)(c, "propTypes", {
        content: d.default.array,
        subNavArea: d.default.array
    });
    var f = (0, i.default)(c);
    t.default = f
}, , function(e, t, a) {
    e.exports = {
        navigation: "navigation-NAKL1uDO clearfix"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(725)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.length;
            return r.default.createElement("ul", {
                id: "nav",
                className: u.default.navigation
            }, e.map((e, a) => r.default.createElement("li", {
                key: a,
                style: {
                    width: `${99/t}%`
                }
            }, r.default.createElement("a", {
                href: e.url,
                target: "_blank",
                rel: i.rel,
                title: e.title
            }, e.title))))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        nav: "nav-2qn54By6",
        bgnone: "bgnone-2Mhg2dxw",
        ssr_nav: "ssr_nav-2nIRu5Rp"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(728)),
        i = n(a(6)),
        s = n(a(4)),
        c = n(a(726)),
        f = n(a(723));
    class m extends r.default.PureComponent {
        render() {
            const e = this.props,
                t = e.content,
                a = t.nav,
                n = t.subNav,
                l = t.subNavArea,
                u = e.turnRed;
            return r.default.createElement(r.default.Fragment, null, r.default.createElement("div", {
                className: `${u?o.default.bgnone:o.default.nav}`
            }, r.default.createElement(i.default, {
                id: "50056",
                type: "struct",
                title: "主导航",
                groupName: "导航栏",
                content: a
            }, r.default.createElement(c.default, null))), r.default.createElement(d.default, {
                onSSR: r.default.createElement("div", {
                    className: o.default.ssr_nav
                })
            }, r.default.createElement(i.default, {
                id: "50057",
                type: "struct",
                title: "副导航",
                groupName: "导航栏",
                content: n
            }, r.default.createElement(f.default, {
                subNavArea: l
            }))))
        }
    }(0, l.default)(m, "propTypes", {
        content: u.default.object,
        turnRed: u.default.bool
    });
    var p = (0, s.default)(m);
    t.default = p
}, , function(e, t, a) {
    e.exports = {
        donate: "donate-EqQnpBmZ"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(731)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.url,
                a = e.title,
                n = e.src,
                l = e.width,
                d = e.height;
            return r.default.createElement("div", {
                className: u.default.donate
            }, r.default.createElement("a", {
                href: t,
                target: "_blank",
                rel: i.rel,
                title: a
            }, r.default.createElement("img", {
                src: n,
                width: l,
                height: d,
                alt: a,
                title: a
            })))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        Logo: "Logo-3LvcI1cY"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(734)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.url,
                a = e.title,
                n = e.src,
                l = e.width,
                d = e.height;
            return r.default.createElement("div", {
                className: u.default.Logo
            }, r.default.createElement("a", {
                href: t,
                target: "_blank",
                rel: i.rel,
                title: a
            }, r.default.createElement("img", {
                src: n,
                width: l,
                height: d,
                alt: a,
                title: a
            })))
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.object
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        wljd: "wljd-3YswhEVB",
        sh: "sh-2SC__Jiy",
        jb: "jb-3V9w3_m7",
        child: "child-3VrjfX_s"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(2)),
        u = n(a(737)),
        o = n(a(4)),
        i = a(5);
    class s extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                current: 0
            })
        }
        componentDidMount() {
            const e = this.props.content;
            let t = 0;
            this.timer = setInterval(() => {
                this.setState({
                    current: t
                }), t === e.length - 1 ? t = 0 : t += 1
            }, 5e3)
        }
        componentWillUnmount() {
            clearInterval(this.timer)
        }
        render() {
            const e = this.state.current,
                t = this.props.content;
            return r.default.createElement("a", {
                className: u.default.wljd,
                style: {
                    background: `url(${t[e].src})`
                },
                href: t[e].url,
                target: "_blank",
                rel: i.rel
            })
        }
    }(0, l.default)(s, "propTypes", {
        content: d.default.array
    });
    var c = (0, o.default)(s);
    t.default = c
}, , function(e, t, a) {
    e.exports = {
        header: "header-17SnDSim clearfix",
        login: "login-1KJn-1AA",
        user: "user-1dWP8hb2",
        ifeng: "ifeng-2crzasFQ",
        phtv: "phtv-3mgojJK4",
        line: "line-1kk_G6V6"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(740)),
        i = n(a(6)),
        s = n(a(4)),
        c = n(a(70)),
        f = n(a(93)),
        m = n(a(738)),
        p = n(a(735)),
        h = n(a(732)),
        g = a(5);
    class v extends r.default.PureComponent {
        render() {
            const e = this.props.content,
                t = e.logo,
                a = e.danate,
                n = e.search,
                l = e.jubaoData,
                u = (0, s.default)(f.default);
            return r.default.createElement("div", {
                id: "main_nav",
                className: o.default.header
            }, r.default.createElement(i.default, {
                id: "50138",
                type: "struct",
                title: "举报信息",
                groupName: "顶部",
                content: l,
                user: "dev"
            }, r.default.createElement(m.default, null)), r.default.createElement(i.default, {
                id: "50088",
                type: "struct",
                title: "凤凰公益",
                groupName: "顶部",
                content: a
            }, r.default.createElement(h.default, null)), r.default.createElement(i.default, {
                id: "50055",
                type: "struct",
                title: "logo",
                groupName: "顶部",
                content: t
            }, r.default.createElement(p.default, null)), r.default.createElement("div", {
                className: o.default.login
            }, r.default.createElement("div", {
                className: o.default.user
            }, r.default.createElement(d.default, null, r.default.createElement(c.default, {
                iconShow: !0,
                option: ["login", "register"]
            }))), r.default.createElement("div", {
                className: o.default.line
            }), r.default.createElement("div", {
                className: o.default.search
            }, r.default.createElement(i.default, {
                id: "20005",
                type: "struct",
                title: "搜索",
                groupName: "顶部",
                content: n
            }, r.default.createElement(u, {
                expand: !0
            }))), r.default.createElement("div", {
                className: o.default.line
            }), r.default.createElement("div", {
                className: o.default.ifeng
            }, r.default.createElement("a", {
                href: "//a.ifeng.com/?from=home",
                target: "_blank",
                rel: g.rel
            }, "手机看新闻")), r.default.createElement("div", {
                className: o.default.line
            }), r.default.createElement("div", {
                className: o.default.phtv
            }, r.default.createElement("a", {
                href: "http://phtv.ifeng.com/english.shtml",
                target: "_blank",
                rel: g.rel,
                "sign-trs-href": "http://phtv.ifeng.com/english.shtml"
            }, "PHOENIX TV"))))
        }
    }(0, l.default)(v, "propTypes", {
        content: u.default.object
    });
    var _ = (0, s.default)(v);
    t.default = _
}, , function(e, t, a) {
    e.exports = {
        ipad_layout: "ipad_layout-I3qDeHtY",
        layout: "layout-2QlrJZv-",
        topAd0: "topAd0-1LS8nYje",
        bottomAd1: "bottomAd1-1d529209"
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var l = n(a(3)),
        r = n(a(1)),
        d = n(a(15)),
        u = n(a(2)),
        o = n(a(743)),
        i = n(a(6)),
        s = n(a(28)),
        c = n(a(33)),
        f = a(8),
        m = n(a(10)),
        p = n(a(4)),
        h = n(a(741)),
        g = n(a(729)),
        v = n(a(720)),
        _ = n(a(714)),
        y = n(a(636)),
        E = n(a(605)),
        b = n(a(572)),
        x = n(a(546)),
        N = n(a(531)),
        w = n(a(504)),
        j = n(a(486)),
        T = n(a(468)),
        C = n(a(453)),
        k = n(a(435)),
        S = n(a(420)),
        A = n(a(417)),
        P = n(a(414)),
        L = n(a(411)),
        O = n(a(408));
    class D extends r.default.PureComponent {
        constructor(...e) {
            super(...e), (0, l.default)(this, "state", {
                turnRed: !!(this.props.content && this.props.content.topImg && this.props.content.topImg.isShow) && this.props.content.topImg.isShow
            }), (0, l.default)(this, "handleCloseTurnRed", () => {
                this.setState({
                    turnRed: !1
                })
            }), (0, l.default)(this, "handleClick", e => {
                const t = this.getATag(e.target);
                if (!t) return;
                let a = (t.attributes["sign-trs-href"] ? t.attributes["sign-trs-href"].value : "") || (t.attributes.href ? t.attributes.href.value : "");
                if (a && "undefined" !== a && "" !== a && "#" !== a && -1 === a.indexOf("javascript:")) {
                    a = a.trim();
                    const e = location.search,
                        n = location.hash;
                    t.setAttribute("sign-trs-href", a);
                    let l = "",
                        r = !1;
                    const d = ["//dol.deliver.ifeng.com/"];
                    for (let t = 0, o = d.length; t < o; t++) a.indexOf(d[t]) > -1 && (r = !0);
                    const u = this.getParam(e, n);
                    (e || n) && u && !r && (l = a.indexOf("?") > -1 ? `${a}&${u}` : `${a}?${u}`, t.setAttribute("href", l))
                }
            }), (0, l.default)(this, "getATag", e => e ? "A" !== e.tagName ? this.getATag(e.parentElement) : e : null), (0, l.default)(this, "getSign", (e, t) => {
                const a = e.split("#");
                for (let n = 0; n < a.length; n++) {
                    const e = a[n];
                    if (-1 === e.indexOf("_")) continue;
                    const l = e.split("?");
                    for (let a = 0; a < l.length; a++) {
                        const e = l[a];
                        if (-1 === e.indexOf("_")) continue;
                        const n = e.split("&");
                        for (let a = 0; a < n.length; a++) {
                            const e = n[a];
                            if (-1 === e.indexOf("_")) continue;
                            const l = e.split("|");
                            for (let a = 0; a < l.length; a++) {
                                const e = l[a];
                                0 === e.indexOf("_") && ("" === t ? t += e : t = `${t}&${e}`)
                            }
                        }
                    }
                }
                return t
            }), (0, l.default)(this, "getParam", (e, t) => {
                let a = "";
                return e.indexOf("_zbs") > -1 && (a = this.getSign(e, a)), t.indexOf("_zbs") > -1 && (a = this.getSign(t, a)), a
            })
        }
        componentDidMount() {
            window && window.BJ_REPORT && window.BJ_REPORT.firstScreen(), this.unHandleClick = (0, f.addEventListener)(document, "click", this.handleClick)
        }
        componentWillUnmount() {
            this.unHandleClick()
        }
        render() {
            const e = this.state.turnRed,
                t = this.props.content,
                a = {
                    isIpad: !!t.isIpad && t.isIpad,
                    topImg: t.topImg ? t.topImg : {}
                },
                n = {
                    logo: t.logo,
                    danate: t.donate,
                    search: t.search,
                    jubaoData: t.jubaoData
                },
                l = {
                    nav: t.navigation,
                    subNav: t.subNavigation,
                    subNavArea: t.subNavArea
                },
                u = {
                    content: t.recommendImage,
                    bannerAd: t.bannerAd
                },
                f = {
                    newsSiderData: {
                        newsSiderTitle0: t.newsSiderTitle0,
                        newsSiderContent0: t.newsSiderContent0,
                        newsSiderContent1: t.newsSiderContent1,
                        newsSiderContent2: t.newsSiderContent2,
                        newsSiderContent3: t.newsSiderContent3,
                        newsSiderContentList: t.newsSiderContentList,
                        newsSiderAd: t.newsSiderAd,
                        ipadAd0: t.ipadAd0
                    },
                    newsData: {
                        newsBoxData: {
                            newsTopData: {
                                newsTitle: t.newsTitle,
                                newsTitleAd: t.newsTitleAd,
                                newContent: {
                                    newsContent0: t.newsContent0,
                                    newsContent1: t.newsContent1,
                                    newsContent2: t.newsContent2,
                                    newsContent3: t.newsContent3
                                },
                                newsListAd: t.newsListAd
                            },
                            liveAd: t.liveAd
                        },
                        slideData: {
                            slidesTab: t.slidesTab,
                            slideContent: {
                                slidesNews: t.slidesNews,
                                slidesEnt: t.slidesEnt,
                                slidesSport: t.slidesSport,
                                slidesAuto: t.slidesAuto,
                                slidesFashion: t.slidesFashion,
                                slidesMil: t.slidesMil,
                                slidesHouse: t.slidesHouse,
                                slidesVideo: t.slidesVideo,
                                slidesGames: t.slidesGames
                            }
                        },
                        videoBoxData: {
                            videoTitle: t.videoTitle,
                            videoContent0: t.videoContent0,
                            videoContent1: t.videoContent1,
                            videoContent2: t.videoContent2,
                            videoWSContent: t.videoWSContent,
                            videoJSContent: t.videoJSContent,
                            videoLSContent: t.videoLSContent,
                            videoWHContent: t.videoWHContent,
                            videoCJContent: t.videoCJContent,
                            videoKJContent: t.videoKJContent,
                            videoPEContent: t.videoPEContent,
                            videoFFHContent: t.videoFFHContent,
                            videoGGContent: t.videoGGContent,
                            videoListAd: t.videoListAd
                        },
                        newsAndVideoAd0: t.newsAndVideoAd0,
                        newsAndVideoAd1: t.newsAndVideoAd1,
                        newsAndVideoAd2: t.newsAndVideoAd2
                    }
                },
                p = {
                    fpNewsSiderData: {
                        fpNewsSiderTitle: t.fpNewsSiderTitle,
                        fpNewsSiderStockImg: t.fpNewsSiderStockImg,
                        fpNewsSiderStockSearch: t.fpNewsSiderStockSearch,
                        fpNewsSiderList: t.fpNewsSiderList,
                        fpNewsSiderContent: t.fpNewsSiderContent
                    },
                    fpNewsData: {
                        financeData: {
                            financeTopic: t.financeTopic,
                            financeTitle0: t.financeTitle0,
                            financeTitle1: t.financeTitle1,
                            financeList0: t.financeList0,
                            financeList1: t.financeList1,
                            financeList2: t.financeList2,
                            financeList3: t.financeList3,
                            financeListAd: t.financeListAd
                        },
                        peData: {
                            peTopic: t.peTopic,
                            peTitle: t.peTitle,
                            peContent0: t.peContent0,
                            peContent1: t.peContent1,
                            peListAd: t.peListAd
                        },
                        financeAndPeAd: t.financeAndPeAd
                    }
                },
                D = {
                    aeNewsSiderData: {
                        aeNewsSiderTitle: t.aeNewsSiderTitle,
                        aeNewsSiderContent0: t.aeNewsSiderContent0,
                        aeNewsSiderContent1: t.aeNewsSiderContent1,
                        aeNewsSiderContent2: t.aeNewsSiderContent2,
                        autoAndEntSiderAd: t.autoAndEntSiderAd,
                        ipadAd1: t.ipadAd1
                    },
                    aeNewsData: {
                        autoData: {
                            autoTopic: t.autoTopic,
                            autoTitle0: t.autoTitle0,
                            autoTitle1: t.autoTitle1,
                            autoList0: t.autoList0,
                            autoList1: t.autoList1,
                            autoList2: t.autoList2,
                            autoListAd: t.autoListAd
                        },
                        entData: {
                            entTopic: t.entTopic,
                            entTitle: t.entTitle,
                            entList: t.entList,
                            entBoxData: t.entBoxData,
                            entVideoList: t.entVideoList,
                            entVideoBoxData: t.entVideoBoxData,
                            entListAd: t.entListAd
                        },
                        autoAndEntAd0: t.autoAndEntAd0,
                        autoAndEntAd1: t.autoAndEntAd1,
                        autoAndEntAd2: t.autoAndEntAd2
                    }
                },
                z = {
                    hgNewsSiderData: {
                        hgNewsSiderTitle: t.hgNewsSiderTitle,
                        hgNewsSiderContent: t.hgNewsSiderContent,
                        hgNewsSiderTabs: t.hgNewsSiderTabs
                    },
                    hgNewsData: {
                        historyData: {
                            historyTopic: t.historyTopic,
                            historyTitle: t.historyTitle,
                            historyList0: t.historyList0,
                            historyList1: t.historyList1
                        },
                        gameData: {
                            gameTopic: t.gameTopic,
                            gameTitle: t.gameTitle,
                            gameList0: t.gameList0,
                            gameList1: t.gameList1,
                            gameList2: t.gameList2
                        }
                    }
                },
                M = {
                    pfNewsSiderData: {
                        pfNewsSiderAd: t.pfNewsSiderAd,
                        ipadAd2: t.ipadAd2
                    },
                    pfNewsData: {
                        pitData: {
                            pitTopic: t.pitTopic,
                            pitTitle0: t.pitTitle0,
                            pitTitle1: t.pitTitle1,
                            pitList0: t.pitList0,
                            pitList1: t.pitList1,
                            pitList2: t.pitList2
                        },
                        foodData: {
                            foodTopic: t.foodTopic,
                            foodTitle: t.foodTitle,
                            foodList0: t.foodList0,
                            foodList1: t.foodList1
                        },
                        pitAndFoodAd: t.pitAndFoodAd
                    }
                },
                I = {
                    houseAreaMap: t.houseAreaMap,
                    hbNewsSiderData: {
                        hbNewsSiderContent: t.hbNewsSiderContent,
                        hbNewsSiderAd: t.hbNewsSiderAd,
                        ipadAd3: t.ipadAd3
                    },
                    hbNewsData: {
                        homeData: {
                            homeTopic: t.homeTopic,
                            homeTitle0: t.homeTitle0,
                            homeTitle1: t.homeTitle1,
                            homeList0: t.homeList0,
                            homeList1: t.homeList1,
                            homeList2: t.homeList2
                        },
                        bookData: {
                            bookTopic: t.bookTopic,
                            bookTitle: t.bookTitle,
                            bookList0: t.bookList0,
                            bookList1: t.bookList1
                        },
                        homeAndBookAd0: t.homeAndBookAd0,
                        homeAndBookAd1: t.homeAndBookAd1,
                        homeAndBookAd2: t.homeAndBookAd2
                    }
                },
                R = {
                    ftNewsSiderData: {
                        ftNewsSiderContent: t.ftNewsSiderContent,
                        ftNewsSiderAd: t.ftNewsSiderAd,
                        ipadAd4: t.ipadAd4
                    },
                    ftNewsData: {
                        fashionData: {
                            fashionTopic: t.fashionTopic,
                            fashionTitle: t.fashionTitle,
                            fashionList: t.fashionList,
                            fashionBoxData: t.fashionBoxData,
                            fashionListAd: t.fashionListAd
                        },
                        travelData: {
                            travelTopic: t.travelTopic,
                            travelTitle: t.travelTitle,
                            travelList0: t.travelList0,
                            travelList1: t.travelList1
                        },
                        fashionAndTravelAd: t.fashionAndTravelAd
                    }
                },
                B = {
                    tgNewsSiderData: {
                        tgNewsSiderContent: t.tgNewsSiderContent,
                        tgNewsSiderAd: t.tgNewsSiderAd,
                        ipadAd5: t.ipadAd5
                    },
                    tgNewsData: {
                        techData: {
                            techTopic: t.techTopic,
                            techTitle0: t.techTitle0,
                            techTitle1: t.techTitle1,
                            techList0: t.techList0,
                            techList1: t.techList1,
                            techList2: t.techList2,
                            techListAd: t.techListAd
                        },
                        guoxueData: {
                            guoxueTopic: t.guoxueTopic,
                            guoxueTitle: t.guoxueTitle,
                            guoxueList0: t.guoxueList0,
                            guoxueList1: t.guoxueList1
                        },
                        techAndGuoxueAd0: t.techAndGuoxueAd0,
                        techAndGuoxueAd1: t.techAndGuoxueAd1
                    }
                },
                q = {
                    dfNewsSiderData: {
                        dfNewsSiderAd: t.dfNewsSiderAd,
                        ipadAd6: t.ipadAd6
                    },
                    dfNewsData: {
                        digitalData: {
                            digitalTopic: t.digitalTopic,
                            digitalTitle: t.digitalTitle,
                            digitalList0: t.digitalList0,
                            digitalList1: t.digitalList1
                        },
                        foData: {
                            foTopic: t.foTopic,
                            foTitle: t.foTitle,
                            foList0: t.foList0,
                            foList1: t.foList1
                        },
                        digitalAndFoAd: t.digitalAndFoAd
                    }
                },
                F = {
                    ffNewsSiderData: {
                        ffNewsSiderContent: t.ffNewsSiderContent,
                        ffNewsSiderTabs: t.ffNewsSiderTabs,
                        ffNewsSiderAd: t.ftNewsSiderAd
                    },
                    ffNewsData: {
                        ffhData: {
                            ffhTopic: t.ffhTopic,
                            ffhTitle: t.ffhTitle,
                            ffhList: t.ffhList,
                            ffhBoxData: t.ffhBoxData
                        },
                        fictionData: {
                            fictionTopic: t.fictionTopic,
                            fictionTitle: t.fictionTitle,
                            fictionList0: t.fictionList0,
                            fictionList1: t.fictionList1
                        }
                    }
                },
                V = {
                    vsNewsSiderData: {
                        vsNewsSiderTitle: t.vsNewsSiderTitle,
                        vsNewsSiderTips: t.vsNewsSiderTips,
                        vsNewsSiderContent0: t.vsNewsSiderContent0,
                        vsNewsSiderContent1: t.vsNewsSiderContent1
                    },
                    vsNewsData: {
                        vipData: {
                            vipTopic: t.vipTopic,
                            vipTitle: t.vipTitle,
                            vipList0: t.vipList0,
                            vipList1: t.vipList1,
                            vipBoxData0: t.vipBoxData0,
                            vipBoxData1: t.vipBoxData1
                        },
                        shopData: {
                            shopTopic: t.shopTopic,
                            shopTitle: t.shopTitle,
                            shopList0: t.shopList0,
                            shopList1: t.shopList1
                        }
                    }
                },
                $ = {
                    qrCode: t.qrCode
                },
                H = {
                    floatAd1: t.floatAd1,
                    floatAd2: t.floatAd2,
                    floatAd3: t.floatAd3,
                    floatAd4: t.floatAd4,
                    floatAd5: t.floatAd5,
                    floatAd6: t.floatAd6,
                    floatAd7: t.floatAd7
                };
            return r.default.createElement("div", {
                className: a.isIpad ? o.default.ipad_layout : o.default.layout
            }, r.default.createElement(d.default, null, r.default.createElement(i.default, {
                id: "50128",
                type: "struct",
                title: "页面飘红配置",
                groupName: "页面飘红配置",
                content: a.topImg
            }, r.default.createElement(L.default, {
                isIpad: a.isIpad,
                turnRed: e,
                handleCloseTurnRed: this.handleCloseTurnRed
            }))), r.default.createElement(h.default, {
                content: n
            }), r.default.createElement(g.default, {
                content: l,
                turnRed: e
            }), r.default.createElement(d.default, null, t.topAd0 ? r.default.createElement(m.default, {
                content: t.topAd0,
                styleName: `${o.default.topAd0} topAd0`
            }) : "", t.topAd1 ? r.default.createElement(m.default, {
                content: t.topAd1
            }) : ""), r.default.createElement(v.default, {
                content: u
            }), r.default.createElement(_.default, {
                content: f
            }), r.default.createElement(y.default, {
                content: p
            }), r.default.createElement(E.default, {
                content: D
            }), r.default.createElement(b.default, {
                content: z
            }), r.default.createElement(x.default, {
                content: M
            }), r.default.createElement(N.default, {
                content: I
            }), r.default.createElement(w.default, {
                content: R
            }), r.default.createElement(j.default, {
                content: B
            }), r.default.createElement(T.default, {
                content: q
            }), r.default.createElement(C.default, {
                content: F
            }), r.default.createElement(k.default, {
                content: V
            }), t.bottomAd1 ? r.default.createElement(m.default, {
                content: t.bottomAd1,
                styleName: o.default.bottomAd1
            }) : "", r.default.createElement(d.default, null, r.default.createElement(i.default, {
                id: "40008",
                type: "static",
                title: "底部版权",
                groupName: "底部",
                content: t.footer
            }, r.default.createElement(S.default, null)), r.default.createElement(i.default, {
                id: "50109",
                type: "struct",
                title: "二维码",
                groupName: "二维码",
                content: $
            }, r.default.createElement(A.default, null)), r.default.createElement(P.default, {
                content: H
            }), r.default.createElement(O.default, null)), r.default.createElement(s.default, {
                transform: c.default
            }))
        }
    }(0, l.default)(D, "propTypes", {
        content: u.default.object
    });
    var z = (0, p.default)(D);
    t.default = z
}, , function(e, t, a) {}, function(e, t, a) {
    "use strict";
    var n = a(0);
    a(65), a(64), a(63), a(62), a(61), a(60), a(59), a(47), a(58), a(57), a(56), a(55), a(54), a(53), a(52), a(51), a(50), a(49), a(46);
    var l = n(a(1)),
        r = n(a(13));
    a(746);
    var d = n(a(744));
    r.default.hydrate(l.default.createElement(d.default, {
        content: allData
    }), document.getElementById("root"))
}]);
//# sourceMappingURL=pc_view.636f8938_modern.js.map