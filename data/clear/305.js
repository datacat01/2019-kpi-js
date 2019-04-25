define("@ta/overlays.attached-arrow-overlay", ["@ta/overlays.attached-overlay", "@ta/overlays.pieces", "@ta/overlays.shift", "@ta/common.global"], function(e, t, r, n) {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = "./packages/overlays/attached-arrow-overlay/AttachedArrowOverlay.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, r) {
            "use strict";

            function n(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            r.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            });
            var n = r("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), o.forEach(function(t) {
                        Object(n.a)(e, t, r[t])
                    })
                }
                return e
            }
        },
        "./node_modules/react-redux/es/index.js": function(e, t, r) {
            e.exports = r("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, r) {
            e.exports = r("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/overlays/attached-arrow-overlay/AttachedArrowOverlay.jsx": function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "getPosition", function() {
                return c
            }), r.d(t, "getAlignEdge", function() {
                return d
            }), r.d(t, "getArrowOffset", function() {
                return m
            });
            var n = r("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                o = r("./node_modules/react/index.js"),
                i = r("./node_modules/react-redux/es/index.js"),
                a = r("@ta/overlays.attached-overlay"),
                l = r.n(a),
                s = r("@ta/overlays.shift"),
                u = r.n(s),
                f = r("@ta/overlays.pieces"),
                c = function e(t, r) {
                    if (t) {
                        if ("rightOf" === r) return "leftOf";
                        if ("leftOf" === r) return "rightOf"
                    }
                    return r
                },
                d = function e(t, r) {
                    if (t) {
                        if ("right" === r) return "left";
                        if ("left" === r) return "right"
                    }
                    return r
                },
                m = function e(t, r, n, o) {
                    if ("windowX" === n) {
                        var i = o.getBoundingClientRect();
                        if (i) {
                            var l = t ? -1 : 1;
                            return (i.width / 2 + i.left - 2 * a.WindowPadding) * l
                        }
                    }
                    return r
                },
                v = function e(t) {
                    var r = c(t.isRtl, t.position),
                        n = d(t.isRtl, t.alignEdge),
                        i = t.arrowType,
                        a = void 0 === i ? "large" : i,
                        s = t.shiftArrow,
                        v = void 0 === s ? 0 : s,
                        y = t.shiftX,
                        p = void 0 === y ? 0 : y,
                        b = t.shiftY,
                        g = void 0 === b ? 0 : b;
                    p *= t.isRtl ? -1 : 1;
                    var h, j = function e(t) {
                            return "small" === t ? f.SmallArrowSize : "none" === t ? 0 : f.ArrowSize
                        }(a),
                        w = m(t.isRtl, v, t.alignEdge, t.target);
                    switch (r) {
                        case "above":
                            h = "bottom", w *= t.isRtl ? -1 : 1, w -= p, g -= j;
                            break;
                        case "below":
                            h = "top", w *= t.isRtl ? -1 : 1, w -= p, g += j;
                            break;
                        case "rightOf":
                            h = t.isRtl ? "right" : "left", w -= g, p += j;
                            break;
                        default:
                            h = t.isRtl ? "left" : "right", w -= g, p -= j
                    }
                    return w *= "bottom" === n || "right" === n ? -1 : 1, o.createElement(l.a, {
                        target: t.target,
                        position: r,
                        alignEdge: n,
                        fixed: t.fixed,
                        animated: t.animated,
                        overlayType: t.overlayType
                    }, o.createElement(u.a, {
                        x: p,
                        y: g
                    }, o.createElement(f.ShadowBox, {
                        inverted: t.inverted
                    }, "none" !== a && o.createElement(f.Arrow, {
                        on: h,
                        from: "windowX" === n ? "left" : n,
                        offset: w,
                        small: "small" === a,
                        inverted: t.inverted
                    }), t.children)))
                };
            v.defaultProps = {
                alignEdge: void 0,
                fixed: !1,
                shiftX: 0,
                shiftY: 0,
                shiftArrow: 0,
                arrowType: "large",
                inverted: !1,
                animated: !1,
                overlayType: "modal",
                isRtl: !1
            }, t.default = Object(i.connect)(function(e, t) {
                return Object(n.a)({}, t, {
                    isRtl: "isRtl" in t ? t.isRtl : e.i18n.isRtl
                })
            })(v)
        },
        "@ta/overlays.attached-overlay": function(t, r) {
            t.exports = e
        },
        "@ta/overlays.pieces": function(e, r) {
            e.exports = t
        },
        "@ta/overlays.shift": function(e, t) {
            e.exports = r
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = n
        }
    })
});
//# sourceMappingURL=overlays.attached-arrow-overlay.99a5e2e0fc.js.map