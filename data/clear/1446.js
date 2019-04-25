! function(e) {
    function t(t) {
        for (var r, a, c = t[0], u = t[1], l = t[2], f = 0, p = []; f < c.length; f++) a = c[f], o[a] && p.push(o[a][0]), o[a] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
        for (s && s(t); p.length;) p.shift()();
        return i.push.apply(i, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, c = 1; c < n.length; c++) {
                var u = n[c];
                0 !== o[u] && (r = !1)
            }
            r && (i.splice(t--, 1), e = a(a.s = n[0]))
        }
        return e
    }
    var r = {},
        o = {
            0: 0
        },
        i = [];

    function a(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = r, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) a.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "";
    var c = window.webpackJsonp = window.webpackJsonp || [],
        u = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var l = 0; l < c.length; l++) t(c[l]);
    var s = u;
    i.push([179, 2, 1]), n()
}([, function(e, t, n) {
    e.exports = n(184)()
}, , function(e, t) {
    e.exports = {
        DEVICE_MOBILE: "Mobile",
        DEVICE_TABLET: "Tablet",
        DEVICE_DESKTOP: "Desktop",
        DCOM_PROTOCOL: "http",
        TCOM_PROTOCOL: "http",
        TCOM_URL: "www.thesaurus.com",
        DCOM_URL: "www.dictionary.com",
        LISTAZ_TERMS_PER_PAGE: 300,
        THE_DAILY_BEAST_URL: "https://thedailybeast.com/",
        WEBPACK_OUTPUT_FOLDER: "dist",
        ANALYTICS_TRACKING_AB_VALUE: "0",
        SERVER_CONTENT_TIMEOUT_MOBILE: 1e3,
        CLIENT_CONTENT_TIMEOUT_MOBILE: 1e3,
        SERVER_CONTENT_TIMEOUT_DESKTOP: 0,
        CLIENT_CONTENT_TIMEOUT_DESKTOP: 0,
        CLIENT_TRANSITION_MASK_MOBILE: !0,
        CLIENT_TRANSITION_MASK_DESKTOP: !1,
        TCOM_SPANID_URL: "http://spanids.thesaurus.com/",
        DCOM_SPANID_URL: "https://spanids.dictionary.com/",
        DEV_DEFAULT_ENV_VARIABLES: {
            EDITORIAL_API_ENDPOINT: "https://editorial-content-feed.dictionary.com/dcomhp",
            WOTD_API_ENDPOINT: "http://restcdn.dictionary.com/v2/wordoftheday.json?api_key=KgprXEYKVnNSFSZ",
            SERVER_LOGGING_LEVEL: "debug",
            CLIENT_LOGGING_LEVEL: "debug",
            API_REQUEST_LOGGING_LEVEL: "info",
            ALLOW_DISABLED_ADS: "false",
            RTF_FEATURE_ENABLED: "true",
            MUP_FEATURE_ENABLED: "true"
        },
        PROD_DEFAULT_ENV_VARIABLES: {
            SERVER_LOGGING_LEVEL: "error",
            CLIENT_LOGGING_LEVEL: "error",
            API_REQUEST_LOGGING_LEVEL: "info",
            ALLOW_DISABLED_ADS: "false",
            RTF_FEATURE_ENABLED: "false",
            MUP_FEATURE_ENABLED: "false"
        },
        EDITORIAL_SECTION_TITLES: {
            MAIN_EDITORIAL_FEED: "Explore Dictionary.com",
            RIGHT_RAIL_ATF_EDITORIAL_FEED: "Others Are Reading",
            RIGHT_RAIL_BTF_EDITORIAL_FEED: ""
        },
        ANALYTICS_SITENAME: {
            dcom: "dict",
            tcom: "thes"
        },
        DCOM_TRACKING_URL: "https://track.dictionary.com/main.gif",
        TCOM_TRACKING_URL: "https://track.thesaurus.com/main.gif",
        GTM: {
            dcom: "GTM-TXC5GP",
            tcom: "GTM-PVMWP3"
        },
        APPLICATION: {
            DCOM: "dcom",
            TCOM: "tcom",
            DCOM_FULL_NAME: "dictionary",
            TCOM_FULL_NAME: "thesaurus"
        },
        WWW: {
            DICTIONARY: "www.dictionary.com",
            THESAURUS: "www.thesaurus.com",
            TEST_DICTIONARY: "www.test.dictionary.com",
            TEST_THESAURUS: "www.test.thesaurus.com"
        },
        EMAIL_SIGNUP_ENDPOINT: "https://app.dictionary.com/api/ajaxmailer/subscription",
        API_WORD_LIST_ENDPOINT_DCOM: "https://api-portal.dictionary.com/dcom/list",
        API_WORD_LIST_ENDPOINT_TCOM: "https://tuna.thesaurus.com/list",
        EDITORIAL_URL: "https://www.dictionary.com/e",
        DCOM_MUP_ENDPOINT: "https://irene.dictionary.com/mup/v1",
        TCOM_MUP_ENDPOINT: "https://irene.thesaurus.com/mup/v1"
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return h
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "d", function() {
            return u
        }), n.d(t, "j", function() {
            return l
        }), n.d(t, "e", function() {
            return b
        }), n.d(t, "f", function() {
            return g
        }), n.d(t, "i", function() {
            return s
        }), n.d(t, "c", function() {
            return f
        }), n.d(t, "b", function() {
            return p
        }), n.d(t, "h", function() {
            return d
        }), n.d(t, "l", function() {
            return v
        }), n.d(t, "k", function() {
            return o
        }), n.d(t, "m", function() {
            return y
        });
        var r, o = e.browser,
            i = function(e) {
                return e && e.replace(/\/$/, "")
            },
            a = function() {
                return o ? window.ENV_VARS : (r || (console.warn("envVars not found in the server! If you are running tests, this is fine."), r = {}), r)
            },
            c = function(e) {
                return a()[e]
            },
            u = function() {
                return i(c("EDITORIAL_API_ENDPOINT"))
            },
            l = function() {
                return i(c("WOTD_API_ENDPOINT"))
            },
            s = function() {
                return c("TCOM_URL")
            },
            f = function() {
                return c("DCOM_URL")
            },
            p = function() {
                return c("DCOM_PROTOCOL")
            },
            d = function() {
                return c("TCOM_PROTOCOL")
            },
            h = function() {
                return c("CLIENT_LOGGING_LEVEL")
            },
            m = function() {
                return c("SERVER_LOGGING_LEVEL")
            },
            b = function() {
                return c("DCOM_PUBLIC_ASSETS_URL")
            },
            g = function() {
                return c("TCOM_PUBLIC_ASSETS_URL")
            },
            y = function() {
                return "true" === c("MUP_FEATURE_ENABLED")
            },
            v = function() {
                return c("dev") || !1
            }
    }).call(this, n(134))
}, function(e, t) {
    e.exports = {
        API_EDITORIAL_REQUEST: "API_EDITORIAL_REQUEST",
        API_EDITORIAL_FAILURE: "API_EDITORIAL_FAILURE",
        API_EDITORIAL_NODATA: "API_EDITORIAL_NODATA",
        API_EDITORIAL_SUCCESS: "API_EDITORIAL_SUCCESS",
        API_WOTD_REQUEST: "API_WOTD_REQUEST",
        API_WOTD_FAILURE: "API_WOTD_FAILURE",
        API_WOTD_NODATA: "API_WOTD_NODATA",
        API_WOTD_SUCCESS: "API_WOTD_SUCCESS",
        UPDATE_DETECTED_DEVICE: "UPDATE_DETECTED_DEVICE",
        UPDATE_DETECTED_APPLICATION: "UPDATE_DETECTED_APPLICATION",
        UPDATE_PAGE_NAME: "UPDATE_PAGE_NAME",
        LISTAZ_CONTENT_REQUEST: "LISTAZ_CONTENT_REQUEST",
        LISTAZ_CONTENT_SUCCESS: "LISTAZ_CONTENT_SUCCESS",
        LISTAZ_CONTENT_FAILURE: "LISTAZ_CONTENT_FAILURE",
        MUP_REQUEST: "MUP_REQUEST",
        MUP_FAILURE: "MUP_FAILURE",
        MUP_NODATA: "MUP_NODATA",
        MUP_SUCCESS: "MUP_SUCCESS"
    }
}, , function(e, t, n) {
    "use strict";
    var r = n(4),
        o = n(3);
    t.a = function(e, t) {
        return Object(r.l)() ? "".concat(e) : t === o.APPLICATION.TCOM ? "".concat(Object(r.f)(), "/").concat(e) : "".concat(Object(r.e)(), "/").concat(e)
    }
}, function(e, t) {
    e.exports = {
        LINKID_FOOTER_ABOUT: "gy27eg",
        LINKID_FOOTER_CAREERS: "gy27eg",
        LINKID_FOOTER_CONTACT_US: "gy27eg",
        LINKID_FOOTER_TERMS: "gy27eg",
        LINKID_WOTD: "nx1fkx",
        LINKID_BROWSE_AZ: "74qg7q",
        LINKID_EDITORIAL_HIGHLIGHTS_CONTENTCARD: ["9q3oel", "xm43m7", "bofuu0", "ut8p0o"],
        LINKID_EDITORIAL_ARTICLES_CONTENTCARD: [
            ["rf12y7", "m1pomb", "725mvc"],
            ["7y0lvk", "rt84a1", "rvh1zt"],
            ["gqei48", "tguaw", "6nt7nq", "qffl9l", "hchtuo", "z19lbr"]
        ],
        LINKID_HEADER_TAB_DCOM: "tqks0v",
        LINKID_HEADER_TAB_TCOM: "qxnxzj"
    }
}, , function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, o, i, a, c) {
        if (!e) {
            var u;
            if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var l = [n, r, o, i, a, c],
                    s = 0;
                (u = new Error(t.replace(/%s/g, function() {
                    return l[s++]
                }))).name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    }
}, , , function(e, t, n) {
    "use strict";
    var r = function() {};
    e.exports = r
}, , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return r
    }), n.d(t, "c", function() {
        return o
    }), n.d(t, "a", function() {
        return i
    }), n.d(t, "e", function() {
        return a
    }), n.d(t, "d", function() {
        return c
    }), n.d(t, "g", function() {
        return u
    }), n.d(t, "h", function() {
        return l
    }), n.d(t, "f", function() {
        return s
    }), n.d(t, "j", function() {
        return f
    }), n.d(t, "i", function() {
        return p
    });
    n(3).ANALYTICS_TRACKING_AB_VALUE;
    var r = "dcomHomeTop-728x90",
        o = "dcomHomeTop-300x250",
        i = "dcomHomeBot-728x90",
        a = "dcomMobileHPTopAd-320x50",
        c = "dcomMobileHPBotAd-300x250",
        u = "tcomHomeTop-728x90",
        l = "tcomHomeTop-300x250",
        s = "tcomHomeBot-728x90",
        f = "dmwHomeThesTop",
        p = "dmwHomeThesBottom"
}, , , , , function(e, t, n) {
    var r, o;
    /*!
     * js-logger - http://github.com/jonnyreeves/js-logger
     * Jonny Reeves, http://jonnyreeves.co.uk/
     * js-logger may be freely distributed under the MIT license.
     */
    /*!
     * js-logger - http://github.com/jonnyreeves/js-logger
     * Jonny Reeves, http://jonnyreeves.co.uk/
     * js-logger may be freely distributed under the MIT license.
     */
    ! function(i) {
        "use strict";
        var a, c = {};
        c.VERSION = "1.6.0";
        var u = {},
            l = function(e, t) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = function() {
                var e, t, n = arguments,
                    r = n[0];
                for (t = 1; t < n.length; t++)
                    for (e in n[t]) e in r || !n[t].hasOwnProperty(e) || (r[e] = n[t][e]);
                return r
            },
            f = function(e, t) {
                return {
                    value: e,
                    name: t
                }
            };
        c.TRACE = f(1, "TRACE"), c.DEBUG = f(2, "DEBUG"), c.INFO = f(3, "INFO"), c.TIME = f(4, "TIME"), c.WARN = f(5, "WARN"), c.ERROR = f(8, "ERROR"), c.OFF = f(99, "OFF");
        var p = function(e) {
            this.context = e, this.setLevel(e.filterLevel), this.log = this.info
        };
        p.prototype = {
            setLevel: function(e) {
                e && "value" in e && (this.context.filterLevel = e)
            },
            getLevel: function() {
                return this.context.filterLevel
            },
            enabledFor: function(e) {
                var t = this.context.filterLevel;
                return e.value >= t.value
            },
            trace: function() {
                this.invoke(c.TRACE, arguments)
            },
            debug: function() {
                this.invoke(c.DEBUG, arguments)
            },
            info: function() {
                this.invoke(c.INFO, arguments)
            },
            warn: function() {
                this.invoke(c.WARN, arguments)
            },
            error: function() {
                this.invoke(c.ERROR, arguments)
            },
            time: function(e) {
                "string" == typeof e && e.length > 0 && this.invoke(c.TIME, [e, "start"])
            },
            timeEnd: function(e) {
                "string" == typeof e && e.length > 0 && this.invoke(c.TIME, [e, "end"])
            },
            invoke: function(e, t) {
                a && this.enabledFor(e) && a(t, s({
                    level: e
                }, this.context))
            }
        };
        var d, h = new p({
            filterLevel: c.OFF
        });
        (d = c).enabledFor = l(h, h.enabledFor), d.trace = l(h, h.trace), d.debug = l(h, h.debug), d.time = l(h, h.time), d.timeEnd = l(h, h.timeEnd), d.info = l(h, h.info), d.warn = l(h, h.warn), d.error = l(h, h.error), d.log = d.info, c.setHandler = function(e) {
            a = e
        }, c.setLevel = function(e) {
            for (var t in h.setLevel(e), u) u.hasOwnProperty(t) && u[t].setLevel(e)
        }, c.getLevel = function() {
            return h.getLevel()
        }, c.get = function(e) {
            return u[e] || (u[e] = new p(s({
                name: e
            }, h.context)))
        }, c.createDefaultHandler = function(e) {
            (e = e || {}).formatter = e.formatter || function(e, t) {
                t.name && e.unshift("[" + t.name + "]")
            };
            var t = {},
                n = function(e, t) {
                    Function.prototype.apply.call(e, console, t)
                };
            return "undefined" == typeof console ? function() {} : function(r, o) {
                r = Array.prototype.slice.call(r);
                var i, a = console.log;
                o.level === c.TIME ? (i = (o.name ? "[" + o.name + "] " : "") + r[0], "start" === r[1] ? console.time ? console.time(i) : t[i] = (new Date).getTime() : console.timeEnd ? console.timeEnd(i) : n(a, [i + ": " + ((new Date).getTime() - t[i]) + "ms"])) : (o.level === c.WARN && console.warn ? a = console.warn : o.level === c.ERROR && console.error ? a = console.error : o.level === c.INFO && console.info ? a = console.info : o.level === c.DEBUG && console.debug ? a = console.debug : o.level === c.TRACE && console.trace && (a = console.trace), e.formatter(r, o), n(a, r))
            }
        }, c.useDefaults = function(e) {
            c.setLevel(e && e.defaultLevel || c.DEBUG), c.setHandler(c.createDefaultHandler(e))
        }, void 0 === (o = "function" == typeof(r = c) ? r.call(t, n, t, e) : r) || (e.exports = o)
    }()
}, , , , function(e, t, n) {
    var r = n(259),
        o = "undefined" != typeof document ? document : {};
    e.exports = function(e, t, n) {
        for (var i = n ? e : e.parentNode; i && i !== o;) {
            if (r(i, t)) return i;
            i = i.parentNode
        }
    }
}, , function(e, t, n) {
    n(337), e.exports = self.fetch.bind(self)
}, , , , , function(e, t, n) {
    "use strict";

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    n.d(t, "a", function() {
        return r
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(218)),
        i = r(n(223)),
        a = r(n(227)),
        c = r(n(252)),
        u = r(n(253)),
        l = n(257),
        s = r(n(24)),
        f = n(260),
        p = r(n(261)),
        d = r(n(264)),
        h = r(n(274)),
        m = "spanids",
        b = "mseg",
        g = ".dictionary.com",
        y = function() {
            return Math.floor(899999 * Math.random()) + 1e5 + "-" + (new Date).getTime()
        },
        v = function() {
            var e = window.location.host;
            return e.indexOf(g) > -1 ? g : e.indexOf(".thesaurus.com") > -1 ? ".thesaurus.com" : e
        },
        O = function() {
            function e(t, n) {
                var r = this;
                c(this, e), this.getSpanIdsURL = function(e, t, n) {
                    var o = "",
                        i = "";
                    switch (n) {
                        case g:
                            o += r.thesaurusSpanIdUrl, i = "d";
                            break;
                        default:
                            o += r.dictionarySpanIdUrl, i = "t"
                    }
                    return o += "?bid=" + e + "&asid=" + t + "&bidnew=1&asidnew=1&source=" + i + "&site=app"
                }, this.currentDomain = v(), this.bid = null, this.sid = null, this.spanids = f.get(m), this.dictionarySpanIdUrl = t, this.thesaurusSpanIdUrl = n
            }
            return u(e, [{
                key: "createBidCookie",
                value: function() {
                    return this.bid = f.get("bid"), void 0 === this.bid && (this.bid = y(), f.set("bid", this.bid, {
                        expires: 750,
                        domain: this.currentDomain
                    }), !0)
                }
            }, {
                key: "createSidCookie",
                value: function() {
                    return this.sid = f.get("sid"), void 0 === this.sid && (this.sid = y(), f.set("sid", this.sid, {
                        expires: 1 / 48,
                        domain: this.currentDomain
                    }), !0)
                }
            }, {
                key: "checkSpanIdsCookie",
                value: function() {
                    return "1" === this.spanids && (this.spanids = void 0, f.remove(m), !0)
                }
            }, {
                key: "propagateCookies",
                value: function() {
                    var e = this.createBidCookie(),
                        t = this.createSidCookie(),
                        n = this.checkSpanIdsCookie();
                    if (t || e || n) {
                        var r = document.getElementById("spanids");
                        null !== r && r.parentNode.removeChild(r);
                        var o = document.createElement("iframe");
                        return o.id = "spanids", o.width = 1, o.height = 1, o.style.display = "none", o.src = this.getSpanIdsURL(this.bid, this.sid, this.currentDomain), document.body.appendChild(o), !0
                    }
                    return !1
                }
            }]), e
        }(),
        x = function() {
            function e(t) {
                c(this, e), this.eventSymbol = t, this.params = {}
            }
            return u(e, [{
                key: "getEventSymbol",
                value: function() {
                    return this.eventSymbol
                }
            }, {
                key: "getParams",
                value: function() {
                    return this.params
                }
            }]), e
        }(),
        w = function(e) {
            function t(e) {
                var n = e.linkIds,
                    r = e.item,
                    o = void 0 === r ? "" : r,
                    i = e.ordinal,
                    a = void 0 === i ? "" : i,
                    u = e.destination,
                    l = e.specialClick,
                    s = void 0 !== l && l;
                c(this, t);
                var f = d(this, (t.__proto__ || p(t)).call(this, "c"));
                return f.params.cl = n, f.params.ci = o, f.params.co = a, f.params.ds = u, s && (f.params.sc = s), f
            }
            return h(t, x), t
        }(),
        E = function(e) {
            function t(e) {
                c(this, t);
                var n = d(this, (t.__proto__ || p(t)).call(this, "i"));
                return n.params.lk = e, n
            }
            return h(t, x), t
        }(),
        _ = function(e) {
            var t = JSON.parse(e.getAttribute("data-cts")),
                n = void 0,
                r = {};
            return null !== t ? (r.linkId = t.linkId, r.item = "", r.ordinal = t.ordinal) : null != (n = s(e, "[data-linkid]", !0)) && null == s(e, "[data-type]", !0) && (r.linkId = n.getAttribute("data-linkid"), r.item = function(e) {
                var t = "";
                return null != s(e, "[data-item]", !0) && (t = e.textContent.trim()), t
            }(e), r.ordinal = function(e, t) {
                var n = void 0,
                    r = 0;
                if (t !== e && void 0 !== (n = s(e, "[data-ordinal]", !0)))
                    for (var o = n.getElementsByTagName("a"), i = 0; i < o.length; i += 1) e === o[i] && (r = i + 1);
                return r
            }(e, n)), r
        },
        T = "4.0.1",
        I = function() {
            function e(t) {
                var n = t.trackURL,
                    r = void 0 === n ? "http://track.dictionary.com/main.gif" : n,
                    o = t.dictionarySpanIdUrl,
                    i = void 0 === o ? "http://spanids.dictionary.com/" : o,
                    u = t.thesaurusSpanIdUrl,
                    l = void 0 === u ? "http://spanids.thesaurus.com" : u,
                    s = t.siteName,
                    p = t.pageName,
                    d = t.ab,
                    h = t.platform,
                    m = t.term,
                    g = void 0 !== m && m;
                c(this, e), this.trackURL = r, this.query = {
                    st: s,
                    pn: p,
                    dc: h,
                    ms: f.get(b),
                    rf: document.referrer,
                    ab: d
                }, g && (this.query.qr = g), this.eventsQueue = new a, this.spanids = new O(i, l), this.spanids.propagateCookies(), this.version = T
            }
            return u(e, [{
                key: "setPreviousURL",
                value: function(e) {
                    this.query.rf = e
                }
            }, {
                key: "setPageName",
                value: function(e) {
                    this.query.pn = e
                }
            }, {
                key: "setTerm",
                value: function(e) {
                    this.query.qr = e
                }
            }, {
                key: "addEvent",
                value: function(e) {
                    return this.eventsQueue.has(e.getEventSymbol()) || this.eventsQueue.set(e.getEventSymbol(), e), this
                }
            }, {
                key: "report",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    f.get("sid") && f.get("bid") ? this.reportHelper(e, t) : setTimeout(this.reportHelper.bind(this), 500, e, t)
                }
            }, {
                key: "reportHelper",
                value: function(e, t) {
                    if (void 0 !== e)
                        if (Array.isArray(e))
                            for (var n = 0; n < e.length; n += 1) this.addEvent(e[n]);
                        else this.addEvent(e);
                    if (0 === this.eventsQueue.size) return !1;
                    var r = i({}, this.query);
                    r.ev = "", this.eventsQueue.forEach(function(e, t) {
                        r.ev += t, r = i(r, e.getParams())
                    }), this.eventsQueue.clear(), r.cb = Math.floor(899999999 * Math.random() + 1e8);
                    var o = new window.Image;
                    if (void 0 !== t) {
                        var a = setTimeout(t, 2e3);
                        o.onload = o.onerror = function() {
                            clearTimeout(a), t()
                        }
                    }
                    return o.src = this.trackURL + "?" + l.stringify(r), !0
                }
            }, {
                key: "addImpressionEvent",
                value: function() {
                    for (var e = [].slice.call(document.querySelectorAll("[data-imp]")), t = {}, n = 0; n < e.length; n += 1) {
                        var r = e[n];
                        if (r.offsetWidth > 0 && r.offsetHeight > 0) {
                            var i = r.getAttribute("data-imp").split("|", 2);
                            void 0 === t[i[0]] && (t[i[0]] = 0), void 0 !== i[1] ? t[i[0]] += parseInt(i[1], 10) : t[i[0]] += 1
                        }
                    }
                    for (var a = "", c = o(t), u = 0; u < c.length; u += 1) {
                        var l = c[u];
                        a += "" + l, a += t[l] > 1 ? "|" + t[l] : "", a += ","
                    }
                    "," === a.slice(-1) && (a = a.slice(0, -1)), this.addEvent(new E(a))
                }
            }, {
                key: "attachClickHandler",
                value: function(e) {
                    var t = this;
                    e.addEventListener("click", function(e) {
                        var n = s(e.target, "A", !0);
                        if (n) {
                            var r, o = s(n, ".cts-enabled", !0),
                                i = s(n, ".cts-disabled", !0),
                                a = n.href,
                                c = n.target;
                            if ("" === a) return !0;
                            if (n.classList.contains("cts-clicked")) return !1;
                            if (null != i && (null == o || i.childNodes.length < o.childNodes.length)) return !0;
                            if (void 0 === (r = _(n)).linkId) return !0;
                            e.preventDefault(), n.classList.add("cts-clicked");
                            var u = {
                                linkIds: r.linkId || "",
                                item: r.item || "",
                                ordinal: r.ordinal || "",
                                destination: a
                            };
                            e.stopPropagation(), t.report(new w(u), function() {
                                "_blank" !== c && (window.location.href = a)
                            })
                        }
                        return !1
                    })
                }
            }]), e
        }(),
        A = function(e) {
            function t() {
                return c(this, t), d(this, (t.__proto__ || p(t)).call(this, "p"))
            }
            return h(t, x), t
        }(),
        k = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                c(this, t);
                var n = d(this, (t.__proto__ || p(t)).call(this, "s"));
                return n.params.rf_qr = e, n
            }
            return h(t, x), t
        }(),
        C = function(e) {
            function t(e) {
                c(this, t);
                var n = d(this, (t.__proto__ || p(t)).call(this, "c"));
                return n.params.cl = e, n.params.sc = 1, n
            }
            return h(t, x), t
        }(),
        S = function(e) {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                c(this, t);
                var r = d(this, (t.__proto__ || p(t)).call(this, "n"));
                return r.params.tg = e, r.params.ar = n ? "y" : "n", r
            }
            return h(t, x), t
        }(),
        j = function(e) {
            function t(e) {
                var n = e.experimentNames,
                    r = e.variants;
                c(this, t);
                var o = d(this, (t.__proto__ || p(t)).call(this, "o"));
                return o.params.en = n, o.params.vr = r, o
            }
            return h(t, x), t
        }();
    t.default = I, t.PageViewEvent = A, t.SearchEvent = k, t.ClickEvent = w, t.SpecialClickEvent = C, t.ClickInnerEvent = S, t.OptimizelyEvent = j
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, , , , function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }
    n.d(t, "a", function() {
        return r
    })
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return m
        });
        var r = n(169),
            o = n.n(r),
            i = n(170),
            a = n.n(i),
            c = n(98),
            u = n.n(c),
            l = n(99),
            s = n.n(l),
            f = n(7),
            p = n(15),
            d = n(3),
            h = n(4),
            m = (e.env.WEBSITE_HOSTNAME || "localhost:".concat(4e3), e.env.GOOGLE_SITE_VERIFICATION_TAG_DCOM, e.env.GOOGLE_SITE_VERIFICATION_TAG_TCOM, e.env.UPGRADE_INSECURE_REQUESTS, "".concat(Object(h.b)(), "://").concat(Object(h.c)()), Object(f.a)(u.a, d.APPLICATION.DCOM), o.a, Object(f.a)(u.a, d.APPLICATION.DCOM), "".concat(Object(h.h)(), "://").concat(Object(h.i)()), Object(f.a)(s.a, d.APPLICATION.TCOM), a.a, Object(f.a)(s.a, d.APPLICATION.TCOM), {
                dcom: {
                    top: p.b,
                    right: p.c,
                    bottom: p.a,
                    mobileTop: p.e,
                    mobileBottom: p.d
                },
                tcom: {
                    top: p.g,
                    right: p.h,
                    bottom: p.f,
                    mobileTop: p.j,
                    mobileBottom: p.i
                }
            })
    }).call(this, n(134))
}, , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";

    function r(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
    }
    n.d(t, "a", function() {
        return r
    })
}, , function(e, t, n) {
    "use strict";
    var r = n(140),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = (r.a || o || Function("return this")()).Symbol,
        a = Object.prototype,
        c = a.hasOwnProperty,
        u = a.toString,
        l = i ? i.toStringTag : void 0;
    var s = function(e) {
            var t = c.call(e, l),
                n = e[l];
            try {
                e[l] = void 0;
                var r = !0
            } catch (e) {}
            var o = u.call(e);
            return r && (t ? e[l] = n : delete e[l]), o
        },
        f = Object.prototype.toString;
    var p = function(e) {
            return f.call(e)
        },
        d = "[object Null]",
        h = "[object Undefined]",
        m = i ? i.toStringTag : void 0;
    var b = function(e) {
        return null == e ? void 0 === e ? h : d : m && m in Object(e) ? s(e) : p(e)
    };
    var g = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }(Object.getPrototypeOf, Object);
    var y = function(e) {
            return null != e && "object" == typeof e
        },
        v = "[object Object]",
        O = Function.prototype,
        x = Object.prototype,
        w = O.toString,
        E = x.hasOwnProperty,
        _ = w.call(Object);
    t.a = function(e) {
        if (!y(e) || b(e) != v) return !1;
        var t = g(e);
        if (null === t) return !0;
        var n = E.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && w.call(n) == _
    }
}, function(e, t, n) {
    var r, o, i, a;
    "undefined" != typeof self && self, e.exports = (r = n(2), o = n(0), i = n(1), a = n(23), function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/dist/", t(t.s = 7)
    }([function(e, t) {
        e.exports = r
    }, function(e, t) {
        e.exports = o
    }, function(e, t) {
        e.exports = i
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return m
        }), n.d(t, "e", function() {
            return b
        }), n.d(t, "c", function() {
            return g
        }), n.d(t, "d", function() {
            return y
        }), n.d(t, "b", function() {
            return v
        });
        var r = n(1),
            o = n.n(r),
            i = n(2),
            a = n.n(i),
            c = n(0),
            u = n.n(c),
            l = n(9),
            s = n(5),
            f = n(10),
            p = n(11),
            d = n(4),
            h = function() {
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
            m = "#3a76c3",
            b = "#f5a623",
            g = "dictionary",
            y = "thesaurus",
            v = "override_query",
            O = u()("div", {
                target: "e1nknobk0"
            })("height:", function(e) {
                return e.isMobile ? "30px" : "40px"
            }, ";overflow:hidden;"),
            x = u()("ul", {
                target: "e1nknobk1"
            })("height:", function(e) {
                return e.isMobile ? "30px" : "40px"
            }, ";margin:0;padding:0;"),
            w = function(e) {
                return o.a.createElement(d.a, {
                    test: e.isMobile
                }, e.children)
            },
            E = function(e) {
                return o.a.createElement(d.a, {
                    test: !e.isMobile
                }, e.children)
            },
            _ = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = {
                        searchInput: n.props.searchedTerm
                    }, n.monitorSearchInputChange = n.monitorSearchInputChange.bind(n), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), h(t, [{
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        e.searchedTerm !== this.props.searchedTerm && this.monitorSearchInputChange(e.searchedTerm)
                    }
                }, {
                    key: "monitorSearchInputChange",
                    value: function(e) {
                        this.setState({
                            searchInput: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("header", null, o.a.createElement("nav", {
                            "aria-label": "Site Navigation"
                        }, o.a.createElement(O, {
                            isMobile: this.props.isMobile
                        }, o.a.createElement(E, {
                            isMobile: this.props.isMobile
                        }, o.a.createElement(s.c, {
                            isOpen: this.state.isOpen,
                            onClick: function(t) {
                                e.setState({
                                    isOpen: !t
                                }), e.props.hamburgerIsOpen(!t)
                            },
                            site: this.props.siteName,
                            iconOptions: this.props.iconOptions,
                            isMobile: this.props.isMobile
                        })), o.a.createElement(x, {
                            isMobile: this.props.isMobile
                        }, o.a.createElement(f.a, {
                            name: "Dictionary.com",
                            linkId: "tqks0v",
                            activeColor: m,
                            isActive: this.props.siteName === g,
                            isMobile: this.props.isMobile,
                            searchInput: this.state.searchInput,
                            headerTabClickCallback: this.props.headerTabClickCallback
                        }), o.a.createElement(f.a, {
                            name: "Thesaurus.com",
                            linkId: "qxnxzj",
                            isActive: this.props.siteName === y,
                            activeColor: b,
                            isMobile: this.props.isMobile,
                            searchInput: this.state.searchInput,
                            headerTabClickCallback: this.props.headerTabClickCallback
                        })), o.a.createElement(E, {
                            isMobile: this.props.isMobile
                        }, o.a.createElement(l.a, {
                            iconOptions: this.props.iconOptions,
                            linkId: "dbvvdc"
                        }))), o.a.createElement(w, {
                            isMobile: this.props.isMobile
                        }, o.a.createElement(s.c, {
                            isOpen: this.state.isOpen,
                            onClick: function(t) {
                                e.setState({
                                    isOpen: !t
                                }), e.props.hamburgerIsOpen(!t)
                            },
                            site: this.props.siteName,
                            iconOptions: this.props.iconOptions,
                            isMobile: this.props.isMobile
                        }))), o.a.createElement(p.a, {
                            query: this.props.searchedTerm,
                            siteName: this.props.siteName,
                            onSearchDictionary: this.props.onSearchDictionary,
                            onSearchThesaurus: this.props.onSearchThesaurus,
                            logoURL: this.props.logoURL,
                            isMobile: this.props.isMobile,
                            isTablet: this.props.isTablet,
                            monitorSearchInputChange: this.monitorSearchInputChange,
                            searchInputName: v
                        }))
                    }
                }]), t
            }(o.a.Component);
        _.propTypes = {
            siteName: a.a.string.isRequired,
            searchedTerm: a.a.string,
            onSearchDictionary: a.a.func.isRequired,
            onSearchThesaurus: a.a.func.isRequired,
            logoURL: a.a.string.isRequired,
            hamburgerIsOpen: a.a.func,
            iconOptions: a.a.objectOf(a.a.string).isRequired,
            isMobile: a.a.bool,
            isTablet: a.a.bool,
            headerTabClickCallback: a.a.func
        }, _.defaultProps = {
            searchedTerm: "",
            hamburgerIsOpen: function() {
                return null
            },
            isMobile: !1,
            isTablet: !1,
            headerTabClickCallback: function() {}
        }, t.f = _
    }, function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.test ? e.children : null
        }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return f
        });
        var r = n(1),
            o = n.n(r),
            i = n(2),
            a = n.n(i),
            c = n(0),
            u = n.n(c),
            l = n(3),
            s = "hamburgerButton-click",
            f = "hamburger-overlay",
            p = [{
                link: "https://www.thesaurus.com",
                name: "Thesaurus.com",
                id: "hamburgerMenuThesauruscom",
                linkId: "c1drjk",
                items: [{
                    id: "hamburgerMenuWotd",
                    link: "https://www.dictionary.com/wordoftheday/",
                    linkId: "1498ik",
                    text: "Word of the Day"
                }, {
                    id: "hamburgerMenuGames",
                    link: "https://www.dictionary.com/fun/crosswordsolver",
                    linkId: "636f6c",
                    text: "Crossword Solver"
                }, {
                    id: "hamburgerMenuBlog",
                    link: "https://www.dictionary.com/e/",
                    linkId: "t6ehki",
                    text: "Everything After Z"
                }]
            }, {
                link: "https://www.dictionary.com",
                name: "Dictionary.com",
                id: "hamburgerMenuDictionarycom",
                linkId: "lxabec"
            }],
            d = [{
                link: "https://www.dictionary.com/",
                name: "Dictionary.com",
                id: "hamburgerMenuDictionarycom",
                linkId: "lxabec"
            }, {
                link: "https://www.thesaurus.com/",
                name: "Thesaurus.com",
                id: "hamburgerMenuThesauruscom",
                linkId: "c1drjk"
            }, {
                link: "https://www.dictionary.com/e/",
                name: "Everything After Z",
                id: "hamburgerMenuEAZ",
                linkId: "t6ehki",
                items: [{
                    id: "hamburgerMenuWOTD",
                    link: "https://www.dictionary.com/wordoftheday/",
                    linkId: "1498ik",
                    text: "Word of the Day"
                }, {
                    id: "hamburgerMenuVideo",
                    link: "https://www.dictionary.com/e/video/",
                    linkId: "t6ehki",
                    text: "Video"
                }, {
                    id: "hamburgerMenuWordFacts",
                    link: "https://www.dictionary.com/e/c/word-facts/",
                    linkId: "t6ehki",
                    text: "Word Facts"
                }, {
                    id: "hamburgerMenuGrammar",
                    link: "https://www.dictionary.com/e/grammar/",
                    linkId: "t6ehki",
                    text: "Grammar"
                }, {
                    id: "hamburgerMenuCrosswordSolver",
                    link: "https://www.dictionary.com/e/crosswordsolver/",
                    linkId: "636f6c",
                    text: "Crossword Solver"
                }, {
                    id: "hamburgerMenuDailyCrossword",
                    link: "https://www.dictionary.com/e/crossword/",
                    linkId: "636f6c",
                    text: "Daily Crossword"
                }]
            }, {
                link: "https://www.dictionary.com/e/all-the-words/",
                name: "All The Words",
                id: "hamburgerMenuATW",
                linkId: "qnez9u",
                items: [{
                    id: "hamburgerMenuSlang",
                    link: "https://www.dictionary.com/e/slang/",
                    linkId: "qnez9u",
                    text: "Slang"
                }, {
                    id: "hamburgerMenuEmoji",
                    link: "https://www.dictionary.com/e/emoji/",
                    linkId: "bhng9k",
                    text: "Emoji"
                }, {
                    id: "hamburgerMenuGenderSexuality",
                    link: "https://www.dictionary.com/e/gender-sexuality/",
                    linkId: "1l40im",
                    text: "Gender & Sexuality"
                }, {
                    id: "hamburgerMenuAcronym",
                    link: "https://www.dictionary.com/e/acronyms/",
                    linkId: "8quzrn",
                    text: "Acronyms"
                }]
            }],
            h = u()("div", {
                target: "e1mpvuks0"
            })("background:", function(e) {
                return e.background
            }, ";display:inline-block;float:left;"),
            m = u()("div", {
                target: "e1mpvuks1"
            })("position:absolute;display:", function(e) {
                return e.isOpen ? "block" : "none"
            }, ";top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,0.6);z-index:4;"),
            b = u()("a", {
                target: "e1mpvuks2"
            })("display:block;color:#f5f5f5;padding:18px 0;text-decoration:none;&:hover{color:", function(e) {
                return e.colors.linkColor
            }, ";text-decoration:none;cursor:pointer;}"),
            g = u()("nav", {
                target: "e1mpvuks3"
            })("position:absolute;top:0;left:", function(e) {
                return e.isMobile ? "calc(-100% + 65px)" : "-300px"
            }, ";width:", function(e) {
                return e.isMobile ? "calc(100% - 65px)" : "300px"
            }, ";height:100%;background-color:", function(e) {
                return e.colors.backgroundColor
            }, ";"),
            y = u()("li", {
                target: "e1mpvuks4"
            })("font-size:16px;font-style:italic;font-weight:bold;line-height:normal;font-family:Arial;border-top:1px solid ", function(e) {
                return e.colors.linkColor
            }, ";font-stretch:normal;letter-spacing:normal;color:#ffffff;-webkit-font-smoothing:antialiased;&:first-child{border-top:0;> a{padding-top:0;}}"),
            v = u()("ul", {
                target: "e1mpvuks5"
            })("list-style-type:none;padding:15px 15px 7px;margin:0;"),
            O = u()("ul", {
                target: "e1mpvuks6"
            })("font-family:Arial;font-size:16px;font-weight:normal;line-height:normal;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#ffffff;list-style-type:none;padding:0 15px 7px;-webkit-font-smoothing:antialiased;> li > a{padding:8px 0 14px;font-style:normal;text-decoration:none;}"),
            x = u()("button", {
                target: "e1mpvuks7"
            })("margin-top:", function(e) {
                return e.isMobile && "8px"
            }, ";margin-right:", function(e) {
                return e.isMobile && "0px"
            }, ";margin-bottom:", function(e) {
                return e.isMobile && "8px"
            }, ";margin-left:", function(e) {
                return !e.isOpen && e.isMobile ? "10px" : "0"
            }, ";font-family:", function(e) {
                return e.iconOptions.fontFamily
            }, ";color:", function(e) {
                return e.isOpen ? "#fff" : "inherit"
            }, ";width:40px;height:40px;cursor:pointer;padding:0;border:none;outline:none;position:relative;display:inline-block;-webkit-font-smoothing:antialiased;background-color:", function(e) {
                return e.isOpen ? e.colors.backgroundColor : "#fff"
            }, ";font-size:24px;line-height:1;z-index:5;&::before{content:'", function(e) {
                return e.isOpen ? e.iconOptions.openIcon : e.iconOptions.closeIcon
            }, "';}"),
            w = function(e) {
                var t = e.onClick,
                    n = e.site,
                    r = e.iconOptions,
                    i = e.isOpen,
                    a = void 0 !== i && i,
                    c = e.isMobile,
                    u = {
                        backgroundColor: n === l.d ? l.e : l.a,
                        linkColor: n === l.d ? "#fccd6e" : "#66cef6"
                    };
                return o.a.createElement(h, {
                    background: u.backgroundColor
                }, o.a.createElement(m, {
                    className: f,
                    onClick: function() {
                        return t(a)
                    },
                    isOpen: a
                }), o.a.createElement(g, {
                    colors: u,
                    isMobile: c,
                    "aria-label": "Hamburger Menu"
                }, o.a.createElement(v, null, function(e) {
                    return e === l.d ? p : d
                }(n).map(function(e) {
                    return o.a.createElement(y, {
                        colors: u,
                        key: e.name
                    }, o.a.createElement(b, {
                        id: e.id,
                        href: e.link,
                        "data-linkid": e.linkId,
                        colors: u
                    }, e.name), e.items ? o.a.createElement(O, null, e.items.map(function(e) {
                        return o.a.createElement("li", {
                            key: e.text
                        }, o.a.createElement(b, {
                            key: e.text,
                            id: e.id,
                            href: e.link,
                            "data-linkid": e.linkId,
                            colors: u
                        }, e.text))
                    })) : null)
                }))), o.a.createElement(x, {
                    "aria-label": "Toggle Menu",
                    iconOptions: r,
                    isOpen: a,
                    id: s,
                    colors: u,
                    onClick: function() {
                        return t(a)
                    },
                    isMobile: c
                }))
            };
        w.propTypes = {
            onClick: a.a.func.isRequired,
            site: a.a.string.isRequired,
            isOpen: a.a.bool,
            iconOptions: a.a.shape({
                fontFamily: a.a.string.isRequired,
                openIcon: a.a.string.isRequired,
                closeIcon: a.a.string.isRequired
            }).isRequired,
            isMobile: a.a.bool
        }, w.defaultProps = {
            isOpen: !1,
            isMobile: !1
        }, t.c = w
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n(0),
            o = n.n(r),
            i = n(15),
            a = (n.n(i), Object(i.css)("font-family:'dictionary-fonticon';speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;"));
        o()("span", {
            target: "e19wc3mh0"
        })(a, ";")
    }, function(e, t, n) {
        e.exports = n(8)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(3),
            o = n(5);
        n.d(t, "HAMBURGER_ICON_ID", function() {
            return o.a
        }), n.d(t, "HAMBURGER_OVERLAY_CLASSNAME", function() {
            return o.b
        }), n.d(t, "SITE_NAME_DICTIONARY", function() {
            return r.c
        }), n.d(t, "SITE_NAME_THESAURUS", function() {
            return r.d
        }), n.d(t, "SEARCH_INPUT_NAME", function() {
            return r.b
        }), t.default = r.f
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            o = n.n(r),
            i = n(2),
            a = n.n(i),
            c = n(0),
            u = n.n(c),
            l = u()("a", {
                target: "ebzzift0"
            })("float:right;padding:1px 14px 1px 22px;margin:8px 0;border-right:1px solid #e2e2e2;line-height:22px;color:#555;font-size:11px;text-decoration:none;font-weight:400;font-family:Open Sans,sans-serif;transition:all 0.15s ease-in-out;& > span{float:left;width:22px;height:22px;margin-right:8px;font-size:22px;text-decoration:none;font-family:", function(e) {
                return e.fontFamily
            }, ";}&:hover{color:", function(e) {
                return e.hoverColor
            }, ";}"),
            s = u()("span", {
                target: "ebzzift1"
            })("&::before{content:'", function(e) {
                return e.glyph
            }, "';}"),
            f = u()("span", {
                target: "ebzzift2"
            })("&::before{content:'", function(e) {
                return e.glyph
            }, "';}"),
            p = function(e) {
                var t = e.linkId,
                    n = e.hoverColor,
                    r = e.iconOptions,
                    i = void 0 === r ? {} : r;
                return o.a.createElement(l, {
                    href: "https://www.dictionary.com/e/apps/",
                    hoverColor: n,
                    fontFamily: i.fontFamily,
                    "data-linkid": t
                }, o.a.createElement(s, {
                    glyph: i.androidGlyph
                }), o.a.createElement(f, {
                    glyph: i.appleGlyph
                }), "Try Our Apps")
            };
        p.propTypes = {
            linkId: a.a.string,
            hoverColor: a.a.string,
            iconOptions: a.a.objectOf(a.a.string).isRequired
        }, p.defaultProps = {
            linkId: "",
            hoverColor: "#6cb746"
        }, t.a = p
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            o = n.n(r),
            i = n(2),
            a = n.n(i),
            c = n(0),
            u = n.n(c),
            l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            f = u()("a", {
                target: "ejn7swr0"
            })("cursor:pointer;", function(e) {
                return Object(c.css)("display:inline-block;padding:12px 26px;font:", e.isMobile ? "14px" : "16px", " Helvetica,sans-serif;line-height:", e.isMobile ? "10px" : "18px", ";font-style:italic;font-weight:bold;text-decoration:none;color:#666;", !e.isMobile && "\n    @media (max-width: 400px) {\n      padding: 11px 13px;\n      font-size: 14px;\n    }\n    @media (max-width: 318px) {\n      font-size: 12px;\n    }\n  ", ";")
            }, ";", function(e) {
                return e.isActive ? "color: #fff;" : ""
            }, ";"),
            p = function(e) {
                return Object(c.css)("z-index:3;border-right:none;float:left;list-style-type:none;background-color:#f5f5f5;width:", e.isMobile ? "50%" : "", ";text-align:center;&:last-child{border-right:", e.isMobile ? "" : "1px solid #aaa", ";}")
            },
            d = function(e) {
                var t = e.name,
                    n = e.isActive,
                    r = e.linkId,
                    i = e.id,
                    a = e.activeColor,
                    c = e.isMobile,
                    d = e.headerTabClickCallback,
                    h = e.searchInput,
                    m = "https://www." + t,
                    b = u()("li", {
                        target: "ejn7swr1"
                    })(p, " background-color:", a, ";}"),
                    g = u()("li", {
                        target: "ejn7swr2"
                    })(p, " width:", function(e) {
                        return e.isMobile ? "50%" : ""
                    }, ";&:hover{background-color:#e2e2e2;}}"),
                    y = {},
                    v = void 0;
                return c ? v = f.withComponent("span", {
                    target: "ejn7swr3"
                }) : (y["data-linkid"] = r, v = f), d instanceof Function ? y.onClick = function(e) {
                    var t = s({}, e, {
                        target: s({}, e.target, {
                            href: e.target.getAttribute("href")
                        })
                    });
                    d({
                        event: t,
                        searchInput: h,
                        isMobile: c
                    })
                } : console.warn("headerTabClickCallback must be a function but a " + (void 0 === d ? "undefined" : l(d)) + " was provided."), n ? o.a.createElement(b, {
                    isMobile: c
                }, o.a.createElement(v, s({
                    href: m,
                    id: i,
                    isMobile: c
                }, y, {
                    role: "link",
                    isActive: !0
                }), t)) : o.a.createElement(g, {
                    isMobile: c
                }, o.a.createElement(v, s({
                    href: m,
                    id: i,
                    isMobile: c
                }, y), t))
            };
        d.propTypes = {
            name: a.a.string,
            isActive: a.a.bool,
            linkId: a.a.string,
            id: a.a.string,
            activeColor: a.a.string,
            isMobile: a.a.bool,
            headerTabClickCallback: a.a.func,
            searchInput: a.a.string
        }, d.defaultProps = {
            name: "",
            isActive: !1,
            linkId: "",
            id: "",
            activeColor: "#3a76c3",
            isMobile: !1,
            headerTabClickCallback: function() {},
            searchInput: ""
        }, t.a = d
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            o = n.n(r),
            i = n(2),
            a = n.n(i),
            c = n(0),
            u = n.n(c),
            l = n(12),
            s = n(3),
            f = n(4),
            p = function() {
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
            d = u()("img", {
                target: "e1nfx3j00"
            })("margin:0 20px 0 0;width:176px;height:40px;"),
            h = u()("div", {
                target: "e1nfx3j01"
            })("background:", function(e) {
                return e.siteName === s.d ? s.e : s.a
            }, ";display:flex;justify-content:left;left:100px;"),
            m = u()("div", {
                target: "e1nfx3j02"
            })("padding:", function(e) {
                return e.isMobile ? "8px 10px 8px 0px" : "15px 15px 18px"
            }, ";height:auto;display:flex;flex-wrap:wrap;width:", function(e) {
                return e.isMobile && "100%"
            }, ";", function(e) {
                return !e.isMobile && "\n    @media (min-width: 1200px) {\n        width: 1170px;\n        margin-right: auto;\n        margin-left: auto;\n    }\n    @media (min-width: 992px) {\n      width: 970px;\n      margin-right: auto;\n      margin-left: auto;\n    }"
            }, ";"),
            b = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), p(t, [{
                    key: "siteAlt",
                    value: function(e) {
                        return e === s.d ? "Thesaurus.com" : "Dictionary.com"
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = "https://www." + this.props.siteName + ".com";
                        return o.a.createElement(h, {
                            siteName: this.props.siteName
                        }, o.a.createElement(m, {
                            isMobile: this.props.isMobile
                        }, o.a.createElement(f.a, {
                            test: !this.props.isMobile
                        }, o.a.createElement("a", {
                            href: e,
                            "data-linkid": "yg487x"
                        }, o.a.createElement(d, {
                            src: this.props.logoURL,
                            alt: this.siteAlt(this.props.siteName)
                        }))), o.a.createElement(l.a, {
                            initialQuery: this.props.query,
                            onSearchDictionary: this.props.onSearchDictionary,
                            onSearchThesaurus: this.props.onSearchThesaurus,
                            origin: this.props.siteName,
                            isMobile: this.props.isMobile,
                            isTablet: this.props.isTablet,
                            monitorSearchInputChange: this.props.monitorSearchInputChange,
                            searchInputName: this.props.searchInputName
                        })))
                    }
                }]), t
            }(o.a.Component);
        b.propTypes = {
            siteName: a.a.string,
            query: a.a.string,
            logoURL: a.a.string,
            onSearchDictionary: a.a.func.isRequired,
            onSearchThesaurus: a.a.func.isRequired,
            isMobile: a.a.bool,
            isTablet: a.a.bool,
            monitorSearchInputChange: a.a.func.isRequired,
            searchInputName: a.a.string
        }, b.defaultProps = {
            query: "",
            logoURL: "",
            siteName: s.c,
            isMobile: !1,
            isTablet: !1,
            searchInputName: s.b
        }, t.a = b
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            switch (e) {
                case _:
                    return I;
                case T:
                    return A;
                default:
                    return I
            }
        }
        var o = n(1),
            i = n.n(o),
            a = n(2),
            c = n.n(a),
            u = n(0),
            l = n.n(u),
            s = n(13),
            f = n(16),
            p = n(17),
            d = n(18),
            h = n(19),
            m = n(4),
            b = n(20),
            g = n(3),
            y = function() {
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
            v = l()("li", {
                target: "e18h4a050"
            })("border-top:1px solid #e2e2e2;padding:10px 8px;&:hover{background:#f5f5f5;}"),
            O = l()("div", {
                target: "e18h4a051"
            })("padding:", function(e) {
                return e.isMobile ? "5px 2px" : "8px 2px"
            }, ";background-color:", function(e) {
                return e.isMobile ? "#fff" : "#f8f8f8"
            }, ";display:inline-block;float:left;box-sizing:border-box;position:relative;width:", function(e) {
                return e.isMobile && "100%"
            }, ";"),
            x = l()("button", {
                target: "e18h4a052"
            })(p.a, " color:", function(e) {
                return e.searchColor
            }, ";background:", function(e) {
                return e.isMobile && "none"
            }, ";&::before{font-size:", function(e) {
                return e.isMobile && "20px"
            }, ";position:", function(e) {
                return e.isMobile && "relative"
            }, ";top:", function(e) {
                return e.isMobile && "-2px"
            }, ";}"),
            w = l()("form", {
                target: "e18h4a053"
            })("display:", function(e) {
                return e.isMobile ? "flex" : "inline-block"
            }, ";"),
            E = l()("input", {
                target: "e18h4a054"
            })(f.a, " width:", function(e) {
                return e.isMobile && "100%"
            }, ";border:", function(e) {
                return e.isMobile && "none"
            }, ";font-size:", function(e) {
                return e.isMobile && "16px"
            }, ";&:hover,&:focus{border-color:", function(e) {
                return e.searchColor
            }, ";outline:0;box-shadow:", function(e) {
                return e.inputShadowColor
            }, ";}", function(e) {
                return !e.isMobile && "\n      @media (min-width: 1200px) {\n        width: 422px;\n      }\n  "
            }, ";"),
            _ = "thesaurus",
            T = "dictionary",
            I = "synonyms",
            A = "definitions",
            k = [{
                filter: I,
                keyLink: "filterLink1",
                keyList: "filterList1",
                linkid: "205vpa"
            }, {
                filter: A,
                keyLink: "filterLink2",
                keyList: "filterList2",
                linkid: "59wn52"
            }],
            C = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = n.getInitialState(e), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), y(t, [{
                    key: "getInitialState",
                    value: function(e) {
                        var t = {
                            isFilterOpened: !1,
                            filter: r(e.origin),
                            query: e.initialQuery
                        };
                        switch (e.origin) {
                            case _:
                                t.inputShadowColor = "inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(191,99,78,0.6);", t.searchColor = "#f5a623";
                                break;
                            case T:
                                t.inputShadowColor = "inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);", t.searchColor = "#55acee";
                                break;
                            default:
                                t.inputShadowColor = "inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);", t.searchColor = "#55acee"
                        }
                        return t
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        e.origin !== this.props.origin ? this.setState(this.getInitialState(e)) : e.initialQuery !== this.props.initialQuery && this.setState({
                            query: e.initialQuery
                        })
                    }
                }, {
                    key: "handleFilterNavClick",
                    value: function() {
                        this.setState(function(e) {
                            return {
                                isFilterOpened: !e.isFilterOpened
                            }
                        })
                    }
                }, {
                    key: "handleFilterItemClick",
                    value: function(e) {
                        this.setState({
                            isFilterOpened: !1,
                            filter: e
                        }), this.handleFilterChanged(e, this.state.query)
                    }
                }, {
                    key: "handleSubmit",
                    value: function(e, t, n) {
                        e && e.preventDefault && e.preventDefault(), e && e.stopPropagation && e.stopPropagation(), e && e.target && (t || n) && e.target.focus();
                        var o = this.state,
                            i = o.filter,
                            a = o.query;
                        if (a) this.invokeSearch(i, a);
                        else {
                            var c = r(this.props.origin);
                            this.props.monitorSearchInputChange("search"), this.setState({
                                filter: c,
                                query: "search"
                            }), this.invokeSearch(c, "search")
                        }
                    }
                }, {
                    key: "handleFilterChanged",
                    value: function(e, t) {
                        t && this.invokeSearch(e, t)
                    }
                }, {
                    key: "invokeSearch",
                    value: function(e, t) {
                        e === A ? this.props.onSearchDictionary(t.toLowerCase()) : e === I && this.props.onSearchThesaurus(t.toLowerCase()), this.state.isFilterOpened && this.setState({
                            isFilterOpened: !1
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state,
                            n = t.isFilterOpened,
                            r = t.filter;
                        return i.a.createElement(O, {
                            isMobile: this.props.isMobile
                        }, i.a.createElement(w, {
                            onSubmit: function(t) {
                                return e.handleSubmit(t, e.props.isMobile, e.props.isTablet)
                            },
                            isMobile: this.props.isMobile,
                            action: "#"
                        }, i.a.createElement(m.a, {
                            test: !this.props.isMobile
                        }, i.a.createElement(s.a, {
                            isOpened: n,
                            filterName: r,
                            handleClick: function(t) {
                                return e.handleFilterNavClick(t)
                            }
                        })), i.a.createElement(b.a, {
                            htmlFor: "q"
                        }, "Search"), i.a.createElement(E, {
                            title: "Search",
                            type: "search",
                            autoComplete: "off",
                            autoCapitalize: "off",
                            autoCorrect: "off",
                            name: this.props.searchInputName,
                            className: "search-input",
                            id: "searchbar_input",
                            value: this.state.query,
                            onChange: function(t) {
                                e.props.monitorSearchInputChange(t.target.value), e.setState({
                                    query: t.target.value
                                })
                            },
                            searchColor: this.state.searchColor,
                            inputShadowColor: this.state.inputShadowColor,
                            isMobile: this.props.isMobile
                        }), i.a.createElement(x, {
                            "aria-label": "Search",
                            searchColor: this.state.searchColor,
                            type: "submit",
                            id: "search-submit",
                            onClick: function(t) {
                                return e.handleSubmit(t, e.props.isMobile, e.props.isTablet)
                            },
                            isMobile: this.props.isMobile
                        }), i.a.createElement(d.a, {
                            style: {
                                maxHeight: n ? 100 : 0
                            }
                        }, k.filter(function(e) {
                            return r !== e.filter
                        }).map(function(t) {
                            return i.a.createElement(v, {
                                key: t.keyList,
                                id: t.filter + "-filter"
                            }, i.a.createElement(h.a, {
                                "data-linkid": t.linkid,
                                key: t.keyLink,
                                onClick: function(n) {
                                    return e.handleFilterItemClick(t.filter, n)
                                }
                            }, t.filter))
                        }))))
                    }
                }]), t
            }(o.Component);
        t.a = C, C.propTypes = {
            onSearchDictionary: c.a.func,
            onSearchThesaurus: c.a.func,
            initialQuery: c.a.string,
            origin: c.a.string,
            isMobile: c.a.bool,
            isTablet: c.a.bool,
            monitorSearchInputChange: c.a.func,
            searchInputName: c.a.string
        }, C.defaultProps = {
            onSearchDictionary: function() {},
            onSearchThesaurus: function() {},
            initialQuery: "",
            origin: _,
            isMobile: !1,
            isTablet: !1,
            monitorSearchInputChange: function() {},
            searchInputName: g.b
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            o = n.n(r),
            i = n(0),
            a = n.n(i),
            c = n(2),
            u = n.n(c),
            l = n(14),
            s = a()("div", {
                target: "ev3lshj0"
            })("float:left;cursor:pointer;"),
            f = a()("span", {
                target: "ev3lshj1"
            })("float:right;min-width:92px;display:block;padding-left:8px;color:#555;font:14px Verdana;line-height:30px;"),
            p = function(e) {
                var t = e.handleClick,
                    n = e.isOpened,
                    r = void 0 !== n && n,
                    i = e.filterName,
                    a = void 0 === i ? "synonyms" : i;
                return o.a.createElement(s, {
                    onClick: t
                }, o.a.createElement(l.a, {
                    opened: r,
                    id: "search-dropdown-icon"
                }), o.a.createElement(f, {
                    id: "active-" + a
                }, a))
            };
        p.propTypes = {
            handleClick: u.a.func.isRequired,
            isOpened: u.a.bool,
            filterName: u.a.string
        }, p.defaultProps = {
            isOpened: !1,
            filterName: "synonyms"
        }, t.a = p
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n.n(r),
            i = n(6);
        t.a = o()("span", {
            target: "e2cjyp00"
        })(function(e) {
            return Object(r.css)(i.a, ";", e.opened ? "transform: rotate(180deg)" : "", ";float:right;padding:1px 3px;color:#555;font-size:25px;line-height:28px;&:after{content:'\\e613';}")
        }, ";")
    }, function(e, t) {
        e.exports = a
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var r = n(0),
            o = n.n(r),
            i = Object(r.css)("float:left;display:block;width:292px;height:30px;padding:0 8px;margin-right:1px;border:1px solid #e2e2e2;min-height:1px;line-height:18px;font-size:18px;color:#666;transition:border-color,box-shadow 0.2s,0.2s ease-in-out,ease-in-out;");
        o()("input", {
            target: "e1qsy2jz0"
        })(i, ";")
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n(0),
            o = n.n(r),
            i = n(6),
            a = Object(r.css)(i.a, ";width:50px;height:30px;cursor:pointer;padding:0;border:0;outline:0;background-color:transparent;float:left;display:inline-block;padding:2px 8px;background:#f8f8f8;color:#3f729b;font-size:24px;&:before{content:'\\e614';}");
        o()("button", {
            target: "e1iprvb80"
        })(a, ";")
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n.n(r);
        t.a = o()("ul", {
            target: "ep2tsc50"
        })("margin:38px 0 0 -2px;width:100%;padding:0;background:#fff;z-index:2;cursor:pointer;list-style-type:none;box-shadow:0 2px 3px rgba(50,50,50,0.4);position:absolute;max-height:0px;transition:max-height 100ms ease;overflow:hidden;")
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n.n(r);
        t.a = o()("a", {
            target: "ebjrtl60"
        })("display:block;text-decoration:none;color:#555;font:14px Verdana,sans-serif;")
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n.n(r),
            i = o()("label", {
                target: "e1t7bu8t0"
            })("border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;");
        t.a = i
    }]))
}, function(e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, a, c = function(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), u = 1; u < arguments.length; u++) {
            for (var l in n = Object(arguments[u])) o.call(n, l) && (c[l] = n[l]);
            if (r) {
                a = r(n);
                for (var s = 0; s < a.length; s++) i.call(n, a[s]) && (c[a[s]] = n[a[s]])
            }
        }
        return c
    }
}, , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, , , , , , function(e, t, n) {
    "use strict";
    e.exports = n(186)
}, function(e, t, n) {
    var r = n(188);
    e.exports = d, e.exports.parse = i, e.exports.compile = function(e, t) {
        return c(i(e, t))
    }, e.exports.tokensToFunction = c, e.exports.tokensToRegExp = p;
    var o = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

    function i(e, t) {
        for (var n, r = [], i = 0, a = 0, c = "", s = t && t.delimiter || "/"; null != (n = o.exec(e));) {
            var f = n[0],
                p = n[1],
                d = n.index;
            if (c += e.slice(a, d), a = d + f.length, p) c += p[1];
            else {
                var h = e[a],
                    m = n[2],
                    b = n[3],
                    g = n[4],
                    y = n[5],
                    v = n[6],
                    O = n[7];
                c && (r.push(c), c = "");
                var x = null != m && null != h && h !== m,
                    w = "+" === v || "*" === v,
                    E = "?" === v || "*" === v,
                    _ = n[2] || s,
                    T = g || y;
                r.push({
                    name: b || i++,
                    prefix: m || "",
                    delimiter: _,
                    optional: E,
                    repeat: w,
                    partial: x,
                    asterisk: !!O,
                    pattern: T ? l(T) : O ? ".*" : "[^" + u(_) + "]+?"
                })
            }
        }
        return a < e.length && (c += e.substr(a)), c && r.push(c), r
    }

    function a(e) {
        return encodeURI(e).replace(/[\/?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function c(e) {
        for (var t = new Array(e.length), n = 0; n < e.length; n++) "object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
        return function(n, o) {
            for (var i = "", c = n || {}, u = (o || {}).pretty ? a : encodeURIComponent, l = 0; l < e.length; l++) {
                var s = e[l];
                if ("string" != typeof s) {
                    var f, p = c[s.name];
                    if (null == p) {
                        if (s.optional) {
                            s.partial && (i += s.prefix);
                            continue
                        }
                        throw new TypeError('Expected "' + s.name + '" to be defined')
                    }
                    if (r(p)) {
                        if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(p) + "`");
                        if (0 === p.length) {
                            if (s.optional) continue;
                            throw new TypeError('Expected "' + s.name + '" to not be empty')
                        }
                        for (var d = 0; d < p.length; d++) {
                            if (f = u(p[d]), !t[l].test(f)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but received `' + JSON.stringify(f) + "`");
                            i += (0 === d ? s.prefix : s.delimiter) + f
                        }
                    } else {
                        if (f = s.asterisk ? encodeURI(p).replace(/[?#]/g, function(e) {
                                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                            }) : u(p), !t[l].test(f)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + f + '"');
                        i += s.prefix + f
                    }
                } else i += s
            }
            return i
        }
    }

    function u(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }

    function l(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1")
    }

    function s(e, t) {
        return e.keys = t, e
    }

    function f(e) {
        return e.sensitive ? "" : "i"
    }

    function p(e, t, n) {
        r(t) || (n = t || n, t = []);
        for (var o = (n = n || {}).strict, i = !1 !== n.end, a = "", c = 0; c < e.length; c++) {
            var l = e[c];
            if ("string" == typeof l) a += u(l);
            else {
                var p = u(l.prefix),
                    d = "(?:" + l.pattern + ")";
                t.push(l), l.repeat && (d += "(?:" + p + d + ")*"), a += d = l.optional ? l.partial ? p + "(" + d + ")?" : "(?:" + p + "(" + d + "))?" : p + "(" + d + ")"
            }
        }
        var h = u(n.delimiter || "/"),
            m = a.slice(-h.length) === h;
        return o || (a = (m ? a.slice(0, -h.length) : a) + "(?:" + h + "(?=$))?"), a += i ? "$" : o && m ? "" : "(?=" + h + "|$)", s(new RegExp("^" + a, f(n)), t)
    }

    function d(e, t, n) {
        return r(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? function(e, t) {
            var n = e.source.match(/\((?!\?)/g);
            if (n)
                for (var r = 0; r < n.length; r++) t.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null
                });
            return s(e, t)
        }(e, t) : r(e) ? function(e, t, n) {
            for (var r = [], o = 0; o < e.length; o++) r.push(d(e[o], t, n).source);
            return s(new RegExp("(?:" + r.join("|") + ")", f(n)), t)
        }(e, t, n) : function(e, t, n) {
            return p(i(e, n), t, n)
        }(e, t, n)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    n.d(t, "a", function() {
        return r
    })
}, function(e, t, n) {
    "use strict";
    (function(e, r) {
        var o, i = n(139);
        o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
        var a = Object(i.a)(o);
        t.a = a
    }).call(this, n(33), n(187)(e))
}, function(e, t, n) {
    e.exports = n.p + "dictionary-font-c864a1ca3bc4a1c7aef16dbbf189ccc1.woff"
}, function(e, t, n) {
    e.exports = n.p + "dcom_favicon-1bff2f1b49c077ed504e55c3649f2a4b.png"
}, function(e, t, n) {
    e.exports = n.p + "tcom_favicon-54545f5303fccb956af394ac10f1655d.png"
}, , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    function n(e, t) {
        return t.querySelector(e)
    }(t = e.exports = function(e, t) {
        return n(e, t = t || document)
    }).all = function(e, t) {
        return (t = t || document).querySelectorAll(e)
    }, t.engine = function(e) {
        if (!e.one) throw new Error(".one callback required");
        if (!e.all) throw new Error(".all callback required");
        return n = e.one, t.all = e.all, t
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = a(n(265)),
        o = a(n(267)),
        i = "function" == typeof o.default && "symbol" == typeof r.default ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
        };

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = "function" == typeof o.default && "symbol" === i(r.default) ? function(e) {
        return void 0 === e ? "undefined" : i(e)
    } : function(e) {
        return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
    }
}, , , , , , , , , , , function(e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function c(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var u, l = [],
        s = !1,
        f = -1;

    function p() {
        s && u && (s = !1, u.length ? l = u.concat(l) : f = -1, l.length && d())
    }

    function d() {
        if (!s) {
            var e = c(p);
            s = !0;
            for (var t = l.length; t;) {
                for (u = l, l = []; ++f < t;) u && u[f].run();
                f = -1, t = l.length
            }
            u = null, s = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new h(e, t)), 1 !== l.length || s || c(d)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, , , , , function(e, t, n) {
    "use strict";

    function r(e) {
        var t, n = e.Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }
    n.d(t, "a", function() {
        return r
    })
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }).call(this, n(33))
}, , , , , , , , , function(e, t, n) {
    e.exports = function() {
        "use strict";
        return function(e) {
            function t(t) {
                if (t) try {
                    e(t + "}")
                } catch (e) {}
            }
            return function(n, r, o, i, a, c, u, l, s, f) {
                switch (n) {
                    case 1:
                        if (0 === s && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                        break;
                    case 2:
                        if (0 === l) return r + "/*|*/";
                        break;
                    case 3:
                        switch (l) {
                            case 102:
                            case 112:
                                return e(o[0] + r), "";
                            default:
                                return r + (0 === f ? "/*|*/" : "")
                        }
                    case -2:
                        r.split("/*|*/}").forEach(t)
                }
            }
        }
    }()
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        o = n.n(r),
        i = n(151);
    var a, c = "__EMOTION_THEMING__",
        u = ((a = {})[c] = o.a.object, a);
    var l = i.a,
        s = function(e) {
            return "theme" !== e && "innerRef" !== e
        },
        f = function() {
            return !0
        },
        p = function(e, t) {
            for (var n = 2, r = arguments.length; n < r; n++) {
                var o = arguments[n],
                    i = void 0;
                for (i in o) e(i) && (t[i] = o[i])
            }
            return t
        };
    t.a = function(e, t) {
        var n = function(r, o) {
            var i, a, d, h;
            void 0 !== o && (i = o.e, a = o.label, d = o.target, h = r.__emotion_forwardProp && o.shouldForwardProp ? function(e) {
                return r.__emotion_forwardProp(e) && o.shouldForwardProp(e)
            } : o.shouldForwardProp);
            var m = r.__emotion_real === r,
                b = void 0 === i && m && r.__emotion_base || r;
            return "function" != typeof h && (h = "string" == typeof b && b.charAt(0) === b.charAt(0).toLowerCase() ? l : s),
                function() {
                    var l = arguments,
                        s = m && void 0 !== r.__emotion_styles ? r.__emotion_styles.slice(0) : [];
                    if (void 0 !== a && s.push("label:" + a + ";"), void 0 === i)
                        if (null == l[0] || void 0 === l[0].raw) s.push.apply(s, l);
                        else {
                            s.push(l[0][0]);
                            for (var g = l.length, y = 1; y < g; y++) s.push(l[y], l[0][y])
                        } var v = function(n) {
                        var r, o;

                        function a() {
                            return n.apply(this, arguments) || this
                        }
                        o = n, (r = a).prototype = Object.create(o.prototype), r.prototype.constructor = r, r.__proto__ = o;
                        var u = a.prototype;
                        return u.componentWillMount = function() {
                            void 0 !== this.context[c] && (this.unsubscribe = this.context[c].subscribe(function(e) {
                                this.setState({
                                    theme: e
                                })
                            }.bind(this)))
                        }, u.componentWillUnmount = function() {
                            void 0 !== this.unsubscribe && this.context[c].unsubscribe(this.unsubscribe)
                        }, u.render = function() {
                            var n = this.props,
                                r = this.state;
                            this.mergedProps = p(f, {}, n, {
                                theme: null !== r && r.theme || n.theme || {}
                            });
                            var o = "",
                                a = [];
                            return n.className && (o += void 0 === i ? e.getRegisteredStyles(a, n.className) : n.className + " "), o += void 0 === i ? e.css.apply(this, s.concat(a)) : i, void 0 !== d && (o += " " + d), t.createElement(b, p(h, {}, n, {
                                className: o,
                                ref: n.innerRef
                            }))
                        }, a
                    }(t.Component);
                    return v.displayName = void 0 !== a ? a : "Styled(" + ("string" == typeof b ? b : b.displayName || b.name || "Component") + ")", void 0 !== r.defaultProps && (v.defaultProps = r.defaultProps), v.contextTypes = u, v.__emotion_styles = s, v.__emotion_base = b, v.__emotion_real = v, v.__emotion_forwardProp = h, Object.defineProperty(v, "toString", {
                        value: function() {
                            return "." + d
                        }
                    }), v.withComponent = function(e, t) {
                        return n(e, void 0 !== t ? p(f, {}, o, t) : o).apply(void 0, s)
                    }, v
                }
        };
        return n
    }
}, , function(e, t, n) {
    e.exports = n.p + "dictionary_logo_white-90c1e2eaf84c6abcb80d08d6eb0b6c60.svg"
}, function(e, t, n) {
    e.exports = n.p + "Thesaurus_Logo_white-e52239ea6d6b353291a395b18c0e11e9.svg"
}, function(e, t, n) {
    var r, o, i;
    "undefined" != typeof self && self, e.exports = (r = n(0), o = n(2), i = n(1), function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/dist/", t(t.s = 3)
    }([function(e, t) {
        e.exports = r
    }, function(e, t) {
        e.exports = o
    }, function(e, t, n) {
        "use strict";
        n.d(t, "l", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "f", function() {
            return i
        }), n.d(t, "j", function() {
            return a
        }), n.d(t, "i", function() {
            return c
        }), n.d(t, "g", function() {
            return u
        }), n.d(t, "k", function() {
            return l
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "h", function() {
            return f
        }), n.d(t, "a", function() {
            return p
        }), n.d(t, "c", function() {
            return d
        }), n.d(t, "d", function() {
            return h
        });
        var r = [{
                name: "a",
                id: "azFooterA"
            }, {
                name: "b",
                id: "azFooterB"
            }, {
                name: "c",
                id: "azFooterC"
            }, {
                name: "d",
                id: "azFooterD"
            }, {
                name: "e",
                id: "azFooterE"
            }, {
                name: "f",
                id: "azFooterF"
            }, {
                name: "g",
                id: "azFooterG"
            }, {
                name: "h",
                id: "azFooterH"
            }, {
                name: "i",
                id: "azFooterI"
            }, {
                name: "j",
                id: "azFooterJ"
            }, {
                name: "k",
                id: "azFooterK"
            }, {
                name: "l",
                id: "azFooterL"
            }, {
                name: "m",
                id: "azFooterM"
            }, {
                name: "n",
                id: "azFooterN"
            }, {
                name: "o",
                id: "azFooterO"
            }, {
                name: "p",
                id: "azFooterP"
            }, {
                name: "q",
                id: "azFooterQ"
            }, {
                name: "r",
                id: "azFooterR"
            }, {
                name: "s",
                id: "azFooterS"
            }, {
                name: "t",
                id: "azFooterT"
            }, {
                name: "u",
                id: "azFooterU"
            }, {
                name: "v",
                id: "azFooterV"
            }, {
                name: "w",
                id: "azFooterW"
            }, {
                name: "x",
                id: "azFooterX"
            }, {
                name: "y",
                id: "azFooterY"
            }, {
                name: "z",
                id: "azFooterZ"
            }],
            o = [{
                name: "Slang",
                id: "atwFooterSlang"
            }, {
                name: "Emoji",
                id: "atwFooterEmoji"
            }, {
                name: "Acronyms",
                id: "atwFooterAcronyms"
            }, {
                name: "Pop Culture",
                id: "atwFooterPopCulture"
            }, {
                name: "More",
                id: "atwFooterMore"
            }],
            i = "About",
            a = "Cookies, Terms, & Privacy",
            c = "Contact Us",
            u = "Careers",
            l = "769px",
            s = "https://www.dictionary.com/e",
            f = "page-footer",
            p = "footer-about-list",
            d = "footer-az-list",
            h = "footer-category-list"
    }, function(e, t, n) {
        e.exports = n(4)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "CLASSNAMES", function() {
            return f
        });
        var r = n(0),
            o = n.n(r),
            i = n(5),
            a = n.n(i),
            c = n(1),
            u = n.n(c),
            l = n(2),
            s = n(6),
            f = {
                FOOTER_CLASSNAME: l.h,
                ABOUT_LIST_CLASSNAME: l.a,
                AZ_LIST_CLASSNAME: l.c,
                CATEGORY_LIST_CLASSNAME: l.d
            },
            p = u()("footer", {
                target: "esk3ouk0"
            })("background-color:#444;height:", function(e) {
                return e.isAZFooter ? "185px" : "81px"
            }, ";@media only screen and (max-width:", l.k, "){height:", function(e) {
                return e.isAZFooter ? "300px" : "105px"
            }, ";}"),
            d = u()("div", {
                target: "esk3ouk1"
            })("width:70%;margin:0 auto;color:#bbb;font-weight:100;font-family:'Helvetica';font-size:14px;line-height:40px;@media only screen and (max-width:", l.k, "){width:100%;line-height:30px;text-align:center;}"),
            h = u()("ul", {
                target: "esk3ouk2"
            })("display:inline;margin:0;padding:0px;@media only screen and (min-width:", l.k, "){float:right;}"),
            m = u()("li", {
                target: "esk3ouk3"
            })("display:inline;position:relative;"),
            b = u()("a", {
                target: "esk3ouk4"
            })("color:#bbb;text-decoration:none;padding-left:35px;&:hover{color:#fff;text-decoration:underline;}@media only screen and (max-width:", l.k, "){padding:5px;display:inline-block;text-align:center;}"),
            g = u()("div", {
                target: "esk3ouk5"
            })("line-height:normal;padding-bottom:22px;"),
            y = "© " + (new Date).getFullYear() + " Dictionary.com, LLC",
            v = function(e) {
                var t = e.aboutLinkId,
                    n = void 0 === t ? "" : t,
                    r = e.termsAndPrivacyLinkId,
                    i = void 0 === r ? "" : r,
                    a = e.contactUsLinkId,
                    c = void 0 === a ? "" : a,
                    u = e.careersLinkId,
                    f = void 0 === u ? "" : u,
                    v = e.siteName,
                    O = e.isAZFooter;
                return o.a.createElement(p, {
                    isAZFooter: O,
                    className: l.h
                }, o.a.createElement(d, null, O && o.a.createElement(g, null, o.a.createElement(s.a, {
                    siteName: v
                })), o.a.createElement(h, {
                    className: l.a
                }, o.a.createElement(m, null, o.a.createElement(b, {
                    href: l.e + "/about/",
                    "data-linkid": n,
                    id: "about-click"
                }, l.f)), o.a.createElement(m, null, o.a.createElement(b, {
                    href: l.e + "/careers/",
                    "data-linkid": f,
                    id: "careers-click"
                }, l.g)), o.a.createElement(m, null, o.a.createElement(b, {
                    href: l.e + "/contact/",
                    "data-linkid": c,
                    id: "contactUs-click"
                }, l.i)), o.a.createElement(m, null, o.a.createElement(b, {
                    href: l.e + "/terms/",
                    "data-linkid": i,
                    id: "termAndPrivacy-click"
                }, l.j))), o.a.createElement("div", null, y)))
            };
        v.propTypes = {
            aboutLinkId: a.a.string,
            termsAndPrivacyLinkId: a.a.string,
            contactUsLinkId: a.a.string,
            careersLinkId: a.a.string,
            siteName: a.a.string,
            isAZFooter: a.a.bool
        }, v.defaultProps = {
            aboutLinkId: "",
            termsAndPrivacyLinkId: "",
            contactUsLinkId: "",
            careersLinkId: "",
            isAZFooter: !1,
            siteName: ""
        }, t.default = v
    }, function(e, t) {
        e.exports = i
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n.n(r),
            i = n(1),
            a = n.n(i),
            c = n(2),
            u = a()("ul", {
                target: "emmj7sa0"
            })("margin:0;list-style:none;padding-top:20px;padding-left:0px;display:flex;flex-flow:row wrap;text-decoration:none;position:relative;text-align:left;@media only screen and (max-width:", c.k, "){padding-left:18px;}"),
            l = a()("li", {
                target: "emmj7sa1"
            })("@media only screen and (min-width:", c.k, "){float:left;}padding-right:16px;color:#999999;"),
            s = a()("li", {
                target: "emmj7sa2"
            })("float:left;padding-right:", function(e) {
                return e.isATWItem ? "16px" : "6px"
            }, ";@media only screen and (max-width:", c.k, "){float:right;padding-right:18px;margin-bottom:8px;column-fill:balance;}"),
            f = a()("a", {
                target: "emmj7sa3"
            })("color:#cccccc;text-decoration:none;"),
            p = function(e) {
                return "/list/" + e.name
            },
            d = function(e) {
                var t = e.name.replace(/\s+/g, "-").toLowerCase();
                return "more" === t ? c.e + "/list/word-facts/" : c.e + "/list/" + t + "/"
            };
        t.a = function(e) {
            var t = e.siteName;
            return o.a.createElement(o.a.Fragment, null, o.a.createElement(u, {
                className: c.c
            }, o.a.createElement(l, null, "Browse the ", function(e) {
                return "thesaurus" === e ? "Thesaurus" : "Dictionary"
            }(t), ":"), o.a.createElement(s, {
                key: "browseAZItemHash"
            }, o.a.createElement(f, {
                href: "/list/0/1",
                id: "azFooter0"
            }, "#")), c.l.map(function(e) {
                return o.a.createElement(s, {
                    key: "browseAZItem" + e.name
                }, o.a.createElement(f, {
                    href: p(e),
                    id: e.id
                }, e.name.toUpperCase()))
            })), o.a.createElement(u, {
                className: c.d
            }, o.a.createElement(l, null, "Browse by Category:"), c.b.map(function(e) {
                return o.a.createElement(s, {
                    key: "browseAZItem" + e.name,
                    isATWItem: !0
                }, o.a.createElement(f, {
                    href: d(e),
                    id: e.id
                }, e.name))
            })))
        }
    }]))
}, , , function(e, t, n) {
    e.exports = n.p + "dictionary-font-2f8f4dd423d79b60f7bc58ddcc429053.eot"
}, function(e, t, n) {
    e.exports = n.p + "dictionary-font-0acb1acf427a046a793cc3942f13589e.ttf"
}, function(e, t, n) {
    e.exports = n.p + "dictionary-font-2ae54d9d76a12012ae17e2dd85d293e9.svg"
}, function(e, t, n) {
    "use strict";
    var r = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        i = Object.defineProperty,
        a = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        u = Object.getOwnPropertyDescriptor,
        l = Object.getPrototypeOf,
        s = l && l(Object);
    e.exports = function e(t, n, f) {
        if ("string" != typeof n) {
            if (s) {
                var p = l(n);
                p && p !== s && e(t, p, f)
            }
            var d = a(n);
            c && (d = d.concat(c(n)));
            for (var h = 0; h < d.length; ++h) {
                var m = d[h];
                if (!(r[m] || o[m] || f && f[m])) {
                    var b = u(n, m);
                    try {
                        i(t, m, b)
                    } catch (e) {}
                }
            }
            return t
        }
        return t
    }
}, function(e, t, n) {
    "use strict";
    const r = n(338),
        o = n(339);

    function i(e, t) {
        return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
    }

    function a(e, t) {
        return t.decode ? o(e) : e
    }

    function c(e) {
        const t = e.indexOf("?");
        return -1 === t ? "" : e.slice(t + 1)
    }

    function u(e, t) {
        const n = function(e) {
                let t;
                switch (e.arrayFormat) {
                    case "index":
                        return (e, n, r) => {
                            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n
                        };
                    case "bracket":
                        return (e, n, r) => {
                            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                        };
                    default:
                        return (e, t, n) => {
                            void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                        }
                }
            }(t = Object.assign({
                decode: !0,
                arrayFormat: "none"
            }, t)),
            r = Object.create(null);
        if ("string" != typeof e) return r;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
        for (const o of e.split("&")) {
            let [e, i] = o.replace(/\+/g, " ").split("=");
            i = void 0 === i ? null : a(i, t), n(a(e, t), i, r)
        }
        return Object.keys(r).sort().reduce((e, t) => {
            const n = r[t];
            return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
            }(n) : e[t] = n, e
        }, Object.create(null))
    }
    t.extract = c, t.parse = u, t.stringify = ((e, t) => {
        if (!e) return "";
        const n = function(e) {
                switch (e.arrayFormat) {
                    case "index":
                        return (t, n, r) => null === n ? [i(t, e), "[", r, "]"].join("") : [i(t, e), "[", i(r, e), "]=", i(n, e)].join("");
                    case "bracket":
                        return (t, n) => null === n ? [i(t, e), "[]"].join("") : [i(t, e), "[]=", i(n, e)].join("");
                    default:
                        return (t, n) => null === n ? i(t, e) : [i(t, e), "=", i(n, e)].join("")
                }
            }(t = Object.assign({
                encode: !0,
                strict: !0,
                arrayFormat: "none"
            }, t)),
            r = Object.keys(e);
        return !1 !== t.sort && r.sort(t.sort), r.map(r => {
            const o = e[r];
            if (void 0 === o) return "";
            if (null === o) return i(r, t);
            if (Array.isArray(o)) {
                const e = [];
                for (const t of o.slice()) void 0 !== t && e.push(n(r, t, e.length));
                return e.join("&")
            }
            return i(r, t) + "=" + i(o, t)
        }).filter(e => e.length > 0).join("&")
    }), t.parseUrl = ((e, t) => {
        const n = e.indexOf("#");
        return -1 !== n && (e = e.slice(0, n)), {
            url: e.split("?")[0] || "",
            query: u(c(e), t)
        }
    })
}, function(e, t, n) {
    e.exports = n.p + "wotd_subscribe_closeIcon-687b2a137edfc3abb79d1188e139a9e5.svg"
}, function(e, t, n) {
    e.exports = n.p + "wotd_subscribe_letterIcon-ed6fe4d4ee932aaea380b7a92e35e34b.svg"
}, function(e, t, n) {
    e.exports = n.p + "audio-icon-9f870e286873fd50e8e479dc1915591f.svg"
}, function(e, t, n) {
    e.exports = n.p + "lines-7351796d79772c8ab183dca29c136c2a.png"
}, function(e, t, n) {
    e.exports = n.p + "ico-form-0c9faa620a623b39446396bfe9184e5e.png"
}, function(e, t) {
    e.exports = {
        CLICKINNER_AUDIO_BUTTON: "audio"
    }
}, function(e, t, n) {
    e.exports = n.p + "error50-0b0bba17fa2474e19249860343825f71.svg"
}, function(e, t, n) {
    e.exports = n.p + "dictionary_social_logo-b8e2f8f4d64cc7fcd66ad113e8d0f5c2.png"
}, function(e, t, n) {
    e.exports = n.p + "thesaurus_social_logo-208ba0c138c78ab3718720567519407e.png"
}, , function(e, t, n) {
    var r;
    "undefined" != typeof self && self, r = function(e, t, n) {
        return function(e) {
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
            return n.m = e, n.c = t, n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "/dist/", n(n.s = 0)
        }([function(e, t, n) {
            e.exports = n(1)
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NavLastItem = t.NavNextItem = t.NavPreviousItem = t.NavFirstItem = t.PageLinkItem = t.CurrentPageItem = t.COLOR_DCOM = t.COLOR_TCOM = void 0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                o = u(n(2)),
                i = n(3),
                a = n(4),
                c = u(a);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.COLOR_TCOM = "#f5a623";
            var l = t.COLOR_DCOM = "#3879c0",
                s = (0, c.default)("ol", {
                    target: "e1wvt9ur0"
                })("text-align:center;font-family:Helvetica-Bold;font-size:14px;list-style-type:none;margin:0;padding:0;overflow:hidden;"),
                f = (0, a.css)("display:inline-block;margin-bottom:5px;line-height:32px;text-align:center;user-select:none;"),
                p = (0, a.css)("text-decoration:none;color:#666666;"),
                d = t.CurrentPageItem = (0, c.default)("li", {
                    target: "e1wvt9ur1"
                })(f, ";display:inline-block;width:32px;height:32px;margin-left:5px;border-radius:50%;color:#ffffff;background-color:", l, ";", function(e) {
                    return e.color ? "background-color: " + e.color : ""
                }, ";"),
                h = t.PageLinkItem = (0, c.default)("li", {
                    target: "e1wvt9ur2"
                })(f, ";a{", p, ";display:inline-block;width:32px;height:32px;margin-left:5px;border-radius:50%;background-color:#c6c6c6;}"),
                m = (0, a.css)("width:22px;font-family:Helvetica-Light;letter-spacing:-1px;color:#333333;span{cursor:default;color:#cccccc;}a{", p, ";}"),
                b = t.NavFirstItem = (0, c.default)("li", {
                    target: "e1wvt9ur3"
                })(f, ";", m, ";"),
                g = t.NavPreviousItem = (0, c.default)("li", {
                    target: "e1wvt9ur4"
                })(f, ";", m, ";margin-right:8px;"),
                y = t.NavNextItem = (0, c.default)("li", {
                    target: "e1wvt9ur5"
                })(f, ";", m, ";margin-left:8px;"),
                v = t.NavLastItem = (0, c.default)("li", {
                    target: "e1wvt9ur6"
                })(f, ";", m, ";"),
                O = function(e) {
                    var t = e.baseURL,
                        n = e.currentPage,
                        i = e.totalPages,
                        a = e.pagesDisplayed,
                        c = e.extraAnchorProps,
                        u = e.color,
                        l = Math.max(1, Number(i) || 0),
                        f = Math.max(1, Number(a) || 0),
                        p = Math.max(1, Math.min(Number(n) || 0, l));
                    l === i && f === a && p === n || console.warn("@paginator - invalid page prop value or type.");
                    var m = p > 1,
                        O = p < l;
                    return o.default.createElement(s, null, o.default.createElement(b, null, m ? o.default.createElement("a", r({
                        "data-page": 1,
                        href: t + "/1"
                    }, c), "<<") : o.default.createElement("span", {
                        "data-page": 1
                    }, "<<")), o.default.createElement(g, null, m ? o.default.createElement("a", r({
                        "data-page": p - 1,
                        href: t + "/" + (p - 1)
                    }, c), "<") : o.default.createElement("span", {
                        "data-page": p - 1
                    }, "<")), o.default.createElement(d, {
                        color: u
                    }, o.default.createElement("span", null, p)), [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(Array(Math.min(f - 1, l - p)).keys())).map(function(e) {
                        var n = e + 1 + p;
                        return o.default.createElement(h, {
                            key: e
                        }, o.default.createElement("a", r({
                            "data-page": "" + n,
                            href: t + "/" + n
                        }, c), n))
                    }), o.default.createElement(y, null, O ? o.default.createElement("a", r({
                        "data-page": p + 1,
                        href: t + "/" + (p + 1)
                    }, c), ">") : o.default.createElement("span", {
                        "data-page": p + 1
                    }, ">")), o.default.createElement(v, null, O ? o.default.createElement("a", r({
                        "data-page": i,
                        href: t + "/" + i
                    }, c), ">>") : o.default.createElement("span", {
                        "data-page": i
                    }, ">>")))
                };
            O.propTypes = {
                currentPage: i.number.isRequired,
                totalPages: i.number.isRequired,
                baseURL: i.string,
                pagesDisplayed: i.number,
                extraAnchorProps: i.object,
                color: i.string
            }, O.defaultProps = {
                baseURL: "",
                pagesDisplayed: 10,
                extraAnchorProps: {},
                color: l
            }, t.default = O
        }, function(t, n) {
            t.exports = e
        }, function(e, n) {
            e.exports = t
        }, function(e, t) {
            e.exports = n
        }])
    }, e.exports = r(n(0), n(1), n(2))
}, function(e, t, n) {
    "use strict";
    var r = n(14).compose;
    t.__esModule = !0, t.composeWithDevTools = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (0 !== arguments.length) return "object" == typeof arguments[0] ? r : r.apply(null, arguments)
    }, t.devToolsEnhancer = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
        return function(e) {
            return e
        }
    }
}, , , , , , function(e, t, n) {
    e.exports = n(350)
}, , , function(e, t, n) {
    "use strict";
    e.exports = n(183)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        /** @license React v0.13.2
         * scheduler.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = null,
            r = !1,
            o = 3,
            i = -1,
            a = -1,
            c = !1,
            u = !1;

        function l() {
            if (!c) {
                var e = n.expirationTime;
                u ? E() : u = !0, w(p, e)
            }
        }

        function s() {
            var e = n,
                t = n.next;
            if (n === t) n = null;
            else {
                var r = n.previous;
                n = r.next = t, t.previous = r
            }
            e.next = e.previous = null, r = e.callback, t = e.expirationTime, e = e.priorityLevel;
            var i = o,
                c = a;
            o = e, a = t;
            try {
                var u = r()
            } finally {
                o = i, a = c
            }
            if ("function" == typeof u)
                if (u = {
                        callback: u,
                        priorityLevel: e,
                        expirationTime: t,
                        next: null,
                        previous: null
                    }, null === n) n = u.next = u.previous = u;
                else {
                    r = null, e = n;
                    do {
                        if (e.expirationTime >= t) {
                            r = e;
                            break
                        }
                        e = e.next
                    } while (e !== n);
                    null === r ? r = n : r === n && (n = u, l()), (t = r.previous).next = r.previous = u, u.next = r, u.previous = t
                }
        }

        function f() {
            if (-1 === i && null !== n && 1 === n.priorityLevel) {
                c = !0;
                try {
                    do {
                        s()
                    } while (null !== n && 1 === n.priorityLevel)
                } finally {
                    c = !1, null !== n ? l() : u = !1
                }
            }
        }

        function p(e) {
            c = !0;
            var o = r;
            r = e;
            try {
                if (e)
                    for (; null !== n;) {
                        var i = t.unstable_now();
                        if (!(n.expirationTime <= i)) break;
                        do {
                            s()
                        } while (null !== n && n.expirationTime <= i)
                    } else if (null !== n)
                        do {
                            s()
                        } while (null !== n && !_())
            } finally {
                c = !1, r = o, null !== n ? l() : u = !1, f()
            }
        }
        var d, h, m = Date,
            b = "function" == typeof setTimeout ? setTimeout : void 0,
            g = "function" == typeof clearTimeout ? clearTimeout : void 0,
            y = "function" == typeof requestAnimationFrame ? requestAnimationFrame : void 0,
            v = "function" == typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;

        function O(e) {
            d = y(function(t) {
                g(h), e(t)
            }), h = b(function() {
                v(d), e(t.unstable_now())
            }, 100)
        }
        if ("object" == typeof performance && "function" == typeof performance.now) {
            var x = performance;
            t.unstable_now = function() {
                return x.now()
            }
        } else t.unstable_now = function() {
            return m.now()
        };
        var w, E, _, T = null;
        if ("undefined" != typeof window ? T = window : void 0 !== e && (T = e), T && T._schedMock) {
            var I = T._schedMock;
            w = I[0], E = I[1], _ = I[2], t.unstable_now = I[3]
        } else if ("undefined" == typeof window || "function" != typeof MessageChannel) {
            var A = null,
                k = function(e) {
                    if (null !== A) try {
                        A(e)
                    } finally {
                        A = null
                    }
                };
            w = function(e) {
                null !== A ? setTimeout(w, 0, e) : (A = e, setTimeout(k, 0, !1))
            }, E = function() {
                A = null
            }, _ = function() {
                return !1
            }
        } else {
            "undefined" != typeof console && ("function" != typeof y && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof v && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
            var C = null,
                S = !1,
                j = -1,
                P = !1,
                M = !1,
                L = 0,
                R = 33,
                N = 33;
            _ = function() {
                return L <= t.unstable_now()
            };
            var D = new MessageChannel,
                U = D.port2;
            D.port1.onmessage = function() {
                S = !1;
                var e = C,
                    n = j;
                C = null, j = -1;
                var r = t.unstable_now(),
                    o = !1;
                if (0 >= L - r) {
                    if (!(-1 !== n && n <= r)) return P || (P = !0, O(F)), C = e, void(j = n);
                    o = !0
                }
                if (null !== e) {
                    M = !0;
                    try {
                        e(o)
                    } finally {
                        M = !1
                    }
                }
            };
            var F = function(e) {
                if (null !== C) {
                    O(F);
                    var t = e - L + N;
                    t < N && R < N ? (8 > t && (t = 8), N = t < R ? R : t) : R = t, L = e + N, S || (S = !0, U.postMessage(void 0))
                } else P = !1
            };
            w = function(e, t) {
                C = e, j = t, M || 0 > t ? U.postMessage(void 0) : P || (P = !0, O(F))
            }, E = function() {
                C = null, S = !1, j = -1
            }
        }
        t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, n) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
            }
            var r = o,
                a = i;
            o = e, i = t.unstable_now();
            try {
                return n()
            } finally {
                o = r, i = a, f()
            }
        }, t.unstable_next = function(e) {
            switch (o) {
                case 1:
                case 2:
                case 3:
                    var n = 3;
                    break;
                default:
                    n = o
            }
            var r = o,
                a = i;
            o = n, i = t.unstable_now();
            try {
                return e()
            } finally {
                o = r, i = a, f()
            }
        }, t.unstable_scheduleCallback = function(e, r) {
            var a = -1 !== i ? i : t.unstable_now();
            if ("object" == typeof r && null !== r && "number" == typeof r.timeout) r = a + r.timeout;
            else switch (o) {
                case 1:
                    r = a + -1;
                    break;
                case 2:
                    r = a + 250;
                    break;
                case 5:
                    r = a + 1073741823;
                    break;
                case 4:
                    r = a + 1e4;
                    break;
                default:
                    r = a + 5e3
            }
            if (e = {
                    callback: e,
                    priorityLevel: o,
                    expirationTime: r,
                    next: null,
                    previous: null
                }, null === n) n = e.next = e.previous = e, l();
            else {
                a = null;
                var c = n;
                do {
                    if (c.expirationTime > r) {
                        a = c;
                        break
                    }
                    c = c.next
                } while (c !== n);
                null === a ? a = n : a === n && (n = e, l()), (r = a.previous).next = a.previous = e, e.next = a, e.previous = r
            }
            return e
        }, t.unstable_cancelCallback = function(e) {
            var t = e.next;
            if (null !== t) {
                if (t === e) n = null;
                else {
                    e === n && (n = t);
                    var r = e.previous;
                    r.next = t, t.previous = r
                }
                e.next = e.previous = null
            }
        }, t.unstable_wrapCallback = function(e) {
            var n = o;
            return function() {
                var r = o,
                    a = i;
                o = n, i = t.unstable_now();
                try {
                    return e.apply(this, arguments)
                } finally {
                    o = r, i = a, f()
                }
            }
        }, t.unstable_getCurrentPriorityLevel = function() {
            return o
        }, t.unstable_shouldYield = function() {
            return !r && (null !== n && n.expirationTime < a || _())
        }, t.unstable_continueExecution = function() {
            null !== n && l()
        }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() {
            return n
        }
    }).call(this, n(33))
}, function(e, t, n) {
    "use strict";
    var r = n(185);

    function o() {}

    function i() {}
    i.resetWarningCache = o, e.exports = function() {
        function e(e, t, n, o, i, a) {
            if (a !== r) {
                var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw c.name = "Invariant Violation", c
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o
        };
        return n.PropTypes = n, n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
    "use strict";
    /** @license React v16.8.2
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        c = r ? Symbol.for("react.strict_mode") : 60108,
        u = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        s = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116;

    function g(e) {
        if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case o:
                    switch (e = e.type) {
                        case f:
                        case p:
                        case a:
                        case u:
                        case c:
                        case h:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case s:
                                case d:
                                case l:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case b:
                case m:
                case i:
                    return t
            }
        }
    }

    function y(e) {
        return g(e) === p
    }
    t.typeOf = g, t.AsyncMode = f, t.ConcurrentMode = p, t.ContextConsumer = s, t.ContextProvider = l, t.Element = o, t.ForwardRef = d, t.Fragment = a, t.Lazy = b, t.Memo = m, t.Portal = i, t.Profiler = u, t.StrictMode = c, t.Suspense = h, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === p || e === u || e === c || e === h || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === m || e.$$typeof === l || e.$$typeof === s || e.$$typeof === d)
    }, t.isAsyncMode = function(e) {
        return y(e) || g(e) === f
    }, t.isConcurrentMode = y, t.isContextConsumer = function(e) {
        return g(e) === s
    }, t.isContextProvider = function(e) {
        return g(e) === l
    }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }, t.isForwardRef = function(e) {
        return g(e) === d
    }, t.isFragment = function(e) {
        return g(e) === a
    }, t.isLazy = function(e) {
        return g(e) === b
    }, t.isMemo = function(e) {
        return g(e) === m
    }, t.isPortal = function(e) {
        return g(e) === i
    }, t.isProfiler = function(e) {
        return g(e) === u
    }, t.isStrictMode = function(e) {
        return g(e) === c
    }, t.isSuspense = function(e) {
        return g(e) === h
    }
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function(e, t) {
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = {
        default: n(219),
        __esModule: !0
    }
}, , , , , function(e, t, n) {
    e.exports = {
        default: n(224),
        __esModule: !0
    }
}, , , , function(e, t, n) {
    e.exports = {
        default: n(228),
        __esModule: !0
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(254),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i.default)(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }()
}, function(e, t, n) {
    e.exports = {
        default: n(255),
        __esModule: !0
    }
}, , , function(e, t, n) {
    "use strict";
    var r = n(258),
        o = n(64);

    function i(e, t) {
        return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
    }
    t.extract = function(e) {
        return e.split("?")[1] || ""
    }, t.parse = function(e, t) {
        var n = function(e) {
                var t;
                switch (e.arrayFormat) {
                    case "index":
                        return function(e, n, r) {
                            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n
                        };
                    case "bracket":
                        return function(e, n, r) {
                            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                        };
                    default:
                        return function(e, t, n) {
                            void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                        }
                }
            }(t = o({
                arrayFormat: "none"
            }, t)),
            r = Object.create(null);
        return "string" != typeof e ? r : (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
            var t = e.replace(/\+/g, " ").split("="),
                o = t.shift(),
                i = t.length > 0 ? t.join("=") : void 0;
            i = void 0 === i ? null : decodeURIComponent(i), n(decodeURIComponent(o), i, r)
        }), Object.keys(r).sort().reduce(function(e, t) {
            var n = r[t];
            return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort(function(e, t) {
                    return Number(e) - Number(t)
                }).map(function(e) {
                    return t[e]
                }) : t
            }(n) : e[t] = n, e
        }, Object.create(null))) : r
    }, t.stringify = function(e, t) {
        var n = function(e) {
            switch (e.arrayFormat) {
                case "index":
                    return function(t, n, r) {
                        return null === n ? [i(t, e), "[", r, "]"].join("") : [i(t, e), "[", i(r, e), "]=", i(n, e)].join("")
                    };
                case "bracket":
                    return function(t, n) {
                        return null === n ? i(t, e) : [i(t, e), "[]=", i(n, e)].join("")
                    };
                default:
                    return function(t, n) {
                        return null === n ? i(t, e) : [i(t, e), "=", i(n, e)].join("")
                    }
            }
        }(t = o({
            encode: !0,
            strict: !0,
            arrayFormat: "none"
        }, t));
        return e ? Object.keys(e).sort().map(function(r) {
            var o = e[r];
            if (void 0 === o) return "";
            if (null === o) return i(r, t);
            if (Array.isArray(o)) {
                var a = [];
                return o.slice().forEach(function(e) {
                    void 0 !== e && a.push(n(r, e, a.length))
                }), a.join("&")
            }
            return i(r, t) + "=" + i(o, t)
        }).filter(function(e) {
            return e.length > 0
        }).join("&") : ""
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
}, function(e, t, n) {
    try {
        var r = n(122)
    } catch (e) {
        r = n(122)
    }
    var o = "undefined" != typeof Element ? Element.prototype : {},
        i = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector;
    e.exports = function(e, t) {
        if (!e || 1 !== e.nodeType) return !1;
        if (i) return i.call(e, t);
        for (var n = r.all(t, e.parentNode), o = 0; o < n.length; ++o)
            if (n[o] == e) return !0;
        return !1
    }
}, function(e, t, n) {
    var r, o;
    /*!
     * JavaScript Cookie v2.2.0
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */
    ! function(i) {
        if (void 0 === (o = "function" == typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = o), !0, e.exports = i(), !!0) {
            var a = window.Cookies,
                c = window.Cookies = i();
            c.noConflict = function() {
                return window.Cookies = a, c
            }
        }
    }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r]
            }
            return t
        }
        return function t(n) {
            function r(t, o, i) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof(i = e({
                                path: "/"
                            }, r.defaults, i)).expires) {
                            var c = new Date;
                            c.setMilliseconds(c.getMilliseconds() + 864e5 * i.expires), i.expires = c
                        }
                        i.expires = i.expires ? i.expires.toUTCString() : "";
                        try {
                            a = JSON.stringify(o), /^[\{\[]/.test(a) && (o = a)
                        } catch (e) {}
                        o = n.write ? n.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var u = "";
                        for (var l in i) i[l] && (u += "; " + l, !0 !== i[l] && (u += "=" + i[l]));
                        return document.cookie = t + "=" + o + u
                    }
                    t || (a = {});
                    for (var s = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, p = 0; p < s.length; p++) {
                        var d = s[p].split("="),
                            h = d.slice(1).join("=");
                        this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
                        try {
                            var m = d[0].replace(f, decodeURIComponent);
                            if (h = n.read ? n.read(h, m) : n(h, m) || h.replace(f, decodeURIComponent), this.json) try {
                                h = JSON.parse(h)
                            } catch (e) {}
                            if (t === m) {
                                a = h;
                                break
                            }
                            t || (a[m] = h)
                        } catch (e) {}
                    }
                    return a
                }
            }
            return r.set = r, r.get = function(e) {
                return r.call(r, e)
            }, r.getJSON = function() {
                return r.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, r.defaults = {}, r.remove = function(t, n) {
                r(t, "", e(n, {
                    expires: -1
                }))
            }, r.withConverter = t, r
        }(function() {})
    })
}, function(e, t, n) {
    e.exports = {
        default: n(262),
        __esModule: !0
    }
}, , , function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(123),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    t.default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) && "function" != typeof t ? e : t
    }
}, function(e, t, n) {
    e.exports = {
        default: n(266),
        __esModule: !0
    }
}, , function(e, t, n) {
    e.exports = {
        default: n(268),
        __esModule: !0
    }
}, , , , , , , function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = a(n(275)),
        o = a(n(279)),
        i = a(n(123));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, i.default)(t)));
        e.prototype = (0, o.default)(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(276),
        __esModule: !0
    }
}, , , , function(e, t, n) {
    e.exports = {
        default: n(280),
        __esModule: !0
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    e.exports = (e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`))
}, function(e, t, n) {
    "use strict";
    var r = new RegExp("%[a-f0-9]{2}", "gi"),
        o = new RegExp("(%[a-f0-9]{2})+", "gi");

    function i(e, t) {
        try {
            return decodeURIComponent(e.join(""))
        } catch (e) {}
        if (1 === e.length) return e;
        t = t || 1;
        var n = e.slice(0, t),
            r = e.slice(t);
        return Array.prototype.concat.call([], i(n), i(r))
    }

    function a(e) {
        try {
            return decodeURIComponent(e)
        } catch (o) {
            for (var t = e.match(r), n = 1; n < t.length; n++) t = (e = i(t, n).join("")).match(r);
            return e
        }
    }
    e.exports = function(e) {
        if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
        try {
            return e = e.replace(/\+/g, " "), decodeURIComponent(e)
        } catch (t) {
            return function(e) {
                for (var t = {
                        "%FE%FF": "��",
                        "%FF%FE": "��"
                    }, n = o.exec(e); n;) {
                    try {
                        t[n[0]] = decodeURIComponent(n[0])
                    } catch (e) {
                        var r = a(n[0]);
                        r !== n[0] && (t[n[0]] = r)
                    }
                    n = o.exec(e)
                }
                t["%C2"] = "�";
                for (var i = Object.keys(t), c = 0; c < i.length; c++) {
                    var u = i[c];
                    e = e.replace(new RegExp(u, "g"), t[u])
                }
                return e
            }(e)
        }
    }
}, function(e, t, n) {
    (function(e, r) {
        var o; /*! https://mths.be/punycode v1.4.1 by @mathias */
        ! function(i) {
            t && t.nodeType, e && e.nodeType;
            var a = "object" == typeof r && r;
            a.global !== a && a.window !== a && a.self;
            var c, u = 2147483647,
                l = 36,
                s = 1,
                f = 26,
                p = 38,
                d = 700,
                h = 72,
                m = 128,
                b = "-",
                g = /^xn--/,
                y = /[^\x20-\x7E]/,
                v = /[\x2E\u3002\uFF0E\uFF61]/g,
                O = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                x = l - s,
                w = Math.floor,
                E = String.fromCharCode;

            function _(e) {
                throw new RangeError(O[e])
            }

            function T(e, t) {
                for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                return r
            }

            function I(e, t) {
                var n = e.split("@"),
                    r = "";
                return n.length > 1 && (r = n[0] + "@", e = n[1]), r + T((e = e.replace(v, ".")).split("."), t).join(".")
            }

            function A(e) {
                for (var t, n, r = [], o = 0, i = e.length; o < i;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
                return r
            }

            function k(e) {
                return T(e, function(e) {
                    var t = "";
                    return e > 65535 && (t += E((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += E(e)
                }).join("")
            }

            function C(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function S(e, t, n) {
                var r = 0;
                for (e = n ? w(e / d) : e >> 1, e += w(e / t); e > x * f >> 1; r += l) e = w(e / x);
                return w(r + (x + 1) * e / (e + p))
            }

            function j(e) {
                var t, n, r, o, i, a, c, p, d, g, y, v = [],
                    O = e.length,
                    x = 0,
                    E = m,
                    T = h;
                for ((n = e.lastIndexOf(b)) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && _("not-basic"), v.push(e.charCodeAt(r));
                for (o = n > 0 ? n + 1 : 0; o < O;) {
                    for (i = x, a = 1, c = l; o >= O && _("invalid-input"), ((p = (y = e.charCodeAt(o++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : l) >= l || p > w((u - x) / a)) && _("overflow"), x += p * a, !(p < (d = c <= T ? s : c >= T + f ? f : c - T)); c += l) a > w(u / (g = l - d)) && _("overflow"), a *= g;
                    T = S(x - i, t = v.length + 1, 0 == i), w(x / t) > u - E && _("overflow"), E += w(x / t), x %= t, v.splice(x++, 0, E)
                }
                return k(v)
            }

            function P(e) {
                var t, n, r, o, i, a, c, p, d, g, y, v, O, x, T, I = [];
                for (v = (e = A(e)).length, t = m, n = 0, i = h, a = 0; a < v; ++a)(y = e[a]) < 128 && I.push(E(y));
                for (r = o = I.length, o && I.push(b); r < v;) {
                    for (c = u, a = 0; a < v; ++a)(y = e[a]) >= t && y < c && (c = y);
                    for (c - t > w((u - n) / (O = r + 1)) && _("overflow"), n += (c - t) * O, t = c, a = 0; a < v; ++a)
                        if ((y = e[a]) < t && ++n > u && _("overflow"), y == t) {
                            for (p = n, d = l; !(p < (g = d <= i ? s : d >= i + f ? f : d - i)); d += l) T = p - g, x = l - g, I.push(E(C(g + T % x, 0))), p = w(T / x);
                            I.push(E(C(p, 0))), i = S(n, O, r == o), n = 0, ++r
                        }++ n, ++t
                }
                return I.join("")
            }
            c = {
                version: "1.4.1",
                ucs2: {
                    decode: A,
                    encode: k
                },
                decode: j,
                encode: P,
                toASCII: function(e) {
                    return I(e, function(e) {
                        return y.test(e) ? "xn--" + P(e) : e
                    })
                },
                toUnicode: function(e) {
                    return I(e, function(e) {
                        return g.test(e) ? j(e.slice(4).toLowerCase()) : e
                    })
                }
            }, void 0 === (o = function() {
                return c
            }.call(t, n, t, e)) || (e.exports = o)
        }()
    }).call(this, n(87)(e), n(33))
}, , function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(343), t.encode = t.stringify = n(344)
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, n, i) {
        t = t || "&", n = n || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length) return a;
        var c = /\+/g;
        e = e.split(t);
        var u = 1e3;
        i && "number" == typeof i.maxKeys && (u = i.maxKeys);
        var l = e.length;
        u > 0 && l > u && (l = u);
        for (var s = 0; s < l; ++s) {
            var f, p, d, h, m = e[s].replace(c, "%20"),
                b = m.indexOf(n);
            b >= 0 ? (f = m.substr(0, b), p = m.substr(b + 1)) : (f = m, p = ""), d = decodeURIComponent(f), h = decodeURIComponent(p), r(a, d) ? o(a[d]) ? a[d].push(h) : a[d] = [a[d], h] : a[d] = h
        }
        return a
    };
    var o = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}, function(e, t, n) {
    "use strict";
    var r = function(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function(e, t, n, c) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? i(a(e), function(a) {
            var c = encodeURIComponent(r(a)) + n;
            return o(e[a]) ? i(e[a], function(e) {
                return c + encodeURIComponent(r(e))
            }).join(t) : c + encodeURIComponent(r(e[a]))
        }).join(t) : c ? encodeURIComponent(r(c)) + n + encodeURIComponent(r(e)) : ""
    };
    var o = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };

    function i(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
        return n
    }
    var a = Object.keys || function(e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
}, function(e, t) {
    e.exports = http
}, function(e, t) {
    e.exports = https
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return "/" === e.charAt(0)
    }

    function o(e, t) {
        for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1) e[n] = e[r];
        e.pop()
    }
    n.r(t), t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = e && e.split("/") || [],
            i = t && t.split("/") || [],
            a = e && r(e),
            c = t && r(t),
            u = a || c;
        if (e && r(e) ? i = n : n.length && (i.pop(), i = i.concat(n)), !i.length) return "/";
        var l = void 0;
        if (i.length) {
            var s = i[i.length - 1];
            l = "." === s || ".." === s || "" === s
        } else l = !1;
        for (var f = 0, p = i.length; p >= 0; p--) {
            var d = i[p];
            "." === d ? o(i, p) : ".." === d ? (o(i, p), f++) : f && (o(i, p), f--)
        }
        if (!u)
            for (; f--; f) i.unshift("..");
        !u || "" === i[0] || i[0] && r(i[0]) || i.unshift("");
        var h = i.join("/");
        return l && "/" !== h.substr(-1) && (h += "/"), h
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.default = function e(t, n) {
        if (t === n) return !0;
        if (null == t || null == n) return !1;
        if (Array.isArray(t)) return Array.isArray(n) && t.length === n.length && t.every(function(t, r) {
            return e(t, n[r])
        });
        var o = void 0 === t ? "undefined" : r(t);
        if (o !== (void 0 === n ? "undefined" : r(n))) return !1;
        if ("object" === o) {
            var i = t.valueOf(),
                a = n.valueOf();
            if (i !== t || a !== n) return e(i, a);
            var c = Object.keys(t),
                u = Object.keys(n);
            return c.length === u.length && c.every(function(r) {
                return e(t[r], n[r])
            })
        }
        return !1
    }
}, , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(137),
        o = n.n(r),
        i = n(0),
        a = n.n(i),
        c = n(27),
        u = n(1),
        l = n.n(u),
        s = n(351),
        f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        p = "@@router/LOCATION_CHANGE",
        d = {
            location: null
        };

    function h(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var m = function(e) {
        function t() {
            var n, r;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
            return n = r = h(this, e.call.apply(e, [this].concat(i))), r.handleLocationChange = function(e) {
                r.store.dispatch({
                    type: p,
                    payload: e
                })
            }, h(r, n)
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), t.prototype.componentWillMount = function() {
            var e = this.props,
                t = e.store,
                n = e.history,
                r = e.isSSR;
            this.store = t || this.context.store, this.handleLocationChange(n.location), r || (this.unsubscribeFromHistory = n.listen(this.handleLocationChange))
        }, t.prototype.componentWillUnmount = function() {
            this.unsubscribeFromHistory && this.unsubscribeFromHistory()
        }, t.prototype.render = function() {
            return a.a.createElement(s.a, this.props)
        }, t
    }(i.Component);
    m.propTypes = {
        store: l.a.object,
        history: l.a.object.isRequired,
        children: l.a.node,
        isSSR: l.a.bool
    }, m.contextTypes = {
        store: l.a.object
    };
    var b = m,
        g = (n(141), "@@router/CALL_HISTORY_METHOD");

    function y(e) {
        return function() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return {
                type: g,
                payload: {
                    method: e,
                    args: n
                }
            }
        }
    }
    y("push"), y("replace"), y("go"), y("goBack"), y("goForward");
    n(59);
    var v = n(142),
        O = (n.n(v).a.prototype.computeMatch, n(143)),
        x = n.n(O),
        w = n(144),
        E = n.n(w),
        _ = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        T = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e ? a.a.createElement(x.a, null, e.map(function(e, n) {
                return a.a.createElement(E.a, {
                    key: e.key || n,
                    path: e.path,
                    exact: e.exact,
                    strict: e.strict,
                    render: function(n) {
                        return a.a.createElement(e.component, _({}, n, t, {
                            route: e
                        }))
                    }
                })
            })) : null
        },
        I = n(6),
        A = n.n(I),
        k = n(2),
        C = n(63),
        S = n.n(C),
        j = n(177).a,
        P = n(32),
        M = n.n(P),
        L = n(152),
        R = n.n(L),
        N = n(153),
        D = n.n(N),
        U = n(154),
        F = n.n(U),
        z = n(8),
        q = function() {
            return a.a.createElement(F.a, {
                aboutLinkId: z.LINKID_FOOTER_ABOUT,
                termsAndPrivacyLinkId: z.LINKID_FOOTER_TERMS,
                careersLinkId: z.LINKID_FOOTER_CAREERS,
                contactUsLinkId: z.LINKID_FOOTER_CONTACT_US
            })
        },
        H = n(3),
        W = (n(155), {
            HOME: "home",
            LISTAZ: "list"
        }),
        G = {
            homepage: "/",
            listAZ: "/".concat(W.LISTAZ, "/:letter([0a-zA-Z])/:page(\\d+)?")
        },
        V = n(4),
        B = function(e) {
            return "".concat(Object(V.h)(), "://").concat(Object(V.i)()).concat(e ? "/browse/".concat(e) : "")
        },
        Z = function(e) {
            return "".concat(Object(V.b)(), "://").concat(Object(V.c)()).concat(e ? "/browse/".concat(e) : "")
        };
    var K = function(e, t) {
        return "dcom" === e ? Z(t) : B(t)
    };

    function $(e, t, n) {
        return e === Object(V.i)() ? function(e, t) {
            e.href = B(t)
        }(t, n) : function(e, t) {
            e.href = Z(t)
        }(t, n)
    }
    var Q = n(20),
        Y = n.n(Q),
        J = {
            debug: Q.DEBUG,
            info: Q.INFO,
            warn: Q.WARN,
            error: Q.ERROR,
            off: Q.OFF
        },
        X = function(e) {
            var t = function(e) {
                return J[e] ? J[e] : null
            }(e);
            t && Y.a.setLevel(t)
        };
    if (Y.a.useDefaults(), V.k) {
        var ee = function() {
            for (var e = {}, t = [], n = window.location.search, r = n.slice(n.indexOf("?") + 1).split("&"), o = 0; o < r.length; o += 1) e[(t = r[o].split("="))[0]] = t[1];
            return e
        }().loglevel;
        X(ee || Object(V.a)())
    } else X(Object(V.g)());
    var te, ne = Y.a;

    function re(e) {
        return (re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var oe = function() {
            return te || ("object" === ("undefined" == typeof window ? "undefined" : re(window)) && void 0 === te && (window.ANALYTICS ? (te = window.ANALYTICS, delete window.ANALYTICS) : (ne.warn("Could not find analytics object on the page"), te = null)), te)
        },
        ie = function(e) {
            return A()(e, "routing.pageName", "")
        },
        ae = function(e) {
            return A()(e, "detectedDevice.isMobile", !1)
        },
        ce = function(e) {
            return A()(e, "detectedApplication.app", H.APPLICATION.DCOM)
        },
        ue = function(e) {
            return A()(e, "editorialData.data", [])
        },
        le = function(e) {
            return A()(e, "wotdData.data", {})
        },
        se = function(e) {
            return A()(e, "listAZ.data", null)
        },
        fe = function(e) {
            return A()(e, "listAZ.meta", null)
        },
        pe = {
            dcom: {
                HOME: "dict-home",
                LISTAZ: "browseatoz"
            },
            tcom: {
                HOME: "thes-home",
                LISTAZ: "browseatoz"
            }
        };
    var de, he, me = n(7),
        be = n(24),
        ge = n.n(be),
        ye = function(e) {
            var t, n = JSON.parse(e.getAttribute("data-cts")),
                r = {};
            return null !== n ? (r.linkId = n.linkId, r.item = "", r.ordinal = n.ordinal) : null != (t = ge()(e, "[data-linkid]", !0)) && null == ge()(e, "[data-type]", !0) && (r.linkId = t.getAttribute("data-linkid"), r.item = function(e) {
                var t = "";
                return null != ge()(e, "[data-item]", !0) && (t = e.textContent.trim()), t
            }(e), r.ordinal = function(e, t) {
                var n, r = 0;
                if (t !== e && void 0 !== (n = ge()(e, "[data-ordinal]", !0)))
                    for (var o = n.getElementsByTagName("a"), i = 0; i < o.length; i += 1) e === o[i] && (r = i + 1);
                return r
            }(e, t)), r
        },
        ve = function(e, t) {
            e.addEventListener("click", function(e) {
                var n = ge()(e.target, "A", !0);
                if (n) {
                    var r, o = ge()(n, ".cts-enabled", !0),
                        i = ge()(n, ".cts-disabled", !0),
                        a = n.href;
                    if ("" === a) return !0;
                    if (n.classList.contains("cts-clicked")) return !1;
                    if (null != i && (null == o || i.childNodes.length < o.childNodes.length)) return !0;
                    if (void 0 === (r = ye(n)).linkId) return !0;
                    n.classList.add("cts-clicked");
                    var c = {
                        linkIds: r.linkId || "",
                        item: r.item || "",
                        ordinal: r.ordinal || "",
                        destination: a
                    };
                    A()(t, "report", !1) ? t.report(new P.ClickEvent(c)) : console.warn("No tracker.report function found, cannot log event")
                }
                return !1
            })
        },
        Oe = "#3A76C3",
        xe = "#09bdff",
        we = "#ffffff",
        Ee = "#1a1a1a",
        _e = "#f5f5f5",
        Te = "#979797",
        Ie = "#4a4a4a",
        Ae = "#f5a623",
        ke = "#d32f2f",
        Ce = "#43a047",
        Se = 768,
        je = 1023,
        Pe = 700,
        Me = 440,
        Le = 420,
        Re = "40px",
        Ne = "81px";
    n(23), n(156), n(157), n(97), n(158), n(159);

    function De(e) {
        return (De = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ue(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Fe(e) {
        return (Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ze(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function qe(e, t) {
        return (qe = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function He(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var We = Object(k.default)("div", {
            target: "eyeuakq0"
        })("margin:0 auto;padding:0 15px;min-height:1000px;max-width:1124px;width:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"),
        Ge = Object(k.default)("div", {
            target: "eyeuakq1"
        })(function(e) {
            return e.isHamburgerMenuOpen ? "height: 100vh;\n      overflow-y: hidden;" : ""
        }, ";"),
        Ve = Object(k.default)("div", {
            target: "eyeuakq2"
        })("min-height:calc(100vh - ", Re, ");@media only screen and (max-width:", Se, "px){min-height:calc(100vh - ", Ne, ");}transform:translate3d( ", function(e) {
            return e.isHamburgerMenuOpen ? e.isMobile ? "calc(100% - 65px)" : "300px" : 0
        }, ",0,0 );transition:transform 0.4s ease;"),
        Be = (He(de = {}, H.APPLICATION.DCOM, C.SITE_NAME_DICTIONARY), He(de, H.APPLICATION.TCOM, C.SITE_NAME_THESAURUS), de),
        Ze = (He(he = {}, H.APPLICATION.DCOM, Object(me.a)(R.a, H.APPLICATION.DCOM)), He(he, H.APPLICATION.TCOM, Object(me.a)(D.a, H.APPLICATION.TCOM)), he),
        Ke = {
            fontFamily: "dictionary-fonticon",
            openIcon: "",
            closeIcon: "",
            androidGlyph: "",
            appleGlyph: ""
        },
        $e = function(e) {
            var t = e.site,
                n = e.term,
                r = e.location,
                o = void 0 === r ? window.location : r;
            o && o.href && n ? $(t, o, n) : o && o.href ? $(t, o) : console.warn("window.location not available, could not redirect")
        },
        Qe = function(e) {
            function t(e) {
                var n, r, o;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, o = Fe(t).call(this, e), n = !o || "object" !== De(o) && "function" != typeof o ? ze(r) : o, He(ze(n), "setTrackerPageName", function(e, t) {
                    n.tracker.setPageName(function(e, t) {
                        switch (e) {
                            case W.HOME:
                                return pe[t].HOME;
                            case W.LISTAZ:
                                return pe[t].LISTAZ;
                            default:
                                return void ne.warn("getAnalyticsPagenameFor received an invalid app page name")
                        }
                    }(e, t))
                }), n.state = {
                    isHamburgerMenuOpen: !1
                }, n.toggleHamburgerMenu = n.toggleHamburgerMenu.bind(ze(n)), n.headerTabClickCallback = n.headerTabClickCallback.bind(ze(n)), n
            }
            var n, r, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && qe(e, t)
            }(t, a.a.Component), n = t, (r = [{
                key: "componentDidMount",
                value: function() {
                    this.updateTrackerObject(), this.reportAnalytics(document.referrer, this.props.app), ve(document.body, this.tracker)
                }
            }, {
                key: "updateTrackerObject",
                value: function() {
                    var e = oe();
                    e && (this.tracker = new M.a(e))
                }
            }, {
                key: "reportAnalytics",
                value: function(e, t) {
                    this.tracker || this.updateTrackerObject();
                    var n = [new P.PageViewEvent];
                    this.tracker.setPreviousURL(e), this.setTrackerPageName(this.props.pageName, t), this.tracker.report(n)
                }
            }, {
                key: "toggleHamburgerMenu",
                value: function(e) {
                    this.setState(function(t) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    He(e, t, n[t])
                                })
                            }
                            return e
                        }({}, t, {
                            isHamburgerMenuOpen: e
                        })
                    })
                }
            }, {
                key: "mobileTabTrackEventAndRedirectToDestination",
                value: function(e, t, n) {
                    this.tracker.report(new P.ClickEvent({
                        linkIds: e
                    }), $e({
                        site: t,
                        term: n
                    }))
                }
            }, {
                key: "headerTabClickCallback",
                value: function(e) {
                    var t = e.event,
                        n = e.searchInput,
                        r = e.isMobile,
                        o = A()(t, "target.href", "");
                    r && o && (o.toLowerCase().includes("dictionary.com") ? this.mobileTabTrackEventAndRedirectToDestination(z.LINKID_HEADER_TAB_DCOM, Object(V.c)(), n) : o.toLowerCase().includes("thesaurus.com") && this.mobileTabTrackEventAndRedirectToDestination(z.LINKID_HEADER_TAB_TCOM, Object(V.i)(), n))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return a.a.createElement(Ge, {
                        isHamburgerMenuOpen: this.state.isHamburgerMenuOpen
                    }, a.a.createElement(Ve, {
                        isHamburgerMenuOpen: this.state.isHamburgerMenuOpen,
                        isMobile: this.props.isMobile
                    }, a.a.createElement(S.a, {
                        siteName: Be[this.props.app],
                        hamburgerIsOpen: function(t) {
                            return e.toggleHamburgerMenu(t)
                        },
                        iconOptions: Ke,
                        URL: this.props.URL,
                        onSearchDictionary: function(e) {
                            return $e({
                                site: Object(V.c)(),
                                term: e
                            })
                        },
                        onSearchThesaurus: function(e) {
                            return $e({
                                site: Object(V.i)(),
                                term: e
                            })
                        },
                        logoURL: Ze[this.props.app],
                        isMobile: this.props.isMobile,
                        headerTabClickCallback: this.headerTabClickCallback
                    }), a.a.createElement(We, null, T(this.props.route.routes, {
                        reportClickInner: function(t) {
                            return e.tracker.report(new P.ClickInnerEvent(t))
                        }
                    })), a.a.createElement(q, null)))
                }
            }]) && Ue(n.prototype, r), o && Ue(n, o), t
        }();
    Qe.propTypes = {
        app: l.a.string,
        isMobile: l.a.bool
    }, Qe.defaultProps = {
        app: null,
        isMobile: !1
    };
    var Ye = j(Object(c.b)(function(e) {
            return {
                app: ce(e),
                isMobile: ae(e),
                pageName: ie(e)
            }
        })(Qe)),
        Je = n(14),
        Xe = Object(k.default)("h2", {
            target: "eqxmpb20"
        })("text-align:center;height:12.9px;font-size:20px;margin:10px 10px 25px;border-bottom:solid 0.5px ", Te, ";font-family:Arial,serif;@media (max-width:", Pe, "px){height:9px;font-size:14px;}"),
        et = Object(k.default)("span", {
            target: "eqxmpb21"
        })("z-index:2;background-color:", _e, ";padding-left:10px;padding-right:10px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:", Ie, ";text-transform:uppercase;font-weight:normal;"),
        tt = function(e) {
            var t = e.title,
                n = e.id;
            return a.a.createElement(Xe, {
                id: n
            }, a.a.createElement(et, null, t))
        };
    tt.propTypes = {
        title: l.a.string,
        id: l.a.string.isRequired
    }, tt.defaultProps = {
        title: ""
    };
    var nt = tt,
        rt = Object(k.default)("article", {
            target: "e4a94py0"
        })("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-bottom:20px;width:calc(33.33% - 8px);display:inline-block;&.cardIndex0,&.cardIndex1{order:0;}&.cardIndex2,&.cardIndex3{order:2;}", function(e) {
            return e.collapseWide && "\n    @media (max-width: ".concat(je, "px) {\n      width: calc(50% - 8px);\n      margin-bottom: 12px;\n    }\n  ")
        }, ";", function(e) {
            return e.showVerticalAt && "\n    @media (max-width: ".concat(e.showVerticalAt, "px) {\n      width: 100%;\n      min-height: 106px;\n      margin-bottom: 12px;\n    }\n  ")
        }, ";"),
        ot = Object(k.default)("a", {
            target: "e4a94py1"
        })("color:", Ie, ";display:block;position:relative;text-decoration:none;"),
        it = Object(k.default)("header", {
            target: "e4a94py2"
        })(function(e) {
            return e.showVerticalAt && "\n    @media (max-width: ".concat(e.showVerticalAt, "px) {\n      width: 100%;\n      min-height: 106px;\n      display: flex;\n      flex: 1 0 auto;\n      background-color: ").concat(we, ";\n      justify-content: center;\n    }\n  ")
        }, ";"),
        at = Object(k.default)("h2", {
            target: "e4a94py3"
        })("flex-direction:column;font-family:Arial,serif;justify-content:center;background:", we, ";font-weight:400;margin:-48px auto 0;padding:12px;position:relative;text-align:center;width:calc(100% - 72px);z-index:2;display:flex;height:auto;min-height:77px;color:", Ie, ";font-size:16px;line-height:61px;@media (max-width:", je, "px){line-height:initial;padding:25px 15px;}", function(e) {
            return e.showVerticalAt ? "\n    @media (max-width: ".concat(e.showVerticalAt, "px) {\n      margin: 0;\n      width: 100%;\n      display: inline-flex;\n    }\n  ") : "\n    @media (max-width: ".concat(Pe, "px) {\n    margin: -24px auto 0;\n    width: calc(100% - 36px);\n    padding: 8px;\n  }\n  ")
        }, ";"),
        ct = Object(k.default)("span", {
            target: "e4a94py4"
        })("background:", we, ";margin:0 auto;padding:0;height:auto;line-height:19px;", function(e) {
            return e.showVerticalAt ? "\n    @media (max-width: ".concat(e.showVerticalAt, "px) {\n      font-size: 14px;\n      margin: 0;\n      text-align: left;\n    }\n  ") : "\n    @media (max-width: ".concat(Pe, "px) {\n      font-size: 14px;\n    }\n  ")
        }, ";"),
        ut = Object(k.default)("img", {
            target: "e4a94py5"
        })("border:8px solid ", we, ";height:auto;width:100%;", function(e) {
            return e.showVerticalAt && "\n    @media (max-width: ".concat(e.showVerticalAt, "px) {\n      border: 8px solid ").concat(we, ";\n      max-width: 144px;\n      max-height: 106px;\n      align-self: center;\n    }\n  ")
        }, ";"),
        lt = function(e) {
            var t = e.title,
                n = e.image,
                r = e.url,
                o = e.linkid,
                i = e.id,
                c = e.cardIndex,
                u = e.collapseWide,
                l = e.showVerticalAt;
            return a.a.createElement(rt, {
                id: i,
                className: "cardIndex".concat(c),
                collapseWide: u,
                showVerticalAt: l
            }, a.a.createElement(ot, {
                href: r,
                "data-linkid": o
            }, a.a.createElement(it, {
                showVerticalAt: l
            }, a.a.createElement(ut, {
                src: "".concat(n, "?w=284&h=240"),
                width: "100%",
                height: "240px",
                alt: t,
                showVerticalAt: l
            }), a.a.createElement(at, {
                showVerticalAt: l
            }, a.a.createElement(ct, {
                showVerticalAt: l
            }, t)))))
        };
    lt.propTypes = {
        title: l.a.string,
        image: l.a.string,
        url: l.a.string,
        linkid: l.a.string,
        id: l.a.string,
        cardIndex: l.a.number,
        collapseWide: l.a.bool,
        showVerticalAt: l.a.number
    }, lt.defaultProps = {
        cardIndex: 0,
        linkid: void 0,
        collapseWide: !1,
        showVerticalAt: void 0,
        title: null,
        image: null,
        url: null,
        id: null
    };
    var st = lt,
        ft = Object(k.default)("div", {
            target: "e1be0rkq0"
        })("display:flex;flex-flow:row wrap;justify-content:space-between;@media (max-width:", Pe, "px){flex-direction:column;max-width:500px;margin:auto;}"),
        pt = function(e) {
            var t = e.feeds;
            return t && Array.isArray(t) ? a.a.createElement("div", null, t.map(function(e, t) {
                var n = "editorialContentRow".concat(t);
                return a.a.createElement("section", {
                    key: n
                }, a.a.createElement(nt, {
                    id: n,
                    title: e.title
                }), a.a.createElement(ft, null, e.feed.map(function(e, n) {
                    var r = "editorialContentItem".concat(t).concat(n);
                    return a.a.createElement(st, {
                        id: r,
                        key: r,
                        title: e.title,
                        url: e.url,
                        image: e.image,
                        description: e.description,
                        showVerticalAt: 700,
                        linkid: void 0 !== z.LINKID_EDITORIAL_ARTICLES_CONTENTCARD[t] ? z.LINKID_EDITORIAL_ARTICLES_CONTENTCARD[t][n] : ""
                    })
                })))
            })) : null
        };
    pt.propTypes = {
        feeds: l.a.arrayOf(l.a.shape({
            title: l.a.string,
            feed: l.a.arrayOf(l.a.shape({
                title: l.a.string,
                url: l.a.string,
                image: l.a.string,
                description: l.a.string
            }))
        }))
    }, pt.defaultProps = {
        feeds: null
    };
    var dt = pt,
        ht = Object(k.default)("aside", {
            target: "ew5gjhf0"
        })("margin:0 auto;text-align:center;&.wide-ad{clear:both;padding:15px 0;}"),
        mt = function(e) {
            var t = e.adId,
                n = e.adStyle;
            return a.a.createElement(ht, {
                id: t,
                className: n || void 0
            }, a.a.createElement("script", {
                dangerouslySetInnerHTML: {
                    __html: "if (window.googletag) {googletag.cmd.push(function() { googletag.display('".concat(t, "'); });} else {console.error('googletag not defined, ").concat(t, "');}")
                }
            }))
        };
    mt.propTypes = {
        adId: l.a.string.isRequired,
        adStyle: l.a.string
    }, mt.defaultProps = {
        adStyle: ""
    };
    var bt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        gt = Object(k.default)("ol", {
            target: "ex77a8l0"
        })("list-style:none;text-transform:uppercase;text-align:center;padding:0;display:flex;flex-flow:row wrap;justify-content:center;margin:16px auto;"),
        yt = Object(k.default)("li", {
            target: "ex77a8l1"
        })("width:30px;height:30px;line-height:30px;border-radius:50%;float:left;margin:5px 7px 0 0;font-family:Arial,serif;font-size:13.6px;text-align:center;&:hover{font-size:16px;line-height:35px;width:35px;height:35px;margin:0 2px 0 -5px;cursor:pointer;}&.dcom{background:", Oe, ";}&.tcom{background:", Ae, ";}"),
        vt = Object(k.default)("a", {
            target: "ex77a8l2"
        })("color:", we, ";display:block;text-decoration:none;"),
        Ot = function(e) {
            var t = e.app,
                n = t === H.APPLICATION.TCOM ? "Thesaurus" : "Dictionary";
            return a.a.createElement("section", null, a.a.createElement(nt, {
                id: "browseAZTitle",
                title: "Browse ".concat(n)
            }), a.a.createElement(gt, {
                "data-linkid": z.LINKID_BROWSE_AZ
            }, a.a.createElement(yt, {
                id: "browseAZItemHash",
                className: t,
                "data-item": "#"
            }, a.a.createElement(vt, {
                href: "/list/0"
            }, "#")), bt.map(function(e) {
                return a.a.createElement(yt, {
                    id: "browseAZItem".concat(e),
                    key: "browseAZItem".concat(e),
                    className: t,
                    "data-item": e.toUpperCase()
                }, a.a.createElement(vt, {
                    href: "/list/".concat(e)
                }, e))
            })))
        };
    Ot.propTypes = {
        app: l.a.string
    }, Ot.defaultProps = {
        app: H.APPLICATION.DCOM
    };
    var xt = Ot,
        wt = Object(k.default)("div", {
            target: "e31vfen0"
        })("margin:0 auto 50px;display:flex;flex-wrap:wrap;justify-content:space-around;min-height:25px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;@media (max-width:", Pe, "px){justify-content:center;}"),
        Et = Object(k.default)("a", {
            target: "e31vfen1"
        })("padding:7px 0;text-align:center;color:", we, ";background-color:", xe, ";text-transform:uppercase;text-decoration:none;font-size:14px;min-width:128px;display:flex;justify-content:center;flex-direction:column;&:hover{transform:scale(1.1,1.1);box-shadow:0 1px 4px 0 rgba(0,0,0,0.24);}flex:0 0 calc(20% - 8px);@media (max-width:", Pe, "px){flex:0 0 calc(40% - 4px);margin:4px;padding:10px 0;}"),
        _t = function() {
            return a.a.createElement(wt, null, a.a.createElement(Et, {
                href: "".concat(H.EDITORIAL_URL, "/list/slang/")
            }, "slang"), a.a.createElement(Et, {
                href: "".concat(H.EDITORIAL_URL, "/list/emoji/")
            }, "emoji"), a.a.createElement(Et, {
                href: "".concat(H.EDITORIAL_URL, "/list/acronyms/")
            }, "acronyms"), a.a.createElement(Et, {
                href: "".concat(H.EDITORIAL_URL, "/list/pop-culture/")
            }, "pop culture"), a.a.createElement(Et, {
                href: "".concat(H.EDITORIAL_URL, "/list/word-facts/")
            }, "more"))
        },
        Tt = {
            dcom: "Dictionary.com is the world’s leading online source for English definitions, synonyms, word origins, audio pronunciations, example sentences, slang phrases, idioms, word games, legal and medical terms, Word of the Day and more. For over 20 years, Dictionary.com has been helping millions of people improve their use of the English language with its free digital services.",
            tcom: "Thesaurus.com is the world’s largest and most trusted free online thesaurus brought to you by Dictionary.com. For over 20 years, Thesaurus.com has been helping millions of people improve their mastery of the English language and find the precise word with over 3 million synonyms and antonyms and the ability to filter search results by relevance, word length, and complexity"
        },
        It = {
            dcom: "About Dictionary.com",
            tcom: "About Thesaurus.com"
        },
        At = Object(k.default)("section", {
            target: "e1k16nnb0"
        })("font-family:Verdana;text-align:center;margin:auto auto 20px;min-height:44px;height:auto;font-size:12px;line-height:1.57;color:", Ee, ";padding:0 15px;"),
        kt = Object(k.default)("h3", {
            target: "e1k16nnb1"
        })("font-size:inherit;font-weight:inherit;"),
        Ct = function(e) {
            var t = e.activeApp,
                n = void 0 === t ? H.APPLICATION.DCOM : t;
            return a.a.createElement(At, null, a.a.createElement("h2", {
                hidden: !0
            }, It[n]), a.a.createElement(kt, null, Tt[n]))
        };
    Ct.contextTypes = {
        activeApp: l.a.string
    };
    var St = Ct,
        jt = n(26),
        Pt = n.n(jt),
        Mt = n(161),
        Lt = n(162),
        Rt = n.n(Lt),
        Nt = n(163),
        Dt = n.n(Nt);

    function Ut(e) {
        return (Ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ft(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function zt(e) {
        return (zt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function qt(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Ht(e, t) {
        return (Ht = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Wt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Gt = "error",
        Vt = "okay",
        Bt = "init",
        Zt = Object(k.keyframes)("from{top:-500px;opacity:0;}to{top:0;opacity:1;}"),
        Kt = Object(k.default)("div", {
            target: "eeni1fa0"
        })("display:initial;position:fixed;z-index:100;padding:110px 0 0;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.6);", function(e) {
            return e.animation && "\n      visibility: hidden;\n      opacity: 0;\n      transition: visibility 0s 3s, opacity 1s linear 1s;\n  "
        }, ";"),
        $t = Object(k.default)("div", {
            target: "eeni1fa1"
        })("position:relative;margin:auto;padding:0;width:400px;border-radius:5px;background-color:white;box-shadow:0 5px 10px 0.5px rgba(0,0,0,0.2);font-size:20px;letter-spacing:0.4px;animation-name:", Zt, ";animation-duration:0.4s;"),
        Qt = Object(k.default)("div", {
            target: "eeni1fa2"
        })("height:260px;border-top-left-radius:5px;border-top-right-radius:5px;background:", Oe, " url(", function(e) {
            return Object(me.a)(Dt.a, e.activeApp)
        }, ") no-repeat center;"),
        Yt = Object(k.default)("div", {
            target: "eeni1fa3"
        })("background:url(", function(e) {
            return Object(me.a)(Rt.a, e.activeApp)
        }, ") no-repeat center;float:left;opacity:0.8;margin:14px;font-weight:normal;cursor:pointer;width:18px;height:18px;"),
        Jt = Object(k.default)("div", {
            target: "eeni1fa4"
        })("padding:25px;"),
        Xt = Object(k.default)("input", {
            target: "eeni1fa5"
        })("width:100%;background-color:", Te, ";border:0;border-bottom:3px ", Te, " solid;margin-bottom:15px;border-radius:3px;height:40px;padding:10px;outline:none;color:", Ie, ";font:11px system-ui;line-height:inherit;&:focus{outline:none;border-bottom:3px ", Oe, " solid;}border-bottom:", function(e) {
            return e.validationStatus === Gt && "3px solid ".concat(ke, " !important;\n  }")
        }, ";border-bottom:", function(e) {
            return e.validationStatus === Vt && "3px solid ".concat(Ce, " !important;\n  }")
        }, ";"),
        en = Object(k.default)("div", {
            target: "eeni1fa6"
        })("font-family:Arial,serif;font-size:26px;margin-bottom:15px;text-align:center;color:", Ie, ";"),
        tn = Object(k.default)("div", {
            target: "eeni1fa7"
        })("font-family:Arial,serif;margin-bottom:15px;font-size:15px;color:", Ie, ";"),
        nn = Object(k.default)("div", {
            target: "eeni1fa8"
        })("font-family:Verdana,serif;text-align:center;font-size:12px;color:", ke, ";&::before{content:'EMAIL INVALID PLEASE CORRECT';}"),
        rn = Object(k.default)("button", {
            target: "eeni1fa9"
        })("margin-left:16px;background-color:", Oe, ";box-shadow:0 1px 2px 0 rgba(0,0,0,0.2),0 0 2px 0 rgba(0,0,0,0.1);color:", we, ";width:320px;height:40px;padding:0;border:0;border-radius:3px;cursor:pointer;font:11px system-ui;"),
        on = Object(k.default)("button", {
            target: "eeni1fa10"
        })("margin-left:16px;background-color:", Te, ";box-shadow:0 1px 2px 0 rgba(0,0,0,0.2),0 0 2px 0 rgba(0,0,0,0.1);color:", we, ";width:320px;height:40px;padding:0;border:0;border-radius:3px;font:11px system-ui;"),
        an = function(e) {
            function t(e) {
                var n, r, o;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, o = zt(t).call(this, e), n = !o || "object" !== Ut(o) && "function" != typeof o ? qt(r) : o, Wt(qt(n), "handleSubmit", function(e) {
                    e && e.preventDefault && e.preventDefault(), e && e.stopPropagation && e.stopPropagation(), n.validateEmail() ? n.subscribeToWotd() : n.setState({
                        status: Gt
                    })
                }), Wt(qt(n), "handleTermChange", function(e) {
                    n.setState({
                        email: e.target.value
                    }), n.validateEmail(e.target.value) && n.setState({
                        status: Vt
                    })
                }), n.state = {
                    email: "",
                    status: Bt,
                    animation: !1
                }, n.textInput = a.a.createRef(), n.form = a.a.createRef(), n.focusTextInput = n.focusTextInput.bind(qt(n)), n
            }
            var n, r, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ht(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "componentDidUpdate",
                value: function() {
                    this.props.isOpen && this.focusTextInput()
                }
            }, {
                key: "getText",
                value: function() {
                    return "success" === this.state.status ? "You have successfully subscribed to the Word of the Day email from Dictionary.com." : "Get the Word of the Day email from Dictionary.com and expand your vocabulary. We will send you a new word each day with its definition, audio pronunciation, origin and more!"
                }
            }, {
                key: "getTrackingParameters",
                value: function() {
                    var e = oe();
                    return {
                        pageName: e.pageName,
                        placement: "HP",
                        ld: e.ab,
                        siteName: e.siteName
                    }
                }
            }, {
                key: "getTitle",
                value: function() {
                    return "success" === this.state.status ? "Thank You!" : "Learn a New Word Every Day"
                }
            }, {
                key: "subscribeToWotd",
                value: function() {
                    var e = this;
                    Pt()("".concat(H.EMAIL_SIGNUP_ENDPOINT, "?").concat(Object(Mt.stringify)(this.getTrackingParameters())), {
                        method: "POST",
                        credentials: "include",
                        host: "app.dictionary.com",
                        body: new FormData(this.form.current)
                    }).then(function(e) {
                        return e.json()
                    }).then(function(t) {
                        1 === t.status ? (e.setState({
                            status: "success",
                            animation: !0
                        }), setTimeout(function() {
                            e.setState({
                                animation: !1
                            }), e.close()
                        }, 2500)) : e.setState({
                            status: "error"
                        })
                    })
                }
            }, {
                key: "validateEmail",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.email;
                    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
                }
            }, {
                key: "focusTextInput",
                value: function() {
                    this.textInput.current.focus()
                }
            }, {
                key: "close",
                value: function() {
                    this.props.isOpen && this.props.onClose()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return !1 === this.props.isOpen ? null : a.a.createElement(Kt, {
                        animation: this.state.animation,
                        onClick: function() {
                            return e.close()
                        }
                    }, a.a.createElement($t, {
                        onClick: function(e) {
                            e.stopPropagation()
                        }
                    }, a.a.createElement(Qt, {
                        id: "subscribe-modal-envelope",
                        activeApp: this.props.activeApp
                    }, a.a.createElement(Yt, {
                        id: "subscribe-modal-close",
                        activeApp: this.props.activeApp,
                        onClick: function() {
                            return e.close()
                        }
                    })), a.a.createElement(Jt, null, a.a.createElement(en, {
                        id: "subscribe-modal-title"
                    }, this.getTitle()), a.a.createElement(tn, {
                        id: "subscribe-modal-text"
                    }, this.getText()), this.state.status === Gt && a.a.createElement(nn, null), a.a.createElement("form", {
                        onSubmit: this.handleSubmit,
                        ref: this.form
                    }, a.a.createElement(Xt, {
                        type: "text",
                        id: "subscribe-input",
                        autoComplete: "off",
                        onChange: this.handleTermChange,
                        value: this.state.email,
                        autoCapitalize: "off",
                        autoCorrect: "off",
                        name: "email",
                        innerRef: this.textInput,
                        validationStatus: this.state.status
                    }), a.a.createElement("input", {
                        type: "hidden",
                        name: "list",
                        value: "wordoftheday"
                    }), a.a.createElement("input", {
                        type: "hidden",
                        name: "pageName",
                        value: this.getTrackingParameters().pageName
                    }), a.a.createElement("div", null, "success" === this.state.status ? a.a.createElement(on, {
                        id: "wotd-subscribe-done",
                        type: "close",
                        onClick: function() {
                            return e.close()
                        }
                    }, "DONE") : a.a.createElement(rn, {
                        id: "wotd-subscribe-submit",
                        type: "submit"
                    }, "SIGN-UP"))))))
                }
            }]) && Ft(n.prototype, r), o && Ft(n, o), t
        }();
    an.propTypes = {
        isOpen: l.a.bool.isRequired,
        onClose: l.a.func.isRequired,
        activeApp: l.a.string
    }, an.defaultProps = {
        activeApp: H.APPLICATION.DCOM
    };
    var cn = an;

    function un(e) {
        return (un = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ln(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function sn(e, t) {
        return !t || "object" !== un(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function fn(e) {
        return (fn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function pn(e, t) {
        return (pn = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var dn = Object(k.default)("div", {
            target: "e1tlgrv80"
        })("background:", xe, ";border:0;border-radius:3px;color:", we, ";cursor:pointer;padding:8px 20px;font-family:Arial,serif;text-transform:uppercase;@media (max-width:", Le, "px){display:none;}"),
        hn = function(e) {
            function t(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (n = sn(this, fn(t).call(this, e))).state = {
                    isModalOpen: !1
                }, n
            }
            var n, r, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && pn(e, t)
            }(t, a.a.Component), n = t, (r = [{
                key: "openModal",
                value: function() {
                    this.setState({
                        isModalOpen: !0
                    })
                }
            }, {
                key: "closeModal",
                value: function() {
                    this.setState({
                        isModalOpen: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return a.a.createElement("div", null, a.a.createElement(dn, {
                        id: "wotdModal-open",
                        onClick: function() {
                            return e.openModal()
                        }
                    }, "Subscribe Now"), a.a.createElement(cn, {
                        isOpen: this.state.isModalOpen,
                        activeApp: this.props.activeApp,
                        onClose: function() {
                            return e.closeModal()
                        }
                    }))
                }
            }]) && ln(n.prototype, r), o && ln(n, o), t
        }();
    hn.propTypes = {
        activeApp: u.string
    }, hn.defaultProps = {
        activeApp: H.APPLICATION.DCOM
    };
    var mn = hn,
        bn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        gn = "small",
        yn = "medium",
        vn = "big",
        On = n(164),
        xn = n.n(On),
        wn = n(165),
        En = n.n(wn),
        _n = n(166),
        Tn = n.n(_n),
        In = n(167),
        An = Object(k.default)("div", {
            target: "earqlhe0"
        })("background:", we, ";font-family:Verdana;margin:6px auto 0;padding:48px 30px 45px;position:relative;text-align:center;max-width:300px;@media (min-width:", Me, "px) and (max-width:", Pe, "px){max-width:400px;}"),
        kn = Object(k.default)("p", {
            target: "earqlhe1"
        })("font-size:12px;margin-bottom:20px;margin-top:0;text-transform:initial;"),
        Cn = Object(k.default)("div", {
            target: "earqlhe2"
        })("margin-bottom:5px;"),
        Sn = Object(k.default)("a", {
            target: "earqlhe3"
        })("color:", Ie, ";display:inline-block;font-family:Verdana;font-size:22px;height:auto;margin-bottom:5px;padding-top:0;text-decoration:none;&:hover{color:", Oe, ";text-decoration:underline;}", function(e) {
            return e.wotdClass === vn && "font-size: 26px;"
        }, ";", function(e) {
            return e.wotdClass === yn && "font-size: 22px;"
        }, ";", function(e) {
            return e.wotdClass === gn && " font-size: 18px;\n      line-height: 26px;"
        }, ";"),
        jn = Object(k.default)("button", {
            target: "earqlhe4"
        })("background:url(", function(e) {
            return Object(me.a)(xn.a, e.activeApp)
        }, ") no-repeat;background-size:100%;border:none;cursor:pointer;display:inline-block;height:18px;float:none;margin-left:10px;margin-top:0;outline:none;position:relative;top:-3px;width:18px;vertical-align:middle;padding:0;"),
        Pn = Object(k.default)("div", {
            target: "earqlhe5"
        })("font-size:12px;.italic{font-style:italic;}.bold{font-weight:bold;}"),
        Mn = Object(k.default)("span", {
            target: "earqlhe6"
        })("border-right:1px solid ", Ie, ";font-style:italic;margin-right:4px;padding-right:4px;"),
        Ln = Object(k.default)("hr", {
            target: "earqlhe7"
        })("background:", Te, ";border:0;height:1px;margin:28px auto;width:80px;@media (max-width:", Le, "px){display:none;}"),
        Rn = Object(k.default)("p", {
            target: "earqlhe8"
        })("font-size:12px;@media (max-width:", Le, "px){display:none;}"),
        Nn = Object(k.default)("div", {
            target: "earqlhe9"
        })("background:url(", function(e) {
            return Object(me.a)(En.a, e.activeApp)
        }, ");display:block;left:-42%;max-width:none;padding:5px 50px 5px 20px;position:absolute;transform:rotate(-90deg);transform-origin:center top;top:39%;width:auto;white-space:nowrap;@media (min-width:", Me, "px) and (max-width:", Pe, "px){left:-32%;}"),
        Dn = Object(k.default)("div", {
            target: "earqlhe10"
        })("background:", Ae, ";left:-17px;padding:8px 10px 5px;position:absolute;top:-8px;"),
        Un = Object(k.default)("div", {
            target: "earqlhe11"
        })("background:url(", function(e) {
            return Object(me.a)(Tn.a, e.activeApp)
        }, ") no-repeat;background-size:105%;display:inline-block;height:22px;width:16px;"),
        Fn = function(e) {
            var t, n = e.term,
                r = e.audioSourceLink,
                o = e.date,
                i = e.pos,
                c = e.pronunciation,
                u = e.activeApp,
                l = e.reportClickInner;
            return a.a.createElement(An, {
                id: "contentWotdRoot"
            }, o && a.a.createElement(kn, null, function(e) {
                var t = e.substring(5, 7),
                    n = parseInt("0" === t[0] ? t[1] : t, 10);
                return n < 1 || n > 12 ? "" : bn[n - 1]
            }(o), " ", o.substring(8, 10), ", ", o.substring(0, 4)), a.a.createElement(Cn, null, a.a.createElement(Sn, {
                wotdClass: (t = n, t.length >= 9 && t.length < 14 ? yn : t.length >= 14 ? gn : vn),
                href: "".concat(Object(V.b)(), "://").concat(H.DCOM_URL, "/e/word-of-the-day/"),
                "data-linkid": z.LINKID_WOTD,
                id: "wotdAudio-play"
            }, n), r && a.a.createElement(jn, {
                href: r,
                activeApp: u,
                onClick: function(e) {
                    l(In.CLICKINNER_AUDIO_BUTTON), e.preventDefault();
                    var t = document.createElement("audio");
                    t.setAttribute("src", r), t.play()
                },
                id: "contentWotdAudio"
            })), a.a.createElement(Pn, null, i && a.a.createElement(Mn, {
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }), c && a.a.createElement("span", {
                dangerouslySetInnerHTML: {
                    __html: c
                }
            })), a.a.createElement(Ln, null), a.a.createElement(Rn, null, "SIGN UP FOR OUR NEWSLETTER"), a.a.createElement(mn, {
                activeApp: u
            }), a.a.createElement(Nn, {
                activeApp: u
            }, a.a.createElement("span", null, "WORD OF THE DAY")), a.a.createElement(Dn, null, a.a.createElement(Un, {
                activeApp: u
            })))
        };
    Fn.propTypes = {
        term: l.a.string,
        audioSourceLink: l.a.string,
        pronunciation: l.a.string,
        pos: l.a.string,
        date: l.a.string,
        reportClickInner: u.func,
        activeApp: l.a.string
    }, Fn.defaultProps = {
        reportClickInner: function() {
            return null
        },
        pronunciation: "",
        term: "",
        audioSourceLink: "",
        date: "",
        pos: "",
        activeApp: H.APPLICATION.DCOM
    };
    var zn = Fn,
        qn = n(168),
        Hn = n.n(qn),
        Wn = Object(k.default)("div", {
            target: "enjjnkv0"
        })("padding:0 30px;height:250px;margin-bottom:21px;border-radius:2px;background-color:", Te, ";box-shadow:-2px -2px 15px 0 rgba(0,0,0,0.1),0 2px 5px 0 rgba(0,0,0,0.1);font-family:Verdana,serif;font-size:18px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:", we, ";text-align:center;"),
        Gn = Object(k.default)("div", {
            target: "enjjnkv1"
        })("width:50px;height:50px;margin-bottom:16px;background:url(", function(e) {
            return Object(me.a)(Hn.a, e.activeApp)
        }, ") no-repeat center;"),
        Vn = function(e) {
            var t = e.activeApp;
            return a.a.createElement(Wn, null, a.a.createElement(Gn, {
                activeApp: t
            }), a.a.createElement("div", null, "We’re sorry, this content is currently unavailable."))
        };

    function Bn() {
        return (Bn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var Zn = Object(k.default)("article", {
            target: "en2ypeq0"
        })("font-family:Arial,serif;margin-bottom:20px;width:calc(33.33% - 8px);order:1;@media (max-width:", je, "px){width:calc(50% - 8px);order:4;}@media (max-width:", Pe, "px){flex:0 0 100%;order:3;}"),
        Kn = function(e) {
            var t = e.wotd,
                n = e.activeApp,
                r = e.reportClickInner;
            return t ? a.a.createElement(Zn, null, a.a.createElement(zn, Bn({}, t, {
                activeApp: n,
                reportClickInner: r
            }))) : a.a.createElement(Zn, null, a.a.createElement(Vn, {
                activeApp: n
            }))
        };
    Kn.propTypes = {
        wotd: Object(u.shape)({
            term: u.string,
            audioSourceLink: u.string,
            wotdPageLink: u.string,
            date: u.string,
            pos: u.string,
            pronunciation: u.string
        }),
        activeApp: u.string
    }, Kn.defaultProps = {
        wotd: {},
        activeApp: H.APPLICATION.DCOM
    };
    var $n = Kn,
        Qn = Object(k.default)("div", {
            target: "e11ug2dp0"
        })("display:flex;flex-flow:row wrap;justify-content:space-between;margin:auto;@media (min-width:", Pe, "px) and (max-width:", je, "px){width:", Pe - 16, "px;}"),
        Yn = Object(k.default)("article", {
            target: "e11ug2dp1"
        })("order:3;width:calc(33.33% - ", 8, "px);@media (max-width:", je, "px){width:calc(50% - ", 8, "px);}@media (max-width:", Pe, "px){flex:0 0 100%;order:4;}"),
        Jn = Object(k.default)("article", {
            target: "e11ug2dp2"
        })("width:calc(33.33% - 8px);order:2;@media (max-width:", je, "px){width:100%;}@media (max-width:", Pe, "px){flex:0 0 100%;}"),
        Xn = function(e) {
            var t = e.wotd,
                n = e.adId,
                r = e.feed,
                o = void 0 === r ? [] : r,
                i = e.activeApp,
                c = e.reportClickInner;
            return a.a.createElement(Qn, null, !o.length && a.a.createElement(Jn, null, a.a.createElement(Vn, null)), o.map(function(e, t) {
                var n = "editorialContentItem".concat(t);
                return a.a.createElement(st, {
                    id: n,
                    key: n,
                    title: e.title,
                    url: e.url,
                    image: e.image,
                    description: e.description,
                    cardIndex: t,
                    linkid: z.LINKID_EDITORIAL_HIGHLIGHTS_CONTENTCARD[t],
                    maxWidth: "364px",
                    collapseWide: !0
                })
            }), a.a.createElement($n, {
                wotd: t,
                activeApp: i,
                key: "highLightsLeft1",
                reportClickInner: c
            }), a.a.createElement(Yn, null, a.a.createElement(mt, {
                adId: n,
                key: "highLightsAd"
            })))
        };
    Xn.propTypes = {
        wotd: Object(u.shape)({
            term: u.string,
            audioSourceLink: u.string,
            wotdPageLink: u.string,
            date: u.string,
            pos: u.string,
            pronunciation: u.string
        }),
        feed: l.a.arrayOf(l.a.shape({
            title: l.a.string,
            url: l.a.string,
            image: l.a.string,
            description: l.a.string
        })),
        activeApp: l.a.string
    }, Xn.defaultProps = {
        wotd: null,
        feed: null,
        activeApp: H.APPLICATION.DCOM
    };
    var er = Xn,
        tr = n(38),
        nr = function(e) {
            var t = e.highlightsEditorialContent,
                n = e.mainEditorialContent,
                r = e.wotd,
                o = e.isMobile,
                i = e.app,
                c = e.reportClickInner;
            return a.a.createElement("main", null, o ? a.a.createElement(mt, {
                adId: tr.a[i].mobileTop,
                adStyle: "wide-ad"
            }) : a.a.createElement(mt, {
                adId: tr.a[i].top,
                adStyle: "wide-ad"
            }), a.a.createElement(er, {
                wotd: r,
                adId: tr.a[i].right,
                feed: t,
                reportClickInner: c,
                activeApp: i
            }), a.a.createElement(dt, {
                feeds: n
            }), o ? a.a.createElement(mt, {
                adId: tr.a[i].mobileBottom,
                adStyle: "wide-ad"
            }) : a.a.createElement(mt, {
                adId: tr.a[i].bottom,
                adStyle: "wide-ad"
            }), a.a.createElement(xt, {
                app: i
            }), a.a.createElement(_t, null), a.a.createElement(St, {
                activeApp: i
            }))
        };
    nr.propTypes = {
        highlightsEditorialContent: l.a.arrayOf(l.a.shape({
            title: l.a.string,
            url: l.a.string,
            image: l.a.string
        })),
        mainEditorialContent: l.a.arrayOf(l.a.shape({
            title: l.a.string,
            feed: l.a.arrayOf(l.a.shape({
                title: l.a.string,
                url: l.a.string,
                image: l.a.string
            }))
        })),
        wotd: l.a.shape({}),
        isMobile: l.a.bool.isRequired,
        app: l.a.string,
        reportClickInner: l.a.func.isRequired
    }, nr.defaultProps = {
        highlightsEditorialContent: [],
        mainEditorialContent: [],
        wotd: {},
        app: H.APPLICATION.DCOM
    };
    var rr = nr,
        or = n(5),
        ir = (n(171), {
            keepAlive: !0,
            keepAliveMsecs: 5e3
        }),
        ar = function() {};
    if (!V.k) {
        var cr = new(n(345).Agent)(ir),
            ur = new(n(346).Agent)(ir);
        ar = function(e) {
            return {
                timeout: 5e3,
                headers: {
                    Connection: "keep-alive"
                },
                agent: e && 0 === e.indexOf("https") ? ur : cr
            }
        }
    }
    var lr = ar;

    function sr(e, t, n, r, o, i, a) {
        try {
            var c = e[i](a),
                u = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    var fr = lr(Object(V.d)()),
        pr = function() {
            return {
                type: or.API_EDITORIAL_NODATA
            }
        },
        dr = function() {
            return e = regeneratorRuntime.mark(function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t({
                                    type: or.API_EDITORIAL_REQUEST
                                }), e.prev = 1, e.next = 4, Pt()("".concat(Object(V.d)()), fr);
                            case 4:
                                n = e.sent, e.t0 = !0, e.next = e.t0 === (n.status >= 400 && n.status < 500) ? 8 : e.t0 === n.status >= 500 ? 10 : 12;
                                break;
                            case 8:
                                return t(pr()), e.abrupt("break", 16);
                            case 10:
                                return t({
                                    type: or.API_EDITORIAL_FAILURE
                                }), e.abrupt("break", 16);
                            case 12:
                                return e.next = 14, n.json();
                            case 14:
                                r = e.sent, t((o = r, {
                                    type: or.API_EDITORIAL_SUCCESS,
                                    data: o
                                }));
                            case 16:
                                e.next = 22;
                                break;
                            case 18:
                                e.prev = 18, e.t1 = e.catch(1), ne.error("dispatchEditorialDataRequest error:", e.t1), t(pr());
                            case 22:
                            case "end":
                                return e.stop()
                        }
                        var o
                    }, e, this, [
                        [1, 18]
                    ])
                }), t = function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            sr(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            sr(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    })
                },
                function(e) {
                    return t.apply(this, arguments)
                };
            var e, t
        };

    function hr(e, t, n, r, o, i, a) {
        try {
            var c = e[i](a),
                u = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    var mr = lr(Object(V.j)()),
        br = function() {
            return {
                type: or.API_WOTD_NODATA
            }
        },
        gr = function() {
            return e = regeneratorRuntime.mark(function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t({
                                    type: or.API_WOTD_REQUEST
                                }), e.prev = 1, e.next = 4, Pt()("".concat(Object(V.j)()), mr);
                            case 4:
                                n = e.sent, e.t0 = !0, e.next = e.t0 === (n.status >= 400 && n.status < 500) ? 8 : e.t0 === n.status >= 500 ? 10 : 12;
                                break;
                            case 8:
                                return t(br()), e.abrupt("break", 16);
                            case 10:
                                return t({
                                    type: or.API_WOTD_FAILURE
                                }), e.abrupt("break", 16);
                            case 12:
                                return e.next = 14, n.json();
                            case 14:
                                r = e.sent, t((o = r, {
                                    type: or.API_WOTD_SUCCESS,
                                    payload: o
                                }));
                            case 16:
                                e.next = 22;
                                break;
                            case 18:
                                e.prev = 18, e.t1 = e.catch(1), ne.error("dispatchWotdDataRequest error:", e.t1), t(br());
                            case 22:
                            case "end":
                                return e.stop()
                        }
                        var o
                    }, e, this, [
                        [1, 18]
                    ])
                }), t = function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            hr(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            hr(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    })
                },
                function(e) {
                    return t.apply(this, arguments)
                };
            var e, t
        };

    function yr(e, t, n, r, o, i, a) {
        try {
            var c = e[i](a),
                u = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    var vr = function() {
            return {
                type: or.MUP_FAILURE
            }
        },
        Or = function() {
            return {
                type: or.MUP_NODATA
            }
        },
        xr = function(e) {
            var t = e.mupApiEndpoint,
                n = e.site,
                r = e.geo,
                o = e.platform,
                i = e.page;
            return a = regeneratorRuntime.mark(function e(a) {
                    var c, u, l;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a({
                                    type: or.MUP_REQUEST
                                }), (c = lr(t)).method = "post", c.body = JSON.stringify({
                                    site: n,
                                    geo: r,
                                    platform: o,
                                    page: i
                                }), e.prev = 4, e.next = 7, Pt()("".concat(t), c);
                            case 7:
                                u = e.sent, e.t0 = !0, e.next = e.t0 === (u.status >= 400 && u.status < 500) ? 11 : e.t0 === u.status >= 500 ? 14 : 17;
                                break;
                            case 11:
                                return ne.error("mup failed with params", c.body), a(Or()), e.abrupt("break", 21);
                            case 14:
                                return ne.error("mup empty response with params", c.body), a(vr()), e.abrupt("break", 21);
                            case 17:
                                return e.next = 19, u.json();
                            case 19:
                                (l = e.sent) && l.profileNumber ? a((s = l, {
                                    type: or.MUP_SUCCESS,
                                    data: s
                                })) : (ne.error("mup empty response with params", c.body), a(vr()));
                            case 21:
                                e.next = 27;
                                break;
                            case 23:
                                e.prev = 23, e.t1 = e.catch(4), ne.error("dispatchMupRequest error:", e.t1), a(Or());
                            case 27:
                            case "end":
                                return e.stop()
                        }
                        var s
                    }, e, this, [
                        [4, 23]
                    ])
                }), c = function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(n, r) {
                        var o = a.apply(e, t);

                        function i(e) {
                            yr(o, n, r, i, c, "next", e)
                        }

                        function c(e) {
                            yr(o, n, r, i, c, "throw", e)
                        }
                        i(void 0)
                    })
                },
                function(e) {
                    return c.apply(this, arguments)
                };
            var a, c
        };

    function wr(e) {
        return (wr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Er(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Tr(e, t) {
        return !t || "object" !== wr(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Ir(e) {
        return (Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Ar(e, t) {
        return (Ar = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var kr = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Tr(this, Ir(t).apply(this, arguments))
            }
            var n, r, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ar(e, t)
            }(t, a.a.Component), n = t, o = [{
                key: "loadData",
                value: function(e) {
                    var t = e.store,
                        n = e.mupParams,
                        r = [t.dispatch(dr()), t.dispatch(gr())];
                    return Object(V.m)() && r.push(t.dispatch(xr(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                Er(e, t, n[t])
                            })
                        }
                        return e
                    }({}, n, {
                        page: "HP"
                    })))), Promise.all(r)
                }
            }], (r = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.app,
                        n = e.isMobile,
                        r = e.editorialData,
                        o = e.wotdData,
                        i = e.reportClickInner;
                    return a.a.createElement(rr, {
                        app: t,
                        isMobile: n,
                        highlightsEditorialContent: r.highlights,
                        mainEditorialContent: r.main,
                        wotd: o,
                        reportClickInner: i
                    })
                }
            }]) && _r(n.prototype, r), o && _r(n, o), t
        }(),
        Cr = j(Object(c.b)(function(e) {
            return {
                app: ce(e),
                isMobile: ae(e),
                editorialData: ue(e),
                wotdData: le(e)
            }
        }, function(e) {
            return {
                dispatchEditorialDataRequest: Object(Je.bindActionCreators)(dr, e)
            }
        })(kr)),
        Sr = n(172),
        jr = n.n(Sr);

    function Pr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Mr = function(e) {
            var t = e.json.data || [],
                n = e.page,
                r = e.offset,
                o = e.letter,
                i = e.json.meta && e.json.meta.totalResults ? e.json.meta.totalResults : 0;
            return t && !t.length ? null : !t[0] || t[0].displayForm || t[0].entry ? {
                meta: {
                    totalResults: i,
                    letter: o,
                    page: n,
                    offset: r
                },
                data: t.map(function(e) {
                    var t, n = (Pr(t = {}, "displayForm", e.displayForm || e.entry), Pr(t, "url", e.url || e.slug), t);
                    return e.tunaSlug && (n.alternativeSlug = e.tunaSlug), n
                })
            } : null
        },
        Lr = Object(k.default)("ul", {
            target: "e1j8zk4s0"
        })("list-style-type:circle;font-family:Helvetica;font-size:16px;line-height:19px;text-align:left;color:#428bca;a{color:inherit;}column-count:2;column-gap:2.5em;@media only screen and (max-width:", Se, "px){column-count:1;}"),
        Rr = Object(k.default)("a", {
            target: "e1j8zk4s1"
        })("text-decoration:none;"),
        Nr = function(e) {
            var t = e.entries,
                n = e.activeApp;
            return t && t.length ? t[0] && !t[0].displayForm ? null : a.a.createElement(Lr, null, t.map(function(e) {
                return e.url ? a.a.createElement("li", {
                    key: e.url
                }, a.a.createElement(Rr, {
                    href: "".concat(K(n, e.url))
                }, e.displayForm), e.alternativeSlug ? a.a.createElement("span", null, " | ") : null, e.alternativeSlug ? a.a.createElement(Rr, {
                    href: "".concat(B(e.alternativeSlug))
                }, "".concat(e.displayForm, " synonyms ")) : null) : null
            })) : null
        };
    Nr.propTypes = {
        entries: l.a.array
    }, Nr.defaultProps = {
        entries: null
    };
    var Dr = Nr;

    function Ur(e, t, n, r, o, i, a) {
        try {
            var c = e[i](a),
                u = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    var Fr = function() {
            return {
                type: or.LISTAZ_CONTENT_FAILURE
            }
        },
        zr = function(e, t, n, r) {
            return o = regeneratorRuntime.mark(function o(i) {
                    var a, c;
                    return regeneratorRuntime.wrap(function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return i({
                                    type: or.LISTAZ_CONTENT_REQUEST
                                }), o.prev = 1, o.next = 4, fetch(e, lr(e));
                            case 4:
                                a = o.sent, o.t0 = !0, o.next = o.t0 === a.status >= 400 ? 8 : 10;
                                break;
                            case 8:
                                return i(Fr()), o.abrupt("break", 14);
                            case 10:
                                return o.next = 12, a.json();
                            case 12:
                                (c = o.sent) && Array.isArray(c.data) && c.data.length ? i((u = {
                                    json: c,
                                    letter: t,
                                    page: n,
                                    offset: r
                                }, {
                                    type: or.LISTAZ_CONTENT_SUCCESS,
                                    data: u
                                })) : i(Fr());
                            case 14:
                                o.next = 20;
                                break;
                            case 16:
                                o.prev = 16, o.t1 = o.catch(1), ne.error("dispatchListAZDataRequest error:", o.t1), i(Fr());
                            case 20:
                            case "end":
                                return o.stop()
                        }
                        var u
                    }, o, this, [
                        [1, 16]
                    ])
                }), i = function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(n, r) {
                        var i = o.apply(e, t);

                        function a(e) {
                            Ur(i, n, r, a, c, "next", e)
                        }

                        function c(e) {
                            Ur(i, n, r, a, c, "throw", e)
                        }
                        a(void 0)
                    })
                },
                function(e) {
                    return i.apply(this, arguments)
                };
            var o, i
        };

    function qr(e) {
        return (qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Hr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Wr(e, t) {
        return !t || "object" !== qr(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Gr(e) {
        return (Gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Vr(e, t) {
        return (Vr = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var Br = Object(k.default)("main", {
            target: "exfcwu50"
        })(),
        Zr = Object(k.default)("div", {
            target: "exfcwu51"
        })("padding-top:4px;padding-bottom:12px;"),
        Kr = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Wr(this, Gr(t).apply(this, arguments))
            }
            var n, r, o;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Vr(e, t)
            }(t, a.a.Component), n = t, o = [{
                key: "loadData",
                value: function(e) {
                    var t = e.store,
                        n = e.match,
                        r = n.params.letter.toLowerCase(),
                        o = Number(n.params.page || 1),
                        i = ce(t.getState()) === H.APPLICATION.TCOM ? H.API_WORD_LIST_ENDPOINT_TCOM : H.API_WORD_LIST_ENDPOINT_DCOM,
                        a = (o - 1) * H.LISTAZ_TERMS_PER_PAGE,
                        c = "".concat(i, "/").concat(r, "?offset=").concat(a, "&limit=").concat(H.LISTAZ_TERMS_PER_PAGE);
                    return t.dispatch(zr(c, r, o, a))
                }
            }], (r = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.listAZ,
                        n = e.listAZMetaInfo;
                    if (!t || !t.length || !n) return ne.error("ListAZPage does not have enough data to render the component!"), null;
                    var r = n.page || 1,
                        o = (n.letter || "a").toLowerCase(),
                        i = n.totalResults || 0;
                    return a.a.createElement(Br, null, a.a.createElement(xt, {
                        app: this.props.app
                    }), a.a.createElement(Dr, {
                        entries: t,
                        activeApp: this.props.app
                    }), a.a.createElement(Zr, null, a.a.createElement(jr.a, {
                        currentPage: r,
                        totalPages: Math.ceil(i / H.LISTAZ_TERMS_PER_PAGE),
                        baseURL: "/list/".concat(o)
                    })))
                }
            }]) && Hr(n.prototype, r), o && Hr(n, o), t
        }(),
        $r = j(Object(c.b)(function(e) {
            return {
                isMobile: ae(e),
                listAZ: se(e),
                listAZMetaInfo: fe(e),
                app: ce(e)
            }
        })(Kr)),
        Qr = [{
            component: Ye,
            exact: !1,
            routes: [{
                path: G.homepage,
                exact: !0,
                component: Cr
            }, {
                path: G.listAZ,
                exact: !0,
                component: $r
            }]
        }];

    function Yr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Jr = function(e, t, n) {
            return a.a.createElement(c.a, {
                store: e
            }, a.a.createElement(b, {
                history: t
            }, a.a.createElement("div", null, T(Qr, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        Yr(e, t, n[t])
                    })
                }
                return e
            }({}, n)))))
        },
        Xr = n(173);

    function eo(e) {
        return function(t) {
            var n = t.dispatch,
                r = t.getState;
            return function(t) {
                return function(o) {
                    return "function" == typeof o ? o(n, r, e) : t(o)
                }
            }
        }
    }
    var to = eo();
    to.withExtraArgument = eo;
    var no = to,
        ro = n(174),
        oo = n.n(ro),
        io = n(175),
        ao = n.n(io);

    function co(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function uo(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var lo = function(e) {
            var t = function(e, t) {
                    return e.position > t.position
                },
                n = function(e) {
                    return Array.isArray(e.feed) && e.feed.length > 0 ? e.feed.sort(t).map(function(e) {
                        return {
                            title: e.title,
                            url: e.url,
                            image: e.image,
                            description: e.description
                        }
                    }) : []
                };
            if (Array.isArray(e.feeds) && e.feeds.length > 0) {
                var r = e.feeds.sort(t).map(function(e) {
                    return {
                        title: e.title,
                        feed: n(e)
                    }
                });
                if (Array.isArray(r) && r.length > 0) {
                    var o = uo(function(e) {
                        return [e[0].feed.slice(0, 4), e.slice(1)]
                    }(r), 2);
                    return {
                        highlights: o[0],
                        main: o[1]
                    }
                }
            }
            return {}
        },
        so = n(176),
        fo = n.n(so);

    function po(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var ho = function(e) {
        var t, n = A()(e, "wordoftheday.date", ""),
            r = A()(e, "wordoftheday.results.".concat(n), {});
        return fo()(r) ? {} : (po(t = {}, "term", r.word), po(t, "audioSourceLink", A()(r, "audio", null)), po(t, "wotdPageLink", "".concat(Object(V.b)(), "://").concat(Object(V.c)(), "/wordoftheday/")), po(t, "date", n), po(t, "pos", A()(r, "pos", null)), po(t, "pronunciation", A()(r, "pronunciation", null)), t)
    };

    function mo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                bo(e, t, n[t])
            })
        }
        return e
    }

    function bo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var go = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                isFetching: !1
            },
            t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
            case or.API_EDITORIAL_REQUEST:
                return mo({}, e, {
                    isFetching: !0
                });
            case or.API_EDITORIAL_SUCCESS:
                return mo({}, e, {
                    isFetching: !1,
                    data: lo(t.data)
                });
            case or.API_EDITORIAL_FAILURE:
            case or.API_EDITORIAL_NODATA:
                return mo({}, e, {
                    isFetching: !1,
                    data: {}
                });
            default:
                return e
        }
    };

    function yo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                vo(e, t, n[t])
            })
        }
        return e
    }

    function vo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Oo = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                isFetching: !1
            },
            t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
            case or.API_WOTD_REQUEST:
                return yo({}, e, {
                    isFetching: !0
                });
            case or.API_WOTD_SUCCESS:
                return yo({}, e, {
                    isFetching: !1,
                    data: ho(t.payload)
                });
            case or.API_WOTD_FAILURE:
            case or.API_WOTD_NODATA:
                return yo({}, e, {
                    isFetching: !1,
                    data: {}
                });
            default:
                return e
        }
    };

    function xo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var wo = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
            case or.UPDATE_DETECTED_DEVICE:
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            xo(e, t, n[t])
                        })
                    }
                    return e
                }({}, e, {
                    isMobile: t.isMobile
                });
            default:
                return e
        }
    };

    function Eo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var _o = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
            case or.UPDATE_PAGE_NAME:
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            Eo(e, t, n[t])
                        })
                    }
                    return e
                }({}, e, {
                    pageName: t.pageName
                });
            default:
                return e
        }
    };

    function To(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                Io(e, t, n[t])
            })
        }
        return e
    }

    function Io(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Ao = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                isFetching: !1
            },
            t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
            case or.MUP_REQUEST:
                return To({}, e, {
                    isFetching: !0
                });
            case or.MUP_SUCCESS:
                return To({}, e, {
                    isFetching: !1,
                    data: t.data.profileNumber
                });
            case or.MUP_FAILURE:
            case or.MUP_NODATA:
                return To({}, e, {
                    isFetching: !1,
                    data: ""
                });
            default:
                return e
        }
    };

    function ko(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Co = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
            case or.UPDATE_DETECTED_APPLICATION:
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            ko(e, t, n[t])
                        })
                    }
                    return e
                }({}, e, {
                    app: t.app
                });
            default:
                return e
        }
    };

    function So(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var jo = Object(Je.combineReducers)({
        routerReducer: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.type,
                r = t.payload;
            return n === p ? f({}, e, {
                location: r
            }) : e
        },
        hamburgerMenu: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    isHamburgerMenuOpen: !1
                },
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case or.TOGGLE_HAMBURGER_MENU:
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                co(e, t, n[t])
                            })
                        }
                        return e
                    }({}, e, {
                        isHamburgerMenuOpen: t.isHamburgerMenuOpen
                    });
                default:
                    return e
            }
        },
        editorialData: go,
        wotdData: Oo,
        detectedDevice: wo,
        routing: _o,
        mup: Ao,
        detectedApplication: Co,
        listAZ: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 ? arguments[1] : void 0;
            if (t.type === or.LISTAZ_CONTENT_SUCCESS) {
                var n = Mr(t.data);
                return n && n.data && n.meta ? function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            So(e, t, n[t])
                        })
                    }
                    return e
                }({}, e, {
                    data: n.data,
                    meta: n.meta
                }) : e
            }
            return t.type === or.LISTAZ_CONTENT_FAILURE ? null : e
        }
    });

    function Po() {
        var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = function(e) {
                return function() {
                    return function(t) {
                        return function(n) {
                            if (n.type !== g) return t(n);
                            var r = n.payload,
                                o = r.method,
                                i = r.args;
                            e[o].apply(e, i)
                        }
                    }
                }
            }(e = (arguments.length > 1 ? arguments[1] : void 0) ? ao()() : oo()());
        t = Object(V.l)() ? Object(Xr.composeWithDevTools)(Object(Je.applyMiddleware)(r, no)) : Object(Je.applyMiddleware)(r, no);
        var o = Object(Je.createStore)(jo, n, t);
        return Object(V.l)(), {
            history: e,
            store: o
        }
    }
    var Mo = window.INITIAL_STATE || {};
    delete window.INITIAL_STATE;
    var Lo, Ro, No;
    Lo = Po(Mo), Ro = Lo.history, No = Lo.store, o.a.hydrate(Jr(No, Ro, {}), document.getElementById("root"))
}]);
//# sourceMappingURL=client-a56d97fc.js.map