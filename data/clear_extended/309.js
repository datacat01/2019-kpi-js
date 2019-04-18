define("@ta/social.login-gate", ["@ta/common.webview", "@ta/overlays.fullscreen-overlay", "@ta/overlays.managers", "@ta/overlays.pieces", "@ta/platform.import", "@ta/social.failover", "@ta/tracking.interactions", "@ta/common.global"], function(e, t, n, r, o, a, s, l) {
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
        }, n.p = "", n(n.s = "./packages/social/login-gate/index.jsx")
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
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./node_modules/webpack/buildin/global.js": function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        },
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/events/keyboard-event-listener/KeyboardEventListener.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(a.a)(this, Object(s.a)(t).call(this, e)), Object(c.a)(Object(i.a)(Object(i.a)(n)), "keyNames", void 0), Object(c.a)(Object(i.a)(Object(i.a)(n)), "handleEvent", function(e) {
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
            Object(c.a)(u, "defaultProps", {
                eventType: "keydown"
            })
        },
        "./packages/social/login-gate/AuthGated.jsx": function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                    o = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                    a = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                    s = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                    l = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                    i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                    c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                    u = n("./node_modules/react/index.js"),
                    m = n("./node_modules/react-redux/es/index.js"),
                    d = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                    f = n("@ta/common.webview"),
                    p = n("@ta/tracking.interactions"),
                    b = function(t) {
                        function n() {
                            return Object(a.a)(this, n), Object(l.a)(this, Object(i.a)(n).apply(this, arguments))
                        }
                        return Object(c.a)(n, t), Object(s.a)(n, [{
                            key: "formatInteraction",
                            value: function e(t) {
                                var n = this.props.tracking;
                                return n ? {
                                    variables: {
                                        interaction: Object(r.a)({}, n.source, Object(r.a)({}, t, Object(o.a)({
                                            element: n.element
                                        }, n.attributes || {})))
                                    }
                                } : null
                            }
                        }, {
                            key: "renderInner",
                            value: function t(n) {
                                var r = this.props,
                                    o = r.loggedInUserId,
                                    a = r.pid,
                                    s = r.flowOrigin,
                                    l = r.flow,
                                    i = r.extraQueryParams,
                                    c = r.onClose;
                                return (0, r.children)(function t(r) {
                                    return new Promise(function(t) {
                                        if (o) t();
                                        else if (f.NativeBridge.isNativeWebview()) f.NativeBridge.showRegistration(!1);
                                        else {
                                            var u = {
                                                flow: l || "CORE_COMBINED",
                                                pid: r || a || -1,
                                                userRequestedForce: !0,
                                                extraQueryParams: i || {},
                                                locationId: window.require("page-model").GEO_ID,
                                                onSuccess: function e(r) {
                                                    n("modalSuccess"), t(r)
                                                },
                                                onClose: c
                                            };
                                            s && (u.extraQueryParams.flowOrigin = s), e.require(["trjs!ta/registration/RegOverlay"], function(e) {
                                                n("elementClick"), e.showRegOverlayByPageModel(null, null, window.require("page-model"), u)
                                            })
                                        }
                                    })
                                }, o)
                            }
                        }, {
                            key: "render",
                            value: function e() {
                                var t = this;
                                return u.createElement(d.Mutation, {
                                    mutation: p.LogInteractionV4
                                }, function(e) {
                                    return t.renderInner(function n(r) {
                                        var o = t.formatInteraction(r);
                                        o && e(o)
                                    })
                                })
                            }
                        }]), n
                    }(u.Component);
                t.a = Object(m.connect)(function(e) {
                    return {
                        loggedInUserId: e.auth.loggedInUserId
                    }
                })(b)
            }).call(this, n("./node_modules/webpack/buildin/global.js"))
        },
        "./packages/social/login-gate/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = n("./node_modules/react/index.js"),
                m = n("./node_modules/react-redux/es/index.js"),
                d = n("./packages/common/features/features.jsx"),
                f = n("@ta/social.failover"),
                p = n("./packages/social/login-gate/AuthGated.jsx"),
                b = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                y = n("./packages/common/logging/logging.jsx"),
                v = n.n(y),
                O = n("@ta/overlays.fullscreen-overlay"),
                g = n.n(O),
                j = n("@ta/overlays.managers"),
                h = n("@ta/overlays.pieces"),
                _ = n("@ta/platform.import"),
                k = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "TermsOverlay"
                        },
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "insightProfile"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "uiCardsState"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "states"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "state"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "getTermOfUseAcceptanceInfo"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "accepted"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 167
                    }
                };
            k.loc.source = {
                body: "34460b78ddd8"
            };
            var S = k,
                w = {
                    position: {
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }
                },
                E = Object(_.deferredImport)("@ta/social.confirm-username", "ConfirmUsername"),
                x = function e(t) {
                    var n = t.onComplete,
                        r = t.children;
                    return u.createElement(b.Query, {
                        query: S
                    }, function(e) {
                        var t = e.loading,
                            o = e.data,
                            a = e.error;
                        if (t) return null;
                        if (o) {
                            var s = o.getTermOfUseAcceptanceInfo && o.getTermOfUseAcceptanceInfo.accepted,
                                l = o.insightProfile && o.insightProfile.uiCardsState;
                            return s && l && function e(t) {
                                return t.states.find(function(e) {
                                    return "ONBOARDING_CONFIRM_USER" === e.id && "COMPLETED" === e.state
                                })
                            }(l) ? (n(), null) : r
                        }
                        return a && v.a.warn("Error in SkipIfCompleted query: ".concat(a)), v.a.warn("TermsOfUseOverlay was shown due to lack of sufficient information or a query error."), r
                    })
                },
                C = function e(t) {
                    var n = function e(n) {
                            return u.createElement("div", {
                                className: "social-login-gate-TermsOfUseOverlay__container--2SESV"
                            }, u.createElement("div", {
                                className: "social-login-gate-TermsOfUseOverlay__bodyContent--3eGDZ"
                            }, u.createElement(E, {
                                onComplete: t.onComplete,
                                closerForError: n,
                                trackingModule: "Social_onboarding_gatedaction"
                            })))
                        },
                        r = function e() {
                            return u.createElement(j.Closer, null, function(e) {
                                var r = function n() {
                                    e(), t.onClose && t.onClose()
                                };
                                return t.fullscreen ? u.createElement(u.Fragment, null, u.createElement(g.a, null, n(r))) : u.createElement(u.Fragment, null, u.createElement(h.BlockScroll, null), u.createElement(h.Backdrop, {
                                    close: function e() {}
                                }, u.createElement(h.Overlay, w, n(r))))
                            })
                        };
                    return t.forceTermsOfUse ? u.createElement(r, null) : u.createElement(x, {
                        onComplete: t.onComplete
                    }, u.createElement(r, null))
                };
            C.defaultProps = {
                fullscreen: !1,
                onClose: void 0,
                forceTermsOfUse: !1
            };
            var P = Object(m.connect)(function(e, t) {
                    return {
                        fullscreen: t.fullscreenAlways || "MOBILE" === e.meta.device.viewportCategory
                    }
                })(C),
                T = n("./packages/events/keyboard-event-listener/KeyboardEventListener.jsx"),
                I = {
                    position: {
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }
                },
                U = function e(t) {
                    var n = u.createElement("div", {
                        className: "social-login-gate-ReadonlyMessageOverlay__container--1l9mx"
                    }, u.createElement("div", {
                        className: "social-login-gate-ReadonlyMessageOverlay__bodyContent--1bBv0"
                    }, t.children), u.createElement(h.CloseX, {
                        close: t.closer
                    }));
                    return t.fullscreen ? u.createElement(u.Fragment, null, u.createElement(g.a, null, n)) : u.createElement(u.Fragment, null, u.createElement(h.BlockScroll, null), u.createElement(h.Backdrop, {
                        close: t.closer
                    }, u.createElement(h.Overlay, I, n), u.createElement(T.a, {
                        keyName: "Escape",
                        callback: t.closer
                    })))
                };
            U.defaultProps = {
                fullscreen: !1
            };
            var N = Object(m.connect)(function(e, t) {
                    return {
                        fullscreen: t.fullscreenAlways || "MOBILE" === e.meta.device.viewportCategory
                    }
                })(U),
                R = function(e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var o = arguments.length, l = new Array(o), u = 0; u < o; u++) l[u] = arguments[u];
                        return n = Object(a.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(l))), Object(c.a)(Object(i.a)(Object(i.a)(n)), "state", {
                            openTermsOfUseOverlay: !1,
                            onSuccess: function e() {},
                            forceTermsOfUse: !1,
                            openReadonlyOverlay: !1
                        }), Object(c.a)(Object(i.a)(Object(i.a)(n)), "closeTermsOfUseOverlay", function() {
                            n.setState({
                                openTermsOfUseOverlay: !1,
                                onSuccess: function e() {}
                            })
                        }), Object(c.a)(Object(i.a)(Object(i.a)(n)), "openReadonlyOverlay", function() {
                            n.setState({
                                openReadonlyOverlay: !0
                            })
                        }), Object(c.a)(Object(i.a)(Object(i.a)(n)), "closeReadonlyOverlay", function() {
                            n.setState({
                                openReadonlyOverlay: !1
                            })
                        }), n
                    }
                    return Object(l.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = this.props,
                                r = n.pid,
                                o = n.flowOrigin,
                                a = n.children,
                                s = n.onClose,
                                l = n.onLoginSuccess,
                                i = n.tracking,
                                c = n.isReadonlyMode;
                            return u.createElement(p.a, {
                                pid: r,
                                flowOrigin: o,
                                extraQueryParams: {
                                    social: !0
                                },
                                onClose: s,
                                tracking: i
                            }, function(e, n) {
                                var r = c ? function e() {
                                    return t.openReadonlyOverlay(), Promise.reject()
                                } : Object(d.featureIsEnabled)("social_2018_login_gate") ? function n(r) {
                                    return e(r).then(function(e) {
                                        l && l();
                                        var n = e && (e.hasCreatedMember || !e.hasAcceptedTermsOfUse);
                                        return e && !n || Object(d.featureIsEnabled)("social_2018_login_gate_skip_terms_of_service") ? Promise.resolve() : new Promise(function(e) {
                                            t.setState({
                                                openTermsOfUseOverlay: !0,
                                                forceTermsOfUse: n,
                                                onSuccess: function n() {
                                                    e(), t.setState({
                                                        openTermsOfUseOverlay: !1,
                                                        onSuccess: function e() {}
                                                    })
                                                }
                                            })
                                        })
                                    })
                                } : function e() {
                                    return Promise.resolve()
                                };
                                return u.createElement(u.Fragment, null, a(r, n), t.state.openTermsOfUseOverlay && u.createElement(P, {
                                    onComplete: t.state.onSuccess,
                                    forceTermsOfUse: t.state.forceTermsOfUse,
                                    onClose: t.closeTermsOfUseOverlay
                                }), t.state.openReadonlyOverlay && u.createElement(N, {
                                    closer: t.closeReadonlyOverlay
                                }, u.createElement(f.FailoverMessage, null)))
                            })
                        }
                    }]), t
                }(u.Component);
            Object(c.a)(R, "defaultProps", {
                pid: -1,
                flowOrigin: void 0,
                tracking: void 0,
                onLoginSuccess: void 0
            });
            var M = Object(m.connect)(function(e) {
                    return {
                        isReadonlyMode: e.meta.readonlyMode
                    }
                })(R),
                F = function e(t) {
                    var n = t.name,
                        r = t.local,
                        o = t.pid,
                        a = t.children;
                    return u.createElement(M, {
                        pid: o
                    }, function(e) {
                        return u.createElement(j.Opener, {
                            name: n,
                            local: r
                        }, function(t, n) {
                            return a(function() {
                                e().then(t)
                            }, n)
                        })
                    })
                };
            F.defaultProps = {
                local: !1,
                pid: void 0
            };
            var A = F;
            n.d(t, "SocialLoginGate", function() {
                return M
            }), n.d(t, "TermsOfUseOverlay", function() {
                return P
            }), n.d(t, "SocialOpener", function() {
                return A
            }), n.d(t, "AuthGated", function() {
                return p.a
            }), n.d(t, "TermsOverlayQuery", function() {
                return S
            })
        },
        "@ta/common.webview": function(t, n) {
            t.exports = e
        },
        "@ta/overlays.fullscreen-overlay": function(e, n) {
            e.exports = t
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = n
        },
        "@ta/overlays.pieces": function(e, t) {
            e.exports = r
        },
        "@ta/platform.import": function(e, t) {
            e.exports = o
        },
        "@ta/social.failover": function(e, t) {
            e.exports = a
        },
        "@ta/tracking.interactions": function(e, t) {
            e.exports = s
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = l
        }
    })
});
//# sourceMappingURL=social.login-gate.e7fd3c1015.js.map