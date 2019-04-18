define("@ta/common.webview", ["@ta/overlays.popover", "@ta/styleguide.icon", "@ta/common.global"], function(n, e, t) {
    return function(n) {
        var e = {};

        function t(i) {
            if (e[i]) return e[i].exports;
            var o = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return n[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        return t.m = n, t.c = e, t.d = function(n, e, i) {
            t.o(n, e) || Object.defineProperty(n, e, {
                enumerable: !0,
                get: i
            })
        }, t.r = function(n) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(n, "__esModule", {
                value: !0
            })
        }, t.t = function(n, e) {
            if (1 & e && (n = t(n)), 8 & e) return n;
            if (4 & e && "object" == typeof n && n && n.__esModule) return n;
            var i = Object.create(null);
            if (t.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & e && "string" != typeof n)
                for (var o in n) t.d(i, o, function(e) {
                    return n[e]
                }.bind(null, o));
            return i
        }, t.n = function(n) {
            var e = n && n.__esModule ? function e() {
                return n.default
            } : function e() {
                return n
            };
            return t.d(e, "a", e), e
        }, t.o = function(n, e) {
            return Object.prototype.hasOwnProperty.call(n, e)
        }, t.p = "", t(t.s = "./packages/common/webview/webview.jsx")
    }({
        "./node_modules/react/index.js": function(n, e, t) {
            n.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/webview/NativeBridge.jsx": function(n, e, t) {
            "use strict";

            function i(n) {
                var e = "";
                if (null != n.tapCallback) {
                    var t = n.tapCallback,
                        i = "nativeInterop" + function o() {
                            function n() {
                                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                            }
                            return n() + n() + n() + n() + n() + n() + n() + n()
                        }();
                    window[i] = function() {
                        null != t && t()
                    }, e = i, n.tapFunction = e, n.tapCallback = null
                }
            }

            function o() {
                return "undefined" != typeof window && window.taBridgeContext ? (window.bridge || function n() {
                    var n, e, t;
                    window.bridge || (window.bridge = (n = [], e = 0, t = [], document.addEventListener("PacificDidReceiveNativeCallback", function(e) {
                        if (e.detail) {
                            var t = e.detail,
                                i = isNaN(parseInt(t.id)) ? -1 : parseInt(t.id); - 1 != i && (n[i] && n[i](t.parameters, t.error), delete n[i])
                        }
                    }, !1), document.addEventListener("PacificDidReceiveNativeBroadcast", function(n) {
                        if (n.detail) {
                            var e = n.detail,
                                i = e.name;
                            if (void 0 !== i && t[i]) {
                                var o = t[i];
                                if (o instanceof Array) {
                                    var r = e.parameters;
                                    o.forEach(function(n) {
                                        n(r)
                                    })
                                }
                            }
                        }
                    }, !1), {
                        post: function t(i, o, r, a, u) {
                            var c = e++;
                            n[c] = a, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.pacific ? window.webkit.messageHandlers.pacific.postMessage({
                                action: i,
                                parameters: o,
                                uid: r,
                                callback: c,
                                print: u || 0
                            }) : window.pacific && window.pacific.postMessage(JSON.stringify({
                                action: i,
                                parameters: o,
                                uid: r,
                                callback: c,
                                print: u || 0
                            }))
                        },
                        on: function n(e, i) {
                            var o = t[e];
                            return o || (t[e] = o = []), o.push(i),
                                function() {
                                    o[indexOf(o, i)] = null
                                }
                        },
                        off: function n(e) {
                            delete t[e]
                        }
                    }))
                }(), window.taBridgeContext.uid) : null
            }

            function r(n, e) {
                if ("undefined" == typeof window || !window.taBridgeContext || !window.taBridgeContext.actions) return !1;
                var t = window.taBridgeContext.actions[n];
                return !(!t || !t.v) && e === t.v
            }

            function a(n, e, t) {
                o() && (n ? window.bridge.on(e, t) : window.bridge.off(e))
            }

            function u(n) {
                n.items.forEach(function(n, e) {
                    i(n)
                })
            }

            function c(n, e, t) {
                var i = o();
                return !(!i || !r(n, e) || (window.bridge.post(n, t || {}, i), 0))
            }

            function d() {
                c("hideSkeleton", 1, null)
            }

            function f(n) {
                ! function e(n) {
                    null != n.trailingMenuItems && n.trailingMenuItems.forEach(function(n, e) {
                        var t = n;
                        i(t), null != t.nestedMenu && u(t.nestedMenu)
                    })
                }(n.navigation), c("onNewOrUpdatedScreen", 1, n)
            }

            function l(n) {
                u(n), c("overflowMenu", 1, n)
            }

            function s() {
                r("map", 2) ? c("map", 2, null) : c("map", 1, null)
            }

            function p(n) {
                c("createTrip", 1, {
                    isPublic: n
                })
            }

            function w(n) {
                c("shareTrip", 1, n)
            }
            t.r(e), t.d(e, "isActionSupported", function() {
                return r
            }), t.d(e, "postToBridge", function() {
                return c
            }), t.d(e, "hideSkeleton", function() {
                return d
            }), t.d(e, "onNewOrUpdatedScreen", function() {
                return f
            }), t.d(e, "showNativeOverflowMenu", function() {
                return l
            }), t.d(e, "showNativeMap", function() {
                return s
            }), t.d(e, "showNativeCreateTrip", function() {
                return p
            }), t.d(e, "showNativeShareTrip", function() {
                return w
            }), t.d(e, "showSavesModal", function() {
                return v
            }), t.d(e, "showRegistration", function() {
                return g
            }), t.d(e, "close", function() {
                return m
            }), t.d(e, "startScreenTransition", function() {
                return b
            }), t.d(e, "onOverlayStateChange", function() {
                return h
            }), t.d(e, "onHeaderHeightChange", function() {
                return y
            }), t.d(e, "onShrinkMap", function() {
                return S
            }), t.d(e, "onNavigateToTripDetail", function() {
                return M
            }), t.d(e, "onHandleTripCollaboration", function() {
                return T
            }), t.d(e, "onFlushBatchTracking", function() {
                return N
            }), t.d(e, "isNativeWebview", function() {
                return x
            }), t.d(e, "getHeaderHeight", function() {
                return k
            }), t.d(e, "onTripsRefetch", function() {
                return O
            }), t.d(e, "onTripUpdate", function() {
                return C
            }), t.d(e, "onTripItemDelete", function() {
                return j
            }), t.d(e, "onRefetchTripsWithItems", function() {
                return I
            });
            var v = function n(e) {
                    r("presentSavesModal", 2) ? c("presentSavesModal", 2, e) : c("presentSavesModal", 1, {
                        itemId: e.id
                    })
                },
                g = function n(e) {
                    c("showReg", 1, {
                        dismissOnCancellation: e
                    })
                };

            function m() {
                c("close", 1, null)
            }

            function b() {
                c("startScreenTransition", 1, null)
            }

            function h(n) {
                c(n ? "overlayShown" : "overlayHidden", 1, null)
            }

            function y(n, e) {
                a(n, "updateHeaderHeight", e)
            }

            function S(n, e) {
                a(n, "shrinkMap", e)
            }

            function M(n, e) {
                a(n, "navigateToTripDetail", e)
            }

            function T(n, e) {
                a(n, "handleTripCollaboration", e)
            }

            function N(n, e) {
                a(n, "flushBatchTracking", e)
            }

            function x() {
                return null != o()
            }

            function k() {
                if ("undefined" != typeof window && void 0 !== window.localStorage && void 0 !== window.localStorage.headerHeight) {
                    var n = window.localStorage.headerHeight;
                    return "string" == typeof n && (n = parseInt(n, 10)), n
                }
                return 0
            }

            function O(n, e) {
                a(n, "refetchTrips", e)
            }

            function C(n) {
                c("tripUpdate", 1, n)
            }

            function j(n) {
                c("tripItemDelete", 1, n)
            }

            function I(n, e) {
                a(n, "refetchTripsWithItems", e)
            }
        },
        "./packages/common/webview/webview.jsx": function(n, e, t) {
            "use strict";
            t.r(e);
            var i = t("./node_modules/react/index.js"),
                o = t("@ta/styleguide.icon"),
                r = t("@ta/overlays.popover"),
                a = t.n(r),
                u = t("./packages/common/webview/NativeBridge.jsx"),
                c = function n(e) {
                    var t = e.className,
                        r = e.nativeMenu;
                    return i.createElement("div", {
                        className: t || ""
                    }, i.createElement(a.a, {
                        below: !0,
                        alignEdge: "right",
                        shiftX: 10,
                        shiftArrow: 10,
                        arrowType: "small",
                        contents: function n() {
                            return null
                        },
                        closeButton: !1,
                        local: !0
                    }, function(n) {
                        return i.createElement("div", {
                            className: "common-webview-NativeOverflowUI__icon--2DZg2",
                            ref: n,
                            onClick: function n() {
                                return r && Object(u.showNativeOverflowMenu)(r)
                            }
                        }, i.createElement(o.Icon, {
                            name: "more-horizontal"
                        }))
                    }))
                };
            c.defaultProps = {
                className: void 0,
                nativeMenu: void 0
            };
            var d = c;
            t.d(e, "NativeOverflowUI", function() {
                return d
            }), t.d(e, "NativeBridge", function() {
                return u
            })
        },
        "@ta/overlays.popover": function(e, t) {
            e.exports = n
        },
        "@ta/styleguide.icon": function(n, t) {
            n.exports = e
        },
        "dll-reference @ta/common.global": function(n, e) {
            n.exports = t
        }
    })
});
//# sourceMappingURL=common.webview.1f502b8423.js.map