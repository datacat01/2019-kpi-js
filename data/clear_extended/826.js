! function() {
    function e(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var o = new RegExp("[\\?&]" + e + "=([^&#]*)"),
            t = o.exec(location.search);
        return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
    }

    function o(e) {
        try {
            return sessionStorage.getItem(e)
        } catch (o) {
            return c(e)
        }
    }

    function t(e, o) {
        try {
            return sessionStorage.setItem(e, o)
        } catch (t) {
            document.cookie = e + "=" + o + "; path=/"
        }
    }

    function n(e) {
        try {
            sessionStorage.removeItem(e)
        } catch (o) {
            document.cookie = e + "=0 ; path=/"
        }
    }

    function c(e) {
        var o = new RegExp(e + "=([^;]+)"),
            t = o.exec(document.cookie);
        return null != t ? unescape(t[1]) : null
    }
    var g = "roiq_asid",
        a = e("asid"),
        r = e("utm_source");
    r.length > 0 && n(g), !a.length > 0 && (a = o(g)), a && (window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], googletag.cmd.push(function() {
        googletag.pubads().setTargeting("roiq_asid", a)
    }), t(g, a))
}();