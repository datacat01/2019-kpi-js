define("@ta/memx.google-onetap", ["@ta/common.sessionstorage", "@ta/social.onboarding-state", "@ta/social.onboarding-utils", "@ta/common.global"], function(e, o, t, n) {
    return function(e) {
        var o = {};

        function t(n) {
            if (o[n]) return o[n].exports;
            var r = o[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        return t.m = e, t.c = o, t.d = function(e, o, n) {
            t.o(e, o) || Object.defineProperty(e, o, {
                enumerable: !0,
                get: n
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, o) {
            if (1 & o && (e = t(e)), 8 & o) return e;
            if (4 & o && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (t.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & o && "string" != typeof e)
                for (var r in e) t.d(n, r, function(o) {
                    return e[o]
                }.bind(null, r));
            return n
        }, t.n = function(e) {
            var o = e && e.__esModule ? function o() {
                return e.default
            } : function o() {
                return e
            };
            return t.d(o, "a", o), o
        }, t.o = function(e, o) {
            return Object.prototype.hasOwnProperty.call(e, o)
        }, t.p = "", t(t.s = "./packages/memx/google-onetap/GoogleOneTapController.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, o, t) {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, o, t) {
            "use strict";

            function n(e, o) {
                if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, o, t) {
            "use strict";

            function n(e, o) {
                for (var t = 0; t < o.length; t++) {
                    var n = o[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function r(e, o, t) {
                return o && n(e.prototype, o), t && n(e, t), e
            }
            t.d(o, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, o, t) {
            "use strict";

            function n(e, o, t) {
                return o in e ? Object.defineProperty(e, o, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = t, e
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, o, t) {
            "use strict";

            function n(e) {
                return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function e(o) {
                    return o.__proto__ || Object.getPrototypeOf(o)
                })(e)
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, o, t) {
            "use strict";
            t.d(o, "a", function() {
                return r
            });
            var n = t("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, o) {
                if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(o && o.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), o && Object(n.a)(e, o)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, o, t) {
            "use strict";
            t.d(o, "a", function() {
                return a
            });
            var n = t("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function a(e, o) {
                return !o || "object" !== Object(n.a)(o) && "function" != typeof o ? Object(r.a)(e) : o
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, o, t) {
            "use strict";

            function n(e, o) {
                return (n = Object.setPrototypeOf || function e(o, t) {
                    return o.__proto__ = t, o
                })(e, o)
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, o, t) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(o) {
                    return typeof o
                } : function e(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
                })(e)
            }

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function e(o) {
                    return n(o)
                } : function e(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : n(o)
                })(e)
            }
            t.d(o, "a", function() {
                return r
            })
        },
        "./node_modules/react-redux/es/index.js": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/api/api.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/api/api.jsx")
        },
        "./packages/common/features/features.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/memx/google-onetap/GoogleOneTapController.jsx": function(e, o, t) {
            "use strict";
            t.r(o);
            var n = t("./node_modules/react/index.js"),
                r = t("@ta/social.onboarding-utils"),
                a = t("@ta/social.onboarding-state"),
                s = t("./packages/common/api/api.jsx"),
                i = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                u = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                p = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                m = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                d = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                f = t("./node_modules/react-redux/es/index.js"),
                g = t("./packages/common/features/features.jsx"),
                b = t("./packages/common/logging/logging.jsx"),
                y = t.n(b),
                h = t("@ta/common.sessionstorage"),
                j = t.n(h),
                v = t("./packages/common/tracking/tracking.jsx"),
                O = t.n(v),
                _ = 40185,
                k = "googleOneTapTime";

            function x(e, o) {
                O()({
                    module: "GoogleOneTap",
                    action: e,
                    context: "".concat(e.replace(/^google_onetap_/, ""), "_").concat(o || "unknown"),
                    value: _
                })
            }
            var w = function(e) {
                    function o() {
                        var e, t;
                        Object(i.a)(this, o);
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return t = Object(u.a)(this, (e = Object(c.a)(o)).call.apply(e, [this].concat(r))), Object(d.a)(Object(m.a)(Object(m.a)(t)), "onGoogleYoloLoad", function(e) {
                            return t.googleyolo = e,
                                function o() {
                                    j.a.set(k, (new Date).getTime())
                                }(), t.hint()
                        }), Object(d.a)(Object(m.a)(Object(m.a)(t)), "googleyolo", void 0), t
                    }
                    return Object(p.a)(o, e), Object(l.a)(o, [{
                        key: "componentDidMount",
                        value: function e() {
                            var t = this;
                            this.props.isMember || o.isQualtricsEnabled().then(function(e) {
                                e || t.setupGoogleOneTap()
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function e(o) {
                            !o.isMember && this.props.isMember && (window.onGoogleYoloLoad = void 0, this.googleyolo && this.googleyolo.cancelLastOperation())
                        }
                    }, {
                        key: "setupGoogleOneTap",
                        value: function e() {
                            o.shouldHint() && (Object(g.featureIsEnabled)("google_onetap_web_component") ? (o.loadGoogleJavascript(), window.onGoogleYoloLoad = this.onGoogleYoloLoad) : x("google_onetap_control", this.props.servlet))
                        }
                    }, {
                        key: "hint",
                        value: function e() {
                            var o = this;
                            return x("google_onetap_requested", this.props.servlet), this.googleyolo.hint({
                                supportedAuthMethods: ["https://accounts.google.com"],
                                supportedIdTokenProviders: [{
                                    uri: "https://accounts.google.com",
                                    clientId: "1070328450902.apps.googleusercontent.com"
                                }]
                            }).then(function(e) {
                                e.idToken && (x("google_onetap_selected", o.props.servlet), o.showRegOverlay(e))
                            }, function(e) {
                                switch (e.type) {
                                    case "userCanceled":
                                        ! function t() {
                                            j.a.set("googleOneTapDismissed", (new Date).getTime())
                                        }(), x("google_onetap_closed", o.props.servlet);
                                        break;
                                    case "noCredentialsAvailable":
                                        x("google_onetap_no_credentials", o.props.servlet);
                                        break;
                                    case "requestFailed":
                                    case "operationCanceled":
                                    case "illegalConcurrentRequest":
                                    case "initializationError":
                                    case "configurationError":
                                    default:
                                        x("google_onetap_unknown_error", o.props.servlet),
                                            function n(e) {
                                                y.a.warn("Unknown error processing Google onetap hint request - type, message: ".concat(e.type, ", ").concat(e.message))
                                            }(e)
                                }
                            })
                        }
                    }, {
                        key: "showRegOverlay",
                        value: function e(o) {
                            var t = this;
                            window.require(["ta/registration/RegOverlay"], function(e) {
                                var n = "MOBILE" === t.props.viewportCategory;
                                e.showRegOverlay(null, null, n, {
                                    flow: "GOOGLE_ONETAP",
                                    pid: _,
                                    userRequestedForce: "true",
                                    extraQueryParams: {
                                        google_id_token: o.idToken
                                    },
                                    displayOnShowOverlay: !0,
                                    onSuccess: function e(o) {
                                        o && o.user_id && "Home" === t.props.servlet && t.props.setShouldFire(!1, "GOOGLE_ONETAP")
                                    }
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }], [{
                        key: "shouldHint",
                        value: function e() {
                            return ! function o() {
                                var e = j.a.get("googleOneTapDismissed");
                                return void 0 !== e && e + 864e5 > (new Date).getTime()
                            }() && ! function t() {
                                var e = j.a.get(k);
                                return void 0 !== e && e + 18e4 > (new Date).getTime()
                            }()
                        }
                    }, {
                        key: "isQualtricsEnabled",
                        value: function e() {
                            return new Promise(function(e) {
                                Object(g.featureIsEnabled)("qualtrics_surveys_any") && window.require(["ta/support/Qualtrics"], function(o) {
                                    e(o.seenThisPageView() || o.canDisplaySmart() || o.canDisplay())
                                }), e(!1)
                            })
                        }
                    }, {
                        key: "loadGoogleJavascript",
                        value: function e() {
                            var o = document;
                            if (null === o.getElementById("google-smartlock-api-js")) {
                                var t = o.createElement("script");
                                t.id = "google-smartlock-api-js", t.src = "https://smartlock.google.com/client", t.async = !0, null != o.body && o.body.appendChild(t)
                            }
                        }
                    }]), o
                }(n.Component),
                T = Object(f.connect)(function(e) {
                    return {
                        isMember: e.auth.isMember,
                        servlet: e.meta.initialServletName,
                        viewportCategory: e.meta.device.viewportCategory
                    }
                }, {
                    setShouldFire: a.ACTIONS.setShouldFire
                })(w);
            o.default = Object(s.bind)(function(e, o) {
                var t = o("/data/1.0/onboarding/shown");
                return function() {
                    var o = t.get().data;
                    return {
                        isMember: e.auth.isMember,
                        servlet: e.meta.initialServletName,
                        viewportCategory: e.meta.device.viewportCategory,
                        entryPoint: Object(a.getState)(e).entryPoint,
                        cachedCookieFound: o ? o.seen : null
                    }
                }
            })(function e(o) {
                return o.isMember ? null : "Home" !== o.servlet || function t(e, o, n, a) {
                    return Object(r.isOnboardingDisabledThroughFeature)(e, o, n) || null !== a && a
                }(o.entryPoint, o.viewportCategory, o.servlet, o.cachedCookieFound) ? n.createElement(T, null) : null
            })
        },
        "@ta/common.sessionstorage": function(o, t) {
            o.exports = e
        },
        "@ta/social.onboarding-state": function(e, t) {
            e.exports = o
        },
        "@ta/social.onboarding-utils": function(e, o) {
            e.exports = t
        },
        "dll-reference @ta/common.global": function(e, o) {
            e.exports = n
        }
    })
});
//# sourceMappingURL=memx.google-onetap.ec47a6b601.js.map