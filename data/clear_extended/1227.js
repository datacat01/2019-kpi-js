function getDefaultAadUser(e) {
    var t, n = "aadData.userList[",
        r = null;
    if (e == r || void 0 === e) return t = "Null or Undefined AAD user data.", LoggingUtils.log(t, enableConsoleLog), {
        upn: r,
        validSignedInUsers: 0,
        totalSignedInUsers: 0,
        errorMessage: t
    };
    if (e.error != r && "" !== e.error) return t = "Error '" + e.error + "' found in the data.", LoggingUtils.log(t, enableConsoleLog), {
        upn: r,
        validSignedInUsers: 0,
        totalSignedInUsers: 0,
        errorMessage: t
    };
    if (e.userList == r || void 0 === e.userList) return t = "AAD UserList is null or undefined.", LoggingUtils.log(t, enableConsoleLog), {
        upn: r,
        validSignedInUsers: 0,
        totalSignedInUsers: 0,
        errorMessage: t
    };
    if (e.userList.length <= 0) return t = "No signed in AAD user found.", LoggingUtils.log(t, enableConsoleLog), {
        upn: r,
        validSignedInUsers: 0,
        totalSignedInUsers: 0,
        errorMessage: t
    };
    for (var o = [], i = 0; i < e.userList.length; i++) e.userList[i] != r && void 0 !== e.userList[i] ? e.userList[i].idp.toLocaleUpperCase() !== Constants.Idp.msaFed || msaFedEnabled ? e.userList[i].memberName != r && void 0 !== e.userList[i].memberName && "" !== e.userList[i].memberName ? e.userList[i].authenticatedState === Constants.AuthState.signedIn ? o.push(e.userList[i]) : LoggingUtils.warn(e.userList[i].memberName + "'s authState is '" + e.userList[i].authenticatedState + "'. Skipping this entry.", enableConsoleLog) : LoggingUtils.warn("Member name (i.e. UPN/email-address) is null, undefined or empty. This is unexpected. Skipping " + i + " entry.", enableConsoleLog) : LoggingUtils.warn(n + i + "] is for MsaFed. Skipping this entry based on provided configuration.", enableConsoleLog) : LoggingUtils.warn(n + i + "] is null or undefined. Skipping this entry.", enableConsoleLog);
    return 1 !== o.length ? (t = "Found '" + o.length + "' AAD users in required " + Constants.AuthState.signedIn + " auth state.Returning null UPN. Null UPN is an expected response so after re-direction to AAD portal user is given choice to choose specific UPN to sign in with.", LoggingUtils.log(t, enableConsoleLog), {
        upn: r,
        validSignedInUsers: o.length,
        totalSignedInUsers: e.userList.length,
        errorMessage: t
    }) : 1 === o.length ? {
        upn: o[0].memberName,
        validSignedInUsers: o.length,
        totalSignedInUsers: e.userList.length
    } : (t = "Unknown error occurred while finding default signed in AAD user.", LoggingUtils.error(t, enableConsoleLog), {
        upn: r,
        validSignedInUsers: 0,
        totalSignedInUsers: 0,
        errorMessage: t
    })
}

function getDefaultMsaUser(e) {
    var t, n = null;
    return e == n || void 0 === e ? (t = "Null or Undefined MSA user data.", LoggingUtils.log(t, enableConsoleLog), {
        upn: n,
        validSignedInUsers: 0,
        totalSignedInUsers: 0,
        errorMessage: t
    }) : e.error != n && "" !== e.error ? (t = "Error '" + e.error + "' found in the data.", LoggingUtils.log(t, enableConsoleLog), {
        upn: n,
        validSignedInUsers: 0,
        totalSignedInUsers: 0,
        errorMessage: t
    }) : e.userList == n || void 0 === e.userList ? (t = "MSA UserList is null or undefined.", LoggingUtils.log(t, enableConsoleLog), {
        upn: n,
        validSignedInUsers: 0,
        totalSignedInUsers: 0,
        errorMessage: t
    }) : e.userList.length <= 0 ? (t = "No signed in MSA user found.", LoggingUtils.log(t, enableConsoleLog), {
        upn: n,
        validSignedInUsers: 0,
        totalSignedInUsers: 0,
        errorMessage: t
    }) : e.userList.length > 1 ? (t = "Found '" + e.userList.length + "' signed in MSA users. This is an unexpected scenario.", LoggingUtils.log(t, enableConsoleLog), {
        upn: n,
        validSignedInUsers: 0,
        totalSignedInUsers: e.userList.length,
        errorMessage: t
    }) : 1 === e.userList.length ? e.userList[0] == n || void 0 === e.userList[0] ? (t = "Null or undefined MSA user data found. This is unexpected.", LoggingUtils.error(t, enableConsoleLog), {
        upn: n,
        validSignedInUsers: 0,
        totalSignedInUsers: e.userList.length,
        errorMessage: t
    }) : e.userList[0].memberName == n || void 0 === e.userList[0].memberName || "" === e.userList[0].memberName ? (t = "Member name (i.e.UPN / email - address) is null, undefined or empty. This is unexpected.", LoggingUtils.error(t, enableConsoleLog), {
        upn: n,
        validSignedInUsers: 0,
        totalSignedInUsers: e.userList.length,
        errorMessage: t
    }) : {
        upn: e.userList[0].memberName,
        validSignedInUsers: e.userList.length,
        totalSignedInUsers: e.userList.length
    } : (t = "Unknown error occurred while finding default signed in MSA user.", LoggingUtils.error(t, enableConsoleLog), {
        upn: n,
        validSignedInUsers: 0,
        totalSignedInUsers: 0,
        errorMessage: t
    })
}

function findDefaultSignedInUser(e, t, n, r, o) {
    var i, s = !0,
        a = !1,
        u = null,
        l = TimerUtils.timer(),
        c = getDefaultMsaUser(t),
        d = getDefaultAadUser(n);
    if (c == u || d == u) return i = {
        preferredIdp: AuthType[e],
        signedInMsa: 0,
        signedInAad: 0,
        totalSignedIn: 0,
        timeForMsaInMsec: 0,
        timeForAadInMsec: 0,
        timeToProcessAfterReceivedInMsec: l.ms,
        foundDefault: a,
        foundPreferred: a,
        errorCode: ErrorCode[ErrorCode.InvalidDataReceivedFromIdp],
        errorMessage: "Data received from AAD or MSA wasn't expected."
    }, {
        op: Operation[Operation.Error],
        idp: AuthType[e],
        upn: u,
        errorCode: ErrorCode[ErrorCode.InvalidDataReceivedFromIdp],
        telemetry: i
    };
    var f = new IdpUserResult(c),
        p = new IdpUserResult(d);
    return AuthType[e] === AuthType[AuthType.aad] && p.containsValidUser() ? (i = {
        preferredIdp: AuthType[e],
        signedInMsa: f.totalSignedInUsers,
        signedInAad: p.totalSignedInUsers,
        totalSignedIn: f.totalSignedInUsers + p.totalSignedInUsers,
        timeForMsaInMsec: r,
        timeForAadInMsec: o,
        timeToProcessAfterReceivedInMsec: l.ms,
        foundDefault: s,
        foundPreferred: s,
        errorCode: u,
        errorMessage: u
    }, {
        op: Operation[Operation.Redirect],
        idp: AuthType[AuthType.aad],
        upn: p.upn,
        errorCode: u,
        telemetry: i
    }) : AuthType[e] === AuthType[AuthType.aad] && p.validSignedInUsers > 1 ? (i = {
        preferredIdp: AuthType[e],
        signedInMsa: f.totalSignedInUsers,
        signedInAad: p.totalSignedInUsers,
        totalSignedIn: f.totalSignedInUsers + p.totalSignedInUsers,
        timeForMsaInMsec: r,
        timeForAadInMsec: o,
        timeToProcessAfterReceivedInMsec: l.ms,
        foundDefault: a,
        foundPreferred: s,
        errorCode: u,
        errorMessage: u
    }, {
        op: Operation[Operation.Redirect],
        idp: AuthType[AuthType.aad],
        upn: u,
        errorCode: u,
        telemetry: i
    }) : AuthType[e] === AuthType[AuthType.msa] && f.containsValidUser() ? (i = {
        preferredIdp: AuthType[e],
        signedInMsa: f.totalSignedInUsers,
        signedInAad: p.totalSignedInUsers,
        totalSignedIn: f.totalSignedInUsers + p.totalSignedInUsers,
        timeForMsaInMsec: r,
        timeForAadInMsec: o,
        timeToProcessAfterReceivedInMsec: l.ms,
        foundDefault: s,
        foundPreferred: s,
        errorCode: u,
        errorMessage: u
    }, {
        op: Operation[Operation.Redirect],
        idp: AuthType[AuthType.msa],
        upn: f.upn,
        errorCode: u,
        telemetry: i
    }) : (i = {
        preferredIdp: AuthType[e],
        signedInMsa: f.totalSignedInUsers,
        signedInAad: p.totalSignedInUsers,
        totalSignedIn: f.totalSignedInUsers + p.totalSignedInUsers,
        timeForMsaInMsec: r,
        timeForAadInMsec: o,
        timeToProcessAfterReceivedInMsec: l.ms,
        foundDefault: s,
        foundPreferred: a,
        errorCode: u,
        errorMessage: u
    }, p.containsValidUser() ? {
        op: Operation[Operation.Redirect],
        idp: AuthType[AuthType.aad],
        upn: p.upn,
        errorCode: u,
        telemetry: i
    } : p.validSignedInUsers > 1 ? {
        op: Operation[Operation.Redirect],
        idp: AuthType[AuthType.aad],
        upn: u,
        errorCode: u,
        telemetry: i
    } : f.containsValidUser() ? {
        op: Operation[Operation.Redirect],
        idp: AuthType[AuthType.msa],
        upn: f.upn,
        errorCode: u,
        telemetry: i
    } : (i = {
        preferredIdp: AuthType[e],
        signedInMsa: f.totalSignedInUsers,
        signedInAad: p.totalSignedInUsers,
        totalSignedIn: f.totalSignedInUsers + p.totalSignedInUsers,
        timeForMsaInMsec: r,
        timeForAadInMsec: o,
        timeToProcessAfterReceivedInMsec: l.ms,
        foundDefault: a,
        foundPreferred: a,
        errorCode: ErrorCode[ErrorCode.NoAccountFound],
        errorMessage: u
    }, {
        op: Operation[Operation.Error],
        idp: u,
        upn: u,
        errorCode: ErrorCode[ErrorCode.NoAccountFound],
        telemetry: i
    }))
}

