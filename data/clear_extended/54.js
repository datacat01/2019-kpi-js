! function() {
    "undefined" != typeof YAHOO && YAHOO || (YAHOO = {}), YAHOO.i13n = YAHOO.i13n || {}, YAHOO.i13n.EventTypes = function() {
        var e = "richview";

        function t(e, t, n) {
            this.yqlid = e, this.eventName = t, this.spaceidPrefix = n
        }
        t.prototype = {
            getYQLID: function() {
                return this.yqlid
            },
            getEventName: function() {
                return this.eventName
            }
        };
        var n = {
            pageview: new t("pv", "pageview", ""),
            simple: new t("lv", "event", "P"),
            linkview: new t("lv", "linkview", "P"),
            richview: new t(e, e, "R"),
            contentmodification: new t(e, "contentmodification", "R"),
            dwell: new t("lv", "dwell", "D")
        };
        return {
            getEventByName: function(e) {
                return n[e]
            }
        }
    }();
    var G = [];
    YAHOO.i13n.__RAPID_INSTANCES__ = G, YAHOO.i13n.Rapid = function(T) {
        var n = {};

        function e() {}

        function D(e) {
            this.map = {}, this.count = 0, e && this.absorb(e)
        }

        function g() {
            this.map = {}, this.count = 0
        }
        "undefined" != typeof console && void 0 !== console.log || (console = {
            log: function() {}
        }), void 0 === console.error && (console.error = console.log), void 0 === console.warn && (console.warn = console.log), e.prototype = {
            ser: function() {
                return x.ser(this.map)
            },
            set: function(e, t) {
                var n = t ? x.norm(t) : t;
                null == n && (n = ""), null !== n && x.isStr(n) && (n = n.replace(/\\/g, "\\\\")), e = e.replace(/[^a-zA-Z0-9-_\u0080-\uFFFF]/g, "_"), x.isValidPair(e, n) && (this.map[x.norm(e)] = n, this.count++)
            },
            get: function(e) {
                return this.map[e]
            },
            getAll: function() {
                return this.map
            },
            absorb: function(e) {
                if (e && x.isObj(e))
                    for (var t in e) x.hasOwn(e, t) && this.set(t, e[t])
            },
            absorb_filter: function(e, t) {
                if (e && x.isObj(e))
                    for (var n in e) t && !t.call(null, n) || x.hasOwn(e, n) && this.set(n, e[n])
            },
            getSize: function() {
                return this.count
            }
        }, D.prototype = new e, (g.prototype = new(D.prototype.constructor = e)).constructor = e, D.makeFromPP = function(e) {
            var t = new D;
            return e && t.absorb(e.getAll()), t
        };
        var x = q(T),
            t = new d(window),
            f = new D;
        n.keys = f;
        var r = t.getModules(),
            I = {
                none: 0,
                gzip: 1,
                lzw: 2,
                deflate: 3
            };

        function y(e, t) {
            if (!e) return null;
            null === t && (t = !1);
            var n = new g,
                r = x.getAttribute(e, x.data_action_outcome);
            r && n.set("outcm", r);
            var i = x.getAttribute(e, "data-ylk");
            if (null === i || 0 === i.length) return n;
            for (var o = i.split(x.ylk_pair_delim), a = 0, s = o.length; a < s; a++) {
                var l = o[a].split(x.ylk_kv_delim);
                if (2 === l.length) {
                    var c = l[0],
                        u = l[1];
                    null !== c && "" !== c && null !== u && ("_p" !== c || t) && n.set(c, u)
                }
            }
            return n
        }

        function i(e) {
            YAHOO.i13n;
            var t, n, r = YAHOO.i13n.TEST_ID || e.test_id,
                i = e.location || document.location.href;
            t = e.keys, n = i, f.set("A_sid", YAHOO.i13n.A_SID || x.rand()), f.set("_w", x.rmProto(n)), t ? f.absorb(t) : T.keys && f.absorb(T.keys), r && (r = x.norm("" + r));
            var o = e.override || {},
                a = {
                    override: o,
                    version: "3.53.2",
                    comboName: "VERSIONED-PROD",
                    keys: f,
                    referrer: e.referrer,
                    getReferrer: function() {
                        return x.norm(x.clref(void 0 !== this.referrer ? this.referrer : document.referrer))
                    },
                    spaceid: x.norm(o.spaceid || YAHOO.i13n.SPACEID || e.spaceid),
                    yrid: x.norm(e.yrid || ""),
                    oo: e.oo ? "1" : "0",
                    nol: e.nol ? "1" : "0",
                    yql_enabled: !1 !== e.yql_enabled,
                    fing: 1 == e.use_fing,
                    linktrack_attribut: e.lt_attr || "text",
                    tracked_mods: e.tracked_mods || [],
                    tracked_mods_viewability: e.tracked_mods_viewability || [],
                    viewability: !1 !== e.viewability,
                    viewability_time: e.viewability_time || 300,
                    viewability_px: e.viewability_px || 50,
                    lt_attr: e.lt_attr || "text",
                    client_only: void 0 === e.client_only || !!e.client_only,
                    text_link_len: e.text_link_len || -1,
                    test_id: r,
                    yql_host: e.yql_host || "udc.yahoo.com",
                    yql_path: e.yql_path || "/v2/public/yql",
                    geo_host: e.geo_host || "geo.yahoo.com",
                    anonymized: !0 === e.anonymized,
                    click_timeout: e.click_timeout || 1e4,
                    compr_timeout: e.compr_timeout || 700,
                    compr_on: !1 !== e.compr_on,
                    compr_type: e.compr_type || "deflate",
                    webworker_file: YAHOO.i13n.WEBWORKER_FILE || e.webworker_file || null,
                    nofollow_classname: e.nofollow_class || "rapidnofollow",
                    no_click_listen: e.rapid_noclick_resp || "rapid-noclick-resp",
                    nonanchor_track_class: e.nonanchor_track_class || "rapid-nonanchor-lt",
                    anc_pos_attr: "data-rapid_p",
                    anc_v9y_attr: "data-v9y",
                    deb: !0 === e.debug,
                    ldbg: 0 < e.ldbg || 0 < i.indexOf("yhldebug=1"),
                    addmod_timeout: e.addmodules_timeout || 300,
                    ult_token_capture: "boolean" == typeof e.ult_token_capture && e.ult_token_capture,
                    track_type: e.track_type || "data-tracktype",
                    dwell_on: !1 !== e.dwell_on,
                    prerender: !0 === e.prerender,
                    query_parameters: !0 === e.query_parameters,
                    async_all_clicks: !0 === e.async_all_clicks,
                    click_postmsg: e.click_postmsg || {},
                    apv: !1 !== e.apv,
                    apv_time: e.apv_time || 500,
                    apv_px: e.apv_px || 500,
                    ex: !0 === e.ex,
                    persist_asid: !0 === e.persist_asid,
                    track_right_click: !1 !== e.track_right_click,
                    gen_bcookie: !0 === e.gen_bcookie,
                    bcookie_override: e.bcookie_override || null,
                    skip_attr: e.skip_attr || "data-rapid-skip",
                    parse_dom: !0 === e.parse_dom,
                    pageview_on_init: !1 !== e.pageview_on_init,
                    perf_navigationtime: e.perf_navigationtime || 0,
                    perf_commontime: e.perf_commontime || null,
                    perf_usertime: e.perf_usertime || null,
                    perf_resourcetime: e.perf_resourcetime || 0,
                    sample: e.sample || {},
                    loc: i,
                    fpc: !(!1 === e.fpc),
                    accountGUID: e.accountGUID || null,
                    customUID: e.customUID || null
                };
            if (a.anonymized && (a.geo_host = "ganon.yahoo.com"), (a.anonymized || a.bcookie_override) && (a.yql_enabled = !1), a.customUID) {
                var s = a.customUID;
                "object" == typeof s && s.type && s.id ? a.customUID = x.aug({}, s) : (console.error('customUID must be an Object with "id" and "type"'), a.customUID = null)
            }
            var l, c, u, d = 1 * a.compr_timeout;
            return x.isNum(d) ? a.compr_timeout = (u = 700, (l = d) < (c = 300) ? c : u < l ? u : l) : a.compr_timeout = 700, a.ldbg && 1e4 != a.click_timeout && console.warn("Click timeout set to " + a.click_timeout + "ms (default 10000ms)"), e.apv_callback && "function" == typeof e.apv_callback ? a.apv_callback = e.apv_callback : a.apv_callback = null, a
        }

        function l() {
            f.set("A_sid", x.rand())
        }

        function S(e) {
            U.ldbg && console.warn("RAPID WARNING: " + e)
        }

        function M(e) {
            U.ldbg && console.error("RAPID ERROR: " + e)
        }

        function L(e) {
            U.ldbg && console.log("Rapid-" + U.version + "(" + (new Date).getTime() + "):" + e)
        }
        var o = {
            tumblr: !0
        };

        function R(c) {
            var u = {
                    B: {
                        log: !1
                    },
                    BX: {
                        log: !0,
                        key: "bx"
                    },
                    WV: {
                        log: !0,
                        key: "_wv"
                    },
                    TT: {
                        log: !1
                    },
                    D: {
                        log: !1
                    },
                    _ga: {
                        log: !0,
                        key: "_ga"
                    },
                    yx: {
                        log: !0,
                        key: "_yx"
                    },
                    rxx: {
                        log: !0,
                        key: "_rx"
                    },
                    UNAUTHID: {
                        log: !0,
                        key: "aol_unauth"
                    },
                    _utd: {
                        log: !0,
                        key: "aol_utd",
                        filter: function(e) {
                            var t = e.match(/((?:\||^))gd#[^\|]+/g)[0].split("#")[1];
                            return 24 !== t.length && S("_utd value may be malformed"), t
                        }
                    },
                    RSP_COOKIE: {
                        log: !0,
                        key: "aol_rsp",
                        filter: function(e) {
                            var t = e.match(/(?:(\&|^))sn=[^\&]+/g)[0].split("=")[1];
                            return 24 !== t.length && S("RSP_COOKIE value may be malformed"), t
                        }
                    },
                    GUC: {
                        log: !0,
                        key: "_guc"
                    },
                    OTH: {
                        log: !0,
                        key: "_li",
                        filter: function() {
                            return "1"
                        }
                    }
                },
                d = {};
            this.getCookieByName = function(e) {
                return d[e]
            }, this.setRxx = function() {
                var a = -2,
                    t = (document.domain || "").split("."),
                    s = t.length;

                function l(e) {
                    return "." + t.slice(e).join(".")
                }
                U.fpc && ".yahoo.com" !== l(a) && function e() {
                    var t = l(a),
                        n = "rxx",
                        r = d.rxx;
                    if (!r) {
                        var i = (new Date).getTime() - 14383872e5;
                        r = parseInt(Math.random().toString().substring(2)).toString(36) + "." + i.toString(36) + "&v=1"
                    }
                    if (m(n, r, 31536e3, t), -1 !== document.cookie.indexOf(r)) {
                        d.rxx = r;
                        var o = u.rxx;
                        c && o && o.log && c.set(o.key, r)
                    } else 0 < a + s && (a--, e())
                }()
            }, this.extendBCookie = function() {
                var e = d.B;
                e ? m("B", e, 31536e3, ".yahoo.com") : S("Bcookie not set")
            };
            var e = document.cookie;
            if (/[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(e))
                for (var t = e.split(/;\s/g), n = null, r = null, i = null, o = 0, a = t.length; o < a; o++) {
                    if ((i = t[o].match(/([^=]+)=/i)) instanceof Array) try {
                        n = x.dec(i[1]), r = t[o].substring(i[1].length + 1)
                    } catch (e) {
                        M(e)
                    } else r = n = x.dec(t[o]);
                    var s = u[n];
                    if (s && !d[n]) {
                        if (r = r.replace(/(^["']|["']$)/g, ""), s.filter && "function" == typeof s.filter) try {
                            r = s.filter(r)
                        } catch (e) {
                            M(n + " Has an Invalid Value; Cookie is not captured"), r = null
                        }
                        r && (r = x.dec(r), d[n] || (d[n] = r, c && s.log && c.set(s.key || n, r)))
                    }
                }
            this.setRxx(), this.extendBCookie(), x.clearCookie("rx", "/", x.isIE ? document.domain : "")
        }
        var U = i(T);
        n.conf = U;
        var b = function() {
                var o = U.geo_host || YAHOO.i13n.beacon_server;

                function a(r, e) {
                    U.ldbg && L(r);
                    var t = e && "function" == typeof e ? e : function() {};
                    navigator && navigator.sendBeacon && navigator.sendBeacon(r) ? t() : function(e) {
                        var t = new Image,
                            n = null;
                        t.onload = t.onabort = t.onerror = function() {
                            clearTimeout(n), e.call(null)
                        }, t.src = r, e && "function" == typeof e && (n = setTimeout(function() {
                            e.call(null)
                        }, U.click_timeout));
                        setTimeout(function() {
                            t = null
                        }, 1e7)
                    }(t)
                }

                function c() {
                    return "rapid_if_" + x.rand()
                }

                function u(e) {
                    var t = "display:none;";
                    !x.isIE || 6 !== x.ieV && 7 !== x.ieV && 8 !== x.ieV ? x.sa(e, "style", t) : e.style.setAttribute("cssText", t, 0)
                }

                function d(e) {
                    var t = null;
                    if (x.isIE && x.ieV <= 8) {
                        var n = "";
                        x.isSecure() && 6 == x.ieV && (n = 'src="https://' + U.geo_host + '/b.html"'), t = document.createElement("<iframe " + n + ' name="' + e + '"></iframe>')
                    } else t = document.createElement("iframe");
                    return t.name = e, t
                }

                function f(e, t) {
                    var n = null,
                        r = x.make("form"),
                        i = x.make("input"),
                        o = c(),
                        a = c(),
                        s = "application/x-www-form-urlencoded;charset=UTF-8";
                    u(n = d(o)), u(r), r.id = a, r.method = "POST", r.action = m(t), r.target = o, x.isIE && x.ieV <= 7 ? r.setAttribute("enctype", s) : (r.setAttribute("enctype", s), r.setAttribute("encoding", s)), i.name = "q", i.value = e, x.isIE && 10 <= x.ieV && (i.type = "submit"), r.appendChild(i);
                    var l = function() {
                        var e = "";
                        if (U.ldbg && (!x.isIE || 9 <= x.ieV)) {
                            var t = n.contentDocument || n.contentWindow.document;
                            e = t.body.innerHTML
                        }
                        x.rmEvent(n, "load", l), setTimeout(function() {
                            x.rmBodyEl(n), x.rmBodyEl(r)
                        }, 0), U.ldbg && L("iframe resp: " + e), x.isIE && x.ieV <= 7 && setTimeout(function() {
                            var e = d("");
                            x.addEvent(e, "load", function() {
                                x.rmBodyEl(e)
                            }), x.appBodyEl(e)
                        }, 1)
                    };
                    x.addEvent(n, "load", l), x.appBodyEl(n), x.appBodyEl(r), r.submit()
                }

                function m(e) {
                    var t = U.deb,
                        n = x.rand(),
                        r = ["http:" === window.location.protocol ? "http://" : "https://", U.yql_host, U.yql_path, "?yhlVer=2&yhlClient=rapid&yhlS=", U.spaceid, !0 === t ? "&yhlEnv=staging" : "", !0 === t || U.ldbg ? "&debug=true&diagnostics=true" : "", x.isIE && x.ieV ? "&yhlUA=ie" + x.ieV : "", x.isIE && 8 == x.ieV ? "&format=json" : "", "&yhlCT=2", "&yhlBTMS=", (new Date).valueOf(), "&yhlClientVer=", U.version, "&yhlRnd=", n, "&yhlCompressed=", e || 0, U.gen_bcookie ? "&yhlBcookie=1" : ""].join("");
                    return U.ldbg && L(r), r
                }

                function p(e, t) {
                    var n = m(t);
                    try {
                        var r = x.getXHR();
                        r.open("POST", n, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), U.ldbg && (r.onreadystatechange = function() {
                            4 === r.readyState && L(r.status + ":xhr response: " + r.responseText)
                        }), r.send(e)
                    } catch (e) {
                        a(O("p", new D({
                            _err_nm: "sendToYQL Failed",
                            _err_msg: "sendToYQL Failed",
                            _err_rs: String(e),
                            _err_st: e.stack,
                            urlUsed: n
                        }), 1197799914))
                    }
                }
                var s = function(e) {
                    var t = new D;
                    t.set("_pl", 1), t.set("A_v", U.version), t.set("A_cn", U.comboName);
                    var n = U.getReferrer();
                    if (n && !1 !== e && t.set("_R", n), U.test_id && t.set("test", U.test_id), U.customUID) {
                        var r = U.customUID;
                        t.set("user_id", r.id), t.set("user_id_type", r.type)
                    }
                    if (U.accountGUID && t.set("_lGUID", U.accountGUID), U.ex && t.set("_ex", 1), t.get("_bt") || t.set("_bt", "rapid"), U.query_parameters) {
                        var i = /^(test|outcm|etrg|usergenf|etag|sec|slk|tar|tar_uri|yhldebug|tsrc|action)$|^(A_|_)/,
                            o = document.location.search;
                        if (o)
                            for (var a in o = (o = o.substring(1)).split("&"))
                                if (o.hasOwnProperty(a)) {
                                    var s = o[a].split("=");
                                    if (2 <= s.length) {
                                        var l = decodeURIComponent(s[0]),
                                            c = decodeURIComponent(s[1]),
                                            u = !i.test(l);
                                        L("Queryparams decoded: " + l + " : " + c), L("Blacklist filter: " + u), u && t.set(l, c)
                                    }
                                }
                    }
                    var d = window.location.protocol || "";
                    d = d.replace(/:$/, ""), t.set("A_pr", d);
                    var f = (new Date).getTimezoneOffset();
                    return f = f ? -1 * f / 60 : 0, t.set("A_tzoff", f), t
                };

                function v(e, t, n) {
                    var r = {};
                    return x.isObj(e) && x.aug(r, e, n), r
                }

                function l(e, r, t) {
                    t = t || {};
                    var i = {
                        m: x.norm(e.moduleName),
                        l: []
                    };
                    e.moduleYLK && (i.ylk = e.moduleYLK.getAll());
                    for (var o = i.ylk && i.ylk.sec ? i.ylk.sec : "", n = e.links, n = e.links, a = function(e, t) {
                            var n = "_p" === e;
                            return !(!r || !n) || ("sec" == e && t != i.m && t != o || "sec" !== e && !n)
                        }, s = 0, l = n.length; s < l; s++) n[s] && (!t.useViewability && !U.viewability || n[s].viewable ? i.l.push(v(n[s].data, r, a)) : U.ldbg && L("Skipping not viewable link: " + n[s].data.slk));
                    return i
                }

                function g(e, t, n, r, i) {
                    var o;
                    return o = P ? j : V(), [{
                        t: function(e, t) {
                            if (e) return "pv";
                            if (t && t.event) return t.event.type.getYQLID();
                            return "lv"
                        }(t, i),
                        s: U.spaceid,
                        pp: function(e, t) {
                            N = new R(U.keys);
                            var n = D.makeFromPP(U.keys);
                            n.absorb(t), e && n.set("A_", 1);
                            return n.set("A_sr", x.sr()), n.set("A_vr", x.vr()), n.set("A_do", x.dor()), n.set("A_ib", x.ib()), n.set("A_ob", x.ob()), n.set("A_srr", x.srr()), n
                        }(t, r).getAll(),
                        _ts: o.ts,
                        _ms: o.ms,
                        lv: function(e, t, n) {
                            var r = [],
                                i = null;
                            for (var o in e)
                                if (x.hasOwn(e, o) && (i = e[o])) {
                                    var a = l(i, t, n);
                                    0 < a.l.length ? r.push(a) : U.ldbg && L('Not capturing 0 links mod: "' + i.moduleName + '"')
                                } return r
                        }(e, n, i)
                    }]
                }

                function h(e, t, n) {
                    var r = "select * from x where a = '" + e + "'";
                    return (t ? "q=" : "") + (n ? x.enc(r) : r)
                }

                function _(e) {
                    var t = x.aug({}, T);
                    delete t.keys;
                    var n = s();
                    n.set("A_cnf", x.toJSON(t));
                    var r = {
                        bp: n.getAll(),
                        r: e.call(0),
                        yrid: U.yrid,
                        optout: U.oo,
                        nol: U.nol
                    };
                    return x.toJSON(r)
                }

                function w(e, t, n, r) {
                    var i = _(function() {
                        return g(e, t, !0, n, r)
                    });
                    C(i)
                }

                function y(e) {
                    return e.identifier
                }
                var i = (b = null, k = [], A = 0, E = U.addmod_timeout, function(e, t, n, r) {
                    clearTimeout(b);
                    var i = +new Date - A;
                    if (k = x.uniqConcat(k, e, y), E < i) A = +new Date, w(k, t, n, r), k = [];
                    else {
                        var o = E - i;
                        b = setTimeout(function() {
                            U.ldbg && L("queueing send in addMods"), w(k, t, n, r), k = []
                        }, o)
                    }
                });
                var b, k, A, E;

                function C(n) {
                    var r = U.ldbg;

                    function i(e, t) {
                        0 === t && (e = e.replace(/'/g, "\\'")), r && L("body: " + e), x.hasCORS() ? p(o = h(e, !0, !0), t) : (o = h(e, 0, 0), x.addEvent(document, "load", function() {
                            f(o, t)
                        }))
                    }
                    var o = "",
                        a = I[U.compr_type];
                    if (U.compr_on && U.webworker_file && x.hasWorkers() && 1 < a && 2048 < n.length) {
                        r && L("Looking for worker:" + U.webworker_file + ", compr timeout:" + U.compr_timeout);
                        try {
                            var s = new Worker(U.webworker_file),
                                l = !1,
                                c = null,
                                u = 0;

                            function d() {
                                l || (l = !0, i(n, 0), r && L("sent in failSend"))
                            }
                            s.onerror = function(e) {
                                clearTimeout(c), d(), S(e.message), s.terminate()
                            }, s.onmessage = function(e) {
                                clearTimeout(c);
                                var t = x.tms();
                                "Decompress fail" !== e.data && "Compress fail" !== e.data && 0 != e.data.indexOf("error:") || (r && L(e.data), d()), l || (l = !0, i(e.data, a)), r && L("Ratio (" + e.data.length + "/" + n.length + "): " + (100 * e.data.length / n.length).toFixed(2) + "% -> C_T: " + (t - u) + " ms (" + t + "-" + u + ")"), s.terminate()
                            }, r && L("posting to worker: " + n), u = x.tms(), s.postMessage({
                                type: a,
                                json: n
                            }), c = setTimeout(function() {
                                d(), s.terminate()
                            }, U.compr_timeout)
                        } catch (e) {
                            r && L("compression worker exception " + e), i(n, 0)
                        }
                    } else i(n, 0)
                }

                function O(e, t, n) {
                    var r = ["?s=" + (n || U.spaceid), "t=" + x.rand() + "," + Math.random(), "_I=" + U.yrid, "_AO=" + U.oo, "_NOL=" + U.nol, "_R=" + x.enc(U.getReferrer()), ("c" === e ? "_K=" : "_P=") + function(e) {
                        N = new R(U.keys);
                        var t, n = new D(s(!1).getAll());
                        n.absorb(U.keys.getAll()), e && (e instanceof D ? n.absorb(e.getAll()) : M("Internal error in buildGeoPP: not PP type"));
                        t = "dwell,start" === n.get("etag") ? j : "dwell,stop" === n.get("etag") ? B : V();
                        return n.set("_ts", t.ts), n.set("_ms", t.ms), n.set("A_sr", x.sr()), n.set("A_vr", x.vr()), n.set("A_do", x.dor()), n.set("A_ib", x.ib()), n.set("A_ob", x.ob()), n.set("A_srr", x.srr()), U.version + "%05" + n.ser()
                    }(t)];
                    U.bcookie_override && r.push("_BM=" + U.bcookie_override);
                    var i = r.join("&");
                    return ("http:" === window.location.protocol ? "http://" : "https://") + o + "/" + e + i
                }
                return {
                    sendGeoT: function(e) {
                        var t = ["http:" === window.location.protocol ? "http://" : "https://", o, "/t?", e].join("");
                        a(t)
                    },
                    sendGeoPV: function() {
                        a(O("b"))
                    },
                    sendRapidNoDelay: function(e, t, n, r, i) {
                        if (t && P && P.start_dwell() && (n.etag = "dwell,start", n.usergenf = 1, n.A_prets = B ? B.ts : null, n.A_prems = B ? B.ms : null), !U.yql_enabled || i) {
                            var o = null;
                            n && (o = new D(n)), a(O(t ? "b" : "p", o))
                        } else w(e, t, n, r)
                    },
                    sendRapid: function(e, t, n, r) {
                        t && P && P.start_dwell() && (n.etag = "dwell,start", n.usergenf = 1, n.A_prets = B ? B.ts : null, n.A_prems = B ? B.ms : null), i(e, t, n, r)
                    },
                    sendRefreshedContent: function(e, t, n) {
                        var r = {};
                        t && P && P.start_dwell() && (r.etag = "dwell,start", r.usergenf = 1, r.A_prets = B ? B.ts : null, r.A_prems = B ? B.ms : null);
                        n.event && x.aug(r, n.event.data);
                        n.pp && x.aug(r, n.pp);
                        C(_(function() {
                            return g([e], t, !0, r, n)
                        }))
                    },
                    sendULTEvent: function(e, t, n) {
                        var r = {};
                        e && e.data && (r = e.data);
                        var i = O("p", new D(r), t || 0);
                        e.type && (i += "&_V=" + e.type.spaceidPrefix), a(i, n)
                    },
                    sendEvents: function(e, t) {
                        this.sendULTEvent(e, t)
                    },
                    sendClick: function(r, i) {
                        var e, t = [O("c", new D((e = r).pp)) + "&_C=" + x.ser(e.data)].join("&"),
                            o = !1;
                        !U.async_all_clicks && r.synch ? (x.prevDef(r.event), a(t, function() {
                            if (!o)
                                if (o = !0, i) i.call();
                                else {
                                    var e = r.targetElement.href;
                                    if (U.click_postmsg.origin) {
                                        var t = U.click_postmsg.window || top,
                                            n = U.click_postmsg.payload || {};
                                        n.href = e, t.postMessage(x.toJSON(n), U.click_postmsg.origin)
                                    } else r.hasTargetTop ? top.document.location = e : document.location = e
                                }
                        })) : t && a(t, i)
                    }
                }
            }(),
            k = null,
            P = null,
            N = new R(f);

        function V() {
            var e = null,
                t = null;
            return e = (new Date).valueOf().toString(), t = e.length, {
                ts: e.substr(0, t - 3),
                ms: e.substr(t - 3)
            }
        }

        function m(e, t, n, r) {
            var i = new Date;
            i.setTime(i.getTime() + 1e3 * n);
            var o = "";
            r && (o = ";domain=" + r);
            var a = e + "=" + t + ("; expires=" + i.toGMTString()) + o + "; path=/";
            document.cookie = a
        }

        function A(e, t, n, r, i, o, a, s) {
            var l = "",
                c = null,
                u = !a || x.isInView(r, s),
                d = {
                    viewable: u,
                    data: {
                        sec: t,
                        _p: n
                    }
                };
            return a && x.aug(d.data, {
                A_lv: 1
            }), o ? (d.data.slk = i || "section", c = y(r)) : (r.setAttribute(U.anc_pos_attr, n), a && r.setAttribute(U.anc_v9y_attr, u ? "1" : "0"), (l = x.getLT(r, e)) && "" !== l ? c = y(r) : l = "_ELINK_", d.data.slk = i || l), null !== c && x.aug(d.data, c.getAll()), d.DOMElement = r, d
        }

        function a(e) {
            var o = {},
                l = e || window;
            return {
                addModule: function(e, t) {
                    o[x.norm(e)] = t
                },
                addModules: function(e, t) {
                    var n = x.isArr(e),
                        r = [];
                    for (var i in n || x.isStr(e) && (e = new Array(e), n = !0), e)
                        if (x.hasOwn(e, i)) {
                            var o = n ? e[i] : i,
                                a = x.trim(e[i]);
                            if (this.exists(o)) M('addModules() called with prev processed id:"' + o + '"');
                            else {
                                var s = c(a, o, t, l);
                                s && (this.addModule(o, s), r.push(s))
                            }
                        } return r
                },
                getModules: function() {
                    return o
                },
                getModulesWithViewability: function() {
                    var e = {};
                    for (var t in o) {
                        var n = o[t];
                        n.useViewability && (e[t] = n)
                    }
                    return e
                },
                reevaluateModuleViewability: function(e) {
                    var t, n = this.getModulesWithViewability();
                    if (e)(t = n[e]) && t.reevaluateViewableLinks();
                    else
                        for (var r in n)(t = n[r]).reevaluateViewableLinks()
                },
                refreshModule: function(e, t, n, r) {
                    var i = o[x.norm(e)];
                    i ? i.refreshModule(e, t, n, r) : M("refreshModule called on unknown section: " + i)
                },
                removeModule: function(e) {
                    var t = o[x.norm(e)];
                    t && (t.removeHandlers(), delete o[e])
                },
                destroy: function() {
                    for (var e in o) x.hasOwn(o, e) && this.removeModule(e);
                    o = {}
                },
                exists: function(e) {
                    return o[x.norm(e)]
                }
            }
        }

        function s(e, t) {
            var n = function(e, t) {
                e = e || event;
                var n = x.getTarget(e),
                    r = "",
                    i = !1,
                    o = null;
                for (; n && (r = n.nodeName.toLowerCase()) && "a" !== r && "button" !== r && (a = n, "input" !== a.nodeName.toLowerCase() || "submit" !== x.getAttribute(a, "type")) && !x.hasClass(n, U.nonanchor_track_class);) n = n.parentNode;
                var a;
                if (!n || x.hasClass(n, U.no_click_listen)) return 0;
                if (x.hasClass(n, U.nonanchor_track_class)) {
                    o = {
                        pos: 0,
                        sec: t.moduleName,
                        slk: "_"
                    };
                    var s = y(n, 1);
                    s && x.aug(o, s.getAll())
                } else {
                    var l = x.getAttribute(n, U.anc_pos_attr);
                    if (!(o = t.getLinkAtPos(l))) return 0;
                    o = x.aug({}, o.data), "input" === r || "button" === r || (c = e, u = n, d = t.moduleElement, f = x.getAttribute, u.target && "_blank" === u.target.toLowerCase() || 2 === c.which || 4 === c.button || c.altKey || c.ctrlKey || c.shiftKey || c.metaKey || "on" === f(u, "data-nofollow") || f(u, "href") && "javascript:" === f(u, "href").substr(0, 11).toLowerCase() || x.hasClass(u, U.nofollow_classname) || x.hasClass(d, U.nofollow_classname)) || (i = !0)
                }
                var c, u, d, f;
                if (!o.tar) {
                    var m = x.getAttribute(n, "href");
                    m && (o.tar = x.extDomain(m)), m && o.tar || (o.tar = x.extDomain(U.loc))
                }
                o.tar_uri || (n.pathname ? o.tar_uri = n.pathname : o.tar_uri = "");
                var p = t.moduleYLK;
                if (p) {
                    var v = p.getAll();
                    x.aug(o, v, function(e) {
                        return !(e in o)
                    })
                }
                o.A_xy = x.xy(e), "contextmenu" == e.type && (o.A_cl = 3, i = !1);
                return {
                    data: o,
                    event: e,
                    moduleElement: t.moduleElement,
                    targetElement: n,
                    synch: i,
                    hasTargetTop: n && n.target && "_top" === n.target.toLowerCase()
                }
            }(e, t);
            n && (e.ctrlKey || e.metaKey || "contextmenu" === e.type || P && P.stop_dwell() && (n.pp = {
                etag: "dwell,stop",
                usergenf: 1,
                A_prets: j ? j.ts : null,
                A_prems: j ? j.ms : null
            }), b.sendClick(n))
        }

        function h(e, t, n, r) {
            n = n || {};
            var i = null;
            return e ? (i = YAHOO.i13n.EventTypes.getEventByName(e), n._E = i.getEventName(), t = n._E) : n._E = t || "_", r && (n.outcm = r), {
                type: i,
                name: t,
                data: n,
                outcome: r
            }
        }

        function E(e, t, n) {
            t || (t = document);
            for (var r = e.split(","), i = [], o = 0, a = r.length; o < a; o++)
                for (var s = t.getElementsByTagName(r[o]), l = 0, c = s.length; l < c; l++) {
                    var u = s[l];
                    n && !n.call(0, u) || i.push(u)
                }
            var d = i[0];
            return d ? (d.sourceIndex ? i.sort(function(e, t) {
                return e.sourceIndex - t.sourceIndex
            }) : d.compareDocumentPosition && i.sort(function(e, t) {
                return 3 - (6 & e.compareDocumentPosition(t))
            }), i) : []
        }

        function C(e, t, n, r) {
            t || (t = document);
            var i = e.split(",");
            n = n || [];
            var o = t.childNodes;
            if ("true" !== x.getAttribute(t, U.skip_attr))
                for (var a = 0, s = o.length; a < s; a++) {
                    var l = o[a];
                    x.isTagOfInterest(l, i) && (r && !r.call(0, l) || n.push(l)), "true" !== x.getAttribute(l, U.skip_attr) ? C(e, l, n, r) : "true" === x.getAttribute(l, U.skip_attr) && n.push(l)
                }
            var c = n[0];
            return c ? (c.sourceIndex ? n.sort(function(e, t) {
                return e.sourceIndex - t.sourceIndex
            }) : c.compareDocumentPosition && n.sort(function(e, t) {
                return 3 - (6 & e.compareDocumentPosition(t))
            }), n) : []
        }

        function c(c, e, u, d) {
            var f = document.getElementById(e),
                m = "a,button,input";
            if (!f) return S("Specified module not in DOM: " + e), null;
            var t, n, p = y(f),
                v = [],
                r = U.parse_dom ? C(m, f) : E(m, f),
                g = (t = f, n = U.lt_attr, x.hasClass(t, "rapid_track_href") ? "href" : x.hasClass(t, "rapid_track_text") ? "text" : x.hasClass(t, "rapid_track_title") ? "title" : x.hasClass(t, "rapid_track_id") ? "id" : n),
                h = r.length,
                i = x.getAttribute(f, U.track_type);

            function _(e, t) {
                var n = [];
                t = t || 1;
                for (var r = 0, i = e.length; r < i; r++)
                    if ("div" === e[r].tagName.toLowerCase()) {
                        var o = e[r],
                            a = y(o),
                            s = A(g, p.map.sec || c, 1, o, a.map.slk || p.map.slk, !0, u, d);
                        v[0] = s, n.push(s)
                    } else {
                        var l = e[r];
                        s = A(g, p.map.sec || c, t, l, p.map.slk, 0, u, d);
                        v[t - 1] = s, n.push(s), t++
                    } if ("true" === x.getAttribute(f, U.skip_attr)) {
                    s = A(g, p.map.sec || c, 1, o, p.map.slk, !0, u, d);
                    v[0] = s, n.push(s)
                }
                return n
            }

            function w(e) {
                return !x.getAttribute(e, U.anc_pos_attr)
            }
            _(r);
            var o = {
                    useViewability: u,
                    moduleYLK: p,
                    links: v,
                    moduleName: c,
                    trackType: i,
                    moduleElement: f,
                    refreshModule: function(e, t, n, r) {
                        r.isRefreshed = !0;
                        var i = U.parse_dom ? C(m, x.$(e), null, w) : E(m, x.$(e), w);
                        if (!0 === t || 0 < i.length) {
                            var o = _(i, h + 1);
                            h += i.length;
                            var a = i.length;
                            if (u)
                                for (var s = a = 0, l = o.length; s < l; s++) o[s].viewable && a++;
                            if (!0 === t || 0 < a) {
                                var c = {};
                                x.aug(c, this), c.links = n ? o : [], (!0 === t || n) && b.sendRefreshedContent(c, t, r)
                            }
                        } else x.ldbg && L("refreshModule(" + e + ") - no new links.");
                        !0 === t && U.apv && k && k.reInit()
                    },
                    reevaluateViewableLinks: function() {
                        var n, e = v.length,
                            t = E(m, this.moduleElement, (n = e, function(e) {
                                if (!x.getAttribute(e, U.anc_pos_attr)) {
                                    n++, e.setAttribute(U.anc_pos_attr, n);
                                    var t = A(g, p.map.sec || c, n, e, p.map.slk, 0, !1);
                                    v[n - 1] = t
                                }
                                return !("1" === x.getAttribute(e, U.anc_v9y_attr) || !x.isInView(e, d) || (e.setAttribute(U.anc_v9y_attr, "1"), 0))
                            }));
                        if (0 !== t.length) {
                            var r = function(e) {
                                    for (var t = [], n = 0, r = e.length; n < r; n++) {
                                        var i = e[n],
                                            o = x.getAttribute(i, U.anc_pos_attr),
                                            a = A(g, p.map.sec || c, o, i, p.map.slk, 0, !0, d);
                                        t.push(a)
                                    }
                                    return t
                                }(t),
                                i = {};
                            x.aug(i, this), i.links = r, b.sendRefreshedContent(i, !1, {})
                        }
                    },
                    removeHandlers: function() {
                        x.rmEvent(f, "click", a), U.track_right_click && x.rmEvent(f, "contextmenu", a)
                    },
                    getLinkAtPos: function(e) {
                        return e > v.length ? null : v[e - 1]
                    },
                    identifier: e
                },
                a = function(e) {
                    s(e, o)
                };
            return x.addEvent(f, "click", a), U.track_right_click && x.addEvent(f, "contextmenu", a), o
        }

        function _(e, t, n) {
            "object" == typeof e && e || (e = {}), U.ldbg && L("beaconPageview called, pp=" + x.fData(e)), t && !U.persist_asid && l(), b.sendRapidNoDelay([], !0, e, null, n), U.apv && null != k && k.reInit()
        }

        function u(e, t, n, r) {
            U.ldbg && L('beaconEvent: event="' + e + '" data=' + x.fData(t) + " outcome=" + n);
            var i = h(0, e, t, n);
            b.sendEvents(i, r)
        }

        function d(o) {
            var s = new a(o = document.getElementById(o) || window);
            n.moduleMaps && Array.isArray(n.module) ? n.moduleMaps.push(s) : n.moduleMaps = [s];
            var e = null;

            function t() {
                var t = null,
                    n = (new Date).getTime(),
                    r = x.getScrollY(o),
                    i = -1,
                    e = function() {
                        null != t && clearTimeout(t);
                        var e = (new Date).getTime();
                        e - n < U.viewability_time && (r = x.getScrollY(o), e), t = setTimeout(function() {
                            var e, t;
                            e = x.getScrollY(o), t = -1 === i ? e - r : e - i, Math.abs(t) > U.viewability_px && (s.reevaluateModuleViewability(), i = e, (new Date).getTime())
                        }, U.viewability_time)
                    };
                x.addEvent(o, "scroll", e), this.reInit = function() {
                    r = x.getScrollY(o), i = -1, n = (new Date).getTime()
                }, this.destroy = function() {
                    x.rmEvent(o, "scroll", e)
                }
            }
            x.executeOnLoad(function() {
                e = new t
            }), this.getModules = function() {
                return s
            }, this.addModules = function(e, t, n) {
                U.ldbg && L("addModules() called: mods=" + x.fData(e) + " isPage: " + t);
                var r = {
                    A_am: 1
                };
                (n = n || {}).pp && x.aug(r, n.pp), n.useViewability = n.useViewability || !1, n.clickonly = n.clickonly || !1;
                var i = !1;
                switch (t || (t = !!n.useViewability && 2), t) {
                    case 1:
                    case "1":
                    case !0:
                        i = t = !0;
                        break;
                    case 2:
                    case "2":
                        t = !!0, n.event = h("contentmodification", "", {});
                        break;
                    case 0:
                    case "0":
                    case !1:
                    default:
                        t = !1
                }
                if (!U.yql_enabled) return L("LVs is are disabled when geo only"), void(t && _(r, i));
                n && n.event && t && (M("Cannot track event type and pageview at same time."), n.event = null);
                var o = s.addModules(e, n.useViewability);
                (0 !== o.length || n.event) && (n.clickonly && (o = []), t || n.event || n.pp ? (i && !U.persist_asid && l(), n.event && n.event.data && x.aug(r, n.event.data), b.sendRapidNoDelay(o, t, r, n)) : 0 < o.length && b.sendRapid(o, t, r, n), !0 === t && U.apv && k && k.reInit())
            }, this.addModulesWithViewability = function(e, t, n) {
                (n = n || {}).useViewability = n.useViewability || U.viewability, this.addModules(e, t, n)
            }, this.reevaluateModulesViewability = function() {
                s.reevaluateModuleViewability()
            }, this.refreshModules = function(e, t, n, r) {
                U.ldbg && L("refreshModule called: mod=" + e + " isPV: " + t + " sendLinks: " + n + " options: " + x.fData(r));
                var i = !1;
                switch (r = r || {}, t || (t = !1), t) {
                    case 1:
                    case "1":
                    case !0:
                        i = t = !0;
                        break;
                    case 2:
                    case "2":
                        t = !!0, r.event = h("contentmodification", "", {});
                        break;
                    case 0:
                    case "0":
                    case !1:
                    default:
                        t = !1
                }
                if (!U.yql_enabled) {
                    var o = r.pp || {};
                    return L("LVs is are disabled when geo only"), void(t && _(o, i))
                }
                var a = !1 !== n;
                i && !U.persist_asid && l(), t && r && r.event && (r.event = null), s.refreshModule(e, t, a, r), s.reevaluateModuleViewability(e)
            }, this.removeModule = function(e) {
                s.removeModule(e)
            }, this.isModuleTracked = function(e) {
                return U.ldbg && L("isTracked called: " + e), r && void 0 !== r.exists(e)
            }, this.destroy = function() {
                e.destroy()
            }
        }

        function p(r) {
            r = r ? document.getElementById(r) : window;
            var t = null,
                n = lastApvTime = (new Date).getTime(),
                i = x.getScrollY(r),
                o = -1,
                e = function() {
                    null != t && clearTimeout(t);
                    var e = (new Date).getTime();
                    e - n < U.apv_time && (i = x.getScrollY(r), lastApvTime = e), t = setTimeout(function() {
                        ! function() {
                            var e = x.getScrollY(r),
                                t = -1 === o ? e - i : e - o,
                                n = 0 < t ? 0 : 1;
                            Math.abs(t) > U.apv_px && (_({
                                A_apv: 1,
                                A_apx: e,
                                A_asd: n
                            }, !1, !0), o = e, lastApvTime = (new Date).getTime(), U.apv_callback && U.apv_callback.call(this, {
                                pixel_pos: e,
                                scroll_dir: n
                            }))
                        }()
                    }, U.apv_time)
                };
            x.addEvent(r, "scroll", e), this.reInit = function() {
                i = x.getScrollY(r), o = -1, n = lastApvTime = (new Date).getTime()
            }, this.destroy = function() {
                x.rmEvent(r, "scroll", e)
            }
        }

        function v() {
            var o, a, s = {
                    focus: {
                        state: "start",
                        etrg: "show",
                        etag: "dwell,start",
                        jse: "window.focus"
                    },
                    pageshow: {
                        state: "start",
                        etrg: "show",
                        etag: "dwell,start",
                        jse: "window.pageshow"
                    },
                    "visibilitychange-visible": {
                        state: "start",
                        etrg: "show",
                        etag: "dwell,start",
                        jse: "document.visibilitychange"
                    },
                    blur: {
                        state: "stop",
                        etrg: "hide",
                        etag: "dwell,stop",
                        jse: "window.blur"
                    },
                    pagehide: {
                        state: "stop",
                        etrg: "hide",
                        etag: "dwell,stop",
                        jse: "window.pagehide"
                    },
                    "visibilitychange-hidden": {
                        state: "stop",
                        etrg: "hide",
                        etag: "dwell,stop",
                        jse: "document.visibilitychange"
                    },
                    beforeunload: {
                        state: "stop",
                        etrg: "close",
                        etag: "dwell,stop",
                        jse: "window.beforeunload"
                    }
                },
                l = "start";
            j = V(), void 0 !== document.hidden ? (o = "hidden", a = "visibilitychange") : void 0 !== document.mozHidden ? (o = "mozHidden", a = "mozvisibilitychange") : void 0 !== document.msHidden ? (o = "msHidden", a = "msvisibilitychange") : void 0 !== document.webkitHidden && (o = "webkitHidden", a = "webkitvisibilitychange");
            var t = function(e) {
                var t = "",
                    n = e.type;
                if (e.type == a && (n = document[o] ? "visibilitychange-hidden" : "visibilitychange-visible"), x.hasOwn(s, n) && (t = s[n].state), 0 != t.length)
                    if (l != t) {
                        l = t;
                        var r = s[n];
                        L("dwell: change state to " + l + " (event=" + n + ")");
                        var i = {
                            etrg: r.etrg,
                            outcm: "window",
                            usergenf: 1,
                            etag: r.etag,
                            A_jse: r.jse
                        };
                        "start" === l && (j = V(), null != B && (i.A_prets = B.ts, i.A_prems = B.ms)), "stop" === l && (B = V(), null != j && (i.A_prets = j.ts, i.A_prems = j.ms)), u("dwell", i, "")
                    } else L("dwell: -- state already " + l + " (event=" + n + ")")
            };
            for (var e in s) s.hasOwnProperty(e) && x.addEvent(window, e, t);
            x.addEvent(window, a, t), this.set_state = function(e) {
                l = e
            }, this.start_dwell = function() {
                return "start" === l ? (L("dwell: -- state already " + l), !1) : (l = "start", j = V(), !0)
            }, this.stop_dwell = function() {
                return "stop" === l ? (L("dwell: -- state already " + l), !1) : (l = "stop", B = V(), !0)
            }, this.destroy = function() {
                for (var e in s) s.hasOwnProperty(e) && x.rmEvent(window, e, t);
                x.rmEvent(window, a, t)
            }
        }
        var w = 0;

        function O(e, n) {
            if (window.performance && window.performance.timing) {
                var r = e ? e.perf_navigationtime || 0 : U.perf_navigationtime || 0,
                    i = e ? e.perf_resourcetime || 0 : U.perf_resourcetime || 0,
                    o = e ? e.perf_commontime || null : U.perf_commontime || null,
                    a = e ? e.perf_usertime || null : U.perf_usertime || null;
                if (!(r < 1 && i < 1) || o || a) {
                    var t = x.hasOwn(U.sample, "perf_navigationtime") ? U.sample.perf_navigationtime : 100,
                        s = x.hasOwn(U.sample, "perf_resourcetime") ? U.sample.perf_resourcetime : 100,
                        l = x.samplingSuccess(t),
                        c = x.samplingSuccess(s);
                    (l || c) && ((0 < r || 0 < i) && 0 === window.performance.timing.loadEventStart && (w += 10) <= 200 ? setTimeout(function() {
                        O(e, n)
                    }, 10) : function() {
                        var e = new D(function(e, t, n, r, i, o) {
                            var a = {},
                                s = window.performance.timing;
                            if (i && 0 < e && (H(s.responseStart, s.connectEnd, a, "A_pfb"), H(s.responseEnd, s.responseStart, a, "A_pbp"), H(s.responseEnd, s.requestStart, a, "A_psr"), H(s.loadEventStart, s.navigationStart, a, "A_pol"), H(s.domInteractive, s.navigationStart, a, "A_pdi")), i && 1 < e && (H(s.redirectEnd, s.redirectStart, a, "A_prd"), H(s.domainLookupEnd, s.domainLookupStart, a, "A_pdl"), H(s.connectEnd, s.secureConnectionStart, a, "A_psh"), H(s.connectEnd, s.connectStart, a, "A_psc"), H(s.loadEventStart, s.responseEnd, a, "A_pfe")), o && 0 < t && void 0 !== window.performance.getEntries) {
                                var l = [],
                                    c = window.performance.getEntries();
                                c.sort(function(e, t) {
                                    return e.duration > t.duration ? -1 : e.duration < t.duration ? 1 : 0
                                });
                                for (var u = c.slice(0, 10), d = u.length, f = 0; f < d; f++) {
                                    var m = {},
                                        p = u[f].name.replace(/\?.+$/, "");
                                    p = p.replace(/^.+\//, ""), m.name = p, m.dur = Math.floor(u[f].duration), m.st = Math.floor(u[f].startTime), l.push(m)
                                }
                                a.A_res = x.sfy(l)
                            }
                            if (n && (x.hasOwn(n, "initialPageLoad") && (a.A_cmi = x.sfy(n.initialPageLoad)), x.hasOwn(n, "afterPageLoad") && (a.A_cma = x.sfy(n.afterPageLoad))), r)
                                for (var v = ["utm"], f = 0; f < v.length; f++) x.hasOwn(r, v[f]) && (a.A_utm = x.sfy(r[v[f]]));
                            return a.etrg = "backgroundPost", a.outcm = "performance", a.usergenf = 0, a.etag = "performance", a
                        }(r, i, o, a, l, c));
                        "object" == typeof n && e.absorb(n);
                        var t = h(0, "pageperf", e.getAll(), "");
                        b.sendEvents(t)
                    }())
                }
            }
        }

        function H(e, t, n, r) {
            if ("number" == typeof e && "number" == typeof t && 0 < t && t < e) {
                var i = e - t;
                i < Date.now() && (n[r] = i)
            }
        }
        var j = null,
            B = null;
        ! function() {
            U.dwell_on && (P = new v),
                function() {
                    if (U.ult_token_capture && !0 !== YAHOO.i13n.__handled_ult_tokens__) {
                        YAHOO.i13n.__handled_ult_tokens__ = !0;
                        var e = U.loc;
                        if (e.match(/;_yl[a-z]{1}=/)) U.ldbg && L("Found ULT Token on URL."), b.sendGeoT(e);
                        else {
                            var t = (new R).getCookieByName("D");
                            t && (x.clearCookie("D", "/", ".yahoo.com"), b.sendGeoT(t))
                        }
                    }
                }(), U.ldbg && L("tracked_mods: " + x.fData(U.tracked_mods));
            var e = r.addModules(U.tracked_mods, !1),
                t = r.addModules(U.tracked_mods_viewability, U.viewability);
            U.pageview_on_init && b.sendRapidNoDelay(e.concat(t), U.client_only), U.prerender && function() {
                if ("prerender" == document.visibilityState) {
                    var e = h(0, "prerender", {
                        etrg: "prerender",
                        outcm: "page",
                        usergenf: 0,
                        etag: "prerender"
                    }, "");
                    b.sendEvents(e)
                }
            }(), x.executeOnLoad(function() {
                U.apv && (k = new p), O(), N.extendBCookie()
            })
        }();
        var Y = {
                utils: x
            },
            W = {
                init: function() {},
                beaconEvent: function(e, t, n, r) {
                    u(e, t, n, r)
                },
                beaconClick: function(e, t, n, r, i, o, a) {
                    U.ldbg && L("beaconClick: sec=" + e + " slk=" + t + " callback=" + o), !r && i && (r = {});
                    var s = {};
                    if (i && (r.outcm = i, s.outcm = i), a && a.pp && x.aug(s, a.pp), a && a.dwell && U.dwell_on) {
                        var l = a.dwell;
                        "start" !== l && "stop" !== l || ("start" === l ? P.start_dwell() && (s.etag = "dwell," + l, s.usergenf = 1, s.A_prets = B ? B.ts : null, s.A_prems = B ? B.ms : null) : P.stop_dwell() && (s.etag = "dwell," + l, s.usergenf = 1, s.A_prets = j ? j.ts : null, s.A_prems = j ? j.ms : null))
                    }
                    var c, u, d, f, m, p, v = (c = e, u = t, d = n, f = r, m = i, p = {}, x.aug(p, f), p.sec = c, p.slk = u, p._p = d, {
                        data: p,
                        outcome: m,
                        event: null,
                        moduleElement: null,
                        targetElement: null,
                        synch: !1,
                        hasTargetTop: !1
                    });
                    v.pp = s, b.sendClick(v, o)
                },
                addModuleAPV: function(e) {
                    return new p(e)
                },
                beaconAPV: function(e, t) {
                    _({
                        A_apv: 1,
                        A_apx: e || 0,
                        A_asd: t || 0
                    }, !1, !0)
                },
                addTargetedModuleViewabilityManager: function(e) {
                    return new d(e)
                },
                addModules: t.addModules,
                addModulesWithViewability: t.addModulesWithViewability,
                refreshModule: t.refreshModules,
                reevaluateModulesViewability: t.reevaluateModulesViewability,
                removeModule: t.removeModule,
                isModuleTracked: t.isModuleTracked,
                destroy: function() {
                    L("destroy called"), r.destroy(), k && (k.destroy(), k = null), t && (t.destroy(), t = null), P && (P.destroy(), P = null)
                },
                reInit: function(e) {
                    U.ldbg && L("reInit called with: " + x.fData(e)), (e = e || {}).spaceid ? (f = new D, n.keys = f, U = i(e), n.conf = U, x = q(e), N = new R(f)) : M("Invalid spid in reInit config: " + x.fData(e))
                },
                setRapidAttribute: function(e) {
                    if (e.keys && U.keys.absorb(e.keys), e.spaceid && (U.spaceid = e.spaceid), e.referrer && (U.referrer = e.referrer), e.A_sid && (U.keys.set("A_sid", e.A_sid), U.persist_asid = !0), e.accountGUID && (U.accountGUID = e.accountGUID), e.customUID) {
                        var t = e.customUID;
                        if ("object" == typeof t && t.type && t.id) {
                            var n = t.type;
                            o[n] ? U.customUID = x.aug({}, e.customUID) : console.error('customUID type: "' + n + '", is not valid')
                        } else console.error('customUID must be an Object with "id" and "type"')
                    }
                    e.location && (U.loc = e.location, U.keys.set("_w", x.rmProto(e.location))), x.hasOwn(e, "apv") && (e.apv ? k ? k.reInit() : k = new p : k && (k.destroy(), k = null))
                },
                getRapidAttribute: function(e) {
                    switch (e) {
                        case "accountGUID":
                            return U.accountGUID;
                        case "customUID":
                            return x.aug({}, U.customUID);
                        case "spaceid":
                            return U.spaceid;
                        case "keys":
                            return x.aug({}, U.keys.getAll());
                        default:
                            return null
                    }
                },
                setAccountGUID: function(e) {
                    this.setRapidAttribute({
                        accountGUID: e
                    })
                },
                getAccountGUID: function() {
                    return this.getRapidAttribute("accountGUID")
                },
                clearAccountGUID: function() {
                    this.clearRapidAttribute(["accountGUID"])
                },
                setCustomUID: function(e) {
                    this.setRapidAttribute({
                        customUID: e
                    })
                },
                getCustomUID: function() {
                    return this.getRapidAttribute("customUID")
                },
                clearCustomUID: function() {
                    this.clearRapidAttribute(["customUID"])
                },
                clearRapidAttribute: function(e) {
                    for (var t in e)
                        if ("keys" === e[t]) {
                            var n = U.keys.get("_w"),
                                r = U.keys.get("A_sid");
                            U.keys = new D, U.keys.set("_w", n), U.keys.set("A_sid", r)
                        } else "referrer" === e[t] ? U.referrer = "" : "A_sid" === e[t] ? (U.keys.set("A_sid", ""), U.persist_asid = !0) : "location" === e[t] ? (U.loc = "", U.keys.set("_w", "")) : "accountGUID" === e[t] ? U.accountGUID = null : "customUID" === e[t] && (U.customUID = null)
                },
                beaconPageview: function(e) {
                    _(e, !0)
                },
                beaconRouteChange: function(e) {
                    U.dwell_on && P.stop_dwell() && u("dwell", {
                        etag: "dwell,stop",
                        usergenf: 1,
                        A_prets: j ? j.ts : null,
                        A_prems: j ? j.ms : null
                    }, ""), this.clearRapidAttribute(["keys"]), this.setRapidAttribute(e), _()
                },
                beaconECommerce: function() {},
                beaconInternalSearch: function() {},
                getCurrentSID: function() {
                    return f.get("A_sid")
                },
                notifyHistoryPushStateCalled: function() {},
                beaconLinkViews: function(e, t, n, r) {
                    U.ldbg && L("beaconLinkViews() called");
                    var i = {};
                    (n = n || {}).pp && x.aug(i, n.pp);
                    var o = !1;
                    switch (t) {
                        case 1:
                        case "1":
                        case !0:
                            o = !0;
                            break;
                        case 2:
                        case "2":
                            o = !!0, n.event = h("contentmodification", "", {});
                            break;
                        case 0:
                        case "0":
                        case !1:
                        default:
                            o = !1
                    }
                    if (!U.yql_enabled) return L("LVs is are disable when geo only"), void(o && _(i, !1));
                    if (n && n.event && o && (M("Cannot track event type and pageview at same time."), n.event = null), 0 !== e.length || n.event) {
                        for (var a = [], s = 0; s < e.length; s++) {
                            var l = e[s],
                                c = new g;
                            c.absorb_filter(l, function(e) {
                                return "sec" != e && "_links" != e
                            });
                            for (var u = [], d = 1, f = 0; f < l._links.length; f++) {
                                var m = l._links[f],
                                    p = {
                                        viewable: !0,
                                        data: {
                                            sec: l.sec,
                                            _p: d++,
                                            A_lv: 2
                                        }
                                    };
                                x.aug(p.data, m), u.push(p)
                            }
                            var v = {
                                moduleName: l.sec,
                                moduleYLK: c,
                                links: u,
                                identifier: l.sec
                            };
                            a.push(v)
                        }(o || n.event || n.pp) && n.event && n.event.data && x.aug(i, n.event.data), b.sendRapidNoDelay(a, o, i, n), r && r.call()
                    }
                },
                beaconPerformanceData: function(e, t) {
                    O(e, t)
                },
                __test_only__: function() {
                    return Y
                }
            };
        return G.push({
            state: n,
            instance: W
        }), W;

        function q(e) {
            var t, n = navigator.userAgent,
                r = Object.prototype,
                p = n.match(/MSIE\s[^;]*/) || n.match(/Trident\/[^;]*/) ? 1 : 0,
                i = /KHTML/.test(n) ? 1 : 0,
                o = null !== n.match(/(iPhone|iPad|iPod)/gi),
                a = (n.indexOf("Android"), o && null !== n.match(/AppleWebKit/)),
                s = null !== n.match(/AppleWebKit/) && null === n.match(/Chrome/),
                l = new RegExp(/\ufeff|\uffef|[\u0000-\u001f]|[\ue000-\uf8ff]/g),
                c = new RegExp(/[\u007f-\u00a0]|\s{2,}/g),
                u = "http://",
                d = "https://",
                f = -1,
                v = -1,
                m = "https:" === window.location.protocol;
            return p && (document.documentMode ? v = document.documentMode : (v = 5, document.compatMode && "CSS1Compat" == document.compatMode && (v = 7))), {
                $: function(e) {
                    return document.getElementById(e)
                },
                ca: "%01",
                cb: "%02",
                cc: "%03",
                cd: "%04",
                ce: "%05",
                cf: "%06",
                cg: "%07",
                ch: "%08",
                ylk_kv_delim: e.ylk_kv_delim || ":",
                ylk_pair_delim: e.ylk_pair_delim || ";",
                DATA_ACTION: "data-action",
                data_action_outcome: "data-action-outcome",
                isIE: p,
                isIOSSafari: a,
                isSafari: s,
                isWebkit: i,
                ieV: v,
                value_len_whitelist: ["A_res", "A_cmi", "A_cma", "A_utm"],
                hasOwn: function(e, t) {
                    return r.hasOwnProperty.call(e, t)
                },
                enc: encodeURIComponent,
                dec: decodeURIComponent,
                getQueryStringValue: function(e, t) {
                    return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(t).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
                },
                curProto: function() {
                    return m ? d : u
                },
                isSecure: function() {
                    return m
                },
                isScrollHorizontalVisible: function(e) {
                    return (e = e || document.documentElement).scrollWidth > e.clientWidth
                },
                getCompStyle: function(n, e) {
                    return void 0 !== window.getComputedStyle ? window.getComputedStyle(n, e) : (this.el = n, this.getPropertyValue = function(e) {
                        var t = /(\-([a-z]){1})/g;
                        return "float" == e && (e = "styleFloat"), t.test(e) && (e = e.replace(t, function() {
                            return arguments[2].toUpperCase()
                        })), n.currentStyle[e] ? n.currentStyle[e] : 0
                    }, this)
                },
                getBorder: function(e, t) {
                    if (!e || !t) return 0;
                    var n = parseInt(this.getCompStyle(e, null).getPropertyValue(t), 10);
                    return isNaN(n) && (n = 0), n
                },
                getElementHeight: function(e) {
                    if (!e) return 0;
                    var t = e.offsetHeight || 0;
                    return t ? t - this.getBorder(e, "border-top-width") - this.getBorder(e, "border-bottom-width") : 0
                },
                getPositionTop: function(e) {
                    for (var t = 0; e;) t += e.offsetTop, e = e.offsetParent;
                    return t
                },
                getScrollbarWidthHeight: function() {
                    var e = this.make("div");
                    e.style.overflow = "scroll", e.style.visibility = "hidden", e.style.position = "absolute", e.style.width = "100px", e.style.height = "100px", document.body.appendChild(e);
                    var t = {
                        width: e.offsetWidth - e.clientWidth,
                        height: e.offsetHeight - e.clientHeight
                    };
                    return this.rmBodyEl(e), t
                },
                isInView: function(e, t) {
                    if (p && v <= 7) return !0;
                    var n, r, i, o, a, s, l, c, u, d = x.getCompStyle(e);
                    if ("hidden" == d.visibility || "none" == d.display) return !1;

                    function f(e) {
                        var t = e.getBoundingClientRect(),
                            n = t.left,
                            r = t.top;
                        return {
                            x: n + e.clientWidth / 2,
                            y: r + e.clientHeight / 2
                        }
                    }

                    function m(e) {
                        var t = f(e),
                            n = t.x,
                            r = t.y,
                            i = window.innerHeight || document.documentelement.clientHeight,
                            o = window.innerWidth || document.documentelement.clientWidth;
                        return 0 <= n && n <= o && 0 <= r && r <= i
                    }
                    return t !== window ? (n = t, r = f(e), i = r.x, o = r.y, a = n.getBoundingClientRect(), s = a.left, l = a.right, c = a.top, u = a.bottom, s <= i && i <= l && c <= o && o <= u && m(e)) : m(e)
                },
                strip: function(e) {
                    for (var t = {
                            "/": "P",
                            ";": "1",
                            "?": "P",
                            "&": "1",
                            "#": "P"
                        }, n = {
                            url: e,
                            clean: "",
                            cookie: "",
                            keys: []
                        }, r = 0; - 1 !== e.indexOf("_yl", r);) {
                        var i = e.indexOf("_yl", r);
                        if (r < i && (n.clean += e.slice(r, i - 1)), r = i + 3, t[e.charAt(i - 1)] && "=" === e.charAt(i + 4)) {
                            n.ult = 1;
                            var o = "_yl" + e.charAt(i + 3),
                                a = "";
                            for (i += 5; i < e.length && !t[e.charAt(i)]; i++) a += e.charAt(i);
                            n.keys.push(o), n[o] = a, "_ylv" !== o && (n.cookie += "&" + o + "=" + a), t[e.charAt(i)] && "P" === t[e.charAt(i)] && (n.clean += e.charAt(i)), r = i + 1
                        } else n.clean += e.slice(i - 1, r)
                    }
                    return n.ult && (n.cookie = n.cookie.substr(1), n.clean += e.substr(r)), n
                },
                prevDef: function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                },
                appBodyEl: function(e) {
                    document.body.appendChild(e)
                },
                rmBodyEl: function(e) {
                    document.body.removeChild(e)
                },
                sa: function(e, t, n) {
                    e.setAttribute(t, n)
                },
                getScrollY: function(e) {
                    return e && e !== window ? e.scrollTop : void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
                },
                make: function(e, t) {
                    var n = document.createElement(e);
                    if (t && this.isObj(t))
                        for (var r in t) this.sa(n, r, t[r]);
                    return n
                },
                getXHR: function() {
                    var r = [function() {
                        return new XMLHttpRequest
                    }, function() {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    }, function() {
                        return new ActiveXObject("Msxml3.XMLHTTP")
                    }, function() {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }];
                    return function() {
                        for (var e = !1, t = r.length, n = 0; n < t; n++) {
                            try {
                                e = r[n]()
                            } catch (e) {
                                continue
                            }
                            break
                        }
                        return e
                    }()
                },
                hasLS: function() {
                    try {
                        return "localStorage" in window && null !== window.localStorage
                    } catch (e) {
                        return !1
                    }
                },
                hasCORS: function() {
                    return !(p && v < 10) && ("withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest)
                },
                hasWorkers: function() {
                    return !!window.Worker
                },
                clearCookie: function(e, t, n) {
                    t = t || "/", n = n || "", document.cookie = e + "= ; path=" + t + "; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=" + n + ";"
                },
                uniqConcat: function(e, t, o) {
                    var a = [],
                        s = {};

                    function n(e) {
                        for (var t = 0, n = e.length; t < n; t++) {
                            var r = e[t];
                            if (r) {
                                var i = o(r);
                                s[i] || (s[i] = 1, a.push(r))
                            }
                        }
                    }
                    return n(e), n(t), a
                },
                trim: function(e) {
                    return e ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
                },
                extDomain: function(e) {
                    var t = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                    return t && t[1]
                },
                getAttribute: function(e, t) {
                    var n = "";
                    return document.documentElement.hasAttribute || "class" !== t || (t = "className"), e && e.getAttribute && (n = e.getAttribute(t, 2)), n
                },
                isDate: function(e) {
                    return "[object Date]" === r.toString.call(e)
                },
                isArr: function(e) {
                    return "[object Array]" === r.toString.apply(e)
                },
                isStr: function(e) {
                    return "string" == typeof e
                },
                isNum: function(e) {
                    return "number" == typeof e && isFinite(e)
                },
                isNumeric: function(e) {
                    return e - 0 == e && 0 < (e + "").replace(/^\s+|\s+$/g, "").length
                },
                isObj: function(e) {
                    return e && "object" == typeof e
                },
                rTN: function(e) {
                    try {
                        if (e && 3 === e.nodeType) return e.parentNode
                    } catch (e) {
                        M(e)
                    }
                    return e
                },
                getTarget: function(e) {
                    var t = e.target || e.srcElement;
                    return t && !t.nodeName && (t = t.correspondingUseElement && t.correspondingUseElement.parentNode ? t.correspondingUseElement.parentNode : null), this.rTN(t)
                },
                addEvent: function(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                },
                rmEvent: function(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                },
                aug: function(e, t, n) {
                    if (t) {
                        for (var r in t)
                            if (this.hasOwn(t, r)) {
                                if (n && !n.call(null, r, t[r])) continue;
                                e[r] = t[r]
                            } return e
                    }
                },
                rmProto: function(e) {
                    return e ? e.substr(0, 7) === u ? e.substr(7, e.length) : e.substr(0, 8) === d ? e.substr(8, e.length) : e : ""
                },
                norm: function(e) {
                    return null === e ? "" : (e = "" + e, this.trim(e.replace(c, " ").replace(l, "")))
                },
                _hasClass: function(e, t) {
                    var n, r = !1;
                    return e && t && (n = this.getAttribute(e, "class") || "", r = t.exec ? t.test(n) : t && -1 < (" " + n + " ").indexOf(" " + t + " ")), r
                },
                hasClass: function(e, t) {
                    if (this.isArr(t)) {
                        for (var n = 0, r = t.length; n < r; n++)
                            if (this._hasClass(e, t[n])) return !0;
                        return !1
                    }
                    return !!this.isStr(t) && this._hasClass(e, t)
                },
                quote: function(e) {
                    var t = /["\\\x00-\x1f\x7f-\x9f]/g,
                        n = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        };
                    return e.match(t) ? '"' + e.replace(t, function(e) {
                        var t = n[e];
                        return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (e % 16).toString(16))
                    }) + '"' : '"' + e + '"'
                },
                sfy: function(e) {
                    if (!e && "" !== e) return {};
                    var t, n = typeof e;
                    if ("undefined" === n) return "undefined";
                    if ("number" === n || "boolean" === n) return "" + e;
                    if ("string" === n) return this.quote(e);
                    if ("function" == typeof e.toJSON) return this.sfy(e.toJSON());
                    if (this.isDate(e)) {
                        var r = e.getUTCMonth() + 1,
                            i = e.getUTCDate(),
                            o = e.getUTCFullYear(),
                            a = e.getUTCHours(),
                            s = e.getUTCMinutes(),
                            l = e.getUTCSeconds(),
                            c = e.getUTCMilliseconds();
                        return r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), a < 10 && (a = "0" + a), s < 10 && (s = "0" + s), l < 10 && (l = "0" + l), c < 100 && (c = "0" + c), c < 10 && (c = "0" + c), '"' + o + "-" + r + "-" + i + "T" + a + ":" + s + ":" + l + "." + c + 'Z"'
                    }
                    if (t = [], this.isArr(e)) {
                        for (var u = 0, d = e.length; u < d; u++) t.push(this.sfy(e[u]));
                        return "[" + t.join(",") + "]"
                    }
                    if ("object" === n) {
                        for (var f in e)
                            if (this.hasOwn(e, f)) {
                                var m = typeof f,
                                    p = null;
                                if ("string" === m) p = this.quote(f);
                                else {
                                    if ("number" !== m) continue;
                                    p = '"' + f + '"'
                                }
                                if ("function" !== (m = typeof e[f]) && "undefined" !== m) {
                                    var v = "";
                                    v = null === e[f] ? '""' : 0 === e[f] ? 0 : this.sfy(e[f]), t.push(p + ":" + v)
                                }
                            } return "{" + t.join(",") + "}"
                    }
                },
                toJSON: (t = null, function(e) {
                    return t || (t = "object" == typeof JSON && JSON.stringify && 6 !== v && 7 !== v && 8 !== v ? JSON.stringify : this.sfy), t.call(this, e)
                }),
                executeOnLoad: function(n) {
                    var r = !1,
                        e = function(e) {
                            (document.addEventListener || e && "load" === e.type || "complete" === document.readyState) && (r = !0, i(), n.call(this))
                        },
                        i = function() {
                            document.addEventListener ? (document.removeEventListener("DOMContentLoaded", e, !1), window.removeEventListener("load", e, !1)) : (document.detachEvent("onreadystatechange", e), window.detachEvent("onload", e))
                        };
                    if ("complete" === document.readyState) setTimeout(e);
                    else if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1);
                    else {
                        document.attachEvent("onreadystatechange", e), window.attachEvent("onload", e);
                        var o = !1;
                        try {
                            o = null == window.frameElement && document.documentElement
                        } catch (e) {}
                        o && o.doScroll && function t() {
                            if (!r) {
                                try {
                                    o.doScroll("left")
                                } catch (e) {
                                    return setTimeout(t, 50)
                                }
                                i(), n.call(this)
                            }
                        }()
                    }
                },
                getLinkContent: function(e) {
                    for (var t, n = 0, r = "";
                        (t = e.childNodes[n]) && t; n++) 1 === t.nodeType && ("img" === t.nodeName.toLowerCase() && (r += (this.getAttribute(t, "alt") || "") + " "), r += this.getLinkContent(t));
                    return r
                },
                fData: function(e) {
                    return this.isStr(e) ? e : this.toJSON(e)
                },
                getLT: function(e, t) {
                    if (!e) return "_";
                    var n = "";
                    return t = t.toLowerCase(), n = "input" === e.nodeName.toLowerCase() ? this.getAttribute(e, "value") : "text" === t ? i ? e.textContent : e.innerText ? e.innerText : e.textContent : "href" === t ? this.rmProto(this.getAttribute(e, "href")) : this.getAttribute(e, t) || "", "" === (n = this.norm(n)) && (n = this.norm(this.getLinkContent(e))), "" === n ? "_" : n
                },
                clref: function(e) {
                    if (0 !== e.indexOf(u) && 0 !== e.indexOf(d)) return "";
                    var t = this.strip(e);
                    return t.clean || t.url
                },
                cold: function() {
                    return screen ? screen.colorDepth || screen.pixelDepth : "unknown"
                },
                sr: function() {
                    return screen && screen.width && screen.height ? screen.width + "x" + screen.height : ""
                },
                vr: function() {
                    return screen && screen.availHeight && screen.availWidth ? screen.availWidth + "x" + screen.availHeight : ""
                },
                dor: function() {
                    return screen && screen.orientation && screen.orientation.type ? -1 < screen.orientation.type.indexOf("landscape") ? 1 : 0 : ""
                },
                ib: function() {
                    return window && window.innerHeight && window.innerWidth ? window.innerWidth + "x" + window.innerHeight : document.documentElement.clientWidth + "x" + document.documentElement.clientHeight
                },
                ob: function() {
                    return window && window.outerHeight && window.outerWidth ? window.outerWidth + "x" + window.outerHeight : document.documentElement.clientWidth + "x" + document.documentElement.clientHeight
                },
                srr: function() {
                    return window && window.devicePixelRatio ? window.devicePixelRatio : "1"
                },
                xy: function(e) {
                    var t, n, r = null,
                        i = e.pageX,
                        o = e.pageY;
                    return p && (t = document.documentElement, n = document.body, r = t && (t.scrollTop || t.scrollLeft) ? [t.scrollTop, t.scrollLeft] : n ? [n.scrollTop, n.scrollLeft] : [0, 0]), i || 0 === i || (i = e.clientX || 0, p && (i += r[1])), o || 0 === o || (o = e.clientY || 0, p && (o += r[0])), i + "," + o
                },
                hasCC: function(e) {
                    for (var t = 0, n = e.length; t < n; t++) {
                        var r = e.charCodeAt(t);
                        if (r < 32 || "=" === r) return !0
                    }
                    return !1
                },
                isValidPair: function(e, t) {
                    return !!x.in_value_whitelist(e) || (!(e.length <= 0 || 32 < e.length) || (x.ldbg && console.warn("Invalid key (" + e + ") length. Keys Must be <=32."), !1))
                },
                ser: function(e, t) {
                    if (!e) return "";
                    void 0 === typeof t && (t = !0);
                    var n = [],
                        r = "";
                    for (var i in e)
                        if (this.hasOwn(e, i)) {
                            var o = i,
                                a = e[i];
                            if (null === o || null === a) continue;
                            if (o += "", a += "", !this.isValidPair(o, a)) continue;
                            if (!this.hasCC(o) && !this.hasCC(a)) {
                                (r = "") !== (a = this.trim(a)) && " " !== a || !t || (a = "_");
                                try {
                                    r = (r = this.enc(o + "" + a)).replace(/'/g, "%27")
                                } catch (e) {
                                    r = "_ERR_ENCODE_", M(e)
                                }
                                n.push(r)
                            }
                        } return n.join(this.cd)
                },
                rand: function() {
                    for (var e = 0, t = ""; e++ < 16;) {
                        var n = Math.floor(62 * Math.random());
                        t += n < 10 ? n : String.fromCharCode(n < 36 ? n + 55 : n + 61)
                    }
                    return t
                },
                tms: function() {
                    return +new Date
                },
                cookEn: function() {
                    var e = navigator.cookieEnabled ? 1 : 0,
                        t = "rapidtc";
                    return void 0 !== navigator.cookieEnabled || e || (document.cookie = t + "=1", e = -1 != document.cookie.indexOf("testcookie"), document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"), e
                },
                isResCF: function(e) {
                    return {
                        14: 1,
                        15: 1,
                        18: 1,
                        19: 1,
                        20: 1
                    } [e]
                },
                isTagOfInterest: function(e, t) {
                    for (var n = 0, r = t.length; n < r; n++)
                        if (e.tagName && e.tagName.toLowerCase() == t[n].toLowerCase()) return !0;
                    return !1
                },
                samplingSuccess: function(e) {
                    return function(e) {
                        e *= 10;
                        var t = "" + (new R).getCookieByName("B");
                        return !!t && (f < 0 && (f = function(e) {
                            for (var t = 33554467, n = 0, r = e.length; n < r; n++) t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24), t ^= e.charCodeAt(n);
                            return t < 0 && (t &= 2147483647, t += 2147483648), t
                        }(t) % 1e3), f < e)
                    }(e)
                },
                in_value_whitelist: function(e) {
                    return !(p && v <= 8) && -1 !== x.value_len_whitelist.indexOf(e)
                }
            }
        }
    }
}();