var HomePage;
! function(e) {
    function t() {
        n(), new c($("#hero-section")), new u($("#personalization-section")), a()
    }

    function n() {
        window.requestAnimationFrame || (window.requestAnimationFrame = function() {
            return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }
        }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function() {
            return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(e) {
                clearTimeout(e)
            }
        }())
    }

    function a() {
        r(), window.addEventListener("resize", i), lazyLoadAnimationId = window.requestAnimationFrame(i)
    }

    function r() {
        lazyImages = document.getElementsByClassName("lazy")
    }

    function i() {
        if (lazyImages) {
            for (var e = 0; e < lazyImages.length; e++)
                if (o(lazyImages[e])) {
                    for (var t = 0; t < lazyImages[e].children.length; t++) {
                        var n = lazyImages[e].children[t];
                        n.getAttribute("data-srcset") ? (n.srcset = n.getAttribute("data-srcset"), n.removeAttribute("data-srcset")) : n.getAttribute("data-src") && (n.src = n.getAttribute("data-src"), n.removeAttribute("data-src"))
                    }
                    lazyImages[e].style.opacity = 1
                } s(), lazyLoadAnimationId = window.requestAnimationFrame(i)
        }
    }

    function o(e) {
        var t = e.getBoundingClientRect();
        return t.bottom >= 0 && t.right >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight) && t.left <= (window.innerWidth || document.documentElement.clientWidth)
    }

    function s() {
        lazyImages = Array.prototype.filter.call(lazyImages, function(e) {
            for (var t = 0; t < e.children.length; t++) {
                var n = e.children[t];
                if (n.getAttribute("data-srcset") || n.getAttribute("data-src")) return e
            }
        }), 0 === lazyImages.length && (window.removeEventListener("resize", i), window.cancelAnimationFrame(lazyLoadAnimationId))
    }
    var c = function() {
            function e(e) {
                this.$document = e, this.setupFade(), this.connectScrollButton(), this.connectFreeAccountButton()
            }
            return e.prototype.setupFade = function() {
                var e = this,
                    t = this.$document.find(".fade");
                window.requestAnimationFrame(function() {
                    return e.fade(t)
                })
            }, e.prototype.fade = function(e) {
                var t = this;
                window.innerWidth >= 1024 ? this.lastPosition !== $(".home").scrollTop() && (e.css("opacity", 1 - $(".home").scrollTop() / ($(".home").height() / 2)), this.lastPosition = $(".home").scrollTop()) : e.css("opacity", 1), window.requestAnimationFrame(function() {
                    return t.fade(e)
                })
            }, e.prototype.connectScrollButton = function() {
                this.$document.find("#scroll-button").click(function() {
                    $(".home").animate({
                        scrollTop: .75 * $(".home").height()
                    }, 1e3, "swing")
                })
            }, e.prototype.connectFreeAccountButton = function() {
                this.$document.find("#hero-banner-free-account-link").click(function() {
                    if (!document.cookie.includes("CreateFreeAccountButton")) {
                        var e = new Date;
                        e.setTime(e.getTime() + 6048e5);
                        var t = e.toUTCString();
                        document.cookie = "CreateFreeAccountButton=FreeAccountButton-CreateFreeAccount; expires=" + t + "; path=/"
                    }
                })
            }, e
        }(),
        u = function() {
            function e(e) {
                e.length && (this.$document = e, this.$forgetAccount = e.find("#personalization-remove-link"), this.$switchAccountLink = e.find("#switch-account-link"), this.$lastEmail = e.find("#last-signed-in-email"), this.$inputEmailWrapper = e.find("#NewEmail"), this.$inputEmail = e.find("#try-different-email"), this.$signInButton = e.find("#hero-banner-sign-back-in-to-office-365-link"), this.$closeNewEmailButton = e.find("#closeNewEmail"), this.ForgetAccountClick(), this.SwitchAccount(), this.SignInWithNewEmail(), this.CloseNewEmail())
            }
            return e.prototype.ForgetAccountClick = function() {
                var e = this;
                this.$forgetAccount.click(function(t) {
                    t.preventDefault(), $.ajax({
                        url: "/RemovePersonalizationContent",
                        type: "POST",
                        success: function(t) {
                            e.SendAADForget(t).then(function() {
                                window.location.href = window.location.origin || window.location.protocol + "//" + window.location.host
                            })
                        },
                        error: function(e, t, n) {}
                    })
                })
            }, e.prototype.SendAADForget = function(e) {
                return $.Deferred(function(t) {
                    var n = "" + aadUserForgetUrlFormat + e,
                        a = document.createElement("IFRAME");
                    a.onload = t.resolve, a.setAttribute("src", n), a.id = "ISForgetMeIframe", a.style.display = "none", document.body.appendChild(a)
                })
            }, e.prototype.SwitchAccount = function() {
                var e = this;
                this.$switchAccountLink.click(function(t) {
                    t.preventDefault(), e.$inputEmail.val(""), e.$inputEmail.attr("aria-hidden", "false"), e.$lastEmail.hide(), e.$inputEmailWrapper.show(), e.$inputEmail.focus()
                })
            }, e.prototype.SignInWithNewEmail = function() {
                var e = this;
                this.$signInButton.click(function() {
                    var t = $.trim(e.$inputEmail.val()),
                        n = e.$signInButton.attr("href"),
                        a = e.updateQueryStringParameter(n, t);
                    e.$signInButton.attr("href", a)
                }), this.$inputEmail.keypress(function(t) {
                    13 === t.which && (e.$signInButton.trigger("click"), window.location.href = e.$signInButton.attr("href"))
                })
            }, e.prototype.CloseNewEmail = function() {
                var e = this;
                this.$closeNewEmailButton.click(function(t) {
                    t.preventDefault(), e.$lastEmail.show(), e.$inputEmailWrapper.hide(), e.$inputEmail.val(""), e.$switchAccountLink.focus()
                })
            }, e.prototype.updateQueryStringParameter = function(e, t) {
                if (e && t) {
                    var n = /login_hint=(.*?)(?=&|$)/g,
                        a = encodeURI("login_hint=" + t);
                    return e.replace(n, a)
                }
            }, e
        }();
    e.init = t
}(HomePage || (HomePage = {}));
var awa = awa || {},
    behaviorKey;
