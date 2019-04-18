define("@ta/social.onboarding", ["@ta/common.error-handling", "@ta/common.typeahead", "@ta/list.navigable-list", "@ta/social.confirm-username", "@ta/social.follow", "@ta/social.member-common", "@ta/social.suggested-followees", "@ta/styleguide.avatar", "@ta/styleguide.button", "@ta/styleguide.icon", "@ta/styleguide.loading", "@ta/common.global"], function(e, n, o, t, a, r, l, i, c, s, d, u) {
    return function(e) {
        var n = {};

        function o(t) {
            if (n[t]) return n[t].exports;
            var a = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(a.exports, a, a.exports, o), a.l = !0, a.exports
        }
        return o.m = e, o.c = n, o.d = function(e, n, t) {
            o.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: t
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(e, n) {
            if (1 & n && (e = o(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (o.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var a in e) o.d(t, a, function(n) {
                    return e[n]
                }.bind(null, a));
            return t
        }, o.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return o.d(n, "a", n), n
        }, o.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, o.p = "", o(o.s = "./packages/social/onboarding/index.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, n, o) {
            "use strict";

            function t(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            o.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, n, o) {
            "use strict";

            function t(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            o.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, n, o) {
            "use strict";

            function t(e, n) {
                for (var o = 0; o < n.length; o++) {
                    var t = n[o];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
                }
            }

            function a(e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
            o.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, o) {
            "use strict";

            function t(e, n, o) {
                return n in e ? Object.defineProperty(e, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = o, e
            }
            o.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, n, o) {
            "use strict";

            function t(e) {
                return (t = Object.setPrototypeOf ? Object.getPrototypeOf : function e(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                })(e)
            }
            o.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, n, o) {
            "use strict";
            o.d(n, "a", function() {
                return a
            });
            var t = o("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function a(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), n && Object(t.a)(e, n)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, n, o) {
            "use strict";

            function t(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            o.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, n, o) {
            "use strict";
            o.d(n, "a", function() {
                return a
            });
            var t = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function a(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var o = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(o);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(o, e).enumerable
                    }))), a.forEach(function(n) {
                        Object(t.a)(e, n, o[n])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, n, o) {
            "use strict";
            o.d(n, "a", function() {
                return r
            });
            var t = o("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                a = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function r(e, n) {
                return !n || "object" !== Object(t.a)(n) && "function" != typeof n ? Object(a.a)(e) : n
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, n, o) {
            "use strict";

            function t(e, n) {
                return (t = Object.setPrototypeOf || function e(n, o) {
                    return n.__proto__ = o, n
                })(e, n)
            }
            o.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, n, o) {
            "use strict";
            var t = o("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function a(e) {
                return function n(e) {
                    if (Array.isArray(e)) {
                        for (var n = 0, o = new Array(e.length); n < e.length; n++) o[n] = e[n];
                        return o
                    }
                }(e) || Object(t.a)(e) || function o() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            o.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, n, o) {
            "use strict";

            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(n) {
                    return typeof n
                } : function e(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(e)
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function e(n) {
                    return t(n)
                } : function e(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : t(n)
                })(e)
            }
            o.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/features/features.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/common/throttle/throttle.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/common/timer/Interval.jsx": function(e, n, o) {
            "use strict";
            o.d(n, "a", function() {
                return d
            });
            var t = o("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = o("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = o("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                i = o("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                s = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = function(e) {
                    function n() {
                        var e, o;
                        Object(t.a)(this, n);
                        for (var a = arguments.length, i = new Array(a), d = 0; d < a; d++) i[d] = arguments[d];
                        return o = Object(r.a)(this, (e = Object(l.a)(n)).call.apply(e, [this].concat(i))), Object(s.a)(Object(c.a)(Object(c.a)(o)), "handle", void 0), o
                    }
                    return Object(i.a)(n, e), Object(a.a)(n, [{
                        key: "componentDidMount",
                        value: function e() {
                            var n = this;
                            this.handle = setInterval(function() {
                                return n.props.callback()
                            }, this.props.interval)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            clearInterval(this.handle)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), n
                }(o("./node_modules/react/index.js").Component)
        },
        "./packages/common/timer/Timer.jsx": function(e, n, o) {
            "use strict";
            o.d(n, "a", function() {
                return d
            });
            var t = o("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = o("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = o("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                i = o("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                s = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = function(e) {
                    function n() {
                        var e, o;
                        Object(t.a)(this, n);
                        for (var a = arguments.length, i = new Array(a), d = 0; d < a; d++) i[d] = arguments[d];
                        return o = Object(r.a)(this, (e = Object(l.a)(n)).call.apply(e, [this].concat(i))), Object(s.a)(Object(c.a)(Object(c.a)(o)), "timeStart", void 0), o
                    }
                    return Object(i.a)(n, e), Object(a.a)(n, [{
                        key: "componentDidMount",
                        value: function e() {
                            var n = this;
                            this.timeStart = setTimeout(function() {
                                return n.props.trigger()
                            }, this.props.interval)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            clearTimeout(this.timeStart)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), n
                }(o("./node_modules/react/index.js").Component)
        },
        "./packages/common/tracking/tracking.jsx": function(e, n, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/social/cards/profile-wide/ProfileCardWide.jsx": function(e, n, o) {
            "use strict";
            var t = o("./node_modules/react/index.js"),
                a = o("@ta/styleguide.avatar"),
                r = o("@ta/social.member-common"),
                l = o("@ta/social.follow"),
                i = o.n(l),
                c = o("./packages/common/routing/routing.jsx"),
                s = function e(n) {
                    var o, l = n.profile,
                        s = n.memberInfo,
                        d = n.onFollow,
                        u = n.addProfileLink,
                        m = n.showFacebookIcon,
                        b = t.createElement("div", {
                            className: "ui_card section ".concat("social-cards-profile-wide-ProfileCardWide__card--UEavE")
                        }, t.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__avatar--2hw5s"
                        }, t.createElement(a.Avatar, {
                            photo: l.avatar,
                            size: "large",
                            withBorder: !0
                        })), t.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__info--3X3EI"
                        }, t.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__member_name_container--3dYop"
                        }, t.createElement(r.MemberName, {
                            profile: l,
                            memberInfo: s,
                            addProfileLink: !1,
                            socialConnection: m ? "FACEBOOK" : ""
                        })), t.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__member_stats_container--1jjM1"
                        }, t.createElement(r.MemberStatsBasic, {
                            profile: l
                        })), l.bio && t.createElement("div", {
                            className: "".concat("social-cards-profile-wide-ProfileCardWide__bio_container--xx95E", " ").concat("social-cards-profile-wide-ProfileCardWide__bio--24oC6")
                        }, l.bio), s && s.infoWithMember && t.createElement(r.MemberReasonWhy, {
                            type: s.suggestedFolloweeType,
                            reason: s.infoWithMember.reason,
                            className: "social-cards-profile-wide-ProfileCardWide__reason_why--2lIJ5",
                            singleLine: !0
                        })), !l.isMe && t.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__follow--2Mazt"
                        }, t.createElement(i.a, {
                            profile: l,
                            size: "small",
                            displayType: "button+icon",
                            onClick: function e(n) {
                                return function e(n) {
                                    n.stopPropagation(), n.preventDefault()
                                }(n)
                            },
                            onToggleFollow: d
                        })));
                    return u ? t.createElement(c.Link, {
                        href: null == l ? void 0 : null === (o = l.route) || void 0 === o ? void 0 : o.url
                    }, b) : b
                };
            s.defaultProps = {
                memberInfo: void 0,
                onFollow: void 0,
                addProfileLink: !0,
                showFacebookIcon: !1
            }, n.a = s
        },
        "./packages/social/common/FacebookConnectButton.jsx": function(e, n, o) {
            "use strict";
            var t = o("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                a = o("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                l = o("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = o("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = o("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                d = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = o("./node_modules/react/index.js"),
                m = o("./node_modules/react-redux/es/index.js"),
                b = o("@ta/styleguide.icon"),
                p = o("./packages/common/classnames/classnames.jsx"),
                g = o.n(p),
                f = o("./packages/common/i18n/i18n.jsx"),
                _ = function(e) {
                    function n() {
                        var e, o;
                        Object(a.a)(this, n);
                        for (var t = arguments.length, r = new Array(t), c = 0; c < t; c++) r[c] = arguments[c];
                        return o = Object(l.a)(this, (e = Object(i.a)(n)).call.apply(e, [this].concat(r))), Object(d.a)(Object(s.a)(Object(s.a)(o)), "onClick", function(e) {
                            o.connectToFB(), o.props.onClick && o.props.onClick(e)
                        }), Object(d.a)(Object(s.a)(Object(s.a)(o)), "connectToFB", function() {
                            require(["trjs!ta/registration/FB"], function(e) {
                                e.showLogin(function(e, n) {
                                    window.require(["ta/registration/RegOverlay"], function(t) {
                                        var a = "MOBILE" === o.props.viewportCategory;
                                        t.showRegOverlay(null, null, a, {
                                            flow: "FACEBOOK_CONNECT",
                                            pid: 40466,
                                            userRequestedForce: "true",
                                            extraQueryParams: {
                                                token: e.accessToken,
                                                expires: n,
                                                social: "true"
                                            },
                                            onClose: function e() {
                                                o.props.onClose && o.props.onClose()
                                            }
                                        })
                                    })
                                }, function() {
                                    o.props.onFbAuthFailure && o.props.onFbAuthFailure()
                                })
                            })
                        }), o
                    }
                    return Object(c.a)(n, e), Object(r.a)(n, [{
                        key: "componentDidMount",
                        value: function e() {
                            require(["trjs!ta/registration/FB"], function(e) {})
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return u.createElement(u.Fragment, null, u.createElement("div", {
                                id: "fb_context_data",
                                className: "hidden",
                                "data-ta-server-time": this.props.taServerTime,
                                "data-app-id": this.props.facebookConnectAppId,
                                "data-skip-session-check": this.props.skipFacebookSessionCheck,
                                "data-api-version": this.props.apiVersion
                            }), u.createElement("div", {
                                id: "fb_sdk_url",
                                "data-url": this.props.sdkUrl
                            }), u.createElement("div", {
                                className: "social-common-FacebookConnectButton__buttonContainer--3kUl4"
                            }, u.createElement("button", {
                                className: g()("ui_button", {
                                    fullwidth: this.props.fullwidth
                                }, "social-common-FacebookConnectButton__facebook_ui_button--2xwMr"),
                                onClick: this.onClick
                            }, u.createElement(b.Icon, {
                                className: "social-common-FacebookConnectButton__icon--O1t2W",
                                name: "facebook"
                            }), u.createElement("span", null, Object(f.localize)("reg_continue_w_face")))))
                        }
                    }]), n
                }(u.Component);
            Object(d.a)(_, "defaultProps", {
                onClose: void 0,
                onClick: void 0,
                onFbAuthFailure: void 0,
                fullwidth: !1
            }), n.a = Object(m.connect)(function(e, n) {
                return Object(t.a)({
                    taServerTime: e.auth.fbApi.taServerTime,
                    facebookConnectAppId: e.auth.fbApi.facebookConnectAppId,
                    skipFacebookSessionCheck: e.auth.fbApi.skipFacebookSessionCheck,
                    apiVersion: e.auth.fbApi.apiVersion,
                    sdkUrl: e.auth.fbApi.sdkUrl,
                    viewportCategory: e.meta.device.viewportCategory
                }, n)
            })(_)
        },
        "./packages/social/feed/feedFragments/HometownFields.fragment.gql": function(e, n, o) {
            "use strict";
            var t = {
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
            t.loc.source = {
                body: "cd3d893a1d20"
            }, n.a = t
        },
        "./packages/social/member/MemberBio.jsx": function(e, n, o) {
            "use strict";
            var t = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                a = o("./node_modules/react/index.js"),
                r = o("./packages/common/classnames/classnames.jsx"),
                l = o.n(r),
                i = function e(n) {
                    var o = n.bio,
                        r = n.truncateLength,
                        i = n.className,
                        c = n.smallText;
                    return o ? a.createElement("div", {
                        className: l()("social-member-MemberBio__member_info--1J8Qa", i, Object(t.a)({}, "social-member-MemberBio__small_text--2wbSn", c))
                    }, o.length > r ? "".concat(o.substring(0, r).trim(), "...") : o) : null
                };
            i.defaultProps = {
                truncateLength: 1 / 0,
                className: "",
                smallText: !1
            }, n.a = i
        },
        "./packages/social/onboarding/index.jsx": function(e, n, o) {
            "use strict";
            o.r(n);
            var t = o("./node_modules/react/index.js"),
                a = o("./node_modules/react-redux/es/index.js"),
                r = o("./packages/common/i18n/i18n.jsx"),
                l = o("@ta/styleguide.loading"),
                i = o("@ta/styleguide.button"),
                c = o.n(i),
                s = o("@ta/styleguide.avatar"),
                d = o("./packages/common/routing/routing.jsx"),
                u = o("./packages/common/timer/Timer.jsx"),
                m = o("./packages/common/tracking/tracking.jsx"),
                b = o.n(m),
                p = function e() {
                    return t.createElement(d.Link, {
                        href: "/"
                    }, t.createElement(c.a, {
                        type: "primary"
                    }, Object(r.localize)("follow_module_allset_1_CTA")))
                },
                g = function e(n) {
                    var o = n.isHome,
                        a = n.onComplete;
                    return o ? t.createElement(t.Fragment, null, t.createElement(u.a, {
                        trigger: a,
                        interval: 3e3
                    }), t.createElement(l.LoadingSpinner, null)) : t.createElement(p, null)
                },
                f = Object(a.connect)(function(e) {
                    return {
                        isHome: "Home" === e.meta.initialServletName
                    }
                })(function e(n) {
                    return t.createElement("div", {
                        className: "social-onboarding-AllSet__contentWrapper--bYysQ"
                    }, t.createElement("div", {
                        className: "social-onboarding-AllSet__greenBar--1_hAk"
                    }), t.createElement("div", {
                        className: "social-onboarding-AllSet__mainContent--1Ij21"
                    }, t.createElement(s.Avatar, {
                        photo: n.photo,
                        size: "large",
                        withBorder: !0
                    }), t.createElement("div", {
                        className: "social-onboarding-AllSet__largeText--35t0J"
                    }, n.isHome ? Object(r.localize)("onboarding_social_allset_screen_description_v3") : n.userHasInteracted ? Object(r.localize)("follow_module_allset_1") : Object(r.localize)("follow_module_allset_nofollow")), t.createElement("div", {
                        className: "social-onboarding-AllSet__line--1EIN8"
                    }), t.createElement(m.Track, {
                        className: "social-onboarding-AllSet__buttonContainer--1deUg",
                        visible: {
                            module: n.trackingModule,
                            action: "Allsetscreen_shown",
                            context: ""
                        }
                    }, t.createElement(g, {
                        isHome: n.isHome,
                        onComplete: n.onComplete
                    }))))
                }),
                _ = o("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                v = o("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                k = o("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                w = o("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                h = o("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                O = o("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                j = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                y = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                C = o("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                F = o("@ta/list.navigable-list"),
                E = o("@ta/common.typeahead"),
                S = o("@ta/social.confirm-username"),
                N = o("./packages/social/feed/feedFragments/HometownFields.fragment.gql"),
                x = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "OnboardingUpdateProfile"
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
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
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
                                    value: "taUnique"
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
                                    value: "cardId"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CardTypeEnumInput"
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
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ActionTypeEnumInput"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
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
                                    value: "username"
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
                                    value: "hometown"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
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
                                    value: "updateMemberProfile"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "userId"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "userId"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "displayName"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "username"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "username"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "hometown"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "hometown"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "status"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "memberProfile"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "userId"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [{
                                                    kind: "Directive",
                                                    name: {
                                                        kind: "Name",
                                                        value: "static"
                                                    },
                                                    arguments: []
                                                }]
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
                                    }]
                                }
                            }, {
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
                                                value: "id"
                                            },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [{
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "userId"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "userId"
                                                        }
                                                    }
                                                }, {
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "taUnique"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "taUnique"
                                                        }
                                                    }
                                                }]
                                            }
                                        }, {
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
                        end: 743
                    }
                };
            x.loc.source = {
                body: "e660f96ede4a"
            };
            var I = {};
            x.definitions = x.definitions.concat(function T(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !I[n] && (I[n] = !0, !0)
                })
            }(N.a.definitions));
            var P = x,
                A = "ONBOARDING_HOMETOWN",
                L = function e(n) {
                    var o = n.mutation,
                        a = n.variables,
                        r = n.onCompleted,
                        l = n.className,
                        i = n.children,
                        c = n.textInputIsValid;
                    return t.createElement(C.Mutation, {
                        mutation: o,
                        onCompleted: r
                    }, function(e) {
                        return t.createElement("form", {
                            className: l,
                            onSubmit: function n(o) {
                                o.preventDefault && o.preventDefault(), c() && e({
                                    variables: a
                                })
                            }
                        }, i)
                    })
                };
            L.defaultProps = {
                onCompleted: function e() {},
                className: "",
                children: null
            };
            var M = function(e) {
                    function n(e) {
                        var o;
                        Object(v.a)(this, n), o = Object(w.a)(this, Object(h.a)(n).call(this, e)), Object(y.a)(Object(j.a)(Object(j.a)(o)), "inputFieldChanged", function(e) {
                            o.setState({
                                currentInput: e
                            })
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "locationSelected", function(e) {
                            o.setState({
                                hometown: e,
                                currentInput: e.displayValue
                            })
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "skipOnClick", function() {
                            b()({
                                module: o.props.trackingModule,
                                action: "hometownscreen_skip_click",
                                context: ""
                            }), o.props.onComplete(!1)
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "typeaheadJsonFetcher", new E.TypeaheadJsonFetcher({
                            interleaved: !0,
                            types: ["geo"],
                            filter: ["nobroad"],
                            name_depth: 1,
                            details: !0,
                            legacy_format: !0,
                            urlList: !1,
                            max: "MOBILE" === o.props.viewportCategory ? 4 : 6
                        }));
                        var t = {
                            type: "location_id",
                            value: String(e.currentHometown && e.currentHometown),
                            displayValue: e.currentHometown ? e.currentHometown : ""
                        };
                        return o.state = {
                            hometown: t,
                            currentInput: t.displayValue
                        }, o
                    }
                    return Object(O.a)(n, e), Object(k.a)(n, [{
                        key: "render",
                        value: function e() {
                            var n = this,
                                o = [this.typeaheadJsonFetcher],
                                a = {
                                    hometown: this.state.hometown.value && this.props.currentHometown !== String(this.state.hometown.value) ? this.state.hometown.value : null,
                                    userId: this.props.userId,
                                    cardId: A,
                                    cardAction: "COMPLETE"
                                };
                            return t.createElement(L, {
                                mutation: P,
                                variables: a,
                                onCompleted: function e(o) {
                                    "OK" === o.updateMemberProfile.status && (b()({
                                        module: n.props.trackingModule,
                                        action: "hometown_complete_success",
                                        context: ""
                                    }), n.props.onComplete(!0))
                                },
                                textInputIsValid: function e() {
                                    return "" !== n.state.currentInput && n.state.currentInput === n.state.hometown.displayValue
                                }
                            }, t.createElement("div", {
                                className: "social-onboarding-ChooseHometown__outerWrapper--1Gsur"
                            }, t.createElement("div", {
                                className: "social-onboarding-ChooseHometown__contentWrapper--1ANzH"
                            }, t.createElement(S.LogCardStateToInsightProfile, {
                                cardId: A,
                                cardState: "SHOWN"
                            }), t.createElement("div", {
                                className: "social-onboarding-ChooseHometown__title--3Ww3_"
                            }, Object(r.localize)("onboarding_social_home_screen_header")), t.createElement("div", {
                                className: "social-onboarding-ChooseHometown__inputHeader--39qDL"
                            }, Object(r.localize)("onboarding_social_home_screen_field_label_colon")), t.createElement(E.Selector, {
                                fetchers: o,
                                typeaheadTextInputValue: this.state.currentInput,
                                placeHolder: Object(r.localize)("short_url_ghost11"),
                                selectionChanged: this.locationSelected,
                                textInputChanged: this.inputFieldChanged,
                                iconType: "map-pin-fill",
                                inputType: "search"
                            }, function(e, n, o) {
                                return t.createElement(F.NavigableList, null, [].concat(Object(_.a)(e.worldwide || []), Object(_.a)(e.typeaheadjson || [])).map(function(e) {
                                    return function(a, r) {
                                        return t.createElement(E.TypeaheadJsonResult, {
                                            result: e,
                                            tracker: n,
                                            onMouseMove: r,
                                            onSelection: o,
                                            active: a,
                                            key: "result=".concat(e.value),
                                            includeIcon: !0
                                        })
                                    }
                                }))
                            }), t.createElement("div", {
                                className: "social-onboarding-ChooseHometown__buttonContainer--c0Kbm"
                            }, t.createElement(m.Track, {
                                click: {
                                    module: this.props.trackingModule,
                                    action: "hometownscreen_confirm_click",
                                    context: ""
                                },
                                visible: {
                                    module: this.props.trackingModule,
                                    action: "hometownscreen_shown",
                                    context: ""
                                }
                            }, t.createElement(c.a, {
                                type: "primary",
                                size: "fullwidth"
                            }, Object(r.localize)("onboarding_social_home_screen_field_cta")))), t.createElement("div", {
                                className: "social-onboarding-ChooseHometown__skip--1E_9k",
                                onClick: this.skipOnClick
                            }, Object(r.localize)("onboarding_social_skip_link")))))
                        }
                    }]), n
                }(t.Component),
                B = Object(a.connect)(function(e) {
                    return {
                        userId: e.auth.loggedInUserId,
                        viewportCategory: e.meta.device.viewportCategory
                    }
                })(M),
                W = o("./packages/social/common/FacebookConnectButton.jsx"),
                z = function(e) {
                    function n() {
                        var e, o;
                        Object(v.a)(this, n);
                        for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                        return o = Object(w.a)(this, (e = Object(h.a)(n)).call.apply(e, [this].concat(a))), Object(y.a)(Object(j.a)(Object(j.a)(o)), "componentDidMount", function() {
                            o.props.facebookConnected && o.props.onComplete()
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "skipOnClick", function() {
                            b()({
                                module: o.props.trackingModule,
                                action: "Facebookconnectscreen_skip_click",
                                context: ""
                            }), o.props.onSkip()
                        }), o
                    }
                    return Object(O.a)(n, e), Object(k.a)(n, [{
                        key: "render",
                        value: function e() {
                            return this.props.facebookConnected ? null : t.createElement("div", {
                                className: "social-onboarding-FacebookConnect__outerWrapper--OQmck"
                            }, t.createElement(S.LogCardStateToInsightProfile, {
                                cardId: "ONBOARDING_FACEBOOK_CONNECT",
                                cardState: "SHOWN"
                            }), t.createElement("div", {
                                className: "social-onboarding-FacebookConnect__contentWrapper--2Nwal"
                            }, t.createElement("div", {
                                className: "social-onboarding-FacebookConnect__title--31AaL"
                            }, Object(r.localize)("onboarding_social_fbconnect_screen_field_header_part1"), " ", Object(r.localize)("onboarding_social_fbconnect_screen_field_header_part2")), t.createElement(m.Track, {
                                click: {
                                    module: this.props.trackingModule,
                                    action: "Facebookconnectscreen_continue_click",
                                    context: ""
                                },
                                visible: {
                                    module: this.props.trackingModule,
                                    action: "Facebookconnectscreen_shown",
                                    context: ""
                                }
                            }, t.createElement(W.a, {
                                onClose: this.props.onComplete,
                                fullwidth: !0
                            })), t.createElement("div", {
                                className: "social-onboarding-FacebookConnect__skip--1IC_v",
                                onClick: this.skipOnClick
                            }, Object(r.localize)("onboarding_social_skip_link"))))
                        }
                    }]), n
                }(t.Component),
                V = o("@ta/social.member-common"),
                D = o("./packages/social/member/MemberBio.jsx"),
                H = o("./packages/common/classnames/classnames.jsx"),
                R = o.n(H),
                U = o("@ta/social.follow"),
                G = o.n(U),
                q = function e(n) {
                    var o = n.member,
                        a = n.viewportCategory,
                        r = n.onToggleFollow,
                        l = n.memberInfo,
                        i = n.socialConnection;
                    return t.createElement("div", {
                        className: "social-onboarding-OnboardingFollowCard__candidate--3lFvJ"
                    }, t.createElement("div", {
                        className: "social-onboarding-OnboardingFollowCard__member_info--RWU-j"
                    }, t.createElement("div", {
                        className: "social-onboarding-OnboardingFollowCard__name_and_avatar--3HxR6"
                    }, t.createElement("div", {
                        className: "social-onboarding-OnboardingFollowCard__avatar_container--hBC6M"
                    }, t.createElement(s.Avatar, {
                        photo: o.avatar,
                        withBorder: !0
                    })), t.createElement(V.MemberName, {
                        profile: o,
                        memberInfo: l,
                        displayNameClassName: "social-onboarding-OnboardingFollowCard__display_name--1ddv3",
                        addProfileLink: !1,
                        socialConnection: i
                    })), t.createElement("div", {
                        className: "social-onboarding-OnboardingFollowCard__member_stats_container--2m_r5"
                    }, t.createElement(V.MemberStatsBasic, {
                        profile: o
                    })), t.createElement(D.a, {
                        className: R()("social-onboarding-OnboardingFollowCard__bio--mLHWJ", "MOBILE" !== a ? "social-onboarding-OnboardingFollowCard__fixedHeight--3FBkr" : ""),
                        truncateLength: "MOBILE" !== a ? 120 : 100,
                        bio: o.bio
                    }), l && l.infoWithMember && t.createElement(V.MemberReasonWhy, {
                        type: l.suggestedFolloweeType,
                        reason: l.infoWithMember.reason,
                        className: "social-onboarding-OnboardingFollowCard__reason_why--178wi",
                        singleLine: !0
                    })), t.createElement("div", {
                        className: "social-onboarding-OnboardingFollowCard__followButton---PIqf"
                    }, t.createElement(G.a, {
                        size: "MOBILE" === a ? "default" : "fullwidth",
                        profile: o,
                        displayType: "button+icon",
                        onClick: function e(n) {
                            n.stopPropagation(), n.preventDefault()
                        },
                        disableToast: !0,
                        onToggleFollow: r,
                        attemptOnboarding: !1
                    })))
                };
            q.defaultProps = {
                memberInfo: void 0,
                socialConnection: "",
                onToggleFollow: void 0
            };
            var J = q,
                K = o("./packages/common/features/features.jsx"),
                X = o("./packages/common/logging/logging.jsx"),
                Q = o.n(X),
                Y = o("./packages/common/timer/Interval.jsx"),
                Z = function e(n) {
                    return t.createElement(t.Fragment, null, t.createElement("div", {
                        className: "social-onboarding-Screen__backgroundImage--17Xjo",
                        style: {
                            backgroundImage: "url(".concat(n.photo, ")"),
                            transform: n.isRtl ? "scaleX(-1)" : "none"
                        }
                    }), t.createElement("div", {
                        className: "social-onboarding-Screen__messaging--1shFx"
                    }, t.createElement("span", {
                        className: "social-onboarding-Screen__innerContent--3bBTC"
                    }, Object(r.unescaped)(n.secondaryText))))
                },
                $ = {
                    slides: "social-onboarding-SplashScreen__slides--3HDRW",
                    slide: "social-onboarding-SplashScreen__slide--BPQGy",
                    current: "social-onboarding-SplashScreen__current--VtxMZ",
                    cta: "social-onboarding-SplashScreen__cta--3iMvV",
                    trackingDiv: "social-onboarding-SplashScreen__trackingDiv--2GRtY",
                    socialButton: "social-onboarding-SplashScreen__socialButton--2LRi1",
                    singleLargeCta: "social-onboarding-SplashScreen__singleLargeCta--12Jd6",
                    dots: "social-onboarding-SplashScreen__dots--buaIk",
                    slide__dot: "social-onboarding-SplashScreen__slide__dot--2oOHq",
                    current_dot: "social-onboarding-SplashScreen__current_dot--tYitH"
                },
                ee = function e(n) {
                    return n ? "logged_in" : "logged_out"
                },
                ne = function(e) {
                    function n() {
                        var e, o;
                        Object(v.a)(this, n);
                        for (var t = arguments.length, a = new Array(t), l = 0; l < t; l++) a[l] = arguments[l];
                        return o = Object(w.a)(this, (e = Object(h.a)(n)).call.apply(e, [this].concat(a))), Object(y.a)(Object(j.a)(Object(j.a)(o)), "state", {
                            currentIndex: 0
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "onClick", function() {
                            o.props.onComplete()
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "screenSources", function() {
                            return [{
                                url: "".concat(o.props.imgCdnUrl, "/img2/brand/Onboarding_1.jpg"),
                                mobile_url: "".concat(o.props.imgCdnUrl, "/img2/brand/img-mw-brandsplash-1.jpg"),
                                text: Object(r.localize)("onboarding_social_brand_splash_welcome_1_notbold_v5"),
                                id: 1
                            }, {
                                url: "".concat(o.props.imgCdnUrl, "/img2/brand/Onboarding_2.jpg"),
                                mobile_url: "".concat(o.props.imgCdnUrl, "/img2/brand/img-mw-brandsplash-2.jpg"),
                                text: Object(r.localize)("onboarding_social_brand_splash_advice_2_v4"),
                                id: 2
                            }, {
                                url: "".concat(o.props.imgCdnUrl, "/img2/brand/Onboarding_3.jpg"),
                                mobile_url: "".concat(o.props.imgCdnUrl, "/img2/brand/img-mw-brandsplash-3.jpg"),
                                text: Object(r.localize)("onboarding_social_brand_splash_follow_3"),
                                id: 3
                            }]
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "next", function() {
                            o.nav(1)
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "nav", function(e) {
                            var n = o.screenSources().length - 1,
                                t = o.state.currentIndex + e;
                            (t = t > n ? 0 : t) !== o.state.currentIndex && o.setState({
                                currentIndex: t
                            }, function() {
                                o.trackShow()
                            })
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "loggedSet", new Set), Object(y.a)(Object(j.a)(Object(j.a)(o)), "trackShow", function() {
                            o.loggedSet.has(o.state.currentIndex) || (o.loggedSet.add(o.state.currentIndex), b()({
                                module: o.props.trackingModule,
                                action: "valuepropscreen_shown_".concat(o.state.currentIndex + 1),
                                context: ee(o.props.loggedIn)
                            }))
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "singleScreen", function() {
                            return Object(K.featureIsEnabled)("onboarding_splash_single_screen")
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "ctaClass", function() {
                            return o.singleScreen() ? $.singleLargeCta : $.cta
                        }), o
                    }
                    return Object(O.a)(n, e), Object(k.a)(n, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.trackShow(),
                                function e(n) {
                                    fetch("/data/1.0/onboarding/recordShown", {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            "x-requested-by": n
                                        },
                                        credentials: "same-origin"
                                    }).then(function(e) {
                                        e.ok || Q.a.warn("Did not receive an ok during setting of onboarding memcached cookie.  Received: ".concat(e.statusText))
                                    }).catch(function(e) {
                                        Q.a.error("Error sending onboarding recordShown request: ".concat(e.message))
                                    })
                                }(this.props.csrfToken)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var n = this,
                                o = Object(r.localize)("onboarding_social_brand_splash_get_started_cta");
                            return t.createElement("div", {
                                className: R()($.slides)
                            }, t.createElement(S.LogCardStateToInsightProfile, {
                                cardId: "ONBOARDING_SPLASH",
                                cardState: "SHOWN"
                            }), t.createElement(function e() {
                                return n.singleScreen() ? null : t.createElement(Y.a, {
                                    interval: 3e3,
                                    callback: n.next
                                })
                            }, null), t.createElement(function e() {
                                if (!n.singleScreen()) return t.createElement("ul", {
                                    className: R()($.slides)
                                }, n.screenSources().map(function(e, o) {
                                    return t.createElement("li", {
                                        className: R()($.slide, n.state.currentIndex === o ? $.current : null),
                                        key: e.id
                                    }, t.createElement(Z, {
                                        photo: "MOBILE" === n.props.viewportCategory ? e.mobile_url : e.url,
                                        secondaryText: e.text,
                                        isRtl: n.props.isRtl
                                    }))
                                }));
                                var o = n.screenSources()[0];
                                return t.createElement(Z, {
                                    photo: "MOBILE" === n.props.viewportCategory ? o.mobile_url : o.url,
                                    secondaryText: o.text,
                                    isRtl: n.props.isRtl
                                })
                            }, null), t.createElement("div", {
                                className: this.ctaClass()
                            }, t.createElement(m.Track, {
                                click: {
                                    module: this.props.trackingModule,
                                    action: "valuepropscreen_click",
                                    context: ee(this.props.loggedIn)
                                },
                                visible: {
                                    module: this.props.trackingModule,
                                    action: "valuepropscreen_shown",
                                    context: ee(this.props.loggedIn)
                                },
                                className: $.trackingDiv
                            }, t.createElement(function e() {
                                return n.singleScreen() ? t.createElement("div", {
                                    className: R()("ui_button", "fullwidth", "secondary", $.socialButton),
                                    onClick: n.onClick
                                }, o) : t.createElement(c.a, {
                                    type: "secondary",
                                    size: "fullwidth",
                                    onClick: n.onClick
                                }, o)
                            }, null))), t.createElement(function e() {
                                return n.singleScreen() ? null : t.createElement("span", null, t.createElement("ul", {
                                    className: R()($.dots)
                                }, n.screenSources().map(function(e, o) {
                                    return t.createElement("li", {
                                        key: e.id
                                    }, t.createElement("span", {
                                        className: R()($.slide__dot, o === n.state.currentIndex ? $.current_dot : null)
                                    }))
                                })))
                            }, null))
                        }
                    }]), n
                }(t.Component),
                oe = Object(a.connect)(function(e) {
                    return {
                        isRtl: e.i18n.isRtl,
                        viewportCategory: e.meta.device.viewportCategory,
                        imgCdnUrl: e.meta.imageCdnUrl,
                        loggedIn: null !== e.auth.loggedInUserId,
                        csrfToken: e.auth.csrfToken
                    }
                })(ne),
                te = o("@ta/common.error-handling"),
                ae = o("@ta/social.suggested-followees"),
                re = o("./packages/social/cards/profile-wide/ProfileCardWide.jsx"),
                le = {
                    contentWrapper: "social-onboarding-SuggestedFacebookFollows__contentWrapper--2rDJn",
                    title: "social-onboarding-SuggestedFacebookFollows__title--2eFpt",
                    secondary: "social-onboarding-SuggestedFacebookFollows__secondary--2i9U9",
                    text: "social-onboarding-SuggestedFacebookFollows__text--4zKnU",
                    fixedBottom: "social-onboarding-SuggestedFacebookFollows__fixedBottom--1vGow",
                    buttonContainer: "social-onboarding-SuggestedFacebookFollows__buttonContainer--FypAp",
                    columnContainer: "social-onboarding-SuggestedFacebookFollows__columnContainer--39-pw",
                    column: "social-onboarding-SuggestedFacebookFollows__column--A5G9y",
                    followeeCardContainer: "social-onboarding-SuggestedFacebookFollows__followeeCardContainer--c_11t",
                    firstColumn: "social-onboarding-SuggestedFacebookFollows__firstColumn--yHOdP",
                    secondColumn: "social-onboarding-SuggestedFacebookFollows__secondColumn--25j2u",
                    centerLine: "social-onboarding-SuggestedFacebookFollows__centerLine--2zo43",
                    singleColumnContentWrapper: "social-onboarding-SuggestedFacebookFollows__singleColumnContentWrapper--3r_BQ",
                    singleColumnTitle: "social-onboarding-SuggestedFacebookFollows__singleColumnTitle--54o04",
                    singleColumn: "social-onboarding-SuggestedFacebookFollows__singleColumn--3EFFM"
                },
                ie = !1,
                ce = !1,
                se = 0,
                de = 0,
                ue = function e() {
                    return Object(K.featureIsEnabled)("social_onboarding_show_suggested_followees_as_column")
                },
                me = function e(n) {
                    var o = n.title,
                        a = n.type;
                    return t.createElement("div", {
                        className: R()(le.title, a ? le[a] : "", ue() ? le.singleColumnTitle : "")
                    }, t.createElement("div", {
                        className: le.text
                    }, o))
                },
                be = function e(n) {
                    return 0 === n
                },
                pe = function e(n) {
                    var o = n.followees,
                        a = n.viewportCategory,
                        r = n.onFollow,
                        l = n.showSocialConnections,
                        i = o.map(function(e) {
                            return t.createElement("div", {
                                className: le.followeeCardContainer,
                                key: e.userId
                            }, t.createElement(J, {
                                key: e.userId,
                                member: e,
                                viewportCategory: a,
                                onToggleFollow: r,
                                socialConnection: l ? "FACEBOOK" : void 0
                            }))
                        });
                    return t.createElement("div", {
                        className: le.columnContainer
                    }, t.createElement("div", {
                        className: le.column
                    }, i))
                };
            pe.defaultProps = {
                showSocialConnections: !1
            };
            var ge = function e(n) {
                var o = n.followees,
                    a = n.viewportCategory,
                    r = n.onFollow,
                    l = n.showSocialConnections,
                    i = Math.ceil(o.length / 2),
                    c = Object(_.a)(o).splice(0, i),
                    s = Object(_.a)(o).splice(i, o.length),
                    d = c.map(function(e) {
                        return t.createElement("div", {
                            className: R()(le.followeeCardContainer, le.firstColumn, le.centerLine),
                            key: e.userId
                        }, t.createElement(J, {
                            key: e.userId,
                            member: e,
                            viewportCategory: a,
                            onToggleFollow: r,
                            socialConnection: l ? "FACEBOOK" : void 0
                        }))
                    }),
                    u = s.map(function(e) {
                        return t.createElement("div", {
                            className: R()(le.followeeCardContainer, le.secondColumn),
                            key: e.userId
                        }, t.createElement(J, {
                            key: e.userId,
                            member: e,
                            viewportCategory: a,
                            onToggleFollow: r,
                            socialConnection: l ? "FACEBOOK" : void 0
                        }))
                    });
                return t.createElement("div", {
                    className: le.columnContainer
                }, t.createElement("div", {
                    className: le.column
                }, d), t.createElement("div", {
                    className: le.column
                }, u))
            };
            ge.defaultProps = {
                showSocialConnections: !1
            };
            var fe = function e(n) {
                var o = n.fbFollowees ? n.fbFollowees.map(function(e) {
                        return t.createElement("div", {
                            key: e.userId
                        }, t.createElement(re.a, {
                            profile: e,
                            memberInfo: e.info,
                            onFollow: n.onFollow,
                            addProfileLink: !1,
                            showFacebookIcon: !0
                        }))
                    }) : [],
                    a = n.taFollowees ? n.taFollowees.map(function(e) {
                        return t.createElement("div", {
                            key: e.userId
                        }, t.createElement(re.a, {
                            profile: e,
                            memberInfo: e.info,
                            addProfileLink: !1
                        }))
                    }) : [],
                    r = o.concat(a);
                return t.createElement("div", {
                    className: le.columnContainer
                }, t.createElement("div", {
                    className: "".concat(le.column, " ").concat(le.singleColumn)
                }, r))
            };
            fe.defaultProps = {
                fbFollowees: null,
                taFollowees: null
            };
            var _e = function(e) {
                    function n() {
                        var e, o;
                        Object(v.a)(this, n);
                        for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                        return o = Object(w.a)(this, (e = Object(h.a)(n)).call.apply(e, [this].concat(a))), Object(y.a)(Object(j.a)(Object(j.a)(o)), "onFriendFollow", function(e) {
                            "FOLLOW" === e ? de++ : "UNFOLLOW" === e && de--
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "onTravelerFollow", function(e) {
                            "FOLLOW" === e ? se++ : "UNFOLLOW" === e && se--
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "getContainerClass", function() {
                            return "MOBILE" === o.props.viewportCategory ? "" : ue() ? le.singleColumnContentWrapper : "ui_card section"
                        }), o
                    }
                    return Object(O.a)(n, e), Object(k.a)(n, [{
                        key: "render",
                        value: function e() {
                            var n = this;
                            return t.createElement(t.Fragment, null, t.createElement("div", {
                                className: R()(le.contentWrapper, this.getContainerClass())
                            }, t.createElement(S.LogCardStateToInsightProfile, {
                                cardId: "ONBOARDING_FACEBOOK_FOLLOW",
                                cardState: "SHOWN"
                            }), t.createElement(te.ErrorBoundary, null, t.createElement(ae.RecommendedExternalConnectionsDataProvider, {
                                limit: 100
                            }, function(e) {
                                var o = function e(n) {
                                    var o = JSON.parse(JSON.stringify(n));
                                    return Object.keys(o).forEach(function(e) {
                                        o[e].fullName && (o[e].userProfile.displayName = o[e].fullName)
                                    }), o.map(function(e) {
                                        return e.userProfile
                                    })
                                }(e);
                                return ie || (b()({
                                        module: n.props.trackingModule,
                                        action: "followscreen_facebook_friends_shown",
                                        context: e.length.toString()
                                    }), ie = !0),
                                    function e(n) {
                                        return n >= 6
                                    }(e.length) ? "MOBILE" === n.props.viewportCategory ? t.createElement(t.Fragment, null, t.createElement(me, {
                                        title: Object(r.localize)("onboarding_social_fbfollow_screen_header_v1"),
                                        type: ""
                                    }), t.createElement(pe, {
                                        followees: o,
                                        viewportCategory: n.props.viewportCategory,
                                        onFollow: n.onFriendFollow,
                                        showSocialConnections: !0
                                    })) : t.createElement(t.Fragment, null, t.createElement(me, {
                                        title: Object(r.localize)("onboarding_social_fbfollow_screen_header_v1"),
                                        type: ""
                                    }), ue() ? t.createElement(fe, {
                                        fbFollowees: o,
                                        onFollow: n.onFriendFollow
                                    }) : t.createElement(ge, {
                                        followees: o,
                                        viewportCategory: n.props.viewportCategory,
                                        onFollow: n.onFriendFollow,
                                        showSocialConnections: !0
                                    })) : t.createElement(ae.FolloweeDataProvider, {
                                        limit: 10
                                    }, function(a) {
                                        var l = a.suggestedFollowees;
                                        return ce || (b()({
                                            module: n.props.trackingModule,
                                            action: "followscreen_facebook_travelers_shown",
                                            context: l.length.toString()
                                        }), ce = !0), "MOBILE" === n.props.viewportCategory ? be(e.length) ? t.createElement(t.Fragment, null, t.createElement(me, {
                                            title: Object(r.localize)("onboarding_social_fbfollow_screen_header_v4"),
                                            type: ""
                                        }), t.createElement(pe, {
                                            followees: l,
                                            viewportCategory: n.props.viewportCategory,
                                            onFollow: n.onTravelerFollow
                                        })) : t.createElement(t.Fragment, null, t.createElement(me, {
                                            title: Object(r.localize)("onboarding_social_fbfollow_screen_header_v1"),
                                            type: ""
                                        }), t.createElement(pe, {
                                            followees: o,
                                            viewportCategory: n.props.viewportCategory,
                                            onFollow: n.onFriendFollow,
                                            showSocialConnections: !0
                                        }), t.createElement(me, {
                                            title: Object(r.localize)("onboarding_social_fbfollow_screen_header_v2"),
                                            type: "secondary"
                                        }), t.createElement(pe, {
                                            followees: l,
                                            viewportCategory: n.props.viewportCategory,
                                            onFollow: n.onTravelerFollow
                                        })) : be(e.length) ? t.createElement(t.Fragment, null, t.createElement(me, {
                                            title: Object(r.localize)("onboarding_social_fbfollow_screen_header_v4"),
                                            type: "secondary"
                                        }), ue() ? t.createElement(fe, {
                                            taFollowees: l,
                                            viewportCategory: n.props.viewportCategory,
                                            onFollow: n.onTravelerFollow
                                        }) : t.createElement(ge, {
                                            followees: l,
                                            viewportCategory: n.props.viewportCategory,
                                            onFollow: n.onTravelerFollow
                                        })) : t.createElement(t.Fragment, null, t.createElement(me, {
                                            title: Object(r.localize)("onboarding_social_fbfollow_screen_header_v1"),
                                            type: ""
                                        }), ue() ? t.createElement(fe, {
                                            fbFollowees: o,
                                            onFollow: n.onFriendFollow
                                        }) : t.createElement(ge, {
                                            followees: o,
                                            viewportCategory: n.props.viewportCategory,
                                            onFollow: n.onFriendFollow,
                                            showSocialConnections: !0
                                        }), t.createElement(me, {
                                            title: Object(r.localize)("onboarding_social_fbfollow_screen_header_v2"),
                                            type: "secondary"
                                        }), ue() ? t.createElement(fe, {
                                            taFollowees: l,
                                            onFollow: n.onTravelerFollow
                                        }) : t.createElement(ge, {
                                            followees: l,
                                            viewportCategory: n.props.viewportCategory,
                                            onFollow: n.onTravelerFollow
                                        }))
                                    })
                            }))), t.createElement(function e() {
                                return t.createElement("div", {
                                    className: le.fixedBottom
                                }, t.createElement("div", {
                                    className: le.buttonContainer
                                }, t.createElement(c.a, {
                                    type: "primary",
                                    size: "fullwidth",
                                    onClick: function e() {
                                        b()({
                                            module: n.props.trackingModule,
                                            action: "followscreen_facebook_followed_friends_done_click",
                                            context: de.toString()
                                        }), b()({
                                            module: n.props.trackingModule,
                                            action: "followscreen_facebook_followed_nonfriends_done_click",
                                            context: se.toString()
                                        }), n.props.onComplete(de + se !== 0)
                                    }
                                }, Object(r.localize)("onboarding_social_follow_screen_cta"))))
                            }, null))
                        }
                    }]), n
                }(t.Component),
                ve = Object(a.connect)(function(e) {
                    return {
                        viewportCategory: e.meta.device.viewportCategory
                    }
                })(_e),
                ke = o("./packages/common/throttle/throttle.jsx"),
                we = o.n(ke),
                he = !1,
                Oe = function e(n) {
                    return t.createElement(ae.RecommendedFolloweeDataProvider, {
                        limit: n.limit,
                        types: ["FEATURED", "FOLLOWERS", "FRIENDS_OF_FRIENDS", "GEO"],
                        placement: "ONBOARDING"
                    }, function(e) {
                        if (he || (b()({
                                module: n.trackingModule,
                                action: "followscreen_brand_shown",
                                context: e.length.toString()
                            }), he = !0), "MOBILE" === n.viewportCategory) {
                            var o = e.map(function(e) {
                                return t.createElement("div", {
                                    className: "social-onboarding-SuggestedFollowsGridView__followeeCardContainer--2OFH5",
                                    key: e.userProfile.userId
                                }, t.createElement(J, {
                                    key: e.userProfile.userId,
                                    member: e.userProfile,
                                    viewportCategory: n.viewportCategory,
                                    onToggleFollow: n.onFollow,
                                    memberInfo: e.info
                                }))
                            });
                            return t.createElement("div", {
                                className: "social-onboarding-SuggestedFollowsGridView__columnContainer--3RBKt"
                            }, t.createElement("div", {
                                className: "social-onboarding-SuggestedFollowsGridView__column--2zfs_"
                            }, o))
                        }
                        var a = e.filter(function e(n, o) {
                                return o % 2 == 0
                            }),
                            r = e.filter(function e(n, o) {
                                return o % 2 == 1
                            }),
                            l = a.map(function(e) {
                                return t.createElement("div", {
                                    className: R()("social-onboarding-SuggestedFollowsGridView__followeeCardContainer--2OFH5", "social-onboarding-SuggestedFollowsGridView__firstColumn--2gH9d", "social-onboarding-SuggestedFollowsGridView__centerLine--3qET2"),
                                    key: e.userProfile.userId
                                }, t.createElement(J, {
                                    key: e.userProfile.userId,
                                    member: e.userProfile,
                                    viewportCategory: n.viewportCategory,
                                    onToggleFollow: n.onFollow,
                                    memberInfo: e.info
                                }))
                            }),
                            i = r.map(function(e) {
                                return t.createElement("div", {
                                    className: R()("social-onboarding-SuggestedFollowsGridView__followeeCardContainer--2OFH5", "social-onboarding-SuggestedFollowsGridView__secondColumn--12Vbz"),
                                    key: e.userProfile.userId
                                }, t.createElement(J, {
                                    key: e.userProfile.userId,
                                    member: e.userProfile,
                                    viewportCategory: n.viewportCategory,
                                    onToggleFollow: n.onFollow,
                                    memberInfo: e.info
                                }))
                            });
                        return t.createElement("div", {
                            className: "social-onboarding-SuggestedFollowsGridView__columnContainer--3RBKt"
                        }, t.createElement("div", {
                            className: "social-onboarding-SuggestedFollowsGridView__column--2zfs_"
                        }, l), t.createElement("div", {
                            className: "social-onboarding-SuggestedFollowsGridView__column--2zfs_"
                        }, i))
                    })
                };
            Oe.defaultProps = {
                onFollow: function e() {},
                limit: 30,
                trackingModule: "Social_onboarding_gridview_unknown"
            };
            var je = Object(a.connect)(function(e) {
                    return {
                        viewportCategory: e.meta.device.viewportCategory
                    }
                })(Oe),
                ye = 0,
                Ce = function(e) {
                    function n() {
                        var e, o;
                        Object(v.a)(this, n);
                        for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                        return o = Object(w.a)(this, (e = Object(h.a)(n)).call.apply(e, [this].concat(a))), Object(y.a)(Object(j.a)(Object(j.a)(o)), "state", {
                            isScrolled: !1
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "onFollow", function(e) {
                            "FOLLOW" === e ? ye++ : "UNFOLLOW" === e && ye--
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "onContentScroll", function() {
                            !o.wrapper && document && (o.wrapper = document.getElementById("onboardingContentWrapper")), o.wrapper && (0 === o.wrapper.scrollTop || o.state.isScrolled ? 0 === o.wrapper.scrollTop && o.state.isScrolled && o.setState({
                                isScrolled: !1
                            }) : o.setState({
                                isScrolled: !0
                            }))
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "getFollowed", function() {
                            return ye.toString()
                        }), Object(y.a)(Object(j.a)(Object(j.a)(o)), "wrapper", void 0), Object(y.a)(Object(j.a)(Object(j.a)(o)), "handleContentScroll", we()(function() {
                            o.onContentScroll()
                        }, 200)), o
                    }
                    return Object(O.a)(n, e), Object(k.a)(n, [{
                        key: "render",
                        value: function e() {
                            var n = this;
                            return t.createElement(t.Fragment, null, t.createElement("div", {
                                className: "social-onboarding-SuggestedFollows__fixedTop--17EB3"
                            }, t.createElement(function e() {
                                return t.createElement(t.Fragment, null, Object(K.featureIsEnabled)("onboarding_suggested_follows_by_interest") ? t.createElement("div", {
                                    className: R()("social-onboarding-SuggestedFollows__title--2p7Gl", Object(y.a)({}, "social-onboarding-SuggestedFollows__bottomBorder--2uv92", n.state.isScrolled))
                                }, t.createElement("div", {
                                    className: "social-onboarding-SuggestedFollows__primary--3XLXl"
                                }, Object(r.localize)("onboarding_follow_by_interest_header"))) : t.createElement("div", {
                                    className: R()("social-onboarding-SuggestedFollows__title--2p7Gl", Object(y.a)({}, "social-onboarding-SuggestedFollows__bottomBorder--2uv92", n.state.isScrolled))
                                }, t.createElement("div", {
                                    className: "social-onboarding-SuggestedFollows__primary--3XLXl"
                                }, n.props.isInitialScreen ? Object(r.localize)("follow_module_header_1") : Object(r.localize)("onboarding_social_follow_screen_header_v2"))))
                            }, null)), t.createElement("div", {
                                onScroll: this.handleContentScroll,
                                id: "onboardingContentWrapper",
                                className: "social-onboarding-SuggestedFollows__contentWrapper--2fx8x"
                            }, t.createElement(S.LogCardStateToInsightProfile, {
                                cardId: "ONBOARDING_FOLLOW",
                                cardState: "SHOWN"
                            }), this.props.isInitialScreen && t.createElement(S.LogCardStateToInsightProfile, {
                                cardId: "ONBOARDING_SPLASH",
                                cardState: "SHOWN"
                            }), t.createElement(te.ErrorBoundary, null, t.createElement(t.Fragment, null, Object(K.featureIsEnabled)("onboarding_suggested_follows_by_interest") ? t.createElement(ae.SuggestedTripAdvisorMembersSections, {
                                limit: 20,
                                prioritizedTypes: ["PHOTOGRAPHY", "LUXURY_TRAVEL", "SOLO_FEMALE", "BUDGET_TRAVEL", "ADVENTURE", "LIKE_A_LOCAL", "FOODIE"],
                                noShelvesFallback: t.createElement(je, {
                                    limit: 30,
                                    onFollow: this.onFollow,
                                    trackingModule: this.props.trackingModule
                                })
                            }) : t.createElement(je, {
                                limit: 30,
                                onFollow: this.onFollow,
                                trackingModule: this.props.trackingModule
                            })))), t.createElement("div", {
                                className: "social-onboarding-SuggestedFollows__fixedBottom--1R7Pc"
                            }, t.createElement("div", {
                                className: "social-onboarding-SuggestedFollows__buttonContainer--30W83"
                            }, t.createElement(c.a, {
                                type: "primary",
                                size: "fullwidth",
                                onClick: function e() {
                                    b()({
                                        module: n.props.trackingModule,
                                        action: "followscreen_brand_follow_done_click",
                                        context: n.getFollowed()
                                    }), n.props.onComplete(0 !== ye)
                                }
                            }, Object(r.localize)("language_and_currency_continue")))))
                        }
                    }]), n
                }(t.Component);
            Object(y.a)(Ce, "defaultProps", {
                prioritizedTypes: []
            });
            var Fe = Object(a.connect)(function(e) {
                    return {
                        viewportCategory: e.meta.device.viewportCategory
                    }
                })(Ce),
                Ee = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ExternallyConnectedAccountTypes"
                        },
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "myExternallyConnectedAccountTypes"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 78
                    }
                };
            Ee.loc.source = {
                body: "cfb0d3eaa4b2"
            };
            var Se = Ee;
            o.d(n, "AllSet", function() {
                return f
            }), o.d(n, "ChooseHometown", function() {
                return B
            }), o.d(n, "FacebookConnect", function() {
                return z
            }), o.d(n, "OnboardingFollowCard", function() {
                return J
            }), o.d(n, "SplashScreen", function() {
                return oe
            }), o.d(n, "SuggestedFacebookFollows", function() {
                return ve
            }), o.d(n, "SuggestedFollows", function() {
                return Fe
            }), o.d(n, "ExternallyConnectedQuery", function() {
                return Se
            })
        },
        "@ta/common.error-handling": function(n, o) {
            n.exports = e
        },
        "@ta/common.typeahead": function(e, o) {
            e.exports = n
        },
        "@ta/list.navigable-list": function(e, n) {
            e.exports = o
        },
        "@ta/social.confirm-username": function(e, n) {
            e.exports = t
        },
        "@ta/social.follow": function(e, n) {
            e.exports = a
        },
        "@ta/social.member-common": function(e, n) {
            e.exports = r
        },
        "@ta/social.suggested-followees": function(e, n) {
            e.exports = l
        },
        "@ta/styleguide.avatar": function(e, n) {
            e.exports = i
        },
        "@ta/styleguide.button": function(e, n) {
            e.exports = c
        },
        "@ta/styleguide.icon": function(e, n) {
            e.exports = s
        },
        "@ta/styleguide.loading": function(e, n) {
            e.exports = d
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = u
        }
    })
});
//# sourceMappingURL=social.onboarding.38c7527d9f.js.map