define("@ta/overlays.modal", ["@ta/common.client", "@ta/overlays.fullscreen-overlay", "@ta/overlays.managers", "@ta/overlays.pieces", "@ta/common.global"], function(e, t, n, o, r) {
    return function(e) {
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
        return n.m = e, n.c = t, n.d = function(e, t, o) {
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
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/overlays/modal/index.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function o(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function r(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, n) {
            "use strict";

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(o.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        Object(o.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (null == e) return {};
                var n, o, r = function a(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < s.length; o++) n = s[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function a(e, t) {
                return !t || "object" !== Object(o.a)(t) && "function" != typeof t ? Object(r.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                return (o = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function e(t) {
                    return o(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t)
                })(e)
            }
            n.d(t, "a", function() {
                return r
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
        "./packages/common/routing/routing.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/events/keyboard-event-listener/KeyboardEventListener.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(a.a)(this, Object(s.a)(t).call(this, e)), Object(c.a)(Object(i.a)(Object(i.a)(n)), "keyNames", void 0), Object(c.a)(Object(i.a)(Object(i.a)(n)), "handleEvent", function(e) {
                            var t = e.key;
                            t && -1 !== n.keyNames.indexOf(t) && n.props.callback(e)
                        }), n.keyNames = Array.isArray(e.keyName) ? e.keyName : [e.keyName], n
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
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
            Object(c.a)(u, "defaultProps", {
                eventType: "keydown"
            })
        },
        "./packages/overlays/modal/Modal.jsx": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
                a = n("./node_modules/react/index.js"),
                s = n("@ta/overlays.managers"),
                l = n("./packages/overlays/modal/ModalView.jsx");
            t.a = function e(t) {
                var n = t.name,
                    i = t.onClose,
                    c = Object(r.a)(t, ["name", "onClose"]);
                return a.createElement(s.Closer, null, function(e) {
                    return a.createElement(s.Global, {
                        name: n
                    }, a.createElement(l.a, Object(o.a)({
                        onClose: function t() {
                            e(), i && i()
                        }
                    }, c)))
                })
            }
        },
        "./packages/overlays/modal/ModalView.jsx": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                s = n("./node_modules/react/index.js"),
                l = n("./node_modules/react-redux/es/index.js"),
                i = n("./packages/common/classnames/classnames.jsx"),
                c = n.n(i),
                u = n("./packages/events/keyboard-event-listener/KeyboardEventListener.jsx"),
                m = n("@ta/overlays.fullscreen-overlay"),
                d = n.n(m),
                p = n("@ta/overlays.pieces"),
                b = function e(t) {
                    var n, l = {
                            position: Object(a.a)({
                                position: "fixed",
                                top: t.overlayTop ? "".concat(t.overlayTop, "px") : "50%",
                                left: "50%",
                                transform: t.overlayTop ? "translate(-50%)" : "translate(-50%, -50%)"
                            }, t.fixedHeight || t.buggyMode ? {
                                height: "calc(100% - 4rem)"
                            } : {})
                        },
                        i = function e() {
                            t.onClose && t.onClose()
                        },
                        m = c()("overlays-modal-ModalView__container--ApzbE", (n = {}, Object(r.a)(n, "overlays-modal-ModalView__bodyScrollDisabled--1uF4_", !t.bodyScroll), Object(r.a)(n, "overlays-modal-ModalView__overflowVisible--11wyM", t.overflowVisible), Object(r.a)(n, "overlays-modal-ModalView__fullscreen--2ZQrO", t.fullscreen), n)),
                        b = c()("overlays-modal-ModalView__bodyContent--1NwQs", Object(r.a)({}, "overlays-modal-ModalView__fullBleed--3v73B", t.isFullBleed)),
                        f = {};
                    t.onDragOver && (f.onDragOver = t.onDragOver), t.onDragLeave && (f.onDragLeave = t.onDragLeave), t.onDrop && (f.onDrop = t.onDrop);
                    var v = t.isNativeWebview,
                        y = t.marginTop,
                        j = null;
                    v && y && (j = {
                        marginTop: y
                    });
                    var h = s.createElement("div", {
                        className: m
                    }, v ? null : t.header, s.createElement("div", Object(o.a)({
                        className: b
                    }, f, {
                        style: j
                    }), t.children), t.closeX && s.createElement(p.CloseX, {
                        close: i,
                        colorVariant: t.closeXColorVariant
                    }));
                    return t.fullscreen ? s.createElement(s.Fragment, null, s.createElement(d.a, null, h), s.createElement(u.a, {
                        keyName: "Escape",
                        callback: i
                    })) : s.createElement(s.Fragment, null, s.createElement(p.BlockScroll, null), s.createElement(p.Backdrop, {
                        close: i
                    }, s.createElement(p.Overlay, l, h), s.createElement(u.a, {
                        keyName: "Escape",
                        callback: i
                    })))
                };
            b.defaultProps = {
                fullscreen: !1,
                isFullBleed: !1,
                header: null,
                bodyScroll: !0,
                overflowVisible: !1,
                onClose: void 0,
                onDragOver: void 0,
                onDragLeave: void 0,
                onDrop: void 0,
                fixedHeight: !1,
                closeX: !0,
                closeXColorVariant: "TA_GREEN",
                isNativeWebview: !1,
                marginTop: void 0,
                overlayTop: void 0
            };
            var f = [9, 10],
                v = [9, 10],
                y = Object(l.connect)(function(e, t) {
                    return Object(a.a)({}, t, {
                        fullscreen: t.fullscreenAlways || !t.disableFullscreenOnMobile && "MOBILE" === e.meta.device.viewportCategory,
                        buggyMode: "SAFARI" === e.meta.device.browser.family && f.includes(e.meta.device.browser.majorVersion) || "IOS" === e.meta.device.os.family && v.includes(e.meta.device.os.majorVersion)
                    })
                })(b);
            t.a = y
        },
        "./packages/overlays/modal/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./packages/overlays/modal/Modal.jsx"),
                r = n("./packages/overlays/modal/ModalView.jsx"),
                a = n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
                s = n("./node_modules/react/index.js"),
                l = function e(t) {
                    var n = t.vh,
                        r = t.vw,
                        l = Object(a.a)(t, ["vh", "vw"]);
                    return s.createElement(o.a, l, s.createElement("div", {
                        style: {
                            height: "".concat(n, "vh"),
                            width: "".concat(r, "vw")
                        }
                    }, t.children))
                };
            l.defaultProps = {
                vh: 70,
                vw: 80
            };
            var i = l,
                c = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                m = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                d = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                p = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                b = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                f = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                v = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                y = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                j = n("./packages/common/routing/routing.jsx"),
                h = n("@ta/overlays.managers"),
                O = function(e) {
                    function t() {
                        var e, n;
                        Object(m.a)(this, t);
                        for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                        return n = Object(p.a)(this, (e = Object(b.a)(t)).call.apply(e, [this].concat(r))), Object(y.a)(Object(v.a)(Object(v.a)(n)), "resetRoute", function(e) {
                            var t = n.props.route,
                                o = t.modal,
                                r = Object(a.a)(t, ["modal"]);
                            o === n.props.name && n.props.navigate(r, {
                                reset: e
                            })
                        }), Object(y.a)(Object(v.a)(Object(v.a)(n)), "updateRoute", function() {
                            n.props.route.modal !== n.props.name && n.props.navigate(Object(u.a)({}, n.props.route, {
                                modal: n.props.name
                            }))
                        }), n
                    }
                    return Object(f.a)(t, e), Object(d.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.props.route.modal !== this.props.name || this.props.isOpen || this.props.open()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function e(t) {
                            !t.isOpen && this.props.isOpen ? this.updateRoute() : t.isOpen && !this.props.isOpen ? this.resetRoute(!0) : this.props.route.modal !== this.props.name && this.props.isOpen && this.props.close()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            this.props.isOpen && this.props.close()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = (t.children, t.route, t.navigate, t.open, t.isOpen, t.close, Object(a.a)(t, ["children", "route", "navigate", "open", "isOpen", "close"]));
                            return s.createElement(o.a, n, this.props.children)
                        }
                    }]), t
                }(s.Component),
                g = function e(t) {
                    var n = t.name,
                        o = t.username,
                        r = t.onClick,
                        l = Object(a.a)(t, ["name", "username", "onClick"]);
                    return s.createElement(h.Opener, {
                        name: n
                    }, function(e) {
                        return s.createElement(j.RouteConsumer, null, function(t) {
                            var a = t.route;
                            return s.createElement(j.Link, Object(c.a)({
                                to: Object(u.a)({}, a, {
                                    modal: n,
                                    username: o
                                }),
                                onClick: function t(n) {
                                    e(), r && r(n)
                                }
                            }, l))
                        })
                    })
                };
            g.defaultProps = {
                children: null,
                className: "",
                username: null,
                activeClassName: "",
                title: void 0
            };
            var _ = function e(t) {
                    var n = t.children,
                        o = Object(a.a)(t, ["children"]);
                    return s.createElement(h.Opener, {
                        name: o.name
                    }, function(e, t) {
                        return s.createElement(h.Closer, null, function(r) {
                            return s.createElement(j.RouteConsumer, null, function(a) {
                                var l = a.route,
                                    i = a.navigate;
                                return s.createElement(O, Object(c.a)({}, o, {
                                    route: l,
                                    navigate: i,
                                    open: e,
                                    isOpen: t,
                                    close: r
                                }), n)
                            })
                        })
                    })
                },
                x = n("@ta/common.client"),
                k = function(e) {
                    function t() {
                        var e, n;
                        Object(m.a)(this, t);
                        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                        return n = Object(p.a)(this, (e = Object(b.a)(t)).call.apply(e, [this].concat(r))), Object(y.a)(Object(v.a)(Object(v.a)(n)), "closeModal", function() {
                            var e, t, o = n.props,
                                r = o.path,
                                a = o.navigate,
                                s = o.route,
                                l = o.onClose;
                            if (null === (e = window) || void 0 === e ? void 0 : null === (t = e.history) || void 0 === t ? void 0 : t.state) a(s, {
                                reset: !0
                            });
                            else {
                                var i = Object(u.a)({}, s);
                                Object.keys(r).forEach(function(e) {
                                    delete i[e]
                                }), a(i)
                            }
                            l && l()
                        }), n
                    }
                    return Object(f.a)(t, e), Object(d.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = t.path,
                                o = (t.route, t.navigate, t.onClose, Object(a.a)(t, ["path", "route", "navigate", "onClose"]));
                            return s.createElement(j.Match, n, s.createElement(r.a, Object(c.a)({
                                onClose: this.closeModal
                            }, o)))
                        }
                    }]), t
                }(s.Component),
                w = function e(t) {
                    var n = t.path,
                        o = Object(a.a)(t, ["path"]);
                    return s.createElement(j.RouteConsumer, null, function(e) {
                        var t = e.route,
                            r = e.navigate;
                        return s.createElement(x.ClientOnly, null, s.createElement(k, Object(c.a)({}, o, {
                            path: n,
                            route: t,
                            navigate: r
                        })))
                    })
                };
            n.d(t, "Modal", function() {
                return o.a
            }), n.d(t, "ModalView", function() {
                return r.a
            }), n.d(t, "ViewportRelativeModal", function() {
                return i
            }), n.d(t, "DeprecatedRoutedModal", function() {
                return _
            }), n.d(t, "DeprecatedModalLink", function() {
                return g
            }), n.d(t, "RoutedModal", function() {
                return w
            })
        },
        "@ta/common.client": function(t, n) {
            t.exports = e
        },
        "@ta/overlays.fullscreen-overlay": function(e, n) {
            e.exports = t
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = n
        },
        "@ta/overlays.pieces": function(e, t) {
            e.exports = o
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = r
        }
    })
});
//# sourceMappingURL=overlays.modal.7f65b671b5.js.map