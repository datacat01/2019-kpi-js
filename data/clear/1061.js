define("@ta/social.onboarding-controller", ["@ta/common.client", "@ta/common.localstorage", "@ta/overlays.managers", "@ta/overlays.modal", "@ta/platform.import", "@ta/social.educational-tooltips", "@ta/social.onboarding-state", "@ta/social.onboarding-utils", "@ta/social.suggested-followees", "@ta/styleguide.loading", "@ta/tracking.interactions", "@ta/common.global"], function(e, t, n, o, a, r, i, s, l, c, d, u) {
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
        }, n.p = "", n(n.s = "./packages/social/onboarding-controller/OnboardingController.jsx")
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
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
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
        "./packages/common/classnames/classnames.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/throttle/throttle.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/events/window-scroll/WindowScroll.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = n("./node_modules/react/index.js"),
                u = n("./packages/common/throttle/throttle.jsx"),
                m = n.n(u),
                p = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var a = arguments.length, s = new Array(a), d = 0; d < a; d++) s[d] = arguments[d];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(s))), Object(c.a)(Object(l.a)(Object(l.a)(n)), "handleScroll", n.props.throttle ? m()(function() {
                            n.props.callback()
                        }, n.props.throttle, n.props.useDebounce) : n.props.callback), n
                    }
                    return Object(s.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            window.addEventListener("scroll", this.handleScroll, this.props.useCapture), window.addEventListener("resize", this.handleScroll, this.props.useCapture)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            this.disableListeners()
                        }
                    }, {
                        key: "disableListeners",
                        value: function e() {
                            window.removeEventListener("scroll", this.handleScroll, this.props.useCapture), window.removeEventListener("resize", this.handleScroll, this.props.useCapture)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(d.Component);
            Object(c.a)(p, "defaultProps", {
                throttle: 200,
                useDebounce: !1,
                useCapture: !1
            })
        },
        "./packages/social/feed/feedFragments/HometownFields.fragment.gql": function(e, t, n) {
            "use strict";
            var o = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "HometownFields"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "MemberLocation"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "locationId"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "fallbackString"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "location"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "locationId"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "additionalNames"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "long"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "parent"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "locationId"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "name"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 203
                }
            };
            o.loc.source = {
                body: "cd3d893a1d20"
            }, t.a = o
        },
        "./packages/social/onboarding-controller/OnboardingController.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = n("./node_modules/react/index.js"),
                u = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                m = n("./packages/common/api/api.jsx"),
                p = n("./packages/common/tracking/tracking.jsx"),
                b = n.n(p),
                g = n("@ta/common.localstorage"),
                f = n.n(g),
                O = n("./packages/events/window-scroll/WindowScroll.jsx"),
                h = n("@ta/social.educational-tooltips"),
                v = n("@ta/social.onboarding-state"),
                k = n("@ta/social.onboarding-utils"),
                j = n("./node_modules/react-redux/es/index.js"),
                C = n("@ta/common.client"),
                w = n("./packages/common/logging/logging.jsx"),
                y = n.n(w),
                _ = n("./packages/common/features/features.jsx"),
                S = n("@ta/styleguide.loading"),
                F = n("@ta/platform.import"),
                N = n("@ta/tracking.interactions"),
                E = n("@ta/social.suggested-followees"),
                I = n("@ta/overlays.managers"),
                A = Object(F.deferredImport)("@ta/social.confirm-username", "ConfirmUsername"),
                x = Object(F.deferredImport)("@ta/social.onboarding", "SplashScreen"),
                T = Object(F.deferredImport)("@ta/social.onboarding", "ChooseHometown"),
                M = Object(F.deferredImport)("@ta/social.onboarding", "SuggestedFollows"),
                L = Object(F.deferredImport)("@ta/social.onboarding", "FacebookConnect"),
                D = Object(F.deferredImport)("@ta/social.onboarding", "SuggestedFacebookFollows"),
                P = Object(F.deferredImport)("@ta/social.onboarding", "AllSet"),
                R = function e(t) {
                    var n = t.userData,
                        o = t.facebookConnected,
                        a = t.card,
                        r = t.onCardComplete,
                        i = t.onSkip,
                        s = t.trackingModule,
                        l = t.openRegOverlay,
                        c = t.endFlow,
                        u = t.isLoggedIn,
                        m = t.userMadeChanges,
                        p = t.isInitialScreen;
                    switch (a) {
                        case W:
                            return d.createElement(x, {
                                onComplete: u ? r : l,
                                trackingModule: s
                            });
                        case q:
                            return d.createElement(I.Closer, null, function(e) {
                                return d.createElement(A, {
                                    onComplete: r,
                                    trackingModule: s,
                                    closerForError: function t() {
                                        c(e)
                                    }
                                })
                            });
                        case z:
                            var b = n && n.hometown && n.hometown.location && n.hometown.location.additionalNames && n.hometown.location.additionalNames.long;
                            return d.createElement(T, {
                                onComplete: r,
                                currentHometown: b,
                                trackingModule: s
                            });
                        case Q:
                            return d.createElement(N.FollowTabTypeContext.Provider, {
                                value: {
                                    tabType: "SUGGESTED_FOR_YOU"
                                }
                            }, d.createElement(M, {
                                onComplete: r,
                                trackingModule: s,
                                isInitialScreen: p
                            }));
                        case Y:
                            return d.createElement(N.FollowTabTypeContext.Provider, {
                                value: {
                                    tabType: "FACEBOOK_FRIENDS"
                                }
                            }, d.createElement(L, {
                                onComplete: r,
                                onSkip: i,
                                facebookConnected: o,
                                trackingModule: s
                            }));
                        case X:
                            return d.createElement(E.ValidatedFacebookToken, {
                                callback: r,
                                trackingModule: s,
                                isOnboarding: !0
                            }, d.createElement(D, {
                                onComplete: r,
                                trackingModule: s
                            }));
                        case Z:
                            return d.createElement(I.Closer, null, function(e) {
                                return d.createElement(P, {
                                    photo: n.avatar,
                                    displayName: n.displayName,
                                    onComplete: function t() {
                                        c(e)
                                    },
                                    trackingModule: s,
                                    userHasInteracted: m
                                })
                            });
                        default:
                            return y.a.error("OnboardingModal: No case provided for current screen type: ".concat(a)), c(), null
                    }
                },
                U = n("./packages/common/classnames/classnames.jsx"),
                B = n.n(U),
                G = n("@ta/overlays.modal"),
                H = {
                    onboardingContainer: "social-onboarding-controller-ModalContainer__onboardingContainer--32952",
                    namescreen: "social-onboarding-controller-ModalContainer__namescreen--1-QRb",
                    hometownscreen: "social-onboarding-controller-ModalContainer__hometownscreen--akQdw",
                    facebookconnectscreen: "social-onboarding-controller-ModalContainer__facebookconnectscreen--1ksut",
                    Allsetscreen: "social-onboarding-controller-ModalContainer__Allsetscreen--11REF",
                    followscreen_brand: "social-onboarding-controller-ModalContainer__followscreen_brand--16qZQ",
                    followscreen_facebook: "social-onboarding-controller-ModalContainer__followscreen_facebook--39tYa",
                    placeholder: "social-onboarding-controller-ModalContainer__placeholder--17k3L",
                    valuepropscreen: "social-onboarding-controller-ModalContainer__valuepropscreen--2FABO"
                },
                K = function e(t) {
                    var n = t.onCloseAttempt,
                        o = t.disableFullscreenOnMobile,
                        a = t.allowsClose,
                        r = t.closeXColor,
                        i = t.card,
                        s = t.children,
                        l = {
                            name: "onboarding-interstitial",
                            isFullBleed: !0,
                            onClose: n,
                            disableFullscreenOnMobile: o,
                            closeXColorVariant: r,
                            closeX: a
                        };
                    return d.createElement(d.Fragment, null, d.createElement(I.Opener, {
                        name: "onboarding-interstitial"
                    }, function(e) {
                        return e(), null
                    }), d.createElement(G.Modal, l, d.createElement("div", {
                        className: B()(H.onboardingContainer, H[i])
                    }, s)))
                };
            K.defaultProps = {
                allowsClose: !1,
                disableFullscreenOnMobile: !1,
                onCloseAttempt: function e() {},
                closeXColor: void 0
            };
            var V = K,
                W = "valuepropscreen",
                q = "namescreen",
                z = "hometownscreen",
                Q = "followscreen_brand",
                X = "followscreen_facebook",
                Y = "facebookconnectscreen",
                Z = "Allsetscreen",
                J = [W, q, z, Q, Y, X, Z],
                $ = [q, z, Q, Y, X, Z],
                ee = [Q, Y, X, Z],
                te = {
                    UNKNOWN: "Social_onboarding_unknown",
                    DEFAULT: "Social_onboarding_default",
                    BRAND_EDUCATOR: "Social_onboarding_brandedu",
                    MASTHEAD: "Social_onboarding_masthead",
                    FOLLOW_ACTION: "Social_onboarding_follow_action",
                    LIKE_ACTION: "Social_onboarding_like_action",
                    REPOST_ACTION: "Social_onboarding_repost_action",
                    SAVE_ACTION: "Social_onboarding_save_action",
                    GOOGLE_ONETAP: "Social_onboarding_googleonetap",
                    FACEBOOK_ENGAGEMENT_CARD: "Social_onboarding_fb_engagement_card"
                },
                ne = {
                    UNKNOWN: J,
                    DEFAULT: J,
                    BRAND_EDUCATOR: $,
                    MASTHEAD: $,
                    FOLLOW_ACTION: ee,
                    LIKE_ACTION: ee,
                    REPOST_ACTION: ee,
                    SAVE_ACTION: ee,
                    GOOGLE_ONETAP: $,
                    FACEBOOK_ENGAGEMENT_CARD: [q, X, Z]
                },
                oe = Object(F.deferredImport)("@ta/social.onboarding", "SplashScreen"),
                ae = !0,
                re = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(r.a)(this, Object(i.a)(t).call(this, e)), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onCloseAttempt", function() {
                            n.screenAllowsClose() && (b()({
                                module: te[n.props.firedFrom],
                                action: "".concat(n.state.flow[n.state.screen], "_close"),
                                context: n.userIsLoggedIn() ? "logged_in" : "logged_out"
                            }), n.disableModal(), n.props.onClose && n.props.onClose())
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onRegOverlayComplete", function(e) {
                            if (n.userIsLoggedIn()) {
                                ae = !0, n.incrementFlow(!1);
                                var t = e && (e.hasCreatedMember || !e.hasAcceptedTermsOfUse);
                                n.state.showLoading !== t && n.setState({
                                    showLoading: t
                                })
                            }
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onRegOverlayClose", function(e) {
                            void 0 !== e.trigger ? (n.disableModal(), n.props.onClose && n.props.onClose()) : n.state.waiting && n.setState({
                                waiting: !1
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "openRegOverlay", function() {
                            n.state.waiting || n.setState({
                                waiting: !0
                            }), window.require(["ta/registration/RegOverlay"], function(e) {
                                var t = "MOBILE" === n.props.viewportCategory;
                                e.showRegOverlay(null, null, t, {
                                    flow: "CORE_COMBINED",
                                    pid: 40463,
                                    userRequestedForce: "true",
                                    extraQueryParams: {
                                        social: "true"
                                    },
                                    onSuccess: function e(t) {
                                        n.onRegOverlayComplete(t)
                                    },
                                    onClose: function e(t) {
                                        n.onRegOverlayClose(t)
                                    }
                                })
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "userIsLoggedIn", function() {
                            return null !== n.props.loggedInUserId
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "screenAllowsClose", function() {
                            switch (ne[n.props.firedFrom]) {
                                case J:
                                    return n.state.flow[n.state.screen] === W;
                                case ee:
                                    return n.state.flow[n.state.screen] === Q || n.state.flow[n.state.screen] === Z && "Home" !== n.props.servlet;
                                case $:
                                    return n.state.flow[n.state.screen] === Z && "Home" !== n.props.servlet;
                                default:
                                    return !1
                            }
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "increment", function() {
                            n.setState({
                                screen: n.state.screen + 1
                            }, function() {
                                n.setUpCurrentFlow()
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "incrementTwice", function() {
                            n.setState({
                                screen: n.state.screen + 2
                            }, function() {
                                n.setUpCurrentFlow()
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "incrementFlow", function(e) {
                            e && !n.state.userMadeChanges && n.setState({
                                userMadeChanges: !0
                            }), n.increment()
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "endFlow", function(e) {
                            n.disableModal(), e && e(), n.props.onFlowEnd && n.props.onFlowEnd(n.state.userMadeChanges)
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "disableModal", function() {
                            n.state.disabled || n.setState({
                                disabled: !0
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "seenOnboarding", function(e) {
                            if (ae = !1, null === e) return !1;
                            switch (n.props.firedFrom) {
                                case "DEFAULT":
                                case "UNKNOWN":
                                    return n.userIsLoggedIn() ? e.states.find(function(e) {
                                        return "ONBOARDING_CONFIRM_USER" === e.id && "COMPLETED" === e.state
                                    }) : e.states.find(function(e) {
                                        return "ONBOARDING_SPLASH" === e.id
                                    });
                                case "MASTHEAD":
                                case "BRAND_EDUCATOR":
                                case "GOOGLE_ONETAP":
                                    return e.states.find(function(e) {
                                        return "ONBOARDING_CONFIRM_USER" === e.id && "COMPLETED" === e.state
                                    });
                                case "FOLLOW_ACTION":
                                case "LIKE_ACTION":
                                case "REPOST_ACTION":
                                case "SAVE_ACTION":
                                    return e.states.find(function(e) {
                                        return "ONBOARDING_FOLLOW" === e.id
                                    });
                                case "FACEBOOK_ENGAGEMENT_CARD":
                                    return !1;
                                default:
                                    return y.a.error("Unexpected flow state in onboarding, this should never happen."), !0
                            }
                        }), n.state = {
                            disabled: e.readOnly,
                            waiting: !1,
                            showLoading: e.immediateLoad,
                            screen: 0,
                            userMadeChanges: !1,
                            flow: ne[e.firedFrom]
                        }, ae = !0, n
                    }
                    return Object(s.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            Object(_.featureIsEnabled)("suggested_facebook_connections") || this.setState({
                                flow: this.state.flow.filter(function(e) {
                                    return e !== X
                                })
                            }), this.setUpCurrentFlow()
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function e(t) {
                            return this.props.firedFrom !== t.firedFrom && (this.setState({
                                disabled: !1,
                                waiting: !1,
                                showLoading: t.immediateLoad,
                                screen: 0,
                                userMadeChanges: !1,
                                flow: ne[t.firedFrom]
                            }), ae = !0), !0
                        }
                    }, {
                        key: "setUpCurrentFlow",
                        value: function e() {
                            this.state.screen >= this.state.flow.length && this.endFlow()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            if (this.state.disabled || this.state.waiting || this.props.readOnly) return null;
                            var t = this.props,
                                n = t.loading,
                                o = t.data,
                                a = t.firedFrom;
                            if (n) return this.state.showLoading ? d.createElement(V, {
                                card: "placeholder"
                            }, d.createElement(S.LoadingSpinner, null)) : null;
                            if (this.userIsLoggedIn() && (!o || !o.memberProfiles || !o.memberProfiles[0])) return null;
                            var r = o && o.memberProfiles && o.memberProfiles[0],
                                i = o && o.myExternallyConnectedAccountTypes && o.myExternallyConnectedAccountTypes.includes("FACEBOOK"),
                                s = o && o.insightProfile,
                                l = this.state.flow[this.state.screen] === Z,
                                c = this.state.flow[this.state.screen] === W || this.state.flow[this.state.screen] === Z ? "WHITE" : void 0,
                                u = 0 === this.state.screen;
                            if (s) {
                                var m = s.uiCardsState;
                                if (ae && this.seenOnboarding(m)) return b()({
                                    module: te[a],
                                    action: "".concat(this.state.flow[this.state.screen], "_notshown"),
                                    context: this.userIsLoggedIn() ? "logged_in" : "logged_out"
                                }), this.disableModal(), this.props.onDisable && this.props.onDisable(), null
                            }
                            return "Home" === this.props.servlet && this.state.flow[this.state.screen] === W && "MOBILE" === this.props.viewportCategory ? d.createElement(oe, {
                                onComplete: this.userIsLoggedIn() ? this.incrementFlow : this.openRegOverlay,
                                trackingModule: te[a]
                            }) : d.createElement(C.ClientOnly, null, d.createElement(N.TrackingNamespaceContext.Provider, {
                                value: {
                                    namespace: "onboarding"
                                }
                            }, d.createElement(N.OnboardingTrackingContext.Provider, {
                                value: {
                                    userId: this.props.loggedInUserId,
                                    uid: this.props.uid
                                }
                            }, d.createElement(V, {
                                onCloseAttempt: this.onCloseAttempt,
                                disableFullscreenOnMobile: l,
                                allowsClose: this.screenAllowsClose(),
                                closeXColor: c,
                                card: this.state.flow[this.state.screen]
                            }, d.createElement(R, {
                                card: this.state.flow[this.state.screen],
                                userData: r,
                                facebookConnected: i,
                                isLoggedIn: this.userIsLoggedIn(),
                                onCardComplete: this.incrementFlow,
                                openRegOverlay: this.openRegOverlay,
                                isInitialScreen: u,
                                endFlow: this.endFlow,
                                trackingModule: te[a],
                                userMadeChanges: this.state.userMadeChanges,
                                onSkip: this.incrementTwice
                            })))))
                        }
                    }]), t
                }(d.Component);
            Object(c.a)(re, "defaultProps", {
                onClose: void 0,
                onFlowEnd: void 0,
                onDisable: void 0
            });
            var ie = Object(j.connect)(function(e) {
                    return {
                        loggedInUserId: e.auth.loggedInUserId,
                        viewportCategory: e.meta.device.viewportCategory,
                        uid: e.tracking.uid,
                        readOnly: e.meta.readonlyMode,
                        servlet: e.meta.initialServletName
                    }
                })(re),
                se = n("./packages/social/feed/feedFragments/HometownFields.fragment.gql"),
                le = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "OnboardingProfile"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "loggedIn"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Boolean"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "memberProfiles"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "userIds"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "userId"
                                                    }
                                                }
                                            }]
                                        }]
                                    }
                                }],
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
                                            value: "avatar"
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
                                                    value: "photoSizes"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "displayName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "username"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hometown"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "HometownFields"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "myExternallyConnectedAccountTypes"
                                },
                                arguments: [],
                                directives: [{
                                    kind: "Directive",
                                    name: {
                                        kind: "Name",
                                        value: "include"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "if"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "loggedIn"
                                            }
                                        }
                                    }]
                                }]
                            }, {
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 533
                    }
                };
            le.loc.source = {
                body: "db3c37e81623"
            };
            var ce = {};
            le.definitions = le.definitions.concat(function de(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !ce[t] && (ce[t] = !0, !0)
                })
            }(se.a.definitions));
            var ue = le;
            n.d(t, "OnboardingController", function() {
                return ge
            });
            var me = null,
                pe = 750,
                be = ["MASTHEAD", "DEFAULT", "BRAND_EDUCATOR", "FACEBOOK_ENGAGEMENT_CARD", "UNKNOWN"],
                ge = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(r.a)(this, Object(i.a)(t).call(this, e)), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onFlowEnd", function(e) {
                            n.allowsPageRefresh() && e ? (f.a.set(h.OnboardingCompleteReload, !0), window.location.reload()) : (n.setState({
                                disabled: !0
                            }), n.props.onboardingDone())
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onClose", function() {
                            n.setState({
                                disabled: !0
                            }), n.props.onboardingDone()
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onDisable", function() {
                            return n.setState({
                                disabled: !0
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "onScroll", function() {
                            me + pe < window.pageYOffset && n.setState({
                                waitForScroll: !1
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "entryPointRequiresScrollToFire", function() {
                            return k.ScrollEntrypoints.includes(n.props.entryPoint)
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "allowsPageRefresh", function() {
                            return n.isHome() && be.includes(n.state.firedFrom)
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "allowsLaunchOnPageLoad", function() {
                            return n.isHome()
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "isHome", function() {
                            return "Home" === n.props.servlet
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "userIsLoggedIn", function() {
                            return null !== n.props.loggedInUserId
                        }), n.state = {
                            disabled: Object(k.isOnboardingDisabledThroughFeature)(n.props.entryPoint, n.props.viewportCategory, n.props.servlet) || null !== e.cachedCookieFound && e.cachedCookieFound,
                            waitForSignal: !0,
                            waitForScroll: !1,
                            firedFrom: "DEFAULT"
                        }, n
                    }
                    return Object(s.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            if (this.allowsLaunchOnPageLoad()) {
                                if (b()({
                                        module: te[this.state.firedFrom],
                                        action: "onboarding_onmount",
                                        context: this.userIsLoggedIn() ? "logged_in" : "logged_out"
                                    }), this.state.disabled) return void b()({
                                    module: te[this.state.firedFrom],
                                    action: "valuepropscreen_notshown",
                                    context: this.userIsLoggedIn() ? "logged_in" : "logged_out"
                                });
                                this.setState({
                                    waitForSignal: !1
                                })
                            }
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function e(t) {
                            return null === this.props.cachedCookieFound && t.cachedCookieFound && this.setState({
                                disabled: !0
                            }), !0
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function e(t) {
                            t.shouldFire || !this.props.shouldFire || Object(k.isOnboardingDisabledThroughFeature)(this.props.entryPoint, this.props.viewportCategory, this.props.servlet) || (this.setState({
                                disabled: !1,
                                waitForSignal: !1,
                                waitForScroll: this.entryPointRequiresScrollToFire(),
                                firedFrom: this.props.entryPoint
                            }), this.entryPointRequiresScrollToFire() && (me = window.pageYOffset))
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return this.state.disabled || this.state.waitForSignal || this.props.readOnly || null === this.props.cachedCookieFound ? null : this.state.waitForScroll ? d.createElement(O.a, {
                                callback: this.onScroll,
                                throttle: 600
                            }) : d.createElement(u.Query, {
                                query: ue,
                                variables: {
                                    userId: this.props.loggedInUserId,
                                    loggedIn: this.userIsLoggedIn()
                                },
                                errorPolicy: "all"
                            }, function(e) {
                                var n = e.loading,
                                    o = e.data;
                                return d.createElement(ie, {
                                    firedFrom: t.state.firedFrom,
                                    onFlowEnd: t.onFlowEnd,
                                    onClose: t.onClose,
                                    onDisable: t.onDisable,
                                    immediateLoad: t.props.immediateLoad,
                                    loading: n,
                                    data: o
                                })
                            })
                        }
                    }]), t
                }(d.Component);
            t.default = Object(m.bind)({
                data: function e(t, n) {
                    var o = n("/data/1.0/onboarding/shown");
                    return function() {
                        var e = o.get().data;
                        return {
                            loggedInUserId: t.auth.loggedInUserId,
                            viewportCategory: t.meta.device.viewportCategory,
                            shouldFire: Object(v.getState)(t).shouldFire,
                            immediateLoad: Object(v.getState)(t).immediateLoad,
                            entryPoint: Object(v.getState)(t).entryPoint,
                            cachedCookieFound: e ? e.seen : null,
                            readOnly: t.meta.readonlyMode,
                            servlet: t.meta.initialServletName
                        }
                    }
                },
                actions: {
                    onboardingDone: h.ACTIONS.onboardingDone
                }
            })(ge)
        },
        "@ta/common.client": function(t, n) {
            t.exports = e
        },
        "@ta/common.localstorage": function(e, n) {
            e.exports = t
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = n
        },
        "@ta/overlays.modal": function(e, t) {
            e.exports = o
        },
        "@ta/platform.import": function(e, t) {
            e.exports = a
        },
        "@ta/social.educational-tooltips": function(e, t) {
            e.exports = r
        },
        "@ta/social.onboarding-state": function(e, t) {
            e.exports = i
        },
        "@ta/social.onboarding-utils": function(e, t) {
            e.exports = s
        },
        "@ta/social.suggested-followees": function(e, t) {
            e.exports = l
        },
        "@ta/styleguide.loading": function(e, t) {
            e.exports = c
        },
        "@ta/tracking.interactions": function(e, t) {
            e.exports = d
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = u
        }
    })
});
//# sourceMappingURL=social.onboarding-controller.00f6759c52.js.map