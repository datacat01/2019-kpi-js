define("@ta/overlays.fullscreen-overlay", ["@ta/overlays.managers", "@ta/overlays.pieces", "@ta/common.global"], function(e, r, n) {
    return function(e) {
        var r = {};

        function n(t) {
            if (r[t]) return r[t].exports;
            var o = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = r, n.d = function(e, r, t) {
            n.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: t
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, r) {
            if (1 & r && (e = n(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (n.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & r && "string" != typeof e)
                for (var o in e) n.d(t, o, function(r) {
                    return e[r]
                }.bind(null, o));
            return t
        }, n.n = function(e) {
            var r = e && e.__esModule ? function r() {
                return e.default
            } : function r() {
                return e
            };
            return n.d(r, "a", r), r
        }, n.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, n.p = "", n(n.s = "./packages/overlays/fullscreen-overlay/FullscreenOverlay.jsx")
    }({
        "./node_modules/react/index.js": function(e, r, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/overlays/fullscreen-overlay/FullscreenOverlay.jsx": function(e, r, n) {
            "use strict";
            n.r(r);
            var t = n("./node_modules/react/index.js"),
                o = n("@ta/overlays.managers"),
                l = n("@ta/overlays.pieces"),
                a = function e(r) {
                    return t.createElement(l.Overlay, {
                        position: {
                            position: "fixed",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0"
                        }
                    }, t.createElement(l.BlockScroll, null), t.createElement("div", {
                        className: "overlays-fullscreen-overlay-FullscreenOverlay__container--14a3h",
                        style: {
                            backgroundColor: r.transparentBackground ? "transparent" : "#fff"
                        }
                    }, r.children, r.closeButton ? t.createElement(o.Closer, null, function(e) {
                        return t.createElement(l.CloseX, {
                            close: function n() {
                                r.onClose && r.onClose(), e()
                            }
                        })
                    }) : null))
                };
            a.defaultProps = {
                closeButton: !1,
                onClose: void 0,
                transparentBackground: !1
            }, r.default = a
        },
        "@ta/overlays.managers": function(r, n) {
            r.exports = e
        },
        "@ta/overlays.pieces": function(e, n) {
            e.exports = r
        },
        "dll-reference @ta/common.global": function(e, r) {
            e.exports = n
        }
    })
});
//# sourceMappingURL=overlays.fullscreen-overlay.ea1e89f1fe.js.map