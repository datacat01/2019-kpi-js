define("@ta/media.upload", ["@ta/common.typeahead", "@ta/events.lifecycle", "@ta/input.drop-zone", "@ta/input.text-area", "@ta/media.common", "@ta/media.image", "@ta/overlays.custom-overlay", "@ta/overlays.headers", "@ta/overlays.modal", "@ta/overlays.toast", "@ta/social.social-reference", "@ta/styleguide.button", "@ta/styleguide.icon", "@ta/styleguide.loading", "@ta/common.global"], function(e, t, a, i, n, o, r, l, s, d, c, u, m, p, b) {
    return function(e) {
        var t = {};

        function a(i) {
            if (t[i]) return t[i].exports;
            var n = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(n.exports, n, n.exports, a), n.l = !0, n.exports
        }
        return a.m = e, a.c = t, a.d = function(e, t, i) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }, a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function(e, t) {
            if (1 & t && (e = a(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (a.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) a.d(i, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return i
        }, a.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return a.d(t, "a", t), t
        }, a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, a.p = "", a(a.s = "./packages/media/upload/upload.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js": function(e, t, a) {
            "use strict";

            function i(e) {
                if (Array.isArray(e)) return e
            }
            a.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, a) {
            "use strict";

            function i(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            a.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, a) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            a.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, a) {
            "use strict";

            function i(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function n(e, t, a) {
                return t && i(e.prototype, t), a && i(e, a), e
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, a) {
            "use strict";

            function i(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            a.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, a) {
            "use strict";

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }).apply(this, arguments)
            }
            a.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, a) {
            "use strict";

            function i(e) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            a.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var i = a("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function n(e, t) {
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
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, t, a) {
            "use strict";

            function i(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            a.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js": function(e, t, a) {
            "use strict";

            function i() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
            a.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var i = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(a);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(a, e).enumerable
                    }))), n.forEach(function(t) {
                        Object(i.a)(e, t, a[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return o
            });
            var i = a("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                n = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function o(e, t) {
                return !t || "object" !== Object(i.a)(t) && "function" != typeof t ? Object(n.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, a) {
            "use strict";

            function i(e, t) {
                return (i = Object.setPrototypeOf || function e(t, a) {
                    return t.__proto__ = a, t
                })(e, t)
            }
            a.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js": function(e, t, a) {
            "use strict";
            var i = a("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"),
                n = a("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");

            function o(e, t) {
                return Object(i.a)(e) || function a(e, t) {
                    var a = [],
                        i = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var r, l = e[Symbol.iterator](); !(i = (r = l.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return a
                }(e, t) || Object(n.a)()
            }
            a.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, t, a) {
            "use strict";
            var i = a("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function n(e) {
                return function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
                        return a
                    }
                }(e) || Object(i.a)(e) || function a() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, a) {
            "use strict";

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function e(t) {
                    return i(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : i(t)
                })(e)
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/features/features.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/state/state.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, t, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/media/upload/upload.jsx": function(e, t, a) {
            "use strict";
            a.r(t);
            var i = a("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                n = a("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                o = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                l = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                d = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = a("./node_modules/react/index.js"),
                m = a("./node_modules/react-redux/es/index.js"),
                p = a("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                b = a("./packages/common/features/features.jsx"),
                f = a("./packages/common/classnames/classnames.jsx"),
                v = a.n(f),
                g = a("./packages/common/i18n/i18n.jsx"),
                j = a("./packages/common/logging/logging.jsx"),
                _ = a.n(j),
                O = a("@ta/overlays.modal"),
                k = a("@ta/overlays.headers"),
                h = a("./packages/common/state/state.jsx"),
                S = a("@ta/styleguide.button"),
                y = a.n(S),
                N = a("@ta/styleguide.loading"),
                E = a("./packages/common/tracking/tracking.jsx"),
                M = a.n(E),
                F = a("@ta/media.image"),
                C = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                I = a("@ta/styleguide.icon"),
                x = a("@ta/social.social-reference"),
                w = a("@ta/input.text-area"),
                T = a("@ta/common.typeahead"),
                U = a("@ta/media.common"),
                L = {
                    itemWrapper: "media-upload-MediaUploadItem__itemWrapper--3N182",
                    previewPanel: "media-upload-MediaUploadItem__previewPanel--26Gew",
                    inputPanel: "media-upload-MediaUploadItem__inputPanel--bF5Zy",
                    videoCount: "media-upload-MediaUploadItem__videoCount--3BAOg",
                    previewContainer: "media-upload-MediaUploadItem__previewContainer--2Z0qa",
                    videoPreview: "media-upload-MediaUploadItem__videoPreview--2oG20",
                    imagePreview: "media-upload-MediaUploadItem__imagePreview--1PgRv",
                    imagePreviewInner: "media-upload-MediaUploadItem__imagePreviewInner--1LXc7",
                    trashIcon: "media-upload-MediaUploadItem__trashIcon--1b-Es",
                    locationLabelAndElement: "media-upload-MediaUploadItem__locationLabelAndElement--2InAh",
                    inputLabel: "media-upload-MediaUploadItem__inputLabel--2C3aa",
                    inputSubLabel: "media-upload-MediaUploadItem__inputSubLabel--1KyAs",
                    titleRequired: "media-upload-MediaUploadItem__titleRequired--2Un54",
                    inputElement: "media-upload-MediaUploadItem__inputElement--2DBLt",
                    locationSelectElement: "media-upload-MediaUploadItem__locationSelectElement--2cUo_",
                    locationSelectError: "media-upload-MediaUploadItem__locationSelectError--2rnls",
                    descriptionInput: "media-upload-MediaUploadItem__descriptionInput--3Dpx_",
                    descriptionError: "media-upload-MediaUploadItem__descriptionError--31rLi",
                    characterCountContainer: "media-upload-MediaUploadItem__characterCountContainer--2DiRQ",
                    characterCount: "media-upload-MediaUploadItem__characterCount--eHJbI",
                    error: "media-upload-MediaUploadItem__error--3agEs",
                    uploadItem: "media-upload-MediaUploadItem__uploadItem--1U7DW",
                    progressOuter: "media-upload-MediaUploadItem__progressOuter--2FK1H",
                    progressInner: "media-upload-MediaUploadItem__progressInner--Picx8",
                    suggestedTagsLabel: "media-upload-MediaUploadItem__suggestedTagsLabel--pBTxT",
                    suggestedTagsContainer: "media-upload-MediaUploadItem__suggestedTagsContainer--26INK",
                    suggestedTagItem: "media-upload-MediaUploadItem__suggestedTagItem--g5R_5",
                    suggestedTagIcon: "media-upload-MediaUploadItem__suggestedTagIcon--2HIr-"
                },
                D = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ProximityLocations"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "fromPoint"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "GeoPointInput"
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
                                    value: "radius"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Float"
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
                                    value: "proximityLocations"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "fromPoint"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "fromPoint"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "radius"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "radius"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "page"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "offset"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "0"
                                            }
                                        }, {
                                            kind: "ObjectField",
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
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "parentId"
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
                                            value: "isClosed"
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
                        end: 251
                    }
                };
            D.loc.source = {
                body: "eb02b235a927"
            };
            var z = D,
                P = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ParentLocations"
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
                                            value: "locationIds"
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
                        end: 118
                    }
                };
            P.loc.source = {
                body: "0c6a6f6c45c9"
            };
            var A = P,
                R = {
                    description: function e(t) {
                        return t ? Object(g.localize)("post_photo_add_description_v2_part_2") : Object(g.localize)("post_video_add_description_v2_part_2")
                    },
                    descriptionCharacterCount: function e(t) {
                        return 0 === t ? Object(g.localize)("post_video_500_max_characters") : Object(g.localize)("post_video_character_count", {
                            nCharacterCount: t
                        })
                    },
                    addLocation: function e(t) {
                        return t ? Object(g.localize)("photo_uploader_add_a_location_tag") : Object(g.localize)("video_upload_add_tags")
                    },
                    addLocationSubtext: function e(t) {
                        return t ? Object(g.localize)("post_photo_tag_location_subtext") : Object(g.localize)("post_video_tag_location_subtext")
                    },
                    mediaCount: function e(t, a, i) {
                        return t ? Object(g.localize)("post_photo_video_count_text", {
                            nCurrentphotoCount: a + 1,
                            nTotalphotoCount: i
                        }) : Object(g.localize)("post_video_video_count_text", {
                            nCurrentVideoCount: a + 1,
                            nTotalVideoCount: i
                        })
                    }
                },
                B = 500,
                V = new U.Dimension(288, 162),
                W = new U.Dimension(272, 153),
                q = function e(t) {
                    return 1 !== t.size ? {
                        type: "location_id"
                    } : Array.from(t.values())[0]
                },
                G = function e(t) {
                    if (0 === t.description.length) return Object(g.localize)("uploader_error_required_field")
                },
                Z = function e(t) {
                    if ("photo" === t.mediaType && 0 === t.selectedLocations.size) return Object(g.localize)("uploader_error_required_field")
                },
                H = function e(t) {
                    return {
                        locationId: t.locationId,
                        name: t.name,
                        parentId: t.parentId
                    }
                },
                Y = function(e) {
                    function t(e) {
                        var a;
                        Object(o.a)(this, t), a = Object(r.a)(this, Object(l.a)(t).call(this, e)), Object(c.a)(Object(d.a)(Object(d.a)(a)), "getDisplaySuggestions", function() {
                            var e = a.props.itemState.selectedLocations,
                                t = a.state,
                                i = t.locationSuggestions,
                                n = t.geoSuggestions;
                            return 0 === e.size && i && i.length > 0 && n ? i.concat(n) : null
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "geoSuggestionsLoading", !1), Object(c.a)(Object(d.a)(Object(d.a)(a)), "locationSuggestionsLoading", !1), Object(c.a)(Object(d.a)(Object(d.a)(a)), "selectorNode", void 0), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleDescriptionChange", function(e) {
                            a.props.descriptionChanged(a.props.file, e), 1 === e.length && a.track("started_description")
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleDescriptionFocus", function() {
                            a.setState({
                                descriptionHasFocus: !0
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleDescriptionBlur", function() {
                            a.setState({
                                descriptionHasFocus: !1
                            }), a.props.descriptionBlurred(a.props.file)
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "singleLocationSelectionChanged", function(e) {
                            var t = new Map([
                                [String(e.value), e]
                            ]);
                            a.multiLocationSelectionChanged(t)
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleSingleLocationFocus", function() {
                            a.setState({
                                locationHasFocus: !0
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleSingleLocationBlur", function() {
                            a.setState({
                                locationHasFocus: !1
                            }), a.props.locationSelectionBlurred(a.props.file)
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "multiLocationSelectionChanged", function(e) {
                            a.props.locationSelectionChanged(a.props.file, e), a.track("location_selection_changed", e.size)
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleHasResultsChanged", function(e) {
                            e && a.selectorNode.current && !a.props.isMobile && a.selectorNode.current.scrollIntoView()
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleRemoveFile", function() {
                            a.props.handleRemoveFile(a.props.file)
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleSelectLocationSuggestion", function(e) {
                            var t = e.toString(),
                                i = new Map([
                                    [t, {
                                        type: "location_id",
                                        value: t
                                    }]
                                ]);
                            a.props.locationSelectionChanged(a.props.file, i)
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "track", function(e, t) {
                            a.props.track(e, a.xOfYString(), t)
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "xOfYString", function() {
                            return "".concat(a.props.index + 1, " of ").concat(a.props.videoCount)
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "isRotated", function() {
                            return a.state.rotationDegrees % 180 == 90
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "render", function() {
                            var e = "photo" === a.props.itemState.mediaType,
                                t = a.props.isMobile ? W : V,
                                i = a.isRotated() ? new U.Dimension(t.height, t.width) : t,
                                n = a.props.uploadProgress ? a.props.uploadProgress : 0,
                                o = a.props.isUploading ? u.createElement("div", {
                                    className: L.uploadItem
                                }, u.createElement("div", {
                                    className: L.progressOuter
                                }, u.createElement("div", {
                                    className: L.progressInner,
                                    style: {
                                        width: "".concat(n, "%")
                                    }
                                }))) : null,
                                r = e ? u.createElement("div", {
                                    className: L.imagePreview,
                                    style: {
                                        width: t.width,
                                        height: t.height
                                    }
                                }, u.createElement("div", {
                                    className: L.imagePreviewInner,
                                    style: {
                                        backgroundImage: "url(".concat(a.state.mediaUrl, ")"),
                                        transform: "rotate(".concat(a.state.rotationDegrees, "deg)"),
                                        width: i.width,
                                        height: i.height
                                    }
                                })) : u.createElement("video", {
                                    controls: !0,
                                    controlsList: "nodownload nofullscreen",
                                    className: L.videoPreview,
                                    onPlaying: function e() {
                                        return a.track("preview_playing")
                                    },
                                    style: {
                                        width: t.width,
                                        height: t.height
                                    }
                                }, u.createElement("source", {
                                    src: a.state.mediaUrl,
                                    type: "video/mp4"
                                })),
                                l = e ? u.createElement(T.MultiLocationSelector, {
                                    selectedLocations: a.props.itemState.selectedLocations,
                                    selectionChanged: a.multiLocationSelectionChanged,
                                    hasResultsChanged: a.handleHasResultsChanged,
                                    maxLocations: 1,
                                    className: a.props.itemState.locationError && !a.state.locationHasFocus ? L.locationSelectError : "",
                                    onFocus: a.handleSingleLocationFocus,
                                    onBlur: a.handleSingleLocationBlur
                                }) : u.createElement(T.MultiLocationSelector, {
                                    selectedLocations: a.props.itemState.selectedLocations,
                                    selectionChanged: a.multiLocationSelectionChanged,
                                    hasResultsChanged: a.handleHasResultsChanged
                                }),
                                s = u.createElement("span", {
                                    className: L.titleRequired
                                }, " ", Object(g.localize)("post_video_required_fields_text")),
                                d = a.getDisplaySuggestions(),
                                m = Object(b.featureIsEnabled)("media_geo_suggestions_enabled");
                            return u.createElement("div", {
                                className: L.itemWrapper
                            }, u.createElement("div", {
                                className: L.previewPanel
                            }, a.props.videoCount > 1 ? u.createElement("div", {
                                className: L.videoCount
                            }, R.mediaCount(e, a.props.index, a.props.videoCount)) : null, u.createElement("div", {
                                className: L.previewContainer
                            }, r, a.props.allowDelete && u.createElement("div", {
                                className: "ui_icon times ".concat(L.trashIcon),
                                onClick: a.handleRemoveFile
                            }), o)), u.createElement("div", {
                                className: L.inputPanel
                            }, u.createElement("div", null, u.createElement("div", {
                                className: L.inputLabel
                            }, Object(g.localize)("post_video_add_description_v2_part_1"), s), u.createElement("div", {
                                className: L.inputSubLabel
                            }, R.description(e)), Object(b.featureIsEnabled)("social_at_reference_ugc_editor") ? u.createElement(x.ReferenceSelectorController, {
                                name: "description",
                                value: a.props.itemState.description,
                                onChange: function e(t, i) {
                                    return a.handleDescriptionChange(i)
                                },
                                onFocus: a.handleDescriptionFocus,
                                onBlur: a.handleDescriptionBlur,
                                maxLength: B,
                                className: v()(L.inputElement, L.descriptionInput, Object(c.a)({}, L.descriptionError, a.props.itemState.descriptionError && !a.state.descriptionHasFocus)),
                                shouldAutoScroll: a.props.isMobile
                            }) : u.createElement(w.TextArea, {
                                name: "description",
                                value: a.props.itemState.description,
                                onChange: function e(t, i) {
                                    return a.handleDescriptionChange(i)
                                },
                                onFocus: a.handleDescriptionFocus,
                                onBlur: a.handleDescriptionBlur,
                                maxLength: B,
                                className: v()(L.inputElement, L.descriptionInput, Object(c.a)({}, L.descriptionError, a.props.itemState.descriptionError && !a.state.descriptionHasFocus))
                            }), u.createElement("div", {
                                className: L.characterCountContainer
                            }, a.props.itemState.descriptionError && !a.state.descriptionHasFocus && u.createElement("div", {
                                className: L.error
                            }, a.props.itemState.descriptionError), u.createElement("div", {
                                className: L.characterCount
                            }, R.descriptionCharacterCount(a.props.itemState.description.length)))), u.createElement("div", {
                                className: L.locationLabelAndElement,
                                ref: a.selectorNode
                            }, u.createElement("div", {
                                className: L.inputLabel
                            }, R.addLocation(e), e && s), u.createElement("div", {
                                className: L.inputSubLabel
                            }, R.addLocationSubtext(e)), u.createElement("div", {
                                className: L.locationSelectElement
                            }, l, a.props.itemState.locationError && !a.state.locationHasFocus && u.createElement("div", {
                                className: L.error
                            }, a.props.itemState.locationError))), d && u.createElement("div", null, u.createElement("div", {
                                className: L.suggestedTagsLabel
                            }, Object(g.localize)("suggested_tags")), u.createElement("div", {
                                className: "ui_tag_group ".concat(L.suggestedTagsContainer)
                            }, d.map(function(e) {
                                return u.createElement("div", {
                                    className: "ui_tag_box ".concat(L.suggestedTagItem),
                                    key: e.locationId,
                                    onClick: function t() {
                                        return a.handleSelectLocationSuggestion(e.locationId)
                                    }
                                }, u.createElement(I.Icon, {
                                    name: "plus",
                                    className: L.suggestedTagIcon
                                }), e.name)
                            })))), function e() {
                                return !a.state.exifGeoPoint || a.state.locationSuggestions || a.locationSuggestionsLoading ? null : (a.locationSuggestionsLoading = !0, u.createElement(p.Query, {
                                    query: z,
                                    variables: {
                                        fromPoint: a.state.exifGeoPoint,
                                        radius: 1,
                                        limit: 20
                                    }
                                }, function(e) {
                                    var t = e.loading,
                                        i = e.data,
                                        n = e.error;
                                    if (!t) {
                                        a.locationSuggestionsLoading = !1;
                                        var o = (!n && i && i.proximityLocations || []).filter(function(e) {
                                                return !e.isGeo && !e.isClosed
                                            }).map(H).slice(0, m ? 3 : 4),
                                            r = m ? void 0 : [];
                                        a.setState({
                                            locationSuggestions: o,
                                            geoSuggestions: r
                                        })
                                    }
                                    return null
                                }))
                            }(), function e() {
                                return a.state.locationSuggestions && a.state.locationSuggestions.length > 0 && !a.state.geoSuggestions && !a.geoSuggestionsLoading ? (a.geoSuggestionsLoading = !0, u.createElement(p.Query, {
                                    query: A,
                                    variables: {
                                        locationIds: [a.state.locationSuggestions[0].parentId]
                                    }
                                }, function(e) {
                                    var t = e.loading,
                                        i = e.data,
                                        n = e.error;
                                    if (!t) {
                                        a.geoSuggestionsLoading = !1;
                                        var o = (!n && i && i.locations || []).map(H).slice(0, 1);
                                        a.setState({
                                            geoSuggestions: o
                                        })
                                    }
                                    return null
                                })) : null
                            }())
                        }), a.selectorNode = u.createRef();
                        var i = e.mediaUrl ? e.mediaUrl : "",
                            n = e.file ? URL.createObjectURL(e.file) : i;
                        return a.state = {
                            mediaUrl: n,
                            rotationDegrees: 0,
                            descriptionHasFocus: !1,
                            locationHasFocus: !1
                        }, "photo" === e.itemState.mediaType && (e.file && Object(U.photoOrientation)(e.file, function(t) {
                            a.setState({
                                rotationDegrees: Object(U.orientationValueToDegrees)(t)
                            }), Object(U.getImageDimensions)(n, function(t) {
                                var i = a.isRotated() ? new U.Dimension(t.height, t.width) : t;
                                e.handleGetDimensions(e.file, i)
                            })
                        }), Object(b.featureIsEnabled)("media_location_suggestions_enabled") && Object(U.getGeoPointFromExif)(n, function(e) {
                            return a.setState({
                                exifGeoPoint: e
                            })
                        })), a
                    }
                    return Object(s.a)(t, e), Object(C.a)(t, [{
                        key: "componentWillUnmount",
                        value: function e() {
                            URL.revokeObjectURL(this.state.mediaUrl)
                        }
                    }]), t
                }(u.Component);
            Object(c.a)(Y, "defaultProps", {
                allowDelete: !0
            }), Y.defaultProps = {
                allowDelete: !0
            };
            var X = Object(m.connect)(function(e, t) {
                    return Object(n.a)({
                        isMobile: "MOBILE" === e.meta.device.viewportCategory
                    }, t)
                })(Y),
                K = a("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                Q = a("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                J = a("@ta/events.lifecycle"),
                $ = a("@ta/input.drop-zone"),
                ee = a("@ta/overlays.toast"),
                te = a("@ta/overlays.custom-overlay"),
                ae = a.n(te),
                ie = function(e) {
                    function t(e) {
                        var a;
                        return Object(o.a)(this, t), a = Object(r.a)(this, Object(l.a)(t).call(this, e)), Object(c.a)(Object(d.a)(Object(d.a)(a)), "setOverlayPosition", function() {
                            if (!a.containerRef.current || !a.contentRef.current) throw new Error("Refs are not set. Should not be able to get here.");
                            var e = a.containerRef.current,
                                t = a.contentRef.current;
                            a.setState({
                                top: "".concat(e.getBoundingClientRect().top, "px"),
                                left: "".concat(e.getBoundingClientRect().left + e.getBoundingClientRect().width - t.getBoundingClientRect().width, "px")
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "containerRef", u.createRef()), Object(c.a)(Object(d.a)(Object(d.a)(a)), "contentRef", u.createRef()), a.state = {
                            top: "0px",
                            left: "0px"
                        }, a
                    }
                    return Object(s.a)(t, e), Object(C.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.setOverlayPosition()
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = {
                                    ref: this.containerRef
                                },
                                a = {
                                    ref: this.contentRef
                                };
                            return u.createElement("div", t, u.createElement(ae.a, {
                                blockScroll: !1,
                                fixed: !0,
                                top: this.state.top,
                                left: this.state.left,
                                right: "auto",
                                bottom: "auto"
                            }, u.createElement("div", Object(K.a)({
                                className: "media-upload-LocationTagWarning__warningMessage--3b-8L"
                            }, a), u.createElement("div", {
                                className: "media-upload-LocationTagWarning__warningTitle--TEZBG"
                            }, Object(g.localize)("post_video_didnt_tag_location")), u.createElement("div", {
                                className: "media-upload-LocationTagWarning__warningDescription--2zGeK"
                            }, Object(g.localize)("post_video_tag_location_push_2")), u.createElement("div", {
                                className: "media-upload-LocationTagWarning__buttonWrap--fim52"
                            }, u.createElement("div", {
                                className: "media-upload-LocationTagWarning__button--3aA6D"
                            }, u.createElement(y.a, {
                                type: "secondary",
                                size: "fullwidth",
                                onClick: this.props.onCancel
                            }, Object(g.localize)("uploader_error_add_tag"))), u.createElement("div", {
                                className: v()("media-upload-LocationTagWarning__button--3aA6D", "media-upload-LocationTagWarning__postButton--3yFt-")
                            }, u.createElement(y.a, {
                                type: "primary",
                                size: "fullwidth",
                                onClick: this.props.onPost
                            }, Object(g.localize)("uploader_button_post")))))))
                        }
                    }]), t
                }(u.Component),
                ne = {
                    uploaderWrapper: "media-upload-MediaUploaderModal__uploaderWrapper--3q5o0",
                    uploading: "media-upload-MediaUploaderModal__uploading--327aJ",
                    autoWidth: "media-upload-MediaUploaderModal__autoWidth--xrnCS",
                    paddingForReference: "media-upload-MediaUploaderModal__paddingForReference--2uSa2",
                    guidelinesWrapper: "media-upload-MediaUploaderModal__guidelinesWrapper--13RKS",
                    guidelinesTips: "media-upload-MediaUploaderModal__guidelinesTips--1gZ4N",
                    guidelinesNumVideos: "media-upload-MediaUploaderModal__guidelinesNumVideos--2sYbG",
                    guidelinesLinkUploader: "media-upload-MediaUploaderModal__guidelinesLinkUploader--2awgt",
                    itemDivider: "media-upload-MediaUploaderModal__itemDivider--iP_6K",
                    dropZone: "media-upload-MediaUploaderModal__dropZone--3dNh6",
                    dropZoneBig: "media-upload-MediaUploaderModal__dropZoneBig--2392z",
                    dropZoneSmall: "media-upload-MediaUploaderModal__dropZoneSmall--2c5r7",
                    dropZoneSmallWrapper: "media-upload-MediaUploaderModal__dropZoneSmallWrapper--11vbu",
                    dropZoneItem: "media-upload-MediaUploaderModal__dropZoneItem--12Irv",
                    dragDropText: "media-upload-MediaUploaderModal__dragDropText--1e1_X",
                    uploadAnother: "media-upload-MediaUploaderModal__uploadAnother--KPAL5",
                    errorDisplay: "media-upload-MediaUploaderModal__errorDisplay--2gQBz",
                    postButtonContainer: "media-upload-MediaUploaderModal__postButtonContainer--FIYIn",
                    releaseItem: "media-upload-MediaUploaderModal__releaseItem--juOQQ",
                    releaseContainer: "media-upload-MediaUploaderModal__releaseContainer--2VEdf",
                    loaderContainer: "media-upload-MediaUploaderModal__loaderContainer--3p6YZ",
                    fullWidth: "media-upload-MediaUploaderModal__fullWidth--2gMF9",
                    loaderCenter: "media-upload-MediaUploaderModal__loaderCenter--HurHn",
                    postButton: "media-upload-MediaUploaderModal__postButton--2B1Jc",
                    uploadError: "media-upload-MediaUploaderModal__uploadError--ydVXZ",
                    oopsMessage: "media-upload-MediaUploaderModal__oopsMessage--1NI-W",
                    guidelinesMoreInfo: "media-upload-MediaUploaderModal__guidelinesMoreInfo--5j3ln"
                },
                oe = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "initiateMediaUpload"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "request"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "InitiateMediaUploadRequestInput"
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
                                    value: "initiateMediaUpload"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "request"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "request"
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
                                            value: "mediaId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "uploadUrl"
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
                        end: 150
                    }
                };
            oe.loc.source = {
                body: "e77071788e44"
            };
            var re = oe,
                le = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "completeMediaUploadForClient"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "request"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CompleteMediaUploadForClientRequestInput"
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
                                    value: "completeMediaUploadForClient"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "request"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "request"
                                        }
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 145
                    }
                };
            le.loc.source = {
                body: "6bde827679df"
            };
            var se = le,
                de = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "Moderate"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "texts"
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
                                                value: "String"
                                            }
                                        }
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
                                    value: "checks"
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
                                                value: "String"
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
                                name: {
                                    kind: "Name",
                                    value: "moderate"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "texts"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "texts"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "checks"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "checks"
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
                                            value: "check"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "present"
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
                        end: 131
                    }
                };
            de.loc.source = {
                body: "8f9367467a95"
            };
            var ce = de,
                ue = {
                    fileTypeError: function e(t) {
                        return t ? Object(g.localize)("post_photo_unsupported_file") : Object(g.localize)("post_video_file_type_error")
                    },
                    fileSizeError: function e(t) {
                        return t ? Object(g.localize)("file_size_too_big_photo_oops_message", {
                            0: $.maxImageUploadSizeInMB
                        }) : Object(g.localize)("post_video_size_error")
                    },
                    guidelinesLink: function e(t) {
                        return "".concat(Object(g.localize)("mobile_help_center_url"), t ? "/articles/200615067" : "/articles/115011046367")
                    },
                    dropZoneButton: function e(t) {
                        return t ? Object(g.localize)("post_photo_upload_photos_button") : Object(g.localize)("post_video_upload_videos_button")
                    },
                    uploadAnother: function e(t, a) {
                        return a ? t ? '<span class="'.concat(ne.uploadAnother, '">').concat(Object(g.localize)("add_more_photos_mw_uploader"), "</span>") : '<span class="'.concat(ne.uploadAnother, '">').concat(Object(g.localize)("add_more_videos_mw_uploader"), "</span>") : t ? Object(g.localize)("post_photo_upload_another_video", {
                            sColorClass1: ne.uploadAnother
                        }) : Object(g.localize)("post_video_upload_another_video", {
                            sColorClass1: ne.uploadAnother
                        })
                    },
                    submitButton: function e(t, a) {
                        var i = 1 === a ? Object(g.localize)("ugc_uploader_photo_v2") : Object(g.localize)("ugc_uploader_photo_v3"),
                            n = 1 === a ? Object(g.localize)("post_video_button") : Object(g.localize)("post_videos_button");
                        return t ? i : n
                    },
                    uploadFailed: function e(t) {
                        return t ? Object(g.localize)("post_photo_upload_failed") : Object(g.localize)("video_upload_fail")
                    },
                    title: function e(t) {
                        return t ? Object(g.localize)("post_photos_form_header") : Object(g.localize)("post_a_video_modal_header")
                    },
                    fieldRequired: function e() {
                        return Object(g.localize)("uploader_error_required_field")
                    },
                    maxAllowedFiles: function e(t, a) {
                        return t ? Object(g.localize)("post_photo_tips_guidelines") : Object(g.localize)("video_upload_max_number", {
                            nVideos: a
                        })
                    },
                    acceptedFormats: function e(t, a) {
                        return t ? Object(g.localize)("post_photo_accepted_formats") : Object(g.localize)("video_upload_video_formats_accepted", {
                            sFileExtentions: a.join(" ")
                        })
                    },
                    maxFileSize: function e(t) {
                        return t ? Object(g.localize)("file_size_limit_photo", {
                            0: $.maxImageUploadSizeInMB
                        }) : null
                    },
                    guidelinesMoreInfo: function e(t) {
                        return t ? Object(g.unescaped)(Object(g.localize)("post_photo_more_info_2")) : Object(g.unescaped)(Object(g.localize)("video_upload_more_info_guidelines_link"))
                    },
                    postSubmissionToast: function e(t) {
                        return t ? Object(g.localize)("success_repost_photo") : Object(g.localize)("success_repost_video")
                    }
                },
                me = function e(t) {
                    return t.some(function(e) {
                        return "PROFANITY" === e.check && e.present
                    })
                },
                pe = function e(t, a, i, n) {
                    t.query({
                        query: ce,
                        variables: {
                            texts: a,
                            checks: ["PROFANITY"]
                        },
                        fetchPolicy: "network-only"
                    }).then(function(e) {
                        var t = e.data.moderate;
                        t.some(function(e) {
                            return me(e)
                        }) ? n(t) : i()
                    })
                },
                be = function(e) {
                    function t(e) {
                        var a;
                        if (Object(o.a)(this, t), a = Object(r.a)(this, Object(l.a)(t).call(this, e)), Object(c.a)(Object(d.a)(Object(d.a)(a)), "fileInputRef", void 0), Object(c.a)(Object(d.a)(Object(d.a)(a)), "allowedFileTypes", void 0), Object(c.a)(Object(d.a)(Object(d.a)(a)), "maxAllowedFiles", void 0), Object(c.a)(Object(d.a)(Object(d.a)(a)), "maxFileSizeInBytes", void 0), Object(c.a)(Object(d.a)(Object(d.a)(a)), "apolloClient", void 0), Object(c.a)(Object(d.a)(Object(d.a)(a)), "emptyState", function() {
                                return {
                                    errorMessage: void 0,
                                    itemStates: new Map,
                                    itemUploadProgresses: new Map,
                                    displayLocationWarning: !1,
                                    submitIndex: -1,
                                    isDragOver: !1
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "track", function(e, t, i) {
                                var n = {
                                    module: "photo" === a.props.mediaType ? "photo_uploader" : "video_uploader",
                                    action: e,
                                    context: t,
                                    value: i
                                };
                                Object.keys(n).forEach(function(e) {
                                    return void 0 === n[e] && delete n[e]
                                }), M()(n)
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleComponentOpened", function() {
                                a.track("opened"), a.props.isMobile && a.fileInputRef && a.fileInputRef.click()
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleComponentClosed", function() {
                                (a.isUploading() || a.isFinishedUploading()) && a.setState(a.emptyState()), a.isEditing() && a.track("close_during_editing"), a.isUploading() && a.track("close_during_uploading")
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "fileSelectionChanged", function(e) {
                                var t = e.target.files;
                                Array.from(t).forEach(function(e) {
                                    return Object($.processFile)(e, a.addFile, a.allowedFileTypes, a.maxFileSizeInBytes, a.fileRejected, "file_picker")
                                }), a.fileInputRef.value = ""
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "addFile", function(e, t) {
                                a.setState(function(i) {
                                    var o = i.itemStates,
                                        r = i.itemUploadProgresses;
                                    if (o.size >= a.maxAllowedFiles) return i;
                                    if (Array.from(o.keys()).some(function(t) {
                                            return e.name === t.name && e.size === t.size
                                        })) return i;
                                    var l = new Map(o),
                                        s = new Map;
                                    if (a.props.locationId) {
                                        var d = {
                                            type: "location_id",
                                            value: "".concat(a.props.locationId)
                                        };
                                        s.set("".concat(a.props.locationId), d)
                                    }
                                    l.set(e, {
                                        mediaType: Object(U.mediaType)(e.name),
                                        description: "",
                                        selectedLocations: s,
                                        uploadSuccess: !1
                                    });
                                    var c = new Map(r);
                                    return c.set(e, 0), a.track("file_selected", t, l.size), Object(n.a)({}, i, {
                                        itemStates: l,
                                        itemUploadProgresses: c
                                    })
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "fileRejected", function(e, t) {
                                var i;
                                a.track("invalid_file", t);
                                var o = "photo" === a.props.mediaType;
                                i = "wrong_file_type" === t ? ue.fileTypeError(o) : "file_too_large" === t ? ue.fileSizeError(o) : t, a.setState(function(e) {
                                    return Object(n.a)({}, e, {
                                        errorMessage: i
                                    })
                                }), setTimeout(function() {
                                    a.setState({
                                        errorMessage: void 0
                                    })
                                }, 3e3)
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleRemoveFile", function(e) {
                                if (e) {
                                    var t = a.state,
                                        i = t.itemStates,
                                        n = t.itemUploadProgresses,
                                        o = new Map(i);
                                    o.delete(e);
                                    var r = new Map(n);
                                    r.delete(e), a.setState({
                                        itemStates: o,
                                        itemUploadProgresses: r
                                    })
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleDescriptionChanged", function(e, t) {
                                if (e) {
                                    var i = new Map(a.state.itemStates),
                                        o = i.get(e);
                                    if (o) {
                                        var r = Object(n.a)({}, o);
                                        Object.assign(r, {
                                            description: t
                                        });
                                        var l = G(r);
                                        Object.assign(r, {
                                            descriptionError: l
                                        }), i.set(e, r), a.setState({
                                            itemStates: i
                                        })
                                    }
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleDescriptionBlurred", function(e) {
                                if (e) {
                                    var t = new Map(a.state.itemStates),
                                        i = t.get(e);
                                    if (i) {
                                        var o = G(i),
                                            r = Object(n.a)({}, i, {
                                                descriptionError: o
                                            });
                                        t.set(e, r), a.setState({
                                            itemStates: t
                                        })
                                    }
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleLocationSelectionChanged", function(e, t) {
                                if (e) {
                                    var i = new Map(a.state.itemStates),
                                        o = i.get(e);
                                    if (o) {
                                        var r = Object(n.a)({}, o);
                                        Object.assign(r, {
                                            selectedLocations: t
                                        });
                                        var l = Z(r);
                                        Object.assign(r, {
                                            locationError: l
                                        }), i.set(e, r), a.setState({
                                            itemStates: i
                                        })
                                    }
                                    a.setState({
                                        displayLocationWarning: !1
                                    })
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleLocationSelectionBlurred", function(e) {
                                if (e) {
                                    var t = new Map(a.state.itemStates),
                                        i = t.get(e);
                                    if (i) {
                                        var o = Z(i),
                                            r = Object(n.a)({}, i, {
                                                locationError: o
                                            });
                                        t.set(e, r), a.setState({
                                            itemStates: t
                                        })
                                    }
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleGetDimensions", function(e, t) {
                                if (e) {
                                    var i = new Map(a.state.itemStates),
                                        o = i.get(e);
                                    if (o) {
                                        var r = Object(n.a)({}, o, {
                                            dimensions: t
                                        });
                                        i.set(e, r), a.setState({
                                            itemStates: i
                                        })
                                    }
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "missingLocations", function() {
                                return Array.from(a.state.itemStates.values()).some(function(e) {
                                    return 0 === e.selectedLocations.size
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleSubmitClicked", function() {
                                if (a.requiredFieldsComplete()) {
                                    var e = Array.from(a.state.itemStates.values()).map(function(e) {
                                        return e.description
                                    });
                                    pe(a.apolloClient, e, a.submit, a.handleDescriptionProfanityError)
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "submit", function() {
                                a.track("submit_clicked"), !a.missingLocations() || a.state.displayLocationWarning ? (a.setState({
                                    submitIndex: -1,
                                    displayLocationWarning: !1
                                }), a.submitNextMedia()) : a.setState({
                                    displayLocationWarning: !0
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleDescriptionProfanityError", function(e) {
                                var t = new Map(a.state.itemStates);
                                Array.from(a.state.itemStates.entries()).forEach(function(a, i) {
                                    if (me(e[i])) {
                                        var o = a[0],
                                            r = a[1],
                                            l = Object(g.localize)("media_upload_description_profanity_error"),
                                            s = Object(n.a)({}, r, {
                                                descriptionError: l
                                            });
                                        t.set(o, s)
                                    }
                                }), a.setState({
                                    itemStates: t
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleCancel", function() {
                                a.setState({
                                    displayLocationWarning: !1
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "launchPostSubmissionToast", function() {
                                if (a.props.launchToast) {
                                    var e = "photo" === a.props.mediaType;
                                    a.props.launchToast({
                                        node: ue.postSubmissionToast(e)
                                    })
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "submitNextMedia", function() {
                                var e = a.state.submitIndex;
                                if (e += 1, a.setState({
                                        submitIndex: e
                                    }), e >= a.state.itemStates.size) a.hadUploadError() ? a.track("uploaded_error_exists") : (a.track("uploaded_all"), a.props.showGlobalOverlay(), a.launchPostSubmissionToast(), a.setState(a.emptyState()), a.props.onSubmit && a.props.onSubmit());
                                else {
                                    var t = Array.from(a.state.itemStates.keys())[e];
                                    a.submitMedia(t, e)
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "videoFormDataLegacy", function(e, t) {
                                var i = new FormData;
                                return i.append("the_file", e, e.name), i.append("description", t.description), i.append("locationIds", JSON.stringify(Array.from(t.selectedLocations.keys()))), i.append("photorelease", "true"), i.append("securityToken", a.props.csrfToken), i.append("useHttpErrorResponse", "true"), i
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "photoFormData", function(e, t) {
                                var i = new FormData;
                                i.append("the_file", e, e.name), i.append("caption", t.description);
                                var n = q(t.selectedLocations).value;
                                if (!n) throw new Error("locationId should exist");
                                return i.append("singleLocationId", n), i.append("flowaction", "SERIAL"), i.append("reviewComplete", "true"), i.append("photorelease", "true"), i.append("securityToken", a.props.csrfToken), i.append("useHttpErrorResponse", "true"), a.props.pid && i.append("pid", a.props.pid.toString()), a.props.pidAttr && i.append("pidAttr", a.props.pidAttr), i
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "submitMedia", function(e, t) {
                                var i = a.state.itemStates.get(e);
                                if (!i) throw new Error("itemState should not be null");
                                "photo" === i.mediaType ? a.submitPhoto(e, i, t) : a.submitVideo(e, i, t)
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "submitPhoto", function(e, t, i) {
                                if (Object(b.featureIsEnabled)("media_photo_upload_use_s3")) a.submitUsingS3Method(e, t, i);
                                else {
                                    var n = a.photoFormData(e, t);
                                    a.submitUsingTa(e, t, i, "/PhotoUpload", n)
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "submitVideo", function(e, t, i) {
                                if (Object(b.featureIsEnabled)("media_video_upload_use_s3")) a.submitUsingS3Method(e, t, i);
                                else {
                                    var n = a.videoFormDataLegacy(e, t);
                                    a.submitUsingTa(e, t, i, "/PostVideo", n)
                                }
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "submitUsingTa", function(e, t, i, n, o) {
                                var r = a.state,
                                    l = r.itemStates,
                                    s = r.itemUploadProgresses,
                                    d = t,
                                    c = new XMLHttpRequest;
                                c.open("POST", n, !0), c.onload = function() {
                                    s.set(e, 100), 200 === c.status ? (a.track("upload_success", "".concat(i + 1, " of ").concat(a.state.itemStates.size)), d.uploadSuccess = !0) : a.trackSubmitErrorXhr(i, c), a.setState({
                                        itemStates: l,
                                        itemUploadProgresses: s
                                    }), a.submitNextMedia()
                                }, c.upload.addEventListener("progress", function(t) {
                                    var i = t.loaded / t.total * 100,
                                        n = Math.floor(.95 * i);
                                    s.set(e, n), a.setState({
                                        itemUploadProgresses: s
                                    })
                                }, !1), c.send(o)
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "trackSubmitErrorXhr", function(e, t) {
                                var i;
                                try {
                                    i = t.responseText
                                } catch (e) {
                                    i = t.responseType
                                }
                                a.trackSubmitError(e, t.status, t.statusText, i)
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "trackSubmitError", function(e, t, i, n) {
                                a.track("upload_fail", "".concat(e + 1, " of ").concat(a.state.itemStates.size)), (t || 0 === t) && a.track("upload_fail_status_code", t.toString()), i && a.track("upload_fail_status", i), n && a.track("upload_fail_response", n)
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "submitUsingS3Method", function(e, t, i) {
                                a.apolloClient.mutate({
                                    mutation: re,
                                    variables: {
                                        request: {
                                            mediaType: t.mediaType.toUpperCase(),
                                            mimeType: e.type,
                                            fileName: e.name,
                                            fileSize: e.size,
                                            description: t.description,
                                            locationIds: Array.from(t.selectedLocations.keys()),
                                            pid: a.props.pid,
                                            pidAttr: a.props.pidAttr,
                                            width: t.dimensions && t.dimensions.width,
                                            height: t.dimensions && t.dimensions.height
                                        }
                                    }
                                }).then(function(t) {
                                    var n = t.data.initiateMediaUpload;
                                    a.submitFileToS3(e, i, n.mediaId, n.uploadUrl)
                                }).catch(function(e) {
                                    a.trackSubmitError(i, void 0, void 0, "initateUpload ".concat(e.toString())), a.submitNextMedia()
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "submitFileToS3", function(e, t, i, n) {
                                var o = new XMLHttpRequest;
                                o.open("PUT", n, !0), o.onload = function() {
                                    if (200 === o.status) {
                                        var n = a.state.itemUploadProgresses;
                                        n.set(e, 100), a.setState({
                                            itemUploadProgresses: n
                                        }), a.completeMediaUpload(e, t, i)
                                    } else a.trackSubmitErrorXhr(t, o), a.submitNextMedia()
                                }, o.onerror = function() {
                                    a.trackSubmitError(t, void 0, void 0, "s3 onerror ".concat(o.readyState, " ").concat(o.status.toString())), a.submitNextMedia()
                                }, o.onabort = function() {
                                    a.trackSubmitError(t, void 0, void 0, "s3 onabort ".concat(o.readyState, " ").concat(o.status.toString())), a.submitNextMedia()
                                }, o.upload.addEventListener("progress", function(t) {
                                    var i = t.loaded / t.total * 100,
                                        n = Math.floor(i),
                                        o = a.state.itemUploadProgresses;
                                    o.set(e, n), a.setState({
                                        itemUploadProgresses: o
                                    })
                                }, !1), o.send(e)
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "completeMediaUpload", function(e, t, i) {
                                a.apolloClient.mutate({
                                    mutation: se,
                                    variables: {
                                        request: {
                                            mediaId: i
                                        }
                                    }
                                }).then(function() {
                                    var i = a.state.itemStates.get(e);
                                    a.track("upload_success", "".concat(t + 1, " of ").concat(a.state.itemStates.size)), i && (i.uploadSuccess = !0, a.setState({
                                        itemStates: a.state.itemStates
                                    })), a.submitNextMedia()
                                }).catch(function(e) {
                                    a.trackSubmitError(t, void 0, void 0, "completeUpload ".concat(e.toString())), a.submitNextMedia()
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "tryAgainClicked", function() {
                                var e = a.state.itemStates,
                                    t = new Map;
                                e.forEach(function(e, a) {
                                    e.uploadSuccess || t.set(a, 0)
                                }), a.setState({
                                    itemUploadProgresses: t,
                                    submitIndex: -1
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleDragOver", function(e) {
                                e.preventDefault(), a.setState({
                                    isDragOver: !0
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleDragLeave", function(e) {
                                e.preventDefault(), a.setState({
                                    isDragOver: !1
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleDrop", function(e) {
                                e.preventDefault(), Object($.processFilesFromDrop)(e, a.addFile, a.allowedFileTypes, a.maxFileSizeInBytes, a.fileRejected), a.setState({
                                    isDragOver: !1
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "requiredFieldsComplete", function() {
                                var e = a.state.itemStates,
                                    t = new Map,
                                    i = !1;
                                return e.forEach(function(e, a) {
                                    var o = G(e),
                                        r = Z(e);
                                    (o || r) && (i = !0);
                                    var l = Object(n.a)({}, e, {
                                        descriptionError: o,
                                        locationError: r
                                    });
                                    t.set(a, l)
                                }), a.setState({
                                    itemStates: t
                                }), !i
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "isEditing", function() {
                                return a.state.submitIndex < 0
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "isFinishedUploading", function() {
                                return a.state.submitIndex >= a.state.itemStates.size
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "isUploading", function() {
                                return !a.isFinishedUploading() && a.state.submitIndex >= 0
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "hadUploadError", function() {
                                return !!a.isFinishedUploading() && Array.from(a.state.itemStates.values()).some(function(e) {
                                    return !e.uploadSuccess
                                })
                            }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "render", function() {
                                var e, t = "photo" === a.props.mediaType,
                                    i = a.state.itemStates.size > 0,
                                    n = i ? null : u.createElement("div", {
                                        className: ne.guidelinesWrapper
                                    }, u.createElement("div", {
                                        className: ne.guidelinesTips
                                    }, Object(g.localize)("flash_uploader_tips_and_guidelines_10d8")), u.createElement("div", {
                                        className: ne.guidelinesNumVideos
                                    }, ue.maxAllowedFiles(t, a.maxAllowedFiles)), u.createElement("div", null, ue.acceptedFormats(t, a.allowedFileTypes)), u.createElement("div", null, ue.maxFileSize(t)), Object(b.featureIsEnabled)("social_link_posting_enabled") && "video" === a.props.mediaType ? u.createElement("div", null, u.createElement("span", {
                                        className: ne.guidelinesLinkUploader,
                                        onClick: function e() {
                                            a.track("post_a_link_click"), a.props.linkUploaderModalName && a.props.showGlobalOverlay(a.props.linkUploaderModalName)
                                        }
                                    }, Object(g.unescaped)(Object(g.localize)("video_upload_go_to_link_posting")))) : null, u.createElement("div", {
                                        className: ne.guidelinesMoreInfo
                                    }, u.createElement("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: ue.guidelinesLink(t),
                                        onClick: function e() {
                                            return a.track("guidelines_click")
                                        }
                                    }, ue.guidelinesMoreInfo(t)))),
                                    o = Array.from(a.state.itemStates.entries()).map(function(e, t) {
                                        var i = Object(Q.a)(e, 2),
                                            n = i[0],
                                            o = i[1];
                                        return u.createElement(u.Fragment, {
                                            key: "fragment_".concat(n.name, "_").concat(n.size)
                                        }, t > 0 ? u.createElement("div", {
                                            className: ne.itemDivider
                                        }) : null, u.createElement(X, {
                                            file: n,
                                            index: t,
                                            videoCount: a.state.itemStates.size,
                                            itemState: o,
                                            descriptionChanged: a.handleDescriptionChanged,
                                            descriptionBlurred: a.handleDescriptionBlurred,
                                            handleRemoveFile: a.handleRemoveFile,
                                            locationSelectionChanged: a.handleLocationSelectionChanged,
                                            locationSelectionBlurred: a.handleLocationSelectionBlurred,
                                            handleGetDimensions: a.handleGetDimensions,
                                            track: a.track,
                                            isMobile: a.props.isMobile,
                                            isUploading: a.isUploading(),
                                            uploadProgress: a.state.itemUploadProgresses.get(n)
                                        }))
                                    }),
                                    r = a.state.errorMessage,
                                    l = i ? null : u.createElement("div", {
                                        className: "".concat(ne.dropZone, " ").concat(ne.dropZoneBig)
                                    }, u.createElement("div", {
                                        className: ne.dropZoneItem
                                    }, u.createElement(y.a, {
                                        type: "primary"
                                    }, ue.dropZoneButton(t))), a.props.isMobile ? null : u.createElement(u.Fragment, null, u.createElement("div", {
                                        className: ne.dropZoneItem
                                    }, Object(g.localize)("post_video_or_just_text")), u.createElement("div", {
                                        className: "".concat(ne.dropZoneItem, " ").concat(ne.dragDropText)
                                    }, Object(g.localize)("post_videodrag_and_drop_from_desktop")))),
                                    s = i ? u.createElement("div", {
                                        className: "".concat(ne.dropZone, " ").concat(ne.dropZoneSmall)
                                    }, Object(g.unescaped)(ue.uploadAnother(t, a.props.isMobile))) : null,
                                    d = {
                                        display: a.state.itemStates.size >= a.maxAllowedFiles ? "none" : "block"
                                    },
                                    m = r ? null : u.createElement("div", {
                                        className: "".concat(i ? ne.dropZoneSmallWrapper : ""),
                                        style: d
                                    }, u.createElement($.DropZone, {
                                        allowedFileTypes: a.allowedFileTypes,
                                        allowMultipleSelection: a.maxAllowedFiles > 1,
                                        addFile: a.addFile,
                                        maxSizeInBytes: a.maxFileSizeInBytes,
                                        fileRejected: a.fileRejected,
                                        isDragOverOutsideComponent: a.state.isDragOver
                                    }, l, s)),
                                    f = r ? u.createElement("div", {
                                        className: ne.errorDisplay
                                    }, r) : null,
                                    j = i ? u.createElement("div", {
                                        className: v()(ne.postButtonContainer, Object(c.a)({}, ne.paddingForReference, Object(b.featureIsEnabled)("social_at_reference_ugc_editor")))
                                    }, u.createElement("div", {
                                        className: ne.postButton
                                    }, a.isUploading() || a.isFinishedUploading() ? u.createElement("div", {
                                        className: v()(ne.loaderContainer, Object(c.a)({}, ne.fullWidth, a.props.isMobile))
                                    }, u.createElement("div", {
                                        className: ne.loaderCenter
                                    }, u.createElement(N.LoadingBubbles, {
                                        color: "dark"
                                    }))) : u.createElement(y.a, {
                                        type: "primary",
                                        size: a.props.isMobile ? "fullwidth" : "default",
                                        onClick: a.handleSubmitClicked
                                    }, ue.submitButton(t, a.state.itemStates.size)))) : null;
                                e = t ? a.state.itemStates.size > 1 ? Object(g.localize)("new_photos_terms_of_use", {
                                    link: "/pages/terms.html"
                                }) : Object(g.localize)("new_photo_terms_of_use", {
                                    link: "/pages/terms.html"
                                }) : a.state.itemStates.size > 1 ? Object(g.localize)("new_videos_terms_of_use", {
                                    link: "/pages/terms.html"
                                }) : Object(g.localize)("new_video_terms_of_use", {
                                    link: "/pages/terms.html"
                                });
                                var _ = a.hadUploadError(),
                                    h = i && !_ ? u.createElement("div", {
                                        className: ne.releaseContainer
                                    }, u.createElement("span", {
                                        className: ne.releaseItem
                                    }, Object(g.unescaped)(e))) : null,
                                    S = _ ? u.createElement("div", {
                                        className: ne.uploadError
                                    }, u.createElement("div", {
                                        className: ne.oopsMessage
                                    }, ue.uploadFailed(t)), u.createElement(y.a, {
                                        type: "primary",
                                        size: "fullwidth",
                                        onClick: a.tryAgainClicked
                                    }, Object(g.localize)("content_upload_fail_try_again"))) : null,
                                    E = u.createElement(k.TitleBar, {
                                        iconName: t ? "camera-fill" : "video-fill",
                                        displayType: "LEFT_ALIGN_GRAY"
                                    }, ue.title(t)),
                                    M = [ne.uploaderWrapper];
                                return a.isUploading() && M.push(ne.uploading), a.isFinishedUploading() && M.push(ne.autoWidth), u.createElement(O.Modal, {
                                    name: a.props.modalName,
                                    header: a.isFinishedUploading() ? null : E,
                                    onDragOver: a.handleDragOver,
                                    onDragLeave: a.handleDragLeave,
                                    onDrop: a.handleDrop
                                }, u.createElement(u.Fragment, null, u.createElement("div", {
                                    className: v()(M)
                                }, u.createElement("div", {
                                    style: {
                                        display: a.isFinishedUploading() ? "none" : "block",
                                        overflowY: "auto",
                                        overflowX: "hidden",
                                        paddingLeft: "2px",
                                        paddingRight: "2px"
                                    }
                                }, m || f, n, o, a.state.displayLocationWarning && u.createElement(ie, {
                                    onCancel: a.handleCancel,
                                    onPost: a.handleSubmitClicked
                                }), j), h, S), u.createElement("input", {
                                    style: {
                                        display: "none"
                                    },
                                    type: "file",
                                    name: "media",
                                    accept: a.allowedFileTypes.join(","),
                                    multiple: !0,
                                    onChange: a.fileSelectionChanged,
                                    ref: function e(t) {
                                        a.fileInputRef = t
                                    }
                                }), u.createElement(J.MountListener, {
                                    onComponentDidMount: a.handleComponentOpened,
                                    onComponentWillUnmount: a.handleComponentClosed
                                })), u.createElement(p.ApolloConsumer, null, function(e) {
                                    return a.apolloClient = e, null
                                }))
                            }), a.state = a.emptyState(), "video" === a.props.mediaType) a.allowedFileTypes = U.supportedVideoTypes, a.maxAllowedFiles = 5;
                        else {
                            if ("photo" !== a.props.mediaType) throw new Error("unknown mediaType ".concat(a.props.mediaType));
                            a.allowedFileTypes = U.supportedImageTypes, a.maxAllowedFiles = 10
                        }
                        return a.maxFileSizeInBytes = "photo" === a.props.mediaType ? $.maxImageUploadSizeInBytes : $.maxVideoUploadSizeInBytes, a
                    }
                    return Object(s.a)(t, e), t
                }(u.Component),
                fe = Object(m.connect)(function(e, t) {
                    return Object(n.a)({
                        isMobile: "MOBILE" === e.meta.device.viewportCategory,
                        csrfToken: e.auth.csrfToken,
                        pidAttr: e.meta.device.userAgentCategory
                    }, t)
                }, {
                    showGlobalOverlay: h.actions.overlays.showGlobalOverlay
                })(function e(t) {
                    return u.createElement(ee.Toaster, null, function(e) {
                        return u.createElement(be, Object(K.a)({
                            launchToast: e
                        }, t))
                    })
                }),
                ve = a("./packages/social/feed/feedFragments/LocationFields.fragment.gql"),
                ge = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "editPhoto"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "PhotoUpdateRequestInput"
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
                                    value: "updatePhoto"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "input"
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
                                            value: "caption"
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
                        end: 425
                    }
                };
            ge.loc.source = {
                body: "04d50e66bfd8"
            };
            var je = {};
            ge.definitions = ge.definitions.concat(function _e(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !je[t] && (je[t] = !0, !0)
                })
            }(ve.a.definitions));
            var Oe = ge,
                ke = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "editVideo"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "VideoUpdateRequestInput"
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
                                    value: "updateVideo"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "input"
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
                                            value: "caption"
                                        },
                                        arguments: [],
                                        directives: []
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
                        end: 489
                    }
                };
            ke.loc.source = {
                body: "674015141067"
            };
            var he = {};
            ke.definitions = ke.definitions.concat(function Se(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !he[t] && (he[t] = !0, !0)
                })
            }(ve.a.definitions));
            var ye = ke,
                Ne = {
                    contentWrapper: "media-upload-EditMediaModal__contentWrapper--1gM1J",
                    footer: "media-upload-EditMediaModal__footer--rogRj",
                    loaderContainer: "media-upload-EditMediaModal__loaderContainer--t1h9t",
                    fullWidth: "media-upload-EditMediaModal__fullWidth--1h5Sb",
                    loaderCenter: "media-upload-EditMediaModal__loaderCenter--3Lntk",
                    uploadError: "media-upload-EditMediaModal__uploadError--2O8Of",
                    oopsMessage: "media-upload-EditMediaModal__oopsMessage--lINrz"
                },
                Ee = function e(t) {
                    return {
                        type: "location_id",
                        value: t.locationId,
                        displayValue: t.name
                    }
                },
                Me = function(e) {
                    function t(e) {
                        var a;
                        Object(o.a)(this, t), a = Object(r.a)(this, Object(l.a)(t).call(this, e)), Object(c.a)(Object(d.a)(Object(d.a)(a)), "apolloClient", void 0), Object(c.a)(Object(d.a)(Object(d.a)(a)), "originalDescription", void 0), Object(c.a)(Object(d.a)(Object(d.a)(a)), "originalLocations", void 0), Object(c.a)(Object(d.a)(Object(d.a)(a)), "descriptionChanged", function(e, t) {
                            var i = Object(n.a)({}, a.state.itemState, {
                                    description: t
                                }),
                                o = G(i);
                            Object.assign(i, {
                                descriptionError: o
                            }), a.setState({
                                itemState: i
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "descriptionBlurred", function() {
                            var e = G(a.state.itemState),
                                t = Object(n.a)({}, a.state.itemState, {
                                    descriptionError: e
                                });
                            a.setState({
                                itemState: t
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "locationSelectionChanged", function(e, t) {
                            var i = Object(n.a)({}, a.state.itemState, {
                                    selectedLocations: t
                                }),
                                o = Z(i);
                            Object.assign(i, {
                                locationError: o
                            }), a.setState({
                                itemState: i
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "locationSelectionBlurred", function() {
                            var e = Z(a.state.itemState),
                                t = Object(n.a)({}, a.state.itemState, {
                                    locationError: e
                                });
                            a.setState({
                                itemState: t
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "requiredFieldsComplete", function() {
                            var e = !1,
                                t = G(a.state.itemState),
                                i = Z(a.state.itemState);
                            (t || i) && (e = !0);
                            var o = Object(n.a)({}, a.state.itemState, {
                                descriptionError: t,
                                locationError: i
                            });
                            return a.setState({
                                itemState: o
                            }), !e
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "isSetsEqual", function(e, t) {
                            return e.size === t.size && Object(i.a)(e).every(function(e) {
                                return t.has(e)
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "valuesModifed", function() {
                            if (a.state.itemState.description !== a.originalDescription) return !0;
                            var e = new Set(a.state.itemState.selectedLocations.keys());
                            return !a.isSetsEqual(e, a.originalLocations)
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "submitClicked", function() {
                            if (a.valuesModifed()) {
                                if (a.requiredFieldsComplete()) {
                                    var e = [a.state.itemState.description];
                                    pe(a.apolloClient, e, a.submit, a.handleDescriptionProfanityError)
                                }
                            } else a.props.showGlobalOverlay()
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "submit", function() {
                            a.setState({
                                isSubmitting: !0
                            });
                            var e = a.isPhoto() ? {
                                mutation: Oe,
                                variables: {
                                    input: {
                                        photoId: a.props.mediaObject.id,
                                        description: a.state.itemState.description,
                                        locationId: q(a.state.itemState.selectedLocations).value
                                    },
                                    socialReference: Object(b.featureIsEnabled)("social_at_referencing_profile_links")
                                }
                            } : {
                                mutation: ye,
                                variables: {
                                    input: {
                                        videoId: a.props.mediaObject.id,
                                        description: a.state.itemState.description,
                                        locationIds: Array.from(a.state.itemState.selectedLocations.keys())
                                    },
                                    socialReference: Object(b.featureIsEnabled)("social_at_referencing_profile_links")
                                }
                            };
                            a.apolloClient.mutate(e).then(function() {
                                a.props.onSubmit && a.props.onSubmit(), a.setState({
                                    isSubmitting: !1
                                }), a.props.showGlobalOverlay()
                            }).catch(function(e) {
                                _.a.error(e), a.track("submitError", e, a.props.mediaObject.id), a.setState({
                                    isSubmitting: !1,
                                    hadSubmitError: !0
                                })
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "handleDescriptionProfanityError", function() {
                            var e = Object(g.localize)("media_upload_description_profanity_error"),
                                t = Object(n.a)({}, a.state.itemState, {
                                    descriptionError: e
                                });
                            a.setState({
                                itemState: t
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "tryAgainClicked", function() {
                            a.setState({
                                hadSubmitError: !1
                            })
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "track", function(e, t, i) {
                            var n = {
                                module: a.isPhoto() ? "photo_edit" : "video_edit",
                                action: e,
                                context: t,
                                value: i
                            };
                            Object.keys(n).forEach(function(e) {
                                return void 0 === n[e] && delete n[e]
                            }), M()(n)
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "pickSourceMp4", function(e) {
                            if (!e) return "";
                            var t = e.find(function(e) {
                                return e.url && e.url.toLowerCase().endsWith(".mp4")
                            });
                            return t ? t.url : ""
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "isPhoto", function() {
                            return "Photo" === a.props.mediaObject.__typename
                        }), Object(c.a)(Object(d.a)(Object(d.a)(a)), "render", function() {
                            var e;
                            if (a.isPhoto()) {
                                if (a.props.mediaObject.photoSizes) {
                                    var t = a.props.mediaObject.photoSizes.map(function(e) {
                                        return e
                                    });
                                    e = Object(F.pickSourceForSize)(V.width, V.height, t).url
                                }
                            } else a.props.mediaObject.sources && (e = a.pickSourceMp4(a.props.mediaObject.sources));
                            var i = u.createElement(k.TitleBar, {
                                    displayType: "LEFT_ALIGN_GRAY"
                                }, Object(g.localize)("trips_edit_CTA")),
                                n = a.state.isSubmitting ? u.createElement("div", {
                                    className: v()(Ne.loaderContainer, Object(c.a)({}, Ne.fullWidth, a.props.isMobile))
                                }, u.createElement("div", {
                                    className: Ne.loaderCenter
                                }, u.createElement(N.LoadingBubbles, {
                                    color: "dark"
                                }))) : u.createElement(y.a, {
                                    type: "primary",
                                    size: a.props.isMobile ? "fullwidth" : "default",
                                    onClick: a.submitClicked
                                }, Object(g.localize)("trips_save_CTA")),
                                o = a.state.hadSubmitError ? u.createElement("div", {
                                    className: Ne.uploadError
                                }, u.createElement("div", {
                                    className: Ne.oopsMessage
                                }, Object(g.localize)("ugc_edit_attempt_failure")), u.createElement(y.a, {
                                    type: "primary",
                                    size: "fullwidth",
                                    onClick: a.tryAgainClicked
                                }, Object(g.localize)("content_upload_fail_try_again"))) : null;
                            return u.createElement(O.Modal, {
                                name: a.props.modalName,
                                header: i
                            }, u.createElement("div", {
                                className: Ne.contentWrapper,
                                style: {
                                    display: a.state.hadSubmitError ? "none" : "block"
                                }
                            }, u.createElement(X, {
                                mediaUrl: e,
                                index: 0,
                                videoCount: 1,
                                itemState: a.state.itemState,
                                allowDelete: !1,
                                descriptionChanged: a.descriptionChanged,
                                descriptionBlurred: a.descriptionBlurred,
                                handleRemoveFile: function e() {},
                                locationSelectionChanged: a.locationSelectionChanged,
                                locationSelectionBlurred: a.locationSelectionBlurred,
                                track: function e() {},
                                isMobile: a.props.isMobile,
                                isUploading: !1,
                                uploadProgress: 0
                            }), u.createElement("div", {
                                className: Ne.footer
                            }, n), u.createElement(p.ApolloConsumer, null, function(e) {
                                return a.apolloClient = e, null
                            })), o)
                        });
                        var s = new Map;
                        if (e.mediaObject && e.mediaObject.location) {
                            var m = e.mediaObject.location;
                            s.set(m.locationId.toString(), Ee(m))
                        }
                        return e.mediaObject && e.mediaObject.locations && e.mediaObject.locations.forEach(function(e) {
                            s.set(e.locationId.toString(), Ee(e))
                        }), a.originalDescription = e.mediaObject && e.mediaObject.caption, a.originalDescription = a.originalDescription || "", a.originalLocations = new Set(s.keys()), a.state = {
                            itemState: {
                                mediaType: a.isPhoto() ? "photo" : "video",
                                description: a.originalDescription,
                                selectedLocations: s,
                                uploadSuccess: !1
                            },
                            isSubmitting: !1,
                            hadSubmitError: !1
                        }, a
                    }
                    return Object(s.a)(t, e), t
                }(u.Component),
                Fe = Object(m.connect)(function(e, t) {
                    return Object(n.a)({
                        isMobile: "MOBILE" === e.meta.device.viewportCategory
                    }, t)
                }, {
                    showGlobalOverlay: h.actions.overlays.showGlobalOverlay
                })(Me);
            a.d(t, "EditMediaModal", function() {
                return Fe
            }), a.d(t, "MediaUploaderModal", function() {
                return fe
            }), a.d(t, "MediaUploadItem", function() {
                return X
            }), a.d(t, "previewSizeDesktop", function() {
                return V
            }), a.d(t, "validateMediaDescription", function() {
                return G
            }), a.d(t, "validateMediaLocation", function() {
                return Z
            }), a.d(t, "getSingleLocation", function() {
                return q
            }), a.d(t, "LocationTagWarning", function() {
                return ie
            })
        },
        "./packages/social/feed/feedFragments/LocationFields.fragment.gql": function(e, t, a) {
            "use strict";
            var i = a("./packages/social/feed/feedFragments/PhotoSizes.fragment.gql"),
                n = {
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
            n.loc.source = {
                body: "79b9e38d4f4e"
            };
            var o = {};
            n.definitions = n.definitions.concat(function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }(i.a.definitions)), t.a = n
        },
        "./packages/social/feed/feedFragments/PhotoSizes.fragment.gql": function(e, t, a) {
            "use strict";
            var i = {
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
            i.loc.source = {
                body: "d458b47a8b35"
            }, t.a = i
        },
        "@ta/common.typeahead": function(t, a) {
            t.exports = e
        },
        "@ta/events.lifecycle": function(e, a) {
            e.exports = t
        },
        "@ta/input.drop-zone": function(e, t) {
            e.exports = a
        },
        "@ta/input.text-area": function(e, t) {
            e.exports = i
        },
        "@ta/media.common": function(e, t) {
            e.exports = n
        },
        "@ta/media.image": function(e, t) {
            e.exports = o
        },
        "@ta/overlays.custom-overlay": function(e, t) {
            e.exports = r
        },
        "@ta/overlays.headers": function(e, t) {
            e.exports = l
        },
        "@ta/overlays.modal": function(e, t) {
            e.exports = s
        },
        "@ta/overlays.toast": function(e, t) {
            e.exports = d
        },
        "@ta/social.social-reference": function(e, t) {
            e.exports = c
        },
        "@ta/styleguide.button": function(e, t) {
            e.exports = u
        },
        "@ta/styleguide.icon": function(e, t) {
            e.exports = m
        },
        "@ta/styleguide.loading": function(e, t) {
            e.exports = p
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = b
        }
    })
});
//# sourceMappingURL=media.upload.f28e7bb27b.js.map