function convertAadUserData(e) {
    var t = null;
    if (e == t || void 0 === e || "" === e) return LoggingUtils.log("Empty AAD user data. Returning null.", enableConsoleLog), t;
    var n;
    try {
        n = JSON.parse(e)
    } catch (e) {
        return LoggingUtils.error("Exception occurred while parsing received MSA data. Returning null. Exception details: " + e.message + ".", enableConsoleLog), t
    }
    return void 0 === n ? (LoggingUtils.error("Couldn't parse provided AAD user data. Returning null.", enableConsoleLog), t) : n
}

function convertMsaUserData(e) {
    var t = null;
    if (e == t || void 0 === e || "" === e) return LoggingUtils.log("Empty MSA user data. Returning null.", enableConsoleLog), t;
    var n;
    try {
        n = JSON.parse(e)
    } catch (e) {
        return LoggingUtils.error("Exception occurred while parsing received MSA data. Returning null. Exception details: " + e.message + ".", enableConsoleLog), t
    }
    return void 0 === n ? (LoggingUtils.error("Couldn't parse provided MSA user data. Returning null.", enableConsoleLog), t) : n
}

function isValidMsaUser(e) {
    var t = convertMsaUserData(e),
        n = getDefaultMsaUser(t);
    if (null != n) {
        return new IdpUserResult(n).containsValidUser()
    }
    return !1
}

function isValidAadUser(e) {
    var t = convertAadUserData(e),
        n = getDefaultAadUser(t);
    if (null != n) {
        return new IdpUserResult(n).containsValidUser()
    }
    return !1
}

function getAadData(e, t) {
    function n(o) {
        var u = "" + Constants.UriScheme.https + Constants.UriSeparator.separator + e.host;
        o.origin.toLocaleUpperCase() === u.toLocaleUpperCase() && (r = o.data, LoggingUtils.log("Data received from AAD PostMessage: " + r, enableConsoleLog), window.removeEventListener(s, n), IframeUtils.deleteIframe(i), t(r, l.ms - a))
    }
    if (null === e || void 0 === e) LoggingUtils.log("AAD config data is null or undefined. Skipping getting users data from AAD.", enableConsoleLog), t(null);
    else {
        var r, o = "" + Constants.UriScheme.https + Constants.UriSeparator.separator + e.host + Constants.UriFormats.aadSavedUsers + e.replyUri + "&appid=" + e.appId,
            i = "aadIframe",
            s = "message",
            a = 0,
            u = IframeUtils.getIframe(o, i),
            l = TimerUtils.timer();
        window.addEventListener(s, n, !1), document.body.appendChild(u), a = l.ms, LoggingUtils.log("Requested Aad: " + a + "msec", enableConsoleLog)
    }
}

function getMsaData(e, t) {
    function n(o) {
        var u = "" + Constants.UriScheme.https + Constants.UriSeparator.separator + e.host;
        o.origin.toLocaleUpperCase() === u.toLocaleUpperCase() && (r = o.data, LoggingUtils.log("Data received from MSA PostMessage: " + r, enableConsoleLog), window.removeEventListener(s, n), IframeUtils.deleteIframe(i), t(r, l.ms - a))
    }
    if (null === e || void 0 === e) LoggingUtils.log("MSA config data is null or undefined. Skipping getting users data from MSA.", enableConsoleLog), t(null);
    else {
        var r, o = "" + Constants.UriScheme.https + Constants.UriSeparator.separator + e.host + Constants.UriFormats.msaMeSrf + e.replyUri,
            i = "msaIframe",
            s = "message",
            a = 0,
            u = IframeUtils.getIframe(o, i),
            l = TimerUtils.timer();
        window.addEventListener(s, n, !1), document.body.appendChild(u), a = l.ms, LoggingUtils.log("Requested Msa: " + a + "msec", enableConsoleLog)
    }
}

function getAadMsaData(e, t) {
    var n, r, o = !1,
        i = function(i, s, a, u) {
            void 0 !== i ? (n = i, LoggingUtils.log("Time taken to Msa user data: " + s, enableConsoleLog), AuthType[e.preferredIdp] === AuthType[AuthType.msa] && !o && isValidMsaUser(n) && (LoggingUtils.log("Based on preferred IDP settings returning MSA user data as it is available (ignoring AAD).", enableConsoleLog), o = !0, t(n, s, null, 0))) : void 0 !== a && (r = a, LoggingUtils.log("Time taken to get AAD user data: " + u, enableConsoleLog), AuthType[e.preferredIdp] === AuthType[AuthType.aad] && !o && isValidAadUser(r) && (LoggingUtils.log("Based on preferred IDP settings returning AAD user data (ignoring MSA).", enableConsoleLog), o = !0, t(null, 0, r, u))), void 0 !== n && void 0 !== r && !o && t(n, s, r, u)
        };
    LoggingUtils.log("Initialized", enableConsoleLog), getMsaData(e.msaConfig, function(e, t) {
        i(e, t, void 0, void 0)
    }), getAadData(e.aadConfig, function(e, t) {
        i(void 0, void 0, e, t)
    })
}

