! function(t) {
    function n(e) {
        if (o[e]) return o[e].exports;
        var r = o[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return t[e].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
    }
    var o = {};
    return n.m = t, n.c = o, n.p = "", n(0)
}([function(t, n) {
    "use strict";

    function o() {
        function t() {
            window.SPOTIM.logout().then(function(t) {}).catch(function(t) {})
        }
        document.addEventListener("spot-im-api-ready", t, !1), document.addEventListener("spot-im-current-user-typing-start", function() {
            return window.location.href = "/login/?next=" + window.location.href
        }, !1)
    }
    t.exports = o()
}]);