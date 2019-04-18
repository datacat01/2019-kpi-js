(window.webpackJsonp = window.webpackJsonp || []).push([
    [39], {
        2612: function(e, t, n) {
            "use strict";
            var a = o(n(5)),
                r = o(n(6)),
                u = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = p(n(2)),
                i = p(n(7)),
                d = p(n(8)),
                c = p(n(9)),
                f = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, l.default)(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                s = p(n(1)),
                m = n(117);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var h = p(n(15)).default.getProperties(),
                b = h.GIGYA_SOCIALIZE_URL,
                w = h.GIGYA_APIKEY,
                y = function(e) {
                    function t() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || (0, c.default)(t)).apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
                    }(t, s.default.Component), f(t, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            console.error("Error caught in Gigya component:: ", e, t, this.props)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = b + "?apikey=" + w;
                            return b && w ? s.default.createElement(m.Helmet, {
                                key: "gigya-script"
                            }, s.default.createElement("script", {
                                src: e
                            })) : null
                        }
                    }]), t
                }();
            t.default = y
        },
        2613: function(e, t, n) {
            "use strict";
            var a = o(n(5)),
                r = o(n(6)),
                u = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Piano = void 0;
            var l = b(n(2)),
                i = b(n(7)),
                d = b(n(8)),
                c = b(n(9)),
                f = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, l.default)(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                s = b(n(1)),
                m = n(117),
                p = b(n(0)),
                h = n(22);

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var w = b(n(15)).default.getProperties(),
                y = w.PIANO_AID,
                g = w.PIANO_URI,
                E = t.Piano = function(e) {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
                        return n.loadProGate = function() {
                            var e = 0,
                                t = setInterval(function() {
                                    20 === (e += 1) && (console.warn("tp load timeout"), clearInterval(t)), window.tp && window.tp.experience && (window.tp.experience.execute(), clearInterval(t))
                                }, 500)
                        }, n.tpUserRef = function(e) {
                            "undefined" != typeof window && window.tp && window.tp.push(["setUserRef", e])
                        }, n.startPianoCheckout = function() {
                            if ("undefined" != typeof window && window.tp) {
                                var e = window.tp.util.findCookieByName("__pianoParams"),
                                    t = void 0;
                                try {
                                    t = JSON.parse(e), window.tp.util.deleteCookie("__pianoParams")
                                } catch (e) {
                                    t = !1
                                }
                                t && window.tp.offer.startCheckout(t)
                            }
                        }, n.defaultTinypassValues = function() {
                            "undefined" != typeof window && void 0 !== window.tp && window.tp.push(["setCustomVariable", "siteRedesign", "true"])
                        }, n.state = {
                            embedCode: 'var siteRedesign=1;(function(src){var a=document.createElement("script");a.type="text/javascript";a.defer=true;a.src=src;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})("' + g + "/xbuilder/experience/load?aid=" + y + '");',
                            pianoAID: y
                        }, n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
                    }(t, s.default.Component), f(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            setTimeout(function() {
                                e.defaultTinypassValues(), e.loadProGate()
                            }, 1500)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            var e = this.props.isAuthenticated;
                            e || this.loadProGate(), !e && window.tp && window.tp.userRef && this.props.message && "fromMenu" !== this.props.message && this.startPianoCheckout()
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            window.tp && !window.tp.userRef && e.tpToken && this.tpUserRef(e.tpToken)
                        }
                    }, {
                        key: "componentDidCatch",
                        value: function(e, t) {
                            console.error("Error caught in Piano component:: ", e, t, this.props)
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e) {
                            return e.tpToken !== this.props.tpToken
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.pianoAID ? s.default.createElement(m.Helmet, null, s.default.createElement("script", null, this.state.embedCode)) : null
                        }
                    }]), t
                }();
            E.propTypes = {
                tpToken: p.default.any,
                message: p.default.any,
                isAuthenticated: p.default.bool.isRequired
            }, E.defaultProps = {
                tpToken: null,
                message: ""
            }, t.default = (0, h.connect)(function(e) {
                var t = e.authentication;
                return {
                    tpToken: t.tpToken,
                    message: t.message,
                    isAuthenticated: t.isAuthenticated
                }
            })(E)
        },
        2614: function(e, t, n) {
            "use strict";
            var a = o(n(5)),
                r = o(n(6)),
                u = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l, i, d = w(n(2)),
                c = w(n(7)),
                f = w(n(8)),
                s = w(n(9)),
                m = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, d.default)(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                p = w(n(1)),
                h = n(117),
                b = w(n(0));

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var y = (i = l = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
                    e.prototype = (0, f.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (c.default ? (0, c.default)(e, t) : e.__proto__ = t)
                }(t, p.default.Component), m(t, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        console.error("Error caught in Querly component:: ", e, t, this.props)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.querylySrc,
                            n = e.brand,
                            a = JSON.parse(t || "{}")[n];
                        return p.default.createElement(h.Helmet, null, p.default.createElement("script", {
                            src: a,
                            type: "text/javascript"
                        }))
                    }
                }]), t
            }(), l.propTypes = {
                querylySrc: b.default.string.isRequired,
                brand: b.default.string.isRequired
            }, l.defaultProps = {
                querylySrc: ""
            }, i);
            t.default = y
        },
        2615: function(e, t, n) {
            "use strict";
            var a = o(n(5)),
                r = o(n(6)),
                u = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l, i, d = E(n(2)),
                c = E(n(7)),
                f = E(n(8)),
                s = E(n(9)),
                m = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, d.default)(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                p = E(n(1)),
                h = E(n(0)),
                b = E(n(26)),
                w = n(12),
                y = E(n(2616)),
                g = E(n(782));

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function v(e, t, n) {
                return t in e ? (0, d.default)(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function k(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
            }
            var P = void 0,
                T = {};
            T[w.BUFFETT] = n(2618), T[w.CNBC] = n(1996), T[w.MAKE_IT] = n(2619), T[w.DEAL_OR_NO_DEAL] = n(2620);
            var I = (i = l = function(e) {
                function t() {
                    var e, n, a;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var r = arguments.length, u = Array(r), o = 0; o < r; o++) u[o] = arguments[o];
                    return n = a = k(this, (e = t.__proto__ || (0, s.default)(t)).call.apply(e, [this].concat(u))), a.state = {
                        hasMounted: !1
                    }, a.hasArticleBody = function(e) {
                        return e.columns.some(function(e) {
                            return e.modules.some(function(e) {
                                return "articleBody" === e.name
                            })
                        })
                    }, k(a, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
                    e.prototype = (0, f.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (c.default ? (0, c.default)(e, t) : e.__proto__ = t)
                }(t, p.default.Component), m(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.setState({
                            hasMounted: !0
                        })
                    }
                }, {
                    key: "componentDidCatch",
                    value: function(e, t) {
                        console.log("Error caught in PageBuilder component:: ", e, t, this.props)
                    }
                }, {
                    key: "renderSidebar",
                    value: function(e, t, n, a) {
                        var r = this.props,
                            u = r.id,
                            o = r.sectionId,
                            l = r.template,
                            i = r.sectionTitle,
                            d = r.sectionUrl,
                            c = r.brand,
                            f = r.premium,
                            s = r.isProUser,
                            m = r.type,
                            h = r.loading,
                            b = l.includes("dealOrNoDealVideo") || l.includes("dealOrNoDealTimeline");
                        return p.default.createElement(g.default, {
                            key: "row" + t + "-col" + n,
                            className: P.sidebar,
                            dontEverStick: b
                        }, a.mapModules(e, u, o, i, d, c, l, f, s, this.state.hasMounted, m, h))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.id,
                            a = t.layout,
                            r = t.sectionId,
                            u = t.template,
                            o = t.sectionTitle,
                            l = t.sectionEyebrow,
                            i = t.sectionUrl,
                            d = t.brand,
                            c = t.pageType,
                            f = t.premium,
                            s = t.native,
                            m = t.isProUser,
                            h = t.type,
                            g = t.loading;
                        P = T[d] ? T[d] : T[w.CNBC];
                        var E = new y.default;
                        return p.default.createElement("div", null, d === w.BUFFETT ? p.default.createElement("div", {
                            className: P.buffettPage
                        }, a && a.length && a.length > 0 ? a.map(function(t, a) {
                            return p.default.createElement("div", {
                                key: a
                            }, t.columns.map(function(t, l) {
                                return p.default.createElement("div", {
                                    key: "row" + a + "-col" + l
                                }, E.mapModules(t.modules, n, r, o, i, d, u, f, m, e.state.hasMounted, h))
                            }))
                        }) : null) : null, p.default.createElement("div", {
                            className: (0, b.default)(v({}, u, d === w.DEAL_OR_NO_DEAL), P.page)
                        }, p.default.createElement("div", {
                            className: d === w.CNBC || d === w.MAKE_IT ? P.pageWrapper : null
                        }, a && a.length && a.length > 0 ? a.map(function(t, a) {
                            var o;
                            return p.default.createElement("div", {
                                key: a,
                                className: (0, b.default)((o = {}, v(o, P.pageRow, !0), v(o, P.containerWidth100, t.columns.find(function(e) {
                                    return "full" === e.span
                                })), v(o, P.containerFluidWidths, !t.columns.find(function(e) {
                                    return "full" === e.span
                                })), v(o, P.hasBanner, s && e.hasArticleBody(t)), o))
                            }, t.columns.map(function(t, o) {
                                return 4 == t.span ? e.renderSidebar(t.modules, a, o, E) : p.default.createElement("div", {
                                    key: "row" + a + "-col" + o,
                                    className: "\n                              " + P["col-" + t.span] + "\n                              " + ("article" === c ? " " + P.article : "") + "\n                            "
                                }, E.mapModules(t.modules, n, r, l, i, d, u, f, m, e.state.hasMounted, h, g))
                            }))
                        }) : null)))
                    }
                }]), t
            }(), l.propTypes = {
                id: h.default.number.isRequired,
                layout: h.default.array,
                sectionId: h.default.number,
                template: h.default.string,
                sectionTitle: h.default.string,
                sectionEyebrow: h.default.string,
                sectionUrl: h.default.string,
                brand: h.default.string,
                pageType: h.default.string,
                type: h.default.string,
                premium: h.default.bool,
                native: h.default.bool,
                isProUser: h.default.bool,
                loading: h.default.bool
            }, l.defaultProps = {
                sectionId: 0,
                sectionTitle: null,
                sectionEyebrow: null,
                sectionUrl: null,
                layout: [],
                template: "",
                brand: "",
                pageType: "",
                type: "",
                premium: !1,
                native: !1,
                isProUser: !1,
                loading: !1
            }, i);
            t.default = I
        },
        2616: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = f(n(2)),
                r = f(n(23)),
                u = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, a.default)(e, r.key, r)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                o = f(n(1)),
                l = f(n(294)),
                i = n(12),
                d = f(n(2617)),
                c = f(n(333));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(481))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/ArticleBody"],
                    webpack: function() {
                        return [481]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                m = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(752))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/ArticleBodyPremium"],
                    webpack: function() {
                        return [752]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                p = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(0), n.e(1)]).then(function(t) {
                                e(n(753))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Mps/AdUnits/BoxRail"],
                    webpack: function() {
                        return [753]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                h = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(0), n.e(1)]).then(function(t) {
                                e(n(699))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Mps/AdUnits/BoxInline"],
                    webpack: function() {
                        return [699]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                b = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(0), n.e(1)]).then(function(t) {
                                e(n(1994))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Mps/AdUnits/TopBanner"],
                    webpack: function() {
                        return [1994]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                w = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(125)]).then(function(t) {
                                e(n(2557))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/BuffettArticleBody"],
                    webpack: function() {
                        return [2557]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                y = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(6), n.e(0), n.e(3), n.e(1), n.e(71)]).then(function(t) {
                                e(n(2558))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/BuffettAbout"],
                    webpack: function() {
                        return [2558]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                g = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(3), n.e(1), n.e(101)]).then(function(t) {
                                e(n(2559))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/BuffettArticleHeader"],
                    webpack: function() {
                        return [2559]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                E = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(3), n.e(1), n.e(102)]).then(function(t) {
                                e(n(2560))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/BuffettArticleHeaderEyebrow"],
                    webpack: function() {
                        return [2560]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                v = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(88)]).then(function(t) {
                                e(n(2561))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/BuffettClips"],
                    webpack: function() {
                        return [2561]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                k = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(89)]).then(function(t) {
                                e(n(2562))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/BuffettClipsDark"],
                    webpack: function() {
                        return [2562]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                P = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(126)]).then(function(t) {
                                e(n(2563))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/BuffettDynamicContentFeedContainer"],
                    webpack: function() {
                        return [2563]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                T = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(98)]).then(function(t) {
                                e(n(2564))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/BuffettSearch"],
                    webpack: function() {
                        return [2564]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                I = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(141)]).then(function(t) {
                                e(n(2565))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/ThreeUp"],
                    webpack: function() {
                        return [2565]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                _ = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(28)]).then(function(t) {
                                e(n(2566))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../containers/Timeline"],
                    webpack: function() {
                        return [2566]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                M = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(0), n.e(3), n.e(1), n.e(138)]).then(function(t) {
                                e(n(2567))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/RelatedVideos"],
                    webpack: function() {
                        return [2567]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                A = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(129)]).then(function(t) {
                                e(n(2568))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/ClipPlayer"],
                    webpack: function() {
                        return [2568]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                S = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(127)]).then(function(t) {
                                e(n(2569))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/CardCollection"],
                    webpack: function() {
                        return [2569]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                C = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(128)]).then(function(t) {
                                e(n(2570))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Carousel"],
                    webpack: function() {
                        return [2570]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                B = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(106)]).then(function(t) {
                                e(n(2571))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/DynamicContentFeedContainer"],
                    webpack: function() {
                        return [2571]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                D = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(123)]).then(function(t) {
                                e(n(2314))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Breakers/FeaturedBreaker"],
                    webpack: function() {
                        return [2314]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                R = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(124)]).then(function(t) {
                                e(n(2572))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Breakers/RelatedBreaker/ForYouBreaker"],
                    webpack: function() {
                        return [2572]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                N = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(131)]).then(function(t) {
                                e(n(2573))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/FourUp"],
                    webpack: function() {
                        return [2573]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                O = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(480))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Breakers/HalfAndHalfBreaker"],
                    webpack: function() {
                        return [480]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                H = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(0), n.e(1)]).then(function(t) {
                                e(n(1990))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Header"],
                    webpack: function() {
                        return [1990]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                U = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(52)]).then(function(t) {
                                e(n(2574))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/HeroLedePlusThree"],
                    webpack: function() {
                        return [2574]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                F = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(132)]).then(function(t) {
                                e(n(2575))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/ImageDense"],
                    webpack: function() {
                        return [2575]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                L = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(1), n.e(76)]).then(function(t) {
                                e(n(2576))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../containers/LegacyPlayerContainer"],
                    webpack: function() {
                        return [2576]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                V = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(133)]).then(function(t) {
                                e(n(2577))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/LongFormFeaturedVideos"],
                    webpack: function() {
                        return [2577]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                x = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(6), n.e(0), n.e(103)]).then(function(t) {
                                e(n(2578))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/LongFormSectionIntro"],
                    webpack: function() {
                        return [2578]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                q = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(751))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/MakeItRelatedVideo"],
                    webpack: function() {
                        return [751]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                G = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(4), n.e(0), n.e(3), n.e(1), n.e(108)]).then(function(t) {
                                e(n(2579))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/FeaturedStories"],
                    webpack: function() {
                        return [2579]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                j = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(0), n.e(1), n.e(53)]).then(function(t) {
                                e(n(2580))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/MakeItSquareLead"],
                    webpack: function() {
                        return [2580]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                W = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(1), n.e(87)]).then(function(t) {
                                e(n(2581))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Breakers/MakeIt/MakeItNewsletterBreaker"],
                    webpack: function() {
                        return [2581]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Y = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(0), n.e(1)]).then(function(t) {
                                e(n(1997))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/MarketsBanner"],
                    webpack: function() {
                        return [1997]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                J = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(0), n.e(3), n.e(1), n.e(92)]).then(function(t) {
                                e(n(2376))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/MarketSummary"],
                    webpack: function() {
                        return [2376]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                K = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(93)]).then(function(t) {
                                e(n(2338))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/MarketsModule"],
                    webpack: function() {
                        return [2338]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Q = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(0), n.e(1)]).then(function(t) {
                                e(n(700))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/MarketsModule/MarketMovers"],
                    webpack: function() {
                        return [700]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                X = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(113)]).then(function(t) {
                                e(n(2582))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/MarketModules/MarketTopicTown"],
                    webpack: function() {
                        return [2582]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Z = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(6), n.e(0), n.e(1), n.e(112)]).then(function(t) {
                                e(n(2583))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/MarketModules/MarketSectionTable"],
                    webpack: function() {
                        return [2583]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                z = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(0), n.e(1)]).then(function(t) {
                                e(n(696))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Article/MostPopular"],
                    webpack: function() {
                        return [696]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                $ = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(0), n.e(1)]).then(function(t) {
                                e(n(740))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Mps/AdUnits/MidResponsive"],
                    webpack: function() {
                        return [740]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                ee = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(0), n.e(79)]).then(function(t) {
                                e(n(2584))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/OptInOverlay"],
                    webpack: function() {
                        return [2584]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                te = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(134)]).then(function(t) {
                                e(n(2585))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Mps/MpsComponents/PromoBreaker"],
                    webpack: function() {
                        return [2585]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                ne = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(136)]).then(function(t) {
                                e(n(2586))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Mps/MpsComponents/PromoBreakerDOND"],
                    webpack: function() {
                        return [2586]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                ae = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(135)]).then(function(t) {
                                e(n(2587))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Mps/MpsComponents/PromoBreakerCNBC"],
                    webpack: function() {
                        return [2587]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                re = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(1)]).then(function(t) {
                                e(n(712))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Article/Pullquote/Buffett"],
                    webpack: function() {
                        return [712]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                ue = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(1), n.e(69)]).then(function(t) {
                                e(n(2377))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/QuoteFinder"],
                    webpack: function() {
                        return [2377]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                oe = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(0), n.e(1)]).then(function(t) {
                                e(n(697))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Article/RelatedTags"],
                    webpack: function() {
                        return [697]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                le = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(3), n.e(1), n.e(46)]).then(function(t) {
                                e(n(2588))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Breakers/MakeIt/RelatedSpecialsBreaker"],
                    webpack: function() {
                        return [2588]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                ie = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(77)]).then(function(t) {
                                e(n(2589))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/MarketModules/RegionalMarketsModule"],
                    webpack: function() {
                        return [2589]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                de = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(6), n.e(0), n.e(3), n.e(1), n.e(139)]).then(function(t) {
                                e(n(2590))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/SectionIntro"],
                    webpack: function() {
                        return [2590]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                ce = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(6), n.e(0), n.e(100)]).then(function(t) {
                                e(n(2591))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/SectionTiles"],
                    webpack: function() {
                        return [2591]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                fe = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(0), n.e(1), n.e(51)]).then(function(t) {
                                e(n(2592))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/SingleStoryHeroWithTopStoriesTitle"],
                    webpack: function() {
                        return [2592]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                se = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(78)]).then(function(t) {
                                e(n(2593))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/MarketModules/SecuritiesModule"],
                    webpack: function() {
                        return [2593]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                me = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(6), n.e(0), n.e(3), n.e(1), n.e(99)]).then(function(t) {
                                e(n(2594))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/SlideshowGrid"],
                    webpack: function() {
                        return [2594]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                pe = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(6), n.e(0), n.e(3), n.e(1), n.e(73)]).then(function(t) {
                                e(n(2595))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/SlideshowHighlight"],
                    webpack: function() {
                        return [2595]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                he = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(140)]).then(function(t) {
                                e(n(2596))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Slideshow/SlideshowIntro/Buffett"],
                    webpack: function() {
                        return [2596]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                be = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(95)]).then(function(t) {
                                e(n(2597))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/StoriesTwoThird"],
                    webpack: function() {
                        return [2597]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                we = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(3), n.e(1)]).then(function(t) {
                                e(n(2008))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Taboola"],
                    webpack: function() {
                        return [2008]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                ye = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(3), n.e(1), n.e(47)]).then(function(t) {
                                e(n(2375))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/ClipVideoHero/Transcript"],
                    webpack: function() {
                        return [2375]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                ge = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(0), n.e(1), n.e(142)]).then(function(t) {
                                e(n(2598))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/TwoColumn"],
                    webpack: function() {
                        return [2598]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Ee = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(143)]).then(function(t) {
                                e(n(2599))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/TwoColumnImageDense"],
                    webpack: function() {
                        return [2599]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                ve = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(116)]).then(function(t) {
                                e(n(2465))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/ThreeUpStack"],
                    webpack: function() {
                        return [2465]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                ke = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(0), n.e(96)]).then(function(t) {
                                e(n(2600))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/TrendingNowBreaker"],
                    webpack: function() {
                        return [2600]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Pe = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(144)]).then(function(t) {
                                e(n(2601))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/UltraDense"],
                    webpack: function() {
                        return [2601]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Te = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(109)]).then(function(t) {
                                e(n(2602))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/VideoBreakerFeatured"],
                    webpack: function() {
                        return [2602]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Ie = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(0), n.e(145)]).then(function(t) {
                                e(n(2603))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/VideoHero/Buffett"],
                    webpack: function() {
                        return [2603]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                _e = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(5), n.e(0), n.e(1), n.e(118)]).then(function(t) {
                                e(n(2604))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/VideoHero/dealornodeal"],
                    webpack: function() {
                        return [2604]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Me = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(67)]).then(function(t) {
                                e(n(2457))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/VideoGrid"],
                    webpack: function() {
                        return [2457]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Ae = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(117)]).then(function(t) {
                                e(n(2605))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/VideoGridDate"],
                    webpack: function() {
                        return [2605]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Se = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(5), n.e(0), n.e(146)]).then(function(t) {
                                e(n(2456))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/Wildcard"],
                    webpack: function() {
                        return [2456]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Ce = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(0), n.e(1)]).then(function(t) {
                                e(n(743))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/SectionHeader"],
                    webpack: function() {
                        return [743]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Be = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(744))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/ArticleHeader"],
                    webpack: function() {
                        return [744]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                De = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(97)]).then(function(t) {
                                e(n(2606))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/BioDetails"],
                    webpack: function() {
                        return [2606]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Re = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(745))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/KeyPoints"],
                    webpack: function() {
                        return [745]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Ne = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(501))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/ArticleInlineMedia"],
                    webpack: function() {
                        return [501]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Oe = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(746))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/ArticleInlineMediaPremium"],
                    webpack: function() {
                        return [746]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                He = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(748))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/TransporterArticle"],
                    webpack: function() {
                        return [748]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Ue = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(749))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/TransporterSection"],
                    webpack: function() {
                        return [749]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Fe = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(747))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/ArticleTicker"],
                    webpack: function() {
                        return [747]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Le = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1)]).then(function(t) {
                                e(n(750))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../layoutComponents/DenseCoverage"],
                    webpack: function() {
                        return [750]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Ve = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(58)]).then(function(t) {
                                e(n(2607))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/MakeItAbout"],
                    webpack: function() {
                        return [2607]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                xe = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(5), n.e(0), n.e(1), n.e(107)]).then(function(t) {
                                e(n(2608))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/FeaturedPerson"],
                    webpack: function() {
                        return [2608]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                qe = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(5), n.e(0), n.e(137)]).then(function(t) {
                                e(n(2609))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/PageTitle"],
                    webpack: function() {
                        return [2609]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                Ge = (0, l.default)({
                    loader: function() {
                        return new r.default(function(e) {
                            Promise.all([n.e(2), n.e(4), n.e(5), n.e(6), n.e(0), n.e(3), n.e(1), n.e(75)]).then(function(t) {
                                e(n(2610))
                            }.bind(null, n)).catch(n.oe)
                        })
                    },
                    modules: ["../components/DynamicThreeUpStack"],
                    webpack: function() {
                        return [2610]
                    },
                    loading: function() {
                        return o.default.createElement(c.default, null)
                    }
                }),
                je = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.dataCounter = 0, this.offsetCounter = 0, this.boxrailCounter = 0
                    }
                    return u(e, [{
                        key: "getModuleOffset",
                        value: function(e) {
                            var t = 0;
                            return "videoGrid" === e && (t = Me.itemCount), t
                        }
                    }, {
                        key: "mapModules",
                        value: function(e, t, n, a, r, u, l, c, f) {
                            var je = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
                                We = this,
                                Ye = arguments[10],
                                Je = arguments[11],
                                Ke = "Special Report Article" === l,
                                Qe = c ? "More In Pro" : "Trending Now";
                            return Qe = Ke ? "Related" : Qe, e.map(function(e, n) {
                                var Xe = 0;
                                We.dataCounter += 1, "self" === e.source && (Xe = We.offsetCounter, We.offsetCounter += We.getModuleOffset(e.name)), e.name, We.boxrailCounter += 1;
                                var Ze = We.dataCounter;
                                return o.default.createElement(d.default, {
                                    key: "module-" + n,
                                    moduleName: e.name
                                }, "adHomepageTopBanner" === e.name && !f && !Je && o.default.createElement(b, {
                                    dataId: "AdTopBanner-" + Ze,
                                    brand: u
                                }), "adTopBanner" === e.name && !c && !f && !Je && o.default.createElement(b, {
                                    dataId: "AdTopBanner-" + Ze,
                                    brand: u
                                }), "marketsBanner" === e.name && o.default.createElement(Y, {
                                    data: e.data,
                                    dataId: "MarketsBanner-" + Ze
                                }), "marketsModule" === e.name && o.default.createElement(K, {
                                    data: e.data,
                                    dataId: "MarketsModule-" + Ze,
                                    pollRate: 1e4,
                                    hasHeader: !0
                                }), "MarketMovers" === e.name && o.default.createElement(Q, {
                                    webserviceId: e.source,
                                    dataId: "MarketMovers-" + Ze,
                                    isFullWidth: !0
                                }), "LegacyPlayerContainer" === e.name && o.default.createElement(L, {
                                    id: e.source
                                }), "articleTicker" === e.name && o.default.createElement(Fe, {
                                    data: e.data,
                                    dataId: "ArticleTicker-" + Ze,
                                    truncate: e.attributes.truncate
                                }), "sectionHeader" === e.name && !e.attributes.plainHeader && o.default.createElement(Ce, {
                                    data: e.data,
                                    logoType: e.attributes.logoType,
                                    navEnabled: e.attributes.navEnabled,
                                    dataId: "SectionHeader-" + Ze
                                }), "sectionHeader" === e.name && e.attributes.plainHeader && o.default.createElement(H, {
                                    subNavLinks: e.data && e.data.navigation && e.data.navigation.map(function(e) {
                                        return {
                                            text: e.name,
                                            url: e.path
                                        }
                                    }),
                                    title: e.attributes.title || e.data && e.data.eyebrow || null,
                                    eyebrow: e.attributes.eyebrow || null
                                }), "bioDetails" === e.name && o.default.createElement(De, {
                                    brand: u,
                                    data: e.data,
                                    dataId: "BioDetails-" + Ze
                                }), "articleHeader" === e.name && o.default.createElement(Be, {
                                    brand: u,
                                    data: e.data,
                                    isSpecialReport: e.attributes.isSpecialReport,
                                    isAuthorHeader: e.attributes.isAuthorHeader,
                                    dataId: "ArticleHeader-" + Ze
                                }), "keyPoints" === e.name && o.default.createElement(Re, {
                                    data: e.data,
                                    dataId: "KeyPoints-" + Ze
                                }), "articleInlineMedia" === e.name && (!c || c && !je) && o.default.createElement(Ne, {
                                    data: e.data,
                                    dataId: "ArticleInlineMedia-" + Ze
                                }), "articleInlineMedia" === e.name && c && je && o.default.createElement(Oe, {
                                    id: t,
                                    dataId: "ArticleInlineMedia-" + Ze
                                }), "adBoxrail" === e.name && !f && !Je && o.default.createElement(p, {
                                    dataId: "dart_wrapper_boxrail_peek_article"
                                }), "articleBody" === e.name && (!c || c && !je) && o.default.createElement(s, {
                                    data: e.data,
                                    dataId: "ArticleBody-" + Ze,
                                    brand: u
                                }), "articleBody" === e.name && c && je && o.default.createElement(m, {
                                    id: t,
                                    dataId: "ArticleBody-" + Ze
                                }), "relatedTags" === e.name && o.default.createElement(oe, {
                                    data: e.data,
                                    dataId: "RelatedTags-" + Ze
                                }), "taboola" === e.name && !c && !f && o.default.createElement(we, {
                                    dataId: "Taboola-" + Ze,
                                    attributes: e.attributes
                                }), "adFlexBox" === e.name && !c && !f && !Je && o.default.createElement(p, {
                                    dataId: "dart_wrapper_boxrail_" + Ze,
                                    brand: u
                                }), "adBoxRail" === e.name && !f && !Je && o.default.createElement(p, {
                                    dataId: "dart_wrapper_boxrail_" + Ze,
                                    brand: u,
                                    placement: e.source
                                }), "adBoxInline" === e.name && !f && !Je && o.default.createElement(h, {
                                    dataId: "dart_wrapper_boxinline_" + Ze,
                                    brand: u,
                                    placement: e.source
                                }), "adMidResponsive" === e.name && !f && o.default.createElement($, {
                                    dataId: "dart_wrapper_midresponsive_" + Ze
                                }), "transporterArticle" === e.name && o.default.createElement(He, {
                                    data: e.data,
                                    dataId: "TransporterArticle-" + Ze,
                                    isProUser: f,
                                    titleOverride: Qe,
                                    premium: c,
                                    isSpecialReport: Ke
                                }), "transporterSection" === e.name && o.default.createElement(Ue, {
                                    brand: u,
                                    data: e.data,
                                    title: a,
                                    url: r,
                                    articleId: t,
                                    attributes: e.attributes,
                                    type: Ye,
                                    dataId: "TransporterSection-" + Ze
                                }), "mostPopular" === e.name && o.default.createElement(z, {
                                    data: e.data,
                                    dataId: "MostPopular-" + Ze,
                                    titleOverride: Qe,
                                    premium: c,
                                    isSpecialReport: Ke
                                }), "WildcardPage" === e.name && o.default.createElement(Se, {
                                    brand: u,
                                    data: e.data,
                                    dataId: "Wildcard-" + Ze
                                }), "videoGrid" === e.name && o.default.createElement(Me, {
                                    id: t,
                                    dataId: "VideoGrid-" + Ze,
                                    offset: Xe
                                }), "videoGridDate" === e.name && o.default.createElement(Ae, {
                                    data: e.data,
                                    dataId: "VideoGridDate-" + Ze
                                }), "videoBreakerFeatured" === e.name && o.default.createElement(Te, {
                                    data: e.data,
                                    attributes: e.attributes,
                                    dataId: "VideoBreakerFeatured-" + Ze
                                }), "storiesTwoThird" === e.name && o.default.createElement(be, {
                                    data: e.data,
                                    attributes: e.attributes,
                                    dataId: "StoriesTwoThird-" + Ze
                                }), "threeUp" === e.name && o.default.createElement(I, {
                                    data: e.data,
                                    dataId: "ThreeUp-" + Ze,
                                    shareThrough: e.attributes.shareThrough,
                                    truncate: e.attributes.truncate
                                }), "fourUp" === e.name && o.default.createElement(N, {
                                    data: e.data,
                                    dataId: "FourUp-" + Ze,
                                    isProUser: f
                                }), "threeUpStack" === e.name && o.default.createElement(ve, {
                                    data: e.data,
                                    dataId: "ThreeUpStack-" + Ze,
                                    attributes: e.attributes
                                }), "cardCollection" === e.name && o.default.createElement(S, {
                                    data: e.data,
                                    dataId: "CardCollection-" + Ze
                                }), "sectionIntro" === e.name && o.default.createElement(de, {
                                    data: e.data,
                                    dataId: "SectionIntro-" + Ze
                                }), "sectionTiles" === e.name && o.default.createElement(ce, {
                                    data: e.data,
                                    dataId: "SectionTiles-" + Ze
                                }), "trendingNowBreaker" === e.name && o.default.createElement(ke, {
                                    data: e.data,
                                    dataId: "TrendingNowBreaker-" + Ze
                                }), "singleStoryHeroWithTopStoriesTitle" === e.name && o.default.createElement(fe, {
                                    data: e.data,
                                    dataId: "SingleStoryHeroWithTopStoriesTitle-" + Ze,
                                    showEyeBrow: e.attributes.showEyeBrow,
                                    truncate: e.attributes.truncate,
                                    isProUser: f
                                }), "heroLedePlusThree" === e.name && o.default.createElement(U, {
                                    data: e.data,
                                    dataId: "HeroLedePlusThree-" + Ze,
                                    showEyeBrow: e.attributes.showEyeBrow,
                                    truncate: e.attributes.truncate,
                                    isProUser: f
                                }), "imageDenseWithoutLabels" === e.name && o.default.createElement(F, {
                                    data: e.data,
                                    dataId: "imageDenseWithoutLabels-" + Ze,
                                    template: l
                                }), "twoColumnImageDense" === e.name && o.default.createElement(Ee, {
                                    pageBrand: u,
                                    data: e.data,
                                    dataId: "TwoColumnImageDense-" + e.data.eyebrow,
                                    template: l,
                                    truncate: e.attributes.truncate,
                                    displayThumbnailPreviews: e.attributes.displayThumbnailPreviews
                                }), "ultraDenseDefault" === e.name && o.default.createElement(Pe, {
                                    data: e.data,
                                    dataId: "UltraDenseDefault-" + Ze,
                                    shareThrough: e.attributes.shareThrough,
                                    truncate: e.attributes.truncate
                                }), "slideshowGrid" === e.name && o.default.createElement(me, {
                                    data: e.data,
                                    dataId: "SlideshowGrid-" + Ze,
                                    offset: Xe
                                }), "hero" === e.name && u === i.BUFFETT && o.default.createElement(Ie, {
                                    data: e.data,
                                    dataId: "VideoHero-" + Ze
                                }), "videoHero" === e.name && u === i.DEAL_OR_NO_DEAL && o.default.createElement(_e, {
                                    data: e.data,
                                    dataId: "VideoHero-" + Ze,
                                    enablePageScrollCTA: e.attributes && e.attributes.enablePageScrollCTA
                                }), "slideshowHighlight" === e.name && o.default.createElement(pe, {
                                    data: e.data,
                                    dataId: "SlideshowHighlight-" + Ze
                                }), "buffettQuote" === e.name && o.default.createElement(re, {
                                    data: e.data,
                                    dataId: "Pullquote-" + Ze
                                }), ("timeline" === e.name || "buffettTimeline" === e.name) && o.default.createElement(_, {
                                    data: e.data,
                                    dataId: "timeline-" + Ze,
                                    brand: u
                                }), "buffettClip" === e.name && o.default.createElement(v, {
                                    data: e.data,
                                    dataId: "BuffettClips-" + Ze
                                }), "buffettClipDark" === e.name && o.default.createElement(k, {
                                    data: e.data,
                                    dataId: "BuffettClipsDark-" + Ze
                                }), "buffettArticleBody" === e.name && o.default.createElement(w, {
                                    data: e.data,
                                    dataId: "BuffettArticleBody-" + Ze
                                }), "buffettArticleHeader" === e.name && o.default.createElement(g, {
                                    data: e.data
                                }), "buffettArticleHeaderEyebrow" === e.name && o.default.createElement(E, {
                                    data: e.data,
                                    dataId: "BuffettArticleHeaderEyebrow-" + Ze
                                }), "search" === e.name && o.default.createElement(T, {
                                    data: e.data,
                                    dataId: "BuffettSearch-" + Ze
                                }), "slideshowIntro" === e.name && o.default.createElement(he, {
                                    data: e.data,
                                    dataId: "SlideshowIntro-" + Ze
                                }), "adBuffettBreaker" === e.name && !Je && o.default.createElement(te, {
                                    dataId: "PromoBreaker-" + Ze
                                }), "adDONDBreaker" === e.name && o.default.createElement(ne, {
                                    dataId: "PromoBreakerDOND-" + Ze
                                }), "halfHalfBreaker" === e.name && !Je && o.default.createElement(ae, {
                                    dataId: "PromoBreakerCNBC-" + Ze
                                }), "longFormFeaturedVideos" === e.name && o.default.createElement(V, {
                                    data: e.data,
                                    dataId: "LongFormFeaturedVideos-" + Ze
                                }), "longFormSectionIntro" === e.name && o.default.createElement(x, {
                                    data: e.data,
                                    dataId: "LongFormSectionIntro-" + Ze
                                }), "videoTranscript" === e.name && o.default.createElement(ye, {
                                    data: e.data,
                                    attributes: e.attributes,
                                    dataId: "Transcript-" + Ze
                                }), "featuredBreaker" === e.name && o.default.createElement(D, {
                                    data: e.data,
                                    dataId: "FeaturedBreaker-" + e.data.title
                                }), "optInOverlay" === e.name && o.default.createElement(ee, {
                                    dataId: "OptInOverlay-" + Ze
                                }), "denseCoverage" === e.name && o.default.createElement(Le, {
                                    id: t,
                                    dataId: "DenseCoverage-" + Ze
                                }), "buffettAbout" === e.name && o.default.createElement(y, {
                                    data: e.data,
                                    dataId: "BuffettAbout-" + Ze
                                }), "buffettDynamicContentFeedContainer" === e.name && o.default.createElement(P, {
                                    data: e.data,
                                    attributes: e.attributes,
                                    dataId: "BuffettDynamicContentFeedContainer-" + Ze
                                }), ("clipPlayer" === e.name || "longFormPlayer" === e.name) && o.default.createElement(A, {
                                    data: e.data,
                                    dataId: "ClipPlayer-" + Ze,
                                    attributes: e.attributes,
                                    brand: u
                                }), "sectionVideoPlayer" === e.name && o.default.createElement(A, {
                                    data: e.data.assets && e.data.assets.length && e.data.assets[0],
                                    dataId: "ClipPlayer-" + Ze,
                                    attributes: e.attributes,
                                    brand: u
                                }), "relatedVideos" === e.name && o.default.createElement(M, {
                                    seedVideo: e.data,
                                    attributes: e.attributes,
                                    dataId: "RelatedVideos-" + Ze,
                                    brand: u
                                }), "sectionRelatedVideos" === e.name && o.default.createElement(M, {
                                    seedVideo: e.data.assets && e.data.assets.length && e.data.assets[0],
                                    sectionRelatedVideos: e.data.assets && e.data.assets.length && e.data.assets.slice(1),
                                    attributes: e.attributes,
                                    dataId: "RelatedVideos-" + Ze,
                                    brand: u
                                }), "quoteFinder" === e.name && o.default.createElement(ue, {
                                    dataId: "QuoteFinder-" + Ze
                                }), "marketSummary" === e.name && o.default.createElement(J, {
                                    id: e.source,
                                    dataId: "MarketSummary-" + Ze
                                }), "marketDashboardMovers" === e.name && o.default.createElement(Q, {
                                    webserviceId: e.source,
                                    dataId: "MarketMovers-" + Ze
                                }), "marketDashboardSecuritiesModule" === e.name && o.default.createElement(se, {
                                    moduleIds: e.attributes.nodeIds,
                                    dataId: "SecuritiesModule-" + Ze
                                }), "marketDashboardRegionalMarkets" === e.name && o.default.createElement(ie, {
                                    moduleIds: e.attributes.nodeIds,
                                    dataId: "RegionalMarketsModule-" + Ze
                                }), "halfAndHalfBreaker" === e.name && !Je && o.default.createElement(O, {
                                    item1: e.attributes.item1,
                                    item2: e.attributes.item2,
                                    dataId: "HalfAndHalfBreaker-" + Ze
                                }), "marketNews" === e.name && o.default.createElement(X, {
                                    title: "Market News",
                                    id: e.source,
                                    layoutType: "single-lead",
                                    dataId: "MarketsTopicTown=" + Ze
                                }), "investingNews" === e.name && o.default.createElement(X, {
                                    title: "Investing News",
                                    id: e.source,
                                    layoutType: "square-lead",
                                    dataId: "MarketsTopicTown=" + Ze
                                }), "marketSectionTable" === e.name && o.default.createElement(Z, {
                                    title: e.attributes.title || "",
                                    id: e.attributes.id,
                                    dataId: "MarketSectionTable=" + Ze
                                }), "forYouBreaker" === e.name && o.default.createElement(R, {
                                    dataId: "ForYouBreaker-" + Ze,
                                    attributes: e.attributes,
                                    brand: e.attributes.brand
                                }), "dynamicContentFeed" === e.name && o.default.createElement(B, {
                                    data: e.data,
                                    dataId: "DynamicContentFeedContainer=" + Ze,
                                    attributes: e.attributes
                                }), "featuredStories" === e.name && o.default.createElement(G, {
                                    data: e.data,
                                    isCollapsible: e.attributes.isCollapsible,
                                    dataId: "FeaturedStories=" + Ze
                                }), "makeItTwoColumn" === e.name && o.default.createElement(ge, {
                                    data: e.data,
                                    dataId: "TwoColumn=" + Ze
                                }), "makeItRelatedVideo" === e.name && o.default.createElement(q, {
                                    data: e.data,
                                    dataId: "MakeItRelatedVideo=" + Ze
                                }), "makeItSquareLead" === e.name && o.default.createElement(j, {
                                    dataId: "MakeItSquareLead=" + Ze
                                }), "makeItNewsletterBreaker" === e.name && o.default.createElement(W, {
                                    dataId: "MakeItNewsletterBreaker=" + Ze
                                }), "relatedSpecialsBreaker" === e.name && o.default.createElement(le, {
                                    dataId: "RelatedSpecialsBreaker=" + Ze
                                }), "makeItAbout" === e.name && o.default.createElement(Ve, {
                                    data: e.data,
                                    dataId: "MakeItAbout-" + Ze
                                }), "carousel" === e.name && o.default.createElement(C, {
                                    data: e.data,
                                    dataId: "Carousel-" + Ze,
                                    attributes: e.attributes,
                                    brand: u
                                }), "featuredPerson" === e.name && o.default.createElement(xe, {
                                    data: e.data,
                                    dataId: "FeaturedPerson-" + Ze,
                                    brand: u
                                }), "pageTitle" === e.name && o.default.createElement(qe, {
                                    data: e.data,
                                    dataId: "PageTitle-" + Ze,
                                    brand: u
                                }), "dynamicThreeUpStack" === e.name && o.default.createElement(Ge, {
                                    data: e.data,
                                    dataId: "DynamicThreeUpStack=" + Ze,
                                    dataCounter: Ze,
                                    attributes: e.attributes,
                                    source: e.source,
                                    options: e.options
                                }))
                            })
                        }
                    }]), e
                }();
            t.default = je
        },
        2617: function(e, t, n) {
            "use strict";
            var a = o(n(5)),
                r = o(n(6)),
                u = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = p(n(2)),
                i = p(n(7)),
                d = p(n(8)),
                c = p(n(9)),
                f = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, l.default)(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                s = p(n(1)),
                m = p(n(0));

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var h = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || (0, c.default)(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
                    e.prototype = (0, d.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
                }(t, s.default.Component), f(t, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        console.log("Error caught in ModuleWrapper component:: ", e, t, this.props)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.children,
                            n = e.sticky;
                        return s.default.Children.map(t, function(e) {
                            return e && s.default.cloneElement(e, {
                                sticky: n
                            })
                        })
                    }
                }]), t
            }();
            h.propTypes = {
                children: m.default.oneOfType([m.default.arrayOf(m.default.node), m.default.node]),
                sticky: m.default.bool
            }, h.defaultProps = {
                children: null,
                sticky: !1
            }, t.default = h
        },
        2621: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                init: function(e) {
                    window.addEventListener("message", function(t) {
                        switch (t.data.action) {
                            case "HIGHLIGHT":
                                ! function(e) {
                                    var t = e.data.data,
                                        n = t.storyLink,
                                        a = t.moduleDivId,
                                        r = t.moduleStyle,
                                        u = t.storyStyle,
                                        o = document.getElementById(a);
                                    if (o && (o.style = r, n || o.scrollIntoView({
                                            behavior: "instant",
                                            block: "center",
                                            inline: "nearest"
                                        })), n) {
                                        var l = (o || document).querySelectorAll('a[href="' + n + '"]');
                                        l && l[0] && l[0].parentElement && (l[0].parentElement.style = u, l[0].parentElement.scrollIntoView({
                                            behavior: "instant",
                                            block: "center",
                                            inline: "nearest"
                                        }))
                                    }
                                }(t);
                                break;
                            case "REMOVE_HIGHLIGHT":
                                ! function(e) {
                                    var t = e.data.data,
                                        n = t.storyLink,
                                        a = t.moduleDivId,
                                        r = t.moduleStyle,
                                        u = t.storyStyle,
                                        o = document.getElementById(a);
                                    if (o && (o.style = r), n) {
                                        var l = (o || document).querySelectorAll('a[href="' + n + '"]');
                                        l && l[0] && l[0].parentElement && (l[0].parentElement.style = u)
                                    }
                                }(t);
                                break;
                            case "ROW_HIGHLIGHT":
                                ! function(e) {
                                    var t = e.data.data,
                                        n = t.rowIndex,
                                        a = t.rowStyle,
                                        r = document.getElementsByClassName("PageBuilder-pageRow"),
                                        u = r && r[n];
                                    u && (u.style = a, u.scrollIntoView({
                                        behavior: "instant",
                                        block: "center",
                                        inline: "nearest"
                                    }))
                                }(t);
                                break;
                            case "REMOVE_ROW_HIGHLIGHT":
                                ! function(e) {
                                    var t = e.data.data,
                                        n = t.rowIndex,
                                        a = t.rowStyle,
                                        r = document.getElementsByClassName("PageBuilder-pageRow"),
                                        u = r && r[n];
                                    u && (u.style = a)
                                }(t);
                                break;
                            case "UPDATE_STORY":
                                e.updateStory((t.data || {}).data);
                                break;
                            case "UPDATE_PAGE_DATA":
                                e.updatePageData((t.data || {}).assetList);
                                break;
                            case "UPDATE_MODULE_SOURCE":
                                e.updateModuleSource((t.data || {}).data);
                                break;
                            case "CHANGE_LAYOUT":
                                e.changeLayout((t.data || {}).data);
                                break;
                            case "UPDATE_PAGE_TEMPLATE":
                                e.updateTemplate((t.data || {}).layout)
                        }
                    }, !1), parent.postMessage({
                        action: "LOAD_PH_JSON",
                        json: e.pageData
                    }, "*")
                }
            };
            t.default = a
        },
        2622: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.url = t
            }
        },
        2623: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.url = t, this.httpStatus = n, this.isInternal = a
            }
        },
        2624: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isPrimeShow = function(e) {
                return "primetime_show" === e
            }
        },
        2625: function(e, t, n) {
            "use strict";
            var a = o(n(5)),
                r = o(n(6)),
                u = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = s(n(3)),
                i = s(n(5)),
                d = s(n(6)),
                c = l.default || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                },
                f = "function" == typeof d.default && "symbol" === u(i.default) ? function(e) {
                    return void 0 === e ? "undefined" : u(e)
                } : function(e) {
                    return e && "function" == typeof d.default && e.constructor === d.default && e !== d.default.prototype ? "symbol" : void 0 === e ? "undefined" : u(e)
                };

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function(e, t) {
                    if (t.columns) return e.columns = m(t.columns), e;
                    if (t.modules) return e.modules = m(t.modules), e;
                    if ("WildcardPage" === t.name && t.data) {
                        var n = c({}, t, {
                            data: c({}, t.data, {
                                contentText: null,
                                promoText: null
                            })
                        });
                        return e.push(n), e
                    }
                    return e.push(t), e
                }, [])
            }
            t.pathOverride = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("object" !== ("undefined" == typeof window ? "undefined" : f(window)) || !window.__CNBC_META_DATA) return e;
                var n = __CNBC_META_DATA.brand || "cnbc",
                    a = t[e];
                return a && a[n] || e
            }, t.getMPSData = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return c({}, e, {
                    layout: m(e.layout)
                })
            }
        },
        777: function(e, t, n) {
            "use strict";
            var a = o(n(5)),
                r = o(n(6)),
                u = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Navigator = void 0;
            var l, i, d = te(n(50)),
                c = te(n(497)),
                f = te(n(498)),
                s = te(n(23)),
                m = te(n(2)),
                p = te(n(7)),
                h = te(n(8)),
                b = te(n(35)),
                w = te(n(9)),
                y = te(n(28)),
                g = te(n(778)),
                E = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, m.default)(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                v = function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if ((0, c.default)(Object(e))) return function(e, t) {
                            var n = [],
                                a = !0,
                                r = !1,
                                u = void 0;
                            try {
                                for (var o, l = (0, f.default)(e); !(a = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0);
                            } catch (e) {
                                r = !0, u = e
                            } finally {
                                try {
                                    !a && l.return && l.return()
                                } finally {
                                    if (r) throw u
                                }
                            }
                            return n
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                k = te(n(1)),
                P = te(n(2185)),
                T = n(0),
                I = n(2117),
                _ = n(22),
                M = n(115),
                A = n(38),
                S = n(120),
                C = n(53),
                B = n(150),
                D = n(81),
                R = te(n(15)),
                N = te(n(779)),
                O = te(n(693)),
                H = te(n(21)),
                U = te(n(2612)),
                F = te(n(780)),
                L = te(n(781)),
                V = te(n(2613)),
                x = te(n(2614)),
                q = te(n(1989)),
                G = te(n(2615)),
                j = te(n(2621)),
                W = te(n(2622)),
                Y = te(n(2623)),
                J = n(2624),
                K = n(769),
                Q = n(12),
                X = n(72),
                Z = te(n(20)),
                z = n(2625),
                $ = n(765),
                ee = n(148);

            function te(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function ne(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
            }

            function ae(e, t, n) {
                return t in e ? (0, m.default)(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var re = !1,
                ue = !re;

            function oe(e) {
                if (re) {
                    for (var t, n = arguments.length, a = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r];
                    (t = console).log.apply(t, ["================= [" + e + "] ===================="].concat(a))
                }
            }
            var le = R.default.getProperties(),
                ie = le.ADUNITS,
                de = le.BRAND_DOMAIN_WHITELIST,
                ce = void 0 === de ? "" : de,
                fe = le.BUFFETT_404_PATH,
                se = le.CNBC_404_PATH,
                me = le.DEAL_OR_NO_DEAL_404_PATH,
                pe = le.HOMEPAGE_REFRESH_RATE_IN_MINUTES,
                he = le.JSON_LD_CONFIG,
                be = le.MAKEIT_HOSTNAME_PREFIX,
                we = le.MPS_BRAND_SITES,
                ye = le.MPS_HOST,
                ge = le.PATH_OVERRIDE,
                Ee = le.QUERYLY_URI,
                ve = le.MAKEIT_LIVE,
                ke = pe ? 6e4 * parseInt(pe, 10) : 0;
            oe("....... Navigator", {
                HOMEPAGE_REFRESH_RATE_IN_MINUTES: pe,
                PAGE_REFRESH_RATE: ke
            });
            var Pe = ge && JSON.parse(ge) || {};

            function Te(e) {
                return [fe, se, me].includes(e)
            }

            function Ie() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.type,
                    n = e.brand,
                    a = e.subType,
                    r = e.isNative,
                    u = e.premium;
                return console.log("the type: ", t), !!r || ("off" === ve || (!(!(0, J.isPrimeShow)(a) || n === Q.DEAL_OR_NO_DEAL) || !("cnbcvideo" !== t || !u)))
            }

            function _e(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (e in n) {
                    var a = n[e];
                    if ((a.whitelist || []).some(function(e) {
                            return t.match(e || null)
                        })) return !0;
                    if ((a.blacklist || []).some(function(e) {
                            return t.match(e || null)
                        })) return !1
                }
                return !0
            }

            function Me(e) {
                var t;
                return (t = {}, ae(t, Q.BUFFETT, fe), ae(t, Q.CNBC, se), ae(t, Q.DEAL_OR_NO_DEAL, me), t)[e] || se
            }

            function Ae(e) {
                return e.includes(Q.BUFFETT) ? fe : e.includes("deal") ? me : se
            }

            function Se(e) {
                return e !== fe && e !== se && e !== me
            }
            var Ce = ce ? function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, g.default)(e).reduce(function(t, n) {
                        var a = v(n, 2),
                            r = a[0],
                            u = a[1];
                        return t[r] = {
                            whitelist: u,
                            blacklist: (0, y.default)(e).filter(function(e) {
                                return e !== r
                            }).reduce(function(t, n) {
                                return t.push.apply(t, function(e) {
                                    if (Array.isArray(e)) {
                                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                        return n
                                    }
                                    return (0, d.default)(e)
                                }(e[n].filter(function(e) {
                                    return u.indexOf(e) < 0
                                }).filter(function(e) {
                                    return t.indexOf(e) < 0
                                }))), t
                            }, [])
                        }, t
                    }, {})
                }(JSON.parse(ce)) : null,
                Be = (i = l = function(e) {
                    function t() {
                        var e, n, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, u = Array(r), o = 0; o < r; o++) u[o] = arguments[o];
                        return n = a = ne(this, (e = t.__proto__ || (0, w.default)(t)).call.apply(e, [this].concat(u))), a.state = {
                            pageData: null,
                            menuData: null,
                            firstRender: !0
                        }, a.loadTime = (new Date).getTime(), a.articleTypes = ["cnbcnewsstory", "sponsored", "blogpost", "wirestory", "partnerstory", "pressrelease", "slideshow"], a.getPathInfo = function(e) {
                            var t = (e.split("/") || []).filter(function(e) {
                                return e
                            });
                            return 2 === t.length && "id" !== t[0] ? {
                                mode: t[0],
                                pagePath: "/" + t[1] + "/"
                            } : {
                                mode: "",
                                pagePath: e
                            }
                        }, a.updatePage = function() {
                            var e = a.props,
                                t = e.client,
                                n = e.location,
                                r = (n = void 0 === n ? {} : n).pathname,
                                u = void 0 === r ? "/" : r;
                            if (oe("updatePage", a.getElapsedTimeInSecs(), u), (0, D.isHomePage)(u)) {
                                var o = (0, z.pathOverride)(u, Pe),
                                    l = a.getPathInfo(o),
                                    i = l.mode,
                                    d = l.pagePath;
                                oe("fetchPage", {
                                    pagePath: d,
                                    mode: i,
                                    client: t
                                }), a.props.fetchPage({
                                    client: t,
                                    path: d,
                                    mode: i
                                }), a.props.setIntraNavigationFlag(!0)
                            }
                        }, ne(a, n)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
                        e.prototype = (0, h.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (p.default ? (0, p.default)(e, t) : e.__proto__ = t)
                    }(t, k.default.Component), E(t, [{
                        key: "getElapsedTimeInSecs",
                        value: function() {
                            return ((new Date).getTime() - this.loadTime) / 1e3
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e) {
                            var t = !1;
                            return e.pageData && !this.props.pageData && (t = !0), e.pageData.loading !== this.props.pageData.loading && (t = !0), e.pageData.page !== this.props.pageData.page && (t = !0), oe("Navigator.shouldComponentUpdate()", this.getElapsedTimeInSecs(), t), t
                        }
                    }, {
                        key: "componentDidCatch",
                        value: function(e, t) {
                            console.error("Error caught in Navigator component:: ", e, t, this.props)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            this.setState({
                                firstRender: !1
                            });
                            var t = this.props.location,
                                n = (t = void 0 === t ? {} : t).pathname,
                                a = e.client,
                                r = e.location,
                                u = (r = void 0 === r ? {} : r).pathname,
                                o = e.request,
                                l = (o = void 0 === o ? {} : o).hostname,
                                i = e.pageData,
                                d = void 0 === i ? {} : i;
                            if (!d.loading) {
                                if (n !== u) {
                                    var c = (0, z.pathOverride)(u, Pe),
                                        f = this.getPathInfo(c),
                                        s = f.mode,
                                        m = f.pagePath,
                                        p = window && window.location.host,
                                        h = window && window.location.protocol;
                                    return Z.default.deregisterRoute(), Z.default.monitorRoute(h + "//" + p + n, h + "//" + p + u), e.fetchPage({
                                        client: a,
                                        path: m,
                                        hostname: l,
                                        mode: s
                                    }), e.setIntraNavigationFlag(!0), e.setActiveVideoPlaceholder(null), void e.setVideoPlaceholderVideo(null, {})
                                }
                                var b = d.page || {},
                                    w = b.id,
                                    y = b.type,
                                    g = b.title;
                                Z.default.dispatchRouteEvent(w), e.setNavPageType(this.isArticleType(y)), e.setNavArticleTitle(g), window.scrollTo(0, 0)
                            }
                        }
                    }, {
                        key: "fetchData",
                        value: function() {
                            var e, t = (e = b.default.mark(function e() {
                                var t, n, a, r, u, o, l, i, d, c, f, s, m, p, h, w, y, g, E, v, k, P, T, I, _, M, A, C, B, D;
                                return b.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = this.props, n = t.client, a = t.location, r = (a = void 0 === a ? {} : a).pathname, u = void 0 === r ? "/" : r, o = t.request, l = (o = void 0 === o ? {} : o).hostname, i = t.cookies, d = (0, z.pathOverride)(u, Pe), c = this.getPathInfo(d), f = c.mode, "/redesign-fonts_v4.css/" !== (s = c.pagePath) && "us-top-news-and-analysis" !== f) {
                                                e.next = 11;
                                                break
                                            }
                                            return console.log("Skipping a bad page, which queries the /not-found/ later on. Really, really bad stuff happens here."), console.log({
                                                mode: f,
                                                pagePath: s
                                            }), e.abrupt("return");
                                        case 11:
                                            return e.next = 13, this.props.fetchPage({
                                                client: n,
                                                path: s,
                                                hostname: l,
                                                mode: f
                                            });
                                        case 13:
                                            if (e.t0 = e.sent, e.t0) {
                                                e.next = 16;
                                                break
                                            }
                                            e.t0 = {};
                                        case 16:
                                            if (m = e.t0, p = m.page, h = m.errors, oe("Navigator.fetchData() SSR", this.getElapsedTimeInSecs(), p), p) {
                                                e.next = 25;
                                                break
                                            }
                                            throw w = Ae(l), y = Array.isArray(h) && h.find(function(e) {
                                                return 404 === e.statusCode
                                            }), g = y ? 404 : 500, new Y.default(w, g, !0);
                                        case 25:
                                            if (E = p.type, v = p.brand, k = p.section, P = p.url, T = p.native, I = p.premium, _ = p.liveURL, "" !== f && (_ = u), !Se(u) || !_ || u === (0, S.parse)(_).pathname) {
                                                e.next = 30;
                                                break
                                            }
                                            throw new W.default(_);
                                        case 30:
                                            if (Te(u) || !Ce || _e(v, l, Ce)) {
                                                e.next = 32;
                                                break
                                            }
                                            throw new Y.default(Me(v), 404, !0);
                                        case 32:
                                            if (M = (k || {}).subType, !Ie({
                                                    type: E,
                                                    brand: v,
                                                    subType: M,
                                                    native: T,
                                                    premium: I
                                                })) {
                                                e.next = 38;
                                                break
                                            }
                                            if (!P) {
                                                e.next = 37;
                                                break
                                            }
                                            throw A = P.replace(/[^.\/]+[.]cnbc[.]/, be) + "?makeit=1", new Y.default(A);
                                        case 37:
                                            throw new Error("\n        Serving from Pub -\n        makeit: " + (v === Q.MAKE_IT) + ",\n        isPrimeShow: " + (0, J.isPrimeShow)(M) + ",\n        isNative: " + isNative + ",\n        assetType: " + E + ",\n        brand: " + v + ",\n        premium: " + I + ",\n      ");
                                        case 38:
                                            return C = (0, X.getRegionCookie)(i).selectedRegion, e.next = 41, this.props.fetchMenu({
                                                client: n,
                                                brand: v,
                                                region: C
                                            });
                                        case 41:
                                            if (e.t1 = e.sent, e.t1) {
                                                e.next = 44;
                                                break
                                            }
                                            e.t1 = {};
                                        case 44:
                                            if (B = e.t1, D = B.menu) {
                                                e.next = 48;
                                                break
                                            }
                                            throw new Y.default(Me(v), 500, !0);
                                        case 48:
                                            this.props.setNavPageType(this.isArticleType(E)), this.setState({
                                                pageData: p,
                                                menuData: D
                                            });
                                        case 50:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }), function() {
                                var t = e.apply(this, arguments);
                                return new s.default(function(e, n) {
                                    return function a(r, u) {
                                        try {
                                            var o = t[r](u),
                                                l = o.value
                                        } catch (e) {
                                            return void n(e)
                                        }
                                        if (!o.done) return s.default.resolve(l).then(function(e) {
                                            a("next", e)
                                        }, function(e) {
                                            a("throw", e)
                                        });
                                        e(l)
                                    }("next")
                                })
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            if (!this.props.pageData.loading && this.props.pageData.page) {
                                Z.default.setPageNodeId(this.props.pageData.page.id), ke && (this.snapshotTimer = setInterval(this.updatePage, ke));
                                var e = this.props.location,
                                    t = (e = void 0 === e ? {} : e).pathname;
                                (void 0 === t ? "/" : t).includes("/pcmpreview/") && j.default.init(this.props)
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearInterval(this.snapshotTimer)
                        }
                    }, {
                        key: "isArticleType",
                        value: function(e) {
                            return this.articleTypes.includes(e) ? "article" : ""
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.pageData || this.props.pageData.page,
                                t = this.state.menuData || this.props.menuData.menu;
                            if (!e || !t) return k.default.createElement("div", null);
                            if (!e.id || this.props.pageData.error) return k.default.createElement(H.default, {
                                data: this.props.pageData,
                                errorSource: "Navigator",
                                errorProps: this.props
                            });
                            if (!t || this.props.menuData.error) return k.default.createElement(H.default, {
                                data: this.props.menuData,
                                errorSource: "Navigator",
                                errorProps: this.props
                            });
                            var n = (0, z.getMPSData)(e);
                            return k.default.createElement(q.default, {
                                data: t,
                                brand: e.brand,
                                pageType: e.template,
                                url: e.liveURL,
                                cookies: this.props.cookies
                            }, k.default.createElement($.Referrer, null), k.default.createElement(O.default, {
                                key: "BaseMeta",
                                data: e
                            }), (0, K.isArticle)(e.type) && k.default.createElement(N.default, {
                                key: "articleMeta",
                                data: e
                            }), k.default.createElement(F.default, {
                                key: "JsonLdHoc",
                                data: e,
                                jsonLdConfig: he
                            }), ue && k.default.createElement(L.default, {
                                data: n,
                                key: "MpsInit",
                                firstRender: this.state.firstRender,
                                mpsHost: ye,
                                mpsBrandSites: we,
                                adunits: ie
                            }), e.brand !== Q.BUFFETT && k.default.createElement(V.default, null), k.default.createElement(x.default, {
                                querylySrc: Ee,
                                brand: e.brand
                            }), k.default.createElement(U.default, null), k.default.createElement(G.default, {
                                id: e.id,
                                brand: e.brand,
                                layout: e.layout,
                                template: e.template,
                                premium: e.premium,
                                native: e.native,
                                sectionTitle: null !== e.section ? e.section.title : null,
                                sectionEyebrow: null !== e.section ? e.section.eyebrow : null,
                                sectionId: null !== e.section ? e.section.id : "",
                                sectionUrl: null !== e.section ? e.section.url : "",
                                pageType: this.isArticleType(e.type),
                                isProUser: (0, X.hasProCookie)(this.props.cookies),
                                type: e.section && e.section.type || "",
                                loading: this.props.pageData.loading
                            }), (0, P.default)())
                        }
                    }]), t
                }(), l.propTypes = {
                    pageData: T.PropTypes.object.isRequired,
                    menuData: T.PropTypes.object.isRequired,
                    setNavArticleTitle: T.PropTypes.func.isRequired,
                    setNavPageType: T.PropTypes.func.isRequired,
                    setIntraNavigationFlag: T.PropTypes.func.isRequired,
                    setActiveVideoPlaceholder: T.PropTypes.func.isRequired,
                    setVideoPlaceholderVideo: T.PropTypes.func.isRequired,
                    fetchPage: T.PropTypes.func.isRequired,
                    fetchMenu: T.PropTypes.func.isRequired,
                    cookies: (0, T.instanceOf)(M.Cookies).isRequired,
                    location: T.PropTypes.object.isRequired,
                    request: T.PropTypes.object.isRequired,
                    client: T.PropTypes.object.isRequired
                }, i);
            t.Navigator = Be;
            var De = {
                setNavPageType: C.setNavPageType,
                setIntraNavigationFlag: C.setIntraNavigationFlag,
                setActiveVideoPlaceholder: ee.setActiveVideoPlaceholder,
                setVideoPlaceholderVideo: ee.setVideoPlaceholderVideo,
                fetchPage: D.fetchPage,
                fetchMenu: B.fetchMenu,
                setNavArticleTitle: C.setNavArticleTitle,
                updateStory: D.updateStory,
                updatePageData: D.updatePageData,
                updateModuleSource: D.updateModuleSource,
                changeLayout: D.changeLayout,
                updateTemplate: D.updateTemplate
            };
            t.default = (0, _.connect)(function(e) {
                return {
                    request: e.request,
                    pageData: e.page,
                    menuData: e.menu
                }
            }, De)((0, M.withCookies)((0, I.withRouter)((0, A.withApollo)(Be))))
        }
    }
]);