function getAccount(e, t) {
    var n, r, o = null,
        i = TimerUtils.timer();
    if (void 0 === e || e === o) r = "configurations cannot be null or undefined.", LoggingUtils.error(r, enableConsoleLog), n = {
        preferredIdp: o,
        signedInMsa: 0,
        signedInAad: 0,
        totalSignedIn: 0,
        timeForMsaInMsec: 0,
        timeForAadInMsec: 0,
        timeToProcessAfterReceivedInMsec: 0,
        timeToGetAccountInMsec: i.ms,
        foundDefault: !1,
        foundPreferred: !1,
        errorCode: ErrorCode[ErrorCode.InvalidConfigurations],
        errorMessage: r
    }, t({
        op: Operation[Operation.Error],
        idp: o,
        upn: o,
        errorCode: ErrorCode[ErrorCode.InvalidConfigurations],
        telemetry: n
    });
    else {
        enableConsoleLog = e.enableConsoleLogging, LoggingUtils.log("Started", enableConsoleLog);
        var s = new DefaultSignInOptions(e),
            a = s.isValid();
        a.isPassed ? (msaFedEnabled = e.msaFedEnabled, getAadMsaData(e, function(n, r, o, s) {
            var a = findDefaultSignedInUser(e.preferredIdp, convertMsaUserData(n), convertAadUserData(o), r, s);
            a.telemetry.timeToGetAccountInMsec = i.ms, LoggingUtils.log("Completed: " + JSON.stringify(a), enableConsoleLog), t(a)
        })) : (r = a.errorMessage, LoggingUtils.error(r, enableConsoleLog), n = {
            preferredIdp: o,
            signedInMsa: 0,
            signedInAad: 0,
            totalSignedIn: 0,
            timeForMsaInMsec: 0,
            timeForAadInMsec: 0,
            timeToProcessAfterReceivedInMsec: 0,
            timeToGetAccountInMsec: i.ms,
            foundDefault: !1,
            foundPreferred: !1,
            errorCode: ErrorCode[ErrorCode.InvalidConfigurations],
            errorMessage: r
        }, LoggingUtils.log("Completed with error", enableConsoleLog), t({
            op: Operation[Operation.Error],
            idp: o,
            upn: o,
            errorCode: ErrorCode[ErrorCode.InvalidConfigurations],
            telemetry: n
        }))
    }
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = ie.type(e);
        return "function" !== n && !ie.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ie.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ge.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e)
        }
        return ie.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function i(e) {
        var t = {};
        return ie.each(e.match(xe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        Y.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), ie.ready()
    }

    function a() {
        this.expando = ie.expando + a.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Ie, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Le.test(n) ? ie.parseJSON(n) : n)
                } catch (e) {}
                Se.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l(e, t, n, r) {
        var o, i = 1,
            s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return ie.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (ie.cssNumber[t] ? "" : "px"),
            c = (ie.cssNumber[t] || "px" !== l && +u) && Ee.exec(ie.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                i = i || ".5", c /= i, ie.style(e, t, c + l)
            } while (i !== (i = a() / u) && 1 !== i && --s)
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
    }

    function c(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], n) : n
    }

    function d(e, t) {
        for (var n = 0, r = e.length; r > n; n++) Ae.set(e[n], "globalEval", !t || Ae.get(t[n], "globalEval"))
    }

    function f(e, t, n, r, o) {
        for (var i, s, a, u, l, f, p = t.createDocumentFragment(), h = [], g = 0, m = e.length; m > g; g++)
            if ((i = e[g]) || 0 === i)
                if ("object" === ie.type(i)) ie.merge(h, i.nodeType ? [i] : i);
                else if (Fe.test(i)) {
            for (s = s || p.appendChild(t.createElement("div")), a = (ke.exec(i) || ["", ""])[1].toLowerCase(), u = qe[a] || qe._default, s.innerHTML = u[1] + ie.htmlPrefilter(i) + u[2], f = u[0]; f--;) s = s.lastChild;
            ie.merge(h, s.childNodes), s = p.firstChild, s.textContent = ""
        } else h.push(t.createTextNode(i));
        for (p.textContent = "", g = 0; i = h[g++];)
            if (r && ie.inArray(i, r) > -1) o && o.push(i);
            else if (l = ie.contains(i.ownerDocument, i), s = c(p.appendChild(i), "script"), l && d(s), n)
            for (f = 0; i = s[f++];) je.test(i.type || "") && n.push(i);
        return p
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function g() {
        try {
            return Y.activeElement
        } catch (e) {}
    }

    function m(e, t, n, r, o, i) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t) m(e, a, n, r, t[a], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = h;
        else if (!o) return e;
        return 1 === i && (s = o, o = function(e) {
            return ie().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = ie.guid++)), e.each(function() {
            ie.event.add(this, t, o, r, n)
        })
    }

    function v(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function b(e) {
        var t = $e.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        var n, r, o, i, s, a, u, l;
        if (1 === t.nodeType) {
            if (Ae.hasData(e) && (i = Ae.access(e), s = Ae.set(t, i), l = i.events)) {
                delete s.handle, s.events = {};
                for (o in l)
                    for (n = 0, r = l[o].length; r > n; n++) ie.event.add(t, o, l[o][n])
            }
            Se.hasData(e) && (a = Se.access(e), u = ie.extend({}, a), Se.set(t, u))
        }
    }

    function C(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function w(e, t, n, r) {
        t = Q.apply([], t);
        var o, i, s, a, u, l, d = 0,
            p = e.length,
            h = p - 1,
            g = t[0],
            m = ie.isFunction(g);
        if (m || p > 1 && "string" == typeof g && !re.checkClone && Be.test(g)) return e.each(function(o) {
            var i = e.eq(o);
            m && (t[0] = g.call(this, o, i.html())), w(i, t, n, r)
        });
        if (p && (o = f(t, e[0].ownerDocument, !1, e, r), i = o.firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
            for (s = ie.map(c(o, "script"), y), a = s.length; p > d; d++) u = o, d !== h && (u = ie.clone(u, !0, !0), a && ie.merge(s, c(u, "script"))), n.call(e[d], u, d);
            if (a)
                for (l = s[s.length - 1].ownerDocument, ie.map(s, b), d = 0; a > d; d++) u = s[d], je.test(u.type || "") && !Ae.access(u, "globalEval") && ie.contains(l, u) && (u.src ? ie._evalUrl && ie._evalUrl(u.src) : ie.globalEval(u.textContent.replace(_e, "")))
        }
        return e
    }

    function T(e, t, n) {
        for (var r, o = t ? ie.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || ie.cleanData(c(r)), r.parentNode && (n && ie.contains(r.ownerDocument, r) && d(c(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function A(e, t) {
        var n = ie(t.createElement(e)).appendTo(t.body),
            r = ie.css(n[0], "display");
        return n.detach(), r
    }

    function S(e) {
        var t = Y,
            n = ze[e];
        return n || (n = A(e, t), "none" !== n && n || (Ve = (Ve || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ve[0].contentDocument, t.write(), t.close(), n = A(e, t), Ve.detach()), ze[e] = n), n
    }

    function L(e, t, n) {
        var r, o, i, s, a = e.style;
        return n = n || Ye(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || ie.contains(e.ownerDocument, e) || (s = ie.style(e, t)), n && !re.pixelMarginRight() && Ge.test(s) && Xe.test(t) && (r = a.width, o = a.minWidth, i = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = o, a.maxWidth = i), void 0 !== s ? s + "" : s
    }

    function I(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function U(e) {
        if (e in nt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;)
            if ((e = tt[n] + t) in nt) return e
    }

    function E(e, t, n) {
        var r = Ee.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function D(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > i; i += 2) "margin" === n && (s += ie.css(e, n + De[i], !0, o)), r ? ("content" === n && (s -= ie.css(e, "padding" + De[i], !0, o)), "margin" !== n && (s -= ie.css(e, "border" + De[i] + "Width", !0, o))) : (s += ie.css(e, "padding" + De[i], !0, o), "padding" !== n && (s += ie.css(e, "border" + De[i] + "Width", !0, o)));
        return s
    }

    function M(t, n, r) {
        var o = !0,
            i = "width" === n ? t.offsetWidth : t.offsetHeight,
            s = Ye(t),
            a = "border-box" === ie.css(t, "boxSizing", !1, s);
        if (Y.msFullscreenElement && e.top !== e && t.getClientRects().length && (i = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= i || null == i) {
            if (i = L(t, n, s), (0 > i || null == i) && (i = t.style[n]), Ge.test(i)) return i;
            o = a && (re.boxSizingReliable() || i === t.style[n]), i = parseFloat(i) || 0
        }
        return i + D(t, n, r || (a ? "border" : "content"), o, s) + "px"
    }

    function N(e, t) {
        for (var n, r, o, i = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (i[s] = Ae.get(r, "olddisplay"), n = r.style.display, t ? (i[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Me(r) && (i[s] = Ae.access(r, "olddisplay", S(r.nodeName)))) : (o = Me(r), "none" === n && o || Ae.set(r, "olddisplay", o ? n : ie.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[s] || "" : "none"));
        return e
    }

    function k(e, t, n, r, o) {
        return new k.prototype.init(e, t, n, r, o)
    }

    function j() {
        return e.setTimeout(function() {
            rt = void 0
        }), rt = ie.now()
    }

    function q(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = De[r], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function F(e, t, n) {
        for (var r, o = (R.tweeners[t] || []).concat(R.tweeners["*"]), i = 0, s = o.length; s > i; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function O(e, t, n) {
        var r, o, i, s, a, u, l, c = this,
            d = {},
            f = e.style,
            p = e.nodeType && Me(e),
            h = Ae.get(e, "fxshow");
        n.queue || (a = ie._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--, ie.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = ie.css(e, "display"), "inline" === ("none" === l ? Ae.get(e, "olddisplay") || S(e.nodeName) : l) && "none" === ie.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], it.exec(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (p ? "hide" : "show")) {
                    if ("show" !== o || !h || void 0 === h[r]) continue;
                    p = !0
                }
                d[r] = h && h[r] || ie.style(e, r)
            } else l = void 0;
        if (ie.isEmptyObject(d)) "inline" === ("none" === l ? S(e.nodeName) : l) && (f.display = l);
        else {
            h ? "hidden" in h && (p = h.hidden) : h = Ae.access(e, "fxshow", {}), i && (h.hidden = !p), p ? ie(e).show() : c.done(function() {
                ie(e).hide()
            }), c.done(function() {
                var t;
                Ae.remove(e, "fxshow");
                for (t in d) ie.style(e, t, d[t])
            });
            for (r in d) s = F(p ? h[r] : 0, r, c), r in h || (h[r] = s.start, p && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function P(e, t) {
        var n, r, o, i, s;
        for (n in e)
            if (r = ie.camelCase(n), o = t[r], i = e[n], ie.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (s = ie.cssHooks[r]) && "expand" in s) {
                i = s.expand(i), delete e[r];
                for (n in i) n in e || (e[n] = i[n], t[n] = o)
            } else t[r] = o
    }

    function R(e, t, n) {
        var r, o, i = 0,
            s = R.prefilters.length,
            a = ie.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (o) return !1;
                for (var t = rt || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(i);
                return a.notifyWith(e, [l, i, n]), 1 > i && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, {
                    specialEasing: {},
                    easing: ie.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || j(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (P(c, l.opts.specialEasing); s > i; i++)
            if (r = R.prefilters[i].call(l, e, c, l.opts)) return ie.isFunction(r.stop) && (ie._queueHooks(l.elem, l.opts.queue).stop = ie.proxy(r.stop, r)), r;
        return ie.map(c, F, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), ie.fx.timer(ie.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function H(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function W(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(xe) || [];
            if (ie.isFunction(n))
                for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function B(e, t, n, r) {
        function o(a) {
            var u;
            return i[a] = !0, ie.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || i[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1)
            }), u
        }
        var i = {},
            s = e === St;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function $(e, t) {
        var n, r, o = ie.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ie.extend(!0, e, r), e
    }

    function _(e, t, n) {
        for (var r, o, i, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in a)
                if (a[o] && a[o].test(r)) {
                    u.unshift(o);
                    break
                } if (u[0] in n) i = u[0];
        else {
            for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    i = o;
                    break
                }
                s || (s = o)
            }
            i = i || s
        }
        return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
    }

    function V(e, t, n, r) {
        var o, i, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (i = c.shift(); i;)
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                if ("*" === i) i = u;
                else if ("*" !== u && u !== i) {
            if (!(s = l[u + " " + i] || l["* " + i]))
                for (o in l)
                    if (a = o.split(" "), a[1] === i && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        !0 === s ? s = l[o] : !0 !== l[o] && (i = a[0], c.unshift(a[1]));
                        break
                    } if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function z(e, t, n, r) {
        var o;
        if (ie.isArray(t)) ie.each(t, function(t, o) {
            n || Et.test(e) ? r(e, o) : z(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
        });
        else if (n || "object" !== ie.type(t)) r(e, t);
        else
            for (o in t) z(e + "[" + o + "]", t[o], n, r)
    }

    function X(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var G = [],
        Y = e.document,
        J = G.slice,
        Q = G.concat,
        K = G.push,
        Z = G.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        re = {},
        oe = "2.2.2",
        ie = function(e, t) {
            return new ie.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        ue = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    ie.fn = ie.prototype = {
        jquery: oe,
        constructor: ie,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return ie.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ie.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: G.sort,
        splice: G.splice
    }, ie.extend = ie.fn.extend = function() {
        var e, t, n, r, o, i, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || ie.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (ie.isPlainObject(r) || (o = ie.isArray(r))) ? (o ? (o = !1, i = n && ie.isArray(n) ? n : []) : i = n && ie.isPlainObject(n) ? n : {}, s[t] = ie.extend(l, i, r)) : void 0 !== r && (s[t] = r));
        return s
    }, ie.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ie.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !ie.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = ie.trim(e)) && (1 === e.indexOf("use strict") ? (t = Y.createElement("script"), t.text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(ue, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, o = 0;
            if (n(e))
                for (r = e.length; r > o && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, s = !n; i > o; o++) !t(e[o], o) !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, r) {
            var o, i, s = 0,
                a = [];
            if (n(e))
                for (o = e.length; o > s; s++) null != (i = t(e[s], s, r)) && a.push(i);
            else
                for (s in e) null != (i = t(e[s], s, r)) && a.push(i);
            return Q.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), ie.isFunction(e) ? (r = J.call(arguments, 2), o = function() {
                return e.apply(t || this, r.concat(J.call(arguments)))
            }, o.guid = e.guid = e.guid || ie.guid++, o) : void 0
        },
        now: Date.now,
        support: re
    }), "function" == typeof Symbol && (ie.fn[Symbol.iterator] = G[Symbol.iterator]), ie.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, n, r) {
            var o, i, s, a, l, d, f, p, h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!r && ((t ? t.ownerDocument || t : P) !== D && E(t), t = t || D, N)) {
                if (11 !== g && (d = ge.exec(e)))
                    if (o = d[1]) {
                        if (9 === g) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (h && (s = h.getElementById(o)) && F(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (d[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = d[3]) && b.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n
                    } if (b.qsa && !$[e + " "] && (!k || !k.test(e))) {
                    if (1 !== g) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ve, "\\$&") : t.setAttribute("id", a = O), f = T(e), i = f.length, l = ce.test(a) ? "#" + a : "[id='" + a + "']"; i--;) f[i] = l + " " + c(f[i]);
                        p = f.join(","), h = me.test(e) && u(t.parentNode) || t
                    }
                    if (p) try {
                        return J.apply(n, h.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        a === O && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ie, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[O] = !0, e
        }

        function o(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function i(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var o, i = e([], n.length, t), s = i.length; s--;) n[o = i[s]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function l() {}

        function c(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                o = n && "parentNode" === r,
                i = H++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || o) return e(t, n, i)
            } : function(t, n, s) {
                var a, u, l, c = [R, i];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || o) {
                            if (l = t[O] || (t[O] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (a = u[r]) && a[0] === R && a[1] === i) return c[2] = a[2];
                            if (u[r] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, r) {
            for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
            return r
        }

        function h(e, t, n, r, o) {
            for (var i, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(i = e[a]) && (n && !n(i, r, o) || (s.push(i), l && t.push(a)));
            return s
        }

        function g(e, t, n, o, i, s) {
            return o && !o[O] && (o = g(o)), i && !i[O] && (i = g(i, s)), r(function(r, s, a, u) {
                var l, c, d, f = [],
                    g = [],
                    m = s.length,
                    v = r || p(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : h(v, f, e, a, u),
                    b = n ? i || (r ? e : m || o) ? [] : s : y;
                if (n && n(y, b, a, u), o)
                    for (l = h(b, g), o(l, [], a, u), c = l.length; c--;)(d = l[c]) && (b[g[c]] = !(y[g[c]] = d));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
                            i(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (l = i ? K(r, d) : f[c]) > -1 && (r[l] = !(s[l] = d))
                    }
                } else b = h(b === s ? b.splice(m, b.length) : b), i ? i(null, s, b, u) : J.apply(s, b)
            })
        }

        function m(e) {
            for (var t, n, r, o = e.length, i = x.relative[e[0].type], s = i || x.relative[" "], a = i ? 1 : 0, u = d(function(e) {
                    return e === t
                }, s, !0), l = d(function(e) {
                    return K(t, e) > -1
                }, s, !0), p = [function(e, n, r) {
                    var o = !i && (r || n !== L) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, o
                }]; o > a; a++)
                if (n = x.relative[e[a].type]) p = [d(f(p), n)];
                else {
                    if (n = x.filter[e[a].type].apply(null, e[a].matches), n[O]) {
                        for (r = ++a; o > r && !x.relative[e[r].type]; r++);
                        return g(a > 1 && f(p), a > 1 && c(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ie, "$1"), n, r > a && m(e.slice(a, r)), o > r && m(e = e.slice(r)), o > r && c(e))
                    }
                    p.push(n)
                } return f(p)
        }

        function v(e, n) {
            var o = n.length > 0,
                i = e.length > 0,
                s = function(r, s, a, u, l) {
                    var c, d, f, p = 0,
                        g = "0",
                        m = r && [],
                        v = [],
                        y = L,
                        b = r || i && x.find.TAG("*", l),
                        C = R += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (L = s === D || s || l); g !== w && null != (c = b[g]); g++) {
                        if (i && c) {
                            for (d = 0, s || c.ownerDocument === D || (E(c), a = !N); f = e[d++];)
                                if (f(c, s || D, a)) {
                                    u.push(c);
                                    break
                                } l && (R = C)
                        }
                        o && ((c = !f && c) && p--, r && m.push(c))
                    }
                    if (p += g, o && g !== p) {
                        for (d = 0; f = n[d++];) f(m, v, s, a);
                        if (r) {
                            if (p > 0)
                                for (; g--;) m[g] || v[g] || (v[g] = G.call(u));
                            v = h(v)
                        }
                        J.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (R = C, L = y), m
                };
            return o ? r(s) : s
        }
        var y, b, x, C, w, T, A, S, L, I, U, E, D, M, N, k, j, q, F, O = "sizzle" + 1 * new Date,
            P = e.document,
            R = 0,
            H = 0,
            W = n(),
            B = n(),
            $ = n(),
            _ = function(e, t) {
                return e === t && (U = !0), 0
            },
            V = 1 << 31,
            z = {}.hasOwnProperty,
            X = [],
            G = X.pop,
            Y = X.push,
            J = X.push,
            Q = X.slice,
            K = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            oe = new RegExp(ee + "+", "g"),
            ie = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            le = new RegExp(re),
            ce = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            ve = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            be = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            xe = function() {
                E()
            };
        try {
            J.apply(X = Q.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: X.length ? function(e, t) {
                    Y.apply(e, Q.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, w = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, E = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : P;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, M = D.documentElement, N = !w(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), b.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = o(function(e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = he.test(D.getElementsByClassName), b.getById = o(function(e) {
                return M.appendChild(e).id = O, !D.getElementsByName || !D.getElementsByName(O).length
            }), b.getById ? (x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, x.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, x.find.CLASS = b.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && N ? t.getElementsByClassName(e) : void 0
            }, j = [], k = [], (b.qsa = he.test(D.querySelectorAll)) && (o(function(e) {
                M.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && k.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || k.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + O + "-]").length || k.push("~="), e.querySelectorAll(":checked").length || k.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || k.push(".#.+[+~]")
            }), o(function(e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && k.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || k.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), k.push(",.*:")
            })), (b.matchesSelector = he.test(q = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(e) {
                b.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), j.push("!=", re)
            }), k = k.length && new RegExp(k.join("|")), j = j.length && new RegExp(j.join("|")), t = he.test(M.compareDocumentPosition), F = t || he.test(M.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, _ = t ? function(e, t) {
                if (e === t) return U = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === P && F(P, e) ? -1 : t === D || t.ownerDocument === P && F(P, t) ? 1 : I ? K(I, e) - K(I, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return U = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    a = [e],
                    u = [t];
                if (!o || !i) return e === D ? -1 : t === D ? 1 : o ? -1 : i ? 1 : I ? K(I, e) - K(I, t) : 0;
                if (o === i) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? s(a[r], u[r]) : a[r] === P ? -1 : u[r] === P ? 1 : 0
            }, D) : D
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && E(e), n = n.replace(ue, "='$1']"), b.matchesSelector && N && !$[n + " "] && (!j || !j.test(n)) && (!k || !k.test(n))) try {
                var r = q.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, D, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && E(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && E(e);
            var n = x.attrHandle[t.toLowerCase()],
                r = n && z.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== r ? r : b.attributes || !N ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (U = !b.detectDuplicates, I = !b.sortStable && e.slice(0), e.sort(_), U) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return I = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, d, f, p, h, g = i !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a,
                            b = !1;
                        if (m) {
                            if (i) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (f = m, d = f[O] || (f[O] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], p = l[0] === R && l[1], b = p && l[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++b && f === t) {
                                        c[e] = [R, p, b];
                                        break
                                    }
                            } else if (y && (f = t, d = f[O] || (f[O] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], p = l[0] === R && l[1], b = p), !1 === b)
                                for (;
                                    (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[O] || (f[O] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [R, b]), f !== t)););
                            return (b -= o) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[O] ? i(n) : i.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), s = o.length; s--;) r = K(e, o[s]), e[r] = !(t[r] = o[s])
                    }) : function(e) {
                        return i(e, 0, o)
                    }) : i
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        o = A(e.replace(ie, "$1"));
                    return o[O] ? r(function(e, t, n, r) {
                        for (var i, s = o(e, null, r, []), a = e.length; a--;)(i = s[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, r, i) {
                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ye, be),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === M
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return pe.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(e, t) {
                    return [t - 1]
                }),
                eq: a(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: a(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: a(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: a(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: a(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[y] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {
                submit: !0,
                reset: !0
            }) x.pseudos[y] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return l.prototype = x.filters = x.pseudos, x.setFilters = new l, T = t.tokenize = function(e, n) {
            var r, o, i, s, a, u, l, c = B[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = x.preFilter; a;) {
                r && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), u.push(i = [])), r = !1, (o = ae.exec(a)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(ie, " ")
                }), a = a.slice(r.length));
                for (s in x.filter) !(o = de[s].exec(a)) || l[s] && !(o = l[s](o)) || (r = o.shift(), i.push({
                    value: r,
                    type: s,
                    matches: o
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : B(e, u).slice(0)
        }, A = t.compile = function(e, t) {
            var n, r = [],
                o = [],
                i = $[e + " "];
            if (!i) {
                for (t || (t = T(e)), n = t.length; n--;) i = m(t[n]), i[O] ? r.push(i) : o.push(i);
                i = $(e, v(o, r)), i.selector = e
            }
            return i
        }, S = t.select = function(e, t, n, r) {
            var o, i, s, a, l, d = "function" == typeof e && e,
                f = !r && T(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
                if (i = f[0] = f[0].slice(0), i.length > 2 && "ID" === (s = i[0]).type && b.getById && 9 === t.nodeType && N && x.relative[i[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(ye, be), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = de.needsContext.test(e) ? 0 : i.length; o-- && (s = i[o], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (r = l(s.matches[0].replace(ye, be), me.test(i[0].type) && u(t.parentNode) || t))) {
                        if (i.splice(o, 1), !(e = r.length && c(i))) return J.apply(n, r), n;
                        break
                    }
            }
            return (d || A(e, f))(r, t, !N, n, !t || me.test(e) && u(t.parentNode) || t), n
        }, b.sortStable = O.split("").sort(_).join("") === O, b.detectDuplicates = !!U, E(), b.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(Z, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ie.find = ce, ie.expr = ce.selectors, ie.expr[":"] = ie.expr.pseudos, ie.uniqueSort = ie.unique = ce.uniqueSort, ie.text = ce.getText, ie.isXMLDoc = ce.isXML, ie.contains = ce.contains;
    var de = function(e, t, n) {
            for (var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && ie(e).is(n)) break;
                    r.push(e)
                } return r
        },
        fe = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        pe = ie.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^.[^:#\[\.,]*$/;
    ie.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ie.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (ie.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) ie.find(e, o[t], r);
            return r = this.pushStack(n > 1 ? ie.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && pe.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ie.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || me, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), he.test(r[1]) && ie.isPlainObject(t))
                    for (r in t) ie.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return o = Y.getElementById(r[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Y, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
    }).prototype = ie.fn, me = ie(Y);
    var ye = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ie.fn.extend({
        has: function(e) {
            var t = ie(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (ie.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, o = this.length, i = [], s = pe.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; o > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    } return this.pushStack(i.length > 1 ? ie.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(ie(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ie.uniqueSort(ie.merge(this.get(), ie(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ie.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return de(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return de(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return de(e, "nextSibling")
        },
        prevAll: function(e) {
            return de(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return de(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return de(e, "previousSibling", n)
        },
        siblings: function(e) {
            return fe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return fe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ie.merge([], e.childNodes)
        }
    }, function(e, t) {
        ie.fn[e] = function(n, r) {
            var o = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = ie.filter(r, o)), this.length > 1 && (be[e] || ie.uniqueSort(o), ye.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var xe = /\S+/g;
    ie.Callbacks = function(e) {
        e = "string" == typeof e ? i(e) : ie.extend({}, e);
        var t, n, r, o, s = [],
            a = [],
            u = -1,
            l = function() {
                for (o = e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;) !1 === s[u].apply(n[0], n[1]) && e.stopOnFalse && (u = s.length, n = !1);
                e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !t && (u = s.length - 1, a.push(n)), function t(n) {
                        ie.each(n, function(n, r) {
                            ie.isFunction(r) ? e.unique && c.has(r) || s.push(r) : r && r.length && "string" !== ie.type(r) && t(r)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return ie.each(arguments, function(e, t) {
                        for (var n;
                            (n = ie.inArray(t, s, n)) > -1;) s.splice(n, 1), u >= n && u--
                    }), this
                },
                has: function(e) {
                    return e ? ie.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = a = [], n || (s = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, ie.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ie.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ie.Deferred(function(n) {
                            ie.each(t, function(t, i) {
                                var s = ie.isFunction(e[t]) && e[t];
                                o[i[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ie.extend(e, r) : r
                    }
                },
                o = {};
            return r.pipe = r.then, ie.each(t, function(e, i) {
                var s = i[2],
                    a = i[3];
                r[i[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                }, o[i[0] + "With"] = s.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, r, o = 0,
                i = J.call(arguments),
                s = i.length,
                a = 1 !== s || e && ie.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : ie.Deferred(),
                l = function(e, n, r) {
                    return function(o) {
                        n[e] = this, r[e] = arguments.length > 1 ? J.call(arguments) : o, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > o; o++) i[o] && ie.isFunction(i[o].promise) ? i[o].promise().progress(l(o, n, t)).done(l(o, r, i)).fail(u.reject) : --a;
            return a || u.resolveWith(r, i), u.promise()
        }
    });
    var Ce;
    ie.fn.ready = function(e) {
        return ie.ready.promise().done(e), this
    }, ie.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ie.readyWait++ : ie.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --ie.readyWait : ie.isReady) || (ie.isReady = !0, !0 !== e && --ie.readyWait > 0 || (Ce.resolveWith(Y, [ie]), ie.fn.triggerHandler && (ie(Y).triggerHandler("ready"), ie(Y).off("ready"))))
        }
    }), ie.ready.promise = function(t) {
        return Ce || (Ce = ie.Deferred(), "complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? e.setTimeout(ie.ready) : (Y.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Ce.promise(t)
    }, ie.ready.promise();
    var we = function(e, t, n, r, o, i, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === ie.type(n)) {
                o = !0;
                for (a in n) we(e, t, a, n[a], !0, i, s)
            } else if (void 0 !== r && (o = !0, ie.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(ie(e), n)
                })), t))
                for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
        },
        Te = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!Te(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Te(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[t] = n;
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, ie.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, o, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 === t) this.register(e);
                else {
                    ie.isArray(t) ? r = t.concat(t.map(ie.camelCase)) : (o = ie.camelCase(t), t in i ? r = [t, o] : (r = o, r = r in i ? [r] : r.match(xe) || [])), n = r.length;
                    for (; n--;) delete i[r[n]]
                }(void 0 === t || ie.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ie.isEmptyObject(t)
        }
    };
    var Ae = new a,
        Se = new a,
        Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ie = /[A-Z]/g;
    ie.extend({
        hasData: function(e) {
            return Se.hasData(e) || Ae.hasData(e)
        },
        data: function(e, t, n) {
            return Se.access(e, t, n)
        },
        removeData: function(e, t) {
            Se.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ae.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ae.remove(e, t)
        }
    }), ie.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0],
                s = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = Se.get(i), 1 === i.nodeType && !Ae.get(i, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), u(i, r, o[r])));
                    Ae.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                Se.set(this, e)
            }) : we(this, function(t) {
                var n, r;
                if (i && void 0 === t) {
                    if (void 0 !== (n = Se.get(i, e) || Se.get(i, e.replace(Ie, "-$&").toLowerCase()))) return n;
                    if (r = ie.camelCase(e), void 0 !== (n = Se.get(i, r))) return n;
                    if (void 0 !== (n = u(i, r, void 0))) return n
                } else r = ie.camelCase(e), this.each(function() {
                    var n = Se.get(this, r);
                    Se.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Se.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Se.remove(this, e)
            })
        }
    }), ie.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = Ae.get(e, t), n && (!r || ie.isArray(n) ? r = Ae.access(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ie.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = ie._queueHooks(e, t),
                s = function() {
                    ie.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, s, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ae.get(e, n) || Ae.access(e, n, {
                empty: ie.Callbacks("once memory").add(function() {
                    Ae.remove(e, [t + "queue", n])
                })
            })
        }
    }), ie.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ie.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = ie.Deferred(),
                i = this,
                s = this.length,
                a = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Ae.get(i[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var Ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ee = new RegExp("^(?:([+-])=|)(" + Ue + ")([a-z%]*)$", "i"),
        De = ["Top", "Right", "Bottom", "Left"],
        Me = function(e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        },
        Ne = /^(?:checkbox|radio)$/i,
        ke = /<([\w:-]+)/,
        je = /^$|\/(?:java|ecma)script/i,
        qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td;
    var Fe = /<|&#?\w+;/;
    ! function() {
        var e = Y.createDocumentFragment(),
            t = e.appendChild(Y.createElement("div")),
            n = Y.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Oe = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Re = /^([^.]*)(?:\.(.+)|)/;
    ie.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, s, a, u, l, c, d, f, p, h, g, m = Ae.get(e);
            if (m)
                for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = ie.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return void 0 !== ie && ie.event.triggered !== t.type ? ie.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(xe) || [""], l = t.length; l--;) a = Re.exec(t[l]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (d = ie.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = ie.event.special[p] || {}, c = ie.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ie.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, i), (f = u[p]) || (f = u[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(p, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), ie.event.global[p] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, s, a, u, l, c, d, f, p, h, g, m = Ae.hasData(e) && Ae.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(xe) || [""], l = t.length; l--;)
                    if (a = Re.exec(t[l]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = f.length; i--;) c = f[i], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(i, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || ie.removeEvent(e, p, m.handle), delete u[p])
                    } else
                        for (p in u) ie.event.remove(e, p + t[l], n, r, !0);
                ie.isEmptyObject(u) && Ae.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = ie.event.fix(e);
            var t, n, r, o, i, s = [],
                a = J.call(arguments),
                u = (Ae.get(this, "events") || {})[e.type] || [],
                l = ie.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (s = ie.event.handlers.call(this, e, u), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(i.namespace) || (e.handleObj = i, e.data = i.data, void 0 !== (r = ((ie.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; a > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? ie(o, this).index(u) > -1 : ie.find(o, this, null, [u]).length), r[o] && r.push(i);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, o, i = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Y, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[ie.expando]) return e;
            var t, n, r, o = e.type,
                i = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Pe.test(o) ? this.mouseHooks : Oe.test(o) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ie.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
            return e.target || (e.target = Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, i) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ie.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ie.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ie.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ie.Event = function(e, t) {
        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? p : h) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
    }, ie.Event.prototype = {
        constructor: ie.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ie.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return o && (o === r || ie.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ie.fn.extend({
        on: function(e, t, n, r) {
            return m(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return m(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = h), this.each(function() {
                ie.event.remove(this, e, n, t)
            })
        }
    });
    var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        We = /<script|<style|<link/i,
        Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $e = /^true\/(.*)/,
        _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ie.extend({
        htmlPrefilter: function(e) {
            return e.replace(He, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, s, a = e.cloneNode(!0),
                u = ie.contains(e.ownerDocument, e);
            if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (s = c(a), i = c(e), r = 0, o = i.length; o > r; r++) C(i[r], s[r]);
            if (t)
                if (n)
                    for (i = i || c(e), s = s || c(a), r = 0, o = i.length; o > r; r++) x(i[r], s[r]);
                else x(e, a);
            return s = c(a, "script"), s.length > 0 && d(s, !u && c(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, r, o = ie.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (Te(n)) {
                    if (t = n[Ae.expando]) {
                        if (t.events)
                            for (r in t.events) o[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, t.handle);
                        n[Ae.expando] = void 0
                    }
                    n[Se.expando] && (n[Se.expando] = void 0)
                }
        }
    }), ie.fn.extend({
        domManip: w,
        detach: function(e) {
            return T(this, e, !0)
        },
        remove: function(e) {
            return T(this, e)
        },
        text: function(e) {
            return we(this, function(e) {
                return void 0 === e ? ie.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return w(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    v(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return w(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return w(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return w(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ie.cleanData(c(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ie.clone(this, e, t)
            })
        },
        html: function(e) {
            return we(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !We.test(e) && !qe[(ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ie.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(c(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return w(this, arguments, function(t) {
                var n = this.parentNode;
                ie.inArray(this, e) < 0 && (ie.cleanData(c(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ie.fn[e] = function(e) {
            for (var n, r = [], o = ie(e), i = o.length - 1, s = 0; i >= s; s++) n = s === i ? this : this.clone(!0), ie(o[s])[t](n), K.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ve, ze = {
            HTML: "block",
            BODY: "block"
        },
        Xe = /^margin/,
        Ge = new RegExp("^(" + Ue + ")(?!px)[a-z%]+$", "i"),
        Ye = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Je = function(e, t, n, r) {
            var o, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = s[i];
            return o
        },
        Qe = Y.documentElement;
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qe.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, i = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Qe.removeChild(s)
        }
        var n, r, o, i, s = Y.createElement("div"),
            a = Y.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ie.extend(re, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            pixelMarginRight: function() {
                return null == r && t(), o
            },
            reliableMarginLeft: function() {
                return null == r && t(), i
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(Y.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Qe.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Qe.removeChild(s), a.removeChild(n), t
            }
        }))
    }();
    var Ke = /^(none|table(?!-c[ea]).+)/,
        Ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        et = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        tt = ["Webkit", "O", "Moz", "ms"],
        nt = Y.createElement("div").style;
    ie.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, s, a = ie.camelCase(t),
                    u = e.style;
                return t = ie.cssProps[a] || (ie.cssProps[a] = U(a) || a), s = ie.cssHooks[t] || ie.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : u[t] : (i = typeof n, "string" === i && (o = Ee.exec(n)) && o[1] && (n = l(e, t, o), i = "number"), void(null != n && n === n && ("number" === i && (n += o && o[3] || (ie.cssNumber[a] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var o, i, s, a = ie.camelCase(t);
            return t = ie.cssProps[a] || (ie.cssProps[a] = U(a) || a), s = ie.cssHooks[t] || ie.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = L(e, t, r)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), ie.each(["height", "width"], function(e, t) {
        ie.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Ke.test(ie.css(e, "display")) && 0 === e.offsetWidth ? Je(e, Ze, function() {
                    return M(e, t, r)
                }) : M(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var o, i = r && Ye(e),
                    s = r && D(e, t, r, "border-box" === ie.css(e, "boxSizing", !1, i), i);
                return s && (o = Ee.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = ie.css(e, t)), E(e, n, s)
            }
        }
    }), ie.cssHooks.marginLeft = I(re.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), ie.cssHooks.marginRight = I(re.reliableMarginRight, function(e, t) {
        return t ? Je(e, {
            display: "inline-block"
        }, L, [e, "marginRight"]) : void 0
    }), ie.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ie.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + De[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, Xe.test(e) || (ie.cssHooks[e + t].set = E)
    }), ie.fn.extend({
        css: function(e, t) {
            return we(this, function(e, t, n) {
                var r, o, i = {},
                    s = 0;
                if (ie.isArray(t)) {
                    for (r = Ye(e), o = t.length; o > s; s++) i[t[s]] = ie.css(e, t[s], !1, r);
                    return i
                }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Me(this) ? ie(this).show() : ie(this).hide()
            })
        }
    }), ie.Tween = k, k.prototype = {
        constructor: k,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || ie.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (ie.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = k.propHooks[this.prop];
            return e && e.get ? e.get(this) : k.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = k.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : k.propHooks._default.set(this), this
        }
    }, k.prototype.init.prototype = k.prototype, k.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ie.cssProps[e.prop]] && !ie.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ie.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ie.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ie.fx = k.prototype.init, ie.fx.step = {};
    var rt, ot, it = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
    ie.Animation = ie.extend(R, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return l(n.elem, e, Ee.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
                for (var n, r = 0, o = e.length; o > r; r++) n = e[r], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
            },
            prefilters: [O],
            prefilter: function(e, t) {
                t ? R.prefilters.unshift(e) : R.prefilters.push(e)
            }
        }), ie.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ie.extend({}, e) : {
                complete: n || !n && t || ie.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ie.isFunction(t) && t
            };
            return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
            }, r
        }, ie.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Me).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = ie.isEmptyObject(e),
                    i = ie.speed(t, n, r),
                    s = function() {
                        var t = R(this, ie.extend({}, e), i);
                        (o || Ae.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = ie.timers,
                        s = Ae.get(this);
                    if (o) s[o] && s[o].stop && r(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && st.test(o) && r(s[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    !t && n || ie.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Ae.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = ie.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ie.each(["toggle", "show", "hide"], function(e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, r, o)
            }
        }), ie.each({
            slideDown: q("show"),
            slideUp: q("hide"),
            slideToggle: q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ie.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ie.timers = [], ie.fx.tick = function() {
            var e, t = 0,
                n = ie.timers;
            for (rt = ie.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || ie.fx.stop(), rt = void 0
        }, ie.fx.timer = function(e) {
            ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
        }, ie.fx.interval = 13, ie.fx.start = function() {
            ot || (ot = e.setInterval(ie.fx.tick, ie.fx.interval))
        }, ie.fx.stop = function() {
            e.clearInterval(ot), ot = null
        }, ie.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ie.fn.delay = function(t, n) {
            return t = ie.fx ? ie.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var o = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e = Y.createElement("input"),
                t = Y.createElement("select"),
                n = t.appendChild(Y.createElement("option"));
            e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = Y.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
        }();
    var at, ut = ie.expr.attrHandle;
    ie.fn.extend({
        attr: function(e, t) {
            return we(this, ie.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ie.removeAttr(this, e)
            })
        }
    }), ie.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? ie.prop(e, t, n) : (1 === i && ie.isXMLDoc(e) || (t = t.toLowerCase(), o = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? at : void 0)), void 0 !== n ? null === n ? void ie.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : (r = ie.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!re.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, o = 0,
                i = t && t.match(xe);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), at = {
        set: function(e, t, n) {
            return !1 === t ? ie.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ut[t] || ie.find.attr;
        ut[t] = function(e, t, r) {
            var o, i;
            return r || (i = ut[t], ut[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, ut[t] = i), o
        }
    });
    var lt = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function(e, t) {
            return we(this, ie.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ie.propFix[e] || e]
            })
        }
    }), ie.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && ie.isXMLDoc(e) || (t = ie.propFix[t] || t, o = ie.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : lt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), re.optSelected || (ie.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ie.propFix[this.toLowerCase()] = this
    });
    var dt = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, s, a, u = 0;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).addClass(e.call(this, t, H(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(xe) || []; n = this[u++];)
                    if (o = H(n), r = 1 === n.nodeType && (" " + o + " ").replace(dt, " ")) {
                        for (s = 0; i = t[s++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = ie.trim(r), o !== a && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, s, a, u = 0;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).removeClass(e.call(this, t, H(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(xe) || []; n = this[u++];)
                    if (o = H(n), r = 1 === n.nodeType && (" " + o + " ").replace(dt, " ")) {
                        for (s = 0; i = t[s++];)
                            for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                        a = ie.trim(r), o !== a && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function(n) {
                ie(this).toggleClass(e.call(this, n, H(this), t), t)
            }) : this.each(function() {
                var t, r, o, i;
                if ("string" === n)
                    for (r = 0, o = ie(this), i = e.match(xe) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = H(this), t && Ae.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ae.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + H(n) + " ").replace(dt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ft = /\r/g,
        pt = /[\x20\t\r\n\f]+/g;
    ie.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = ie.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = r ? e.call(this, n, ie(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ie.isArray(o) && (o = ie.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = ie.valHooks[o.type] || ie.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n)) : void 0
        }
    }), ie.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : ie.trim(ie.text(e)).replace(pt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, s = i ? null : [], a = i ? o + 1 : r.length, u = 0 > o ? a : i ? o : 0; a > u; u++)
                        if (n = r[u], (n.selected || u === o) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), i) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = ie.makeArray(t), s = o.length; s--;) r = o[s], (r.selected = ie.inArray(ie.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), ie.each(["radio", "checkbox"], function() {
        ie.valHooks[this] = {
            set: function(e, t) {
                return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) > -1 : void 0
            }
        }, re.checkOn || (ie.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ht = /^(?:focusinfocus|focusoutblur)$/;
    ie.extend(ie.event, {
        trigger: function(t, n, r, o) {
            var i, s, a, u, l, c, d, f = [r || Y],
                p = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || Y, 3 !== r.nodeType && 8 !== r.nodeType && !ht.test(p + ie.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), d = ie.event.special[p] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !ie.isWindow(r)) {
                    for (u = d.delegateType || p, ht.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                    a === (r.ownerDocument || Y) && f.push(a.defaultView || a.parentWindow || e)
                }
                for (i = 0;
                    (s = f[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? u : d.bindType || p, c = (Ae.get(s, "events") || {})[t.type] && Ae.get(s, "handle"), c && c.apply(s, n), (c = l && s[l]) && c.apply && Te(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = p, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Te(r) || l && ie.isFunction(r[p]) && !ie.isWindow(r) && (a = r[l], a && (r[l] = null), ie.event.triggered = p, r[p](), ie.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = ie.extend(new ie.Event, n, {
                type: e,
                isSimulated: !0
            });
            ie.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }), ie.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ie.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ie.event.trigger(e, t, n, !0) : void 0
        }
    }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ie.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ie.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), re.focusin = "onfocusin" in e, re.focusin || ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ie.event.simulate(t, e.target, ie.event.fix(e))
        };
        ie.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    o = Ae.access(r, t);
                o || r.addEventListener(e, n, !0), Ae.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    o = Ae.access(r, t) - 1;
                o ? Ae.access(r, t, o) : (r.removeEventListener(e, n, !0), Ae.remove(r, t))
            }
        }
    });
    var gt = e.location,
        mt = ie.now(),
        vt = /\?/;
    ie.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, ie.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n
    };
    var yt = /#.*$/,
        bt = /([?&])_=[^&]*/,
        xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        wt = /^(?:GET|HEAD)$/,
        Tt = /^\/\//,
        At = {},
        St = {},
        Lt = "*/".concat("*"),
        It = Y.createElement("a");
    It.href = gt.href, ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: Ct.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ie.parseJSON,
                "text xml": ie.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $($(e, ie.ajaxSettings), t) : $(ie.ajaxSettings, e)
        },
        ajaxPrefilter: W(At),
        ajaxTransport: W(St),
        ajax: function(t, n) {
            function r(t, n, r, a) {
                var l, d, y, b, C, T = n;
                2 !== x && (x = 2, u && e.clearTimeout(u), o = void 0, s = a || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (b = _(f, w, r)), b = V(f, b, w, l), l ? (f.ifModified && (C = w.getResponseHeader("Last-Modified"), C && (ie.lastModified[i] = C), (C = w.getResponseHeader("etag")) && (ie.etag[i] = C)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, y = b.error, l = !y)) : (y = T, !t && T || (T = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (n || T) + "", l ? g.resolveWith(p, [d, T, w]) : g.rejectWith(p, [w, T, y]), w.statusCode(v), v = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [w, f, l ? d : y]), m.fireWith(p, [w, T]), c && (h.trigger("ajaxComplete", [w, f]), --ie.active || ie.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, i, s, a, u, l, c, d, f = ie.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? ie(p) : ie.event,
                g = ie.Deferred(),
                m = ie.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                C = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; t = xt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return o && o.abort(t), r(0, t), this
                    }
                };
            if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((t || f.url || gt.href) + "").replace(yt, "").replace(Tt, gt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ie.trim(f.dataType || "*").toLowerCase().match(xe) || [""], null == f.crossDomain) {
                l = Y.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = It.protocol + "//" + It.host != l.protocol + "//" + l.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = ie.param(f.data, f.traditional)), B(At, f, n, w), 2 === x) return w;
            c = ie.event && f.global, c && 0 == ie.active++ && ie.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !wt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (vt.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = bt.test(i) ? i.replace(bt, "$1_=" + mt++) : i + (vt.test(i) ? "&" : "?") + "_=" + mt++)), f.ifModified && (ie.lastModified[i] && w.setRequestHeader("If-Modified-Since", ie.lastModified[i]), ie.etag[i] && w.setRequestHeader("If-None-Match", ie.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) w.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, w, f) || 2 === x)) return w.abort();
            C = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[d](f[d]);
            if (o = B(St, f, n, w)) {
                if (w.readyState = 1, c && h.trigger("ajaxSend", [w, f]), 2 === x) return w;
                f.async && f.timeout > 0 && (u = e.setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, o.send(y, r)
                } catch (e) {
                    if (!(2 > x)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return ie.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ie.get(e, void 0, t, "script")
        }
    }), ie.each(["get", "post"], function(e, t) {
        ie[t] = function(e, n, r, o) {
            return ie.isFunction(n) && (o = o || r, r = n, n = void 0), ie.ajax(ie.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, ie.isPlainObject(e) && e))
        }
    }), ie._evalUrl = function(e) {
        return ie.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, ie.fn.extend({
        wrapAll: function(e) {
            var t;
            return ie.isFunction(e) ? this.each(function(t) {
                ie(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ie(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return ie.isFunction(e) ? this.each(function(t) {
                ie(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ie(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ie.isFunction(e);
            return this.each(function(n) {
                ie(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ie.expr.filters.hidden = function(e) {
        return !ie.expr.filters.visible(e)
    }, ie.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Ut = /%20/g,
        Et = /\[\]$/,
        Dt = /\r?\n/g,
        Mt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function(e, t) {
        var n, r = [],
            o = function(e, t) {
                t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) z(n, e[n], t, o);
        return r.join("&").replace(Ut, "+")
    }, ie.fn.extend({
        serialize: function() {
            return ie.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Nt.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    }), ie.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var kt = {
            0: 200,
            1223: 204
        },
        jt = ie.ajaxSettings.xhr();
    re.cors = !!jt && "withCredentials" in jt, re.ajax = jt = !!jt, ie.ajaxTransport(function(t) {
        var n, r;
        return re.cors || jt && !t.crossDomain ? {
            send: function(o, i) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function(e) {
                    return function() {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(kt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), ie.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ie.globalEval(e), e
            }
        }
    }), ie.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ie.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, o) {
                    t = ie("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), Y.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var qt = [],
        Ft = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = qt.pop() || ie.expando + "_" + mt++;
            return this[e] = !0, e
        }
    }), ie.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, s, a = !1 !== t.jsonp && (Ft.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ft, "$1" + o) : !1 !== t.jsonp && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || ie.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            s = arguments
        }, r.always(function() {
            void 0 === i ? ie(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, qt.push(o)), s && ie.isFunction(i) && i(s[0]), s = i = void 0
        }), "script") : void 0
    }), ie.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Y;
        var r = he.exec(e),
            o = !n && [];
        return r ? [t.createElement(r[1])] : (r = f([e], t, o), o && o.length && ie(o).remove(), ie.merge([], r.childNodes))
    };
    var Ot = ie.fn.load;
    ie.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
        var r, o, i, s = this,
            a = e.indexOf(" ");
        return a > -1 && (r = ie.trim(e.slice(a)), e = e.slice(0, a)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && ie.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, s.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(s, i || [e.responseText, t, e])
            })
        }), this
    }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ie.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ie.expr.filters.animated = function(e) {
        return ie.grep(ie.timers, function(t) {
            return e === t.elem
        }).length
    }, ie.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, s, a, u, l, c = ie.css(e, "position"),
                d = ie(e),
                f = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), i = ie.css(e, "top"), u = ie.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1, l ? (r = d.position(), s = r.top, o = r.left) : (s = parseFloat(i) || 0, o = parseFloat(u) || 0), ie.isFunction(t) && (t = t.call(e, n, ie.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, ie.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ie.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                i = r && r.ownerDocument;
            return i ? (t = i.documentElement, ie.contains(t, r) ? (o = r.getBoundingClientRect(), n = X(i), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ie.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (r = e.offset()), r.top += ie.css(e[0], "borderTopWidth", !0), r.left += ie.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - ie.css(n, "marginTop", !0),
                    left: t.left - r.left - ie.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ie.css(e, "position");) e = e.offsetParent;
                return e || Qe
            })
        }
    }), ie.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ie.fn[e] = function(r) {
            return we(this, function(e, r, o) {
                var i = X(e);
                return void 0 === o ? i ? i[t] : e[r] : void(i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o)
            }, e, r, arguments.length)
        }
    }), ie.each(["top", "left"], function(e, t) {
        ie.cssHooks[t] = I(re.pixelPosition, function(e, n) {
            return n ? (n = L(e, t), Ge.test(n) ? ie(e).position()[t] + "px" : n) : void 0
        })
    }), ie.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ie.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ie.fn[r] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === o ? "margin" : "border");
                return we(this, function(t, n, r) {
                    var o;
                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? ie.css(t, n, s) : ie.style(t, n, r, s)
                }, t, i ? r : void 0, i, null)
            }
        })
    }), ie.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ie
    });
    var Pt = e.jQuery,
        Rt = e.$;
    return ie.noConflict = function(t) {
        return e.$ === ie && (e.$ = Rt), t && e.jQuery === ie && (e.jQuery = Pt), ie
    }, t || (e.jQuery = e.$ = ie), ie
});
var AuthType;
! function(e) {
    e[e.aad = 1] = "aad", e[e.msa = 2] = "msa"
}(AuthType || (AuthType = {}));
var Operation;
! function(e) {
    var t = "Redirect";
    e[e[t] = 1] = t, e[e.Error = 2] = "Error"
}(Operation || (Operation = {}));
var ErrorCode;
! function(e) {
    var t = "UnknownError",
        n = "NoAccountFound",
        r = "InvalidDataReceivedFromIdp",
        o = "InvalidConfigurations";
    e[e[o] = 100] = o, e[e[r] = 105] = r, e[e[n] = 110] = n, e[e.TimeOut = 115] = "TimeOut", e[e[t] = 120] = t
}(ErrorCode || (ErrorCode = {}));
var TimerUtils;
! function(e) {
    function t() {
        var e = (new Date).getTime();
        return {
            get seconds() {
                return Math.ceil(((new Date).getTime() - e) / 1e3)
            },
            get ms() {
                return (new Date).getTime() - e
            },
            get formattedSeconds() {
                return Math.ceil(this.seconds() / 1e3) + "s"
            },
            get formattedMs() {
                return this.ms() + "ms"
            }
        }
    }
    e.timer = t
}(TimerUtils || (TimerUtils = {}));
var IframeUtils;
! function(e) {
    function t(e, t) {
        var n = document.createElement("iframe");
        return n.style.display = "none", n.id = t, n.src = e, n
    }

    function n(e) {
        if (void 0 === e || null == e) return !1;
        var t = document.getElementById(e);
        return null != t && null != t.parentNode && t.parentNode.removeChild(t), !0
    }
    e.getIframe = t, e.deleteIframe = n
}(IframeUtils || (IframeUtils = {}));
var Constants;
! function(e) {
    var t = function() {
        function e() {}
        return e
    }();
    t.msaMeSrf = "/Me.srf?wa=wsignin1.0&wreply=", t.aadSavedUsers = "/savedusers?wreply=", e.UriFormats = t;
    var n = function() {
        function e() {}
        return e
    }();
    n.http = "http", n.https = "https", e.UriScheme = n;
    var r = function() {
        function e() {}
        return e
    }();
    r.separator = "://", e.UriSeparator = r;
    var o = function() {
        function e() {}
        return e
    }();
    o.remembered = "1", o.signedIn = "2", o.interrupted = "3", e.AuthState = o;
    var i = function() {
        function e() {}
        return e
    }();
    i.msaFed = "MSAFED", e.Idp = i
}(Constants || (Constants = {}));
var LoggingUtils;
! function(e) {
    function t(e, t) {
        return !(null != t && void 0 !== t && !t) && (null != e || void 0 !== e)
    }

    function n(e, n) {
        t(e, n) && console.log(e)
    }

    function r(e, n) {
        t(e, n) && console.warn(e)
    }

    function o(e, n) {
        t(e, n) && console.error(e)
    }
    e.log = n, e.warn = r, e.error = o
}(LoggingUtils || (LoggingUtils = {}));
var IdpUserResult = function() {
        function e(e) {
            var t = this;
            t.upn = e.upn, t.totalSignedInUsers = e.totalSignedInUsers, t.validSignedInUsers = e.validSignedInUsers, t.errorMessage = e.errorMessage
        }
        return e.prototype.containsValidUser = function() {
            var e = null,
                t = this;
            return (t.errorMessage == e || void 0 === t.errorMessage || "" === t.errorMessage) && (!(t.totalSignedInUsers == e || void 0 === t.totalSignedInUsers || t.totalSignedInUsers < 1) && (t.upn != e && void 0 !== t.upn && "" !== t.upn && !(t.validSignedInUsers == e || void 0 === t.validSignedInUsers || t.validSignedInUsers < 1)))
        }, e
    }(),
    DefaultSignInOptions = function() {
        function e(e) {
            var r = this;
            r.options = e, r.preferredIdp = e.preferredIdp, r.aadConfig = e.aadConfig, r.msaConfig = e.msaConfig, r.enableConsoleLogging = e.enableConsoleLogging, e.msaFedEnabled == n || void 0 === e.msaFedEnabled ? r.msaFedEnabled = t : r.msaFedEnabled = e.msaFedEnabled
        }
        var t = !1,
            n = null;
        return e.prototype.isValid = function() {
            var e, r = this;
            if (r.preferredIdp == n || void 0 === r.preferredIdp) return e = "preferredIdp  is a required parameter. It cannot be null or undefined", LoggingUtils.error(e, enableConsoleLog), {
                isPassed: t,
                errorMessage: e
            };
            if (AuthType[r.preferredIdp] !== AuthType[AuthType.aad] && AuthType[r.preferredIdp] !== AuthType[AuthType.msa]) return e = "preferredIdp is set to something other than 'AAD' and 'MSA'.", LoggingUtils.error(e, enableConsoleLog), {
                isPassed: t,
                errorMessage: e
            };
            if (!(r.aadConfig != n && void 0 !== r.aadConfig || r.msaConfig != n && void 0 !== r.msaConfig)) return e = "Both AAD and MSA configurations are null or undefined. At least one of the IDP configurations should be set.", LoggingUtils.error(e, enableConsoleLog), {
                isPassed: t,
                errorMessage: e
            };
            if (r.aadConfig !== n && void 0 !== r.aadConfig) {
                if (r.aadConfig.appId == n || void 0 === r.aadConfig.appId || "" === r.aadConfig.appId) return e = "AadConfig: appId is a required parameter. It cannot be null, undefined or empty.", LoggingUtils.error(e, enableConsoleLog), {
                    isPassed: t,
                    errorMessage: e
                };
                if (r.aadConfig.host == n || void 0 === r.aadConfig.host || "" === r.aadConfig.host) return e = "AadConfig: host is a required parameter. It cannot be null, undefined or empty.", LoggingUtils.error(e, enableConsoleLog), {
                    isPassed: t,
                    errorMessage: e
                };
                if (r.aadConfig.replyUri == n || void 0 === r.aadConfig.replyUri || "" === r.aadConfig.replyUri) return e = "AadConfig: replyUri is a required parameter. It cannot be null, undefined or empty.", LoggingUtils.error(e, enableConsoleLog), {
                    isPassed: t,
                    errorMessage: e
                }
            }
            if (r.msaConfig !== n && void 0 !== r.msaConfig) {
                if (r.msaConfig.host == n || void 0 === r.msaConfig.host || "" === r.msaConfig.host) return e = "MsaConfig: host is a required parameter. It cannot be null, undefined or empty.", LoggingUtils.error(e, enableConsoleLog), {
                    isPassed: t,
                    errorMessage: e
                };
                if (r.msaConfig.replyUri == n || void 0 === r.msaConfig.replyUri || "" === r.msaConfig.replyUri) return e = "MsaConfig: replyUri  is a required parameter. It cannot be null, undefined or empty.", LoggingUtils.error(e, enableConsoleLog), {
                    isPassed: t,
                    errorMessage: e
                }
            }
            return r.msaFedEnabled == n || void 0 === r.msaFedEnabled ? (e = "msaFedEnabled is a required parameter. It cannot be null or undefined", LoggingUtils.error(e, enableConsoleLog), {
                isPassed: t,
                errorMessage: e
            }) : r.enableConsoleLogging == n || void 0 === r.enableConsoleLogging ? (e = "enableConsoleLogging is a required parameter. It cannot be null or undefined", LoggingUtils.error(e, enableConsoleLog), {
                isPassed: t,
                errorMessage: e
            }) : (LoggingUtils.log("Validation of configurations options finished successfully.", enableConsoleLog), {
                isPassed: !0,
                errorMessage: n
            })
        }, e
    }(),
    enableConsoleLog = !1,
    msaFedEnabled = !1;