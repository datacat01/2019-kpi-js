define("@ta/social.follow", ["@ta/common.text", "@ta/overlays.toast", "@ta/social.blocks", "@ta/social.feed", "@ta/social.login-gate", "@ta/social.onboarding-state", "@ta/styleguide.button", "@ta/styleguide.icon", "@ta/tracking.interactions", "@ta/common.global"], function(e, o, t, n, l, a, r, i, s, c) {
    return function(e) {
        var o = {};

        function t(n) {
            if (o[n]) return o[n].exports;
            var l = o[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(l.exports, l, l.exports, t), l.l = !0, l.exports
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
                for (var l in e) t.d(n, l, function(o) {
                    return e[o]
                }.bind(null, l));
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
        }, t.p = "", t(t.s = "./packages/social/follow/FollowButton.jsx")
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

            function l(e, o, t) {
                return o && n(e.prototype, o), t && n(e, t), e
            }
            t.d(o, "a", function() {
                return l
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
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, o, t) {
            "use strict";

            function n() {
                return (n = Object.assign || function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var t = arguments[o];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
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
                return l
            });
            var n = t("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function l(e, o) {
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
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, o, t) {
            "use strict";
            t.d(o, "a", function() {
                return l
            });
            var n = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function l(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t = null != arguments[o] ? arguments[o] : {},
                        l = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), l.forEach(function(o) {
                        Object(n.a)(e, o, t[o])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": function(e, o, t) {
            "use strict";

            function n(e, o) {
                if (null == e) return {};
                var t, n, l = function a(e, o) {
                    if (null == e) return {};
                    var t, n, l = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) t = a[n], o.indexOf(t) >= 0 || (l[t] = e[t]);
                    return l
                }(e, o);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) t = r[n], o.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
                }
                return l
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, o, t) {
            "use strict";
            t.d(o, "a", function() {
                return a
            });
            var n = t("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function a(e, o) {
                return !o || "object" !== Object(n.a)(o) && "function" != typeof o ? Object(l.a)(e) : o
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

            function l(e) {
                return (l = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function e(o) {
                    return n(o)
                } : function e(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : n(o)
                })(e)
            }
            t.d(o, "a", function() {
                return l
            })
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/features/features.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/social/follow/FollowButton.jsx": function(e, o, t) {
            "use strict";
            t.r(o);
            var n = t("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                i = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                u = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                d = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                m = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                p = t("./node_modules/react/index.js"),
                f = t("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                b = t("./node_modules/react-redux/es/index.js"),
                g = t("./packages/common/classnames/classnames.jsx"),
                j = t.n(g),
                y = t("@ta/common.text"),
                O = t("./packages/common/features/features.jsx"),
                v = t("./packages/common/i18n/i18n.jsx"),
                w = t("@ta/styleguide.icon"),
                _ = t("@ta/overlays.toast"),
                k = t("@ta/social.blocks"),
                F = t("@ta/styleguide.button"),
                h = t.n(F),
                x = t("@ta/social.feed"),
                T = t("@ta/social.login-gate"),
                N = t("@ta/tracking.interactions"),
                I = t("@ta/social.onboarding-state"),
                C = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "Follow"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "objectId"
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
                                    value: "objectType"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "SocialObjectTypeInput"
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "addFollow"
                                },
                                name: {
                                    kind: "Name",
                                    value: "addFollowV2"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "socialObject"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "objectType"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "objectType"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "objectId"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "objectId"
                                                }
                                            }
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
                                            value: "statusType"
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
                        end: 185
                    }
                };
            C.loc.source = {
                body: "e19608ddd468"
            };
            var S = C,
                P = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "deleteFollow"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "objectId"
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
                                    value: "objectType"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "SocialObjectTypeInput"
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
                                alias: {
                                    kind: "Name",
                                    value: "deleteFollow"
                                },
                                name: {
                                    kind: "Name",
                                    value: "deleteFollowV2"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "socialObject"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "objectType"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "objectType"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "objectId"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "objectId"
                                                }
                                            }
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
                                            value: "statusType"
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
                        end: 198
                    }
                };
            P.loc.source = {
                body: "83cba7467087"
            };
            var E = P,
                M = {
                    icon: "social-follow-FollowButton__icon--pEoHb",
                    text: "social-follow-FollowButton__text--3sO-x",
                    text_section: "social-follow-FollowButton__text_section--1vN8d",
                    icon_text: "social-follow-FollowButton__icon_text--1tiBM",
                    active: "social-follow-FollowButton__active--3b_MD",
                    followee_display_name: "social-follow-FollowButton__followee_display_name--QUE40",
                    verified: "social-follow-FollowButton__verified--2_2lT"
                },
                V = function e(o) {
                    var t = o.children;
                    return p.createElement(N.InteractionLogger, null, function(e) {
                        return p.createElement(N.FollowTabTypeContext.Consumer, null, function(o) {
                            return p.createElement(N.FollowPlacementContext.Consumer, null, function(n) {
                                return p.createElement(N.RecommendedFolloweesImpressionIdContext.Consumer, null, function(l) {
                                    return t(function t(a, r, i) {
                                        var s = {
                                            followeeId: i
                                        };
                                        n && Object.assign(s, n), o && Object.assign(s, o), l && Object.assign(s, l), e(a, r, s)
                                    })
                                })
                            })
                        })
                    })
                },
                D = function(e) {
                    function o() {
                        var e, t;
                        Object(r.a)(this, o);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return t = Object(s.a)(this, (e = Object(c.a)(o)).call.apply(e, [this].concat(l))), Object(m.a)(Object(d.a)(Object(d.a)(t)), "toggleFollow", function() {
                            t.props.loginGate().then(function() {
                                t.props.profile.isFollowing ? t.props.unfollow(Object(a.a)({}, t.props)).then(function(e) {
                                    var o, n;
                                    e.error || t.props.disableToast || ("NO_PERMISSION" === (null == e ? void 0 : null === (o = e.data) || void 0 === o ? void 0 : null === (n = o.deleteFollow) || void 0 === n ? void 0 : n.statusType) ? t.props.launchToast(t.blockedToast) : t.props.onActionComplete && t.props.onActionComplete("UNFOLLOW"))
                                }) : t.props.follow(Object(a.a)({}, t.props)).then(function(e) {
                                    var o;
                                    e.error || (t.props.disableToast || ("NO_PERMISSION" === (null == e ? void 0 : null === (o = e.data) || void 0 === o ? void 0 : o.addFollow.statusType) ? t.props.launchToast(t.blockedToast) : (t.props.onActionComplete && t.props.onActionComplete("FOLLOW"), t.props.launchToast(t.toast))), t.props.attemptOnboarding && t.props.setFireOnboarding(!1, "FOLLOW_ACTION"))
                                })
                            })
                        }), Object(m.a)(Object(d.a)(Object(d.a)(t)), "toastDisplayNameClass", j()(M.followee_display_name, Object(m.a)({}, M.verified, t.props.profile.isVerified))), Object(m.a)(Object(d.a)(Object(d.a)(t)), "toast", {
                            iconName: "add-friend-fill",
                            node: Object(v.unescaped)(Object(v.localize)("social_follow_toast_message", {
                                sDisplayNameClass: t.toastDisplayNameClass,
                                sDisplayName: Object(y.EscapeHtml)(t.props.profile.displayName)
                            })),
                            actionText: Object(v.localize)("social_unfollow"),
                            actionCallback: t.toggleFollow
                        }), Object(m.a)(Object(d.a)(Object(d.a)(t)), "blockedToast", {
                            node: p.createElement(k.NoPermissionToast, null)
                        }), Object(m.a)(Object(d.a)(Object(d.a)(t)), "toggleAndClick", function(e) {
                            t.props.profile.isFollowing ? t.props.onToggleFollow && t.props.onToggleFollow("UNFOLLOW") : t.props.onToggleFollow && t.props.onToggleFollow("FOLLOW"), t.toggleFollow(), t.props.onClick && t.props.onClick(e)
                        }), t
                    }
                    return Object(u.a)(o, e), Object(i.a)(o, [{
                        key: "render",
                        value: function e() {
                            var o = this,
                                t = this.props,
                                a = t.displayType,
                                r = t.profile,
                                i = (t.loggedInUserId, t.follow, t.unfollow, t.launchToast, t.loginGate, t.disableToast, t.onToggleFollow, t.onActionComplete, t.attemptOnboarding, t.setFireOnboarding, Object(l.a)(t, ["displayType", "profile", "loggedInUserId", "follow", "unfollow", "launchToast", "loginGate", "disableToast", "onToggleFollow", "onActionComplete", "attemptOnboarding", "setFireOnboarding"])),
                                s = r.isFollowing ? "unfollow" : "follow";
                            return "plain" === a ? p.createElement(V, null, function(e) {
                                return p.createElement("span", {
                                    onClick: function t(n) {
                                        e(n, s, r.userId), o.toggleAndClick(n)
                                    }
                                }, r.isFollowing ? Object(v.localize)("social_unfollow") : Object(v.localize)("social_Follow"))
                            }) : "icon+text" === a ? p.createElement(V, null, function(e) {
                                return p.createElement("span", {
                                    className: j()(M.icon_text, Object(m.a)({}, M.active, r.isFollowing)),
                                    onClick: function t(n) {
                                        e(n, s, r.userId), o.toggleAndClick(n)
                                    }
                                }, p.createElement(w.Icon, {
                                    name: "add-friend-fill",
                                    className: M.icon
                                }), p.createElement("span", {
                                    className: j()("ui_link", M.text)
                                }, r.isFollowing ? Object(v.localize)("social_nowFollowing") : Object(v.localize)("social_Follow")))
                            }) : p.createElement(V, null, function(e) {
                                return p.createElement(h.a, Object(n.a)({}, i, {
                                    type: o.props.profile.isFollowing ? "primary" : "secondary",
                                    onClick: function t(n) {
                                        e(n, s, r.userId), o.toggleAndClick(n)
                                    }
                                }), p.createElement("span", {
                                    className: M.text_section
                                }, "button+icon" === a && p.createElement(w.Icon, {
                                    className: M.icon,
                                    name: "add-friend-fill"
                                }), p.createElement("span", {
                                    className: "button+icon" === a ? M.text : null
                                }, o.props.profile.isFollowing ? Object(v.localize)("social_nowFollowing") : Object(v.localize)("social_Follow"))))
                            })
                        }
                    }]), o
                }(p.Component);
            Object(m.a)(D, "defaultProps", {
                size: "fullwidth",
                displayType: "button",
                disableToast: !1,
                onToggleFollow: void 0,
                attemptOnboarding: !0
            });
            var A = Object(f.compose)(Object(b.connect)(function(e) {
                return {
                    loggedInUserId: e.auth.loggedInUserId
                }
            }, {
                setFireOnboarding: I.ACTIONS.setShouldFire
            }), Object(f.graphql)(S, {
                props: function e(o) {
                    var t = o.mutate;
                    return {
                        follow: function e(o) {
                            var n = o.profile,
                                l = o.loggedInUserId;
                            return t({
                                variables: {
                                    objectType: "MEMBER",
                                    objectId: n.userId,
                                    loggedInUserId: l
                                },
                                update: function e(o, t) {
                                    var a, r = t.data;
                                    if ("OK" === (null == r ? void 0 : null === (a = r.addFollow) || void 0 === a ? void 0 : a.statusType)) {
                                        var i = n.followerCount,
                                            s = void 0 === i ? 0 : i;
                                        o.writeFragment({
                                            id: "MemberProfile:".concat(n.userId),
                                            fragment: x.FollowerFragment,
                                            data: {
                                                id: n.userId,
                                                isFollowing: !0,
                                                followerCount: s + 1,
                                                __typename: "MemberProfile"
                                            }
                                        });
                                        var c = o.readFragment({
                                            id: "MemberProfile:".concat(l),
                                            fragment: x.MemberFolloweeCountFragment
                                        });
                                        c && o.writeFragment({
                                            id: "MemberProfile:".concat(l),
                                            fragment: x.MemberFolloweeCountFragment,
                                            data: {
                                                id: l,
                                                followeeCount: c.followeeCount + 1,
                                                __typename: "MemberProfile"
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    }
                }
            }), Object(f.graphql)(E, {
                props: function e(o) {
                    var t = o.mutate;
                    return {
                        unfollow: function e(o) {
                            var n = o.profile,
                                l = o.loggedInUserId;
                            return t({
                                variables: {
                                    objectType: "MEMBER",
                                    objectId: n.userId,
                                    loggedInUserId: l
                                },
                                update: function e(o, t) {
                                    var a, r = t.data;
                                    if ("OK" === (null == r ? void 0 : null === (a = r.deleteFollow) || void 0 === a ? void 0 : a.statusType)) {
                                        var i = n.followerCount,
                                            s = void 0 === i ? 1 : i;
                                        o.writeFragment({
                                            id: "MemberProfile:".concat(n.userId),
                                            fragment: x.FollowerFragment,
                                            data: {
                                                id: n.userId,
                                                isFollowing: !1,
                                                followerCount: s - 1,
                                                __typename: "MemberProfile"
                                            }
                                        });
                                        try {
                                            var c = o.readFragment({
                                                id: "MemberProfile:".concat(l),
                                                fragment: x.MemberFolloweeCountFragment
                                            });
                                            c && c.followeeCount > 0 && o.writeFragment({
                                                id: "MemberProfile:".concat(l),
                                                fragment: x.MemberFolloweeCountFragment,
                                                data: {
                                                    id: l,
                                                    followeeCount: c.followeeCount - 1,
                                                    __typename: "MemberProfile"
                                                }
                                            })
                                        } catch (e) {}
                                    }
                                }
                            })
                        }
                    }
                }
            }))(function e(o) {
                return p.createElement(p.Fragment, null, Object(O.featureIsEnabled)("social_follow_enabled") && p.createElement(_.Toaster, null, function(e) {
                    return p.createElement(T.SocialLoginGate, {
                        pid: 40473
                    }, function(t) {
                        return p.createElement(D, Object(n.a)({
                            launchToast: e,
                            loginGate: t
                        }, o))
                    })
                }))
            });
            o.default = A
        },
        "@ta/common.text": function(o, t) {
            o.exports = e
        },
        "@ta/overlays.toast": function(e, t) {
            e.exports = o
        },
        "@ta/social.blocks": function(e, o) {
            e.exports = t
        },
        "@ta/social.feed": function(e, o) {
            e.exports = n
        },
        "@ta/social.login-gate": function(e, o) {
            e.exports = l
        },
        "@ta/social.onboarding-state": function(e, o) {
            e.exports = a
        },
        "@ta/styleguide.button": function(e, o) {
            e.exports = r
        },
        "@ta/styleguide.icon": function(e, o) {
            e.exports = i
        },
        "@ta/tracking.interactions": function(e, o) {
            e.exports = s
        },
        "dll-reference @ta/common.global": function(e, o) {
            e.exports = c
        }
    })
});
//# sourceMappingURL=social.follow.d385ec29ba.js.map