! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t) {
    const n = window.wlSettings;
    ! function() {
        if ("undefined" == typeof fetch) return;
        if (void 0 !== n.jsonld_enabled && "1" !== n.jsonld_enabled) return;
        if (void 0 === n.postId && void 0 === n.isHome) return;
        const e = function(e) {
            const t = 0 <= e.apiUrl.indexOf("?") ? "&" : "?";
            return e.apiUrl + t + "action=wl_jsonld" + (void 0 !== e.postId ? "&id=" + e.postId : "") + (void 0 !== e.isHome ? "&homepage=true" : "")
        }(n);
        fetch(e).then(function(e) {
            return e.text()
        }).then(function(e) {
            const t = document.createElement("script");
            t.type = "application/ld+json", t.innerText = e, document.head.appendChild(t)
        })
    }()
}]);