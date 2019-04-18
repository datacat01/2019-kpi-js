/*! vidora-client 1.2.7 10-01-2015 */ ! function(a, b, c) {
    function d(a) {
        Qb.console && console.log && console.log(a)
    }

    function e(a) {
        Qb.console && console.error && console.error(a)
    }

    function f(a) {
        throw new Error(a)
    }

    function g(a, b) {
        return a.forEach(b)
    }

    function h(a, b) {
        for (var c in a) b(c)
    }

    function i(a, b) {
        return a.map(b)
    }

    function j(a) {
        return String(a)
    }

    function k(a) {
        return "undefined" == typeof a
    }

    function l(a) {
        return null === a
    }

    function m(a) {
        return k(a) || l(a)
    }

    function n(a) {
        return "string" == typeof a
    }

    function o(a) {
        return !l(a) && "object" == typeof a
    }

    function p(a) {
        return !m(a) && a.constructor === Array
    }

    function q(a) {
        return "function" == typeof a
    }

    function r(a, b) {
        return m(a) ? b : a
    }

    function s(a, b) {
        var c = r(a, {}),
            d = r(b, {});
        for (var e in d) c[e] = d[e];
        return c
    }

    function t(a) {
        var b = r(a, {});
        return o(b) || f("Options should be an object."), b
    }

    function u(a) {
        return JSON.parse(a)
    }

    function v(a) {
        return JSON.stringify(a)
    }

    function w(a) {
        var b = encodeURIComponent(a),
            c = b.replace(/!/g, "%21").replace(/\*/g, "%2A").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
        return c
    }

    function x(a, b) {
        return b > a ? -1 : a > b ? 1 : 0
    }

    function y(a) {
        var b = [];
        for (var c in a) {
            var d = a[c],
                e = k(d) ? [c] : [c, d];
            b.push(e)
        }
        b.sort(function(a, b) {
            return x(a, b)
        });
        var f = i(b, function(a) {
                return i(a, w).join("=")
            }),
            g = f.join("&");
        return g
    }

    function z() {
        var a = new Date;
        return a.getTime()
    }

    function A(a, b) {
        return a.indexOf(b) >= 0
    }

    function B() {
        var a = Sb.userAgent;
        return A(a, "MSIE ") || A(a, "Trident/") || A(a, "Edge/")
    }

    function C(a) {
        var b = new Uint16Array(a);
        crypto.getRandomValues(b);
        for (var c = [], d = 0; d < b.length; d++) c.push(b[d]);
        return c
    }

    function D() {
        return Math.random()
    }

    function E() {
        return Math.floor(65536 * D())
    }

    function F(a) {
        for (var b = [], c = 0; Tb > c && a > c; c++) b.push(65535 & (E() ^ z()));
        for (; a > c; c++) b.push(E());
        return b
    }

    function G() {
        var a = i(Vb(10), function(a) {
            var b = (a >> 1).toString(32);
            return Wb.slice(b.length) + b
        });
        return a.join("")
    }

    function H(a) {
        var b = "string" == typeof a.setItem;
        return !m(a) && !b
    }

    function I(a, b, c) {
        try {
            return a.setItem(b, v(c)), !0
        } catch (d) {
            return e(d), !1
        }
    }

    function J(a, b) {
        var c = a.getItem(b);
        return m(c) ? null : u(c)
    }

    function K(a, b) {
        a.removeItem(b)
    }

    function L(a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = a.key(c);
            b(d)
        }
    }

    function M() {
        return H(Xb)
    }

    function N(a, b) {
        return I(Xb, a, b)
    }

    function O(a) {
        return J(Xb, a)
    }

    function P(a) {
        K(Xb, a)
    }

    function Q(a) {
        L(Xb, a)
    }

    function R(a, b, c, d) {
        var e = [];
        if (e.push(a + "=" + encodeURIComponent(b)), c) {
            var f = new Date;
            f.setTime(f.getTime() + 1e3 * c);
            var g = "expires=" + f.toUTCString();
            e.push(g)
        }
        e.push("path=/"), d && e.push("domain=" + d);
        var h = e.join("; ");
        Rb.cookie = h
    }

    function S(a) {
        for (var b = Rb.cookie.split("; "), c = 0; c < b.length; c++) {
            var d = b[c],
                e = d.indexOf("=");
            if (-1 !== e) {
                var f = d.slice(0, e);
                if (f === a) {
                    var g = d.slice(e + 1);
                    return decodeURIComponent(g)
                }
            }
        }
        return null
    }

    function T() {
        return z() + ":" + D()
    }

    function U(a) {
        return a + cc
    }

    function V(a) {
        return 0 === a.indexOf(bc) && -1 !== a.indexOf(cc)
    }

    function W(a) {
        return 0 === a.indexOf(bc) && -1 === a.indexOf(cc)
    }

    function X(a) {
        var b = U(a),
            c = 0,
            d = setInterval(function() {
                c += 1, N(b, c)
            }, _b);
        return d
    }

    function Y(a) {
        return O(a)
    }

    function Z(a) {
        P(a), setTimeout(function() {
            P(a)
        }, 100)
    }

    function $(a, b) {
        var c = U(a);
        b && clearInterval(b), Z(c)
    }

    function _(a) {
        return O(a)
    }

    function ab(a, b) {
        N(a, b)
    }

    function bb(a) {
        var b = U(a);
        P(a), Z(b)
    }

    function cb(a, b, c) {
        var d = bc + T(),
            e = X(d);
        return ab(d, {
            data: a,
            guid: c,
            retry: 0
        }), {
            key: d,
            guid: c,
            clock: e
        }
    }

    function db(a) {
        return cb(a, 0, T())
    }

    function eb(a) {
        var b = a.key,
            c = a.clock;
        $(b, c), bb(b)
    }

    function fb(a) {
        if (a.length > Yb) {
            a.sort();
            for (var b = a.length - Zb, c = 0; b > c; c++) {
                var d = a.shift();
                bb(d)
            }
        }
    }

    function gb(a) {
        h(a, function(b) {
            var c = a[b],
                d = Y(b);
            (m(d) || d === c) && (delete a[b], Z(b))
        })
    }

    function hb(a, b) {
        var c = [];
        return g(b, function(b) {
            U(b) in a || c.push(b)
        }), c
    }

    function ib(a, b) {
        var c = [];
        g(a, function(a) {
            var b = _(a);
            if (m(b));
            else {
                var d = b.retry + 1;
                if ($b > d) {
                    var e = cb(b.data, d, b.guid);
                    c.push(e)
                }
            }
            bb(a)
        }), g(c, function(a) {
            var c = a.key,
                d = _(c);
            b(a, d.data, d.guid)
        })
    }

    function jb() {
        var a = {};
        return Q(function(b) {
            V(b) && (a[b] = Y(b))
        }), a
    }

    function kb() {
        var a = [];
        return Q(function(b) {
            W(b) && a.push(b)
        }), a
    }

    function lb(a, b) {
        if (!dc) {
            dc = !0;
            var c = kb(),
                d = jb();
            fb(c);
            var e = function() {
                gb(d);
                var e = hb(d, c);
                ib(e, a), dc = !1, b && b()
            };
            setTimeout(e, ac)
        }
    }

    function mb(a, b, c) {
        d("XHR Request Succeded: " + c.url)
    }

    function nb(a, b, c) {
        e("XHR Request Failed: " + c.url + " " + a)
    }

    function ob(a, b, c) {
        e("XHR Timeout: " + c.url)
    }

    function pb(a) {
        return a
    }

    function qb(a) {
        return a
    }

    function rb(a, b, c) {
        var d = new XMLHttpRequest;
        d.open(a, b.url, c);
        var e = "onSuccess" in b ? b.onSuccess : mb,
            f = "onError" in b ? b.onError : nb,
            g = "onTimeout" in b ? b.onTimeout : ob,
            h = "unmarshall" in b ? b.unmarshall : pb;
        return "crossDomainCredentials" in b && (d.withCredentials = b.crossDomainCredentials === !0), "timeoutMs" in b && (d.timeout = b.timeoutMs, d.ontimeout = function() {
            g.call({}, b)
        }), d.onload = function() {
            d.readyState === ec && 200 === d.status ? e.call({}, h(d.responseText), d.status, b) : f.call({}, d.statusText, d.status, d.readyState, b)
        }, d.onerror = function() {
            var a = "Unknown Error.";
            m(d.status) && m(d.statusText) ? a = "Unknown Error." : "statusText" in d && (a = d.statusText), f.call({}, a, d.status, d.readyState, b)
        }, d
    }

    function sb(a, b) {
        var c = rb(a, b, !0);
        if ("data" in b) {
            var d = "marshall" in b ? b.marshall : qb;
            "dataType" in b && c.setRequestHeader("Content-type", b.dataType), c.send(d(b.data))
        } else c.send();
        return c
    }

    function tb(a) {
        sb("GET", a)
    }

    function ub(a) {
        sb("POST", a)
    }

    function vb(a, b) {
        delete Qb[gc][b], hc.removeChild(a)
    }

    function wb(a) {
        var b = "cb_" + z().toString(16) + "_" + D().toString(16),
            c = Rb.createElement("script");
        Qb[gc][b] = function(d) {
            vb(c, b), a.onSuccess.call({}, d, ic, a)
        };
        var d = function() {
            b in Qb[gc] && (vb(c, b), a.onError.call({}, "jsonp error", jc, 0, fc, a))
        };
        c.onerror = d, c.onload = d, c.onreadystatechange = function() {
            ("loaded" === c.readyState || "complete" === c.readyState) && d()
        }, c.type = "text/javascript", c.src = a.url + "&format=jsonp&callback=" + encodeURIComponent(b), hc.appendChild(c)
    }

    function xb() {
        return !m(Sb[kc])
    }

    function yb(a, b) {
        return Sb[kc](a, b)
    }

    function zb(a, b, c) {
        function d() {
            a(e), e = []
        }
        var e = [],
            f = setTimeout(function() {}, 0);
        return {
            add: function(a) {
                clearTimeout(f), e.push(a), e.length >= c ? d() : f = setTimeout(d, b)
            },
            flush: function() {
                clearTimeout(f), d()
            }
        }
    }

    function Ab() {}

    function Bb(a, b) {
        if (s(b, nc), b.data.guid = a.guid, xb() && m(b.onSuccess)) {
            var c = yb(b.url, b.marshall(b.data));
            c && sc(a)
        } else {
            var d = b.onSuccess || Ab;
            b.onSuccess = function() {
                sc(a), d()
            }, ub(b)
        }
    }

    function Cb(a, b, c) {
        var d = m(c._baseURI) ? a._apiHost : c._baseURI,
            e = s(s({
                api_key: a.token
            }, c.query), c._params),
            f = w(a.getUserId()),
            g = b.replace("%user_id%", f);
        return d + "/" + a.apiVersion + g + "?" + y(e)
    }

    function Db(a, b, c) {
        var d = t(c),
            e = Cb(a, b, d),
            f = {
                url: e
            };
        s(f, oc), "success" in d && (f.onSuccess = d.success), "error" in d && (f.onError = d.error);
        var g = B() ? wb : tb;
        g(f)
    }

    function Eb(a, b) {
        return n(a) ? a : b(a)
    }

    function Fb(a, b) {
        if (m(a)) return a;
        for (var c = {}, d = 0; d < b.length; d++) b[d] in a && (c[b[d]] = a[b[d]]);
        return c
    }

    function Gb(a, b, c) {
        var d = t(c),
            e = s({
                api_key: a.token
            }, d._params),
            f = r(d._baseURI, a._analyticsHost),
            g = f + "/" + a.apiVersion + "/validate?" + y(e),
            h = {
                url: g,
                data: {
                    data: b
                }
            },
            i = rc(h);
        "success" in d && (h.onSuccess = d.success), Bb(i, h)
    }

    function Hb(a, b) {
        var c = i(b, function(a) {
            return a[0]
        });
        Gb(a, c)
    }

    function Ib(a, b, c, d) {
        d.query = Fb(d.query, c), Db(a, b, d)
    }

    function Jb(a, b, c) {
        a in c && (b[a] = c[a])
    }

    function Kb(a) {
        m(a) ? f("Vidora API constructed without any options.") : o(a) ? "apiKey" in a || f("Vidora API constructed without an API Key") : f("Vidora API should be constructed with an option object.");
        var b = s({}, a);
        this.token = b.apiKey, this.apiVersion = "v1";
        var c = this;
        this._queue = zb(function(a) {
            Hb(c, a)
        }, 500, 30), this._analyticsHost = lc, this._apiHost = mc, this._sendMode = pc, this._build = Pb, this._userId = null, tc(Bb)
    }

    function Lb(a) {
        a.call({}, Cc, Dc)
    }

    function Mb(a) {
        var b = a[0],
            c = a.slice(1);
        b in Cc || f("Invalid api call '" + b + "'"), Cc[b].apply(Cc, c)
    }

    function Nb(a) {
        p(a) ? Mb(a) : q(a) ? Lb(a) : f("typeof call item '" + typeof a + "' not supported.")
    }

    function Ob(a, b, c) {
        if (a[c] && a[c]._init === !0) return void e(Ac + " included twice!");
        Qb = a, Rb = b;
        var d = a[c];
        c in a || (a[c] = {}), a[c]._init = !0, a[c].push = Mb, a[c].ready = Lb, d && (d.ready = Lb, d.push = Mb, g(d._q, Nb), d = null)
    }
    var Pb = {
            version: "1.2.7",
            rev: "70defd4dcf46f60d01ad6075900d8e0381a4299b"
        },
        Qb = window,
        Rb = document,
        Sb = navigator,
        Tb = 1,
        Ub = !k(Qb.Uint16Array) && !k(Qb.crypto),
        Vb = Ub ? C : F,
        Wb = "000",
        Xb = (Qb.sessionStorage, Qb.localStorage),
        Yb = 50,
        Zb = Yb,
        $b = 3,
        _b = 5,
        ac = 3 * _b,
        bc = "vidoraRequest:",
        cc = ".clock",
        dc = !1,
        ec = 4,
        fc = 2,
        gc = "_vidora_jsonp";
    Qb[gc] = Qb[gc] || {};
    var hc = Rb.head || Rb.body || Rb,
        ic = -200,
        jc = -400,
        kc = "sendBeacon",
        lc = "https://a.vidora.com",
        mc = "//api.vidora.com",
        nc = {
            marshall: v,
            dataType: "text/plain"
        },
        oc = {
            unmarshall: u
        },
        pc = 0,
        qc = 1,
        rc = Ab,
        sc = Ab,
        tc = Ab;
    M() && (rc = db, sc = eb, tc = lb), Kb.prototype.config = function(a) {
        var b = t(a);
        "analyticsHost" in b && (this._analyticsHost = b.analyticsHost), "apiHost" in b && (this._apiHost = b.apiHost)
    }, Kb.prototype.send = function(a, b, c) {
        for (var d = p(b) ? b : [b], e = this.getUserId(), g = this.getSessionId(), h = 0; h < d.length; h++) {
            var i = d[h],
                k = t(c),
                l = {
                    type: Eb(a, j),
                    user_id: Eb(e, j),
                    session_id: Eb(g, j)
                };
            m(i) || (l.content_id = Eb(i, j)), s(l, k.params);
            var n = {};
            Jb("success", n, k), Jb("error", n, k), Jb("timeout", n, k);
            var o = this._sendMode;
            switch (("click" === l.type || k.quicksend) && (o = qc), o) {
                case qc:
                    this._queue.add([l, n]), this._queue.flush();
                    break;
                case pc:
                    this._queue.add([l, n]);
                    break;
                default:
                    f()
            }
        }
    };
    var uc = "/users/%user_id%",
        vc = "/groups";
    Kb.prototype.getItems = function(a) {
        Ib(this, uc + "/recommendations", ["category", "type", "limit"], a)
    };
    var wc = ["group_ids"];
    Kb.prototype.getGroupRankings = function(a) {
        Ib(this, uc + vc + "/rankings", wc, a)
    }, Kb.prototype._pncItems = function(a) {
        Db(this, "/pnc" + uc + vc + "/items", a)
    };
    var xc = 5256e3,
        yc = "vidoraUserId";
    Kb.prototype.getUUID = function() {
        var a = S(yc);
        return l(a) && (a = G(), R(yc, a, xc)), a
    };
    var zc = G().slice(0, 10);
    Kb.prototype.getSessionId = function() {
        return zc
    }, Kb.prototype.setUserId = function(a) {
        this._userId = a
    }, Kb.prototype.getUserId = function() {
        return l(this._userId) && (this._userId = this.getUUID()), this._userId
    };
    var Ac = "vidora-client",
        Bc = Kb,
        Cc = null,
        Dc = {};
    Dc._i = function(a, b) {
        var c = s({
            apiKey: a
        }, b);
        Cc = new Bc(c), d(Ac + " " + Cc._build.version + " " + Cc._build.rev)
    }, Dc._create = function(a) {
        return new Bc(a)
    }, Ob(a, b, c)
}(window, document, "vidora");