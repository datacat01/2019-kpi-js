define("@ta/overlays.slide-in", ["@ta/events.event-boundary", "@ta/overlays.managers", "@ta/overlays.pieces", "@ta/common.global"], function(e, t, n, r) {
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
        }, n.p = "", n(n.s = "./packages/overlays/slide-in/SlideInOverlay.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
            n.d(t, "a", function() {
                return o
            })
        },
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
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(r.a)(e, t)
            }
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
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function s(e, t) {
                return !t || "object" !== Object(r.a)(t) && "function" != typeof t ? Object(o.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (r = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function e(t) {
                    return r(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t)
                })(e)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/events/keyboard-event-listener/KeyboardEventListener.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                c = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(s.a)(this, Object(a.a)(t).call(this, e)), Object(u.a)(Object(i.a)(Object(i.a)(n)), "keyNames", void 0), Object(u.a)(Object(i.a)(Object(i.a)(n)), "handleEvent", function(e) {
                            var t = e.key;
                            t && -1 !== n.keyNames.indexOf(t) && n.props.callback(e)
                        }), n.keyNames = Array.isArray(e.keyName) ? e.keyName : [e.keyName], n
                    }
                    return Object(l.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            window.addEventListener(this.props.eventType, this.handleEvent)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            window.removeEventListener(this.props.eventType, this.handleEvent)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(n("./node_modules/react/index.js").Component);
            Object(u.a)(c, "defaultProps", {
                eventType: "keydown"
            })
        },
        "./packages/overlays/slide-in/SlideInOverlay.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                o = n("./node_modules/react/index.js"),
                s = n("./node_modules/react-redux/es/index.js"),
                a = n("@ta/events.event-boundary"),
                l = n.n(a),
                i = n("./packages/events/keyboard-event-listener/KeyboardEventListener.jsx"),
                u = n("./packages/common/classnames/classnames.jsx"),
                c = n.n(u),
                d = n("@ta/overlays.managers"),
                m = n("@ta/overlays.pieces"),
                f = function e(t) {
                    var n = function e(n) {
                        var r, o = {
                                top: "0",
                                bottom: "0",
                                right: "0",
                                transform: "exiting" === n || "exited" === n ? "translate3d(100%, 0, 0)" : "translate3d(0, 0, 0)"
                            },
                            s = {
                                top: "0",
                                bottom: "0",
                                left: "0",
                                transform: "exiting" === n || "exited" === n ? "translate3d(-100%, 0, 0)" : "translate3d(0, 0, 0)"
                            };
                        switch (t.slideFrom) {
                            case "top":
                                r = {
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    transform: "exiting" === n || "exited" === n ? "translate3d(0, -100%, 0)" : "translate3d(0, 0, 0)"
                                };
                                break;
                            case "bottom":
                                r = {
                                    bottom: "0",
                                    left: "0",
                                    right: "0",
                                    transform: "exiting" === n || "exited" === n ? "translate3d(0, 100%, 0)" : "translate3d(0, 0, 0)"
                                };
                                break;
                            case "left":
                                r = t.isRtl ? o : s;
                                break;
                            case "right":
                                r = t.isRtl ? s : o;
                                break;
                            default:
                                r = {}
                        }
                        return r
                    };
                    return o.createElement(d.Closer, null, function(e, s) {
                        var a = function n() {
                            e(), t.onClose && t.onClose()
                        };
                        return o.createElement(d.Global, {
                            name: t.name,
                            transitionDuration: 250
                        }, o.createElement(m.OverlayConsumer, null, function(e) {
                            return function e(s, a, u) {
                                return o.createElement(o.Fragment, null, o.createElement(m.BlockScroll, null), o.createElement(m.Backdrop, {
                                    close: s
                                }, o.createElement(l.a, {
                                    events: ["onClick"],
                                    className: "overlays-slide-in-SlideInOverlay__eventBoundary--l37Vo"
                                }, o.createElement(m.Overlay, function e(t) {
                                    return {
                                        position: Object(r.a)({
                                            position: "fixed",
                                            maxHeight: "100%"
                                        }, n(t)),
                                        transitionProperties: [{
                                            property: "transform",
                                            timing: 250
                                        }]
                                    }
                                }(u), o.createElement("div", {
                                    className: "overlays-slide-in-SlideInOverlay__overlayContents--3YN8W"
                                }, t.header, o.createElement("div", {
                                    className: c()("overlays-slide-in-SlideInOverlay__bodyContent--26dsw", t.bodyContentClass)
                                }, t.children(s, a)), t.footer, !t.hideX && o.createElement(m.CloseX, {
                                    close: s,
                                    colorVariant: t.closeXColorVariant
                                })))), o.createElement(i.a, {
                                    keyName: "Escape",
                                    callback: s
                                })))
                            }(a, s, e.transitionStatus)
                        }))
                    })
                };
            f.defaultProps = {
                isRtl: !1,
                header: null,
                footer: null,
                onClose: void 0,
                hideX: !1,
                bodyContentClass: ""
            }, t.default = Object(s.connect)(function(e) {
                return {
                    isRtl: e.i18n.isRtl
                }
            })(f)
        },
        "@ta/events.event-boundary": function(t, n) {
            t.exports = e
        },
        "@ta/overlays.managers": function(e, n) {
            e.exports = t
        },
        "@ta/overlays.pieces": function(e, t) {
            e.exports = n
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = r
        }
    })
});
//# sourceMappingURL=overlays.slide-in.62e7ff895d.js.map