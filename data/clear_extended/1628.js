var LUX = LUX || {};
LUX.samplerate = 50;
var LUX_t_start = Date.now();
LUX = (function() {
    av("lux.js evaluation start.");
    var I = "1.75";
    var aZ = ("undefined" !== typeof(LUX) && "undefined" !== typeof(LUX.label) ? LUX.label : document.title);
    var V = "https://lux.speedcurve.com/error/";
    var aA = "";
    var g = 0;
    var an = 5;

    function ab(i) {
        g++;
        if (i && "undefined" !== typeof(i.filename) && "undefined" !== typeof(i.message)) {
            if ((-1 !== i.filename.indexOf("/lux.js?") || -1 !== i.message.indexOf("LUX")) || (g <= an && "function" === typeof(c) && c())) {
                aZ = ("undefined" !== typeof(LUX) && "undefined" !== typeof(LUX.label) ? LUX.label : document.title);
                new Image().src = V + "?v=" + I + "&id=" + z() + "&fn=" + encodeURIComponent(i.filename) + "&ln=" + i.lineno + "&cn=" + i.colno + "&msg=" + encodeURIComponent(i.message) + "&l=" + encodeURIComponent(aZ) + (am() ? "&ct=" + am() : "") + ""
            }
        }
    }
    window.addEventListener("error", ab);
    var aj = ("object" === typeof(LUX_al) ? LUX_al.slice() : []);
    if ("function" === typeof(PerformanceObserver) && "function" === typeof(PerformanceLongTaskTiming)) {
        var n = new PerformanceObserver(function(a8) {
            var a7 = a8.getEntries();
            for (var e = 0; e < a7.length; e++) {
                var a9 = a7[e];
                aj.push(a9)
            }
        });
        try {
            n.observe({
                entryTypes: ["longtask"],
                buffered: true
            })
        } catch (ad) {}
    } else {
        av("Long Tasks not supported.")
    }
    var M = 0;
    var aU = 1;
    var K = 2;
    var p = 4;
    var F = ("undefined" !== typeof(LUX) && "undefined" !== typeof(LUX.gaMarks) ? LUX.gaMarks : []);
    var aD = ("undefined" !== typeof(LUX) && "undefined" !== typeof(LUX.gaMeasures) ? LUX.gaMeasures : []);
    var a0 = {};
    var aL = {};
    var au = 0;
    var ag = 0;
    var aM = 0;
    var W = 0;
    var d = "LUX_start";
    var a3 = "LUX_end";
    var aJ = 30 * 60;
    var v = C();
    var aa = aO(v);
    var aY;
    var ay = window.performance;
    var a5 = 2000;
    var aq = ("undefined" !== typeof(LUX) && LUX.beaconUrl ? LUX.beaconUrl : "https://lux.speedcurve.com/lux/");
    var l = ("undefined" !== typeof(LUX) && "undefined" !== typeof(LUX.samplerate) ? LUX.samplerate : 100);
    av("Sample rate = " + l + "%. " + (c() ? "This session IS being sampled. The data WILL show up in your LUX dashboards." : "This session is NOT being sampled. The data will NOT show up in your LUX dashboards. Call LUX.forceSample() and try again."));
    var ai = ("undefined" !== typeof(LUX) && "undefined" !== typeof(LUX.auto) ? LUX.auto : true);
    var o = ("undefined" !== typeof(LUX) && LUX.ns ? LUX.ns : (Date.now ? Date.now() : +(new Date())));
    if (ay && ay.timing && ay.timing.navigationStart) {
        o = ay.timing.navigationStart
    } else {
        av("Nav Timing is not supported.");
        M = M | K
    }
    var A;
    var t = ["click", "mousedown", "keydown", "touchstart", "pointerdown"];
    var a = {
        passive: true,
        capture: true
    };

    function a1(i, e) {
        if (!A) {
            A = Math.round(i);
            t.forEach(function(a7) {
                removeEventListener(a7, N, a)
            })
        }
    }

    function f(a7, e) {
        function a9() {
            a1(a7, e);
            i()
        }

        function a8() {
            i()
        }

        function i() {
            removeEventListener("pointerup", a9, a);
            removeEventListener("pointercancel", a8, a)
        }
        addEventListener("pointerup", a9, a);
        addEventListener("pointercancel", a8, a)
    }

    function N(e) {
        if (e.cancelable) {
            var a7 = R();
            var a8 = e.timeStamp;
            if (a8 > 1520000000) {
                a7 = Number(new Date())
            }
            if (a8 > a7) {
                return
            }
            var i = a7 - a8;
            if ("pointerdown" == e.type) {
                f(i, e)
            } else {
                a1(i, e)
            }
        }
    }
    t.forEach(function(e) {
        addEventListener(e, N, a)
    });

    function R() {
        if (ay && ay.now) {
            return ay.now()
        }
        var e = Date.now ? Date.now() : +(new Date());
        return e - o
    }

    function aG(e) {
        av("Enter LUX.mark(), name = " + e);
        if (ay) {
            if (ay.mark) {
                return ay.mark(e)
            } else {
                if (ay.webkitMark) {
                    return ay.webkitMark(e)
                }
            }
        }
        M = M | p;
        F.push({
            name: e,
            entryType: "mark",
            startTime: R(),
            duration: 0
        });
        return
    }

    function aw(a7, bb, e) {
        av("Enter LUX.measure(), name = " + a7);
        if ("undefined" === typeof(bb) && ax(d)) {
            bb = d
        }
        if (ay) {
            if (ay.measure) {
                if (bb) {
                    if (e) {
                        return ay.measure(a7, bb, e)
                    } else {
                        return ay.measure(a7, bb)
                    }
                } else {
                    return ay.measure(a7)
                }
            } else {
                if (ay.webkitMeasure) {
                    return ay.webkitMeasure(a7, bb, e)
                }
            }
        }
        var a9 = 0,
            i = R();
        if (bb) {
            var ba = ax(bb);
            if (ba) {
                a9 = ba.startTime
            } else {
                if (ay && ay.timing && ay.timing[bb]) {
                    a9 = ay.timing[bb] - ay.timing.navigationStart
                } else {
                    return
                }
            }
        }
        if (e) {
            var a8 = ax(e);
            if (a8) {
                i = a8.startTime
            } else {
                if (ay && ay.timing && ay.timing[e]) {
                    i = ay.timing[e] - ay.timing.navigationStart
                } else {
                    return
                }
            }
        }
        aD.push({
            name: a7,
            entryType: "measure",
            startTime: a9,
            duration: (i - a9)
        });
        return
    }

    function ax(e) {
        return P(e, w())
    }

    function ae(e) {
        return P(e, a6())
    }

    function P(a7, i) {
        if (i) {
            for (X = i.length - 1; X >= 0; X--) {
                var e = i[X];
                if (a7 === e.name) {
                    return e
                }
            }
        }
        return undefined
    }

    function w() {
        if (ay) {
            if (ay.getEntriesByType) {
                return ay.getEntriesByType("mark")
            } else {
                if (ay.webkitGetEntriesByType) {
                    return ay.webkitGetEntriesByType("mark")
                }
            }
        }
        return F
    }

    function a6() {
        if (ay) {
            if (ay.getEntriesByType) {
                return ay.getEntriesByType("measure")
            } else {
                if (ay.webkitGetEntriesByType) {
                    return ay.webkitGetEntriesByType("measure")
                }
            }
        }
        return aD
    }

    function ah(e) {
        if (ay && ay.clearMarks) {
            return ay.clearMarks(e)
        }
        if (e) {
            for (X = F.length - 1; X >= 0; X--) {
                if (e === F[X].name) {
                    F.splice(X, 1)
                }
            }
        } else {
            F = []
        }
        return
    }

    function Z(e) {
        if (ay && ay.clearMeasures) {
            return ay.clearMeasures(e)
        }
        if (e) {
            for (X = aD.length - 1; X >= 0; X--) {
                if (e === aD[X].name) {
                    aD.splice(X, 1)
                }
            }
        } else {
            aD = []
        }
        return
    }

    function x() {
        var ba = {};
        var a7 = w();
        if (a7) {
            for (var bb = 0, bc = a7.length; bb < bc; bb++) {
                var a9 = a7[bb],
                    e = a9.name,
                    be = Math.round(a9.startTime);
                if ("undefined" === typeof(ba[e])) {
                    ba[e] = be
                } else {
                    ba[e] = Math.max(be, ba[e])
                }
            }
        }
        a7 = a6();
        if (a7) {
            for (var bb = 0, bc = a7.length; bb < bc; bb++) {
                var a9 = a7[bb],
                    e = a9.name,
                    be = Math.round(a9.duration);
                if ("undefined" === typeof(ba[e])) {
                    ba[e] = be
                } else {
                    ba[e] = Math.max(be, ba[e])
                }
            }
        }
        var bd = [];
        var a8 = Object.keys(ba);
        if (a8) {
            for (var bb = 0, bc = a8.length; bb < bc; bb++) {
                var e = a8[bb];
                bd.push(e + "|" + ba[e])
            }
        }
        return bd.join(",")
    }

    function aV() {
        if ("function" !== typeof(PerformanceLongTaskTiming)) {
            return ""
        }
        var e = "";
        var bh = {};
        var bb = {};
        if (aj.length) {
            var bg = (ax(d) ? ax(d).startTime : 0);
            var a9 = (ax(d) ? ax(a3).startTime : ay.timing.loadEventEnd - ay.timing.navigationStart);
            for (var bc = 0; bc < aj.length; bc++) {
                var a8 = aj[bc];
                var a7 = Math.round(a8.duration);
                if (a8.startTime < bg) {
                    a7 -= bg - a8.startTime
                } else {
                    if (a8.startTime >= a9) {
                        continue
                    }
                }
                var bf = a8.attribution[0].name;
                if (!bh[bf]) {
                    bh[bf] = 0;
                    bb[bf] = ""
                }
                bh[bf] += a7;
                bb[bf] += "," + Math.round(a8.startTime) + "|" + a7
            }
        }
        var be = ("undefined" !== typeof(bh.script) ? "script" : "unknown");
        if ("undefined" === typeof(bh[be])) {
            bh[be] = 0;
            bb[be] = ""
        }
        var ba = O(bb[be]);
        var bd = ",n|" + ba.count + ",d|" + ba.median + ",x|" + ba.max + (0 === ba.fci ? "" : ",i|" + ba.fci);
        e += "s|" + bh[be] + bd + bb[be];
        return e
    }

    function O(bh) {
        var be = 0;
        var a8 = y();
        var bc = (0 === a8 ? true : false);
        var bf = [];
        var ba = bh.split(",");
        for (var bb = 0; bb < ba.length; bb++) {
            var a9 = ba[bb].split("|");
            if (a9.length === 2) {
                var a7 = parseInt(a9[0]);
                var e = parseInt(a9[1]);
                bf.push(e);
                be = (e > be ? e : be);
                if (!bc && a7 > a8) {
                    if (a7 - a8 > 5000) {
                        bc = true
                    } else {
                        a8 = a7 + e
                    }
                }
            }
        }
        var bd = bf.length;
        var bg = at(bf);
        return {
            count: bd,
            median: bg,
            max: be,
            fci: a8
        }
    }

    function at(e) {
        if (0 === e.length) {
            return 0
        }
        var i = Math.floor(e.length / 2);
        e.sort(function(a8, a7) {
            return a8 - a7
        });
        if (e.length % 2) {
            return e[i]
        } else {
            return Math.round((e[i - 1] + e[i]) / 2)
        }
    }

    function U() {
        var a8 = "";
        if (ay && ay.getEntriesByName) {
            var bb = aF("/js/lux.js");
            if (bb) {
                var i = ay.getEntriesByName(bb.src);
                if (i && i.length) {
                    var e = i[0];
                    var a9 = Math.round(e.domainLookupEnd - e.domainLookupStart);
                    var be = Math.round(e.connectEnd - e.connectStart);
                    var a7 = Math.round(e.responseStart - e.requestStart);
                    var ba = Math.round(e.responseEnd - e.responseStart);
                    var bd = a9 + be + a7 + ba;
                    var bc = LUX_t_end - LUX_t_start;
                    a8 = "d" + a9 + "t" + be + "f" + a7 + "c" + ba + "n" + bd + "e" + bc + "r" + l
                }
            }
        }
        return a8
    }

    function a2() {
        a0 = {}
    }

    function aX() {
        var e = [];
        for (var i in a0) {
            e.push(i + "|" + a0[i])
        }
        return e.join(",")
    }

    function u(i, a7) {
        av("Enter LUX.addData(), name = " + i + ", value = " + a7);
        var a8 = typeof(i);
        var e = typeof(a7);
        if ("string" === a8 && ("string" === e || "number" === e || "boolean" === e)) {
            aL[i] = a7
        }
        if (au) {
            if (aY) {
                clearTimeout(aY)
            }
            aY = setTimeout(aR, 100)
        }
    }

    function c() {
        if ("undefined" === typeof(aa) || "undefined" === typeof(l)) {
            return false
        }
        var e = ("" + aa).substr(-2);
        return (parseInt(e) < l)
    }

    function k() {
        var e = [];
        for (var i in aL) {
            var a7 = "" + aL[i];
            i = i.replace(/,/g, "").replace(/\|/g, "");
            a7 = a7.replace(/,/g, "").replace(/\|/g, "");
            e.push(i + "|" + a7)
        }
        return encodeURIComponent(e.join(","))
    }

    function aB() {
        av("Enter LUX.init().");
        ah();
        Z();
        a2();
        af();
        ar();
        aZ = ("undefined" !== typeof(LUX) && "undefined" !== typeof(LUX.label) ? LUX.label : document.title);
        ag = 0;
        au = 0;
        aM = 0;
        v = C();
        aa = aO(v);
        aj.splice(0);
        M = 0;
        M = M | aU;
        aG(d)
    }

    function aQ() {
        var bc = Y();
        if (!bc) {
            return h()
        }
        var a8 = document.getElementsByTagName("script");
        var a9 = 0;
        for (var ba = 0, a7 = a8.length; ba < a7; ba++) {
            var bb = a8[ba];
            if (bb.src && !bb.async && !bb.defer && 0 !== (bb.compareDocumentPosition(bc) & 4)) {
                a9++
            }
        }
        return a9
    }

    function s() {
        var a8 = 0;
        var a9 = document.getElementsByTagName("link");
        for (var ba = 0, a7 = a9.length; ba < a7; ba++) {
            var bb = a9[ba];
            if (bb.href && "stylesheet" === bb.rel && 0 !== bb.href.indexOf("data:")) {
                if (bb.onloadcssdefined || "print" === bb.media || "style" === bb.as) {} else {
                    a8++
                }
            }
        }
        return a8
    }

    function h() {
        var a8 = document.getElementsByTagName("script");
        var a9 = 0;
        for (var ba = 0, a7 = a8.length; ba < a7; ba++) {
            var bb = a8[ba];
            if (bb.src && !bb.async && !bb.defer) {
                a9++
            }
        }
        return a9
    }

    function aI() {
        var a8 = document.getElementsByTagName("script");
        var a9 = 0;
        for (var ba = 0, a7 = a8.length; ba < a7; ba++) {
            var bb = a8[ba];
            if (bb.src) {
                a9++
            }
        }
        return a9
    }

    function ak() {
        var a8 = document.getElementsByTagName("link");
        var a9 = 0;
        for (var ba = 0, a7 = a8.length; ba < a7; ba++) {
            var bb = a8[ba];
            if (bb.href && "stylesheet" == bb.rel) {
                a9++
            }
        }
        return a9
    }

    function j() {
        var a8 = "";
        var a7 = o;
        if (ax(d) && ax(a3)) {
            var bb = Math.round(ax(d).startTime);
            a7 += bb;
            var e = Math.round(ax(a3).startTime) - bb;
            a8 = a7 + "fs" + 0 + "ls" + e + "le" + e + ""
        } else {
            if (ay && ay.timing) {
                var i = ay.timing;
                var ba = aT();
                var a9 = y();
                a8 = a7 + (i.redirectStart ? "rs" + (i.redirectStart - a7) : "") + (i.redirectEnd ? "re" + (i.redirectEnd - a7) : "") + (i.fetchStart ? "fs" + (i.fetchStart - a7) : "") + (i.domainLookupStart ? "ds" + (i.domainLookupStart - a7) : "") + (i.domainLookupEnd ? "de" + (i.domainLookupEnd - a7) : "") + (i.connectStart ? "cs" + (i.connectStart - a7) : "") + (i.secureConnectionStart ? "sc" + (i.secureConnectionStart - a7) : "") + (i.connectEnd ? "ce" + (i.connectEnd - a7) : "") + (i.requestStart ? "qs" + (i.requestStart - a7) : "") + (i.responseStart ? "bs" + (i.responseStart - a7) : "") + (i.responseEnd ? "be" + (i.responseEnd - a7) : "") + (i.domLoading ? "ol" + (i.domLoading - a7) : "") + (i.domInteractive ? "oi" + (i.domInteractive - a7) : "") + (i.domContentLoadedEventStart ? "os" + (i.domContentLoadedEventStart - a7) : "") + (i.domContentLoadedEventEnd ? "oe" + (i.domContentLoadedEventEnd - a7) : "") + (i.domComplete ? "oc" + (i.domComplete - a7) : "") + (i.loadEventStart ? "ls" + (i.loadEventStart - a7) : "") + (i.loadEventEnd ? "le" + (i.loadEventEnd - a7) : "") + (ba ? "sr" + ba : "") + (a9 ? "fc" + a9 : "") + ""
            } else {
                if (ax(a3)) {
                    var e = Math.round(ax(a3).startTime);
                    a8 = a7 + "fs" + 0 + "ls" + e + "le" + e + ""
                }
            }
        }
        return a8
    }

    function y() {
        if (ay && ay.getEntriesByType && ay.getEntriesByType("paint")) {
            for (var a7 = ay.getEntriesByType("paint"), a8 = 0; a8 < a7.length; a8++) {
                var e = a7[a8];
                if ("first-contentful-paint" === e.name) {
                    return Math.round(e.startTime)
                }
            }
        }
        return 0
    }

    function aT() {
        if (ay && ay.timing) {
            var a9 = ay.timing;
            var ba = a9.navigationStart;
            var bb;
            if (ba) {
                if (ay && ay.getEntriesByType && ay.getEntriesByType("paint") && ay.getEntriesByType("paint").length) {
                    for (var a7 = ay.getEntriesByType("paint"), a8 = 0; a8 < a7.length; a8++) {
                        var e = a7[a8];
                        if ("first-paint" === e.name) {
                            bb = Math.round(e.startTime);
                            break
                        }
                    }
                } else {
                    if (window.chrome && "function" === typeof(window.chrome.loadTimes)) {
                        var bd = window.chrome.loadTimes();
                        if (bd) {
                            bb = Math.round((bd.firstPaintTime * 1000) - ba)
                        }
                    } else {
                        if (a9.msFirstPaint) {
                            bb = Math.round(a9.msFirstPaint - ba)
                        }
                    }
                }
                var bc = (a9.loadEventStart - ba);
                if (bb && bb < bc) {
                    return bb
                }
            }
        }
        av("Paint Timing not supported.");
        return null
    }

    function z() {
        if ("undefined" !== typeof(LUX) && LUX.customerid) {
            return LUX.customerid
        }
        var e = aF("/js/lux.js");
        if (e) {
            LUX.customerid = T(e.src, "id");
            return LUX.customerid
        }
        return ""
    }

    function aF(a9) {
        var ba = document.getElementsByTagName("script");
        for (var a8 = 0, e = ba.length; a8 < e; a8++) {
            var a7 = ba[a8];
            if (a7.src && -1 !== a7.src.indexOf(a9)) {
                return a7
            }
        }
        return null
    }

    function T(e, a7) {
        var bc = e.split("?")[1];
        var a9 = bc.split("&");
        for (var ba = 0, bb = a9.length; ba < bb; ba++) {
            var bd = a9[ba];
            var a8 = bd.split("=");
            var be = a8[0];
            if (a7 === be) {
                return a8[1]
            }
        }
        return undefined
    }

    function aP() {
        var e = document.getElementsByTagName("*");
        var a7 = e.length;
        var a9 = 0;
        while (a7--) {
            a9 += a4(e[a7])
        }
        var a8 = Math.round(a9 / e.length);
        return a8
    }

    function a4(e) {
        var i = 0;
        if (e.parentNode) {
            while (e = e.parentNode) {
                i++
            }
        }
        return i
    }

    function H(a8) {
        var i = a8.body,
            a7 = a8.documentElement;
        var e = Math.max((i ? i.scrollHeight : 0), (i ? i.offsetHeight : 0), (a7 ? a7.clientHeight : 0), (a7 ? a7.scrollHeight : 0), (a7 ? a7.offsetHeight : 0));
        return e
    }

    function r(a8) {
        var e = a8.body,
            i = a8.documentElement;
        var a7 = Math.max((e ? e.scrollWidth : 0), (e ? e.offsetWidth : 0), (i ? i.clientWidth : 0), (i ? i.scrollWidth : 0), (i ? i.offsetWidth : 0));
        return a7
    }

    function Q() {
        if (ay && ay.getEntriesByType) {
            var e = performance.getEntriesByType("navigation");
            if (e && e.length > 0 && e[0]["transferSize"]) {
                return e[0]["transferSize"]
            }
        }
        return 0
    }

    function am() {
        var i = navigator.connection;
        var e = "";
        if (i) {
            if (i.effectiveType) {
                e = i.effectiveType
            } else {
                if (i.type) {
                    e = i.type
                }
            }
        }
        if (e) {
            if ("slow-2g" === e) {
                e = "Slow 2G"
            } else {
                if ("2g" === e || "3g" === e || "4g" === e || "5g" === e) {
                    e = e.toUpperCase()
                } else {
                    e = e.charAt(0).toUpperCase() + e.slice(1)
                }
            }
        }
        return e
    }

    function aC() {
        var ba = document.getElementsByTagName("img");
        var a8 = [];
        if (ba) {
            for (var a7 = 0, e = ba.length; a7 < e; a7++) {
                var a9 = ba[a7];
                if (q(a9)) {
                    a8.push(a9)
                }
            }
        }
        return a8
    }

    function Y(a9) {
        if (!a9) {
            a9 = document.body
        }
        var a7;
        if (a9) {
            var ba = a9.children;
            if (ba) {
                for (var a8 = 0, e = ba.length; a8 < e; a8++) {
                    var bb = ba[a8];
                    if (q(bb)) {
                        a7 = bb
                    }
                }
            }
        }
        if (a7) {
            return Y(a7)
        } else {
            return a9
        }
    }

    function q(a8) {
        var a9 = document.documentElement.clientHeight;
        var a7 = document.documentElement.clientWidth;
        var i = aW(a8);
        return (i[0] >= 0 && i[1] >= 0 && i[0] < a7 && i[1] < a9 && a8.offsetWidth > 0 && a8.offsetHeight > 0)
    }

    function aW(i) {
        var a7 = curtop = 0;
        while (i) {
            a7 += i.offsetLeft;
            curtop += i.offsetTop;
            i = i.offsetParent
        }
        return [a7, curtop]
    }

    function S() {
        av("Enter LUX.send().");
        var bd = z();
        if (!bd || !v || !al() || !c() || au) {
            return
        }
        if ("complete" !== document.readyState) {
            setTimeout(S, 200);
            return
        }
        aG(a3);
        var bc = x();
        var bi = k();
        var a9 = "";
        if (!aM) {
            a9 = aX()
        }
        var e = aV();
        var a8 = U();
        aZ = ("undefined" !== typeof(LUX) && "undefined" !== typeof(LUX.label) ? LUX.label : document.title);
        var ba = aq + "?v=" + I + "&id=" + bd + "&sid=" + v + "&uid=" + aa + (bi ? "&CD=" + bi : "") + "&l=" + encodeURIComponent(aZ);
        var be = (ag ? "" : "&NT=" + j()) + (au || !a8 ? "" : "&LJS=" + a8) + "&PS=ns" + aI() + "bs" + aQ() + "ss" + ak() + "bc" + s() + "ia" + aC().length + "it" + document.getElementsByTagName("img").length + "dd" + aP() + "nd" + document.getElementsByTagName("*").length + "vh" + document.documentElement.clientHeight + "vw" + document.documentElement.clientWidth + "dh" + H(document) + "dw" + r(document) + (Q() ? "ds" + Q() : "") + (am() ? "ct" + am() + "_" : "") + "er" + g + (a9 ? "&IX=" + a9 : "") + (e ? "&CPU=" + e : "") + (M ? "&fl=" + M : "") + "";
        var bh = "";
        if (bc) {
            var i = ba.length + be.length;
            if (i + bc.length <= a5) {
                be += "&UT=" + bc
            } else {
                var bb = a5 - i;
                var bg = bc.lastIndexOf(",", bb);
                be += "&UT=" + bc.substring(0, bg);
                bh = bc.substring(bg + 1)
            }
        }
        var bf = ba + be;
        av("Sending main LUX beacon: " + bf);
        E(bf);
        au = 1;
        ag = 1;
        aM = a9;
        var bb = a5 - ba.length;
        while (bh) {
            var a7 = "";
            if (bh.length <= bb) {
                a7 = bh;
                bh = ""
            } else {
                var bg = bh.lastIndexOf(",", bb);
                if (-1 === bg) {
                    bg = bh.indexOf(",")
                }
                if (-1 === bg) {
                    a7 = bh;
                    bh = ""
                } else {
                    a7 = bh.substring(0, bg);
                    bh = bh.substring(bg + 1)
                }
            }
            var bf = ba + "&UT=" + a7;
            av("Sending extra User Timing beacon: " + bf);
            E(bf)
        }
    }

    function B() {
        var a7 = z();
        if (!a7 || !v || !al() || !c() || aM || !au) {
            return
        }
        var i = aX();
        if (i) {
            var a8 = k();
            var e = "?v=" + I + "&id=" + a7 + "&sid=" + v + "&uid=" + aa + (a8 ? "&CD=" + a8 : "") + "&l=" + encodeURIComponent(aZ) + "&IX=" + i + (A ? "&FID=" + A : "") + "";
            var a9 = aq + e;
            av("Sending Interaction Metrics beacon: " + a9);
            E(a9);
            aM = 1
        }
    }

    function aR() {
        var i = z();
        if (!i || !v || !al() || !c() || !au) {
            return
        }
        var a7 = k();
        if (a7) {
            var e = "?v=" + I + "&id=" + i + "&sid=" + v + "&uid=" + aa + "&CD=" + a7 + "&l=" + encodeURIComponent(aZ) + "";
            var a8 = aq + e;
            av("Sending late Customer Data beacon: " + a8);
            E(a8)
        }
    }

    function E(e) {
        var i = document.createElement("script");
        i.async = true;
        i.src = e;
        var a7 = document.getElementsByTagName("script")[0];
        a7.parentNode.insertBefore(i, a7)
    }

    function J(a7, i, e) {
        if (!a7 || !a7.hasAttribute) {
            return i
        }
        if (a7.hasAttribute("data-sctrack")) {
            e = true;
            if (a7.id) {
                i = a7.id
            }
        }
        if (!i && a7.id) {
            i = a7.id
        }
        if (e && i) {
            return i
        }
        return J(a7.parentNode, i, e)
    }

    function aS() {
        if ("undefined" === typeof(a0.s)) {
            a0.s = Math.round(R())
        }
    }

    function ap(a7) {
        af();
        if ("undefined" === typeof(a0.k)) {
            a0.k = Math.round(R());
            if (a7 && a7.target) {
                var i = J(a7.target);
                if (i) {
                    a0.ki = i
                }
            }
            B()
        }
    }

    function G(a7) {
        af();
        if ("undefined" === typeof(a0.c)) {
            a0.c = Math.round(R());
            if (a7 && a7.target) {
                if (a7.clientX) {
                    a0.cx = a7.clientX;
                    a0.cy = a7.clientY
                }
                var i = J(a7.target);
                if (i) {
                    a0.ci = i
                }
            }
            B()
        }
    }

    function az(a8, i) {
        if (a8 && I < a8 && document.body && !W) {
            av("Updating cached version of lux.js from " + I + " to " + a8 + ".");
            W = 1;
            var e = aF("/js/lux.js");
            if (e) {
                if ("function" === typeof(fetch)) {
                    fetch(e.src, {
                        cache: "reload"
                    })
                } else {
                    var a7 = document.createElement("iframe");
                    a7.style.display = "none";
                    a7.id = "LUX_update_iframe";
                    a7.src = "//cdn.speedcurve.com/luxupdate.php?src=" + encodeURIComponent(e.src) + (i ? "&tw=" + i : "");
                    document.body.appendChild(a7)
                }
            }
        }
    }

    function b(e, i) {
        if (window.addEventListener) {
            window.addEventListener(e, i, false)
        } else {
            if (window.attachEvent) {
                window.attachEvent("on" + e, i)
            }
        }
    }

    function D(e, i) {
        if (window.removeEventListener) {
            window.removeEventListener(e, i, false)
        } else {
            if (window.detachEvent) {
                window.detachEvent("on" + e, i)
            }
        }
    }

    function ar() {
        b("scroll", aS);
        b("keypress", ap);
        b("mousedown", G)
    }

    function af() {
        D("scroll", aS);
        D("keypress", ap);
        D("mousedown", G)
    }

    function C(e) {
        var i = (e ? Number(new Date()) + "00000" : Number(new Date()) + "" + L(parseInt(100000 * Math.random()), "00000"));
        return i
    }

    function aO(a8) {
        var i = ac("lux_uid");
        if (!i || i.length < 11) {
            i = a8
        } else {
            var a7 = parseInt(i.substring(0, 10));
            var e = Number(new Date()) / 1000;
            if (e - a7 > (24 * 60 * 60)) {
                i = a8
            }
        }
        aK(i);
        return i
    }

    function aK(e) {
        m("lux_uid", e, aJ);
        return e
    }

    function aE() {
        return aa
    }

    function al() {
        return true
    }

    function ac(a7) {
        var e = document.cookie.split(";");
        for (var a8 = 0; a8 < e.length; a8++) {
            var a9 = e[a8].split("=");
            if (a7 === a9[0].trim()) {
                return unescape(a9[1])
            }
        }
        return undefined
    }

    function m(e, i, a7) {
        document.cookie = e + "=" + escape(i) + (a7 ? "; max-age=" + a7 : "") + "; path=/"
    }

    function L(i, e) {
        return (e + i).slice(-e.length)
    }

    function av(e) {
        if ("undefined" === typeof(gaLog)) {
            gaLog = []
        }
        gaLog.push(e);
        if (LUX.debug) {
            console.log("LUX: " + e)
        }
    }
    if (ai) {
        if ("complete" == document.readyState) {
            S()
        } else {
            b("load", function() {
                setTimeout(S, 200)
            })
        }
        b("beforeunload", S);
        b("unload", S);
        b("beforeunload", B);
        b("unload", B)
    }
    ar();
    var aH = {
        mark: aG,
        measure: aw,
        init: aB,
        send: S,
        addData: u,
        getSessionId: aE,
        getDebug: function() {
            return gaLog
        },
        forceSample: function() {
            aK(C(true));
            console.log("Sampling has been turned on for this session.")
        },
        doUpdate: az,
        beaconUrl: aq,
        samplerate: l,
        auto: ai,
        label: aZ,
        version: I,
        ae: [],
        al: [],
        debug: ("undefined" !== typeof(LUX) && LUX.debug ? true : false)
    };
    if (window.LUX && LUX.ac && LUX.ac.length) {
        for (var X = 0; X < LUX.ac.length; X++) {
            var ao = LUX.ac[X];
            var aN = ao.shift();
            if ("function" === typeof(aH[aN])) {
                aH[aN].apply(aH, ao)
            }
        }
    }
    for (var X = 0;
        "object" === typeof(LUX_ae) && X < LUX_ae.length; X++) {
        ab(LUX_ae[X])
    }
    av("lux.js evaluation end.");
    return aH
})();
var LUX_t_end = Date.now();