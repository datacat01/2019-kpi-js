(function() {
    function d(g, a, b) {
        var c = document.createElement("script");
        c.src = g;
        c.onload = a;
        c.onerror = b;
        (document.body || document.head).appendChild(c)
    }

    function e(a) {
        return b + (/\?/.test(b) ? "\x26" : "?") + "ch\x3d" + window.encodeURIComponent(a)
    }

    function a(a) {
        window.abp = {
            enabled: a
        };
        window.dispatchEvent(new window.CustomEvent("abp:ready"))
    }

    function h(a) {
        "complete" === window.readyState ? a() : window.addEventListener("load", a)
    }
    var f = document.querySelector("meta[name\x3ddetectAdBlock]"),
        b = f && f.getAttribute("content");
    b && h(function() {
        d(e(1), function() {
            d(e(2), a.bind(a, !1), a.bind(a, !0))
        }, function() {
            a.bind(a, !0)
        })
    })
})();