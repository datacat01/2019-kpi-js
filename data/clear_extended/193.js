var namespace = "particle-eip-telegraph-co-uk";
! function() {
    var Z, $;
    ! function() {
        "use strict";

        function t(e) {
            e ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0, this.blocks = f) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
        }
        var h = "object" == typeof window ? window : {},
            s = !h.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
        s && (h = global);
        var i = !h.JS_SHA1_NO_COMMON_JS && "object" == typeof module && module.exports,
            e = "function" == typeof define && define.amd,
            r = "0123456789abcdef".split(""),
            o = [-2147483648, 8388608, 32768, 128],
            n = [24, 16, 8, 0],
            a = ["hex", "array", "digest", "arrayBuffer"],
            f = [],
            u = function(i) {
                return function(e) {
                    return new t(!0).update(e)[i]()
                }
            },
            c = function() {
                var i = u("hex");
                s && (i = p(i)), i.create = function() {
                    return new t
                }, i.update = function(e) {
                    return i.create().update(e)
                };
                for (var e = 0; e < a.length; ++e) {
                    var n = a[e];
                    i[n] = u(n)
                }
                return i
            },
            p = function(t) {
                var h = eval("require('crypto')"),
                    s = eval("require('buffer').Buffer"),
                    i = function(e) {
                        if ("string" == typeof e) return h.createHash("sha1").update(e, "utf8").digest("hex");
                        if (e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (void 0 === e.length) return t(e);
                        return h.createHash("sha1").update(new s(e)).digest("hex")
                    };
                return i
            };
        t.prototype.update = function(e) {
            if (!this.finalized) {
                var t = "string" != typeof e;
                t && e.constructor === h.ArrayBuffer && (e = new Uint8Array(e));
                for (var i, r, o = 0, a = e.length || 0, s = this.blocks; o < a;) {
                    if (this.hashed && (this.hashed = !1, s[0] = this.block, s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), t)
                        for (r = this.start; o < a && r < 64; ++o) s[r >> 2] |= e[o] << n[3 & r++];
                    else
                        for (r = this.start; o < a && r < 64; ++o)(i = e.charCodeAt(o)) < 128 ? s[r >> 2] |= i << n[3 & r++] : (i < 2048 ? s[r >> 2] |= (192 | i >> 6) << n[3 & r++] : (i < 55296 || 57344 <= i ? s[r >> 2] |= (224 | i >> 12) << n[3 & r++] : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++o)), s[r >> 2] |= (240 | i >> 18) << n[3 & r++], s[r >> 2] |= (128 | i >> 12 & 63) << n[3 & r++]), s[r >> 2] |= (128 | i >> 6 & 63) << n[3 & r++]), s[r >> 2] |= (128 | 63 & i) << n[3 & r++]);
                    this.lastByteIndex = r, this.bytes += r - this.start, 64 <= r ? (this.block = s[16], this.start = r - 64, this.hash(), this.hashed = !0) : this.start = r
                }
                return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
            }
        }, t.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = !0;
                var e = this.blocks,
                    t = this.lastByteIndex;
                e[16] = this.block, e[t >> 2] |= o[3 & t], this.block = e[16], 56 <= t && (this.hashed || this.hash(), e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3, this.hash()
            }
        }, t.prototype.hash = function() {
            var e, t, i = this.h0,
                n = this.h1,
                r = this.h2,
                o = this.h3,
                a = this.h4,
                s = this.blocks;
            for (e = 16; e < 80; ++e) t = s[e - 3] ^ s[e - 8] ^ s[e - 14] ^ s[e - 16], s[e] = t << 1 | t >>> 31;
            for (e = 0; e < 20; e += 5) i = (t = (n = (t = (r = (t = (o = (t = (a = (t = i << 5 | i >>> 27) + (n & r | ~n & o) + a + 1518500249 + s[e] << 0) << 5 | a >>> 27) + (i & (n = n << 30 | n >>> 2) | ~i & r) + o + 1518500249 + s[e + 1] << 0) << 5 | o >>> 27) + (a & (i = i << 30 | i >>> 2) | ~a & n) + r + 1518500249 + s[e + 2] << 0) << 5 | r >>> 27) + (o & (a = a << 30 | a >>> 2) | ~o & i) + n + 1518500249 + s[e + 3] << 0) << 5 | n >>> 27) + (r & (o = o << 30 | o >>> 2) | ~r & a) + i + 1518500249 + s[e + 4] << 0, r = r << 30 | r >>> 2;
            for (; e < 40; e += 5) i = (t = (n = (t = (r = (t = (o = (t = (a = (t = i << 5 | i >>> 27) + (n ^ r ^ o) + a + 1859775393 + s[e] << 0) << 5 | a >>> 27) + (i ^ (n = n << 30 | n >>> 2) ^ r) + o + 1859775393 + s[e + 1] << 0) << 5 | o >>> 27) + (a ^ (i = i << 30 | i >>> 2) ^ n) + r + 1859775393 + s[e + 2] << 0) << 5 | r >>> 27) + (o ^ (a = a << 30 | a >>> 2) ^ i) + n + 1859775393 + s[e + 3] << 0) << 5 | n >>> 27) + (r ^ (o = o << 30 | o >>> 2) ^ a) + i + 1859775393 + s[e + 4] << 0, r = r << 30 | r >>> 2;
            for (; e < 60; e += 5) i = (t = (n = (t = (r = (t = (o = (t = (a = (t = i << 5 | i >>> 27) + (n & r | n & o | r & o) + a - 1894007588 + s[e] << 0) << 5 | a >>> 27) + (i & (n = n << 30 | n >>> 2) | i & r | n & r) + o - 1894007588 + s[e + 1] << 0) << 5 | o >>> 27) + (a & (i = i << 30 | i >>> 2) | a & n | i & n) + r - 1894007588 + s[e + 2] << 0) << 5 | r >>> 27) + (o & (a = a << 30 | a >>> 2) | o & i | a & i) + n - 1894007588 + s[e + 3] << 0) << 5 | n >>> 27) + (r & (o = o << 30 | o >>> 2) | r & a | o & a) + i - 1894007588 + s[e + 4] << 0, r = r << 30 | r >>> 2;
            for (; e < 80; e += 5) i = (t = (n = (t = (r = (t = (o = (t = (a = (t = i << 5 | i >>> 27) + (n ^ r ^ o) + a - 899497514 + s[e] << 0) << 5 | a >>> 27) + (i ^ (n = n << 30 | n >>> 2) ^ r) + o - 899497514 + s[e + 1] << 0) << 5 | o >>> 27) + (a ^ (i = i << 30 | i >>> 2) ^ n) + r - 899497514 + s[e + 2] << 0) << 5 | r >>> 27) + (o ^ (a = a << 30 | a >>> 2) ^ i) + n - 899497514 + s[e + 3] << 0) << 5 | n >>> 27) + (r ^ (o = o << 30 | o >>> 2) ^ a) + i - 899497514 + s[e + 4] << 0, r = r << 30 | r >>> 2;
            this.h0 = this.h0 + i << 0, this.h1 = this.h1 + n << 0, this.h2 = this.h2 + r << 0, this.h3 = this.h3 + o << 0, this.h4 = this.h4 + a << 0
        }, t.prototype.hex = function() {
            this.finalize();
            var e = this.h0,
                t = this.h1,
                i = this.h2,
                n = this.h3,
                o = this.h4;
            return r[e >> 28 & 15] + r[e >> 24 & 15] + r[e >> 20 & 15] + r[e >> 16 & 15] + r[e >> 12 & 15] + r[e >> 8 & 15] + r[e >> 4 & 15] + r[15 & e] + r[t >> 28 & 15] + r[t >> 24 & 15] + r[t >> 20 & 15] + r[t >> 16 & 15] + r[t >> 12 & 15] + r[t >> 8 & 15] + r[t >> 4 & 15] + r[15 & t] + r[i >> 28 & 15] + r[i >> 24 & 15] + r[i >> 20 & 15] + r[i >> 16 & 15] + r[i >> 12 & 15] + r[i >> 8 & 15] + r[i >> 4 & 15] + r[15 & i] + r[n >> 28 & 15] + r[n >> 24 & 15] + r[n >> 20 & 15] + r[n >> 16 & 15] + r[n >> 12 & 15] + r[n >> 8 & 15] + r[n >> 4 & 15] + r[15 & n] + r[o >> 28 & 15] + r[o >> 24 & 15] + r[o >> 20 & 15] + r[o >> 16 & 15] + r[o >> 12 & 15] + r[o >> 8 & 15] + r[o >> 4 & 15] + r[15 & o]
        }, t.prototype.toString = t.prototype.hex, t.prototype.digest = function() {
            this.finalize();
            var e = this.h0,
                t = this.h1,
                i = this.h2,
                n = this.h3,
                r = this.h4;
            return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r]
        }, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function() {
            this.finalize();
            var e = new ArrayBuffer(20),
                t = new DataView(e);
            return t.setUint32(0, this.h0), t.setUint32(4, this.h1), t.setUint32(8, this.h2), t.setUint32(12, this.h3), t.setUint32(16, this.h4), e
        };
        var y = c();
        i ? module.exports = y : (h.sha1 = y, e && define(function() {
            return y
        }))
    }(), Z = this, $ = function(e) {
        "use strict";
        e.parse = function() {
            var d = {
                    type: "Unknown",
                    browser: "",
                    engine: "",
                    version: "",
                    os: ""
                },
                e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            if (!e && "undefined" != typeof window && window.navigator && (e = window.navigator.userAgent), !e) return d;
            var p = e.toLowerCase();
            d.userAgent = e;
            var t, i, n, r = function(e) {
                    return e.test(p)
                },
                o = r(/chrome/i),
                a = r(/safari/i),
                s = r(/firefox/i),
                c = r(/vivaldi/i),
                l = r(/opera/i),
                m = r(/opera mini/i),
                h = r(/edge/),
                u = r(/msie/i),
                g = r(/midori/i),
                f = r(/maxthon/i),
                w = r(/netscape/i),
                y = r(/konqueror/i),
                b = r(/minefield/i),
                v = r(/omniweb/i),
                x = r(/ucbrowser/),
                S = r(/webkit/i),
                A = r(/gecko/i),
                k = r(/presto/i),
                T = r(/trident/i),
                _ = r(/avant browser/i),
                E = r(/seamonkey/i),
                I = r(/deepnet/i),
                N = r(/dorothy/i),
                O = r(/fennec/i),
                B = r(/maemo/i);
            return d.type = function() {
                var e = void 0;
                switch (!0) {
                    case r(/(ipad|android(?!.*mobile))/i) || r(/\W(kindle|silk|tablet)\W/i):
                        e = "Tablet";
                        break;
                    case r(/(iphone|ipod|((?:android)?.*?mobile)|j2me|mobi|blackberry|nokia|maemo|mini)/i):
                        e = "Mobile";
                        break;
                    case r(/(bot|crawler|spider|slurp|seeker)/i):
                        e = "Bot";
                        break;
                    case r(/(fetcher|scan|valid|check|news|engine)/i):
                        e = "Util";
                        break;
                    default:
                        e = "Desktop"
                }
                return e
            }(), d.os = (n = "", "Bot" === d.type || "Util" === d.type || (r(/android/i) ? n = "Android" : r(/(ipad|iphone|ipod)/i) ? n = "iOS" : r(/(blackberry)/i) ? n = "BlackBerry" : r(/(symbos|symbian|nokia|maemo)/i) ? n = "SymbianOS" : r(/linux/i) ? n = "Linux" : r(/mac/i) ? n = "Mac" : r(/iemobile/i) ? n = "WindowsPhone" : r(/win/i) ? n = r(/windows nt/i) ? "Windows NT" : "Windows" : r(/cros/i) && (n = "ChromeOS")), n), d.browser = (i = "", "Bot" === d.type || "Util" === d.type || (!S || !o || g || c || h || x ? b ? i = "Minefield" : A && s && !O && !B ? i = "Firefox" : !S || !a || o || g || v || x || c || f || N ? I ? i = "Deepnet Explorer" : v ? i = "OmniWeb" : x ? i = "UCBrowser" : y ? i = "Konqueror" : f ? i = "Maxthon" : c ? i = "Vivaldi" : g ? i = "Midori" : m ? (i = "Opera Mini", "Android" === d.os && "Tablet" === d.type && (d.type = "Unknown")) : l ? i = "Opera" : h ? i = "Edge" : _ ? i = "Avant Browser" : E ? i = "SeaMonkey" : r(/iemobile/i) ? i = "IEMobile" : !u || l || c ? N ? i = "Dorothy Browser" : O ? i = "Fennec" : B ? i = "Maemo Browser" : w && (i = "Netscape") : i = "MSIE" : i = "Safari" : i = "Chrome", i || "SymbianOS" === d.os && (i = r(/doris/i) ? "Doris" : r(/gobrowser/) ? "GoBrowser" : "Nokia Browser")), i), d.engine = (t = "", "Bot" === d.type || "Util" === d.type ? r(/google/i) ? t = r(/image/i) ? "Googlebot-Image" : r(/feedfetcher/i) ? "Feedfetcher-Google" : r(/appengine/i) ? "AppEngine-Google" : "Googlebot" : r(/bing/i) ? t = "Bingbot" : r(/baidu/i) ? t = "BaiduSpider" : r(/yandexbot/i) ? t = "YandexBot" : r(/yandeximages/i) ? t = "YandexImages" : r(/yahoo/i) ? t = r(/yahooseeker/i) ? "YahooSeeker" : "Yahoo! Slurp" : r(/soso/i) ? t = "Sosospider" : r(/exabot/i) ? t = "Exabot" : r(/sogou/i) ? t = "Sogou Spider" : r(/newsgator/i) && (t = "NewsGator") : S ? t = "Webkit" : A ? t = "Gecko" : T ? t = "Trident" : k && (t = "Presto"), t), d.version = function() {
                var e, t, i = "Bot" === d.type || "Util" === d.type ? d.engine : d.browser,
                    n = "";
                if (I) n = function() {
                    for (var e = "", t = p.split(";"), i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (/deepnet explorer/.test(n)) {
                            e = n.replace(/[^0-9.]/gi, "");
                            break
                        }
                    }
                    return e
                }();
                else if ("YahooSeeker" === i) n = p.split(" ")[0].replace("yahooseeker/", "");
                else if (_ || u) n = function() {
                    for (var e = "", t = p.split(";"), i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (/msie/.test(n)) {
                            e = n.replace(/[^0-9.]/gi, "");
                            break
                        }
                    }
                    return e
                }();
                else if ("Nokia Browser" === d.browser) n = (t = p.split("symbianos/"))[1] ? parseFloat(t[1]) : "";
                else if ("GoBrowser" === d.browser) n = (e = p.split("gobrowser/"))[1] ? parseFloat(e[1]) : "";
                else {
                    var r = i.toLowerCase(),
                        o = r,
                        a = p.replace(o, "________").split(" ");
                    "safari" === r || N ? r = "version/" : r += "/";
                    for (var s = 0; s < a.length; s++) {
                        var c = a[s].replace("________", o);
                        if (-1 !== c.indexOf(r)) {
                            var l = c.split("/");
                            1 < l.length && (n = l[1]);
                            break
                        }
                    }
                }
                return n.indexOf(";") && (n = n.split(";")[0]), n
            }(), d
        }, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, "object" == typeof exports && "undefined" != typeof module ? $(exports) : "function" == typeof define && define.amd ? define(["exports"], $) : $(Z.DeviceDetector = {});
    var debug = !1,
        log = function(e) {},
        particles = [].slice.call(document.getElementsByClassName("tmg-particle")),
        collections = [].slice.call(document.getElementsByClassName("tmg-collection")),
        sent = !1,
        i, metas = document.getElementsByTagName("META"),
        inMessage, one = !0,
        channel, deviceInfo = DeviceDetector.parse(navigator.userAgent),
        environment, initASent = !1,
        visibilityViewSent = !1,
        interactASent = !1,
        finalASent = !1,
        os = deviceInfo.os,
        deviceType = deviceInfo.type,
        embedId, pageTime = 0,
        pageTimestamp = 0,
        active = !0,
        activePageTime = 0,
        activePageTimestamp = 0,
        onScreen = !1,
        timeOnScreen = 0,
        timeOnScreenTimestamp, embedInteractions = 0,
        otherInteractions = 0,
        mouseOvers = 0,
        mouseHangTime = 0,
        mouseOverTimestamp = 0,
        showMorePressed = 0,
        clickToRegister = 0,
        activeElement;
    channel = document.querySelectorAll("meta[name='tmgads.businessSegment']")[0] ? document.querySelectorAll("meta[name='tmgads.businessSegment']")[0].content : "default";
    var embedCodes = [];
    log("Particles: " + particles.length);
    for (var i = 0; i < particles.length; i++) "true" !== particles[i].getAttribute("data-widget-static") && (embedCodes[particles[i].getAttribute("id")] = particles[i].outerHTML + '<script src="https://cf.eip.telegraph.co.uk/particle-embed/js/particle.js"><\/script>', environment = particles[i].getAttribute("data-data-uri").split(".eip")[0].split("api")[1], appendIframe(particles[i].getAttribute("data-html-uri"), particles[i]), removeElement(particles[i]), initiateAnalytics(particles[i].getAttribute("id")));

    function analyticsOnWindowScroll(e) {
        analyticsCheckVisible(e) != onScreen && ((onScreen = !onScreen) ? (timeOnScreenTimestamp = (new Date).getTime(), sendAnalytics("view")) : timeOnScreen += (new Date).getTime() - timeOnScreenTimestamp)
    }

    function sendAnalytics(e) {
        var t = {},
            i = !1;

        function n() {
            t.id = embedId, t.oi = otherInteractions, t.ei = embedInteractions, t.dv = timeOnScreen || 0, t.dmh = mouseHangTime, t.dop = pageTime, t.dopa = activePageTime, t.smp = showMorePressed, t.ctr = clickToRegister, t.t = "p", t.l = window.location.protocol + "//" + window.location.hostname + window.location.pathname, t.p = deviceType, t.os = os, i = !0
        }
        switch (pageTime = (new Date).getTime() - pageTimestamp, onScreen && (timeOnScreen += (new Date).getTime() - timeOnScreenTimestamp), e) {
            case "initial":
                initASent || (initASent = !0, t = {
                    id: embedId,
                    t: "p",
                    v: 1,
                    l: window.location.protocol + "//" + window.location.hostname + window.location.pathname,
                    p: deviceType,
                    os: os
                });
                break;
            case "view":
                visibilityViewSent || (visibilityViewSent = !0, t = {
                    id: embedId,
                    t: "p",
                    vv: 1,
                    l: window.location.protocol + "//" + window.location.hostname + window.location.pathname,
                    p: deviceType,
                    os: os
                });
                break;
            case "interaction":
                t = {
                    id: embedId,
                    t: "p",
                    iv: interactASent ? 0 : 1,
                    oi: otherInteractions,
                    ei: embedInteractions,
                    l: window.location.protocol + "//" + window.location.hostname + window.location.pathname,
                    p: deviceType,
                    os: os,
                    ctr: 0 < clickToRegister ? 1 : 0,
                    smp: 0 < showMorePressed ? 1 : 0
                }, interactASent = !(showMorePressed = clickToRegister = 0);
                break;
            case "final":
                if (finalASent) return;
                t.fv = finalASent ? 0 : 1, finalASent = !0, n();
                break;
            default:
                n()
        }
        if (t.id) {
            switch (t.ts = (new Date).getTime(), t.sig = sha1(JSON.stringify(t)), environment) {
                case "":
                    (r = new XMLHttpRequest).open("POST", "https://analytics.eip.telegraph.co.uk/store"), r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), r.send(JSON.stringify(t));
                    break;
                case "-test":
                    var r;
                    (r = new XMLHttpRequest).open("POST", "https://analytics-test.eip.telegraph.co.uk/store"), r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), r.send(JSON.stringify(t))
            }
            i && (pageTimestamp = (new Date).getTime(), activePageTimestamp = (new Date).getTime(), timeOnScreenTimestamp = (new Date).getTime(), clickToRegister = showMorePressed = activePageTime = pageTime = mouseHangTime = timeOnScreen = embedInteractions = otherInteractions = 0)
        }
    }

    function initiateAnalytics(e) {
        if (embedId = e) {
            var t = document.getElementById(embedId);
            window.onscroll = function() {
                analyticsOnWindowScroll(t)
            }, document.body.addEventListener("click", function() {
                otherInteractions++, sendAnalytics("interaction")
            }, !0), window.onmouseover = function() {
                active || (activePageTimestamp = (new Date).getTime(), active = !0)
            }, window.onmouseout = function() {
                activePageTime += (new Date).getTime() - activePageTimestamp, active = !1
            }, window.onbeforeunload = function() {
                sendAnalytics("final")
            }, window.onunload = function() {
                sendAnalytics("final")
            }, window.onclose = function() {
                sendAnalytics("final")
            }, window.addEventListener("pagehide", function() {
                sendAnalytics("final")
            }), window.addEventListener("beforeunload", function() {
                sendAnalytics("final")
            }), t.onmouseover = function() {
                mouseOverTimestamp = (new Date).getTime()
            }, t.onmouseout = function() {
                mouseHangTime += (new Date).getTime() - mouseOverTimestamp
            }, setInterval(function() {
                activeElement != document.activeElement && (activeElement = document.activeElement) && activeElement.id == embedId && activeElement.tagName
            }, 500), activeElement = document.activeElement, analyticsOnWindowScroll(t), pageTimestamp = (new Date).getTime(), activePageTimestamp = (new Date).getTime(), sendAnalytics("initial")
        }
    }

    function analyticsCheckVisible(e) {
        var t = e.getBoundingClientRect(),
            i = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(t.bottom < 0 || 0 <= t.top - i)
    }

    function analyticsEmbedEvent(e) {
        switch (e) {
            case "click":
                embedInteractions++
        }
        sendAnalytics("interaction")
    }

    function getUrlParam(e, t) {
        t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
        var i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }

    function inlineResize(e) {
        var t = particles[i].getAttribute("id"),
            n = document.getElementById(t);
        window.innerWidth < 730 ? n.style.width = "100%" : window.innerWidth < 1008 ? n.style.width = "calc(100% - 60px)" : n.style.width = "calc(100% - 82px)"
    }

    function appendIframe(e, t) {
        var i, n = document.createElement("iframe"),
            r = t.getAttribute("id"),
            o = t.getAttribute("class").replace("tmg-particle ", ""),
            a = t.getAttribute("data-widget-size"),
            s = "true" == t.getAttribute("data-reg-required"),
            c = t.getAttribute("data-reg-redirect"),
            l = "true" == t.getAttribute("data-sub-required"),
            d = t.getAttribute("data-sub-redirect"),
            p = t.getAttribute("data-prefill"),
            m = t.getAttribute("data-expandable"),
            h = t.getAttribute("data-embeddable"),
            u = navigator.userAgent.match(/(iPad|iPhone|iPod)/g),
            g = window.location.href.indexOf("data:") ? window.location.href : "",
            f = t.querySelector("a").innerHTML;
        n.className = "tmg-particle-" + o, n.style.width = u ? "1px" : "100%", u && "small" !== a && "inline" !== a && (n.style.minWidth = "100%"), n.style.border = "none", n.style.position = "static", n.style.visibility = "visible", n.style.height = "0px", n.style.padding = "0px", n.style.margin = "10px 0 10px 0", n.style.transition = "height .3s linear", n.style.display = "block", "small" === a && (n.style.width = "auto", n.style.float = "left", n.style.margin = "5px 10px 5px 0"), "inline" === a && (window.addEventListener("resize", function(e) {
            window.innerWidth < 730 ? (n.style.margin = "0px 0px 14px", n.style.width = "100%") : window.innerWidth < 1008 ? (n.style.margin = "-24px 0px 24px", n.style.width = "calc(100% - 60px)") : (n.style.margin = "-24px 0px 24px", n.style.width = "calc(100% - 82px)")
        }), window.innerWidth < 730 ? (n.style.margin = "0px 0px 14px", n.style.width = "100%") : window.innerWidth < 1008 ? (n.style.margin = "-24px 0px 24px", n.style.width = "calc(100% - 60px)") : (n.style.margin = "-24px 0px 24px", n.style.width = "calc(100% - 82px)"), n.style.float = "right"), n.setAttribute("id", r), n.setAttribute("allowtransparency", "true"), n.setAttribute("frameborder", "0"), n.setAttribute("scrolling", "no"), n.setAttribute("data-widget-size", a), n.setAttribute("data-prefill", p), m && n.setAttribute("data-widget-expandable", m);
        var w = !!(window.tmg && window.tmg.user && window.tmg.user.isLoggedIn) && window.tmg.user.isLoggedIn(),
            y = !!(window.tmg && window.tmg.user && window.tmg.user.isLoggedIn) && window.tmg.user.isSubscriber(),
            b = e[1] && "" !== e[1] ? e[1] : "generic";
        if (s && !w && window.tmg ? n.src = c ? c + "?content_title=" + f + "&id=" + r + (p ? "&prefill=" + p : "") : "https://cf.eip.telegraph.co.uk/particle-registration/generic/registration.html?content_title=" + f + "&id=" + r : l && !y && window.tmg ? n.src = d ? d + "?content_title=" + f + "&id=" + r + (p ? "&prefill=" + p : "") : "https://secure.telegraph.co.uk/secure/registration/?ICID=" + b + "_genericsub_generic_generic_particle_" + r : n.src = e + "?ref=" + g + "&title=" + document.title + (p ? "&prefill=" + p : ""), insertAfter(t, n), iframeWidth = n.clientWidth, i = t.parentElement.clientWidth, "small" === a && ("breakout-box" === o && (n.style.width = "220px", n.style.margin = "0 20px 5px 0"), 65 < iframeWidth / i * 100 && (n.style.width = "100%", n.style.float = "none", n.style.margin = "10px 0")), "1" == h) {
            var v = document.createElement("div");
            v.innerHTML = '<span class="embed-button" title="Get embed code"></span><textarea>' + embedCodes[r] + "</textarea>", v.classList.add("embed-wrapper"), insertAfter(n, v);
            var x = document.createElement("link");
            x.href = "https://cf.eip.telegraph.co.uk/particle-embed/css/particle-share.css", x.type = "text/css", x.rel = "stylesheet", insertAfter(v, x), v.getElementsByClassName("embed-button")[0].addEventListener("click", function(e) {
                this.parentNode.getElementsByTagName("textarea")[0].select(), document.execCommand("copy") && this.classList.add("copied"), this.parentNode.classList.toggle("show"), this.parentNode.getElementsByTagName("textarea")[0].select(), this.parentNode.getElementsByTagName("textarea")[0].addEventListener("click", function(e) {
                    this.select()
                })
            }, !0)
        }
    }

    function showMore(e, t, i) {
        var n, r, o = i,
            a = document.querySelectorAll(".more-" + e)[0];
        a ? "none" === a.parentNode.style.display && (t.style.height = o) : (t.style.height = "500px", (n = document.createElement("div")).innerHTML = '<span class="show-more-button load-more__button article-body-image-caption more-' + e + '"> Show more </span>', n.classList.add("more-wrapper"), (r = document.createElement("link")).href = "https://cf.eip.telegraph.co.uk/particle-embed/css/particle-more.css", r.type = "text/css", r.rel = "stylesheet", insertAfter(t, n), n.appendChild(r));
        for (var s = document.querySelectorAll(".more-" + e)[0].cloneNode(); document.querySelectorAll(".more-" + e)[0].firstChild;) s.appendChild(document.querySelectorAll(".more-" + e)[0].lastChild);
        document.querySelectorAll(".more-" + e)[0].parentNode.replaceChild(s, document.querySelectorAll(".more-" + e)[0]), document.querySelectorAll(".more-" + e)[0].addEventListener("click", function() {
            showMorePressed = 1, t.style.height = o, this.parentNode.style.display = "none"
        })
    }

    function removeShowMore(e) {
        var t = document.querySelectorAll(".more-" + e)[0];
        t && t.parentNode.remove()
    }

    function removeElement(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }

    function insertAfter(e, t) {
        e.parentNode.insertBefore(t, e.nextSibling)
    }
    window[namespace + "-script-loaded"] ? log("Script already loaded") : (window[namespace + "-script-loaded"] = !0, window.addEventListener("message", function(e) {
        if (e.origin.match(/eip\.telegraph\.co\.uk/)) {
            var t, n, r = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
            if (r.id && (n = document.getElementById(r.id), null != channel && n && n.contentWindow.postMessage(JSON.stringify({
                    channelId: channel
                }), "*")), n) {
                log("Found frame: " + r.id);
                var o = n.parentNode.parentNode;
                if (t = n.className, o.classList.contains("html-embed") && ("small" == n.getAttribute("data-widget-size") ? (n.style.width = "100%", o.classList ? o.classList.add("version-2") : n.className += " version-2") : (o.classList ? o.classList.add("version-1") : n.className += " version-1", "tmg-particle-results-bar" == t && (o.style.marginBottom = "0px"))), r.event && (r.register && (clickToRegister = 1), analyticsEmbedEvent(r.event)), r.tmg && n.contentWindow.postMessage(JSON.stringify({
                        tmg: !0,
                        property: r.property,
                        value: window.particle.tmgFactory(r.property, r.isFunction)
                    }), "*"), r.window && n.contentWindow.postMessage(JSON.stringify({
                        tmg: !0,
                        property: r.property,
                        value: window.particle.windowFactory(r.property, r.isFunction)
                    }), "*"), r.cookie && n.contentWindow.postMessage(JSON.stringify({
                        cookie: !0,
                        value: Cookies.get(r.cookieName)
                    }), "*"), r.register && (window.location.href = "https://secure.telegraph.co.uk/secure/register/?redirectTo=" + encodeURIComponent(window.location.href) + "&q=registration&icid=generic_genericreg_generic_generic_particle_" + r.id), r.subscribe) {
                    var a = window.location.href.replace("//", "").split("/"),
                        s = a[1] && "" !== a[1] ? a[1] : "generic";
                    window.location.href = "https://secure.telegraph.co.uk/secure/payment/?productId=nyytq4zthbvwsoliojugwyzzmyzha3dt&offerId=freetrial1-website-monthly-UR257&campaignId=649X&icid=" + s + "_genericsub_generic_generic_particle_" + r.id + "&redirectTo=" + encodeURIComponent(window.location.href)
                }
                r.login && (window.location.href = "https://secure.telegraph.co.uk/secure/login/?ICID=generic_genericreg_generic_generic_particle_" + r.id + "&redirectTo=" + encodeURIComponent(window.location.href)), r.height && (500 < r.height && 250 < r.height - 500 && (1 == n.getAttribute("data-widget-expandable") || "true" == n.getAttribute("data-widget-expandable")) ? showMore(r.id, n, r.height + "px") : ("null" !== n.getAttribute("data-prefill") && "" !== n.getAttribute("data-prefill") || (n.style.height = r.height + "px"), removeShowMore(r.id, n))), getUrlParam(t) && (log("Found query attribute " + t), n.contentWindow.postMessage(JSON.stringify({
                    tmgQuery: getUrlParam(t)
                }), "*")), "tmg-particle-scrollable-graphic" !== t && "tmg-particle-scrolling-timeline" !== t && "tmg-particle-f1-results" !== t && "tmg-particle-animated-results" !== t || window.addEventListener("scroll", function() {
                    widget = document.getElementById(r.id), rect = widget.getBoundingClientRect(), widget.contentWindow.postMessage({
                        uid: r.id,
                        top: rect.top - 2 * rect.top
                    }, "*")
                })
            }
            for (r.prefill && (prefillFrames = document.querySelectorAll("[data-prefill='" + r.prefill + "']"), prefillFrames.forEach(function(e) {
                    var t = e.parentNode.parentNode;
                    t.classList ? t.classList.add("version-1") : n.className += " version-1", e.style.height = r.height + "px"
                })), i = 0; i < metas.length; i++)
                if ("fb:app_id" === metas[i].getAttribute("property")) {
                    log("Found the fb meta"), inMessage = JSON.stringify({
                        url: window.location.href,
                        fbAppId: metas[i].getAttribute("content")
                    }), sent = !0;
                    break
                } sent || (log("Didn't find fb meta"), inMessage = JSON.stringify({
                url: window.location.href
            })), log("Sending message: " + inMessage), e.source.postMessage(inMessage, e.origin)
        }
    }, !1));
    var particleFunctions = {
        icid: function(e) {
            var t = e || "genericreg";
            return window.location.href.replace("//", "").split("/")[1] + "_" + t + "_generic_generic_particle_" + embedId
        },
        tmgFactory: function(e, t) {
            var n = function(e, t) {
                if (void 0 === e) return !1;
                var i = t.indexOf(".");
                return -1 < i ? n(e[t.substring(0, i)], t.substr(i + 1)) : e[t]
            };
            return t ? n(window.tmg, e)() : n(window.tmg, e)
        },
        windowFactory: function(e, t) {
            var n = function(e, t) {
                if (void 0 === e) return !1;
                var i = t.indexOf(".");
                return -1 < i ? n(e[t.substring(0, i)], t.substr(i + 1)) : e[t]
            };
            return t ? n(window, e)() : n(window, e)
        }
    };
    window.particle = particleFunctions
}();