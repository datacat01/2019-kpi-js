this.MSA = this.MSA || {}, this.MSA.MeControl = this.MSA.MeControl || {}, this.MSA.MeControl.WebInline = function(o) {
    "use strict";

    function e() {
        var i, a = [],
            s = 0;

        function u(e) {
            var t = e.name;
            if (i && i.hasOwnProperty(t)) {
                var n = i;
                setTimeout(function() {
                    n[t].apply(i, e.params)
                }, 0)
            }
        }
        return {
            setComponent: function(e) {
                i = e;
                var t = a;
                a = [];
                for (var n = 0; n < t.length; n++) u(t[n])
            },
            handleCall: function(r, o) {
                return void 0 === o && (o = !1),
                    function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = {
                            name: r,
                            params: e
                        };
                        i ? u(n) : a.splice(o ? s++ : a.length, 0, n)
                    }
            }
        }
    }
    var i, t = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        },
        n = window,
        a = n.MSA.MeControl = n.MSA.MeControl || {},
        r = n.MeControl = n.MeControl || {},
        s = Date.now ? function() {
            return Date.now()
        } : function() {
            return +new Date
        },
        u = n.performance ? function() {
            return performance.now()
        } : s,
        l = Object.assign || t,
        c = "msameid",
        d = e();
    o.id = C();
    try {
        var f = n.sessionStorage;
        f && (o.id = f.getItem(c) || o.id, f.setItem(c, o.id))
    } catch (e) {}

    function m(e) {
        i = e
    }

    function g(e, t, n, r, o) {
        void 0 === r && (r = "");
        var i = o || {};
        i.type = "qos", i.success = t ? "1" : "0", i.duration = n || 0, i.errorCode = r, p(e, i)
    }

    function p(e, t) {
        var n = {
                type: "bici",
                ts: s(),
                uaid: o.id
            },
            r = l({}, n, t);
        i && i(e, r)
    }

    function v(e, t) {
        d.handleCall("fireEvent")(e, t)
    }

    function h(e) {
        d.setComponent(e)
    }

    function y(e) {
        d.handleCall("setCv", !0)(e)
    }

    function C() {
        return (e() + e() + "-" + e() + "-4" + e().substr(0, 3) + "-" + e() + "-" + e() + e() + e()).toLowerCase();

        function e() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
    }
    var I, S, b = Object.freeze({
            get id() {
                return o.id
            },
            setLogEvent: m,
            logQos: g,
            logEvent: p,
            logTelemetryEvent: v,
            setEventGenerator: h,
            setTelemetryCv: y,
            guid: C
        }),
        A = 3e3,
        U = '<div><div class="msame_Header"><a style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden; max-width: 160px; display: inline-block; line-height: 48px; font-family: \'Segoe UI\'; font-size: 12.4px; color: rgb(80,80,80); padding: 0 10px;"></a></div></div>',
        M = {},
        N = !1,
        w = !1,
        P = 0;

    function D(e) {
        if (v("PartnerApiCall", {
                method: "load",
                params: e
            }), !e) return !1;
        if (m(e.events && e.events.onEventLog), !(e.userData && e.rpData && e.rpData.preferredIdp && e.rpData.aadInfo && e.rpData.msaInfo)) return g("InlineLoad", !1, 0, "InvalidOptions"), !1;
        if (a.Config = a.Config || {}, e.signInStr = e.signInStr || "Sign in", e.signOutStr = e.signOutStr || "Sign out", e.market = e.market || a.Config.mkt, e.urlBase = e.urlBase || a.Config.gfx, e.debug = e.debug || a.Config.dbg, e.isINT = e.isINT || a.Config.int, a.Version = a.Version || e.version || a.Config.ver, S = n.MejQuery = e.jQuery || n.jQuery || (n.$ && n.$.fn ? n.$ : null), !n.MejQuery) return g("InlineLoad", !1, 0, "JQueryMissing"), !1;
        if (!n.MejQuery.fn.on) return g("InlineLoad", !1, 0, "JQueryVersion"), !1;
        if (I = e, P = u(), N) return L(), !1;
        var t = a;
        return t.WebBoot && t.WebBoot.createMeController(I), setTimeout(x, 0), !0
    }

    function O() {
        return I
    }

    function k(e, t, n, r) {
        var o = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("script");
        i.async = !0, i.charset = "UTF-8", i.src = e;
        var a = setTimeout(function() {
            r && r(), V(t, A, e, !1, !0)
        }, A);

        function s(e) {
            i && (T(t, e), i.onload = i.onerror = null, i = null)
        }
        M[t] = {
            timeoutId: a,
            callback: n,
            start: u(),
            url: e
        }, i.onload = function() {
            M[t] && n && n(), s()
        }, i.onerror = function() {
            r && r(), s(!0)
        }, o.insertBefore(i, o.firstChild)
    }

    function T(e, t) {
        if (M[e]) {
            clearTimeout(M[e].timeoutId), V(e, u() - M[e].start, M[e].url, t);
            var n = M[e];
            !t && n.callback && n.callback(), delete M[e]
        }
    }

    function E(e) {
        return a.Config.gfx + "/MeControl/" + a.Config.ver + "/" + a.Config.mkt + "/" + e + (a.Config.dbg ? "" : ".min") + ".js"
    }

    function L() {
        if (!I || !I.userData) throw new Error("MeControl: no options object given before showHeaderNoJs was called");
        var e = I.rpData.preferredIdp === a.IDP.MSA ? I.rpData.msaInfo : I.rpData.aadInfo;
        if (!e) throw new Error("MeControl: no rpData options given for showHeaderNoJs");
        var t = I.signInStr,
            n = e.signInUrl;
        if (I.userData.authenticatedState == a.AuthState.SignedIn && (t = I.signOutStr, n = e.signOutUrl), S) {
            var r = S(U);
            S(".msame_Header a", r).attr("href", n || "#").text(t || ""), S("#" + I.containerId).html(r)
        }
    }

    function V(e, t, n, r, o) {
        g(e + "Load", !r, t, n + (o ? "(timeout)" : ""), {
            url: n,
            timeout: o
        }), v("OutgoingRequest", {
            currentOperation: e,
            serviceOperation: "DownloadScript",
            service: "MeControl",
            url: n,
            success: !r,
            duration: t
        })
    }

    function x() {
        w || (w = !0, k(E("meBoot"), "meBoot", function() {}, function() {
            I ? L() : N = !0
        }))
    }

    function j(e) {
        if (!e) return null;
        var t = {
            apiGeneration: "GEN1",
            derivedFromV2ConfigObject: !0,
            containerId: e.containerId,
            rpData: F(e.idpConfigs),
            mobileBreakpoints: e.primaryUXConfig && e.primaryUXConfig.displayModes ? R(e.primaryUXConfig.displayModes) : void 0,
            extensibleLinks: e.appContextConfig && e.appContextConfig.commands ? X(e.appContextConfig.commands) : void 0,
            signInStr: e.primaryUXConfig ? e.primaryUXConfig.signInStr : void 0,
            signOutStr: e.primaryUXConfig ? e.primaryUXConfig.signOutStr : void 0,
            events: e.events ? q(e.events) : void 0,
            userData: e.currentAccount ? G(e.currentAccount) : void 0,
            market: e.market,
            version: e.version,
            debug: e.debug,
            urlBase: e.urlBase,
            isINT: !!e.environment && "int" === e.environment,
            headerHeight: e.transitionalProperties && e.transitionalProperties.headerHeight ? e.transitionalProperties.headerHeight : void 0,
            jQuery: e.transitionalProperties && e.transitionalProperties.jQuery ? e.transitionalProperties.jQuery : void 0
        };
        return e.currentAccount && (t.userData = G(e.currentAccount)), t
    }
    var B, F = function(e) {
            var r = {};
            switch (e[0].type) {
                case "aad":
                    r.preferredIdp = "aad";
                    break;
                case "msa":
                    r.preferredIdp = "msa"
            }
            return e.forEach(function(e, t, n) {
                switch (e.type) {
                    case "aad":
                        r.aadInfo = J(e);
                        break;
                    case "msa":
                        r.msaInfo = Q(e)
                }
            }), r
        },
        H = function(e, t) {
            return "string" == typeof e.signOutUrl ? t.signOutUrl = e.signOutUrl ? e.signOutUrl : "" : t.signOutUrlAsV2Callback = e.signOutUrl, "string" == typeof e.signInUrl ? t.signInUrl = e.signInUrl ? e.signInUrl : "" : t.signInUrlAsV2Callback = e.signInUrl, "string" == typeof e.rememberedAccountsUrl ? t.meUrl = e.rememberedAccountsUrl ? e.rememberedAccountsUrl : "" : t.meUrlAsV2Callback = e.rememberedAccountsUrl, t
        },
        Q = function(e) {
            var t = {};
            return H(e, t), t
        },
        J = function(e) {
            var t = {};
            return H(e, t), "string" == typeof e.accountSettingsUrl ? t.accountSettingsUrl = e.accountSettingsUrl : t.accountSettingsUrlAsV2Callback = e.accountSettingsUrl, t
        },
        R = function(e) {
            var r = {};
            return e.forEach(function(e, t, n) {
                switch (e.type) {
                    case "mobile":
                        r.mobile = e.widthBreakpoint;
                        break;
                    case "shortHeader":
                        r.shortHeader = e.widthBreakpoint
                }
            }), r
        },
        X = function(e) {
            var o = [];
            return e.forEach(function(e, t, n) {
                var r = {
                    id: e.id,
                    label: e.text,
                    openInNewTab: e.openInNewTab,
                    string: e.text,
                    url: e.url,
                    onClick: e.onClick
                };
                o.push(r)
            }), o
        },
        q = function(e) {
            return {
                onSignIn: e.onBeforeSignIn,
                onBeforeSignOut: e.onBeforeSignOut,
                onEventLog: e.onEventLog
            }
        },
        G = function(e) {
            var t = {
                idp: function(e) {
                    switch (e) {
                        case "msa":
                            return "msa";
                        case "aad":
                            return "aad";
                        case "msaFed":
                            return "msaFed"
                    }
                }(e.type),
                firstName: e.firstName,
                lastName: e.lastName,
                memberName: e.memberName,
                nickName: e.profile ? e.profile.profileName : void 0,
                tileUrl: e.pictureUrl,
                authenticatedState: function(e) {
                    switch (e) {
                        case "signedIn":
                            return 1;
                        case "signedInIDPOnly":
                            return 2;
                        case "notSignedIn":
                            return 3
                    }
                }(e.authenticatedState)
            };
            return _(e) ? t.cid = e.cid : (W(e) || $(e)) && (t.displayName = e.displayName, t.orgName = e.orgName, t.orgLogoUrl = e.orgLogoUrl, t.sessionId = e.sessionId, t.roleName = e.roleName), t
        },
        _ = function(e) {
            return "msa" === e.type
        },
        W = function(e) {
            return "aad" === e.type
        },
        $ = function(e) {
            return "msaFed" === e.type
        },
        z = function(e, t) {
            var n = {};
            for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
            return n.displayName = e.displayName, n.orgName = e.orgName, n.orgLogoUrl = e.orgLogoUrl, n.sessionId = e.sessionId, n.roleName = e.roleName, n
        };

    function K(e) {
        return v("PartnerApiCall", {
            method: "load:V19",
            params: e
        }), !!e && (D(j(e) || {}), B = e, !0)
    }
    var Y = e(),
        Z = {
            setController: Y.setComponent,
            setActiveUser: ee("setActiveUser"),
            setExtensibleLinks: ee("setExtensibleLinks"),
            refreshUserPicture: ee("refreshUserPicture"),
            setUserPicture: ee("setUserPicture"),
            setMobileState: ee("setMobileState"),
            openCloseDropdown: ee("openCloseDropdown")
        };

    function ee(n) {
        var r = Y.handleCall(n);
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            v("PartnerApiCall", {
                method: n,
                params: e.slice()
            }), r.apply(void 0, e)
        }
    }
    var te, ne, re, oe = e(),
        ie = {
            setController: oe.setComponent,
            setActiveAccount: ae("setActiveAccount"),
            setCommands: ae("setCommands"),
            setProfilePicture: ae("setProfilePicture"),
            refreshProfilePicture: ae("refreshProfilePicture"),
            setThemeName: ae("setThemeName")
        };

    function ae(n) {
        var r = oe.handleCall(n);
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            v("PartnerApiCall", {
                method: n + ":V19",
                params: e.slice()
            }), r.apply(void 0, e)
        }
    }

    function se() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return l.apply(void 0, [a].concat(e))
    }
    n.MejQuery = n.jQuery, te = ie, ne = {
        API: Z,
        Loader: {
            load: D,
            getOptions: O,
            loadScript: k,
            scriptLoaded: T,
            getJsUrl: E,
            showHeaderNoJs: L
        },
        IDP: {
            AAD: "aad",
            MSA: "msa",
            ORG_ID: "orgId"
        },
        V1AccountType: {
            AAD: "aad",
            MSA: "msa",
            MSA_FED: "msaFed"
        },
        AuthState: {
            SignedIn: 1,
            SignedInIdp: 2,
            NotSignedIn: 3
        },
        Config: a.Config || {}
    }, re = {
        API: te,
        Loader: {
            load: K
        },
        Types: {
            AccountTypes: {
                AAD: "aad",
                MSA: "msa",
                MSA_FED: "msaFed"
            },
            AuthenticatedStates: {
                SignedIn: "signedIn",
                SignedInIdpOnly: "signedInIDPOnly",
                NotSignedIn: "notSignedIn"
            },
            CommandTypes: {
                Link: "link"
            },
            DisplayModeTypes: {
                Mobile: "mobile",
                ShortHeader: "shortHeader"
            },
            EnvironmentTypes: {
                INT: "int",
                PROD: "prod"
            },
            IDPTypes: {
                AAD: "aad",
                MSA: "msa"
            },
            RuntimeDisplayModes: {
                Auto: "auto",
                Full: "full",
                Mobile: "mobile",
                ShortHeader: "shortHeader"
            }
        },
        Config: a.Config || {}
    }, se(ne, {
        MobileState: {
            Auto: -1,
            Full: 0,
            ShortHeader: 1,
            Mobile: 2
        },
        Log: b
    }) && function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        l.apply(void 0, [r].concat(e))
    }(re);
    var ue = n.require;
    ue && ue.specified && ue.specified("jqReady!") && ue(["jqReady!"], function(e) {
        n.MejQuery = e, x()
    });
    var le = n.onMeControlReadyToLoad;
    return setTimeout(function() {
        return le && le()
    }, 0), o.getStartTime = function() {
        return P
    }, o.loadScript = k, o.getOptions = O, o.getJsUrl = E, o.showHeaderNoJs = L, o.optionsAreDerivedFromV2Config = function() {
        return !(!I || !0 !== I.derivedFromV2ConfigObject)
    }, o.getOptionsV2 = function() {
        return B
    }, o.extendMe = se, o.createProxy = e, o.setLogEvent = m, o.logQos = g, o.logEvent = p, o.logTelemetryEvent = v, o.setEventGenerator = h, o.setTelemetryCv = y, o.guid = C, o.publicProxy = Z, o.publicProxyV2 = ie, o.w = n, o.ME = a, o.MEV2 = r, o.getTime = s, o.perfNow = u, o.getPageUrl = function() {
        return n.location.href
    }, o.assign = l, o.remapV2ConfigToV1Config = j, o.remapV1UserToV2Account = function(e) {
        var t;
        switch (t = function(e) {
            var t = {
                firstName: e.firstName,
                lastName: e.lastName,
                memberName: e.memberName,
                pictureUrl: e.tileUrl
            };
            switch (e.idp) {
                case "msa":
                    t.type = "msa";
                    break;
                case "aad":
                    t.type = "aad";
                    break;
                case "msaFed":
                    t.type = "msaFed"
            }
            switch (e.authenticatedState) {
                case 1:
                    t.authenticatedState = "signedIn";
                    break;
                case 2:
                    t.authenticatedState = "signedInIDPOnly";
                    break;
                case 3:
                    t.authenticatedState = "notSignedIn"
            }
            if (e.nickName) {
                var n = {
                    profileName: e.nickName,
                    profilePictureUrl: e.tileUrl ? e.tileUrl : ""
                };
                t.profile = n
            }
            return t
        }(e), e.idp) {
            case "msa":
                t = function(e, t) {
                    var n = {};
                    for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
                    return n.cid = e.cid, n
                }(e, t);
                break;
            case "aad":
            case "msaFed":
                t = z(e, t)
        }
        return t
    }, o.remapV2AccountToV1User = G, o.remapV2CommandsToV1ExtensibleLinks = X, o
}({});;
window.MSA = window.MSA || {};
window.MSA.MeControl = window.MSA.MeControl || {};
window.MSA.MeControl.Config = {
    "ver": "9.18275.0",
    "mkt": "en-US",
    "ptn": "office",
    "gfx": "https://mem.gfx.ms/me",
    "dbg": false,
    "aad": false,
    "int": false,
    "pxy": false,
    "msTxt": false,
    "rwd": true,
    "telEvs": "PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall",
    "remAcc": true,
    "main": "meBoot",
    "wreply": null
};
window.MeControl = window.MeControl || {};
window.MeControl.Config = {
    "ver": "9.18275.0",
    "mkt": "en-US",
    "ptn": "office",
    "gfx": "https://mem.gfx.ms/me",
    "dbg": false,
    "aad": false,
    "int": false,
    "pxy": false,
    "msTxt": false,
    "rwd": true,
    "telEvs": "PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall",
    "remAcc": true,
    "main": "meBoot",
    "wreply": null
};