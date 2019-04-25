define("@ta/media.image", ["@ta/common.global"], function(e) {
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
        }, n.p = "", n(n.s = "./packages/media/image/image.jsx")
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
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, n) {
            "use strict";

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
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
                return i
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function i(e, t) {
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
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/is-visible/is-visible.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/is-visible/is-visible.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/media/image/image.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = n("./node_modules/react/index.js"),
                f = n("./packages/common/classnames/classnames.jsx"),
                m = n.n(f),
                h = n("./packages/common/features/features.jsx"),
                b = n("./packages/common/is-visible/is-visible.jsx"),
                p = n("./packages/common/logging/logging.jsx"),
                g = n.n(p),
                j = function e() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        n = 1.5;
                    return "undefined" != typeof window && window.devicePixelRatio && t && (n = Math.min(window.devicePixelRatio, 1.5)), n
                },
                O = function e(t, n, r, o) {
                    var i = o && o.allowedStretch || .25,
                        a = o && o.pickImageBasedOnClientInfo || !0,
                        s = j(a),
                        c = n * s,
                        l = t * s,
                        u = c * l,
                        d = r.filter(function(e) {
                            return e.width <= 2560
                        });
                    if (0 === d.length) {
                        var f = r.length > 0 && (!r[0].width || !r[0].height);
                        return g.a.error("ResponsiveImage: no suitable source found. sources.length ".concat(r.length, " missingWidthHeight ").concat(f.toString())), {
                            url: "",
                            width: 0,
                            height: 0
                        }
                    }
                    var m = d.map(function(e) {
                        var t = (l - e.width) / e.width,
                            n = (c - e.height) / e.height,
                            r = Math.max(t, n),
                            o = e.width * e.height;
                        return {
                            src: e,
                            stretchRatio: r,
                            wastedRatio: (o - u) / o
                        }
                    });
                    m.sort(function(e, t) {
                        return e.wastedRatio - t.wastedRatio
                    });
                    var h = m.filter(function(e) {
                        return e.src.width * e.src.height <= 4e4
                    }).filter(function(e) {
                        return e.stretchRatio <= 0
                    });
                    if (h.length > 0) {
                        var b = h[0].src;
                        return {
                            url: b.url,
                            width: b.width,
                            height: b.height
                        }
                    }
                    var p = m.filter(function(e) {
                        return e.stretchRatio <= i
                    });
                    if (p.length > 0) {
                        var O = p[0].src;
                        return {
                            url: O.url,
                            width: O.width,
                            height: O.height
                        }
                    }
                    m.sort(function(e, t) {
                        return e.stretchRatio - t.stretchRatio
                    });
                    var v = m[0].src;
                    return {
                        url: v.url,
                        width: v.width,
                        height: v.height
                    }
                },
                v = function e(t, n) {
                    var r = Math.floor(t / n) * n,
                        o = Math.ceil(t / n) * n,
                        i = 0 === r ? 0 : (t - r) / r;
                    return 0 === i || i > .25 ? o : r
                },
                y = function e(t, n, r, o, i) {
                    var a, s = j(o),
                        c = "",
                        l = 0,
                        u = 0;
                    r.forEach(function(e) {
                        (!a || e.width > a.width) && (a = e), e.url.indexOf("/photo-o/") > -1 ? (c = e.url, l = e.width, u = e.height) : e.url.indexOf("/photo-m/") > -1 && (c = e.url.replace("/photo-m/1280/", "/photo-o/"), l = e.width, u = e.height)
                    }), "" === c && a && (c = a.url, l = a.width, u = a.height);
                    var d = v(t * s, 50),
                        f = v(n * s, 50);
                    d > l && (d = l), f > u && (f = u);
                    var m = l / u,
                        h = t / n;
                    (Math.abs(m - h) / h < .1 || "cover" !== i) && (f = Math.ceil(d * u / l));
                    var b = "https://io-tacdn-com.global.ssl.fastly.net".concat(c.substring(c.indexOf("/media/")));
                    return {
                        url: "".concat(b, "?width=").concat(d, "&height=").concat(f, "&fit=crop&auto=webp"),
                        width: d,
                        height: f
                    }
                },
                w = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c];
                        return n = Object(a.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(i))), Object(u.a)(Object(l.a)(Object(l.a)(n)), "state", {
                            drawable: !!n.props.ssrContainerDimensions,
                            pickImageBasedOnClientInfo: !1
                        }), Object(u.a)(Object(l.a)(Object(l.a)(n)), "getContainerSize", function() {
                            var e = n.containerNode.current;
                            if (!e || 0 === e.clientWidth || 0 === e.clientHeight || !n.state.pickImageBasedOnClientInfo) {
                                if (!n.props.ssrContainerDimensions) return null;
                                e = n.props.ssrContainerDimensions
                            }
                            var t = e,
                                r = t.clientWidth,
                                o = t.clientHeight;
                            return 0 === o || 0 === r ? null : {
                                clientWidth: r,
                                clientHeight: o
                            }
                        }), Object(u.a)(Object(l.a)(Object(l.a)(n)), "containerNode", d.createRef()), Object(u.a)(Object(l.a)(Object(l.a)(n)), "argCache", {
                            sources: null,
                            containerSize: null,
                            result: null
                        }), Object(u.a)(Object(l.a)(Object(l.a)(n)), "pickImage", function(e) {
                            var t = n.getContainerSize();
                            return n.cachedPickUrlFromContainerSize(e, t)
                        }), Object(u.a)(Object(l.a)(Object(l.a)(n)), "pickUrlFromContainerSize", function(e, t) {
                            if (!e || 0 === e.length || !t) return null;
                            var r, o = t.clientWidth,
                                i = t.clientHeight,
                                a = n.state.pickImageBasedOnClientInfo;
                            if (Object(h.featureIsEnabled)("media991_fastly_ondemand_resizing")) r = y(o, i, e, a, n.props.fitStrategy);
                            else {
                                var s = {
                                    pickImageBasedOnClientInfo: a,
                                    allowedStretch: n.props.allowedStretch
                                };
                                r = O(o, i, e, s)
                            }
                            return "function" == typeof n.props.onImageChosen && n.props.onImageChosen(r.url), r
                        }), Object(u.a)(Object(l.a)(Object(l.a)(n)), "cachedPickUrlFromContainerSize", function(e, t) {
                            var r = n.argCache.containerSize && n.argCache.containerSize.clientWidth || -1,
                                o = n.argCache.containerSize && n.argCache.containerSize.clientHeight || -1,
                                i = t && t.clientWidth || 0,
                                a = t && t.clientHeight || 0;
                            return n.argCache.sources === e && t && r >= i && o >= a && n.argCache.result ? n.argCache.result : (n.argCache = {
                                result: n.pickUrlFromContainerSize(e, t),
                                sources: e,
                                containerSize: t
                            }, n.argCache.result)
                        }), Object(u.a)(Object(l.a)(Object(l.a)(n)), "drawable", function() {
                            n.setState({
                                drawable: !0
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(i.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.setState({
                                pickImageBasedOnClientInfo: !0
                            }), this.props.notLazy && !this.state.drawable && this.setState({
                                drawable: !0
                            })
                        }
                    }, {
                        key: "renderAltText",
                        value: function e() {
                            var t = this.props.alt;
                            return t ? d.createElement("span", {
                                role: "img",
                                "aria-label": t
                            }) : null
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this.state.drawable ? this.pickImage(this.props.sources) : null,
                                n = t && "string" == typeof t.url ? 'url("'.concat(t.url, '")') : "none",
                                o = this.props,
                                i = o.children,
                                a = o.fitStrategy,
                                s = o.height,
                                c = o.width,
                                l = o.padding,
                                f = o.borderRadius,
                                p = o.transform,
                                g = o.opacity,
                                j = o.threshold,
                                O = o.backgroundColor,
                                v = o.backgroundPosition,
                                y = o.customFitStrategySelector,
                                w = o.ssrContainerDimensions,
                                S = "cover";
                            if ("contain" === a || "cover" === a) S = a;
                            else if ("calculated" === a) {
                                var _ = this.containerNode.current;
                                !_ && w && (_ = w), _ && t && "function" == typeof y && (S = y(t.width, t.height, _.clientWidth, _.clientHeight))
                            }
                            var k = {
                                className: m()("media-image-ResponsiveImage__default--1s-9x", Object(u.a)({}, "media-image-ResponsiveImage__findResponsiveImage--PI9cG", Object(h.featureIsEnabled)("media_find_responsive_image"))),
                                style: {
                                    height: s,
                                    width: c,
                                    padding: l,
                                    borderRadius: f,
                                    transform: p,
                                    opacity: g,
                                    backgroundImage: n,
                                    backgroundColor: O,
                                    backgroundPosition: v,
                                    backgroundSize: S
                                }
                            };
                            return this.state.drawable || this.props.notLazy ? d.createElement("div", Object(r.a)({
                                ref: this.containerNode
                            }, k), this.renderAltText(), i) : d.createElement(b.HasBeenVisible, {
                                node: this.containerNode,
                                threshold: j,
                                onVisible: this.drawable
                            }, d.createElement("div", Object(r.a)({
                                ref: this.containerNode
                            }, k), this.renderAltText(), i))
                        }
                    }]), t
                }(d.Component);
            Object(u.a)(w, "defaultProps", {
                padding: void 0,
                borderRadius: void 0,
                threshold: 200,
                fitStrategy: "cover",
                customFitStrategySelector: function e(t, n, r, o) {
                    if (0 === o || 0 === r || 0 === n || 0 === t) return "cover";
                    var i = t / n,
                        a = r / o;
                    if (0 === i || 0 === a) return "cover";
                    var s = i < a,
                        c = s ? i / a : a / i;
                    if (c > .75) return "cover";
                    var l = c / .75;
                    return s ? "".concat(100 * l, "% auto") : "auto ".concat(100 * l, "%")
                }
            });
            var S = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                _ = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c];
                        return n = Object(a.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(i))), Object(u.a)(Object(l.a)(Object(l.a)(n)), "state", {
                            seen: !1
                        }), Object(u.a)(Object(l.a)(Object(l.a)(n)), "seen", function() {
                            n.setState({
                                seen: !0
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = Object(S.a)({}, this.props);
                            return delete n.loadingElement, this.state.seen || (void 0 !== n.src && delete n.src, void 0 !== n.srcSet && delete n.srcSet), delete n.threshold, this.state.seen ? d.createElement("img", n) : d.createElement(b.HasBeenVisible, {
                                threshold: this.props.threshold,
                                onVisible: this.seen
                            }, function(e) {
                                return t.props.loadingElement ? t.props.loadingElement(e) : d.createElement("img", Object(r.a)({
                                    ref: e
                                }, n))
                            })
                        }
                    }]), t
                }(d.Component);
            Object(u.a)(_, "defaultProps", {
                srcSet: void 0,
                sizes: void 0,
                className: void 0,
                onLoad: void 0,
                threshold: 200
            }), n.d(t, "ResponsiveImage", function() {
                return w
            }), n.d(t, "pickSourceForSize", function() {
                return O
            }), n.d(t, "LazyImage", function() {
                return _
            })
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=media.image.400ecfdee6.js.map