! function() {
    "use strict";

    function e() {}

    function t(e) {
        var t = (e.timeStamp >= 1e12 ? (new Date).getTime() : h.now()) - e.timeStamp | 0;
        t && (_["first_" + e.type] ? _["max_" + e.type] < t && (_["max_" + e.type] = t) : _["max_" + e.type] = _["first_" + e.type] = t)
    }

    function n() {
        if (b._ruid) return b._ruid;
        var e;
        try {
            return e = window.localStorage.getItem("rta2"), b._ruid = JSON.parse(e || "{}")
        } catch (t) {
            return e = document.cookie.match(/ruid=([^;]*)/), e = e && e[1] && decodeURIComponent(e[1]), b._ruid = JSON.parse(e || "{}")
        }
        return {}
    }

    function i() {
        4 == this.readyState && 200 === this.status && o(this.rtahost, this.ruid, this.responseText)
    }

    function o(e, t, n) {
        try {
            var i = JSON.parse(n = n || "{}")
        } catch (e) {
            return
        }
        for (var o in i) i.hasOwnProperty(o) && ("/" === o ? t[o] = i[o] : t[e][o] = i[o]);
        b._ruid = t, t["/"] && (+t["/"].dd && (T = +E["/"].dd), +t["/"].df && (S = +E["/"].df)), t[b._hosts[0]].chid && t[b._hosts[0]].__mou && b._resolveIDs && (b._resolveIDs({
            user: t[b._hosts[0]].__mou.toString().split(":")[0],
            created: +t[b._hosts[0]].__mou.toString().split(":")[2],
            page: t[b._hosts[0]].chid
        }), b._resolveIDs = null), t.v = b.version, n = JSON.stringify(t);
        try {
            window.localStorage.setItem("rta2", n)
        } catch (e) {}
        document.cookie = "ruid=" + encodeURIComponent(n) + ";path=/;max-age=31536000;expires=" + new Date((new Date).getTime() + 31536e6).toUTCString()
    }

    function a(e, t) {
        return void 0 !== e && b._buffer.push({
            t: e,
            a: t,
            d: (new Date).getTime()
        }), d("unload" === e)
    }

    function r(e, t, n) {
        var i;
        if ("object" == typeof n && null !== n) {
            e[t] || (e[t] = {});
            for (var i in n) n.hasOwnProperty(i) && r(e[t], i, n[i])
        } else e[t] = n
    }

    function d(e) {
        function t(e) {
            if (m) {
                for (d in m) m.hasOwnProperty(d) && a.splice(e++, 0, m[d]);
                m = null
            }
            return l && (a.splice(e++, 0, l), l = null), e
        }
        var a = b._buffer;
        if (b._buffer = [], "[object Array]" === Object.prototype.toString.call(a)) {
            if (0 === a.length) return
        } else a = [a];
        var d, s, c, u, l = null,
            m = null;
        for (s = 0; s < a.length; s++)
            if ("video-event" !== a[s].t || "extra" !== a[s].a.action)
                if ("page_event" !== a[s].t) {
                    if ("unload" === a[s].t) {
                        s = t(s);
                        break
                    }
                } else u = a.splice(s--, 1)[0], l ? l.a.obj[u.a.name] ? r(l.a.obj, u.a.name, u.a.value) : l.a.obj[u.a.name] = u.a.value : (l = u, c = {}, c[u.a.name] = u.a.value, u.a = {
                    obj: c
                }, u.t = "page_map");
        else u = a.splice(s--, 1)[0], m = m || {}, d = (u.a.id || "") + "_" + u.a.referenceId, m[d] ? r(m[d].a, "extra", u.a.extra) : m[d] = u;
        for (t(a.length), c = {
                ts: (new Date).getTime(),
                o: a,
                r: document.referrer,
                p: window.location.href,
                v: "" + b.version
            }, b._ito && (c.c = b._ito), s = 0; s < b._hosts.length; s++) {
            var g, p = window.location.protocol + "//" + b._hosts[s] + "/s/sa",
                w = new XMLHttpRequest;
            if (w.withCredentials = !0, w.rtahost = b._hosts[s], w.ruid = n(), w.ruid[w.rtahost] = w.ruid[w.rtahost] || {}, c.i = w.ruid[w.rtahost], delete c.i.phid, c.i.chid = y, g = JSON.stringify(c), e) try {
                if (navigator.sendBeacon) navigator.sendBeacon(p, g);
                else {
                    if (w.open("POST", p, !1), w.send(g), 200 !== w.status) throw w;
                    o(w.rtahost, w.ruid, w.responseText)
                }
            } catch (e) {
                console.warn("RTA2:", e)
            } else w.open("POST", p, !0), w.onreadystatechange = i, w.send(g)
        }
    }

    function s(e) {
        return (e || 1e17 * Math.random()).toString(36).replace(/\./, e || "")
    }

    function c() {
        var e = (new Date).getTime() - b._start;
        if (!(e > 18e5)) {
            var t = a("dwell", {
                dw: e
            });
            return b._unloaded || (I = (I + T) * S, k = setTimeout(c, I)), t
        }
    }

    function u(e) {
        t(e);
        var n, i = (new Date).getTime(),
            o = window.pageYOffset / 100 | 0,
            a = (i - N) / 50 | 0,
            r = x + (window.innerHeight / 100 | 0);
        for (n = x; n != r; n += 1) {
            var d = n;
            d = d > 500 ? "dw" : d.toString(36), O[d] = (O[d] || 0) + a
        }
        N = i, x = o
    }

    function l() {
        L && (b._start += (new Date).getTime() - L), b._unloaded = !1, L = null, k || (k = setTimeout(c, I))
    }

    function m(e) {
        document[q] ? (g(e), L = (new Date).getTime()) : l()
    }

    function g(e) {
        if (L = (new Date).getTime(), !b._unloaded && b._pageType) {
            k && (clearTimeout(k), k = null), u(e);
            var t = {};
            if (O)
                for (var n in O) O[n] > 0 && (t[n] = 10 * Math.log(O[n]) + .5 | 0);
            var i = {
                dw: (new Date).getTime() - b._start,
                selectedText: C,
                scrollDepth: t,
                lastEvent: e.type,
                perf: _
            };
            R && (i.click = R), h.timing && (i.requestTime = h.timing.requestStart ? h.timing.requestStart - h.timing.navigationStart : void 0, i.domInteractive = h.timing.domInteractive ? h.timing.domInteractive - h.timing.requestStart : void 0, i.domLoaded = h.timing.domContentLoadedEventEnd ? h.timing.domContentLoadedEventEnd - h.timing.requestStart : void 0, i.domComplete = h.timing.domComplete ? h.timing.domComplete - h.timing.requestStart : void 0, i.load = h.timing.loadEventEnd ? h.timing.loadEventEnd - h.timing.requestStart : void 0);
            try {
                i.impressions = window.adverts.getRendered().length
            } catch (e) {}
            var o = a("unload", i);
            return b._unloaded = !0, o
        }
    }

    function p(e) {
        t(e);
        var n, i, o, a, r, d, s;
        for (n = [], i = b._pageSelector ? b._pageSelector.split(/\s+/) : [], o = 0; o < i.length; o++) n[o] = document.querySelector(i[o]);
        for (i.push("body"), n.push(document.body), o = 0; o < i.length; o++)
            if (n[o] && n[o].contains(e.target)) {
                for (a = n[o], r = [], d = e.target; d && (r.push(function(e) {
                        for (var t = 0; t < i.length; t++)
                            if (e === n[t]) return i[t];
                        var o = o = e.getAttribute("data-track");
                        return o ? '[data-track="' + o + '"]' : e.tagName.toLowerCase() + (e.className ? "." + e.className.split(/\s+/)[0] : "") + (e.id ? "#" + e.id : "")
                    }(d)), a !== d); d = d.parentNode);
                s = a.getBoundingClientRect(), R = {
                    x: e.clientX - s.left,
                    y: e.clientY - s.top,
                    top: r[r.length - 1],
                    path: r
                };
                break
            }
    }

    function w(e) {
        e.data.sig === v && window.RTA[e.data.call].apply(window.RTA, e.data.args)
    }
    var v, f, h, _, y, T, S, b, E, A, D, k, I, R, C, O, x, N, L, q, B, P;
    try {
        if (v = "RTA2IFRAMEEVENT", !(f = document.currentScript || document.getElementsByClassName("RTA2-loader")[0] || document.querySelector("[data-rta2]"))) return window.RTA = {
            ito: e,
            geo: e,
            tedEvent: e
        }, console.warn("RTA2: config error");
        if (h = window.performance || {
                now: e
            }, _ = {}, window.PerformanceObserver) try {
            new PerformanceObserver(function(e, t) {
                e.getEntries().forEach(function(e) {
                    _["paint_" + e.name] = 0 | e.startTime
                })
            }).observe({
                entryTypes: ["paint"]
            })
        } catch (e) {}
        if (y = [s((new Date).getTime()), s(), s()].join("-"), T = 1987, S = 1.5, b = {
                version: .37,
                _start: (new Date).getTime(),
                _init: {
                    type: f.getAttribute("data-type"),
                    params: decodeURIComponent(f.getAttribute("data-params") || "%7B%7D")
                },
                _hosts: f.getAttribute("data-hosts"),
                _pageSelector: f.getAttribute("data-track-sel") || '#masthead #pageBody .pageBackground .floating-buttons div[itemtype="//schema.org/NewsArticle"] div[itemprop="mainEntity"] .scrollable-content #page-container',
                _script: f.src.match(/(https?:\/\/)([^\/]+)/),
                _ito: f.getAttribute("data-ito") || void 0,
                _buffer: [],
                tedEvent: function(e, t) {
                    var n = ("view" === e || "cview" === e || "report" === e) && e;
                    if (n) {
                        k || (k = setTimeout(c, I)), b._pageType = e;
                        var i = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                        i && (t.connection = {
                            type: i.type,
                            downlink: i.downlink,
                            downlinkMax: i.downlinkMax,
                            effectiveType: i.effectiveType,
                            rtt: i.rtt
                        }), window.molABTest && (t.molABTest = window.molABTest)
                    }
                    return n || b._unloaded ? a(e, t) : "video-event" !== e || "video.content-started" !== t.action && "video.content-completed" !== t.action ? void b._buffer.push({
                        t: e,
                        a: t,
                        d: (new Date).getTime()
                    }) : a(e, t)
                },
                tedFinalEvent: function(e, t) {
                    return this.tedEvent(e, t), d(!0)
                },
                ito: function(e) {
                    b._ito = e
                },
                geo: e
            }, window.Promise && (b.ids = new Promise(function(e) {
                b._resolveIDs = e
            })), window !== window.parent) return b.tedEvent = function() {
            window.parent.postMessage({
                sig: v,
                call: "tedEvent",
                args: [].slice.call(arguments, 0)
            }, "*")
        }, void(window.RTA = b);
        b._hosts = b._hosts ? b._hosts.split(",") : [b._script[2]];
        try {
            E = window.localStorage.getItem("ruid"), E && (E = JSON.parse(E)) && (!E.v || E.v < "0.15") && (A = {}, A[b._hosts[0]] = E, A.v = b.version, D = JSON.stringify(A), window.localStorage.setItem("rta2", D), document.cookie = "ruid=" + encodeURIComponent(D) + ";path=/;max-age=31536000;expires=" + new Date((new Date).getTime() + 31536e6).toUTCString(), window.localStorage.removeItem("ruid"))
        } catch (e) {}
        E = n(), window.RTA = b, b._init.type && b.tedEvent(b._init.type, JSON.parse(b._init.params)), I = 4567 + (+(E && E["/"] && E["/"].dd) || 0), O = {}, x = 0, N = b._start, void 0 !== document.hidden ? (q = "hidden", B = "visibilitychange") : void 0 !== document.msHidden ? (q = "msHidden", B = "msvisibilitychange") : void 0 !== document.webkitHidden && (q = "webkitHidden", B = "webkitvisibilitychange"), P = {
            capture: !0,
            passive: !0
        }, document.addEventListener("click", p, P), document.addEventListener("selectstart", function() {
            C = !0
        }, P), window.addEventListener("scroll", u, P), document.addEventListener(B, m, P), window.addEventListener("pagehide", g, P), window.addEventListener("pageshow", l, P), window.addEventListener("beforeunload", g, P), window.addEventListener("unload", g, P), window === window.parent && window.addEventListener("message", w, P)
    } catch (e) {
        return console.warn("RTA", e)
    }
}();