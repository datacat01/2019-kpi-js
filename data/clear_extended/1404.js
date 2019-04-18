var _eac = _eac || [];
var _eaq = _eaq || [];
_eac.accountId = '2021780';
_eac.url = 'https://analytics.dnnapi.com/api/analytics/beacon';
_eac.version = '02.01.00.2';
_eac.debug = false;
! function(e, t) {
    "use strict";
    e = e || "docReady";
    var n = [],
        a = !1,
        d = !1;

    function o() {
        if (!a) {
            a = !0;
            for (var e = 0; e < n.length; e++) n[e].fn.call(window, n[e].ctx);
            n = []
        }
    }

    function i() {
        "complete" === document.readyState && o()
    }(t = t || window)[e] = function(e, t) {
        a ? setTimeout(function() {
            e(t)
        }, 1) : (n.push({
            fn: e,
            ctx: t
        }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(o, 1) : d || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1)) : (document.attachEvent("onreadystatechange", i), window.attachEvent("onload", o)), d = !0))
    }
}("callEA", window),
function() {
    var e = window._eac || [],
        t = window._eaq || [],
        n = window._bcnd || [],
        a = window._vpnd || [],
        d = window._evtd || [];

    function o(t, n) {
        e.setPageviewId();
        var d = !0,
            o = "Default",
            i = window.dnn || {};
        i.getVar && i.getVar("evoq_PersonalizedPageVariantName") && (o = i.getVar("evoq_PersonalizedPageVariantName"));
        var r = "";
        i.getVar && i.getVar("dnn_current_userid") && (r = i.getVar("dnn_current_userid")), a.clear(), a.addData("r", "vpageview"), a.addData("a", e.accountId), a.addData("i", e.pageViewId), a.addData("v", e.version), a.addData("s", e.getSessionId()), a.addData("d", e.getVisitorId()), a.addData("pt", n), a.addData("ur", t), a.addData("hn", document.location.hostname), a.addData("rf", document.referrer), a.addData("pr", document.location.protocol), a.addData("la", navigator.language || navigator.userLanguage), a.addData("wi", Math.max(document.documentElement.clientWidth, window.innerWidth || 0)), a.addData("he", Math.max(document.documentElement.clientHeight, window.innerHeight || 0)), a.addData("tz", (new Date).getTimezoneOffset()), a.addData("ga", e.getGAId("legacy")), a.addData("vr", o), a.addData("u", r);
        var c = e.getContentItems();
        null !== c && (a.addData("ci", c), d = !1);
        var l = !1;
        if (void 0 !== window.dataLayer)
            for (var u = 0; u < window.dataLayer.length; u++)
                if ("boolean" == typeof window.dataLayer[u].eaSendGaEvents) {
                    l = window.dataLayer[u].eaSendGaEvents;
                    break
                } l ? window.dataLayer.push({
            event: "virtualPageView",
            virtualPageURL: t,
            virtualPageTitle: n
        }) : void 0 !== window.ga && window.ga("send", {
            hitType: "pageview",
            page: t,
            title: n
        });
        var s = a.getQs();
        d ? e.sendTrackingRequest(s, !0) : e.sendTrackingPost(s, !0)
    }

    function i(t, n, a, o, i) {
        var r = window.dnn || {},
            c = "";
        if (r.getVar && r.getVar("dnn_current_userid") && (c = r.getVar("dnn_current_userid")), "Interaction" === t && "Page" === n && "Unload" === a && (o = e.pageTimer.getDuration()), t = t.trim(), n = n.trim(), a = null !== a ? escape(a.trim()) : a, d.clear(), d.addData("r", "event"), d.addData("a", e.accountId), d.addData("i", e.pageViewId), d.addData("v", e.version), d.addData("s", e.getSessionId()), d.addData("d", e.getVisitorId()), d.addData("ga", e.getGAId("legacy")), d.addData("ur", window.location.href), d.addData("ct", t), d.addData("ac", n), d.addData("lb", a), d.addData("va", o), d.addData("u", c), "Interaction" !== t || "Page" !== n || "Unload" !== a) {
            var l = !1;
            if (void 0 !== window.dataLayer)
                for (var u = 0; u < window.dataLayer.length; u++)
                    if ("boolean" == typeof window.dataLayer[u].eaSendGaEvents) {
                        l = window.dataLayer[u].eaSendGaEvents;
                        break
                    } l ? window.dataLayer.push({
                hitType: "event",
                event: "Interaction",
                eventCategory: t,
                eventAction: n,
                eventLabel: a,
                eventValue: o
            }) : void 0 !== window.ga && window.ga("send", "event", {
                eventCategory: t,
                eventAction: n,
                eventLabel: a,
                eventValue: o,
                transport: "beacon"
            })
        }
        var s = d.getQs();
        e.sendTrackingPost(s, i)
    }
    window.callEA(function() {
        e.hasScrolled = !1, e.everScrolled = !1, e.reach = 0, e.initialReach = 0, e.accountId = e.accountId || 0, e.debug = e.debug || !1, e.url = e.url || "", e.version = e.version || "0.0.0", e.pageTimer = new function(e) {
            var t = {
                maxInactivityPeriodInMs: (e = e || {
                    maxInactivityPeriodInMs: 2e4,
                    idleTimeoutInMs: 200,
                    onIdleOffCallback: void 0,
                    onIdleOnCallback: void 0,
                    onTickCallback: void 0
                }).maxInactivityPeriodInMs || 2e4,
                currentInactivityPeriodInMs: 0,
                idleTimeoutInMs: e.idleTimeoutInMs || 200,
                enabled: !1,
                idle: !1,
                lapses: [],
                start: function() {
                    var e = t.lapses[t.lapses.length - 1];
                    e && !e.end || (t.lapses.push({
                        begin: new Date,
                        end: void 0
                    }), t.enabled = !0, t.onIdleOff())
                },
                stop: function() {
                    var e = t.lapses[t.lapses.length - 1];
                    e && (e.end || (e.end = new Date), t.enabled = !1)
                },
                getDuration: function() {
                    for (var e = 0, n = 0; n < t.lapses.length; n++) {
                        var a = t.lapses[n].begin,
                            d = t.lapses[n].end || new Date;
                        e += d - a
                    }
                    return Number(e)
                },
                resetIdle: function() {
                    t.idle && t.onIdleOff(), t.idle = !1, t.currentInactivityPeriodInMs = 0
                },
                onIdleOff: function() {
                    t.start(), t.onIdleOffCallback && t.onIdleOffCallback()
                },
                onIdleOffCallback: e.onIdleOffCallback,
                onIdleOn: function() {
                    t.stop(), t.onIdleOnCallback && t.onIdleOnCallback()
                },
                onIdleOnCallback: e.onIdleOnCallback,
                onTickCallback: e.onTickCallback,
                checkIdle: function() {
                    !t.idle && t.currentInactivityPeriodInMs > t.maxInactivityPeriodInMs ? (t.idle = !0, t.onIdleOn()) : t.currentInactivityPeriodInMs += t.idleTimeoutInMs, t.onTickCallback && t.onTickCallback()
                },
                hookEvents: function() {
                    var e, n;
                    void 0 !== document.hidden ? (n = "hidden", e = "visibilitychange") : void 0 !== doc.mozHidden ? (n = "mozHidden", e = "mozvisibilitychange") : void 0 !== document.msHidden ? (n = "msHidden", e = "msvisibilitychange") : void 0 !== document.webkitHidden && (n = "webkitHidden", e = "webkitvisibilitychange"), document.addEventListener(e, function() {
                        document[n] ? t.onIdleOn() : t.onIdleOff()
                    }, !1), window.addEventListener("blur", function() {
                        t.onIdleOn()
                    }), window.addEventListener("focus", function() {
                        t.onIdleOff()
                    }), document.addEventListener("mousemove", function() {
                        t.resetIdle()
                    }), document.addEventListener("keyup", function() {
                        t.resetIdle()
                    }), document.addEventListener("touchstart", function() {
                        t.resetIdle()
                    }), document.addEventListener("click", function() {
                        t.resetIdle()
                    }), window.addEventListener("scroll", function() {
                        t.resetIdle()
                    }), setInterval(function() {
                        t.checkIdle()
                    }, t.idleTimeoutInMs)
                }
            };
            return t.hookEvents(), t.start(), t
        };
        var t = null;

        function r(e) {
            var n = window.dnn || {};
            if (n.searchSkinObject) {
                var a = n.searchSkinObject.prototype._ignoreKeyCodes,
                    d = e.keyCode || e.witch;
                if (!(a.indexOf(d) > -1)) {
                    var i = {
                            delayTriggerAutoSearch: 1e3,
                            minCharRequiredTriggerAutoSearch: 2,
                            searchType: "S",
                            cultureCode: "en-US"
                        },
                        r = this.value;
                    !r || "S" != i.searchType || r.length < i.minCharRequiredTriggerAutoSearch || (t && (clearTimeout(t), delete t), t = setTimeout(function() {
                        o("/inline-search?keywords=" + encodeURIComponent(r) + "&culture=" + i.cultureCode + "&size=inline", document.title)
                    }, i.delayTriggerAutoSearch))
                }
            }
        }

        function c() {
            this.splice(0, this.length)
        }

        function l(e, t) {
            var n = new Object;
            n.key = e, n.value = t, this.push(n)
        }

        function u() {
            for (var e = [], t = 0; t < this.length; t++) e.push(encodeURIComponent(this[t].key) + "=" + encodeURIComponent(this[t].value));
            return e.join("&")
        }
        e.setPageviewId = function() {
            e.pageViewId = e.getRandomId(1, 9999999)
        }, e.getRandomId = function(t, n) {
            t = t || 1, n = n || 9999999;
            var a = Math.floor(Math.random() * (n - t + 1)) + t,
                d = new Date;
            return "".concat(d.getUTCFullYear(), e.pad(d.getUTCMonth() + 1, 2), e.pad(d.getUTCDate(), 2), "T", e.pad(d.getUTCHours(), 2), ":", e.pad(d.getUTCMinutes(), 2), ".", e.pad(d.getUTCMilliseconds(), 3), "-", e.pad(a, 7))
        }, e.getGuid = function() {
            var e = (new Date).getTime(),
                t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
                });
            return t
        }, e.info = function(t, n) {
            e.debug && console.info(t, n)
        }, e.pad = function(e, t) {
            var n = "000000000" + e;
            return n.substr(n.length - t)
        }, e.sendTrackingRequest = function(t, n) {
            if ("" !== e.url) {
                e.info("Sending Analytics Get - QS:", e.url + "?" + t);
                var a = e.url + "?" + t,
                    d = new XMLHttpRequest;
                d.open("GET", a, n), d.send(null)
            }
        }, e.sendTrackingPost = function(t, n) {
            if ("" !== e.url) {
                e.info("Sending Analytics Post - QS:", t);
                var a = e.url,
                    d = new XMLHttpRequest;
                d.open("POST", a, n), d.send(t)
            }
        }, e.getVisitorId = function() {
            var t = e.getCookie("_eacv");
            return t || (t = e.getCookie("Analytics_VisitorId")), t || (t = e.getGuid(), e.createCookie("_eacv", t, 2, 0, 0)), t
        }, e.getSessionId = function() {
            var t = e.getCookie("_eacs");
            return t || (t = e.getRandomId(0, 999).toString() + "s", e.createCookie("_eacs", t, 0, 0, 30)), t
        }, e.getContentItems = function() {
            for (var e = "data-dnn-content-items", t = document.querySelectorAll("[" + e + "]"), n = [], a = 0; a < t.length; a++) {
                var d = t[a],
                    o = d.getAttribute(e);
                if (o) try {
                    n.push(JSON.parse(o))
                } catch (e) {
                    console.log(e)
                }
            }
            return 0 === n.length ? null : JSON.stringify(n)
        }, e.getGAId = function(e) {
            var t;
            if ("legacy" === e) try {
                return (t = document.cookie.match(new RegExp("__utma=([^;]+)"))[1].split("."))[1] + "." + t[2]
            } catch (e) {
                return ""
            } else try {
                return (t = document.cookie.match(new RegExp("_ga=([^;]+)"))[1].split("."))[2] + "." + t[3]
            } catch (e) {
                return ""
            }
        }, e.onScroll = function() {
            var t = e.percent(e.scrollDepth(), e.pageHeight());
            t > e.reach && (e.reach = t > 100 ? 100 : t), e.info("scroll depth {0}", e.reach)
        }, e.onPageUnload = function() {
            window.onbeforeunload = function() {
                e.everScrolled ? i("Interaction", "Scroll", "Scrolled", e.reach, !0) : i("Interaction", "Scroll", "No scroll", null, !0), i("Interaction", "Page", "Unload", null, !1)
            }
        }, e.hookLinkClicks = function() {
            var t = window.dnn || {};
            t.getVar && "false" !== t.getVar("trackLinks") && console.log("track links"), document.addEventListener ? document.addEventListener("click", e.clickTrackHandler, !0) : document.attachEvent("onclick", e.clickTrackHandler)
        }, e.hookInlineSearch = function() {
            var e = window.dnn || {};
            if (e.searchSkinObject) {
                var t = document.getElementsByClassName("searchInputContainer");
                if (t && t.length > 0) {
                    var n = t[0].getElementsByTagName("input");
                    if (n && n.length > 0) {
                        var a = n[0];
                        document.addEventListener ? a.addEventListener("keyup", r) : a.onkeyup = r
                    }
                }
            }
        }, e.getLinkElement = function(e) {
            for (; e;) {
                if (e.tagName) {
                    var t = e.getAttribute("data-evtnotrack");
                    if (t && "true" === t) return null;
                    if ("A" === e.tagName.toUpperCase() || "INPUT" === e.tagName.toUpperCase() && "BUTTON" === e.type.toUpperCase() || "BUTTON" === e.tagName.toUpperCase() && "SUBMIT" === e.type.toUpperCase()) return e;
                    var n = e.getAttribute("data-evtcategory"),
                        a = e.getAttribute("data-evtaction"),
                        d = e.getAttribute("data-evtlabel");
                    if (n || a || d) return e
                }
                e = e.parentNode
            }
            return null
        }, e.clickTrackHandler = function(t) {
            var n = window.e || t,
                a = e.getLinkElement(n.target);
            if (a) {
                var d = a.getAttribute("data-evtcategory"),
                    o = a.getAttribute("data-evtaction"),
                    r = a.getAttribute("data-evtlabel"),
                    c = a.getAttribute("data-evtval");
                if (a.tagName && "A" === a.tagName.toUpperCase()) {
                    var l = a.href,
                        u = location.host.toLowerCase();
                    if (l && u)
                        if (l.indexOf(u) < 0 && 0 === l.indexOf("http:")) d || (d = "Link Click"), o || (o = "Outbound");
                        else if (l.indexOf(u) <= 8 && 0 === l.indexOf("javascript:__doPostBack") && (l.indexOf("dnn$ctr$Login$Login_DNN$cmdLogin") > 0 && (d = "User", o = "Login", r = null), l.indexOf("dnn$ctr$SendPassword$cmdSendPassword") > 0 && (d = "User", o = "Password Reset", r = null), l.indexOf("dnn$ctr$SendPassword$cancelButton") > 0 && (d = "User", o = "Cancel Password Reset", r = null), l.indexOf("dnn$dnnSearch$cmdSearch") > 0 && (d = "Interaction", o = "Search Click", r = null)), 0 === l.indexOf("javascript:WebForm_DoPostBackWithOptions") && (l.indexOf("dnn$ctr$Register$registerButton") > 0 && (d = "User", o = "Register", r = null), (l.indexOf("dnn$ctr$EditUser$Profile$cmdUpdate") > 0 || l.indexOf("dnn$ctr$EditUser$cmdUpdate") > 0) && (d = "User", o = "Update Profile", r = null), l.indexOf("dnn$ctr$EditUser$Password$cmdUpdate") > 0 && (d = "User", o = "Change Password", r = null), l.indexOf("dnn$ctr$EditUser$cmdDelete") > 0 && (d = "User", o = "Delete Account", r = null)), !d && !o && !r) return
                }
                a.tagName && ("INPUT" === a.tagName.toUpperCase() && "BUTTON" === a.type.toUpperCase() || "BUTTON" === a.tagName.toUpperCase() && "SUBMIT" === a.type.toUpperCase()) && (d || (d = "Button"), o || (o = "Click")), d || (d = "Interaction"), o || (o = "Click"), !r && a.title && a.title.length > 0 && (r = a.title), r || (r = a.textContent || a.innerText), 0 === r.length && (r = null), !r && a.id && (r = a.id), (d && o && r || "Interaction" !== d || "Click" !== o || "" !== r) && i(d, o, r, c, !0)
            }
        }, e.sampleScroll = function() {
            e.hasScrolled && (e.hasScrolled = !1, e.onScroll())
        }, e.scrollDepth = function() {
            return (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0) + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
        }, e.pageHeight = function() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
        }, e.percent = function(e, t) {
            return Math.floor(100 * e / t)
        }, e.createCookie = function(e, t, n, a, d) {
            var o = "",
                i = null;
            d > 0 ? (i = new Date((new Date).getTime() + 6e4 * d), o = "; expires=" + i.toUTCString()) : n > 0 ? (i = new Date((new Date).setFullYear(new Date + 1)), o = "; expires=" + i.toUTCString()) : a > 0 && ((i = new Date).setDate(i.getDate() + a), o = "; expires=" + i.toUTCString()), i || (o = ""), document.cookie = e + "=" + t + o + "; path=/"
        }, e.getCookie = function(e) {
            if (document.cookie.length > 0) {
                var t = document.cookie.indexOf(e + "=");
                if (-1 !== t) {
                    t = t + e.length + 1;
                    var n = document.cookie.indexOf(";", t);
                    return -1 === n && (n = document.cookie.length), unescape(document.cookie.substring(t, n))
                }
            }
            return ""
        }, e.event = function(e, t) {
            var n = !1;
            return !e.addEventListener && e.attachEvent && (n = !0),
                function(a) {
                    return function(d, o, i) {
                        if (t = i || t, !d.call) throw Error("Callback is not a function");
                        var r = function() {
                            d.call(t || e, a, o)
                        };
                        return n ? e.attachEvent("on" + a, r) : e.addEventListener(a, r, !1),
                            function() {
                                n ? e.detachEvent("on" + a, r) : e.removeEventListener(a, r, !1)
                            }
                    }
                }
        }, d.addData = l, d.getQs = u, d.clear = c, n.addData = l, n.getQs = u, a.addData = l, a.getQs = u, a.clear = c
    }), window.callEA(function() {
        e.initialReach = e.percent(e.scrollDepth(), e.pageHeight()), e.hookLinkClicks(), e.onPageUnload(), e.event(window)("scroll")(function() {
            e.everScrolled = !0, e.hasScrolled = !0, setTimeout(window._eac.sampleScroll, 1e3)
        }), e.hookInlineSearch()
    }), window.callEA(function() {
        e.setPageviewId();
        var t = !0,
            a = "Default",
            d = window.dnn || {};
        d.getVar && d.getVar("evoq_PersonalizedPageVariantName") && (a = d.getVar("evoq_PersonalizedPageVariantName"));
        var o = "";
        d.getVar && d.getVar("dnn_current_userid") && (o = d.getVar("dnn_current_userid"));
        n.addData("r", "pageview"), n.addData("a", e.accountId), n.addData("i", e.pageViewId), n.addData("v", e.version), n.addData("s", e.getSessionId()), n.addData("d", e.getVisitorId()), n.addData("pt", document.title), n.addData("ur", window.location.href), n.addData("hn", document.location.hostname), n.addData("rf", document.referrer), n.addData("pr", document.location.protocol), n.addData("la", navigator.language || navigator.userLanguage), n.addData("wi", Math.max(document.documentElement.clientWidth, window.innerWidth || 0)), n.addData("he", Math.max(document.documentElement.clientHeight, window.innerHeight || 0)), n.addData("tz", (new Date).getTimezoneOffset()), n.addData("ga", e.getGAId("legacy")), n.addData("vr", a), n.addData("u", o);
        var i = e.getContentItems();
        null !== i && (n.addData("ci", i), t = !1);
        var r = n.getQs();
        t ? e.sendTrackingRequest(r, !0) : e.sendTrackingPost(r, !0)
    }), window.callEA(function() {
        for (var e = 0; e < t.length; e++) {
            var n = t[e],
                a = n[e] || null,
                d = n[e + 1] || null,
                o = n[e + 2] || null,
                r = n[e + 3] || null;
            null !== a && null !== d && i(a, d, o, r)
        }
    }), window._eac.trackEvent = i, window._eac.trackVirtualPageview = o
}();