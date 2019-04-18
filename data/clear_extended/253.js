define("@ta/social.tabs", ["@ta/styleguide.icon", "@ta/common.global"], function(e, t) {
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
        }, n.p = "", n(n.s = "./packages/social/tabs/tabs.jsx")
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
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function a(e, t) {
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
        "./packages/common/tracking/tracking.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/social/tabs/tabs.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                b = n("./node_modules/react/index.js"),
                f = n("./packages/common/classnames/classnames.jsx"),
                p = n.n(f),
                m = n("./packages/common/tracking/tracking.jsx"),
                d = function e(t) {
                    var n = t.socialLabelText,
                        r = t.label,
                        o = t.isActive,
                        a = t.onClick;
                    return b.createElement("li", null, b.createElement("a", {
                        className: o ? "ui_tab active" : "ui_tab",
                        onClick: a,
                        "data-tab-name": n || r
                    }, r))
                };
            d.defaultProps = {
                socialLabelText: void 0,
                isActive: !1,
                onClick: function e() {}
            };
            var h = d,
                y = b.createContext({
                    isActive: !0,
                    index: 0
                }),
                j = function(e) {
                    function t(e) {
                        var n;
                        Object(o.a)(this, t), n = Object(s.a)(this, Object(i.a)(t).call(this, e)), Object(u.a)(Object(l.a)(Object(l.a)(n)), "currentTabIndex", void 0), Object(u.a)(Object(l.a)(Object(l.a)(n)), "keyOffset", Math.random());
                        var r = b.Children.map(n.props.children, function(e) {
                            return e.props.isActive
                        });
                        return n.state = {
                            tabState: r
                        }, n.currentTabIndex = 0, n
                    }
                    return Object(c.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidUpdate",
                        value: function e(t) {
                            var n = this;
                            if (this.props.activeTab && this.props.activeTab !== t.activeTab && this.props.tabNames && this.props.tabNames.length === this.state.tabState.length) {
                                var r = this.props.tabNames.findIndex(function(e) {
                                    return e === n.props.activeTab
                                });
                                this.onTabChange(r, function() {})
                            }
                        }
                    }, {
                        key: "onTabChange",
                        value: function e(t, n) {
                            if (t !== this.currentTabIndex) {
                                var r = b.Children.map(this.props.children, function(e, n) {
                                    return n === t
                                });
                                this.setState({
                                    tabState: r
                                }, n)
                            }
                        }
                    }, {
                        key: "renderActiveTabContent",
                        value: function e() {
                            return this.currentTabIndex = this.state.tabState.findIndex(function(e) {
                                return e
                            }), this.props.children[this.currentTabIndex].props.children || null
                        }
                    }, {
                        key: "renderAllTabContent",
                        value: function e() {
                            var t = this;
                            return this.currentTabIndex = this.state.tabState.findIndex(function(e) {
                                return e
                            }), b.createElement(b.Fragment, null, this.state.tabState.map(function(e, n) {
                                return b.createElement(y.Provider, {
                                    key: "tab_".concat(t.keyOffset + n),
                                    value: {
                                        isActive: e,
                                        index: n
                                    }
                                }, b.createElement("div", {
                                    className: p()(Object(u.a)({}, "social-tabs-SocialTabs__inactive--2p-iE", !e))
                                }, t.props.children[n].props.children || null))
                            }))
                        }
                    }, {
                        key: "renderTabComponents",
                        value: function e() {
                            var t = this;
                            return b.Children.map(this.props.children, function(e, n) {
                                return b.createElement(m.ClickTracker, Object(r.a)({}, e.props.trackingProps, {
                                    forceAjax: !0,
                                    useSpan: !0
                                }), b.createElement(h, Object(r.a)({}, e.props, {
                                    isActive: t.state.tabState[n],
                                    onClick: function r() {
                                        return t.onTabChange(n, e.props.onClick)
                                    }
                                }), e.props.children))
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return b.createElement(b.Fragment, null, b.createElement("ul", {
                                className: p()("ui_tabs", "social-tabs-SocialTabs__tabs--ZTnoS", Object(u.a)({}, "social-tabs-SocialTabs__feed_style--2AnEd", this.props.useFeedStyle))
                            }, this.renderTabComponents()), b.createElement("div", {
                                className: p()("tab-panel", Object(u.a)({}, "social-tabs-SocialTabs__flex_panel--3Pxuj", this.props.flexPanel))
                            }, this.props.renderNonActiveTabs ? this.renderAllTabContent() : this.renderActiveTabContent()))
                        }
                    }]), t
                }(b.Component);
            Object(u.a)(j, "defaultProps", {
                useFeedStyle: !1,
                flexPanel: !1,
                tabNames: [],
                activeTab: "",
                renderNonActiveTabs: !1
            });
            var v = n("@ta/styleguide.icon"),
                _ = function e(t) {
                    var n = t.icon,
                        r = t.text;
                    return b.createElement(b.Fragment, null, n && b.createElement(v.Icon, {
                        name: n,
                        className: "social-tabs-SocialLabel__icon--LYKIO"
                    }), r)
                };
            _.defaultProps = {
                icon: void 0
            };
            var O = _;
            n.d(t, "SocialTabs", function() {
                return j
            }), n.d(t, "TabActiveContext", function() {
                return y
            }), n.d(t, "SocialTab", function() {
                return h
            }), n.d(t, "SocialLabel", function() {
                return O
            })
        },
        "@ta/styleguide.icon": function(t, n) {
            t.exports = e
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = t
        }
    })
});
//# sourceMappingURL=social.tabs.b7a56815f8.js.map