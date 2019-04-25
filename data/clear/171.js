var WpPwapi2 = function(m) {
        "use strict";
        var h = console || {
                log: function() {},
                error: function() {}
            },
            S = "wpPwapi2.js",
            d = {
                version000: "20180525.2",
                doPwapi: !0,
                doLocalStorage: !0,
                defaultCookieDomain: ".washingtonpost.com",
                variantCookie: "wp_variant",
                paywallMeteringCookie: "rplm2",
                paywallMeteringCookieExpire: function() {
                    return (new Date).getTime() + 432e7
                },
                paywallTrackingCookie: "rplpwtrk",
                paywallTrackCookieExpire: function() {
                    return (new Date).getTime() + 31536e6
                },
                subscribeSubDomainIframeId: "pwapiCrsDmnLocStor_subscribe_iframe",
                subscribeSubDomainGetData: !1,
                cmdRequestGetStor: "cmdGetFromStorage",
                cmdRequestDeleteStor: "cmdDeleteFromStorage",
                cmdRequestSetStor: "cmdSetInStorage",
                cmdRequestGetAllStor: "cmdGetAllFromStorage",
                validOriginBaseDomains: ["\\.washingtonpost\\.com", "\\.digitalink\\.com"],
                validDocumentDomains: ["washingtonpost.com", "digitalink.com"],
                abTestReferrerOn: !0,
                abCookieName: "rplab",
                abRefPt: "http://pwapiptrf._pwapiptrf_.com",
                abTestExpire: function() {
                    return (new Date).getTime() + 864e7
                },
                abDebugCookie: "rplAbTestDebug"
            },
            b = function(e, t) {
                return !(!e || !t) && null != e.match(t + "$")
            },
            f = function(e) {
                var t, r, o, a = document.createElement("a"),
                    i = {};
                for (a.href = e, t = a.search.replace(/^\?/, "").split("&"), o = 0; o < t.length; o++) i[(r = t[o].split("="))[0]] = r[1];
                return {
                    protocol: a.protocol,
                    host: a.host,
                    hostname: a.hostname,
                    port: a.port,
                    pathname: a.pathname,
                    search: a.search,
                    searchObject: i,
                    hash: a.hash
                }
            },
            c = [{
                id: "rplpwabt4",
                active: !0,
                getExpireMillis: function() {
                    return (new Date).getTime() + 864e7
                },
                results: [{
                    id: "1",
                    min: 0,
                    max: 99
                }],
                transforms: {
                    1: function(e, t) {
                        return t
                    }
                }
            }],
            w = [{
                id: "rplabrfg",
                regex: /google.com$/i,
                results: [{
                    id: "t1",
                    min: 0,
                    max: 9,
                    act: !0,
                    processPwapiResponse: function(e) {
                        return e
                    },
                    referrer: "http://pwapi.rplabrfgt1.com"
                }, {
                    id: "t2",
                    min: 10,
                    max: 19,
                    act: !0,
                    processPwapiResponse: function(e) {
                        if (!this.abObj || !this.pwapi) return h.error(S + " : abTestConfig rplabrfgoog t2 this.abObj or this.pwapi is blank"), e;
                        if (!this.abObj.regex) return h.error(S + " : abTestConfig rplabrfgoog t2 abObj this.abObj.regex blank"), e;
                        if (!this.pwapi.originalReferrer) return h.error(S + " : abTestConfig rplabrfgoog t2 abObj this.pwapi.originalReferrer blank"), e;
                        var t = this.abObj.regex,
                            r = this.pwapi.originalReferrer,
                            o = f(r).hostname;
                        return o && (o = o.trim(), t.exec(o) && (e.pwresp && null != e.pwresp.action && null != e.pwresp.url ? (h.log(S + " : rplabrfg t2 orig act: " + e.pwresp.action + ", url: " + e.pwresp.url), e.pwresp.action = 0, e.pwresp.url = "N/A", h.log(S + " : rplabrfg t2 transformed act: " + e.pwresp.action + ", url: " + e.pwresp.url)) : h.error(S + " : resData.pwresp blank"))), e
                    },
                    referrer: "http://pwapi.rplabrfgt2.com"
                }, {
                    id: "f",
                    min: 20,
                    max: 99,
                    act: !1
                }]
            }],
            t = 36e5,
            p = [{
                name: "cb_clicks",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "authdrredir",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "rplm2",
                expireOffsetMillis: 432e7,
                cookiesToLocalStorage: !0,
                localStorageToCookies: !0,
                toPwapi: !0,
                notEncoded: !0
            }, {
                name: "rplpwtrk",
                expireOffsetMillis: 31536e6,
                cookiesToLocalStorage: !0,
                localStorageToCookies: !0,
                toPwapi: !0,
                notEncoded: !0
            }, {
                name: "rplmct",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "rplsb",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !1,
                toPwapi: !1
            }, {
                name: "rplrol",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "osfam",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "devicetype",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "de",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "client_region",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "X-WP-Split",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "rwebabt",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "wp_clicks",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "rpld1",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "rpld0",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "wapo_actmgmt",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "wpniuser",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }, {
                name: "wapo_login_id",
                expireOffsetMillis: t,
                cookiesToLocalStorage: !1,
                localStorageToCookies: !0,
                toPwapi: !0
            }],
            v = function(e) {
                try {
                    if (!e) return !1;
                    if ("string" == typeof e || e instanceof String) {
                        for (var t = f(e), r = 0; r < d.validOriginBaseDomains.length; r++)
                            if (b(t.hostname, d.validOriginBaseDomains[r])) return !0
                    } else h.error(S + ": isOriginValid: origin is not a string: " + JSON.stringify(e))
                } catch (e) {
                    h.error(S + ": isOriginValid unable to process: " + e.message, e)
                }
                return !1
            },
            n = function(e, t, r) {
                if (!(this instanceof n)) return new n(e, t);
                if (!e) {
                    var o = S + ": initLocStorApi: iframeId is blank/null";
                    throw h.error(o), new Error(o)
                }
                if (!t) {
                    o = S + ": initLocStorApi: callback is blank/null";
                    throw h.error(o), new Error(o)
                }
                var a = document.getElementById(e);
                if (!a) {
                    o = S + ": initLocStorApi: iframe id: " + e + ", iframeElement is null";
                    throw h.error(o), new Error(o)
                }
                var i = a.contentWindow;
                if (!i) {
                    o = S + ": initLocStorApi: iframe id: " + e + ", contentWindow is null";
                    throw h.error(o), new Error(o)
                }
                if (!r) {
                    o = S + ": initLocStorApi: targetOrigin is blank";
                    throw h.error(o), new Error(o)
                }
                if (!v(r)) {
                    o = S + ": initLocStorApi: targetOrigin is not valid";
                    throw h.error(o), new Error(o)
                }
                this.targetOrigin = r, this.locStorApiIframeWindow = i, this.iframeEventListenerLocStorApiReference = this.locStorApiEventListener.bind({
                    thiss: this,
                    callback: t
                }), m.addEventListener("message", this.iframeEventListenerLocStorApiReference, !1)
            },
            k = function(e, t, r, o, a, i, n, s, l) {
                if (!(this instanceof k)) return new k(e, t, r, o, a, i, n, s, l);
                this.$jq = e, this.apiurl = t, this.cookieDomain = r, this.path = o, this.args = a, this.successCallback = i, this.errorCallback = n, this.doPwapi = s, this.doLocalStorage = l, this.timeoutMillis = 15e3, r || (this.cookieDomain = d.defaultCookieDomain), a || (this.args = {}), o || (this.path = "/"), 0 != this.path.indexOf("/") && (this.path = "/" + this.path), null == s && (this.doPwapi = !0), null == l && (this.doLocalStorage = !0)
            };
        k.prototype.setCallbacks = function(e, t) {
            this.successCallback = e, this.errorCallback = t
        }, k.prototype.storageAvailable = function(e) {
            if (!e) return !1;
            try {
                var t = m[e],
                    r = "_wpPwapi1_js_stor_avail_";
                return t.setItem(r, r), t.removeItem(r), !0
            } catch (e) {
                return !1
            }
        }, k.prototype.allStorageAvailable = function() {
            var e = this.storageAvailable("localStorage"),
                t = this.storageAvailable("sessionStorage");
            return e && t
        }, k.prototype.getStorageData = function(t, r) {
            if (null != t && null != r && this.allStorageAvailable()) {
                for (var o = [], a = 0; a < p.length; a++) {
                    var i = p[a],
                        n = i.name;
                    if (i.toPwapi && n) {
                        var s = r.getItem(n);
                        if (s) {
                            try {
                                s = s.trim()
                            } catch (e) {
                                h.error(S + " : getStorageData: unable to trim storageItemStr: " + s + ", for key: " + n + " ::: " + e.message, e);
                                continue
                            }
                            var l = null;
                            try {
                                var c = (l = JSON.parse(s)).e;
                                if (r === localStorage && c < (new Date).getTime()) {
                                    o.push(n);
                                    continue
                                }
                                this.args[n] = l.v
                            } catch (t) {
                                h.error(S + " : getStorageData: unable to json parse: " + s + ", for key: " + n + " ::: " + e.message, t);
                                continue
                            }
                        }
                    }
                }
                for (a = 0; a < o.length; a++) r.removeItem(o[a])
            }
        }, k.prototype.getAllStorageData = function() {
            if (this.doLocalStorage && d.doLocalStorage) {
                if (!this.allStorageAvailable()) return {};
                var e = {};
                return this.getStorageData(e, localStorage), this.getStorageData(e, sessionStorage), e
            }
            h.log(S + " : getAllStorageData : Warning: not storing data: this.doLocalStorage: " + this.doLocalStorage + ", config.doLocalStorage: " + d.doLocalStorage)
        }, k.prototype.getFromLocalOrSessionStorage = function(e) {
            if (!this.allStorageAvailable() || !e) return null;
            var t = localStorage.getItem(e);
            return null == t && (t = sessionStorage.getItem(e)), t
        }, k.prototype.storeDataLocalStorage = function(e, t, r) {
            var o = {};
            o.v = t, o.e = r;
            var a = JSON.stringify(o);
            0 === r ? sessionStorage.setItem(e, a) : r < 0 || r < (new Date).getTime() ? (sessionStorage.removeItem(e), localStorage.removeItem(e)) : localStorage.setItem(e, a)
        }, k.prototype.storDelete = function(e) {
            this.doLocalStorage && d.doLocalStorage ? this.allStorageAvailable() && e && this.storeDataLocalStorage(e, "", -1) : h.log(S + " : storDelete : Warning: not storing data: this.doLocalStorage: " + this.doLocalStorage + ", config.doLocalStorage: " + d.doLocalStorage)
        }, k.prototype.storeData = function(e) {
            if (this.doLocalStorage && d.doLocalStorage) {
                if (this.allStorageAvailable()) {
                    if (!e) throw "storeData: response data is null/blank";
                    var t = e.pwresp.locstor;
                    if (t && !(t.length < 1))
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r],
                                a = o.k,
                                i = o.v,
                                n = o.e;
                            null != a && null != i && null != n && ("string" == typeof a && "number" == typeof n ? this.storeDataLocalStorage(a, i, n) : h.error(S + " : k is not string, or ex is not number for: " + JSON.stringify(o)))
                        }
                }
            } else h.log(S + " : storeData : Warning: not storing data: this.doLocalStorage: " + this.doLocalStorage + ", config.doLocalStorage: " + d.doLocalStorage)
        }, k.prototype.storeDataCookies = function(e, t, r, o) {
            if (e) {
                var a = "",
                    i = "";
                if (r < 0 ? a = ";expires=" + new Date(1e3).toUTCString : 0 < r && (a = ";expires=" + new Date(r).toUTCString()), null != this.cookieDomain && (i = ";domain=" + this.cookieDomain), t || (t = ""), o) var n = t;
                else n = encodeURIComponent(t);
                var s = e + "=" + n + ";path=/" + a + i;
                document.cookie = s
            }
        }, k.prototype.setCookieDomain = function(e) {
            this.cookieDomain = e || d.defaultCookieDomain
        }, k.prototype.deleteCookie = function(e) {
            null != e && "" !== (e = e.trim()) && this.storeDataCookies(e, "", 1e3)
        }, k.prototype.getCookie = function(e, t) {
            if (!e) return null;
            if (!t && void 0 !== this.cookieCache) return this.cookieCache[e];
            if (!document.cookie) return null;
            for (var r = {}, o = null, a = document.cookie.split(";"), i = 0; i < a.length; i++)
                if (0 < a[i].indexOf("=")) {
                    var n = a[i].split("="),
                        s = n[0],
                        l = n[1];
                    s && (s = s.trim()), s === e && (l || (l = ""), o = l.trim()), r[s] = l.trim()
                } return this.cookieCache = r, o
        }, k.prototype.deleteAllStorageAndCookies = function() {
            for (var e = 0; e < p.length; e++) {
                var t = p[e].name;
                this.deleteCookie(t), this.storDelete(t)
            }
        }, k.prototype.synchCookiesAndLocalStorage = function() {
            if (this.doLocalStorage && d.doLocalStorage) {
                if (this.allStorageAvailable())
                    for (var e = 0; e < p.length; e++) {
                        var t = p[e];
                        try {
                            var r = t.name,
                                o = t.expireOffsetMillis,
                                a = this.getCookie(r),
                                i = localStorage.getItem(r),
                                n = null;
                            i && (n = JSON.parse(i)).e < (new Date).getTime() && (n = null, localStorage.removeItem(r));
                            var s = null != a,
                                l = null != n;
                            if (s && l) continue;
                            if (s && t.cookiesToLocalStorage) {
                                var c = (new Date).getTime() + o;
                                this.storeDataLocalStorage(r, a, c)
                            } else l && t.localStorageToCookies && this.storeDataCookies(r, n.v, n.e, t.notEncoded)
                        } catch (e) {
                            h.error(S + " : Unable to synchCookiesAndLocalStorage for synchCookie item: " + JSON.stringify(t), e)
                        }
                    }
            } else h.log(S + " : synchCookiesAndLocalStorage : Warning: not storing data: this.doLocalStorage: " + this.doLocalStorage + ", config.doLocalStorage: " + d.doLocalStorage)
        }, k.prototype.procfn = function(e, t, r, o, a) {
            if (e) try {
                o || a ? e(o, a) : e(r)
            } catch (e) {
                h.error(S + " : " + t, e)
            }
        }, k.prototype.setTimeout = function(e) {
            e && !isNaN(e) && (this.timeoutMillis = e)
        }, k.prototype.subDomainSubscribeLocStorCallback = function(e, t) {
            t && t.tag ? this.locstorSubscribe ? "myGetTag" === t.tag && (h.log(S + ": debug subDomainSubscribeLocStorCallback: callback myGetTag: " + JSON.stringify(t)), this.locstorSubscribe.close(), this.procInternal()) : h.error(S + ": subDomainSubscribeLocStorCallback: self.locstorSubscribe is null") : h.error(S + ": subDomainSubscribeLocStorCallback: data or data.tag is null")
        }, k.prototype.proc = function() {
            var e = this;
            if (d.subscribeSubDomainGetData) {
                e.locstorSubscribe = null;
                try {
                    if (e.locstorSubscribe = new n(d.subscribeSubDomainIframeId, e.subDomainSubscribeLocStorCallback.bind(e)), !e.locstorSubscribe) throw new Error("pwapi.proc: self.locstorSubscribe is null");
                    var t = {
                        cmd: e.locstorSubscribe.cmdGet(),
                        tag: "myGetTag",
                        keys: ["wapo_login_id", "wpniUser"]
                    };
                    e.locstorSubscribe.proc(t)
                } catch (e) {
                    throw e
                }
            } else e.procInternal()
        }, k.prototype.getAbCookie = function() {
            var e = this.getCookie(d.abCookieName);
            return e ? JSON.parse(decodeURIComponent(e)) : null
        }, k.prototype.abTestResponseTemplate = function() {
            return {
                res: !1,
                abObj: null,
                result: null
            }
        }, k.prototype.runGenericAbnTests = function() {
            for (var e = [], t = 0; t < c.length; t++) try {
                var r = c[t];
                if (!r.id) continue;
                if (null == r.active || !r.active) continue;
                if (!r.getExpireMillis) continue;
                if (!r.results || r.results.length < 1) continue;
                var o = this.getCookie(r.id);
                if (o) {
                    try {
                        (l = r.transforms[o]) && e.push(l)
                    } catch (e) {}
                    continue
                }
                var a = Math.floor(100 * Math.random()),
                    i = r.results;
                for (t = 0; t < i.length; t++) {
                    var n = i[t];
                    if (n && null != n.id && null != n.min && null != n.max && (a >= n.min && a <= n.max)) {
                        var s = null;
                        if (s = "function" == typeof n.id ? n.id(this) : n.id) {
                            this.storeDataCookies(r.id, s, r.getExpireMillis());
                            try {
                                var l;
                                (l = r.transforms[s]) && e.push(l)
                            } catch (e) {}
                        }
                        break
                    }
                }
            } catch (e) {
                h.error(S + " :: runGenericAbnTests, unable to process idx: " + t, e)
            }
            return e
        }, k.prototype.abTestReferrerInternal = function(e) {
            var t = this;
            if (!e) return t.abTestResponseTemplate();
            if (!(e = e.trim())) return t.abTestResponseTemplate();
            var r = f(e).hostname;
            if (!r) return t.abTestResponseTemplate();
            r = r.trim();
            for (var o = null, a = null, i = 0; i < w.length && (a = null, !(a = (o = w[i]).regex.exec(r))); i++) o = null;
            if (!o || !a) return t.abTestResponseTemplate();
            var n = null;
            if (o.id && (n = t.getCookie(o.id), (n = "t2") && o.results)) {
                n = n.trim();
                for (i = 0; i < o.results.length; i++) {
                    if ((u = o.results[i]).id && u.id.trim() === n) return (s = t.abTestResponseTemplate()).abObj = o, "boolean" == typeof(s.result = u).act ? s.res = u.act : "function" == typeof u.act && (s.res = u.act()), s
                }
            }
            n = null;
            var s, l = Math.floor(100 * Math.random()),
                c = o.results,
                p = !1,
                g = !1,
                u = null;
            if (!c || c.length < 1) return t.abTestResponseTemplate();
            for (i = 0; i < c.length; i++)
                if (l >= (u = c[i]).min && l <= u.max) {
                    p = !0, "boolean" == typeof u.act ? g = u.act : "function" == typeof u.act && (g = u.act());
                    break
                } return p ? (u && u.id && o.id && (n || (n = u.id), n && t.storeDataCookies(o.id, n.trim(), d.abTestExpire())), (s = t.abTestResponseTemplate()).abObj = o, s.result = u, s.res = g, s) : t.abTestResponseTemplate()
        }, k.prototype.abTestReferrer = function(e) {
            try {
                var t = this.getCookie("devicetype"),
                    r = !1;
                null != t && "0" == t && (r = !0);
                var o = this.getCookie(d.abDebugCookie);
                if (d.abTestReferrerOn && r || o) {
                    var a = this.abTestReferrerInternal(e);
                    if (a) return a
                }
            } catch (e) {
                h.error(S + " :: unable to abTestReferrerInternal: " + e.message, e)
            }
            return this.abTestResponseTemplate()
        }, k.prototype.getContentSection = function() {
            try {
                var e = m.wp_section;
                return e || (e = m.TWP.Data.Tracking.props.section), e ? "" == (e = e.trim()) ? null : e : null
            } catch (e) {
                return null
            }
        }, k.prototype.getSubscriberOnlyTags = function() {
            try {
                var e = m.wp_meta_data.tags_for_paywall_subs;
                return e ? "" == (e = e.trim()) ? null : e : null
            } catch (e) {
                return null
            }
        }, k.prototype.getContentTags = function() {
            try {
                var e = m.wp_meta_data.tags_for_paywall;
                return e ? "" == (e = e.trim()) ? null : e : null
            } catch (e) {
                return null
            }
        }, k.prototype.getMaxDaysToKeep = function() {
            var e = this.getCookie(d.variantCookie);
            if (e && ((e = e.split("|")) || 0 < e.length)) {
                if (!(e = parseInt(e[0])) || isNaN(e)) return 50;
                if (10 === e) return (new Date).getDate() + 5;
                if (11 === e) return 35;
                if (12 === e) return 50
            }
            return 50
        }, k.prototype.fixMeterCookie = function(e) {
            if (e && -1 == e.indexOf("|")) {
                var t = e.match(/[a-z]*:[a-z0-9]+-[0-9]{0,10}-[ag]{1,2}(,[a-z0-9]+-[0-9]{0,10}-[ag]{1,2})?/g);
                if (t) {
                    e = "";
                    for (var r = 0; r < t.length; r++) e += t[r] + "|"
                }
            }
            return e
        }, k.prototype.cleanMeterCookie = function() {
            var e = this.getMaxDaysToKeep(),
                t = this.fixMeterCookie(this.getCookie(d.paywallMeteringCookie));
            if (!t) return !1;
            for (var r = t.split("|"), o = "", a = new Date, i = 0; i < r.length; i++) {
                var n = r[i];
                if (0 < i && 0 < o.length && !b(o, "\\|") && (o += "|"), 0 < n.trim().length)
                    if (0 < n.indexOf(",") && 0 < n.indexOf(":")) {
                        for (var s = n.split(":")[0], l = n.split(":")[1].split(","), c = "", p = 0; p < l.length; p++) {
                            var g = l[p];
                            if (0 < g.trim().length)
                                if ((m = g.split("-")) && 1 < m.length) {
                                    var u = m[1],
                                        f = new Date(1e3 * u);
                                    Math.round(Math.abs((f.getTime() - a.getTime()) / 864e5)) <= e && (0 < p && 0 < c.length && (c += ","), c += g)
                                } else 0 < p && 0 < c.length && (c += ","), c += g
                        }
                        0 < c.length && (o += s + ":" + c)
                    } else {
                        var m;
                        if ((m = n.split("-")) && 1 < m.length) {
                            u = m[1], f = new Date(1e3 * u);
                            Math.round(Math.abs((f.getTime() - a.getTime()) / 864e5)) <= e && (o += n)
                        } else o += n
                    }
            }
            this.storeDataCookies(d.paywallMeteringCookie, o, d.paywallMeteringCookieExpire(), !0)
        }, k.prototype.didUserHitPaywallSince = function(e) {
            try {
                if (!e) return !1;
                var t = this.getCookie(d.paywallTrackingCookie);
                if (!t) return !1;
                t = JSON.parse(decodeURIComponent(t));
                var r = (new Date).getMonth();
                0 == r && (r = 12);
                var o = t[r];
                if (null == o) return !1;
                if ((new Date).getTime() - e < o) return !0
            } catch (e) {}
            return !1
        }, k.prototype.procInternal = function() {
            var a = this;
            if (this.doPwapi && d.doPwapi) {
                if (!a.apiurl) {
                    var e = S + ": apiurl is null";
                    throw h.error(e), new Error(e)
                }
                if (!v(a.apiurl)) {
                    e = S + ": apiurl invalid";
                    throw h.error(e), new Error(e)
                }
                a.args.referrer || (a.args.referrer = ""), a.args.referrer = a.args.referrer.trim(), a.originalReferrer = a.args.referrer;
                var i = a.runGenericAbnTests(),
                    t = a.getContentSection();
                t && (a.args.pwapi_contentsection = t),
                    function(e) {
                        if (!e) return !1;
                        try {
                            var t = e.getFromLocalOrSessionStorage("newsletter_history");
                            if (!t) return !1;
                            var r = JSON.parse(t);
                            if (!r) return !1;
                            var o = !0;
                            for (var a in r)
                                if (r.hasOwnProperty(a)) {
                                    o = !1;
                                    break
                                } if (!o) return !0
                        } catch (e) {
                            h.error(S + " : unable to get nlHistory : " + e.message, e)
                        }
                        return !1
                    }(a) && (a.args.pwapi_is_nl_user = "1");
                var r = a.getContentTags();
                r && (a.args.pwapi_ct_tags = r);
                var o = a.getSubscriberOnlyTags();
                o && (a.args.pwapi_sct_tags = o);
                try {
                    a.didUserHitPaywallSince(6048e6) && (a.args.pwapi_usr_ht_pw = "1")
                } catch (e) {
                    h.error(S + " : Unable to check didUserHitPaywallSince in procInternal for setting pwapi_usr_ht_pw query param arg: " + e.message, e)
                }
                a.cleanMeterCookie(), a.getAllStorageData();
                try {
                    a.synchCookiesAndLocalStorage()
                } catch (e) {
                    h.error(S + " :: unable to synchCookiesAndLocalStorage: " + e.message, e)
                }
                var n = "pwapi" + Math.random().toString().substr(2);
                m[n] = function(t) {
                    clearTimeout(f), m.pwapiResponse = (new Date).getTime() - u;
                    try {
                        a.storeData(t)
                    } catch (e) {
                        h.error(S + " : Unable to local storage: " + e.message, t)
                    }
                    var e = t;
                    try {
                        if (i)
                            for (var r = 0; r < i.length; r++) try {
                                var o = i[r];
                                o && (e = o(a, e))
                            } catch (e) {
                                h.log(S + " : unable to run single transform function for generic ab tests: " + e.message, e)
                            }
                    } catch (e) {
                        h.error(S + " : unable run transform functions for generic ab test: " + e.message, e)
                    }
                    a.procfn(a.successCallback, "successCallback", e, null, null)
                };
                var s, l = document.createElement("script"),
                    c = (-1 === this.path.indexOf("?") ? "?" : "&") + "callback=" + n,
                    p = "&";
                for (s in this.args) p += s + "=" + encodeURIComponent(this.args[s]) + "&";
                l.src = a.apiurl + this.path + c + p;
                var g = m.performance && m.performance.timing || {},
                    u = (new Date).getTime();
                m.pwapiStart = u - (g.navigationStart || 0), document.getElementsByTagName("head")[0].appendChild(l);
                var f = setTimeout(function() {
                    console.error("PWAPI ERROR/TIMEOUT"), a.procfn(a.errorCallback, "errorCallback", null, null, "Pwapi timeout")
                }, a.timeoutMillis)
            } else h.log(S + " : Warning: not calling pwapi: this.doPwapi: " + this.doPwapi + ", config.pwapi: " + d.doPwapi)
        }, n.prototype.proc = function(e) {
            if (!e) return h.error(S + ": locStorApiCall: cmdObj is blank/null"), !1;
            if (!this.locStorApiIframeWindow) {
                var t = S + ": locStorApiCall: locStorApiIframeWindow is blank/null";
                throw h.error(t), new Error(t)
            }
            this.locStorApiIframeWindow.postMessage(JSON.stringify(e), this.targetOrigin)
        }, n.prototype.locStorApiEventListener = function(t) {
            if (t && t.origin) {
                if (!v(t.origin)) return h.error(S + ": locStorApiEventListener: event origin is not valid"), void h.error(t.origin);
                try {
                    this.callback(this.thiss, JSON.parse(t.data))
                } catch (e) {
                    h.error(S + ": locStorApiEventListener: uable to call callback function with data: " + t.data + " :: err.message: " + e.message, e)
                }
            } else h.error(S + ": locStorApiEventListener: ev or ev.origin is blank")
        }, n.prototype.cmdGet = function() {
            return d.cmdRequestGetStor
        }, n.prototype.cmdGetAll = function() {
            return d.cmdRequestGetAllStor
        }, n.prototype.cmdDelete = function() {
            return d.cmdRequestDeleteStor
        }, n.prototype.cmdSet = function() {
            return d.cmdRequestSetStor
        }, n.prototype.close = function() {
            this.iframeEventListenerLocStorApiReference && m.removeEventListener("message", this.iframeEventListenerLocStorApiReference, !1)
        };
        var r = m.location.href,
            o = f(m.location.href),
            y = null;
        try {
            var a = !1;
            if (o && o.searchObject) {
                var i = o.searchObject,
                    s = i.pwapisetddmn;
                if (s && "1" === s) {
                    var l = i.pwapiddmn;
                    l && function(t) {
                        if (!t) return !1;
                        try {
                            for (var e = 0; e < d.validDocumentDomains.length; e++)
                                if (t === d.validDocumentDomains[e]) return !0
                        } catch (e) {
                            h.error(S + ": isDocumentDomainValid: Unable to determine for dd: " + t, e)
                        }
                        return !1
                    }(l) && (document.domain = l, a = !0), a && (a = !(!(y = i.targetorigin) || !v(y)))
                }
            }
            var T = null;
            if (a) {
                try {
                    T = m.parent
                } catch (e) {}
                m.addEventListener("message", function(t) {
                    try {
                        if (!t) return;
                        if (!v(t.origin)) return;
                        var e = t.data;
                        if (!e) return;
                        var r = new k;
                        if (!r.allStorageAvailable()) return void h.log(S + ": Warn local/session storage not available");
                        var o = JSON.parse(e),
                            a = o.cmd;
                        if (!a) return;
                        var i = {
                            cmd: a
                        };
                        if (o.tag && (i.tag = o.tag), a === d.cmdRequestGetStor) {
                            if (i.stor = {}, l = o.keys)
                                for (var n = 0; n < l.length; n++) {
                                    var s = r.getFromLocalOrSessionStorage(l[n]);
                                    i.stor[l[n]] = s
                                }
                        } else if (a === d.cmdRequestDeleteStor) {
                            var l;
                            if (l = o.keys)
                                for (n = 0; n < l.length; n++) r.storDelete(l[n]);
                            i = o
                        } else if (a === d.cmdRequestSetStor) {
                            var c = o.stor,
                                p = (o.type, localStorage);
                            if (c)
                                for (var g in c) c.hasOwnProperty(g) && p.setItem(g, c[g]);
                            i = o
                        } else if (a === d.cmdRequestGetAllStor) {
                            i.local = {}, i.session = {};
                            var u = localStorage.length,
                                f = sessionStorage.length;
                            for (n = 0; n < u; n++) {
                                var m = localStorage.key(n);
                                s = localStorage.getItem(m);
                                i.local[m] = s
                            }
                            for (n = 0; n < f; n++) {
                                m = sessionStorage.key(n), s = sessionStorage.getItem(m);
                                i.session[m] = s
                            }
                        }
                        T && y ? T.postMessage(JSON.stringify(i), y) : h.error(S + ": parentWindow is null or targetOrigin is blank")
                    } catch (e) {
                        h.error(S + ": iframe message event listener unable to respond: e.origin: " + t.origin + ", e.data: " + t.data + " :: err.message: " + e.message, e)
                    }
                }, !1)
            }
        } catch (e) {
            h.error(S + ": Unable to set document domain based on url: " + r + ", err :: " + e.message, e)
        }
        return {
            pwapi: k,
            locstor: n
        }
    }(this),
    wpPwapi = function(e) {
        var r = null,
            t = -1 === (e.document.location.hostname || "subscribe.digitalink.com").indexOf("pb-dev."),
            o = t ? "https://pwapi.washingtonpost.com" : "https://testpwapi.digitalink.com",
            a = t ? ".washingtonpost.com" : ".digitalink.com",
            i = {
                referrer: document.referrer
            },
            n = e.location.pathname + e.location.search,
            s = null;
        var l = new WpPwapi2.pwapi(null, o, a, n, i, function(e) {
            "function" == typeof callbackSuccessFunction ? callbackSuccessFunction(e) : s = e
        }, function(e, t) {
            "function" == typeof r ? r(e, t) : responseError = {
                errTextStatusStr: e,
                errThrownStr: t
            }
        });
        l.registerSucccessCallback = function(e) {
            callbackSuccessFunction = e, "object" == typeof s && callbackSuccessFunction(s)
        }, l.registerErrorCallback = function(e) {
            r = e, "object" == typeof responseError && r(e)
        };
        try {
            l.proc()
        } catch (e) {
            console.error("Unable to call pwapi: err message: " + e.message, e)
        }
        return l
    }(this),
    WpPwapi1 = function(e, c) {
        return {
            pwapi: function(e, t, r, o, a, i, n, s, l) {
                return c.registerSucccessCallback(i), c.registerErrorCallback(n), {
                    proc: function() {}
                }
            },
            locstor: e.WpPwapi2.locstor
        }
    }(this, wpPwapi);