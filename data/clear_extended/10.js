(function() {
    function m() {
        var a = A.exec(document.cookie || "");
        return a && window.decodeURIComponent(a[1])
    }

    function n(a) {
        var b = new Date;
        b.setTime(b.getTime() + B);
        document.cookie = [p + "\x3d" + window.encodeURIComponent(a), "expires\x3d" + b.toUTCString(), "path\x3d/"].join(";")
    }

    function g(a) {
        n("" + a + "|" + c)
    }

    function q() {
        var a = m() || "",
            a = /(?:(-?\d+(?:\.\d+)?)\|?(.*))?/i.exec(a);
        d = parseInt(a[1], 10) || 0;
        return {
            viewCount: d,
            userAgent: a[2] || c,
            isDismissed: d === h
        }
    }

    function r() {
        var a, b;
        for (b in s)
            if (a = s[b].exec(c)) return {
                vendor: b,
                version: parseFloat(a[1] || a[2], 10) || 0
            };
        return null
    }

    function t() {
        var a = C.get("supportedBrowserMinVersions", "global:browserSupportPolicy"),
            b = r();
        if (b && b.vendor) {
            if (b.vendor === D) return !0;
            a = a[b.vendor];
            if (a === u) return !0;
            a = (/\d+(?:\.\d+)?/.exec("" + a) || [])[0];
            a = parseFloat(a, 10);
            return b.version >= a
        }
        return !1
    }

    function v() {
        var a = q();
        a.isDismissed && (d = a.userAgent === c ? e : 0);
        return d < e
    }

    function w() {
        function a() {
            g(h)
        }
        var b = E.get("global_browser_unsupported_notice"),
            c = k.get("global_bsp_notice_type"),
            e = k.get("global_bsp_notice_autoHide");
        if (b && x)
            if (x({
                    message: b,
                    type: c && c !== u ? c : "notice",
                    autoHide: "true" === e,
                    dismissable: !0,
                    origin: l
                }), g(++d), y) y.on(l, "dismiss", a);
            else if (f && f.alertManager) f.alertManager.onDidRemoveAlert(function(b) {
            b.meta.origin === l && a()
        })
    }

    function z() {
        var a = k.get("global_bsp_view_threshold"),
            a = /\d+/.exec("" + a),
            a = parseInt(a && a[0], 10);
        isNaN(a) || (e = a);
        v() && !t() && w()
    }
    var l = "browserSupportPolicy",
        p = "bspNotice",
        A = RegExp("(?:^|;)\\s?" + p + "\x3d(.*?)(?:;|$)", "i"),
        B = 5184E6,
        h = -1,
        e = 3,
        u = "control",
        D = "ignored",
        s = {
            ie: /(?:(?:ms|\()(?:ie)\s(\d+(?:\.\d+)?)?[\w\.]*|trident.+rv[:\s](\d+(?:\.\d+)?)?[\w\.]*.+like\sgecko)/i,
            firefox: /firefox\/(\d+(?:\.\d+)?)?[\w\.-]*/i,
            opera: /\s+opr\/(\d+(?:\.\d+)?)/i,
            androidChrome: /android.+chrome\/(\d+(?:\.\d+)?)?[\w\.]*/i,
            chrome: /chrome\/v?(\d+(?:\.\d+)?)?[\w\.]*/i,
            android: /android[\/\s-]?(\d+(?:\.\d+)?)?[\w\.]*/i,
            mobileSafari: /version\/(\d+(?:\.\d+)?)?[\w\.]*.+?(?:mobile(?:\/\w+)?\s?safari)/i,
            safari: /version\/(\d+(?:\.\d+)?)?[\w\.]*.+?safari/i,
            ignored: /(?:applewebkit|bot|crawler|baiduspider|80legs|ia_archiver|voyager|curl|wget|yahoo!?\s?(?:slurp|seeker)|mediapartners-google)/i
        },
        E =
        LIModules.requires("i18n"),
        C = LIModules.requires("jsConfig"),
        k = LIModules.requires("LiX"),
        f = window.globalNav,
        x = LIModules.imports("injectAlert") || f && f.alertManager && f.alertManager.injectAlert,
        y = LIModules.imports("GlobalAlertManager"),
        c = window.navigator && window.navigator.userAgent || "unknown",
        d = 0;
    window.LI_JS_TEST ? window.browserSupportPolicyTest = {
        readCookie: m,
        writeCookie: n,
        getBrowserDetails: r,
        isBrowserSupported: t,
        isNoticeViewable: v,
        showUserNotice: w,
        setViewStatus: g,
        getViewStatus: q,
        init: z,
        setUserAgent: function(a) {
            c =
                a
        },
        VIEW_THRESHOLD: e,
        DISMISSED: h
    } : z()
})();