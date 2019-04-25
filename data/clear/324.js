define("@ta/social.block-button", ["@ta/overlays.managers", "@ta/overlays.popover", "@ta/overlays.toast", "@ta/social.blocks", "@ta/social.button-group", "@ta/social.follow", "@ta/social.login-gate", "@ta/social.profile", "@ta/styleguide.button", "@ta/styleguide.icon", "@ta/tracking.interactions", "@ta/common.global"], function(e, t, n, i, a, o, r, l, s, c, d, u) {
    return function(e) {
        var t = {};

        function n(i) {
            if (t[i]) return t[i].exports;
            var a = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
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
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var a in e) n.d(i, a, function(t) {
                    return e[t]
                }.bind(null, a));
            return i
        }, n.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/social/block-button/block-button.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function i(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function a(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, n) {
            "use strict";

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function i(e) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(i.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), a.forEach(function(t) {
                        Object(i.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (null == e) return {};
                var n, i, a = function o(e, t) {
                    if (null == e) return {};
                    var n, i, a = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function o(e, t) {
                return !t || "object" !== Object(i.a)(t) && "function" != typeof t ? Object(a.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function i(e, t) {
                return (i = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function e(t) {
                    return i(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : i(t)
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
        "./packages/common/global/global.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/global/global.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/public/share-cta/SharePopover.jsx": function(e, t, n) {
            "use strict";
            var i = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                a = n("./node_modules/react/index.js"),
                o = n("./node_modules/react-redux/es/index.js"),
                r = n("./packages/common/features/features.jsx"),
                l = n("./packages/common/classnames/classnames.jsx"),
                s = n.n(l),
                c = n("@ta/overlays.popover"),
                d = n.n(c),
                u = n("./packages/public/share-cta/ShareTracker.jsx"),
                m = n("./packages/common/i18n/i18n.jsx"),
                p = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                k = n("@ta/styleguide.icon"),
                b = function e(t) {
                    var n, i, o, r = t.iconName,
                        l = t.localizedText,
                        c = t.onClickFunction,
                        d = t.imgCdnUrl,
                        u = t.size;
                    return a.createElement("li", {
                        onClick: c,
                        className: s()("ui_link", "public-share-cta-ListItem__listItem--3ISth", (n = {}, Object(p.a)(n, "public-share-cta-ListItem__small--37OPx", "small" === u), Object(p.a)(n, "public-share-cta-ListItem__large--LaLAA", "large" === u), n))
                    }, r.startsWith("/") ? a.createElement("img", {
                        src: "".concat(d).concat(r),
                        className: s()("public-share-cta-ListItem__img--xCvMj", (i = {}, Object(p.a)(i, "public-share-cta-ListItem__small--37OPx", "small" === u), Object(p.a)(i, "public-share-cta-ListItem__large--LaLAA", "large" === u), i))
                    }) : a.createElement(k.Icon, {
                        name: r,
                        className: s()("public-share-cta-ListItem__icon--YWVUF", (o = {}, Object(p.a)(o, "public-share-cta-ListItem__small--37OPx", "small" === u), Object(p.a)(o, "public-share-cta-ListItem__large--LaLAA", "large" === u), o))
                    }), a.createElement("span", null, l))
                };
            b.defaultProps = {
                onClickFunction: function e() {
                    return !1
                }
            };
            var f = Object(o.connect)(function(e) {
                    return {
                        imgCdnUrl: e.meta.imageCdnUrl
                    }
                })(b),
                v = function e(t) {
                    var n, i = t.url,
                        o = t.itemType,
                        r = t.size;
                    return n = "LinkPost" === o ? Object(m.localize)("share_sms_link") : "ReadTrip" === o ? Object(m.localize)("trips_share_email_subject") : "WriteTrip" === o ? Object(m.localize)("trips_collaborate_invite_email_subject") : Object(m.localize)("link_share_sms_checkthisout"), a.createElement(f, {
                        iconName: "text-message-fill",
                        localizedText: Object(m.localize)("link_share_option_sms"),
                        size: r,
                        onClickFunction: function e() {
                            return function e(t, n) {
                                var i = "".concat(n, " ").concat(t);
                                i.length > 140 && (i = t), window.location.href = "sms:?&body=".concat(encodeURIComponent(i))
                            }(i, n)
                        }
                    })
                },
                y = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                g = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                _ = n("./packages/trips/trip-util/trip-util.jsx"),
                S = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "PoiDetails"
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
                                            value: "name"
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
                        end: 95
                    }
                };
            S.loc.source = {
                body: "cd864acb4d54"
            };
            var j = S,
                N = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ReviewDetails"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "reviewId"
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
                                    value: "reviews"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "reviewIds"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "reviewId"
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
                                            value: "title"
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
                        end: 91
                    }
                };
            N.loc.source = {
                body: "ede4e30b387b"
            };
            var h = N,
                O = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "PhotoDetails"
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
                                                value: "id"
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
                                            value: "caption"
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
                        end: 78
                    }
                };
            O.loc.source = {
                body: "9a91e6db74b1"
            };
            var I = O,
                T = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "VideoDetails"
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
                                                value: "id"
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
                                            value: "caption"
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
                        end: 78
                    }
                };
            T.loc.source = {
                body: "2d20581296d0"
            };
            var x = T,
                E = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "TripDetails"
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
                                    value: "trips"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "tripIds"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "id"
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
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "owner"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isMe"
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
                        end: 109
                    }
                };
            E.loc.source = {
                body: "a926d0b00948"
            };
            var F = E,
                P = ["Restaurant_Review", "Attraction_Review", "MobileAttraction_Review", "AttractionProductDetail", "MobileAttractionProductDetail", "Hotel_Review", "MobileHotel_Review"],
                w = function e(t) {
                    var n = t.url,
                        i = t.subject,
                        o = t.firstSentence,
                        r = t.textBeforeLink,
                        l = t.textAfterLink,
                        s = t.size;
                    return a.createElement(f, {
                        iconName: "email-fill",
                        localizedText: Object(m.localize)("link_share_option_email"),
                        size: s,
                        onClickFunction: function e() {
                            return function e(t, n, i, a, o) {
                                var r = encodeURIComponent(t),
                                    l = encodeURIComponent(a),
                                    s = encodeURIComponent(o),
                                    c = encodeURIComponent(n || Object(m.localize)("share_email_subject")),
                                    d = i || Object(m.localize)("link_share_sms_checkthisout"),
                                    u = "".concat(d, "%0D%0A%0D%0A").concat(l ? "".concat(l, "%0D%0A") : "").concat(r, "%0D%0A").concat(s ? "".concat(s, "%0D%0A") : "", "%0D%0A").concat(Object(m.localize)("ib_share_booking_download_app"), "%0D%0A").concat(Object(m.localize)("app_download_url"));
                                window.location.href = "mailto:".concat("", "?subject=").concat(c, "&body=").concat(u)
                            }(n, i, o, r, l)
                        }
                    })
                };
            w.defaultProps = {
                firstSentence: "",
                subject: "",
                textBeforeLink: "",
                textAfterLink: ""
            };
            var C = function e(t) {
                    if (P.indexOf(t.itemType) > -1) return a.createElement(g.Query, {
                        query: j,
                        variables: {
                            locationId: t.itemId
                        }
                    }, function(e) {
                        var n = e.loading,
                            i = e.data;
                        if (n) return a.createElement(w, t);
                        var o = i.locations[0] && i.locations[0].name || "";
                        return a.createElement(w, Object(y.a)({}, t, {
                            subject: Object(m.localize)("link_share_email_subject", {
                                0: o
                            }),
                            firstSentence: Object(m.localize)("mobile_here_is_a_place_i_found_8e0"),
                            textBeforeLink: o
                        }))
                    });
                    if ("Review" === t.itemType) return a.createElement(g.Query, {
                        query: h,
                        variables: {
                            reviewId: t.itemId
                        }
                    }, function(e) {
                        var n = e.loading,
                            i = e.data;
                        return n ? a.createElement(w, t) : a.createElement(w, Object(y.a)({}, t, {
                            firstSentence: Object(m.localize)("share_email_reviews"),
                            textBeforeLink: i.reviews[0] && i.reviews[0].title || ""
                        }))
                    });
                    if ("Photo" === t.itemType) return a.createElement(g.Query, {
                        query: I,
                        variables: {
                            id: t.itemId
                        }
                    }, function(e) {
                        var n = e.loading,
                            i = e.data;
                        return n ? a.createElement(w, t) : a.createElement(w, Object(y.a)({}, t, {
                            firstSentence: Object(m.localize)("share_email_photos"),
                            textBeforeLink: i.photos[0] && i.photos[0].caption || ""
                        }))
                    });
                    if ("Video" === t.itemType) return a.createElement(g.Query, {
                        query: x,
                        variables: {
                            id: t.itemId
                        }
                    }, function(e) {
                        var n = e.loading,
                            i = e.data;
                        return n ? a.createElement(w, t) : a.createElement(w, Object(y.a)({}, t, {
                            firstSentence: Object(m.localize)("share_email_videos"),
                            textBeforeLink: i.videos[0] && i.videos[0].caption || ""
                        }))
                    });
                    if ("LinkPost" === t.itemType) return a.createElement(w, Object(y.a)({}, t, {
                        subject: Object(m.localize)("share_email_link_subject"),
                        firstSentence: Object(m.localize)("share_email_link"),
                        textAfterLink: Object(m.localize)("share_email_link_attribution")
                    }));
                    if ("ForumPost" === t.itemType) return a.createElement(w, Object(y.a)({}, t, {
                        firstSentence: Object(m.localize)("share_email_forumtopic")
                    }));
                    if ("ForumResponse" === t.itemType) return a.createElement(w, Object(y.a)({}, t, {
                        firstSentence: Object(m.localize)("share_email_forumreply")
                    }));
                    if ("WriteTrip" === t.itemType || "ReadTrip" === t.itemType) {
                        var n = "WriteTrip" === t.itemType;
                        return a.createElement(g.Query, {
                            query: F,
                            variables: {
                                id: t.itemId
                            }
                        }, function(e) {
                            var i = e.loading,
                                o = e.data,
                                r = t;
                            if (!i && o) {
                                var l = o.trips && o.trips.find(function(e) {
                                        return e.id === t.itemId
                                    }),
                                    s = {
                                        tripName: l && l.title || ""
                                    },
                                    c = Object(_.l)(l);
                                r = Object.assign({}, t, {
                                    firstSentence: Object(m.localize)("trips_share_email_hey"),
                                    subject: Object(m.localize)("trips_share_email_subject"),
                                    textBeforeLink: Object(m.localize)("trips_share_email_body_v2", s)
                                }), n ? (r.subject = Object(m.localize)("trips_collaborate_invite_email_subject"), r.textBeforeLink = c ? Object(m.localize)("trips_collaborate_invite_email_body_v2", s) : Object(m.localize)("trips_collaborate_invite_email_body_collaborator_version", s)) : c || (r.subject = Object(m.localize)("trips_share_email_subject"), r.textBeforeLink = Object(m.localize)("trips_email_share_collaborator_version", s))
                            }
                            return a.createElement(w, r)
                        })
                    }
                    return a.createElement(w, t)
                },
                D = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                L = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                z = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                V = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                A = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                q = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                B = n("@ta/overlays.managers"),
                R = {
                    copy: function e(t) {
                        var n, i = !1,
                            a = document.body,
                            o = document.getSelection();
                        try {
                            if (a && o) {
                                var r = document.createRange();
                                (n = document.createElement("span")).textContent = t, a.appendChild(n), r.selectNode(n), o.removeAllRanges(), o.addRange(r), i = document.execCommand("copy")
                            }
                        } finally {
                            o && o.removeAllRanges(), n && a && a.removeChild(n)
                        }
                        return i
                    }
                },
                M = function(e) {
                    function t() {
                        var e, n;
                        Object(D.a)(this, t);
                        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                        return n = Object(z.a)(this, (e = Object(V.a)(t)).call.apply(e, [this].concat(a))), Object(p.a)(Object(q.a)(Object(q.a)(n)), "state", {
                            copied: !1
                        }), Object(p.a)(Object(q.a)(Object(q.a)(n)), "copyAndClose", function(e, t) {
                            var i = R.copy(e);
                            return i && (n.setState({
                                copied: !0
                            }), setTimeout(function() {
                                return t()
                            }, 3e3)), i
                        }), n
                    }
                    return Object(A.a)(t, e), Object(L.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            return a.createElement(B.Closer, null, function(e) {
                                return a.createElement(f, {
                                    iconName: "link",
                                    size: t.props.size,
                                    localizedText: t.state.copied ? Object(m.localize)("link_share_link_copied") : Object(m.localize)("link_share_option_clipboard"),
                                    onClickFunction: t.state.copied ? void 0 : function() {
                                        return t.copyAndClose(t.props.url, e)
                                    }
                                })
                            })
                        }
                    }]), t
                }(a.Component);
            n.d(t, "b", function() {
                return Q
            }), n.d(t, "a", function() {
                return U
            });
            var U = Object(o.connect)(function(e, t) {
                    return Object(i.a)({}, t, {
                        url: t.url.startsWith("/") ? e.meta.baseUrl + t.url : t.url,
                        viewportCategory: e.meta.device.viewportCategory
                    })
                })(function e(t) {
                    var n = t.url,
                        i = t.itemType,
                        o = t.itemId,
                        l = t.viewportCategory,
                        c = t.headerComponent;
                    return a.createElement("div", {
                        className: s()("public-share-cta-SharePopover__container--2A2cD", Object(r.featureIsEnabled)("hr_dark_green_icons") ? "public-share-cta-SharePopover__dark_icons--3q5Bk" : "")
                    }, c, "MOBILE" === l && a.createElement(u.a, {
                        action: "share_select",
                        itemType: i,
                        itemId: o,
                        url: n,
                        type: "sms"
                    }, function(e) {
                        return a.createElement(v, {
                            url: e,
                            itemType: i,
                            size: "small"
                        })
                    }), a.createElement(u.a, {
                        url: n,
                        itemType: i,
                        itemId: o,
                        action: "share_select",
                        type: "email"
                    }, function(e) {
                        return a.createElement(C, {
                            url: e,
                            itemType: i,
                            itemId: Number(o),
                            size: "small"
                        })
                    }), a.createElement(u.a, {
                        action: "share_select",
                        itemType: i,
                        itemId: o,
                        url: n,
                        type: "clipboard"
                    }, function(e) {
                        return a.createElement(M, {
                            url: e,
                            size: "small"
                        })
                    }))
                }),
                Q = function e(t) {
                    var n = t.fixed,
                        i = t.url,
                        o = t.itemType,
                        r = t.itemId,
                        l = t.shiftX,
                        s = t.shiftY,
                        c = t.children,
                        u = t.headerComponent,
                        m = t.alignEdge;
                    return a.createElement(d.a, {
                        local: !0,
                        closeButton: !1,
                        fixed: n,
                        below: !0,
                        alignEdge: m,
                        shiftX: l,
                        shiftY: s,
                        shiftArrow: l,
                        arrowType: "small",
                        contents: function e() {
                            return a.createElement(U, {
                                url: i,
                                itemType: o,
                                itemId: r,
                                headerComponent: u
                            })
                        }
                    }, c)
                };
            Q.defaultProps = {
                fixed: !1,
                shiftX: 0,
                shiftY: 0,
                headerComponent: null,
                alignEdge: "right"
            }
        },
        "./packages/public/share-cta/ShareTracker.jsx": function(e, t, n) {
            "use strict";
            var i = n("./node_modules/react/index.js"),
                a = n("./node_modules/react-redux/es/index.js"),
                o = n("./packages/common/tracking/tracking.jsx"),
                r = {
                    sms: 19907,
                    email: 55593,
                    clipboard: 19905
                },
                l = function e(t) {
                    var n = t.url,
                        a = t.itemType,
                        l = t.itemId,
                        s = t.action,
                        c = t.type,
                        d = t.children,
                        u = "".concat(a, "|").concat(l, "|").concat(n);
                    return i.createElement(o.ClickTracker, {
                        useSpan: !0,
                        module: "ShareCta",
                        action: s,
                        context: u,
                        once: !1,
                        value: c ? r[c] : void 0
                    }, d(c ? function e(t) {
                        if ("LinkPost" === a) return n;
                        var i = -1 !== n.indexOf("?"),
                            o = -1 !== n.indexOf("#"),
                            r = "".concat(i ? "&" : "?", "m=").concat(t);
                        return o ? n.replace("#", "".concat(r, "#")) : "".concat(n).concat(r)
                    }(r[c]) : n))
                };
            l.defaultProps = {
                type: null
            }, t.a = Object(a.connect)(function(e, t) {
                return {
                    url: t.url.startsWith("/") ? e.meta.baseUrl + t.url : t.url
                }
            })(l)
        },
        "./packages/social/block-button/block-button.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                a = n("./node_modules/react/index.js"),
                o = n("./node_modules/react-redux/es/index.js"),
                r = n("./packages/common/features/features.jsx"),
                l = n("./packages/common/i18n/i18n.jsx"),
                s = n("./packages/public/share-cta/SharePopover.jsx"),
                c = n("@ta/social.blocks"),
                d = n("@ta/social.button-group"),
                u = n.n(d),
                m = n("@ta/social.follow"),
                p = n.n(m),
                k = n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
                b = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                f = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                v = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                y = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                g = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                _ = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                S = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                j = n("@ta/styleguide.icon"),
                N = n("@ta/styleguide.button"),
                h = n.n(N),
                O = n("@ta/social.login-gate"),
                I = n("@ta/tracking.interactions"),
                T = n("@ta/overlays.toast"),
                x = function(e) {
                    function t() {
                        var e, n;
                        Object(b.a)(this, t);
                        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                        return n = Object(v.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(a))), Object(S.a)(Object(_.a)(Object(_.a)(n)), "elt", void 0), n
                    }
                    return Object(g.a)(t, e), Object(f.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t, n = this,
                                o = this.props,
                                r = o.displayType,
                                s = o.profile,
                                d = s.userId,
                                u = s.blockStatus,
                                m = Object(k.a)(o, ["displayType", "profile"]);
                            return t = "icon" === r ? a.createElement(h.a, Object(i.a)({
                                type: "secondary"
                            }, m), a.createElement("span", {
                                className: "social-message-MessageBlock__icon--323wq"
                            }, a.createElement(j.Icon, {
                                name: "comments-fill"
                            }))) : a.createElement(h.a, Object(i.a)({
                                type: "secondary"
                            }, m), "button+icon" === r && a.createElement("span", {
                                className: "social-message-MessageBlock__icon--323wq"
                            }, a.createElement(j.Icon, {
                                name: "comments-fill"
                            })), a.createElement("span", {
                                className: "button+icon" === r ? "social-message-MessageBlock__cta--HlA7K" : null
                            }, Object(l.localize)("social_Message"), " ")), a.createElement(I.InteractionLogger, null, function(e) {
                                return a.createElement(T.Toaster, null, function(i) {
                                    return a.createElement(O.SocialLoginGate, {
                                        pid: 40475
                                    }, function(o) {
                                        return a.createElement("a", {
                                            "data-load-js": "send-message-redesign",
                                            "data-load-css": "send_message_redesign",
                                            "data-load-init": "messaging/SendMessage",
                                            "data-overlay": "send-message-modal",
                                            "data-to-id": d,
                                            "data-button-location": "member_profile",
                                            "data-ajaxnocache": "true",
                                            ref: function e(t) {
                                                n.elt = t
                                            },
                                            onClick: function t(r) {
                                                e(r, "messageClick"), o().then(function() {
                                                    u && (u.isBlocking || u.isBlockingYou) ? i({
                                                        node: a.createElement(c.NoPermissionToast, null)
                                                    }) : window.remoteModule(r, n.elt)
                                                })
                                            }
                                        }, t)
                                    })
                                })
                            })
                        }
                    }]), t
                }(a.Component),
                E = n("@ta/social.profile"),
                F = function e(t) {
                    var n = t.profile,
                        o = t.shareProps,
                        d = t.isRemovedForBeta;
                    return a.createElement(s.b, Object(i.a)({}, o, {
                        shiftX: -8
                    }), function(e, t) {
                        return a.createElement(u.a, null, Object(r.featureIsEnabled)("social_block_enabled") && n.blockStatus && n.blockStatus.isBlocking ? a.createElement(c.MemberInteractionConsumer, null, function(e) {
                            return a.createElement(h.a, {
                                type: "secondary",
                                onClick: function t() {
                                    e("UNBLOCK")
                                }
                            }, a.createElement("span", {
                                className: "social-block-button-ProfilePublicSocialButtonBlock__block--Uyn2Z"
                            }, Object(l.localize)("social_unblock_btn")))
                        }) : a.createElement(p.a, {
                            size: "default",
                            profile: n,
                            displayType: "button+icon"
                        }), Object(r.featureIsEnabled)("unified_inbox_writes_enabled") && Object(r.featureIsEnabled)("unified_inbox_private_messaging") && a.createElement(x, {
                            displayType: "icon",
                            profile: n
                        }), !d && a.createElement("span", {
                            ref: e
                        }, a.createElement(h.a, {
                            type: "secondary",
                            onClick: t
                        }, a.createElement("span", {
                            className: "social-block-button-ProfilePublicSocialButtonBlock__cta--18LZz"
                        }, a.createElement(j.Icon, {
                            name: "repost-fill"
                        })))), a.createElement(E.ProfileOverflowButton, {
                            displayName: n.displayName,
                            profileUserId: n.userId,
                            isBlocking: n.blockStatus && n.blockStatus.isBlocking
                        }))
                    })
                };
            F.defaultProps = {
                isRemovedForBeta: !0
            };
            var P = function e(t) {
                    var n = t.profile;
                    return a.createElement(a.Fragment, null, a.createElement("div", {
                        className: "ui_columns is-mobile"
                    }, a.createElement("div", {
                        className: "ui_column is-6"
                    }, n.blockStatus && n.blockStatus.isBlocking ? Object(r.featureIsEnabled)("social_block_enabled") && a.createElement(c.MemberInteractionConsumer, null, function(e) {
                        return a.createElement(h.a, {
                            size: "fullwidth",
                            type: "secondary",
                            onClick: function t() {
                                e("UNBLOCK")
                            }
                        }, a.createElement("span", {
                            className: "social-block-button-ProfilePublicSocialButtonBlock__block--Uyn2Z"
                        }, Object(l.localize)("social_unblock_btn")))
                    }) : a.createElement(p.a, {
                        size: "fullwidth",
                        profile: n,
                        displayType: "button+icon"
                    })), a.createElement("div", {
                        className: "ui_column is-6"
                    }, Object(r.featureIsEnabled)("unified_inbox_private_messaging") && a.createElement(x, {
                        displayType: "button+icon",
                        profile: n,
                        size: "fullwidth"
                    }))))
                },
                w = Object(o.connect)(function(e) {
                    return {
                        viewportCategory: e.meta.device.viewportCategory
                    }
                })(function(e) {
                    var t = e.viewportCategory,
                        n = e.profile,
                        i = {
                            url: "/Profile/".concat(encodeURIComponent(n.username)),
                            itemId: n.id,
                            itemType: "Profile"
                        };
                    return "MOBILE" === t ? a.createElement(P, {
                        profile: n
                    }) : a.createElement(F, {
                        profile: n,
                        shareProps: i
                    })
                });
            n.d(t, "ProfilePublicSocialButtonBlock", function() {
                return w
            }), t.default = {}
        },
        "./packages/social/feed/feedFragments/SocialStatisticsFields.fragment.gql": function(e, t, n) {
            "use strict";
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "SocialStatisticsFields"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "SocialStatistics"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "followCount"
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
                                value: "isLiked"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isBoosted"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "boostCount"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "likeCount"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isReposted"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "repostCount"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 158
                }
            };
            i.loc.source = {
                body: "1115c73b9fd0"
            }, t.a = i
        },
        "./packages/trips/graphql/Fragment/TripItemStatisticFields.fragment.gql": function(e, t, n) {
            "use strict";
            var i = n("./packages/social/feed/feedFragments/SocialStatisticsFields.fragment.gql"),
                a = {
                    kind: "Document",
                    definitions: [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "TripItemStatisticFields"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "TripItem"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
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
                                            value: "__typename"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isLiked"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "likeCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSaved"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "tripCount"
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
                        end: 218
                    }
                };
            a.loc.source = {
                body: "3b9f4008e798"
            };
            var o = {};
            a.definitions = a.definitions.concat(function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }(i.a.definitions)), t.a = a
        },
        "./packages/trips/graphql/Query/statistics/AttractionStatistics.gql": function(e, t, n) {
            "use strict";
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "AttractionStatistics"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "ids"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Int"
                                        }
                                    }
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
                                value: "savesObjects"
                            },
                            name: {
                                kind: "Name",
                                value: "attractionProducts"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "attractionProductIds"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "ids"
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
                                        value: "attractionProductId"
                                    },
                                    arguments: [],
                                    directives: []
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 182
                }
            };
            i.loc.source = {
                body: "30911a732b9e"
            }, t.a = i
        },
        "./packages/trips/graphql/Query/statistics/LocationStatistics.gql": function(e, t, n) {
            "use strict";
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "LocationStatistics"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "ids"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Int"
                                        }
                                    }
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
                                value: "savesObjects"
                            },
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
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "ids"
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
                                        value: "locationId"
                                    },
                                    arguments: [],
                                    directives: []
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 153
                }
            };
            i.loc.source = {
                body: "9d375baf95ac"
            }, t.a = i
        },
        "./packages/trips/trip-util/trip-util.jsx": function(e, t, n) {
            "use strict";
            var i = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                a = n("./packages/common/global/global.jsx"),
                o = n("./packages/common/features/features.jsx"),
                r = n("./packages/trips/graphql/Fragment/TripItemStatisticFields.fragment.gql"),
                l = n("./packages/trips/graphql/Query/statistics/LocationStatistics.gql"),
                s = n("./packages/trips/graphql/Query/statistics/AttractionStatistics.gql"),
                c = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ForumStatistics"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Int"
                                            }
                                        }
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
                                    value: "savesObjects"
                                },
                                name: {
                                    kind: "Name",
                                    value: "posts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "postIds"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "ids"
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 134
                    }
                };
            c.loc.source = {
                body: "7cf63c89b019"
            };
            var d = c,
                u = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "TripitemStatistics"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Int"
                                            }
                                        }
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
                                    value: "savesObjects"
                                },
                                name: {
                                    kind: "Name",
                                    value: "tripItems"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "itemIds"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "ids"
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 141
                    }
                };
            u.loc.source = {
                body: "243f40117611"
            };
            var m = u,
                p = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "LinkPostStatistics"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Long"
                                            }
                                        }
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
                                    value: "savesObjects"
                                },
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
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "ids"
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 146
                    }
                };
            p.loc.source = {
                body: "631f413f1333"
            };
            var k = p,
                b = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ReviewStatistics"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Int"
                                            }
                                        }
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
                                    value: "savesObjects"
                                },
                                name: {
                                    kind: "Name",
                                    value: "reviews"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "reviewIds"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "ids"
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 139
                    }
                };
            b.loc.source = {
                body: "7cb7814beb6b"
            };
            var f = b,
                v = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "PhotoStatistics"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Int"
                                            }
                                        }
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
                                    value: "savesObjects"
                                },
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
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "ids"
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
                                            value: "statuses"
                                        },
                                        arguments: [],
                                        directives: []
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 186
                    }
                };
            v.loc.source = {
                body: "14ab4a65441f"
            };
            var y = v,
                g = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "VideoStatistics"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Int"
                                            }
                                        }
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
                                    value: "savesObjects"
                                },
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
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "ids"
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 136
                    }
                };
            g.loc.source = {
                body: "8cb2bc5ef07d"
            };
            var _ = g,
                S = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "RepostStatistics"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Long"
                                            }
                                        }
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
                                    value: "savesObjects"
                                },
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
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "ids"
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 140
                    }
                };
            S.loc.source = {
                body: "3d9ccd0784f6"
            };
            var j = S;
            n.d(t, "h", function() {
                return N
            }), n.d(t, "j", function() {
                return h
            }), n.d(t, "n", function() {
                return O
            }), n.d(t, "i", function() {
                return I
            }), n.d(t, "b", function() {
                return T
            }), n.d(t, "f", function() {
                return x
            }), n.d(t, "c", function() {
                return E
            }), n.d(t, "k", function() {
                return F
            }), n.d(t, "d", function() {
                return P
            }), n.d(t, "l", function() {
                return w
            }), n.d(t, "e", function() {
                return C
            }), n.d(t, "r", function() {
                return L
            }), n.d(t, "s", function() {
                return z
            }), n.d(t, "g", function() {
                return B
            }), n.d(t, "q", function() {
                return M
            }), n.d(t, "p", function() {
                return U
            }), n.d(t, "a", function() {
                return Q
            }), n.d(t, "o", function() {
                return W
            }), n.d(t, "m", function() {
                return Y
            });
            var N = function e(t) {
                    return t.photo && t.photo.photoSizes[t.photo.photoSizes.length - 1] ? t.photo.photoSizes[t.photo.photoSizes.length - 1] : null
                },
                h = function e(t) {
                    var n = t.owner,
                        i = n ? [n] : [];
                    if (Object(o.featureIsEnabled)("trips_2018_collab")) {
                        var a = (t.collaborators || []).map(function(e) {
                            return e.user
                        }).filter(function(e) {
                            return e
                        });
                        i = i.concat(a)
                    }
                    return i
                },
                O = function e(t) {
                    return h(t).some(function(e) {
                        return e.isMe
                    })
                },
                I = function e(t, n) {
                    return Object(o.featureIsEnabled)("trips_2018_collab") ? t.actionPermissions || {} : {
                        canAddCollaborators: n,
                        canAddItem: n,
                        canChangePrivacy: n,
                        canDelete: n,
                        canEdit: n,
                        canUploadCoverPhoto: t.actionPermissions && t.actionPermissions.canUploadCoverPhoto && n
                    }
                },
                T = function e(t, n) {
                    return Object(o.featureIsEnabled)("trips_2018_collab") ? t.actionPermissions || {} : {
                        canRemove: n
                    }
                },
                x = function e(t, n) {
                    return Object(o.featureIsEnabled)("trips_2018_collab") ? t.actionPermissions || {} : {
                        canAddComment: n,
                        canEdit: n,
                        canRemove: n
                    }
                },
                E = function e(t, n) {
                    return Object(o.featureIsEnabled)("trips_2018_collab") ? t.actionPermissions || {} : {
                        canEdit: n,
                        canRemove: n
                    }
                },
                F = function e(t, n, i, a) {
                    var o = h(t);
                    if (o = o.slice(0, n), i > 0) {
                        var r = 0;
                        o = o.filter(function(e) {
                            return (r = e.displayName.length + r) < i
                        })
                    }
                    return a && (o = o.reverse()), o
                },
                P = function e(t, n, i) {
                    var a = i && i.id,
                        r = Object(o.featureIsEnabled)("trips_2018_collab") ? function() {
                            return !0
                        } : function(e) {
                            return e.author.id === a || "ITEM" === e.targetType && e.targetId !== t.id
                        };
                    return (n || []).filter(r).sort(function e(t, n) {
                        return t.created > n.created ? 1 : -1
                    })
                },
                w = function e(t) {
                    var n;
                    return null == t ? void 0 : null === (n = t.owner) || void 0 === n ? void 0 : n.isMe
                },
                C = function e(t, n) {
                    return (t.items || []).find(function(e) {
                        var t, i = e.reference && e.reference.type && e.reference.type.toLowerCase(),
                            a = null === (t = e.reference) || void 0 === t ? void 0 : t.id,
                            o = n.type.toLowerCase(),
                            r = n.id.toString(),
                            l = n.originalObject && n.originalObject.type && n.originalObject.type.toLowerCase(),
                            s = n.originalObject && n.originalObject.id.toString();
                        return i === o && a === r || i === l && a === s
                    })
                };

            function D(e, t, n, a) {
                if ("savesItem" === t.type) {
                    var o = "TripItem:".concat(t.id),
                        l = e.readFragment({
                            id: o,
                            fragment: r.a,
                            fragmentName: "TripItemStatisticFields"
                        }),
                        s = (l && l.socialStatistics || {}).tripCount,
                        c = a(void 0 === s ? n : s);
                    e.writeFragment({
                        id: o,
                        fragment: r.a,
                        fragmentName: "TripItemStatisticFields",
                        data: {
                            __typename: "TripItem",
                            id: t.id,
                            socialStatistics: Object(i.a)({}, l.socialStatistics, {
                                isSaved: c > 0,
                                tripCount: c,
                                __typename: "SocialStatistics"
                            })
                        }
                    })
                }
            }
            var L = function e(t, n) {
                    return D(t, n, 0, function(e) {
                        return e + 1
                    })
                },
                z = function e(t, n) {
                    return D(t, n, 1, function(e) {
                        return e - 1
                    })
                },
                V = {
                    locationinformation: "location",
                    attractionproductinformation: "attractionProduct",
                    forumpost: "post",
                    tripitem: "savesItem",
                    linkpost: "link",
                    photo: "photo",
                    video: "video",
                    review: "review",
                    repost: "repost"
                },
                A = function e(t) {
                    return {
                        statQuery: t
                    }
                },
                q = Object.freeze({
                    location: A(l.a),
                    attractionProduct: A(s.a),
                    post: A(d),
                    savesItem: A(m),
                    link: A(k),
                    review: A(f),
                    photo: A(y),
                    video: A(_),
                    repost: A(j)
                }),
                B = function e(t) {
                    return V[t.toLowerCase()]
                },
                R = ["LocationInformation", "AttractionProductInformation", "ForumPost", "LinkPost", "Review", "Photo", "Video", "Repost"],
                M = function e(t) {
                    if (!t) return null;
                    var n = Object(a.getObjectId)(t),
                        i = B(t.__typename);
                    if (n && i) {
                        if (R.includes(t.__typename)) return {
                            type: i,
                            id: n
                        };
                        if ("TripItem" === t.__typename && t.reference && t.reference.id && t.reference.type) return {
                            type: i,
                            id: n,
                            originalObject: {
                                id: t.reference.id,
                                type: "attractionproduct" === t.reference.type ? "attractionProduct" : t.reference.type
                            }
                        }
                    }
                    return null
                },
                U = function e(t) {
                    return {
                        id: "".concat(t.id),
                        type: t.type
                    }
                },
                Q = function e(t, n) {
                    var i = n ? "?itemId=".concat(n) : "";
                    return "/Trips/".concat(t).concat(i)
                },
                W = function e(t) {
                    var n = q[t.type];
                    return n ? t && {
                        query: n.statQuery,
                        variables: {
                            ids: [t.id]
                        }
                    } : null
                },
                Y = function e(t) {
                    var n, i;
                    return ["LinkPost", "Photo", "Review", "Video"].includes(null == t ? void 0 : null === (n = t.object) || void 0 === n ? void 0 : null === (i = n.repostedObject) || void 0 === i ? void 0 : i.__typename)
                }
        },
        "@ta/overlays.managers": function(t, n) {
            t.exports = e
        },
        "@ta/overlays.popover": function(e, n) {
            e.exports = t
        },
        "@ta/overlays.toast": function(e, t) {
            e.exports = n
        },
        "@ta/social.blocks": function(e, t) {
            e.exports = i
        },
        "@ta/social.button-group": function(e, t) {
            e.exports = a
        },
        "@ta/social.follow": function(e, t) {
            e.exports = o
        },
        "@ta/social.login-gate": function(e, t) {
            e.exports = r
        },
        "@ta/social.profile": function(e, t) {
            e.exports = l
        },
        "@ta/styleguide.button": function(e, t) {
            e.exports = s
        },
        "@ta/styleguide.icon": function(e, t) {
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
//# sourceMappingURL=social.block-button.84223d591a.js.map