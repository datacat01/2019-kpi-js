! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        e[o].call(r.exports, r, r.exports, n);
        r.l = !0;
        return r.exports
    }
    n.m = e;
    n.c = t;
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    };
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        n.d(t, "a", t);
        return t
    };
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    n.p = "//static.hsappstatic.net/affiliates-landing-embed/static-1.26/";
    n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    "use es6";
    ! function() {
        var e = "hs-ard",
            t = window.location.hostname.indexOf("hubspot.com") > 0 ? ".hubspot.com" : ".hubspotqa.com",
            n = 864e4,
            o = {
                getItem: function(e) {
                    return e && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
                },
                setItem: function(e, t, n, o, r, c) {
                    if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
                    var i = "";
                    if (n) switch (n.constructor) {
                        case Date:
                            i = "; expires=" + n.toUTCString()
                    }
                    document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + i + (r ? "; domain=" + r : "") + (o ? "; path=" + o : "") + (c ? "; secure" : "");
                    return !0
                }
            };

        function r() {
            return window.location.search.indexOf("mbsy=") > -1
        }
        null === o.getItem(e) && r() && o.setItem(e, (new Date).getTime(), new Date(1e3 * n + Date.now()), "/", t, !0)
    }()
}]);
//# sourceMappingURL=referral.js.map