define("@ta/social.repost-action", ["@ta/common.webview", "@ta/overlays.managers", "@ta/overlays.toast", "@ta/platform.import", "@ta/social.blocks", "@ta/social.feed", "@ta/social.login-gate", "@ta/social.onboarding-state", "@ta/styleguide.icon", "@ta/tracking.interactions", "@ta/common.global"], function(e, t, o, n, r, s, a, c, i, l, u) {
    return function(e) {
        var t = {};

        function o(n) {
            if (t[n]) return t[n].exports;
            var r = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
        }
        return o.m = e, o.c = t, o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) o.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, o.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = "./packages/social/repost-action/repost-action.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, o) {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, o) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, o) {
            "use strict";

            function n(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function r(e, t, o) {
                return t && n(e.prototype, t), o && n(e, o), e
            }
            o.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, o) {
            "use strict";

            function n(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, o) {
            "use strict";

            function n() {
                return (n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, o) {
            "use strict";

            function n(e) {
                return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, o) {
            "use strict";
            o.d(t, "a", function() {
                return r
            });
            var n = o("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(n.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, o) {
            "use strict";
            o.d(t, "a", function() {
                return r
            });
            var n = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(o);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(o, e).enumerable
                    }))), r.forEach(function(t) {
                        Object(n.a)(e, t, o[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, o) {
            "use strict";
            o.d(t, "a", function() {
                return s
            });
            var n = o("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function s(e, t) {
                return !t || "object" !== Object(n.a)(t) && "function" != typeof t ? Object(r.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, o) {
            "use strict";

            function n(e, t) {
                return (n = Object.setPrototypeOf || function e(t, o) {
                    return t.__proto__ = o, t
                })(e, t)
            }
            o.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, o) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function e(t) {
                    return n(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
                })(e)
            }
            o.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/features/features.jsx": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, t, o) {
            e.exports = o("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/social/repost-action/repost-action.jsx": function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                r = o("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                s = o("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = o("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                c = o("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = o("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = o("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = o("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                p = o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                m = o("./node_modules/react/index.js"),
                b = o("./node_modules/react-redux/es/index.js"),
                d = o("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                f = o("./packages/common/classnames/classnames.jsx"),
                j = o.n(f),
                g = o("./packages/common/features/features.jsx"),
                O = o("./packages/common/i18n/i18n.jsx"),
                y = o("@ta/common.webview"),
                h = o("@ta/overlays.managers"),
                _ = o("@ta/platform.import"),
                v = o("@ta/social.feed"),
                P = o("@ta/social.login-gate"),
                x = o("@ta/social.onboarding-state"),
                k = o("@ta/styleguide.icon"),
                w = o("@ta/tracking.interactions"),
                S = o("@ta/social.blocks"),
                T = o("./packages/common/routing/routing.jsx"),
                C = o("@ta/overlays.toast"),
                I = function(e) {
                    function t() {
                        var e, o;
                        Object(s.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return o = Object(c.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(r))), Object(p.a)(Object(u.a)(Object(u.a)(o)), "successToastMessage", {
                            Review: Object(O.localize)("success_repost_review"),
                            Photo: Object(O.localize)("success_repost_photo"),
                            Video: Object(O.localize)("success_repost_video"),
                            ForumPost: Object(O.localize)("success_repost_forum"),
                            LinkPost: Object(O.localize)("success_repost_link"),
                            Trip: Object(O.localize)("success_repost_trip"),
                            MediaBatch: Object(O.localize)("success_repost_photos")
                        }), o
                    }
                    return Object(l.a)(t, e), Object(a.a)(t, [{
                        key: "createToast",
                        value: function e(t, o, n, r) {
                            switch (o) {
                                case "success":
                                    return {
                                        node: this.successToastMessage[t],
                                        actionText: Object(O.localize)("view_repost"),
                                        actionCallback: function e() {
                                            r({
                                                page: "Profile",
                                                username: n
                                            })
                                        }
                                    };
                                case "error":
                                    return {
                                        node: Object(O.localize)("repost_failure_message")
                                    };
                                case "no_permission":
                                    return {
                                        node: m.createElement(S.NoPermissionToast, null)
                                    };
                                default:
                                    return {
                                        node: ""
                                    }
                            }
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return m.createElement(T.RouteConsumer, null, function(e) {
                                var o = e.navigate;
                                return m.createElement(C.Toaster, null, function(e) {
                                    return t.props.children(function(n, r, s) {
                                        return e(t.createToast(n, r, s, o))
                                    })
                                })
                            })
                        }
                    }]), t
                }(m.Component),
                E = Object(_.deferredImport)("@ta/social.repost-uploader", "RepostUploader"),
                R = function(e) {
                    function t() {
                        var e, o;
                        Object(s.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return o = Object(c.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(r))), Object(p.a)(Object(u.a)(Object(u.a)(o)), "state", {
                            loadModal: !1
                        }), Object(p.a)(Object(u.a)(Object(u.a)(o)), "repostToast", void 0), Object(p.a)(Object(u.a)(Object(u.a)(o)), "repostCallback", function(e, t, n) {
                            o.repostToast && o.repostToast(e, t, n), "success" === t && o.props.attemptOnboarding && o.props.setFireOnboarding(!1, "REPOST_ACTION")
                        }), Object(p.a)(Object(u.a)(Object(u.a)(o)), "checkPermissionForUser", function(e) {
                            if (e && e.blockStatus) {
                                var t = e.blockStatus;
                                if (t && (t.isBlocking || t.isBlockingYou)) return !1
                            }
                            return !0
                        }), Object(p.a)(Object(u.a)(Object(u.a)(o)), "checkPermissions", function() {
                            return !(!o.checkPermissionForUser(o.props.actor) || o.props.repostPreviewProps && !o.checkPermissionForUser(o.props.repostPreviewProps.actor)) || ("function" == typeof o.repostToast && o.repostToast(o.props.repostPreviewProps.feedSectionItem.object.__typename, "no_permission"), !1)
                        }), Object(p.a)(Object(u.a)(Object(u.a)(o)), "name", "RepostUploader:".concat(Math.random())), o
                    }
                    return Object(l.a)(t, e), Object(a.a)(t, [{
                        key: "createRepostUploader",
                        value: function e() {
                            var t = this;
                            if (!this.props.repostPreviewProps.member && this.props.loggedInUserId) {
                                var o = [{
                                    id: this.props.loggedInUserId
                                }];
                                return m.createElement(d.Query, {
                                    query: v.ProfileQueryWithUserId,
                                    variables: {
                                        userIds: o
                                    },
                                    errorPolicy: "all"
                                }, function(e) {
                                    var o = (e.data || {}).memberProfiles,
                                        s = void 0 === o ? null : o,
                                        a = s ? s[0] : null,
                                        c = Object(r.a)({}, t.props),
                                        i = Object(r.a)({}, t.props.repostPreviewProps);
                                    return i.member = a, c.repostPreviewProps = i, m.createElement(E, Object(n.a)({}, c, {
                                        modalName: t.name,
                                        repostCallback: t.repostCallback
                                    }))
                                })
                            }
                            return m.createElement(E, Object(n.a)({}, this.props, {
                                modalName: this.name,
                                repostCallback: this.repostCallback
                            }))
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this,
                                o = this.props.socialStatistics && this.props.socialStatistics.isReposted,
                                n = this.props.repostPreviewProps.feedSectionItem.object.id,
                                r = this.props.repostPreviewProps.feedSectionItem.object.__typename,
                                s = m.createElement(m.Fragment, null, m.createElement(P.SocialLoginGate, {
                                    pid: 40434
                                }, function(e) {
                                    return m.createElement(h.Opener, {
                                        name: t.name
                                    }, function(s) {
                                        return m.createElement(w.InteractionLogger, null, function(a) {
                                            return m.createElement("span", {
                                                onClick: function o(c) {
                                                    t.state.loadModal || t.setState({
                                                        loadModal: !0
                                                    }), t.props.onClick && t.props.onClick(), y.NativeBridge.isNativeWebview() ? n && r && y.NativeBridge.postToBridge("repost", 1, {
                                                        objectId: n,
                                                        type: r
                                                    }) : (a(c, "repost"), e().then(t.checkPermissions).then(function(e) {
                                                        e && s()
                                                    }))
                                                },
                                                className: j()("social-repost-action-RepostAction__social_action--2Msgl", Object(p.a)({}, "social-repost-action-RepostAction__active--3uYgW", o))
                                            }, m.createElement(k.Icon, {
                                                name: "repost",
                                                className: "social-repost-action-RepostAction__icon--2iAxG"
                                            }), m.createElement("span", {
                                                className: "ui_link ".concat("social-repost-action-RepostAction__text--3GPHP", " socialCTA")
                                            }, o ? Object(O.localize)("reposted") : Object(O.localize)("social_repost")))
                                        })
                                    })
                                }), this.state.loadModal ? this.createRepostUploader() : null, m.createElement(I, null, function(e) {
                                    t.repostToast = e
                                }));
                            return m.createElement(m.Fragment, null, Object(g.featureIsEnabled)("social_reposts") ? s : null)
                        }
                    }]), t
                }(m.Component);
            Object(p.a)(R, "defaultProps", {
                onClick: void 0,
                attemptOnboarding: !0
            });
            var z = Object(b.connect)(function(e) {
                return {
                    loggedInUserId: e.auth.loggedInUserId
                }
            }, {
                setFireOnboarding: x.ACTIONS.setShouldFire
            })(R);
            o.d(t, "RepostAction", function() {
                return z
            }), t.default = {}
        },
        "@ta/common.webview": function(t, o) {
            t.exports = e
        },
        "@ta/overlays.managers": function(e, o) {
            e.exports = t
        },
        "@ta/overlays.toast": function(e, t) {
            e.exports = o
        },
        "@ta/platform.import": function(e, t) {
            e.exports = n
        },
        "@ta/social.blocks": function(e, t) {
            e.exports = r
        },
        "@ta/social.feed": function(e, t) {
            e.exports = s
        },
        "@ta/social.login-gate": function(e, t) {
            e.exports = a
        },
        "@ta/social.onboarding-state": function(e, t) {
            e.exports = c
        },
        "@ta/styleguide.icon": function(e, t) {
            e.exports = i
        },
        "@ta/tracking.interactions": function(e, t) {
            e.exports = l
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = u
        }
    })
});
//# sourceMappingURL=social.repost-action.7c050a6310.js.map