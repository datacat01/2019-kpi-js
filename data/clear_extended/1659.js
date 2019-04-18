! function e(t, a, r) {
    function n(o, s) {
        if (!a[o]) {
            if (!t[o]) {
                var c = "function" == typeof require && require;
                if (!s && c) return c(o, !0);
                if (i) return i(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var d = a[o] = {
                exports: {}
            };
            t[o][0].call(d.exports, function(e) {
                return n(t[o][1][e] || e)
            }, d, d.exports, e, t, a, r)
        }
        return a[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) n(r[o]);
    return n
}({
    1: [function(e, t) {
        (function(a) {
            /** @license ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

            Adobe Visitor API for JavaScript version: 3.0.0
            Copyright 1996-2015 Adobe, Inc. All Rights Reserved
            More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
            */
            var r = e("./child/ChildVisitor"),
                n = e("./child/Message"),
                i = e("./child/makeChildMessageListener"),
                o = e("./utils/asyncParallelApply"),
                s = e("./utils/enums"),
                c = e("./utils/utils"),
                l = e("./utils/getDomain"),
                d = e("./units/version"),
                u = e("./units/crossDomain"),
                m = e("@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID"),
                g = e("./units/makeCorsRequest"),
                p = e("./units/makeDestinationPublishing"),
                f = e("./utils/constants"),
                h = function(e, t, r) {
                    function h(e) {
                        var t = e;
                        return function(e) {
                            var a = e || E.location.href;
                            try {
                                var r = y._extractParamFromUri(a, t);
                                if (r) return B.parsePipeDelimetedKeyValues(r)
                            } catch (e) {}
                        }
                    }

                    function b(e) {
                        function t(e, t) {
                            e && e.match(f.VALID_VISITOR_ID_REGEX) && t(e)
                        }
                        t(e[w], y.setMarketingCloudVisitorID), y._setFieldExpire(P, -1), t(e[k], y.setAnalyticsVisitorID)
                    }

                    function A(e) {
                        e = e || {}, y._supplementalDataIDCurrent = e.supplementalDataIDCurrent || "", y._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}, y._supplementalDataIDLast = e.supplementalDataIDLast || "", y._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {}
                    }

                    function v(e) {
                        function t(e, t, a) {
                            return (a = a ? a += "|" : a) + (e + "=") + encodeURIComponent(t)
                        }

                        function a(e, a) {
                            var r = a[0],
                                n = a[1];
                            return null != n && n !== I && (e = t(r, n, e)), e
                        }
                        var r, n = e.reduce(a, "");
                        return (r = (r = n) ? r += "|" : r) + "TS=" + B.getTimestampInSeconds()
                    }

                    function N(e) {
                        var t = e.minutesToLive,
                            a = "";
                        return (y.idSyncDisableSyncs || y.disableIdSyncs) && (a = a || "Error: id syncs have been disabled"), "string" == typeof e.dpid && e.dpid.length || (a = a || "Error: config.dpid is empty"), "string" == typeof e.url && e.url.length || (a = a || "Error: config.url is empty"), void 0 === t ? t = 20160 : (t = parseInt(t, 10), (isNaN(t) || t <= 0) && (a = a || "Error: config.minutesToLive needs to be a positive number")), {
                            error: a,
                            ttl: t
                        }
                    }
                    if (!r || r.split("").reverse().join("") !== e) throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");
                    var y = this;
                    y.version = "3.0.0";
                    var E = a,
                        M = E.Visitor;
                    M.version = y.version, M.AuthState = s.AUTH_STATE, M.OptOut = s.OPT_OUT, E.s_c_in || (E.s_c_il = [], E.s_c_in = 0), y._c = "Visitor", y._il = E.s_c_il, y._in = E.s_c_in, y._il[y._in] = y, E.s_c_in++, y._log = {
                        requests: []
                    }, y.marketingCloudOrgID = e, y.cookieName = "AMCV_" + e, y.sessionCookieName = "AMCVS_" + e, y.cookieDomain = l(), y.cookieDomain === E.location.hostname && (y.cookieDomain = ""), y.loadSSL = E.location.protocol.toLowerCase().indexOf("https") >= 0, y.loadTimeout = 3e4, y.CORSErrors = [], y.marketingCloudServer = y.audienceManagerServer = "dpm.demdex.net", y.sdidParamExpiry = 30;
                    var T = E.document,
                        S = null,
                        w = "MCMID",
                        L = "MCIDTS",
                        C = "A",
                        k = "MCAID",
                        _ = "AAM",
                        P = "MCAAMB",
                        I = "NONE",
                        R = function(e) {
                            return !Object.prototype[e]
                        },
                        V = g(y, x);
                    y.FIELDS = s.FIELDS, y.cookieRead = function(e) {
                        e = encodeURIComponent(e);
                        var t = (";" + T.cookie).split(" ").join(";"),
                            a = t.indexOf(";" + e + "="),
                            r = a < 0 ? a : t.indexOf(";", a + 1);
                        return a < 0 ? "" : decodeURIComponent(t.substring(a + 2 + e.length, r < 0 ? t.length : r))
                    }, y.cookieWrite = function(e, t, a) {
                        var r, n = y.cookieLifetime;
                        if (t = "" + t, n = n ? ("" + n).toUpperCase() : "", a && "SESSION" !== n && "NONE" !== n) {
                            if (r = "" !== t ? parseInt(n || 0, 10) : -60)(a = new Date).setTime(a.getTime() + 1e3 * r);
                            else if (1 === a) {
                                var i = (a = new Date).getYear();
                                a.setYear(i + 2 + (i < 1900 ? 1900 : 0))
                            }
                        } else a = 0;
                        return e && "NONE" !== n ? (T.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; path=/;" + (a ? " expires=" + a.toGMTString() + ";" : "") + (y.cookieDomain ? " domain=" + y.cookieDomain + ";" : ""), y.cookieRead(e) === t) : 0
                    }, y.resetState = function(e) {
                        e ? y._mergeServerState(e) : A()
                    }, y._isAllowedDone = !1, y._isAllowedFlag = !1, y.isAllowed = function() {
                        return y._isAllowedDone || (y._isAllowedDone = !0, (y.cookieRead(y.cookieName) || y.cookieWrite(y.cookieName, "T", 1)) && (y._isAllowedFlag = !0)), y._isAllowedFlag
                    }, y.setMarketingCloudVisitorID = function(e) {
                        y._setMarketingCloudFields(e)
                    }, y._use1stPartyMarketingCloudServer = !1, y.getMarketingCloudVisitorID = function(e, t) {
                        if (y.isAllowed()) {
                            y.marketingCloudServer && y.marketingCloudServer.indexOf(".demdex.net") < 0 && (y._use1stPartyMarketingCloudServer = !0);
                            var a = y._getAudienceManagerURLData("_setMarketingCloudFields"),
                                r = a.url;
                            return y._getRemoteField(w, r, e, t, a)
                        }
                        return ""
                    }, y.getVisitorValues = function(e, t) {
                        var a = {
                                MCMID: {
                                    fn: y.getMarketingCloudVisitorID,
                                    args: [!0],
                                    context: y
                                },
                                MCOPTOUT: {
                                    fn: y.isOptedOut,
                                    args: [void 0, !0],
                                    context: y
                                },
                                MCAID: {
                                    fn: y.getAnalyticsVisitorID,
                                    args: [!0],
                                    context: y
                                },
                                MCAAMLH: {
                                    fn: y.getAudienceManagerLocationHint,
                                    args: [!0],
                                    context: y
                                },
                                MCAAMB: {
                                    fn: y.getAudienceManagerBlob,
                                    args: [!0],
                                    context: y
                                }
                            },
                            r = t && t.length ? B.pluck(a, t) : a;
                        o(r, e)
                    }, y._currentCustomerIDs = {}, y._customerIDsHashChanged = !1, y._newCustomerIDsHash = "", y.setCustomerIDs = function(e) {
                        function t() {
                            y._customerIDsHashChanged = !1
                        }
                        if (y.isAllowed() && e) {
                            var a, r;
                            for (a in y._readVisitor(), e)
                                if (R(a) && (r = e[a]))
                                    if ("object" == typeof r) {
                                        var n = {};
                                        r.id && (n.id = r.id), null != r.authState && (n.authState = r.authState), y._currentCustomerIDs[a] = n
                                    } else y._currentCustomerIDs[a] = {
                                        id: r
                                    };
                            var i = y.getCustomerIDs(),
                                o = y._getField("MCCIDH"),
                                s = "";
                            for (a in o || (o = 0), i) R(a) && (s += (s ? "|" : "") + a + "|" + ((r = i[a]).id ? r.id : "") + (r.authState ? r.authState : ""));
                            y._newCustomerIDsHash = y._hash(s), y._newCustomerIDsHash !== o && (y._customerIDsHashChanged = !0, y._mapCustomerIDs(t))
                        }
                    }, y.getCustomerIDs = function() {
                        y._readVisitor();
                        var e, t, a = {};
                        for (e in y._currentCustomerIDs) R(e) && (t = y._currentCustomerIDs[e], a[e] || (a[e] = {}), t.id && (a[e].id = t.id), null != t.authState ? a[e].authState = t.authState : a[e].authState = M.AuthState.UNKNOWN);
                        return a
                    }, y.setAnalyticsVisitorID = function(e) {
                        y._setAnalyticsFields(e)
                    }, y.getAnalyticsVisitorID = function(e, t, a) {
                        if (!B.isTrackingServerPopulated() && !a) return y._callCallback(e, [""]), "";
                        if (y.isAllowed()) {
                            var r = "";
                            if (a || (r = y.getMarketingCloudVisitorID(function() {
                                    y.getAnalyticsVisitorID(e, !0)
                                })), r || a) {
                                var n = a ? y.marketingCloudServer : y.trackingServer,
                                    i = "";
                                y.loadSSL && (a ? y.marketingCloudServerSecure && (n = y.marketingCloudServerSecure) : y.trackingServerSecure && (n = y.trackingServerSecure));
                                var o = {};
                                if (n) {
                                    var s = "http" + (y.loadSSL ? "s" : "") + "://" + n + "/id",
                                        c = "d_visid_ver=" + y.version + "&mcorgid=" + encodeURIComponent(y.marketingCloudOrgID) + (r ? "&mid=" + encodeURIComponent(r) : "") + (y.idSyncDisable3rdPartySyncing || y.disableThirdPartyCookies ? "&d_coppa=true" : ""),
                                        l = ["s_c_il", y._in, "_set" + (a ? "MarketingCloud" : "Analytics") + "Fields"];
                                    i = s + "?" + c + "&callback=s_c_il%5B" + y._in + "%5D._set" + (a ? "MarketingCloud" : "Analytics") + "Fields", o.corsUrl = s + "?" + c, o.callback = l
                                }
                                return o.url = i, y._getRemoteField(a ? w : k, i, e, t, o)
                            }
                        }
                        return ""
                    }, y.getAudienceManagerLocationHint = function(e, t) {
                        if (y.isAllowed() && y.getMarketingCloudVisitorID(function() {
                                y.getAudienceManagerLocationHint(e, !0)
                            })) {
                            var a = y._getField(k);
                            if (!a && B.isTrackingServerPopulated() && (a = y.getAnalyticsVisitorID(function() {
                                    y.getAudienceManagerLocationHint(e, !0)
                                })), a || !B.isTrackingServerPopulated()) {
                                var r = y._getAudienceManagerURLData(),
                                    n = r.url;
                                return y._getRemoteField("MCAAMLH", n, e, t, r)
                            }
                        }
                        return ""
                    }, y.getLocationHint = y.getAudienceManagerLocationHint, y.getAudienceManagerBlob = function(e, t) {
                        if (y.isAllowed() && y.getMarketingCloudVisitorID(function() {
                                y.getAudienceManagerBlob(e, !0)
                            })) {
                            var a = y._getField(k);
                            if (!a && B.isTrackingServerPopulated() && (a = y.getAnalyticsVisitorID(function() {
                                    y.getAudienceManagerBlob(e, !0)
                                })), a || !B.isTrackingServerPopulated()) {
                                var r = y._getAudienceManagerURLData(),
                                    n = r.url;
                                return y._customerIDsHashChanged && y._setFieldExpire(P, -1), y._getRemoteField(P, n, e, t, r)
                            }
                        }
                        return ""
                    }, y._supplementalDataIDCurrent = "", y._supplementalDataIDCurrentConsumed = {}, y._supplementalDataIDLast = "", y._supplementalDataIDLastConsumed = {}, y.getSupplementalDataID = function(e, t) {
                        y._supplementalDataIDCurrent || t || (y._supplementalDataIDCurrent = y._generateID(1));
                        var a = y._supplementalDataIDCurrent;
                        return y._supplementalDataIDLast && !y._supplementalDataIDLastConsumed[e] ? (a = y._supplementalDataIDLast, y._supplementalDataIDLastConsumed[e] = !0) : a && (y._supplementalDataIDCurrentConsumed[e] && (y._supplementalDataIDLast = y._supplementalDataIDCurrent, y._supplementalDataIDLastConsumed = y._supplementalDataIDCurrentConsumed, y._supplementalDataIDCurrent = a = t ? "" : y._generateID(1), y._supplementalDataIDCurrentConsumed = {}), a && (y._supplementalDataIDCurrentConsumed[e] = !0)), a
                    }, y.getOptOut = function(e, t) {
                        if (y.isAllowed()) {
                            var a = y._getAudienceManagerURLData("_setMarketingCloudFields"),
                                r = a.url;
                            return y._getRemoteField("MCOPTOUT", r, e, t, a)
                        }
                        return ""
                    }, y.isOptedOut = function(e, t, a) {
                        if (y.isAllowed()) {
                            t || (t = M.OptOut.GLOBAL);
                            var r = y.getOptOut(function(a) {
                                var r = a === M.OptOut.GLOBAL || a.indexOf(t) >= 0;
                                y._callCallback(e, [r])
                            }, a);
                            return r ? r === M.OptOut.GLOBAL || r.indexOf(t) >= 0 : null
                        }
                        return !1
                    }, y._fields = null, y._fieldsExpired = null, y._hash = function(e) {
                        var t, a = 0;
                        if (e)
                            for (t = 0; t < e.length; t++) a = (a << 5) - a + e.charCodeAt(t), a &= a;
                        return a
                    }, y._generateID = m, y._generateLocalMID = function() {
                        var e = y._generateID(0);
                        return O.isClientSideMarketingCloudVisitorID = !0, e
                    }, y._callbackList = null, y._callCallback = function(e, t) {
                        try {
                            "function" == typeof e ? e.apply(E, t) : e[1].apply(e[0], t)
                        } catch (e) {}
                    }, y._registerCallback = function(e, t) {
                        t && (null == y._callbackList && (y._callbackList = {}), null == y._callbackList[e] && (y._callbackList[e] = []), y._callbackList[e].push(t))
                    }, y._callAllCallbacks = function(e, t) {
                        if (null != y._callbackList) {
                            var a = y._callbackList[e];
                            if (a)
                                for (; a.length > 0;) y._callCallback(a.shift(), t)
                        }
                    }, y._addQuerystringParam = function(e, t, a, r) {
                        var n = encodeURIComponent(t) + "=" + encodeURIComponent(a),
                            i = B.parseHash(e),
                            o = B.hashlessUrl(e);
                        if (-1 === o.indexOf("?")) return o + "?" + n + i;
                        var s = o.split("?"),
                            c = s[0] + "?",
                            l = s[1];
                        return c + B.addQueryParamAtLocation(l, n, r) + i
                    }, y._extractParamFromUri = function(e, t) {
                        var a = new RegExp("[\\?&#]" + t + "=([^&#]*)").exec(e);
                        if (a && a.length) return decodeURIComponent(a[1])
                    }, y._parseAdobeMcFromUrl = h(f.ADOBE_MC), y._parseAdobeMcSdidFromUrl = h(f.ADOBE_MC_SDID), y._attemptToPopulateSdidFromUrl = function(t) {
                        var a = y._parseAdobeMcSdidFromUrl(t),
                            r = 1e9;
                        a && a.TS && (r = B.getTimestampInSeconds() - a.TS), a && a.SDID && a.MCORGID === e && r < y.sdidParamExpiry && (y._supplementalDataIDCurrent = a.SDID, y._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0)
                    }, y._attemptToPopulateIdsFromUrl = function() {
                        var t = y._parseAdobeMcFromUrl();
                        if (t && t.TS) {
                            var a = B.getTimestampInSeconds() - t.TS;
                            if (Math.floor(a / 60) > f.ADOBE_MC_TTL_IN_MIN || t.MCORGID !== e) return;
                            b(t)
                        }
                    }, y._mergeServerState = function(e) {
                        if (e) try {
                            if (r = e, (e = B.isObject(r) ? r : JSON.parse(r))[y.marketingCloudOrgID]) {
                                var t = e[y.marketingCloudOrgID];
                                a = t.customerIDs, B.isObject(a) && y.setCustomerIDs(a), A(t.sdid)
                            }
                        } catch (e) {
                            throw new Error("`serverState` has an invalid format.")
                        }
                        var a, r
                    }, y._timeout = null, y._loadData = function(e, t, a, r) {
                        t = y._addQuerystringParam(t, "d_fieldgroup", e, 1), r.url = y._addQuerystringParam(r.url, "d_fieldgroup", e, 1), r.corsUrl = y._addQuerystringParam(r.corsUrl, "d_fieldgroup", e, 1), O.fieldGroupObj[e] = !0, r === Object(r) && r.corsUrl && "XMLHttpRequest" === V.corsMetadata.corsType && V.fireCORS(r, a, e)
                    }, y._clearTimeout = function(e) {
                        null != y._timeout && y._timeout[e] && (clearTimeout(y._timeout[e]), y._timeout[e] = 0)
                    }, y._settingsDigest = 0, y._getSettingsDigest = function() {
                        if (!y._settingsDigest) {
                            var e = y.version;
                            y.audienceManagerServer && (e += "|" + y.audienceManagerServer), y.audienceManagerServerSecure && (e += "|" + y.audienceManagerServerSecure), y._settingsDigest = y._hash(e)
                        }
                        return y._settingsDigest
                    }, y._readVisitorDone = !1, y._readVisitor = function() {
                        if (!y._readVisitorDone) {
                            y._readVisitorDone = !0;
                            var e, t, a, r, n, i, o = y._getSettingsDigest(),
                                s = !1,
                                c = y.cookieRead(y.cookieName),
                                l = new Date;
                            if (null == y._fields && (y._fields = {}), c && "T" !== c)
                                for ((c = c.split("|"))[0].match(/^[\-0-9]+$/) && (parseInt(c[0], 10) !== o && (s = !0), c.shift()), c.length % 2 == 1 && c.pop(), e = 0; e < c.length; e += 2) a = (t = c[e].split("-"))[0], r = c[e + 1], t.length > 1 ? (n = parseInt(t[1], 10), i = t[1].indexOf("s") > 0) : (n = 0, i = !1), s && ("MCCIDH" === a && (r = ""), n > 0 && (n = l.getTime() / 1e3 - 60)), a && r && (y._setField(a, r, 1), n > 0 && (y._fields["expire" + a] = n + (i ? "s" : ""), (l.getTime() >= 1e3 * n || i && !y.cookieRead(y.sessionCookieName)) && (y._fieldsExpired || (y._fieldsExpired = {}), y._fieldsExpired[a] = !0)));
                            !y._getField(k) && B.isTrackingServerPopulated() && (c = y.cookieRead("s_vi")) && ((c = c.split("|")).length > 1 && c[0].indexOf("v1") >= 0 && ((e = (r = c[1]).indexOf("[")) >= 0 && (r = r.substring(0, e)), r && r.match(f.VALID_VISITOR_ID_REGEX) && y._setField(k, r)))
                        }
                    }, y._appendVersionTo = function(e) {
                        var t = "vVersion|" + y.version,
                            a = e ? y._getCookieVersion(e) : null;
                        return a ? d.areVersionsDifferent(a, y.version) && (e = e.replace(f.VERSION_REGEX, t)) : e += (e ? "|" : "") + t, e
                    }, y._writeVisitor = function() {
                        var e, t, a = y._getSettingsDigest();
                        for (e in y._fields) R(e) && y._fields[e] && "expire" !== e.substring(0, 6) && (t = y._fields[e], a += (a ? "|" : "") + e + (y._fields["expire" + e] ? "-" + y._fields["expire" + e] : "") + "|" + t);
                        a = y._appendVersionTo(a), y.cookieWrite(y.cookieName, a, 1)
                    }, y._getField = function(e, t) {
                        return null == y._fields || !t && y._fieldsExpired && y._fieldsExpired[e] ? null : y._fields[e]
                    }, y._setField = function(e, t, a) {
                        null == y._fields && (y._fields = {}), y._fields[e] = t, a || y._writeVisitor()
                    }, y._getFieldList = function(e, t) {
                        var a = y._getField(e, t);
                        return a ? a.split("*") : null
                    }, y._setFieldList = function(e, t, a) {
                        y._setField(e, t ? t.join("*") : "", a)
                    }, y._getFieldMap = function(e, t) {
                        var a = y._getFieldList(e, t);
                        if (a) {
                            var r, n = {};
                            for (r = 0; r < a.length; r += 2) n[a[r]] = a[r + 1];
                            return n
                        }
                        return null
                    }, y._setFieldMap = function(e, t, a) {
                        var r, n = null;
                        if (t)
                            for (r in n = [], t) R(r) && (n.push(r), n.push(t[r]));
                        y._setFieldList(e, n, a)
                    }, y._setFieldExpire = function(e, t, a) {
                        var r = new Date;
                        r.setTime(r.getTime() + 1e3 * t), null == y._fields && (y._fields = {}), y._fields["expire" + e] = Math.floor(r.getTime() / 1e3) + (a ? "s" : ""), t < 0 ? (y._fieldsExpired || (y._fieldsExpired = {}), y._fieldsExpired[e] = !0) : y._fieldsExpired && (y._fieldsExpired[e] = !1), a && (y.cookieRead(y.sessionCookieName) || y.cookieWrite(y.sessionCookieName, "1"))
                    }, y._findVisitorID = function(e) {
                        return e && ("object" == typeof e && (e = e.d_mid ? e.d_mid : e.visitorID ? e.visitorID : e.id ? e.id : e.uuid ? e.uuid : "" + e), e && "NOTARGET" === (e = e.toUpperCase()) && (e = I), e && (e === I || e.match(f.VALID_VISITOR_ID_REGEX)) || (e = "")), e
                    }, y._setFields = function(e, t) {
                        if (y._clearTimeout(e), null != y._loading && (y._loading[e] = !1), O.fieldGroupObj[e] && O.setState(e, !1), "MC" === e) {
                            !0 !== O.isClientSideMarketingCloudVisitorID && (O.isClientSideMarketingCloudVisitorID = !1);
                            var a = y._getField(w);
                            if (!a || y.overwriteCrossDomainMCIDAndAID) {
                                if (!(a = "object" == typeof t && t.mid ? t.mid : y._findVisitorID(t))) {
                                    if (y._use1stPartyMarketingCloudServer && !y.tried1stPartyMarketingCloudServer) return y.tried1stPartyMarketingCloudServer = !0, void y.getAnalyticsVisitorID(null, !1, !0);
                                    a = y._generateLocalMID()
                                }
                                y._setField(w, a)
                            }
                            a && a !== I || (a = ""), "object" == typeof t && ((t.d_region || t.dcs_region || t.d_blob || t.blob) && y._setFields(_, t), y._use1stPartyMarketingCloudServer && t.mid && y._setFields(C, {
                                id: t.id
                            })), y._callAllCallbacks(w, [a])
                        }
                        if (e === _ && "object" == typeof t) {
                            var r = 604800;
                            null != t.id_sync_ttl && t.id_sync_ttl && (r = parseInt(t.id_sync_ttl, 10));
                            var n = D.getRegionAndCheckIfChanged(t, r);
                            y._callAllCallbacks("MCAAMLH", [n]);
                            var i = y._getField(P);
                            (t.d_blob || t.blob) && ((i = t.d_blob) || (i = t.blob), y._setFieldExpire(P, r), y._setField(P, i)), i || (i = ""), y._callAllCallbacks(P, [i]), !t.error_msg && y._newCustomerIDsHash && y._setField("MCCIDH", y._newCustomerIDsHash)
                        }
                        if (e === C) {
                            var o = y._getField(k);
                            o && !y.overwriteCrossDomainMCIDAndAID || ((o = y._findVisitorID(t)) ? o !== I && y._setFieldExpire(P, -1) : o = I, y._setField(k, o)), o && o !== I || (o = ""), y._callAllCallbacks(k, [o])
                        }
                        if (y.idSyncDisableSyncs || y.disableIdSyncs) D.idCallNotProcesssed = !0;
                        else {
                            D.idCallNotProcesssed = !1;
                            var s = {};
                            s.ibs = t.ibs, s.subdomain = t.subdomain, D.processIDCallData(s)
                        }
                        var c, l;
                        t === Object(t) && (y.isAllowed() && (c = y._getField("MCOPTOUT")), c || (c = I, t.d_optout && t.d_optout instanceof Array && (c = t.d_optout.join(",")), l = parseInt(t.d_ottl, 10), isNaN(l) && (l = 7200), y._setFieldExpire("MCOPTOUT", l, !0), y._setField("MCOPTOUT", c)), y._callAllCallbacks("MCOPTOUT", [c]))
                    }, y._loading = null, y._getRemoteField = function(e, t, a, r, n) {
                        var i, o = "",
                            s = B.isFirstPartyAnalyticsVisitorIDCall(e),
                            c = {
                                MCAAMLH: !0,
                                MCAAMB: !0
                            };
                        if (y.isAllowed())
                            if (y._readVisitor(), !(!(o = y._getField(e, !0 === c[e])) || y._fieldsExpired && y._fieldsExpired[e]) || y.disableThirdPartyCalls && !s) o || (e === w ? (y._registerCallback(e, a), o = y._generateLocalMID(), y.setMarketingCloudVisitorID(o)) : e === k ? (y._registerCallback(e, a), o = "", y.setAnalyticsVisitorID(o)) : (o = "", r = !0));
                            else if (e === w || "MCOPTOUT" === e ? i = "MC" : "MCAAMLH" === e || e === P ? i = _ : e === k && (i = C), i) return !t || null != y._loading && y._loading[i] || (null == y._loading && (y._loading = {}), y._loading[i] = !0, y._loadData(i, t, function(t) {
                            if (!y._getField(e)) {
                                t && O.setState(i, !0);
                                var a = "";
                                e === w ? a = y._generateLocalMID() : i === _ && (a = {
                                    error_msg: "timeout"
                                }), y._setFields(i, a)
                            }
                        }, n)), y._registerCallback(e, a), o || (t || y._setFields(i, {
                            id: I
                        }), "");
                        return e !== w && e !== k || o !== I || (o = "", r = !0), a && r && y._callCallback(a, [o]), o
                    }, y._setMarketingCloudFields = function(e) {
                        y._readVisitor(), y._setFields("MC", e)
                    }, y._mapCustomerIDs = function(e) {
                        y.getAudienceManagerBlob(e, !0)
                    }, y._setAnalyticsFields = function(e) {
                        y._readVisitor(), y._setFields(C, e)
                    }, y._setAudienceManagerFields = function(e) {
                        y._readVisitor(), y._setFields(_, e)
                    }, y._getAudienceManagerURLData = function(e) {
                        var t = y.audienceManagerServer,
                            a = "",
                            r = y._getField(w),
                            n = y._getField(P, !0),
                            i = y._getField(k),
                            o = i && i !== I ? "&d_cid_ic=AVID%01" + encodeURIComponent(i) : "";
                        if (y.loadSSL && y.audienceManagerServerSecure && (t = y.audienceManagerServerSecure), t) {
                            var s, c, l = y.getCustomerIDs();
                            if (l)
                                for (s in l) R(s) && (c = l[s], o += "&d_cid_ic=" + encodeURIComponent(s) + "%01" + encodeURIComponent(c.id ? c.id : "") + (c.authState ? "%01" + c.authState : ""));
                            e || (e = "_setAudienceManagerFields");
                            var d = "http" + (y.loadSSL ? "s" : "") + "://" + t + "/id",
                                u = "d_visid_ver=" + y.version + "&d_rtbd=json&d_ver=2" + (!r && y._use1stPartyMarketingCloudServer ? "&d_verify=1" : "") + "&d_orgid=" + encodeURIComponent(y.marketingCloudOrgID) + "&d_nsid=" + (y.idSyncContainerID || 0) + (r ? "&d_mid=" + encodeURIComponent(r) : "") + (y.idSyncDisable3rdPartySyncing || y.disableThirdPartyCookies ? "&d_coppa=true" : "") + (!0 === S ? "&d_coop_safe=1" : !1 === S ? "&d_coop_unsafe=1" : "") + (n ? "&d_blob=" + encodeURIComponent(n) : "") + o,
                                m = ["s_c_il", y._in, e];
                            return {
                                url: a = d + "?" + u + "&d_cb=s_c_il%5B" + y._in + "%5D." + e,
                                corsUrl: d + "?" + u,
                                callback: m
                            }
                        }
                        return {
                            url: a
                        }
                    }, y.appendVisitorIDsTo = function(e) {
                        try {
                            var t = [
                                [w, y._getField(w)],
                                [k, y._getField(k)],
                                ["MCORGID", y.marketingCloudOrgID]
                            ];
                            return y._addQuerystringParam(e, f.ADOBE_MC, v(t))
                        } catch (t) {
                            return e
                        }
                    }, y.appendSupplementalDataIDTo = function(e, t) {
                        if (!(t = t || y.getSupplementalDataID(B.generateRandomString(), !0))) return e;
                        try {
                            var a = v([
                                ["SDID", t],
                                ["MCORGID", y.marketingCloudOrgID]
                            ]);
                            return y._addQuerystringParam(e, f.ADOBE_MC_SDID, a)
                        } catch (t) {
                            return e
                        }
                    };
                    var B = {
                        parseHash: function(e) {
                            var t = e.indexOf("#");
                            return t > 0 ? e.substr(t) : ""
                        },
                        hashlessUrl: function(e) {
                            var t = e.indexOf("#");
                            return t > 0 ? e.substr(0, t) : e
                        },
                        addQueryParamAtLocation: function(e, t, a) {
                            var r = e.split("&");
                            return a = null != a ? a : r.length, r.splice(a, 0, t), r.join("&")
                        },
                        isFirstPartyAnalyticsVisitorIDCall: function(e, t, a) {
                            return e === k && (t || (t = y.trackingServer), a || (a = y.trackingServerSecure), !("string" != typeof(r = y.loadSSL ? a : t) || !r.length) && r.indexOf("2o7.net") < 0 && r.indexOf("omtrdc.net") < 0);
                            var r
                        },
                        isObject: function(e) {
                            return Boolean(e && e === Object(e))
                        },
                        removeCookie: function(e) {
                            document.cookie = encodeURIComponent(e) + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                        },
                        isTrackingServerPopulated: function() {
                            return !!y.trackingServer || !!y.trackingServerSecure
                        },
                        getTimestampInSeconds: function() {
                            return Math.round((new Date).getTime() / 1e3)
                        },
                        parsePipeDelimetedKeyValues: function(e) {
                            return e.split("|").reduce(function(e, t) {
                                var a = t.split("=");
                                return e[a[0]] = decodeURIComponent(a[1]), e
                            }, {})
                        },
                        generateRandomString: function(e) {
                            e = e || 5;
                            for (var t = "", a = "abcdefghijklmnopqrstuvwxyz0123456789"; e--;) t += a[Math.floor(Math.random() * a.length)];
                            return t
                        },
                        parseBoolean: function(e) {
                            return "true" === e || "false" !== e && null
                        },
                        replaceMethodsWithFunction: function(e, t) {
                            for (var a in e) e.hasOwnProperty(a) && "function" == typeof e[a] && (e[a] = t);
                            return e
                        },
                        pluck: function(e, t) {
                            return t.reduce(function(t, a) {
                                return e[a] && (t[a] = e[a]), t
                            }, Object.create(null))
                        }
                    };
                    y._helpers = B;
                    var D = p(y, M);
                    y._destinationPublishing = D, y.timeoutMetricsLog = [];
                    var x, O = {
                        isClientSideMarketingCloudVisitorID: null,
                        MCIDCallTimedOut: null,
                        AnalyticsIDCallTimedOut: null,
                        AAMIDCallTimedOut: null,
                        fieldGroupObj: {},
                        setState: function(e, t) {
                            switch (e) {
                                case "MC":
                                    !1 === t ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1) : this.MCIDCallTimedOut = t;
                                    break;
                                case C:
                                    !1 === t ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1) : this.AnalyticsIDCallTimedOut = t;
                                    break;
                                case _:
                                    !1 === t ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1) : this.AAMIDCallTimedOut = t
                            }
                        }
                    };
                    y.isClientSideMarketingCloudVisitorID = function() {
                        return O.isClientSideMarketingCloudVisitorID
                    }, y.MCIDCallTimedOut = function() {
                        return O.MCIDCallTimedOut
                    }, y.AnalyticsIDCallTimedOut = function() {
                        return O.AnalyticsIDCallTimedOut
                    }, y.AAMIDCallTimedOut = function() {
                        return O.AAMIDCallTimedOut
                    }, y.idSyncGetOnPageSyncInfo = function() {
                        return y._readVisitor(), y._getField("MCSYNCSOP")
                    }, y.idSyncByURL = function(e) {
                        var t = N(e || {});
                        if (t.error) return t.error;
                        var a, r, n = e.url,
                            i = encodeURIComponent,
                            o = D;
                        return n = n.replace(/^https:/, "").replace(/^http:/, ""), a = c.encodeAndBuildRequest(["", e.dpid, e.dpuuid || ""], ","), r = ["ibs", i(e.dpid), "img", i(n), t.ttl, "", a], o.addMessage(r.join("|")), o.requestToProcess(), "Successfully queued"
                    }, y.idSyncByDataSource = function(e) {
                        return e === Object(e) && "string" == typeof e.dpuuid && e.dpuuid.length ? (e.url = "//dpm.demdex.net/ibs:dpid=" + e.dpid + "&dpuuid=" + e.dpuuid, y.idSyncByURL(e)) : "Error: config or config.dpuuid is empty"
                    }, y._getCookieVersion = function(e) {
                        e = e || y.cookieRead(y.cookieName);
                        var t = f.VERSION_REGEX.exec(e);
                        return t && t.length > 1 ? t[1] : null
                    }, y._resetAmcvCookie = function(e) {
                        var t = y._getCookieVersion();
                        t && !d.isLessThan(t, e) || B.removeCookie(y.cookieName)
                    }, y.setAsCoopSafe = function() {
                        S = !0
                    }, y.setAsCoopUnsafe = function() {
                        S = !1
                    }, y.init = function() {
                        ! function() {
                            if (t && "object" == typeof t) {
                                for (var e in y.configs = Object.create(null), t) R(e) && (y[e] = t[e], y.configs[e] = t[e]);
                                y.idSyncContainerID = y.idSyncContainerID || 0, S = "boolean" == typeof y.isCoopSafe ? y.isCoopSafe : B.parseBoolean(y.isCoopSafe), y.resetBeforeVersion && y._resetAmcvCookie(y.resetBeforeVersion), y._attemptToPopulateIdsFromUrl(), y._attemptToPopulateSdidFromUrl(), y._readVisitor();
                                var a = y._getField(L),
                                    r = Math.ceil((new Date).getTime() / f.MILLIS_PER_DAY);
                                y.idSyncDisableSyncs || y.disableIdSyncs || !D.canMakeSyncIDCall(a, r) || (y._setFieldExpire(P, -1), y._setField(L, r)), y.getMarketingCloudVisitorID(), y.getAudienceManagerLocationHint(), y.getAudienceManagerBlob(), y._mergeServerState(y.serverState)
                            } else y._attemptToPopulateIdsFromUrl(), y._attemptToPopulateSdidFromUrl()
                        }(),
                        function() {
                            if (!y.idSyncDisableSyncs && !y.disableIdSyncs) {
                                D.checkDPIframeSrc();
                                var e = function() {
                                    var e = D;
                                    e.readyToAttachIframe() && e.attachIframe()
                                };
                                E.addEventListener("load", function() {
                                    M.windowLoaded = !0, e()
                                });
                                try {
                                    u.receiveMessage(function(e) {
                                        D.receiveMessage(e.data)
                                    }, D.iframeHost)
                                } catch (e) {}
                            }
                        }(), y.whitelistIframeDomains && f.POST_MESSAGE_ENABLED && (y.whitelistIframeDomains = y.whitelistIframeDomains instanceof Array ? y.whitelistIframeDomains : [y.whitelistIframeDomains], y.whitelistIframeDomains.forEach(function(t) {
                            var a = new n(e, t),
                                r = i(y, a);
                            u.receiveMessage(r, t)
                        }))
                    }
                };
            h.getInstance = function(e, t) {
                    if (!e) throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");
                    e.indexOf("@") < 0 && (e += "@AdobeOrg");
                    var n = function() {
                        var t = a.s_c_il;
                        if (t)
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                if (n && "Visitor" === n._c && n.marketingCloudOrgID === e) return n
                            }
                    }();
                    if (n) return n;
                    var i = e.split("").reverse().join(""),
                        o = new h(e, null, i);
                    a.s_c_il.splice(--a.s_c_in, 1);
                    var s = c.getIeVersion();
                    if ("number" == typeof s && s < 10) return o._helpers.replaceMethodsWithFunction(o, function() {});
                    var l = o.isAllowed(),
                        d = function() {
                            try {
                                return a.self !== a.parent
                            } catch (e) {
                                return !0
                            }
                        }() && !l && a.parent ? new r(e, t, o, a.parent) : new h(e, t, i);
                    return o = null, d.init(), d
                },
                function() {
                    function e() {
                        h.windowLoaded = !0
                    }
                    a.addEventListener ? a.addEventListener("load", e) : a.attachEvent && a.attachEvent("onload", e), h.codeLoadEnd = (new Date).getTime()
                }(), a.Visitor = h, t.exports = h
        }).call(this, "undefined" != typeof window && "undefined" != typeof global && window.global === global ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./child/ChildVisitor": 2,
        "./child/Message": 3,
        "./child/makeChildMessageListener": 4,
        "./units/crossDomain": 8,
        "./units/makeCorsRequest": 9,
        "./units/makeDestinationPublishing": 10,
        "./units/version": 11,
        "./utils/asyncParallelApply": 12,
        "./utils/constants": 14,
        "./utils/enums": 15,
        "./utils/getDomain": 16,
        "./utils/utils": 18,
        "@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID": 19
    }],
    2: [function(e, t) {
        (function(a) {
            e("../utils/polyfills");
            var r = e("./strategies/LocalVisitor"),
                n = e("./strategies/ProxyVisitor"),
                i = e("./strategies/PlaceholderVisitor"),
                o = e("../utils/callbackRegistryFactory"),
                s = e("./Message"),
                c = e("../utils/enums").MESSAGES;
            t.exports = function(e, t, l, d) {
                function u(e) {
                    Object.assign(N, e)
                }

                function m(e) {
                    Object.assign(N.state, e), N.callbackRegistry.executeAll(N.state)
                }

                function g(e) {
                    if (!M.isInvalid(e)) {
                        E = !1;
                        var t = M.parse(e);
                        N.setStateAndPublish(t.state)
                    }
                }

                function p(e) {
                    !E && y && (E = !0, M.send(d, e))
                }

                function f() {
                    u(new r(l._generateID)), N.getMarketingCloudVisitorID(), N.callbackRegistry.executeAll(N.state, !0), a.removeEventListener("message", h)
                }

                function h(e) {
                    if (!M.isInvalid(e)) {
                        var t = M.parse(e);
                        E = !1, a.clearTimeout(this.timeout), a.removeEventListener("message", h), u(new n(N)), a.addEventListener("message", g), N.setStateAndPublish(t.state), N.callbackRegistry.hasCallbacks() && p(c.GETSTATE)
                    }
                }

                function b() {
                    y && postMessage ? (a.addEventListener("message", h), p(c.HANDSHAKE), this.timeout = setTimeout(f, 250)) : f()
                }

                function A() {
                    a.s_c_in || (a.s_c_il = [], a.s_c_in = 0), N._c = "Visitor", N._il = a.s_c_il, N._in = a.s_c_in, N._il[N._in] = N, a.s_c_in++
                }

                function v() {
                    function e(e) {
                        0 !== e.indexOf("_") && "function" == typeof l[e] && (N[e] = function() {})
                    }
                    Object.keys(l).forEach(e), N.getSupplementalDataID = l.getSupplementalDataID
                }
                var N = this,
                    y = t.whitelistParentDomain;
                N.state = {}, N.version = l.version, N.marketingCloudOrgID = e;
                var E = !1,
                    M = new s(e, y);
                N.callbackRegistry = o(), N.init = function() {
                    A(), v(), u(new i(N)), b()
                }, N.findField = function(e, t) {
                    if (N.state[e]) return t(N.state[e]), N.state[e]
                }, N.messageParent = p, N.setStateAndPublish = m
            }
        }).call(this, "undefined" != typeof window && "undefined" != typeof global && window.global === global ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../utils/callbackRegistryFactory": 13,
        "../utils/enums": 15,
        "../utils/polyfills": 17,
        "./Message": 3,
        "./strategies/LocalVisitor": 5,
        "./strategies/PlaceholderVisitor": 6,
        "./strategies/ProxyVisitor": 7
    }],
    3: [function(e, t) {
        var a = e("../utils/enums").MESSAGES,
            r = {
                0: "prefix",
                1: "orgID",
                2: "state"
            };
        t.exports = function(e, t) {
            this.parse = function(e) {
                try {
                    var t = {};
                    return e.data.split("|").forEach(function(e, a) {
                        void 0 !== e && (t[r[a]] = 2 !== a ? e : JSON.parse(e))
                    }), t
                } catch (e) {}
            }, this.isInvalid = function(r) {
                var n = this.parse(r);
                if (!n || Object.keys(n).length < 2) return !0;
                var i = e !== n.orgID,
                    o = !t || r.origin !== t,
                    s = -1 === Object.keys(a).indexOf(n.prefix);
                return i || o || s
            }, this.send = function(a, r, n) {
                var i = r + "|" + e;
                n && n === Object(n) && (i += "|" + JSON.stringify(n));
                try {
                    a.postMessage(i, t)
                } catch (e) {}
            }
        }
    }, {
        "../utils/enums": 15
    }],
    4: [function(e, t) {
        var a = e("../utils/enums"),
            r = e("../utils/utils"),
            n = a.MESSAGES,
            i = a.ALL_APIS,
            o = a.ASYNC_API_MAP,
            s = a.FIELDGROUP_TO_FIELD;
        t.exports = function(e, t) {
            function a() {
                var t = {};
                return Object.keys(i).forEach(function(a) {
                    var n = i[a],
                        o = e[n]();
                    r.isValueEmpty(o) || (t[a] = o)
                }), t
            }

            function c() {
                var t = [];
                return e._loading && Object.keys(e._loading).forEach(function(a) {
                    if (e._loading[a]) {
                        var r = s[a];
                        t.push(r)
                    }
                }), t.length ? t : null
            }

            function l(t) {
                return function a() {
                    var r = c();
                    if (r) {
                        var n = o[r[0]];
                        e[n](a, !0)
                    } else t()
                }
            }

            function d(e, r) {
                var n = a();
                t.send(e, r, n)
            }

            function u(e) {
                g(e), d(e, n.HANDSHAKE)
            }

            function m(e) {
                l(function() {
                    d(e, n.PARENTSTATE)
                })()
            }

            function g(a) {
                function r(r) {
                    i.call(e, r), t.send(a, n.PARENTSTATE, {
                        CUSTOMERIDS: e.getCustomerIDs()
                    })
                }
                var i = e.setCustomerIDs;
                e.setCustomerIDs = r
            }
            return function(e) {
                t.isInvalid(e) || (t.parse(e).prefix === n.HANDSHAKE ? u : m)(e.source)
            }
        }
    }, {
        "../utils/enums": 15,
        "../utils/utils": 18
    }],
    5: [function(e, t) {
        var a = e("../../utils/enums").STATE_KEYS_MAP;
        t.exports = function(e) {
            function t() {}

            function r(t, r) {
                var n = this;
                return function() {
                    var t = e(0, a.MCMID),
                        i = {};
                    return i[a.MCMID] = t, n.setStateAndPublish(i), r(t), t
                }
            }
            this.getMarketingCloudVisitorID = function(e) {
                e = e || t;
                var n = this.findField(a.MCMID, e),
                    i = r.call(this, a.MCMID, e);
                return void 0 !== n ? n : i()
            }
        }
    }, {
        "../../utils/enums": 15
    }],
    6: [function(e, t) {
        var a = e("../../utils/enums").ASYNC_API_MAP;
        t.exports = function() {
            Object.keys(a).forEach(function(e) {
                this[a[e]] = function(t) {
                    this.callbackRegistry.add(e, t)
                }
            }, this)
        }
    }, {
        "../../utils/enums": 15
    }],
    7: [function(e, t) {
        var a = e("../../utils/enums"),
            r = a.MESSAGES,
            n = a.ASYNC_API_MAP,
            i = a.SYNC_API_MAP;
        t.exports = function() {
            function e() {}

            function t(e, t) {
                var a = this;
                return function() {
                    return a.callbackRegistry.add(e, t), a.messageParent(r.GETSTATE), ""
                }
            }

            function a(a) {
                this[n[a]] = function(r) {
                    r = r || e;
                    var n = this.findField(a, r),
                        i = t.call(this, a, r);
                    return void 0 !== n ? n : i()
                }
            }

            function o(t) {
                this[i[t]] = function() {
                    return this.findField(t, e) || {}
                }
            }
            Object.keys(n).forEach(a, this), Object.keys(i).forEach(o, this)
        }
    }, {
        "../../utils/enums": 15
    }],
    8: [function(e, t) {
        (function(e) {
            var a = !!e.postMessage;
            t.exports = {
                postMessage: function(e, t, r) {
                    var n = 1;
                    t && (a ? r.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (r.location = t.replace(/#.*$/, "") + "#" + +new Date + n++ + "&" + e))
                },
                receiveMessage: function(t, r) {
                    var n;
                    try {
                        a && (t && (n = function(e) {
                            if ("string" == typeof r && e.origin !== r || "[object Function]" === Object.prototype.toString.call(r) && !1 === r(e.origin)) return !1;
                            t(e)
                        }), e.addEventListener ? e[t ? "addEventListener" : "removeEventListener"]("message", n) : e[t ? "attachEvent" : "detachEvent"]("onmessage", n))
                    } catch (e) {}
                }
            }
        }).call(this, "undefined" != typeof window && "undefined" != typeof global && window.global === global ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    9: [function(e, t) {
        (function(e) {
            t.exports = function(t) {
                return {
                    corsMetadata: (a = "none", r = !0, "undefined" != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ? a = "XMLHttpRequest" : "undefined" != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (r = !1), Object.prototype.toString.call(e.HTMLElement).indexOf("Constructor") > 0 && (r = !1)), {
                        corsType: a,
                        corsCookiesEnabled: r
                    }),
                    getCORSInstance: function() {
                        return "none" === this.corsMetadata.corsType ? null : new e[this.corsMetadata.corsType]
                    },
                    fireCORS: function(a, r) {
                        function n(t) {
                            var r;
                            try {
                                if ((r = JSON.parse(t)) !== Object(r)) return void i.handleCORSError(a, null, "Response is not JSON")
                            } catch (e) {
                                return void i.handleCORSError(a, e, "Error parsing response as JSON")
                            }
                            try {
                                for (var n = a.callback, o = e, s = 0; s < n.length; s++) o = o[n[s]];
                                o(r)
                            } catch (e) {
                                i.handleCORSError(a, e, "Error forming callback function")
                            }
                        }
                        var i = this;
                        r && (a.loadErrorHandler = r);
                        try {
                            var o = this.getCORSInstance();
                            o.open("get", a.corsUrl + "&ts=" + (new Date).getTime(), !0), "XMLHttpRequest" === this.corsMetadata.corsType && (o.withCredentials = !0, o.timeout = t.loadTimeout, o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onreadystatechange = function() {
                                4 === this.readyState && 200 === this.status && n(this.responseText)
                            }), o.onerror = function(e) {
                                i.handleCORSError(a, e, "onerror")
                            }, o.ontimeout = function(e) {
                                i.handleCORSError(a, e, "ontimeout")
                            }, o.send(), t._log.requests.push(a.corsUrl)
                        } catch (e) {
                            this.handleCORSError(a, e, "try-catch")
                        }
                    },
                    handleCORSError: function(e, a, r) {
                        t.CORSErrors.push({
                            corsData: e,
                            error: a,
                            description: r
                        }), e.loadErrorHandler && ("ontimeout" === r ? e.loadErrorHandler(!0) : e.loadErrorHandler(!1))
                    }
                };
                var a, r
            }
        }).call(this, "undefined" != typeof window && "undefined" != typeof global && window.global === global ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    10: [function(e, t) {
        (function(a) {
            var r = e("../utils/constants"),
                n = e("./crossDomain"),
                i = e("../utils/utils");
            t.exports = function(e, t) {
                var o = a.document;
                return {
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
                        var t, a = "http://fast.",
                            r = "?d_nsid=" + e.idSyncContainerID + "#" + encodeURIComponent(o.location.href);
                        return this.subdomain || (this.subdomain = "nosubdomainreturned"), e.loadSSL && (a = e.idSyncSSLUseAkamai ? "https://fast." : "https://"), t = a + this.subdomain + ".demdex.net/dest5.html" + r, this.iframeHost = this.getIframeHost(t), this.id = "destination_publishing_iframe_" + this.subdomain + "_" + e.idSyncContainerID, t
                    },
                    checkDPIframeSrc: function() {
                        var t = "?d_nsid=" + e.idSyncContainerID + "#" + encodeURIComponent(o.location.href);
                        "string" == typeof e.dpIframeSrc && e.dpIframeSrc.length && (this.id = "destination_publishing_iframe_" + (e._subdomain || this.subdomain || (new Date).getTime()) + "_" + e.idSyncContainerID, this.iframeHost = this.getIframeHost(e.dpIframeSrc), this.url = e.dpIframeSrc + t)
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
                    messageSendingInterval: r.POST_MESSAGE_ENABLED ? null : 100,
                    jsonForComparison: [],
                    jsonDuplicates: [],
                    jsonWaiting: [],
                    jsonProcessed: [],
                    canSetThirdPartyCookies: !0,
                    receivedThirdPartyCookiesNotification: !1,
                    readyToAttachIframe: function() {
                        return !e.idSyncDisable3rdPartySyncing && (this.doAttachIframe || e._doAttachIframe) && (this.subdomain && "nosubdomainreturned" !== this.subdomain || e._subdomain) && this.url && !this.startedAttachingIframe
                    },
                    attachIframe: function() {
                        function e() {
                            (r = o.createElement("iframe")).sandbox = "allow-scripts allow-same-origin", r.title = "Adobe ID Syncing iFrame", r.id = a.id, r.name = a.id + "_name", r.style.cssText = "display: none; width: 0; height: 0;", r.src = a.url, a.newIframeCreated = !0, t(), o.body.appendChild(r)
                        }

                        function t() {
                            r.addEventListener("load", function() {
                                r.className = "aamIframeLoaded", a.iframeHasLoaded = !0, a.requestToProcess()
                            })
                        }
                        this.startedAttachingIframe = !0;
                        var a = this,
                            r = o.getElementById(this.id);
                        r ? "IFRAME" !== r.nodeName ? (this.id += "_2", this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, "aamIframeLoaded" !== r.className ? (this.originalIframeHasLoadedAlready = !1, t()) : (this.originalIframeHasLoadedAlready = !0, this.iframeHasLoaded = !0, this.iframe = r, this.requestToProcess())) : e(), this.iframe = r
                    },
                    requestToProcess: function(t) {
                        function a() {
                            i.jsonForComparison.push(t), i.jsonWaiting.push(t), i.processSyncOnPage(t)
                        }
                        var n, i = this;
                        if (t === Object(t) && t.ibs)
                            if (n = JSON.stringify(t.ibs || []), this.jsonForComparison.length) {
                                var o, s, c, l = !1;
                                for (o = 0, s = this.jsonForComparison.length; o < s; o++)
                                    if (c = this.jsonForComparison[o], n === JSON.stringify(c.ibs || [])) {
                                        l = !0;
                                        break
                                    } l ? this.jsonDuplicates.push(t) : a()
                            } else a();
                        if ((this.receivedThirdPartyCookiesNotification || !r.POST_MESSAGE_ENABLED || this.iframeHasLoaded) && this.jsonWaiting.length) {
                            var d = this.jsonWaiting.shift();
                            this.process(d), this.requestToProcess()
                        }!e.idSyncDisableSyncs && this.iframeHasLoaded && this.messages.length && !this.sendingMessages && (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function() {
                            i.messageSendingInterval = r.POST_MESSAGE_ENABLED ? null : 150
                        }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages())
                    },
                    getRegionAndCheckIfChanged: function(t, a) {
                        var r = e._getField("MCAAMLH"),
                            n = t.d_region || t.dcs_region;
                        return r ? n && (e._setFieldExpire("MCAAMLH", a), e._setField("MCAAMLH", n), parseInt(r, 10) !== n && (this.regionChanged = !0, this.timesRegionChanged++, e._setField("MCSYNCSOP", ""), e._setField("MCSYNCS", ""), r = n)) : (r = n) && (e._setFieldExpire("MCAAMLH", a), e._setField("MCAAMLH", r)), r || (r = ""), r
                    },
                    processSyncOnPage: function(e) {
                        var t, a, r, n;
                        if ((t = e.ibs) && t instanceof Array && (a = t.length))
                            for (r = 0; r < a; r++)(n = t[r]).syncOnPage && this.checkFirstPartyCookie(n, "", "syncOnPage")
                    },
                    process: function(e) {
                        var t, a, r, n, o, s = encodeURIComponent,
                            c = !1;
                        if ((t = e.ibs) && t instanceof Array && (a = t.length))
                            for (c = !0, r = 0; r < a; r++) n = t[r], o = [s("ibs"), s(n.id || ""), s(n.tag || ""), i.encodeAndBuildRequest(n.url || [], ","), s(n.ttl || ""), "", "", n.fireURLSync ? "true" : "false"], n.syncOnPage || (this.canSetThirdPartyCookies ? this.addMessage(o.join("|")) : n.fireURLSync && this.checkFirstPartyCookie(n, o.join("|")));
                        c && this.jsonProcessed.push(e)
                    },
                    checkFirstPartyCookie: function(t, a, n) {
                        var i = "syncOnPage" === n,
                            o = i ? "MCSYNCSOP" : "MCSYNCS";
                        e._readVisitor();
                        var s, c, l = e._getField(o),
                            d = !1,
                            u = !1,
                            m = Math.ceil((new Date).getTime() / r.MILLIS_PER_DAY);
                        l ? (s = l.split("*"), d = (c = this.pruneSyncData(s, t.id, m)).dataPresent, u = c.dataValid, d && u || this.fireSync(i, t, a, s, o, m)) : (s = [], this.fireSync(i, t, a, s, o, m))
                    },
                    pruneSyncData: function(e, t, a) {
                        var r, n, i, o = !1,
                            s = !1;
                        for (n = 0; n < e.length; n++) r = e[n], i = parseInt(r.split("-")[1], 10), r.match("^" + t + "-") ? (o = !0, a < i ? s = !0 : (e.splice(n, 1), n--)) : a >= i && (e.splice(n, 1), n--);
                        return {
                            dataPresent: o,
                            dataValid: s
                        }
                    },
                    manageSyncsSize: function(e) {
                        if (e.join("*").length > this.MAX_SYNCS_LENGTH)
                            for (e.sort(function(e, t) {
                                    return parseInt(e.split("-")[1], 10) - parseInt(t.split("-")[1], 10)
                                }); e.join("*").length > this.MAX_SYNCS_LENGTH;) e.shift()
                    },
                    fireSync: function(t, a, r, n, i, o) {
                        var s = this;
                        if (t) {
                            if ("img" === a.tag) {
                                var c, l, d, u, m = a.url,
                                    g = e.loadSSL ? "https:" : "http:";
                                for (c = 0, l = m.length; c < l; c++) {
                                    d = m[c], u = /^\/\//.test(d);
                                    var p = new Image;
                                    p.addEventListener("load", function(t, a, r, n) {
                                        return function() {
                                            s.onPagePixels[t] = null, e._readVisitor();
                                            var o, c, l, d, u = e._getField(i),
                                                m = [];
                                            if (u)
                                                for (c = 0, l = (o = u.split("*")).length; c < l; c++)(d = o[c]).match("^" + a.id + "-") || m.push(d);
                                            s.setSyncTrackingData(m, a, r, n)
                                        }
                                    }(this.onPagePixels.length, a, i, o)), p.src = (u ? g : "") + d, this.onPagePixels.push(p)
                                }
                            }
                        } else this.addMessage(r), this.setSyncTrackingData(n, a, i, o)
                    },
                    addMessage: function(t) {
                        var a = encodeURIComponent(e._enableErrorReporting ? "---destpub-debug---" : "---destpub---");
                        this.messages.push((r.POST_MESSAGE_ENABLED ? "" : a) + t)
                    },
                    setSyncTrackingData: function(t, a, r, n) {
                        t.push(a.id + "-" + (n + Math.ceil(a.ttl / 60 / 24))), this.manageSyncsSize(t), e._setField(r, t.join("*"))
                    },
                    sendMessages: function() {
                        var e, t = this,
                            a = "",
                            n = encodeURIComponent;
                        this.regionChanged && (a = n("---destpub-clear-dextp---"), this.regionChanged = !1), this.messages.length ? r.POST_MESSAGE_ENABLED ? (e = a + n("---destpub-combined---") + this.messages.join("%01"), this.postMessage(e), this.messages = [], this.sendingMessages = !1) : (e = this.messages.shift(), this.postMessage(a + e), setTimeout(function() {
                            t.sendMessages()
                        }, this.messageSendingInterval)) : this.sendingMessages = !1
                    },
                    postMessage: function(e) {
                        n.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e)
                    },
                    receiveMessage: function(e) {
                        var t, a = /^---destpub-to-parent---/;
                        "string" == typeof e && a.test(e) && ("canSetThirdPartyCookies" === (t = e.replace(a, "").split("|"))[0] && (this.canSetThirdPartyCookies = "true" === t[1], this.receivedThirdPartyCookiesNotification = !0, this.requestToProcess()), this.messagesReceived.push(e))
                    },
                    processIDCallData: function(a) {
                        (null == this.url || a.subdomain && "nosubdomainreturned" === this.subdomain) && ("string" == typeof e._subdomain && e._subdomain.length ? this.subdomain = e._subdomain : this.subdomain = a.subdomain || "", this.url = this.getUrl()), a.ibs instanceof Array && a.ibs.length && (this.doAttachIframe = !0), this.readyToAttachIframe() && (e.idSyncAttachIframeOnWindowLoad ? (t.windowLoaded || "complete" === o.readyState || "loaded" === o.readyState) && this.attachIframe() : this.attachIframeASAP()), "function" == typeof e.idSyncIDCallResult ? e.idSyncIDCallResult(a) : this.requestToProcess(a), "function" == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(a)
                    },
                    canMakeSyncIDCall: function(t, a) {
                        return e._forceSyncIDCall || !t || a - t > r.DAYS_BETWEEN_SYNC_ID_CALLS
                    },
                    attachIframeASAP: function() {
                        function e() {
                            t.startedAttachingIframe || (o.body ? t.attachIframe() : setTimeout(e, 30))
                        }
                        var t = this;
                        e()
                    }
                }
            }
        }).call(this, "undefined" != typeof window && "undefined" != typeof global && window.global === global ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../utils/constants": 14,
        "../utils/utils": 18,
        "./crossDomain": 8
    }],
    11: [function(e, t) {
        function a(e) {
            for (var t = /^\d+$/, a = 0, r = e.length; a < r; a++)
                if (!t.test(e[a])) return !1;
            return !0
        }

        function r(e, t) {
            for (; e.length < t.length;) e.push("0");
            for (; t.length < e.length;) t.push("0")
        }

        function n(e, t) {
            for (var a = 0; a < e.length; a++) {
                var r = parseInt(e[a], 10),
                    n = parseInt(t[a], 10);
                if (r > n) return 1;
                if (n > r) return -1
            }
            return 0
        }

        function i(e, t) {
            if (e === t) return 0;
            var i = e.toString().split("."),
                o = t.toString().split(".");
            return a(i.concat(o)) ? (r(i, o), n(i, o)) : NaN
        }
        t.exports = {
            compare: i,
            isLessThan: function(e, t) {
                return i(e, t) < 0
            },
            areVersionsDifferent: function(e, t) {
                return 0 !== i(e, t)
            },
            isGreaterThan: function(e, t) {
                return i(e, t) > 0
            },
            isEqual: function(e, t) {
                return 0 === i(e, t)
            }
        }
    }, {}],
    12: [function(e, t) {
        t.exports = function(e, t) {
            function a(e) {
                return function(a) {
                    r[e] = a, ++n === i && t(r)
                }
            }
            var r = {},
                n = 0,
                i = Object.keys(e).length;
            Object.keys(e).forEach(function(t) {
                var r = e[t];
                if (r.fn) {
                    var n = r.args || [];
                    n.unshift(a(t)), r.fn.apply(r.context || null, n)
                }
            })
        }
    }, {}],
    13: [function(e, t) {
        function a() {
            return {
                callbacks: {},
                add: function(e, t) {
                    this.callbacks[e] = this.callbacks[e] || [];
                    var a = this.callbacks[e].push(t) - 1;
                    return function() {
                        this.callbacks[e].splice(a, 1)
                    }
                },
                execute: function(e, t) {
                    if (this.callbacks[e]) {
                        t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                        try {
                            for (; this.callbacks[e].length;) {
                                var a = this.callbacks[e].shift();
                                "function" == typeof a ? a.apply(null, t) : a instanceof Array && a[1].apply(a[0], t)
                            }
                            delete this.callbacks[e]
                        } catch (e) {}
                    }
                },
                executeAll: function(e, t) {
                    (t || e && !r.isObjectEmpty(e)) && Object.keys(this.callbacks).forEach(function(t) {
                        var a = void 0 !== e[t] ? e[t] : "";
                        this.execute(t, a)
                    }, this)
                },
                hasCallbacks: function() {
                    return Boolean(Object.keys(this.callbacks).length)
                }
            }
        }
        var r = e("./utils");
        t.exports = a
    }, {
        "./utils": 18
    }],
    14: [function(e, t) {
        (function(e) {
            t.exports = {
                POST_MESSAGE_ENABLED: !!e.postMessage,
                DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                MILLIS_PER_DAY: 864e5,
                ADOBE_MC: "adobe_mc",
                ADOBE_MC_SDID: "adobe_mc_sdid",
                VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                ADOBE_MC_TTL_IN_MIN: 5,
                VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/
            }
        }).call(this, "undefined" != typeof window && "undefined" != typeof global && window.global === global ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    15: [function(e, t, a) {
        a.MESSAGES = {
            HANDSHAKE: "HANDSHAKE",
            GETSTATE: "GETSTATE",
            PARENTSTATE: "PARENTSTATE"
        }, a.STATE_KEYS_MAP = {
            MCMID: "MCMID",
            MCAID: "MCAID",
            MCAAMB: "MCAAMB",
            MCAAMLH: "MCAAMLH",
            MCOPTOUT: "MCOPTOUT",
            CUSTOMERIDS: "CUSTOMERIDS"
        }, a.ASYNC_API_MAP = {
            MCMID: "getMarketingCloudVisitorID",
            MCAID: "getAnalyticsVisitorID",
            MCAAMB: "getAudienceManagerBlob",
            MCAAMLH: "getAudienceManagerLocationHint",
            MCOPTOUT: "getOptOut"
        }, a.SYNC_API_MAP = {
            CUSTOMERIDS: "getCustomerIDs"
        }, a.ALL_APIS = {
            MCMID: "getMarketingCloudVisitorID",
            MCAAMB: "getAudienceManagerBlob",
            MCAAMLH: "getAudienceManagerLocationHint",
            MCOPTOUT: "getOptOut",
            MCAID: "getAnalyticsVisitorID",
            CUSTOMERIDS: "getCustomerIDs"
        }, a.FIELDGROUP_TO_FIELD = {
            MC: "MCMID",
            A: "MCAID",
            AAM: "MCAAMB"
        }, a.FIELDS = {
            MCMID: "MCMID",
            MCOPTOUT: "MCOPTOUT",
            MCAID: "MCAID",
            MCAAMLH: "MCAAMLH",
            MCAAMB: "MCAAMB"
        }, a.AUTH_STATE = {
            UNKNOWN: 0,
            AUTHENTICATED: 1,
            LOGGED_OUT: 2
        }, a.OPT_OUT = {
            GLOBAL: "global"
        }
    }, {}],
    16: [function(e, t) {
        (function(e) {
            t.exports = function(t) {
                var a;
                if (!t && e.location && (t = e.location.hostname), a = t)
                    if (/^[0-9.]+$/.test(a)) a = "";
                    else {
                        var r = ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",
                            n = a.split("."),
                            i = n.length - 1,
                            o = i - 1;
                        if (i > 1 && n[i].length <= 2 && (2 === n[i - 1].length || r.indexOf("," + n[i] + ",") < 0) && o--, o > 0)
                            for (a = ""; i >= o;) a = n[i] + (a ? "." : "") + a, i--
                    } return a
            }
        }).call(this, "undefined" != typeof window && "undefined" != typeof global && window.global === global ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    17: [function() {
        Object.assign = Object.assign || function(e) {
            for (var t, a, r = 1; r < arguments.length; ++r)
                for (t in a = arguments[r]) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
            return e
        }
    }, {}],
    18: [function(e, t, a) {
        a.isObjectEmpty = function(e) {
            return e === Object(e) && 0 === Object.keys(e).length
        }, a.isValueEmpty = function(e) {
            return "" === e || a.isObjectEmpty(e)
        }, a.getIeVersion = function() {
            if (document.documentMode) return document.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = document.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e;
                t = null
            }
            return null
        }, a.encodeAndBuildRequest = function(e, t) {
            return e.map(encodeURIComponent).join(t)
        }
    }, {}],
    19: [function(e, t) {
        t.exports = function(e) {
            var t, a, r = "0123456789",
                n = "",
                i = "",
                o = 8,
                s = 10,
                c = 10;
            if (1 == e) {
                for (r += "ABCDEF", t = 0; 16 > t; t++) a = Math.floor(Math.random() * o), n += r.substring(a, a + 1), a = Math.floor(Math.random() * o), i += r.substring(a, a + 1), o = 16;
                return n + "-" + i
            }
            for (t = 0; 19 > t; t++) a = Math.floor(Math.random() * s), n += r.substring(a, a + 1), 0 === t && 9 == a ? s = 3 : (1 == t || 2 == t) && 10 != s && 2 > a ? s = 10 : 2 < t && (s = 10), a = Math.floor(Math.random() * c), i += r.substring(a, a + 1), 0 === t && 9 == a ? c = 3 : (1 == t || 2 == t) && 10 != c && 2 > a ? c = 10 : 2 < t && (c = 10);
            return n + i
        }
    }, {}]
}, {}, [1]),
// All code and conventions are protected by copyright
function(e, t, a) {
    function r() {
        k.addEventHandler(e, "orientationchange", r.orientationChange)
    }

    function n(t) {
        t = t || k.rules, this.rules = k.filter(t, function(e) {
            return "inview" === e.event
        }), this.elements = [], this.eventHandler = k.bind(this.track, this), k.addEventHandler(e, "scroll", this.eventHandler), k.addEventHandler(e, "load", this.eventHandler)
    }

    function o() {
        this.rules = k.filter(k.rules, function(e) {
            return "videoplayed" === e.event.substring(0, 11)
        }), this.eventHandler = k.bind(this.onUpdateTime, this)
    }

    function c() {
        k.getToolsByType("nielsen").length > 0 && k.domReady(k.bind(this.initialize, this))
    }

    function l(e) {
        this.delay = 250, this.FB = e, k.domReady(k.bind(function() {
            k.poll(k.bind(this.initialize, this), this.delay, 8)
        }, this))
    }

    function d() {
        this.defineEvents(), this.visibilityApiHasPriority = !0, t.addEventListener ? this.setVisibilityApiPriority(!1) : this.attachDetachOlderEventListeners(!0, t, "focusout");
        k.bindEvent("aftertoolinit", function() {
            k.fireEvent(k.visibility.isHidden() ? "tabblur" : "tabfocus")
        })
    }

    function u() {
        this.lastURL = k.URL(), this._fireIfURIChanged = k.bind(this.fireIfURIChanged, this), this._onPopState = k.bind(this.onPopState, this), this._onHashChange = k.bind(this.onHashChange, this), this._pushState = k.bind(this.pushState, this), this._replaceState = k.bind(this.replaceState, this), this.initialize()
    }

    function m() {
        var e = k.filter(k.rules, function(e) {
            return 0 === e.event.indexOf("dataelementchange")
        });
        this.dataElementsNames = k.map(e, function(e) {
            return e.event.match(/dataelementchange\((.*)\)/i)[1]
        }, this), this.initPolling()
    }

    function g() {
        this.rules = k.filter(k.rules, function(e) {
            return "elementexists" === e.event
        })
    }

    function p() {
        var e = this.eventRegex = /^hover\(([0-9]+)\)$/,
            t = this.rules = [];
        k.each(k.rules, function(a) {
            a.event.match(e) && t.push([Number(a.event.match(e)[1]), a.selector])
        })
    }

    function f(t) {
        k.domReady(k.bind(function() {
            this.twttr = t || e.twttr, this.initialize()
        }, this))
    }

    function h(e) {
        k.BaseTool.call(this, e), this.styleElements = {}, this.targetPageParamsStore = {}
    }

    function b(e) {
        k.BaseTool.call(this, e), this.defineListeners(), this.beaconMethod = "plainBeacon", this.adapt = new b.DataAdapters, this.dataProvider = new b.DataProvider.Aggregate
    }

    function A(e) {
        k.BaseTool.call(this, e), this.varBindings = {}, this.events = [], this.products = [], this.customSetupFuns = []
    }

    function v() {
        k.BaseTool.call(this), this.asyncScriptCallbackQueue = [], this.argsForBlockingScripts = []
    }

    function N(e) {
        k.BaseTool.call(this, e), this.name = e.name || "Basic"
    }

    function y(e) {
        k.BaseTool.call(this, e), this.name = e.name || "VisitorID", this.initialize()
    }

    function E(e) {
        k.BaseTool.call(this, e)
    }

    function M(e) {
        k.BaseTool.call(this, e)
    }
    var T, S, w, L = Object.prototype.toString,
        C = e._satellite && e._satellite.override,
        k = {
            initialized: !1,
            $data: function(e, t, r) {
                if (e) {
                    var n = "__satellite__",
                        i = k.dataCache,
                        o = e[n];
                    o || (o = e[n] = k.uuid++);
                    var s = i[o];
                    if (s || (s = i[o] = {}), r === a) return s[t];
                    s[t] = r
                }
            },
            uuid: 1,
            dataCache: {},
            keys: function(e) {
                var t = [];
                for (var a in e) e.hasOwnProperty(a) && t.push(a);
                return t
            },
            values: function(e) {
                var t = [];
                for (var a in e) e.hasOwnProperty(a) && t.push(e[a]);
                return t
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === L.apply(e)
            },
            isObject: function(e) {
                return null != e && !k.isArray(e) && "object" == typeof e
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "[object Number]" === L.apply(e) && !k.isNaN(e)
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
            each: function(e, t, a) {
                for (var r = 0, n = e.length; r < n; r++) t.call(a, e[r], r, e)
            },
            map: function(e, t, a) {
                for (var r = [], n = 0, i = e.length; n < i; n++) r.push(t.call(a, e[n], n, e));
                return r
            },
            filter: function(e, t, a) {
                for (var r = [], n = 0, i = e.length; n < i; n++) {
                    var o = e[n];
                    t.call(a, o, n, e) && r.push(o)
                }
                return r
            },
            any: function(e, t, a) {
                for (var r = 0, n = e.length; r < n; r++) {
                    var i = e[r];
                    if (t.call(a, i, r, e)) return !0
                }
                return !1
            },
            every: function(e, t, a) {
                for (var r = !0, n = 0, i = e.length; n < i; n++) {
                    var o = e[n];
                    r = r && t.call(a, o, n, e)
                }
                return r
            },
            contains: function(e, t) {
                return -1 !== k.indexOf(e, t)
            },
            indexOf: function(e, t) {
                if (e.indexOf) return e.indexOf(t);
                for (var a = e.length; a--;)
                    if (t === e[a]) return a;
                return -1
            },
            find: function(e, t, a) {
                if (!e) return null;
                for (var r = 0, n = e.length; r < n; r++) {
                    var i = e[r];
                    if (t.call(a, i, r, e)) return i
                }
                return null
            },
            textMatch: function(e, t) {
                if (null == t) throw new Error("Illegal Argument: Pattern is not present");
                return null != e && ("string" == typeof t ? e === t : t instanceof RegExp && t.test(e))
            },
            stringify: function(e, t) {
                if (t = t || [], k.isObject(e)) {
                    if (k.contains(t, e)) return "<Cycle>";
                    t.push(e)
                }
                if (k.isArray(e)) return "[" + k.map(e, function(e) {
                    return k.stringify(e, t)
                }).join(",") + "]";
                if (k.isString(e)) return '"' + String(e) + '"';
                if (k.isObject(e)) {
                    var a = [];
                    for (var r in e) e.hasOwnProperty(r) && a.push(r + ": " + k.stringify(e[r], t));
                    return "{" + a.join(", ") + "}"
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
                var a = null;
                return function() {
                    var r = this,
                        n = arguments;
                    clearTimeout(a), a = setTimeout(function() {
                        e.apply(r, n)
                    }, t)
                }
            },
            domReady: function(e) {
                function a(e) {
                    for (m = 1; e = n.shift();) e()
                }
                var r, n = [],
                    i = !1,
                    o = t,
                    s = o.documentElement,
                    c = s.doScroll,
                    l = "DOMContentLoaded",
                    d = "addEventListener",
                    u = "onreadystatechange",
                    m = /^loade|^c/.test(o.readyState);
                return o[d] && o[d](l, r = function() {
                    o.removeEventListener(l, r, i), a()
                }, i), c && o.attachEvent(u, r = function() {
                    /^c/.test(o.readyState) && (o.detachEvent(u, r), a())
                }), e = c ? function(t) {
                    self != top ? m ? t() : n.push(t) : function() {
                        try {
                            s.doScroll("left")
                        } catch (a) {
                            return setTimeout(function() {
                                e(t)
                            }, 50)
                        }
                        t()
                    }()
                } : function(e) {
                    m ? e() : n.push(e)
                }
            }(),
            loadScript: function(e, a) {
                var r = t.createElement("script");
                k.scriptOnLoad(e, r, a), r.src = e, t.getElementsByTagName("head")[0].appendChild(r)
            },
            scriptOnLoad: function(e, t, a) {
                function r(e) {
                    e && k.logError(e), a && a(e)
                }
                "onload" in t ? (t.onload = function() {
                    r()
                }, t.onerror = function() {
                    r(new Error("Failed to load script " + e))
                }) : "readyState" in t && (t.onreadystatechange = function() {
                    var e = t.readyState;
                    "loaded" !== e && "complete" !== e || (t.onreadystatechange = null, r())
                })
            },
            loadScriptOnce: function(e, t) {
                k.loadedScriptRegistry[e] || k.loadScript(e, function(a) {
                    a || (k.loadedScriptRegistry[e] = !0), t && t(a)
                })
            },
            loadedScriptRegistry: {},
            loadScriptSync: function(e) {
                t.write ? k.domReadyFired ? k.notify('Cannot load sync the "' + e + '" script after DOM Ready.', 1) : (e.indexOf('"') > -1 && (e = encodeURI(e)), t.write('<script src="' + e + '"></script>')) : k.notify('Cannot load sync the "' + e + '" script because "document.write" is not available', 1)
            },
            pushAsyncScript: function(e) {
                k.tools["default"].pushAsyncScript(e)
            },
            pushBlockingScript: function(e) {
                k.tools["default"].pushBlockingScript(e)
            },
            addEventHandler: e.addEventListener ? function(e, t, a) {
                e.addEventListener(t, a, !1)
            } : function(e, t, a) {
                e.attachEvent("on" + t, a)
            },
            removeEventHandler: e.removeEventListener ? function(e, t, a) {
                e.removeEventListener(t, a, !1)
            } : function(e, t, a) {
                e.detachEvent("on" + t, a)
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
            matchesCss: function(a) {
                function r(e, t) {
                    var a = t.tagName;
                    return !!a && e.toLowerCase() === a.toLowerCase()
                }
                var n = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.oMatchesSelector || a.msMatchesSelector;
                return n ? function(a, r) {
                    if (r === t || r === e) return !1;
                    try {
                        return n.call(r, a)
                    } catch (i) {
                        return !1
                    }
                } : a.querySelectorAll ? function(e, t) {
                    if (!t.parentNode) return !1;
                    if (e.match(/^[a-z]+$/i)) return r(e, t);
                    try {
                        for (var a = t.parentNode.querySelectorAll(e), n = a.length; n--;)
                            if (a[n] === t) return !0
                    } catch (i) {}
                    return !1
                } : function(e, t) {
                    if (e.match(/^[a-z]+$/i)) return r(e, t);
                    try {
                        return k.Sizzle.matches(e, [t]).length > 0
                    } catch (a) {
                        return !1
                    }
                }
            }(t.documentElement),
            cssQuery: (T = t, T.querySelectorAll ? function(e, t) {
                var a;
                try {
                    a = T.querySelectorAll(e)
                } catch (r) {
                    a = []
                }
                t(a)
            } : function(e, t) {
                if (k.Sizzle) {
                    var a;
                    try {
                        a = k.Sizzle(e)
                    } catch (r) {
                        a = []
                    }
                    t(a)
                } else k.sizzleQueue.push([e, t])
            }),
            hasAttr: function(e, t) {
                return e.hasAttribute ? e.hasAttribute(t) : e[t] !== a
            },
            inherit: function(e, t) {
                var a = function() {};
                a.prototype = t.prototype, e.prototype = new a, e.prototype.constructor = e
            },
            extend: function(e, t) {
                for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
            },
            toArray: function() {
                try {
                    var e = Array.prototype.slice;
                    return e.call(t.documentElement.childNodes, 0)[0].nodeType,
                        function(t) {
                            return e.call(t, 0)
                        }
                } catch (a) {
                    return function(e) {
                        for (var t = [], a = 0, r = e.length; a < r; a++) t.push(e[a]);
                        return t
                    }
                }
            }(),
            equalsIgnoreCase: function(e, t) {
                return null == e ? null == t : null != t && String(e).toLowerCase() === String(t).toLowerCase()
            },
            poll: function(e, t, a) {
                function r() {
                    k.isNumber(a) && n++ >= a || e() || setTimeout(r, t)
                }
                var n = 0;
                t = t || 1e3, r()
            },
            escapeForHtml: function(e) {
                return e ? String(e).replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#x27;").replace(/\//g, "&#x2F;") : e
            }
        };
    k.availableTools = {}, k.availableEventEmitters = [], k.fireOnceEvents = ["condition", "elementexists"], k.initEventEmitters = function() {
        k.eventEmitters = k.map(k.availableEventEmitters, function(e) {
            return new e
        })
    }, k.eventEmitterBackgroundTasks = function() {
        k.each(k.eventEmitters, function(e) {
            "backgroundTasks" in e && e.backgroundTasks()
        })
    }, k.initTools = function(e) {
        var t = {
                "default": new v
            },
            a = k.settings.euCookieName || "sat_track";
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var n, i, o;
                if ((n = e[r]).euCookie)
                    if ("true" !== k.readCookie(a)) continue;
                if (!(i = k.availableTools[n.engine])) {
                    var s = [];
                    for (var c in k.availableTools) k.availableTools.hasOwnProperty(c) && s.push(c);
                    throw new Error("No tool engine named " + n.engine + ", available: " + s.join(",") + ".")
                }(o = new i(n)).id = r, t[r] = o
            } return t
    }, k.preprocessArguments = function(e, t, a, r, n) {
        function i(e) {
            return r && k.isString(e) ? e.toLowerCase() : e
        }

        function o(e) {
            var c = {};
            for (var l in e)
                if (e.hasOwnProperty(l)) {
                    var d = e[l];
                    k.isObject(d) ? c[l] = o(d) : k.isArray(d) ? c[l] = s(d, r) : c[l] = i(k.replace(d, t, a, n))
                } return c
        }

        function s(e) {
            for (var r = [], n = 0, s = e.length; n < s; n++) {
                var c = e[n];
                k.isString(c) ? c = i(k.replace(c, t, a)) : c && c.constructor === Object && (c = o(c)), r.push(c)
            }
            return r
        }
        return e ? s(e, r) : e
    }, k.execute = function(e, t, a, r) {
        function n(n) {
            var i = r[n || "default"];
            if (i) try {
                i.triggerCommand(e, t, a)
            } catch (o) {
                k.logError(o)
            }
        }
        if (!_satellite.settings.hideActivity)
            if (r = r || k.tools, e.engine) {
                var i = e.engine;
                for (var o in r)
                    if (r.hasOwnProperty(o)) {
                        var s = r[o];
                        s.settings && s.settings.engine === i && n(o)
                    }
            } else e.tool instanceof Array ? k.each(e.tool, function(e) {
                n(e)
            }) : n(e.tool)
    }, k.Logger = {
        outputEnabled: !1,
        messages: [],
        keepLimit: 100,
        flushed: !1,
        LEVELS: [null, null, "log", "info", "warn", "error"],
        message: function(e, t) {
            var a = this.LEVELS[t] || "log";
            this.messages.push([a, e]), this.messages.length > this.keepLimit && this.messages.shift(), this.outputEnabled && this.echo(a, e)
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
        echo: function(t, a) {
            e.console && e.console[t]("SATELLITE: " + a)
        },
        flush: function() {
            this.flushed || (k.each(this.messages, function(e) {
                !0 !== e[2] && (this.echo(e[0], e[1]), e[2] = !0)
            }, this), this.flushed = !0)
        }
    }, k.notify = k.bind(k.Logger.message, k.Logger), k.cleanText = function(e) {
        return null == e ? null : k.trim(e).replace(/\s+/g, " ")
    }, k.cleanText.legacy = function(e) {
        return null == e ? null : k.trim(e).replace(/\s{2,}/g, " ").replace(/[^\000-\177]*/g, "")
    }, k.text = function(e) {
        return e.textContent || e.innerText
    }, k.specialProperties = {
        text: k.text,
        cleanText: function(e) {
            return k.cleanText(k.text(e))
        }
    }, k.getObjectProperty = function(e, t, r) {
        for (var n, i = t.split("."), o = e, s = k.specialProperties, c = 0, l = i.length; c < l; c++) {
            if (null == o) return a;
            var d = i[c];
            if (r && "@" === d.charAt(0)) o = s[d.slice(1)](o);
            else if (o.getAttribute && (n = d.match(/^getAttribute\((.+)\)$/))) {
                var u = n[1];
                o = o.getAttribute(u)
            } else o = o[d]
        }
        return o
    }, k.getToolsByType = function(e) {
        if (!e) throw new Error("Tool type is missing");
        var t = [];
        for (var a in k.tools)
            if (k.tools.hasOwnProperty(a)) {
                var r = k.tools[a];
                r.settings && r.settings.engine === e && t.push(r)
            } return t
    }, k.setVar = function() {
        var e = k.data.customVars;
        if (null == e && (k.data.customVars = {}, e = k.data.customVars), "string" == typeof arguments[0]) e[arguments[0]] = arguments[1];
        else if (arguments[0]) {
            var t = arguments[0];
            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
        }
    }, k.dataElementSafe = function(e, t) {
        if (arguments.length > 2) {
            var a = arguments[2];
            "pageview" === t ? k.dataElementSafe.pageviewCache[e] = a : "session" === t ? k.setCookie("_sdsat_" + e, a) : "visitor" === t && k.setCookie("_sdsat_" + e, a, 730)
        } else {
            if ("pageview" === t) return k.dataElementSafe.pageviewCache[e];
            if ("session" === t || "visitor" === t) return k.readCookie("_sdsat_" + e)
        }
    }, k.dataElementSafe.pageviewCache = {}, k.realGetDataElement = function(t) {
        var a;
        return t.selector ? k.hasSelector && k.cssQuery(t.selector, function(e) {
            if (e.length > 0) {
                var r = e[0];
                "text" === t.property ? a = r.innerText || r.textContent : t.property in r ? a = r[t.property] : k.hasAttr(r, t.property) && (a = r.getAttribute(t.property))
            }
        }) : t.queryParam ? a = t.ignoreCase ? k.getQueryParamCaseInsensitive(t.queryParam) : k.getQueryParam(t.queryParam) : t.cookie ? a = k.readCookie(t.cookie) : t.jsVariable ? a = k.getObjectProperty(e, t.jsVariable) : t.customJS ? a = t.customJS() : t.contextHub && (a = t.contextHub()), k.isString(a) && t.cleanText && (a = k.cleanText(a)), a
    }, k.getDataElement = function(e, t, r) {
        if (null == (r = r || k.dataElements[e])) return k.settings.undefinedVarsReturnEmpty ? "" : null;
        var n = k.realGetDataElement(r);
        return n === a && r.storeLength ? n = k.dataElementSafe(e, r.storeLength) : n !== a && r.storeLength && k.dataElementSafe(e, r.storeLength, n), n || t || (n = r["default"] || ""), k.isString(n) && r.forceLowerCase && (n = n.toLowerCase()), n
    }, k.getVar = function(r, n, i) {
        var o, s, c = k.data.customVars,
            l = i ? i.target || i.srcElement : null,
            d = {
                uri: k.URI(),
                protocol: t.location.protocol,
                hostname: t.location.hostname
            };
        if (k.dataElements && r in k.dataElements) return k.getDataElement(r);
        if ((s = d[r.toLowerCase()]) === a)
            if ("this." === r.substring(0, 5)) r = r.slice(5), s = k.getObjectProperty(n, r, !0);
            else if ("event." === r.substring(0, 6)) r = r.slice(6), s = k.getObjectProperty(i, r);
        else if ("target." === r.substring(0, 7)) r = r.slice(7), s = k.getObjectProperty(l, r);
        else if ("window." === r.substring(0, 7)) r = r.slice(7), s = k.getObjectProperty(e, r);
        else if ("param." === r.substring(0, 6)) r = r.slice(6), s = k.getQueryParam(r);
        else if (o = r.match(/^rand([0-9]+)$/)) {
            var u = Number(o[1]),
                m = (Math.random() * (Math.pow(10, u) - 1)).toFixed(0);
            s = Array(u - m.length + 1).join("0") + m
        } else s = k.getObjectProperty(c, r);
        return s
    }, k.getVars = function(e, t, a) {
        var r = {};
        return k.each(e, function(e) {
            r[e] = k.getVar(e, t, a)
        }), r
    }, k.replace = function(e, t, a, r) {
        return "string" != typeof e ? e : e.replace(/%(.*?)%/g, function(e, n) {
            var i = k.getVar(n, t, a);
            return null == i ? k.settings.undefinedVarsReturnEmpty ? "" : e : r ? k.escapeForHtml(i) : i
        })
    }, k.escapeHtmlParams = function(e) {
        return e.escapeHtml = !0, e
    }, k.searchVariables = function(e, t, a) {
        if (!e || 0 === e.length) return "";
        for (var r = [], n = 0, i = e.length; n < i; n++) {
            var o = e[n],
                s = k.getVar(o, t, a);
            r.push(o + "=" + escape(s))
        }
        return "?" + r.join("&")
    }, k.fireRule = function(e, t, a) {
        var r = e.trigger;
        if (r) {
            for (var n = 0, i = r.length; n < i; n++) {
                var o = r[n];
                k.execute(o, t, a)
            }
            k.contains(k.fireOnceEvents, e.event) && (e.expired = !0)
        }
    }, k.isLinked = function(e) {
        for (var t = e; t; t = t.parentNode)
            if (k.isLinkTag(t)) return !0;
        return !1
    }, k.firePageLoadEvent = function(e) {
        for (var a = t.location, r = {
                type: e,
                target: a
            }, n = k.pageLoadRules, i = k.evtHandlers[r.type], o = n.length; o--;) {
            var s = n[o];
            k.ruleMatches(s, r, a) && (k.notify('Rule "' + s.name + '" fired.', 1), k.fireRule(s, a, r))
        }
        for (var c in k.tools)
            if (k.tools.hasOwnProperty(c)) {
                var l = k.tools[c];
                l.endPLPhase && l.endPLPhase(e)
            } i && k.each(i, function(e) {
            e(r)
        })
    }, k.track = function(e) {
        e = e.replace(/^\s*/, "").replace(/\s*$/, "");
        for (var t = 0; t < k.directCallRules.length; t++) {
            var a = k.directCallRules[t];
            if (a.name === e) return k.notify('Direct call Rule "' + e + '" fired.', 1), void k.fireRule(a, location, {
                type: e
            })
        }
        k.notify('Direct call Rule "' + e + '" not found.', 1)
    }, k.basePath = function() {
        return k.data.host ? ("https:" === t.location.protocol ? "https://" + k.data.host.https : "http://" + k.data.host.http) + "/" : this.settings.basePath
    }, k.setLocation = function(t) {
        e.location = t
    }, k.parseQueryParams = function(e) {
        var t = function(e) {
            var t = e;
            try {
                t = decodeURIComponent(e)
            } catch (a) {}
            return t
        };
        if ("" === e || !1 === k.isString(e)) return {};
        0 === e.indexOf("?") && (e = e.substring(1));
        var a = {},
            r = e.split("&");
        return k.each(r, function(e) {
            (e = e.split("="))[1] && (a[t(e[0])] = t(e[1]))
        }), a
    }, k.getCaseSensitivityQueryParamsMap = function(e) {
        var t = k.parseQueryParams(e),
            a = {};
        for (var r in t) t.hasOwnProperty(r) && (a[r.toLowerCase()] = t[r]);
        return {
            normal: t,
            caseInsensitive: a
        }
    }, k.updateQueryParams = function() {
        k.QueryParams = k.getCaseSensitivityQueryParamsMap(e.location.search)
    }, k.updateQueryParams(), k.getQueryParam = function(e) {
        return k.QueryParams.normal[e]
    }, k.getQueryParamCaseInsensitive = function(e) {
        return k.QueryParams.caseInsensitive[e.toLowerCase()]
    }, k.encodeObjectToURI = function(e) {
        if (!1 === k.isObject(e)) return "";
        var t = [];
        for (var a in e) e.hasOwnProperty(a) && t.push(encodeURIComponent(a) + "=" + encodeURIComponent(e[a]));
        return t.join("&")
    }, k.readCookie = function(e) {
        for (var r = e + "=", n = t.cookie.split(";"), i = 0; i < n.length; i++) {
            for (var o = n[i];
                " " == o.charAt(0);) o = o.substring(1, o.length);
            if (0 === o.indexOf(r)) return o.substring(r.length, o.length)
        }
        return a
    }, k.setCookie = function(e, a, r) {
        var n;
        if (r) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * r * 60 * 60 * 1e3), n = "; expires=" + i.toGMTString()
        } else n = "";
        t.cookie = e + "=" + a + n + "; path=/"
    }, k.removeCookie = function(e) {
        k.setCookie(e, "", -1)
    }, k.getElementProperty = function(e, t) {
        if ("@" === t.charAt(0)) {
            var r = k.specialProperties[t.substring(1)];
            if (r) return r(e)
        }
        return "innerText" === t ? k.text(e) : t in e ? e[t] : e.getAttribute ? e.getAttribute(t) : a
    }, k.propertiesMatch = function(e, t) {
        if (e)
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var r = e[a],
                        n = k.getElementProperty(t, a);
                    if ("string" == typeof r && r !== n) return !1;
                    if (r instanceof RegExp && !r.test(n)) return !1
                } return !0
    }, k.isRightClick = function(e) {
        var t;
        return e.which ? t = 3 == e.which : e.button && (t = 2 == e.button), t
    }, k.ruleMatches = function(e, t, a, r) {
        var n = e.condition,
            i = e.conditions,
            o = e.property,
            s = t.type,
            c = e.value,
            l = t.target || t.srcElement,
            d = a === l;
        if (e.event !== s && ("custom" !== e.event || e.customEvent !== s)) return !1;
        if (!k.ruleInScope(e)) return !1;
        if ("click" === e.event && k.isRightClick(t)) return !1;
        if (e.isDefault && r > 0) return !1;
        if (e.expired) return !1;
        if ("inview" === s && t.inviewDelay !== e.inviewDelay) return !1;
        if (!d && (!1 === e.bubbleFireIfParent || 0 !== r && !1 === e.bubbleFireIfChildFired)) return !1;
        if (e.selector && !k.matchesCss(e.selector, a)) return !1;
        if (!k.propertiesMatch(o, a)) return !1;
        if (null != c)
            if ("string" == typeof c) {
                if (c !== a.value) return !1
            } else if (!c.test(a.value)) return !1;
        if (n) try {
            if (!n.call(a, t, l)) return k.notify('Condition for rule "' + e.name + '" not met.', 1), !1
        } catch (m) {
            return k.notify('Condition for rule "' + e.name + '" not met. Error: ' + m.message, 1), !1
        }
        if (i) {
            var u = k.find(i, function(r) {
                try {
                    return !r.call(a, t, l)
                } catch (m) {
                    return k.notify('Condition for rule "' + e.name + '" not met. Error: ' + m.message, 1), !0
                }
            });
            if (u) return k.notify("Condition " + u.toString() + ' for rule "' + e.name + '" not met.', 1), !1
        }
        return !0
    }, k.evtHandlers = {}, k.bindEvent = function(e, t) {
        var a = k.evtHandlers;
        a[e] || (a[e] = []), a[e].push(t)
    }, k.whenEvent = k.bindEvent, k.unbindEvent = function(e, t) {
        var a = k.evtHandlers;
        if (a[e]) {
            var r = k.indexOf(a[e], t);
            a[e].splice(r, 1)
        }
    }, k.bindEventOnce = function(e, t) {
        var a = function() {
            k.unbindEvent(e, a), t.apply(null, arguments)
        };
        k.bindEvent(e, a)
    }, k.isVMLPoisoned = function(e) {
        if (!e) return !1;
        try {
            e.nodeName
        } catch (t) {
            if ("Attribute only valid on v:image" === t.message) return !0
        }
        return !1
    }, k.handleEvent = function(e) {
        if (!k.$data(e, "eventProcessed")) {
            var t = e.type.toLowerCase(),
                a = e.target || e.srcElement,
                r = 0,
                n = k.rules,
                i = (k.tools, k.evtHandlers[e.type]);
            if (k.isVMLPoisoned(a)) k.notify("detected " + t + " on poisoned VML element, skipping.", 1);
            else {
                i && k.each(i, function(t) {
                    t(e)
                }), a && a.nodeName ? k.notify("detected " + t + " on " + a.nodeName, 1) : k.notify("detected " + t, 1);
                for (var o = a; o; o = o.parentNode) {
                    var s = !1;
                    if (k.each(n, function(t) {
                            k.ruleMatches(t, e, o, r) && (k.notify('Rule "' + t.name + '" fired.', 1), k.fireRule(t, o, e), r++, t.bubbleStop && (s = !0))
                        }), s) break
                }
                k.$data(e, "eventProcessed", !0)
            }
        }
    }, k.onEvent = t.querySelectorAll ? function(e) {
        k.handleEvent(e)
    } : (S = [], (w = function(e) {
        e.selector ? S.push(e) : k.handleEvent(e)
    }).pendingEvents = S, w), k.fireEvent = function(e, t) {
        k.onEvent({
            type: e,
            target: t
        })
    }, k.registerEvents = function(e, t) {
        for (var a = t.length - 1; a >= 0; a--) {
            var r = t[a];
            k.$data(e, r + ".tracked") || (k.addEventHandler(e, r, k.onEvent), k.$data(e, r + ".tracked", !0))
        }
    }, k.registerEventsForTags = function(e, a) {
        for (var r = e.length - 1; r >= 0; r--)
            for (var n = e[r], i = t.getElementsByTagName(n), o = i.length - 1; o >= 0; o--) k.registerEvents(i[o], a)
    }, k.setListeners = function() {
        var e = ["click", "submit"];
        k.each(k.rules, function(t) {
            "custom" === t.event && t.hasOwnProperty("customEvent") && !k.contains(e, t.customEvent) && e.push(t.customEvent)
        }), k.registerEvents(t, e)
    }, k.getUniqueRuleEvents = function() {
        return k._uniqueRuleEvents || (k._uniqueRuleEvents = [], k.each(k.rules, function(e) {
            -1 === k.indexOf(k._uniqueRuleEvents, e.event) && k._uniqueRuleEvents.push(e.event)
        })), k._uniqueRuleEvents
    }, k.setFormListeners = function() {
        if (!k._relevantFormEvents) {
            var e = ["change", "focus", "blur", "keypress"];
            k._relevantFormEvents = k.filter(k.getUniqueRuleEvents(), function(t) {
                return -1 !== k.indexOf(e, t)
            })
        }
        k._relevantFormEvents.length && k.registerEventsForTags(["input", "select", "textarea", "button"], k._relevantFormEvents)
    }, k.setVideoListeners = function() {
        if (!k._relevantVideoEvents) {
            var e = ["play", "pause", "ended", "volumechange", "stalled", "loadeddata"];
            k._relevantVideoEvents = k.filter(k.getUniqueRuleEvents(), function(t) {
                return -1 !== k.indexOf(e, t)
            })
        }
        k._relevantVideoEvents.length && k.registerEventsForTags(["video"], k._relevantVideoEvents)
    }, k.readStoredSetting = function(t) {
        try {
            return t = "sdsat_" + t, e.localStorage.getItem(t)
        } catch (a) {
            return k.notify("Cannot read stored setting from localStorage: " + a.message, 2), null
        }
    }, k.loadStoredSettings = function() {
        var e = k.readStoredSetting("debug"),
            t = k.readStoredSetting("hide_activity");
        e && (k.settings.notifications = "true" === e), t && (k.settings.hideActivity = "true" === t)
    }, k.isRuleActive = function(e, t) {
        function a(e, t) {
            return t = n(t, {
                hour: e[g](),
                minute: e[p]()
            }), Math.floor(Math.abs((e.getTime() - t.getTime()) / 864e5))
        }

        function r(e, t) {
            function a(e) {
                return 12 * e[u]() + e[m]()
            }
            return Math.abs(a(e) - a(t))
        }

        function n(e, t) {
            var a = new Date(e.getTime());
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var n = t[r];
                    switch (r) {
                        case "hour":
                            a[f](n);
                            break;
                        case "minute":
                            a[h](n);
                            break;
                        case "date":
                            a[b](n)
                    }
                } return a
        }

        function i(e, t) {
            return 60 * e[g]() + e[p]() > 60 * t[g]() + t[p]()
        }

        function o(e, t) {
            return 60 * e[g]() + e[p]() < 60 * t[g]() + t[p]()
        }
        var s = e.schedule;
        if (!s) return !0;
        var c = s.utc,
            l = c ? "getUTCDate" : "getDate",
            d = c ? "getUTCDay" : "getDay",
            u = c ? "getUTCFullYear" : "getFullYear",
            m = c ? "getUTCMonth" : "getMonth",
            g = c ? "getUTCHours" : "getHours",
            p = c ? "getUTCMinutes" : "getMinutes",
            f = c ? "setUTCHours" : "setHours",
            h = c ? "setUTCMinutes" : "setMinutes",
            b = c ? "setUTCDate" : "setDate";
        if (t = t || new Date, s.repeat) {
            if (i(s.start, t)) return !1;
            if (o(s.end, t)) return !1;
            if (t < s.start) return !1;
            if (s.endRepeat && t >= s.endRepeat) return !1;
            if ("daily" === s.repeat) {
                if (s.repeatEvery)
                    if (a(s.start, t) % s.repeatEvery != 0) return !1
            } else if ("weekly" === s.repeat) {
                if (s.days) {
                    if (!k.contains(s.days, t[d]())) return !1
                } else if (s.start[d]() !== t[d]()) return !1;
                if (s.repeatEvery)
                    if (a(s.start, t) % (7 * s.repeatEvery) != 0) return !1
            } else if ("monthly" === s.repeat) {
                if (s.repeatEvery)
                    if (r(s.start, t) % s.repeatEvery != 0) return !1;
                if (s.nthWeek && s.mthDay) {
                    if (s.mthDay !== t[d]()) return !1;
                    var A = Math.floor((t[l]() - t[d]() + 1) / 7);
                    if (s.nthWeek !== A) return !1
                } else if (s.start[l]() !== t[l]()) return !1
            } else if ("yearly" === s.repeat) {
                if (s.start[m]() !== t[m]()) return !1;
                if (s.start[l]() !== t[l]()) return !1;
                if (s.repeatEvery)
                    if (Math.abs(s.start[u]() - t[u]()) % s.repeatEvery != 0) return !1
            }
        } else {
            if (s.start > t) return !1;
            if (s.end < t) return !1
        }
        return !0
    }, k.isOutboundLink = function(e) {
        if (!e.getAttribute("href")) return !1;
        var t = e.hostname,
            a = (e.href, e.protocol);
        return ("http:" === a || "https:" === a) && (!k.any(k.settings.domainList, function(e) {
            return k.isSubdomainOf(t, e)
        }) && t !== location.hostname)
    }, k.isLinkerLink = function(e) {
        return !(!e.getAttribute || !e.getAttribute("href")) && (k.hasMultipleDomains() && e.hostname != location.hostname && !e.href.match(/^javascript/i) && !k.isOutboundLink(e))
    }, k.isSubdomainOf = function(e, t) {
        if (e === t) return !0;
        var a = e.length - t.length;
        return a > 0 && k.equalsIgnoreCase(e.substring(a), t)
    }, k.getVisitorId = function() {
        var e = k.getToolsByType("visitor_id");
        return 0 === e.length ? null : e[0].getInstance()
    }, k.URI = function() {
        var e = t.location.pathname + t.location.search;
        return k.settings.forceLowerCase && (e = e.toLowerCase()), e
    }, k.URL = function() {
        var e = t.location.href;
        return k.settings.forceLowerCase && (e = e.toLowerCase()), e
    }, k.filterRules = function() {
        function e(e) {
            return !!k.isRuleActive(e)
        }
        k.rules = k.filter(k.rules, e), k.pageLoadRules = k.filter(k.pageLoadRules, e)
    }, k.ruleInScope = function(e, a) {
        function r(e, t) {
            function a(e) {
                return t.match(e)
            }
            var r = e.include,
                i = e.exclude;
            if (r && n(r, t)) return !0;
            if (i) {
                if (k.isString(i) && i === t) return !0;
                if (k.isArray(i) && k.any(i, a)) return !0;
                if (k.isRegex(i) && a(i)) return !0
            }
            return !1
        }

        function n(e, t) {
            function a(e) {
                return t.match(e)
            }
            return !(!k.isString(e) || e === t) || (!(!k.isArray(e) || k.any(e, a)) || !(!k.isRegex(e) || a(e)))
        }
        a = a || t.location;
        var i = e.scope;
        if (!i) return !0;
        var o = i.URI,
            s = i.subdomains,
            c = i.domains,
            l = i.protocols,
            d = i.hashes;
        return (!o || !r(o, a.pathname + a.search)) && ((!s || !r(s, a.hostname)) && ((!c || !n(c, a.hostname)) && ((!l || !n(l, a.protocol)) && (!d || !r(d, a.hash)))))
    }, k.backgroundTasks = function() {
        new Date;
        k.setFormListeners(), k.setVideoListeners(), k.loadStoredSettings(), k.registerNewElementsForDynamicRules(), k.eventEmitterBackgroundTasks();
        new Date
    }, k.registerNewElementsForDynamicRules = function() {
        function e(t, a) {
            var r = e.cache[t];
            if (r) return a(r);
            k.cssQuery(t, function(r) {
                e.cache[t] = r, a(r)
            })
        }
        e.cache = {}, k.each(k.dynamicRules, function(t) {
            e(t.selector, function(e) {
                k.each(e, function(e) {
                    var a = "custom" === t.event ? t.customEvent : t.event;
                    k.$data(e, "dynamicRules.seen." + a) || (k.$data(e, "dynamicRules.seen." + a, !0), k.propertiesMatch(t.property, e) && k.registerEvents(e, [a]))
                })
            })
        })
    }, k.ensureCSSSelector = function() {
        t.querySelectorAll ? k.hasSelector = !0 : (k.loadingSizzle = !0, k.sizzleQueue = [], k.loadScript(k.basePath() + "selector.js", function() {
            if (k.Sizzle) {
                var e = k.onEvent.pendingEvents;
                k.each(e, function(e) {
                    k.handleEvent(e)
                }, this), k.onEvent = k.handleEvent, k.hasSelector = !0, delete k.loadingSizzle, k.each(k.sizzleQueue, function(e) {
                    k.cssQuery(e[0], e[1])
                }), delete k.sizzleQueue
            } else k.logError(new Error("Failed to load selector.js"))
        }))
    }, k.errors = [], k.logError = function(e) {
        k.errors.push(e), k.notify(e.name + " - " + e.message, 5)
    }, k.pageBottom = function() {
        k.initialized && (k.pageBottomFired = !0, k.firePageLoadEvent("pagebottom"))
    }, k.stagingLibraryOverride = function() {
        if ("true" === k.readStoredSetting("stagingLibrary")) {
            for (var e, a, r, n = t.getElementsByTagName("script"), i = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/, o = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/, s = 0, c = n.length; s < c && (!(r = n[s].getAttribute("src")) || (e || (e = r.match(i)), a || (a = r.match(o)), !a)); s++);
            if (e && !a) {
                var l = e[1] + "satelliteLib-" + e[2] + "-staging.js";
                if (t.write) t.write('<script src="' + l + '"></script>');
                else {
                    var d = t.createElement("script");
                    d.src = l, t.head.appendChild(d)
                }
                return !0
            }
        }
        return !1
    }, k.checkAsyncInclude = function() {
        e.satellite_asyncLoad && k.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
    }, k.hasMultipleDomains = function() {
        return !!k.settings.domainList && k.settings.domainList.length > 1
    }, k.handleOverrides = function() {
        if (C)
            for (var e in C) C.hasOwnProperty(e) && (k.data[e] = C[e])
    }, k.privacyManagerParams = function() {
        var e = {};
        k.extend(e, k.settings.privacyManagement);
        var t = [];
        for (var a in k.tools)
            if (k.tools.hasOwnProperty(a)) {
                var r = k.tools[a],
                    n = r.settings;
                if (!n) continue;
                "sc" === n.engine && t.push(r)
            } var i = k.filter(k.map(t, function(e) {
            return e.getTrackingServer()
        }), function(e) {
            return null != e
        });
        e.adobeAnalyticsTrackingServers = i;
        for (var o = ["bannerText", "headline", "introductoryText", "customCSS"], s = 0; s < o.length; s++) {
            var c = o[s],
                l = e[c];
            if (l)
                if ("text" === l.type) e[c] = l.value;
                else {
                    if ("data" !== l.type) throw new Error("Invalid type: " + l.type);
                    e[c] = k.getVar(l.value)
                }
        }
        return e
    }, k.prepareLoadPrivacyManager = function() {
        function t(e) {
            function t() {
                ++i === n.length && (a(), clearTimeout(o), e())
            }

            function a() {
                k.each(n, function(e) {
                    k.unbindEvent(e.id + ".load", t)
                })
            }

            function r() {
                a(), e()
            }
            var n = k.filter(k.values(k.tools), function(e) {
                return e.settings && "sc" === e.settings.engine
            });
            if (0 === n.length) return e();
            var i = 0;
            k.each(n, function(e) {
                k.bindEvent(e.id + ".load", t)
            });
            var o = setTimeout(r, 5e3)
        }
        k.addEventHandler(e, "load", function() {
            t(k.loadPrivacyManager)
        })
    }, k.loadPrivacyManager = function() {
        var e = k.basePath() + "privacy_manager.js";
        k.loadScript(e, function() {
            var e = k.privacyManager;
            e.configure(k.privacyManagerParams()), e.openIfRequired()
        })
    }, k.init = function(t) {
        if (!k.stagingLibraryOverride()) {
            k.configurationSettings = t;
            var r = t.tools;
            for (var n in delete t.tools, t) t.hasOwnProperty(n) && (k[n] = t[n]);
            k.data.customVars === a && (k.data.customVars = {}), k.data.queryParams = k.QueryParams.normal, k.handleOverrides(), k.detectBrowserInfo(), k.trackVisitorInfo && k.trackVisitorInfo(), k.loadStoredSettings(), k.Logger.setOutputState(k.settings.notifications), k.checkAsyncInclude(), k.ensureCSSSelector(), k.filterRules(), k.dynamicRules = k.filter(k.rules, function(e) {
                return e.eventHandlerOnElement
            }), k.tools = k.initTools(r), k.initEventEmitters(), k.firePageLoadEvent("aftertoolinit"), k.settings.privacyManagement && k.prepareLoadPrivacyManager(), k.hasSelector && k.domReady(k.eventEmitterBackgroundTasks), k.setListeners(), k.domReady(function() {
                k.poll(function() {
                    k.backgroundTasks()
                }, k.settings.recheckEvery || 3e3)
            }), k.domReady(function() {
                k.domReadyFired = !0, k.pageBottomFired || k.pageBottom(), k.firePageLoadEvent("domready")
            }), k.addEventHandler(e, "load", function() {
                k.firePageLoadEvent("windowload")
            }), k.firePageLoadEvent("pagetop"), k.initialized = !0
        }
    }, k.pageLoadPhases = ["aftertoolinit", "pagetop", "pagebottom", "domready", "windowload"], k.loadEventBefore = function(e, t) {
        return k.indexOf(k.pageLoadPhases, e) <= k.indexOf(k.pageLoadPhases, t)
    }, k.flushPendingCalls = function(e) {
        e.pending && (k.each(e.pending, function(t) {
            var a = t[0],
                r = t[1],
                n = t[2],
                i = t[3];
            a in e ? e[a].apply(e, [r, n].concat(i)) : e.emit ? e.emit(a, r, n, i) : k.notify("Failed to trigger " + a + " for tool " + e.id, 1)
        }), delete e.pending)
    }, k.setDebug = function(t) {
        try {
            e.localStorage.setItem("sdsat_debug", t)
        } catch (a) {
            k.notify("Cannot set debug mode: " + a.message, 2)
        }
    }, k.getUserAgent = function() {
        return navigator.userAgent
    }, k.detectBrowserInfo = function() {
        function e(e) {
            return function(t) {
                for (var a in e) {
                    if (e.hasOwnProperty(a))
                        if (e[a].test(t)) return a
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
            a = e({
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
            r = e({
                Nokia: /Symbian|SymbOS|Maemo/,
                "Windows Phone": /Windows Phone/,
                Blackberry: /BlackBerry|BB10/,
                Android: /Android/,
                iPad: /iPad/,
                iPod: /iPod/,
                iPhone: /iPhone/,
                Desktop: /.*/
            }),
            n = k.getUserAgent();
        k.browserInfo = {
            browser: t(n),
            os: a(n),
            deviceType: r(n)
        }
    }, k.isHttps = function() {
        return "https:" == t.location.protocol
    }, k.BaseTool = function(e) {
        this.settings = e || {}, this.forceLowerCase = k.settings.forceLowerCase, "forceLowerCase" in this.settings && (this.forceLowerCase = this.settings.forceLowerCase)
    }, k.BaseTool.prototype = {
        triggerCommand: function(e, t, a) {
            var r = this.settings || {};
            if (this.initialize && this.isQueueAvailable() && this.isQueueable(e) && a && k.loadEventBefore(a.type, r.loadOn)) this.queueCommand(e, t, a);
            else {
                var n = e.command,
                    i = this["$" + n],
                    o = !!i && i.escapeHtml,
                    s = k.preprocessArguments(e.arguments, t, a, this.forceLowerCase, o);
                i ? i.apply(this, [t, a].concat(s)) : this.$missing$ ? this.$missing$(n, t, a, s) : k.notify("Failed to trigger " + n + " for tool " + this.id, 1)
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
            this.pending && (k.each(this.pending, function(e) {
                this.triggerCommand.apply(this, e)
            }, this), this.pending = [])
        },
        queueCommand: function(e, t, a) {
            this.pending || (this.pending = []), this.pending.push([e, t, a])
        },
        $cancelToolInit: function() {
            this._cancelToolInit = !0
        }
    }, e._satellite = k, k.visibility = {
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
            for (var a = 0; a < e.length; a++)
                if (e[a] + "Hidden" in t) return e[a] + "Hidden";
            return null
        },
        getVisibilityEvent: function() {
            var e = this.getHiddenProperty();
            return e ? e.replace(/[H|h]idden/, "") + "visibilitychange" : null
        }
    }, k.ecommerce = {
        addItem: function() {
            var e = [].slice.call(arguments);
            k.onEvent({
                type: "ecommerce.additem",
                target: e
            })
        },
        addTrans: function() {
            var e = [].slice.call(arguments);
            k.data.saleData.sale = {
                orderId: e[0],
                revenue: e[2]
            }, k.onEvent({
                type: "ecommerce.addtrans",
                target: e
            })
        },
        trackTrans: function() {
            k.onEvent({
                type: "ecommerce.tracktrans",
                target: []
            })
        }
    }, r.orientationChange = function(t) {
        var a = 0 === e.orientation ? "portrait" : "landscape";
        t.orientation = a, k.onEvent(t)
    }, k.availableEventEmitters.push(r), n.offset = function(a) {
        var r = null,
            n = null;
        try {
            var i = a.getBoundingClientRect(),
                o = t,
                s = o.documentElement,
                c = o.body,
                l = e,
                d = s.clientTop || c.clientTop || 0,
                u = s.clientLeft || c.clientLeft || 0,
                m = l.pageYOffset || s.scrollTop || c.scrollTop,
                g = l.pageXOffset || s.scrollLeft || c.scrollLeft;
            r = i.top + m - d, n = i.left + g - u
        } catch (p) {}
        return {
            top: r,
            left: n
        }
    }, n.getViewportHeight = function() {
        var a = e.innerHeight,
            r = t.compatMode;
        return r && (a = "CSS1Compat" == r ? t.documentElement.clientHeight : t.body.clientHeight), a
    }, n.getScrollTop = function() {
        return t.documentElement.scrollTop ? t.documentElement.scrollTop : t.body.scrollTop
    }, n.isElementInDocument = function(e) {
        return t.body.contains(e)
    }, n.isElementInView = function(e) {
        if (!n.isElementInDocument(e)) return !1;
        var t = n.getViewportHeight(),
            a = n.getScrollTop(),
            r = n.offset(e).top,
            i = e.offsetHeight;
        return null !== r && !(a > r + i || a + t < r)
    }, n.prototype = {
        backgroundTasks: function() {
            var e = this.elements;
            k.each(this.rules, function(t) {
                k.cssQuery(t.selector, function(a) {
                    var r = 0;
                    k.each(a, function(t) {
                        k.contains(e, t) || (e.push(t), r++)
                    }), r && k.notify(t.selector + " added " + r + " elements.", 1)
                })
            }), this.track()
        },
        checkInView: function(e, t, a) {
            var r = k.$data(e, "inview");
            if (n.isElementInView(e)) {
                r || k.$data(e, "inview", !0);
                var i = this;
                this.processRules(e, function(a, r, n) {
                    if (t || !a.inviewDelay) k.$data(e, r, !0), k.onEvent({
                        type: "inview",
                        target: e,
                        inviewDelay: a.inviewDelay
                    });
                    else if (a.inviewDelay) {
                        var o = k.$data(e, n);
                        o || (o = setTimeout(function() {
                            i.checkInView(e, !0, a.inviewDelay)
                        }, a.inviewDelay), k.$data(e, n, o))
                    }
                }, a)
            } else {
                if (!n.isElementInDocument(e)) {
                    var o = k.indexOf(this.elements, e);
                    this.elements.splice(o, 1)
                }
                r && k.$data(e, "inview", !1), this.processRules(e, function(t, a, r) {
                    var n = k.$data(e, r);
                    n && clearTimeout(n)
                }, a)
            }
        },
        track: function() {
            for (var e = this.elements.length - 1; e >= 0; e--) this.checkInView(this.elements[e])
        },
        processRules: function(e, t, a) {
            var r = this.rules;
            a && (r = k.filter(this.rules, function(e) {
                return e.inviewDelay == a
            })), k.each(r, function(a, r) {
                var n = a.inviewDelay ? "viewed_" + a.inviewDelay : "viewed",
                    i = "inview_timeout_id_" + r;
                k.$data(e, n) || k.matchesCss(a.selector, e) && t(a, n, i)
            })
        }
    }, k.availableEventEmitters.push(n), o.prototype = {
        backgroundTasks: function() {
            var e = this.eventHandler;
            k.each(this.rules, function(t) {
                k.cssQuery(t.selector || "video", function(t) {
                    k.each(t, function(t) {
                        k.$data(t, "videoplayed.tracked") || (k.addEventHandler(t, "timeupdate", k.throttle(e, 100)), k.$data(t, "videoplayed.tracked", !0))
                    })
                })
            })
        },
        evalRule: function(e, t) {
            var a = t.event,
                r = e.seekable,
                n = r.start(0),
                i = r.end(0),
                o = e.currentTime,
                s = t.event.match(/^videoplayed\(([0-9]+)([s%])\)$/);
            if (s) {
                var c = s[2],
                    l = Number(s[1]),
                    d = "%" === c ? function() {
                        return l <= 100 * (o - n) / (i - n)
                    } : function() {
                        return l <= o - n
                    };
                !k.$data(e, a) && d() && (k.$data(e, a, !0), k.onEvent({
                    type: a,
                    target: e
                }))
            }
        },
        onUpdateTime: function(e) {
            var t = this.rules,
                a = e.target;
            if (a.seekable && 0 !== a.seekable.length)
                for (var r = 0, n = t.length; r < n; r++) this.evalRule(a, t[r])
        }
    }, k.availableEventEmitters.push(o), c.prototype = {
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
            this.prevUnload = e.onunload, this.prevBeforeUnload = e.onbeforeunload, e.onunload = k.bind(function(t) {
                this.prevUnload && setTimeout(k.bind(function() {
                    this.prevUnload.call(e, t)
                }, this), 1), this.newObueListener()
            }, this), e.onbeforeunload = k.bind(function(t) {
                this.prevBeforeUnload && setTimeout(k.bind(function() {
                    this.prevBeforeUnload.call(e, t)
                }, this), 1), this.newObueListener()
            }, this)
        },
        triggerBeacons: function() {
            k.fireEvent("leave", t)
        }
    }, k.availableEventEmitters.push(c), l.prototype = {
        initialize: function() {
            if (this.FB = this.FB || e.FB, this.FB && this.FB.Event && this.FB.Event.subscribe) return this.bind(), !0
        },
        bind: function() {
            this.FB.Event.subscribe("edge.create", function() {
                k.notify("tracking a facebook like", 1), k.onEvent({
                    type: "facebook.like",
                    target: t
                })
            }), this.FB.Event.subscribe("edge.remove", function() {
                k.notify("tracking a facebook unlike", 1), k.onEvent({
                    type: "facebook.unlike",
                    target: t
                })
            }), this.FB.Event.subscribe("message.send", function() {
                k.notify("tracking a facebook share", 1), k.onEvent({
                    type: "facebook.send",
                    target: t
                })
            })
        }
    }, k.availableEventEmitters.push(l), d.prototype = {
        defineEvents: function() {
            this.oldBlurClosure = function() {
                k.fireEvent("tabblur", t)
            }, this.oldFocusClosure = k.bind(function() {
                this.visibilityApiHasPriority ? k.fireEvent("tabfocus", t) : null != k.visibility.getHiddenProperty() && k.visibility.isHidden() || k.fireEvent("tabfocus", t)
            }, this)
        },
        attachDetachModernEventListeners: function(e) {
            k[0 == e ? "removeEventHandler" : "addEventHandler"](t, k.visibility.getVisibilityEvent(), this.handleVisibilityChange)
        },
        attachDetachOlderEventListeners: function(t, a, r) {
            var n = 0 == t ? "removeEventHandler" : "addEventHandler";
            k[n](a, r, this.oldBlurClosure), k[n](e, "focus", this.oldFocusClosure)
        },
        handleVisibilityChange: function() {
            k.visibility.isHidden() ? k.fireEvent("tabblur", t) : k.fireEvent("tabfocus", t)
        },
        setVisibilityApiPriority: function(t) {
            this.visibilityApiHasPriority = t, this.attachDetachOlderEventListeners(!1, e, "blur"), this.attachDetachModernEventListeners(!1), t ? null != k.visibility.getHiddenProperty() ? this.attachDetachModernEventListeners(!0) : this.attachDetachOlderEventListeners(!0, e, "blur") : (this.attachDetachOlderEventListeners(!0, e, "blur"), null != k.visibility.getHiddenProperty() && this.attachDetachModernEventListeners(!0))
        },
        oldBlurClosure: null,
        oldFocusClosure: null,
        visibilityApiHasPriority: !0
    }, k.availableEventEmitters.push(d), u.prototype = {
        initialize: function() {
            this.setupHistoryAPI(), this.setupHashChange()
        },
        fireIfURIChanged: function() {
            var e = k.URL();
            this.lastURL !== e && (this.fireEvent(), this.lastURL = e)
        },
        fireEvent: function() {
            k.updateQueryParams(), k.onEvent({
                type: "locationchange",
                target: t
            })
        },
        setupSPASupport: function() {
            this.setupHistoryAPI(), this.setupHashChange()
        },
        setupHistoryAPI: function() {
            var t = e.history;
            t && (t.pushState && (this.originalPushState = t.pushState, t.pushState = this._pushState), t.replaceState && (this.originalReplaceState = t.replaceState, t.replaceState = this._replaceState)), k.addEventHandler(e, "popstate", this._onPopState)
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
            k.addEventHandler(e, "hashchange", this._onHashChange)
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
            history.pushState === this._pushState && (history.pushState = this.originalPushState), history.replaceState === this._replaceState && (history.replaceState = this.originalReplaceState), k.removeEventHandler(e, "popstate", this._onPopState)
        },
        cleanUpHashChange: function() {
            k.removeEventHandler(e, "hashchange", this._onHashChange)
        }
    }, k.availableEventEmitters.push(u), m.prototype.getStringifiedValue = e.JSON && e.JSON.stringify || k.stringify, m.prototype.initPolling = function() {
        0 !== this.dataElementsNames.length && (this.dataElementsStore = this.getDataElementsValues(), k.poll(k.bind(this.checkDataElementValues, this), 1e3))
    }, m.prototype.getDataElementsValues = function() {
        var e = {};
        return k.each(this.dataElementsNames, function(t) {
            var a = k.getVar(t);
            e[t] = this.getStringifiedValue(a)
        }, this), e
    }, m.prototype.checkDataElementValues = function() {
        k.each(this.dataElementsNames, k.bind(function(e) {
            var a = this.getStringifiedValue(k.getVar(e));
            a !== this.dataElementsStore[e] && (this.dataElementsStore[e] = a, k.onEvent({
                type: "dataelementchange(" + e + ")",
                target: t
            }))
        }, this))
    }, k.availableEventEmitters.push(m), g.prototype.backgroundTasks = function() {
        k.each(this.rules, function(e) {
            k.cssQuery(e.selector, function(e) {
                if (e.length > 0) {
                    var t = e[0];
                    if (k.$data(t, "elementexists.seen")) return;
                    k.$data(t, "elementexists.seen", !0), k.onEvent({
                        type: "elementexists",
                        target: t
                    })
                }
            })
        })
    }, k.availableEventEmitters.push(g), p.prototype = {
        backgroundTasks: function() {
            var e = this;
            k.each(this.rules, function(t) {
                var a = t[1],
                    r = t[0];
                k.cssQuery(a, function(t) {
                    k.each(t, function(t) {
                        e.trackElement(t, r)
                    })
                })
            }, this)
        },
        trackElement: function(e, t) {
            var a = this,
                r = k.$data(e, "hover.delays");
            r ? k.contains(r, t) || r.push(t) : (k.addEventHandler(e, "mouseover", function(t) {
                a.onMouseOver(t, e)
            }), k.addEventHandler(e, "mouseout", function(t) {
                a.onMouseOut(t, e)
            }), k.$data(e, "hover.delays", [t]))
        },
        onMouseOver: function(e, t) {
            var a = e.target || e.srcElement,
                r = e.relatedTarget || e.fromElement;
            (t === a || k.containsElement(t, a)) && !k.containsElement(t, r) && this.onMouseEnter(t)
        },
        onMouseEnter: function(e) {
            var t = k.$data(e, "hover.delays"),
                a = k.map(t, function(t) {
                    return setTimeout(function() {
                        k.onEvent({
                            type: "hover(" + t + ")",
                            target: e
                        })
                    }, t)
                });
            k.$data(e, "hover.delayTimers", a)
        },
        onMouseOut: function(e, t) {
            var a = e.target || e.srcElement,
                r = e.relatedTarget || e.toElement;
            (t === a || k.containsElement(t, a)) && !k.containsElement(t, r) && this.onMouseLeave(t)
        },
        onMouseLeave: function(e) {
            var t = k.$data(e, "hover.delayTimers");
            t && k.each(t, function(e) {
                clearTimeout(e)
            })
        }
    }, k.availableEventEmitters.push(p), f.prototype = {
        initialize: function() {
            var e = this.twttr;
            e && "function" == typeof e.ready && e.ready(k.bind(this.bind, this))
        },
        bind: function() {
            this.twttr.events.bind("tweet", function(e) {
                e && (k.notify("tracking a tweet button", 1), k.onEvent({
                    type: "twitter.tweet",
                    target: t
                }))
            })
        }
    }, k.availableEventEmitters.push(f), k.inherit(h, k.BaseTool), k.extend(h.prototype, {
        name: "tnt",
        endPLPhase: function(e) {
            "aftertoolinit" === e && this.initialize()
        },
        initialize: function() {
            k.notify("Test & Target: Initializing", 1), this.initializeTargetPageParams(), this.load()
        },
        initializeTargetPageParams: function() {
            e.targetPageParams && this.updateTargetPageParams(this.parseTargetPageParamsResult(e.targetPageParams())), this.updateTargetPageParams(this.settings.pageParams), this.setTargetPageParamsFunction()
        },
        load: function() {
            var e = this.getMboxURL(this.settings.mboxURL);
            !1 !== this.settings.initTool ? this.settings.loadSync ? (k.loadScriptSync(e), this.onScriptLoaded()) : (k.loadScript(e, k.bind(this.onScriptLoaded, this)), this.initializing = !0) : this.initialized = !0
        },
        getMboxURL: function(t) {
            var a = t;
            return k.isObject(t) && (a = "https:" === e.location.protocol ? t.https : t.http), a.match(/^https?:/) ? a : k.basePath() + a
        },
        onScriptLoaded: function() {
            k.notify("Test & Target: loaded.", 1), this.flushQueue(), this.initialized = !0, this.initializing = !1
        },
        $addMbox: function(e, t, a) {
            var r = a.mboxGoesAround,
                n = r + "{visibility: hidden;}",
                i = this.appendStyle(n);
            r in this.styleElements || (this.styleElements[r] = i), this.initialized ? this.$addMBoxStep2(null, null, a) : this.initializing && this.queueCommand({
                command: "addMBoxStep2",
                arguments: [a]
            }, e, t)
        },
        $addMBoxStep2: function(a, r, n) {
            var i = this.generateID(),
                o = this;
            k.addEventHandler(e, "load", k.bind(function() {
                k.cssQuery(n.mboxGoesAround, function(a) {
                    var r = a[0];
                    if (r) {
                        var s = t.createElement("div");
                        s.id = i, r.parentNode.replaceChild(s, r), s.appendChild(r), e.mboxDefine(i, n.mboxName);
                        var c = [n.mboxName];
                        n.arguments && (c = c.concat(n.arguments)), e.mboxUpdate.apply(null, c), o.reappearWhenCallComesBack(r, i, n.timeout, n)
                    }
                })
            }, this)), this.lastMboxID = i
        },
        $addTargetPageParams: function(e, t, a) {
            this.updateTargetPageParams(a)
        },
        generateID: function() {
            return "_sdsat_mbox_" + String(Math.random()).substring(2) + "_"
        },
        appendStyle: function(e) {
            var a = t.getElementsByTagName("head")[0],
                r = t.createElement("style");
            return r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)), a.appendChild(r), r
        },
        reappearWhenCallComesBack: function(e, t, a, r) {
            function n() {
                var e = i.styleElements[r.mboxGoesAround];
                e && (e.parentNode.removeChild(e), delete i.styleElements[r.mboxGoesAround])
            }
            var i = this;
            k.cssQuery('script[src*="omtrdc.net"]', function(e) {
                var t = e[0];
                if (t) {
                    k.scriptOnLoad(t.src, t, function() {
                        k.notify("Test & Target: request complete", 1), n(), clearTimeout(r)
                    });
                    var r = setTimeout(function() {
                        k.notify("Test & Target: bailing after " + a + "ms", 1), n()
                    }, a)
                } else k.notify("Test & Target: failed to find T&T ajax call, bailing", 1), n()
            })
        },
        updateTargetPageParams: function(e) {
            var t = {};
            for (var a in e) e.hasOwnProperty(a) && (t[k.replace(a)] = k.replace(e[a]));
            k.extend(this.targetPageParamsStore, t)
        },
        getTargetPageParams: function() {
            return this.targetPageParamsStore
        },
        setTargetPageParamsFunction: function() {
            e.targetPageParams = k.bind(this.getTargetPageParams, this)
        },
        parseTargetPageParamsResult: function(e) {
            var t = e;
            return k.isArray(e) && (e = e.join("&")), k.isString(e) && (t = k.parseQueryParams(e)), t
        }
    }), k.availableTools.tnt = h, k.inherit(b, k.BaseTool), k.extend(b.prototype, {
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
            this.onTabFocus = k.bind(function() {
                this.notify("Tab visible, sending view beacon when ready", 1), this.tabEverVisible = !0, this.flushQueueWhenReady()
            }, this), this.onPageLeave = k.bind(function() {
                this.notify("isHuman? : " + this.isHuman(), 1), this.isHuman() && this.sendDurationBeacon()
            }, this), this.onHumanDetectionChange = k.bind(function(e) {
                this == e.target.target && (this.human = e.target.isHuman)
            }, this)
        },
        initialize: function() {
            this.initializeTracking(), this.initializeDataProviders(), this.initializeNonHumanDetection(), this.tabEverVisible = k.visibility.isVisible(), this.tabEverVisible ? this.notify("Tab visible, sending view beacon when ready", 1) : k.bindEventOnce("tabfocus", this.onTabFocus), this.initialized = !0
        },
        initializeTracking: function() {
            this.initialized || (this.notify("Initializing tracking", 1), this.addRemovePageLeaveEvent(this.enableTracking), this.addRemoveHumanDetectionChangeEvent(this.enableTracking), this.initialized = !0)
        },
        initializeDataProviders: function() {
            var e, t = this.getAnalyticsTool();
            this.dataProvider.register(new b.DataProvider.VisitorID(k.getVisitorId())), t ? (e = new b.DataProvider.Generic("rsid", function() {
                return t.settings.account
            }), this.dataProvider.register(e)) : this.notify("Missing integration with Analytics: rsid will not be sent.")
        },
        initializeNonHumanDetection: function() {
            k.nonhumandetection ? (k.nonhumandetection.init(), this.setEnableNonHumanDetection(0 != this.settings.enableNonHumanDetection), this.settings.nonHumanDetectionDelay > 0 && this.setNonHumanDetectionDelay(1e3 * parseInt(this.settings.nonHumanDetectionDelay))) : this.notify("NHDM is not available.")
        },
        getAnalyticsTool: function() {
            if (this.settings.integratesWith) return k.tools[this.settings.integratesWith]
        },
        flushQueueWhenReady: function() {
            this.enableTracking && this.tabEverVisible && k.poll(k.bind(function() {
                if (this.isReadyToTrack()) return this.flushQueue(), !0
            }, this), 100, 20)
        },
        isReadyToTrack: function() {
            return this.tabEverVisible && this.dataProvider.isReady()
        },
        $setVars: function(e, t, a) {
            for (var r in a) {
                var n = a[r];
                "function" == typeof n && (n = n()), this.settings[r] = n
            }
            this.notify("Set variables done", 2), this.prepareContextData()
        },
        $setEnableTracking: function(e, t, a) {
            this.notify("Will" + (a ? "" : " not") + " track time on page", 1), this.enableTracking != a && (this.addRemovePageLeaveEvent(a), this.addRemoveHumanDetectionChangeEvent(a), this.enableTracking = a)
        },
        $sendFirstBeacon: function() {
            this.sendViewBeacon()
        },
        setEnableNonHumanDetection: function(e) {
            e ? k.nonhumandetection.register(this) : k.nonhumandetection.unregister(this)
        },
        setNonHumanDetectionDelay: function(e) {
            k.nonhumandetection.register(this, e)
        },
        addRemovePageLeaveEvent: function(e) {
            this.notify((e ? "Attach onto" : "Detach from") + " page leave event", 1), k[0 == e ? "unbindEvent" : "bindEvent"]("leave", this.onPageLeave)
        },
        addRemoveHumanDetectionChangeEvent: function(e) {
            this.notify((e ? "Attach onto" : "Detach from") + " human detection change event", 1), k[0 == e ? "unbindEvent" : "bindEvent"]("humandetection.change", this.onHumanDetectionChange)
        },
        sendViewBeacon: function() {
            this.notify("Tracked page view.", 1), this.sendBeaconWith()
        },
        sendDurationBeacon: function() {
            if (k.timetracking && "function" == typeof k.timetracking.timeOnPage && null != k.timetracking.timeOnPage()) {
                this.notify("Tracked close", 1), this.sendBeaconWith({
                    timeOnPage: Math.round(k.timetracking.timeOnPage() / 1e3),
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
            return k.extend(t, this.dataProvider.provide()), k.extend(t, e), this.preparePrefix(this.settings.collectionServer) + this.adapt.convertToURI(this.adapt.toNielsen(this.substituteVariables(t)))
        },
        preparePrefix: function(e) {
            return "//" + encodeURIComponent(e) + ".imrworldwide.com/cgi-bin/gn?"
        },
        substituteVariables: function(e) {
            var t = {};
            for (var a in e) e.hasOwnProperty(a) && (t[a] = k.replace(e[a]));
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
            k.notify(this.logPrefix + e, t)
        },
        beaconMethod: "plainBeacon",
        adapt: null,
        enableTracking: !1,
        logPrefix: "Nielsen: ",
        tabEverVisible: !1,
        human: !0,
        magicConst: 2e6
    }), b.DataProvider = {}, b.DataProvider.Generic = function(e, t) {
        this.key = e, this.valueFn = t
    }, k.extend(b.DataProvider.Generic.prototype, {
        isReady: function() {
            return !0
        },
        getValue: function() {
            return this.valueFn()
        },
        provide: function() {
            this.isReady() || b.prototype.notify("Not yet ready to provide value for: " + this.key, 5);
            var e = {};
            return e[this.key] = this.getValue(), e
        }
    }), b.DataProvider.VisitorID = function(e, t, a) {
        this.key = t || "uuid", this.visitorInstance = e, this.visitorInstance && (this.visitorId = e.getMarketingCloudVisitorID([this, this._visitorIdCallback])), this.fallbackProvider = a || new b.UUID
    }, k.inherit(b.DataProvider.VisitorID, b.DataProvider.Generic), k.extend(b.DataProvider.VisitorID.prototype, {
        isReady: function() {
            return null === this.visitorInstance || !!this.visitorId
        },
        getValue: function() {
            return this.visitorId || this.fallbackProvider.get()
        },
        _visitorIdCallback: function(e) {
            this.visitorId = e
        }
    }), b.DataProvider.Aggregate = function() {
        this.providers = [];
        for (var e = 0; e < arguments.length; e++) this.register(arguments[e])
    }, k.extend(b.DataProvider.Aggregate.prototype, {
        register: function(e) {
            this.providers.push(e)
        },
        isReady: function() {
            return k.every(this.providers, function(e) {
                return e.isReady()
            })
        },
        provide: function() {
            var e = {};
            return k.each(this.providers, function(t) {
                k.extend(e, t.provide())
            }), e
        }
    }), b.UUID = function() {}, k.extend(b.UUID.prototype, {
        generate: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            })
        },
        get: function() {
            var e = k.readCookie(this.key("uuid"));
            return e || (e = this.generate(), k.setCookie(this.key("uuid"), e), e)
        },
        key: function(e) {
            return "_dtm_nielsen_" + e
        }
    }), b.DataAdapters = function() {}, k.extend(b.DataAdapters.prototype, {
        toNielsen: function(e) {
            var t = (new Date).getTime(),
                r = {
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
                n = {
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
            for (key in n)
                if (n[key] !== a && null != n[key] && n[key] !== a && null != n && "" != n) {
                    var i = encodeURIComponent(n[key]);
                    r.hasOwnProperty(key) && i && (i = r[key] + i), n[key] = i
                } return this.filterObject(n)
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
            if (!1 === k.isObject(e)) return "";
            var t = [];
            for (var a in e) e.hasOwnProperty(a) && t.push(a + "=" + e[a]);
            return t.join("&")
        },
        filterObject: function(e) {
            for (var t in e) !e.hasOwnProperty(t) || null != e[t] && e[t] !== a || delete e[t];
            return e
        }
    }), k.availableTools.nielsen = b, k.inherit(A, k.BaseTool), k.extend(A.prototype, {
        name: "SC",
        endPLPhase: function(e) {
            e === this.settings.loadOn && this.initialize(e)
        },
        initialize: function(t) {
            if (!this._cancelToolInit)
                if (this.settings.initVars = this.substituteVariables(this.settings.initVars, {
                        type: t
                    }), !1 !== this.settings.initTool) {
                    var a = this.settings.sCodeURL || k.basePath() + "s_code.js";
                    "object" == typeof a && (a = "https:" === e.location.protocol ? a.https : a.http), a.match(/^https?:/) || (a = k.basePath() + a), this.settings.initVars && this.$setVars(null, null, this.settings.initVars), k.loadScript(a, k.bind(this.onSCodeLoaded, this)), this.initializing = !0
                } else this.initializing = !0, this.pollForSC()
        },
        getS: function(t, a) {
            var r = a && a.hostname || e.location.hostname,
                n = this.concatWithToolVarBindings(a && a.setVars || this.varBindings),
                i = a && a.addEvent || this.events,
                o = this.getAccount(r),
                s = e.s_gi;
            if (!s) return null;
            if (this.isValidSCInstance(t) || (t = null), !o && !t) return k.notify("Adobe Analytics: tracker not initialized because account was not found", 1), null;
            t = t || s(o);
            var c = "D" + k.appVersion;
            return "undefined" != typeof t.tagContainerMarker ? t.tagContainerMarker = c : "string" == typeof t.version && t.version.substring(t.version.length - 5) !== "-" + c && (t.version += "-" + c), t.sa && !0 !== this.settings.skipSetAccount && !1 !== this.settings.initTool && t.sa(this.settings.account), this.applyVarBindingsOnTracker(t, n), i.length > 0 && (t.events = i.join(",")), k.getVisitorId() && (t.visitor = k.getVisitorId()), t
        },
        onSCodeLoaded: function(e) {
            this.initialized = !0, this.initializing = !1;
            var t = ["Adobe Analytics: loaded", e ? " (manual)" : "", "."];
            k.notify(t.join(""), 1), k.fireEvent(this.id + ".load", this.getS()), e || (this.flushQueueExceptTrackLink(), this.sendBeacon()), this.flushQueue()
        },
        getAccount: function(t) {
            return e.s_account ? e.s_account : t && this.settings.accountByHost && this.settings.accountByHost[t] || this.settings.account
        },
        getTrackingServer: function() {
            var t = this,
                a = t.getS();
            if (a) {
                if (a.ssl && a.trackingServerSecure) return a.trackingServerSecure;
                if (a.trackingServer) return a.trackingServer
            }
            var r, n = t.getAccount(e.location.hostname);
            if (!n) return null;
            var i, o, s = "",
                c = a && a.dc;
            return (i = (r = n).indexOf(",")) >= 0 && (r = r.gb(0, i)), r = r.replace(/[^A-Za-z0-9]/g, ""), s || (s = "2o7.net"), c = c ? ("" + c).toLowerCase() : "d1", "2o7.net" == s && ("d1" == c ? c = "112" : "d2" == c && (c = "122"), o = ""), i = r + "." + c + "." + o + s
        },
        sendBeacon: function() {
            var t = this.getS(e[this.settings.renameS || "s"]);
            t ? this.settings.customInit && !1 === this.settings.customInit(t) ? k.notify("Adobe Analytics: custom init suppressed beacon", 1) : (this.settings.executeCustomPageCodeFirst && this.applyVarBindingsOnTracker(t, this.varBindings), this.executeCustomSetupFuns(t), t.t(), this.clearVarBindings(), this.clearCustomSetup(), k.notify("Adobe Analytics: tracked page view", 1)) : k.notify("Adobe Analytics: page code not loaded", 1)
        },
        pollForSC: function() {
            k.poll(k.bind(function() {
                if ("function" == typeof e.s_gi) return this.onSCodeLoaded(!0), !0
            }, this))
        },
        flushQueueExceptTrackLink: function() {
            if (this.pending) {
                for (var e = [], t = 0; t < this.pending.length; t++) {
                    var a = this.pending[t];
                    "trackLink" === a[0].command ? e.push(a) : this.triggerCommand.apply(this, a)
                }
                this.pending = e
            }
        },
        isQueueAvailable: function() {
            return !this.initialized
        },
        substituteVariables: function(e, t) {
            var a = {};
            for (var r in e)
                if (e.hasOwnProperty(r)) {
                    var n = e[r];
                    a[r] = k.replace(n, location, t)
                } return a
        },
        $setVars: function(e, t, a) {
            for (var r in a)
                if (a.hasOwnProperty(r)) {
                    var n = a[r];
                    "function" == typeof n && (n = n()), this.varBindings[r] = n
                } k.notify("Adobe Analytics: set variables.", 2)
        },
        $customSetup: function(e, t, a) {
            this.customSetupFuns.push(function(r) {
                a.call(e, t, r)
            })
        },
        isValidSCInstance: function(e) {
            return !!e && "function" == typeof e.t && "function" == typeof e.tl
        },
        concatWithToolVarBindings: function(e) {
            var t = this.settings.initVars || {};
            return k.map(["trackingServer", "trackingServerSecure"], function(a) {
                t[a] && !e[a] && (e[a] = t[a])
            }), e
        },
        applyVarBindingsOnTracker: function(e, t) {
            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
        },
        clearVarBindings: function() {
            this.varBindings = {}
        },
        clearCustomSetup: function() {
            this.customSetupFuns = []
        },
        executeCustomSetupFuns: function(t) {
            k.each(this.customSetupFuns, function(a) {
                a.call(e, t)
            })
        },
        $trackLink: function(e, t, a) {
            var r = (a = a || {}).type,
                n = a.linkName;
            !n && e && e.nodeName && "a" === e.nodeName.toLowerCase() && (n = e.innerHTML), n || (n = "link clicked");
            var i = a && a.setVars,
                o = a && a.addEvent || [],
                s = this.getS(null, {
                    setVars: i,
                    addEvent: o
                });
            if (s) {
                var c = s.linkTrackVars,
                    l = s.linkTrackEvents,
                    d = this.definedVarNames(i);
                a && a.customSetup && a.customSetup.call(e, t, s), o.length > 0 && d.push("events"), s.products && d.push("products"), d = this.mergeTrackLinkVars(s.linkTrackVars, d), o = this.mergeTrackLinkVars(s.linkTrackEvents, o), s.linkTrackVars = this.getCustomLinkVarsList(d);
                var u = k.map(o, function(e) {
                    return e.split(":")[0]
                });
                s.linkTrackEvents = this.getCustomLinkVarsList(u), s.tl(!0, r || "o", n), k.notify(["Adobe Analytics: tracked link ", "using: linkTrackVars=", k.stringify(s.linkTrackVars), "; linkTrackEvents=", k.stringify(s.linkTrackEvents)].join(""), 1), s.linkTrackVars = c, s.linkTrackEvents = l
            } else k.notify("Adobe Analytics: page code not loaded", 1)
        },
        mergeTrackLinkVars: function(e, t) {
            return e && (t = e.split(",").concat(t)), t
        },
        getCustomLinkVarsList: function(e) {
            var t = k.indexOf(e, "None");
            return t > -1 && e.length > 1 && e.splice(t, 1), e.join(",")
        },
        definedVarNames: function(e) {
            e = e || this.varBindings;
            var t = [];
            for (var a in e) e.hasOwnProperty(a) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(a) && t.push(a);
            return t
        },
        $trackPageView: function(e, t, a) {
            var r = a && a.setVars,
                n = a && a.addEvent || [],
                i = this.getS(null, {
                    setVars: r,
                    addEvent: n
                });
            i ? (i.linkTrackVars = "", i.linkTrackEvents = "", this.executeCustomSetupFuns(i), a && a.customSetup && a.customSetup.call(e, t, i), i.t(), this.clearVarBindings(), this.clearCustomSetup(), k.notify("Adobe Analytics: tracked page view", 1)) : k.notify("Adobe Analytics: page code not loaded", 1)
        },
        $postTransaction: function(t, a, r) {
            var n = k.data.transaction = e[r],
                i = this.varBindings,
                o = this.settings.fieldVarMapping;
            if (k.each(n.items, function(e) {
                    this.products.push(e)
                }, this), i.products = k.map(this.products, function(e) {
                    var t = [];
                    if (o && o.item)
                        for (var a in o.item)
                            if (o.item.hasOwnProperty(a)) {
                                var r = o.item[a];
                                t.push(r + "=" + e[a]), "event" === r.substring(0, 5) && this.events.push(r)
                            } var n = ["", e.product, e.quantity, e.unitPrice * e.quantity];
                    return t.length > 0 && n.push(t.join("|")), n.join(";")
                }, this).join(","), o && o.transaction) {
                var s = [];
                for (var c in o.transaction)
                    if (o.transaction.hasOwnProperty(c)) {
                        r = o.transaction[c];
                        s.push(r + "=" + n[c]), "event" === r.substring(0, 5) && this.events.push(r)
                    } i.products.length > 0 && (i.products += ","), i.products += ";;;;" + s.join("|")
            }
        },
        $addEvent: function() {
            for (var e = 2, t = arguments.length; e < t; e++) this.events.push(arguments[e])
        },
        $addProduct: function() {
            for (var e = 2, t = arguments.length; e < t; e++) this.products.push(arguments[e])
        }
    }), k.availableTools.sc = A, k.inherit(v, k.BaseTool), k.extend(v.prototype, {
        name: "Default",
        $loadIframe: function(t, a, r) {
            var n = r.pages,
                i = r.loadOn,
                o = k.bind(function() {
                    k.each(n, function(e) {
                        this.loadIframe(t, a, e)
                    }, this)
                }, this);
            i || o(), "domready" === i && k.domReady(o), "load" === i && k.addEventHandler(e, "load", o)
        },
        loadIframe: function(e, a, r) {
            var n = t.createElement("iframe");
            n.style.display = "none";
            var i = k.data.host,
                o = r.data,
                s = this.scriptURL(r.src),
                c = k.searchVariables(o, e, a);
            i && (s = k.basePath() + s), s += c, n.src = s;
            var l = t.getElementsByTagName("body")[0];
            l ? l.appendChild(n) : k.domReady(function() {
                t.getElementsByTagName("body")[0].appendChild(n)
            })
        },
        scriptURL: function(e) {
            return (k.settings.scriptDir || "") + e
        },
        $loadScript: function(t, a, r) {
            var n = r.scripts,
                i = r.sequential,
                o = r.loadOn,
                s = k.bind(function() {
                    i ? this.loadScripts(t, a, n) : k.each(n, function(e) {
                        this.loadScripts(t, a, [e])
                    }, this)
                }, this);
            o ? "domready" === o ? k.domReady(s) : "load" === o && k.addEventHandler(e, "load", s) : s()
        },
        loadScripts: function(e, t, a) {
            function r() {
                i.length > 0 && n && i.shift().call(e, t, o);
                var c = a.shift();
                if (c) {
                    var l = k.data.host,
                        d = s.scriptURL(c.src);
                    l && (d = k.basePath() + d), n = c, k.loadScript(d, r)
                }
            }
            try {
                a = a.slice(0);
                var n, i = this.asyncScriptCallbackQueue,
                    o = t.target || t.srcElement,
                    s = this
            } catch (c) {
                console.error("scripts is", k.stringify(a))
            }
            r()
        },
        $loadBlockingScript: function(e, t, a) {
            var r = a.scripts;
            a.loadOn;
            k.bind(function() {
                k.each(r, function(a) {
                    this.loadBlockingScript(e, t, a)
                }, this)
            }, this)()
        },
        loadBlockingScript: function(e, t, a) {
            var r = this.scriptURL(a.src),
                n = k.data.host,
                i = t.target || t.srcElement;
            n && (r = k.basePath() + r), this.argsForBlockingScripts.push([e, t, i]), k.loadScriptSync(r)
        },
        pushAsyncScript: function(e) {
            this.asyncScriptCallbackQueue.push(e)
        },
        pushBlockingScript: function(e) {
            var t = this.argsForBlockingScripts.shift(),
                a = t[0];
            e.apply(a, t.slice(1))
        },
        $writeHTML: k.escapeHtmlParams(function(e, a) {
            if (!k.domReadyFired && t.write)
                if ("pagebottom" === a.type || "pagetop" === a.type)
                    for (var r = 2, n = arguments.length; r < n; r++) {
                        var i = arguments[r].html;
                        i = k.replace(i, e, a), t.write(i)
                    } else k.notify("You can only use writeHTML on the `pagetop` and `pagebottom` events.", 1);
                else k.notify("Command writeHTML failed. You should try appending HTML using the async option.", 1)
        }),
        linkNeedsDelayActivate: function(t, a) {
            a = a || e;
            var r = t.tagName,
                n = t.getAttribute("target"),
                i = t.getAttribute("href");
            return (!r || "a" === r.toLowerCase()) && (!!i && (!n || "_blank" !== n && ("_top" === n ? a.top === a : "_parent" !== n && ("_self" === n || (!a.name || n === a.name)))))
        },
        $delayActivateLink: function(e, t) {
            if (this.linkNeedsDelayActivate(e)) {
                k.preventDefault(t);
                var a = k.settings.linkDelay || 100;
                setTimeout(function() {
                    k.setLocation(e.href)
                }, a)
            }
        },
        isQueueable: function(e) {
            return "writeHTML" !== e.command
        }
    }), k.availableTools["default"] = v, k.inherit(N, k.BaseTool), k.extend(N.prototype, {
        initialize: function() {
            var e = this.settings;
            if (!1 !== this.settings.initTool) {
                var t = e.url;
                t = "string" == typeof t ? k.basePath() + t : k.isHttps() ? t.https : t.http, k.loadScript(t, k.bind(this.onLoad, this)), this.initializing = !0
            } else this.initialized = !0
        },
        isQueueAvailable: function() {
            return !this.initialized
        },
        onLoad: function() {
            this.initialized = !0, this.initializing = !1, this.settings.initialBeacon && this.settings.initialBeacon(), this.flushQueue()
        },
        endPLPhase: function(e) {
            e === this.settings.loadOn && (k.notify(this.name + ": Initializing at " + e, 1), this.initialize())
        },
        $fire: function(e, t, a) {
            this.initializing ? this.queueCommand({
                command: "fire",
                arguments: [a]
            }, e, t) : a.call(this.settings, e, t)
        }
    }), k.availableTools.am = N, k.availableTools.adlens = N, k.availableTools.aem = N, k.availableTools.__basic = N, k.extend(y.prototype, {
        getInstance: function() {
            return this.instance
        },
        initialize: function() {
            var e, t = this.settings;
            k.notify("Visitor ID: Initializing tool", 1), null !== (e = this.createInstance(t.mcOrgId, t.initVars)) && (t.customerIDs && this.applyCustomerIDs(e, t.customerIDs), t.autoRequest && e.getMarketingCloudVisitorID(), this.instance = e)
        },
        createInstance: function(e, t) {
            if (!k.isString(e)) return k.notify('Visitor ID: Cannot create instance using mcOrgId: "' + e + '"', 4), null;
            e = k.replace(e), k.notify('Visitor ID: Create instance using mcOrgId: "' + e + '"', 1), t = this.parseValues(t);
            var a = Visitor.getInstance(e, t);
            return k.notify("Visitor ID: Set variables: " + k.stringify(t), 1), a
        },
        applyCustomerIDs: function(e, t) {
            var a = this.parseIds(t);
            e.setCustomerIDs(a), k.notify("Visitor ID: Set Customer IDs: " + k.stringify(a), 1)
        },
        parseValues: function(e) {
            if (!1 === k.isObject(e)) return {};
            var t = {};
            for (var a in e) e.hasOwnProperty(a) && (t[a] = k.replace(e[a]));
            return t
        },
        parseIds: function(e) {
            var t = {};
            if (!1 === k.isObject(e)) return {};
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var r = k.replace(e[a].id);
                    r !== e[a].id && r && (t[a] = {}, t[a].id = r, t[a].authState = Visitor.AuthState[e[a].authState])
                } return t
        }
    }), k.availableTools.visitor_id = y;
    var _ = {
        allowLinker: function() {
            return k.hasMultipleDomains()
        },
        cookieDomain: function() {
            var t = k.settings.domainList,
                a = k.find(t, function(t) {
                    var a = e.location.hostname;
                    return k.equalsIgnoreCase(a.slice(a.length - t.length), t)
                });
            return a ? "." + a : "auto"
        }
    };
    k.inherit(E, k.BaseTool), k.extend(E.prototype, {
        name: "GAUniversal",
        endPLPhase: function(e) {
            e === this.settings.loadOn && (k.notify("GAU: Initializing at " + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView())
        },
        getTrackerName: function() {
            return this.settings.trackerSettings.name || ""
        },
        isPageCodeLoadSuppressed: function() {
            return !1 === this.settings.initTool || !0 === this._cancelToolInit
        },
        initialize: function() {
            if (this.isPageCodeLoadSuppressed()) return this.initialized = !0, void k.notify("GAU: Page code not loaded (suppressed).", 1);
            var t = "ga";
            e[t] = e[t] || this.createGAObject(), e.GoogleAnalyticsObject = t, k.notify("GAU: Page code loaded.", 1), k.loadScriptOnce(this.getToolUrl());
            var a = this.settings;
            (_.allowLinker() && !1 !== a.allowLinker ? this.createAccountForLinker() : this.createAccount(), this.executeInitCommands(), a.customInit) && (!1 === (0, a.customInit)(e[t], this.getTrackerName()) && (this.suppressInitialPageView = !0));
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
            _.allowLinker() && (e.allowLinker = !0), this.create(e), this.call("require", "linker"), this.call("linker:autoLink", this.autoLinkDomains(), !1, !0)
        },
        create: function(e) {
            var t = this.settings.trackerSettings;
            (t = k.preprocessArguments([t], location, null, this.forceLowerCase)[0]).trackingId = k.replace(this.settings.trackerSettings.trackingId, location), t.cookieDomain || (t.cookieDomain = _.cookieDomain()), k.extend(t, e || {}), this.call("create", t)
        },
        autoLinkDomains: function() {
            var e = location.hostname;
            return k.filter(k.settings.domainList, function(t) {
                return t !== e
            })
        },
        executeInitCommands: function() {
            var e = this.settings;
            e.initCommands && k.each(e.initCommands, function(e) {
                var t = e.splice(2, e.length - 2);
                e = e.concat(k.preprocessArguments(t, location, null, this.forceLowerCase)), this.call.apply(this, e)
            }, this)
        },
        trackInitialPageView: function() {
            this.suppressInitialPageView || this.isPageCodeLoadSuppressed() || this.call("send", "pageview")
        },
        call: function() {
            "function" == typeof ga ? this.isCallSuppressed() || (arguments[0] = this.cmd(arguments[0]), this.log(k.toArray(arguments)), ga.apply(e, arguments)) : k.notify("GA Universal function not found!", 4)
        },
        isCallSuppressed: function() {
            return !0 === this._cancelToolInit
        },
        $missing$: function(e, t, a, r) {
            r = r || [], r = [e].concat(r), this.call.apply(this, r)
        },
        getToolUrl: function() {
            var e = this.settings,
                t = k.isHttps();
            return e.url ? t ? e.url.https : e.url.http : (t ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js"
        },
        cmd: function(e) {
            var t = ["send", "set", "get"],
                a = this.getTrackerName();
            return a && -1 !== k.indexOf(t, e) ? a + "." + e : e
        },
        log: function(e) {
            var t = "GA Universal: sent command " + e[0] + " to tracker " + (this.getTrackerName() || "default");
            if (e.length > 1) {
                k.stringify(e.slice(1));
                t += " with parameters " + k.stringify(e.slice(1))
            }
            t += ".", k.notify(t, 1)
        }
    }), k.availableTools.ga_universal = E, k.inherit(M, k.BaseTool), k.extend(M.prototype, {
        name: "GA",
        initialize: function() {
            var t = this.settings,
                a = e._gaq,
                r = t.initCommands || [],
                n = t.customInit;
            if (a || (_gaq = []), this.isSuppressed()) k.notify("GA: page code not loaded(suppressed).", 1);
            else {
                if (!a && !M.scriptLoaded) {
                    var i = k.isHttps(),
                        o = (i ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                    t.url && (o = i ? t.url.https : t.url.http), k.loadScript(o), M.scriptLoaded = !0, k.notify("GA: page code loaded.", 1)
                }
                t.domain;
                var s = t.trackerName,
                    c = _.allowLinker(),
                    l = k.replace(t.account, location);
                k.settings.domainList;
                _gaq.push([this.cmd("setAccount"), l]), c && _gaq.push([this.cmd("setAllowLinker"), c]), _gaq.push([this.cmd("setDomainName"), _.cookieDomain()]), k.each(r, function(e) {
                    var t = [this.cmd(e[0])].concat(k.preprocessArguments(e.slice(1), location, null, this.forceLowerCase));
                    _gaq.push(t)
                }, this), n && (this.suppressInitialPageView = !1 === n(_gaq, s)), t.pageName && this.$overrideInitialPageView(null, null, t.pageName)
            }
            this.initialized = !0, k.fireEvent(this.id + ".configure", _gaq, s)
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
        $overrideInitialPageView: function(e, t, a) {
            this.urlOverride = a
        },
        trackInitialPageView: function() {
            if (!this.isSuppressed() && !this.suppressInitialPageView)
                if (this.urlOverride) {
                    var e = k.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase);
                    this.$missing$("trackPageview", null, null, e)
                } else this.$missing$("trackPageview")
        },
        endPLPhase: function(e) {
            e === this.settings.loadOn && (k.notify("GA: Initializing at " + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView())
        },
        call: function(e, t, a, r) {
            if (!this._cancelToolInit) {
                this.settings;
                var n = this.tracker(),
                    i = this.cmd(e);
                r = r ? [i].concat(r) : [i];
                _gaq.push(r), n ? k.notify("GA: sent command " + e + " to tracker " + n + (r.length > 1 ? " with parameters [" + r.slice(1).join(", ") + "]" : "") + ".", 1) : k.notify("GA: sent command " + e + (r.length > 1 ? " with parameters [" + r.slice(1).join(", ") + "]" : "") + ".", 1)
            }
        },
        $missing$: function(e, t, a, r) {
            this.call(e, t, a, r)
        },
        $postTransaction: function(t, a, r) {
            var n = k.data.customVars.transaction = e[r];
            this.call("addTrans", t, a, [n.orderID, n.affiliation, n.total, n.tax, n.shipping, n.city, n.state, n.country]), k.each(n.items, function(e) {
                this.call("addItem", t, a, [e.orderID, e.sku, e.product, e.category, e.unitPrice, e.quantity])
            }, this), this.call("trackTrans", t, a)
        },
        delayLink: function(e, t) {
            var a = this;
            if (_.allowLinker() && e.hostname.match(this.settings.linkerDomains) && !k.isSubdomainOf(e.hostname, location.hostname)) {
                k.preventDefault(t);
                var r = k.settings.linkDelay || 100;
                setTimeout(function() {
                    a.call("link", e, t, [e.href])
                }, r)
            }
        },
        popupLink: function(t, a) {
            if (e._gat) {
                k.preventDefault(a);
                var r = this.settings.account,
                    n = e._gat._createTracker(r)._getLinkerUrl(t.href);
                e.open(n)
            }
        },
        $link: function(e, t) {
            "_blank" === e.getAttribute("target") ? this.popupLink(e, t) : this.delayLink(e, t)
        },
        $trackEvent: function(e, t) {
            var a = Array.prototype.slice.call(arguments, 2);
            if (a.length >= 4 && null != a[3]) {
                var r = parseInt(a[3], 10);
                k.isNaN(r) && (r = 1), a[3] = r
            }
            this.call("trackEvent", e, t, a)
        }
    }), k.availableTools.ga = M, _satellite.init({
        tools: {
            "85875f787786937dff818ca3946f9b71": {
                engine: "sc",
                loadOn: "pagebottom",
                account: "aarpglobal",
                euCookie: !1,
                sCodeURL: "2755d5b313381183ec8ddef72ce582193e25b5a4/s-code-contents-1e50a9aa92c1de3248394f72322d957ff039e607.js",
                renameS: "s",
                initVars: {
                    charSet: "UTF-8",
                    currencyCode: "USD",
                    trackingServer: "metrics.aarp.org",
                    trackingServerSecure: "smetrics.aarp.org",
                    trackInlineStats: !1,
                    trackDownloadLinks: !0,
                    linkDownloadFileTypes: "avi,css,csv,doc,docx,eps,exe,jpg,js,m4v,mov,mp3,pdf,png,ppt,pptx,rar,svg,tab,txt,vsd,vxd,wav,wma,wmv,xls,xlsx,xml,zip",
                    trackExternalLinks: !0,
                    linkInternalFilters: "aarp.org,http://jaybirdgroup.net,javascript:,mailto:,tel:",
                    linkLeaveQueryString: !1,
                    dynamicVariablePrefix: "D="
                },
                skipSetAccount: !0,
                customInit: function() {
                    if (new RegExp("(" + ["caregiverkindness.aarp.org", "advantages.aarp.org", "lifereimagined.aarp.org", "aarpcares.aarp.org", "www.mybrainsolutions.com", "event.on24.com", "aarp.brainhq.com", "secure2.convio.net", "dating.aarp.org", "aarptek.aarp.org", "www.aarpdescuentos.com", "search.aarp.org", "search-pre.aarp.org"].join(")|(") + ")", "i").test(location.host)) return !1
                }
            },
            "9d387c91fef6bae38e0346c1d25e686ea158b5ab": {
                engine: "tnt",
                mboxURL: "2755d5b313381183ec8ddef72ce582193e25b5a4/mbox-contents-9d387c91fef6bae38e0346c1d25e686ea158b5ab.js",
                loadSync: !0,
                pageParams: {
                    affinityCategory: "%affinity category%"
                }
            },
            aa7b2983b916392218422d2bd2e437c694fffd39: {
                engine: "visitor_id",
                loadOn: "pagetop",
                name: "VisitorID",
                mcOrgId: "AA853BC75245B3CE0A490D4D@AdobeOrg",
                autoRequest: !0,
                initVars: {},
                customerIDs: {
                    aarpkxid: {
                        id: "%DataLayer-ANA-KONNEXID-Taxonomy-[userdata]%",
                        authState: "AUTHENTICATED"
                    },
                    adsf77ad7: {
                        id: "%DataLayer-ANA-KONNEXID-Taxonomy-[userdata]%",
                        authState: "AUTHENTICATED"
                    },
                    dsouid: {
                        id: "%DataLayer-ANA-MIDID-Taxonomy-[userdata]%",
                        authState: "AUTHENTICATED"
                    },
                    encparam: {
                        id: "%encparam_uid%",
                        authState: "AUTHENTICATED"
                    }
                }
            }
        },
        pageLoadRules: [{
            name: " 06232018 Digital Marketing The Girlfriend Outbrain ",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script data-obct type=\"text/javascript\">\n/** DO NOT MODIFY THIS CODE**/\n!function(_window, _document) {\nvar OB_ADV_ID='00b0d91fea41c4b1db6f9822c0399f54d7';\nif (_window.obApi) { return; }\nvar api = _window.obApi = function() {api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);};api.version = '1.0';api.loaded = true;api.marketerId = OB_ADV_ID;api.queue = [];var tag = _document.createElement('script');tag.async = true;tag.src = '//amplify.outbrain.com/cp/obtp.js';tag.type = 'text/javascript';var script = _document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag, script);}(window, document);\nobApi('track', 'PAGE_VIEW');\n</script>"
                }]
            }],
            conditions: [function() {
                var e = !1;
                switch (t.location.href.replace(/https?:[/][/]/, "")) {
                    case "thegirlfriend.com/subscription-confirmed/":
                    case "pages.email.aarp.org/page.aspx?QS=773ed3059447707df90072f26c9f62a23967b12f768e0d6dea038862459bc191":
                        e = !0
                }
                return e
            }],
            event: "pagebottom"
        }, {
            name: " EG Digital Marketing The Girlfriend Confirmed Opt-In 09082018",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59a5b61064746d52050014e2.html",
                        data: []
                    }, {
                        src: "satellite-5adf6bfb64746d020900dc40.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/subscription-confirmed\//i]
                },
                subdomains: {
                    include: [/thegirlfriend.com/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "01012018.MKTG.GIVSWPS17.REGS",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59f89c9e64746d6ff2009a3a.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), "DSO-REG-CONFIRM-GIVSWPS17")
            }],
            event: "pagebottom"
        }, {
            name: "01312017 EG SMM Facebook Universal",
            trigger: [{
                engine: "sc",
                command: "customSetup",
                arguments: [function() {}]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-569f40c464746d2db2000205.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: ["https://assets.aarp.org/aarp.org_/elvis/", /\/(mem|member)\//i, /emo=email_verification/i, /((online-community\/register\/finalize.action)|(applications\/user\/register\/confirmation)|(online-community\/register\/membershipRegistrationSuccess.action)|(\/online-community\/register\/membershipSuccess.action)|(\/online-community\/register\/membershipRegister.action))/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "02/01/2018 Work Jobs Sweepstakes",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5a1c619464746d108b000820.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-WORSWPS17$)|(^DSO-REG-CONFIRM-WORSWPS17[M|B|D]?$)/i)
            }, function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed (as)"), /^TRUE$/i)
            }],
            event: "pagebottom"
        }, {
            name: "02272018 CSN TagSoyaAARPPR",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type='text/javascript'>                                      \nvar ebRand = Math.random()+'';\nebRand = ebRand * 1000000;\n//<![CDATA[ \ndocument.write('<scr'+'ipt src=\"HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=985899&amp;rnd=' + ebRand + '\"></scr' + 'ipt>');\n//]]>\n</script>\n<noscript>\n<img width=\"1\" height=\"1\" style=\"border:0\" src=\"HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID=985899&amp;ns=1\"/>\n</noscript>"
                }]
            }],
            scope: {
                subdomains: {
                    include: [/(www.soyaarppr.org|www-s.soyaarppr.org)/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "03/01/2019 Travel Sweepstakes",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5c746c3f64746d44d2001fc0.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-TRASWPS19$)|(^DSO-REG-CONFIRM-TRASWPS19[T|B|D]?$)/i)
            }, function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed (as)"), /^TRUE$/i)
            }],
            event: "pagebottom"
        }, {
            name: "03/31/2018 Travel Sweepstakes",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5a5e580b64746d1cf4002270.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-TRASWPS18$)|(^DSO-REG-CONFIRM-TRASWPS18[T|B|D]?$)/i)
            }, function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed (as)"), /^TRUE$/i)
            }],
            event: "pagebottom"
        }, {
            name: "03302017 Staying Sharp Facebook-Login/Registration",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-575acd2064746d64df010183.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/online-community/loginform.action?", /((\/online-community\/register\/index.action)|(\/applications\/user\/register))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("promo"), /(SS-GAMES)|(SM-SS)|(SS-BETA)|(SS-EMPLOYEE)|(BTABND)/i)
            }],
            event: "windowload"
        }, {
            name: "03302017 Staying Sharp Facebook-braingames1",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<!-- Facebook Pixel Code -->\n<script>\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\nn.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\ndocument,'script','https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '829917943733816');\nfbq('track', 'PageView');\n</script>\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\nsrc=\"https://www.facebook.com/tr?id=829917943733816&ev=PageView&noscript=1\"\n/></noscript>\n<!-- DO NOT MODIFY -->\n<!-- End Facebook Pixel Code -->"
                }]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-575ae22264746d1e2c0111e4.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: ["braingames1.aarp.org"]
                }
            },
            event: "windowload"
        }, {
            name: "03302017 Staying Sharp Facebook-mybrainsolutions",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5756d40f64746d2dfc00ebd5.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/MyBrain\/MyBrainAssessment.aspx/i, /\/html5\/2\/[0-9]{2}.php/i]
                },
                subdomains: {
                    include: ["mybrainsolutions.com"]
                }
            },
            event: "windowload"
        }, {
            name: "04012017.TRASWPS17.MKTG",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5876646a64746d602f008a9a.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-TECSWPS16M$)|(^DSO-REG-CONFIRM-TRASWPS17$)|(^DSO-REG-CONFIRM-TRASWPS17[T|B|D]?$)/i)
            }],
            event: "pagebottom"
        }, {
            name: "06/30/2018 Health Sweepstakes",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5ace237c64746d073b001747.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                },
                subdomains: {
                    include: [/(login.aarp.org|login-s.aarp.org|login-pi.aarp.org|login-qa.aarp.org|secure.aarp.org|secure-pi.aarp.org)/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-HEASWPS18[G|B|H]?$)/i)
            }, function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed (as)"), /^TRUE$/i)
            }],
            event: "pagebottom"
        }, {
            name: "06012017 MKTG HasOffers HEASWPS17",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<!-- Offer Conversion: 2017 Health Sweepstakes - CPA -->\n<iframe src="https://aarp.go2cloud.org/aff_l?offer_id=65" scrolling="no" frameborder="0" width="1" height="1"></iframe>\n<!-- // End Offer Conversion -->'
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                },
                subdomains: {
                    include: [/(login.aarp.org|login-s.aarp.org|secure.aarp.org|secure-pi.aarp.org)/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-HEASWPS17$)|(^DSO-REG-CONFIRM-HEASWPS17[H|B|D]?$)/i)
            }],
            event: "pagebottom"
        }, {
            name: "06012017 MKTG R4G2KGasSweeps",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59159d7364746d3299003e16.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                },
                subdomains: {
                    include: [/(login.aarp.org|login-s.aarp.org|login-pi.aarp.org|login-qa.aarp.org|secure.aarp.org|secure-pi.aarp.org)/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-R4G-2017GAS$)/i)
            }],
            event: "pagebottom"
        }, {
            name: "08/31/2018 LA Galaxy Sweeps Registration Confirmation",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b15525564746d207f0064e5.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                },
                subdomains: {
                    include: [/(login.aarp.org|login-s.aarp.org|login-pi.aarp.org|login-qa.aarp.org|secure.aarp.org|secure-pi.aarp.org)/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), "DSO-REG-CONFIRM-SOCSWPS18")
            }, function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed (as)"), /^TRUE$/i)
            }],
            event: "pagebottom"
        }, {
            name: "08132017 MEM HHM DFA",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-57d3123a64746d78b200cb2f.js"
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: ["soyaarp.org"]
                }
            },
            event: "windowload"
        }, {
            name: "08132017 MEM HHM FACEBOOK",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-57d7036c64746d0608000880.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: ["soyaarp.org"]
                }
            },
            event: "windowload"
        }, {
            name: "09/30/2018 Foundation Sweepstakes Registrations",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b3bb28064746d1adb006473.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-FOUSWPS18$)|(^DSO-REG-CONFIRM-FOUSWPS18[C|B|D]?$)/i)
            }, function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed (as)"), /^TRUE$/i)
            }],
            event: "pagebottom"
        }, {
            name: "10/17/2017 Retirement Sweepstakes",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-596f9b2364746d0ba500dbaf.html",
                        data: []
                    }, {
                        src: "satellite-598c9cbd64746d066f001f6e.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-RETSWPS17$)|(^DSO-REG-CONFIRM-RETSWPS17[M|B|D]?$)/i)
            }, function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed (as)"), /^TRUE$/i)
            }],
            event: "pagebottom"
        }, {
            name: "10/31/2018 Retirement Sweeps Registration Confirmation",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b7ef8ad64746d5fa10041d8.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-RETSWPS18$)|(^DSO-REG-CONFIRM-RETSWPS18[M|B|D]?$)/i)
            }, function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed (as)"), /^TRUE$/i)
            }],
            event: "pagebottom"
        }, {
            name: "10272015 outbrain",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-564a963564746d6ff6000788.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: ["https://assets.aarp.org/aarp.org_/elvis/", /\/(mem|member)\/(((join|renew)\/expressconfirm)|((join|renew)(confirm|billing)))($|[^a-z])/i, /\/mem\/(join\/express)($|[^a-z])/i, /(\/paymentprofile\/payment)/i, /(\/signup\/displayCourseSelection(.*))/i]
                },
                domains: [/aarpdriversafety\.org$/i, /aarp\.org$/i]
            },
            conditions: [function() {
                return "appsec:/mem/renew/billing" !== _satellite.getVar("AA-ANG: Page Name")
            }],
            event: "domready"
        }, {
            name: "10272015 outbrain - Mem Billing",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5ae77c1464746d7490000b38.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/(join|renew|(join\/express|(join\/sandbox)|(renew\/sandbox)))\/billing($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "10272015 outbrain - Mem Confirmation ",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5aa69d3264746d762f002a76.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/(mem|member)\/(((join|renew)\/expressconfirm)|((join|renew)confirm))($|[^a-z])/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/(join|renew|erenew|(join\/sandbox|renew\/sandbox))\/(confirmation|express\/confirmation)($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "12/31/2018 Holiday Sweeps Registration Confirmation",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5bc8dcd564746d6b8600094c.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-HOLSWPS18$)|(^DSO-REG-CONFIRM-HOLSWPS18[M|B|D]?$)/i)
            }, function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed (as)"), /^TRUE$/i)
            }],
            event: "pagebottom"
        }, {
            name: "12162016 MTKG R4GHOLIDAYSWEEPS16",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-58264ba164746d05e6002403.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), "DSO-REG-CONFIRM-R4G")
            }],
            event: "pagebottom"
        }, {
            name: "123117 ADS Web Retargeting SDTEK Pixel Request",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5970d42664746d6e6c00e659.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/findaworkshop/i]
                },
                subdomains: {
                    include: ["campaigns.aarp.org"]
                }
            },
            event: "pagebottom"
        }, {
            name: "12312017 DM Health Digimag HO",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-58c7e0ef64746d2cca005358.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/online-community\/register\/join.action/i]
                },
                subdomains: {
                    include: [/(login.aarp.org|login-s.aarp.org|login-pi.aarp.org)/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(^DSO-REG-CONFIRM-HEALTHEXP$)/i)
            }],
            event: "pagebottom"
        }, {
            name: "12312017 Membership Pinterest Universal",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5994695864746d6336002921.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: [/\/(mem|member)\/((join|renew)(billing|confirm))($|[^a-z])/i, /\/(mem|member)\/join\/(express|expressconfirm)($|[^a-z])/i, /(\/paymentprofile\/payment)/i]
                },
                domains: [/aarp\.org$/i]
            },
            conditions: [function() {
                var e = _satellite.getVar("AA-ANG: Page Name");
                return "appsec:/mem/renew/billing" !== e && "appsec:/mem/renew/sandbox/billing" !== e
            }],
            event: "domready"
        }, {
            name: "12312017 Pixel ID: 167789046887901",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5976560764746d0131003d9b.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                var e = t.location.href.split("?")[0].trim().replace(/https?:[/][/]/, "").replace(/[/]$/, ""),
                    a = !1;
                if (e.indexOf("aarpdriversafety.org/signup/displayGifterReceipt.html") > -1) return a = !1;
                if (e.indexOf("aarpdriversafety.org/signup/displayAdditionalInformation.html") > -1) return a = !1;
                if (e.indexOf("www.aarpdriversafety.org") > -1) return a = !0;
                if (e.indexOf("campaigns.aarp.org/findaworkshop") > -1) return a = !0;
                switch (e) {
                    case "campaigns.aarp.org/smartdriveronline-ODSAW":
                    case "campaigns.aarp.org/smartdriversocial-ODSAW":
                    case "campaigns.aarp.org/smartdriveronline-gift":
                    case "campaigns.aarp.org/smartdriversocial-gift":
                    case "campaigns.aarp.org/smartdriveronline-giftpromo":
                    case "campaigns.aarp.org/smartdriversocial-giftpromo":
                    case "campaigns.aarp.org/smartdriveronlineroadsidesafety":
                    case "campaigns.aarp.org/smartdriversocialroadsidesafety":
                    case "campaigns.aarp.org/smartdriversavings":
                    case "campaigns.aarp.org/smartdriveronlineblackhistorymonth":
                    case "campaigns.aarp.org/smartdriversocialblackhistorymonth":
                    case "campaigns.aarp.org/smartdriveronline-memberappreciation":
                    case "campaigns.aarp.org/smartdriversocial-memberappreciation":
                    case "campaigns.aarp.org/smartdriveronline-nationalsafetymonth":
                    case "campaigns.aarp.org/smartdriversocial-nationalsafetymonth":
                    case "campaigns.aarp.org/smartdriveronline-anniversary":
                    case "campaigns.aarp.org/smartdriversocial-anniversary":
                    case "campaigns.aarp.org/smartdriveronline-summersale":
                    case "campaigns.aarp.org/smartdriversocial-summersale":
                    case "campaigns.aarp.org/smartdriveronline-veterans1":
                    case "campaigns.aarp.org/smartdriversocial-veterans2":
                    case "campaigns.aarp.org/smartdriveronline-holidaysale":
                    case "campaigns.aarp.org/smartdriversocial-holidaysale":
                        a = !0
                }
                return a
            }],
            event: "pagebottom"
        }, {
            name: "160528 Confirmation Renew",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\ntry{\nvar paymentAmt = _satellite.getVar(\'AA-ANG: Order Dollar Amount\');\nvar rand = Math.random();\nvar a = rand * 100000000000;\nvar tc_data={\nsite_region :"US",\nsite_currency:"USD",\npage_type:"Renew Conversion Flow",\npage_section_name :"Renew - Confirmation", \npage_category_name :"", \npage_subcategory_name :"", \norder_id : Math.round(a), // unique conversion id\norder_subtotal : paymentAmt, // subtotal amount of conversion\norder_total :paymentAmt, // total amount of conversion\norder_currency : "USD"\n};\n\n(function(a,b,c,d){\n\n a="//track.tcpxl.co/targetclose.js";\n\n b=document;c=\'script\';d=b.createElement(c);d.src=a;d.type=\'text/javascript\';\n d.async=true;\n\n a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);\n\n })();\n}catch(e){}\n</script>'
                }]
            }],
            scope: {
                URI: {
                    include: [/\/mem\/((join|renew)confirm)($|[^a-z])/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /DSO_MEM_(JOIN|RENEW|ERENEW)_CONFIRM($|[^a-z])/i)
            }, function() {
                return _satellite.textMatch(_satellite.getVar("AT: Payment Type (Membership)"), "CREDIT_CARD")
            }],
            event: "pagebottom"
        }, {
            name: "160528 Join Application",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5567001232336100178b0000.js"
                    }]
                }]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59f7630264746d034b008933.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/(mem|member)\/join($|[^a-z])/i],
                    exclude: [/\/mem\/join\/express($|[^a-z])/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "160528 Join Application Staying Sharp",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-57176e6164746d7cd8000504.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/index.action)(\/applications\/user\/register))|/i]
                },
                subdomains: {
                    include: [/(login.aarp.org|login-s.aarp.org|secure-pi.aarp.org|secure.aarp.org)/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("promo"), "SM-SS")
            }],
            event: "windowload"
        }, {
            name: "160528 Join Billing",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5567001232336100179d0000.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/(join|(join\/express)|(join\/sandbox))\/billing($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "160528 Renew Application",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5cb0a93064746d546e0039b4.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/(mem|member)\/renew($|[^a-z])/i],
                    exclude: [/\/mem\/renew\/express($|[^a-z])/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "3rd Party: AARP Global Comscore Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-58d3f6cb64746d397500a091.html",
                        data: []
                    }]
                }]
            }],
            event: "pagebottom"
        }, {
            name: "3rd Party: Moveable Ink",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5966c1ac64746d0b9500b2da.js"
                    }]
                }]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b0da72d64746d3c220035d2.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: [/\/(mem|member)\/((join|renew)(billing))($|[^a-z])/i, /\/mem\/(join\/express)($|[^a-z])/i, /(\/paymentprofile\/payment)/i]
                },
                domains: [/aarp\.org$/i]
            },
            conditions: [function() {
                return "appsec:/mem/renew/billing" !== _satellite.getVar("AA-ANG: Page Name")
            }],
            event: "domready"
        }, {
            name: "3rd Party: Moveable Ink The Girlfriend",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5acb834b64746d0209005e4a.js"
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: [/thegirlfriend.com/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "4S Member Pwd In Flow Test - Renew",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5ba1628b64746d25a9002053.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), "appsec:/mem/renew/sandbox/billing")
            }],
            event: "domready"
        }, {
            name: "4S Membership 160528 Renew - Billing",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-556700123233610017d70000.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/(mem|member)\/renewbilling($|[^a-z])/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "4S Membership 160528 Renew - Find Record",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-556700123233610017b10000.js"
                    }]
                }]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59f776ef64746d3b08000a2d.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/mem/renew($|[^a-z])"]
                }
            },
            event: "pagebottom"
        }, {
            name: "4S Membership Confirmation (Join - Bill Me)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar10: "%ANA:PageName%",
                    eVar18: "%ANA: Groupings (metaS18)%",
                    eVar207: "%ANA: Konnex_ID%",
                    eVar33: "%ANA: Publisher Date%",
                    eVar5: "%AA-ANG: intcmp steps%",
                    eVar60: "%AA-ANG: CampaignId%",
                    eVar9: "%ANA:e9VisitorType%",
                    prop1: "%ANA: Section%",
                    prop11: "%ANA: Language%",
                    prop13: "%ANA: Meta Data Prop 1 (Subject 1)%",
                    prop14: "%ANA: MetaData Prop 2 (Subject 2)%",
                    prop15: "%ANA: Meta Data Prop 3 (Subject 3)%",
                    prop18: "%ANA: Groupings (metaS18)%",
                    prop2: "%ANA:TaxonomyA%",
                    prop20: "%ANA: Publisher%",
                    prop27: "%ANA:Hierarchy2Levels%",
                    prop28: "%ANA:Hierarchy3Levels%",
                    prop29: "%ANA:ParameterString%",
                    prop3: "%ANA:TaxonomyB%",
                    prop30: "%ANA:PageTitle%",
                    prop34: "%ANA: PGID%",
                    prop35: "%ANA: Author%",
                    prop4: "%ANA:Topic%",
                    prop43: "%ANA: Portfolio list (metaS43)%",
                    prop5: "%ANA:Subtopic%",
                    prop50: "%ANA:PageName%",
                    prop6: "%ANA:Vendor%",
                    prop68: "%ANA: Konnex_ID%",
                    channel: "%ANA: Section%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function() {}]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<div class="mboxDefault" id="memBillMeConfirm"></div>'
                }]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-59554ad764746d6e69004fab.js"
                    }, {
                        src: "satellite-59554ad764746d6e69004fac.js"
                    }, {
                        src: "satellite-59555c8064746d6ae00111d0.js"
                    }, {
                        src: "satellite-59554ad764746d6e69004fae.js"
                    }]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5bef381764746d3e1600c1af.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AT: Payment Type (Membership)"), "BILL_ME")
            }, function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/join|(join\/sandbox)\/confirmation/i)
            }],
            event: "pagebottom"
        }, {
            name: "4S Membership Confirmation (Join/Renew/KISS - Credit card & Echeck)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar10: "%AA-ANG: Page Name%",
                    eVar13: "%AA-ANG: Registration Type%",
                    eVar16: "%AA-ANG: Order Dollar Amount%",
                    eVar18: "%ANA: Groupings (metaS18)%",
                    eVar207: "%ANA: Konnex_ID%",
                    eVar223: "%AA-ANG: Member ID%",
                    eVar33: "%ANA: Publisher Date%",
                    eVar5: "%AA-ANG: intcmp steps%",
                    eVar60: "%AA-ANG: CampaignId%",
                    eVar9: "%ANA:e9VisitorType%",
                    prop1: "%ANA: Section%",
                    prop11: "%ANA: Language%",
                    prop13: "%ANA: Meta Data Prop 1 (Subject 1)%",
                    prop14: "%ANA: MetaData Prop 2 (Subject 2)%",
                    prop15: "%ANA: Meta Data Prop 3 (Subject 3)%",
                    prop18: "%ANA: Groupings (metaS18)%",
                    prop2: "%ANA:TaxonomyA%",
                    prop20: "%ANA: Publisher%",
                    prop27: "%ANA:Hierarchy2Levels%",
                    prop28: "%ANA:Hierarchy3Levels%",
                    prop29: "%ANA:ParameterString%",
                    prop3: "%ANA:TaxonomyB%",
                    prop30: "%ANA:PageTitle%",
                    prop34: "%ANA: PGID%",
                    prop35: "%ANA: Author%",
                    prop4: "%ANA:Topic%",
                    prop43: "%ANA: Portfolio list (metaS43)%",
                    prop5: "%ANA:Subtopic%",
                    prop50: "%ANA:PageName%",
                    prop6: "%ANA:Vendor%",
                    prop68: "%ANA: Konnex_ID%",
                    channel: "%ANA: Section%"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event10", "event8"]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    t.pageName = _satellite.getVar("AA-ANG: Page Name")
                }]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5951a68564746d6e65002804.js"
                    }, {
                        src: "satellite-5951a68564746d6e65002806.js"
                    }, {
                        src: "satellite-5951a68564746d6e65002808.js"
                    }]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5951a68564746d6e65002800.js"
                    }, {
                        src: "satellite-5951a68564746d6e65002802.js"
                    }, {
                        src: "satellite-5a81c04164746d4f0c000554.js"
                    }, {
                        src: "satellite-5b05e52764746d3c1f00031f.js"
                    }]
                }]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5951a68564746d6e650027fe.html",
                        data: []
                    }, {
                        src: "satellite-5951a68564746d6e65002801.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                return "BILL_ME" !== _satellite.getVar("AT: Payment Type (Membership)")
            }, function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/(join|renew|ewinback|erenew|join\/sandbox|renew\/sandbox)\/(confirmation|express\/confirmation)($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "4S Membership DFA Renew_Billing - Feb 09 2015 - MIV",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-54d554b16531660019240100.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/(mem|member)\/renewbilling($|[^a-z])/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "4S Membership DFA Renew_FindMe - Feb 09 2015 - MIV",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-54d550573061660016040000.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/(mem|member)/renew($|[^a-z])"]
                }
            },
            conditions: [function() {
                var e = _satellite.getVar("AA-ANG: Page Name");
                return !("appsec:/mem/renew/sandbox/billing" == e || "appsec:/mem/renew/billing" == e)
            }],
            event: "pagebottom"
        }, {
            name: "4S Membership Exit Offer JS",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div class="exitOffer">\n    <script>\n      if(!window.jQuery) {\n         var script = document.createElement(\'script\');\n         script.type = "text/javascript";\n         script.src = "https://code.jquery.com/jquery-3.2.1.min.js";\n         document.getElementsByTagName(\'head\')[0].appendChild(script);\n      }\n    </script>\n\n    <style type="text/css" media="screen">\n      body.modal-open{overflow:hidden}.offer-header{background-color:#000;font-size:22px;font-weight:700;line-height:2;letter-spacing:.2px;height:43px;color:#fff}.offer-title{font-size:38px;font-weight:700;line-height:1.26;color:#000}.top15-padding{padding-top:15px}.bottom15-padding{padding-bottom:15px}span#offer-close{color:#fff;opacity:1;position:relative;right:10px;top:10px}.premium-name{font-size:18px;letter-spacing:.2px;color:#333}#exit_offer_content{padding:0 20px}img.exitOffer-image{max-height:145px;max-width:321px}.btn .pixel-position-text{top:0!important}   \n    </style>\n    <!-- Modal -->\n    <div id="exit_offer_popup" data-formelementid="MEM-BTN-NAV-EO-OUTSIDE-MODAL" class="exit_offer_popup modal fade" role="dialog" data-backdrop="true" data-show-offer="true" style="text-align: center;">\n        <div class="modal-dialog modal-md" style="width: 644px; margin-top: 10%;">\n            <!-- Modal content-->\n            <div class="modal-content">\n                <div class="text-center bottom15-padding">\n                    <span id="offer-close" class="icon-close2 close" data-dismiss="modal" data-formelementid="MEM-BTN-NAV-EO-EXIT"></span>\n                    <div class="offer-header">\n                        WHILE SUPPLIES LAST!\n                    </div>\n                    <br>\n                    <div class="offer-title">\n                    </div>\n                    <div id="exit_offer_content">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>'
                }]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-598e0cb164746d6deb0100c8.js"
                    }]
                }]
            }],
            conditions: [function() {
                var e = _satellite.getVar("AA-ANG: Page Name"),
                    t = !!("undefined" != typeof offers && offers.exitOffers && offers.exitOffers.length > 0),
                    a = getUrlVar("eo");
                if (e && (t || "t" === a)) switch (!0) {
                    case "appsec:/mem/join/application" === e:
                        return _satellite.setVar("pageName", "join_page_1"), !0;
                    case "appsec:/mem/join/billing" === e:
                    case "appsec:/mem/renew/billing" === e:
                        return _satellite.setVar("pageName", "renew_page_2"), !0
                }
                return !1
            }, function() {
                return -1 !== ["Chrome", "Firefox", "Safari", "Opera", "OmniWeb"].indexOf(_satellite.browserInfo.browser)
            }],
            event: "pagebottom"
        }, {
            name: "4S Membership Join Confirmation",
            trigger: [{
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5a148be664746d0bbd00c017.js"
                    }]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5bef375664746d6151005a8f.js"
                    }, {
                        src: "satellite-5a21a26a64746d133d003e43.js"
                    }]
                }]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5bfd983764746d019e00e197.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /(appsec:\/mem\/(join|(join\/sandbox))\/(confirmation|express\/confirmation))($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "4S Membership Renew Confirmation",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5bef37cb64746d4c710036c2.js"
                    }]
                }]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59f7a4e364746d51aa0056c1.html",
                        data: []
                    }, {
                        src: "satellite-5a14302a64746d3511000697.html",
                        data: []
                    }, {
                        src: "satellite-5bfd904d64746d19e600aa9f.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["\\/(mem|member)\\/(renewconfirm)($|[^a-z])"]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/(renew|erenew|renew\/sandbox)\/confirmation($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "AARP - 2018 Brand Campaign Caregiving Landing Page_Xaxis_APN DSP Conversion Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b1035d864746d2e99000f16.html",
                        data: []
                    }, {
                        src: "satellite-5b1804ee64746d59ab000074.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/caregiving\/($|[^a-z])/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "AARP - 2018 Brand Campaign Healthy Living Landing Page_Xaxis_APN DSP Conversion Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b0ee6f164746d45c4002ff9.html",
                        data: []
                    }, {
                        src: "satellite-5b17fbf364746d5ad2000043.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/health\/healthy-living\/($|[^a-z])/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "AARP - 2018 Brand Campaign Money Landing Page_Xaxis_APN DSP Conversion Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b1015dd64746d4a5f0004aa.html",
                        data: []
                    }, {
                        src: "satellite-5b17fefe64746d2988000051.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/money\/($|[^a-z])/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "AARP - 2018 Brand Campaign Work Landing Page_Xaxis_APN DSP Conversion Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b0dae9364746d507a002403.html",
                        data: []
                    }, {
                        src: "satellite-5b17fa2b64746d59b100000f.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/work\/($|[^a-z])/i]
                },
                domains: [/aarp\.org$/i],
                protocols: [/https:/i]
            },
            event: "pagebottom"
        }, {
            name: "AARP - 2018 Hispanic Campaign Landing Page_Xaxis_APN DSP Conversion Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b10441b64746d679c001401.html",
                        data: []
                    }, {
                        src: "satellite-5b18215e64746d3e1300035f.html",
                        data: []
                    }, {
                        src: "satellite-5b1823cd64746d59ae0001fe.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: [/soyaarp.org/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "AARP DriverSafety Site Retargeting Campaign 12312017",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-59515c7664746d6ae000eaac.js"
                    }]
                }]
            }],
            conditions: [function() {
                for (var a = [], r = e.location.search.substring(1).split("&"), n = r.length - 1; n >= 0; n--) {
                    var i = r[n].split("=");
                    i.length > 1 && a.push(i[0])
                }
                var o = t.location.href.replace(/https?:[/][/]/, ""),
                    s = /www.|test05./i,
                    c = (o = o.replace(s, function() {
                        return ""
                    })).split("?").length > 1 ? o.split("?")[0] : o,
                    l = !1,
                    d = !0,
                    u = "aarpdriversafety.org/signup/displayAdditionalInformation.html" == c || "aarpdriversafety.org/signup/displayGifterReceipt.html" == c;
                return "aarpdriversafety.org/georgia/" == c || "aarpdriversafety.org/newyork/" == c || "aarpdriversafety.org/minnesota/" == c || "aarpdriversafety.org/newjersey/" == c || "aarpdriversafety.org/california/" == c || "aarpdriversafety.org/florida/" == c || "aarpdriversafety.org/illinois/" == c || "aarpdriversafety.org/louisiana/" == c || "aarpdriversafety.org/pennsylvania/" == c || "aarpdriversafety.org/texas/" == c || "aarpdriversafety.org/washington/" == c || "aarpdriversafety.org/smartdrivers/" == c || "aarpdriversafety.org/defensivedriving/" == c || "aarp.org/auto/" == c || "aarp.org/auto/car-maintenance-safety/" == c || "aarp.org/auto/driver-safety/" == c || "aarp.org/auto/driver-safety/driving-tips/" == c || "aarp.org/auto/driver-safety/driving-assessment/" == c || "aarp.org/auto/driver-safety/driving-skills-refresh/" == c || ("campaigns.aarp.org/smartdriveronlinedda/" == c || "campaigns.aarp.org/smartdriversocialdda/" == c || "campaigns.aarp.org/smartdriveronline-freegift/" == c || "campaigns.aarp.org/smartdriversocial-freegift/" == c) || (["WST", "LANGUAGE", "NEWDESIGN", "DELPAYMENTSERVICEID", "CUSTOMPAYMENTSERVICEID", "PAYMENTSERVICEID", "SIGNATUREPAYMENTSERVICEID"].forEach(function(e) {
                    a.includes(e) || (d = !1)
                }), d && u && (l = !0), l)
            }],
            event: "pagebottom"
        }, {
            name: "AARP_2018_ECP Campaign_Long Island Market Landing Page_APN DSP Conversion  Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b1074e764746d50800045ed.html",
                        data: []
                    }, {
                        src: "satellite-5b182c4b64746d3e0d0002c2.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/long-island-ny\//i]
                },
                subdomains: {
                    include: [/local.aarp.org/i]
                },
                protocols: [/https:/i]
            },
            event: "pagebottom"
        }, {
            name: "AARP_2018_ECP Campaign_Philly Market Landing Page_APN DSP Conversion Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b10780d64746d2e99001248.html",
                        data: []
                    }, {
                        src: "satellite-5b182d5464746d5ad8000220.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/philadelphia-pa\//i]
                },
                subdomains: {
                    include: [/local.aarp.org/i]
                },
                protocols: [/https:/i]
            },
            event: "pagebottom"
        }, {
            name: "AARP_2018_ECP Campaign_San Antonio Market Landing Page_APN DSP Conversion Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b107ba864746d609e0038ca.html",
                        data: []
                    }, {
                        src: "satellite-5b182e0864746d59ab0001a0.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/san-antonio-tx\/($|[^a-z])/i]
                },
                subdomains: {
                    include: [/local.aarp.org/i]
                },
                protocols: [/https:/i]
            },
            event: "pagebottom"
        }, {
            name: "AARP_2018_ECP Campaign_Sioux Falls Market Landing Page_APN DSP Conversion  Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b11692a64746d22d10006be.html",
                        data: []
                    }, {
                        src: "satellite-5b1a9afd64746d0bc600030a.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/sioux-falls-sd\/($)/i]
                },
                subdomains: {
                    include: [/local.aarp.org/i]
                },
                protocols: [/https:/i]
            },
            event: "pagebottom"
        }, {
            name: "ADS - elearning.aarp.org - Smart DriverTEK Online Workshop",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5c0cd0c364746d416301277c.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/pages\/course\/CourseMaterial\.aspx\?courseId=275/i]
                },
                subdomains: {
                    include: [/elearning\.aarp\.org/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ADS Facebook Pixel 12312017- Cvent Pixel Request",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<!-- Facebook Pixel Code -->\n<script>\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '167789046887901');\nfbq('track', 'PageView');\n</script>\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\nsrc=\"https://www.facebook.com/tr?id=167789046887901&ev=PageView&noscript=1\"\n/></noscript>\n<!-- End Facebook Pixel Code -->"
                }]
            }],
            conditions: [function() {
                var e = t.location.href.replace(/https?:[/][/]/, ""),
                    a = !1,
                    r = e.split("?").length > 1 ? e.split("?")[0] : e;
                switch (r.indexOf("#") > -1 && (r = r.split("#")[0]), r) {
                    case "aarp.cvent.com/events/aarp-smart-drivertek-workshops-az-ca-ga-mn-/event-summary-a15d274e37c442568c53764e693e7917.aspx":
                    case "aarp.cvent.com/events/aarp-smart-drivertek-workshops-az-ca-ga-ky-mn-/event-summary-a15d274e37c442568c53764e693e7917.aspx":
                    case "aarp.cvent.com/events/aarp-smart-drivertek-workshops-fl-pa-tx-/event-summary-a9774cde432c46aa8e45f6dcb76c4de8.aspx":
                    case "aarp.cvent.com/events/aarp-smart-drivertek-workshops-ny-/event-summary-6175f8da7fbe4c748ea249c4caa02bcf.aspx":
                    case "campaigns.aarp.org/smartdriveronline-distracteddriving/":
                    case "campaigns.aarp.org/smartdriversocial-distracteddriving/":
                    case "www.aarp.org/auto/":
                    case "www.aarp.org/auto/car-maintenance-safety/":
                    case "www.aarp.org/auto/driver-safety/":
                    case "www.aarp.org/auto/driver-safety/driving-tips/":
                    case "www.aarp.org/auto/driver-safety/driving-assessment/":
                    case "www.aarp.org/auto/driver-safety/driving-skills-refresh/":
                        a = !0
                }
                return a
            }],
            event: "pagebottom"
        }, {
            name: "ADS Pixel 12312017",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59bfeace64746d2cff0090db.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                var e = t.location.href.replace(/https?:[/][/]/, ""),
                    a = e;
                e.indexOf("#") > -1 && (a = e.split("#")[0]);
                var r = !1;
                switch (a) {
                    case "aarp.cvent.com/events/aarp-smart-drivertek-workshops-az-ca-ga-ky-mn-/event-summary-a15d274e37c442568c53764e693e7917.aspx":
                    case "aarp.cvent.com/events/aarp-smart-drivertek-workshops-az-ca-ga-mn-/event-summary-a15d274e37c442568c53764e693e7917.aspx":
                    case "aarp.cvent.com/events/aarp-smart-drivertek-workshops-fl-pa-tx-/event-summary-a9774cde432c46aa8e45f6dcb76c4de8.aspx":
                    case "aarp.cvent.com/events/aarp-smart-drivertek-workshops-ny-/event-summary-6175f8da7fbe4c748ea249c4caa02bcf.aspx":
                        r = !0
                }
                return r
            }],
            event: "pagebottom"
        }, {
            name: "ADS Web Retargeting SDTEK CONVERSION Pixel Request 123117",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59cbf00464746d6b7a0059bd.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/events/Registrations/MyRegistration.aspx"]
                },
                subdomains: {
                    include: ["aarp.cvent.com"]
                }
            },
            event: "pagebottom"
        }, {
            name: "ADS_Google_Analytics_GST",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b34fb9664746d3f8c0070ed.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                domains: [/aarpdriversafety\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ANA:  Modal Tracking on Forms",
            trigger: [{
                engine: "sc",
                command: "customSetup",
                arguments: [function() {
                    e.location.href.indexOf("/applications/volunteer/experience-corps-volunteer-sign-up.action") > -1 && _satellite.track("modal-open-tracking"), e.location.href.indexOf("/applications/Volunteer_with_AARP_Tax_Aide/aboutYou.action") > -1 && e.location.href.indexOf("/aboutYou.action?jobId=a1oo0000001AGvXAAW") < 0 && _satellite.track("modal-open-tracking"), $aarpe("[data-modalid='experiencecorps-selectcitymodal-close']").click(function() {
                        _satellite.track("modal-close-tracking")
                    })
                }]
            }],
            scope: {
                URI: {
                    include: [/\/applications\/Volunteer_with_AARP_Tax_Aide\/aboutYou.action/i, /\/applications\/volunteer\/experience-corps-volunteer-sign-up.action/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA: 4S Membership Universal (Gold/Silver)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar151: "%DataLayer-ANA-ERRCDE-Taxonomy-[errors]%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    t.pageName = _satellite.getVar("AA-ANG: Page Name"), t.prop11 = _satellite.getVar("AA-ANG: Language")
                }]
            }],
            scope: {
                URI: {
                    include: [/\/(mem|member)\//i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA: Appdev Vendor Classic (pcode) - Pages without CMS wrappers",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar8: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(r, n) {
                    function o() {
                        "www.aarp.org" != t.domain || AARP.Ads._pri || (n.hier1 = "homepage", n.prop1 = "homepage", n.prop2 = "homepage", n.prop3 = "homepage", n.prop4 = "homepage", n.prop5 = "homepage", n.evar9 = "homepage")
                    }

                    function s(e) {
                        return n.events && !n.events.match(e) && (n.events += "," + e), n.events || (n.events = e), n.events
                    }

                    function c(e) {
                        var t = s_gi(s_account);
                        t.linkTrackVars = "events", t.linkTrackEvents = e, s(e), t.tl()
                    }

                    function l(e, t, a, r) {
                        if ("BREAK" != e && ("/" == a.charAt(0) || a.match(/.aarp.org/))) {
                            var n = s_gi(s_account);
                            if (AARP.Ads._pri) try {
                                r = r.replace("http://www.aarp.org", "")
                            } catch (i) {} else r = r.replace("http://", "");
                            n.linkTrackVars = "prop24,eVar3", n.prop24 = n.eVar3 = e + "|" + r + "|" + a, n.tl(this, "o", t)
                        }
                    }

                    function d(e, t) {
                        var a = s_gi(s_account);
                        a.linkTrackVars = "prop24,eVar3", a.prop24 = a.eVar3 = "NAV|" + e + "|" + t, a.tl(this, "o", "NAV")
                    }

                    function u(e, t, a) {
                        var r = s_gi(s_account);
                        if (t.match(/www.aarp.org/))
                            if (t.split("www.aarp.org/")[1]) try {
                                t = t.replace("http://www.aarp.org", "")
                            } catch (n) {} else t = t.replace("http://", "");
                        r.linkTrackVars = "events,prop16", r.linkTrackEvents = r.events = "event6", r.prop16 = "EXIT|" + t + "|" + a, r.tl(this, "e", e)
                    }

                    function m(e) {
                        return "11724" == e ? "WL" : "19063" == e ? "TRVL" : "51176" == e ? "ESPL" : "35395" == e ? "HD" : "55594" == e ? "CTG" : "32912" == e ? "EVNT" : "51655" == e ? "BNFT" : "29636" == e ? "MNY" : "28336" == e ? "LS" : "19061" == e ? "HLTH" : "55599" == e ? "BLTN" : "17201" == e ? "ADV" : e
                    }

                    function g() {
                        n.prop41 = "", v = "";
                        try {
                            N = $j(".formCell .checkNewsLtr")
                        } catch (e) {}
                        for (N.length < 1 && (N = $j('input[name="selectedNewsLetters"]')), i = 0; i < N.length; i++) N[i].checked && (n.prop41 += v, n.prop41 += m($j(N[i]).val()), v = "|");
                        n.prop41 && (y = -1 == n.prop41.indexOf("|") ? [n.prop41] : n.prop41.split("|"))
                    }

                    function p() {
                        n.eVar13 = "email_signups", s("event40"), t.URL.match(/newsletterId=/) && !$j.cookie("autoSubscribe") ? (n.prop41 = m(semphonicGetQueryParm("newsletterId")), $j.cookie("autoSubscribe", "set")) : t.URL.match(/editNewsletters|register\/join.action/) && M && n.tl(), $j(e).unload(function() {
                            $j.cookie("autoSubscribe") && $j.cookie("autoSubscribe", null)
                        })
                    }

                    function f(e) {
                        for (var a = e + "=", r = t.cookie.split(";"), n = 0; n < r.length; n++) {
                            for (var i = r[n];
                                " " == i.charAt(0);) i = i.substring(1);
                            if (0 == i.indexOf(a)) return i.substring(a.length, i.length)
                        }
                        return ""
                    }
                    AARP.Omniture = {
                        appendEvent: function(e) {
                            return n.events && !n.events.match(e) && (n.events += "," + e), n.events || (n.events = e), n.events
                        },
                        chopURL: function(e) {
                            try {
                                e = e.replace(/.aarp.org|http:\/\//, "").replace("https://", "https:")
                            } catch (t) {}
                            return -1 != e.indexOf("?") && (e = e.split("?")[0]), e
                        },
                        setPageView: function() {
                            n.pageName = n.pageName.split("#")[0], n.pageName = n.pageName + e.location.hash, n.prop50 = n.pageName, n.t()
                        },
                        trackClick: function(e, t, a) {
                            a = AARP.Omniture.chopURL(a);
                            var r = s_gi(s_account);
                            r.linkTrackVars = "prop24,eVar3", r.prop24 = r.eVar3 = e + "|" + r.pageName + "|" + a, r.tl(!0, "o", t)
                        },
                        trackFacebookReg: function() {
                            n.eVar13 = "facebook_start_registration", n.eVar5 = "intcmp", s("event10"), n.t()
                        },
                        trackModalOpen: function(e) {
                            if (!AARP.modePublish) return !1;
                            n.pageName = n.pageName + e, n.t()
                        },
                        trackRegForm: function(e) {
                            n.eVar5 = e, "DSO-REG-CONFIRM-FORM" == e && (n.eVar13 = "site-registration", s("event10")), n.t()
                        },
                        trackSocialClick: function(e) {
                            n.eVar13 = e + "_start", n.eVar5 = "DSO-REG-START-" + e.toUpperCase(), n.linkTrackVars = "eVar5,eVar13", n.tl(!0, "o", "social " + e + " start")
                        },
                        trackSearch: function(e, t) {
                            var a = s_gi(s_account);
                            AARP.Omniture.appendEvent("event5"), a.linkTrackVars = "prop7,prop8,eVar7,eVar11", a.linkTrackEvents = "event5", a.prop7 = a.eVar7 = e, a.prop8 = a.eVar11 = t, a.tl(!0, "o", t)
                        },
                        appendEventForInterstitial: function(e, t) {
                            var a = s_gi(s_account);
                            a.linkTrackVars = "events", a.linkTrackEvents = e, a.events = e, a.tl(this, "o", t), a.events = null
                        }
                    }, $j(function() {
                        $j("#travel-modal").on("shown.bs.modal", function() {
                            AARP.Omniture.appendEventForInterstitial("event56", "Interstitial Popup")
                        })
                    }), $j(function() {
                        $j(".single-field-search").submit(function() {
                            AARP.Omniture.trackSearch(this.getAttribute("searchtype"), AARP.Ads.normalize($j(this).children(".search-field").val()))
                        })
                    }), $j(".serverHero").find(".module-server").length > 0 && (n.pageType = "errorPage"), $j(t).ready(function() {
                        $j(".articleShareTools .share a").click(function() {
                            setTimeout("shareGrab()", 250)
                        }), $j(".articleShareTools .comments a").click(function() {
                            c("event28")
                        }), $j(".articleShareTools .print a").click(function() {
                            c("event21")
                        }), $j(".aarp-exit-link").click(function() {
                            u($j(this).html(), t.URL, $j(this).attr("href"))
                        }), $j(".newswire a, .expertInsights a, .mostPopular a, .billboard a, .newBillboard a, .textimage a").click(function() {
                            var e = t.URL,
                                a = $j(this),
                                r = a.html(),
                                n = a.attr("href"),
                                i = "billboard",
                                o = "newBillboard",
                                s = a.parents("div").hasClass("newswire") ? "NWS" : a.parents("div").hasClass("expertInsights") ? "FTEX" : a.parents("div").hasClass("mostPopular") && a.parents("div").hasClass("viewed") ? "MP-VWD" : a.parents("div").hasClass("mostPopular") && a.parents("div").hasClass("recommended") ? "MP-REC" : a.parents("div").hasClass("mostPopular") && a.parents("div").hasClass("commented") ? "MP-COM" : a.parents("div").hasClass("textimage") && !a.parents("div").hasClass("companionBarMore") ? "TI" : "BREAK";
                            (a.parents("div").hasClass(i) || a.parents("div").hasClass(o)) && (s = a.parents("div").hasClass("tab1") ? "BB-T1" : a.parents("div").hasClass("tab2") ? "BB-T2" : a.parents("div").hasClass("tab3") ? "BB-T3" : a.parents("div").hasClass("tab4") ? "BB-T4" : "UC"), l(s, r, n, e)
                        }), $j(".tabbedFeature li a").click(function(e) {
                            e.preventDefault();
                            var a = t.URL,
                                r = $j(this);
                            l("TF", r.html(), a + r.data("target"), a)
                        }), $j("#companionBarAnonymous a").click(function() {
                            l("CB-LI", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j("#companionBarMember .companionBarMemberWelcome a").click(function() {
                            l("CB-UN", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j("#companionBarMember .your-account").click(function() {
                            l("CB-YA", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j("#companionBarMember .cb-logout").click(function() {
                            l("CB-LO", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".companionBarFacebook a").click(function() {
                            l("CB-FB-AARP", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".companionBarYouTube").click(function() {
                            l("CB-YT", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".companionBarMore .companionBarMoreContent1 a").click(function() {
                            l("CB-MFY1", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".companionBarMore .companionBarMoreContent2 a").click(function() {
                            l("CB-MFY2", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".companionBarMore .companionBarMoreContent3 a").click(function() {
                            l("CB-MFY3", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".makeThisHomepage a").click(function() {
                            var e = $j(this).attr("id"),
                                t = s_gi(s_account);
                            t.linkTrackVars = "eVar13,events", t.linkTrackEvents = t.events = "event10", t.eVar13 = "promoLink" == e ? "HP_generic_promo" : "HP_bookmark", t.tl(this, "o", "HP_PROMO")
                        }), $j("#dspLocatorForm").submit(function() {
                            var e = s_gi(s_account);
                            e.linkTrackVars = "eVar13,events", e.linkTrackEvents = e.events = "event10,event39", e.eVar13 = "dsp_course_locator", e.tl(this, "o", "dsp_course_locator_search")
                        }), $j("#nav a").click(function() {
                            d(t.URL.split(".aarp.org")[1], $j(this).attr("href"))
                        })
                    });
                    var h = "",
                        b = new Array,
                        A = 0,
                        v = "",
                        N = new Array,
                        y = new Array,
                        E = new Array,
                        M = !1;
                    $j(function() {
                        t.URL.match(/editNewsletters/) && (g(), A = y.length, h = y.toString()), $j("#newsLtrSubmit, #newsletterSubmit").click(function() {
                            g(), b = h.split(","), y.length == A && y.toString() != h || y.length > A ? (n.prop41 = y.diff(b).toString().replace(/,/g, "|"), M = !0) : y.length < A ? ((E = $j.grep(y, function(e) {
                                if (-1 == b.indexOf(e)) return e
                            })) && (n.prop41 = E.toString().replace(/,/g, "|")), M = !!n.prop41) : M = !1, t.URL.match(/editNewsletters|register\/join.action/) && p(), A = y.length, h = y.toString()
                        })
                    }), t.URL.match(/updateSubscriptions|o=success&newsletterId=/) && p(), "undefined" != typeof prefConfirm_action && (n.eVar13 = "Preferences_" + prefConfirm_action, s("eventTBD")), o();
                    try {
                        mboxLoadSCPlugin(n)
                    } catch (T) {}! function() {
                        function e(e, r) {
                            return t[e] !== a ? t[e] : r
                        }
                        var t = function() {
                            var e = {};
                            try {
                                for (var t = f("at"), a = decodeURIComponent(t.toString()), r = /[a-z]*=[a-z0-9_\-/+=:/\.\(\)\\]*/gi, n = a.match(r), i = 0; i < n.length; i++) {
                                    var o = n[i].substring(0, n[i].indexOf("=")),
                                        s = n[i].substring(n[i].indexOf("=") + 1);
                                    e[o] = s
                                }
                            } catch (c) {}
                            return e
                        }();
                        n.prop33 = e("u", ""), n.eVar17 = e("a", "");
                        var r = e("ms", "");
                        switch (r) {
                            case "0":
                                n.eVar30 = "ACTIVE";
                                break;
                            case "1":
                                n.eVar30 = "NON-MEMBER";
                                break;
                            case "4":
                                n.eVar30 = "CANCELLED";
                                break;
                            case "5":
                                n.eVar30 = "EXPIRED";
                                break;
                            case "D":
                            case "M":
                            case "U":
                                n.eVar30 = r;
                                break;
                            default:
                                n.eVar30 = ""
                        }
                        n.eVar32 = e("me", ""), n.eVar28 = e("mj", ""), n.prop65 = e("mat", ""), n.prop66 = e("ftr", ""), n.prop68 = e("cid", ""), n.zip = e("p", ""), n.state = e("us", ""), n.eVar53 = e("u", "")
                    }()
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Site Property (NOT EVERYWHERE)"), /AppdevVendor/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Application Order Transaction (catch all)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "%ANA: Registration Type (as)%",
                    eVar16: "%AT: Product Purchase Price%",
                    eVar207: "%ANA: konnexId%",
                    eVar60: "%AT: Key Code%",
                    eVar8: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%",
                    prop68: "%ANA: konnexId%"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event10"]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Order Confirmation_app"), /true/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Application Registration (CMS - Work Around)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "site_registration",
                    eVar60: "%AT: Key Code%"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event10"]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: INTCMP Campaign ID"), /DSO-REG-CONFIRM-EWHERE/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Application Registration (catch all)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "%ANA: Registration Type (as)%",
                    eVar60: "%AT: Key Code%",
                    eVar8: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event10"]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed (as)"), /true/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Application Registration - Get Started (Temp rule)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "site_Registration",
                    eVar148: "register",
                    eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                    eVar150: "register-submit",
                    eVar60: "%AT: Key Code%",
                    eVar8: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%"
                }]
            }],
            scope: {
                URI: {
                    include: ["/applications/user/membershipSuccess"]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), /(MJOIN|M-RENEW)-REG-CONFIRM/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Article (Initial Page Load)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    prop30: "pageTitle"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event29", "event8", "event90"]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function() {}]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("Article Page"), /true/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Blog Author Tracking",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    prop35: "%ANA: Blog Author Name%"
                }]
            }],
            scope: {
                subdomains: {
                    include: [/blog.aarp.org/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA: Brain Games",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    pageName: "ss: braingames: %ANA: Page Name (webData)%",
                    channel: "%Site Section (webData)%"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("Site Section (webData)"), /SS Games/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Classic & Travel Only (pcode)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar8: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(r, n) {
                    function o() {
                        "www.aarp.org" != t.domain || AARP.Ads._pri || (n.hier1 = "homepage", n.prop1 = "homepage", n.prop2 = "homepage", n.prop3 = "homepage", n.prop4 = "homepage", n.prop5 = "homepage", n.evar9 = "homepage")
                    }

                    function s(e) {
                        return n.events && !n.events.match(e) && (n.events += "," + e), n.events || (n.events = e), n.events
                    }

                    function c(e) {
                        var t = s_gi(s_account);
                        t.linkTrackVars = "events", t.linkTrackEvents = e, s(e), t.tl()
                    }

                    function l(e, t, a, r) {
                        if ("BREAK" != e && ("/" == a.charAt(0) || a.match(/.aarp.org/))) {
                            var n = s_gi(s_account);
                            if (AARP.Ads._pri) try {
                                r = r.replace("http://www.aarp.org", "")
                            } catch (i) {} else r = r.replace("http://", "");
                            n.linkTrackVars = "prop24,eVar3", n.prop24 = n.eVar3 = e + "|" + r + "|" + a, n.tl(this, "o", t)
                        }
                    }

                    function d(e, t) {
                        var a = s_gi(s_account);
                        a.linkTrackVars = "prop24,eVar3", a.prop24 = a.eVar3 = "NAV|" + e + "|" + t, a.tl(this, "o", "NAV")
                    }

                    function u(e, t, a) {
                        var r = s_gi(s_account);
                        if (t.match(/www.aarp.org/))
                            if (t.split("www.aarp.org/")[1]) try {
                                t = t.replace("http://www.aarp.org", "")
                            } catch (n) {} else t = t.replace("http://", "");
                        r.linkTrackVars = "events,prop16", r.linkTrackEvents = r.events = "event6", r.prop16 = "EXIT|" + t + "|" + a, r.tl(this, "e", e)
                    }

                    function m(e) {
                        return "11724" == e ? "WL" : "19063" == e ? "TRVL" : "51176" == e ? "ESPL" : "35395" == e ? "HD" : "55594" == e ? "CTG" : "32912" == e ? "EVNT" : "51655" == e ? "BNFT" : "29636" == e ? "MNY" : "28336" == e ? "LS" : "19061" == e ? "HLTH" : "55599" == e ? "BLTN" : "17201" == e ? "ADV" : e
                    }

                    function g() {
                        n.prop41 = "", A = "";
                        try {
                            v = $j(".formCell .checkNewsLtr")
                        } catch (e) {}
                        for (v.length < 1 && (v = $j('input[name="selectedNewsLetters"]')), i = 0; i < v.length; i++) v[i].checked && (n.prop41 += A, n.prop41 += m($j(v[i]).val()), A = "|");
                        n.prop41 && (N = -1 == n.prop41.indexOf("|") ? [n.prop41] : n.prop41.split("|"))
                    }

                    function p() {
                        n.events = "", n.eVar13 = "email_signups", s("event40"), t.URL.match(/newsletterId=/) && !$j.cookie("autoSubscribe") ? (n.prop41 = m(semphonicGetQueryParm("newsletterId")), $j.cookie("autoSubscribe", "set")) : t.URL.match(/editNewsletters|register\/(join.action|finalize.action)/) && E && n.tl(), $j(e).unload(function() {
                            $j.cookie("autoSubscribe") && $j.cookie("autoSubscribe", null)
                        })
                    }
                    AARP.Omniture = {
                        appendEvent: function(e) {
                            return n.events && !n.events.match(e) && (n.events += "," + e), n.events || (n.events = e), n.events
                        },
                        chopURL: function(e) {
                            try {
                                e = e.replace(/.aarp.org|http:\/\//, "").replace("https://", "https:")
                            } catch (t) {}
                            return -1 != e.indexOf("?") && (e = e.split("?")[0]), e
                        },
                        setPageView: function() {
                            n.pageName = n.pageName.split("#")[0], n.pageName = n.pageName + e.location.hash, n.prop50 = n.pageName, n.t()
                        },
                        trackClick: function(e, t, a) {
                            a = AARP.Omniture.chopURL(a);
                            var r = s_gi(s_account);
                            r.linkTrackVars = "prop24,eVar3", r.prop24 = r.eVar3 = e + "|" + r.pageName + "|" + a, r.tl(!0, "o", t)
                        },
                        trackFacebookReg: function() {
                            n.eVar13 = "facebook_start_registration", n.eVar5 = "intcmp", s("event10"), n.t()
                        },
                        trackModalOpen: function(e) {
                            if (!AARP.modePublish) return !1;
                            n.pageName = n.pageName + e, n.t()
                        },
                        trackRegForm: function(e) {
                            n.eVar5 = e, "DSO-REG-CONFIRM-FORM" == e && (n.eVar13 = "site-registration", s("event10")), n.t()
                        },
                        trackSocialClick: function(e) {
                            n.eVar13 = e + "_start", n.eVar5 = "DSO-REG-START-" + e.toUpperCase(), n.linkTrackVars = "eVar5,eVar13", n.tl(!0, "o", "social " + e + " start")
                        },
                        trackSearch: function(e, t) {
                            var a = s_gi(s_account);
                            AARP.Omniture.appendEvent("event5"), a.linkTrackVars = "prop7,prop8,eVar7,eVar11", a.linkTrackEvents = "event5", a.prop7 = a.eVar7 = e, a.prop8 = a.eVar11 = t, a.tl(!0, "o", t)
                        },
                        appendEventForInterstitial: function(e, t) {
                            var a = s_gi(s_account);
                            a.linkTrackVars = "events", a.linkTrackEvents = e, a.events = e, a.tl(this, "o", t), a.events = null
                        }
                    }, $j(function() {
                        $j("#travel-modal").on("shown.bs.modal", function() {
                            AARP.Omniture.appendEventForInterstitial("event56", "Interstitial Popup")
                        })
                    }), $j(function() {
                        $j(".single-field-search").submit(function() {
                            AARP.Omniture.trackSearch(this.getAttribute("searchtype"), AARP.Ads.normalize($j(this).children(".search-field").val()))
                        })
                    }), $j(".serverHero").find(".module-server").length > 0 && (n.pageType = "errorPage"), $j(t).ready(function() {
                        $j(".articleShareTools .share a").click(function() {
                            setTimeout("shareGrab()", 250)
                        }), $j(".articleShareTools .comments a").click(function() {
                            c("event28")
                        }), $j(".articleShareTools .print a").click(function() {
                            c("event21")
                        }), $j(".aarp-exit-link").click(function() {
                            u($j(this).html(), t.URL, $j(this).attr("href"))
                        }), $j(".newswire a, .expertInsights a, .mostPopular a, .billboard a, .newBillboard a, .textimage a").click(function() {
                            var e = t.URL,
                                a = $j(this),
                                r = a.html(),
                                n = a.attr("href"),
                                i = "billboard",
                                o = "newBillboard",
                                s = a.parents("div").hasClass("newswire") ? "NWS" : a.parents("div").hasClass("expertInsights") ? "FTEX" : a.parents("div").hasClass("mostPopular") && a.parents("div").hasClass("viewed") ? "MP-VWD" : a.parents("div").hasClass("mostPopular") && a.parents("div").hasClass("recommended") ? "MP-REC" : a.parents("div").hasClass("mostPopular") && a.parents("div").hasClass("commented") ? "MP-COM" : a.parents("div").hasClass("textimage") && !a.parents("div").hasClass("companionBarMore") ? "TI" : "BREAK";
                            (a.parents("div").hasClass(i) || a.parents("div").hasClass(o)) && (s = a.parents("div").hasClass("tab1") ? "BB-T1" : a.parents("div").hasClass("tab2") ? "BB-T2" : a.parents("div").hasClass("tab3") ? "BB-T3" : a.parents("div").hasClass("tab4") ? "BB-T4" : "UC"), l(s, r, n, e)
                        }), $j(".tabbedFeature li a").click(function(e) {
                            e.preventDefault();
                            var a = t.URL,
                                r = $j(this);
                            l("TF", r.html(), a + r.data("target"), a)
                        }), $j("#companionBarAnonymous a").click(function() {
                            l("CB-LI", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j("#companionBarMember .companionBarMemberWelcome a").click(function() {
                            l("CB-UN", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j("#companionBarMember .your-account").click(function() {
                            l("CB-YA", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j("#companionBarMember .cb-logout").click(function() {
                            l("CB-LO", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".companionBarFacebook a").click(function() {
                            l("CB-FB-AARP", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".companionBarYouTube").click(function() {
                            l("CB-YT", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".companionBarMore .companionBarMoreContent1 a").click(function() {
                            l("CB-MFY1", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".companionBarMore .companionBarMoreContent2 a").click(function() {
                            l("CB-MFY2", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".companionBarMore .companionBarMoreContent3 a").click(function() {
                            l("CB-MFY3", $j(this).html(), $j(this).attr("href"), t.URL)
                        }), $j(".makeThisHomepage a").click(function() {
                            var e = $j(this).attr("id"),
                                t = s_gi(s_account);
                            t.linkTrackVars = "eVar13,events", t.linkTrackEvents = t.events = "event10",
                                t.eVar13 = "promoLink" == e ? "HP_generic_promo" : "HP_bookmark", t.tl(this, "o", "HP_PROMO")
                        }), $j("#dspLocatorForm").submit(function() {
                            var e = s_gi(s_account);
                            e.linkTrackVars = "eVar13,events", e.linkTrackEvents = e.events = "event10,event39", e.eVar13 = "dsp_course_locator", e.tl(this, "o", "dsp_course_locator_search")
                        }), $j("#nav a").click(function() {
                            d(t.URL.split(".aarp.org")[1], $j(this).attr("href"))
                        })
                    });
                    var f = "",
                        h = new Array,
                        b = 0,
                        A = "",
                        v = new Array,
                        N = new Array,
                        y = new Array,
                        E = !1;
                    $j(function() {
                        t.URL.match(/editNewsletters/) && (g(), b = N.length, f = N.toString()), $j("#newsLtrSubmit, #newsletterSubmit").click(function() {
                            g(), h = f.split(","), N.length == b && N.toString() != f || N.length > b ? (n.prop41 = N.diff(h).toString().replace(/,/g, "|"), E = !0) : N.length < b ? ((y = $j.grep(N, function(e) {
                                if (-1 == h.indexOf(e)) return e
                            })) && (n.prop41 = y.toString().replace(/,/g, "|")), E = !!n.prop41) : E = !1, t.URL.match(/editNewsletters|register\/(join.action|finalize.action)/) && p(), b = N.length, f = N.toString()
                        })
                    }), t.URL.match(/updateSubscriptions|o=success&newsletterId=/) && p(), "undefined" != typeof prefConfirm_action && (n.eVar13 = "Preferences_" + prefConfirm_action, s("eventTBD")), o();
                    try {
                        mboxLoadSCPlugin(n)
                    } catch (M) {}! function() {
                        function e(e, t) {
                            return r[e] !== a ? r[e] : t
                        }
                        var r = function() {
                            var e = {};
                            try {
                                for (var t = Cookies.get("at"), a = /[a-z]*=[a-z0-9_\-/+=:/\.\(\)\\]*/gi, r = t.match(a), n = 0; n < r.length; n++) {
                                    var i = r[n].substring(0, r[n].indexOf("=")),
                                        o = r[n].substring(r[n].indexOf("=") + 1);
                                    e[i] = o
                                }
                            } catch (s) {}
                            return e
                        }();
                        if ("/MSS/join/confirmation" !== t.location.pathname && "/MSS/join/billMeConfirmation" !== t.location.pathname) {
                            n.prop33 = e("u", ""), n.eVar17 = e("a", "");
                            var i = e("ms", "");
                            switch (i) {
                                case "0":
                                    n.eVar30 = "ACTIVE";
                                    break;
                                case "1":
                                    n.eVar30 = "NON-MEMBER";
                                    break;
                                case "4":
                                    n.eVar30 = "CANCELLED";
                                    break;
                                case "5":
                                    n.eVar30 = "EXPIRED";
                                    break;
                                case "D":
                                case "M":
                                case "U":
                                    n.eVar30 = i;
                                    break;
                                default:
                                    n.eVar30 = ""
                            }
                            n.eVar32 = e("me", ""), n.eVar28 = e("mj", ""), n.prop65 = e("mat", ""), n.prop66 = e("ftr", ""), n.prop68 = e("cid", ""), n.zip = e("p", ""), n.state = e("us", ""), n.eVar53 = e("u", "")
                        }
                    }()
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Site Property (NOT EVERYWHERE)"), /(Classic)|(Travel)/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Classic Pcode for Vendors with no cms wrappers",
            trigger: [{
                engine: "sc",
                command: "customSetup",
                arguments: [function(r, n) {
                    function i(e) {
                        return n.events && !n.events.match(e) && (n.events += "," + e), n.events || (n.events = e), n.events
                    }

                    function o(e) {
                        for (var a = e + "=", r = t.cookie.split(";"), n = 0; n < r.length; n++) {
                            for (var i = r[n];
                                " " == i.charAt(0);) i = i.substring(1);
                            if (0 == i.indexOf(a)) return i.substring(a.length, i.length)
                        }
                        return ""
                    }
                    var s, c;
                    AARP.Omniture = {
                            appendEvent: function(e) {
                                return n.events && !n.events.match(e) && (n.events += "," + e), n.events || (n.events = e), n.events
                            },
                            chopURL: function(e) {
                                try {
                                    e = e.replace(/.aarp.org|http:\/\//, "").replace("https://", "https:")
                                } catch (t) {}
                                return -1 != e.indexOf("?") && (e = e.split("?")[0]), e
                            },
                            setPageView: function() {
                                n.pageName = n.pageName.split("#")[0], n.pageName = n.pageName + e.location.hash, n.prop50 = n.pageName, n.t()
                            },
                            trackClick: function(e, t, a) {
                                a = AARP.Omniture.chopURL(a);
                                var r = s_gi(s_account);
                                r.linkTrackVars = "prop24,eVar3", r.prop24 = r.eVar3 = e + "|" + r.pageName + "|" + a, r.tl(!0, "o", t)
                            },
                            trackFacebookReg: function() {
                                n.eVar13 = "facebook_start_registration", n.eVar5 = "intcmp", i("event10"), n.t()
                            },
                            trackModalOpen: function(e) {
                                if (!AARP.modePublish) return !1;
                                n.pageName = n.pageName + e, n.t()
                            },
                            trackRegForm: function(e) {
                                n.eVar5 = e, "DSO-REG-CONFIRM-FORM" == e && (n.eVar13 = "site-registration", i("event10")), n.t()
                            },
                            trackSocialClick: function(e) {
                                n.eVar13 = e + "_start", n.eVar5 = "DSO-REG-START-" + e.toUpperCase(), n.linkTrackVars = "eVar5,eVar13", n.tl(!0, "o", "social " + e + " start")
                            },
                            trackSearch: function(e, t) {
                                var a = s_gi(s_account);
                                AARP.Omniture.appendEvent("event5"), a.linkTrackVars = "prop7,prop8,eVar7,eVar11", a.linkTrackEvents = "event5", a.prop7 = a.eVar7 = e, a.prop8 = a.eVar11 = t, a.tl(!0, "o", t)
                            },
                            appendEventForInterstitial: function(e, t) {
                                var a = s_gi(s_account);
                                a.linkTrackVars = "events", a.linkTrackEvents = e, a.events = e, a.tl(this, "o", t), a.events = null
                            }
                        }, s = o("at"), (c = o("email")) && c.length > 0 ? n.eVar8 = "partial-login" : s && s.length > 0 ? n.eVar8 = "full-login" : n.eVar8 = "",
                        function() {
                            function e(e, r) {
                                return t[e] !== a ? t[e] : r
                            }
                            var t = function() {
                                var e = {};
                                try {
                                    for (var t = o("at"), a = decodeURIComponent(t.toString()), r = /[a-z]*=[a-z0-9_\-/+=:/\.\(\)\\]*/gi, n = a.match(r), i = 0; i < n.length; i++) {
                                        var s = n[i].substring(0, n[i].indexOf("=")),
                                            c = n[i].substring(n[i].indexOf("=") + 1);
                                        e[s] = c
                                    }
                                } catch (l) {}
                                return e
                            }();
                            switch (n.prop33 = e("u", ""), n.eVar17 = e("a", ""), e("ms", "")) {
                                case "0":
                                    n.eVar30 = "ACTIVE";
                                    break;
                                case "1":
                                    n.eVar30 = "NON-MEMBER";
                                    break;
                                case "4":
                                    n.eVar30 = "CANCELLED";
                                    break;
                                case "5":
                                    n.eVar30 = "EXPIRED";
                                    break;
                                case "D":
                                    n.eVar30 = "D";
                                    break;
                                case "M":
                                    n.eVar30 = "M";
                                    break;
                                case "U":
                                    n.eVar30 = "U";
                                    break;
                                default:
                                    n.eVar30 = ""
                            }
                            n.eVar32 = e("me", ""), n.eVar28 = e("mj", ""), n.prop65 = e("mat", ""), n.prop66 = e("ftr", ""), n.prop68 = e("cid", ""), n.zip = e("p", ""), n.state = e("us", ""), n.eVar53 = e("u", "")
                        }()
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Site Property (NOT EVERYWHERE)"), /Vendor/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Core Content All Pages",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar10: "%ANA:PageName%",
                    eVar151: "%DataLayer-ANA-ERRCDE-Taxonomy-[errors]%",
                    eVar152: "%DataLayer-ANA-ERRMESS-Taxonomy-[errors]%",
                    eVar153: "%DataLayer-ANA-VIDEOID-Taxonomy-[contentdata]%",
                    eVar154: "%DataLayer-ANA-ARTICLEID-Taxonomy-[contentdata]%",
                    eVar155: "%DataLayer-ANA-VAR-1-Taxonomy-[pagedata]%",
                    eVar156: "%DataLayer-ANA-VAR-2-Taxonomy-[pagedata]%",
                    eVar157: "%DataLayer-ANA-VAR-3-Taxonomy-[pagedata]%",
                    eVar158: "%DataLayer-ANA-VAR-4-Taxonomy-[pagedata]%",
                    eVar159: "%DataLayer-ANA-VAR-5-Taxonomy-[pagedata]%",
                    eVar160: "%DataLayer-ANA-PAGETYPE-Taxonomy-[pagedata]%",
                    eVar161: "%DataLayer-ANA-PRODDID-Taxonomy-[userdata]%",
                    eVar162: "%DataLayer-ANA-PRODCDE-Taxonomy-[userdata]%",
                    eVar163: "%DataLayer-ANA-ACTTYPE-Taxonomy-[userdata]%",
                    eVar164: "%DataLayer-ANA-PRODTYPE-Taxonomy-[webdata]%",
                    eVar165: "%DataLayer-ANA-TRANSID-Taxonomy-[webdata]%",
                    eVar166: "%DataLayer-ANA-MEMFLG-Taxonomy-[userdata]%",
                    eVar167: "%DataLayer-ANA-APPTIME-Taxonomy-[userdata]%",
                    eVar168: "%DataLayer-ANA-APPSTEP-Taxonomy-[userdata]%",
                    eVar169: "%DataLayer-ANA-MIDID-Taxonomy-[userdata]%",
                    eVar170: "%DataLayer-ANA-ZIPCODE-Taxonomy-[userdata]%",
                    eVar171: "%DataLayer-ANA-SRCHTRM-Taxonomy-[search]%",
                    eVar172: "%DataLayer-ANA-SRCHRSLT-Taxonomy-[search]%",
                    eVar18: "%ANA: Groupings (metaS18)%",
                    eVar187: "%DataLayer-ANA-MEMTERM-Taxonomy-[userdata]%",
                    eVar189: "%DataLayer-ANA-LANGUAGE-Taxonomy-[pagedata]%",
                    eVar190: "%DataLayer-ANA-TODAYSDTE-Taxonomy-[pagedata]%",
                    eVar197: "%ANA:TCCampaignId%",
                    eVar205: "%ANA: CurrentUrl%",
                    eVar206: "%Cookie: mar%",
                    eVar207: "%DataLayer-ANA-KONNEXID-Taxonomy-[userdata]%",
                    eVar212: "%ANA: Iphone - Width x Height%",
                    eVar247: "%AA: Kenshoo ID%",
                    eVar250: "%ANA:PageName%",
                    eVar28: "%DataLayer-ANA-MEMDTE-Taxonomy-[userdata]%",
                    eVar30: "%DataLayer-ANA-MEMSTATUS-Taxonomy-[userdata]%",
                    eVar31: "%ANA: Custom Channel Section%",
                    eVar32: "%DataLayer-ANA-MEMEXPDATE-Taxonomy-[userdata]%",
                    eVar33: "%ANA: Publisher Date%",
                    eVar5: "%AA-ANG: Internal Campaign%",
                    eVar53: "%DataLayer-ANA-MIDID-Taxonomy-[userdata]%",
                    eVar60: "%AT: Key Code%",
                    eVar61: "%ANA: AdblockValue%",
                    eVar8: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%",
                    eVar9: "%ANA:e9VisitorType%",
                    prop1: "%ANA: Section%",
                    prop11: "%ANA: Language%",
                    prop13: "%ANA: Meta Data Prop 1 (Subject 1)%",
                    prop14: "%ANA: MetaData Prop 2 (Subject 2)%",
                    prop15: "%ANA: Meta Data Prop 3 (Subject 3)%",
                    prop18: "%ANA: Groupings (metaS18)%",
                    prop2: "%ANA:TaxonomyA%",
                    prop20: "%ANA: Publisher%",
                    prop27: "%ANA:Hierarchy2Levels%",
                    prop28: "%ANA:Hierarchy3Levels%",
                    prop29: "%ANA:ParameterString%",
                    prop3: "%ANA:TaxonomyB%",
                    prop30: "%ANA: Page Title (non-datalayer)%",
                    prop31: "%ANA: Custom Channel Section%",
                    prop33: "%DataLayer-ANA-DSOUID-Taxonomy-[userdata]%",
                    prop34: "%ANA: PGID%",
                    prop35: "%ANA: Author%",
                    prop36: "%ANA: URL Hash%",
                    prop4: "%ANA:Topic%",
                    prop43: "%ANA: Portfolio list (metaS43)%",
                    prop5: "%ANA:Subtopic%",
                    prop50: "%ANA:PageName%",
                    prop56: "%AA: Custom Parameter%",
                    prop6: "%ANA:Vendor%",
                    prop68: "%DataLayer-ANA-KONNEXID-Taxonomy-[userdata]%",
                    server: "%ANA: Host Name%",
                    pageName: "%ANA:PageName%",
                    channel: "%ANA:Channel%"
                }]
            }],
            scope: {
                URI: {
                    exclude: [/\/(mem|member)\//i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA: Disrupt-Aging-Events",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar15: "%ANA: Disrupt Aging - CMP Parameter%",
                    eVar19: "%ANA: Disrupt Aging - CMP Parameter%"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event60"]
            }],
            scope: {
                URI: {
                    include: [/\/etc\/everywhere\/statics\/disrupt-aging\/home.html/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA: Donation Tracking (Foundations)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "DONATION COMPLETED"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event24"]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    "" == t.events ? t.events = "event25=" + _satellite.getVar("ANA: Donation Donation Amount") : t.events = t.events + ",event25=" + _satellite.getVar("ANA: Donation Donation Amount")
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Donation Event Trigger"), "donationCompleted")
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Driver Safety Conversion Tracking",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "%ANA: Driver Safety Product Registration Type%",
                    eVar69: "%ANA: Driver Safety DSP Course Signup Details [Registration Values]%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    _satellite.getVar("ANA: Driver Safety Product Registration Type").indexOf("DSP_OnlineClass_Registration") > -1 ? t.events = "event147" : _satellite.getVar("ANA: Driver Safety Product Registration Type").indexOf("DSP_OnlineClass_Payment") > -1 ? t.events = "event148" : _satellite.getVar("ANA: Driver Safety Product Registration Type").indexOf("DSP_OnlineClass_Gift") > -1 && (t.events = "event149")
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Driver Safety Product Registration Type"), /.+/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Everywhere Only (pcode)",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar67: "aarpe",
                    eVar8: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(r, n) {
                    AARP.Everywhere.Omniture = new function() {
                            function a() {
                                n.prop41 = "", u(), o(m("body"))
                            }

                            function r(e) {
                                return "11724" == e ? "WL" : "19063" == e ? "TRVL" : "51176" == e ? "ESPL" : "35395" == e ? "HD" : "55594" == e ? "CTG" : "32912" == e ? "EVNT" : "51655" == e ? "BNFT" : "29636" == e ? "MNY" : "28336" == e ? "LS" : "19061" == e ? "HLTH" : "55599" == e ? "BLTN" : "17201" == e ? "ADV" : e
                            }

                            function o(e) {
                                e.find(".aarpe-text-image a").each(function() {
                                    m(this).data("omniturelistening") || m(this).on("click.Omniture", function() {
                                        var e = "BREAK";
                                        m(this).closest(".aarpe-text-image").length > 0 && (e = "TI"), AARP.Everywhere.Omniture.clickTrack(e, m(this).html(), m(this).attr("href"), t.URL)
                                    }).data("omniturelistening", !0)
                                })
                            }

                            function s(e) {
                                return n.events && !n.events.match(e) && (n.events += "," + e), n.events || (n.events = e), n.events
                            }

                            function c(e) {
                                try {
                                    e = e.replace(/.aarp.org|http:\/\//, "").replace("https://", "https:")
                                } catch (t) {}
                                return -1 != e.indexOf("?") && (e = e.split("?")[0]), e
                            }

                            function l() {
                                for (n.prop41 = "", pipe = "", checkboxes = m('input[name="selectedNewsLetters"]'), i = 0; i < checkboxes.length; i++) checkboxes[i].checked && (n.prop41 += pipe, n.prop41 += r(m(checkboxes[i]).val()), pipe = "|");
                                n.prop41 && (-1 == n.prop41.indexOf("|") ? selected = [n.prop41] : selected = n.prop41.split("|"))
                            }

                            function d() {
                                n.eVar13 = "email_signups", s("event40"), t.URL.match(/newsletterId=/) && !m.cookie("autoSubscribe") ? (n.prop41 = r(semphonicGetQueryParm("newsletterId")), m.cookie("autoSubscribe", "set")) : (t.URL.match(/editNewsletters|register\/join.action/) && reportNewsletterSubscriptions && n.tl(), t.URL.match(/editNewsletters|register\/finalize.action/) && reportNewsletterSubscriptions && n.tl()), m(e).unload(function() {
                                    m.cookie("autoSubscribe") && m.cookie("autoSubscribe", null)
                                })
                            }

                            function u() {
                                -1 != t.URL.match(/editNewsletters/) && (l(), storedValuesLength = selected.length, g = selected.toString()), m("#newsLtrSubmit").click(function() {
                                    l(), storedValuesArr = g.split(","), selected.length == storedValuesLength && selected.toString() != g || selected.length > storedValuesLength ? (n.prop41 = selected.toString().replace(/,/g, "|"), reportNewsletterSubscriptions = !0) : selected.length < storedValuesLength ? ($selected = m.grep(selected, function(e) {
                                        if (-1 == storedValuesArr.indexOf(e)) return e
                                    }), $selected && (n.prop41 = $selected.toString().replace(/,/g, "|")), reportNewsletterSubscriptions = !!n.prop41) : reportNewsletterSubscriptions = !1, t.URL.match(/editNewsletters|register\/join.action/) && d(), storedValuesLength = selected.length, g = selected.toString(), t.URL.match(/editNewsletters|register\/finalize.action/) && d(), storedValuesLength = selected.length, g = selected.toString()
                                })
                            }
                            var m = jQuery.noConflict(),
                                g = "";
                            storedValuesArr = {}, storedValuesLength = 0, pipe = "", checkboxes = {}, selected = {}, $selected = {}, reportNewsletterSubscriptions = !1;
                            var p = e.location.hostname.split(".").shift();
                            "search" != p && "search-s" != p || s("event5"), "games" != p && "abtest" != p || s("event30"), m(".zeroResults").length && s("event9"), this.appendEvent = function(e) {
                                return n.events && !n.events.match(e) && (n.events += "," + e), n.events || (n.events = e), n.events
                            }, this.setPageView = function() {
                                n.pageName = n.pageName.split("#")[0], n.pageName = n.pageName + e.location.hash, n.prop50 = n.pageName, n.t()
                            }, this.trackClick = function(e, t, a) {
                                a = c(a);
                                var r = s_gi(s_account);
                                r.linkTrackVars = "prop24,eVar3", r.prop24 = r.eVar3 = e + "|" + r.pageName + "|" + a, r.tl(!0, "o", t)
                            }, this.trackRegForm = function(e) {
                                n.eVar5 = e, "DSO-REG-CONFIRM-EFORM" == e && (n.eVar13 = "site_registration", s("event10"), _satellite.track("fb_complete_registration_pixel")), n.tl()
                            }, this.clickTrack = function(e, t, a, r) {
                                if ("BREAK" != e && ("/" == a.charAt(0) || a.match(/.aarp.org/))) {
                                    var n = s_gi(s_account);
                                    if (AARP.Everywhere.Page.getPathc()[0]) try {
                                        r = r.replace("http://www.aarp.org", "")
                                    } catch (i) {} else r = r.replace("http://", "");
                                    n.linkTrackVars = "prop24,eVar3", n.prop24 = n.eVar3 = e + "|" + r + "|" + a, n.tl(this, "o", t)
                                }
                            }, this.setTrackEvent = function(e, t, a) {
                                s(e), n.eVar13 = t, n.eVar5 = a, n.tl()
                            }, this.clickEvent = function(e) {
                                var t = s_gi(s_account);
                                t.linkTrackVars = "events", t.linkTrackEvents = e, s(e), t.tl()
                            }, this.exitLinkTrack = function(e, t, a) {
                                var r = s_gi(s_account);
                                if (t.match(/www.aarp.org/))
                                    if (t.split("www.aarp.org/")[1]) try {
                                        t = t.replace("http://www.aarp.org", "")
                                    } catch (n) {} else t = t.replace("http://", "");
                                r.linkTrackVars = "events,prop16", r.linkTrackEvents = r.events = "event6", r.prop16 = "EXIT|" + t + "|" + a, r.tl(this, "e", e)
                            }, this.setArticleScrollLoad = function() {
                                n.events = n.events.replace("event90,", ""), n.events = n.events.replace(",event90", ""), s("event91")
                            }, this.resetParams = function() {}, this.appendEventForInterstitial = function(e, t) {
                                var a = s_gi(s_account);
                                a.linkTrackVars = "events", a.linkTrackEvents = e, a.events = e, a.tl(this, "o", t), a.events = null
                            }, t.getElementsByClassName("aarpe-missing-page").length > 0 && (n.prop1 = "type:404-MissingPage", n.pageType = "errorPage"), this.appendEventForSimplyHired = function(e, t, a, r) {
                                r = c(r);
                                var n = s_gi(s_account);
                                n.linkTrackVars = "events,prop60,prop24,eVar3", n.prop24 = n.eVar3 = a + "|" + n.pageName + "|" + r, n.linkTrackEvents = e, n.events = e, n.prop60 = m('input[id*="what"]').val(), n.pageName, n.tl(this, "o", t), n.events = null, n.prop60 = null, n.eVar3 = null, n.prop24 = null
                            }, m("#simplyhired-search").on("click", function() {
                                AARP.Everywhere.Omniture.appendEventForSimplyHired("event46", "simplyhired-search", "EWHERE_simplyhired-search", "simplyhired-search", "simplyhired-search")
                            }), this.appendEventForSimplyHiredPostJob = function(e, t, a) {
                                a = c(a);
                                var r = s_gi(s_account);
                                r.linkTrackVars = "prop24,eVar3", r.prop24 = r.eVar3 = t + "|" + r.pageName + "|" + a, r.pageName, r.tl(this, "o", e)
                            }, m("#post-a-job").on("click", function() {
                                AARP.Everywhere.Omniture.appendEventForSimplyHiredPostJob("post-a-job", "EWHERE_simplyHiredPostAJob", "simplyHiredPostAJob", "simplyHiredPostAJob")
                            }), this.setupInContext = function(e) {
                                o(e)
                            }, m(t).ready(a)
                        },
                        function() {
                            function e() {
                                AARP.Everywhere.User ? AARP.Everywhere.User.getUserInfo(r, function() {
                                    r()
                                }) : r()
                            }

                            function r(e) {
                                if (e) {
                                    n.eVar30 = e.getMembershipStatus();
                                    var t = e.getMembershipExpirationDate(),
                                        a = t.getMonth() + 1;
                                    n.eVar32 = (a < 9 ? "0" + a : a) + "/" + t.getDate() + "/" + t.getFullYear();
                                    var r = e.getMembershipEnrollDate(),
                                        o = r.getMonth() + 1;
                                    n.eVar28 = (o < 9 ? "0" + o : o) + "/" + r.getDate() + "/" + r.getFullYear(), n.prop66 = e.getFirstTimeRenewer(), n.zip = e.getPostalCode(), n.state = e.getStateLong()
                                } else n.eVar17 = n.eVar30 = n.eVar32 = n.eVar28 = n.prop66 = n.zip = n.state;
                                n.prop65 = i("mat", ""), n.eVar53 = n.prop33 = i("u", "")
                            }

                            function i(e, t) {
                                return o[e] !== a ? o[e] : t
                            }
                            var o = function() {
                                var e = {};
                                try {
                                    for (var t = $aarpe.cookie("at").match(/[a-z]*=[a-z0-9_\-/+=:/\.\(\)\\]*/gi), a = 0; a < t.length; a++) {
                                        var r = t[a].substring(0, t[a].indexOf("=")),
                                            n = t[a].substring(t[a].indexOf("=") + 1);
                                        e[r] = n
                                    }
                                } catch (i) {}
                                return e
                            }();
                            $aarpe(t).ready(e)
                        }()
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Site Property (EVERYWHERE ONLY)"), "Everywhere")
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Form Page Load",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "%DataLayer-ANA-REGISTYPE-Taxonomy-[webdata]%",
                    eVar155: "%DataLayer-ANA-VAR-1-Taxonomy-[pagedata]%",
                    eVar156: "%DataLayer-ANA-VAR-2-Taxonomy-[pagedata]%",
                    eVar157: "%DataLayer-ANA-VAR-3-Taxonomy-[pagedata]%",
                    eVar158: "%DataLayer-ANA-VAR-4-Taxonomy-[pagedata]%",
                    eVar159: "%DataLayer-ANA-VAR-5-Taxonomy-[pagedata]%",
                    eVar160: "%DataLayer-ANA-PAGETYPE-Taxonomy-[pagedata]%",
                    eVar161: "%DataLayer-ANA-PRODDID-Taxonomy-[userdata]%",
                    eVar162: "%DataLayer-ANA-PRODCDE-Taxonomy-[userdata]%",
                    eVar163: "%DataLayer-ANA-ACTTYPE-Taxonomy-[userdata]%",
                    eVar164: "%DataLayer-ANA-PRODTYPE-Taxonomy-[webdata]%",
                    eVar165: "%DataLayer-ANA-TRANSID-Taxonomy-[webdata]%",
                    eVar166: "%DataLayer-ANA-MEMFLG-Taxonomy-[userdata]%",
                    eVar167: "%DataLayer-ANA-APPTIME-Taxonomy-[userdata]%",
                    eVar168: "%DataLayer-ANA-APPSTEP-Taxonomy-[userdata]%",
                    eVar169: "%DataLayer-ANA-MIDID-Taxonomy-[userdata]%",
                    eVar170: "%DataLayer-ANA-ZIPCODE-Taxonomy-[userdata]%",
                    eVar207: "%DataLayer-ANA-KONNEXID-Taxonomy-[userdata]%",
                    eVar28: "%DataLayer-ANA-MEMDTE-Taxonomy-[userdata]%",
                    eVar30: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%",
                    pageName: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%"
                }]
            }],
            scope: {
                URI: {
                    include: [/\/applications\/Volunteer_with_AARP_Tax_Aide\/aboutYou.action/i, /\/applications\/volunteer\/experience-corps-volunteer-sign-up.action/i, /\/applications\/volunteer\/state-volunteer-sign-up.action/i, /\/volunteer\/general-volunteer-sign-up.action/i, /\/applications\/volunteer\/dsp-interest-sign-up.action/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA: MEM-BEN-AD",
            trigger: [{
                engine: "sc",
                command: "addEvent",
                arguments: ["event156"]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    t.products = _satellite.getVar("ANA: MEM-BEN-AD: Impressions")
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: MEM-BEN-AD: Impressions"), /.+/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: MSS Order Transaction",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "%ANA: Registration Type%",
                    eVar16: "%AT: Product Purchase Price%",
                    eVar207: "%ANA: konnexId%",
                    eVar60: "%AT: Key Code%",
                    eVar8: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%",
                    prop68: "%ANA: konnexId%"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event10"]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Order Confirmation"), "true")
            }],
            event: "pagebottom"
        }, {
            name: "ANA: MSS Registration",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "%ANA: Registration Type%",
                    eVar60: "%AT: Key Code%",
                    eVar8: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event10"]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Registration Completed"), /true/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Membership-Page-Load-Data-Layer",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "%DataLayer-ANA-REGISSTATUS-Taxonomy-[webdata]%",
                    eVar151: "%DataLayer-ANA-ERRCDE-Taxonomy-[errors]%",
                    eVar152: "%DataLayer-ANA-ERRMESS-Taxonomy-[errors]%",
                    eVar155: "%DataLayer-ANA-VAR-1-Taxonomy-[pagedata]%",
                    eVar156: "%DataLayer-ANA-VAR-2-Taxonomy-[pagedata]%",
                    eVar157: "%DataLayer-ANA-VAR-3-Taxonomy-[pagedata]%",
                    eVar158: "%DataLayer-ANA-VAR-4-Taxonomy-[pagedata]%",
                    eVar159: "%DataLayer-ANA-VAR-5-Taxonomy-[pagedata]%",
                    eVar160: "%DataLayer-ANA-PAGETYPE-Taxonomy-[pagedata]%",
                    eVar161: "%DataLayer-ANA-PRODDID-Taxonomy-[userdata]%",
                    eVar162: "%DataLayer-ANA-PRODCDE-Taxonomy-[userdata]%",
                    eVar163: "%DataLayer-ANA-ACTTYPE-Taxonomy-[userdata]%",
                    eVar164: "%DataLayer-ANA-REGISTYPE-Taxonomy-[webdata]%",
                    eVar165: "%DataLayer-ANA-TRANSID-Taxonomy-[webdata]%",
                    eVar166: "%DataLayer-ANA-MEMFLG-Taxonomy-[userdata]%",
                    eVar167: "%DataLayer-ANA-APPTIME-Taxonomy-[userdata]%",
                    eVar168: "%DataLayer-ANA-APPSTEP-Taxonomy-[userdata]%",
                    eVar169: "%DataLayer-ANA-MIDID-Taxonomy-[userdata]%",
                    eVar170: "%DataLayer-ANA-ZIPCODE-Taxonomy-[userdata]%",
                    eVar182: "%DataLayer-ANA-PYMTTYPE-Taxonomy-[webdata]%",
                    eVar183: "%ANA-MEM-Campaign-Name%",
                    eVar184: "%ANA-MEM-Experience-Name%",
                    eVar187: "%DataLayer-ANA-MEMTERM-Taxonomy-[userdata]%",
                    eVar188: "%DataLayer-ANA-MEMBERID-Taxonomy-[userdata]%",
                    eVar189: "%DataLayer-ANA-LANGUAGE-Taxonomy-[pagedata]%",
                    eVar190: "%DataLayer-ANA-TODAYSDTE-Taxonomy-[pagedata]%",
                    eVar191: "%DataLayer-ANA-ORDERAMT-Taxonomy-[webdata]%",
                    eVar197: "%ANA:TCCampaignId%",
                    eVar207: "%DataLayer-ANA-KONNEXID-Taxonomy-[userdata]%",
                    eVar28: "%DataLayer-ANA-MEMDTE-Taxonomy-[userdata]%",
                    eVar30: "%DataLayer-ANA-MEMSTATUS-Taxonomy-[userdata]%",
                    eVar32: "%DataLayer-ANA-MEMEXPDATE-Taxonomy-[userdata]%",
                    eVar39: "%DataLayer-ANA-SUBMITSTATUS-Taxonomy-[webdata]%",
                    eVar53: "%DataLayer-ANA-DSOUID-Taxonomy-[userdata]%",
                    eVar60: "%DataLayer-ANA-CAMPAIGNID-Taxonomy-[webdata]%",
                    eVar8: "%DataLayer-ANA-STATUS-Taxonomy-[userdata]%",
                    pageName: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%"
                }]
            }],
            scope: {
                URI: {
                    include: [/\/(mem|member)\//i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA: PROD: Foresee Results: AYR: 071217 - PROD",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n// Instructions: please embed this snippet directly into every page in your website template.\n// For optimal performance, this must be embedded directly into the template, not referenced // as an external file.\n\n// ForeSee Embed Script v2.00\n// DO NOT MODIFY BELOW THIS LINE *****************************************\n;(function (g) {\nvar d = document, am = d.createElement(\'script\'), h = d.head || d.getElementsByTagName("head")[0], fsr = \'fsReady\', aex = {\n"src": "//gateway.foresee.com/sites/aceyourretirement-org/production/gateway.min.js",\n"type": "text/javascript",\n"async": "true",\n"data-vendor": "fs",\n"data-role": "gateway"\n};\nfor (var attr in aex){am.setAttribute(attr, aex[attr]);}h.appendChild(am);g[fsr] = function () {var aT = \'__\' + fsr + \'_stk__\';g[aT] = g[aT] || [];g[aT].push(arguments);}; })(window); // DO NOT MODIFY ABOVE THIS LINE *****************************************\n</script>'
                }]
            }],
            scope: {
                subdomains: {
                    include: [/aceyourretirement.org/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA: PW-CREATE-START",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar148: "login",
                    eVar149: "%ANA:PageName% - PW Create Start"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event145"]
            }],
            scope: {
                URI: {
                    include: [/\/online-community\/account\/pwdreset.action/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA: PW-RESET-COMPLETE",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar148: "login",
                    eVar149: "%ANA:PageName% - PW Reset Complete",
                    eVar150: "password-reset-submit"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event144"]
            }],
            scope: {
                URI: {
                    include: [/\/online-community\/account\/pwdrequest.action/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: PW-RESET-CONFIRM"), "Back to AARP homepage")
            }],
            event: "pagebottom"
        }, {
            name: "ANA: PW-RESET-START",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar148: "login",
                    eVar149: "%ANA:PageName% - PW Reset Start"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event143"]
            }],
            scope: {
                URI: {
                    include: [/\/online-community\/account\/pwdrequest.action/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: PW-RESET-START"), "Password Assistance")
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Registration And Member Status for Money And Beauty APP (don't delete)",
            trigger: [{
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, r) {
                    function n(e) {
                        for (var a = e + "=", r = t.cookie.split(";"), n = 0; n < r.length; n++) {
                            for (var i = r[n];
                                " " == i.charAt(0);) i = i.substring(1);
                            if (0 == i.indexOf(a)) return i.substring(a.length, i.length)
                        }
                        return ""
                    }
                    var i, o;
                    i = n("at"), (o = n("email")) && o.length > 0 ? r.eVar8 = "partial-login" : i && i.length > 0 ? r.eVar8 = "full-login" : r.eVar8 = "",
                        function() {
                            function e(e, r) {
                                return t[e] !== a ? t[e] : r
                            }
                            var t = function() {
                                var e = {};
                                try {
                                    for (var t = n("at"), a = decodeURIComponent(t.toString()), r = /[a-z]*=[a-z0-9_\-/+=:/\.\(\)\\]*/gi, i = a.match(r), o = 0; o < i.length; o++) {
                                        var s = i[o].substring(0, i[o].indexOf("=")),
                                            c = i[o].substring(i[o].indexOf("=") + 1);
                                        e[s] = c
                                    }
                                } catch (l) {}
                                return e
                            }();
                            switch (e("ms", "")) {
                                case "0":
                                    r.eVar30 = "ACTIVE";
                                    break;
                                case "1":
                                    r.eVar30 = "NON-MEMBER";
                                    break;
                                case "4":
                                    r.eVar30 = "CANCELLED";
                                    break;
                                case "5":
                                    r.eVar30 = "EXPIRED";
                                    break;
                                case "D":
                                    r.eVar30 = "D";
                                    break;
                                case "M":
                                    r.eVar30 = "M";
                                    break;
                                case "U":
                                    r.eVar30 = "U";
                                    break;
                                default:
                                    r.eVar30 = ""
                            }
                        }()
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar(""), /(beauty)|(money)/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: TTAR Confirm",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "auto_renew_enrollment"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event10", "event8", "event98"]
            }],
            scope: {
                URI: {
                    include: [/\/mem\/autorenew\/confirm($|[^a-z])/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA: Target Close Confirmation Page - Join",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "AARP_Membership_Registration",
                    eVar16: "%ANA: HPC Transaction Total%",
                    eVar60: "%AT: Key Code%",
                    server: "%ANA: Host Name%",
                    pageName: "%ANA:PageName%",
                    channel: "%ANA:Channel%",
                    hier1: "%ANA: Section%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    t.events = "event10", t.eVar5 = "DSO-JOIN-CONFIRM"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: HPC Page Name"), /join-confirmation/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA: Target Close Confirmation Page - Renew",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "AARP_Membership_Registration",
                    eVar16: "%ANA: HPC Transaction Total%",
                    eVar60: "%AT: Key Code%",
                    server: "%ANA: Host Name%",
                    pageName: "%ANA:PageName%",
                    channel: "%ANA:Channel%",
                    hier1: "%ANA: Section%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    t.events = "event10", t.eVar5 = "DSO-RENEW-CONFIRM"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: HPC Page Name"), /renew-confirmation/i)
            }],
            event: "pagebottom"
        }, {
            name: "ANA:BeautyAppEvents",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar67: "aarpe"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event29", "event90"]
            }],
            scope: {
                URI: {
                    include: [/\/etc\/everywhere\/statics\/emag\/beauty\/index.html/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ANA:Get Started Registration",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar13: "%AA-ANG: Registration Type%",
                    eVar5: "%AA-ANG: Internal Campaign%",
                    eVar60: "%AT: Key Code%"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event10"]
            }],
            scope: {
                URI: {
                    include: [/\/applications\/user\/membershipRegister/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Registration Type"), /site_Registration/i)
            }],
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - Benefits Discounts Pages",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c57eb8e64746d7d910003a2.js"
                    }, {
                        src: "satellite-5c6b218864746d17ba000668.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/(.*)/i],
                    exclude: [/(advocacy|block\-party|aarp\-chapters|aarp\-local|learn50|driver\-safety\-volunteering|aarp\-foundation|aarp\-foundation|aarp\-state\-offices\-volunteering|create\-the\-good|drive\-to\-end\-hunger)/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Entertainment",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c52eced64746d2cab003169.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/(.*)/i]
                },
                domains: [/aarp\.org$/i]
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("DataLayer-ANA-VAR-3-Taxonomy-[pagedata]"), /entertainment/i)
            }],
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Health and Wellness - Dental",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b1d9164746d2dde0042cf.js"
                    }, {
                        src: "satellite-5c703fa964746d78b300067f.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/(delta\-dental)/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Health and Wellness - Healthcare",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b14df64746d0e86005654.js"
                    }, {
                        src: "satellite-5c703fbb64746d78b0000a81.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/flip50/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Health and Wellness - Hearing",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b183b64746d510e007428.js"
                    }, {
                        src: "satellite-5c703fcb64746d78b3000681.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/(hearing-shop-10107|hearusa)/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Health and Wellness - LTC",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b2a1864746d77400043e5.js"
                    }, {
                        src: "satellite-5c703fea64746d78b3000685.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/nyl\-long\-term\-care/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Health and Wellness - Medicare Advantage",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c70417564746d0be200123c.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/uhc\-medicare\-complete/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Health and Wellness - Medicare Supplement",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b28ce64746d7d9a0083b6.js"
                    }, {
                        src: "satellite-5c703ff864746d78ad000a7f.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/uhc\-medicare\-supplement/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Health and Wellness - RX Discounts",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b1b2c64746d330c006094.js"
                    }, {
                        src: "satellite-5c70400964746d78aa000735.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/(aarp\-prescription\-discounts\-provided\-by\-optumrx\-10187|cvs\-pharmacy\-11562|kroger\-co\-pharmacy\-11563|riteaid\-pharmacy\-11556|walmart\-pharmacy\-11558)/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Health and Wellness - Vision Discounts",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b257e64746d3e9e0018f3.js"
                    }, {
                        src: "satellite-5c70403664746d78aa000737.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/(eyemed\-vision\-discounts|glassescom\-10095|lenscrafters\-10098|sears\-optical\-10080|target\-optical\-10055)/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Health and Wellness - Vision Insurance",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b274664746d2dde00430c.js"
                    }, {
                        src: "satellite-5c70404164746d78aa000739.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/eyemed-vision-insurance/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Restaurant",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c52ec4664746d1924002eae.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/(.*)/i]
                },
                domains: [/aarp\.org$/i]
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("DataLayer-ANA-VAR-3-Taxonomy-[pagedata]"), /restaurants/i)
            }],
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Shopping",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c52e6c064746d138c00255e.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/(.*)/i]
                },
                domains: [/aarp\.org$/i]
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("DataLayer-ANA-VAR-3-Taxonomy-[pagedata]"), /shoppingandgroceries/i)
            }],
            event: "pagebottom"
        }, {
            name: "ASI - Discounts - www.aarp.org - ODP Page - Travel",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c52eb8064746d7bc6000646.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits\-discounts\/all\/(.*)/i]
                },
                domains: [/aarp\.org$/i]
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("DataLayer-ANA-VAR-3-Taxonomy-[pagedata]"), /(travel|autoservice)/i)
            }],
            event: "pagebottom"
        }, {
            name: "AT: 4S Express Join Conversion Mbox",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div class="mboxDefault" id="memExpressJoinConfirm"></div>'
                }]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5a3831af64746d7fe800afed.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), "appsec:/mem/join/express/confirmation")
            }, function() {
                return "BILL_ME" !== _satellite.getVar("AT: Payment Type (Membership)")
            }],
            event: "pagebottom"
        }, {
            name: "AT: 4S Join Conversion Mbox",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div class="mboxDefault" id="memJoinConfirm"></div>'
                }]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5978e51d64746d65f3001631.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/join\/confirmation/i)
            }, function() {
                return "BILL_ME" !== _satellite.getVar("AT: Payment Type (Membership)")
            }],
            event: "pagebottom"
        }, {
            name: "AT: 4S Renew Conversion Mbox",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div class="mboxDefault" id="memRenewConfirm"></div>'
                }]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5977ae6264746d506701ca3b.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/(renew|erenew|ewinback)\/confirmation/i)
            }, function() {
                return "BILL_ME" !== _satellite.getVar("AT: Payment Type (Membership)")
            }],
            event: "pagebottom"
        }, {
            name: "AT: 4S TTAR Conversion Mbox",
            trigger: [{
                engine: "sc",
                command: "customSetup",
                arguments: [function() {}]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<div class="mboxDefault" id="membershipTTARConfirm"></div>'
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-592dc1fa64746d6ede00173d.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), "appsec:/mem/autorenew/confirm")
            }],
            event: "pagebottom"
        }, {
            name: "AT: AARP Global mBox",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div id="aarpe_global" class="mboxDefault"></div>\n<script>\nmboxCreate("aarpe_global",\n"user.categoryId="+_satellite.getVar(\'AARP.Webdata.categoryIdD\'));\n</script>'
                }]
            }],
            event: "pagebottom"
        }, {
            name: "AT: AARP aarpFavortiesSegments mBox",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div id="aarpFavortiesSegments" class="mboxDefault"></div>\n<script>\nmboxCreate("aarpFavortiesSegments");\n</script>'
                }]
            }],
            event: "pagebottom"
        }, {
            name: "AT: Mem silver Express Join Conversion Mbox",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div class="mboxDefault" id="memExpressJoinConfirm"></div>'
                }]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5ab950e864746d5a6800a3a5.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/join\/sandbox\/express\/confirmation/i)
            }, function() {
                return "BILL_ME" !== _satellite.getVar("AT: Payment Type (Membership)")
            }],
            event: "pagebottom"
        }, {
            name: "AT: Mem silver Join Conversion Mbox",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div class="mboxDefault" id="memJoinConfirm"></div>'
                }]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5ab9524164746d4329005937.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/join\/sandbox\/confirmation/i)
            }, function() {
                return "BILL_ME" !== _satellite.getVar("AT: Payment Type (Membership)")
            }],
            event: "pagebottom"
        }, {
            name: "AT: Mem silver Join Conversion Mbox (BILL ME)",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div class="mboxDefault" id="memBillMeConfirm"></div>'
                }]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5ab9564364746d4ff5006270.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AT: Payment Type (Membership)"), "BILL_ME")
            }, function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), "appsec:/mem/join/sandbox/confirmation")
            }],
            event: "pagebottom"
        }, {
            name: "AT: Mem silver Renew Conversion Mbox",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div class="mboxDefault" id="memRenewConfirm"></div>'
                }]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5ab9538664746d4329005947.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/(renew|erenew)\/sandbox\/confirmation/i)
            }, function() {
                return "BILL_ME" !== _satellite.getVar("AT: Payment Type (Membership)")
            }],
            event: "pagebottom"
        }, {
            name: "AT: Mem silver TTAR Conversion Mbox",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div class="mboxDefault" id="membershipTTARConfirm"></div>'
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5ab9571c64746d3db3005721.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), "appsec:/mem/autorenew/sandbox/confirm")
            }],
            event: "pagebottom"
        }, {
            name: "Adwords Global Site - Caregiving",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5aac2a1c64746d762f005901.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                var e = t.location.href.replace(/https?:[/][/]/, ""),
                    a = e.split("?").length > 1 ? e.split("?")[0] : e;
                return a.indexOf("community.aarp.org/t5/Caregiving") > -1 || a.indexOf("www.aarp.org/caregiving/") > -1
            }],
            event: "pagebottom"
        }, {
            name: "Adwords_Global_SiteTag_01/22/2018",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-54249166fcc89a9f3e000160.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: ["(mem|member)/joinconfirm", "/mem/join/expressconfirm", "(mem|member)/renewconfirm", "mem/renew/expressconfirm", "/caregiving/", /intcmp=DSO-REG-CONFIRM-OCCARE072018/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "Adwords_Global_SiteTag_01/22/2018_OCCARE072018",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b5f55c964746d6e5b001422.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/finalize.action)|(\/applications\/user\/register\/confirmation))/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("intcmp"), "DSO-REG-CONFIRM-OCCARE072018")
            }],
            event: "pagebottom"
        }, {
            name: "BounceExchangeTag",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<!-- Start BounceX tag. Deploy at the beginning of document head. -->\n<script>\n(function(d) {\nvar e = d.createElement('script');\ne.src = d.location.protocol + '//tag.bounceexchange.com/2568/i.js';\ne.async = true;\nd.getElementsByTagName(\"head\")[0].appendChild(e);\n}(document));\n</script>\n<!-- End BounceX Tag-->"
                }]
            }],
            conditions: [function() {
                function t(t, a) {
                    a || (a = e.location.href), t = t.replace(/[\[\]]/g, "\\$&");
                    var r = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(a);
                    return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
                }
                var a = e.location.href.split(e.location.origin)[1],
                    r = a ? a.split("?")[0] : "",
                    n = ["sm-ss", "ss-embed", "ss-games", "ss-beta", "ss-employee"];
                if ("/online-community/loginform.action" == r || "/online-community/register/index.action" == r || "/applications/user/register" == r) {
                    var i = t("promo", decodeURIComponent(a)),
                        o = i ? i.toLowerCase() : i;
                    return n.indexOf(o) > -1
                }
            }],
            event: "pagetop"
        }, {
            name: "Brand_Flashtalking",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5a8c6d8164746d6e02003d0a.html",
                        data: ["INSERT_TRANSACTION_CURRENCY_HERE", "INSERT_TRANSACTION_ID_HERE", "INSERT_TRANSACTION_NAME_HERE", "INSERT_TRANSACTION_QUANTITY_HERE", "INSERT_TRANSACTION_TYPE_HERE", "INSERT_TRANSACTION_VALUE_HERE"]
                    }]
                }]
            }],
            conditions: [function() {
                var e = t.location.href.split("?")[0].trim().replace(/https?:[/][/]/, "").replace(/[/]$/, "");
                return e.indexOf("www.aarp.org") > -1 || e.indexOf("www-s.aarp.org") > -1 || e.indexOf("secure.aarp.org") > -1 || e.indexOf("states.aarp.org") > -1 || e.indexOf("local.aarp.org") > -1 || e.indexOf("login.aarp.org") > -1 || e.indexOf("travel.aarp.org") > -1 || e.indexOf("now.aarp.org") > -1 || e.indexOf("endseniorhunger.aarp.org") > -1 || e.indexOf("recipes.aarp.org") > -1 || e.indexOf("community.aarp.org") > -1 || e.indexOf("jobs.aarp.org") > -1 || e.indexOf("connect2affect.org") > -1 || e.indexOf("www.soyaarp.org") > -1 || e.indexOf("secure-s.aarp.org") > -1
            }],
            event: "domready"
        }, {
            name: "Caregiving_Tulsa_2018",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5ae1e85064746d79c10145cf.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/news/free-resources-for-oklahoma-family-caregivers-tulsa-ok-2017-11-19.html"]
                },
                subdomains: {
                    include: ["local.aarp.org"]
                }
            },
            event: "pagebottom"
        }, {
            name: "DCM_Floodlight_AARP_Homepage_20180118",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5a5f8d9b64746d4225000538.js"
                    }]
                }]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b06d78d64746d45c4000aa4.html",
                        data: []
                    }, {
                        src: "satellite-5b16e5ea64746d207f007d99.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: [/\/[a-z]/i]
                },
                subdomains: {
                    include: [/(www.aarp.org|www-s.aarp.org|www-qa.aarp.org)/i]
                },
                protocols: [/https:/i]
            },
            event: "pagebottom"
        }, {
            name: "DFA Memebership Benefits - Feb 09 2015 - MIV",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-54d5567e6438390019740300.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/benefits-discounts\/($|[^a-z])/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "DM&P - www.aarp.org - All Pages",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<div class="OUTBRAIN" data-src= %anaWebData.cleanUrl% data-widget-id="TR_1" data-ob-template="aarp" ></div><script type="text/javascript" async="async" src="https://widgets.outbrain.com/outbrain.js"></script>\n'
                }]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5c4d7f4764746d4c210013fe.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: [/(\/signup\/displayCourseSelection(.*))/i, /(\/paymentprofile\/payment)/i, /\/mem\/(join\/express)($|[^a-z])/i, /\/(mem|member)\/((join|renew)(billing))($|[^a-z])/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "DM&P - www.aarp.org - Resume Advisor",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c445f8364746d7d270000d5.js"
                    }, {
                        src: "satellite-5c49e13664746d138c000269.js"
                    }, {
                        src: "satellite-5c50935664746d138c001924.js"
                    }, {
                        src: "satellite-5c50935664746d138c001925.js"
                    }, {
                        src: "satellite-5c50935664746d138c001926.js"
                    }, {
                        src: "satellite-5c50935664746d138c001927.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/work\/resume\-advisor/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "DM&P - www.aarp.org - Resume Advisor Confirmation Page",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c4467c264746d4e6600434c.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/work\/resume\-advisor\/success\//i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "Decibel Insight Base Code",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5bc6324c64746d59b4007e4b.js"
                    }]
                }]
            }],
            event: "pagebottom"
        }, {
            name: "Digital Marketing TGF Oplytic CPA Reg 08312018",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59c5732b64746d6e370148c7.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/page.aspx"]
                },
                subdomains: {
                    include: ["pages.email.aarp.org"]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("QS"), "773ed3059447707df90072f26c9f62a23967b12f768e0d6dea038862459bc191")
            }],
            event: "windowload"
        }, {
            name: "DoubleClick (Send data from Google into SiteCatalyst) PROD-13245",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\nfunction getVisId()\n{\nvar i,x,y,pageCookies=document.cookie.split(";");\nfor (i=0;i<pageCookies.length;i++)\n{\nx=pageCookies[i].substr(0,pageCookies[i].indexOf("="));\ny=pageCookies[i].substr(pageCookies[i].indexOf("=")+1);\nx=x.replace(/^\\s+|\\s+$/g,"");\nif (x=="s_vi")\n{ var visRegExp=/[0-9A-F]+-[0-9A-F]+/g; var s_visId=y.match(visRegExp); return unescape(s_visId); }\n}\n}\nvar scID=getVisId();\n</script>'
                }]
            }],
            event: "pagebottom"
        }, {
            name: "DriverSafety PageView N Conversion - Facebook-167789046887901",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5aa6dce564746d5a68003879.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/signup/displayAdditionalInformation.html", "/signup/displayGifterReceipt.html"]
                },
                domains: [/aarpdriversafety\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "Facebook pixel - sitewide (MIV) ",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-54daa4ad3034620019ac0800.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: ["https://assets.aarp.org/aarp.org_/elvis/", /\/(mem|member)\/((join|renew)confirm)($|[^a-z])/i, /\/mem\/join\/expressconfirm($|[^a-z])/i, /emo=email_verification/i, /((online-community\/register\/finalize.action)|(applications\/user\/register\/confirmation)|(online-community\/register\/membershipRegistrationSuccess.action)|(\/online-community\/register\/membershipSuccess.action)|(\/online-community\/register\/membershipRegister.action))/i]
                },
                subdomains: {
                    include: [/aarp.org/i, /thegirlfriend.com/i, /sistersletter.com/i]
                }
            },
            event: "domready"
        }, {
            name: "Facebook_Complete_Registration",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5ac7d74164746d5a6801112c.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                var e = t.location.href.replace(/https?:[/][/]/, ""),
                    a = "TRUE" == _satellite.getVar("ANA: Registration Completed (as)") && e.indexOf("online-community/register/finalize.action") > -1,
                    r = "TRUE" == _satellite.getVar("ANA: Registration Completed (as)") && e.indexOf("applications/user/register/confirmation") > -1,
                    n = "site_Registration" == _satellite.getVar("ANA: Registration Type (as)") && e.indexOf("online-community/register/membershipRegistrationSuccess.action") > -1,
                    i = e.indexOf("/online-community/register/membershipSuccess.action") > -1,
                    o = e.indexOf("/online-community/register/membershipRegister.action") > -1;
                return a || n || i || r || o
            }],
            event: "windowload"
        }, {
            name: "Facebook_Tracking_IPLCareConsolidatedLP_102218",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5bd1d76064746d3f8c0037e0.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                var e = t.location.href.split("?")[0].trim().replace(/https?:[/][/]/, "").replace(/[/]$/, ""),
                    a = !1;
                if (e.indexOf("campaigns.aarp.org/findaworkshop") > -1) return a = !0;
                switch (e) {
                    case "campaigns.aarp.org/aarp-careversations":
                    case "campaigns.aarp.org/aarp-job-search-workshops":
                        a = !0
                }
                return a
            }],
            event: "pagebottom"
        }, {
            name: "Foresee prod new",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n// ForeSee Production Embed Script v2.01\n// DO NOT MODIFY BELOW THIS LINE *****************************************\n;(function (g) {\n  var d = document, am = d.createElement(\'script\'), h = d.head || d.getElementsByTagName("head")[0], fsr = \'fsReady\',\n  aex = { \n    "src": "//gateway.foresee.com/sites/aarp-org/" + (_satellite && _satellite.settings && _satellite.settings.isStaging !== false ? "staging" : "production") +"/gateway.min.js",\n    "type": "text/javascript", \n    "async": "true", \n    "data-vendor": "fs", \n    "data-role": "gateway" \n  };\n  for (var attr in aex) { am.setAttribute(attr, aex[attr]); } h.appendChild(am); g[fsr] || (g[fsr] = function () { var aT = \'__\' + fsr + \'_stk__\'; g[aT] = g[aT] || []; g[aT].push(arguments); });\n})(window);\n// DO NOT MODIFY ABOVE THIS LINE *****************************************\n</script>'
                }]
            }],
            scope: {
                URI: {
                    exclude: [/(\/paymentprofile\/payment)/i]
                },
                subdomains: {
                    exclude: [/careers.aarp.org/i]
                },
                domains: [/aarpdriversafety\.org$/i, /aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "Foundation - www.aarp.org - Savings Jar",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5ca36b2b64746d5a290042f1.html",
                        data: []
                    }, {
                        src: "satellite-5ca36b2b64746d5a290042f2.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/aarp-foundation/our-work/income/mysavingsjar.html"]
                }
            },
            event: "pagebottom"
        }, {
            name: "Foundation 2018 Campaign Landing Page_APN DSP Conversion Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b15836764746d41c500341e.html",
                        data: []
                    }, {
                        src: "satellite-5b18337e64746d0bba0002e0.html",
                        data: []
                    }, {
                        src: "satellite-5b1e9d0564746d5ad8002421.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/aarp-foundation\/($|[^a-z])/i]
                },
                domains: [/aarp\.org$/i],
                protocols: [/https:/i]
            },
            event: "pagebottom"
        }, {
            name: "Girlfriend - https://cp.email.aarp.org/gfns",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c92995b64746d2d09005297.js"
                    }]
                }]
            }],
            conditions: [function() {
                var e = t.location.href.replace(/https?:[/][/]/, "");
                return "cp.email.aarp.org/gfns" == (e.split("?").length > 1 ? e.split("?")[0] : e)
            }],
            event: "pagebottom"
        }, {
            name: "Global:Domain",
            trigger: [{
                engine: "sc",
                command: "customSetup",
                arguments: [function() {}]
            }, {
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5b587a5464746d32b70033f1.js"
                    }, {
                        src: "satellite-5b56bfd264746d750c003cca.js"
                    }]
                }]
            }],
            event: "pagetop"
        }, {
            name: "Global:Domain:Utilities",
            trigger: [{
                command: "loadBlockingScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5b6b56d964746d199f002291.js"
                    }, {
                        src: "satellite-5b7dbec964746d450c00514f.js"
                    }]
                }]
            }],
            event: "pagebottom"
        }, {
            name: "Google Adwords_Event Snippet_Caregiving_Guide Request",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5be06efa64746d3e130037b2.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/caregiving\/prepare-to-care-planning-guide-thank-you.html/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "Google Adwords_Event Snippet_Caregiving_Planning Guide",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5be07b0364746d3e1000456e.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/caregiving/prepare-to-care-planning-guide.html"]
                }
            },
            event: "pagebottom"
        }, {
            name: "Google Global Site Tag",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5b9ab6e464746d0c21000ba0.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: [/\/(mem|member)\/((join|renew)(billing))($|[^a-z])/i, /\/mem\/(join\/express)($|[^a-z])/i, /(\/paymentprofile\/payment)/i, /(\/signup\/displayCourseSelection(.*))/i]
                },
                subdomains: {
                    include: [/aarp.org/i, /aarpdriversafety.org/i, /thegirlfriend.com/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "HasOffers_COI_MKTG.RETSWPS17_101517",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5c74712164746d78ad00190f.html",
                        data: []
                    }, {
                        src: "satellite-5a95c68664746d4246002e12.html",
                        data: []
                    }, {
                        src: "satellite-5bff03ee64746d101a0067f5.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("emo"), "email_verification")
            }],
            event: "pagebottom"
        }, {
            name: "HasOffers_ConfirmedOptInRegistrations_Disrupt Aging Newsletter_06112018",
            scope: {
                URI: {
                    include: ["/disrupt-aging/join-us/newsletter-confirmed/"]
                }
            },
            event: "pagebottom"
        }, {
            name: "HasOffers_Email Signup Submitted_Disrupt Aging Newsletter_07132018",
            scope: {
                URI: {
                    include: [/\/disrupt_thanks/i]
                },
                subdomains: {
                    include: [/cp.email.aarp.org/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "Kana Chat - NEW",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5ba48a6064746d6c840034fa.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: locale"), /^((?!es).)*$/i)
            }, function() {
                return -1 !== ["Desktop", "iPhone", "iPad", "iPod", "Windows Phone", "Blackberry", "Android"].indexOf(_satellite.browserInfo.deviceType)
            }, function() {
                var t = e.location.pathname,
                    a = (e.location, _satellite.getVar("DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]").trim()),
                    r = /^appsec:\/(mem)\/((join|renew|ebill|autorenew)\/(application|findme|billing))$/,
                    n = /^appsec:\/(mem)\/((join|ebill)\/(application|findme|billing))$/,
                    i = !1,
                    o = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (o && n.test(a)) i = !0;
                else if (o) return !1;
                switch (t) {
                    case "/applications/user/register":
                        i = !0;
                        break;
                    case "/applications/acct/myAccount.action":
                    case "/applications/acct/editAccount.action":
                    case "/applications/acct/editInterests.action":
                    case "/applications/acct/editNewsletters.action":
                        _satellite.setVar("lastName", chatLastName), i = !0;
                        break;
                    case "/help/":
                    case "/espanol/ayuda/":
                        i = !0;
                        break;
                    case "/benefits-discounts/my-membership/aarp-member-cancellation/":
                    case "/membership/deceased/":
                        i = !0;
                        break;
                    default:
                        !i && r.test(a) && (i = !0)
                }
                return i
            }],
            event: "pagebottom"
        }, {
            name: "MIV - appsec.aarp.org - All Pages except KISS, Spring, Spring Silver flow, and its Confirmation Pages",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5c19081164746d259f017006.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: [/\/(mem\/joinconfirm|mem\/join\/expressconfirm|member\/joinconfirm|mem\/renewconfirm|mem\/renew\/expressconfirm|member\/renewconfirm)/i, /\/(mem|member)\/((join|renew)(billing))($|[^a-z])/i, /(\/paymentprofile\/payment)/i]
                },
                subdomains: {
                    exclude: [/appsec\.aarp\.org/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "MIV - appsec.aarp.org - Join - Kiss, Spring, and Spring Silver",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c250da664746d408b01ad34.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/(mem|member)\/((join\/expressconfirm)|(joinconfirm))($|[^a-z])/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /(appsec:\/mem\/(join|(join\/sandbox))\/(confirmation|express\/confirmation))($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "MIV - appsec.aarp.org - KISS, Spring, Spring Silver flow, and its Confirmation Pages",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5c0e5d7864746d4c7100d856.html",
                        data: []
                    }, {
                        src: "satellite-5c1811e264746d101a00e40d.html",
                        data: []
                    }, {
                        src: "satellite-5c44521d64746d5cc600431d.html",
                        data: []
                    }, {
                        src: "satellite-5c828bdc64746d46f400379e.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/(mem|member)\/(((join|renew)\/expressconfirm)|((join|renew)confirm))($|[^a-z])/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /(appsec:\/mem\/(join|(join\/sandbox))\/(confirmation|express\/confirmation))|(appsec:\/mem\/(renew|erenew|renew\/sandbox)\/confirmation)($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "MIV - appsec.aarp.org - Renew - Kiss, Spring, and Spring Silver",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c250f1264746d6151018012.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/(mem|member)\/((renew\/expressconfirm)|(renewconfirm))($|[^a-z])/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/(renew|erenew|renew\/sandbox)\/confirmation($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "MSS/MP2 DFA Application -- Feb 09 2015 - MIV",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-54d54c0363636200162a0400.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/(mem|member)\/join($|[^a-z])/i],
                    exclude: [/\/mem\/join\/expressconfirm($|[^a-z])/i, /\/mem\/join\/express($|[^a-z])/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "MSS/MP2 DFA Join Billing -- Feb 09 2015 - MIV",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-54d54e3a6531660016850100.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/(join|(join\/express)|(join\/sandbox))\/billing($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "NuDetect POC Test",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5b3fa49964746d1790007956.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/((\/online-community\/register\/(index|join).action)|(\/applications\/user\/register))/i]
                }
            },
            conditions: [function() {
                return "login.aarp.org" == location.hostname ? _satellite.setVar("nujs_key", "w-712739") : _satellite.setVar("nujs_key", "w-701180"), !0
            }],
            event: "windowload"
        }, {
            name: "Sharethrough Pixel EG Digital Marketing Fraud Watch Alert Tag 09082018 ",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59a6ebdf64746d6e400077e0.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/site/SPageNavigator/FWN_COI_Response_TY.htm", "site/SPageNavigator/FWN_COI_Response_TY"]
                },
                subdomains: {
                    include: ["action.aarp.org"]
                }
            },
            event: "pagebottom"
        }, {
            name: "Sisters 2018 Campaign Landing Page_mPlatform Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5bf312a264746d19e600775c.html",
                        data: []
                    }, {
                        src: "satellite-5bf3249164746d101a0031c8.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: [/sistersletter.com/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "Sisters 2018 Confirmation Page_mPlatform Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5bf3296e64746d46160074de.html",
                        data: []
                    }, {
                        src: "satellite-5bf4269164746d3e1600d0cf.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/sistersletter.com\/subscription-confirmed\//i]
                }
            },
            event: "pagebottom"
        }, {
            name: "Sitewide - Https (DFA Universal - MIV)",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-54d5496930616600190e0000.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: ["https://assets.aarp.org/aarp.org_/elvis/", "/online-community/people/unsubscribeGlobal.action", "/online-community/people/unsubscribeCategory.action"]
                }
            },
            event: "domready"
        }, {
            name: "StackAdapt_Tracking_IPLCareConsolidatedLP_102218",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5bd1d16b64746d04020008d9.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                var e = t.location.href.split("?")[0].trim().replace(/https?:[/][/]/, "").replace(/[/]$/, ""),
                    a = !1;
                if (e.indexOf("campaigns.aarp.org/findaworkshop") > -1) return a = !0;
                switch (e) {
                    case "campaigns.aarp.org/aarp-careversations":
                    case "campaigns.aarp.org/aarp-job-search-workshops":
                        a = !0
                }
                return a
            }],
            event: "pagebottom"
        }, {
            name: "Taboola Universal Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-56b8911c64746d730700001c.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: [/https:\/\/assets.aarp.org\/aarp.org_\/elvis\//i, /\/online-community\/people\/unsubscribeGlobal.action/i, /\/online-community\/people\/unsubscribeCategory.action/i, /\/mem\/join\/expressconfirm($|[^a-z])/i, "emo=email_verification", /\/applications\/user\/register\/confirmation/i]
                }
            },
            event: "windowload"
        }, {
            name: "Taboola_Registration_RegSuccessPg_November2018",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5bfecc3164746d728c00d5bb.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/applications\/user\/register\/confirmation/i]
                }
            },
            event: "windowload"
        }, {
            name: "TagInspector Realtime - Travel",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script src='//d22xmn10vbouk4.cloudfront.net/6a9342ee840911e78a72125d82e54c54.js' async defer></script>"
                }]
            }],
            scope: {
                subdomains: {
                    include: ["travel"]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagetop"
        }, {
            name: "TagInspector Realtime - appsec",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-599dd6c464746d6e37003207.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: ["appsec"]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagetop"
        }, {
            name: "TagInspector Realtime - login",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script src='//d22xmn10vbouk4.cloudfront.net/76387e48840911e78a72125d82e54c54.js' async defer></script>"
                }]
            }],
            scope: {
                subdomains: {
                    include: ["login"]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagetop"
        }, {
            name: "TagInspector Realtime - search",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script src='//d22xmn10vbouk4.cloudfront.net/5dc0fb9c840911e78a72125d82e54c54.js' async defer></script>"
                }]
            }],
            scope: {
                subdomains: {
                    include: ["search"]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagetop"
        }, {
            name: "TagInspector Realtime - secure",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script src='//d22xmn10vbouk4.cloudfront.net/7c71f730840911e7b63f125d82e54c54.js' async defer></script>"
                }]
            }],
            scope: {
                subdomains: {
                    include: ["secure"]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagetop"
        }, {
            name: "TagInspector Realtime - www",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script src='//d22xmn10vbouk4.cloudfront.net/57f82ce4840911e7b63f125d82e54c54.js' async defer></script>"
                }]
            }],
            scope: {
                subdomains: {
                    include: ["www"]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagetop"
        }, {
            name: "The Girlfriend - www.thegirlfriend.com - All Pages",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c38e4fd64746d1aa8000f37.js"
                    }]
                }]
            }],
            scope: {
                domains: [/thegirlfriend\.com$/i]
            },
            event: "domready"
        }, {
            name: "ThomasArts_AARP Drivers Safety Signups Campaign 12312017",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-59c17e4864746d520500c41f.js"
                    }]
                }]
            }],
            conditions: [function() {
                for (var a = [], r = e.location.search.substring(1).split("&"), n = r.length - 1; n >= 0; n--) {
                    var i = r[n].split("=");
                    i.length > 1 && a.push(i[0])
                }
                var o = t.location.href.replace(/https?:[/][/]/, ""),
                    s = /www.|test05./i,
                    c = (o = o.replace(s, function() {
                        return ""
                    })).split("?").length > 1 ? o.split("?")[0] : o,
                    l = !1;
                return ("aarpdriversafety.org/signup/displayAdditionalInformation.html" == c || "aarpdriversafety.org/signup/displayGifterReceipt.html" == c) && !0 && (l = !0), l
            }],
            event: "pagebottom"
        }, {
            name: "Twitter Brand Universal 03062018",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-569f6aa664746d5f2f000372.html",
                        data: []
                    }]
                }]
            }],
            conditions: [function() {
                var e = t.location.href.replace(/https?:[/][/]/, ""),
                    a = e.indexOf("/politics-society/advocacy/") > -1;
                if ("action.aarp.org" == e.split("/")[0] || a) return !0
            }],
            event: "pagebottom"
        }, {
            name: "Universal Event Tracking",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-59fc807964746d0bbd001075.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    exclude: [/(\/signup\/displayCourseSelection(.*))/i, /(\/paymentprofile\/payment)/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagetop"
        }, {
            name: "Utility:Get Page Load Variables",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5a14594f64746d703900b607.js"
                    }]
                }]
            }],
            event: "pagetop"
        }, {
            name: "Work & Jobs 2018 Campaign Landing Page_mPlatform Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b5b409164746d6fe80006b7.html",
                        data: []
                    }, {
                        src: "satellite-5b5f4ddd64746d4425000e1a.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/employers\/($|[^a-z])/i]
                },
                subdomains: {
                    include: [/campaigns.aarp.org/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "Work& Jobs 2018 Campaign Landing Page_APN DSP Retargeting Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5bb3b8bd64746d59b4000193.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/employerpledge\/($|[^a-z])/i]
                },
                subdomains: {
                    include: ["campaigns.aarp.org"]
                }
            },
            event: "pagebottom"
        }, {
            name: "Yahoo Dot Join Confirm_Prod",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5a6762dd64746d4c230006c6.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: [/appsec.aarp.org/i, /appsec-s.aarp.org/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("AA-ANG: Page Name"), /appsec:\/mem\/(join)\/(confirmation|express\/confirmation|sandbox\/confirmation)($)/i)
            }],
            event: "pagebottom"
        }, {
            name: "www.aarp.org - BMI Calculator Page",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c705d6564746d1010000ae9.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/health\/healthy\-living\/info\-2017\/bmi\_calculator\.html/i]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "www.aarp.org - Home Budget Calculator Page",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c796f7c64746d78aa002a9e.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["money/budgeting-saving/home_budget_calculator.html"]
                },
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }, {
            name: "zzz_10282017 MEM TV Squared Page View",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-583c3bbc64746d099c00339b.html",
                        data: []
                    }]
                }]
            }],
            event: "pagebottom"
        }, {
            name: "zzz_[PROD] Google Analytics Fill-in",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5306957f772c75be9200001d.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            event: "pagebottom"
        }],
        rules: [{
            name: "4S Membership Form Badge",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Form Badge Click",
                    setVars: {
                        prop51: "4S %ANA: 4S flowType% R4G Logo"
                    }
                }]
            }],
            selector: "[id^=dr_PointsBadge]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "4S Membership Form Badge - Quick Tout",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Form Quick Tout Badge Click",
                    setVars: {
                        prop51: "%ANA: data-formelementid - quickTout_R4G%"
                    }
                }]
            }],
            selector: ".quick-tout .dr-sprite-r4g-badge",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "4S Membership Form Print Popup",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Form print Popup",
                    setVars: {
                        prop51: "%ANA: data-formelementid -print%"
                    }
                }]
            }],
            selector: "a#printPopup",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "4S Membership Learn More Modal Click - Mobile",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Learn More Modal Click - Mobile",
                    setVars: {
                        prop51: "4S %ANA: 4S flowType% Learn More About Membership"
                    }
                }]
            }],
            selector: "a#learn-more",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "4S Membership Renew Find Me close",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Form FindMe Close",
                    setVars: {
                        prop51: "%ANA: data-formelementid - findMe_Close%"
                    }
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-597b6b1b64746d511e002fd6.js"
                    }]
                }]
            }],
            selector: "div#findMeClose.close.renew-crossIcon",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "4S Membership Renew Find Me submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Form FindMe Submit",
                    setVars: {
                        prop51: "%ANA: data-formelementid - findMe_Submit%"
                    }
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-597b6d3c64746d763401213b.js"
                    }, {
                        src: "satellite-597b7f7464746d25a50087d7.js"
                    }]
                }]
            }],
            selector: ".findMeSubmit",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA:  Volunteer Form - Click Track",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "volunteer-forms-click-track",
                    setVars: {
                        eVar144: "%ANA: Get Modal Name%",
                        eVar145: "%formCTA_value%",
                        eVar148: "volunteer",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    include: ["/applications/volunteer/experience-corps-volunteer-sign-up.action", "/applications/Volunteer_with_AARP_Tax_Aide/aboutYou.action"]
                },
                domains: [/aarp\.org$/i]
            },
            conditions: [function() {
                if ("object" == typeof this.dataset) {
                    var e = this.dataset.modalid;
                    if (_satellite.setVar("formCTA_value", e), _satellite.getVar("formCTA_value"), "experiencecorps-selectcitymodal-ok" == e || "experiencecorps-selectcitymodal-clickhere" == e || "tax-aide-form-about-you-apply-modal" == e || "experiencecorps-selectcitymodal-cancel" == e) return !0
                }
                return !1
            }],
            selector: "[data-modalid]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: ACCOUNT MANAGER CTA TRACKING",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%formCTA_value%",
                    setVars: {
                        eVar148: "account manager",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%formCTA_value%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    include: [/applications\/acct/i]
                }
            },
            conditions: [function() {
                var e = this.getAttribute("data-dsm-id");
                return _satellite.setVar("formCTA_value", e), _satellite.getVar("formCTA_value"), !0
            }, function() {
                return -1 === this.getAttribute("data-dsm-id").indexOf("AM-NAV-INTRST-CHKBX") && -1 === this.getAttribute("data-dsm-id").indexOf("AM-NAV-INTRST-INTRST") && -1 === this.getAttribute("data-dsm-id").indexOf("AM-NAV-NEWLT-EML-OPTOUT")
            }],
            selector: "[data-dsm-id]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: AI Help Search CTA Click Tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "help:search-result-clicked:%target.innerHTML%",
                    setVars: {
                        eVar225: "help:search-result-clicked:%target.innerHTML%"
                    },
                    addEvent: ["event49"]
                }]
            }],
            selector: 'a[class="btn ai-help__response__answer-btn--with-alt-answers"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: AI Help Search Tracking - No Results",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "ai-help-search-no-results",
                    setVars: {
                        eVar219: "%ai-searchData-phrase%",
                        eVar220: "%ai-searchData-answerID%",
                        eVar221: "%ai-searchData-answerTitle%",
                        eVar222: "%ai-searchData-userResponse%"
                    },
                    addEvent: ["event48"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ai-searchData-answerFound"), "No")
            }],
            event: "dataelementchange(ai-searchData-searchInstance)",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: AI Help Search Tracking - Results",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "ai-help-search-results",
                    setVars: {
                        eVar219: "%ai-searchData-phrase%",
                        eVar220: "%ai-searchData-answerID%",
                        eVar221: "%ai-searchData-answerTitle%",
                        eVar222: "%ai-searchData-userResponse%"
                    },
                    addEvent: ["event47"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ai-searchData-answerFound"), "Yes")
            }],
            event: "dataelementchange(ai-searchData-searchInstance)",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: ASI-INTERSTITIAL TRACKING: CLOSE",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "BETA: asi-interstitial-close",
                    setVars: {
                        eVar10: "%ANA:PageName%"
                    },
                    addEvent: ["event58"]
                }]
            }],
            selector: "#aarp-asi-modal-close",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: ASI-INTERSTITIAL TRACKING: CONTINUE",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "BETA: asi-interstitial-continue",
                    setVars: {
                        eVar10: "%ANA:PageName%"
                    },
                    customSetup: function(e, t) {
                        void 0 !== jQuery("#hide-interstitial") && jQuery("#hide-interstitial")[0].checked && (t.events ? (t.events = t.events + ",event54", t.linkTrackEvents = t.linkTrackEvents + ",event54") : (t.events = "event54", t.linkTrackEvents = "event54"))
                    },
                    addEvent: ["event59"]
                }]
            }],
            selector: "#aarp-asi-modal-continue",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: ASI-INTERSTITIAL TRACKING: OPEN",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "BETA: asi-interstitial-popup",
                    setVars: {
                        eVar10: "%ANA:PageName%"
                    },
                    addEvent: ["event56"]
                }]
            }],
            selector: ".aarp-asi-modal-popup[data-target='#asiModalAARP']",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Account Manager Payment Type",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%formCTA_value%",
                    setVars: {
                        eVar141: "%payment-id%",
                        eVar148: "account manager",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%formCTA_value%",
                        eVar182: "%payment-type%",
                        prop51: "%payment-type%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/paymentprofile\/savePayment/i, /\/paymentprofile\/payment/i]
                }
            },
            conditions: [function() {
                if ("object" == typeof this.dataset) {
                    var e = t.querySelector("[name=paymentType]:checked");
                    return _satellite.setVar("formCTA_value", this.dataset.dsmId), _satellite.setVar("payment-type", e.dataset.paymenttype), _satellite.setVar("payment-id", e.dataset.dsmId), !0
                }
                return !1
            }],
            selector: ".new-btn-special.mss-button",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Account Manager Save Interests",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "AM-NAV-INTRST",
                    setVars: {
                        eVar148: "account manager",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%ANA: User Interest List Formatted%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    include: ["account/editInterests"]
                }
            },
            selector: "button.interests.save",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Account Manager Select Interests",
            scope: {
                URI: {
                    include: ["/account/editInterests"]
                }
            },
            conditions: [function() {
                var e = this.id.match(/\d+/);
                if (e) {
                    e = e[0];
                    var t = _satellite.getVar("user_interest_list");
                    if (t) {
                        var a = t.indexOf(e);
                        a > -1 ? t.splice(a, 1) : t.push(e)
                    } else t = [e];
                    _satellite.setVar("user_interest_list", t)
                }
                return !0
            }],
            selector: "input.input-interest",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Application Registration - Skip Confirmation(B) - Event Based",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        eVar13: "email_signups",
                        prop41: "DNA,TRVL"
                    },
                    addEvent: ["event40"]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-57db33a864746d361c010d6c.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("Parameter: Promo"), "HEASWPS16B")
            }],
            event: "dataelementchange(ANA: Registration Completed (as))",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Application Registration - Skip Confirmation(D) - Event Based",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        eVar13: "email_signups",
                        prop41: "DNA"
                    },
                    addEvent: ["event40"]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-57db35a564746d78bb010b75.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("Parameter: Promo"), /HEASWPS16D/i)
            }],
            event: "dataelementchange(ANA: Registration Completed (as))",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Application Registration - Skip Confirmation(H) - Event Based",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        eVar13: "email_signups",
                        prop41: "HLTH"
                    },
                    addEvent: ["event40"]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-57db354964746d7f73003470.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("Parameter: Promo"), /HEASWPS16H/i)
            }],
            event: "dataelementchange(ANA: Registration Completed (as))",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: British Airway - cta",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "BRANDAMP_EXIT|%ANA: CurrentUrl%|article_cta",
                    setVars: {
                        eVar213: "BRANDAMP_EXIT|%ANA: CurrentUrl%|article_cta"
                    },
                    customSetup: function() {}
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: BA CTA"), "Come take flight and see your exclusive AARP member discounts with British Airways")
            }],
            selector: "div.parbase.section.textimage div.aarpe-text-image p a b",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: British Airway - header_logo",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "BRANDAMP_EXIT|%ANA: CurrentUrl%|header_logo",
                    setVars: {
                        eVar213: "BRANDAMP_EXIT|%ANA: CurrentUrl%|header_logo"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Byline Header"), "British Airways")
            }],
            selector: "header > div.wrap.full-width.brandamp-wrapper > div > div > div.col-sm-6.sponsor > p > a > img",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: 'ANA: Caregiving Drop Down Menu "Need Help With" Click',
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: 'Caregiving Menu "Need help with" Click'
                }]
            }],
            selector: "#dk0-listbox #dk0-http\\3a \\2f \\2f www\\2e aarp\\2e org\\2f home-family\\2f caregiving\\2f care-guides\\2f first-time-caregiving-guide\\2e html",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Community Element Tracking 1 (From the Community Feed)",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Community Caregiving Feed: %ANA:PageName%: %this.text%",
                    setVars: {
                        eVar3: "Community Caregiving Feed: %ANA:PageName%: %this.text%",
                        prop24: "Community Caregiving Feed: %ANA:PageName%: %this.text%"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: [/\/home-family/i]
                }
            },
            selector: 'h3.panel-title a[target="_blank"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Community Element Tracking 2 (Join The Conversation)",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Community Caregiving Button: %ANA:PageName%: Join the Conversation",
                    setVars: {
                        eVar3: "Community Caregiving Button: %ANA:PageName%: Join the Conversation",
                        prop24: "Community Caregiving Button: %ANA:PageName%: Join the Conversation"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: [/\/home-family/i]
                }
            },
            selector: "div.join-conversation a.btn.btn-secondary",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Community Element Tracking 3 (See All Conversations)",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Community Caregiving Link: %ANA:PageName%: See All Conversations",
                    setVars: {
                        eVar3: "Community Caregiving Link: %ANA:PageName%: See All Conversations",
                        prop24: "Community Caregiving Link: %ANA:PageName%: See All Conversations"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: [/\/home-family/i]
                }
            },
            selector: "div.aarpe-more-link.pull-right a.see-all-link",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: DRIVER SAFETY SITE CTA TRACKING PROD",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%ANA:data-formelementid-CTA tracking%",
                    setVars: {
                        eVar148: "ads",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%ANA:data-formelementid-CTA tracking%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    include: [/^\/applications\/VMISLocator\/searchDspLocations\.action/i]
                }
            },
            conditions: [function() {
                var e = this.getAttribute("data-formelementid");
                return _satellite.setVar("formElementId", e), !0
            }],
            selector: "[data-formelementid]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: DRIVER-SAFETY CTA TRACKING",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%formCTA_value%",
                    setVars: {
                        eVar148: "ads",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%formCTA_value%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                subdomains: {
                    include: [/aarpdriversafety.org/i]
                }
            },
            conditions: [function() {
                if ("object" == typeof this.dataset) {
                    var e = this.dataset.formelementid;
                    _satellite.setVar("formCTA_value", e), _satellite.getVar("formCTA_value")
                }
                return !0
            }],
            selector: "[data-formelementid]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Email Newsletter Signups",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%Newsletter Id's%",
                    setVars: {
                        eVar13: "email_signups_registration_flow",
                        eVar150: "%Newsletter Id's%",
                        prop41: "%ANA: Selected Newsletters%"
                    },
                    addEvent: ["event40", "event8"]
                }]
            }],
            scope: {
                URI: {
                    include: [/applications\/user\/register\/confirmation/i]
                }
            },
            selector: "[name=newsletterForm] .btn.btn-primary[type=submit]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: FORM CTA TRACKING",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%formCTA_value%",
                    setVars: {
                        eVar148: "volunteer",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%formCTA_value%"
                    },
                    customSetup: function(t, a) {
                        null !== _satellite.getVar("formCTA_value").match(/volunteer-tax-aide-cancel|volunteer-driver-safety-cancel|volunteer-experience-cancel|volunteer-general-cancel|volunteer-state-cancel/g) && ((a = e.s).events ? (a.events = a.events.indexOf("event163") > -1 ? a.events : a.events + ",event163", a.linkTrackEvents = a.linkTrackEvents + ",event163") : (a.events = "event163", a.linkTrackEvents = "event163"));
                        getAllVarsPageLoad()
                    }
                }]
            }],
            scope: {
                URI: {
                    include: [/\/applications\/Volunteer_with_AARP_Tax_Aide\/aboutYou.action/i, /\/applications\/volunteer\/dsp-interest-sign-up.action/i, /\/applications\/volunteer\/experience-corps-volunteer-sign-up.action/i, /\/applications\/volunteer\/general-volunteer-sign-up.action/i, /\/applications\/volunteer\/state-volunteer-sign-up.action/i]
                }
            },
            conditions: [function() {
                if ("object" == typeof this.dataset) {
                    var e = this.dataset.formelementid;
                    _satellite.setVar("formCTA_value", e), _satellite.getVar("formCTA_value")
                }
                return !0
            }],
            selector: "[data-formelementid]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: FORM CTA TRACKING - LOGIN",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%formCTA_value%",
                    setVars: {
                        eVar148: "login",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%formCTA_value%"
                    },
                    customSetup: function(e, t) {
                        t.eVar151 = t.eVar152 = "", getAllVarsPageLoad(), t.eVar151 = t.eVar152 = ""
                    }
                }]
            }],
            scope: {
                URI: {
                    include: [/\/online-community\/loginform.action/i, /\/online-community\/register\/showMemberLookup.action/i, /\/online-community\/register\/membershipLookup.action/i, /applications\/user\/login/i]
                }
            },
            conditions: [function() {
                if ("object" == typeof this.dataset) {
                    var e = this.dataset.formelementid;
                    _satellite.setVar("formCTA_value", e), _satellite.getVar("formCTA_value")
                }
                return !0
            }],
            selector: "[data-formelementid]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: FORM CTA TRACKING - MEMBERSHIP",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%formCTA_value%",
                    setVars: {
                        eVar148: "membership",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%formCTA_value%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    include: ["/member/join"]
                }
            },
            conditions: [function() {
                if ("object" == typeof this.dataset) {
                    var e = this.dataset.formelementid;
                    _satellite.setVar("formCTA_value", e), _satellite.getVar("formCTA_value")
                }
                return !0
            }],
            selector: "[data-formelementid]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: FORM CTA TRACKING - REGISTER",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%formCTA_value%",
                    setVars: {
                        eVar148: "register",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%formCTA_value%"
                    },
                    customSetup: function(e, t) {
                        t.eVar151 = t.eVar152 = "", getAllVarsPageLoad(), t.eVar151 = t.eVar152 = ""
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    include: [/\/online-community\/register\/index.action/i]
                }
            },
            conditions: [function() {
                if ("object" == typeof this.dataset) {
                    var e = this.dataset.formelementid;
                    _satellite.setVar("formCTA_value", e), _satellite.getVar("formCTA_value")
                }
                return !0
            }],
            selector: "[data-formelementid]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Feature QTR Digital News - Link Tracking -1",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "ewhere_Link|%ANA:PageName%|%this.text%",
                    setVars: {
                        eVar3: "ewhere_Link|%ANA:PageName%|%this.text%",
                        prop24: "ewhere_Link|%ANA:PageName%|%this.text%"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: [/\/featured\/quarterly-freebies\/info-2016/i]
                }
            },
            selector: "div.aarpe-text-image p b a",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: GIGYA Sharing Elements Tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Gigya: %this.title%",
                    setVars: {
                        eVar50: "Gigya: %this.title%"
                    },
                    addEvent: ["event19"]
                }]
            }],
            selector: "div.gig-bar-container.gig-share-bar-container div.gig-button-up",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: GSS Search Results Clicked",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "GSS Search Results Clicked",
                    setVars: {
                        eVar11: "%ANA: GSS Search Number Results%",
                        eVar201: "%ANA: GSS Search Filter%",
                        eVar4: "%ANA: GSS Search Term%",
                        prop8: "%ANA: GSS Search Term%",
                        prop9: "%ANA: GSS Search Number Results%"
                    },
                    addEvent: ["event200"]
                }]
            }],
            selector: 'a[gss-item="search_result_click"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: GSS View More Click",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    type: "o",
                    linkName: "GSS View More Results",
                    setVars: {
                        eVar11: "%ANA: GSS Search Number Results%",
                        eVar201: "%ANA: GSS Search Filter%",
                        eVar4: "%ANA: GSS Search Term%",
                        prop8: "%ANA: GSS Search Term%",
                        prop9: "%ANA: GSS Search Number Results%",
                        pageName: "%ANA:PageName% > View More Results"
                    }
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-578483e964746d2016004958.js"
                    }]
                }]
            }],
            selector: "body > div.aarpe-page > div.aarpe-page-container > div > div.aarpe-main-content-wrap.container > div > div.iw-page > div > div.search-left > div.everywhereBottomSearchAgain.clearfix > div.searchbtn #getMoreLink > button",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Global CTA Tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%this.getAttribute(data-formelementid)%",
                    setVars: {
                        eVar135: "%c_lineofbusiness%",
                        eVar136: "%c_asicategory%",
                        eVar137: "%c_offertiming%",
                        eVar138: "%c_offertype%",
                        eVar139: "%c_brand%",
                        eVar140: "%c_offerid%",
                        eVar142: "%c_adid%",
                        eVar146: "%c_categoryid%",
                        eVar147: "%c_subcategoryid%",
                        eVar148: "%DataLayer-ANA-VAR-1-Taxonomy-[pagedata]%",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%this.getAttribute(data-formelementid)%",
                        eVar171: "%search_keyword%",
                        prop63: "%c_params%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    exclude: [/^\/applications\/VMISLocator\/searchDspLocations\.action/i]
                },
                domains: [/aarp\.org$/i]
            },
            conditions: [function(e) {
                function t(t, a) {
                    return "object" == typeof(a = a || e.target).dataset && a.dataset[t] ? a.dataset[t] : ""
                }
                return _satellite.setVar("search_keyword", "MEM-BEN-BTN-CLK-start-search" == t("formelementid", this) && this.parentElement.getElementsByTagName("input") ? this.parentElement.getElementsByTagName("input")[0].value : ""), _satellite.setVar("c_offertype", t("offertype", this)), _satellite.setVar("c_brand", t("brand", this)), _satellite.setVar("c_offerid", t("offerid", this)), _satellite.setVar("c_adid", t("adid", this)), _satellite.setVar("c_categoryid", t("categoryid", this)), _satellite.setVar("c_subcategoryid", t("subcategoryid", this)), _satellite.setVar("c_lineofbusiness", t("lineofbusiness", this)), _satellite.setVar("c_asicategory", t("asicategory", this)), _satellite.setVar("c_offertiming", t("offertiming", this)), _satellite.setVar("c_params", -1 != _satellite.getVar("ANA:ParameterString").indexOf("category") ? _satellite.getVar("ANA:ParameterString") : ""), !0
            }],
            selector: "[data-formelementid]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: MEM-BEN-AD: Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "MEM-BEN-AD: Click",
                    customSetup: function(e, t) {
                        var a = ["onsite_advertising", "member_benefit_ads", "", "", "event157=1", "eVar142=" + this.attributes["data-adid"].value].join(";");
                        t.linkTrackVars = "products", t.products = a
                    },
                    addEvent: ["event157"]
                }]
            }],
            selector: "a[data-adid*='MEM-BEN-AD']",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: PW-RESET-CANCEL",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "password-reset-cancel",
                    setVars: {
                        eVar148: "login",
                        eVar149: "%ANA:PageName%",
                        eVar150: "password-cancel-submit"
                    }
                }]
            }],
            selector: '[data-formelementid="password-cancel"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: SOCIAL ICON CTA TRACKING PROD",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "social-link-click",
                    setVars: {
                        eVar148: "social",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pageinfo]%",
                        eVar150: "%ANA:data-socialid-CTA tracking%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            conditions: [function() {
                var e = jQuery(this).attr("data-socialid") + "-CLK";
                return _satellite.setVar("socialId", e), !0
            }],
            selector: "[data-socialid]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: SWEEPS-CTA TRACKING",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%formCTA_value%",
                    setVars: {
                        eVar148: "sweeps",
                        eVar149: "%ANA-PAGENAME-SWEEPS-Taxonomy-[pagedata]%",
                        eVar150: "%formCTA_value%",
                        channel: "sweeps"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                subdomains: {
                    include: ["sweeps.aarp.org"]
                }
            },
            conditions: [function() {
                if ("object" == typeof this.dataset) {
                    var e = this.dataset.formelementid;
                    _satellite.setVar("formCTA_value", e), _satellite.getVar("formCTA_value")
                }
                return !0
            }],
            selector: "[data-formelementid]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Selected Newsletters",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5b03057764746d6481007086.js"
                    }]
                }]
            }],
            selector: "#newsletterSubmit",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 1",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_link|%ANA:PageName%|nav_logo",
                    setVars: {
                        eVar3: "CAMPAIGNS_link|%ANA:PageName%|nav_logo",
                        prop24: "CAMPAIGNS_link|%ANA:PageName%|nav_logo"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: "a.header-logo",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 10",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_link|%ANA:PageName%|ftr_sitemap",
                    setVars: {
                        eVar3: "CAMPAIGNS_link|%ANA:PageName%|ftr_sitemap",
                        prop24: "CAMPAIGNS_link|%ANA:PageName%|ftr_sitemap"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: 'div.col-xs-6.col-sm-8 ul.list-inline li a[title="Sitemap"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 11",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_link|%ANA:PageName%|ftr_privacy",
                    setVars: {
                        eVar3: "CAMPAIGNS_link|%ANA:PageName%|ftr_privacy",
                        prop24: "CAMPAIGNS_link|%ANA:PageName%|ftr_privacy"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: 'div.col-xs-6.col-sm-8 ul.list-inline li a[title="Privacy Policy"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 12",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_link|%ANA:PageName%|ftr_tos",
                    setVars: {
                        eVar3: "CAMPAIGNS_link|%ANA:PageName%|ftr_tos",
                        prop24: "CAMPAIGNS_link|%ANA:PageName%|ftr_tos"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: 'div.col-xs-6.col-sm-8 ul.list-inline li a[title="Terms of Service"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 13",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_link|%ANA:PageName%|ftr_copyright",
                    setVars: {
                        eVar3: "CAMPAIGNS_link|%ANA:PageName%|ftr_copyright",
                        prop24: "CAMPAIGNS_link|%ANA:PageName%|ftr_copyright"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: 'div.col-xs-6.col-sm-8 ul.list-inline li a[title="Copyright Information"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 14",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_follow|%ANA:PageName%|ftr_fb",
                    setVars: {
                        eVar3: "CAMPAIGNS_follow|%ANA:PageName%|ftr_fb",
                        prop24: "CAMPAIGNS_follow|%ANA:PageName%|ftr_fb"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: 'div.pull-right a[title="Follow AARP on Facebook"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 15",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_follow|%ANA:PageName%|ftr_twitter",
                    setVars: {
                        eVar3: "CAMPAIGNS_follow|%ANA:PageName%|ftr_twitter",
                        prop24: "CAMPAIGNS_follow|%ANA:PageName%|ftr_twitter"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: 'div.pull-right a[title="Follow AARP on Twitter"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 16",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_link|%ANA:PageName%|carousel_rework_cta",
                    setVars: {
                        eVar3: "CAMPAIGNS_link|%ANA:PageName%|carousel_rework_cta",
                        prop24: "CAMPAIGNS_link|%ANA:PageName%|carousel_rework_cta"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: 'p.acc.bigger a[title="Job Search, Work Resources and Tools \u2013 AARP"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 2",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_link|%ANA:PageName%|nav_rightlink",
                    setVars: {
                        eVar3: "CAMPAIGNS_link|%ANA:PageName%|nav_rightlink",
                        prop24: "CAMPAIGNS_link|%ANA:PageName%|nav_rightlink"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: "div.header-link a",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 3",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_scroll|%ANA:PageName%|carousel_next",
                    setVars: {
                        eVar3: "CAMPAIGNS_scroll|%ANA:PageName%|carousel_next",
                        prop24: "CAMPAIGNS_scroll|%ANA:PageName%|carousel_next"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: "a.right.carousel-control",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 4",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_scroll|%ANA:PageName%|carousel_previous",
                    setVars: {
                        eVar3: "CAMPAIGNS_scroll|%ANA:PageName%|carousel_previous",
                        prop24: "CAMPAIGNS_scroll|%ANA:PageName%|carousel_previous"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: "a.left.carousel-control",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 5",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_share|%ANA:PageName%|fb",
                    setVars: {
                        eVar3: "CAMPAIGNS_share|%ANA:PageName%|fb",
                        prop24: "CAMPAIGNS_share|%ANA:PageName%|fb"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: "div.at-share-btn-elements a.at-icon-wrapper.at-share-btn.at-svc-facebook",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 6",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_share|%ANA:PageName%|twitter",
                    setVars: {
                        eVar3: "CAMPAIGNS_share|%ANA:PageName%|twitter",
                        prop24: "CAMPAIGNS_share|%ANA:PageName%|twitter"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: "div.at-share-btn-elements a.at-icon-wrapper.at-share-btn.at-svc-twitter",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 7",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_share|%ANA:PageName%|linkedin",
                    setVars: {
                        eVar3: "CAMPAIGNS_share|%ANA:PageName%|linkedin",
                        prop24: "CAMPAIGNS_share|%ANA:PageName%|linkedin"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: "div.at-share-btn-elements a.at-icon-wrapper.at-share-btn.at-svc-linkedin",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 8",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_share|%ANA:PageName%|email",
                    setVars: {
                        eVar3: "CAMPAIGNS_share|%ANA:PageName%|email",
                        prop24: "CAMPAIGNS_share|%ANA:PageName%|email"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: " div.at-share-btn-elements a.at-icon-wrapper.at-share-btn.at-svc-email",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TC Work LP - 9",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "CAMPAIGNS_share|%ANA:PageName%|download",
                    setVars: {
                        eVar3: "CAMPAIGNS_share|%ANA:PageName%|download",
                        prop24: "CAMPAIGNS_share|%ANA:PageName%|download"
                    }
                }]
            }],
            scope: {
                subdomains: {
                    include: [/jaybirdgroup.net/i, /campaigns.aarp.org/i]
                }
            },
            selector: "a.btn.btn-yellow",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: TOT Video CTA [2-1-18]",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "takeontodayvideo",
                    setVars: {
                        eVar148: "video",
                        eVar149: '"%ANA:PageName%',
                        eVar150: "take-on-today",
                        channel: "homepage"
                    },
                    addEvent: ["event159"]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5a74897864746d18af000356.js"
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: [/(aarp.org)$/i]
                }
            },
            selector: '[data-formelementid="takeontodayvideo"]',
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Track Slide Shows (event based)",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Slide # Tracking",
                    setVars: {
                        eVar10: "%ANA:PageName%",
                        eVar18: "%ANA: Groupings (metaS18)%",
                        eVar33: "%ANA: Publisher Date%",
                        eVar61: "%ANA: AdblockValue%",
                        prop29: "%ANA:ParameterString%",
                        prop30: "%ANA:PageTitle%",
                        prop34: "%ANA: PGID%",
                        prop35: "%ANA: Author%",
                        prop36: "%ANA: URL Hash%",
                        prop43: "%ANA: Portfolio list (metaS43)%",
                        prop50: "%ANA:PageName%"
                    },
                    addEvent: ["event8"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: URL Hash"), /#slide/i)
            }],
            event: "locationchange",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Turbo Vote - SPA Tracking",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        pageName: "%ANA:PageName%"
                    },
                    customSetup: function(e, t) {
                        t.prop50 = t.eVar10 = t.eVar250 = _satellite.getVar("ANA:PageName")
                    }
                }]
            }],
            conditions: [function() {
                return /votingtool\.aarp\.org/.test(e.location.hostname)
            }],
            event: "locationchange",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: VTM-Forms-Modal: Registration Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "VTM-FORMS-MODAL: Registration Click",
                    setVars: {
                        eVar144: "form-registration-modal",
                        eVar145: "register",
                        eVar148: "volunteer",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    include: ["applications/Volunteer_with_AARP_Tax_Aide/aboutYou.action", "applications/volunteer/dsp-interest-sign-up.action", "applications/volunteer/general-volunteer-sign-up.action", "applications/volunteer/state-volunteer-sign-up.action", "applications/volunteer/experience-corps-volunteer-sign-up.action"]
                }
            },
            conditions: [function() {
                var e = this.getAttribute("data-formelementid");
                _satellite.setVar("formCTA_value", e), _satellite.getVar("formCTA_value")
            }],
            selector: "a[data-formelementid='register-overlay']",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Video Heartbeat Core Library (Infinite Scroll)",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-57bf466464746d4d3b0060d7.js"
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    exclude: [/(www-s)|(cms-s)/i, /www-d/i, /(www-qa)|(cms-qa)/i, /secure-s/i, /secure-qa/i]
                }
            },
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("ANA: Is Artcle"), "true")
            }, function() {
                if (t.getElementsByClassName("brightcove-container").length > 0) return !0
            }],
            event: "dataelementchange(ANA: CurrentUrl)",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ANA: Volunteer Form - Select Change",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "volunteer-forms-click-track",
                    setVars: {
                        eVar144: "%ANA: Get Modal Name%",
                        eVar145: "experiencecorps-selectcitymodal-cityAndState",
                        eVar148: "volunteer",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    include: ["/volunteer/experience-corps-volunteer-sign-up"]
                },
                domains: [/aarp\.org$/i]
            },
            selector: "#cityAndState",
            eventHandlerOnElement: !0,
            event: "custom",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1,
            customEvent: "CitySelect"
        }, {
            name: "ANA: WJ Custom Link Tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "WJ Custom Link Tracking",
                    setVars: {
                        eVar3: "%data-aarp-tracker-label%: %data-aarp-tracker-value-1%",
                        prop24: "%data-aarp-tracker-label%: %data-aarp-tracker-value-1%"
                    }
                }]
            }],
            conditions: [function() {
                var e = jQuery(this).attr("data-aarp-tracker-label");
                _satellite.setVar("data-aarp-tracker-label", e), _satellite.getVar("data-aarp-tracker-label");
                var t = jQuery(this).attr("data-aarp-tracker-value-1");
                return _satellite.setVar("data-aarp-tracker-value-1", t), _satellite.getVar("data-aarp-tracker-value-1"), !0
            }],
            selector: "a[data-aarp-tracker-value-1]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Entertainment",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c50076d64746d1aa800676a.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-LRN\-(learn\-more|join\-to\-learn\-more)\-(.*)/i,
                "data-categoryid": /entertainment/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Health and Wellness - Dental",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b128964746d03c200170e.js"
                    }, {
                        src: "satellite-5c703e5664746d78aa000729.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-(WIDGET\-LEARN\-MORE|LRN)\-learn\-more\-delta\-dental/i,
                "data-categoryid": /healthandwellness/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Health and Wellness - Flip 50",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b0cf764746d3e9e001877.js"
                    }, {
                        src: "satellite-5c703e6b64746d78aa00072d.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-categoryid": /healthandwellness/i,
                "data-formelementid": /MEM\-BEN\-BTN\-LRN\-learn\-more\-flip50/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Health and Wellness - Hearing",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b0e5264746d0e86005636.js"
                    }, {
                        src: "satellite-5c703e7d64746d78aa00072f.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-categoryid": /healthandwellness/i,
                "data-formelementid": /MEM\-BEN\-BTN\-LRN\-learn\-more\-(hearing\-shop\-10107|hearusa)/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Health and Wellness - Insurance",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b166964746d3312005879.js"
                    }, {
                        src: "satellite-5c703ebd64746d78b300067b.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-categoryid": /healthandwellness/i,
                "data-formelementid": /MEM\-BEN\-BTN\-LRN\-learn\-more\-eyemed\-vision\-insurance/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Health and Wellness - Long Term Care",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b188964746d330c006087.js"
                    }, {
                        src: "satellite-5c703ece64746d78ad000a7d.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-categoryid": /healthandwellness/i,
                "data-formelementid": /MEM\-BEN\-BTN\-(WIDGET\-LEARN\-MORE|LRN)\-learn\-more\-nyl\-long\-term\-care/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Health and Wellness - Medicare Advantage",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c70431564746d22750006a1.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-categoryid": /healthandwellness/i,
                "data-formelementid": "MEM\\-BEN\\-BTN\\-(WIDGET\\-LEARN\\-MORE|LRN)\\-learn\\-more\\-uhc\\-medicare\\-complete"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Health and Wellness - Optical",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b139e64746d2fa4000bf3.js"
                    }, {
                        src: "satellite-5c703eeb64746d78b0000a7f.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-categoryid": /healthandwellness/i,
                "data-formelementid": /MEM\-BEN\-BTN\-LRN\-learn\-more\-(eyemed\-vision\-discounts|glassescom\-10095|lenscrafters\-10098|target\-optical\-10055|sears\-optical\-10080)/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Health and Wellness - Pharmacy",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b11e164746d0e86005647.js"
                    }, {
                        src: "satellite-5c703ef964746d78b300067d.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-categoryid": /healthandwellness/i,
                "data-formelementid": /MEM\-BEN\-BTN\-LRN\-learn\-more\-(aarp\-prescription\-discounts\-provided\-by\-optumrx\-10187|cvs\-pharmacy|kroger\-pharmacy|rite\-aid\-pharmacy|walmart\-pharmacy)/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Health and Wellness - Supplement",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b171964746d473f0019c8.js"
                    }, {
                        src: "satellite-5c703f0964746d78aa000731.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-categoryid": /healthandwellness/i,
                "data-formelementid": /MEM\-BEN\-BTN\-(WIDGET\-LEARN\-MORE|LRN)\-continue\-uhc\-medicare\-supplement/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Insurance",
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-LRN\-(learn\-more|continue)\-(.*)/i,
                "data-categoryid": /insurance/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Restaurant",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c4ede9f64746d181a01fc11.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-LRN\-(learn\-more|join\-to\-learn\-more)\-(.*)/i,
                "data-categoryid": /restaurants/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Shopping",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c52c85b64746d207600060a.js"
                    }]
                }]
            }],
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-LRN\-(learn\-more|join\-to\-learn\-more)\-(.*)/i,
                "data-categoryid": /(shoppingandgroceries|homeandfamily)/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals & ODP Page Referral Button - Travel",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c52c8d664746d181a02177e.js"
                    }]
                }]
            }],
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-LRN\-(learn\-more|join\-to\-learn\-more)\-(.*)/i,
                "data-categoryid": /travel/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Entertainment",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c5006c564746d2cab001f26.js"
                    }, {
                        src: "satellite-5c629afa64746d0e8600330c.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-CLK\-entertainment\-(.*)/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Health and Wellness - Dental",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b1d0564746d7d9a008381.js"
                    }, {
                        src: "satellite-5c6b207364746d57d60063b7.js"
                    }, {
                        src: "satellite-5c6ff6e364746d78b000088a.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-(OFFERLIST\-BTN\-CLK|BTN\-CLK)\-(healthandwellness\-delta\-dental|insurance\-delta\-dental)/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Health and Wellness - Healthcare",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b107564746d7d9a008348.js"
                    }, {
                        src: "satellite-5c6b206c64746d5956001860.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-CLK\-healthandwellness\-flip50/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Health and Wellness - Hearing",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b177364746d57d60063a7.js"
                    }, {
                        src: "satellite-5c6b206264746d473f0019f6.js"
                    }, {
                        src: "satellite-5c70397364746d4aec000051.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-(OFFERLIST\-BTN|BTN)\-CLK\-healthandwellness\-(hearing\-shop\-10107|hearusa)/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Health and Wellness - LTC",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b29ad64746d27c3001482.js"
                    }, {
                        src: "satellite-5c6fff0764746d22750004ce.js"
                    }, {
                        src: "satellite-5c703d9a64746d78ad000a78.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-(OFFERLIST\-BTN\-CLK|BTN\-CLK)\-healthandwellness\-nyl\-long\-term\-care/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Health and Wellness - Medicare Advantage",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c7043da64746d101a00076c.js"
                    }, {
                        src: "satellite-5c7043da64746d101a00076d.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-(OFFERLIST\-BTN\-CLK|BTN\-CLK)\-insurance\-uhc\-medicare\-complete/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Health and Wellness - Medicare Supplement",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b285364746d03c2001736.js"
                    }, {
                        src: "satellite-5c6fff4c64746d22750004f2.js"
                    }, {
                        src: "satellite-5c703dbc64746d44d2001670.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-(OFFERLIST\-BTN\-CLK|BTN\-CLK)\-(healthandwellness\-uhc\-medicare\-supplement|insurance\-uhc\-medicare\-supplement)/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Health and Wellness - RX Discounts",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b1a2664746d3e9e0018af.js"
                    }, {
                        src: "satellite-5c6b206864746d473f0019f8.js"
                    }, {
                        src: "satellite-5c7039fe64746d0be2001219.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-(OFFERLIST\-BTN|BTN)\-CLK\-healthandwellness\-(aarp\-prescription\-discounts\-provided\-by\-optumrx\-10187|cvs\-pharmacy\-11562|kroger\-co\-pharmacy\-11563|riteaid\-pharmacy\-11556|walmart\-pharmacy\-11558)/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Health and Wellness - Vision Discounts",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b24b264746d27c300146d.js"
                    }, {
                        src: "satellite-5c703ddc64746d78ad000a7a.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-CLK\-healthandwellness\-(eyemed\-vision\-discounts|glassescom\-10095|lenscrafters\-10098|sears\-optical\-10080|target\-optical\-10055)/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Health and Wellness - Vision Insurance",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6b26d064746d7d97006ec0.js"
                    }, {
                        src: "satellite-5c703a6f64746d0bdc000fbd.js"
                    }, {
                        src: "satellite-5c703a6f64746d0bdc000fbe.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-(OFFERLIST\-BTN|BTN)\-CLK\-(healthandwellness\-eyemed\-vision\-insurance|insurance\-eyemed\-vision\-insurance)/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Restaurant",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c4db13864746d581701f76c.js"
                    }, {
                        src: "satellite-5c628c1364746d57d6004038.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-CLK\-restaurants\-(.*)/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Shopping",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c52c39a64746d1924002d5f.js"
                    }, {
                        src: "satellite-5c629af664746d2dde001d26.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-CLK\-(shoppingandgroceries|homeandfamily|caregiving|\*healthandwellness|\*autoserviceaarp)\-(.*)/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "ASI - Discounts - www.aarp.org - Modals - Travel",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c52c1fc64746d128d00510c.js"
                    }, {
                        src: "satellite-5c629af264746d330c00339e.js"
                    }]
                }]
            }],
            scope: {
                domains: [/aarp\.org$/i]
            },
            selector: "a",
            property: {
                "data-formelementid": /MEM\-BEN\-BTN\-CLK\-travel\-(.*)/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Action - www.aarp.org - Advocacy - Tell Congress to Stop Rx Greed and cut drug prices now - Send Message Button",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5ca3741864746d26360019a2.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/site/Advocacy;jsessionid=00000000.app262b"]
                }
            },
            selector: "input",
            property: {
                name: "send",
                type: "submit"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCM_Floodlight_SiteEngagement_AARP Homepage - Join Button_20180118",
            trigger: [{
                command: "delayActivateLink"
            }],
            scope: {
                subdomains: {
                    include: [/(aarp.org)$/i]
                }
            },
            selector: "a",
            property: {
                "data-formelementid": /join/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCM_Floodlight_SiteEngagement_AARP Homepage - Renew Button_20180118",
            trigger: [{
                command: "delayActivateLink"
            }],
            scope: {
                subdomains: {
                    include: [/(aarp.org)$/i]
                }
            },
            selector: "a",
            property: {
                "data-formelementid": /renew/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DM&P - www.aarp.org - Login Page Button Click",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c45989a64746d728c01fd6f.js"
                    }]
                }]
            }],
            selector: "button",
            property: {
                "data-formelementid": /login/i,
                className: "btn btn-primary btn-login"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Document Download [CTA] tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Document Download Click",
                    setVars: {
                        eVar148: "%eVar148%",
                        eVar149: "%eVar149%",
                        eVar150: "%eVar149%"
                    },
                    addEvent: ["event165"]
                }]
            }],
            conditions: [function() {
                return console.log("Document Download [CTA] tracking", this.getAttribute(data - download - track), this.textContent), _satellite.setVar("eVar148", e.AARP.pageInfo.channel), _satellite.setVar("eVar149", e.AARP.pageInfo.pageName), _satellite.setVar("eVar150", this.textContent), !0
            }],
            selector: "[data-download-track]",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Exit Offer Modal Close Click - (x button/ outside)",
            conditions: [function(e) {
                var t = $j(e.target);
                setTimeout(function() {
                    var e;
                    $j("body").find(".modal-backdrop.fade.in").length || (t && "offer-close" === t[0].id ? (e = t[0].dataset.formelementid, _satellite.setVar("ANA: Modal Close", e)) : (e = "MEM-BTN-NAV-EO-OUTSIDE-MODAL", _satellite.setVar("ANA: Modal Close", e)), _satellite.track("clickTags_Exit_offer_Modal_close"))
                }, 500)
            }],
            selector: "#exit_offer_popup",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Exit Offer Premium Select Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Exit Offer Premium Select Click",
                    setVars: {
                        eVar146: "select",
                        eVar150: "%ANA: Selected Premium%"
                    }
                }]
            }],
            conditions: [function() {
                if ("object" == typeof this.dataset) {
                    var e = this.dataset.formelementid;
                    _satellite.setVar("ANA: Selected Premium", e)
                }
                return !0
            }],
            selector: "#exit_offer_content a.loadNewOffer",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1,
            customEvent: "click"
        }, {
            name: "Expedia Widget - Search Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Expedia Widget - Search Click",
                    setVars: {
                        eVar146: "travel",
                        eVar147: "expedia",
                        eVar148: "travel",
                        eVar149: "%eVar149%",
                        eVar150: "%eVar150%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            scope: {
                URI: {
                    include: ["travel-widget-50.html", /\/travel/i]
                }
            },
            conditions: [function() {
                return _satellite.setVar("eVar149", e.AARP.pageInfo.pageName), _satellite.setVar("eVar150", this.getAttribute("data-categoryid")), !0
            }],
            selector: "button.expedia-search-button",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Expedia Widget - Tab Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Expedia Widget - Tab Click",
                    setVars: {
                        eVar146: "travel",
                        eVar147: "expedia",
                        eVar148: "travel",
                        eVar149: "%eVar149%",
                        eVar150: "%eVar150%"
                    },
                    addEvent: ["event159"]
                }]
            }],
            conditions: [function() {
                var t = {
                    hotels: "trv-exp-wid-tab-hotels",
                    flights: "trv-exp-wid-tab-flights",
                    cars: "trv-exp-wid-tab-cars",
                    cruises: "trv-exp-wid-tab-cruises",
                    "things-to-do": "trv-exp-wid-tab-thingstodo"
                };
                return _satellite.setVar("eVar149", e.AARP.pageInfo.pageName), _satellite.setVar("eVar150", t[this.getAttribute("for")]), !0
            }],
            selector: ".aarp-c-expedia-tabs > label",
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Foundation - www.aarp.org - Savings Jar - Get Started Button",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5ca36dfa64746d403d00089e.html",
                        data: []
                    }, {
                        src: "satellite-5ca36dfa64746d403d00089f.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["/aarp-foundation/our-work/income/mysavingsjar.html"]
                }
            },
            selector: "a",
            property: {
                href: "https://national.mysavingsjar.org/introduction?cmp=FDN-MSJ-REGLNK"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Help Chat CTA click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Help Chat CTA click",
                    setVars: {
                        eVar149: "%AA-ANG: Page Name%",
                        eVar159: "Chat Now",
                        eVar63: "HLP-CHAT-CLK"
                    }
                }]
            }],
            selector: "div.btn.kana-chat-btn",
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Outbrain_EmailShare_EmailShareButtonClicked_November2018",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c0026fb64746d3e16011077.js"
                    }]
                }]
            }],
            selector: "button",
            property: {
                "data-socialid": /SO-TB-EML/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Outbrain_PrintShare_PrintShareButtonClicked_November2018",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c003d5e64746d034e007eaf.js"
                    }]
                }]
            }],
            selector: "button",
            property: {
                "data-socialid": /SO-TB-PRNT/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Outbrain_SocialShare_SocialShareButtonClicked_November2018",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c001f2b64746d488d0079a2.js"
                    }]
                }]
            }],
            selector: "button",
            property: {
                "data-socialid": /(SO-TB-LNKD)|(SO-TB-FCBK)|(SO-TB-TWIT)/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Pay Pal Tool Tip - 4S Mem",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Pay Pal Tool Tip",
                    setVars: {
                        prop51: "4S %ANA: 4S flowType% step 2 PayPal Tool Tip"
                    }
                }]
            }],
            selector: ".paypal-help",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Pay Pal Tool Tip close - 4S Mem",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Pay Pal Tool Tip close - 4S Mem",
                    setVars: {
                        prop51: "4S %ANA: 4S flowType% PayPal close"
                    }
                }]
            }],
            selector: "div#paypal-modal-close",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Sisters  - www.sistersletter.com - Subscribe Button",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5c1bc76164746d6151016e2b.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: [/sistersletter.com/i]
                }
            },
            selector: "input",
            property: {
                "data-formelementid": /SIS-BTN-CLK-Subscribe-Complete/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "TTAR Already on AR benefits page link click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "TTAR Already on AR benefits page link click",
                    setVars: {
                        prop51: "TTAR Already on AR benefits page link click"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: ["/mem/autorenew"]
                }
            },
            selector: "#benefits_page",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "TTAR Already on AR edit account link click ",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "TTAR Already on AR edit account link click",
                    setVars: {
                        prop51: "TTAR Already on AR edit account link click"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: ["/mem/autorenew"]
                }
            },
            selector: "#edit_account",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "TTAR Already on AR get started link click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "TTAR Already on AR get started link click",
                    setVars: {
                        prop51: "TTAR Already on AR get started link click"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: ["/mem/autorenew"]
                }
            },
            selector: "#get_started",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "TTAR Step 1 Chat with agent click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "TTAR Step 1 Chat with agent click",
                    setVars: {
                        prop51: "TTAR Step 1 Chat with agent click"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: ["/mem/autorenew"]
                }
            },
            selector: ".helpBox a",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "TTAR Step 2 App store click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "TTAR Step 2 App store click",
                    setVars: {
                        prop51: "TTAR Step 2 App store click"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: ["/mem/autorenew/confirm", "/mem/autorenew"]
                }
            },
            conditions: [function() {
                return -1 !== ["iOS"].indexOf(_satellite.browserInfo.os)
            }],
            selector: "#store",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "TTAR Step 2 Google Play click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "TTAR Step 2 Google Play click",
                    setVars: {
                        prop51: "%TTAR pageName%  Google Play click"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: ["/mem/autorenew/confirm", /\/mem\/autorenew/i]
                }
            },
            conditions: [function() {
                return -1 !== ["Android"].indexOf(_satellite.browserInfo.os)
            }],
            selector: "#store",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "TTAR Step 2 benefits page link click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "TTAR Step 2 benefits page link click",
                    setVars: {
                        prop51: "TTAR Step 2 benefits page link click"
                    }
                }]
            }],
            scope: {
                URI: {
                    include: ["/mem/autorenew/confirm"]
                }
            },
            selector: "a#explore_benefits",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "The Girlfriend - www.thegirlfriend.com - Subscribe Button",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c0e55dd64746d19e600fa32.js"
                    }]
                }]
            }, {
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5c1bc66c64746d728c018123.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                subdomains: {
                    include: [/thegirlfriend.com/i]
                }
            },
            selector: "input",
            property: {
                type: "submit",
                "data-formelementid": "TGF-BTN-CLK-Subscribe-Complete"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Turbo Vote Page View",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{}]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5b7cce2464746d176d0053fc.js"
                    }]
                }]
            }],
            conditions: [function() {
                if (/votingtool\.aarp\.org/.test(e.location.hostname)) return !0
            }],
            event: "locationchange",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "www.aarp.org - BMI Calculator - Calculate Button",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c70524264746d44d20016c8.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["health/healthy-living/info-2017/bmi_calculator.html"]
                },
                domains: [/aarp\.org$/i]
            },
            selector: ".small",
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "www.aarp.org - Home Budget Calculator - Calculate Button",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c796eba64746d788a001077.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["money/budgeting-saving/home_budget_calculator.html"]
                },
                domains: [/aarp\.org$/i]
            },
            selector: "input",
            property: {
                id: /KJECalculate/i
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "www.aarp.org - Home Budget Calculator - View Report Button",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c796eb564746d788a00106a.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["money/budgeting-saving/home_budget_calculator.html"]
                },
                domains: [/aarp\.org$/i]
            },
            selector: "input",
            property: {
                id: /KJEViewReport/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }],
        directCallRules: [{
            name: "clickTags_mem_FE_validation_error",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "New Membership FE Validation Error Reporting Tag",
                    setVars: {
                        eVar152: "%ANA: Membership Form Field Errors%",
                        eVar211: "%ANA: Membership Form Field Errors%"
                    }
                }]
            }]
        }, {
            name: "clickTags_4S_mem_Final_submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Final Form Submit - (Renew/Express flow)",
                    setVars: {
                        prop51: "%ANA: data-termSelected% %ANA: data-termSelected-AR-VIEW% %ANA: data-paymentType% Submit"
                    }
                }]
            }]
        }, {
            name: "clickTags_4S_mem_Application_submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Form On Click Submit",
                    setVars: {
                        prop51: "%ANA: data-formelementid% Submit"
                    }
                }]
            }]
        }, {
            name: "clickTags_4S_mem_Login_failed",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Login Failed",
                    setVars: {
                        eVar39: "%DataLayer-ANA-SUBMITSTATUS-Taxonomy-[webdata]%"
                    }
                }]
            }]
        }, {
            name: "clickTags_4S_mem_Billing_submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Payment Type Selected On Submit",
                    setVars: {
                        prop51: "%ANA: data-formelementid - payment type% Submit"
                    }
                }]
            }]
        }, {
            name: "clickTags_4S_mem_Quick_Login_submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Quick Login On Submit",
                    setVars: {
                        prop51: "%ANA: data-formelementid - login%"
                    }
                }]
            }]
        }, {
            name: "clickTags_4S_mem_Quick_Register_submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Quick Register On Submit",
                    setVars: {
                        prop51: "%ANA: data-formelementid - register%"
                    }
                }]
            }]
        }, {
            name: "clickTags_4S_mem_Registration_success",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Quick Registration Success",
                    setVars: {
                        eVar13: "4S_membership_quick_registration"
                    },
                    addEvent: ["event10"]
                }]
            }]
        }, {
            name: "clickTags_mem_FindMe_submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Membership Renew Find Me On Submit",
                    setVars: {
                        prop51: "%ANA: data-formelementid - findMe_Submit%"
                    }
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-597b874564746d2bd8008338.js"
                    }]
                }]
            }]
        }, {
            name: "4S_pwd_in_flow_registration_failure",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Pwd In Flow Registration Failure - billing_page",
                    setVars: {
                        eVar39: "pifRegisterFailBilling"
                    }
                }]
            }]
        }, {
            name: "4S_pwd_in_flow_registration_success",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S Pwd In Flow Registration Success",
                    setVars: {
                        eVar13: "site_registration"
                    },
                    addEvent: ["event10"]
                }]
            }]
        }, {
            name: "clickTags_4S_mem_PayPal_auth_close",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "4S step 2 PayPal Auth close out",
                    setVars: {
                        prop51: "4S %ANA: 4S flowType% step 2 PayPal Auth close out"
                    }
                }]
            }]
        }, {
            name: "mail-popup-14days",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "AM-EN-US-NAV-MYAARP-MAILCD-MDL-OPEN",
                    setVars: {
                        eVar148: "account manager",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "AM-EN-US-NAV-MYAARP-MAILCD-MDL-OPEN"
                    },
                    addEvent: ["event159"]
                }]
            }]
        }, {
            name: "articlescroll",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        eVar10: "%ANA:PageName%",
                        eVar18: "%ANA: Groupings (metaS18)%",
                        eVar33: "%ANA: Publisher Date%",
                        eVar61: "%ANA: AdblockValue%",
                        prop1: "%ANA: Section%",
                        prop11: "%ANA: Language%",
                        prop13: "%ANA: Meta Data Prop 1 (Subject 1)%",
                        prop14: "%ANA: MetaData Prop 2 (Subject 2)%",
                        prop15: "%ANA: Meta Data Prop 3 (Subject 3)%",
                        prop18: "%ANA: Groupings (metaS18)%",
                        prop2: "%ANA:TaxonomyA%",
                        prop20: "%ANA: Publisher%",
                        prop27: "%ANA:Hierarchy2Levels%",
                        prop28: "%ANA:Hierarchy3Levels%",
                        prop29: "%ANA:ParameterString%",
                        prop3: "%ANA:TaxonomyB%",
                        prop30: "%ANA:PageTitle%",
                        prop34: "%ANA: PGID%",
                        prop35: "%ANA: Author%",
                        prop4: "%ANA:Topic%",
                        prop43: "%ANA: Portfolio list (metaS43)%",
                        prop5: "%ANA:Subtopic%",
                        prop50: "%ANA:PageName%",
                        prop6: "%ANA:Vendor%",
                        server: "%ANA: Host Name%",
                        pageName: "%ANA:PageName%",
                        channel: "%ANA:Channel%"
                    },
                    addEvent: ["event29", "event91"]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-57bf31cb64746d7a9300628c.js"
                    }]
                }]
            }]
        }, {
            name: "click-to-register",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "click-to-register",
                    setVars: {
                        eVar148: "login",
                        eVar149: "%ANA:PageName%",
                        eVar150: "click-to-register-link"
                    }
                }]
            }]
        }, {
            name: "volunteer-driver-safety-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "volunteer-driver-safety-submit",
                    setVars: {
                        eVar148: "volunteer",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "volunteer-driver-safety-submit"
                    },
                    customSetup: function() {
                        getAllVarsPageLoad()
                    },
                    addEvent: ["event162"]
                }]
            }]
        }, {
            name: "volunteer-experience-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "volunteer-experience-submit",
                    setVars: {
                        eVar148: "volunteer",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "volunteer-experience-submit"
                    },
                    customSetup: function() {
                        getAllVarsPageLoad()
                    },
                    addEvent: ["event162"]
                }]
            }]
        }, {
            name: "login-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "login",
                    setVars: {
                        eVar148: "login",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%ANA: Login-Or-Registration%-submit"
                    },
                    customSetup: function(e, t) {
                        t.eVar173 = t.eVar152 = t.eVar151 = "", getAllVarsPageLoad(), t.eVar173 = t.eVar152 = t.eVar151 = ""
                    }
                }]
            }]
        }, {
            name: "getStarted-login-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "login",
                    setVars: {
                        eVar148: "login",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%ANA: Login-Or-Registration%-submit"
                    },
                    customSetup: function(e, t) {
                        t.eVar173 = t.eVar152 = t.eVar151 = "", getAllVarsPageLoad(), t.eVar173 = t.eVar152 = t.eVar151 = ""
                    }
                }]
            }]
        }, {
            name: "Register-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "register",
                    setVars: {
                        eVar148: "login",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "getStarted-register-submit"
                    },
                    customSetup: function(e, t) {
                        t.eVar173 = t.eVar152 = t.eVar151 = "", getAllVarsPageLoad(), t.eVar173 = t.eVar152 = t.eVar151 = ""
                    }
                }]
            }]
        }, {
            name: "register-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "register",
                    setVars: {
                        eVar148: "register",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "register-submit"
                    },
                    customSetup: function(e, t) {
                        t.eVar173 = t.eVar152 = t.eVar151 = "", getAllVarsPageLoad(), t.eVar173 = t.eVar152 = t.eVar151 = ""
                    }
                }]
            }]
        }, {
            name: "window.click_tag_front_end_field_errors",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Form Error Tracking",
                    setVars: {
                        eVar151: "%DataLayer-ANA-ERRCDE-Taxonomy-[errors]%",
                        eVar152: "%DataLayer-ANA-ERRMESS-Taxonomy-[errors]%"
                    },
                    customSetup: function() {
                        getAllVarsPageLoad()
                    },
                    addEvent: ["event160"]
                }]
            }]
        }, {
            name: "volunteer-general-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "volunteer-general-submit",
                    setVars: {
                        eVar148: "volunteer",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "volunteer-general-submit"
                    },
                    customSetup: function() {
                        getAllVarsPageLoad()
                    },
                    addEvent: ["event162"]
                }]
            }]
        }, {
            name: "gss_search_no_result",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        eVar11: "%ANA: GSS Search Number Results%",
                        eVar200: "%ANA: GSS Search No Results%",
                        eVar201: "%ANA: GSS Search Filter%",
                        prop67: "%ANA: GSS Search No Results%",
                        prop9: "%ANA: GSS Search Number Results%",
                        pageName: "%ANA:PageName%"
                    },
                    addEvent: ["event4", "event8"]
                }]
            }]
        }, {
            name: "gss_search_load",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        eVar11: "%ANA: GSS Search Number Results%",
                        eVar201: "%ANA: GSS Search Filter%",
                        eVar4: "%ANA: GSS Search Term%",
                        prop8: "%ANA: GSS Search Term%",
                        prop9: "%ANA: GSS Search Number Results%",
                        pageName: "%ANA:PageName%"
                    },
                    addEvent: ["event8"]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-57e5621d64746d7f73006e7a.js"
                    }]
                }]
            }]
        }, {
            name: "gss_search_results",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        eVar11: "%ANA: GSS Search Number Results%",
                        eVar201: "%ANA: GSS Search Filter%",
                        eVar4: "%ANA: GSS Search Term%",
                        prop8: "%ANA: GSS Search Term%",
                        prop9: "%ANA: GSS Search Number Results%",
                        pageName: "%ANA:PageName%"
                    },
                    addEvent: ["event5", "event8"]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5784880e64746d24f80011fe.js"
                    }]
                }]
            }]
        }, {
            name: "modal-close-tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "modal-close",
                    setVars: {
                        eVar144: "%ANA: Get Modal Name%",
                        eVar145: "experiencecorps-selectcitymodal-close",
                        eVar148: "channel",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%"
                    },
                    addEvent: ["event159"]
                }]
            }]
        }, {
            name: "modal-open-tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "modal-open",
                    setVars: {
                        eVar144: "%ANA: Get Modal Name%",
                        eVar145: "open",
                        eVar148: "volunteer",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%"
                    },
                    addEvent: ["event159"]
                }]
            }]
        }, {
            name: "pw-create",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "login:password-create-success",
                    setVars: {
                        eVar148: "login",
                        eVar149: "%ANA:PageName% - PW CREATE SUCCESS",
                        eVar150: "password-create-submit"
                    },
                    addEvent: ["event146"]
                }]
            }]
        }, {
            name: "pwdreset-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "password-reset-submit",
                    setVars: {
                        eVar148: "login",
                        eVar149: "%ANA:PageName% - PW RESET SUCCESS",
                        eVar150: "password-reset-submit"
                    },
                    addEvent: ["event146"]
                }]
            }]
        }, {
            name: "volunteer-state-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "volunteer-state-submit",
                    setVars: {
                        eVar148: "volunteer",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "volunteer-state-submit"
                    },
                    customSetup: function() {
                        getAllVarsPageLoad()
                    },
                    addEvent: ["event162"]
                }]
            }]
        }, {
            name: "volunteer-tax-aide-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "volunteer-tax-aide-submit",
                    setVars: {
                        eVar148: "volunteer",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "volunteer-tax-aide-submit"
                    },
                    customSetup: function() {
                        getAllVarsPageLoad()
                    },
                    addEvent: ["event162"]
                }]
            }]
        }, {
            name: "clickTags_backend_validation_error",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "submit",
                    setVars: {
                        eVar148: "%ANA: Login-Or-Registration-Channel%",
                        eVar149: "%ANA:PageName%",
                        eVar150: "%ANA: LOGIN-REGISTER-SUBMIT ON FRONT END ERR%",
                        eVar151: "%ANA: BackEnd Error%"
                    },
                    addEvent: ["event160"]
                }]
            }]
        }, {
            name: "clickTags_pwdPage_FE_validation_error",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "password-reset-click",
                    setVars: {
                        eVar148: "login",
                        eVar149: "%ANA:PageName%",
                        eVar150: "%ANA: LOGIN-REGISTER-SUBMIT ON FRONT END ERR%",
                        eVar152: "%ANA-Password-FormField-CTA-[errordata]-1%",
                        eVar173: "%ANA: Front End Error Specific%"
                    }
                }]
            }]
        }, {
            name: "clickTags_validation_error",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "submit",
                    setVars: {
                        eVar148: "%ANA: Login-Or-Registration-Channel%",
                        eVar149: "%ANA:PageName%",
                        eVar150: "%ANA: LOGIN-REGISTER-SUBMIT ON FRONT END ERR%",
                        eVar151: "%ANA: BackEnd Error%",
                        eVar152: "%ANA-Password-FormField-CTA-[errordata]-1%",
                        eVar173: "%ANA: Front End Error Specific%"
                    },
                    customSetup: function() {
                        getAllVarsPageLoad()
                    }
                }]
            }]
        }, {
            name: "ana-global-child-cta-tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "MB_EXIT|%ANA: CurrentUrl%|Learn_More",
                    setVars: {
                        eVar135: "%c_lineofbusiness%",
                        eVar136: "%c_asicategory%",
                        eVar137: "%c_offertiming%",
                        eVar138: "%c_offertype%",
                        eVar139: "%c_brand%",
                        eVar140: "%c_offerid%",
                        eVar142: "%c_adid%",
                        eVar146: "%c_categoryid%",
                        eVar147: "%c_subcategoryid%",
                        eVar148: "%DataLayer-ANA-VAR-1-Taxonomy-[pagedata]%",
                        eVar149: "%DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]%",
                        eVar150: "%cta_value%",
                        eVar171: "%search_keyword%",
                        prop63: "%c_params%"
                    },
                    addEvent: ["event159"]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5c6ff30d64746d42c30001c2.js"
                    }]
                }]
            }]
        }, {
            name: "clickTags_Exit_Offer_Popup",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Exit Offer Modal - Mouse out",
                    setVars: {
                        eVar146: "launch",
                        eVar150: "MEM-BTN-NAV-EO-USER-EXIT-MODAL"
                    }
                }]
            }]
        }, {
            name: "clickTags_Exit_offer_Modal_close",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Exit Offer Modal Close Click - (x button/ outside)",
                    setVars: {
                        eVar146: "close",
                        eVar150: "%ANA: Modal Close%"
                    }
                }]
            }]
        }, {
            name: "clickTags_Exit_Offer_Timeout",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Exit Offer Premium Timeout",
                    setVars: {
                        eVar146: "launch",
                        eVar150: "MEM-BTN-NAV-EO-TIMEOUT-MODAL"
                    }
                }]
            }]
        }, {
            name: "fb_complete_registration_pixel",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5ad6225a64746d073b0042d9.js"
                    }]
                }]
            }]
        }, {
            name: "clickTags_ttar_step1_enroll_submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "TTAR Step 1 Enroll Submit",
                    setVars: {
                        prop51: "TTAR Step 1 Enroll Submit"
                    }
                }]
            }]
        }, {
            name: "brightcoveReady",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-585a5c0f64746d16db000b0a.js"
                    }]
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-585a5c0f64746d16db000b09.js"
                    }]
                }]
            }]
        }],
        settings: {
            trackInternalLinks: !0,
            libraryName: "satelliteLib-42020ba8ae7a978d8dc6847e6390647fd55e69a2",
            isStaging: !1,
            allowGATTcalls: !1,
            downloadExtensions: /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
            notifications: !1,
            utilVisible: !1,
            domainList: ["aarp.org", "aarpdriversafety.org", "compartiresvivir.org", "gnycloud.com", "grovo.com", "learningadvisor.com", "localhost", "sistersletter.com", "thegirlfriend.com"],
            scriptDir: "2755d5b313381183ec8ddef72ce582193e25b5a4/scripts/",
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
            "AA-ANG: CampaignId": {
                jsVariable: "AARP.MetaInfo.webdata.campaignId",
                storeLength: "pageview"
            },
            "AA-ANG: External Campaign": {
                customJS: function() {
                    return s.Util.getQueryParam("cmp")
                },
                storeLength: "pageview"
            },
            "AA-ANG: intcmp steps": {
                jsVariable: "window.webData.intcmp",
                storeLength: "pageview"
            },
            "AA-ANG: Internal Campaign": {
                queryParam: "intcmp",
                storeLength: "session",
                ignoreCase: 1
            },
            "AA-ANG: Language": {
                jsVariable: "AARP.MetaInfo.pagedata.language",
                storeLength: "pageview"
            },
            "AA-ANG: Member ID": {
                jsVariable: "AARP.MetaInfo.userdata.memberID",
                storeLength: "pageview"
            },
            "AA-ANG: Order Dollar Amount": {
                jsVariable: "AARP.MetaInfo.webdata.orderAmount",
                storeLength: "pageview"
            },
            "AA-ANG: Page Name": {
                jsVariable: "AARP.MetaInfo.pagedata.pagename",
                storeLength: "pageview"
            },
            "AA-ANG: Registration Complete - Get Started": {
                jsVariable: "webData.event",
                storeLength: "pageview"
            },
            "AA-ANG: Registration Status": {
                jsVariable: "window.webData.newAppSec.registrationStatus",
                storeLength: "pageview"
            },
            "AA-ANG: Registration Type": {
                jsVariable: "AARP.MetaInfo.webdata.registrationType",
                storeLength: "pageview"
            },
            "AA-ANG: Term Selected": {
                jsVariable: "AARP.MetaInfo.webdata.termSelected",
                storeLength: "pageview"
            },
            "AA: Custom Parameter": {
                queryParam: "custom",
                storeLength: "pageview",
                ignoreCase: 1
            },
            "AA: Kenshoo ID": {
                queryParam: "kenshooID",
                storeLength: "pageview",
                ignoreCase: 1
            },
            aarpkxid: {
                customJS: function() {
                    var e = "";
                    return _satellite.getVar("ANA: konnexId").length > 0 && _satellite.getVar("ANA: konnexId") && (e = _satellite.getVar("ANA: konnexId")), _satellite.getVar("Cookie: CID").length > 0 && _satellite.getVar("Cookie: CID") && "0" !== _satellite.getVar("Cookie: CID") && (e = _satellite.getVar("Cookie: CID")), e
                },
                storeLength: "pageview"
            },
            AdInfoGroupid: {
                jsVariable: "AARP.Everywhere.AdInfo.groupid",
                storeLength: "pageview"
            },
            AdInfoLss: {
                jsVariable: "AARP.Everywhere.AdInfo.lss",
                storeLength: "pageview"
            },
            "ai-dtm_event": {
                jsVariable: "window.aiWebData.dtm_event",
                storeLength: "pageview"
            },
            "ai-searchData-actionButtonClicked": {
                jsVariable: "window.aiWebData.searchData.actionButtonClicked",
                storeLength: "pageview"
            },
            "ai-searchData-answerFound": {
                jsVariable: "window.aiWebData.searchData.answerFound",
                storeLength: "pageview"
            },
            "ai-searchData-answerID": {
                jsVariable: "window.aiWebData.searchData.answerId",
                storeLength: "pageview"
            },
            "ai-searchData-answerTitle": {
                jsVariable: "window.aiWebData.searchData.answerTitle",
                storeLength: "pageview"
            },
            "ai-searchData-phrase": {
                jsVariable: "window.aiWebData.searchData.phrase",
                storeLength: "pageview"
            },
            "ai-searchData-searchInstance": {
                jsVariable: "window.aiWebData.searchData.searchInstance",
                storeLength: "pageview"
            },
            "ai-searchData-userResponse": {
                jsVariable: "window.aiWebData.searchData.userResponse",
                storeLength: "pageview"
            },
            "ANA: 4S flowType": {
                jsVariable: "window.webData.flowType",
                storeLength: "pageview"
            },
            "ANA: AdblockValue": {
                jsVariable: "AARP.isBlocked",
                storeLength: "pageview"
            },
            "ANA:AdverstingAcceptance": {
                jsVariable: "AARP.pageInfo.adverstingAcceptance",
                storeLength: "pageview"
            },
            "ANA: Advertising Acceptance": {
                jsVariable: "AARP.pageInfo.adverstingAcceptance",
                storeLength: "pageview"
            },
            "ANA: Article Last Modified": {
                jsVariable: "AARP.MetaInfo.lastModified",
                storeLength: "pageview"
            },
            "ANA: Article View": {
                jsVariable: "AARP.MetaInfo.isArticle",
                storeLength: "pageview"
            },
            "ANA: Author": {
                jsVariable: "AARP.MetaInfo.authorName",
                "default": "null",
                storeLength: "pageview"
            },
            "ANA: BackEnd Error": {
                customJS: function() {
                    return !e.click_tag_backend_errors || e.click_tag_field_errors && 0 != e.click_tag_field_errors.length ? "" : e.click_tag_backend_errors
                },
                storeLength: "pageview"
            },
            "ANA: BA CTA": {
                selector: "div.parbase.section.textimage div.aarpe-text-image p a b",
                property: "text",
                storeLength: "pageview"
            },
            "ANA: Blog Author Name": {
                selector: 'a[rel="author"]',
                property: "text",
                storeLength: "pageview"
            },
            "ANA: Byline Header": {
                selector: "span.byline > a",
                property: "text",
                storeLength: "pageview"
            },
            "ANA: campaignid": {
                queryParam: "campaignid",
                storeLength: "pageview",
                cleanText: !0,
                ignoreCase: 1
            },
            "ANA:Channel": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.channel")
                },
                storeLength: "pageview"
            },
            "ANA: Channel v2": {
                customJS: function() {
                    _satellite.getVar("channel")
                },
                storeLength: "pageview"
            },
            "ANA: CMP Campaign Code": {
                queryParam: "cmp",
                storeLength: "pageview",
                ignoreCase: 1
            },
            "ANA: Community Feed Link": {
                customJS: function() {
                    var e, t;
                    e = jQuery, t = e('div.conversation-msg div div.img-content h3.panel-title a[target="_blank"]'), t = e.makeArray(t), t = jQuery.map(t, function(t) {
                        return e(t).text()
                    }), console.log(t.join("|")), t.join("|")
                },
                storeLength: "pageview"
            },
            "ANA: CurrentUrl": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.cleanUrl")
                },
                storeLength: "pageview"
            },
            "ANA: Custom Channel Section": {
                customJS: function() {
                    function e() {
                        var e = t.location.hostname + t.location.pathname;
                        for (i in a)
                            if (e.indexOf(i) >= 0) return a[i];
                        return ""
                    }
                    var a = {
                        "aarptek.aarp.org/": "aarp-tek",
                        "appsec.aarp.org/": "account-management",
                        "birthday.aarp.org/": "account-management",
                        "join.aarp.org/": "account-management",
                        "login.aarp.org/": "account-management",
                        "secure.aarp.org/": "account-management",
                        "veterans.aarp.org/": "account-management",
                        "aarpfinancial.com/": "advantages",
                        "advantages.aarp.org/": "advantages",
                        "discounts.aarp.org/": "advantages",
                        "aarpdescuentos.com/": "advantages-espanol",
                        "aarp.org/auto/": "auto",
                        "auto.aarp.org/": "auto-buying",
                        "blog.aarp.org/": "blog",
                        "aarp.brainhq.com/": "brain-health",
                        "aarp.org/health/brain-health/brain_games/": "brain-health",
                        "aarp.org/politics-society/advocacy/caregiving-advocacy.html": "caregiving",
                        "caregiverkindness.aarp.org": "caregiving",
                        "community.aarp.org/": "community",
                        "createthegood.org/": "create-the-good",
                        "compartiresvivir.org/": "create-the-good-espanol",
                        "dating.aarp.org": "dating",
                        "aarpcares.aarp.org/site/Donation2": "donation",
                        "foundation.aarp.org/site/Donation2": "donation",
                        "secure2.convio.net/aarp1/site/Donation2": "donation",
                        "aarp.org/applications/VMISLocator/searchDspLocations.action": "driver-safety",
                        "aarpdriversafety.org/": "driver-safety",
                        "aarp.org/entertainment/": "entertainment",
                        "aarp.org/espanol/": "espanol",
                        "aarp.org/food/": "food",
                        "recipes.aarp.org/": "food",
                        "aarp.org/aarp-foundation/": "foundation",
                        "games.aarp.org/": "games",
                        "aarp.org/espanol/juegos/": "games-espanol",
                        "aarp.org/giving-back/": "giving-back",
                        "aarp.org/health/": "health",
                        "healthtools.aarp.org/": "health",
                        "healthlawanswers.aarp.org/": "healthcare-law",
                        "healthlawanswers.aarp.org/es/": "healthcare-law-espanol",
                        "aarp.org/home-family/": "home-family",
                        "aarp.org/relationships/": "home-family",
                        "aarp.org/": "homepage",
                        "lifereimagined.aarp.org/": "life-reimagined",
                        "thebigknow.com/": "life-reimagined",
                        "aarp.org/applications/VMISLocator/searchChapterLocations.action": "local",
                        "local.aarp.org/": "local",
                        "aarp.org/benefits-discounts/": "member-benefits",
                        "aarpwelcome.org/": "member-benefits",
                        "aarp.org/money/": "money",
                        "aarp.org/politics-society/": "politics",
                        "action.aarp.org/": "politics",
                        "takeastand.aarp.org/": "politics",
                        "vote.aarp.org/build.do": "politics",
                        "dataexplorer.aarp.org/": "ppi",
                        "aarp.org/bulletin/": "publication",
                        "aarp.org/magazine/": "publication",
                        "realpossibilities.aarp.org/": "real-possibilities",
                        "aarp.org/retirement/": "retirement",
                        "aarp.org/work/social-security/": "retirement",
                        "aarp.org/rewards-for-good": "rewards-for-good",
                        "rewards.aarp.org/gateway": "rewards-for-good",
                        "search.aarp.org/everywhere": "search",
                        "aarp.org/content/aarp/en/home/states/": "states",
                        "states.aarp.org/": "states",
                        "stayingsharp.aarp.org/": "staying-sharp",
                        "sweeps.aarp.org/": "sweeps",
                        "aarp.org/applications/VMISLocator/searchTaxAideLocations.action": "tax-aide",
                        "aarp.org/health/health_tools.html": "tools",
                        "aarp.org/tools/": "tools",
                        "travel.aarp.org/": "travel",
                        "videos.aarp.org/": "video",
                        "secure.aarp.org/applications/volunteer/": "volunteer",
                        "volunteers.aarp.org/ASILeadForm/default.aspx": "volunteer",
                        "giftplanning.aarp.org/": "ways-to-give",
                        "aarp.org/applications/jobs/showFind.action": "work",
                        "aarp.org/work/": "work",
                        "aarp.org/work/working-at-50-plus/": "work",
                        "grovo.com/aarp/technology": "work"
                    };
                    return e()
                },
                storeLength: "pageview"
            },
            "ANA: data-categoryid": {
                selector: "a.aarp-c-member-benefits__provider-link",
                property: "data-categoryid",
                storeLength: "pageview"
            },
            "ANA: data-dsm-id": {
                selector: 'input[name="mssDues"]:checked',
                property: "data-dsm-id",
                storeLength: "pageview"
            },
            "ANA: data-formelementid": {
                selector: 'input[name="mssDues"]:checked',
                property: "data-formelementid",
                storeLength: "pageview"
            },
            "ANA: data-formelementid - findMe_Close": {
                selector: "div#findMeClose",
                property: "data-formelementid",
                storeLength: "pageview"
            },
            "ANA: data-formelementid - findMe_Submit": {
                selector: "div.findMeSubmit",
                property: "data-formelementid",
                storeLength: "pageview"
            },
            "ANA: data-formelementid - login": {
                selector: "a#quick-login",
                property: "data-formelementid",
                storeLength: "pageview"
            },
            "ANA: data-formelementid - payment type": {
                selector: 'input[name="paymentType"]:checked',
                property: "data-formelementid",
                storeLength: "pageview"
            },
            "ANA: data-formelementid -print": {
                selector: "a#printPopup",
                property: "data-formelementid",
                storeLength: "pageview"
            },
            "ANA: data-formelementid - quickTout_R4G": {
                selector: ".quick-tout div#drRewardBadge",
                property: "data-formelementid",
                storeLength: "pageview"
            },
            "ANA: data-formelementid - register": {
                selector: "a#quick-register",
                property: "data-formelementid",
                storeLength: "pageview"
            },
            "ANA: data-paymentType": {
                selector: 'input[name="paymentType"]:checked',
                property: "data-paymentType",
                storeLength: "pageview"
            },
            "ANA:data-socialid-CTA tracking": {
                jsVariable: "_satellite.data.customVars.socialId",
                storeLength: "pageview"
            },
            "ANA: data-termSelected": {
                selector: 'input[name="mssDues"]:checked',
                property: "data-termSelected",
                storeLength: "pageview"
            },
            "ANA: data-termSelected-AR-VIEW": {
                jsVariable: "window.webData.isARView",
                storeLength: "pageview"
            },
            "ANA:DFPSourceName": {
                jsVariable: "AARP.pageInfo.DFPSourceName",
                storeLength: "pageview"
            },
            "ANA: Disrupt Aging - CMP Parameter": {
                queryParam: "cmp",
                storeLength: "pageview",
                ignoreCase: 0
            },
            "ANA: Domain": {
                jsVariable: "AARP.MetaInfo.domain",
                storeLength: "pageview"
            },
            "ANA: Donation Donation Amount": {
                customJS: function() {
                    var t = "",
                        a = "";
                    return "undefined" != typeof e.webData && "undefined" != typeof e.webData.donationAmount && e.webData.donationAmount && (t = e.webData.donationAmount), void 0 !== t && (a = t.replace(/\$/g, "")), a
                },
                storeLength: "pageview"
            },
            "ANA: Donation Event Trigger": {
                jsVariable: "window.webData.events",
                storeLength: "pageview"
            },
            "ANA: Donation Registration Type": {
                jsVariable: "window.webData.registrationType",
                storeLength: "pageview"
            },
            "ANA: Driver Safety DSP Course Signup Details [Registration Values]": {
                jsVariable: "window.AARP.MetaInfo.webdata.registrationtype",
                storeLength: "pageview"
            },
            "ANA: Driver Safety Product Registration Type": {
                jsVariable: "window.AARP.MetaInfo.webdata.producttype",
                storeLength: "pageview"
            },
            "ANA:e9VisitorType": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.e9VisitorType")
                },
                storeLength: "pageview"
            },
            "ANA-FormField-CTA": {
                selector: "[data-formelementid]",
                property: "value",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "ANA: Front End Error Specific": {
                customJS: function() {
                    var t = "";
                    if (e.click_tag_field_errors_specific != a && e.click_tag_field_errors_specific.length > 0) {
                        for (i = 0; i < e.click_tag_field_errors_specific.length; i++) "" != e.click_tag_field_errors_specific[i].trim() && (t = t + "," + e.click_tag_field_errors_specific[i]);
                        return t
                    }
                    return ""
                },
                storeLength: "pageview"
            },
            "ANA: Get Modal Name": {
                customJS: function() {
                    return $aarpe("#expCorpsPopUp") != a && e.location.href.indexOf("applications/volunteer/experience-corps-volunteer-sign-up.action") > -1 ? "Select A City Modal - Experience Corps Form" : e.location.href.indexOf("/applications/Volunteer_with_AARP_Tax_Aide/aboutYou.action") > -1 && e.location.href.indexOf("/aboutYou.action?jobId=a1oo0000001AGvXAAW") < 0 ? "Expired Link Modal - Tax Aide Form" : void 0
                },
                storeLength: "pageview"
            },
            "ANA: GIGYA Social Elements Clicked": {
                selector: "div#gigya702-reaction0.gig-button-up",
                property: "title",
                storeLength: "pageview"
            },
            "ANA: Groupings (metaS18)": {
                jsVariable: "AARP.MetaInfo.metaS18",
                storeLength: "pageview"
            },
            "ANA: GSS Page Path": {
                jsVariable: "gssWebData.pagePath",
                storeLength: "pageview"
            },
            "ANA: GSS Search Correction": {
                jsVariable: "gssWebData.searchCorrection",
                storeLength: "pageview"
            },
            "ANA: GSS Search Filter": {
                jsVariable: "gssWebData.searchFilter",
                storeLength: "pageview"
            },
            "ANA: GSS Search No Results": {
                jsVariable: "gssWebData.searchNoResults",
                storeLength: "pageview"
            },
            "ANA: GSS Search Number Results": {
                jsVariable: "gssWebData.searchNumResults",
                storeLength: "pageview"
            },
            "ANA: GSS Search Sort": {
                jsVariable: "gssWebData.searchSort",
                storeLength: "pageview"
            },
            "ANA: GSS Search Suggest": {
                jsVariable: "gssWebData.searchSuggest",
                storeLength: "pageview"
            },
            "ANA: GSS Search Term": {
                jsVariable: "gssWebData.searchTerm",
                "default": "no-search-term",
                storeLength: "pageview"
            },
            "ANA:Hierarchy2Levels": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.hierarchy2Levels")
                },
                storeLength: "pageview"
            },
            "ANA:Hierarchy3Levels": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.hierarchy3Levels")
                },
                storeLength: "pageview"
            },
            "ANA: Host": {
                jsVariable: "AARP.MetaInfo.host",
                storeLength: "pageview"
            },
            "ANA: Host Name": {
                customJS: function() {
                    return e.location.hostname
                },
                storeLength: "pageview"
            },
            "ANA: HPC First Page": {
                customJS: function() {
                    return e.tcHpcDataLayer[0].firstPage
                },
                storeLength: "pageview"
            },
            "ANA: HPC Page Name": {
                customJS: function() {
                    return e.tcHpcDataLayer[0].hpcPage
                },
                storeLength: "pageview"
            },
            "ANA: HPC Transaction Total": {
                customJS: function() {
                    return e.tcHpcDataLayer[0].transactionTotal
                },
                storeLength: "pageview"
            },
            "ANA: INTCMP Campaign ID": {
                queryParam: "intcmp",
                storeLength: "pageview",
                ignoreCase: 1
            },
            "ANA: Internal Search Term": {
                queryParam: "q",
                "default": "no results",
                storeLength: "pageview",
                ignoreCase: 1
            },
            "ANA: Internal Search Term Legacy": {
                queryParam: "Ntt",
                "default": "no results",
                storeLength: "pageview",
                ignoreCase: 1
            },
            "ANA: Iphone - Width x Height": {
                customJS: function() {
                    return navigator.userAgent.indexOf("iPhone") > -1 ? screen.width + "x" + screen.height : ""
                },
                "default": "NA",
                storeLength: "pageview"
            },
            "ANA: Is Artcle": {
                jsVariable: "AARP.MetaInfo.isArticle",
                storeLength: "pageview"
            },
            "ANA: keycode": {
                queryParam: "keycode",
                storeLength: "pageview",
                cleanText: !0,
                ignoreCase: 1
            },
            "ANA: konnexId": {
                jsVariable: "webData.konnexId",
                storeLength: "pageview"
            },
            "ANA: Konnex_ID": {
                jsVariable: "AARP.MetaInfo.userdata.konnexID",
                storeLength: "pageview"
            },
            "ANA: Language": {
                jsVariable: "AARP.MetaInfo.language",
                storeLength: "pageview"
            },
            "ANA: locale": {
                queryParam: "request_locale",
                storeLength: "pageview",
                ignoreCase: 1
            },
            "ANA: Login-Or-Registration": {
                customJS: function() {
                    return e.location.href.indexOf("online-community/register/showMemberLookup.action") > -1 || e.location.href.indexOf("online-community/register/membershipLookup.action") > -1 || e.location.href.indexOf("online-community/register/membershipRegister.action") > -1 ? e.buttonClicked : e.location.href.indexOf("online-community/loginform") > -1 || e.location.href.indexOf("applications/user/login") > -1 ? "login" : e.location.href.indexOf("online-community/register") > -1 || e.location.href.indexOf("applications/user/register") > -1 ? "register" : e.location.href.indexOf("online-community/account/pwdreset.action") > -1 || e.location.href.indexOf("applications/user/resetPassword") > -1 ? "password-create" : e.location.href.indexOf("online-community/account/pwdrequest.action") > -1 || e.location.href.indexOf("applications/user/reset/requestReset") > -1 ? "password-reset" : ""
                },
                storeLength: "pageview"
            },
            "ANA: Login-Or-Registration-Channel": {
                customJS: function() {
                    return e.location.href.indexOf("online-community/register/showMemberLookup.action") > -1 || e.location.href.indexOf("online-community/register/membershipLookup.action") > -1 ? "login" : e.location.href.indexOf("online-community/loginform") > -1 || e.location.href.indexOf("applications/user/login") > -1 ? "login" : e.location.href.indexOf("online-community/register") > -1 ? "register" : e.location.href.indexOf("online-community/account/pwdrequest.action") > -1 || e.location.href.indexOf("online-community/account/pwdreset.action") > -1 ? "login" : void 0
                },
                storeLength: "pageview"
            },
            "ANA: LOGIN-REGISTER-SUBMIT ON FRONT END ERR": {
                customJS: function() {
                    return e.click_tag_field_errors || e.click_tag_backend_errors || e.click_tag_field_errors_specific ? _satellite.getVar("ANA: Login-Or-Registration") + "-submit" : ""
                },
                storeLength: "pageview"
            },
            "Analytics: Specialized Pixel Trigger": {
                jsVariable: "webData.newAppSec.pixelTrigger",
                storeLength: "pageview"
            },
            "ANA: Membership Form Field Errors": {
                jsVariable: "window.click_tag_field_errors",
                storeLength: "pageview"
            },
            "ANA-MEM-Campaign-Name": {
                queryParam: "t_id",
                storeLength: "session",
                ignoreCase: 1
            },
            "ANA-MEM-Experience-Name": {
                queryParam: "t_exp_id",
                storeLength: "session",
                ignoreCase: 1
            },
            "ANA: Meta Data Prop 1 (Subject 1)": {
                jsVariable: "AARP.MetaInfo.dcSubject1",
                storeLength: "pageview"
            },
            "ANA: MetaData Prop 2 (Subject 2)": {
                jsVariable: "AARP.MetaInfo.dcSubject2",
                storeLength: "pageview"
            },
            "ANA: Meta Data Prop 3 (Subject 3)": {
                jsVariable: "AARP.MetaInfo.dcSubject3",
                storeLength: "pageview"
            },
            "ANA: Order Confirmation": {
                jsVariable: "webData.mssOrderConfirm",
                storeLength: "pageview"
            },
            "ANA: Order Confirmation_app": {
                jsVariable: "webData.asOrderConfirm",
                storeLength: "pageview"
            },
            "ANA:PageName": {
                customJS: function() {
                    var e = _satellite.getVar("anaWebData.pageName");
                    return e.toLowerCase().indexOf("loginform.action") > -1 && e.toLowerCase().indexOf(";jsessionid") > -1 && (e = e.replace(/;jsessionid=([^\?]+)$/, "")), e
                },
                storeLength: "pageview"
            },
            "ANA: Page Name (webData)": {
                jsVariable: "webData.pageName",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "ANA:PageTitle": {
                jsVariable: "AARP.pageInfo.pageTitle",
                storeLength: "pageview"
            },
            "ANA: Page Title (non-datalayer)": {
                customJS: function() {
                    return t.title
                },
                storeLength: "pageview"
            },
            "ANA:ParameterString": {
                customJS: function() {
                    var e = _satellite.getVar("anaWebData.queryString");
                    return void 0 !== _satellite.getVar("anaWebData.EmailQueryStringParameter") && (e = e.replace(_satellite.getQueryParam(_satellite.getVar("anaWebData.EmailQueryStringParameter")), "[REMOVED]")), e
                },
                storeLength: "pageview"
            },
            "ANA-Password-FormField-CTA-[errordata]-1": {
                customJS: function() {
                    if (e && e.click_tag_field_errors) return e.click_tag_field_errors
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "ANA: PGID": {
                customJS: function() {
                    var e = _satellite.getVar("anaWebData.PGID");
                    return void 0 !== _satellite.getVar("anaWebData.EmailQueryStringParameter") && (e = e.replace(_satellite.getQueryParam(_satellite.getVar("anaWebData.EmailQueryStringParameter")), "[REMOVED]")), e
                },
                storeLength: "pageview"
            },
            "ANA: Portfolio list (metaS43)": {
                jsVariable: "AARP.MetaInfo.metaS43",
                storeLength: "pageview"
            },
            "ANA: Publisher": {
                jsVariable: "AARP.MetaInfo.publisher",
                storeLength: "pageview"
            },
            "ANA: Publisher Date": {
                jsVariable: "AARP.MetaInfo.publishDate",
                storeLength: "pageview"
            },
            "ANA: PW-RESET-CONFIRM": {
                selector: "div > div.col-lg-7.col-md-7.col-sm-8.textPara > div > a",
                property: "text",
                storeLength: "pageview"
            },
            "ANA: PW-RESET-START": {
                selector: "div.text-align-center.container.margin-bottom30.margin-top30 > h3",
                property: "text",
                storeLength: "pageview"
            },
            "ANA: Registration Completed": {
                jsVariable: "webData.mssRegistered",
                storeLength: "pageview"
            },
            "ANA: Registration Completed (as)": {
                jsVariable: "webData.asRegistered",
                storeLength: "pageview"
            },
            "ANA: Registration Status": {
                jsVariable: "webData.mssRegistrationStatus",
                storeLength: "pageview"
            },
            "ANA: Registration Status (as)": {
                jsVariable: "webData.asRegistrationStatus",
                storeLength: "pageview"
            },
            "ANA: Registration Type": {
                jsVariable: "webData.mssRegistrationType",
                storeLength: "pageview"
            },
            "ANA: Registration Type (as)": {
                jsVariable: "webData.asRegistrationType",
                storeLength: "pageview"
            },
            "ANA: Section": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.sections")
                },
                storeLength: "pageview"
            },
            "ANA: Sections (new)": {
                customJS: function() {
                    _satellite.getVar("sections")
                },
                storeLength: "pageview"
            },
            "ANA: Selected Newsletters": {
                customJS: function() {
                    function e(e) {
                        return "11724" == e ? "WL" : "19063" == e ? "TRVL" : "58062" == e ? "GRLFRD" : "51176" == e ? "ESPL" : "35395" == e ? "HD" : "55594" == e ? "CTG" : "32912" == e ? "EVNT" : "51655" == e ? "BNFT" : "29636" == e ? "MNY" : "28336" == e ? "LS" : "19061" == e ? "HLTH" : "55599" == e ? "BLTN" : "17201" == e ? "ADV" : e
                    }
                    return Array.from(t.querySelectorAll("input[name=newsLetters]:checked,input[name=selectedNewsLetters]:checked")).map(function(t) {
                        return e(t.value)
                    }).join("|")
                },
                storeLength: "pageview"
            },
            "ANA: Site Property (EVERYWHERE ONLY)": {
                jsVariable: "AARP.Everywhere.siteProperty",
                "default": "na",
                storeLength: "pageview"
            },
            "ANA: Site Property (NOT EVERYWHERE)": {
                jsVariable: "AARP.MetaInfo.siteProperty",
                "default": "na",
                storeLength: "pageview"
            },
            "ANA: Source": {
                jsVariable: "AARP.MetaInfo.source",
                storeLength: "pageview"
            },
            "ANA:Subtopic": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.subtopic")
                },
                storeLength: "pageview"
            },
            "ANA:TaxonomyA": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.taxonomyA")
                },
                storeLength: "pageview"
            },
            "ANA:TaxonomyB": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.taxonomyB")
                },
                storeLength: "pageview"
            },
            "ANA:TCCampaignId": {
                queryParam: "tc_campaign",
                storeLength: "session",
                ignoreCase: 1
            },
            "ANA: Today's Data": {
                jsVariable: "AARP.MetaInfo.todaysDate",
                storeLength: "pageview"
            },
            "ANA:Topic": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.topic")
                },
                storeLength: "pageview"
            },
            "ANA: URL Hash": {
                customJS: function() {
                    return t.location.hash || ""
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "ANA: User Interest List Formatted": {
                customJS: function() {
                    var e = _satellite.getVar("user_interest_list"),
                        t = "AM-NAV-INTRST-INTRST-";
                    return e && Array.isArray(e) && (t += e.join(",")), t
                },
                storeLength: "pageview"
            },
            "ANA:Vendor": {
                customJS: function() {
                    return _satellite.getVar("anaWebData.vendor")
                },
                storeLength: "pageview"
            },
            "ANA: Vendor (metaS6)": {
                jsVariable: "AARP.MetaInfo.metaS6",
                storeLength: "pageview"
            },
            "anaWebData.channel": {
                customJS: function() {
                    var t = "",
                        a = "",
                        r = "",
                        n = "",
                        i = _satellite.getVar("anaWebData.cmsPageType"),
                        o = _satellite.getVar("anaWebData.pathc"),
                        s = e.location.host,
                        c = "",
                        l = !1,
                        d = "",
                        u = "",
                        m = o.slice(0);
                    switch ("object" == typeof e.AARP && "object" == typeof e.AARP.MetaInfo && "object" == typeof e.AARP.MetaInfo.siteProperty && AARP.MetaInfo && AARP.MetaInfo.siteProperty.length > 0 && (c = AARP.MetaInfo.siteProperty), m.unshift(s), m.length > 0 && "Classic" != c && "Travel" != c && m.pop(), m.length >= 1 && (a = m[0], l = !0), m.length >= 2 && (r = m[1]), m.length >= 3 && (n = m[2]), a) {
                        case "www.aarp.org":
                            if (r && r.length < 1) a = "homepage", l = !1;
                            else switch (r) {
                                case "community":
                                    a = "community";
                                    break;
                                case "health":
                                case "money":
                                case "leisure":
                                case "makeadifference":
                                case "family":
                                case "families":
                                    a = "editorial";
                                    break;
                                case "aarp":
                                    switch (n) {
                                        case "live_and_learn":
                                            a = "editorial";
                                            break;
                                        case "about_aarp":
                                        case "help":
                                        case "human_resources":
                                        case "presscenter":
                                            a = "professional"
                                    }
                                    break;
                                case "research":
                                    switch (n) {
                                        case "ppi":
                                            a = "professional"
                                    }
                                    break;
                                case "nrta":
                                    a = "professional";
                                    break;
                                case "about_aarp":
                                    switch (n) {
                                        case "nrta":
                                        case "aarp_foundation":
                                        default:
                                            a = "professional"
                                    }
                            }
                            break;
                        case "games.aarp.org":
                        case "www.uclick.com":
                            a = "games";
                            break;
                        case "www.aarpmagazine.org":
                        case "www.segundajuventud.org":
                        case "bulletin.aarp.org":
                            a = "editorial";
                            break;
                        case "products.aarp.org":
                        case "www.aarphealthcare.com":
                        case "www.aarpfinancial.com":
                        case "www.aarpfunds.com":
                            a = "commercial"
                    }
                    return t = d = a, l && r && r.length > 0 ? (d = a + ":" + r, n && n.length > 0 ? u = a + ":" + r + ":" + n : (d = a + ":" + r, u = a + ":" + r)) : (d = a, u = a), 0 == d.length && 0 == u.length && "vendorPage" == i && (d = s, u = s), t
                },
                storeLength: "pageview"
            },
            "anaWebData.cleanUrl": {
                customJS: function() {
                    var t = e.location.href;
                    return void 0 !== _satellite.getVar("anaWebData.EmailQueryStringParameter") && (t = t.replace(_satellite.getQueryParam(_satellite.getVar("anaWebData.EmailQueryStringParameter")), "[REMOVED]")), t
                },
                storeLength: "pageview"
            },
            "anaWebData.dirIndex": {
                customJS: function() {
                    var e = _satellite.getVar("anaWebData.file"),
                        t = _satellite.getVar("anaWebData.pathcEffective"),
                        a = _satellite.getVar("pathEffective");
                    return e || 0 === e.length || "index" == e.split(".")[0] || 0 === t.length || 1 === a.length
                },
                storeLength: "pageview"
            },
            "anaWebData.e9VisitorType": {
                customJS: function() {
                    var t = e.location.hostname.split(".").shift(),
                        a = "",
                        r = _satellite.getVar("anaWebData.pathc");
                    return "games" == t && (a = "gamer"), "www.aarp.org" != e.location.host || r[0] || (a = "homepage"), a
                },
                storeLength: "pageview"
            },
            "anaWebData.EmailQueryStringParameter": {
                customJS: function() {
                    var t = "",
                        a = e.location.href,
                        r = _satellite.getQueryParam("EmailAddress"),
                        n = _satellite.getQueryParam("OnlineAddr"),
                        i = _satellite.getQueryParam("USERNAME");
                    return a.indexOf("EmailAddress") > -1 && r.indexOf("@") > -1 ? t = "EmailAddress" : a.indexOf("OnlineAddr") > -1 && n.indexOf("@") > -1 ? t = "OnlineAddr" : a.indexOf("USERNAME") > -1 && i.indexOf("@") > -1 && (t = "USERNAME"), t
                },
                storeLength: "pageview"
            },
            "anaWebData.file": {
                customJS: function() {
                    var t = e.location.href.split("?", 2);
                    t.length > 1 && "" !== t && t[1];
                    var a = t[0].split("/"),
                        r = a.shift();
                    return r = a.shift().split(":"), r = "", a.length > 0 && (r = a.pop()), a.shift(), r.substring(0, r.length)
                },
                storeLength: "pageview"
            },
            "anaWebData.hierarchy2Levels": {
                customJS: function() {
                    var t = "",
                        a = "",
                        r = "",
                        n = _satellite.getVar("anaWebData.pageType"),
                        i = _satellite.getVar("anaWebData.pathc"),
                        o = e.location.host,
                        s = "",
                        c = !1,
                        l = "",
                        d = "",
                        u = i.slice(0);
                    switch ("object" == typeof e.AARP && "object" == typeof e.AARP.MetaInfo && "object" == typeof e.AARP.MetaInfo.siteProperty && AARP.MetaInfo && AARP.MetaInfo.siteProperty.length > 0 && (s = AARP.MetaInfo.siteProperty), u.unshift(o), u.length > 0 && "Classic" != s && "Travel" != s && u.pop(), u.length >= 1 && (t = u[0], c = !0), u.length >= 2 && (a = u[1]), u.length >= 3 && (r = u[2]), t) {
                        case "www.aarp.org":
                            if (a && a.length < 1) t = "homepage", c = !1;
                            else switch (a) {
                                case "community":
                                    t = "community";
                                    break;
                                case "health":
                                case "money":
                                case "leisure":
                                case "makeadifference":
                                case "family":
                                case "families":
                                    t = "editorial";
                                    break;
                                case "aarp":
                                    switch (r) {
                                        case "live_and_learn":
                                            t = "editorial";
                                            break;
                                        case "about_aarp":
                                        case "help":
                                        case "human_resources":
                                        case "presscenter":
                                            t = "professional"
                                    }
                                    break;
                                case "research":
                                    switch (r) {
                                        case "ppi":
                                            t = "professional"
                                    }
                                    break;
                                case "nrta":
                                    t = "professional";
                                    break;
                                case "about_aarp":
                                    switch (r) {
                                        case "nrta":
                                        case "aarp_foundation":
                                        default:
                                            t = "professional"
                                    }
                            }
                            break;
                        case "games.aarp.org":
                        case "www.uclick.com":
                            t = "games";
                            break;
                        case "www.aarpmagazine.org":
                        case "www.segundajuventud.org":
                        case "bulletin.aarp.org":
                            t = "editorial";
                            break;
                        case "products.aarp.org":
                        case "www.aarphealthcare.com":
                        case "www.aarpfinancial.com":
                        case "www.aarpfunds.com":
                            t = "commercial"
                    }
                    return l = t, c && a && a.length > 0 ? (l = t + ":" + a, r && r.length > 0 ? d = t + ":" + a + ":" + r : (l = t + ":" + a, d = t + ":" + a)) : (l = t, d = t), 0 == l.length && 0 == d.length && "vendorPage" == n && (l = o, d = o), l
                },
                storeLength: "pageview"
            },
            "anaWebData.hierarchy3Levels": {
                customJS: function() {
                    var t = "",
                        a = "",
                        r = "",
                        n = _satellite.getVar("anaWebData.cmsPageType"),
                        i = _satellite.getVar("anaWebData.pathc"),
                        o = e.location.host,
                        s = "",
                        c = !1,
                        l = "",
                        d = "",
                        u = i.slice(0);
                    switch ("object" == typeof e.AARP && "object" == typeof e.AARP.MetaInfo && "object" == typeof e.AARP.MetaInfo.siteProperty && AARP.MetaInfo && AARP.MetaInfo.siteProperty.length > 0 && (s = AARP.MetaInfo.siteProperty), u.unshift(o), u.length > 0 && "Classic" != s && "Travel" != s && u.pop(), u.length >= 1 && (t = u[0], c = !0), u.length >= 2 && (a = u[1]), u.length >= 3 && (r = u[2]), t) {
                        case "www.aarp.org":
                            if (a && a.length < 1) t = "homepage", c = !1;
                            else switch (a) {
                                case "community":
                                    t = "community";
                                    break;
                                case "health":
                                case "money":
                                case "leisure":
                                case "makeadifference":
                                case "family":
                                case "families":
                                    t = "editorial";
                                    break;
                                case "aarp":
                                    switch (r) {
                                        case "live_and_learn":
                                            t = "editorial";
                                            break;
                                        case "about_aarp":
                                        case "help":
                                        case "human_resources":
                                        case "presscenter":
                                            t = "professional"
                                    }
                                    break;
                                case "research":
                                    switch (r) {
                                        case "ppi":
                                            t = "professional"
                                    }
                                    break;
                                case "nrta":
                                    t = "professional";
                                    break;
                                case "about_aarp":
                                    switch (r) {
                                        case "nrta":
                                        case "aarp_foundation":
                                        default:
                                            t = "professional"
                                    }
                            }
                            break;
                        case "games.aarp.org":
                        case "www.uclick.com":
                            t = "games";
                            break;
                        case "www.aarpmagazine.org":
                        case "www.segundajuventud.org":
                        case "bulletin.aarp.org":
                            t = "editorial";
                            break;
                        case "products.aarp.org":
                        case "www.aarphealthcare.com":
                        case "www.aarpfinancial.com":
                        case "www.aarpfunds.com":
                            t = "commercial"
                    }
                    return l = t, c && a && a.length > 0 ? (l = t + ":" + a, r && r.length > 0 ? d = t + ":" + a + ":" + r : (l = t + ":" + a, d = t + ":" + a)) : (l = t, d = t), 0 == l.length && 0 == d.length && "vendorPage" == n && (l = o, d = o), d
                },
                storeLength: "pageview"
            },
            anaWebData_pageName: {
                jsVariable: "window.anaWebData.pageInfo.pageName",
                storeLength: "pageview"
            },
            "anaWebData.pageName": {
                customJS: function() {
                    var e = "",
                        a = _satellite.getVar("anaWebData.subdomain"),
                        r = _satellite.getVar("anaWebData.path"),
                        n = _satellite.getVar("anaWebData.file");
                    return t.location.host.toLowerCase().indexOf("aarpdriversafety.org") > -1 ? a = "www.aarpdriversafety.org" : t.location.host.toLowerCase().indexOf("createthegood.org") > -1 ? a = "createthegood" : t.location.host.toLowerCase().indexOf("aarpinternational.org") > -1 ? a = "aarpinternational" : t.location.host.toLowerCase().indexOf("soyaarp.org") > -1 ? a = "soyaarp" : t.location.host.toLowerCase().indexOf("getaarp.org") > -1 ? a = "getaarp" : t.location.host.toLowerCase().indexOf("tryaarp.org") > -1 ? a = "tryaarp" : t.location.host.toLowerCase().indexOf("foundation.aarp.org") > -1 ? a = "foundation" : t.location.host.toLowerCase().indexOf("thegirlfriend.com") > -1 ? a = "thegirlfriend" : t.location.host.toLowerCase().indexOf("25daysofheroes.com") > -1 ? a = "25DaysofHeroes" : t.location.host.toLowerCase().indexOf("doyoucarechallenge.org") > -1 && (a = "doyoucarechallenge.org"), (e = a + ":" + r + (n ? "/" + n : "")).toLowerCase().indexOf("loginform.action") > -1 && e.toLowerCase().indexOf(";jsessionid") > -1 && (e = e.replace(/;jsessionid=([^\?]+)$/, "")), e
                },
                storeLength: "pageview"
            },
            "anaWebData.pageTitle": {
                jsVariable: "document.title",
                storeLength: "pageview"
            },
            "anaWebData.path": {
                customJS: function() {
                    var t = "",
                        a = e.location.href.split("?", 2);
                    a.length > 1 && "" !== a && a[1];
                    var r = a[0].split("/");
                    r.shift();
                    return r.shift().split(":"), "", r.length > 0 && r.pop(), r.shift(), "/" == (t = "/" + r.join("/")) && (t = ""), t
                },
                storeLength: "pageview"
            },
            "anaWebData.pathc": {
                customJS: function() {
                    var t = "",
                        a = [],
                        r = e.location.href.split("?", 2);
                    r.length > 1 && "" !== r && r[1];
                    var n = r[0].split("/");
                    n.shift();
                    return n.shift().split(":"), "", n.length > 0 && n.pop(), n.shift(), "/" == (t = "/" + n.join("/")) ? t = "" : a = t.substring(1, t.length).split("/"), a
                },
                storeLength: "pageview"
            },
            "anaWebData.pathcEffective": {
                customJS: function() {
                    var t = _satellite.getVar("anaWebData.file"),
                        a = "",
                        r = [],
                        n = [],
                        i = e.location.href.split("?", 2);
                    i.length > 1 && "" !== i && i[1];
                    var o = i[0].split("/");
                    o.shift();
                    if (o.shift().split(":"), "", o.length > 0 && o.pop(), o.shift(), "/" == (a = "/" + o.join("/")) ? a = "" : r = a.substring(1, a.length).split("/"), r.length >= 3 && "content" == r[0]) {
                        for (var s = "", c = 3; c < r.length; c++) "home" != r[c] && (n.push(r[c]), s = r[c]);
                        if ("articles" != s) {
                            var l = t.split(".");
                            l.length > 0 && "home" != l[0] && n.push(l[0])
                        }
                        "/" + n.join("/")
                    } else a, n = r;
                    return n
                },
                storeLength: "pageview"
            },
            "anaWebData.pathEffective": {
                customJS: function() {
                    var t, a = _satellite.getVar("anaWebData.file"),
                        r = "",
                        n = [],
                        i = e.location.href.split("?", 2);
                    i.length > 1 && "" !== i && i[1];
                    var o = i[0].split("/");
                    o.shift();
                    if (o.shift().split(":"), "", o.length > 0 && o.pop(), o.shift(), "/" == (r = "/" + o.join("/")) ? r = "" : pathc = r.substring(1, r.length).split("/"), pathc.length >= 3 && "content" == pathc[0]) {
                        for (var s = "", c = 3; c < pathc.length; c++) "home" != pathc[c] && (n.push(pathc[c]), s = pathc[c]);
                        if ("articles" != s) {
                            var l = a.split(".");
                            l.length > 0 && "home" != l[0] && n.push(l[0])
                        }
                        t = "/" + n.join("/")
                    } else t = r, n = pathc;
                    return t
                },
                storeLength: "pageview"
            },
            "anaWebData.PGID": {
                customJS: function() {
                    var t = _satellite.getVar("anaWebData.queryString"),
                        a = _satellite.getVar("anaWebData.queryString"),
                        r = "",
                        n = "";
                    return "object" == typeof e.AARP && "object" == typeof e.AARP.MetaInfo && "object" == typeof e.AARP.MetaInfo.siteProperty && AARP.MetaInfo && AARP.MetaInfo.siteProperty.length > 0 && (n = AARP.MetaInfo.siteProperty), "Classic" == n ? r = AARP.Ads.pageid : "Everywhere" == n ? r = AARP.Everywhere.AdInfo.pageid : "Travel" == n && (r = AARP.Ads.pageid), t.length > 0 ? r + "/?" + a : r
                },
                storeLength: "pageview"
            },
            "anaWebData.queryString": {
                customJS: function() {
                    var t = e.location.href.split("?", 2),
                        a = "";
                    return t.length > 1 && "" !== t && (a = t[1]), a
                },
                storeLength: "pageview"
            },
            "anaWebData.registrationStatus": {
                customJS: function() {
                    function e() {
                        var e = "",
                            a = t.querySelector("meta[id='customEvents']");
                        return a ? a.hasAttribute("content") ? e = t.querySelector("meta[id='customEvents']").getAttribute("content") : void 0 : e
                    }
                    return e()
                },
                storeLength: "pageview"
            },
            "anaWebData.sections": {
                customJS: function() {
                    var t = "",
                        a = "",
                        r = _satellite.getVar("anaWebData.pathc"),
                        n = _satellite.getVar("anaWebData.dirIndex"),
                        i = "",
                        o = "";
                    return "object" == typeof e.AARP && "object" == typeof e.AARP.MetaInfo && "object" == typeof e.AARP.MetaInfo.siteProperty && AARP.MetaInfo && AARP.MetaInfo.siteProperty.length > 0 && (a = AARP.MetaInfo.siteProperty), "Classic" == a ? (o = AARP.Ads.pageid, i = AARP.Ads.pgtype) : "Everywhere" == a ? (o = AARP.Everywhere.AdInfo.pageid, i = AARP.Everywhere.pgtype) : "Travel" == a ? (o = AARP.Ads.pageid, i = AARP.Ads.pgtype) : (a = "Vendor", i = "vendorPage"), "online-community" == r[0] || "online_community" == r[0] ? t = "type:community" : (t = n && "vendorPage" != i ? "type:landingPage" : o.match(/404/) ? "type:404-MissingPage" : "", i.match(/article/) && (t = "type:article")), "www.aarp.org" != e.location.host || r[0] || (t = "homepage"), t
                },
                storeLength: "pageview"
            },
            "anaWebData.subdomain": {
                customJS: function() {
                    return e.location.hostname.split(".").shift()
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "anaWebData.subtopic": {
                customJS: function() {
                    var t = "",
                        a = _satellite.getVar("anaWebData.pathc");
                    return t = a[3] ? a[3] : "", "www.aarp.org" != e.location.host || a[0] || (t = "homepage"), t
                },
                storeLength: "pageview"
            },
            "anaWebData.taxonomyA": {
                customJS: function() {
                    var t = "",
                        a = _satellite.getVar("anaWebData.pathc");
                    return t = a[0] ? a[0] : "", "www.aarp.org" != e.location.host || a[0] || (t = "homepage"), e.location.pathname.match("/MSS/join/application") && (t = "vendor"), t
                },
                storeLength: "pageview"
            },
            "anaWebData.taxonomyB": {
                customJS: function() {
                    var t = "",
                        a = _satellite.getVar("anaWebData.pathc");
                    return t = a[1] ? a[1] : "", "www.aarp.org" != e.location.host || a[0] || (t = "homepage"), e.location.pathname.match("/MSS/join/application") && (t = "joinrenew"), t
                },
                storeLength: "pageview"
            },
            "anaWebData.topic": {
                customJS: function() {
                    var t = "",
                        a = _satellite.getVar("anaWebData.pathc");
                    return t = a[2] ? a[2] : "", "www.aarp.org" != e.location.host || a[0] || (t = "homepage"), t
                },
                storeLength: "pageview"
            },
            "anaWebData.vendor": {
                customJS: function() {
                    function a() {
                        var e = "",
                            a = t.querySelector("meta[id='metaS6']");
                        return a ? a.hasAttribute("content") ? e = t.querySelector("meta[id='metaS6']").getAttribute("content") : void 0 : e
                    }
                    var r = e.location.hostname.split(".").shift(),
                        n = e.location.href;
                    return a() || (n.match(/\/\/refresh|\/\/www|\/\/local|-d.aarp|-s.aarp|-qa.aarp/) ? "" : r)
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Article Page": {
                jsVariable: "AARP.Everywhere.isArticle",
                storeLength: "pageview"
            },
            "AT: Key Code": {
                customJS: function() {
                    var e = "",
                        t = _satellite.getVar("ANA: keycode"),
                        r = _satellite.getVar("ANA: campaignid");
                    return typeof t != a && t ? e = t : typeof r != a && r && (e = r), e
                },
                storeLength: "pageview",
                cleanText: !0
            },
            "AT: MSS Flow Type": {
                jsVariable: "AARP.MetaInfo.userdata.appstep",
                storeLength: "pageview"
            },
            "AT: Payment Method": {
                jsVariable: "webData.paymentMethod",
                storeLength: "pageview"
            },
            "AT: Payment Type": {
                jsVariable: "webData.paymentType",
                storeLength: "pageview"
            },
            "AT: Payment Type (Membership)": {
                jsVariable: "AARP.MetaInfo.webdata.paymentType",
                storeLength: "pageview"
            },
            "AT: Product Category": {
                jsVariable: "webData.productsCategory",
                storeLength: "pageview"
            },
            "AT: Product Member ID": {
                jsVariable: "webData.productsMember_id",
                storeLength: "pageview"
            },
            "AT: Product Name": {
                jsVariable: "AARP.MetaInfo.webdata.products",
                storeLength: "pageview"
            },
            "AT: Product Purchase Price": {
                jsVariable: "webData.productsPrice",
                storeLength: "pageview"
            },
            "AT Product Quantity": {
                jsVariable: "webData.productsQuantity",
                storeLength: "pageview"
            },
            "AT: Products": {
                jsVariable: "webData.products",
                storeLength: "pageview"
            },
            "AT: Product SKU": {
                jsVariable: "webData.productsSku",
                storeLength: "pageview"
            },
            "AT: Product Term Selected": {
                jsVariable: "webData.productsTerm_selected",
                storeLength: "pageview"
            },
            "AT: Purchase Event": {
                jsVariable: "webData.events.purchase",
                storeLength: "pageview"
            },
            channel: {
                jsVariable: "AARP.pageInfo.channel",
                storeLength: "pageview"
            },
            "CID 360": {
                queryParam: "360cid",
                storeLength: "pageview",
                ignoreCase: 1
            },
            contentId: {
                customJS: function() {
                    "undefined" != typeof AARP && null !== AARP || (AARP = {}), "undefined" != typeof AARP.Everywhere && null !== AARP.Everywhere || (AARP.Everywhere = {}), "undefined" != typeof AARP.Everywhere.AdInfo && null !== AARP.Everywhere.AdInfo || (AARP.Everywhere.AdInfo = {}), "undefined" != typeof AARP.Ads && null !== AARP.Ads || (AARP.Ads = {});
                    var e = "";
                    return AARP.Everywhere.AdInfo.pageid ? houseAds = AARP.Everywhere.AdInfo.pageid : AARP.Ads.house && (houseAds = AARP.Ads.pageid), e
                },
                storeLength: "pageview"
            },
            "Cookie: CID": {
                customJS: function() {
                    function e(e) {
                        var t = decodeURIComponent(e);
                        0 == e.indexOf("?") && (t = e.substring(1));
                        for (var a = t.split("&"), r = {}, n = 0; n < a.length; n++) {
                            var i = a[n].split("=");
                            r[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                        }
                        return r
                    }
                    var t = _satellite.readCookie("at");
                    if (t) {
                        var a = e(t);
                        return "undefined" != typeof a.cid && "0" != a.cid || (a.cid = ""), a.cid
                    }
                },
                storeLength: "session"
            },
            "Cookie: DSOUID": {
                customJS: function() {
                    function e(e) {
                        var t = decodeURIComponent(e);
                        0 == e.indexOf("?") && (t = e.substring(1));
                        for (var a = t.split("&"), r = {}, n = 0; n < a.length; n++) {
                            var i = a[n].split("=");
                            r[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                        }
                        return r
                    }
                    var t = _satellite.readCookie("at");
                    if (t) {
                        var a = e(t);
                        return "undefined" != typeof a.u && "0" != a.u || (a.u = ""), a.u
                    }
                },
                storeLength: "pageview"
            },
            "Cookie: dso user id ": {
                cookie: "u",
                storeLength: "pageview"
            },
            "Cookie: Email": {
                cookie: "email",
                storeLength: "pageview"
            },
            "Cookie: FEDID": {
                cookie: "fedid",
                storeLength: "session"
            },
            "Cookie: First Time Renewers": {
                cookie: "ftr",
                storeLength: "pageview"
            },
            "Cookie: KONNEX ID": {
                cookie: "cid",
                storeLength: "pageview"
            },
            "Cookie: mar": {
                customJS: function() {
                    function e(e) {
                        var t = decodeURIComponent(e);
                        0 == e.indexOf("?") && (t = e.substring(1));
                        for (var a = t.split("&"), r = {}, n = 0; n < a.length; n++) {
                            var i = a[n].split("=");
                            r[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                        }
                        return r
                    }
                    var t = _satellite.readCookie("at");
                    if (t) return e(t).mar
                },
                storeLength: "session"
            },
            "Cookie: Member Account Term": {
                cookie: "mat",
                storeLength: "pageview"
            },
            "Cookie: Member Join Date": {
                cookie: "mj",
                storeLength: "pageview"
            },
            "Cookie: membership exp date": {
                storeLength: "pageview"
            },
            "Cookie: Member Status": {
                cookie: "ms",
                storeLength: "pageview"
            },
            "Cookie: Newsletter Contract ID": {
                cookie: "n",
                storeLength: "pageview"
            },
            "Cookie: pluck username": {
                cookie: "a",
                storeLength: "pageview"
            },
            "Cookie: State": {
                cookie: "state",
                storeLength: "pageview"
            },
            "Cookie: User Features": {
                cookie: "uf",
                storeLength: "pageview"
            },
            "Cookie: Zip/postalCode": {
                cookie: "p",
                storeLength: "pageview"
            },
            "Custom Script - Page URL W/O Parameter": {
                customJS: function() {
                    return e.location.href.split(/[?#]/)[0]
                },
                storeLength: "pageview"
            },
            "DataLayer-ANA-ACTTYPE-Taxonomy-[userdata]": {
                jsVariable: "window.AARP.MetaInfo.userdata.accounttype",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-APPSTEP-Taxonomy-[userdata]": {
                jsVariable: "window.AARP.MetaInfo.userdata.appstep",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-APPTIME-Taxonomy-[userdata]": {
                jsVariable: "window.AARP.MetaInfo.userdata.apptime",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-ARTICLEID-Taxonomy-[contentdata]": {
                jsVariable: "window.AARP.MetaInfo.contentdata.articleid",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-CAMPAIGNID-Taxonomy-[webdata]": {
                customJS: function() {
                    return e.AARP.MetaInfo.webdata ? e.AARP.MetaInfo.webdata.campaignId : _satellite.getQueryParamCaseInsensitive("campaignid") || _satellite.getQueryParamCaseInsensitive("keycode")
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-CAMPAIGN-Taxonomy-[webdata]": {
                jsVariable: "window.AARP.MetaInfo.webdata.campaign",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-CAMPAIGNTYPE-Taxonomy-[webdata]": {
                jsVariable: "window.AARP.MetaInfo.webdata.campaigntype",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-DSOUID-Taxonomy-[userdata]": {
                jsVariable: "window.AARP.analytics.custom.cookie.atProps.u",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-ERRCDE-Taxonomy-[errors]": {
                jsVariable: "window.AARP.MetaInfo.errors.errorcode",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-ERRMESS-Taxonomy-[errors]": {
                jsVariable: "window.AARP.MetaInfo.errors.errormessage",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-EVENTTYPE-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.eventtype",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-KONNEXID-Taxonomy-[userdata]": {
                customJS: function() {
                    var t = function(e, a) {
                        var r = Object.prototype.toString.call(e);
                        if (r !== Object.prototype.toString.call(a)) return !1;
                        if (["[object Array]", "[object Object]"].indexOf(r) < 0) return !1;
                        var n = "[object Array]" === r ? e.length : Object.keys(e).length;
                        if (n !== ("[object Array]" === r ? a.length : Object.keys(a).length)) return !1;
                        var i = function(e, a) {
                            var r = Object.prototype.toString.call(e);
                            if (["[object Array]", "[object Object]"].indexOf(r) >= 0) {
                                if (!t(e, a)) return !1
                            } else {
                                if (r !== Object.prototype.toString.call(a)) return !1;
                                if ("[object Function]" === r) {
                                    if (e.toString() !== a.toString()) return !1
                                } else if (e !== a) return !1
                            }
                        };
                        if ("[object Array]" === r) {
                            for (var o = 0; o < n; o++)
                                if (!1 === i(e[o], a[o])) return !1
                        } else
                            for (var s in e)
                                if (e.hasOwnProperty(s) && !1 === i(e[s], a[s])) return !1;
                        return !0
                    };
                    return "object" == typeof e.AARP && "object" == typeof e.AARP.MetaInfo && "object" == typeof e.AARP.MetaInfo.userdata && "undefined" != typeof e.AARP.MetaInfo.userdata.konnexid && e.AARP.MetaInfo.userdata.konnexid && !t(e.AARP.pageInfo.pathc, ["applications", "user", "account"]) ? (console.log("RETURNING window.userdata.konnexid", e.AARP.MetaInfo.userdata.konnexid), e.AARP.MetaInfo.userdata.konnexid) : (console.log("RETURNING Cookie: CID", _satellite.getVar("Cookie: CID")), _satellite.getVar("Cookie: CID") || (e.AARP.analytics && e.AARP.analytics.custom ? e.AARP.analytics.custom.cookie.ufoProps.p : ""))
                },
                storeLength: "pageview"
            },
            "DataLayer-ANA-LANGUAGE-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.language",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-LASTMOD-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.lastModified",
                storeLength: "pageview"
            },
            "DataLayer-ANA-MEMBERID-Taxonomy-[userdata]": {
                jsVariable: "window.AARP.MetaInfo.userdata.memberID",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-MEMDTE-Taxonomy-[userdata]": {
                customJS: function() {
                    return e.AARP.analytics && e.AARP.analytics.custom ? e.AARP.analytics.custom.cookie.atProps.mj || e.AARP.analytics.custom.cookie.ufoProps.j : ""
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-MEMEXPDATE-Taxonomy-[userdata]": {
                customJS: function() {
                    return e.AARP.analytics && e.AARP.analytics.custom ? e.AARP.analytics.custom.cookie.atProps.me || e.AARP.analytics.custom.cookie.ufoProps.x : ""
                },
                storeLength: "pageview"
            },
            "DataLayer-ANA-MEMFLG-Taxonomy-[userdata]": {
                customJS: function() {
                    return e.AARP.analytics && e.AARP.analytics.custom ? e.AARP.analytics.custom.cookie.atProps.mar || e.AARP.analytics.custom.cookie.ufoProps.a : ""
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-MEMSTATUS-Taxonomy-[userdata]": {
                customJS: function() {
                    var t = e.AARP && e.AARP.analytics && e.AARP.analytics.custom && e.AARP.analytics.custom.cookie && e.AARP.analytics.custom.cookie.atProps ? e.AARP.analytics.custom.cookie.atProps.ms : null;
                    switch (t) {
                        case "0":
                            t = "ACTIVE";
                            break;
                        case "1":
                            t = "NON-MEMBER";
                            break;
                        case "4":
                            t = "CANCELLED";
                            break;
                        case "5":
                            t = "EXPIRED";
                            break;
                        case "D":
                            t = "DECEASED-SUSPEND";
                            break;
                        case "M":
                            t = "MEMBER-REQUEST-SUSPEND";
                            break;
                        case "U":
                            t = "UNDELIVERABLE-SUSPEND"
                    }
                    return t
                },
                storeLength: "pageview"
            },
            "DataLayer-ANA-MEMTERM-Taxonomy-[userdata]": {
                jsVariable: "window.AARP.analytics.custom.cookie.atProps.mat",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-MIDID-Taxonomy-[userdata]": {
                customJS: function() {
                    return "object" == typeof e.AARP && "object" == typeof e.AARP.MetaInfo && "object" == typeof e.AARP.MetaInfo.userdata && "undefined" != typeof e.AARP.MetaInfo.userdata.federatedid && e.AARP.MetaInfo.userdata.federatedid ? (console.log("RETURNING window.userdata.federatedid", e.AARP.MetaInfo.userdata.federatedid), e.AARP.MetaInfo.userdata.federatedid) : (console.log("RETURNING Cookie: FEDID", _satellite.getVar("Cookie: FEDID")), _satellite.getVar("Cookie: FEDID") || (e.AARP.analytics && e.AARP.analytics.custom ? e.AARP.analytics.custom.cookie.ufoProps.u : ""))
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-ORDERAMT-Taxonomy-[webdata]": {
                jsVariable: "window.AARP.MetaInfo.webdata.orderAmount",
                storeLength: "pageview"
            },
            "DataLayer-ANA-PAGENAME-Taxonomy-[pagedata]": {
                customJS: function() {
                    var t = e.AARP && e.AARP.MetaInfo && e.AARP.MetaInfo.pagedata ? e.AARP.MetaInfo.pagedata.pagename : null;
                    return t || (t = _satellite.getVar("ANA:PageName")), t
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-PAGENAME-Taxonomy-[pageinfo]": {
                jsVariable: "window.AARP.pageInfo.pageName",
                storeLength: "pageview"
            },
            "DataLayer-ANA-PAGETYPE-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.pagetype",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-PRODCDE-Taxonomy-[userdata]": {
                jsVariable: "window.AARP.MetaInfo.userdata.productcode",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-PRODDID-Taxonomy-[userdata]": {
                jsVariable: "window.AARP.MetaInfo.userdata.productid",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-PRODTYPE-Taxonomy-[webdata]": {
                jsVariable: "window.AARP.MetaInfo.webdata.registrationtype",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-PUBDATE-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.publishDate",
                storeLength: "pageview"
            },
            "DataLayer-ANA-PUBLISHER-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.publisher",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-PYMTTYPE-Taxonomy-[webdata]": {
                jsVariable: "window.AARP.MetaInfo.webdata.paymentType",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-REGISSTATUS-Taxonomy-[webdata]": {
                jsVariable: "window.AARP.MetaInfo.webdata.registrationStatus",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-REGISTYPE-Taxonomy-[webdata]": {
                jsVariable: "window.AARP.MetaInfo.webdata.registrationType",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-SMARTCODE-Taxonomy-[webdata]": {
                jsVariable: "window.AARP.MetaInfo.webdata.smartcode",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-SOURCE-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.source",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-SRCHRSLT-Taxonomy-[search]": {
                jsVariable: "window.AARP.MetaInfo.search.searchresults",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-SRCHTRM-Taxonomy-[search]": {
                jsVariable: "window.search.searchterm",
                storeLength: "pageview"
            },
            "DataLayer-ANA-STATUS-Taxonomy-[userdata]": {
                customJS: function() {
                    function a(e) {
                        var a = t.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)");
                        return a ? a.pop() : ""
                    }
                    e._aarpLoginStatus = null;
                    var r = a("at"),
                        n = a("ufo");
                    return "undefined" != typeof AARP && AARP && "undefined" != typeof AARP.analytics && AARP.analytics && AARP.analytics.custom && AARP.analytics.custom.cookie && AARP.analytics.custom.cookie.get && "function" == typeof AARP.analytics.custom.cookie.get ? (e._aarpLoginStatus = AARP.analytics.custom.cookie.get("at") ? "full-login" : AARP.analytics.custom.cookie.get("ufo") ? "known" : null, e._aarpLoginStatusDone = !0) : "undefined" != typeof _satellite && _satellite && _satellite.readCookie && "function" == typeof _satellite.readCookie ? (e._aarpLoginStatus = _satellite.readCookie("at") ? "full-login" : _satellite.readCookie("ufo") ? "known" : null, e._aarpLoginStatusDone = !0) : r && r.length > 0 ? (e._aarpLoginStatus = "full-login", e._aarpLoginStatusDone = !0) : n && n.length > 0 ? (e._aarpLoginStatus = "known", e._aarpLoginStatusDone = !0) : (e._aarpLoginStatus = null, e._aarpLoginStatusDone = !0), e._aarpLoginStatus
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-SUBMITSTATUS-Taxonomy-[webdata]": {
                jsVariable: "window.confirmationTout",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-TESTID-Taxonomy-[webdata]": {
                jsVariable: "window.AARP.MetaInfo.webdata.testid",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-TODAYSDTE-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.todayDate",
                storeLength: "pageview"
            },
            "DataLayer-ANA-TRANSID-Taxonomy-[webdata]": {
                jsVariable: "window.AARP.MetaInfo.webdata.transactionid",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-VAR-1-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.var1",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-VAR-2-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.var2",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-VAR-3-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.var3",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-VAR-4-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.var4",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-VAR-5-Taxonomy-[pagedata]": {
                jsVariable: "window.AARP.MetaInfo.pagedata.var5",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-VIDEOID-Taxonomy-[contentdata]": {
                jsVariable: "window.AARP.MetaInfo.contentdata.videoid",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "DataLayer-ANA-ZIPCODE-Taxonomy-[userdata]": {
                customJS: function() {
                    return e.AARP.analytics && e.AARP.analytics.custom ? e.AARP.analytics.custom.cookie.atProps.p || e.AARP.analytics.custom.cookie.ufoProps.z : ""
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            encparam_uid: {
                queryParam: "encparam",
                storeLength: "pageview",
                ignoreCase: 1
            },
            Entertainment_MBE_Floodlight_Tagging_list: {
                customJS: function() {
                    return ["MEM-BEN-BTN-CLK-entertainment-cirque-du-soleil-10203", "MEM-BEN-BTN-CLK-entertainment-regal-entertainment-group-10032", "MEM-BEN-BTN-CLK-entertainment-ticketmaster-live-nation-11230", "MEM-BEN-BTN-CLK-entertainment-regal-entertainment-group-10033", "MEM-BEN-BTN-CLK-entertainment-cirque-du-soleil-10203-search", "MEM-BEN-BTN-CLK-entertainment-regal-entertainment-group-10032-search", "MEM-BEN-BTN-CLK-entertainment-ticketmaster-live-nation-11230-search", "MEM-BEN-BTN-CLK-entertainment-regal-entertainment-group-10033-search"]
                },
                storeLength: "pageview"
            },
            Finan_MBE_Floodlight_Tagging_list: {
                customJS: function() {
                    return ["MEM-BEN-BTN-CLK-finances-american-bank-checks", "MEM-BEN-BTN-CLK-finances-chase", "MEM-BEN-BTN-CLK-autoservice-foremost-motorcycle", "MEM-BEN-BTN-CLK-insurance-foremost-mobile-home", "MEM-BEN-BTN-CLK-insurance-foremost-motorcycle", "MEM-BEN-BTN-CLK-finances-nyl-lifetime-income", "MEM-BEN-BTN-CLK-insurance-nyl-life-insurance", "MEM-BEN-BTN-CLK-autoservice-plymouth-rock", "MEM-BEN-BTN-CLK-insurance-plymouth-rock", "MEM-BEN-BTN-CLK-insurance-real-legacy", "MEM-BEN-BTN-CLK-finances-td-ameritrade", "MEM-BEN-BTN-CLK-autoservice-hartford-auto", "MEM-BEN-BTN-CLK-autoservice-hartford-collectible-car", "MEM-BEN-BTN-CLK-autoservice-hartford-recreational-vehicle", "MEM-BEN-BTN-CLK-insurance-hartford-atv", "MEM-BEN-BTN-CLK-insurance-hartford-auto", "MEM-BEN-BTN-CLK-insurance-hartford-boat", "MEM-BEN-BTN-CLK-insurance-hartford-collectible-car", "MEM-BEN-BTN-CLK-insurance-hartford-home", "MEM-BEN-BTN-CLK-insurance-hartford-recreational-vehicle", "MEM-BEN-BTN-CLK-insurance-hartford-small-business", "MEM-BEN-BTN-CLK-finances-tiaa", "MEM-BEN-BTN-CLK-finances-trustedid", "MEM-BEN-BTN-CLK-finances-american-bank-checks-search", "MEM-BEN-BTN-CLK-autoservice-foremost-motorcycle-search", "MEM-BEN-BTN-CLK-insurance-foremost-mobile-home-search", "MEM-BEN-BTN-CLK-insurance-foremost-motorcycle-search", "MEM-BEN-BTN-CLK-finances-nyl-lifetime-income-search", "MEM-BEN-BTN-CLK-insurance-nyl-life-insurance-search", "MEM-BEN-BTN-CLK-autoservice-plymouth-rock-search", "MEM-BEN-BTN-CLK-insurance-plymouth-rock-search", "MEM-BEN-BTN-CLK-insurance-real-legacy-search", "MEM-BEN-BTN-CLK-finances-td-ameritrade-search", "MEM-BEN-BTN-CLK-autoservice-hartford-auto-search", "MEM-BEN-BTN-CLK-autoservice-hartford-collectible-car-search", "MEM-BEN-BTN-CLK-autoservice-hartford-recreational-vehicle-search", "MEM-BEN-BTN-CLK-insurance-hartford-atv-search", "MEM-BEN-BTN-CLK-insurance-hartford-auto-search", "MEM-BEN-BTN-CLK-insurance-hartford-boat-search", "MEM-BEN-BTN-CLK-insurance-hartford-collectible-car-search", "MEM-BEN-BTN-CLK-insurance-hartford-home-search", "MEM-BEN-BTN-CLK-insurance-hartford-recreational-vehicle-search", "MEM-BEN-BTN-CLK-insurance-hartford-small-business-search", "MEM-BEN-BTN-CLK-finances-tiaa-search", "MEM-BEN-BTN-CLK-finances-trustedid-search", "MEM-BEN-BTN-CLK-finances-chase-search", "MEM-BEN-BTN-CLK-workandjobs-hartford-small-business-search"]
                },
                storeLength: "pageview"
            },
            Form_CTA_text: {
                customJS: function() {
                    if (e.form_cta_text) return e.form_cta_text
                },
                storeLength: "pageview"
            },
            Healthcare_MBE_Floodlight_Tagging_list: {
                customJS: function() {
                    return ["MEM-BEN-BTN-CLK-healthandwellness-aarp-prescription-discounts-provided-by-optumrx-10187", "MEM-BEN-BTN-CLK-healthandwellness-delta-dental", "MEM-BEN-BTN-CLK-insurance-delta-dental", "MEM-BEN-BTN-CLK-healthandwellness-eyemed-vision-discounts", "MEM-BEN-BTN-CLK-healthandwellness-eyemed-vision-insurance", "MEM-BEN-BTN-CLK-insurance-eyemed-vision-insurance", "MEM-BEN-BTN-CLK-healthandwellness-glassescom-10095", "MEM-BEN-BTN-CLK-healthandwellness-hearing-shop-10107", "MEM-BEN-BTN-CLK-healthandwellness-hearusa", "MEM-BEN-BTN-CLK-healthandwellness-kroger-pharmacy", "MEM-BEN-BTN-CLK-healthandwellness-lenscrafters-10098", "MEM-BEN-BTN-CLK-healthandwellness-pearle-vision-10105", "MEM-BEN-BTN-CLK-healthandwellness-sears-optical-10080", "MEM-BEN-BTN-CLK-healthandwellness-target-optical-10055", "MEM-BEN-BTN-CLK-healthandwellness-uhc-medicare-complete", "MEM-BEN-BTN-CLK-insurance-uhc-medicare-complete", "MEM-BEN-BTN-CLK-healthandwellness-uhc-medicarerx", "MEM-BEN-BTN-CLK-insurance-uhc-medicarerx", "MEM-BEN-BTN-CLK-healthandwellness-uhc-medicare-supplement", "MEM-BEN-BTN-CLK-insurance-uhc-medicare-supplement", "MEM-BEN-BTN-CLK-healthandwellness-aarp-prescription-discounts-provided-by-optumrx-10187-search", "MEM-BEN-BTN-CLK-healthandwellness-delta-dental-search", "MEM-BEN-BTN-CLK-insurance-delta-dental-search", "MEM-BEN-BTN-CLK-healthandwellness-eyemed-vision-discounts-search", "MEM-BEN-BTN-CLK-insurance-eyemed-vision-insurance-search", "MEM-BEN-BTN-CLK-healthandwellness-glassescom-10095-search", "MEM-BEN-BTN-CLK-healthandwellness-hearing-shop-10107-search", "MEM-BEN-BTN-CLK-healthandwellness-hearusa-search", "MEM-BEN-BTN-CLK-healthandwellness-kroger-pharmacy-search", "MEM-BEN-BTN-CLK-healthandwellness-lenscrafters-10098-search", "MEM-BEN-BTN-CLK-healthandwellness-pearle-vision-10105-search", "MEM-BEN-BTN-CLK-healthandwellness-sears-optical-10080-search", "MEM-BEN-BTN-CLK-healthandwellness-target-optical-10055-search", "MEM-BEN-BTN-CLK-healthandwellness-uhc-medicare-complete-search", "MEM-BEN-BTN-CLK-insurance-uhc-medicare-complete-search", "MEM-BEN-BTN-CLK-healthandwellness-uhc-medicarerx-search", "MEM-BEN-BTN-CLK-insurance-uhc-medicarerx-search", "MEM-BEN-BTN-CLK-healthandwellness-uhc-medicare-supplement-search", "MEM-BEN-BTN-CLK-insurance-uhc-medicare-supplement-search", "MEM-BEN-BTN-CLK-healthandwellness-eyemed-vision-insurance-search"]
                },
                storeLength: "pageview"
            },
            "MBE Floodlight Exit Tracking List - Entertainment & Restaurants": {
                customJS: function() {
                    return ["MEM-BEN-BTN-LRN-learn-more-bonefish-grill-10137", "MEM-BEN-BTN-LRN-learn-more-bubba-gump-shrimp-co-10086", "MEM-BEN-BTN-LRN-learn-more-carrabbas-italian-grill-10202", "MEM-BEN-BTN-LRN-learn-more-chart-house-10185", "MEM-BEN-BTN-LRN-learn-more-cirque-du-soleil-10203", "MEM-BEN-BTN-LRN-learn-more-claim-jumper-restaurant-and-saloon-10204", "MEM-BEN-BTN-LRN-learn-more-dennys-10003", "MEM-BEN-BTN-LRN-learn-more-landrys-seafood-10096", "MEM-BEN-BTN-LRN-learn-more-mccormick-and-schmicks-10123", "MEM-BEN-BTN-LRN-learn-more-outback-steakhouse-10087", "MEM-BEN-BTN-LRN-learn-more-rainforest-cafe-10075", "MEM-BEN-BTN-LRN-learn-more-regal-entertainment-group-10032", "MEM-BEN-BTN-LRN-join-to-learn-more-regal-entertainment-group-10033", "MEM-BEN-BTN-LRN-learn-more-saltgrass-steak-house-10188", "MEM-BEN-BTN-LRN-learn-more-sweetfrog-premium-frozen-yogurt-10175", "MEM-BEN-BTN-LRN-learn-more-the-oceanaire-seafood-room-10108", "MEM-BEN-BTN-LRN-learn-more-ticketmaster-live-nation-11230", "MEM-BEN-BTN-LRN-learn-more-regal-entertainment-group-10033", "MEM-BEN-BTN-LRN-bonefish-grill-10137", "MEM-BEN-BTN-LRN-carrabbas-italian-grill-10202", "MEM-BEN-BTN-LRN-cirque-du-soleil-10203", "MEM-BEN-BTN-LRN-dennys-10003", "MEM-BEN-BTN-LRN-mccormick-and-schmicks-10123", "MEM-BEN-BTN-LRN-outback-steakhouse-10087", "MEM-BEN-BTN-LRN-regal-entertainment-group-10033", "MEM-BEN-BTN-LRN-regal-entertainment-group-10032", "MEM-BEN-BTN-LRN-ticketmaster-live-nation-11230"]
                },
                storeLength: "pageview"
            },
            "MBE Floodlight Exit Tracking List - Finance": {
                customJS: function() {
                    return ["MEM-BEN-BTN-LRN-learn-more-american-bank-checks", "MEM-BEN-BTN-LRN-learn-more-chase", "MEM-BEN-BTN-LRN-learn-more-foremost-mobile-home", "MEM-BEN-BTN-LRN-learn-more-foremost-motorcycle", "MEM-BEN-BTN-LRN-learn-more-nyl-life-insurance", "MEM-BEN-BTN-LRN-learn-more-nyl-lifetime-income", "MEM-BEN-BTN-LRN-learn-more-plymouth-rock", "MEM-BEN-BTN-LRN-learn-more-real-legacy", "MEM-BEN-BTN-LRN-learn-more-td-ameritrade", "MEM-BEN-BTN-LRN-learn-more-hartford-atv", "MEM-BEN-BTN-LRN-learn-more-hartford-auto", "MEM-BEN-BTN-LRN-learn-more-hartford-boat", "MEM-BEN-BTN-LRN-learn-more-hartford-collectible-car", "MEM-BEN-BTN-LRN-learn-more-hartford-home", "MEM-BEN-BTN-LRN-learn-more-hartford-recreational-vehicle", "MEM-BEN-BTN-LRN-learn-more-hartford-small-business", "MEM-BEN-BTN-LRN-learn-more-tiaa", "MEM-BEN-BTN-LRN-learn-more-trustedid", "MEM-BEN-BTN-LRN-american-bank-checks", "MEM-BEN-BTN-LRN-chase", "MEM-BEN-BTN-LRN-foremost-motorcycle", "MEM-BEN-BTN-LRN-foremost-mobile-home", "MEM-BEN-BTN-LRN-nyl-life-insurance", "MEM-BEN-BTN-LRN-nyl-lifetime-income", "MEM-BEN-BTN-LRN-hartford-auto", "MEM-BEN-BTN-LRN-hartford-home", "MEM-BEN-BTN-LRN-hartford-recreational-vehicle", "MEM-BEN-BTN-LRN-hartford-small-business", "MEM-BEN-BTN-LRN-hartford-boat"]
                },
                storeLength: "pageview"
            },
            "MBE Floodlight Exit Tracking List - Healthcare": {
                customJS: function() {
                    return ["MEM-BEN-BTN-LRN-learn-more-aarp-prescription-discounts-provided-by-optumrx-10187", "MEM-BEN-BTN-LRN-learn-more-delta-dental", "MEM-BEN-BTN-LRN-learn-more-eyemed-vision-discounts", "MEM-BEN-BTN-LRN-learn-more-eyemed-vision-insurance", "MEM-BEN-BTN-LRN-learn-more-glassescom-10095", "MEM-BEN-BTN-LRN-learn-more-hearing-shop-10107", "MEM-BEN-BTN-LRN-learn-more-hearusa", "MEM-BEN-BTN-LRN-learn-more-lenscrafters-10098", "MEM-BEN-BTN-LRN-learn-more-pearle-vision-10105", "MEM-BEN-BTN-LRN-learn-more-target-optical-10055", "MEM-BEN-BTN-LRN-learn-more-uhc-medicare-complete", "MEM-BEN-BTN-LRN-learn-more-uhc-medicarerx", "MEM-BEN-BTN-LRN-continue-uhc-medicare-supplement", "MEM-BEN-BTN-LRN-learn-more-cvs-pharmacy", "MEM-BEN-BTN-LRN-learn-more-kroger-pharmacy", "MEM-BEN-BTN-LRN-learn-more-nyl-long-term-care", "MEM-BEN-BTN-LRN-learn-more-rite-aid-pharmacy", "MEM-BEN-BTN-LRN-learn-more-walgreens-10181", "MEM-BEN-BTN-LRN-learn-more-walmart-pharmacy", "MEM-BEN-BTN-LRN-learn-more-sears-optical-10080", "MEM-BEN-BTN-LRN-aarp-prescription-discounts-provided-by-optumrx-10187", "MEM-BEN-BTN-LRN-cvs-pharmacy", "MEM-BEN-BTN-LRN-delta-dental", "MEM-BEN-BTN-LRN-eyemed-vision-discounts", "MEM-BEN-BTN-LRN-eyemed-vision-insurance", "MEM-BEN-BTN-LRN-glassescom-10095", "MEM-BEN-BTN-LRN-hearing-shop-10107", "MEM-BEN-BTN-LRN-hearusa", "MEM-BEN-BTN-LRN-lenscrafters-10098", "MEM-BEN-BTN-LRN-pearle-vision-10105", "MEM-BEN-BTN-LRN-target-optical-10055", "MEM-BEN-BTN-LRN-uhc-medicare-complete", "MEM-BEN-BTN-LRN-uhc-medicarerx", "MEM-BEN-BTN-LRN-uhc-medicare-supplement", "MEM-BEN-BTN-LRN-walmart-pharmacy"]
                },
                storeLength: "pageview"
            },
            "MBE Floodlight Exit Tracking List - Shopping": {
                customJS: function() {
                    return ["MEM-BEN-BTN-LRN-learn-more-1800basketscom-10178", "MEM-BEN-BTN-LRN-learn-more-1800flowerscom-10001", "MEM-BEN-BTN-LRN-learn-more-aarp-roadside-assistance-from-allstate-10616", "MEM-BEN-BTN-LRN-learn-more-ancestry-10074", "MEM-BEN-BTN-LRN-join-to-learn-more-atandt-10042", "MEM-BEN-BTN-LRN-learn-more-bistromd-10065", "MEM-BEN-BTN-LRN-learn-more-cheryls-10140", "MEM-BEN-BTN-LRN-learn-more-consumer-cellular-10002", "MEM-BEN-BTN-LRN-learn-more-cricket-wireless-10205", "MEM-BEN-BTN-LRN-learn-more-fruit-bouquets-by-1800flowerscom-10134", "MEM-BEN-BTN-LRN-learn-more-grocery-coupon-center-powered-by-couponscom-10173", "MEM-BEN-BTN-LRN-learn-more-harry-and-david-10748", "MEM-BEN-BTN-LRN-learn-more-personalization-universe-10109", "MEM-BEN-BTN-LRN-learn-more-petplan-pet-insurance-10156", "MEM-BEN-BTN-LRN-learn-more-schwans-home-service-10079", "MEM-BEN-BTN-LRN-learn-more-sears-optical-10080", "MEM-BEN-BTN-LRN-learn-more-stock-yards-11006", "MEM-BEN-BTN-LRN-learn-more-tanger-outlets-10034", "MEM-BEN-BTN-LRN-learn-more-gift-card-11250", "MEM-BEN-BTN-LRN-learn-more-the-popcorn-factory-10183", "MEM-BEN-BTN-LRN-learn-more-the-ups-store-10036", "MEM-BEN-BTN-LRN-learn-more-walgreens-10181", "MEM-BEN-BTN-LRN-learn-more-wolfermans-11125", "MEM-BEN-BTN-LRN-learn-more-best-buy-assured-living", "MEM-BEN-BTN-LRN-learn-more-simplychocolate", "MEM-BEN-BTN-LRN-1800flowerscom-10001", "MEM-BEN-BTN-LRN-aarp-roadside-assistance-from-allstate-10616", "MEM-BEN-BTN-LRN-ancestry-10074", "MEM-BEN-BTN-LRN-atandt-10042", "MEM-BEN-BTN-LRN-best-buy-assured-living", "MEM-BEN-BTN-LRN-bistromd-10065", "MEM-BEN-BTN-LRN-carelinx-caregiving-services", "MEM-BEN-BTN-LRN-consumer-cellular-10002", "MEM-BEN-BTN-LRN-grocery-coupon-center-powered-by-couponscom-10173", "MEM-BEN-BTN-LRN-petplan-pet-insurance-10156", "MEM-BEN-BTN-LRN-schwans-home-service-10079", "MEM-BEN-BTN-LRN-stock-yards-11006", "MEM-BEN-BTN-LRN-tanger-outlets-10034", "MEM-BEN-BTN-LRN-gift-card-11250", "MEM-BEN-BTN-LRN-the-ups-store-10036", "MEM-BEN-BTN-LRN-walgreens-10181"]
                },
                storeLength: "pageview"
            },
            "MBE Floodlight Exit Tracking List - Travel": {
                customJS: function() {
                    return ["MEM-BEN-BTN-LRN-learn-more-aarp-travel-center-powered-by-expedia-10083", "MEM-BEN-BTN-LRN-learn-more-ascend-collection-10041", "MEM-BEN-BTN-LRN-learn-more-avis-rent-a-car-10043", "MEM-BEN-BTN-LRN-learn-more-baymont-inn-and-suites-10136", "MEM-BEN-BTN-LRN-learn-more-best-western-10045", "MEM-BEN-BTN-LRN-join-to-learn-more-british-airways-10047", "MEM-BEN-BTN-LRN-learn-more-budget-rentacar-10133", "MEM-BEN-BTN-LRN-learn-more-budget-truck-rental-10049", "MEM-BEN-BTN-LRN-learn-more-cambria-suites-10050", "MEM-BEN-BTN-LRN-learn-more-clarion-hotels-10051", "MEM-BEN-BTN-LRN-learn-more-collette-10053", "MEM-BEN-BTN-LRN-learn-more-collette-explorations-10081", "MEM-BEN-BTN-LRN-learn-more-collette-spotlights-10465", "MEM-BEN-BTN-LRN-learn-more-comfort-inn-10082", "MEM-BEN-BTN-LRN-learn-more-comfort-suites-10084", "MEM-BEN-BTN-LRN-learn-more-conrad-hotels-and-resorts-10167", "MEM-BEN-BTN-LRN-learn-more-curio-a-collection-by-hilton-10195", "MEM-BEN-BTN-LRN-learn-more-days-inn-10169", "MEM-BEN-BTN-LRN-learn-more-doubletree-by-hilton-10170", "MEM-BEN-BTN-LRN-learn-more-econo-lodge-10085", "MEM-BEN-BTN-LRN-learn-more-embassy-suites-by-hilton-10191", "MEM-BEN-BTN-LRN-learn-more-grand-canyon-railway-10171", "MEM-BEN-BTN-LRN-learn-more-grand-european-travel-10234", "MEM-BEN-BTN-LRN-learn-more-hampton-by-hilton-10099", "MEM-BEN-BTN-LRN-learn-more-hawthorn-suites-by-wyndham-10174", "MEM-BEN-BTN-LRN-learn-more-hilton-garden-inn-10100", "MEM-BEN-BTN-LRN-learn-more-hilton-grand-vacations-10104", "MEM-BEN-BTN-LRN-learn-more-hilton-hotels-and-resorts-10124", "MEM-BEN-BTN-LRN-learn-more-home2-suites-by-hilton-10209", "MEM-BEN-BTN-LRN-learn-more-homewood-suites-by-hilton-10130", "MEM-BEN-BTN-LRN-learn-more-howard-johnson-10142", "MEM-BEN-BTN-LRN-learn-more-knights-inn-10147", "MEM-BEN-BTN-LRN-learn-more-la-quinta-inns-and-suites-10090", "MEM-BEN-BTN-LRN-learn-more-liberty-travel-10229", "MEM-BEN-BTN-LRN-learn-more-mainstay-suites-10101", "MEM-BEN-BTN-LRN-learn-more-medjetassist-10063", "MEM-BEN-BTN-LRN-learn-more-microtel-inns-and-suites-10121", "MEM-BEN-BTN-LRN-learn-more-ohio-state-parks-10438", "MEM-BEN-BTN-LRN-learn-more-park-ride-fly-usa-10102", "MEM-BEN-BTN-LRN-learn-more-payless-10103", "MEM-BEN-BTN-LRN-learn-more-quality-10094", "MEM-BEN-BTN-LRN-learn-more-ramada-worldwide-10158", "MEM-BEN-BTN-LRN-learn-more-rodeway-inn-10078", "MEM-BEN-BTN-LRN-learn-more-sleep-inn-10054", "MEM-BEN-BTN-LRN-learn-more-suburban-extended-stay-10161", "MEM-BEN-BTN-LRN-learn-more-super-8-10162", "MEM-BEN-BTN-LRN-learn-more-the-oasis-at-death-valley-10433", "MEM-BEN-BTN-LRN-learn-more-travelodge-10165", "MEM-BEN-BTN-LRN-learn-more-tripbeat-endless-vacation-10979", "MEM-BEN-BTN-LRN-learn-more-tryp-by-wyndham-10166", "MEM-BEN-BTN-LRN-learn-more-vacations-by-rail-10182", "MEM-BEN-BTN-LRN-learn-more-waldorf-astoria-hotels-and-resorts-10168", "MEM-BEN-BTN-LRN-learn-more-wingate-by-wyndham-10186", "MEM-BEN-BTN-LRN-learn-more-wyndham-extra-holidays-10228", "MEM-BEN-BTN-LRN-learn-more-wyndham-hotel-group-10396", "MEM-BEN-BTN-LRN-learn-more-wyndham-hotels-and-resorts-10116", "MEM-BEN-BTN-LRN-learn-more-xanterra-parks-and-resorts-10064", "MEM-BEN-BTN-LRN-learn-more-zipcar-10117", "MEM-BEN-BTN-LRN-learn-more-british-airways-10047", "MEM-BEN-BTN-LRN-aarp-travel-center-powered-by-expedia-10083", "MEM-BEN-BTN-LRN-avis-rent-a-car-10043", "MEM-BEN-BTN-LRN-best-western-10045", "MEM-BEN-BTN-LRN-british-airways-10047", "MEM-BEN-BTN-LRN-budget-rentacar-10133", "MEM-BEN-BTN-LRN-budget-truck-rental-10049", "MEM-BEN-BTN-LRN-cambria-suites-10050", "MEM-BEN-BTN-LRN-collette-10053", "MEM-BEN-BTN-LRN-comfort-inn-10082", "MEM-BEN-BTN-LRN-comfort-suites-10084", "MEM-BEN-BTN-LRN-days-inn-10169", "MEM-BEN-BTN-LRN-grand-canyon-railway-10171", "MEM-BEN-BTN-LRN-grand-european-travel-10234", "MEM-BEN-BTN-LRN-hampton-by-hilton-10099", "MEM-BEN-BTN-LRN-la-quinta-inns-and-suites-10090", "MEM-BEN-BTN-LRN-liberty-travel-10229", "MEM-BEN-BTN-LRN-medjetassist-10063", "MEM-BEN-BTN-LRN-park-ride-fly-usa-10102", "MEM-BEN-BTN-LRN-payless-10103", "MEM-BEN-BTN-LRN-quality-10094", "MEM-BEN-BTN-LRN-ramada-worldwide-10158", "MEM-BEN-BTN-LRN-vacations-by-rail-10182", "MEM-BEN-BTN-LRN-wyndham-hotel-group-10396", "MEM-BEN-BTN-LRN-wyndham-hotels-and-resorts-10116", "MEM-BEN-BTN-LRN-zipcar-10117"]
                },
                storeLength: "pageview"
            },
            modalName: {
                cookie: "modalName",
                storeLength: "pageview"
            },
            "Newsletter Id's": {
                customJS: function() {
                    var e = Array.from(t.querySelectorAll("input[name=newsLetters]:checked, input.input-newsLetter:checked")).map(function(e) {
                        return e.value
                    }).join(":");
                    return "REG-NEWLT-SUBSCRIBE" + (e ? "-" + e : "")
                },
                storeLength: "pageview"
            },
            pageinfo_test: {
                jsVariable: "webData.newAppSec.pageInfo",
                storeLength: "pageview"
            },
            pageName2: {
                customJS: function() {
                    var e = "";
                    try {
                        e = AARP.Everywhere.Page.getSubdomain() + ":" + AARP.Everywhere.Page.getPath() + (AARP.Everywhere.Page.getFile() ? "/" + AARP.Everywhere.Page.getFile() : "")
                    } catch (t) {}
                    return e
                },
                storeLength: "pageview"
            },
            "Page Type": {
                jsVariable: "AARP.Everywhere.pgtype",
                storeLength: "pageview"
            },
            "Parameter: Promo": {
                queryParam: "promo",
                storeLength: "pageview",
                ignoreCase: 1
            },
            Restaurants_MBE_Floodlight_Tagging_list: {
                customJS: function() {
                    return ["MEM-BEN-BTN-CLK-restaurants-bonefish-grill-10137", "MEM-BEN-BTN-CLK-restaurants-bubba-gump-shrimp-co-10086", "MEM-BEN-BTN-CLK-restaurants-carrabbas-italian-grill-10202", "MEM-BEN-BTN-CLK-restaurants-chart-house-10185", "MEM-BEN-BTN-CLK-restaurants-claim-jumper-restaurant-and-saloon-10204", "MEM-BEN-BTN-CLK-restaurants-dennys-10003", "MEM-BEN-BTN-CLK-restaurants-landrys-seafood-10096", "MEM-BEN-BTN-CLK-restaurants-mccormick-and-schmicks-10123", "MEM-BEN-BTN-CLK-restaurants-the-oceanaire-seafood-room-10108", "MEM-BEN-BTN-CLK-restaurants-outback-steakhouse-10087", "MEM-BEN-BTN-CLK-restaurants-rainforest-cafe-10075", "MEM-BEN-BTN-CLK-restaurants-saltgrass-steak-house-10188", "MEM-BEN-BTN-CLK-restaurants-sweetfrog-premium-frozen-yogurt-10175", "MEM-BEN-BTN-CLK-restaurants-bonefish-grill-10137-search", "MEM-BEN-BTN-CLK-restaurants-bubba-gump-shrimp-co-10086-search", "MEM-BEN-BTN-CLK-restaurants-carrabbas-italian-grill-10202-search", "MEM-BEN-BTN-CLK-restaurants-chart-house-10185-search", "MEM-BEN-BTN-CLK-restaurants-claim-jumper-restaurant-and-saloon-10204-search", "MEM-BEN-BTN-CLK-restaurants-dennys-10003-search", "MEM-BEN-BTN-CLK-restaurants-landrys-seafood-10096-search", "MEM-BEN-BTN-CLK-restaurants-mccormick-and-schmicks-10123-search", "MEM-BEN-BTN-CLK-restaurants-the-oceanaire-seafood-room-10108-search", "MEM-BEN-BTN-CLK-restaurants-outback-steakhouse-10087-search", "MEM-BEN-BTN-CLK-restaurants-rainforest-cafe-10075-search", "MEM-BEN-BTN-CLK-restaurants-saltgrass-steak-house-10188-search", "MEM-BEN-BTN-CLK-restaurants-sweetfrog-premium-frozen-yogurt-10175-search"]
                },
                storeLength: "pageview"
            },
            Shopp_MBE_Floodlight_Tagging_list: {
                customJS: function() {
                    return ["MEM-BEN-BTN-CLK-shoppingandgroceries-1800basketscom-10178", "MEM-BEN-BTN-CLK-shoppingandgroceries-1800flowerscom-10001", "MEM-BEN-BTN-CLK-caregiving-bistromd-10065", "MEM-BEN-BTN-CLK-shoppingandgroceries-bistromd-10065", "MEM-BEN-BTN-CLK-shoppingandgroceries-cheryls-10140", "MEM-BEN-BTN-CLK-shoppingandgroceries-consumer-cellular-10002", "MEM-BEN-BTN-CLK-shoppingandgroceries-cricket-wireless-10205", "MEM-BEN-BTN-CLK-shoppingandgroceries-fruit-bouquets-by-1800flowerscom-10134", "MEM-BEN-BTN-CLK-shoppingandgroceries-grocery-coupon-center-powered-by-couponscom-10173", "MEM-BEN-BTN-CLK-shoppingandgroceries-harry-and-david-10748", "MEM-BEN-BTN-CLK-shoppingandgroceries-personalization-universe-10109", "MEM-BEN-BTN-CLK-homeandfamily-petplan-pet-insurance-10156", "MEM-BEN-BTN-CLK-shoppingandgroceries-schwans-home-service-10079", "MEM-BEN-BTN-CLK-shoppingandgroceries-stock-yards-11006", "MEM-BEN-BTN-CLK-autoservice-aarp-roadside-assistance-from-allstate-10616", "MEM-BEN-BTN-CLK-homeandfamily-ancestry-10074", "MEM-BEN-BTN-CLK-shoppingandgroceries-atandt-10042", "MEM-BEN-BTN-CLK-shoppingandgroceries-tanger-outlets-10034", "MEM-BEN-BTN-CLK-shoppingandgroceries-gift-card-11250", "MEM-BEN-BTN-CLK-shoppingandgroceries-the-popcorn-factory-10183", "MEM-BEN-BTN-CLK-homeandfamily-the-ups-store-10036", "MEM-BEN-BTN-CLK-healthandwellness-walgreens-10181", "MEM-BEN-BTN-CLK-shoppingandgroceries-wolfermans-11125", "MEM-BEN-BTN-CLK-shoppingandgroceries-1800basketscom-10178-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-1800flowerscom-10001-search", "MEM-BEN-BTN-CLK-caregiving-bistromd-10065-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-bistromd-10065-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-cheryls-10140-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-consumer-cellular-10002-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-cricket-wireless-10205-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-fruit-bouquets-by-1800flowerscom-10134-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-grocery-coupon-center-powered-by-couponscom-10173-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-harry-and-david-10748-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-personalization-universe-10109-search", "MEM-BEN-BTN-CLK-homeandfamily-petplan-pet-insurance-10156-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-schwans-home-service-10079-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-stock-yards-11006-search", "MEM-BEN-BTN-CLK-autoservice-aarp-roadside-assistance-from-allstate-10616-search", "MEM-BEN-BTN-CLK-homeandfamily-ancestry-10074-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-atandt-10042-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-tanger-outlets-10034-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-gift-card-11250-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-the-popcorn-factory-10183-search", "MEM-BEN-BTN-CLK-homeandfamily-the-ups-store-10036-search", "MEM-BEN-BTN-CLK-healthandwellness-walgreens-10181-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-wolfermans-11125-search", "MEM-BEN-BTN-CLK-homeandfamily-atandt-10042", "MEM-BEN-BTN-CLK-homeandfamily-atandt-10042-search", "MEM-BEN-BTN-CLK-shoppingandgroceries-simplychocolate", "MEM-BEN-BTN-CLK-shoppingandgroceries-simplychocolate-search"]
                },
                storeLength: "pageview"
            },
            "Site Section (webData)": {
                jsVariable: "webData.siteSection",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            Travel_MBE_Floodlight_Tagging_list: {
                customJS: function() {
                    return ["MEM-BEN-BTN-CLK-travel-aarp-travel-center-powered-by-expedia-10083", "MEM-BEN-BTN-CLK-travel-ascend-collection-10041", "MEM-BEN-BTN-CLK-travel-avis-rent-a-car-10043", "MEM-BEN-BTN-CLK-travel-baymont-inn-and-suites-10136", "MEM-BEN-BTN-CLK-travel-best-western-10045", "MEM-BEN-BTN-CLK-travel-british-airways-10047", "MEM-BEN-BTN-CLK-travel-budget-rentacar-10133", "MEM-BEN-BTN-CLK-travel-budget-truck-rental-10049", "MEM-BEN-BTN-CLK-travel-cambria-suites-10050", "MEM-BEN-BTN-CLK-travel-clarion-hotels-10051", "MEM-BEN-BTN-CLK-travel-collette-10053", "MEM-BEN-BTN-CLK-travel-collette-explorations-10081", "MEM-BEN-BTN-CLK-travel-collette-spotlights-10465", "MEM-BEN-BTN-CLK-travel-comfort-inn-10082", "MEM-BEN-BTN-CLK-travel-comfort-suites-10084", "MEM-BEN-BTN-CLK-travel-conrad-hotels-and-resorts-10167", "MEM-BEN-BTN-CLK-travel-curio-a-collection-by-hilton-10195", "MEM-BEN-BTN-CLK-travel-days-inn-10169", "MEM-BEN-BTN-CLK-travel-doubletree-by-hilton-10170", "MEM-BEN-BTN-CLK-travel-econo-lodge-10085", "MEM-BEN-BTN-CLK-travel-embassy-suites-by-hilton-10191", "MEM-BEN-BTN-CLK-travel-grand-canyon-railway-10171", "MEM-BEN-BTN-CLK-travel-grand-european-travel-10234", "MEM-BEN-BTN-CLK-travel-hampton-by-hilton-10099", "MEM-BEN-BTN-CLK-travel-hawthorn-suites-by-wyndham-10174", "MEM-BEN-BTN-CLK-travel-hilton-garden-inn-10100", "MEM-BEN-BTN-CLK-travel-hilton-grand-vacations-10104", "MEM-BEN-BTN-CLK-travel-hilton-hotels-and-resorts-10124", "MEM-BEN-BTN-CLK-travel-home2-suites-by-hilton-10209", "MEM-BEN-BTN-CLK-travel-homewood-suites-by-hilton-10130", "MEM-BEN-BTN-CLK-travel-howard-johnson-10142", "MEM-BEN-BTN-CLK-travel-la-quinta-inns-and-suites-10090", "MEM-BEN-BTN-CLK-travel-liberty-travel-10229", "MEM-BEN-BTN-CLK-travel-mainstay-suites-10101", "MEM-BEN-BTN-CLK-travel-medjetassist-10063", "MEM-BEN-BTN-CLK-travel-microtel-inns-and-suites-10121", "MEM-BEN-BTN-CLK-travel-park-ride-fly-usa-10102", "MEM-BEN-BTN-CLK-travel-payless-10103", "MEM-BEN-BTN-CLK-travel-quality-10094", "MEM-BEN-BTN-CLK-travel-ramada-worldwide-10158", "MEM-BEN-BTN-CLK-travel-rodeway-inn-10078", "MEM-BEN-BTN-CLK-travel-sleep-inn-10054", "MEM-BEN-BTN-CLK-travel-suburban-extended-stay-10161", "MEM-BEN-BTN-CLK-travel-super-8-10162", "MEM-BEN-BTN-CLK-travel-the-oasis-at-death-valley-10433", "MEM-BEN-BTN-CLK-travel-travelodge-10165", "MEM-BEN-BTN-CLK-travel-tripbeat-endless-vacation-10979", "MEM-BEN-BTN-CLK-travel-tryp-by-wyndham-10166", "MEM-BEN-BTN-CLK-travel-vacations-by-rail-10182", "MEM-BEN-BTN-CLK-travel-waldorf-astoria-hotels-and-resorts-10168", "MEM-BEN-BTN-CLK-travel-wingate-by-wyndham-10186", "MEM-BEN-BTN-CLK-travel-wyndham-extra-holidays-10228", "MEM-BEN-BTN-CLK-travel-wyndham-hotel-group-10396", "MEM-BEN-BTN-CLK-travel-wyndham-hotels-and-resorts-10116", "MEM-BEN-BTN-CLK-travel-xanterra-parks-and-resorts-10064", "MEM-BEN-BTN-CLK-travel-zipcar-10117", "MEM-BEN-BTN-CLK-travel-aarp-travel-center-powered-by-expedia-10083-search", "MEM-BEN-BTN-CLK-travel-ascend-collection-10041-search", "MEM-BEN-BTN-CLK-travel-avis-rent-a-car-10043-search", "MEM-BEN-BTN-CLK-travel-baymont-inn-and-suites-10136-search", "MEM-BEN-BTN-CLK-travel-best-western-10045-search", "MEM-BEN-BTN-CLK-travel-british-airways-10047-search", "MEM-BEN-BTN-CLK-travel-budget-rentacar-10133-search", "MEM-BEN-BTN-CLK-travel-budget-truck-rental-10049-search", "MEM-BEN-BTN-CLK-travel-cambria-suites-10050-search", "MEM-BEN-BTN-CLK-travel-clarion-hotels-10051-search", "MEM-BEN-BTN-CLK-travel-collette-10053-search", "MEM-BEN-BTN-CLK-travel-collette-explorations-10081-search", "MEM-BEN-BTN-CLK-travel-collette-spotlights-10465-search", "MEM-BEN-BTN-CLK-travel-comfort-inn-10082-search", "MEM-BEN-BTN-CLK-travel-comfort-suites-10084-search", "MEM-BEN-BTN-CLK-travel-conrad-hotels-and-resorts-10167-search", "MEM-BEN-BTN-CLK-travel-curio-a-collection-by-hilton-10195-search", "MEM-BEN-BTN-CLK-travel-days-inn-10169-search", "MEM-BEN-BTN-CLK-travel-doubletree-by-hilton-10170-search", "MEM-BEN-BTN-CLK-travel-econo-lodge-10085-search", "MEM-BEN-BTN-CLK-travel-embassy-suites-by-hilton-10191-search", "MEM-BEN-BTN-CLK-travel-grand-canyon-railway-10171-search", "MEM-BEN-BTN-CLK-travel-hampton-by-hilton-10099-search", "MEM-BEN-BTN-CLK-travel-hawthorn-suites-by-wyndham-10174-search", "MEM-BEN-BTN-CLK-travel-hilton-garden-inn-10100-search", "MEM-BEN-BTN-CLK-travel-hilton-grand-vacations-10104-search", "MEM-BEN-BTN-CLK-travel-hilton-hotels-and-resorts-10124-search", "MEM-BEN-BTN-CLK-travel-home2-suites-by-hilton-10209-search", "MEM-BEN-BTN-CLK-travel-homewood-suites-by-hilton-10130-search", "MEM-BEN-BTN-CLK-travel-howard-johnson-10142-search", "MEM-BEN-BTN-CLK-travel-la-quinta-inns-and-suites-10090-search", "MEM-BEN-BTN-CLK-travel-liberty-travel-10229-search", "MEM-BEN-BTN-CLK-travel-mainstay-suites-10101-search", "MEM-BEN-BTN-CLK-travel-medjetassist-10063-search", "MEM-BEN-BTN-CLK-travel-microtel-inns-and-suites-10121-search", "MEM-BEN-BTN-CLK-travel-park-ride-fly-usa-10102-search", "MEM-BEN-BTN-CLK-travel-payless-10103-search", "MEM-BEN-BTN-CLK-travel-quality-10094-search", "MEM-BEN-BTN-CLK-travel-ramada-worldwide-10158-search", "MEM-BEN-BTN-CLK-travel-rodeway-inn-10078-search", "MEM-BEN-BTN-CLK-travel-sleep-inn-10054-search", "MEM-BEN-BTN-CLK-travel-suburban-extended-stay-10161-search", "MEM-BEN-BTN-CLK-travel-super-8-10162-search", "MEM-BEN-BTN-CLK-travel-the-oasis-at-death-valley-10433-search", "MEM-BEN-BTN-CLK-travel-travelodge-10165-search", "MEM-BEN-BTN-CLK-travel-tripbeat-endless-vacation-10979-search", "MEM-BEN-BTN-CLK-travel-tryp-by-wyndham-10166-search", "MEM-BEN-BTN-CLK-travel-vacations-by-rail-10182-search", "MEM-BEN-BTN-CLK-travel-waldorf-astoria-hotels-and-resorts-10168-search", "MEM-BEN-BTN-CLK-travel-wingate-by-wyndham-10186-search", "MEM-BEN-BTN-CLK-travel-wyndham-extra-holidays-10228-search", "MEM-BEN-BTN-CLK-travel-wyndham-hotel-group-10396-search", "MEM-BEN-BTN-CLK-travel-wyndham-hotels-and-resorts-10116-search", "MEM-BEN-BTN-CLK-travel-xanterra-parks-and-resorts-10064-search", "MEM-BEN-BTN-CLK-travel-zipcar-10117-search", "MEM-BEN-BTN-CLK-travel-grand-european-travel-10234-search"]
                },
                storeLength: "pageview"
            },
            "TTAR pageName": {
                customJS: function() {
                    return "TTAR " + webData.pageName
                },
                storeLength: "pageview"
            },
            "VTM trackRegForm": {
                jsVariable: "AARP.Everywhere.Omniture.trackRegForm",
                storeLength: "pageview"
            }
        },
        appVersion: "7QN",
        buildDate: "2019-04-12 17:22:55 UTC",
        publishDate: "2019-04-12 17:22:53 UTC"
    })
}(window, document);