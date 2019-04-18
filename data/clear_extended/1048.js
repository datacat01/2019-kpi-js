define("@ta/social.suggested-followees", ["@ta/common.error-handling", "@ta/common.localstorage", "@ta/loading.error", "@ta/media.image", "@ta/overlays.headers", "@ta/overlays.managers", "@ta/overlays.modal", "@ta/platform.import", "@ta/social.feed", "@ta/social.follow", "@ta/social.member-common", "@ta/social.scroll", "@ta/social.skeletons", "@ta/social.tabs", "@ta/styleguide.avatar", "@ta/styleguide.button", "@ta/styleguide.icon", "@ta/styleguide.loading", "@ta/tracking.interactions", "@ta/common.global"], function(e, n, t, i, a, o, r, l, s, c, d, m, u, f, k, g, v, p, b, _) {
    return function(e) {
        var n = {};

        function t(i) {
            if (n[i]) return n[i].exports;
            var a = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }
        return t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: i
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (t.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var a in e) t.d(i, a, function(n) {
                    return e[n]
                }.bind(null, a));
            return i
        }, t.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = "./packages/social/suggested-followees/index.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, n, t) {
            "use strict";

            function i(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, n, t) {
            "use strict";

            function i(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, n, t) {
            "use strict";

            function i(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function a(e, n, t) {
                return n && i(e.prototype, n), t && i(e, t), e
            }
            t.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, t) {
            "use strict";

            function i(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, n, t) {
            "use strict";

            function i() {
                return (i = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, n, t) {
            "use strict";

            function i(e) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function e(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                })(e)
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return a
            });
            var i = t("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function a(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), n && Object(i.a)(e, n)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, n, t) {
            "use strict";

            function i(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return a
            });
            var i = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function a(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.forEach(function(n) {
                        Object(i.a)(e, n, t[n])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var i = t("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function o(e, n) {
                return !n || "object" !== Object(i.a)(n) && "function" != typeof n ? Object(a.a)(e) : n
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, n, t) {
            "use strict";

            function i(e, n) {
                return (i = Object.setPrototypeOf || function e(n, t) {
                    return n.__proto__ = t, n
                })(e, n)
            }
            t.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, n, t) {
            "use strict";
            var i = t("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function a(e) {
                return function n(e) {
                    if (Array.isArray(e)) {
                        for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                        return t
                    }
                }(e) || Object(i.a)(e) || function t() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            t.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, n, t) {
            "use strict";

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(n) {
                    return typeof n
                } : function e(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(e)
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function e(n) {
                    return i(n)
                } : function e(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : i(n)
                })(e)
            }
            t.d(n, "a", function() {
                return a
            })
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/api/api.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/api/api.jsx")
        },
        "./packages/common/classnames/classnames.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/features/features.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/infinite-loader/InfiniteLoader.jsx": function(e, n, t) {
            "use strict";
            var i = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = t("./node_modules/react/index.js"),
                m = t("./packages/common/logging/logging.jsx"),
                u = t.n(m),
                f = t("./packages/common/throttle/throttle.jsx"),
                k = t.n(f),
                g = 8,
                v = function(e) {
                    function n() {
                        var e, t;
                        Object(i.a)(this, n);
                        for (var a = arguments.length, l = new Array(a), m = 0; m < a; m++) l[m] = arguments[m];
                        return t = Object(o.a)(this, (e = Object(r.a)(n)).call.apply(e, [this].concat(l))), Object(c.a)(Object(s.a)(Object(s.a)(t)), "contentRef", d.createRef()), Object(c.a)(Object(s.a)(Object(s.a)(t)), "containerRef", d.createRef()), Object(c.a)(Object(s.a)(Object(s.a)(t)), "observer", void 0), Object(c.a)(Object(s.a)(Object(s.a)(t)), "numberOfLoadMores", g), Object(c.a)(Object(s.a)(Object(s.a)(t)), "infiniteScrollEnabled", !1), Object(c.a)(Object(s.a)(Object(s.a)(t)), "isLoading", !1), Object(c.a)(Object(s.a)(Object(s.a)(t)), "useWindow", function() {
                            return !t.containerRef.current
                        }), Object(c.a)(Object(s.a)(Object(s.a)(t)), "isContentVisible", function() {
                            if (!t.contentRef.current) return !1;
                            var e = t.contentRef.current.getBoundingClientRect(),
                                n = t.props.threshold;
                            return t.useWindow() ? window.innerHeight >= e.bottom - n : !(t.containerRef && !t.containerRef.current) && t.containerRef.current.getBoundingClientRect().bottom >= e.bottom - n
                        }), Object(c.a)(Object(s.a)(Object(s.a)(t)), "executeLoadMore", function() {
                            return t.props.loadMore().catch(function(e) {
                                u.a.error("infinite loader error: ", e)
                            }).then(function() {
                                return t.numberOfLoadMores -= 1, t.props.hasMore && t.isContentVisible() && t.numberOfLoadMores > 0 ? t.executeLoadMore() : (t.numberOfLoadMores < 0 && u.a.error("Attempted to load more than 10 times without scroll handler, do you have an infinite loop?"), t.isLoading = !1, Promise.resolve())
                            })
                        }), Object(c.a)(Object(s.a)(Object(s.a)(t)), "checkToLoadMore", function() {
                            t.props.hasMore && t.infiniteScrollEnabled && t.isContentVisible() && !t.isLoading && (t.numberOfLoadMores = g, t.isLoading = !0, t.executeLoadMore())
                        }), Object(c.a)(Object(s.a)(Object(s.a)(t)), "enableInfiniteScroll", function() {
                            t.infiniteScrollEnabled = !0, t.checkToLoadMore()
                        }), Object(c.a)(Object(s.a)(Object(s.a)(t)), "handleScroll", t.props.throttle ? k()(t.checkToLoadMore, t.props.throttle, !1) : t.checkToLoadMore), t
                    }
                    return Object(l.a)(n, e), Object(a.a)(n, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.useWindow() ? (window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleScroll)) : this.containerRef.current && (this.containerRef.current.addEventListener("scroll", this.handleScroll), this.containerRef.current.addEventListener("resize", this.handleScroll)), this.props.infiniteLoadOnMount && (this.infiniteScrollEnabled = !0, this.checkToLoadMore())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            this.infiniteScrollEnabled = !1, this.useWindow() ? (window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleScroll)) : this.containerRef.current && (this.containerRef.current.removeEventListener("scroll", this.handleScroll), this.containerRef.current.removeEventListener("resize", this.handleScroll))
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return this.props.children(this.containerRef, this.contentRef, this.enableInfiniteScroll, this.infiniteScrollEnabled)
                        }
                    }]), n
                }(d.Component);
            Object(c.a)(v, "defaultProps", {
                throttle: 200
            }), n.a = v
        },
        "./packages/common/logging/logging.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/common/throttle/throttle.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/throttle/throttle.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, n, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/search/tracking/SearchRecordTracker.jsx": function(e, n, t) {
            "use strict";
            var i = t("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                d = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                m = t("./node_modules/react/index.js"),
                u = t("./packages/common/tracking/tracking.jsx"),
                f = function(e) {
                    function n() {
                        var e, t;
                        Object(a.a)(this, n);
                        for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                        return t = Object(r.a)(this, (e = Object(l.a)(n)).call.apply(e, [this].concat(o))), Object(d.a)(Object(c.a)(Object(c.a)(t)), "state", {
                            clicked: !1
                        }), Object(d.a)(Object(c.a)(Object(c.a)(t)), "getSearchRecordPayload", function(e) {
                            return new URLSearchParams(JSON.parse(JSON.stringify(e)))
                        }), Object(d.a)(Object(c.a)(Object(c.a)(t)), "click", function() {
                            t.state.clicked || (t.sendSearchRecordRequest(), t.setState({
                                clicked: !0
                            }))
                        }), Object(d.a)(Object(c.a)(Object(c.a)(t)), "sendSearchRecordRequest", function() {
                            t.props.url && t.props.searchRecordData && fetch(t.props.url, {
                                method: "POST",
                                body: t.getSearchRecordPayload(t.props.searchRecordData),
                                credentials: "same-origin"
                            })
                        }), t
                    }
                    return Object(s.a)(n, e), Object(o.a)(n, [{
                        key: "render",
                        value: function e() {
                            return m.createElement("span", {
                                onClick: this.click
                            }, m.createElement(u.ClickTracker, Object(i.a)({}, this.props, {
                                forceAjax: !0
                            }), this.props.children))
                        }
                    }]), n
                }(m.Component);
            Object(d.a)(f, "defaultProps", {
                once: !0,
                url: "/SearchRecord"
            }), n.a = f
        },
        "./packages/social/cards/ProfileCardResponsive.jsx": function(e, n, t) {
            "use strict";
            var i = t("./node_modules/react/index.js"),
                a = t("./node_modules/react-redux/es/index.js"),
                o = t("./packages/social/cards/profile-narrow/ProfileCardNarrow.jsx"),
                r = t("./packages/social/cards/profile-wide/ProfileCardWide.jsx"),
                l = function e(n) {
                    return "MOBILE" === n.device ? i.createElement(o.a, {
                        profile: n.profile,
                        memberInfo: n.memberInfo
                    }) : i.createElement(r.a, {
                        profile: n.profile,
                        memberInfo: n.memberInfo
                    })
                };
            l.defaultProps = {
                memberInfo: void 0
            }, n.a = Object(a.connect)(function(e) {
                return {
                    device: e.meta.device.viewportCategory
                }
            })(l)
        },
        "./packages/social/cards/profile-narrow/ProfileCardNarrow.jsx": function(e, n, t) {
            "use strict";
            var i = t("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                a = t("./node_modules/react/index.js"),
                o = t("./node_modules/react-redux/es/index.js"),
                r = t("@ta/social.member-common"),
                l = t("./packages/common/routing/routing.jsx"),
                s = t("@ta/social.follow"),
                c = t.n(s),
                d = t("./packages/search/tracking/SearchRecordTracker.jsx"),
                m = t("@ta/styleguide.avatar"),
                u = function e(n) {
                    var t = n.profile,
                        i = n.memberInfo;
                    return a.createElement("div", {
                        className: "social-cards-profile-narrow-IdentitySection__identity_wrap--10o6W"
                    }, a.createElement("div", {
                        className: "social-cards-profile-narrow-IdentitySection__identity_block--eQkEB"
                    }, a.createElement("div", {
                        className: "social-cards-profile-narrow-IdentitySection__avatar_wrap--E9n8F"
                    }, a.createElement(m.Avatar, {
                        photo: t.avatar,
                        withBorder: !0
                    })), a.createElement("div", {
                        className: "social-cards-profile-narrow-IdentitySection__member_name_wrap--2dr7j"
                    }, a.createElement(r.MemberName, {
                        profile: t,
                        memberInfo: i,
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
                g = function e(n) {
                    var t = n.profile,
                        o = n.trackType,
                        r = n.trackPayload;
                    switch (o) {
                        case "search":
                            var l = {
                                module: "Search_Results",
                                action: t.isFollowing ? "unfollow_click" : "follow_click",
                                context: "user_id=".concat(t.userId)
                            };
                            return a.createElement(d.a, Object(i.a)({
                                once: !1,
                                searchRecordData: r
                            }, l), a.createElement(c.a, {
                                profile: t,
                                displayType: "button+icon",
                                size: "small",
                                onClick: function e(n) {
                                    return k(n)
                                }
                            }));
                        default:
                            return a.createElement(c.a, {
                                profile: t,
                                displayType: "button+icon",
                                size: "small",
                                onClick: function e(n) {
                                    return k(n)
                                }
                            })
                    }
                },
                v = function e(n) {
                    var t, i;
                    return a.createElement(l.Link, {
                        href: null === (t = n.profile) || void 0 === t ? void 0 : null === (i = t.route) || void 0 === i ? void 0 : i.url,
                        target: n.linkNewTabDT && "MOBILE" !== n.device ? "_blank" : "_self",
                        className: n.fullHeight ? "social-cards-profile-narrow-ProfileCardNarrow__flex_columns--MAyyA" : ""
                    }, a.createElement("div", {
                        className: "".concat("social-cards-profile-narrow-ProfileCardNarrow__profile_wrap--3brH_", " ").concat(n.fullHeight ? "social-cards-profile-narrow-ProfileCardNarrow__full_height--lR9QS" : "")
                    }, a.createElement(f, {
                        profile: n.profile,
                        memberInfo: n.memberInfo
                    }), a.createElement("div", {
                        className: "social-cards-profile-narrow-ProfileCardNarrow__profile_stats_block--DYAGo"
                    }, a.createElement(r.MemberStatsBasic, {
                        profile: n.profile
                    })), n.memberInfo && n.memberInfo.infoWithMember && a.createElement(r.MemberReasonWhy, {
                        type: n.memberInfo.suggestedFolloweeType,
                        reason: n.memberInfo.infoWithMember.reason,
                        className: "social-cards-profile-narrow-ProfileCardNarrow__reason_why--b7jE6",
                        singleLine: !0
                    }), a.createElement("div", {
                        className: "social-cards-profile-narrow-ProfileCardNarrow__profile_follow_block--1yE6V"
                    }, !n.profile.isMe && a.createElement(g, {
                        profile: n.profile,
                        trackType: n.trackType,
                        trackPayload: n.trackPayload
                    }))))
                };
            v.defaultProps = {
                fullHeight: !1,
                linkNewTabDT: !1,
                trackType: "",
                trackPayload: {},
                memberInfo: void 0
            }, n.a = Object(o.connect)(function(e) {
                return {
                    device: e.meta.device.viewportCategory
                }
            })(v)
        },
        "./packages/social/cards/profile-wide/ProfileCardWide.jsx": function(e, n, t) {
            "use strict";
            var i = t("./node_modules/react/index.js"),
                a = t("@ta/styleguide.avatar"),
                o = t("@ta/social.member-common"),
                r = t("@ta/social.follow"),
                l = t.n(r),
                s = t("./packages/common/routing/routing.jsx"),
                c = function e(n) {
                    var t, r = n.profile,
                        c = n.memberInfo,
                        d = n.onFollow,
                        m = n.addProfileLink,
                        u = n.showFacebookIcon,
                        f = i.createElement("div", {
                            className: "ui_card section ".concat("social-cards-profile-wide-ProfileCardWide__card--UEavE")
                        }, i.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__avatar--2hw5s"
                        }, i.createElement(a.Avatar, {
                            photo: r.avatar,
                            size: "large",
                            withBorder: !0
                        })), i.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__info--3X3EI"
                        }, i.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__member_name_container--3dYop"
                        }, i.createElement(o.MemberName, {
                            profile: r,
                            memberInfo: c,
                            addProfileLink: !1,
                            socialConnection: u ? "FACEBOOK" : ""
                        })), i.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__member_stats_container--1jjM1"
                        }, i.createElement(o.MemberStatsBasic, {
                            profile: r
                        })), r.bio && i.createElement("div", {
                            className: "".concat("social-cards-profile-wide-ProfileCardWide__bio_container--xx95E", " ").concat("social-cards-profile-wide-ProfileCardWide__bio--24oC6")
                        }, r.bio), c && c.infoWithMember && i.createElement(o.MemberReasonWhy, {
                            type: c.suggestedFolloweeType,
                            reason: c.infoWithMember.reason,
                            className: "social-cards-profile-wide-ProfileCardWide__reason_why--2lIJ5",
                            singleLine: !0
                        })), !r.isMe && i.createElement("div", {
                            className: "social-cards-profile-wide-ProfileCardWide__follow--2Mazt"
                        }, i.createElement(l.a, {
                            profile: r,
                            size: "small",
                            displayType: "button+icon",
                            onClick: function e(n) {
                                return function e(n) {
                                    n.stopPropagation(), n.preventDefault()
                                }(n)
                            },
                            onToggleFollow: d
                        })));
                    return m ? i.createElement(s.Link, {
                        href: null == r ? void 0 : null === (t = r.route) || void 0 === t ? void 0 : t.url
                    }, f) : f
                };
            c.defaultProps = {
                memberInfo: void 0,
                onFollow: void 0,
                addProfileLink: !0,
                showFacebookIcon: !1
            }, n.a = c
        },
        "./packages/social/common/FacebookConnectButton.jsx": function(e, n, t) {
            "use strict";
            var i = t("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                d = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                m = t("./node_modules/react/index.js"),
                u = t("./node_modules/react-redux/es/index.js"),
                f = t("@ta/styleguide.icon"),
                k = t("./packages/common/classnames/classnames.jsx"),
                g = t.n(k),
                v = t("./packages/common/i18n/i18n.jsx"),
                p = function(e) {
                    function n() {
                        var e, t;
                        Object(a.a)(this, n);
                        for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                        return t = Object(r.a)(this, (e = Object(l.a)(n)).call.apply(e, [this].concat(o))), Object(d.a)(Object(c.a)(Object(c.a)(t)), "onClick", function(e) {
                            t.connectToFB(), t.props.onClick && t.props.onClick(e)
                        }), Object(d.a)(Object(c.a)(Object(c.a)(t)), "connectToFB", function() {
                            require(["trjs!ta/registration/FB"], function(e) {
                                e.showLogin(function(e, n) {
                                    window.require(["ta/registration/RegOverlay"], function(i) {
                                        var a = "MOBILE" === t.props.viewportCategory;
                                        i.showRegOverlay(null, null, a, {
                                            flow: "FACEBOOK_CONNECT",
                                            pid: 40466,
                                            userRequestedForce: "true",
                                            extraQueryParams: {
                                                token: e.accessToken,
                                                expires: n,
                                                social: "true"
                                            },
                                            onClose: function e() {
                                                t.props.onClose && t.props.onClose()
                                            }
                                        })
                                    })
                                }, function() {
                                    t.props.onFbAuthFailure && t.props.onFbAuthFailure()
                                })
                            })
                        }), t
                    }
                    return Object(s.a)(n, e), Object(o.a)(n, [{
                        key: "componentDidMount",
                        value: function e() {
                            require(["trjs!ta/registration/FB"], function(e) {})
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return m.createElement(m.Fragment, null, m.createElement("div", {
                                id: "fb_context_data",
                                className: "hidden",
                                "data-ta-server-time": this.props.taServerTime,
                                "data-app-id": this.props.facebookConnectAppId,
                                "data-skip-session-check": this.props.skipFacebookSessionCheck,
                                "data-api-version": this.props.apiVersion
                            }), m.createElement("div", {
                                id: "fb_sdk_url",
                                "data-url": this.props.sdkUrl
                            }), m.createElement("div", {
                                className: "social-common-FacebookConnectButton__buttonContainer--3kUl4"
                            }, m.createElement("button", {
                                className: g()("ui_button", {
                                    fullwidth: this.props.fullwidth
                                }, "social-common-FacebookConnectButton__facebook_ui_button--2xwMr"),
                                onClick: this.onClick
                            }, m.createElement(f.Icon, {
                                className: "social-common-FacebookConnectButton__icon--O1t2W",
                                name: "facebook"
                            }), m.createElement("span", null, Object(v.localize)("reg_continue_w_face")))))
                        }
                    }]), n
                }(m.Component);
            Object(d.a)(p, "defaultProps", {
                onClose: void 0,
                onClick: void 0,
                onFbAuthFailure: void 0,
                fullwidth: !1
            }), n.a = Object(u.connect)(function(e, n) {
                return Object(i.a)({
                    taServerTime: e.auth.fbApi.taServerTime,
                    facebookConnectAppId: e.auth.fbApi.facebookConnectAppId,
                    skipFacebookSessionCheck: e.auth.fbApi.skipFacebookSessionCheck,
                    apiVersion: e.auth.fbApi.apiVersion,
                    sdkUrl: e.auth.fbApi.sdkUrl,
                    viewportCategory: e.meta.device.viewportCategory
                }, n)
            })(p)
        },
        "./packages/social/feed/MemberProfile.fragment.gql": function(e, n, t) {
            "use strict";
            var i = t("./packages/social/feed/feedFragments/ContributionCount.fragment.gql"),
                a = t("./roots/social/profile/ProfileBasicFields.fragment.gql"),
                o = t("./packages/social/feed/feedFragments/HometownFields.fragment.gql"),
                r = {
                    kind: "Document",
                    definitions: [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "MemberForProfile"
                        },
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "ProfileBasicFields"
                                },
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
                                    value: "followerCount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "followeeCount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "website"
                                },
                                arguments: [],
                                directives: []
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
                                alias: {
                                    kind: "Name",
                                    value: "memberCreated"
                                },
                                name: {
                                    kind: "Name",
                                    value: "created"
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "ContributionCount"
                                },
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "coverPhoto"
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
                                    value: "memberType"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isBrand"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isDestinationExpert"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isDestinationMarketer"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isInfluencer"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isTAStaff"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "expertForums"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "generalForumIds"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "geoForumLocationIds"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "forums"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "forumId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                    }],
                    loc: {
                        start: 0,
                        end: 822
                    }
                };
            r.loc.source = {
                body: "148b8a66ca34"
            };
            var l = {};

            function s(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !l[n] && (l[n] = !0, !0)
                })
            }
            r.definitions = r.definitions.concat(s(i.a.definitions)), r.definitions = r.definitions.concat(s(a.a.definitions)), r.definitions = r.definitions.concat(s(o.a.definitions)), n.a = r
        },
        "./packages/social/feed/feedFragments/ContributionCount.fragment.gql": function(e, n, t) {
            "use strict";
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ContributionCount"
                    },
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sumReview"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sumMedia"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "repost"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "forumPost"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "linkPost"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "photo"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "video"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "trip"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "helpfulVote"
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
                    end: 199
                }
            };
            i.loc.source = {
                body: "c9b676b76824"
            }, n.a = i
        },
        "./packages/social/feed/feedFragments/HometownFields.fragment.gql": function(e, n, t) {
            "use strict";
            var i = {
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
            i.loc.source = {
                body: "cd3d893a1d20"
            }, n.a = i
        },
        "./packages/social/member/MemberBio.jsx": function(e, n, t) {
            "use strict";
            var i = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                a = t("./node_modules/react/index.js"),
                o = t("./packages/common/classnames/classnames.jsx"),
                r = t.n(o),
                l = function e(n) {
                    var t = n.bio,
                        o = n.truncateLength,
                        l = n.className,
                        s = n.smallText;
                    return t ? a.createElement("div", {
                        className: r()("social-member-MemberBio__member_info--1J8Qa", l, Object(i.a)({}, "social-member-MemberBio__small_text--2wbSn", s))
                    }, t.length > o ? "".concat(t.substring(0, o).trim(), "...") : t) : null
                };
            l.defaultProps = {
                truncateLength: 1 / 0,
                className: "",
                smallText: !1
            }, n.a = l
        },
        "./packages/social/suggested-followees/index.jsx": function(e, n, t) {
            "use strict";
            t.r(n);
            var i = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                c = t("./node_modules/react/index.js"),
                d = t("./packages/common/i18n/i18n.jsx"),
                m = t("@ta/overlays.modal"),
                u = t("@ta/social.tabs"),
                f = t("@ta/social.scroll"),
                k = t("@ta/tracking.interactions"),
                g = t("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                v = t("./node_modules/react-redux/es/index.js"),
                p = t("./packages/common/logging/logging.jsx"),
                b = t.n(p),
                _ = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ExternallyConnectedAccountTypesQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "loggedInUserId"
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
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "memberProfile"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "userId"
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
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "loggedInUserId"
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
                                            value: "username"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "externallyConnectedAccountTypes"
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
                        end: 176
                    }
                };
            _.loc.source = {
                body: "a8d6f79488fc"
            };
            var h = _,
                F = function e(n) {
                    var t = n.children,
                        i = n.loggedInUserId,
                        a = n.alwaysDisplayChildren;
                    return c.createElement(g.Query, {
                        errorPolicy: "all",
                        query: h,
                        variables: {
                            loggedInUserId: i
                        },
                        skip: !i && !a
                    }, function(e) {
                        var n = e.data,
                            i = e.error;
                        return n && n.memberProfile ? t(n.memberProfile) : a && !i ? t({
                            username: null
                        }) : (i && b.a.error("Error fetching users external account type: ".concat(i)), null)
                    })
                };
            F.defaultProps = {
                alwaysDisplayChildren: !1
            };
            var N = Object(v.connect)(function(e) {
                    return {
                        loggedInUserId: e.auth.loggedInUserId
                    }
                })(F),
                S = t("@ta/social.member-common"),
                y = t("./packages/social/member/MemberBio.jsx"),
                w = t("./packages/common/routing/routing.jsx"),
                E = t("@ta/social.follow"),
                j = t.n(E),
                O = t("@ta/styleguide.avatar"),
                C = t("@ta/media.image"),
                I = function e(n) {
                    var t = n.member;
                    return c.createElement(k.InteractionLogger, null, function(e) {
                        var n;
                        return c.createElement(w.Link, {
                            href: null == t ? void 0 : null === (n = t.route) || void 0 === n ? void 0 : n.url,
                            onClick: function n(i) {
                                return e(i, "userClick", {
                                    userId: t.userId
                                })
                            }
                        }, c.createElement("div", {
                            className: "social-suggested-followees-FolloweeCardDetailed__candidate--38AuF",
                            key: t.displayName
                        }, c.createElement("div", {
                            className: "social-suggested-followees-FolloweeCardDetailed__cover_photo--2qemU"
                        }, t.coverPhoto && t.coverPhoto.photoSizes && t.coverPhoto.photoSizes.length > 0 && c.createElement(C.ResponsiveImage, {
                            sources: t.coverPhoto.photoSizes,
                            width: "100%",
                            height: "100px"
                        })), c.createElement("div", {
                            className: "social-suggested-followees-FolloweeCardDetailed__avatar_and_follow--2I-kt"
                        }, c.createElement("div", {
                            className: "social-suggested-followees-FolloweeCardDetailed__avatar_container--1oIn6"
                        }, t.avatar && t.avatar.photoSizes && t.avatar.photoSizes.length > 1 && c.createElement(O.Avatar, {
                            size: "large",
                            withBorder: !0,
                            photo: t.avatar,
                            onClick: function n(i) {
                                return e(i, "userClick", {
                                    userId: t.userId
                                })
                            }
                        })), c.createElement("div", {
                            className: "social-suggested-followees-FolloweeCardDetailed__follow_container--1aZf_"
                        }, c.createElement(j.a, {
                            profile: t,
                            displayType: "button+icon",
                            size: "small",
                            onClick: function e(n) {
                                n.stopPropagation(), n.preventDefault()
                            }
                        }))), c.createElement("div", {
                            className: "social-suggested-followees-FolloweeCardDetailed__member_info--pzbO4"
                        }, c.createElement(S.MemberName, {
                            profile: t,
                            displayNameClassName: "social-suggested-followees-FolloweeCardDetailed__display_name--lgeIN",
                            addProfileLink: !1,
                            singleLine: !0
                        }), c.createElement("div", {
                            className: "social-suggested-followees-FolloweeCardDetailed__member_stats_container--36-5B"
                        }, c.createElement(S.MemberStatsBasic, {
                            profile: t
                        })), c.createElement(y.a, {
                            className: "social-suggested-followees-FolloweeCardDetailed__bio--1UI_D",
                            truncateLength: 80,
                            bio: t.bio,
                            smallText: !0
                        }))))
                    })
                },
                T = t("./packages/common/features/features.jsx"),
                P = function(e) {
                    function n() {
                        return Object(i.a)(this, n), Object(o.a)(this, Object(r.a)(n).apply(this, arguments))
                    }
                    return Object(l.a)(n, e), Object(a.a)(n, [{
                        key: "shouldComponentUpdate",
                        value: function e(n) {
                            return n.member.isFollowing !== this.props.member.isFollowing
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var n = this.props,
                                t = n.member,
                                i = n.suggestedFolloweesInfo,
                                a = n.showBio,
                                o = n.overlay,
                                r = Object(T.featureIsEnabled)("onboarding_suggested_follows_by_interest") && "onboarding-interstitial" === o,
                                l = function e() {
                                    var n;
                                    return c.createElement("div", {
                                        className: "social-suggested-followees-FolloweeCardSimple__card_container--3eDUr",
                                        key: t.displayName
                                    }, c.createElement("div", null, c.createElement("div", {
                                        className: "social-suggested-followees-FolloweeCardSimple__avatar_container--3uZpm"
                                    }, c.createElement(O.Avatar, {
                                        photo: t.avatar,
                                        size: "large",
                                        withBorder: !0
                                    })), c.createElement("div", {
                                        className: "social-suggested-followees-FolloweeCardSimple__member_name_container--dO_yN"
                                    }, c.createElement(S.MemberName, {
                                        profile: t,
                                        memberInfo: i,
                                        displayNameClassName: "social-suggested-followees-FolloweeCardSimple__display_name--2m7mM",
                                        usernameClassName: "social-suggested-followees-FolloweeCardSimple__user_name--2_8Aq",
                                        addProfileLink: !1,
                                        singleLine: !0
                                    })), a && c.createElement(y.a, {
                                        className: "social-suggested-followees-FolloweeCardSimple__bio--3mBt_",
                                        truncateLength: 60,
                                        bio: t.bio,
                                        smallText: !0
                                    }), (null == i ? void 0 : null === (n = i.infoWithMember) || void 0 === n ? void 0 : n.reason) && c.createElement(S.MemberReasonWhy, {
                                        className: "social-suggested-followees-FolloweeCardSimple__reason_why--2Vr5D",
                                        type: i.suggestedFolloweeType,
                                        reason: i.infoWithMember.reason,
                                        singleLine: !0,
                                        lightText: !0
                                    })), c.createElement("div", {
                                        className: "social-suggested-followees-FolloweeCardSimple__follow_button_container--25fM7"
                                    }, c.createElement(j.a, {
                                        profile: t,
                                        displayType: "button+icon",
                                        size: "fullwidth small",
                                        onClick: function e(n) {
                                            n.stopPropagation(), n.preventDefault()
                                        },
                                        disableToast: r,
                                        attemptOnboarding: !r
                                    })))
                                };
                            return c.createElement(k.InteractionLogger, null, function(e) {
                                var n;
                                return c.createElement(c.Fragment, null, r ? c.createElement(l, null) : c.createElement(w.Link, {
                                    href: null == t ? void 0 : null === (n = t.route) || void 0 === n ? void 0 : n.url,
                                    onClick: function n(i) {
                                        return e(i, "userClick", {
                                            userId: t.userId
                                        })
                                    }
                                }, c.createElement(l, null)))
                            })
                        }
                    }]), n
                }(c.Component);
            Object(s.a)(P, "defaultProps", {
                showBio: !1
            });
            var x = Object(v.connect)(function(e) {
                    return {
                        overlay: e.overlays.global
                    }
                })(P),
                M = t("./packages/common/infinite-loader/InfiniteLoader.jsx"),
                D = t("@ta/overlays.headers"),
                A = t("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                L = t("./packages/common/tracking/tracking.jsx"),
                R = t.n(L),
                V = t("./packages/common/classnames/classnames.jsx"),
                z = t.n(V),
                B = t("@ta/styleguide.loading"),
                U = t("./packages/social/cards/ProfileCardResponsive.jsx"),
                W = !1,
                q = function e(n) {
                    var t = function e(n) {
                            var t = n.refetch;
                            return c.createElement("div", {
                                className: z()("social-suggested-followees-SuggestedFacebookMembers__message_area--2pjOW", "social-suggested-followees-SuggestedFacebookMembers__refetch--2sGB2")
                            }, Object(d.localize)("onboarding_social_fbfollow_screen_header_error_cant_get_friends"), c.createElement("button", {
                                className: "ui_button standard",
                                onClick: function e(n) {
                                    n.preventDefault(), t()
                                }
                            }, Object(d.localize)("onboarding_social_fbfollow_screen_header_error_try_again")))
                        },
                        i = function e() {
                            return c.createElement("div", {
                                className: "ui_card section"
                            }, c.createElement(B.LoadingSpinner, null))
                        };
                    return n.error ? c.createElement(t, {
                        refetch: n.refetch
                    }) : n.status && "PENDING" === n.status ? (n.refetch(), c.createElement(i, null)) : n.status && "FAILED" === n.status ? c.createElement(t, {
                        refetch: n.refetch
                    }) : n.status && "COMPLETE" === n.status && 0 === n.connections.length ? c.createElement(function e() {
                        return c.createElement("div", {
                            className: "social-suggested-followees-SuggestedFacebookMembers__message_area--2pjOW"
                        }, Object(d.unescaped)(Object(d.localize)("social_All_set_no_more_Facebook_connections")))
                    }, null) : (W || (R()({
                        module: "Social_suggested_fb_members",
                        action: "Social_suggested_fb_members_got_friends",
                        context: n.connections.length.toString()
                    }), W = !0), c.createElement("div", {
                        ref: n.contentRef
                    }, n.connections.map(function(e) {
                        return e ? c.createElement(U.a, {
                            key: e.userProfile.userId,
                            profile: Object(A.a)({}, e.userProfile, {
                                displayName: e.fullName
                            })
                        }) : null
                    }), n.loading && c.createElement(i, null)))
                },
                G = t("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                H = t("./packages/social/feed/MemberProfile.fragment.gql"),
                Q = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "recommendedConnections"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "connectionType"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "SocialConnectionTypeInput"
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
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "recommendedExternalConnectionsToFollow"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "connectionType"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "connectionType"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "connections"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "fullName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "userProfile"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "MemberForProfile"
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
                                            value: "status"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasMore"
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
                        end: 401
                    }
                };
            Q.loc.source = {
                body: "d37473940114"
            };
            var K = {};
            Q.definitions = Q.definitions.concat(function J(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !K[n] && (K[n] = !0, !0)
                })
            }(H.a.definitions));
            var Y = Q,
                X = 0,
                Z = function(e) {
                    function n() {
                        return Object(i.a)(this, n), Object(o.a)(this, Object(r.a)(n).apply(this, arguments))
                    }
                    return Object(l.a)(n, e), Object(a.a)(n, [{
                        key: "render",
                        value: function e() {
                            var n = this;
                            return c.createElement(g.Query, {
                                errorPolicy: "all",
                                notifyOnNetworkStatusChange: !0,
                                query: Y,
                                variables: {
                                    connectionType: this.props.connectionType,
                                    offset: this.props.offset,
                                    limit: this.props.limit
                                }
                            }, function(e) {
                                var t = e.data,
                                    i = e.error,
                                    a = e.loading,
                                    o = e.refetch,
                                    r = e.fetchMore;
                                return n.props.children(function e() {
                                    return r({
                                        variables: {
                                            offset: t.recommendedExternalConnectionsToFollow.connections.length
                                        },
                                        updateQuery: function e(n, t) {
                                            var i = t.fetchMoreResult;
                                            return i && n.recommendedExternalConnectionsToFollow.hasMore ? Object.assign({}, n, {
                                                recommendedExternalConnectionsToFollow: {
                                                    connections: [].concat(Object(G.a)(n.recommendedExternalConnectionsToFollow.connections), Object(G.a)(i.recommendedExternalConnectionsToFollow.connections)),
                                                    hasMore: i.recommendedExternalConnectionsToFollow.hasMore,
                                                    __typename: n.recommendedExternalConnectionsToFollow.__typename
                                                }
                                            }) : n
                                        }
                                    })
                                }, t && t.recommendedExternalConnectionsToFollow ? t.recommendedExternalConnectionsToFollow.connections : [], !(!t || !t.recommendedExternalConnectionsToFollow) && t.recommendedExternalConnectionsToFollow.hasMore, t && t.recommendedExternalConnectionsToFollow && t.recommendedExternalConnectionsToFollow.status, a, i, function e() {
                                    X < 3 && (X++, setTimeout(function() {
                                        o().then(function() {
                                            return n.forceUpdate()
                                        })
                                    }, 1e3)), X = 0
                                })
                            })
                        }
                    }]), n
                }(c.Component);
            Object(s.a)(Z, "defaultProps", {
                connectionType: "FACEBOOK",
                offset: 0,
                limit: 20
            });
            var $ = Z,
                ee = t("@ta/loading.error"),
                ne = t("./packages/social/feed/feedFragments/HometownFields.fragment.gql"),
                te = {
                    kind: "Document",
                    definitions: [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "MemberFields"
                        },
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
                                    value: "displayName"
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
                                    value: "isFollowing"
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
                                    value: "followeeCount"
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
                                    value: "bio"
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
                                    value: "coverPhoto"
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
                                                    value: "height"
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
                                                    value: "url"
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
                                                    value: "height"
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
                                                    value: "url"
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
                    }],
                    loc: {
                        start: 0,
                        end: 488
                    }
                };
            te.loc.source = {
                body: "35e277fc0644"
            };
            var ie = {};
            te.definitions = te.definitions.concat(function ae(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !ie[n] && (ie[n] = !0, !0)
                })
            }(ne.a.definitions));
            var oe = te,
                re = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "RecommendedFollowees"
                        },
                        variableDefinitions: [{
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
                                    value: "locationId"
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
                                    value: "locale"
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
                                    value: "types"
                                }
                            },
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "SuggestedFolloweesTypeInput"
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
                                    value: "placement"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "SuggestedFolloweesPlacementInput"
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
                                    value: "recommendedFollowees"
                                },
                                arguments: [{
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
                                        value: "location"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "locationId"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "locale"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "locale"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "types"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "types"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "placement"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "placement"
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
                                            value: "suggestedFollowees"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "userProfile"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "MemberFields"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "info"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "preferredDisplayname"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "suggestedFolloweeType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "infoWithMember"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "reason"
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
                                            value: "impressionId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "sponsoredProfileLosAngeles"
                                },
                                name: {
                                    kind: "Name",
                                    value: "memberProfile"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "userId"
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
                                                kind: "StringValue",
                                                value: "5C62A5343E01858A64B810062E3F15EC",
                                                block: !1
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "MemberFields"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 748
                    }
                };
            re.loc.source = {
                body: "6c197bffa34a"
            };
            var le = {};
            re.definitions = re.definitions.concat(function se(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !le[n] && (le[n] = !0, !0)
                })
            }(oe.definitions));
            var ce = re,
                de = function e(n) {
                    return c.createElement(c.Fragment, null, n.suggestedFollowees.map(function(e) {
                        return e.userProfile ? c.createElement(U.a, {
                            key: e.userProfile.userId,
                            profile: e.userProfile,
                            memberInfo: e.info
                        }) : null
                    }))
                },
                me = function e(n) {
                    return c.createElement(g.Query, {
                        errorPolicy: "all",
                        query: ce,
                        variables: {
                            locationId: n.locationId,
                            limit: n.limit,
                            locale: n.locale,
                            types: n.types,
                            placement: n.placement
                        }
                    }, function(e) {
                        var t = e.data,
                            i = e.error,
                            a = e.loading,
                            o = e.refetch;
                        return a ? c.createElement("div", {
                            className: "social-suggested-followees-SuggestedTripAdvisorMembers__loading--2zvmJ"
                        }, c.createElement(B.LoadingSpinner, null)) : i ? (b.a.error("Error fetching SuggestedTripAdvisorMembers data for ".concat(n.userId, ": "), i), c.createElement(ee.LoadingErrorMessage, {
                            refetch: o
                        })) : c.createElement(k.RecommendedFolloweesImpressionIdContext.Provider, {
                            value: {
                                recommendedFolloweesImpressionId: t.recommendedFollowees.impressionId
                            }
                        }, c.createElement(de, {
                            suggestedFollowees: t.recommendedFollowees.suggestedFollowees
                        }))
                    })
                };
            me.defaultProps = {
                limit: 5,
                types: ["FEATURED", "FOLLOWERS", "FRIENDS_OF_FRIENDS", "GEO"],
                placement: void 0
            };
            var ue = Object(v.connect)(function(e, n) {
                    return {
                        userId: e.auth.loggedInUserId,
                        locationId: n.locationId || e.page.geoId || null,
                        locale: e.i18n.locale
                    }
                })(me),
                fe = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "RecommendedFolloweesSectionsQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "locationId"
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
                                    value: "locale"
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
                                    value: "prioritizedTypes"
                                }
                            },
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "SuggestedFolloweesTypeInput"
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
                                    value: "recommendedFolloweesSections"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "location"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "locationId"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "locale"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "locale"
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
                                        value: "prioritizedTypes"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "prioritizedTypes"
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
                                            value: "impressionId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "socialProofStatus"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sections"
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
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "items"
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
                                                            value: "object"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "MemberFields"
                                                                },
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "suggestedFolloweesInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "preferredDisplayname"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "suggestedFolloweeType"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "infoWithMember"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "reason"
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 665
                    }
                };
            fe.loc.source = {
                body: "031391f2395b"
            };
            var ke = {};
            fe.definitions = fe.definitions.concat(function ge(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !ke[n] && (ke[n] = !0, !0)
                })
            }(oe.definitions));
            var ve = fe,
                pe = function e(n) {
                    return c.createElement(g.Query, {
                        errorPolicy: "all",
                        query: ve,
                        variables: {
                            locationId: n.locationId,
                            locale: n.locale,
                            prioritizedTypes: n.prioritizedTypes,
                            limit: n.limit
                        }
                    }, function(e) {
                        var t = e.data,
                            i = e.error,
                            a = e.loading,
                            o = e.refetch;
                        return a ? c.createElement("div", {
                            className: "social-suggested-followees-SuggestedTripAdvisorMembersSections__loading--3A_UO"
                        }, c.createElement(B.LoadingSpinner, null)) : i ? (b.a.error("Error fetching SuggestedTripAdvisorMembersSections data for ".concat(n.userId, ": ").concat(i)), c.createElement(ee.LoadingErrorMessage, {
                            refetch: o
                        })) : t && t.recommendedFolloweesSections && t.recommendedFolloweesSections.sections ? 1 === t.recommendedFolloweesSections.sections.length ? n.noShelvesFallback ? n.noShelvesFallback : c.createElement(k.RecommendedFolloweesImpressionIdContext.Provider, {
                            value: {
                                recommendedFolloweesImpressionId: t.recommendedFolloweesSections.impressionId
                            }
                        }, c.createElement(de, {
                            suggestedFollowees: t.recommendedFolloweesSections.sections[0].items.map(function(e) {
                                return {
                                    userProfile: e.object,
                                    info: e.suggestedFolloweesInfo
                                }
                            })
                        })) : c.createElement(k.RecommendedFolloweesImpressionIdContext.Provider, {
                            value: {
                                recommendedFolloweesImpressionId: t.recommendedFolloweesSections.impressionId
                            }
                        }, c.createElement("div", {
                            className: "social-suggested-followees-SuggestedTripAdvisorMembersSections__sections--21u_O"
                        }, t.recommendedFolloweesSections.sections.map(function(e) {
                            return e.items && e.items.length > 2 ? c.createElement(Te, {
                                key: e.id,
                                suggestedFollowees: e.items,
                                shelfId: e.id,
                                title: e.title,
                                hideShowMore: !0,
                                showBio: !0,
                                forceSimple: !0
                            }) : null
                        }))) : null
                    })
                };
            pe.defaultProps = {
                prioritizedTypes: [],
                limit: 20,
                noShelvesFallback: void 0
            };
            var be = Object(v.connect)(function(e, n) {
                    return {
                        userId: e.auth.loggedInUserId,
                        locationId: n.locationId || e.page.geoId || null,
                        locale: e.i18n.locale
                    }
                })(pe),
                _e = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                he = t("@ta/styleguide.button"),
                Fe = t.n(he),
                Ne = t("./packages/social/common/FacebookConnectButton.jsx"),
                Se = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "FacebookTokenQuery"
                        },
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "recommendedExternalConnectionsToFollow"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "connectionType"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "FACEBOOK"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "additionalInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasFacebookToken"
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
                                    value: "myExternallyConnectedAccountTypes"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 188
                    }
                };
            Se.loc.source = {
                body: "98ae2aa2092a"
            };
            var ye = Se,
                we = function e(n) {
                    return n.isFacebookConnected ? c.createElement(c.Fragment, null, c.createElement("div", {
                        className: "social-suggested-followees-ValidatedFacebookToken__header--1PJ3c"
                    }, Object(d.localize)("facebook_reconnect_header"))) : c.createElement(c.Fragment, null, c.createElement("div", {
                        className: z()("social-suggested-followees-ValidatedFacebookToken__header--1PJ3c", "social-suggested-followees-ValidatedFacebookToken__twoLines--2bj2s")
                    }, Object(d.localize)("have_friends_header")), c.createElement("div", {
                        className: "social-suggested-followees-ValidatedFacebookToken__text--5561i"
                    }, Object(d.localize)("have_friends_body")))
                },
                Ee = function(e) {
                    function n() {
                        var e, t;
                        Object(i.a)(this, n);
                        for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c];
                        return t = Object(o.a)(this, (e = Object(r.a)(n)).call.apply(e, [this].concat(l))), Object(s.a)(Object(_e.a)(Object(_e.a)(t)), "refetched", !1), Object(s.a)(Object(_e.a)(Object(_e.a)(t)), "timesRefetched", 0), Object(s.a)(Object(_e.a)(Object(_e.a)(t)), "trackedSet", new Set), Object(s.a)(Object(_e.a)(Object(_e.a)(t)), "track", function(e) {
                            t.trackedSet.has(e) || (t.trackedSet.add(e), R()({
                                module: t.props.trackingModule,
                                action: e,
                                context: ""
                            }))
                        }), t
                    }
                    return Object(l.a)(n, e), Object(a.a)(n, [{
                        key: "render",
                        value: function e() {
                            var n = this,
                                t = function e() {
                                    return n.props.isOnboarding ? c.createElement(L.Track, {
                                        className: "social-suggested-followees-ValidatedFacebookToken__buttonContainer--lkji0",
                                        click: {
                                            module: n.props.trackingModule,
                                            action: "Facebooktokenmissingtryagainlater_continue_click",
                                            context: ""
                                        },
                                        visible: {
                                            module: n.props.trackingModule,
                                            action: "Facebooktokenmissingtryagainlater_shown",
                                            context: ""
                                        }
                                    }, c.createElement(Fe.a, {
                                        type: "primary",
                                        onClick: n.props.callback,
                                        size: n.props.isMobile ? "fullwidth" : "default"
                                    }, Object(d.localize)("button_continue"))) : null
                                },
                                i = function e() {
                                    return c.createElement("div", {
                                        className: z()("social-suggested-followees-ValidatedFacebookToken__mainContainer--2FFpT", Object(s.a)({}, "social-suggested-followees-ValidatedFacebookToken__onboarding--3s148", n.props.isOnboarding))
                                    }, c.createElement("div", {
                                        className: z()("social-suggested-followees-ValidatedFacebookToken__header--1PJ3c", "social-suggested-followees-ValidatedFacebookToken__twoLines--2bj2s")
                                    }, Object(d.localize)("social_loading_error_1")), c.createElement("div", {
                                        className: z()("social-suggested-followees-ValidatedFacebookToken__text--5561i", "social-suggested-followees-ValidatedFacebookToken__error--95eYp")
                                    }, Object(d.localize)("facebook_reconnect_error_v2")), c.createElement(t, null))
                                },
                                a = function e() {
                                    return n.props.isOnboarding ? c.createElement(L.Track, {
                                        click: {
                                            module: n.props.trackingModule,
                                            action: "Facebooktokenmissingconnect_skip_click",
                                            context: ""
                                        },
                                        visible: {
                                            module: n.props.trackingModule,
                                            action: "Facebooktokenmissingconnect_shown",
                                            context: ""
                                        }
                                    }, c.createElement("div", {
                                        className: "social-suggested-followees-ValidatedFacebookToken__hyperlink--1dCkv",
                                        onClick: n.props.callback
                                    }, Object(d.localize)("onboarding_social_skip_link"))) : null
                                },
                                o = function e(t) {
                                    var i = t.isFacebookConnected,
                                        o = t.refetch;
                                    return c.createElement("div", {
                                        className: z()("social-suggested-followees-ValidatedFacebookToken__mainContainer--2FFpT", Object(s.a)({}, "social-suggested-followees-ValidatedFacebookToken__onboarding--3s148", n.props.isOnboarding))
                                    }, c.createElement(we, {
                                        isFacebookConnected: i
                                    }), c.createElement(Ne.a, {
                                        onClose: function e() {
                                            n.track("Facebooktokenmissingconnect_continuewithfacebook_click"), n.refetched = !0, n.timesRefetched = 0, o().then(function() {
                                                return n.forceUpdate()
                                            })
                                        },
                                        fullwidth: !1
                                    }), c.createElement(a, null))
                                },
                                r = function e() {
                                    return c.createElement("div", {
                                        className: z()("social-suggested-followees-ValidatedFacebookToken__mainContainer--2FFpT", "social-suggested-followees-ValidatedFacebookToken__loading--1jCh7")
                                    }, c.createElement(B.LoadingSpinner, null))
                                };
                            return Object(T.featureIsEnabled)("disable_fb_token_validation") ? this.props.children : c.createElement(g.Query, {
                                query: ye,
                                fetchPolicy: "network-only"
                            }, function(e) {
                                var t = e.loading,
                                    a = e.data,
                                    l = e.refetch;
                                if (t) return c.createElement(r, null);
                                if (!a) return n.track("Facebooktokenmissingconnect_fail"), c.createElement(i, null);
                                var s = a && a.myExternallyConnectedAccountTypes && a.myExternallyConnectedAccountTypes.includes("FACEBOOK");
                                if (!s && n.props.isOnboarding && n.props.callback) return n.props.callback(), null;
                                var d = a.recommendedExternalConnectionsToFollow && a.recommendedExternalConnectionsToFollow.additionalInfo && a.recommendedExternalConnectionsToFollow.additionalInfo.hasFacebookToken;
                                if (s) {
                                    if (!d && n.timesRefetched < 4) return n.timesRefetched++, setTimeout(function() {
                                        l().then(function() {
                                            return n.forceUpdate()
                                        })
                                    }, 1e3), c.createElement(r, null);
                                    if (d) return n.refetched && n.track("Facebooktokenmissingconnect_complete_success"), n.props.children;
                                    if (n.refetched) return n.track("Facebooktokenmissingconnect_fail"), c.createElement(i, null)
                                }
                                return c.createElement(o, {
                                    isFacebookConnected: s,
                                    refetch: l
                                })
                            })
                        }
                    }]), n
                }(c.Component);
            Object(s.a)(Ee, "defaultProps", {
                callback: void 0,
                isOnboarding: !1
            });
            var je = Object(v.connect)(function(e) {
                    return {
                        isMobile: "MOBILE" === e.meta.device.viewportCategory
                    }
                })(Ee),
                Oe = function e(n) {
                    var t = n.type,
                        i = n.title,
                        a = n.modalName,
                        o = n.followeesTypes,
                        r = n.placement,
                        l = n.onClose,
                        s = n.showFacebookTab;
                    return c.createElement(m.DeprecatedRoutedModal, {
                        name: a,
                        isFullBleed: !0,
                        bodyScroll: !1,
                        onClose: l,
                        header: c.createElement(D.TitleBar, {
                            displayType: "LEFT_ALIGN_GRAY"
                        }, i)
                    }, c.createElement("div", {
                        className: "social-suggested-followees-SuggestedMembersModal__suggested_list--32oEk"
                    }, function e() {
                        var n = [],
                            i = Object(d.localize)("social_label_Suggested_for_you");
                        if (n.push(c.createElement(u.SocialTab, {
                                key: "".concat(t, "_tab_").concat(Math.random()),
                                isActive: "TripAdvisor" === t,
                                label: c.createElement(u.SocialLabel, {
                                    text: i
                                }),
                                socialLabelText: i
                            }, c.createElement("div", {
                                className: "social-suggested-followees-SuggestedMembersModal__suggestions--CC_tY"
                            }, c.createElement(k.FollowTabTypeContext.Provider, {
                                value: {
                                    tabType: "SUGGESTED_FOR_YOU"
                                }
                            }, Object(T.featureIsEnabled)("ml_suggested_follows_by_interest") ? c.createElement(be, {
                                limit: 20,
                                prioritizedTypes: o
                            }) : c.createElement(ue, {
                                limit: 50,
                                types: o,
                                placement: r
                            }))))), Object(T.featureIsEnabled)("suggested_facebook_connections") && s) {
                            var a = Object(d.localize)("common_Facebook_friends");
                            n.push(c.createElement(u.SocialTab, {
                                key: "".concat(t, "_tab_").concat(Math.random()),
                                isActive: "Facebook" === t,
                                label: c.createElement(u.SocialLabel, {
                                    icon: "facebook",
                                    text: a
                                }),
                                socialLabelText: a,
                                trackingProps: {
                                    module: "Social_suggested_fb_members",
                                    action: "facebook_friends_tab_shown"
                                }
                            }, c.createElement($, {
                                limit: 20
                            }, function(e, n, t, i, a, o, r) {
                                return c.createElement(M.a, {
                                    throttle: 50,
                                    threshold: 550,
                                    hasMore: t,
                                    loadMore: e,
                                    infiniteLoadOnMount: !0
                                }, function(e, t) {
                                    return c.createElement("div", {
                                        className: "social-suggested-followees-SuggestedMembersModal__suggestions--CC_tY",
                                        ref: e
                                    }, c.createElement(k.FollowTabTypeContext.Provider, {
                                        value: {
                                            tabType: "FACEBOOK_FRIENDS"
                                        }
                                    }, c.createElement(je, {
                                        trackingModule: "Social_suggested_fb_members"
                                    }, c.createElement(q, {
                                        connections: n,
                                        contentRef: t,
                                        loading: a,
                                        error: o,
                                        refetch: r,
                                        status: i
                                    }))))
                                })
                            })))
                        }
                        return c.createElement(u.SocialTabs, {
                            flexPanel: !0
                        }, n)
                    }()))
                };
            Oe.defaultProps = {
                title: Object(d.localize)("Follow_modal_update_1217"),
                followeesTypes: void 0,
                placement: void 0,
                onClose: function e() {},
                showFacebookTab: !0
            };
            var Ce = Oe,
                Ie = function(e) {
                    function n(e) {
                        var t;
                        return Object(i.a)(this, n), (t = Object(o.a)(this, Object(r.a)(n).call(this, e))).state = {
                            hasTrackedScroll: !1,
                            isMounted: !1
                        }, t
                    }
                    return Object(l.a)(n, e), Object(a.a)(n, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.setState({
                                isMounted: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var n = this,
                                t = this.props,
                                i = t.isSingleObject,
                                a = t.suggestedFollowees,
                                o = t.title,
                                r = t.shelfId,
                                l = t.hideShowMore,
                                s = t.showBio,
                                g = t.forceSimple,
                                v = a && a.length && a[0].suggestedFolloweesInfo ? a[0].suggestedFolloweesInfo.suggestedFolloweeType : null,
                                p = ["FEATURED", "GREAT_CONTENT_PARTNERS", "NEW_PARTNERS"],
                                b = p.includes(v) && !g ? "is-6-widescreen" : "is-4-widescreen",
                                _ = i ? "social-suggested-followees-FollowShelf__section--1_5fx" : "social-suggested-followees-FollowShelf__sections--21pn9";
                            return c.createElement("div", {
                                className: "".concat(_, " ").concat(i ? "ui_card" : "")
                            }, c.createElement(k.InteractionLogger, null, function(e) {
                                return c.createElement(u.TabActiveContext.Consumer, null, function(t) {
                                    return c.createElement(c.Fragment, null, c.createElement("div", {
                                        className: "ui_header ".concat("social-suggested-followees-FollowShelf__shelf_header--2dToc")
                                    }, c.createElement("div", {
                                        className: i ? "social-suggested-followees-FollowShelf__header_title--2AeMO" : "social-suggested-followees-FollowShelf__header_title_smaller--3XZs4"
                                    }, o || Object(d.localize)("social_home_right_rail_follow_title")), l ? null : c.createElement(N, null, function(n) {
                                        return c.createElement(c.Fragment, null, c.createElement(m.DeprecatedModalLink, {
                                            name: "FollowShelfSeeMore-".concat(r),
                                            username: n.username,
                                            href: null,
                                            className: "social-suggested-followees-FollowShelf__header_show_more--2IvVL",
                                            onClick: function n(t) {
                                                return e(t, "seeAll")
                                            }
                                        }, c.createElement("span", {
                                            className: "ui_link"
                                        }, Object(d.localize)("followee_shelf_see_more"))), c.createElement(Ce, {
                                            type: v && "FACEBOOK_FRIENDS" === v ? "Facebook" : "TripAdvisor",
                                            modalName: "FollowShelfSeeMore-".concat(r),
                                            followeesTypes: v && "FACEBOOK_FRIENDS" !== v ? [v] : void 0,
                                            placement: "SHOW_MORE_FROM_SHELVES"
                                        }))
                                    })), c.createElement(f.ScrollAffordance, {
                                        top: !1,
                                        bottom: !1,
                                        threshold: 100,
                                        minDistance: 50,
                                        snapToEdge: {
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            right: 100
                                        },
                                        shift: {
                                            right: {
                                                top: -18
                                            },
                                            left: {
                                                top: -18
                                            }
                                        },
                                        focus: i ? void 0 : {
                                            left: -12,
                                            top: 0
                                        },
                                        className: "".concat("social-suggested-followees-FollowShelf__follow_candidates--2Gx0-", " ui_columns"),
                                        isActive: !t || t.isActive,
                                        onScroll: n.state.hasTrackedScroll ? void 0 : function(t) {
                                            n.setState({
                                                hasTrackedScroll: !0
                                            }), e(t, "shelfScroll")
                                        }
                                    }, function(e) {
                                        return a.slice(0, n.state.isMounted ? void 0 : 2).map(function(n) {
                                            return c.createElement("div", {
                                                key: n.object.userId,
                                                ref: e(n.object.userId),
                                                className: i ? "ui_column is-4 is-6-desktop ".concat(b) : "ui_column is-4 is-4-desktop ".concat(b)
                                            }, c.createElement(k.ItemIdContext.Provider, {
                                                value: {
                                                    itemId: n.object.userId
                                                }
                                            }, c.createElement("div", {
                                                className: "ui_card"
                                            }, !g && n.suggestedFolloweesInfo && p.includes(n.suggestedFolloweesInfo.suggestedFolloweeType) ? c.createElement(I, {
                                                member: n.object
                                            }) : c.createElement(x, {
                                                member: n.object,
                                                suggestedFolloweesInfo: n.suggestedFolloweesInfo,
                                                showBio: s
                                            }))))
                                        })
                                    }))
                                })
                            }))
                        }
                    }]), n
                }(c.Component);
            Object(s.a)(Ie, "defaultProps", {
                isSingleObject: !1,
                title: void 0,
                hideShowMore: !1,
                showBio: !1,
                forceSimple: !1
            });
            var Te = Ie,
                Pe = t("@ta/common.error-handling"),
                xe = function e(n) {
                    var t = n.className,
                        i = n.children;
                    return c.createElement("div", {
                        className: "".concat(t, " ui_card section")
                    }, i)
                },
                Me = function e(n) {
                    var t, i = n.member,
                        a = n.memberInfo;
                    return c.createElement(c.Fragment, null, c.createElement(w.Link, {
                        href: null == i ? void 0 : null === (t = i.route) || void 0 === t ? void 0 : t.url,
                        className: "social-suggested-followees-FolloweeCard__candidate--3Z1Vc",
                        key: i.displayName
                    }, c.createElement("div", {
                        className: "social-suggested-followees-FolloweeCard__name_and_avatar--bT8kp"
                    }, c.createElement("div", {
                        className: "social-suggested-followees-FolloweeCard__avatar_container--3wr1t"
                    }, c.createElement(O.Avatar, {
                        photo: i.avatar,
                        withBorder: !0
                    })), c.createElement(S.MemberName, {
                        profile: i,
                        memberInfo: a,
                        displayNameClassName: "social-suggested-followees-FolloweeCard__display_name--17Pgc",
                        addProfileLink: !1
                    })), c.createElement("div", {
                        className: "social-suggested-followees-FolloweeCard__member_stats_container--XPS6v"
                    }, c.createElement(S.MemberStatsBasic, {
                        profile: i
                    })), c.createElement(y.a, {
                        className: "social-suggested-followees-FolloweeCard__bio--IjgpD",
                        truncateLength: 100,
                        bio: i.bio,
                        smallText: !0
                    }), a && a.infoWithMember && c.createElement(S.MemberReasonWhy, {
                        className: "social-suggested-followees-FolloweeCard__reason_why--9H8h5",
                        type: a.suggestedFolloweeType,
                        reason: a.infoWithMember.reason,
                        singleLine: !0
                    })), c.createElement(j.a, {
                        size: "fullwidth small",
                        profile: i,
                        displayType: "button+icon",
                        onClick: function e(n) {
                            n.stopPropagation(), n.preventDefault()
                        }
                    }))
                };
            Me.defaultProps = {
                memberInfo: void 0
            };
            var De = Me,
                Ae = function e(n) {
                    var t = n.suggestedFollowees;
                    return c.createElement(c.Fragment, null, c.createElement("div", {
                        className: "ui_header h3"
                    }, Object(d.localize)("social_home_right_rail_follow_title")), c.createElement("div", {
                        className: "social-suggested-followees-FollowBlock__follow_candidates--3zwfp"
                    }, t.map(function(e) {
                        return c.createElement(De, {
                            key: e.userProfile.userId,
                            member: e.userProfile,
                            memberInfo: e.info
                        })
                    })))
                },
                Le = t("@ta/social.feed"),
                Re = t("@ta/social.skeletons"),
                Ve = function e(n) {
                    return c.createElement(Le.QueryWithPartialRefetchUntilReactApollo220Release, {
                        errorPolicy: "all",
                        query: ce,
                        variables: {
                            locationId: n.locationId,
                            limit: n.limit,
                            locale: n.locale,
                            types: n.types,
                            placement: n.placement
                        },
                        onError: n.onError
                    }, function(e) {
                        var t = e.data,
                            i = e.loading,
                            a = e.error;
                        if (a && b.a.error(a), t && t.recommendedFollowees && t.recommendedFollowees.suggestedFollowees) {
                            var o, r = t.recommendedFollowees.suggestedFollowees.filter(function(e) {
                                return null != e && null != e.userProfile
                            });
                            return 1 === n.locationId && Object(T.featureIsEnabled)("adsol_home_hero_test") && (Object(T.featureIsEnabled)("adsol_home_hero_los_angeles") && t.sponsoredProfileLosAngeles && (o = t.sponsoredProfileLosAngeles), o && (r = function e(n, t, i) {
                                var a = t && t.userProfile && t.userProfile.isFollowing;
                                if (!n || !t || a) return n;
                                var o = n.filter(function(e) {
                                    return null != e && e.userProfile && t.userProfile && e.userProfile.userId !== t.userProfile.userId
                                });
                                for (o.unshift(t); o.length > i;) o.pop();
                                return o
                            }(r, {
                                userProfile: o
                            }, n.limit))), c.createElement(k.RecommendedFolloweesImpressionIdContext.Provider, {
                                value: {
                                    recommendedFolloweesImpressionId: t.recommendedFollowees.impressionId
                                }
                            }, n.children(r))
                        }
                        return i ? c.createElement(Re.SuggestedFolloweesLoadingSkeleton, null) : n.children([])
                    })
                };
            Ve.defaultProps = {
                types: ["FEATURED", "FOLLOWERS", "FRIENDS_OF_FRIENDS", "GEO"],
                placement: "ONBOARDING",
                onError: void 0,
                limit: 3
            };
            var ze = Object(v.connect)(function(e, n) {
                    return {
                        locationId: n.locationId || e.page.geoId || null,
                        locale: e.i18n.locale
                    }
                })(Ve),
                Be = t("./packages/common/api/api.jsx"),
                Ue = t("@ta/common.localstorage"),
                We = t.n(Ue),
                qe = t("@ta/overlays.managers"),
                Ge = t("@ta/platform.import"),
                He = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "MemberProfile"
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
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                                    value: "timestamp"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                        end: 270
                    }
                };
            He.loc.source = {
                body: "6f0783705bf7"
            };
            var Qe = He,
                Ke = Object(Ge.deferredImport)("@ta/social.confirm-username", "ConfirmUsername"),
                Je = function(e) {
                    function n(e) {
                        var t;
                        return Object(i.a)(this, n), t = Object(o.a)(this, Object(r.a)(n).call(this, e)), Object(s.a)(Object(_e.a)(Object(_e.a)(t)), "useSuggestedMemberAsOnboarding", function() {
                            return !t.props.cachedCookieFound && Object(T.featureIsEnabled)("onboarding_use_recommended_follow_modal") && "DESKTOP" === t.props.viewportCategory
                        }), t.state = {
                            doPopupCheck: !1,
                            currentFlow: 0
                        }, t
                    }
                    return Object(l.a)(n, e), Object(a.a)(n, [{
                        key: "componentDidMount",
                        value: function e() {
                            We.a.get("checked-followee-popup-key") || this.props.readOnly || (this.useSuggestedMemberAsOnboarding() || null !== this.props.loggedInUserId) && this.setState({
                                doPopupCheck: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var n = this,
                                t = this.props,
                                i = t.username,
                                a = t.placement,
                                o = t.seeMoreLink,
                                r = t.loggedInUserId,
                                l = t.client,
                                s = o ? "social-suggested-followees-SuggestedMembersModalCombined__show_more--3bFfW" : "",
                                u = function e() {
                                    switch (n.state.currentFlow) {
                                        case 1:
                                            return Object(d.localize)("Follow_modal_update_home_1217");
                                        default:
                                            return Object(d.localize)("Follow_modal_update_1217")
                                    }
                                },
                                f = function e() {
                                    We.a.set("checked-followee-popup-key", !0)
                                },
                                v = function e(t, i) {
                                    var a;
                                    a = 2 === i ? "onboarding_recommend_follow_popup" : t ? "popup_overlay_test" : "popup_overlay_control", R()({
                                        module: "social_suggested_member_popup",
                                        action: a,
                                        context: n.props.loggedInUserId ? n.props.loggedInUserId : "NOT_LOGGED_IN"
                                    }), t && n.setState({
                                        currentFlow: i
                                    })
                                },
                                p = function e(t, a, o) {
                                    var r = {
                                        name: t,
                                        href: null,
                                        onClick: function e(t) {
                                            n.setState({
                                                currentFlow: 0
                                            }), o && o(t, "rightRailSeeMoreClick")
                                        }
                                    };
                                    return i && (r.username = i), a && (r.className = a), r
                                },
                                b = function e(t, i) {
                                    i(), 2 !== n.state.currentFlow && (v(!0, 2), t())
                                },
                                _ = function e(t) {
                                    return c.createElement(c.Fragment, null, c.createElement(qe.AutoOpener, {
                                        name: "suggested_members",
                                        markAsCheckedCallback: f,
                                        openLayerCheck: function e() {
                                            return function e(t) {
                                                if (n.useSuggestedMemberAsOnboarding() && !n.props.loggedInUserId) return v(!0, 2), !0;
                                                var i = 0;
                                                t && t.followees && t.followees.list && (i = t.followees.list.length, 2 === n.state.currentFlow && t.followees.list.forEach(function(e) {
                                                    var n = l.readFragment({
                                                        id: "MemberProfile:".concat(e.userId),
                                                        fragment: Le.FollowerFragment
                                                    });
                                                    n && l.writeFragment({
                                                        id: "MemberProfile:".concat(e.userId),
                                                        fragment: Le.FollowerFragment,
                                                        data: {
                                                            id: e.userId,
                                                            isFollowing: !0,
                                                            followerCount: n.followerCount,
                                                            __typename: "MemberProfile"
                                                        }
                                                    })
                                                }));
                                                var a = t && t.insightProfile && t.insightProfile.uiCardsState && t.insightProfile.uiCardsState.states.find(function(e) {
                                                    return "ONBOARDING_CONFIRM_USER" === e.id && "COMPLETED" === e.state
                                                });
                                                if (i < 10 && a && (new Date).getTime() - (t ? t.insightProfile.uiCardsState.timestamp : 0) >= 36e5) {
                                                    var o = Object(T.featureIsEnabled)("popup_suggested_follow_modal_for_login_user");
                                                    return v(o, 1), o
                                                }
                                                return !1
                                            }(t)
                                        }
                                    }), n.useSuggestedMemberAsOnboarding() && function e(n) {
                                        var t = n && n.insightProfile && n.insightProfile.uiCardsState && n.insightProfile.uiCardsState.states.find(function(e) {
                                            return "ONBOARDING_CONFIRM_USER" === e.id && "COMPLETED" === e.state
                                        });
                                        return null !== r && !t
                                    }(t) && c.createElement(c.Fragment, null, c.createElement(m.Modal, {
                                        name: "onboarding_confirm_username",
                                        closeX: !1,
                                        isFullBleed: !0
                                    }, c.createElement("div", {
                                        className: "social-suggested-followees-SuggestedMembersModalCombined__name_screen--3U1jf"
                                    }, c.createElement(qe.Opener, {
                                        name: "suggested_members"
                                    }, function(e) {
                                        return c.createElement(qe.Closer, {
                                            name: "onboarding_confirm_username",
                                            local: !0
                                        }, function(n) {
                                            return c.createElement(Ke, {
                                                onComplete: function t() {
                                                    return b(e, n)
                                                },
                                                trackingModule: "Social_onboarding_default",
                                                closerForError: function t() {
                                                    return b(e, n)
                                                }
                                            })
                                        })
                                    }))), c.createElement(qe.AutoOpener, {
                                        name: "onboarding_confirm_username",
                                        markAsCheckedCallback: function e() {},
                                        openLayerCheck: function e() {
                                            return !0
                                        },
                                        local: !0
                                    })))
                                };
                            return c.createElement(c.Fragment, null, c.createElement(k.InteractionLogger, null, function(e) {
                                return c.createElement(m.DeprecatedModalLink, p("suggested_members", s, e), o && c.createElement("span", {
                                    className: "ui_link"
                                }, Object(d.localize)("followee_shelf_see_more")))
                            }), c.createElement(Ce, {
                                title: u(),
                                type: "TripAdvisor",
                                modalName: "suggested_members",
                                placement: a,
                                showFacebookTab: null !== r
                            }), c.createElement(m.DeprecatedModalLink, p("suggested_facebook_connections")), c.createElement(Ce, {
                                title: u(),
                                type: "Facebook",
                                modalName: "suggested_facebook_connections",
                                placement: a,
                                onClose: function e() {
                                    2 === n.state.currentFlow && window.location.reload()
                                }
                            }), this.state.doPopupCheck && (r ? c.createElement(g.Query, {
                                key: r,
                                query: Qe,
                                variables: {
                                    userId: r
                                },
                                errorPolicy: "all"
                            }, function(e) {
                                var n = e.loading,
                                    t = e.data;
                                return n ? null : _(t)
                            }) : _()))
                        }
                    }]), n
                }(c.Component);
            Object(s.a)(Je, "defaultProps", {
                placement: void 0,
                username: null,
                seeMoreLink: !0
            });
            var Ye = Object(g.compose)(Object(Be.bind)({
                    data: function e(n, t) {
                        var i = Object(T.featureIsEnabled)("onboarding_use_recommended_follow_modal") ? t("/data/1.0/onboarding/shown") : null;
                        return function(e, t) {
                            var a = i ? i.get().data : null;
                            return Object(A.a)({
                                loggedInUserId: n.auth.loggedInUserId,
                                readOnly: n.meta.readonlyMode,
                                viewportCategory: n.meta.device.viewportCategory,
                                cachedCookieFound: !!a && a.seen
                            }, t)
                        }
                    },
                    actions: {}
                }), g.withApollo)(Je),
                Xe = function e(n) {
                    var t = n.limit,
                        i = n.placement,
                        a = n.onError,
                        o = n.viewportCategory;
                    return c.createElement(xe, {
                        className: "social-suggested-followees-FollowSection__section--UGB04"
                    }, c.createElement(Pe.ErrorBoundary, null, c.createElement(k.FollowPlacementContext.Provider, {
                        value: {
                            placement: "SUGGESTED_FOLLOWEES_RIGHT_RAIL"
                        }
                    }, c.createElement(ze, {
                        limit: t,
                        placement: i,
                        onError: a
                    }, function(e) {
                        return c.createElement(Ae, {
                            suggestedFollowees: e
                        })
                    })), c.createElement(k.FollowPlacementContext.Provider, {
                        value: {
                            placement: "SUGGESTED_FOLLOWEES_MODAL"
                        }
                    }, c.createElement(N, {
                        alwaysDisplayChildren: Object(T.featureIsEnabled)("onboarding_use_recommended_follow_modal") && "DESKTOP" === o
                    }, function(e) {
                        return c.createElement(c.Fragment, null, c.createElement(w.RouteConsumer, null, function(n) {
                            var t = n.route,
                                i = t.page,
                                a = t.username;
                            return c.createElement(Ye, {
                                username: "Profile" === i ? a : e.username,
                                placement: "SHOW_MORE_FROM_RIGHT_RAIL"
                            })
                        }))
                    }))))
                };
            Xe.defaultProps = {
                limit: 3,
                placement: void 0,
                onError: void 0
            };
            var Ze = Object(v.connect)(function(e) {
                    return {
                        viewportCategory: e.meta.device.viewportCategory
                    }
                })(Xe),
                $e = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "SuggestedFollowees"
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
                                    value: "limit"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
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
                                    value: "locationId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
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
                                    value: "locale"
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
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "suggestedFollowees"
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
                                        value: "location"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "locationId"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "locale"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "locale"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "MemberFields"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
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
                                            value: "username"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "externallyConnectedAccountTypes"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "SuggestedFolloweesMemberFields"
                        },
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
                                    value: "displayName"
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
                                    value: "isFollowing"
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
                                    value: "followeeCount"
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
                                    value: "bio"
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
                                    value: "coverPhoto"
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
                                                    value: "height"
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
                                                    value: "url"
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
                                                    value: "height"
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
                                                    value: "url"
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
                    }],
                    loc: {
                        start: 0,
                        end: 861
                    }
                };
            $e.loc.source = {
                body: "f34955b95e1e"
            };
            var en = {};
            $e.definitions = $e.definitions.concat(function nn(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !en[n] && (en[n] = !0, !0)
                })
            }(ne.a.definitions));
            var tn = $e,
                an = function e(n) {
                    return c.createElement(g.Query, {
                        errorPolicy: "all",
                        query: tn,
                        variables: {
                            userId: n.userId,
                            locationId: n.locationId,
                            limit: n.limit,
                            locale: n.locale
                        }
                    }, function(e) {
                        var t = e.data,
                            i = e.error,
                            a = e.loading;
                        return i && b.a.error(i), t && t.suggestedFollowees ? n.children(t) : a ? c.createElement(Re.SuggestedFolloweesLoadingSkeleton, null) : null
                    })
                };
            an.defaultProps = {
                limit: 5,
                locationId: void 0
            };
            var on = Object(v.connect)(function(e, n) {
                    return {
                        userId: e.auth.loggedInUserId,
                        locationId: n.locationId || e.page.geoId || null,
                        locale: e.i18n.locale
                    }
                })(an),
                rn = 0,
                ln = 0,
                sn = function(e) {
                    function n() {
                        return Object(i.a)(this, n), Object(o.a)(this, Object(r.a)(n).apply(this, arguments))
                    }
                    return Object(l.a)(n, e), Object(a.a)(n, [{
                        key: "render",
                        value: function e() {
                            var n = this,
                                t = function e(t) {
                                    var i = t.refetch;
                                    return c.createElement("div", {
                                        className: "social-suggested-followees-RecommendedExternalConnectionsDataProvider__error--1Gs0O"
                                    }, Object(d.localize)("onboarding_social_fbfollow_screen_header_error_cant_get_friends"), c.createElement("div", null, c.createElement("button", {
                                        className: "ui_button standard",
                                        onClick: function e(t) {
                                            t.preventDefault(), i().then(function() {
                                                return n.forceUpdate()
                                            })
                                        }
                                    }, Object(d.localize)("onboarding_social_fbfollow_screen_header_error_try_again"))))
                                };
                            return c.createElement(g.Query, {
                                errorPolicy: "all",
                                query: Y,
                                variables: {
                                    connectionType: "FACEBOOK",
                                    limit: this.props.limit,
                                    offset: this.props.offset
                                }
                            }, function(e) {
                                var i = e.data,
                                    a = e.error,
                                    o = e.loading,
                                    r = e.refetch;
                                if (o) return c.createElement(Re.SuggestedFolloweesLoadingSkeleton, null);
                                if (a) return c.createElement(t, {
                                    refetch: r
                                });
                                if (i && i.recommendedExternalConnectionsToFollow) {
                                    if ("PENDING" === i.recommendedExternalConnectionsToFollow.status) return rn < 3 ? (rn++, ln++, setTimeout(function() {
                                        r().then(function() {
                                            return n.forceUpdate()
                                        })
                                    }, 1e3), c.createElement(Re.SuggestedFolloweesLoadingSkeleton, null)) : (rn = 0, R()({
                                        module: "external_connections_data_provider",
                                        action: "pending_timeout",
                                        context: ln.toString()
                                    }), c.createElement(t, {
                                        refetch: r
                                    }));
                                    if ("FAILED" === i.recommendedExternalConnectionsToFollow.status) return R()({
                                        module: "external_connections_data_provider",
                                        action: "query_error",
                                        context: ln.toString()
                                    }), c.createElement(t, {
                                        refetch: r
                                    });
                                    if (i.recommendedExternalConnectionsToFollow.connections) return n.props.children(i.recommendedExternalConnectionsToFollow.connections)
                                }
                                return null
                            })
                        }
                    }]), n
                }(c.Component);
            Object(s.a)(sn, "defaultProps", {
                limit: 5,
                offset: 0
            });
            var cn = sn;
            t.d(n, "FollowShelf", function() {
                return Te
            }), t.d(n, "FollowSection", function() {
                return Ze
            }), t.d(n, "FollowBlock", function() {
                return Ae
            }), t.d(n, "FolloweeDataProvider", function() {
                return on
            }), t.d(n, "RecommendedFolloweeDataProvider", function() {
                return ze
            }), t.d(n, "RecommendedExternalConnectionsDataProvider", function() {
                return cn
            }), t.d(n, "ExternalAccountTypeDataProvider", function() {
                return N
            }), t.d(n, "SuggestedMembersModal", function() {
                return Ce
            }), t.d(n, "SuggestedMembersModalCombined", function() {
                return Ye
            }), t.d(n, "ValidatedFacebookToken", function() {
                return je
            }), t.d(n, "SuggestedTripAdvisorMembersSections", function() {
                return be
            })
        },
        "./roots/social/profile/ProfileBasicFields.fragment.gql": function(e, n, t) {
            "use strict";
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ProfileBasicFields"
                    },
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
                                value: "username"
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
                                value: "displayName"
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
                                value: "isFollowing"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "externallyConnectedAccountTypes"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 163
                }
            };
            i.loc.source = {
                body: "716324cd6168"
            }, n.a = i
        },
        "@ta/common.error-handling": function(n, t) {
            n.exports = e
        },
        "@ta/common.localstorage": function(e, t) {
            e.exports = n
        },
        "@ta/loading.error": function(e, n) {
            e.exports = t
        },
        "@ta/media.image": function(e, n) {
            e.exports = i
        },
        "@ta/overlays.headers": function(e, n) {
            e.exports = a
        },
        "@ta/overlays.managers": function(e, n) {
            e.exports = o
        },
        "@ta/overlays.modal": function(e, n) {
            e.exports = r
        },
        "@ta/platform.import": function(e, n) {
            e.exports = l
        },
        "@ta/social.feed": function(e, n) {
            e.exports = s
        },
        "@ta/social.follow": function(e, n) {
            e.exports = c
        },
        "@ta/social.member-common": function(e, n) {
            e.exports = d
        },
        "@ta/social.scroll": function(e, n) {
            e.exports = m
        },
        "@ta/social.skeletons": function(e, n) {
            e.exports = u
        },
        "@ta/social.tabs": function(e, n) {
            e.exports = f
        },
        "@ta/styleguide.avatar": function(e, n) {
            e.exports = k
        },
        "@ta/styleguide.button": function(e, n) {
            e.exports = g
        },
        "@ta/styleguide.icon": function(e, n) {
            e.exports = v
        },
        "@ta/styleguide.loading": function(e, n) {
            e.exports = p
        },
        "@ta/tracking.interactions": function(e, n) {
            e.exports = b
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = _
        }
    })
});
//# sourceMappingURL=social.suggested-followees.f280da0c23.js.map