define("@ta/social.blocks", ["@ta/common.text", "@ta/overlays.headers", "@ta/overlays.managers", "@ta/overlays.modal", "@ta/overlays.toast", "@ta/social.login-gate", "@ta/styleguide.button", "@ta/styleguide.loading", "@ta/common.global"], function(e, t, n, o, a, i, r, l, c) {
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
        }, n.p = "", n(n.s = "./packages/social/blocks/blocks.jsx")
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
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, n) {
            "use strict";

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
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
                return i
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function i(e, t) {
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
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/social/blocks/blocks.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                i = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "BlockStatusQuery"
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
                                            value: "followeeCount"
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
                                            value: "isFollowing"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "blockStatus"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBlocking"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBlockingYou"
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
                        end: 232
                    }
                };
            i.loc.source = {
                body: "88493c6ffd44"
            };
            var r = i,
                l = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "BlockProfile"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userIdToBlock"
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
                                    value: "blockSingleUser"
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
                                            value: "userIdToBlock"
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
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 110
                    }
                };
            l.loc.source = {
                body: "9e5808225a5f"
            };
            var c = l,
                s = function e(t) {
                    var n = t.userIdToBlock,
                        i = t.children;
                    return o.createElement(a.Mutation, {
                        mutation: c,
                        refetchQueries: [{
                            query: r,
                            variables: {
                                userId: n
                            }
                        }],
                        awaitRefetchQueries: !0
                    }, function(e, t) {
                        return i(function() {
                            return e({
                                variables: {
                                    userIdToBlock: n
                                }
                            })
                        }, t)
                    })
                },
                u = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "UnblockProfile"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userIdToUnblock"
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
                                    value: "unblockUsers"
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
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "userIdToUnblock"
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
                                            value: "status"
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
                        end: 116
                    }
                };
            u.loc.source = {
                body: "b07a3f8c4198"
            };
            var m = u,
                d = function e(t) {
                    var n = t.userIdToUnblock,
                        i = t.children;
                    return o.createElement(a.Mutation, {
                        mutation: m,
                        refetchQueries: [{
                            query: r,
                            variables: {
                                userId: n
                            }
                        }],
                        awaitRefetchQueries: !0
                    }, function(e, t) {
                        return i(function() {
                            return e({
                                variables: {
                                    userIdToUnblock: n
                                }
                            })
                        }, t)
                    })
                },
                b = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                p = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                f = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                k = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                v = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                _ = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                y = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                j = n("@ta/overlays.modal"),
                O = n("@ta/social.login-gate"),
                h = n("@ta/overlays.managers"),
                g = n("./packages/common/i18n/i18n.jsx"),
                N = n("@ta/common.text"),
                S = n("@ta/overlays.toast"),
                C = n("@ta/overlays.headers"),
                E = n("./node_modules/react-redux/es/index.js"),
                w = n("./packages/common/classnames/classnames.jsx"),
                x = n.n(w),
                I = n("@ta/styleguide.loading"),
                B = n("@ta/styleguide.button"),
                T = n.n(B),
                U = function(e) {
                    function t(e) {
                        var n;
                        return Object(b.a)(this, t), n = Object(f.a)(this, Object(k.a)(t).call(this, e)), Object(y.a)(Object(_.a)(Object(_.a)(n)), "onSubmit", function() {
                            "function" == typeof n.props.onSubmit && n.props.onSubmit()
                        }), Object(y.a)(Object(_.a)(Object(_.a)(n)), "onCancel", function() {
                            "function" == typeof n.props.onCancel && n.props.onCancel()
                        }), Object(y.a)(Object(_.a)(Object(_.a)(n)), "updateBtnRect", function() {
                            var e = n.submitBtnRef.current,
                                t = n.submitBtnRect.height;
                            e && (n.submitBtnRect = {
                                width: e.offsetWidth,
                                height: t
                            })
                        }), Object(y.a)(Object(_.a)(Object(_.a)(n)), "submitBtnRef", o.createRef()), Object(y.a)(Object(_.a)(Object(_.a)(n)), "submitBtnRect", void 0), n.submitBtnRect = e.isMobile ? {
                            width: 180,
                            height: 36
                        } : {
                            width: 81,
                            height: 36
                        }, n
                    }
                    return Object(v.a)(t, e), Object(p.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.updateBtnRect()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function e(t) {
                            t.isSubmitting && !this.props.isSubmitting && this.updateBtnRect()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t, n = this.props,
                                a = n.isSubmitting,
                                i = n.descriptionContent,
                                r = n.submitContent,
                                l = n.isMobile,
                                c = n.isIE11,
                                s = this.submitBtnRect,
                                u = s.width,
                                m = s.height;
                            return o.createElement("div", {
                                className: x()("social-blocks-ConfirmationView__container--1OqSN", (t = {}, Object(y.a)(t, "social-blocks-ConfirmationView__submitting--lmVS7", a), Object(y.a)(t, "social-blocks-ConfirmationView__IE11--2gaEe", c), t))
                            }, i, o.createElement("div", {
                                className: "social-blocks-ConfirmationView__submit--kDmRH"
                            }, o.createElement("span", {
                                className: x()("social-blocks-ConfirmationView__button_flex_wrap--3wCsr", "social-blocks-ConfirmationView__button_right_gap--3ONmm")
                            }, o.createElement(T.a, {
                                type: "secondary",
                                size: l ? "fullwidth" : "default",
                                onClick: this.onCancel
                            }, Object(g.localize)("social_block_modal_cancel"))), a ? o.createElement("div", {
                                style: {
                                    width: u,
                                    height: m
                                },
                                className: x()("social-blocks-ConfirmationView__loader--SzHUP", "social-blocks-ConfirmationView__button_left_gap--3fNPX")
                            }, o.createElement(I.LoadingBubbles, {
                                color: "dark"
                            })) : o.createElement("span", {
                                className: x()("social-blocks-ConfirmationView__button_flex_wrap--3wCsr", "social-blocks-ConfirmationView__button_left_gap--3fNPX")
                            }, o.createElement("span", {
                                ref: this.submitBtnRef
                            }, o.createElement(T.a, {
                                type: "primary",
                                size: l ? "fullwidth" : "default",
                                onClick: this.onSubmit
                            }, r)))))
                        }
                    }]), t
                }(o.Component);
            Object(y.a)(U, "defaultProps", {
                submitContent: "Submit",
                onCancel: void 0,
                onSubmit: void 0,
                isSubmitting: !1,
                isError: !1
            });
            var P = Object(E.connect)(function(e) {
                    return {
                        isMobile: "DESKTOP" !== e.meta.device.viewportCategory,
                        isIE11: "IE" === e.meta.device.browser.family && 11 === e.meta.device.browser.majorVersion
                    }
                })(U),
                M = function e() {
                    return "".concat(Object(g.localize)("mobile_help_center_url"), "/articles/200613547")
                },
                D = function e() {
                    return o.createElement(o.Fragment, null, Object(g.localize)("social_block_modal_more_v2"), Object(g.unescaped)(Object(g.localize)("social_block_modal_more_hyperlink", {
                        href: M(),
                        className: "social-blocks-ImportantBlockUserInfo__privacy--1IWLH",
                        target: "_blank"
                    })))
                },
                z = function e(t) {
                    var n = t.children;
                    return o.Children.map(n, function(e) {
                        return o.createElement("li", null, e)
                    })
                },
                R = function e(t) {
                    var n = t.displayName;
                    return o.createElement(o.Fragment, null, o.createElement("div", {
                        className: "social-blocks-BlockUserDescriptionContent__notice--23fco",
                        key: "notice"
                    }, o.createElement("span", {
                        className: "social-blocks-BlockUserDescriptionContent__notice_text--QXMl-"
                    }, Object(g.localize)("social_block_modal_notice", {
                        displayName: n
                    }))), o.createElement("div", {
                        className: "social-blocks-BlockUserDescriptionContent__list--CHOTX",
                        key: "list"
                    }, o.createElement(z, null, Object(g.localize)("social_block_modal_ex_follow_v2"), Object(g.localize)("social_block_modal_ex_dm"), Object(g.localize)("social_block_modal_ex_repost_v2"))), o.createElement("div", {
                        className: "social-blocks-BlockUserDescriptionContent__additional--MenZ7",
                        key: "additional_info"
                    }, o.createElement(D, null)))
                },
                V = {
                    toast: "social-blocks-BlockUserModal__toast--2EGdI"
                },
                F = function(e) {
                    function t() {
                        var e, n;
                        Object(b.a)(this, t);
                        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        return n = Object(f.a)(this, (e = Object(k.a)(t)).call.apply(e, [this].concat(a))), Object(y.a)(Object(_.a)(Object(_.a)(n)), "onSubmit", function() {
                            var e = n.props,
                                t = e.blockProfile,
                                o = e.closeModal,
                                a = e.onSubmit,
                                i = e.launchToast,
                                r = e.displayName;
                            return t().then(function() {
                                o(), i({
                                    node: Object(g.unescaped)(Object(g.localize)("social_block_toast", {
                                        username: Object(N.EscapeHtml)(r),
                                        className: V.toast
                                    }))
                                }), "function" == typeof a && a()
                            })
                        }), n
                    }
                    return Object(v.a)(t, e), Object(p.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = t.displayName,
                                a = t.isSubmitting,
                                i = t.closeModal;
                            return o.createElement(P, {
                                descriptionContent: o.createElement(R, {
                                    displayName: n
                                }),
                                onSubmit: this.onSubmit,
                                submitContent: Object(g.localize)("social_block_btn"),
                                onCancel: i,
                                isSubmitting: a
                            })
                        }
                    }]), t
                }(o.Component),
                A = function e(t, n) {
                    return "".concat(t, ":BLOCK_USER:").concat(n)
                },
                L = function e(t) {
                    var n = t.userId,
                        a = t.namespace,
                        i = t.children;
                    return o.createElement(O.SocialOpener, {
                        name: A(a, n)
                    }, i)
                };
            L.defaultProps = {
                namespace: ""
            };
            var K = function e(t) {
                var n = t.userIdToBlock,
                    a = t.displayName,
                    i = t.namespace,
                    r = t.onClose,
                    l = t.onSubmit;
                return o.createElement(S.Toaster, null, function(e) {
                    return o.createElement(h.Closer, null, function(t) {
                        return o.createElement(j.Modal, {
                            name: A(i, n),
                            header: o.createElement(C.TitleBar, {
                                displayType: "CENTERED_WHITE"
                            }, Object(g.localize)("social_block_modal_title", {
                                displayName: a
                            })),
                            onClose: r
                        }, o.createElement(s, {
                            userIdToBlock: n
                        }, function(n, i) {
                            var r = i.loading;
                            return o.createElement(F, {
                                blockProfile: n,
                                isSubmitting: r,
                                displayName: a,
                                onSubmit: l,
                                closeModal: t,
                                launchToast: e
                            })
                        }))
                    })
                })
            };
            K.defaultProps = {
                namespace: ""
            };
            var H = K,
                Q = function e(t) {
                    var n = t.displayName;
                    return o.createElement(o.Fragment, null, o.createElement("div", {
                        className: "social-blocks-UnblockUserDescriptionContent__notice--1IjZS",
                        key: "notice"
                    }, o.createElement("span", {
                        className: "social-blocks-UnblockUserDescriptionContent__notice_text--1imKp"
                    }, Object(g.localize)("social_unblock_modal_notice", {
                        displayName: n
                    }))), o.createElement("div", {
                        className: "social-blocks-UnblockUserDescriptionContent__list--2hI5A",
                        key: "list"
                    }, o.createElement(z, null, Object(g.localize)("social_block_modal_ex_follow_v2"), Object(g.localize)("social_block_modal_ex_dm"), Object(g.localize)("social_block_modal_ex_repost_v2"))))
                },
                q = function(e) {
                    function t() {
                        var e, n;
                        Object(b.a)(this, t);
                        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        return n = Object(f.a)(this, (e = Object(k.a)(t)).call.apply(e, [this].concat(a))), Object(y.a)(Object(_.a)(Object(_.a)(n)), "onSubmit", function() {
                            var e = n.props,
                                t = e.unblockProfile,
                                o = e.closeModal,
                                a = e.onSubmit;
                            t().then(function() {
                                o(), "function" == typeof a && a()
                            })
                        }), n
                    }
                    return Object(v.a)(t, e), Object(p.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = t.displayName,
                                a = t.isSubmitting,
                                i = t.closeModal;
                            return o.createElement(P, {
                                descriptionContent: o.createElement(Q, {
                                    displayName: n
                                }),
                                onSubmit: this.onSubmit,
                                onCancel: i,
                                submitContent: Object(g.localize)("social_unblock_btn"),
                                isSubmitting: a
                            })
                        }
                    }]), t
                }(o.Component),
                W = function e(t, n) {
                    return "".concat(t, ":UNBLOCK_USER:").concat(n)
                },
                X = function e(t) {
                    var n = t.userId,
                        a = t.namespace,
                        i = t.children;
                    return o.createElement(O.SocialOpener, {
                        name: W(a, n)
                    }, i)
                };
            X.defaultProps = {
                namespace: ""
            };
            var Z = function e(t) {
                var n = t.userIdToUnblock,
                    a = t.displayName,
                    i = t.namespace,
                    r = t.onClose,
                    l = t.onSubmit;
                return o.createElement(h.Closer, null, function(e) {
                    return o.createElement(j.Modal, {
                        name: W(i, n),
                        header: o.createElement(C.TitleBar, {
                            displayType: "CENTERED_WHITE"
                        }, Object(g.localize)("social_unblock_modal_title", {
                            displayName: a
                        })),
                        onClose: r
                    }, o.createElement(d, {
                        userIdToUnblock: n
                    }, function(t, n) {
                        var i = n.loading,
                            r = n.data;
                        return o.createElement(q, {
                            unblockProfile: t,
                            isSubmitting: i || r,
                            displayName: a,
                            closeModal: e,
                            onSubmit: l
                        })
                    }))
                })
            };
            Z.defaultProps = {
                namespace: ""
            };
            var G = Z,
                Y = function e() {
                    return Object(g.localize)("social_no_permission")
                },
                J = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                $ = o.createContext(function() {
                    throw new Error("Attempted to open a modal without an enclosing MemberInteractionProvider")
                }),
                ee = $.Provider,
                te = $.Consumer,
                ne = function(e) {
                    function t() {
                        var e, n;
                        Object(b.a)(this, t);
                        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        return n = Object(f.a)(this, (e = Object(k.a)(t)).call.apply(e, [this].concat(a))), Object(y.a)(Object(_.a)(Object(_.a)(n)), "openModal", function(e) {
                            if ("BLOCK" === e) n.props.openBlockUserModal();
                            else {
                                if ("UNBLOCK" !== e) throw new Error("Attempted to open type ".concat(e, " but it does not exist."));
                                n.props.openUnblockUserModal()
                            }
                        }), n
                    }
                    return Object(v.a)(t, e), Object(p.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this.props,
                                n = t.namespace,
                                a = t.member,
                                i = a.userId,
                                r = a.displayName,
                                l = t.onClose,
                                c = t.onSubmit,
                                s = t.children;
                            return o.createElement(ee, {
                                value: this.openModal
                            }, o.createElement(H, {
                                userIdToBlock: i,
                                displayName: r,
                                namespace: n,
                                onClose: l,
                                onSubmit: c,
                                key: "BLOCK_MODAL:".concat(i, ":").concat(n)
                            }), o.createElement(G, {
                                userIdToUnblock: i,
                                displayName: r,
                                namespace: n,
                                onClose: l,
                                onSubmit: c,
                                key: "UNBLOCK_MODAL:".concat(i, ":").concat(n)
                            }), s)
                        }
                    }]), t
                }(o.Component),
                oe = function(e) {
                    function t() {
                        var e, n;
                        Object(b.a)(this, t);
                        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        return n = Object(f.a)(this, (e = Object(k.a)(t)).call.apply(e, [this].concat(a))), Object(y.a)(Object(_.a)(Object(_.a)(n)), "namespace", "MEMBER_INTERACTION:".concat(Math.random())), n
                    }
                    return Object(v.a)(t, e), Object(p.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = this.props.member.userId;
                            return o.createElement(L, {
                                userId: n,
                                namespace: this.namespace
                            }, function(e) {
                                return o.createElement(X, {
                                    userId: n,
                                    namespace: t.namespace
                                }, function(n) {
                                    return o.createElement(ne, Object(J.a)({}, t.props, {
                                        namespace: t.namespace,
                                        openUnblockUserModal: n,
                                        openBlockUserModal: e
                                    }))
                                })
                            })
                        }
                    }]), t
                }(o.Component);
            n.d(t, "BlockProfile", function() {
                return s
            }), n.d(t, "UnblockProfile", function() {
                return d
            }), n.d(t, "BlockUserModal", function() {
                return H
            }), n.d(t, "OpenBlockUserModal", function() {
                return L
            }), n.d(t, "UnblockUserModal", function() {
                return G
            }), n.d(t, "OpenUnblockUserModal", function() {
                return X
            }), n.d(t, "NoPermissionToast", function() {
                return Y
            }), n.d(t, "MemberInteractionProvider", function() {
                return oe
            }), n.d(t, "MemberInteractionConsumer", function() {
                return te
            })
        },
        "@ta/common.text": function(t, n) {
            t.exports = e
        },
        "@ta/overlays.headers": function(e, n) {
            e.exports = t
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = n
        },
        "@ta/overlays.modal": function(e, t) {
            e.exports = o
        },
        "@ta/overlays.toast": function(e, t) {
            e.exports = a
        },
        "@ta/social.login-gate": function(e, t) {
            e.exports = i
        },
        "@ta/styleguide.button": function(e, t) {
            e.exports = r
        },
        "@ta/styleguide.loading": function(e, t) {
            e.exports = l
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = c
        }
    })
});
//# sourceMappingURL=social.blocks.f1cabce44d.js.map