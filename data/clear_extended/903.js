/* prebid.js v2.8.0-pre
Updated : 2019-03-22 */
!(function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        d = {
            219: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = u, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e
    }, f(f.s = 570)
})({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", (function() {
            return C
        })), n.d(t, "bind", (function() {
            return B
        })), t.replaceTokenInString = function(i, e, o) {
            return ne(e, (function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            })), i
        }, t.getUniqueIdentifierStr = D, t.generateUUID = function e(t) {
            return t ? (t ^ N() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function(e, t) {
            if (t && t[e]) return t[e];
            return ""
        }, t.tryAppendQueryString = function(e, t, n) {
            if (n) return e += t + "=" + encodeURIComponent(n) + "&";
            return e
        }, t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, t.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? le(t).map((function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(pe(t, e)))
            })).join("&") : ""
        }, t.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }, t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) ie(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === p(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(k(e));
                    else
                        for (var a = 0; a < o; a++) t.push(k(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = k, t.getTopWindowLocation = x, t.getTopFrameReferrer = P, t.getAncestorOrigins = G, t.getWindowTop = q, t.getWindowSelf = M, t.getWindowLocation = W, t.getTopWindowUrl = function() {
            var t;
            try {
                t = C.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, t.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, t.logMessage = L, t.logInfo = z, t.logWarn = F, t.logError = V, t.hasConsoleLogger = function() {
            return O
        }, t.debugTurnedOn = K, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = D(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = Y, t.hasValidBidRequest = function(e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, ne(e, i), !r) return V("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, t.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, t.isA = J, t.isFn = Q, t.isStr = X, t.isArray = $, t.isNumber = Z, t.isPlainObject = ee, t.isBoolean = function(e) {
            return J(e, E)
        }, t.isEmpty = te, t.isEmptyStr = function(e) {
            return X(e) && (!e || 0 === e.length)
        }, t._each = ne, t.contains = function(e, t) {
            if (te(e)) return !1;
            if (Q(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, n.d(t, "indexOf", (function() {
            return re
        })), t._map = function(n, r) {
            if (te(n)) return [];
            if (Q(n.map)) return n.map(r);
            var i = [];
            return ne(n, (function(e, t) {
                i.push(r(e, t, n))
            })), i
        }, t.insertElement = oe, t.triggerPixel = ae, t.callBurl = function(e) {
            var t = e.source,
                n = e.burl;
            t === g.S2S.SRC && n && C.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = D(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", C.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }, t.insertUserSyncIframe = ce, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = ue, t.getIframeDocument = function(e) {
            if (!e) return;
            var t;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
            } catch (e) {
                C.logError("Cannot get iframe document", e)
            }
            return t
        }, t.getValueString = se, t.uniques = de, t.flatten = fe, t.getBidRequest = function(n, e) {
            return n ? (e.some((function(e) {
                var t = c()(e.bids, (function(t) {
                    return ["bidId", "adId", "bid_id"].some((function(e) {
                        return t[e] === n
                    }))
                }));
                return t && (r = t), t
            })), r) : void 0;
            var r
        }, t.getKeys = le, t.getValue = pe, t.getKeyByValue = function(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                })).reduce(fe, [])
            })).reduce(fe).filter(de)
        }, t.isGptPubadsDefined = function() {
            if (window.googletag && Q(window.googletag.pubads) && Q(window.googletag.pubads().getSlots)) return !0
        }, n.d(t, "getHighestCpm", (function() {
            return ge
        })), n.d(t, "getOldestHighestCpmBid", (function() {
            return be
        })), n.d(t, "getLatestHighestCpmBid", (function() {
            return ve
        })), t.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function(e, t) {
            return s()(e, t && t.adUnitCode)
        }, t.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, t.deepClone = he, t.inIframe = me, t.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.timestamp = function() {
            return (new Date).getTime()
        }, t.checkCookieSupport = Se, t.cookiesAreEnabled = function() {
            if (C.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, t.getCookie = function(e) {
            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
            return t ? decodeURIComponent(t[2]) : null
        }, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments)
            }
        }, t.groupBy = function(e, n) {
            return e.reduce((function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }), {})
        }, t.deepAccess = function(e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++)
                if (void 0 === (e = e[t[n]])) return;
            return e
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
        }, t.getDefinedParams = function(n, e) {
            return e.filter((function(e) {
                return n[e]
            })).reduce((function(e, t) {
                return l(e, (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                })({}, t, n[t]))
            }), {})
        }, t.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every((function(e) {
                    return s()(t, e)
                }))) return !1;
            if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function(e, t, n) {
            return c()(e, (function(e) {
                return 0 < e.bids.filter((function(e) {
                    return e.bidder === t && e.adUnitCode === n
                })).length
            })) || {
                start: null,
                auctionId: null
            }
        }, t.getUserConfiguredParams = function(e, t, n) {
            return e.filter((function(e) {
                return e.code === t
            })).map((function(e) {
                return e.bids
            })).reduce(fe, []).filter((function(e) {
                return e.bidder === n
            })).map((function(e) {
                return e.params || {}
            }))
        }, t.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, t.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, t.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return Ee(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return Ee(e, t)
            }
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.deletePropertyFromObject = Ae, t.removeRequestId = function(e) {
            return Ae(e, "requestId")
        }, t.isInteger = Te, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
                return "_" + t.toLowerCase()
            })).replace(/^_/, "")
        }, t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return ne(e, (function(e, t) {
                if ($(e)) {
                    var n = [];
                    ne(e, (function(e) {
                        ((e = se(r + "." + t, e)) || "" === e) && n.push(e)
                    })), e = n
                } else {
                    if (!X(e = se(r + "." + t, e))) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            })), i
        }, t.convertTypes = function(r, i) {
            return Object.keys(r).forEach((function(e) {
                var t, n;
                i[e] && (Q(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), isNaN(i[e]) && delete i.key)
            })), i
        }, t.setDataInLocalStorage = function(e, t) {
            Oe() && window.localStorage.setItem(e, t)
        }, t.getDataFromLocalStorage = function(e) {
            if (Oe()) return window.localStorage.getItem(e)
        }, t.hasLocalStorage = Oe, t.isArrayOfNums = function(e, t) {
            return $(e) && (!t || e.length === t) && e.every((function(e) {
                return Te(e)
            }))
        }, t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = ee(e) ? he(e) : e;
                n.push(i)
            }
            return n
        }, t.chunk = function(e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t,
                    o = i + t;
                n.push(e.slice(i, o))
            }
            return n
        }, t.getMinValueFromArray = function(e) {
            return Math.min.apply(Math, f(e))
        }, t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, f(e))
        }, t.compareOn = function(n) {
            return function(e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        };
        var r = n(3),
            i = n(90),
            o = n.n(i),
            a = n(10),
            c = n.n(a),
            u = n(7),
            s = n.n(u),
            d = n(11);

        function f(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var g = n(4),
            b = !1,
            v = "Array",
            y = "String",
            h = "Function",
            m = "Number",
            S = "Object",
            E = "Boolean",
            A = Object.prototype.toString,
            T = Boolean(window.console),
            O = Boolean(T && window.console.log),
            I = Boolean(T && window.console.info),
            w = Boolean(T && window.console.warn),
            _ = Boolean(T && window.console.error),
            C = {
                checkCookieSupport: Se,
                createTrackPixelIframeHtml: ue,
                getWindowSelf: M,
                getWindowTop: q,
                getAncestorOrigins: G,
                getTopFrameReferrer: P,
                getWindowLocation: W,
                getTopWindowLocation: x,
                insertUserSyncIframe: ce,
                insertElement: oe,
                isFn: Q,
                triggerPixel: ae,
                logError: V,
                logWarn: F,
                logMessage: L,
                logInfo: z
            },
            j = {},
            B = function(e, t) {
                return t
            }.bind(null, 1, j)() === j ? Function.prototype.bind : function(e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            };
        var U, R = (U = 0, function() {
            return ++U
        });

        function D() {
            return R() + Math.random().toString(16).substr(2)
        }

        function N() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function k(e) {
            if ($(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function x() {
            if (me()) {
                var e;
                try {
                    e = C.getAncestorOrigins() || C.getTopFrameReferrer()
                } catch (e) {
                    z("could not obtain top window location", e)
                }
                if (e) return Object(d.c)(e, {
                    decodeSearchAsString: !0
                })
            }
            return C.getWindowLocation()
        }

        function P() {
            try {
                window.top.location.toString();
                for (var e, t = "";
                    (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer), e !== window.top;);
                return t
            } catch (e) {
                return window.document.referrer
            }
        }

        function G() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
        }

        function q() {
            return window.top
        }

        function M() {
            return window.self
        }

        function W() {
            return window.location
        }

        function L() {
            K() && O && console.log.apply(console, H(arguments, "MESSAGE:"))
        }

        function z() {
            K() && I && console.info.apply(console, H(arguments, "INFO:"))
        }

        function F() {
            K() && w && console.warn.apply(console, H(arguments, "WARNING:"))
        }

        function V() {
            K() && _ && console.error.apply(console, H(arguments, "ERROR:"))
        }

        function H(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function K() {
            if (!1 === r.config.getConfig("debug") && !1 === b) {
                var e = "TRUE" === Y(g.DEBUG_MODE).toUpperCase();
                r.config.setConfig({
                    debug: e
                }), b = !0
            }
            return !!r.config.getConfig("debug")
        }

        function Y(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        }

        function J(e, t) {
            return A.call(e) === "[object " + t + "]"
        }

        function Q(e) {
            return J(e, h)
        }

        function X(e) {
            return J(e, y)
        }

        function $(e) {
            return J(e, v)
        }

        function Z(e) {
            return J(e, m)
        }

        function ee(e) {
            return J(e, S)
        }

        function te(e) {
            if (!e) return !0;
            if ($(e) || X(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function ne(e, t) {
            if (!te(e)) {
                if (Q(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }
        var re = (function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        })();
        var ie = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        };

        function oe(e, t, n, r) {
            var i;
            t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o)
                }
            } catch (e) {}
        }

        function ae(e, t) {
            var n = new Image;
            t && C.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function ce(e, t) {
            var n = C.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && C.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), C.insertElement(i, document, "html", !0)
        }

        function ue(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (t && (e = encodeURI(e)), n && (n = 'sandbox="'.concat(n, '"')), "<iframe ".concat(n, ' id="').concat(D(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function se(e, t, n) {
            return null == t ? n : X(t) ? t : Z(t) ? t.toString() : void C.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function de(e, t, n) {
            return n.indexOf(e) === t
        }

        function fe(e, t) {
            return e.concat(t)
        }

        function le(e) {
            return Object.keys(e)
        }

        function pe(e, t) {
            return e[t]
        }
        var ge = ye("timeToRespond", (function(e, t) {
                return t < e
            })),
            be = ye("responseTimestamp", (function(e, t) {
                return t < e
            })),
            ve = ye("responseTimestamp", (function(e, t) {
                return e < t
            }));

        function ye(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function he(e) {
            return o()(e)
        }

        function me() {
            try {
                return C.getWindowSelf() !== C.getWindowTop()
            } catch (e) {
                return !0
            }
        }

        function Se() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }
        var Ee = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Ae(e, t) {
            var n = l({}, e);
            return delete n[t], n
        }

        function Te(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Oe() {
            try {
                return !!window.localStorage
            } catch (e) {
                V("Local storage api disabled")
            }
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.registerBidder = function(t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = I(e);
                a.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach((function(e) {
                a.default.aliasRegistry[e] = t.code, r(A({}, t, {
                    code: e
                }))
            }))
        }, t.newBidder = I, t.preloadBidderMappingFile = w, t.getIabSubCategory = function(t, e) {
            var n = a.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(),
                    i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                    o = Object(y.getDataFromLocalStorage)(i);
                if (o) {
                    try {
                        o = JSON.parse(o)
                    } catch (e) {
                        Object(y.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return o.mapping[e] ? o.mapping[e] : null
                }
            }
        }, t.isValid = _;
        var r = n(45),
            a = n(8),
            i = n(3),
            g = n(22),
            o = n(27),
            c = n(26),
            u = n(46),
            s = n(4),
            b = n.n(s),
            d = n(9),
            v = n.n(d),
            f = n(7),
            l = n.n(f),
            p = n(5),
            y = n(0),
            h = n(2),
            m = n(17);

        function S(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function E(e) {
            return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function A() {
            return (A = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var T = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            O = 1;

        function I(f) {
            return A(new r.a(f.code), {
                getSpec: function() {
                    return Object.freeze(f)
                },
                registerSyncs: l,
                callBids: function(o, a, e, n) {
                    if (Array.isArray(o.bids)) {
                        var c = {},
                            u = [],
                            t = o.bids.filter(p);
                        if (0 !== t.length) {
                            var s = {};
                            t.forEach((function(e) {
                                (s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            }));
                            var r = f.buildRequests(t, o);
                            if (r && 0 !== r.length) {
                                Array.isArray(r) || (r = [r]);
                                var d = Object(y.delayExecution)(i, r.length);
                                r.forEach((function(i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("".concat(i.url).concat(function(e) {
                                                if (e) return "?".concat("object" === E(e) ? Object(y.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }(i.data)), {
                                                success: e,
                                                error: t
                                            }, void 0, A({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), A({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            Object(y.logWarn)("Skipping invalid request from ".concat(f.code, ". Request type ").concat(i.type, " must be GET or POST")), d()
                                    }

                                    function e(e, t) {
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        var n;
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, u.push(e);
                                        try {
                                            n = f.interpretResponse(e, i)
                                        } catch (e) {
                                            return Object(y.logError)("Bidder ".concat(f.code, " failed to interpret the server's response. Continuing without bids"), null, e), void d()
                                        }

                                        function r(e) {
                                            var t, n, r = s[e.requestId];
                                            if (r) {
                                                var i = A(Object(g.a)(b.a.STATUS.GOOD, r), e);
                                                t = r.adUnitCode, n = i, c[t] = !0, _(t, n, [o]) && a(t, n)
                                            } else Object(y.logWarn)("Bidder ".concat(f.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), d(n)
                                    }

                                    function t(e) {
                                        Object(y.logError)("Server call for ".concat(f.code, " failed: ").concat(e, ". Continuing without bids.")), d()
                                    }
                                }))
                            } else i()
                        } else i()
                    }

                    function i() {
                        e(), v.a.emit(b.a.EVENTS.BIDDER_DONE, o), l(u, o.gdprConsent)
                    }
                }
            });

            function l(e, t) {
                if (f.getUserSyncs) {
                    var n = i.config.getConfig("userSync.filterSettings"),
                        r = f.getUserSyncs({
                            iframeEnabled: !!(i.config.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(i.config.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                    r && (Array.isArray(r) || (r = [r]), r.forEach((function(e) {
                        o.a.registerSync(e.type, f.code, e.url)
                    })))
                }
            }

            function p(e) {
                return !!f.isBidRequestValid(e) || (Object(y.logWarn)("Invalid bid sent to bidder ".concat(f.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }

        function w(e, t) {
            if (!i.config.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter((function(e) {
                return Object(y.deepAccess)(e, "mediaTypes.video.context") === h.a
            })).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                }))
            })).reduce(y.flatten, []).filter(y.uniques).forEach((function(n) {
                var e = a.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(),
                        r = t.refreshInDays ? t.refreshInDays : O,
                        i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                        o = Object(y.getDataFromLocalStorage)(i);
                    (!o || Object(y.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                        success: function(e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(y.timestamp)(),
                                    mapping: e.mapping
                                };
                                Object(y.setDataInLocalStorage)(i, JSON.stringify(t))
                            } catch (e) {
                                Object(y.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                            }
                        },
                        error: function() {
                            Object(y.logError)("Failed to load ".concat(n, " bidder translation file"))
                        }
                    })
                }
            })), e.call(this, t)
        }

        function _(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t), T.every((function(e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            })) ? "native" !== t.mediaType || Object(c.f)(t, n) ? "video" !== t.mediaType || Object(u.c)(t, n) ? !("banner" === t.mediaType && !(function(e, t, n) {
                if ((t.width || 0 === t.width) && (t.height || 0 === t.height)) return !0;
                var r = Object(y.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = Object(y.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = S(o[0].split("x"), 2),
                    c = a[0],
                    u = a[1];
                return t.width = c, t.height = u, !0
            })(e, t, n)) || (Object(y.logError)(r("Banner bids require a width and height")), !1) : (Object(y.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(y.logError)(r("Native bid missing some required properties.")), !1) : (Object(y.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(y.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(y.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
        Object(m.a)("checkAdUnitSetup").before(w)
    },
    10: function(e, t, n) {
        n(82), e.exports = n(14).Array.find
    },
    11: function(e, t, n) {
        "use strict";

        function r(e) {
            return Object.keys(e).map((function(t) {
                return Array.isArray(e[t]) ? e[t].map((function(e) {
                    return "".concat(t, "[]=").concat(e)
                })).join("&") : "".concat(t, "=").concat(e[t])
            })).join("&")
        }
        t.b = r, t.c = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : (i = n.search || "", i ? i.replace(/^\?/, "").split("&").reduce((function(e, t) {
                    var n, r, i = t.split("="),
                        o = (r = 2, (function(e) {
                            if (Array.isArray(e)) return e
                        })(n = i) || (function(e, t) {
                            var n = [],
                                r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                i = !0, o = e
                            } finally {
                                try {
                                    r || null == c.return || c.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return n
                        })(n, r) || (function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        })()),
                        a = o[0],
                        c = o[1];
                    return /\[\]$/.test(a) ? (a = a.replace("[]", ""), e[a] = e[a] || [], e[a].push(c)) : e[a] = c || "", e
                }), {}) : {}),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            };
            var i
        }, t.a = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }
    },
    12: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url)
        }, t.b = function(e, t) {
            e.render(t)
        };
        var f = n(47),
            l = n(0),
            r = n(10),
            p = n.n(r);

        function i(e) {
            var t, n, r, i = this,
                o = e.url,
                a = e.config,
                c = e.id,
                u = e.callback,
                s = e.loaded,
                d = e.adUnitCode;
            this.url = o, this.config = a, this.handlers = {}, this.id = c, this.loaded = s, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? i.loaded ? e.call() : i.cmd.push(e) : l.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = u || function() {
                i.loaded = !0, i.process()
            }, t = d, n = pbjs.adUnits, (r = p()(n, (function(e) {
                return e.code === t
            }))) && r.renderer && r.renderer.url && r.renderer.render ? l.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d)) : Object(f.b)(o, this.callback, !0)
        }
        i.install = function(e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }, i.prototype.getConfig = function() {
            return this.config
        }, i.prototype.setRender = function(e) {
            this.render = e
        }, i.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, i.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), l.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n))
        }, i.prototype.process = function() {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                l.logError("Error processing Renderer command: ", e)
            }
        }
    },
    129: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(40)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            findIndex: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)(o)
    },
    13: function(e, t, n) {
        var b = n(18),
            v = n(14),
            y = n(23),
            h = n(20),
            m = n(25),
            S = "prototype",
            E = function(e, t, n) {
                var r, i, o, a = e & E.F,
                    c = e & E.G,
                    u = e & E.S,
                    s = e & E.P,
                    d = e & E.B,
                    f = e & E.W,
                    l = c ? v : v[t] || (v[t] = {}),
                    p = l[S],
                    g = c ? b : u ? b[t] : (b[t] || {})[S];
                for (r in c && (n = t), n)(i = !a && g && void 0 !== g[r]) && m(l, r) || (o = i ? g[r] : n[r], l[r] = c && "function" != typeof g[r] ? n[r] : d && i ? y(o, b) : f && g[r] == o ? (function(r) {
                    var e = function(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e, t)
                            }
                            return new r(e, t, n)
                        }
                        return r.apply(this, arguments)
                    };
                    return e[S] = r[S], e
                })(o) : s && "function" == typeof o ? y(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & E.R && p && !p[r] && h(p, r, o)))
            };
        E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128, e.exports = E
    },
    131: function(e, t, n) {
        "use strict";
        t.a = function() {
            addEventListener("message", a, !1)
        };
        var r = n(9),
            b = n.n(r),
            v = n(26),
            i = n(4),
            y = (n.n(i), n(0)),
            h = n(37),
            o = n(10),
            m = n.n(o),
            S = n(12),
            E = i.EVENTS.BID_WON;

        function a(e) {
            var t, n, r, i, o, a, c, u, s, d, f = e.message ? "message" : "data",
                l = {};
            try {
                l = JSON.parse(e[f])
            } catch (e) {
                return
            }
            if (l && l.adId) {
                var p = m()(h.a.getBidsReceived(), (function(e) {
                    return e.adId === l.adId
                }));
                if ("Prebid Request" === l.message && (t = p, n = l.adServerDomain, r = e.source, i = t.adId, o = t.ad, a = t.adUrl, c = t.width, u = t.height, s = t.renderer, d = t.cpm, Object(S.c)(s) ? Object(S.b)(s, t) : i && (function(e) {
                        var c = e.adUnitCode,
                            r = e.width,
                            i = e.height;

                        function o(e) {
                            var t, n, r, i, o = (t = c, window.googletag ? (i = t, m()(window.googletag.pubads().getSlots().filter(Object(y.isSlotMatchingAdUnitCode)(i)), (function(e) {
                                    return e
                                })).getSlotElementId()) : window.apntag ? (n = t, (r = window.apntag.getTag(n)) && r.targetId) : t),
                                a = document.getElementById(o);
                            return a && a.querySelector(e)
                        } ["div", "iframe"].forEach((function(e) {
                            var t = o(e);
                            if (t) {
                                var n = t.style;
                                n.width = r + "px", n.height = i + "px"
                            } else Object(y.logWarn)("Unable to locate matching page element for adUnitCode ".concat(c, ".  Can't resize it to ad's dimensions.  Please review setup."))
                        }))
                    }(t), r.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: Object(y.replaceAuctionPrice)(o, d),
                        adUrl: Object(y.replaceAuctionPrice)(a, d),
                        adId: i,
                        width: c,
                        height: u
                    }), n)), h.a.addWinningBid(p), b.a.emit(E, p)), "Prebid Native" === l.message) {
                    if ("assetRequest" === l.action) {
                        var g = Object(v.c)(l, p);
                        return void e.source.postMessage(JSON.stringify(g), e.origin)
                    }
                    if ("click" === Object(v.b)(l, p)) return;
                    h.a.addWinningBid(p), b.a.emit(E, p)
                }
            }
        }
    },
    132: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && f(t, !0)
        };
        var r = n(3),
            o = n(0),
            i = n(36);

        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, u = "pbjs:debugging";

        function s(e) {
            Object(o.logMessage)("DEBUG: " + e)
        }

        function d() {
            i.c.getHooks({
                hook: c
            }).remove()
        }

        function f(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            r.config.setConfig({
                debug: !0
            }), s("bidder overrides enabled".concat(t ? " from session" : "")), d(), c = function(e, r, i) {
                if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(i.bidderCode)) return t = "bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"), void Object(o.logWarn)("DEBUG: " + t);
                var t;
                Array.isArray(this.bids) && this.bids.forEach((function(n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = a({}, i), Object.keys(n).filter((function(e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e)
                    })).forEach((function(e) {
                        var t = n[e];
                        s("bidder overrides changed '".concat(r, "/").concat(i.bidderCode, "' bid.").concat(e, " from '").concat(i[e], "' to '").concat(t, "'")), i[e] = t
                    })))
                }));
                e(r, i)
            }.bind(e), i.c.before(c, 5)
        }

        function l(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                f(e)
            } else {
                d(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        r.config.getConfig("debugging", (function(e) {
            return l(e.debugging)
        }))
    },
    133: function(e, t, n) {
        n(134), n(67), n(143), n(145), n(149), n(152), n(154), e.exports = n(14).Set
    },
    134: function(e, t) {},
    135: function(e, t, n) {
        var u = n(42),
            s = n(32);
        e.exports = function(c) {
            return function(e, t) {
                var n, r, i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
    },
    136: function(e, t, n) {
        e.exports = n(20)
    },
    137: function(e, t, n) {
        "use strict";
        var r = n(68),
            i = n(39),
            o = n(50),
            a = {};
        n(20)(a, n(15)("iterator"), (function() {
            return this
        })), e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    },
    138: function(e, t, n) {
        var a = n(19),
            c = n(24),
            u = n(139);
        e.exports = n(21) ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    139: function(e, t, n) {
        var r = n(140),
            i = n(69);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    },
    14: function(e, t) {
        var n = e.exports = {
            version: "2.6.5"
        };
        "number" == typeof __e && (__e = n)
    },
    140: function(e, t, n) {
        var a = n(25),
            c = n(44),
            u = n(58)(!1),
            s = n(49)("IE_PROTO");
        e.exports = function(e, t) {
            var n, r = c(e),
                i = 0,
                o = [];
            for (n in r) n != s && a(r, n) && o.push(n);
            for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    },
    141: function(e, t, n) {
        var r = n(18).document;
        e.exports = r && r.documentElement
    },
    142: function(e, t, n) {
        var r = n(25),
            i = n(41),
            o = n(49)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    143: function(e, t, n) {
        n(144);
        for (var r = n(18), i = n(20), o = n(28), a = n(15)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
            var s = c[u],
                d = r[s],
                f = d && d.prototype;
            f && !f[a] && i(f, a, s), o[s] = o.Array
        }
    },
    144: function(e, t, n) {
        "use strict";
        var r = n(34),
            i = n(70),
            o = n(28),
            a = n(44);
        e.exports = n(48)(Array, "Array", (function(e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }), (function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    },
    145: function(e, t, n) {
        "use strict";
        var r = n(146),
            i = n(78);
        e.exports = n(148)("Set", (function(e) {
            return function() {
                return e(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }), {
            add: function(e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, r)
    },
    146: function(e, t, n) {
        "use strict";
        var a = n(19).f,
            c = n(68),
            u = n(71),
            s = n(23),
            d = n(72),
            f = n(38),
            r = n(48),
            i = n(70),
            o = n(147),
            l = n(21),
            p = n(77).fastKey,
            g = n(78),
            b = l ? "_s" : "size",
            v = function(e, t) {
                var n, r = p(t);
                if ("F" !== r) return e._i[r];
                for (n = e._f; n; n = n.n)
                    if (n.k == t) return n
            };
        e.exports = {
            getConstructor: function(e, o, n, r) {
                var i = e((function(e, t) {
                    d(e, i, o, "_i"), e._t = o, e._i = c(null), e._f = void 0, e._l = void 0, e[b] = 0, null != t && f(t, n, e[r], e)
                }));
                return u(i.prototype, {
                    clear: function() {
                        for (var e = g(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                        e._f = e._l = void 0, e[b] = 0
                    },
                    delete: function(e) {
                        var t = g(this, o),
                            n = v(t, e);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[b]--
                        }
                        return !!n
                    },
                    forEach: function(e) {
                        g(this, o);
                        for (var t, n = s(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                            for (n(t.v, t.k, this); t && t.r;) t = t.p
                    },
                    has: function(e) {
                        return !!v(g(this, o), e)
                    }
                }), l && a(i.prototype, "size", {
                    get: function() {
                        return g(this, o)[b]
                    }
                }), i
            },
            def: function(e, t, n) {
                var r, i, o = v(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = p(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[b]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: v,
            setStrong: function(e, n, t) {
                r(e, n, (function(e, t) {
                    this._t = g(e, n), this._k = t, this._l = void 0
                }), (function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = void 0, i(1))
                }), t ? "entries" : "values", !t, !0), o(n)
            }
        }
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(18),
            i = n(14),
            o = n(19),
            a = n(21),
            c = n(15)("species");
        e.exports = function(e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a && t && !t[c] && o.f(t, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    148: function(e, t, n) {
        "use strict";
        var f = n(18),
            l = n(13),
            p = n(77),
            g = n(30),
            b = n(20),
            v = n(71),
            y = n(38),
            h = n(72),
            m = n(16),
            S = n(50),
            E = n(19).f,
            A = n(40)(0),
            T = n(21);
        e.exports = function(n, e, t, r, i, o) {
            var a = f[n],
                c = a,
                u = i ? "set" : "add",
                s = c && c.prototype,
                d = {};
            return T && "function" == typeof c && (o || s.forEach && !g((function() {
                (new c).entries().next()
            }))) ? (c = e((function(e, t) {
                h(e, c, n, "_c"), e._c = new a, null != t && y(t, i, e[u], e)
            })), A("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), (function(r) {
                var i = "add" == r || "set" == r;
                r in s && (!o || "clear" != r) && b(c.prototype, r, (function(e, t) {
                    if (h(this, c, r), !i && o && !m(e)) return "get" == r && void 0;
                    var n = this._c[r](0 === e ? 0 : e, t);
                    return i ? this : n
                }))
            })), o || E(c.prototype, "size", {
                get: function() {
                    return this._c.size
                }
            })) : (c = r.getConstructor(e, n, i, u), v(c.prototype, t), p.NEED = !0), S(c, n), d[n] = c, l(l.G + l.W + l.F, d), o || r.setStrong(c, n, i), c
        }
    },
    149: function(e, t, n) {
        var r = n(13);
        r(r.P + r.R, "Set", {
            toJSON: n(150)("Set")
        })
    },
    15: function(e, t, n) {
        var r = n(56)("wks"),
            i = n(43),
            o = n(18).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    150: function(e, t, n) {
        var r = n(76),
            i = n(151);
        e.exports = function(e) {
            return function() {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this)
            }
        }
    },
    151: function(e, t, n) {
        var r = n(38);
        e.exports = function(e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n
        }
    },
    152: function(e, t, n) {
        n(153)("Set")
    },
    153: function(e, t, n) {
        "use strict";
        var r = n(13);
        e.exports = function(e) {
            r(r.S, e, {
                of: function() {
                    for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                    return new this(t)
                }
            })
        }
    },
    154: function(e, t, n) {
        n(155)("Set")
    },
    155: function(e, t, n) {
        "use strict";
        var r = n(13),
            a = n(52),
            c = n(23),
            u = n(38);
        e.exports = function(e) {
            r(r.S, e, {
                from: function(e) {
                    var t, n, r, i, o = arguments[1];
                    return a(this), (t = void 0 !== o) && a(o), null == e ? new this : (n = [], t ? (r = 0, i = c(o, arguments[2], 2), u(e, !1, (function(e) {
                        n.push(i(e, r++))
                    }))) : u(e, !1, n.push, n), new this(n))
                }
            })
        }
    },
    156: function(e, t, n) {
        n(67), n(157), e.exports = n(14).Array.from
    },
    157: function(e, t, n) {
        "use strict";
        var l = n(23),
            r = n(13),
            p = n(41),
            g = n(73),
            b = n(74),
            v = n(33),
            y = n(158),
            h = n(75);
        r(r.S + r.F * !n(159)((function(e) {
            Array.from(e)
        })), "Array", {
            from: function(e) {
                var t, n, r, i, o = p(e),
                    a = "function" == typeof this ? this : Array,
                    c = arguments.length,
                    u = 1 < c ? arguments[1] : void 0,
                    s = void 0 !== u,
                    d = 0,
                    f = h(o);
                if (s && (u = l(u, 2 < c ? arguments[2] : void 0, 2)), null == f || a == Array && b(f))
                    for (n = new a(t = v(o.length)); d < t; d++) y(n, d, s ? u(o[d], d) : o[d]);
                else
                    for (i = f.call(o), n = new a; !(r = i.next()).done; d++) y(n, d, s ? g(i, u, [r.value, d], !0) : r.value);
                return n.length = d, n
            }
        })
    },
    158: function(e, t, n) {
        "use strict";
        var r = n(19),
            i = n(39);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n
        }
    },
    159: function(e, t, n) {
        var o = n(15)("iterator"),
            a = !1;
        try {
            var r = [7][o]();
            r.return = function() {
                a = !0
            }, Array.from(r, (function() {
                throw 2
            }))
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var r = [7],
                    i = r[o]();
                i.next = function() {
                    return {
                        done: n = !0
                    }
                }, r[o] = function() {
                    return i
                }, e(r)
            } catch (e) {}
            return n
        }
    },
    16: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    17: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        })), n.d(t, "a", (function() {
            return a
        })), t.c = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n)
        };
        var r = n(89),
            i = n.n(r),
            o = i()({
                ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
            }),
            a = o.get
    },
    18: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    19: function(e, t, n) {
        var r = n(24),
            i = n(83),
            o = n(84),
            a = Object.defineProperty;
        t.f = n(21) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return r
        })), n.d(t, "d", (function() {
            return i
        })), n.d(t, "b", (function() {
            return o
        })), n.d(t, "a", (function() {
            return a
        }));
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod"
    },
    20: function(e, t, n) {
        var r = n(19),
            i = n(39);
        e.exports = n(21) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    21: function(e, t, n) {
        e.exports = !n(30)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    22: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new r(e, t)
        };
        var i = n(0);

        function r(e, t) {
            var n = t && t.src || "client",
                r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = (function() {
                switch (r) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            })(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function() {
                return r
            }, this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
    },
    23: function(e, t, n) {
        var o = n(52);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function() {
                return r.apply(i, arguments)
            }
        }
    },
    24: function(e, t, n) {
        var r = n(16);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    25: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    26: function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return o
        })), n.d(t, "a", (function() {
            return s
        })), t.g = function(e) {
            if (e && e.type && (t = e.type, t && c()(Object.keys(d), t) || (Object(a.logError)("".concat(t, " nativeParam is not supported")), 0))) return d[e.type];
            var t;
            return e
        }, t.f = function(t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter((function(e) {
                    return r[e].required
                })),
                o = Object.keys(t.native).filter((function(e) {
                    return t.native[e]
                }));
            return i.every((function(e) {
                return c()(o, e)
            }))
        }, t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel), e.action
        }, t.d = function(r, i) {
            var o = {};
            return Object.keys(r.native).forEach((function(e) {
                var t = u.NATIVE_KEYS[e],
                    n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId)), t && n && (o[t] = n)
            })), o
        }, t.c = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach((function(e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                    n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                })
            })), i
        };
        var a = n(0),
            r = n(7),
            c = n.n(r);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var u = n(4),
            o = [],
            s = Object.keys(u.NATIVE_KEYS).map((function(e) {
                return u.NATIVE_KEYS[e]
            })),
            d = {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            };

        function f(e) {
            return "object" === i(e) && e.url ? e.url : e
        }
    },
    27: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }));
        var s = n(0),
            i = n(3),
            r = n(7),
            d = n.n(r);

        function f(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        i.config.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var o = !s.isSafariBrowser() && s.cookiesAreEnabled(),
            a = (function(e) {
                var t = {},
                    o = {
                        image: [],
                        iframe: []
                    },
                    n = !1,
                    a = {},
                    c = {
                        image: !1,
                        iframe: !1
                    },
                    u = e.config;

                function r() {
                    if (u.syncEnabled && e.browserSupportsCookies && (u.enableOverride || !n)) {
                        try {
                            (u.pixelEnabled || c.image) && s.shuffle(o.image).forEach((function(e) {
                                var t = f(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), s.triggerPixel(r)
                            })), (u.iframeEnabled || c.iframe) && s.shuffle(o.iframe).forEach((function(e) {
                                var t = f(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s.logMessage("Invoking iframe user sync for bidder: ".concat(n)), s.insertUserSyncIframe(r)
                            }))
                        } catch (e) {
                            return s.logError("Error firing user syncs", e)
                        }
                        o = {
                            image: [],
                            iframe: []
                        }, n = !0
                    }
                }
                return i.config.getConfig("userSync", (function(e) {
                    u = l(u, e.userSync)
                })), t.registerSync = function(e, t, n) {
                    if (!u.syncEnabled || !s.isArray(o[e])) return s.logWarn('User sync type "'.concat(e, '" not supported'));
                    if (!t) return s.logWarn("Bidder is required for registering sync");
                    if (0 !== u.syncsPerBidder && Number(a[t]) >= u.syncsPerBidder) return s.logWarn('Number of user syncs exceeded for "'.concat(t, '"'));
                    if (u.filterSettings) {
                        if (function(e, t) {
                                var n = u.filterSettings;
                                if (function(e, t) {
                                        if (e.all && e[t]) return s.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                                        var n = e.all ? e.all : e[t],
                                            r = e.all ? "all" : t;
                                        if (!n) return !1;
                                        var i = n.filter,
                                            o = n.bidders;
                                        return i && "include" !== i && "exclude" !== i ? (s.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1) : !!("*" === o || Array.isArray(o) && 0 < o.length && o.every((function(e) {
                                            return s.isStr(e) && "*" !== e
                                        }))) || (s.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                                    }(n, e)) {
                                    c[e] = !0;
                                    var r = n.all ? n.all : n[e],
                                        i = "*" === r.bidders ? [t] : r.bidders,
                                        o = r.filter || "include",
                                        a = {
                                            include: function(e, t) {
                                                return !d()(e, t)
                                            },
                                            exclude: function(e, t) {
                                                return d()(e, t)
                                            }
                                        };
                                    return a[o](i, t)
                                }
                                return !1
                            }(e, t)) return s.logWarn("Bidder '".concat(t, "' is not permitted to register their userSync ").concat(e, " pixels as per filterSettings config."))
                    } else if (u.enabledBidders && u.enabledBidders.length && u.enabledBidders.indexOf(t) < 0) return s.logWarn('Bidder "'.concat(t, '" not permitted to register their userSync pixels.'));
                    var r, i;
                    o[e].push([t, n]), (r = a)[i = t] ? r[i] += 1 : r[i] = 1, a = r
                }, t.syncUsers = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (e) return setTimeout(r, Number(e));
                    r()
                }, t.triggerUserSyncs = function() {
                    u.enableOverride && t.syncUsers()
                }, t
            })({
                config: i.config.getConfig("userSync"),
                browserSupportsCookies: o
            })
    },
    28: function(e, t) {
        e.exports = {}
    },
    29: function(iy, jy) {
        var ky;
        ky = (function() {
            return this
        })();
        try {
            ky = ky || Function("return this")() || eval("this")
        } catch (e) {
            "object" == typeof window && (ky = window)
        }
        iy.exports = ky
    },
    3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "RANDOM", (function() {
            return a
        })), t.newConfig = c, n.d(t, "config", (function() {
            return u
        }));
        var s = n(51),
            r = n(10),
            d = n.n(r),
            i = n(7),
            o = n.n(i),
            f = n(17);

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var g = n(0),
            b = !1,
            v = 3e3,
            y = window.location.origin,
            h = !0,
            m = !1,
            S = !1,
            E = 400,
            a = "random",
            A = {};
        A[a] = !0, A.fixed = !0;
        var T = a,
            O = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            I = "*";

        function c() {
            var a, c, r = [];

            function e() {
                a = {};
                var n = {
                    _debug: b,
                    get debug() {
                        return this._debug
                    },
                    set debug(e) {
                        this._debug = e
                    },
                    _bidderTimeout: v,
                    get bidderTimeout() {
                        return this._bidderTimeout
                    },
                    set bidderTimeout(e) {
                        this._bidderTimeout = e
                    },
                    _publisherDomain: y,
                    get publisherDomain() {
                        return this._publisherDomain
                    },
                    set publisherDomain(e) {
                        this._publisherDomain = e
                    },
                    _priceGranularity: O.MEDIUM,
                    set priceGranularity(e) {
                        o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : O.MEDIUM : "object" === p(e) && (this._customPriceBucket = e, this._priceGranularity = O.CUSTOM, g.logMessage("Using custom price granularity")))
                    },
                    get priceGranularity() {
                        return this._priceGranularity
                    },
                    _customPriceBucket: {},
                    get customPriceBucket() {
                        return this._customPriceBucket
                    },
                    _mediaTypePriceGranularity: {},
                    get mediaTypePriceGranularity() {
                        return this._mediaTypePriceGranularity
                    },
                    set mediaTypePriceGranularity(n) {
                        var r = this;
                        this._mediaTypePriceGranularity = Object.keys(n).reduce((function(e, t) {
                            return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === p(n) && (e[t] = n[t], g.logMessage("Using custom price granularity for ".concat(t))) : g.logWarn("Invalid price granularity for media type: ".concat(t)), e
                        }), {})
                    },
                    _sendAllBids: h,
                    get enableSendAllBids() {
                        return this._sendAllBids
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e
                    },
                    _useBidCache: S,
                    get useBidCache() {
                        return this._useBidCache
                    },
                    set useBidCache(e) {
                        this._useBidCache = e
                    },
                    _bidderSequence: T,
                    get bidderSequence() {
                        return this._bidderSequence
                    },
                    set bidderSequence(e) {
                        A[e] ? this._bidderSequence = e : g.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                    },
                    _timeoutBuffer: E,
                    get timeoutBuffer() {
                        return this._timeoutBuffer
                    },
                    set timeoutBuffer(e) {
                        this._timeoutBuffer = e
                    },
                    _disableAjaxTimeout: m,
                    get disableAjaxTimeout() {
                        return this._disableAjaxTimeout
                    },
                    set disableAjaxTimeout(e) {
                        this._disableAjaxTimeout = e
                    }
                };

                function i(t) {
                    return d()(Object.keys(O), (function(e) {
                        return t === O[e]
                    }))
                }

                function o(e) {
                    if (!e) return g.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                    if ("string" == typeof e) i(e) || g.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if ("object" === p(e) && !Object(s.b)(e)) return g.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                    return !0
                }
                c && u(Object.keys(c).reduce((function(e, t) {
                    return c[t] !== n[t] && (e[t] = n[t] || {}), e
                }), {})), c = n
            }
            var t = Object(f.b)("async", (function(n) {
                if ("object" === p(n)) {
                    var e = Object.keys(n),
                        r = {};
                    e.forEach((function(e) {
                        var t = n[e];
                        "object" === p(a[e]) && "object" === p(t) && (t = l({}, a[e], t)), r[e] = c[e] = t
                    })), u(r)
                } else g.logError("setConfig options must be an object")
            }));

            function u(i) {
                var t = Object.keys(i);
                r.filter((function(e) {
                    return o()(t, e.topic)
                })).forEach((function(e) {
                    var t, n, r;
                    e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r, t))
                })), r.filter((function(e) {
                    return e.topic === I
                })).forEach((function(e) {
                    return e.callback(i)
                }))
            }
            return e(), {
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0];
                        return e ? g.deepAccess(c, e) : c
                    }
                    return function(e, t) {
                        var n = t;
                        return "string" != typeof e && (n = e, e = I), "function" == typeof n ? (r.push({
                            topic: e,
                            callback: n
                        }), function() {
                            r.splice(r.indexOf(t), 1)
                        }) : void g.logError("listener must be a function")
                    }.apply(void 0, arguments)
                },
                setConfig: t,
                setDefaults: function(e) {
                    "object" === p(a) ? (l(a, e), l(c, e)) : g.logError("defaults must be an object")
                },
                resetConfig: e
            }
        }
        var u = c()
    },
    30: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    31: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    32: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    33: function(e, t, n) {
        var r = n(42),
            i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    34: function(e, t) {
        e.exports = function() {}
    },
    35: function(e, t, n) {
        n(129), e.exports = n(14).Array.findIndex
    },
    36: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return R
        })), n.d(t, "a", (function() {
            return D
        })), t.h = function(e) {
            var t, f, l, p, g = e.adUnits,
                n = e.adUnitCodes,
                r = e.callback,
                i = e.cbTimeout,
                o = e.labels,
                u = g,
                s = o,
                b = n,
                v = [],
                y = [],
                a = [],
                h = _.generateUUID(),
                m = r,
                S = i,
                c = [];

            function E() {
                return {
                    auctionId: h,
                    timestamp: t,
                    auctionEnd: f,
                    auctionStatus: l,
                    adUnits: u,
                    adUnitCodes: b,
                    labels: s,
                    bidderRequests: v,
                    noBids: a,
                    bidsReceived: y,
                    winningBids: c,
                    timeout: S
                }
            }

            function d(e, t) {
                if (t && clearTimeout(p), null != m) {
                    var n = [];
                    e && (_.logMessage("Auction ".concat(h, " timedOut")), c = y, u = (a = v).filter((function(e) {
                        return !e.doneCbCallCount
                    })).map((function(e) {
                        return e.bidderCode
                    })).filter(T.uniques), s = c.map((function(e) {
                        return e.bidder
                    })).filter(T.uniques), d = u.filter((function(e) {
                        return !I()(s, e)
                    })), (n = a.map((function(e) {
                        return (e.bids || []).filter((function(e) {
                            return I()(d, e.bidder)
                        }))
                    })).reduce(T.flatten, []).map((function(e) {
                        return {
                            bidId: e.bidId,
                            bidder: e.bidder,
                            adUnitCode: e.adUnitCode,
                            auctionId: e.auctionId
                        }
                    }))).length && j.emit(B.EVENTS.BID_TIMEOUT, n));
                    try {
                        l = D, f = Date.now(), j.emit(B.EVENTS.AUCTION_END, E());
                        var r = b,
                            i = y.filter(_.bind.call(T.adUnitsFilter, this, r)).reduce(M, {});
                        m.apply(pbjs, [i, e])
                    } catch (e) {
                        _.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        n.length && C.callTimedOutBidders(g, n, S);
                        var o = O.config.getConfig("userSync") || {};
                        o.enableOverride || w(o.syncDelay)
                    }
                    m = null
                }
                var a, c, u, s, d
            }

            function A() {
                _.logInfo("Bids Received for Auction with id: ".concat(h), y), l = D, d(!1, !0)
            }
            return {
                addBidReceived: function(e) {
                    y = y.concat(e)
                },
                addNoBid: function(e) {
                    a = a.concat(e)
                },
                executeCallback: d,
                callBids: function() {
                    var n = this;
                    l = U, t = Date.now();
                    var i = C.makeBidRequests(u, t, h, S, s);
                    _.logInfo("Bids Requested for Auction with id: ".concat(h), i), i.forEach((function(e) {
                        var t;
                        t = e, v = v.concat(t)
                    }));
                    var o = {};
                    if (i.length < 1) _.logWarn("No valid bid requests returned for auction"), A();
                    else {
                        var e = {
                            bidRequests: i,
                            run: function() {
                                var e, t;
                                e = d.bind(null, !0), t = setTimeout(e, S), p = t, l = R, j.emit(B.EVENTS.AUCTION_INIT, E());
                                var r = q(A, n);
                                C.callBids(u, i, (function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    G.apply({
                                        dispatch: r.addBidResponse,
                                        bidderRequest: this
                                    }, t)
                                }), r.adapterDone, {
                                    request: function(e, t) {
                                        c(k, t), c(o, e), x[e] || (x[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < o[e] && (x[e].SRA = !1)
                                    },
                                    done: function(e) {
                                        k[e]--, P[0] && a(P[0]) && P.shift()
                                    }
                                }, S)
                            }
                        };
                        a(e) || (_.logWarn("queueing auction due to limited endpoint capacity"), P.push(e))
                    }

                    function a(e) {
                        var r = !0,
                            i = O.config.getConfig("maxRequestsPerOrigin") || N;
                        return e.bidRequests.some((function(e) {
                            var t = 1,
                                n = void 0 !== e.src && e.src === B.S2S.SRC ? "s2s" : e.bidderCode;
                            return x[n] && (!1 === x[n].SRA && (t = Math.min(e.bids.length, i)), k[x[n].origin] + t > i && (r = !1)), !r
                        })), r && e.run(), r
                    }

                    function c(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                addWinningBid: function(e) {
                    c = c.concat(e), C.callBidWonBidder(e.bidder, e, g)
                },
                setBidTargeting: function(e) {
                    C.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function() {
                    return c
                },
                getTimeout: function() {
                    return S
                },
                getAuctionId: function() {
                    return h
                },
                getAuctionStatus: function() {
                    return l
                },
                getAdUnits: function() {
                    return u
                },
                getAdUnitCodes: function() {
                    return b
                },
                getBidRequests: function() {
                    return v
                },
                getBidsReceived: function() {
                    return y
                },
                getNoBids: function() {
                    return a
                }
            }
        }, n.d(t, "c", (function() {
            return G
        })), t.f = d, t.d = v, n.d(t, "e", (function() {
            return h
        })), t.g = S;
        var T = n(0),
            f = n(51),
            a = n(26),
            o = n(63),
            l = n(12),
            O = n(3),
            r = n(27),
            i = n(17),
            c = n(10),
            p = n.n(c),
            u = n(7),
            I = n.n(u),
            s = n(46);

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function b() {
            return (b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var w = r.a.syncUsers,
            _ = n(0),
            C = n(8).default,
            j = n(9),
            B = n(4),
            U = "started",
            R = "inProgress",
            D = "completed";
        j.on(B.EVENTS.BID_ADJUSTMENT, (function(e) {
            !(function(e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[B.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[B.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[B.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, b({}, e))
                } catch (e) {
                    _.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            })(e)
        }));
        var N = 4,
            k = {},
            x = {},
            P = [];
        var G = Object(i.b)("async", (function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }), "addBidResponse");

        function q(t, o) {
            var a = 0,
                n = false,
                r = new Set,
                c = {};

            function u() {
                a--;
                if (n && a === 0) {
                    t()
                }
            }

            function e(e, t) {
                var n = this;
                c[t.requestId] = true, a++;
                var r = o.getAuctionId(),
                    i = m({
                        adUnitCode: e,
                        bid: t,
                        bidderRequest: n,
                        auctionId: r
                    });
                if (i.mediaType === "video") {
                    y(o, i, n, u)
                } else {
                    v(o, i);
                    u()
                }
            }

            function i() {
                var e = this;
                if (r.add(this), n = o.getBidRequests().every((function(e) {
                        return r.has(e)
                    })), this.bids.forEach((function(e) {
                        c[e.bidId] || (o.addNoBid(e), j.emit(B.EVENTS.NO_BID, e))
                    })), n && 0 === a) {
                    t()
                }
            }
            return {
                addBidResponse: e,
                adapterDone: i
            }
        }

        function d(e, t) {
            t.timeToRespond > e.getTimeout() + O.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function v(e, t) {
            var n = e.getBidRequests(),
                r = p()(n, (function(e) {
                    return e.bidderCode === t.bidderCode
                }));
            !(function(t, e) {
                var n;
                if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                    var r = p()(e.bids, (function(e) {
                        return e.adUnitCode === t.adUnitCode
                    }));
                    n = (function(e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = pbjs.bidderSettings;
                        if (i) {
                            var o = S(t.mediaType);
                            E(r, o, t), e && i[e] && i[e][B.JSON_MAPPING.ADSERVER_TARGETING] && (E(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)
                        }
                        t.native && (r = b({}, r, Object(a.d)(t, n)));
                        return r
                    })(t.bidderCode, t, r)
                }
                t.adserverTargeting = b(t.adserverTargeting || {}, n)
            })(t, r), j.emit(B.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), d(e, t)
        }

        function y(e, t, n, r) {
            var i = true,
                o = Object(T["getBidRequest"])(t.requestId, [n]),
                a = o && Object(T["deepAccess"])(o, "mediaTypes.video"),
                c = a && Object(T["deepAccess"])(a, "context");
            if (O["config"].getConfig("cache.url") && c !== s["a"]) {
                if (!t.videoCacheKey) {
                    i = false;
                    h(e, t, r, o)
                } else if (!t.vastUrl) {
                    _.logError("videoCacheKey specified but not required vastUrl for video bid");
                    i = false
                }
            }
            if (i) {
                v(e, t);
                r()
            }
        }
        var h = Object(i.b)("async", (function(n, r, i, e) {
            Object(o.b)([r], (function(e, t) {
                e ? (_.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), d(n, r)) : "" === t[0].uuid ? (_.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), d(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), v(n, r), i())
            }))
        }), "callPrebidCache");

        function m(e) {
            var t = e.adUnitCode,
                n = e.bid,
                r = e.bidderRequest,
                i = e.auctionId,
                o = r.start,
                a = b({}, n, {
                    auctionId: i,
                    responseTimestamp: Object(T["timestamp"])(),
                    requestTimestamp: o,
                    cpm: parseFloat(n.cpm) || 0,
                    bidder: n.bidderCode,
                    adUnitCode: t
                });
            a.timeToRespond = a.responseTimestamp - a.requestTimestamp, j.emit(B.EVENTS.BID_ADJUSTMENT, a);
            var c = r.bids && p()(r.bids, (function(e) {
                    return e.adUnitCode == t
                })),
                u = c && c.renderer;
            if (u && u.url) {
                a.renderer = l["a"].install({
                    url: u.url
                });
                a.renderer.setRender(u.render)
            }
            var s = O["config"].getConfig("mediaTypePriceGranularity.".concat(n.mediaType)),
                d = Object(f["a"])(a.cpm, g(s) === "object" ? s : O["config"].getConfig("customPriceBucket"), O["config"].getConfig("currency.granularityMultiplier"));
            return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, a.pbCg = d.custom, a
        }

        function S(e) {
            var t = O.config.getConfig("mediaTypePriceGranularity.".concat(e)),
                n = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : O.config.getConfig("priceGranularity"),
                r = pbjs.bidderSettings;
            return r[B.JSON_MAPPING.BD_SETTING_STANDARD] || (r[B.JSON_MAPPING.BD_SETTING_STANDARD] = {}), r[B.JSON_MAPPING.BD_SETTING_STANDARD][B.JSON_MAPPING.ADSERVER_TARGETING] || (r[B.JSON_MAPPING.BD_SETTING_STANDARD][B.JSON_MAPPING.ADSERVER_TARGETING] = [{
                key: B.TARGETING_KEYS.BIDDER,
                val: function(e) {
                    return e.bidderCode
                }
            }, {
                key: B.TARGETING_KEYS.AD_ID,
                val: function(e) {
                    return e.adId
                }
            }, {
                key: B.TARGETING_KEYS.PRICE_BUCKET,
                val: function(e) {
                    return n === B.GRANULARITY_OPTIONS.AUTO ? e.pbAg : n === B.GRANULARITY_OPTIONS.DENSE ? e.pbDg : n === B.GRANULARITY_OPTIONS.LOW ? e.pbLg : n === B.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : n === B.GRANULARITY_OPTIONS.HIGH ? e.pbHg : n === B.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            }, {
                key: B.TARGETING_KEYS.SIZE,
                val: function(e) {
                    return e.size
                }
            }, {
                key: B.TARGETING_KEYS.DEAL,
                val: function(e) {
                    return e.dealId
                }
            }, {
                key: B.TARGETING_KEYS.SOURCE,
                val: function(e) {
                    return e.source
                }
            }, {
                key: B.TARGETING_KEYS.FORMAT,
                val: function(e) {
                    return e.mediaType
                }
            }], "video" === e && [B.TARGETING_KEYS.UUID, B.TARGETING_KEYS.CACHE_ID].forEach((function(e) {
                r[B.JSON_MAPPING.BD_SETTING_STANDARD][B.JSON_MAPPING.ADSERVER_TARGETING].push({
                    key: e,
                    val: function(e) {
                        return e.videoCacheKey
                    }
                })
            }))), r[B.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function E(r, i, o) {
            var e = i[B.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), _._each(e, (function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && _.logWarn("The key: " + t + " is getting ovewritten"), _.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    _.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== B.TARGETING_KEYS.DEAL || !_.isEmptyStr(n) && null != n ? r[t] = n : _.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            })), r
        }

        function M(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    37: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }));
        var r = n(0),
            u = n(36),
            i = n(10),
            o = n.n(i),
            a = n(4);
        var s, c, d = (s = [], (c = {}).addWinningBid = function(t) {
            var e = o()(s, (function(e) {
                return e.getAuctionId() === t.auctionId
            }));
            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
        }, c.getAllWinningBids = function() {
            return s.map((function(e) {
                return e.getWinningBids()
            })).reduce(r.flatten, [])
        }, c.getBidsRequested = function() {
            return s.map((function(e) {
                return e.getBidRequests()
            })).reduce(r.flatten, [])
        }, c.getNoBids = function() {
            return s.map((function(e) {
                return e.getNoBids()
            })).reduce(r.flatten, [])
        }, c.getBidsReceived = function() {
            return s.map((function(e) {
                if (e.getAuctionStatus() === u.a) return e.getBidsReceived()
            })).reduce(r.flatten, []).filter((function(e) {
                return e
            }))
        }, c.getAdUnits = function() {
            return s.map((function(e) {
                return e.getAdUnits()
            })).reduce(r.flatten, [])
        }, c.getAdUnitCodes = function() {
            return s.map((function(e) {
                return e.getAdUnitCodes()
            })).reduce(r.flatten, []).filter(r.uniques)
        }, c.createAuction = function(e) {
            var t, n = e.adUnits,
                r = e.adUnitCodes,
                i = e.callback,
                o = e.cbTimeout,
                a = e.labels,
                c = Object(u.h)({
                    adUnits: n,
                    adUnitCodes: r,
                    callback: i,
                    cbTimeout: o,
                    labels: a
                });
            return t = c, s.push(t), c
        }, c.findBidByAdId = function(t) {
            return o()(s.map((function(e) {
                return e.getBidsReceived()
            })).reduce(r.flatten, []), (function(e) {
                return e.adId === t
            }))
        }, c.getStandardBidderAdServerTargeting = function() {
            return Object(u.g)()[a.JSON_MAPPING.ADSERVER_TARGETING]
        }, c.setStatusForBids = function(e, t) {
            var n = c.findBidByAdId(e);
            if (n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET) {
                var r = o()(s, (function(e) {
                    return e.getAuctionId() === n.auctionId
                }));
                r && r.setBidTargeting(n)
            }
        }, c.getLastAuctionId = function() {
            return s.length && s[s.length - 1].getAuctionId()
        }, c)
    },
    38: function(e, t, n) {
        var l = n(23),
            p = n(73),
            g = n(74),
            b = n(24),
            v = n(33),
            y = n(75),
            h = {},
            m = {};
        (t = e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s = i ? function() {
                    return e
                } : y(e),
                d = l(n, r, t ? 2 : 1),
                f = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (g(s)) {
                for (o = v(e.length); f < o; f++)
                    if ((u = t ? d(b(a = e[f])[0], a[1]) : d(e[f])) === h || u === m) return u
            } else
                for (c = s.call(e); !(a = c.next()).done;)
                    if ((u = p(c, d, a.value, t)) === h || u === m) return u
        }).BREAK = h, t.RETURN = m
    },
    39: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    4: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {
                BID_TARGETING_SET: "targetingSet",
                RENDERED: "rendered"
            }
        }
    },
    40: function(e, t, n) {
        var m = n(23),
            S = n(54),
            E = n(41),
            A = n(33),
            r = n(85);
        e.exports = function(f, e) {
            var l = 1 == f,
                p = 2 == f,
                g = 3 == f,
                b = 4 == f,
                v = 6 == f,
                y = 5 == f || v,
                h = e || r;
            return function(e, t, n) {
                for (var r, i, o = E(e), a = S(o), c = m(t, n, 3), u = A(a.length), s = 0, d = l ? h(e, u) : p ? h(e, 0) : void 0; s < u; s++)
                    if ((y || s in a) && (i = c(r = a[s], s, o), f))
                        if (l) d[s] = i;
                        else if (i) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return s;
                    case 2:
                        d.push(r)
                } else if (b) return !1;
                return v ? -1 : g || b ? b : d
            }
        }
    },
    41: function(e, t, n) {
        var r = n(32);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    42: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    43: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    44: function(e, t, n) {
        var r = n(54),
            i = n(32);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    45: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    46: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        })), t.c = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t),
                r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                i = r && Object(o.deepAccess)(r, "context");
            return u(e, n, r, i)
        }, n.d(t, "b", (function() {
            return u
        }));
        n(8);
        var o = n(0),
            i = n(3),
            r = n(7),
            a = (n.n(r), n(17)),
            c = "outstream";
        var u = Object(a.b)("sync", (function(e, t, n, r) {
            return !t || n && r !== c ? i.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !(!e.renderer && !t.renderer)
        }), "checkVideoBidSetup")
    },
    47: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!t || !e) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, t)) return void o.logError("".concat(t, " not whitelisted for loading external JavaScript"));
            if (a[e]) return;
            o.logWarn("module ".concat(t, " is loading external JavaScript"));
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = e, o.insertElement(n), a[e] = !0
        }, t.b = function(t, e, n) {
            if (!t) return void o.logError("Error attempting to request empty URL", "adloader.js:loadScript");
            n ? a[t] ? e && "function" == typeof e && (a[t].loaded ? e() : a[t].callbacks.push(e)) : (a[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && a[t].callbacks.push(e), u(t, (function() {
                a[t].loaded = !0;
                try {
                    for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]()
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            }))) : u(t, e)
        };
        var r = n(7),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["criteo"];

        function u(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function() {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
    },
    48: function(e, t, n) {
        "use strict";
        var m = n(57),
            S = n(13),
            E = n(136),
            A = n(20),
            T = n(28),
            O = n(137),
            I = n(50),
            w = n(142),
            _ = n(15)("iterator"),
            C = !([].keys && "next" in [].keys()),
            j = "values",
            B = function() {
                return this
            };
        e.exports = function(e, t, n, r, i, o, a) {
            O(n, t, r);
            var c, u, s, d = function(e) {
                    if (!C && e in g) return g[e];
                    switch (e) {
                        case "keys":
                        case j:
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this, e)
                    }
                },
                f = t + " Iterator",
                l = i == j,
                p = !1,
                g = e.prototype,
                b = g[_] || g["@@iterator"] || i && g[i],
                v = b || d(i),
                y = i ? l ? d("entries") : v : void 0,
                h = "Array" == t && g.entries || b;
            if (h && (s = w(h.call(new e))) !== Object.prototype && s.next && (I(s, f, !0), m || "function" == typeof s[_] || A(s, _, B)), l && b && b.name !== j && (p = !0, v = function() {
                    return b.call(this)
                }), m && !a || !C && !p && g[_] || A(g, _, v), T[t] = v, T[f] = B, i)
                if (c = {
                        values: l ? v : d(j),
                        keys: o ? v : d("keys"),
                        entries: y
                    }, a)
                    for (u in c) u in g || E(g, u, c[u]);
                else S(S.P + S.F * (C || p), t, c);
            return c
        }
    },
    49: function(e, t, n) {
        var r = n(56)("keys"),
            i = n(43);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    },
    5: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        })), t.b = i;
        var l = n(11),
            p = n(3);

        function g() {
            return (g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var v = n(0),
            y = 4,
            r = i();

        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = e.request,
                f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var c = "object" === b(t) && null !== t ? t : {
                        success: function() {
                            v.logMessage("xhr success")
                        },
                        error: function(e) {
                            v.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (c.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function() {
                            if (i.readyState === y) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i)
                            }
                        }, p.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            v.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === o && n) {
                        var u = Object(l.c)(e, r);
                        g(u.search, n), e = Object(l.a)(u)
                    }
                    i.open(o, e, !0), p.config.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), v._each(r.customHeaders, (function(e, t) {
                        i.setRequestHeader(t, e)
                    })), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    v.logError("xhr construction", e)
                }
            }
        }
    },
    50: function(e, t, n) {
        var r = n(19).f,
            i = n(25),
            o = n(15)("toStringTag");
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    },
    51: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        })), n.d(t, "b", (function() {
            return y
        }));
        var r = n(10),
            b = n.n(r),
            i = n(0),
            v = 2,
            o = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            a = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            c = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            u = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            },
            s = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };

        function d(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : f(e, o, n),
                med: "" === r ? "" : f(e, a, n),
                high: "" === r ? "" : f(e, c, n),
                auto: "" === r ? "" : f(e, s, n),
                dense: "" === r ? "" : f(e, u, n),
                custom: "" === r ? "" : f(e, t, n)
            }
        }

        function f(n, e, r) {
            var i = "";
            if (!y(e)) return i;
            var t, o, a, c, u, s, d, f, l, p = e.buckets.reduce((function(e, t) {
                    return e.max > t.max ? e : t
                }), {
                    max: 0
                }),
                g = b()(e.buckets, (function(e) {
                    if (n > p.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = v), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                }));
            return g && (t = n, a = r, c = void 0 !== (o = g).precision ? o.precision : v, u = o.increment * a, s = o.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, i = (l = Number(l.toFixed(10))).toFixed(c)), i
        }

        function y(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach((function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            })), t
        }
    },
    52: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    53: function(e, t, n) {
        var r = n(16),
            i = n(18).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    54: function(e, t, n) {
        var r = n(31);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    55: function(e, t, n) {
        var r = n(31);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    56: function(e, t, n) {
        var r = n(14),
            i = n(18),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(57) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    57: function(e, t) {
        e.exports = !0
    },
    570: function(e, t, n) {
        e.exports = n(64)
    },
    58: function(e, t, n) {
        var u = n(44),
            s = n(33),
            d = n(88);
        e.exports = function(c) {
            return function(e, t, n) {
                var r, i = u(e),
                    o = s(i.length),
                    a = d(n, o);
                if (c && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1
            }
        }
    },
    59: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }, t.c = function(e) {
            var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.b = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                c = 1 < arguments.length ? arguments[1] : void 0,
                u = 2 < arguments.length ? arguments[2] : void 0,
                s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(p.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter((function(e) {
                return s.sizesSupported[e]
            })));
            var f = Object.keys(c),
                l = {
                    active: 1 < f.length || 1 === f.length && "banner" !== f[0] || "banner" === f[0] && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some((function(e) {
                        return s.labels[e]
                    })) || n.some((function(e) {
                        return g()(a, e)
                    }))) || i && n.reduce((function(e, t) {
                        return e ? s.labels[t] || g()(a, t) : e
                    }), !0)),
                    mediaTypes: c
                };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l
        };
        var r = n(3),
            p = n(0),
            i = n(7),
            g = n.n(i);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = [];

        function v(e) {
            return e.reduce((function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    try {
                        t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(t) {
                        return (r[t] || []).forEach((function(e) {
                            return n[t][e] = !0
                        }))
                    })))
                } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }), {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.config.getConfig("sizeConfig", (function(e) {
            return t = e.sizeConfig, void(b = t);
            var t
        }))
    },
    60: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var r = n(0),
            i = {};
        var o = {
            incrementCounter: function(e) {
                return i[e] = i[e] || {}, i[e].counter = Object(r.deepAccess)(i, "".concat(e, ".counter")) + 1 || 1, i[e].counter
            },
            getCounter: function(e) {
                return Object(r.deepAccess)(i, "".concat(e, ".counter")) || 0
            }
        }
    },
    61: function(e, t, n) {
        "use strict";
        t.a = r, n.d(t, "b", (function() {
            return i
        }));
        var c = n(0);

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function r(i) {
            function o() {
                var e = (function() {
                        var t, n = [];
                        do {
                            try {
                                t = t ? t.parent : i;
                                try {
                                    var e = t == i.top,
                                        r = {
                                            referrer: t.document.referrer || null,
                                            location: t.location.href || null,
                                            isTop: e
                                        };
                                    e && (r = u(r, {
                                        canonicalUrl: a(t.document)
                                    })), n.push(r)
                                } catch (e) {
                                    n.push({
                                        referrer: null,
                                        location: null,
                                        isTop: t == i.top
                                    }), Object(c.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                }
                            } catch (e) {
                                return n.push({
                                    referrer: null,
                                    location: null,
                                    isTop: !1
                                }), n
                            }
                        } while (t != i.top);
                        return n
                    })(),
                    t = (function() {
                        try {
                            if (!i.location.ancestorOrigins) return;
                            return i.location.ancestorOrigins
                        } catch (e) {}
                    })();
                if (t)
                    for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
                return e
            }

            function a(e) {
                try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href
                } catch (e) {}
                return null
            }
            return function() {
                try {
                    var e, t = o(),
                        n = t.length - 1,
                        r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
                        i = (function(e) {
                            var t, n = [],
                                r = null,
                                i = null,
                                o = null,
                                a = null,
                                c = null;
                            for (t = e.length - 1; 0 <= t; t--) {
                                try {
                                    r = e[t].location
                                } catch (e) {}
                                if (r) n.push(r), c || (c = r);
                                else if (0 !== t) {
                                    i = e[t - 1];
                                    try {
                                        o = i.referrer, a = i.ancestor
                                    } catch (e) {}
                                    o ? (n.push(o), c || (c = o)) : a ? (n.push(a), c || (c = a)) : n.push(null)
                                } else n.push(null)
                            }
                            return {
                                stack: n,
                                detectedRefererUrl: c
                            }
                        })(t);
                    return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                        referer: i.detectedRefererUrl,
                        reachedTop: r,
                        numIframes: n,
                        stack: i.stack,
                        canonicalUrl: e
                    }
                } catch (e) {}
            }
        }
        var i = r(window)
    },
    62: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "TARGETING_KEY_PB_CAT_DUR", (function() {
            return y
        })), n.d(t, "TARGETING_KEY_CACHE_ID", (function() {
            return h
        })), t.callPrebidCacheHook = T, t.checkAdUnitSetupHook = O, t.checkVideoBidSetupHook = I, t.adpodSetConfig = w, t.initAdpodHooks = function() {
            Object(o.c)(d.e, T), Object(o.c)(r.checkAdUnitSetup, O), Object(o.c)(i.b, I)
        }, t.callPrebidCacheAfterAuction = function(i, o) {
            Object(f.b)(i, (function(e, t) {
                if (e) o(e, null);
                else {
                    for (var n = [], r = 0; r < t.length; r++) "" !== t[r] && n.push(i[r]);
                    o(null, n)
                }
            }))
        }, t.sortByPricePerSecond = function(e, t) {
            if (e.cpm / e.video.durationBucket < t.cpm / t.video.durationBucket) return 1;
            if (e.cpm / e.video.durationBucket > t.cpm / t.video.durationBucket) return -1;
            return 0
        };
        var s = n(0),
            d = n(36),
            r = n(64),
            i = n(46),
            o = n(17),
            f = n(63),
            c = n(3),
            u = n(2),
            a = n(133),
            l = n.n(a),
            p = n(10),
            g = n.n(p);

        function b(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }
        var v = n(156),
            y = "hb_pb_cat_dur",
            h = "hb_cache_id",
            m = 50,
            S = 5,
            E = (function() {
                var t = {};

                function n(e) {
                    var a, c, u;
                    t[e] = {}, t[e].bidStorage = new l.a, t[e].queueDispatcher = (a = m, u = 1, function(e, t, n, r) {
                        var i = this,
                            o = function() {
                                (function(i, o, a) {
                                    (function(e) {
                                        for (var t = 0; t < e.length; t++) E.removeBid(e[t])
                                    })(o), Object(f.b)(o, (function(e, t) {
                                        if (e) {
                                            s.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid(s) must be discarded."));
                                            for (var n = 0; n < o.length; n++) Object(d.f)(i, o[n])
                                        } else
                                            for (var r = 0; r < t.length; r++) "" !== t[r].uuid ? Object(d.d)(i, o[r]) : s.logInfo("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(o[r].customCacheKey, ". Bid was: "), o[r]), a()
                                    }))
                                }).call(i, e, t, n)
                            };
                        clearTimeout(c), r ? u = 1 : u === S ? (u = 1, o()) : (u++, c = setTimeout(o, a))
                    }), t[e].initialCacheKey = s.generateUUID()
                }
                return {
                    addBid: function(e) {
                        t[e.auctionId] || n(e.auctionId), t[e.auctionId].bidStorage.add(e)
                    },
                    removeBid: function(e) {
                        t[e.auctionId].bidStorage.delete(e)
                    },
                    getBids: function(e) {
                        return t[e.auctionId] && t[e.auctionId].bidStorage.values()
                    },
                    getQueueDispatcher: function(e) {
                        return t[e.auctionId] && t[e.auctionId].queueDispatcher
                    },
                    setupInitialCacheKey: function(e) {
                        t[e.auctionId] || (t[e.auctionId] = {}, t[e.auctionId].initialCacheKey = s.generateUUID())
                    },
                    getInitialCacheKey: function(e) {
                        return t[e.auctionId] && t[e.auctionId].initialCacheKey
                    }
                }
            })();

        function A(e, t) {
            var n, r = E.getInitialCacheKey(e),
                i = s.deepAccess(e, "video.durationBucket"),
                o = e.cpm.toFixed(2);
            if (t) {
                var a = s.deepAccess(e, "meta.adServerCatId");
                n = "".concat(o, "_").concat(a, "_").concat(i, "s")
            } else n = "".concat(o, "_").concat(i, "s");
            e.adserverTargeting || (e.adserverTargeting = {}), e.adserverTargeting[y] = n, e.adserverTargeting[h] = r, e.videoCacheKey = r, e.customCacheKey = "".concat(n, "_").concat(r)
        }

        function T(e, t, n, r, i) {
            var o = s.deepAccess(i, "mediaTypes.video");
            if (o && o.context === u.a) {
                var a = c.config.getConfig("adpod.brandCategoryExclusion");
                !s.deepAccess(n, "meta.adServerCatId") && a && (s.logWarn("Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:", n), r()), !1 === c.config.getConfig("adpod.deferCaching") ? (E.addBid(n), A(n, a), (function(e, t, n) {
                    var r = E.getBids(t);
                    if (r) {
                        var i = v(r);
                        E.getQueueDispatcher(t)(e, i, n, !(e.getAuctionStatus() === d.b))
                    } else s.logWarn("Attempted to cache a bid from an unknown auction. Bid:", t)
                })(t, n, r)) : (E.setupInitialCacheKey(n), A(n, a), Object(d.d)(t, n), r())
            } else e.call(this, t, n, r, i)
        }

        function O(e, t) {
            t = t.filter((function(e) {
                var t = s.deepAccess(e, "mediaTypes"),
                    n = s.deepAccess(t, "video");
                if (n && n.context === u.a) {
                    if (1 < Object.keys(t).length) return s.logWarn("Detected more than one mediaType in adUnitCode: ".concat(e.code, " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction.")), !1;
                    var r = "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(e.code, ".  This adUnit will be removed from the auction."),
                        i = !(!n.playerSize || !s.isArrayOfNums(n.playerSize)),
                        o = !(!n.adPodDurationSec || !s.isNumber(n.adPodDurationSec)),
                        a = !(!n.durationRangeSec || !s.isArrayOfNums(n.durationRangeSec));
                    if (!i || !o || !a) return r += i ? "" : "\nmediaTypes.video.playerSize", r += o ? "" : "\nmediaTypes.video.adPodDurationSec", r += a ? "" : "\nmediaTypes.video.durationRangeSec", s.logWarn(r), !1
                }
                return !0
            })), e.call(this, t)
        }

        function I(e, t, n, r, i) {
            if (i === u.a) {
                var o = !0;
                if (c.config.getConfig("adpod.brandCategoryExclusion") && !s.deepAccess(t, "meta.iabSubCatId") && (o = !1), s.deepAccess(t, "video"))
                    if (s.deepAccess(t, "video.context") && t.video.context === u.a || (o = !1), !s.deepAccess(t, "video.durationSeconds") || t.video.durationSeconds <= 0) o = !1;
                    else(function(e, t) {
                        var n = s.deepAccess(t, "video.durationSeconds"),
                            r = s.deepAccess(e, "mediaTypes.video"),
                            i = r.durationRangeSec;
                        if (i.sort((function(e, t) {
                                return e - t
                            })), r.requireExactDuration) {
                            if (!g()(i, (function(e) {
                                    return e === n
                                }))) return s.logWarn("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", t), !1;
                            t.video.durationBucket = n
                        } else {
                            var o = Math.max.apply(Math, b(i));
                            if (!(n <= o + 2)) return s.logWarn("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", t), !1;
                            var a = g()(i, (function(e) {
                                return n <= e + 2
                            }));
                            t.video.durationBucket = a
                        }
                        return !0
                    })(n, t) || (o = !1);
                c.config.getConfig("cache.url") || !t.vastXml || t.vastUrl || (s.logError('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), o = !1), e.bail(o)
            } else e.call(this, t, n, r, i)
        }

        function w(e) {
            void 0 !== e.bidQueueTimeDelay && ("number" == typeof e.bidQueueTimeDelay && 0 < e.bidQueueTimeDelay ? m = e.bidQueueTimeDelay : s.logWarn("Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(m))), void 0 !== e.bidQueueSizeLimit && ("number" == typeof e.bidQueueSizeLimit && 0 < e.bidQueueSizeLimit ? S = e.bidQueueSizeLimit : s.logWarn("Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(S)))
        }
        c.config.getConfig("adpod", (function(e) {
            return w(e.adpod)
        }))
    },
    63: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = {
                puts: e.map(a)
            };
            Object(i.a)(o.config.getConfig("cache.url"), (r = t, {
                success: function(e) {
                    var t;
                    try {
                        t = JSON.parse(e).responses
                    } catch (e) {
                        return void r(e, [])
                    }
                    t ? r(null, t) : r(new Error("The cache server didn't respond with a responses property."), [])
                },
                error: function(e, t) {
                    r(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                }
            }), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            });
            var r
        }, t.a = function(e) {
            return "".concat(o.config.getConfig("cache.url"), "?uuid=").concat(e)
        };
        var i = n(5),
            o = n(3);

        function a(e) {
            var t, n, r, i = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                ttlseconds: Number(e.ttl)
            };
            return "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey), i
        }
    },
    64: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "checkAdUnitSetup", (function() {
            return M
        }));
        var r = n(65),
            c = n(0),
            i = n(131),
            o = n(27),
            a = n(47),
            u = n(3),
            v = n(37),
            s = n(66),
            d = n(17),
            f = n(132),
            l = n(7),
            p = n.n(l),
            g = n(60),
            y = n(12),
            b = n(22);

        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m() {
            return (m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var S = Object(r.a)(),
            E = n(4),
            A = n(0),
            T = n(8).default,
            O = n(9),
            I = o.a.triggerUserSyncs,
            w = E.EVENTS,
            _ = w.ADD_AD_UNITS,
            C = w.BID_WON,
            j = w.REQUEST_BIDS,
            B = w.SET_TARGETING,
            U = w.AD_RENDER_FAILED,
            R = E.AD_RENDER_FAILED_REASON,
            D = R.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            N = R.NO_AD,
            k = R.EXCEPTION,
            x = R.CANNOT_FIND_AD,
            P = R.MISSING_DOC_OR_ADID,
            G = {
                bidWon: function(e) {
                    var t = v.a.getBidsRequested().map((function(e) {
                        return e.bids.map((function(e) {
                            return e.adUnitCode
                        }))
                    })).reduce(c.flatten).filter(c.uniques);
                    return !!A.contains(t, e) || void A.logError('The "' + e + '" placement is not defined.')
                }
            };

        function q(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }
        Object(f.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v2.8.0-pre", A.logInfo("Prebid.js v2.8.0-pre loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var M = Object(d.b)("sync", (function(e) {
            return e.forEach((function(e) {
                var t = e.mediaTypes,
                    n = A.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (A.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                } else e.sizes && (A.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize)
                        if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every((function(e) {
                                return Object(c.isArrayOfNums)(e, 2)
                            }))) e.sizes = i.playerSize;
                        else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                        var o = [];
                        o.push(i.playerSize), A.logInfo("Transforming video.playerSize from [".concat(i.playerSize, "] to [[").concat(o, "]] so it's in the proper format.")), e.sizes = i.playerSize = o
                    } else A.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (A.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (A.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (A.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            })), e
        }), "checkAdUnitSetup");

        function W(e) {
            var n = v.a[e]().filter(A.bind.call(c.adUnitsFilter, this, v.a.getAdUnitCodes())),
                r = v.a.getLastAuctionId();
            return n.map((function(e) {
                return e.adUnitCode
            })).filter(c.uniques).map((function(t) {
                return n.filter((function(e) {
                    return e.auctionId === r && e.adUnitCode === t
                }))
            })).filter((function(e) {
                return e && e[0] && e[0].adUnitCode
            })).map((function(e) {
                return t = {}, n = e[0].adUnitCode, r = {
                    bids: e.map(c.removeRequestId)
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t;
                var t, n, r
            })).reduce((function(e, t) {
                return m(e, t)
            }), {})
        }

        function L(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), A.logError(t), O.emit(U, r)
        }

        function z(e) {
            e.forEach((function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    A.logError("Error processing command :", "prebid.js", e)
                }
            }))
        }
        S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (A.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return A.transformAdServerTargetingObj(t)
            }
            A.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function(e) {
            return A.logInfo("Invoking pbjs.getAdserverTargeting", arguments), s.b.getAllTargeting(e)
        }, S.getNoBids = function() {
            return A.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids")
        }, S.getBidResponses = function() {
            return A.logInfo("Invoking pbjs.getBidResponses", arguments), W("getBidsReceived")
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: v.a.getBidsReceived().filter((function(e) {
                    return e.adUnitCode === t
                })).map(c.removeRequestId)
            }
        }, S.setTargetingForGPTAsync = function(e, t) {
            if (A.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(c.isGptPubadsDefined)()) {
                var n = s.b.getAllTargeting(e);
                s.b.resetPresetTargeting(e), s.b.setTargetingForGPT(n, t), Object.keys(n).forEach((function(t) {
                    Object.keys(n[t]).forEach((function(e) {
                        "hb_adid" === e && v.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET)
                    }))
                })), O.emit(B, n)
            } else A.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function() {
            A.logInfo("Invoking pbjs.setTargetingForAn", arguments), s.b.isApntagDefined() ? (s.b.setTargetingForAst(), O.emit(B, s.b.getAllTargeting())) : A.logError("window.apntag is not defined on the page")
        }, S.renderAd = function(e, t) {
            if (A.logInfo("Invoking pbjs.renderAd", arguments), A.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = v.a.findBidByAdId(t);
                if (n) {
                    n.status = E.BID_STATUS.RENDERED, n.ad = A.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = A.replaceAuctionPrice(n.adUrl, n.cpm), v.a.addWinningBid(n), O.emit(C, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        c = n.adUrl,
                        u = n.renderer,
                        s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (A.insertElement(s, e, "body"), Object(y.c)(u)) Object(y.b)(u, n);
                    else if (e === document && !A.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        L(D, d, n)
                    } else if (o) e.open("text/html", "replace"), e.write(o), e.close(), q(e, i, r), A.callBurl(n);
                    else if (c) {
                        var f = A.createInvisibleIframe();
                        f.height = r, f.width = i, f.style.display = "inline", f.style.overflow = "hidden", f.src = c, A.insertElement(f, e, "body"), q(e, i, r), A.callBurl(n)
                    } else {
                        var l = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        L(N, l, n)
                    }
                } else {
                    var p = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    L(x, p)
                }
            } catch (e) {
                var g = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                L(k, g)
            } else {
                var b = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                L(P, b)
            }
        }, S.removeAdUnit = function(e) {
            (A.logInfo("Invoking pbjs.removeAdUnit", arguments), e) ? (A.isArray(e) ? e : [e]).forEach((function(e) {
                for (var t = 0; t < S.adUnits.length; t++) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
            })): S.adUnits = []
        }, S.requestBids = Object(d.b)("async", (function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels;
            O.emit(j);
            var a = n || u.config.getConfig("bidderTimeout");
            if (r = r || S.adUnits, A.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter((function(e) {
                    return p()(i, e.code)
                })) : i = r && r.map((function(e) {
                    return e.code
                })), (r = M(r)).forEach((function(i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map((function(e) {
                            return e.bidder
                        })),
                        a = T.bidderRegistry,
                        t = u.config.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter((function(e) {
                            return !p()(n, e)
                        })) : e;
                    i.transactionId = A.generateUUID(), r.forEach((function(t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some((function(e) {
                            return p()(r, e)
                        })) || (A.logWarn(A.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter((function(e) {
                            return e.bidder !== t
                        })))
                    })), g.a.incrementCounter(i.code)
                })), r && 0 !== r.length) {
                var c = v.a.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: a,
                    labels: o
                });
                return i.forEach((function(e) {
                    return s.b.setLatestAuctionForAdUnit(e, c.getAuctionId())
                })), c.callBids(), c
            }
            if (A.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                A.logError("Error executing bidsBackHandler", null, e)
            }
        })), S.addAdUnits = function(e) {
            A.logInfo("Invoking pbjs.addAdUnits", arguments), A.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === h(e) && S.adUnits.push(e), O.emit(_)
        }, S.onEvent = function(e, t, n) {
            A.logInfo("Invoking pbjs.onEvent", arguments), A.isFn(t) ? !n || G[e].call(null, n) ? O.on(e, t, n) : A.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : A.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function(e, t, n) {
            A.logInfo("Invoking pbjs.offEvent", arguments), n && !G[e].call(null, n) || O.off(e, t, n)
        }, S.registerBidAdapter = function(e, t) {
            A.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                T.registerBidAdapter(e(), t)
            } catch (e) {
                A.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function(e) {
            A.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                T.registerAnalyticsAdapter(e)
            } catch (e) {
                A.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function(e) {
            return A.logInfo("Invoking pbjs.createBid", arguments), Object(b.a)(e)
        }, S.loadScript = function(e, t, n) {
            A.logInfo("Invoking pbjs.loadScript", arguments), Object(a.b)(e, t, n)
        }, S.enableAnalytics = function(e) {
            e && !A.isEmpty(e) ? (A.logInfo("Invoking pbjs.enableAnalytics for: ", e), T.enableAnalytics(e)) : A.logError("pbjs.enableAnalytics should be called with option {}")
        }, S.aliasBidder = function(e, t) {
            A.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? T.aliasBidAdapter(e, t) : A.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, S.getAllWinningBids = function() {
            return v.a.getAllWinningBids().map(c.removeRequestId)
        }, S.getAllPrebidWinningBids = function() {
            return v.a.getBidsReceived().filter((function(e) {
                return e.status === E.BID_STATUS.BID_TARGETING_SET
            })).map(c.removeRequestId)
        }, S.getHighestCpmBids = function(e) {
            var t = Object(s.a)(v.a.getBidsReceived(), c.getLatestHighestCpmBid);
            return s.b.getWinningBids(e, t).map(c.removeRequestId)
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter((function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            })) : t.adUnitCode ? e = s.b.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter((function(e) {
                return e.adId === t.adId
            })) : A.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED)
        }, S.getConfig = u.config.getConfig, S.setConfig = u.config.setConfig, S.que.push((function() {
            return Object(i.a)()
        })), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                A.logError("Error processing command :", e.message, e.stack)
            } else A.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            d.b.ready(), z(S.que), z(S.cmd)
        }, t.default = S
    },
    65: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
    },
    66: function(e, t, n) {
        "use strict";
        t.a = B, n.d(t, "b", (function() {
            return s
        }));
        var m = n(0),
            S = n(3),
            E = n(26),
            r = n(37),
            i = n(59),
            a = n(2),
            o = n(7),
            A = n.n(o);

        function T(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }

        function O() {
            return (O = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function I(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var w = n(0),
            _ = n(4),
            C = [],
            j = Object.keys(_.TARGETING_KEYS).map((function(e) {
                return _.TARGETING_KEYS[e]
            })),
            c = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(m.timestamp)()
            },
            u = function(e) {
                return e && (e.status && !A()([_.BID_STATUS.BID_TARGETING_SET, _.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function B(e, n) {
            var r = [],
                i = Object(m.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach((function(e) {
                var t = Object(m.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach((function(e) {
                    return r.push(t[e].reduce(n))
                }))
            })), r
        }
        var s = (function(n) {
            var p = {},
                r = {};

            function g(e) {
                return "string" == typeof e ? [e] : w.isArray(e) ? e : n.getAdUnitCodes() || []
            }

            function b() {
                var e = n.getBidsReceived();
                return S.config.getConfig("useBidCache") || (e = e.filter((function(e) {
                    return r[e.adUnitCode] === e.auctionId
                }))), B(e = e.filter((function(e) {
                    return Object(m.deepAccess)(e, "video.context") !== a.a
                })).filter((function(e) {
                    return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
                })).filter(u).filter(c), m.getOldestHighestCpmBid)
            }

            function v() {
                return n.getStandardBidderAdServerTargeting().map((function(e) {
                    return e.key
                })).concat(j).filter(m.uniques)
            }

            function y(r, i, e, t) {
                return Object.keys(i.adserverTargeting).filter(o()).forEach((function(e) {
                    var t, n;
                    r.length && r.filter((n = e, function(e) {
                        return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                    })).forEach((t = e, function(e) {
                        w.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(m.uniques), delete i.adserverTargeting[t]
                    }))
                })), r.push(i), r
            }

            function o() {
                var t = v();
                return function(e) {
                    return -1 === t.indexOf(e)
                }
            }

            function h(t) {
                return I({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(o()).map((function(e) {
                    return I({}, e.substring(0, 20), [t.adserverTargeting[e]])
                })))
            }
            return p.setLatestAuctionForAdUnit = function(e, t) {
                r[e] = t
            }, p.resetPresetTargeting = function(e) {
                if (Object(m.isGptPubadsDefined)()) {
                    var t = g(e),
                        r = n.getAdUnits().filter((function(e) {
                            return A()(t, e.code)
                        }));
                    window.googletag.pubads().getSlots().forEach((function(n) {
                        C.forEach((function(t) {
                            r.forEach((function(e) {
                                e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                            }))
                        }))
                    }))
                }
            }, p.resetPresetTargetingAST = function(e) {
                g(e).forEach((function(e) {
                    var t = window.apntag.getTag(e);
                    if (t && t.keywords) {
                        var n = Object.keys(t.keywords),
                            r = {};
                        n.forEach((function(e) {
                            A()(C, e.toLowerCase()) || (r[e] = t.keywords[e])
                        })), window.apntag.modifyTag(e, {
                            keywords: r
                        })
                    }
                }))
            }, p.getAllTargeting = function(e) {
                var r, t, i, n, o, a, c, u, s, d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b(),
                    f = g(e),
                    l = (a = f, c = d, u = p.getWinningBids(a, c), s = v(), u = u.map((function(o) {
                        return I({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter((function(e) {
                            return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === s.indexOf(e)
                        })).reduce((function(e, t) {
                            var n = [o.adserverTargeting[t]],
                                r = I({}, t.substring(0, 20), n);
                            if (t !== _.TARGETING_KEYS.DEAL) return [].concat(T(e), [r]);
                            var i = I({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                            return [].concat(T(e), [r, i])
                        }), []))
                    }))).concat((n = f, o = d, o.filter((function(e) {
                        return A()(n, e.adUnitCode)
                    })).map((function(e) {
                        return O({}, e)
                    })).reduce(y, []).map(h).filter((function(e) {
                        return e
                    })))).concat(S.config.getConfig("enableSendAllBids") ? (r = f, t = d, i = j.concat(E.a), B(t, m.getHighestCpm).map((function(t) {
                        if (t.adserverTargeting && r && (w.isArray(r) && A()(r, t.adUnitCode) || "string" == typeof r && t.adUnitCode === r)) return I({}, t.adUnitCode, (n = t, i.filter((function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })).map((function(e) {
                            return I({}, "".concat(e, "_").concat(n.bidderCode).substring(0, 20), [n.adserverTargeting[e]])
                        }))));
                        var n
                    })).filter((function(e) {
                        return e
                    }))) : []);
                return l.map((function(t) {
                    Object.keys(t).map((function(e) {
                        t[e].map((function(e) {
                            -1 === C.indexOf(Object.keys(e)[0]) && (C = Object.keys(e).concat(C))
                        }))
                    }))
                })), l = l.map((function(e) {
                    return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                        return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                    })).reduce((function(e, t) {
                        return O(t, e)
                    }), {}))
                })).reduce((function(e, t) {
                    var n = Object.keys(t)[0];
                    return e[n] = O({}, e[n], t[n]), e
                }), {}), f.forEach((function(e) {
                    l[e] || (l[e] = {})
                })), l
            }, p.setTargetingForGPT = function(i, e) {
                window.googletag.pubads().getSlots().forEach((function(r) {
                    Object.keys(i).filter(e ? e(r) : Object(m.isAdUnitCodeMatchingSlot)(r)).forEach((function(n) {
                        return Object.keys(i[n]).forEach((function(t) {
                            var e = i[n][t].split(",");
                            (e = 1 < e.length ? [e] : e).map((function(e) {
                                return w.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                            })).forEach((function(e) {
                                r.setTargeting(t, e)
                            }))
                        }))
                    }))
                }))
            }, p.getWinningBids = function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b(),
                    t = g(e);
                return n.filter((function(e) {
                    return A()(t, e.adUnitCode)
                })).filter((function(e) {
                    return 0 < e.cpm
                })).map((function(e) {
                    return e.adUnitCode
                })).filter(m.uniques).map((function(t) {
                    return n.filter((function(e) {
                        return e.adUnitCode === t ? e : null
                    })).reduce(m.getHighestCpm)
                }))
            }, p.setTargetingForAst = function() {
                var r = p.getAllTargeting();
                try {
                    p.resetPresetTargetingAST()
                } catch (e) {
                    w.logError("unable to reset targeting for AST" + e)
                }
                Object.keys(r).forEach((function(n) {
                    return Object.keys(r[n]).forEach((function(e) {
                        if (w.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), w.isStr(r[n][e]) || w.isArray(r[n][e])) {
                            var t = {};
                            e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                                overrideKeyValue: !0
                            })
                        }
                    }))
                }))
            }, p.isApntagDefined = function() {
                if (window.apntag && w.isFn(window.apntag.setKeywords)) return !0
            }, p
        })(r.a)
    },
    67: function(e, t, n) {
        "use strict";
        var r = n(135)(!0);
        n(48)(String, "String", (function(e) {
            this._t = String(e), this._i = 0
        }), (function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        }))
    },
    68: function(e, t, r) {
        var i = r(24),
            o = r(138),
            a = r(69),
            c = r(49)("IE_PROTO"),
            u = function() {},
            s = "prototype",
            d = function() {
                var e, t = r(53)("iframe"),
                    n = a.length;
                for (t.style.display = "none", r(141).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d[s][a[n]];
                return d()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (u[s] = i(e), n = new u, u[s] = null, n[c] = e) : n = d(), void 0 === t ? n : o(n, t)
        }
    },
    69: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    7: function(e, t, n) {
        n(87), e.exports = n(14).Array.includes
    },
    70: function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    71: function(e, t, n) {
        var i = n(20);
        e.exports = function(e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
            return e
        }
    },
    72: function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    },
    73: function(e, t, n) {
        var o = n(24);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    },
    74: function(e, t, n) {
        var r = n(28),
            i = n(15)("iterator"),
            o = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    },
    75: function(e, t, n) {
        var r = n(76),
            i = n(15)("iterator"),
            o = n(28);
        e.exports = n(14).getIteratorMethod = function(e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    },
    76: function(e, t, n) {
        var i = n(31),
            o = n(15)("toStringTag"),
            a = "Arguments" == i(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = (function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            })(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    77: function(e, t, n) {
        var r = n(43)("meta"),
            i = n(16),
            o = n(25),
            a = n(19).f,
            c = 0,
            u = Object.isExtensible || function() {
                return !0
            },
            s = !n(30)((function() {
                return u(Object.preventExtensions({}))
            })),
            d = function(e) {
                a(e, r, {
                    value: {
                        i: "O" + ++c,
                        w: {}
                    }
                })
            },
            f = e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!o(e, r)) {
                        if (!u(e)) return "F";
                        if (!t) return "E";
                        d(e)
                    }
                    return e[r].i
                },
                getWeak: function(e, t) {
                    if (!o(e, r)) {
                        if (!u(e)) return !0;
                        if (!t) return !1;
                        d(e)
                    }
                    return e[r].w
                },
                onFreeze: function(e) {
                    return s && f.NEED && u(e) && !o(e, r) && d(e), e
                }
            }
    },
    78: function(e, t, n) {
        var r = n(16);
        e.exports = function(e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    },
    79: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach((function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            }))
        };
        var r = n(65),
            i = n(0),
            o = Object(r.a)()
    },
    8: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", (function() {
            return U
        })), t.setS2STestingModule = function(e) {
            O = e
        };
        var m = n(0),
            p = n(59),
            g = n(26),
            d = n(1),
            y = n(5),
            S = n(3),
            r = n(7),
            E = n.n(r),
            i = n(10),
            A = n.n(i),
            b = n(60),
            T = n(61);

        function h(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function v() {
            return (v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var O, I = n(0),
            w = n(4),
            _ = n(9),
            f = {},
            C = f.bidderRegistry = {},
            l = f.aliasRegistry = {},
            j = {};
        S.config.getConfig("s2sConfig", (function(e) {
            j = e.s2sConfig
        }));
        var o = {};

        function B(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce((function(e, c) {
                var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : I.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter((function(e) {
                    return e.bidder === i
                })).reduce((function(e, t) {
                    var n = c.nativeParams || I.deepAccess(c, "mediaTypes.native");
                    n && (t = v({}, t, {
                        nativeParams: Object(g.g)(n)
                    })), t = v({}, t, Object(m.getDefinedParams)(c, ["mediaType", "renderer"]));
                    var r = Object(p.b)(Object(p.a)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : I.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), I.isValidMediaTypes(o) ? t = v({}, t, {
                        mediaTypes: o
                    }) : I.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(v({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: I.deepAccess(o, "banner.sizes") || I.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || I.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: b.a.getCounter(c.code)
                    })), e
                }), [])), e
            }), []).reduce(m.flatten, []).filter((function(e) {
                return "" !== e
            }))
        }
        var U = {
            consentData: null,
            setConsentData: function(e) {
                U.consentData = e
            },
            getConsentData: function() {
                return U.consentData
            }
        };

        function R() {
            return j && j.enabled && j.testing && O
        }

        function a(t, n, e) {
            try {
                var r = C[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (I.logInfo("Invoking ".concat(t, ".").concat(n)), r[n](e))
            } catch (e) {
                I.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        f.makeBidRequests = function(e, i, o, a, c) {
            var u = [],
                t = Object(m.getBidderCodes)(e);
            S.config.getConfig("bidderSequence") === S.RANDOM && (t = Object(m.shuffle)(t));
            var n, r, s, d = Object(T.b)(),
                f = t,
                l = [];
            if (j.enabled) {
                R() && (l = O.getSourceBidderMap(e)[O.CLIENT]);
                var p = j.bidders;
                f = t.filter((function(e) {
                    return !E()(p, e) || E()(l, e)
                }));
                var g = (n = e, r = j.bidders, (s = I.deepClone(n)).forEach((function(e) {
                        e.bids = e.bids.filter((function(e) {
                            return E()(r, e.bidder) && (!R() || e.finalSource !== O.CLIENT)
                        })).map((function(e) {
                            return e.bid_id = I.getUniqueIdentifierStr(), e
                        }))
                    })), s = s.filter((function(e) {
                        return 0 !== e.bids.length
                    }))),
                    b = I.generateUUID();
                p.forEach((function(e) {
                    var t = I.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: b,
                            bids: B({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: I.deepClone(g),
                                labels: c,
                                src: w.S2S.SRC
                            }),
                            auctionStart: i,
                            timeout: j.timeout,
                            src: w.S2S.SRC,
                            refererInfo: d
                        };
                    0 !== n.bids.length && u.push(n)
                })), g.forEach((function(e) {
                    var t = e.bids.filter((function(t) {
                        return A()(u, (function(e) {
                            return A()(e.bids, (function(e) {
                                return e.bidId === t.bid_id
                            }))
                        }))
                    }));
                    e.bids = t
                })), u.forEach((function(e) {
                    e.adUnitsS2SCopy = g.filter((function(e) {
                        return 0 < e.bids.length
                    }))
                }))
            }
            var v, y, h = (v = e, (y = I.deepClone(v)).forEach((function(e) {
                e.bids = e.bids.filter((function(e) {
                    return !R() || e.finalSource !== O.SERVER
                }))
            })), y = y.filter((function(e) {
                return 0 !== e.bids.length
            })));
            return f.forEach((function(e) {
                var t = I.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: B({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: I.deepClone(h),
                            labels: c,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: d
                    },
                    r = C[e];
                r || I.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
            })), U.getConsentData() && u.forEach((function(e) {
                e.gdprConsent = U.getConsentData()
            })), u
        }, f.callBids = function(e, t, r, i, o, a) {
            if (t.length) {
                var n = h(t.reduce((function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e
                    }), [
                        [],
                        []
                    ]), 2),
                    c = n[0],
                    u = n[1];
                if (u.length) {
                    var s = Object(y.b)(a, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0),
                        d = j.bidders,
                        f = C[j.adapter],
                        l = u[0].tid,
                        p = u[0].adUnitsS2SCopy;
                    if (f) {
                        var g = {
                            tid: l,
                            ad_units: p
                        };
                        if (g.ad_units.length) {
                            var b = u.map((function(e) {
                                    return e.start = Object(m.timestamp)(), i.bind(e)
                                })),
                                v = g.ad_units.reduce((function(e, t) {
                                    return e.concat((t.bids || []).reduce((function(e, t) {
                                        return e.concat(t.bidder)
                                    }), []))
                                }), []);
                            I.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(d.filter((function(e) {
                                return E()(v, e)
                            })).join(","))), u.forEach((function(e) {
                                _.emit(w.EVENTS.BID_REQUESTED, e)
                            })), f.callBids(g, u, (function(e, t) {
                                var n = Object(m.getBidderRequest)(u, t.bidderCode, e);
                                n && r.call(n, e, t)
                            }), (function() {
                                return b.forEach((function(e) {
                                    return e()
                                }))
                            }), s)
                        }
                    }
                }
                c.forEach((function(e) {
                    e.start = Object(m.timestamp)();
                    var t = C[e.bidderCode];
                    I.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), _.emit(w.EVENTS.BID_REQUESTED, e);
                    var n = Object(y.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, r.bind(e), i.bind(e), n)
                }))
            } else I.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, f.videoAdapters = [], f.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (C[t] = e, E()(r, "video") && f.videoAdapters.push(t), E()(r, "native") && g.e.push(t)) : I.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : I.logError("bidAdaptor or bidderCode not specified")
        }, f.aliasBidAdapter = function(t, e) {
            var n, r;
            if (void 0 === C[e]) {
                var i = C[t];
                if (void 0 === i) {
                    var o = S.config.getConfig("s2sConfig"),
                        a = o && o.bidders;
                    a && E()(a, e) ? l[e] = t : I.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else try {
                    var c, u = (n = t, r = [], E()(f.videoAdapters, n) && r.push("video"), E()(g.e, n) && r.push("native"), r);
                    if (i.constructor.prototype != Object.prototype)(c = new i.constructor).setBidderCode(e);
                    else {
                        var s = i.getSpec();
                        c = Object(d.newBidder)(v({}, s, {
                            code: e
                        })), l[e] = t
                    }
                    f.registerBidAdapter(c, e, {
                        supportedMediaTypes: u
                    })
                } catch (e) {
                    I.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else I.logMessage('alias name "' + e + '" has been already specified.')
        }, f.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, o[n] = t) : I.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : I.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, f.enableAnalytics = function(e) {
            I.isArray(e) || (e = [e]), I._each(e, (function(e) {
                var t = o[e.provider];
                t ? t.enableAnalytics(e) : I.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            }))
        }, f.getBidAdapter = function(e) {
            return C[e]
        }, f.callTimedOutBidders = function(t, n, r) {
            n = n.map((function(e) {
                return e.params = I.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            })), n = I.groupBy(n, "bidder"), Object.keys(n).forEach((function(e) {
                a(e, "onTimeout", n[e])
            }))
        }, f.callBidWonBidder = function(e, t, n) {
            t.params = I.getUserConfiguredParams(n, t.adUnitCode, t.bidder), a(e, "onBidWon", t)
        }, f.callSetTargetingBidder = function(e, t) {
            a(e, "onSetTargeting", t)
        }, t.default = f
    },
    82: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(40)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            find: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)(o)
    },
    83: function(e, t, n) {
        e.exports = !n(21) && !n(30)((function() {
            return 7 != Object.defineProperty(n(53)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    84: function(e, t, n) {
        var i = n(16);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    85: function(e, t, n) {
        var r = n(86);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    },
    86: function(e, t, n) {
        var r = n(16),
            i = n(55),
            o = n(15)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    87: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(58)(!0);
        r(r.P, "Array", {
            includes: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)("includes")
    },
    88: function(e, t, n) {
        var r = n(42),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    89: function(e, t) {
        y.SYNC = 1, y.ASYNC = 2, y.QUEUE = 4;
        var p = "fun-hooks",
            n = "function" == typeof Proxy,
            r = Object.freeze({
                useProxy: n,
                ready: 0
            }),
            i = Object.getPrototypeOf({}),
            c = "2,1,0" === [1].reduce((function(e, t, n) {
                return [e, t, n]
            }), 2).toString() ? Array.prototype.reduce : function(e, t) {
                var n, r = Object(this),
                    i = r.length >>> 0,
                    o = 0;
                if (t) n = t;
                else {
                    for (; o < i && !(o in r);) o++;
                    n = r[o++]
                }
                for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
                return n
            },
            g = 4 === function(e, t) {
                return t
            }.bind(null, 1, 4)() ? Function.prototype.bind : function(e) {
                var t = this,
                    n = v(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(v(arguments)))
                }
            };

        function b(e) {
            return c.call(v(arguments, 1), (function(t, n) {
                return n && Object.keys(n).forEach((function(e) {
                    t[e] = n[e]
                })), t
            }), e)
        }

        function v(e, t) {
            return Array.prototype.slice.call(e, t)
        }

        function y(o) {
            var s, e = {},
                d = [];

            function t(e, t) {
                return "function" == typeof e ? u.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? u.apply(null, arguments) : "object" == typeof e ? function(o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {},
                        n = ["constructor"];
                    for (;
                        (e = e.filter((function(e) {
                            return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                        }))).forEach((function(e) {
                            var t = e.split(":"),
                                n = t[0],
                                r = t[1] || "sync";
                            if (!c[n]) {
                                var i = o[n];
                                c[n] = o[n] = u(r, i, a ? [a, n] : void 0)
                            }
                        })), o = Object.getPrototypeOf(o), t && o !== i;);
                    return c
                }.apply(null, arguments) : void 0
            }

            function f(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return c.call(a, (function(t, n, e) {
                    var r = t[n],
                        i = !1;
                    return r || (e === a.length - 1 ? (s || d.push((function() {
                        i || console.warn(p + ": referenced '" + o + "' but it was never created")
                    })), t[n] = l((function(e) {
                        t[n] = e, i = !0
                    }))) : t[n] = {})
                }), e)
            }

            function l(r) {
                var o = [],
                    a = [],
                    c = function() {};
                return {
                    __funHook: {
                        install: function(e, t, n) {
                            this.type = e, this.fn = t, (c = n)(o, a), r && r(t)
                        }
                    },
                    before: function(e, t) {
                        return n.call(this, o, "before", e, t)
                    },
                    after: function(e, t) {
                        return n.call(this, a, "after", e, t)
                    },
                    getHooks: function(n) {
                        var e = o.concat(a);
                        return "object" == typeof n && (e = e.filter((function(t) {
                            return Object.keys(n).every((function(e) {
                                return t[e] === n[e]
                            }))
                        }))), b(e, {
                            remove: function() {
                                return e.forEach((function(e) {
                                    e.remove()
                                })), this
                            }
                        })
                    },
                    removeAll: function() {
                        return this.getHooks().remove()
                    }
                };

                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function() {
                            var e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), c(o, a))
                        }
                    };
                    return t.push(i), t.sort((function(e, t) {
                        return t.priority - e.priority
                    })), c(o, a), this
                }
            }

            function u(a, e, t) {
                if (e.__funHook) {
                    if (e.__funHook.type !== a) throw p + ": recreated hookable with different type";
                    return e.__funHook.fn
                }
                var c, n, r = t ? f(t) : l(),
                    i = {
                        get: function(e, t) {
                            return r[t] || Reflect.get.apply(Reflect, arguments)
                        }
                    };
                return s || d.push(u), o.useProxy ? n = new Proxy(e, i) : b(n = function() {
                    return i.apply ? i.apply(e, this, v(arguments)) : e.apply(this, arguments)
                }, r), r.__funHook.install(a, n, (function(e, t) {
                    if (e.length || t.length) {
                        var n;
                        if ("sync" === a) {
                            var r, i = "r=t.apply(h," + (e.length ? "arguments" : "g") + ")";
                            t.length && (r = o(t, "a", "n(function extract(s){r=s},e)")), e.length && (i = o(e, "b", "n(function extract(){" + i + ";" + r + "},e)"), r = ""), n = ["var r,e={bail:function(a){r=a}}", i, r, "return r"].join(";")
                        } else "async" === a && (n = "t.apply(h," + (e.length ? "Array.prototype.slice.call(arguments)" : "g") + ".concat(" + o(t, "a", "z?n(z,e):[]") + "))", e.length && (n = "n(function partial(){" + n + "},e)"), n = ["var z", 'typeof g[g.length-1]==="function"&&(z=i.call(g.pop(),null))', "var e={bail:z}", o(e, "b", n)].join(";"));
                        c = g.call(new Function("i,b,a,n,t,h,g", n), null, g, e, t, Object.assign || b)
                    } else c = void 0;

                    function o(e, t, n) {
                        for (var r = e.length; 0 < r--;) 0 !== r || "async" === a && "a" === t ? (n = "i.call(" + t + "[" + r + "].hook, h," + n + ")", "async" === a && "a" === t && 0 === r || (n = "n(" + n + ",e)")) : n = t + "[" + r + "].hook.apply(h,[" + n + ("b" === t ? "].concat(g))" : ",r])");
                        return n
                    }
                    u()
                })), n;

                function u() {
                    !s && ("sync" !== a || o.ready & y.SYNC) && ("async" !== a || o.ready & y.ASYNC) ? "sync" !== a && o.ready & y.QUEUE ? i.apply = function() {
                        var e = arguments;
                        d.push((function() {
                            n.apply(e[1], e[2])
                        }))
                    } : i.apply = function() {
                        throw p + ": hooked function not ready"
                    } : i.apply = c
                }
            }
            return (o = b({}, r, o)).ready ? t.ready = function() {
                s = !0, (function(e) {
                    for (var t; t = e.shift();) t()
                })(d)
            } : s = !0, t.get = f, t
        }
        e.exports = y
    },
    9: function(e, t, n) {
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, i, u = n(0),
            o = n(4),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = u._map(o.EVENTS, (function(e) {
                return e
            })),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (c = {}, (i = {}).on = function(e, t, n) {
            if (i = e, u.contains(d, i)) {
                var r = c[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), c[e] = r
            } else u.logError("Wrong event name : " + e + " Valid event names :" + d);
            var i
        }, i.emit = function(e) {
            !(function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = c[e] || {
                        que: []
                    },
                    o = u._map(i, (function(e, t) {
                        return t
                    })),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, (function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                }))
            })(e, a.call(arguments, 1))
        }, i.off = function(e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, (function(e) {
                var t = i[r].que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            })) : u._each(i.que, (function(e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            })), c[e] = i)
        }, i.get = function() {
            return c
        }, i.getEvents = function() {
            var n = [];
            return u._each(l, (function(e) {
                var t = r({}, e);
                n.push(t)
            })), n
        }, i)
    },
    90: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    }
});
pbjsChunk([189], {
    184: function(e, r, n) {
        e.exports = n(185)
    },
    185: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", (function() {
            return R
        }));
        var s = n(0),
            t = n(1),
            i = n(2);

        function a() {
            return (a = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                }
                return e
            }).apply(this, arguments)
        }

        function o() {
            var e = u(["dcn=", "&pos=", "&cmd=bid", ""]);
            return o = function() {
                return e
            }, e
        }

        function c() {
            var e = u(["//", "/bidRequest?"]);
            return c = function() {
                return e
            }, e
        }

        function d() {
            var e = u(["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]);
            return d = function() {
                return e
            }, e
        }

        function u(e, r) {
            return r || (r = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        var l = {
                AOL: "aol",
                ONEMOBILE: "onemobile",
                ONEDISPLAY: "onedisplay"
            },
            p = {
                GET: "display-get"
            },
            m = {
                GET: "mobile-get",
                POST: "mobile-post"
            },
            f = {
                TAG: "iframe",
                TYPE: "iframe"
            },
            b = {
                TAG: "img",
                TYPE: "image"
            },
            v = E(d(), "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
            h = E(c(), "host"),
            g = E(o(), "dcn", "pos", "dynamicParams"),
            O = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            },
            y = 1;

        function E(o) {
            for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            return function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var i = t[t.length - 1] || {},
                    a = [o[0]];
                return n.forEach((function(e, r) {
                    var n = s.isInteger(e) ? t[e] : i[e];
                    a.push(n, o[r + 1])
                })), a.join("")
            }
        }

        function P(e) {
            return e === l.AOL || e === l.ONEMOBILE
        }

        function I(e) {
            if (P(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                var r = e.params.imp[0];
                return r.id && r.tagid && (r.banner && r.banner.w && r.banner.h || r.video && r.video.mimes && r.video.minduration && r.video.maxduration)
            }
        }

        function T(e) {
            return P(e.bidder) && e.params.dcn && e.params.pos
        }

        function S(e) {
            return ((r = e.bidder) === l.AOL || r === l.ONEDISPLAY) && e.params.placement && e.params.network;
            var r
        }
        var R = {
            code: l.AOL,
            aliases: [l.ONEMOBILE, l.ONEDISPLAY],
            supportedMediaTypes: [i.b],
            isBidRequestValid: function(e) {
                return S(e) || (T(r = e) || I(r));
                var r
            },
            buildRequests: function(e, r) {
                var t = this,
                    i = r ? r.gdprConsent : null;
                return e.map((function(e) {
                    var r, n = T(r = e) ? m.GET : I(r) ? m.POST : S(r) ? p.GET : void 0;
                    if (n) return t.formatBidRequest(n, e, i)
                }))
            },
            interpretResponse: function(e, r) {
                var n = e.body;
                if (n) {
                    var t = this._parseBidResponse(n, r);
                    if (t) return t
                } else s.logError("Empty bid response", r.bidderCode, n)
            },
            getUserSyncs: function(e, r) {
                var n = !s.isEmpty(r) && r[0].body;
                return n && n.ext && n.ext.pixels ? this.parsePixelItems(n.ext.pixels) : []
            },
            formatBidRequest: function(e, r, n) {
                var t;
                switch (e) {
                    case p.GET:
                        t = {
                            url: this.buildMarketplaceUrl(r, n),
                            method: "GET",
                            ttl: 60
                        };
                        break;
                    case m.GET:
                        t = {
                            url: this.buildOneMobileGetUrl(r, n),
                            method: "GET",
                            ttl: 3600
                        };
                        break;
                    case m.POST:
                        t = {
                            url: this.buildOneMobileBaseUrl(r),
                            method: "POST",
                            ttl: 3600,
                            data: this.buildOpenRtbRequestData(r, n),
                            options: {
                                contentType: "application/json",
                                customHeaders: {
                                    "x-openrtb-version": "2.2"
                                }
                            }
                        }
                }
                return t.bidderCode = r.bidder, t.bidId = r.bidId, t.userSyncOn = r.params.userSyncOn, t
            },
            buildMarketplaceUrl: function(e, r) {
                var n, t = e.params,
                    i = t.server,
                    a = t.region || "us";
                return O.hasOwnProperty(a) || (s.logWarn("Unknown region '".concat(a, "' for AOL bidder.")), a = "us"), n = i || O[a], t.region = a, v({
                    host: n,
                    network: t.network,
                    placement: parseInt(t.placement),
                    pageid: t.pageId || 0,
                    sizeid: t.sizeId || 0,
                    alias: t.alias || s.getUniqueIdentifierStr(),
                    misc: (new Date).getTime(),
                    dynamicParams: this.formatMarketplaceDynamicParams(t, r)
                })
            },
            buildOneMobileGetUrl: function(e, r) {
                var n = e.params,
                    t = n.dcn,
                    i = n.pos,
                    a = n.ext,
                    o = this.buildOneMobileBaseUrl(e);
                if (t && i) {
                    var s = this.formatOneMobileDynamicParams(a, r);
                    o += g({
                        dcn: t,
                        pos: i,
                        dynamicParams: s
                    })
                }
                return o
            },
            buildOneMobileBaseUrl: function(e) {
                return h({
                    host: e.params.host || "hb.nexage.com"
                })
            },
            formatMarketplaceDynamicParams: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    r = 1 < arguments.length ? arguments[1] : void 0,
                    n = {};
                e.bidFloor && (n.bidfloor = e.bidFloor), a(n, this.formatKeyValues(e.keyValues)), a(n, this.formatConsentData(r));
                var t = "";
                return s._each(n, (function(e, r) {
                    t += "".concat(r, "=").concat(encodeURIComponent(e), ";")
                })), t
            },
            formatOneMobileDynamicParams: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    r = 1 < arguments.length ? arguments[1] : void 0;
                this.isSecureProtocol() && (e.secure = y), a(e, this.formatConsentData(r));
                var n = "";
                return s._each(e, (function(e, r) {
                    n += "&".concat(r, "=").concat(encodeURIComponent(e))
                })), n
            },
            buildOpenRtbRequestData: function(e, r) {
                var n = {
                    id: e.params.id,
                    imp: e.params.imp
                };
                return this.isConsentRequired(r) && (n.regs = {
                    ext: {
                        gdpr: y
                    }
                }, r.consentString && (n.user = {
                    ext: {
                        consent: r.consentString
                    }
                })), n
            },
            isConsentRequired: function(e) {
                return !(!e || !e.gdprApplies)
            },
            formatKeyValues: function(e) {
                var n = {};
                return s._each(e, (function(e, r) {
                    n["kv".concat(r)] = e
                })), n
            },
            formatConsentData: function(e) {
                var r = {};
                return this.isConsentRequired(e) && (r.gdpr = y, e.consentString && (r.euconsent = e.consentString)), r
            },
            parsePixelItems: function(e) {
                var t = /\w*(?=\s)/,
                    i = /src=("|')(.*?)\1/,
                    a = [];
                if (e) {
                    var r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                    r && r.forEach((function(e) {
                        var r = e.match(t)[0],
                            n = e.match(i)[2];
                        r && r && a.push({
                            type: r === b.TAG ? b.TYPE : f.TYPE,
                            url: n
                        })
                    }))
                }
                return a
            },
            _parseBidResponse: function(e, r) {
                var n, t;
                try {
                    n = e.seatbid[0].bid[0]
                } catch (e) {
                    return
                }
                if (n.ext && n.ext.encp) t = n.ext.encp;
                else if (null === (t = n.price) || isNaN(t)) return void s.logError("Invalid price in bid response", l.AOL, bid);
                return {
                    bidderCode: r.bidderCode,
                    requestId: r.bidId,
                    ad: n.adm,
                    cpm: t,
                    width: n.w,
                    height: n.h,
                    creativeId: n.crid || 0,
                    pubapiId: e.id,
                    currency: e.cur || "USD",
                    dealId: n.dealid,
                    netRevenue: !0,
                    ttl: r.ttl
                }
            },
            isOneMobileBidder: P,
            isSecureProtocol: function() {
                return "https:" === document.location.protocol
            }
        };
        Object(t.registerBidder)(R)
    }
}, [184]);
pbjsChunk([187], {
    190: function(e, r, a) {
        e.exports = a(191)
    },
    191: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", (function() {
            return s
        }));
        var c = a(12),
            b = a(0),
            v = a(3),
            m = a(1),
            l = a(2),
            n = a(10),
            h = a.n(n),
            t = a(7),
            _ = a.n(t);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function f() {
            return (f = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        function k(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var r = 0, a = new Array(e.length); r < e.length; r++) a[r] = e[r];
                    return a
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }
        var I = "//ib.adnxs.com/ut/v3/prebid",
            d = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            x = ["age", "external_uid", "segments", "gender", "dnt", "language"],
            T = ["geo", "device_id"],
            w = ["enabled", "dongle", "member_id", "debug_timeout"],
            p = {
                body: "description",
                body2: "desc2",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                sponsoredBy: "sponsored_by",
                privacyLink: "privacy_link",
                salePrice: "saleprice",
                displayUrl: "displayurl"
            },
            s = {
                code: "appnexus",
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [l.b, l.d, l.c],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a, n = e.map(C),
                        t = h()(e, S);
                    t && (a = {}, Object.keys(t.params.user).filter((function(e) {
                        return _()(x, e)
                    })).forEach((function(e) {
                        return a[e] = t.params.user[e]
                    })));
                    var i, s = h()(e, A);
                    s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter((function(e) {
                        return _()(T, e)
                    })).forEach((function(e) {
                        return i[e] = s.params.app[e]
                    })));
                    var o, d = h()(e, R);
                    d && d.params && s.params.app && s.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = {},
                        u = {},
                        c = b.getCookie("apn_prebid_debug") || null;
                    if (c) try {
                        p = JSON.parse(c)
                    } catch (e) {
                        b.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var m = h()(e, P);
                        m && m.debug && (p = m.debug)
                    }
                    p && p.enabled && Object.keys(p).filter((function(e) {
                        return _()(w, e)
                    })).forEach((function(e) {
                        u[e] = p[e]
                    }));
                    var l = h()(e, E),
                        f = l ? parseInt(l.params.member, 10) : 0,
                        y = {
                            tags: k(n),
                            user: a,
                            sdk: {
                                source: "pbjs",
                                version: "2.8.0-pre"
                            }
                        };
                    if (0 < f && (y.member_id = f), s && (y.device = i), d && (y.app = o), v.config.getConfig("adpod.brandCategoryExclusion") && (y.brand_category_uniqueness = !0), u.enabled && (y.debug = u, b.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), r && r.gdprConsent && (y.gdpr_consent = {
                            consent_string: r.gdprConsent.consentString,
                            consent_required: r.gdprConsent.gdprApplies
                        }), r && r.refererInfo) {
                        var g = {
                            rd_ref: encodeURIComponent(r.refererInfo.referer),
                            rd_top: r.refererInfo.reachedTop,
                            rd_ifs: r.refererInfo.numIframes,
                            rd_stk: r.refererInfo.stack.map((function(e) {
                                return encodeURIComponent(e)
                            })).join(",")
                        };
                        y.referrer_detection = g
                    }
                    return h()(e, O) && e.filter(O).forEach((function(r) {
                        var e = (function(e, r) {
                                var a = r.mediaTypes.video,
                                    n = a.durationRangeSec,
                                    t = a.requireExactDuration,
                                    i = (p = r.mediaTypes.video, u = p.adPodDurationSec, c = p.durationRangeSec, m = p.requireExactDuration, l = b.getMinValueFromArray(c), f = Math.floor(u / l), m ? Math.max(f, c.length) : f),
                                    s = b.getMaxValueFromArray(n),
                                    o = e.filter((function(e) {
                                        return e.uuid === r.bidId
                                    })),
                                    d = b.fill.apply(b, k(o).concat([i]));
                                var p, u, c, m, l, f;
                                if (t) {
                                    var y = Math.ceil(i / n.length),
                                        g = b.chunk(d, y);
                                    n.forEach((function(r, e) {
                                        g[e].map((function(e) {
                                            j(e, "minduration", r), j(e, "maxduration", r)
                                        }))
                                    }))
                                } else d.map((function(e) {
                                    return j(e, "maxduration", s)
                                }));
                                return d
                            })(n, r),
                            a = y.tags.filter((function(e) {
                                return e.uuid !== r.bidId
                            }));
                        y.tags = [].concat(k(a), k(e))
                    })), (function(e, a) {
                        var n = [];
                        if (15 < e.tags.length) {
                            var t = b.deepClone(e);
                            b.chunk(e.tags, 15).forEach((function(e) {
                                t.tags = e;
                                var r = JSON.stringify(t);
                                n.push({
                                    method: "POST",
                                    url: I,
                                    data: r,
                                    bidderRequest: a
                                })
                            }))
                        } else {
                            var r = JSON.stringify(e);
                            n = {
                                method: "POST",
                                url: I,
                                data: r,
                                bidderRequest: a
                            }
                        }
                        return n
                    })(y, r)
                },
                interpretResponse: function(e, r) {
                    var i = this,
                        s = r.bidderRequest;
                    e = e.body;
                    var o = [];
                    if (!e || e.error) {
                        var a = "in response for ".concat(s.bidderCode, " adapter");
                        return e && e.error && (a += ": ".concat(e.error)), b.logError(a), o
                    }
                    if (e.tags && e.tags.forEach((function(e) {
                            var r, a, n = (r = e) && r.ads && r.ads.length && h()(r.ads, (function(e) {
                                return e.rtb
                            }));
                            if (n && 0 !== n.cpm && _()(i.supportedMediaTypes, n.ad_type)) {
                                var t = (function(e, r, a) {
                                    var n = b.getBidRequest(e.uuid, [a]),
                                        t = {
                                            requestId: e.uuid,
                                            cpm: r.cpm,
                                            creativeId: r.creative_id,
                                            dealId: r.deal_id,
                                            currency: "USD",
                                            netRevenue: !0,
                                            ttl: 300,
                                            adUnitCode: n.adUnitCode,
                                            appnexus: {
                                                buyerMemberId: r.buyer_member_id,
                                                dealPriority: r.deal_priority,
                                                dealCode: r.deal_code
                                            }
                                        };
                                    if (r.rtb.video) {
                                        f(t, {
                                            width: r.rtb.video.player_width,
                                            height: r.rtb.video.player_height,
                                            vastUrl: r.rtb.video.asset_url,
                                            vastImpUrl: r.notify_url,
                                            ttl: 3600
                                        });
                                        var i = b.deepAccess(n, "mediaTypes.video.context");
                                        if (i === l.a) {
                                            var s = Object(m.getIabSubCategory)(n.bidder, r.brand_category_id);
                                            t.meta = {
                                                iabSubCatId: s
                                            }, t.video = {
                                                context: l.a,
                                                durationSeconds: Math.floor(r.rtb.video.duration_ms / 1e3)
                                            }
                                        }
                                        if (r.renderer_url) {
                                            var o = b.deepAccess(a.bids[0], "renderer.options");
                                            f(t, {
                                                adResponse: e,
                                                renderer: (function(e, r) {
                                                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                        n = c.a.install({
                                                            id: r.renderer_id,
                                                            url: r.renderer_url,
                                                            config: a,
                                                            loaded: !1,
                                                            adUnitCode: e
                                                        });
                                                    try {
                                                        n.setRender(g)
                                                    } catch (e) {
                                                        b.logWarn("Prebid Error calling setRender on renderer", e)
                                                    }
                                                    return n.setEventHandlers({
                                                        impression: function() {
                                                            return b.logMessage("AppNexus outstream video impression event")
                                                        },
                                                        loaded: function() {
                                                            return b.logMessage("AppNexus outstream video loaded event")
                                                        },
                                                        ended: function() {
                                                            b.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                        }
                                                    }), n
                                                })(t.adUnitCode, r, o)
                                            }), t.adResponse.ad = t.adResponse.ads[0], t.adResponse.ad.video = t.adResponse.ad.rtb.video
                                        }
                                    } else if (r.rtb[l.c]) {
                                        var d = r.rtb[l.c];
                                        t[l.c] = {
                                            title: d.title,
                                            body: d.desc,
                                            body2: d.desc2,
                                            cta: d.ctatext,
                                            rating: d.rating,
                                            sponsoredBy: d.sponsored,
                                            privacyLink: d.privacy_link,
                                            address: d.address,
                                            downloads: d.downloads,
                                            likes: d.likes,
                                            phone: d.phone,
                                            price: d.price,
                                            salePrice: d.saleprice,
                                            clickUrl: d.link.url,
                                            displayUrl: d.displayurl,
                                            clickTrackers: d.link.click_trackers,
                                            impressionTrackers: d.impression_trackers,
                                            javascriptTrackers: d.javascript_trackers
                                        }, d.main_img && (t.native.image = {
                                            url: d.main_img.url,
                                            height: d.main_img.height,
                                            width: d.main_img.width
                                        }), d.icon && (t.native.icon = {
                                            url: d.icon.url,
                                            height: d.icon.height,
                                            width: d.icon.width
                                        })
                                    } else {
                                        f(t, {
                                            width: r.rtb.banner.width,
                                            height: r.rtb.banner.height,
                                            ad: r.rtb.banner.content
                                        });
                                        try {
                                            var p = r.rtb.trackers[0].impression_urls[0],
                                                u = b.createTrackPixelHtml(p);
                                            t.ad += u
                                        } catch (e) {
                                            b.logError("Error appending tracking pixel", e)
                                        }
                                    }
                                    return t
                                })(e, n, s);
                                t.mediaType = (a = n.ad_type) === l.d ? l.d : a === l.c ? l.c : l.b, o.push(t)
                            }
                        })), e.debug && e.debug.debug_info) {
                        var n = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                        n = n.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), b.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), b.logMessage(n)
                    }
                    return o
                },
                getMappingFileInfo: function() {
                    return {
                        url: "//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                        refreshInDays: 7
                    }
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                    }]
                },
                transformBidParams: function(a, e) {
                    return a = b.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: b.transformBidderParamKeywords
                    }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, o(a.keywords) && a.keywords.forEach(u), Object.keys(a).forEach((function(e) {
                        var r = b.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e], delete a[e])
                    }))), a
                }
            };

        function o(e) {
            return !!(b.isArray(e) && 0 < e.length)
        }

        function u(e) {
            o(e.value) && "" === e.value[0] && delete e.value
        }

        function C(r) {
            var s, o, a = {};
            if (a.sizes = y(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position && (a.position = {
                    above: 1,
                    below: 2
                } [r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes = y(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !b.isEmpty(r.params.keywords)) {
                var e = b.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(u), a.keywords = e
            }
            if ((r.mediaType === l.c || b.deepAccess(r, "mediaTypes.".concat(l.c))) && (a.ad_types.push(l.c), 0 === a.sizes.length && (a.sizes = y([1, 1])), r.nativeParams)) {
                var n = (s = r.nativeParams, o = {}, Object.keys(s).forEach((function(e) {
                    var r = p[e] && p[e].serverName || p[e] || e,
                        a = p[e] && p[e].requiredParams;
                    o[r] = f({}, a, s[e]);
                    var n = p[e] && p[e].minimumParams;
                    if (a && n) {
                        var t = Object.keys(s[e]),
                            i = Object.keys(a);
                        0 === t.filter((function(e) {
                            return !_()(i, e)
                        })).length && (o[r] = f({}, o[r], n))
                    }
                })), o);
                a[l.c] = {
                    layouts: [n]
                }
            }
            var t = b.deepAccess(r, "mediaTypes.".concat(l.d)),
                i = b.deepAccess(r, "mediaTypes.video.context");
            return (r.mediaType === l.d || t) && a.ad_types.push(l.d), (r.mediaType === l.d || t && "outstream" !== i) && (a.require_asset_url = !0), r.params.video && (a.video = {}, Object.keys(r.params.video).filter((function(e) {
                return _()(d, e)
            })).forEach((function(e) {
                return a.video[e] = r.params.video[e]
            }))), (b.isEmpty(r.mediaType) && b.isEmpty(r.mediaTypes) || r.mediaType === l.b || r.mediaTypes && r.mediaTypes[l.b]) && a.ad_types.push(l.b), a
        }

        function y(e) {
            var r = [],
                a = {};
            if (b.isArray(e) && 2 === e.length && !b.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === i(e))
                for (var n = 0; n < e.length; n++) {
                    var t = e[n];
                    (a = {}).width = parseInt(t[0], 10), a.height = parseInt(t[1], 10), r.push(a)
                }
            return r
        }

        function S(e) {
            return !!e.params.user
        }

        function E(e) {
            return !!parseInt(e.params.member, 10)
        }

        function A(e) {
            if (e.params) return !!e.params.app
        }

        function R(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function P(e) {
            return !!e.debug
        }

        function O(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === l.a
        }

        function j(e, r, a) {
            b.isEmpty(e.video) && (e.video = {}), e.video[r] = a
        }

        function g(e) {
            e.renderer.push((function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }.bind(null, e))
            }))
        }
        Object(m.registerBidder)(s)
    }
}, [190]);
pbjsChunk([184], {
    196: function(t, e, n) {
        t.exports = n(197)
    },
    197: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n.d(e, "spec", (function() {
            return s
        }));
        var r = n(1),
            v = n(11),
            y = n(0),
            o = n(35),
            b = n.n(o),
            a = n(7),
            i = n.n(a);

        function w(t, e) {
            return (function(t) {
                if (Array.isArray(t)) return t
            })(t) || (function(t, e) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = t[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    o = !0, a = t
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            })(t, e) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function h(t) {
            return (function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            })(t) || (function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            })(t) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }

        function c(t) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var g = function(t) {
                return Array.isArray(t) && 2 === t.length ? "".concat(t[0], "x").concat(t[1]) : t
            },
            A = function(t) {
                return t.split("x").map(Number)
            },
            j = function(t) {
                return i()(["300x250", "320x50"], t)
            },
            N = function(t) {
                return i()(["video", "native"], t)
            },
            x = function(t, e) {
                return "300x250" === e ? [e].concat(h(t)) : [].concat(h(t), [e])
            },
            S = function(t) {
                return "video" === t
            },
            I = function(t) {
                return "fullwidth" === t
            },
            T = function() {
                return encodeURIComponent(Object(y.getTopWindowUrl)())
            },
            s = {
                code: "audienceNetwork",
                supportedMediaTypes: ["banner", "video"],
                isBidRequestValid: function(t) {
                    return "object" === c(t.params) && "string" == typeof t.params.placementId && 0 < t.params.placementId.length && Array.isArray(t.sizes) && 0 < t.sizes.length && (!I(t.params.format) || t.sizes.map(g).some((function(t) {
                        return "300x250" === t
                    }))) && (N(t.params.format) || t.sizes.map(g).some(j))
                },
                buildRequests: function(t) {
                    var c = [],
                        s = [],
                        d = [],
                        l = [],
                        u = [],
                        p = [];
                    t.forEach((function(i) {
                        return i.sizes.map(g).filter((function(t) {
                            return e = t, n = i.params.format, I(n) && "300x250" === g(e) || N(n) || j(g(e));
                            var e, n
                        })).reduce(x, []).slice(0, 1).forEach((function(t) {
                            var e, n, r = w((e = t, n = i.params.format, I(n) ? ["300x250", null] : [e, n]), 2),
                                o = r[0],
                                a = r[1];
                            c.push(i.params.placementId), s.push(a || o), d.push(o), l.push(S(a) ? "" : "6.0.web"), u.push(i.params.platform), p.push(i.bidId)
                        }))
                    }));
                    var e = Boolean(window && window.location && "string" == typeof window.location.search && -1 !== window.location.search.indexOf("anhb_testmode")).toString(),
                        n = T(),
                        r = [].concat(h(u.filter(Boolean)), ["241394079772386"])[0],
                        o = Object(y.generateUUID)(),
                        a = {
                            placementids: c,
                            adformats: s,
                            testmode: e,
                            pageurl: n,
                            sdk: l,
                            adapterver: "1.3.0",
                            platform: r,
                            platver: "2.8.0-pre",
                            cb: o
                        },
                        i = b()(s, S);
                    if (-1 !== i) {
                        var f = w(A(d[i]), 2);
                        a.playerwidth = f[0], a.playerheight = f[1]
                    }
                    var m = Object(v.b)(a);
                    return [{
                        adformats: s,
                        data: m,
                        method: "GET",
                        requestIds: p,
                        sizes: d,
                        url: "https://an.facebook.com/v2/placementbid.json"
                    }]
                },
                interpretResponse: function(t, e) {
                    var n = t.body,
                        y = e.adformats,
                        b = e.requestIds,
                        h = e.sizes,
                        r = n.bids,
                        o = void 0 === r ? {} : r;
                    return Object.keys(o).map((function(t) {
                        return o[t]
                    })).reduce((function(t, e) {
                        return t.concat(e)
                    }), []).map((function(t, e) {
                        var n, r, o, a, i = t.bid_id,
                            c = t.placement_id,
                            s = t.bid_price_cents,
                            d = y[e],
                            l = w(A(g(h[e])), 2),
                            u = l[0],
                            p = l[1],
                            f = (n = c, o = i, a = "native" === (r = d) ? '<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>' : "", "<html>\n  <head>".concat("native" === r ? '<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}<\/script>' : "", '</head>\n  <body>\n    <div style="display:none;position:relative;">\n      <script type="text/javascript" src="https://connect.facebook.net/en_US/fbadnw60-tag.js" async><\/script>\n      <script type="text/javascript">\n        window.ADNW = window.ADNW || {};\n        window.ADNW.v60 = window.ADNW.v60 || {};\n        window.ADNW.v60.slots = window.ADNW.v60.slots || [];\n        window.ADNW.v60.slots.push({\n          rootElement: document.currentScript.parentElement,\n          placementid: \'').concat(n, "',\n          format: '").concat(r, "',\n          bidid: '").concat(o, "',\n          testmode: false,\n          onAdLoaded: function(rootElement) {\n            console.log('Audience Network [").concat(n, "] ad loaded');\n            rootElement.style.display = 'block';\n          },\n          onAdError: function(errorCode, errorMessage) {\n            console.log('Audience Network [").concat(n, "] error (' + errorCode + ') ' + errorMessage);\n          }\n        });\n      <\/script>\n      ").concat(a, "\n    </div>\n  </body>\n</html>")),
                            m = {
                                requestId: b[e],
                                cpm: s / 100,
                                width: u,
                                height: p,
                                ad: f,
                                ttl: 600,
                                creativeId: c,
                                netRevenue: !0,
                                currency: "USD",
                                hb_bidder: "fan",
                                fb_bidid: i,
                                fb_format: d,
                                fb_placementid: c
                            };
                        if (S(d)) {
                            var v = T();
                            m.mediaType = "video", m.vastUrl = "https://an.facebook.com/v1/instream/vast.xml?placementid=".concat(c, "&pageurl=").concat(v, "&playerwidth=").concat(u, "&playerheight=").concat(p, "&bidid=").concat(i), m.ttl = 3600
                        }
                        return m
                    }))
                },
                transformBidParams: function(t, e) {
                    return Object(y.convertTypes)({
                        placementId: "string"
                    }, t)
                }
            };
        Object(r.registerBidder)(s)
    }
}, [196]);
pbjsChunk([1], {
    230: function(n, t, e) {
        n.exports = e(231)
    },
    231: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "userCMP", (function() {
            return o
        })), e.d(t, "consentTimeout", (function() {
            return a
        })), e.d(t, "allowAuction", (function() {
            return s
        })), e.d(t, "staticConsentData", (function() {
            return i
        })), t.requestBidsHook = D, t.resetConsentData = function() {
            r = void 0, d.gdprDataHandler.setConsentData(null)
        }, t.setConfig = _;
        var o, a, s, i, r, u = e(0),
            c = e(3),
            d = e(8),
            l = e(7),
            f = e.n(l),
            g = e(232),
            p = e.n(g),
            m = "iab",
            C = 1e4,
            v = !0,
            w = !1,
            b = {
                iab: function(n, t, s) {
                    var e, o = (function() {
                            var t = {};

                            function e() {
                                t.getConsentData && t.getVendorConsents && n(t, s)
                            }
                            return {
                                consentDataCallback: function(n) {
                                    t.getConsentData = n, e()
                                },
                                vendorConsentsCallback: function(n) {
                                    t.getVendorConsents = n, e()
                                }
                            }
                        })(),
                        r = {};
                    try {
                        e = window.__cmp || u.getWindowTop().__cmp
                    } catch (n) {}
                    if (u.isFn(e)) e("getConsentData", null, o.consentDataCallback), e("getVendorConsents", null, o.vendorConsentsCallback);
                    else if (window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) c("getConsentData", o.consentDataCallback), c("getVendorConsents", o.vendorConsentsCallback);
                    else {
                        for (var a, i = window; !a;) {
                            try {
                                i.frames.__cmpLocator && (a = i)
                            } catch (n) {}
                            if (i === window.top) break;
                            i = i.parent
                        }
                        if (!a) return t("CMP not found.", s);
                        d("getConsentData", a, o.consentDataCallback), d("getVendorConsents", a, o.vendorConsentsCallback)
                    }

                    function c(o, a) {
                        var n = s.adUnits,
                            t = 1,
                            e = 1;
                        if (Array.isArray(n) && 0 < n.length) {
                            var i = u.getAdUnitSizes(n[0]);
                            t = i[0][0], e = i[0][1]
                        }
                        window.$sf.ext.register(t, e, (function(n, t) {
                            if ("cmpReturn" === n) {
                                var e = "getConsentData" === o ? t.vendorConsentData : t.vendorConsents;
                                a(e)
                            }
                        })), window.$sf.ext.cmp(o)
                    }

                    function d(n, i, t) {
                        function e(n) {
                            var t = "string" == typeof n.data && p()(n.data, "cmpReturn") ? JSON.parse(n.data) : n.data;
                            if (t.__cmpReturn && t.__cmpReturn.callId) {
                                var e = t.__cmpReturn;
                                void 0 !== r[e.callId] && (r[e.callId](e.returnValue, e.success), delete r[e.callId])
                            }
                        }
                        window.__cmp = function(n, t, e) {
                            var o = Math.random() + "",
                                a = {
                                    __cmpCall: {
                                        command: n,
                                        parameter: t,
                                        callId: o
                                    }
                                };
                            r[o] = e, i.postMessage(a, "*")
                        }, window.addEventListener("message", e, !1), window.__cmp(n, null, (function(n) {
                            window.removeEventListener("message", e, !1), t(n)
                        }))
                    }
                },
                static: function(n, t, e) {
                    n(i, e)
                }
            };

        function D(n, t) {
            var e = {
                context: this,
                args: [t],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return r ? k(null, e) : f()(Object.keys(b), o) ? (b[o].call(this, h, x, e), void(e.haveExited || (0 === a ? h(void 0, e) : e.timer = setTimeout(function(n) {
                x("CMP workflow exceeded timeout threshold.", n)
            }.bind(null, e), a)))) : (u.logWarn("CMP framework (".concat(o, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), e.nextFn.apply(e.context, e.args))
        }

        function h(n, t) {
            var e = n && n.getConsentData && n.getConsentData.gdprApplies;
            "boolean" == typeof e && (!0 !== e || u.isStr(n.getConsentData.consentData) && u.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length) ? (clearTimeout(t.timer), y(n), k(null, t)) : x("CMP returned unexpected value during lookup process.", t, n)
        }

        function x(n, t, e) {
            clearTimeout(t.timer), s && y(void 0), k(n, t, e)
        }

        function y(n) {
            r = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : void 0
            }, d.gdprDataHandler.setConsentData(r)
        }

        function k(n, t, e) {
            if (!1 === t.haveExited) {
                t.haveExited = !0;
                var o = t.context,
                    a = t.args,
                    i = t.nextFn;
                n ? s ? (u.logWarn(n + " Resuming auction without consent data as per consentManagement config.", e), i.apply(o, a)) : (u.logError(n + " Canceling auction as per consentManagement config.", e), "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : u.logError("Error executing bidsBackHandler")) : i.apply(o, a)
            }
        }

        function _(n) {
            u.isStr(n.cmpApi) ? o = n.cmpApi : (o = m, u.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(m, ")."))), u.isNumber(n.timeout) ? a = n.timeout : (a = C, u.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(C, ")."))), "boolean" == typeof n.allowAuctionWithoutConsent ? s = n.allowAuctionWithoutConsent : (s = v, u.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (".concat(v, ")."))), u.logInfo("consentManagement module has been activated..."), "static" === o && (u.isPlainObject(n.consentData) ? (i = n.consentData, a = 0) : u.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), w || pbjs.requestBids.before(D, 50), w = !0
        }
        c.config.getConfig("consentManagement", (function(n) {
            return _(n.consentManagement)
        }))
    },
    232: function(n, t, e) {
        e(233), n.exports = e(14).String.includes
    },
    233: function(n, t, e) {
        "use strict";
        var o = e(13),
            a = e(234),
            i = "includes";
        o(o.P + o.F * e(236)(i), "String", {
            includes: function(n) {
                return !!~a(this, n, i).indexOf(n, 1 < arguments.length ? arguments[1] : void 0)
            }
        })
    },
    234: function(n, t, e) {
        var o = e(235),
            a = e(32);
        n.exports = function(n, t, e) {
            if (o(t)) throw TypeError("String#" + e + " doesn't accept regex!");
            return String(a(n))
        }
    },
    235: function(n, t, e) {
        var o = e(16),
            a = e(31),
            i = e(15)("match");
        n.exports = function(n) {
            var t;
            return o(n) && (void 0 !== (t = n[i]) ? !!t : "RegExp" == a(n))
        }
    },
    236: function(n, t, e) {
        var o = e(15)("match");
        n.exports = function(t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[o] = !1, !"/./" [t](e)
                } catch (n) {}
            }
            return !0
        }
    }
}, [230]);
pbjsChunk([156], {
    264: function(e, t, i) {
        e.exports = i(265)
    },
    265: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), i.d(t, "spec", (function() {
            return a
        }));
        var g = i(0),
            r = i(1),
            d = i(2),
            m = i(3),
            n = "emx_digital",
            b = {
                validateSizes: function(e) {
                    return !(!g.isArray(e) || void 0 === e[0]) && e.every((function(e) {
                        return g.isArray(e) && 2 === e.length
                    }))
                }
            },
            a = {
                code: n,
                supportedMediaTypes: [d.b],
                isBidRequestValid: function(e) {
                    return !!e.params.tagid && "string" == typeof e.params.tagid && (void 0 === e.params.bidfloor || "string" == typeof e.params.bidfloor) && e.bidder === n && (b.validateSizes(e.mediaTypes.banner.sizes) || b.validateSizes(e.sizes))
                },
                buildRequests: function(e, t) {
                    var i = g.getTopWindowLocation(),
                        r = i.host,
                        d = i.href,
                        n = i.protocol,
                        a = {},
                        s = [],
                        o = t.auctionId,
                        p = m.config.getConfig("bidderTimeout"),
                        u = Date.now(),
                        c = location.protocol + "//hb.emxdgt.com?t=" + p + "&ts=" + u,
                        l = -1 < n.indexOf("https") ? 1 : 0;
                    return g._each(e, (function(e) {
                        var t = g.getBidIdParameter("tagid", e.params),
                            i = parseFloat(g.getBidIdParameter("bidfloor", e.params)) || 0,
                            r = e.mediaTypes.banner.sizes;
                        b.validateSizes(r) || (r = e.sizes);
                        var d = {
                            id: e.bidId,
                            tid: e.transactionId,
                            tagid: t,
                            secure: l,
                            banner: {
                                format: r.map((function(e) {
                                    return {
                                        w: e[0],
                                        h: e[1]
                                    }
                                })),
                                w: r[0][0],
                                h: r[0][1]
                            }
                        };
                        0 < i && (d.bidfloor = i), s.push(d)
                    })), a = {
                        id: o,
                        imp: s,
                        site: {
                            domain: r,
                            page: d
                        }
                    }, t.gdprConsent && (a.regs = {
                        ext: {
                            gdpr: !0 === t.gdprConsent.gdprApplies ? 1 : 0
                        }
                    }), t.gdprConsent && t.gdprConsent.gdprApplies && (a.user = {
                        ext: {
                            consent: t.gdprConsent.consentString
                        }
                    }), {
                        method: "POST",
                        url: c,
                        data: JSON.stringify(a),
                        options: {
                            withCredentials: !0
                        }
                    }
                },
                interpretResponse: function(e) {
                    var t = [],
                        i = e.body || {};
                    return i.seatbid && 0 < i.seatbid.length && i.seatbid[0].bid && i.seatbid.forEach((function(e) {
                        e = e.bid[0], t.push({
                            requestId: e.id,
                            cpm: e.price,
                            width: e.w,
                            height: e.h,
                            creativeId: e.crid || e.id,
                            dealId: e.dealid || null,
                            currency: "USD",
                            netRevenue: !0,
                            mediaType: d.b,
                            ad: decodeURIComponent(e.adm),
                            ttl: e.ttl
                        })
                    })), t
                },
                getUserSyncs: function(e) {
                    var t = [];
                    return e.iframeEnabled && t.push({
                        type: "iframe",
                        url: "//biddr.brealtime.com/check.html"
                    }), e.pixelEnabled && t.push({
                        type: "image",
                        url: "//edba.brealtime.com/"
                    }), t
                }
            };
        Object(r.registerBidder)(a)
    }
}, [264]);
pbjsChunk([0], {
    320: function(r, e, t) {
        r.exports = t(321)
    },
    321: function(r, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), t.d(e, "spec", (function() {
            return b
        }));
        var l = t(0),
            n = t(2),
            h = t(3),
            i = t(322),
            o = t.n(i),
            a = t(324),
            s = t.n(a),
            p = t(1);

        function g(r) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                return typeof r
            } : function(r) {
                return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            })(r)
        }
        var d = [n.b],
            f = 100,
            c = 35,
            m = !0,
            y = {
                JPY: 1
            };

        function u(r) {
            return o()(r) && 2 === r.length && s()(r[0]) && s()(r[1])
        }
        var b = {
            code: "ix",
            supportedMediaTypes: d,
            isBidRequestValid: function(r) {
                if (!u(r.params.size)) return !1;
                if (!(function(r, e) {
                        if (u(r)) return r[0] === e[0] && r[1] === e[1];
                        for (var t = 0; t < r.length; t++)
                            if (r[t][0] === e[0] && r[t][1] === e[1]) return !0;
                        return !1
                    })(r.sizes, r.params.size)) return !1;
                if (r.hasOwnProperty("mediaType") && "banner" !== r.mediaType) return !1;
                if (r.hasOwnProperty("mediaTypes") && !l.deepAccess(r, "mediaTypes.banner.sizes")) return !1;
                if ("string" != typeof r.params.siteId && "number" != typeof r.params.siteId) return !1;
                var e, t, n = r.params.hasOwnProperty("bidFloor"),
                    i = r.params.hasOwnProperty("bidFloorCur");
                return !n && !i || n && i && (e = r.params.bidFloor, t = r.params.bidFloorCur, Boolean("number" == typeof e && "string" == typeof t && t.match(/^[A-Z]{3}$/)))
            },
            buildRequests: function(r, e) {
                for (var t, n, i = [], o = null, a = null, s = "https://as-sec.casalemedia.com/cygnus", p = 0; p < r.length; p++) o = r[p], n = void 0, (n = {}).id = (t = o).bidId, n.banner = {}, n.banner.w = t.params.size[0], n.banner.h = t.params.size[1], n.banner.topframe = l.inIframe() ? 0 : 1, n.ext = {}, n.ext.siteID = t.params.siteId, !t.params.hasOwnProperty("id") || "string" != typeof t.params.id && "number" != typeof t.params.id ? n.ext.sid = "".concat(t.params.size[0], "x").concat(t.params.size[1]) : n.ext.sid = String(t.params.id), t.params.hasOwnProperty("bidFloor") && t.params.hasOwnProperty("bidFloorCur") && (n.bidfloor = t.params.bidFloor, n.bidfloorcur = t.params.bidFloorCur), a = n, i.push(a);
                var d = {};
                if (d.id = r[0].bidderRequestId, d.imp = i, d.site = {}, d.ext = {}, d.ext.source = "prebid", document.referrer && "" !== document.referrer && (d.site.ref = document.referrer), e) {
                    if (e.gdprConsent) {
                        var u = e.gdprConsent;
                        u.hasOwnProperty("gdprApplies") && (d.regs = {
                            ext: {
                                gdpr: u.gdprApplies ? 1 : 0
                            }
                        }), u.hasOwnProperty("consentString") && (d.user = {
                            ext: {
                                consent: u.consentString || ""
                            }
                        })
                    }
                    e.refererInfo && (d.site.page = e.refererInfo.referer, e.refererInfo.referer && 0 !== e.refererInfo.referer.indexOf("https") && (s = "http://as.casalemedia.com/cygnus"))
                }
                var f = {},
                    c = h.config.getConfig("ix");
                if (c) {
                    if ("object" === g(c.firstPartyData)) {
                        var m = c.firstPartyData,
                            y = "?";
                        for (var b in m) m.hasOwnProperty(b) && (y += "".concat(encodeURIComponent(b), "=").concat(encodeURIComponent(m[b]), "&"));
                        y = y.slice(0, -1), d.site.page += y
                    }
                    "number" == typeof c.timeout && (f.t = c.timeout)
                }
                return f.s = r[0].params.siteId, f.v = 7.2, f.r = JSON.stringify(d), f.ac = "j", f.sd = 1, {
                    method: "GET",
                    url: s,
                    data: f
                }
            },
            interpretResponse: function(r) {
                var e = [],
                    t = null;
                if (!r.hasOwnProperty("body") || !r.body.hasOwnProperty("seatbid")) return e;
                for (var n, i, o, a = r.body, s = a.seatbid, p = 0; p < s.length; p++)
                    if (s[p].hasOwnProperty("bid"))
                        for (var d = s[p].bid, u = 0; u < d.length; u++) n = d[u], i = a.cur, o = void 0, o = {}, y.hasOwnProperty(i) ? o.cpm = n.price / y[i] : o.cpm = n.price / f, o.requestId = n.impid, o.width = n.w, o.height = n.h, o.ad = n.adm, o.dealId = l.deepAccess(n, "ext.dealid"), o.ttl = c, o.netRevenue = m, o.currency = i, o.creativeId = n.hasOwnProperty("crid") ? n.crid : "-", t = o, e.push(t);
                return e
            },
            transformBidParams: function(r, e) {
                return l.convertTypes({
                    siteID: "number"
                }, r)
            }
        };
        Object(p.registerBidder)(b)
    },
    322: function(r, e, t) {
        t(323), r.exports = t(14).Array.isArray
    },
    323: function(r, e, t) {
        var n = t(13);
        n(n.S, "Array", {
            isArray: t(55)
        })
    },
    324: function(r, e, t) {
        t(325), r.exports = t(14).Number.isInteger
    },
    325: function(r, e, t) {
        var n = t(13);
        n(n.S, "Number", {
            isInteger: t(326)
        })
    },
    326: function(r, e, t) {
        var n = t(16),
            i = Math.floor;
        r.exports = function(r) {
            return !n(r) && isFinite(r) && i(r) === r
        }
    }
}, [320]);
pbjsChunk([105], {
    387: function(e, t, n) {
        e.exports = n(388)
    },
    388: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resetBoPixel = function() {
            h = !0
        }, n.d(t, "spec", (function() {
            return f
        }));
        var c = n(3),
            r = n(1),
            d = n(0),
            u = n(27),
            p = n(2),
            m = n(11);

        function s(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    a = !0, i = e
                } finally {
                    try {
                        r || null == o.return || o.return()
                    } finally {
                        if (a) throw i
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }
        var a = [p.b, p.d],
            l = "openx",
            i = "hb_pb",
            o = "2.1.6",
            h = !0;
        var f = {
            code: l,
            supportedMediaTypes: a,
            isBidRequestValid: function(e) {
                var t = e.params.delDomain || e.params.platform;
                return d.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < d.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t)
            },
            buildRequests: function(e, r) {
                if (0 === e.length) return [];
                var a = [],
                    t = s(e.reduce((function(e, t) {
                        var n;
                        return n = t, d.deepAccess(n, "mediaTypes.video") || n.mediaType === p.d ? e[0].push(t) : e[1].push(t), e
                    }), [
                        [],
                        []
                    ]), 2),
                    n = t[0],
                    i = t[1];
                return 0 < i.length && a.push(function(e, t) {
                    var n = [],
                        r = !1,
                        a = b(e, t),
                        i = d._map(e, (function(e) {
                            return e.params.unit
                        }));
                    a.aus = d._map(e, (function(e) {
                        return d.parseSizesInput(e.sizes).join(",")
                    })).join("|"), a.divIds = d._map(e, (function(e) {
                        return encodeURIComponent(e.adUnitCode)
                    })).join(","), i.some((function(e) {
                        return e
                    })) && (a.auid = i.join(","));
                    e.some((function(e) {
                        return e.params.doNotTrack
                    })) && (a.ns = 1);
                    e.some((function(e) {
                        return e.params.coppa
                    })) && (a.tfcd = 1);
                    e.forEach((function(a) {
                        if (a.params.customParams) {
                            var e = d._map(Object.keys(a.params.customParams), (function(e) {
                                    return t = e, n = a.params.customParams, r = n[t], d.isArray(r) && (r = r.join(",")), (t.toLowerCase() + "=" + r.toLowerCase()).replace("+", ".").replace("/", "_");
                                    var t, n, r
                                })),
                                t = window.btoa(e.join("&"));
                            r = !0, n.push(t)
                        } else n.push("")
                    })), r && (a.tps = n.join(","));
                    var s = [],
                        o = !1;
                    e.forEach((function(e) {
                        e.params.customFloor ? (s.push(Math.round(100 * e.params.customFloor) / 100 * 1e3), o = !0) : s.push(0)
                    })), o && (a.aumfs = s.join(","));
                    return {
                        method: "GET",
                        url: a.ph ? "//u.openx.net/w/1.0/arj" : "//".concat(e[0].params.delDomain, "/w/1.0/arj"),
                        data: a,
                        payload: {
                            bids: e,
                            startTime: new Date
                        }
                    }
                }(i, r)), 0 < n.length && n.forEach((function(e) {
                    var t, n;
                    a.push({
                        method: "GET",
                        url: (n = (function(e, t) {
                            var n, r, a = b([e], t),
                                i = d.deepAccess(e, "params.video") || {},
                                s = d.deepAccess(e, "mediaTypes.video.context"),
                                o = d.deepAccess(e, "mediaTypes.video.playerSize");
                            d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0]) ? (n = parseInt(e.sizes[0], 10), r = parseInt(e.sizes[1], 10)) : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (n = parseInt(e.sizes[0][0], 10), r = parseInt(e.sizes[0][1], 10)) : d.isArray(o) && 2 === o.length && (n = parseInt(o[0], 10), r = parseInt(o[1], 10));
                            Object.keys(i).forEach((function(e) {
                                "openrtb" === e ? (i[e].w = n || i[e].w, i[e].v = r || i[e].v, a[e] = JSON.stringify(i[e])) : e in a || "url" === e || (a[e] = i[e])
                            })), a.auid = e.params.unit, a.vwd = n || i.vwd, a.vht = r || i.vht, "outstream" === s && (a.vos = "101");
                            i.mimes && (a.vmimes = i.mimes);
                            return a
                        })(t = e, r)).ph ? "//u.openx.net/v/1.0/avjp" : "//".concat(t.params.delDomain, "/v/1.0/avjp"),
                        data: n,
                        payload: {
                            bid: t,
                            startTime: new Date
                        }
                    })
                })), a
            },
            interpretResponse: function(e, t) {
                var n = e.body;
                return (/avjp$/.test(t.url) ? p.d : p.b) === p.d ? (function(e, t) {
                    var n = t.bid,
                        r = t.startTime,
                        a = [];
                    if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                        var i = Object(m.c)(e.vastUrl).search || {},
                            s = {};
                        s.requestId = n.bidId, s.ttl = 300, s.netRevenue = !0, s.currency = e.currency, s.cpm = Number(e.pub_rev) / 1e3, s.width = e.width, s.height = e.height, s.creativeId = e.adid, s.vastUrl = e.vastUrl, s.mediaType = p.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, a.push(s), g(p.d, e, r)
                    }
                    return a
                })(n, t.payload) : (function(e, t) {
                    for (var n = t.bids, r = t.startTime, a = e.ads.ad, i = [], s = 0; s < a.length; s++) {
                        var o = a[s],
                            c = parseInt(o.idx, 10),
                            d = {};
                        if (d.requestId = n[c].bidId, o.pub_rev) {
                            d.cpm = Number(o.pub_rev) / 1e3;
                            var u = o.creative[0];
                            u && (d.width = u.width, d.height = u.height), d.creativeId = u.id, d.ad = o.html, o.deal_id && (d.dealId = o.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = o.currency, o.tbd && (d.tbd = o.tbd), d.ts = o.ts, d.meta = {}, o.brand_id && (d.meta.brandId = o.brand_id), i.push(d), g(p.b, o, r)
                        }
                    }
                    return i
                })(n, t.payload)
            },
            getUserSyncs: function(e, t) {
                if (e.iframeEnabled || e.pixelEnabled) return [{
                    type: e.iframeEnabled ? "iframe" : "image",
                    url: d.deepAccess(t, "0.body.ads.pixels") || d.deepAccess(t, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                }]
            },
            transformBidParams: function(e, t) {
                return d.convertTypes({
                    unit: "string",
                    customFloor: "number"
                }, e)
            }
        };

        function v(t) {
            for (var e in t) t.hasOwnProperty(e) && (t[e] || delete t[e]);
            return d._map(Object.keys(t), (function(e) {
                return "".concat(e, "=").concat(t[e])
            })).join("&")
        }

        function b(e, t) {
            var n, r = d.inIframe();
            if (n = {
                    ju: c.config.getConfig("pageUrl") || d.getTopWindowUrl(),
                    jr: d.getTopWindowReferrer(),
                    ch: document.charSet || document.characterSet,
                    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                    ifr: r,
                    tz: (new Date).getTimezoneOffset(),
                    tws: (function(e) {
                        var t, n, r, a = window,
                            i = document,
                            s = i.documentElement;
                        if (e) {
                            try {
                                a = window.top, i = window.top.document
                            } catch (e) {
                                return
                            }
                            s = i.documentElement, r = i.body, t = a.innerWidth || s.clientWidth || r.clientWidth, n = a.innerHeight || s.clientHeight || r.clientHeight
                        } else s = i.documentElement, t = a.innerWidth || s.clientWidth, n = a.innerHeight || s.clientHeight;
                        return "".concat(t, "x").concat(n)
                    })(r),
                    be: 1,
                    bc: e[0].params.bc || "".concat(i, "_").concat(o),
                    dddid: d._map(e, (function(e) {
                        return e.transactionId
                    })).join(","),
                    nocache: (new Date).getTime()
                }, e[0].params.platform && (n.ph = e[0].params.platform), d.deepAccess(t, "gdprConsent")) {
                var a = t.gdprConsent;
                void 0 !== a.consentString && (n.gdpr_consent = a.consentString), void 0 !== a.gdprApplies && (n.gdpr = a.gdprApplies ? 1 : 0), "iab" === c.config.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
            }
            return e[0].crumbs && e[0].crumbs.pubcid && (n.pubcid = e[0].crumbs.pubcid), n
        }

        function g(e, t, n) {
            if (h) {
                h = !1;
                var r, a = c.config.getConfig("bidderTimeout");
                window.PREBID_TIMEOUT && (a = Math.min(window.PREBID_TIMEOUT, a));
                var i = {
                    bd: +new Date - n,
                    bp: t.pub_rev,
                    br: "0",
                    bs: d.getTopWindowLocation().hostname,
                    bt: a,
                    ts: t.ts
                };
                if (i.br = i.bt < i.bd ? "t" : "p", e === p.d) {
                    var s = Object(m.c)(t.colo);
                    i.ph = t.ph, r = "//".concat(s.hostname, "/w/1.0/bo?").concat(v(i))
                } else {
                    var o = d.deepAccess(t, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                    o && 1 < o.length && (r = "".concat(o[1], "bo?").concat(v(i)))
                }
                r && u.a.registerSync("image", l, r)
            }
        }
        Object(r.registerBidder)(f)
    }
}, [387]);
pbjsChunk([14], {
    417: function(e, r, t) {
        e.exports = t(418)
    },
    418: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.resetSyncedStatus = function() {
            E = !1
        }, r.PrebidServer = k;
        var i = t(45),
            l = t(22),
            f = t(0),
            u = t(5),
            b = t(4),
            p = (t.n(b), t(8)),
            n = t(3),
            v = t(2),
            g = t(1),
            d = t(9),
            m = t.n(d),
            a = t(7),
            h = t.n(a),
            c = t(419);

        function o(e, r) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, r) {
                var t = [],
                    i = !0,
                    n = !1,
                    d = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(i = (a = c.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                } catch (e) {
                    n = !0, d = e
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (n) throw d
                    }
                }
                return t
            })(e, r) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function y() {
            return (y = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function _(e) {
            return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var x, S = n.config.getConfig,
            I = b.S2S.SRC,
            E = !1,
            s = {
                enabled: !1,
                timeout: 1e3,
                maxBids: 1,
                adapter: "prebidServer",
                adapterOptions: {}
            };

        function T(e) {
            if (0 !== e.length) {
                var r, t, i, n, d = e.pop();
                d.no_cookie ? (r = d.usersync.type, t = d.usersync.url, i = d.bidder, n = f.bind.call(T, null, e), t ? "image" === r || "redirect" === r ? (f.logMessage('Invoking image pixel user sync for bidder: "'.concat(i, '"')), f.triggerPixel(t, n)) : "iframe" == r ? (f.logMessage('Invoking iframe user sync for bidder: "'.concat(i, '"')), f.insertUserSyncIframe(t, n)) : (f.logError('User sync type "'.concat(r, '" not supported for bidder: "').concat(i, '"')), n()) : (f.logError('No sync url for bidder "'.concat(i, '": ').concat(t)), n())) : T(e)
            }
        }

        function w() {
            var e, r = (e = window.DigiTrust && (n.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                member: "T9QSFKPDN9"
            }))) && e.success && e.identity || null;
            return !r || r.privacy && r.privacy.optout ? null : {
                id: r.id,
                keyv: r.keyv,
                pref: 0
            }
        }

        function C(e) {
            e && ("object" === _(n.config.getConfig("app")) ? (e.app = n.config.getConfig("app"), e.app.publisher = {
                id: x.accountId
            }) : e.site = {
                publisher: {
                    id: x.accountId
                },
                page: f.getTopWindowUrl()
            }, "object" === _(n.config.getConfig("device")) && (e.device = n.config.getConfig("device")), e.device || (e.device = {}), e.device.w || (e.device.w = window.innerWidth), e.device.h || (e.device.h = window.innerHeight))
        }
        n.config.setDefaults({
            s2sConfig: s
        }), S("s2sConfig", (function(e) {
            return (function(r) {
                if (r.defaultVendor) {
                    var t = r.defaultVendor,
                        i = Object.keys(r);
                    if (!c.a[t]) return f.logError("Incorrect or unavailable prebid server default vendor option: " + t), !1;
                    Object.keys(c.a[t]).forEach((function(e) {
                        s[e] !== r[e] && h()(i, e) || (r[e] = c.a[t][e])
                    }))
                }
                var n = Object.keys(r);
                0 < ["accountId", "bidders", "endpoint"].filter((function(e) {
                    return !h()(n, e) && (f.logError(e + " missing in server to server config"), !0)
                })).length || (x = r)
            })(e.s2sConfig)
        }));
        var O = {
                buildRequest: function(e, r, t) {
                    t.forEach((function(e) {
                        e.bids.forEach((function(e) {
                            var r = p.default.bidderRegistry[e.bidder];
                            r && r.getSpec().transformBidParams && (e.params = r.getSpec().transformBidParams(e.params, j()))
                        }))
                    })), t.forEach((function(e) {
                        var r, i;
                        e.sizes = (r = e, i = [], f.parseSizesInput(r.sizes).forEach((function(e) {
                            var r = e.split("x"),
                                t = {
                                    w: parseInt(r[0]),
                                    h: parseInt(r[1])
                                };
                            i.push(t)
                        })), i);
                        var t = f.deepAccess(e, "mediaTypes.video");
                        t && (e.video = y({}, t), delete e.mediaTypes, e.media_types = [v.d])
                    }));
                    var i = {
                        account_id: x.accountId,
                        tid: e.tid,
                        max_bids: x.maxBids,
                        timeout_millis: x.timeout,
                        secure: x.secure,
                        cache_markup: 1 === x.cacheMarkup || 2 === x.cacheMarkup ? x.cacheMarkup : 0,
                        url: f.getTopWindowUrl(),
                        prebid_version: "2.8.0-pre",
                        ad_units: t,
                        is_debug: !!S("debug")
                    };
                    C(i);
                    var n = w();
                    return n && (i.digiTrust = n), i
                },
                interpretResponse: function(d, a, e) {
                    var c = [];
                    return "OK" !== d.status && "no_cookie" !== d.status || (d.bidder_status && d.bidder_status.forEach((function(r) {
                        r.error && f.logWarn("Prebid Server returned error: '".concat(r.error, "' for ").concat(r.bidder)), a.filter((function(e) {
                            return e.bidderCode === r.bidder
                        })).forEach((function(e) {
                            return (e.bids || []).forEach((function(e) {
                                return e.serverResponseTimeMs = r.response_time_ms
                            }))
                        }))
                    })), d.bids && d.bids.forEach((function(e) {
                        var r = f.getBidRequest(e.bid_id, a),
                            t = e.price,
                            i = 0 !== t ? b.STATUS.GOOD : b.STATUS.NO_BID,
                            n = Object(l.a)(i, r);
                        n.source = I, n.creative_id = e.creative_id, n.bidderCode = e.bidder, n.cpm = t, e.cache_id && (n.cache_id = e.cache_id), e.cache_url && (n.cache_url = e.cache_url), e.media_type === v.d ? (n.mediaType = v.d, e.adm && (n.vastXml = e.adm), e.nurl && (n.vastUrl = e.nurl), e.cache_id && e.cache_url && (n.videoCacheKey = e.cache_id, n.vastUrl = e.cache_url)) : e.adm && e.nurl ? (n.ad = e.adm, n.ad += f.createTrackPixelHtml(decodeURIComponent(e.nurl))) : e.adm ? n.ad = e.adm : e.nurl && (n.adUrl = e.nurl), n.width = e.width, n.height = e.height, n.adserverTargeting = e.ad_server_targeting, e.deal_id && (n.dealId = e.deal_id), n.requestId = r.bidId || r.bid_Id, n.creativeId = e.creative_id, n.ttl = e.ttl ? e.ttl : 60, n.currency = e.currency ? e.currency : "USD", n.netRevenue = !e.netRevenue || e.netRevenue, d.burl && (n.burl = d.burl), c.push({
                            adUnit: e.code,
                            bid: n
                        })
                    }))), c
                }
            },
            U = {},
            R = {
                buildRequest: function(e, r, t) {
                    var c = [],
                        s = {};
                    t.forEach((function(r) {
                        var e;
                        (r.bids.forEach((function(e) {
                            U["".concat(r.code).concat(e.bidder)] = e.bid_id, p.default.aliasRegistry[e.bidder] && (s[e.bidder] = p.default.aliasRegistry[e.bidder])
                        })), f.isEmpty(r.mediaTypes)) && (e = {
                            format: r.sizes.map((function(e) {
                                return {
                                    w: e[0],
                                    h: e[1]
                                }
                            }))
                        });
                        var t, i = f.deepAccess(r, "mediaTypes.banner");
                        i && i.sizes && (e = {
                            format: f.parseSizesInput(i.sizes).map((function(e) {
                                var r = o(e.split("x"), 2),
                                    t = r[0],
                                    i = r[1];
                                return {
                                    w: parseInt(t, 10),
                                    h: parseInt(i, 10)
                                }
                            }))
                        });
                        var n = f.deepAccess(r, "mediaTypes.video");
                        f.isEmpty(n) || (t = n);
                        var d = r.bids.reduce((function(e, r) {
                                var t = p.default.bidderRegistry[r.bidder];
                                return t && t.getSpec().transformBidParams && (r.params = t.getSpec().transformBidParams(r.params, j())), e[r.bidder] = x.adapterOptions && x.adapterOptions[r.bidder] ? y({}, r.params, x.adapterOptions[r.bidder]) : r.params, e
                            }), {}),
                            a = {
                                id: r.code,
                                ext: d,
                                secure: x.secure
                            };
                        e && (a.banner = e), t && (a.video = t), c.push(a)
                    }));
                    var i = {
                        id: e.tid,
                        source: {
                            tid: e.tid
                        },
                        tmax: x.timeout,
                        imp: c,
                        test: S("debug") ? 1 : 0,
                        ext: {
                            prebid: {
                                targeting: {
                                    includewinners: !0,
                                    includebidderkeys: !1
                                }
                            }
                        }
                    };
                    x.extPrebid && "object" === _(x.extPrebid) && (i.ext.prebid = y(i.ext.prebid, x.extPrebid)), C(i);
                    var n = w();
                    if (n && (i.user = {
                            ext: {
                                digitrust: n
                            }
                        }), f.isEmpty(s) || (i.ext.prebid.aliases = s), r && r[0].userId && "object" === _(r[0].userId) && (i.user || (i.user = {}), i.user.ext || (i.user.ext = {}), i.user.ext.tpid || (i.user.ext.tpid = {}), y(i.user.ext.tpid, r[0].userId)), r && r[0].gdprConsent) {
                        var d;
                        "boolean" == typeof r[0].gdprConsent.gdprApplies && (d = r[0].gdprConsent.gdprApplies ? 1 : 0), i.regs ? i.regs.ext ? i.regs.ext.gdpr = d : i.regs.ext = {
                            gdpr: d
                        } : i.regs = {
                            ext: {
                                gdpr: d
                            }
                        };
                        var a = r[0].gdprConsent.consentString;
                        i.user ? i.user.ext ? i.user.ext.consent = a : i.user.ext = {
                            consent: a
                        } : i.user = {
                            ext: {
                                consent: a
                            }
                        }
                    }
                    return i
                },
                interpretResponse: function(o, u, e) {
                    var p = [];
                    return o.seatbid && o.seatbid.forEach((function(s) {
                        (s.bid || []).forEach((function(e) {
                            var r, t = "".concat(e.impid).concat(s.seat);
                            U[t] && (r = f.getBidRequest(U[t], u));
                            var i = e.price,
                                n = 0 !== i ? b.STATUS.GOOD : b.STATUS.NO_BID,
                                d = Object(l.a)(n, r || {
                                    bidder: s.seat,
                                    src: I
                                });
                            d.cpm = i;
                            var a = f.deepAccess(o, ["ext", "responsetimemillis", s.seat].join("."));
                            r && a && (r.serverResponseTimeMs = a);
                            var c = f.deepAccess(e, "ext.prebid.targeting");
                            c && "object" === _(c) && (d.adserverTargeting = c), f.deepAccess(e, "ext.prebid.type") === v.d ? (d.mediaType = v.d, e.ext.prebid.cache && "object" === _(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (d.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, d.vastUrl = e.ext.prebid.cache.vastXml.url) : c && c.hb_uuid && c.hb_cache_host && c.hb_cache_path && (d.videoCacheKey = c.hb_uuid, d.vastUrl = "https://".concat(c.hb_cache_host).concat(c.hb_cache_path, "?uuid=").concat(c.hb_uuid)), e.adm && (d.vastXml = e.adm), !d.vastUrl && e.nurl && (d.vastUrl = e.nurl)) : e.adm && e.nurl ? (d.ad = e.adm, d.ad += f.createTrackPixelHtml(decodeURIComponent(e.nurl))) : e.adm ? d.ad = e.adm : e.nurl && (d.adUrl = e.nurl), d.width = e.w, d.height = e.h, e.dealid && (d.dealId = e.dealid), d.requestId = r.bidId || r.bid_Id, d.creative_id = e.crid, d.creativeId = e.crid, e.burl && (d.burl = e.burl), d.ttl = e.ttl ? e.ttl : 60, d.currency = e.currency ? e.currency : "USD", d.netRevenue = !e.netRevenue || e.netRevenue, p.push({
                                adUnit: e.impid,
                                bid: d
                            })
                        }))
                    })), p
                }
            },
            j = function() {
                return ~(x && x.endpoint || "").indexOf("/openrtb2/")
            },
            A = function() {
                return j() ? R : O
            };

        function k() {
            var e = new i.a("prebidServer");
            return e.callBids = function(e, r, t, i, n) {
                var d = f.deepClone(e.ad_units).filter((function(e) {
                        return e.sizes && e.sizes.length
                    })),
                    a = d.map((function(e) {
                        return e.bids.map((function(e) {
                            return e.bidder
                        })).filter(f.uniques)
                    })).reduce(f.flatten).filter(f.uniques);
                if (x && x.syncEndpoint) {
                    var c = Array.isArray(r) && 0 < r.length ? r[0].gdprConsent : void 0;
                    !(function(e, r) {
                        if (!E) {
                            E = !0;
                            var t = {
                                    uuid: f.generateUUID(),
                                    bidders: e,
                                    account: x.accountId
                                },
                                i = x.userSyncLimit;
                            f.isNumber(i) && 0 < i && (t.limit = i), r && (void 0 !== r.consentString && (t.gdpr = r.gdprApplies ? 1 : 0), !1 !== r.gdprApplies && (t.gdpr_consent = r.consentString));
                            var n = JSON.stringify(t);
                            Object(u.a)(x.syncEndpoint, (function(e) {
                                try {
                                    T((e = JSON.parse(e)).bidder_status)
                                } catch (e) {
                                    f.logError(e)
                                }
                            }), n, {
                                contentType: "text/plain",
                                withCredentials: !0
                            })
                        }
                    })(x.bidders, c)
                }
                var s = A().buildRequest(e, r, d),
                    o = JSON.stringify(s);
                n(x.endpoint, {
                    success: function(e) {
                        return (function(e, r, i, n, t) {
                            var d;
                            try {
                                d = JSON.parse(e), A().interpretResponse(d, i, r).forEach((function(e) {
                                    var r = e.adUnit,
                                        t = e.bid;
                                    Object(g.isValid)(r, t, i) && n(r, t)
                                })), i.forEach((function(e) {
                                    return m.a.emit(b.EVENTS.BIDDER_DONE, e)
                                }))
                            } catch (e) {
                                f.logError(e)
                            }(!d || d.status && h()(d.status, "Error")) && f.logError("error parsing response: ", d.status);
                            t(), a = r, a.forEach((function(e) {
                                var r = p.default.getBidAdapter(e);
                                r && r.registerSyncs && r.registerSyncs([])
                            }));
                            var a
                        })(e, a, r, t, i)
                    },
                    error: i
                }, o, {
                    contentType: "text/plain",
                    withCredentials: !0
                })
            }, y(this, {
                callBids: e.callBids,
                setBidderCode: e.setBidderCode,
                type: I
            })
        }
        p.default.registerBidAdapter(new k, "prebidServer")
    },
    419: function(e, r, t) {
        "use strict";
        t.d(r, "a", (function() {
            return i
        }));
        var i = {
            appnexus: {
                adapter: "prebidServer",
                enabled: !0,
                endpoint: "//prebid.adnxs.com/pbs/v1/openrtb2/auction",
                syncEndpoint: "//prebid.adnxs.com/pbs/v1/cookie_sync",
                timeout: 1e3
            },
            rubicon: {
                adapter: "prebidServer",
                enabled: !0,
                endpoint: "//prebid-server.rubiconproject.com/openrtb2/auction",
                syncEndpoint: "//prebid-server.rubiconproject.com/cookie_sync",
                timeout: 500
            }
        }
    }
}, [417]);
pbjsChunk([8], {
    460: function(e, t, n) {
        e.exports = n(461)
    },
    461: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "SEND_TIMEOUT", (function() {
            return S
        }));
        var i = n(6),
            d = n(8),
            r = n(4),
            o = n.n(r),
            l = n(5),
            p = n(3),
            f = n(0);

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }
        var g, a = o.a.EVENTS,
            m = a.AUCTION_INIT,
            v = a.AUCTION_END,
            I = a.BID_REQUESTED,
            T = a.BID_RESPONSE,
            h = a.BIDDER_DONE,
            E = a.BID_TIMEOUT,
            A = a.BID_WON,
            U = a.SET_TARGETING,
            s = o.a.STATUS,
            O = s.GOOD,
            D = s.NO_BID;
        p.config.getConfig("s2sConfig", (function(e) {
            var t = e.s2sConfig;
            g = t
        }));
        var S = 3e3,
            N = {
                auctions: {},
                targeting: {},
                timeouts: {}
            };

        function _(a, s) {
            return s.reduce((function(e, t, n) {
                if ("function" == typeof t) return e;
                var i = t,
                    r = t.match(/^(.+?)\sas\s(.+?)$/i);
                r && (t = r[1], i = r[2]);
                var o = a[t];
                return "function" == typeof s[n + 1] && (o = s[n + 1](o, e)), void 0 !== o && (e[i] = o), e
            }), {})
        }

        function C(i) {
            return Object.keys(i).reduce((function(e, t) {
                var n = i[t];
                return "number" == typeof n ? n = n.toFixed(3) : "string" != typeof n && (n = String(n)), e[t] = n, e
            }), {})
        }

        function j(e) {
            return {
                width: e.w || e[0],
                height: e.h || e[1]
            }
        }

        function k(e) {
            return -1 !== ["banner", "native", "video"].indexOf(e)
        }

        function q(e, t) {
            function o(e) {
                return _(e, ["bidder", "bidId", "status", "error", "source", function(e, t) {
                    return e || (g && Array.isArray(g.bidders) && -1 !== g.bidders.indexOf(t.bidder) ? "server" : "client")
                }, "clientLatencyMillis", "serverLatencyMillis", "params", "bidResponse", function(e) {
                    return e ? _(e, ["bidPriceUSD", "dealId", "dimensions", "mediaType"]) : void 0
                }])
            }

            function i(e) {
                return y(o(e), _(e.adUnit, ["adUnitCode", "transactionId", "videoAdFormat", function() {
                    return e.videoAdFormat
                }, "mediaTypes"]), {
                    adserverTargeting: C(N.targeting[e.adUnit.adUnitCode] || {}),
                    bidwonStatus: "success",
                    accountId: w,
                    siteId: e.siteId,
                    zoneId: e.zoneId,
                    samplingFactor: M
                })
            }
            var n = p.config.getConfig("pageUrl") || f.getTopWindowUrl(),
                r = {
                    eventTimeMillis: Date.now(),
                    integration: "pbjs",
                    version: "2.8.0-pre",
                    referrerUri: n
                },
                a = N.auctions[e];
            if (a && !a.sent) {
                var s = Object.keys(a.bids).reduce((function(e, t) {
                    var n = a.bids[t],
                        i = e[n.adUnit.adUnitCode];
                    i || ((i = e[n.adUnit.adUnitCode] = _(n.adUnit, ["adUnitCode", "transactionId", "mediaTypes", "dimensions", "adserverTargeting", function() {
                        return C(N.targeting[n.adUnit.adUnitCode] || {})
                    }])).bids = []), i.siteId && i.zoneId || -1 === F.indexOf(n.bidder) || f.deepAccess(n, "params.accountId") == w && (i.accountId = parseInt(w), i.siteId = parseInt(f.deepAccess(n, "params.siteId")), i.zoneId = parseInt(f.deepAccess(n, "params.zoneId"))), n.videoAdFormat && !i.videoAdFormat && (i.videoAdFormat = n.videoAdFormat);
                    var r = ["error", "no-bid", "success"];
                    return r.indexOf(n.status) > r.indexOf(i.status) && (i.status = n.status), i.bids.push(o(n)), e
                }), {});
                Object.keys(a.bids).forEach((function(e) {
                    var t = a.bids[e].adUnit.adUnitCode;
                    y(a.bids[e], _(s[t], ["accountId", "siteId", "zoneId"]))
                }));
                var c = {
                    clientTimeoutMillis: a.timeout,
                    samplingFactor: M,
                    accountId: w,
                    adUnits: Object.keys(s).map((function(e) {
                        return s[e]
                    }))
                };
                g && (c.serverTimeoutMillis = g.timeout), r.auctions = [c];
                var u = Object.keys(a.bidsWon).reduce((function(e, t) {
                    var n = a.bidsWon[t];
                    return n && e.push(i(a.bids[n])), e
                }), []);
                0 < u.length && (r.bidsWon = u), a.sent = !0
            } else t && a && a.bids[t] && (r.bidsWon = [i(a.bids[t])]);
            Object(l.a)(this.getUrl(), null, JSON.stringify(r), {
                contentType: "application/json"
            })
        }
        var w, M = 1,
            F = ["rubicon"];
        var c = Object(i.a)({
                analyticsType: "endpoint"
            }),
            u = y({}, c, {
                enableAnalytics: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = !1;
                    M = 1, "object" === b(e.options) && (e.options.accountId && (w = Number(e.options.accountId)), e.options.endpoint ? this.getUrl = function() {
                        return e.options.endpoint
                    } : (f.logError("required endpoint missing from rubicon analytics"), t = !0), void 0 !== e.options.sampling && (M = 1 / parseFloat(e.options.sampling)), void 0 !== e.options.samplingFactor && (void 0 !== e.options.sampling && f.logWarn("Both options.samplingFactor and options.sampling enabled in rubicon analytics, defaulting to samplingFactor"), M = parseFloat(e.options.samplingFactor), e.options.sampling = 1 / M));
                    var n = [1, 10, 20, 40, 100]; - 1 === n.indexOf(M) ? (t = !0, f.logError("invalid samplingFactor for rubicon analytics: " + M + ", must be one of " + n.join(", "))) : w || (t = !0, f.logError("required accountId missing for rubicon analytics")), t || c.enableAnalytics.call(this, e)
                },
                disableAnalytics: function() {
                    this.getUrl = c.getUrl, w = null, c.disableAnalytics.apply(this, arguments)
                },
                track: function(e) {
                    var t, n, i, r = this,
                        o = e.eventType,
                        a = e.args;
                    switch (o) {
                        case m:
                            i = d.default.aliasRegistry, Object.keys(i).forEach((function(e) {
                                "rubicon" === i[e] && F.push(e)
                            }));
                            var s = _(a, ["timestamp", "timeout"]);
                            s.bids = {}, s.bidsWon = {}, N.auctions[a.auctionId] = s;
                            break;
                        case I:
                            y(N.auctions[a.auctionId].bids, a.bids.reduce((function(e, i) {
                                return N.auctions[a.auctionId].bidsWon[i.adUnitCode] = !1, e[i.bidId] = _(i, ["bidder", function(e) {
                                    return e.toLowerCase()
                                }, "bidId", "status", function() {
                                    return "no-bid"
                                }, "finalSource as source", "params", function(e, t) {
                                    switch (t.bidder) {
                                        case "rubicon":
                                            return _(e, ["accountId", "siteId", "zoneId"])
                                    }
                                }, "videoAdFormat", function(e, t) {
                                    if ("rubicon" === t.bidder) return {
                                        201: "pre-roll",
                                        202: "interstitial",
                                        203: "outstream",
                                        204: "mid-roll",
                                        205: "post-roll",
                                        207: "vertical"
                                    } [f.deepAccess(i, "params.video.size_id")];
                                    var n = parseInt(f.deepAccess(i, "params.video.startdelay"), 10);
                                    return isNaN(n) ? void 0 : 0 < n ? "mid-roll" : {
                                        0: "pre-roll",
                                        "-1": "mid-roll",
                                        "-2": "post-roll"
                                    } [n]
                                }, "adUnit", function() {
                                    return _(i, ["adUnitCode", "transactionId", "sizes as dimensions", function(e) {
                                        return e.map(j)
                                    }, "mediaTypes", function(e) {
                                        return i.mediaType && k(i.mediaType) ? [i.mediaType] : Array.isArray(e) ? e.filter(k) : "object" === b(e) ? (i.sizes || (i.dimensions = [], f._each(e, (function(e) {
                                            return i.dimensions = i.dimensions.concat(e.sizes.map(j))
                                        }))), Object.keys(e).filter(k)) : ["banner"]
                                    }])
                                }]), e
                            }), {}));
                            break;
                        case T:
                            var c = N.auctions[a.auctionId].bids[a.requestId];
                            if (!c) {
                                f.logError("Rubicon Anlytics Adapter Error: Could not find associated bid request for bid response with requestId: ", a.requestId);
                                break
                            }
                            switch (c.source = (void 0 === (n = c.source || a.source) ? n = "client" : "s2s" === n && (n = "server"), n.toLowerCase()), a.getStatusCode()) {
                                case O:
                                    c.status = "success", delete c.error;
                                    break;
                                case D:
                                    c.status = "no-bid", delete c.error;
                                    break;
                                default:
                                    c.status = "error", c.error = {
                                        code: "request-error"
                                    }
                            }
                            c.clientLatencyMillis = Date.now() - N.auctions[a.auctionId].timestamp, c.bidResponse = _(t = a, ["getCpmInNewCurrency as bidPriceUSD", function(e) {
                                return "string" == typeof t.currency && "USD" === t.currency.toUpperCase() ? Number(t.cpm) : "function" == typeof e ? Number(e("USD")) : void 0
                            }, "dealId", "status", "mediaType", "dimensions", function() {
                                return _(t, ["width", "height"])
                            }]);
                            break;
                        case h:
                            a.bids.forEach((function(e) {
                                var t = N.auctions[e.auctionId].bids[e.bidId || e.requestId];
                                void 0 !== e.serverResponseTimeMs && (t.serverLatencyMillis = e.serverResponseTimeMs), t.status || (t.status = "no-bid"), t.clientLatencyMillis || (t.clientLatencyMillis = Date.now() - N.auctions[e.auctionId].timestamp)
                            }));
                            break;
                        case U:
                            y(N.targeting, a);
                            break;
                        case A:
                            var u = N.auctions[a.auctionId];
                            u.bidsWon[a.adUnitCode] = a.requestId, !0 === u.sent ? q.call(this, a.auctionId, a.requestId) : Object.keys(u.bidsWon).reduce((function(e, t) {
                                return e = e && u.bidsWon[t]
                            }), !0) && (clearTimeout(N.timeouts[a.auctionId]), delete N.timeouts[a.auctionId], q.call(this, a.auctionId));
                            break;
                        case v:
                            N.timeouts[a.auctionId] = setTimeout((function() {
                                q.call(r, a.auctionId)
                            }), S);
                            break;
                        case E:
                            a.forEach((function(e) {
                                var t = N.auctions[e.auctionId].bids[e.bidId || e.requestId];
                                t.status = "error", t.error = {
                                    code: "timeout-error"
                                }
                            }))
                    }
                }
            });
        d.default.registerAnalyticsAdapter({
            adapter: u,
            code: "rubicon"
        }), t.default = u
    },
    6: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var r, o = e.url,
                t = e.analyticsType,
                a = e.global,
                i = e.handler,
                s = [],
                c = 0,
                n = !0;
            (t === S || N) && (function() {
                if (n) {
                    for (var e = 0; e < s.length; e++) s[e]();
                    s.push = function(e) {
                        e()
                    }, n = !1
                }
                y.logMessage("event count sent to ".concat(a, ": ").concat(c))
            })();
            return {
                track: function(e) {
                    var t = e.eventType,
                        n = e.args;
                    this.getAdapterType() === N && window[a](i, t, n);
                    this.getAdapterType() === S && function(e) {
                        var t = e.eventType,
                            n = e.args,
                            i = e.callback;
                        Object(l.a)(o, i, JSON.stringify({
                            eventType: t,
                            args: n
                        }))
                    }.apply(void 0, arguments)
                },
                enqueue: u,
                enableAnalytics: d,
                disableAnalytics: function() {
                    y._each(r, (function(e, t) {
                        b.off(t, e)
                    })), this.enableAnalytics = this._oldEnable ? this._oldEnable : d
                },
                getAdapterType: function() {
                    return t
                },
                getGlobal: function() {
                    return a
                },
                getHandler: function() {
                    return i
                },
                getUrl: function() {
                    return o
                }
            };

            function u(e) {
                var t = e.eventType,
                    n = e.args,
                    i = this;
                a && window[a] && t && n ? this.track({
                    eventType: t,
                    args: n
                }) : s.push((function() {
                    c++, i.track({
                        eventType: t,
                        args: n
                    })
                }))
            }

            function d(t) {
                var e, n = this,
                    i = this;
                "object" !== f(t) || "object" !== f(t.options) || (void 0 === t.options.sampling || Math.random() < parseFloat(t.options.sampling)) ? (b.getEvents().forEach((function(e) {
                    if (e) {
                        var t = e.eventType,
                            n = e.args;
                        t !== I && u.call(i, {
                            eventType: t,
                            args: n
                        })
                    }
                })), p(e = {}, v, (function(e) {
                    return n.enqueue({
                        eventType: v,
                        args: e
                    })
                })), p(e, T, (function(e) {
                    return n.enqueue({
                        eventType: T,
                        args: e
                    })
                })), p(e, h, (function(e) {
                    return n.enqueue({
                        eventType: h,
                        args: e
                    })
                })), p(e, I, (function(e) {
                    return n.enqueue({
                        eventType: I,
                        args: e
                    })
                })), p(e, E, (function(e) {
                    return n.enqueue({
                        eventType: E,
                        args: e
                    })
                })), p(e, A, (function(e) {
                    return n.enqueue({
                        eventType: A,
                        args: e
                    })
                })), p(e, U, (function(e) {
                    return n.enqueue({
                        eventType: U,
                        args: e
                    })
                })), p(e, O, (function(e) {
                    return n.enqueue({
                        eventType: O,
                        args: e
                    })
                })), p(e, m, (function(e) {
                    return n.enqueue({
                        eventType: m,
                        args: e
                    })
                })), p(e, D, (function(e) {
                    return n.enqueue({
                        eventType: D,
                        args: e
                    })
                })), p(e, g, (function(e) {
                    e.config = "object" === f(t) && t.options || {}, n.enqueue({
                        eventType: g,
                        args: e
                    })
                })), r = e, y._each(r, (function(e, t) {
                    b.on(t, e)
                }))) : y.logMessage('Analytics adapter for "'.concat(a, '" disabled by sampling'));
                this._oldEnable = this.enableAnalytics, this.enableAnalytics = function() {
                    return y.logMessage('Analytics adapter for "'.concat(a, '" already enabled, unnecessary call to `enableAnalytics`.'))
                }
            }
        };
        var i = n(4),
            r = n.n(i),
            l = n(5);

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = n(9),
            y = n(0),
            o = r.a.EVENTS,
            g = o.AUCTION_INIT,
            m = o.AUCTION_END,
            v = o.BID_REQUESTED,
            I = o.BID_TIMEOUT,
            T = o.BID_RESPONSE,
            h = o.NO_BID,
            E = o.BID_WON,
            A = o.BID_ADJUSTMENT,
            U = o.BIDDER_DONE,
            O = o.SET_TARGETING,
            D = o.AD_RENDER_FAILED,
            S = "endpoint",
            N = "bundle"
    }
}, [460]);
pbjsChunk([75], {
    462: function(e, r, t) {
        e.exports = t(463)
    },
    463: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", (function() {
            return s
        })), t.d(r, "VIDEO_ENDPOINT", (function() {
            return c
        })), t.d(r, "SYNC_ENDPOINT", (function() {
            return n
        })), t.d(r, "spec", (function() {
            return v
        })), r.hasVideoMediaType = h, r.masSizeOrdering = _, r.determineRubiconVideoSizeId = A, r.getPriceGranularity = T, r.hasValidVideoParams = I, r.resetUserSync = function() {
            j = !1
        };
        var u = t(0),
            i = t(1),
            p = t(3),
            l = t(2);

        function a() {
            return (a = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function f(e, r) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, r) {
                var t = [],
                    i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return t
            })(e, r) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function d() {
            return "https:" === location.protocol
        }
        var s = "//fastlane.rubiconproject.com/a/api/fastlane.json",
            c = "//prebid-server.rubiconproject.com/openrtb2/auction",
            n = "https://eus.rubiconproject.com/usync.html",
            m = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                66: "930x600",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                94: "970x310",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                105: "250x800",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                145: "980x150",
                159: "320x250",
                179: "250x600",
                195: "600x300",
                198: "640x360",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                229: "320x180",
                232: "580x400",
                257: "400x600"
            };
        u._each(m, (function(e, r) {
            return m[e] = r
        }));
        var v = {
            code: "rubicon",
            supportedMediaTypes: [l.b, l.d],
            isBidRequestValid: function(e) {
                if ("object" !== g(e.params)) return !1;
                for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                    if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return u.logError("Rubicon bid adapter Error: wrong format of accountId or siteId or zoneId."), !1;
                var i = x(e, !0);
                return !!i && ("video" !== i || I(e))
            },
            buildRequests: function(e, o) {
                var r = [],
                    t = e.filter((function(e) {
                        return "video" === x(e)
                    })).map((function(e) {
                        e.startTime = (new Date).getTime();
                        var r = {
                            id: e.transactionId,
                            test: p.config.getConfig("debug") ? 1 : 0,
                            cur: ["USD"],
                            source: {
                                tid: e.transactionId
                            },
                            tmax: p.config.getConfig("TTL") || 1e3,
                            imp: [{
                                exp: 300,
                                id: e.adUnitCode,
                                secure: d() || e.params.secure ? 1 : 0,
                                ext: {
                                    rubicon: e.params
                                },
                                video: u.deepAccess(e, "mediaTypes.video") || {}
                            }],
                            ext: {
                                prebid: {
                                    cache: {
                                        vastxml: {
                                            returnCreative: !1
                                        }
                                    },
                                    targeting: {
                                        includewinners: !0,
                                        includebidderkeys: !1,
                                        priceGranularity: T(p.config)
                                    }
                                }
                            }
                        };
                        r.imp[0].ext.rubicon.video.size_id = A(e), (function(r, t, e) {
                            if (!r) return;
                            "object" === g(p.config.getConfig("app")) ? r.app = p.config.getConfig("app") : r.site = {
                                page: y(t, e)
                            };
                            "object" === g(p.config.getConfig("device")) && (r.device = p.config.getConfig("device"));
                            t.params.video.language && ["site", "device"].forEach((function(e) {
                                r[e] && (r[e].content = a({
                                    language: t.params.video.language
                                }, r[e].content))
                            }))
                        })(r, e, o), (function(e, r) {
                            "object" === g(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                            "object" === g(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                            "object" === g(e.imp[0].video) && void 0 === e.imp[0].video.pos && (e.imp[0].video.pos = "atf" === r.params.position ? 1 : "btf" === r.params.position ? 3 : 0);
                            var t = b(r, "video");
                            e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                        })(r, e);
                        var t = (function() {
                            var e = (r = window.DigiTrust && (p.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                                member: "T9QSFKPDN9"
                            })), r && r.success && r.identity || null);
                            var r;
                            if (!e || e.privacy && e.privacy.optout) return null;
                            return {
                                id: e.id,
                                keyv: e.keyv,
                                pref: 0
                            }
                        })();
                        if (t && (r.user = {
                                ext: {
                                    digitrust: t
                                }
                            }), o.gdprConsent) {
                            var i;
                            "boolean" == typeof o.gdprConsent.gdprApplies && (i = o.gdprConsent.gdprApplies ? 1 : 0), r.regs ? r.regs.ext ? r.regs.ext.gdpr = i : r.regs.ext = {
                                gdpr: i
                            } : r.regs = {
                                ext: {
                                    gdpr: i
                                }
                            };
                            var n = o.gdprConsent.consentString;
                            r.user ? r.user.ext ? r.user.ext.consent = n : r.user.ext = {
                                consent: n
                            } : r.user = {
                                ext: {
                                    consent: n
                                }
                            }
                        }
                        return {
                            method: "POST",
                            url: c,
                            data: r,
                            bidRequest: e
                        }
                    }));
                if (!0 !== p.config.getConfig("rubicon.singleRequest")) r = t.concat(e.filter((function(e) {
                    return "banner" === x(e)
                })).map((function(e) {
                    var i = v.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: s,
                        data: v.getOrderedParams(i).reduce((function(e, r) {
                            var t = i[r];
                            return u.isStr(t) && "" !== t || u.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                        }), "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                })));
                else {
                    var n = e.filter((function(e) {
                        return "banner" === x(e)
                    })).reduce((function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }), {});
                    r = t.concat(Object.keys(n).map((function(e) {
                        var r = n[e];
                        10 < r.length && (u.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: ".concat(r.length - 10, " bids were not sent")), r = r.slice(0, 10));
                        var i = v.combineSlotUrlParams(r.map((function(e) {
                            return v.createSlotParams(e, o)
                        })));
                        return {
                            method: "GET",
                            url: s,
                            data: v.getOrderedParams(i).reduce((function(e, r) {
                                var t = i[r];
                                return u.isStr(t) && "" !== t || u.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                            }), "") + "slots=".concat(r.length, "&rand=").concat(Math.random()),
                            bidRequest: r
                        }
                    })))
                }
                return r
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter((function(e) {
                        return r.test(e)
                    }))).concat(Object.keys(e).filter((function(e) {
                        return t.test(e)
                    }))).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter((function(e) {
                    return -1 === i.indexOf(e)
                })))
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce((function(r, t, i) {
                        return Object.keys(t).forEach((function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        })), r
                    }), {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach((function(e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                })), i
            },
            createSlotParams: function(e, r) {
                e.startTime = (new Date).getTime();
                var t = e.params,
                    i = b(e, "banner"),
                    n = f(t.latLong || [], 2),
                    o = n[0],
                    a = n[1],
                    s = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: d() ? "1" : "0",
                        tk_flint: "pbjs_lite_v2.8.0-pre",
                        "x_source.tid": e.transactionId,
                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: y(e, r)
                    };
                r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (s.gdpr = Number(r.gdprConsent.gdprApplies)), s.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === g(t.visitor) && Object.keys(t.visitor).forEach((function(e) {
                    null != t.visitor[e] && (s["tg_v.".concat(e)] = t.visitor[e].toString())
                })), null !== t.inventory && "object" === g(t.inventory) && Object.keys(t.inventory).forEach((function(e) {
                    null != t.inventory[e] && (s["tg_i.".concat(e)] = t.inventory[e].toString())
                }));
                var c = (function() {
                    var e = (r = window.DigiTrust && (p.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                        member: "T9QSFKPDN9"
                    })), r && r.success && r.identity || null);
                    var r;
                    if (!e || e.privacy && e.privacy.optout) return [];
                    return {
                        "dt.id": e.id,
                        "dt.keyv": e.keyv,
                        "dt.pref": 0
                    }
                })();
                return Object.keys(c).forEach((function(e) {
                    s[e] = c[e]
                })), s
            },
            interpretResponse: function(c, e) {
                var d = e.bidRequest;
                if (!(c = c.body) || "object" !== g(c)) return [];
                if (c.seatbid) {
                    var r = u.deepAccess(c, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && r.forEach((function(e) {
                        u.logError("Got error from PBS Java openRTB: " + e)
                    }));
                    var o = [];
                    return c.seatbid.forEach((function(n) {
                        (n.bid || []).forEach((function(e) {
                            var r = {
                                requestId: d.bidId,
                                currency: c.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: p.config.getConfig("rubicon.netRevenue") || !1,
                                width: e.w || u.deepAccess(d, "mediaTypes.video.w") || u.deepAccess(d, "params.video.playerWidth"),
                                height: e.h || u.deepAccess(d, "mediaTypes.video.h") || u.deepAccess(d, "params.video.playerHeight")
                            };
                            e.dealid && (r.dealId = e.dealid);
                            var t = u.deepAccess(c, "ext.responsetimemillis.rubicon");
                            if (d && t && (d.serverResponseTimeMs = t), u.deepAccess(e, "ext.prebid.type") === l.d) {
                                r.mediaType = l.d;
                                var i = u.deepAccess(e, "ext.prebid.targeting");
                                i && "object" === g(i) && (r.adserverTargeting = i), e.ext.prebid.cache && "object" === g(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : i && i.hb_uuid && i.hb_cache_host && i.hb_cache_path && (r.videoCacheKey = i.hb_uuid, r.vastUrl = "https://".concat(i.hb_cache_host).concat(i.hb_cache_path, "?uuid=").concat(i.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)
                            } else u.logError("Prebid Server Java openRTB returns response with media type other than video for video request.");
                            o.push(r)
                        }))
                    })), o
                }
                var t = c.ads;
                return "object" !== g(d) || Array.isArray(d) || "video" !== x(d) || "object" !== g(t) || (t = t[d.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce((function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i, n, o = Array.isArray(d) ? d[t] : d;
                    if (o && "object" === g(o)) {
                        var a = {
                            requestId: o.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: p.config.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (a.mediaType = r.creative_type), r.creative_type === l.d) a.width = o.params.video.playerWidth, a.height = o.params.video.playerHeight, a.vastUrl = r.creative_depot_url, a.impression_id = r.impression_id, a.videoCacheKey = r.impression_id;
                        else {
                            a.ad = (i = r.script, n = r.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(n, "'>\n<script type='text/javascript'>").concat(i, "<\/script>\n</div>\n</body>\n</html>"));
                            var s = f(m[r.size_id].split("x").map((function(e) {
                                return Number(e)
                            })), 2);
                            a.width = s[0], a.height = s[1]
                        }
                        a.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce((function(e, r) {
                            return e[r.key] = r.values[0], e
                        }), {
                            rpfl_elemid: o.adUnitCode
                        }), e.push(a)
                    } else u.logError("Rubicon bid adapter Error: bidRequest undefined at index position:".concat(t), d, c);
                    return e
                }), []).sort((function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                }))
            },
            getUserSyncs: function(e, r, t) {
                if (!j && e.iframeEnabled) {
                    var i = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : i += "?gdpr_consent=".concat(t.consentString)), j = !0, {
                        type: "iframe",
                        url: n + i
                    }
                }
            },
            transformBidParams: function(e, r) {
                return u.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function y(e, r) {
            var t = p.config.getConfig("pageUrl");
            return e.params.referrer ? t = e.params.referrer : t || (t = r.refererInfo.referer), e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function b(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(u.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== u.deepAccess(e, "mediaTypes.banner.sizes") ? n = o(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = o(e.sizes) : u.logWarn("Warning: no sizes are setup or found"), _(n)
        }

        function o(e) {
            return u.parseSizesInput(e).reduce((function(e, r) {
                var t = parseInt(m[r], 10);
                return t && e.push(t), e
            }), [])
        }

        function h(e) {
            return "object" === g(u.deepAccess(e, "params.video")) && void 0 !== u.deepAccess(e, "mediaTypes.".concat(l.d))
        }

        function x(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            return h(e) ? -1 === ["outstream", "instream"].indexOf(u.deepAccess(e, "mediaTypes.".concat(l.d, ".context"))) ? void(r && u.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream")) : b(e, "video").length < 2 ? void(r && u.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (r && u.logMessage("Rubicon bid adapter making video request for adUnit", e.adUnitCode), "video") : 0 === b(e, "banner").length ? void(r && u.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (r && u.logMessage("Rubicon bid adapter making banner request for adUnit", e.adUnitCode), "banner")
        }

        function _(e) {
            var n = [15, 2, 9];
            return e.sort((function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            }))
        }

        function A(e) {
            var r = parseInt(u.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === u.deepAccess(e, "mediaTypes.".concat(l.d, ".context")) ? 203 : 201 : r
        }

        function T(e) {
            return "custom" === e.getConfig("priceGranularity") ? {
                ranges: e.getConfig("customPriceGranularity").buckets
            } : {
                ranges: {
                    low: [{
                        max: 5,
                        increment: .5
                    }],
                    medium: [{
                        max: 20,
                        increment: .1
                    }],
                    high: [{
                        max: 20,
                        increment: .01
                    }],
                    auto: [{
                        max: 5,
                        increment: .05
                    }, {
                        min: 5,
                        max: 10,
                        increment: .1
                    }, {
                        min: 10,
                        max: 20,
                        increment: .5
                    }],
                    dense: [{
                        max: 3,
                        increment: .01
                    }, {
                        min: 3,
                        max: 8,
                        increment: .05
                    }, {
                        min: 8,
                        max: 20,
                        increment: .5
                    }]
                } [e.getConfig("priceGranularity")]
            }
        }

        function I(r) {
            var t = !0,
                e = Object.prototype.toString.call([]),
                i = Object.prototype.toString.call(0),
                n = {
                    mimes: e,
                    protocols: e,
                    maxduration: i,
                    linearity: i,
                    api: e
                };
            return Object.keys(n).forEach((function(e) {
                Object.prototype.toString.call(u.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, u.logError("Rubicon Bid Adapter: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            })), t
        }
        var j = !1;
        Object(i.registerBidder)(v)
    }
}, [462]);
pbjsChunk([49], {
    520: function(e, r, t) {
        e.exports = t(521)
    },
    521: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", (function() {
            return y
        }));
        var l = t(0),
            i = t(1),
            a = t(12),
            c = t(2),
            f = "Bid from response has no auid parameter - ",
            g = "Bid from response has no adm parameter - ",
            o = "Array of bid objects is empty",
            b = "Can't find in requested bids the bid with auid - ",
            p = "Seatbid array from response has empty item",
            u = "Response is empty",
            m = "Response has empty seatbid array",
            h = "Seatbid from response has no array of bid objects - ",
            y = {
                code: "trustx",
                supportedMediaTypes: [c.b, c.d],
                isBidRequestValid: function(e) {
                    return !!e.params.uid
                },
                buildRequests: function(e, r) {
                    var s, a = [],
                        o = {},
                        p = {},
                        u = {},
                        c = "net";
                    (e || []).forEach((function(e) {
                        "gross" === e.params.priceType && (c = "gross"), s = e.bidderRequestId;
                        var r = e.params.uid,
                            t = e.adUnitCode;
                        a.push(r);
                        var i = l.parseSizesInput(e.sizes);
                        p[r] || (p[r] = {});
                        var d = p[r];
                        d[t] ? d[t].bids.push(e) : d[t] = {
                            adUnitCode: t,
                            bids: [e],
                            parents: []
                        };
                        var n = d[t];
                        i.forEach((function(e) {
                            u[e] = !0, o[r] || (o[r] = {}), o[r][e] ? o[r][e].push(n) : o[r][e] = [n], n.parents.push({
                                parent: o[r],
                                key: e,
                                uid: r
                            })
                        }))
                    }));
                    var t = {
                        u: l.getTopWindowUrl(),
                        pt: c,
                        auids: a.join(","),
                        sizes: l.getKeys(u).join(","),
                        r: s
                    };
                    return r && (r.timeout && (t.wtimeout = r.timeout), r.gdprConsent && (r.gdprConsent.consentString && (t.gdpr_consent = r.gdprConsent.consentString), t.gdpr_applies = "boolean" == typeof r.gdprConsent.gdprApplies ? Number(r.gdprConsent.gdprApplies) : 1)), {
                        method: "GET",
                        url: "//sofia.trustx.org/hb",
                        data: l.parseQueryStringParameters(t).replace(/\&$/, ""),
                        bidsMap: o
                    }
                },
                interpretResponse: function(e, r) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a;
                    e = e && e.body;
                    var i, d = [],
                        n = r.bidsMap,
                        s = r.data.pt;
                    return e ? e.seatbid && !e.seatbid.length && (i = m) : i = u, !i && e.seatbid && e.seatbid.forEach((function(e) {
                        !(function(e, n, r, t, i) {
                            if (!e) return;
                            var d;
                            e.auid || (d = f + JSON.stringify(e));
                            if (e.adm) {
                                var s = n[e.auid];
                                if (s) {
                                    var a = "".concat(e.w, "x").concat(e.h);
                                    if (s[a]) {
                                        var o = s[a][0],
                                            p = o.bids.shift(),
                                            u = {
                                                requestId: p.bidId,
                                                bidderCode: y.code,
                                                cpm: e.price,
                                                width: e.w,
                                                height: e.h,
                                                creativeId: e.auid,
                                                currency: "USD",
                                                netRevenue: "gross" !== r,
                                                ttl: 360,
                                                dealId: e.dealid
                                            };
                                        "video" === e.content_type ? (u.vastXml = e.adm, u.mediaType = c.d, u.adResponse = {
                                            content: u.vastXml
                                        }, p.renderer || p.mediaTypes && p.mediaTypes.video && "outstream" !== p.mediaTypes.video.context || (u.renderer = (function(e, r, t) {
                                            var i = t.install({
                                                id: r.id,
                                                url: r.url,
                                                loaded: !1
                                            });
                                            try {
                                                i.setRender(v)
                                            } catch (e) {
                                                l.logWarn("Prebid Error calling setRender on renderer", e)
                                            }
                                            return i
                                        })(0, {
                                            id: p.bidId,
                                            url: "//cdn.adnxs.com/renderer/video/ANOutstreamVideo.js"
                                        }, i))) : (u.ad = e.adm, u.mediaType = c.b), t.push(u), o.bids.length || o.parents.forEach((function(e) {
                                            var r = e.parent,
                                                t = e.key,
                                                i = e.uid,
                                                d = r[t].indexOf(o); - 1 < d && r[t].splice(d, 1), r[t].length || (delete r[t], l.getKeys(r).length || delete n[i])
                                        }))
                                    }
                                } else d = b + e.auid
                            } else d = g + JSON.stringify(e);
                            d && l.logError(d)
                        })(function(e) {
                            e ? e.bid ? e.bid[0] || l.logError(o) : l.logError(h + JSON.stringify(e)) : l.logError(p);
                            return e && e.bid && e.bid[0]
                        }(e), n, s, d, t)
                    })), i && l.logError(i), d
                },
                getUserSyncs: function(e) {
                    if (e.pixelEnabled) return [{
                        type: "image",
                        url: "//sofia.trustx.org/push_sync"
                    }]
                }
            };

        function v(e) {
            e.renderer.push((function() {
                window.ANOutstreamVideo.renderAd({
                    targetId: e.adUnitCode,
                    adResponse: e.adResponse
                })
            }))
        }
        Object(i.registerBidder)(y)
    }
}, [520]);
pbjsChunk([45], {
    528: function(e, r, n) {
        e.exports = n(529)
    },
    529: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "adapter", (function() {
            return o
        }));
        var t = n(0),
            i = n(12),
            d = n(1),
            a = n(2);

        function p() {
            return (p = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                }
                return e
            }).apply(this, arguments)
        }
        var u = function(e) {
                return e.filter((function(e) {
                    return !!t.deepAccess(e, "ext.renderer")
                })).map((function(e) {
                    var r, n = t.deepAccess(e, "ext.renderer");
                    return r = n, parent.window.unruly = parent.window.unruly || {}, parent.window.unruly.native = parent.window.unruly.native || {}, parent.window.unruly.native.siteId = parent.window.unruly.native.siteId || r.siteId, parent.window.unruly.native.supplyMode = "prebid", parent.window.unruly.native.prebid = parent.window.unruly.native.prebid || {}, parent.window.unruly.native.prebid.uq = parent.window.unruly.native.prebid.uq || [], {
                        rendererInstance: i.a.install(p({}, n, {
                            callback: function() {}
                        })),
                        serverBid: e
                    }
                })).map((function(e) {
                    var r, n, t = e.rendererInstance,
                        i = e.serverBid,
                        d = (n = t, {
                            requestId: (r = i).bidId,
                            cpm: r.cpm,
                            width: r.width,
                            height: r.height,
                            vastUrl: r.vastUrl,
                            netRevenue: !0,
                            creativeId: r.bidId,
                            ttl: 360,
                            currency: "USD",
                            renderer: n,
                            mediaType: a.d
                        }),
                        u = p({}, d, {
                            renderer: t,
                            adUnitCode: i.ext.adUnitCode
                        });
                    return t.setRender((function() {
                        var e;
                        e = u, parent.window.unruly.native.prebid.uq.push(["render", e])
                    })), d
                }))
            },
            o = {
                code: "unruly",
                supportedMediaTypes: [a.d],
                isBidRequestValid: function(e) {
                    if (!e) return !1;
                    var r = t.deepAccess(e, "mediaTypes.video.context");
                    return "video" === e.mediaType || "outstream" === r
                },
                buildRequests: function(e, r) {
                    return {
                        url: "https://targeting.unrulymedia.com/prebid",
                        method: "POST",
                        data: {
                            bidRequests: e,
                            bidderRequest: r
                        },
                        options: {
                            contentType: "text/plain"
                        }
                    }
                },
                interpretResponse: function() {
                    var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).body;
                    return !e || !e.bids ? [] : u(e.bids)
                },
                getUserSyncs: function(e, r, n) {
                    var t = "";
                    n && "gdprApplies" in n && (n.gdprApplies && "string" == typeof n.consentString ? t += "?gdpr=1&gdpr_consent=".concat(n.consentString) : t += "?gdpr=0");
                    var i = [];
                    return e.iframeEnabled && i.push({
                        type: "iframe",
                        url: "https://video.unrulymedia.com/iframes/third-party-iframes.html" + t
                    }), i
                }
            };
        Object(d.registerBidder)(o)
    }
}, [528]);
pbjs.processQueue();