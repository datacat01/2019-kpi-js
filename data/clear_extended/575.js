var awa = awa || {},
    behaviorKey;
awa.isInitialized = !1;
awa.verbosityLevels = {
    NONE: 0,
    ERROR: 1,
    WARNING: 2,
    INFORMATION: 3
};
awa.behavior = {
    UNDEFINED: 0,
    NAVIGATIONBACK: 1,
    NAVIGATION: 2,
    NAVIGATIONFORWARD: 3,
    APPLY: 4,
    REMOVE: 5,
    SORT: 6,
    EXPAND: 7,
    REDUCE: 8,
    CONTEXTMENU: 9,
    TAB: 10,
    COPY: 11,
    EXPERIMENTATION: 12,
    PRINT: 13,
    SHOW: 14,
    HIDE: 15,
    MAXIMIZE: 16,
    MINIMIZE: 17,
    BACKBUTTON: 18,
    STARTPROCESS: 20,
    PROCESSCHECKPOINT: 21,
    COMPLETEPROCESS: 22,
    SCENARIOCANCEL: 23,
    DOWNLOADCOMMIT: 40,
    DOWNLOAD: 41,
    SEARCHAUTOCOMPLETE: 60,
    SEARCH: 61,
    SEARCHINITIATE: 62,
    TEXTBOXINPUT: 63,
    PURCHASE: 80,
    ADDTOCART: 81,
    VIEWCART: 82,
    ADDWISHLIST: 83,
    FINDSTORE: 84,
    CHECKOUT: 85,
    REMOVEFROMCART: 86,
    PURCHASECOMPLETE: 87,
    VIEWCHECKOUTPAGE: 88,
    VIEWCARTPAGE: 89,
    VIEWPDP: 90,
    UPDATEITEMQUANTITY: 91,
    INTENTTOBUY: 92,
    PUSHTOINSTALL: 93,
    SIGNIN: 100,
    SIGNOUT: 101,
    SOCIALSHARE: 120,
    SOCIALLIKE: 121,
    SOCIALREPLY: 122,
    CALL: 123,
    EMAIL: 124,
    COMMUNITY: 125,
    VOTE: 140,
    SURVEYINITIATE: 141,
    SURVEYCOMPLETE: 142,
    REPORTAPPLICATION: 143,
    REPORTREVIEW: 144,
    SURVEYCHECKPOINT: 145,
    CONTACT: 160,
    REGISTRATIONINITIATE: 161,
    REGISTRATIONCOMPLETE: 162,
    CANCELSUBSCRIPTION: 163,
    RENEWSUBSCRIPTION: 164,
    CHANGESUBSCRIPTION: 165,
    REGISTRATIONCHECKPOINT: 166,
    CHATINITIATE: 180,
    CHATEND: 181,
    TRIALSIGNUP: 200,
    TRIALINITIATE: 201,
    PARTNERREFERRAL: 220,
    VIDEOSTART: 240,
    VIDEOPAUSE: 241,
    VIDEOCONTINUE: 242,
    VIDEOCHECKPOINT: 243,
    VIDEOJUMP: 244,
    VIDEOCOMPLETE: 245,
    VIDEOBUFFERING: 246,
    VIDEOERROR: 247,
    VIDEOMUTE: 248,
    VIDEOUNMUTE: 249,
    VIDEOFULLSCREEN: 250,
    VIDEOUNFULLSCREEN: 251,
    VIDEOREPLAY: 252,
    VIDEOPLAYERLOAD: 253,
    VIDEOPLAYERCLICK: 254,
    VIDEOVOLUMECONTROL: 255,
    VIDEOAUDIOTRACKCONTROL: 256,
    VIDEOCLOSEDCAPTIONCONTROL: 257,
    VIDEOCLOSEDCAPTIONSTYLE: 258,
    VIDEORESOLUTIONCONTROL: 259,
    VIRTUALEVENTJOIN: 260,
    VIRTUALEVENTEND: 261,
    IMPRESSION: 280,
    CLICK: 281,
    RICHMEDIACOMPLETE: 282,
    ADBUFFERING: 283,
    ADERROR: 284,
    ADSTART: 285,
    ADCOMPLETE: 286,
    ADSKIP: 287,
    ADTIMEOUT: 288,
    OTHER: 300
};
awa.behaviorKeys = [];
for (behaviorKey in awa.behavior) awa.behaviorKeys.push(behaviorKey);
awa.actionType = {
    CLICKLEFT: "CL",
    CLICKRIGHT: "CR",
    CLICKMIDDLE: "CM",
    SCROLL: "S",
    ZOOM: "Z",
    RESIZE: "R",
    KEYBOARDENTER: "KE",
    KEYBOARDSPACE: "KS",
    GAMEPADA: "CGA",
    GAMEPADMENU: "CGM",
    OTHER: "O"
};
awa.cookie = function() {
    function r(n, i) {
        var e = t(n),
            f, r, u;
        if (e && i)
            for (f = e.split("&"), r = 0; r < f.length; r++)
                if (u = f[r].split("="), u[0] && i.toLowerCase() === u[0].toLowerCase()) return u[1];
        return undefined
    }

    function t(t, i) {
        for (var r, u, o, e = document.cookie.split(";"), f = 0; f < e.length; f++) {
            for (r = e[f]; r.charAt(0) === " ";) r = r.substring(1);
            if (u = r.split("="), o = n(u.shift()), o === t && u[0].indexOf(i) == (awa.utils.isValueAssigned(i) ? 0 : -1)) return n(u.join("="))
        }
        return undefined
    }

    function u() {
        for (var t, i, r, f = document.cookie.split(";"), e = {}, u = 0; u < f.length; u++) {
            for (t = f[u]; t.charAt(0) === " ";) t = t.substring(1);
            i = t.split("=");
            r = n(i.shift());
            (r != "MSFPC" || r === "MSFPC" && i[0].indexOf("GUID") == (awa.utils.isValueAssigned("GUID") ? 0 : -1)) && (e[r] = n(i.join("=")))
        }
        return e
    }

    function n(n) {
        var t = decodeURIComponent(n.replace("/+/g", " "));
        return t.indexOf('"') === 0 && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), t
    }

    function i(n, t, i) {
        var u, r;
        i ? (r = new Date, r.setTime(r.getTime() + i * 864e5), u = "; expires=" + r.toUTCString()) : u = "";
        window.document.cookie = n + "=" + t + u + "; path=/;"
    }

    function f(n) {
        i(n, "", -1)
    }
    return {
        getCookie: t,
        getCookieKeyValue: r,
        getAllCookies: u,
        setCookie: i,
        deleteCookie: f
    }
}();
awa.cv = function() {
    function y() {
        return u(r())
    }

    function r() {
        return f.concat(".", i.toString())
    }

    function h() {
        var n = r();
        if (u(n)) return n
    }

    function p(i) {
        var r, f, e, o, s;
        if (u(i)) {
            for (r = i.split("."), f = r.length, r[f - 1] = (parseInt(r[f - 1], 10) + 1).toString(), e = "", o = 0; o < f; o++) e += r[o], o < f - 1 && (e += ".");
            if (s = r[0].length === n.baseLength ? n.maxCorrelationVectorLength : t.maxCorrelationVectorLength, e.length <= s) return e
        }
    }

    function c() {
        var n = r();
        return u(n) ? v(n.length + 2) : !1
    }

    function l() {
        return u(r()) ? v(f.length + 1 + (i + 1 + "").length) : !1
    }

    function a(n) {
        if (u(n)) {
            var t = n.lastIndexOf(".");
            f = n.substr(0, t);
            i = parseInt(n.substr(t + 1), 10)
        } else return awa.logger.logWarning("Cannot set invalid correlation vector value"), null;
        return r()
    }

    function w(n) {
        return n ? a(n) : (f = b(), i = 0, h())
    }

    function b() {
        for (var n = "", t = 0; t < o.baseLength; t++) n += e.charAt(Math.floor(Math.random() * e.length));
        return n
    }

    function k() {
        if (c()) return f = f.concat(".", i.toString()), i = 0, r()
    }

    function d() {
        if (l()) return i = i + 1, r()
    }

    function u(n) {
        if (n) {
            var t = n.split(".")[0];
            if (t) {
                if (t.length === 16) return s = 1, g(n);
                if (t.length === 22) return s = 2, nt(n)
            }
        }
    }

    function g(n) {
        if (t.validationPattern.test(n) && n.length <= t.maxCorrelationVectorLength) return !0
    }

    function nt(t) {
        if (n.validationPattern.test(t) && t.length <= n.maxCorrelationVectorLength) return !0
    }

    function v(i) {
        return s === 1 ? i <= t.maxCorrelationVectorLength : i <= n.maxCorrelationVectorLength
    }

    function tt() {
        o = t
    }

    function it() {
        o = n
    }
    var f = "",
        i = 0,
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        t = {},
        n, o, s;
    return t.maxCorrelationVectorLength = 63, t.baseLength = 16, t.validationPattern = new RegExp("^[" + e + "]{" + t.baseLength.toString() + "}(.[0-9]+)+$"), n = {}, n.maxCorrelationVectorLength = 127, n.baseLength = 22, n.validationPattern = new RegExp("^[" + e + "]{" + n.baseLength.toString() + "}(.[0-9]+)+$"), o = n, s = 2, {
        header: "MS-CV",
        tag: "cV",
        isInit: y,
        canExtend: c,
        canIncrement: l,
        getValue: h,
        setValue: a,
        init: w,
        extend: k,
        increment: d,
        incrementExternal: p,
        isValid: u,
        useCv1: tt,
        useCv2: it
    }
}();
awa.logger = function() {
    function n(n) {
        awa.consoleVerbosity >= awa.verbosityLevels.ERROR && console && console.error && console.error("JSLL: " + n)
    }

    function t(n) {
        awa.consoleVerbosity >= awa.verbosityLevels.WARNING && console && console.warn && console.warn("JSLL: " + n)
    }

    function i(n) {
        awa.consoleVerbosity >= awa.verbosityLevels.INFORMATION && console && console.log && console.log("JSLL: " + n)
    }
    return {
        logError: n,
        logWarning: t,
        logInformation: i
    }
}();
awa.capabilitiesCheck = function() {
    return function() {
        if (!JSON || !JSON.stringify) return awa.logger.logError("Unable to write event: the global JSON.stringify method does not exist"), awa.isAvailable = !1, !1
    }
}();
awa.utils = function() {
    function a(n, t) {
        var i, r, u;
        if (t) try {
            return (i = JSON.stringify(t), i === "{}" && n === "timing") ? v() : i
        } catch (f) {
            return r = '{"error": "ERROR: could not stringify {0} {1}"}', u = typeof t == "string" ? t : "", r.replace("{0}", n).replace("{1}", u)
        }
    }

    function v() {
        for (var f, i = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "first - paint", "first - contentful - paint"], r = "{", n = 0; n < i.length; n++) f = t[i[n]], u(f) && (r += '"' + i[n] + '":' + f, n < i.length - 1 && (r += ","));
        return r + "}"
    }

    function y(n) {
        return {
            "microsoft.com": "c1.microsoft.com",
            "xbox.com": "c.xbox.com",
            "live.com": "c.live.com",
            "microsoftstore.com": "c.microsoftstore.com",
            "msn.com": "c.msn.com",
            "windows.com": "c.windows.com"
        } [n]
    }

    function p(n, t) {
        if (n === "string") return typeof t == "string" || t instanceof String || t instanceof Date;
        if (n === "bool") return typeof t == "boolean" || t instanceof Boolean;
        if (!(typeof t == "number" || t instanceof Number)) return !1;
        if (n === "uint8") {
            if (t < 0 || t > 255 || t % 1 != 0) return !1
        } else if (n === "uint16") {
            if (t < 0 || t > 65535 || t % 1 != 0) return !1
        } else if (n === "uint32") {
            if (t < 0 || t > 4294967295 || t % 1 != 0) return !1
        } else if (n === "uint64") {
            if (t < 0 || t > 18446744073709551615 || t % 1 != 0) return !1
        } else if (n === "int8") {
            if (t < -128 || t > 127 || t % 1 != 0) return !1
        } else if (n === "int16") {
            if (t < -32768 || t > 32767 || t % 1 != 0) return !1
        } else if (n === "int32") {
            if (t < -2147483648 || t > 2147483647 || t % 1 != 0) return !1
        } else if (n === "int64") {
            if (t < -9223372036854775808 || t > 9223372036854775807 || t % 1 != 0) return !1
        } else if (n === "float") {
            if (t < -3402823e32 || t > 3402823e32) return !1
        } else if (n === "double" && (t < -Number.MAX_VALUE || t > Number.MAX_VALUE)) return !1;
        return !0
    }

    function w() {
        if (n === "") {
            var t = s().toLowerCase();
            n = t.indexOf("windows phone") !== -1 ? "WindowsPhone" : t.indexOf("win") !== -1 ? "Windows" : t.indexOf("mac") !== -1 ? "MacOS" : t.indexOf("x11") !== -1 ? "Unix" : t.indexOf("android") !== -1 ? "Android" : t.indexOf("linux") !== -1 ? "Linux" : t.indexOf("webos") !== -1 ? "webOS" : t.indexOf("blackberry") !== -1 ? "BlackBerry" : t.indexOf("ipod") !== -1 || t.indexOf("ipad") !== -1 || t.indexOf("iphone") !== -1 ? "iOS" : t.indexOf("symbian") !== -1 ? "Symbian" : t.indexOf("nokia") !== -1 ? "Nokia" : "Unknown"
        }
        return n
    }

    function b() {
        f = window.navigator && window.navigator.userAgent ? window.navigator.userAgent : ""
    }

    function s() {
        return f === "" && b(), f
    }

    function k(n, t) {
        var i;
        return n && n[t] && (i = n[t], delete n[t]), i
    }

    function d(n, t) {
        n = r(n);
        var i = n.getBoundingClientRect(),
            u = g(i, t);
        return u > 0 ? !0 : !1
    }

    function g(n, t) {
        var i = n.left,
            r = n.top,
            u = n.right,
            f = n.bottom,
            e = t.left,
            o = t.top,
            s = t.right,
            h = t.bottom,
            c = Math.max(0, Math.min(u, s) - Math.max(i, e)),
            l = Math.max(0, Math.min(f, h) - Math.max(r, o));
        return c * l
    }

    function r(n) {
        return typeof jQuery == "function" && n instanceof jQuery ? n[0] : n
    }

    function i(n) {
        var t = String(n);
        return t.length === 1 && (t = "0" + t), t
    }

    function nt(n) {
        return n.getUTCFullYear() + "-" + i(n.getUTCMonth() + 1) + "-" + i(n.getUTCDate()) + "T" + i(n.getUTCHours()) + ":" + i(n.getUTCMinutes()) + ":" + i(n.getUTCSeconds()) + "." + String((n.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
    }

    function tt() {
        var n;
        try {
            n = window.performance.getEntries().filter(function(n) {
                return n.initiatorType === "script" || n.initiatorType === "link"
            })
        } catch (t) {}
        return n
    }

    function it() {
        var n = undefined;
        return t && t.loadEventStart && t.navigationStart && t.loadEventStart > 0 && (n = t.loadEventStart - t.navigationStart), n
    }

    function rt(n) {
        return "[" + n + "]"
    }

    function ut(n, t) {
        return o = t, c(n, et)
    }

    function ft(n) {
        return c(n, ot)
    }

    function c(n, t) {
        var i = n;
        if (i) {
            for (i = r(i); !t(i);)
                if (i = i.parentNode, i = r(i), !i || !i.getAttribute) return null;
            return i
        }
    }

    function et(n) {
        var t = n.getAttribute(o);
        return u(t) || t === ""
    }

    function ot(n) {
        return n.nodeName === "A"
    }

    function st(n) {
        var i, t;
        return n && (t = n.split(":"), i = t.length > 1 && t[0].toLowerCase() === "js" ? n : l + n), i
    }

    function e(n) {
        for (var t in n) u(n[t]) && (JSON.stringify(n[t]) !== "{}" || t === "callback") || delete n[t]
    }

    function u(n) {
        return !(n === undefined || n === null || n === "")
    }

    function ht(n, t) {
        var r, i;
        e(n);
        for (r in t) i = t[r], typeof n[i] == "object" ? e(n[i]) : delete n[i]
    }
    var n = "",
        f = "",
        t = window.performance ? window.performance.timing : undefined,
        l = "JS:",
        o = "",
        h = function() {
            var n = {},
                i = !1,
                t = 0,
                f = arguments.length,
                r, u;
            for (Object.prototype.toString.call(arguments[0]) === "[object Boolean]" && (i = arguments[0], t++), r = function(t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r] != undefined && i && Object.prototype.toString.call(t[r]) === "[object Object]" ? h(!0, n[r], t[r]) : t[r])
                }; t < f; t++) u = arguments[t], r(u);
            return n
        };
    return {
        stringifyField: a,
        getMuidHost: y,
        isOfCorrectType: p,
        getOs: w,
        getUserAgent: s,
        extractFieldFromObject: k,
        isElementTrulyVisible: d,
        dateToISOString: nt,
        extend: h,
        returnDomObjectIfjQuery: r,
        findClosestByAttribute: ut,
        findClosestAnchor: ft,
        getPerformanceData: tt,
        getPageLoadTime: it,
        removeInvalidElements: e,
        removeNonObjectsAndInvalidElements: ht,
        bracketIt: rt,
        getAppIdWithPrefix: st,
        isValueAssigned: u
    }
}();
awa.ids = function() {
    function c() {
        function n() {
            return Math.floor(Math.random() * 16).toString(16)
        }
        var t = "xxxxxxxx-xxxx-4xxx-Rxxx-xxxxxxxxxxxx".replace(/x/g, n);
        return t.replace("R", (8 | Math.floor(Math.random() * 3)).toString(16))
    }

    function v(n) {
        return n ? n.MUID : u.getCookie("MUID")
    }

    function y() {
        return r
    }

    function p() {
        return e ? r = c() : e = !0, r
    }

    function l(n) {
        return n ? n[t] : u.getCookie(t)
    }

    function w(n) {
        var t = "";
        return t = n ? n.MUID : u.getCookie("MUID"), t && t.length ? "t:" + t : t
    }

    function b(n) {
        if (i = null, n) {
            for (var t = 0; t < s.length; t++)
                if (s[t] === n.substring(0, 2)) {
                    i = n;
                    break
                } i || awa.logger.logWarning("Unsupported app user id: " + n + ". Supported app user ids are: c:, i:, and w:")
        }
    }

    function k(n) {
        var t;
        if (!n || n.length < 4) return !1;
        var i = !1,
            r = n.substring(0, 3).toString().toUpperCase();
        for (t = 0; t < h.length; t++)
            if (h[t] + ":" === r && n.length <= 256) {
                i = !0;
                break
            } return i
    }

    function f(t) {
        var r, i;
        if (t) {
            if (t === n) return;
            for (n = null, r = t.split(","), i = 0; i < r.length; i++) k(r[i]) ? n ? n += "," + r[i] : n = r[i] : awa.logger.logWarning("Unsupported flight id format for this app expId: " + r[i])
        } else {
            n = null;
            return
        }
    }

    function a() {
        return n
    }

    function d(n) {
        n && (o = n)
    }

    function g() {
        return o
    }

    function nt(n) {
        return n ? f(n[t]) : f(l()), a()
    }
    var r = c(),
        u = awa.cookie,
        i = null,
        n = null,
        e = !1,
        t = "Treatments",
        o, s = ["c:", "i:", "w:"],
        h = ["AX", "EX", "SF", "CS", "CF", "CT", "CU", "DC", "DF", "H5", "HL", "WS", "WP"];
    return {
        getVisitorId: v,
        getMuidUserId: w,
        setAppUserId: b,
        getAppUserId: function() {
            return i
        },
        readExpIdFromCookie: nt,
        readExpIdFromCoreData: function(n) {
            return f(n), a()
        },
        getImpressionGuid: y,
        getPageViewImpressionGuid: p,
        getGroups: l,
        setDeviceClass: d,
        getDeviceClass: g,
        setExpIdCookieName: function(n) {
            t = n
        },
        getExpIdCookieName: function() {
            return t
        }
    }
}();
awa.vortexEvents = function() {
    function r() {
        n.length > 0 && (awa.writeEvent(n), n = [])
    }

    function f() {
        if (document.readyState === "complete")
            while (n.length > 0) awa.writeEvent(n.pop());
        else awa.ct.onDomReadyDo(awa.firstEventDoneTasks)
    }

    function e(u, f) {
        if (f === !0) {
            awa.writeEvent(u);
            return
        }
        if (i === "complete") {
            awa.writeEvent(u);
            return
        }
        n.push(u);
        t > 1 && n.length >= t && r()
    }

    function o(n) {
        n.type === "CorsDisallowed" ? awa.ct.captureCorsDisallowed(n) : n.type === "EventTooLong" && awa.ct.captureEventTooLong(n)
    }

    function s(n, t) {
        awa.ct.captureClientError({
            errorInfo: n,
            displayedToUser: t
        })
    }

    function h(n) {
        var t = {
            name: "Ms.Webi.OutgoingRequest",
            cV: n.cV,
            data: {
                baseData: {
                    operationName: n.currentOperationName,
                    targetUri: n.requestUri,
                    latencyMs: n.latencyMs,
                    serviceErrorCode: n.serviceErrorCode || -1,
                    succeeded: n.isSuccess,
                    requestMethod: n.httpMethod,
                    responseContentType: n.contentType,
                    protocolStatusCode: n.httpStatusCode,
                    dependencyOperationName: n.operationName,
                    dependencyOperationVersion: n.operationVersion,
                    dependencyName: n.serviceName,
                    dependencyType: n.serviceType || "WebService",
                    responseSizeBytes: n.responseSize
                },
                baseType: "Ms.Qos.OutgoingServiceRequest",
                impressionGuid: u.getImpressionGuid(),
                message: n.errorMessage,
                retryCount: n.retryCount,
                customData: n.customData
            }
        };
        awa.ct.captureQos(t)
    }
    var u = awa.ids,
        n = [],
        i = "notInit",
        t = 0;
    return {
        sendError: s,
        sendApiComplete: h,
        sendJsllEvent: o,
        SendOrScheduleEvent: e,
        batchQueuedEvents: r,
        drainQueuedEvents: f,
        batchEventsByNumber: function(n) {
            t = n
        },
        addEventToQueue: function(t) {
            n.push(t)
        },
        overrideQueueBehavior: function(n) {
            n && n.domReadyState && (i = n.domReadyState)
        }
    }
}();
awa.errorHandler = function() {
    function t(n) {
        var t = window.onerror;
        window.onerror = function() {
            t && t.apply(this, arguments);
            n.apply(this, arguments)
        }
    }

    function i(n) {
        return n.stack ? n.stack.substring(0, 1e3) : ""
    }

    function r() {
        var t, r, u;
        arguments && (t = "", arguments[1] && (r = document.createElement("a"), r.href = arguments[1], t = awa.ct.getUri(r)), u = {
            Page: awa.ct.getUri(document.location),
            Script: t,
            Message: arguments[0] || "",
            LineNumber: arguments[2] || 0,
            StackTrace: arguments[4] ? i(arguments[4]) : "",
            UserAgent: awa.utils.getUserAgent() || "",
            Platform: window.navigator.platform || ""
        }, n.sendError(u, !1))
    }

    function u() {
        t(r)
    }
    var n = awa.vortexEvents;
    return {
        init: u
    }
}();
awa.timespanHandler = function() {
        function t(t, i) {
            var r = (new Date).getTime();
            if (i) return r - n[t];
            n[t] = r
        }
        var n = {};
        return {
            recordTimeSpan: t
        }
    }(),
    function() {
        function h(n, r, u) {
            if (t(u)) {
                var f = "";
                return n.length > 0 && (f += "&"), f + (i.isOfCorrectType("number", u) || i.isOfCorrectType("bool", u) ? r + "=" + u : typeof u == "object" ? r + "=" + JSON.stringify(u) : r + "=" + s + encodeURIComponent(u) + s)
            }
            return ""
        }

        function w(n, u, f) {
            if (t(f)) {
                var e = "";
                return n.length > 1 && (e += ","), e + (i.isOfCorrectType("number", f) || i.isOfCorrectType("bool", f) ? r + u + r + ":" + f : typeof f == "object" ? r + u + r + ":" + JSON.stringify(f) : r + u + r + ":" + r + f + r)
            }
            return ""
        }

        function c(t, i) {
            for (var o, u, s, c, l, a, v, y, r = "", e = 0; e < nt; e++) r += h(r, f[e], t[f[e]]);
            o = t.data;
            for (u in o)
                if (u == "baseData") {
                    s = o[u];
                    for (c in s) r += h(r, p + c, s[c])
                } else r += h(r, vt + u, o[u]);
            l = t.ext;
            for (a in l) {
                v = l[a];
                for (y in v) r += h(r, "ext" + p + a + p + y, v[y])
            }
            return r += "&" + ot(), n.shareAuthStatus === !0 && n.authMethod == 2 && awa.getSignedInStatus() === !0 && (r += "&" + pt(i)), yt(r), r
        }

        function ut(n) {
            for (var r, u, t = "{", i = 0; i < nt; i++) t += w(t, f[i], n[f[i]]);
            return r = n.data, r && (t += w(t, "data", r)), u = n.ext, u && (t += w(t, "ext", u)), t += "}", awa.requestBody = t, t
        }

        function yt(n) {
            tt = n
        }

        function ft(n, t) {
            var i = new Image;
            i.onload = function() {
                i.width === 1 && u(n, t)
            };
            i.onerror = function() {
                awa.logger.logWarning("Telemetry image beacon not sent properly. Sending through POST.");
                k(t)
            };
            i.src = n
        }

        function et(i) {
            var r = "",
                e = "",
                f = "",
                u, o;
            if (i.length)
                for (f = i[0].ext.javascript.msfpc, u = 0; u < i.length; u++) u > 0 && (r += "\n"), r += ut(i[u]);
            else f = i.ext.javascript.msfpc, r = ut(i);
            return o = n.endpoint + "/t.req?" + r, e = "?" + ot(), e += t(f) ? "&ext-javascript-msfpc=" + encodeURIComponent(s + f + s) : "", {
                qp: e,
                requestBody: r,
                requestSrc: o
            }
        }

        function ot() {
            return "$mscomCookies=" + n.mscomCookies
        }

        function pt(n) {
            return "$nr=" + t(n.Bounced)
        }

        function k(t) {
            var f = et(t),
                i, r;
            y === "xhr" ? (i = new XMLHttpRequest, i.open("POST", n.endpoint + f.qp, !0), i.withCredentials = !0, i.onload = function() {
                i.status === 200 ? u(f.requestSrc, t) : rt(i.statusText, i.status)
            }, i.onerror = function() {
                rt(i.statusText, i.status)
            }, i.send(f.requestBody)) : y === "XDomainRequest" ? (r = new window.XDomainRequest, r.onload = function() {
                u(f.requestSrc, t)
            }, r.onerror = function() {
                at(r)
            }, r.open("POST", n.endpoint), r.send(f.requestBody)) : awa.logger.logError("No event is sent.")
        }

        function st(t) {
            var i = et(t);
            navigator.sendBeacon(n.endpoint + i.qp, i.requestBody) ? u(i.requestSrc, t) : k(t)
        }

        function wt(n, t, i) {
            var f = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                r = document.createElement("script");
            r.onload = function() {
                u(n, t, !0)
            };
            r.onerror = function() {
                i ? awa.logger.logError("No event is sent.") : (o(), awa.writeEvent(t, !0))
            };
            r.async = !0;
            r.src = n;
            f.appendChild(r)
        }

        function bt() {
            var n = i.getUserAgent(),
                t = n.indexOf("MSIE ");
            return t > 0 ? parseInt(n.substring(t + 5, n.indexOf(".", t)), 10) < 9 : !1
        }
        var a, v, b, d, l, g;
        awa._schemas = awa._schemas || [];
        var i = awa.utils,
            t = i.isValueAssigned,
            n = {
                endpoint: "https://web.vortex.data.microsoft.com/collect/v1",
                sendMode: 1,
                batchSize: 10,
                authMethod: 0,
                validateEvents: !0,
                sendEvents: !0,
                logLevel: awa.verbosityLevels.NONE,
                syncMuid: !1,
                provisionMsfpc: !0,
                useDefaultContentName: !0,
                useShortNameForContentBlob: !1,
                debounceMs: {
                    scroll: 600,
                    resize: 3e3
                },
                muidDomain: "microsoft.com",
                biBlobAttributeTag: "data-m",
                isLoggedIn: !1,
                shareAuthStatus: !1,
                cookiesToCollect: ["Bounced"],
                mscomCookies: !1,
                userConsentCookieName: "MSCC",
                userConsented: undefined,
                useBeacon: !0,
                urlCollectHash: !1,
                urlCollectQuery: !0,
                initCv: !1,
                enabledFeatures: !0,
                ix: {
                    a: !1,
                    g: !1
                },
                autoCapture: {
                    pageView: !0,
                    onLoad: !0,
                    onUnload: !0,
                    click: !0,
                    scroll: !1,
                    resize: !1,
                    jsError: !0,
                    addin: !0,
                    perf: !0,
                    assets: !1,
                    lineage: !1,
                    invalidEvents: !1,
                    msTags: !0,
                    awaTags: !0,
                    eventTooLong: !0,
                    corsDisallowed: !0
                },
                callback: {
                    pageName: null,
                    pageActionPageTags: null,
                    pageViewPageTags: null,
                    contentUpdatePageTags: null,
                    pageActionContentTags: null,
                    signedinStatus: null,
                    jsllEventCallback: null,
                    pageUnloadTimings: null
                },
                coreData: {
                    referrerUri: document.referrer || undefined,
                    requestUri: "",
                    appId: window.location.hostname,
                    pageName: "",
                    title: "",
                    pageType: "",
                    env: "",
                    product: "",
                    market: "",
                    serverImpressionGuid: "",
                    expId: "",
                    pageTags: {}
                }
            };
        awa.getConfig = function() {
            return n
        };
        a = [];
        for (v in n) typeof n[v] == "object" && a.push(v);
        var f = ["ver", "name", "time", "flags", "os", "appId", "cV", "deviceClass"],
            nt = f.length,
            ht = bt(),
            ct = ht ? 2083 : 15e3,
            tt = "",
            e = !1,
            it = t(navigator) && t(navigator.sendBeacon);
        awa.experimentIdTag = "expId";
        awa.isAvailable = !0;
        awa.requestBody = "";
        awa.getQueryStringParameters = function() {
            return tt
        };
        Object.freeze && Object.freeze(awa.verbosityLevels);
        awa.capabilitiesCheck();
        var y = window.XDomainRequest ? "XDomainRequest" : "xhr",
            lt = function() {
                return y === "XDomainRequest" && n.endpoint && n.endpoint.indexOf(window.location.protocol) !== 0 ? (awa.logger.logError("Unable to write event: CORS requests are not supported cross-protocol in this browser"), !1) : !0
            },
            o = function() {
                e = !0;
                n.sendMode == 1 && (awa.vortexEvents.overrideQueueBehavior({
                    domReadyState: "complete"
                }), awa.vortexEvents.drainQueuedEvents())
            };
        awa.firstEventDone = o;
        awa.firstEventDoneTasks = function() {
            awa.vortexEvents.drainQueuedEvents()
        };
        var rt = function(n, t) {
                awa.logger.logError("Failure sending data to vortex: " + n + "Error: " + t.toString())
            },
            u = function(t, i, r) {
                awa.OnSuccessfulVortexRequest && awa.OnSuccessfulVortexRequest(t);
                i && typeof n.callback.jsllEventCallback == "function" && n.callback.jsllEventCallback(i);
                e === !1 && (e = !0, n.sendMode !== 1 || r || o());
                awa.logger.logInformation("Success sending data to vortex")
            },
            at = function(n) {
                awa.logger.logError("Failure sending data to vortex using XDomainRequest.  Status code:" + n.status)
            },
            s = "'",
            r = '"',
            p = "-",
            vt = "*";
        for (awa.init = function(t) {
                if (!awa.isInitialized) {
                    awa.isInitialized = !0;
                    t && (i.removeNonObjectsAndInvalidElements(t, a), n = i.extend(!0, n, t));
                    var r = n.sendMode;
                    r == 0 && (e = !0, awa.vortexEvents.overrideQueueBehavior({
                        domReadyState: "complete"
                    }));
                    r >= 1 && awa.vortexEvents.overrideQueueBehavior({
                        domReadyState: "notComplete"
                    });
                    r === 2 && awa.vortexEvents.batchEventsByNumber(n.batchSize);
                    awa.consoleVerbosity = n.logLevel;
                    awa.ct.initialize(n);
                    awa.ix.init(n);
                    n.initCv && awa.cv.init()
                }
            }, b = function(r, u) {
                var o, s, f, e, h, c;
                awa.translateEventFromIntermediateStructure && (r = awa.translateEventFromIntermediateStructure(r));
                o = r.cV;
                s = r.appId;
                r.ver = "2.1";
                r.cV = t(o) ? o : awa.cv.getValue();
                r.time = t(r.time) ? r.time : i.dateToISOString(new Date);
                r.os = i.getOs();
                r.deviceClass = awa.ids.getDeviceClass() || undefined;
                r.appId = i.getAppIdWithPrefix(s ? s : n.coreData.appId);
                f = window.location.hostname;
                t(f) || (f = window.location.protocol == "file:" ? "local" : f);
                e = {
                    ver: "1.1",
                    libVer: "4.2.14",
                    domain: f,
                    msfpc: u.MSFPC,
                    userConsent: t(n.userConsented) ? n.userConsented : t(u[n.userConsentCookieName]) ? !0 : !1,
                    anid: u.ANON ? u.ANON.slice(0, 34) : undefined
                };
                h = r.serviceName ? r.serviceName : n.coreData.serviceName;
                h && (e.serviceName = h);
                r.ext ? r.ext.javascript = e : r.ext = {
                    javascript: e
                };
                c = awa.ids.getMuidUserId(u);
                c && (r.ext.user = {
                    localId: c
                });
                var p = n.coreData.env,
                    y = r.ext.app ? r.ext.app.env : undefined,
                    l = t(y) ? y : p,
                    a = n.coreData.expId ? awa.ids.readExpIdFromCoreData(n.coreData.expId) : awa.ids.readExpIdFromCookie(u),
                    v = awa.ids.getAppUserId();
                return (t(l) || t(a) || t(v)) && (r.ext.app || (r.ext.app = {}), l && (r.ext.app.env = l), a && (r.ext.app.expId = a), v && (r.ext.app.userId = v)), n.validateEvents && awa.isEventValid && !awa.isEventValid(r) ? undefined : (awa._validateAndTranslateEvent(r), r)
            }, awa.writeEvent = function(i, r) {
                var h, l, v, y, o, a, w;
                if (!awa.isInitialized) {
                    awa.vortexEvents.addEventToQueue(i);
                    return
                }
                var s = !0,
                    f = awa.cookie.getAllCookies(),
                    p = t(f.MSFPC);
                if (Object.prototype.toString.call(i) === "[object Array]") {
                    for (h = [], l = 0; l < i.length; l++) v = b(i[l], f), v && h.push(v);
                    if (h.length != 0) i = h, s = !1;
                    else return
                } else if (i = b(i, f), !i) return;
                if (n.sendEvents) {
                    if (y = JSON.stringify(i).length + n.endpoint.length, s && y + 7 > ct && (awa.logger.logWarning("event is too large to send using get -- using post instead"), n.autoCapture.eventTooLong && (o = {}, o.eventName = i.name, o.payloadLength = y, awa.ct.captureEventTooLong(o)), s = !1), !s && !lt()) {
                        n.autoCapture.corsDisallowed && (o = {}, o.eventName = i.name, o.type = "CorsDisallowed", awa.ct.captureCorsDisallowed(o));
                        return
                    }
                    if (s)
                        if (e === !1 || n.provisionMsfpc && !p || n.shareAuthStatus === !0) {
                            if (p = !0, a = "/t.js", n.shareAuthStatus === !0 && awa.getSignedInStatus() === !0)
                                if (n.authMethod === 1) {
                                    if (w = t(f.Bounced), w) {
                                        ft(n.endpoint + "/asm.gif?" + c(i, f), i);
                                        return
                                    }
                                    awa.vortexEvents.overrideQueueBehavior({
                                        domReadyState: "notComplete"
                                    });
                                    a = "/asm.js"
                                } else n.authMethod === 2 && (a = "/asa.js");
                            wt(n.endpoint + a + "?" + c(i, f), i, r)
                        } else it && n.useBeacon === !0 ? st(i) : ft(n.endpoint + "/t.gif?" + c(i, f), i);
                    else it && n.useBeacon === !0 && n.shareAuthStatus === !1 ? st(i) : k(i)
                } else u(c(i, f), i)
            }, awa.getSignedInStatus = function() {
                return n.callback && typeof n.callback.signedinStatus == "function" ? n.callback.signedinStatus() : n.isLoggedIn
            }, awa.sendEventThroughIframe = function(t) {
                var r = document.createElement("iframe");
                r.id = "telframe";
                r.style.display = "none";
                n.authMethod == 1 && (r.addEventListener ? r.addEventListener("load", o) : r.attachEvent("onload", o));
                r.src = t;
                awa.cookie.setCookie("Bounced", i.dateToISOString(new Date), .5 / 24);
                document.body.appendChild(r)
            }, awa._registerSchemas = function(n) {
                for (var t = 0; t < n.length; t++) awa._schemas[n[t].name] = n[t]
            }, awa.console = window.console || {}, awa.console.fallback = awa.console.log || function() {}, d = ["log", "info", "warn", "error", "trace"], l = 0; l < d.length; l++) g = d[l], awa.console[g] || (awa.console[g] = awa.console.fallback);
        awa.extendCoreData = function(t) {
            i.removeInvalidElements(t);
            n.coreData = i.extend(!0, n.coreData, t)
        };
        awa._validateAndTranslateEvent = function(n) {
            return {
                event: n
            }
        }
    }();
