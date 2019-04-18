! function e(t, n, a) {
    function i(s, o) {
        if (!n[s]) {
            if (!t[s]) {
                var c = "function" == typeof require && require;
                if (!o && c) return c(s, !0);
                if (r) return r(s, !0);
                var l = new Error("Cannot find module '" + s + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var u = n[s] = {
                exports: {}
            };
            t[s][0].call(u.exports, function(e) {
                return i(t[s][1][e] || e)
            }, u, u.exports, e, t, n, a)
        }
        return n[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < a.length; s++) i(a[s]);
    return i
}({
    1: [function(e, t) {
        (function(n) {
            e("./utils/polyfills");
            var a = e("./strategies/LocalVisitor"),
                i = e("./strategies/ProxyVisitor"),
                r = e("./strategies/PlaceholderVisitor"),
                s = e("./utils/callbackRegistryFactory"),
                o = e("./Message"),
                c = e("./enums").MESSAGES;
            t.exports = function(e, t, l, u) {
                function d(e) {
                    Object.assign(y, e)
                }

                function p(e) {
                    Object.assign(y.state, e), y.callbackRegistry.executeAll(y.state)
                }

                function g(e) {
                    if (!S.isInvalid(e)) {
                        D = !1;
                        var t = S.parse(e);
                        y.setStateAndPublish(t.state)
                    }
                }

                function f(e) {
                    !D && b && (D = !0, S.send(u, e))
                }

                function h() {
                    d(new a(l._generateID)), y.getMarketingCloudVisitorID(), y.callbackRegistry.executeAll(y.state, !0), n.removeEventListener("message", v)
                }

                function v(e) {
                    if (!S.isInvalid(e)) {
                        var t = S.parse(e);
                        D = !1, n.clearTimeout(this.timeout), n.removeEventListener("message", v), d(new i(y)), n.addEventListener("message", g), y.setStateAndPublish(t.state), y.callbackRegistry.hasCallbacks() && f(c.GETSTATE)
                    }
                }

                function m() {
                    b && postMessage ? (n.addEventListener("message", v), f(c.HANDSHAKE), this.timeout = setTimeout(h, 250)) : h()
                }

                function _() {
                    n.s_c_in || (n.s_c_il = [], n.s_c_in = 0), y._c = "Visitor", y._il = n.s_c_il, y._in = n.s_c_in, y._il[y._in] = y, n.s_c_in++
                }

                function k() {
                    function e(e) {
                        0 !== e.indexOf("_") && "function" == typeof l[e] && (y[e] = function() {})
                    }
                    Object.keys(l).forEach(e), y.getSupplementalDataID = l.getSupplementalDataID
                }
                var y = this,
                    b = t.whitelistParentDomain;
                y.state = {}, y.version = l.version, y.marketingCloudOrgID = e;
                var D = !1,
                    S = new o(e, b);
                y.callbackRegistry = s(), y.findField = function(e, t) {
                    if (y.state[e]) return t(y.state[e]), y.state[e]
                }, y.messageParent = f, y.setStateAndPublish = p, _(), k(), d(new r(y)), m()
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./Message": 2,
        "./enums": 4,
        "./strategies/LocalVisitor": 5,
        "./strategies/PlaceholderVisitor": 6,
        "./strategies/ProxyVisitor": 7,
        "./utils/callbackRegistryFactory": 9,
        "./utils/polyfills": 11
    }],
    2: [function(e, t) {
        var n = e("./enums").MESSAGES,
            a = {
                0: "prefix",
                1: "orgID",
                2: "state"
            };
        t.exports = function(e, t) {
            this.parse = function(e) {
                try {
                    var t = {};
                    return e.data.split("|").forEach(function(e, n) {
                        void 0 !== e && (t[a[n]] = 2 !== n ? e : JSON.parse(e))
                    }), t
                } catch (e) {}
            }, this.isInvalid = function(a) {
                var i = this.parse(a);
                if (!i || Object.keys(i).length < 2) return !0;
                var r = e !== i.orgID,
                    s = !t || a.origin !== t,
                    o = -1 === Object.keys(n).indexOf(i.prefix);
                return r || s || o
            }, this.send = function(n, a, i) {
                var r = a + "|" + e;
                i && i === Object(i) && (r += "|" + JSON.stringify(i));
                try {
                    n.postMessage(r, t)
                } catch (e) {}
            }
        }
    }, {
        "./enums": 4
    }],
    3: [function(e, t, i) {
        (function(i) {
            function n() {
                function e() {
                    l.windowLoaded = !0
                }
                i.addEventListener ? i.addEventListener("load", e) : i.attachEvent && i.attachEvent("onload", e), l.codeLoadEnd = (new Date).getTime()
            }
            /** @license ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

            Adobe Visitor API for JavaScript version: 2.5.0
            Copyright 1996-2015 Adobe, Inc. All Rights Reserved
            More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
            */
            var r = e("./ChildVisitor"),
                a = e("./Message"),
                s = e("./utils/makeChildMessageListener"),
                o = e("./utils/asyncParallelApply"),
                l = function(e, t) {
                    function n(e) {
                        var t = e;
                        return function(e) {
                            var n = e || p.location.href;
                            try {
                                var a = _._extractParamFromUri(n, t);
                                if (a) return F.parsePipeDelimetedKeyValues(a)
                            } catch (e) {}
                        }
                    }

                    function r(e) {
                        function t(e, t) {
                            e && e.match(C.VALID_VISITOR_ID_REGEX) && t(e)
                        }
                        t(e[I], _.setMarketingCloudVisitorID), _._setFieldExpire(P, -1), t(e[T], _.setAnalyticsVisitorID)
                    }

                    function l(e) {
                        e = e || {}, _._supplementalDataIDCurrent = e.supplementalDataIDCurrent || "", _._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}, _._supplementalDataIDLast = e.supplementalDataIDLast || "", _._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {}
                    }

                    function u(e) {
                        for (var t = "", n = 0, a = e.length; n < a; n++) {
                            var i = e[n],
                                r = i[0],
                                s = i[1];
                            null != s && s !== R && (t = (o = (o = t) ? o += "|" : o) + (r + "=") + encodeURIComponent(s))
                        }
                        var o, c;
                        return (c = (c = t) ? c += "|" : c) + "TS=" + F.getTimestampInSeconds()
                    }

                    function c(e) {
                        var t = e.minutesToLive,
                            n = "";
                        return _.idSyncDisableSyncs && (n = n || "Error: id syncs have been disabled"), "string" == typeof e.dpid && e.dpid.length || (n = n || "Error: config.dpid is empty"), "string" == typeof e.url && e.url.length || (n = n || "Error: config.url is empty"), void 0 === t ? t = 20160 : (t = parseInt(t, 10), (isNaN(t) || t <= 0) && (n = n || "Error: config.minutesToLive needs to be a positive number")), {
                            error: n,
                            ttl: t
                        }
                    }

                    function d(e) {
                        for (var t = 0, n = e.length; t < n; t++)
                            if (!C.POSITIVE_INT_REGEX.test(e[t])) return !1;
                        return !0
                    }

                    function f(e, t) {
                        for (; e.length < t.length;) e.push("0");
                        for (; t.length < e.length;) t.push("0")
                    }

                    function g(e, t) {
                        for (var n = 0; n < e.length; n++) {
                            var a = parseInt(e[n], 10),
                                i = parseInt(t[n], 10);
                            if (a > i) return 1;
                            if (i > a) return -1
                        }
                        return 0
                    }
                    if (!e) throw new Error("Visitor requires Adobe Marketing Cloud Org ID");
                    var _ = this;
                    _.version = "2.5.0";
                    var p = i,
                        m = p.Visitor;
                    m.version = _.version, p.s_c_in || (p.s_c_il = [], p.s_c_in = 0), _._c = "Visitor", _._il = p.s_c_il, _._in = p.s_c_in, _._il[_._in] = _, p.s_c_in++, _._log = {
                        requests: []
                    };
                    var h = p.document,
                        C = {
                            POST_MESSAGE_ENABLED: !!p.postMessage,
                            DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                            MILLIS_PER_DAY: 864e5,
                            ADOBE_MC: "adobe_mc",
                            ADOBE_MC_SDID: "adobe_mc_sdid",
                            VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                            ADOBE_MC_TTL_IN_MIN: 5,
                            POSITIVE_INT_REGEX: /^\d+$/,
                            VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                            HAS_JSON_STRINGIFY: window.JSON === Object(window.JSON) && "function" == typeof window.JSON.stringify
                        },
                        S = function(e) {
                            return !Object.prototype[e]
                        };
                    _._hash = function(e) {
                        var t, n = 0;
                        if (e)
                            for (t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n &= n;
                        return n
                    }, _._generateID = function(e, t) {
                        var n, a, i = "0123456789",
                            r = "",
                            s = "",
                            o = 8,
                            c = 10,
                            l = 10;
                        if (t === I && (V.isClientSideMarketingCloudVisitorID = !0), 1 === e) {
                            for (i += "ABCDEF", n = 0; n < 16; n++) a = Math.floor(Math.random() * o), r += i.substring(a, a + 1), a = Math.floor(Math.random() * o), s += i.substring(a, a + 1), o = 16;
                            return r + "-" + s
                        }
                        for (n = 0; n < 19; n++) a = Math.floor(Math.random() * c), r += i.substring(a, a + 1), 0 === n && 9 === a ? c = 3 : (1 === n || 2 === n) && 10 !== c && a < 2 ? c = 10 : n > 2 && (c = 10), a = Math.floor(Math.random() * l), s += i.substring(a, a + 1), 0 === n && 9 === a ? l = 3 : (1 === n || 2 === n) && 10 !== l && a < 2 ? l = 10 : n > 2 && (l = 10);
                        return r + s
                    }, _._getDomain = function(e) {
                        var t;
                        if (!e && p.location && (e = p.location.hostname), t = e)
                            if (/^[0-9.]+$/.test(t)) t = "";
                            else {
                                var n = ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",
                                    a = t.split("."),
                                    i = a.length - 1,
                                    r = i - 1;
                                if (i > 1 && a[i].length <= 2 && (2 === a[i - 1].length || n.indexOf("," + a[i] + ",") < 0) && r--, r > 0)
                                    for (t = ""; i >= r;) t = a[i] + (t ? "." : "") + t, i--
                            } return t
                    }, _.cookieRead = function(e) {
                        e = encodeURIComponent(e);
                        var t = (";" + h.cookie).split(" ").join(";"),
                            n = t.indexOf(";" + e + "="),
                            a = n < 0 ? n : t.indexOf(";", n + 1);
                        return n < 0 ? "" : decodeURIComponent(t.substring(n + 2 + e.length, a < 0 ? t.length : a))
                    }, _.cookieWrite = function(e, t, n) {
                        var a, i = _.cookieLifetime;
                        if (t = "" + t, i = i ? ("" + i).toUpperCase() : "", n && "SESSION" !== i && "NONE" !== i) {
                            if (a = "" !== t ? parseInt(i || 0, 10) : -60)(n = new Date).setTime(n.getTime() + 1e3 * a);
                            else if (1 === n) {
                                var r = (n = new Date).getYear();
                                n.setYear(r + 2 + (r < 1900 ? 1900 : 0))
                            }
                        } else n = 0;
                        return e && "NONE" !== i ? (h.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; path=/;" + (n ? " expires=" + n.toGMTString() + ";" : "") + (_.cookieDomain ? " domain=" + _.cookieDomain + ";" : ""), _.cookieRead(e) === t) : 0
                    }, _._callbackList = null, _._callCallback = function(e, t) {
                        try {
                            "function" == typeof e ? e.apply(p, t) : e[1].apply(e[0], t)
                        } catch (e) {}
                    }, _._registerCallback = function(e, t) {
                        t && (null == _._callbackList && (_._callbackList = {}), null == _._callbackList[e] && (_._callbackList[e] = []), _._callbackList[e].push(t))
                    }, _._callAllCallbacks = function(e, t) {
                        if (null != _._callbackList) {
                            var n = _._callbackList[e];
                            if (n)
                                for (; n.length > 0;) _._callCallback(n.shift(), t)
                        }
                    }, _._addQuerystringParam = function(e, t, n, a) {
                        var i = encodeURIComponent(t) + "=" + encodeURIComponent(n),
                            r = F.parseHash(e),
                            s = F.hashlessUrl(e);
                        if (-1 === s.indexOf("?")) return s + "?" + i + r;
                        var o = s.split("?"),
                            c = o[0] + "?",
                            l = o[1];
                        return c + F.addQueryParamAtLocation(l, i, a) + r
                    }, _._extractParamFromUri = function(e, t) {
                        var n = new RegExp("[\\?&#]" + t + "=([^&#]*)").exec(e);
                        if (n && n.length) return decodeURIComponent(n[1])
                    }, _._parseAdobeMcFromUrl = n(C.ADOBE_MC), _._parseAdobeMcSdidFromUrl = n(C.ADOBE_MC_SDID), _._attemptToPopulateSdidFromUrl = function(t) {
                        var n = _._parseAdobeMcSdidFromUrl(t),
                            a = 1e9;
                        n && n.TS && (a = F.getTimestampInSeconds() - n.TS), n && n.SDID && n[v] === e && a < _.sdidParamExpiry && (_._supplementalDataIDCurrent = n.SDID, _._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0)
                    }, _._attemptToPopulateIdsFromUrl = function() {
                        var t = _._parseAdobeMcFromUrl();
                        if (t && t.TS) {
                            var n = F.getTimestampInSeconds() - t.TS;
                            if (Math.floor(n / 60) > C.ADOBE_MC_TTL_IN_MIN || t[v] !== e) return;
                            r(t)
                        }
                    }, _.resetState = function(e) {
                        e ? _._mergeServerState(e) : l()
                    }, _._mergeServerState = function(e) {
                        if (e) try {
                            if (a = e, (e = F.isObject(a) ? a : F.parseJSON(a))[_.marketingCloudOrgID]) {
                                var t = e[_.marketingCloudOrgID];
                                n = t.customerIDs, F.isObject(n) && _.setCustomerIDs(n), l(t.sdid)
                            }
                        } catch (e) {
                            throw new Error("`serverState` has an invalid format.")
                        }
                        var n, a
                    }, _._timeout = null, _._loadData = function(e, t, n, a) {
                        t = _._addQuerystringParam(t, "d_fieldgroup", e, 1), a.url = _._addQuerystringParam(a.url, "d_fieldgroup", e, 1), a.corsUrl = _._addQuerystringParam(a.corsUrl, "d_fieldgroup", e, 1), V.fieldGroupObj[e] = !0, a === Object(a) && a.corsUrl && "XMLHttpRequest" === _._requestProcs.corsMetadata.corsType ? _._requestProcs.fireCORS(a, n, e) : _.useCORSOnly || _._loadJSONP(e, t, n)
                    }, _._loadJSONP = function(e, t, n) {
                        var a, i = 0,
                            r = 0;
                        if (t && h) {
                            for (a = 0; !i && a < 2;) {
                                try {
                                    i = (i = h.getElementsByTagName(a > 0 ? "HEAD" : "head")) && i.length > 0 ? i[0] : 0
                                } catch (e) {
                                    i = 0
                                }
                                a++
                            }
                            if (!i) try {
                                h.body && (i = h.body)
                            } catch (e) {
                                i = 0
                            }
                            if (i)
                                for (a = 0; !r && a < 2;) {
                                    try {
                                        r = h.createElement(a > 0 ? "SCRIPT" : "script")
                                    } catch (e) {
                                        r = 0
                                    }
                                    a++
                                }
                        }
                        if (t && i && r) {
                            r.type = "text/javascript", r.src = t, i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r);
                            var s = _.loadTimeout;
                            n && (null == _._timeout && (_._timeout = {}), _._timeout[e] = setTimeout(function() {
                                n(!0)
                            }, s)), _._log.requests.push(t)
                        } else n && n()
                    }, _._clearTimeout = function(e) {
                        null != _._timeout && _._timeout[e] && (clearTimeout(_._timeout[e]), _._timeout[e] = 0)
                    }, _._isAllowedDone = !1, _._isAllowedFlag = !1, _.isAllowed = function() {
                        return _._isAllowedDone || (_._isAllowedDone = !0, (_.cookieRead(_.cookieName) || _.cookieWrite(_.cookieName, "T", 1)) && (_._isAllowedFlag = !0)), _._isAllowedFlag
                    }, _._fields = null, _._fieldsExpired = null;
                    var D = "MC",
                        I = "MCMID",
                        v = "MCORGID",
                        A = "MCCIDH",
                        y = "MCSYNCS",
                        M = "MCSYNCSOP",
                        b = "MCIDTS",
                        E = "MCOPTOUT",
                        O = "A",
                        T = "MCAID",
                        k = "AAM",
                        L = "MCAAMLH",
                        P = "MCAAMB",
                        R = "NONE";
                    _.FIELDS = {
                        MCMID: "MCMID",
                        MCOPTOUT: "MCOPTOUT",
                        MCAID: "MCAID",
                        MCAAMLH: "MCAAMLH",
                        MCAAMB: "MCAAMB"
                    }, _._settingsDigest = 0, _._getSettingsDigest = function() {
                        if (!_._settingsDigest) {
                            var e = _.version;
                            _.audienceManagerServer && (e += "|" + _.audienceManagerServer), _.audienceManagerServerSecure && (e += "|" + _.audienceManagerServerSecure), _._settingsDigest = _._hash(e)
                        }
                        return _._settingsDigest
                    }, _._readVisitorDone = !1, _._readVisitor = function() {
                        if (!_._readVisitorDone) {
                            _._readVisitorDone = !0;
                            var e, t, n, a, i, r, s = _._getSettingsDigest(),
                                o = !1,
                                c = _.cookieRead(_.cookieName),
                                l = new Date;
                            if (null == _._fields && (_._fields = {}), c && "T" !== c)
                                for ((c = c.split("|"))[0].match(/^[\-0-9]+$/) && (parseInt(c[0], 10) !== s && (o = !0), c.shift()), c.length % 2 == 1 && c.pop(), e = 0; e < c.length; e += 2) n = (t = c[e].split("-"))[0], a = c[e + 1], t.length > 1 ? (i = parseInt(t[1], 10), r = t[1].indexOf("s") > 0) : (i = 0, r = !1), o && (n === A && (a = ""), i > 0 && (i = l.getTime() / 1e3 - 60)), n && a && (_._setField(n, a, 1), i > 0 && (_._fields["expire" + n] = i + (r ? "s" : ""), (l.getTime() >= 1e3 * i || r && !_.cookieRead(_.sessionCookieName)) && (_._fieldsExpired || (_._fieldsExpired = {}), _._fieldsExpired[n] = !0)));
                            !_._getField(T) && F.isTrackingServerPopulated() && (c = _.cookieRead("s_vi")) && ((c = c.split("|")).length > 1 && c[0].indexOf("v1") >= 0 && ((e = (a = c[1]).indexOf("[")) >= 0 && (a = a.substring(0, e)), a && a.match(C.VALID_VISITOR_ID_REGEX) && _._setField(T, a)))
                        }
                    }, _._appendVersionTo = function(e) {
                        var t = "vVersion|" + _.version,
                            n = e ? _._getCookieVersion(e) : null;
                        return n ? F.areVersionsDifferent(n, _.version) && (e = e.replace(C.VERSION_REGEX, t)) : e += (e ? "|" : "") + t, e
                    }, _._writeVisitor = function() {
                        var e, t, n = _._getSettingsDigest();
                        for (e in _._fields) S(e) && _._fields[e] && "expire" !== e.substring(0, 6) && (t = _._fields[e], n += (n ? "|" : "") + e + (_._fields["expire" + e] ? "-" + _._fields["expire" + e] : "") + "|" + t);
                        n = _._appendVersionTo(n), _.cookieWrite(_.cookieName, n, 1)
                    }, _._getField = function(e, t) {
                        return null == _._fields || !t && _._fieldsExpired && _._fieldsExpired[e] ? null : _._fields[e]
                    }, _._setField = function(e, t, n) {
                        null == _._fields && (_._fields = {}), _._fields[e] = t, n || _._writeVisitor()
                    }, _._getFieldList = function(e, t) {
                        var n = _._getField(e, t);
                        return n ? n.split("*") : null
                    }, _._setFieldList = function(e, t, n) {
                        _._setField(e, t ? t.join("*") : "", n)
                    }, _._getFieldMap = function(e, t) {
                        var n = _._getFieldList(e, t);
                        if (n) {
                            var a, i = {};
                            for (a = 0; a < n.length; a += 2) i[n[a]] = n[a + 1];
                            return i
                        }
                        return null
                    }, _._setFieldMap = function(e, t, n) {
                        var a, i = null;
                        if (t)
                            for (a in i = [], t) S(a) && (i.push(a), i.push(t[a]));
                        _._setFieldList(e, i, n)
                    }, _._setFieldExpire = function(e, t, n) {
                        var a = new Date;
                        a.setTime(a.getTime() + 1e3 * t), null == _._fields && (_._fields = {}), _._fields["expire" + e] = Math.floor(a.getTime() / 1e3) + (n ? "s" : ""), t < 0 ? (_._fieldsExpired || (_._fieldsExpired = {}), _._fieldsExpired[e] = !0) : _._fieldsExpired && (_._fieldsExpired[e] = !1), n && (_.cookieRead(_.sessionCookieName) || _.cookieWrite(_.sessionCookieName, "1"))
                    }, _._findVisitorID = function(e) {
                        return e && ("object" == typeof e && (e = e.d_mid ? e.d_mid : e.visitorID ? e.visitorID : e.id ? e.id : e.uuid ? e.uuid : "" + e), e && "NOTARGET" === (e = e.toUpperCase()) && (e = R), e && (e === R || e.match(C.VALID_VISITOR_ID_REGEX)) || (e = "")), e
                    }, _._setFields = function(e, t) {
                        if (_._clearTimeout(e), null != _._loading && (_._loading[e] = !1), V.fieldGroupObj[e] && V.setState(e, !1), e === D) {
                            !0 !== V.isClientSideMarketingCloudVisitorID && (V.isClientSideMarketingCloudVisitorID = !1);
                            var n = _._getField(I);
                            if (!n || _.overwriteCrossDomainMCIDAndAID) {
                                if (!(n = "object" == typeof t && t.mid ? t.mid : _._findVisitorID(t))) {
                                    if (_._use1stPartyMarketingCloudServer && !_.tried1stPartyMarketingCloudServer) return _.tried1stPartyMarketingCloudServer = !0, void _.getAnalyticsVisitorID(null, !1, !0);
                                    n = _._generateID(0, I)
                                }
                                _._setField(I, n)
                            }
                            n && n !== R || (n = ""), "object" == typeof t && ((t.d_region || t.dcs_region || t.d_blob || t.blob) && _._setFields(k, t), _._use1stPartyMarketingCloudServer && t.mid && _._setFields(O, {
                                id: t.id
                            })), _._callAllCallbacks(I, [n])
                        }
                        if (e === k && "object" == typeof t) {
                            var a = 604800;
                            null != t.id_sync_ttl && t.id_sync_ttl && (a = parseInt(t.id_sync_ttl, 10));
                            var i = N.getRegionAndCheckIfChanged(t, a);
                            _._callAllCallbacks(L, [i]);
                            var r = _._getField(P);
                            (t.d_blob || t.blob) && ((r = t.d_blob) || (r = t.blob), _._setFieldExpire(P, a), _._setField(P, r)), r || (r = ""), _._callAllCallbacks(P, [r]), !t.error_msg && _._newCustomerIDsHash && _._setField(A, _._newCustomerIDsHash)
                        }
                        if (e === O) {
                            var s = _._getField(T);
                            s && !_.overwriteCrossDomainMCIDAndAID || ((s = _._findVisitorID(t)) ? s !== R && _._setFieldExpire(P, -1) : s = R, _._setField(T, s)), s && s !== R || (s = ""), _._callAllCallbacks(T, [s])
                        }
                        if (_.idSyncDisableSyncs) N.idCallNotProcesssed = !0;
                        else {
                            N.idCallNotProcesssed = !1;
                            var o = {};
                            o.ibs = t.ibs, o.subdomain = t.subdomain, N.processIDCallData(o)
                        }
                        var c, l;
                        t === Object(t) && (_.isAllowed() && (c = _._getField(E)), c || (c = R, t.d_optout && t.d_optout instanceof Array && (c = t.d_optout.join(",")), l = parseInt(t.d_ottl, 10), isNaN(l) && (l = 7200), _._setFieldExpire(E, l, !0), _._setField(E, c)), _._callAllCallbacks(E, [c]))
                    }, _._loading = null, _._getRemoteField = function(e, t, n, a, i) {
                        var r, s = "",
                            o = F.isFirstPartyAnalyticsVisitorIDCall(e);
                        if (_.isAllowed())
                            if (_._readVisitor(), !(!(s = _._getField(e, !0 === j[e])) || _._fieldsExpired && _._fieldsExpired[e]) || _.disableThirdPartyCalls && !o) s || (e === I ? (_._registerCallback(e, n), s = _._generateID(0, I), _.setMarketingCloudVisitorID(s)) : e === T ? (_._registerCallback(e, n), s = "", _.setAnalyticsVisitorID(s)) : (s = "", a = !0));
                            else if (e === I || e === E ? r = D : e === L || e === P ? r = k : e === T && (r = O), r) return !t || null != _._loading && _._loading[r] || (null == _._loading && (_._loading = {}), _._loading[r] = !0, _._loadData(r, t, function(t) {
                            if (!_._getField(e)) {
                                t && V.setState(r, !0);
                                var n = "";
                                e === I ? n = _._generateID(0, I) : r === k && (n = {
                                    error_msg: "timeout"
                                }), _._setFields(r, n)
                            }
                        }, i)), _._registerCallback(e, n), s || (t || _._setFields(r, {
                            id: R
                        }), "");
                        return e !== I && e !== T || s !== R || (s = "", a = !0), n && a && _._callCallback(n, [s]), s
                    }, _._setMarketingCloudFields = function(e) {
                        _._readVisitor(), _._setFields(D, e)
                    }, _.setMarketingCloudVisitorID = function(e) {
                        _._setMarketingCloudFields(e)
                    }, _._use1stPartyMarketingCloudServer = !1, _.getMarketingCloudVisitorID = function(e, t) {
                        if (_.isAllowed()) {
                            _.marketingCloudServer && _.marketingCloudServer.indexOf(".demdex.net") < 0 && (_._use1stPartyMarketingCloudServer = !0);
                            var n = _._getAudienceManagerURLData("_setMarketingCloudFields"),
                                a = n.url;
                            return _._getRemoteField(I, a, e, t, n)
                        }
                        return ""
                    }, _.getVisitorValues = function(e, t) {
                        var n = {
                            MCMID: {
                                fn: _.getMarketingCloudVisitorID,
                                args: [!0],
                                context: _
                            },
                            MCOPTOUT: {
                                fn: _.isOptedOut,
                                args: [void 0, !0],
                                context: _
                            },
                            MCAID: {
                                fn: _.getAnalyticsVisitorID,
                                args: [!0],
                                context: _
                            },
                            MCAAMLH: {
                                fn: _.getAudienceManagerLocationHint,
                                args: [!0],
                                context: _
                            },
                            MCAAMB: {
                                fn: _.getAudienceManagerBlob,
                                args: [!0],
                                context: _
                            }
                        };
                        o(function() {
                            if (!t || !t.length) return n;
                            var e = {};
                            return t.forEach(function(t) {
                                n[t] && (e[t] = n[t])
                            }), e
                        }(), e)
                    }, _._mapCustomerIDs = function(e) {
                        _.getAudienceManagerBlob(e, !0)
                    }, m.AuthState = {
                        UNKNOWN: 0,
                        AUTHENTICATED: 1,
                        LOGGED_OUT: 2
                    }, _._currentCustomerIDs = {}, _._customerIDsHashChanged = !1, _._newCustomerIDsHash = "", _.setCustomerIDs = function(e) {
                        function t() {
                            _._customerIDsHashChanged = !1
                        }
                        if (_.isAllowed() && e) {
                            var n, a;
                            for (n in _._readVisitor(), e)
                                if (S(n) && (a = e[n]))
                                    if ("object" == typeof a) {
                                        var i = {};
                                        a.id && (i.id = a.id), null != a.authState && (i.authState = a.authState), _._currentCustomerIDs[n] = i
                                    } else _._currentCustomerIDs[n] = {
                                        id: a
                                    };
                            var r = _.getCustomerIDs(),
                                s = _._getField(A),
                                o = "";
                            for (n in s || (s = 0), r) S(n) && (o += (o ? "|" : "") + n + "|" + ((a = r[n]).id ? a.id : "") + (a.authState ? a.authState : ""));
                            _._newCustomerIDsHash = _._hash(o), _._newCustomerIDsHash !== s && (_._customerIDsHashChanged = !0, _._mapCustomerIDs(t))
                        }
                    }, _.getCustomerIDs = function() {
                        _._readVisitor();
                        var e, t, n = {};
                        for (e in _._currentCustomerIDs) S(e) && (t = _._currentCustomerIDs[e], n[e] || (n[e] = {}), t.id && (n[e].id = t.id), null != t.authState ? n[e].authState = t.authState : n[e].authState = m.AuthState.UNKNOWN);
                        return n
                    }, _._setAnalyticsFields = function(e) {
                        _._readVisitor(), _._setFields(O, e)
                    }, _.setAnalyticsVisitorID = function(e) {
                        _._setAnalyticsFields(e)
                    }, _.getAnalyticsVisitorID = function(e, t, n) {
                        if (!F.isTrackingServerPopulated() && !n) return _._callCallback(e, [""]), "";
                        if (_.isAllowed()) {
                            var a = "";
                            if (n || (a = _.getMarketingCloudVisitorID(function() {
                                    _.getAnalyticsVisitorID(e, !0)
                                })), a || n) {
                                var i = n ? _.marketingCloudServer : _.trackingServer,
                                    r = "";
                                _.loadSSL && (n ? _.marketingCloudServerSecure && (i = _.marketingCloudServerSecure) : _.trackingServerSecure && (i = _.trackingServerSecure));
                                var s = {};
                                if (i) {
                                    var o = "http" + (_.loadSSL ? "s" : "") + "://" + i + "/id",
                                        c = "d_visid_ver=" + _.version + "&mcorgid=" + encodeURIComponent(_.marketingCloudOrgID) + (a ? "&mid=" + encodeURIComponent(a) : "") + (_.idSyncDisable3rdPartySyncing ? "&d_coppa=true" : ""),
                                        l = ["s_c_il", _._in, "_set" + (n ? "MarketingCloud" : "Analytics") + "Fields"];
                                    r = o + "?" + c + "&callback=s_c_il%5B" + _._in + "%5D._set" + (n ? "MarketingCloud" : "Analytics") + "Fields", s.corsUrl = o + "?" + c, s.callback = l
                                }
                                return s.url = r, _._getRemoteField(n ? I : T, r, e, t, s)
                            }
                        }
                        return ""
                    }, _._setAudienceManagerFields = function(e) {
                        _._readVisitor(), _._setFields(k, e)
                    }, _._getAudienceManagerURLData = function(e) {
                        var t = _.audienceManagerServer,
                            n = "",
                            a = _._getField(I),
                            i = _._getField(P, !0),
                            r = _._getField(T),
                            s = r && r !== R ? "&d_cid_ic=AVID%01" + encodeURIComponent(r) : "";
                        if (_.loadSSL && _.audienceManagerServerSecure && (t = _.audienceManagerServerSecure), t) {
                            var o, c, l = _.getCustomerIDs();
                            if (l)
                                for (o in l) S(o) && (c = l[o], s += "&d_cid_ic=" + encodeURIComponent(o) + "%01" + encodeURIComponent(c.id ? c.id : "") + (c.authState ? "%01" + c.authState : ""));
                            e || (e = "_setAudienceManagerFields");
                            var u = "http" + (_.loadSSL ? "s" : "") + "://" + t + "/id",
                                d = "d_visid_ver=" + _.version + "&d_rtbd=json&d_ver=2" + (!a && _._use1stPartyMarketingCloudServer ? "&d_verify=1" : "") + "&d_orgid=" + encodeURIComponent(_.marketingCloudOrgID) + "&d_nsid=" + (_.idSyncContainerID || 0) + (a ? "&d_mid=" + encodeURIComponent(a) : "") + (_.idSyncDisable3rdPartySyncing ? "&d_coppa=true" : "") + (!0 === U ? "&d_coop_safe=1" : !1 === U ? "&d_coop_unsafe=1" : "") + (i ? "&d_blob=" + encodeURIComponent(i) : "") + s,
                                p = ["s_c_il", _._in, e];
                            return {
                                url: n = u + "?" + d + "&d_cb=s_c_il%5B" + _._in + "%5D." + e,
                                corsUrl: u + "?" + d,
                                callback: p
                            }
                        }
                        return {
                            url: n
                        }
                    }, _.getAudienceManagerLocationHint = function(e, t) {
                        if (_.isAllowed() && _.getMarketingCloudVisitorID(function() {
                                _.getAudienceManagerLocationHint(e, !0)
                            })) {
                            var n = _._getField(T);
                            if (!n && F.isTrackingServerPopulated() && (n = _.getAnalyticsVisitorID(function() {
                                    _.getAudienceManagerLocationHint(e, !0)
                                })), n || !F.isTrackingServerPopulated()) {
                                var a = _._getAudienceManagerURLData(),
                                    i = a.url;
                                return _._getRemoteField(L, i, e, t, a)
                            }
                        }
                        return ""
                    }, _.getLocationHint = _.getAudienceManagerLocationHint, _.getAudienceManagerBlob = function(e, t) {
                        if (_.isAllowed() && _.getMarketingCloudVisitorID(function() {
                                _.getAudienceManagerBlob(e, !0)
                            })) {
                            var n = _._getField(T);
                            if (!n && F.isTrackingServerPopulated() && (n = _.getAnalyticsVisitorID(function() {
                                    _.getAudienceManagerBlob(e, !0)
                                })), n || !F.isTrackingServerPopulated()) {
                                var a = _._getAudienceManagerURLData(),
                                    i = a.url;
                                return _._customerIDsHashChanged && _._setFieldExpire(P, -1), _._getRemoteField(P, i, e, t, a)
                            }
                        }
                        return ""
                    }, _._supplementalDataIDCurrent = "", _._supplementalDataIDCurrentConsumed = {}, _._supplementalDataIDLast = "", _._supplementalDataIDLastConsumed = {}, _.getSupplementalDataID = function(e, t) {
                        _._supplementalDataIDCurrent || t || (_._supplementalDataIDCurrent = _._generateID(1));
                        var n = _._supplementalDataIDCurrent;
                        return _._supplementalDataIDLast && !_._supplementalDataIDLastConsumed[e] ? (n = _._supplementalDataIDLast, _._supplementalDataIDLastConsumed[e] = !0) : n && (_._supplementalDataIDCurrentConsumed[e] && (_._supplementalDataIDLast = _._supplementalDataIDCurrent, _._supplementalDataIDLastConsumed = _._supplementalDataIDCurrentConsumed, _._supplementalDataIDCurrent = n = t ? "" : _._generateID(1), _._supplementalDataIDCurrentConsumed = {}), n && (_._supplementalDataIDCurrentConsumed[e] = !0)), n
                    }, m.OptOut = {
                        GLOBAL: "global"
                    }, _.getOptOut = function(e, t) {
                        if (_.isAllowed()) {
                            var n = _._getAudienceManagerURLData("_setMarketingCloudFields"),
                                a = n.url;
                            return _._getRemoteField(E, a, e, t, n)
                        }
                        return ""
                    }, _.isOptedOut = function(e, t, n) {
                        if (_.isAllowed()) {
                            t || (t = m.OptOut.GLOBAL);
                            var a = _.getOptOut(function(n) {
                                var a = n === m.OptOut.GLOBAL || n.indexOf(t) >= 0;
                                _._callCallback(e, [a])
                            }, n);
                            return a ? a === m.OptOut.GLOBAL || a.indexOf(t) >= 0 : null
                        }
                        return !1
                    }, _.appendVisitorIDsTo = function(e) {
                        var t = C.ADOBE_MC,
                            n = u([
                                [I, _._getField(I)],
                                [T, _._getField(T)],
                                [v, _.marketingCloudOrgID]
                            ]);
                        try {
                            return _._addQuerystringParam(e, t, n)
                        } catch (t) {
                            return e
                        }
                    }, _.appendSupplementalDataIDTo = function(e, t) {
                        if (!(t = t || _.getSupplementalDataID(F.generateRandomString(), !0))) return e;
                        var n = C.ADOBE_MC_SDID,
                            a = "SDID=" + encodeURIComponent(t) + "|";
                        a += v + "=" + encodeURIComponent(_.marketingCloudOrgID) + "|", a += "TS=" + F.getTimestampInSeconds();
                        try {
                            return _._addQuerystringParam(e, n, a)
                        } catch (t) {
                            return e
                        }
                    }, _._xd = {
                        postMessage: function(e, t, n) {
                            var a = 1;
                            t && (C.POST_MESSAGE_ENABLED ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (n.location = t.replace(/#.*$/, "") + "#" + +new Date + a++ + "&" + e))
                        },
                        receiveMessage: function(e, t) {
                            var n;
                            try {
                                C.POST_MESSAGE_ENABLED && (e && (n = function(n) {
                                    if ("string" == typeof t && n.origin !== t || "[object Function]" === Object.prototype.toString.call(t) && !1 === t(n.origin)) return !1;
                                    e(n)
                                }), p.addEventListener ? p[e ? "addEventListener" : "removeEventListener"]("message", n, !1) : p[e ? "attachEvent" : "detachEvent"]("\xe5", n))
                            } catch (e) {}
                        }
                    };
                    var F = {
                        addListener: h.addEventListener ? function(e, t, n) {
                            e.addEventListener(t, function(e) {
                                "function" == typeof n && n(e)
                            }, !1)
                        } : h.attachEvent ? function(e, t, n) {
                            e.attachEvent("on" + t, function(e) {
                                "function" == typeof n && n(e)
                            })
                        } : void 0,
                        map: function(e, t) {
                            if (Array.prototype.map) return e.map(t);
                            if (void 0 === e || null == e) throw new TypeError;
                            var n = Object(e),
                                a = n.length >>> 0;
                            if ("function" != typeof t) throw new TypeError;
                            for (var i = new Array(a), r = arguments[1], s = 0; s < a; s++) s in n && (i[s] = t.call(r, n[s], s, n));
                            return i
                        },
                        encodeAndBuildRequest: function(e, t) {
                            return this.map(e, function(e) {
                                return encodeURIComponent(e)
                            }).join(t)
                        },
                        parseHash: function(e) {
                            var t = e.indexOf("#");
                            return t > 0 ? e.substr(t) : ""
                        },
                        hashlessUrl: function(e) {
                            var t = e.indexOf("#");
                            return t > 0 ? e.substr(0, t) : e
                        },
                        addQueryParamAtLocation: function(e, t, n) {
                            var a = e.split("&");
                            return n = null != n ? n : a.length, a.splice(n, 0, t), a.join("&")
                        },
                        isFirstPartyAnalyticsVisitorIDCall: function(e, t, n) {
                            return e === T && (t || (t = _.trackingServer), n || (n = _.trackingServerSecure), !("string" != typeof(a = _.loadSSL ? n : t) || !a.length) && a.indexOf("2o7.net") < 0 && a.indexOf("omtrdc.net") < 0);
                            var a
                        },
                        isObject: function(e) {
                            return Boolean(e && e === Object(e))
                        },
                        isLessThan: function(e, t) {
                            return _._compareVersions(e, t) < 0
                        },
                        areVersionsDifferent: function(e, t) {
                            return 0 !== _._compareVersions(e, t)
                        },
                        removeCookie: function(e) {
                            document.cookie = encodeURIComponent(e) + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        },
                        isTrackingServerPopulated: function() {
                            return !!_.trackingServer || !!_.trackingServerSecure
                        },
                        parseJSON: function(e, t) {
                            function i(e, n) {
                                var a, r, s = e[n];
                                if (s && "object" == typeof s)
                                    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (void 0 !== (r = i(s, a)) ? s[a] = r : delete s[a]);
                                return t.call(e, n, s)
                            }
                            if ("object" == typeof JSON && "function" == typeof JSON.parse) return JSON.parse(e, t);
                            var n, r = /^[\],:{}\s]*$/,
                                a = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                                s = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                                o = /(?:^|:|,)(?:\s*\[)+/g,
                                l = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                            if (e = String(e), l.lastIndex = 0, l.test(e) && (e = e.replace(l, function(e) {
                                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                                })), r.test(e.replace(a, "@").replace(s, "]").replace(o, ""))) return n = eval("(" + e + ")"), "function" == typeof t ? i({
                                "": n
                            }, "") : n;
                            throw new SyntaxError("JSON.parse")
                        },
                        getTimestampInSeconds: function() {
                            return Math.round((new Date).getTime() / 1e3)
                        },
                        parsePipeDelimetedKeyValues: function(e) {
                            for (var t = {}, n = e.split("|"), a = 0, i = n.length; a < i; a++) {
                                var r = n[a].split("=");
                                t[r[0]] = decodeURIComponent(r[1])
                            }
                            return t
                        },
                        generateRandomString: function(e) {
                            e = e || 5;
                            for (var t = "", n = "abcdefghijklmnopqrstuvwxyz0123456789"; e--;) t += n[Math.floor(Math.random() * n.length)];
                            return t
                        },
                        parseBoolean: function(e) {
                            return "true" === e || "false" !== e && null
                        }
                    };
                    _._helpers = F;
                    var w = {
                            corsMetadata: (fh = "none", gh = !0, "undefined" != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ? fh = "XMLHttpRequest" : "undefined" != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (gh = !1), Object.prototype.toString.call(p.HTMLElement).indexOf("Constructor") > 0 && (gh = !1)), {
                                corsType: fh,
                                corsCookiesEnabled: gh
                            }),
                            getCORSInstance: function() {
                                return "none" === this.corsMetadata.corsType ? null : new p[this.corsMetadata.corsType]
                            },
                            fireCORS: function(e, t) {
                                function n(t) {
                                    var n;
                                    try {
                                        if ((n = JSON.parse(t)) !== Object(n)) return void a.handleCORSError(e, null, "Response is not JSON")
                                    } catch (t) {
                                        return void a.handleCORSError(e, t, "Error parsing response as JSON")
                                    }
                                    try {
                                        for (var i = e.callback, r = p, s = 0; s < i.length; s++) r = r[i[s]];
                                        r(n)
                                    } catch (t) {
                                        a.handleCORSError(e, t, "Error forming callback function")
                                    }
                                }
                                var a = this;
                                t && (e.loadErrorHandler = t);
                                try {
                                    var i = this.getCORSInstance();
                                    i.open("get", e.corsUrl + "&ts=" + (new Date).getTime(), !0), "XMLHttpRequest" === this.corsMetadata.corsType && (i.withCredentials = !0, i.timeout = _.loadTimeout, i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
                                        4 === this.readyState && 200 === this.status && n(this.responseText)
                                    }), i.onerror = function(t) {
                                        a.handleCORSError(e, t, "onerror")
                                    }, i.ontimeout = function(t) {
                                        a.handleCORSError(e, t, "ontimeout")
                                    }, i.send(), _._log.requests.push(e.corsUrl)
                                } catch (t) {
                                    this.handleCORSError(e, t, "try-catch")
                                }
                            },
                            handleCORSError: function(e, t, n) {
                                _.CORSErrors.push({
                                    corsData: e,
                                    error: t,
                                    description: n
                                }), e.loadErrorHandler && ("ontimeout" === n ? e.loadErrorHandler(!0) : e.loadErrorHandler(!1))
                            }
                        },
                        fh, gh;
                    _._requestProcs = w;
                    var N = {
                        THROTTLE_START: 3e4,
                        MAX_SYNCS_LENGTH: 649,
                        throttleTimerSet: !1,
                        id: null,
                        onPagePixels: [],
                        iframeHost: null,
                        getIframeHost: function(e) {
                            if ("string" == typeof e) {
                                var t = e.split("/");
                                return t[0] + "//" + t[2]
                            }
                        },
                        subdomain: null,
                        url: null,
                        getUrl: function() {
                            var e, t = "http://fast.",
                                n = "?d_nsid=" + _.idSyncContainerID + "#" + encodeURIComponent(h.location.href);
                            return this.subdomain || (this.subdomain = "nosubdomainreturned"), _.loadSSL && (t = _.idSyncSSLUseAkamai ? "https://fast." : "https://"), e = t + this.subdomain + ".demdex.net/dest5.html" + n, this.iframeHost = this.getIframeHost(e), this.id = "destination_publishing_iframe_" + this.subdomain + "_" + _.idSyncContainerID, e
                        },
                        checkDPIframeSrc: function() {
                            var e = "?d_nsid=" + _.idSyncContainerID + "#" + encodeURIComponent(h.location.href);
                            "string" == typeof _.dpIframeSrc && _.dpIframeSrc.length && (this.id = "destination_publishing_iframe_" + (_._subdomain || this.subdomain || (new Date).getTime()) + "_" + _.idSyncContainerID, this.iframeHost = this.getIframeHost(_.dpIframeSrc), this.url = _.dpIframeSrc + e)
                        },
                        idCallNotProcesssed: null,
                        doAttachIframe: !1,
                        startedAttachingIframe: !1,
                        iframeHasLoaded: null,
                        iframeIdChanged: null,
                        newIframeCreated: null,
                        originalIframeHasLoadedAlready: null,
                        regionChanged: !1,
                        timesRegionChanged: 0,
                        sendingMessages: !1,
                        messages: [],
                        messagesPosted: [],
                        messagesReceived: [],
                        messageSendingInterval: C.POST_MESSAGE_ENABLED ? null : 100,
                        jsonForComparison: [],
                        jsonDuplicates: [],
                        jsonWaiting: [],
                        jsonProcessed: [],
                        canSetThirdPartyCookies: !0,
                        receivedThirdPartyCookiesNotification: !1,
                        readyToAttachIframe: function() {
                            return !_.idSyncDisable3rdPartySyncing && (this.doAttachIframe || _._doAttachIframe) && (this.subdomain && "nosubdomainreturned" !== this.subdomain || _._subdomain) && this.url && !this.startedAttachingIframe
                        },
                        attachIframe: function() {
                            function e() {
                                (a = document.createElement("iframe")).sandbox = "allow-scripts allow-same-origin", a.title = "Adobe ID Syncing iFrame", a.id = n.id, a.name = n.id + "_name", a.style.cssText = "display: none; width: 0; height: 0;", a.src = n.url, n.newIframeCreated = !0, t(), document.body.appendChild(a)
                            }

                            function t() {
                                F.addListener(a, "load", function() {
                                    a.className = "aamIframeLoaded", n.iframeHasLoaded = !0, n.requestToProcess()
                                })
                            }
                            this.startedAttachingIframe = !0;
                            var n = this,
                                a = document.getElementById(this.id);
                            a ? "IFRAME" !== a.nodeName ? (this.id += "_2", this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, "aamIframeLoaded" !== a.className ? (this.originalIframeHasLoadedAlready = !1, t()) : (this.originalIframeHasLoadedAlready = !0, this.iframeHasLoaded = !0, this.iframe = a, this.requestToProcess())) : e(), this.iframe = a
                        },
                        requestToProcess: function(e) {
                            function t() {
                                a.jsonForComparison.push(e), a.jsonWaiting.push(e), a.processSyncOnPage(e)
                            }
                            var n, a = this;
                            if (e === Object(e) && e.ibs)
                                if (C.HAS_JSON_STRINGIFY)
                                    if (n = JSON.stringify(e.ibs || []), this.jsonForComparison.length) {
                                        var i, r, s, o = !1;
                                        for (i = 0, r = this.jsonForComparison.length; i < r; i++)
                                            if (s = this.jsonForComparison[i], n === JSON.stringify(s.ibs || [])) {
                                                o = !0;
                                                break
                                            } o ? this.jsonDuplicates.push(e) : t()
                                    } else t();
                            else t();
                            if ((this.receivedThirdPartyCookiesNotification || !C.POST_MESSAGE_ENABLED || this.iframeHasLoaded) && this.jsonWaiting.length) {
                                var c = this.jsonWaiting.shift();
                                this.process(c), this.requestToProcess()
                            }!_.idSyncDisableSyncs && this.iframeHasLoaded && this.messages.length && !this.sendingMessages && (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function() {
                                a.messageSendingInterval = C.POST_MESSAGE_ENABLED ? null : 150
                            }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages())
                        },
                        getRegionAndCheckIfChanged: function(e, t) {
                            var n = _._getField(L),
                                a = e.d_region || e.dcs_region;
                            return n ? a && (_._setFieldExpire(L, t), _._setField(L, a), parseInt(n, 10) !== a && (this.regionChanged = !0, this.timesRegionChanged++, _._setField(M, ""), _._setField(y, ""), n = a)) : (n = a) && (_._setFieldExpire(L, t), _._setField(L, n)), n || (n = ""), n
                        },
                        processSyncOnPage: function(e) {
                            var t, n, a, i;
                            if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (a = 0; a < n; a++)(i = t[a]).syncOnPage && this.checkFirstPartyCookie(i, "", "syncOnPage")
                        },
                        process: function(e) {
                            var t, n, a, i, r, s = encodeURIComponent,
                                o = !1;
                            if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (o = !0, a = 0; a < n; a++) i = t[a], r = [s("ibs"), s(i.id || ""), s(i.tag || ""), F.encodeAndBuildRequest(i.url || [], ","), s(i.ttl || ""), "", "", i.fireURLSync ? "true" : "false"], i.syncOnPage || (this.canSetThirdPartyCookies ? this.addMessage(r.join("|")) : i.fireURLSync && this.checkFirstPartyCookie(i, r.join("|")));
                            o && this.jsonProcessed.push(e)
                        },
                        checkFirstPartyCookie: function(e, t, n) {
                            var a = "syncOnPage" === n,
                                i = a ? M : y;
                            _._readVisitor();
                            var r, s, o = _._getField(i),
                                c = !1,
                                l = !1,
                                u = Math.ceil((new Date).getTime() / C.MILLIS_PER_DAY);
                            o ? (r = o.split("*"), c = (s = this.pruneSyncData(r, e.id, u)).dataPresent, l = s.dataValid, c && l || this.fireSync(a, e, t, r, i, u)) : (r = [], this.fireSync(a, e, t, r, i, u))
                        },
                        pruneSyncData: function(e, t, n) {
                            var a, i, r, s = !1,
                                o = !1;
                            for (i = 0; i < e.length; i++) a = e[i], r = parseInt(a.split("-")[1], 10), a.match("^" + t + "-") ? (s = !0, n < r ? o = !0 : (e.splice(i, 1), i--)) : n >= r && (e.splice(i, 1), i--);
                            return {
                                dataPresent: s,
                                dataValid: o
                            }
                        },
                        manageSyncsSize: function(e) {
                            if (e.join("*").length > this.MAX_SYNCS_LENGTH)
                                for (e.sort(function(e, t) {
                                        return parseInt(e.split("-")[1], 10) - parseInt(t.split("-")[1], 10)
                                    }); e.join("*").length > this.MAX_SYNCS_LENGTH;) e.shift()
                        },
                        fireSync: function(e, t, n, a, i, r) {
                            var s = this;
                            if (e) {
                                if ("img" === t.tag) {
                                    var o, c, l, u, d = t.url,
                                        p = _.loadSSL ? "https:" : "http:";
                                    for (o = 0, c = d.length; o < c; o++) {
                                        l = d[o], u = /^\/\//.test(l);
                                        var g = new Image;
                                        F.addListener(g, "load", function(e, t, n, a) {
                                            return function() {
                                                s.onPagePixels[e] = null, _._readVisitor();
                                                var r, o, c, l, u = _._getField(i),
                                                    d = [];
                                                if (u)
                                                    for (o = 0, c = (r = u.split("*")).length; o < c; o++)(l = r[o]).match("^" + t.id + "-") || d.push(l);
                                                s.setSyncTrackingData(d, t, n, a)
                                            }
                                        }(this.onPagePixels.length, t, i, r)), g.src = (u ? p : "") + l, this.onPagePixels.push(g)
                                    }
                                }
                            } else this.addMessage(n), this.setSyncTrackingData(a, t, i, r)
                        },
                        addMessage: function(e) {
                            var t = encodeURIComponent(_._enableErrorReporting ? "---destpub-debug---" : "---destpub---");
                            this.messages.push((C.POST_MESSAGE_ENABLED ? "" : t) + e)
                        },
                        setSyncTrackingData: function(e, t, n, a) {
                            e.push(t.id + "-" + (a + Math.ceil(t.ttl / 60 / 24))), this.manageSyncsSize(e), _._setField(n, e.join("*"))
                        },
                        sendMessages: function() {
                            var e, t = this,
                                n = "",
                                a = encodeURIComponent;
                            this.regionChanged && (n = a("---destpub-clear-dextp---"), this.regionChanged = !1), this.messages.length ? C.POST_MESSAGE_ENABLED ? (e = n + a("---destpub-combined---") + this.messages.join("%01"), this.postMessage(e), this.messages = [], this.sendingMessages = !1) : (e = this.messages.shift(), this.postMessage(n + e), setTimeout(function() {
                                t.sendMessages()
                            }, this.messageSendingInterval)) : this.sendingMessages = !1
                        },
                        postMessage: function(e) {
                            _._xd.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e)
                        },
                        receiveMessage: function(e) {
                            var t, n = /^---destpub-to-parent---/;
                            "string" == typeof e && n.test(e) && ("canSetThirdPartyCookies" === (t = e.replace(n, "").split("|"))[0] && (this.canSetThirdPartyCookies = "true" === t[1], this.receivedThirdPartyCookiesNotification = !0, this.requestToProcess()), this.messagesReceived.push(e))
                        },
                        processIDCallData: function(e) {
                            (null == this.url || e.subdomain && "nosubdomainreturned" === this.subdomain) && ("string" == typeof _._subdomain && _._subdomain.length ? this.subdomain = _._subdomain : this.subdomain = e.subdomain || "", this.url = this.getUrl()), e.ibs instanceof Array && e.ibs.length && (this.doAttachIframe = !0), this.readyToAttachIframe() && (_.idSyncAttachIframeOnWindowLoad ? (m.windowLoaded || "complete" === h.readyState || "loaded" === h.readyState) && this.attachIframe() : this.attachIframeASAP()), "function" == typeof _.idSyncIDCallResult ? _.idSyncIDCallResult(e) : this.requestToProcess(e), "function" == typeof _.idSyncAfterIDCallResult && _.idSyncAfterIDCallResult(e)
                        },
                        canMakeSyncIDCall: function(e, t) {
                            return _._forceSyncIDCall || !e || t - e > C.DAYS_BETWEEN_SYNC_ID_CALLS
                        },
                        attachIframeASAP: function() {
                            function e() {
                                t.startedAttachingIframe || (document.body ? t.attachIframe() : setTimeout(e, 30))
                            }
                            var t = this;
                            e()
                        }
                    };
                    _._destinationPublishing = N, _.timeoutMetricsLog = [];
                    var x, V = {
                        isClientSideMarketingCloudVisitorID: null,
                        MCIDCallTimedOut: null,
                        AnalyticsIDCallTimedOut: null,
                        AAMIDCallTimedOut: null,
                        fieldGroupObj: {},
                        setState: function(e, t) {
                            switch (e) {
                                case D:
                                    !1 === t ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1) : this.MCIDCallTimedOut = t;
                                    break;
                                case O:
                                    !1 === t ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1) : this.AnalyticsIDCallTimedOut = t;
                                    break;
                                case k:
                                    !1 === t ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1) : this.AAMIDCallTimedOut = t
                            }
                        }
                    };
                    _.isClientSideMarketingCloudVisitorID = function() {
                        return V.isClientSideMarketingCloudVisitorID
                    }, _.MCIDCallTimedOut = function() {
                        return V.MCIDCallTimedOut
                    }, _.AnalyticsIDCallTimedOut = function() {
                        return V.AnalyticsIDCallTimedOut
                    }, _.AAMIDCallTimedOut = function() {
                        return V.AAMIDCallTimedOut
                    }, _.idSyncGetOnPageSyncInfo = function() {
                        return _._readVisitor(), _._getField(M)
                    }, _.idSyncByURL = function(e) {
                        var t = c(e || {});
                        if (t.error) return t.error;
                        var n, a, i = e.url,
                            r = encodeURIComponent,
                            s = N;
                        return i = i.replace(/^https:/, "").replace(/^http:/, ""), n = F.encodeAndBuildRequest(["", e.dpid, e.dpuuid || ""], ","), a = ["ibs", r(e.dpid), "img", r(i), t.ttl, "", n], s.addMessage(a.join("|")), s.requestToProcess(), "Successfully queued"
                    }, _.idSyncByDataSource = function(e) {
                        return e === Object(e) && "string" == typeof e.dpuuid && e.dpuuid.length ? (e.url = "//dpm.demdex.net/ibs:dpid=" + e.dpid + "&dpuuid=" + e.dpuuid, _.idSyncByURL(e)) : "Error: config or config.dpuuid is empty"
                    }, _._compareVersions = function(e, t) {
                        if (e === t) return 0;
                        var n = e.toString().split("."),
                            a = t.toString().split(".");
                        return d(n.concat(a)) ? (f(n, a), g(n, a)) : NaN
                    }, _._getCookieVersion = function(e) {
                        e = e || _.cookieRead(_.cookieName);
                        var t = C.VERSION_REGEX.exec(e);
                        return t && t.length > 1 ? t[1] : null
                    }, _._resetAmcvCookie = function(e) {
                        var t = _._getCookieVersion();
                        t && !F.isLessThan(t, e) || F.removeCookie(_.cookieName)
                    }, _.setAsCoopSafe = function() {
                        U = !0
                    }, _.setAsCoopUnsafe = function() {
                        U = !1
                    }, e.indexOf("@") < 0 && (e += "@AdobeOrg"), _.marketingCloudOrgID = e, _.cookieName = "AMCV_" + e, _.sessionCookieName = "AMCVS_" + e, _.cookieDomain = _._getDomain(), _.cookieDomain === p.location.hostname && (_.cookieDomain = ""), _.loadSSL = p.location.protocol.toLowerCase().indexOf("https") >= 0, _.loadTimeout = 3e4, _.CORSErrors = [], _.marketingCloudServer = _.audienceManagerServer = "dpm.demdex.net", _.sdidParamExpiry = 30;
                    var j = {};
                    j[L] = !0, j[P] = !0;
                    var U = null;
                    if (t && "object" == typeof t) {
                        var H;
                        for (H in t) S(H) && (_[H] = t[H]);
                        _.idSyncContainerID = _.idSyncContainerID || 0, U = "boolean" == typeof _.isCoopSafe ? _.isCoopSafe : F.parseBoolean(_.isCoopSafe), _.resetBeforeVersion && _._resetAmcvCookie(_.resetBeforeVersion), _._attemptToPopulateIdsFromUrl(), _._attemptToPopulateSdidFromUrl(), _._readVisitor();
                        var B = _._getField(b),
                            G = Math.ceil((new Date).getTime() / C.MILLIS_PER_DAY);
                        !_.idSyncDisableSyncs && N.canMakeSyncIDCall(B, G) && (_._setFieldExpire(P, -1), _._setField(b, G)), _.getMarketingCloudVisitorID(), _.getAudienceManagerLocationHint(), _.getAudienceManagerBlob(), _._mergeServerState(_.serverState)
                    } else _._attemptToPopulateIdsFromUrl(), _._attemptToPopulateSdidFromUrl();
                    if (!_.idSyncDisableSyncs) {
                        N.checkDPIframeSrc();
                        var q = function() {
                            var e = N;
                            e.readyToAttachIframe() && e.attachIframe()
                        };
                        F.addListener(p, "load", function() {
                            m.windowLoaded = !0, q()
                        });
                        try {
                            _._xd.receiveMessage(function(e) {
                                N.receiveMessage(e.data)
                            }, N.iframeHost)
                        } catch (e) {}
                    }
                    _.whitelistIframeDomains && C.POST_MESSAGE_ENABLED && (_.whitelistIframeDomains = _.whitelistIframeDomains instanceof Array ? _.whitelistIframeDomains : [_.whitelistIframeDomains], _.whitelistIframeDomains.forEach(function(t) {
                        var n = new a(e, t),
                            i = s(_, n);
                        _._xd.receiveMessage(i, t)
                    }))
                };
            l.getInstance = function(e, t) {
                if (!e) throw new Error("Visitor requires Adobe Marketing Cloud Org ID");
                e.indexOf("@") < 0 && (e += "@AdobeOrg");
                var n = function() {
                    var t = i.s_c_il;
                    if (t)
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            if (a && "Visitor" === a._c && a.marketingCloudOrgID === e) return a
                        }
                }();
                if (n) return n;
                var a = new l(e),
                    s = a.isAllowed();
                return i.s_c_il.splice(--i.s_c_in, 1),
                    function() {
                        try {
                            return i.self !== i.parent
                        } catch (e) {
                            return !0
                        }
                    }() && !s && i.parent ? new r(e, t, a, i.parent) : new l(e, t)
            }, n(), i.Visitor = l, t.exports = l
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./ChildVisitor": 1,
        "./Message": 2,
        "./utils/asyncParallelApply": 8,
        "./utils/makeChildMessageListener": 10
    }],
    4: [function(e, t, n) {
        n.MESSAGES = {
            HANDSHAKE: "HANDSHAKE",
            GETSTATE: "GETSTATE",
            PARENTSTATE: "PARENTSTATE"
        }, n.STATE_KEYS_MAP = {
            MCMID: "MCMID",
            MCAID: "MCAID",
            MCAAMB: "MCAAMB",
            MCAAMLH: "MCAAMLH",
            MCOPTOUT: "MCOPTOUT",
            CUSTOMERIDS: "CUSTOMERIDS"
        }, n.ASYNC_API_MAP = {
            MCMID: "getMarketingCloudVisitorID",
            MCAID: "getAnalyticsVisitorID",
            MCAAMB: "getAudienceManagerBlob",
            MCAAMLH: "getAudienceManagerLocationHint",
            MCOPTOUT: "getOptOut"
        }, n.SYNC_API_MAP = {
            CUSTOMERIDS: "getCustomerIDs"
        }, n.ALL_APIS = {
            MCMID: "getMarketingCloudVisitorID",
            MCAAMB: "getAudienceManagerBlob",
            MCAAMLH: "getAudienceManagerLocationHint",
            MCOPTOUT: "getOptOut",
            MCAID: "getAnalyticsVisitorID",
            CUSTOMERIDS: "getCustomerIDs"
        }, n.FIELDGROUP_TO_FIELD = {
            MC: "MCMID",
            A: "MCAID",
            AAM: "MCAAMB"
        }
    }, {}],
    5: [function(e, t) {
        var n = e("../enums").STATE_KEYS_MAP;
        t.exports = function(e) {
            function t() {}

            function a(t, a) {
                var i = this;
                return function() {
                    var t = e(0, n.MCMID),
                        r = {};
                    return r[n.MCMID] = t, i.setStateAndPublish(r), a(t), t
                }
            }
            this.getMarketingCloudVisitorID = function(e) {
                e = e || t;
                var i = this.findField(n.MCMID, e),
                    r = a.call(this, n.MCMID, e);
                return void 0 !== i ? i : r()
            }
        }
    }, {
        "../enums": 4
    }],
    6: [function(e, t) {
        var n = e("../enums").ASYNC_API_MAP;
        t.exports = function() {
            Object.keys(n).forEach(function(e) {
                this[n[e]] = function(t) {
                    this.callbackRegistry.add(e, t)
                }
            }, this)
        }
    }, {
        "../enums": 4
    }],
    7: [function(e, t) {
        var n = e("../enums"),
            a = n.MESSAGES,
            i = n.ASYNC_API_MAP,
            r = n.SYNC_API_MAP;
        t.exports = function() {
            function e() {}

            function t(e, t) {
                var n = this;
                return function() {
                    return n.callbackRegistry.add(e, t), n.messageParent(a.GETSTATE), ""
                }
            }

            function n(n) {
                this[i[n]] = function(a) {
                    a = a || e;
                    var i = this.findField(n, a),
                        r = t.call(this, n, a);
                    return void 0 !== i ? i : r()
                }
            }

            function s(t) {
                this[r[t]] = function() {
                    return this.findField(t, e) || {}
                }
            }
            Object.keys(i).forEach(n, this), Object.keys(r).forEach(s, this)
        }
    }, {
        "../enums": 4
    }],
    8: [function(e, t) {
        t.exports = function(e, t) {
            function n(e) {
                return function(n) {
                    a[e] = n, ++i === r && t(a)
                }
            }
            var a = {},
                i = 0,
                r = Object.keys(e).length;
            Object.keys(e).forEach(function(t) {
                var a = e[t];
                if (a.fn) {
                    var i = a.args || [];
                    i.unshift(n(t)), a.fn.apply(a.context || null, i)
                }
            })
        }
    }, {}],
    9: [function(e, t) {
        function n() {
            return {
                callbacks: {},
                add: function(e, t) {
                    this.callbacks[e] = this.callbacks[e] || [];
                    var n = this.callbacks[e].push(t) - 1;
                    return function() {
                        this.callbacks[e].splice(n, 1)
                    }
                },
                execute: function(e, t) {
                    if (this.callbacks[e]) {
                        t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                        try {
                            for (; this.callbacks[e].length;) {
                                var n = this.callbacks[e].shift();
                                "function" == typeof n ? n.apply(null, t) : n instanceof Array && n[1].apply(n[0], t)
                            }
                            delete this.callbacks[e]
                        } catch (e) {}
                    }
                },
                executeAll: function(e, t) {
                    (t || e && !a.isObjectEmpty(e)) && Object.keys(this.callbacks).forEach(function(t) {
                        var n = void 0 !== e[t] ? e[t] : "";
                        this.execute(t, n)
                    }, this)
                },
                hasCallbacks: function() {
                    return Boolean(Object.keys(this.callbacks).length)
                }
            }
        }
        var a = e("./utils");
        t.exports = n
    }, {
        "./utils": 12
    }],
    10: [function(e, t) {
        var n = e("../enums"),
            a = e("./utils"),
            i = n.MESSAGES,
            r = n.ALL_APIS,
            s = n.ASYNC_API_MAP,
            o = n.FIELDGROUP_TO_FIELD;
        t.exports = function(e, t) {
            function n() {
                var t = {};
                return Object.keys(r).forEach(function(n) {
                    var i = r[n],
                        s = e[i]();
                    a.isValueEmpty(s) || (t[n] = s)
                }), t
            }

            function c() {
                var t = [];
                return e._loading && Object.keys(e._loading).forEach(function(n) {
                    if (e._loading[n]) {
                        var a = o[n];
                        t.push(a)
                    }
                }), t.length ? t : null
            }

            function l(t) {
                return function n() {
                    var a = c();
                    if (a) {
                        var i = s[a[0]];
                        e[i](n, !0)
                    } else t()
                }
            }

            function u(e, a) {
                var i = n();
                t.send(e, a, i)
            }

            function d(e) {
                g(e), u(e, i.HANDSHAKE)
            }

            function p(e) {
                l(function() {
                    u(e, i.PARENTSTATE)
                })()
            }

            function g(n) {
                function a(a) {
                    r.call(e, a), t.send(n, i.PARENTSTATE, {
                        CUSTOMERIDS: e.getCustomerIDs()
                    })
                }
                var r = e.setCustomerIDs;
                e.setCustomerIDs = a
            }
            return function(e) {
                t.isInvalid(e) || (t.parse(e).prefix === i.HANDSHAKE ? d : p)(e.source)
            }
        }
    }, {
        "../enums": 4,
        "./utils": 12
    }],
    11: [function() {
        Object.keys = Object.keys || function(e) {
            var t = [];
            for (var n in e) t.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }, Array.prototype.forEach = Array.prototype.forEach || function(e, t) {
            for (var n = this, a = 0, i = n.length; a < i; a++) e.call(t, n[a], a, n)
        }, Object.assign = Object.assign || function(e) {
            for (var t, n, a = 1; a < arguments.length; ++a)
                for (t in n = arguments[a]) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            return e
        }
    }, {}],
    12: [function(e, t, n) {
        n.isObjectEmpty = function(e) {
            return e === Object(e) && 0 === Object.keys(e).length
        }, n.isValueEmpty = function(e) {
            return "" === e || n.isObjectEmpty(e)
        }
    }, {}]
}, {}, [1, 2, 3, 4]),
// All code and conventions are protected by copyright
function(e, t, n) {
    function a() {
        E.addEventHandler(e, "orientationchange", a.orientationChange)
    }

    function i(e) {
        this.delay = 250, this.FB = e, E.domReady(E.bind(function() {
            E.poll(E.bind(this.initialize, this), this.delay, 8)
        }, this))
    }

    function r() {
        this.rules = E.filter(E.rules, function(e) {
            return "videoplayed" === e.event.substring(0, 11)
        }), this.eventHandler = E.bind(this.onUpdateTime, this)
    }

    function s() {
        this.rules = E.filter(E.rules, function(e) {
            return "elementexists" === e.event
        })
    }

    function o() {
        E.getToolsByType("nielsen").length > 0 && E.domReady(E.bind(this.initialize, this))
    }

    function c() {
        this.lastURL = E.URL(), this._fireIfURIChanged = E.bind(this.fireIfURIChanged, this), this._onPopState = E.bind(this.onPopState, this), this._onHashChange = E.bind(this.onHashChange, this), this._pushState = E.bind(this.pushState, this), this._replaceState = E.bind(this.replaceState, this), this.initialize()
    }

    function l() {
        var e = E.filter(E.rules, function(e) {
            return 0 === e.event.indexOf("dataelementchange")
        });
        this.dataElementsNames = E.map(e, function(e) {
            return e.event.match(/dataelementchange\((.*)\)/i)[1]
        }, this), this.initPolling()
    }

    function u() {
        var e = this.eventRegex = /^hover\(([0-9]+)\)$/,
            t = this.rules = [];
        E.each(E.rules, function(n) {
            n.event.match(e) && t.push([Number(n.event.match(e)[1]), n.selector])
        })
    }

    function d() {
        this.defineEvents(), this.visibilityApiHasPriority = !0, t.addEventListener ? this.setVisibilityApiPriority(!1) : this.attachDetachOlderEventListeners(!0, t, "focusout");
        E.bindEvent("aftertoolinit", function() {
            E.fireEvent(E.visibility.isHidden() ? "tabblur" : "tabfocus")
        })
    }

    function p(t) {
        E.domReady(E.bind(function() {
            this.twttr = t || e.twttr, this.initialize()
        }, this))
    }

    function g(t) {
        t = t || E.rules, this.rules = E.filter(t, function(e) {
            return "inview" === e.event
        }), this.elements = [], this.eventHandler = E.bind(this.track, this), E.addEventHandler(e, "scroll", this.eventHandler), E.addEventHandler(e, "load", this.eventHandler)
    }

    function f(e) {
        E.BaseTool.call(this, e), this.name = e.name || "Basic"
    }

    function h(e) {
        E.BaseTool.call(this, e), this.name = e.name || "VisitorID", this.initialize()
    }

    function v() {
        E.BaseTool.call(this), this.asyncScriptCallbackQueue = [], this.argsForBlockingScripts = []
    }

    function m(e) {
        E.BaseTool.call(this, e), this.defineListeners(), this.beaconMethod = "plainBeacon", this.adapt = new m.DataAdapters, this.dataProvider = new m.DataProvider.Aggregate
    }

    function _(e) {
        E.BaseTool.call(this, e), this.styleElements = {}, this.targetPageParamsStore = {}
    }

    function k(e) {
        E.BaseTool.call(this, e), this.varBindings = {}, this.events = [], this.products = [], this.customSetupFuns = []
    }

    function y(e) {
        E.BaseTool.call(this, e)
    }

    function b(e) {
        E.BaseTool.call(this, e)
    }
    var D, S, T, C = Object.prototype.toString,
        V = e._satellite && e._satellite.override,
        E = {
            initialized: !1,
            $data: function(e, t, a) {
                if (e) {
                    var i = "__satellite__",
                        r = E.dataCache,
                        s = e[i];
                    s || (s = e[i] = E.uuid++);
                    var o = r[s];
                    if (o || (o = r[s] = {}), a === n) return o[t];
                    o[t] = a
                }
            },
            uuid: 1,
            dataCache: {},
            keys: function(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(n);
                return t
            },
            values: function(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
                return t
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === C.apply(e)
            },
            isObject: function(e) {
                return null != e && !E.isArray(e) && "object" == typeof e
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "[object Number]" === C.apply(e) && !E.isNaN(e)
            },
            isNaN: function(e) {
                return e != e
            },
            isRegex: function(e) {
                return e instanceof RegExp
            },
            isLinkTag: function(e) {
                return !(!e || !e.nodeName || "a" !== e.nodeName.toLowerCase())
            },
            each: function(e, t, n) {
                for (var a = 0, i = e.length; a < i; a++) t.call(n, e[a], a, e)
            },
            map: function(e, t, n) {
                for (var a = [], i = 0, r = e.length; i < r; i++) a.push(t.call(n, e[i], i, e));
                return a
            },
            filter: function(e, t, n) {
                for (var a = [], i = 0, r = e.length; i < r; i++) {
                    var s = e[i];
                    t.call(n, s, i, e) && a.push(s)
                }
                return a
            },
            any: function(e, t, n) {
                for (var a = 0, i = e.length; a < i; a++) {
                    var r = e[a];
                    if (t.call(n, r, a, e)) return !0
                }
                return !1
            },
            every: function(e, t, n) {
                for (var a = !0, i = 0, r = e.length; i < r; i++) {
                    var s = e[i];
                    a = a && t.call(n, s, i, e)
                }
                return a
            },
            contains: function(e, t) {
                return -1 !== E.indexOf(e, t)
            },
            indexOf: function(e, t) {
                if (e.indexOf) return e.indexOf(t);
                for (var n = e.length; n--;)
                    if (t === e[n]) return n;
                return -1
            },
            find: function(e, t, n) {
                if (!e) return null;
                for (var a = 0, i = e.length; a < i; a++) {
                    var r = e[a];
                    if (t.call(n, r, a, e)) return r
                }
                return null
            },
            textMatch: function(e, t) {
                if (null == t) throw new Error("Illegal Argument: Pattern is not present");
                return null != e && ("string" == typeof t ? e === t : t instanceof RegExp && t.test(e))
            },
            stringify: function(e, t) {
                if (t = t || [], E.isObject(e)) {
                    if (E.contains(t, e)) return "<Cycle>";
                    t.push(e)
                }
                if (E.isArray(e)) return "[" + E.map(e, function(e) {
                    return E.stringify(e, t)
                }).join(",") + "]";
                if (E.isString(e)) return '"' + String(e) + '"';
                if (E.isObject(e)) {
                    var n = [];
                    for (var a in e) e.hasOwnProperty(a) && n.push(a + ": " + E.stringify(e[a], t));
                    return "{" + n.join(", ") + "}"
                }
                return String(e)
            },
            trim: function(e) {
                return null == e ? null : e.trim ? e.trim() : e.replace(/^ */, "").replace(/ *$/, "")
            },
            bind: function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            throttle: function(e, t) {
                var n = null;
                return function() {
                    var a = this,
                        i = arguments;
                    clearTimeout(n), n = setTimeout(function() {
                        e.apply(a, i)
                    }, t)
                }
            },
            domReady: function(e) {
                function n(e) {
                    for (p = 1; e = i.shift();) e()
                }
                var a, i = [],
                    r = !1,
                    s = t,
                    o = s.documentElement,
                    c = o.doScroll,
                    l = "DOMContentLoaded",
                    u = "addEventListener",
                    d = "onreadystatechange",
                    p = /^loade|^c/.test(s.readyState);
                return s[u] && s[u](l, a = function() {
                    s.removeEventListener(l, a, r), n()
                }, r), c && s.attachEvent(d, a = function() {
                    /^c/.test(s.readyState) && (s.detachEvent(d, a), n())
                }), e = c ? function(t) {
                    self != top ? p ? t() : i.push(t) : function() {
                        try {
                            o.doScroll("left")
                        } catch (n) {
                            return setTimeout(function() {
                                e(t)
                            }, 50)
                        }
                        t()
                    }()
                } : function(e) {
                    p ? e() : i.push(e)
                }
            }(),
            loadScript: function(e, n) {
                var a = t.createElement("script");
                E.scriptOnLoad(e, a, n), a.src = e, t.getElementsByTagName("head")[0].appendChild(a)
            },
            scriptOnLoad: function(e, t, n) {
                function a(e) {
                    e && E.logError(e), n && n(e)
                }
                "onload" in t ? (t.onload = function() {
                    a()
                }, t.onerror = function() {
                    a(new Error("Failed to load script " + e))
                }) : "readyState" in t && (t.onreadystatechange = function() {
                    var e = t.readyState;
                    "loaded" !== e && "complete" !== e || (t.onreadystatechange = null, a())
                })
            },
            loadScriptOnce: function(e, t) {
                E.loadedScriptRegistry[e] || E.loadScript(e, function(n) {
                    n || (E.loadedScriptRegistry[e] = !0), t && t(n)
                })
            },
            loadedScriptRegistry: {},
            loadScriptSync: function(e) {
                t.write ? E.domReadyFired ? E.notify('Cannot load sync the "' + e + '" script after DOM Ready.', 1) : (e.indexOf('"') > -1 && (e = encodeURI(e)), t.write('<script src="' + e + '"></script>')) : E.notify('Cannot load sync the "' + e + '" script because "document.write" is not available', 1)
            },
            pushAsyncScript: function(e) {
                E.tools["default"].pushAsyncScript(e)
            },
            pushBlockingScript: function(e) {
                E.tools["default"].pushBlockingScript(e)
            },
            addEventHandler: e.addEventListener ? function(e, t, n) {
                e.addEventListener(t, n, !1)
            } : function(e, t, n) {
                e.attachEvent("on" + t, n)
            },
            removeEventHandler: e.removeEventListener ? function(e, t, n) {
                e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                e.detachEvent("on" + t, n)
            },
            preventDefault: e.addEventListener ? function(e) {
                e.preventDefault()
            } : function(e) {
                e.returnValue = !1
            },
            stopPropagation: function(e) {
                e.cancelBubble = !0, e.stopPropagation && e.stopPropagation()
            },
            containsElement: function(e, t) {
                return e.contains ? e.contains(t) : !!(16 & e.compareDocumentPosition(t))
            },
            matchesCss: function(n) {
                function a(e, t) {
                    var n = t.tagName;
                    return !!n && e.toLowerCase() === n.toLowerCase()
                }
                var i = n.matchesSelector || n.mozMatchesSelector || n.webkitMatchesSelector || n.oMatchesSelector || n.msMatchesSelector;
                return i ? function(n, a) {
                    if (a === t || a === e) return !1;
                    try {
                        return i.call(a, n)
                    } catch (r) {
                        return !1
                    }
                } : n.querySelectorAll ? function(e, t) {
                    if (!t.parentNode) return !1;
                    if (e.match(/^[a-z]+$/i)) return a(e, t);
                    try {
                        for (var n = t.parentNode.querySelectorAll(e), i = n.length; i--;)
                            if (n[i] === t) return !0
                    } catch (r) {}
                    return !1
                } : function(e, t) {
                    if (e.match(/^[a-z]+$/i)) return a(e, t);
                    try {
                        return E.Sizzle.matches(e, [t]).length > 0
                    } catch (n) {
                        return !1
                    }
                }
            }(t.documentElement),
            cssQuery: (D = t, D.querySelectorAll ? function(e, t) {
                var n;
                try {
                    n = D.querySelectorAll(e)
                } catch (a) {
                    n = []
                }
                t(n)
            } : function(e, t) {
                if (E.Sizzle) {
                    var n;
                    try {
                        n = E.Sizzle(e)
                    } catch (a) {
                        n = []
                    }
                    t(n)
                } else E.sizzleQueue.push([e, t])
            }),
            hasAttr: function(e, t) {
                return e.hasAttribute ? e.hasAttribute(t) : e[t] !== n
            },
            inherit: function(e, t) {
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            },
            extend: function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            toArray: function() {
                try {
                    var e = Array.prototype.slice;
                    return e.call(t.documentElement.childNodes, 0)[0].nodeType,
                        function(t) {
                            return e.call(t, 0)
                        }
                } catch (n) {
                    return function(e) {
                        for (var t = [], n = 0, a = e.length; n < a; n++) t.push(e[n]);
                        return t
                    }
                }
            }(),
            equalsIgnoreCase: function(e, t) {
                return null == e ? null == t : null != t && String(e).toLowerCase() === String(t).toLowerCase()
            },
            poll: function(e, t, n) {
                function a() {
                    E.isNumber(n) && i++ >= n || e() || setTimeout(a, t)
                }
                var i = 0;
                t = t || 1e3, a()
            },
            escapeForHtml: function(e) {
                return e ? String(e).replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#x27;").replace(/\//g, "&#x2F;") : e
            }
        };
    E.availableTools = {}, E.availableEventEmitters = [], E.fireOnceEvents = ["condition", "elementexists"], E.initEventEmitters = function() {
        E.eventEmitters = E.map(E.availableEventEmitters, function(e) {
            return new e
        })
    }, E.eventEmitterBackgroundTasks = function() {
        E.each(E.eventEmitters, function(e) {
            "backgroundTasks" in e && e.backgroundTasks()
        })
    }, E.initTools = function(e) {
        var t = {
                "default": new v
            },
            n = E.settings.euCookieName || "sat_track";
        for (var a in e)
            if (e.hasOwnProperty(a)) {
                var i, r, s;
                if ((i = e[a]).euCookie)
                    if ("true" !== E.readCookie(n)) continue;
                if (!(r = E.availableTools[i.engine])) {
                    var o = [];
                    for (var c in E.availableTools) E.availableTools.hasOwnProperty(c) && o.push(c);
                    throw new Error("No tool engine named " + i.engine + ", available: " + o.join(",") + ".")
                }(s = new r(i)).id = a, t[a] = s
            } return t
    }, E.preprocessArguments = function(e, t, n, a, i) {
        function r(e) {
            return a && E.isString(e) ? e.toLowerCase() : e
        }

        function s(e) {
            var c = {};
            for (var l in e)
                if (e.hasOwnProperty(l)) {
                    var u = e[l];
                    E.isObject(u) ? c[l] = s(u) : E.isArray(u) ? c[l] = o(u, a) : c[l] = r(E.replace(u, t, n, i))
                } return c
        }

        function o(e) {
            for (var a = [], i = 0, o = e.length; i < o; i++) {
                var c = e[i];
                E.isString(c) ? c = r(E.replace(c, t, n)) : c && c.constructor === Object && (c = s(c)), a.push(c)
            }
            return a
        }
        return e ? o(e, a) : e
    }, E.execute = function(e, t, n, a) {
        function i(i) {
            var r = a[i || "default"];
            if (r) try {
                r.triggerCommand(e, t, n)
            } catch (s) {
                E.logError(s)
            }
        }
        if (!_satellite.settings.hideActivity)
            if (a = a || E.tools, e.engine) {
                var r = e.engine;
                for (var s in a)
                    if (a.hasOwnProperty(s)) {
                        var o = a[s];
                        o.settings && o.settings.engine === r && i(s)
                    }
            } else e.tool instanceof Array ? E.each(e.tool, function(e) {
                i(e)
            }) : i(e.tool)
    }, E.Logger = {
        outputEnabled: !1,
        messages: [],
        keepLimit: 100,
        flushed: !1,
        LEVELS: [null, null, "log", "info", "warn", "error"],
        message: function(e, t) {
            var n = this.LEVELS[t] || "log";
            this.messages.push([n, e]), this.messages.length > this.keepLimit && this.messages.shift(), this.outputEnabled && this.echo(n, e)
        },
        getHistory: function() {
            return this.messages
        },
        clearHistory: function() {
            this.messages = []
        },
        setOutputState: function(e) {
            this.outputEnabled != e && (this.outputEnabled = e, e ? this.flush() : this.flushed = !1)
        },
        echo: function(t, n) {
            e.console && e.console[t]("SATELLITE: " + n)
        },
        flush: function() {
            this.flushed || (E.each(this.messages, function(e) {
                !0 !== e[2] && (this.echo(e[0], e[1]), e[2] = !0)
            }, this), this.flushed = !0)
        }
    }, E.notify = E.bind(E.Logger.message, E.Logger), E.cleanText = function(e) {
        return null == e ? null : E.trim(e).replace(/\s+/g, " ")
    }, E.cleanText.legacy = function(e) {
        return null == e ? null : E.trim(e).replace(/\s{2,}/g, " ").replace(/[^\000-\177]*/g, "")
    }, E.text = function(e) {
        return e.textContent || e.innerText
    }, E.specialProperties = {
        text: E.text,
        cleanText: function(e) {
            return E.cleanText(E.text(e))
        }
    }, E.getObjectProperty = function(e, t, a) {
        for (var i, r = t.split("."), s = e, o = E.specialProperties, c = 0, l = r.length; c < l; c++) {
            if (null == s) return n;
            var u = r[c];
            if (a && "@" === u.charAt(0)) s = o[u.slice(1)](s);
            else if (s.getAttribute && (i = u.match(/^getAttribute\((.+)\)$/))) {
                var d = i[1];
                s = s.getAttribute(d)
            } else s = s[u]
        }
        return s
    }, E.getToolsByType = function(e) {
        if (!e) throw new Error("Tool type is missing");
        var t = [];
        for (var n in E.tools)
            if (E.tools.hasOwnProperty(n)) {
                var a = E.tools[n];
                a.settings && a.settings.engine === e && t.push(a)
            } return t
    }, E.setVar = function() {
        var e = E.data.customVars;
        if (null == e && (E.data.customVars = {}, e = E.data.customVars), "string" == typeof arguments[0]) e[arguments[0]] = arguments[1];
        else if (arguments[0]) {
            var t = arguments[0];
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }
    }, E.dataElementSafe = function(e, t) {
        if (arguments.length > 2) {
            var n = arguments[2];
            "pageview" === t ? E.dataElementSafe.pageviewCache[e] = n : "session" === t ? E.setCookie("_sdsat_" + e, n) : "visitor" === t && E.setCookie("_sdsat_" + e, n, 730)
        } else {
            if ("pageview" === t) return E.dataElementSafe.pageviewCache[e];
            if ("session" === t || "visitor" === t) return E.readCookie("_sdsat_" + e)
        }
    }, E.dataElementSafe.pageviewCache = {}, E.realGetDataElement = function(t) {
        var n;
        return t.selector ? E.hasSelector && E.cssQuery(t.selector, function(e) {
            if (e.length > 0) {
                var a = e[0];
                "text" === t.property ? n = a.innerText || a.textContent : t.property in a ? n = a[t.property] : E.hasAttr(a, t.property) && (n = a.getAttribute(t.property))
            }
        }) : t.queryParam ? n = t.ignoreCase ? E.getQueryParamCaseInsensitive(t.queryParam) : E.getQueryParam(t.queryParam) : t.cookie ? n = E.readCookie(t.cookie) : t.jsVariable ? n = E.getObjectProperty(e, t.jsVariable) : t.customJS ? n = t.customJS() : t.contextHub && (n = t.contextHub()), E.isString(n) && t.cleanText && (n = E.cleanText(n)), n
    }, E.getDataElement = function(e, t, a) {
        if (null == (a = a || E.dataElements[e])) return E.settings.undefinedVarsReturnEmpty ? "" : null;
        var i = E.realGetDataElement(a);
        return i === n && a.storeLength ? i = E.dataElementSafe(e, a.storeLength) : i !== n && a.storeLength && E.dataElementSafe(e, a.storeLength, i), i || t || (i = a["default"] || ""), E.isString(i) && a.forceLowerCase && (i = i.toLowerCase()), i
    }, E.getVar = function(a, i, r) {
        var s, o, c = E.data.customVars,
            l = r ? r.target || r.srcElement : null,
            u = {
                uri: E.URI(),
                protocol: t.location.protocol,
                hostname: t.location.hostname
            };
        if (E.dataElements && a in E.dataElements) return E.getDataElement(a);
        if ((o = u[a.toLowerCase()]) === n)
            if ("this." === a.substring(0, 5)) a = a.slice(5), o = E.getObjectProperty(i, a, !0);
            else if ("event." === a.substring(0, 6)) a = a.slice(6), o = E.getObjectProperty(r, a);
        else if ("target." === a.substring(0, 7)) a = a.slice(7), o = E.getObjectProperty(l, a);
        else if ("window." === a.substring(0, 7)) a = a.slice(7), o = E.getObjectProperty(e, a);
        else if ("param." === a.substring(0, 6)) a = a.slice(6), o = E.getQueryParam(a);
        else if (s = a.match(/^rand([0-9]+)$/)) {
            var d = Number(s[1]),
                p = (Math.random() * (Math.pow(10, d) - 1)).toFixed(0);
            o = Array(d - p.length + 1).join("0") + p
        } else o = E.getObjectProperty(c, a);
        return o
    }, E.getVars = function(e, t, n) {
        var a = {};
        return E.each(e, function(e) {
            a[e] = E.getVar(e, t, n)
        }), a
    }, E.replace = function(e, t, n, a) {
        return "string" != typeof e ? e : e.replace(/%(.*?)%/g, function(e, i) {
            var r = E.getVar(i, t, n);
            return null == r ? E.settings.undefinedVarsReturnEmpty ? "" : e : a ? E.escapeForHtml(r) : r
        })
    }, E.escapeHtmlParams = function(e) {
        return e.escapeHtml = !0, e
    }, E.searchVariables = function(e, t, n) {
        if (!e || 0 === e.length) return "";
        for (var a = [], i = 0, r = e.length; i < r; i++) {
            var s = e[i],
                o = E.getVar(s, t, n);
            a.push(s + "=" + escape(o))
        }
        return "?" + a.join("&")
    }, E.fireRule = function(e, t, n) {
        var a = e.trigger;
        if (a) {
            for (var i = 0, r = a.length; i < r; i++) {
                var s = a[i];
                E.execute(s, t, n)
            }
            E.contains(E.fireOnceEvents, e.event) && (e.expired = !0)
        }
    }, E.isLinked = function(e) {
        for (var t = e; t; t = t.parentNode)
            if (E.isLinkTag(t)) return !0;
        return !1
    }, E.firePageLoadEvent = function(e) {
        for (var n = t.location, a = {
                type: e,
                target: n
            }, i = E.pageLoadRules, r = E.evtHandlers[a.type], s = i.length; s--;) {
            var o = i[s];
            E.ruleMatches(o, a, n) && (E.notify('Rule "' + o.name + '" fired.', 1), E.fireRule(o, n, a))
        }
        for (var c in E.tools)
            if (E.tools.hasOwnProperty(c)) {
                var l = E.tools[c];
                l.endPLPhase && l.endPLPhase(e)
            } r && E.each(r, function(e) {
            e(a)
        })
    }, E.track = function(e) {
        e = e.replace(/^\s*/, "").replace(/\s*$/, "");
        for (var t = 0; t < E.directCallRules.length; t++) {
            var n = E.directCallRules[t];
            if (n.name === e) return E.notify('Direct call Rule "' + e + '" fired.', 1), void E.fireRule(n, location, {
                type: e
            })
        }
        E.notify('Direct call Rule "' + e + '" not found.', 1)
    }, E.basePath = function() {
        return E.data.host ? ("https:" === t.location.protocol ? "https://" + E.data.host.https : "http://" + E.data.host.http) + "/" : this.settings.basePath
    }, E.setLocation = function(t) {
        e.location = t
    }, E.parseQueryParams = function(e) {
        var t = function(e) {
            var t = e;
            try {
                t = decodeURIComponent(e)
            } catch (n) {}
            return t
        };
        if ("" === e || !1 === E.isString(e)) return {};
        0 === e.indexOf("?") && (e = e.substring(1));
        var n = {},
            a = e.split("&");
        return E.each(a, function(e) {
            (e = e.split("="))[1] && (n[t(e[0])] = t(e[1]))
        }), n
    }, E.getCaseSensitivityQueryParamsMap = function(e) {
        var t = E.parseQueryParams(e),
            n = {};
        for (var a in t) t.hasOwnProperty(a) && (n[a.toLowerCase()] = t[a]);
        return {
            normal: t,
            caseInsensitive: n
        }
    }, E.updateQueryParams = function() {
        E.QueryParams = E.getCaseSensitivityQueryParamsMap(e.location.search)
    }, E.updateQueryParams(), E.getQueryParam = function(e) {
        return E.QueryParams.normal[e]
    }, E.getQueryParamCaseInsensitive = function(e) {
        return E.QueryParams.caseInsensitive[e.toLowerCase()]
    }, E.encodeObjectToURI = function(e) {
        if (!1 === E.isObject(e)) return "";
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }, E.readCookie = function(e) {
        for (var a = e + "=", i = t.cookie.split(";"), r = 0; r < i.length; r++) {
            for (var s = i[r];
                " " == s.charAt(0);) s = s.substring(1, s.length);
            if (0 === s.indexOf(a)) return s.substring(a.length, s.length)
        }
        return n
    }, E.setCookie = function(e, n, a) {
        var i;
        if (a) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * a * 60 * 60 * 1e3), i = "; expires=" + r.toGMTString()
        } else i = "";
        t.cookie = e + "=" + n + i + "; path=/"
    }, E.removeCookie = function(e) {
        E.setCookie(e, "", -1)
    }, E.getElementProperty = function(e, t) {
        if ("@" === t.charAt(0)) {
            var a = E.specialProperties[t.substring(1)];
            if (a) return a(e)
        }
        return "innerText" === t ? E.text(e) : t in e ? e[t] : e.getAttribute ? e.getAttribute(t) : n
    }, E.propertiesMatch = function(e, t) {
        if (e)
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var a = e[n],
                        i = E.getElementProperty(t, n);
                    if ("string" == typeof a && a !== i) return !1;
                    if (a instanceof RegExp && !a.test(i)) return !1
                } return !0
    }, E.isRightClick = function(e) {
        var t;
        return e.which ? t = 3 == e.which : e.button && (t = 2 == e.button), t
    }, E.ruleMatches = function(e, t, n, a) {
        var i = e.condition,
            r = e.conditions,
            s = e.property,
            o = t.type,
            c = e.value,
            l = t.target || t.srcElement,
            u = n === l;
        if (e.event !== o && ("custom" !== e.event || e.customEvent !== o)) return !1;
        if (!E.ruleInScope(e)) return !1;
        if ("click" === e.event && E.isRightClick(t)) return !1;
        if (e.isDefault && a > 0) return !1;
        if (e.expired) return !1;
        if ("inview" === o && t.inviewDelay !== e.inviewDelay) return !1;
        if (!u && (!1 === e.bubbleFireIfParent || 0 !== a && !1 === e.bubbleFireIfChildFired)) return !1;
        if (e.selector && !E.matchesCss(e.selector, n)) return !1;
        if (!E.propertiesMatch(s, n)) return !1;
        if (null != c)
            if ("string" == typeof c) {
                if (c !== n.value) return !1
            } else if (!c.test(n.value)) return !1;
        if (i) try {
            if (!i.call(n, t, l)) return E.notify('Condition for rule "' + e.name + '" not met.', 1), !1
        } catch (p) {
            return E.notify('Condition for rule "' + e.name + '" not met. Error: ' + p.message, 1), !1
        }
        if (r) {
            var d = E.find(r, function(a) {
                try {
                    return !a.call(n, t, l)
                } catch (p) {
                    return E.notify('Condition for rule "' + e.name + '" not met. Error: ' + p.message, 1), !0
                }
            });
            if (d) return E.notify("Condition " + d.toString() + ' for rule "' + e.name + '" not met.', 1), !1
        }
        return !0
    }, E.evtHandlers = {}, E.bindEvent = function(e, t) {
        var n = E.evtHandlers;
        n[e] || (n[e] = []), n[e].push(t)
    }, E.whenEvent = E.bindEvent, E.unbindEvent = function(e, t) {
        var n = E.evtHandlers;
        if (n[e]) {
            var a = E.indexOf(n[e], t);
            n[e].splice(a, 1)
        }
    }, E.bindEventOnce = function(e, t) {
        var n = function() {
            E.unbindEvent(e, n), t.apply(null, arguments)
        };
        E.bindEvent(e, n)
    }, E.isVMLPoisoned = function(e) {
        if (!e) return !1;
        try {
            e.nodeName
        } catch (t) {
            if ("Attribute only valid on v:image" === t.message) return !0
        }
        return !1
    }, E.handleEvent = function(e) {
        if (!E.$data(e, "eventProcessed")) {
            var t = e.type.toLowerCase(),
                n = e.target || e.srcElement,
                a = 0,
                i = E.rules,
                r = (E.tools, E.evtHandlers[e.type]);
            if (E.isVMLPoisoned(n)) E.notify("detected " + t + " on poisoned VML element, skipping.", 1);
            else {
                r && E.each(r, function(t) {
                    t(e)
                }), n && n.nodeName ? E.notify("detected " + t + " on " + n.nodeName, 1) : E.notify("detected " + t, 1);
                for (var s = n; s; s = s.parentNode) {
                    var o = !1;
                    if (E.each(i, function(t) {
                            E.ruleMatches(t, e, s, a) && (E.notify('Rule "' + t.name + '" fired.', 1), E.fireRule(t, s, e), a++, t.bubbleStop && (o = !0))
                        }), o) break
                }
                E.$data(e, "eventProcessed", !0)
            }
        }
    }, E.onEvent = t.querySelectorAll ? function(e) {
        E.handleEvent(e)
    } : (S = [], (T = function(e) {
        e.selector ? S.push(e) : E.handleEvent(e)
    }).pendingEvents = S, T), E.fireEvent = function(e, t) {
        E.onEvent({
            type: e,
            target: t
        })
    }, E.registerEvents = function(e, t) {
        for (var n = t.length - 1; n >= 0; n--) {
            var a = t[n];
            E.$data(e, a + ".tracked") || (E.addEventHandler(e, a, E.onEvent), E.$data(e, a + ".tracked", !0))
        }
    }, E.registerEventsForTags = function(e, n) {
        for (var a = e.length - 1; a >= 0; a--)
            for (var i = e[a], r = t.getElementsByTagName(i), s = r.length - 1; s >= 0; s--) E.registerEvents(r[s], n)
    }, E.setListeners = function() {
        var e = ["click", "submit"];
        E.each(E.rules, function(t) {
            "custom" === t.event && t.hasOwnProperty("customEvent") && !E.contains(e, t.customEvent) && e.push(t.customEvent)
        }), E.registerEvents(t, e)
    }, E.getUniqueRuleEvents = function() {
        return E._uniqueRuleEvents || (E._uniqueRuleEvents = [], E.each(E.rules, function(e) {
            -1 === E.indexOf(E._uniqueRuleEvents, e.event) && E._uniqueRuleEvents.push(e.event)
        })), E._uniqueRuleEvents
    }, E.setFormListeners = function() {
        if (!E._relevantFormEvents) {
            var e = ["change", "focus", "blur", "keypress"];
            E._relevantFormEvents = E.filter(E.getUniqueRuleEvents(), function(t) {
                return -1 !== E.indexOf(e, t)
            })
        }
        E._relevantFormEvents.length && E.registerEventsForTags(["input", "select", "textarea", "button"], E._relevantFormEvents)
    }, E.setVideoListeners = function() {
        if (!E._relevantVideoEvents) {
            var e = ["play", "pause", "ended", "volumechange", "stalled", "loadeddata"];
            E._relevantVideoEvents = E.filter(E.getUniqueRuleEvents(), function(t) {
                return -1 !== E.indexOf(e, t)
            })
        }
        E._relevantVideoEvents.length && E.registerEventsForTags(["video"], E._relevantVideoEvents)
    }, E.readStoredSetting = function(t) {
        try {
            return t = "sdsat_" + t, e.localStorage.getItem(t)
        } catch (n) {
            return E.notify("Cannot read stored setting from localStorage: " + n.message, 2), null
        }
    }, E.loadStoredSettings = function() {
        var e = E.readStoredSetting("debug"),
            t = E.readStoredSetting("hide_activity");
        e && (E.settings.notifications = "true" === e), t && (E.settings.hideActivity = "true" === t)
    }, E.isRuleActive = function(e, t) {
        function n(e, t) {
            return t = i(t, {
                hour: e[g](),
                minute: e[f]()
            }), Math.floor(Math.abs((e.getTime() - t.getTime()) / 864e5))
        }

        function a(e, t) {
            function n(e) {
                return 12 * e[d]() + e[p]()
            }
            return Math.abs(n(e) - n(t))
        }

        function i(e, t) {
            var n = new Date(e.getTime());
            for (var a in t)
                if (t.hasOwnProperty(a)) {
                    var i = t[a];
                    switch (a) {
                        case "hour":
                            n[h](i);
                            break;
                        case "minute":
                            n[v](i);
                            break;
                        case "date":
                            n[m](i)
                    }
                } return n
        }

        function r(e, t) {
            return 60 * e[g]() + e[f]() > 60 * t[g]() + t[f]()
        }

        function s(e, t) {
            return 60 * e[g]() + e[f]() < 60 * t[g]() + t[f]()
        }
        var o = e.schedule;
        if (!o) return !0;
        var c = o.utc,
            l = c ? "getUTCDate" : "getDate",
            u = c ? "getUTCDay" : "getDay",
            d = c ? "getUTCFullYear" : "getFullYear",
            p = c ? "getUTCMonth" : "getMonth",
            g = c ? "getUTCHours" : "getHours",
            f = c ? "getUTCMinutes" : "getMinutes",
            h = c ? "setUTCHours" : "setHours",
            v = c ? "setUTCMinutes" : "setMinutes",
            m = c ? "setUTCDate" : "setDate";
        if (t = t || new Date, o.repeat) {
            if (r(o.start, t)) return !1;
            if (s(o.end, t)) return !1;
            if (t < o.start) return !1;
            if (o.endRepeat && t >= o.endRepeat) return !1;
            if ("daily" === o.repeat) {
                if (o.repeatEvery)
                    if (n(o.start, t) % o.repeatEvery != 0) return !1
            } else if ("weekly" === o.repeat) {
                if (o.days) {
                    if (!E.contains(o.days, t[u]())) return !1
                } else if (o.start[u]() !== t[u]()) return !1;
                if (o.repeatEvery)
                    if (n(o.start, t) % (7 * o.repeatEvery) != 0) return !1
            } else if ("monthly" === o.repeat) {
                if (o.repeatEvery)
                    if (a(o.start, t) % o.repeatEvery != 0) return !1;
                if (o.nthWeek && o.mthDay) {
                    if (o.mthDay !== t[u]()) return !1;
                    var _ = Math.floor((t[l]() - t[u]() + 1) / 7);
                    if (o.nthWeek !== _) return !1
                } else if (o.start[l]() !== t[l]()) return !1
            } else if ("yearly" === o.repeat) {
                if (o.start[p]() !== t[p]()) return !1;
                if (o.start[l]() !== t[l]()) return !1;
                if (o.repeatEvery)
                    if (Math.abs(o.start[d]() - t[d]()) % o.repeatEvery != 0) return !1
            }
        } else {
            if (o.start > t) return !1;
            if (o.end < t) return !1
        }
        return !0
    }, E.isOutboundLink = function(e) {
        if (!e.getAttribute("href")) return !1;
        var t = e.hostname,
            n = (e.href, e.protocol);
        return ("http:" === n || "https:" === n) && (!E.any(E.settings.domainList, function(e) {
            return E.isSubdomainOf(t, e)
        }) && t !== location.hostname)
    }, E.isLinkerLink = function(e) {
        return !(!e.getAttribute || !e.getAttribute("href")) && (E.hasMultipleDomains() && e.hostname != location.hostname && !e.href.match(/^javascript/i) && !E.isOutboundLink(e))
    }, E.isSubdomainOf = function(e, t) {
        if (e === t) return !0;
        var n = e.length - t.length;
        return n > 0 && E.equalsIgnoreCase(e.substring(n), t)
    }, E.getVisitorId = function() {
        var e = E.getToolsByType("visitor_id");
        return 0 === e.length ? null : e[0].getInstance()
    }, E.URI = function() {
        var e = t.location.pathname + t.location.search;
        return E.settings.forceLowerCase && (e = e.toLowerCase()), e
    }, E.URL = function() {
        var e = t.location.href;
        return E.settings.forceLowerCase && (e = e.toLowerCase()), e
    }, E.filterRules = function() {
        function e(e) {
            return !!E.isRuleActive(e)
        }
        E.rules = E.filter(E.rules, e), E.pageLoadRules = E.filter(E.pageLoadRules, e)
    }, E.ruleInScope = function(e, n) {
        function a(e, t) {
            function n(e) {
                return t.match(e)
            }
            var a = e.include,
                r = e.exclude;
            if (a && i(a, t)) return !0;
            if (r) {
                if (E.isString(r) && r === t) return !0;
                if (E.isArray(r) && E.any(r, n)) return !0;
                if (E.isRegex(r) && n(r)) return !0
            }
            return !1
        }

        function i(e, t) {
            function n(e) {
                return t.match(e)
            }
            return !(!E.isString(e) || e === t) || (!(!E.isArray(e) || E.any(e, n)) || !(!E.isRegex(e) || n(e)))
        }
        n = n || t.location;
        var r = e.scope;
        if (!r) return !0;
        var s = r.URI,
            o = r.subdomains,
            c = r.domains,
            l = r.protocols,
            u = r.hashes;
        return (!s || !a(s, n.pathname + n.search)) && ((!o || !a(o, n.hostname)) && ((!c || !i(c, n.hostname)) && ((!l || !i(l, n.protocol)) && (!u || !a(u, n.hash)))))
    }, E.backgroundTasks = function() {
        new Date;
        E.setFormListeners(), E.setVideoListeners(), E.loadStoredSettings(), E.registerNewElementsForDynamicRules(), E.eventEmitterBackgroundTasks();
        new Date
    }, E.registerNewElementsForDynamicRules = function() {
        function e(t, n) {
            var a = e.cache[t];
            if (a) return n(a);
            E.cssQuery(t, function(a) {
                e.cache[t] = a, n(a)
            })
        }
        e.cache = {}, E.each(E.dynamicRules, function(t) {
            e(t.selector, function(e) {
                E.each(e, function(e) {
                    var n = "custom" === t.event ? t.customEvent : t.event;
                    E.$data(e, "dynamicRules.seen." + n) || (E.$data(e, "dynamicRules.seen." + n, !0), E.propertiesMatch(t.property, e) && E.registerEvents(e, [n]))
                })
            })
        })
    }, E.ensureCSSSelector = function() {
        t.querySelectorAll ? E.hasSelector = !0 : (E.loadingSizzle = !0, E.sizzleQueue = [], E.loadScript(E.basePath() + "selector.js", function() {
            if (E.Sizzle) {
                var e = E.onEvent.pendingEvents;
                E.each(e, function(e) {
                    E.handleEvent(e)
                }, this), E.onEvent = E.handleEvent, E.hasSelector = !0, delete E.loadingSizzle, E.each(E.sizzleQueue, function(e) {
                    E.cssQuery(e[0], e[1])
                }), delete E.sizzleQueue
            } else E.logError(new Error("Failed to load selector.js"))
        }))
    }, E.errors = [], E.logError = function(e) {
        E.errors.push(e), E.notify(e.name + " - " + e.message, 5)
    }, E.pageBottom = function() {
        E.initialized && (E.pageBottomFired = !0, E.firePageLoadEvent("pagebottom"))
    }, E.stagingLibraryOverride = function() {
        if ("true" === E.readStoredSetting("stagingLibrary")) {
            for (var e, n, a, i = t.getElementsByTagName("script"), r = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/, s = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/, o = 0, c = i.length; o < c && (!(a = i[o].getAttribute("src")) || (e || (e = a.match(r)), n || (n = a.match(s)), !n)); o++);
            if (e && !n) {
                var l = e[1] + "satelliteLib-" + e[2] + "-staging.js";
                if (t.write) t.write('<script src="' + l + '"></script>');
                else {
                    var u = t.createElement("script");
                    u.src = l, t.head.appendChild(u)
                }
                return !0
            }
        }
        return !1
    }, E.checkAsyncInclude = function() {
        e.satellite_asyncLoad && E.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
    }, E.hasMultipleDomains = function() {
        return !!E.settings.domainList && E.settings.domainList.length > 1
    }, E.handleOverrides = function() {
        if (V)
            for (var e in V) V.hasOwnProperty(e) && (E.data[e] = V[e])
    }, E.privacyManagerParams = function() {
        var e = {};
        E.extend(e, E.settings.privacyManagement);
        var t = [];
        for (var n in E.tools)
            if (E.tools.hasOwnProperty(n)) {
                var a = E.tools[n],
                    i = a.settings;
                if (!i) continue;
                "sc" === i.engine && t.push(a)
            } var r = E.filter(E.map(t, function(e) {
            return e.getTrackingServer()
        }), function(e) {
            return null != e
        });
        e.adobeAnalyticsTrackingServers = r;
        for (var s = ["bannerText", "headline", "introductoryText", "customCSS"], o = 0; o < s.length; o++) {
            var c = s[o],
                l = e[c];
            if (l)
                if ("text" === l.type) e[c] = l.value;
                else {
                    if ("data" !== l.type) throw new Error("Invalid type: " + l.type);
                    e[c] = E.getVar(l.value)
                }
        }
        return e
    }, E.prepareLoadPrivacyManager = function() {
        function t(e) {
            function t() {
                ++r === i.length && (n(), clearTimeout(s), e())
            }

            function n() {
                E.each(i, function(e) {
                    E.unbindEvent(e.id + ".load", t)
                })
            }

            function a() {
                n(), e()
            }
            var i = E.filter(E.values(E.tools), function(e) {
                return e.settings && "sc" === e.settings.engine
            });
            if (0 === i.length) return e();
            var r = 0;
            E.each(i, function(e) {
                E.bindEvent(e.id + ".load", t)
            });
            var s = setTimeout(a, 5e3)
        }
        E.addEventHandler(e, "load", function() {
            t(E.loadPrivacyManager)
        })
    }, E.loadPrivacyManager = function() {
        var e = E.basePath() + "privacy_manager.js";
        E.loadScript(e, function() {
            var e = E.privacyManager;
            e.configure(E.privacyManagerParams()), e.openIfRequired()
        })
    }, E.init = function(t) {
        if (!E.stagingLibraryOverride()) {
            E.configurationSettings = t;
            var a = t.tools;
            for (var i in delete t.tools, t) t.hasOwnProperty(i) && (E[i] = t[i]);
            E.data.customVars === n && (E.data.customVars = {}), E.data.queryParams = E.QueryParams.normal, E.handleOverrides(), E.detectBrowserInfo(), E.trackVisitorInfo && E.trackVisitorInfo(), E.loadStoredSettings(), E.Logger.setOutputState(E.settings.notifications), E.checkAsyncInclude(), E.ensureCSSSelector(), E.filterRules(), E.dynamicRules = E.filter(E.rules, function(e) {
                return e.eventHandlerOnElement
            }), E.tools = E.initTools(a), E.initEventEmitters(), E.firePageLoadEvent("aftertoolinit"), E.settings.privacyManagement && E.prepareLoadPrivacyManager(), E.hasSelector && E.domReady(E.eventEmitterBackgroundTasks), E.setListeners(), E.domReady(function() {
                E.poll(function() {
                    E.backgroundTasks()
                }, E.settings.recheckEvery || 3e3)
            }), E.domReady(function() {
                E.domReadyFired = !0, E.pageBottomFired || E.pageBottom(), E.firePageLoadEvent("domready")
            }), E.addEventHandler(e, "load", function() {
                E.firePageLoadEvent("windowload")
            }), E.firePageLoadEvent("pagetop"), E.initialized = !0
        }
    }, E.pageLoadPhases = ["aftertoolinit", "pagetop", "pagebottom", "domready", "windowload"], E.loadEventBefore = function(e, t) {
        return E.indexOf(E.pageLoadPhases, e) <= E.indexOf(E.pageLoadPhases, t)
    }, E.flushPendingCalls = function(e) {
        e.pending && (E.each(e.pending, function(t) {
            var n = t[0],
                a = t[1],
                i = t[2],
                r = t[3];
            n in e ? e[n].apply(e, [a, i].concat(r)) : e.emit ? e.emit(n, a, i, r) : E.notify("Failed to trigger " + n + " for tool " + e.id, 1)
        }), delete e.pending)
    }, E.setDebug = function(t) {
        try {
            e.localStorage.setItem("sdsat_debug", t)
        } catch (n) {
            E.notify("Cannot set debug mode: " + n.message, 2)
        }
    }, E.getUserAgent = function() {
        return navigator.userAgent
    }, E.detectBrowserInfo = function() {
        function e(e) {
            return function(t) {
                for (var n in e) {
                    if (e.hasOwnProperty(n))
                        if (e[n].test(t)) return n
                }
                return "Unknown"
            }
        }
        var t = e({
                "IE Edge Mobile": /Windows Phone.*Edge/,
                "IE Edge": /Edge/,
                OmniWeb: /OmniWeb/,
                "Opera Mini": /Opera Mini/,
                "Opera Mobile": /Opera Mobi/,
                Opera: /Opera/,
                Chrome: /Chrome|CriOS|CrMo/,
                Firefox: /Firefox|FxiOS/,
                "IE Mobile": /IEMobile/,
                IE: /MSIE|Trident/,
                "Mobile Safari": /Mobile(\/[0-9A-z]+)? Safari/,
                Safari: /Safari/
            }),
            n = e({
                Blackberry: /BlackBerry|BB10/,
                "Symbian OS": /Symbian|SymbOS/,
                Maemo: /Maemo/,
                Android: /Android/,
                Linux: / Linux /,
                Unix: /FreeBSD|OpenBSD|CrOS/,
                Windows: /[\( ]Windows /,
                iOS: /iPhone|iPad|iPod/,
                MacOS: /Macintosh;/
            }),
            a = e({
                Nokia: /Symbian|SymbOS|Maemo/,
                "Windows Phone": /Windows Phone/,
                Blackberry: /BlackBerry|BB10/,
                Android: /Android/,
                iPad: /iPad/,
                iPod: /iPod/,
                iPhone: /iPhone/,
                Desktop: /.*/
            }),
            i = E.getUserAgent();
        E.browserInfo = {
            browser: t(i),
            os: n(i),
            deviceType: a(i)
        }
    }, E.isHttps = function() {
        return "https:" == t.location.protocol
    }, E.BaseTool = function(e) {
        this.settings = e || {}, this.forceLowerCase = E.settings.forceLowerCase, "forceLowerCase" in this.settings && (this.forceLowerCase = this.settings.forceLowerCase)
    }, E.BaseTool.prototype = {
        triggerCommand: function(e, t, n) {
            var a = this.settings || {};
            if (this.initialize && this.isQueueAvailable() && this.isQueueable(e) && n && E.loadEventBefore(n.type, a.loadOn)) this.queueCommand(e, t, n);
            else {
                var i = e.command,
                    r = this["$" + i],
                    s = !!r && r.escapeHtml,
                    o = E.preprocessArguments(e.arguments, t, n, this.forceLowerCase, s);
                r ? r.apply(this, [t, n].concat(o)) : this.$missing$ ? this.$missing$(i, t, n, o) : E.notify("Failed to trigger " + i + " for tool " + this.id, 1)
            }
        },
        endPLPhase: function() {},
        isQueueable: function(e) {
            return "cancelToolInit" !== e.command
        },
        isQueueAvailable: function() {
            return !this.initialized && !this.initializing
        },
        flushQueue: function() {
            this.pending && (E.each(this.pending, function(e) {
                this.triggerCommand.apply(this, e)
            }, this), this.pending = [])
        },
        queueCommand: function(e, t, n) {
            this.pending || (this.pending = []), this.pending.push([e, t, n])
        },
        $cancelToolInit: function() {
            this._cancelToolInit = !0
        }
    }, e._satellite = E, a.orientationChange = function(t) {
        var n = 0 === e.orientation ? "portrait" : "landscape";
        t.orientation = n, E.onEvent(t)
    }, E.availableEventEmitters.push(a), i.prototype = {
        initialize: function() {
            if (this.FB = this.FB || e.FB, this.FB && this.FB.Event && this.FB.Event.subscribe) return this.bind(), !0
        },
        bind: function() {
            this.FB.Event.subscribe("edge.create", function() {
                    E.notify("tracking a facebook like", 1), E.onEvent({
                        type: "facebook.like",
                        target: t
                    })
                }), this.FB.Event.subscribe("edge.remove", function() {
                    E.notify("tracking a facebook unlike", 1), E.onEvent({
                        type: "facebook.unlike",
                        target: t
                    })
                }),
                this.FB.Event.subscribe("message.send", function() {
                    E.notify("tracking a facebook share", 1), E.onEvent({
                        type: "facebook.send",
                        target: t
                    })
                })
        }
    }, E.availableEventEmitters.push(i), r.prototype = {
        backgroundTasks: function() {
            var e = this.eventHandler;
            E.each(this.rules, function(t) {
                E.cssQuery(t.selector || "video", function(t) {
                    E.each(t, function(t) {
                        E.$data(t, "videoplayed.tracked") || (E.addEventHandler(t, "timeupdate", E.throttle(e, 100)), E.$data(t, "videoplayed.tracked", !0))
                    })
                })
            })
        },
        evalRule: function(e, t) {
            var n = t.event,
                a = e.seekable,
                i = a.start(0),
                r = a.end(0),
                s = e.currentTime,
                o = t.event.match(/^videoplayed\(([0-9]+)([s%])\)$/);
            if (o) {
                var c = o[2],
                    l = Number(o[1]),
                    u = "%" === c ? function() {
                        return l <= 100 * (s - i) / (r - i)
                    } : function() {
                        return l <= s - i
                    };
                !E.$data(e, n) && u() && (E.$data(e, n, !0), E.onEvent({
                    type: n,
                    target: e
                }))
            }
        },
        onUpdateTime: function(e) {
            var t = this.rules,
                n = e.target;
            if (n.seekable && 0 !== n.seekable.length)
                for (var a = 0, i = t.length; a < i; a++) this.evalRule(n, t[a])
        }
    }, E.availableEventEmitters.push(r), s.prototype.backgroundTasks = function() {
        E.each(this.rules, function(e) {
            E.cssQuery(e.selector, function(e) {
                if (e.length > 0) {
                    var t = e[0];
                    if (E.$data(t, "elementexists.seen")) return;
                    E.$data(t, "elementexists.seen", !0), E.onEvent({
                        type: "elementexists",
                        target: t
                    })
                }
            })
        })
    }, E.availableEventEmitters.push(s), o.prototype = {
        obue: !1,
        initialize: function() {
            this.attachCloseListeners()
        },
        obuePrevUnload: function() {},
        obuePrevBeforeUnload: function() {},
        newObueListener: function() {
            this.obue || (this.obue = !0, this.triggerBeacons())
        },
        attachCloseListeners: function() {
            this.prevUnload = e.onunload, this.prevBeforeUnload = e.onbeforeunload, e.onunload = E.bind(function(t) {
                this.prevUnload && setTimeout(E.bind(function() {
                    this.prevUnload.call(e, t)
                }, this), 1), this.newObueListener()
            }, this), e.onbeforeunload = E.bind(function(t) {
                this.prevBeforeUnload && setTimeout(E.bind(function() {
                    this.prevBeforeUnload.call(e, t)
                }, this), 1), this.newObueListener()
            }, this)
        },
        triggerBeacons: function() {
            E.fireEvent("leave", t)
        }
    }, E.availableEventEmitters.push(o), c.prototype = {
        initialize: function() {
            this.setupHistoryAPI(), this.setupHashChange()
        },
        fireIfURIChanged: function() {
            var e = E.URL();
            this.lastURL !== e && (this.fireEvent(), this.lastURL = e)
        },
        fireEvent: function() {
            E.updateQueryParams(), E.onEvent({
                type: "locationchange",
                target: t
            })
        },
        setupSPASupport: function() {
            this.setupHistoryAPI(), this.setupHashChange()
        },
        setupHistoryAPI: function() {
            var t = e.history;
            t && (t.pushState && (this.originalPushState = t.pushState, t.pushState = this._pushState), t.replaceState && (this.originalReplaceState = t.replaceState, t.replaceState = this._replaceState)), E.addEventHandler(e, "popstate", this._onPopState)
        },
        pushState: function() {
            var e = this.originalPushState.apply(history, arguments);
            return this.onPushState(), e
        },
        replaceState: function() {
            var e = this.originalReplaceState.apply(history, arguments);
            return this.onReplaceState(), e
        },
        setupHashChange: function() {
            E.addEventHandler(e, "hashchange", this._onHashChange)
        },
        onReplaceState: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        onPushState: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        onPopState: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        onHashChange: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        uninitialize: function() {
            this.cleanUpHistoryAPI(), this.cleanUpHashChange()
        },
        cleanUpHistoryAPI: function() {
            history.pushState === this._pushState && (history.pushState = this.originalPushState), history.replaceState === this._replaceState && (history.replaceState = this.originalReplaceState), E.removeEventHandler(e, "popstate", this._onPopState)
        },
        cleanUpHashChange: function() {
            E.removeEventHandler(e, "hashchange", this._onHashChange)
        }
    }, E.availableEventEmitters.push(c), l.prototype.getStringifiedValue = e.JSON && e.JSON.stringify || E.stringify, l.prototype.initPolling = function() {
        0 !== this.dataElementsNames.length && (this.dataElementsStore = this.getDataElementsValues(), E.poll(E.bind(this.checkDataElementValues, this), 1e3))
    }, l.prototype.getDataElementsValues = function() {
        var e = {};
        return E.each(this.dataElementsNames, function(t) {
            var n = E.getVar(t);
            e[t] = this.getStringifiedValue(n)
        }, this), e
    }, l.prototype.checkDataElementValues = function() {
        E.each(this.dataElementsNames, E.bind(function(e) {
            var n = this.getStringifiedValue(E.getVar(e));
            n !== this.dataElementsStore[e] && (this.dataElementsStore[e] = n, E.onEvent({
                type: "dataelementchange(" + e + ")",
                target: t
            }))
        }, this))
    }, E.availableEventEmitters.push(l), u.prototype = {
        backgroundTasks: function() {
            var e = this;
            E.each(this.rules, function(t) {
                var n = t[1],
                    a = t[0];
                E.cssQuery(n, function(t) {
                    E.each(t, function(t) {
                        e.trackElement(t, a)
                    })
                })
            }, this)
        },
        trackElement: function(e, t) {
            var n = this,
                a = E.$data(e, "hover.delays");
            a ? E.contains(a, t) || a.push(t) : (E.addEventHandler(e, "mouseover", function(t) {
                n.onMouseOver(t, e)
            }), E.addEventHandler(e, "mouseout", function(t) {
                n.onMouseOut(t, e)
            }), E.$data(e, "hover.delays", [t]))
        },
        onMouseOver: function(e, t) {
            var n = e.target || e.srcElement,
                a = e.relatedTarget || e.fromElement;
            (t === n || E.containsElement(t, n)) && !E.containsElement(t, a) && this.onMouseEnter(t)
        },
        onMouseEnter: function(e) {
            var t = E.$data(e, "hover.delays"),
                n = E.map(t, function(t) {
                    return setTimeout(function() {
                        E.onEvent({
                            type: "hover(" + t + ")",
                            target: e
                        })
                    }, t)
                });
            E.$data(e, "hover.delayTimers", n)
        },
        onMouseOut: function(e, t) {
            var n = e.target || e.srcElement,
                a = e.relatedTarget || e.toElement;
            (t === n || E.containsElement(t, n)) && !E.containsElement(t, a) && this.onMouseLeave(t)
        },
        onMouseLeave: function(e) {
            var t = E.$data(e, "hover.delayTimers");
            t && E.each(t, function(e) {
                clearTimeout(e)
            })
        }
    }, E.availableEventEmitters.push(u), d.prototype = {
        defineEvents: function() {
            this.oldBlurClosure = function() {
                E.fireEvent("tabblur", t)
            }, this.oldFocusClosure = E.bind(function() {
                this.visibilityApiHasPriority ? E.fireEvent("tabfocus", t) : null != E.visibility.getHiddenProperty() && E.visibility.isHidden() || E.fireEvent("tabfocus", t)
            }, this)
        },
        attachDetachModernEventListeners: function(e) {
            E[0 == e ? "removeEventHandler" : "addEventHandler"](t, E.visibility.getVisibilityEvent(), this.handleVisibilityChange)
        },
        attachDetachOlderEventListeners: function(t, n, a) {
            var i = 0 == t ? "removeEventHandler" : "addEventHandler";
            E[i](n, a, this.oldBlurClosure), E[i](e, "focus", this.oldFocusClosure)
        },
        handleVisibilityChange: function() {
            E.visibility.isHidden() ? E.fireEvent("tabblur", t) : E.fireEvent("tabfocus", t)
        },
        setVisibilityApiPriority: function(t) {
            this.visibilityApiHasPriority = t, this.attachDetachOlderEventListeners(!1, e, "blur"), this.attachDetachModernEventListeners(!1), t ? null != E.visibility.getHiddenProperty() ? this.attachDetachModernEventListeners(!0) : this.attachDetachOlderEventListeners(!0, e, "blur") : (this.attachDetachOlderEventListeners(!0, e, "blur"), null != E.visibility.getHiddenProperty() && this.attachDetachModernEventListeners(!0))
        },
        oldBlurClosure: null,
        oldFocusClosure: null,
        visibilityApiHasPriority: !0
    }, E.availableEventEmitters.push(d), p.prototype = {
        initialize: function() {
            var e = this.twttr;
            e && "function" == typeof e.ready && e.ready(E.bind(this.bind, this))
        },
        bind: function() {
            this.twttr.events.bind("tweet", function(e) {
                e && (E.notify("tracking a tweet button", 1), E.onEvent({
                    type: "twitter.tweet",
                    target: t
                }))
            })
        }
    }, E.availableEventEmitters.push(p), g.offset = function(n) {
        var a = null,
            i = null;
        try {
            var r = n.getBoundingClientRect(),
                s = t,
                o = s.documentElement,
                c = s.body,
                l = e,
                u = o.clientTop || c.clientTop || 0,
                d = o.clientLeft || c.clientLeft || 0,
                p = l.pageYOffset || o.scrollTop || c.scrollTop,
                g = l.pageXOffset || o.scrollLeft || c.scrollLeft;
            a = r.top + p - u, i = r.left + g - d
        } catch (f) {}
        return {
            top: a,
            left: i
        }
    }, g.getViewportHeight = function() {
        var n = e.innerHeight,
            a = t.compatMode;
        return a && (n = "CSS1Compat" == a ? t.documentElement.clientHeight : t.body.clientHeight), n
    }, g.getScrollTop = function() {
        return t.documentElement.scrollTop ? t.documentElement.scrollTop : t.body.scrollTop
    }, g.isElementInDocument = function(e) {
        return t.body.contains(e)
    }, g.isElementInView = function(e) {
        if (!g.isElementInDocument(e)) return !1;
        var t = g.getViewportHeight(),
            n = g.getScrollTop(),
            a = g.offset(e).top,
            i = e.offsetHeight;
        return null !== a && !(n > a + i || n + t < a)
    }, g.prototype = {
        backgroundTasks: function() {
            var e = this.elements;
            E.each(this.rules, function(t) {
                E.cssQuery(t.selector, function(n) {
                    var a = 0;
                    E.each(n, function(t) {
                        E.contains(e, t) || (e.push(t), a++)
                    }), a && E.notify(t.selector + " added " + a + " elements.", 1)
                })
            }), this.track()
        },
        checkInView: function(e, t, n) {
            var a = E.$data(e, "inview");
            if (g.isElementInView(e)) {
                a || E.$data(e, "inview", !0);
                var i = this;
                this.processRules(e, function(n, a, r) {
                    if (t || !n.inviewDelay) E.$data(e, a, !0), E.onEvent({
                        type: "inview",
                        target: e,
                        inviewDelay: n.inviewDelay
                    });
                    else if (n.inviewDelay) {
                        var s = E.$data(e, r);
                        s || (s = setTimeout(function() {
                            i.checkInView(e, !0, n.inviewDelay)
                        }, n.inviewDelay), E.$data(e, r, s))
                    }
                }, n)
            } else {
                if (!g.isElementInDocument(e)) {
                    var r = E.indexOf(this.elements, e);
                    this.elements.splice(r, 1)
                }
                a && E.$data(e, "inview", !1), this.processRules(e, function(t, n, a) {
                    var i = E.$data(e, a);
                    i && clearTimeout(i)
                }, n)
            }
        },
        track: function() {
            for (var e = this.elements.length - 1; e >= 0; e--) this.checkInView(this.elements[e])
        },
        processRules: function(e, t, n) {
            var a = this.rules;
            n && (a = E.filter(this.rules, function(e) {
                return e.inviewDelay == n
            })), E.each(a, function(n, a) {
                var i = n.inviewDelay ? "viewed_" + n.inviewDelay : "viewed",
                    r = "inview_timeout_id_" + a;
                E.$data(e, i) || E.matchesCss(n.selector, e) && t(n, i, r)
            })
        }
    }, E.availableEventEmitters.push(g), E.inherit(f, E.BaseTool), E.extend(f.prototype, {
        initialize: function() {
            var e = this.settings;
            if (!1 !== this.settings.initTool) {
                var t = e.url;
                t = "string" == typeof t ? E.basePath() + t : E.isHttps() ? t.https : t.http, E.loadScript(t, E.bind(this.onLoad, this)), this.initializing = !0
            } else this.initialized = !0
        },
        isQueueAvailable: function() {
            return !this.initialized
        },
        onLoad: function() {
            this.initialized = !0, this.initializing = !1, this.settings.initialBeacon && this.settings.initialBeacon(), this.flushQueue()
        },
        endPLPhase: function(e) {
            e === this.settings.loadOn && (E.notify(this.name + ": Initializing at " + e, 1), this.initialize())
        },
        $fire: function(e, t, n) {
            this.initializing ? this.queueCommand({
                command: "fire",
                arguments: [n]
            }, e, t) : n.call(this.settings, e, t)
        }
    }), E.availableTools.am = f, E.availableTools.adlens = f, E.availableTools.aem = f, E.availableTools.__basic = f, E.extend(h.prototype, {
        getInstance: function() {
            return this.instance
        },
        initialize: function() {
            var e, t = this.settings;
            E.notify("Visitor ID: Initializing tool", 1), null !== (e = this.createInstance(t.mcOrgId, t.initVars)) && (t.customerIDs && this.applyCustomerIDs(e, t.customerIDs), t.autoRequest && e.getMarketingCloudVisitorID(), this.instance = e)
        },
        createInstance: function(e, t) {
            if (!E.isString(e)) return E.notify('Visitor ID: Cannot create instance using mcOrgId: "' + e + '"', 4), null;
            e = E.replace(e), E.notify('Visitor ID: Create instance using mcOrgId: "' + e + '"', 1), t = this.parseValues(t);
            var n = Visitor.getInstance(e, t);
            return E.notify("Visitor ID: Set variables: " + E.stringify(t), 1), n
        },
        applyCustomerIDs: function(e, t) {
            var n = this.parseIds(t);
            e.setCustomerIDs(n), E.notify("Visitor ID: Set Customer IDs: " + E.stringify(n), 1)
        },
        parseValues: function(e) {
            if (!1 === E.isObject(e)) return {};
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = E.replace(e[n]));
            return t
        },
        parseIds: function(e) {
            var t = {};
            if (!1 === E.isObject(e)) return {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var a = E.replace(e[n].id);
                    a !== e[n].id && a && (t[n] = {}, t[n].id = a, t[n].authState = Visitor.AuthState[e[n].authState])
                } return t
        }
    }), E.availableTools.visitor_id = h, E.inherit(v, E.BaseTool), E.extend(v.prototype, {
        name: "Default",
        $loadIframe: function(t, n, a) {
            var i = a.pages,
                r = a.loadOn,
                s = E.bind(function() {
                    E.each(i, function(e) {
                        this.loadIframe(t, n, e)
                    }, this)
                }, this);
            r || s(), "domready" === r && E.domReady(s), "load" === r && E.addEventHandler(e, "load", s)
        },
        loadIframe: function(e, n, a) {
            var i = t.createElement("iframe");
            i.style.display = "none";
            var r = E.data.host,
                s = a.data,
                o = this.scriptURL(a.src),
                c = E.searchVariables(s, e, n);
            r && (o = E.basePath() + o), o += c, i.src = o;
            var l = t.getElementsByTagName("body")[0];
            l ? l.appendChild(i) : E.domReady(function() {
                t.getElementsByTagName("body")[0].appendChild(i)
            })
        },
        scriptURL: function(e) {
            return (E.settings.scriptDir || "") + e
        },
        $loadScript: function(t, n, a) {
            var i = a.scripts,
                r = a.sequential,
                s = a.loadOn,
                o = E.bind(function() {
                    r ? this.loadScripts(t, n, i) : E.each(i, function(e) {
                        this.loadScripts(t, n, [e])
                    }, this)
                }, this);
            s ? "domready" === s ? E.domReady(o) : "load" === s && E.addEventHandler(e, "load", o) : o()
        },
        loadScripts: function(e, t, n) {
            function a() {
                r.length > 0 && i && r.shift().call(e, t, s);
                var c = n.shift();
                if (c) {
                    var l = E.data.host,
                        u = o.scriptURL(c.src);
                    l && (u = E.basePath() + u), i = c, E.loadScript(u, a)
                }
            }
            try {
                n = n.slice(0);
                var i, r = this.asyncScriptCallbackQueue,
                    s = t.target || t.srcElement,
                    o = this
            } catch (c) {
                console.error("scripts is", E.stringify(n))
            }
            a()
        },
        $loadBlockingScript: function(e, t, n) {
            var a = n.scripts;
            n.loadOn;
            E.bind(function() {
                E.each(a, function(n) {
                    this.loadBlockingScript(e, t, n)
                }, this)
            }, this)()
        },
        loadBlockingScript: function(e, t, n) {
            var a = this.scriptURL(n.src),
                i = E.data.host,
                r = t.target || t.srcElement;
            i && (a = E.basePath() + a), this.argsForBlockingScripts.push([e, t, r]), E.loadScriptSync(a)
        },
        pushAsyncScript: function(e) {
            this.asyncScriptCallbackQueue.push(e)
        },
        pushBlockingScript: function(e) {
            var t = this.argsForBlockingScripts.shift(),
                n = t[0];
            e.apply(n, t.slice(1))
        },
        $writeHTML: E.escapeHtmlParams(function(e, n) {
            if (!E.domReadyFired && t.write)
                if ("pagebottom" === n.type || "pagetop" === n.type)
                    for (var a = 2, i = arguments.length; a < i; a++) {
                        var r = arguments[a].html;
                        r = E.replace(r, e, n), t.write(r)
                    } else E.notify("You can only use writeHTML on the `pagetop` and `pagebottom` events.", 1);
                else E.notify("Command writeHTML failed. You should try appending HTML using the async option.", 1)
        }),
        linkNeedsDelayActivate: function(t, n) {
            n = n || e;
            var a = t.tagName,
                i = t.getAttribute("target"),
                r = t.getAttribute("href");
            return (!a || "a" === a.toLowerCase()) && (!!r && (!i || "_blank" !== i && ("_top" === i ? n.top === n : "_parent" !== i && ("_self" === i || (!n.name || i === n.name)))))
        },
        $delayActivateLink: function(e, t) {
            if (this.linkNeedsDelayActivate(e)) {
                E.preventDefault(t);
                var n = E.settings.linkDelay || 100;
                setTimeout(function() {
                    E.setLocation(e.href)
                }, n)
            }
        },
        isQueueable: function(e) {
            return "writeHTML" !== e.command
        }
    }), E.availableTools["default"] = v, E.inherit(m, E.BaseTool), E.extend(m.prototype, {
        name: "Nielsen",
        endPLPhase: function(e) {
            switch (e) {
                case "pagetop":
                    this.initialize();
                    break;
                case "pagebottom":
                    this.enableTracking && (this.queueCommand({
                        command: "sendFirstBeacon",
                        arguments: []
                    }), this.flushQueueWhenReady())
            }
        },
        defineListeners: function() {
            this.onTabFocus = E.bind(function() {
                this.notify("Tab visible, sending view beacon when ready", 1), this.tabEverVisible = !0, this.flushQueueWhenReady()
            }, this), this.onPageLeave = E.bind(function() {
                this.notify("isHuman? : " + this.isHuman(), 1), this.isHuman() && this.sendDurationBeacon()
            }, this), this.onHumanDetectionChange = E.bind(function(e) {
                this == e.target.target && (this.human = e.target.isHuman)
            }, this)
        },
        initialize: function() {
            this.initializeTracking(), this.initializeDataProviders(), this.initializeNonHumanDetection(), this.tabEverVisible = E.visibility.isVisible(), this.tabEverVisible ? this.notify("Tab visible, sending view beacon when ready", 1) : E.bindEventOnce("tabfocus", this.onTabFocus), this.initialized = !0
        },
        initializeTracking: function() {
            this.initialized || (this.notify("Initializing tracking", 1), this.addRemovePageLeaveEvent(this.enableTracking), this.addRemoveHumanDetectionChangeEvent(this.enableTracking), this.initialized = !0)
        },
        initializeDataProviders: function() {
            var e, t = this.getAnalyticsTool();
            this.dataProvider.register(new m.DataProvider.VisitorID(E.getVisitorId())), t ? (e = new m.DataProvider.Generic("rsid", function() {
                return t.settings.account
            }), this.dataProvider.register(e)) : this.notify("Missing integration with Analytics: rsid will not be sent.")
        },
        initializeNonHumanDetection: function() {
            E.nonhumandetection ? (E.nonhumandetection.init(), this.setEnableNonHumanDetection(0 != this.settings.enableNonHumanDetection), this.settings.nonHumanDetectionDelay > 0 && this.setNonHumanDetectionDelay(1e3 * parseInt(this.settings.nonHumanDetectionDelay))) : this.notify("NHDM is not available.")
        },
        getAnalyticsTool: function() {
            if (this.settings.integratesWith) return E.tools[this.settings.integratesWith]
        },
        flushQueueWhenReady: function() {
            this.enableTracking && this.tabEverVisible && E.poll(E.bind(function() {
                if (this.isReadyToTrack()) return this.flushQueue(), !0
            }, this), 100, 20)
        },
        isReadyToTrack: function() {
            return this.tabEverVisible && this.dataProvider.isReady()
        },
        $setVars: function(e, t, n) {
            for (var a in n) {
                var i = n[a];
                "function" == typeof i && (i = i()), this.settings[a] = i
            }
            this.notify("Set variables done", 2), this.prepareContextData()
        },
        $setEnableTracking: function(e, t, n) {
            this.notify("Will" + (n ? "" : " not") + " track time on page", 1), this.enableTracking != n && (this.addRemovePageLeaveEvent(n), this.addRemoveHumanDetectionChangeEvent(n), this.enableTracking = n)
        },
        $sendFirstBeacon: function() {
            this.sendViewBeacon()
        },
        setEnableNonHumanDetection: function(e) {
            e ? E.nonhumandetection.register(this) : E.nonhumandetection.unregister(this)
        },
        setNonHumanDetectionDelay: function(e) {
            E.nonhumandetection.register(this, e)
        },
        addRemovePageLeaveEvent: function(e) {
            this.notify((e ? "Attach onto" : "Detach from") + " page leave event", 1), E[0 == e ? "unbindEvent" : "bindEvent"]("leave", this.onPageLeave)
        },
        addRemoveHumanDetectionChangeEvent: function(e) {
            this.notify((e ? "Attach onto" : "Detach from") + " human detection change event", 1), E[0 == e ? "unbindEvent" : "bindEvent"]("humandetection.change", this.onHumanDetectionChange)
        },
        sendViewBeacon: function() {
            this.notify("Tracked page view.", 1), this.sendBeaconWith()
        },
        sendDurationBeacon: function() {
            if (E.timetracking && "function" == typeof E.timetracking.timeOnPage && null != E.timetracking.timeOnPage()) {
                this.notify("Tracked close", 1), this.sendBeaconWith({
                    timeOnPage: Math.round(E.timetracking.timeOnPage() / 1e3),
                    duration: "D",
                    timer: "timer"
                });
                var e;
                for (e = 0; e < this.magicConst; e++) "0"
            } else this.notify("Could not track close due missing time on page", 5)
        },
        sendBeaconWith: function(e) {
            this.enableTracking && this[this.beaconMethod].call(this, this.prepareUrl(e))
        },
        plainBeacon: function(e) {
            var t = new Image;
            t.src = e, t.width = 1, t.height = 1, t.alt = ""
        },
        navigatorSendBeacon: function(e) {
            navigator.sendBeacon(e)
        },
        prepareUrl: function(e) {
            var t = this.settings;
            return E.extend(t, this.dataProvider.provide()), E.extend(t, e), this.preparePrefix(this.settings.collectionServer) + this.adapt.convertToURI(this.adapt.toNielsen(this.substituteVariables(t)))
        },
        preparePrefix: function(e) {
            return "//" + encodeURIComponent(e) + ".imrworldwide.com/cgi-bin/gn?"
        },
        substituteVariables: function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = E.replace(e[n]));
            return t
        },
        prepareContextData: function() {
            if (this.getAnalyticsTool()) {
                var e = this.settings;
                e.sdkVersion = _satellite.publishDate, this.getAnalyticsTool().$setVars(null, null, {
                    contextData: this.adapt.toAnalytics(this.substituteVariables(e))
                })
            } else this.notify("Adobe Analytics missing.")
        },
        isHuman: function() {
            return this.human
        },
        onTabFocus: function() {},
        onPageLeave: function() {},
        onHumanDetectionChange: function() {},
        notify: function(e, t) {
            E.notify(this.logPrefix + e, t)
        },
        beaconMethod: "plainBeacon",
        adapt: null,
        enableTracking: !1,
        logPrefix: "Nielsen: ",
        tabEverVisible: !1,
        human: !0,
        magicConst: 2e6
    }), m.DataProvider = {}, m.DataProvider.Generic = function(e, t) {
        this.key = e, this.valueFn = t
    }, E.extend(m.DataProvider.Generic.prototype, {
        isReady: function() {
            return !0
        },
        getValue: function() {
            return this.valueFn()
        },
        provide: function() {
            this.isReady() || m.prototype.notify("Not yet ready to provide value for: " + this.key, 5);
            var e = {};
            return e[this.key] = this.getValue(), e
        }
    }), m.DataProvider.VisitorID = function(e, t, n) {
        this.key = t || "uuid", this.visitorInstance = e, this.visitorInstance && (this.visitorId = e.getMarketingCloudVisitorID([this, this._visitorIdCallback])), this.fallbackProvider = n || new m.UUID
    }, E.inherit(m.DataProvider.VisitorID, m.DataProvider.Generic), E.extend(m.DataProvider.VisitorID.prototype, {
        isReady: function() {
            return null === this.visitorInstance || !!this.visitorId
        },
        getValue: function() {
            return this.visitorId || this.fallbackProvider.get()
        },
        _visitorIdCallback: function(e) {
            this.visitorId = e
        }
    }), m.DataProvider.Aggregate = function() {
        this.providers = [];
        for (var e = 0; e < arguments.length; e++) this.register(arguments[e])
    }, E.extend(m.DataProvider.Aggregate.prototype, {
        register: function(e) {
            this.providers.push(e)
        },
        isReady: function() {
            return E.every(this.providers, function(e) {
                return e.isReady()
            })
        },
        provide: function() {
            var e = {};
            return E.each(this.providers, function(t) {
                E.extend(e, t.provide())
            }), e
        }
    }), m.UUID = function() {}, E.extend(m.UUID.prototype, {
        generate: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            })
        },
        get: function() {
            var e = E.readCookie(this.key("uuid"));
            return e || (e = this.generate(), E.setCookie(this.key("uuid"), e), e)
        },
        key: function(e) {
            return "_dtm_nielsen_" + e
        }
    }), m.DataAdapters = function() {}, E.extend(m.DataAdapters.prototype, {
        toNielsen: function(e) {
            var t = (new Date).getTime(),
                a = {
                    c6: "vc,",
                    c13: "asid,",
                    c15: "apn,",
                    c27: "cln,",
                    c32: "segA,",
                    c33: "segB,",
                    c34: "segC,",
                    c35: "adrsid,",
                    c29: "plid,",
                    c30: "bldv,",
                    c40: "adbid,"
                },
                i = {
                    ci: e.clientId,
                    c6: e.vcid,
                    c13: e.appId,
                    c15: e.appName,
                    prv: 1,
                    forward: 0,
                    ad: 0,
                    cr: e.duration || "V",
                    rt: "text",
                    st: "dcr",
                    prd: "dcr",
                    r: t,
                    at: e.timer || "view",
                    c16: e.sdkVersion,
                    c27: e.timeOnPage || 0,
                    c40: e.uuid,
                    c35: e.rsid,
                    ti: t,
                    sup: 0,
                    c32: e.segmentA,
                    c33: e.segmentB,
                    c34: e.segmentC,
                    asn: e.assetName,
                    c29: e.playerID,
                    c30: e.buildVersion
                };
            for (key in i)
                if (i[key] !== n && null != i[key] && i[key] !== n && null != i && "" != i) {
                    var r = encodeURIComponent(i[key]);
                    a.hasOwnProperty(key) && r && (r = a[key] + r), i[key] = r
                } return this.filterObject(i)
        },
        toAnalytics: function(e) {
            return this.filterObject({
                "a.nielsen.clientid": e.clientId,
                "a.nielsen.vcid": e.vcid,
                "a.nielsen.appid": e.appId,
                "a.nielsen.appname": e.appName,
                "a.nielsen.accmethod": "0",
                "a.nielsen.ctype": "text",
                "a.nielsen.sega": e.segmentA,
                "a.nielsen.segb": e.segmentB,
                "a.nielsen.segc": e.segmentC,
                "a.nielsen.asset": e.assetName
            })
        },
        convertToURI: function(e) {
            if (!1 === E.isObject(e)) return "";
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
            return t.join("&")
        },
        filterObject: function(e) {
            for (var t in e) !e.hasOwnProperty(t) || null != e[t] && e[t] !== n || delete e[t];
            return e
        }
    }), E.availableTools.nielsen = m, E.inherit(_, E.BaseTool), E.extend(_.prototype, {
        name: "tnt",
        endPLPhase: function(e) {
            "aftertoolinit" === e && this.initialize()
        },
        initialize: function() {
            E.notify("Test & Target: Initializing", 1), this.initializeTargetPageParams(), this.load()
        },
        initializeTargetPageParams: function() {
            e.targetPageParams && this.updateTargetPageParams(this.parseTargetPageParamsResult(e.targetPageParams())), this.updateTargetPageParams(this.settings.pageParams), this.setTargetPageParamsFunction()
        },
        load: function() {
            var e = this.getMboxURL(this.settings.mboxURL);
            !1 !== this.settings.initTool ? this.settings.loadSync ? (E.loadScriptSync(e), this.onScriptLoaded()) : (E.loadScript(e, E.bind(this.onScriptLoaded, this)), this.initializing = !0) : this.initialized = !0
        },
        getMboxURL: function(t) {
            var n = t;
            return E.isObject(t) && (n = "https:" === e.location.protocol ? t.https : t.http), n.match(/^https?:/) ? n : E.basePath() + n
        },
        onScriptLoaded: function() {
            E.notify("Test & Target: loaded.", 1), this.flushQueue(), this.initialized = !0, this.initializing = !1
        },
        $addMbox: function(e, t, n) {
            var a = n.mboxGoesAround,
                i = a + "{visibility: hidden;}",
                r = this.appendStyle(i);
            a in this.styleElements || (this.styleElements[a] = r), this.initialized ? this.$addMBoxStep2(null, null, n) : this.initializing && this.queueCommand({
                command: "addMBoxStep2",
                arguments: [n]
            }, e, t)
        },
        $addMBoxStep2: function(n, a, i) {
            var r = this.generateID(),
                s = this;
            E.addEventHandler(e, "load", E.bind(function() {
                E.cssQuery(i.mboxGoesAround, function(n) {
                    var a = n[0];
                    if (a) {
                        var o = t.createElement("div");
                        o.id = r, a.parentNode.replaceChild(o, a), o.appendChild(a), e.mboxDefine(r, i.mboxName);
                        var c = [i.mboxName];
                        i.arguments && (c = c.concat(i.arguments)), e.mboxUpdate.apply(null, c), s.reappearWhenCallComesBack(a, r, i.timeout, i)
                    }
                })
            }, this)), this.lastMboxID = r
        },
        $addTargetPageParams: function(e, t, n) {
            this.updateTargetPageParams(n)
        },
        generateID: function() {
            return "_sdsat_mbox_" + String(Math.random()).substring(2) + "_"
        },
        appendStyle: function(e) {
            var n = t.getElementsByTagName("head")[0],
                a = t.createElement("style");
            return a.type = "text/css", a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), n.appendChild(a), a
        },
        reappearWhenCallComesBack: function(e, t, n, a) {
            function i() {
                var e = r.styleElements[a.mboxGoesAround];
                e && (e.parentNode.removeChild(e), delete r.styleElements[a.mboxGoesAround])
            }
            var r = this;
            E.cssQuery('script[src*="omtrdc.net"]', function(e) {
                var t = e[0];
                if (t) {
                    E.scriptOnLoad(t.src, t, function() {
                        E.notify("Test & Target: request complete", 1), i(), clearTimeout(a)
                    });
                    var a = setTimeout(function() {
                        E.notify("Test & Target: bailing after " + n + "ms", 1), i()
                    }, n)
                } else E.notify("Test & Target: failed to find T&T ajax call, bailing", 1), i()
            })
        },
        updateTargetPageParams: function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[E.replace(n)] = E.replace(e[n]));
            E.extend(this.targetPageParamsStore, t)
        },
        getTargetPageParams: function() {
            return this.targetPageParamsStore
        },
        setTargetPageParamsFunction: function() {
            e.targetPageParams = E.bind(this.getTargetPageParams, this)
        },
        parseTargetPageParamsResult: function(e) {
            var t = e;
            return E.isArray(e) && (e = e.join("&")), E.isString(e) && (t = E.parseQueryParams(e)), t
        }
    }), E.availableTools.tnt = _, E.inherit(k, E.BaseTool), E.extend(k.prototype, {
        name: "SC",
        endPLPhase: function(e) {
            e === this.settings.loadOn && this.initialize(e)
        },
        initialize: function(t) {
            if (!this._cancelToolInit)
                if (this.settings.initVars = this.substituteVariables(this.settings.initVars, {
                        type: t
                    }), !1 !== this.settings.initTool) {
                    var n = this.settings.sCodeURL || E.basePath() + "s_code.js";
                    "object" == typeof n && (n = "https:" === e.location.protocol ? n.https : n.http), n.match(/^https?:/) || (n = E.basePath() + n), this.settings.initVars && this.$setVars(null, null, this.settings.initVars), E.loadScript(n, E.bind(this.onSCodeLoaded, this)), this.initializing = !0
                } else this.initializing = !0, this.pollForSC()
        },
        getS: function(t, n) {
            var a = n && n.hostname || e.location.hostname,
                i = this.concatWithToolVarBindings(n && n.setVars || this.varBindings),
                r = n && n.addEvent || this.events,
                s = this.getAccount(a),
                o = e.s_gi;
            if (!o) return null;
            if (this.isValidSCInstance(t) || (t = null), !s && !t) return E.notify("Adobe Analytics: tracker not initialized because account was not found", 1), null;
            t = t || o(s);
            var c = "D" + E.appVersion;
            return "undefined" != typeof t.tagContainerMarker ? t.tagContainerMarker = c : "string" == typeof t.version && t.version.substring(t.version.length - 5) !== "-" + c && (t.version += "-" + c), t.sa && !0 !== this.settings.skipSetAccount && !1 !== this.settings.initTool && t.sa(this.settings.account), this.applyVarBindingsOnTracker(t, i), r.length > 0 && (t.events = r.join(",")), E.getVisitorId() && (t.visitor = E.getVisitorId()), t
        },
        onSCodeLoaded: function(e) {
            this.initialized = !0, this.initializing = !1;
            var t = ["Adobe Analytics: loaded", e ? " (manual)" : "", "."];
            E.notify(t.join(""), 1), E.fireEvent(this.id + ".load", this.getS()), e || (this.flushQueueExceptTrackLink(), this.sendBeacon()), this.flushQueue()
        },
        getAccount: function(t) {
            return e.s_account ? e.s_account : t && this.settings.accountByHost && this.settings.accountByHost[t] || this.settings.account
        },
        getTrackingServer: function() {
            var t = this,
                n = t.getS();
            if (n) {
                if (n.ssl && n.trackingServerSecure) return n.trackingServerSecure;
                if (n.trackingServer) return n.trackingServer
            }
            var a, i = t.getAccount(e.location.hostname);
            if (!i) return null;
            var r, s, o = "",
                c = n && n.dc;
            return (r = (a = i).indexOf(",")) >= 0 && (a = a.gb(0, r)), a = a.replace(/[^A-Za-z0-9]/g, ""), o || (o = "2o7.net"), c = c ? ("" + c).toLowerCase() : "d1", "2o7.net" == o && ("d1" == c ? c = "112" : "d2" == c && (c = "122"), s = ""), r = a + "." + c + "." + s + o
        },
        sendBeacon: function() {
            var t = this.getS(e[this.settings.renameS || "s"]);
            t ? this.settings.customInit && !1 === this.settings.customInit(t) ? E.notify("Adobe Analytics: custom init suppressed beacon", 1) : (this.settings.executeCustomPageCodeFirst && this.applyVarBindingsOnTracker(t, this.varBindings), this.executeCustomSetupFuns(t), t.t(), this.clearVarBindings(), this.clearCustomSetup(), E.notify("Adobe Analytics: tracked page view", 1)) : E.notify("Adobe Analytics: page code not loaded", 1)
        },
        pollForSC: function() {
            E.poll(E.bind(function() {
                if ("function" == typeof e.s_gi) return this.onSCodeLoaded(!0), !0
            }, this))
        },
        flushQueueExceptTrackLink: function() {
            if (this.pending) {
                for (var e = [], t = 0; t < this.pending.length; t++) {
                    var n = this.pending[t];
                    "trackLink" === n[0].command ? e.push(n) : this.triggerCommand.apply(this, n)
                }
                this.pending = e
            }
        },
        isQueueAvailable: function() {
            return !this.initialized
        },
        substituteVariables: function(e, t) {
            var n = {};
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var i = e[a];
                    n[a] = E.replace(i, location, t)
                } return n
        },
        $setVars: function(e, t, n) {
            for (var a in n)
                if (n.hasOwnProperty(a)) {
                    var i = n[a];
                    "function" == typeof i && (i = i()), this.varBindings[a] = i
                } E.notify("Adobe Analytics: set variables.", 2)
        },
        $customSetup: function(e, t, n) {
            this.customSetupFuns.push(function(a) {
                n.call(e, t, a)
            })
        },
        isValidSCInstance: function(e) {
            return !!e && "function" == typeof e.t && "function" == typeof e.tl
        },
        concatWithToolVarBindings: function(e) {
            var t = this.settings.initVars || {};
            return E.map(["trackingServer", "trackingServerSecure"], function(n) {
                t[n] && !e[n] && (e[n] = t[n])
            }), e
        },
        applyVarBindingsOnTracker: function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        },
        clearVarBindings: function() {
            this.varBindings = {}
        },
        clearCustomSetup: function() {
            this.customSetupFuns = []
        },
        executeCustomSetupFuns: function(t) {
            E.each(this.customSetupFuns, function(n) {
                n.call(e, t)
            })
        },
        $trackLink: function(e, t, n) {
            var a = (n = n || {}).type,
                i = n.linkName;
            !i && e && e.nodeName && "a" === e.nodeName.toLowerCase() && (i = e.innerHTML), i || (i = "link clicked");
            var r = n && n.setVars,
                s = n && n.addEvent || [],
                o = this.getS(null, {
                    setVars: r,
                    addEvent: s
                });
            if (o) {
                var c = o.linkTrackVars,
                    l = o.linkTrackEvents,
                    u = this.definedVarNames(r);
                n && n.customSetup && n.customSetup.call(e, t, o), s.length > 0 && u.push("events"), o.products && u.push("products"), u = this.mergeTrackLinkVars(o.linkTrackVars, u), s = this.mergeTrackLinkVars(o.linkTrackEvents, s), o.linkTrackVars = this.getCustomLinkVarsList(u);
                var d = E.map(s, function(e) {
                    return e.split(":")[0]
                });
                o.linkTrackEvents = this.getCustomLinkVarsList(d), o.tl(!0, a || "o", i), E.notify(["Adobe Analytics: tracked link ", "using: linkTrackVars=", E.stringify(o.linkTrackVars), "; linkTrackEvents=", E.stringify(o.linkTrackEvents)].join(""), 1), o.linkTrackVars = c, o.linkTrackEvents = l
            } else E.notify("Adobe Analytics: page code not loaded", 1)
        },
        mergeTrackLinkVars: function(e, t) {
            return e && (t = e.split(",").concat(t)), t
        },
        getCustomLinkVarsList: function(e) {
            var t = E.indexOf(e, "None");
            return t > -1 && e.length > 1 && e.splice(t, 1), e.join(",")
        },
        definedVarNames: function(e) {
            e = e || this.varBindings;
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(n) && t.push(n);
            return t
        },
        $trackPageView: function(e, t, n) {
            var a = n && n.setVars,
                i = n && n.addEvent || [],
                r = this.getS(null, {
                    setVars: a,
                    addEvent: i
                });
            r ? (r.linkTrackVars = "", r.linkTrackEvents = "", this.executeCustomSetupFuns(r), n && n.customSetup && n.customSetup.call(e, t, r), r.t(), this.clearVarBindings(), this.clearCustomSetup(), E.notify("Adobe Analytics: tracked page view", 1)) : E.notify("Adobe Analytics: page code not loaded", 1)
        },
        $postTransaction: function(t, n, a) {
            var i = E.data.transaction = e[a],
                r = this.varBindings,
                s = this.settings.fieldVarMapping;
            if (E.each(i.items, function(e) {
                    this.products.push(e)
                }, this), r.products = E.map(this.products, function(e) {
                    var t = [];
                    if (s && s.item)
                        for (var n in s.item)
                            if (s.item.hasOwnProperty(n)) {
                                var a = s.item[n];
                                t.push(a + "=" + e[n]), "event" === a.substring(0, 5) && this.events.push(a)
                            } var i = ["", e.product, e.quantity, e.unitPrice * e.quantity];
                    return t.length > 0 && i.push(t.join("|")), i.join(";")
                }, this).join(","), s && s.transaction) {
                var o = [];
                for (var c in s.transaction)
                    if (s.transaction.hasOwnProperty(c)) {
                        a = s.transaction[c];
                        o.push(a + "=" + i[c]), "event" === a.substring(0, 5) && this.events.push(a)
                    } r.products.length > 0 && (r.products += ","), r.products += ";;;;" + o.join("|")
            }
        },
        $addEvent: function() {
            for (var e = 2, t = arguments.length; e < t; e++) this.events.push(arguments[e])
        },
        $addProduct: function() {
            for (var e = 2, t = arguments.length; e < t; e++) this.products.push(arguments[e])
        }
    }), E.availableTools.sc = k, E.inherit(y, E.BaseTool), E.extend(y.prototype, {
        name: "GA",
        initialize: function() {
            var t = this.settings,
                n = e._gaq,
                a = t.initCommands || [],
                i = t.customInit;
            if (n || (_gaq = []), this.isSuppressed()) E.notify("GA: page code not loaded(suppressed).", 1);
            else {
                if (!n && !y.scriptLoaded) {
                    var r = E.isHttps(),
                        s = (r ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                    t.url && (s = r ? t.url.https : t.url.http), E.loadScript(s), y.scriptLoaded = !0, E.notify("GA: page code loaded.", 1)
                }
                t.domain;
                var o = t.trackerName,
                    c = I.allowLinker(),
                    l = E.replace(t.account, location);
                E.settings.domainList;
                _gaq.push([this.cmd("setAccount"), l]), c && _gaq.push([this.cmd("setAllowLinker"), c]), _gaq.push([this.cmd("setDomainName"), I.cookieDomain()]), E.each(a, function(e) {
                    var t = [this.cmd(e[0])].concat(E.preprocessArguments(e.slice(1), location, null, this.forceLowerCase));
                    _gaq.push(t)
                }, this), i && (this.suppressInitialPageView = !1 === i(_gaq, o)), t.pageName && this.$overrideInitialPageView(null, null, t.pageName)
            }
            this.initialized = !0, E.fireEvent(this.id + ".configure", _gaq, o)
        },
        isSuppressed: function() {
            return this._cancelToolInit || !1 === this.settings.initTool
        },
        tracker: function() {
            return this.settings.trackerName
        },
        cmd: function(e) {
            var t = this.tracker();
            return t ? t + "._" + e : "_" + e
        },
        $overrideInitialPageView: function(e, t, n) {
            this.urlOverride = n
        },
        trackInitialPageView: function() {
            if (!this.isSuppressed() && !this.suppressInitialPageView)
                if (this.urlOverride) {
                    var e = E.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase);
                    this.$missing$("trackPageview", null, null, e)
                } else this.$missing$("trackPageview")
        },
        endPLPhase: function(e) {
            e === this.settings.loadOn && (E.notify("GA: Initializing at " + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView())
        },
        call: function(e, t, n, a) {
            if (!this._cancelToolInit) {
                this.settings;
                var i = this.tracker(),
                    r = this.cmd(e);
                a = a ? [r].concat(a) : [r];
                _gaq.push(a), i ? E.notify("GA: sent command " + e + " to tracker " + i + (a.length > 1 ? " with parameters [" + a.slice(1).join(", ") + "]" : "") + ".", 1) : E.notify("GA: sent command " + e + (a.length > 1 ? " with parameters [" + a.slice(1).join(", ") + "]" : "") + ".", 1)
            }
        },
        $missing$: function(e, t, n, a) {
            this.call(e, t, n, a)
        },
        $postTransaction: function(t, n, a) {
            var i = E.data.customVars.transaction = e[a];
            this.call("addTrans", t, n, [i.orderID, i.affiliation, i.total, i.tax, i.shipping, i.city, i.state, i.country]), E.each(i.items, function(e) {
                this.call("addItem", t, n, [e.orderID, e.sku, e.product, e.category, e.unitPrice, e.quantity])
            }, this), this.call("trackTrans", t, n)
        },
        delayLink: function(e, t) {
            var n = this;
            if (I.allowLinker() && e.hostname.match(this.settings.linkerDomains) && !E.isSubdomainOf(e.hostname, location.hostname)) {
                E.preventDefault(t);
                var a = E.settings.linkDelay || 100;
                setTimeout(function() {
                    n.call("link", e, t, [e.href])
                }, a)
            }
        },
        popupLink: function(t, n) {
            if (e._gat) {
                E.preventDefault(n);
                var a = this.settings.account,
                    i = e._gat._createTracker(a)._getLinkerUrl(t.href);
                e.open(i)
            }
        },
        $link: function(e, t) {
            "_blank" === e.getAttribute("target") ? this.popupLink(e, t) : this.delayLink(e, t)
        },
        $trackEvent: function(e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            if (n.length >= 4 && null != n[3]) {
                var a = parseInt(n[3], 10);
                E.isNaN(a) && (a = 1), n[3] = a
            }
            this.call("trackEvent", e, t, n)
        }
    }), E.availableTools.ga = y, E.inherit(b, E.BaseTool), E.extend(b.prototype, {
        name: "GAUniversal",
        endPLPhase: function(e) {
            e === this.settings.loadOn && (E.notify("GAU: Initializing at " + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView())
        },
        getTrackerName: function() {
            return this.settings.trackerSettings.name || ""
        },
        isPageCodeLoadSuppressed: function() {
            return !1 === this.settings.initTool || !0 === this._cancelToolInit
        },
        initialize: function() {
            if (this.isPageCodeLoadSuppressed()) return this.initialized = !0, void E.notify("GAU: Page code not loaded (suppressed).", 1);
            var t = "ga";
            e[t] = e[t] || this.createGAObject(), e.GoogleAnalyticsObject = t, E.notify("GAU: Page code loaded.", 1), E.loadScriptOnce(this.getToolUrl());
            var n = this.settings;
            (I.allowLinker() && !1 !== n.allowLinker ? this.createAccountForLinker() : this.createAccount(), this.executeInitCommands(), n.customInit) && (!1 === (0, n.customInit)(e[t], this.getTrackerName()) && (this.suppressInitialPageView = !0));
            this.initialized = !0
        },
        createGAObject: function() {
            var e = function() {
                e.q.push(arguments)
            };
            return e.q = [], e.l = 1 * new Date, e
        },
        createAccount: function() {
            this.create()
        },
        createAccountForLinker: function() {
            var e = {};
            I.allowLinker() && (e.allowLinker = !0), this.create(e), this.call("require", "linker"), this.call("linker:autoLink", this.autoLinkDomains(), !1, !0)
        },
        create: function(e) {
            var t = this.settings.trackerSettings;
            (t = E.preprocessArguments([t], location, null, this.forceLowerCase)[0]).trackingId = E.replace(this.settings.trackerSettings.trackingId, location), t.cookieDomain || (t.cookieDomain = I.cookieDomain()), E.extend(t, e || {}), this.call("create", t)
        },
        autoLinkDomains: function() {
            var e = location.hostname;
            return E.filter(E.settings.domainList, function(t) {
                return t !== e
            })
        },
        executeInitCommands: function() {
            var e = this.settings;
            e.initCommands && E.each(e.initCommands, function(e) {
                var t = e.splice(2, e.length - 2);
                e = e.concat(E.preprocessArguments(t, location, null, this.forceLowerCase)), this.call.apply(this, e)
            }, this)
        },
        trackInitialPageView: function() {
            this.suppressInitialPageView || this.isPageCodeLoadSuppressed() || this.call("send", "pageview")
        },
        call: function() {
            "function" == typeof ga ? this.isCallSuppressed() || (arguments[0] = this.cmd(arguments[0]), this.log(E.toArray(arguments)), ga.apply(e, arguments)) : E.notify("GA Universal function not found!", 4)
        },
        isCallSuppressed: function() {
            return !0 === this._cancelToolInit
        },
        $missing$: function(e, t, n, a) {
            a = a || [], a = [e].concat(a), this.call.apply(this, a)
        },
        getToolUrl: function() {
            var e = this.settings,
                t = E.isHttps();
            return e.url ? t ? e.url.https : e.url.http : (t ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js"
        },
        cmd: function(e) {
            var t = ["send", "set", "get"],
                n = this.getTrackerName();
            return n && -1 !== E.indexOf(t, e) ? n + "." + e : e
        },
        log: function(e) {
            var t = "GA Universal: sent command " + e[0] + " to tracker " + (this.getTrackerName() || "default");
            if (e.length > 1) {
                E.stringify(e.slice(1));
                t += " with parameters " + E.stringify(e.slice(1))
            }
            t += ".", E.notify(t, 1)
        }
    }), E.availableTools.ga_universal = b;
    var I = {
        allowLinker: function() {
            return E.hasMultipleDomains()
        },
        cookieDomain: function() {
            var t = E.settings.domainList,
                n = E.find(t, function(t) {
                    var n = e.location.hostname;
                    return E.equalsIgnoreCase(n.slice(n.length - t.length), t)
                });
            return n ? "." + n : "auto"
        }
    };
    E.ecommerce = {
        addItem: function() {
            var e = [].slice.call(arguments);
            E.onEvent({
                type: "ecommerce.additem",
                target: e
            })
        },
        addTrans: function() {
            var e = [].slice.call(arguments);
            E.data.saleData.sale = {
                orderId: e[0],
                revenue: e[2]
            }, E.onEvent({
                type: "ecommerce.addtrans",
                target: e
            })
        },
        trackTrans: function() {
            E.onEvent({
                type: "ecommerce.tracktrans",
                target: []
            })
        }
    }, E.visibility = {
        isHidden: function() {
            var e = this.getHiddenProperty();
            return !!e && t[e]
        },
        isVisible: function() {
            return !this.isHidden()
        },
        getHiddenProperty: function() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in t) return "hidden";
            for (var n = 0; n < e.length; n++)
                if (e[n] + "Hidden" in t) return e[n] + "Hidden";
            return null
        },
        getVisibilityEvent: function() {
            var e = this.getHiddenProperty();
            return e ? e.replace(/[H|h]idden/, "") + "visibilitychange" : null
        }
    }, _satellite.init({
        tools: {
            "38c98156a8f55a5bc92ba8fed1cd7ec0": {
                engine: "sc",
                loadOn: "pagebottom",
                account: "elsevier-ec-prod,elsevier-global-prod",
                euCookie: !1,
                sCodeURL: "376c5346e33126fdb6b2dbac81e307cbacfd7935/s-code-contents-c4bb5fab90528289cad9f273eeea71005167b85b.js",
                renameS: "s",
                initVars: {
                    charSet: "UTF-8",
                    trackingServer: "metrics.elsevier.com",
                    trackingServerSecure: "smetrics.elsevier.com",
                    trackInlineStats: !0,
                    trackDownloadLinks: !0,
                    linkDownloadFileTypes: "avi,css,csv,doc,docx,eps,exe,jpg,js,m4v,mov,mp3,pdf,png,ppt,pptx,rar,svg,tab,txt,vsd,vxd,wav,wma,wmv,xls,xlsx,xml,zip",
                    trackExternalLinks: !0,
                    linkInternalFilters: "elsevier-internet-dev.squiz.co.uk,elsevier.staging.squiz.co.uk,javascript:,mailto:,tel:,www.elsevier.com",
                    linkLeaveQueryString: !1,
                    dynamicVariablePrefix: "D="
                },
                customInit: function(a) {
                    function i(t, n) {
                        return function(a) {
                            var i = a;
                            if (i)
                                do {
                                    if (i.getAttribute && (regionId = i.getAttribute(n), regionId)) return regionId.toLowerCase()
                                } while (i && (i = i.parentNode));
                            var r = t.call(this, a);
                            return r && -1 !== r.indexOf("@") ? (e.pageDataTracker && (r = pageDataTracker.md5(r).substring(0, 16)), "DTM filtered (@):" + r) : r
                        }
                    }

                    function r(e) {
                        var t, n, a, i = this,
                            r = (new Date, i.c_rr(e)),
                            s = i.c_rspers();
                        return r || (e = i.escape ? i.escape(e) : encodeURIComponent(e), n = (t = (s = (t = s.indexOf(" " + e + "=")) < 0 ? i.c_rr("s_sess") : s).indexOf(" " + e + "=")) < 0 ? t : s.indexOf("|", t), a = t < 0 ? t : s.indexOf(";", t), n = n > 0 ? n : a, r = t < 0 ? "" : i.unescape ? i.unescape(s.substring(t + 2 + e.length, n < 0 ? s.length : n)) : decodeURIComponent(s.substring(t + 2 + e.length, n < 0 ? s.length : n)))
                    }

                    function s() {
                        var e = this.c_rr("s_pers"),
                            t = (new Date).getTime(),
                            n = null,
                            a = [],
                            i = "";
                        if (!e) return i;
                        for (var r = 0, s = (a = e.split(";")).length; r < s; r++)(n = a[r].match(/\|([0-9]+)$/)) && parseInt(n[1]) >= t && (i += a[r] + ";");
                        return i
                    }

                    function o(e, t, n) {
                        var a, i, r, s, o, c = this,
                            l = new Date,
                            u = 0,
                            d = "s_pers",
                            p = "s_sess",
                            g = 0,
                            f = 0;
                        if (l.setTime(l.getTime() - 6e4), c.c_rr(e) && c.c_wr(e, "", l), e = c.escape ? c.escape(e) : encodeURIComponent(e), (r = (a = c.c_rspers()).indexOf(" " + e + "=")) > -1 && (a = a.substring(0, r) + a.substring(a.indexOf(";", r) + 1), g = 1), (r = (i = c.c_rr(p)).indexOf(" " + e + "=")) > -1 && (i = i.substring(0, r) + i.substring(i.indexOf(";", r) + 1), f = 1), l = new Date, n ? (1 == n && (o = (n = new Date).getYear(), n.setYear(o + 5 + (o < 1900 ? 1900 : 0))), n.getTime() > l.getTime() && (a += " " + e + "=" + (c.escape ? c.escape(t) : encodeURIComponent(t)) + "|" + n.getTime() + ";", g = 1)) : (i += " " + e + "=" + (c.escape ? c.escape(t) : encodeURIComponent(t)) + ";", f = 1), i = i.replace(/%00/g, ""), a = a.replace(/%00/g, ""), f && c.c_wr(p, i, 0), g) {
                            for (s = a; s && -1 != s.indexOf(";");) {
                                var h = parseInt(s.substring(s.indexOf("|") + 1, s.indexOf(";")));
                                s = s.substring(s.indexOf(";") + 1), u = u < h ? h : u
                            }
                            l.setTime(u), c.c_wr(d, a, l)
                        }
                        return t == c.c_r(c.unescape ? c.unescape(e) : decodeURIComponent(e))
                    }
                    if (e.s = a, !e.pageDataTracker) return !1;
                    pageDataTracker.mapAdobeVars(a), a._tpDST = {
                        2012: "3/11,11/4",
                        2013: "3/10,11/3",
                        2014: "3/9,11/2",
                        2015: "3/8,11/1",
                        2016: "3/13,11/6",
                        2017: "3/12,11/5",
                        2018: "3/11,11/4",
                        2019: "3/10,11/3",
                        2020: "3/8,11/1",
                        2021: "3/14,11/7",
                        2022: "3/13,11/6",
                        2023: "3/12,11/5",
                        2024: "3/10,11/3",
                        2025: "3/9,11/2",
                        2026: "3/8,11/1",
                        2027: "3/14,11/7",
                        2028: "3/12,11/5",
                        2029: "3/11,11/4",
                        2030: "3/10,11/3",
                        2031: "3/9,11/2",
                        2032: "3/14,11/7",
                        2033: "3/13,11/6"
                    }, a.ActivityMap.region = i(a.ActivityMap.region, "data-aa-region"), a.ActivityMap.link = i(a.ActivityMap.link, "data-aa-name"), a.usePlugins = !0, a.prop68 && "md" == a.prop68 && (a.trackOffline = !0), a.cookieDomainPeriods = "2";
                    for (var c = ["com", "edu", "gov", "ac", "org", "net", "co", "go"], l = 0; l < c.length; l++)
                        if (t.location.hostname.indexOf("." + c[l] + ".") > 0) {
                            a.cookieDomainPeriods = "3";
                            break
                        } a.linkInternalFilters = (a.linkInternalFilters ? a.linkInternalFilters + "," : "") + t.location.hostname, e.s_doPlugins = function(a) {
                        if (e.pageData && "true" != pageData.page.noTracking && e.pageData_isLoaded || (a.abort = !0, e.pageData)) {
                            if (pageData.page.lastTrackedPage = pageData.page.analyticsPagename, "object" != typeof e.eventData || "newPage" != e.eventData.eventName && "searchResultsUpdated" != e.eventData.eventName || (a.clearVars(), a.pageLoaded = !1, pageDataTracker.getEvents(), pageDataTracker.mapAdobeVars(a)), a.list3 = _satellite.getVar("Promo - IDs"), a.list3) {
                                for (var i = a.list3.split("|"), r = 0; r < i.length; r++) i[r] = a.productPrefix(i[r]);
                                a.list3 = i.join("|"), a.linkTrackVars = a.apl(a.linkTrackVars, "list3", ",", 2)
                            }
                            a.eVar21 = _satellite.getVar("Promo - Clicked ID"), a.eVar21 && (a.list3 = a.eVar21 = a.productPrefix(a.eVar21), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar21", ",", 2), e.clickedPromoId && (e.clickedPromoId = n)), a.account = a.getCustomReportSuites();
                            try {
                                pageDataTracker.customDoPlugins(a)
                            } catch (H) {
                                pageDataTracker.addMessage("dtm5")
                            }
                            a.tpEls = a.getTimeParting("n", "-5").split("|"), a.prop5 = a.tpEls[0] + " " + a.tpEls[1], a.prop9 = a.version, a.prop32 = t.location.protocol.replace(/\:/g, ""), a.eVar8 = a.getDaysSinceLastVisit("v8");
                            var s, o = Visitor.getInstance("4D6368F454EC41940A4C98A6@AdobeOrg");
                            if (a.eVar50 = o.getMarketingCloudVisitorID(), a.prop12) {
                                var c = Visitor.AuthState.UNKNOWN;
                                a.eVar33 && null !== a.eVar33.match(/(reg(-|_|:))|registered/gi) && (c = Visitor.AuthState.AUTHENTICATED), o.setCustomerIDs({
                                    userid: {
                                        id: a.prop12,
                                        authState: c
                                    }
                                })
                            }
                            if (e.pageData && pageData.page && "cert" == pageData.page.environment && (a.account = a.account.replace(/\-(dev|prod)/gi, "-cert")), a.campaign && a.prop2 && 0 != a.campaign.indexOf(a.prop2 + ":") && (a.campaign = a.prop2 + ":" + a.campaign), a.campaign && (a.eVar108 = "D=v0", a.linkTrackVars = a.apl(a.linkTrackVars, "eVar108", ",", 2)), a.events = a.events ? a.events : "", a.products = pageDataTracker.setProductsVariable(), !a.pageLoaded && a.pageName) {
                                if (a.server = t.location.hostname, a.prop18 = t.location.hostname + t.location.pathname, a.prop35 = a.getUrlWithHashbang(), a.prop19 = a.getPreviousValue(a.pageName, "c19", ""), a.prop19) {
                                    var l = a.getPercentPageViewed(a.pageName);
                                    l && l.length > 2 && "undefined" != l[1] && "undefined" != typeof l[1] && "undefined" != l[2] && "undefined" != typeof l[2] ? a.prop17 = l[1] + "|" + l[2] : a.prop17 = "no data available"
                                }
                                if (a.eVar66 = a.eVar67 = "+1", a.events = a.apl(a.events, "event27", ",", 2), e.pageData && pageData.trackEvents && pageData.trackEvents instanceof Array) {
                                    for (var u = {
                                            associationStart: "event199",
                                            associated: "event200",
                                            contentEdit: "event190",
                                            contentAddition: "event79"
                                        }, d = 0; d < pageData.trackEvents.length; d++) {
                                        var p = u[pageData.trackEvents[d]];
                                        p && (a.events = a.apl(a.events, p, ",", 2))
                                    }
                                    pageData.trackEvents = []
                                }
                                var g = new Date,
                                    f = _satellite.getVar("Visitor - User ID");
                                f = f ? f.toLowerCase() : "", f += g.getFullYear(), f += g.getMonth(), f = pageDataTracker.md5(f).substring(0, 20), a.events = a.apl(a.events, "event203:" + f, ",", 2);
                                var h = _satellite.getVar("Visitor - Account ID");
                                h && (h = h.toLowerCase(), h += g.getFullYear(), h += g.getMonth(), h = pageDataTracker.md5(h).substring(0, 20), a.events = a.apl(a.events, "event205:" + h, ",", 2)), a.eVar72 && (a.events = a.apl(a.events, "event9", ",", 2)), e.pageData && pageData.visitor && pageData.visitor.loginSuccess && "true" == pageData.visitor.loginSuccess && (a.events = a.apl(a.events, "event23", ",", 2), pageData.visitor.loginSuccess = "false"), e.pageData && pageData.visitor && pageData.visitor.loginFailure && "true" == pageData.visitor.loginFailure && (a.events = a.apl(a.events, "event134", ",", 2), pageData.visitor.loginFailure = "false");
                                if (a.eVar19 && (a.eVar19 = a.cleanUrlData(a.eVar19), a.prop21 || (a.prop21 = a.eVar19)), a.prop21) {
                                    a.prop21 = a.cleanUrlData(a.prop21), a.getValOnce(a.prop21, "c21", 0) && (a.events = a.apl(a.events, "event3", ",", 2), a.eVar35 = a.eVar36 = "+1", "0" == a.eVar3 ? (a.eVar3 = "zero", a.events = a.apl(a.events, "event4", ",", 2)) : a.eVar3 && (a.events = a.apl(a.events, "event14=" + a.eVar3, ",", 2)));
                                    var v = _satellite.getVar("Search - Results per Page");
                                    a.getValOnce((a.eVar19 && a.eVar19 == a.prop21 ? "" : a.prop21) + ":" + _satellite.getVar("Search - Current Page"), "e13", 0) && v && (a.events = a.apl(a.events, "event13=" + v, ",", 2))
                                }
                                a.eVar117 && a.getValOnce(a.eVar117, "v117", 0) && (a.events = a.apl(a.events, "event198", ",", 2)), a.prop13 && a.getValOnce(a.prop13, "c13", 0) && (a.events = a.apl(a.events, "event24", ",", 2)), (a.prop7 || a.eVar46) && a.getValOnce(a.prop7 || a.eVar46, "c7", 0) && (a.events = a.apl(a.events, "event6", ",", 2)), a.prop60 && a.getValOnce(a.prop60, "c60", 0) && (a.events = a.apl(a.events, "event88", ",", 2));
                                var m = a.getValOnce("1", "e41", 0);
                                a.clickPast(m, "event41", "event42"), a.events.indexOf("event41") > -1 && _ && a.c_w("v31", _), a.list3 && (a.events = a.apl(a.events, "event21", ",", 2));
                                var _ = _satellite.getVar("Page - Load Timestamp"),
                                    k = a.getPreviousValue(_, "v68", "") || _,
                                    y = a.c_r("v31") || _;
                                if (_) try {
                                    var b = new Date(parseInt(_)),
                                        D = b.getTime(),
                                        S = this.isDST(b);
                                    a.eVar113 = (Math.floor((D / 1e3 - 18e3 + 3600 * S) % 86400) + 1).toString(), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar113", ",", 2)
                                } catch (j) {
                                    _satellite.notify("Error setting s.eVar113: " + j.message)
                                }
                                if (_ && k) try {
                                    var T = new Date(parseInt(_)),
                                        C = new Date(parseInt(k)),
                                        V = new Date(parseInt(y)),
                                        E = T.getTime() - C.getTime();
                                    E > 0 && (a.eVar68 = "+" + (E / 1e3).toFixed(0)), a.currentVisitTime = ((T.getTime() - V.getTime()) / 1e3).toFixed(0)
                                } catch (j) {}
                                if (pageData.eventList)
                                    for (r = 0; r < pageData.eventList.length; r++) "product turnaway" == pageData.eventList[r] && (a.events = a.apl(a.events, "event43", ",", 2));
                                if (a.eVar43 && (a.events = a.apl(a.events, "event26", ",", 2)), a.eVar44 && (a.events = a.apl(a.events, "event17", ",", 2)), pageData.page && pageData.page.purchaseStep) {
                                    var I = "";
                                    switch (pageData.page.purchaseStep) {
                                        case "cart":
                                            I = "scView";
                                            break;
                                        case "login":
                                        case "checkout":
                                        case "shipping":
                                        case "payment":
                                            I = "scCheckout";
                                            break;
                                        case "purchase":
                                            I = "purchase"
                                    }
                                    I && (a.events = a.apl(a.events, I, ",", 2), "scView" == I && (a.events = a.apl(a.events, "scOpen", ",", 2)))
                                }
                                a.list2 && (a.events = a.apl(a.events, "event178", ",", 2));
                                try {
                                    a.prop66 = pageDataTracker.getMessages(), a.prop66 && (a.linkTrackVars = a.apl(a.linkTrackVars, "prop66", ",", 2));
                                    var w = pageDataTracker.getPerformance();
                                    w.du && (a.eVar114 = w.du, a.linkTrackVars = a.apl(a.linkTrackVars, "eVar114", ",", 2)), w.lt && (a.eVar115 = w.lt, a.linkTrackVars = a.apl(a.linkTrackVars, "eVar115", ",", 2))
                                } catch (H) {}
                                for (var P = ["utm_campaign", "dgcid", "utm_dgroup", "utm_in", "utm_medium", "utm_acid", "cmx_id", "sis_id", "utm_source", "utm_term", "utm_content"], L = "", A = !1, O = 0; O < P.length; O++) {
                                    var M = a.Util.getQueryParam(P[O]) || "";
                                    M && (A = !0), L += M + "|"
                                }
                                A && (a.eVar125 = L), a.prop14 && !isNaN(parseFloat(a.prop14)) && isFinite(a.prop14) && (a.events = a.apl(a.events, "event229=" + a.prop14, ",", 2), a.events = a.apl(a.events, "event230", ",", 2)), e.pageDataTracker_ec && pageDataTracker_ec > 0 && (a.events = a.apl(a.events, "event227=" + pageDataTracker_ec, ",", 2), pageDataTracker_ec = 0), e.pageDataTracker_wc && pageDataTracker_wc > 0 && (a.events = a.apl(a.events, "event228=" + pageDataTracker_wc, ",", 2), pageDataTracker_wc = 0), a.pageLoaded = !0
                            }
                            if (a.prop4 && null !== a.prop4.match(/^CP\-/gi) && !a.linkType || a.linkName && "content view" == a.linkName) {
                                if ((s = pageDataTracker.getContentItem()) && s.id && !s.turnawayId) {
                                    a.events = a.apl(a.events, "prodView", ",", 2), a.events = a.apl(a.events, "event5", ",", 2), a.events = a.apl(a.events, "event40", ",", 2), a.events = a.apl(a.events, "event181", ",", 2), a.events = a.apl(a.events, "event182", ",", 2), a.events = a.apl(a.events, "event184", ",", 2), a.events = a.apl(a.events, "event239", ",", 2), a.events = a.apl(a.events, "event240", ",", 2);
                                    var x = _satellite.getVar("Visitor - App Session ID"),
                                        R = pageDataTracker.md5((x || "none") + s.id).substring(0, 20);
                                    if (a.events = a.apl(a.events, "event201:" + R, ",", 2), s.type && -1 !== s.type.toLowerCase().indexOf("scope-full") && (a.events = a.apl(a.events, "event202:" + R, ",", 2)), s && s.type && (a.hier2 = s.type), a.eVar24 = "+1", a.eVar25 = "+1", a.prop11 = s.id, a.prop31 = pageDataTracker.getBibliographicInfo(s), s.format)
                                        if (null !== s.format.match(/\-X?HTML/gi)) {
                                            I = "";
                                            I = null !== s.format.match(/scope\-abstract/gi) || null !== s.type.match(/scope\-abstract/gi) ? "event33" : "event29", a.events = a.apl(a.events, I, ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, I, ",", 2)
                                        } else null !== s.format.match(/\-PDF/gi) && (a.events = a.apl(a.events, "event30", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event30", ",", 2));
                                    null !== a.prop4.match(/^CP\-DL/gi) && (a.events = a.apl(a.events, "event19", ",", 2)), s.viewState && ("login" == s.viewState ? (a.events = a.apl(a.events, "event103", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event103", ",", 2)) : "upsell" == s.viewState && (a.events = a.apl(a.events, "event104", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event104", ",", 2))), s.indexTerms && (a.prop56 = s.indexTerms), a.currentVisitTime && (a.eVar31 = a.currentVisitTime, a.eVar31 && "0" != a.eVar31 || (a.eVar31 = "zero")), a.linkTrackVars = a.apl(a.linkTrackVars, "events", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar24", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar25", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar31", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop11", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop31", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "prodView", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event5", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event40", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event239", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event240", ",", 2)
                                }
                            } else a.events = a.removeFromList("prodView,event5,event40,event29,event33,event30,event239,event240", ",", a.events, ",");
                            if (a.eVar21 && (a.events = a.apl(a.events, "event22", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar21", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "events", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event22", ",", 2)), a.prop23 && a.products)(s = pageDataTracker.getContentItem()) && s.id && (a.prop22 = s.id + ":" + a.prop23, a.linkTrackVars = a.apl(a.linkTrackVars, "prop22", ",", 2));
                            a.eVar60 && a.getValOnce(a.eVar60, "v60", 0) && (a.events = a.apl(a.events, "event75", ",", 2)), a.eVar61 && a.getValOnce(a.eVar61, "v61", 0) && (a.events = a.apl(a.events, "event76", ",", 2)), a.eVar15 && a.getValOnce(_satellite.getVar("Search - Criteria"), "e78", 0) && (a.events = a.apl(a.events, "event78", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event78", ",", 2), e.eventData && eventData.search && (eventData.search.resultsPosition = "")), a.eVar37 && a.products && a.isTracked("eVar37") && (a.events = a.apl(a.events, "event44", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "events", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event44", ",", 2));
                            var F = _satellite.getVar("Form - Step + Name"),
                                N = a.getValOnce(F, "fn", 0);
                            if (N && "login:start" === N) a.linkTrackVars = a.apl(a.linkTrackVars, "events", ",", 2), a.events = a.apl(a.events, "event141", ",", 2);
                            else if (N && "loginregistration:start" === N) a.linkTrackVars = a.apl(a.linkTrackVars, "events", ",", 2), a.events = a.apl(a.events, "event185", ",", 2);
                            else if (N && "termsagreement:start" === N) a.linkTrackVars = a.apl(a.linkTrackVars, "events", ",", 2), a.events = a.apl(a.events, "event186", ",", 2);
                            else if (N && "termsagreement:complete" === N) a.linkTrackVars = a.apl(a.linkTrackVars, "events", ",", 2), a.events = a.apl(a.events, "event187", ",", 2);
                            else if (N) {
                                I = "";
                                I = N.indexOf("complete") > -1 ? "event" + (N.indexOf("register") > -1 || N.indexOf("registration") > -1 ? "2" : "47") : "event" + (N.indexOf("register") > -1 || N.indexOf("registration") > -1 ? "1" : "46"), a.linkTrackVars = a.apl(a.linkTrackVars, "events", ",", 2), a.linkTrackVars = a.apl(a.linkTrackEvents, "prop2", ",", 2), a.linkTrackVars = a.apl(a.linkTrackEvents, "eVar4", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, I, ",", 2), a.events = a.apl(a.events, I, ",", 2)
                            } else a.events = a.removeFromList("event1,event2,event46,event47", ",", a.events, ",");
                            if ((F.indexOf("register") > -1 || F.indexOf("registration") > -1) && a.isTracked("eVar43") && (a.events = a.apl(a.events, "event216", ",", 2), a.linkTrackEvents = a.apl(a.linkTrackEvents, "event216", ",", 2)), t.location.href.length > 255 ? a.pageURL = t.location.href.substring(0, 255) : a.pageURL = t.location.href, a.pageURL && 0 === a.pageURL.indexOf("file:") && (a.pageURL = a.prop18 = a.prop35 = "file://[filepath sanitized for GDPR compliance]"), a.campaign && -1 !== a.campaign.indexOf("raven") ? a.referrer = "mail://raven" : a.campaign && -1 !== a.campaign.indexOf("email") ? a.referrer = "mail://campaigns" : t.referrer && t.referrer.length > 255 && !a.referrer ? a.referrer = t.referrer.substring(0, 255) : t.referrer || (a.referrer = a.Util.getQueryParam("aaref")), a.prop8 && (a.linkTrackVars = a.apl(a.linkTrackVars, "prop8", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar18", ",", 2)), a.eVar109 = a.getFullReferringDomains(), a.eVar109 && (a.linkTrackVars = a.apl(a.linkTrackVars, "eVar109", ",", 2)), a.eVar103 && (a.eVar110 = a.eVar110 ? a.eVar110 : "D=c19"), a.linkTrackVars = a.linkTrackVars || "", a.linkTrackVars = a.removeFromList("eVar118,eVar119,eVar120,eVar121,eVar144", ",", a.linkTrackVars, ","), e.eventData && eventData.link && eventData.link.location && (a.eVar118 = eventData.link.location, a.linkTrackVars = a.apl(a.linkTrackVars, "eVar118", ",", 2)), e.eventData && eventData.link && eventData.link.name && (a.eVar119 = eventData.link.name, a.linkTrackVars = a.apl(a.linkTrackVars, "eVar119", ",", 2)), e.eventData && eventData.link && eventData.link.type && (a.eVar120 = eventData.link.type, a.linkTrackVars = a.apl(a.linkTrackVars, "eVar120", ",", 2)), e.eventData && eventData.link && eventData.link.destination && (a.eVar121 = eventData.link.destination, a.linkTrackVars = a.apl(a.linkTrackVars, "eVar121", ",", 2)), e.eventData && eventData.link && eventData.link.userInputMethod && (a.eVar144 = eventData.link.userInputMethod, a.linkTrackVars = a.apl(a.linkTrackVars, "eVar144", ",", 2)), a.eVar103 && a.isTracked("eVar103") && (a.eVar145 = "D=v103", a.linkTrackVars = a.apl(a.linkTrackVars, "eVar145", ",", 2)), a.events && a.events.split(",").indexOf("event2") > -1 && (a.events = a.apl(a.events, "event7", ",", 2)), a.linkObject && a.linkURL && "e" == a.linkType) try {
                                a.eVar158 = a.extractHostname(a.linkURL), a.eVar158 && (a.linkTrackVars = a.apl(a.linkTrackVars, "eVar158", ",", 2))
                            } catch (H) {}
                            a.prop29 = a.eVar7 ? "D=v7" : "", a.eVar1 = a.prop21 ? "D=c21" : "", a.eVar2 = a.prop6 ? "D=c6" : "", a.eVar4 = a.prop2 ? "D=c2" : "", a.eVar5 = a.prop5 ? "D=c5" : "", a.eVar9 = a.prop16 ? "D=c16" : "", a.eVar10 = a.prop18 ? "D=c18" : "", a.eVar11 = a.pageName ? "D=pageName" : "", a.hier1 = a.pageName ? "D=pageName" : "", a.eVar13 = a.prop4 ? "D=c4" : "", a.eVar14 = a.purchaseID ? "D=purchaseID" : "", a.eVar16 = a.prop1 ? "D=c1" : "", a.eVar18 = a.prop8 ? "D=c8" : "", a.eVar26 = a.prop13 ? "D=c13" : "", a.eVar29 = a.prop12 ? "D=c12" : "", a.eVar32 = a.prop19 ? "D=c19" : "", a.hier3 = a.prop19 ? "D=c19" : "", a.eVar46 = a.prop7 ? "D=c7" : "", a.eVar101 = "D=g", a.eVar147 = a.prop33 ? "D=c33" : "", a.list1 = a.prop7 ? "D=c7" : "", a.prop36 = a.list3 ? "D=l3" : "", a.linkTrackVars = a.apl(a.linkTrackVars, "prop2", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop3", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop4", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop5", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop9", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop16", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop18", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop35", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop19", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop24", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "prop32", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar4", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar5", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar8", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar9", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar10", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar11", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar13", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar32", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar50", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar101", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "eVar147", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "products", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "currencyCode", ",", 2), a.linkTrackVars = a.apl(a.linkTrackVars, "channel", ",", 2), a.isTracked("list3") && (a.linkTrackVars = a.apl(a.linkTrackVars, "prop36", ",", 2)), a.prop3 = a.getKPIName()
                        }
                    }, a.doPlugins = e.s_doPlugins, a.registerPreTrackCallback(function(t) {
                        var n = e.pageDataTracker_preTrack;
                        n && "function" == typeof n && n(t)
                    });
                    try {
                        a.loadModule("Media"), a.Media.autoTrack = !1, a.Media.trackWhilePlaying = !1, a.Media.playerName = "elsevier video player", a.Media.segmentByMilestones = !0, a.Media.trackMilestones = "50", a.Media.trackUsingContextData = !0, a.Media.contextDataMapping = {
                            "a.media.name": "eVar77,prop10",
                            "a.media.view": "event105",
                            "a.media.timePlayed": "event108",
                            "a.media.complete": "event107",
                            "a.media.milestones": {
                                50: "event106"
                            }
                        }, a.Media.trackVars = "prop17,eVar52,eVar1,eVar2,eVar3", a.Media.trackEvents = "event66"
                    } catch (u) {}
                    a.isTracked = function(e) {
                            return -1 !== a.split(a.linkTrackVars, ",").indexOf(e)
                        }, a.productPrefix = function(t) {
                            if (e.pageData && pageData.page && pageData.page.productName) {
                                var n = pageData.page.productName.toLowerCase() + ":";
                                if (0 !== t.indexOf(n)) return n + t
                            }
                            return t
                        }, a.isDST = function(e) {
                            var t = !1;
                            try {
                                var n, i, r = a._tpDST[e.getFullYear()].split(/,/);
                                n = new Date(r[0] + "/" + e.getFullYear()), i = new Date(r[1] + "/" + e.getFullYear()), n = new Date(n.getTime() + 42e4), i = new Date(i.getTime() + 36e4), t = e > n && e < i
                            } catch (s) {
                                t = !1, _satellite.notify("s.isDST: Error checking for DST:" + s.message)
                            }
                            return t
                        }, a.getUrlWithHashbang = function() {
                            var e = t.location.protocol + "//" + t.location.hostname + t.location.pathname;
                            try {
                                var n;
                                for (str = t.location.href.toString(), _regex = /^[^\?]+/g; null !== (n = _regex.exec(str));)
                                    for (n.index === _regex.lastIndex && _regex.lastIndex++, groupIndex = 0; groupIndex < n.length; groupIndex++) switch (groupIndex) {
                                        case 0:
                                            e = n[groupIndex].toString()
                                    }
                            } catch (a) {
                                _satellite.notify("s.getUrlWithHashbang: " + a.message)
                            }
                            return e
                        }, a.extractHostname = function(e) {
                            return (e.indexOf("://") > -1 ? e.split("/")[2] : e.split("/")[0]).split(":")[0].split("?")[0]
                        }, a.extractRootDomain = function(e) {
                            var t = a.extractHostname(e),
                                n = t.split("."),
                                i = n.length;
                            return i > 2 && (t = n[i - 2] + "." + n[i - 1], 2 == n[i - 2].length && 2 == n[i - 1].length && (t = n[i - 3] + "." + t)), t
                        }, a.getCustomReportSuites = function() {
                            if ("jb" == a.prop2) {
                                var n = "dev",
                                    i = "";
                                if (e.pageData && pageData.page) {
                                    var r = pageData.page.server || t.location.hostname,
                                        s = a.Util.getQueryParam("code");
                                    n = null === t.location.hostname.match(/\-(qa|test|stag)/g) ? "prod" : "dev", "cell" == r || "www.cell.com" == r || "cell-site" == s ? ("ce", i = "cell") : "www.thelancet.com" == r || "lancet-site" == s ? ("lc", i = "the lancet") : ("ha", i = "other journal branded sites")
                                }
                                return a.channel = i, "elsevier-ha-" + n + ",elsevier-global-" + n
                            }
                            if (e.pageData && pageData.page && pageData.page.secondaryProductName) {
                                var o = ["at", "ds", "bpdg", "mi", "api", "ev", "er", "ez", "bpeg", "bpex", "fi", "hb", "ih", "id", "jb", "md", "pv", "pr", "ss", "sv", "sd", "sc", "uca", "bp"],
                                    c = [
                                        ["SANDBOX", "sandbox"],
                                        ["MDY/mendeley", "md"],
                                        ["SD/science", "sd"],
                                        ["SC/scopus", "sc"],
                                        ["SVE/SciVal", "sv"],
                                        ["RA/researcher", "pb"],
                                        ["ECOM/elscom", "ec"]
                                    ],
                                    l = (n = "dev", pageData.page.secondaryProductName.toLowerCase());
                                if (pageData.page.environment && (n = "prod" == pageData.page.environment || "cert" == pageData.page.environment ? pageData.page.environment : "dev"), o.indexOf(l) > -1) return a.eVar107 = l, a.account + ",elsevier-" + l + "-" + n;
                                for (var u = 0; u < c.length; u++)
                                    if (l == c[u][0].toLowerCase()) return a.eVar107 = c[u][1], a.account + ",elsevier-" + c[u][1] + "-" + n;
                                return a.eVar107 = l, a.account
                            }
                            return a.account
                        }, a.removeFromList = function(e, t, n, a) {
                            t = t || ",", a = a || ",";
                            for (var i = e.split(t), r = n.split(a), s = [], o = 0; o < r.length; o++) {
                                for (var c = !1, l = 0; l < i.length; l++)
                                    if (r[o] == i[l]) {
                                        c = !0;
                                        break
                                    } c || s.push(r[o])
                            }
                            return s.join(a)
                        }, a.cleanUrlData = function(e) {
                            return e ? e = (e = (e = (e = (e = e.replace(/\+/g, " ")).replace(/[',"]/g, "")).replace(/\t/g, "")).replace(/\n/g, "")).toLowerCase() : ""
                        }, a.getProductNum = function() {
                            var e, t = this,
                                n = new Date;
                            return e = t.c_r("pn") ? parseInt(t.c_r("pn")) + 1 : 1, n.setTime(n.getTime() + 2592e6), t.c_w("pn", e, n), e
                        }, a.getKPIName = function() {
                            for (var e = [{
                                    event: "event2",
                                    name: "registration",
                                    products: ["rx", "sd", "knovel pi"]
                                }, {
                                    event: "event3",
                                    name: "search",
                                    products: ["rx", "qu", "sd", "knovel pi"]
                                }, {
                                    event: "event5",
                                    name: "content view",
                                    products: ["rx", "qu", "sd", "knovel pi"]
                                }, {
                                    event: "event6",
                                    name: "facet/filter search",
                                    products: ["rx"]
                                }, {
                                    event: "event9",
                                    name: "save alert",
                                    products: ["rx", "sd", "knovel pi"]
                                }, {
                                    event: "event12",
                                    name: "save search",
                                    products: ["rx"]
                                }, {
                                    event: "event19",
                                    name: "file downloads",
                                    products: ["qu", "knovel pi"]
                                }, {
                                    event: "event21",
                                    name: "cta impression",
                                    products: ["knovel pi"]
                                }, {
                                    event: "event22",
                                    name: "cta click",
                                    products: ["knovel pi"]
                                }, {
                                    event: "event23",
                                    name: "user login",
                                    products: ["rx", "sd", "knovel pi"]
                                }, {
                                    event: "event25",
                                    name: "link out",
                                    products: ["rx"]
                                }, {
                                    event: "event29",
                                    name: "full-text html view",
                                    products: ["qu"]
                                }, {
                                    event: "event30",
                                    name: "pdf view",
                                    products: ["qu"]
                                }, {
                                    event: "event33",
                                    name: "abstract html view",
                                    products: ["qu"]
                                }, {
                                    event: "event37",
                                    name: "search results click",
                                    products: ["rx", "sd", "knovel pi"]
                                }, {
                                    event: "event39",
                                    name: "content export",
                                    products: ["rx", "qu"]
                                }, {
                                    event: "event48",
                                    name: "add to my list",
                                    products: ["knovel pi"]
                                }, {
                                    event: "event84",
                                    name: "content detail/abstract window view",
                                    products: ["qu"]
                                }, {
                                    event: "event87",
                                    name: "in-page click",
                                    products: ["rx"]
                                }], t = "", n = 0; n < e.length; n++) {
                                var i = new RegExp(e[n].event + "(,|$)", "g");
                                if (a.events.match(i)) {
                                    for (var r = 0; r < e[n].products.length; r++) a.prop2 && a.prop2.toLowerCase() == e[n].products[r].toLowerCase() && (t = e[n].name);
                                    if (t) break
                                }
                            }
                            return t || ""
                        }, a.apl = new Function("l", "v", "d", "u", "var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l"), a.getValOnce = new Function("v", "c", "e", "var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"), a.getTimeParting = new Function("h", "z", "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=M<30?'00':'30';D=d.getDay();U=' AM';if(H>=12){U=' PM';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}"), a.getDaysSinceLastVisit = new Function("c", "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;"), a.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), a.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"),
                        a.getPercentPageViewed = new Function("n", "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load','unload','scroll','resize','zoom','keyup','mouseup','touchend','orientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s.pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){var k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split(',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]=!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){var W=window,D=document,B=D.body,E=D.documentElement,S=window.screen||0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWidth',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.substring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.innerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round(C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180:Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!=N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|iPad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P':'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg();return!n||n=='-'?a[1]:a"), a.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}"), a.clickPast = new Function("scp", "ct_ev", "cp_ev", "cpc", "var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc){cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev;s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc,0,0);}}}"), a.__ccucr || (a.c_rr = a.c_r, a.__ccucr = !0, a.c_rspers = s, a.c_r = a.cookieRead = r), a.__ccucw || (a.c_wr = a.c_w, a.__ccucw = !0, a.c_w = a.cookieWrite = o), a.getFullReferringDomains = new Function("var s=this,dr=window.document.referrer,n=s.linkInternalFilters.split(',');if(dr){var r=dr.split('/')[2],l=n.length;for(i=0;i<=l;i++){if(r.indexOf(n[i])!=-1){r='';i=l+1;}}return r}")
                }
            },
            fbabacd5c2e08d9f620b7526025cea0b66349759: {
                engine: "tnt",
                mboxURL: "376c5346e33126fdb6b2dbac81e307cbacfd7935/mbox-contents-fbabacd5c2e08d9f620b7526025cea0b66349759.js",
                loadSync: !0,
                pageParams: {}
            },
            "82d0e01ce5f04b69620bbfbc9f9fe3fee2fcc7d9": {
                engine: "visitor_id",
                loadOn: "pagetop",
                name: "VisitorID",
                mcOrgId: "4D6368F454EC41940A4C98A6@AdobeOrg",
                autoRequest: !0,
                initVars: {
                    trackingServer: "metrics.elsevier.com",
                    trackingServerSecure: "smetrics.elsevier.com",
                    marketingCloudServer: "metrics.elsevier.com",
                    marketingCloudServerSecure: "smetrics.elsevier.com"
                }
            }
        },
        pageLoadRules: [{
            name: "Page Load - Global Tracking Library",
            trigger: [{
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-54b996243535640015120000.js"
                    }]
                }]
            }],
            event: "pagetop"
        }],
        rules: [{
            name: "Event - AA Button Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "AA Button Click",
                    customSetup: function(e, t) {
                        t.eVar124 = this.getAttribute("data-aa-button"), t.linkTrackVars = t.apl(t.linkTrackVars, "eVar124", ",", 2)
                    },
                    addEvent: ["event204"]
                }]
            }],
            selector: "[data-aa-button]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Event - AA Conversion Driver Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "conversion driver click",
                    customSetup: function(e, t) {
                        t.eVar103 = this.getAttribute("data-aa-conversiondriver"), t.linkTrackVars = t.apl(t.linkTrackVars, "eVar103", ",", 2), t.eVar110 = "D=pageName", t.linkTrackVars = t.apl(t.linkTrackVars, "eVar110", ",", 2)
                    }
                }]
            }],
            selector: "[data-aa-conversiondriver]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Event - Navigation Link Click",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-55e0dc316264630014000e14.js"
                    }]
                }]
            }],
            selector: "a[data-nav-name], a[data-sc-nav-name]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Event - Promo Link Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "promo link click",
                    customSetup: function() {
                        var t = this.getAttribute("data-sc-promo-id");
                        t && (e.clickedPromoId = (pageData.page.productName || "xx").toLowerCase() + ":" + t)
                    }
                }]
            }],
            selector: "a[data-sc-promo-id]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }],
        directCallRules: [{
            name: "cartAdd",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "cart add",
                    addEvent: ["event20", "scAdd"]
                }]
            }]
        }, {
            name: "cartRemove",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "cart remove",
                    addEvent: ["scRemove"]
                }]
            }]
        }, {
            name: "contentDownload",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "content download",
                    addEvent: ["event19"]
                }]
            }]
        }, {
            name: "formError",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "form error",
                    setVars: {
                        eVar43: "%Form - Error Type%"
                    },
                    addEvent: ["event26"]
                }]
            }]
        }, {
            name: "formSubmit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "form submit"
                }]
            }]
        }, {
            name: "liveChatAccepted",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "live chat accepted",
                    addEvent: ["event83"]
                }]
            }]
        }, {
            name: "liveChatClosed",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "live chat closed",
                    addEvent: ["event250"]
                }]
            }]
        }, {
            name: "liveChatOffered",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "live chat offered",
                    addEvent: ["event249"]
                }]
            }]
        }, {
            name: "newPage",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        pageName: "%Page - Analytics Pagename%"
                    }
                }]
            }]
        }, {
            name: "productFeatureUsed",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "product feature used",
                    setVars: {
                        prop25: "%Event - Feature Name%",
                        hier1: "%Event - Feature Name%"
                    }
                }]
            }]
        }, {
            name: "purchaseComplete",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    customSetup: function(t, n) {
                        if (e.eventData && e.eventData.order) {
                            var a = e.eventData.order;
                            n.purchaseID = a.id, n.eVar34 = a.promoCode, n.eVar39 = a.paymentMethod, n.linkTrackVars = n.apl(n.linkTrackVars, "purchaseID", ",", 2), n.linkTrackVars = n.apl(n.linkTrackVars, "eVar14", ",", 2), n.linkTrackVars = n.apl(n.linkTrackVars, "eVar34", ",", 2), n.linkTrackVars = n.apl(n.linkTrackVars, "eVar39", ",", 2), e.eventData.page && e.eventData.page.currencyCode && (n.currencyCode = e.eventData.page.currencyCode, n.linkTrackVars = n.apl(n.linkTrackVars, "currencyCode", ",", 2))
                        }
                    },
                    addEvent: ["purchase"]
                }]
            }]
        }, {
            name: "searchFeatureClick",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "search feature click",
                    setVars: {
                        eVar18: "%Search - Feature Used%",
                        prop8: "%Search - Feature Used%"
                    },
                    addEvent: ["event10"]
                }]
            }]
        }, {
            name: "searchResultsClick",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "search results click",
                    setVars: {
                        eVar15: "%Event - Search Results Click Position%"
                    },
                    addEvent: ["event37"]
                }]
            }]
        }, {
            name: "searchResultsUpdated",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        pageName: "%Page - Analytics Pagename%"
                    }
                }]
            }]
        }, {
            name: "searchWithinContent",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "search within content",
                    setVars: {
                        eVar60: "%Search - Within Content Criteria%"
                    },
                    addEvent: ["event75"]
                }]
            }]
        }, {
            name: "socialShare",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "content shared",
                    setVars: {
                        eVar30: "%Event - Share Platform%"
                    },
                    addEvent: ["event11"]
                }]
            }]
        }],
        settings: {
            trackInternalLinks: !0,
            libraryName: "satelliteLib-203157332f7df01b28142e8c867d6813bc4995aa",
            isStaging: !1,
            allowGATTcalls: !1,
            downloadExtensions: /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
            notifications: !1,
            utilVisible: !1,
            domainList: ["elsevier.com"],
            scriptDir: "376c5346e33126fdb6b2dbac81e307cbacfd7935/scripts/",
            tagTimeout: 3e3
        },
        data: {
            URI: t.location.pathname + t.location.search,
            browser: {},
            cartItems: [],
            revenue: "",
            host: {
                http: "assets.adobedtm.com",
                https: "assets.adobedtm.com"
            }
        },
        dataElements: {
            "Campaign - ID": {
                customJS: function() {
                    return _satellite.getQueryParamCaseInsensitive("pscid") || _satellite.getQueryParamCaseInsensitive("dgcid") || _satellite.getQueryParamCaseInsensitive("campid") || _satellite.getQueryParamCaseInsensitive("utm_term") || ""
                },
                storeLength: "pageview"
            },
            "Email - Broadlog ID": {
                queryParam: "bid",
                storeLength: "pageview",
                ignoreCase: 1
            },
            "Email - Message ID": {
                queryParam: "cid",
                storeLength: "pageview",
                ignoreCase: 1
            },
            "Email - Recipient ID": {
                queryParam: "eid",
                storeLength: "pageview",
                ignoreCase: 1
            },
            "Event - Action Name": {
                jsVariable: "eventData.action.name",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Event - AutoSuggest Search Data": {
                jsVariable: "pageData.savedEvents.autoSuggestSearchData",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Event - AutoSuggest Search Term": {
                jsVariable: "pageData.savedEvents.autoSuggestSearchTerm",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Event - Feature Name": {
                jsVariable: "eventData.feature.name",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Event - Link Name": {
                jsVariable: "eventData.link.name",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Event - LinkOut Destination": {
                jsVariable: "eventData.linkOut",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Event - LinkOut Referring Product": {
                jsVariable: "eventData.referringProduct",
                storeLength: "pageview"
            },
            "Event - Navigation Link Name": {
                jsVariable: "eventData.navigationLink.name",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Event - Rows Exported": {
                jsVariable: "eventData.export.rows",
                storeLength: "pageview"
            },
            "Event - Search Results Click Position": {
                jsVariable: "eventData.search.resultsPosition",
                storeLength: "pageview"
            },
            "Event - Share Platform": {
                jsVariable: "eventData.social.sharePlatform",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Event - Updated User Fields": {
                jsVariable: "eventData.user.fieldsUpdated",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Form - Error Type": {
                jsVariable: "eventData.form.errorType",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Form - Name": {
                customJS: function() {
                    return e.eventData && eventData.form && eventData.form.name ? eventData.form.name : e.pageData && pageData.form && pageData.form.name ? pageData.form.name : ""
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Form - Step + Name": {
                customJS: function() {
                    return e.eventData && eventData.form && eventData.form.type && eventData.form.step ? eventData.form.type + ":" + eventData.form.step : e.pageData && pageData.form && pageData.form.type && pageData.form.step ? pageData.form.type + ":" + pageData.form.step : ""
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Order - ID": {
                jsVariable: "pageData.order.id",
                storeLength: "pageview"
            },
            "Order - Payment Method": {
                jsVariable: "pageData.order.paymentMethod",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Order - Promo Code": {
                jsVariable: "pageData.order.promoCode",
                storeLength: "pageview"
            },
            "Page - Analytics Pagename": {
                jsVariable: "pageData.page.analyticsPagename",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Page - Business Unit": {
                jsVariable: "pageData.page.businessUnit",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Page - Currency Code": {
                jsVariable: "pageData.page.currencyCode",
                storeLength: "pageview"
            },
            "Page - Do Not Track": {
                jsVariable: "pageData.page.noTracking",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Page - Environment": {
                jsVariable: "pageData.page.environment",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Page - Error Type": {
                customJS: function() {
                    if (e.pageData && pageData.page) {
                        if (pageData.page.errorType) return pageData.page.errorType;
                        if (pageData.form && pageData.form.errorType) return pageData.form.errorType
                    }
                    return ""
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Page - Language": {
                jsVariable: "pageData.page.language",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Page - Load Time": {
                jsVariable: "pageData.page.loadTime",
                storeLength: "pageview"
            },
            "Page - Load Timestamp": {
                jsVariable: "pageData.page.loadTimestamp",
                storeLength: "pageview"
            },
            "Page - Product Feature": {
                customJS: function() {
                    return e.eventData && eventData.feature ? eventData.feature.name || "" : e.pageData && pageData.feature ? pageData.feature.name || "" : void 0
                },
                storeLength: "pageview"
            },
            "Page - Product Name": {
                jsVariable: "pageData.page.productName",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Page - Section Name": {
                jsVariable: "pageData.page.sectionName",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Page - Test ID": {
                customJS: function() {
                    try {
                        var t = "",
                            n = e.optimizely ? optimizely.data.state.activeExperiments : [];
                        if (n.length > 0) {
                            for (var a = 0; a < n.length; a++) t += (t ? "|" : "") + n[a] + ":" + optimizely.data.state.variationIdsMap[n[a]];
                            t && (t = pageData.page.productName.toLowerCase() + "-optimizely-" + t)
                        }
                        return t
                    } catch (i) {
                        return ""
                    }
                },
                storeLength: "pageview"
            },
            "Page - Type": {
                jsVariable: "pageData.page.type",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Page - URL With QSP": {
                customJS: function() {
                    return fullURL = t.location.href, fullURL
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Search - Advanced Criteria": {
                customJS: function() {
                    var e = _satellite.getQueryParamCaseInsensitive("query") || "",
                        t = _satellite.getQueryParamCaseInsensitive("advanced") || "";
                    if (e && "true" == t) {
                        var n = _satellite.getQueryParamCaseInsensitive("author") || "",
                            a = _satellite.getQueryParamCaseInsensitive("publicationtitle") || "",
                            i = _satellite.getQueryParamCaseInsensitive("isbn") || "",
                            r = _satellite.getQueryParamCaseInsensitive("afterdate") || "",
                            s = _satellite.getQueryParamCaseInsensitive("beforedate") || "",
                            o = _satellite.getQueryParamCaseInsensitive(decodeURIComponent("f.Subject%7Cs")) || "",
                            c = _satellite.getQueryParamCaseInsensitive(decodeURIComponent("f.Product%2520Type%7CT")) || "";
                        return "query=" + e + (n ? " AND author=" + n : "") + (a ? " AND pub=" + a : "") + (i ? " AND isbn=" + i : "") + (s ? " AND before=" + s : "") + (r ? " AND after=" + r : "") + (o ? " AND subject=" + o : "") + (c ? " AND product=" + c : "")
                    }
                    return ""
                },
                storeLength: "pageview",
                forceLowerCase: !0,
                cleanText: !0
            },
            "Search - Criteria": {
                customJS: function() {
                    var t = _satellite.getQueryParamCaseInsensitive("query") || _satellite.getQueryParamCaseInsensitive("s") || "",
                        n = _satellite.getQueryParamCaseInsensitive("advanced") || "";
                    return t && "true" != n ? t : e.pageData && pageData.search && pageData.search.criteria ? pageData.search.criteria : ""
                },
                storeLength: "pageview",
                forceLowerCase: !0,
                cleanText: !0
            },
            "Search - Current Page": {
                jsVariable: "pageData.search.currentPage",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Search - Data Form Criteria": {
                jsVariable: "pageData.search.dataFormCriteria",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Search - Facet List": {
                customJS: function() {
                    return pageDataTracker.getSearchFacets()
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Search - Feature Used": {
                jsVariable: "eventData.search.featureName",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Search - Results per Page": {
                jsVariable: "pageData.search.resultsPerPage",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Search - Result Types": {
                customJS: function() {
                    return pageDataTracker.getSearchResultsByType()
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Search - Sort Type": {
                jsVariable: "pageData.search.sortType",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Search - Total Results": {
                jsVariable: "pageData.search.totalResults",
                storeLength: "pageview"
            },
            "Search - Type": {
                customJS: function() {
                    if (_satellite.getQueryParamCaseInsensitive("query")) {
                        var e = _satellite.getQueryParamCaseInsensitive("advanced") || "";
                        return pageData.page.productName + ":keyword:" + ("true" == e ? "advanced" : "general") + " search"
                    }
                    if (_satellite.getQueryParamCaseInsensitive("s")) return pageData.page.productName + ":keyword:blog search"
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Search - Within Content Criteria": {
                jsVariable: "pageData.search.withinContentCriteria",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Search - Within Results Criteria": {
                jsVariable: "pageData.search.withinResultsCriteria",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Visitor - Access Type": {
                customJS: function() {
                    return "ec:anon_guest"
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Visitor - Account ID": {
                jsVariable: "pageData.visitor.accountId",
                storeLength: "pageview"
            },
            "Visitor - Account Name": {
                jsVariable: "pageData.visitor.accountName",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Visitor - Consortium + Account": {
                customJS: function() {
                    return pageDataTracker.getConsortiumAccountId()
                },
                storeLength: "pageview"
            },
            "Visitor - Consortium ID": {
                jsVariable: "pageData.visitor.consortiumId",
                storeLength: "pageview"
            },
            "Visitor - Details": {
                jsVariable: "pageData.visitor.details",
                storeLength: "pageview"
            },
            "Visitor - Industry": {
                jsVariable: "pageData.visitor.industry",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Visitor - IP Address": {
                jsVariable: "pageData.visitor.ipAddress",
                storeLength: "pageview"
            },
            "Visitor - Login Status": {
                jsVariable: "pageData.visitor.loginStatus",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Visitor - Login Success": {
                jsVariable: "pageData.visitor.loginSuccess",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Visitor - SIS ID": {
                jsVariable: "pageData.visitor.sisId",
                storeLength: "pageview"
            },
            "Visitor - User ID": {
                jsVariable: "pageData.visitor.userId",
                storeLength: "pageview"
            }
        },
        appVersion: "7QN",
        buildDate: "2019-04-01 13:45:04 UTC",
        publishDate: "2019-04-01 13:45:03 UTC"
    })
}(window, document);