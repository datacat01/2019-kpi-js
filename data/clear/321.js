define("@ta/social.member-event", ["@ta/common.text", "@ta/common.typeahead", "@ta/input.text-area", "@ta/media.upload", "@ta/overlays.headers", "@ta/overlays.managers", "@ta/overlays.modal", "@ta/overlays.toast", "@ta/social.dates", "@ta/social.follow", "@ta/social.link-preview", "@ta/social.member-common", "@ta/social.section-overflow", "@ta/social.social-reference", "@ta/styleguide.avatar", "@ta/styleguide.button", "@ta/styleguide.loading", "@ta/tracking.interactions", "@ta/common.global"], function(e, t, n, a, i, o, r, l, c, s, d, m, u, p, b, v, k, f, g) {
    return function(e) {
        var t = {};

        function n(a) {
            if (t[a]) return t[a].exports;
            var i = t[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
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
            var a = Object.create(null);
            if (n.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(a, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return a
        }, n.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/social/member-event/member-event.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function a(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function i(e, t, n) {
                return t && a(e.prototype, t), n && a(e, n), e
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, n) {
            "use strict";

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function a(e) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(a.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, t, n) {
            "use strict";

            function a(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), i.forEach(function(t) {
                        Object(a.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function o(e, t) {
                return !t || "object" !== Object(a.a)(t) && "function" != typeof t ? Object(i.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function a(e, t) {
                return (a = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, t, n) {
            "use strict";
            var a = n("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function i(e) {
                return function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || Object(a.a)(e) || function n() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function e(t) {
                    return a(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : a(t)
                })(e)
            }
            n.d(t, "a", function() {
                return i
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
        "./packages/common/logging/logging.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/common/state/state.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "./packages/public/content-uploader/link-uploader/LinkPostForm.jsx": function(e, t, n) {
            "use strict";
            var a = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = n("./node_modules/react/index.js"),
                m = n("./node_modules/react-redux/es/index.js"),
                u = n("./packages/common/i18n/i18n.jsx"),
                p = n("@ta/common.typeahead"),
                b = n("@ta/input.text-area"),
                v = n("@ta/social.social-reference"),
                k = n("./packages/common/features/features.jsx"),
                f = {
                    formWrapper: "public-content-uploader-link-uploader-LinkPostForm__formWrapper--1_-B6",
                    commentsContainer: "public-content-uploader-link-uploader-LinkPostForm__commentsContainer--1sZa3",
                    tagsContainer: "public-content-uploader-link-uploader-LinkPostForm__tagsContainer--1xXZ5",
                    inputLabelTitle: "public-content-uploader-link-uploader-LinkPostForm__inputLabelTitle--89OhP",
                    inputSubLabel: "public-content-uploader-link-uploader-LinkPostForm__inputSubLabel--GQCxU",
                    commentInput: "public-content-uploader-link-uploader-LinkPostForm__commentInput--NUXng",
                    commentError: "public-content-uploader-link-uploader-LinkPostForm__commentError--bX4ru",
                    characterCountContainer: "public-content-uploader-link-uploader-LinkPostForm__characterCountContainer--Hcm7z",
                    characterCount: "public-content-uploader-link-uploader-LinkPostForm__characterCount--GGWF4",
                    error: "public-content-uploader-link-uploader-LinkPostForm__error--2mGij",
                    multiSelectInput: "public-content-uploader-link-uploader-LinkPostForm__multiSelectInput--1pGGj"
                },
                g = 500,
                j = function(e) {
                    function t(e) {
                        var n;
                        return Object(i.a)(this, t), n = Object(o.a)(this, Object(r.a)(t).call(this, e)), Object(s.a)(Object(c.a)(Object(c.a)(n)), "selectorNode", void 0), Object(s.a)(Object(c.a)(Object(c.a)(n)), "handleCommentChange", function(e) {
                            var t = e.currentTarget;
                            n.props.handleCommentChange(t.value), n.setState({
                                characterCount: t.value.length
                            })
                        }), Object(s.a)(Object(c.a)(Object(c.a)(n)), "handleHasResultsChanged", function(e) {
                            e && n.selectorNode.current && !n.props.isMobile && n.selectorNode.current.scrollIntoView()
                        }), Object(s.a)(Object(c.a)(Object(c.a)(n)), "locationSelectionChanged", function(e) {
                            n.props.handleLocationSelectionChange(e), n.setState({
                                selectedLocations: e
                            })
                        }), Object(s.a)(Object(c.a)(Object(c.a)(n)), "render", function() {
                            return d.createElement("div", {
                                className: f.formWrapper
                            }, d.createElement("div", {
                                className: "ui_label_group ".concat(f.commentsContainer)
                            }, d.createElement("div", {
                                className: f.inputLabelTitle
                            }, Object(u.localize)("link_uploader_commentlabel")), d.createElement("div", {
                                className: f.inputSubLabel
                            }, Object(u.localize)("link_uploader_commentdescription")), Object(k.featureIsEnabled)("social_at_reference_ugc_editor") ? d.createElement(v.ReferenceSelectorController, {
                                name: "comment",
                                onChange: n.handleCommentChange,
                                maxLength: g,
                                className: "ui_textarea ".concat(f.commentInput, " ").concat(n.props.commentError && n.props.commentError.length ? f.commentError : ""),
                                value: n.props.originalFormData ? n.props.originalFormData.comment : "",
                                shouldAutoScroll: n.props.isMobile
                            }) : d.createElement(b.TextArea, {
                                name: "comment",
                                onChange: n.handleCommentChange,
                                maxLength: g,
                                className: "ui_textarea ".concat(f.commentInput, " ").concat(n.props.commentError && n.props.commentError.length ? f.commentError : ""),
                                value: n.props.originalFormData ? n.props.originalFormData.comment : ""
                            }), d.createElement("div", {
                                className: f.characterCountContainer
                            }, n.props.commentError && d.createElement("div", {
                                className: f.error
                            }, n.props.commentError), d.createElement("div", {
                                className: f.characterCount
                            }, 0 === n.state.characterCount ? Object(u.localize)("post_video_500_max_characters") : Object(u.localize)("post_video_character_count", {
                                nCharacterCount: n.state.characterCount
                            })))), d.createElement("div", {
                                className: f.tagsContainer,
                                ref: n.selectorNode
                            }, d.createElement("div", {
                                className: f.inputLabelTitle
                            }, Object(u.localize)("link_uploader_locationlabel")), d.createElement("div", {
                                className: f.inputSubLabel
                            }, Object(u.localize)("link_uploader_locationdescription")), d.createElement("div", {
                                className: f.multiSelectInput
                            }, d.createElement(p.MultiLocationSelector, {
                                selectedLocations: n.state.selectedLocations,
                                selectionChanged: n.locationSelectionChanged,
                                hasResultsChanged: n.handleHasResultsChanged
                            }))))
                        }), n.selectorNode = d.createRef(), n.state = {
                            characterCount: 0,
                            selectedLocations: e.originalFormData ? e.originalFormData.selectedLocations : new Map
                        }, n
                    }
                    return Object(l.a)(t, e), t
                }(d.Component);
            t.a = Object(m.connect)(function(e, t) {
                return Object(a.a)({
                    isMobile: "MOBILE" === e.meta.device.viewportCategory
                }, t)
            })(j)
        },
        "./packages/social/actions/UntagAction.jsx": function(e, t, n) {
            "use strict";
            var a = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                d = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                m = n("./node_modules/react/index.js"),
                u = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                p = n("./packages/common/logging/logging.jsx"),
                b = n.n(p),
                v = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "UntagUserReference"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
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
                                    value: "type"
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
                                    value: "untagCurrentUserReference"
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
                                            value: "id"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "objectType"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        }
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 124
                    }
                };
            v.loc.source = {
                body: "7a2d11450ede"
            };
            var k = v,
                f = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "UpdateSocialReferences"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "idInt"
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
                                    value: "idLong"
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
                                    value: "updatePhoto"
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
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "updateVideo"
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
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "updateRepost"
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
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "updateLinkPost"
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
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "updateTrip"
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
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "updateTripComment"
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "GetUpdatedReferencesPhoto"
                                },
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
                                                value: "updatePhoto"
                                            }
                                        }
                                    }]
                                }]
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "GetUpdatedReferencesVideo"
                                },
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
                                                value: "updateVideo"
                                            }
                                        }
                                    }]
                                }]
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "GetUpdatedReferencesRepost"
                                },
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
                                                value: "updateRepost"
                                            }
                                        }
                                    }]
                                }]
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "GetUpdatedReferencesLinkPost"
                                },
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
                                                value: "updateLinkPost"
                                            }
                                        }
                                    }]
                                }]
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "GetUpdatedReferencesTrip"
                                },
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
                                                value: "updateTrip"
                                            }
                                        }
                                    }]
                                }]
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "GetUpdatedReferencesTripComment"
                                },
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
                                                value: "updateTripComment"
                                            }
                                        }
                                    }]
                                }]
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "socialReferences"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "SocialReferences"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "userReferences"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "userName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "userId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "length"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
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
                            value: "GetUpdatedReferencesPhoto"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Query"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "photos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "photoIds"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "idInt"
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
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "caption"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "socialReferences"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "socialReferences"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "GetUpdatedReferencesVideo"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Query"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "videos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "videoIds"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "idInt"
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
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "caption"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "socialReferences"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "socialReferences"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "GetUpdatedReferencesRepost"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Query"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "reposts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "repostIds"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "idLong"
                                            }
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
                                            value: "repostId"
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
                                            value: "comment"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "socialReferences"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "socialReferences"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "GetUpdatedReferencesLinkPost"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Query"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "linkPosts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "linkPostIds"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "idLong"
                                            }
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
                                            value: "postId"
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
                                            value: "comment"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "socialReferences"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "socialReferences"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "GetUpdatedReferencesTrip"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Query"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "trip"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "tripId"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "idInt"
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
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "description"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "socialReferences"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "socialReferences"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "GetUpdatedReferencesTripComment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Query"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tripItem"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "itemId"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "idLong"
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
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "comments"
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
                                                    value: "body"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "socialReferences"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "socialReferences"
                                                        },
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
                        end: 1761
                    }
                };
            f.loc.source = {
                body: "43fa07df4d1a"
            };
            var g = f;
            n.d(t, "a", function() {
                return _
            });
            var j = {
                    Repost: "repostId",
                    LinkPost: "postId"
                },
                _ = function e(t, n) {
                    return t && n && t.socialReferences && t.socialReferences.userReferences && t.socialReferences.userReferences.find(function(e) {
                        return e.userId === n
                    })
                },
                N = function(e) {
                    function t() {
                        var e, n;
                        Object(i.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                        return n = Object(r.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(o))), Object(d.a)(Object(s.a)(Object(s.a)(n)), "getId", function(e) {
                            return j[e.__typename] ? e[j[e.__typename]] : e.id
                        }), Object(d.a)(Object(s.a)(Object(s.a)(n)), "getType", function(e) {
                            return "TripComment" === e.__typename ? "COMMENT" : e.__typename.toUpperCase()
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            return m.createElement(u.ApolloConsumer, null, function(e) {
                                return t.props.children(function(n) {
                                    var i = {
                                        updatePhoto: "Photo" === n.__typename,
                                        updateVideo: "Video" === n.__typename,
                                        updateRepost: "Repost" === n.__typename,
                                        updateLinkPost: "LinkPost" === n.__typename,
                                        updateTrip: "Trip" === n.__typename,
                                        updateTripComment: "TripComment" === n.__typename
                                    };
                                    i && e.mutate({
                                        mutation: k,
                                        variables: {
                                            id: t.getId(n),
                                            type: t.getType(n)
                                        }
                                    }).then(function() {
                                        return e.query({
                                            query: g,
                                            variables: Object(a.a)({
                                                idInt: t.getId(n),
                                                idLong: t.getId(n)
                                            }, i)
                                        })
                                    }).then(function() {
                                        t.forceUpdate()
                                    }).catch(function(e) {
                                        return b.a.error("Untag User Reference failed. Reason: ".concat(e))
                                    })
                                })
                            })
                        }
                    }]), t
                }(m.Component);
            t.b = N
        },
        "./packages/social/feed/feedFragments/LocationFields.fragment.gql": function(e, t, n) {
            "use strict";
            var a = n("./packages/social/feed/feedFragments/PhotoSizes.fragment.gql"),
                i = {
                    kind: "Document",
                    definitions: [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "LocationFields"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "LocationInformation"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "longOnlyParent"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "placeType"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isGeo"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "parentGeoId"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "reviewSummary"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "count"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rating"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "thumbnail"
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
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "PhotoSizes"
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
                                            value: "parentGeoId"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "socialStatistics"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSaved"
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
                        end: 473
                    }
                };
            i.loc.source = {
                body: "79b9e38d4f4e"
            };
            var o = {};
            i.definitions = i.definitions.concat(function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }(a.a.definitions)), t.a = i
        },
        "./packages/social/feed/feedFragments/PhotoSizes.fragment.gql": function(e, t, n) {
            "use strict";
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PhotoSizes"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PhotoSize"
                        }
                    },
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isHorizontal"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 75
                }
            };
            a.loc.source = {
                body: "d458b47a8b35"
            }, t.a = a
        },
        "./packages/social/member-event/member-event.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                d = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                m = n("./node_modules/react/index.js"),
                u = n("./packages/common/features/features.jsx"),
                p = n("./packages/common/i18n/i18n.jsx"),
                b = n("@ta/styleguide.avatar"),
                v = n("@ta/overlays.modal"),
                k = n("@ta/overlays.managers"),
                f = n("@ta/overlays.toast"),
                g = n("./packages/common/routing/routing.jsx"),
                j = n("./packages/common/classnames/classnames.jsx"),
                _ = n.n(j),
                N = n("./packages/common/logging/logging.jsx"),
                h = n.n(N),
                y = n("@ta/social.follow"),
                S = n.n(y),
                O = n("./packages/social/actions/UntagAction.jsx"),
                E = n("@ta/media.upload"),
                F = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                C = n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                P = n("./node_modules/react-redux/es/index.js"),
                D = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                I = n("@ta/overlays.headers"),
                L = n("./packages/common/state/state.jsx"),
                T = n("@ta/social.link-preview"),
                w = n("@ta/styleguide.button"),
                x = n.n(w),
                R = n("@ta/styleguide.loading"),
                V = n("./packages/public/content-uploader/link-uploader/LinkPostForm.jsx"),
                M = n("./packages/social/feed/feedFragments/LocationFields.fragment.gql"),
                z = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "updateLinkPost"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "locationIds"
                                }
                            },
                            type: {
                                kind: "ListType",
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
                                    value: "postId"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Long"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "comment"
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
                            defaultValue: {
                                kind: "IntValue",
                                value: "0"
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "socialReference"
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
                                    value: "updateLinkPost"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "updateRequestWithTags"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "locationIds"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "locationIds"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "updateRequest"
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
                                                        value: "comment"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "comment"
                                                        }
                                                    }
                                                }, {
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "postId"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "postId"
                                                        }
                                                    }
                                                }]
                                            }
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
                                            value: "postId"
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
                                            value: "publishedDate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "comment"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "tags"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "locations"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "LocationFields"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "orderedLocations"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "scopedLocation"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "locationId"
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
                                                            value: "LocationFields"
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
                                            value: "socialReferences"
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
                                                        value: "socialReference"
                                                    }
                                                }
                                            }]
                                        }],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "userReferences"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "__typename"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "userName"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "userId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "length"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "offset"
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
                        end: 784
                    }
                };
            z.loc.source = {
                body: "c0ae4a10489b"
            };
            var A = {};
            z.definitions = z.definitions.concat(function U(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !A[t] && (A[t] = !0, !0)
                })
            }(M.a.definitions));
            var G = z,
                B = {
                    editorContainer: "public-content-uploader-link-uploader-EditLinkPostModal__editorContainer--jebv5",
                    loaderContainer: "public-content-uploader-link-uploader-EditLinkPostModal__loaderContainer--fnBvY",
                    fullWidth: "public-content-uploader-link-uploader-EditLinkPostModal__fullWidth--17eIu",
                    loaderCenter: "public-content-uploader-link-uploader-EditLinkPostModal__loaderCenter--KGO3x",
                    footer: "public-content-uploader-link-uploader-EditLinkPostModal__footer--3-VxI",
                    uploadError: "public-content-uploader-link-uploader-EditLinkPostModal__uploadError--2KIjg",
                    oopsMessage: "public-content-uploader-link-uploader-EditLinkPostModal__oopsMessage--34nDs"
                },
                q = function e(t) {
                    return {
                        type: "location_id",
                        value: t.locationId,
                        displayValue: t.name
                    }
                },
                H = function e(t, n) {
                    return t.size === n.size && Object(C.a)(t).every(function(e) {
                        return n.has(e)
                    })
                },
                W = function(e) {
                    function t(e) {
                        var n, a, o;
                        Object(i.a)(this, t), o = Object(r.a)(this, Object(l.a)(t).call(this, e)), Object(d.a)(Object(s.a)(Object(s.a)(o)), "apolloClient", void 0), Object(d.a)(Object(s.a)(Object(s.a)(o)), "originalComment", void 0), Object(d.a)(Object(s.a)(Object(s.a)(o)), "originalLocations", void 0), Object(d.a)(Object(s.a)(Object(s.a)(o)), "commentChanged", function(e) {
                            o.setState(function(t) {
                                return {
                                    editFormData: Object(F.a)({}, t.editFormData, {
                                        comment: e
                                    })
                                }
                            })
                        }), Object(d.a)(Object(s.a)(Object(s.a)(o)), "locationSelectionChanged", function(e) {
                            o.setState(function(t) {
                                return {
                                    editFormData: Object(F.a)({}, t.editFormData, {
                                        selectedLocations: e
                                    })
                                }
                            })
                        }), Object(d.a)(Object(s.a)(Object(s.a)(o)), "valuesModifed", function() {
                            if (o.state.editFormData.comment !== o.originalComment) return !0;
                            var e = new Set(o.state.editFormData.selectedLocations.keys());
                            return !H(e, o.originalLocations)
                        }), Object(d.a)(Object(s.a)(Object(s.a)(o)), "validateComment", function(e) {
                            if (0 === e.length) return Object(p.localize)("uploader_error_required_field")
                        }), Object(d.a)(Object(s.a)(Object(s.a)(o)), "requiredFieldsComplete", function() {
                            var e = !1,
                                t = o.validateComment(o.state.editFormData.comment);
                            return t && (e = !0), o.setState({
                                hadCommentError: t
                            }), !e
                        }), Object(d.a)(Object(s.a)(Object(s.a)(o)), "submitClicked", function() {
                            if (o.valuesModifed()) {
                                if (o.requiredFieldsComplete()) {
                                    o.setState({
                                        isSubmitting: !0
                                    });
                                    var e = {
                                        mutation: G,
                                        variables: {
                                            userId: o.props.userId,
                                            comment: o.state.editFormData.comment,
                                            postId: o.props.linkPost.postId,
                                            locationIds: Object(C.a)(o.state.editFormData.selectedLocations.keys()),
                                            socialReference: Object(u.featureIsEnabled)("social_at_referencing_profile_links")
                                        }
                                    };
                                    o.apolloClient.mutate(e).then(function() {
                                        o.props.onSubmit && o.props.onSubmit(), o.setState({
                                            isSubmitting: !1
                                        }), o.props.showGlobalOverlay()
                                    }).catch(function(e) {
                                        h.a.error(e), o.setState({
                                            isSubmitting: !1,
                                            hadSubmitError: !0
                                        })
                                    })
                                }
                            } else o.props.showGlobalOverlay()
                        }), Object(d.a)(Object(s.a)(Object(s.a)(o)), "tryAgainClicked", function() {
                            o.setState({
                                hadSubmitError: !1
                            })
                        }), Object(d.a)(Object(s.a)(Object(s.a)(o)), "render", function() {
                            var e = m.createElement(I.TitleBar, {
                                    displayType: "LEFT_ALIGN_GRAY"
                                }, Object(p.localize)("trips_edit_CTA")),
                                t = Object(F.a)({}, o.props.linkPost.preview, {
                                    url: o.props.linkPost.preview.canonicalUrl,
                                    imgSource: o.props.linkPost.preview.media && o.props.linkPost.preview.media[0] ? o.props.linkPost.preview.media[0].photoSizes : void 0
                                }),
                                n = o.state.isSubmitting ? m.createElement("div", {
                                    className: _()(B.loaderContainer, Object(d.a)({}, B.fullWidth, o.props.isMobile))
                                }, m.createElement("div", {
                                    className: B.loaderCenter
                                }, m.createElement(R.LoadingBubbles, {
                                    color: "dark"
                                }))) : m.createElement(x.a, {
                                    type: "primary",
                                    size: o.props.isMobile ? "fullwidth" : "default",
                                    onClick: o.submitClicked
                                }, Object(p.localize)("trips_save_CTA")),
                                a = o.state.hadSubmitError ? m.createElement("div", {
                                    className: B.uploadError
                                }, m.createElement("div", {
                                    className: B.oopsMessage
                                }, Object(p.localize)("ugc_edit_attempt_failure")), m.createElement(x.a, {
                                    type: "primary",
                                    size: "fullwidth",
                                    onClick: o.tryAgainClicked
                                }, Object(p.localize)("content_upload_fail_try_again"))) : null;
                            return m.createElement(v.Modal, {
                                name: o.props.modalName,
                                header: e
                            }, m.createElement("div", {
                                className: B.editorContainer,
                                style: {
                                    display: o.state.hadSubmitError ? "none" : "block"
                                }
                            }, m.createElement(T.LinkPreview, {
                                linkPreviewState: t
                            }), m.createElement(V.a, {
                                handleLocationSelectionChange: o.locationSelectionChanged,
                                handleCommentChange: o.commentChanged,
                                commentError: o.state.hadCommentError,
                                originalFormData: {
                                    comment: o.state.editFormData.comment,
                                    selectedLocations: o.state.editFormData.selectedLocations
                                }
                            }), m.createElement("div", {
                                className: B.footer
                            }, n), m.createElement(D.ApolloConsumer, null, function(e) {
                                return o.apolloClient = e, null
                            })), a)
                        }), o.originalComment = e.linkPost.comment || "", o.originalLocations = new Set(((null === (n = e.linkPost) || void 0 === n ? void 0 : null === (a = n.tags) || void 0 === a ? void 0 : a.locations) || []).filter(Object).map(function(e) {
                            return e.locationId
                        }));
                        var c = new Map;
                        return e.linkPost.tags.locations && e.linkPost.tags.locations && e.linkPost.tags.locations.forEach(function(e) {
                            c.set("".concat(e.locationId), q(e))
                        }), o.state = {
                            isSubmitting: !1,
                            hadSubmitError: !1,
                            hadCommentError: "",
                            editFormData: {
                                comment: o.originalComment,
                                selectedLocations: c
                            }
                        }, o
                    }
                    return Object(c.a)(t, e), t
                }(m.Component),
                Q = Object(P.connect)(function(e, t) {
                    return Object(F.a)({
                        userId: e.auth.loggedInUserId,
                        isMobile: "MOBILE" === e.meta.device.viewportCategory
                    }, t)
                }, {
                    showGlobalOverlay: L.actions.overlays.showGlobalOverlay
                })(W),
                K = n("@ta/common.text"),
                X = n("@ta/tracking.interactions"),
                Y = n("@ta/social.dates"),
                Z = n("@ta/social.section-overflow"),
                J = n("./packages/social/member/MemberDisplayName.jsx"),
                $ = n("@ta/social.member-common"),
                ee = function e(t) {
                    var n = t.profile,
                        a = n && n.hometown,
                        i = n && n.contributionCounts;
                    return m.createElement("div", {
                        className: "social-member-MemberHeaderStats__event_info--30wFs"
                    }, Object($.canRenderHometown)(n.hometown) && m.createElement("span", {
                        className: "social-member-MemberHeaderStats__hometown_stat_item--231iN"
                    }, m.createElement($.MemberHometown, {
                        hometown: a,
                        size: "small",
                        singleLine: !0
                    })), i ? m.createElement(m.Fragment, null, i.sumAllUgc && i.sumAllUgc > 0 ? m.createElement("span", {
                        className: "social-member-MemberHeaderStats__stat_item--34E1r"
                    }, Object(p.unescaped)(Object(p.localize)("social_n_contributions_plural", {
                        0: "social-member-MemberHeaderStats__bold--3z3qh",
                        1: p.globalize.formatNumber("integer", i.sumAllUgc)
                    }))) : null, i.helpfulVote && i.helpfulVote > 0 ? m.createElement("span", {
                        className: "social-member-MemberHeaderStats__stat_item--34E1r"
                    }, Object(p.unescaped)(Object(p.localize)("hotels_n_helpful_votes_plural", {
                        0: "social-member-MemberHeaderStats__bold--3z3qh",
                        1: p.globalize.formatNumber("integer", i.helpfulVote)
                    }))) : null) : null)
                },
                te = "social-member-event-MemberEventOnObjectBlock__event_info--uf-sm",
                ne = "social-member-event-MemberEventOnObjectBlock__item--2PXOx",
                ae = function e(t) {
                    var n, a, i, o = t.object,
                        r = t.actor,
                        l = t.isEmbedded,
                        c = t.displayDate,
                        s = _()(c ? "ui_header_link" : "ui_link", "social-member-event-MemberEventOnObjectBlock__member--35-jC", {
                            verified: !!r && r.isVerified
                        }),
                        d = {
                            0: s,
                            1: null == r ? void 0 : null === (n = r.route) || void 0 === n ? void 0 : n.url,
                            2: Object(K.EscapeHtml)(Object(J.a)(r)),
                            3: c ? Object(Y.getDisplayDate)(c) : null,
                            4: "Repost" === (null == o ? void 0 : o.__typename) ? null == o ? void 0 : null === (a = o.repostedObject) || void 0 === a ? void 0 : null === (i = a.media) || void 0 === i ? void 0 : i.length : null == o ? void 0 : o.numPhotos
                        },
                        u = r && r.userId,
                        b = o.repostedObject ? o.repostedObject.__typename : o.__typename,
                        v = c && c.length > 0 ? function e(t, n) {
                            switch (t) {
                                case "Review":
                                    return Object(p.localize)("member_event_on_review_with_date", n);
                                case "RoomTip":
                                    return Object(p.localize)("member_event_on_tip_with_date", n);
                                case "Photo":
                                    return Object(p.localize)("member_event_on_photo_with_date", n);
                                case "ApiLocationTopic":
                                    return Object(p.localize)("member_event_on_question_with_date", n)
                            }
                            return ""
                        }(b, d) : function e(t, n, a, i) {
                            if (a.repostedObject) switch (t) {
                                case "Review":
                                    return Object(p.localize)("member_event_reposted_review", n);
                                case "Photo":
                                    return Object(p.localize)("member_event_reposted_photo", n);
                                case "MediaBatch":
                                    return Object(p.localize)("member_event_reposted_photo_v2", n);
                                case "Video":
                                    return Object(p.localize)("member_event_reposted_video", n);
                                case "ForumPost":
                                    return Object(p.localize)("member_event_reposted_forumpost", n);
                                case "LinkPost":
                                    return Object(p.localize)("member_event_reposted_linkpost", n);
                                case "Trip":
                                    return Object(p.localize)("member_event_reposted_Trip", n);
                                case "ApiLocationTopic":
                                    return '<a class="'.concat(n[0], '" href="').concat(n[1], '">').concat(n[2], "</a> asked a question");
                                case "ApiTopicPosting":
                                    return 'Answer from <a class="'.concat(n[0], '" href="').concat(n[1], '">').concat(n[2], "</a>")
                            } else {
                                var o = "Trip" === a.__typename && a.owner && a.owner.id,
                                    r = i && i.userId;
                                switch (t) {
                                    case "Review":
                                        return Object(p.localize)("member_event_on_review", n);
                                    case "RoomTip":
                                        return Object(p.localize)("member_event_on_tip", n);
                                    case "Photo":
                                        return Object(p.localize)("member_event_on_photo", n);
                                    case "MediaBatch":
                                        return Object(p.localize)("feed_batched_photos_header_v2", n);
                                    case "Video":
                                        return Object(p.localize)("member_event_on_video", n);
                                    case "ForumPost":
                                        return a.id === a.parentId ? Object(p.localize)("member_event_on_forumpost_question", n) : Object(p.localize)("member_event_on_forumpost_reply", n);
                                    case "LinkPost":
                                        return Object(p.localize)("member_event_on_linkpost", n);
                                    case "Trip":
                                        return o === r ? Object(p.localize)("member_event_on_Trip", n) : Object(p.localize)("trips_feed_trip_joined_v2", n);
                                    case "ApiLocationTopic":
                                        return Object(p.localize)("member_event_on_location_topic", n);
                                    case "ApiTopicPosting":
                                        return Object(p.localize)("member_event_on_topic_posting", n)
                                }
                            }
                            return ""
                        }(b, d, o, r);
                    return m.createElement(X.InteractionLogger, null, function(e) {
                        var t;
                        return m.createElement("div", {
                            className: "social-member-event-MemberEventOnObjectBlock__event_type--3njyv",
                            onClick: function t(n) {
                                return e(n, "userClick", {
                                    userId: u
                                })
                            }
                        }, l ? m.createElement(g.Link, {
                            className: s,
                            href: null == r ? void 0 : null === (t = r.route) || void 0 === t ? void 0 : t.url
                        }, Object(J.a)(r)) : Object(p.unescaped)(v))
                    })
                },
                ie = function e(t) {
                    var n = t.object,
                        a = t.actor,
                        i = n.publishedDate || n.createdDate;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: a,
                        object: n
                    }), m.createElement("div", {
                        className: te
                    }, m.createElement("span", {
                        className: ne
                    }, m.createElement(X.InteractionLogger, null, function(e) {
                        return m.createElement(g.Link, {
                            href: n.route.url,
                            className: "ui_link",
                            onClick: function t(n) {
                                return e(n, "feedClick")
                            }
                        }, m.createElement(Y.ContentDisplayDate, {
                            dateStr: i
                        }))
                    }))))
                },
                oe = function e(t) {
                    var n = t.object,
                        a = t.actor,
                        i = n.publishedDate || n.createdDate;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: a,
                        object: n,
                        displayDate: i
                    }), a && m.createElement(ee, {
                        profile: a
                    }))
                },
                re = function e(t) {
                    var n = t.object,
                        a = t.actor,
                        i = n.publishedDate;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: a,
                        object: n,
                        displayDate: i
                    }), a && m.createElement(ee, {
                        profile: a
                    }))
                },
                le = function e(t) {
                    var n = t.object,
                        a = t.actor,
                        i = n.publishedDate || n.createdDate || n.uploadDate || n.created;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: a,
                        object: n,
                        isEmbedded: !0
                    }), i && m.createElement("div", {
                        className: te
                    }, m.createElement("span", {
                        className: ne
                    }, m.createElement(X.InteractionLogger, null, function(e) {
                        return m.createElement(g.Link, {
                            href: n.route.url,
                            className: "ui_link",
                            onClick: function t(n) {
                                return e(n, "feedClick")
                            }
                        }, m.createElement(Y.ContentDisplayDate, {
                            dateStr: i
                        }))
                    }))))
                },
                ce = function e(t) {
                    var n = t.object,
                        a = t.actor,
                        i = n.publishedDate || n.uploadDate;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: a,
                        object: n
                    }), m.createElement("div", {
                        className: te
                    }, m.createElement("span", {
                        className: ne
                    }, m.createElement(X.InteractionLogger, null, function(e) {
                        return m.createElement(v.DeprecatedModalLink, {
                            name: "Photo_".concat(n.id),
                            href: null,
                            username: n.userProfile ? n.userProfile.username : "",
                            className: "ui_link",
                            key: "Photo_".concat(n.id),
                            onClick: function t(n) {
                                return e(n, "feedClick")
                            }
                        }, m.createElement(Y.ContentDisplayDate, {
                            dateStr: i
                        }))
                    }))))
                },
                se = function e(t) {
                    var n = t.object,
                        a = t.actor,
                        i = n.publishedDate || n.uploadDate;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: a,
                        object: n,
                        displayDate: i
                    }), a && m.createElement(ee, {
                        profile: a
                    }))
                },
                de = function e(t) {
                    var n = t.object,
                        a = t.actor,
                        i = t.isEmbedded,
                        o = n.createdDate;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: a,
                        object: n,
                        isEmbedded: i
                    }), m.createElement("div", {
                        className: te
                    }, m.createElement("span", {
                        className: ne
                    }, m.createElement(Y.ContentDisplayDate, {
                        dateStr: o
                    }))))
                },
                me = function e(t) {
                    var n = t.objectProps,
                        a = n.object,
                        i = n.actor,
                        o = a.publishedDate || a.uploadDate;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: i,
                        object: a
                    }), m.createElement("div", {
                        className: te
                    }, m.createElement("span", {
                        className: ne
                    }, m.createElement(X.InteractionLogger, null, function(e) {
                        return m.createElement(g.Link, {
                            className: "ui_link",
                            onClick: function t(n) {
                                return e(n, "feedClick")
                            }
                        }, m.createElement(Y.ContentDisplayDate, {
                            dateStr: o
                        }))
                    }))))
                },
                ue = function e(t) {
                    var n = t.object,
                        a = t.actor,
                        i = n.publishedDate;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: a,
                        object: n
                    }), m.createElement("div", {
                        className: te
                    }, m.createElement("span", {
                        className: ne
                    }, m.createElement(X.InteractionLogger, null, function(e) {
                        return m.createElement(g.Link, {
                            href: n.route.url,
                            className: "ui_link",
                            onClick: function t(n) {
                                return e(n, "feedClick")
                            }
                        }, m.createElement(Y.ContentDisplayDate, {
                            dateStr: i
                        }))
                    }))))
                },
                pe = function e(t) {
                    var n = t.objectProps,
                        a = n.object,
                        i = n.actor,
                        o = a.publishedDate;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: i,
                        object: a
                    }), m.createElement("div", {
                        className: te
                    }, m.createElement("span", {
                        className: ne
                    }, m.createElement(Y.ContentDisplayDate, {
                        dateStr: o
                    }))))
                },
                be = function e(t) {
                    var n = t.object,
                        a = t.actor,
                        i = n.created;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: a,
                        object: n
                    }), m.createElement("div", {
                        className: te
                    }, m.createElement("span", {
                        className: ne
                    }, m.createElement(Y.ContentDisplayDate, {
                        dateStr: i
                    }))))
                },
                ve = function e(t) {
                    var n = t.objectProps,
                        a = n.object,
                        i = n.actor,
                        o = a.created;
                    if (a.owner && i && i.userId === a.owner.id) o = a.firstPublished;
                    else {
                        var r = i && a.collaborators && a.collaborators.find(function(e) {
                            return e.user && e.user.id === i.userId
                        });
                        r && (o = r.publicallyJoined)
                    }
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: i,
                        object: a,
                        isEmbedded: !(i && i.userId && a.owner && a.owner.id)
                    }), m.createElement("div", {
                        className: te
                    }, m.createElement("span", {
                        className: ne
                    }, m.createElement(X.InteractionLogger, null, function(e) {
                        return m.createElement(g.Link, {
                            href: a.route.url,
                            className: "ui_link",
                            onClick: function t(n) {
                                return e(n, "feedClick")
                            }
                        }, m.createElement(Y.ContentDisplayDate, {
                            dateStr: o
                        }))
                    }))))
                },
                ke = function e(t) {
                    var n = t.object,
                        a = t.actor,
                        i = n.timePublished || n.timeSubmitted;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: a,
                        object: n,
                        displayDate: new Date(i).toISOString()
                    }), a && m.createElement(ee, {
                        profile: a
                    }))
                },
                fe = function e(t) {
                    var n = t.objectProps,
                        a = n.object,
                        i = n.actor,
                        o = t.overflowMenuProps,
                        r = a.timePublished || a.timeSubmitted;
                    return m.createElement(m.Fragment, null, m.createElement(ae, {
                        actor: i,
                        object: a
                    }), r ? m.createElement("div", {
                        className: te
                    }, m.createElement("span", {
                        className: ne
                    }, m.createElement(Y.ContentDisplayDate, {
                        dateStr: new Date(r).toISOString()
                    }), " | ", m.createElement(je, o))) : null)
                },
                ge = function e(t) {
                    return t.id || t.postId || t.repostId
                },
                je = function e(t) {
                    var n = t.parentProps,
                        a = t.editUgcModalName,
                        i = t.overrideItems;
                    return m.createElement(k.Opener, {
                        name: a
                    }, function(e) {
                        return m.createElement(Z.SectionOverflowMenu, {
                            sectionObject: n.object,
                            sectionObjectForType: n.overflowMenuObjectForType,
                            sectionActor: n.actor,
                            onEdit: e,
                            overrideItems: i,
                            deleteObject: n.deleteObject,
                            untagObject: n.untagObject
                        })
                    })
                },
                _e = function(e) {
                    function t(e) {
                        var n;
                        return Object(i.a)(this, t), n = Object(r.a)(this, Object(l.a)(t).call(this, e)), Object(d.a)(Object(s.a)(Object(s.a)(n)), "editUgcModalName", "ugcEditModal_".concat(n.props.object.__typename, "_").concat(ge(n.props.object), ":").concat(Math.random())), n.state = {
                            isInitiallyFollowing: !(e.object && e.actor && !e.actor.isMe) || e.actor.isFollowing
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t, n = this,
                                i = this.props.object.__typename,
                                o = !0,
                                r = "default",
                                l = !0;
                            if (this.props.isEmbedded) t = m.createElement(le, {
                                object: this.props.object,
                                actor: this.props.actor
                            });
                            else switch (this.props.objectEventType) {
                                case "onTopicPosting":
                                    r = "xtra-small", o = !1, l = !1
                            }
                            var c = o && this.props.actor && !this.props.actor.isMe && !this.state.isInitiallyFollowing,
                                s = c ? {
                                    FOLLOW: !1,
                                    UNTAG: !!Object(O.a)(this.props.object, this.props.loggedInUserId || void 0)
                                } : {
                                    UNTAG: !!Object(O.a)(this.props.object, this.props.loggedInUserId || void 0)
                                },
                                d = null;
                            "Photo" !== i && "Video" !== i || (d = m.createElement(f.Toaster, null, function(e) {
                                return m.createElement(E.EditMediaModal, {
                                    modalName: n.editUgcModalName,
                                    mediaObject: n.props.object,
                                    onSubmit: function t() {
                                        e({
                                            node: Object(p.localize)("ugc_post_updated")
                                        })
                                    }
                                })
                            })), "LinkPost" === i && (d = m.createElement(f.Toaster, null, function(e) {
                                return m.createElement(Q, {
                                    modalName: n.editUgcModalName,
                                    linkPost: n.props.object,
                                    onSubmit: function t() {
                                        e({
                                            node: Object(p.localize)("ugc_post_updated")
                                        })
                                    }
                                })
                            }));
                            var v = {
                                parentProps: this.props,
                                editComponent: d,
                                editUgcModalName: this.editUgcModalName,
                                overrideItems: s
                            };
                            if (this.props.isEmbedded) t = m.createElement(le, {
                                object: this.props.object,
                                actor: this.props.actor
                            });
                            else switch (this.props.objectEventType) {
                                case "onReview":
                                    t = m.createElement(ie, {
                                        object: this.props.object,
                                        actor: this.props.actor
                                    });
                                    break;
                                case "onFullReview":
                                    t = m.createElement(oe, {
                                        object: this.props.object,
                                        actor: this.props.actor
                                    });
                                    break;
                                case "onRoomTip":
                                    t = m.createElement(re, {
                                        object: this.props.object,
                                        actor: this.props.actor
                                    });
                                    break;
                                case "onPhoto":
                                    t = m.createElement(ce, {
                                        object: this.props.object,
                                        actor: this.props.actor
                                    });
                                    break;
                                case "onFullPhoto":
                                    t = m.createElement(se, {
                                        object: this.props.object,
                                        actor: this.props.actor
                                    });
                                    break;
                                case "onMediaBatch":
                                    t = m.createElement(de, {
                                        object: this.props.object,
                                        actor: this.props.actor,
                                        isEmbedded: this.props.isEmbedded
                                    });
                                    break;
                                case "onVideo":
                                    t = m.createElement(g.RouteConsumer, null, function(e) {
                                        var t = e.route;
                                        return m.createElement(me, {
                                            objectProps: n.props,
                                            geoScope: parseInt(t.geo, 10)
                                        })
                                    });
                                    break;
                                case "onForumPost":
                                    t = m.createElement(ue, {
                                        object: this.props.object,
                                        actor: this.props.actor
                                    });
                                    break;
                                case "onLinkPost":
                                    t = m.createElement(g.RouteConsumer, null, function(e) {
                                        var t = e.route;
                                        return m.createElement(pe, {
                                            objectProps: n.props,
                                            geoScope: parseInt(t.geo, 10)
                                        })
                                    });
                                    break;
                                case "onRepost":
                                    t = m.createElement(be, {
                                        object: this.props.object,
                                        actor: this.props.actor
                                    });
                                    break;
                                case "onTrip":
                                    t = m.createElement(g.RouteConsumer, null, function(e) {
                                        var t = e.route;
                                        return m.createElement(ve, {
                                            objectProps: n.props,
                                            geoScope: parseInt(t.geo, 10)
                                        })
                                    });
                                    break;
                                case "onLocationTopic":
                                    t = m.createElement(ke, {
                                        object: this.props.object,
                                        actor: this.props.actor
                                    });
                                    break;
                                case "onTopicPosting":
                                    t = m.createElement(fe, {
                                        objectProps: this.props,
                                        overflowMenuProps: v
                                    });
                                    break;
                                default:
                                    h.a.error("objectEventRender Error - object is required.")
                            }
                            var k = "icon+text",
                                j = "social-member-event-MemberEventOnObjectBlock__member_actions--2uzIM";
                            return Object(u.featureIsEnabled)("ugc_cards_follow_button") && "DESKTOP" === this.props.viewportCategory && (k = "button+icon", j = "".concat("social-member-event-MemberEventOnObjectBlock__member_actions--2uzIM", " ").concat("social-member-event-MemberEventOnObjectBlock__with_follow_button---5Bs9")), m.createElement("div", {
                                className: "social-member-event-MemberEventOnObjectBlock__member_event_block--1Kusx"
                            }, !this.props.isEmbedded && this.props.renderAvatar && m.createElement(X.InteractionLogger, null, function(e) {
                                var t, a, i;
                                return m.createElement(b.Avatar, {
                                    photo: null === (t = n.props.actor) || void 0 === t ? void 0 : t.avatar,
                                    display: "inline",
                                    target: "_self",
                                    href: null === (a = n.props.actor) || void 0 === a ? void 0 : null === (i = a.route) || void 0 === i ? void 0 : i.url,
                                    withBorder: !0,
                                    onClick: function t(a) {
                                        var i;
                                        return e(a, "userClick", {
                                            userId: null === (i = n.props.actor) || void 0 === i ? void 0 : i.userId
                                        })
                                    },
                                    size: r
                                })
                            }), m.createElement("div", {
                                className: "social-member-event-MemberEventOnObjectBlock__event_wrap--1YkeG"
                            }, this.props.renderMemberActions ? m.createElement("div", {
                                className: j
                            }, c && m.createElement(S.a, {
                                profile: this.props.actor,
                                size: "small",
                                displayType: k
                            }), !this.props.isEmbedded && m.createElement(m.Fragment, null, d, l && m.createElement(je, Object(a.a)({}, v, {
                                overrideItems: s
                            })))) : m.createElement("div", {
                                className: "social-member-event-MemberEventOnObjectBlock__member_actions--2uzIM"
                            }), t))
                        }
                    }]), t
                }(m.Component);
            Object(d.a)(_e, "defaultProps", {
                deleteObject: null,
                isEmbedded: !1,
                displayDate: "",
                viewportCategory: "",
                renderMemberActions: !0,
                renderAvatar: !0
            });
            var Ne = {
                isEmbedded: !1,
                displayDate: ""
            };
            ae.defaultProps = Ne, ie.defaultProps = Ne, oe.defaultProps = Ne, re.defaultProps = Ne, ce.defaultProps = Ne, se.defaultProps = Ne, de.defaultProps = Ne, me.defaultProps = Ne, ue.defaultProps = Ne, pe.defaultProps = Ne, be.defaultProps = Ne, le.defaultProps = Ne, ve.defaultProps = Ne, ke.defaultProps = Ne, fe.defaultProps = Ne;
            var he = _e;
            n.d(t, "MemberEventOnObjectBlock", function() {
                return he
            }), t.default = {}
        },
        "./packages/social/member/MemberDisplayName.jsx": function(e, t, n) {
            "use strict";
            var a = n("./packages/common/i18n/i18n.jsx");
            t.a = function(e) {
                return e && e.displayName ? e.displayName : Object(a.localize)("native_login_user_review_anonymous")
            }
        },
        "@ta/common.text": function(t, n) {
            t.exports = e
        },
        "@ta/common.typeahead": function(e, n) {
            e.exports = t
        },
        "@ta/input.text-area": function(e, t) {
            e.exports = n
        },
        "@ta/media.upload": function(e, t) {
            e.exports = a
        },
        "@ta/overlays.headers": function(e, t) {
            e.exports = i
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = o
        },
        "@ta/overlays.modal": function(e, t) {
            e.exports = r
        },
        "@ta/overlays.toast": function(e, t) {
            e.exports = l
        },
        "@ta/social.dates": function(e, t) {
            e.exports = c
        },
        "@ta/social.follow": function(e, t) {
            e.exports = s
        },
        "@ta/social.link-preview": function(e, t) {
            e.exports = d
        },
        "@ta/social.member-common": function(e, t) {
            e.exports = m
        },
        "@ta/social.section-overflow": function(e, t) {
            e.exports = u
        },
        "@ta/social.social-reference": function(e, t) {
            e.exports = p
        },
        "@ta/styleguide.avatar": function(e, t) {
            e.exports = b
        },
        "@ta/styleguide.button": function(e, t) {
            e.exports = v
        },
        "@ta/styleguide.loading": function(e, t) {
            e.exports = k
        },
        "@ta/tracking.interactions": function(e, t) {
            e.exports = f
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = g
        }
    })
});
//# sourceMappingURL=social.member-event.44a491bef6.js.map