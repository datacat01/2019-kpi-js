! function() {
    var e, r, s = navigator.userAgent.toLowerCase(),
        o = window.location.search,
        t = /android/.test(s),
        a = /iphone|ipad|ipod/.test(s) || -1 < o.indexOf("forceIos"),
        w = a || t || -1 < o.indexOf("forceTouch"),
        i = "msie",
        m = "msedge",
        b = {
            browser: (e = /(edge)\/([\w.]+)/.exec(s) || /(opr)[\/]([\w.]+)/.exec(s) || /(chrome)[ \/]([\w.]+)/.exec(s) || /(iemobile)[\/]([\w.]+)/.exec(s) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(s) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(s) || /(webkit)[ \/]([\w.]+)/.exec(s) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(s) || /(msie) ([\w.]+)/.exec(s) || 0 <= s.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(s) || s.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(s) || [])[5] || e[3] || e[1] || "",
            version: e[2] || e[4] || "0",
            versionNumber: e[4] || e[2] || "0"
        };
    window.ustream || (ustream = {
        browser: {}
    }), ustream.browser = {
        ios: a,
        android: t,
        touch: w,
        ie: "msie" === b.browser
    }, b.browser && (ustream.browser[b.browser] = !0, ustream.browser.version = b.version, ustream.browser.versionNumber = parseInt(b.versionNumber, 10)), ustream.browser.opr && (delete ustream.browser.opr, ustream.browser.opera = !0), (ustream.browser.rv || ustream.browser.iemobile) && (b.browser = i, ustream.browser[i] = !0, ustream.browser.ie = !0), ustream.browser.rv && delete ustream.browser.rv, ustream.browser.edge && (delete ustream.browser.edge, b.browser = m, ustream.browser[m] = !0), (ustream.browser.chrome || ustream.browser.opera || ustream.browser.safari) && (ustream.browser.webkit = !0), (ustream.browser.chrome || ustream.browser.opera) && (ustream.browser.blink = !0), -1 < o.indexOf("jsdebug=1") && (ustream.debug = !0), ustream.browser.msie || (ustream.browser.msie = ustream.browser.ie), /phantomjs/.test(s) && (ustream.browser.phantomjs = !0), (r = function() {
        var e = function(e) {
            document.body.className += (document.body.className ? " " : "") + e
        };
        setTimeout(function() {
            document.body ? (t ? e("android") : a && e("ios"), w && e("touch")) : setTimeout(r, 100)
        }, 100)
    })()
}();