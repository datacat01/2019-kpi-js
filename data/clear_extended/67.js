! function(a) {
    "use strict";

    function b(a) {
        var b, c = 0,
            d = 0;
        for (b in a) a.hasOwnProperty(b) && (c = a[b].coveragePercentage, a[b].inViewPort && Math.round(c) > 0 && (d += c));
        return d
    }

    function c(c, d) {
        var e, f, g, h = 0,
            i = Math.floor(d.visuallyComplete / 100),
            j = new Array(i),
            k = 0,
            l = d.modulesReport,
            m = {},
            n = c.adModules,
            o = n.length,
            p = 0;
        for (g in l)
            if (l.hasOwnProperty(g)) {
                for (f = !1, e = 0; e < o; e += 1)
                    if (g.search(n[e]) !== -1) {
                        f = !0;
                        break
                    } f || (m[g] = l[g])
            } for (p = b(m), e = 0; e < i; e += 1) j[e] = 0;
        e = 0;
        for (g in m) m.hasOwnProperty(g) && m[g].inViewPort && Math.round(m[g].coveragePercentage) > 0 && (c.useNormalizeCoverage && (m[g].normCoveragePercentage = m[g].coveragePercentage / p * 100, k += m[g].normCoveragePercentage), m[g].loadTime > 0 && (e = Math.round(m[g].loadTime / 100), j[e] += c.useNormalizeCoverage ? m[g].normCoveragePercentage : m[g].coveragePercentage));
        for (h += c.useNormalizeCoverage ? k - j[0] : p - j[0], e = 1; e < i; e += 1) j[e] = j[e - 1] + j[e], h += c.useNormalizeCoverage ? k - j[e] : p - j[e];
        return d.aftNoAd = h, YAFT.logToConsole("----NOADAFT----"), YAFT.logToConsole(m), a.YAFT_REPORT && a.YAFT_REPORT.addExtra && a.YAFT_REPORT.addExtra({
            name: "aftNoAd",
            title: "AFTNOAD",
            value: h,
            isNumeric: !0,
            needsRounding: !0
        }), d
    }
    a.yaft_aftnoad = {
        execute: c
    }
}(window);