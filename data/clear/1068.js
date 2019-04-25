define("@ta/platform.runtime", ["@ta/common.error-handling", "@ta/page-manifest", "@ta/platform.import", "@ta/common.global"], function(e, t, n, o) {
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
        }, n.p = "", n(n.s = "./packages/platform/runtime/runtime.jsx")
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
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, t, n) {
            "use strict";

            function o(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
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
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function r(e) {
                return function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || Object(o.a)(e) || function n() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            n.d(t, "a", function() {
                return r
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
        "./node_modules/react-dom/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-dom/index.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/api/api.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/api/api.jsx")
        },
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/global/global.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/global/global.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/imports/imports.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/imports/imports.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/common/state/state.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/platform/runtime/runtime.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                r = n("./node_modules/react/index.js"),
                a = n.n(r),
                i = n("./node_modules/react-dom/index.js"),
                s = n("./node_modules/react-redux/es/index.js"),
                c = n("./packages/common/api/api.jsx"),
                u = n("@ta/common.error-handling"),
                l = n("./packages/common/features/features.jsx"),
                m = n("./packages/common/global/global.jsx"),
                d = n("./packages/common/i18n/i18n.jsx"),
                f = n("./packages/common/imports/imports.jsx"),
                p = n("./packages/common/logging/logging.jsx"),
                b = n.n(p),
                g = n("./packages/common/routing/routing.jsx"),
                j = n("./packages/common/state/state.jsx"),
                y = n("./packages/common/tracking/tracking.jsx"),
                h = n.n(y),
                O = n("@ta/page-manifest"),
                x = n.n(O),
                _ = n("@ta/platform.import"),
                v = n.n(_);
            n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"), n("./node_modules/@babel/runtime/helpers/esm/createClass.js"), n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"), n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"), n("./node_modules/@babel/runtime/helpers/esm/inherits.js"), n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"), n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"), a.a.PureComponent, n.d(t, "importBundle", function() {
                return S
            }), n.d(t, "createRoot", function() {
                return B
            }), n.d(t, "destroyRoot", function() {
                return R
            }), n.d(t, "hydrateRoot", function() {
                return z
            }), n.d(t, "pageManifestComponents", function() {
                return q
            }), Object(p.start)("Components Initialization"), Object(p.start)("Components Bundle Load");
            var k = {};
            x.a.bundles.forEach(function(e) {
                k[e] = new Promise(function(t) {
                    require([e], t)
                })
            }), Promise.all(Object.values(k)).then(function() {
                Object(p.end)("Components Bundle Load")
            });
            var w = {};
            x.a.assets.forEach(function(e) {
                w[e] = Promise.resolve(!0)
            }), Object(d.loadMessages)(x.a.messages), Object(l.loadFeatures)(x.a.features);
            var E = Object(j.initializeStore)(x.a.redux),
                P = E.getState().auth.csrfToken,
                C = new m.DummyCache;
            x.a.apolloCache && C.restore(x.a.apolloCache);
            var A = Object(m.buildClient)(C, P);
            window.__APOLLO_CLIENT__ = A;
            var S = function e(t) {
                    var n = Object(l.featureIsEnabled)("authoritative_components_service") ? "/assets/" : "/components/dist/";
                    return t in k || (k[t] = fetch("/data/1.0/bundle?name=".concat(t), {
                        credentials: "same-origin"
                    }).then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        return Object(d.loadMessages)(e.messages), Object(l.loadFeatures)(e.features), Promise.all([].concat(Object(o.a)(e.css.map(function(e) {
                            return e in w || (w[e] = Object(f.importCss)(e.startsWith("/") ? e : "".concat(n).concat(e))), w[e]
                        })), Object(o.a)(e.js.map(function(e) {
                            return e in w || (w[e] = Object(f.importScript)(e.startsWith("/") ? e : "".concat(n).concat(e))), w[e]
                        }))))
                    }).then(function() {
                        return new Promise(function(e) {
                            return window.require([t], e)
                        })
                    })), k[t]
                },
                I = function e(t) {
                    return a.a.createElement(v.a.Provider, {
                        value: S
                    }, a.a.createElement(u.ErrorBoundary, {
                        store: E
                    }, a.a.createElement(m.Root, {
                        store: E,
                        apolloClient: A
                    }, t)))
                },
                M = a.a.createElement(v.a.Provider, {
                    value: S
                }, a.a.createElement(u.ErrorBoundary, {
                    store: E
                }, a.a.createElement(s.Provider, {
                    store: E
                }, a.a.createElement(g.Router, null, a.a.createElement(g.History, null))))),
                T = "data-component-init";
            Object(p.start)("Loadables"), t.default = new Promise(function(e) {
                require(x.a.lazyLoadedModules, function() {
                    e()
                })
            }).finally(function() {
                Object(p.end)("Loadables"), Object(p.start)("Hydration");
                var e = [];
                return x.a.hydrations.forEach(function(t) {
                    var n = document.getElementById(t.id);
                    null === n || n.getAttribute(T) || (n.setAttribute(T, T), e.push(new Promise(function(e) {
                        require([t.package], function(o) {
                            var r = "Hydrate ".concat(t.package, " ").concat(t.id);
                            Object(p.start)(r), new c.ApiMonitor(E, o.default).stage(), Object(i.hydrate)(I(a.a.createElement(o.default, t.props)), n, function() {
                                Object(p.end)(r), e()
                            })
                        })
                    })))
                }), Promise.all(e)
            }).finally(function() {
                Object(p.end)("Hydration"), Object(j.storeResizeHandler)(), Object(p.start)("Render");
                var e = [];
                x.a.renders.forEach(function(t) {
                    var n = document.getElementById(t.id);
                    null === n || n.getAttribute(T) || (n.setAttribute(T, T), e.push(new Promise(function(e) {
                        require([t.package], function(o) {
                            new c.ApiMonitor(E, o.default).reload();
                            var r = "Render ".concat(t.package, " ").concat(t.id);
                            Object(p.start)(r), Object(i.render)(I(a.a.createElement(o.default, t.props)), n, function() {
                                Object(p.end)(r), e()
                            })
                        })
                    })))
                });
                var t = document.body,
                    n = document.createElement("div");
                n.id = "historyApi", t && (t.appendChild(n), Object(i.render)(M, n)), Promise.all(e).finally(function() {
                    if (Object(p.end)("Render"), Object(p.end)("Components Initialization"), Object(l.featureIsEnabled)("prod_runtime_tracking") && "undefined" != typeof window && window.performance && window.performance.getEntriesByName) {
                        var e = window.performance.getEntriesByName("components-Components Initialization-end", "mark");
                        if (e && e.length > 0) {
                            var t = e[0].startTime;
                            null !== t && h()({
                                module: "runtime",
                                action: "initialization_complete",
                                context: Number(t).toString()
                            })
                        }
                    }
                }), requestIdleCallback(function() {
                    return Object(m.replaceCache)(!0)
                }), requestIdleCallback(function() {
                    return Object(p.defineSentry)(S)
                })
            });
            var B = function e(t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = document.getElementById(t);
                    null !== r ? r.getAttribute(T) || (r.setAttribute(T, T), require([n], function(e) {
                        new c.ApiMonitor(E, e.default).reload(), Object(i.render)(I(a.a.createElement(e.default, o)), r)
                    })) : b.a.error("Unable to find DOM element with id = ".concat(t))
                },
                R = function e(t) {
                    var n = document.getElementById(t);
                    null !== n && Object(i.unmountComponentAtNode)(n)
                },
                z = function e(t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = document.getElementById(t);
                    null !== r ? r.getAttribute(T) || (r.setAttribute(T, T), require([n], function(e) {
                        new c.ApiMonitor(E, e.default).stage(), Object(i.hydrate)(I(a.a.createElement(e.default, o)), r)
                    })) : b.a.error("Unable to find DOM element with id = ".concat(t))
                },
                q = x.a.hydrations.concat(x.a.renders).reduce(function(e, t) {
                    return e[t.id] = t.props, e
                }, {})
        },
        "@ta/common.error-handling": function(t, n) {
            t.exports = e
        },
        "@ta/page-manifest": function(e, n) {
            e.exports = t
        },
        "@ta/platform.import": function(e, t) {
            e.exports = n
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = o
        }
    })
});
//# sourceMappingURL=platform.runtime.3f9ee9fec8.js.map