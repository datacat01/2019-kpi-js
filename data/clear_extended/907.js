/*
 (c) Skimlinks 2009-2019
 Build time: Wed, 10 Apr 2019 12:29:01 GMT
 Version: "13.14.0-stackpath"
*/
(function() {
    function pc() {
        var a = p.linksImpressions;
        a = {
            phr: a.skimwords.urls,
            unl: a.unlinked.urls,
            slc: a.skimlinks.count,
            swc: a.skimwords.count,
            ulc: a.unlinked.count,
            jsl: (new Date).getTime() - p.loading_started,
            pref: g.referrer,
            uc: fa,
            t: 1,
            jsf: ""
        };
        return Ta(a)
    }

    function Ua(a) {
        return -1 === a.indexOf("#slm-") || (a = a.split("#slm-"), 2 !== a.length || isNaN(a[1]) || 10 * parseInt(a[1], 10) !== 10 * a[1]) ? null : parseInt(a[1], 10)
    }

    function Va(a, b) {
        b = b || ha(a);
        if (!b) return !0;
        Wa(b);
        var c = f("skimlinks_keywee_pixel", null);
        var d = r(k.location.href,
            "utm_campaign=fbkw");
        c && d && ia(c);
        f("vglnk") && D(b, "skimwords-link") && (a && a.stopPropagation ? a.stopPropagation() : (c = k.event, c.cancelBubble = !0));
        return !0
    }

    function Wa(a, b) {
        a && a.nodeName && "A" !== a.nodeName.toUpperCase() && "AREA" !== a.nodeName.toUpperCase() && (a = Xa(a));
        if (a) {
            var c = Ya(a);
            var d = h.waypointDomain;
            if (c.length >= d.length && c.substr(0, d.length) === d) return !0;
            d = -1 !== c.indexOf(d) ? c : Za(a, c);
            if (R) {
                var e = f("pageTracker");
                var n = "/" + R + "/" + c;
                null != e && e._trackPageview ? e._trackPageview(n) : f("_gaq") ? (e = f("_gaq"),
                    e.push(["_trackEvent", R, "click", c])) : f("ga") && f("ga")("send", "event", "click", R, c)
            }
            $a(a, d, b)
        }
        return !0
    }

    function ab(a) {
        q(qc, function(b) {
            null !== b.iabVendorId && bb(b.iabVendorId, a)
        });
        q(t.partner_consents, function(b, c) {
            var d = ja();
            var e = B(t, ["partner_consents", String(c)]);
            d = 46 !== c && e ? e.consent : d;
            d !== a && bb(c, a)
        });
        ta(t, ["skimlinks_consent"], a)
    }

    function bb(a, b) {
        ta(t, ["partner_consents", String(a), "consent"], b)
    }

    function ja() {
        return B(t, ["skimlinks_consent"], null)
    }

    function cb(a, b, c) {
        for (null == c && (c = !1); null != a &&
            a !== h.html_root;) {
            var d = D(a, b) || D(a, "noskim");
            if (a.className && d) return !0;
            a = c ? null : a.parentNode
        }
        return !1
    }

    function db(a) {
        var b = void 0;
        null !== h.exclude_lookup && null !== h.include_lookup || ua();
        if (!a) return !1;
        var c = h.exclude_lookup;
        for (b in c)
            if (eb.call(c, b)) {
                var d = c[b];
                if (0 === b.indexOf("*")) {
                    b = b.substr(1);
                    --d;
                    var e = a.lastIndexOf(b);
                    if (-1 !== e && e === a.length - d) return !0
                } else if (a === b) return !0
            } return !1
    }

    function va(a, b) {
        var c;
        if (c = f("_merchantSettings")) c = -1 !== b.indexOf("itunes.apple.com") || -1 !== b.indexOf("itunes.com") ||
            -1 !== b.indexOf("phobos.apple.com");
        return c || db(b) ? !1 : fb(h.hostname, a, void 0) && gb(b)
    }

    function rc(a) {
        for (var b, c, d, e, n; a && a !== h.html_root;) {
            d = a.id;
            c = 0;
            for (e = S.length; c < e; c++)
                if (b = S[c], D(a, b)) return !1;
            n = h.included_ids;
            c = 0;
            for (e = n.length; c < e; c++)
                if (b = n[c], d === b) return !1;
            e = h.excluded_classes;
            d = 0;
            for (c = e.length; d < c; d++)
                if (b = e[d], D(a, b)) return !0;
            a = a.parentNode
        }
        return S.length || h.included_ids.length ? !0 : !1
    }

    function Xa(a) {
        for (; a.parentNode;) {
            a = a.parentNode;
            var b = a.nodeName.toUpperCase();
            if ("A" === b || "AREA" ===
                b) return a
        }
        return null
    }

    function sc() {
        for (var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], b = arguments[1], c = arguments[2], d = 0; d < a.length; d++) {
            var e = hb(a[d]);
            if (!T(e)) return l(c) ? c(e, b) : e
        }
        return b
    }

    function hb(a, b, c) {
        a = k.skimlinks_settings && k.skimlinks_settings[a] || k[a];
        return T(a) ? b : l(c) ? c(a, b) : a
    }

    function f(a, b, c) {
        return ka(a) ? sc(a, b, c) : hb(a, b, c)
    }

    function ib() {
        return B(la(), ["runTimeInfo", "isAdblockUser"])
    }

    function H(a) {
        return a.replace(/^www\./i, "")
    }

    function jb() {
        for (var a = "", b = 0; 8 > b; b++) a +=
            Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        return a
    }

    function l(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    }

    function K(a, b, c) {
        for (var d = 0, e = null === a ? 0 : a.length; d < e;) c = b(c, a[d], d, a), d += 1;
        return c
    }

    function ma(a) {
        return "console" in window && l(window.console[a]) ? window.console[a] : function() {}
    }

    function na(a, b) {
        return K(b, function(b, d) {
            return b && l(a[d])
        }, !0)
    }

    function tc() {
        try {
            var a = JSON.stringify({
                a: 1
            });
            return 1 === JSON.parse(a).a
        } catch (b) {
            return !1
        }
    }

    function x(a, b) {
        var c =
            Error(b);
        c.name = a;
        kb(c, "getPrototypeOf" in Object ? Object.getPrototypeOf(this) : this.__proto__);
        Error.captureStackTrace && Error.captureStackTrace(c, x);
        return c
    }

    function kb(a, b) {
        "setPrototypeOf" in Object ? Object.setPrototypeOf(a, b) : a.__proto__ = b
    }

    function T(a) {
        return "undefined" === typeof a || null === a
    }

    function ka(a) {
        return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
    }

    function L(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function q(a, b) {
        if (ka(a))
            for (var c = 0; c <
                a.length; c++) b(a[c], c, a);
        else
            for (c in a) L(a, c) && b(a[c], c, a)
    }

    function C() {
        var a = arguments[0],
            b = Array.prototype.slice.call(arguments, 1);
        T(a) && (a = {});
        q(b, function(b) {
            T(b) && (b = {});
            q(Object.keys(b), function(c) {
                a[c] = b[c]
            })
        });
        return a
    }

    function wa(a, b) {
        var c = [];
        q(a, function(d, e) {
            b(d, e, a) && c.push(d)
        });
        return c
    }

    function lb() {
        return wa(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], function(a) {
            return !!a
        })
    }

    function xa(a, b) {
        if (!a) return [];
        if (!b) return [].concat(a);
        var c = [];
        q(a, function(d, e) {
            c.push(b(d,
                e, a))
        });
        return c
    }

    function I(a) {
        return T(a) ? "" : a.toString().replace(/^[\s\xA0]+|[\s\xA0]+$/g, "")
    }

    function uc() {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
        return 0 === (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "").slice(2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0).indexOf(a)
    }

    function mb() {
        var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
            b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
            c = 2 < arguments.length && void 0 !== arguments[2] ?
            arguments[2] : 0;
        c = c < a.length ? c | 0 : a.length;
        return a.substr(c - b.length, b.length) === b
    }

    function w(a) {
        return encodeURIComponent(a).replace(/[!'()*~]/g, function(a) {
            return "%" + a.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function nb(a) {
        return w(a).replace(/%20/g, "+")
    }

    function ya(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !0,
            c = document.createElement("a");
        c.href = b ? a : vc(a);
        try {
            return H(c.hostname)
        } catch (d) {
            return ""
        }
    }

    function vc(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] :
            "http",
            c = "";
        /^https?:\/\//.test(a) || /^\/[^/]+/.test(a) || (c = /^\/\//.test(a) ? b + ":" : b + "://");
        return "" + c + a
    }

    function fb(a, b) {
        var c = ya(b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !0),
            d = mb(c, "." + a) || mb(a, "." + c);
        return c !== a && !d
    }

    function ob(a) {
        a = a.replace(/^\??/, "").split("&");
        return K(a, function(a, c) {
            if (!c) return a;
            var b = c.split(/=/),
                e = b[0];
            if (1 === b.length) return a[e] = !0, a;
            a[e] = decodeURIComponent(b.splice(1).join(""));
            return a
        }, {})
    }

    function pb(a) {
        var b = ob(window.location.search);
        return L(b,
            a)
    }

    function U(a, b) {
        var c = [];
        b = b || w;
        q(a, function(a, e) {
            c.push(e + "=" + b(a))
        });
        return c.join("&")
    }

    function za(a, b, c, d) {
        function e() {
            if (l(d.onError)) {
                var b = 400 <= h.status && 500 > h.status,
                    c = 500 <= h.status && 600 > h.status;
                d.onError(new(0 === h.status ? wc : b ? xc : c ? yc : zc)(f + " " + a + " " + h.status))
            }
        }
        b = b || {};
        d = d || {};
        var n = d.data,
            g = d.headers || {},
            f = d.method || "GET",
            h = new XMLHttpRequest;
        d.withCredentials && (h.withCredentials = !0);
        b = U(b);
        b.length && (a = a + "?" + b);
        h.open(f, a);
        q(g, function(a, b) {
            h.setRequestHeader(b, a)
        });
        h.onload = function() {
            if (l(c))
                if (200 <=
                    h.status && 300 > h.status) {
                    var a = void 0;
                    try {
                        a = JSON.parse(h.responseText)
                    } catch (Xd) {
                        a = h.responseText
                    }
                    c(a)
                } else e()
        };
        h.onerror = e;
        h.send(n);
        return h
    }

    function B(a, b, c) {
        if (!a || !b || !b.length) return c;
        for (var d = b.length, e = 0; e < d; e++) {
            var n = b[e];
            if (a && n in a) a = a[n];
            else return c
        }
        return a
    }

    function la() {
        return window.__SKIM_JS_GLOBAL__ && l(window.__SKIM_JS_GLOBAL__.getDebugInfo) ? window.__SKIM_JS_GLOBAL__.getDebugInfo() : {}
    }

    function Ac(a) {
        var b = /(?::(\d+))?:(\d+)$/,
            c = /^([^ ]+)\s\((.*)\)$/,
            d = {
                filename: a,
                "function": "?",
                lineno: null,
                colno: null,
                in_app: !0
            };
        c.test(a) && (a = a.match(c).slice(1), a = rb(a, 2), c = a[1], d["function"] = a[0], d.filename = c);
        b.test(d.filename) && (a = d.filename.match(b).slice(1), c = rb(a, 2), a = c[0], c = c[1], a && c ? (d.lineno = parseInt(a, 10), d.colno = parseInt(c, 10)) : !a && c && (d.lineno = parseInt(c, 10)), d.filename = d.filename.replace(b, ""));
        return d
    }

    function Bc(a) {
        a = a.stack.replace(a.toString(), "").replace(/^\s+at\s+/gm, "").split("\n");
        a = xa(a, function(a) {
            return I(a)
        });
        a = lb(a);
        a.reverse();
        return xa(a, Ac)
    }

    function V(a) {
        if (a &&
            sb) {
            tb.push(a);
            try {
                Cc.sendError(a)
            } catch (c) {
                if (c === a) ub.error(a);
                else {
                    var b = new Dc;
                    b.__sentryExtraData__ = {
                        logger_error_message: c.message,
                        logger_error_stack: c.stack,
                        initial_error_message: a.message,
                        intial_error_stack: a.stack
                    };
                    throw b;
                }
            }
        }
    }

    function v(a) {
        return l(a) ? function() {
            try {
                a.apply(this, arguments)
            } catch (b) {
                V(b)
            }
        } : a
    }

    function M(a) {
        var b = !1,
            c = void 0;
        return function() {
            if (b) return c;
            c = a.apply(this, arguments);
            b = !0;
            return c
        }
    }

    function E(a) {
        return "boolean" === typeof a
    }

    function Ec(a, b) {
        return K(Object.keys(b),
            function(c, d) {
                var e = a[d] === b[d];
                return c && e
            }, !0)
    }

    function J(a, b) {
        var c = Array.prototype.slice.call(arguments, 2),
            d = v(a);
        return window.setTimeout.apply(window, [d, b].concat(c))
    }

    function Fc(a, b) {
        var c = !1,
            d = void 0;
        return function() {
            if (c) return d;
            J(function() {
                c = !1
            }, b);
            c = !0;
            return d = a.apply(this, arguments)
        }
    }

    function Gc(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !1;
        if (a && (a.nodeName || a === k))
            if (y.addEventListener) {
                var e = v(c.bind(a));
                a.addEventListener(b, e, d)
            } else a.attachEvent("on" +
                b,
                function() {
                    return 7 > g.detect.version && !k.event ? (J(c.bind(a, k.event), 100), !0) : c.call(a, k.event)
                })
    }

    function Aa(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
            c = arguments[3];
        if (a) {
            var d = Fc(arguments[2], 200);
            q(b, function(b) {
                try {
                    Gc(a, b, d, c)
                } catch (n) {}
            })
        }
    }

    function ha(a) {
        var b = void 0;
        a = a.target || a.srcElement || a.originalTarget;
        var c = null != a ? null != (b = a.nodeName) ? "function" === typeof b.toUpperCase ? b.toUpperCase() : void 0 : void 0 : void 0;
        "A" !== c && "AREA" !== c && (a = Xa(a));
        return a
    }

    function m(a,
        b, c) {
        3 <= arguments.length && ("undefined" !== typeof a.setAttribute ? a.setAttribute(b, c) : a[b] = c);
        try {
            var d = a[b];
            d || (d = a.getAttribute(b));
            return d
        } catch (e) {
            return null
        }
    }

    function Hc(a, b) {
        b = b || vb;
        a.skimlinksOriginalHostname = a.hostname;
        a.skimlinksOriginalHref = a.href;
        J(function() {
            a.href = a.skimlinksOriginalHref;
            delete a.skimlinksOriginalHostname;
            delete a.skimlinksOriginalHref
        }, b)
    }

    function $a(a, b, c) {
        if (a) {
            "string" === typeof a.skimlinksOriginalHref || Hc(a, c);
            c = null;
            var d = a.childNodes.length && 3 === a.childNodes[0].nodeType;
            "msie" === g.detect.browser && d && (c = a.innerHTML);
            a.href = b;
            c && c !== a.innerHTML && (a.innerHTML = c)
        }
    }

    function wb(a, b) {
        var c = b ? b.charAt(0).toUpperCase() + b.slice(1) : "";
        return a["skimlinksOriginal" + c] || a[b]
    }

    function r(a, b) {
        return l(a.indexOf) ? -1 < a.indexOf(b) : !1
    }

    function oa(a) {
        return r(a, "go.skimresources.com") || r(a, "go.redirectingat.com") || r(h.waypointDomain, a)
    }

    function D(a, b) {
        return a && a.className && b ? r(I(a.className).split(/\s+/), b) : !1
    }

    function Ba(a) {
        var b;
        (b = rc(a)) || (b = m(a, "rel"), b = !(W ? W === b : !b || !Ca(b)));
        if (b) return "IGNORE";
        if (b = xb) null === a.offsetParent ? b = !0 : (b = k.getComputedStyle, b = l(b) ? "hidden" === b(a).visibility : !1);
        if (b) return "IGNORE";
        b = I(wb(a, "href"));
        a = H(wb(a, "hostname"));
        var c = b ? /^https?:\/\//.test(b) || /^\/\//.test(b) : !1;
        if (c && va(b, a)) {
            if (!0 === h.aff_domains[a] || L(Da, a)) return "AFFILIATE";
            if (oa(a)) return "PRE_AFFILIATED";
            if (Ea && !L(h.aff_domains, a)) return "UNKNOWN";
            if (fb(h.hostname, b, void 0) && !db(a)) return "" === g.cookie && yb ? "AFFILIATE" : "TRACK"
        }
        return "IGNORE"
    }

    function Fa(a, b) {
        var c = C({}, Ic, b || {}),
            d = document.createElement("script");
        d.src = a;
        d.type = "text/javascript";
        d.async = c.async;
        d.onload = v(c.onLoad);
        d.onerror = v(function() {
            V(new Jc(a));
            c.onError()
        });
        document.head.appendChild(d);
        return d
    }

    function zb() {
        try {
            window.top.document;
            var a = !0
        } catch (b) {
            a = !1
        }
        return a ? window.top : window
    }

    function Ga(a) {
        return Ab()[a]
    }

    function Kc(a, b, c) {
        Ha(a) && Bb[a] === b ? c(Ga(a)) : Fa(b, {
            onLoad: function() {
                Ha(a) && (Bb[a] = b, c(Ga(a)))
            }
        })
    }

    function Ha(a) {
        var b = Ab();
        return L(b, a)
    }

    function Ab() {
        X.__SKIM_JS_GLOBAL__ || (X.__SKIM_JS_GLOBAL__ = {});
        X.__SKIM_JS_GLOBAL__.modules ||
            (X.__SKIM_JS_GLOBAL__.modules = {});
        return X.__SKIM_JS_GLOBAL__.modules
    }

    function ta(a, b, c) {
        if (!a || !b || !b.length) return a;
        for (var d = b.length, e = a, n = null, h = 0; h < d; h++) {
            var f = b[h];
            if (h === d - 1) {
                try {
                    a[f] = c
                } catch (qb) {
                    e[n] = {}, e[n][f] = c
                }
                break
            }(e = !(f in a)) || (e = a[f], n = typeof e, e = !(null !== e && ("object" === n || "function" === n)));
            e && (a[f] = {});
            e = a;
            n = f;
            a = a[f]
        }
        return a
    }

    function F() {
        this.ready = !1;
        this._pendingCallback = []
    }

    function Lc(a, b) {
        return wa(a, function(a) {
            return a !== b
        })
    }

    function Mc(a) {
        pa.get("//api.skimlinks.mgr.consensu.org/iab", {}, function(b) {
            t = b;
            l(a) && a(t)
        }, {
            withCredentials: !0
        })
    }

    function Ia(a) {
        var b = {};
        if (t) {
            var c = ja();
            E(c) && (b["46"] = c);
            q(t.partner_consents, function(a, c) {
                E(a.consent) && (b[c] = a.consent)
            })
        }
        pa.post("//api.skimlinks.mgr.consensu.org/iab", {}, function(b) {
            t = b;
            l(a) && a(t)
        }, {
            data: JSON.stringify(b),
            withCredentials: !0
        })
    }

    function qa(a, b, c) {
        var d = document.createElement(a);
        q(b || {}, function(a, b) {
            var c = b.split(".");
            ta(d, c, a)
        });
        "STYLE" === d.tagName && (d.type = "text/css");
        "SCRIPT" === d.tagName && (d.type = "text/javascript");
        Cb(d,
            [].concat(c || []));
        return d
    }

    function Cb(a, b) {
        q(b, function(b) {
            if (ka(b)) Cb(a, b);
            else {
                var c = "string" === typeof b;
                "STYLE" === a.tagName && c && a.styleSheet ? a.styleSheet.cssText += b : (c && (b = document.createTextNode(b)), a.appendChild(b))
            }
        })
    }

    function Db(a) {
        if (window.matchMedia && l(window.matchMedia)) return window.matchMedia(a).matches;
        Eb += 1;
        var b = "matchmedia-test-" + Eb;
        var c = qa("div", {
            id: b
        });
        a = qa("div", {}, [c, qa("style", {}, "\n@media " + a + " {\n    #" + b + " {\n        width: 1px;\n    }\n}")]);
        document.body.appendChild(a);
        b = !1;
        try {
            var d = "getComputedStyle" in window ? window.getComputedStyle(c, null) : c.currentStyle;
            b = "1px" === d.width
        } catch (e) {}
        a.parentNode.removeChild(a);
        return b
    }

    function Nc(a) {
        a.width = 0;
        a.height = 0;
        a.style.display = "none"
    }

    function Fb(a) {
        a = a || document;
        a = a.body || a.getElementsByTagName("body")[0];
        if (!a) throw new Oc;
        return a
    }

    function ia(a, b, c) {
        N || (N = document.createElement("iframe"), Fb().appendChild(N), Nc(N));
        var d = N.contentDocument || N.contentWindow.document,
            e = Fb(d);
        e || (e = document.createElement("body"), d.appendChild(e));
        d = d.createElement("img");
        d.src = a;
        d.width = 1;
        d.height = 1;
        l(b) && (d.onload = v(b));
        l(c) && (d.onerror = v(function() {
            V(new Gb(a));
            c()
        }));
        e.appendChild(d)
    }

    function Hb(a) {
        var b = a.href;
        b = g.cookie ? b.replace(/([&?])xguid=([a-fA-F0-9]{32})/, "$1xguid=" + g.cookie) : b.replace(/([&?]xguid=[a-fA-F0-9]{32})/, "");
        b !== a.href && $a(a, b);
        return b
    }

    function Ib() {
        var a = {};
        O && (a.dnt = O);
        Y && (a.fdnt = 1);
        return a
    }

    function Jb() {
        var a = Ib();
        Kb && (a.xrf = 1);
        return a
    }

    function Pc() {
        var a = lb([!!Lb && "mouseup", "click"]);
        Aa(y, a, function(a) {
            var b = ha(a),
                d = 0 === a.button;
            if (b && d) {
                d = Ba(b);
                var e = Z(ra).moduleName;
                if (e = !(Mb() && (d === z.AFFILIATE || d === z.PRE_AFFILIATED) && Ha(e))) Z(Qc), e = !0;
                e && Nb(a, b, d)
            }
        }, !0)
    }

    function Rc() {
        Aa(y, ["auxclick", "contextmenu", "touchstart"], function(a) {
            if (a = ha(a)) {
                var b = Ba(a);
                b === z.AFFILIATE || b === z.UNKNOWN ? Wa(a, 200) : b === z.PRE_AFFILIATED && Hb(a)
            }
        }, !0)
    }

    function Nb(a, b, c) {
        c === z.AFFILIATE || c === z.UNKNOWN ? (Ob(b), aa && m(b, "target", aa), c = (c = m(b, "onclick")) && r(c.toString(), "return false") ? !0 : (c = b.onclick) && l(c) && r(c.toString(), ".preventDefault()") ?
            !0 : !1, c ? (Va(a, b), (aa ? k.open(b.href, aa) : k.open(b.href, "_blank")).focus()) : Va(a, b)) : c === z.PRE_AFFILIATED ? Hb(b) : c === z.TRACK && (a = b.href, b = {
            slmcid: Ua(a) || "",
            pubcode: P,
            referrer: k.location.toString(),
            pref: g.referrer,
            site: "" + G,
            url: a,
            custom: m(b, "data-skimlinks-tracking") || fa || "",
            xtz: g.timezone,
            uuid: g.uuid,
            product: "1"
        }, b = w(JSON.stringify(b)), a = C({
            call: "track",
            rnd: Math.random()
        }, Jb()), b = U(a) + "&data=" + b, ia("//t.skimresources.com/api/?" + b))
    }

    function Sc(a) {
        return K(a, function(a, c) {
            return a.concat(c)
        }, [])
    }

    function Ja(a) {
        a =
            a ? "." + a : "";
        return Sc(y.querySelectorAll("a[href]" + a + ", area[href]" + a))
    }

    function Tc(a) {
        var b = m(a, "rel"),
            c = H(a.hostname);
        !b && c && !0 === h.aff_domains[c] && m(a, "rel", "nofollow")
    }

    function Uc() {
        Pb && q(Ja(), Tc)
    }

    function Vc() {
        Pc();
        Rc()
    }

    function Wc() {
        g.skimlinksEnabled && (u.on("skim_js_start", Vc), u.on("EVENTS__BEACON_CALLBACK", Uc))
    }

    function Ka(a, b, c, d, e) {
        d = ((d || 0) / 1E3).toFixed(2);
        b = {
            typ: "consent",
            consent: a,
            publisher_domain_id: Xc,
            publisher_id: Yc,
            decision_time: parseFloat(d),
            test_case: Z(ra).id,
            page_url: b,
            destination_url: c
        };
        b = JSON.stringify(b);
        Qb.setItem("skimCONSENT", a);
        ia("//t.skimresources.com/api/consent?data=" + w(b), e, e)
    }

    function Zc(a) {
        (a = B(a, ["data", "country"])) && r($c, a.toUpperCase()) ? Mc(ad) : (Rb.setReady(), u.publish("EVENTS__CONSENT_RESOLVED"))
    }

    function ad() {
        var a = g.consent,
            b = g.pageLocation,
            c = ja();
        E(a) && null === c ? (ab(a), Ia()) : E(c) && c !== a && Ka(c, b, "IAB_CONSENT_SYNC", 0);
        Rb.setReady();
        u.publish("EVENTS__CONSENT_RESOLVED")
    }

    function bd(a) {
        a && (a.preventDefault && l(a.preventDefault) ? a.preventDefault() : a.returnValue = !1)
    }

    function cd(a,
        b, c) {
        var d = Z(ra).moduleName;
        if (d = Ga(d)) {
            bd(a);
            var e = g.pageLocation,
                n = I(b.href),
                f = Date.now(),
                k = "_blank" === b.target,
                l = qa("a", {
                    href: n,
                    target: k ? "_blank" : "_top",
                    rel: b.rel,
                    onclick: function(a) {
                        g.skimlinksEnabled && Nb(a, l, c)
                    }
                }),
                m = M(function(a) {
                    var b = Date.now() - f;
                    ab(a);
                    if (k) Ka(a, e, n, b), Ia(), l.click();
                    else {
                        var c = M(function() {
                                l.click()
                            }),
                            d = 0,
                            h = function() {
                                d += 1;
                                2 === d && c()
                            };
                        Ka(a, e, n, b, h);
                        Ia(h);
                        J(c, 1E3)
                    }
                });
            new d({
                anchorClone: l,
                publisherDomain: H(h.hostname),
                merchantDomain: ya(n),
                onResolve: function() {
                    return m(!0)
                },
                onReject: function() {
                    return m(!1)
                }
            })
        }
    }

    function dd() {
        if (Mb()) {
            var a = Z(ra),
                b = a.moduleName;
            a = a.getUrl;
            var c = pb("skimlinks_locale");
            var d = ob(window.location.search).skimlinks_locale;
            c = c ? d : (c = B(t, ["country"], g.country)) ? ed[c.toUpperCase()] || "en" : "en";
            c = B(t, ["locale"], c);
            a = a(c);
            Kc(b, a, fd)
        }
    }

    function fd() {
        Aa(y, ["click"], function(a) {
            var b = ha(a),
                c = 0 === a.button;
            b && c && (c = Ba(b), c !== z.AFFILIATE && c !== z.PRE_AFFILIATED || cd(a, b, c))
        }, !0)
    }

    function gd() {
        u.on("skim_js_init", function() {
            k.__SKIM_JS_GLOBAL__.bundledEntries.GDPRConsent = !0
        });
        u.on("EVENTS__CONSENT_RESOLVED", dd)
    }

    function hd() {
        var a = !Sb;
        La && (!a || y.querySelector('[data-m101-skimlinks="true"]') || y.querySelector("[data-m101-type]") || y.querySelector("[data-type][data-config]")) && Fa("//m.skimresources.com/widget/code/" + La + ".js")
    }

    function Ta(a) {
        a = {
            data: JSON.stringify(C({
                pag: k.location.href,
                guid: g.cookie,
                uuid: g.uuid,
                tz: g.timezone,
                sessid: g.sessid,
                pub: P,
                slmcid: p.campaign_ids
            }, a))
        };
        return a = C(a, Jb())
    }

    function id(a) {
        0 !== p.awaitedModules.length && (p.awaitedModules = wa(p.awaitedModules,
            function(b) {
                return b !== a
            }), 0 === p.awaitedModules.length && pa.post("//t.skimresources.com/api/track.php", {}, null, {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            data: U(pc(), nb)
        }))
    }

    function jd() {
        return K(Ja(), function(a, b) {
            var c = I(b.href),
                d = H(b.hostname),
                e;
            if (!(e = !(!D(b, "skimwords-link") && !D(b, "skimlinks-unlinked")) || !va(c, d)))
                if (b)
                    if (e = Tb.join(", ")) {
                        b: {
                            var f = b;
                            if (l(window.Element.prototype.closest)) e = f.closest(e);
                            else {
                                for (; f && 1 === f.nodeType;) {
                                    var g = f;
                                    var k = e,
                                        m = window.Element.prototype;
                                    m = m.matches || m.msMatchesSelector || m.mozMatchesSelector || m.webkitMatchesSelector;
                                    if (l(m)) g = m.call(g, k);
                                    else {
                                        k = (g.document || g.ownerDocument).querySelectorAll(k);
                                        for (m = 0; k[m] && k[m] !== g;) m += 1;
                                        g = !!k[m]
                                    }
                                    if (g) {
                                        e = f;
                                        break b
                                    }
                                    f = f.parentNode
                                }
                                e = null
                            }
                        }
                        e = !!e
                    }
            else e = !1;
            else e = !1;
            if (e) return a;
            (e = a.urls[c]) || (e = {
                count: 0,
                ae: !0 === h.aff_domains[d] || (null === h.aff_domains[d] || void 0 === h.aff_domains[d]) && Ea && !oa(d) ? 1 : 0
            });
            e.count++;
            if (d = Ua(c)) e.slmcid = d;
            d = e;
            1 === d.ae && a.count++;
            d.slmcid && (e = d.slmcid, r(p.campaign_ids, e) ||
                p.campaign_ids.push(e));
            if (!Ub && 0 === d.ae) return a;
            a.urls[c] = d;
            return a
        }, {
            urls: {},
            count: 0
        })
    }

    function Vb(a) {
        a = a || 0;
        Wb && (0 !== A.pendingRequests && 5 > a ? J(function() {
            Vb(a + 1)
        }, 400 * a) : (p.linksImpressions.skimlinks = jd(), id("main-tracking"), Object.keys(p.linksImpressions.skimlinks.urls).length && pa.post("//t.skimresources.com/api/link", {}, null, {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            data: U(Ta({
                dl: p.linksImpressions.skimlinks.urls,
                hae: p.linksImpressions.skimlinks.count ? 1 : 0,
                typ: "l"
            }), nb)
        })))
    }

    function kd() {
        Vb(0)
    }

    function ld() {
        p.awaitedModules.push("main-tracking");
        g.skimwordsEnabled && p.awaitedModules.push("skimwords");
        g.unlinkedEnabled && p.awaitedModules.push("unlinked");
        u.on("EVENTS__BEACON_CALLBACK", kd, {
            type: "BEACON_CALLBACK__POST_PAGE_LOAD"
        })
    }

    function md() {}

    function Xb(a, b) {
        Q || 1E3 < b ? l(a) && (Q ? Ma ? a(!0) : a(!1) : a(!1)) : J(Xb, b *= 2, a, b)
    }

    function Yb() {
        Q || (ba.complete && ca.complete && (Q = !0), Q && "0" != ba.width && "0" == ca.width && (Ma = !0))
    }

    function nd(a) {
        function b(a) {
            return a.toLowerCase().replace(/^\/\/|^https?:\/\//,
                "")
        }
        var c = xa(Zb, b);
        return r(c, b(a))
    }

    function od() {
        return {
            skimOptions: pd,
            runTimeInfo: C({}, {
                aff_domains: h.aff_domains
            }, {
                consentState: t
            }, {
                loggedErrors: tb
            }, g)
        }
    }

    function $b(a, b) {
        var c = !a || !a.length;
        A.called && c ? (A.pendingRequests += 1, k[b]()) : (c = C({
            callback: b
        }, {
            data: JSON.stringify({
                pubcode: P,
                page: k.location.href,
                domains: a
            })
        }, Ib()), c = "//r.skimresources.com/api/?" + U(c), c.length > ("msie" === g.detect.browser ? 2E3 : 8E3) ? $b(a.slice(0, -1), b) : (A.called = !0, A.pendingRequests += 1, Fa(c)))
    }

    function qd(a) {
        a = a || [];
        q(h.aff_domains,
            function(b, c) {
                if (!0 !== b) {
                    var d = r(a, c) && !oa(c);
                    h.aff_domains[c] = d
                }
            })
    }

    function Na(a, b) {
        var c = !!a;
        --A.pendingRequests;
        a && (h.beacon.push(a), ac += 1);
        var d = a = a || {},
            e = g.cookie,
            f = g.sessid,
            k = {};
        d.consent && (k.consent = d.consent);
        d.country && (k.country = d.country.toUpperCase());
        d.guid && "" === e && (k.cookie = d.guid);
        d.sessid && "" === f && (k.sessid = d.sessid);
        !E(g.consent) && "consent" in d && (k.consent = d.consent);
        C(g, k);
        qd(a.merchant_domains);
        d = A.readyStates.beaconApiResponse;
        c && !d.ready && A.readyStates.beaconApiResponse.setReady();
        "BEACON_CALLBACK__POST_PAGE_LOAD" === b && A.readyStates.postPageLoadBeaconHandler.setReady();
        u.publish("EVENTS__BEACON_CALLBACK", {
            type: b,
            data: a,
            isFirstCall: 1 === ac
        })
    }

    function bc(a) {
        var b;
        var c = Ja();
        var d = [];
        var e = 0;
        for (b = c.length; e < b; e++) {
            var f = c[e];
            var g = H(f.hostname);
            var k = I(f.href);
            f = m(f, "rel");
            !g || !va(k, g) || (W ? W !== f : f && Ca(f)) || oa(g) || void 0 !== h.aff_domains[g] || (d.push(g), h.domain_data.domains.push(g), h.aff_domains[g] = null)
        }
        $b(d, a)
    }

    function rd() {
        k.__SKIM_JS_GLOBAL__ || (k.__SKIM_JS_GLOBAL__ = {});
        if (!k.__SKIM_JS_GLOBAL__.init) {
            k.__SKIM_JS_GLOBAL__.init = !0;
            k.__SKIM_JS_GLOBAL__.getDebugInfo = od;
            k.__SKIM_JS_GLOBAL__.bundledEntries = sd;
            if (nd(h.hostname) || Oa && y.querySelector(Oa)) g.skimlinksEnabled = !1, g.skimwordsEnabled = !1, g.unlinkedEnabled = !1;
            "msie" === g.detect.browser && 8 >= g.detect.version && (g.skimwordsEnabled = !1);
            td.detect(function(a) {
                g.isAdblockUser = a
            });
            u.publish("skim_js_init");
            l(k.skimlinksBeaconCallback) || (k.skimlinksBeaconCallback = ud);
            l(k.skimlinksBeaconSecondaryCallback) || (k.skimlinksBeaconSecondaryCallback = vd);
            l(k.skimlinksBeaconAuxCallback) || (k.skimlinksBeaconAuxCallback =
                wd);
            r(["interactive", "complete"], y.readyState) ? J(da, 0) : (bc("skimlinksBeaconCallback"), document.addEventListener("DOMContentLoaded", da), document.addEventListener("load", da));
            u.publish("skim_js_start")
        }
    }
    var ub = {
            log: ma("log"),
            info: ma("info"),
            warn: ma("warn"),
            error: ma("error")
        },
        sb = function() {
            var a = !0;
            try {
                var b = [tc(), !!(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest), na(document, ["querySelector", "querySelectorAll"]), na(Object, ["keys"]), na([], ["indexOf"]), na("", ["indexOf"])];
                a = K(b, function(a,
                    b) {
                    return a && b
                }, !0)
            } catch (c) {
                a = !1
            }!1 === a && ub.info("[Skimlinks] Your browser doesn't support the base features necessary to run our javascript.");
            return a
        }();
    x.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    });
    kb(x, Error);
    var Oc = x.bind(null, "DocumentBodyNotFound"),
        Gb = x.bind(null, "PixelDropFailed"),
        Jc = x.bind(null, "ScriptDropFailed"),
        zc = x.bind(null, "XhrError"),
        xc = x.bind(null, "XhrError4xx"),
        yc = x.bind(null, "XhrError5xx"),
        wc = x.bind(null, "XhrErrorZero"),
        Dc = x.bind(null, "SentryLoggerError"),
        cc = "13.14.0-stackpath",
        xd = "https://s.skimresources.com/js/GDPR",
        yd = "https://s.skimresources.com/js/incentive",
        zd = "*.criteo.com *.g.doubleclick.net *mjxads.internet.com *overture.com *pgpartner.co.uk *pgpartner.com *pricegrabber.co.uk *pricegrabber.com *youtube.com m.skimresources.com paid.outbrain.com track.celtra.com traffic.outbrain.com trc.taboola.com zergnet.com ad.doubleclick.net".split(" "),
        Ad = ["noskim", "norewrite"],
        Da = {
            "t.umblr.com": {
                name: "z"
            }
        },
        P = "122276X1583643",
        Yc = 122276,
        Xc = 1583643,
        dc = "f648b8dfc7284fad8af093653eafd6ca",
        rb = function() {
            return function(a, b) {
                if (Array.isArray(a)) return a;
                if (Symbol.iterator in Object(a)) {
                    var c = [],
                        d = !0,
                        e = !1,
                        f = void 0;
                    try {
                        for (var g = a[Symbol.iterator](), h; !(d = (h = g.next()).done) && (c.push(h.value), !b || c.length !== b); d = !0);
                    } catch (qb) {
                        e = !0, f = qb
                    } finally {
                        try {
                            if (!d && g["return"]) g["return"]()
                        } finally {
                            if (e) throw f;
                        }
                    }
                    return c
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        }(),
        Bd = 1 > 1E3 * Math.random(),
        Cc = {
            sendError: function(a) {
                if (!dc) throw a;
                var b = Bd ? a instanceof Gb && ib() ? !1 : !0 : !1;
                if (b) {
                    b = {
                        sentry_version: "7",
                        sentry_client: "raven-js/3.26.4",
                        sentry_key: dc
                    };
                    var c = {
                        country: B(la(), ["runTimeInfo", "country"]),
                        beacon_consent: B(la(), ["runTimeInfo", "consent"]),
                        iab_consent: B(la(), ["runTimeInfo", "consentState", "skimlinks_consent"]),
                        is_adblock_user: ib(),
                        is_top_frame: window.top === window
                    };
                    a = {
                        event_id: jb(),
                        project: "46",
                        platform: "javascript",
                        logger: "javascript",
                        release: cc,
                        exception: {
                            values: [{
                                type: a.name,
                                value: a.message,
                                stacktrace: {
                                    frames: Bc(a)
                                }
                            }]
                        },
                        request: {
                            headers: {
                                "User-Agent": navigator.userAgent
                            },
                            url: location.href
                        },
                        extra: C({
                            original_stacktrace: a.stack
                        }, a.__sentryExtraData__, c)
                    };
                    za("https://sl-sentry.skimlinks.com/api/46/store/", b, null, {
                        method: "POST",
                        data: JSON.stringify(a)
                    })
                }
            }
        },
        tb = [],
        ec = window.skimlinks_context_window || null,
        k = ec ? window[ec] : window,
        y = k.document,
        Qb = {
            getItem: function(a) {
                try {
                    return JSON.parse(localStorage.getItem(a))
                } catch (b) {
                    return null
                }
            },
            setItem: function(a,
                b) {
                try {
                    localStorage.setItem(a, JSON.stringify(b))
                } catch (c) {}
            }
        },
        Pa = f("noskim", !1),
        Cd = f("noskimlinks", !1),
        Dd = f("noskimwords", !0),
        Ed = f("nounlinked", !0),
        Fd = f("skimwords_standard", false),
        Gd = f("skimwords_lite", false),
        Hd = f("skimwords_diy", false),
        Id = f("skimwords_diy_filter", false),
        fc = !Pa && !Cd,
        gc = !Pa && !Dd,
        hc = !Pa && !Ed,
        O = f("skimlinks_dnt", 0, function(a) {
            return a && "0" !== a && "false" !== a ? 1 : 0
        }),
        Y = f("skimlinks_nocookie",
            !1),
        S = f("skimlinks_included_classes", []),
        ic = f("skimlinks_excluded_classes", []),
        jc = f("skimlinks_exclude", []),
        kc = f("skimlinks_include", []),
        lc = f("skimlinks_included_ids", []),
        Qa = f("skimlinks_exrel", ""),
        W = f("skimlinks_byrel", !1),
        xb = f("skimlinks_ignore_hidden_links", false),
        Tb = f("skimlinks_link_impression_exclude_selector", []),
        Pb = f("skimlinks_add_nofollow", false),
        Lb = f("skimlinks_before_click_handler", false, function(a, b) {
            return E(a) ? a : b
        }),
        yb = f("skimlinks_first_party_na", !1),
        Jd = f("skimlinks_cookie_sync_optout", !0),
        Wb = !f("noimpressions", !1),
        Ub = false,
        vb = f("skimlinks_replace_timeout", 300,
            function(a, b) {
                var c = parseFloat(a);
                return isNaN(c) ? b : c
            }),
        Ea = f("skimlinks_affiliate_unknown_links", true),
        aa = f("skimlinks_target", null),
        Kd = f("skimlinks_ajax_rerun", false),
        ea = f("sl_test", !1),
        Kb = f("skimlinks_revenue_forecast", false),
        Ld = f("skimlinks_noright", false),
        mc = f("skimlinks_url_extraction_rules", !1) || false,
        Ra = f("skimlinks_extra_redir_params", []).join("&"),
        fa = f(["affiliate_tracking", "skimlinks_tracking"], !1),
        sa = f("force_location"),
        G = f(["skimlinks_site", "skimlinks_sitename"], !1),
        Sa = f("skimlinks_domain", ""),
        R = f("skimlinks_google", false, function(a, b) {
            return a ? E(a) ? a ? "skimout" : "" : I(a) : b ? "skimout" : ""
        }),
        Zb = f("noskim_domains", []),
        Md = f("skimwords_horizontal_distance", 80),
        Nd = f("skimwords_vertical_distance",
            80),
        Od = false,
        Pd = f("skimwords_color", null),
        Qd = f("skimwords_weight", null),
        Rd = f("skimwords_decoration", null),
        Sd = f("skimwords_style", null),
        Td = f("skimwords_title", null),
        Oa = f("no_skim_selector", ""),
        La = "122276X1587906",
        Sb = false,
        pd = {
            SW_STANDARD: Fd,
            SW_LITE: Gd,
            SW_DIY: Hd,
            SW_DIY_FILTER: Id,
            HAS_SKIMLINKS: fc,
            HAS_SKIMWORDS: gc,
            HAS_UNLINKED: hc,
            DO_NOT_TRACK: O,
            NO_COOKIE: Y,
            SL_INCLUDED_CLASSES: S,
            SL_EXCLUDED_CLASSES: ic,
            SL_EXCLUDED_DOMAINS: jc,
            SL_INCLUDED_DOMAINS: kc,
            SL_INCLUDED_IDS: lc,
            SL_EXCLUDED_REL: Qa,
            SL_INCLUDED_REL: W,
            SL_IGNORE_HIDDEN_LINKS: xb,
            SL_IMPRESSION_EXCLUDED_SELECTORS: Tb,
            SL_ADD_NOFOLLOW: Pb,
            SL_BEFORE_CLICK_HANDLER: Lb,
            SL_FIRST_PARTY_NA: yb,
            SL_COOKIE_SYNC_OPTOUT: Jd,
            SL_TRACK_IMPRESSION: Wb,
            WITH_NA_LINK_IMPRESSIONS: Ub,
            SL_REPLACE_TIMEOUT: vb,
            SL_AFFILIATE_UNKNOWN_LINKS: Ea,
            SL_TARGET: aa,
            AJAX_SUPPORT: Kd,
            SL_TEST: ea,
            UNLINKED_EXCLUDES: [],
            SL_FORECAST: Kb,
            NO_RIGHT_CLICK: Ld,
            USE_MERCHANT_URL_EXTRACTION_RULES: mc,
            EXTRA_REDIR_PARAMS: Ra,
            CUSTOM_TRACKING_VAR: fa,
            FORCE_LOCATION: sa,
            SITE_NAME: G,
            CUSTOM_WAYPOINT_DOMAIN: Sa,
            GOOGLE_TRACKING_ACTION_NAME: R,
            NO_SKIM_DOMAINS: Zb,
            SW_HORIZONTAL_DISTANCE: Md,
            SW_VERTICAL_DISTANCE: Nd,
            SL_PROFILING: !1,
            TRACK_COOKIE_SYNCS: Od,
            SW_LINK_COLOR: Pd,
            SW_LINK_WEIGHT: Qd,
            SW_LINK_DECORATION: Rd,
            SW_LINK_STYLE: Sd,
            SW_LINK_TITLE: Td,
            NO_SKIM_SELECTOR: Oa,
            SL_CONSENT: "ae",
            M101_TRACKING_ID: La,
            M101_CUSTOM_DOM_DETECTION: Sb
        },
        g = function() {
            var a = y.referrer || document.referrer || "",
                b = sa || k.location.href;
            var c = "aspsession-id aspsessionid cftoken j-sessionid jsessid jsession_id jsessionid phpsessid phpsession-id phpsessionid seskey sessid session-id session-key session_id sessionid sessionkey uniqueid utm_campaign utm_medium utm_source utm_term".split(" ");
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                var f = b.split("?");
                if (2 <= f.length) {
                    b = f.shift();
                    f = f.join("?");
                    e = encodeURIComponent(e) +
                        "=";
                    f = f.split(/[&;]/gi);
                    for (var g = f.length - 1; 0 <= g; g--) uc(f[g], e) && f.splice(g, 1);
                    b = b + "?" + f.join("&")
                }
            }
            "?" === b[b.length - 1] && (b = b.substr(0, b.length - 1));
            c = b;
            d = Qb.getItem("skimCONSENT");
            b = navigator.userAgent.toLowerCase();
            b = /(webkit)[ /]([\w.]+)/.exec(b) || /(opera)(?:.*version)?[ /]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(b) || [];
            b = {
                browser: b[1] || "",
                version: parseFloat(b[2]) || 0
            };
            e = (new Date).getTimezoneOffset();
            return {
                cookie: "",
                country: "",
                locale: "",
                consent: d,
                detect: b,
                isAdblockUser: !1,
                pageLocation: c,
                referrer: a,
                sessid: "",
                timezone: e,
                uuid: jb(),
                skimwordsEnabled: gc,
                skimlinksEnabled: fc,
                unlinkedEnabled: hc
            }
        }(),
        h = function() {
            var a = document.getElementsByTagName("html") ? document.getElementsByTagName("html")[0] : null,
                b = sa ? ya(sa, !1) : k.location.hostname;
            return {
                aff_domains: {},
                beacon: [],
                domain_data: {
                    domains: []
                },
                exclude: jc,
                exclude_lookup: null,
                excluded_classes: ["noskimlinks", "noskim"].concat(ic),
                has_been_called: !1,
                hostname: b,
                html_root: a,
                include: kc,
                include_lookup: null,
                included_classes: S,
                included_ids: lc,
                links: [],
                links_tracked: !1,
                target: null,
                waypointDomain: Sa ? "http://" + Sa : "//go.skimresources.com"
            }
        }(),
        u = {
            topics: {},
            on: function(a, b, c) {
                ka(this.topics[a]) || (this.topics[a] = []);
                var d = void 0;
                c && (d = function(a) {
                    Ec(a, c) && b(a)
                });
                this.topics[a].push(d || b)
            },
            publish: function(a, b) {
                q(this.topics[a] || [], function(a) {
                    l(a) && a(b)
                })
            }
        },
        ua = void 0,
        Ca = void 0,
        gb = void 0,
        eb = {}.hasOwnProperty,
        Ud = [].indexOf;
    ua = function() {
        var a;
        h.exclude_lookup = {};
        h.include_lookup = {};
        G && h.exclude.push(G);
        var b =
            h.exclude.concat(zd);
        var c = 0;
        for (a = b.length; c < a; c++) {
            var d = b[c];
            h.exclude_lookup[d] = d.length
        }
        b = h.include;
        c = 0;
        for (a = b.length; c < a; c++) d = b[c], h.include_lookup[d] = d.length;
        return h.exclude_lookup
    };
    gb = function(a) {
        var b = void 0;
        null !== h.exclude_lookup && null !== h.include_lookup || ua();
        if (!a) return !1;
        if (0 === h.include.length) return !0;
        var c = h.include_lookup;
        for (b in c)
            if (eb.call(c, b)) {
                var d = "*" === b.substr(0, 1);
                var e = "*" === b.substr(b.length - 1, 1);
                b = b.replace(/\*/g, "");
                if (d && e) {
                    if (-1 !== a.indexOf(b)) return !0
                } else if (d) {
                    if (-1 !==
                        a.indexOf(b) && a.indexOf(b) === a.length - b.length) return !0
                } else if (e) {
                    if (0 === a.indexOf(b)) return !0
                } else if (a === b) return !0
            } return !1
    };
    Ca = function(a) {
        var b;
        if (!a) return !1;
        var c = a.toLowerCase().split(/\s+/);
        a = Qa ? [Qa.toLowerCase()] : [];
        a = a.concat(Ad);
        var d = 0;
        for (b = c.length; d < b; d++) {
            var e = c[d];
            if (0 <= Ud.call(a, e)) return !0
        }
        return !1
    };
    var z = {
            AFFILIATE: "AFFILIATE",
            PRE_AFFILIATED: "PRE_AFFILIATED",
            UNKNOWN: "UNKNOWN",
            TRACK: "TRACK",
            IGNORE: "IGNORE"
        },
        Ic = {
            async: !0,
            onError: function() {},
            onLoad: function() {}
        },
        X = zb(),
        Bb = {},
        ed = {
            AT: "de",
            BE: "fr",
            BG: "bg",
            CY: "el",
            CZ: "cs",
            DE: "de",
            DK: "da",
            EE: "et",
            ES: "es",
            FI: "fi",
            FR: "fr",
            GB: "en",
            GR: "el",
            HR: "hr",
            HU: "hu",
            IE: "en",
            IT: "it",
            LT: "lt",
            LU: "fr",
            LV: "lv",
            MT: "en",
            NL: "en",
            PL: "pl",
            PT: "pt",
            RO: "ro",
            SE: "sv",
            SI: "sl",
            SK: "sk"
        },
        $c = "AT BE BG CY CZ DE DK EE ES FI FR GB GR HR HU IE IT LT LU LV MT NL PL PT RO SE SI SK".split(" "),
        pa = {
            get: function(a, b, c, d) {
                d = C({
                    onError: V
                }, d, {
                    method: "GET"
                });
                za(a, b, v(c), d)
            },
            post: function(a, b, c, d) {
                d = C({
                    onError: V
                }, d, {
                    method: "POST"
                });
                za(a, b, v(c), d)
            }
        };
    F.prototype.whenReady =
        function(a) {
            this.ready ? a() : this._pendingCallback.push(a)
        };
    F.prototype.setReady = function() {
        this.ready || (this.ready = !0, this._callPendingCallbacks())
    };
    F.prototype._callPendingCallbacks = function() {
        this._pendingCallback.forEach(function(a) {
            setTimeout(a, 0)
        });
        this._pendingCallback = []
    };
    var qc = [{
            label: "lotame",
            url: "//sync.crwdcntrl.net/map/c=7505/tp=SKIM/?https%3A%2F%2Fx.skimresources.com%2F%3Fprovider%3Dlotame%26skim_mapping%3Dtrue%26provider_id%3D%24%7Bprofile_id%7D",
            resyncAfter: [2, "days"],
            priority: 1,
            iabVendorId: 95,
            active: !0
        }, {
            label: "blue_kai",
            url: "https://stags.bluekai.com/site/27381?redir=https%3A%2F%2Fx.skimresources.com%2F%3Fprovider%3Dblue_kai%26skim_mapping%3Dtrue%26provider_id%3D%24_BK_UUID",
            resyncAfter: [1, "days"],
            priority: 2,
            iabVendorId: null,
            active: !0
        }, {
            label: "dfp",
            url: "//cm.g.doubleclick.net/pixel?google_nid=skimlinks_ddp&google_cm",
            resyncAfter: [1, "days"],
            priority: 2,
            iabVendorId: null,
            active: !0
        }, {
            label: "mediamath",
            url: "//pixel.mathtag.com/sync/img?redir=https%3A%2F%2Fx.skimresources.com%2F%3Fprovider%3Dmediamath%26skim_mapping%3Dtrue%26provider_id%3D%5BMM_UUID%5D%26provider_dc%3D%5BMT_DC%5D",
            resyncAfter: [1, "days"],
            priority: 2,
            iabVendorId: 79,
            active: !0
        }, {
            label: "app_nexus",
            url: "https://secure.adnxs.com/getuid?https%3A%2F%2Fx.skimresources.com%2F%3Fprovider_id%3D%24UID%26provider%3Dapp_nexus%26skim_mapping%3Dtrue",
            resyncAfter: [1, "days"],
            priority: 2,
            iabVendorId: 32,
            active: !0
        }, {
            label: "eyeota",
            url: "//ps.eyeota.net/match?bid=dn9h51u&r=https%3A%2F%2Fx.skimresources.com%2F%3Fprovider%3Deyeota%26provider_id%3D%7BUUID_dn9h51u%7D%26skim_mapping%3Dtrue",
            resyncAfter: [1, "days"],
            priority: 2,
            iabVendorId: 120,
            active: !0
        }, {
            label: "exelate",
            url: "//x.skimresources.com/?provider=exelate",
            resyncAfter: [1, "days"],
            priority: 1,
            iabVendorId: 373,
            active: !0
        }, {
            label: "avocet",
            url: "https://ads.avocet.io/getuid?url=https%3A%2F%2Fx.skimresources.com%2F%3Fskim_mapping%3Dtrue%26provider%3Davocet%26provider_id%3D%7B%7BUUID%7D%7D",
            resyncAfter: [1, "days"],
            priority: 3,
            iabVendorId: 63,
            active: !0
        }, {
            label: "tapad",
            url: "//x.skimresources.com/?provider=tapad",
            resyncAfter: [3, "days"],
            priority: 3,
            iabVendorId: 89,
            active: !0
        }, {
            label: "trade_desk",
            url: "//match.adsrvr.org/track/cmf/generic?ttd_pid=qakudad&ttd_tpi=1",
            resyncAfter: [3, "days"],
            priority: 3,
            iabVendorId: 21,
            active: !0
        }, {
            label: "narrative",
            url: "//x.skimresources.com/?provider=narrative",
            resyncAfter: [5, "days"],
            priority: 2,
            iabVendorId: null,
            active: !0
        }, {
            label: "adobe",
            url: "//x.skimresources.com/?provider=adobe",
            resyncAfter: [2, "days"],
            priority: 2,
            iabVendorId: 264,
            active: !0
        }, {
            label: "zeotap_dbm",
            url: "//x.skimresources.com/?provider=zeotap_dbm",
            resyncAfter: [5, "days"],
            priority: 2,
            iabVendorId: null,
            active: !0
        }],
        Rb = new F,
        t = {},
        Vd = "AT BE BG CY DE ES FR GB GR IE IT LU MT NL PL PT SK".split(" "),
        Mb = M(function() {
            var a = zb();
            if (l(a.__cmp) || "msie" === g.detect.browser && 8 >= g.detect.version) return !1;
            if (pb("skimlinks_force_consent")) return !0;
            var b = ja();
            a = B(t, ["country"], g.country);
            b = E(b);
            a = !!a && r(Vd, a.toUpperCase());
            return !b && a
        }),
        Z = M(function(a) {
            return a[Math.floor(a.length * Math.random())]
        }),
        ra = [{
            id: 1,
            moduleName: "ConsentA",
            getUrl: function(a, b) {
                return function(c) {
                    c = r(b, c) ? c : "en";
                    return xd + "/Consent_" + a + "_" + c + ".js"
                }
            }("A",
                ["bg", "de", "el", "en", "es", "fr", "it", "pl", "pt", "sk"])
        }],
        Eb = 0;
    M(function() {
        return Db("screen and (max-device-width: 767px)")
    });
    M(function() {
        return Db("(orientation: landscape)")
    });
    var Qc = [{
            id: 1,
            moduleName: "IncentiveA",
            getUrl: function(a, b) {
                return function(c) {
                    c = r(b, c) ? c : "en";
                    return yd + "/Incentive_" + a + "_" + c + ".js"
                }
            }("A", ["en"])
        }],
        N = void 0,
        Za = void 0,
        Ya = void 0;
    Ya = function(a) {
        var b = void 0;
        if (mc) {
            var c = H(a.hostname);
            if (c in Da) return c = "[&?]" + Da[c].name + "=(http[^&]+)", c = new RegExp(c), decodeURIComponent(null !=
                (b = a.href) ? b.match(c).pop() : void 0) || a.href
        }
        return a.href
    };
    Za = function(a, b) {
        var c = g.referrer ? "&pref=" + w(g.referrer) : "";
        var d = !1;
        if (0 < b.indexOf("#slm-")) {
            var e = b.split("#slm-");
            2 !== e.length || isNaN(e[1]) || 10 * parseInt(e[1], 10) !== 10 * e[1] || (b = e[0], d = e[1])
        }
        var f = m(a, "data-skimlinks-tracking") || fa;
        var l = m(a, "data-skimlinks-editor") && 1 === parseInt(m(a, "data-skimlinks-editor"), 10) ? 1 : 0;
        var p = m(a, "data-skimlinks-incentive") ? 1 : 0;
        if (D(a, "skimwords-link")) {
            var q = m(a, "data-skimwords-word");
            e = m(a, "data-skim-creative");
            p = m(a, "data-skim-product");
            var r = h.waypointDomain;
            b = r + "/?id=" + P + (f ? "&xcust=" + f : "") + (!1 !== d ? "&xs=9" : "&xs=2") + "&url=" + w(b) + "&xguid=" + g.cookie + "&xuuid=" + g.uuid + "&xsessid=" + g.sessid + "&isjs=1&xword=" + (q ? q : "") + "&xcreo=" + (e ? e : "") + "&xpid=" + (p ? p : "") + "&xed=" + l + "&sref=" + w(k.location) + c + (O ? "&dnt=1" : "") + (Y ? "&fdnt=1" : "") + (!1 !== d ? "&slmcid=" + d : "") + (!1 !== g.timezone ? "&xtz=" + g.timezone : "")
        } else D(a, "skimlinks-inline") ? (e = m(a, "data-skim-creative"), b = h.waypointDomain + "/?id=" + P + (G ? "&site=" + G : "") + (ea ? "&test=" + ea : "") + (f ?
            "&xcust=" + f : "") + (!1 !== d ? "&xs=9" : "&xs=8") + "&isjs=1&url=" + w(b) + "&xguid=" + g.cookie + "&xuuid=" + g.uuid + "&xsessid=" + g.sessid + "&xcreo=" + (a && null != e ? e : 0) + "&xed=" + l + "&sref=" + w(k.location) + "&pref=" + w(g.referrer) + (O ? "&dnt=1" : "") + (Y ? "&fdnt=1" : "") + (!1 !== d ? "&slmcid=" + d : "") + (!1 !== g.timezone ? "&xtz=" + g.timezone : "")) : cb(a, "noskimlinks") || (e = m(a, "data-skim-creative"), b = h.waypointDomain + "/?id=" + P + (G ? "&site=" + G : "") + (ea ? "&test=" + ea : "") + (f ? "&xcust=" + f : "") + (!1 !== d ? "&xs=9" : p ? "&xs=14" : "&xs=1") + "&isjs=1&url=" + w(b) + "&xguid=" +
            g.cookie + "&xuuid=" + g.uuid + "&xsessid=" + g.sessid + "&xcreo=" + (a && null != e ? e : 0) + "&xed=" + l + "&sref=" + w(k.location) + c + (O ? "&dnt=1" : "") + (Y ? "&fdnt=1" : "") + (!1 !== d ? "&slmcid=" + d : "") + (!1 !== g.timezone ? "&xtz=" + g.timezone : ""));
        0 < Ra.length && (b += "&" + Ra);
        g.isAdblockUser && !cb(a, "noskimlinks") && (b += "&abp=1");
        b += "&jv=" + cc;
        return b + "&bv=2.5.1"
    };
    var Ob = void 0;
    Ob = function(a) {
        var b, c = void 0;
        var d = f("skimlinks_strip_attribute", !1);
        if (!d) return !1;
        for (c in d)
            if (L(d, c)) {
                var e = d[c];
                (b = m(a, c)) && 0 === b.indexOf(e) && (b = b.substr(e.length),
                    m(a, c, b))
            } return !0
    };
    var p = {
            campaign_ids: [],
            loading_started: (new Date).getTime(),
            linksImpressions: {
                skimlinks: {
                    count: 0,
                    urls: {}
                },
                skimwords: {
                    count: 0,
                    urls: {}
                },
                unlinked: {
                    count: 0,
                    urls: {}
                }
            },
            awaitedModules: []
        },
        nc = new F,
        oc = new F,
        Wd = function() {
            for (var a = [], b = new F, c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
            d.forEach(function(c, d) {
                if (!(c instanceof F)) throw Error("Invalid ReadyState constructor arguments (index: " + d + ").");
                c.ready || (a.push(c), c.whenReady(function() {
                    a = Lc(a, c);
                    0 === a.length && b.setReady()
                }))
            });
            0 === a.length && b.setReady();
            return b
        }(nc, oc),
        A = {
            called: !1,
            pendingRequests: 0,
            readyStates: {
                beaconApiResponse: nc,
                postPageLoadBeaconHandler: oc,
                beacon: Wd
            }
        },
        Ma = !1,
        Q = !1,
        ba = null,
        ca = null,
        td = {
            detect: function(a) {
                a: {
                    try {
                        var b = navigator.userAgent.toLowerCase();
                        if (-1 === b.indexOf("firefox") && -1 === b.indexOf("chrome")) {
                            Q = !0;
                            Ma = !1;
                            break a
                        }
                    } catch (c) {}
                    b = "" + 11 * Math.random();ba = new Image;ba.onload = Yb;ba.src = "//p.skimresources.com/px.gif?ch=*&rn=*".replace(/\*/, "1").replace(/\*/, b);ca = new Image;ca.onload = Yb;ca.src = "//p.skimresources.com/px.gif?ch=*&rn=*".replace(/\*/,
                        "2").replace(/\*/, b)
                }
                Xb(a, 250)
            }
        };
    v(function(a) {
        var b = a.status;
        a = a.actions;
        a = void 0 === a ? [] : a;
        b && "OK" === b && q(a, function(a) {
            var b = a.url;
            "pixel" === a.action && ia(b)
        })
    });
    var ac = 0,
        ud = v(function(a) {
            Na(a, "BEACON_CALLBACK__PRE_PAGE_LOAD")
        }),
        vd = v(function(a) {
            Na(a, "BEACON_CALLBACK__POST_PAGE_LOAD")
        }),
        wd = v(function(a) {
            Na(a, "BEACON_CALLBACK__AUX")
        }),
        da = v(function() {
            bc("skimlinksBeaconSecondaryCallback");
            document.removeEventListener("DOMContentLoaded", da);
            document.removeEventListener("load", da)
        }),
        sd = {
            skimlinks: !1,
            skimwords: !1,
            unlinked: !1,
            audience: !1,
            GDPRConsent: !1,
            incentivePopup: !1
        };
    sb && v(function() {
        u.on("skim_js_init", Wc);
        u.on("EVENTS__BEACON_CALLBACK", Zc, {
            isFirstCall: !0
        });
        gd();
        u.on("EVENTS__BEACON_CALLBACK", hd, {
            type: "BEACON_CALLBACK__POST_PAGE_LOAD"
        });
        u.on("skim_js_init", ld);
        u.on("skim_js_start", md);
        rd()
    })()
})();