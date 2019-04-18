define("@ta/social.follow-feed", ["@ta/loading.error", "@ta/social.follow", "@ta/social.member-common", "@ta/styleguide.avatar", "@ta/styleguide.loading", "@ta/common.global"], function(e, n, i, a, t, r) {
    return function(e) {
        var n = {};

        function i(a) {
            if (n[a]) return n[a].exports;
            var t = n[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(t.exports, t, t.exports, i), t.l = !0, t.exports
        }
        return i.m = e, i.c = n, i.d = function(e, n, a) {
            i.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: a
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, n) {
            if (1 & n && (e = i(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (i.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var t in e) i.d(a, t, function(n) {
                    return e[n]
                }.bind(null, t));
            return a
        }, i.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return i.d(n, "a", n), n
        }, i.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, i.p = "", i(i.s = "./packages/social/follow-feed/follow-feed.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, n, i) {
            "use strict";

            function a(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            i.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, n, i) {
            "use strict";

            function a(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            i.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, n, i) {
            "use strict";

            function a(e, n) {
                for (var i = 0; i < n.length; i++) {
                    var a = n[i];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function t(e, n, i) {
                return n && a(e.prototype, n), i && a(e, i), e
            }
            i.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, i) {
            "use strict";

            function a(e, n, i) {
                return n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i, e
            }
            i.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, n, i) {
            "use strict";

            function a() {
                return (a = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            i.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, n, i) {
            "use strict";

            function a(e) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function e(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                })(e)
            }
            i.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, n, i) {
            "use strict";
            i.d(n, "a", function() {
                return t
            });
            var a = i("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function t(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), n && Object(a.a)(e, n)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, n, i) {
            "use strict";

            function a(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            i.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, n, i) {
            "use strict";
            i.d(n, "a", function() {
                return r
            });
            var a = i("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                t = i("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function r(e, n) {
                return !n || "object" !== Object(a.a)(n) && "function" != typeof n ? Object(t.a)(e) : n
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, n, i) {
            "use strict";

            function a(e, n) {
                return (a = Object.setPrototypeOf || function e(n, i) {
                    return n.__proto__ = i, n
                })(e, n)
            }
            i.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, n, i) {
            "use strict";
            var a = i("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function t(e) {
                return function n(e) {
                    if (Array.isArray(e)) {
                        for (var n = 0, i = new Array(e.length); n < e.length; n++) i[n] = e[n];
                        return i
                    }
                }(e) || Object(a.a)(e) || function i() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            i.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, n, i) {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(n) {
                    return typeof n
                } : function e(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(e)
            }

            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function e(n) {
                    return a(n)
                } : function e(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : a(n)
                })(e)
            }
            i.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, n, i) {
            e.exports = i("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, n, i) {
            e.exports = i("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, n, i) {
            e.exports = i("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/logging/logging.jsx": function(e, n, i) {
            e.exports = i("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, n, i) {
            e.exports = i("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, n, i) {
            e.exports = i("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/search/tracking/SearchRecordTracker.jsx": function(e, n, i) {
            "use strict";
            var a = i("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                t = i("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = i("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = i("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = i("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = i("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                d = i("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = i("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                m = i("./node_modules/react/index.js"),
                u = i("./packages/common/tracking/tracking.jsx"),
                f = function(e) {
                    function n() {
                        var e, i;
                        Object(t.a)(this, n);
                        for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
                        return i = Object(o.a)(this, (e = Object(l.a)(n)).call.apply(e, [this].concat(r))), Object(c.a)(Object(d.a)(Object(d.a)(i)), "state", {
                            clicked: !1
                        }), Object(c.a)(Object(d.a)(Object(d.a)(i)), "getSearchRecordPayload", function(e) {
                            return new URLSearchParams(JSON.parse(JSON.stringify(e)))
                        }), Object(c.a)(Object(d.a)(Object(d.a)(i)), "click", function() {
                            i.state.clicked || (i.sendSearchRecordRequest(), i.setState({
                                clicked: !0
                            }))
                        }), Object(c.a)(Object(d.a)(Object(d.a)(i)), "sendSearchRecordRequest", function() {
                            i.props.url && i.props.searchRecordData && fetch(i.props.url, {
                                method: "POST",
                                body: i.getSearchRecordPayload(i.props.searchRecordData),
                                credentials: "same-origin"
                            })
                        }), i
                    }
                    return Object(s.a)(n, e), Object(r.a)(n, [{
                        key: "render",
                        value: function e() {
                            return m.createElement("span", {
                                onClick: this.click
                            }, m.createElement(u.ClickTracker, Object(a.a)({}, this.props, {
                                forceAjax: !0
                            }), this.props.children))
                        }
                    }]), n
                }(m.Component);
            Object(c.a)(f, "defaultProps", {
                once: !0,
                url: "/SearchRecord"
            }), n.a = f
        },
        "./packages/social/cards/ProfileCardResponsive.jsx": function(e, n, i) {
            "use strict";
            var a = i("./node_modules/react/index.js"),
                t = i("./node_modules/react-redux/es/index.js"),
                r = i("./packages/social/cards/profile-narrow/ProfileCardNarrow.jsx"),
                o = i("./packages/social/cards/profile-wide/ProfileCardWide.jsx"),
                l = function e(n) {
                    return "MOBILE" === n.device ? a.createElement(r.a, {
                        profile: n.profile,
                        memberInfo: n.memberInfo
                    }) : a.createElement(o.a, {
                        profile: n.profile,
                        memberInfo: n.memberInfo
                    })
                };
            l.defaultProps = {
                memberInfo: void 0
            }, n.a = Object(t.connect)(function(e) {
                return {
                    device: e.meta.device.viewportCategory
                }
            })(l)
        },
        "./packages/social/cards/profile-narrow/ProfileCardNarrow.jsx": function(e, n, i) {
            "use strict";
            var a = i("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                t = i("./node_modules/react/index.js"),
                r = i("./node_modules/react-redux/es/index.js"),
                o = i("@ta/social.member-common"),
                l = i("./packages/common/routing/routing.jsx"),
                s = i("@ta/social.follow"),
                d = i.n(s),
                c = i("./packages/search/tracking/SearchRecordTracker.jsx"),
                m = i("@ta/styleguide.avatar"),
                u = function e(n) {
                    var i = n.profile,
                        a = n.memberInfo;
                    return t.createElement("div", {
                        className: "social-cards-profile-narrow-IdentitySection__identity_wrap--10o6W"
                    }, t.createElement("div", {
                        className: "social-cards-profile-narrow-IdentitySection__identity_block--eQkEB"
                    }, t.createElement("div", {
                        className: "social-cards-profile-narrow-IdentitySection__avatar_wrap--E9n8F"
                    }, t.createElement(m.Avatar, {
                        photo: i.avatar,
                        withBorder: !0
                    })), t.createElement("div", {
                        className: "social-cards-profile-narrow-IdentitySection__member_name_wrap--2dr7j"
                    }, t.createElement(o.MemberName, {
                        profile: i,
                        memberInfo: a,
                        displayNameClassName: "social-cards-profile-narrow-IdentitySection__display_name--3i2d0",
                        addProfileLink: !1,
                        singleLine: !0
                    }))))
                };
            u.defaultProps = {
                memberInfo: void 0
            };
            var f = u,
                k = function e(n) {
                    n.stopPropagation(), n.preventDefault()
                },
                v = function e(n) {
                    var i = n.profile,
                        r = n.trackType,
                        o = n.trackPayload;
                    switch (r) {
                        case "search":
                            var l = {
                                module: "Search_Results",
                                action: i.isFollowing ? "unfollow_click" : "follow_click",
                                context: "user_id=".concat(i.userId)
                            };
                            return t.createElement(c.a, Object(a.a)({
                                once: !1,
                                searchRecordData: o
                            }, l), t.createElement(d.a, {
                                profile: i,
                                displayType: "button+icon",
                                size: "small",
                                onClick: function e(n) {
                                    return k(n)
                                }
                            }));
                        default:
                            return t.createElement(d.a, {
                                profile: i,
                                displayType: "button+icon",
                                size: "small",
                                onClick: function e(n) {
                                    return k(n)
                                }
                            })
                    }
                },
                p = function e(n) {
                    var i, a;
                    return t.createElement(l.Link, {
                        href: null === (i = n.profile) || void 0 === i ? void 0 : null === (a = i.route) || void 0 === a ? void 0 : a.url,
                        target: n.linkNewTabDT && "MOBILE" !== n.device ? "_blank" : "_self",
                        className: n.fullHeight ? "social-cards-profile-narrow-ProfileCardNarrow__flex_columns--MAyyA" : ""
                    }, t.createElement("div", {
                        className: "".concat("social-cards-profile-narrow-ProfileCardNarrow__profile_wrap--3brH_", " ").concat(n.fullHeight ? "social-cards-profile-narrow-ProfileCardNarrow__full_height--lR9QS" : "")
                    }, t.createElement(f, {
                        profile: n.profile,
                        memberInfo: n.memberInfo
                    }), t.createElement("div", {
                        className: "social-cards-profile-narrow-ProfileCardNarrow__profile_stats_block--DYAGo"
                    }, t.createElement(o.MemberStatsBasic, {
                        profile: n.profile
                    })), n.memberInfo && n.memberInfo.infoWithMember && t.createElement(o.MemberReasonWhy, {
                        type: n.memberInfo.suggestedFolloweeType,
                        reason: n.memberInfo.infoWithMember.reason,
                        className: "social-cards-profile-narrow-ProfileCardNarrow__reason_why--b7jE6",
                        singleLine: !0
                    }), t.createElement("div", {
                        className: "social-cards-profile-narrow-ProfileCardNarrow__profile_follow_block--1yE6V"
                    }, !n.profile.isMe && t.createElement(v, {
                        profile: n.profile,
                        trackType: n.trackType,
                        trackPayload: n.trackPayload
                    }))))
                };
            p.defaultProps = {
                fullHeight: !1,
                linkNewTabDT: !1,
                trackType: "",
                trackPayload: {},
                memberInfo: void 0
            }, n.a = Object(r.connect)(function(e) {
                return {
                    device: e.meta.device.viewportCategory
                }
            })(p)
        },
        "./packages/social/cards/profile-wide/ProfileCardWide.jsx": function(e, n, i) {
            "use strict";
            var a = i("./node_modules/react/index.js"),
                t = i("@ta/styleguide.avatar"),
                r = i("@ta/social.member-common"),
                o = i("@ta/social.follow"),
                l = i.n(o),
                s = i("./packages/common/routing/routing.jsx"),
                d = function e(n) {
                    var i, o = n.profile,
                        d = n.memberInfo,
                        c = n.onFollow,
                        m = n.addProfileLink,
                        u = n.showFacebookIcon,
                        f = a.createElement("div", {
                            className: "ui_card section ".concat("social-cards-profile-wide-ProfileCardWide__card--UEavE")
                        }, a.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__avatar--2hw5s"
                        }, a.createElement(t.Avatar, {
                            photo: o.avatar,
                            size: "large",
                            withBorder: !0
                        })), a.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__info--3X3EI"
                        }, a.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__member_name_container--3dYop"
                        }, a.createElement(r.MemberName, {
                            profile: o,
                            memberInfo: d,
                            addProfileLink: !1,
                            socialConnection: u ? "FACEBOOK" : ""
                        })), a.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__member_stats_container--1jjM1"
                        }, a.createElement(r.MemberStatsBasic, {
                            profile: o
                        })), o.bio && a.createElement("div", {
                            className: "".concat("social-cards-profile-wide-ProfileCardWide__bio_container--xx95E", " ").concat("social-cards-profile-wide-ProfileCardWide__bio--24oC6")
                        }, o.bio), d && d.infoWithMember && a.createElement(r.MemberReasonWhy, {
                            type: d.suggestedFolloweeType,
                            reason: d.infoWithMember.reason,
                            className: "social-cards-profile-wide-ProfileCardWide__reason_why--2lIJ5",
                            singleLine: !0
                        })), !o.isMe && a.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__follow--2Mazt"
                        }, a.createElement(l.a, {
                            profile: o,
                            size: "small",
                            displayType: "button+icon",
                            onClick: function e(n) {
                                return function e(n) {
                                    n.stopPropagation(), n.preventDefault()
                                }(n)
                            },
                            onToggleFollow: c
                        })));
                    return m ? a.createElement(s.Link, {
                        href: null == o ? void 0 : null === (i = o.route) || void 0 === i ? void 0 : i.url
                    }, f) : f
                };
            d.defaultProps = {
                memberInfo: void 0,
                onFollow: void 0,
                addProfileLink: !0,
                showFacebookIcon: !1
            }, n.a = d
        },
        "./packages/social/feed/feedFragments/HometownFields.fragment.gql": function(e, n, i) {
            "use strict";
            var a = {
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
            a.loc.source = {
                body: "cd3d893a1d20"
            }, n.a = a
        },
        "./packages/social/follow-feed/follow-feed.jsx": function(e, n, i) {
            "use strict";
            i.r(n);
            var a = i("./node_modules/react/index.js"),
                t = i("./packages/common/logging/logging.jsx"),
                r = i.n(t),
                o = i("@ta/styleguide.loading"),
                l = i("./packages/social/cards/ProfileCardResponsive.jsx"),
                s = i("@ta/loading.error"),
                d = function e(n) {
                    return n.error ? (r.a.error("Error fetching FollowerFolloweeFeed data for ".concat(n.userId, ": "), n.error), a.createElement(s.LoadingErrorMessage, {
                        refetch: n.refetch
                    })) : a.createElement("div", {
                        className: "social-follow-feed-FollowerFolloweeFeed__feed--31QNY",
                        ref: n.contentRef
                    }, n.followerFollowees.map(function(e) {
                        return e ? a.createElement(l.a, {
                            key: e.userId,
                            profile: e
                        }) : null
                    }), n.loading && a.createElement("div", {
                        className: "ui_card section"
                    }, a.createElement(o.LoadingSpinner, null)))
                },
                c = i("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                m = i("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                u = i("./packages/social/feed/feedFragments/HometownFields.fragment.gql"),
                f = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "followees"
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
                                    value: "limit"
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
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "offset"
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
                                alias: {
                                    kind: "Name",
                                    value: "feed"
                                },
                                name: {
                                    kind: "Name",
                                    value: "followees"
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
                                        value: "limit"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
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
                                            value: "hasMore"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "list"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "MemberProfile"
                                                    }
                                                },
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
                                                            value: "bio"
                                                        },
                                                        arguments: [],
                                                        directives: []
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
                                                            value: "followerCount"
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isFollowing"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isMe"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isVerified"
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
                                                            value: "contributionCounts"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sumAllUgc"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "route"
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
                                                            }]
                                                        }
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
                        end: 699
                    }
                };
            f.loc.source = {
                body: "7ea190c5403b"
            };
            var k = {};
            f.definitions = f.definitions.concat(function v(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !k[n] && (k[n] = !0, !0)
                })
            }(u.a.definitions));
            var p = f,
                b = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "followers"
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
                                    value: "limit"
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
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "offset"
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
                                alias: {
                                    kind: "Name",
                                    value: "feed"
                                },
                                name: {
                                    kind: "Name",
                                    value: "followers"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "objectId"
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
                                        value: "objectType"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "MEMBER"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "limit"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
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
                                            value: "hasMore"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "list"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "MemberProfile"
                                                    }
                                                },
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
                                                            value: "bio"
                                                        },
                                                        arguments: [],
                                                        directives: []
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
                                                            value: "followerCount"
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isFollowing"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isMe"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isVerified"
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
                                                            value: "contributionCounts"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sumAllUgc"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "route"
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
                                                            }]
                                                        }
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
                        end: 721
                    }
                };
            b.loc.source = {
                body: "12b6fe1fc731"
            };
            var g = {};
            b.definitions = b.definitions.concat(function y(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !g[n] && (g[n] = !0, !0)
                })
            }(u.a.definitions));
            var N = b,
                _ = function e(n) {
                    return a.createElement(m.Query, {
                        query: n.isFollowersList ? N : p,
                        notifyOnNetworkStatusChange: !0,
                        variables: {
                            userId: n.userId,
                            limit: 20
                        }
                    }, function(e) {
                        var i = e.data,
                            a = e.error,
                            t = e.fetchMore,
                            r = e.loading,
                            o = e.refetch;
                        return n.children(function e() {
                            return t({
                                variables: {
                                    offset: i.feed.list.length
                                },
                                updateQuery: function e(n, i) {
                                    var a = i.fetchMoreResult;
                                    return a && n.feed.hasMore ? Object.assign({}, n, {
                                        feed: {
                                            list: [].concat(Object(c.a)(n.feed.list), Object(c.a)(a.feed.list)),
                                            hasMore: a.feed.hasMore,
                                            __typename: n.feed.__typename
                                        }
                                    }) : n
                                }
                            })
                        }, i && i.feed ? i.feed.list : [], !(!i || !i.feed) && i.feed.hasMore, r, a, o)
                    })
                };
            i.d(n, "FollowerFolloweeFeed", function() {
                return d
            }), i.d(n, "FollowerFolloweeFeedDataProvider", function() {
                return _
            })
        },
        "@ta/loading.error": function(n, i) {
            n.exports = e
        },
        "@ta/social.follow": function(e, i) {
            e.exports = n
        },
        "@ta/social.member-common": function(e, n) {
            e.exports = i
        },
        "@ta/styleguide.avatar": function(e, n) {
            e.exports = a
        },
        "@ta/styleguide.loading": function(e, n) {
            e.exports = t
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = r
        }
    })
});
//# sourceMappingURL=social.follow-feed.d5e4e5dca5.js.map