awa.isInitialized = !1, awa.verbosityLevels = {
    NONE: 0,
    ERROR: 1,
    WARNING: 2,
    INFORMATION: 3
}, awa.behavior = {
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
    STARTPROCESS: 20,
    PROCESSCHECKPOINT: 21,
    COMPLETEPROCESS: 22,
    DOWNLOADCOMMIT: 40,
    DOWNLOAD: 41,
    SEARCHAUTOCOMPLETE: 60,
    SEARCH: 61,
    PURCHASE: 80,
    ADDTOCART: 81,
    VIEWCART: 82,
    ADDWISHLIST: 83,
    FINDSTORE: 84,
    CHECKOUT: 85,
    REMOVEFROMCART: 86,
    PURCHASECOMPLETE: 87,
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
    CONTACT: 160,
    REGISTRATIONINITIATE: 161,
    REGISTRATIONCOMPLETE: 162,
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
    VIDEPLAYERLOAD: 253,
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
}, awa.behaviorKeys = [];
for (behaviorKey in awa.behavior) awa.behaviorKeys.push(behaviorKey);
awa.actionType = {
        CLICKLEFT: "CL",
        CLICKRIGHT: "CR",
        SCROLL: "S",
        ZOOM: "Z",
        RESIZE: "R",
        KEYBOARDENTER: "KE",
        KEYBOARDSPACE: "KS",
        OTHER: "O"
    }, awa.cookie = function() {
        function e(e, n) {
            var a, r, i, o = t(e);
            if (o && n)
                for (a = o.split("&"), r = 0; r < a.length; r++)
                    if (i = a[r].split("="), i[0] && n.toLowerCase() === i[0].toLowerCase()) return i[1];
            return null
        }

        function t(e) {
            for (var t, a, r = document.cookie.split(";"), i = 0; i < r.length; i++) {
                for (t = r[i];
                    " " === t.charAt(0);) t = t.substring(1);
                if (a = t.split("="), n(a.shift()) === e) return n(a.join("="))
            }
            return null
        }

        function n(e) {
            var t = decodeURIComponent(e.replace("/+/g", " "));
            return 0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), t
        }

        function a(e, t, n) {
            var a, r;
            n ? (r = new Date, r.setTime(r.getTime() + 864e5 * n), a = "; expires=" + r.toUTCString()) : a = "", window.document.cookie = e + "=" + t + a + "; path=/;"
        }

        function r(e) {
            a(e, "", -1)
        }
        return {
            getCookie: t,
            getCookieKeyValue: e,
            setCookie: a,
            deleteCookie: r
        }
    }(), awa.cv = function() {
        function e() {
            return l(t())
        }

        function t() {
            return b.concat(".", E.toString())
        }

        function n() {
            var e = t();
            if (l(e)) return e
        }

        function a(e) {
            var t, n, a, r, i;
            if (l(e)) {
                for (t = e.split("."), n = t.length, t[n - 1] = (parseInt(t[n - 1], 10) + 1).toString(), a = "", r = 0; r < n; r++) a += t[r], r < n - 1 && (a += ".");
                if (i = t[0].length === w.baseLength ? w.maxCorrelationVectorLength : C.maxCorrelationVectorLength, a.length <= i) return a
            }
        }

        function r() {
            var e = t();
            return !!l(e) && m(e.length + 2)
        }

        function i() {
            return !!l(t()) && m(b.length + 1 + (E + 1 + "").length)
        }

        function o(e) {
            if (!l(e)) return awa.logger.logWarning("Cannot set invalid correlation vector value"), null;
            var n = e.lastIndexOf(".");
            return b = e.substr(0, n), E = parseInt(e.substr(n + 1), 10), t()
        }

        function s(e) {
            return e ? o(e) : (b = c(), E = 0, n())
        }

        function c() {
            for (var e = "", t = 0; t < h.baseLength; t++) e += T.charAt(Math.floor(Math.random() * T.length));
            return e
        }

        function u() {
            if (r()) return b = b.concat(".", E.toString()), E = 0, t()
        }

        function d() {
            if (i()) return E += 1, t()
        }

        function l(e) {
            if (e) {
                var t = e.split(".")[0];
                if (t) {
                    if (16 === t.length) return y = 1, g(e);
                    if (22 === t.length) return y = 2, p(e)
                }
            }
        }

        function g(e) {
            if (C.validationPattern.test(e) && e.length <= C.maxCorrelationVectorLength) return !0
        }

        function p(e) {
            if (w.validationPattern.test(e) && e.length <= w.maxCorrelationVectorLength) return !0
        }

        function m(e) {
            return 1 === y ? e <= C.maxCorrelationVectorLength : e <= w.maxCorrelationVectorLength
        }

        function f() {
            h = C
        }

        function v() {
            h = w
        }
        var w, h, y, b = "",
            E = 0,
            T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            C = {};
        return C.maxCorrelationVectorLength = 63, C.baseLength = 16, C.validationPattern = new RegExp("^[" + T + "]{" + C.baseLength.toString() + "}(.[0-9]+)+$"), w = {}, w.maxCorrelationVectorLength = 127, w.baseLength = 22, w.validationPattern = new RegExp("^[" + T + "]{" + w.baseLength.toString() + "}(.[0-9]+)+$"), h = w, y = 2, {
            header: "MS-CV",
            tag: "cV",
            isInit: e,
            canExtend: r,
            canIncrement: i,
            getValue: n,
            setValue: o,
            init: s,
            extend: u,
            increment: d,
            incrementExternal: a,
            isValid: l,
            useCv1: f,
            useCv2: v
        }
    }(), awa.logger = function() {
        function e(e) {
            awa.consoleVerbosity >= awa.verbosityLevels.ERROR && console && console.error && console.error("JSLL: " + e)
        }

        function t(e) {
            awa.consoleVerbosity >= awa.verbosityLevels.WARNING && console && console.warn && console.warn("JSLL: " + e)
        }

        function n(e) {
            awa.consoleVerbosity >= awa.verbosityLevels.INFORMATION && console && console.log && console.log("JSLL: " + e)
        }
        return {
            logError: e,
            logWarning: t,
            logInformation: n
        }
    }(), awa.capabilitiesCheck = function() {
        return function() {
            if (!JSON || !JSON.stringify) return awa.logger.logError("Unable to write event: the global JSON.stringify method does not exist"), awa.isAvailable = !1, !1
        }
    }(), awa.utils = function() {
        function e(e, n) {
            var a, r, i;
            if (n) try {
                return "{}" === (a = JSON.stringify(n)) && "timing" === e ? t() : a
            } catch (t) {
                return r = '{"error": "ERROR: could not stringify {0} {1}"}', i = "string" == typeof n ? n : "", r.replace("{0}", e).replace("{1}", i)
            }
        }

        function t() {
            for (var e, t = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"], n = "{", a = 0; a < t.length; a++) e = O[t[a]], S(e) && (n += '"' + t[a] + '":' + e, a < t.length - 1 && (n += ","));
            return n + "}"
        }

        function n(e) {
            return {
                "microsoft.com": "c1.microsoft.com",
                "xbox.com": "c.xbox.com",
                "live.com": "c.live.com",
                "microsoftstore.com": "c.microsoftstore.com",
                "msn.com": "c.msn.com",
                "windows.com": "c.windows.com"
            } [e]
        }

        function a(e, t) {
            if ("string" === e) return "string" == typeof t || t instanceof String || t instanceof Date;
            if ("bool" === e) return "boolean" == typeof t || t instanceof Boolean;
            if (!("number" == typeof t || t instanceof Number)) return !1;
            if ("uint8" === e) {
                if (t < 0 || t > 255 || t % 1 != 0) return !1
            } else if ("uint16" === e) {
                if (t < 0 || t > 65535 || t % 1 != 0) return !1
            } else if ("uint32" === e) {
                if (t < 0 || t > 4294967295 || t % 1 != 0) return !1
            } else if ("uint64" === e) {
                if (t < 0 || t > 0x10000000000000000 || t % 1 != 0) return !1
            } else if ("int8" === e) {
                if (t < -128 || t > 127 || t % 1 != 0) return !1
            } else if ("int16" === e) {
                if (t < -32768 || t > 32767 || t % 1 != 0) return !1
            } else if ("int32" === e) {
                if (t < -2147483648 || t > 2147483647 || t % 1 != 0) return !1
            } else if ("int64" === e) {
                if (t < -0x8000000000000000 || t > 0x8000000000000000 || t % 1 != 0) return !1
            } else if ("float" === e) {
                if (t < -3.402823e38 || t > 3.402823e38) return !1
            } else if ("double" === e && (t < -Number.MAX_VALUE || t > Number.MAX_VALUE)) return !1;
            return !0
        }

        function r() {
            if ("" === A) {
                var e = o().toLowerCase();
                A = -1 !== e.indexOf("windows phone") ? "WindowsPhone" : -1 !== e.indexOf("win") ? "Windows" : -1 !== e.indexOf("mac") ? "MacOS" : -1 !== e.indexOf("x11") ? "Unix" : -1 !== e.indexOf("android") ? "Android" : -1 !== e.indexOf("linux") ? "Linux" : -1 !== e.indexOf("webos") ? "webOS" : -1 !== e.indexOf("blackberry") ? "BlackBerry" : -1 !== e.indexOf("ipod") || -1 !== e.indexOf("ipad") || -1 !== e.indexOf("iphone") ? "iOS" : -1 !== e.indexOf("symbian") ? "Symbian" : -1 !== e.indexOf("nokia") ? "Nokia" : "Unknown"
            }
            return A
        }

        function i() {
            N = window.navigator && window.navigator.userAgent ? window.navigator.userAgent : ""
        }

        function o() {
            return "" === N && i(), N
        }

        function s(e, t) {
            var n;
            return e && e[t] && (n = e[t], delete e[t]), n
        }

        function c(e, t) {
            return e = d(e), u(e.getBoundingClientRect(), t) > 0
        }

        function u(e, t) {
            var n = e.left,
                a = e.top,
                r = e.right,
                i = e.bottom,
                o = t.left,
                s = t.top,
                c = t.right,
                u = t.bottom;
            return Math.max(0, Math.min(r, c) - Math.max(n, o)) * Math.max(0, Math.min(i, u) - Math.max(a, s))
        }

        function d(e) {
            return "function" == typeof jQuery && e instanceof jQuery ? e[0] : e
        }

        function l(e) {
            var t = String(e);
            return 1 === t.length && (t = "0" + t), t
        }

        function g(e) {
            return e.getUTCFullYear() + "-" + l(e.getUTCMonth() + 1) + "-" + l(e.getUTCDate()) + "T" + l(e.getUTCHours()) + ":" + l(e.getUTCMinutes()) + ":" + l(e.getUTCSeconds()) + "." + String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
        }

        function p() {
            var e;
            try {
                e = window.performance.getEntries().filter(function(e) {
                    return "script" === e.initiatorType || "link" === e.initiatorType
                })
            } catch (e) {}
            return e
        }

        function m() {
            var e;
            return O.loadEventStart > 0 && (e = O.loadEventStart - O.navigationStart), e
        }

        function f() {
            return document.title.substring(0, 150)
        }

        function v(e) {
            return "[" + e + "]"
        }

        function w(e, t) {
            return L = t, y(e, b)
        }

        function h(e) {
            return y(e, E)
        }

        function y(e, t) {
            var n = e;
            if (n) {
                for (n = d(n); !t(n);)
                    if (n = n.parentNode, !(n = d(n)) || !n.getAttribute) return null;
                return n
            }
        }

        function b(e) {
            var t = e.getAttribute(L);
            return S(t) || "" === t
        }

        function E(e) {
            return "A" === e.nodeName
        }

        function T(e) {
            var t, n;
            return e && (n = e.split(":"), t = n.length > 1 && "js" === n[0].toLowerCase() ? e : x + e), t
        }

        function C(e) {
            for (var t in e) S(e[t]) && ("{}" !== JSON.stringify(e[t]) || "callback" === t) || delete e[t]
        }

        function S(e) {
            return !(void 0 === e || null === e || "" === e)
        }

        function I(e, t) {
            var n, a;
            C(e);
            for (n in t) a = t[n], "object" == typeof e[a] ? C(e[a]) : delete e[a]
        }
        var A = "",
            N = "",
            O = window.performance ? window.performance.timing : void 0,
            x = "JS:",
            L = "",
            M = function() {
                var e, t, n = {},
                    a = !1,
                    r = 0,
                    i = arguments.length;
                for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (a = arguments[0], r++), e = function(e) {
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = a && "[object Object]" === Object.prototype.toString.call(e[t]) ? M(!0, n[t], e[t]) : e[t])
                    }; r < i; r++) t = arguments[r], e(t);
                return n
            };
        return {
            stringifyField: e,
            getMuidHost: n,
            isOfCorrectType: a,
            getOs: r,
            getUserAgent: o,
            extractFieldFromObject: s,
            isElementTrulyVisible: c,
            dateToISOString: g,
            extend: M,
            returnDomObjectIfjQuery: d,
            findClosestByAttribute: w,
            findClosestAnchor: h,
            getPerformanceData: p,
            getPageLoadTime: m,
            getTitle: f,
            removeInvalidElements: C,
            removeNonObjectsAndInvalidElements: I,
            bracketIt: v,
            getAppIdWithPrefix: T,
            isValueAssigned: S
        }
    }(), awa.ids = function() {
        function e() {
            function e() {
                return Math.floor(16 * Math.random()).toString(16)
            }
            return "xxxxxxxx-xxxx-4xxx-Rxxx-xxxxxxxxxxxx".replace(/x/g, e).replace("R", (8 | Math.floor(3 * Math.random())).toString(16))
        }

        function t() {
            return f.getCookie("MS0")
        }

        function n() {
            return f.getCookie("MUID")
        }

        function a() {
            return m
        }

        function r() {
            return h ? m = e() : h = !0, m
        }

        function i() {
            return f.getCookie(y)
        }

        function o() {
            var e = f.getCookie("MUID");
            return e && e.length ? "t:" + e : e
        }

        function s(e) {
            if (v = null, e) {
                for (var t = 0; t < b.length; t++)
                    if (b[t] === e.substring(0, 2)) {
                        v = e;
                        break
                    } v || awa.logger.logWarning("Unsupported app user id: " + e + ". Supported app user ids are: c:, i:, and w:")
            }
        }

        function c(e) {
            var t;
            if (!e || e.length < 4) return !1;
            var n = !1,
                a = e.substring(0, 3).toString().toUpperCase();
            for (t = 0; t < E.length; t++)
                if (E[t] + ":" === a && e.length <= 256) {
                    n = !0;
                    break
                } return n
        }

        function u(e) {
            var t, n;
            if (!e) return void(w = null);
            if (e !== w)
                for (w = null, t = e.split(","), n = 0; n < t.length; n++) c(t[n]) ? w ? w += "," + t[n] : w = t[n] : awa.logger.logWarning("Unsupported flight id format for this app expId: " + t[n])
        }

        function d() {
            return w
        }

        function l(e) {
            e && (p = e)
        }

        function g() {
            return p
        }
        var p, m = e(),
            f = awa.cookie,
            v = null,
            w = null,
            h = !1,
            y = "Treatments",
            b = ["c:", "i:", "w:"],
            E = ["AX", "EX", "SF", "CS", "CF", "CT", "CU", "DC", "DF", "H5", "HL", "WS", "WP"];
        return {
            getSessionId: t,
            getVisitorId: n,
            getMuidUserId: o,
            setAppUserId: s,
            getAppUserId: function() {
                return v
            },
            readExpIdFromCookie: function() {
                return u(i()), d()
            },
            readExpIdFromCoreData: function(e) {
                return u(e), d()
            },
            getImpressionGuid: a,
            getPageViewImpressionGuid: r,
            getGroups: i,
            setDeviceClass: l,
            getDeviceClass: g,
            setExpIdCookieName: function(e) {
                y = e
            },
            getExpIdCookieName: function() {
                return y
            }
        }
    }(), awa.vortexEvents = function() {
        function e() {
            s.length > 0 && (awa.writeEvent(s), s = [])
        }

        function t() {
            for (; s.length > 0;) awa.writeEvent(s.pop())
        }

        function n(n, a) {
            if (!0 === a) return void awa.writeEvent(n);
            if (c) {
                if ("complete" === c) return void awa.writeEvent(n)
            } else if ("complete" === document.readyState) return void awa.writeEvent(n);
            (0 === s.length || 0 === u) && (window.addEventListener ? window.addEventListener("load", t) : window.attachEvent && window.attachEvent("onload", t)), s.push(n), u > 1 && s.length >= u && e()
        }

        function a(e) {
            var t = {};
            "CorsDisallowed" === e.type ? t = {
                name: "Ms.Cll.Javascript.CorsDisallowed",
                data: {
                    "Ms.Cll.Javascript.CorsDisallowed": {
                        eventName: e.eventName
                    }
                }
            } : "EventTooLong" === e.type && (t = {
                name: "Ms.Cll.Javascript.EventTooLong",
                data: {
                    "Ms.Cll.Javascript.EventTooLong": {
                        eventName: e.eventName,
                        payloadLength: e.payloadLength
                    }
                }
            }), n(t)
        }

        function r(e, t) {
            n({
                name: "Ms.Webi.ClientError",
                data: {
                    "Ms.Webi.ClientError": {
                        errorInfo: JSON.stringify(e),
                        wasDisplayed: t || !1,
                        customSessionGuid: o.getSessionId(),
                        impressionGuid: o.getImpressionGuid()
                    }
                }
            })
        }

        function i(e) {
            n({
                name: "Ms.Webi.OutgoingRequest",
                cV: e.cV,
                data: {
                    "Ms.Qos.OutgoingServiceRequest": {
                        operationName: e.currentOperationName,
                        targetUri: e.requestUri,
                        latencyMs: e.latencyMs,
                        serviceErrorCode: e.serviceErrorCode || -1,
                        succeeded: e.isSuccess,
                        requestMethod: e.httpMethod,
                        responseContentType: e.contentType,
                        protocolStatusCode: e.httpStatusCode,
                        dependencyOperationName: e.operationName,
                        dependencyOperationVersion: e.operationVersion,
                        dependencyName: e.serviceName,
                        dependencyType: e.serviceType || "WebService",
                        responseSizeBytes: e.responseSize
                    },
                    "Ms.Webi.OutgoingRequest": {
                        customSessionGuid: o.getSessionId(),
                        impressionGuid: o.getImpressionGuid(),
                        message: e.errorMessage,
                        retryCount: e.retryCount,
                        customData: e.customData
                    }
                }
            })
        }
        var o = awa.ids,
            s = [],
            c = null,
            u = 0;
        return {
            sendError: r,
            sendApiComplete: i,
            sendJsllEvent: a,
            SendOrScheduleEvent: n,
            batchQueuedEvents: e,
            drainQueuedEvents: t,
            batchEventsByNumber: function(e) {
                u = e
            },
            overrideQueueBehavior: function(e) {
                e && e.domReadyState && (c = e.domReadyState)
            }
        }
    }(), awa.errorHandler = function() {
        function e(e) {
            var t = window.onerror;
            window.onerror = function() {
                t && t.apply(this, arguments), e.apply(this, arguments)
            }
        }

        function t(e) {
            return e.stack ? e.stack.substring(0, 1e3) : ""
        }

        function n() {
            if (arguments) {
                var e = {
                    Page: window.location.href,
                    Script: arguments[1] || "",
                    Message: arguments[0] || "",
                    LineNumber: arguments[2] || 0,
                    StackTrace: arguments[4] ? t(arguments[4]) : "",
                    UserAgent: awa.utils.getUserAgent() || "",
                    Platform: window.navigator.platform || ""
                };
                r.sendError(e, !1)
            }
        }

        function a() {
            e(n)
        }
        var r = awa.vortexEvents;
        return {
            init: a
        }
    }(), awa.timespanHandler = function() {
        function e(e, n) {
            var a = (new Date).getTime();
            if (n) return a - t[e];
            t[e] = a
        }
        var t = {};
        return {
            recordTimeSpan: e
        }
    }(),
    function() {
        function e(e, n) {
            var a = new Image;
            a.onload = function() {
                1 === a.width && A(e)
            }, a.onerror = function() {
                awa.logger.logWarning("Telemetry image beacon not sent properly. Sending through POST."), t(n)
            }, a.src = e
        }

        function t(e) {
            var t, n, a, r, i;
            for (y = "", t = 0; t < e.length; t++) t > 0 && (y += "\n"), y += JSON.stringify(e[t]);
            n = "", awa.OnSuccessfulVortexRequest && (n = l.endpoint + "/t.req?" + y), a = "", u.isValueAssigned(e[0].ext.javascript.msfpc) && (a = "?ext-javascript-msfpc='" + encodeURIComponent(e[0].ext.javascript.msfpc) + "'", n += a), "xhr" === T ? (r = new XMLHttpRequest, r.open("POST", encodeURI(l.endpoint + a), !0), r.withCredentials = !0, r.onload = function() {
                200 === r.status ? A(n) : I(r.statusText, r.status)
            }, r.onerror = function() {
                I(r.statusText, r.status)
            }, r.send(y)) : "XDomainRequest" === T ? (i = new window.XDomainRequest, i.onload = function() {
                A(n)
            }, i.onerror = function() {
                N(i)
            }, i.open("POST", l.endpoint), i.send(y)) : awa.logger.logError("No event is sent.")
        }

        function n(e) {
            var n, a;
            for (y = "", n = 0; n < e.length; n++) n > 0 && (y += "\n"), y += JSON.stringify(e[n]);
            a = "", awa.OnSuccessfulVortexRequest && (a = l.endpoint + "/t.bcn?" + y), navigator.sendBeacon(l.endpoint, y) ? A(a) : t(e)
        }

        function a(e, t) {
            var n = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                a = document.createElement("script");
            t || (a.onload = function() {
                A(e)
            }), a.async = !0, a.src = e, n.appendChild(a)
        }

        function r() {
            return l.callback && "function" == typeof l.callback.signedinStatus ? l.callback.signedinStatus() : l.isLoggedIn
        }
        var i, o, s, c;
        awa._schemas = awa._schemas || [];
        var u = awa.utils,
            d = u.isValueAssigned,
            l = {
                endpoint: "https://web.vortex.data.microsoft.com/collect/v1",
                sendMode: 1,
                batchSize: 10,
                authMethod: 0,
                logLevel: awa.verbosityLevels.NONE,
                syncMuid: !0,
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
                cookiesToCollect: ["MSFPC", "ANON"],
                useBeacon: !0,
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
                    lineage: !1
                },
                callback: {
                    pageName: null,
                    pageActionPageTags: null,
                    pageViewPageTags: null,
                    contentUpdatePageTags: null,
                    pageActionContentTags: null,
                    signedinStatus: null
                },
                coreData: {
                    referrerUri: document.referrer,
                    requestUri: "",
                    appId: window.location.hostname,
                    pageName: "",
                    pageType: "",
                    env: "",
                    product: "",
                    market: "",
                    serverImpressionGuid: "",
                    expId: "",
                    pageTags: {}
                }
            },
            g = [];
        for (i in l) "object" == typeof l[i] && g.push(i);
        var p = "4.1.0",
            m = function() {
                var e = u.getUserAgent(),
                    t = e.indexOf("MSIE ");
                return t > 0 && parseInt(e.substring(t + 5, e.indexOf(".", t)), 10) < 9
            }(),
            f = m ? 2083 : 15e3,
            v = "",
            w = !1,
            h = 0,
            y = "",
            b = !1,
            E = d(navigator) && d(navigator.sendBeacon);
        awa.experimentIdTag = "expId", awa.isAvailable = !0, awa.getRequestBody = function() {
            return y
        }, awa.getQueryStringParameters = function() {
            return v
        }, Object.freeze && Object.freeze(awa.verbosityLevels), awa.capabilitiesCheck();
        var T = window.XDomainRequest ? "XDomainRequest" : "xhr",
            C = function() {
                return "XDomainRequest" !== T || !l.endpoint || 0 === l.endpoint.indexOf(window.location.protocol) || (awa.logger.logError("Unable to write event: CORS requests are not supported cross-protocol in this browser"), !1)
            },
            S = function() {
                awa.vortexEvents.overrideQueueBehavior({
                    domReadyState: "complete"
                }), awa.vortexEvents.drainQueuedEvents()
            },
            I = function(e, t) {
                awa.logger.logError("Failure sending data to vortex: " + e + "Error: " + t.toString())
            },
            A = function(e) {
                awa.OnSuccessfulVortexRequest && awa.OnSuccessfulVortexRequest(e), 1 === l.sendMode && !1 === b && (b = !0, S()), awa.logger.logInformation("Success sending data to vortex")
            },
            N = function(e) {
                awa.logger.logError("Failure sending data to vortex using XDomainRequest.  Status code:" + e.status)
            },
            O = function(e, t, n) {
                if (d(t) && (n || 0 !== t.length)) {
                    var a = n ? "" : "'";
                    v.length > 0 && (v += "&"), v += e + "=" + a + encodeURIComponent(t.toString()) + a
                }
            },
            x = function(e, t, n, a) {
                for (var r, i, o, s, c, l, g, p, m, f, v = "C" === a ? "*" : "-", w = t.fields, h = 0; h < w.length; h++)
                    if (r = w[h], i = n[r.name], d(i))
                        if (O(v + r.name, i, "string" !== r.type), "map" === r.type) {
                            o = {};
                            for (s in i) {
                                if (!u.isOfCorrectType(r.key, s)) return awa.logger.logError("A key in the map was of the wrong type: " + r.name), !1;
                                if (!u.isOfCorrectType(r.element, i[s])) return awa.logger.logError("A value in the map was of the wrong type: " + r.name), !1;
                                o[s] = i[s]
                            }
                            e[r.name] = o
                        } else if ("list" === r.type || "set" === r.type) {
                    if (c = [], "[object Array]" !== Object.prototype.toString.call(i)) return awa.logger.logError("The " + r.type + " " + r.name + " was not an array as expected"), !1;
                    for (l = 0; l < i.length; l++) {
                        if (d(i[l]) && !u.isOfCorrectType(r.element, i[l])) return awa.logger.logError("The list contains a value of the wrong type: " + r.name), !1;
                        c[l] = i[l]
                    }
                    e[r.name] = c
                } else if ("struct" === r.type) {
                    if (g = {}, !x(g, r.def, i, a)) return !1;
                    e[r.name] = g
                } else {
                    if (!u.isOfCorrectType(r.type, i)) return awa.logger.logError("Property is the wrong type: " + r.name), !1;
                    e[r.name] = i
                } else if (r.req) return awa.logger.logError("Missing required property: " + r.name), !1;
                for (p in n) {
                    for (m = !1, f = 0; f < w.length; f++)
                        if (w[f].name === p) {
                            m = !0;
                            break
                        } m || awa.logger.logWarning("An unexpected field was found in  the event content and dropped: " + p)
                }
                return !0
            };
        for (awa.init = function(e) {
                if (!awa.isInitialized) {
                    awa.isInitialized = !0, e && (u.removeNonObjectsAndInvalidElements(e, g), l = u.extend(!0, l, e));
                    var t = l.sendMode;
                    0 == t && !1 === l.provisionMsfpc && (b = !0), (t >= 1 || !0 === l.provisionMsfpc) && awa.vortexEvents.overrideQueueBehavior({
                        domReadyState: "notComplete"
                    }), 2 === t && awa.vortexEvents.batchEventsByNumber(l.batchSize), awa.consoleVerbosity = l.logLevel, awa.ct.initialize(l)
                }
            }, awa.writeEvent = function(i) {
                var o, s, c, u, d, g, p, m = !0,
                    h = [];
                if ("[object Array]" === Object.prototype.toString.call(i))
                    for (m = !1, o = 0; o < i.length; o++) s = awa._validateAndTranslateEvent(i[o]), s.success && h.push(s.event);
                else c = awa._validateAndTranslateEvent(i), c.success && h.push(c.event);
                if (0 !== h.length) {
                    if (m && v && (u = l.endpoint.length + v.length) + 7 > f && (awa.logger.logWarning("event is too large to send using get -- using post instead"), d = {}, d.eventName = i.name, d.payloadLength = u, d.type = "EventTooLong", awa.vortexEvents.sendJsllEvent(d), m = !1), !m && !C()) return d = {}, d.eventName = i.name, d.type = "CorsDisallowed", void awa.vortexEvents.sendJsllEvent(d);
                    m && v ? !1 === b ? (g = "/t.js", p = !1, !0 === l.shareAuthStatus && !0 === r() && -1 === document.cookie.toLowerCase().indexOf("bounced=") && !1 === w && (g = 1 === l.authMethod ? "/asm.js" : 2 === l.authMethod ? "/asa.js" : g, p = !0), a(l.endpoint + g + "?" + v, p)) : E && !0 === l.useBeacon && !1 === l.shareAuthStatus ? n(h) : (g = !0 === l.shareAuthStatus && !0 === r() ? 1 === l.authMethod ? "/asm.gif" : 2 === l.authMethod ? "/asa.gif" : g : "/t.gif", e(l.endpoint + g + "?" + v, h)) : E && !0 === l.useBeacon && !0 === b && !1 === l.shareAuthStatus ? n(h) : t(h)
                }
            }, awa.sendEventThroughIframe = function(e) {
                var t, n = document.createElement("iframe");
                n.id = "telframe", n.style.display = "none", t = function(e) {
                    ++h > 1 && A(e)
                }, n.attachEvent ? n.attachEvent("onreadystatechange", function() {
                    "interactive" == n.readyState && t(e)
                }) : n.onload = function() {
                    t(e)
                }, n.src = e, w = !0, document.body.appendChild(n)
            }, awa._validateAndTranslateEvent = function(e) {
                function t(e, t, n) {
                    b[e] = t, O(e, t, n)
                }
                var n, a, r, i, o, s, c, g, m, f, w, h, y, b = {},
                    E = {},
                    T = {},
                    C = {
                        event: b,
                        success: !1
                    };
                if (v = "", !e) return awa.logger.logError("Unable to write null event"), C;
                if (!e.name) return awa.logger.logError("Unable to write event with missing name"), C;
                if (!awa._schemas.hasOwnProperty(e.name)) return awa.logger.logError("Unable to write event: a schema for the event named {" + e.name + "} does not exist"), C;
                if (!e.data) return awa.logger.logError("Unable to write event: the event is missing content"), C;
                t("ver", "2.1"), t("name", e.name), t("time", u.dateToISOString(new Date)), t("os", u.getOs()), t("deviceClass", awa.ids.getDeviceClass()), n = e.appId ? e.appId : l.coreData.appId, t("appId", u.getAppIdWithPrefix(n)), "true" === e.isSensitive && t("flags", 524288, !0), a = awa._schemas[e.name];
                for (r in a)
                    if ("name" !== r) {
                        if (i = a[r], !e.data.hasOwnProperty(r)) return awa.logger.logError("Unable to write event: missing expected part: " + r), C;
                        if ("C" === i.part ? o = T : (o = {}, T.baseData = o, T.baseType = r, O("*baseType", r)), !x(o, i.def, e.data[r], i.part)) return C
                    } for (s in e.data) a[s] && a[s].part || awa.logger.logWarning("An unexpected property was found in the event content and dropped: " + s);
                b.data = T, b.tags = {}, e.hasOwnProperty(awa.cv.tag) ? t(awa.cv.tag, e.cV) : awa.cv.isInit() && t(awa.cv.tag, awa.cv.getValue());
                var S = {},
                    I = e.env,
                    A = d(I) ? I : l.coreData.env;
                return d(A) && (S.env = A, E.app = S, O("ext-app-env", A)), c = l && l.coreData && l.coreData.expId ? awa.ids.readExpIdFromCoreData(l.coreData.expId) : awa.ids.readExpIdFromCookie(), c && (u.isOfCorrectType("string", c) ? (S[awa.experimentIdTag] = c, E.app = S, O("ext-app-" + awa.experimentIdTag, c)) : awa.logger.logError("The supplied experiment id is invalid: " + e[awa.experimentIdTag] + "Continuing to process event without this value.")), g = awa.ids.getAppUserId(), g && (u.isOfCorrectType("string", g) ? (S = {}, S.userId = g, E.app = S, O("ext-app-userId", g)) : awa.logger.logError("ignoring the app userId value because it is invalid: " + g)), m = {}, f = window.location.hostname, d(f) || (f = "file:" === window.location.protocol ? "local" : f), m.ver = "1.1", m.libVer = p, m.domain = f, E.javascript = m, O("ext-javascript-ver", "1.1"), O("ext-javascript-libVer", p), O("ext-javascript-domain", f), w = awa.cookie.getCookie("MSFPC"), u.isValueAssigned(w) && (m.msfpc = w, O("ext-javascript-msfpc", w)), h = awa.ids.getMuidUserId(), h && (u.isOfCorrectType("string", h) ? (y = {}, y.localId = h, E.user = y, O("ext-user-localId", h)) : awa.logger.logError("ignoring the userid value because it is invalid: " + h)), b.ext = E, C.success = !0, C
            }, awa._registerSchemas = function(e) {
                for (var t = 0; t < e.length; t++) awa._schemas[e[t].name] = e[t]
            }, awa.console = window.console || {}, awa.console.fallback = awa.console.log || function() {}, o = ["log", "info", "warn", "error", "trace"], s = 0; s < o.length; s++) c = o[s], awa.console[c] || (awa.console[c] = awa.console.fallback);
        awa.extendCoreData = function(e) {
            u.removeInvalidElements(e), l.coreData = u.extend(!0, l.coreData, e)
        }
    }(), awa._registerSchemas([{
        name: "Ms.Cll.Javascript.CorsDisallowed",
        "Ms.Cll.Javascript.CorsDisallowed": {
            part: "C",
            def: {
                fields: [{
                    req: !0,
                    name: "eventName",
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
                    name: "customSessionGuid",
                    type: "string"
                }, {
                    name: "impressionGuid",
                    type: "string"
                }, {
                    name: "serverImpressionGuid",
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
                    name: "customSessionGuid",
                    type: "string"
                }, {
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
                }]
            }
        }
    }]), awa.ct = function() {
        function e(e) {
            var n, a, r, i;
            awa.isAvailable && (Q = e, _ = Q.autoCapture, se = !0 === Q.useShortNameForContentBlob ? oe.shortNames : oe.longNames, _.pageView && (!0 === Q.isLoggedIn && !0 === Q.shareAuthStatus ? t(function() {
                awa.ct.capturePageView({
                    isAuto: !0
                })
            }) : p({
                isAuto: !0
            })), _.click && (window.addEventListener ? (n = -1 !== navigator.appVersion.indexOf("MSIE") ? "click" : "mousedown", window.addEventListener(n, d, !1), window.addEventListener("keyup", d, !1)) : document.attachEvent && (document.attachEvent("onclick", d), document.attachEvent("keyup", d))), _.jsError && Y.init(), _.scroll && (a = g(null, function() {
                f({
                    isAuto: !0,
                    actionType: awa.actionType.SCROLL
                })
            }, Q.debounceMs.scroll), window.addEventListener ? window.addEventListener("scroll", a) : window.attachEvent && window.attachEvent("onscroll", a)), _.resize && (r = g(function() {
                f({
                    isAuto: !0,
                    actionType: awa.actionType.RESIZE
                })
            }, null, Q.debounceMs.resize), window.addEventListener ? window.addEventListener("resize", r) : window.attachEvent && window.attachEvent("onresize", r)), _.onUnload && (i = function() {
                var e = W();
                ae.v = ae.v > e.v ? ae.v : e.v
            }, window.addEventListener ? window.addEventListener("scroll", i) : window.attachEvent && window.attachEvent("onscroll", i), awa.timespanHandler.recordTimeSpan("dwellTime", !1), window.addEventListener ? (window.addEventListener("beforeunload", y), window.addEventListener("unload", y)) : window.attachEvent && (window.attachEvent("onbeforeunload", y), window.attachEvent("onunload", y))), t(awa.ct.domReadyTasksWrapper))
        }

        function t(e) {
            /in/.test(document.readyState) ? setTimeout("awa.ct.onDomReadyDo(" + e + ")", 9) : e.call()
        }

        function n() {
            Q.syncMuid && i(), _.onLoad && ("complete" === document.readyState ? m() : window.addEventListener ? window.addEventListener("load", m) : window.attachEvent && window.attachEvent("onload", m))
        }

        function a() {
            awa.ct.domReadyTasks()
        }

        function r() {
            if (Q.callback && "function" == typeof Q.callback.pageName) return Q.callback.pageName();
            if (Q.coreData.pageName) return Q.coreData.pageName;
            var e = window.location.pathname,
                t = e.split("/");
            return t.length > 2 && "" !== t[2] ? t[2] : "Home"
        }

        function i() {
            var e, t, n = te.getMuidHost(Q.muidDomain || "microsoft.com");
            n ? (e = (window.location.protocol || "http:") + "//" + n + "/c.gif?DI=4050&did=1&t=", t = document.createElement("IMG"), t.style.display = "none", t.src = e, t.hidden = "", t["aria-hidden"] = "true", t.role = "presentation") : awa.logger.logWarning("Unable to get a muid host for the configured muidDomain '" + Q.muidDomain + "'.  Unable to sync muid")
        }

        function o(e) {
            return "which" in e ? 3 === e.which : "button" in e ? 2 === e.button : void 0
        }

        function s(e) {
            return "which" in e ? 1 === e.which : "button" in e ? 1 === e.button : void 0
        }

        function c(e) {
            if ("keyCode" in e) return 13 === e.keyCode
        }

        function u(e) {
            if ("keyCode" in e) return 32 === e.keyCode
        }

        function d(e) {
            var t, n = {
                    A: !0,
                    BUTTON: !0,
                    AREA: !0,
                    INPUT: !0
                },
                a = e || window.event,
                r = a.srcElement || a.target,
                i = {
                    isAuto: !0
                };
            if (o(a)) i.behavior = awa.behavior.CONTEXTMENU, i.actionType = ne.CLICKRIGHT;
            else if (s(a)) i.actionType = ne.CLICKLEFT;
            else if (c(a)) i.actionType = ne.KEYBOARDENTER;
            else {
                if (!u(a)) return;
                i.actionType = ne.KEYBOARDSPACE
            }
            for (; r && r.tagName;) {
                if (n[r.tagName.toUpperCase()]) {
                    t = "INPUT" !== r.tagName.toUpperCase() || ce[r.type.toUpperCase()], t && (l(r) || h(r, i));
                    break
                }
                r = r.parentElement || r.parentNode;
                continue
            }
        }

        function l(e) {
            var t = te.findClosestByAttribute(e, re);
            return !!te.isValueAssigned(t)
        }

        function g(e, t, n) {
            var a;
            return function() {
                var r = this,
                    i = arguments,
                    o = function() {
                        a = null, t && t.apply(r, i)
                    },
                    s = !a;
                clearTimeout(a), a = setTimeout(o, n), s && e && e.apply(r, i)
            }
        }

        function p(e) {
            var t, n = {},
                a = awa.utils.extend(!0, Q.coreData.pageTags);
            a.metaTags = k(n), R(a), "function" == typeof Q.callback.pageViewPageTags && (a = te.extend(!0, a, Q.callback.pageViewPageTags()));
            var i = V(),
                o = {
                    name: "Ms.Webi.PageView",
                    data: {
                        "Ms.Content.PageView": {
                            ver: J,
                            impressionGuid: Z.getPageViewImpressionGuid(),
                            pageName: r(),
                            uri: $(),
                            referrerUri: Q.coreData.referrerUri,
                            resHeight: i.h,
                            resWidth: i.w,
                            market: n.market,
                            pageType: n.pageType,
                            pageTags: a,
                            product: n.product,
                            behavior: n.behavior ? n.behavior : awa.behavior.UNDEFINED
                        },
                        "Ms.Webi.PageView": {
                            cookieEnabled: q(),
                            cookies: x(),
                            isJs: !0,
                            title: te.getTitle(),
                            isLoggedIn: Q.isLoggedIn,
                            isManual: !0,
                            serverImpressionGuid: n.serverImpressionGuid
                        }
                    },
                    isSensitive: n.isSensitive,
                    env: n.env
                },
                s = o.data["Ms.Content.PageView"],
                c = o.data["Ms.Webi.PageView"];
            _.addin && (t = D(), c.flashInstalled = t.installed || !1, c.flashVersion = t.version || ""), e && (b(o, s, c, e), e.pageTags && (s.pageTags = te.extend(!0, a, e.pageTags))), s.pageTags = te.stringifyField("pageTags", s.pageTags), ee.SendOrScheduleEvent(o, !0)
        }

        function m() {
            f({
                isAuto: !0,
                isDomComplete: !0
            })
        }

        function f(e) {
            var t, n = {},
                a = awa.utils.extend(!0, Q.coreData.pageTags);
            a.metaTags = k(n), R(a), e && e.isDomComplete && !0 === _.perf && window.performance && (window.performance.timing && (a.timing = te.stringifyField("timing", window.performance.timing)), !0 === _.assets && (t = te.getPerformanceData()) && (a.AssetPerformance = te.stringifyField("AssetPerformance", t))), "function" == typeof Q.callback.contentUpdatePageTags && (a = te.extend(!0, a, Q.callback.contentUpdatePageTags()));
            var i = F(),
                o = W(),
                s = T(i),
                c = {
                    name: "Ms.Webi.ContentUpdate",
                    data: {
                        "Ms.Content.ContentUpdate": {
                            ver: J,
                            impressionGuid: Z.getImpressionGuid(),
                            pageName: r(),
                            uri: $(),
                            pageTags: a,
                            pageHeight: document.body.scrollHeight,
                            vpHeight: i.h,
                            vpWidth: i.w,
                            market: n.market,
                            behavior: n.behavior ? n.behavior : awa.behavior.UNDEFINED,
                            vScrollOffset: o.v,
                            hScrollOffset: o.h,
                            contentVer: z,
                            content: C(s)
                        },
                        "Ms.Webi.ContentUpdate": {
                            title: te.getTitle(),
                            cookieEnabled: q(),
                            isJs: !0,
                            isManual: !0,
                            isDomComplete: !1,
                            isLoggedIn: Q.isLoggedIn,
                            serverImpressionGuid: n.serverImpressionGuid
                        }
                    },
                    isSensitive: n.isSensitive,
                    env: n.env
                },
                u = c.data["Ms.Content.ContentUpdate"],
                d = c.data["Ms.Webi.ContentUpdate"];
            e && (b(c, u, d, e), e.pageTags && (u.pageTags = te.extend(!0, a, e.pageTags))), u.pageTags = te.stringifyField("pageTags", u.pageTags), ee.SendOrScheduleEvent(c, !1)
        }

        function v(e) {
            h(null, e)
        }

        function w(e, t) {
            h(e, t)
        }

        function h(e, t) {
            var n = {},
                a = awa.utils.extend(!0, Q.coreData.pageTags),
                i = {};
            e = te.returnDomObjectIfjQuery(e), e && (n.targetUri = L(e), i = A(e, !0), i = te.extend(i, M(e)), i.bhvr && j(n, te.extractFieldFromObject(i, "bhvr"))), a.metaTags = k(n), R(a), "function" == typeof Q.callback.pageActionPageTags && (a = te.extend(!0, a, Q.callback.pageActionPageTags(e)));
            var o = Q.callback.pageActionContentTags,
                s = {
                    name: "Ms.Webi.PageAction",
                    data: {
                        "Ms.Content.PageAction": {
                            ver: J,
                            impressionGuid: Z.getImpressionGuid(),
                            pageName: r(),
                            uri: $(),
                            destUri: n.targetUri,
                            market: n.market,
                            pageType: n.pageType,
                            pageTags: a,
                            product: n.product,
                            actionType: n.actionType,
                            behavior: n.behavior,
                            contentVer: z,
                            content: te.bracketIt(JSON.stringify(awa.utils.extend(i, "function" == typeof o ? o(e) : {}, t ? t.contentTags : {})))
                        },
                        "Ms.Webi.PageAction": {
                            timeToAction: E(),
                            cookies: x(),
                            cookieEnabled: q(),
                            isJs: !0,
                            title: te.getTitle(),
                            referrerUri: Q.coreData.referrerUri,
                            isLoggedIn: Q.isLoggedIn,
                            isManual: !0,
                            serverImpressionGuid: n.serverImpressionGuid
                        }
                    },
                    isSensitive: n.isSensitive,
                    env: n.env
                },
                c = s.data["Ms.Content.PageAction"],
                u = s.data["Ms.Webi.PageAction"];
            t && (b(s, c, u, t), t.pageTags && (c.pageTags = te.extend(!0, a, t.pageTags)), t.referrerUri && (u.referrerUri = te.extractFieldFromObject(c, "referrerUri"))), c.pageTags = te.stringifyField("pageTags", c.pageTags), ee.SendOrScheduleEvent(s, !0)
        }

        function y() {
            var e, t;
            ie || (ie = !0, e = {}, k(e), t = {
                name: "Ms.Webi.PageUnload",
                data: {
                    "Ms.Content.PageUnload": {
                        ver: J,
                        impressionGuid: Z.getPageViewImpressionGuid(),
                        pageName: r()
                    },
                    "Ms.Webi.PageUnload": {
                        dwellTime: awa.timespanHandler.recordTimeSpan("dwellTime", !0),
                        scrollDepth: ae.v.toString() + "/" + document.body.scrollHeight.toString()
                    }
                },
                isSensitive: e.isSensitive,
                env: e.env
            }, ee.SendOrScheduleEvent(t, !0))
        }

        function b(e, t, n, a) {
            a.appId && (e.appId = a.appId), a.behavior && j(t, a.behavior), a.uri && (t.uri = a.uri), a.referrerUri && (t.referrerUri = a.referrerUri), a.pageName && (t.pageName = a.pageName), a.actionType && (t.actionType = a.actionType), a.pageHeight && (t.pageHeight = a.pageHeight), a.content && (t.content = te.bracketIt(JSON.stringify(a.content))), a.targetUri && (t.destUri = a.targetUri), a.vScrollOffset && (t.vScrollOffset = a.vScrollOffset), a.hScrollOffset && (t.hScrollOffset = a.hScrollOffset), n.isManual = !0 !== a.isAuto || void 0, a.isDomComplete && (n.isDomComplete = a.isDomComplete, n.pageLoadTime = te.getPageLoadTime()), a.pageLoadTime && (n.pageLoadTime = a.pageLoadTime), a.timings && (n.timings = JSON.stringify(a.timings))
        }

        function E() {
            if (window.performance && window.performance.timing) {
                var e = window.performance.timing.domComplete;
                if (0 !== e) return (new Date).getTime() - e
            }
            return -1
        }

        function T(e) {
            return {
                top: 0,
                bottom: e.h,
                left: 0,
                right: e.w
            }
        }

        function C(e) {
            var t = [];
            return S(document.querySelectorAll(te.bracketIt(se.areaName) + "," + te.bracketIt(se.slotNumber) + "," + te.bracketIt(Q.biBlobAttributeTag)), t, e), JSON.stringify(t)
        }

        function S(e, t, n) {
            var a, r, i;
            if (e)
                for (a = 0; a < e.length; a++) r = e[a], l(r) || te.isElementTrulyVisible(r, n) && (i = A(r, !1)) && t.push(i)
        }

        function I(e) {
            for (var t, n, a, r, i, o, s, c = [], u = [], d = [], l = [], g = Q.biBlobAttributeTag, p = (se.contentName, "data-module-id"), m = void 0; e;) n = e.getAttribute(g) || e[g], a = e.getAttribute(p) || e[p], n ? (r = JSON.parse(n)) && (t = r.cN || r.cT, c.push(t), a && (m = t), d.push(r.id || void 0), u.push(r.sN || -1), l.push(r.tags || {})) : (t = e.getAttribute(se.contentName) || e.getAttribute(se.contentType), c.push(t), a && (m = t), d.push(e.getAttribute(se.id) || void 0), u.push(e.getAttribute(se.slotNumber) || -1), l.push(e.getAttribute("data-bi-tags") || {})), e = e.parentElement;
            for (i = {
                    lineage: c.join(">"),
                    lineageOrdinal: u.join(">"),
                    lineageById: d.join(">"),
                    containerName: m
                }, o = !1, s = 0; s < l.length; s++) o = o || te.isValueAssigned(l[s]);
            return o && (i.lineageTags = l), i
        }

        function A(e, t) {
            var n, a, r, i, o, s, c, u, d;
            if (!e) return "";
            if (n = {}, a = awa.utils.findClosestByAttribute(e, Q.biBlobAttributeTag), a && (r = a.getAttribute(Q.biBlobAttributeTag)), r) n = JSON.parse(r);
            else
                for (i = te.findClosestByAttribute(e, te.bracketIt(se.id)), i = te.returnDomObjectIfjQuery(e), o = te.findClosestByAttribute(e, se.areaName), s = awa.utils.extend({}, O(o)), n = {
                        id: i.getAttribute(se.id) || e.id || "",
                        aN: s.areaName,
                        sN: i.getAttribute(se.slotNumber),
                        cN: i.getAttribute(se.contentName) || N(e) || i.getAttribute("alt") || "",
                        cS: i.getAttribute(se.contentSource) || s.contentSource,
                        tN: s.templateName,
                        pid: i.getAttribute(se.productId),
                        cT: i.getAttribute(se.contentType) || s.type
                    }, n.id && n.aN && n.sN && n.cN || awa.logger.logWarning("Invalid content blob.  Missing required attributes (id, aN/area, sN/slot), cN/contentName.  Content information will still be collected!"), se.isShortNames || (n = {
                        contentId: n.id,
                        areaName: n.aN,
                        slotNumber: n.sN,
                        contentName: n.cN,
                        contentSource: n.cS,
                        templateName: n.tN,
                        productId: n.pid,
                        contentType: n.cT
                    }), c = 0; c < i.attributes.length; c++) u = i.attributes[c], u.name !== se.id && u.name !== se.areaName && u.name !== se.slotNumber && u.name !== se.contentName && u.name !== se.contentSource && u.name !== se.templateName && u.name !== se.productId && u.name !== se.contentType && -1 !== u.name.indexOf("data-bi-") && (d = u.name.replace("data-bi-", ""), n[d] = u.value);
            return awa.utils.removeInvalidElements(n), Q.autoCapture.lineage && t && (n = awa.utils.extend(n, I(e))), n
        }

        function N(e) {
            if (!1 === Q.useDefaultContentName || H(e) || !e.tagName) return "";
            var t;
            switch (e.tagName) {
                case "A":
                    t = document.all ? e.innerText || e.innerHTML : e.text || e.innerHTML;
                case "IMG":
                case "AREA":
                    t = e.alt;
                default:
                    t = e.value || e.name || e.alt || e.innerText || e.id
            }
            return t.substring(0, K)
        }

        function O(e) {
            return e = te.returnDomObjectIfjQuery(e), e ? {
                areaName: e.getAttribute(se.areaName),
                templateName: e.getAttribute(se.templateName),
                contentSource: e.getAttribute(se.contentSource),
                product: e.getAttribute(se.productId),
                type: e.getAttribute(se.contentType)
            } : void 0
        }

        function x() {
            var e, t, n, a = "",
                r = {},
                i = [],
                o = Q.cookiesToCollect;
            if (!1 === Q.shareAuthStatus) i = o;
            else
                for (e = 0; e < o.length; e++) "ANON" !== o[e] && i.push(o[e]);
            try {
                try {
                    window.varCustomerCookies && window.varCustomerCookies.length > 0 && (i = i.concat(window.varCustomerCookies))
                } catch (e) {}
                for (t in i) r.hasOwnProperty(i[t]) || (r[i[t]] = "", "" !== (n = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(i[t]).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1"))) && (a += i[t] + "=" + n + ";"))
            } catch (e) {}
            return a
        }

        function L(e) {
            var t, n = "";
            switch (e.tagName) {
                case "A":
                case "AREA":
                    n = e.href || "";
                    break;
                case "IMG":
                    n = B(e);
                    break;
                case "INPUT":
                    t = e.type, window.event, t && ce[t.toUpperCase()] && (n = e.form ? e.form.action || window.location.pathname : window.location.pathname)
            }
            return n
        }

        function M(e) {
            for (var t, n, a = {}; e;)
                if (!H(e)) {
                    for (t in e.attributes) t && e.attributes[t] && (n = e.attributes[t].name) && 0 === n.toLowerCase().indexOf("ms.") && (a[n] = e.attributes[t].value);
                    e = e.parentElement || e.parentNode
                } return a
        }

        function D() {
            var e, t, n, a = {};
            if (navigator.plugins["Shockwave Flash"]) a.installed = !0, e = navigator.plugins["Shockwave Flash"], a.version = e.description.split(" ")[2];
            else if (-1 !== navigator.userAgent.indexOf("MSIE"))
                for (t = (new Date).getFullYear() - 1992, n = t; n > 0; n--) try {
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n), a.installed = !0, a.version = n + ".0";
                    break
                } catch (e) {}
            return a
        }

        function R(e) {
            if (!e.enabledFeatures) {
                var t = X.getCookie("Features");
                t && (e.enabledFeatures = t)
            }
        }

        function k(e) {
            var t = {},
                n = {};
            return t = P("awa-", !0), e.env = U(t, Q.coreData, "env"), e.pageType = U(t, Q.coreData, "pageType"), e.product = U(t, Q.coreData, "product"), e.market = U(t, Q.coreData, "market"), e.serverImpressionGuid = U(t, Q.coreData, "serverImpressionGuid"), e.isSensitive = U(t, Q.coreData, "isSensitive"), n = P("ms.", !1), te.extend(!0, t, n)
        }

        function U(e, t, n) {
            var a = te.extractFieldFromObject(e, n);
            return t[n] ? t[n] : a
        }

        function P(e, t) {
            for (var n, a, r, i = {}, o = document.querySelectorAll("meta"), s = 0; s < o.length; s++) n = o[s], n.name && (a = n.name.toLowerCase(), 0 === a.indexOf(e) && (r = t ? n.name.replace(e, "") : n.name, i[r] = n.content));
            return i
        }

        function V() {
            var e = {
                h: 0,
                w: 0
            };
            return window.screen && (e.h = screen.height, e.w = screen.width), e
        }

        function F() {
            var e = {
                h: 0,
                w: 0
            };
            return window.screen && (e.h = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight, e.w = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth), e
        }

        function W() {
            return {
                h: parseInt(document.body.scrollLeft || document.documentElement.scrollLeft || window.pageXOffset || 0, 10),
                v: parseInt(document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0, 10)
            }
        }

        function q() {
            if (navigator.cookieEnabled) return navigator.cookieEnabled;
            var e = "MC0",
                t = X.getCookie(e);
            return t || (document.cookie = e + "=1", t = X.getCookie(e)), !!t
        }

        function B(e) {
            var t, n = e;
            if (n && (t = te.findClosestAnchor(n), 1 === t.length)) {
                if (t[0].href) return t[0].href;
                if (t[0].src) return t[0].src
            }
            return ""
        }

        function H(e) {
            if (!e || !e.attributes) return !1;
            try {
                var t = e.getAttribute("data-dc");
                return !!te.isValueAssigned(t) && "pii" === t.toLowerCase()
            } catch (e) {
                return !1
            }
        }

        function G(e) {
            for (var t = 0; t < awa.behaviorKeys.length; t++)
                if (awa.behavior[awa.behaviorKeys[t]] === e) return !0;
            return awa.logger.logWarning("Unsupported behavior: " + e + "."), !1
        }

        function j(e, t) {
            var n, a = Number(t);
            te.isOfCorrectType("uint16", a) ? G(a) && (e.behavior = a) : te.isOfCorrectType("string", t) && (n = awa.behavior[t.toUpperCase()], te.isOfCorrectType("uint16", n) && (e.behavior = n))
        }

        function $() {
            return "" === Q.coreData.requestUri ? window.location.href : Q.coreData.requestUri
        }
        var J = "1.0",
            z = "2.0",
            K = 200,
            Q = {},
            _ = {},
            X = awa.cookie,
            Y = awa.errorHandler,
            Z = awa.ids,
            ee = awa.vortexEvents,
            te = awa.utils,
            ne = awa.actionType,
            ae = {
                h: 0,
                v: 0
            },
            re = "data-bi-dnt",
            ie = !1,
            oe = {
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
            se = oe.longNames,
            ce = {
                BUTTON: !0,
                CHECKBOX: !0,
                RADIO: !0,
                RESET: !0,
                SUBMIT: !0
            };
        return {
            initialize: e,
            capturePageView: p,
            captureContentUpdate: f,
            capturePageAction: w,
            captureContentPageAction: v,
            domReadyTasksWrapper: a,
            onDomReadyDo: t,
            domReadyTasks: n
        }
    }(), awa.service = function() {
        function e(e) {
            "function" == typeof e ? r = e : "string" == typeof e && (r = function() {
                return e
            })
        }
        var t = awa.timespanHandler,
            n = !0,
            a = !1,
            r = null,
            i = function(e) {
                var i, o;
                if ("function" == typeof jQuery) {
                    n && ($.support.cors = !0);
                    var s, c = e.additionalHeaders || {},
                        u = e.body,
                        d = u ? JSON.stringify(u) : e.data || void 0,
                        l = e.maxRetry || 0,
                        g = 0,
                        p = $.noop,
                        m = e.operationName || e.url,
                        f = e.errorFormatter || function(e) {
                            return e
                        },
                        v = awa.ids,
                        w = {
                            url: e.url,
                            type: e.method,
                            data: d,
                            crossDomain: !0,
                            headers: {},
                            success: e.success,
                            timeout: e.timeout,
                            error: e.error,
                            jsonp: e.jsonp,
                            jsonpCallback: e.jsonpCallback,
                            cache: e.cache,
                            beforeSend: function(t) {
                                if (p(t), e.contractVersion && t.setRequestHeader("MS-Contract-Version", e.contractVersion), (!awa.utils.isValueAssigned(e.addCvToRequestHeader) && a || e.addCvToRequestHeader) && awa.cv.isValid(s) && t.setRequestHeader("MS-CV", s), c)
                                    for (var n in c) t.setRequestHeader(n, c[n])
                            }
                        };
                    return e.dataType && (w.dataType = e.dataType), e.noCacheBusting || (w.cache = !1), e.contentType && (w.contentType = e.contentType), e.accept && (w.headers.Accept = e.accept), e.accepts && (w.accepts = e.accepts), e.async && (w.async = e.async), e.xhrFields && (w.xhrFields = e.xhrFields), e.complete && (w.complete = e.complete), e.contents && (w.contents = e.contents), e.context && (w.context = e.context), e.dataFilter && (w.dataFilter = e.dataFilter), e.global && (w.global = e.global), e.ifModified && (w.ifModified = e.ifModified), e.isLocal && (w.isLocal = e.isLocal), e.mimeType && (w.mimeType = e.mimeType), e.password && (w.password = e.password), e.processData && (w.processData = e.processData), e.scriptCharset && (w.scriptCharset = e.scriptCharset), e.statusCode && (w.statusCode = e.statusCode), e.traditional && (w.traditional = e.traditional), e.type && (w.type = e.type), e.username && (w.username = e.username), e.xhr && (w.xhr = e.xhr), s = awa.cv.isValid(e.cV) ? e.cV : awa.cv.increment(), i = function(t, n, a) {
                        var i = t.getResponseHeader("Content-Length"),
                            o = {
                                name: "Ms.Webi.OutgoingRequest",
                                cV: s,
                                data: {
                                    "Ms.Qos.OutgoingServiceRequest": {
                                        operationName: e.currentOperationName || window.location.href,
                                        targetUri: r ? r(w.url) : w.url,
                                        latencyMs: a,
                                        serviceErrorCode: !n && t.responseJSON && t.responseJSON.code && !isNaN(t.responseJSON.code) ? t.responseJSON.code : -1,
                                        succeeded: n,
                                        requestMethod: w.type,
                                        responseContentType: w.dataType,
                                        protocolStatusCode: t.status.toString(),
                                        dependencyOperationName: m,
                                        dependencyOperationVersion: e.version && e.version.toString(),
                                        dependencyName: e.serviceName,
                                        dependencyType: "WebService",
                                        responseSizeBytes: i && parseInt(i, 10)
                                    },
                                    "Ms.Webi.OutgoingRequest": {
                                        customSessionGuid: v.getSessionId(),
                                        impressionGuid: v.getImpressionGuid(),
                                        message: n ? void 0 : awa.utils.stringifyField("errorMessage", t.errorThrown),
                                        retryCount: g,
                                        customData: e.customDataCallBack && "function" == typeof e.customDataCallBack ? awa.utils.stringifyField("customData", e.customDataCallBack(t)) : void 0
                                    }
                                }
                            };
                        e.QosCallback && "function" == typeof e.QosCallback && e.QosCallback(t, o), awa.vortexEvents.SendOrScheduleEvent(o)
                    }, o = function() {
                        var n = m + "_Retry_" + g;
                        return t.recordTimeSpan(n), $.ajax(w).then(function(e, a, r) {
                            var o = t.recordTimeSpan(n, !0);
                            return i(r, !0, o), r
                        }, function(a, r) {
                            var c, u = t.recordTimeSpan(n, !0);
                            return i(a, !1, u), c = $.Deferred(), l > g && (0 === a.status || a.status >= 500 && a.status < 600) ? (g++, s = awa.cv.isValid(e.cV) ? awa.cv.incrementExternal(s) : awa.cv.increment(), setTimeout(function() {
                                o().done(c.resolve).fail(c.reject)
                            }, 50)) : c.reject(a, r), c.promise()
                        })
                    }, o().then(function(e, t, n) {
                        return n
                    }, function(t) {
                        return f(t, e)
                    })
                }
                awa.logger.logError("jQuery is not defined, cannot use service module")
            };
        return {
            post: function(e) {
                return i(awa.utils.extend({}, e, {
                    method: "POST"
                }))
            },
            get: function(e) {
                return i(awa.utils.extend({
                    maxRetry: 1
                }, e, {
                    method: "GET"
                }))
            },
            put: function(e) {
                return i(awa.utils.extend({}, e, {
                    method: "PUT"
                }))
            },
            del: function(e) {
                return i(awa.utils.extend({}, e, {
                    method: "DELETE"
                }))
            },
            patch: function(e) {
                return i(awa.utils.extend({}, e, {
                    method: "PATCH"
                }))
            },
            doNotChangeSupportCors: function() {
                n = !1
            },
            alwaysAddCvToRequestHeader: function() {
                a = !0
            },
            setTargetUriOverride: e
        }
    }();
var DefaultSignInHandler;
! function(e) {
    var t = function() {
        function e() {}
        return e.signIn = function(e, t, n) {
            var a = $.Deferred();
            return this.startDefaultSignIn(e, t, n, a), a
        }, e.startDefaultSignIn = function(e, t, n, a) {
            var r = this,
                i = !1,
                o = setTimeout(function() {
                    i || (i = !0, o = void 0, "undefined" != typeof StandaloneAriaLogger && void 0 !== StandaloneAriaLogger.Logger && void 0 !== StandaloneAriaLogger.Logger.LogEvent && StandaloneAriaLogger.Logger.LogEvent("unauth_generic", "DefaultSignin_Timed_Out"), a.resolve(void 0))
                }, n);
            getAccount(t, function(t) {
                i || (i = !0, o && (clearTimeout(o), o = null), r.handleSignInResult(t, e, a))
            })
        }, e.handleSignInResult = function(e, t, n) {
            if (e) {
                if ("undefined" != typeof StandaloneAriaLogger && void 0 !== StandaloneAriaLogger.Logger && void 0 !== StandaloneAriaLogger.Logger.LogEvent) {
                    var a = e.telemetry;
                    a.operation = e.op, a.hasUpn = String(null !== e.upn), StandaloneAriaLogger.Logger.LogEvent("unauth_generic", "DefaultSignin_Telemetry", a)
                }
                if ("Redirect" === e.op) {
                    var r = e.idp,
                        i = e.upn,
                        o = t;
                    r && (i && (o = this.updateQueryStringParameter(t, encodeURI(i))), n.resolve(o))
                } else n.resolve(void 0)
            }
        }, e.updateQueryStringParameter = function(e, t) {
            if (e && t) {
                var n = /login_hint=(.*?)(?=&|$)/g,
                    a = encodeURI("login_hint=" + t);
                return e.replace(n, a)
            }
        }, e
    }();
    e.DefaultSignInAdapter = t
}(DefaultSignInHandler || (DefaultSignInHandler = {}));