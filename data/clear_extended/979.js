define("@ta/styleguide.loading", ["@ta/common.global"], function(e) {
    return function(e) {
        var n = {};

        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: r
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (t.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var i in e) t.d(r, i, function(n) {
                    return e[n]
                }.bind(null, i));
            return r
        }, t.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = "./packages/styleguide/loading/index.jsx")
    }({
        "./node_modules/react/index.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/styleguide/loading/index.jsx": function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t("./node_modules/react/index.js"),
                i = {
                    loadingBar: "styleguide-loading-LoadingBar__loadingBar--3d3LK",
                    infinite: "styleguide-loading-LoadingBar__infinite--3vw-S",
                    loading: "styleguide-loading-LoadingBar__loading--39ZY9",
                    percentBar: "styleguide-loading-LoadingBar__percentBar--2L6I6"
                },
                o = function e(n) {
                    var t = n.visible,
                        o = n.topDistance,
                        a = n.transitionDuration,
                        l = n.infinite,
                        d = n.percent,
                        u = n.zIndex;
                    return r.createElement("div", {
                        className: [i.loadingBar, l ? i.infinite : ""].join(" "),
                        style: {
                            display: t ? "block" : "none",
                            top: o,
                            transitionDuration: a,
                            zIndex: u
                        }
                    }, r.createElement("div", {
                        className: i.percentBar,
                        style: {
                            width: "".concat(d, "%"),
                            display: d > 0 ? "block" : "none"
                        }
                    }))
                };
            o.defaultProps = {
                infinite: !1,
                percent: 0,
                topDistance: 0,
                transitionDuration: "500ms",
                visible: !0,
                zIndex: "auto"
            };
            var a = o,
                l = function e(n) {
                    var t = n.size,
                        i = n.color;
                    return r.createElement("span", {
                        className: "ui_loader ".concat(t || "", " ").concat(i || "")
                    }, r.createElement("span", null), r.createElement("span", null), r.createElement("span", null), r.createElement("span", null), r.createElement("span", null))
                };
            l.defaultProps = {
                size: void 0,
                color: void 0
            };
            var d = l,
                u = function e(n) {
                    var t = n.size,
                        i = n.inverted;
                    return r.createElement("div", {
                        className: "ui_spinner ".concat(t || "", " ").concat(i ? "inverted" : "")
                    })
                };
            u.defaultProps = {
                size: void 0,
                inverted: !1
            };
            var c = u;
            t.d(n, "LoadingBar", function() {
                return a
            }), t.d(n, "LoadingBubbles", function() {
                return d
            }), t.d(n, "LoadingSpinner", function() {
                return c
            })
        },
        "dll-reference @ta/common.global": function(n, t) {
            n.exports = e
        }
    })
});
//# sourceMappingURL=styleguide.loading.5ed7001adf.js.map