awa._registerSchemas([{
    name: "Ms.Cll.Javascript.CorsDisallowed",
    "Ms.Cll.Javascript.CorsDisallowed": {
        part: "C",
        def: {
            fields: [{
                req: !0,
                name: "eventName",
                type: "string"
            }, {
                name: "pageName",
                type: "string"
            }, {
                name: "market",
                type: "string"
            }, {
                name: "uri",
                type: "string"
            }, {
                name: "impressionGuid",
                type: "string"
            }, {
                name: "serverImpressionGuid",
                type: "string"
            }]
        }
    }
}, {
    name: "Ms.Cll.Javascript.EventTooLong",
    "Ms.Cll.Javascript.EventTooLong": {
        part: "C",
        def: {
            fields: [{
                req: !0,
                name: "eventName",
                type: "string"
            }, {
                req: !0,
                name: "payloadLength",
                type: "int32"
            }, {
                name: "pageName",
                type: "string"
            }, {
                name: "market",
                type: "string"
            }, {
                name: "uri",
                type: "string"
            }, {
                name: "impressionGuid",
                type: "string"
            }, {
                name: "serverImpressionGuid",
                type: "string"
            }]
        }
    }
}, {
    name: "Ms.Cll.Javascript.Error",
    "Ms.Telemetry.Error": {
        part: "B",
        def: {
            fields: [{
                name: "errorName",
                type: "string"
            }, {
                name: "errorMessage",
                type: "string"
            }, {
                name: "severity",
                type: "int32"
            }, {
                name: "errorType",
                type: "string"
            }, {
                name: "errorCode",
                type: "int32"
            }, {
                name: "lineNumber",
                type: "uint32"
            }, {
                name: "isDisplayed",
                type: "bool"
            }, {
                name: "errorLocation",
                type: "string"
            }, {
                name: "errorMethod",
                type: "string"
            }]
        }
    },
    "Ms.Cll.Javascript.Error": {
        part: "C",
        def: {
            fields: [{
                req: !0,
                name: "code",
                type: "int32"
            }, {
                req: !0,
                name: "message",
                type: "string"
            }, {
                name: "pageName",
                type: "string"
            }, {
                name: "market",
                type: "string"
            }, {
                name: "uri",
                type: "string"
            }, {
                name: "impressionGuid",
                type: "string"
            }, {
                name: "serverImpressionGuid",
                type: "string"
            }]
        }
    }
}, {
    name: "Ms.Cll.Javascript.EventDropped",
    "Ms.Cll.Javascript.EventDropped": {
        part: "C",
        def: {
            fields: [{
                req: !0,
                name: "eventName",
                type: "string"
            }, {
                name: "pageName",
                type: "string"
            }, {
                name: "market",
                type: "string"
            }, {
                name: "uri",
                type: "string"
            }, {
                name: "impressionGuid",
                type: "string"
            }, {
                name: "serverImpressionGuid",
                type: "string"
            }, {
                name: "droppedInfo",
                type: "string"
            }]
        }
    }
}, {
    name: "Ms.Webi.ClientError",
    "Ms.Webi.ClientError": {
        part: "B",
        def: {
            fields: [{
                req: !0,
                name: "errorInfo",
                type: "string"
            }, {
                name: "wasDisplayed",
                type: "bool"
            }, {
                name: "impressionGuid",
                type: "string"
            }, {
                name: "serverImpressionGuid",
                type: "string"
            }, {
                name: "pageName",
                type: "string"
            }, {
                name: "market",
                type: "string"
            }, {
                name: "uri",
                type: "string"
            }, {
                name: "errorName",
                type: "string"
            }, {
                name: "errorMessage",
                type: "string"
            }, {
                name: "severity",
                type: "int32"
            }, {
                name: "errorType",
                type: "string"
            }, {
                name: "errorCode",
                type: "int32"
            }, {
                name: "lineNumber",
                type: "uint32"
            }, {
                name: "isDisplayed",
                type: "bool"
            }, {
                name: "errorLocation",
                type: "string"
            }, {
                name: "errorMethod",
                type: "string"
            }]
        }
    }
}, {
    name: "Ms.Webi.OutgoingRequest",
    "Ms.Qos.OutgoingServiceRequest": {
        part: "B",
        def: {
            fields: [{
                req: !0,
                name: "operationName",
                type: "string"
            }, {
                name: "targetUri",
                type: "string"
            }, {
                req: !0,
                name: "latencyMs",
                type: "int32"
            }, {
                name: "serviceErrorCode",
                type: "int32"
            }, {
                req: !0,
                name: "succeeded",
                type: "bool"
            }, {
                name: "requestMethod",
                type: "string"
            }, {
                name: "responseContentType",
                type: "string"
            }, {
                name: "protocol",
                type: "string"
            }, {
                name: "protocolStatusCode",
                type: "string"
            }, {
                req: !0,
                name: "dependencyOperationName",
                type: "string"
            }, {
                name: "dependencyOperationVersion",
                type: "string"
            }, {
                req: !0,
                name: "dependencyName",
                type: "string"
            }, {
                name: "dependencyType",
                type: "string"
            }, {
                name: "responseSizeBytes",
                type: "int32"
            }, {
                name: "requestStatus",
                type: "int32"
            }]
        }
    },
    "Ms.Webi.OutgoingRequest": {
        part: "C",
        def: {
            fields: [{
                name: "impressionGuid",
                type: "string"
            }, {
                name: "message",
                type: "string"
            }, {
                name: "retryCount",
                type: "int32"
            }, {
                name: "customData",
                type: "string"
            }, {
                name: "serverImpressionGuid",
                type: "string"
            }, {
                name: "pageName",
                type: "string"
            }, {
                name: "market",
                type: "string"
            }, {
                name: "uri",
                type: "string"
            }]
        }
    }
}, {
    name: "Ms.Webi.PageView",
    "Ms.Content.PageView": {
        part: "B",
        def: {
            fields: [{
                name: "ver",
                type: "string"
            }, {
                req: !0,
                name: "impressionGuid",
                type: "string"
            }, {
                req: !0,
                name: "pageName",
                type: "string"
            }, {
                name: "uri",
                type: "string"
            }, {
                name: "referrerUri",
                type: "string"
            }, {
                name: "pageType",
                type: "string"
            }, {
                name: "pageTags",
                type: "string"
            }, {
                name: "product",
                type: "string"
            }, {
                name: "screenState",
                type: "int32"
            }, {
                name: "actionType",
                type: "string"
            }, {
                name: "behavior",
                type: "int32"
            }, {
                name: "resHeight",
                type: "int32"
            }, {
                name: "resWidth",
                type: "int32"
            }, {
                name: "vpHeight",
                type: "int32"
            }, {
                name: "vpWidth",
                type: "int32"
            }, {
                name: "market",
                type: "string"
            }]
        }
    },
    "Ms.Webi.PageView": {
        part: "C",
        def: {
            fields: [{
                name: "cookieEnabled",
                type: "bool"
            }, {
                name: "flashInstalled",
                type: "bool"
            }, {
                name: "flashVersion",
                type: "string"
            }, {
                name: "cookies",
                type: "string"
            }, {
                name: "isJs",
                type: "bool"
            }, {
                name: "title",
                type: "string"
            }, {
                name: "isLoggedIn",
                type: "bool"
            }, {
                name: "isManual",
                type: "bool"
            }, {
                name: "serverImpressionGuid",
                type: "string"
            }]
        }
    }
}, {
    name: "Ms.Webi.ContentUpdate",
    "Ms.Content.ContentUpdate": {
        part: "B",
        def: {
            fields: [{
                name: "ver",
                type: "string"
            }, {
                req: !0,
                name: "impressionGuid",
                type: "string"
            }, {
                req: !0,
                name: "pageName",
                type: "string"
            }, {
                name: "uri",
                type: "string"
            }, {
                name: "pageTags",
                type: "string"
            }, {
                name: "pageHeight",
                type: "int32"
            }, {
                name: "vpHeight",
                type: "int32"
            }, {
                name: "vpWidth",
                type: "int32"
            }, {
                name: "market",
                type: "string"
            }, {
                name: "actionType",
                type: "string"
            }, {
                name: "behavior",
                type: "int32"
            }, {
                name: "vScrollOffset",
                type: "int32"
            }, {
                name: "hScrollOffset",
                type: "int32"
            }, {
                name: "contentVer",
                type: "string"
            }, {
                req: !0,
                name: "content",
                type: "string"
            }]
        }
    },
    "Ms.Webi.ContentUpdate": {
        part: "C",
        def: {
            fields: [{
                name: "pageLoadTime",
                type: "int32"
            }, {
                name: "title",
                type: "string"
            }, {
                name: "isJs",
                type: "bool"
            }, {
                name: "cookieEnabled",
                type: "bool"
            }, {
                name: "isLoggedIn",
                type: "bool"
            }, {
                name: "isManual",
                type: "bool"
            }, {
                name: "isDomComplete",
                type: "bool"
            }, {
                name: "serverImpressionGuid",
                type: "string"
            }, {
                name: "timings",
                type: "string"
            }]
        }
    }
}, {
    name: "Ms.Webi.PageAction",
    "Ms.Content.PageAction": {
        part: "B",
        def: {
            fields: [{
                name: "ver",
                type: "string"
            }, {
                req: !0,
                name: "impressionGuid",
                type: "string"
            }, {
                req: !0,
                name: "pageName",
                type: "string"
            }, {
                name: "uri",
                type: "string"
            }, {
                name: "destUri",
                type: "string"
            }, {
                name: "market",
                type: "string"
            }, {
                name: "pageType",
                type: "string"
            }, {
                name: "pageTags",
                type: "string"
            }, {
                name: "product",
                type: "string"
            }, {
                name: "screenState",
                type: "int32"
            }, {
                name: "actionType",
                type: "string"
            }, {
                name: "behavior",
                type: "int32"
            }, {
                name: "contentVer",
                type: "string"
            }, {
                name: "content",
                type: "string"
            }]
        }
    },
    "Ms.Webi.PageAction": {
        part: "C",
        def: {
            fields: [{
                name: "timeToAction",
                type: "int32"
            }, {
                name: "cookieEnabled",
                type: "bool"
            }, {
                name: "cookies",
                type: "string"
            }, {
                name: "isJs",
                type: "bool"
            }, {
                name: "title",
                type: "string"
            }, {
                name: "referrerUri",
                type: "string"
            }, {
                name: "isLoggedIn",
                type: "bool"
            }, {
                name: "isManual",
                type: "bool"
            }, {
                name: "serverImpressionGuid",
                type: "string"
            }]
        }
    }
}, {
    name: "Ms.Webi.PageUnload",
    "Ms.Content.PageUnload": {
        part: "B",
        def: {
            fields: [{
                name: "ver",
                type: "string"
            }, {
                req: !0,
                name: "impressionGuid",
                type: "string"
            }, {
                req: !0,
                name: "pageName",
                type: "string"
            }, {
                name: "uri",
                type: "string"
            }]
        }
    },
    "Ms.Webi.PageUnload": {
        part: "C",
        def: {
            fields: [{
                name: "dwellTime",
                type: "int32"
            }, {
                name: "scrollDepth",
                type: "string"
            }, {
                name: "serverImpressionGuid",
                type: "string"
            }, {
                name: "timings",
                type: "string"
            }, {
                name: "vScrollOffset",
                type: "int32"
            }, {
                name: "pageHeight",
                type: "int32"
            }, {
                name: "vpHeight",
                type: "int32"
            }, {
                name: "pageLoadTime",
                type: "int32"
            }]
        }
    }
}]);
awa.isEventValid = function(n) {
    function r(n, t) {
        var i = n.eventName + " - " + n.droppedInfo;
        t ? (c("Dropped event " + i), awa.ct.captureEventDrop(n)) : c("Dropped field from " + i)
    }

    function a(n, t) {
        for (var i = 0; i < n.length; i++)
            if (n[i] == t) return !0;
        return !1
    }

    function l(n, i) {
        for (var e, u, y, f, h = [], l = i.length, o = 0; o < l; o++) {
            e = i[o];
            u = e.name;
            h.push(u);
            var v = e.type,
                c = n[u],
                s = e.req;
            if (awa.utils.isValueAssigned(c)) {
                if (!awa.utils.isOfCorrectType(v, c)) {
                    if (r({
                            eventName: t,
                            droppedInfo: "Incorrect type: " + u
                        }, s), s === !0) return !1;
                    delete n[u]
                }
            } else if (s === !0) return r({
                eventName: t,
                droppedInfo: "Missing field: " + u
            }, !0), !1
        }
        y = 0;
        for (f in n) f == "baseData" || f == "baseType" || a(h, f) || (r({
            eventName: t,
            droppedInfo: "Unexpected field " + f
        }, !1), delete n[f]);
        return !0
    }
    var c = awa.logger.logWarning,
        e, o, s, h;
    if (n) {
        var t = n.name,
            v = awa._schemas,
            u = n.data.baseType,
            f = t,
            i = v[t];
        if (i) {
            if (u && (e = n.data.baseData, o = i[u] ? i[u].def.fields : undefined, e && o && !l(e, o)) || f && (s = n.data, h = i[f] ? i[f].def.fields : undefined, s && h && !l(s, h))) return !1
        } else return r({
            eventName: t,
            droppedInfo: "Not registered in JSLL"
        }, !0), !1;
        return !0
    }
    return !1
};
awa.translateEventFromIntermediateStructure = function(n) {
    var u = n.name,
        t = n.data,
        i = awa.utils,
        e, r, o, f, s, h;
    if (i.isValueAssigned(t[u])) {
        e = i.extend(!0, t[u]);
        delete t[u];
        r = [];
        for (o in t) r.push(o);
        return f = i.extend(!0, t[r[0]]), delete t[r[0]], delete n.content, s = i.extend(!0, JSON.stringify(f) !== "{}" ? {
            baseData: f
        } : {}, e, {
            baseType: r[0]
        }), h = i.extend(!0, n, {
            data: s
        }), h
    }
    return n
};
awa.ix = function() {
    function e(n) {
        r = n.ix
    }

    function u() {
        var r = "%010";
        return n(t) || n(i) ? "https://dpm.demdex.net/id?d_orgid=A5FF776A5245AF830A490D44@AdobeOrg&d_cid=" + (n(t) ? "88170%01" + t + r : "") + (n(i) ? (n(t) ? "%01" : "") + "88169%01" + i + r : "") + "&d_ver=2" : undefined
    }

    function f() {
        return n(t) ? "https://ad.doubleclick.net/ddm/activity/src=6952136;type=store0;cat=jsll;u58=" + t + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" : undefined
    }

    function o(e) {
        var o, s, h;
        e && (t = e.mc1, i = e.anid, (n(t) || n(i)) && (r.a && (o = new XMLHttpRequest, o.onreadystatechange = function() {
            o.readyState == 4 && o.status == 200 && awa.ct.captureSwap(JSON.parse(o.responseText))
        }, s = u(), n(s) && (o.open("GET", s, !0), o.setRequestHeader("Accept", "application/json; charset=utf-8"), o.send())), r.g && (s = f(), n(s) && (h = new Image, h.src = s))))
    }
    var r = {},
        t = "",
        i = "",
        n = awa.utils.isValueAssigned;
    return {
        init: e,
        set: o,
        testHook: {
            getAdobeUrl: u,
            getGoogleUrl: f,
            setMc1: function(n) {
                t = n
            },
            setAnid: function(n) {
                i = n
            }
        }
    }
}();
awa.ct = function() {
    function si(t) {
        var s, f, e, o, u;
        awa.isAvailable && (n = t, r = n.autoCapture, i = n.useShortNameForContentBlob === !0 ? nt.shortNames : nt.longNames, r.pageView && wt({
            isAuto: !0
        }), r.click && (window.addEventListener ? (s = navigator.appVersion.indexOf("MSIE") !== -1 ? "click" : "mousedown", window.addEventListener(s, w, !1), window.addEventListener("keyup", w, !1)) : document.attachEvent && (document.attachEvent("onclick", w), document.attachEvent("keyup", w))), r.jsError && ei.init(), r.scroll && (f = it(null, function() {
            k({
                isAuto: !0,
                actionType: awa.actionType.SCROLL
            })
        }, n.debounceMs.scroll), window.addEventListener ? window.addEventListener("scroll", f) : window.attachEvent && window.attachEvent("onscroll", f)), r.resize && (e = it(function() {
            k({
                isAuto: !0,
                actionType: awa.actionType.RESIZE
            })
        }, null, n.debounceMs.resize), window.addEventListener ? window.addEventListener("resize", e) : window.attachEvent && window.attachEvent("onresize", e)), (r.onUnload || n.manualPageUnload) && (o = function() {
            var n = ti();
            a.v = a.v > n.v ? a.v : n.v
        }, window.addEventListener ? window.addEventListener("scroll", o) : window.attachEvent && window.attachEvent("onscroll", o)), r.onUnload && (window.addEventListener ? (window.addEventListener("beforeunload", y), window.addEventListener("unload", y)) : window.attachEvent && (window.attachEvent("onbeforeunload", y), window.attachEvent("onunload", y))), n.sendMode == 2 && (u = awa.vortexEvents.batchQueuedEvents, window.addEventListener ? (window.addEventListener("beforeunload", u), window.addEventListener("unload", u)) : window.attachEvent && (window.attachEvent("onbeforeunload", u), window.attachEvent("onunload", u))), n.authMethod == 2 && n.shareAuthStatus == !0 && awa.getSignedInStatus() && (window.addEventListener ? window.addEventListener("message", yt) : window.attachEvent && window.attachEvent("onmessage", yt)), (n.syncMuid || n.autoCapture.onLoad) && pt(awa.ct.domReadyTasksWrapper))
    }

    function yt(n) {
        var i, r;
        if ((n.origin == "https://web.vortex.data.microsoft.com" || n.origin == "https://login.microsoftonline.com") && n.data) try {
            i = JSON.parse(n.data);
            i && i.Action == "firstEventDone" && awa.firstEventDone();
            i && i.BouncedCookieExpires && (r = "Bounced=" + t.dateToISOString(new Date) + "; expires=" + new Date(i.BouncedCookieExpires).toUTCString() + "; path=/;", window.document.cookie = r)
        } catch (u) {}
    }

    function pt(n) {
        /in/.test(document.readyState) ? setTimeout(function() {
            awa.ct.onDomReadyDo(n)
        }, 100) : n.call()
    }

    function hi() {
        n.syncMuid && li();
        r.onLoad && (document.readyState === "complete" ? rt() : window.addEventListener ? window.addEventListener("load", rt) : window.attachEvent && window.attachEvent("onload", rt))
    }

    function ci() {
        awa.ct.domReadyTasks()
    }

    function f() {
        if (n.callback && typeof n.callback.pageName == "function") return n.callback.pageName();
        if (n.coreData.pageName) return n.coreData.pageName;
        var i = window.location.pathname,
            t = i.split("/");
        return t && t[t.length - 1] !== "" ? t[t.length - 1] : "Undefined"
    }

    function tt() {
        return n.coreData.title ? n.coreData.title : document.title.substring(0, 150)
    }

    function li() {
        var r = t.getMuidHost(n.muidDomain || "microsoft.com"),
            u, i;
        r ? (u = (window.location.protocol || "http:") + "//" + r + "/c.gif?DI=4050&did=1&t=", i = document.createElement("IMG"), i.style.display = "none", i.src = u, i.hidden = "", i["aria-hidden"] = "true", i.role = "presentation") : awa.logger.logWarning("Unable to get a muid host for the configured muidDomain '" + n.muidDomain + "'.  Unable to sync muid")
    }

    function ai(n) {
        return n.which ? n.which === 3 : n.button ? n.button === 2 : void 0
    }

    function vi(n) {
        return n.which ? n.which === 1 : n.button ? n.button === 1 : void 0
    }

    function yi(n) {
        return n.which ? n.which === 2 : n.button ? n.button === 4 : void 0
    }

    function pi(n) {
        if (n.keyCode) return n.keyCode === 13
    }

    function wi(n) {
        if (n.keyCode) return n.keyCode === 32
    }

    function bi(n) {
        if (n.keyCode) return n.keyCode === 195
    }

    function ki(n) {
        if (n.keyCode) return n.keyCode === 207
    }

    function w(n) {
        var u = {
                A: !0,
                BUTTON: !0,
                AREA: !0,
                INPUT: !0
            },
            i = n || window.event,
            t = i.srcElement || i.target,
            r = {
                isAuto: !0
            },
            f = ai(i),
            e;
        if (f) r.actionType = c.CLICKRIGHT;
        else if (vi(i)) r.actionType = c.CLICKLEFT;
        else if (pi(i)) r.actionType = c.KEYBOARDENTER;
        else if (wi(i)) r.actionType = c.KEYBOARDSPACE;
        else if (yi(i)) r.actionType = c.CLICKMIDDLE;
        else if (bi(i)) r.actionType = c.GAMEPADA;
        else if (ki(i)) r.actionType = c.GAMEPADMENU;
        else return;
        while (t && t.tagName)
            if (t.control && u[t.control.tagName.toUpperCase()] && (t = t.control), u[t.tagName.toUpperCase()]) {
                e = t.tagName.toUpperCase() === "INPUT" ? vt[t.type.toUpperCase()] : !0;
                e && (b(t, at) || ut(t, r, f));
                break
            } else {
                t = t.parentElement || t.parentNode;
                continue
            }
    }

    function b(n, i) {
        var r = t.findClosestByAttribute(n, i);
        return t.isValueAssigned(r) ? !0 : !1
    }

    function it(n, t, i) {
        var r;
        return function() {
            var u = this,
                f = arguments,
                e = function() {
                    r = null;
                    t && t.apply(u, f)
                },
                o = !r;
            clearTimeout(r);
            r = setTimeout(e, i);
            o && n && n.apply(u, f)
        }
    }

    function wt(i) {
        var a, l, y;
        nr();
        i = i || {};
        var w = d.getAllCookies(),
            r = {},
            c = awa.utils.extend(!0, n.coreData.pageTags);
        c.metaTags = u(r, !0);
        ot(c, w);
        typeof n.callback.pageViewPageTags == "function" && (c = t.extend(!0, c, n.callback.pageViewPageTags()));
        a = ni();
        l = {
            name: "Ms.Webi.PageView",
            data: {
                baseData: {
                    ver: p,
                    impressionGuid: s.getPageViewImpressionGuid(),
                    pageName: i.pageName || f(),
                    uri: i.uri || h(),
                    referrerUri: i.referrerUri || n.coreData.referrerUri,
                    market: r.market,
                    pageType: r.pageType,
                    product: r.product,
                    resHeight: a.h,
                    resWidth: a.w,
                    pageTags: JSON.stringify(t.extend(!0, c, i.pageTags)),
                    actionType: i.actionType || r.actionType,
                    behavior: v(i.behavior) || (r.behavior ? r.behavior : awa.behavior.UNDEFINED)
                },
                baseType: "Ms.Content.PageView",
                cookieEnabled: ht(),
                cookies: dt(w),
                isJs: !0,
                title: i.title || tt(),
                isLoggedIn: awa.getSignedInStatus(),
                serverImpressionGuid: r.serverImpressionGuid,
                isManual: !0
            },
            flags: r.isSensitive ? o : undefined
        };
        n.autoCapture.addin && (y = pr(), l.data.flashInstalled = y.installed || !1, l.data.flashVersion = y.version || "");
        e(l, i, r.env, !0)
    }

    function rt() {
        k({
            isAuto: !0,
            isDomComplete: !0
        })
    }

    function k(i) {
        var c, l, it, a, y, w, b, nt, k, g, rt;
        if (i = i || {}, c = {}, l = awa.utils.extend(!0, n.coreData.pageTags), l.metaTags = u(c), it = d.getAllCookies(), ot(l, it), i && i.isDomComplete && r.perf === !0 && window.performance) {
            if (a = {}, window.performance.timing) {
                if (window.performance.getEntriesByType)
                    if (y = window.performance.getEntriesByType("paint"), y) {
                        for (w = 0; w < y.length; w++) a[y[w].name] = y[w].startTime;
                        for (b in window.performance.timing) b != "toJSON" && (a[b] = window.performance.timing[b])
                    } else a = window.performance.timing;
                l.timing = t.stringifyField("timing", a)
            }
            r.assets === !0 && (nt = t.getPerformanceData(), nt && (l.AssetPerformance = t.stringifyField("AssetPerformance", nt)))
        }
        typeof n.callback.contentUpdatePageTags == "function" && (l = t.extend(!0, l, n.callback.contentUpdatePageTags()));
        k = st();
        g = {};
        t.isValueAssigned(i.vScrollOffset) && t.isValueAssigned(i.hScrollOffset) || (g = ti());
        rt = {
            name: "Ms.Webi.ContentUpdate",
            data: {
                baseData: {
                    ver: p,
                    impressionGuid: s.getImpressionGuid(),
                    pageName: i.pageName || f(),
                    uri: i.uri || h(),
                    market: c.market,
                    pageTags: JSON.stringify(t.extend(!0, l, i.pageTags)),
                    pageHeight: i.pageHeight || document.body.scrollHeight,
                    vpHeight: k.h,
                    vpWidth: k.w,
                    actionType: i.actionType || c.actionType,
                    behavior: v(i.behavior) || (c.behavior ? c.behavior : awa.behavior.UNDEFINED),
                    vScrollOffset: i.vScrollOffset || g.v,
                    hScrollOffset: i.hScrollOffset || g.h,
                    contentVer: ct,
                    content: bt(i.content) || ft(sr(k))
                },
                baseType: "Ms.Content.ContentUpdate",
                timings: JSON.stringify(i.timings),
                title: i.title || tt(),
                cookieEnabled: ht(),
                isJs: !0,
                isManual: !0,
                isDomComplete: !1,
                isLoggedIn: awa.getSignedInStatus(),
                serverImpressionGuid: c.serverImpressionGuid
            },
            flags: c.isSensitive ? o : undefined
        };
        e(rt, i, c.env, !1)
    }

    function di(n) {
        ut(null, n)
    }

    function gi(n, t) {
        ut(n, t)
    }

    function ut(i, c, l) {
        var g, k, it;
        if (c = c || {}, g = c.isAuto ? !1 : b(i, at), i && b(i, lt) && !g) {
            awa.logger.logWarning("The element has do-not-track attribute set.  PageAction will not be sent.");
            return
        }
        var nt = d.getAllCookies(),
            a = {},
            w = awa.utils.extend(!0, n.coreData.pageTags),
            y = {};
        i = t.returnDomObjectIfjQuery(i);
        i && (a.targetUri = vr(i), y = et(i, !0), r.msTags && (y = t.extend(y, yr(i))), l && (a.behavior = awa.behavior.CONTEXTMENU), y.bhvr && (a.behavior = v(t.extractFieldFromObject(y, "bhvr"))));
        w.metaTags = u(a);
        ot(w, nt);
        typeof n.callback.pageActionPageTags == "function" && (w = t.extend(!0, w, n.callback.pageActionPageTags(i)));
        k = n.callback.pageActionContentTags;
        it = {
            name: "Ms.Webi.PageAction",
            data: {
                baseData: {
                    ver: p,
                    impressionGuid: s.getImpressionGuid(),
                    pageName: c.pageName || f(),
                    uri: c.uri || h(),
                    pageTags: t.stringifyField("pageTags", t.extend(!0, w, c.pageTags)),
                    contentVer: ct,
                    market: a.market,
                    destUri: c.targetUri || a.targetUri,
                    pageType: a.pageType,
                    product: a.product,
                    actionType: c.actionType || a.actionType,
                    behavior: v(c.behavior) || (a.behavior ? a.behavior : awa.behavior.UNDEFINED),
                    content: bt(c.content) || t.bracketIt(JSON.stringify(t.extend(y, typeof k == "function" ? k(i) : {}, c && c.contentTags ? c.contentTags : {})))
                },
                baseType: "Ms.Content.PageAction",
                timeToAction: kt(),
                cookieEnabled: ht(),
                cookies: dt(nt),
                isJs: !0,
                title: c.title || tt(),
                isLoggedIn: awa.getSignedInStatus(),
                isManual: !0,
                referrerUri: c.referrerUri || n.coreData.referrerUri,
                serverImpressionGuid: a.serverImpressionGuid
            },
            flags: a.isSensitive ? o : undefined
        };
        e(it, c, a.env, !0)
    }

    function nr() {
        awa.timespanHandler.recordTimeSpan("dwellTime", !1);
        a.v = 0;
        g = !1
    }

    function y(t) {
        var i;
        if (!g) {
            g = !0;
            t = t || {};
            t.isDomComplete = !0;
            i = {};
            u(i);
            var r = n.callback.pageUnloadTimings,
                h = document.body.scrollHeight,
                c = {
                    name: "Ms.Webi.PageUnload",
                    data: {
                        baseData: {
                            ver: p,
                            impressionGuid: s.getImpressionGuid(),
                            pageName: t.pageName || f()
                        },
                        baseType: "Ms.Content.PageUnload",
                        dwellTime: awa.timespanHandler.recordTimeSpan("dwellTime", !0),
                        scrollDepth: t.scrollDepth || a.v.toString() + "/" + h.toString(),
                        vScrollOffset: t.vScrollOffset || a.v,
                        pageHeight: t.pageHeight || h,
                        vpHeight: st().h,
                        serverImpressionGuid: i.serverImpressionGuid,
                        timings: r ? r() : undefined
                    },
                    flags: i.isSensitive ? o : undefined
                };
            e(c, t, i.env, !0)
        }
    }

    function tr(n) {
        var t, i;
        n && (t = {}, u(t), i = {
            name: "Ms.Webi.ClientError",
            data: {
                errorInfo: JSON.stringify(n.errorInfo),
                wasDisplayed: n.displayedToUser || !1,
                impressionGuid: s.getImpressionGuid(),
                pageName: n.pageName || f(),
                uri: n.uri || h(),
                market: t.market,
                serverImpressionGuid: t.serverImpressionGuid
            },
            flags: t.isSensitive ? o : undefined
        }, e(i, n, t.env, !1))
    }

    function ir(n) {
        var t, i;
        n && (t = {}, u(t), i = {
            name: "Ms.Cll.Javascript.CorsDisallowed",
            data: {
                eventName: n.eventName,
                pageName: f(),
                uri: n.uri || h(),
                market: t.market,
                impressionGuid: s.getImpressionGuid(),
                serverImpressionGuid: t.serverImpressionGuid
            },
            flags: t.isSensitive ? o : undefined
        }, e(i, n, t.env, !1))
    }

    function rr(n) {
        var t, i;
        n && (t = {}, u(t), i = {
            name: "Ms.Cll.Javascript.EventTooLong",
            data: {
                eventName: n.eventName,
                payloadLength: n.payloadLength,
                pageName: n.pageName || f(),
                uri: n.uri || h(),
                market: t.market,
                impressionGuid: s.getImpressionGuid(),
                serverImpressionGuid: t.serverImpressionGuid
            },
            flags: t.isSensitive ? o : undefined
        }, e(i, n, t.env, !1))
    }

    function ur(n) {
        var t, i;
        n && r.invalidEvents && (t = {}, u(t), i = {
            name: "Ms.Cll.Javascript.EventDropped",
            data: {
                eventName: n.eventName,
                droppedInfo: n.droppedInfo,
                pageName: n.pageName || f(),
                uri: n.uri || h(),
                market: t.market,
                impressionGuid: s.getImpressionGuid(),
                serverImpressionGuid: t.serverImpressionGuid
            },
            flags: t.isSensitive ? o : undefined
        }, e(i, n, t.env, !1))
    }

    function fr() {
        return
    }

    function er(n) {
        var i = {},
            t;
        u(i);
        t = n.data;
        t.serverImpressionGuid = i.serverImpressionGuid;
        t.market = i.market;
        t.pageName = f();
        t.uri = h();
        e(n, undefined, i.env, !1)
    }

    function or(n, i, r) {
        r.appId && (n.appId = r.appId);
        r.serviceName && (n.serviceName = r.serviceName);
        i.isManual = r.isAuto !== !0 ? !0 : undefined;
        r.isDomComplete && (i.isDomComplete = r.isDomComplete, i.pageLoadTime = r.pageLoadTime || t.getPageLoadTime())
    }

    function bt(n) {
        return t.isValueAssigned(n) ? Object.prototype.toString.call(n) === "[object Array]" ? JSON.stringify(n) : t.bracketIt(JSON.stringify(n)) : undefined
    }

    function e(n, i, r, u) {
        n.time = t.dateToISOString(new Date);
        var f = n.data;
        i && or(n, f, i);
        r && (n.ext = {
            app: {
                env: r
            }
        });
        oi.SendOrScheduleEvent(n, u)
    }

    function kt() {
        if (window.performance && window.performance.timing) {
            var n = window.performance.timing.navigationStart;
            if (n !== 0) return (new Date).getTime() - n
        }
        return -1
    }

    function sr(n) {
        return {
            top: 0,
            bottom: n.h,
            left: 0,
            right: n.w
        }
    }

    function ft(r) {
        var u = [],
            f = document.querySelectorAll(t.bracketIt(i.areaName) + "," + t.bracketIt(i.slotNumber) + "," + t.bracketIt(n.biBlobAttributeTag));
        return hr(f, u, r), JSON.stringify(u)
    }

    function hr(n, i, r) {
        var u, f, e;
        if (n)
            for (u = 0; u < n.length; u++) f = n[u], b(f, lt) || t.isElementTrulyVisible(f, r) && (e = et(f, !1), e && i.push(e))
    }

    function cr(t) {
        for (var e = [], o = [], l = ">", a = n.biBlobAttributeTag, v = "data-module-id", s = undefined, r, u, h, c, f; t && t.getAttribute;) h = t.getAttribute(a) || t[a], c = t.getAttribute(v) || t[v], h ? (f = JSON.parse(h), f && (r = f.cN || f.cT, u = f.id || undefined, (r || u) && (e.push(r), c && (s = r), o.push(u)))) : (r = t.getAttribute(i.contentName) || t.getAttribute(i.contentType), u = t.getAttribute(i.id) || undefined, (r || u) && (e.push(r), c && (s = r), o.push(u))), t = t.parentElement;
        return {
            lineage: e.join(l),
            lineageById: o.join(l),
            containerName: s
        }
    }

    function et(r, u) {
        var f, c, l, o, a, s, h, e, v;
        if (!r) return "";
        if (f = {}, c = awa.utils.findClosestByAttribute(r, n.biBlobAttributeTag), c && (l = c.getAttribute(n.biBlobAttributeTag)), l) f = JSON.parse(l);
        else
            for (o = t.findClosestByAttribute(r, t.bracketIt(i.id)), o = t.returnDomObjectIfjQuery(r), a = t.findClosestByAttribute(r, i.areaName), s = awa.utils.extend({}, ar(a)), f = {
                    id: o.getAttribute(i.id) || r.id || "",
                    aN: s.areaName,
                    sN: o.getAttribute(i.slotNumber),
                    cN: o.getAttribute(i.contentName) || lr(r) || o.getAttribute("alt") || "",
                    cS: o.getAttribute(i.contentSource) || s.contentSource,
                    tN: s.templateName,
                    pid: o.getAttribute(i.productId),
                    cT: o.getAttribute(i.contentType) || s.type
                }, f.id && f.aN && f.sN && f.cN || awa.logger.logWarning("Invalid content blob.  Missing required attributes (id, aN/area, sN/slot), cN/contentName.  Content information will still be collected!"), i.isShortNames || (f = {
                    contentId: f.id,
                    areaName: f.aN,
                    slotNumber: f.sN,
                    contentName: f.cN,
                    contentSource: f.cS,
                    templateName: f.tN,
                    productId: f.pid,
                    contentType: f.cT
                }), h = 0; h < o.attributes.length; h++)(e = o.attributes[h], e.name !== i.id && e.name !== i.areaName && e.name !== i.slotNumber && e.name !== i.contentName && e.name !== i.contentSource && e.name !== i.templateName && e.name !== i.productId && e.name !== i.contentType && e.name.indexOf("data-bi-") !== -1) && (v = e.name.replace("data-bi-", ""), f[v] = e.value);
        return awa.utils.removeInvalidElements(f), n.autoCapture.lineage && u && (f = awa.utils.extend(f, cr(r))), f
    }

    function lr(t) {
        if (n.useDefaultContentName === !1 || ii(t) || !t.tagName) return "";
        var i;
        switch (t.tagName) {
            case "A":
                i = document.all ? t.innerText || t.innerHTML : t.text || t.innerHTML;
            case "IMG":
            case "AREA":
                i = t.alt;
            default:
                i = t.value || t.name || t.alt || t.innerText || t.id
        }
        return i.substring(0, fi)
    }

    function ar(n) {
        return n = t.returnDomObjectIfjQuery(n), n ? {
            areaName: n.getAttribute(i.areaName),
            templateName: n.getAttribute(i.templateName),
            contentSource: n.getAttribute(i.contentSource),
            product: n.getAttribute(i.productId),
            type: n.getAttribute(i.contentType)
        } : void 0
    }

    function dt(t) {
        var o = "",
            s = {},
            i = [],
            f = n.cookiesToCollect,
            u, r, e;
        if (n.shareAuthStatus === !1) i = f;
        else
            for (u = 0; u < f.length; u++) f[u] !== "ANON" && i.push(f[u]);
        try {
            try {
                window.varCustomerCookies && window.varCustomerCookies.length > 0 && (i = i.concat(window.varCustomerCookies))
            } catch (h) {}
            for (r in i) i.hasOwnProperty(r) && (s.hasOwnProperty(i[r]) || (s[i[r]] = "", e = t[i[r]], e && e !== "" && (o += i[r] + "=" + e + ";")))
        } catch (h) {}
        return o
    }

    function vr(n) {
        var t = "",
            i, r;
        switch (n.tagName) {
            case "A":
            case "AREA":
                t = n.href || "";
                break;
            case "IMG":
                t = wr(n);
                break;
            case "INPUT":
                i = n.type;
                r = window.event;
                i && vt[i.toUpperCase()] && (t = n.form ? n.form.action || window.location.pathname : window.location.pathname)
        }
        return t
    }

    function yr(n) {
        for (var r = {}, t, i; n;)
            if (!ii(n)) {
                for (t in n.attributes) t && n.attributes[t] && (i = n.attributes[t].name, i && i.toLowerCase().indexOf("ms.") === 0 && (r[i] = n.attributes[t].value));
                n = n.parentElement || n.parentNode
            } return r
    }

    function pr() {
        var n = {},
            i, r, t, u;
        if (navigator.plugins["Shockwave Flash"]) n.installed = !0, i = navigator.plugins["Shockwave Flash"], n.version = i.description.split(" ")[2];
        else if (navigator.userAgent.indexOf("MSIE") !== -1)
            for (r = (new Date).getFullYear() - 1992, t = r; t > 0; t--) try {
                u = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + t);
                n.installed = !0;
                n.version = t + ".0";
                break
            } catch (f) {}
        return n
    }

    function ot(t, i) {
        if (n.enabledFeatures) {
            if (t.enabledFeatures) return;
            var r = i.Features;
            r && (t.enabledFeatures = r)
        }
    }

    function u(i, r) {
        var u = {},
            f = {};
        return n.autoCapture.awaTags && (u = gt("awa-", !0)), i.env = l(u, n.coreData, "env"), i.pageType = l(u, n.coreData, "pageType"), i.product = l(u, n.coreData, "product"), i.market = l(u, n.coreData, "market"), i.serverImpressionGuid = l(u, n.coreData, "serverImpressionGuid"), i.isSensitive = l(u, n.coreData, "isSensitive"), !i.behavior && r && (i.behavior = v(l(u, n.coreData, "behavior"))), n.autoCapture.msTags && (f = gt("ms.", !1), u = t.extend(!0, u, f)), u
    }

    function l(n, i, r) {
        return i[r] ? i[r] : t.extractFieldFromObject(n, r)
    }

    function gt(n, t) {
        for (var f = {}, i, e, o, u = document.querySelectorAll("meta"), r = 0; r < u.length; r++) i = u[r], i.name && (e = i.name.toLowerCase(), e.indexOf(n) === 0 && (o = t ? i.name.replace(n, "") : i.name, f[o] = i.content));
        return f
    }

    function ni() {
        var n = {
            h: 0,
            w: 0
        };
        return window.screen && (n.h = screen.height, n.w = screen.width), n
    }

    function st() {
        var n = {
            h: 0,
            w: 0
        };
        return window.screen && (n.h = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight, n.w = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth), n
    }

    function ti() {
        return {
            h: parseInt(document.body.scrollLeft || document.documentElement.scrollLeft || window.pageXOffset || 0, 10),
            v: parseInt(document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0, 10)
        }
    }

    function ht() {
        return navigator.cookieEnabled
    }

    function wr(n) {
        var r = n,
            i;
        if (r && (i = t.findClosestAnchor(r), i && i.length === 1)) {
            if (i[0].href) return i[0].href;
            if (i[0].src) return i[0].src
        }
        return ""
    }

    function ii(n) {
        if (!n || !n.attributes) return !1;
        try {
            var i = n.getAttribute("data-dc");
            return t.isValueAssigned(i) ? i.toLowerCase() === "pii" ? !0 : !1 : !1
        } catch (r) {
            return !1
        }
    }

    function ri(n) {
        for (var t = 0; t < awa.behaviorKeys.length; t++)
            if (awa.behavior[awa.behaviorKeys[t]] === n) return !0;
        return awa.logger.logWarning("Unsupported behavior: " + n + "."), !1
    }

    function v(n) {
        var i, r;
        if (t.isValueAssigned(n))
            if (i = Number(n), t.isOfCorrectType("uint16", i)) {
                if (ri(i)) return i
            } else if (t.isOfCorrectType("string", n) && (r = awa.behavior[n.toUpperCase()], t.isOfCorrectType("uint16", r))) return r;
        return undefined
    }

    function h() {
        return ui(window.location)
    }

    function ui(i) {
        var r, u, f, e;
        return n.coreData.requestUri === "" && i ? (r = i.protocol + "//" + i.hostname + (t.isValueAssigned(i.port) ? ":" + i.port : "") + i.pathname, n.urlCollectHash && (r += i.hash), n.urlCollectQuery && (u = i.search, u || (f = window.location.hash, e = f.indexOf("?"), e != -1 && (u = f.slice(e))), r += u), r) : n.coreData.requestUri
    }
    var p = "1.0",
        ct = "2.0",
        fi = 200,
        o = 524288,
        n = {},
        r = {},
        d = awa.cookie,
        ei = awa.errorHandler,
        s = awa.ids,
        oi = awa.vortexEvents,
        t = awa.utils,
        c = awa.actionType,
        a = {
            h: 0,
            v: 0
        },
        lt = "data-bi-dnt",
        at = "data-bi-mto",
        g = !1,
        nt = {
            longNames: {
                isShortNames: !1,
                id: "data-bi-id",
                areaName: "data-bi-area",
                slotNumber: "data-bi-slot",
                contentName: "data-bi-name",
                contentSource: "data-bi-source",
                templateName: "data-bi-view",
                productId: "data-bi-product",
                contentType: "data-bi-type"
            },
            shortNames: {
                isShortNames: !0,
                id: "data-bi-id",
                areaName: "data-bi-an",
                slotNumber: "data-bi-sn",
                contentName: "data-bi-cn",
                contentSource: "data-bi-cs",
                templateName: "data-bi-tn",
                productId: "data-bi-pid",
                contentType: "data-bi-ct"
            }
        },
        i = nt.longNames,
        vt = {
            BUTTON: !0,
            CHECKBOX: !0,
            RADIO: !0,
            RESET: !0,
            SUBMIT: !0
        };
    return {
        initialize: si,
        capturePageView: wt,
        captureContentUpdate: k,
        capturePageAction: gi,
        captureContentPageAction: di,
        capturePageUnload: y,
        captureCorsDisallowed: ir,
        captureEventTooLong: rr,
        captureClientError: tr,
        captureEventDrop: ur,
        captureQos: er,
        captureSwap: fr,
        domReadyTasksWrapper: ci,
        onDomReadyDo: pt,
        domReadyTasks: hi,
        getTimeToClick: kt,
        getPageContent: ft,
        getUri: ui,
        testHook: {
            isBehaviorValid: ri,
            getValidBehavior: v,
            collectMetaTagsAndSetEventProperty: u,
            getElementContent: et,
            getPageContent: ft,
            debounce: it,
            getScreenResolution: ni,
            getViewportDimensions: st
        }
    }
}();
awa.service = function() {
    function f(n) {
        typeof n == "function" ? t = n : typeof n == "string" && (t = function() {
            return n
        })
    }
    var i = awa.timespanHandler,
        r = !0,
        u = !1,
        t = null,
        n = function(n) {
            var h, c;
            if (typeof jQuery == "function") {
                r && ($.support.cors = !0);
                var s = n.additionalHeaders || {},
                    l = n.body,
                    v = l ? JSON.stringify(l) : n.data || undefined,
                    y = n.maxRetry || 0,
                    o = 0,
                    p = $.noop,
                    a = n.operationName || n.url,
                    w = n.errorFormatter || function(n) {
                        return n
                    },
                    b = awa.ids,
                    e, f = {
                        url: n.url,
                        type: n.method,
                        data: v,
                        crossDomain: !0,
                        headers: {},
                        success: n.success,
                        timeout: n.timeout,
                        error: n.error,
                        jsonp: n.jsonp,
                        jsonpCallback: n.jsonpCallback,
                        cache: n.cache,
                        beforeSend: function(t) {
                            if (p(t), n.contractVersion && t.setRequestHeader("MS-Contract-Version", n.contractVersion), (!awa.utils.isValueAssigned(n.addCvToRequestHeader) && u || n.addCvToRequestHeader) && awa.cv.isValid(e) && t.setRequestHeader("MS-CV", e), s)
                                for (var i in s) t.setRequestHeader(i, s[i])
                        }
                    };
                return n.dataType && (f.dataType = n.dataType), n.noCacheBusting || (f.cache = !1), n.contentType && (f.contentType = n.contentType), n.accept && (f.headers.Accept = n.accept), n.accepts && (f.accepts = n.accepts), n.async && (f.async = n.async), n.xhrFields && (f.xhrFields = n.xhrFields), n.complete && (f.complete = n.complete), n.contents && (f.contents = n.contents), n.context && (f.context = n.context), n.dataFilter && (f.dataFilter = n.dataFilter), n.global && (f.global = n.global), n.ifModified && (f.ifModified = n.ifModified), n.isLocal && (f.isLocal = n.isLocal), n.mimeType && (f.mimeType = n.mimeType), n.password && (f.password = n.password), awa.utils.isValueAssigned(n.processData) && (f.processData = n.processData), n.scriptCharset && (f.scriptCharset = n.scriptCharset), n.statusCode && (f.statusCode = n.statusCode), n.traditional && (f.traditional = n.traditional), n.type && (f.type = n.type), n.username && (f.username = n.username), n.xhr && (f.xhr = n.xhr), e = awa.cv.isValid(n.cV) ? n.cV : awa.cv.increment(), h = function(i, r, u) {
                    var s = i.getResponseHeader("Content-Length"),
                        h = {
                            name: "Ms.Webi.OutgoingRequest",
                            cV: e,
                            data: {
                                baseData: {
                                    operationName: n.currentOperationName || awa.ct.getUri(document.location),
                                    targetUri: t ? t(f.url) : f.url,
                                    latencyMs: u,
                                    serviceErrorCode: !r && i.responseJSON && i.responseJSON.code && !isNaN(i.responseJSON.code) ? i.responseJSON.code : -1,
                                    succeeded: r,
                                    requestMethod: f.type,
                                    responseContentType: f.dataType,
                                    protocolStatusCode: i.status.toString(),
                                    dependencyOperationName: a,
                                    dependencyOperationVersion: n.version && n.version.toString(),
                                    dependencyName: n.serviceName,
                                    dependencyType: "WebService",
                                    responseSizeBytes: s && parseInt(s, 10)
                                },
                                baseType: "Ms.Qos.OutgoingServiceRequest",
                                impressionGuid: b.getImpressionGuid(),
                                message: r ? undefined : awa.utils.stringifyField("errorMessage", i.errorThrown),
                                retryCount: o,
                                customData: n.customDataCallBack && typeof n.customDataCallBack == "function" ? JSON.stringify(n.customDataCallBack(i)) : undefined
                            }
                        };
                    n.QosCallback && typeof n.QosCallback == "function" && n.QosCallback(i, h);
                    awa.ct.captureQos(h)
                }, c = function() {
                    var t = a + "_Retry_" + o;
                    return i.recordTimeSpan(t), $.ajax(f).then(function(n, r, u) {
                        var f = i.recordTimeSpan(t, !0);
                        return h(u, !0, f), u
                    }, function(r, u) {
                        var s = i.recordTimeSpan(t, !0),
                            f;
                        return h(r, !1, s), f = $.Deferred(), y > o && (r.status === 0 || r.status >= 500 && r.status < 600) ? (o++, e = awa.cv.isValid(n.cV) ? awa.cv.incrementExternal(e) : awa.cv.increment(), setTimeout(function() {
                            c().done(f.resolve).fail(f.reject)
                        }, 50)) : f.reject(r, u), f.promise()
                    })
                }, c().then(function(n, t, i) {
                    return i
                }, function(t) {
                    return w(t, n)
                })
            }
            awa.logger.logError("jQuery is not defined, cannot use service module")
        };
    return {
        post: function(t) {
            return n(awa.utils.extend({}, t, {
                method: "POST"
            }))
        },
        get: function(t) {
            return n(awa.utils.extend({
                maxRetry: 1
            }, t, {
                method: "GET"
            }))
        },
        put: function(t) {
            return n(awa.utils.extend({}, t, {
                method: "PUT"
            }))
        },
        del: function(t) {
            return n(awa.utils.extend({}, t, {
                method: "DELETE"
            }))
        },
        patch: function(t) {
            return n(awa.utils.extend({}, t, {
                method: "PATCH"
            }))
        },
        doNotChangeSupportCors: function() {
            r = !1
        },
        alwaysAddCvToRequestHeader: function() {
            u = !0
        },
        setTargetUriOverride: f
    }
}();