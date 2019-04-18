function RumTracking(e) {
    "use strict";
    var n = true,
        r = false,
        t = false,
        i = window.HEAD_LOAD_TIMESTAMP || undefined,
        o, a = {},
        u, s = undefined,
        c, f, m, d, p = 0,
        l = [],
        g = true,
        w, T;

    function y(e) {
        C();
        a = e;
        a["enabled"] = a["enabled"] === false ? false : true;
        if (!a["enabled"]) {
            return
        }
        a["beacon-url"] = a["beacon-url"] || "/lite/rum-track";
        a["beacon-service"] = a["beacon-service"] || "lite";
        a["event-name"] = a["event-name"] || "RealUserMonitoringEvent";
        a["topic-name"] = a["topic-name"] || "RealUserMonitoringEvent";
        a["app-id"] = a["app-id"] || "linkedin.rum.tracking";
        a["is-single-page-app"] = a["is-single-page-app"] === false ? false : true;
        a["cross-origin"] = a["cross-origin"] || false;
        a["beacon-timeout"] = a["beacon-timeout"] === undefined ? 6e4 : a["beacon-timeout"];
        a["request-sampling-rate"] = a["request-sampling-rate"] || .01;
        a["user-timing-mark-enabled"] = a["user-timing-mark-enabled"] || false;
        a["user-timing-measure-enabled"] = a["user-timing-measure-enabled"] === false ? false : true;
        if (a["beacon-source"] && a["beacon-source"] === "internal-apps") {
            t = true;
            a["page-key-prefix"] = a["page-key-prefix"] || ""
        }
        a["navigation-timing-only"] = a["navigation-timing-only"] || false;
        if (a["navigation-timing-only"]) {
            a["enable-rs-timing"] = a["enable-rs-timing"] || false;
            if (a["enable-rs-timing"]) {
                b()
            }
            if (document.readyState == "complete") {
                setTimeout(_, 500)
            } else {
                window.addEventListener("load", function() {
                    setTimeout(_, 500)
                })
            }
        } else {
            a["enable-rs-timing"] = a["enable-rs-timing"] === false ? false : true;
            b();
            window.addEventListener("unload", _);
            window.addEventListener("scroll", function() {
                if (m) {
                    return
                }
                try {
                    m = K();
                    f = P()
                } catch (e) {}
            })
        }
    }

    function b() {
        var e = {
            "default": .001,
            xmlhttprequest: 1
        };
        if (a["rs-sample-rate"] !== null && typeof a["rs-sample-rate"] === "object") {
            for (var n in a["rs-sample-rate"]) {
                if (a["rs-sample-rate"].hasOwnProperty(n)) {
                    e[n] = a["rs-sample-rate"][n]
                }
            }
        }
        a["rs-sample-rate"] = e;
        if (k.resourceTimingSupport === true) {
            k.readResourceTiming();
            k.setBufferSize(100);
            if (window.performance.onresourcetimingbufferfull === null) {
                window.performance.onresourcetimingbufferfull = k.readResourceTiming
            } else if (window.performance.onwebkitresourcetimingbufferfull === null) {
                window.performance.onwebkitresourcetimingbufferfull = k.readResourceTiming
            }
        }
        w = document.createElement("a");
        T = document.createElement("a")
    }

    function S() {
        var e = document.querySelector('meta[name="treeID"]');
        return e && e.getAttribute("content")
    }

    function v() {
        var e = document.querySelector('meta[name="pageKey"]');
        if (e) {
            return e.getAttribute("content")
        } else {
            return document.body.id ? document.body.id.substring("pagekey-".length) : ""
        }
    }

    function E() {
        var e, n = document.querySelector('meta[name="renderingMode"]');
        if (n) {
            e = n.getAttribute("data-mode");
            if (e === "BIGPIPE") {
                e = "BIG_PIPE"
            }
        }
        return e
    }
    var h = ["loadEventEnd", "loadEventStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "responseEnd", "responseStart", "requestStart", "secureConnectionStart", "connectEnd", "connectStart", "domainLookupEnd", "domainLookupStart", "fetchStart", "redirectEnd", "redirectStart", "unloadEventEnd", "unloadEventStart", "navigationStart"];

    function R() {
        var e, n, t;
        if (r) {
            return
        }
        if (window.performance && window.performance.timing && window.performance.navigation) {
            o["navigationTimingApi"] = true;
            e = window.performance.timing;
            i = e["navigationStart"];
            for (n = 0; n < h.length; n++) {
                t = h[n];
                if (e[t]) {
                    o[t] = e[t]
                }
            }
            o["redirectCount"] = window.performance.navigation.redirectCount;
            o["navigationType"] = window.performance.navigation.type
        } else {
            o["navigationTimingApi"] = false
        }
        r = true
    }
    var k = {
        resourceTimingSupport: window.performance && typeof window.performance.getEntriesByType === "function",
        clearBuffer: function() {
            var e;
            if (k.resourceTimingSupport !== true || !a["enable-rs-timing"]) {
                return
            }
            if (window.performance.clearResourceTimings && typeof window.performance.clearResourceTimings === "function") {
                window.performance.clearResourceTimings()
            } else if (window.performance.webkitClearResourceTimings && typeof window.performance.webkitClearResourceTimings === "function") {
                window.performance.webkitClearResourceTimings()
            }
        },
        setBufferSize: function(e) {
            if (k.resourceTimingSupport !== true || !a["enable-rs-timing"]) {
                return
            }
            if (window.performance.setResourceTimingBufferSize && typeof window.performance.setResourceTimingBufferSize === "function") {
                window.performance.setResourceTimingBufferSize(e)
            } else if (window.performance.webkitSetResourceTimingBufferSize && typeof window.performance.webkitSetResourceTimingBufferSize === "function") {
                window.performance.webkitSetResourceTimingBufferSize(e)
            }
        },
        resourceTimingFields: {
            name: true,
            entryType: false,
            duration: true,
            initiatorType: true,
            fetchStart: true,
            responseEnd: true,
            startTime: true,
            connectEnd: true,
            connectStart: true,
            domainLookupEnd: true,
            domainLookupStart: true,
            redirectEnd: true,
            redirectStart: true,
            requestStart: true,
            responseStart: true,
            secureConnectionStart: true,
            nextHopProtocol: true,
            transferSize: true,
            decodedBodySize: true,
            encodedBodySize: true,
            workerStart: true
        },
        readResourceTiming: function() {
            var e, n, r, t, i, u, s = "rand",
                f = false,
                m = o["resourceTimingEntries"] || [];
            if (k.resourceTimingSupport !== true || !a["enable-rs-timing"]) {
                return
            }
            e = window.performance.getEntriesByType("resource");
            for (n = 0; n < e.length; n++) {
                t = {};
                for (r in e[n]) {
                    if (k.resourceTimingFields[r] === true) {
                        t[r] = e[n][r]
                    }
                }
                if (t["initiatorType"] === "img") {
                    c.push(t)
                }
                i = Math.random();
                u = a["rs-sample-rate"][e[n].initiatorType] || a["rs-sample-rate"]["default"];
                f = d <= a["request-sampling-rate"];
                if (f || i <= u) {
                    m.push(t);
                    t["sampleMode"] = "";
                    if (f) {
                        t["sampleMode"] = "requestSampled,"
                    }
                    if (i <= u) {
                        t["sampleMode"] += s + u.toString()
                    }
                }
            }
            k.clearBuffer();
            if (m.length > 0) {
                o["resourceTimingEntries"] = m
            }
        }
    };

    function M() {
        if (window.performance) {
            if (window.performance.clearMarks) {
                window.performance.clearMarks()
            }
            if (window.performance.clearMeasures) {
                window.performance.clearMeasures()
            }
        }
    }

    function B(e, n) {
        var r, t, i, o = [];
        for (t = 0; t < e.length; t++) {
            r = e[t];
            if (r) {
                i = {};
                i["entryType"] = n;
                i["name"] = r.name;
                i["startTime"] = r.startTime;
                i["duration"] = r.duration;
                o.push(i)
            }
        }
        return o
    }

    function I() {
        var e, n = [];
        if (window.performance && typeof window.performance.getEntriesByType === "function") {
            if (a["user-timing-measure-enabled"]) {
                e = window.performance.getEntriesByType("measure");
                n = n.concat(B(e, "MEASURE"))
            }
            if (a["user-timing-mark-enabled"]) {
                e = window.performance.getEntriesByType("mark");
                n = n.concat(B(e, "MARK"))
            }
        }
        o["userTimingEntries"] = n;
        M()
    }

    function A() {
        var e;
        if (Object.keys(u).length > 0) {
            o["detailedRenderTimingEntries"] = [];
            for (var n in u) {
                if (u.hasOwnProperty(n)) {
                    o["detailedRenderTimingEntries"].push(u[n])
                }
            }
        }
        k.readResourceTiming();
        if (o["resourceTimingEntries"]) {
            for (e = o["resourceTimingEntries"].length - 1; e >= 0; e--) {
                if (o["resourceTimingEntries"][e]["name"]) {
                    o["resourceTimingEntries"][e]["name"] = o["resourceTimingEntries"][e]["name"].split(/[?#]/)[0]
                }
            }
        }
        R();
        I()
    }

    function _() {
        var e, r, u, s;
        if (!a["enabled"]) {
            return
        }
        A();
        if (!("navigationStart" in o)) {
            return
        }
        if (!g) {
            return
        }
        if (a["beacon-source"]) {
            o["timeSource"] = a["beacon-source"]
        }
        s = S();
        if (s) {
            o["treeId"] = s
        }
        if (!o.hasOwnProperty("pageKey") && n) {
            o["pageKey"] = v()
        }
        if (!o["pageKey"]) {
            return
        }
        if (a["commit-id"]) {
            o["sessionID"] = a["commit-id"]
        }
        o["boomerangStart"] = i;
        o["isSinglePageApp"] = a["is-single-page-app"];
        if (o["isSinglePageApp"]) {
            if (a["web-ui-framework"]) {
                o["webUIFramework"] = a["web-ui-framework"]
            }
            o["appRenderMode"] = E();
            if (n) {
                o["pageLoadMode"] = "INITIAL";
                if (H()) {
                    o["isAppRenderFailed"] = true
                }
            } else {
                o["pageLoadMode"] = "PARTIAL"
            }
            if ("renderCompleteTime" in o) {
                o["timeDone"] = P()
            } else if (!a["navigation-timing-only"]) {
                return
            }
        }
        if (a["app-version"]) {
            o["appVersion"] = a["app-version"]
        }
        if (t) {
            if (a["web-ui-framework"] === "EMBER" && o["pageKey"] !== undefined) {
                o["pageKey"] = a["page-key-prefix"] + ":" + o["pageKey"]
            } else if (!document.querySelector('meta[name="pageKey"]')) {
                o["pageKey"] = a["page-key-prefix"] + ":" + window.location.pathname
            }
        }
        try {
            if (a["beacon-service"] == "lite") {
                r = JSON.stringify(o);
                if (a["cross-origin"]) {
                    u = document.body.appendChild(new Image);
                    u.width = 1;
                    u.height = 1;
                    u.style.display = "none";
                    u.src = a["beacon-url"] + "?ir=t&dy=t&plist=" + encodeURIComponent(r)
                } else {
                    e = new XMLHttpRequest;
                    e.open("POST", a["beacon-url"], true);
                    e.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                    e.setRequestHeader("X-IsAJAXForm", "1");
                    e.send("plist=" + encodeURIComponent(r))
                }
            } else {
                q(o)
            }
        } catch (c) {}
        C()
    }

    function q(e) {
        var n, r = {
            eventInfo: {
                eventName: a["event-name"],
                topicName: a["topic-name"],
                appId: a["app-id"]
            },
            eventBody: e
        };
        r.eventBody["requestHeader"] = {
            pageKey: e["pageKey"]
        };
        r.eventBody["trackingTime"] = -1;
        n = new XMLHttpRequest;
        n.open("POST", a["beacon-url"], true);
        n.setRequestHeader("content-type", "application/json");
        n.send(JSON.stringify([r]))
    }

    function C() {
        o = {};
        c = [];
        l = [];
        u = {};
        f = undefined;
        m = undefined;
        d = Math.random();
        g = true;
        if (s) {
            clearTimeout(s);
            s = undefined
        }
    }

    function L(e) {
        var n = document.querySelectorAll("img"),
            r, t, i = [];
        for (t = n.length - 1; t >= 0; t--) {
            r = n[t];
            if (r && r.src && r.src.length > 0) {
                i.push(r)
            }
        }
        return i
    }

    function O(e) {
        var n, r = e.getBoundingClientRect();
        n = {
            top: Math.max(r.top, 0),
            left: Math.max(r.left, 0),
            bottom: Math.min(r.bottom, window.innerHeight || doc.documentElement.clientHeight),
            right: Math.min(r.right, window.innerWidth || doc.documentElement.clientWidth)
        };
        return !(n.bottom <= n.top || n.right <= n.left)
    }

    function P() {
        var e, n, r, t;
        if (f) {
            return f
        }
        R();
        f = o["renderCompleteTime"] - o["navigationStart"];
        if (l) {
            for (r = l.length - 1; r >= 0; r--) {
                n = l[r];
                if (n) {
                    for (t = c.length - 1; t >= 0; t--) {
                        e = c[t];
                        if (n.src === e.name) {
                            if (m && i && e["startTime"] > m - i) {
                                break
                            }
                            if (n.width * n.height <= 1) {
                                break
                            }
                            if (O(n)) {
                                f = Math.max(f, i + e["responseEnd"] - o["navigationStart"])
                            }
                            break
                        }
                    }
                }
            }
        }
        return f
    }

    function K() {
        return window.performance && window.performance.timing && typeof window.performance.now === "function" ? Math.round(window.performance.now()) + window.performance.timing.navigationStart : (new Date).getTime()
    }

    function H() {
        return document.querySelector("code#renderError") != null
    }
    y(e);
    return {
        setPageKey: function(e) {
            o["pageKey"] = e
        },
        addTreeId: function(e, n) {
            var r;
            if (w && T) {
                w.href = n;
                k.readResourceTiming();
                if (o["resourceTimingEntries"]) {
                    for (r = o["resourceTimingEntries"].length - 1; r >= 0; r--) {
                        T.href = o["resourceTimingEntries"][r]["name"];
                        if (w.protocol === T.protocol && w.host === T.host && w.pathname === T.pathname && (w.search === T.search || w.search === "")) {
                            o["resourceTimingEntries"][r]["resourceTreeId"] = e;
                            break
                        }
                    }
                }
            }
        },
        appTransitionStart: function(e) {
            if (e || p > 0) {
                _();
                C();
                o["navigationStart"] = K();
                n = false
            }
        },
        appRenderComplete: function() {
            p++;
            o["renderCompleteTime"] = K();
            l = L();
            if (!s) {
                s = setTimeout(_, a["beacon-timeout"])
            }
        },
        appViewRenderStart: function(e, n) {
            u[e] = {
                renderName: n || e,
                viewName: n,
                viewId: e,
                renderStart: K()
            }
        },
        appViewRenderComplete: function(e, n) {
            if (u[e]) {
                u[e]["renderEnd"] = K()
            }
        },
        setDeepLinkTrackingId: function(e) {
            g = false
        },
        setWindowHiddenState: function(e) {
            o["isImpactedByHiddenWindow"] = e
        },
        customMarkNames: {
            UI_FRAMEWORK_BOOTSTRAP_START: "mark_ui_framework_bootstrap_start",
            UI_FRAMEWORK_BOOTSTRAP_END: "mark_ui_framework_bootstrap_end",
            ABOVE_THE_FOLD: "mark_above_the_fold"
        }
    }
}
LIModules.exports("RumTracking", window.RumTracking);
window.RumTracking = void 0;
! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function(t, e, n) {
    n(1)(n(7)), n(3), n(4), n(2), n(5)
}, function(t, e) {
    t.exports = function(t) {
        function e(t) {
            return t.replace(a, "<�")
        }

        function n(r) {
            for (var i = [], a = 0, o = r.length; a < o; a++) t.isArray(r[a]) ? i.push(n(r[a])) : i.push("string" == typeof r[a] ? e(r[a]) : r[a]);
            return i
        }

        function r(t) {
            return function() {
                return o[t].apply(this, n(arguments))
            }
        }
        if (t) {
            var i, a = /<(?=script[^>]*\/>)/gi;
            if (t.htmlPrefilter) return i = t.htmlPrefilter, void(t.htmlPrefilter = function(t) {
                return i.call(this, e(t))
            });
            var o = {
                init: t.fn.init,
                html: t.fn.html,
                before: t.fn.before,
                after: t.fn.after,
                append: t.fn.append,
                prepend: t.fn.prepend,
                replaceWith: t.fn.replaceWith
            };
            t.fn.extend({
                init: function(t, n, r) {
                    return "string" == typeof t && t.indexOf("<") > -1 && (t = e(t)), new o.init(t, n, r)
                },
                html: r("html"),
                before: r("before"),
                after: r("after"),
                append: r("append"),
                prepend: r("prepend"),
                replaceWith: r("replaceWith")
            })
        }
    }
}, function(t, e) {
    ! function(t) {
        var e = / /g,
            n = /[\s\u0000<>"]|%00/,
            r = /[\\;]/,
            i = /([.]|%2e){2}/i;
        XMLHttpRequest.prototype.open = function() {
            var a = arguments[1];
            if ("string" == typeof a) {
                if (a = a.trim(), a.indexOf(" ") > -1 && "undefined" != typeof console && console.warn("url should not contains spaces: " + a), a = a.replace(e, "+"), n.test(a)) throw new Error("SecurityError: Not valid character in URL: " + a);
                var o = a.split("?")[0];
                if (r.test(o) || i.test(o) || i.test(decodeURI(o))) throw new Error("SecurityError: Refusing to load a url with path traversal: " + o)
            }
            return t.apply(this, arguments)
        }
    }(XMLHttpRequest.prototype.open)
}, function(t, e) {
    /*!
     * openerFix - a library for removing window.opener when opening a new context for security
     * @version v0.2.12
     */
    ! function() {
        function t(t) {
            "object" == typeof t && (t.realClick = !0)
        }
        var e, n, r, i, a = document.body;
        i = function(t) {
            for (; t;) {
                if (!t.tagName) return null;
                if ("a" === t.tagName.toLowerCase()) return t;
                t = t.parentElement
            }
        }, n = function(t) {
            var e = window.open(t);
            e && (e.opener = null)
        }, r = function(t) {
            var e = null;
            return t.target && ("click" === t.type || "keydown" === t.type && 13 === t.keyCode) && (e = i(t.target) || null), e
        }, e = function(t) {
            if (t.realClick) {
                var e = r(t);
                e && "_blank" === e.target && !t.defaultPrevented && (t.preventDefault(), n(e.href))
            }
        }, document && document.addEventListener && document.addEventListener("click", e), a && a.addEventListener ? a.addEventListener("click", t) : document && document.addEventListener && document.addEventListener("DOMContentLoaded", function() {
            document.body.addEventListener("click", t)
        })
    }()
}, function(t, e, n) {
    var r = {};
    ! function() {
        "use strict";
        var t = n(6),
            e = "/platform-telemetry/platform",
            i = "PT_C_M",
            a = "si",
            o = "h",
            c = "r",
            l = "sw",
            s = "sh",
            u = "tz",
            d = "cv",
            f = "pt-report",
            p = "eyJcdTAwNjFcdTAwNzVcdTAwNzRcdTAwNmZcdTAwNDVcdTAwNzhcdTAwNjVcdTAwNjNcdTAwNzVcdTAwNzRcdTAwNjUiOnRydWUsIlx1MDA2NVx1MDA3OFx1MDA2NVx1MDA2M1x1MDA3NVx1MDA3NFx1MDA2NVx1MDA0OVx1MDA2ZVx1MDA3NFx1MDA2NVx1MDA3Mlx1MDA3Nlx1MDA2MVx1MDA2YyI6NDMyMDAwMDAsIlx1MDA2NVx1MDA3OFx1MDA2NVx1MDA2M1x1MDA3NVx1MDA3NFx1MDA2NSI6ZmFsc2UsIlx1MDA3NFx1MDA2OVx1MDA2ZFx1MDA2NVx1MDA2Zlx1MDA3NVx1MDA3NCI6MTAwLCJcdTAwNjlcdTAwNmVcdTAwNjlcdTAwNzQiOjAsIlx1MDA3Mlx1MDA2MVx1MDA3NFx1MDA2OVx1MDA2ZiI6MCwiXHUwMDY0XHUwMDYxXHUwMDc0XHUwMDY1IjoxLCJcdTAwNzZcdTAwNjVcdTAwNzJcdTAwNzNcdTAwNjlcdTAwNmZcdTAwNmUiOiIwXHUwMDJlMFx1MDAyZTAifQ==";
        window.addEventListener && document.querySelectorAll && window.localStorage && window.JSON && window.XMLHttpRequest && Array.prototype.forEach && window.btoa && window.atob && (r.canvasFingerprint = function(t) {
            var e = document.createElement("canvas");
            if (e.getContext && e.toDataURL) {
                var n = e.getContext("2d");
                return n.canvas.width = t.canvasFingerprintContentSet.canvasDimension2D.width, n.canvas.height = t.canvasFingerprintContentSet.canvasDimension2D.height, t.canvasFingerprintContentSet.rectangles.forEach(function(t) {
                    if (n.beginPath(), t.rectangleHTMLStyle.isGradient) {
                        var e = n.createLinearGradient(t.rectangleHTMLStyle.gradientStartPoint.x, t.rectangleHTMLStyle.gradientStartPoint.y, t.rectangleHTMLStyle.gradientEndPoint.x, t.rectangleHTMLStyle.gradientEndPoint.y);
                        e.addColorStop(0, t.rectangleHTMLStyle.gradient_start_color), e.addColorStop(1, t.rectangleHTMLStyle.gradient_end_color), n.fillStyle = e
                    } else n.fillStyle = t.rectangleHTMLStyle.style;
                    n.rect(t.rectangle2D.top_left_point.x, t.rectangle2D.top_left_point.y, t.rectangle2D.rectangleDimension2D.width, t.rectangle2D.rectangleDimension2D.height), t.rectangleHTMLStyle.isStroke ? (n.lineWidth = 1, n.strokeStyle = t.rectangleHTMLStyle.style, n.stroke()) : n.fill()
                }), t.canvasFingerprintContentSet.arcs.forEach(function(t) {
                    n.beginPath(), n.arc(t.arc2D.center.x, t.arc2D.center.y, t.arc2D.radius, t.arc2D.start_angle, t.arc2D.end_angle, t.arc2D.isAnticlockwise), t.arcHTMLStyle.isStroke ? (n.lineWidth = 1, n.strokeStyle = t.arcHTMLStyle.style, n.stroke()) : (n.fillStyle = t.arcHTMLStyle.style, n.fill())
                }), t.canvasFingerprintContentSet.lines.forEach(function(t) {
                    n.beginPath(), n.moveTo(t.line2D.start_point.x, t.line2D.start_point.y), n.lineWidth = t.lineHTMLStyle.line_width, n.lineTo(t.line2D.end_point.x, t.line2D.end_point.y), n.strokeStyle = t.lineHTMLStyle.style, n.stroke()
                }), t.canvasFingerprintContentSet.texts.forEach(function(t) {
                    n.beginPath(), n.font = t.textHTMLStyle.font, n.textBaseline = "alphabetic", t.textHTMLStyle.isStroke ? (n.lineWidth = 1, n.strokeStyle = t.textHTMLStyle.style, n.strokeText(t.text, t.textHTMLStyle.start_point.x, t.textHTMLStyle.start_point.y)) : (n.fillStyle = t.textHTMLStyle.style, n.fillText(t.text, t.textHTMLStyle.start_point.x, t.textHTMLStyle.start_point.y))
                }), e.toDataURL().replace("data:image/png;base64,", "")
            }
        }, r.obfuscateJSON = function(t) {
            return t.replace(/"((?:\\\\|\\"|[^"])*)"/g, function(t, e) {
                return '"' + e.replace(/(?:\\[^u]|\\u....|[\d"\\{}\[\],:]|(.))/g, function(t, e) {
                    return e ? "\\u" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) : t
                }) + '"'
            })
        }, r.saveConfig = function(t, e) {
            var n = r.obfuscateJSON(JSON.stringify(t));
            try {
                localStorage.setItem(e, btoa(n))
            } catch (t) {}
        }, r.loadConfig = function(t, e) {
            var n = localStorage.getItem(t);
            try {
                var r = e ? JSON.parse(atob(e)) : null;
                return n ? JSON.parse(atob(n)) : r
            } catch (t) {
                return null
            }
        }, r.isNumber = function(t) {
            return "number" == typeof t && t === t
        }, r.isIntervalPassed = function(t, e) {
            var n = (new Date).getTime();
            return 0 === t || n - t >= e
        }, r.check = function() {
            var t = r.loadConfig(i, p);
            if (t && "0.0.0" === t.version && r.isNumber(t.date) && r.isNumber(t.init)) {
                var e = (new Date).getTime();
                if (0 === t.date || e - t.date < t.init) return t.date = e, void r.saveConfig(t, i)
            }
            r.isNumber(t.date) && r.isNumber(t.executeInterval) && (r.isIntervalPassed(t.date, t.executeInterval) && t.autoExecute && setTimeout(function() {
                r.sendRequest(t)
            }, t.timeout), t.execute && setTimeout(function() {
                r.sendRequest(t)
            }, t.timeout))
        }, r.execute = function(e, n) {
            var i = {},
                a = {};
            n.forEach(function(n) {
                n && (i = r.canvasFingerprint(n), a = t(i)), a && r.isNumber(e.ratio) && (Math.random() < e.ratio ? r.sendReport(a, i, n.id, e.version) : r.sendReport(a, null, n.id, e.version))
            })
        }, r.stamping = function() {
            var t = r.loadConfig(i, p);
            t && (t.date = (new Date).getTime(), t.execute = !1, r.saveConfig(t, i))
        }, r.sendRequest = function(t) {
            var n = new XMLHttpRequest;
            n.open("POST", e, !0), n.setRequestHeader("Content-Type", "application/json"), n.onreadystatechange = function() {
                if (4 === n.readyState && 200 === n.status)
                    if (n.responseText) try {
                        var e = JSON.parse(n.responseText);
                        if (e.hasOwnProperty("c")) {
                            var a = JSON.parse(atob(e.c));
                            a && r.saveConfig(a, i)
                        } else r.stamping();
                        if (e.hasOwnProperty("s")) {
                            var o = JSON.parse(atob(e.s));
                            o && r.execute(t, o.seeds)
                        }
                    } catch (t) {} else r.stamping()
            };
            var a = {},
                o = {};
            o[d] = t.version, a[f] = o, n.send(btoa(r.obfuscateJSON(JSON.stringify(a))))
        }, r.sendReport = function(t, n, i, p) {
            var y = new XMLHttpRequest;
            y.open("POST", e, !0), y.setRequestHeader("Content-Type", "application/json");
            var v = {},
                g = {};
            g[d] = p, g[o] = t, g[c] = n, g[a] = i, g[l] = screen.width, g[s] = screen.height, g[u] = (new Date).getTimezoneOffset(), v[f] = g, y.send(btoa(r.obfuscateJSON(JSON.stringify(v))))
        }, "complete" === document.readyState ? r.check() : window.addEventListener("load", r.check, !1))
    }()
}, function(t, e) {
    ! function() {
        "use strict";

        function t(t) {
            return /^ *(?:https?:|[\/?#.]|data:(?:(?:image\/(?:gif|jpe?g|png))|(?:application\/x-font-woff)|(?:font\/(?:opentype|ttf)))[;,]|javascript:(?:void(?:\s*\(\d*\)|\s+\d+)|""|''|self[.]close\(\))?;? *$)/.test(t) ? t : null
        }

        function e(t) {
            return i || (i = document.createElement("a")), i.href = t, i.href = i.href, i.protocol
        }

        function n(t, e) {
            return "javascript:" !== t && "data:" !== t && ":" !== t ? e : null
        }

        function r(r) {
            return "" === r ? "" : t(r) || n(e(r), r) || a
        }
        var i, a = "javascript:void(0)",
            o = Array.prototype,
            c = o.slice,
            l = function(t) {
                for (var e = t.target; e;) {
                    if (e.nodeType === Node.ELEMENT_NODE && e.hasAttribute("href")) {
                        var n = e.href,
                            i = r(n);
                        n !== i && (e.href = i);
                        break
                    }
                    e = e.parentElement
                }
            };
        document.addEventListener("click", l, !0), document.addEventListener("mousedown", l, !0);
        var s = HTMLElement.prototype.setAttribute;
        HTMLElement.prototype.setAttribute = function(t, e) {
            return /^(?:src|(?:xlink:)?href|(?:form)?action|data)$/i.test(t) && (e = r(e)), s.call(this, t, e)
        };
        var u = window.open;
        window.open = function(t) {
            var e = c.call(arguments, 1);
            return t = r(t), u.apply(this, [t].concat(e))
        }
    }()
}, function(t, e) {
    "use strict";

    function n(t) {
        for (var e = l(t), n = 1732584193, r = -271733879, i = -1732584194, a = 271733878, s = 0; s < e.length; s += 16) {
            var u = n,
                v = r,
                g = i,
                M = a;
            n = d(n, r, i, a, e[s + 0], 7, -680876936), a = d(a, n, r, i, e[s + 1], 12, -389564586), i = d(i, a, n, r, e[s + 2], 17, 606105819), r = d(r, i, a, n, e[s + 3], 22, -1044525330), n = d(n, r, i, a, e[s + 4], 7, -176418897), a = d(a, n, r, i, e[s + 5], 12, 1200080426), i = d(i, a, n, r, e[s + 6], 17, -1473231341), r = d(r, i, a, n, e[s + 7], 22, -45705983), n = d(n, r, i, a, e[s + 8], 7, 1770035416), a = d(a, n, r, i, e[s + 9], 12, -1958414417), i = d(i, a, n, r, e[s + 10], 17, -42063), r = d(r, i, a, n, e[s + 11], 22, -1990404162), n = d(n, r, i, a, e[s + 12], 7, 1804603682), a = d(a, n, r, i, e[s + 13], 12, -40341101), i = d(i, a, n, r, e[s + 14], 17, -1502002290), r = d(r, i, a, n, e[s + 15], 22, 1236535329), n = f(n, r, i, a, e[s + 1], 5, -165796510), a = f(a, n, r, i, e[s + 6], 9, -1069501632), i = f(i, a, n, r, e[s + 11], 14, 643717713), r = f(r, i, a, n, e[s + 0], 20, -373897302), n = f(n, r, i, a, e[s + 5], 5, -701558691), a = f(a, n, r, i, e[s + 10], 9, 38016083), i = f(i, a, n, r, e[s + 15], 14, -660478335), r = f(r, i, a, n, e[s + 4], 20, -405537848), n = f(n, r, i, a, e[s + 9], 5, 568446438), a = f(a, n, r, i, e[s + 14], 9, -1019803690), i = f(i, a, n, r, e[s + 3], 14, -187363961), r = f(r, i, a, n, e[s + 8], 20, 1163531501), n = f(n, r, i, a, e[s + 13], 5, -1444681467), a = f(a, n, r, i, e[s + 2], 9, -51403784), i = f(i, a, n, r, e[s + 7], 14, 1735328473), r = f(r, i, a, n, e[s + 12], 20, -1926607734), n = p(n, r, i, a, e[s + 5], 4, -378558), a = p(a, n, r, i, e[s + 8], 11, -2022574463), i = p(i, a, n, r, e[s + 11], 16, 1839030562), r = p(r, i, a, n, e[s + 14], 23, -35309556), n = p(n, r, i, a, e[s + 1], 4, -1530992060), a = p(a, n, r, i, e[s + 4], 11, 1272893353), i = p(i, a, n, r, e[s + 7], 16, -155497632), r = p(r, i, a, n, e[s + 10], 23, -1094730640), n = p(n, r, i, a, e[s + 13], 4, 681279174), a = p(a, n, r, i, e[s + 0], 11, -358537222), i = p(i, a, n, r, e[s + 3], 16, -722521979), r = p(r, i, a, n, e[s + 6], 23, 76029189), n = p(n, r, i, a, e[s + 9], 4, -640364487), a = p(a, n, r, i, e[s + 12], 11, -421815835), i = p(i, a, n, r, e[s + 15], 16, 530742520), r = p(r, i, a, n, e[s + 2], 23, -995338651), n = y(n, r, i, a, e[s + 0], 6, -198630844), a = y(a, n, r, i, e[s + 7], 10, 1126891415), i = y(i, a, n, r, e[s + 14], 15, -1416354905), r = y(r, i, a, n, e[s + 5], 21, -57434055), n = y(n, r, i, a, e[s + 12], 6, 1700485571), a = y(a, n, r, i, e[s + 3], 10, -1894986606), i = y(i, a, n, r, e[s + 10], 15, -1051523), r = y(r, i, a, n, e[s + 1], 21, -2054922799), n = y(n, r, i, a, e[s + 8], 6, 1873313359), a = y(a, n, r, i, e[s + 15], 10, -30611744), i = y(i, a, n, r, e[s + 6], 15, -1560198380), r = y(r, i, a, n, e[s + 13], 21, 1309151649), n = y(n, r, i, a, e[s + 4], 6, -145523070), a = y(a, n, r, i, e[s + 11], 10, -1120210379), i = y(i, a, n, r, e[s + 2], 15, 718787259), r = y(r, i, a, n, e[s + 9], 21, -343485551), n = o(n, u), r = o(r, v), i = o(i, g), a = o(a, M)
        }
        return c(n) + c(r) + c(i) + c(a)
    }

    function r(t, e) {
        var n = 1 & t | 1 & e,
            r = t >>> 1 | e >>> 1;
        return r << 1 | n
    }

    function i(t, e) {
        var n = 1 & t ^ 1 & e,
            r = t >>> 1 ^ e >>> 1;
        return r << 1 | n
    }

    function a(t, e) {
        var n = 1 & t & (1 & e),
            r = t >>> 1 & e >>> 1;
        return r << 1 | n
    }

    function o(t, e) {
        var n = (65535 & t) + (65535 & e),
            r = (t >> 16) + (e >> 16) + (n >> 16);
        return r << 16 | 65535 & n
    }

    function c(t) {
        var e, n = "";
        for (e = 0; e <= 3; e++) n += v.charAt(t >> 8 * e + 4 & 15) + v.charAt(t >> 8 * e & 15);
        return n
    }

    function l(t) {
        var e, n = (t.length + 8 >> 6) + 1,
            r = new Array(16 * n);
        for (e = 0; e < 16 * n; e++) r[e] = 0;
        for (e = 0; e < t.length; e++) r[e >> 2] |= t.charCodeAt(e) << (8 * t.length + e) % 4 * 8;
        r[e >> 2] |= 128 << (8 * t.length + e) % 4 * 8;
        var i = 8 * t.length;
        return r[16 * n - 2] = 255 & i, r[16 * n - 2] |= (i >>> 8 & 255) << 8, r[16 * n - 2] |= (i >>> 16 & 255) << 16, r[16 * n - 2] |= (i >>> 24 & 255) << 24, r
    }

    function s(t, e) {
        return t << e | t >>> 32 - e
    }

    function u(t, e, n, r, i, a) {
        return o(s(o(o(e, t), o(r, a)), i), n)
    }

    function d(t, e, n, i, o, c, l) {
        return u(r(a(e, n), a(~e, i)), t, e, o, c, l)
    }

    function f(t, e, n, i, o, c, l) {
        return u(r(a(e, i), a(n, ~i)), t, e, o, c, l)
    }

    function p(t, e, n, r, a, o, c) {
        return u(i(i(e, n), r), t, e, a, o, c)
    }

    function y(t, e, n, a, o, c, l) {
        return u(i(n, r(e, ~a)), t, e, o, c, l)
    }
    t.exports = n;
    var v = "0123456789abcdef"
}, function(t, e) {
    t.exports = function() {
        return "undefined" != typeof LIModules ? LIModules.imports("jquery") : "undefined" != typeof jQuery ? jQuery : void 0
    }()
}]);
window.dispatchEvent(new window.CustomEvent("framework:ready"));
/*!
 * openerFix - a library for removing window.opener when opening a new context for security
 * @version v0.2.3
 * @link go/openerfix
 * @license none
 */
! function(e) {
    function t(e) {
        "object" == typeof e && (e.realClick = !0)
    }
    var n, d, r, o, a = document.body;
    o = function(e) {
        for (; e;) {
            if (!e.tagName) return null;
            if ("a" === e.tagName.toLowerCase()) return e;
            e = e.parentElement
        }
    }, d = function(t) {
        var n = e.open(t);
        n && (n.opener = null)
    }, r = function(e) {
        var t = null;
        return e.target && ("click" === e.type || "keydown" === e.type && 13 === e.keyCode) && (t = o(e.target) || null), t
    }, n = function(e) {
        if (e.realClick) {
            var t = r(e);
            t && "_blank" === t.target && !e.defaultPrevented && (e.preventDefault(), d(t.href))
        }
    }, document && document.addEventListener && document.addEventListener("click", n), a && a.addEventListener ? a.addEventListener("click", t) : document && document.addEventListener && document.addEventListener("DOMContentLoaded", function() {
        document.body.addEventListener("click", t)
    })
}(this);