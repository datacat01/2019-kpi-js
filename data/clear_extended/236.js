/*! imslib.js 1.13.0 1bf9a0f-c8e4fbf */
Array.prototype.every || (Array.prototype.every = function(e, t) {
        "use strict";
        var n, i;
        if (null == this) throw new TypeError("this is null or not defined");
        var o = Object(this),
            r = o.length >>> 0;
        if ("function" != typeof e) throw new TypeError;
        for (1 < arguments.length && (n = t), i = 0; i < r;) {
            if (i in o)
                if (!e.call(n, o[i], i, o)) return !1;
            i++
        }
        return !0
    }), Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
        var n, i;
        if (null === this) throw new TypeError(" this is null or not defined");
        var o = Object(this),
            r = o.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (1 < arguments.length && (n = t), i = 0; i < r;) {
            i in o && e.call(n, o[i], i, o), i++
        }
    }), Array.prototype.includes || (Array.prototype.includes = function(e, t) {
        "use strict";
        if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
        var n = Object(this),
            i = parseInt(n.length, 10) || 0;
        if (0 === i) return !1;
        var o, r, s = parseInt(t, 10) || 0;
        for (0 <= s ? o = s : (o = i + s) < 0 && (o = 0); o < i;) {
            if (e === (r = n[o]) || e != e && r != r) return !0;
            o++
        }
        return !1
    }), Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }), Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), Object.keys || (Object.keys = function() {
        "use strict";
        var o = Object.prototype.hasOwnProperty,
            r = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            s = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            a = s.length;
        return function(e) {
            if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
            var t, n, i = [];
            for (t in e) o.call(e, t) && i.push(t);
            if (r)
                for (n = 0; n < a; n++) o.call(e, s[n]) && i.push(s[n]);
            return i
        }
    }()), String.prototype.includes || (String.prototype.includes = function(e, t) {
        "use strict";
        return "number" != typeof t && (t = 0), !(this.length < t + e.length) && -1 !== this.indexOf(e, t)
    }), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
        return this.substr(t = t || 0, e.length) === e
    }),
    function() {
        var e = window.self;

        function a(e) {
            this.message = e
        }(a.prototype = Error()).name = "InvalidCharacterError", e.atob || (e.atob = function(e) {
            var t = (e + "").replace(/[=]+$/, "");
            if (t.length % 4 == 1) throw new a("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var n, i, o = 0, r = 0, s = ""; i = t.charAt(r++); ~i && (n = o % 4 ? 64 * n + i : i, o++ % 4) ? s += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0) i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);
            return s
        })
    }(),
    function(w) {
        w.adobeid = function(e) {
            "use strict";
            var t = {};
            return "object" == typeof window.adobeid ? t = window.adobeid : window.opener && window.opener.adobeid ? t = window.opener.adobeid : e.error("Missing window.adobeid, falling back to an empty object"), t.redirect_uri && t.redirect_uri === window.location.href && delete t.redirect_uri, t
        }, w.build = {
            endpoints: {
                authorize: {
                    name: "authorize",
                    endpoint: "https://ims-na1.adobelogin.com/ims/authorize/v1"
                },
                avatar: {
                    name: "avatar/download",
                    endpoint: "https://ims-na1.adobelogin.com/ims/avatar/download"
                },
                check: {
                    name: "check/token",
                    endpoint: "https://adobeid-na1.services.adobe.com/ims/check/${ version }/token"
                },
                check_status: {
                    name: "check/status",
                    endpoint: "https://adobeid-na1.services.adobe.com/ims/check/v1/status"
                },
                logout: {
                    name: "logout",
                    endpoint: "https://adobeid-na1.services.adobe.com/ims/logout/v1"
                },
                logout_token: {
                    name: "logout_token",
                    endpoint: "https://adobeid-na1.services.adobe.com/ims/logout/v1/token"
                },
                profile: {
                    name: "profile",
                    endpoint: "https://ims-na1.adobelogin.com/ims/profile/v1"
                },
                validate_token: {
                    name: "validate_token",
                    endpoint: "https://ims-na1.adobelogin.com/ims/validate_token/v1"
                },
                userinfo: {
                    name: "userinfo",
                    endpoint: "https://ims-na1.adobelogin.com/ims/userinfo/v1"
                },
                fg_value: {
                    name: "fg_value",
                    endpoint: "https://adobeid-na1.services.adobe.com/ims/fg/value/v1"
                },
                social_providers: {
                    name: "social_providers",
                    endpoint: "https://adobeid-na1.services.adobe.com/ims/social/v1/providers"
                },
                ijt: {
                    name: "ijt",
                    endpoint: "https://adobeid-na1.services.adobe.com/ims/jump/implicit/"
                }
            },
            methodTrackingEnabled: !1,
            sha: "1bf9a0f",
            version: "1.13.0"
        }, w.config = function(e, t, n, i) {
            "use strict";

            function o() {
                var e = i.getThisScriptSrc(),
                    t = /\bclient_id=([^&]+)\b/.exec(e);
                return t ? t[1].split(",") : []
            }
            e.debug && t.toggleLogging(!0);
            var r, s, a = o();
            return a && 0 !== a.length || (a = e.client_id), {
                api: n(a),
                client_id: e.client_id ? Array.isArray(e.client_id) ? e.client_id[0] : e.client_id : (t.info("Missing window.adobeid.client_id. Falling back to client_id from url. Please add client_id to window.adobeid"), o()[0]),
                locale: e.locale ? e.locale : (t.info("Missing window.adobeid.locale. Falling back to locale from url. Please add locale to window.adobeid"), r = i.getThisScriptSrc(), (s = /\blocale=([^&]+)\b/.exec(r)) ? s[1] : ""),
                refreshSsoCookiesEnabled: !1,
                sloEnabled: !0,
                sunbreakScope: "acct_mgmt_webui",
                sunbreakScopeExpanded: "acct_mgmt_api,gnav,update_profile.address.mail_to,update_profile.dob,update_profile.email,update_profile.first_name,update_profile.industry,update_profile.job_function,update_profile.job_title,update_profile.last_name,update_profile.mrktPerm,update_profile.phoneNumber,update_profile.phonetic_name,update_profile.preferred_languages,update_profile.screen_name,update_profile.secondary_email"
            }
        }, w.mapEndpoints = function(c) {
            return function(e) {
                "use strict";
                var t = c.endpoints;
                Array.isArray(e) || (e = [e]);
                var n = {
                    version: {
                        v1: "v1"
                    }
                };
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var o = t[i],
                            r = {
                                name: o.name,
                                endpoint: {}
                            };
                        n[i] = r;
                        for (var s = 0, a = e.length; s < a; ++s) {
                            r.endpoint[e[s]] = o.endpoint
                        }
                    } return n
            }
        }, w.errorEvents = {
            avatarPicture: function() {
                return {
                    name: "avatarPictureError",
                    userMessage: "current scopes won't retrieve the user_id"
                }
            },
            jsException: function(e, t) {
                return {
                    name: "jsExceptionError",
                    message: "adobeid." + t,
                    exception: e
                }
            },
            fromApiCallRedirect: function(e) {
                return {
                    name: "fromApiCallRedirectError",
                    userMessage: e
                }
            },
            network: function(e) {
                return {
                    debug: {
                        url: e
                    },
                    name: "networkError",
                    userMessage: "Network error"
                }
            },
            popupBlocked: function(e) {
                return {
                    error: "popupBlocked",
                    popupUrl: e
                }
            },
            rateLimit: function(e, t) {
                return {
                    name: "rate_limit",
                    retryAfter: e,
                    isUserSignedIn: t
                }
            }
        }, w.eventDispatcher = function(n, i, t, o, r, s) {
            function a(t, e) {
                try {
                    s.callIfFunction(n[t], n, e)
                } catch (e) {
                    c(i.jsException(e, t))
                }
            }

            function c(e) {
                t.dispatchEvent(r.types.ERROR, {
                    error: e
                }), "function" != typeof n.onError && ("string" == typeof e.userMessage ? o.info(e.userMessage) : o.error("unhandled javascript error: " + JSON.stringify(e)), e.debug && o.info(JSON.stringify(e.debug)))
            }
            return {
                onApiError: function(e) {
                    c(i.network(e))
                },
                onError: c,
                onErrorRateLimited: function(e, t) {
                    c(i.rateLimit(e.retryAfter, t.isSignedInUser()))
                },
                onReady: function(e) {
                    t.dispatchEvent(r.types.READY, e)
                },
                registerEvents: function() {
                    t.addEventListener(r.types.PROFILE, function(e) {
                        a("onProfile", [e.data.profile])
                    }), t.addEventListener(r.types.ACCESS_TOKEN, function(e) {
                        a("onAccessToken", [e.data.accessTokenInfo.access_token, e.data.accessTokenInfo])
                    }), t.addEventListener(r.types.READY, function(e) {
                        a("onReady", [e.data.signInState])
                    }), t.addEventListener(r.types.ERROR, function(e) {
                        s.callIfFunction(n.onError, n, [e.data.error])
                    }), t.addEventListener(r.types.ACCESS_TOKEN_EXPIRED, function(e) {
                        a("onAccessTokenHasExpired", [e.data.accessTokenInfo.access_token, e.data.accessTokenInfo])
                    })
                }
            }
        }, w.events = function(i) {
            "use strict";
            var s = {};
            return {
                addEventListener: function(e, t) {
                    var n = s[e] || [];
                    (s[e] = n).push(t)
                },
                dispatchEvent: function(e, t) {
                    var n = s[e];
                    if (this.triggerEvent(e, t), n)
                        for (var i = {
                                type: e,
                                data: t
                            }, o = 0, r = n.length; o < r; ++o) "function" == typeof n[o] && n[o](i)
                },
                triggerEvent: function(e, t) {
                    if (window.addEventListener) {
                        var n = document.createEvent("Event");
                        n.initEvent(i.domEventNamespace + "." + e, !0, !0), t && (n.data = t), document.dispatchEvent(n)
                    }
                }
            }
        }, w.publicEvents = function() {
            "use strict";
            var t, n = {
                PROFILE: "profile",
                ACCESS_TOKEN: "accesstoken",
                ACCESS_TOKEN_EXPIRED: "accesstokenexpired",
                READY: "ready",
                ERROR: "error"
            };
            return {
                domEventNames: (t = {}, Object.keys(n).forEach(function(e) {
                    t[e] = "imslib." + n[e]
                }), t),
                domEventNamespace: "imslib",
                types: n
            }
        }, w.tokenManagement = function(c, l, d) {
            return {
                shouldAcceptToken: function(e, t, n, i, o, r, s) {
                    var a = !0;
                    return [{
                        shouldReject: !1 === o,
                        shouldLogToErrorConsole: !1,
                        message: "access_token is invalid."
                    }, {
                        shouldReject: !0 === o && i && i !== s,
                        shouldLogToErrorConsole: !1,
                        message: "access_token was from another userId (isReAuthentication=#0).".replace("#0", r)
                    }, {
                        shouldReject: !0 === o && !c.isKnownClientID(t),
                        shouldLogToErrorConsole: !0,
                        message: "the #0 client_id associated with the access token is not for a known client_id (#1).".replace("#0", t).replace("#1", Object.keys ? Object.keys(l.api.authorize.endpoint).join(",") : c.getClientID())
                    }, {
                        shouldReject: !0 === o && !c.matchesRequiredScope(n),
                        shouldLogToErrorConsole: !0,
                        message: "the (#0) scope associated with the access token doesn't match the required scope (#1).".replace("#0", n).replace("#1", c.getScope())
                    }, {
                        shouldReject: !e,
                        shouldLogToErrorConsole: !0,
                        message: "no access token."
                    }].forEach(function(e) {
                        e.shouldReject && (a = !1, (e.shouldLogToErrorConsole ? d.error : d.info)("shouldAcceptToken: " + e.message))
                    }), a
                }
            }
        }, w.adobeIMS = function(t, e, r, n, f, p, o, h, s, a, _, g, c, l, d, m, u, v, k, i) {
            "use strict";

            function I() {
                return !(!t.optimizations || !t.optimizations.fastEvents)
            }
            var y = "adobeid_ims_access_token",
                b = "/",
                T = "from_ims",
                S = T + "=true",
                E = "rctx",
                w = t.popupPageName || "redirectims.html",
                A = "_blank",
                O = {
                    sign_in: {
                        width: 500,
                        height: 630
                    },
                    sign_up: {
                        width: 500,
                        height: 800
                    },
                    sign_out: {
                        width: 320,
                        height: 240
                    },
                    jump: {
                        width: 500,
                        height: 800
                    },
                    any: {
                        width: 500,
                        height: 630
                    }
                },
                R = null;
            if (window.adobeIMS) return g.error("adobeIMS already exists. Have you loaded the file twice?"), null;
            var C = t.openidCompatible ? "sub" : "userId";

            function U(e) {
                return e.error === a.Errors.RATE_LIMITED
            }

            function j(o, e, r) {
                arguments.length < 3 && (r = e, e = o.getAccessToken()), a.getProfile(e, function(e) {
                    o.setProfile(e), k.callIfFunction(r, o)
                }, function(e) {
                    var t, n, i;
                    g.error("Failed to retrieve the profile ", e), U(e) ? (h.onErrorRateLimited(e, o), k.callIfFunction(r, o)) : (i = e) && "ride_AdobeID_acct_disabled" === i.error ? (n = o)._invalidateTokens(Object.keys(n._accessTokensInfos), function() {
                        n._clearCredentials({
                            updateUI: !0
                        }), n.signIn()
                    }) : ((!(t = e) || t.error || t.error_flag || t.error_description) && o._clearCredentials({
                        updateUI: !0
                    }), k.callIfFunction(r, o))
                })
            }
            var P, L = {
                isRequired: !1,
                url: null
            };

            function M(e, t) {
                L.isRequired = e, L.url = t
            }
            var F = null,
                x = null,
                D = {
                    DomEvents: l.domEventNames,
                    Events: l.types,
                    IMSAPIs: {}
                };

            function N() {
                var n = this,
                    i = {
                        access_token: n.adobeid.standalone.token,
                        client_id: n.getClientID()
                    };
                a.validateToken(i, function(e) {
                    var t = e.token;
                    n.shouldAcceptTheToken(t) && n._setAccessTokenAndGetProfile(i.access_token, t.isReauthentication, t.client_id, t.scope, t.expires_in, null, function() {
                        n._onReady()
                    })
                }, function() {
                    o.dispatchEvent(l.types.ACCESS_TOKEN_EXPIRED, {
                        accessTokenInfo: i
                    })
                })
            }

            function z() {
                var i = this,
                    e = function() {
                        var t = k.cloneObject(i._accessTokensInfos || {}),
                            n = function() {
                                if (i.isMandatorySignIn() && !i.isSignedInUser() && i.signIn(), i._callCallbacksToUpdateUI(), I() && !i.isSignedInUser())
                                    for (var e in t) t.hasOwnProperty(e) && t[e] && o.dispatchEvent(l.types.ACCESS_TOKEN_EXPIRED, {
                                        accessTokenInfo: t[e]
                                    });
                                i._onReady()
                            };
                        if (i.isSingleLogOutEnabled() || !i.isSignedInUser()) i.signInBasedOnSingleSignOnSSO(function(e) {
                            "no_cors" === e && i.isSignedInUser() ? j(i, n) : k.callIfFunction(n, i)
                        });
                        else {
                            var e = i.getAccessToken();
                            delete t[i.getKeyForAccessToken(e)], i.testAccessTokenIsStillValid(e, n)
                        }
                    };
                I() && (this.loadFromStorage(), k.isEmptyObject(this._profile) || this._callCallbacksToUpdateUI()), this._signInWhenRedirectedBackFromIMS(function() {
                    i._isFinalRedirectPageInModalMode() ? window.opener && (window.opener.adobeIMS._importDataFromModalWindow(i), k.closeWindow()) : (i.loadFromStorage(), i.hasJustReturnedFromAuthorize ? this.isSignedInUser() ? i._testAccessTokensAreStillValid() : i.signInBasedOnSingleSignOnSSO(function() {
                        i._testAccessTokensAreStillValid()
                    }) : i.isSignedInUser(!0) ? i.testAccessTokenIsStillValid(i.getAccessToken(!0), e) : e())
                })
            }

            function H(t) {
                var n = this;
                return function(e) {
                    U(e = e || {}) ? (h.onErrorRateLimited(e, n), k.callIfFunction(t, n)) : e.jump ? (g.info("jumping to " + e.jump), M(!0, e.jump), n.isModal() ? n._clearCredentials() : n._openWindow(e.jump, O.jump)) : "ride_AdobeID_acct_evs" === e.error ? (n._clearCredentials(), M(!0, null), n.isModal() || n.signIn()) : "ride_AdobeID_acct_disabled" === e.error ? n._invalidateTokens(Object.keys(n._accessTokensInfos), function() {
                        n._clearCredentials({
                            updateUI: !0
                        }), M(!0, null), n.isModal() || n.signIn()
                    }) : "no_cors" === e.error ? k.callIfFunction(t, n, ["no_cors"]) : e.error === a.Errors.ABORTED ? (n._last_ui_update._any_update_so_far = !0, h.onError(a.Errors.ABORTED), k.callIfFunction(t, n, [a.Errors.ABORTED])) : (n._clearCredentials({
                        updateUI: !0
                    }), n.hasJustSingleLoggedOutSLO = !0, k.callIfFunction(t, n))
                }
            }
            return D = k.merge({
                    _initialize: function() {
                        h.registerEvents(), this.adobeid.standalone && this.adobeid.standalone.token ? N.call(this) : this.adobeid.ijt ? function() {
                            var t = this,
                                n = {
                                    ijt: this.adobeid.ijt,
                                    redirect_uri: this._getRedirectUri(f.api.ijt),
                                    client_id: this.getClientID(f.api.ijt)
                                };
                            a.exchangeIjt(n, function(e) {
                                t._setAccessTokenAndGetProfile(e.access_token, !1, n.client_id, t.getScope(), e.expires_in, "", function() {
                                    t._onReady()
                                })
                            }, H.call(t, function() {
                                z.call(t)
                            }))
                        }.call(this) : z.call(this)
                    },
                    _initOnDependencyLoad: function() {
                        var e = this;
                        i.onLoad(function() {
                            e._initialize()
                        })
                    },
                    addEventListener: o.addEventListener,
                    _onApiError: h.onApiError,
                    _onError: h.onError,
                    _onReady: function() {
                        if (!this.onReadyAlreadyCalled) {
                            this.onReadyAlreadyCalled = !0, this._callCallbacksToUpdateUI();
                            var e = {};
                            e.userActionInfo = L, e.isUserSignedIn = !e.userActionInfo.isRequired && !!this.isSignedInUser(), h.onReady({
                                signInState: e
                            })
                        }
                    },
                    setProfile: function(e, t) {
                        e && !e.error_flag && ((this._profile = e) ? (c.set(this._profile), this._removeAccessTokensIfDifferentUserId(e[C])) : c.clear(), !t && this.onReadyAlreadyCalled && this._callCallbacksToUpdateUI())
                    },
                    getUserProfile: function() {
                        return this._profile
                    },
                    getUserPictureURL: function() {
                        return this._profile ? this._profile[C] ? a.getAvatarUrl(this._profile[C]) : (h.onError(p.avatarPicture()), "") : ""
                    },
                    getState: function() {
                        return P || null
                    },
                    listSocialProviders: a.listSocialProviders,
                    isSignedInUser: function(e, t, n) {
                        if (!this.adobeid.standalone) {
                            var i = this.getAccessTokenInfo(e, t, n);
                            return i && Date.now() < i.expiresAtMilliseconds ? i : void 0
                        }
                    },
                    isReAuthentication: function(e) {
                        return e && e.reauth
                    },
                    isReady: function() {
                        return !!this.onReadyAlreadyCalled
                    },
                    isMandatorySignIn: function() {
                        return !0 === this.adobeid.is_mandatory_sign_in && this.isModal() ? (g.error("is_mandatory_sign_in can be enabled only in redirect mode"), !1) : "boolean" == typeof this.adobeid.is_mandatory_sign_in && this.adobeid.is_mandatory_sign_in
                    },
                    isSingleLogOutEnabled: function() {
                        return "boolean" == typeof this.adobeid.uses_single_log_out ? this.adobeid.uses_single_log_out : f.sloEnabled
                    },
                    isRefreshSSOCookiesEnabled: function() {
                        return "boolean" == typeof this.adobeid.uses_refresh_sso_cookies ? this.adobeid.uses_refresh_sso_cookies : f.refreshSsoCookiesEnabled
                    },
                    _getRedirectUri: function(e, t) {
                        var n = "",
                            i = k.merge(a.getCustomApiParameters(e), t),
                            o = "/" === w.charAt(0) ? k.getOrigin : k.getBasePath;
                        if (this.isModal()) n = o(_.getHref()) + w + "#" + S;
                        else {
                            n = i.redirect_uri ? i.redirect_uri : this.adobeid.redirect_uri ? this.adobeid.redirect_uri : _.getHref(), g.assert(!n.includes(T), "the redirect_uri mustn't already contain #from_ims");
                            var r = k.getHashFromURL(n),
                                s = n;
                            r && (s = s.substring(0, s.length - r.length)), n = s + "#" + S + "&old_hash=" + encodeURIComponent(r)
                        }
                        return i.client_id && (n += "&client_id=" + encodeURIComponent(i.client_id)), i.scope && (n += "&scope=" + encodeURIComponent(i.scope)), e && e.name && (n += "&api=" + encodeURIComponent(e.name)), n = this.updateRedirectUriForReAuthentication(n, i), k.isEmptyObject(this.contextToBePassedOnRedirect) || (n += "&" + E + "=" + encodeURIComponent(JSON.stringify(this.contextToBePassedOnRedirect))), n
                    },
                    _signInBasedOnStoredCredentials: function(e) {
                        this.loadFromStorage(), k.isEmptyObject(this._accessTokensInfos) ? (this._clearCredentials(), k.callIfFunction(e, this)) : this.hasJustReturnedFromAuthorize ? (this.hasJustReturnedFromAuthorize = !1, k.callIfFunction(e)) : this.testSingleLogOutSLO(e)
                    },
                    _signInWhenRedirectedBackFromIMS: function(e) {
                        var t = this,
                            n = k.getHashFromURL().substring(1);
                        n = n.replace("%23access_token", "#access_token").replace("%23expires_in", "#expires_in").replace("%23error", "#error").replace("?error", "#error").replace("#", "&");
                        var i = k.getQueryParamsAsMap(n),
                            o = i.access_token,
                            r = i.api;
                        r === f.api.authorize.name && g.assert(o, "the authorize api must return an access_token");
                        var s = !!i.reauth,
                            a = i.client_id || this.getClientID(),
                            c = i.scope || this.getScope(),
                            l = i.expires_in,
                            d = i.error,
                            u = i[E];
                        try {
                            P = JSON.parse(i.state)
                        } catch (e) {
                            P = i.state
                        }
                        this.contextPassedFromRedirect = u ? {
                            context: JSON.parse(u),
                            access_token: o
                        } : null, o && l && m.isFromIms(o) || "true" === i[T] && r === f.api.logout.name || "true" === i[T] && d ? (_.setHash(i.old_hash || ""), o ? (this.hasJustReturnedFromAuthorize = !0, this._setAccessTokenAndGetProfile(o, s, a, c, l, null, function() {
                            t.validateSSOCookieLifetime(o, e)
                        })) : (this._accessTokensInfos = {}, this._profile = null, d && h.onError(p.fromApiCallRedirect(d)), e.call(this))) : e.call(this)
                    },
                    signIn: function(e, t) {
                        this.contextToBePassedOnRedirect = t;
                        var n = k.merge(e);
                        n.redirect_uri = this._getRedirectUri(f.api.authorize, n), this.version && (n.jslibver = this.version);
                        var i = a.getAuthorizeUrl(n);
                        this.isModal() && this._callCallbacksToUpdateUI(), this._openWindow(i, "create_account" === n.idp_flow ? O.sign_up : O.sign_in)
                    },
                    signInBasedOnSingleSignOnSSO: function(e) {
                        this.acquireAccessToken(e, H.call(this, e))
                    },
                    signInWithSocialProvider: function(e, t) {
                        if (e) {
                            var n = k.merge(t, {
                                idp_flow: "social.deep_link.web",
                                provider_id: e
                            });
                            n.redirect_uri = this._getRedirectUri(f.api.authorize, n);
                            var i = a.getAuthorizeUrl(n);
                            this._openWindow(i)
                        }
                    },
                    reAuthenticate: function(e, t) {
                        var n = k.merge({
                            reauth: "check",
                            puser: this._profile && this._profile.email ? this._profile.email : void 0,
                            eu: this._profile && this._profile.email ? "true" : void 0
                        }, e);
                        this.signIn(n, t)
                    },
                    updateRedirectUriForReAuthentication: function(e, t) {
                        return "string" == typeof e && this.isReAuthentication(t) && (e.includes("reauth=") || (e = e + "&reauth=" + t.reauth)), e
                    },
                    signUp: function(e, t) {
                        this.isModal() && this._callCallbacksToUpdateUI(), this.signIn(k.merge({
                            idp_flow: "create_account"
                        }, e), t)
                    },
                    signOut: function(i) {
                        var o = this,
                            e = Object.keys(this._accessTokensInfos);
                        if (e.length) {
                            var t = this._accessTokensInfos[e.pop()];
                            this._invalidateTokens(e, function() {
                                ! function(e) {
                                    if (e) {
                                        var t = k.merge(a.getCustomApiParameters(f.api.logout), i);
                                        o.isModal() && t.redirect_uri && o.switchToRedirectMode();
                                        var n = a.getLogoutUrl(k.merge({
                                            access_token: e.access_token,
                                            redirect_uri: o._getRedirectUri(o.config.api.logout, i)
                                        }, t));
                                        o._clearCredentials({
                                            updateUI: !0
                                        }), o._openWindow(n, O.sign_out)
                                    } else o._clearCredentials({
                                        updateUI: !0
                                    })
                                }(t)
                            })
                        } else o._clearCredentials({
                            updateUI: !0
                        })
                    },
                    testSingleLogOutSLO: function(t) {
                        if (this.isSingleLogOutEnabled()) {
                            var n = this;
                            a.checkStatus(function(e) {
                                !1 === e.sso && !1 === e.remember_me ? (n._clearCredentials({
                                    updateUI: !0
                                }), n.hasJustSingleLoggedOutSLO = !0, k.callIfFunction(t, n)) : n.signInBasedOnSingleSignOnSSO(t)
                            })
                        } else k.callIfFunction(t, this)
                    },
                    validateSSOCookieLifetime: function(e, t) {
                        k.callIfFunction(t, this)
                    },
                    _clearTimerTestSSOCookieWillExpire: function() {
                        this._timerTestSSOCookieWillExpire && (clearInterval(this._timerTestSSOCookieWillExpire), this._timerTestSSOCookieWillExpire = null)
                    },
                    _invalidateTokens: function(e, t) {
                        var n = this,
                            i = e.length;
                        i ? e.forEach(function(e) {
                            a.logoutToken(n._accessTokensInfos[e].access_token, function() {
                                0 == --i && k.callIfFunction(t)
                            })
                        }) : k.callIfFunction(t)
                    },
                    _isAccessTokenInfoUsable: function(e) {
                        return e && "string" == typeof e.access_token && "string" == typeof e.client_id && this.isKnownClientID(e.client_id) && "string" == typeof e.scope && "boolean" == typeof e.isReAuthentication && "number" == typeof e.expires_in && "number" == typeof e.expiresAtMilliseconds && Date.now() < e.expiresAtMilliseconds
                    },
                    _removeAccessTokensIfDifferentUserId: function(e) {
                        if (e)
                            for (var t in this._accessTokensInfos) {
                                var n = this._accessTokensInfos[t];
                                n.user_id && n.user_id !== e && (this._clearCredentials({
                                    access_token: n.access_token,
                                    updateUI: !1
                                }), g.info("Removed token because of different user_id (isReAuthentication=" + n.isReAuthentication + ")"))
                            }
                    },
                    _setAccessTokenAndGetProfile: function(e, t, n, i, o, r, s) {
                        o = +o;
                        var a = r && r[C];
                        if (this._removeAccessTokensIfDifferentUserId(a), k.isEmptyObject(this._accessTokensInfos) && this.loadFromStorage(), this.shouldAcceptTheToken(e, n, i, a, !0, t)) {
                            var c = this.getAccessTokenSessionStorageKey(t, n, i),
                                l = Date.now();
                            this._accessTokensInfos[c] = {
                                access_token: e,
                                client_id: n,
                                user_id: a,
                                scope: i,
                                expires_in: o,
                                createdAtMilliseconds: l,
                                expiresAtMilliseconds: l + o,
                                isReAuthentication: t
                            }, v.set(c, this._accessTokensInfos[c], t), this.onReadyAlreadyCalled && this._callCallbacksToUpdateUI(), r ? k.callIfFunction(s, this) : j(this, e, s)
                        } else k.callIfFunction(s, this)
                    },
                    _testAccessTokensAreStillValid: function() {
                        var e, t = 0;
                        for (e in this._accessTokensInfos) ++t;
                        var n = this,
                            i = function() {
                                0 == --t && n._onReady()
                            };
                        if (0 < t)
                            for (e in this._accessTokensInfos) n.testAccessTokenIsStillValid(this._accessTokensInfos[e].access_token, i);
                        else n._onReady()
                    },
                    acquireAccessToken: function(n, e) {
                        var i = this,
                            o = {
                                redirect_uri: this._getRedirectUri(f.api.check),
                                client_id: this.getClientID(f.api.check),
                                scope: this.getScope(f.api.check)
                            };
                        r.init(i), a.checkToken(o, function(e) {
                            var t = k.cloneObject(e);
                            delete t.access_token, delete t.expires_in, delete t.token_type, i.setProfile(t), i._setAccessTokenAndGetProfile(e.access_token, !1, o.client_id, o.scope, e.expires_in, t, n)
                        }, e)
                    },
                    decodeAccessToken: m.decode,
                    getAccessToken: function(e, t, n) {
                        var i = this.getAccessTokenInfo(e, t, n);
                        return i ? i.access_token : null
                    },
                    getAccessTokenInfo: function(e, t, n) {
                        var i = this.getAccessTokenSessionStorageKey(e, t, n),
                            o = this._accessTokensInfos[i];
                        return o ? v.get(i, o.isReAuthentication) ? o : (this._clearCredentials({
                            access_token: o.access_token
                        }), null) : null
                    },
                    getAccessTokenSessionStorageKey: function(e, t, n) {
                        return [y, t || this.getClientID(), !!e, n || this.getScope()].join(b)
                    },
                    getContextFromRedirectForAccessToken: function(e) {
                        if (this.contextPassedFromRedirect && this.contextPassedFromRedirect.access_token === e) {
                            var t = this.contextPassedFromRedirect.context;
                            return this.contextPassedFromRedirect = null, t
                        }
                        return null
                    },
                    getKeyForAccessToken: function(e) {
                        for (var t in this._accessTokensInfos)
                            if (e === this._accessTokensInfos[t].access_token) return t;
                        return g.assert(!1, "unknown access_token for key: " + t), null
                    },
                    getTransitoryAuthorizationCode: a.getTransitoryAuthorizationCode,
                    hasTokenButItHasExpired: function(e, t, n) {
                        var i = this.getAccessTokenInfo(e, t, n);
                        return i && Date.now() > i.expiresAtMilliseconds ? i : void 0
                    },
                    loadFromStorage: function() {
                        var i = this;

                        function e(n) {
                            v.keys(n).forEach(function(t) {
                                if (t.startsWith(y)) try {
                                    var e = v.get(t, n);
                                    if (!i.isKnownClientID(e.client_id)) return;
                                    i._isAccessTokenInfoUsable(e) ? i._accessTokensInfos[t] = e : (g.info("unusable access token info: " + d.getItem(t)), v.remove(t, n))
                                } catch (e) {
                                    v.remove(t, n)
                                }
                            })
                        }
                        e((this._accessTokensInfos = {}, !1)), e(!0), this._profile = c.get()
                    },
                    shouldAcceptTheToken: function(e, t, n, i, o, r) {
                        return u.shouldAcceptToken(e, t, n, i, o, r, this._profile && this._profile[C])
                    },
                    testAccessTokenIsStillValid: function(t, n) {
                        var i = this,
                            o = this._accessTokensInfos[this.getKeyForAccessToken(t)];
                        g.assert(o, "we need token information to validate it");
                        var e = function(e) {
                            if (e.token && i.shouldAcceptTheToken(t, e.token.client_id, e.token.scope, e.token.user_id, e.valid, o.isReAuthentication)) n();
                            else {
                                g.info("validate/token: access_token is invalid. removing."), i._clearCredentials({
                                    updateUI: i.onReadyAlreadyCalled,
                                    access_token: t
                                });
                                try {
                                    e.token && i.isKnownClientID(e.token.client_id) && i.matchesTheRequiredScope(e.token.scope) && k.callIfFunction(i.adobeid.onAccessTokenHasExpired, i.adobeid, [t, o])
                                } catch (e) {
                                    h.onError(p.jsException(e, "onAccessTokenHasExpired"))
                                }
                                o.isReAuthentication ? n() : i.signInBasedOnSingleSignOnSSO(function() {
                                    !i.isSignedInUser() && i.isMandatorySignIn() && i.signIn(), n()
                                })
                            }
                        };
                        o && this.isKnownClientID(o.client_id) ? a.validateToken(o, e) : e({
                            valid: !1
                        })
                    },
                    setStandaloneToken: function(e) {
                        this.adobeid.standalone.token = e, N.call(this)
                    },
                    _importDataFromModalWindow: function(e) {
                        if (k.isEmptyObject(e._accessTokensInfos)) this._clearCredentials({
                            updateUI: !0
                        });
                        else {
                            for (var t in this.contextPassedFromRedirect = k.cloneObject(e.contextPassedFromRedirect), P = e.getState(), k.equals(e._profile, this._profile) || k.isEmptyObject(e._profile) || this.setProfile(k.cloneObject(e._profile), !0), e._accessTokensInfos)
                                if (!k.equals(e._accessTokensInfos[t], this._accessTokensInfos[t])) {
                                    var n = k.cloneObject(e._accessTokensInfos[t]);
                                    v.set(t, this._accessTokensInfos[t] = n, n.isReAuthentication), this.validateSSOCookieLifetime(this._accessTokensInfos[t].access_token)
                                } this._callCallbacksToUpdateUI(), e.isSignedInUser(!0) && !this.isSignedInUser(!1) && this.signInBasedOnSingleSignOnSSO()
                        }
                    },
                    _isFinalRedirectPageInModalMode: function() {
                        return _.getHref().includes(w) && window.opener && window.opener !== window
                    },
                    isModal: function() {
                        return !!this._isFinalRedirectPageInModalMode() || (!0 === this.adobeid.uses_modal_mode && !0 === this.adobeid.uses_redirect_mode ? (g.error("redirect mode and modal mode both enabled"), !0) : "boolean" == typeof this.adobeid.uses_modal_mode ? this.adobeid.uses_modal_mode : !1 === this.adobeid.uses_redirect_mode)
                    },
                    switchToModalMode: function() {
                        this.adobeid.uses_redirect_mode = !(this.adobeid.uses_modal_mode = !0)
                    },
                    switchToRedirectMode: function() {
                        this.adobeid.uses_redirect_mode = !(this.adobeid.uses_modal_mode = !1)
                    },
                    getLocale: a.getLocale,
                    getReleaseFlags: function(n, e) {
                        null === x ? a.getReleaseFlags(this.getAccessToken(), function(e, t) {
                            F = t || null, x = e || null, k.callIfFunction(n, null, [e, t])
                        }, e) : k.callIfFunction(n, null, [x, F])
                    },
                    isReleaseFlagActive: function(e) {
                        return !!F && "1" === F[e]
                    },
                    getScope: a.getScope,
                    matchesTheRequiredScope: n.matchesRequiredScope,
                    sunbreakHack: n.sunbreakHack,
                    getClientID: a.getClientId,
                    isKnownClientID: n.isKnownClientID,
                    _ajaxGet: function(n, i, e) {
                        var o = this,
                            t = function(e, t) {
                                e ? h.onError(p.network(n)) : i.call(o, t)
                            };
                        "jsonp" !== e && s.corsSupported ? s.cors({
                            onLoad: t,
                            url: n
                        }) : s.jsonp(n, {}, t)
                    },
                    getAdobeIdApiParametersForApi: a.getCustomApiParameters,
                    getUrlForApiCall: function(e, t, n) {
                        return 2 === arguments.length && (n = t, t = null), a.getApiUrlWithQuery(e, n, t)
                    },
                    makeApiCall: a.makeApiCall,
                    _clearCredentials: function(e) {
                        var t;
                        if (e && e.access_token) t = this.getKeyForAccessToken(e.access_token), v.remove(t, !1), v.remove(t, !0), delete this._accessTokensInfos[t];
                        else {
                            for (t in this._accessTokensInfos) t.startsWith(y) && v.remove(t, this._accessTokensInfos[t].isReAuthentication);
                            this._accessTokensInfos = {}, c.clear(), this._profile = null, this._clearTimerTestSSOCookieWillExpire()
                        }
                        e && !0 === e.updateUI && this._callCallbacksToUpdateUI(e)
                    },
                    _callCallbacksToUpdateUI: function(e) {
                        if (this._last_ui_update.areThereUIUpdatesToPerform()) {
                            var t = k.cloneObject(this._last_ui_update);
                            if (this._last_ui_update.update(), t.areThereUIUpdatesToPerformForProfile() && o.dispatchEvent(l.types.PROFILE, {
                                    profile: this._profile
                                }), t.areThereUIUpdatesToPerformForAccessTokens())
                                if (e && e.access_token) {
                                    var n = this._accessTokensInfos[this.getKeyForAccessToken(e.access_token)];
                                    o.dispatchEvent(l.types.ACCESS_TOKEN, {
                                        accessTokenInfo: n
                                    })
                                } else
                                    for (var i in this._accessTokensInfos) k.equals(this._accessTokensInfos[i], t._accessTokensInfos[i]) || o.dispatchEvent(l.types.ACCESS_TOKEN, {
                                        accessTokenInfo: this._accessTokensInfos[i]
                                    })
                        }
                    },
                    _openWindow: function(e, t) {
                        if (this.isModal()) {
                            var n = Math.min(t && t.width || O.any.width, screen.availWidth),
                                i = Math.min(t && t.height || O.any.height, screen.availHeight);
                            (function(e, n) {
                                R && (R.closed || R.close(), R = null);
                                var i = [];
                                return Object.keys(n || {}).forEach(function(e) {
                                    var t = n[e];
                                    !0 === t ? t = "yes" : !1 === t ? t = "no" : t += "", i.push(e + "=" + t)
                                }), (R = k.openPopup(e, A, i.join(","))) && "function" == typeof R.focus && R.focus(), R
                            })(e, {
                                width: n,
                                height: i,
                                left: parseInt((screen.availLeft ? screen.availLeft : 0) + Math.max(0, screen.availWidth - n) / 2),
                                top: parseInt((screen.availTop ? screen.availTop : 0) + Math.max(0, screen.availHeight - i) / 2),
                                toolbar: !1,
                                menubar: !1,
                                scrollbars: !0,
                                resizable: !0
                            }) || h.onError(p.popupBlocked(e))
                        } else _.setHref(e, !this.isMandatorySignIn());
                        this.contextToBePassedOnRedirect = null
                    },
                    toggleLogging: g.toggleLogging
                }, D), e.trackObject(D),
                function() {
                    var e = this;
                    this.adobeid = t, this._accessTokensInfos = {}, this._profile = null, this._last_ui_update = {
                        _any_update_so_far: this._is_already_attached_to_ui = !1,
                        _accessTokensInfos: {},
                        _profile: null,
                        update: function() {
                            this._any_update_so_far = !0, this._accessTokensInfos = k.cloneObject(e._accessTokensInfos), this._profile = k.cloneObject(e._profile)
                        },
                        areThereUIUpdatesToPerformForAccessTokens: function() {
                            return !this._any_update_so_far || !k.equals(this._accessTokensInfos, e._accessTokensInfos)
                        },
                        areThereUIUpdatesToPerformForProfile: function() {
                            return !this._any_update_so_far || !k.equals(this._profile, e._profile)
                        },
                        areThereUIUpdatesToPerform: function() {
                            return this.areThereUIUpdatesToPerformForProfile() || this.areThereUIUpdatesToPerformForAccessTokens()
                        }
                    }
                }.call(D), D
        }, w.analytics = function(e, t) {
            "use strict";
            var o = "jslMethods",
                r = [],
                s = [],
                a = {},
                c = function() {
                    return e.session
                },
                n = function() {
                    var e = c().getItem(o);
                    return e = e ? e.split("+").map(function(e) {
                        return parseInt(e, 10)
                    }) : []
                };
            return {
                getMethods: function() {
                    return t ? s : []
                },
                trackObject: function(i) {
                    if (t) {
                        for (var e in s = n(), i) i.hasOwnProperty(e) && "function" == typeof i[e] && (r.push(e), a[e] = i[e], function() {
                            var n = e;
                            i[n] = function() {
                                var e, t;
                                return r.includes(t = e = n) && (t = r.indexOf(e), s.includes(t) || (s.push(t), s.sort(function(e, t) {
                                    return e - t
                                }), c().setItem(o, s.join("+")))), a[n].apply(i, arguments)
                            }
                        }());
                        r.sort()
                    }
                }
            }
        }, w.autoRefreshToken = function(e) {
            "use strict";
            var t = null,
                n = 84e4,
                i = !1;

            function o() {
                i = !0, e.removeEventListener(window, "mousemove", o), e.removeEventListener(window, "keyup", o)
            }

            function r() {
                e.addEventListener(window, "mousemove", o), e.addEventListener(window, "keyup", o)
            }
            return r(), {
                init: function(e) {
                    i = !1, t && window.clearTimeout(t), e.isSignedInUser() && (r(), t = window.setTimeout(function() {
                        i && e.acquireAccessToken()
                    }, n))
                }
            }
        }, w.base32 = function() {
            "use strict";
            var r = {
                "=": 0
            };

            function s(e) {
                return t = "0", 0 < (i = 5 - (n = e.toString(2)).length) && (n = Array(i + 1).join(t) + n), n;
                var t, n, i
            }
            return "abcdefghijklmnopqrstuvwxyz234567".split("").forEach(function(e, t) {
                r[e] = t
            }), {
                decodeToBitstring: function(e) {
                    if ("string" != typeof e) throw Error("Data is not a string");
                    var t = e.toLowerCase().split("");
                    ! function(e) {
                        if (e.length % 8 != 0) throw Error("Data length is not a multiple of 8");
                        e.forEach(function(e) {
                            if (!(e in r)) throw Error("Unknown encoded character " + e)
                        });
                        var t = !1;
                        e.forEach(function(e) {
                            if ("=" !== e && t) throw Error("Found padding char in the middle of the string");
                            "=" === e && (t = !0)
                        })
                    }(t);
                    var n = function(e) {
                            for (var t = e.length - 1, n = 0;
                                "=" === e[t];) ++n, --t;
                            return n
                        }(t),
                        i = [];
                    t.forEach(function(e) {
                        i.push(s(r[e]))
                    });
                    var o = i.join("");
                    return 0 < n && (o = o.slice(0, -5 * n)), o.length % 8 != 0 && (o = o.slice(0, o.length % 8 * -1)), o
                }
            }
        }, w.client = function(t, e, i, o) {
            return {
                getClientId: e.getClientId,
                getScope: e.getScope,
                isKnownClientID: function(e) {
                    return e in t.api.authorize.endpoint
                },
                matchesRequiredScope: function(e) {
                    var t = o.String_hasContent(e);
                    if (!t) return i.assert(t, "scopeToValidate must be a non empty string for matchesTheRequiredScope"), !1;
                    var n = this.sunbreakHack(o.String_withoutWhitespaces(e)).split(",");
                    return this.sunbreakHack(this.getScope()).split(",").every(function(e) {
                        return n.includes(e)
                    })
                },
                sunbreakHack: function(e) {
                    return e.replace(t.sunbreakScope, t.sunbreakScopeExpanded)
                }
            }
        }, w.http = function(c, d, u) {
            "use strict";
            var l = "_adobeIMSJSONPCallbacks",
                f = {
                    POST: "POST",
                    GET: "GET"
                },
                e = !!XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
                p = function(e, t) {
                    t && t(e.status, function(e) {
                        var t = e.getResponseHeader("Content-Type"),
                            n = e.responseText;
                        if (n.length && t && 0 <= t.indexOf("json")) try {
                            n = JSON.parse(n)
                        } catch (e) {
                            throw e
                        }
                        return n
                    }(e), e)
                },
                h = function(e, t, n, i, o, r) {
                    var s = new XMLHttpRequest,
                        a = function(e) {
                            p(e.target, r)
                        };
                    if (t = d.addCommonQueryParameters(t), s.addEventListener("load", function(e) {
                            p(e.target, o)
                        }), s.addEventListener("abort", a), s.addEventListener("error", a), s.open(e.toUpperCase(), t, !0), i)
                        for (var c in i) i.hasOwnProperty(c) && s.setRequestHeader(c, i[c]);
                    s.withCredentials = !0, s.send(n)
                };
            return {
                jsonp: function(e, t, n) {
                    t = t || {};
                    var i = window[l];
                    i || (i = window[l] = {});
                    var o = "_" + u.createRandomString();
                    t.callback = "window." + l + "." + o, e += d.buildQueryString(t, e), e = d.addCommonQueryParameters(e);
                    var r = document.createElement("script");
                    r.src = e, r.async = !0, r.type = "text/javascript";
                    var s = u.getDocumentHead();
                    i[o] = function(e) {
                        u.isDebugMode && c.info("api call response: " + JSON.stringify(e)), n(!1, e), delete i[o]
                    };
                    var a = function() {
                        s.removeChild(r)
                    };
                    u.addEventListener(r, "load", a), u.addEventListener(r, "error", function() {
                        n(!0, null), a()
                    }), s.appendChild(r)
                },
                cors: function(e) {
                    switch ((e = u.merge({
                        data: null,
                        headers: null,
                        method: f.GET,
                        onError: null,
                        onLoad: null,
                        url: ""
                    }, e)).method.toUpperCase()) {
                        case f.GET:
                            s = e.url, a = e.headers, c = e.onLoad, l = e.onError, s += d.buildQueryString(e.data, s), h(f.GET, s, null, a, c, l);
                            break;
                        case f.POST:
                            t = e.url, o = e.onLoad, r = e.onError, n = (n = e.headers) || {}, (i = e.data) && (i = d.uriEncodeData(i), n["Content-Type"] = "application/x-www-form-urlencoded"), h(f.POST, t, i, n, o, r);
                            break;
                        default:
                            throw Error("Unknown HTTP method " + e.method)
                    }
                    var t, n, i, o, r, s, a, c, l
                },
                corsSupported: e,
                Method: f
            }
        }, w.imsApis = function(o, r, s, e, p, a, c, h) {
            "use strict";
            var _ = e.onApiError,
                g = {
                    AUTHORIZATION: "Authorization",
                    X_IMS_CLIENT_ID: "X-IMS-ClientId",
                    RETRY_AFTER: "Retry-after"
                },
                m = {
                    ABORTED: "aborted",
                    NO_CORS: "no_cors",
                    RATE_LIMITED: "rate_limited"
                };

            function l(e) {
                if (!(e && e.name && o.api_parameters)) return {};
                for (var t in o.api_parameters)
                    if (e.name.includes(t)) return o.api_parameters[t];
                return {}
            }

            function v(e, t) {
                if (t && t.client_id) return t.client_id;
                var n = l(e);
                return n && n.client_id ? n.client_id : o.client_id ? Array.isArray(o.client_id) ? o.client_id[0] : o.client_id : s.client_id
            }

            function i() {
                return o.locale || s.locale
            }

            function d(e, t, n) {
                return 2 !== arguments.length && n || (n = {}), n.client_id || (n.client_id = v()), h.merge(n, l(e), t)
            }

            function u(e, t) {
                var n, i = "AdobeID,openid";
                return t && t.scope ? i = t.scope : (n = l(e)) && n.scope ? i = n.scope : o.scope && (i = o.scope), h.String_withoutWhitespaces(i)
            }

            function k(e, t, n) {
                n || (n = v(e));
                var i = e.endpoint[n];
                return i ? (i.includes("${ version }") ? i = i.replace("${ version }", t || "v1") : t && (i += "/" + t), i) : (a.info("No url found for api " + e.name + " for client " + n), "")
            }

            function t(e, t, n, i) {
                !i && t && (i = t.client_id);
                var o = k(e, n, i);
                return o ? o + c.buildQueryString(t, o) : ""
            }

            function f(e, t, n) {
                if (!e) throw Error("No options object provided");
                if (!e.api) throw Error("No `options.api` provided");
                var i, o, r, s, a, c, l, d, u, f;
                n = n || _, p.corsSupported ? (l = t, d = n, u = {}, (f = h.cloneObject((c = e).params) || {}).client_id || (f.client_id = v(c.api)), c.bearerToken && (u[g.AUTHORIZATION] = "Bearer " + c.bearerToken), u[g.X_IMS_CLIENT_ID] = f.client_id, p.cors({
                    data: f,
                    headers: u,
                    method: c.method,
                    onError: function(e, t) {
                        d(0 === e ? {
                            error: m.ABORTED
                        } : t)
                    },
                    onLoad: function(e, t, n) {
                        429 === e ? d({
                            error: m.RATE_LIMITED,
                            retryAfter: window.parseInt(n.getResponseHeader(g.RETRY_AFTER), 10)
                        }) : t ? t.error_flag || t.error ? d(t) : l(t) : d(null)
                    },
                    url: c.url || k(c.api, c.apiVersion, f.client_id)
                })) : (o = t, r = n, s = h.cloneObject((i = e).params), a = k(i.api, i.apiVersion, s.client_id), i.bearerToken && (s.bearer_token = i.bearerToken), p.jsonp(a, s, function(e, t) {
                    e || t.error_flag || t.error ? r(t) : o(t)
                }))
            }
            return {
                makeApiCall: function(e, t, n, i) {
                    return 3 === arguments.length && (i = n, n = t, t = null), f({
                        api: e,
                        apiVersion: t,
                        params: n,
                        forceJsonp: !0
                    }, i)
                },
                getApiUrl: k,
                getApiUrlWithQuery: t,
                getAuthorizeUrl: function(e) {
                    return e = d(s.api.authorize, e, {
                        response_type: "token",
                        client_id: v(),
                        scope: u(),
                        locale: i()
                    }), t(s.api.authorize, e)
                },
                getAvatarUrl: function(e) {
                    return k(s.api.avatar) + "/" + e
                },
                getLogoutUrl: function(e) {
                    return e = d(s.api.logout, e, {
                        locale: i()
                    }), t(s.api.logout, e)
                },
                validateToken: function(e, t, n) {
                    var i = d(s.api.validate_token, {
                        token: e.access_token,
                        client_id: e.client_id,
                        type: "access_token"
                    });
                    f({
                        api: s.api.validate_token,
                        params: i,
                        method: p.Method.POST
                    }, t, n)
                },
                checkStatus: function(e, t) {
                    var n = d(s.api.check_status);
                    f({
                        api: s.api.check_status,
                        params: n
                    }, e, t)
                },
                checkToken: function(e, t, n) {
                    e = d(s.api.check, e, {
                        scope: u(),
                        locale: i()
                    }), p.corsSupported ? f({
                        api: s.api.check,
                        apiVersion: "v4",
                        method: p.Method.POST,
                        params: e
                    }, function(e) {
                        e.jump ? n(e) : t(e)
                    }, n) : n({
                        error: m.NO_CORS
                    })
                },
                getProfile: function(e, t, n) {
                    var i = d(s.api.profile);
                    f({
                        api: o.openidCompatible ? s.api.userinfo : s.api.profile,
                        bearerToken: e,
                        params: i
                    }, t, n)
                },
                getTransitoryAuthorizationCode: function(e, t, n) {
                    e = d(s.api.check, e, {
                        client_id: v(),
                        response_type: "code"
                    }), f({
                        api: s.api.check,
                        apiVersion: "v5",
                        method: p.Method.POST,
                        params: e
                    }, t, n)
                },
                logoutToken: function(e, t, n) {
                    var i = d(s.api.logout_token, {
                        access_token: e
                    });
                    n = n || _;
                    var o = function(e) {
                        e && e.error ? n(e) : t(e)
                    };
                    f({
                        api: s.api.logout_token,
                        method: p.Method.POST,
                        params: i
                    }, o, o)
                },
                exchangeIjt: function(e, t, n) {
                    var i = (e = d(s.api.ijt, e, {
                        client_id: v()
                    })).ijt;
                    delete e.ijt;
                    var o = k(s.api.ijt, "", e.client_id) + i;
                    2048 < (o + c.buildQueryString(e)).length && delete e.redirect_uri, f({
                        api: s.api.ijt,
                        url: o,
                        params: e
                    }, t, n)
                },
                listSocialProviders: function(n, e) {
                    var t = d(s.api.social_providers, {
                        client_id: v()
                    });
                    f({
                        api: s.api.social_providers,
                        params: t
                    }, function(e) {
                        var t = [];
                        Array.isArray(e) && e.forEach(function(e) {
                            t.push(e.providerName)
                        }), n(t)
                    }, e)
                },
                getCustomApiParameters: l,
                getClientId: v,
                getLocale: i,
                getReleaseFlags: function(e, t, n) {
                    var i = d(s.api.fg_value, {
                        client_id: v(s.api.fg_value)
                    });
                    f({
                        api: s.api.fg_value,
                        params: i,
                        bearerToken: e
                    }, function(e) {
                        e && "" !== e ? t(e, h.bitstringToLSB(r.decodeToBitstring(e.releaseFlags))) : h.callIfFunction(n, null, [null])
                    }, n)
                },
                getScope: u,
                Errors: m
            }
        }, w.location = function() {
            "use strict";
            return {
                getHref: function() {
                    return window.location.href
                },
                setHref: function(e, t) {
                    t ? window.location.href = e : window.location.replace(e)
                },
                getHash: function() {
                    return window.location.hash
                },
                setHash: function(e) {
                    window.location.hash = e
                }
            }
        }, w.log = function() {
            "use strict";
            var t = !1,
                e = function() {
                    t && window.console && window
                };
            return {
                assert: function() {
                    e()
                },
                error: function() {
                    e()
                },
                info: function() {
                    e()
                },
                toggleLogging: function(e) {
                    "boolean" == typeof e && (t = e)
                }
            }
        }, w.MemoryStorage = function() {
            "use strict";
            var n = {};
            return {
                length: 0,
                clear: function() {
                    n = {}, this.length = 0
                },
                getItem: function(e) {
                    var t = n[e];
                    return void 0 === t ? null : t
                },
                keys: function() {
                    return n
                },
                removeItem: function(e) {
                    n.hasOwnProperty(e) && (delete n[e], --this.length)
                },
                setItem: function(e, t) {
                    n.hasOwnProperty(e) || ++this.length, n[e] = t + ""
                }
            }
        }, w.optimizations = function(e, t, n) {
            "use strict";
            if (!1 !== (t = t || {}).enable)
                for (var i in w.optimizations) w.optimizations.hasOwnProperty(i) && "function" == typeof w.optimizations[i] && w.optimizations[i].call(null, e, t, n)
        }, w.optimizations.$$prefetchSuSi = function(i, e, t) {
            "use strict";
            if (!1 !== e.prefetchSuSi) {
                var n = function() {
                    if (!i.isSignedInUser()) {
                        var e = i.getUrlForApiCall(i.config.api.authorize, {
                                client_id: i.getClientID()
                            }),
                            t = /^(https?:\/\/.+?)\//.exec(e)[1] + "/favicon.ico?cache_bust=" + Math.random().toString(16).slice(2),
                            n = document.createElement("link");
                        n.setAttribute("rel", "prefetch"), n.setAttribute("href", t), document.getElementsByTagName("head")[0].appendChild(n)
                    }
                };
                i.isReady() ? n() : i.addEventListener(t.types.READY, n)
            }
        }, w.profileStorage = function(e) {
            "use strict";
            var t = "adobeid_ims_profile";

            function n() {
                return e.session
            }
            return {
                clear: function() {
                    return n().removeItem(t)
                },
                get: function() {
                    return JSON.parse(n().getItem(t))
                },
                set: function(e) {
                    return n().setItem(t, JSON.stringify(e))
                }
            }
        }, w.storage = function(t, n) {
            "use strict";

            function e(e) {
                return w.storage.$$isPolyfillNeeded(e, t) ? (t.info("Polyfilled " + e + ". All values are stored in Memory."), new n) : window[e]
            }
            return {
                session: e("sessionStorage"),
                local: e("localStorage")
            }
        }, w.storage.$$isPolyfillNeeded = function(t, n) {
            "use strict";
            try {
                var e = window[t]
            } catch (e) {
                return n.info(t + " disabled"), !0
            }
            if (null == e) return !0;
            try {
                return e.setItem("isStoragePolyfillNeeded", !0), "true" !== e.getItem("isStoragePolyfillNeeded") ? !0 : (e.removeItem("isStoragePolyfillNeeded"), !1)
            } catch (e) {
                return !0
            }
        }, w.susiButtons = function(t, r) {
            "use strict";
            var s = '[data-adobeid-action="%action%"]';

            function n(e, t, n) {
                var i = document.querySelectorAll(s.replace("%action%", e)),
                    o = function() {
                        t.call(n)
                    };
                NodeList.prototype.forEach || (i = Array.prototype.slice.call(i)), i.forEach(function(e) {
                    r.addEventListener(e, "click", o)
                })
            }
            var i = !1;
            return {
                attachListeners: function() {
                    var e = function() {
                        i || (i = !0, n("signin", t.signIn, t), n("signup", t.signUp, t), n("signout", t.signOut, t), n("reauthenticate", t.reAuthenticate, t))
                    };
                    "complete" === window.document.readyState || "loaded" === window.document.readyState ? e() : (r.addEventListener(window.document, "DOMContentLoaded", e), r.addEventListener(window, "load", e))
                }
            }
        }, w.token = function() {
            "use strict";
            var i = function(e) {
                    if (!n(e)) return null;
                    var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
                    try {
                        return JSON.parse(atob(t))
                    } catch (e) {
                        return null
                    }
                },
                n = function(e) {
                    return "string" == typeof e && 5 <= e.length && 3 === e.split(".").length
                };
            return {
                decode: i,
                isFromIms: function(e) {
                    var t = /^ims-/,
                        n = i(e);
                    return !!n && !!(n.as && t.test(n.as) && n.client_id && n.created_at && n.expires_in && n.id && n.moi && n.scope && n.type)
                }
            }
        }, w.tokenStorage = function(t) {
            "use strict";

            function i(e) {
                return e ? t.local : t.session
            }
            return {
                get: function(e, t) {
                    return JSON.parse(i(t).getItem(e))
                },
                keys: function(e) {
                    var t = i(e);
                    return Object.keys(t.keys ? t.keys() : t)
                },
                remove: function(e, t) {
                    return i(t).removeItem(e)
                },
                set: function(e, t, n) {
                    return i(n).setItem(e, JSON.stringify(t))
                }
            }
        }, w.url = function(n, i) {
            "use strict";

            function o(e, t) {
                if (e) {
                    var n = r(e);
                    return n && (n = t && -1 !== t.indexOf("?") ? "&" + n : "?" + n), n
                }
                return ""
            }

            function r(e) {
                var t = "",
                    n = !0;
                for (var i in e)
                    if (e.hasOwnProperty(i) && void 0 !== e[i]) {
                        var o = e[i];
                        t += (n ? "" : "&") + encodeURIComponent(i) + "=" + (null === o ? "null" : encodeURIComponent("object" == typeof o ? JSON.stringify(o) : o)), n = !1
                    } return t
            }
            return {
                addCommonQueryParameters: function(e) {
                    e += o(i, e);
                    var t = n.getMethods();
                    return t.length && (e += "&jslMethods=" + t.join("+")), e
                },
                buildQueryString: o,
                uriEncodeData: r
            }
        }, w.utils = function(n, o) {
            "use strict";

            function e() {
                var e = document.querySelector('script[src*="imslib.min.js"]');
                return e || (e = document.querySelector('script[src*="imslib.js"]')), e ? e.src : ""
            }
            var t = e();

            function i(e) {
                return e && "function" == typeof e
            }

            function r(e, t) {
                if (null === e) return null === t;
                if (null === t) return null === e;
                if (typeof e != typeof t) return !1;
                if (Array.isArray(e)) {
                    if (!Array.isArray(t) || e.length !== t.length) return !1;
                    for (var n = 0; n < e.length; ++n)
                        if (!r(e[n], t[n])) return !1;
                    return !0
                }
                if ("object" == typeof e) {
                    var i;
                    for (i in e)
                        if (!(i in t && r(e[i], t[i]))) return !1;
                    for (i in t)
                        if (!(i in e)) return !1;
                    return !0
                }
                return e === t
            }

            function s(e) {
                var t = document.createElement("a");
                t.href = e;
                var n = t.protocol.replace(":", ""),
                    i = {
                        http: 80,
                        https: 443
                    },
                    o = t.host;
                return i[n] && (o = o.replace(RegExp(":" + i[n] + "$"), "")), {
                    protocol: n,
                    host: o,
                    query: t.search,
                    hash: t.hash.replace("#", ""),
                    path: ("/" + t.pathname.slice(0, t.pathname.lastIndexOf("/") + 1)).replace("//", "/")
                }
            }
            return t && o.info("loaded from " + t), {
                bitstringToLSB: function(e) {
                    var t = "";
                    if (e.length % 8 != 0) throw Error("Length must be a multiple of 8");
                    for (var n = 0, i = e.length; n < i; n += 8) t += e.slice(n, n + 8).split("").reverse().join("");
                    return t
                },
                String_hasContent: function(e) {
                    return "string" == typeof e && 0 < e.length
                },
                String_withoutWhitespaces: function(e) {
                    return e.replace(/\s/g, "")
                },
                parseUrl: s,
                getBasePath: function(e) {
                    var t = s(e);
                    return t.protocol + "://" + t.host + t.path
                },
                getOrigin: function(e) {
                    var t = s(e);
                    return t.protocol + "://" + t.host
                },
                getHashFromURL: function(e) {
                    !e && n && (e = n.getHref());
                    var t = e.indexOf("#");
                    return -1 !== t ? e.substring(t) : ""
                },
                getQueryParamsAsMap: function(e) {
                    e = e.replace(/^(#|\?|&)/, "");
                    var n = {};
                    return e.split("&").forEach(function(e) {
                        if (e.length) {
                            var t = e.split("=");
                            n[t[0]] = decodeURIComponent(t[1])
                        }
                    }), n
                },
                isFunction: i,
                callIfFunction: function(e, t, n) {
                    return i(e) ? e.apply(t, n || []) : null
                },
                merge: function e() {
                    for (var t = {}, n = 0; n < arguments.length; ++n) {
                        var i = arguments[n];
                        if ("object" == typeof i)
                            for (var o in i) {
                                var r = i[o];
                                void 0 !== r && (t[o] = "object" != typeof r || null === r ? r : e(t[o] || {}, r))
                            }
                    }
                    return t
                },
                cloneObject: function t(e) {
                    if (null === e) return null;
                    if ("object" != typeof e) return e;
                    var n;
                    if (Array.isArray(e)) n = [], e.forEach(function(e) {
                        n.push(t(e))
                    });
                    else
                        for (var i in n = {}, e) e.hasOwnProperty(i) && (n[i] = t(e[i]));
                    return o.assert(r(e, n), "cloned object has failed for " + JSON.stringify(e)), n
                },
                equals: r,
                isEmptyObject: function(e) {
                    return !e || r(e, {})
                },
                getDocumentHead: function() {
                    if (document.head) return document.head;
                    var e = document.getElementsByTagName("head");
                    return e && e.length ? e[0] : null
                },
                addEventListener: function(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                },
                removeEventListener: function(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent && e.detachEvent("on" + t, n)
                },
                openPopup: function(e, t, n) {
                    return window.open(e, t, n)
                },
                closeWindow: function() {
                    window.close()
                },
                getThisScriptSrc: e,
                createRandomString: function() {
                    var e = Math.random().toString(16);
                    return e.slice(e.indexOf(".") + 1)
                }
            }
        }, w.vendors = function() {
            "use strict";
            var e, t, n, i = {},
                o = "https://static.adobelogin.com/renga-idprovider/resources/js/json2-min.js",
                r = w.vendors.$$neededVendors(),
                s = !1,
                a = [],
                c = function() {
                    if (!r.isJSONNeeded || s)
                        for (var e = a.shift(); e;) e(i), e = a.shift()
                };
            return i.onLoad = function(e) {
                a.push(e), window.setTimeout(c, 0)
            }, r.isJSONNeeded && (e = o, t = function() {
                s = !0, c()
            }, (n = document.createElement("script")).type = "text/javascript", n.src = e, "function" == typeof t && (n.onload = function() {
                window.setTimeout(t, 1)
            }), (document.head || document.getElementsByTagName("head")[0]).appendChild(n)), i
        }, w.vendors.$$neededVendors = function() {
            "use strict";
            return {
                isJSONNeeded: !(window.JSON && "function" == typeof window.JSON.stringify)
            }
        }, w.bootstrap = function() {
            "use strict";
            var e = w.build,
                t = w.errorEvents,
                n = w.location(),
                i = w.log(),
                o = w.MemoryStorage,
                r = w.publicEvents(),
                s = w.token(),
                a = w.vendors(),
                c = w.adobeid(i),
                l = w.events(r),
                d = w.mapEndpoints(e),
                u = w.storage(i, o),
                f = w.utils(n, i),
                p = w.autoRefreshToken(f),
                h = w.analytics(u, e.methodTrackingEnabled),
                _ = w.base32(f),
                g = w.config(c, i, d, f),
                m = w.url(h, {
                    jslClient: g.client_id,
                    jslVersion: e.sha
                }),
                v = w.profileStorage(u),
                k = w.tokenStorage(u),
                I = w.eventDispatcher(c, t, l, i, r, f),
                y = w.http(i, m, f),
                b = w.imsApis(c, _, g, I, y, i, m, f),
                T = w.client(g, b, i, f),
                S = w.tokenManagement(T, g, i);
            window.adobeIMS = w.adobeIMS(c, h, p, T, g, t, l, I, y, b, n, i, v, r, u, s, S, k, f, a), window.adobeIMS.version = e.version;
            var E = w.susiButtons(window.adobeIMS, f);
            w.optimizations(window.adobeIMS, c.optimizations, r), window.adobeIMS.config = g, window.adobeIMS.IMSAPIs = g.api, window.adobeIMS._initOnDependencyLoad(), E.attachListeners()
        }, w.bootstrap()
    }({});
//# sourceMappingURL=imslib.min.js.map