define("@ta/overlays.pieces", ["@ta/common.global"], function(e) {
    return function(e) {
        var t = {};

        function o(n) {
            if (t[n]) return t[n].exports;
            var r = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
        }
        return o.m = e, o.c = t, o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
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
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) o.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, o.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = "./packages/overlays/pieces/pieces.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, o) {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, o) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, o) {
            "use strict";

            function n(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function r(e, t, o) {
                return t && n(e.prototype, t), o && n(e, o), e
            }
            o.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, o) {
            "use strict";

            function n(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, o) {
            "use strict";

            function n() {
                return (n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, o) {
            "use strict";

            function n(e) {
                return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, o) {
            "use strict";
            o.d(t, "a", function() {
                return r
            });
            var n = o("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(n.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, o) {
            "use strict";
            o.d(t, "a", function() {
                return i
            });
            var n = o("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function i(e, t) {
                return !t || "object" !== Object(n.a)(t) && "function" != typeof t ? Object(r.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, o) {
            "use strict";

            function n(e, t) {
                return (n = Object.setPrototypeOf || function e(t, o) {
                    return t.__proto__ = o, t
                })(e, t)
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, o) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function e(t) {
                    return n(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
                })(e)
            }
            o.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/react-dom/index.js": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react-dom/index.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/overlays/pieces/pieces.jsx": function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o("./node_modules/react/index.js"),
                r = o("./packages/common/classnames/classnames.jsx"),
                i = o.n(r),
                s = function e(t) {
                    switch (t) {
                        case "SEAT_GURU_BLUE":
                            return "overlays-pieces-CloseX__seatGuruBlue--3grtC";
                        case "WHITE":
                            return "overlays-pieces-CloseX__inverted--2vrVh";
                        case "TA_GREEN_DARK":
                            return "overlays-pieces-CloseX__taGreenDark--NJAlr";
                        case "TA_GREEN":
                        default:
                            return ""
                    }
                },
                a = function e(t) {
                    return n.createElement("div", {
                        className: i()("overlays-pieces-CloseX__close--7erra", s(t.colorVariant)),
                        onClick: t.close,
                        "data-test-attribute": t.testAttribute
                    })
                };
            a.defaultProps = {
                colorVariant: "TA_GREEN",
                testAttribute: null
            };
            var l = a,
                c = function e(t) {
                    var o = t.inverted,
                        r = t.children;
                    return n.createElement("div", {
                        className: "".concat("overlays-pieces-ShadowBox__shadowBox--11cLX").concat(o ? " ".concat("overlays-pieces-ShadowBox__inverted--xz5qG") : "")
                    }, r)
                };
            c.defaultProps = {
                inverted: !1
            };
            var u = c,
                p = o("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                d = o("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                m = o("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                f = o("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                y = o("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                b = o("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                h = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                v = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                j = o("./node_modules/react-dom/index.js"),
                g = o.n(j),
                O = n.createContext({
                    parent: null,
                    after: null,
                    transitionStatus: "entered"
                }),
                _ = O.Provider,
                x = O.Consumer,
                w = function(e) {
                    function t(e) {
                        var o;
                        if (Object(d.a)(this, t), o = Object(f.a)(this, Object(y.a)(t).call(this, e)), Object(v.a)(Object(h.a)(Object(h.a)(o)), "overlayNode", void 0), Object(v.a)(Object(h.a)(Object(h.a)(o)), "parentBody", void 0), Object(v.a)(Object(h.a)(Object(h.a)(o)), "stylePositionBeforeOpening", void 0), Object(v.a)(Object(h.a)(Object(h.a)(o)), "positionWasSet", void 0), document && (o.parentBody = document.body, o.overlayNode = document.createElement("div"), o.props.id && (o.overlayNode.id = o.props.id), e.perspective && (o.overlayNode.style.perspective = e.perspective), o.positionWasSet = !1, o.setAnimatableStyles(), o.parentBody)) {
                            o.parentBody.style.position || (o.positionWasSet = !0, o.stylePositionBeforeOpening = o.parentBody.style.position, o.parentBody.style.position = "relative");
                            var n = o.props.after ? document.getElementById(o.props.after) : null,
                                r = n ? n.nextSibling : null;
                            o.parentBody.insertBefore(o.overlayNode, r)
                        }
                        return o
                    }
                    return Object(b.a)(t, e), Object(m.a)(t, [{
                        key: "componentWillUnmount",
                        value: function e() {
                            this.parentBody && (this.positionWasSet && "relative" === this.parentBody.style.position && (this.parentBody.style.position = this.stylePositionBeforeOpening), this.parentBody.removeChild(this.overlayNode))
                        }
                    }, {
                        key: "setAnimatableStyles",
                        value: function e() {
                            var t = this;
                            if (this.overlayNode && this.parentBody) {
                                if (this.props.transitionProperties) {
                                    var o = [];
                                    this.props.transitionProperties.forEach(function(e) {
                                        var t = e.timingFunction ? " ".concat(e.timingFunction) : "",
                                            n = e.delay ? " ".concat(e.delay, "ms") : "";
                                        o.push("".concat(e.property, " ").concat(e.timing, "ms").concat(t).concat(n))
                                    }), o.length > 0 ? this.overlayNode.style.transition = o.join(", ") : this.overlayNode.style.transition = ""
                                }
                                var n = [],
                                    r = this.props.position.position || "absolute";
                                this.overlayNode.style.position = r;
                                var i = this.parentBody.getBoundingClientRect(),
                                    s = window || {},
                                    a = s.pageXOffset,
                                    l = void 0 === a ? 0 : a,
                                    c = s.pageYOffset,
                                    u = void 0 === c ? 0 : c,
                                    p = i.top + u,
                                    d = i.left + l;
                                ["top", "left", "bottom", "right"].forEach(function(e) {
                                    var o = t.props.position[e];
                                    o ? (t.overlayNode.style.setProperty(e, o), "absolute" === r && ("top" !== e && "bottom" !== e || 0 === p ? "left" !== e && "right" !== e || 0 === d || n.push("translateX(".concat(-d, "px)")) : n.push("translateY(".concat(-p, "px)")))) : t.overlayNode.style.setProperty(e, "auto")
                                }), this.props.position.transformOrigin && (this.overlayNode.style.transformOrigin = this.props.position.transformOrigin), this.props.position.transform && n.push(this.props.position.transform), this.overlayNode.style.transform = n.join(" "), this.props.position.maxHeight && (this.overlayNode.style.maxHeight = this.props.position.maxHeight, this.overlayNode.style.overflowY = "hidden"), this.props.position.height && (this.overlayNode.style.height = this.props.position.height), this.props.position.width && (this.overlayNode.style.width = this.props.position.width), void 0 !== this.props.opacity && (this.overlayNode.style.opacity = this.props.opacity)
                            }
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t;
                            return this.overlayNode && this.parentBody ? (this.overlayNode.className = i()("overlays-pieces-Overlay__overlay--1Lqh_", (t = {}, Object(v.a)(t, "overlays-pieces-Overlay__background--3zny0", "background" === this.props.overlayType), Object(v.a)(t, "overlays-pieces-Overlay__tooltip--2z4uZ", "tooltip" === this.props.overlayType), t)), this.setAnimatableStyles(), g.a.createPortal(this.props.children, this.overlayNode)) : null
                        }
                    }]), t
                }(n.Component);
            Object(v.a)(w, "defaultProps", {
                id: null,
                after: null,
                perspective: void 0,
                overlayType: "modal"
            });
            var S = function e(t) {
                return n.createElement(x, null, function(e) {
                    var o = e.parent,
                        r = e.after;
                    return n.createElement(w, Object(p.a)({}, t, {
                        id: o ? "c_".concat(o) : null,
                        after: r ? "c_".concat(r) : null,
                        overlayType: t.overlayType
                    }))
                })
            };
            S.defaultProps = {
                id: null,
                after: null,
                perspective: void 0,
                opacity: void 0,
                transitionProperties: [],
                overlayType: "modal"
            };
            var P = S,
                T = function(e) {
                    function t() {
                        var e, o;
                        Object(d.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return o = Object(f.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r))), Object(v.a)(Object(h.a)(Object(h.a)(o)), "state", {
                            target: null
                        }), Object(v.a)(Object(h.a)(Object(h.a)(o)), "setTarget", function(e) {
                            o.renderTimeTarget = e
                        }), Object(v.a)(Object(h.a)(Object(h.a)(o)), "renderTimeTarget", null), o
                    }
                    return Object(b.a)(t, e), Object(m.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.setState({
                                target: this.renderTimeTarget
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return this.props.children(this.setTarget, this.state.target)
                        }
                    }]), t
                }(n.Component),
                B = function e(t) {
                    var o = t.offsetTop ? "absolute" : "fixed";
                    return n.createElement(P, {
                        position: {
                            position: o,
                            top: "".concat(t.offsetTop || 0, "px"),
                            right: "0px",
                            bottom: "0px",
                            left: "0px"
                        }
                    }, n.createElement("div", {
                        className: "overlays-pieces-Backdrop__backdrop--1wv3p",
                        onClick: function e(o) {
                            o.currentTarget === o.target && t.close()
                        }
                    }, t.children))
                };
            B.defaultProps = {
                offsetTop: 0
            };
            var k = B,
                N = o("./node_modules/react-redux/es/index.js"),
                E = function(e) {
                    function t() {
                        var e, o;
                        Object(d.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return o = Object(f.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r))), Object(v.a)(Object(h.a)(Object(h.a)(o)), "bugFix", function(e, n, r) {
                            1 === t.currentlyMounted && (t.originalScrollY = window.scrollY, t.originalPosition = e.position || "static", t.originalTop = e.top || "0px", t.originalWidth = e.width, t.originalDocumentHeight = n.height), e.position = "fixed", t.originalScrollY && (e.top = "".concat(-1 * t.originalScrollY, "px")), e.width = "100%", n.height = "100vh", r.contains("overlayiOS11bug") || r.add("overlayiOS11bug"), o.props.callback && o.props.callback()
                        }), Object(v.a)(Object(h.a)(Object(h.a)(o)), "timeout", void 0), o
                    }
                    return Object(b.a)(t, e), Object(m.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            var o = this;
                            if (t.currentlyMounted += 1, document && document.body && document.body.style && document.documentElement && document.documentElement.style) {
                                var n = document.body.style,
                                    r = document.documentElement.style,
                                    i = document.body.classList;
                                n.overflow = "hidden", this.props.iOS11BugFix ? null != this.props.deferBugFix ? this.timeout = setTimeout(function() {
                                    o.bugFix(n, r, i)
                                }, this.props.deferBugFix) : this.bugFix(n, r, i) : this.props.callback && this.props.callback()
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            if (t.currentlyMounted -= 1, 0 === t.currentlyMounted && document && document.body && document.body.style && document.documentElement && document.documentElement.style) {
                                this.timeout && clearTimeout(this.timeout);
                                var o = document.documentElement.style,
                                    n = document.body.style;
                                n.overflow = "auto", this.props.iOS11BugFix && (t.originalPosition && (n.position = t.originalPosition), t.originalScrollY && window.scrollTo(0, t.originalScrollY), null != t.originalTop && (n.top = t.originalTop), t.originalWidth && (n.width = t.originalWidth), (t.originalDocumentHeight || "" === t.originalDocumentHeight) && (o.height = t.originalDocumentHeight)), this.props.callback && this.props.callback()
                            }
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(n.Component);
            Object(v.a)(E, "defaultProps", {
                callback: void 0
            }), Object(v.a)(E, "currentlyMounted", 0), Object(v.a)(E, "originalScrollY", void 0), Object(v.a)(E, "originalPosition", void 0), Object(v.a)(E, "originalTop", void 0), Object(v.a)(E, "originalWidth", void 0), Object(v.a)(E, "originalDocumentHeight", void 0);
            var C = Object(N.connect)(function(e, t) {
                    var o = t.iOS11BugFix;
                    return {
                        iOS11BugFix: void 0 === o ? "IOS" === e.meta.device.os.family : o
                    }
                })(E),
                A = {
                    arrow: "overlays-pieces-Arrow__arrow--3WvH9",
                    inverted: "overlays-pieces-Arrow__inverted--1IwAy",
                    small: "overlays-pieces-Arrow__small--2fdc3",
                    top: "overlays-pieces-Arrow__top--2w_bU",
                    bottom: "overlays-pieces-Arrow__bottom--11J3O",
                    left: "overlays-pieces-Arrow__left--1bkev",
                    right: "overlays-pieces-Arrow__right--1RWVK"
                },
                W = function e(t) {
                    var o, r = t.on,
                        i = t.from,
                        s = t.offset,
                        a = t.small,
                        l = t.inverted,
                        c = "center" === i ? (o = {}, Object(v.a)(o, "top" === r || "bottom" === r ? "left" : "top", "50%"), Object(v.a)(o, "transform", "top" === r || "bottom" === r ? "translate(-50%)" : "translateY(-50%)"), o) : Object(v.a)({}, i, "".concat(s, "px")),
                        u = [A.arrow, A[r], a ? A.small : null, l ? A.inverted : null].filter(function(e) {
                            return e
                        }).join(" ");
                    return n.createElement("div", {
                        className: u,
                        style: c
                    })
                };
            W.defaultProps = {
                from: "center",
                offset: 0,
                small: !1,
                inverted: !1
            };
            var F = W;
            o.d(t, "CloseX", function() {
                return l
            }), o.d(t, "ShadowBox", function() {
                return u
            }), o.d(t, "Overlay", function() {
                return P
            }), o.d(t, "Target", function() {
                return T
            }), o.d(t, "Backdrop", function() {
                return k
            }), o.d(t, "BlockScroll", function() {
                return C
            }), o.d(t, "OverlayProvider", function() {
                return _
            }), o.d(t, "OverlayConsumer", function() {
                return x
            }), o.d(t, "Arrow", function() {
                return F
            }), o.d(t, "ArrowSize", function() {
                return 12
            }), o.d(t, "SmallArrowSize", function() {
                return 7
            })
        },
        "dll-reference @ta/common.global": function(t, o) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=overlays.pieces.80fbf14abf.js.map