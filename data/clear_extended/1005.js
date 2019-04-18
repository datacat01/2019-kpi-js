define("@ta/overlays.custom-overlay", ["@ta/overlays.pieces", "@ta/common.global"], function(e, t) {
    return function(e) {
        var t = {};

        function o(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports
        }
        return o.m = e, o.c = t, o.d = function(e, t, r) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (o.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) o.d(r, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return r
        }, o.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = "./packages/overlays/custom-overlay/CustomOverlay.jsx")
    }({
        "./node_modules/react/index.js": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/overlays/custom-overlay/CustomOverlay.jsx": function(e, t, o) {
            "use strict";
            o.r(t);
            var r = o("./node_modules/react/index.js"),
                n = o("@ta/overlays.pieces"),
                l = function e(t) {
                    var o = {
                            position: t.fixed ? "fixed" : "absolute",
                            top: t.top,
                            right: t.right,
                            bottom: t.bottom,
                            left: t.left
                        },
                        l = r.createElement(n.Overlay, {
                            position: o
                        }, t.blockScroll && r.createElement(n.BlockScroll, null), t.children);
                    return t.close ? r.createElement(n.Backdrop, {
                        close: t.close
                    }, l) : r.createElement(r.Fragment, null, l)
                };
            l.defaultProps = {
                close: void 0
            }, t.default = l
        },
        "@ta/overlays.pieces": function(t, o) {
            t.exports = e
        },
        "dll-reference @ta/common.global": function(e, o) {
            e.exports = t
        }
    })
});
//# sourceMappingURL=overlays.custom-overlay.cba78db5fe.js.map