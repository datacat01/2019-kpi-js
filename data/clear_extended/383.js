(function() {
    function a(a, b, c) {
        var d = "";
        if (c) {
            var e = new Date;
            e.setTime(e.getTime() + c * 24 * 60 * 60 * 1e3), d = "; expires=" + e.toGMTString()
        }
        document.cookie = a + "=" + b + "; path=/" + d
    }

    function b(a) {
        var b = a + "=",
            c = document.cookie.split(";");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].trim();
            if (e.indexOf(b) == 0) return e.substring(b.length, e.length)
        }
        return ""
    }

    function c() {
        var a = document.documentElement.lang ? document.documentElement.lang : "en";
        return a != "en" && a.length > 2 && !/es-419|pt-br|zh-cn|zh-tw/.test(a) && (a = a.substr(0, 2)), a
    }

    function d(d, e) {
        if (d != "overlay" && d != "top-bar") return;
        var f = "";
        d.indexOf("top") != -1 && (f = "--top"), d == "top-bar" && (d = d.slice(4));
        var g = d + "-" + e,
            h = b("op_" + g);
        if (h) return;
        var i = document.getElementsByTagName("header")[0],
            j = document.createElement("iframe");
        j.id = "promoasset-iframe--" + g, j.className = "modal-dialog--" + d + " " + d + f, j.style.display = "none", document.body.insertBefore(j, i);
        var k = document.getElementById("promoasset-iframe--" + g),
            l = c();
        if (k) {
            var m = "opera.com";
            /opera-browser/.test(document.domain) && (m = "opera-browser.com"), k.src = "//" + m + "/" + l + "/promoassets/" + g, g !== "bar-promo-ofa" && a("op_" + g, "true", 365), k.style.display = "block"
        }
    }

    function e(a) {
        var b = document.getElementById(a);
        b && document.body.removeChild(b)
    }
    window.addEventListener("message", function(a) {
        a = a || window.event;
        if (typeof a.data != "string") return;
        a.data.indexOf("promoasset-iframe") != -1 && e(a.data)
    }), loadPromoAsset = d
})()