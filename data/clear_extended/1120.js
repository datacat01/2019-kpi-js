! function e(t, n, r) {
    function a(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var s = "function" == typeof require && require;
                if (!u && s) return s(o, !0);
                if (i) return i(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var f = n[o] = {
                exports: {}
            };
            t[o][0].call(f.exports, function(e) {
                var n = t[o][1][e];
                return a(n ? n : e)
            }, f, f.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) a(r[o]);
    return a
}({
    1: [function(t, module, r) {
        var a = 0,
            s = 1,
            c = 2;

        function v(t) {
            return this instanceof v ? (this._state = a, this._onFulfilled = [], this._onRejected = [], this._value = null, this._reason = null, w(t) && t(y(this.resolve, this), y(this.reject, this)), void 0) : new v(t)
        }

        function p(t, r) {
            if (t === r) return t.reject(new TypeError("A promise cannot be resolved with itself.")), void 0;
            if (b(r)) try {
                r.then(function(r) {
                    p(t, r)
                }, function(r) {
                    t.reject(r)
                })
            } catch (e) {
                t.reject(e)
            } else t.resolve(r)
        }

        function h(t, r, a) {
            return function(s) {
                if (w(r)) try {
                    var c = r(s);
                    p(t, c)
                } catch (e) {
                    t.reject(e)
                } else t[a](s)
            }
        }
        v.prototype = {
            constructor: v,
            then: function(t, r) {
                var a = new v;
                return this._onFulfilled.push(h(a, t, "resolve")), this._onRejected.push(h(a, r, "reject")), this.flush(), a
            },
            flush: function() {
                var t = this._state;
                if (t !== a) {
                    var r = t === s ? this._onFulfilled.slice() : this._onRejected.slice(),
                        c = t === s ? this._value : this._reason;
                    setTimeout(function() {
                        A(r, function(t) {
                            try {
                                t(c)
                            } catch (e) {}
                        })
                    }, 0), this._onFulfilled = [], this._onRejected = []
                }
            },
            resolve: function(t) {
                this._state === a && (this._state = s, this._value = t, this.flush())
            },
            reject: function(t) {
                this._state === a && (this._state = c, this._reason = t, this.flush())
            },
            always: function(t) {
                return this.then(t, t)
            }
        }, v.defer = function() {
            var t = {};
            return t.promise = new v(function(r, a) {
                t.resolve = r, t.reject = a
            }), t
        }, v.all = function(t) {
            var r = v.defer(),
                a = t.length,
                s = [];
            return A(t, function(t, i) {
                t.then(function(t) {
                    s[i] = t, a--, 0 === a && r.resolve(s)
                }, function(t) {
                    r.reject(t)
                })
            }), r.promise
        };

        function b(t) {
            return t && w(t.then)
        }

        function y(t, r) {
            var a = [].slice,
                s = a.call(arguments, 2),
                c = function() {},
                v = function() {
                    return t.apply(this instanceof c ? this : r, s.concat(a.call(arguments)))
                };
            return c.prototype = t.prototype, v.prototype = new c, v
        }
        var w = S("Function");

        function S(t) {
            return function(r) {
                return {}.toString.call(r) == "[object " + t + "]"
            }
        }

        function A(t, r) {
            for (var i = 0, a = t.length; a > i; i++) r(t[i], i)
        }
        module.exports = v
    }, {}],
    2: [function(t, module, r) {
        var a = t("./util"),
            s = {
                SendMethod: 8,
                LogVal: "collinaua",
                Token: (new Date).getTime() + ":" + Math.random(),
                MaxMCLog: 10,
                MaxKSLog: 10,
                MaxMPLog: 10,
                MaxTCLog: 10,
                MaxFocusLog: 1,
                Sync: !0
            },
            c = ".alicdn.com",
            g = "g" + c,
            v = "af" + c,
            p = "aeis" + c,
            h = "aeu" + c,
            b = {
                cn: {
                    umid: g,
                    uac: v
                },
                us: {
                    umid: p,
                    uac: h
                },
                aliapp: {
                    umid: p,
                    uac: h
                },
                usaliapp: {
                    umid: p,
                    uac: h
                },
                "in": {
                    umid: p,
                    uac: h
                },
                sg: {
                    umid: p,
                    uac: h
                },
                lazada: {
                    umid: p,
                    uac: h
                }
            },
            y = w().getAttribute("data-env") || "cn";

        function w() {
            for (var t = document.getElementsByTagName("script"), r = /ctlv?\.js/, a, i = 0; i < t.length; i++)
                if (a = S(t[i]), r.test(a)) return t[i];
            return t[t.length - 1]
        }

        function S(t) {
            return t.hasAttribute ? t.src : t.getAttribute("src", 4)
        }
        module.exports = {
            env: y,
            url: b[y],
            map: {
                def: a.extend({
                    Flag: 1670350
                }, s),
                pc: a.extend({
                    Flag: 97422
                }, s),
                h5: a.extend({
                    Flag: 1670350
                }, s)
            }
        }
    }, {
        "./util": 5
    }],
    3: [function(t, module, r) {
        module.exports = function(t) {
            var r = [],
                a, f = !1,
                s = document,
                c = s.documentElement,
                v = c.doScroll,
                p = "DOMContentLoaded",
                h = "addEventListener",
                b = "onreadystatechange",
                y = "readyState",
                w = v ? /^loaded|^c/ : /^loaded|c/,
                S = w.test(s[y]);

            function A(f) {
                for (S = 1; f = r.shift();) f()
            }
            return s[h] && s[h](p, a = function() {
                s.removeEventListener(p, a, f), A()
            }, f), v && s.attachEvent(b, a = function() {
                /^c/.test(s[y]) && (s.detachEvent(b, a), A())
            }), t = v ? function(a) {
                self != top ? S ? a() : r.push(a) : function() {
                    try {
                        c.doScroll("left")
                    } catch (e) {
                        return setTimeout(function() {
                            t(a)
                        }, 50)
                    }
                    a()
                }()
            } : function(t) {
                S ? t() : r.push(t)
            }
        }()
    }, {}],
    4: [function(t, module, r) {
        var a = t("./Promise"),
            s = t("./config"),
            c = t("./util"),
            v = t("./domready"),
            p = window,
            h = p.ctl,
            b = p.UA_Opt = p.UA_Opt || {},
            y = p.ctl = {
                noConflict: function() {
                    return p.ctl === y && (p.ctl = h), y
                },
                config: function(t, r) {
                    return p.UA_Opt && p.UA_Opt.LogVal ? void 0 : (b = p.UA_Opt = p.UA_Opt || {}, r || (r = t, t = "def"), t = (t + "").toLowerCase(), r = c.extend(b, s.map[t] || s.map.def, r || {}), b.LogVal && (p[b.LogVal] = ""), r)
                },
                getUA: function() {
                    b = p.UA_Opt = p.UA_Opt || {};
                    var t = b.Token;
                    b.Token = (new Date).getTime() + ":" + Math.random();
                    var r = T();
                    return b.Token = t, b.reload && b.reload(), r
                },
                getUmidToken: function() {
                    try {
                        return umx.getToken()
                    } catch (e) {
                        return ""
                    }
                },
                getUmidInstance: function() {
                    return M
                },
                ready: function(t, r) {
                    return j.promise.then(t, r), j.promise
                }
            };
        y.config();
        var w = null,
            S = a.defer(),
            A = a.defer(),
            x = S.promise,
            k = A.promise;
        ! function(t, r) {
            var a = 1e4,
                g_moduleConfig = {
                    uabModule: {
                        stable: ["AWSC/uab/115.js"],
                        grey: ["AWSC/uab/116.js"],
                        ratio: 5
                    },
                    umidPCModule: {
                        stable: ["AWSC/WebUMID/1.70.2/um.js"],
                        grey: ["AWSC/WebUMID/1.71.7/um.js"],
                        ratio: 10000
                    },
                    ncPCModule: {
                        stable: ["js/nc/60.js"],
                        grey: ["js/nc/60.js"],
                        ratio: 1e4
                    },
                    ncH5Module: {
                        stable: ["js/nc/60.js"],
                        grey: ["js/nc/60.js"],
                        ratio: 1e4
                    }
                },
                s = [{
                    name: "umidPCModule",
                    features: ["umpc", "um", "umh5"],
                    depends: [],
                    sync: !1
                }, {
                    name: "uabModule",
                    features: ["uab"],
                    depends: [],
                    sync: !1
                }, {
                    name: "nsModule",
                    features: ["ns"],
                    depends: [],
                    sync: !1
                }, {
                    name: "ncPCModule",
                    features: ["ncPC", "scPC"],
                    depends: ["uab", "umpc"],
                    sync: !0
                }, {
                    name: "ncH5Module",
                    features: ["ncH5", "scH5"],
                    depends: ["uab", "umh5"],
                    sync: !0
                }];

            function c(r, s) {
                var c = "AWSC_SPECIFY_" + r.toUpperCase() + "_ADDRESSES";
                if (t[c]) return t[c];
                var v = [];
                for (var p in g_moduleConfig)
                    if (g_moduleConfig.hasOwnProperty(p) && p === r) {
                        var moduleConfig = g_moduleConfig[p];
                        v = Math.ceil(Math.random() * a) <= moduleConfig.ratio ? moduleConfig.grey : moduleConfig.stable;
                        for (var h = (new Date).getDate(), b = 0; b < v.length; b++) {
                            var y = s ? "//" + s + "/" : A;
                            "//assets.alicdn.com/" === y && (y += "g/"), v[b] = y + v[b] + "?d=" + h
                        }
                        return v
                    }
            }
            var v = [],
                p = "loading",
                h = "loaded",
                b = "timeout",
                y = "unexpected",
                w = "no such feature",
                S = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),
                A = x(k());

            function x(t) {
                var r = "//g.alicdn.com/";
                if (!t) return r;
                if (/aliexpress/.test(location.href)) return "//aeis.alicdn.com/";
                var a = S.exec(t);
                return a ? "//" + a[3] + (a[4] ? ":" + a[4] : "") + "/" : r
            }

            function k() {
                for (var t = document.getElementsByTagName("script"), i = 0; i < t.length; i++) {
                    var r = t[i],
                        a = r.hasAttribute ? r.src : r.getAttribute("src", 4);
                    if (/\/awsc\.js/.test(a)) return a
                }
            }

            function j(t) {
                for (var r = void 0, a = 0; a < s.length; a++) {
                    for (var c = s[a], v = 0; v < c.features.length; v++)
                        if (c.features[v] === t) {
                            r = c;
                            break
                        } if (r) break
                }
                return r
            }

            function M(t) {
                for (var r = 0; r < v.length; r++) {
                    var a = v[r];
                    if (a.name === t) return a
                }
            }

            function E(t) {
                for (var r = void 0, a = 0; a < s.length; a++) {
                    var c = s[a];
                    if (c.name === t) {
                        r = c;
                        break
                    }
                    if (r) break
                }
                return r
            }

            function T(t) {
                return /http/.test(location.protocol) || (t = "https:" + t), t
            }

            function I(t, a, s) {
                if (s)
                    for (var c = 0; c < t.length; c++) {
                        var v = t[c];
                        v = T(v), r.write("<script src=" + v + "></script>")
                    } else
                        for (var c = 0; c < t.length; c++) {
                            var v = t[c];
                            v = T(v);
                            var p = r.createElement("script");
                            p.async = !1, p.src = v, p.id = a;
                            var m = r.getElementsByTagName("script")[0];
                            m && m.parentNode ? m.parentNode.insertBefore(p, m) : (m = r.body || r.head, m && m.appendChild(p))
                        }
            }

            function W(r, a, s) {
                var c = "//acjs.aliyun.com/error?v=" + r + "&e=" + encodeURIComponent(a) + "&stack=" + encodeURIComponent(s);
                c = T(c);
                var v = new Image,
                    p = "_awsc_img_" + Math.floor(1e6 * Math.random());
                t[p] = v, v.onload = v.onerror = function() {
                    try {
                        delete t[p]
                    } catch (e) {
                        t[p] = null
                    }
                }, v.src = c
            }

            function O(t, r) {
                Math.random() < 1e-4 && W("awsc_state", "feature=" + t.name + "&state=" + t.state + "&href=" + encodeURIComponent(location.href));
                for (var a = void 0; a = t.callbacks.shift();) try {
                    a(t.state, t.exportObj)
                } catch (e) {
                    if (r) throw e;
                    W(t.name, e.message, e.stack)
                }
            }

            function P(t, r, a) {
                var s = j(t);
                if (!s) return r && r(w), void 0;
                var h = a && a.cdn,
                    y = a && a.sync,
                    S = a && a.timeout || 5e3;
                if (0 !== s.depends.length)
                    for (var A = 0; A < s.depends.length; A++) {
                        var x = s.depends[A];
                        a && (delete a.sync, delete a.timeout, delete a.cdn), U(x, void 0, a)
                    }
                var k = {};
                if (k.module = s, k.name = t, k.state = p, k.callbacks = [], k.options = a, r && k.callbacks.push(r), k.timeoutTimer = setTimeout(function() {
                        k.state = b, O(k, a && a.throwExceptionInCallback)
                    }, S), v.push(k), !s.moduleLoadStatus) {
                    var M = s.sync;
                    y && (M = y);
                    var E = c(s.name, h);
                    I(E, "AWSC_" + s.name, M)
                }
                s.moduleLoadStatus = p
            }

            function U(t, r, a) {
                var s = M(t);
                return s ? (s.state === h || s.state === b ? r && r(s.state, s.exportObj) : s.state === p ? r && s.callbacks.push(r) : void 0, void 0) : (P(t, r, a), void 0)
            }

            function L(t, r, a) {
                var s = !1;
                try {
                    var c = E(t);
                    c || void 0, c.moduleLoadStatus = h;
                    for (var y = void 0, w = 0; w < v.length; w++) {
                        var S = v[w];
                        S.module === c && S.name === r && (s = S.options && S.options.throwExceptionInCallback, y = S, clearTimeout(y.timeoutTimer), delete y.timeoutTimer, y.exportObj = a, S.state === p || S.state === b ? (y.state = h, O(y, s)) : void 0)
                    }
                    y || (y = {}, y.module = c, y.name = r, y.state = h, y.exportObj = a, y.callbacks = [], v.push(y))
                } catch (e) {
                    if (s) throw e;
                    W("awsc_error", e.message, e.stack)
                }
            }

            function R() {
                t.AWSC || (t.AWSC = {}, t.AWSC.use = U, t.AWSCInner = {}, t.AWSCInner.register = L)
            }
            R()
        }(window, document), p.AWSC.use("uab", function(t, r) {
            "loaded" === t && (w = r, S.resolve())
        }, {
            cdn: s.url.uac
        }), p.AWSC.use("um", function(t, r) {
            "loaded" === t && A.resolve()
        }, {
            cdn: s.url.umid
        });
        var j = a.defer(),
            M = null,
            E = a.defer();
        k.then(function() {
            void 0;
            var t = document.getElementById("_umfp");
            M = umx.init({
                serviceLocation: s.env,
                appName: "ctl",
                containers: {
                    flash: t,
                    dcp: t
                },
                callback: function() {
                    void 0, E.resolve()
                }
            })
        }), v(function() {
            var t = k;
            "lazada" === s.env && (t = E.promise), a.all([x, t]).then(function() {
                r();
                var t = setInterval(r, 50);
                j.promise.always(function() {
                    clearInterval(t)
                })
            }, function() {
                j.reject()
            }), setTimeout(function() {
                p.umx ? w || j.reject() : j.reject()
            }, 3e3);

            function r() {
                w && j.resolve()
            }
        });

        function T() {
            var t = p.UA_Opt || b;
            return t.LogVal ? p[t.LogVal] || "" : ""
        }
    }, {
        "./Promise": 1,
        "./config": 2,
        "./domready": 3,
        "./util": 5
    }],
    5: [function(t, module, r) {
        module.exports = {
            extend: function(t) {
                for (var r = [].slice.call(arguments), a = r.length, s, c, i = 1; a > i; i++) {
                    s = r[i];
                    for (c in s) s.hasOwnProperty(c) && ("Flag" === c && t[c] ? t[c] = t[c] | s[c] : t[c] = s[c])
                }
                return t
            }
        }
    }, {}]
}, {}, [4]);