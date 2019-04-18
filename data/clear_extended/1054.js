define("@ta/social.engagement-card", ["@ta/media.upload", "@ta/overlays.managers", "@ta/social.login-gate", "@ta/social.onboarding", "@ta/social.onboarding-state", "@ta/styleguide.button", "@ta/styleguide.icon", "@ta/tracking.interactions", "@ta/common.global"], function(e, t, n, o, a, r, i, s, c) {
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
        }, n.p = "", n(n.s = "./packages/social/engagement-card/index.jsx")
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
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
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
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/social/common/FacebookConnectButton.jsx": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = n("./node_modules/react/index.js"),
                m = n("./node_modules/react-redux/es/index.js"),
                p = n("@ta/styleguide.icon"),
                b = n("./packages/common/classnames/classnames.jsx"),
                f = n.n(b),
                g = n("./packages/common/i18n/i18n.jsx"),
                y = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, r = new Array(o), c = 0; c < o; c++) r[c] = arguments[c];
                        return n = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(r))), Object(u.a)(Object(l.a)(Object(l.a)(n)), "onClick", function(e) {
                            n.connectToFB(), n.props.onClick && n.props.onClick(e)
                        }), Object(u.a)(Object(l.a)(Object(l.a)(n)), "connectToFB", function() {
                            require(["trjs!ta/registration/FB"], function(e) {
                                e.showLogin(function(e, t) {
                                    window.require(["ta/registration/RegOverlay"], function(o) {
                                        var a = "MOBILE" === n.props.viewportCategory;
                                        o.showRegOverlay(null, null, a, {
                                            flow: "FACEBOOK_CONNECT",
                                            pid: 40466,
                                            userRequestedForce: "true",
                                            extraQueryParams: {
                                                token: e.accessToken,
                                                expires: t,
                                                social: "true"
                                            },
                                            onClose: function e() {
                                                n.props.onClose && n.props.onClose()
                                            }
                                        })
                                    })
                                }, function() {
                                    n.props.onFbAuthFailure && n.props.onFbAuthFailure()
                                })
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            require(["trjs!ta/registration/FB"], function(e) {})
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return d.createElement(d.Fragment, null, d.createElement("div", {
                                id: "fb_context_data",
                                className: "hidden",
                                "data-ta-server-time": this.props.taServerTime,
                                "data-app-id": this.props.facebookConnectAppId,
                                "data-skip-session-check": this.props.skipFacebookSessionCheck,
                                "data-api-version": this.props.apiVersion
                            }), d.createElement("div", {
                                id: "fb_sdk_url",
                                "data-url": this.props.sdkUrl
                            }), d.createElement("div", {
                                className: "social-common-FacebookConnectButton__buttonContainer--3kUl4"
                            }, d.createElement("button", {
                                className: f()("ui_button", {
                                    fullwidth: this.props.fullwidth
                                }, "social-common-FacebookConnectButton__facebook_ui_button--2xwMr"),
                                onClick: this.onClick
                            }, d.createElement(p.Icon, {
                                className: "social-common-FacebookConnectButton__icon--O1t2W",
                                name: "facebook"
                            }), d.createElement("span", null, Object(g.localize)("reg_continue_w_face")))))
                        }
                    }]), t
                }(d.Component);
            Object(u.a)(y, "defaultProps", {
                onClose: void 0,
                onClick: void 0,
                onFbAuthFailure: void 0,
                fullwidth: !1
            }), t.a = Object(m.connect)(function(e, t) {
                return Object(o.a)({
                    taServerTime: e.auth.fbApi.taServerTime,
                    facebookConnectAppId: e.auth.fbApi.facebookConnectAppId,
                    skipFacebookSessionCheck: e.auth.fbApi.skipFacebookSessionCheck,
                    apiVersion: e.auth.fbApi.apiVersion,
                    sdkUrl: e.auth.fbApi.sdkUrl,
                    viewportCategory: e.meta.device.viewportCategory
                }, t)
            })(y)
        },
        "./packages/social/engagement-card/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                r = n("@ta/tracking.interactions"),
                i = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                d = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                m = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                p = n("./node_modules/react-redux/es/index.js"),
                b = n("@ta/styleguide.button"),
                f = n.n(b),
                g = n("./packages/social/common/FacebookConnectButton.jsx"),
                y = n("@ta/overlays.managers"),
                j = n("@ta/media.upload"),
                _ = n("./packages/common/features/features.jsx"),
                h = n("@ta/social.onboarding"),
                k = n("@ta/social.onboarding-state"),
                O = n("@ta/social.login-gate"),
                v = Object(p.connect)(function() {
                    return {}
                }, {
                    setFireOnboarding: k.ACTIONS.setShouldFire
                })(function e(t) {
                    return o.createElement("div", {
                        className: "social-engagement-card-BrandEducatorCard__card--6WpAA"
                    }, o.createElement("div", {
                        className: "social-engagement-card-BrandEducatorCard__message--2tC3g"
                    }, t.message), o.createElement("div", {
                        className: "social-engagement-card-BrandEducatorCard__cta--31K_N"
                    }, o.createElement(O.AuthGated, {
                        pid: 40464
                    }, function(e) {
                        return o.createElement(f.a, {
                            type: "secondary",
                            onClick: function n(o) {
                                t.onClick(o), e().then(function(e) {
                                    var n = e && (e.hasCreatedMember || !e.hasAcceptedTermsOfUse);
                                    t.setFireOnboarding(n, "BRAND_EDUCATOR")
                                })
                            }
                        }, t.ctaText)
                    })))
                }),
                C = !1,
                E = function e(t) {
                    var n = t.cardType,
                        r = t.actionText,
                        i = t.logInteraction,
                        s = t.dismissCard,
                        c = t.fireOnboarding;
                    switch (n) {
                        case "CONNECT_TO_FACEBOOK":
                            return o.createElement("div", {
                                className: "social-engagement-card-EngagementCard__button_container--3_be5"
                            }, o.createElement(a.Query, {
                                query: h.ExternallyConnectedQuery
                            }, function(e) {
                                var t = e.loading,
                                    n = e.data,
                                    a = e.refetch;
                                return t || !n ? null : n && n.myExternallyConnectedAccountTypes && n.myExternallyConnectedAccountTypes.includes("FACEBOOK") ? (C && c(!0, "FACEBOOK_ENGAGEMENT_CARD"), s(), null) : o.createElement(g.a, {
                                    onClick: function e(t) {
                                        i(t, "feedClick")
                                    },
                                    onClose: function e() {
                                        C = !0, a()
                                    }
                                })
                            }));
                        case "ADD_PHOTO":
                            return o.createElement("div", {
                                className: "social-engagement-card-EngagementCard__button_container--3_be5"
                            }, o.createElement(y.Opener, {
                                name: "photo-upload"
                            }, function(e) {
                                return o.createElement(f.a, {
                                    size: "default",
                                    type: "primary",
                                    onClick: function t(n) {
                                        i(n, "feedClick"), e()
                                    }
                                }, r)
                            }), o.createElement(j.MediaUploaderModal, {
                                modalName: "photo-upload",
                                mediaType: "photo",
                                linkUploaderModalName: "link-uploader"
                            }));
                        default:
                            return null
                    }
                },
                x = function(e) {
                    function t(e) {
                        var n;
                        return Object(i.a)(this, t), n = Object(c.a)(this, Object(l.a)(t).call(this, e)), Object(m.a)(Object(d.a)(Object(d.a)(n)), "cardIsEnabled", function() {
                            return n.props.userId && Object(_.featureIsEnabled)("show_engagement_card_in_home_feed_for_login_user")
                        }), Object(m.a)(Object(d.a)(Object(d.a)(n)), "dismiss", function() {
                            n.setState({
                                dismissed: !0
                            })
                        }), n.state = {
                            dismissed: !1
                        }, n
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.cardIsEnabled() && this.props.updateInsightProfile({
                                variables: {
                                    cardId: this.props.cardType,
                                    cardAction: "SHOW"
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = this.props,
                                a = n.cardType,
                                r = n.title,
                                i = n.description,
                                s = n.actionText,
                                c = n.userId,
                                l = n.logInteraction,
                                u = n.updateInsightProfile,
                                d = n.setFireOnboarding;
                            if (this.state.dismissed) return null;
                            switch (a) {
                                case "LOG_IN":
                                    if (!c) return o.createElement(v, {
                                        onClick: function e(t) {
                                            return l(t, "feedClick")
                                        },
                                        message: i,
                                        ctaText: s
                                    });
                                    break;
                                case "CONNECT_TO_FACEBOOK":
                                case "ADD_PHOTO":
                                    if (this.cardIsEnabled()) return o.createElement("div", {
                                        className: "social-engagement-card-EngagementCard__card--2zaH_"
                                    }, o.createElement("div", {
                                        className: "social-engagement-card-EngagementCard__cardContent--1D-j4"
                                    }, o.createElement("div", {
                                        className: "social-engagement-card-EngagementCard__title--bqxmw"
                                    }, r), o.createElement("div", {
                                        className: "social-engagement-card-EngagementCard__description--2HUzZ"
                                    }, i), o.createElement(E, {
                                        cardType: a,
                                        actionText: s,
                                        logInteraction: l,
                                        dismissCard: this.dismiss,
                                        fireOnboarding: d
                                    })), o.createElement("span", {
                                        className: "".concat("social-engagement-card-EngagementCard__closeIcon--6jWNp", " ui_icon times"),
                                        onClick: function e(n) {
                                            l(n, "dismiss"), u({
                                                variables: {
                                                    cardId: a,
                                                    cardAction: "DISMISS"
                                                }
                                            }), t.dismiss()
                                        }
                                    }));
                                    break;
                                default:
                                    return null
                            }
                            return null
                        }
                    }]), t
                }(o.Component),
                N = Object(p.connect)(function(e) {
                    return {
                        userId: e.auth.loggedInUserId
                    }
                }, {
                    setFireOnboarding: k.ACTIONS.setShouldFire
                })(x),
                T = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "updateInsightProfile"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "cardId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CardTypeEnumInput"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "cardAction"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ActionTypeEnumInput"
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
                                    value: "updateInsightProfile"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "request"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "profile"
                                            },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [{
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "uiCardActions"
                                                    },
                                                    value: {
                                                        kind: "ListValue",
                                                        values: [{
                                                            kind: "ObjectValue",
                                                            fields: [{
                                                                kind: "ObjectField",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "cardId"
                                                                },
                                                                value: {
                                                                    kind: "Variable",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "cardId"
                                                                    }
                                                                }
                                                            }, {
                                                                kind: "ObjectField",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "cardAction"
                                                                },
                                                                value: {
                                                                    kind: "Variable",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "cardAction"
                                                                    }
                                                                }
                                                            }]
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 218
                    }
                };
            T.loc.source = {
                body: "9d574469461a"
            };
            var I = T,
                A = function e(t) {
                    var n = t.cardType,
                        i = t.description,
                        s = t.actionText,
                        c = t.title;
                    return o.createElement(r.InteractionLogger, null, function(e) {
                        return o.createElement(a.Mutation, {
                            mutation: I
                        }, function(t) {
                            return o.createElement(N, {
                                cardType: n,
                                description: i,
                                actionText: s,
                                logInteraction: e,
                                updateInsightProfile: t,
                                title: c
                            })
                        })
                    })
                };
            n.d(t, "EngagementCard", function() {
                return A
            }), n.d(t, "BrandEducatorCard", function() {
                return v
            })
        },
        "@ta/media.upload": function(t, n) {
            t.exports = e
        },
        "@ta/overlays.managers": function(e, n) {
            e.exports = t
        },
        "@ta/social.login-gate": function(e, t) {
            e.exports = n
        },
        "@ta/social.onboarding": function(e, t) {
            e.exports = o
        },
        "@ta/social.onboarding-state": function(e, t) {
            e.exports = a
        },
        "@ta/styleguide.button": function(e, t) {
            e.exports = r
        },
        "@ta/styleguide.icon": function(e, t) {
            e.exports = i
        },
        "@ta/tracking.interactions": function(e, t) {
            e.exports = s
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = c
        }
    })
});
//# sourceMappingURL=social.engagement-card.989ba98deb.js.map