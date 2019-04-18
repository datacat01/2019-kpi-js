define("@ta/common.text", ["@ta/common.global"], function(e) {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var a = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
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
                for (var a in e) n.d(o, a, function(t) {
                    return e[t]
                }.bind(null, a));
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
        }, n.p = "", n(n.s = "./packages/common/text/text.jsx")
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

            function a(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            }
            n.d(t, "a", function() {
                return a
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
                return a
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function a(e, t) {
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
                return a
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), a.forEach(function(t) {
                        Object(o.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function r(e, t) {
                return !t || "object" !== Object(o.a)(t) && "function" != typeof t ? Object(a.a)(e) : t
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

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function e(t) {
                    return o(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t)
                })(e)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/text/text.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                p = n("./node_modules/react/index.js"),
                d = n("./packages/common/i18n/i18n.jsx"),
                m = n("./packages/common/logging/logging.jsx"),
                b = n.n(m),
                f = {
                    readMore: "common-text-ReadMore__readMore--3Iu8c",
                    content: "common-text-ReadMore__content--2X4LR",
                    collapsed: "common-text-ReadMore__collapsed--3N9Wp",
                    ellipsis: "common-text-ReadMore__ellipsis--1Bibk",
                    variantDefault: "common-text-ReadMore__variantDefault--p_yFt",
                    ctaWrapper: "common-text-ReadMore__ctaWrapper--33Kvp",
                    ctaWrapperNewline: "common-text-ReadMore__ctaWrapperNewline--1iDIz",
                    cta: "common-text-ReadMore__cta--2T_tm",
                    ctaCollapseWrapper: "common-text-ReadMore__ctaCollapseWrapper--36eeT",
                    variantFadeOut: "common-text-ReadMore__variantFadeOut--1tInd"
                },
                h = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(a.a)(this, Object(r.a)(t).call(this, e)), Object(i.a)(Object(s.a)(Object(s.a)(n)), "componentDidUpdate", function(e) {
                            void 0 !== n.props.collapsed && n.props.collapsed !== e.collapsed && !!n.props.collapsed !== n.state.collapsed ? n.props.collapsed ? n.computeState() : n.revealHiddenContent() : (n.state.collapsed && n.props.numLinesToShow !== e.numLinesToShow || n.props.alwaysShowReadMore !== e.alwaysShowReadMore) && n.computeState()
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "setStateCallback", function() {
                            n.props.onStateChange && n.props.onStateChange(n.state)
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "getContentDiv", function() {
                            return n.contentRef.current
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "computeState", function() {
                            var e = n.findFirstTextNodeParent(n.getContentDiv());
                            if (e) {
                                var t = window.getComputedStyle(e),
                                    o = t.getPropertyValue("line-height"),
                                    a = t.getPropertyValue("font-size");
                                o && "normal" !== o ? o = o.replace("px", "") : (a = a ? a.replace("px", "") : 14, o = Math.floor(1.2 * parseFloat(a)));
                                var r = {
                                        scrollHeight: n.getScrollHeight(),
                                        fontSize: a,
                                        lineHeight: o
                                    },
                                    c = n.computeStateFromStyles(r);
                                n.hasCollapsibleContent = r.scrollHeight > o * n.props.numLinesToShow, n.setState(Object(l.a)({}, c), n.setStateCallback)
                            } else n.revealHiddenContent()
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "findFirstTextNodeParent", function(e) {
                            if (!e || !e.childNodes) return null;
                            for (var t = 0; t < e.childNodes.length; t++) {
                                var o = e.childNodes.item(t);
                                if (o.nodeType === Node.TEXT_NODE) return e;
                                var a = n.findFirstTextNodeParent(o);
                                if (a) return a
                            }
                            return null
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "revealHiddenContent", function() {
                            n.setState(Object(l.a)({}, n.contentRevealedState), n.setStateCallback)
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "collapseContent", function() {
                            n.computeState()
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "handleClick", function(e) {
                            if (n.props.clickCallback(e)) switch (e) {
                                case t.CTA:
                                    n.revealHiddenContent();
                                    break;
                                case t.CTA_COLLAPSE:
                                    n.collapseContent();
                                    break;
                                case t.CONTENT:
                                    n.state.collapsed && n.revealHiddenContent()
                            }
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "contentRevealedState", {
                            collapsed: !1,
                            divHeight: "none"
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "contentRef", null), Object(i.a)(Object(s.a)(Object(s.a)(n)), "ctaStyles", void 0), Object(i.a)(Object(s.a)(Object(s.a)(n)), "variantCssClass", ""), Object(i.a)(Object(s.a)(Object(s.a)(n)), "hasCollapsibleContent", !1), Object(i.a)(Object(s.a)(Object(s.a)(n)), "computeStateFromStyles", function(e) {
                            return b.a.error("".concat(n.constructor.name, " did not provide its own implementation of computeStateFromStyles()")), b.a.debug("computedStyles = {scrollHeight: ".concat(e.scrollHeight, ", fontSize: ").concat(e.fontSize, ", lineHeight: ").concat(e.lineHeight)), n.state
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "defaultCTA", function() {
                            return p.createElement("div", {
                                className: f.cta
                            }, p.createElement("span", {
                                className: f.ellipsis
                            }), p.createElement("span", null, p.createElement("a", {
                                className: "readMoreCtaText"
                            }, n.props.ctaText ? n.props.ctaText : Object(d.localize)("common_Read_more"))))
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "defaultCollapseCTA", function() {
                            return p.createElement("div", null, p.createElement("a", {
                                className: "readMoreCtaText"
                            }, n.props.ctaCollapseText ? n.props.ctaCollapseText : Object(d.localize)("common_Readless")))
                        }), n.state = !1 !== e.collapsed ? {
                            collapsed: !0,
                            divHeight: e.initialDivHeight
                        } : {
                            collapsed: !1,
                            divHeight: "none"
                        }, n.contentRef = p.createRef(), n.ctaStyles = {}, n
                    }
                    return Object(c.a)(t, e), Object(u.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.state.collapsed && this.computeState()
                        }
                    }, {
                        key: "getScrollHeight",
                        value: function e() {
                            return this.getContentDiv().scrollHeight
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var n = this;
                            return p.createElement("div", {
                                className: "".concat(f.readMore, " ").concat(this.variantCssClass, " ").concat(this.props.customCssClass, " ").concat(this.state.collapsed ? f.collapsed : "")
                            }, p.createElement("div", {
                                ref: this.contentRef,
                                className: f.content,
                                style: {
                                    maxHeight: this.state.divHeight
                                },
                                onClick: function e() {
                                    return n.handleClick(t.CONTENT)
                                }
                            }, this.props.children), p.createElement("div", {
                                className: this.props.ctaNewline ? f.ctaWrapperNewline : f.ctaWrapper,
                                style: this.ctaStyles
                            }, p.createElement("div", {
                                onClick: function e() {
                                    return n.handleClick(t.CTA)
                                }
                            }, this.props.cta ? this.props.cta : this.defaultCTA())), this.props.collapsible && !this.state.collapsed && (this.props.alwaysShowReadMore || this.hasCollapsibleContent) && p.createElement("div", {
                                className: f.ctaCollapseWrapper,
                                style: this.ctaStyles
                            }, p.createElement("div", {
                                onClick: function e() {
                                    return n.handleClick(t.CTA_COLLAPSE)
                                }
                            }, this.props.ctaCollapse ? this.props.ctaCollapse : this.defaultCollapseCTA())))
                        }
                    }]), t
                }(p.Component);
            Object(i.a)(h, "defaultProps", {
                cta: null,
                ctaText: null,
                numLinesToShow: 4,
                initialDivHeight: 16,
                customCssClass: "",
                clickCallback: function e(t) {
                    return !0
                },
                collapsible: !1,
                ctaNewline: !1,
                alwaysShowReadMore: !1,
                collapsed: void 0
            }), Object(i.a)(h, "CONTENT", "CONTENT"), Object(i.a)(h, "CTA", "CTA"), Object(i.a)(h, "CTA_COLLAPSE", "CTA_COLLAPSE");
            var j = h,
                O = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(a.a)(this, Object(r.a)(t).call(this, e)), Object(i.a)(Object(s.a)(Object(s.a)(n)), "computeStateFromStyles", function(e) {
                            var t = e.lineHeight * n.props.numLinesToShow;
                            return n.ctaStyles = {
                                fontSize: "".concat(e.fontSize, "px"),
                                lineHeight: "".concat(e.lineHeight, "px")
                            }, e.scrollHeight <= t ? n.props.alwaysShowReadMore ? {
                                collapsed: !0,
                                divHeight: "initial"
                            } : n.contentRevealedState : n.state.divHeight !== t ? {
                                collapsed: !0,
                                divHeight: t
                            } : n.state
                        }), n.variantCssClass = f.variantDefault, n
                    }
                    return Object(c.a)(t, e), t
                }(j),
                g = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(a.a)(this, Object(r.a)(t).call(this, e)), Object(i.a)(Object(s.a)(Object(s.a)(n)), "computeStateFromStyles", function(e) {
                            if (e.scrollHeight <= e.lineHeight * n.props.numLinesToShow) return n.contentRevealedState;
                            var t = e.lineHeight * (n.props.numLinesToShow + 1);
                            return n.state.divHeight !== t ? (n.ctaStyles = {
                                fontSize: "".concat(e.fontSize, "px"),
                                lineHeight: "".concat(e.lineHeight, "px"),
                                paddingTop: "".concat(e.lineHeight, "px"),
                                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0) 0px, white ".concat(e.lineHeight, "px)")
                            }, {
                                collapsed: !0,
                                divHeight: t
                            }) : n.state
                        }), n.variantCssClass = f.variantFadeOut, n
                    }
                    return Object(c.a)(t, e), t
                }(j),
                v = function e(t) {
                    var n = t.text,
                        o = t.max;
                    if (n.length < o) return n;
                    var a = o - 3,
                        r = n.lastIndexOf(" ", a);
                    return "".concat(r < 0 ? n.substring(0, a) : n.substring(0, r), "...")
                },
                y = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++) l[u] = arguments[u];
                        return n = Object(a.a)(this, (e = Object(r.a)(t)).call.apply(e, [this].concat(l))), Object(i.a)(Object(s.a)(Object(s.a)(n)), "state", {
                            expanded: !1
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "toggle", function() {
                            return n.setState({
                                expanded: !n.state.expanded
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(u.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = t.text,
                                o = t.max;
                            return this.state.expanded || n.length < o ? n : p.createElement(p.Fragment, null, p.createElement(v, {
                                text: n,
                                max: o
                            }), p.createElement("a", {
                                className: "common-text-AbbreviateWithMore__more--20EH9",
                                onClick: this.toggle
                            }, Object(d.localize)("more_link")))
                        }
                    }]), t
                }(p.Component),
                S = n("./packages/events/window-resize/WindowResize.jsx"),
                C = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(a.a)(this, Object(r.a)(t).call(this, e)), Object(i.a)(Object(s.a)(Object(s.a)(n)), "resizeCallback", function() {
                            n.setState({
                                resizedFontSize: n.props.defaultFontSizePx,
                                numIters: 0
                            }, n.makeFit)
                        }), Object(i.a)(Object(s.a)(Object(s.a)(n)), "containerRef", {}), n.state = {
                            resizedFontSize: e.defaultFontSizePx,
                            numIters: 0
                        }, n
                    }
                    return Object(c.a)(t, e), Object(u.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.makeFit()
                        }
                    }, {
                        key: "makeFit",
                        value: function e() {
                            if (this.containerRef && !(this.state.numIters >= 4)) {
                                var t = this.containerRef,
                                    n = t.scrollWidth,
                                    o = void 0 === n ? 0 : n,
                                    a = t.clientWidth,
                                    r = void 0 === a ? 0 : a,
                                    c = t.style,
                                    s = c.paddingLeft,
                                    i = c.paddingRight,
                                    l = c.fontSize,
                                    u = parseFloat(l);
                                if (!(r >= o || r <= 0 || u <= this.props.minFontSizePx)) {
                                    var p = (parseFloat(s) || 0) + (parseFloat(i) || 0),
                                        d = (r - p) / (o - p);
                                    3 === this.state.numIters && (d = .9);
                                    var m = Math.max(u * d, this.props.minFontSizePx);
                                    this.setState({
                                        resizedFontSize: m,
                                        numIters: this.state.numIters + 1
                                    }, this.makeFit)
                                }
                            }
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return p.createElement("div", {
                                style: {
                                    fontSize: this.state.resizedFontSize
                                },
                                ref: function e(n) {
                                    t.containerRef = n
                                },
                                className: this.props.className
                            }, this.props.children, this.props.resizeOnScreenResize ? p.createElement(S.a, {
                                callback: this.resizeCallback,
                                useDebounce: !0
                            }) : null)
                        }
                    }]), t
                }(p.Component);
            Object(i.a)(C, "defaultProps", {
                minFontSizePx: 8,
                defaultFontSizePx: 14,
                resizeOnScreenResize: !1
            });
            var x = function e(t) {
                    return t ? t.replace(/[<>&"'`]/g, function(e) {
                        return {
                            "<": "&lt;",
                            ">": "&gt;",
                            "&": "&amp;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "`": "&#x60;"
                        } [e]
                    }) : ""
                },
                _ = function e(t) {
                    return t ? t.replace(/&lt;|&gt;|&amp;|&quot;|&#39;|&#x60;/g, function(e) {
                        return {
                            "&lt;": "<",
                            "&gt;": ">",
                            "&amp;": "&",
                            "&quot;": '"',
                            "&#39;": "'",
                            "&#x60;": "`"
                        } [e]
                    }) : ""
                },
                k = n("./node_modules/react-redux/es/index.js"),
                w = Object(k.connect)(function(e, t) {
                    return Object(l.a)({}, t, {
                        isRtl: e.i18n.isRtl
                    })
                })(function e(t) {
                    var n = t.children,
                        o = t.contentLanguage,
                        a = t.isRtl,
                        r = function e(t) {
                            return t && t.match(/^(ar|iw)/i) ? "rtl" : "ltr"
                        }(o);
                    return "rtl" === r === a ? p.createElement(p.Fragment, null, n) : p.createElement("span", {
                        dir: r
                    }, n)
                });
            n.d(t, "ReadMore", function() {
                return O
            }), n.d(t, "ReadMoreFadeOut", function() {
                return g
            }), n.d(t, "Abbreviate", function() {
                return v
            }), n.d(t, "AbbreviateWithMore", function() {
                return y
            }), n.d(t, "AutoResizer", function() {
                return C
            }), n.d(t, "EscapeHtml", function() {
                return x
            }), n.d(t, "unescapeHtml", function() {
                return _
            }), n.d(t, "DirectionalText", function() {
                return w
            })
        },
        "./packages/common/throttle/throttle.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/events/window-resize/WindowResize.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = n("./node_modules/react/index.js"),
                p = n("./packages/common/throttle/throttle.jsx"),
                d = n.n(p),
                m = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++) s[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(s))), Object(l.a)(Object(i.a)(Object(i.a)(n)), "handleResize", d()(function() {
                            n.props.callback()
                        }, n.props.throttle || 0, n.props.useDebounce)), n
                    }
                    return Object(s.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            window.addEventListener("resize", this.handleResize)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            window.removeEventListener("resize", this.handleResize)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(m, "defaultProps", {
                throttle: 200,
                useDebounce: !1
            })
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=common.text.ec295e560a.js.map