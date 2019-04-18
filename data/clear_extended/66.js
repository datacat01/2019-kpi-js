"undefined" != typeof window && function(h, v) {
    "use strict";
    if (void 0 === h.YAFT) {
        var T, S, n, o, a = !1,
            w = !1,
            i = !1,
            F = !1,
            A = !0,
            C = (new Date).getTime(),
            r = !1,
            e = v.documentElement,
            P = {
                usePrefixRegex: !0,
                useNormalizeCoverage: !0,
                canShowVisualReport: !0,
                canShowPerfBar: !1,
                useNativeStartRender: !0,
                useNativeStartRenderMeaningful: !1,
                generateHAR: !1,
                maxWaitTime: 3e3,
                modules: [],
                modulesExclude: [],
                modulesAft2Container: [],
                customReportModules: [],
                includeOnlyAft2: !1,
                plugins: [],
                whiteListedContainerElements: ["div", "section", "ul", "ol", "li", "header", "img", "a", "video", "figure", "span", "picture"],
                customStartRender: !1,
                preProcess: !1,
                getAccurateFirstPaint: !1,
                fpsMinSampleCount: 15,
                fpsMissLimit: 18,
                preferDataModNameOverId: !1
            },
            E = 0,
            R = 0,
            y = 0,
            N = [],
            Y = {},
            b = {},
            M = 0,
            u = {},
            x = 0,
            s = 0,
            D = 0,
            c = 0,
            d = 0,
            l = !1,
            g = [];
        (T = _()) && T.timing && (C = T.timing.navigationStart, T.now = T.now || T.webkitNow || T.msNow || T.mozNow || void 0, T.now && (void 0 === T.getEntriesByType && void 0 === T.webkitGetEntriesByType || void 0 === T.getEntriesByName && void 0 === T.webkitGetEntriesByName || (w = !0), h.requestAnimationFrame && h.cancelAnimationFrame && (i = !0))), h.YAFT = {
            data: [],
            triggerPerf: function(e, t) {
                if (!r && a) {
                    if (r = !0, !w) return t(null, "Nav or resource timing or both are not available"), !1;
                    P.maxWaitTime && 0 < P.maxWaitTime ? c = setTimeout(function() {
                        p(e, t)
                    }, P.maxWaitTime) : p(e, t)
                }
            },
            triggerCustomTiming: function(e, t, r) {
                if (!w) return !1;
                var n, o, i, a, s;
                YAFT.isInitialized() && (S || (S = q()), (n = v.querySelector(YAFT.getModuleSelector(e, !1))) && (o = YAFT.getModuleName(n), n.modName = o, -1 === P.modulesExclude.indexOf(o) && (b[o] = n, a = {
                    modStart: t,
                    modEnd: r
                }, s = (i = n).modName, u[s] = m(i, a))))
            },
            getFinalModulesReport: function() {
                return u
            },
            reset: function() {
                r = !(a = !0), b = [], u = {}
            },
            perfExists: function() {
                return w
            },
            isInitialized: function() {
                return a
            },
            getConfig: function() {
                return P
            },
            updateConfig: function(e) {
                var t;
                for (t in e) P.hasOwnProperty(t) && e.hasOwnProperty(t) && void 0 !== P[t] && void 0 !== e[t] && (P[t] = e[t])
            },
            getPerformance: _,
            init: function(e, t) {
                if (this.reset(), !w) return t(null, "Nav or resource timing or both are not available"), !1;
                this.getQueryStrings().showaft && (F = !0), "0" === this.getQueryStrings().perfbar && (A = !1), this.updateConfig(e), T.timing.loadEventStart > T.timing.navigationStart ? YAFT.triggerPerf("deferred", t) : h.addEventListener ? (h.addEventListener("load", function() {
                    YAFT.triggerPerf("load", t)
                }, !1), h.addEventListener("unload", function() {
                    YAFT.triggerPerf("unload", t)
                }, !1)) : h.attachEvent && (h.attachEvent("onload", function() {
                    YAFT.triggerPerf("load", t)
                }), h.attachEvent("onunload", function() {
                    YAFT.triggerPerf("unload", t)
                }))
            },
            AFT2: {
                start: function() {
                    if (b = {}, u = {}, s = 0, !w || !a) return !1;
                    !0 === F && P.canShowVisualReport && h.YAFT_REPORT && h.YAFT_REPORT.removeReport && (h.YAFT_REPORT.removeExtras(), h.YAFT_REPORT.removeReport()), c && clearTimeout(c), d && clearTimeout(d);
                    try {
                        T.clearResourceTimings ? T.clearResourceTimings() : T.webkitClearResourceTimings && T.webkitClearResourceTimings()
                    } catch (e) {}
                    x = T.now(), x + C
                },
                setAFT2StartRender: function() {
                    if (!w || !a) return !1;
                    0 === s && (s = T.now())
                },
                getAFT2StartRender: function() {
                    return s
                },
                end: function(e) {
                    var t = {},
                        r = {},
                        n = {},
                        o = {},
                        i = 0;
                    if (!w || !a) return e(null, "Nav or resource timing or both are not available or YAFT is not initialized"), !1;
                    s || (s = T.now()), D = s - x, P.maxWaitTime && 0 < P.maxWaitTime && (d = setTimeout(function() {
                        S || (S = q()), Y = O(), P.preProcess && "function" == typeof P.preProcess && P.preProcess(), i = YAFT.getDomElementsCount(), B(P.modules, P.modulesExclude, P.modulesAft2Container), k(b, P.includeOnlyAft2), n = YAFT.getFinalModulesReport(), R = z(n), r = W(n), y = r.normTotalCoveragePercentage, M = V(r.aftIntervals), P.generateHAR && (o = L(Y)), t = {
                            aft: r.aft,
                            startRender: D,
                            event: "aft2",
                            modulesReport: n,
                            totalCoveragePercentage: R,
                            normTotalCoveragePercentage: y,
                            domElementsCount: i,
                            resources: Y,
                            har: o,
                            visuallyComplete: M
                        }, e && e(t), YAFT.data.push(t), !0 === F && P.canShowVisualReport && h.YAFT_REPORT && h.YAFT_REPORT.drawReport && h.YAFT_REPORT.drawReport(t, r.aftIntervals)
                    }, P.maxWaitTime))
                }
            },
            FPS: {
                start: function(e) {
                    if (!i) return !1;
                    l = !1, o && h.cancelAnimationFrame(o), n = e, g.length = 0, l = !0, o = h.requestAnimationFrame(t)
                },
                stop: function(e, t) {
                    var r;
                    return l = !1, i ? (o && h.cancelAnimationFrame(o), n !== e ? (t && t("FPS stop action cannot be different than start action"), !1) : ((r = f()).action = e, r.avgFps ? (t && t(null, r), YAFT.logToConsole(r), r) : (t && t("FPS is not available"), !1))) : (t && t("FPS is not available for this browser"), !1)
                }
            },
            getDomElementsCount: function() {
                return v.getElementsByTagName("*").length
            },
            getTTFB: function() {
                return w ? T.timing.responseStart - C : 0
            },
            getPageLoadTime: function() {
                return w ? T.timing.loadEventStart - C : 0
            },
            getDomContentLoaded: function() {
                return w ? T.timing.domContentLoadedEventStart - C : 0
            },
            getStartRenderTime: function() {
                var e, t, r, n, o, i;
                if (!w) return 0;
                if (P.customStartRender && "function" == typeof P.customStartRender) return P.customStartRender();
                if (e = this.getDomContentLoaded(), (o = h.performance.getEntriesByType("paint")) && o.length && 0 < o.length) {
                    if (P.useNativeStartRenderMeaningful)
                        for (i = 0; i < o.length; i += 1)
                            if ("first-contentful-paint" === o[i].name) {
                                t = o[i].startTime;
                                break
                            } if (void 0 === t)
                        for (i = 0; i < o.length; i += 1)
                            if ("first-paint" === o[i].name) {
                                t = o[i].startTime;
                                break
                            }
                }
                if (void 0 === t && ("msFirstPaint" in h.performance.timing ? t = h.performance.timing.msFirstPaint - C : "chrome" in h && "loadTimes" in h.chrome && h.chrome.loadTimes && "firstPaintTime" in (r = h.chrome.loadTimes()) && 0 < r.firstPaintTime && (n = r.startLoadTime, "requestTime" in r && 0 < r.requestTime && (n = r.requestTime), r.firstPaintTime >= n && (t = 1e3 * (r.firstPaintTime - n)))), !0 === P.getAccurateFirstPaint && (void 0 === t || t < 0 || 12e4 < t)) {
                    t = h.performance.timing.responseStart - C;
                    for (var a = {}, s = v.getElementsByTagName("head")[0].children, u = 0; u < s.length; u++) {
                        var c = s[u];
                        "SCRIPT" === c.tagName && c.src && !c.async && (a[c.src] = !0), "LINK" === c.tagName && "stylesheet" === c.rel && c.href && (a[c.href] = !0)
                    }
                    for (var d = h.performance.getEntriesByType("resource"), l = !1, g = 0; g < d.length; g++)
                        if (l || !a[d[g].name] || "script" !== d[g].initiatorType && "link" !== d[g].initiatorType) l = !0;
                        else {
                            var m = d[g].responseEnd;
                            (void 0 === t || t < m) && (t = m)
                        }
                }
                return void 0 === t || t < 0 || 12e4 < t && e < t ? e : t
            },
            getDomInteractive: function() {
                return w ? T.timing.domInteractive - C : 0
            },
            getNow: function() {
                return w ? T.now() : 0
            },
            getQueryStrings: function() {
                if (this.qParams) return this.qParams;
                var e = {},
                    t = "",
                    r = h.location.search.slice(1).split("&"),
                    n = 0,
                    o = r.length || 0;
                for (n = 0; n < o; n += 1) e[(t = r[n].split("="))[0]] = t[1] || "";
                return this.qParams = e
            },
            getViewport: function() {
                return S
            },
            getVersion: function() {
                return "0.3.26"
            },
            logToConsole: function(e) {
                w && F && console && console.log && console.log(e)
            },
            getModuleSelector: function(e, t) {
                for (var r = [], n = t ? "^" : "", o = t ? "*" : "", i = 0, a = P.whiteListedContainerElements.length; i < a; i++) r.push(P.whiteListedContainerElements[i] + "[id" + n + '="' + e + '"]');
                return r.push(o + "[data-yaft-module" + n + '="' + e + '"]'), r.join(",")
            },
            getModuleName: function(e) {
                return P.preferDataModNameOverId ? e.getAttribute("data-yaft-module") || e.id || void 0 : e.id || e.getAttribute("data-yaft-module") || void 0
            },
            getElemResourceUrl: function(e) {
                var t, r = "",
                    n = [];
                return "VIDEO" === e.nodeName || (e.src ? r = e.src : (t = e.currentStyle || window.getComputedStyle(e, !1)) && t.backgroundImage && (n = t.backgroundImage.match(/url\((["']{0,1})([^'"]+)\1\)$/)) && 3 === n.length && (r = n[2])), r
            }
        }
    }

    function L(e) {
        var t, r, n, o, i, a = navigator.userAgent,
            s = navigator.appVersion,
            u = T.timing,
            c = u.navigationStart,
            d = 0,
            l = 0,
            g = 0,
            m = 0,
            f = -1,
            p = 0,
            h = 0;
        for (o = {
                log: {
                    version: "1.2",
                    creator: {
                        name: "YAFT",
                        version: "0.1.0"
                    },
                    browser: {
                        name: a,
                        version: s
                    },
                    pages: [{
                        startedDateTime: new Date(c).toISOString(),
                        id: "Page_1",
                        title: v.location.href,
                        pageTimings: {
                            onContentLoad: u.domInteractive - c,
                            onLoad: u.loadEventStart - c
                        }
                    }],
                    entries: [],
                    comment: ""
                }
            }, i = 0; i < e.length; i += 1) t = e[i], r = new Date(Math.round(c + t.start)), d = Math.round(t.dnsDuration), l = Math.round(t.tcpDuration), f = Math.round(t.sslDuration), g = Math.round(t.responseStart - t.requestStart), m = Math.round(t.responseDuration), p = Math.round(t.duration) - d - l - g - m, h = Math.round(t.duration), p < 0 && (h -= p, p = 0), n = {
            pageref: "Page_1",
            startedDateTime: r.toISOString(),
            time: h,
            request: {
                method: "GET",
                url: t.url,
                httpVersion: "HTTP/1.1",
                cookies: [],
                headers: [],
                queryString: [],
                headersSize: -1,
                bodySize: -1
            },
            response: {
                status: "200",
                statusText: "OK",
                httpVersion: "HTTP/1.0",
                cookies: [],
                headers: [],
                content: {
                    size: -1,
                    compression: 0,
                    mimeType: ""
                },
                redirectURL: "",
                headersSize: -1,
                bodySize: -1
            },
            cache: {},
            timings: {
                blocked: -1,
                dns: d,
                connect: l,
                send: g,
                ssl: f,
                wait: p,
                receive: m
            }
        }, o.log.entries.push(n);
        return o
    }

    function O() {
        var e, t, r, n, o, i = [],
            a = 0,
            s = [];
        for (i.push((n = T.timing, o = T.getEntries("resource")[0], {
                url: v.location.href,
                start: 0,
                transferSize: void 0 !== o.transferSize ? o.transferSize : -1,
                duration: n.responseEnd - n.navigationStart,
                durationFromNStart: n.responseEnd - n.navigationStart,
                redirectStart: 0 === n.redirectStart ? 0 : n.redirectStart - n.navigationStart,
                redirectDuration: n.redirectEnd - n.redirectStart,
                appCacheStart: 0,
                appCacheDuration: 0,
                dnsStart: n.domainLookupStart - n.navigationStart,
                dnsDuration: n.domainLookupEnd - n.domainLookupStart,
                tcpStart: n.connectStart - n.navigationStart,
                tcpDuration: n.connectEnd - n.connectStart,
                sslStart: 0 < n.secureConnectionStart ? n.secureConnectionStart - n.connectStart : 0,
                sslDuration: 0 < n.secureConnectionStart ? n.connectEnd - n.secureConnectionStart : -1,
                requestStart: n.requestStart - n.navigationStart,
                requestDuration: n.responseStart - n.requestStart,
                responseStart: n.responseStart - n.navigationStart,
                responseDuration: n.responseEnd - n.responseStart
            })), s = T.getEntriesByType("resource"), e = 0; e < s.length; e += 1) "document" !== s[e].name && i.push(I(s[e]));
        if ((r = document.getElementsByTagName("iframe")) && r.length) {
            for (t = 0; t < r.length; t += 1) try {
                for (s = r[t].contentWindow.performance.getEntriesByType("resource"), a = r[t].contentWindow.performance.timing.navigationStart - T.timing.navigationStart, e = 0; e < s.length; e += 1) "document" !== s[e].name && i.push(I(s[e], a))
            } catch (e) {}
            i.sort(function(e, t) {
                return e.start - t.start
            })
        }
        return i
    }

    function I(e, t) {
        return t && 0 < t || (t = 0), {
            url: e.name,
            start: e.startTime + t,
            duration: e.duration,
            transferSize: void 0 !== e.transferSize ? e.transferSize : -1,
            durationFromNStart: 0 < e.duration ? e.duration + e.startTime + t : e.startTime + t,
            redirectStart: e.redirectStart + t,
            redirectDuration: e.redirectEnd - e.redirectStart,
            appCacheStart: 0,
            appCacheDuration: 0,
            dnsStart: e.domainLookupStart + t,
            dnsDuration: e.domainLookupEnd - e.domainLookupStart,
            tcpStart: e.connectStart + t,
            tcpDuration: e.connectEnd - e.connectStart,
            sslStart: 0 < e.secureConnectionStart ? e.secureConnectionStart - e.connectStart : 0,
            sslDuration: 0 < e.secureConnectionStart ? e.connectEnd - e.secureConnectionStart : -1,
            requestStart: e.requestStart + t,
            requestDuration: e.responseStart - e.requestStart,
            responseStart: e.responseStart + t,
            responseDuration: 0 === e.responseStart ? 0 : e.responseEnd - e.responseStart
        }
    }

    function q() {
        return {
            win: h,
            doc: v,
            docElem: e,
            viewportWidth: e.clientWidth < h.innerWidth ? h.innerWidth : e.clientWidth,
            viewportHeight: e.clientHeight < h.innerHeight ? h.innerHeight : e.clientHeight,
            getScrollXY: function() {
                return {
                    x: h.scrollX || h.pageXOffset,
                    y: h.scrollY || h.pageYOffset
                }
            },
            getViewportArea: function() {
                return this.viewportWidth * this.viewportHeight
            },
            getElementBounds: function(e) {
                var t, r = e,
                    n = this.getScrollXY();
                return (t = function e(t) {
                    var r, n = {};
                    for (r in t) "object" == typeof t[r] && null !== t[r] ? n[r] = e(t[r]) : n[r] = t[r];
                    return n
                }(r.getBoundingClientRect())).top = t.top + n.y, t.bottom = t.bottom + n.y, t.left = t.left + n.x, t.right = t.right + n.x, t
            },
            isInViewport: function(e, t) {
                var r = this.getElementBounds(e);
                return r.top < this.viewportHeight && r.left < this.viewportWidth && 0 <= r.bottom && 0 <= r.right && this.isVisible(e, t)
            },
            isVisible: function(e, t) {
                var r = !0,
                    n = e;
                if ((r = r && 0 < n.offsetWidth && 0 < n.offsetHeight) && !t)
                    for (;
                        "BODY" !== n.tagName && r;) r = r && "hidden" !== h.getComputedStyle(n).visibility, n = n.parentElement;
                return r
            },
            getElementCoverage: function(e) {
                var t, r, n, o, i = this.getElementBounds(e);
                return (n = 100 * (o = (t = i.right < 0 ? 0 : i.right > this.viewportWidth ? 0 <= i.left ? this.viewportWidth - i.left : this.viewportWidth : i.left < 0 && 0 < i.right ? i.right : i.width) * (r = i.bottom < 0 ? 0 : i.bottom > this.viewportHeight ? 0 <= i.top ? this.viewportHeight - i.top : this.viewportHeight : i.top < 0 && 0 < i.bottom ? i.bottom : i.height)) / this.getViewportArea()) < 1 && (n = Math.ceil(n)), {
                    x: t,
                    y: r,
                    elCoverage: o,
                    elCoveragePerc: n
                }
            }
        }
    }

    function B(e, t, r) {
        var n, o, i, a, s, u = "",
            c = !1,
            d = [];
        for (e = e || [], t && !r ? d = t : !t && r ? d = r : t && r && (d = t.concat(r)), d && d.length ? d.length : 0, n = 0, s = e.length; n < s; n += 1)
            for (i = e[n], o = (a = v.querySelectorAll(YAFT.getModuleSelector(i, P.usePrefixRegex))).length - 1; 0 <= o; o--) u = YAFT.getModuleName(a[o]), c = !1, -1 !== d.indexOf(u) && (c = !0), c || b[u] || (a[o].modName = u, b[u] = a[o]);
        return b
    }

    function k(e, t) {
        var r, n;
        for (n in e) e.hasOwnProperty(n) && (u[n] || (r = m(e[n]), t ? r.isAft2Module && (u[n] = r) : u[n] = r));
        return u
    }

    function m(e, t) {
        var r, n, o, i, a, s = !1,
            u = function(e, t) {
                for (var r = !1; t.parentNode;) {
                    if (t.parentNode.id && -1 !== e.indexOf(t.parentNode.id)) {
                        r = !0;
                        break
                    }
                    t = t.parentNode
                }
                return r
            }(P.modulesAft2Container, e),
            c = P.customReportModules && -1 !== P.customReportModules.indexOf(e.modName),
            d = [],
            l = T.now(),
            g = u ? l - x : l,
            m = x ? D : P.useNativeStartRender ? E || YAFT.getStartRenderTime() : w ? T.timing.domContentLoadedEventStart - C : 0,
            f = c ? g : m,
            p = e.querySelectorAll(P.whiteListedContainerElements.join()),
            h = p.length;
        if (t) s = !0, m = t.modStart ? t.modStart : m, f = t.modEnd ? t.modEnd : f, x && (x < m ? m -= x : m = 0, x < f ? f -= x : f = 0);
        else if (0 < x && !u) f = m = 0;
        else if (c) s = !0;
        else {
            if ((i = YAFT.getElemResourceUrl(e)) && (a = T.getEntriesByName(i)) && a.length && 0 < a.length && S.isInViewport(e) && d.push(I(a[0])), p && 0 < h)
                for (r = 0; r < h; r += 1) n = p[r], (i = YAFT.getElemResourceUrl(n)) && (a = T.getEntriesByName(i)) && a.length && 0 < a.length && S.isInViewport(n) && d.push(I(a[0]));
            if (0 < (h = d.length))
                for (r = 0; r < h; r += 1) 0 < x && u && (d[r].start -= x, d[r].durationFromNStart -= x, d[r].start <= 0 && (d[r].start = m), d[r].durationFromNStart <= 0 && (d[r].durationFromNStart = f)), d[r].start > m && (m = d[r].start), d[r].durationFromNStart > f && (f = d[r].durationFromNStart)
        }
        return o = S.getElementCoverage(e), {
            isCustom: s,
            isAft2Module: u,
            start: m,
            loadTime: f,
            name: e.modName,
            resources: d,
            inViewPort: s ? S.isInViewport(e, !0) : S.isInViewport(e, !1),
            coverageWidth: o.x,
            coverageHeight: o.y,
            coverageArea: o.elCoverage,
            coveragePercentage: o.elCoveragePerc
        }
    }

    function z(e) {
        var t, r = 0,
            n = 0;
        for (t in e) e.hasOwnProperty(t) && (r = e[t].coveragePercentage, e[t].inViewPort && 0 < Math.round(r) && (n += r));
        return n
    }

    function V(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1)
            if (P.useNormalizeCoverage) {
                if (Math.round(e[t]) === Math.round(y)) return 100 * t
            } else if (Math.round(e[t]) === Math.round(R)) return 100 * t;
        return 0
    }

    function W(e) {
        var t, r, n = 0,
            o = T.now() - x,
            i = Math.floor(o / 100),
            a = new Array(i),
            s = 0;
        for (t = 0; t < i; t += 1) a[t] = 0;
        for (r in t = 0, e) e.hasOwnProperty(r) && e[r].inViewPort && 0 < Math.round(e[r].coveragePercentage) && (P.useNormalizeCoverage && (e[r].normCoveragePercentage = e[r].coveragePercentage / R * 100, s += e[r].normCoveragePercentage), 0 <= e[r].loadTime && (a[t = Math.round(e[r].loadTime / 100)] += P.useNormalizeCoverage ? e[r].normCoveragePercentage : e[r].coveragePercentage));
        for (P.useNormalizeCoverage ? n += s - a[0] : n += R - a[0], t = 1; t < i; t += 1) a[t] = a[t - 1] + a[t], P.useNormalizeCoverage ? n += s - a[t] : n += R - a[t];
        return {
            aft: n,
            aftIntervals: a,
            normTotalCoveragePercentage: s
        }
    }

    function f() {
        var e, t, r, n, o, i, a = 0,
            s = g.length,
            u = {
                median: NaN,
                worse: NaN,
                avgFps: NaN,
                stdev: NaN,
                miss: NaN,
                sample: NaN
            };
        return 0 === s || s <= P.fpsMinSampleCount || (u.sample = s, t = (g[s - 1] - g[0]) / (s - 1), u.avgFps = Math.round(1e3 / t), 60 < u.avgFps && (u.avgFps = 60), (e = g.map(function(e, t) {
            if (0 === t) return NaN;
            var r = e - g[t - 1];
            return r > P.fpsMissLimit && a++, r
        })).shift(), u.miss = a, u.stdev = (n = t, i = (o = e.map(function(e) {
            var t = e - n;
            return t * t
        })).reduce(function(e, t) {
            return e + t
        }, 0) / o.length, Math.sqrt(i)), e.sort(function(e, t) {
            return e - t
        }), u.worse = e[e.length - 1], r = Math.floor(e.length / 2), e.length % 2 ? u.median = e[r] : u.median = (e[r - 1] + e[r]) / 2), u
    }

    function t() {
        g.push(T.now()), l && g.length < 300 && (o = h.requestAnimationFrame(t))
    }

    function p(e, t) {
        var r, n, o, i, a, s = YAFT.getPageLoadTime(),
            u = YAFT.getDomContentLoaded(),
            c = YAFT.getDomElementsCount(),
            d = YAFT.getTTFB(),
            l = YAFT.getDomInteractive(),
            g = {},
            m = [],
            f = [];
        if (E = YAFT.getStartRenderTime(), (Y = O()) && Y.length && 0 < Y.length) {
            if (P.preProcess && "function" == typeof P.preProcess && P.preProcess(), P.plugins)
                for (a = 0; a < P.plugins.length; a += 1) window["yaft_" + P.plugins[a].name] && window["yaft_" + P.plugins[a].name].execute ? P.plugins[a].isPre ? (m.push(P.plugins[a]), YAFT.logToConsole("YAFT plugin " + P.plugins[a].name + " will be executed before the callback")) : (f.push(P.plugins[a]), YAFT.logToConsole("YAFT plugin " + P.plugins[a].name + " will be executed after the callback")) : YAFT.logToConsole("YAFT plugin " + P.plugins[a].name + " not found or it does not have execute method");
            var p;
            for (S || (S = q()), B(P.modules, P.modulesExclude, P.modulesAft2Container), k(b), o = YAFT.getFinalModulesReport(), R = z(o), n = W(o), y = n.normTotalCoveragePercentage, (p = Y.slice(0)).sort(function(e, t) {
                    return t.duration - e.duration
                }), i = function(e) {
                    var t = {},
                        r = 0,
                        n = 0,
                        o = YAFT.getPageLoadTime(),
                        i = 0,
                        a = 0;
                    for (t.count = e.length, r = 0; r < t.count; r += 1) e[r].start <= o && (i += 1), e[r].duration <= 0 && (n += 1, e[r].start <= o && (a += 1));
                    return t.cached = n, t.nonCached = t.count - n, t.onloadCount = i, t.onloadCached = a, t.onloadNonCached = i - a, t
                }(N = p), M = V(n.aftIntervals), P.generateHAR && (g = L(Y)), r = {
                    aft: n.aft,
                    pageLoadTime: s,
                    startRender: E,
                    domInteractive: l,
                    domContentLoaded: u,
                    ttfb: d,
                    event: e,
                    modulesReport: o,
                    totalCoveragePercentage: R,
                    normTotalCoveragePercentage: y,
                    domElementsCount: c,
                    resources: Y,
                    har: g,
                    costlyResources: N,
                    httpRequests: i,
                    visuallyComplete: M
                }, a = 0; a < m.length; a += 1) try {
                window["yaft_" + m[a].name].execute(m[a].config, r)
            } catch (e) {
                YAFT.logToConsole("YAFT plugin " + m[a].name + " failed to execute"), YAFT.logToConsole(e)
            }
            for (t && (YAFT.logToConsole(r), YAFT.logToConsole(n.aftIntervals), t(r)), YAFT.data.push(r), a = 0; a < f.length; a += 1) try {
                window["yaft_" + f[a].name].execute(f[a].config, r)
            } catch (e) {
                YAFT.logToConsole("YAFT plugin " + f[a].name + " failed to execute"), YAFT.logToConsole(e)
            }!0 === F && P.canShowVisualReport && h.YAFT_REPORT && h.YAFT_REPORT.drawReport && h.YAFT_REPORT.drawReport(r, n.aftIntervals), A && P.canShowPerfBar && h.YAFT_PERFBAR.drawReport && h.YAFT_PERFBAR.drawReport(r)
        } else t(null, "No timings available")
    }

    function _() {
        return h.performance || h.webkitPerformance || h.msPerformance || h.mozPerformance || h.Performance
    }
}(window, document), "undefined" != typeof module && module.exports && ("undefined" != typeof window ? module.exports = window.YAFT : module.exports = !1);