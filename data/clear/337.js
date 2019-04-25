define("@ta/overlays.responsive-attached-overlay", ["@ta/events.event-boundary", "@ta/events.window", "@ta/overlays.attached-overlay", "@ta/overlays.fullscreen-overlay", "@ta/overlays.managers", "@ta/overlays.pieces", "@ta/common.global"], function(e, t, n, r, o, a, l) {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
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
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/overlays/responsive-attached-overlay/ResponsiveAttachedOverlay.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), o.forEach(function(t) {
                        Object(r.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/overlays/responsive-attached-overlay/ResponsiveAttachedOverlay.jsx": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "getPosition", function() {
                return y
            }), n.d(t, "getAlignEdge", function() {
                return b
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                o = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-redux/es/index.js"),
                l = n("@ta/events.event-boundary"),
                c = n.n(l),
                u = n("@ta/events.window"),
                i = n.n(u),
                s = n("@ta/overlays.attached-overlay"),
                f = n.n(s),
                d = n("@ta/overlays.fullscreen-overlay"),
                v = n.n(d),
                m = n("@ta/overlays.managers"),
                p = n("@ta/overlays.pieces"),
                y = function e(t, n) {
                    if (t) {
                        if ("rightOf" === n) return "leftOf";
                        if ("leftOf" === n) return "rightOf"
                    }
                    return n
                },
                b = function e(t, n) {
                    if (t) {
                        if ("right" === n) return "left";
                        if ("left" === n) return "right"
                    }
                    return n
                },
                g = function e(t) {
                    var n = y(t.isRtl, t.position),
                        r = b(t.isRtl, t.alignEdge),
                        a = function e(a) {
                            return o.createElement(c.a, {
                                events: ["onClick"]
                            }, a && function e(a) {
                                return "MOBILE" === t.viewportCategory ? o.createElement(v.a, {
                                    closeButton: !0
                                }, t.contents()) : o.createElement(f.a, {
                                    target: a,
                                    position: n,
                                    alignEdge: r
                                }, o.createElement(p.ShadowBox, null, t.contents()))
                            }(a))
                        },
                        l = function e() {
                            return o.createElement(m.Closer, {
                                name: t.local ? t.name : null,
                                local: t.local
                            }, function(e) {
                                return o.createElement(i.a, {
                                    event: "click",
                                    callback: e
                                })
                            })
                        };
                    return o.createElement(p.Target, null, function(e, n) {
                        return t.local ? o.createElement(o.Fragment, null, o.createElement(m.Local, {
                            name: t.name
                        }, a(n), l()), t.children(e)) : o.createElement(o.Fragment, null, o.createElement(m.Global, {
                            name: t.name
                        }, a(n), l()), t.children(e))
                    })
                };
            g.defaultProps = {
                alignEdge: void 0,
                local: !1
            }, t.default = Object(a.connect)(function(e, t) {
                return Object(r.a)({
                    isRtl: e.i18n.isRtl,
                    viewportCategory: e.meta.device.viewportCategory
                }, t)
            })(g)
        },
        "@ta/events.event-boundary": function(t, n) {
            t.exports = e
        },
        "@ta/events.window": function(e, n) {
            e.exports = t
        },
        "@ta/overlays.attached-overlay": function(e, t) {
            e.exports = n
        },
        "@ta/overlays.fullscreen-overlay": function(e, t) {
            e.exports = r
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = o
        },
        "@ta/overlays.pieces": function(e, t) {
            e.exports = a
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = l
        }
    })
});
//# sourceMappingURL=overlays.responsive-attached-overlay.8d48c7304c.js.map