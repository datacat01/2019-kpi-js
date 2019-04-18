/*! permutive-javascript-sdk v5.15.8 (web) (built 2019-04-08 09:35:59 UTC) */ ! function() {
    function lzWorkerFunction() {
        var e = this;
        e.compress = function(e) {
            if (null == e) return "";
            var t, n, r, i = {},
                o = {},
                a = "",
                s = "",
                u = "",
                c = 2,
                l = 3,
                d = 2,
                p = [],
                f = 0,
                m = 0,
                g = String.fromCharCode,
                v = function(e) {
                    return g(e + 32)
                };
            for (r = 0; r < e.length; r += 1)
                if (a = e.charAt(r), Object.prototype.hasOwnProperty.call(i, a) || (i[a] = l++, o[a] = !0), s = u + a, Object.prototype.hasOwnProperty.call(i, s)) u = s;
                else {
                    if (Object.prototype.hasOwnProperty.call(o, u)) {
                        if (u.charCodeAt(0) < 256) {
                            for (t = 0; t < d; t++) f <<= 1, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++;
                            for (n = u.charCodeAt(0), t = 0; t < 8; t++) f = f << 1 | 1 & n, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++, n >>= 1
                        } else {
                            for (n = 1, t = 0; t < d; t++) f = f << 1 | n, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++, n = 0;
                            for (n = u.charCodeAt(0), t = 0; t < 16; t++) f = f << 1 | 1 & n, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++, n >>= 1
                        }
                        0 === --c && (c = Math.pow(2, d), d++), delete o[u]
                    } else
                        for (n = i[u], t = 0; t < d; t++) f = f << 1 | 1 & n, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++, n >>= 1;
                    0 === --c && (c = Math.pow(2, d), d++), i[s] = l++, u = String(a)
                } if ("" !== u) {
                if (Object.prototype.hasOwnProperty.call(o, u)) {
                    if (u.charCodeAt(0) < 256) {
                        for (t = 0; t < d; t++) f <<= 1, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++;
                        for (n = u.charCodeAt(0), t = 0; t < 8; t++) f = f << 1 | 1 & n, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++, n >>= 1
                    } else {
                        for (n = 1, t = 0; t < d; t++) f = f << 1 | n, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++, n = 0;
                        for (n = u.charCodeAt(0), t = 0; t < 16; t++) f = f << 1 | 1 & n, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++, n >>= 1
                    }
                    0 === --c && (c = Math.pow(2, d), d++), delete o[u]
                } else
                    for (n = i[u], t = 0; t < d; t++) f = f << 1 | 1 & n, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++, n >>= 1;
                0 === --c && (c = Math.pow(2, d), d++)
            }
            for (n = 2, t = 0; t < d; t++) f = f << 1 | 1 & n, 14 === m ? (m = 0, p.push(v(f)), f = 0) : m++, n >>= 1;
            for (;;) {
                if (f <<= 1, 14 === m) {
                    p.push(v(f));
                    break
                }
                m++
            }
            return p.join("") + " "
        }, e.decompress = function(e) {
            if (null == e) return "";
            if ("" === e) return null;
            var t, n, r, i, o, a, s, u = e.length,
                c = function(t) {
                    return e.charCodeAt(t) - 32
                },
                l = [],
                d = 4,
                p = 4,
                f = 3,
                m = "",
                g = [],
                v = {
                    val: c(0),
                    position: 16384,
                    index: 1
                },
                h = String.fromCharCode;
            for (t = 0; t < 3; t += 1) l[t] = t;
            for (r = 0, o = Math.pow(2, 2), a = 1; a !== o;) i = v.val & v.position, v.position >>= 1, 0 === v.position && (v.position = 16384, v.val = c(v.index++)), r |= (i > 0 ? 1 : 0) * a, a <<= 1;
            switch (r) {
                case 0:
                    for (r = 0, o = Math.pow(2, 8), a = 1; a !== o;) i = v.val & v.position, v.position >>= 1, 0 === v.position && (v.position = 16384, v.val = c(v.index++)), r |= (i > 0 ? 1 : 0) * a, a <<= 1;
                    s = h(r);
                    break;
                case 1:
                    for (r = 0, o = Math.pow(2, 16), a = 1; a !== o;) i = v.val & v.position, v.position >>= 1, 0 === v.position && (v.position = 16384, v.val = c(v.index++)), r |= (i > 0 ? 1 : 0) * a, a <<= 1;
                    s = h(r);
                    break;
                case 2:
                    return ""
            }
            for (l[3] = s, n = s, g.push(s);;) {
                if (v.index > u) return "";
                for (r = 0, o = Math.pow(2, f), a = 1; a !== o;) i = v.val & v.position, v.position >>= 1, 0 === v.position && (v.position = 16384, v.val = c(v.index++)), r |= (i > 0 ? 1 : 0) * a, a <<= 1;
                switch (s = r) {
                    case 0:
                        for (r = 0, o = Math.pow(2, 8), a = 1; a !== o;) i = v.val & v.position, v.position >>= 1, 0 === v.position && (v.position = 16384, v.val = c(v.index++)), r |= (i > 0 ? 1 : 0) * a, a <<= 1;
                        l[p++] = h(r), s = p - 1, d--;
                        break;
                    case 1:
                        for (r = 0, o = Math.pow(2, 16), a = 1; a !== o;) i = v.val & v.position, v.position >>= 1, 0 === v.position && (v.position = 16384, v.val = c(v.index++)), r |= (i > 0 ? 1 : 0) * a, a <<= 1;
                        l[p++] = h(r), s = p - 1, d--;
                        break;
                    case 2:
                        return g.join("")
                }
                if (0 === d && (d = Math.pow(2, f), f++), l[s]) m = l[s];
                else {
                    if (s !== p) return null;
                    m = n + n.charAt(0)
                }
                g.push(m), l[p++] = n + m.charAt(0), n = m, 0 === --d && (d = Math.pow(2, f), f++)
            }
        }, e.onmessage = function(t) {
            "compress" === t.data.type ? e.postMessage({
                type: "compressed",
                result: e.compress(t.data.value)
            }) : "decompress" === t.data.type && e.postMessage({
                type: "decompressed",
                result: e.decompress(t.data.value)
            })
        }
    }

    function threeYearsFromNow() {
        var e = new Date;
        return e.setFullYear(e.getFullYear() + 3), e.toUTCString()
    }

    function extractDomain(e) {
        var t = e.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/),
            n = e.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,24}$/i),
            r = e.match(/localhost/);
        if (n && n.length > 0) {
            var i = e.split(".").reverse();
            return i.length >= 3 && i[1].match(/^(com|edu|gov|net|mil|org|nom|co|ac|name|info|biz)$/i) ? i[2] + "." + i[1] + "." + i[0] : i[1] + "." + i[0]
        }
        if (t && t.length > 0) return t[0];
        if (r && r.length > 0) return "localhost";
        throw "No domain can be found for cookies"
    }

    function initialiseSDK() {
        function makeSafe(e) {
            return function() {
                try {
                    return e.apply(this, arguments)
                } catch (e) {
                    _internals.error(e)
                }
            }
        }

        function QueryWorker() {
            var e = this,
                t = function() {
                    var e = this && this.__assign || function() {
                            return (e = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++) {
                                    t = arguments[n];
                                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                                }
                                return e
                            }).apply(this, arguments)
                        },
                        t = {
                            k: function(e, t) {
                                return t.reduce(function(e, t) {
                                    return e && e[t] ? e[t] : null
                                }, e)
                            },
                            kf: function(e, t, n) {
                                var r = t.reduce(function(e, t) {
                                    return e && e[t] ? e[t] : null
                                }, e);
                                return null === r ? null : n(r)
                            },
                            ti: function(e) {
                                return e.getTime()
                            },
                            pre: function(e, t) {
                                var n = t.slice();
                                return n.unshift(e), n
                            },
                            a0: function(e, t) {
                                return e && t
                            },
                            o0: function(e, t) {
                                return e || t
                            },
                            n0: function(e) {
                                return !e
                            },
                            t: function(e) {
                                return !0
                            },
                            a: function(e, t) {
                                return function(n) {
                                    return e(n) && t(n)
                                }
                            },
                            o: function(e, t) {
                                return function(n) {
                                    return e(n) || t(n)
                                }
                            },
                            i: function(e) {
                                return e
                            },
                            as: function(e, n, r) {
                                return function(i) {
                                    return r.reduce(function(r, o) {
                                        return r && e(o)(t.k(i, t.pre("properties", n)))
                                    }, !0)
                                }
                            },
                            os: function(e, n, r) {
                                return function(i) {
                                    return r.reduce(function(r, o) {
                                        return r || e(o)(t.k(i, t.pre("properties", n)))
                                    }, !1)
                                }
                            },
                            e: function(e) {
                                return function(t) {
                                    return t === e
                                }
                            },
                            n: function(e) {
                                return function(t) {
                                    return t !== e
                                }
                            },
                            g: function(e) {
                                return function(t) {
                                    return t > e
                                }
                            },
                            ge: function(e) {
                                return function(t) {
                                    return t >= e
                                }
                            },
                            l: function(e) {
                                return function(t) {
                                    return t < e
                                }
                            },
                            le: function(e) {
                                return function(t) {
                                    return t <= e
                                }
                            },
                            b: function(e, t) {
                                return function(n) {
                                    return n >= e && n <= t
                                }
                            },
                            s: function(e) {
                                return function(t) {
                                    return "string" == typeof e && "string" == typeof t && t.toLowerCase().indexOf(e.toLowerCase()) > -1
                                }
                            },
                            c: function(e) {
                                return function(t) {
                                    return null != t && "object" == typeof t && t.indexOf(e) >= 0
                                }
                            },
                            e_: function(e, n) {
                                return function(r) {
                                    return t.k(r, e) === n
                                }
                            },
                            n_: function(e, n) {
                                return function(r) {
                                    return t.k(r, e) !== n
                                }
                            },
                            g_: function(e, n) {
                                return function(r) {
                                    return t.k(r, e) > n
                                }
                            },
                            ge_: function(e, n) {
                                return function(r) {
                                    return t.k(r, e) >= n
                                }
                            },
                            l_: function(e, n) {
                                return function(r) {
                                    return t.k(r, e) < n
                                }
                            },
                            le_: function(e, n) {
                                return function(r) {
                                    return t.k(r, e) <= n
                                }
                            },
                            b_: function(e, n, r) {
                                return function(i) {
                                    return t.k(i, e) >= n && t.k(i, e) <= r
                                }
                            },
                            s_: function(e, n) {
                                return function(r) {
                                    var i = t.k(r, e);
                                    return "string" == typeof n && "string" == typeof i && i.toLowerCase().indexOf(n.toLowerCase()) > -1
                                }
                            },
                            c_: function(e, n) {
                                return function(r) {
                                    var i = t.k(r, e);
                                    return null != i && "object" == typeof i && i.indexOf(n) >= 0
                                }
                            },
                            pe: function(e, n) {
                                return function(r) {
                                    return t.k(r, t.pre("properties", e)) === n
                                }
                            },
                            pn: function(e, n) {
                                return function(r) {
                                    return t.k(r, t.pre("properties", e)) !== n
                                }
                            },
                            pg: function(e, n) {
                                return function(r) {
                                    return t.k(r, t.pre("properties", e)) > n
                                }
                            },
                            pge: function(e, n) {
                                return function(r) {
                                    return t.k(r, t.pre("properties", e)) >= n
                                }
                            },
                            pl: function(e, n) {
                                return function(r) {
                                    return t.k(r, t.pre("properties", e)) < n
                                }
                            },
                            ple: function(e, n) {
                                return function(r) {
                                    return t.k(r, t.pre("properties", e)) <= n
                                }
                            },
                            pb: function(e, n, r) {
                                return function(i) {
                                    return t.k(i, t.pre("properties", e)) >= n && t.k(i, t.pre("properties", e)) <= r
                                }
                            },
                            ps: function(e, n) {
                                return function(r) {
                                    var i = t.k(r, t.pre("properties", e));
                                    return "string" == typeof n && "string" == typeof i && i.toLowerCase().indexOf(n.toLowerCase()) > -1
                                }
                            },
                            pc: function(e, n) {
                                return function(r) {
                                    var i = t.k(r, t.pre("properties", e));
                                    return null != i && "object" == typeof i && i.indexOf(n) >= 0
                                }
                            },
                            te_: function(e, n) {
                                return function(r) {
                                    return t.kf(r, e, t.ti) === n
                                }
                            },
                            tn_: function(e, n) {
                                return function(r) {
                                    return t.kf(r, e, t.ti) !== n
                                }
                            },
                            tg_: function(e, n) {
                                return function(r) {
                                    return t.kf(r, e, t.ti) > n
                                }
                            },
                            tge_: function(e, n) {
                                return function(r) {
                                    return t.kf(r, e, t.ti) >= n
                                }
                            },
                            tl_: function(e, n) {
                                return function(r) {
                                    return t.kf(r, e, t.ti) < n
                                }
                            },
                            tle_: function(e, n) {
                                return function(r) {
                                    return t.kf(r, e, t.ti) <= n
                                }
                            },
                            tb_: function(e, n, r) {
                                return function(i) {
                                    return t.kf(i, e, t.ti) >= n && t.kf(i, e, t.ti) <= r
                                }
                            },
                            te: function(e) {
                                return function(n) {
                                    return t.kf(n, ["time"], t.ti) === e
                                }
                            },
                            tn: function(e) {
                                return function(n) {
                                    return t.kf(n, ["time"], t.ti) !== e
                                }
                            },
                            tg: function(e) {
                                return function(n) {
                                    return t.kf(n, ["time"], t.ti) > e
                                }
                            },
                            tge: function(e) {
                                return function(n) {
                                    return t.kf(n, ["time"], t.ti) >= e
                                }
                            },
                            tl: function(e) {
                                return function(n) {
                                    return t.kf(n, ["time"], t.ti) < e
                                }
                            },
                            tle: function(e) {
                                return function(n) {
                                    return t.kf(n, ["time"], t.ti) <= e
                                }
                            },
                            tb: function(e, n) {
                                return function(r) {
                                    return t.kf(r, ["time"], t.ti) >= e && t.kf(r, ["time"], t.ti) <= n
                                }
                            },
                            af_s: function(e, n, r, i) {
                                return void 0 === i && (i = function(e) {
                                        return !0
                                    }),
                                    function(o) {
                                        return r(t.k(o, e).filter(i).map(function(e) {
                                            return t.k(e, n)
                                        }).reduce(function(e, t) {
                                            return e + t
                                        }, 0))
                                    }
                            },
                            af_p: function(e, n, r, i) {
                                return void 0 === i && (i = function(e) {
                                        return !0
                                    }),
                                    function(o) {
                                        return r(t.k(o, e).filter(i).map(function(e) {
                                            return t.k(e, n)
                                        }).reduce(function(e, t) {
                                            return e * t
                                        }, 1))
                                    }
                            },
                            af_n: function(e, n, r, i) {
                                return void 0 === i && (i = function(e) {
                                        return !0
                                    }),
                                    function(o) {
                                        return r(function(e) {
                                            return e && e.length ? e.map(function(e) {
                                                return t.k(e, n)
                                            }).reduce(function(e, t) {
                                                return Math.min(e, t)
                                            }) : Number.POSITIVE_INFINITY
                                        }(t.k(o, e).filter(i)))
                                    }
                            },
                            af_x: function(e, n, r, i) {
                                return void 0 === i && (i = function(e) {
                                        return !0
                                    }),
                                    function(o) {
                                        return r(function(e) {
                                            return e && e.length ? e.map(function(e) {
                                                return t.k(e, n)
                                            }).reduce(function(e, t) {
                                                return Math.max(e, t)
                                            }) : Number.NEGATIVE_INFINITY
                                        }(t.k(o, e).filter(i)))
                                    }
                            },
                            af_m: function(e, n, r, i) {
                                return void 0 === i && (i = function(e) {
                                        return !0
                                    }),
                                    function(o) {
                                        return r(function(e) {
                                            return e.map(function(e) {
                                                return t.k(e, n)
                                            }).reduce(function(e, t) {
                                                return e + t
                                            }, 0) / e.length
                                        }(t.k(o, e).filter(i)))
                                    }
                            },
                            af_u: function(e, n, r) {
                                return void 0 === r && (r = function(e) {
                                        return !0
                                    }),
                                    function(i) {
                                        return t.k(i, e).filter(r).map(n).reduce(function(e, t) {
                                            return e || t
                                        }, !1)
                                    }
                            },
                            af_i: function(e, n, r) {
                                return void 0 === r && (r = function(e) {
                                        return !0
                                    }),
                                    function(i) {
                                        return t.k(i, e).filter(r).map(n).reduce(function(e, t) {
                                            return e && t
                                        }, !0)
                                    }
                            },
                            af_l: function(e, n, r) {
                                return void 0 === r && (r = function(e) {
                                        return !0
                                    }),
                                    function(i) {
                                        return n(t.k(i, e).filter(r).length)
                                    }
                            },
                            tp: function(e, n, r, i, o) {
                                var a = t.k(e.getSegments(), [n, r]) || !1;
                                return o && (i || a) && e.setThirdPartyActivation(n, r, o), a
                            },
                            sp: function(e, n, r, i, o) {
                                var a = t.k(e.getSegments(), [n, r]) || !1;
                                return o && (i || a) && e.setSegmentActivation(n, r, o), a
                            },
                            oe: function(e) {
                                for (var t = Object.keys(e), n = t.length, r = new Array(n); n--;) r[n] = [t[n], e[t[n]]];
                                return r
                            },
                            lms: function(e, n, r) {
                                var i = e || {},
                                    o = n[r] || {},
                                    a = (o["1p"] || {}).const || 0,
                                    s = t.oe(o);
                                for (var u in s) {
                                    var c = t.oe(s[u][1]);
                                    for (var l in c) !0 === (i[s[u][0]] || {})[c[l][0]] && (a += c[l][1])
                                }
                                return function(e) {
                                    return 1 / (1 + Math.pow(Math.E, -e))
                                }(a)
                            },
                            fm: function(e, t) {
                                return {
                                    p: t.p,
                                    r: function(n, r) {
                                        return e(t.r(n, r))
                                    },
                                    a: t.a
                                }
                            },
                            cq: function(e, t, n) {
                                return {
                                    p: function(e, r) {
                                        return [t.p(e, r), n.p(e, r)]
                                    },
                                    r: function(r, i) {
                                        return e(t.r(r, i[0]), n.r(r, i[1]))
                                    },
                                    a: {
                                        z: [t.a.z, n.a.z],
                                        m: function(e, r) {
                                            return [t.a.m(e[0], r[0]), n.a.m(e[1], r[1])]
                                        }
                                    }
                                }
                            },
                            cw: function(e, n, r) {
                                return void 0 === r && (r = t.i), {
                                    a: {
                                        m: function(e, t) {
                                            return e + t
                                        },
                                        z: 0
                                    },
                                    p: function(r, i) {
                                        return t.k(i, ["name"]) === e && n(i) ? 1 : 0
                                    },
                                    r: function(e, t) {
                                        return r(t)
                                    }
                                }
                            },
                            mxw: function(e, n, r, i) {
                                void 0 === i && (i = t.i);
                                var o = Number.NEGATIVE_INFINITY;
                                return {
                                    a: {
                                        m: function(e, t) {
                                            return e > t ? e : t
                                        },
                                        z: o
                                    },
                                    p: function(i, a) {
                                        return t.k(a, ["name"]) === e && n(a) ? t.k(a, r) : o
                                    },
                                    r: function(e, t) {
                                        return i(t)
                                    }
                                }
                            },
                            vgw: function(e, n, r, i) {
                                void 0 === i && (i = t.i);
                                var o = {
                                    v: 0,
                                    k: 0
                                };
                                return {
                                    a: {
                                        m: function(e, t) {
                                            var n = e.k + t.k;
                                            return {
                                                v: n ? e.v + t.k * (t.v - e.v) / n : 0,
                                                k: n
                                            }
                                        },
                                        z: o
                                    },
                                    p: function(i, a) {
                                        return t.k(a, ["name"]) === e && n(a) ? {
                                            v: t.k(a, r),
                                            k: 1
                                        } : o
                                    },
                                    r: function(e, t) {
                                        return i(t.v)
                                    }
                                }
                            },
                            mnw: function(e, n, r, i) {
                                void 0 === i && (i = t.i);
                                var o = Number.POSITIVE_INFINITY;
                                return {
                                    a: {
                                        m: function(e, t) {
                                            return e < t ? e : t
                                        },
                                        z: o
                                    },
                                    p: function(i, a) {
                                        return t.k(a, ["name"]) === e && n(a) ? t.k(a, r) : o
                                    },
                                    r: function(e, t) {
                                        return i(t)
                                    }
                                }
                            },
                            sw: function(e, n, r, i) {
                                void 0 === i && (i = t.i);
                                return {
                                    a: {
                                        m: function(e, t) {
                                            return e + t
                                        },
                                        z: 0
                                    },
                                    p: function(i, o) {
                                        return t.k(o, ["name"]) === e && n(o) ? t.k(o, r) : 0
                                    },
                                    r: function(e, t) {
                                        return i(t)
                                    }
                                }
                            },
                            pw: function(e, n, r, i) {
                                void 0 === i && (i = t.i);
                                return {
                                    a: {
                                        m: function(e, t) {
                                            return e * t
                                        },
                                        z: 1
                                    },
                                    p: function(i, o) {
                                        return t.k(o, ["name"]) === e && n(o) ? t.k(o, r) : 1
                                    },
                                    r: function(e, t) {
                                        return i(t)
                                    }
                                }
                            },
                            ctw: function(e, n, r, i) {
                                return {
                                    a: i ? {
                                        m: function(e, t) {
                                            return e.concat(t).slice(-i)
                                        },
                                        z: []
                                    } : {
                                        m: function(e, t) {
                                            return e.concat(t)
                                        },
                                        z: []
                                    },
                                    p: function(i, o) {
                                        return t.k(o, ["name"]) === e && n(o) ? t.k(o, r) : []
                                    },
                                    r: function(e, t) {
                                        return t
                                    }
                                }
                            },
                            ctv: function(n, r, i, o) {
                                function a(e, t) {
                                    var n = function(e) {
                                            return {
                                                k: e.k,
                                                c: 1 + e.c
                                            }
                                        },
                                        r = {
                                            arr: [],
                                            add: {
                                                k: t,
                                                c: 1
                                            }
                                        };
                                    return t ? function(e) {
                                        return e.arr.concat(e.add)
                                    }(e.reduce(function(e, t) {
                                        return e.add.k === t.k ? {
                                            arr: e.arr,
                                            add: n(t)
                                        } : {
                                            arr: e.arr.concat(t),
                                            add: e.add
                                        }
                                    }, r)) : e
                                }
                                return {
                                    a: o ? {
                                        m: function(e, t) {
                                            return a(e, t).slice(-o)
                                        },
                                        z: []
                                    } : {
                                        m: function(e, t) {
                                            return a(e, t)
                                        },
                                        z: []
                                    },
                                    p: function(e, o) {
                                        return t.k(o, ["name"]) === n && r(o) ? t.k(o, i) : null
                                    },
                                    r: function(t, n) {
                                        return n.reduce(function(t, n) {
                                            var r;
                                            return e({}, t, (r = {}, r[n.k] = n.c, r))
                                        }, {})
                                    }
                                }
                            },
                            ctu: function(e, n, r, i) {
                                return {
                                    a: i ? {
                                        m: function(e, t) {
                                            return e.filter(function(e) {
                                                return !t.includes(e)
                                            }).concat(t).slice(-i)
                                        },
                                        z: []
                                    } : {
                                        m: function(e, t) {
                                            return e.filter(function(e) {
                                                return !t.includes(e)
                                            }).concat(t)
                                        },
                                        z: []
                                    },
                                    p: function(i, o) {
                                        return t.k(o, ["name"]) === e && n(o) ? t.k(o, r) : []
                                    },
                                    r: function(e, t) {
                                        return t
                                    }
                                }
                            },
                            itp: function(e, n, r, i) {
                                return {
                                    a: {
                                        m: function(e, t) {
                                            return t
                                        },
                                        z: !1
                                    },
                                    p: function(o, a) {
                                        return t.tp(o, e, n, r, i)
                                    },
                                    r: function(e, t) {
                                        return t
                                    }
                                }
                            },
                            isp: function(e, n, r, i) {
                                return {
                                    a: {
                                        m: function(e, t) {
                                            return t
                                        },
                                        z: !1
                                    },
                                    p: function(o, a) {
                                        return t.sp(o, e, n, r, i)
                                    },
                                    r: function(e, t) {
                                        return t
                                    }
                                }
                            },
                            ifp: function(e) {
                                return {
                                    a: {
                                        m: function(e, t) {
                                            return t
                                        },
                                        z: !1
                                    },
                                    p: function(n, r) {
                                        return t.tp(n, "1p", e, !1)
                                    },
                                    r: function(e, t) {
                                        return t
                                    }
                                }
                            },
                            lm: function(e, n) {
                                return {
                                    a: {
                                        m: function(e, t) {
                                            return t
                                        },
                                        z: []
                                    },
                                    p: function(n, r) {
                                        return [t.lms(n.getSegments(), n.getLookalikeModels(), e)]
                                    },
                                    r: function(e, t) {
                                        return !!t[0] && n(t[0])
                                    }
                                }
                            },
                            sq: function(e) {
                                return {
                                    a: {
                                        m: function(t, n) {
                                            return [n[0], e.a.m(null != t[0] && t[0][0] === n[0][0] ? t[1] : e.a.z, n[1])]
                                        },
                                        z: [
                                            [], e.a.z
                                        ]
                                    },
                                    p: function(n, r) {
                                        return [
                                            [n.getCurrentSession()], t.k(r, ["session_id"]) === n.getCurrentSession() ? e.p(n, r) : e.a.z
                                        ]
                                    },
                                    r: function(t, n) {
                                        return e.r(t, n[0] != [] && n[0][0] === t.getCurrentSession() ? n[1] : e.a.z)
                                    }
                                }
                            },
                            vq: function(e) {
                                return {
                                    a: {
                                        m: function(t, n) {
                                            return [n[0], e.a.m(null != t[0] && t[0][0] === n[0][0] ? t[1] : e.a.z, n[1])]
                                        },
                                        z: [
                                            [], e.a.z
                                        ]
                                    },
                                    p: function(n, r) {
                                        return [
                                            [n.getCurrentView()], t.k(r, ["view_id"]) === n.getCurrentView() ? e.p(n, r) : e.a.z
                                        ]
                                    },
                                    r: function(t, n) {
                                        return e.r(t, n[0] != [] && n[0][0] === t.getCurrentView() ? n[1] : e.a.z)
                                    }
                                }
                            },
                            ltn: function(e, t) {
                                return {
                                    a: {
                                        m: function(e, n) {
                                            return e.concat(n).slice(-t)
                                        },
                                        z: []
                                    },
                                    p: function(t, n) {
                                        return [e.p(t, n)]
                                    },
                                    r: function(t, n) {
                                        return e.r(t, n.reduce(function(t, n) {
                                            return e.a.m(t, n)
                                        }, e.a.z))
                                    }
                                }
                            },
                            ftn: function(e, t) {
                                return {
                                    a: {
                                        m: function(e, n) {
                                            return e.concat(n.slice(0, t - e.length))
                                        },
                                        z: []
                                    },
                                    p: function(t, n) {
                                        return [e.p(t, n)]
                                    },
                                    r: function(t, n) {
                                        return e.r(t, n.reduce(function(t, n) {
                                            return e.a.m(t, n)
                                        }, e.a.z))
                                    }
                                }
                            },
                            tw: function(e, r) {
                                return {
                                    a: {
                                        m: function(t, r) {
                                            return n.compose(e.a, t, r)
                                        },
                                        z: n.init({
                                            w: r
                                        })
                                    },
                                    p: function(i, o) {
                                        return n.init({
                                            w: r,
                                            t: Math.max(t.kf(o, ["time"], function(e) {
                                                return e.getTime()
                                            }), i.getCurrentTime()),
                                            v: e.p(i, o)
                                        })
                                    },
                                    r: function(t, r) {
                                        return e.r(t, n.query(e.a, r))
                                    }
                                }
                            },
                            q: function(e) {
                                return {
                                    initial: function(t) {
                                        return {
                                            result: e.a.z
                                        }
                                    },
                                    update: function(t, n, r) {
                                        return {
                                            result: e.a.m(n.result, e.p(t, r))
                                        }
                                    },
                                    result: function(t, n) {
                                        return {
                                            result: e.r(t, n.result)
                                        }
                                    },
                                    m: e.a.m,
                                    z: e.a.z,
                                    p: e.p,
                                    r: e.r
                                }
                            }
                        },
                        n = {
                            init: function(e) {
                                var t = e.t || Number.MIN_SAFE_INTEGER;
                                return {
                                    w: e.w,
                                    t: t,
                                    in: void 0 !== e.v ? [
                                        [e.v, e.v, t]
                                    ] : e.in || [],
                                    out: e.out || []
                                }
                            },
                            aIn: function(e, t) {
                                return t.in.length ? t.in[t.in.length - 1][1] : e.z
                            },
                            aOut: function(e, t) {
                                return t.out.length ? t.out[t.out.length - 1][1] : e.z
                            },
                            aOut_: function(e, t) {
                                return t.length ? t[t.length - 1][1] : e.z
                            },
                            query: function(e, t) {
                                return e.m(n.aOut(e, t), n.aIn(e, t))
                            },
                            enqueue: function(e, t, r, i) {
                                if (i < t.t) return t;
                                var o = t.in.slice();
                                return o.push([r, e.m(n.aIn(e, t), r), i]), n.init({
                                    w: t.w,
                                    t: i,
                                    in: o,
                                    out: t.out.slice()
                                })
                            },
                            dequeue: function(e, t) {
                                var r = t.out.slice(),
                                    i = t.in.slice();
                                if (!t.out.length)
                                    for (; i.length;) {
                                        var o = i[i.length - 1];
                                        r.push([o[0], e.m(o[0], n.aOut_(e, r)), o[2]]), i.pop()
                                    }
                                return r.pop(), n.init({
                                    w: t.w,
                                    t: t.t,
                                    in: i,
                                    out: r
                                })
                            },
                            minTime: function(e) {
                                return e.out.length ? e.out[e.out.length - 1][2] : e.in.length ? e.in[0][2] : Number.MAX_SAFE_INTEGER
                            },
                            compose: function(e, t, r) {
                                if (r.t < t.t || t.w !== r.w) return t;
                                for (var i = [], o = r.out.length - 1; o >= 0; --o) i.push([r.out[o][0], r.out[o][2]]);
                                for (o = 0; o < r.in.length; ++o) i.push([r.in[o][0], r.in[o][2]]);
                                for (var a = n.init({
                                        w: t.w,
                                        t: t.t,
                                        in: t.in.slice(),
                                        out: t.out.slice()
                                    }), o = 0; o < i.length; ++o) i[o][0] !== e.z && (a = n.enqueue(e, a, i[o][0], i[o][1]));
                                for (var s = r.t - r.w; n.minTime(a) <= s;) a = n.dequeue(e, a);
                                return a
                            }
                        },
                        r = {
                            12928: t.q(t.cw("Pageview", t.t, t.ge(1))),
                            12930: t.q(t.cq(t.a0, t.cw("Pageview", t.t, t.ge(1)), t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.itp("eyeota_bombora", "14056", !1, "12930"), t.itp("eyeota_pacificdatapartners", "24002", !1, "12930")), t.itp("eyeota_alc", "20294", !1, "12930")), t.itp("eyeota_alc", "20292", !1, "12930")), t.itp("eyeota_amberdata", "18059", !1, "12930")))),
                            12932: t.q(t.cq(t.a0, t.cw("Pageview", t.t, t.ge(1)), t.cq(t.o0, t.itp("eyeota_bombora", "13902", !1, "12932"), t.itp("eyeota", "6536", !1, "12932")))),
                            12938: t.q(t.cq(t.a0, t.cw("Pageview", t.t, t.ge(1)), t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.itp("eyeota_bombora", "13899", !1, "12938"), t.itp("eyeota_bombora", "13901", !1, "12938")), t.itp("eyeota_bombora", "13900", !1, "12938")), t.itp("eyeota_bombora", "13902", !1, "12938")), t.itp("eyeota_bombora", "13903", !1, "12938")), t.itp("eyeota_bombora", "13904", !1, "12938")), t.itp("eyeota", "6531", !1, "12938")), t.itp("eyeota", "6532", !1, "12938")), t.itp("eyeota", "6533", !1, "12938")), t.itp("eyeota", "6534", !1, "12938")), t.itp("eyeota", "6535", !1, "12938")), t.itp("eyeota", "6536", !1, "12938")), t.itp("eyeota", "6537", !1, "12938")), t.itp("eyeota", "6538", !1, "12938")), t.itp("eyeota", "6539", !1, "12938")), t.itp("eyeota", "6540", !1, "12938")), t.itp("eyeota", "6541", !1, "12938")))),
                            12939: t.q(t.cq(t.a0, t.cw("Pageview", t.t, t.ge(1)), t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.itp("eyeota_bombora", "14407", !1, "12939"), t.itp("eyeota_dlg", "18775", !1, "12939")), t.itp("eyeota_experian", "21446", !1, "12939")), t.itp("eyeota_experian", "21448", !1, "12939")), t.itp("eyeota_experian", "21450", !1, "12939")), t.itp("eyeota_dlg", "18768", !1, "12939")), t.itp("eyeota_gfk", "8585", !1, "12939")), t.itp("eyeota_kantarmedia", "19298", !1, "12939")), t.itp("eyeota_pacificdatapartners", "24247", !1, "12939")), t.itp("eyeota_pacificdatapartners", "24068", !1, "12939")), t.itp("eyeota_pacificdatapartners", "24097", !1, "12939")), t.itp("eyeota_gbgtransactis", "19823", !1, "12939")), t.itp("eyeota", "13033", !1, "12939")), t.itp("eyeota", "13016", !1, "12939")), t.itp("eyeota_specialists", "25022", !1, "12939")), t.itp("eyeota_alc", "20512", !1, "12939")), t.itp("eyeota_alc", "20545", !1, "12939")))),
                            12940: t.q(t.cq(t.a0, t.cw("Pageview", t.t, t.ge(1)), t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.itp("eyeota_alc", "20424", !1, "12940"), t.itp("eyeota_alc", "20425", !1, "12940")), t.itp("eyeota_bombora", "14273", !1, "12940")), t.itp("eyeota_experian", "27445", !1, "12940")), t.itp("eyeota", "6531", !1, "12940")), t.itp("eyeota_meritdirect", "8713", !1, "12940")), t.itp("eyeota_pacificdatapartners", "24033", !1, "12940")))),
                            12943: t.q(t.cq(t.a0, t.cw("Pageview", t.t, t.ge(1)), t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.itp("eyeota_alc", "20295", !1, "12943"), t.itp("eyeota_bombora", "14055", !1, "12943")), t.itp("eyeota_bombora", "13926", !1, "12943")), t.itp("eyeota", "11622", !1, "12943")), t.itp("eyeota", "11624", !1, "12943")))),
                            12945: t.q(t.cq(t.a0, t.cw("Pageview", t.t, t.ge(1)), t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.itp("eyeota_dlg", "18775", !1, "12945"), t.itp("eyeota_experian", "21450", !1, "12945")), t.itp("eyeota_dlg", "18768", !1, "12945")), t.itp("eyeota_gfk", "8585", !1, "12945")))),
                            12946: t.q(t.tw(t.cw("Pageview", t.t, t.ge(5)), 24192e5)),
                            12999: t.q(t.cw("Pageview", t.os(t.e, ["client", "domain"], ["execed.economist.com", "exed.economist.com"]), t.ge(1))),
                            13286: t.q(t.cw("Pageview", t.t, t.ge(1))),
                            14253: t.q(t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.cq(t.o0, t.tw(t.cw("Pageview", t.os(t.e, ["channel"], ["business", "business_and_finance", "economics", "economicsbrief", "finance_and_economics", "financeandeconomics"]), t.ge(3)), 24192e5), t.itp("eyeota_pacificdatapartners", "23986", !1, "14253")), t.itp("eyeota_kantarmedia", "19301", !1, "14253")), t.itp("eyeota_experian", "27452", !1, "14253")), t.itp("eyeota_dataxpand", "14589", !1, "14253")), t.itp("eyeota_dunbradstreet", "20699", !1, "14253")), t.itp("eyeota_dunbradstreet", "20703", !1, "14253")), t.itp("eyeota_dunbradstreet", "20700", !1, "14253")), t.itp("eyeota_dunbradstreet", "20697", !1, "14253")), t.itp("eyeota", "6531", !1, "14253"))),
                            14257: t.q(t.cq(t.o0, t.cw("Pageview", t.ps(["client", "title"], "sport"), t.ge(1)), t.itp("eyeota_netsprint", "17699", !1, "14257"))),
                            14279: t.q(t.cw("User", t.ps(["client", "referrer"], "facebook"), t.ge(1)))
                        };
                    return void 0 !== r ? r : {}
                }(),
                n = {
                    12928: ["0c8b70cdb7", "Permutive/All Users/250219", ["s"], "75969967-1621-4e83-bb8b-cbe593f50a86"],
                    12930: ["184016a125", "Permutive/Financial Advisers/250219", ["s"], "3bc79692-f7d6-4a65-a411-a01a81a28724"],
                    12932: ["405626061a", "Permutive/IT Decision Makers/250219", ["s"], "fa576b3c-1527-49cf-b537-ecd443386aef"],
                    12938: ["b357da413e", "Permutive/Business Decision Makers/250219", ["s"], "c5f00030-d3e5-44d0-bb1c-5f061448276c"],
                    12939: ["524ecdc280", "Permutive/HNWI Economist Readers/250219", ["s"], "e454655c-7bc4-4d21-aaae-8931de3d960d"],
                    12940: ["bd7d1831ed", "Permutive/C-Suite Economist Readers/250219", ["s"], "82aa20df-8406-4185-ae48-e45787e18a01"],
                    12943: ["07e7a54ae9", "Permutive/Institutional Investors/250219", ["s"], "841a68ec-0101-43f7-a6c1-83d3fdab0253"],
                    12945: ["bad2686a17", "Permutive/UHNWI Economist Readers/250219", ["s"], "ccdfb751-4a26-4637-8365-5ad42f1e501d"],
                    12946: ["11f9c73bd1", "Permutive/Highly Engaged Reader/250219", ["s"], "e1974b24-a87c-4230-9803-9cad709fc33a"],
                    12999: ["3992b2db07", "Permutive/ExecEd Visitor/270219", ["s"], "4fbcfac7-d62f-425c-a532-94fd4818b443"],
                    13286: ["0c8b70cdb7", "Everyone", ["s"], "9e8ba6d0-07d0-469b-b130-85231341a823"],
                    14253: ["88da16800c", "Fabian Test", ["s"], "3e9181ec-d5fb-476d-b26e-9ce54b2eaa5b"],
                    14257: ["d85b31e50f", "Permutive Test", ["s"], "f2cf08c0-0a4a-4b1c-b954-373ea3bda15a"],
                    14279: ["4a075229f3", "Fabian Test 2", ["s"], "5bbeddf0-8b60-414f-ac12-95184485fb9c"]
                },
                r = null,
                i = !1,
                o = [],
                a = {},
                s = function(t) {
                    switch (t.type) {
                        case "init":
                            return e.init(t.msgId, t.args[0], t.args[1], t.args[2]);
                        case "processEvents":
                            return e.processEvents(t.msgId, t.args[0]);
                        case "updateEnvironment":
                            return e.updateEnvironment(t.msgId, t.args[0]);
                        default:
                            throw Error("Unexpected message " + t)
                    }
                },
                u = function(t) {
                    e.postMessage({
                        type: "complete",
                        args: t
                    })
                },
                c = function(t) {
                    0 !== Object.keys(t).length && e.postMessage({
                        type: "stateChange",
                        args: t
                    })
                },
                l = function(t) {
                    0 !== t.length && e.postMessage({
                        type: "errors",
                        args: t
                    })
                },
                d = function(e, n, d) {
                    var p = {},
                        f = [];
                    n.forEach(function(e) {
                        var n = t[e],
                            i = a[e];
                        d.forEach(function(t) {
                            try {
                                i.state = n.update(r, i.state, t)
                            } catch (n) {
                                f.push({
                                    error: n.toString(),
                                    identifier: e,
                                    event_id: t.id
                                })
                            }
                        }), i.result = n.result(r, i.state), p[e] = a[e]
                    }), c(p), l(f), i = !0, o.forEach(s), o = [], u(e)
                };
            this.init = function(e, i, o, s) {
                var u = o.lookalikeModels || {},
                    c = function(e, t, n) {
                        var r = a[n].activations;
                        e in r ? -1 !== r[e].indexOf(t) || r[e].push(t) : r[e] = [t]
                    };
                a = i, r = {
                    getCurrentTime: function() {
                        return new Date
                    },
                    getCurrentSession: function() {
                        return o.sessionId
                    },
                    getCurrentView: function() {
                        return o.viewId
                    },
                    getSegments: function() {
                        return o.segments
                    },
                    getLookalikeModels: function() {
                        return u
                    },
                    setThirdPartyActivation: c,
                    setSegmentActivation: c
                };
                var l = [];
                Object.keys(n).forEach(function(e) {
                    var o = n[e];
                    if (!(e in i) || i[e].checksum !== o[0]) {
                        l.push(parseInt(e));
                        var s = t[e],
                            u = s.initial(r);
                        a[e] = {
                            name: o[1],
                            id: o[3],
                            is_segment: o[2].indexOf("s") > -1,
                            is_cloud: o[2].indexOf("c") > -1,
                            checksum: o[0],
                            state: u,
                            result: s.result(r, u),
                            activations: {}
                        }
                    }
                }), d(e, l, s)
            }, this.updateEnvironment = function(t, n) {
                if (!i) return o.push({
                    msgId: t,
                    type: "updateEnvironment",
                    args: [n]
                });
                n.sessionId && (r.getCurrentSession = function() {
                    return n.sessionId
                }), n.segments && (r.getSegments = function() {
                    return n.segments
                }), n.lookalikeModels && (r.getLookalikeModels = function() {
                    return n.lookalikeModels
                }), e.processEvents(t, [{}])
            }, this.processEvents = function(e, s) {
                if (!i) return o.push({
                    msgId: e,
                    type: "processEvents",
                    args: [s]
                });
                var d = {},
                    p = [];
                s.forEach(function(e) {
                    Object.keys(n).forEach(function(n) {
                        var i = t[n],
                            o = a[n].state;
                        try {
                            var s = i.update(r, o, e);
                            JSON.stringify(o) !== JSON.stringify(s) && (a[n].state = s, a[n].result = i.result(r, s), d[n] = a[n])
                        } catch (t) {
                            p.push({
                                error: t.toString(),
                                identifier: n,
                                event_id: e.id
                            })
                        }
                    })
                }), c(d), l(p), u(e)
            }, onmessage = function(e) {
                s(e.data)
            }
        }

        function isEntryOrExit(e) {
            return "SegmentEntry" === e.name || "SegmentExit" === e.name
        }

        function transitionToState(e) {
            return "SegmentEntry" === e.name
        }

        function isTrackError(e) {
            return void 0 !== e.request_id
        }
        _internals.addons = {}, _internals.promises = new PermutivePromises;
        var Events = function(e) {
            var t = {},
                n = [];
            (e = e || this).on = function(n, r, i) {
                return (t[n] = t[n] || []).push([r, i]), e
            }, e.off = function(r, i) {
                r || (t = {});
                for (var o = t[r] || n, a = o.length = i ? o.length : 0; a--;) i == o[a][0] && o.splice(a, 1);
                return e
            }, e.once = function(t, r) {
                var i = n.slice.call(arguments, 2),
                    o = function() {
                        r(i), e.off(t, o)
                    };
                return e.on(t, o), e
            }, e.emit = function(r) {
                for (var i, o = t[r] || n, a = o.length > 0 ? o.slice(0, o.length) : o, s = 0; i = a[s++];) i[0].apply(i[1], n.slice.call(arguments, 1));
                return e
            }
        };
        _internals.messages = new Events;
        var PermutiveMessages, EVENTS_CACHE_KEY = "permutive-events-lz",
            EVENTS_CACHE_NO_LZ_KEY = "permutive-events-cache",
            PermutiveEventsCache = function() {
                function e(e) {
                    this.state = e, this.initialised = !1, this.hasAttemptedSizeReduction = !1, this.eventObjectCache = [], this.lastRefreshed = null, this.limit = -1, this.retrieveLastRefreshTime()
                }
                return e.prototype.all = function() {
                    return this.eventObjectCache
                }, e.prototype.setReady = function() {
                    this.initialised = !0, _internals.messages.emit("permutive:events:cache:loaded")
                }, e.prototype.add = function(e, t) {
                    void 0 === t && (t = {
                        shouldWrite: !0
                    });
                    for (var n = !1, r = 0; r < this.eventObjectCache.length; r++)
                        if (this.eventObjectCache[r].id === e.id) {
                            n = !0;
                            break
                        } if (n) e = void 0;
                    else {
                        for (; - 1 !== this.limit && this.eventObjectCache.length >= this.limit;) this.eventObjectCache.shift();
                        this.eventObjectCache.push(e), t.shouldWrite && this.write()
                    }
                    return e
                }, e.prototype.processCachedEvents = function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var r = this.createEvent(e[n]);
                        t.push(r), this.add(r, {
                            shouldWrite: !1
                        })
                    }
                    return t
                }, e.prototype.load = function() {
                    var e = PermutiveUtils.deferredPromise();
                    _internals.metrics.startTimer("sdk_load_events_cache_task_duration_seconds", {});
                    var t = function() {
                        var e = _internals.getExternalData(EVENTS_CACHE_NO_LZ_KEY);
                        return e ? (_internals.log("Migrating uncompressed events..."), LZWorker.compress(JSON.stringify(e), function(e) {
                            _internals.setExternalData(EVENTS_CACHE_KEY, e.result)
                        }), _internals.removeExternalData(EVENTS_CACHE_NO_LZ_KEY), e) : null
                    }();
                    if (t) e.resolve(JSON.parse(t));
                    else {
                        var n = _internals.getExternalData(EVENTS_CACHE_KEY);
                        n ? LZWorker.decompress(n, function(t) {
                            e.resolve(t.result ? JSON.parse(t.result) : [])
                        }) : e.resolve([])
                    }
                    return e.promise.then(function() {
                        _internals.metrics.stopTimer("sdk_load_events_cache_task_duration_seconds", {})
                    }), e.promise
                }, e.prototype.refresh = function(e) {
                    return void 0 === e && (e = {
                        processImmediately: !1
                    }), e.from || (e.from = this.getRefreshFromTime(), this.lastRefreshed = e.from, this.storeLastRefreshTime()), _internals.log("refreshing from: ", e.from), _internals.api.events(_internals.state.userId, {
                        error: e.error,
                        complete: e.complete,
                        from: e.from
                    })
                }, e.prototype.processRefreshEvents = function(e, t) {
                    void 0 === t && (t = {});
                    for (var n = [], r = e || [], i = 0; i < r.length; i++) {
                        var o = this.add(this.createEvent(r[i]), {
                            shouldWrite: !1
                        });
                        o && n.push(o)
                    }
                    if (r.length > 0) {
                        var a = new Date(r[r.length - 1].time);
                        a.setMilliseconds(a.getMilliseconds() + 1), this.lastRefreshed = a, this.storeLastRefreshTime()
                    }
                    return _internals.log("events from api: ", r), _internals.log("new events from api: ", n), _internals.log("events cache", this.eventObjectCache), n.length > 0 && t.write && this.write(), n
                }, e.prototype.reset = function() {
                    _internals.removeExternalData(EVENTS_CACHE_KEY), this.eventObjectCache = [], this.lastRefreshed = null
                }, e.prototype.createEvent = function(e) {
                    var t = {
                        id: e.id,
                        name: e.name,
                        time: new Date(e.time),
                        properties: this.parseProperties(e.properties || {})
                    };
                    return e.session_id && (t.session_id = e.session_id), e.view_id && (t.view_id = e.view_id), t
                }, e.prototype.write = function(e) {
                    var t = this;
                    if (this.initialised) {
                        var n = this;
                        _internals.log("Writing cache (#e)", this.eventObjectCache.length), LZWorker.compress(JSON.stringify(this.eventObjectCache), function(t) {
                            try {
                                _internals.setExternalData(EVENTS_CACHE_KEY, t.result), "function" == typeof e && e()
                            } catch (t) {
                                if (t.message = "Unable to write events to local storage: " + t.message, _internals.error(t), void 0 !== t.message && t.message.toString().toLowerCase().indexOf("quota") > -1 && !n.hasAttemptedSizeReduction) {
                                    _internals.log("reducing cache size by 10%, due to local storage limit reached");
                                    for (var r = n.eventObjectCache.length; n.eventObjectCache.length > .9 * r;) n.eventObjectCache.shift();
                                    n.hasAttemptedSizeReduction = !0, n.write()
                                }
                            }
                        })
                    } else _internals.messages.on("permutive:events:cache:loaded", function() {
                        t.write(e)
                    })
                }, e.prototype.setRefreshFromTime = function(e) {
                    this.lastRefreshed = e, this.storeLastRefreshTime()
                }, e.prototype.getRefreshFromTime = function() {
                    var e = this.lastRefreshed;
                    return e || (e = _internals.utcNow()), e && e.setMilliseconds(e.getMilliseconds() + 1), e
                }, e.prototype.storeLastRefreshTime = function() {
                    this.state.setPermutiveData("last_refresh_time", this.lastRefreshed.toISOString())
                }, e.prototype.retrieveLastRefreshTime = function() {
                    var e = this.state.getPermutiveData("last_refresh_time") || null;
                    e && (this.lastRefreshed = new Date(e))
                }, e.prototype.parseProperties = function(e) {
                    var t = {};
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n],
                                i = r;
                            "string" == typeof r && r.match(ISO8601_REGEX) && (i = new Date(r)), t[n] = i
                        } return t
                }, e
            }(),
            CACHED_SEGMENTS_STORAGE_KEY = "_psegs",
            QueryManager = function() {
                function e(e) {
                    var t = this;
                    this.state = e, this.initialised = !1, this.stateChangeQueue = [], this.userSegments = [], this.userSegmentsDict = {}, this.queryStateMap = {}, this.globalMsgId = 0, this.resolves = {}, this.readSegmentCache(), this.readQueryStateCache(), this.handlers = {
                        complete: function(e) {
                            var n = t.resolves[e];
                            n && n(), delete t.resolves[e]
                        },
                        errors: function(e) {
                            e.forEach(function(e) {
                                _internals.error("QL error. " + e.error + " in query " + e.identifier + " with event " + e.event_id)
                            })
                        },
                        stateChange: function(e) {
                            if (!t.initialised) return t.stateChangeQueue.push(e);
                            for (var n in e)
                                if (e.hasOwnProperty(n)) {
                                    var r = parseInt(n),
                                        i = e[r];
                                    if (i.is_segment) {
                                        var o = r in t.userSegmentsDict,
                                            a = i.result.result;
                                        if (o === a) continue;
                                        a ? t.addSegment(r) : t.removeSegment(r), t.trackSegmentTransition(a, i.id, r, i.name)
                                    } else {
                                        var s = t.queryStateMap[r] || {
                                            result: {}
                                        };
                                        if (JSON.stringify(s.result) === JSON.stringify(i.result)) continue
                                    }
                                    _internals.messages.emit("permutive:query:changed", {
                                        queryCode: r,
                                        result: i.result
                                    })
                                } Object.keys(e).length > 0 && (t.queryStateMap = PermutiveUtils.merge(t.queryStateMap, e), t.writeSegmentCache(), t.writeQueryStateCache()), _internals.messages.emit("permutive:segments:updated")
                        }
                    };
                    var n = new Blob([("(" + QueryWorker + ")();").replace('"use strict";', "")], {
                        type: "application/javascript"
                    });
                    this.worker = new Worker(URL.createObjectURL(n)), this.worker.onmessage = function(e) {
                        switch (e.data.type) {
                            case "stateChange":
                                return t.handlers.stateChange(e.data.args);
                            case "errors":
                                return t.handlers.errors(e.data.args);
                            case "complete":
                                return t.handlers.complete(e.data.args)
                        }
                    }, this.worker.onerror = function(e) {
                        e.preventDefault(), _internals.error("WebWorker error: " + e.message)
                    }
                }
                return e.prototype.initWorker = function(e) {
                    return this.sendMessage({
                        type: "init",
                        args: [this.queryStateMap, {
                            segments: {
                                "1p": this.userSegmentsDict
                            },
                            sessionId: _internals.sessionManager.getSessionId(),
                            viewId: _internals.state.getViewId(),
                            lookalikeModels: {}
                        }, e]
                    })
                }, e.prototype.updateEnvironment = function(e) {
                    return this.sendMessage({
                        type: "updateEnvironment",
                        args: [e]
                    })
                }, e.prototype.updateWithHistoricSegments = function(e) {
                    return 0 === e.length ? Promise.resolve() : (this.updateSegmentResults(e), this.sendMessage({
                        type: "processEvents",
                        args: [e]
                    }))
                }, e.prototype.update = function(e) {
                    var t = this.sendMessage({
                        type: "processEvents",
                        args: [e]
                    });
                    return _internals.isRealtime || t.then(function() {
                        _internals.setAsRealtime()
                    }), t
                }, e.prototype.updateSegmentResults = function(e) {
                    var t = this;
                    if (0 !== e.length) {
                        var n = this.calculateHistoricSegments(e);
                        _internals.log("New segment states", n), Object.keys(n).forEach(function(e) {
                            var r = parseInt(e);
                            n[r] ? t.addSegment(r) : t.removeSegment(r)
                        }), Object.keys(n).length > 0 && this.writeSegmentCache()
                    }
                }, e.prototype.handleResult = function(e, t) {
                    e in this.queryStateMap && t(this.queryStateMap[e].result)
                }, e.prototype.getActivations = function() {
                    var e = {};
                    for (var t in this.queryStateMap)
                        if (this.queryStateMap.hasOwnProperty(t)) {
                            var n = this.queryStateMap[t].activations;
                            for (var r in n)
                                if (this.queryStateMap[t].activations.hasOwnProperty(r))
                                    for (var i = this.queryStateMap[t].activations[r], o = 0; o < i.length; o++) t in e || (e[t] = []), e[t].push({
                                        segment_id: t,
                                        data_provider_id: r,
                                        data_provider_segment_id: i[o]
                                    })
                        } return e
                }, e.prototype.reset = function() {
                    this.clearSegmentCache(), this.clearQueryStateCache(), this.userSegments = [], this.userSegmentsDict = {}, this.queryStateMap = {}
                }, e.prototype.setAsReady = function() {
                    this.initialised = !0, this.processStateChangeQueue(), _internals.messages.emit("permutive:queries:initialised")
                }, e.prototype.processStateChangeQueue = function() {
                    _internals.log("state change queue", this.stateChangeQueue);
                    var e = this.stateChangeQueue.reduce(function(e, t) {
                        return PermutiveUtils.merge(e, t)
                    }, {});
                    this.stateChangeQueue = [], _internals.log("final state", e), this.handlers.stateChange(e)
                }, e.prototype.sendMessage = function(e) {
                    var t = this,
                        n = this.globalMsgId++;
                    return new Promise(function(r, i) {
                        t.resolves[n] = r, e.msgId = n, t.worker.postMessage(e)
                    })
                }, e.prototype.addSegment = function(e) {
                    this.userSegmentsDict[e] || (this.userSegments.push(e), this.userSegmentsDict[e] = !0)
                }, e.prototype.removeSegment = function(e) {
                    if (e in this.userSegmentsDict) {
                        delete this.userSegmentsDict[e];
                        var t = this.userSegments.indexOf(e);
                        t > -1 && this.userSegments.splice(t, 1)
                    }
                }, e.prototype.calculateHistoricSegments = function(e) {
                    for (var t = {}, n = 0; n < e.length; n++) {
                        var r = e[n];
                        isEntryOrExit(r) && (t[r.properties.segment_number] = transitionToState(r))
                    }
                    return t
                }, e.prototype.trackSegmentTransition = function(e, t, n, r) {
                    var i = e ? "SegmentEntry" : "SegmentExit",
                        o = {
                            segment_id: t,
                            segment_number: n,
                            segment_name: r
                        };
                    permutive.track(i, o)
                }, e.prototype.writeSegmentCache = function() {
                    _internals.log("Writing segment cache");
                    var e = JSON.stringify(this.userSegments);
                    _internals.setExternalData(CACHED_SEGMENTS_STORAGE_KEY, e)
                }, e.prototype.readSegmentCache = function() {
                    var e = this,
                        t = localStorage.getItem(CACHED_SEGMENTS_STORAGE_KEY);
                    t && (this.userSegments = JSON.parse(t), this.userSegments.forEach(function(t) {
                        e.userSegmentsDict[t] = !0
                    })), _internals.log("Read segment cache", this.userSegments)
                }, e.prototype.clearSegmentCache = function() {
                    localStorage.removeItem(CACHED_SEGMENTS_STORAGE_KEY)
                }, e.prototype.writeQueryStateCache = function() {
                    _internals.log("Writing query state cache", this.queryStateMap), this.state.setPermutiveData("query_states", this.queryStateMap)
                }, e.prototype.readQueryStateCache = function() {
                    this.queryStateMap = this.state.getPermutiveData("query_states") || {}, _internals.log("Read query state cache", this.queryStateMap)
                }, e.prototype.clearQueryStateCache = function() {
                    this.state.setPermutiveData("query_states", {})
                }, e
            }(),
            PermutiveReaction = function() {
                function e(e, t, n, r, i, o, a) {
                    this.id = e, this.segmentCode = t, this.segmentName = n, this.reactionType = r, this.triggerType = i, this.variantId = o, this.config = a
                }
                return e.prototype.reactEveryTime = function() {
                    return "EveryTime" === this.triggerType
                }, e.prototype.reactOnEntry = function() {
                    return "OnEntry" === this.triggerType
                }, e.prototype.reactOnExit = function() {
                    return "OnExit" === this.triggerType
                }, e.prototype.trackImpression = function(e) {
                    var t = {
                        reaction_id: this.id,
                        variant_id: this.variantId,
                        type: "impression"
                    };
                    permutive.track("Reaction", t, e), _internals.log("impression: ", t)
                }, e.prototype.trackConversion = function(e) {
                    var t = {
                        reaction_id: this.id,
                        variant_id: this.variantId,
                        type: "conversion"
                    };
                    permutive.track("Reaction", t, e), _internals.log("conversion: ", t)
                }, e
            }(),
            PermutiveReactionManager = function() {
                function e(e) {
                    this.state = e, this.reactionsConfig = [], this.specializedReactionsConfig = {
                        target_dfp: {
                            dfp: [13286, 12946, 12999],
                            dfp_legacy: {}
                        },
                        eyeota_pixel: [],
                        dbm: {
                            omitted: 1
                        },
                        appnexus: {},
                        appnexus_adserver: [],
                        nativo: []
                    }, this.reactions = {}, this.hasher = function(e) {
                        for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
                        return t
                    }
                }
                return e.prototype.load = function() {
                    for (var e = 0; e < this.reactionsConfig.length; e++) {
                        var t = this.reactionsConfig[e];
                        this.reactions[t.reaction_type] ? this.reactions[t.reaction_type].push(t) : this.reactions[t.reaction_type] = [t]
                    }
                }, e.prototype.evaluateContextCriteria = function(e) {
                    for (var t = 0; t < e.criteria.length; t++) {
                        var n = function(e) {
                            var t = permutive.context[e.key];
                            return void 0 !== t && ("EQUALS" === e.comparison ? t === e.value : "NOT_EQUALS" === e.comparison ? t !== e.value : "CONTAINS" === e.comparison ? t.indexOf(e.value) >= 0 : "NOT_CONTAINS" === e.comparison && t.indexOf(e.value) < 0)
                        }(e.criteria[t]);
                        if ("AND" === e.operator && !n) return !1;
                        if ("OR" === e.operator && n) return !0
                    }
                    return "AND" === e.operator
                }, e.prototype.selectVariant = function(e, t) {
                    if (1 === t.length) return t[0];
                    var n = this.state.userId + e,
                        r = Math.abs(this.hasher(n)) % 12e4;
                    t.sort(function(e, t) {
                        return e.start_bucket - t.start_bucket
                    });
                    var i = t.findIndex(function(e) {
                        return r < e.start_bucket
                    });
                    return t[i >= 0 ? i - 1 : t.length - 1]
                }, e.prototype.getSpecializedReactions = function(e) {
                    return this.specializedReactionsConfig[e]
                }, e.prototype.getReactions = function(e) {
                    var t = [];
                    if (this.reactions[e])
                        for (var n = 0; n < this.reactions[e].length; n++) {
                            var r = this.reactions[e][n],
                                i = this.selectVariant(r.id, r.variants);
                            if (i) {
                                var o = i.context_criteria;
                                o && !this.evaluateContextCriteria(o) || t.push(new PermutiveReaction(r.id, i.segment_code, "", r.reaction_type, r.trigger_type, i.id, i.config))
                            }
                        }
                    return t
                }, e
            }(),
            PermutiveTaskQueue = function() {
                function e() {
                    var e = this;
                    this.queue = [], this.nextNotify = null, _internals.messages.on("permutive:taskQueue:update", function() {
                        e.execute()
                    })
                }
                return e.prototype.add = function(e) {
                    this.queue.push(e), this.notify()
                }, e.prototype.notify = function() {
                    var e = function() {
                            _internals.messages.emit("permutive:taskQueue:update")
                        },
                        t = (new Date).getTime();
                    null === this.nextNotify || this.nextNotify < t - 50 ? (this.nextNotify = t, e()) : this.nextNotify <= t && (this.nextNotify = t + 50, window.setTimeout(e, 50))
                }, e.prototype.execute = function() {
                    var e = this;
                    if (0 !== this.queue.length) {
                        for (var t = !1, n = !1, r = 0, i = 0; i < this.queue.length; i++) {
                            var o = this.queue[i];
                            if (o.complete) r += 1;
                            else if (o.started) n = !0, t = t || o.blocks();
                            else {
                                if (o.waits() && n) break;
                                t || (n = !0, t = t || o.blocks(), o.execute(function() {
                                    e.notify()
                                }))
                            }
                        }
                        this.queue.splice(0, r)
                    }
                }, e.prototype.size = function() {
                    return this.queue.length
                }, e
            }(),
            Task = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.wait_prev = t.wait_prev || !1, this.block_next = t.block_next || !1, this.description = t.description || "", this.started = !1, this.complete = !1, this.task = e
                }
                return e.prototype.waits = function() {
                    return this.wait_prev
                }, e.prototype.blocks = function() {
                    return this.block_next
                }, e.prototype.execute = function(e) {
                    var t = this;
                    this.started = !0, this.task(function() {
                        t.complete = !0, e()
                    })
                }, e
            }(),
            SessionManager = function() {
                function e(e) {
                    (e = e || {}).timeout_seconds = e.timeout_seconds || 1800, e.session_data_key = e.session_data_key || "permutive-session", this.options = e, this.session_id = null, this.initialize()
                }
                return e.prototype.getSessionId = function() {
                    return this.session_id
                }, e.prototype.newSession = function(e) {
                    return {
                        session_id: _internals.randomUuid(),
                        last_updated: e
                    }
                }, e.prototype.initialize = function() {
                    var e = new Date,
                        t = _internals.getCookie(this.options.session_data_key),
                        n = this.decodeSessionData(t);
                    if (null === n) n = this.newSession(e);
                    else {
                        var r = this.options.timeout_seconds;
                        e > new Date(n.last_updated.getTime() + 1e3 * r) ? n = this.newSession(e) : n.last_updated = e
                    }
                    this.persistSessionData(n), this.session_id = n.session_id
                }, e.prototype.decodeSessionData = function(e) {
                    var t = null;
                    try {
                        t = JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                    return null !== t && "object" == typeof t && t.hasOwnProperty("session_id") && t.hasOwnProperty("last_updated") && (t.last_updated = new Date(t.last_updated), !isNaN(t.last_updated.getTime())) ? t : null
                }, e.prototype.persistSessionData = function(e) {
                    e.last_updated = e.last_updated.toISOString(), _internals.setCookie(this.options.session_data_key, JSON.stringify(e))
                }, e
            }(),
            ISO8601_REGEX = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
            PermutiveState = function() {
                function e() {
                    this.taskQueue = new PermutiveTaskQueue;
                    var e = _internals.getNamespacedStorageKey(permutive.config.permutiveDataKey),
                        t = localStorage.getItem(e);
                    this.permutiveData = null === t ? {} : JSON.parse(t), this.userId = this.getUserId(), this.isFirstVisitOnDevice = null === this.userId, this.viewId = _internals.randomUuid(), this.eventsCache = new PermutiveEventsCache(this), this.reactionManager = new PermutiveReactionManager(this), this.reactionManager.load(), this.queryManager = new QueryManager(this)
                }
                return e.prototype.reset = function() {
                    _internals.log("Resetting SDK"), this.queryManager.reset(), this.eventsCache.reset(), _internals.deleteCookie(permutive.config.cookieName), _internals.removeExternalData(permutive.config.cookieName), this.permutiveData = {}, localStorage.removeItem(permutive.config.permutiveDataKey)
                }, e.prototype.getUserId = function() {
                    var e = _internals.getCookie(permutive.config.cookieName);
                    return e || _internals.getExternalData(permutive.config.cookieName)
                }, e.prototype.setUserId = function(e) {
                    _internals.setCookie(permutive.config.cookieName, e), _internals.setExternalData(permutive.config.cookieName, e), this.userId = e
                }, e.prototype.getPermutiveData = function(e) {
                    return this.permutiveData[e]
                }, e.prototype.setPermutiveData = function(e, t) {
                    this.permutiveData[e] = t;
                    var n = _internals.getNamespacedStorageKey(permutive.config.permutiveDataKey);
                    localStorage.setItem(n, JSON.stringify(this.permutiveData))
                }, e.prototype.getPageviewId = function() {
                    return this.getViewId()
                }, e.prototype.getViewId = function() {
                    return this.viewId
                }, e.prototype.getClient = function() {
                    var e = "";
                    return e = document.title ? document.title : "", {
                        type: "web",
                        user_agent: navigator.userAgent ? navigator.userAgent : "",
                        url: window.location.href ? window.location.href : "",
                        domain: window.location.hostname ? window.location.hostname : "",
                        title: e,
                        referrer: document.referrer ? document.referrer : ""
                    }
                }, e
            }(),
            PermutiveApi = function() {
                function e() {}
                return e.prototype.identify = function(e, t) {
                    if (void 0 === t && (t = {}), e.forEach(function(e) {
                            return _internals.identities.addAlias(e.id, e.tag)
                        }), _internals.isIdentityReady) {
                        var n = _internals.identities.currentAliases;
                        this.sendIdentify(_internals.state.userId, n, t).then(function(e) {
                            return _internals.identities.storeAliases(n)
                        })
                    }
                }, e.prototype.sendIdentify = function(e, t, n) {
                    void 0 === n && (n = {});
                    var r = {
                            default: 0,
                            appnexus: 1
                        },
                        i = function(e) {
                            return _internals.identities.getIdentity(e).defined ? e in r ? r[e] + 1 : 1 : 0
                        },
                        o = {
                            user_id: e,
                            aliases: function(e) {
                                return Object.keys(e).map(function(t) {
                                    return {
                                        id: e[t],
                                        tag: t,
                                        priority: i(t)
                                    }
                                })
                            }(t)
                        };
                    return _internals.req({
                        url: _internals.getEndpointUrl("/identify"),
                        method: "POST",
                        data: o,
                        success: n.success,
                        error: n.error,
                        complete: n.complete,
                        contentType: "text/plain",
                        apiKeyInParams: !0
                    })
                }, e.prototype.setUserProperties = function(e, t) {
                    return void 0 === t && (t = {}), _internals.req({
                        url: _internals.getEndpointUrl("/users/" + _internals.state.userId + "/properties"),
                        method: "POST",
                        data: {
                            properties: e
                        },
                        success: t.success,
                        error: t.error,
                        complete: t.complete,
                        contentType: "text/plain",
                        apiKeyInParams: !0
                    })
                }, e.prototype.metrics = function(e, t) {
                    return void 0 === t && (t = {}), _internals.req({
                        url: _internals.getEndpointUrl("/internal/metrics"),
                        method: "POST",
                        data: e,
                        contentType: "text/plain",
                        dataType: "text",
                        apiKeyInParams: !0,
                        success: function(e) {
                            t.success && t.success(e)
                        },
                        error: function(e, n) {
                            t.error && t.error(n)
                        }
                    })
                }, e.prototype.track = function(e, t, n, r, i, o) {
                    void 0 === o && (o = {});
                    var a = n || {};
                    o.includeClient = (o.includeClient, !0), o.includeClient && (a.client = _internals.state.getClient());
                    var s = {
                        user_id: e,
                        name: t,
                        segments: _internals.state.queryManager.userSegments,
                        properties: a
                    };
                    return null !== r && (s.session_id = r), null !== i && (s.view_id = i), _internals.req({
                        url: _internals.getEndpointUrl("/events"),
                        method: "POST",
                        data: s,
                        success: function(e) {
                            o.success && o.success(e)
                        },
                        error: function(e, t) {
                            o.error && o.error(t)
                        },
                        complete: o.complete,
                        contentType: "text/plain",
                        apiKeyInParams: !0,
                        useBeacon: o.useBeacon
                    })
                }, e.prototype.events = function(e, t) {
                    void 0 === t && (t = {});
                    var n = _internals.getEndpointUrl("/events") + "?user_id=" + e;
                    return t.from && (n += "&from=" + t.from.toISOString()), _internals.req({
                        url: n,
                        method: "GET",
                        success: function(e) {
                            t.success && t.success(e)
                        },
                        error: function(e, n) {
                            t.error && t.error(n)
                        },
                        complete: t.complete,
                        apiKeyInParams: !0,
                        contentType: "text/plain"
                    })
                }, e.prototype.tpd = function(e, t) {
                    void 0 === t && (t = {});
                    var n = _internals.getEndpointUrl("/tpd");
                    return _internals.req({
                        url: n,
                        method: "POST",
                        data: {
                            user_id: e
                        },
                        success: function(e) {
                            t.success && t.success(e)
                        },
                        error: function(e, n) {
                            t.error && t.error(n)
                        },
                        complete: t.complete,
                        contentType: "text/plain",
                        apiKeyInParams: !0
                    })
                }, e
            }(),
            EventHandler = function() {
                function e() {
                    this.events = [], this.listeners = []
                }
                return e.prototype.newEvent = function(e) {
                    var t = this;
                    this.events.push(e), this.listeners.forEach(function(n) {
                        t.handle(e, n)
                    })
                }, e.prototype.addListener = function(e) {
                    var t = this;
                    this.listeners.push(e);
                    var n = {
                        replay: function() {
                            return t.replay(e), n
                        },
                        remove: function() {
                            return t.remove(e), n
                        }
                    };
                    return n
                }, e.prototype.handle = function(e, t) {
                    var n = "string" == typeof t.name && e.name === t.name,
                        r = t.name.test && t.name.test(e.name),
                        i = n || r;
                    if (i) try {
                        t.callback(e)
                    } catch (e) {
                        window.console && window.console.error && window.console.error("callback error: ", e)
                    }
                    i && t.once && this.remove(t)
                }, e.prototype.replay = function(e) {
                    for (var t = -1 !== this.listeners.indexOf(e), n = 0; n < this.events.length && t; n++) this.handle(this.events[n], e), t = -1 !== this.listeners.indexOf(e)
                }, e.prototype.remove = function(e) {
                    var t = this.listeners.indexOf(e); - 1 !== t && this.listeners.splice(t, 1)
                }, e
            }(),
            PermutiveMethods = function() {
                function e() {}
                return e.prototype.identify = function(e) {
                    _internals.log("<call> identify", e);
                    var t = PermutiveIdentities.getAliasesFromIdentifyArg(e),
                        n = PermutiveUtils.deferredPromise();
                    if (_internals.api) {
                        _internals.state.taskQueue.add(new Task(function(e) {
                            _internals.log("<task> identify ", t);
                            var r = _internals.state.userId,
                                i = {
                                    success: function(i) {
                                        var o = i.user_id;
                                        if (o !== r) {
                                            var a = {
                                                error: function() {
                                                    _internals.error("couldn't retrieve events for user " + o), e(), n.resolve()
                                                },
                                                from: new Date(0)
                                            };
                                            _internals.state.reset(), _internals.state.setUserId(o), _internals.state.eventsCache.refresh(a).then(function(r) {
                                                var i = _internals.state.eventsCache.processRefreshEvents(r, {
                                                    write: !0
                                                });
                                                _internals.state.queryManager.updateSegmentResults(i), _internals.state.queryManager.initWorker(i).then(function() {
                                                    _internals.log("<done> identify", t, i), e(), n.resolve()
                                                })
                                            })
                                        } else _internals.log("<done> identify ", t), e(), n.resolve()
                                    },
                                    error: function() {
                                        _internals.error("Couldn't set identity for user " + r), e(), n.resolve()
                                    }
                                };
                            _internals.api.identify(t, i)
                        }, {
                            wait_prev: !0,
                            block_next: !0
                        }))
                    } else _internals.error("The API hasn't been loaded."), n.reject();
                    return n.promise
                }, e.prototype.on = function(e, t) {
                    return _internals.eventHandler.addListener({
                        name: e,
                        callback: t,
                        once: !1
                    })
                }, e.prototype.once = function(e, t) {
                    return _internals.eventHandler.addListener({
                        name: e,
                        callback: t,
                        once: !0
                    })
                }, e.prototype.track = function(e, t, n) {
                    void 0 === n && (n = {}), _internals.log("<call> track", e);
                    var r = PermutiveUtils.deferredPromise();
                    if (_internals.api) {
                        var i = n.success;
                        _internals.state.taskQueue.add(new Task(function(o) {
                            _internals.log("<task> track", e);
                            var a = _internals.sessionManager.getSessionId(),
                                s = _internals.state.getViewId(),
                                u = !!n.isAnalyticsOnly;
                            _internals.api.track(_internals.state.userId, e, t, a, s, {
                                useBeacon: n.useBeacon,
                                success: function(e) {
                                    if (isTrackError(e)) _internals.log("Tracking failed with reason", e), r.resolve({});
                                    else {
                                        _internals.eventHandler.newEvent(e);
                                        var t = {};
                                        n.useBeacon || (t = _internals.state.eventsCache.createEvent(e), u || (_internals.state.eventsCache.add(t), _internals.state.queryManager.update([t]))), i && i(t), r.resolve(t)
                                    }
                                },
                                complete: function() {
                                    _internals.log("<done> track", e), o()
                                }
                            })
                        }))
                    } else _internals.error("The API hasn't been loaded."), r.reject();
                    return r.promise
                }, e.prototype.trigger = function(e, t, n) {
                    var r = PermutiveUtils.deferredPromise();
                    _internals.log("<call> trigger", e), _internals.triggerListeners = _internals.triggerListeners || [];
                    return _internals.state.taskQueue.add(new Task(function(t) {
                        _internals.log("<task> trigger", e);
                        var i = _internals.messages.on("permutive:query:changed", function(t) {
                            t.queryCode === e && (n(t.result), r.resolve(t.result))
                        });
                        _internals.triggerListeners.push(i), _internals.log("<done> trigger", e), t()
                    })), r.promise
                }, e.prototype.query = function(e, t) {
                    var n = PermutiveUtils.deferredPromise();
                    _internals.log("<call> query", e);
                    return _internals.state.taskQueue.add(new Task(function(r) {
                        _internals.log("<task> query", e), _internals.state.queryManager.handleResult(e, function(e) {
                            t(e), n.resolve(e)
                        }), _internals.log("<done> query", e), r()
                    })), n.promise
                }, e.prototype.segment = function(e, t) {
                    var n = PermutiveUtils.deferredPromise();
                    _internals.log("<call> segment", e);
                    return _internals.state.taskQueue.add(new Task(function(r) {
                        _internals.log("<task> segment", e), _internals.state.queryManager.handleResult(e, function(r) {
                            if ("boolean" != typeof r.result) throw new Error("Segment " + e + " is missing boolean result property");
                            t(r.result), n.resolve(r.result)
                        }), _internals.log("<done> segment", e), r()
                    })), n.promise
                }, e.prototype.segments = function(e, t) {
                    void 0 === t && (t = "all");
                    var n = PermutiveUtils.deferredPromise();
                    _internals.log("<call> segments");
                    return _internals.state.taskQueue.add(new Task(function(r) {
                        _internals.log("<task> segments (" + t + ")");
                        var i = function(i) {
                            e(i), n.resolve(i), _internals.log("<done> segments (" + t + ")"), r()
                        };
                        "dfp" === t ? void 0 !== _internals.addons.dfp && _internals.addons.dfp.isReady ? i(_internals.addons.dfp.liveSegments) : _internals.messages.once("permutive:dfp:ready", function() {
                            i(_internals.addons.dfp.liveSegments)
                        }) : i(_internals.state.queryManager.userSegments)
                    })), n.promise
                }, e.prototype.reset = function() {
                    var e = PermutiveUtils.deferredPromise();
                    return _internals.createUser(function(t) {
                        _internals.state.reset(), _internals.state.setUserId(t.user_id), _internals.state.eventsCache.refresh({
                            error: function() {
                                return e.resolve()
                            }
                        }).then(function(e) {
                            var t = _internals.state.eventsCache.processRefreshEvents(e, {
                                write: !0
                            });
                            return _internals.state.queryManager.updateWithHistoricSegments(t)
                        }).then(function() {
                            return e.resolve()
                        }), _internals.messages.emit("permutive:reset")
                    }), e.promise
                }, e.prototype.addon = function(e, t) {
                    if (_internals.addons[e]) "web" === e && !0 !== t.auto_init && _internals.addons[e].reset(t);
                    else switch (e) {
                        case "web":
                            _internals.addons.web = new WebAddon(t);
                            break;
                        case "publishers":
                            _internals.addons.publishers = new PublishersAddon(t);
                            break;
                        case "overlays":
                            _internals.addons.overlays = new OverlaysAddon(t);
                            break;
                        case "scriptrunner":
                            _internals.addons.scriptrunner = new ScriptRunnerAddon(t);
                            break;
                        case "dfp":
                            _internals.addons.dfp = new DFPAddon(t);
                            break;
                        case "smart":
                            _internals.addons.smart = new SmartAddon(t);
                            break;
                        case "nativo":
                            _internals.addons.nativo = new NativoAddon(t);
                            break;
                        case "freewheel":
                            _internals.addons.freewheel = new FreeWheelAddon(t);
                            break;
                        case "gigya":
                            _internals.addons.gigya = GigyaAddon(t);
                            break;
                        case "facebook_pixel":
                            _internals.addons.facebook_pixel = new FacebookPixelAddon(t);
                            break;
                        case "facebook_pixel_v2":
                            _internals.addons.facebook_pixel_v2 = new FacebookPixelV2Addon(t);
                            break;
                        case "eyeota_pixel":
                            _internals.addons.eyeota_pixel = new EyeotaPixelAddon(t);
                            break;
                        case "pubmatic":
                            _internals.addons.pubmatic = new PubMaticAddon(t);
                            break;
                        case "tradedesk":
                            _internals.addons.tradedesk = new TradeDeskAddon(t);
                            break;
                        case "adwords":
                        case "dbm":
                            _internals.addons.ddp = new DDPAddon(t);
                            break;
                        case "rubicon":
                            _internals.addons.rubicon = new RubiconAddon(t);
                            break;
                        case "aol":
                            _internals.addons.aol = new AOLAddon(t);
                            break;
                        case "lotame":
                            _internals.addons.lotame = new LotameAddon(t);
                            break;
                        case "tracking_pixel":
                            _internals.addons.tracking_pixel = new PixelAddon(t);
                            break;
                        case "twitter_pixel":
                            _internals.addons.twitter_pixel = new TwitterAddon(t);
                            break;
                        case "pinterest_pixel":
                            _internals.addons.pinterest_pixel = new PinterestAddon(t);
                            break;
                        case "local_storage":
                            _internals.addons.local_storage = new LocalStorageAddon(t);
                            break;
                        case "appnexus":
                            _internals.addons.appnexus = new AppNexusAddon(t);
                            break;
                        case "appnexus_adserver":
                            _internals.addons.appnexus_adserver = new AppNexusAdServerAddon(t)
                    }
                }, e.prototype.ready = function(e, t) {
                    void 0 === t && (t = "initialised");
                    var n = PermutiveUtils.deferredPromise();
                    switch (t) {
                        case "initialised":
                            _internals.isReady ? (e(), n.resolve()) : _internals.messages.on("permutive:ready", function() {
                                e(), n.resolve()
                            });
                            break;
                        case "realtime":
                            _internals.isRealtime ? (e(), n.resolve()) : _internals.messages.once("permutive:realtime", function() {
                                e(), n.resolve()
                            })
                    }
                    return n.promise
                }, e
            }(),
            PermutiveIdentities = function() {
                function e() {
                    this.identities = _internals.state.getPermutiveData("identities") || {}, this.previousAliases = PermutiveUtils.extend({}, _internals.state.getPermutiveData("aliases")), this.currentAliases = _internals.state.getPermutiveData("aliases") || {}, this.providers = {}
                }
                return e.getAliasesFromIdentifyArg = function(e) {
                    var t = this;
                    if ("string" != typeof e && "object" != typeof e || null === e || "" === e) throw new Error("Identify must be passed a non-empty string or list of aliases, value passed was '" + e + "'");
                    var n = "string" == typeof e ? [{
                            id: e,
                            tag: "default"
                        }] : e,
                        r = n.filter(function(e) {
                            return t.reservedAliasTags.indexOf(e.tag) > -1
                        }).map(function(e) {
                            return e.id
                        });
                    if (r.length > 0) throw new Error("Identify was called with one or more reserved alias tags: " + r.join(","));
                    return n
                }, e.prototype.setIdentity = function(e, t, n) {
                    void 0 === n && (n = 86400), this.identities[e] = {
                        value: t,
                        expiry: Date.now() + Math.floor(1e3 * n)
                    }, _internals.state.setPermutiveData("identities", this.identities)
                }, e.prototype.getIdentity = function(e) {
                    return e in this.identities ? {
                        defined: !0,
                        value: this.identities[e].value
                    } : {
                        defined: !1,
                        value: void 0
                    }
                }, e.prototype.getIdentities = function(e) {
                    var t = this;
                    return void 0 === e && (e = !1), Object.keys(this.identities).reduce(function(n, r) {
                        var i = t.getIdentity(r).value;
                        return void 0 !== i && (e && !t.getProvider(r).usedForThirdPartyData() || (n[r] = i)), n
                    }, {})
                }, e.prototype.hasExpired = function(e) {
                    return !(e in this.identities) || Date.now() >= this.identities[e].expiry
                }, e.prototype.registerProvider = function(e) {
                    this.providers[e.getTag()] = e
                }, e.prototype.getProvider = function(e) {
                    return e in this.providers ? this.providers[e] : (_internals.error("Identity provider " + e + " is not registered."), null)
                }, e.prototype.retrieveIdentity = function(e) {
                    var t = this,
                        n = this.getProvider(e);
                    return null === n ? Promise.resolve(void 0) : n.getId().then(function(e) {
                        var r = void 0 === e ? "sdk_third_party_identity_missing_count" : "sdk_third_party_identity_present_count";
                        return _internals.metrics.track({
                            name: r,
                            value: 1,
                            labels: {
                                identity_tag: n.getTag()
                            }
                        }), t.setIdentity(n.getTag(), e, n.getTtlInSeconds()), e
                    })
                }, e.prototype.retrieveAllIdentities = function() {
                    _internals.metrics.startTimer("sdk_get_third_party_identities_task_duration_seconds", {});
                    var e = [],
                        t = this;
                    for (var n in this.providers) ! function(n) {
                        if (!t.providers.hasOwnProperty(n)) return "continue";
                        var r = t.getIdentity(n),
                            i = !r.defined || t.hasExpired(n) ? t.retrieveIdentity(n) : Promise.resolve(r.value);
                        i.then(function(e) {
                            return void 0 !== e ? _internals.api.identify([{
                                id: e,
                                tag: n
                            }]) : null
                        }), e.push(i)
                    }(n);
                    return Promise.all(e).then(function(e) {
                        return _internals.metrics.stopTimer("sdk_get_third_party_identities_task_duration_seconds", {}), e
                    })
                }, e.prototype.addAlias = function(e, t) {
                    this.currentAliases[t] = e
                }, e.prototype.storeAliases = function(e) {
                    _internals.state.setPermutiveData("aliases", e)
                }, e.prototype.areAliasesEqual = function(e, t) {
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (var i = 0; i < n.length; i++) {
                        var o = n[i];
                        if (!(o in t)) return !1;
                        if (t[o] !== e[o]) return !1
                    }
                    return !0
                }, e.reservedAliasTags = ["appnexus", "amp", "gigya", "sailthru", "idfa", "aaid"], e
            }(),
            providerToIdMap = {
                permutive: "1",
                eyeota: "2",
                nielsen: "3",
                skimlinks: "4",
                comscore: "5",
                eyeota_bombora: "6",
                eyeota_aimmatic: "7",
                eyeota_alc: "8",
                eyeota_amberdata: "9",
                eyeota_caci: "10",
                eyeota_corelogic: "11",
                eyeota_dlg: "12",
                eyeota_dataxpand: "13",
                eyeota_dunbradstreet: "14",
                eyeota_experian: "15",
                eyeota_gbgtransactis: "16",
                eyeota_gfk: "17",
                eyeota_rdaresearch: "18",
                eyeota_kantarmedia: "19",
                eyeota_mastercard: "20",
                eyeota_meritdirect: "21",
                eyeota_netsprint: "22",
                eyeota_nri: "23",
                eyeota_onaudience: "24",
                eyeota_pacificdatapartners: "25",
                eyeota_plungedigital: "26",
                eyeota_roymorgan: "27",
                eyeota_schober: "28",
                eyeota_sharethis: "30",
                eyeota_skimlinks: "31",
                eyeota_specialists: "32",
                eyeota_statsocial: "33",
                eyeota_stirista: "34",
                eyeota_yougov: "36"
            },
            PermutiveThirdParty = function() {
                function e() {
                    this.userSegments = _internals.state.getPermutiveData("third-party-data") || {
                        expiry_time: Date.now() - 1,
                        segments: {}
                    }, this.ttlInSeconds = 86400
                }
                return e.prototype.fireThirdPartySegmentEvent = function() {
                    var e = this,
                        t = new Date(_internals.state.getPermutiveData("date_tpd_segment_event_sent") || null);
                    (Date.now() - t.getTime()) / 864e5 >= 30 && (Object.keys(this.userSegments.segments).forEach(function(t) {
                        permutive.track("ThirdPartySegments", {
                            data_provider: t,
                            segments: Object.keys(e.userSegments.segments[t])
                        }, {
                            isAnalyticsOnly: !0
                        })
                    }), _internals.state.setPermutiveData("date_tpd_segment_event_sent", Date.now()))
                }, e.prototype.segments = function() {
                    var e = this;
                    if (this.segmentsPromise) return this.segmentsPromise;
                    if (Date.now() < this.userSegments.expiry_time) return Promise.resolve(this.userSegments.segments);
                    var t = PermutiveUtils.deferredPromise();
                    _internals.metrics.startTimer("sdk_get_third_party_data_task_duration_seconds", {});
                    var n = _internals.identities.getIdentities(!0);
                    Object.keys(n).length > 0 ? _internals.api.tpd(n, {
                        success: function(n) {
                            var r = e.convertSegments(n),
                                i = Date.now() + Math.floor(1e3 * e.ttlInSeconds);
                            e.userSegments.expiry_time = i, e.updateCache(r), t.resolve(r)
                        },
                        error: function(e) {
                            _internals.error("Third Party Data segments retrieval failed with reason: " + e), t.resolve({})
                        }
                    }) : t.resolve({});
                    var r = _internals.promises.getPromisesByCategory("tpd"),
                        i = Promise.all(r.map(function(e) {
                            return e.promise
                        })).then(function(e) {
                            return t.promise
                        }).then(function(t) {
                            return e.getSegments()
                        });
                    return i.then(function() {
                        _internals.metrics.stopTimer("sdk_get_third_party_data_task_duration_seconds", {})
                    }), this.segmentsPromise = i, this.segmentsPromise
                }, e.prototype.addSegments = function(e, t) {
                    var n = {};
                    n[e] = t;
                    var r = this.convertSegments(n);
                    this.updateCache(r)
                }, e.prototype.getSegments = function() {
                    return this.userSegments.segments
                }, e.prototype.getActivationMetadata = function() {
                    var e = _internals.state.queryManager.getActivations(),
                        t = {};
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n].map(function(e) {
                                return [n, providerToIdMap[e.data_provider_id], e.data_provider_segment_id].join("-")
                            });
                            t[n] = r
                        } return t
                }, e.prototype.updateCache = function(e) {
                    this.userSegments.segments = PermutiveUtils.mergeNestedObjects(this.userSegments.segments, e), _internals.state.setPermutiveData("third-party-data", this.userSegments)
                }, e.prototype.convertSegments = function(e) {
                    return Object.keys(e).reduce(function(t, n) {
                        var r = e[n];
                        return t[n] = r.reduce(function(e, t) {
                            return e[t] = !0, e
                        }, {}), t
                    }, {})
                }, e
            }(),
            PermutiveModels;
        permutive.addons = _internals.addons;
        try {
            var metricsEnabled = void 0 !== sdkInitTimestamp && Math.random() <= _internals.config.metricsSamplingPercentage / 100;
            _internals.metrics = metricsEnabled ? new PermutiveMetrics(sdkInitTimestamp) : new PermutiveMetricsNoOp, _internals.sessionManager = new SessionManager, _internals.state = new PermutiveState;
            var eventCache_1 = _internals.state.eventsCache.load();
            _internals.models = {
                getModels: function() {
                    return Promise.resolve({})
                }
            }, _internals.api = new PermutiveApi, _internals.identities = new PermutiveIdentities, _internals.thirdParty = new PermutiveThirdParty, permutive.context = permutive.context || {}, permutive.context.path = window.location.pathname, permutive.context.url = window.location.href, permutive.context.referrer = document.referrer, _internals.blockers = [], _internals.addBlocker("permutive:queries:initialised");
            for (var scripts = [], i = 0; i < scripts.length; i++) {
                var script = scripts[i];
                try {
                    eval(script)
                } catch (e) {
                    e.message = "Error running custom script [" + i + "]" + e.message, _internals.error(e)
                }
            }
            var AppNexusIdentityProvider = function() {
                function e() {
                    this.url = "//ib.adnxs.com/getuidj", this.invalidAliases = ["0", "-1"]
                }
                return e.prototype.getTag = function() {
                    return "appnexus"
                }, e.prototype.getId = function() {
                    var e = this;
                    return PermutiveUtils.ajax({
                        url: this.url,
                        xhrFields: {
                            withCredentials: !0
                        },
                        timeout: 3e3
                    }).then(function(t) {
                        return "uid" in t && e.isValidAlias(t.uid) ? Promise.resolve(t.uid) : Promise.resolve(void 0)
                    }, function(t) {
                        return _internals.error("Failed to retrieve third-party identity for " + e.getTag()), Promise.resolve(void 0)
                    })
                }, e.prototype.getTtlInSeconds = function() {
                    return 86400
                }, e.prototype.usedForThirdPartyData = function() {
                    return !0
                }, e.prototype.isValidAlias = function(e) {
                    return -1 === this.invalidAliases.indexOf(e)
                }, e
            }();
            ! function() {
                var e = new AppNexusIdentityProvider;
                _internals.identities.registerProvider(e)
            }();
            var DDP_LAST_UPDATED_KEY = "addon:ddp",
                DDP_SYNC_TIMEOUT_IN_SECONDS = 86400,
                DDPAddon = function() {
                    function e(e) {
                        var t = _internals.state.getPermutiveData(DDP_LAST_UPDATED_KEY);
                        (isNaN(t) || (new Date).getTime() > t + 1e3 * DDP_SYNC_TIMEOUT_IN_SECONDS) && this.initiateIdSync()
                    }
                    return e.prototype.initiateIdSync = function() {
                        var e = "https://cm.g.doubleclick.net/pixel?google_nid=permutive_dmp&google_cm&type=ddp&k=" + _internals.config.apiKey + "&u=" + _internals.state.userId;
                        (new Image).src = e, _internals.state.setPermutiveData(DDP_LAST_UPDATED_KEY, (new Date).getTime())
                    }, e
                }();
            PermutiveUtils.poller(function() {
                return "undefined" != typeof fbq
            }, function() {
                return permutive.addon("facebook_pixel_v2", {})
            });
            var FacebookPixelV2Addon = function() {
                function e(e) {
                    for (var t = this, n = _internals.state.getPermutiveData("addon:facebook_pixel_v2") || !1, r = _internals.state.queryManager.userSegmentsDict, i = _internals.state.reactionManager.getReactions("facebook_pixel_v2"), o = !n, a = this, s = 0; s < i.length; s++) ! function() {
                        var e = i[s],
                            n = e.segmentCode;
                        permutive.trigger(e.segmentCode, "", function(n) {
                            t.firePixel(n.result ? "PermutiveSegmentEntry" : "PermutiveSegmentExit", e)
                        }), o && n in r && a.firePixel("PermutiveSegmentEntry", e)
                    }();
                    o && _internals.state.setPermutiveData("addon:facebook_pixel_v2", !0), _internals.messages.on("permutive:reset", function() {
                        _internals.state.setPermutiveData("addon:facebook_pixel_v2", !1)
                    })
                }
                return e.prototype.firePixel = function(e, t) {
                    fbq("trackCustom", e, {
                        segment_id: t.segmentCode
                    }), t.trackImpression()
                }, e
            }();
            permutive.q.unshift({
                functionName: "addon",
                arguments: ["overlays", {}]
            });
            var isHtmlOverlay_1 = function(e) {
                    return void 0 !== e.html
                },
                isImageOverlay_1 = function(e) {
                    return void 0 !== e.image_url && void 0 !== e.image_link
                },
                OverlaysAddon = function() {
                    function e(e) {
                        var t = this;
                        this.reactions = _internals.state.reactionManager.getReactions("show_overlay"), this.loadedImageCounts = {};
                        for (var n = this, r = 0; r < this.reactions.length; r++) ! function() {
                            var e = n.reactions[r],
                                i = e.config,
                                o = n.buildOverlayCss(i, r);
                            document.head.insertAdjacentHTML("beforeend", o);
                            var a = n.buildOverlayBody(i, r);
                            document.body.insertAdjacentHTML("beforeend", a);
                            var s = "permutive-overlay-" + r,
                                u = document.getElementById(s);
                            ! function(e, t) {
                                e.getElementsByClassName("close")[0].addEventListener("click", function() {
                                    e.style.visibility = "hidden", e.style.opacity = "0"
                                })
                            }(u),
                            function(e, t, n) {
                                [].slice.call(e.getElementsByTagName("a")).slice(1).forEach(function(e) {
                                    e.addEventListener("click", function(e) {
                                        e.preventDefault();
                                        var t = this.href;
                                        n.trackConversion({
                                            success: function() {
                                                window.location.href = t
                                            }
                                        })
                                    })
                                });
                                var r = e.getElementsByTagName("form")[0];
                                r && r.addEventListener("submit", function(e) {
                                    e.preventDefault(), e.currentTarget, n.trackConversion({
                                        success: function() {
                                            r.submit()
                                        }
                                    })
                                })
                            }(u, 0, e);
                            var c = function(e, n) {
                                t.showOverlay(e), n.trackImpression()
                            };
                            ! function(e, t) {
                                t.reactEveryTime() ? permutive.query(t.segmentCode, makeSafe(function(n) {
                                    n.result ? c(e, t) : permutive.trigger(t.segmentCode, "result", function(n) {
                                        n.result && c(e, t)
                                    })
                                })) : t.reactOnEntry() ? permutive.trigger(t.segmentCode, "result", makeSafe(function(n) {
                                    n.result && c(e, t)
                                })) : t.reactOnExit() && permutive.trigger(t.segmentCode, "result", makeSafe(function(n) {
                                    n.result || c(e, t)
                                }))
                            }(s, e)
                        }()
                    }
                    return e.prototype.buildOverlayCss = function(e, t) {
                        return '<style type="text/css">.${overlay_class}{position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background:rgba(0,0,0,0.${opacity_percentage});transition:opacity ${opacity_transition_ms}ms;visibility:hidden;opacity:0;z-index:1000000;}.${modal_class}{position:fixed;padding:10px;background:#fff;border-radius:5px;z-index:1000001}.${modal_class} .content{overflow:auto;z-index:1000002;}.${modal_class} .close{position:absolute;top:20px;right:30px;transition:all 200ms;font-size:30px;font-weight:bold;text-decoration:none;color:#333;z-index:1000003}.${modal_class} .close:hover{color:orange;}</style>'.replace(/\${overlay_class}/g, "permutive-overlay-" + t).replace(/\${modal_class}/g, "permutive-modal-" + t).replace("${opacity_percentage}", e.opacity_percentage.toString()).replace("${opacity_transition_ms}", e.opacity_transition_ms.toString())
                    }, e.prototype.buildOverlayBody = function(e, t) {
                        var n = "";
                        return isHtmlOverlay_1(e) ? n = e.html : isImageOverlay_1(e) && (n = '<a href="' + e.image_link + '"><img src="' + e.image_url + '"/></a>'), '<div id="${overlay_class}" class="${overlay_class}"><div id="${modal_class}" class="${modal_class}"><a class="close" href="javascript:;">&times;</a><div class="content">${content}</div></div></div>'.replace(/\${overlay_class}/g, "permutive-overlay-" + t).replace(/\${modal_class}/g, "permutive-modal-" + t).replace("${content}", n).replace(/<img /g, "<img onload='window.permutive.addons.overlays.loadedImage(\"permutive-overlay-" + t + "\")' ")
                    }, e.prototype.showOverlay = function(e) {
                        var t = this,
                            n = document.getElementById("" + e),
                            r = function() {
                                var e = n.getElementsByTagName("div")[0],
                                    t = e.getBoundingClientRect().height,
                                    r = e.getBoundingClientRect().width;
                                e.style.left = window.innerWidth / 2 - r / 2 + "px", e.style.top = window.innerHeight / 2 - t / 2 + "px", n.style.visibility = "visible", n.style.opacity = "1"
                            },
                            i = n.getElementsByTagName("img");
                        if (i.length > 0) {
                            var o = 0,
                                a = function() {
                                    o < 10 && (!(e in t.loadedImageCounts) || t.loadedImageCounts[e] < i.length) ? (o += 1, setTimeout(a, 500)) : r()
                                };
                            a()
                        } else r()
                    }, e.prototype.loadedImage = function(e) {
                        e in this.loadedImageCounts ? this.loadedImageCounts[e] = this.loadedImageCounts[e] + 1 : this.loadedImageCounts[e] = 1
                    }, e
                }();
            permutive.q.push({
                functionName: "addon",
                arguments: ["dbm", {}]
            }), permutive.q.push({
                functionName: "addon",
                arguments: ["twitter_pixel", {}]
            });
            var TwitterAddon = function() {
                    function e(e) {
                        var t = this;
                        this.firedSegments = _internals.state.getPermutiveData("addon:twitter_pixel") || {}, this.reactions = _internals.state.reactionManager.getReactions("twitter_pixel");
                        var n = 0 === Object.keys(this.firedSegments).length;
                        this.eligibleSegments = {};
                        for (var r = 0; r < this.reactions.length; r++) {
                            var i = this.reactions[r],
                                o = i.segmentCode;
                            this.eligibleSegments[o] = i
                        }
                        n && this.firePixelsIfNecessary(_internals.state.queryManager.userSegments), _internals.messages.on("permutive:segments:updated", function() {
                            t.firePixelsIfNecessary(_internals.state.queryManager.userSegments)
                        }), _internals.messages.on("permutive:reset", function() {
                            t.firedSegments = {}, _internals.state.setPermutiveData("addon:twitter_pixel", {})
                        })
                    }
                    return e.prototype.firePixelsIfNecessary = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n in this.eligibleSegments && !(n in this.firedSegments) && (this.firePixel(this.eligibleSegments[n]), this.firedSegments[n] = 1)
                        }
                        _internals.state.setPermutiveData("addon:twitter_pixel", this.firedSegments)
                    }, e.prototype.firePixel = function(e) {
                        (new Image).src = "https://analytics.twitter.com/i/adsct?txn_id=" + e.config.audience_tag_id + "&p_id=Twitter", e.trackImpression()
                    }, e
                }(),
                WebAddon = function() {
                    function e(e) {
                        var t = this,
                            e = e || {};
                        this.eventInterval = e.eventInterval || 5, this.initialised = !1, this.addAlchemyTaxonomy = {
                            auto_init: !1
                        }.add_alchemy_taxonomy, this.addAlchemyEntities = {
                            auto_init: !1
                        }.add_alchemy_entities, this.trackPageviewEngagement = "boolean" != typeof {
                            auto_init: !1
                        }.track_pageview_engagement || {
                            auto_init: !1
                        }.track_pageview_engagement, this.trackFormSubmission = "boolean" != typeof {
                            auto_init: !1
                        }.track_form_submission || {
                            auto_init: !1
                        }.track_form_submission, this.trackLinkClick = "boolean" != typeof {
                            auto_init: !1
                        }.track_link_click || {
                            auto_init: !1
                        }.track_link_click, this.page = e.page || null, this.sendPageviewEvent(), this.dirtyState = !1;
                        var n = function() {
                            t.dirtyState = !0
                        };
                        (e.dirtyEvents || ["mousemove", "click", "scroll"]).map(function(e) {
                            window.addEventListener(e, n)
                        }), this.totalCompletion = 0, this.trackPageviewEngagement && (this.timerHandle = setInterval(this.sendEngagementEvent(this.eventInterval, this.getCompletion), 1e3 * this.eventInterval));
                        var r = function() {
                                if (t.trackFormSubmission)
                                    for (var e = window.document.getElementsByTagName("form"), n = 0; n < e.length; n++) e[n].addEventListener("submit", makeSafe(t.sendFormSubmissionEvent))
                            },
                            i = function(e, t) {
                                if (e.tagName.toLowerCase() === t) return e;
                                for (var n = e.parentElement; null !== n;) {
                                    if (n.tagName.toLowerCase() === t) return n;
                                    n = n.parentElement
                                }
                                return null
                            };
                        this.trackLinkClick && document.body.addEventListener("click", function(e) {
                            var n = i(e.target, "a");
                            if (n) {
                                var r = !("_blank" === n.target || e.metaKey || e.ctrlKey || e.shiftKey || 2 === e.which || 3 === e.which);
                                t.sendLinkClickEvent(n, r)
                            }
                        }), "loading" !== document.readyState ? r() : window.addEventListener("DOMContentLoaded", r, !1), this.initialised = !0
                    }
                    return e.prototype.sendPageviewEvent = function() {
                        var e = {
                            visit_id: _internals.state.getViewId(),
                            isp_info: "$ip_isp_info",
                            geo_info: "$ip_geo_info",
                            alchemy: void 0
                        };
                        if (!0 === permutive.context.isArticle && (this.addAlchemyTaxonomy || this.addAlchemyEntities)) {
                            var t = {};
                            this.addAlchemyTaxonomy && (t.taxonomy_labels = "$alchemy_taxonomy_labels"), this.addAlchemyEntities && (t.entity_names = "$alchemy_entity_names"), e.alchemy = t
                        }
                        null !== this.page && (e = PermutiveUtils.extend(e, this.page));
                        var n = {};
                        this.initialised || (n.success = function() {
                            _internals.metrics.trackTimeSinceInit("sdk_first_event_tracked_task_duration_seconds", {})
                        }), permutive.track("Pageview", e, n)
                    }, e.prototype.getCompletion = function() {
                        var e = document.documentElement.scrollHeight,
                            t = window.pageYOffset + window.innerHeight;
                        return t <= 0 ? 0 : t >= e ? 1 : t / e
                    }, e.prototype.sendEngagementEvent = function(e, t) {
                        var n = this;
                        return makeSafe(function() {
                            if (n.dirtyState) {
                                var r = {
                                        visit_id: _internals.state.getViewId(),
                                        engaged_time: e
                                    },
                                    i = Math.max(n.totalCompletion, t());
                                r.completion = i - n.totalCompletion, n.totalCompletion = i, n.dirtyState = !1, null !== n.page && (r = PermutiveUtils.extend(r, n.page)), permutive.track("PageviewEngagement", r)
                            }
                        })
                    }, e.prototype.reset = function(e) {
                        _internals.state.viewId = _internals.randomUuid(), this.page = e.page || null, this.totalCompletion = 0, this.sendPageviewEvent(), this.trackPageviewEngagement && (clearInterval(this.timerHandle), this.timerHandle = setInterval(this.sendEngagementEvent(this.eventInterval, this.getCompletion), 1e3 * this.eventInterval))
                    }, e
                }();
            WebAddon.prototype.sendLinkClickEvent = function(e, t) {
                if (window.location.href && e.href) {
                    var n = 0 === e.href.indexOf("data:") ? "NOT_URL" : e.href;
                    permutive.track("LinkClick", {
                        dest_url: n
                    }, {
                        useBeacon: t
                    })
                }
            }, WebAddon.prototype.sendFormSubmissionEvent = function(e) {
                var t = function(e) {
                        for (var t, n, r, i = {}, o = function(e) {
                                if (e.forEach) return e.forEach(o);
                                e && e.length <= 120 && (i[n] = e.toString())
                            }, a = e.getElementsByTagName("input"), s = 0; s < a.length; s++) {
                            var u = a[s];
                            t = u.id, r = u.type;
                            var c = !1;
                            (n = u.name || t) && r && t && "email" !== r.toLowerCase() && "tel" !== r.toLowerCase() || (c = !0), c || "fieldset" === u.nodeName.toLowerCase() || u.disabled || "submit" === r || "reset" === r || "button" === r || "file" === r || "password" === r || !("radio" !== r && "checkbox" !== r || u.checked) || o(document.getElementById(u.id).value)
                        }
                        return i
                    }(e.currentTarget),
                    n = [];
                for (var r in t) n.push({
                    name: r,
                    value: t[r]
                });
                var i = {
                    method: this.method || "GET",
                    properties: n
                };
                this.id && (i.id = this.id), this.name && "string" == typeof this.action && (i.name = this.name), this.action && "string" == typeof this.action && (i.action = this.action), permutive.track("FormSubmission", {
                    form: i
                })
            }, permutive.q.unshift({
                functionName: "addon",
                arguments: ["scriptrunner", {}]
            });
            var ScriptRunnerAddon = function() {
                    function ScriptRunnerAddon(options) {
                        this.reactions = _internals.state.reactionManager.getReactions("run_script");
                        for (var i = 0; i < this.reactions.length; i++) {
                            var reaction = this.reactions[i],
                                run = function(reaction) {
                                    var script = reaction.config.script.replace(/impression\(\)/g, "reaction.trackImpression();").replace(/conversion\(\)/g, "reaction.trackConversion();");
                                    try {
                                        eval(script)
                                    } catch (e) {
                                        e.message = "Error running custom script: " + e.message, _internals.error(e)
                                    }
                                };
                            ! function(e) {
                                e.reactEveryTime() ? permutive.query(e.segmentCode, function(t) {
                                    t.result ? run(e) : permutive.trigger(e.segmentCode, "result", function(t) {
                                        t.result && run(e)
                                    })
                                }) : e.reactOnEntry() ? permutive.trigger(e.segmentCode, "result", function(t) {
                                    t.result && run(e)
                                }) : e.reactOnExit() && permutive.trigger(e.segmentCode, "result", function(t) {
                                    t.result || run(e)
                                })
                            }(reaction)
                        }
                    }
                    return ScriptRunnerAddon
                }(),
                DFP_SEGMENTS_STORAGE_KEY = "_pdfps",
                googleAdSlots = {};
            permutive.q.push({
                functionName: "addon",
                arguments: ["dfp", {}]
            }), window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function() {
                permutive.ready(makeSafe(function() {
                    var e = 0;
                    googletag.pubads && googletag.pubads().getSlots && googletag.pubads().getSlots().length > 0 && googletag.pubads().getSlots().forEach(function(t) {
                        t.getResponseInformation() && e++
                    });
                    var t = 0 === e ? "sdk_targeting_realtime_success_count" : "sdk_targeting_realtime_fail_count";
                    _internals.metrics.track({
                        name: t,
                        value: 1,
                        labels: {
                            target: "dfp"
                        }
                    })
                }), "realtime");
                var e = function() {
                    var e = _internals.getExternalData(DFP_SEGMENTS_STORAGE_KEY);
                    return e ? JSON.parse(e) : []
                }();
                googletag.cmd.push(function() {
                    googletag.pubads().setTargeting("permutive", e)
                });
                var t = function(e) {
                        for (var t = {
                                ad_unit_path: e.getAdUnitPath(),
                                slot_element_id: e.getSlotElementId(),
                                targeting_keys: []
                            }, n = {}, r = e.getTargetingKeys(), i = 0; i < r.length; i++) {
                            for (var o = r[i], a = [], s = e.getTargeting(o), u = 0; u < s.length; u++) a.push(s[u].toString());
                            a.length > 0 && (n[o] = 1, t.targeting_keys.push({
                                key: o,
                                value: a
                            }))
                        }
                        for (var c = googletag.pubads().getTargetingKeys(), i = 0; i < c.length; i++) {
                            a = [];
                            if (void 0 === n[o = c[i]]) {
                                for (var s = googletag.pubads().getTargeting(c[i]), u = 0; u < s.length; u++) a.push(s[u].toString());
                                a.length > 0 && t.targeting_keys.push({
                                    key: o,
                                    value: a
                                })
                            }
                        }
                        return t
                    },
                    n = function(e) {
                        try {
                            var t = !1;
                            window.addEventListener("blur", function() {
                                if (t) {
                                    var n = googleAdSlots[e];
                                    n && permutive.track("SlotClicked", n)
                                }
                            }), document.getElementById(e).addEventListener("mouseover", function() {
                                t = !0
                            }), document.getElementById(e).addEventListener("mouseout", function() {
                                t = !1
                            })
                        } catch (e) {}
                    };
                googletag.pubads && googletag.pubads().getSlots && googletag.pubads().getSlots().forEach(function(e) {
                    var r = e.getResponseInformation();
                    if (r) {
                        var i = e.getSlotElementId(),
                            o = {
                                advertiser_id: r.advertiserId,
                                campaign_id: r.campaignId,
                                line_item_id: r.lineItemId,
                                creative_id: r.creativeId,
                                is_empty: !1,
                                service_name: "publisher_ads",
                                slot: t(e)
                            };
                        googleAdSlots[i] = o, permutive.track("SlotRendered", o, {
                            isAnalyticsOnly: !0
                        }), n(i)
                    }
                }), googletag.cmd.push(function() {
                    googletag.pubads().addEventListener("slotRenderEnded", function(e) {
                        var r = e,
                            i = r.slot.getSlotElementId(),
                            o = {
                                advertiser_id: r.advertiserId,
                                campaign_id: r.campaignId,
                                line_item_id: r.lineItemId,
                                creative_id: r.creativeId,
                                is_empty: r.isEmpty,
                                service_name: r.serviceName,
                                slot: t(e.slot)
                            };
                        r.size && "number" == typeof r.size[0] && "number" == typeof r.size[1] && (o.width = r.size[0], o.height = r.size[1]), googleAdSlots[i] = o, permutive.track("SlotRendered", o, {
                            isAnalyticsOnly: !0
                        }), n(i)
                    })
                }), window.addEventListener("message", function(e) {
                    try {
                        var t = JSON.parse(e.data);
                        if (t.permutive_type && "google_ad_click" === t.permutive_type) {
                            var n = t.data.ad_unit_path,
                                r = t.data.creative_id,
                                i = void 0;
                            Object.keys(googleAdSlots).forEach(function(e) {
                                void 0 !== googleAdSlots[e].slot && googleAdSlots[e].slot.ad_unit_path === n && googleAdSlots[e].creative_id === r && (i = googleAdSlots[e])
                            }), i = i || {
                                line_item_id: t.data.line_item_id,
                                advertiser_id: t.data.advertiser_id,
                                campaign_id: t.data.order_id,
                                creative_id: r,
                                is_empty: !1
                            }, permutive.track("SlotClicked", i)
                        }
                    } catch (e) {}
                }, !1)
            });
            var DFPAddon = function() {
                function e(e) {
                    var t = this;
                    this.trackedTargetingLimitMetric = !1;
                    var n = _internals.getExternalData(DFP_SEGMENTS_STORAGE_KEY);
                    this.liveSegments = n ? JSON.parse(n) : [], this.eligibleSegments = {};
                    for (var r = _internals.state.reactionManager.getSpecializedReactions("target_dfp"), i = 0; i < r.dfp.length; i++) {
                        var o = r.dfp[i];
                        this.eligibleSegments[o] = o
                    }
                    for (var a in r.dfp_legacy)
                        if (r.dfp_legacy.hasOwnProperty(a)) {
                            var s = r.dfp_legacy[a];
                            this.eligibleSegments[a] = s
                        } var u = _internals.state.queryManager.userSegments;
                    this.updateSegments(this.filterSegments(u)), _internals.messages.emit("permutive:dfp:ready"), _internals.messages.on("permutive:segments:updated", makeSafe(function() {
                        var e = _internals.state.queryManager.userSegments;
                        t.updateIfNecessary(e)
                    })), _internals.messages.on("permutive:reset", makeSafe(function() {
                        _internals.removeExternalData(DFP_SEGMENTS_STORAGE_KEY), _internals.deleteCookie(DFP_SEGMENTS_STORAGE_KEY), t.liveSegments = []
                    }))
                }
                return e.prototype.updateIfNecessary = function(e) {
                    var t = this.filterSegments(e);
                    _internals.arraysEqual(t, this.liveSegments) || this.updateSegments(t)
                }, e.prototype.updateSegments = function(e) {
                    var t = this.processActivations(_internals.thirdParty.getActivationMetadata()),
                        n = e.concat(t);
                    encodeURIComponent(JSON.stringify(n)).length > 1500 && (n = e, this.trackedTargetingLimitMetric || (_internals.metrics.track({
                        name: "sdk_targeting_size_limit_exceeded_count",
                        value: 1,
                        labels: {
                            target: "dfp"
                        }
                    }), this.trackedTargetingLimitMetric = !0)), window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function() {
                        googletag.pubads().setTargeting("permutive", n.concat(["rts"]))
                    });
                    var r = JSON.stringify(n);
                    _internals.setExternalData(DFP_SEGMENTS_STORAGE_KEY, r), _internals.setCookie(DFP_SEGMENTS_STORAGE_KEY, r), this.liveSegments = e
                }, e.prototype.filterSegments = function(e) {
                    var t = this;
                    return e.filter(function(e) {
                        return e in t.eligibleSegments
                    }).map(function(e) {
                        return t.eligibleSegments[e]
                    })
                }, e.prototype.processActivations = function(e) {
                    var t = [];
                    for (var n in e)
                        if (e.hasOwnProperty(n) && n in this.eligibleSegments)
                            for (var r = 0; r < e[n].length; r++) t.push(e[n][r]);
                    return t
                }, e
            }();
            _internals.messages.on("permutive:blockers:empty", function() {
                _internals.eventHandler = new EventHandler;
                var e = new PermutiveMethods;
                PermutiveUtils.extend(permutive, e), permutive.config.exposeInternals && PermutiveUtils.extend(permutive, _internals), _internals.setAsReady(), _internals.applyQueue(), delete permutive.q, _internals.messages.emit("permutive:queue:executed")
            });
            var retrieveThirdPartyIdentities_1 = function() {
                    return _internals.identities.retrieveAllIdentities()
                },
                initThirdPartyState = function() {
                    return retrieveThirdPartyIdentities_1().then(function(e) {
                        return _internals.thirdParty.segments().then(function() {
                            return _internals.thirdParty.fireThirdPartySegmentEvent()
                        }), e
                    })
                },
                initIdentity = function() {
                    var e = PermutiveUtils.deferredPromise();
                    if (_internals.log("<call> init identity "), null === _internals.state.getUserId()) {
                        var t = _internals.randomUuid();
                        _internals.log("Cookie user id is null, creating new id: " + t), _internals.state.setUserId(t)
                    }
                    _internals.state.setUserId(_internals.state.getUserId()), permutive.context.user_id = _internals.state.userId, permutive.q.filter(function(e) {
                        return "identify" === e.functionName
                    }).forEach(function(e) {
                        return makeSafe(function() {
                            var t = PermutiveIdentities.getAliasesFromIdentifyArg(e.arguments[0]);
                            _internals.api.identify(t)
                        })()
                    }), permutive.q = permutive.q.filter(function(e) {
                        return "identify" !== e.functionName
                    });
                    var n = _internals.identities.previousAliases,
                        r = _internals.identities.currentAliases;
                    if (_internals.identities.areAliasesEqual(n, r)) _internals.log("Aliases are equal, skipping identifying...", n, r), e.resolve({
                        identityChanged: !1,
                        userId: _internals.state.userId
                    });
                    else {
                        _internals.log("Aliases have changed...", n, r);
                        var i = _internals.state.userId,
                            o = {
                                success: function(t) {
                                    var n = t.user_id,
                                        o = !1;
                                    n !== i && (_internals.log("Got different user id from API: " + n), _internals.state.reset(), _internals.state.setUserId(n), o = !0), _internals.identities.storeAliases(r), e.resolve({
                                        identityChanged: o,
                                        userId: n
                                    })
                                },
                                error: function() {
                                    _internals.error("Couldn't set identity for user " + i), e.resolve({
                                        identityChanged: !1,
                                        userId: i
                                    })
                                }
                            };
                        _internals.api.sendIdentify(i, r, o)
                    }
                    return e.promise.then(function(e) {
                        _internals.messages.emit("permutive:user:ready"), _internals.setIdentityReady(), _internals.log("<done> init identity ", e)
                    }), e.promise
                },
                identityChanged_1 = function() {
                    _internals.log("Identity has changed");
                    var e = _internals.state.eventsCache.refresh({
                        from: new Date(0)
                    });
                    return _internals.state.eventsCache.setReady(), e.then(function(e) {
                        var t = _internals.state.eventsCache.processRefreshEvents(e, {
                            write: !0
                        });
                        return _internals.log("Retrieved full event history from API"), _internals.state.queryManager.updateSegmentResults(t), _internals.state.queryManager.initWorker(t)
                    })
                },
                identityRemained_1 = function() {
                    _internals.log("Identity hasn't changed");
                    var e = _internals.state.eventsCache.refresh();
                    return eventCache_1.then(function(e) {
                        _internals.log("Loaded local event cache");
                        var t = _internals.state.eventsCache.processCachedEvents(e);
                        return _internals.state.eventsCache.setReady(), _internals.state.queryManager.initWorker(t)
                    }).then(function() {
                        return e
                    }).then(function(e) {
                        var t = _internals.state.eventsCache.processRefreshEvents(e, {
                            write: !0
                        });
                        return _internals.log("Updating query states with unseen events from API (#e)", t.length), _internals.state.queryManager.updateWithHistoricSegments(t)
                    })
                };
            initThirdPartyState().then(initIdentity).then(function(e) {
                return e.identityChanged ? identityChanged_1() : identityRemained_1()
            }).then(function() {
                return Promise.all([_internals.thirdParty.segments(), _internals.models.getModels()]).then(function(e) {
                    return _internals.log("Loaded TPD segments and lookalike models", e), _internals.state.queryManager.updateEnvironment({
                        segments: PermutiveUtils.merge({
                            "1p": _internals.state.queryManager.userSegmentsDict
                        }, e[0]),
                        lookalikeModels: e[1]
                    })
                }).then(function() {
                    _internals.state.queryManager.setAsReady()
                })
            }).then(function() {
                _internals.messages.emit("permutive:api:ready")
            }), _internals.messages.emit("permutive:library:loaded")
        } catch (e) {
            _internals.error(e)
        }
    }
    var wwSupport = !!window.Worker && !!window.Blob,
        mod = "modernizr",
        lsSupport = !0;
    try {
        localStorage.setItem(mod, mod), localStorage.removeItem(mod)
    } catch (e) {
        lsSupport = !1
    }
    if (wwSupport && lsSupport) {
        var sdkInitTimestamp = void 0;
        void 0 !== window.performance && void 0 !== window.performance.now && (sdkInitTimestamp = performance.now());
        var LZBlob = new Blob([("(" + lzWorkerFunction + ")();").replace('"use strict";', "")], {
                type: "application/javascript"
            }),
            LZWorkerBlobURL = URL.createObjectURL(LZBlob),
            worker = new Worker(LZWorkerBlobURL),
            counter = 0,
            LZWorker = {
                compress: function(e, t) {
                    worker.onmessage = function(e) {
                        t(e.data)
                    }, worker.postMessage({
                        type: "compress",
                        value: e
                    })
                },
                decompress: function(e, t) {
                    worker.onmessage = function(e) {
                        t(e.data)
                    }, worker.postMessage({
                        type: "decompress",
                        value: e
                    })
                }
            };
        ! function(e) {
            function t() {}

            function n(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }

            function r(e) {
                if (!(this instanceof r)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
            }

            function i(e, t) {
                for (; 3 === e._state;) e = e._value;
                0 !== e._state ? (e._handled = !0, r._immediateFn(function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                        var r;
                        try {
                            r = n(e._value)
                        } catch (e) {
                            return void a(t.promise, e)
                        }
                        o(t.promise, r)
                    } else(1 === e._state ? o : a)(t.promise, e._value)
                })) : e._deferreds.push(t)
            }

            function o(e, t) {
                try {
                    if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var i = t.then;
                        if (t instanceof r) return e._state = 3, e._value = t, void s(e);
                        if ("function" == typeof i) return void c(n(i, t), e)
                    }
                    e._state = 1, e._value = t, s(e)
                } catch (t) {
                    a(e, t)
                }
            }

            function a(e, t) {
                e._state = 2, e._value = t, s(e)
            }

            function s(e) {
                2 === e._state && 0 === e._deferreds.length && r._immediateFn(function() {
                    e._handled || r._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++) i(e, e._deferreds[t]);
                e._deferreds = null
            }

            function u(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
            }

            function c(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0, o(t, e))
                    }, function(e) {
                        n || (n = !0, a(t, e))
                    })
                } catch (e) {
                    if (n) return;
                    n = !0, a(t, e)
                }
            }
            if (!e.Promise) {
                var l = setTimeout;
                r.prototype.catch = function(e) {
                    return this.then(null, e)
                }, r.prototype.then = function(e, n) {
                    var r = new this.constructor(t);
                    return i(this, new u(e, n, r)), r
                }, r.prototype.finally = function(e) {
                    var t = this.constructor;
                    return this.then(function(n) {
                        return t.resolve(e()).then(function() {
                            return n
                        })
                    }, function(n) {
                        return t.resolve(e()).then(function() {
                            return t.reject(n)
                        })
                    })
                }, r.all = function(e) {
                    return new r(function(t, n) {
                        function r(e, a) {
                            try {
                                if (a && ("object" == typeof a || "function" == typeof a)) {
                                    var s = a.then;
                                    if ("function" == typeof s) return void s.call(a, function(t) {
                                        r(e, t)
                                    }, n)
                                }
                                i[e] = a, 0 == --o && t(i)
                            } catch (e) {
                                n(e)
                            }
                        }
                        if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                        var i = Array.prototype.slice.call(e);
                        if (0 === i.length) return t([]);
                        for (var o = i.length, a = 0; a < i.length; a++) r(a, i[a])
                    })
                }, r.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === r ? e : new r(function(t) {
                        t(e)
                    })
                }, r.reject = function(e) {
                    return new r(function(t, n) {
                        n(e)
                    })
                }, r.race = function(e) {
                    return new r(function(t, n) {
                        for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
                    })
                }, r._immediateFn = "function" == typeof setImmediate && function(e) {
                    setImmediate(e)
                } || function(e) {
                    l(e, 0)
                }, r._unhandledRejectionFn = function(e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }, e.Promise = r
            }
        }(window);
        var PermutiveUtils = function() {
                function e() {}
                return e.mergeNestedObjects = function(e, t) {
                    return [e, t].reduce(function(e, t) {
                        return Object.keys(t).forEach(function(n) {
                            e[n] = t[n]
                        }), e
                    }, {})
                }, e.merge = function(e, t) {
                    return this.extend(e, t)
                }, e.extend = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    e = e || {};
                    for (var r = 1; r < arguments.length; r++)
                        if (arguments[r])
                            for (var i in arguments[r]) e[i] = arguments[r][i];
                    return e
                }, e.swap = function(e) {
                    var t = {};
                    for (var n in e) t[e[n]] = n;
                    return t
                }, e.lens = function(e, t) {
                    var n, r = t.length;
                    for (n = 0;
                        "object" == typeof e && n < r; ++n) e = e[t[n]];
                    return e
                }, e.deferredPromise = function() {
                    var e, t;
                    return {
                        promise: new Promise(function(n, r) {
                            e = n, t = r
                        }),
                        reject: t,
                        resolve: e
                    }
                }, e.ajax = function(e) {
                    return new Promise(function(t, n) {
                        var r = {},
                            i = e.dataType ? e.dataType : "json",
                            o = new XMLHttpRequest;
                        if (e.contentType && function(e, t) {
                                r[e.toLowerCase()] = [e, t]
                            }("Content-Type", e.contentType), o.onload = function() {
                                t("json" === i ? this.responseText ? JSON.parse(this.responseText) : null : "text" === i ? this.responseText : this.response)
                            }, o.onerror = function() {
                                _internals.error("Failed AJAX request"), n(new TypeError("Network request failed"))
                            }, o.ontimeout = function() {
                                _internals.error("AJAX request timed out"), n(new TypeError("Network request timed out"))
                            }, e.beforeSend && e.beforeSend(o), o.open(e.type ? e.type : "GET", e.url, !0), e.timeout && (o.timeout = e.timeout), e.xhrFields)
                            for (var a in e.xhrFields) o[a] = e.xhrFields[a];
                        for (var s in r) r.hasOwnProperty(s) && o.setRequestHeader(r[s][0], r[s][1]);
                        o.send(e.data ? e.data : null)
                    })
                }, e.poller = function(e, t, n) {
                    function r(e, t, a) {
                        if (!(o || i >= n)) {
                            var s = null;
                            try {
                                s = e()
                            } catch (e) {
                                return
                            }
                            s ? t() : setTimeout(function() {
                                i++, r(e, t, 2 * a)
                            }, a)
                        }
                    }
                    void 0 === n && (n = 30);
                    var i = 0,
                        o = !1;
                    return r(e, t, 50), {
                        cancel: function() {
                            o = !0
                        }
                    }
                }, e
            }(),
            permutive = window.permutive,
            PERMUTIVE_CONFIG = {
                default: {
                    apiHost: "api.permutive.com",
                    cdnBaseUrl: "cdn.permutive.com",
                    apiVersion: "v2.0",
                    apiProtocol: "https",
                    loggingEnabled: !1,
                    requestTimeout: 5e3,
                    cookieName: "permutive-id",
                    cookieExpiry: threeYearsFromNow(),
                    permutiveDataKey: "permutive-data",
                    stateNamespace: "",
                    sendClientErrors: !0,
                    storeIP: !1,
                    exposeInternals: !1,
                    metricsSamplingPercentage: 10
                },
                production: {},
                development: {
                    apiProtocol: "http",
                    loggingEnabled: !0,
                    sendClientErrors: !1,
                    exposeInternals: !0
                }
            };
        permutive.config.cookieDomain = "." + extractDomain(window.location.hostname), Object.keys(PERMUTIVE_CONFIG.default).forEach(function(e) {
            var t = e;
            void 0 !== permutive.config[t] || (void 0 !== PERMUTIVE_CONFIG[permutive.config.environment][t] ? permutive.config[t] = PERMUTIVE_CONFIG[permutive.config.environment][t] : permutive.config[t] = PERMUTIVE_CONFIG.default[t])
        });
        var PermutiveMetricsNoOp = function() {
                function e() {}
                return e.prototype.track = function(e) {}, e.prototype.trackTimeSinceInit = function(e, t) {}, e.prototype.startTimer = function(e, t) {}, e.prototype.stopTimer = function(e, t) {}, e
            }(),
            PermutiveMetrics = function() {
                function e(e, t) {
                    void 0 === t && (t = 5);
                    var n = this;
                    this.sdkInitTimestamp = e, this.pendingMetrics = [], this.pendingTimers = {}, permutive.ready(function() {
                        window.setInterval(n.processPending.bind(n), 1e3 * t), window.addEventListener("beforeunload", function() {
                            n.processPending.bind(n)
                        }, !1)
                    }), this.track({
                        name: "sdk_initialisation_start_time_seconds",
                        value: e / 1e3,
                        labels: {}
                    })
                }
                return e.prototype.track = function(e) {
                    this.pendingMetrics.push(e)
                }, e.prototype.trackTimeSinceInit = function(e, t) {
                    var n = performance.now();
                    this.track({
                        name: e,
                        value: (n - this.sdkInitTimestamp) / 1e3,
                        labels: t
                    })
                }, e.prototype.startTimer = function(e, t) {
                    var n = performance.now();
                    this.pendingTimers[this.getUniqueKey(e, t)] = {
                        startTime: n,
                        labels: t
                    }
                }, e.prototype.stopTimer = function(e, t) {
                    var n = this.pendingTimers[this.getUniqueKey(e, t)];
                    if (n) {
                        var r = performance.now();
                        this.track({
                            name: e,
                            value: (r - n.startTime) / 1e3,
                            labels: n.labels
                        }), delete this.pendingTimers[e]
                    }
                }, e.prototype.processPending = function() {
                    this.pendingMetrics.length > 0 && (_internals.api.metrics({
                        context: {
                            environment: "web",
                            events_count: _internals.state.eventsCache.all().length,
                            segments_count: Object.keys(_internals.state.queryManager.queryStateMap).length
                        },
                        items: this.pendingMetrics
                    }), this.pendingMetrics = [])
                }, e.prototype.getUniqueKey = function(e, t) {
                    return e + ":" + JSON.stringify(t)
                }, e
            }(),
            PermutiveCore = function() {
                function e(e) {
                    this.listenForBlockers = !0, this.clientErrorsSent = 0, this.isReady = !1, this.isRealtime = !1, this.isIdentityReady = !1, this.config = e
                }
                return e.prototype.getEndpointUrl = function(e) {
                    return this.config.apiProtocol + "://" + this.config.apiHost + "/" + this.config.apiVersion + e
                }, e.prototype.utcNow = function() {
                    var e = new Date;
                    return new Date(e.toUTCString())
                }, e.prototype.req = function(e) {
                    var t = this,
                        n = e.url,
                        r = e.method || "GET",
                        i = "";
                    e.data && e.jsonInParams ? i = {
                        data: encodeURIComponent(JSON.stringify(e.data))
                    } : e.data && (i = JSON.stringify(e.data));
                    var o = e.contentType ? e.contentType : e.jsonInParams ? "application/x-www-form-urlencoded" : "application/json",
                        a = function(e) {
                            e.setRequestHeader("X-API-Key", t.config.apiKey)
                        };
                    if (e.apiKeyInParams && ("GET" === r ? (a = function() {}, -1 === n.indexOf("?") ? n += "?k=" + this.config.apiKey : n += "&k=" + this.config.apiKey) : "POST" === r && (a = function() {}, n += "?k=" + this.config.apiKey)), e.useBeacon && navigator.sendBeacon) {
                        var s = navigator.sendBeacon(n, i);
                        if (e.complete && e.complete("200"), s) return e.success && e.success(i), Promise.resolve(i);
                        var u = "Failed to queue beacon";
                        return e.error && e.error(u), Promise.reject(u)
                    }
                    return PermutiveUtils.ajax({
                        type: r,
                        url: n,
                        contentType: o,
                        dataType: e.dataType ? e.dataType : "json",
                        data: i,
                        timeout: this.config.timeout,
                        beforeSend: a
                    }).then(function(t) {
                        return e.success && e.success(t), t
                    }, function(t) {
                        return e.error && e.error(t), null
                    }).then(function(t) {
                        return e.complete && e.complete("200"), t
                    })
                }, e.prototype.log = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.config.loggingEnabled && window.console && window.console.log && (e.splice(0, 0, "[Permutive]"), console.log.apply(console, e))
                }, e.prototype.error = function(e) {
                    if (this.config.sendClientErrors) {
                        if (this.clientErrorsSent > 3) return;
                        this.clientErrorsSent += 1;
                        var t = {
                            user_id: void 0 !== _internals.state ? _internals.state.userId : "",
                            domain: window.location.hostname ? window.location.hostname : "",
                            url: window.location.href ? window.location.href : "",
                            referrer: document.referrer ? document.referrer : "",
                            user_agent: navigator.userAgent ? navigator.userAgent : "",
                            error_message: "",
                            stack_trace: "",
                            additional_details: ""
                        };
                        e instanceof Error ? (void 0 !== e.message && (t.error_message = e.message.toString()), void 0 !== e.stack && (t.stack_trace = e.stack.toString())) : t.additional_details = e.toString(), this.req({
                            url: this.getEndpointUrl("/internal/errors"),
                            method: "POST",
                            data: t,
                            contentType: "text/plain",
                            dataType: "text",
                            apiKeyInParams: !0
                        })
                    } else window.console && (window.console.error ? window.console.error("[Permutive]", e) : window.console.log && window.console.log("[Permutive]", e))
                }, e.prototype.createUser = function(e) {
                    e({
                        user_id: _internals.randomUuid()
                    })
                }, e.prototype.applyQueue = function() {
                    for (var e = [], t = [], n = [], r = [], i = [], o = 0; o < permutive.q.length; o++) "identify" === (s = permutive.q[o]).functionName ? e.push(s) : "trigger" === s.functionName ? t.push(s) : "addon" === s.functionName ? n.push(s) : "track" === s.functionName ? r.push(s) : i.push(s);
                    for (var a = e.concat(t).concat(n).concat(r).concat(i), o = 0; o < a.length; o++) {
                        var s = a[o];
                        s.functionName in permutive ? permutive[s.functionName].apply(permutive, s.arguments) : this.error('Function "permutive.' + s.functionName + '" does not exist.')
                    }
                }, e.prototype.setAsReady = function() {
                    this.isReady = !0, _internals.metrics.trackTimeSinceInit("sdk_initialisation_task_duration_seconds", {}), _internals.messages.emit("permutive:ready")
                }, e.prototype.setAsRealtime = function() {
                    this.isRealtime = !0, _internals.metrics.trackTimeSinceInit("sdk_realtime_targeting_set_task_duration_seconds", {}), _internals.messages.emit("permutive:realtime")
                }, e.prototype.setIdentityReady = function() {
                    this.isIdentityReady = !0, _internals.messages.emit("permutive:identity:ready")
                }, e.prototype.addBlocker = function(e) {
                    var t = this;
                    _internals.blockers.push(e), this.log("<blockers> added blocker " + e), _internals.messages.on(e, function() {
                        if (t.listenForBlockers) {
                            var n = _internals.blockers.indexOf(e);
                            n >= 0 && (_internals.blockers.splice(n, 1), t.log("<blockers> removed blocker " + e)), 0 === _internals.blockers.length && (t.listenForBlockers = !1, _internals.messages.emit("permutive:blockers:empty"), t.log("<blockers> complete"))
                        }
                    })
                }, e.prototype.getNamespacedStorageKey = function(e) {
                    return "" + permutive.config.stateNamespace + e
                }, e.prototype.setCookie = function(e, t) {
                    if (!(t && e && this.config.cookieExpiry && this.config.cookieDomain)) return !1;
                    var n = _internals.getNamespacedStorageKey(e);
                    return document.cookie = encodeURIComponent(n) + "=" + encodeURIComponent(t) + "; expires=" + this.config.cookieExpiry + "; domain=" + this.config.cookieDomain + "; path=/", !0
                }, e.prototype.getCookie = function(e, t) {
                    void 0 === t && (t = !1);
                    var n = t ? e : _internals.getNamespacedStorageKey(e),
                        r = new RegExp(encodeURIComponent(n) + "=([^;]+)").exec(document.cookie);
                    return null !== r ? decodeURIComponent(r[1]) : null
                }, e.prototype.deleteCookie = function(e) {
                    if (!e || !this.config.cookieDomain) return !1;
                    var t = _internals.getNamespacedStorageKey(e);
                    return document.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + this.config.cookieDomain + "; path=/", !0
                }, e.prototype.getExternalData = function(e) {
                    var t = _internals.getNamespacedStorageKey(e);
                    return localStorage.getItem(t)
                }, e.prototype.setExternalData = function(e, t) {
                    var n = _internals.getNamespacedStorageKey(e);
                    localStorage.setItem(n, t)
                }, e.prototype.removeExternalData = function(e) {
                    var t = _internals.getNamespacedStorageKey(e);
                    localStorage.removeItem(t)
                }, e.prototype.randomUuid = function() {
                    var e = (new Date).getTime();
                    return "undefined" != typeof performance && "function" == typeof performance.now && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                        var n = (e + 16 * Math.random()) % 16 | 0;
                        return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
                    })
                }, e.prototype.arraysEqual = function(e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t) return !1;
                    if (e.length !== t.length) return !1;
                    for (var n = 0; n < e.length; ++n)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }, e
            }(),
            PermutivePromises = function() {
                function e() {
                    this.promises = {}
                }
                return e.prototype.addPromise = function(e, t, n, r) {
                    var i = this;
                    e in this.promises || (this.promises[e] = {}), this.promises[e][t] = r, window.setTimeout(function() {
                        i.resolvePromise(e, t)
                    }, n)
                }, e.prototype.createPromise = function(e, t, n) {
                    this.addPromise(e, t, n, PermutiveUtils.deferredPromise())
                }, e.prototype.getPromise = function(e, t) {
                    return PermutiveUtils.lens(this.promises, [e, t])
                }, e.prototype.resolvePromise = function(e, t) {
                    var n = this.getPromise(e, t);
                    return void 0 !== n ? (n.resolve(), n) : void 0
                }, e.prototype.getPromisesByCategory = function(e) {
                    var t = PermutiveUtils.lens(this.promises, [e]) || {};
                    return Object.keys(t).map(function(e) {
                        return t[e]
                    })
                }, e
            }(),
            _internals = new PermutiveCore(permutive.config),
            initialised = !1,
            handleConsent = function(e) {
                return "object" == typeof e && (localStorage.setItem("permutive-consent", JSON.stringify(e)), e.opt_in && null !== e.token && e.token.length > 0)
            };
        permutive.consent = function(e) {
            handleConsent(e) && !initialised && (initialiseSDK(), initialised = !0)
        };
        for (var i = 0; i < permutive.q.length; i++) {
            var funcCall = permutive.q[i];
            if ("consent" === funcCall.functionName) {
                var consentData = funcCall.arguments[0];
                handleConsent(consentData) && !initialised && (initialiseSDK(), initialised = !0)
            }
        }
        if (permutive.q = permutive.q.filter(function(e) {
                return "consent" !== e.functionName
            }), !initialised) {
            var cachedConsentData = JSON.parse(localStorage.getItem("permutive-consent")),
                optIn = cachedConsentData ? cachedConsentData.opt_in : void 0;
            permutive.config.consentRequired && optIn ? initialiseSDK() : permutive.config.consentRequired || !1 === optIn || initialiseSDK()
        }
    }
}();