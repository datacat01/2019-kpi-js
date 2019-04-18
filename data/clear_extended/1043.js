define("@ta/public.iap-reporting", ["@ta/common.typeahead", "@ta/input.text-area", "@ta/list.navigable-list", "@ta/overlays.headers", "@ta/overlays.managers", "@ta/overlays.modal", "@ta/social.button-group", "@ta/social.login-gate", "@ta/styleguide.button", "@ta/styleguide.radio-button", "@ta/common.global"], function(e, t, n, o, r, a, i, c, l, u, s) {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
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
                for (var r in e) n.d(o, r, function(t) {
                    return e[t]
                }.bind(null, r));
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
        }, n.p = "", n(n.s = "./packages/public/iap-reporting/index.jsx")
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

            function r(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            }
            n.d(t, "a", function() {
                return r
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
                return r
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, t) {
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
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, t, n) {
            "use strict";

            function o(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        Object(o.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (null == e) return {};
                var n, o, r = function a(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var o = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function a(e, t) {
                return !t || "object" !== Object(o.a)(t) && "function" != typeof t ? Object(r.a)(e) : t
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
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, t, n) {
            "use strict";
            var o = n("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function r(e) {
                return function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || Object(o.a)(e) || function n() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            n.d(t, "a", function() {
                return r
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

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function e(t) {
                    return o(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t)
                })(e)
            }
            n.d(t, "a", function() {
                return r
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
        "./packages/common/global/global.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/global/global.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/state/state.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "./packages/public/iap-reporting/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("./node_modules/react/index.js"),
                r = n("./node_modules/react-redux/es/index.js"),
                a = function e(t) {
                    if ("string" == typeof t) return t
                },
                i = function e(t) {
                    if ("number" == typeof t) return t
                },
                c = {
                    repostInfo: void 0
                },
                l = function e(t) {
                    return {
                        csrfToken: t.auth.csrfToken,
                        userId: t.auth.loggedInUserId,
                        locale: t.i18n.locale
                    }
                },
                u = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                d = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                m = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                p = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                _ = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                b = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                f = n("@ta/input.text-area"),
                O = n("./packages/common/i18n/i18n.jsx"),
                I = function e(t) {
                    var n = t.label;
                    n || (n = t.required ? Object(O.localize)("social_report_level2_6b") : Object(O.unescaped)(Object(O.localize)("social_report_level2_5")));
                    var r = function e(t, n, r) {
                        return t ? o.createElement("div", {
                            className: "public-iap-reporting-comment_box-CommentBox__numberLabels--1aNRp"
                        }, Object(O.localize)("ur_rd_0characterminimum", {
                            0: n
                        }), " / ", Object(O.localize)("ur_rd_0charactermaximum", {
                            0: r
                        })) : null
                    }(t.required, t.minLength, t.maxLength);
                    return o.createElement("div", {
                        className: t.className
                    }, o.createElement("span", {
                        className: "public-iap-reporting-comment_box-CommentBox__textLabel--3Etdx"
                    }, n), o.createElement(f.TextArea, {
                        className: "public-iap-reporting-comment_box-CommentBox__commentBox--2RhBu",
                        value: t.value,
                        onChange: t.onChange,
                        maxLength: t.maxLength
                    }), r)
                };
            I.defaultProps = {
                required: !1,
                label: "",
                minLength: 10,
                maxLength: 250,
                className: null
            };
            var E = I,
                R = n("@ta/styleguide.radio-button"),
                T = n.n(R),
                v = function e(t) {
                    var n = t.name,
                        r = t.value,
                        a = t.selected,
                        i = t.labelTxt,
                        c = t.onChangeMethod,
                        l = t.children,
                        u = a ? "public-iap-reporting-radio_button-ReportIAPRadio__selected--Gpj4f" : "public-iap-reporting-radio_button-ReportIAPRadio__label--3Mp1n";
                    return o.createElement("div", {
                        className: "public-iap-reporting-radio_button-ReportIAPRadio__iap_radio_container--2tP1r"
                    }, o.createElement(T.a, {
                        name: n,
                        value: r,
                        selected: a,
                        onSelect: c
                    }, o.createElement("span", {
                        className: u
                    }, i)), o.createElement("div", {
                        className: "public-iap-reporting-radio_button-ReportIAPRadio__children--148xl"
                    }, a && l || null))
                },
                j = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                N = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                C = n("@ta/styleguide.button"),
                h = n.n(C),
                g = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "submitIAPVoteV2"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "contentId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Long"
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
                                    value: "contentType"
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
                                    value: "iapReasonId"
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
                                    value: "comments"
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
                                    value: "submitIAPVoteV2"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "contentId"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "contentId"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "contentType"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "contentType"
                                        }
                                    }
                                }, {
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
                                        value: "iapReasonId"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "iapReasonId"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "comments"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "comments"
                                        }
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 290
                    }
                };
            g.loc.source = {
                body: "414b8ad05bfa"
            };
            var y = g,
                S = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "submitProfileIAPVote"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "reportedUserId"
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
                                    value: "iapReasonId"
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
                                    value: "comments"
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
                                    value: "submitProfileIAPVote"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "reportedUserId"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "reportedUserId"
                                        }
                                    }
                                }, {
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
                                        value: "iapReasonId"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "iapReasonId"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "comments"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "comments"
                                        }
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 263
                    }
                };
            S.loc.source = {
                body: "8490df1c141a"
            };
            var P = S,
                k = Object.freeze({
                    FORUM: "FORUMPOST",
                    USERREVIEW: "USERREVIEW",
                    MEDIA: "MEDIA",
                    TRIP: "2",
                    LINK: "1",
                    REPOST: "3",
                    PROFILE: "4",
                    LOCATION_TOPIC: "LOCATION_TOPIC",
                    LOCATION_POSTING: "LOCATION_POSTING"
                }),
                A = new Set([k.USERREVIEW, k.MEDIA, k.LOCATION_TOPIC, k.LOCATION_POSTING]),
                L = new Set([k.FORUM]),
                w = new Set([k.LINK, k.TRIP]),
                W = new Set([k.PROFILE]),
                x = function e(t) {
                    return fetch(t, {
                        cache: "no-cache",
                        credentials: "same-origin",
                        method: "POST",
                        redirect: "follow"
                    })
                },
                z = function e(t) {
                    var n = "public-iap-reporting-submit-SubmitIapVote__wrapper--2xzHg";
                    t.sticky && (n += " ".concat("public-iap-reporting-submit-SubmitIapVote__sticky--1yl8l"));
                    var r = t.sticky ? o.createElement("div", {
                        className: "public-iap-reporting-submit-SubmitIapVote__stickySpacer--37PkE"
                    }, o.createElement(h.a, {
                        disabled: !0
                    })) : null;
                    return o.createElement(o.Fragment, null, r, o.createElement("div", {
                        className: n
                    }, t.showBackButton ? o.createElement(h.a, {
                        type: "secondary",
                        onClick: t.onBack
                    }, Object(O.localize)("com_fyf_p2_011")) : null, o.createElement(N.Mutation, {
                        mutation: P,
                        onCompleted: t.onComplete,
                        onError: t.onError
                    }, function(e) {
                        return o.createElement(N.Mutation, {
                            mutation: y,
                            onCompleted: t.onComplete,
                            onError: t.onError
                        }, function(n) {
                            return o.createElement(h.a, {
                                type: "primary",
                                disabled: !1 === t.submissionState,
                                onClick: function o() {
                                    return function e(t, n, o) {
                                        if (t.submissionState) {
                                            var r, c;
                                            t.repostInfo ? (r = t.repostInfo.originalId, c = i(t.contentId)) : r = t.contentId;
                                            var l = Object(j.a)({}, t, {
                                                contentId: r
                                            });
                                            c && n({
                                                contentId: c,
                                                contentType: k.REPOST,
                                                userId: l.userId,
                                                iapReasonId: l.submissionState.iapReason,
                                                comments: l.submissionState.comment
                                            }), A.has(l.contentType) ? function e(t) {
                                                var n = new URLSearchParams;
                                                return n.set("token", t.csrfToken), n.set("contentId", "".concat(i(t.contentId) || "")), n.set("voteContentType", t.contentType), n.set("comment", t.submissionState.comment), n.set("reasonId", t.submissionState.iapReason), n.set("suggestedLocationId", t.submissionState.suggestedLocationId), x("/ReportIAP?action=reportIAP&step=SAVE&".concat(n.toString()))
                                            }(l).then(function() {
                                                l.onComplete()
                                            }).catch(function() {
                                                l.onError()
                                            }) : L.has(l.contentType) ? function e(t) {
                                                var n = t.forumInfo || {},
                                                    o = n.forumId,
                                                    r = void 0 === o ? -1 : o,
                                                    a = n.forumTopicId,
                                                    c = void 0 === a ? -1 : a,
                                                    l = new URLSearchParams;
                                                return l.set("token", t.csrfToken), l.set("fp", "".concat(i(t.contentId) || "")), l.set("ff", "".concat(r)), l.set("ft", "".concat(c)), l.set("reason", t.submissionState.iapReason), x("/ForumVote?".concat(l.toString()))
                                            }(l).then(function() {
                                                l.onComplete()
                                            }).catch(function() {
                                                l.onError()
                                            }) : w.has(l.contentType) ? n({
                                                contentId: i(l.contentId),
                                                contentType: l.contentType,
                                                userId: l.userId,
                                                iapReasonId: l.submissionState.iapReason,
                                                comments: l.submissionState.comment
                                            }) : W.has(l.contentType) && o({
                                                reportedUserId: a(l.contentId),
                                                userId: l.userId,
                                                iapReasonId: l.submissionState.iapReason,
                                                comments: l.submissionState.comment
                                            })
                                        }
                                    }(t, function(e) {
                                        return n({
                                            variables: e
                                        })
                                    }, function(t) {
                                        return e({
                                            variables: t
                                        })
                                    })
                                }
                            }, Object(O.localize)("common_Submit"))
                        })
                    })))
                },
                V = Object(r.connect)(function(e) {
                    return {
                        sticky: "MOBILE" === e.meta.device.viewportCategory
                    }
                })(z);
            z.defaultProps = {
                forumInfo: void 0,
                repostInfo: void 0
            };
            var M = n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                F = n("@ta/list.navigable-list"),
                D = n("@ta/common.typeahead"),
                U = n("@ta/social.button-group"),
                B = n.n(U),
                G = {
                    doYouKnow: "public-iap-reporting-new_location_flow-SuggestionLocationBox__doYouKnow--2114s",
                    enterName: "public-iap-reporting-new_location_flow-SuggestionLocationBox__enterName--1ER88",
                    commentSpace: "public-iap-reporting-new_location_flow-SuggestionLocationBox__commentSpace--2cMrZ",
                    selectorWrap: "public-iap-reporting-new_location_flow-SuggestionLocationBox__selectorWrap--ySzM_"
                },
                H = {
                    default: "default",
                    yes: "yes",
                    no: "no"
                },
                Y = function(e) {
                    function t(e) {
                        var n;
                        return Object(u.a)(this, t), n = Object(d.a)(this, Object(m.a)(t).call(this, e)), Object(b.a)(Object(_.a)(Object(_.a)(n)), "onYesClick", function() {
                            n.setState({
                                locationKnown: H.yes
                            }), n.props.onYes()
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "onNoClick", function() {
                            n.setState({
                                locationKnown: H.no
                            }), n.props.onNo()
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "onResultSelected", function(e) {
                            var t = e.displayValue || "";
                            n.props.onLocationChange(parseInt(e.value, 10), t), n.setState({
                                textInputValue: t
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "textInputChanged", function(e) {
                            n.setState({
                                textInputValue: e
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "typeaheadJsonFetcher", new D.TypeaheadJsonFetcher({
                            interleaved: !0,
                            types: ["hotel", "attr", "eat"],
                            filter: ["nobroad"],
                            name_depth: 1,
                            details: !0,
                            legacy_format: !0,
                            urlList: !1,
                            max: 8
                        })), Object(b.a)(Object(_.a)(Object(_.a)(n)), "defaultResult", {
                            type: "location_id",
                            value: "0"
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "render", function() {
                            var e = n.state.locationKnown === H.yes ? "primary" : "secondary",
                                t = n.state.locationKnown === H.no ? "primary" : "secondary";
                            return o.createElement("div", null, o.createElement("div", {
                                className: G.doYouKnow
                            }, n.props.hintText), o.createElement(B.a, null, o.createElement(h.a, {
                                type: e,
                                onClick: n.onYesClick
                            }, Object(O.localize)("common_Yes")), o.createElement(h.a, {
                                type: t,
                                onClick: n.onNoClick
                            }, Object(O.localize)("common_No"))), o.createElement("div", {
                                style: {
                                    display: n.state.locationKnown === H.yes ? "block" : "none"
                                }
                            }, o.createElement("div", {
                                className: G.enterName
                            }, Object(O.localize)("social_report_level3_1")), o.createElement("div", {
                                className: G.selectorWrap
                            }, o.createElement(D.Selector, {
                                typeaheadTextInputValue: n.state.textInputValue,
                                selectionChanged: n.onResultSelected,
                                fetchers: [n.typeaheadJsonFetcher],
                                textInputChanged: n.textInputChanged,
                                placeHolder: Object(O.localize)("common_25f1"),
                                key: n.props.location.id
                            }, function(e, t, n) {
                                return o.createElement(F.NavigableList, null, [].concat(Object(M.a)(e.worldwide || []), Object(M.a)(e.typeaheadjson || [])).map(function(e) {
                                    return function(r, a) {
                                        return o.createElement(D.TypeaheadJsonResult, {
                                            result: e,
                                            tracker: t,
                                            onMouseMove: a,
                                            onSelection: n,
                                            active: r,
                                            key: "result=".concat(e.value),
                                            includeIcon: !0
                                        })
                                    }
                                }))
                            })), o.createElement(E, {
                                className: G.commentSpace,
                                value: n.props.comment,
                                onChange: n.props.onCommentChange,
                                minLength: 10,
                                maxLength: 250
                            })), o.createElement("div", {
                                style: {
                                    display: n.state.locationKnown === H.no ? "block" : "none"
                                }
                            }, o.createElement(E, {
                                className: G.commentSpace,
                                value: n.props.comment,
                                onChange: n.props.onCommentChange,
                                minLength: 10,
                                maxLength: 250,
                                required: !0,
                                label: Object(O.localize)("social_report_level3_2")
                            })))
                        }), n.state = {
                            locationKnown: H.default,
                            textInputValue: e.location.label
                        }, n
                    }
                    return Object(p.a)(t, e), t
                }(o.Component),
                q = function(e) {
                    function t() {
                        return Object(u.a)(this, t), Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(p.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.props.onMountMethod()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return this.props.children
                        }
                    }]), t
                }(o.Component),
                K = function e(t) {
                    return !1
                },
                X = function e(t) {
                    return !0
                },
                J = function e(t) {
                    return function(e) {
                        return e.comment.trim().length > t
                    }
                },
                Q = function e(t) {
                    return t.suggestedLocation && t.suggestedLocation.id > 0
                },
                Z = J(10),
                $ = {
                    id: 0,
                    label: ""
                },
                ee = function(e) {
                    function t() {
                        var e, n;
                        Object(u.a)(this, t);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return n = Object(d.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(a))), Object(b.a)(Object(_.a)(Object(_.a)(n)), "state", {
                            selectedIAPReason: void 0,
                            comment: "",
                            suggestedLocation: $,
                            isStateValid: function e(t) {
                                return !1
                            },
                            subPanelId: ""
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "getSubmissionState", function() {
                            return !!n.state.isStateValid && !(!n.state.selectedIAPReason || n.state.selectedIAPReason < 0) && !!n.state.isStateValid(n.state) && {
                                iapReason: n.state.selectedIAPReason,
                                comment: n.state.comment,
                                suggestedLocationId: n.state.suggestedLocation.id
                            }
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "setNewReason", function(e, t) {
                            n.setState({
                                selectedIAPReason: e,
                                isStateValid: t,
                                comment: "",
                                suggestedLocation: $
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "setValidation", function(e) {
                            n.setState({
                                isStateValid: e
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "setSubPanel", function(e) {
                            n.setState({
                                subPanelId: e
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "setCommentFromCommentBoxEvent", function(e) {
                            n.setState({
                                comment: e.target.value
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "setLocation", function(e, t) {
                            var o = {
                                id: e,
                                label: t
                            };
                            n.setState({
                                suggestedLocation: o
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "resetSubmissionState", function() {
                            n.setState({
                                comment: "",
                                suggestedLocation: $
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createSubmitButton", function() {
                            return o.createElement(V, {
                                contentId: n.props.contentId,
                                contentType: n.props.contentType,
                                userId: n.props.userId,
                                csrfToken: n.props.csrfToken,
                                submissionState: n.getSubmissionState(),
                                onComplete: n.props.onComplete,
                                onError: n.props.onError,
                                onBack: function e() {
                                    n.setSubPanel(""), n.resetSubmissionState()
                                },
                                showBackButton: !!n.state.subPanelId,
                                forumInfo: n.props.forumInfo,
                                repostInfo: n.props.repostInfo
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createRadioWithSuggestionBox", function(e, t) {
                            return n.createRadioButtonWithChildren(e.id, e.labelGet(), K, o.createElement(Y, {
                                hintText: t,
                                comment: n.state.comment,
                                onCommentChange: n.setCommentFromCommentBoxEvent,
                                location: n.state.suggestedLocation,
                                onLocationChange: n.setLocation,
                                onYes: function e() {
                                    n.setValidation(Q), n.resetSubmissionState()
                                },
                                onNo: function e() {
                                    n.setValidation(Z), n.resetSubmissionState()
                                }
                            }))
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createRadioWithText", function(e, t) {
                            return n.createRadioButtonWithChildren(e.id, e.labelGet(), X, t)
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createRadio", function(e) {
                            return n.createRadioButtonWithChildren(e.id, e.labelGet(), X, null)
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createRadioWithOptionalComment", function(e, t) {
                            return n.createRadioButtonWithChildren(e.id, e.labelGet(), X, o.createElement(o.Fragment, null, t, o.createElement(E, {
                                value: n.state.comment,
                                onChange: n.setCommentFromCommentBoxEvent,
                                maxLength: 250
                            })))
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createRadioWithRequiredComment", function(e, t) {
                            return n.createRadioButtonWithChildren(e.id, e.labelGet(), J(10), o.createElement(o.Fragment, null, t, o.createElement(E, {
                                value: n.state.comment,
                                onChange: n.setCommentFromCommentBoxEvent,
                                required: !0,
                                minLength: 10,
                                maxLength: 500
                            })))
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createRadioWithContentNoSubmit", function(e, t) {
                            return n.createRadioButtonWithChildren(e.id, e.labelGet(), K, t)
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createRadioButtonWithChildren", function(e, t, r, a) {
                            var i = "".concat(e);
                            return o.createElement(v, {
                                name: "iapRadio",
                                selected: e === n.state.selectedIAPReason,
                                value: i,
                                labelTxt: t,
                                onChangeMethod: function t() {
                                    n.setNewReason(e, r)
                                }
                            }, a)
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createDefaultReasonWithRequiredComment", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
                            return n.createDefaultReasonWithChildren(e.id, J(t), o.createElement(E, {
                                value: n.state.comment,
                                onChange: n.setCommentFromCommentBoxEvent,
                                required: !0,
                                minLength: t,
                                maxLength: 500
                            }))
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createDefaultReasonWithChildren", function(e, t, r) {
                            return o.createElement(q, {
                                onMountMethod: function o() {
                                    n.setNewReason(e, t)
                                }
                            }, r)
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "createRadioButtonWithSubPanel", function(e, t, r, a) {
                            var i = "".concat(e);
                            return o.createElement(v, {
                                name: "iapRadio",
                                selected: !1,
                                value: i,
                                labelTxt: t,
                                onChangeMethod: function t() {
                                    n.setSubPanel(a), n.setNewReason(e, r)
                                }
                            }, null)
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "render", function() {
                            return o.createElement(o.Fragment, null, o.createElement("div", null, n.props.children(Object(_.a)(Object(_.a)(n)))), n.createSubmitButton())
                        }), n
                    }
                    return Object(p.a)(t, e), Object(s.a)(t, [{
                        key: "isSubPanel",
                        value: function e(t) {
                            return this.state.subPanelId === t
                        }
                    }]), t
                }(o.Component),
                te = function e(t, n) {
                    return {
                        id: t,
                        labelGet: n
                    }
                },
                ne = {
                    DUPLICATE_CONTENT: te(5, function() {
                        return Object(O.unescaped)(Object(O.localize)("social_report_reason_photos2"))
                    }),
                    WRONG_LOCATION: te(6, function() {
                        return Object(O.localize)("report_review_radio_8")
                    }),
                    CLOSED: te(8, function() {
                        return Object(O.localize)("report_review_radio_21")
                    }),
                    OTHER: te(9, function() {
                        return Object(O.localize)("report_review_radio_19")
                    }),
                    WRITTEN_BY_COMPETITOR: te(19, function() {
                        return Object(O.localize)("report_review_radio_10")
                    }),
                    INAPPROPRIATE: te(22, function() {
                        return Object(O.localize)("report_review_radio_9")
                    }),
                    NOT_ORIGINAL_REVIEW: te(24, function() {
                        return Object(O.localize)("report_review_radio_16")
                    }),
                    NOT_TRAVELERS_OWN: te(25, function() {
                        return Object(O.localize)("report_review_radio_13")
                    }),
                    PROMOTIONAL: te(27, function() {
                        return Object(O.localize)("report_review_radio_24")
                    }),
                    REVIEW_NOT_CONSISTENT_WITH_RATING: te(30, function() {
                        return Object(O.localize)("report_review_radio_12_ver_2")
                    }),
                    LOW_QUALITY: te(31, function() {
                        return Object(O.localize)("iap_low_quality_ffffe4e2")
                    }),
                    COPYRIGHT_VIOLATION: te(32, function() {
                        return Object(O.unescaped)(Object(O.localize)("social_content_report_copyright_violation"))
                    }),
                    BIASED: te(37, function() {
                        return Object(O.localize)("report_review_radio_20")
                    }),
                    MORE_THAN_1_YEAR_AGO: te(38, function() {
                        return Object(O.localize)("report_review_radio_11")
                    }),
                    CONTAINS_PRIVATE_INFO: te(41, function() {
                        return Object(O.localize)("report_review_radio_18")
                    }),
                    PROFANE_EXPLICIT_HATE_SPEECH: te(42, function() {
                        return Object(O.localize)("iap_profane_explicit_or_hate_speech")
                    }),
                    LINK_INCORRECT_OUTDATED_BROKEN: te(43, function() {
                        return Object(O.localize)("iap_link_incorrect_outdated_broken")
                    }),
                    NOT_PERSONAL_EXPERIENCE: te(45, function() {
                        return Object(O.localize)("iap_not_personal_experience")
                    }),
                    FALSE_MISLEADING_INFO: te(46, function() {
                        return Object(O.localize)("iap_false_misleading_info")
                    }),
                    PROMOTES_ILLEGAL_ACTIVITY: te(47, function() {
                        return Object(O.localize)("iap_promote_illegal_activity")
                    }),
                    PARTICIPATION_ILLEGAL_ACTIVITY: te(48, function() {
                        return Object(O.localize)("iap_participate_illegal_activity")
                    }),
                    LINK_ILLEGAL_ACTIVITY: te(50, function() {
                        return Object(O.localize)("iap_link_illegal_activity")
                    }),
                    SELF_PROMOTION_ADVERTISEMENT_SOLICITATION: te(51, function() {
                        return Object(O.localize)("iap_forums_self_promotion")
                    }),
                    OFF_TOPIC: te(52, function() {
                        return Object(O.localize)("iap_forums_off_topic")
                    }),
                    SPAM: te(53, function() {
                        return Object(O.localize)("iap_forums_spam")
                    }),
                    DUPLICATE_FORUM: te(54, function() {
                        return Object(O.localize)("iap_forums_duplicate")
                    }),
                    HARASSMENT: te(55, function() {
                        return Object(O.localize)("iap_forums_harassment")
                    }),
                    PROFANITY_SEX_VIOLENCE_CRIME_HATE: te(56, function() {
                        return Object(O.localize)("iap_forums_profanity_sex_violence_crime_hate")
                    }),
                    MULTIPLE_ACCOUNTS_OR_IMPERSONATION: te(57, function() {
                        return Object(O.localize)("iap_forums_multiple_accounts_or_impersonation")
                    }),
                    PERSONAL_INFO: te(58, function() {
                        return Object(O.localize)("iap_forums_personal_info")
                    }),
                    COPYRIGHTED: te(59, function() {
                        return Object(O.localize)("iap_forums_copyrighted")
                    }),
                    TRIP_COPYRIGHT: te(60, function() {
                        return Object(O.localize)("iap_trips_copyrighted")
                    }),
                    TRIP_NOT_TRAVEL_RELATED: te(61, function() {
                        return Object(O.localize)("iap_trips_not_travel_related")
                    }),
                    TRIP_ERROR_OR_DISAGREE: te(62, function() {
                        return Object(O.localize)("iap_trips_error_or_disagree")
                    }),
                    PROFILE_PROBLEM_WITH_PHOTO: te(63, function() {
                        return Object(O.localize)("iap_profile_problem_with_pic")
                    }),
                    PROFILE_PROBLEM_WITH_LINK: te(64, function() {
                        return Object(O.localize)("iap_profile_problem_with_link")
                    }),
                    PROFILE_IAP_USERNAME: te(65, function() {
                        return Object(O.localize)("iap_profile_username")
                    }),
                    PROFILE_IAP_CONTRIBUTION: te(66, function() {
                        return Object(O.localize)("iap_profile_contribution")
                    }),
                    PROFILE_PROBLEM_MY_ACCOUNT: te(67, function() {
                        return Object(O.localize)("iap_profile_problem_my_account")
                    }),
                    PROFILE_UNWANTED_MESSAGE: te(68, function() {
                        return Object(O.localize)("iap_profile_unwanted_messages")
                    }),
                    REPORT_THIS_REVIEW: te(-1, function() {
                        return Object(O.localize)("report_review_radio_1")
                    }),
                    UPDATE_BUSINESS_DETAILS: te(-2, function() {
                        return Object(O.localize)("report_review_radio_2")
                    }),
                    REPORT_BUSINESS_CLOSED: te(-3, function() {
                        return Object(O.localize)("report_review_radio_3")
                    }),
                    EDIT_REMOVE_RESPONSE: te(-4, function() {
                        return Object(O.localize)("report_review_radio_4")
                    }),
                    REPORT_OWNER_CHANGED: te(-5, function() {
                        return Object(O.localize)("report_review_radio_5")
                    }),
                    REPORT_PHOTO: te(-6, function() {
                        return Object(O.localize)("report_review_radio_6")
                    }),
                    REMOVE_LISTING: te(-7, function() {
                        return Object(O.localize)("report_review_radio_7")
                    }),
                    DISAGREE_WITH_INFO: te(-8, function() {
                        return Object(O.localize)("report_review_radio_17")
                    })
                },
                oe = function e(t) {
                    return o.createElement(ee, {
                        csrfToken: t.csrfToken,
                        userId: t.userId,
                        contentId: t.contentId,
                        contentType: k.LINK,
                        onError: t.onError,
                        onComplete: t.onComplete,
                        repostInfo: t.repostInfo
                    }, function(e) {
                        return o.createElement(o.Fragment, null, e.createRadio(ne.PROFANE_EXPLICIT_HATE_SPEECH), e.createRadio(ne.LINK_ILLEGAL_ACTIVITY), e.createRadio(ne.LINK_INCORRECT_OUTDATED_BROKEN))
                    })
                };
            oe.defaultProps = c;
            var re = Object(r.connect)(function(e) {
                    return l(e)
                })(oe),
                ae = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "IsPropertyOwner"
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
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "locations"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "locationIds"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "locationId"
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
                                            value: "locationId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ownerResponseUrl"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ownerManagementUrl"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "currentUserOwnerStatus"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isValid"
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
                        end: 199
                    }
                };
            ae.loc.source = {
                body: "5becb5041522"
            };
            var ie = ae,
                ce = function e(t) {
                    var n = t.location || {},
                        r = n.placeType,
                        a = void 0 === r ? "" : r,
                        i = n.locationId,
                        c = void 0 === i ? 1 : i,
                        l = "ATTRACTION" === a || "EATERY" === a;
                    return o.createElement(N.Query, {
                        query: ie,
                        variables: {
                            locationId: c
                        },
                        errorPolicy: "all"
                    }, function(e) {
                        var n, r = e.loading,
                            a = e.data;
                        if (r) return null;
                        var i = (null == a ? void 0 : a.locations) && a.locations[0];
                        return i && (null === (n = i.currentUserOwnerStatus) || void 0 === n ? void 0 : n.isValid) ? function e(t, n, r, a) {
                            var i = n.ownerManagementUrl,
                                c = n.ownerResponseUrl,
                                l = "/OwnerSupport?locationid=".concat(r, "&category=4&topic=44"),
                                u = Object(O.unescaped)(Object(O.localize)("report_review_redirect_2_part_2", {
                                    sUrl: "/UpdateListing-d".concat(r)
                                })),
                                s = Object(O.unescaped)(Object(O.localize)("report_review_redirect_2_part_1", {
                                    sUrl: i
                                })),
                                d = a ? u : s,
                                m = Object(O.unescaped)(Object(O.localize)("report_review_redirect_3", {
                                    sUrl: i
                                })),
                                p = Object(O.unescaped)(Object(O.localize)("report_review_redirect_4_ver_2", {
                                    sUrl: c
                                })),
                                _ = Object(O.unescaped)(Object(O.localize)("report_review_redirect_5", {
                                    sUrl: l
                                })),
                                b = Object(O.localize)("report_review_redirect_6"),
                                f = Object(O.unescaped)(Object(O.localize)("report_review_redirect_7", {
                                    sUrl: "https://www.tripadvisorsupport.com/hc/en-us/articles/200614617-As-a-business-owner-or-representative-how-do-I-remove-my-listing-",
                                    sEmphClass: "public-iap-reporting-content-Reviews__bold--2OE23"
                                }));
                            return o.createElement(ee, {
                                csrfToken: t.csrfToken,
                                userId: t.userId,
                                contentId: t.contentId,
                                contentType: k.USERREVIEW,
                                onError: t.onError,
                                onComplete: t.onComplete,
                                repostInfo: t.repostInfo
                            }, function(e) {
                                return e.isSubPanel("ownerReportReview") ? o.createElement("div", {
                                    key: "ownerReportReview"
                                }, e.createRadioWithSuggestionBox(ne.WRONG_LOCATION, Object(O.localize)("report_review_radio_desc_19")), e.createRadioWithOptionalComment(ne.INAPPROPRIATE, Object(O.localize)("report_review_radio_desc_9")), e.createRadioWithRequiredComment(ne.WRITTEN_BY_COMPETITOR, Object(O.localize)("report_review_radio_desc_10")), e.createRadioWithOptionalComment(ne.MORE_THAN_1_YEAR_AGO, Object(O.localize)("report_review_radio_desc_11_ver_1")), e.createRadioWithOptionalComment(ne.REVIEW_NOT_CONSISTENT_WITH_RATING, "".concat(Object(O.localize)("report_review_radio_desc_12_part_1"), " ").concat(Object(O.localize)("report_review_radio_desc_12_part_2"))), e.createRadioWithOptionalComment(ne.NOT_TRAVELERS_OWN, Object(O.localize)("report_review_radio_desc_13_ver_2")), e.createRadioWithOptionalComment(ne.DUPLICATE_CONTENT, "".concat(Object(O.localize)("report_review_radio_desc_14_part_1"), " ").concat(Object(O.localize)("report_review_radio_desc_14_part_2"))), e.createRadioWithOptionalComment(ne.PROMOTIONAL, Object(O.localize)("report_review_radio_desc_15_ver_1")), e.createRadioWithOptionalComment(ne.NOT_ORIGINAL_REVIEW, Object(O.localize)("report_review_radio_desc_16")), e.createRadioWithContentNoSubmit(ne.DISAGREE_WITH_INFO, Object(O.unescaped)(Object(O.localize)("report_review_radio_desc_17", {
                                    sUrl: c
                                }))), e.createRadioWithOptionalComment(ne.CONTAINS_PRIVATE_INFO, Object(O.localize)("report_review_radio_desc_18")), e.createRadioWithRequiredComment(ne.OTHER)) : o.createElement(o.Fragment, null, e.createRadioButtonWithSubPanel(ne.REPORT_THIS_REVIEW.id, ne.REPORT_THIS_REVIEW.labelGet(), K, "ownerReportReview"), e.createRadioWithContentNoSubmit(ne.UPDATE_BUSINESS_DETAILS, d), e.createRadioWithContentNoSubmit(ne.REPORT_BUSINESS_CLOSED, m), e.createRadioWithContentNoSubmit(ne.EDIT_REMOVE_RESPONSE, p), e.createRadioWithContentNoSubmit(ne.REPORT_OWNER_CHANGED, _), e.createRadioWithContentNoSubmit(ne.REPORT_PHOTO, b), e.createRadioWithContentNoSubmit(ne.REMOVE_LISTING, f))
                            })
                        }(t, i, c, l) : function e(t, n, r) {
                            var a = n && Object(O.unescaped)(Object(O.localize)("social_report_level2_redirect", {
                                    sUrl: "/UpdateListing-d".concat(n)
                                })),
                                i = n && Object(O.unescaped)(Object(O.localize)("social_report_level2_1", {
                                    sUrl: "/Owners-d".concat(n)
                                }));
                            return o.createElement(ee, {
                                csrfToken: t.csrfToken,
                                userId: t.userId,
                                contentId: t.contentId,
                                contentType: k.USERREVIEW,
                                onError: t.onError,
                                onComplete: t.onComplete,
                                repostInfo: t.repostInfo
                            }, function(e) {
                                return o.createElement(o.Fragment, null, e.createRadioWithOptionalComment(ne.PROFANE_EXPLICIT_HATE_SPEECH), e.createRadioWithOptionalComment(ne.PROMOTES_ILLEGAL_ACTIVITY), e.createRadioWithRequiredComment(ne.BIASED), r ? e.createRadioWithContentNoSubmit(ne.CLOSED, o.createElement("span", null, a)) : e.createRadioWithRequiredComment(ne.CLOSED), e.createRadioWithSuggestionBox(ne.WRONG_LOCATION, Object(O.localize)("report_review_radio_desc_19")), e.createRadioWithOptionalComment(ne.DUPLICATE_CONTENT), e.createRadioWithOptionalComment(ne.NOT_PERSONAL_EXPERIENCE), e.createRadioWithContentNoSubmit(ne.FALSE_MISLEADING_INFO, o.createElement("span", null, i)), e.createRadioWithRequiredComment(ne.OTHER))
                            })
                        }(t, c, l)
                    })
                };
            ce.defaultProps = c;
            var le = Object(r.connect)(function(e) {
                    return l(e)
                })(ce),
                ue = function e(t) {
                    return o.createElement(ee, {
                        csrfToken: t.csrfToken,
                        userId: t.userId,
                        contentId: t.contentId,
                        contentType: k.MEDIA,
                        onError: t.onError,
                        onComplete: t.onComplete,
                        repostInfo: t.repostInfo
                    }, function(e) {
                        return o.createElement(o.Fragment, null, e.createRadioWithOptionalComment(ne.PROFANE_EXPLICIT_HATE_SPEECH), e.createRadioWithOptionalComment(ne.PARTICIPATION_ILLEGAL_ACTIVITY), e.createRadioWithOptionalComment(ne.LOW_QUALITY), e.createRadioWithSuggestionBox(ne.WRONG_LOCATION, Object(O.localize)("social_report_level2_3")), e.createRadioWithOptionalComment(ne.DUPLICATE_CONTENT), e.createRadioWithOptionalComment(ne.COPYRIGHT_VIOLATION), e.createRadioWithRequiredComment(ne.OTHER))
                    })
                };
            ue.defaultProps = c;
            var se = Object(r.connect)(function(e) {
                    return l(e)
                })(ue),
                de = function e(t) {
                    return o.createElement(ee, {
                        csrfToken: t.csrfToken,
                        userId: t.userId,
                        contentId: t.contentId,
                        contentType: k.MEDIA,
                        onError: t.onError,
                        onComplete: t.onComplete,
                        repostInfo: t.repostInfo
                    }, function(e) {
                        return o.createElement(o.Fragment, null, e.createRadioWithOptionalComment(ne.PROFANE_EXPLICIT_HATE_SPEECH), e.createRadioWithOptionalComment(ne.PARTICIPATION_ILLEGAL_ACTIVITY), e.createRadioWithSuggestionBox(ne.WRONG_LOCATION, Object(O.localize)("social_report_level2_4")), e.createRadioWithOptionalComment(ne.DUPLICATE_CONTENT), e.createRadioWithOptionalComment(ne.COPYRIGHT_VIOLATION), e.createRadioWithRequiredComment(ne.OTHER))
                    })
                };
            de.defaultProps = c;
            var me = Object(r.connect)(function(e) {
                    return l(e)
                })(de),
                pe = n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
                _e = function e(t) {
                    var n = t.forumInfo,
                        r = Object(pe.a)(t, ["forumInfo"]);
                    return o.createElement(ee, {
                        csrfToken: r.csrfToken,
                        userId: r.userId,
                        contentId: r.contentId,
                        contentType: k.FORUM,
                        onError: r.onError,
                        onComplete: r.onComplete,
                        forumInfo: n,
                        repostInfo: r.repostInfo
                    }, function(e) {
                        return o.createElement(o.Fragment, null, e.createRadioWithOptionalComment(ne.SELF_PROMOTION_ADVERTISEMENT_SOLICITATION), e.createRadioWithOptionalComment(ne.OFF_TOPIC), e.createRadioWithOptionalComment(ne.SPAM), e.createRadioWithOptionalComment(ne.DUPLICATE_FORUM), e.createRadioWithOptionalComment(ne.HARASSMENT), e.createRadioWithOptionalComment(ne.PROFANITY_SEX_VIOLENCE_CRIME_HATE), e.createRadioWithOptionalComment(ne.MULTIPLE_ACCOUNTS_OR_IMPERSONATION), e.createRadioWithOptionalComment(ne.PERSONAL_INFO), e.createRadioWithOptionalComment(ne.COPYRIGHTED))
                    })
                };
            _e.defaultProps = c;
            var be = Object(r.connect)(function(e) {
                    return l(e)
                })(_e),
                fe = n("./packages/common/state/state.jsx"),
                Oe = function e(t) {
                    var n = Object(fe.getStore)().getState().i18n.ietfLocale.replace("_", "-").toLocaleLowerCase(),
                        r = Object(O.unescaped)(Object(O.localize)("trip_level_2_disagree_or_error", {
                            sUrl: "https://www.tripadvisorsupport.com/hc/".concat(n, "/articles/360008024254")
                        }));
                    return o.createElement(ee, {
                        csrfToken: t.csrfToken,
                        userId: t.userId,
                        contentId: t.contentId,
                        contentType: k.TRIP,
                        onError: t.onError,
                        onComplete: t.onComplete,
                        repostInfo: t.repostInfo
                    }, function(e) {
                        return o.createElement(o.Fragment, null, e.createRadioWithOptionalComment(ne.PROFANE_EXPLICIT_HATE_SPEECH), e.createRadioWithOptionalComment(ne.PROMOTES_ILLEGAL_ACTIVITY), e.createRadioWithOptionalComment(ne.TRIP_COPYRIGHT), e.createRadioWithOptionalComment(ne.TRIP_NOT_TRAVEL_RELATED), e.createRadioWithContentNoSubmit(ne.TRIP_ERROR_OR_DISAGREE, o.createElement("span", null, r)), e.createRadioWithRequiredComment(ne.OTHER))
                    })
                };
            Oe.defaultProps = c;
            var Ie = Object(r.connect)(function(e) {
                    return l(e)
                })(Oe),
                Ee = n("@ta/overlays.modal"),
                Re = n("@ta/overlays.managers"),
                Te = n("@ta/overlays.headers"),
                ve = n("@ta/social.login-gate"),
                je = {
                    iapTYH1: "public-iap-reporting-ContentModals__iapTYH1--3QyZX",
                    iapTYText: "public-iap-reporting-ContentModals__iapTYText--1J2-7",
                    iapTYContent: "public-iap-reporting-ContentModals__iapTYContent--wf_rh",
                    iapModalContent: "public-iap-reporting-ContentModals__iapModalContent--3IrQE"
                },
                Ne = function e(t) {
                    return o.createElement(ee, {
                        csrfToken: t.csrfToken,
                        userId: t.userId,
                        contentId: t.contentId,
                        contentType: k.LOCATION_TOPIC,
                        onError: t.onError,
                        onComplete: t.onComplete,
                        repostInfo: t.repostInfo
                    }, function(e) {
                        return o.createElement(o.Fragment, null, o.createElement("div", null, Object(O.localize)("qa_iap_label")), e.createDefaultReasonWithRequiredComment(ne.INAPPROPRIATE))
                    })
                };
            Ne.defaultProps = c;
            var Ce = Object(r.connect)(function(e) {
                    return l(e)
                })(Ne),
                he = function e(t) {
                    return o.createElement(ee, {
                        csrfToken: t.csrfToken,
                        userId: t.userId,
                        contentId: t.contentId,
                        contentType: k.LOCATION_POSTING,
                        onError: t.onError,
                        onComplete: t.onComplete,
                        repostInfo: t.repostInfo
                    }, function(e) {
                        return o.createElement(o.Fragment, null, o.createElement("div", null, Object(O.localize)("qa_iap_label")), e.createDefaultReasonWithRequiredComment(ne.INAPPROPRIATE))
                    })
                };
            he.defaultProps = c;
            var ge = Object(r.connect)(function(e) {
                    return l(e)
                })(he),
                ye = function e(t) {
                    var n = t.locale.replace("_", "-").toLocaleLowerCase(),
                        r = Object(O.unescaped)(Object(O.localize)("iap_profile_report_from_post_lev2", {
                            sUrl: "https://www.tripadvisorsupport.com/hc/".concat(n, "/articles/360008133913-TripAdvisor-s-Content-Policy")
                        })),
                        a = Object(O.unescaped)(Object(O.localize)("iap_profile_general_support_lev2")),
                        i = Object(O.unescaped)(Object(O.localize)("iap_profile_report_from_inbox_lev2"));
                    return o.createElement(ee, {
                        csrfToken: t.csrfToken,
                        userId: t.userId,
                        contentId: t.contentId,
                        contentType: k.PROFILE,
                        onError: t.onError,
                        onComplete: t.onComplete
                    }, function(e) {
                        return o.createElement(o.Fragment, null, e.createRadioWithText(ne.PROFILE_PROBLEM_WITH_PHOTO, Object(O.localize)("iap_profile_problem_with_pic_lev2")), e.createRadio(ne.PROFILE_PROBLEM_WITH_LINK), e.createRadio(ne.PROFILE_IAP_USERNAME), e.createRadioWithContentNoSubmit(ne.PROFILE_IAP_CONTRIBUTION, o.createElement("span", null, r)), e.createRadioWithContentNoSubmit(ne.PROFILE_PROBLEM_MY_ACCOUNT, o.createElement("span", null, a)), e.createRadioWithContentNoSubmit(ne.PROFILE_UNWANTED_MESSAGE, o.createElement("span", null, i)))
                    })
                };
            ye.defaultProps = c;
            var Se = Object(r.connect)(function(e) {
                    return l(e)
                })(ye),
                Pe = function e() {
                    return o.createElement(Re.Closer, null, function(e) {
                        return o.createElement(h.a, {
                            size: "fullwidth",
                            type: "primary",
                            onClick: e
                        }, Object(O.localize)("common_OK"))
                    })
                },
                ke = function e() {
                    return o.createElement("div", {
                        className: je.iapTYContent
                    }, o.createElement("p", {
                        className: je.iapTYH1,
                        style: {
                            textAlign: "center"
                        }
                    }, Object(O.localize)("social_report_ty2")), o.createElement("p", {
                        className: je.iapTYText
                    }, Object(O.localize)("social_report_ty2b")), Pe())
                },
                Ae = function e() {
                    return o.createElement("div", {
                        className: "".concat(je.iapTYContent, " ").concat(je.iapTYText)
                    }, Object(O.localize)("social_report_prof_err"), Pe())
                },
                Le = function(e) {
                    function t() {
                        var e, n;
                        Object(u.a)(this, t);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return n = Object(d.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(a))), Object(b.a)(Object(_.a)(Object(_.a)(n)), "state", {
                            status: "panel"
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "onError", function() {
                            n.setState({
                                status: "error"
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "onComplete", function() {
                            n.setState({
                                status: "thankyou"
                            })
                        }), Object(b.a)(Object(_.a)(Object(_.a)(n)), "render", function() {
                            var e;
                            e = "thankyou" === n.state.status ? o.createElement(ke, null) : "error" === n.state.status ? o.createElement(Ae, null) : o.createElement("div", {
                                className: je.iapModalContent
                            }, n.props.children(n.onError, n.onComplete));
                            var t = o.createElement(Te.TitleBar, {
                                iconName: "flag-fill",
                                displayType: "LEFT_ALIGN_GRAY"
                            }, o.createElement("div", null, Object(O.localize)("report_problem_ffffff85")));
                            return o.createElement(Ee.Modal, {
                                name: n.props.modalName,
                                header: t
                            }, e)
                        }), n
                    }
                    return Object(p.a)(t, e), t
                }(o.Component),
                we = function e(t) {
                    var n = t.name,
                        r = t.children;
                    return o.createElement(ve.SocialOpener, {
                        name: n
                    }, r)
                },
                We = {
                    repostInfo: void 0,
                    forumInfo: void 0,
                    location: void 0
                },
                xe = function e(t) {
                    return o.createElement(Le, {
                        modalName: t.modalName
                    }, function(e, n) {
                        return o.createElement(re, {
                            onError: e,
                            onComplete: n,
                            contentId: t.contentId,
                            repostInfo: t.repostInfo
                        })
                    })
                };
            xe.defaultProps = We;
            var ze = function e(t) {
                return o.createElement(Le, {
                    modalName: t.modalName
                }, function(e, n) {
                    return o.createElement(le, {
                        onError: e,
                        onComplete: n,
                        contentId: t.contentId,
                        location: t.location,
                        repostInfo: t.repostInfo
                    })
                })
            };
            ze.defaultProps = We;
            var Ve = function e(t) {
                return o.createElement(Le, {
                    modalName: t.modalName
                }, function(e, n) {
                    return o.createElement(se, {
                        onError: e,
                        onComplete: n,
                        contentId: t.contentId,
                        repostInfo: t.repostInfo
                    })
                })
            };
            Ve.defaultProps = We;
            var Me = function e(t) {
                return o.createElement(Le, {
                    modalName: t.modalName
                }, function(e, n) {
                    return o.createElement(me, {
                        onError: e,
                        onComplete: n,
                        contentId: t.contentId,
                        repostInfo: t.repostInfo
                    })
                })
            };
            Me.defaultProps = We;
            var Fe = function e(t) {
                return o.createElement(Le, {
                    modalName: t.modalName
                }, function(e, n) {
                    return o.createElement(be, {
                        onError: e,
                        onComplete: n,
                        contentId: t.contentId,
                        forumInfo: t.forumInfo,
                        repostInfo: t.repostInfo
                    })
                })
            };
            Fe.defaultProps = We;
            var De = function e(t) {
                return o.createElement(Le, {
                    modalName: t.modalName
                }, function(e, n) {
                    return o.createElement(Ie, {
                        onError: e,
                        onComplete: n,
                        contentId: t.contentId,
                        repostInfo: t.repostInfo
                    })
                })
            };
            De.defaultProps = We;
            var Ue = function e(t) {
                return o.createElement(Le, {
                    modalName: t.modalName
                }, function(e, n) {
                    return o.createElement(Ce, {
                        onError: e,
                        onComplete: n,
                        contentId: t.contentId,
                        repostInfo: t.repostInfo
                    })
                })
            };
            Ue.defaultProps = We;
            var Be = function e(t) {
                return o.createElement(Le, {
                    modalName: t.modalName
                }, function(e, n) {
                    return o.createElement(ge, {
                        onError: e,
                        onComplete: n,
                        contentId: t.contentId,
                        repostInfo: t.repostInfo
                    })
                })
            };
            Be.defaultProps = We;
            var Ge = function e(t) {
                return o.createElement(Le, {
                    modalName: t.modalName
                }, function(e, n) {
                    return o.createElement(Se, {
                        onError: e,
                        onComplete: n,
                        contentId: t.contentId
                    })
                })
            };
            Ge.defaultProps = We;
            var He = function e(t) {
                var n = (t.repostInfo || {}).originalType;
                switch (void 0 === n ? void 0 : n) {
                    case "Review":
                        return o.createElement(ze, t);
                    case "Photo":
                        return o.createElement(Ve, t);
                    case "Video":
                        return o.createElement(Me, t);
                    case "LinkPost":
                        return o.createElement(xe, t);
                    case "ForumPost":
                        return o.createElement(Fe, t);
                    case "Trip":
                        return o.createElement(De, t);
                    case "ApiLocationTopic":
                        return o.createElement(Ue, t);
                    case "ApiTopicPosting":
                        return o.createElement(Be, t);
                    default:
                        return null
                }
            };
            He.defaultProps = We;
            var Ye = n("./packages/common/global/global.jsx"),
                qe = function e(t) {
                    var n = {
                            contentId: Object(Ye.getObjectId)(t),
                            location: t.location,
                            forumInfo: {
                                forumId: t.forumId,
                                forumTopicId: t.topicId
                            }
                        },
                        o = t.repostedObject;
                    if (!o) return n;
                    var r = Object(Ye.getObjectId)(o);
                    return Object(j.a)({}, n, {
                        location: o.location,
                        forumInfo: {
                            forumId: o.forumId,
                            forumTopicId: o.topicId
                        },
                        repostInfo: {
                            originalId: r,
                            originalType: o.__typename
                        }
                    })
                };
            n.d(t, "ReportLinkPanel", function() {
                return re
            }), n.d(t, "ReportReviewPanel", function() {
                return le
            }), n.d(t, "ReportPhotoPanel", function() {
                return se
            }), n.d(t, "ReportVideoPanel", function() {
                return me
            }), n.d(t, "ReportForumPanel", function() {
                return be
            }), n.d(t, "ReportTripPanel", function() {
                return Ie
            }), n.d(t, "ReportLinkModal", function() {
                return xe
            }), n.d(t, "ReportReviewModal", function() {
                return ze
            }), n.d(t, "ReportPhotoModal", function() {
                return Ve
            }), n.d(t, "ReportVideoModal", function() {
                return Me
            }), n.d(t, "ReportForumModal", function() {
                return Fe
            }), n.d(t, "ReportTripModal", function() {
                return De
            }), n.d(t, "ReportRepostModal", function() {
                return He
            }), n.d(t, "ReportLocationTopicModal", function() {
                return Ue
            }), n.d(t, "ReportLocationTopicPostModal", function() {
                return Be
            }), n.d(t, "ReportMemberModal", function() {
                return Ge
            }), n.d(t, "ReportModalOpener", function() {
                return we
            }), n.d(t, "reportPropsFromObject", function() {
                return qe
            })
        },
        "@ta/common.typeahead": function(t, n) {
            t.exports = e
        },
        "@ta/input.text-area": function(e, n) {
            e.exports = t
        },
        "@ta/list.navigable-list": function(e, t) {
            e.exports = n
        },
        "@ta/overlays.headers": function(e, t) {
            e.exports = o
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = r
        },
        "@ta/overlays.modal": function(e, t) {
            e.exports = a
        },
        "@ta/social.button-group": function(e, t) {
            e.exports = i
        },
        "@ta/social.login-gate": function(e, t) {
            e.exports = c
        },
        "@ta/styleguide.button": function(e, t) {
            e.exports = l
        },
        "@ta/styleguide.radio-button": function(e, t) {
            e.exports = u
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = s
        }
    })
});
//# sourceMappingURL=public.iap-reporting.ede9cea2e1.js.map